Ext.define('SensorDevice.model.Position', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'latitude', type: 'string'},
            {name: 'longitude', type: 'string'},
            {name: 'altitude', type: 'string'},
            {name: 'accuracy', type: 'string'},
            {name: 'altitudeAccuracy', type: 'string'},
            {name: 'heading', type: 'string'},
            {name: 'speed', type: 'string'},
            {name: 'timestamp', type: 'string'}
        ]
    }
});