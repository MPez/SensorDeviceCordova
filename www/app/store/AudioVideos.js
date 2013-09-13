Ext.define('SensorDevice.store.AudioVideos', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.data.proxy.LocalStorage'
    ],
    
    config: {
        model: 'SensorDevice.model.AudioVideo',
        storeId: 'AudioVideos',
        
        proxy: {
            type: 'localstorage',
            id: 'SensorDevice-audioVideo-store'
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