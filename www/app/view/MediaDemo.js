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
    
    onCaptureAudioButton: function(scope, e, eOpts) {
        console.log('onCaptureAudioButton');
        this.fireEvent('captureAudioCommand', this);
    },
    
    onCaptureVideoButton: function(scope, e, eOpts) {
        console.log('onCaptureVideoButton');
        this.fireEvent('captureVideoCommand', this);
    },
    
    onCaptureImageButton: function(scope, e, eOpts) {
        console.log('onCaptureImageButton');
        this.fireEvent('captureImageCommand', this);
    }
});