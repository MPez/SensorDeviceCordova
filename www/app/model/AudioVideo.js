/**
 * AudioVideo rappresenta il modello per l'acquisizione di file video e audio
 * tramite la fotocamera e il microfono del dispositivo mobile.
 */
Ext.define('SensorDevice.model.AudioVideo', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'name', type: 'string'},
            {name: 'path', type: 'string'},
            {name: 'type', type: 'string'},
            {name: 'timestamp', type: 'date', dateFormat:'c'}
        ]
    }
});