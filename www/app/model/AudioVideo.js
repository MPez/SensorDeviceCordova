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