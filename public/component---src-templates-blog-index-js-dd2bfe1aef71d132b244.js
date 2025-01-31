"use strict";(self.webpackChunkgilbert_contentful_website=self.webpackChunkgilbert_contentful_website||[]).push([[27],{3815:function(e,t,n){n.d(t,{A:function(){return a},l:function(){return l}});var r=n(6540);const l=e=>e?e.replace(/\/$/,""):"";function a(e){let{title:t,description:n,image:a,url:c}=e;const i=l(c);return r.createElement(r.Fragment,null,r.createElement("meta",{charSet:"utf-8"}),r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),r.createElement("meta",{name:"robots",content:"index, follow"}),r.createElement("title",null,t),r.createElement("meta",{name:"description",content:n||"Default description"}),i&&r.createElement("link",{rel:"canonical",href:i}),r.createElement("meta",{property:"og:title",content:t}),r.createElement("meta",{property:"og:description",content:n||"Default description"}),r.createElement("meta",{property:"og:url",content:i}),a&&r.createElement("meta",{property:"og:image",content:a.url}))}},2741:function(e,t,n){n.d(t,{A:function(){return a}});var r=n(6540),l=(n(7047),n(4794));var a=e=>{let{children:t}=e;return r.createElement(r.Fragment,null,r.createElement(l.Slice,{alias:"header"}),r.createElement("main",null,t),r.createElement(l.Slice,{alias:"footer"}))}},1216:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return d}});var r=n(4506),l=n(6540),a=n(4794),c=n(2741),i=n(3815),o=n(8511),u=n(2532);function m(e){let{children:t,to:n,style:r={}}=e;return l.createElement(o.aD,{to:n,style:{padding:"10px",borderRadius:"8px",width:"350px",...r}},t)}m.Image=function(e){let{image:t}=e;if(!t)return null;const n=(0,u.c)(t);return l.createElement(l.Fragment,null,l.createElement(u.G,{alt:(null==t?void 0:t.alt)||"Blog post image",image:n,style:{borderRadius:"8px",height:"200px",objectFit:"cover",width:"100%"}}),l.createElement(o.$x,{size:3}))},m.Title=function(e){let{category:t,title:n}=e;return l.createElement(o.LE,null,l.createElement(o.YN,null,t),n)},m.Excerpt=function(e){let{excerpt:t}=e;return t?l.createElement(o.EY,{as:"p"},t):null};var s=m;function d(e){let{data:t}=e;const n=t.allContentfulBlogPost.nodes,i=(0,r.A)(n).sort(((e,t)=>"Featured"===e.category&&"Featured"!==t.category?-1:"Featured"!==e.category&&"Featured"===t.category?1:0));return l.createElement(c.A,{title:"Blogs"},l.createElement(o.mc,null,l.createElement("article",null,l.createElement(o.az,{paddingY:4},l.createElement("ul",{style:{listStyle:"none",padding:0,display:"flex",gap:"8px",flexWrap:"wrap"}},Array.from(new Set(n.map((e=>e.category)))).map((e=>l.createElement("li",{key:e,style:{margin:0}},l.createElement(a.Link,{to:`/category/${e.toLowerCase()}/`,style:{padding:"8px 12px",backgroundColor:"#333",color:"white",borderRadius:"5px",textDecoration:"none"}},e)))))),l.createElement(o.az,{paddingY:4},l.createElement(o.DZ,{as:"h1"},"Blogs"),l.createElement(o.go,{responsive:!0,wrap:!0,gap:3,gutter:3,style:{display:"flex",flexWrap:"wrap"},variant:"start"},i.map((e=>{const t="Featured"===e.category;return l.createElement(o.az,{as:"li",key:e.id,padding:3,width:t?["full","half"]:["full","third"]},l.createElement(s,{to:`/blogs/${e.slug}`},l.createElement(s.Image,{image:e.image}),l.createElement(s.Title,{category:e.category,title:e.title}),l.createElement(s.Excerpt,{excerpt:e.excerpt})))})))))))}const p=e=>{let{data:t}=e;const{site:n}=t,r=n.siteMetadata,a=`All My Blog Posts | ${r.title}`,c=(0,i.l)(`${r.siteUrl}/blogs`);return l.createElement(i.A,{title:a,description:"Discover the my blog posts on various topics, including web development and design articles. Stay updated with fresh content.",url:c})}}}]);
//# sourceMappingURL=component---src-templates-blog-index-js-dd2bfe1aef71d132b244.js.map