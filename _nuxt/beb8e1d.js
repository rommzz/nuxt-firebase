(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{282:function(t,e,n){"use strict";n.r(e);var r=n(11),c=(n(50),n(12),n(41),n(144)),d=n(107),l={name:"BuwuhIndex",components:{Button:n(143).default},middleware:"authenticated",data:function(){return{items:[],isLoading:!1}},created:function(){this.getData()},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var q;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.isLoading=!0,q=Object(c.h)(Object(c.b)(d.a,"buwuh"),Object(c.j)("user_id","==",t.$store.state.user.user.uid)),e.next=4,Object(c.f)(q);case 4:e.sent.forEach((function(e){t.items.push({id:e.id,data:e.data()})})),t.isLoading=!1;case 7:case"end":return e.stop()}}),e)})))()},edit:function(t){this.$router.push({name:"buwuh-id",params:{id:t}})},deleteData:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,n.prev=1,n.next=4,Object(c.c)(Object(c.d)(d.a,"buwuh",t.id));case 4:e.$toast.success("Data berhasi dihapus"),e.items=[],e.getData(),n.next=13;break;case 9:n.prev=9,n.t0=n.catch(1),e.isLoading=!1,console.log(n.t0);case 13:case"end":return n.stop()}}),n,null,[[1,9]])})))()}}},o=n(31),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-100 shadow-md p-2 rounded-md"},[t.isLoading?n("div",[n("span",{staticClass:"anitmate-pulse"},[t._v("Memuat data...")])]):[t.items.length?[n("div",{staticClass:"flex justify-between mb-5"},[n("span",{staticClass:"self-center sm:text-4xl text-2xl font-bold"},[t._v("\n\t\t\t\t\t\tList Data\n\t\t\t\t\t")]),t._v(" "),n("nuxt-link",{attrs:{to:"/buwuh/new"}},[n("Button",{attrs:{label:"Tambah data"}})],1)],1),t._v(" "),n("div",[t._l(t.items,(function(e,r){return[n("div",{key:r,staticClass:"flex my-2"},[n("div",{staticClass:"w-full p-1 mr-2 pr-2 pl-2 bg-white rounded"},[n("div",[n("span",{staticClass:"sm:text-3xl text-xl font-bold"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.data.name)+"\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),n("div",[n("span",{staticClass:"font-medium"},[t._v("\n\t\t\t\t\t\t\t\t\t\t"+t._s(e.data.value)+"\n\t\t\t\t\t\t\t\t\t")])])]),t._v(" "),n("div",{staticClass:"text-center"},[n("nuxt-link",{attrs:{to:{name:"buwuh-id",params:{id:e.id}}}},[n("Button",{attrs:{"fill-width":"",color:"green",label:"Edit"}})],1),t._v(" "),n("div",{staticClass:"my-1"}),t._v(" "),n("Button",{attrs:{color:"red",label:"Hapus"},on:{click:function(n){return t.deleteData(e)}}})],1)]),t._v(" "),r+1<t.items.length?n("div",{key:"line"+r,staticClass:"my-2 bg-gray-300 h-0.5"}):t._e()]}))],2)]:n("div",{staticClass:"text-center py-5"},[t._m(0),t._v(" "),n("nuxt-link",{attrs:{to:"/buwuh/new"}},[n("Button",{attrs:{label:"Tambah data"}})],1)],1)]],2)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("span",[t._v("\n            Belum ada data\n          ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Button:n(143).default})}}]);