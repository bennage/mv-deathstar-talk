define(['text!templates/edit.hbs'], function (templateText) {
  var EditView = Backbone.View.extend({
    template: Handlebars.compile(templateText),

    events: {
      'click #saveBtn': 'onSave',
      'click #cancelBtn': 'onCancel'
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));
    },

    onSave: function (evt) {
      var self = this;
      var model = this.model;

      evt.preventDefault();
      this.resetValidationErrors();
      var formData = this.$el.find('form').serializeArray();
      var attributes = _.object(_.pluck(formData, 'name'), _.pluck(formData, 'value'));

      model.save(attributes, {
        wait: true,
        success: function () {
          window.history.back();
        },
        error: function (model, xhr, options) {
          if (xhr.status === 200) {
            model.set(attributes);
            window.history.back();
          } else {
            var errors = xhr.responseJSON;
            self.showErrors(errors);
          }
        }
      });
    },

    onCancel: function (evt) {
      evt.preventDefault();
      window.history.back();
    },

    resetValidationErrors: function () {
      this.$el.find('.has-error').removeClass('has-error');
      this.$el.find('.validation-error').remove();
    },

    showErrors: function (errors) {
      var $el = this.$el;
      _.keys(errors).forEach(function(property) {
        var field = $el.find('input[name=' + property + ']');
        field.parent().parent().addClass('has-error');
        field.after('<span class="validation-error">' + errors[property] + '</span>');
      });
    }
  });

  return EditView;
});