Ext.define('TR.controller.Coworkers', {
    extend: 'Ext.app.Controller',
    stores: ['Coworkers'],
    models: ['Coworker'],
    views: ['coworker.List',
            'coworker.Create',
            'coworker.Edit'],

    init: function() {
        this.control({
            // Selector get the component viewport and then its child coworkerlist
            // attach an Observer to double click to call editCoworker
            'viewport > coworkerlist' : {
                itemdblclick: this.openEditCoworkerForm
            },
            'coworkeredit button[action=update]': {
                click: this.updateCoworker
            },
            'coworkerlist button[action=add]' : {
                click: this.openNewCoworkerForm
            },
            'coworkercreate button[action=save]' : {
                click: this.saveCoworker
            }
        });
    },

    openEditCoworkerForm: function(grid, record) {
        // TODO: Assure this is how I think it works:
        // I think this creates a widget and loads it (in this case a new form of type window, called by its name coworkeredit)
        var view = Ext.widget('coworkeredit');

        view.down('form').loadRecord(record);
    },

    openNewCoworkerForm: function() {
        var view = Ext.widget('coworkercreate');
    },

    saveCoworker: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = Ext.create('TR.model.Coworker', values);

        win.close();
        this.getCoworkersStore().insert(0, record);
        this.getCoworkersStore().sync();
    },

    updateCoworker: function(button) {
        // Query component for parent of type window
        // Query the received window for a component it contains of type form
        // Receive the record from the form
        // Receive the values the user typed into the form (This is an array of field->value pairs)
        // Finally update the record with the new values, close the form window, and sync the Store
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

            record.set(values);
            win.close();
            this.getCoworkersStore().sync();
    },

    refreshList: function() {
        this.getCoworkersStore().sync();
    }
});
