/**
 * GalleryDemo rappresenta la vista che visualizza le immagini catturate
 * tramite la fotocamera o caricate dalla galleria del dispositivo
 */
Ext.define('SensorDevice.view.GalleryDemo', {
    extend: 'Ext.dataview.DataView',
    requires: [
        'Ext.TitleBar'
    ],
    alias: 'widget.gallerydemo',
    
    config: {
        /**
         * @cfg {String} height Proprietà CSS che identifica l'altezza del Container;
         * da impostare a 100% per consentire la visualizzazione della lista.
         */
        height: '100%',
        store: 'Pictures',
        loadingText: 'Loading images...',
        emptyText: 'No images found.',
        itemTpl: '<div><img src="{uri}"/>{timestamp}</div>',
        items: [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Gallery'
            }
        ]
    }
});