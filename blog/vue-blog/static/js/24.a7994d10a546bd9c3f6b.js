webpackJsonp([24],{"wm3/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bGai"),c={components:{VTd:a.h,List:a.e,Container:a.c,Checkbox:a.b},data:function(){return{title:this.$t("archive.index"),lang:this.$t("archive"),checked:!1,tgCheck:!1}},computed:{list:function(){return this.$store.state.table.list},checkbox:{get:function(){return this.$store.state.table.checkbox},set:function(t){this.$store.commit("table/SET_CHECKBOX",t)}}},watch:{checkbox:function(t){var e=t.length;e===this.list.length&&(this.tgCheck=!0),0===e&&(this.tgCheck=!1)}},methods:{makeFlag:function(t){var e=[];return void 0!==t&&(e=t.split(",")),e}},mounted:function(){this.$store.commit("table/SET_URL","/api/archive/index"),this.$store.dispatch("table/fetchList")}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("container",{attrs:{title:t.title}},[s("list",{attrs:{"show-del":!0}},[s("thead",{attrs:{slot:"thead"},slot:"thead"},[s("tr",[s("th",[s("checkbox",{attrs:{checked:t.tgCheck},model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}})],1),t._v(" "),s("th",[t._v(t._s(t.lang.id))]),t._v(" "),s("th",[t._v(t._s(t.lang.title))]),t._v(" "),s("th",[t._v(t._s(t.lang.typename))]),t._v(" "),s("th",[t._v(t._s(t.lang.username)+" - "+t._s(t.lang.uid))]),t._v(" "),s("th",[t._v(t._s(t.lang.click))]),t._v(" "),s("th",[t._v(t._s(t.$t("status.createTime")))]),t._v(" "),s("th",[t._v(t._s(t.$t("status.updateTime")))]),t._v(" "),s("th",[t._v(t._s(t.lang.status))]),t._v(" "),s("th",[t._v(t._s(t.$t("operation.name")))])])]),t._v(" "),s("tbody",{attrs:{slot:"tbody"},slot:"tbody"},t._l(t.list,function(e){return s("tr",[s("td",[s("checkbox",{attrs:{checked:t.checked,value:e.id},model:{value:t.checkbox,callback:function(e){t.checkbox=e},expression:"checkbox"}})],1),t._v(" "),s("td",[t._v(t._s(e.id))]),t._v(" "),s("td",[t._v(t._s(e.title)+"\n        "),t._l(t.makeFlag(e.flag),function(a){return e.flag?s("span",{staticClass:"label label-info",staticStyle:{margin:"0 3px"}},[t._v("\n          "+t._s(t.$t("flags."+a)))]):t._e()})],2),t._v(" "),s("td",[t._v(t._s(e.typename))]),t._v(" "),s("td",[t._v(t._s(e.username)+" - "+t._s(e.uid))]),t._v(" "),s("td",[t._v(t._s(e.click))]),t._v(" "),s("td",[t._v(t._s(e.create_time))]),t._v(" "),s("td",[t._v(t._s(e.edit_time))]),t._v(" "),s("v-td",{attrs:{type:"status",value:e.status}}),t._v(" "),s("v-td",{attrs:{type:"opt",value:e.id,jumpArchive:e,"edit-route":"article_create_edit"}})],1)}))])],1)},staticRenderFns:[]},n=s("VU/8")(c,i,!1,null,null,null);e.default=n.exports}});
//# sourceMappingURL=24.a7994d10a546bd9c3f6b.js.map