Ext.define('SensorDevice.store.Barcodes', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Sql'
    ],
    
    config: {
        model: 'SensorDevice.model.Barcode',
        storeId: 'Barcodes',
        
        proxy: {
            type: 'sql',
            database: 'SensorDeviceDb'
        },
    }
});