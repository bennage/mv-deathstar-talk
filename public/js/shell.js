define(['plugins/router'], function(router) {
    return {
        router: router,
        activate: function() {
            router.map([{
                route: '',
                moduleId: 'listView'
            }, {
                route: ':id',
                moduleId: 'detailView'
            }, {
                route: 'edit/:id',
                moduleId: 'editView'
            }]);
            return router.activate();
        }
    };
});