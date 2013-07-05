Ext.define('TR.model.Coworker', {
    extend: 'Ext.data.Model',
    idProperty: 'coworkerId',
    fields: [
        {name: 'coworkerId', type: 'long', defaultValue: null},
        {name: 'firstName', type:'string'},
        {name: 'lastName', type: 'string'},
        {name: 'creationDate', type: 'date', dateFormat: 'time', defaultValue: null},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time', defaultValue: null}
    ]/*,
    // added later
    hasMany: ['TimeSpan']*/
});