/**
 * Picture rappresenta il modello per l'acquisizione di immagini tramite
 * la fotocamera o la galleria del dispositivo mobile
 */
Ext.define('SensorDevice.model.Picture', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'uri', type: 'string'},
            {name: 'timestamp', type: 'date', dateFormat:'c'}
        ]
    }
});