(this.webpackJsonpkiinteistohuolto=this.webpackJsonpkiinteistohuolto||[]).push([[0],{86:function(e,t,a){e.exports=a(99)},91:function(e,t,a){},92:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=(a(91),a(92),a(10)),i=a(36),s=(a(58),a(33)),u=a.n(s);function m(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/services",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))},s=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return m(e.original)}},{Header:"Asiakas",accessor:"customer.name"},{Header:"Osoite",accessor:"customer.address"},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Yhteyshenkil\xf6",accessor:"customer.person"},{Header:"Puhelin",accessor:"customer.telephone"},{Header:"Email",accessor:"customer.email"},{Header:"Mekaanikko",accessor:"mechanic.name"}],m=function(e){return r.a.createElement("div",null,u()(e.time).format("DD.MM.YYYY HH:mm:ss"))};return r.a.createElement("div",null,r.a.createElement("h5",null," "),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:a,columns:s}))}var d=a(37),h=a(23),f=a(16),p=a(137),b=a(136),E=a(139),k=a(134),g=a(133),v=a(132);function O(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",address:"",ycode:"",person:"",telephone:"",email:""}),i=Object(l.a)(c,2),s=i[0],u=i[1],m=function(){e.addCusto(s),o(!1)},d=function(e){u(Object(f.a)(Object(f.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asiakas"),r.a.createElement(E.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asiakas"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:s.name,onChange:d,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"address",name:"address",value:s.address,onChange:d,label:"Osoite",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"ycode",name:"ycode",value:s.ycode,onChange:d,label:"Y-tunnus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"person",name:"person",value:s.person,onChange:d,label:"Yhteyshenkil\xf6",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"telephone",name:"telephone",value:s.telephone,onChange:d,label:"Puhelin",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:d,label:"S\xe4hk\xf6posti",fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(p.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:m,color:"primary"},"Tallenna"))))}var j=a(141),y=a(140),C=a(73);function S(e){var t=e.addService,a=e.customerid,o=r.a.useState(!1),c=Object(l.a)(o,2),i=c[0],s=c[1],m=r.a.useState({date:"",time:"",duration:0,task:"",comment:"",mechanic:""}),O=Object(l.a)(m,2),S=O[0],A=O[1],H=Object(n.useState)(),T=Object(l.a)(H,2),w=T[0],W=T[1],P=Object(n.useState)(),Y=Object(l.a)(P,2),M=Y[0],N=Y[1],K=Object(n.useState)(),D=Object(l.a)(K,2),J=D[0],I=D[1],z=Object(n.useState)([]),B=Object(l.a)(z,2),F=B[0],L=B[1],q=Object(n.useState)(),U=Object(l.a)(q,2),_=U[0],x=U[1];Object(n.useEffect)((function(){R(),$()}),[]);for(var R=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers/"+a,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){W(e.name),N(e.address),I(e.person),x(e)})).catch((function(e){return console.error(e)}))},$=function(){var e=u()().format("HH:mm"),t=u()().format("YYYY-MM-DD");fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(a){L(a),A(Object(f.a)(Object(f.a)({},S),{},{mechanic:a[0].mechanicid,date:t,time:e}))})).catch((function(e){return console.error(e)}))},G=function(){if(""===S.date||""===S.time||""===S.task)alert("T\xe4yt\xe4 pakolliset kent\xe4t");else{var e=X.findIndex((function(e){return e===S.mechanic}));t(S,a,_,X[e],V[e],Z[e],ee[e]),s(!1)}},Q=function(e){A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,e.target.value)))},V=[],X=[],Z=[],ee=[],te=0;te<F.length;te++)V=[].concat(Object(d.a)(V),[F[te].name]),X=[].concat(Object(d.a)(X),[F[te].mechanicid]),Z=[].concat(Object(d.a)(Z),[F[te].email]),ee=[].concat(Object(d.a)(ee),[F[te].phone]);var ae=V.map((function(e){return r.a.createElement("option",{value:e},e)}));return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){s(!0)}},"Lis\xe4\xe4 uusi huoltoty\xf6"),r.a.createElement(E.a,{open:i,onClose:G,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"uusi huoltoty\xf6"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,required:!0,type:"date",margin:"dense",id:"date",name:"date",value:S.date,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"time",margin:"dense",id:"time",name:"time",value:S.time,onChange:Q,label:"",fullWidth:!0}),r.a.createElement(b.a,{required:!0,type:"number",step:.1,min:0,margin:"dense",id:"duration",name:"duration",value:S.duration,onChange:function(e){var t=e.target.value.charAt(0),a=e.target.value.charAt(1);"0"===t&&""!==a&&(e.target.value=e.target.value.substr(1),console.log(e.target.value)),e.target.value<1&&(e.target.value=0),A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,e.target.value)))},label:"Ty\xf6nkesto",fullWidth:!0}),r.a.createElement(b.a,{required:!0,margin:"dense",id:"task",name:"task",value:S.task,onChange:Q,label:"Ty\xf6nkuvaus",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"comment",name:"comment",value:S.comment,onChange:Q,label:"Kommentit",fullWidth:!0}),r.a.createElement(y.a,null,r.a.createElement(j.a,{id:"inputLabel"},"Asentaja"),r.a.createElement(C.a,{id:"mechanic",onChange:function(e){for(var t=0;t<F.length;t++)e.target.value===F[t].name&&A(Object(f.a)(Object(f.a)({},S),{},Object(h.a)({},e.target.name,F[t].mechanicid)))},inputProps:{name:"mechanic"}},ae)),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"name",name:"name",value:"",label:w,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"address",name:"address",value:"",label:M,fullWidth:!0}),r.a.createElement(b.a,{disabled:!0,margin:"dense",id:"person",name:"person",value:"",label:J,fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(p.a,{onClick:function(){s(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:G,color:"primary"},"Tallenna"))))}function A(e){var t=Object(n.useState)(),a=Object(l.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(),m=Object(l.a)(s,2),h=(m[0],m[1]),f=Object(n.useState)(0),b=Object(l.a)(f,2),E=b[0],k=b[1],g=Object(n.useState)(),v=Object(l.a)(g,2),j=v[0],y=v[1],C=Object(n.useState)(""),A=Object(l.a)(C,2),H=A[0],T=A[1];Object(n.useEffect)((function(){w()}),[]);var w=function(){fetch("https://kiinteistohuolto.herokuapp.com/customers",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}))},W=[{Header:"Nimi",accessor:"name"},{Header:"Osoite",accessor:"address"},{Header:"y-tunnus",accessor:"ycode"},{Header:"Yhteyshenkil\xf6",accessor:"person"},{Header:"Puhelin",accessor:"telephone"},{Header:"S\xe4hk\xf6posti",accessor:"email"},{Cell:function(e){return r.a.createElement(p.a,{size:"small",color:"secondary",onClick:function(){return P(e.original)}},"N\xe4yt\xe4 huoltoty\xf6t")}}],P=function(e){y(e.customerid),fetch("https://kiinteistohuolto.herokuapp.com/customers/"+e.customerid,{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return h(e)})).catch((function(e){return console.error(e)})),fetch("https://kiinteistohuolto.herokuapp.com/services/",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return T(e)})).catch((function(e){return console.error(e)})),k(1)},Y=[];if(""!==H)for(var M=0;M<H.length;M++)H[M].customer.customerid===j&&(Y=[].concat(Object(d.a)(Y),[H[M]]));if(1!==E)return r.a.createElement("div",null,r.a.createElement(O,{addCusto:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addcustomer",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return w()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:o,columns:W}));var N=[{Header:"P\xe4iv\xe4",accessor:"time",Cell:function(e){return function(e){return r.a.createElement("div",null,u()(e.time).format("DD.MM.YYYY HH:mm:ss"))}(e.original)}},{Header:"Ty\xf6nkuvaus",accessor:"task"},{Header:"Kesto",accessor:"duration"},{Header:"Kommentit",accessor:"comment"}];return r.a.createElement("div",null,r.a.createElement(S,{customerid:j,addService:function(e,t,a,n,r,o,c){var l={time:new Date(e.date+" "+e.time).toISOString(),duration:e.duration,task:e.task,comment:e.comment,customer:{customerid:a.customerid,name:a.name,address:a.address,ycode:a.ycode,person:a.person,telephone:a.telephone,email:a.email},mechanic:{mechanicid:n,name:r,email:o,phone:c}};fetch("https://kiinteistohuolto.herokuapp.com/addservice",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(l)}).then((function(e){return P(a)})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:Y,columns:N}))}function H(e){var t=r.a.useState(!1),a=Object(l.a)(t,2),n=a[0],o=a[1],c=r.a.useState({name:"",email:"",phone:""}),i=Object(l.a)(c,2),s=i[0],u=i[1],m=function(){e.addMech(s),o(!1)},d=function(e){u(Object(f.a)(Object(f.a)({},s),{},Object(h.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",null,r.a.createElement("h1",null,"\xa0"),r.a.createElement(p.a,{style:{margin:10},variant:"outlined",color:"primary",onClick:function(){o(!0)}},"Lis\xe4\xe4 Asentaja"),r.a.createElement(E.a,{open:n,onClose:m,"aria-labelledby":"form-dialog-title"},r.a.createElement(v.a,{id:"form-dialog-title"},"Uusi asentaja"),r.a.createElement(g.a,null,r.a.createElement(b.a,{autoFocus:!0,margin:"dense",id:"name",name:"name",value:s.name,onChange:d,label:"Nimi",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"email",name:"email",value:s.email,onChange:d,label:"S\xe4hk\xf6posti",fullWidth:!0}),r.a.createElement(b.a,{margin:"dense",id:"phone",name:"phone",value:s.phone,onChange:d,label:"Puhelin",fullWidth:!0})),r.a.createElement(k.a,null,r.a.createElement(p.a,{onClick:function(){o(!1)},color:"primary"},"Keskeyt\xe4"),r.a.createElement(p.a,{onClick:m,color:"primary"},"Tallenna"))))}function T(){var e=Object(n.useState)(),t=Object(l.a)(e,2),a=t[0],o=t[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){fetch("https://kiinteistohuolto.herokuapp.com/mechanics",{headers:{"Access-Control-Allow-Origin":"*"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.error(e)}))};return r.a.createElement("div",null,r.a.createElement(H,{addMech:function(e){fetch("https://kiinteistohuolto.herokuapp.com/addmechanic",{method:"POST",headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify(e)}).then((function(e){return c()})).catch((function(e){return console.error(e)}))}}),r.a.createElement(i.a,{defaultPageSize:10,filterable:!0,data:a,columns:[{Header:"Nimi",accessor:"name"},{Header:"puhelin",accessor:"phone"},{Header:"s\xe4hk\xf6posti",accessor:"email"}]}))}function w(){return r.a.createElement("div",null,r.a.createElement("h4",null,"Hei, t\xe4m\xe4 on demosivusto.",r.a.createElement("br",null),"Sivustolla on k\xe4ytetty API kutsuja itsetehdyst\xe4 BackEndist\xe4.",r.a.createElement("br",null),"mm osoitteesta:"),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/services",target:"_blank"},"kiinteistohuolto.herokuapp.com/services"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/customers",target:"_blank"},"kiinteistohuolto.herokuapp.com/customers"),r.a.createElement("br",null),r.a.createElement("a",{href:"https://kiinteistohuolto.herokuapp.com/mechanics",target:"_blank"},"kiinteistohuolto.herokuapp.com/mechanics"),r.a.createElement("br",null),r.a.createElement("h4",null,"BackEnd on tehty H2consolella joka tyhjenee kun serveri uinahtaa.",r.a.createElement("br",null),"BackEnd on toteutettu Maven Projektina Spring boot, kielen\xe4 Java. FrontEnd tehty Reactilla"))}var W=a(74),P=a(12),Y=a(135);var M=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Kiinteist\xf6huoltoa"),r.a.createElement(Y.a,{color:"primary",href:"/MainPage",onClick:w},"INFO")," ",r.a.createElement(Y.a,{color:"primary",href:"/Customers",onClick:A},"ASIAKKAAT")," ",r.a.createElement(Y.a,{color:"primary",href:"/Mechanics",onClick:T},"ASENTAJAT")," ",r.a.createElement(Y.a,{color:"primary",href:"/Services",onClick:m},"HUOLTOTY\xd6T")," ",r.a.createElement(W.a,null,r.a.createElement("div",null,r.a.createElement(P.a,{path:"/MainPage",component:w}),r.a.createElement(P.a,{path:"/Mechanics",component:T}),r.a.createElement(P.a,{path:"/Services",component:m}),r.a.createElement(P.a,{path:"/Customers",component:A}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.3232f568.chunk.js.map