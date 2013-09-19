/**
 * LibraryDemo rappresenta la vista che visualizza i video e le registrazione
 * effettuare tramite la fotocamera e il microfono del dispositivo.
 */
Ext.define('SensorDevice.view.LibraryDemo', {
    extend: 'Ext.Container',
    requires: [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.Audio',
        'Ext.Video',
        'Ext.Img'
    ],
    alias: 'widget.librarydemo',
    
    config: {
        /**
         * @cfg {String} height Proprietà CSS che identifica l'altezza del Container;
         * da impostare a 100% per consentire la visualizzazione della lista.
         */
        height: '100%',
        /**
         * @cfg
         * Layout di tipo card che permette di scorrere le diverse pagine.
         */
        layout: {
            type: 'card',
            animation: 'fade'
        },
        items: [
            /*
            * item 0
            * Comprende la barra del titolo e la lista relativa ai video e audio
            * salvati nel relativo store
            */
            {
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
            /*
            * item 1
            * Comprende la barra del titolo e il componente audio da riprodurre
            */
            {
                items: [
                    {
                        xtype: 'titlebar',
                        itemId: 'audioTitlebar',
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
            /*
            * item 2
            * Comprende la barra del titolo e il componente video da riprodurre
            */
            {
                items: [
                    {
                        xtype: 'titlebar',
                        itemId: 'videoTitlebar',
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
                        itemId: 'videoItem',
                        width: 640,
                        height: 320
                    }
                ]
            },
            /*
             * item 3
             * Comprende la barra del titolo e l'immagine da visualizzare
             */
            {
                items: [
                    {
                        xtype: 'titlebar',
                        itemId: 'imageTitlebar',
                        title: 'Image',
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
                            }
                        ]
                    },
                    {
                        xtype: 'img',
                        itemId: 'imageItem',
                        height: 400,
                        width: 400
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
                fn: 'onPlayButton'
            },
            {
                delegate: '#pauseAudioButton',
                event: 'tap',
                fn: 'onPauseButton'
            },
            {
                delegate: '#stopAudioButton',
                event: 'tap',
                fn: 'onStopButton'
            },
            {
                delegate: '#playVideoButton',
                event: 'tap',
                fn: 'onPlayButton'
            },
            {
                delegate: '#pauseVideoButton',
                event: 'tap',
                fn: 'onPauseButton'
            },
            {
                delegate: '#stopVideoButton',
                event: 'tap',
                fn: 'onStopButton'
            }
        ]
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di eliminazione dello store relativo
     * ai file audio e video; rilancia l'evento che verrà catturato dal controller.
     */
    onTrashLibraryButton: function(scope, e, eOpts) {
        console.log('onTrashLibraryButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di eliminazione dello store relativo
         * ai file audio e video.
         * @param {Ext.Component} this
         */
        this.fireEvent('trashLibraryCommand', this);
    },
    
    /**
     * Metodo che cattura l'evento del pulsante disclose del record selezionato;
     * rilancia l'evento che verrà catturato dal controller.
     *
     * @param {Ext.data.Model} record Istanza del modello del file audio o video.
     * @param {Number} index Indice del record all'interno della lista.
     */
    onMediaListDisclose: function(scope, record, target, index, evt, options) {
        console.log('onMediaListDisclose');
        /**
         * @event
         * Lanciato alla pressione del pulsante disclose del record selezionato.
         * @param {Ext.Component} this
         * @param {Ext.data.Model} record Istanza del modello del file audio o video.
         * @param {Number} index Indice del record all'interno della lista.
         */
        this.fireEvent('mediaListDiscloseCommand', this, record, index);
    },
    
    /**
     * Metodo che cattura l'evento tap del pulsante di ritorno alla libreria;
     * rilancia l'evento che verrà catturato dal controller
     */
    onBackLibraryButton: function(scope, e, eOpts) {
        console.log('onBackLibraryButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante di ritorno alla libreria.
         */
        this.fireEvent('backLibraryCommand', this);
    },
    
    /**
     * Metodo che consente di avviare la riproduzione del media.
     *
     * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
     */
    onPlayButton: function(scope, e, eOpts) {
        console.log('onPlayButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante play.
         *
         * @param {Ext.Component} this
         * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
         */
        this.fireEvent('playCommand', this, scope);
    },
    
    /**
     * Metodo che consente di mettere in pausa la riproduzione del media.
     *
     * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
     */
    onPauseButton: function(scope, e, eOpts) {
        console.log('onPauseButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante pause.
         *
         * @param {Ext.Component} this
         * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
         */
        this.fireEvent('pauseCommand', this, scope);
    },
    
    /**
     * Metodo che consente di fermare la riproduzione del media.
     *
     * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
     */
    onStopButton: function(scope, e, eOpts) {
        console.log('onStopButton');
        /**
         * @event
         * Lanciato alla pressione del pulsante stop.
         *
         * @param {Ext.Component} this
         * @param {Ext.Component} scope Pulsante che ha scatenato l'evento.
         */
        this.fireEvent('stopCommand', this, scope);
    }
});