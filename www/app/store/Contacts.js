Ext.define('SensorDevice.store.Contacts', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    
    config: {
        model: 'SensorDevice.model.Contact',
        storeId: 'Contacts',
        
        proxy: {
            type: 'localstorage',
            id: 'SensorDevice-contacts-store'
        },
        
        sorters: [
            {property: 'name', direction: 'ASC'}
        ],
        
        grouper: {
            sortProperty: 'name',
            direction: 'ASC',
            groupFn: function(record) {
                if (record && record.data.name) {
                    return record.data.name.substr(0,1).toUpperCase();
                } else {
                    return '';
                }
            }
        }
    }
});