_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[31],{"+kQQ":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return g}));var c=n("vJKn"),a=n.n(c),s=n("rg98"),r=n("nKUr"),i=n("q1tI"),o=n("3Z9Z"),l=n("JI6e"),d=n("YFqc"),u=n.n(d),j=n("lIVJ"),m=n("wd/R"),p=n.n(m),f=n("X13+"),h=n("T00j"),b=n("20a2"),x=n("kv0W"),O=n("FT3n"),v=n("ZkZy");function N(e){var t=e.consultation,n=e.app_id;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:n==t.id?"card selected":"card",children:[Object(r.jsxs)("div",{className:"card-header",children:[Object(r.jsxs)("h2",{children:[" ",p.a.utc(t.date+t.time,"YYYY/MM/DDHH:mm").calendar()]}),t.teleconsultation?Object(r.jsx)(f.b,{}):null]}),Object(r.jsxs)("div",{className:"card-body d-flex",children:[Object(r.jsx)("div",{className:"doctor-img",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:t.medecin.image?"".concat(j.a.BACKEND_URL,"/").concat(t.medecin.image):"/image/medecin/homme.jpg",className:"img-fluid",alt:"User Image"})})}),Object(r.jsxs)("div",{className:"doc-info-cont",children:[Object(r.jsxs)("h4",{children:["  ",t.title," "]}),Object(r.jsx)("h5",{className:"doc-name",children:Object(r.jsxs)("a",{href:"/doctor/".concat(t.medecin.id),children:["Dr. ","".concat(t.medecin.nom," ").concat(t.medecin.prenom)]})})]})]}),Object(r.jsx)("div",{className:"card-action justify-content-center",children:Object(r.jsx)(u.a,{href:"/account/appointments/historique?app_id=".concat(t.id),children:Object(r.jsx)("a",{className:"link btn btn-primary",children:" Voir plus de d\xe9tails "})})})]})})}function g(){var e=Object(b.useRouter)(),t=e.locale,n="ar"===t?v.a:"en"===t?O.a:x.a,c=Object(i.useState)([]),d=c[0],m=c[1],p=Object(i.useState)(),f=p[0],g=p[1],k=e.query.app_id,_=Object(h.b)().userData;return Object(i.useEffect)((function(){return k?fetch("".concat(j.a.BACKEND_URL,"/consultation/").concat(k),{headers:{"Content-Type":"application/json",Authorization:"token ".concat(_.token)}}).then((function(e){return e.json().then((function(e){e.error||g(e.consultation)})).catch((function(e){}))})).catch((function(e){})):g(),function(){}}),[k]),Object(i.useEffect)(Object(s.a)(a.a.mark((function t(){var n,c;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(_.token){t.next=2;break}return t.abrupt("return",e.push("account/new"));case 2:return t.next=4,fetch("".concat(j.a.BACKEND_URL,"/patient/appointments/historique"),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"token ".concat(_.token)}});case 4:return n=t.sent,t.next=7,n.json();case 7:return c=t.sent,m(c.consultations),t.abrupt("return",(function(){}));case 10:case"end":return t.stop()}}),t)}))),[]),d?0===d.length?Object(r.jsxs)("div",{className:"container section-content",children:[Object(r.jsxs)("h1",{className:"text-center",children:[" ",n.appointments.myapp," "]}),Object(r.jsxs)("p",{className:"text-center",children:[" ",n.appointments.noApp," "]}),Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(u.a,{href:"/",children:Object(r.jsxs)("a",{className:"link btn btn-primary",children:[" ",n.appointments.takeapp," "]})})}),Object(r.jsx)(o.a,{className:"m-0 justify-content-center",children:Object(r.jsx)(u.a,{href:"/account/appointments",children:Object(r.jsxs)("a",{className:"link black",children:[" ",n.appointments.nextApp," "]})})})]}):Object(r.jsxs)("div",{className:"section-content",children:[Object(r.jsx)(o.a,{className:"m-0 justify-content-center",children:Object(r.jsxs)("h1",{children:[" ",n.appointments.myHistory," "]})}),Object(r.jsx)(o.a,{className:"m-0 justify-content-center",children:Object(r.jsx)(u.a,{href:"/account/appointments",children:Object(r.jsxs)("a",{className:"link black",children:[" ",n.appointments.nextApp," "]})})}),Object(r.jsxs)(o.a,{className:"m-0",children:[Object(r.jsx)(l.a,{lg:"3",className:"apointements-left",children:Object(r.jsx)("div",{className:"patient-appointments",children:d.map((function(e,t){return Object(r.jsx)(o.a,{className:"justify-content-center patient-appointment m-0",children:Object(r.jsx)(N,{content:n,consultation:e,app_id:k})},t)}))})}),Object(r.jsx)(l.a,{lg:"9",children:f?Object(r.jsx)(o.a,{className:"justify-content-center patient-appointment m-0",children:Object(r.jsx)(y,{content:n,consultation:f})}):null})]})]}):Object(r.jsxs)("div",{className:"container section-content",children:[Object(r.jsxs)("h1",{className:"text-center",children:[" ",n.appointments.notAuth," "]}),Object(r.jsx)("div",{className:"text-center",children:Object(r.jsx)(u.a,{href:"/login",children:Object(r.jsxs)("a",{className:"link btn btn-primary",children:[" ",n.appointments.takeapp," "]})})})]})}function y(e){var t=e.consultation,n=e.content;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"card",children:[Object(r.jsxs)("div",{className:"card-header",children:[Object(r.jsxs)("h2",{children:[" ",p.a.utc(t.date+t.time,"YYYY/MM/DDHH:mm").calendar()]}),t.teleconsultation?Object(r.jsx)(f.b,{}):null]}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)(o.a,{children:Object(r.jsx)(l.a,{lg:"7",md:"12",xs:"12",children:Object(r.jsxs)(o.a,{children:[Object(r.jsx)("div",{className:"doctor-img",children:Object(r.jsx)("a",{children:Object(r.jsx)("img",{src:t.medecin.image?"".concat(j.a.BACKEND_URL,"/").concat(t.medecin.image):"/image/medecin/homme.jpg",className:"img-fluid",alt:"User Image"})})}),Object(r.jsxs)("div",{className:"doc-info-cont",children:[Object(r.jsxs)("h4",{children:["  ",t.title," "]}),Object(r.jsx)("h5",{className:"doc-name",children:Object(r.jsxs)("a",{href:"/doctor/".concat(t.medecin.id),children:["Dr. ","".concat(t.medecin.nom," ").concat(t.medecin.prenom)]})})]}),Object(r.jsx)("div",{className:"doc-info-cont ml-5",children:Object(r.jsxs)("ul",{className:"contacts",children:[Object(r.jsxs)("li",{children:[Object(r.jsxs)("h6",{children:[" ",n.appointments.accessInfos," "]}),t.medecin.adress?(t.medecin.adress.streetName?t.medecin.adress.streetName:"")+" "+(t.medecin.adress.buildingName?t.medecin.adress.buildingName:"")+" "+(t.medecin.adress.floor?"\xe9tage "+t.medecin.adress.floor:"")+" "+(t.medecin.adress.sector?t.medecin.adress.sector:"")+", "+(t.medecin.adress.codePostal?t.medecin.adress.codePostal:"")+" - "+(t.medecin.city?t.medecin.city.name:""):n.appointments.cardApp.notSpecified]}),Object(r.jsxs)("li",{children:[Object(r.jsxs)("h6",{children:[" ",n.appointments.secretariat," "]}),t.medecin.phone," "]})]})})]})})}),t.teleconsultation?Object(r.jsx)(o.a,{className:"mt-5",children:Object(r.jsx)(l.a,{md:"6",children:Object(r.jsx)(u.a,{href:"/consultation/".concat(t.id),children:Object(r.jsxs)("a",{className:"link btn btn-primary",children:[" ",n.appointments.cardApp.seeInfosShared," "]})})})}):null]})]})})}},B9H7:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/appointments/historique",function(){return n("+kQQ")}])},YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var c=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var s=a(n("q1tI")),r=n("elyg"),i=n("nOHt"),o=n("vNVm"),l={};function d(e,t,n,c){if(e&&(0,r.isLocalURL)(t)){e.prefetch(t,n,c).catch((function(e){0}));var a=c&&"undefined"!==typeof c.locale?c.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,i.useRouter)(),a=n&&n.pathname||"/",u=s.default.useMemo((function(){var t=(0,r.resolveHref)(a,e.href,!0),n=c(t,2),s=n[0],i=n[1];return{href:s,as:e.as?(0,r.resolveHref)(a,e.as):i||s}}),[a,e.href,e.as]),j=u.href,m=u.as,p=e.children,f=e.replace,h=e.shallow,b=e.scroll,x=e.locale;"string"===typeof p&&(p=s.default.createElement("a",null,p));var O=s.Children.only(p),v=O&&"object"===typeof O&&O.ref,N=(0,o.useIntersection)({rootMargin:"200px"}),g=c(N,2),y=g[0],k=g[1],_=s.default.useCallback((function(e){y(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,y]);(0,s.useEffect)((function(){var e=k&&t&&(0,r.isLocalURL)(j),c="undefined"!==typeof x?x:n&&n.locale,a=l[j+"%"+m+(c?"%"+c:"")];e&&!a&&d(n,j,m,{locale:c})}),[m,j,k,x,t,n]);var w={ref:_,onClick:function(e){O.props&&"function"===typeof O.props.onClick&&O.props.onClick(e),e.defaultPrevented||function(e,t,n,c,a,s,i,o){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,r.isLocalURL)(n))&&(e.preventDefault(),null==i&&(i=c.indexOf("#")<0),t[a?"replace":"push"](n,c,{shallow:s,locale:o,scroll:i}).then((function(e){e&&i&&document.body.focus()})))}(e,n,j,m,f,h,b,x)},onMouseEnter:function(e){(0,r.isLocalURL)(j)&&(O.props&&"function"===typeof O.props.onMouseEnter&&O.props.onMouseEnter(e),d(n,j,m,{priority:!0}))}};if(e.passHref||"a"===O.type&&!("href"in O.props)){var E="undefined"!==typeof x?x:n&&n.locale,A=(0,r.getDomainLocale)(m,E,n&&n.locales,n&&n.domainLocales);w.href=A||(0,r.addBasePath)((0,r.addLocale)(m,E,n&&n.defaultLocale))}return s.default.cloneElement(O,w)};t.default=u},rg98:function(e,t,n){"use strict";function c(e,t,n,c,a,s,r){try{var i=e[s](r),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(c,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,s){var r=e.apply(t,n);function i(e){c(r,a,s,i,o,"next",e)}function o(e){c(r,a,s,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return a}))},vNVm:function(e,t,n){"use strict";var c=n("zoAU"),a=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,s.useRef)(),l=(0,s.useState)(!1),d=c(l,2),u=d[0],j=d[1],m=(0,s.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||u||e&&e.tagName&&(a.current=function(e,t,n){var c=function(e){var t=e.rootMargin||"",n=o.get(t);if(n)return n;var c=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=c.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return o.set(t,n={id:t,observer:a,elements:c}),n}(n),a=c.id,s=c.observer,r=c.elements;return r.set(e,t),s.observe(e),function(){r.delete(e),s.unobserve(e),0===r.size&&(s.disconnect(),o.delete(a))}}(e,(function(e){return e&&j(e)}),{rootMargin:t}))}),[n,t,u]);return(0,s.useEffect)((function(){i||u||(0,r.default)((function(){return j(!0)}))}),[u]),[m,u]};var s=n("q1tI"),r=a(n("0G5g")),i="undefined"!==typeof IntersectionObserver;var o=new Map}},[["B9H7",0,1,3,6,9,2,4,5,7]]]);