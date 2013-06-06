Ext.define('TR.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty: 'customerId',
    fields: [
        {name: 'customerId', type: 'long'},
        {name: 'name', type: 'string'},
        {name: 'customerInfo', type: 'string'},
        {name: 'creationDate', type: 'date', dateFormat: 'time'},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time'}
    ],

    hasMany: [{model: 'TR.model.Project', name: 'projects'}]
});