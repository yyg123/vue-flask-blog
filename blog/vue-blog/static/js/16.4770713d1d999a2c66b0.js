webpackJsonp([16],{CPUx:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("bGai"),o={components:{Group:i.d,VForm:i.g,Container:i.c},data:function(){return{title:this.$t("config.editTitle"),lang:this.$t("config")}},computed:{type_options:function(){return this.$store.state.config.type_options},config:function(){return this.$store.state.config.config}},created:function(){var t=this.$route.query.id;this.$store.dispatch("config/fetchConfig",t)},methods:{submit:function(){var t=this;this.$store.dispatch("config/editConfig").then(function(e){e&&t.$toast.success({title:"API 请求成功",message:e.error})})}}},s={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Container",{attrs:{title:t.title}},[n("v-form",{on:{submit:t.submit}},[n("template",{slot:"base"},[n("group",{attrs:{label:t.lang.key,type:"input"},model:{value:t.config.key,callback:function(e){t.$set(t.config,"key",e)},expression:"config.key"}}),t._v(" "),n("group",{attrs:{label:t.lang.value,type:"input"},model:{value:t.config.value,callback:function(e){t.$set(t.config,"value",e)},expression:"config.value"}}),t._v(" "),n("group",{attrs:{label:t.lang.description,type:"input"},model:{value:t.config.description,callback:function(e){t.$set(t.config,"description",e)},expression:"config.description"}}),t._v(" "),n("group",{attrs:{label:t.lang.type,type:"select",options:t.type_options},model:{value:t.config.type,callback:function(e){t.$set(t.config,"type",e)},expression:"config.type"}})],1)],2)],1)},staticRenderFns:[]},c=n("VU/8")(o,s,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=16.4770713d1d999a2c66b0.js.map