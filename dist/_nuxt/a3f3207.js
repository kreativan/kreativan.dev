(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{264:function(t,o){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-narrow-right"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <line x1="5" y1="12" x2="19" y2="12" />\n  <line x1="15" y1="16" x2="19" y2="12" />\n  <line x1="15" y1="8" x2="19" y2="12" />\n</svg>'},266:function(t,o,n){var content=n(276);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0a47b0b0",content,!0,{sourceMap:!1})},267:function(t,o){t.exports='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-link"  viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-global)" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />\n  <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />\n</svg>'},272:function(t,o,n){"use strict";var r=n(2),e=n(273);r({target:"String",proto:!0,forced:n(274)("link")},{link:function(t){return e(this,"a","href",t)}})},273:function(t,o,n){var r=n(27),e=/"/g;t.exports=function(t,o,n,l){var d=String(r(t)),c="<"+o;return""!==n&&(c+=" "+n+'="'+String(l).replace(e,"&quot;")+'"'),c+">"+d+"</"+o+">"}},274:function(t,o,n){var r=n(4);t.exports=function(t){return r((function(){var o=""[t]('"');return o!==o.toLowerCase()||o.split('"').length>3}))}},275:function(t,o,n){"use strict";n(266)},276:function(t,o,n){var r=n(25)(!1);r.push([t.i,".portfolio-card-image img[data-v-0d908d9c]{width:100%}.portfolio-card-body[data-v-0d908d9c]{padding:15px;display:flex;justify-content:space-between}.portfolio-card-body .btn-icon span[data-v-0d908d9c]{width:38px;height:38px}.portfolio-card h3[data-v-0d908d9c]{font-size:1.3rem;margin:0}.portfolio-card h3+span[data-v-0d908d9c]{display:block;margin-top:5px}",""]),t.exports=r},277:function(t,o,n){"use strict";n.r(o);n(272),n(45);var r={props:["image","title","link","width","height"],computed:{linkText:function(){return this.link.length>"24"?this.link.slice(0,"24")+"...":this.link}}},e=(n(275),n(11)),component=Object(e.a)(r,(function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"portfolio-card"},[r("div",{staticClass:"portfolio-card-image bg-muted"},[r("nuxt-img",{attrs:{src:t.image,width:t.width,height:t.height,alt:t.title}})],1),t._v(" "),r("div",{staticClass:"portfolio-card-body"},[r("div",[r("h3",{staticClass:"font-base"},[t._v(t._s(t.title))]),t._v(" "),r("span",{staticClass:"color-muted text-small"},[t._v(t._s(t.linkText))])]),t._v(" "),r("a",{staticClass:"btn btn-icon",attrs:{href:t.link,rel:"noffolow noopener",target:"_blank",title:t.title}},[r("span",[r("i",{domProps:{innerHTML:t._s(n(267))}}),t._v(" "),r("i",{domProps:{innerHTML:t._s(n(264))}})])])])])}),[],!1,null,"0d908d9c",null);o.default=component.exports},279:function(t,o,n){var content=n(290);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0932f045",content,!0,{sourceMap:!1})},289:function(t,o,n){"use strict";n(279)},290:function(t,o,n){var r=n(25)(!1);r.push([t.i,".portfolio-grid[data-v-b8780ab2]{display:grid;grid-template-columns:1fr 1fr 1fr;grid-column-gap:var(--gutter);grid-row-gap:var(--gutter)}@media(max-width:960px){.portfolio-grid[data-v-b8780ab2]{display:grid;grid-template-columns:1fr 1fr}}@media(max-width:640px){.portfolio-grid[data-v-b8780ab2]{grid-template-columns:1fr}}",""]),t.exports=r},305:function(t,o,n){"use strict";n.r(o);var r={props:["items","cls"]},e=(n(289),n(11)),component=Object(e.a)(r,(function(){var t=this,o=t.$createElement,n=t._self._c||o;return n("div",{staticClass:"portfolio-grid",class:t.cls},[t._l(t.items,(function(t){return[n("div",{key:t.slug},[n("PortfolioCard",{attrs:{image:t.image,title:t.title,link:t.link,width:"380",height:"240"}})],1)]}))],2)}),[],!1,null,"b8780ab2",null);o.default=component.exports;installComponents(component,{PortfolioCard:n(277).default})}}]);