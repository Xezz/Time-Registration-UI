Ext.define('TR.view.project.List', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.projectlist',
    title: 'Projekte - Liste',
    store: 'Projects',

    initComponent: function() {

        this.columns = [
            {header: 'ID', dataIndex: 'projectId', width: 60},
            {header: 'Name', dataIndex: 'name', flex: 1},
            {header: 'Beschreibung', dataIndex: 'description', flex: 2},
            {header: 'Erstellt am', dataIndex: 'creationDate', width: 140, renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')},
            {header: 'Bearbeitet am', dataIndex: 'lastUpdatedDate', width: 140, renderer: Ext.util.Format.dateRenderer('d.m.Y H:i')}
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
                }
            ]
        }
    ]

});