(window.webpackJsonp=window.webpackJsonp||[]).push([[17,8,12],{247:function(t,e,n){var content=n(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(58).default)("356219ad",content,!0,{sourceMap:!1})},248:function(t,e,n){"use strict";n.r(e);n(43);var r={props:["title","caption","image","cls"],mounted:function(){setTimeout((function(){document.querySelector("#page-heading").classList.add("is-loaded")}),300)}},l=n(10),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-margin-medium-top",class:t.cls,attrs:{id:"page-heading"}},[n("div",{staticClass:"page-headline uk-container uk-margin-medium-bottom"},[n("h1",{staticClass:"uk-heading-small tm-font-deco uk-margin-remove"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("p",{staticClass:"uk-margin-remove"},[t._v(t._s(t.caption))])]),t._v(" "),t.image?[n("div",{staticClass:"page-image uk-container"},[n("div",{staticClass:"uk-position-relative uk-overflow-hidden",attrs:{"uk-scrollspy":"cls: reveal-anim; delay: 350"}},[n("nuxt-picture",{staticClass:"uk-display-block",attrs:{src:""+t.image,format:"webp",height:"400px",sizes:"xs:380px sm:640px lg:1024px xl:1200px"}})],1)])]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},252:function(t,e,n){"use strict";n(247)},253:function(t,e,n){var r=n(57)(!1);r.push([t.i,"h5[data-v-24ef3d22]{font-size:.9rem;letter-spacing:1px}@media(min-width:1024px){.uk-grid>div+div[data-v-24ef3d22]{margin-top:-5px!important}}",""]),t.exports=r},256:function(t,e,n){"use strict";n.r(e);var r={props:["label","title","text"],data:function(){return{animate:!1}},mounted:function(){"true"===this.animation&&(this.animate=!0)}},l=(n(252),n(10)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-block uk-grid uk-grid-large",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-3@m"},[n("h5",{staticClass:"uk-text-uppercase uk-text-muted uk-margin-small-bottom"},[t._v("\n      "+t._s(t.label)+"\n    ")])]),t._v(" "),n("div",{staticClass:"uk-width-expand@m uk-margin-remove"},[t.title?n("h2",{staticClass:"uk-h3 uk-text-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),n("p",{domProps:{innerHTML:t._s(t.text)}})])])}),[],!1,null,"24ef3d22",null);e.default=component.exports},297:function(t,e,n){"use strict";n.r(e);var r=n(3),l=(n(34),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,l,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,t.error,e.next=3,n("services",r.slug).fetch();case 3:return l=e.sent,o=l.blocks,e.abrupt("return",{page:l,blocks:o});case 6:case"end":return e.stop()}}),e)})))()}}),o=n(10),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main"}},[n("PageHeading",{attrs:{title:t.page.title,caption:t.page.subtitle,image:t.page.image}}),t._v(" "),n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container",class:t.page.container?"uk-container-"+t.page.container:""},[t.page.intro?n("p",{staticClass:"uk-h4 tm-font-deco uk-width-auto",domProps:{innerHTML:t._s(t.page.intro)}}):t._e(),t._v(" "),t._l(t.page.blocks,(function(t,e){return[n("div",{key:e,staticClass:"uk-margin-medium"},[n("TextBlock",{attrs:{label:e,text:t,animation:"true"}})],1)]})),t._v(" "),n("nuxt-content",{attrs:{document:t.page}})],2)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:n(248).default,TextBlock:n(256).default})}}]);