Ext.define('TR.view.customer.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',
    title: 'Kunden - Liste',
    store: 'Customers',

    initComponent: function() {

        this.columns = [
            {header: 'ID', dataIndex: 'customerId', width: 60},
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Beschreibung', dataIndex: 'customerInfo', flex: 2},
            {header: 'Erstellt am', dataIndex: 'creationDate', width: 140, renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')},
            {header: 'Bearbeitet am', dataIndex: 'lastUpdatedDate', width: 140, renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')}
        ];
        this.callParent(arguments);
    },

    // Add tools to the header!
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            items: [
                {
                    xytpe: 'button',
                    text: 'Neuer Eintrag',
                    action: 'add'
                }
            ]
        }
    ]
});