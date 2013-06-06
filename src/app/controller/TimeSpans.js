Ext.define('TR.controller.TimeSpans', {
    extend: 'Ext.app.Controller',
    stores: ['TimeSpans'],
    models: ['TimeSpan'],
    views: [
        'timespan.List',
        'timespan.Create',
        'timespan.Edit'
        ],
    requires: [
        'Ext.window.MessageBox',
        'TR.messages.NoSelection'
        ],

    messageNoSelect: undefined,

    init: function() {
        this.control({
            'timespanlist': {
                itemdblclick: this.openEditTimeSpanForm
            },
            'timespanlist button[action=edit]': {
                click: this.editSelectedTimeSpan
            },
            'timespanlist button[action=add]': {
                click: this.openNewTimeSpanForm
            },
            'timespanlist button[action=delete]': {
                click: this.deleteSelectedTimeSpan
            },
            'timespancreate button[action=save]': {
                click: this.saveTimeSpan
            },
            'timespanedit button[action=update]': {
                click: this.updateTimeSpan
            }
        });
        this.messageNoSelect = Ext.widget('noselectionmsg').errors;
    },

    openNewTimeSpanForm: function() {
        var view = Ext.widget('timespancreate');
    },

    editSelectedTimeSpan: function(button) {
        var me = this,
            grid = button.up('grid'),
            selectionModel = grid.getSelectionModel();
        if (selectionModel.hasSelection()) {
            record = selectionModel.getSelection()[0];

            this.openEditTimeSpanForm(grid, record);
        } else {
            // MessageBox
            //Ext.widget('noselectmsgbox');
            Ext.Msg.show(me.messageNoSelect);
            /*
            Ext.Msg.show({
                title: 'Keine Auswahl',
                msg: 'Es wurde kein Eintrag ausgewählt!',
                buttons: Ext.Msg.OK,
                icon: Ext.Msg.WARNING
            });
            */
        }
    },

    openEditTimeSpanForm: function(grid, record) {
        var view = Ext.widget('timespanedit');
        //var dblStartTime = {record.startTime, recordStartTime};
        // Hax workaround to make an array instead of a single value, to suit both datepicker and timepicker ...
        //record.startTime = dblStartTime;
        view.down('form').loadRecord(record);
    },

    updateTimeSpan: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getTimeSpansStore().sync();
    },

    saveTimeSpan: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues();

        var record = Ext.create('TR.model.TimeSpan', values);


        win.close();
        this.getTimeSpansStore().insert(0, record);
        this.getTimeSpansStore().sync();
    },

    deleteSelectedTimeSpan: function(button) {
        var grid = button.up('grid'),
            selectionModel = grid.getSelectionModel();
        if (selectionModel.hasSelection) {
            this.getTimeSpansStore().remove(selectionModel.getSelection());
            this.getTimeSpansStore().sync();
        }
    }
});