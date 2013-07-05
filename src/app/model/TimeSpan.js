Ext.define('TR.model.TimeSpan', {
    extend: 'Ext.data.Model',
    idProperty: 'timeSpanId',
    fields: [
        {name: 'timeSpanId', type: 'long', defaultValue: null},
        {name: 'coworkerId', type: 'long', defaultValue: null},
        {name: 'projectId', type: 'long', defaultValue: null},
        {name: 'startTime', type: 'date', dateFormat: 'time'},
        {name: 'durationInMinutes', type: 'long'},
        {name: 'creationDate', type: 'date', dateFormat: 'time', defaultValue: null},
        {name: 'lastUpdatedDate', type: 'date', dateFormat: 'time', defaultValue: null}
    ]
});