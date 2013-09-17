/**
 * FileDemo rappresenta la vista che visualizza un form nella quale si possono
 * inserire alcuni dati personali dell'utente del dispositivo i quali posso essere salvati
 * nel relativo store; una volta salvati, è possibile effettuare il backup e il restore di tale store
 * e la cancellazione del record presente.
 */
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
        /**
         * @cfg {String} height Proprietà CSS che identifica l'altezza del Container;
         * da impostare a 100% per consentire la visualizzazione della lista.
         */
        height: '100%',
        items: [
            /*
             * Barra del titolo contenente i pulsanti di ritorno alla pagina principale,
             * di salvataggio e caricamento del record nello store, di backup e restore dello store
             * nella memoria interna del telefono, di pulizia dei campi della form e di cancellazione del
             * record presente nello store.
             */
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
            /*
             * Form contenente i campi relativi alle informazioni personali dell'utente.
             */
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
    /**
     * Metodo che cattura l'evento tap del pulsante di salvataggio della form
     * e rilancia l'evento che verrà catturato dal controller
     */
    onSaveFormButton: function(scope, e , eOpts) {
        console.log('onSaveFormButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di salvataggio della form
         * @param {Ext.Component} this
         */
        this.fireEvent('saveFormCommand', this);
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di caricamento del record
     * e rilancia l'evento che verrà catturato dal controller
     */
    onLoadFormButton: function(scope, e , eOpts) {
        console.log('onLoadFormButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di caricamento del record
         */
        this.fireEvent('loadFormCommand');
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di backup dello store
     * e rilancia l'evento che verrà catturato dal controller
     */
    onBackupFormButton: function(scope, e , eOpts) {
        console.log('onBackupFormButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di backup dello store
         */
        this.fireEvent('backupFormCommand');
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di restore dello store
     * e rilancia l'evento che verrà catturato dal controller
     */
    onRestoreFormButton: function(scope, e , eOpts) {
        console.log('onRestoreFormButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di restore dello store
         */
        this.fireEvent('restoreFormCommand');
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di pulizia dei campi della form
     * e rilancia l'evento che verrà catturato dal controller
     */
    onDeleteFormButton: function(scope, e , eOpts) {
        console.log('onDeleteFormButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di pulizia dei campi della form
         */
        this.fireEvent('deleteFormCommand', this);
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di eliminazione del record dallo store
     * e rilancia l'evento che verrà catturato dal controller
     */
    onTrashPersonalInfoButton: function(scope, e , eOpts) {
        console.log('onTrashPersonalInfoButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di eliminazione del record dallo store
         */
        this.fireEvent('trashPersonalInfoCommand');
    }
});