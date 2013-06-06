Ext.define('TR.store.TimeSpans', {
    extend: 'Ext.data.Store',
    model: 'TR.model.TimeSpan',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'api/timespan',
        reader: 'json',
        appendId: false,
        noCache: false,
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined
    }
});