(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{234:function(t,n,e){var content=e(301);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("dc093880",content,!0,{sourceMap:!1})},261:function(t,n,e){"use strict";var r={name:"DefaultLayout",data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Welcome",to:"/"},{icon:"mdi-chart-bubble",title:"Inspire",to:"/inspire"},{icon:"mdi-chart-bubble",title:"collect",to:"/test-collect"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js"}},watch:{$route:function(t,n){this.$store.dispatch("incrementAsync")}}},o=e(91),c=e(126),l=e.n(c),v=e(390),d=e(396),m=e(391),f=e(262),_=e(397),h=e(392),w=e(184),V=e(185),x=e(119),k=e(186),y=e(89),D=e(393),A=e(395),L=e(394),N=e(259),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[e("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(n){t.drawer=n},expression:"drawer"}},[e("v-list",t._l(t.items,(function(n,i){return e("v-list-item",{key:i,attrs:{to:n.to,router:"",exact:""}},[e("v-list-item-action",[e("v-icon",[t._v(t._s(n.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",{domProps:{textContent:t._s(n.title)}})],1)],1)})),1)],1),t._v(" "),e("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[e("v-app-bar-nav-icon",{on:{click:function(n){n.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.clipped=!t.clipped}}},[e("v-icon",[t._v("mdi-application")])],1),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.fixed=!t.fixed}}},[e("v-icon",[t._v("mdi-minus")])],1),t._v(" "),e("v-toolbar-title",{domProps:{textContent:t._s(t.title+" ("+t.$store.state.counter+")")}}),t._v(" "),e("v-spacer"),t._v(" "),e("v-btn",{attrs:{icon:""},on:{click:function(n){n.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[e("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),e("v-main",[e("v-container",[e("Nuxt")],1)],1),t._v(" "),e("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(n){t.rightDrawer=n},expression:"rightDrawer"}},[e("v-list",[e("v-list-item",{nativeOn:{click:function(n){t.right=!t.right}}},[e("v-list-item-action",[e("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e("v-footer",{attrs:{absolute:!t.fixed,app:""}},[e("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);n.a=component.exports;l()(component,{VApp:v.a,VAppBar:d.a,VAppBarNavIcon:m.a,VBtn:f.a,VContainer:_.a,VFooter:h.a,VIcon:w.a,VList:V.a,VListItem:x.a,VListItemAction:k.a,VListItemContent:y.a,VListItemTitle:y.b,VMain:D.a,VNavigationDrawer:A.a,VSpacer:L.a,VToolbarTitle:N.a})},269:function(t,n,e){e(270),t.exports=e(271)},300:function(t,n,e){"use strict";e(234)},301:function(t,n,e){var r=e(20)(!1);r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),t.exports=r},364:function(t,n,e){"use strict";e.r(n),e.d(n,"state",(function(){return r})),e.d(n,"mutations",(function(){return o})),e.d(n,"actions",(function(){return c}));e(59);var r=function(){return{counter:0}},o={increment:function(t){t.counter++}},c={incrementAsync:function(t){var n=t.commit;t.state;setTimeout((function(){n("increment")}),1e3)}}},80:function(t,n,e){"use strict";var r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(e(300),e(91)),c=e(126),l=e.n(c),v=e(390),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-app",{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);n.a=component.exports;l()(component,{VApp:v.a})}},[[269,9,2,10]]]);