define(['plugins/router'], function(router) {
    return {
        router: router,
        activate: function() {
            router.map([{
                route: '',
                title: 'List',
                moduleId: 'listView'
            }, {
                route: ':id',
                title: 'Details',
                moduleId: 'detailView'
            }, {
                route: 'edit/:id',
                title: 'Edit',
                moduleId: 'editView'
            }]);
            return router.activate();
        }
    };
});