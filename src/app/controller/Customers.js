Ext.define('TR.controller.Customers', {
    extend: 'Ext.app.Controller',
    stores: ['Customers'],
    model: ['Customer'],
    views: ['customer.List', 'customer.Edit', 'customer.Create'],

    init: function() {
        this.control({
            'viewport > customerlist' : {
                // double clicking on a customer to open a form to edit it
                itemdblclick: this.openEditCustomerForm
            },
            'customeredit button[action=update]' : {
                click: this.editCustomer
            },
            'customercreate button[action=save]' : {
                click: this.saveCustomer
            },
            'customerlist button[action=add]' : {
                click: this.openNewCustomerForm
            }
        });
    },

    // Called on double click on an item in the grid
    openEditCustomerForm: function(grid, record) {
        // create a view from the aliasname customeredit
        var view = Ext.widget('customeredit');
        // take the view and get its subcomponent of type form
        // call loadrecord
        view.down('form').loadRecord(record);
    },

    openNewCustomerForm: function() {
        var view = Ext.widget('customercreate');
    },
    // TODO: Finish ExtJS after the whole RESTful service is done
    saveCustomer: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            values = form.getValues(),
            record = Ext.create('TR.model.Customer', values);

        win.close();
        this.getCustomersStore().insert(0, record);
        this.getCustomersStore().sync();
    },

    editCustomer: function(button) {
        var win = button.up('window'),
            form = win.down('form'),
            record = form.getRecord(),
            values = form.getValues();

        record.set(values);
        win.close();
        this.getCustomersStore().sync();
    }

});