Ext.define('SensorDevice.view.FileDemo', {
    extend: 'Ext.form.Panel',
    requires: [
        'Ext.TitleBar',
        'Ext.form.FieldSet',
        'Ext.field.Text',
        'Ext.field.Select',
        'Ext.field.Radio'
    ],
    alias: 'widget.filedemo',
    
    config: {
        height: '100%',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'File Demo',
                defaults: {
                    xtype: 'button',
                    iconMask: true
                },
                items: [
                    {
                        itemId: 'backButton',
                        ui: 'back',
                        iconCls: 'arrow_left'
                    },
                    {
                        itemId: 'saveFormButton',
                        iconCls: 'action',
                        align: 'right'
                    },
                    {
                        itemId: 'loadFormButton',
                        iconCls: 'compose',
                        align: 'right',
                        margin: '0 20 0 0'
                    },
                    {
                        itemId: 'backupFormButton',
                        iconCls: 'arrow_down',
                        align: 'right'
                    },
                    {
                        itemId: 'restoreFormButton',
                        iconCls: 'arrow_up',
                        align: 'right',
                        margin: '0 20 0 0'
                    },
                    {
                        itemId: 'deleteFormButton',
                        iconCls: 'delete',
                        align: 'right',
                        margin: '0 20 0 0'
                    },
                    {
                        itemId: 'trashPersonalInfoButton',
                        iconCls: 'trash',
                        align: 'right'
                    }
                ]
            },
            {
                xtype: 'fieldset',
                title: 'About you',
                instructions: 'Tell us about yourself',
                items: [
                    {
                        xtype: 'textfield',
                        name: 'name',
                        label: 'Name',
                        value: ''
                    },
                    {
                        xtype: 'textfield',
                        name: 'surname',
                        label: 'Surname',
                        value: ''
                    },
                    {
                        xtype: 'textfield',
                        name: 'address',
                        label: 'Address',
                        value: ''
                    },
                    {
                        xtype: 'radiofield',
                        name: 'sex',
                        label: 'Male',
                        value: 'male',
                        checked: true
                    },
                    {
                        xtype: 'radiofield',
                        name: 'sex',
                        label: 'Female',
                        value: 'female'
                    },
                    {
                        xtype: 'selectfield',
                        name: 'color',
                        label: 'Favourite color',
                        placeHolder: 'Select a color',
                        autoSelect: false,
                        value: null,
                        usePicker: true,
                        options: [
                            { text: 'Red', value: 'red' },
                            { text: 'Orange', value: 'orange' },
                            { text: 'Yellow', value: 'yellow' },
                            { text: 'Green', value: 'green' },
                            { text: 'Blue', value: 'blue' },
                            { text: 'Violet', value: 'violet' }
                        ]
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'touch',
                        label: 'Sencha Touch'
                    },
                    {
                        xtype: 'checkboxfield',
                        name: 'cordova',
                        label: 'Apache Cordova'
                    }
                ]
            }
        ],
        
        listeners: [
            {
                delegate: '#saveFormButton',
                event: 'tap',
                fn: 'onSaveFormButton'
            },
            {
                delegate: '#loadFormButton',
                event: 'tap',
                fn: 'onLoadFormButton'
            },
            {
                delegate: '#backupFormButton',
                event: 'tap',
                fn: 'onBackupFormButton'
            },
            {
                delegate: '#restoreFormButton',
                event: 'tap',
                fn: 'onRestoreFormButton'
            },
            {
                delegate: '#deleteFormButton',
                event: 'tap',
                fn: 'onDeleteFormButton'
            },
            {
                delegate: '#trashPersonalInfoButton',
                event: 'tap',
                fn: 'onTrashPersonalInfoButton'
            }
        ]
    },
    
    onSaveFormButton: function(scope, e , eOpts) {
        console.log('onSaveFormButton');
        
        this.fireEvent('saveFormCommand', this);
    },
    
    onLoadFormButton: function(scope, e , eOpts) {
        console.log('onLoadFormButton');
        
        this.fireEvent('loadFormCommand');
    },
    
    onBackupFormButton: function(scope, e , eOpts) {
        console.log('onBackupFormButton');
        
        this.fireEvent('backupFormCommand');
    },
    
    onRestoreFormButton: function(scope, e , eOpts) {
        console.log('onRestoreFormButton');
        
        this.fireEvent('restoreFormCommand');
    },
    
    onDeleteFormButton: function(scope, e , eOpts) {
        console.log('onDeleteFormButton');
        
        this.fireEvent('deleteFormCommand', this);
    },
    
    onTrashPersonalInfoButton: function(scope, e , eOpts) {
        console.log('onTrashPersonalInfoButton');
        
        this.fireEvent('trashPersonalInfoCommand');
    }
});