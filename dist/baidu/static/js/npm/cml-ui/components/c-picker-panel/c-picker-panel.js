var __CML__GLOBAL=require("../../../../manifest.js");__CML__GLOBAL.webpackJsonp([82],{329:function(t,e,n){n(330),n(331)},330:function(t,e){},331:function(t,e,n){function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var c=n(0),u=function(t){return t&&t.__esModule?t:{default:t}}(c),o=function t(){i(this,t),this.props={show:{type:Boolean,default:!1},height:{type:Number,default:500},title:{type:String,default:"请选择"},headerHeight:{type:Number,default:100},cancelBtnStyle:{type:String,default:""},confirmBtnStyle:{type:String,default:""}},this.data={},this.computed={wraperStyle:function(){return"height: "+this.height+"cpx"},headerStyle:function(){return"height: "+this.headerHeight+"cpx"},computedCancelBtn:function(){return this.cancelBtnStyle},computedConfirmBtn:function(){return this.confirmBtnStyle}},this.methods={cancelclick:function(){this.$cmlEmit("cancel")},confirmclick:function(){this.$cmlEmit("confirm")}}};e.default=new o,e.default=u.default.createComponent(e.default).getOptions()}},[329]);