(window.webpackJsonp=window.webpackJsonp||[]).push([[138],{xggc:function(e,t,n){"use strict";n.r(t),n.d(t,"IconsModule",(function(){return z}));var i=n("2kYt"),o=n("nIj0"),c=n("sEIs"),a=n("SVIu"),r=n("Qq0t"),l=n("dvRg"),s=n("HHFY"),d=n("EM62"),u=n("l4xa"),p=n("4C5Q"),f=n("OZlg"),g=n("e0eB"),h=n("GdrL"),m=n("RlDx"),b=n("2wTY"),x=n("gEyt"),y=n("zV1d");const w=["header",$localize`:␟c51604c3bfceeac96ceabb51c1a0caee70f85aa6␟990341683702498937:Icons`];var I,M,C;I=$localize`:␟d3482a2fe17d28c2051e895925c9f35d47dbcc29␟1035150703896968730:Search by name`,M=$localize`:␟6af010fd6ea3a514326c4f853cf0281596c7177d␟4968650495925694320: Input icon name to highlight `,C=$localize`:␟99edc985d8e0d7bf5caa99cfa881e7dd514ca74f␟5347009623708919294:${"\ufffd0\ufffd"}:INTERPOLATION:`;const T=["title",$localize`:␟1979da7460819153e11d2078244645d94291b69c␟4323470180912194028:Copy`];function v(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"button",7),d["\u0275\u0275i18nAttributes"](1,T),d["\u0275\u0275listener"]("click",(function(){d["\u0275\u0275restoreView"](e);const n=t.$implicit;return d["\u0275\u0275nextContext"](3).copyPath(n)})),d["\u0275\u0275elementEnd"]()}if(2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](3);d["\u0275\u0275classProp"]("icon_highlighted",n.getHighlight(e)),d["\u0275\u0275property"]("icon",e),d["\u0275\u0275attribute"]("aria-label",e)}}function k(e,t){if(1&e&&(d["\u0275\u0275elementContainerStart"](0),d["\u0275\u0275elementStart"](1,"h2",2),d["\u0275\u0275i18n"](2,C),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](3,"div",5),d["\u0275\u0275template"](4,v,2,4,"button",6),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementContainerEnd"]()),2&e){const e=t.$implicit,n=d["\u0275\u0275nextContext"](2);d["\u0275\u0275advance"](2),d["\u0275\u0275i18nExp"](e),d["\u0275\u0275i18nApply"](2),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",n.icons[e])}}function O(e,t){if(1&e){const e=d["\u0275\u0275getCurrentView"]();d["\u0275\u0275elementStart"](0,"h2",2),d["\u0275\u0275i18n"](1,I),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](2,"tui-input",3),d["\u0275\u0275listener"]("ngModelChange",(function(t){return d["\u0275\u0275restoreView"](e),d["\u0275\u0275nextContext"]().search=t})),d["\u0275\u0275i18n"](3,M),d["\u0275\u0275elementEnd"](),d["\u0275\u0275template"](4,k,5,2,"ng-container",4)}if(2&e){const e=d["\u0275\u0275nextContext"]();d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("tuiTextfieldLabelOutside",!0)("ngModel",e.search),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngForOf",e.keys)}}const E=["tuiIconElectron","tuiIconMaestro","tuiIconMastercard","tuiIconMir","tuiIconVisa"],S=Object.keys(p).filter(e=>-1===E.indexOf(e)&&"tuiCoreIcons"!==e&&"tuiKitIcons"!==e),j={"Normal interface icons (16px)":S.filter(e=>!e.includes("Large")),"Large interface icons (24px)":S.filter(e=>e.includes("Large")),"Payment systems":E},F=new d.InjectionToken("Icons",{factory:()=>j});let $=(()=>{class e{constructor(e,t,n){this.icons=e,this.clipboard=t,this.notifications=n,this.search="",this.keys=Object.keys(this.icons)}copyPath(e){this.clipboard.copy(e),this.notifications.show(`The name ${e} copied`,{status:"success"}).subscribe()}getHighlight(e){return this.search.length>1&&Object(u.TUI_DEFAULT_MATCHER)(e,this.search)}}return e.\u0275fac=function(t){return new(t||e)(d["\u0275\u0275directiveInject"](F),d["\u0275\u0275directiveInject"](s.b),d["\u0275\u0275directiveInject"](r.TuiNotificationsService))},e.\u0275cmp=d["\u0275\u0275defineComponent"]({type:e,selectors:[["icons"]],decls:3,vars:0,consts:[[6,"header"],["pageTab",""],[1,"title"],["tuiHintContent","You can copy icon's name with a click","tuiTextfieldSize","m",3,"tuiTextfieldLabelOutside","ngModel","ngModelChange"],[4,"ngFor","ngForOf"],[1,"icons"],["tuiIconButton","","type","button","size","m","appearance","icon","class","icon",3,"icon_highlighted","icon","click",4,"ngFor","ngForOf",6,"title"],["tuiIconButton","","type","button","size","m","appearance","icon",1,"icon",3,"icon","click",6,"title"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"tui-doc-page",0),d["\u0275\u0275i18nAttributes"](1,w),d["\u0275\u0275template"](2,O,5,3,"ng-template",1),d["\u0275\u0275elementEnd"]())},directives:[f.a,g.a,h.a,m.a,b.b,x.b,o.NgControlStatus,o.NgModel,i.s,y.a],styles:[".title[_ngcontent-%COMP%]{font:var(--tui-font-heading-6);margin:30px 0 12px}.icons[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 -12px}.icon[_ngcontent-%COMP%]{margin:12px;border-radius:0}.icon_highlighted[_ngcontent-%COMP%]{-webkit-transform:scale(1.6);transform:scale(1.6);-webkit-filter:drop-shadow(2px 1px 0 var(--tui-primary));filter:drop-shadow(2px 1px 0 var(--tui-primary))}"],changeDetection:0}),e})(),z=(()=>{class e{}return e.\u0275mod=d["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=d["\u0275\u0275defineInjector"]({factory:function(t){return new(t||e)},imports:[[o.ReactiveFormsModule,o.FormsModule,i.c,r.TuiLinkModule,r.TuiSvgModule,l.TuiMarkerIconModule,l.TuiInputModule,r.TuiButtonModule,r.TuiTextfieldControllerModule,r.TuiHintControllerModule,...a.e,c.f.forChild(Object(a.o)($))]]}),e})()}}]);