(this.webpackJsonpkiinteistohuolto=this.webpackJsonpkiinteistohuolto||[]).push([[0],{187:function(e,t,a){e.exports=a(472)},191:function(e,t,a){},192:function(e,t,a){},472:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),c=a.n(o),l=(a(191),a(12)),i=(a(192),a(53)),u=(a(94),a(49)),s=a.n(u);function m(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/services",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))},u=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return m(e.original)}},{Header:"Asiakas",accessor:"customer.name"},{Header:"Osoite",accessor:"customer.address"},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Yhteyshenkil\xf6",accessor:"customer.person"},{Header:"Puhelin",accessor:"customer.telephone"},{Header:"Email",accessor:"customer.email"},{Header:"Mekaanikko",accessor:"mechanic.name"}],m=function(e){return r.a.createElement("div",null,s()(e.time).format("DD.MM.YYYY HH:mm:ss"))};return r.a.createElement("div",null,r.a.createElement("h5",null," "),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:a,columns:u}))}var d=a(54),h=a(32),f=a(17),p=a(510),b=a(509),k=a(512),E=a(508),g=a(507),v=a(513);function O(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",address:"",ycode:"",person:"",telephone:"",email:""}),i=Object(l.a)(c,2),u=i[0],s=i[1],m=function(){e.addCusto(u),o(!1)},d=function(e){s(Object(f.a)(Object(f.a)({},u),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asiakas"),r.a.createElement(k.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asiakas"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:u.name,onChange:d,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"address",name:"address",value:u.address,onChange:d,label:"Osoite",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"ycode",name:"ycode",value:u.ycode,onChange:d,label:"Y-tunnus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"person",name:"person",value:u.person,onChange:d,label:"Yhteyshenkil\xf6",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"telephone",name:"telephone",value:u.telephone,onChange:d,label:"Puhelin",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:u.email,onChange:d,label:"S\xe4hk\xf6posti",fullWidth:!0})),r.a.createElement(E.a,null,r.a.createElement(p.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:m,color:"primary"},"Tallenna"))))}var j=a(515),y=a(514),C=a(173);function S(e){var t=e.addService,a=e.customerid,o=r.a.useState(!1),c=Object(l.a)(o,2),i=c[0],u=c[1],m=r.a.useState({date:"",time:"",duration:0,task:"",comment:"",mechanic:""}),O=Object(l.a)(m,2),S=O[0],A=O[1],H=Object(n.useState)(),w=Object(l.a)(H,2),W=w[0],P=w[1],Y=Object(n.useState)(),T=Object(l.a)(Y,2),M=T[0],N=T[1],D=Object(n.useState)(),K=Object(l.a)(D,2),J=K[0],z=K[1],B=Object(n.useState)([]),I=Object(l.a)(B,2),q=I[0],F=I[1],L=Object(n.useState)(),_=Object(l.a)(L,2),x=_[0],U=_[1];Object(n.useEffect)((function(){R(),$()}),[]);for(var R=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers/"+a,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){P(e.name),N(e.address),z(e.person),U(e)})).catch((function(e){return console.error(e)}))},$=function(){var e=s()().format("HH:mm"),t=s()().format("YYYY-MM-DD");fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(a){F(a),A(Object(f.a)(Object(f.a)({},S),{},{mechanic:a[0].mechanicid,date:t,time:e}))})).catch((function(e){return console.error(e)}))},G=function(){if(""===S.date||""===S.time||""===S.task)alert("T\xe4yt\xe4 pakolliset kent\xe4t");else{var e=X.findIndex((function(e){return e===S.mechanic}));t(S,a,x,X[e],V[e],Z[e],ee[e]),u(!1)}},Q=function(e){A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,e.target.value)))},V=[],X=[],Z=[],ee=[],te=0;te<q.length;te++)V=[].concat(Object(d.a)(V),[q[te].name]),X=[].concat(Object(d.a)(X),[q[te].mechanicid]),Z=[].concat(Object(d.a)(Z),[q[te].email]),ee=[].concat(Object(d.a)(ee),[q[te].phone]);var ae=V.map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){u(!0)}},"Lis\xe4\xe4 uusi huoltoty\xf6"),r.a.createElement(k.a,{open:i,onClose:G,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"uusi huoltoty\xf6"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,required:!0,type:"date",margin:"dense",id:"date",name:"date",value:S.date,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"time",margin:"dense",id:"time",name:"time",value:S.time,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"number",step:.1,min:0,margin:"dense",id:"duration",name:"duration",value:S.duration,onChange:function(e){var t=e.target.value.charAt(0),a=e.target.value.charAt(1);"0"===t&&""!==a&&(e.target.value=e.target.value.substr(1),console.log(e.target.value)),e.target.value<1&&(e.target.value=0),A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,e.target.value)))},label:"Ty\xf6nkesto",fullWidth:!0}),r.a.createElement(b.a,{required:!0,margin:"dense",id:"task",name:"task",value:S.task,onChange:Q,label:"Ty\xf6nkuvaus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"comment",name:"comment",value:S.comment,onChange:Q,label:"Kommentit",fullWidth:!0}),r.a.createElement(y.a,null,r.a.createElement(j.a,{id:"inputLabel"},"Asentaja"),r.a.createElement(C.a,{id:"mechanic",onChange:function(e){for(var t=0;t<q.length;t++)e.target.value===q[t].name&&A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,q[t].mechanicid)))},inputProps:{name:"mechanic"}},ae)),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"name",name:"name",value:"",label:W,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"address",name:"address",value:"",label:M,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"person",name:"person",value:"",label:J,fullWidth:!0})),r.a.createElement(E.a,null,r.a.createElement(p.a,{onClick:function(){u(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:G,color:"primary"},"Tallenna"))))}function A(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1],u=Object(n.useState)(),m=Object(l.a)(u,2),h=(m[0],m[1]),f=Object(n.useState)(0),b=Object(l.a)(f,2),k=b[0],E=b[1],g=Object(n.useState)(),v=Object(l.a)(g,2),j=v[0],y=v[1],C=Object(n.useState)(""),A=Object(l.a)(C,2),H=A[0],w=A[1];Object(n.useEffect)((function(){W()}),[]);var W=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))},P=[{Header:"Nimi",accessor:"name"},{Header:"Osoite",accessor:"address"},{Header:"y-tunnus",accessor:"ycode"},{Header:"Yhteyshenkil\xf6",accessor:"person"},{Header:"Puhelin",accessor:"telephone"},{Header:"S\xe4hk\xf6posti",accessor:"email"},{Cell:function(e){return r.a.createElement(p.a,{size:"small",color:"secondary",onClick:function(){return Y(e.original)}},"N\xe4yt\xe4 huoltoty\xf6t")}}],Y=function(e){y(e.customerid),fetch("https://kiinteistohuolto.herokuapp.com/customers/"+e.customerid,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.error(e)})),fetch("https://kiinteistohuolto.herokuapp.com/services/",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return w(e)})).catch((function(e){return console.error(e)})),E(1)},T=[];if(""!==H)for(var M=0;M<H.length;M++)H[M].customer.customerid===j&&(T=[].concat(Object(d.a)(T),[H[M]]));if(1!==k)return r.a.createElement("div",null,r.a.createElement(O,{addCusto:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addcustomer",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return W()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:o,columns:P}));var N=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return function(e){return r.a.createElement("div",null,s()(e.time).format("DD.MM.YYYY HH:mm:ss"))}(e.original)}},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Kesto",accessor:"duration"},{Header:"Kommentit",accessor:"comment"}];return r.a.createElement("div",null,r.a.createElement(S,{customerid:j,addService:function(e,t,a,n,r,o,c){var l={time:new Date(e.date+" "+e.time).toISOString(),duration:e.duration,task:e.task,comment:e.comment,customer:{customerid:a.customerid,name:a.name,address:a.address,ycode:a.ycode,person:a.person,telephone:a.telephone,email:a.email},mechanic:{mechanicid:n,name:r,email:o,phone:c}};fetch("https://kiinteistohuolto.herokuapp.com/addservice",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(l)}).then((function(e){return Y(a)})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:T,columns:N}))}function H(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",email:"",phone:""}),i=Object(l.a)(c,2),u=i[0],s=i[1],m=function(){e.addMech(u),o(!1)},d=function(e){s(Object(f.a)(Object(f.a)({},u),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asentaja"),r.a.createElement(k.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asentaja"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:u.name,onChange:d,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:u.email,onChange:d,label:"S\xe4hk\xf6posti",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"phone",name:"phone",value:u.phone,onChange:d,label:"Puhelin",fullWidth:!0})),r.a.createElement(E.a,null,r.a.createElement(p.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:m,color:"primary"},"Tallenna"))))}function w(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))};return r.a.createElement("div",null,r.a.createElement(H,{addMech:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addmechanic",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return c()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:a,columns:[{Header:"Nimi",accessor:"name"},{Header:"puhelin",accessor:"phone"},{Header:"s\xe4hk\xf6posti",accessor:"email"}]}))}function W(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Hei, t\xe4m\xe4 on demosivusto.",r.a.createElement("br",null),"Sivustolla on k\xe4ytetty API kutsuja itsetehdyst\xe4 BackEndist\xe4.",r.a.createElement("br",null),"mm osoitteesta:"),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/services",target:"_blank"},"kiinteistohuolto.herokuapp.com/services"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/customers",target:"_blank"},"kiinteistohuolto.herokuapp.com/customers"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/mechanics",target:"_blank"},"kiinteistohuolto.herokuapp.com/mechanics"),r.a.createElement("br",null),r.a.createElement("h4",null,"BackEnd on tehty H2consolella joka tyhjenee kun serveri uinahtaa.",r.a.createElement("br",null),"BackEnd on toteutettu Maven Projektina Spring boot, kielen\xe4 Java. FrontEnd tehty Reactilla"))}a(196);var P=function(){var e=r.a.useState(1),t=Object(l.a)(e,2),a=t[0],n=t[1];return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kiinteist\xf6huoltoa"),r.a.createElement(p.a,{color:"primary",onClick:function(){n(1)}},"Info"),r.a.createElement(p.a,{color:"primary",onClick:function(){n(2)}},"Asiakkaat"),r.a.createElement(p.a,{color:"primary",onClick:function(){n(3)}},"Asentajat"),r.a.createElement(p.a,{color:"primary",onClick:function(){n(4)}},"Huollot"),1===a&&r.a.createElement(W,null)||2===a&&r.a.createElement(A,null)||3===a&&r.a.createElement(w,null)||4===a&&r.a.createElement(m,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.fd86809c.chunk.js.map