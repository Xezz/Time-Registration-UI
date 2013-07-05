Ext.define('TR.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty: 'customerId',
    fields: [
        {name: 'customerId', type: 'long', defaultValue: null},
        {name: 'name', type: 'string'},
        {name: 'customerInfo', type: 'string'},
        {name: 'creationDate', type: 'date', dateFormat: 'time', defaultValue: null},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time', defaultValue: null}
    ],

    hasMany: [{model: 'TR.model.Project', name: 'projects'}]
});