/**
 * PersonalInfos rappresenta lo store webSQL utilizzato per salvare alcuni
 * dati personali dell'utente del dispositivo mobile
 */
Ext.define('SensorDevice.store.PersonalInfos', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.Sql'
    ],
    
    config: {
        model: 'SensorDevice.model.PersonalInfo',
        storeId: 'PersonalInfos',
        
        proxy: {
            type: 'sql',
            database: 'SensorDeviceDb'
        }
    }
});