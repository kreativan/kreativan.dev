(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{281:function(t,n,o){var content=o(292);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(22).default)("0a47b0b0",content,!0,{sourceMap:!1})},282:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />\n  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />\n</svg>'},283:function(t,n){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="5" y1="12" x2="19" y2="12" />\n  <line x1="15" y1="16" x2="19" y2="12" />\n  <line x1="15" y1="8" x2="19" y2="12" />\n</svg>'},288:function(t,n,o){"use strict";var e=o(3),r=o(289);e({target:"String",proto:!0,forced:o(290)("link")},{link:function(t){return r(this,"a","href",t)}})},289:function(t,n,o){var e=o(27),r=/"/g;t.exports=function(t,n,o,l){var c=String(e(t)),d="<"+n;return""!==o&&(d+=" "+o+'="'+String(l).replace(r,"&quot;")+'"'),d+">"+c+"</"+n+">"}},290:function(t,n,o){var e=o(4);t.exports=function(t){return e((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},291:function(t,n,o){"use strict";o(281)},292:function(t,n,o){var e=o(21)(!1);e.push([t.i,".portfolio-card-image img[data-v-0d908d9c]{width:100%}.portfolio-card-body[data-v-0d908d9c]{padding:15px;display:flex;justify-content:space-between}.portfolio-card-body .btn-icon span[data-v-0d908d9c]{width:38px;height:38px}.portfolio-card h3[data-v-0d908d9c]{font-size:1.3rem;margin:0}.portfolio-card h3+span[data-v-0d908d9c]{display:block;margin-top:5px}",""]),t.exports=e},293:function(t,n,o){"use strict";o.r(n);o(288),o(45);var e={props:["image","title","link","width","height"],computed:{linkText:function(){return this.link.length>"24"?this.link.slice(0,"24")+"...":this.link}}},r=(o(291),o(11)),component=Object(r.a)(e,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"portfolio-card"},[e("div",{staticClass:"portfolio-card-image bg-muted"},[e("nuxt-img",{attrs:{src:t.image,width:t.width,height:t.height,alt:t.title}})],1),t._v(" "),e("div",{staticClass:"portfolio-card-body"},[e("div",[e("h3",{staticClass:"font-base"},[t._v(t._s(t.title))]),t._v(" "),e("span",{staticClass:"color-muted text-small"},[t._v(t._s(t.linkText))])]),t._v(" "),e("a",{staticClass:"btn btn-icon",attrs:{href:t.link,rel:"noffolow noopener",target:"_blank",title:t.title}},[e("span",[e("i",{domProps:{innerHTML:t._s(o(282))}}),t._v(" "),e("i",{domProps:{innerHTML:t._s(o(283))}})])])])])}),[],!1,null,"0d908d9c",null);n.default=component.exports}}]);