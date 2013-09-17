/**
 * Barcodes rappresenta lo store webSQL utilizzato per gestire
 * la lettura dei codici a barre
 */
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