(function(){"use strict";var t={5747:function(t,e,o){var n=o(9242),i=o(3396),s=o.p+"img/edit.7d7bed7c.svg";const l={class:"wrapper"},a=(0,i._)("img",{src:s,alt:""},null,-1),d=[a];function r(t,e,o,s,a,r){const c=(0,i.up)("Header"),u=(0,i.up)("Notes"),_=(0,i.up)("Modal");return(0,i.wg)(),(0,i.iD)("div",l,[(0,i.Wm)(c,{onFilterNotes:e[0]||(e[0]=t=>a.searchVal=t)}),(0,i.Wm)(u,{notes:r.noteFilter,onDelNote:r.delNote,onEditNote:r.editNote},null,8,["notes","onDelNote","onEditNote"]),(0,i.wy)((0,i.Wm)(_,{isModalOpen:a.isModalOpen,onClose:e[1]||(e[1]=t=>a.isModalOpen=!1),onAddNote:r.addNote,edit:a.edit,onNewTask:r.newTask,editTask:a.editTask},null,8,["isModalOpen","onAddNote","edit","onNewTask","editTask"]),[[n.F8,a.isModalOpen]]),(0,i.wy)((0,i._)("button",{class:"modal-btn",onClick:e[2]||(e[2]=t=>(a.isModalOpen=!0,a.edit=!1))},d,512),[[n.F8,!a.isModalOpen]])])}o(560);var c=o(7139),u=o.p+"img/poisk.2c9e71ed.svg",_=o.p+"img/back.014b4ff1.svg",h=o.p+"img/clear.1d4d165f.svg";const p={class:"header"},v={key:0,class:"header__nav"},f={class:"header__nav-title"},m=(0,i._)("img",{src:u,alt:""},null,-1),w=[m],g={key:1,class:"header__search"},b=(0,i._)("img",{src:_,alt:""},null,-1),k=[b],N=["placeholder"],y=(0,i._)("button",{class:"header__search-clear"},[(0,i._)("img",{src:h,alt:""})],-1);function O(t,e,o,s,l,a){return(0,i.wg)(),(0,i.iD)("header",p,[l.openNav?((0,i.wg)(),(0,i.iD)("nav",v,[(0,i._)("button",{class:"header__nav-lang",onClick:e[0]||(e[0]=(...t)=>a.switchLang&&a.switchLang(...t))},(0,c.zw)(t.$i18n.locale),1),(0,i._)("h1",f,(0,c.zw)(t.$t("notes")),1),(0,i._)("button",{class:"header__nav-poisk",onClick:e[1]||(e[1]=t=>l.openNav=!1)},w)])):((0,i.wg)(),(0,i.iD)("nav",g,[(0,i._)("button",{class:"header__search-back",onClick:e[2]||(e[2]=t=>l.openNav=!0)},k),(0,i.wy)((0,i._)("input",{type:"text",placeholder:t.$t("placeholder"),class:"header__search-inp","onUpdate:modelValue":e[3]||(e[3]=t=>l.search=t)},null,8,N),[[n.nr,l.search]]),y]))])}var x={data(){return{openNav:!0,search:""}},methods:{switchLang(){"ru"==this.$i18n.locale?this.$i18n.locale="uz":this.$i18n.locale="ru",localStorage.lang=this.$i18n.locale}},watch:{search(t){this.$emit("filterNotes",t)}}},$=o(89);const C=(0,$.Z)(x,[["render",O]]);var M=C,T=o.p+"img/tabl.4ed3d4be.svg",D=o.p+"img/setka.dbae4039.svg";const z={class:"notes"},j={class:"container"},S={class:"notes__top"},E={class:"notes__top-title"},F={src:T,alt:""},L={src:D,alt:""};function V(t,e,o,s,l,a){const d=(0,i.up)("NotesItem");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",z,[(0,i._)("div",j,[(0,i._)("div",S,[(0,i._)("h2",E,(0,c.zw)(o.notes.length>0?t.$t("todo"):t.$t("notodo")),1),(0,i._)("button",{class:"notes__top-btn",onClick:e[0]||(e[0]=t=>l.view=!l.view)},[(0,i.wy)((0,i._)("img",F,null,512),[[n.F8,l.view]]),(0,i.wy)((0,i._)("img",L,null,512),[[n.F8,0==l.view]]),(0,i._)("span",null,(0,c.zw)(l.view?t.$t("list"):t.$t("grid")),1)])]),(0,i._)("div",{class:(0,c.C_)(["notes__list",{active:!l.view}])},[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(o.notes,(e=>((0,i.wg)(),(0,i.j4)(d,{key:e.id,note:e,view:l.view,onDelNote:o=>t.$emit("delNote",e.id),onEditNote:o=>t.$emit("editNote",e.id)},null,8,["note","view","onDelNote","onEditNote"])))),128))],2)])])])}var Z=o.p+"img/del.f04c87ff.svg";const H={class:"notes__item"},J={class:"notes__item-top-title"},A={class:"notes__item-top-date"},I={class:"notes__item-text"},U={class:"notes__item-btns"},W=(0,i._)("img",{src:s,alt:""},null,-1),q=(0,i._)("img",{src:Z,alt:""},null,-1);function B(t,e,o,n,s,l){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",H,[(0,i._)("div",{class:(0,c.C_)(["notes__item-top",{active:!o.view}])},[(0,i._)("h3",J,(0,c.zw)(o.note.title),1),(0,i._)("p",A,(0,c.zw)(o.note.data),1)],2),(0,i._)("div",I,(0,c.zw)(o.note.text),1),(0,i._)("div",U,[(0,i._)("button",{class:"notes__item-btn edit",onClick:e[0]||(e[0]=e=>t.$emit("editNote",o.note.id))},[W,(0,i._)("span",null,(0,c.zw)(t.$t("add")),1)]),(0,i._)("button",{class:"notes__item-btn del",onClick:e[1]||(e[1]=e=>t.$emit("delNote",o.note.id))},[q,(0,i._)("span",null,(0,c.zw)(t.$t("delete")),1)])])])])}var P={props:{note:{typeof:Object},view:{typeof:Boolean}}};const K=(0,$.Z)(P,[["render",B]]);var Q=K,R={props:{notes:{typeof:Array}},components:{NotesItem:Q},data(){return{view:!0}}};const Y=(0,$.Z)(R,[["render",V]]);var G=Y;const X={class:"modal_block-title"},tt={class:"modal__block-inputs"},et={for:"inp"},ot=(0,i._)("span",null,"Title",-1),nt={for:"areo"},it=(0,i._)("span",null,"Content",-1),st={class:"modal__block-btns"};function lt(t,e,o,s,l,a){return(0,i.wg)(),(0,i.j4)(n.uT,{name:"bounce"},{default:(0,i.w5)((()=>[(0,i._)("div",{class:"modal",onClick:e[6]||(e[6]=(...t)=>a.closeModal&&a.closeModal(...t))},[(0,i._)("div",{class:"modal__block",onClick:e[5]||(e[5]=(0,n.iM)((()=>{}),["stop"]))},[(0,i._)("h2",X,(0,c.zw)(o.edit?"Изменить заметку ":"Добавить заметку"),1),(0,i._)("div",tt,[(0,i._)("label",et,[ot,(0,i.wy)((0,i._)("input",{type:"text",id:"inp","onUpdate:modelValue":e[0]||(e[0]=t=>l.title=t)},null,512),[[n.nr,l.title]])]),(0,i._)("label",nt,[it,(0,i.wy)((0,i._)("textarea",{id:"areo","onUpdate:modelValue":e[1]||(e[1]=t=>l.text=t)},null,512),[[n.nr,l.text]])])]),(0,i._)("div",st,[(0,i._)("button",{class:"modal__block-btns del",onClick:e[2]||(e[2]=(...t)=>a.closeModal&&a.closeModal(...t))}," Отмена "),o.edit?((0,i.wg)(),(0,i.iD)("button",{key:1,class:"modal__block-btns edit",onClick:e[4]||(e[4]=(...t)=>a.newTask&&a.newTask(...t))}," Изменить ")):((0,i.wg)(),(0,i.iD)("button",{key:0,class:"modal__block-btns edit",onClick:e[3]||(e[3]=(...t)=>a.addNote&&a.addNote(...t))}," Добавить "))])])])])),_:1})}var at=o(3029),dt={props:{edit:{typeof:Boolean},editTask:{typeof:Object}},data(){return{title:"",text:""}},methods:{closeModal(){this.$emit("close"),this.text=this.title=""},addNote(){if(""!=this.title&&""!=this.text){const t={id:(0,at.Z)(),title:this.title,text:this.text,data:(new Date).toLocaleDateString()};this.$emit("addNote",t),this.closeModal()}},newTask(){if(""!=this.title&&""!=this.text){const t={title:this.title,id:this.editTask.id,text:this.text,data:(new Date).toLocaleDateString()};this.$emit("newTask",t),this.closeModal()}}}};const rt=(0,$.Z)(dt,[["render",lt]]);var ct=rt,ut={components:{Header:M,Notes:G,Modal:ct},data(){return{notes:[],isModalOpen:!1,edit:!1,editTask:null,searchVal:""}},methods:{addNote(t){this.notes.push(t)},delNote(t){let e=this.notes.findIndex((e=>e.id==t));this.notes.splice(e,1)},getNotes(){let t=localStorage.notes;t&&(this.notes=JSON.parse(t))},editNote(t){this.isModalOpen=this.edit=!0;let e=this.notes.find((e=>e.id==t));this.editTask=e},newTask(t){this.notes.forEach((e=>{(e.id=t.id)&&(e.title=t.title,e.text=t.text,e.data=t.title)}))}},mounted(){this.getNotes()},watch:{notes:{handler(){localStorage.notes=JSON.stringify(this.notes)},deep:!0}},computed:{noteFilter(){return this.searchVal?this.notes.filter((t=>t.title.toLowerCase().includes(this.searchVal.toLocaleLowerCase()))):this.notes}}};const _t=(0,$.Z)(ut,[["render",r]]);var ht=_t,pt=o(7853),vt=JSON.parse('{"notes":"Eslatmalar","placeholder":"Qidirmoq","todo":"Hamma eslatmalar","notodo":"Eslatmalar yoq","list":"Royhat","grid":"To\'r","add":"O\'zgartirish","delete":"O\'chirish"}'),ft=JSON.parse('{"notes":"Заметки","placeholder":"Поиск","todo":"Все заметки","notodo":"Нет заметок","list":"Список","grid":"Сетка","add":"Редактировать","delete":"Удалить"}');const mt={uz:vt,ru:ft},wt=localStorage.lang,gt=(0,pt.o)({locale:wt||"ru",messages:mt});(0,n.ri)(ht).use(gt).mount("#app")}},e={};function o(n){var i=e[n];if(void 0!==i)return i.exports;var s=e[n]={exports:{}};return t[n].call(s.exports,s,s.exports,o),s.exports}o.m=t,function(){var t=[];o.O=function(e,n,i,s){if(!n){var l=1/0;for(c=0;c<t.length;c++){n=t[c][0],i=t[c][1],s=t[c][2];for(var a=!0,d=0;d<n.length;d++)(!1&s||l>=s)&&Object.keys(o.O).every((function(t){return o.O[t](n[d])}))?n.splice(d--,1):(a=!1,s<l&&(l=s));if(a){t.splice(c--,1);var r=i();void 0!==r&&(e=r)}}return e}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[n,i,s]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var n in e)o.o(e,n)&&!o.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.p="/todo/"}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,n){var i,s,l=n[0],a=n[1],d=n[2],r=0;if(l.some((function(e){return 0!==t[e]}))){for(i in a)o.o(a,i)&&(o.m[i]=a[i]);if(d)var c=d(o)}for(e&&e(n);r<l.length;r++)s=l[r],o.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return o.O(c)},n=self["webpackChunktodo"]=self["webpackChunktodo"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=o.O(void 0,[998],(function(){return o(5747)}));n=o.O(n)})();
//# sourceMappingURL=app.89ce69e4.js.map