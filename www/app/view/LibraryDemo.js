Ext.define('SensorDevice.view.LibraryDemo', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.Audio',
        'Ext.Video'
    ],
    alias: 'widget.librarydemo',
    
    config: {
        height: '100%',
        layout: {
            type: 'card',
            animation: 'fade'
        },
        setScrollable: true,
        items: [
            {
                /*
                 * item #0
                 */
                items: [
                    {
                        xtype: 'titlebar',
                        docked: 'top',
                        title: 'Library',
                        
                        defaults: {
                            xtype: 'button',
                            iconMask: true
                        },
                        items: [
                            {
                                itemId: 'trashLibraryButton',
                                iconCls: 'trash',
                                align: 'right'
                            }
                        ]
                    },
                    {
                        xtype: 'list',
                        height: '100%',
                        itemId: 'mediaList',
                        store: 'AudioVideos',
                        loadingText: 'Loading media...',
                        emptyText: 'No media found.',
                        itemTpl: 'Name: {name}, Type: {type}, Timestamp: {timestamp}',
                        onItemDisclosure: true,
                    }
                ]
            },
            {
                /*
                 * item #1
                 */
                items: [
                    {
                        xtype: 'titlebar',
                        title: 'Audio',
                        docked: 'top',
                        defaults: {
                            xtype: 'button',
                            iconMask: true
                        },
                        items: [
                            {
                                itemId: 'backLibraryButton',
                                ui: 'back',
                                iconCls: 'arrow_left'
                            },
                            {
                                itemId: 'playAudioButton',
                                text: 'Play',
                                align: 'right'
                            },
                            {
                                itemId: 'pauseAudioButton',
                                text: 'Pause',
                                align: 'right'
                            },
                            {
                                itemId: 'stopAudioButton',
                                text: 'Stop',
                                align: 'right'
                            }
                        ]
                    },
                    {
                        xtype: 'audio',
                        autoPause: true,
                        itemId: 'audioItem',
                        hidden: true
                    }
                ]
            },
            {
                /*
                 * item #2
                 */
                items: [
                    {
                        xtype: 'titlebar',
                        title: 'Video',
                        docked: 'top',
                        defaults: {
                            xtype: 'button',
                            iconMask: true
                        },
                        items: [
                            {
                                itemId: 'backLibraryButton',
                                ui: 'back',
                                iconCls: 'arrow_left'
                            },
                            {
                                itemId: 'playVideoButton',
                                text: 'Play',
                                align: 'right'
                            },
                            {
                                itemId: 'pauseVideoButton',
                                text: 'Pause',
                                align: 'right'
                            },
                            {
                                itemId: 'stopVideoButton',
                                text: 'Stop',
                                align: 'right'
                            }
                        ]
                    },
                    {
                        xtype: 'video',
                        autoPause: true,
                        itemId: 'videoItem'
                    }
                ]
            }
        ],
        
        listeners: [
            {
                delegate: '#trashLibraryButton',
                event: 'tap',
                fn: 'onTrashLibraryButton'
            },
            {
                delegate: '#mediaList',
                event: 'disclose',
                fn: 'onMediaListDisclose'
            },
            {
                delegate: '#backLibraryButton',
                event: 'tap',
                fn: 'onBackLibraryButton'
            },
            {
                delegate: '#playAudioButton',
                event: 'tap',
                fn: 'onPlayAudioButton'
            },
            {
                delegate: '#pauseAudioButton',
                event: 'tap',
                fn: 'onPauseAudioButton'
            },
            {
                delegate: '#stopAudioButton',
                event: 'tap',
                fn: 'onStopAudioButton'
            },
            {
                delegate: '#playVideoButton',
                event: 'tap',
                fn: 'onPlayVideoButton'
            },
            {
                delegate: '#pauseVideoButton',
                event: 'tap',
                fn: 'onPauseVideoButton'
            },
            {
                delegate: '#stopVideoButton',
                event: 'tap',
                fn: 'onStopVideoButton'
            }
        ]
    },
    
    onTrashLibraryButton: function(scope, e, eOpts) {
        console.log('onTrashLibraryButton');
        this.fireEvent('trashLibraryCommand', this);
    },
    
    onMediaListDisclose: function(scope, record, target, index, evt, options) {
        console.log('onMediaListDisclose');
        this.fireEvent('mediaListDiscloseCommand', this, record, index);
    },
    
    onBackLibraryButton: function(scope, e, eOpts) {
        console.log('onBackLibraryButton');
        this.fireEvent('backLibraryCommand', this);
    },
    
    onPlayAudioButton: function(scope, e, eOpts) {
        console.log('onPlayAudioButton');
        this.fireEvent('playAudioCommand', this);
    },
    
    onPauseAudioButton: function(scope, e, eOpts) {
        console.log('onPauseAudioButton');
        this.fireEvent('pauseAudioCommand', this);
    },
    
    onStopAudioButton: function(scope, e, eOpts) {
        console.log('onStopAudioButton');
        this.fireEvent('stopAudioCommand', this);
    },
    
    onPlayVideoButton: function(scope, e, eOpts) {
        console.log('onPlayVideoButton');
        this.fireEvent('playVideoCommand', this);
    },
    
    onPauseVideoButton: function(scope, e, eOpts) {
        console.log('onPauseVideoButton');
        this.fireEvent('pauseVideoCommand', this);
    },
    
    onStopVideoButton: function(scope, e, eOpts) {
        console.log('onStopVideoButton');
        this.fireEvent('stopVideoCommand', this);
    }
});