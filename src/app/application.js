Ext.define('TR.Application', {
    name: 'TR',

    extend: 'Ext.app.Application',
    requires: ['Ext.window.MessageBox'],

    controllers: [
      'Coworkers',
      'Customers',
      'Projects',
      'TimeSpans'
    ],

    stores: [
        'Coworkers',
        'Customers',
        'Projects',
        'TimeSpans'
    ],

    views: [
        'coworker.List',
        'project.List',
        'customer.List',
        'timespan.List',
    ]

/*    launch: function() {
        delete Ext.tip.Tip.prototype.minWidth;
        Ext.create('Ext.container.Viewport', {
            layout: 'border',
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
                    //height: flex 1
                }, {
                    xtype: 'customerlist',
                    region: 'west',
                    flex: 0.5,
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
    }
    */
});
