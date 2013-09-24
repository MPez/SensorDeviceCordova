/**
 * Contacts rappresenta lo store locale utilizzato per salvare i contatti
 * recuperati dalla rubrica del dispositivo mobile
 */
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
            {property: 'surname', direction: 'ASC'}
        ],
        
        grouper: {
            sortProperty: 'surname',
            direction: 'ASC',
            groupFn: function(record) {
                if (record && record.data.surname) {
                    return record.data.surname.substr(0,1).toUpperCase();
                } else {
                    return '';
                }
            }
        }
    }
});