Ext.define('TR.view.timespan.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.timespanedit',
    title: 'Zeitspanne - Bearbeiten',
    layout: 'fit',
    autoShow: true,
    requires: 'TR.component.DateTimePicker',

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'durationInMinutes',
                        fieldLabel: 'Dauer (m)'
                    }, {
                        xtype: 'datetimepicker',
                        name: 'startTime',
                        fieldLabel: 'Startzeitpunkt'
                    }, {
                       // Select a Customer this belongs to
                       xtype: 'combobox',
                       name: 'projectId',
                       fieldLabel: 'Projekt',
                       displayField: 'name',
                       valueField: 'projectId',
                       queryMode: 'local',
                       forceSelection: true,
                       store: 'Projects'
                   }, {
                       // Select a Coworker this belongs to
                       xtype: 'combobox',
                       name: 'coworkerId',
                       fieldLabel: 'Mitarbeiter',
                       displayField: 'lastName',
                       valueField: 'coworkerId',
                       queryMode: 'local',
                       forceSelection: true,
                       store: 'Coworkers'
                   }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Speichern',
                action: 'update'
            }, {
                text: 'Abbrechen',
                scope: this,
                handler: this.close
            }
        ];
        this.callParent(arguments);
    }
});