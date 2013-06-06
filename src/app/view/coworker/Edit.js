Ext.define('TR.view.coworker.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.coworkeredit',
    title: 'Mitarbeiter - Bearbeiten',
    layout: 'fit',
    autoShow: true,

    initComponent: function() {
        this.items = [
            {
                xtype: 'form',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'firstName',
                        fieldLabel: 'Vorname'
                    }, {
                        xtype: 'textfield',
                        name: 'lastName',
                        fieldLabel: 'Nachname'
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