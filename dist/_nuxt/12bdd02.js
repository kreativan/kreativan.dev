(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,6,13],{246:function(t,n,e){var content=e(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("b92f92d4",content,!0,{sourceMap:!1})},247:function(t,n,e){"use strict";e.r(n);e(43);var o={props:["title","caption","image","cls"],mounted:function(){setTimeout((function(){document.querySelector("#page-heading").classList.add("is-loaded")}),300)}},r=e(10),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-margin-medium-top",class:t.cls,attrs:{id:"page-heading"}},[e("div",{staticClass:"page-headline uk-container uk-margin-medium-bottom"},[e("h1",{staticClass:"uk-heading-small tm-font-deco uk-margin-remove"},[t._v("\n      "+t._s(t.title)+"\n    ")]),t._v(" "),e("p",{staticClass:"uk-margin-remove"},[t._v(t._s(t.caption))])]),t._v(" "),t.image?[e("div",{staticClass:"page-image uk-container"},[e("div",{staticClass:"uk-position-relative uk-overflow-hidden",attrs:{"uk-scrollspy":"cls: reveal-anim; delay: 350"}},[e("nuxt-picture",{staticClass:"uk-display-block",attrs:{src:""+t.image,format:"webp",height:"420px",sizes:"xs:380px sm:640px lg:1024px xl:1200px",alt:t.title}})],1)])]:t._e()],2)}),[],!1,null,null,null);n.default=component.exports},248:function(t,n){t.exports='<svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="icon icon-tabler icon-tabler-brand-github"\n        width="32"\n        height="32"\n        viewBox="0 0 24 24"\n        stroke-width="1.5"\n        stroke="#1C1B20"\n        fill="none"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path\n          d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"\n        ></path>\n      </svg>'},249:function(t,n){t.exports='<svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="icon icon-tabler icon-tabler-brand-linkedin"\n        width="32"\n        height="32"\n        viewBox="0 0 24 24"\n        stroke-width="1.5"\n        stroke="#1C1B20"\n        fill="none"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <rect x="4" y="4" width="16" height="16" rx="2"></rect>\n        <line x1="8" y1="11" x2="8" y2="16"></line>\n        <line x1="8" y1="8" x2="8" y2="8.01"></line>\n        <line x1="12" y1="16" x2="12" y2="11"></line>\n        <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>\n      </svg>'},250:function(t,n){t.exports='<svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="icon icon-tabler icon-tabler-brand-twitter"\n        width="32"\n        height="32"\n        viewBox="0 0 24 24"\n        stroke-width="1.5"\n        stroke="#1C1B20"\n        fill="none"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path\n          d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"\n        ></path>\n      </svg>'},251:function(t,n,e){"use strict";e(246)},252:function(t,n,e){var o=e(57)(!1);o.push([t.i,"h3[data-v-74db1919]{font-size:.9rem;letter-spacing:1px;position:relative;top:2px}@media(min-width:1024px){.uk-grid>div+div[data-v-74db1919]{margin-top:-5px!important}}",""]),t.exports=o},257:function(t,n,e){"use strict";e.r(n);var o={props:["label","title","text"],data:function(){return{animate:!1}},mounted:function(){"true"===this.animation&&(this.animate=!0)}},r=(e(251),e(10)),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"text-block uk-grid uk-grid-large",attrs:{"uk-grid":""}},[e("div",{staticClass:"uk-width-1-3@m"},[e("h3",{staticClass:"uk-h5 uk-text-uppercase uk-text-muted uk-margin-small-bottom"},[t._v("\n      "+t._s(t.label)+"\n    ")])]),t._v(" "),e("div",{staticClass:"uk-width-expand@m uk-margin-remove"},[t.title?e("h2",{staticClass:"uk-h3 uk-text-bold"},[t._v("\n      "+t._s(t.title)+"\n    ")]):t._e(),t._v(" "),e("p",{domProps:{innerHTML:t._s(t.text)}})])])}),[],!1,null,"74db1919",null);n.default=component.exports},259:function(t,n){t.exports='<svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="icon icon-tabler icon-tabler-map-pin"\n        width="32"\n        height="32"\n        viewBox="0 0 24 24"\n        stroke-width="1.5"\n        stroke="#1C1B20"\n        fill="none"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <circle cx="12" cy="11" r="3"></circle>\n        <path\n          d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"\n        ></path>\n      </svg>'},260:function(t,n){t.exports='<svg\n        xmlns="http://www.w3.org/2000/svg"\n        class="icon icon-tabler icon-tabler-brand-telegram"\n        width="32"\n        height="32"\n        viewBox="0 0 24 24"\n        stroke-width="1.5"\n        stroke="#1C1B20"\n        fill="none"\n        stroke-linecap="round"\n        stroke-linejoin="round"\n      >\n        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>\n        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>\n      </svg>'},272:function(t,n,e){var content=e(284);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(58).default)("a0aa61a6",content,!0,{sourceMap:!1})},274:function(t,n,e){"use strict";e.r(n);var o={},r=e(10),component=Object(r.a)(o,(function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("ul",{staticClass:"uk-list uk-list-divider"},[o("li",[o("span",{staticClass:"tm-svg",domProps:{innerHTML:t._s(e(259))}}),t._v("\n    Sofila, Bulgaria\n  ")]),t._v(" "),o("li",[o("span",{staticClass:"tm-svg",domProps:{innerHTML:t._s(e(260))}}),t._v(" "),o("a",{staticClass:"uk-link-reset",attrs:{href:"mailto: kreativan.dev@gmail.com"}},[t._v("\n      kreativan.dev@gmail.com\n    ")])]),t._v(" "),o("li",[o("span",{staticClass:"tm-svg",domProps:{innerHTML:t._s(e(248))}}),t._v(" "),o("a",{staticClass:"uk-link-reset",attrs:{href:"https://github.com/kreativan",target:"_blank",rel:"nofollow, noopener",title:"Ivan Milincic GitHub"}},[t._v("\n      github.com/kreativan\n    ")])]),t._v(" "),o("li",[o("span",{staticClass:"tm-svg",domProps:{innerHTML:t._s(e(249))}}),t._v(" "),o("a",{staticClass:"uk-link-reset",attrs:{href:"https://www.linkedin.com/in/kreativan-dev/",target:"_blank",rel:"nofollow, noopener",title:"Ivan Milincic LinkedIn"}},[t._v("\n      linkedin.com/in/kreativan-dev/\n    ")])]),t._v(" "),o("li",[o("span",{staticClass:"tm-svg",domProps:{innerHTML:t._s(e(250))}}),t._v(" "),o("a",{staticClass:"uk-link-reset",attrs:{href:"https://twitter.com/lokomotivan",target:"_blank",rel:"nofollow, noopener",title:"Ivan Milincic Twitter"}},[t._v("\n      twitter.com/lokomotivan\n    ")])])])}),[],!1,null,null,null);n.default=component.exports},283:function(t,n,e){"use strict";e(272)},284:function(t,n,e){var o=e(57)(!1);o.push([t.i,"h5[data-v-77be1ff0]{font-size:.9rem;letter-spacing:1px}.uk-grid h2[data-v-77be1ff0]{margin-top:-10px!important}",""]),t.exports=o},304:function(t,n,e){"use strict";e.r(n);var o=e(3),r=(e(34),e(18),e(44),{head:function(){return{title:this.seo.title,meta:[{hid:"description",name:"description",content:this.seo.description},{hid:"og:title",property:"og:title",content:this.seo.title},{hid:"og:description",property:"og:description",content:this.seo.description},{hid:"og:image",property:"og:image",content:this.seo.image}]}},data:function(){return{page:{},seo:{}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$content("about").fetch();case 2:e=n.sent,t.page=e,t.seo=e.seo;case 5:case"end":return n.stop()}}),n)})))()}}),l=(e(283),e(10)),component=Object(l.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"main"}},[e("PageHeading",{attrs:{title:t.page.title,caption:t.page.caption,image:t.page.image}}),t._v(" "),e("div",{staticClass:"uk-container uk-section",attrs:{"uk-scrollspy":"target: > div; cls: uk-animation-slide-bottom-medium; delay: 400"}},[t._l(t.page.blocks,(function(t,n){return[e("div",{key:n,staticClass:"uk-margin-medium"},[e("TextBlock",{attrs:{label:n,title:t.title,text:t.text}})],1)]})),t._v(" "),e("div",{staticClass:"uk-grid uk-grid-large",attrs:{"uk-grid":"","uk-scrollspy":"cls: uk-animation-slide-bottom-medium; delay: 500"}},[t._m(0),t._v(" "),e("div",{staticClass:"uk-width-expand@m"},[e("h2",{staticClass:"uk-h3 uk-text-bold"},[t._v("Let's get in touch")]),t._v(" "),e("ContactInfo")],1)]),t._v(" "),e("nuxt-content",{attrs:{document:t.page}})],2)],1)}),[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"uk-width-1-3@m"},[e("h5",{staticClass:"uk-text-uppercase uk-text-muted uk-margin-small-bottom"},[t._v("\n          Contact\n        ")])])}],!1,null,"77be1ff0",null);n.default=component.exports;installComponents(component,{PageHeading:e(247).default,TextBlock:e(257).default,ContactInfo:e(274).default})}}]);