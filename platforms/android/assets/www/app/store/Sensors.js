/**
 * Sensors rappresenta lo store inline utilizzato per visualizzare la lista
 * delle funzionalità disponibili tramite l'app
 */
Ext.define('SensorDevice.store.Sensors', {
    extend: 'Ext.data.Store',
    
    config : {
        model: 'SensorDevice.model.Sensor',
        data: [
            { name: 'File', description: 'Permette di scrivere o leggere un file nella memoria del dispositivo' },
            { name: 'Camera', description: 'Permette di catturare un\'immagine tramite la fotocamera o la galleria del dispositivo'},
            { name: 'Contacts' , description: 'Permette di consultare e modificare la rubrica del dispositivo'},
            { name: 'Connection', description: 'Permette di visualizzare le informazioni riguardanti la connessione in atto'},
            { name: 'Media', description: 'Permette di catturare o riprodurre file audio tramite il dispositivo' },
            { name: 'Geolocation', description: 'Permette di visualizzare la posizione corrente del dispositivo'},
            { name: 'Barcode', description: 'Permette di leggere un barcode tramite la fotocamera del dispositivo'}
        ]
    }
});