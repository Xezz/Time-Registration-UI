Ext.define('TR.model.TimeSpan', {
    extend: 'Ext.data.Model',
    idProperty: 'timeSpanId',
    fields: [
        {name: 'timeSpanId', type: 'long'},
        {name: 'coworkerId', type: 'long'},
        {name: 'projectId', type: 'long'},
        {name: 'startTime', type: 'date', dateFormat: 'time'},
        {name: 'durationInMinutes', type: 'long'},
        {name: 'creationDate', type: 'date', dateFormat: 'time'},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time'}
    ]
});