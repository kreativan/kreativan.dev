(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{165:function(t,e,n){var content=n(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("9a655b74",content,!0,{sourceMap:!1})},166:function(t,e,n){var content=n(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("759163c0",content,!0,{sourceMap:!1})},167:function(t,e,n){var content=n(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7820b8d8",content,!0,{sourceMap:!1})},181:function(t,e,n){"use strict";n.r(e);var o={},r=(n(244),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-black"},[n("p",{staticClass:"text-small text-center"},[t._v("\n    Made in Bulgaria & Serbia. Built with nuxt.js, hosted on GitHub and Netlify\n  ")])])}],!1,null,"6104e7ec",null);e.default=component.exports;installComponents(component,{Footer:n(181).default})},188:function(t,e,n){"use strict";var o={head:function(){return{meta:[{hid:"og:type",property:"og:type",content:"website"},{hid:"og:url",property:"og:url",content:"https://kreativan.dev"+this.$route.path},{hid:"twitter:card",property:"twitter:card",content:"summary"}],link:[{hid:"canonical",rel:"canonical",href:"https://kreativan.dev"+this.$route.path}]}},data:function(){return{isMenuOpen:!1}},watch:{$route:function(){document.querySelector("body").classList.remove("noscroll"),this.isMenuOpen=!1,document.querySelector("#menu .parent > span").classList.remove("open")}},methods:{toggleMenu:function(){var body=document.querySelector("body");!0===this.isMenuOpen?(this.isMenuOpen=!1,body.classList.remove("noscroll")):(body.classList.add("noscroll"),this.isMenuOpen=!0)}}},r=n(11),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"layout-home"}},[n("Header",{on:{"toggle-menu":t.toggleMenu}}),t._v(" "),n("Nuxt"),t._v(" "),n("Footer"),t._v(" "),n("Menu",{attrs:{isOpen:t.isMenuOpen},on:{"toggle-menu":t.toggleMenu}})],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Header:n(189).default,Footer:n(181).default,Menu:n(261).default})},189:function(t,e,n){"use strict";n.r(e);n(20);var o={computed:{headerClass:function(){return"index"===this.$route.name?"header-absolute":"header-default"}},methods:{toggleMenu:function(){this.$emit("toggle-menu")}}},r=(n(242),n(11)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.headerClass,attrs:{id:"header"}},[n("div",{staticClass:"logo"},[n("nuxt-link",{attrs:{to:"/"}},[t._v("I.M")])],1),t._v(" "),n("div",[n("button",{staticClass:"menu-button",attrs:{type:"button"},on:{click:function(e){return t.toggleMenu()}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])])])}),[],!1,null,"0128018e",null);e.default=component.exports},190:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <polyline points="9 6 15 12 9 18" />\n</svg>'},192:function(t,e,n){n(193),t.exports=n(194)},228:function(t,e,n){var content=n(229);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3a312388",content,!0,{sourceMap:!1})},229:function(t,e,n){var o=n(25)(!1);o.push([t.i,'a,abbr,acronym,address,applet,article,aside,audio,b,big,blockquote,body,canvas,caption,center,cite,code,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,html,i,iframe,img,ins,kbd,label,legend,li,main,mark,menu,nav,object,ol,output,p,pre,q,ruby,s,samp,section,small,span,strike,strong,sub,summary,sup,table,tbody,td,tfoot,th,thead,time,tr,tt,u,ul,var,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block}[hidden]{display:none}body{line-height:1}menu,ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:after,blockquote:before,q:after,q:before{content:"";content:none}table{border-collapse:collapse;border-spacing:0}',""]),t.exports=o},230:function(t,e,n){var content=n(231);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d75bdb94",content,!0,{sourceMap:!1})},231:function(t,e,n){var o=n(25)(!1);o.push([t.i,':root{--font-size:19px;--line-height:1.6;--font-base:"Barlow",sans-serif;--font-heading:"Playfair Display",serif;--font-heading-weight:400;--font-heading-line-height:1.3;--h1:2.5rem;--h2:1.9rem;--h3:1.4rem;--bg-priamry:#1c1b20;--bg-black:#1c1b20;--bg-white:#fff;--bg-muted:#f3f4f6;--color-primary:#1c1b20;--color-global:#1c1b20;--color-heading:#1c1b20;--color-muted:#8d99a7;--border-color:#e5e5e5;--container:1200px;--container-small:750px;--section-padding:120px;--gutter:35px;--margin:25px;--margin-medium:50px}@media(max-width:480px){:root{--gutter:20px;--margin-medium:35px;--section-padding:50px;--h1:2rem;--h2:1.4rem;--h3:1.2rem}}',""]),t.exports=o},232:function(t,e,n){var content=n(233);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("70c6ff3c",content,!0,{sourceMap:!1})},233:function(t,e,n){var o=n(25)(!1);o.push([t.i,".container,.container-medium,.container-small{max-width:1200px;margin-left:auto!important;margin-right:auto!important;padding:0 var(--gutter)}.container-small{max-width:700px}.container-medium{max-width:900px}.section{padding:var(--section-padding) 0}.padding{padding:var(--gutter)}.margin{margin:var(--margin) 0}.margin-medium{margin:var(--margin-medium) 0}.margin-auto{margin:0 auto}.bg-muted{background:var(--bg-muted)}.bg-black{background:var(--bg-black)}.bg-black *{color:#fff}.bg-black p{color:hsla(0,0%,100%,.7)}.bg-black a:hover{color:#fff}.bg-black svg{stroke:#fff!important}.color-muted{color:var(--color-muted)}.text-center{text-align:center}.text-small{font-size:.85rem}.text-large{font-size:1.1rem}.text-bold{font-weight:700}.text-intro{font-family:var(--font-base);font-size:1.2rem}@media(max-width:480px){.text-intro{font-size:1.07rem}}.font-base{font-family:var(--font-base)}.font-heading{font-family:var(--font-heading)}",""]),t.exports=o},234:function(t,e,n){var content=n(235);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("14a41a40",content,!0,{sourceMap:!1})},235:function(t,e,n){var o=n(25)(!1);o.push([t.i,"html{font-family:var(--font-base);font-size:var(--font-size)}body.noscroll{overflow-y:hidden;touch-action:pan-y pinch-zoom}p{font-size:1rem;line-height:var(--line-height);color:var(--color-global);margin:var(--margin) 0}:last-child{margin-bottom:0}h1,h2,h3,h4,h5{color:var(--color-heading);font-family:var(--font-heading);font-weight:var(--font-heading-weight);margin:0 0 var(--margin) 0;line-height:var(--font-heading-line-height)}:not(h3)+h1,:not(h3)+h2{margin-top:var(--margin-medium)}h1{font-size:var(--h1)}h2{font-size:var(--h2)}h3{font-size:var(--h3)}a{text-decoration:none;color:var(--color-global)}a:hover{color:var(--color-primary)}img{max-width:100%;height:auto}b{font-weight:700}table{width:100%}table>:first-child>tr:not(:first-child),table>:not(:first-child)>tr,table>tr:not(:first-child){border-top:1px solid var(--border-color)}th{text-align:left;color:var(--color-muted);text-transform:uppercase;font-size:.85rem}td,th{padding:16px 12px}td{vertical-align:middle}",""]),t.exports=o},236:function(t,e,n){var content=n(237);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("a8eac830",content,!0,{sourceMap:!1})},237:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.reveal-anim{position:relative;overflow:hidden}.reveal-anim:after{background:#fff;-webkit-animation:revealBack 1.5s cubic-bezier(.77,0,.175,1) both;animation:revealBack 1.5s cubic-bezier(.77,0,.175,1) both;-webkit-animation-delay:0s;animation-delay:0s;z-index:98}.reveal-anim:after,.reveal-anim:before{content:"";position:absolute;display:block;width:100%;height:100%;top:0}.reveal-anim:before{right:0;bottom:0;background:var(--bg-black);-webkit-animation:reveal 1.5s cubic-bezier(.77,0,.175,1) both;animation:reveal 1.5s cubic-bezier(.77,0,.175,1) both;-webkit-animation-delay:0s;animation-delay:0s;z-index:99}.reveal-anim.anim-long:after,.reveal-anim.anim-long:before{-webkit-animation-duration:1.8s;animation-duration:1.8s}@-webkit-keyframes reveal{0%{transform:translateX(-100%)}50%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes reveal{0%{transform:translateX(-100%)}50%{transform:translateX(0)}to{transform:translateX(100%)}}@-webkit-keyframes revealBack{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes revealBack{0%{transform:translateX(0)}to{transform:translateX(100%)}}',""]),t.exports=o},238:function(t,e,n){var content=n(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("e622d370",content,!0,{sourceMap:!1})},239:function(t,e,n){var o=n(25)(!1);o.push([t.i,"#main{margin:30px 0 70px}@media(max-width:768px){#main{margin:0 0 30px}}b{font-weight:500}.btn{position:relative;text-transform:uppercase;font-size:.85rem;display:flex;align-items:center}.btn svg{width:28px;height:28px;margin-left:5px}.btn-icon>span{position:relative;display:flex;justify-content:center;align-items:center;width:32px;height:32px;background:var(--bg-black);border-radius:50%;margin-left:10px;overflow:hidden}.btn.btn-icon span svg{width:20px;height:20px;stroke:#fff!important}.btn.btn-icon span i{display:block;position:absolute;left:50%;top:50%;margin-top:-10px;margin-left:-15px;transition:transform .4s}.btn-icon span>i+i{transform:translateX(-120%)}.btn-icon:hover span>i+i{transform:translateX(0)}.btn-icon:hover span>i:first-child{transform:translateX(120%)}.split-section{display:grid;grid-template-columns:[left] 1fr [right] 1fr}.split-section>div{overflow:hidden;position:relative}.ss-media img{position:absolute;top:0;bottom:0;left:0;right:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}.ss-content{padding:70px}.ss-content h3{font-size:1rem;text-transform:uppercase;font-family:var(--font-base);margin:0}.ss-content h2{font-size:2.2rem}@media(max-width:768px){.split-section{grid-template-columns:1fr}.ss-content{padding:var(--gutter)}.ss-media img{position:relative}}.text-block>h4{color:var(--color-muted);text-transform:uppercase;font-family:var(--base-font);margin:0 0 5px;font-size:.85rem}.text-block+.text-block{margin-top:var(--margin-medium)}.text-block h2{font-size:1.4rem}@media(min-width:960px){.text-block{display:flex}.text-block>h4{width:35%;position:relative;top:10px;font-size:1rem}.text-block>div{width:65%}.text-block h2{font-size:1.6rem}}",""]),t.exports=o},242:function(t,e,n){"use strict";n(165)},243:function(t,e,n){var o=n(25)(!1);o.push([t.i,".logo[data-v-0128018e]{font-size:28px;font-weight:500}#header[data-v-0128018e]{overflow-x:hidden;box-sizing:border-box;display:flex;justify-content:space-between;align-items:center;height:80px;padding:0 var(--gutter);z-index:999}#header.header-absolute[data-v-0128018e]{position:absolute;width:100%;left:0;right:0;top:0}.menu-button[data-v-0128018e]{background:none;border:none}.menu-button span[data-v-0128018e]{display:block;width:32px;height:2px;background:var(--bg-black);transition:width .2s}.menu-button span+span[data-v-0128018e]{margin-top:7px}.menu-button[data-v-0128018e]:hover{cursor:pointer}.menu-button:hover span[data-v-0128018e]:nth-last-child(2){width:26px}.header-absolute .menu-button[data-v-0128018e]{-webkit-animation-name:menu-button-anim-data-v-0128018e;animation-name:menu-button-anim-data-v-0128018e;-webkit-animation-fill-mode:both;animation-fill-mode:both;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-delay:1.5s;animation-delay:1.5s}@-webkit-keyframes menu-button-anim-data-v-0128018e{0%{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes menu-button-anim-data-v-0128018e{0%{transform:translateX(100%);opacity:0}to{transform:translateX(0);opacity:1}}@media(max-width:960px){#header.header-absolute[data-v-0128018e]{height:65px}.header-absolute .menu-button[data-v-0128018e]{-webkit-animation-delay:.3s;animation-delay:.3s}.header-absolute .logo a[data-v-0128018e]{color:#fff}.header-absolute .menu-button span[data-v-0128018e]{background:#fff}}",""]),t.exports=o},244:function(t,e,n){"use strict";n(166)},245:function(t,e,n){var o=n(25)(!1);o.push([t.i,"footer[data-v-6104e7ec]{padding:20px}p[data-v-6104e7ec]{margin:0;color:hsla(0,0%,100%,.6)}",""]),t.exports=o},246:function(t,e,n){"use strict";n(167)},247:function(t,e,n){var o=n(25)(!1);o.push([t.i,"#menu[data-v-76dd0e2a]{box-sizing:border-box;display:flex;justify-content:flex-start;align-items:center;overflow:hidden;position:fixed;z-index:999;background:#fff;top:0;right:0;bottom:0;width:280px;transform:translateX(100%);transition:transform .3s;padding:var(--gutter);box-shadow:0 -3px 10px rgba(0,0,0,.1)}#menu.is-open[data-v-76dd0e2a]{transition:transform .4s;transform:translateX(0)}#menu-overlay[data-v-76dd0e2a]{display:none;position:absolute;top:0;bottom:0;left:0;right:0;width:100%;right:100%;background:rgba(0,0,0,.2);z-index:998}.is-open #menu-overlay[data-v-76dd0e2a]{display:block}.nuxt-link-exact-active[data-v-76dd0e2a]{font-weight:500}#menu .nav[data-v-76dd0e2a]{width:100%}#menu .nav>li[data-v-76dd0e2a]{padding:10px 0;display:block}#menu .nav>li>a[data-v-76dd0e2a],#menu .nav>li>span[data-v-76dd0e2a]{display:block;font-size:1.3rem;cursor:pointer;position:relative}#menu .nav ul[data-v-76dd0e2a]{overflow:hidden;max-height:0}#menu .nav .open+ul[data-v-76dd0e2a]{max-height:600px;transition:all .5s}#menu .nav ul>li[data-v-76dd0e2a]:first-child{margin-top:15px}#menu .nav ul>li[data-v-76dd0e2a]{padding:7px 0}#menu .nav i[data-v-76dd0e2a]{display:inline-block;position:absolute;right:0;top:0;transform:rotate(0deg);transition:transform .2s;width:26px;height:26px}#menu .nav .open i[data-v-76dd0e2a]{transform:rotate(90deg)}@media(max-width:768px){#menu[data-v-76dd0e2a]{width:240px}}",""]),t.exports=o},261:function(t,e,n){"use strict";n.r(e);var o=n(3),r=(n(36),{props:["isOpen"],data:function(){return{services:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("services").where({read_more:!0}).sortBy("createdAt").fetch();case 2:n=e.sent,t.services=n;case 4:case"end":return e.stop()}}),e)})))()},methods:{toggleMenu:function(){this.$emit("toggle-menu")},toggleNav:function(){event.target.classList.toggle("open")}}}),l=(n(246),n(11)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{class:{"is-open":t.isOpen},attrs:{id:"menu-wrapper"}},[o("div",{attrs:{id:"menu-overlay"},on:{click:function(e){return t.toggleMenu()}}}),t._v(" "),o("div",{class:{"is-open":t.isOpen},attrs:{id:"menu"}},[o("ul",{staticClass:"nav"},[o("li",[o("nuxt-link",{staticClass:"nav__link",attrs:{to:"/",title:"Home"}},[t._v("Home")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"nav__link",attrs:{to:"/about/",title:"About"}},[t._v("About")])],1),t._v(" "),o("li",{staticClass:"parent"},[o("span",{on:{click:function(e){return t.toggleNav()}}},[t._v("\n          Services\n          "),o("i",{domProps:{innerHTML:t._s(n(190))}})]),t._v(" "),o("ul",t._l(t.services,(function(e){return o("li",{key:e.slug},[o("nuxt-link",{staticClass:"nav__link",attrs:{to:e.path,title:e.title}},[t._v("\n              "+t._s(e.title)+"\n            ")])],1)})),0)]),t._v(" "),o("li",[o("nuxt-link",{staticClass:"nav__link",attrs:{to:"/portfolio/",title:"Portfolio"}},[t._v("Portfolio")])],1),t._v(" "),o("li",[o("nuxt-link",{staticClass:"nav__link",attrs:{to:"/hire-me/",title:"Hire Me"}},[t._v("Hire Me")])],1)])])])}),[],!1,null,"76dd0e2a",null);e.default=component.exports}},[[192,17,1,18]]]);