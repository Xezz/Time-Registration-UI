Ext.define('TR.model.Coworker', {
    extend: 'Ext.data.Model',
    idProperty: 'coworkerId',
    fields: [
        {name: 'coworkerId', type: 'long'},
        {name: 'firstName', type:'string'},
        {name: 'lastName', type: 'string'},
        {name: 'creationDate', type: 'date', dateFormat: 'time'},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time'}
    ]/*,
    // added later
    hasMany: ['TimeSpan']*/
});