Ext.define('SensorDevice.store.Positions', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Sql'
    ],
    
    config: {
        model: 'SensorDevice.model.Position',
        storeId: 'Positions',
        
        proxy: {
            type: 'sql',
            database: 'SensorDeviceDb'
        },
    }
});