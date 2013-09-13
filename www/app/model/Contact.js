Ext.define('SensorDevice.model.Contact', {
    extend: 'Ext.data.Model',
    
    config: {
        identifier: 'uuid',
        fields: [
            {name: 'name', type: 'string'},
            {name: 'email' , type:'string'},
            {name: 'phoneNumber', type: 'string'}
        ]
    }
});