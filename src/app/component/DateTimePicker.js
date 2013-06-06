/**
* @auther Elvis Hsu
* @class Ext.ux.form.field.DateTime
* @extends Ext.form.FieldContainer  
* 
* inspired by http://www.sencha.com/forum/showthread.php?134345-Ext.ux.form.field.DateTime
* copied from: http://elvishsu66.wordpress.com/2011/12/06/a-little-bit-different-from-existing-ext-ux-form-field-datetime/
* Changed to support submitFormat
* This class is used for user input 
*/
Ext.define('TR.component.DateTimePicker', {
    extend:'Ext.form.FieldContainer',
    mixins: {
        field: 'Ext.form.field.Field'
    },
    alias: 'widget.datetimepicker',
    layout: 'hbox',
    height: 22,
    /**
    * set combine errors to true for showing errorr
    */
    combineErrors: true,
    /**
    * set msg taeget to side
    */
    msgTarget :'side',  
    /**
    * we want hbox layout
    */
    layout: 'hbox',
    /**
    * set readonly to false
    */
    readOnly: false,    
    /**
    * @cfg {String} dateFormat
    * Convenience config for specifying the format of the date portion.
    * This value is overridden if format is specified in the dateConfig.
    * The default is 'Y-m-d'
    */
    dateFormat: 'd.m.Y',
    /**
     * @cfg {String} timeFormat
     * Convenience config for specifying the format of the time portion.
     * This value is overridden if format is specified in the timeConfig. 
     * The default is 'H:i'
     */
    timeFormat: 'H:i',
    /**
    * the datefield configurations
    */
    dateConfig:{},
    /**
    * the time field configurations
    */
    timeConfig:{},
    /**
    * The actual date value
    */
    dateValue: null,
    /**
     * @property dateField
     * @type Ext.form.field.Date
     */
    dateField: null,
    /**
     * @property timeField
     * @type Ext.form.field.Time
     */
    timeField: null,    
    /**
    * @cfg {String} submitFormat
    * Format to use when Submitting
    */
    submitFormat: 'time',

    /**
    * initialising the components
    */

    initComponent: function() {
        var me = this,
            key,
            tab;
        // set default to no items
        me.items = me.items || [];
        
        me.dateField = Ext.create('Ext.form.field.Date', Ext.apply({
            format:me.dateFormat,
            flex:1,
            isFormField:false, //exclude from field query's
            submitValue:false
        }, me.dateConfig));
        me.items.push(me.dateField);
        
        me.timeField = Ext.create('Ext.form.field.Time', Ext.apply({
            format:me.timeFormat,
            flex:1,
            isFormField:false, //exclude from field query's
            submitValue:false
        }, me.timeConfig));
        me.items.push(me.timeField);
        
        for (var i = 0; i < me.items.length; i++) {
            me.items[i].on('focus', Ext.bind(me.onItemFocus, me));
            me.items[i].on('blur', Ext.bind(me.onItemBlur, me));
            me.items[i].on('specialkey', function(field, event){
                key = event.getKey();
                tab = (key == event.TAB);
                
                if (tab && me.focusedItem == me.dateField) {
                    event.stopEvent();
                    me.timeField.focus();
                    return;
                }
                
                me.fireEvent('specialkey', field, event);
            });
        }

        me.callParent();
        
        // this dummy is necessary because Ext.Editor will not check whether an inputEl is present or not
        /* REMOVED THIS: Might have been an old version, I had the error:
                Uncaught TypeError: Object #<Object> has no method 'removeAttribute'
        me.inputEl = {
            dom:{},
            swallowEvent:function(){}
        };
        */
        me.initField();
    },
    /**
     * Try to focus this component.
     * @param {Boolean} [selectText] If applicable, true to also select the text in this component
     * @param {Boolean/Number} [delay] Delay the focus this number of milliseconds (true for 10 milliseconds).
     * @return {Ext.Component} this
     */
    focus:function(){
        this.callParent();
        this.dateField.focus();
    },

    onItemFocus:function(item){
        if (this.blurTask){
            this.blurTask.cancel();
        }
        this.focusedItem = item;
    },
    
    onItemBlur:function(item){
        var me = this;
        if (item != me.focusedItem){ return; }
        // 100ms to focus a new item that belongs to us, otherwise we will assume the user left the field
        me.blurTask = new Ext.util.DelayedTask(function(){
            me.fireEvent('blur', me);
        });
        me.blurTask.delay(100);
    },    
    /**
     * Returns the current data value of the field. The type of value returned is particular to the type of the
     * particular field (e.g. a Date object for {@link Ext.form.field.Date}).
     * @return {Object} value The field value
     */
    getValue: function() {
        var me = this,
            value = null,
            date = me.dateField.getSubmitValue(),
            time = me.timeField.getSubmitValue();
        if(date){
            if(time){
                var format = me.getFormat()
                value = Ext.Date.parse(date + ' ' + time,format)
            }else{
                value = me.dateField.getValue()
            }
        }
        return value
    },
    /**
     * Sets a data value into the field and runs the change detection and validation.
     * @param {Object} value The value to set
     * @return {Ext.form.field.Field} this
     */
    setValue: function(value){
        if (Ext.isString(value)){
            value = Ext.Date.parse(value, this.getFormat()); //this.dateTimeFormat
        }
        this.dateField.setValue(value);
        this.timeField.setValue(value);
    },
    /**
     * Resets the field's {@link #originalValue} property so it matches the current {@link #getValue value}. This is
     * called by {@link Ext.form.Basic}.{@link Ext.form.Basic#setValues setValues} if the form's
     * {@link Ext.form.Basic#trackResetOnLoad trackResetOnLoad} property is set to true.
     */
    resetOriginalValue: function() {
        var me = this;
        me.originalValue = me.getValue();
        me.dateField.resetOriginalValue();
        me.timeField.resetOriginalValue();
        me.checkDirty();
    },
    /**
     * Returns the value that would be included in a standard form submit for this field. This will be combined with the
     * field's name to form a name=value pair in the {@link #getSubmitData submitted parameters}. If an empty string is
     * returned then just the name= will be submitted; if null is returned then nothing will be submitted.
     *
     * Note that the value returned will have been {@link #processRawValue processed} but may or may not have been
     * successfully {@link #validate validated}.
     *
     * @return {String} The value to be submitted, or null.
     */
    getSubmitValue: function(){   
        var me = this,
            format = me.getSubmitFormat(),
            value = me.getValue();
        //value = Ext.Date.format(value, format);
        // Returns timestamp
        return value ? Ext.Date.format(value, 'time') : null;
    },         
    /**
     * Returns the parameter(s) that would be included in a standard form submit for this field. Typically this will be
     * an object with a single name-value pair, the name being this field's {@link #getName name} and the value being
     * its current stringified value. More advanced field implementations may return more than one name-value pair.
     *
     * Note that the values returned from this method are not guaranteed to have been successfully {@link #validate
     * validated}.
     *
     * @return {Object} A mapping of submit parameter names to values; each value should be a string, or an array of
     * strings if that particular name has multiple values. It can also return null if there are no parameters to be
     * submitted.
     */
    getSubmitData: function(){
        var me = this,
            data = null;
            
        if (!me.disabled && me.submitValue && !me.isFileUpload()) {
            data = {};
            data[me.getName()] = '' + me.getSubmitValue();
        }
        return data;
    },
    /**
    * Gets the current date time field format
    */
    getFormat: function(){
        var me = this;
        return (me.dateField.submitFormat || me.dateField.format) + " " + (me.timeField.submitFormat || me.timeField.format)
    },

    getSubmitFormat: function() {
        var me = this;
        return me.submitFormat ? me.submitFormat : me.getFormat;
    },
    /**
     * Replaces any existing {@link #minValue} with the new value and refreshes the Date picker.
     * @param {Date} value The minimum date that can be selected
     */    
    setMinValue: function(date){
        var me = this;
        me.dateField.setMinValue(date);
    },
    /**
     * Replaces any existing {@link #maxValue} with the new value and refreshes the Date picker.
     * @param {Date} value The maximum date that can be selected
     */    
    setMaxValue: function(date){
        var me = this;
        me.dateField.setMaxValue(date);
    },
    validate: function(){
        var me = this;
        return me.dateField.validate();
    }
}); 