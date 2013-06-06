Ext.define('TR.view.customer.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.customeredit',
    title: 'Kunde - Bearbeiten',
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
                        name: 'customerInfo',
                        fieldLabel: 'Beschreibung'
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