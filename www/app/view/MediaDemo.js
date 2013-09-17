/**
 * MediaDemo rappresenta la vista che visualizza i pulsanti tramite i quali è possibile
 * catturare video, audio e immagini utilizzando le API di Apache Cordova
 */
Ext.define('SensorDevice.view.MediaDemo', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    alias: 'widget.mediademo',
    
    config: {
        styleHtmlContent: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Media Demo',
                items: [
                    {
                        xtype: 'button',
                        itemId: 'backButton',
                        ui: 'back',
                        iconCls: 'arrow_left',
                        iconMask: true
                    }
                ]
            },
            {
                xtype: 'button',
                text: 'Capture audio',
                itemId: 'captureAudioButton',
                height: 40,
                margin: '20 10'
            },
            {
                xtype: 'button',
                text: 'Capture video',
                itemId: 'captureVideoButton',
                height: 40,
                margin: '20 10'
            },
            {
                xtype: 'button',
                text: 'Capture Image',
                itemId: 'captureImageButton',
                height: 40,
                margin: '20 10'
            }
        ],
        
        listeners: [
            {
                delegate: '#captureAudioButton',
                event: 'tap',
                fn: 'onCaptureAudioButton'
            },
            {
                delegate: '#captureVideoButton',
                event: 'tap',
                fn: 'onCaptureVideoButton'
            },
            {
                delegate: '#captureImageButton',
                event: 'tap',
                fn: 'onCaptureImageButton'
            }
        ]
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di cattura audio;
     * rilancia l'evento che verrà catturato dal controller
     */
    onCaptureAudioButton: function(scope, e, eOpts) {
        console.log('onCaptureAudioButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di cattura audio
         * @param {Ext.Component} this
         */
        this.fireEvent('captureAudioCommand', this);
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di cattura video;
     * rilancia l'evento che verrà catturato dal controller
     */
    onCaptureVideoButton: function(scope, e, eOpts) {
        console.log('onCaptureVideoButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di cattura video
         * @param {Ext.Component} this
         */
        this.fireEvent('captureVideoCommand', this);
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di cattura immagini;
     * rilancia l'evento che verrà catturato dal controller
     */
    onCaptureImageButton: function(scope, e, eOpts) {
        console.log('onCaptureImageButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di cattura immagini
         * @param {Ext.Component} this
         */
        this.fireEvent('captureImageCommand', this);
    }
});