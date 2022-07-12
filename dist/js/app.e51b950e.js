(function(){"use strict";var t={6330:function(t,s,o){var e=o(6369),c=function(){var t=this,s=t._self._c;return s("div",{attrs:{id:"app"}},[s("div",{staticClass:"container",staticStyle:{"margin-top":"15px"}},[t._m(0),s("div",{staticClass:"row",staticStyle:{"margin-top":"15px"}},[s("div",{staticClass:"col-md-3"},[s("div",{staticClass:"select-city"},[s("p",{staticClass:"h5"},[t._v("Выберите район:")]),s("ChooseCity",{on:{changed_city:t.changed_city}})],1),s("div",{staticClass:"select-school"},[s("ChooseSchool",{ref:"school_select",on:{school_choosed:t.school_choosed}})],1),t.choosed_school?s("button",{staticClass:"btn btn-outline-success",staticStyle:{width:"100%"},on:{click:t.get_vac_data}},[t._v("Найти вакансии")]):t._e()]),s("div",{staticClass:"col-md-9"},[s("VacanciesList",{key:t.choosed_school,ref:"vacancies"})],1)])])])},i=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"header-info"},[s("h1",[t._v("Вакансии школ Республики Мордовия")]),s("h4",[t._v("(данные из открытых источников в системе "),s("a",{attrs:{href:"https://schoolrm.ru"}},[t._v("schoolrm.ru")]),t._v(")")])])}],a=function(){var t=this,s=t._self._c;return t.data_loaded?s("select",{directives:[{name:"model",rawName:"v-model",value:t.current_city,expression:"current_city"}],staticClass:"form-select",on:{change:[function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.current_city=s.target.multiple?o:o[0]},t.change_city]}},t._l(t.cities_list,(function(o){return s("option",{key:o.code,domProps:{value:o.code}},[t._v(t._s(o.name))])})),0):s("span",{staticClass:"load-section"},[t._v("Загрузка...")])},n=[],l=o(6265),r=o.n(l);const d="http://193.104.57.71:8888/";var _={name:"ChooseCity",data(){return{cities_list:null,current_city:null,data_loaded:!1}},mounted(){this.get_cities()},methods:{get_cities(){r().get(d+"cities/").then((t=>{this.cities_list=t.data,this.data_loaded=!0}))},change_city(){this.$emit("changed_city",{city_code:this.current_city})}}},h=_,u=o(1001),v=(0,u.Z)(h,a,n,!1,null,"2fb196ae",null),f=v.exports,p=function(){var t=this,s=t._self._c;return t.sc_list_loaded?s("div",[s("p",{staticClass:"h5"},[t._v("Выберите школу:")]),s("select",{directives:[{name:"model",rawName:"v-model",value:t.choosed_school,expression:"choosed_school"}],staticClass:"form-select",on:{change:[function(s){var o=Array.prototype.filter.call(s.target.options,(function(t){return t.selected})).map((function(t){var s="_value"in t?t._value:t.value;return s}));t.choosed_school=s.target.multiple?o:o[0]},t.change_school]}},t._l(t.schools,(function(o){return s("option",{key:o.domain,domProps:{value:o.domain}},[t._v(t._s(o.name))])})),0)]):t._e()},m=[],g={name:"ChooseSchool",data(){return{schools:void 0,choosed_school:null,sc_list_loaded:!1}},methods:{change_school(){this.$emit("school_choosed",{choosed_school:this.choosed_school})},get_city_schools(t){this.sc_list_loaded=!1,r().get(d+"schools/get_all",{params:{city:t}}).then((t=>{this.schools=t.data,this.sc_list_loaded=!0}))}}},y=g,C=(0,u.Z)(y,p,m,!1,null,"1d7caf4d",null),b=C.exports,x=function(){var t=this,s=t._self._c;return t.show_block?s("div",[t.load_info?s("div",[s("div",[s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v("Информация об образовательном учреждении")]),s("ul",{staticClass:"list-group list-group-flush"},[s("li",{staticClass:"list-group-item"},[s("b",[t._v("Наименование ОУ: ")]),t._v(t._s(t.sc_info.name))]),s("li",{staticClass:"list-group-item"},[s("b",[t._v("Адрес: ")]),t._v(t._s(t.sc_info.address))]),s("li",{staticClass:"list-group-item"},[s("b",[t._v("Телефон: ")]),t._v(t._s(t.sc_info.tel))])])]),t.load_vacs?s("div",{staticClass:"card",staticStyle:{"margin-top":"20px"}},[t.vac_load_error?s("div",{staticClass:"card-body"},[s("span",[t._v("Ошибка загрузки вакансий.")])]):s("div",{staticClass:"card-body"},[s("h4",{staticClass:"card-title"},[t._v("Вакансии:")]),t.sc_vac?s("ul",{staticClass:"list-group list-group-flush"},t._l(t.sc_vac,(function(o){return s("li",{key:o.vacancy,staticClass:"list-group-item"},[t._v(t._s(o.vacancy)+" ")])})),0):s("span",[t._v("Вакансий нет")])])]):s("LoadSpinner",{attrs:{msg:t.msg_vacs}})],1)]):s("LoadSpinner",{attrs:{msg:t.msg_info}})],1):t._e()},w=[],k=function(){var t=this,s=t._self._c;return s("div",{staticStyle:{"margin-top":"15px"}},[t._m(0),s("div",{staticClass:"d-flex justify-content-center"},[t._v(" "+t._s(t.msg)+" ")])])},S=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"d-flex justify-content-center"},[s("div",{staticClass:"spinner-border text-success",attrs:{role:"status"}},[s("span",{staticClass:"visually-hidden"},[t._v("Загрузка...")])])])}],O={name:"LoadSpinner",props:{msg:String}},j=O,L=(0,u.Z)(j,k,S,!1,null,null,null),Z=L.exports,P={name:"VacanciesList",components:{LoadSpinner:Z},data(){return{sc_info:{name:"",address:"",tel:""},sc_vac:void 0,show_block:!1,load_info:!1,load_vacs:!1,vac_load_error:!1,msg_info:"Загрузка информации...",msg_vacs:"Загрузка вакансий..."}},methods:{get_all_data(t){this.show_block=!0,r().get(d+"schools/get_by_domain",{params:{domain:t}}).then((t=>{this.sc_info=t.data,this.load_info=!0})),r().get(d+"vacancies/get_by_school",{params:{school_domain:t}}).then((t=>{this.sc_vac=t.data,this.load_vacs=!0})).catch((t=>{this.load_vacs=!0,404==t.response.status?this.sc_vac=null:this.vac_load_error=!0}))}}},$=P,A=(0,u.Z)($,x,w,!1,null,null,null),T=A.exports,V={name:"App",components:{ChooseCity:f,ChooseSchool:b,VacanciesList:T},data(){return{choosed_city:void 0,choosed_school:void 0}},methods:{changed_city(t){this.choosed_school=void 0,this.choosed_city=t.city_code,this.$refs.school_select.get_city_schools(this.choosed_city)},school_choosed(t){this.choosed_school=t.choosed_school},get_vac_data(){this.$refs.vacancies.get_all_data(this.choosed_school)}}},N=V,E=(0,u.Z)(N,c,i,!1,null,null,null),F=E.exports;e.ZP.config.productionTip=!0,new e.ZP({render:t=>t(F)}).$mount("#app")}},s={};function o(e){var c=s[e];if(void 0!==c)return c.exports;var i=s[e]={exports:{}};return t[e](i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(s,e,c,i){if(!e){var a=1/0;for(d=0;d<t.length;d++){e=t[d][0],c=t[d][1],i=t[d][2];for(var n=!0,l=0;l<e.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(t){return o.O[t](e[l])}))?e.splice(l--,1):(n=!1,i<a&&(a=i));if(n){t.splice(d--,1);var r=c();void 0!==r&&(s=r)}}return s}i=i||0;for(var d=t.length;d>0&&t[d-1][2]>i;d--)t[d]=t[d-1];t[d]=[e,c,i]}}(),function(){o.n=function(t){var s=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(s,{a:s}),s}}(),function(){o.d=function(t,s){for(var e in s)o.o(s,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:s[e]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)}}(),function(){var t={143:0};o.O.j=function(s){return 0===t[s]};var s=function(s,e){var c,i,a=e[0],n=e[1],l=e[2],r=0;if(a.some((function(s){return 0!==t[s]}))){for(c in n)o.o(n,c)&&(o.m[c]=n[c]);if(l)var d=l(o)}for(s&&s(e);r<a.length;r++)i=a[r],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(d)},e=self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[];e.forEach(s.bind(null,0)),e.push=s.bind(null,e.push.bind(e))}();var e=o.O(void 0,[998],(function(){return o(6330)}));e=o.O(e)})();
//# sourceMappingURL=app.e51b950e.js.map