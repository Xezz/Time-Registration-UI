Ext.define('TR.messages.NoSelection', {
    requires: ['Ext.window.MessageBox'],
    alias: 'widget.noselectionmsg',
    errors: {
        title: 'Keine Auswahl',
        msg: 'Es wurde kein Eintrag ausgewählt!',
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.WARNING
    }
});