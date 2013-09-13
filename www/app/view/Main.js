Ext.define('SensorDevice.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'SensorDevice.view.Home',
        'SensorDevice.view.GalleryDemo',
        'SensorDevice.view.LibraryDemo'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Home',
                iconCls: 'home',

                items:
                { xtype: 'home' }
            },
            {
                title: 'Gallery',
                iconCls: 'star',
                
                items:
                { xtype: 'gallerydemo' }
            },
            {
                title: 'Library',
                iconCls: 'star',
                
                items:
                { xtype: 'librarydemo' }
            },
            {
                title: 'MyNotes',
                iconCls: 'organize',
                
                items:
                { xtype: 'mynotes' }
            }
        ]
    }
});
