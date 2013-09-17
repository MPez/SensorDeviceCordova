/**
 * Barcode rappresenta il modello per la lettura di codice a barre
 */
Ext.define('SensorDevice.model.Barcode', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'code', type: 'string'},
            {name: 'format' , type:'string'}
        ]
    }
});