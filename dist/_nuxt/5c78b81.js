(window.webpackJsonp=window.webpackJsonp||[]).push([[17,6,7,8,9,10],{248:function(t,e,r){"use strict";r.r(e);r(43);var l={props:["title","caption","image","cls"],mounted:function(){setTimeout((function(){document.querySelector("#page-heading").classList.add("is-loaded")}),300)}},n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-margin-medium-top",class:t.cls,attrs:{id:"page-heading"}},[r("div",{staticClass:"page-headline uk-container uk-margin-medium-bottom"},[r("h1",{staticClass:"uk-heading-small tm-font-deco uk-margin-remove"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"uk-margin-remove"},[t._v(t._s(t.caption))])]),t._v(" "),t.image?[r("div",{staticClass:"page-image uk-container"},[r("div",{staticClass:"uk-position-relative uk-overflow-hidden",attrs:{"uk-scrollspy":"cls: reveal-anim; delay: 350"}},[r("nuxt-picture",{staticClass:"uk-display-block",attrs:{src:""+t.image,format:"webp",height:"420px",sizes:"xs:380px sm:640px lg:1024px xl:1200px",alt:t.title}})],1)])]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},254:function(t,e,r){var content=r(263);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(58).default)("66f2619e",content,!0,{sourceMap:!1})},262:function(t,e,r){"use strict";r(254)},263:function(t,e,r){var l=r(57)(!1);l.push([t.i,".uk-panel[data-v-3f86828b]{opacity:.5!important;transform:scale(.92);filter:grayscale(30%);transition:all .3s}li.uk-transition-active .uk-panel[data-v-3f86828b]{opacity:1!important;transform:scale(1);filter:grayscale(0)}",""]),t.exports=l},264:function(t,e,r){"use strict";var l=r(2),n=r(265);l({target:"String",proto:!0,forced:r(266)("link")},{link:function(t){return n(this,"a","href",t)}})},265:function(t,e,r){var l=r(24),n=/"/g;t.exports=function(t,e,r,o){var c=String(l(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+String(o).replace(n,"&quot;")+'"'),d+">"+c+"</"+e+">"}},266:function(t,e,r){var l=r(6);t.exports=function(t){return l((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},276:function(t,e,r){"use strict";r.r(e);var l={props:["title","label","text","image","href","link"]},n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-grid uk-grid-collapse uk-grid-match uk-background-muted",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-1-2@m"},[r("div",{staticClass:"uk-panel uk-overflow-hidden tm-scrollspy",attrs:{"uk-scrollspy":"cls: reveal-anim, reveal-anim-muted; delay: 500;"}},[r("nuxt-picture",{staticClass:"tm-object-fit uk-display-block",attrs:{src:""+t.image,format:"webp",sizes:"xs:380px sm:600px",alt:t.title}})],1)]),t._v(" "),r("div",{staticClass:"uk-width-expand@m"},[r("div",{staticClass:"uk-panel uk-padding uk-background-muted uk-flex uk-flex-middle"},[r("div",{staticClass:"tm-scrollspy uk-padding-small",attrs:{"uk-scrollspy":"cls: uk-animation-fade; delay: 300;"}},[r("span",{staticClass:"uk-text-uppercase uk-text-small"},[t._v("\n          "+t._s(t.label)+"\n        ")]),t._v(" "),r("h2",{staticClass:"uk-margin-remove-top"},[t._v(t._s(t.title))]),t._v(" "),r("p",{domProps:{innerHTML:t._s(t.text)}}),t._v(" "),t.link?r("a",{staticClass:"tm-button-icon",attrs:{href:t.link,target:"_blank",rel:"nofollow noopener noreferrer",title:t.title}},[t._v("\n          Preview\n          "),t._m(0)]):t._e()])])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",[r("i",{attrs:{"uk-icon":"link"}}),t._v(" "),r("i",{attrs:{"uk-icon":"arrow-right"}})])}],!1,null,null,null);e.default=component.exports},277:function(t,e,r){"use strict";r.r(e);var l={props:["items"]},n=(r(262),r(10)),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{"uk-slider":"clsActivated: uk-transition-active; center: true; autoplay: false;autoplay-interval: 5000; velocity: 4"}},[r("div",{staticClass:"uk-position-relative"},[r("div",{staticClass:"uk-slider-container uk-light"},[r("ul",{staticClass:"uk-slider-items uk-grid uk-grid-small"},[t._l(t.items,(function(e){return[r("li",{key:e.slug,staticClass:"uk-width-3-4"},[r("div",{staticClass:"uk-panel"},[r("nuxt-picture",{staticClass:"uk-display-block uk-width-1-1",attrs:{src:""+e.image,format:"webp",sizes:"xs:280px sm:430px lg:680px xl:1200px",alt:e.title}}),t._v(" "),r("div",{staticClass:"uk-padding-small uk-overlay-primary uk-position-bottom uk-text-center uk-transition-fade uk-flex uk-flex-between uk-flex-middle"},[r("h3",{staticClass:"uk-h5 uk-margin-remove"},[t._v("\r\n                  "+t._s(e.title)+"\r\n                ")]),t._v(" "),e.link?r("a",{staticClass:"uk-icon-button",attrs:{href:e.link,target:"_blank",rel:"nofollow noopener","uk-icon":"arrow-right",title:e.title}},[r("i",{attrs:{"uk-icon":"link"}})]):t._e()])],1)])]}))],2)]),t._v(" "),r("a",{staticClass:"uk-position-center-left-out uk-position-medium uk-visible@xl",attrs:{href:"#","uk-slidenav-previous":"","uk-slider-item":"previous"}}),t._v(" "),r("a",{staticClass:"uk-position-center-right-out uk-position-medium uk-visible@xl",attrs:{href:"#","uk-slidenav-next":"","uk-slider-item":"next"}})])])}),[],!1,null,"3f86828b",null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);r(264),r(45);var l={props:["image","title","link"],computed:{linkText:function(){return this.link.length>"32"?this.link.slice(0,"32")+"...":this.link}}},n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"portfolio-card"},[r("nuxt-img",{attrs:{src:""+t.image,format:"webp",width:"380",height:"250",alt:t.title}}),t._v(" "),r("div",{staticClass:"uk-flex uk-flex-between uk-flex-middle uk-margin-small-top uk-padding-small uk-padding-remove-vertical"},[r("div",{staticStyle:{"line-height":"0"}},[r("h3",{staticClass:"uk-h4 uk-margin-remove"},[t._v(t._s(t.title))]),t._v(" "),t.link?r("span",{staticClass:"uk-text-small uk-text-muted"},[t._v(t._s(t.linkText))]):t._e()]),t._v(" "),t.link?r("a",{staticClass:"uk-icon-button",attrs:{href:t.link,"uk-icon":"arrow-right",target:"_blank",rel:"nofollow noopener noreferrer",title:t.link}},[r("i",{attrs:{"uk-icon":"link"}})]):t._e()])],1)}),[],!1,null,null,null);e.default=component.exports},279:function(t,e,r){"use strict";r.r(e);var l={props:["list"]},n=r(10),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",{staticClass:"uk-table uk-table-divider uk-table-middle"},[t._m(0),t._v(" "),r("tbody",[t._l(t.list,(function(e){return[r("tr",{key:e.slug},[r("td",{staticClass:"uk-text-bold"},[t._v("\n          "+t._s(e.title)+"\n        ")]),t._v(" "),r("td",[t._v(t._s(e.desc))]),t._v(" "),r("td",{staticClass:"uk-table-shrink"},[r("a",{staticClass:"uk-icon-button",attrs:{href:e.link,"uk-icon":"arrow-right",target:"_blank",rel:"nofollow noopener noreferrer",title:e.title}},[r("i",{attrs:{"uk-icon":"link"}})])])])]}))],2)])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",[r("th",[t._v("Project")]),t._v(" "),r("th",[t._v("About")]),t._v(" "),r("th",{staticClass:"uk-table-shrink"},[t._v("Link")])])])}],!1,null,null,null);e.default=component.exports},307:function(t,e,r){"use strict";r.r(e);var l=r(3),n=(r(34),r(18),r(44),{head:function(){return{title:"Ivan Milincic Portfolio",meta:[{hid:"description",name:"description",content:this.seo.description},{hid:"og:title",property:"og:title",content:this.seo.title},{hid:"og:description",property:"og:description",content:this.seo.description}]}},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var r,l,n,o,c,d,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,l=t.error,e.next=3,r("portfolio-page").fetch();case 3:return n=e.sent,e.next=6,r("portfolio").where({layout:"featured"}).sortBy("createdAt","desc").limit(1).fetch().catch((function(t){l({statusCode:404,message:"Page not found"})}));case 6:return o=e.sent,e.next=9,r("portfolio").where({layout:"slider"}).sortBy("updatedAt","desc").fetch().catch((function(t){console.log(t)}));case 9:return c=e.sent,e.next=12,r("portfolio").where({layout:"card"}).sortBy("createdAt","asc").fetch().catch((function(t){console.log(t)}));case 12:return d=e.sent,e.next=15,r("portfolio").where({layout:"list"}).sortBy("createdAt","asc").fetch().catch((function(t){console.log(t)}));case 15:return k=e.sent,e.abrupt("return",{seo:n.seo,page:n,featured:o[0],slider:c,cards:d,list:k});case 17:case"end":return e.stop()}}),e)})))()}}),o=r(10),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("PageHeading",{attrs:{title:t.page.title,caption:t.page.caption,image:t.page.image}}),t._v(" "),r("div",{staticClass:"uk-container uk-margin-large"},[r("PortfolioFeatured",{attrs:{title:t.featured.title,label:t.featured.label,text:t.featured.desc,image:t.featured.image,link:!!t.featured.link&&t.featured.link}})],1),t._v(" "),r("div",{staticClass:"uk-container uk-container-xlarge uk-margin-large"},[r("PortfolioSlider",{attrs:{items:t.slider}})],1),t._v(" "),r("div",{staticClass:"uk-container uk-margin-large"},[r("div",{staticClass:"uk-grid uk-child-width-1-3@m",attrs:{"uk-grid":""}},[t._l(t.cards,(function(t){return[r("div",{key:t.slug},[r("PortfolioCard",{attrs:{image:t.image,title:t.title,link:t.link}})],1)]}))],2)]),t._v(" "),r("div",{staticClass:"uk-container uk-margin-large"},[r("PortfolioList",{attrs:{list:t.list}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(248).default,PortfolioFeatured:r(276).default,PortfolioSlider:r(277).default,PortfolioCard:r(278).default,PortfolioList:r(279).default})}}]);