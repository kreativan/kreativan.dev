(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,6,7,8,9],{282:function(t,e,r){var content=r(287);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("34885d2a",content,!0,{sourceMap:!1})},283:function(t,e,r){var content=r(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("44662a22",content,!0,{sourceMap:!1})},284:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />\r\n  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />\r\n</svg>'},285:function(t,e){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\r\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\r\n  <line x1="5" y1="12" x2="19" y2="12" />\r\n  <line x1="15" y1="16" x2="19" y2="12" />\r\n  <line x1="15" y1="8" x2="19" y2="12" />\r\n</svg>'},286:function(t,e,r){"use strict";r(282)},287:function(t,e,r){var o=r(21)(!1);o.push([t.i,'#page-heading[data-v-692114a8]{overflow:hidden}h1[data-v-692114a8]{font-size:3rem;margin:0}h3[data-v-692114a8]{font-size:1.1rem;font-family:var(--font-base);margin:7px 0 0;position:relative}@-webkit-keyframes line-anim-data-v-692114a8{0%{width:0}to{width:100px}}@keyframes line-anim-data-v-692114a8{0%{width:0}to{width:100px}}@-webkit-keyframes line-anim-text-data-v-692114a8{0%{padding-left:0}to{padding-left:120px}}@keyframes line-anim-text-data-v-692114a8{0%{padding-left:0}to{padding-left:120px}}@media(min-width:960px){h3[data-v-692114a8]{padding-left:80px}h3[data-v-692114a8]:before{content:"";position:absolute;left:0;width:70px;height:2px;background:#1c1b20;top:50%}}@media(max-width:768px){h1[data-v-692114a8]{font-size:2rem}h3[data-v-692114a8]{font-size:1rem;margin-top:10px}.page-heading-image[data-v-692114a8]{margin-left:-25px;margin-right:-25px}}',""]),t.exports=o},289:function(t,e,r){"use strict";r.r(e);var o={props:["title","subtitle","image","container"],data:function(){return{isLoaded:!1}},mounted:function(){this.isLoaded=!0},computed:{mainClass:function(){var t="container";return t+=this.container?"-".concat(this.container):"",t+=this.isLoaded?" is-loaded":""}}},n=(r(286),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",{class:t.mainClass,attrs:{id:"page-heading"}},[r("h1",[t._v(t._s(t.title))]),t._v(" "),r("h3",[t._v(t._s(t.subtitle))]),t._v(" "),t.image?r("div",{staticClass:"page-heading-image reveal-anim anim-long margin-medium"},[r("nuxt-picture",{attrs:{src:""+t.image,width:"1200",height:"420",format:"webp",alt:t.title}})],1):t._e()])}),[],!1,null,"692114a8",null);e.default=component.exports;installComponents(component,{Header:r(194).default})},290:function(t,e,r){"use strict";var o=r(3),n=r(291);o({target:"String",proto:!0,forced:r(292)("link")},{link:function(t){return n(this,"a","href",t)}})},291:function(t,e,r){var o=r(27),n=/"/g;t.exports=function(t,e,r,l){var d=String(o(t)),c="<"+e;return""!==r&&(c+=" "+r+'="'+String(l).replace(n,"&quot;")+'"'),c+">"+d+"</"+e+">"}},292:function(t,e,r){var o=r(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},293:function(t,e,r){"use strict";r(283)},294:function(t,e,r){var o=r(21)(!1);o.push([t.i,".portfolio-card-image img[data-v-6d3c4c57]{width:100%}.portfolio-card-body[data-v-6d3c4c57]{padding:15px;display:flex;justify-content:space-between}.portfolio-card-body .btn-icon span[data-v-6d3c4c57]{width:38px;height:38px}.portfolio-card h3[data-v-6d3c4c57]{font-size:1.3rem;margin:0}.portfolio-card h3+span[data-v-6d3c4c57]{display:block;margin-top:5px}",""]),t.exports=o},295:function(t,e,r){"use strict";r.r(e);r(290),r(45);var o={props:["image","title","link","width","height"],computed:{linkText:function(){return this.link.length>"24"?this.link.slice(0,"24")+"...":this.link}}},n=(r(293),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-card"},[o("div",{staticClass:"portfolio-card-image bg-muted"},[o("nuxt-picture",{attrs:{src:t.image,width:t.width,height:t.height,alt:t.title}})],1),t._v(" "),o("div",{staticClass:"portfolio-card-body"},[o("div",[o("h3",{staticClass:"font-base"},[t._v(t._s(t.title))]),t._v(" "),o("span",{staticClass:"color-muted text-small"},[t._v(t._s(t.linkText))])]),t._v(" "),o("a",{staticClass:"btn btn-icon",attrs:{href:t.link,rel:"noffolow noopener",target:"_blank",title:t.title}},[o("span",[o("i",{domProps:{innerHTML:t._s(r(284))}}),t._v(" "),o("i",{domProps:{innerHTML:t._s(r(285))}})])])])])}),[],!1,null,"6d3c4c57",null);e.default=component.exports},296:function(t,e,r){var content=r(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("1badf26c",content,!0,{sourceMap:!1})},297:function(t,e,r){var content=r(308);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("0932f045",content,!0,{sourceMap:!1})},298:function(t,e,r){var content=r(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(22).default)("3790c378",content,!0,{sourceMap:!1})},305:function(t,e,r){"use strict";r(296)},306:function(t,e,r){var o=r(21)(!1);o.push([t.i,".portfolio-featured[data-v-5f958086]{display:grid;grid-template-columns:1fr 1fr;grid-column-gap:var(--gutter);grid-row-gap:var(--gutter)}@media(max-width:960px){.portfolio-featured[data-v-5f958086]{grid-template-columns:1fr}}",""]),t.exports=o},307:function(t,e,r){"use strict";r(297)},308:function(t,e,r){var o=r(21)(!1);o.push([t.i,".portfolio-grid[data-v-b8780ab2]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:var(--gutter);grid-row-gap:var(--gutter)}@media(max-width:960px){.portfolio-grid[data-v-b8780ab2]{display:grid;grid-template-columns:1fr 1fr}}@media(max-width:640px){.portfolio-grid[data-v-b8780ab2]{grid-template-columns:1fr}}",""]),t.exports=o},309:function(t,e,r){"use strict";r(298)},310:function(t,e,r){var o=r(21)(!1);o.push([t.i,"div[data-v-670f1a3a]{overflow-x:scroll}@media(max-width:480px){td[data-v-670f1a3a]:nth-child(2),th[data-v-670f1a3a]:nth-child(2){display:none}}",""]),t.exports=o},323:function(t,e,r){"use strict";r.r(e);var o={props:["items","cls"]},n=(r(305),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio-featured",class:t.cls},[t._l(t.items,(function(t){return[r("div",{key:t.slug},[r("PortfolioCard",{attrs:{image:t.image,title:t.title,link:t.link?t.link:"",width:"600",height:"292"}})],1)]}))],2)}),[],!1,null,"5f958086",null);e.default=component.exports;installComponents(component,{PortfolioCard:r(295).default})},324:function(t,e,r){"use strict";r.r(e);var o={props:["items","cls"]},n=(r(307),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio-grid",class:t.cls},[t._l(t.items,(function(t){return[r("div",{key:t.slug},[r("PortfolioCard",{attrs:{image:t.image,title:t.title,link:t.link,width:"380",height:"240"}})],1)]}))],2)}),[],!1,null,"b8780ab2",null);e.default=component.exports;installComponents(component,{PortfolioCard:r(295).default})},325:function(t,e,r){"use strict";r.r(e);var o={props:["items","cls"]},n=(r(309),r(11)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("table",{class:t.cls},[t._m(0),t._v(" "),o("tbody",t._l(t.items,(function(e){return o("tr",{key:e.slug},[o("td",[o("b",[t._v(t._s(e.title))])]),t._v(" "),o("td",[t._v(t._s(e.desc))]),t._v(" "),o("td",[o("a",{staticClass:"btn btn-icon",attrs:{href:e.link,rel:"noffolow noopener",target:"_blank",title:e.title}},[o("span",[o("i",{domProps:{innerHTML:t._s(r(284))}}),t._v(" "),o("i",{domProps:{innerHTML:t._s(r(285))}})])])])])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Project")]),t._v(" "),r("th",[t._v("About")]),t._v(" "),r("th",[t._v("Link")])])])}],!1,null,"670f1a3a",null);e.default=component.exports},356:function(t,e,r){"use strict";r.r(e);var o=r(2),n=(r(35),{head:function(){return{title:"Ivan Milincic Portfolio",meta:[{hid:"description",name:"description",content:"Ivan Milincic Portfolio. Processwire web development portfolio.  My personal projects, github projects and work ive done for my clients"},{hid:"og:title",property:"og:title",content:"Ivan Milincic Portfolio"},{hid:"og:description",property:"og:description",content:"Ivan Milincic Portfolio. Processwire web development portfolio.  My personal projects, github projects and work ive done for my clients"}]}},data:function(){return{featured:{},grid:{},list:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("portfolio").where({layout:"featured"}).sortBy("createdAt").fetch();case 2:return r=e.sent,t.featured=r,e.next=6,t.$content("portfolio").where({layout:"grid"}).sortBy("createdAt","desc").fetch();case 6:return o=e.sent,t.grid=o,e.next=10,t.$content("portfolio").where({layout:"list"}).sortBy("createdAt","desc").fetch();case 10:n=e.sent,t.list=n;case 12:case"end":return e.stop()}}),e)})))()}}),l=r(11),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("PageHeading",{attrs:{title:"Portfolio",subtitle:"My personal projects, and work ive done for my clients"}}),t._v(" "),r("div",{staticClass:"container margin-medium"},[r("PortfolioFeatured",{attrs:{items:t.featured}}),t._v(" "),r("PortfolioGrid",{attrs:{items:t.grid,cls:"margin-medium"}}),t._v(" "),r("PortfolioList",{attrs:{items:t.list,cls:"margin-medium"}})],1)],1)}),[],!1,null,"3aa9e7c2",null);e.default=component.exports;installComponents(component,{PageHeading:r(289).default,PortfolioFeatured:r(323).default,PortfolioGrid:r(324).default,PortfolioList:r(325).default})}}]);