import e from"axios";function t(){return t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},t.apply(this,arguments)}var r=function(){try{return process.env.MIX_VAPOR_ASSET_URL?process.env.MIX_VAPOR_ASSET_URL:""}catch(e){throw console.error("Unable to automatically resolve the asset URL. Use Vapor.withBaseAssetUrl() to specify it manually."),e}},n=new(function(){function n(){}var o=n.prototype;return o.asset=function(e){return r()+"/"+e},o.withBaseAssetUrl=function(e){r=function(){return e||""}},o.store=function(r,n){void 0===n&&(n={});try{var o=n.httpClient?n.httpClient:e;return Promise.resolve(o.post(n.signedStorageUrl?n.signedStorageUrl:"/vapor/signed-storage-url",t({bucket:n.bucket||"",content_type:n.contentType||r.type,expires:n.expires||"",visibility:n.visibility||""},n.data),t({baseURL:n.baseURL||null,headers:n.headers||{}},n.options))).then(function(e){var t=e.data.headers;return"Host"in t&&delete t.Host,void 0===n.progress&&(n.progress=function(){}),Promise.resolve(o.put(e.data.url,r,{cancelToken:n.cancelToken||"",headers:t,onUploadProgress:function(e){n.progress(e.loaded/e.total)}})).then(function(){return e.data.extension=r.name.split(".").pop(),e.data})})}catch(e){return Promise.reject(e)}},n}());export{n as default};
//# sourceMappingURL=laravel-vapor.esm.js.map
