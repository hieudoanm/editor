(()=>{var a={};a.id=636,a.ids=[636],a.modules={361:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},434:(a,b,c)=>{"use strict";a.exports=c(361)},746:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"default",{enumerable:!0,get:function(){return f}});let d=c(2015),e=()=>{};function f(a){var b;let{headManager:c,reduceComponentsToState:f}=a;function g(){if(c&&c.mountedInstances){let b=d.Children.toArray(Array.from(c.mountedInstances).filter(Boolean));c.updateHead(f(b,a))}}return null==c||null==(b=c.mountedInstances)||b.add(a.children),g(),e(()=>{var b;return null==c||null==(b=c.mountedInstances)||b.add(a.children),()=>{var b;null==c||null==(b=c.mountedInstances)||b.delete(a.children)}}),e(()=>(c&&(c._pendingUpdate=g),()=>{c&&(c._pendingUpdate=g)})),null}},1131:(a,b)=>{"use strict";function c(a){let{ampFirst:b=!1,hybrid:c=!1,hasQuery:d=!1}=void 0===a?{}:a;return b||c&&d}Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"isInAmpMode",{enumerable:!0,get:function(){return c}})},1861:(a,b,c)=>{"use strict";c.d(b,{C3:()=>d,_z:()=>g,br:()=>h,lP:()=>f,wY:()=>e});let d="Editor",e=[{key1:"value1",key2:"value2",key3:"value3",key4:"value4"},{key1:"value1",key2:"value2",key3:"value3",key4:"value4"},{key1:"value1",key2:"value2",key3:"value3",key4:"value4"},{key1:"value1",key2:"value2",key3:"value3",key4:"value4"}],f={browser_specific_settings:{gecko:{id:"addon@example.com",strict_min_version:"42.0"}},background:{scripts:["jquery.js","my-background.js"]},browser_action:{default_icon:{19:"button/geo-19.png",38:"button/geo-38.png"},default_title:"Whereami?",default_popup:"popup/geo.html"},commands:{"toggle-feature":{suggested_key:{default:"Ctrl+Shift+Y",linux:"Ctrl+Shift+U"},description:"Send a 'toggle-feature' event"}},content_security_policy:"script-src 'self' https://example.com; object-src 'self'",content_scripts:[{exclude_matches:["*://developer.mozilla.org/*"],matches:["*://*.mozilla.org/*"],js:["borderify.js"]}],default_locale:"en",description:"…",icons:{48:"icon.png",96:"icon@2x.png"},manifest_version:2,name:"…",page_action:{default_icon:{19:"button/geo-19.png",38:"button/geo-38.png"},default_title:"Whereami?",default_popup:"popup/geo.html"},permissions:["webNavigation"],version:"0.1",user_scripts:{api_script:"apiscript.js"},web_accessible_resources:["images/my-image.png"]},g={short_name:"MDN",name:"MDN Web Docs",icons:[{src:"/favicon-192x192.png",sizes:"192x192",type:"image/png"},{src:"/favicon-512x512.png",sizes:"512x512",type:"image/png"}],start_url:".",display:"standalone",theme_color:"#000000",background_color:"#ffffff"},h=`# Markdown Cheat Sheet

Thanks for visiting [The Markdown Guide](https://www.markdownguide.org)!

This Markdown cheat sheet provides a quick overview of all the Markdown syntax elements. It can't cover every edge case, so if you need more information about any of these elements, refer to the reference guides for [basic syntax](https://www.markdownguide.org/basic-syntax/) and [extended syntax](https://www.markdownguide.org/extended-syntax/).

## Basic Syntax

These are the elements outlined in John Gruber’s original design document. All Markdown applications support these elements.

### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item

### Code

\`code\`

### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |

### Fenced Code Block

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media

### Emoji

That is so funny! :joy:

(See also [Copying and Pasting Emoji](https://www.markdownguide.org/extended-syntax/#copying-and-pasting-emoji))

### Highlight

I need to highlight these ==very important words==.

### Subscript

H~2~O

### Superscript

X^2^`},2015:a=>{"use strict";a.exports=require("react")},2403:(a,b)=>{"use strict";b._=function(a){return a&&a.__esModule?a:{default:a}}},2461:(a,b,c)=>{a.exports=c(9839)},2742:(a,b)=>{"use strict";function c(a){if("function"!=typeof WeakMap)return null;var b=new WeakMap,d=new WeakMap;return(c=function(a){return a?d:b})(a)}b._=function(a,b){if(!b&&a&&a.__esModule)return a;if(null===a||"object"!=typeof a&&"function"!=typeof a)return{default:a};var d=c(b);if(d&&d.has(a))return d.get(a);var e={__proto__:null},f=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var g in a)if("default"!==g&&Object.prototype.hasOwnProperty.call(a,g)){var h=f?Object.getOwnPropertyDescriptor(a,g):null;h&&(h.get||h.set)?Object.defineProperty(e,g,h):e[g]=a[g]}return e.default=a,d&&d.set(a,e),e}},6139:a=>{a.exports={style:{fontFamily:"'Geist', 'Geist Fallback'",fontStyle:"normal"},className:"__className_95be13",variable:"__variable_95be13"}},6149:a=>{a.exports={style:{fontFamily:"'Geist Mono', 'Geist Mono Fallback'",fontStyle:"normal"},className:"__className_953c6b",variable:"__variable_953c6b"}},8462:a=>{"use strict";a.exports=import("@tanstack/react-query")},8467:(a,b)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),Object.defineProperty(b,"warnOnce",{enumerable:!0,get:function(){return c}});let c=a=>{}},8532:(a,b,c)=>{"use strict";c.a(a,async(a,d)=>{try{c.r(b),c.d(b,{default:()=>o});var e=c(8732),f=c(1861);c(8962);var g=c(8462),h=c(6139),i=c.n(h),j=c(6149),k=c.n(j),l=c(2461),m=c.n(l),n=a([g]);g=(n.then?(await n)():n)[0];let o=({Component:a,pageProps:b})=>(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(m(),{children:(0,e.jsx)("title",{children:f.C3})}),(0,e.jsx)(g.QueryClientProvider,{client:new g.QueryClient,children:(0,e.jsx)("div",{className:`${i().className} ${k().className} bg-neutral-900 text-neutral-100`,children:(0,e.jsx)(a,{...b})})})]});d()}catch(a){d(a)}})},8536:(a,b,c)=>{"use strict";a.exports=c(434).vendored.contexts.AmpContext},8732:a=>{"use strict";a.exports=require("react/jsx-runtime")},8962:()=>{},9302:(a,b,c)=>{"use strict";a.exports=c(434).vendored.contexts.HeadManagerContext},9839:(a,b,c)=>{"use strict";Object.defineProperty(b,"__esModule",{value:!0}),!function(a,b){for(var c in b)Object.defineProperty(a,c,{enumerable:!0,get:b[c]})}(b,{default:function(){return p},defaultHead:function(){return l}});let d=c(2403),e=c(2742),f=c(8732),g=e._(c(2015)),h=d._(c(746)),i=c(8536),j=c(9302),k=c(1131);function l(a){void 0===a&&(a=!1);let b=[(0,f.jsx)("meta",{charSet:"utf-8"},"charset")];return a||b.push((0,f.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")),b}function m(a,b){return"string"==typeof b||"number"==typeof b?a:b.type===g.default.Fragment?a.concat(g.default.Children.toArray(b.props.children).reduce((a,b)=>"string"==typeof b||"number"==typeof b?a:a.concat(b),[])):a.concat(b)}c(8467);let n=["name","httpEquiv","charSet","itemProp"];function o(a,b){let{inAmpMode:c}=b;return a.reduce(m,[]).reverse().concat(l(c).reverse()).filter(function(){let a=new Set,b=new Set,c=new Set,d={};return e=>{let f=!0,g=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){g=!0;let b=e.key.slice(e.key.indexOf("$")+1);a.has(b)?f=!1:a.add(b)}switch(e.type){case"title":case"base":b.has(e.type)?f=!1:b.add(e.type);break;case"meta":for(let a=0,b=n.length;a<b;a++){let b=n[a];if(e.props.hasOwnProperty(b))if("charSet"===b)c.has(b)?f=!1:c.add(b);else{let a=e.props[b],c=d[b]||new Set;("name"!==b||!g)&&c.has(a)?f=!1:(c.add(a),d[b]=c)}}}return f}}()).reverse().map((a,b)=>{let c=a.key||b;return g.default.cloneElement(a,{key:c})})}let p=function(a){let{children:b}=a,c=(0,g.useContext)(i.AmpStateContext),d=(0,g.useContext)(j.HeadManagerContext);return(0,f.jsx)(h.default,{reduceComponentsToState:o,headManager:d,inAmpMode:(0,k.isInAmpMode)(c),children:b})};("function"==typeof b.default||"object"==typeof b.default&&null!==b.default)&&void 0===b.default.__esModule&&(Object.defineProperty(b.default,"__esModule",{value:!0}),Object.assign(b.default,b),a.exports=b.default)}};var b=require("../webpack-runtime.js");b.C(a);var c=b(b.s=8532);module.exports=c})();