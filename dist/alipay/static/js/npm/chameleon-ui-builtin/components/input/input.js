var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([21],{439:function(t,e,n){n(440),n(441)},440:function(t,e){},441:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var u=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=n(442),l=n(0),a=function(t){return t&&t.__esModule?t:{default:t}}(l),o=function(){function t(){i(this,t),this.props={value:{type:String,default:""},type:{type:String,default:"text"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},focus:{type:Boolean,default:!1},maxlength:{type:Number,default:140},returnKeyType:{type:String,default:"done"},placerHolderColor:{type:String,default:"#bebebe"},cStyle:{type:String,default:""},maxValue:{type:Number,default:1/0},minValue:{type:Number,default:-1/0}},this.data={inputValue:"",defaultStyle:"font-size: 33cpx; height: 80cpx; line-height: 80cpx; padding-left:20cpx; padding-right:20cpx; color: #000; border: 1px solid #999;border-radius: 8cpx; text-align: left; background-color: #fff;"},this.computed={wxPlaceHolderStyle:function(){return"color: "+this.placerHolderColor+";"},wxStyle:function(){return this.defaultStyle+this.cStyle},isInputNumber:function(){return"number"===this.type}},this.watch={focus:function(t,e){},value:function(t,e){this.inputValue=t}},this.methods={inputEvent:function(t){this.handleDetail(t),this.$cmlEmit("input",{value:this.inputValue}),this.$cmlEmit("inputevent",{value:this.inputValue})},blurEvent:function(t){this.handleDetail(t),this.$cmlEmit("blurevent",{value:this.inputValue}),this.$cmlEmit("blur",{value:this.inputValue})},focusEvent:function(t){this.handleDetail(t),this.$cmlEmit("focusevent",{value:this.inputValue}),this.$cmlEmit("focus",{value:this.inputValue})},confirmEvent:function(t){this.handleDetail(t),this.$cmlEmit("confirmevent",{value:this.inputValue}),this.$cmlEmit("confirm",{value:this.inputValue})},handleDetail:function(t){if(!t)return"";var e=t.detail.value;return this.isInputNumber&&(e=(0,r.getValBetweenMaxAndMin)(e,this.maxValue,this.minValue)),this.inputValue=e||""}}}return u(t,[{key:"mounted",value:function(){this.inputValue=this.value}}]),t}();e.default=new o,e.default=a.default.createComponent(e.default).getOptions()},442:function(t,e){function n(t){var e=t.split(";"),n={};return e.forEach(function(t){var e=t.split(":"),i=String(e[0]).replace(/(^\s*)|(\s*)$/g,""),u=String(e[1]).replace(/(^\s*)|(\s*)$/g,"");n[i]=u}),n}function i(t){return"number"!=typeof t?void console.error("Parameter must be a number"):window.innerWidth/750*t}function u(t){return t?/(-?\d*\.?\d*)cpx/gi.test(t)?t.replace(/(-?\d*\.?\d*)cpx/gi,function(t,e){return i(Number(e))+"px"}):t:""}function r(t){if(!t)return{};var e=t.split(";"),n={};return e.forEach(function(t){var e=t.split(":"),i=String(e[0]).replace(/(^\s*)|(\s*)$/g,"");if(i){var r=u(String(e[1]).replace(/(^\s*)|(\s*)$/g,""));n[i]=r}}),n}function l(t,e,n){return isNaN(Number(t))?"":isNaN(e)||isNaN(n)?t:(e!=1/0&&e<=Number(t)&&(t=String(e)),n!=-1/0&&n>=Number(t)&&(t=String(n)),t)}Object.defineProperty(e,"__esModule",{value:!0}),e.str2obj=n,e.cpx2px=i,e.pxTransform=u,e.cmlStyleTransfer=r,e.getValBetweenMaxAndMin=l}},[439]);