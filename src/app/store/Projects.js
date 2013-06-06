Ext.define('TR.store.Projects', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Project',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'api/project',
        reader: 'json',
        appendId: false,
        noCache: false,
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined /*,
        api: {
            read: 'api/project',
            create: 'api/project',
            update: 'api/project',
            destroy: 'api/project'
        }*/
    }
});