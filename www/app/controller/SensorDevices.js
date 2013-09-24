/**
 * SensorDevice rappresenta il controller che si occupa di gestire tutti gli eventi generati
 * dalle diverse pagine disponibili nell'app, dimostrative dell'utilizzo dei diversi sensori
 * disponibili sul dispositivo.
 */
Ext.define('SensorDevice.controller.SensorDevices', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.JSON',
        'Ext.Msg'
    ],
    
    config: {
        /**
         * @cfg
         * Riferimenti alle pagine controllate.
         */
        refs: {
            homeView: 'home',
            cameraDemoView: 'camerademo',
            mediaDemoView: 'mediademo',
            galleryDemoView: 'gallerydemo',
            libraryDemoView: 'librarydemo',
            fileDemoView: 'filedemo'
        },
        /**
         * @cfg
         * Metodi di controllo degli eventi lanciati dalle diverse pagine.
         */
        control: {
            homeView: {
                itemDiscloseCommand: 'onItemDiscloseCommand',
                backButtonCommand: 'onBackButtonCommand',
                loadContactsCommand: 'onLoadContactsCommand',
                trashContactsCommand: 'onTrashContactsCommand',
                locationCommand: 'onLocationCommand',
                mapRenderCommand: 'onMapRenderCommand',
                positionCommand: 'onPositionCommand',
                backGeolocationCommand: 'onBackGeolocationCommand',
                scanBarcodeCommand: 'onScanBarcodeCommand'
            },
            cameraDemoView: {
                cameraButtonCommand: 'onCameraButtonCommand',
                galleryButtonCommand: 'onGalleryButtonCommand'
            },
            mediaDemoView: {
                captureAudioCommand: 'onCaptureAudioCommand',
                captureVideoCommand: 'onCaptureVideoCommand',
                captureImageCommand: 'onCaptureImageCommand',
            },
            fileDemoView: {
                saveFormCommand: 'onSaveFormCommand',
                loadFormCommand: 'onLoadFormCommand',
                backupFormCommand: 'onBackupFormCommand',
                restoreFormCommand: 'onRestoreFormCommand',
                deleteFormCommand: 'onDeleteFormCommand',
                trashPersonalInfoCommand: 'onTrashPersonalInfoCommand'
            },
            libraryDemoView: {
                trashLibraryCommand: 'onTrashLibraryCommand',
                mediaListDiscloseCommand: 'onMediaListDiscloseCommand',
                backLibraryCommand: 'onBackLibraryCommand',
                playCommand: 'onPlayCommand',
                pauseCommand: 'onPauseCommand',
                stopCommand: 'onStopCommand'
            }
        }
    },
    
    /**
     * Metodo che cattura l'evento disclose della lista delle funzionalità disponibili.
     * Se la funzionalità selezionata è FileDemo e non sono presenti record nello store,
     * viene creato un record fittizio da inserire nella form.
     * A seconda dell'indice passato come parametro viene visualizzata la pagina corrispondente.
     * 
     * @param {Ext.Component} home Scope di riferimento della pagina principale.
     * @param {Number} index Indice del record selezionato dalla lista.
     */
    onItemDiscloseCommand: function(home, index) {
        console.log('onItemDiscloseCommand');
        
        if (index == 0) {
            console.log('onFileDemoForm');
            var personalInfoStore = Ext.getStore('PersonalInfos');
            
            if (personalInfoStore.getCount() == 0) {
                var newInfo = Ext.create('SensorDevice.model.PersonalInfo', {
                    name: 'Soluzioni',
                    surname: 'Software',
                    address: 'Via dei Ronchi 21',
                    sex: 'male',
                    color: 'blue' ,
                    touch: '',
                    cordova: ''
                });
            }
            else {
                var newInfo = personalInfoStore.getAt(0);
            }
            
            var fileDemo = this.getFileDemoView();
            fileDemo.setRecord(newInfo);
        }
        
        home.setActiveItem(index+1);
    },
    
    /**
     * Metodo che cattura l'evento di ritorno alla pagina principale visualizzando la pagina corretta.
     */
    onBackButtonCommand: function(home) {
        console.log('onBackButtonCommand');
        home.setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di salvataggio della form relativa alle informazioni
     * personali dell'utente.
     * Recupera i valori modificati nei campi della form e aggiorna il record, effettua la validazione
     * dei campi e nel caso trovi errori, visualizza un messaggio; infine, recupera lo store e aggiorna
     * il primo e unico record.
     */
    onSaveFormCommand: function() {
        console.log('onSaveFormCommand');
        
        var fileDemo = this.getFileDemoView();
        var currentInfo = fileDemo.getRecord();
        var newValues = fileDemo.getValues();
        
        currentInfo.set('name', newValues.name);
        currentInfo.set('surname', newValues.surname);
        currentInfo.set('address', newValues.address);
        currentInfo.set('sex', newValues.sex);
        currentInfo.set('color', newValues.color);
        currentInfo.set('touch', newValues.touch);
        currentInfo.set('cordova', newValues.cordova);
        
        var errors = currentInfo.validate();
        
        if (!errors.isValid()) {
            errors.each(function(error) {
                Ext.Msg.alert('Wait!', error.getMessage(), Ext.emptyFn);
            })
            currentInfo.reject();
            return;
        }
        
        var personalInfoStore = Ext.getStore('PersonalInfos');
        personalInfoStore.removeAll();
        personalInfoStore.sync();
        personalInfoStore.add(currentInfo);
        personalInfoStore.sync();
    },
    
    /**
     * Metodo che cattura l'evento di caricamento dei campi della form dallo store;
     * agisce recuperando dallo store il record salvato e imposta tale record nella form.
     */
    onLoadFormCommand: function() {
        console.log('onLoadFormCommand');
        var personalInfoStore = Ext.getStore('PersonalInfos');
        var newInfo = personalInfoStore.getAt(0);
        var fileDemo = this.getFileDemoView();
        fileDemo.setRecord(newInfo);
    },
    
    /**
     * Metodo che cattura l'evento di eliminazione dei campi della form;
     * agisce pulendo tutti i campi della form.
     */
    onDeleteFormCommand: function() {
        console.log('onDeleteFormCommand');
        var fileDemo = this.getFileDemoView();
        fileDemo.reset();
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione del record dallo store delle informazioni personali;
     * agisce recuperando lo store ed eliminando i record presenti, in seguito richiama
     * il metodo per pulire la form e infine visualizza un messaggio di avviso.
     */
    onTrashPersonalInfoCommand: function() {
        console.log('onTrashPersonalInfoCommand');
        Ext.getStore('PersonalInfos').removeAll();
        this.onDeleteFormCommand();
        Ext.Msg.alert('Attention', 'The Personal Info\'s store has been deleted.');
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione dei record dallo store della libreria;
     * agisce recuperando lo store ed eliminando i record presenti, in seguito visualizza
     * un messaggio di avviso.
     */
    onTrashLibraryCommand: function() {
        console.log('onTrashLibraryCommand');
        Ext.getStore('AudioVideos').removeAll();
        Ext.Msg.alert('Attention', 'The Media\'s store has been deleted.');
    },
    
    /**
     * Metodo che cattura l'evento disclose dalla lista dei file audio, video e immagini;
     * a seconda del tipo del file imposta l'url corretto e visualizza la corretta pagina per riprodurlo .
     */
    onMediaListDiscloseCommand: function(library, record, index) {
        console.log('onMediaListDiscloseCommand');
        if (record.get('type').search(/^audio/) != -1) {
            library.getAt(1).getComponent('audioItem').setUrl(record.get('path'));
            library.setActiveItem(1);
        }
        else if(record.get('type').search(/^video/) != -1){
            library.getAt(2).getComponent('videoItem').setUrl(record.get('path'));
            library.setActiveItem(2);
        }
        else {
            library.getAt(3).getComponent('imageItem').setSrc(record.get('path'));
            library.setActiveItem(3);
        }
    },
    
    /**
     * Metodo che cattura l'evento di ritorno alla libreria dei media impostando la pagina corretta.
     */
    onBackLibraryCommand: function() {
        console.log('onBackLibraryCommand');
        this.getLibraryDemoView().setActiveItem(0);
    },
    
    /**
     * Metodo che cattura l'evento di avvio riproduzione del media selezionato.
     *
     * @param {Ext.Component} library Pagina dalla quale è stato lanciato l'evento.
     * @param {Ext.Component} button Pulsante che ha scatenato l'evento.
     */
    onPlayCommand: function(library, button) {
        
        if (button.getItemId() == 'playVideoButton') {
            console.log('onPlayVideoCommand');
            library.getAt(2).getComponent('videoItem').play();
        } else {
            console.log('onPlayAudioCommand');
            library.getAt(1).getComponent('audioItem').play();
        }
    },
    
    /**
     * Metodo che cattura l'evento di mettere in pausa la riproduzione del media selezionato.
     *
     * @param {Ext.Component} library Pagina dalla quale è stato lanciato l'evento.
     * @param {Ext.Component} button Pulsante che ha scatenato l'evento.
     */
    onPauseCommand: function(library, button) {
        
        if (button.getItemId() == 'pauseVideoButton') {
            console.log('onPauseVideoCommand');
            library.getAt(2).getComponent('videoItem').pause();
        } else {
            console.log('onPauseAudioCommand');
            library.getAt(1).getComponent('audioItem').pause();
        }
    },
    
    /**
     * Metodo che cattura l'evento di arrestare la riproduzione del media selezionato.
     *
     * @param {Ext.Component} library Pagina dalla quale è stato lanciato l'evento.
     * @param {Ext.Component} button Pulsante che ha scatenato l'evento.
     */
    onStopCommand: function(library, button) {
        
        if (button.getItemId() == 'stopVideoButton') {
            console.log('onStopVideoCommand');
            library.getAt(2).getComponent('videoItem').stop();
        } else {
            console.log('onStopAudioCommand');
            library.getAt(1).getComponent('audioItem').stop();
        }
    },
    
    //------------------------------------------------------//
    //             Apache Cordova Capture plugin            //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di cattura di un file audio; agisce chiamando il metodo
     * captureAudio con parametri le funzioni di successo o di errore dell'operazione.
     */
    onCaptureAudioCommand: function() {
        console.log('onCaptureAudioCommand');
        var me = this;
        
        navigator.device.capture.captureAudio(me.captureMediaSuccess, me.captureError);
    },
    
    /**
     * Metodo che cattura l'evento di cattura di un file video; agisce chiamando il metodo
     * captureVIdeo con parametri le funzioni di successo o di errore dell'operazione.
     */
    onCaptureVideoCommand: function() {
        console.log('onCaptureVideoCommand');
        var me = this;
        
        navigator.device.capture.captureVideo(me.captureMediaSuccess, me.captureError);
    },
    
    /**
     * Metodo che cattura l'evento di cattura di un immagine; agisce chiamando il metodo
     * captureImage con parametri le funzioni di successo o di errore dell'operazione.
     */
    onCaptureImageCommand: function() {
        console.log('onCaptureImageCommand');
        var me = this;
        
        navigator.device.capture.captureImage(me.captureMediaSuccess, me.captureError);
    },
    
    /**
     * Metodo che gestisce il successo dell'operazione di cattura recuperando i valori del file creato
     * e salvandoli in un record dello store AudioVideo.
     */
    captureMediaSuccess: function(mediaFiles) {
        console.log('captureMediaSuccess');
        var now = new Date();
        var newMedia = Ext.create('SensorDevice.model.AudioVideo', {
            name: mediaFiles[0].name,
            path: mediaFiles[0].fullPath,
            type: mediaFiles[0].type,
            timestamp: now
        });
        
        var mediaStore = Ext.getStore('AudioVideos');
        mediaStore.add(newMedia);
        mediaStore.sync();
    },
    
    /**
     * Metodo che gestisce l'errore nell'operazione di cattura inviando un messaggio di allerta all'utente.
     */
    captureError: function(error) {
        console.log('captureError');
        Ext.Msg.alert('Error', error.code);
    },
    
    //------------------------------------------------------//
    //             Apache Cordova File plugin               //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di backup delle informazioni personali dell'utente; agisce recuperando
     * lo store corretto e il record salvato, in seguito effettua una serie di chiamate a metodi del plugin
     * per recuperare i riferimenti al filesystem del dispositivo, alla directory propria dell'app e al file
     * dove si desidera salvare i dati.
     * Infine crea un fileWriter che si occupa di scrivere le informazioni sul file e ad operazione conclusa
     * con avvisa l'utente del successo o del fallimento dell'operazione.
     */
    onBackupFormCommand: function(fileDemo) {
        console.log('onBackupFormCommand');
        
        var personalInfoStore = Ext.getStore('PersonalInfos');
        var record = personalInfoStore.getAt(0).getData();
        var string = Ext.JSON.encode(record);
        
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        function gotFS(fileSystem) {
            console.log('gotFs');
            
            fileSystem.root.getDirectory('SensorDeviceCordova', {create: true, exclusive: false}, gotDirectoryEntry, fail);
        }
        
        function gotDirectoryEntry(directoryEntry) {
            console.log('gotDirectoryEntry');
            
            directoryEntry.getFile('backupPersonalInfo.txt', {create: true, exclusive: false}, gotFileEntry, fail);
        }
        
        function gotFileEntry(fileEntry) {
            console.log('gotFileEntry');
            fileEntry.createWriter(gotFileWriter, fail);
        }
    
        function gotFileWriter(writer) {
            console.log('gotFileWriter');
            writer.onwrite = function(evt) {
                console.log('onWrite');
                Ext.Msg.alert('Success', 'The Personal Info\'s store has been backed up.')
            }
            writer.write(string);
        }
    
        function fail(error) {
            console.log(error.code);
            Ext.Msg.alert('Error', error.code);
        }
    },
    
    /**
     * Metodo che cattura l'evento di restore delle informazioni personali dell'utente; agisce
     * effettuando una serie di chiamate per recuperare i riferimenti al filesystem del dispositivo,
     * alla directory propria dell'app e al file dove si desidera salvare i dati.
     * Infine crea un fileReader che si occupa di leggere il contenuto del file e ad operazione conclusa
     * positivamente recupera lo store corretto e inserisce il record recuperato; in caso di errore
     * avvisa l'utente.
     */
    onRestoreFormCommand: function() {
        console.log('onRestoreFormCommand');
        
        var me = this;
        
        window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, gotFS, fail);
        
        function gotFS(fileSystem) {
            console.log('gotFS');
            
            fileSystem.root.getDirectory('SensorDeviceCordova', null, gotDirectoryEntry, fail);
        }
        
        function gotDirectoryEntry(directoryEntry) {
            console.log('gotDirectoryEntry');
            
            directoryEntry.getFile('backupPersonalInfo.txt', null, gotFileEntry, fail);
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
                var personalInfoStore = Ext.getStore('PersonalInfos');
                var object = Ext.JSON.decode(evt.target.result);
                personalInfoStore.add(object);
                personalInfoStore.sync();
                me.onLoadFormCommand();
            }
            
            reader.readAsText(file);
        }
        
        function fail(error) {
            console.log(error.code);
            Ext.Msg.alert('Error', error.code);
        }
    },
    
    //------------------------------------------------------//
    //            Apache Cordova Camera plugin              //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di apertura della fotocamera del dispositivo; agisce effettuando
     * una chiamata al metodo getPicture passando il nome delle funzioni di successo e fallimento
     * e un oggetto di configurazione con le impostazioni desiderate per la cattura.
     */
    onCameraButtonCommand: function() {
        console.log('onCameraButtonCommand');
        
        var me = this;
        
        navigator.camera.getPicture(me.onCaptureSuccess, me.onCaptureFailure, {
            quality : 100,
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.CAMERA,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            correctOrientation: true,
            saveToPhotoAlbum: false
        });
    },
    
    /**
     * Metodo che cattura l'evento di apertura della galleria del dispositivo; agisce effettuando
     * una chiamata al metodo getPicture passando il nome delle funzioni di successo e fallimento
     * e un oggetto di configurazione con le impostazioni desiderate per la cattura.
     */
    onGalleryButtonCommand: function() {
        console.log('onGalleryButtonCommand');
        
        var me = this;
        
        navigator.camera.getPicture(me.onCaptureSuccess, me.onCaptureFailure, {
            quality : 100,
            destinationType : Camera.DestinationType.FILE_URI,
            sourceType : Camera.PictureSourceType.PHOTOLIBRARY,
            encodingType: Camera.EncodingType.JPEG,
            targetWidth: 400,
            targetHeight: 400,
            correctOrientation: true,
            saveToPhotoAlbum: false
        });
    },
    
    /**
     * Metodo che gestisce il successo dell'operazione di cattura dell'immagine tramite fotocamera
     * o galleria. Agisce creando un nuovo record e impostando i valori della nuova immagine.
     * In seguito recupera lo store corretto e registra il nuovo record.
     *
     * @param {String} image Uri della nuova immagine catturata.
     */
    onCaptureSuccess: function(image) {
        console.log('onCaptureSuccess');
        
        var now = new Date();
        var newPicture = Ext.create('SensorDevice.model.Picture', {
            uri: image,
            timestamp: now
        });
        
        var pictureStore = Ext.getStore('Pictures');
        pictureStore.add(newPicture);
        pictureStore.sync();
    },
    
    /**
     * Metodo che gestisce il fallimento dell'operazione di cattura dell'immagine visualizzando
     * un messaggio di allerta per l'utente.
     */
    onCaptureFailure: function() {
        console.log('onCaptureFailure');
        Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
    },
    
    //------------------------------------------------------//
    //            Apache Cordova Contacts plugin            //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di caricamento dei contatti del dispositivo;
     * agisce effettuando una chiamata al metodo find passando come paramentri due oggetti di configurazione,
     * contenenti i nomi dei campi di interesse e le opzioni di filtraggio, e le funzioni di successo e fallimento.
     */
    onLoadContactsCommand: function() {
        console.log('onLoadContactsCommand');
        
        var me = this;
        
        var contactFields = ['*'];
        var contactFindOptions = {
            filter: '',
            multiple: true
        };
        navigator.contacts.find(contactFields, me.onContactSuccess, me.onContactError, contactFindOptions);
    },
    
    /**
     * Metodo che gestisce il successo del caricamento dei contatti del dispositivo; agisce
     * recuperando lo store corretto e creando un nuovo record con i campi desiderati per ogni
     * contatto trovato e li inserisce nello store.
     *
     * @param {Object} contacts Oggetto che contiene un array di contatti.
     */
    onContactSuccess: function(contacts) {
        console.log('onContactSuccess');
        
        var contactsStore = Ext.getStore('Contacts');
        
        for (var i = 0; i < contacts.length; i++) {
            var deviceContact = contacts[i];
            
            var contact = Ext.create('SensorDevice.model.Contact', {
                name: '',
                surname: '',
                email: '',
                phoneNumber: '',
                address: ''
            });
            
            if (deviceContact.name) {
                if (deviceContact.name.givenName) {
                    contact.set('name', deviceContact.name.givenName);
                }
                if (deviceContact.name.familyName) {
                    contact.set('surname', deviceContact.name.familyName);
                }
            }

            if (deviceContact.emails) {
                contact.set('email', deviceContact.emails[0].value);
            }

            if (deviceContact.phoneNumbers) {
                contact.set('phoneNumber', deviceContact.phoneNumbers[0].value);
            }

            if (deviceContact.addresses) {
                contact.set('address', deviceContact.addresses[0].value);
            }
                
            contactsStore.add(contact);
        }
        
        contactsStore.sync();
    },
    
    /**
     * Metodo che gestisce il fallimento dell'operazione di caricamento dei contatti del dispositivo
     * avvisando l'utente con un messaggio.
     *
     * @param {Object} contactError Oggetto che contiene l'errore che ha causato il fallimento
     * dell'operazione.
     */
    onContactError: function(contactError) {
        console.log('onContactError');
        Ext.Msg.alert('Error retrieving contacts', contactError.code);
    },
    
    /**
     * Metodo che cattura l'evento di cancellazione dei record dallo store dei contatti.
     */
    onTrashContactsCommand: function() {
        console.log('onTrashContactsCommand');
        var contactsStore = Ext.getStore('Contacts');
        contactsStore.removeAll();
        contactsStore.sync();
    },
    
    //------------------------------------------------------//
    //          Apache Cordova Geolocation plugin           //
    //                   Google Maps API                    //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di localizzazione del dispositivo; agisce effettuando
     * una chiamata al metodo getCurrentPosition passando come parametri le funzioni di successo
     * e fallimento e un oggetto di configurazione con le opzioni desiderate.
     */
    onLocationCommand: function() {
        console.log('onLocationCommand');
        
        var me = this;
        
        navigator.geolocation.getCurrentPosition(me.onLocationSuccess, me.onLocationError, {
            enableHighAccuracy: false
        });
    },
    
    /**
     * Metodo che gestisce il successo dell'operazione di localizzazione del dispositivo; agisce
     * creando un record per salvare nello store la posizione corrente e imposta il nuovo centro
     * sulla mappa con il relativo marker per visualizzare nella stessa la posizione attuale.
     *
     * @param {Object} position Oggetto che rappresenta la posizione corrente, contiene le coordinate
     * e un timestamp.
     */
    onLocationSuccess: function(position) {
        console.log('onLocationSuccess');
        
        var positionStore = Ext.getStore('Positions');
        var newPosition = Ext.create('SensorDevice.model.Position', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
            accuracy: position.coords.accuracy,
            altitudeAccuracy: position.coords.altitudeAccuracy,
            heading: position.coords.heading,
            speed: position.coords.speed,
            timestamp: position.timestamp
        });
        positionStore.add(newPosition);
        positionStore.sync();
        
        var mapCmp = this.getHomeView().getAt(5).getComponent('map');
        var map = mapCmp.getMap();
        var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        
        
        mapCmp.setMapCenter(latLng);
        mapCmp.setMapOptions({
            zoom: 15
        });
        
        
        var marker = new google.maps.Marker({
            map: mapCmp.getMap(),
            position: latLng,
            icon: 'img/maps-32.png',
            animation: google.maps.Animation.DROP
        });
    },
    
    /**
     * Metodo che gestisce il fallimento dell'operazione di localizzazione avvisando l'utente con un messaggio.
     */
    onLocationError: function(error) {
        console.log('onLocationFailure');
        Ext.Msg.alert('Error retrieving position', error.code + ' ' + error.message);
    },
    
    /**
     * Metodo che cattura l'evento di renderizzazione della mappa.
     */
    onMapRenderCommand: function(scope, map) {
        console.log('onMapRenderCommand');
    },
    
    /**
     * Metodo che catura l'evento di visualizzazione della lista delle posizioni salvate.
     */
    onPositionCommand: function(home) {
        console.log('onPositionCommand');
        home.setActiveItem(7);
    },
    
    /**
     * Metodo che cattura l'evento di ritorno alla mappa.
     */
    onBackGeolocationCommand: function(home) {
        console.log('onBackGeolocationCommand');
        home.setActiveItem(5);
    },
    
    //------------------------------------------------------//
    //        Apache Cordova BarcodeScanner plugin          //
    //------------------------------------------------------//
    
    /**
     * Metodo che cattura l'evento di apertura dello scanner; agisce effettuando una chiamata
     * al metodo scan passando come parametri le funzioni di successo e fallimento.
     * Se l'operazione va a buon fine i dati letti vengono salvati in un record dello store corretto,
     * altrimenti viene avvisato l'utente tramite un messaggio.
     */
    onScanBarcodeCommand: function() {
        console.log('onScanBarcodeCommand');
        
        cordova.plugins.barcodeScanner.scan(success, fail);
        
        function success(result) {
            console.log('success');
            var barcode = Ext.create('SensorDevice.model.Barcode', {
                code: result.text,
                format: result.format
            });
            var barcodeStore = Ext.getStore('Barcodes');
            barcodeStore.add(barcode);
            barcodeStore.sync();
        }
        
        function fail(error) {
            console.log('fail');
            Ext.Msg.alert('Error', error);
        }
    },
    
    /**
     * Metodo chiamato all'inizializzazione dell'app.
     */
    init: function() {
        console.log('init SensorDevices');
    },
    
    /**
     * Metodo chiamato al lancio dell'app; si occupa di caricare gli store utilizzati.
     *
     * @param {Ext.app.Application} app
     */
    launch: function(app) {
        console.log('launch SensorDevices');
        
        Ext.getStore('Pictures').load();
        Ext.getStore('AudioVideos').load();
        Ext.getStore('PersonalInfos').load();
        Ext.getStore('Positions').load();
        Ext.getStore('Barcodes').load();
        Ext.getStore('Contacts').load();
    }
});
