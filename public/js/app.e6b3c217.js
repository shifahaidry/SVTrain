(function(e){function t(t){for(var r,a,i=t[0],u=t[1],s=t[2],l=0,f=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,s||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-0ab13efa":"41c0add7","chunk-25003d87":"03db90d9","chunk-2d0d621f":"e201df55","chunk-2d216dc7":"2755387d","chunk-35263cbc":"90ac9d8f","chunk-57f78a64":"69445935","chunk-ae66350e":"d3725851"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-0ab13efa":1,"chunk-25003d87":1,"chunk-35263cbc":1,"chunk-57f78a64":1,"chunk-ae66350e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0ab13efa":"72ea85f7","chunk-25003d87":"11aef95e","chunk-2d0d621f":"31d6cfe0","chunk-2d216dc7":"31d6cfe0","chunk-35263cbc":"d14f922e","chunk-57f78a64":"f4102183","chunk-ae66350e":"98061fe9"}[e]+".css",o=u.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===o))return t()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],p.parentNode.removeChild(p),n(c)},p.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var f=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",f.name="ChunkLoadError",f.type=r,f.request=a,n[1](f)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var f=0;f<s.length;f++)t(s[f]);var p=l;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"14d3":function(e,t,n){e.exports=n.p+"img/EjectXLogo.19f76475.png"},"29b2":function(e,t,n){"use strict";n("d3b7"),n("96cf");var r=n("1da1"),a=n("1ba4"),o=n.n(a);t["a"]={init:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t,n){e.ws=o()(null,{query:{sessionToken:localStorage.getItem("sessionToken")}}),e.ws.connect(),e.ws.on("open",(function(){console.log("Connect open"),e.explorer=e.ws.subscribe("explorer"),e.listeners={},e.explorer.on("ready",(function(){console.log("Connected to channel explorer"),t()})),e.explorer.on("error",(function(e){console.log("error on explorer: ",e),n()}))})),e.ws.on("close",(function(){console.log("Connect close")})),e.ws.on("error",(function(e){console.log("ws error: ",e),n(e)}))})));case 1:case"end":return t.stop()}}),t)})))()},subscibeForFolder:function(e,t){console.log("Subcribe for folder ".concat(e)),this.explorer&&(this.explorer.emit("subscribeForFolder",{path:e}),this.explorer.on("folder_".concat(e),t)),this.listeners&&(this.listeners[e]=t)},subscribe:function(e,t){this.explorer&&this.explorer.on(e,t),this.listeners&&(this.listeners[e]=t)},unsubscribe:function(e,t){this.explorer&&this.explorer.off(e,t),this.listeners&&delete this.listeners[e]},unsubscribeForFolder:function(e){console.log("Unsibscribe for folder ".concat(e));try{this.explorer.off("folder_".concat(e),this.listeners[e])}catch(t){console.log("error on adonis ws client: ",t)}this.listeners&&delete this.listeners[e]},isConnected:function(){return this.isConnected}}},"3ee4":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b"),o=n("b1e0"),c=(n("d06d"),n("0874")),i=(n("f9e3"),n("f241"),n("0b72")),u=n("ee98"),s=n.n(u),l=n("2f62"),f=(n("d3b7"),n("7c15")),p={namespaced:!0,state:{config:{},showHeader:!0,user:{},showNotes:!1,notesContent:"",calculating:!1},mutations:{SET_CONFIG:function(e,t){e.config=t},SET_SHOW_HEADER:function(e,t){e.showHeader=t},SET_USER:function(e,t){e.user=t},SET_SHOW_NOTES:function(e,t){e.showNotes=t},SET_NOTES_CONTENT:function(e,t){e.notesContent=t},SET_CALCULATING:function(e,t){e.calculating=t}},actions:{setConfig:function(e,t){var n=e.commit;n("SET_CONFIG",t)},toggleHeader:function(e){var t=e.commit,n=e.state;console.log("state",n),t("SET_SHOW_HEADER",!n.showHeader)},setUser:function(e,t){var n=e.commit;n("SET_USER",t)},logout:function(){localStorage.removeItem("sessionToken"),f["a"].setSessionToken("")},calculateStatistic:function(e){var t=e.commit;return t("SET_CALCULATING",!0),new Promise((function(e,n){f["a"].calculateStatistic().then((function(){t("SET_CALCULATING",!1),e(!0)})).catch((function(e){t("SET_CALCULATING",!1),n(e)}))}))}},getters:{showHeader:function(e){return e.showHeader},user:function(e){return e.user}}},d=n("5530"),h={namespaced:!0,state:{visible:!1,folder:{}},mutations:{SET_VISIBLE:function(e,t){e.visible=t},SET_FOLDER:function(e,t){e.folder=t}},actions:{setVisible:function(e,t){var n=e.commit;n("SET_VISIBLE",t)},setFolder:function(e,t){var n=e.commit;n("SET_FOLDER",t)},showFolder:function(e,t){var n=e.commit;t.notes&&(n("SET_FOLDER",t),n("SET_VISIBLE",!0))},setContent:function(e,t){var n=e.commit,r=e.state,a=Object(d["a"])({},r.folder);a.notes=t,n("SET_FOLDER",a)},save:function(e){var t=e.commit,n=e.state;return new Promise((function(e,r){f["a"].saveNotes(n.folder.notesPath,n.folder.notes).then((function(){t("SET_VISIBLE",!1),e()})).catch(r)}))}}},g={namespaced:!0,state:{visible:!1,folder:{}},mutations:{SET_VISIBLE:function(e,t){e.visible=t},SET_FOLDER:function(e,t){e.folder=t}},actions:{setVisible:function(e,t){var n=e.commit;n("SET_VISIBLE",t)},setFolder:function(e,t){var n=e.commit;n("SET_FOLDER",t)},showFolder:function(e,t){var n=e.commit;t.config&&(n("SET_FOLDER",t),n("SET_VISIBLE",!0))},setConfig:function(e,t){var n=e.commit,r=e.state,a=Object(d["a"])({},r.folder);a.config=t,n("SET_FOLDER",a)},save:function(e,t){var n=e.commit,r=e.state;return new Promise((function(e,a){f["a"].saveConfig(r.folder.cfgPath,t).then((function(){n("SET_VISIBLE",!1),e()})).catch(a)}))}}};r["default"].use(l["a"]);var m=new l["a"].Store({modules:{app:p,notes:h,wsconfig:g}}),v=n("8c4f"),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app"},[n("Header"),n("div",{staticClass:"app-container"},[n("router-view"),n("notifications")],1)],1)},w=[],S=(n("25f0"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"notch",on:{click:function(t){return e.toggleHeader()}}}),r("div",{directives:[{name:"show",rawName:"v-show",value:e.showHeader,expression:"showHeader"}],staticClass:"header"},[r("div",[r("b-navbar",{attrs:{toggleable:"lg",type:"light",variant:"faded"}},[r("b-navbar-nav",{attrs:{to:{name:"WorkSpacePage"}}},[r("b-nav-item",{staticClass:"logo",attrs:{to:{name:"WorkSpacePage"}}},[r("img",{attrs:{src:n("14d3")}})])],1),r("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),r("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[r("b-navbar-nav",{staticClass:"ml-auto"},[r("b-navbar-nav",[r("b-nav-item",{attrs:{to:{name:"HelpPage"}}},[r("b-icon",{staticClass:"help-icon",attrs:{icon:"question"}})],1)],1),r("b-navbar-nav",{staticClass:"user-info"},[r("b-nav-item",{on:{click:e.logout}},[e._v(" "+e._s(e.user)+" ")])],1)],1)],1)],1)],1)])])}),k=[],x={data:function(){return{showHeader:!0}},computed:{user:function(){return this.$store.state.app.user}},methods:{toggleHeader:function(){this.showHeader=!this.showHeader},logout:function(){this.$store.dispatch("app/logout"),this.$router.push({name:"LoginPage"})}}},y=x,E=(n("8ffc"),n("2877")),R=Object(E["a"])(y,S,k,!1,null,"752e11b2",null),O=R.exports,_=n("c75e"),F={name:"LoggedInLayout",components:{Header:O},created:function(){var e=this,t=localStorage.getItem("sessionToken",null);t?(f["a"].setSessionToken(t),f["a"].getConfig().then((function(t){console.log("Config: ",t),e.$store.dispatch("app/setConfig",t),e.$store.dispatch("app/setUser",t.user)}))):this.$router.push({name:"LoginPage"})},mounted:function(){_["a"].$on("auth_api_error",this.handleApiError),_["a"].$on("login",this.handleLogin)},destroyed:function(){_["a"].$off("auth_api_error"),_["a"].$off("login")},methods:{handleApiError:function(e){var t="Error";e&&e.response&&e.response.data&&e.response.data.error?t=e.response.data.error.message:e&&(t=e.toString()),this.$notify({type:"error",text:t})},handleLogin:function(){this.$notify({type:"error",text:"You need to login first"}),this.$router.push({name:"LoginPage"})}}},C=F,T=(n("5e0a"),Object(E["a"])(C,b,w,!1,null,null,null)),L=T.exports;r["default"].use(v["a"]);var j=[{name:"loggedRoutes",path:"/",component:L,children:[{name:"main",path:"/ai",component:function(){return n.e("chunk-25003d87").then(n.bind(null,"cd56"))}},{name:"explorer",path:"/explorer/",component:function(){return n.e("chunk-35263cbc").then(n.bind(null,"ba99"))},props:function(e){return{dir:e.query.dir}}},{name:"statistic",path:"/statistic/",component:function(){return n.e("chunk-2d0d621f").then(n.bind(null,"70f6"))}},{name:"HelpPage",path:"/help",component:function(){return n.e("chunk-2d216dc7").then(n.bind(null,"c3ef"))}},{name:"WorkSpacePage",path:"/",component:function(){return n.e("chunk-57f78a64").then(n.bind(null,"3a2f"))}},{name:"statistic-overview",path:"/statistic-overview",component:function(){return n.e("chunk-0ab13efa").then(n.bind(null,"37b9"))},props:function(e){return{dir:e.query.dir}}}]},{name:"LoginPage",path:"/login",component:function(){return n.e("chunk-ae66350e").then(n.bind(null,"a55b"))}}],P=new v["a"]({mode:"history",routes:j}),I=P,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"maxheight"},[n("router-view")],1)},H=[],A=(n("96cf"),n("1da1")),$=n("29b2"),D={data:function(){return{message:"important message"}},beforeCreate:function(){return Object(A["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=function(){return new Promise((function(e,t){var n=0,r=setInterval((function(){$["a"].isConnected()?(clearInterval(r),e(!0)):(n+=100,n>=1e4&&(clearInterval(r),t(Error("Timeout error with connecting to the server socker"))))}),100)}))},$["a"].init(),e.next=4,t();case 4:case"end":return e.stop()}}),e)})))()}},B=D,W=(n("5c0b"),Object(E["a"])(B,N,H,!1,null,null,null)),U=W.exports;r["default"].use(s.a),r["default"].use(a["a"]),r["default"].use(o["a"]),r["default"].component("v-icon",c["a"]),r["default"].component("tags-input",i["a"]),r["default"].config.productionTip=!1,new r["default"]({router:I,store:m,render:function(e){return e(U)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"5e0a":function(e,t,n){"use strict";var r=n("f1eb"),a=n.n(r);a.a},"7c15":function(e,t,n){"use strict";n("99af"),n("caad"),n("d3b7"),n("25f0"),n("2532"),n("96cf");var r=n("1da1"),a=n("bc3a"),o=n.n(a),c=n("c75e"),i="".concat(window.location.protocol,"//").concat(window.location.hostname).concat(window.location.port?":".concat(window.location.port):"","/api/"),u={getFiles:function(e){return"".concat(i,"getFiles?dir=").concat(e)},getRunningState:"".concat(i,"getState"),getStatistic:function(e){return"".concat(i,"getStatistic?dir=").concat(e)},getNextFolders:function(e){return"".concat(i,"nextDirectories?dir=").concat(e)},runCommand:function(e){return"".concat(i,"runCommand/").concat(e)},calculateStatistic:"".concat(i,"calculateStatistic"),moveFiles:"".concat(i,"moveFiles"),deleteFiles:"".concat(i,"deleteFiles"),getParentDirectory:function(e){return"".concat(i,"getParent?dir=").concat(e)},saveFile:"".concat(i,"saveFile"),checkFolder:function(e){return"".concat(i,"checkFolder?folder=").concat(e)},getSubfolders:function(e){return"".concat(i,"getSubfolders?folder=").concat(e)},createFolder:"".concat(i,"createFolder"),getWorkspace:"".concat(i,"getWorkspace"),setWorkspace:"".concat(i,"setWorkspace"),getLastLogs:"".concat(i,"getLastLogs"),login:"".concat(i,"login"),getConfig:"".concat(i,"config"),forwardOnly:"".concat(i,"forward-only"),saveNotes:"".concat(i,"notes"),saveConfig:"".concat(i,"save-config"),listStatistics:"".concat(i,"list-statistics"),getFoldersByPath:function(e){return e?"".concat(i,"get-folders?dir=").concat(e):"".concat(i,"get-folders")}};t["a"]={getFiles:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getFiles(t||""));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getParent:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getParentDirectory(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getNextFolders:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getNextFolders(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getStatistic:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getStatistic(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getRunningState:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getRunningState);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),runCommand:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.runCommand(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),deleteFiles:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.deleteFiles,{files:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),moveFiles:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.moveFiles,{files:t,destination:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),calculateStatistic:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.calculateStatistic);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),saveFile:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t,n),e.next=3,o.a.post(u.saveFile,{path:t,data:n});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),checkFolder:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.checkFolder(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getSubfolders:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getSubfolders(t));case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),createFolder:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.createFolder,{folder:t,name:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getWorkspace:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getWorkspace);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),setWorkspace:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.setWorkspace,{workspace:t});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),getLastLogs:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getLastLogs);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),login:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return r=null,e.prev=1,e.next=4,o.a.post(u.login,{login:t,password:n});case 4:return r=e.sent,e.abrupt("return",r.data);case 8:if(e.prev=8,e.t0=e["catch"](1),console.log(e.t0.toString()),!e.t0.toString().includes("401")){e.next=13;break}throw new Error("Invalid login or password (401)");case 13:throw e.t0;case 14:case"end":return e.stop()}}),e,null,[[1,8]])})));function t(t,n){return e.apply(this,arguments)}return t}(),setSessionToken:function(e){o.a.defaults.headers.common.Authorization=e},getConfig:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.get(u.getConfig);case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),doForwardOnly:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.forwardOnly,{selectedFiles:t,notSelectedFiles:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),saveNotes:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.saveNotes,{path:t,notes:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),saveConfig:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(t,n){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.post(u.saveConfig,{path:t,config:n});case 2:return e.abrupt("return",e.sent.data);case 3:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}(),getFoldersByPath:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:null,e.next=3,o.a.get(u.getFoldersByPath(t));case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),listStatistics:function(){var e=Object(r["a"])(regeneratorRuntime.mark((function e(){var t,n=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:[],e.next=3,o.a.post(u.listStatistics,{dirs:t});case 3:return e.abrupt("return",e.sent.data);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()},o.a.interceptors.response.use((function(e){return e}),(function(e){return console.log(e),c["a"].$emit("auth_api_error",e),console.log(e.response),e.toString().includes("401")&&c["a"].$emit("login",e),Promise.reject(e)}))},"8ffc":function(e,t,n){"use strict";var r=n("3ee4"),a=n.n(r);a.a},"9c0c":function(e,t,n){},c75e:function(e,t,n){"use strict";var r=n("2b0e"),a=new r["default"];t["a"]=a},f1eb:function(e,t,n){}});
//# sourceMappingURL=app.e6b3c217.js.map