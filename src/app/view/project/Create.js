Ext.define('TR.view.project.Create', {
    extend: 'Ext.window.Window',
    alias: 'widget.projectcreate',
    title: 'Projekt - Erstellen',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        fieldLabel: 'Name'
                    }, {
                        xtype: 'textarea',
                        name: 'description',
                        fieldLabel: 'Beschreibung'
                    }, {
                        // Select a Customer this belongs to
                        xtype: 'combobox',
                        name: 'customerId',
                        fieldLabel: 'Kunde',
                        displayField: 'name',
                        valueField: 'customerId',
                        queryMode: 'remote',
                        forceSelection: true,
                        store: 'Customers'
                    }
                ]
            }
        ];

        this.buttons = [
            {
                text: 'Speichern',
                action: 'save'
            }, {
                text: 'Abbrechen',
                scope: this,
                handler: this.close
            }
        ];

        this.callParent(arguments);
    }
});