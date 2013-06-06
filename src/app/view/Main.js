Ext.define('TR.view.Main', {
    extend: 'Ext.container.Container',
    requires:[
        'Ext.tab.Panel',
        'Ext.layout.container.Border'
    ],
    
    xtype: 'app-main',

    layout: {
        type: 'border'
    },

    items: [
        {
            xtype: 'coworkerlist',
            region: 'north',
            flex: 0.5,
            collapsible: true,
            split: true

        }, {
            xtype: 'projectlist',
            region: 'center'
        }, {
            xtype: 'customerlist',
            region: 'west',
            flex: 0.6,
            collapsible: true,
            split: true
        }, {
            xtype: 'timespanlist',
            region: 'south',
            flex: 0.5,
            collapsible: true,
            split: true
        }
    ]
});