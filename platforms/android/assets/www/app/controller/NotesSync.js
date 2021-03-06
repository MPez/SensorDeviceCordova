/**
 * NotesSync rappresenta il controller che si occupa di gestire tutti gli eventi generati
 * dall'app MyNotes riguardanti la creazione e gestione di note ed autori.
 */
Ext.define('SensorDevice.controller.NotesSync', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.MessageBox',
        
        'SensorDevice.view.DeviceInfoEditor',
        'SensorDevice.view.DeleteActionSheet'
    ],
    
    config: {
        /**
         * @cfg {org.s2.syncEngine.SyncManager} manager Riferimento al syncManager usato
         * per gestire la creazione dinamica degli store e il loro caricamento e salvataggio.
         */
        manager: undefined,
        /**
         * @cfg
         * Riferimenti alle pagine controllate.
         */
        refs: {
            notesListView: 'mynotes',
            noteEditorView: 'noteeditorsync',
            deleteActionSheet: 'deleteactionsheet',
            authorEditorView: 'authoreditorsync',
            authorsListView: 'authorslistsync',
            deviceInfoEditor: 'deviceinfoeditor'
        },
        /**
         * @cfg
         * Metodi di controllo degli eventi lanciati dalle diverse pagine.
         */
        control: {
            notesListView: {
                newNoteCommand: 'onNewNoteCommand',
                editNoteCommand: 'onEditNoteCommand',
                newAuthorCommand: 'onNewAuthorCommand',
                downloadDbCommand: 'onDownloadDbCommand',
                uploadDbCommand: 'onUploadDbCommand',
                deviceInfoCommand: 'onDeviceInfoCommand',
                saveNoteCommand: 'onSaveNoteCommand',
                backHomeCommand: 'onBackHomeCommand',
                saveAuthorCommand: 'onSaveAuthorCommand',
                saveDeviceInfoCommand: 'onSaveDeviceInfoCommand',
                backupNotesCommand: 'onBackupNotesCommand',
                restoreNotesCommand: 'onRestoreNotesCommand',
                trashNotesCommand: 'onTrashNotesCommand'
            },
            deleteActionSheet: {
                deleteSheetNoteCommand: 'onDeleteNoteCommand',
                deleteSheetAuthorCommand: 'onDeleteAuthorCommand'
            },
            authorsListView: {
                editAuthorCommand: 'onEditAuthorCommand'
            }
        }
    },
    
    /**
     * Metodo che cattura l'evento di creazione di una nuova nota; agisce creando un record vuoto
     * con la data corrente per passarlo all'editor delle note e lo visualizza.
     *
     * @param {Ext.Container} mynotes Pagina principale dell'app.
     */
    onNewNoteCommand: function(mynotes) {
        console.log('onNewNoteCommand');
        
        var now = new Date();
        
        var newNote = Ext.create('SensorDevice.model.NoteSync', {
            author: '',
            dateCreated: now,
            title: '',
            narrative: ''
        });
        
        this.activateNoteEditor(newNote);
        mynotes.setActiveItem(1);
    },
    
    /**
     * Metodo che cattura l'evento di selezione di una nota esistente per la modifica; agisce impostando
     * il record selezionato nell'editor delle note e lo visualizza.
     *
     * @param {Ext.Container} mynotes Pagina principale dell'app.
     * @param {Ext.data.Model} record Istanza della nota selezionata.
     */
    onEditNoteCommand: function(mynotes, record) {
        console.log('onEditNoteCommand');
        
        this.activateNoteEditor(record);
        mynotes.setActiveItem(1);
    },
    
    /**
     * Metodo che gestisce l'impostazione del record selezionato nell'editor delle note.
     *
     * @param {Ext.data.Model} record Istanza della nota selezionata.
     */
    activateNoteEditor: function(record) {
        var noteEditor = this.getNoteEditorView();
        noteEditor.setRecord(record);
    },
    
    /**
     * Metodo che cattura l'evento di creazione di un nuovo autore; agisce creando un record vuoto
     * per passarlo all'editor delgli autori e lo visualizza.
     *
     * @param {Ext.Container} mynotes Pagina principale dell'app.
     */
    onNewAuthorCommand: function(mynotes) {
        console.log('onNewAuthorCommand');

        var newAuthor = Ext.create('SensorDevice.model.AuthorSync', {
            name: '',
            surname: ''
        });
        
        this.activateAuthorEditor(newAuthor);
        mynotes.setActiveItem(2);
    },
    
    /**
     * Metodo che cattura l'evento di selezione di un autore esistente per la modifica; agisce impostando
     * il record selezionato nell'editor delle note e lo visualizza.
     *
     * @param {Ext.Container} authorslistview Vista che contiene la lista degli autori.
     * @param {Ext.data.Model} record Istanza dell'autore selezionato.
     */
    onEditAuthorCommand: function(authorslistview, record) {
        console.log('onEditAuthorCommand');
        
        this.activateAuthorEditor(record);
        this.getNotesListView().setActiveItem(2);
    },
    
    /**
     * Metodo che gestisce l'impostazione del record selezionato nell'editor degli autori.
     *
     * @param {Ext.data.Model} record Istanza dell'autore selezionato.
     */
    activateAuthorEditor: function(record) {
        var authorEditor = this.getAuthorEditorView();
        authorEditor.setRecord(record);
    },
    
    /**
     * Metodo che cattura l'evento di richiesta di download del database dal server
     * utilizzando il SyncManager
     */
    onDownloadDbCommand: function() {
        console.log('onDownloadDbCommand');
        
        var manager = this.getManager();
        manager.downloadFromServer();
    },
    
    /**
     * Metodo che cattura l'evento di richiesta di upload del database al server
     * utilizzando il SyncManager
     */
    onUploadDbCommand: function() {
        console.log('onUploadDbCommand');

        var manager = this.getManager();
        manager.uploadToServer();
    },
    
    /**
     * Metodo che cattura l'evento di visualizzazione delle informazioni del dispositivo;
     * agisce controllando se tali informazioni esistono, in caso affermativo carica il record
     * dallo store e lo imposta nell'editor; in caso negativo crea un record vuoto e lo imposta
     * nell'editor.
     */
    onDeviceInfoCommand: function() {
        console.log('onDeviceInfoCommand');
        
        var deviceStore = Ext.getStore('DevicesSync');
        if (deviceStore.getCount() == 0) {
            var newDevice = Ext.create('SensorDevice.model.Device', {
                deviceId: 1,
                name: '',
                description: ''
            });
        }
        else {
            var newDevice = deviceStore.getAt(0);
        }
        
        this.activateDeviceInfoEditor(newDevice);
        this.getNotesListView().setActiveItem(3);
    },
    
    /**
     * Metodo che gestisce l'impostazione del record con le informazioni del dispositivo
     * sull'editor.
     */
    activateDeviceInfoEditor: function(record) {
        var deviceInfoEditor = this.getDeviceInfoEditor();
        deviceInfoEditor.setRecord(record);
    },
    
    /**
     * Metodo che cattura l'evento di salvataggio della nota nello store dedicato;
     * agisce recuperando lo store e i valori impostati dall'utente, aggiornando il record
     * corrente. In seguito effettua la validazione dei campi e in caso di errore visualizza
     * un messaggio per l'utente e rifiuta il record.
     * Infine, attraverso il SyncManager, salva la nota nello store e ritorna alla pagina principale.
     */
    onSaveNoteCommand: function() {
        console.log('onSaveNoteCommand');
        
        var noteEditor = this.getNoteEditorView();
        var currentNote = noteEditor.getRecord();
        var newValues = noteEditor.getValues();
        
        currentNote.set('title', newValues.title);
        currentNote.set('narrative', newValues.narrative);
        currentNote.set('author', newValues.author);
        
        var errors = currentNote.validate();
        
        if (!errors.isValid()) {
            errors.each(function(error) {
                Ext.Msg.alert('Wait!', error.getMessage(), Ext.emptyFn);
            });
            currentNote.reject();
            return;
        }
        
        var manager = this.getManager();
        manager.addToStore('Notes', currentNote);

        this.getNotesListView().setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di salvataggio dell'autore nello store dedicato;
     * agisce recuperando lo store e i valori impostati dall'utente, aggiornando il record
     * corrente. In seguito effettua la validazione dei campi e in caso di errore visualizza
     * un messaggio per l'utente e rifiuta il record.
     * Infine, attraverso il SyncManager, salva la nota nello store e ritorna alla pagina principale.
     */
    onSaveAuthorCommand: function() {
        console.log('onSaveAuthorCommand');
        
        var authorEditor = this.getAuthorEditorView();
        var currentAuthor = authorEditor.getRecord();
        var newValues = authorEditor.getValues();
        
        currentAuthor.set('name', newValues.name);
        currentAuthor.set('surname', newValues.surname);
        
        var errors = currentAuthor.validate();
        
        if (!errors.isValid()) {
            errors.each(function(error) {
                Ext.Msg.alert('Wait!', error.getMessage(), Ext.emptyFn);    
            });
            currentAuthor.reject();
            return;
        }
        
        var manager = this.getManager();
        manager.addToStore('Authors', currentAuthor);

        this.getNotesListView().setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di salvataggio delle informazioni sul dispositivo nello store dedicato;
     * agisce recuperando lo store e i valori impostati dall'utente, aggiornando il record
     * corrente. In seguito effettua la validazione dei campi e in caso di errore visualizza
     * un messaggio per l'utente e rifiuta il record.
     * Infine salva la nota nello store e ritorna alla pagina principale.
     */
    onSaveDeviceInfoCommand: function() {
        console.log('onSaveDeviceInfoCommand');
        
        var deviceInfoEditor = this.getDeviceInfoEditor();
        var currentDevice = deviceInfoEditor.getRecord();
        var newValues = deviceInfoEditor.getValues();
        
        currentDevice.set('name', newValues.name);
        currentDevice.set('description', newValues.description);
        
        var errors = currentDevice.validate();
        
        if (!errors.isValid()) {
            Ext.Msg.alert('Wait!', errors.getByField('name')[0].getMessage(), Ext.emptyFn);
            currentDevice.reject();
            return;
        }
        
        var deviceStore = Ext.getStore('DevicesSync');
        
        if (null == deviceStore.findRecord('deviceId', currentDevice.data.deviceId)) {
            console.log('New device added to the store');
            console.log(currentDevice.getData());
            
            deviceStore.add(currentDevice);
        }
        
        deviceStore.sync();
        this.getNotesListView().setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di ritorno alla pagina principale.
     *
     * @param {Ext.Component} mynotes Pagina principale dell'app.
     */
    onBackHomeCommand: function(mynotes) {
        console.log('onBackHomeCommand');
        
        mynotes.setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione della nota selezionata dallo store
     * usando il SyncManager.
     */
    onDeleteNoteCommand: function() {
        console.log('onDeleteNoteCommand');
        
        var noteEditor = this.getNoteEditorView();
        var currentNote = noteEditor.getRecord();
        
        var manager = this.getManager();
        manager.deleteFromStore('Notes', currentNote);
        
        this.getNotesListView().setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione dell'autore selezionato dallo store
     * usando il SyncManager.
     */
    onDeleteAuthorCommand: function() {
        console.log('onDeleteAuthorCommand');
        
        var authorEditor = this.getAuthorEditorView();
        var currentAuthor = authorEditor.getRecord();

        var manager = this.getManager();
        manager.deleteFromStore('Author', currentAuthor);
        
        this.getNotesListView().setActiveItem(0);
    },
    
    //-------------------------------------------------------//
    //           Apache Cordova File plugin                  //
    //-------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di backup dello store delle note; agisce creando una stringa
     * in formato JSON dove vengono salvati tutti i record presenti; in seguito recupera
     * i riferimenti di filesystem, cartella e file dove salvare i dati e infine crea un FileWriter
     * che si occupa di scrivere i dati nel file prescelto.
     * In caso di errore avvisa l'utente con un messaggio.
     */
    onBackupNotesCommand: function() {
        console.log('onBackupNotesCommand');
        
        var notesStore = Ext.getStore('Notes'),
            string = '[';
        notesStore.each(function (item, index, length) {
            var record = item.getData();
            string += Ext.JSON.encode(record)
            if (index != length-1) {
                string += ',\n';
            }
        });
        string += ']';
        
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        function gotFS(fileSystem) {
            console.log('gotFs');
            fileSystem.root.getDirectory('SensorDeviceCordova', {create: true, exclusive: false}, gotDirectoryEntry, fail);
        }
        
        function gotDirectoryEntry(directoryEntry) {
            console.log('gotDirectoryEntry');
            directoryEntry.getFile('backupNotes.txt', {create: true, exclusive: false}, gotFileEntry, fail);
        }
        
        function gotFileEntry(fileEntry) {
            console.log('gotFileEntry');
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            console.log('gotFileWriter');
            writer.onwrite = function(evt) {
                console.log('onWrite');
                Ext.Msg.alert('Success', 'The Notes\' store has been backed up.')
            }
            writer.write(string);
        }
    
        function fail(error) {
            console.log(error.code);
            Ext.Msg.alert('Error', error.code);
        }
    },
    
    /**
     * Metodo che cattura l'evento di restore dello store delle note; agisce recuperando
     * i riferimenti di filesystem, cartella e file da dove caricare i dati, crea un FileReader
     * che si occupa di leggere i dati e li salva su un array che viene aggiunto allo store.
     * In caso di errore avvisa l'utente con un messaggio.
     */
    onRestoreNotesCommand: function() {
        console.log('onRestoreNotesCommand');
        
        var me = this;
        
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        function gotFS(fileSystem) {
            console.log('gotFS');
            fileSystem.root.getDirectory('SensorDeviceCordova', null, gotDirectoryEntry, fail);
        }
        
        function gotDirectoryEntry(directoryEntry) {
            console.log('gotDirectoryEntry');
            directoryEntry.getFile('backupNotes.txt', null, gotFileEntry, fail);
        }
        
        function gotFileEntry(fileEntry) {
            console.log('gotFileEntry');
            fileEntry.file(gotFile, fail);
        }
        
        function gotFile(file) {
            console.log('gotFile');
            readAsText(file);
        }
        
        function readAsText(file) {
            console.log('readAsText');
            
            var reader = new FileReader();
            reader.onload = function(evt) {
                console.log('onLoad');
                var notesStore = Ext.getStore('Notes');
                var array = evt.target.result;
                notesStore.add(Ext.JSON.decode(array));
                notesStore.sync();
                //me.getNotesListView().getAt(0).getComponent('notesList').refresh();
            }
            reader.readAsText(file);
        }
        
        function fail(error) {
            console.log(error.code);
            
            Ext.Msg.alert('Error', error.code);
        }
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione di tutti i record presenti nello store
     * delle note.
     */
    onTrashNotesCommand: function() {
        console.log('onTrashNotesCommand');
        Ext.getStore('Notes').removeAll();
        //this.getNotesListView().getAt(0).getComponent('notesList').refresh();
        Ext.Msg.alert('Attention', 'The Notes\' store has been deleted.');
    },
    
    
    getRandomInt: function(min, max) {
        return Math.floor(Math.random() * (max - min +1)) + min;
    },
    
    /**
     * Metodo chiamato al lancio dell'app; si occupa di controllare se esiste il record
     * con le informazioni sul dispositivo, in caso negativo avvisa l'utente di inserirli
     * prima di inizare a scrivere note e visualizza l'editor relativo.
     * In seguito usa il SyncManager per caricare tutti gli store che sono stati registrati.
     */
    launch: function() {
        this.callParent();
        console.log('launch NotesSync');
        
        Ext.getStore('DevicesSync').load(function(records, operation, success) {
            if(Ext.getStore('DevicesSync').getCount() == 0) {
                Ext.Msg.alert('Id device mancante',
                              'Si prega di inserire il nome del device e salvarlo per poter utilizzare l\'applicazione',
                              this.onDeviceInfoCommand());
            }
        }, this);
        
        var manager = this.getManager();
        manager.loadDatabase();
    },
    
    /**
     * Metodo chiamato all'inizializzazione dell'app.
     */
    init: function() {
        this.callParent();
        console.log('init NotesSync');
    }
});