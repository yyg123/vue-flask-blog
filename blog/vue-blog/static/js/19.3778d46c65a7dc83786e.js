webpackJsonp([19],{rLvE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=a("bGai"),s={name:"edit",components:{Group:r.d,VForm:r.g,Container:r.c},data:function(){return{disabled:!0,title:this.$t("arctype.editTitle"),advanced:!0,lang:this.$t("arctype")}},computed:{arctype:{set:function(t){this.$store.commit("arctype/SET_ARCTYPE",t)},get:function(){return this.$store.state.arctype.arctype}},type_options:function(){return this.$store.state.arctype.type_options},model_options:function(){return this.$store.state.arctype.model_options}},methods:{submit:function(){var t=this;this.$store.dispatch("arctype/editArctype").then(function(e){e&&t.$toast.success({title:"API 请求成功",message:e.error})})}},created:function(){var t=this.$route.query.id;this.$store.dispatch("arctype/initial",t)}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Container",{attrs:{title:t.title}},[a("v-form",{attrs:{advanced:t.advanced},on:{submit:t.submit}},[a("template",{slot:"base"},[a("group",{attrs:{label:t.lang.pid,type:"select",options:t.type_options},model:{value:t.arctype.pid,callback:function(e){t.$set(t.arctype,"pid",e)},expression:"arctype.pid"}}),t._v(" "),a("group",{attrs:{label:t.lang.typename,type:"input"},model:{value:t.arctype.typename,callback:function(e){t.$set(t.arctype,"typename",e)},expression:"arctype.typename"}}),t._v(" "),a("group",{attrs:{label:t.lang.litpic,type:"image"},model:{value:t.arctype.litpic,callback:function(e){t.$set(t.arctype,"litpic",e)},expression:"arctype.litpic"}}),t._v(" "),a("group",{attrs:{label:t.lang.description,type:"editor"},model:{value:t.arctype.description,callback:function(e){t.$set(t.arctype,"description",e)},expression:"arctype.description"}}),t._v(" "),a("group",{attrs:{type:"status"},model:{value:t.arctype.status,callback:function(e){t.$set(t.arctype,"status",e)},expression:"arctype.status"}}),t._v(" "),a("group",{attrs:{label:t.lang.sorts,type:"input"},model:{value:t.arctype.sorts,callback:function(e){t.$set(t.arctype,"sorts",e)},expression:"arctype.sorts"}})],1),t._v(" "),a("template",{slot:"advanced"},[a("group",{attrs:{label:t.lang.mid,type:"select",options:t.model_options},model:{value:t.arctype.model_id,callback:function(e){t.$set(t.arctype,"model_id",e)},expression:"arctype.model_id"}}),t._v(" "),a("group",{attrs:{label:t.lang.dirs,type:"input"},model:{value:t.arctype.dirs,callback:function(e){t.$set(t.arctype,"dirs",e)},expression:"arctype.dirs"}}),t._v(" "),a("group",{attrs:{label:t.lang.keywords,type:"input"},model:{value:t.arctype.keywords,callback:function(e){t.$set(t.arctype,"keywords",e)},expression:"arctype.keywords"}}),t._v(" "),a("group",{attrs:{label:t.lang.icon,type:"input"},model:{value:t.arctype.icon,callback:function(e){t.$set(t.arctype,"icon",e)},expression:"arctype.icon"}}),t._v(" "),a("group",{attrs:{label:t.$t("status.createTime"),type:"input",disabled:!0},model:{value:t.arctype.create_time,callback:function(e){t.$set(t.arctype,"create_time",e)},expression:"arctype.create_time"}}),t._v(" "),a("group",{attrs:{label:t.$t("status.updateTime"),type:"input",disabled:!0},model:{value:t.arctype.edit_time,callback:function(e){t.$set(t.arctype,"edit_time",e)},expression:"arctype.edit_time"}})],1)],2)],1)},staticRenderFns:[]},c=a("VU/8")(s,i,!1,null,null,null);e.default=c.exports}});
//# sourceMappingURL=19.3778d46c65a7dc83786e.js.map