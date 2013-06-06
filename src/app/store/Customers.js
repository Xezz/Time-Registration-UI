Ext.define('TR.store.Customers', {
    extend: 'Ext.data.Store',
    model: 'TR.model.Customer',
    autoLoad: true,

    proxy: {
        type: 'rest',
        url: 'api/customer',
        reader: 'json',
        appendId: false,
        noCache: false,
        headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
        pageParam: undefined,
        startParam: undefined,
        limitParam: undefined
    }
});