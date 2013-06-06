Ext.define('TR.view.timespan.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.timespanlist',
    title: 'Zeitspannen - Liste',
    store: 'TimeSpans',

    initComponent: function() {
        this.columns = [
            {header: 'ID', dataIndex: 'timeSpanId', width: 60},
            {header: 'Startzeit', dataIndex: 'startTime', width: 140, renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')},
            {header: 'Dauer', dataIndex: 'durationInMinutes', width: 60},
            {header: 'Mitarbeiter', dataIndex: 'coworkerId', flex: 1, renderer: this.coworkerNameRenderer},
            {header: 'Projekt', dataIndex: 'projectId', flex: 1, renderer: this.projectNameRenderer}/*,
            {header: }*/
        ];
        this.callParent(arguments);
    },

    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xytpe: 'button',
                    text: 'Neu',
                    action: 'add'
                }, {
                    xtype: 'button',
                    text: 'Löschen',
                    action: 'delete'
                }, {
                    xtype: 'button',
                    text: 'Ändern',
                    action: 'edit'
                }
            ]
        }
    ],

    // See: http://stackoverflow.com/questions/6554214/
    coworkerNameRenderer: function(value) {
        // Lookup Store by name
        // Get record by Id
        // Get field-value by field-name
        return this.getDisplayValueByStoreAndKey(value, 'Coworkers', 'lastName');
    },

    projectNameRenderer: function(value) {
        return this.getDisplayValueByStoreAndKey(value, 'Projects', 'name');
    },

    getDisplayValueByStoreAndKey: function(value, storeName, keyName) {
        var searchedStore = Ext.data.StoreManager.lookup(storeName);
        if (searchedStore === null) return '';
        var searchedRecord = searchedStore.getById(value);
        if (searchedRecord === null) return '';
        var retVal = searchedRecord.get(keyName);
        if (retVal === null) return '';
        return retVal;
    }





});