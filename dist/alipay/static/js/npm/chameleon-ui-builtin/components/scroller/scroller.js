var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([87],{479:function(t,e,r){r(480),r(481)},480:function(t,e){},481:function(t,e,r){function n(t){return t&&t.__esModule?t:{default:t}}function i(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,r){function n(i,o){try{var c=e[i](o),l=c.value}catch(t){return void r(t)}if(!c.done)return Promise.resolve(l).then(function(t){n("next",t)},function(t){n("throw",t)});t(l)}return n("next")})}}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var c=r(45),l=n(c),u=r(5),a=n(u),s=r(21),f=n(s),h=r(39),d=n(h),p=function(){function t(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}}(),m=r(0),y=n(m),v=function(){function t(){o(this,t),this.props={cstyle:{type:String,default:""},bottomOffset:{type:Number,default:0},scrollDirection:{type:String,default:"vertical"},bounce:{type:Boolean,default:!0},height:{type:Number,default:0},width:{type:Number,default:0},scrollTop:{type:Number,default:0},scrollLeft:{type:Number,default:0}},this.data={cmtStyle:""},this.computed={wrapperStyle:function(){if("vertical"===this.scrollDirection){if(this.height>=0)return this.cstyle+";height:"+this.height+"rpx;"}else if(this.width>=0)return this.cstyle+";width:"+this.width+"rpx;white-space:nowrap;";return this.cmtStyle+this.cstyle},scrollTopPx:function(){return(0,d.default)(this.scrollTop)},scrollLeftPx:function(){return(0,d.default)(this.scrollLeft)}},this.methods={onScroll:function(t){var e=t.detail;e.deltaX=e.deltaX||0,e.deltaY=e.deltaY||0,Object.keys(e).forEach(function(t){e[t]=(0,f.default)(e[t])}),this.$cmlEmit("onscroll",e),this.$cmlEmit("customscroll",e)},onBottom:function(t){var e={direction:""};this.$cmlEmit("scrolltobottom",e)}}}return p(t,[{key:"mounted",value:function(){var t=this,e=this;setTimeout(i(l.default.mark(function r(){var n,i;return l.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:if("vertical"!==t.scrollDirection||t.height){r.next=3;break}return console.error("纵向滚动必须传递高度属性"),r.abrupt("return");case 3:if("vertical"===t.scrollDirection||t.width){r.next=6;break}return console.error("横向滚动必须传递宽度属性"),r.abrupt("return");case 6:if(-1!==t.height&&-1!==t.width){r.next=12;break}return n=my.createSelectorQuery().select("#c-scroller").boundingClientRect(),r.next=10,(0,a.default)();case 10:i=r.sent,n.exec(function(t){var r=t[0];if(r)if("vertical"===e.scrollDirection){var n=i.viewportHeight-r.top;e.cmtStyle="height:"+n+"cpx;"}else{var o=i.viewportWidth-r.left;e.cmtStyle="width:"+o+"cpx;white-space:nowrap;"}});case 12:case"end":return r.stop()}},r,t)})),200)}}]),t}();e.default=new v,e.default=y.default.createComponent(e.default).getOptions()}},[479]);