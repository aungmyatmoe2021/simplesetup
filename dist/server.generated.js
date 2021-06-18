module.exports=function(e){var t={};function o(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/dist/",o(o.s=6)}([function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){e.exports=require("path")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("webpack")},function(e,t){e.exports=require("mongodb")},function(e,t,o){"use strict";(function(e){var o;(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&o(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=()=>'\n        <!doctype html>\n        <html lang="en">\n            <head>\n                <meta charset="utf-8">\n                <title>MERN SIMPLE SETUP</title>\n            </head>\n            <body>\n                <div id="root"></div>\n                <script type="text/javascript" src="/dist/bundle.js"><\/script>\n            </body>\n        </html>\n        ';var n,a;t.a=r,(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(r,"default","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/index.js"),(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&a(e)}).call(this,o(0)(e))},function(e,t,o){e.exports=o(7)},function(e,t,o){"use strict";o.r(t),function(e){var t,r=o(2),n=o.n(r),a=o(1),l=o.n(a),i=o(4),d=(o(8),o(5));(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const s=process.cwd(),u=process.env.PORT||5e3,c=process.env.MONGODB_URL||"mongodb://localhost:27017/mernSimpleSetup",p=n()();var f,b;p.use("/dist",n.a.static(l.a.join(s,"dist"))),p.get("/",(e,t)=>{t.status(200).send(Object(d.a)())}),p.listen(u,(function(e){e&&console.error(e),console.info("Server is starting at the port "+u)})),i.MongoClient.connect(c,{useNewUrlParser:!0,useUnifiedTopology:!0},(e,t)=>{e&&console.error(e),console.log("Connected successfully to mongodb server"),t.close()}),(f="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(f.register(s,"CURRENT_WORKING_DIR","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/server.js"),f.register(u,"port","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/server.js"),f.register(c,"dbURL","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/server.js"),f.register(p,"app","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/server.js")),(b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&b(e)}.call(this,o(0)(e))},function(e,t,o){"use strict";(function(e){var t;o(3),o(9),o(10),o(11);(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=e=>{0},n={compile:r};var a,l;(a="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(a.register(r,"compile","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/devBundle.js"),a.register(n,"default","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/server/devBundle.js")),(l="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&l(e)}).call(this,o(0)(e))},function(e,t){e.exports=require("webpack-dev-middleware")},function(e,t){e.exports=require("webpack-hot-middleware")},function(e,t,o){(function(e){var t;(t="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&t(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;const r=o(1),n=o(3),a=process.cwd(),l={name:"browser",mode:"development",devtool:"eval-source-map",entry:["webpack-hot-middleware/client?reload=true",r.join(a,"client/main.js")],output:{path:r.join(a,"dist"),filename:"bundle.js",publicPath:"/dist/"},module:{rules:[{test:/\.jsx?$/,exclude:/node_modules/,use:["babel-loader"]}]},plugins:[new n.HotModuleReplacementPlugin,new n.NoEmitOnErrorsPlugin],resolve:{alias:{"react-dom":"@hot-loader/react-dom"}}};var i,d;e.exports=l,(i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(i.register(a,"CURRENT_WORKING_DIR","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/webpack.config.client.js"),i.register(l,"config","/Users/AungMyatMoe/Desktop/Project/MERN/simplesetup/webpack.config.client.js")),(d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&d(e)}).call(this,o(12)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}]);