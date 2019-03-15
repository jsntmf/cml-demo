var __CML__GLOBAL=require("../../../manifest.js");__CML__GLOBAL.webpackJsonp([5],{188:function(e,t,n){n(189),n(190)},189:function(e,t){},190:function(e,t,n){function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(22),a=o(r),i=n(193),s=o(i),u=n(194),f=o(u),d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c=n(0),l=o(c);t.default={data:{title:"",subtitle:"网络请求",respones:[],cell:{title:"网络请求",list:[{title:"",btnText:"点击发起"}]},map:{get:"以 cml.get 发起请求",post:"以 cml.post 发起请求",request:"以 cml.request 发起 put 请求"},isShowLoading:!1},beforeCreate:function(e){this.method=e.method,this.title=["cml",this.method].join(".")},created:function(){this.cell.list[0].title=this.map[this.method]},methods:{onBtnClicked:function(e){var t=this,n=this.method;this.showLoading(),"get"===n&&(0,f.default)({url:"https://postman-echo.com/get?name=get"}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()}),"post"===n&&(0,s.default)({url:"https://postman-echo.com/post?name=post",data:{name:"cml"}}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()}),"request"===n&&(0,a.default)({url:"https://postman-echo.com/put?name=request",data:{name:"cml"},method:"PUT"}).then(function(e){t.respones=t.flatResponses(e),t.hideLoading()})},flatResponses:function(e){var t=[];return e&&Object.keys(e).filter(function(e){return~["args","headers","url","data"].indexOf(e)}).forEach(function(n){"string"==typeof e[n]&&t.push({name:n,value:e[n]}),"object"===d(e[n])&&t.push({name:n,child:Object.entries(e[n]).map(function(e){return e.join(":")})})}),t},showLoading:function(){this.isShowLoading=!0},hideLoading:function(){this.isShowLoading=!1}}},t.default=l.default.createPage(t.default).getOptions()},191:function(e,t,n){function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(192),i=n(6),s=n(1),u=function(){function e(){o(this,e)}return r(e,[{key:"request",value:function(e){var t=e.url,n=e.body,o=e.headers,r=e.method,s=e.cb;n=(0,i.getQueryParamsFromUrl)(n),my.httpRequest({url:t,method:r,data:n,dataType:"json",headers:o,success:function(e){s({status:e.status,data:e.data,headers:(0,a.parseHeader)(e.headers)})},fail:function(e){throw s({status:-1,data:"request failed",headers:"{}"}),e}})}}]),e}();t.default=new u,(0,s.copyProtoProperty)(t.default)},192:function(e,t){function n(e){if(e.status>=200&&e.status<300)return e;var t=new Error(e.statusText);throw t.res=e,t.type="http",t}function o(e){return e.json().catch(function(t){throw t&&(t.type="json",t.res=e),t})}function r(e){var t=new FormData;return Object.keys(e).forEach(function(n){void 0!==e[n]&&t.append(n,e[n])}),t}function a(e){var t={};return Object.keys(e).forEach(function(n){var o=e[n];o instanceof Array&&(o=o[0]),t[n.toLowerCase()]=o}),JSON.stringify(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.parseHeader=a;var i={"Content-Type":"application/x-www-form-urlencoded"},s={credentials:"same-origin"},u={form:"application/x-www-form-urlencoded",json:"application/json"};t.default={defaultHeaders:i,defaultOptions:s,defaultType:"form",contentTypeMap:u,filterStatus:n,parseJSON:o,toForm:r,parseHeader:a}},193:function(e,t,n){function o(e){return e.method="POST",(0,a.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(22),a=function(e){return e&&e.__esModule?e:{default:e}}(r)},194:function(e,t,n){function o(e){return e.method="GET",(0,a.default)(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var r=n(22),a=function(e){return e&&e.__esModule?e:{default:e}}(r)},22:function(e,t,n){function o(e){var t=e.domainkey,n=e.url,o=e.data,a=void 0===o?{}:o,u=e.method,f=void 0===u?"GET":u,d=e.header,c=void 0===d?{}:d,l=e.contentType,p=void 0===l?"form":l,h=e.setting,m=void 0===h?{apiPrefix:(0,s.isNeedApiPrefix)(n)}:h,y=e.resDataType,v=void 0===y?"json":y;if(t=t||"apiPrefix",m.apiPrefix&&(n=(0,s.addApiPrefix)(n,t)),/^get$/gi.test(f))a&&!(0,s.isEmpty)(a)&&(0,s.queryStringify)(a)&&(-1===n.indexOf("?")&&(n+="?"),n+=(0,s.queryStringify)(a),a=""),a="";else switch(p){case"form":a=(0,s.queryStringify)(a),c=r({},c,{"Content-Type":"application/x-www-form-urlencoded"});break;case"json":a=JSON.stringify(a),c=r({},c,{"Content-Type":"application/json"})}return new Promise(function(e,t){i.default.request({url:n,body:a,setting:m,method:f,headers:c,cb:function(n){var o=n.status,r=n.data;o>=200&&o<300?("json"===v&&(r=(0,s.tryJsonParse)(r)),e(r)):t("http statusCode:"+o)}})})}Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e};t.default=o;var a=n(191),i=function(e){return e&&e.__esModule?e:{default:e}}(a),s=n(6)}},[188]);