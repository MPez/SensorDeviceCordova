/**
 * Device rappresenta il modello dei dati propri del dispositivo.
 */
Ext.define('SensorDevice.model.DeviceInfo', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'name', type: 'string'},
            {name: 'platform', type: 'string'},
            {name: 'UUID', type: 'string'}
        ]
    }
});