(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{283:function(e,o,r){"use strict";r.r(o);r(12);var t=r(108),n={name:"LoginPage",components:{Button:r(143).default},middleware:"loggedin",data:function(){return{form:this.getClearForm(),showPassword:!1,isLoading:!1}},methods:{getClearForm:function(){return{email:null,password:null}},submitFb:function(){var e=this,o=new t.a,r=Object(t.d)();Object(t.f)(r,o).then((function(o){var r=o.user,t={uid:r.uid,email:r.email,displayName:r.displayName};e.$store.commit("user/setUserData",t),e.$toast.success("Login berhasil"),e.$router.push({path:"/buwuh"})})).catch((function(e){var o=t.a.credentialFromError(e);console.log(e,o)}))},submitGoogle:function(){var e=this,o=new t.b,r=Object(t.d)();Object(t.f)(r,o).then((function(o){var r=o.user,t={uid:r.uid,email:r.email,displayName:r.displayName};e.$store.commit("user/setUserData",t),e.$toast.success("Login berhasil"),e.$router.push({path:"/buwuh"})})).catch((function(e){var o=t.b.credentialFromError(e);console.log(e,o)}))},submit:function(){var e=this;if(this.form.email||this.form.password){this.isLoading=!0;var o=this.form.email,r=this.form.password,n=Object(t.d)();Object(t.e)(n,o,r).then((function(o){var r={uid:o.user.uid,email:o.user.email};e.$store.commit("user/setUserData",r),e.$toast.success("Login berhasil"),e.$router.push({path:"/buwuh"})})).catch((function(o){console.log(o.message),e.$toast.show("gagal login: "+o.message)})).finally((function(){e.isLoading=!1}))}else this.$toast.success("Lengkapi form terlebih dahulu!")}}},d=r(31),component=Object(d.a)(n,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",{},[r("form",{staticClass:"shadow-lg rounded-md shadow-sm -space-y-px mx-auto max-w-screen-sm p-4 bg-gray-100",on:{submit:function(e){e.preventDefault()}}},[r("div",{staticClass:"font-bold py-8 text-2xl text-center"},[e._v("\n        LOGIN\n      ")]),e._v(" "),r("div",{},[r("div",[r("label",{staticClass:"sr-only",attrs:{for:"email-address"}},[e._v("Email address")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.email,expression:"form.email"}],staticClass:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",attrs:{id:"email-address",name:"email",type:"email",autocomplete:"email",required:"",placeholder:"Email address"},domProps:{value:e.form.email},on:{input:function(o){o.target.composing||e.$set(e.form,"email",o.target.value)}}})]),e._v(" "),r("div",[r("label",{staticClass:"sr-only",attrs:{for:"password"}},[e._v("Password")]),e._v(" "),"checkbox"==(e.showPassword?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",attrs:{id:"password",name:"password",autocomplete:"current-password",required:"",placeholder:"Password",type:"checkbox"},domProps:{checked:Array.isArray(e.form.password)?e._i(e.form.password,null)>-1:e.form.password},on:{change:function(o){var r=e.form.password,t=o.target,n=!!t.checked;if(Array.isArray(r)){var d=e._i(r,null);t.checked?d<0&&e.$set(e.form,"password",r.concat([null])):d>-1&&e.$set(e.form,"password",r.slice(0,d).concat(r.slice(d+1)))}else e.$set(e.form,"password",n)}}}):"radio"==(e.showPassword?"text":"password")?r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",attrs:{id:"password",name:"password",autocomplete:"current-password",required:"",placeholder:"Password",type:"radio"},domProps:{checked:e._q(e.form.password,null)},on:{change:function(o){return e.$set(e.form,"password",null)}}}):r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.password,expression:"form.password"}],staticClass:"appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm",attrs:{id:"password",name:"password",autocomplete:"current-password",required:"",placeholder:"Password",type:e.showPassword?"text":"password"},domProps:{value:e.form.password},on:{input:function(o){o.target.composing||e.$set(e.form,"password",o.target.value)}}})]),e._v(" "),r("div",{staticClass:"pt-1 text-sm"},[r("label",{attrs:{for:"showPassword"}},[e._v("Lihat password")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.showPassword,expression:"showPassword"}],attrs:{id:"showPassword",type:"checkbox"},domProps:{checked:Array.isArray(e.showPassword)?e._i(e.showPassword,null)>-1:e.showPassword},on:{change:function(o){var r=e.showPassword,t=o.target,n=!!t.checked;if(Array.isArray(r)){var d=e._i(r,null);t.checked?d<0&&(e.showPassword=r.concat([null])):d>-1&&(e.showPassword=r.slice(0,d).concat(r.slice(d+1)))}else e.showPassword=n}}})])]),e._v(" "),r("div",{staticClass:"flex justify-between py-4"},[r("div",[r("nuxt-link",{attrs:{to:"/register"}},[r("span",{staticClass:"hover:text-blue-500"},[e._v("\n\t\t\t\t\t\t\tBelum Punya Akun?\n\t\t\t\t\t\t")])])],1),e._v(" "),e._m(0)]),e._v(" "),r("div",[r("Button",{staticClass:"min-w-full",attrs:{isLoading:e.isLoading,label:"Masuk"},on:{click:function(o){return e.submit()}}}),e._v(" "),r("div",{staticClass:"mt-2 bg-gray-400 mx-auto w-3/4",staticStyle:{height:"1px"}}),e._v(" "),r("Button",{staticClass:"min-w-full my-2",attrs:{label:"Masuk dengan Google"},on:{click:function(o){return e.submitGoogle()}}}),e._v(" "),r("Button",{staticClass:"min-w-full",attrs:{label:"Masuk dengan Facebook"},on:{click:function(o){return e.submitFb()}}})],1)])])}),[function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("div",[r("span",[e._v("\n            Lupa password?\n          ")])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{Button:r(143).default})}}]);