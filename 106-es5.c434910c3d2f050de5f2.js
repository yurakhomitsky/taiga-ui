function _toConsumableArray(e){return _arrayWithoutHoles(e)||_iterableToArray(e)||_unsupportedIterableToArray(e)||_nonIterableSpread()}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _iterableToArray(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function _arrayWithoutHoles(e){if(Array.isArray(e))return _arrayLikeToArray(e)}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{hmia:function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiDropdownModule",(function(){return ne}));var o=n("2kYt"),i=n("nIj0"),r=n("sEIs"),a=n("SVIu"),u=n("l4xa"),p=n("Qq0t"),l=n("dvRg"),d=n("kiPw"),m=n("EM62"),s=n("OZlg"),c=n("e0eB"),f=n("yZWP"),h=n("iyc4"),g=n("4hRd"),v=n("zV1d"),x=n("W2aA"),y=n("1SmB");function w(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",4),m["\u0275\u0275text"](1,"\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d"),m["\u0275\u0275elementEnd"]())}var C,D=((C=function(){function e(){_classCallCheck(this,e),this.open=!1}return _createClass(e,[{key:"onClick",value:function(){this.open=!this.open}},{key:"onObscured",value:function(e){e&&(this.open=!1)}},{key:"onActiveZone",value:function(e){e||(this.open=!1)}}]),e}()).\u0275fac=function(e){return new(e||C)},C.\u0275cmp=m["\u0275\u0275defineComponent"]({type:C,selectors:[["tui-dropdown-example-1"]],decls:5,vars:2,consts:[[3,"tuiActiveZoneChange"],["tuiButton","","type","button","iconRight","tuiIconChevronDown",3,"tuiDropdownContent","tuiDropdown","tuiObscured","click"],["polymorpheus",""],["dropdownContent","polymorpheus"],[1,"dropdown"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"span",0),m["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return t.onActiveZone(e)})),m["\u0275\u0275elementStart"](1,"button",1),m["\u0275\u0275listener"]("tuiObscured",(function(e){return t.onObscured(e)}))("click",(function(){return t.onClick()})),m["\u0275\u0275text"](2," \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438 "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](3,w,2,0,"ng-template",2,3,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275reference"](4);m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdown",t.open)}},directives:[g.a,v.a,x.a,y.a,d.e],styles:['.dropdown[_ngcontent-%COMP%]{font-weight:"normal";font-size:13px;font-family:var(--tui-text-font);line-height:20px;letter-spacing:1px;text-transform:uppercase;padding:4px 12px}'],changeDetection:0}),C),b=n("+SFL"),q=n("cweO");function M(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",3),m["\u0275\u0275element"](1,"tui-avatar",4),m["\u0275\u0275elementStart"](2,"div",5),m["\u0275\u0275elementStart"](3,"div",6),m["\u0275\u0275text"](4,"\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a Taiga UI"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"div",7),m["\u0275\u0275text"](6,"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0418\u043d\u043a\u0438\u043d"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"div",8),m["\u0275\u0275text"](8,"a.inkin"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("rounded",!0)("avatarUrl",n.avatarUrl)}}var P,S=((P=function(){function e(){_classCallCheck(this,e),this.open=!1,this.avatarUrl=b.a}return _createClass(e,[{key:"onMouseEnter",value:function(){this.open=!0}},{key:"onMouseLeave",value:function(){this.open=!1}}]),e}()).\u0275fac=function(e){return new(e||P)},P.\u0275cmp=m["\u0275\u0275defineComponent"]({type:P,selectors:[["tui-dropdown-example-2"]],decls:9,vars:2,consts:[["tuiLink","","mode","pseudo","tuiDropdownAlign","right","tuiDropdownDirection","top",3,"tuiDropdownContent","tuiDropdown","mouseenter","mouseleave"],["polymorpheus",""],["dropdownContent","polymorpheus"],[1,"dropdown"],["size","l",3,"rounded","avatarUrl"],[1,"text"],[1,"label"],[1,"name"],[1,"account"]],template:function(e,t){if(1&e&&(m["\u0275\u0275text"](0,"\u041d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u043e\u0439 "),m["\u0275\u0275elementStart"](1,"code"),m["\u0275\u0275text"](2,"tuiDropdown"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3,",\xa0"),m["\u0275\u0275elementStart"](4,"button",0),m["\u0275\u0275listener"]("mouseenter",(function(){return t.onMouseEnter()}))("mouseleave",(function(){return t.onMouseLeave()})),m["\u0275\u0275text"](5," \u0421\u0430\u0448\u0430\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](6,"\n\u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e! "),m["\u0275\u0275template"](7,M,9,2,"ng-template",1,2,m["\u0275\u0275templateRefExtractor"])),2&e){var n=m["\u0275\u0275reference"](8);m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdown",t.open)}},directives:[f.a,x.a,d.e,q.a],styles:['.dropdown[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex;padding:6px 12px}.text[_ngcontent-%COMP%]{padding:0 12px}.label[_ngcontent-%COMP%]{font-weight:"normal";font-size:15px;font-family:var(--tui-text-font);color:var(--tui-text-03)}.label[_ngcontent-%COMP%], .name[_ngcontent-%COMP%]{line-height:24px}.name[_ngcontent-%COMP%]{font-weight:700;font-size:20px;font-family:var(--tui-heading-font)}.account[_ngcontent-%COMP%]{font-weight:"normal";font-size:13px;font-family:var(--tui-text-font);line-height:20px;margin-top:4px;color:var(--tui-text-02)}'],changeDetection:0}),P),E=n("3p4X"),T=n("kuMc");function A(e,t){1&e&&(m["\u0275\u0275elementContainerStart"](0),m["\u0275\u0275elementStart"](1,"p",7),m["\u0275\u0275text"](2," Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo neque officiis pariatur quidem quos rerum sunt, temporibus tenetur ullam vitae? "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](3,"p"),m["\u0275\u0275text"](4," Dolores est hic impedit odio. Culpa debitis deleniti eaque explicabo id maxime officiis quasi quos, rerum. Adipisci aut consequatur earum esse facere fugit, inventore ipsa modi officia, perspiciatis tempore voluptates! "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](5,"p"),m["\u0275\u0275text"](6," Blanditiis debitis earum eius error itaque nemo repellat rerum totam vel voluptates. Cupiditate ducimus et ex, facilis magni maiores nemo nulla sed sunt, tempore vel vero. Dicta ea nihil sapiente! "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275text"](8," Ad aliquid aperiam assumenda consequuntur dolore eius esse et exercitationem facere illo, maiores maxime nam, natus nemo nihil officia optio placeat quia recusandae rem reprehenderit sapiente sed similique ut, veritatis! "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](9,"p"),m["\u0275\u0275text"](10," Ab animi beatae commodi consequuntur culpa eaque earum eligendi eveniet fugit, id illo impedit in ipsa ipsam nostrum optio pariatur, perspiciatis quas quidem quis sed temporibus velit vitae? Consequuntur, quia! "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"p"),m["\u0275\u0275text"](12," Dolorem eligendi est illo impedit iste laudantium, odit pariatur quam quasi tenetur. Dolor, dolorem esse illo maiores nihil pariatur quisquam saepe! Ea eaque inventore iure nulla porro possimus sunt vero! "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"p"),m["\u0275\u0275text"](14," Inventore itaque iure pariatur! Adipisci animi aut corporis dolorum, eaque est exercitationem id illum laboriosam laborum libero molestias numquam obcaecati perferendis provident reprehenderit sapiente sequi similique tempora veniam. Reprehenderit, sequi? "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"p"),m["\u0275\u0275text"](16," Adipisci alias blanditiis consectetur cumque dolore dolorum et facere hic illo laboriosam, laudantium modi natus neque nisi optio possimus, quaerat quis ratione rerum, suscipit tempora tempore ullam voluptatum! Autem, rem. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](17,"p"),m["\u0275\u0275text"](18," Consequuntur cum doloribus eaque excepturi nisi. Aperiam autem beatae debitis deleniti dicta dignissimos, doloribus error et eum, eveniet illo itaque iure magni molestias placeat quas ratione tenetur vitae voluptates voluptatum. "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](19,"p"),m["\u0275\u0275text"](20," Consequuntur fugit in odit qui sapiente! Consequuntur, distinctio illo inventore iste nemo non odio quia, sint tempora tenetur ut voluptatum. Ab aut doloremque laborum maiores modi reprehenderit sit tempora! Molestias? "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementContainerEnd"]())}function V(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"input",5),m["\u0275\u0275listener"]("ngModelChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().value=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](1,A,21,0,"ng-container",6)}if(2&e){var o=m["\u0275\u0275nextContext"]();m["\u0275\u0275property"]("ngModel",o.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngIf",o.showBigText)}}var k,_=((k=function e(t,n){var o=this;_classCallCheck(this,e),this.open=!1,this.value="some data",this.showBigText=!1,Object(E.a)(3e3).pipe(Object(u.watch)(n),Object(T.a)(t)).subscribe((function(){o.showBigText=!o.showBigText,n.markForCheck()}))}).\u0275fac=function(e){return new(e||k)(m["\u0275\u0275directiveInject"](u.TuiDestroyService),m["\u0275\u0275directiveInject"](m.ChangeDetectorRef))},k.\u0275cmp=m["\u0275\u0275defineComponent"]({type:k,selectors:[["tui-dropdown-example-3"]],features:[m["\u0275\u0275ProvidersFeature"]([u.TuiDestroyService])],decls:6,vars:4,consts:[["type","text",3,"ngModel","ngModelChange"],[3,"tuiDropdownContent","tuiDropdown"],["type","checkbox",3,"ngModel","ngModelChange"],["polymorpheus",""],["dropdownContent","polymorpheus"],["type","text",1,"dropdown",3,"ngModel","ngModelChange"],[4,"ngIf"],["id","aaa"]],template:function(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"input",0),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.value=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](1,"label",1),m["\u0275\u0275elementStart"](2,"input",2),m["\u0275\u0275listener"]("ngModelChange",(function(e){return t.open=e})),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3," open\n"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](4,V,2,2,"ng-template",3,4,m["\u0275\u0275templateRefExtractor"])),2&e){var n=m["\u0275\u0275reference"](5);m["\u0275\u0275property"]("ngModel",t.value),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("tuiDropdownContent",n)("tuiDropdown",t.open),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("ngModel",t.open)}},directives:[i.DefaultValueAccessor,i.NgControlStatus,i.NgModel,x.a,i.CheckboxControlValueAccessor,d.e,o.t],styles:[".dropdown[_ngcontent-%COMP%]{margin:16px}"],changeDetection:0}),k),L=n("EPR0"),O=n("yHor"),I=n("zGJC"),H=n("u8jZ"),U=function(){return["/tui-active-zone"]},j=function(){return["/tui-hosted-dropdown"]};function R(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"div",2),m["\u0275\u0275text"](1," \u0414\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430 "),m["\u0275\u0275elementStart"](2,"code"),m["\u0275\u0275text"](3,"tuiDropdown"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](4," \u043d\u0443\u0436\u043d\u0430 \u0434\u043b\u044f \u043f\u043e\u043a\u0430\u0437\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0441 \u043f\u0440\u043e\u0438\u0437\u0432\u043e\u043b\u044c\u043d\u044b\u043c \u0448\u0430\u0431\u043b\u043e\u043d\u043e\u043c. \u0414\u043b\u044f \u0441\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0443 "),m["\u0275\u0275elementStart"](5,"a",3),m["\u0275\u0275text"](6,"ActiveZone"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](7,". "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](8," \u0421\u043c. \u0442\u0430\u043a\u0436\u0435 "),m["\u0275\u0275elementStart"](9,"a",3),m["\u0275\u0275text"](10,"HostedDropdown"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](11,"tui-doc-example",4),m["\u0275\u0275element"](12,"tui-dropdown-example-1"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](13,"tui-doc-example",5),m["\u0275\u0275element"](14,"tui-dropdown-example-2"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](15,"tui-doc-example",6),m["\u0275\u0275element"](16,"tui-dropdown-example-3"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](5,U)),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("routerLink",m["\u0275\u0275pureFunction0"](6,j)),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example1),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example2),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example3)}}function B(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"div",20),m["\u0275\u0275text"](1," \u0422\u0443\u0442 \u043c\u043e\u0436\u0435\u0442 \u0431\u044b\u0442\u044c \u043b\u044e\u0431\u043e\u0439 \u043a\u043e\u043d\u0442\u0435\u043d\u0442 "),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275text"](3,"\u041c\u043e\u0436\u043d\u043e \u0441\u044e\u0434\u0430 \u0434\u0430\u0436\u0435 \u0434\u0440\u0443\u0433\u0438\u0435 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442\u044b \u0432\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c:"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](4,"button",21),m["\u0275\u0275text"](5,"\u041d\u0415 \u0416\u041c\u0418!"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"p"),m["\u0275\u0275text"](7,"\u0412\u0441\u0451, \u0447\u0442\u043e \u0434\u0443\u0448\u0435 \u0443\u0433\u043e\u0434\u043d\u043e. *"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"sub"),m["\u0275\u0275text"](9," * \u041a\u0440\u043e\u043c\u0435 \u0441\u043b\u0443\u0447\u0430\u0435\u0432, \u043f\u0440\u0435\u0434\u0443\u0441\u043c\u043e\u0442\u0440\u0435\u043d\u043d\u044b\u0445 \u0434\u0435\u0439\u0441\u0442\u0432\u0443\u044e\u0449\u0438\u043c \u0437\u0430\u043a\u043e\u043d\u043e\u0434\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e\u043c \u0420\u043e\u0441\u0441\u0438\u0439\u0441\u043a\u043e\u0439 \u0424\u0435\u0434\u0435\u0440\u0430\u0446\u0438\u0438 "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]())}function W(e,t){1&e&&m["\u0275\u0275text"](0," \u041f\u043e\u043a\u0430\u0437\u0430\u043d\u0430 \u043b\u0438 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0430 ")}function Z(e,t){1&e&&m["\u0275\u0275text"](0," \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 ")}function N(e,t){1&e&&(m["\u0275\u0275text"](0," \u041e\u043f\u043e\u0440\u043d\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u0430, \u043e\u0442 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0441\u0442\u0440\u043e\u0438\u0442\u0441\u044f \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438. \u041f\u0440\u0438 "),m["\u0275\u0275elementStart"](1,"code"),m["\u0275\u0275text"](2,"sided"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](3,' \u2014 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438, \u043a\u043e\u0442\u043e\u0440\u0430\u044f "\u043f\u0440\u0438\u043b\u0438\u043f\u0430\u0435\u0442" \u043a \u0445\u043e\u0441\u0442\u0443, \u0438\u043d\u0430\u0447\u0435, \u043f\u0440\u0438 '),m["\u0275\u0275elementStart"](4,"code"),m["\u0275\u0275text"](5,"tuiDropdownLimitWidth !== 'fixed'"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](6," \u2014 \u0441\u0442\u043e\u0440\u043e\u043d\u0430 \u0445\u043e\u0441\u0442\u0430, \u043f\u043e \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0430 \u0432\u044b\u0440\u043e\u0432\u043d\u0435\u043d\u0430. \u041f\u0440\u0438 "),m["\u0275\u0275elementStart"](7,"code"),m["\u0275\u0275text"](8,"tuiDropdownLimitWidth === 'fixed'"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](9," \u043d\u0435 \u0438\u043c\u0435\u0435\u0442 \u044d\u0444\u0444\u0435\u043a\u0442\u0430, \u0442\u0430\u043a \u043a\u0430\u043a \u0438 \u043b\u0435\u0432\u0430\u044f \u0438 \u043f\u0440\u0430\u0432\u0430\u044f \u0441\u0442\u043e\u0440\u043e\u043d\u044b \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0444\u0438\u043a\u0441\u0438\u0440\u043e\u0432\u0430\u043d\u044b \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 \u0445\u043e\u0441\u0442\u0430. "))}function z(e,t){1&e&&m["\u0275\u0275text"](0," \u0417\u0430\u0434\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 ")}function F(e,t){1&e&&m["\u0275\u0275text"](0," \u0417\u0430\u0434\u0430\u0442\u044c \u044f\u0432\u043d\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u0441\u0447\u0438\u0442\u0430\u044e\u0449\u0438\u0439\u0441\u044f \u0438\u043d\u0438\u0446\u0438\u0430\u0442\u043e\u0440\u043e\u043c \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u2014 \u043f\u0440\u0438 \u0432\u044b\u0445\u043e\u0434\u0435 \u0444\u043e\u043a\u0443\u0441\u0430 \u0438\u0437 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438 \u0447\u0435\u0440\u0435\u0437 Tab/Shift+Tab \u044d\u0442\u043e\u0442 \u044d\u043b\u0435\u043c\u0435\u043d\u0442 \u0431\u0443\u0434\u0435\u0442 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0442\u044c\u0441\u044f \u0434\u043b\u044f \u043f\u043e\u0438\u0441\u043a\u0430 \u043d\u043e\u0432\u043e\u0433\u043e \u044d\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0434\u043b\u044f \u0444\u043e\u043a\u0443\u0441\u0430. \u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f \u044d\u043b\u0435\u043c\u0435\u043d\u0442, \u043d\u0430 \u043a\u043e\u0442\u043e\u0440\u043e\u043c \u043d\u0430\u0445\u043e\u0434\u0438\u0442\u0441\u044f \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u0430. ")}function $(e,t){1&e&&m["\u0275\u0275text"](0," \u041e\u0433\u0440\u0430\u043d\u0438\u0447\u0438\u0442\u044c \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a \u043f\u043e \u0448\u0438\u0440\u0438\u043d\u0435 ")}function G(e,t){1&e&&m["\u0275\u0275text"](0," \u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430, \u043f\u0440\u0438 \u043a\u043e\u0442\u043e\u0440\u043e\u0439 \u0443\u0447\u0438\u0442\u044b\u0432\u0430\u0435\u0442\u0441\u044f \u043f\u0440\u0438\u043d\u0443\u0434\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0435 \u043d\u0430\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u0435 \u043e\u0442\u043a\u0440\u044b\u0442\u0438\u044f ")}function J(e,t){1&e&&m["\u0275\u0275text"](0," \u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430 \u0432\u044b\u043f\u0430\u0434\u0430\u044e\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 ")}function X(e,t){1&e&&m["\u0275\u0275text"](0," \u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0443 \u0441\u0431\u043e\u043a\u0443 \u043e\u0442 \u0445\u043e\u0441\u0442\u0430 ")}function Q(e,t){if(1&e){var n=m["\u0275\u0275getCurrentView"]();m["\u0275\u0275elementStart"](0,"tui-doc-demo"),m["\u0275\u0275elementStart"](1,"span",7),m["\u0275\u0275listener"]("tuiActiveZoneChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().onActiveZone(e)})),m["\u0275\u0275elementStart"](2,"button",8),m["\u0275\u0275listener"]("tuiObscured",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().onObscured(e)}))("click",(function(){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().onClick()})),m["\u0275\u0275text"](3," \u0416\u041c\u0418! "),m["\u0275\u0275elementStart"](4,"i"),m["\u0275\u0275text"](5," * \u0417\u0434\u0435\u0441\u044c \u043f\u0440\u0438\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043c\u043d\u043e\u0433\u043e \u0442\u0435\u043a\u0441\u0442\u0430 \u0434\u043b\u044f \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u044f \u0448\u0438\u0440\u0438\u043d\u044b "),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275template"](6,B,10,0,"ng-template",9,10,m["\u0275\u0275templateRefExtractor"]),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](8,"tui-doc-documentation"),m["\u0275\u0275template"](9,W,1,0,"ng-template",11),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().open=e})),m["\u0275\u0275template"](10,Z,1,0,"ng-template",12),m["\u0275\u0275template"](11,N,10,0,"ng-template",13),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownAlign=e})),m["\u0275\u0275template"](12,z,1,0,"ng-template",14),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownDirection=e})),m["\u0275\u0275template"](13,F,1,0,"ng-template",15),m["\u0275\u0275template"](14,$,1,0,"ng-template",16),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownLimitWidth=e})),m["\u0275\u0275template"](15,G,1,0,"ng-template",17),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownMinHeight=e})),m["\u0275\u0275template"](16,J,1,0,"ng-template",18),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownMaxHeight=e})),m["\u0275\u0275template"](17,X,1,0,"ng-template",19),m["\u0275\u0275listener"]("documentationPropertyValueChange",(function(e){return m["\u0275\u0275restoreView"](n),m["\u0275\u0275nextContext"]().tuiDropdownSided=e})),m["\u0275\u0275elementEnd"]()}if(2&e){var o=m["\u0275\u0275reference"](7),i=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("tuiDropdownContent",o)("tuiDropdownMinHeight",i.tuiDropdownMinHeight)("tuiDropdownMaxHeight",i.tuiDropdownMaxHeight)("tuiDropdownAlign",i.tuiDropdownAlign)("tuiDropdownDirection",i.tuiDropdownDirection)("tuiDropdownLimitWidth",i.tuiDropdownLimitWidth)("tuiDropdownSided",i.tuiDropdownSided)("tuiDropdown",i.open),m["\u0275\u0275advance"](7),m["\u0275\u0275property"]("documentationPropertyValue",i.open),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",i.alignVariants)("documentationPropertyValue",i.tuiDropdownAlign),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValues",i.dropdownDirectionVariants)("documentationPropertyValue",i.tuiDropdownDirection),m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("documentationPropertyValues",i.tuiDropdownLimitWidthVariants)("documentationPropertyValue",i.tuiDropdownLimitWidth),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",i.tuiDropdownMinHeight),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",i.tuiDropdownMaxHeight),m["\u0275\u0275advance"](1),m["\u0275\u0275property"]("documentationPropertyValue",i.tuiDropdownSided)}}function Y(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",22),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275text"](2," \u0414\u043b\u044f \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u044f \u0438\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043c\u043e\u0434\u0443\u043b\u044c "),m["\u0275\u0275elementStart"](3,"code"),m["\u0275\u0275text"](4,"TuiDropdownModule"),m["\u0275\u0275elementEnd"](),m["\u0275\u0275text"](5," \u0432 \u0442\u043e\u0442 \u0436\u0435 \u043c\u043e\u0434\u0443\u043b\u044c, \u043a\u0443\u0434\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442: "),m["\u0275\u0275element"](6,"tui-doc-code",23),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](7,"li"),m["\u0275\u0275text"](8," \u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0432 \u0448\u0430\u0431\u043b\u043e\u043d: "),m["\u0275\u0275element"](9,"tui-doc-code",24),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](6),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](3),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}var K,ee,te=((ee=function(){function e(){_classCallCheck(this,e),this.exampleImportModule="import {TuiDropdownModule} from '@taiga-ui/core';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiDropdownModule\n    ],\n...\n",this.exampleInsertTemplate='<div [tuiDropdownContent]="dropdownContent"\n     [tuiDropdown]="open">\n    \u0425\u043e\u0441\u0442-\u044d\u043b\u0435\u043c\u0435\u043d\u0442\n</div>\n\n<ng-template #dropdownContent>\n    \u0421\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435 \u0432\u044b\u043f\u0430\u0434\u0430\u0448\u043a\u0438\n</ng-template>\n',this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample1 {\n    open = false;\n\n    onClick() {\n        this.open = !this.open;\n    }\n\n    onObscured(obscured: boolean) {\n        if (obscured) {\n            this.open = false;\n        }\n    }\n\n    onActiveZone(active: boolean) {\n        if (!active) {\n            this.open = false;\n        }\n    }\n}\n",HTML:'<span (tuiActiveZoneChange)="onActiveZone($event)">\n    <button\n        tuiButton\n        type="button"\n        iconRight="tuiIconChevronDown"\n        [tuiDropdownContent]="dropdownContent"\n        [tuiDropdown]="open"\n        (tuiObscured)="onObscured($event)"\n        (click)="onClick()"\n    >\n        \u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438\n    </button>\n    <ng-template #dropdownContent="polymorpheus" polymorpheus>\n        <div class="dropdown">\u0421\u043c\u044b\u0441\u043b \u0436\u0438\u0437\u043d\u0438 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d</div>\n    </ng-template>\n</span>\n'},this.example2={TypeScript:"import {default as avatarUrl} from '!!file-loader!../../../../../assets/images/avatar.jpg';\nimport {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-2',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample2 {\n    open = false;\n\n    avatarUrl = avatarUrl;\n\n    onMouseEnter() {\n        this.open = true;\n    }\n\n    onMouseLeave() {\n        this.open = false;\n    }\n}\n",HTML:'\u041d\u0430 \u0432\u0441\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b, \u0441\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u0434\u0438\u0440\u0435\u043a\u0442\u0438\u0432\u043e\u0439 <code>tuiDropdown</code>,&nbsp;<button\n    tuiLink\n    mode="pseudo"\n    tuiDropdownAlign="right"\n    tuiDropdownDirection="top"\n    [tuiDropdownContent]="dropdownContent"\n    [tuiDropdown]="open"\n    (mouseenter)="onMouseEnter()"\n    (mouseleave)="onMouseLeave()"\n>\n    \u0421\u0430\u0448\u0430\n</button>\n\u043e\u0442\u0432\u0435\u0442\u0438\u0442 \u0441 \u0440\u0430\u0434\u043e\u0441\u0442\u044c\u044e!\n\n<ng-template #dropdownContent="polymorpheus" polymorpheus>\n    <div class="dropdown">\n        <tui-avatar\n            size="l"\n            [rounded]="true"\n            [avatarUrl]="avatarUrl"\n        ></tui-avatar>\n        <div class="text">\n            <div class="label">\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a Taiga UI</div>\n            <div class="name">\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0418\u043d\u043a\u0438\u043d</div>\n            <div class="account">a.inkin</div>\n        </div>\n    </div>\n</ng-template>\n'},this.example3={TypeScript:"import {ChangeDetectorRef, Component, Inject} from '@angular/core';\nimport {TuiDestroyService, watch} from '@taiga-ui/cdk';\nimport {interval} from 'rxjs';\nimport {takeUntil} from 'rxjs/operators';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-dropdown-example-3',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    providers: [TuiDestroyService],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiDropdownExample3 {\n    open = false;\n\n    value = 'some data';\n\n    showBigText = false;\n\n    constructor(\n        @Inject(TuiDestroyService) destroy$: TuiDestroyService,\n        @Inject(ChangeDetectorRef) changeDetectorRef: ChangeDetectorRef,\n    ) {\n        interval(3000)\n            .pipe(watch(changeDetectorRef), takeUntil(destroy$))\n            .subscribe(() => {\n                this.showBigText = !this.showBigText;\n                changeDetectorRef.markForCheck();\n            });\n    }\n}\n",HTML:'<input type="text" [(ngModel)]="value" />\n\n<label [tuiDropdownContent]="dropdownContent" [tuiDropdown]="open">\n    <input type="checkbox" [(ngModel)]="open" />\n    open\n</label>\n\n<ng-template #dropdownContent="polymorpheus" polymorpheus>\n    <input class="dropdown" type="text" [(ngModel)]="value" />\n    <ng-container *ngIf="showBigText">\n        <p id="aaa">\n            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab\n            assumenda at corporis ea hic illo ipsa laboriosam laudantium nemo\n            neque officiis pariatur quidem quos rerum sunt, temporibus tenetur\n            ullam vitae?\n        </p>\n        <p>\n            Dolores est hic impedit odio. Culpa debitis deleniti eaque explicabo\n            id maxime officiis quasi quos, rerum. Adipisci aut consequatur earum\n            esse facere fugit, inventore ipsa modi officia, perspiciatis tempore\n            voluptates!\n        </p>\n        <p>\n            Blanditiis debitis earum eius error itaque nemo repellat rerum totam\n            vel voluptates. Cupiditate ducimus et ex, facilis magni maiores nemo\n            nulla sed sunt, tempore vel vero. Dicta ea nihil sapiente!\n        </p>\n        <p>\n            Ad aliquid aperiam assumenda consequuntur dolore eius esse et\n            exercitationem facere illo, maiores maxime nam, natus nemo nihil\n            officia optio placeat quia recusandae rem reprehenderit sapiente sed\n            similique ut, veritatis!\n        </p>\n        <p>\n            Ab animi beatae commodi consequuntur culpa eaque earum eligendi\n            eveniet fugit, id illo impedit in ipsa ipsam nostrum optio pariatur,\n            perspiciatis quas quidem quis sed temporibus velit vitae?\n            Consequuntur, quia!\n        </p>\n        <p>\n            Dolorem eligendi est illo impedit iste laudantium, odit pariatur\n            quam quasi tenetur. Dolor, dolorem esse illo maiores nihil pariatur\n            quisquam saepe! Ea eaque inventore iure nulla porro possimus sunt\n            vero!\n        </p>\n        <p>\n            Inventore itaque iure pariatur! Adipisci animi aut corporis dolorum,\n            eaque est exercitationem id illum laboriosam laborum libero\n            molestias numquam obcaecati perferendis provident reprehenderit\n            sapiente sequi similique tempora veniam. Reprehenderit, sequi?\n        </p>\n        <p>\n            Adipisci alias blanditiis consectetur cumque dolore dolorum et\n            facere hic illo laboriosam, laudantium modi natus neque nisi optio\n            possimus, quaerat quis ratione rerum, suscipit tempora tempore ullam\n            voluptatum! Autem, rem.\n        </p>\n        <p>\n            Consequuntur cum doloribus eaque excepturi nisi. Aperiam autem\n            beatae debitis deleniti dicta dignissimos, doloribus error et eum,\n            eveniet illo itaque iure magni molestias placeat quas ratione\n            tenetur vitae voluptates voluptatum.\n        </p>\n        <p>\n            Consequuntur fugit in odit qui sapiente! Consequuntur, distinctio\n            illo inventore iste nemo non odio quia, sint tempora tenetur ut\n            voluptatum. Ab aut doloremque laborum maiores modi reprehenderit sit\n            tempora! Molestias?\n        </p>\n    </ng-container>\n</ng-template>\n'},this.tuiDropdownMinHeight=p.DEFAULT_MIN_HEIGHT,this.tuiDropdownMaxHeight=p.DEFAULT_MAX_HEIGHT,this.tuiDropdownSided=!1,this.alignVariants=["right","left"],this.tuiDropdownAlign=this.alignVariants[0],this.dropdownDirectionVariants=["top","bottom"],this.tuiDropdownDirection=null,this.tuiDropdownLimitWidthVariants=["fixed","min","auto"],this.tuiDropdownLimitWidth=this.tuiDropdownLimitWidthVariants[0],this.open=!1}return _createClass(e,[{key:"onClick",value:function(){this.open=!this.open}},{key:"onObscured",value:function(e){e&&(this.open=!1)}},{key:"onActiveZone",value:function(e){e||(this.open=!1)}}]),e}()).\u0275fac=function(e){return new(e||ee)},ee.\u0275cmp=m["\u0275\u0275defineComponent"]({type:ee,selectors:[["example-tui-dropdown"]],decls:4,vars:0,consts:[["header","Dropdown","package","CORE"],["pageTab",""],[1,"tui-space_bottom-3"],["tuiLink","",3,"routerLink"],["id","base","heading","\u0431\u0430\u0437\u043e\u0432\u044b\u0439",3,"content"],["id","full-featured","heading","\u043f\u043e\u0438\u043d\u0442\u0435\u0440\u0435\u0441\u043d\u0435\u0435",3,"content"],["id","change-detection","heading","\u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u0439",3,"content"],[3,"tuiActiveZoneChange"],["tuiButton","","type","button",3,"tuiDropdownContent","tuiDropdownMinHeight","tuiDropdownMaxHeight","tuiDropdownAlign","tuiDropdownDirection","tuiDropdownLimitWidth","tuiDropdownSided","tuiDropdown","tuiObscured","click"],["polymorpheus",""],["dropdownContent","polymorpheus"],["documentationPropertyName","tuiDropdown","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownContent","documentationPropertyMode","input","documentationPropertyType","PolymorpheusContent"],["documentationPropertyName","tuiDropdownAlign","documentationPropertyMode","input","documentationPropertyType","TuiHorizontalDirection",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownDirection","documentationPropertyMode","input","documentationPropertyType","TuiVerticalDirection | null",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownHost","documentationPropertyMode","input","documentationPropertyType","HTMLElement | null"],["documentationPropertyName","tuiDropdownLimitWidth","documentationPropertyMode","input","documentationPropertyType","TuiDropdownWidth",3,"documentationPropertyValues","documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMinHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownMaxHeight","documentationPropertyMode","input","documentationPropertyType","number",3,"documentationPropertyValue","documentationPropertyValueChange"],["documentationPropertyName","tuiDropdownSided","documentationPropertyMode","input","documentationPropertyType","boolean",3,"documentationPropertyValue","documentationPropertyValueChange"],[1,"dropdown"],["tuiButton","","type","button"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,R,17,7,"ng-template",1),m["\u0275\u0275template"](2,Q,18,18,"ng-template",1),m["\u0275\u0275template"](3,Y,10,2,"ng-template",1),m["\u0275\u0275elementEnd"]())},directives:[s.a,c.a,f.a,r.e,h.a,D,S,_,L.a,g.a,v.a,x.a,y.a,d.e,O.a,I.a,H.a],styles:[".dropdown[_ngcontent-%COMP%]{max-width:320px;padding:8px 20px}"],changeDetection:0}),ee),ne=((K=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:K}),K.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||K)},imports:[[o.c,i.FormsModule,p.TuiLinkModule,l.TuiAvatarModule,p.TuiButtonModule,p.TuiDropdownModule,l.TuiSelectModule,u.TuiObscuredModule,u.TuiActiveZoneModule].concat(_toConsumableArray(a.e),[r.f.forChild(Object(a.n)(te)),d.c,l.TuiToggleModule])]}),K)}}]);