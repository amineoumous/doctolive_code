(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{YFqc:function(e,t,n){e.exports=n("cTJO")},cTJO:function(e,t,n){"use strict";var r=n("zoAU"),a=n("7KCV");t.__esModule=!0,t.default=void 0;var o=a(n("q1tI")),i=n("elyg"),c=n("nOHt"),s=n("vNVm"),l={};function d(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(a?"%"+a:"")]=!0}}var u=function(e){var t=!1!==e.prefetch,n=(0,c.useRouter)(),a=n&&n.pathname||"/",u=o.default.useMemo((function(){var t=(0,i.resolveHref)(a,e.href,!0),n=r(t,2),o=n[0],c=n[1];return{href:o,as:e.as?(0,i.resolveHref)(a,e.as):c||o}}),[a,e.href,e.as]),f=u.href,m=u.as,v=e.children,h=e.replace,b=e.shallow,p=e.scroll,j=e.locale;"string"===typeof v&&(v=o.default.createElement("a",null,v));var g=o.Children.only(v),x=g&&"object"===typeof g&&g.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),y=r(O,2),H=y[0],N=y[1],M=o.default.useCallback((function(e){H(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,H]);(0,o.useEffect)((function(){var e=N&&t&&(0,i.isLocalURL)(f),r="undefined"!==typeof j?j:n&&n.locale,a=l[f+"%"+m+(r?"%"+r:"")];e&&!a&&d(n,f,m,{locale:r})}),[m,f,N,j,t,n]);var w={ref:M,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,o,c,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==c&&(c=r.indexOf("#")<0),t[a?"replace":"push"](n,r,{shallow:o,locale:s,scroll:c}).then((function(e){e&&c&&document.body.focus()})))}(e,n,f,m,h,b,p,j)},onMouseEnter:function(e){(0,i.isLocalURL)(f)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),d(n,f,m,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var Y="undefined"!==typeof j?j:n&&n.locale,D=(0,i.getDomainLocale)(m,Y,n&&n.locales,n&&n.domainLocales);w.href=D||(0,i.addBasePath)((0,i.addLocale)(m,Y,n&&n.defaultLocale))}return o.default.cloneElement(g,w)};t.default=u},gV5c:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var r=n("vJKn"),a=n.n(r),o=n("rg98"),i=n("nKUr"),c=n("q1tI"),s=n("wd/R"),l=n.n(s),d=n("NIcq"),u=n("wb2y"),f=n("lIVJ"),m=n("T00j");function v(e){var t=Object(c.useState)(l()()),n=t[0],r=t[1],s=Object(c.useState)([]),v=s[0],h=s[1],b=Object(m.b)().userData,p=function(t,n,r){console.log(n),r||e.setSelectedHour(t.format("YYYY/MM/DD"),n)},j=function(e){"next"===e?r(l()(n).add(7,"days")):l()(n).isAfter(l()())&&r(l()(n).subtract(7,"days"))},g=function(t){var n=e.showDisponibilite.horaires.find((function(e){return e.jour===t.format("dddd")}));if(!n)return[];for(var r=[],a=l()(n.fin_soir,"HH:mm:ss"),o=l()(n.debut_soir,"HH:mm:ss"),c=0,s=function(){var e=void 0;v&&(e=v.find((function(e){return e.time===o.format("HH:mm:ss")&&t.format("YYYY-MM-DD")===e.date})));var a=l()(l()(t).format("YYYY/MM/DD")+o.format("HH:mm"),"YYYY/MM/DDHH:mm"),s=void 0!==e||l()().isAfter(a),d=o.format("HH:mm"),u=s?Object(i.jsxs)("div",{className:" hours-element-disabled",children:[" ",Object(i.jsx)("div",{className:"hour-empty",children:" "})," "]},c):Object(i.jsx)("div",{disabled:s,className:s?"cell hours-element disabled":"cell hours-element",onClick:function(){return p(t,d,s)},children:Object(i.jsxs)("span",{className:"hour",children:[" ",o.format("HH:mm")," "]})},c);r.push(u),c++,o=o.add(n.duree,"minutes")};o.isBefore(a)&&c<100;)s();return r},x=function(t){var n=e.showDisponibilite.horaires.find((function(e){return e.jour===t.lang("fr").format("dddd")}));if(!n)return[];for(var r=[],a=l()(n.fin_matin,"HH:mm:ss"),o=l()(n.debut_matin,"HH:mm:ss"),c=0,s=function(){var e=void 0;v&&(e=v.find((function(e){return e.time===o.format("HH:mm:ss")&&t.format("YYYY-MM-DD")===e.date})));var a=l()(l()(t).format("YYYY/MM/DD")+o,"YYYY/MM/DDHH:mm"),s=o.format("HH:mm"),d=void 0!==e||l()().isAfter(a),u=d?Object(i.jsxs)("div",{className:" hours-element-disabled",children:[" ",Object(i.jsx)("div",{className:"hour-empty",children:" "})," "]},c):Object(i.jsx)("div",{disabled:d,className:d?"cell hours-element disabled":"cell hours-element",onClick:function(){return p(t,s,d)},children:Object(i.jsxs)("span",{className:"hour",children:[o.format("HH:mm"),"  "]})},c);r.push(u),c++,o=o.add(n.duree,"minutes")};o.isBefore(a)&&c<100;)s();return r};Object(c.useEffect)(Object(o.a)(a.a.mark((function t(){var r,o;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(f.a.BACKEND_URL,"/consultation/medecin-calendar/").concat(e.showDisponibilite.id,"/").concat(n),{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"token ".concat(b.token)}});case 2:return r=t.sent,t.next=5,r.json();case 5:o=t.sent,h(o.medecinCalendar);case 7:case"end":return t.stop()}}),t)}))),[n]);return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"date-range-calendar",style:"ar"===e.locale?{direction:"rtl",textAlign:"right"}:{direction:"ltr"},children:Object(i.jsxs)("div",{className:"range-calendar",children:[Object(i.jsx)("div",{className:"calendar-pagination",children:Object(i.jsxs)("button",{className:"",id:"date-range-preview",onClick:function(){return j("preview")},children:["  ","ar"===e.locale?Object(i.jsx)(d.d,{}):Object(i.jsx)(d.c,{}),"  "]})}),Object(i.jsx)("div",{className:"calendar",children:e.showDisponibilite?function(){for(var e=[],t=0;t<=6;t++){var r=l()(n).add(t,"days"),a=Object(i.jsxs)("div",{className:"calendar-day",children:[Object(i.jsx)("div",{className:"calendar-day-title",children:Object(i.jsxs)("div",{className:"cell-content",children:[Object(i.jsxs)("div",{className:"calendar-day-name",children:[r.format("dddd")," "]}),Object(i.jsx)("div",{className:"calendar-day-date",children:r.format("D")+" "+r.format("MMM")})]})}),Object(i.jsxs)("div",{children:[x(r),Object(i.jsx)(u.a,{}),g(r)]})]},t);e.push(a)}return e}():null}),Object(i.jsx)("div",{className:"calendar-pagination",children:Object(i.jsxs)("button",{className:"",id:"date-range-next",onClick:function(){return j("next")},children:["  ","ar"===e.locale?Object(i.jsx)(d.c,{}):Object(i.jsx)(d.d,{})," "]})})]})})})}},rg98:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var c=e[o](i),s=c.value}catch(l){return void n(l)}c.done?t(s):Promise.resolve(s).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function c(e){r(i,a,o,c,s,"next",e)}function s(e){r(i,a,o,c,s,"throw",e)}c(void 0)}))}}n.d(t,"a",(function(){return a}))},vNVm:function(e,t,n){"use strict";var r=n("zoAU"),a=n("AroE");t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!c,a=(0,o.useRef)(),l=(0,o.useState)(!1),d=r(l,2),u=d[0],f=d[1],m=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||u||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=s.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return s.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,o=r.observer,i=r.elements;return i.set(e,t),o.observe(e),function(){i.delete(e),o.unobserve(e),0===i.size&&(o.disconnect(),s.delete(a))}}(e,(function(e){return e&&f(e)}),{rootMargin:t}))}),[n,t,u]);return(0,o.useEffect)((function(){c||u||(0,i.default)((function(){return f(!0)}))}),[u]),[m,u]};var o=n("q1tI"),i=a(n("0G5g")),c="undefined"!==typeof IntersectionObserver;var s=new Map},wb2y:function(e,t,n){"use strict";var r=n("wx14"),a=n("Ff2n"),o=n("q1tI"),i=(n("17x9"),n("iuhU")),c=n("H2TA"),s=n("ye/S"),l=o.forwardRef((function(e,t){var n=e.absolute,c=void 0!==n&&n,s=e.classes,l=e.className,d=e.component,u=void 0===d?"hr":d,f=e.flexItem,m=void 0!==f&&f,v=e.light,h=void 0!==v&&v,b=e.orientation,p=void 0===b?"horizontal":b,j=e.role,g=void 0===j?"hr"!==u?"separator":void 0:j,x=e.variant,O=void 0===x?"fullWidth":x,y=Object(a.a)(e,["absolute","classes","className","component","flexItem","light","orientation","role","variant"]);return o.createElement(u,Object(r.a)({className:Object(i.a)(s.root,l,"fullWidth"!==O&&s[O],c&&s.absolute,m&&s.flexItem,h&&s.light,"vertical"===p&&s.vertical),role:g,ref:t},y))}));t.a=Object(c.a)((function(e){return{root:{height:1,margin:0,border:"none",flexShrink:0,backgroundColor:e.palette.divider},absolute:{position:"absolute",bottom:0,left:0,width:"100%"},inset:{marginLeft:72},light:{backgroundColor:Object(s.a)(e.palette.divider,.08)},middle:{marginLeft:e.spacing(2),marginRight:e.spacing(2)},vertical:{height:"100%",width:1},flexItem:{alignSelf:"stretch",height:"auto"}}}),{name:"MuiDivider"})(l)}}]);