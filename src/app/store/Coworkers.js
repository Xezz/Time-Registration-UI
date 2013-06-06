Ext.define('TR.store.Coworkers', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Coworker',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'api/coworker',
        reader: 'json',
        appendId: false,
        noCache: false,
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined
    }
});