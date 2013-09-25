Ext.data.JsonP.SensorDevice_store_Sensors({"tagname":"class","name":"SensorDevice.store.Sensors","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Sensors.js","href":"Sensors.html#SensorDevice-store-Sensors"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":[],"uses":[],"members":[{"name":"data","tagname":"cfg","owner":"SensorDevice.store.Sensors","id":"cfg-data","meta":{"private":true}},{"name":"model","tagname":"cfg","owner":"SensorDevice.store.Sensors","id":"cfg-model","meta":{"private":true}},{"name":"getData","tagname":"method","owner":"SensorDevice.store.Sensors","id":"method-getData","meta":{}},{"name":"getModel","tagname":"method","owner":"SensorDevice.store.Sensors","id":"method-getModel","meta":{}},{"name":"setData","tagname":"method","owner":"SensorDevice.store.Sensors","id":"method-setData","meta":{}},{"name":"setModel","tagname":"method","owner":"SensorDevice.store.Sensors","id":"method-setModel","meta":{}}],"code_type":"ext_define","id":"class-SensorDevice.store.Sensors","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>SensorDevice.store.Sensors</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Sensors.html#SensorDevice-store-Sensors' target='_blank'>Sensors.js</a></div></pre><div class='doc-contents'><p>Sensors rappresenta lo store inline utilizzato per visualizzare la lista\ndelle funzionalità disponibili tramite l'app</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-data' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-cfg-data' class='name expandable'>data</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{name: 'File', description: 'Permette di scrivere o leggere un file nella memoria del dispositivo'}, {name: 'Camera', description: 'Permette di catturare un\\'immagine tramite la fotocamera o la galleria del dispositivo'}, {name: 'Contacts', description: 'Permette di consultare e modificare la rubrica del dispositivo'}, {name: 'Connection', description: 'Permette di visualizzare le informazioni riguardanti la connessione in atto'}, {name: 'Media', description: 'Permette di catturare o riprodurre file audio tramite il dispositivo'}, {name: 'Geolocation', description: 'Permette di visualizzare la posizione corrente del dispositivo'}, {name: 'Barcode', description: 'Permette di leggere un barcode tramite la fotocamera del dispositivo'}]</code></p></div></div></div><div id='cfg-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-cfg-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'SensorDevice.model.Sensor'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-method-getData' class='name expandable'>getData</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of data. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Sensors-cfg-data\" rel=\"SensorDevice.store.Sensors-cfg-data\" class=\"docClass\">data</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of model. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Sensors-cfg-model\" rel=\"SensorDevice.store.Sensors-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-method-setData' class='name expandable'>setData</a>( <span class='pre'>data</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of data. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Sensors-cfg-data\" rel=\"SensorDevice.store.Sensors-cfg-data\" class=\"docClass\">data</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Array<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Sensors'>SensorDevice.store.Sensors</span><br/><a href='source/Sensors.html#SensorDevice-store-Sensors-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Sensors-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>model</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of model. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Sensors-cfg-model\" rel=\"SensorDevice.store.Sensors-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});