(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(5044)}])},3740:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,o=i(1598).Z,a=i(7273).Z,s=o(i(7294)),l=r(i(2636)),d=i(7757),c=i(3735),u=i(3341);i(4210);var h=r(i(7746));let f={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,i,r,o,a,s){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,o=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>o,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{o=!0,t.stopPropagation()}}))}(null==o?void 0:o.current)&&o.current(e)}})}function x(e){let[t,i]=s.version.split("."),n=parseInt(t,10),r=parseInt(i,10);return n>18||18===n&&r>=3?{fetchPriority:e}:{fetchpriority:e}}let w=s.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:o,qualityInt:l,className:d,imgStyle:c,blurStyle:u,isLazy:h,fetchPriority:f,fill:m,placeholder:p,loading:w,srcString:y,config:v,unoptimized:b,loader:j,onLoadRef:_,onLoadingCompleteRef:S,setBlurComplete:C,setShowAltText:E,onLoad:k,onError:I}=e,z=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fetchPriority","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return w=h?"lazy":w,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},z,x(f),{loading:w,width:o,height:r,decoding:"async","data-nimg":m?"fill":"1",className:d,style:n({},c,u)},i,{ref:s.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(I&&(e.src=e.src),e.complete&&g(e,y,p,_,S,C,b))},[y,p,_,S,C,I,b,t]),onLoad:e=>{let t=e.currentTarget;g(t,y,p,_,S,C,b)},onError:e=>{E(!0),"blur"===p&&C(!0),I&&I(e)}})))}),y=s.forwardRef((e,t)=>{let i,r;var o,{src:g,sizes:y,unoptimized:v=!1,priority:b=!1,loading:j,className:_,quality:S,width:C,height:E,fill:k,style:I,onLoad:z,onLoadingComplete:A,placeholder:O="empty",blurDataURL:P,fetchPriority:R,layout:L,objectFit:N,objectPosition:T,lazyBoundary:M,lazyRoot:F}=e,D=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","fetchPriority","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let G=s.useContext(u.ImageConfigContext),W=s.useMemo(()=>{let e=f||G||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[G]),B=D,X=B.loader||h.default;delete B.loader;let H="__next_img_default"in X;if(H){if("custom"===W.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=X;X=t=>{let{config:i}=t,n=a(t,["config"]);return e(n)}}if(L){"fill"===L&&(k=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[L];e&&(I=n({},I,e));let t={responsive:"100vw",fill:"100vw"}[L];t&&!y&&(y=t)}let Z="",q=p(C),U=p(E);if("object"==typeof(o=g)&&(m(o)||void 0!==o.src)){let e=m(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,P=P||e.blurDataURL,Z=e.src,!k){if(q||U){if(q&&!U){let t=q/e.width;U=Math.round(e.height*t)}else if(!q&&U){let t=U/e.height;q=Math.round(e.width*t)}}else q=e.width,U=e.height}}let J=!b&&("lazy"===j||void 0===j);(!(g="string"==typeof g?g:Z)||g.startsWith("data:")||g.startsWith("blob:"))&&(v=!0,J=!1),W.unoptimized&&(v=!0),H&&g.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(v=!0),b&&(R="high");let[V,Y]=s.useState(!1),[$,K]=s.useState(!1),Q=p(S),ee=Object.assign(k?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:N,objectPosition:T}:{},$?{}:{color:"transparent"},I),et="blur"===O&&P&&!V?{backgroundSize:ee.objectFit||"cover",backgroundPosition:ee.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(d.getImageBlurSvg({widthInt:q,heightInt:U,blurWidth:i,blurHeight:r,blurDataURL:P,objectFit:ee.objectFit}),'")')}:{},ei=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:o,sizes:a,loader:s}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:d}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let o=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:o,kind:"x"}}(t,r,a),c=l.length-1;return{sizes:a||"w"!==d?a:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:i,quality:o,width:e})," ").concat("w"===d?e:n+1).concat(d)).join(", "),src:s({config:t,src:i,quality:o,width:l[c]})}}({config:W,src:g,unoptimized:v,width:q,quality:Q,sizes:y,loader:X}),en=g,er=s.useRef(z);s.useEffect(()=>{er.current=z},[z]);let eo=s.useRef(A);s.useEffect(()=>{eo.current=A},[A]);let ea=n({isLazy:J,imgAttributes:ei,heightInt:U,widthInt:q,qualityInt:Q,className:_,imgStyle:ee,blurStyle:et,loading:j,config:W,fetchPriority:R,fill:k,unoptimized:v,placeholder:O,loader:X,srcString:en,onLoadRef:er,onLoadingCompleteRef:eo,setBlurComplete:Y,setShowAltText:K},B);return s.default.createElement(s.default.Fragment,null,s.default.createElement(w,Object.assign({},ea,{ref:t})),b?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+ei.src+ei.srcSet+ei.sizes,rel:"preload",as:"image",href:ei.srcSet?void 0:ei.src,imageSrcSet:ei.srcSet,imageSizes:ei.sizes,crossOrigin:B.crossOrigin},x(R)))):null)});t.default=y,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7757:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:o,objectFit:a}=e,s=n||t,l=r||i,d=o.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return s&&l?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(s," ").concat(l,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(d,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' preserveAspectRatio='".concat("contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none","' x='0' y='0' height='100%25' width='100%25' href='").concat(o,"'/%3E%3C/svg%3E")}},7746:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},5044:function(e,t,i){"use strict";i.r(t),i.d(t,{__N_SSG:function(){return B},default:function(){return X}});var n=i(5893),r=i(4579),o=i(6979),a=i(3100),s=i(2498),l=i(4418),d=i(3838),c=i(6877),u=i(5227),h=i(2495),f=i(5059),m=i(4662),p=i(3179),[g,x]=(0,u.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),w=(0,f.G)(function(e,t){let i=(0,m.jC)("List",e),{children:o,styleType:a="none",stylePosition:s,spacing:l,...d}=(0,p.Lr)(e),c=(0,h.W)(o);return(0,n.jsx)(g,{value:i,children:(0,n.jsx)(r.m.ul,{ref:t,listStyleType:a,listStylePosition:s,role:"list",__css:{...i.container,...l?{"& > *:not(style) ~ *:not(style)":{mt:l}}:{}},...d,children:c})})});w.displayName="List",(0,f.G)((e,t)=>{let{as:i,...r}=e;return(0,n.jsx)(w,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})}).displayName="OrderedList",(0,f.G)(function(e,t){let{as:i,...r}=e;return(0,n.jsx)(w,{ref:t,as:"ul",styleType:"initial",marginStart:"1em",...r})}).displayName="UnorderedList";var y=(0,f.G)(function(e,t){let i=x();return(0,n.jsx)(r.m.li,{ref:t,...e,__css:i.item})});y.displayName="ListItem",(0,f.G)(function(e,t){let i=x();return(0,n.jsx)(c.J,{ref:t,role:"presentation",...e,__css:i.icon})}).displayName="ListIcon";var v=i(9222);function b(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var j=i(6829);function _(){let e=b(["\n  text-align: justify;\n  text-indent: 1em;\n  hyphens: auto;\n"]);return _=function(){return e},e}let S=j.Z.p(_());function C(){let e=b(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return C=function(){return e},e}function E(){let e=b(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return E=function(){return e},e}let k=(0,j.Z)(a.xu)(C()),I=j.Z.span(E());var z=i(1615),A=i(9008),O=i.n(A);let P={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}},R=e=>{let{children:t,title:i}=e,r="".concat(i," - Diego Toro");return(0,n.jsx)(z.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:P,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,n.jsxs)(n.Fragment,{children:[i&&(0,n.jsxs)(O(),{children:[(0,n.jsx)("title",{children:r}),(0,n.jsx)("meta",{name:"twitter:title",content:r}),(0,n.jsx)("meta",{property:"og:title",content:r})]}),t]})})};var L=i(4920);let N=(0,r.m)(z.E.div,{shouldForwardProp:e=>(0,L.x)(e)||"transition"===e}),T=e=>{let{children:t,delay:i=0}=e;return(0,n.jsx)(N,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:i},mb:6,children:t})};var M=i(2370),F=i(5675),D=i.n(F);let G=(0,r.m)(D(),{shouldForwardProp:e=>["width","height","src","alt"].includes(e)}),W=()=>(0,n.jsx)(R,{children:(0,n.jsxs)(o.W,{children:[(0,n.jsx)(a.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:(0,s.ff)("whiteAlpha.500","blackAlpha.500"),css:{backdropFilter:"blur(10px)"},children:"Hi there!! Over here exist a web developer living in Colombia."}),(0,n.jsxs)(a.xu,{display:{md:"flex"},children:[(0,n.jsxs)(a.xu,{flexGrow:1,children:[(0,n.jsx)(l.X,{as:"h2",variant:"page-title",children:"Diego Toro C\xe1rdenas"}),(0,n.jsx)(S,{children:"Entrepreneurship"}),(0,n.jsx)(l.X,{as:"h6",variant:"caption",children:"[Artist | Researcher | Developer]"})]}),(0,n.jsx)(a.xu,{flexShrink:0,mt:{base:4,md:0},ml:{md:6},textAlign:"center",children:(0,n.jsx)(a.xu,{borderColor:(0,s.ff)("blackAlpha.900","whiteAlpha.900"),borderWidth:2,borderStyle:"solid",w:"auto",h:"auto",display:"inline-block",borderRadius:"full",overflow:"hidden",children:(0,n.jsx)(G,{src:"https://pbs.twimg.com/profile_images/1652848752455999488/NOwlzFAI_400x400.jpg",alt:"Profile image",borderRadius:"full",width:"100",height:"100"})})})]}),(0,n.jsxs)(T,{delay:.1,children:[(0,n.jsx)(l.X,{as:"h3",variant:"section-title",children:"Work"}),(0,n.jsxs)(S,{children:["Today I want to introduce you to someone very special, someone who is passionate about web development and programming codes. He is an EcmaScript web developer and although he is still a newcomer to the world of programming, he has shown a great effort to learn and apply his knowledge.",(0,n.jsx)("br",{}),"In addition to his love for computer science, this person is also passionate about industrial research, digital marketing, and databases. And while he may seem like an odd combination, his ability to work in different areas allows you to have a broader perspective and a competitive advantage in his work.",(0,n.jsx)("br",{}),"But what impresses the most about this person is his dedication and commitment to what he does. He is always willing to learn something new, investigate and improve his skills, which makes him an excellent collaborator and a valuable asset to any work team.",(0,n.jsx)("br",{}),"It is certain that this person will continue to grow and develop in the world of programming and industrial research. If you are looking for someone who is passionate and committed in these areas, you should definitely meet them.",(0,n.jsx)("br",{}),"When he's not online, he loves to record your voice into the microphone singing songs."]})]}),(0,n.jsxs)(T,{delay:.2,children:[(0,n.jsx)(l.X,{as:"h3",variant:"section-title",children:"Bio"}),(0,n.jsxs)(k,{children:[(0,n.jsx)(I,{children:"1984"}),"Born in Antioquia. Colombia."]}),(0,n.jsxs)(k,{children:[(0,n.jsx)(I,{children:"2011"}),"He completed the Research Seed Program at the Furniture Technology Center. SENA Calatrava Itag\xfc\xed Antioquia Colombia."]}),(0,n.jsxs)(k,{children:[(0,n.jsx)(I,{children:"2023"}),"Today debuting in the digital world..."]})]}),(0,n.jsxs)(T,{delay:.3,children:[(0,n.jsx)(l.X,{as:"h3",variant:"section-title",children:"\uD83D\uDC98"}),(0,n.jsxs)(S,{children:[" ",(0,n.jsx)(d.r,{href:"https://hiphopaite.blogspot.com/",target:"_blank",children:"Hip Hop Art & Rap Music (LatAm)"})]})]}),(0,n.jsxs)(T,{delay:.3,children:[(0,n.jsx)(l.X,{as:"h3",variant:"section-title",children:"Follow me on Twitter"}),(0,n.jsx)(w,{children:(0,n.jsx)(y,{children:(0,n.jsx)(d.r,{href:"https://twitter.com/d_caldasCaridad",target:"_blank",children:(0,n.jsx)(v.z,{variant:"ghost",colorScheme:"teal",leftIcon:(0,n.jsx)(M.JUd,{}),children:"@d_caldasCaridad (LatAm)"})})})}),(0,n.jsx)(l.X,{as:"h3",variant:"section-title",children:"Contact me"}),(0,n.jsx)(a.xu,{align:"lefht",my:4,children:(0,n.jsx)(v.z,{rightIcon:(0,n.jsx)(M.gXb,{}),colorScheme:"teal",onClick:()=>window.open("https://www.linkedin.com/in/torocardo","_blank"),children:"LinkedIn"})})]})]})});var B=!0,X=W},5675:function(e,t,i){e.exports=i(3740)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);