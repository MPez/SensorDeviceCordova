/**
 * PersonalInfo rappresenta il modello per la registrazione di alcuni dati personali dell'utente
 */
Ext.define('SensorDevice.model.PersonalInfo', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            { name: 'id', type: 'int' },
            { name: 'name', type: 'string' },
            { name: 'surname', type: 'string' },
            { name: 'address', type: 'string' },
            { name: 'sex', type: 'string' },
            { name: 'color', type: 'string' },
            { name: 'touch', type: 'string' },
            { name: 'cordova', type: 'string' }
        ],
        
        validations: [
            { type: 'presence', field: 'name', message: 'Please enter your name.' },
            { type: 'presence', field: 'surname', message: 'Please enter your surname.' },
            { type: 'inclusion', field: 'sex', list: ['male', 'female'] }
        ]
    }
});