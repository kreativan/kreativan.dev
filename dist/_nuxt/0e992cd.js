(window.webpackJsonp=window.webpackJsonp||[]).push([[16,4,8],{251:function(t,e,r){"use strict";r.r(e);var n={props:["title","caption","image","cls"]},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-margin-medium-top",class:t.cls,attrs:{id:"page-heading"}},[r("div",{staticClass:"page-headline uk-container uk-margin-medium-bottom",attrs:{"uk-scrollspy":"cls: is-loaded; delay: 300"}},[r("h1",{staticClass:"uk-heading-small tm-font-deco uk-margin-remove",attrs:{"uk-scrollspy":"cls: uk-animation-slide-left-medium; delay: 300"}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),r("p",{staticClass:"uk-margin-remove"},[t._v(t._s(t.caption))])]),t._v(" "),t.image?[r("div",{staticClass:"page-image uk-container"},[r("div",{staticClass:"uk-position-relative uk-overflow-hidden",attrs:{"uk-scrollspy":"cls: reveal-anim; delay: 500"}},[r("nuxt-picture",{staticClass:"uk-display-block",attrs:{src:""+t.image,ormat:"webp",width:"1200",height:"380",sizes:"xs:380px sm:640px lg:1024px xl:1200px"}})],1)])]:t._e()],2)}),[],!1,null,null,null);e.default=component.exports},269:function(t,e,r){"use strict";r.r(e);var n={props:["title","text","image"]},l=r(9),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"uk-grid uk-grid-collapse uk-grid-match",attrs:{"uk-grid":""}},[r("div",{staticClass:"uk-width-expand@m"},[r("div",{staticClass:"uk-panel uk-overflow-hidden",attrs:{"uk-scrollspy":"cls: reveal-anim; delay: 500;"}},[r("nuxt-picture",{staticClass:" uk-position-cover tm-object-fit uk-display-block",attrs:{src:""+t.image,format:"webp"}})],1)]),t._v(" "),r("div",{staticClass:"uk-width-expand@m"},[r("div",{staticClass:"uk-panel uk-padding uk-background-muted tm-scrollspy",attrs:{"uk-scrollspy":"cls: uk-animation-slide-right-medium; delay: 1000;"}},[r("span",{staticClass:"uk-text-uppercase uk-text-small"},[t._v("Featured")]),t._v(" "),r("h2",{staticClass:"uk-margin-remove-top"},[t._v(t._s(t.title))]),t._v(" "),r("p",[t._v(t._s(t.text))])])])])}),[],!1,null,null,null);e.default=component.exports},300:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(34),{asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$content,t.params,n=t.error,e.next=3,r("portfolio-page").fetch();case 3:return l=e.sent,e.next=6,r("projects").where({featured:!0}).sortBy("createdAt","desc").limit(1).fetch().catch((function(t){n({statusCode:404,message:"Page not found"})}));case 6:return c=e.sent,e.next=9,r("portfolio").sortBy("createdAt","desc").fetch().catch((function(t){n({statusCode:404,message:"Page not found"})}));case 9:return o=e.sent,e.abrupt("return",{page:l,portfolio:o,featured:c[0]});case 11:case"end":return e.stop()}}),e)})))()}}),c=r(9),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"main"}},[r("PageHeading",{attrs:{title:t.page.title,caption:t.page.caption,image:t.page.image}}),t._v(" "),r("div",{staticClass:"uk-container uk-margin-large"},[r("FeaturedProject",{attrs:{title:t.featured.title,text:t.featured.intro,image:t.featured.image}}),t._v(" "),t._l(t.portfolio,(function(e){return[r("h2",{key:e.slug},[t._v(t._s(e.title))])]})),t._v(" "),r("nuxt-content",{attrs:{document:t.page}})],2)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PageHeading:r(251).default,FeaturedProject:r(269).default})}}]);