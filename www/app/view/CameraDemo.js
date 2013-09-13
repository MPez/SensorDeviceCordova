Ext.define('SensorDevice.view.CameraDemo', {
    extend: 'Ext.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    alias: 'widget.camerademo',
    
    config: {
        styleHtmlContent: true,
        
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Camera Demo',
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
                itemId: 'cameraButton',
                text: 'Take a picture using Cordova\'s APIs',
                margin: '20 10',
                height: 40
            },
            {
                xtype: 'button',
                itemId: 'galleryButton',
                text: 'Load from gallery using Cordova\'s APIs',
                margin: '20 10',
                height: 40
            }
        ],
        
        listeners: [
            {
                delegate: '#cameraButton',
                event: 'tap',
                fn: 'onCameraButtonTap'
            },
            {
                delegate: '#galleryButton',
                event: 'tap',
                fn: 'onGalleryButtonTap'
            }
        ]
    },
    
    onCameraButtonTap: function(scope, e, eOpts) {
        console.log('onCameraButtonTap');
        
        this.fireEvent('cameraButtonCommand', this);
    },
    
    onGalleryButtonTap: function(scope, e, eOpts) {
        console.log('onGalleryButtonTap');
        
        this.fireEvent('galleryButtonCommand', this);
    }
});