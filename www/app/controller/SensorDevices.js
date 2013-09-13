Ext.define('SensorDevice.controller.SensorDevices', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.JSON',
        'Ext.Msg'
    ],
    
    config: {
        refs: {
            homeView: 'home',
            cameraDemoView: 'camerademo',
            mediaDemoView: 'mediademo',
            galleryDemoView: 'gallerydemo',
            libraryDemoView: 'librarydemo',
            fileDemoView: 'filedemo'
        },
        control: {
            homeView: {
                itemDiscloseCommand: 'onItemDiscloseCommand',
                backButtonCommand: 'onBackButtonCommand',
                loadContactsCommand: 'onLoadContactsCommand',
                deleteContactsCommand: 'onDeleteContactsCommand',
                locationCommand: 'onLocationCommand',
                mapRenderCommand: 'onMapRenderCommand',
                positionCommand: 'onPositionCommand',
                backGeolocationCommand: 'onBackGeolocationCommand'
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
                playAudioCommand: 'onPlayAudioCommand',
                pauseAudioCommand: 'onPauseAudioCommand',
                stopAudioCommand: 'onStopAudioCommand'
            }
        }
    },
    
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
    
    onBackButtonCommand: function(home) {
        console.log('onBackButtonCommand');
        home.setActiveItem(0);
    },
    
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
        personalInfoStore.add(currentInfo);
        personalInfoStore.sync();
    },
    
    onLoadFormCommand: function() {
        console.log('onLoadFormCommand');
        
        var personalInfoStore = Ext.getStore('PersonalInfos');
        var newInfo = personalInfoStore.getAt(0);
        var fileDemo = this.getFileDemoView();
        fileDemo.setRecord(newInfo);
    },
    
    onDeleteFormCommand: function() {
        console.log('onDeleteFormCommand');
        
        var fileDemo = this.getFileDemoView();
        fileDemo.reset();
    },
    
    onTrashPersonalInfoCommand: function() {
        console.log('onTrashPersonalInfoCommand');
        Ext.getStore('PersonalInfos').removeAll();
        this.onDeleteFormCommand();
        Ext.Msg.alert('Attention', 'The Personal Info\'s store has been deleted.');
    },
    
    onTrashLibraryCommand: function() {
        console.log('onTrashLibraryCommand');
        Ext.getStore('AudioVideos').removeAll();
        Ext.Msg.alert('Attention', 'The Media\'s store has been deleted.');
    },
    
    onMediaListDiscloseCommand: function(library, record, index) {
        console.log('onMediaListDiscloseCommand');
        if (record.get('type').search(/^audio/) != -1) {
            library.getAt(1).getComponent('audioItem').setUrl(record.get('path'));
            library.setActiveItem(1);
        }
        else {
            library.getAt(2).getComponent('videoItem').setUrl(record.get('path'));
            library.setActiveItem(2);
        }
    },
    
    onBackLibraryCommand: function() {
        console.log('onBackLibraryCommand');
        this.getLibraryDemoView().setActiveItem(0);
    },
    
    onPlayAudioCommand: function(library) {
        console.log('onPlayAudioCommand');
        library.getAt(1).getComponent('audioItem').play();
    },
    
    onPauseAudioCommand: function(library) {
        console.log('onPauseAudioCommand');
        library.getAt(1).getComponent('audioItem').pause();
    },
    
    onStopAudioCommand: function(library) {
        console.log('onStopAudioCommand');
        library.getAt(1).getComponent('audioItem').stop();
    },
    
    onPlayVideoCommand: function(library) {
        console.log('onPlayVideoCommand');
        library.getAt(2).getComponent('videoItem').play();
    },
    
    onPauseVideoCommand: function(library) {
        console.log('onPauseVideoCommand');
        library.getAt(2).getComponent('videoItem').pause();
    },
    
    onStopVideoCommand: function(library) {
        console.log('onStopVideoCommand');
        library.getAt(2).getComponent('videoItem').stop();
    },
    
    /*
     * Cordova capture
     */
    onCaptureAudioCommand: function() {
        console.log('onCaptureAudioCommand');
        var me = this;
        
        navigator.device.capture.captureAudio(me.captureMediaSuccess, me.captureError);
    },
    
    onCaptureVideoCommand: function() {
        console.log('onCaptureVideoCommand');
        var me = this;
        
        navigator.device.capture.captureVideo(me.captureMediaSuccess, me.captureError);
    },
    
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
    
    captureError: function(error) {
        console.log('captureError');
        Ext.Msg.alert('Error', error.code);
    },
    
    /*
     * Cordova file
     */
    onBackupFormCommand: function(fileDemo) {
        console.log('onBackupFormCommand');
        
        var personalInfoStore = Ext.getStore('PersonalInfos');
        var record = personalInfoStore.getAt(0).getData();
        var string = Ext.JSON.encode(record);
        console.log(string);
        
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
    
    /*
     * Cordova camera capture
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
    
    onCaptureFailure: function() {
        console.log('onCaptureFailure');
        
        Ext.Msg.alert('Error', 'There was an error when acquiring the picture.');
    },
    
    /*
     * Cordova contacts
     */
    onLoadContactsCommand: function() {
        console.log('onLoadContactsCommand');
        
        var me = this;
        
        var contactsField = ['displayName', 'emails', 'phoneNumbers'];
        navigator.contacts.find(contactsField, me.onContactSuccess, me.onContactError);
    },
    
    onContactSuccess: function(contacts) {
        console.log('onContactSuccess');
        
        var contactsStore = Ext.getStore('Contacts');
        
        for (var i = 0; i < contacts.lenght; i++) {
            var contact = Ext.create('SensorDevice.model.Contact', {
                name: contacts[i].displayName,
                email: contacts[i].emails[0],
                phoneNumber: contacts[i].phoneNumbers[0]
            });
            contactsStore.add(contact);
        }
        
        contactsStore.sync();
    },
    
    onContactError: function(contactError) {
        console.log('onContactError');
        
        Ext.Msg.alert('Error retrieving contacts');
    },
    
    onDeleteContactsCommand: function() {
        console.log('onDeleteContactsCommand');
        
        var contactsStore = Ext.getStore('Contacts');
        contactsStore.removeAll();
    },
    
    /*
     * Cordova geolocation
     */
    onLocationCommand: function() {
        console.log('onLocationCommand');
        
        var me = this;
        
        navigator.geolocation.getCurrentPosition(me.onLocationSuccess, me.onLocationError, {
            enableHighAccuracy: false,
            timeout: 5000
        });
    },
    
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
        mapCmp.setMapCenter(
            new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
            /*{
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            }*/
        );
        mapCmp.setMapOptions({
            zoom: 15
        });
        
        var marker = new google.maps.Marker({
            map: mapCmp.getMap(),
            position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
            icon: 'img/maps-32.png',
            animation: google.maps.Animation.DROP
        });
    },
    
    onLocationError: function(error) {
        console.log('onLocationFailure');
        
        Ext.Msg.alert('Error retrieving position', error.code + ' ' + error.message);
    },
    
    onMapRenderCommand: function(scope, map) {
        console.log('onMapRenderCommand');
        
    },
    
    onPositionCommand: function(home) {
        console.log('onPositionCommand');
        
        home.setActiveItem(6);
    },
    
    onBackGeolocationCommand: function(home) {
        console.log('onBackGeolocationCommand');
        
        home.setActiveItem(5);
    },
    
    //called when the Application is initialized
    init: function() {
        console.log('init SensorDevices');
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        console.log('launch SensorDevices');
        
        Ext.getStore('Pictures').load();
        Ext.getStore('AudioVideos').load();
        Ext.getStore('PersonalInfos').load();
        Ext.getStore('Positions').load();
    }
});
