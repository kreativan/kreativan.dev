(window.webpackJsonp=window.webpackJsonp||[]).push([[15,11],{239:function(t,e,n){t.exports=n.p+"img/hero.dd9e2fe.png"},240:function(t,e,n){var map={"./about.jpg":241,"./hero.png":239};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=240},241:function(t,e,n){t.exports=n.p+"img/about.81c65f6.jpg"},249:function(t,e,n){var content=n(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(52).default)("4c967b8a",content,!0,{sourceMap:!1})},252:function(t,e,n){"use strict";n.r(e);n(53);var o={props:["title","caption","img"],data:function(){return{isLoaded:!1}},mounted:function(){var t=this;setTimeout((function(){t.isLoaded=!0}),800)},computed:{image:function(){try{return n(240)("./".concat(this.img))}catch(t){return!1}}}},r=n(8),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-position-relative uk-overflow-hidden uk-light",class:{"is-loaded":t.isLoaded},attrs:{id:"page-cover"}},[n("div",{staticClass:"reveal-anim"},[n("img",{staticClass:"uk-position-cover tm-object-fit",attrs:{src:""+t.image}})]),t._v(" "),n("div",{staticClass:"page-cover-content uk-position-bottom uk-position-small"},[n("h1",{staticClass:"uk-heading-large",class:{"uk-animation-slide-left-medium":t.isLoaded}},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),n("div",{staticClass:"page-cover-caption uk-position-relative"},[t._v("\n      "+t._s(t.caption)+"\n    ")])])])}),[],!1,null,null,null);e.default=component.exports},259:function(t,e,n){"use strict";n(249)},260:function(t,e,n){var o=n(51)(!1);o.push([t.i,"h5.tm-font-base[data-v-e57d58ba]{letter-spacing:1px}h2[data-v-e57d58ba]{margin-top:-10px!important}",""]),t.exports=o},277:function(t,e,n){"use strict";n.r(e);var o=n(5),r=(n(34),{layout:"cover",data:function(){return{page_cover:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.page_cover=n.page_cover;case 4:case"end":return e.stop()}}),e)})))()}}),c=(n(259),n(8)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"main","uk-height-viewport":"expand: true"}},[n("PageCover",{attrs:{title:t.page_cover.title,caption:t.page_cover.caption,img:t.page_cover.image}}),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uk-section"},[n("div",{staticClass:"uk-container"},[n("div",{staticClass:"uk-grid uk-grid-large",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-3"},[n("h5",{staticClass:"tm-font-base uk-text-uppercase uk-text-muted"},[t._v("Who am i?")])]),t._v(" "),n("div",{staticClass:"uk-width-expand"},[n("h2",{staticClass:"uk-h3"},[t._v("Ivan Milinčić")]),t._v(" "),n("p",[t._v("I'm Serbian, living and working from Bulgaria. I'm very passionate about web and tech in general. I'm in tech for a long time, in different shapes and forms, but found my self in web development, and that is what i really love and enjoy doing.")])])]),t._v(" "),n("div",{staticClass:"uk-grid uk-grid-large",attrs:{"uk-grid":""}},[n("div",{staticClass:"uk-width-1-3"},[n("h5",{staticClass:"tm-font-base uk-text-uppercase uk-text-muted"},[t._v("Education")])]),t._v(" "),n("div",{staticClass:"uk-width-expand"},[n("h2",{staticClass:"uk-h3"},[t._v("Bachelor's degree, Information Technology")]),t._v(" "),n("p",[t._v("Education area: Information Technology "),n("br"),t._v(" Study program: Computing and Informatics "),n("br"),t._v(" Education title: IT engineer")])])])])])}],!1,null,"e57d58ba",null);e.default=component.exports;installComponents(component,{PageCover:n(252).default})}}]);