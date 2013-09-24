/**
 * Contact rappresenta il modello per la lettura dei contatti presenti nel dispositivo
 */
Ext.define('SensorDevice.model.Contact', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'name', type: 'string'},
            {name: 'surname', type: 'string'},
            {name: 'email' , type:'string'},
            {name: 'phoneNumber', type: 'string'},
            {name: 'address', type: 'string'}
        ]
    }
});