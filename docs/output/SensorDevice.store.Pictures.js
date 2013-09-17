Ext.data.JsonP.SensorDevice_store_Pictures({"tagname":"class","name":"SensorDevice.store.Pictures","autodetected":{"aliases":true,"alternateClassNames":true,"extends":true,"mixins":true,"requires":true,"uses":true,"members":true,"code_type":true},"files":[{"filename":"Pictures.js","href":"Pictures.html#SensorDevice-store-Pictures"}],"aliases":{},"alternateClassNames":[],"extends":"Ext.data.Store","mixins":[],"requires":["Ext.data.proxy.LocalStorage"],"uses":[],"members":[{"name":"grouper","tagname":"cfg","owner":"SensorDevice.store.Pictures","id":"cfg-grouper","meta":{"private":true}},{"name":"model","tagname":"cfg","owner":"SensorDevice.store.Pictures","id":"cfg-model","meta":{"private":true}},{"name":"proxy","tagname":"cfg","owner":"SensorDevice.store.Pictures","id":"cfg-proxy","meta":{"private":true}},{"name":"sorters","tagname":"cfg","owner":"SensorDevice.store.Pictures","id":"cfg-sorters","meta":{"private":true}},{"name":"storeId","tagname":"cfg","owner":"SensorDevice.store.Pictures","id":"cfg-storeId","meta":{"private":true}},{"name":"getGrouper","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-getGrouper","meta":{}},{"name":"getModel","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-getModel","meta":{}},{"name":"getProxy","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-getProxy","meta":{}},{"name":"getSorters","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-getSorters","meta":{}},{"name":"getStoreId","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-getStoreId","meta":{}},{"name":"setGrouper","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-setGrouper","meta":{}},{"name":"setModel","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-setModel","meta":{}},{"name":"setProxy","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-setProxy","meta":{}},{"name":"setSorters","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-setSorters","meta":{}},{"name":"setStoreId","tagname":"method","owner":"SensorDevice.store.Pictures","id":"method-setStoreId","meta":{}}],"code_type":"ext_define","id":"class-SensorDevice.store.Pictures","component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>SensorDevice.store.Pictures</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.data.proxy.LocalStorage</div><h4>Files</h4><div class='dependency'><a href='source/Pictures.html#SensorDevice-store-Pictures' target='_blank'>Pictures.js</a></div></pre><div class='doc-contents'><p>Pictures rappresenta lo store locale utilizzato per salvare le immagini\ncatturate tramite la fotocamera del dispositivo</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-grouper' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-grouper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-cfg-grouper' class='name expandable'>grouper</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-model' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-cfg-model' class='name expandable'>model</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'SensorDevice.model.Picture'</code></p></div></div></div><div id='cfg-proxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-cfg-proxy' class='name expandable'>proxy</a> : Object<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'localstorage', id: 'SensorDevice-picture-store'}</code></p></div></div></div><div id='cfg-sorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-cfg-sorters' class='name expandable'>sorters</a> : Array<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{property: 'timestamp', direction: 'ASC'}]</code></p></div></div></div><div id='cfg-storeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-cfg-storeId' class='name expandable'>storeId</a> : String<span class=\"signature\"><span class='private' >private</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Pictures'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getGrouper' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-grouper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-getGrouper' class='name expandable'>getGrouper</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of grouper. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-grouper\" rel=\"SensorDevice.store.Pictures-cfg-grouper\" class=\"docClass\">grouper</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-getModel' class='name expandable'>getModel</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of model. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-model\" rel=\"SensorDevice.store.Pictures-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-proxy\" rel=\"SensorDevice.store.Pictures-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-getSorters' class='name expandable'>getSorters</a>( <span class='pre'></span> ) : Array<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of sorters. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-sorters\" rel=\"SensorDevice.store.Pictures-cfg-sorters\" class=\"docClass\">sorters</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-getStoreId' class='name expandable'>getStoreId</a>( <span class='pre'></span> ) : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Returns the value of storeId. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-storeId\" rel=\"SensorDevice.store.Pictures-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGrouper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-grouper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-setGrouper' class='name expandable'>setGrouper</a>( <span class='pre'>grouper</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of grouper. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-grouper\" rel=\"SensorDevice.store.Pictures-cfg-grouper\" class=\"docClass\">grouper</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>grouper</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-model' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-setModel' class='name expandable'>setModel</a>( <span class='pre'>model</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of model. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-model\" rel=\"SensorDevice.store.Pictures-cfg-model\" class=\"docClass\">model</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-proxy\" rel=\"SensorDevice.store.Pictures-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setSorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-setSorters' class='name expandable'>setSorters</a>( <span class='pre'>sorters</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of sorters. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-sorters\" rel=\"SensorDevice.store.Pictures-cfg-sorters\" class=\"docClass\">sorters</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sorters</span> : Array<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div><div id='method-setStoreId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='SensorDevice.store.Pictures'>SensorDevice.store.Pictures</span><br/><a href='source/Pictures.html#SensorDevice-store-Pictures-cfg-storeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/SensorDevice.store.Pictures-method-setStoreId' class='name expandable'>setStoreId</a>( <span class='pre'>storeId</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Sets the value of storeId. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/SensorDevice.store.Pictures-cfg-storeId\" rel=\"SensorDevice.store.Pictures-cfg-storeId\" class=\"docClass\">storeId</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>storeId</span> : String<div class='sub-desc'><p>The new value.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});