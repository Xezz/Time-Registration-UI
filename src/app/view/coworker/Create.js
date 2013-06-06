Ext.define('TR.view.coworker.Create', {
    extend: 'Ext.window.Window',
    alias: 'widget.coworkercreate',
    title: 'Mitarbeiter - Erstellen',
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
                action: 'save'
            }, {
                text: 'Abbrechen',
                scope: this,
                handle: this.close
            }
        ];

        this.callParent(arguments);
    }
});