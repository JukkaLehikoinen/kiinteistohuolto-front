(this.webpackJsonpkiinteistohuolto=this.webpackJsonpkiinteistohuolto||[]).push([[0],{76:function(e,t,a){e.exports=a(87)},81:function(e,t,a){},82:function(e,t,a){},87:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(81),a(8)),i=a(123),u=(a(82),a(32)),s=(a(52),a(28)),m=a.n(s);function d(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/services",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))},i=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return s(e.original)}},{Header:"Asiakas",accessor:"customer.name"},{Header:"Osoite",accessor:"customer.address"},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Yhteyshenkil\xf6",accessor:"customer.person"},{Header:"Puhelin",accessor:"customer.telephone"},{Header:"Email",accessor:"customer.email"},{Header:"Mekaanikko",accessor:"mechanic.name"}],s=function(e){return r.a.createElement("div",null,m()(e.time).format("DD.MM.YYYY HH:mm:ss"))};return r.a.createElement("div",null,r.a.createElement("h5",null," "),r.a.createElement(u.a,{defaultPageSize:10,filterable:!0,data:a,columns:i}))}var h=a(33),f=a(18),p=a(13),b=a(122),E=a(125),k=a(121),g=a(120),v=a(126);function O(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",address:"",ycode:"",person:"",telephone:"",email:""}),u=Object(l.a)(c,2),s=u[0],m=u[1],d=function(){e.addCusto(s),o(!1)},h=function(e){m(Object(p.a)(Object(p.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(i.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asiakas"),r.a.createElement(E.a,{open:n,onClose:d,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asiakas"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:s.name,onChange:h,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"address",name:"address",value:s.address,onChange:h,label:"Osoite",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"ycode",name:"ycode",value:s.ycode,onChange:h,label:"Y-tunnus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"person",name:"person",value:s.person,onChange:h,label:"Yhteyshenkil\xf6",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"telephone",name:"telephone",value:s.telephone,onChange:h,label:"Puhelin",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:h,label:"S\xe4hk\xf6posti",fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(i.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(i.a,{onClick:d,color:"primary"},"Tallenna"))))}var j=a(128),y=a(127),C=a(66);function S(e){var t=e.addService,a=e.customerid,o=r.a.useState(!1),c=Object(l.a)(o,2),u=c[0],s=c[1],d=r.a.useState({date:"",time:"",duration:0,task:"",comment:"",mechanic:""}),O=Object(l.a)(d,2),S=O[0],H=O[1],A=Object(n.useState)(),w=Object(l.a)(A,2),W=w[0],P=w[1],Y=Object(n.useState)(),T=Object(l.a)(Y,2),M=T[0],N=T[1],D=Object(n.useState)(),K=Object(l.a)(D,2),J=K[0],z=K[1],B=Object(n.useState)([]),I=Object(l.a)(B,2),q=I[0],F=I[1],L=Object(n.useState)(),_=Object(l.a)(L,2),x=_[0],U=_[1];Object(n.useEffect)((function(){R(),$()}),[]);for(var R=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers/"+a,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){P(e.name),N(e.address),z(e.person),U(e)})).catch((function(e){return console.error(e)}))},$=function(){var e=m()().format("HH:mm"),t=m()().format("YYYY-MM-DD");fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(a){F(a),H(Object(p.a)(Object(p.a)({},S),{},{mechanic:a[0].mechanicid,date:t,time:e}))})).catch((function(e){return console.error(e)}))},G=function(){if(""===S.date||""===S.time||""===S.task)alert("T\xe4yt\xe4 pakolliset kent\xe4t");else{var e=X.findIndex((function(e){return e===S.mechanic}));t(S,a,x,X[e],V[e],Z[e],ee[e]),s(!1)}},Q=function(e){H(Object(p.a)(Object(p.a)({},S),{},Object(f.a)({},e.target.name,e.target.value)))},V=[],X=[],Z=[],ee=[],te=0;te<q.length;te++)V=[].concat(Object(h.a)(V),[q[te].name]),X=[].concat(Object(h.a)(X),[q[te].mechanicid]),Z=[].concat(Object(h.a)(Z),[q[te].email]),ee=[].concat(Object(h.a)(ee),[q[te].phone]);var ae=V.map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(i.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){s(!0)}},"Lis\xe4\xe4 uusi huoltoty\xf6"),r.a.createElement(E.a,{open:u,onClose:G,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"uusi huoltoty\xf6"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,required:!0,type:"date",margin:"dense",id:"date",name:"date",value:S.date,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"time",margin:"dense",id:"time",name:"time",value:S.time,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"number",step:.1,min:0,margin:"dense",id:"duration",name:"duration",value:S.duration,onChange:function(e){e.target.value<1&&(e.target.value=0),H(Object(p.a)(Object(p.a)({},S),{},Object(f.a)({},e.target.name,e.target.value)))},label:"Ty\xf6nkesto",fullWidth:!0}),r.a.createElement(b.a,{required:!0,margin:"dense",id:"task",name:"task",value:S.task,onChange:Q,label:"Ty\xf6nkuvaus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"comment",name:"comment",value:S.comment,onChange:Q,label:"Kommentit",fullWidth:!0}),r.a.createElement(y.a,null,r.a.createElement(j.a,{id:"inputLabel"},"Asentaja"),r.a.createElement(C.a,{id:"mechanic",onChange:function(e){for(var t=0;t<q.length;t++)e.target.value===q[t].name&&H(Object(p.a)(Object(p.a)({},S),{},Object(f.a)({},e.target.name,q[t].mechanicid)))},inputProps:{name:"mechanic"}},ae)),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"name",name:"name",value:"",label:W,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"address",name:"address",value:"",label:M,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"person",name:"person",value:"",label:J,fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(i.a,{onClick:function(){s(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(i.a,{onClick:G,color:"primary"},"Tallenna"))))}function H(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(),d=Object(l.a)(s,2),f=(d[0],d[1],Object(n.useState)()),p=Object(l.a)(f,2),b=(p[0],p[1]),E=Object(n.useState)(0),k=Object(l.a)(E,2),g=k[0],v=k[1],j=Object(n.useState)(),y=Object(l.a)(j,2),C=y[0],H=y[1],A=Object(n.useState)(""),w=Object(l.a)(A,2),W=w[0],P=w[1];Object(n.useEffect)((function(){Y()}),[]);var Y=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))},T=[{Header:"Nimi",accessor:"name"},{Header:"Osoite",accessor:"address"},{Header:"y-tunnus",accessor:"ycode"},{Header:"Yhteyshenkil\xf6",accessor:"person"},{Header:"Puhelin",accessor:"telephone"},{Header:"S\xe4hk\xf6posti",accessor:"email"},{Cell:function(e){return r.a.createElement(i.a,{size:"small",color:"secondary",onClick:function(){return M(e.original)}},"N\xe4yt\xe4 huoltoty\xf6t")}}],M=function(e){H(e.customerid),fetch("https://kiinteistohuolto.herokuapp.com/customers/"+e.customerid,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return b(e)})).catch((function(e){return console.error(e)})),fetch("https://kiinteistohuolto.herokuapp.com/services/",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return P(e)})).catch((function(e){return console.error(e)})),v(1)},N=[];if(""!==W)for(var D=0;D<W.length;D++)W[D].customer.customerid===C&&(N=[].concat(Object(h.a)(N),[W[D]]));if(1!==g)return r.a.createElement("div",null,r.a.createElement(O,{addCusto:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addcustomer",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return Y()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(u.a,{defaultPageSize:10,filterable:!0,data:o,columns:T}));var K=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return function(e){return r.a.createElement("div",null,m()(e.time).format("DD.MM.YYYY HH:mm:ss"))}(e.original)}},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Kesto",accessor:"duration"},{Header:"Kommentit",accessor:"comment"}];return r.a.createElement("div",null,r.a.createElement(S,{customerid:C,addService:function(e,t,a,n,r,o,c){var l={time:new Date(e.date+" "+e.time).toISOString(),duration:e.duration,task:e.task,comment:e.comment,customer:{customerid:a.customerid,name:a.name,address:a.address,ycode:a.ycode,person:a.person,telephone:a.telephone,email:a.email},mechanic:{mechanicid:n,name:r,email:o,phone:c}};fetch("https://kiinteistohuolto.herokuapp.com/addservice",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(l)}).then((function(e){return M(a)})).catch((function(e){return console.error(e)}))}}),r.a.createElement(u.a,{defaultPageSize:10,filterable:!0,data:N,columns:K}))}function A(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",email:"",phone:""}),u=Object(l.a)(c,2),s=u[0],m=u[1],d=function(){e.addMech(s),o(!1)},h=function(e){m(Object(p.a)(Object(p.a)({},s),{},Object(f.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(i.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asentaja"),r.a.createElement(E.a,{open:n,onClose:d,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asentaja"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:s.name,onChange:h,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:h,label:"S\xe4hk\xf6posti",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"phone",name:"phone",value:s.phone,onChange:h,label:"Puhelin",fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(i.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(i.a,{onClick:d,color:"primary"},"Tallenna"))))}function w(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))};return r.a.createElement("div",null,r.a.createElement(A,{addMech:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addmechanic",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return c()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(u.a,{defaultPageSize:10,filterable:!0,data:a,columns:[{Header:"Nimi",accessor:"name"},{Header:"puhelin",accessor:"phone"},{Header:"s\xe4hk\xf6posti",accessor:"email"}]}))}function W(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Hei, t\xe4m\xe4 on demosivusto.",r.a.createElement("br",null),"Sivustolla on k\xe4ytetty API kutsuja itsetehdyst\xe4 BackEndist\xe4.",r.a.createElement("br",null),"mm osoitteesta:"),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/services",target:"_blank"},"kiinteistohuolto.herokuapp.com/services"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/customers",target:"_blank"},"kiinteistohuolto.herokuapp.com/customers"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/mechanics",target:"_blank"},"kiinteistohuolto.herokuapp.com/mechanics"),r.a.createElement("br",null),r.a.createElement("h4",null,"BackEnd on tehty H2consolella joka tyhjenee kun serveri uinahtaa.",r.a.createElement("br",null),"BackEnd on toteutettu Maven Projektina Spring boot, kielen\xe4 Java. FrontEnd tehty Reactilla"))}var P=function(){var e=r.a.useState(3),t=Object(l.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kiinteist\xf6huoltoa"),r.a.createElement(i.a,{color:"primary",onClick:function(){n(2)}},"Asiakkaat"),r.a.createElement(i.a,{color:"primary",onClick:function(){n(1)}},"Asentajat"),r.a.createElement(i.a,{color:"primary",onClick:function(){n(0)}},"Huoltoty\xf6t"),0===a&&r.a.createElement(d,null)||1===a&&r.a.createElement(w,null)||2===a&&r.a.createElement(H,null)||3===a&&r.a.createElement(W,null),r.a.createElement("br",null),r.a.createElement(i.a,{color:"primary",onClick:function(){n(3)}},"Info"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[76,1,2]]]);
//# sourceMappingURL=main.49305a1e.chunk.js.map