"use strict";(self.webpackChunksnow_site=self.webpackChunksnow_site||[]).push([[7920],{8824:(e,t,a)=>{a.d(t,{c:()=>o});var r=a(7294),n=a(2263);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function u(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function o(){const e=u();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}},1473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r=a(7294),n=a(2263),l=a(179),s=a(5742),c=a(9960),u=a(5999),o=a(373),m=a(8824),h=a(4104),i=a(6550),p=a(412);const d=function(){const e=(0,i.k6)(),t=(0,i.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)();return{searchValue:p.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:a=>{const r=new URLSearchParams(t.search);a?r.set("q",a):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:e=>`${a}search?q=${encodeURIComponent(e)}`}};var g=a(22),f=a(8202),y=a(2539),E=a(726),I=a(1073),S=a(311);const R={searchQueryInput:"searchQueryInput_CFBF",searchResultItem:"searchResultItem_U687",searchResultItemPath:"searchResultItemPath_uIbk",searchResultItemSummary:"searchResultItemSummary_oZHr"};var w=a(3926);function P(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),t=(0,h.gA)();let a=e;const{preferredVersion:l}=(0,o.J)(t?.pluginId);l&&!l.isLast&&(a=l.path+"/");const{selectMessage:c}=(0,m.c)(),{searchValue:i,updateSearchPath:p}=d(),[y,E]=(0,r.useState)(i),[I,w]=(0,r.useState)(),[P,F]=(0,r.useState)(),v=(0,r.useMemo)((()=>y?(0,u.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:y}):(0,u.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[y]);(0,r.useEffect)((()=>{p(y),I&&(y?I(y,(e=>{F(e)})):F(void 0))}),[y,I]);const _=(0,r.useCallback)((e=>{E(e.target.value)}),[]);return(0,r.useEffect)((()=>{i&&i!==y&&E(i)}),[i]),(0,r.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,g.w)(a);w((()=>(0,f.v)(e,t,100)))}()}),[a]),r.createElement(r.Fragment,null,r.createElement(s.Z,null,r.createElement("meta",{property:"robots",content:"noindex, follow"}),r.createElement("title",null,v)),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("h1",null,v),r.createElement("input",{type:"search",name:"q",className:R.searchQueryInput,"aria-label":"Search",onChange:_,value:y,autoComplete:"off",autoFocus:!0}),!I&&y&&r.createElement("div",null,r.createElement(S.Z,null)),P&&(P.length>0?r.createElement("p",null,c(P.length,(0,u.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:P.length}))):r.createElement("p",null,(0,u.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),r.createElement("section",null,P&&P.map((e=>r.createElement(b,{key:e.document.i,searchResult:e}))))))}function b(e){let{searchResult:{document:t,type:a,page:n,tokens:l,metadata:s}}=e;const u=0===a,o=2===a,m=(u?t.b:n.b).slice(),h=o?t.s:t.t;return u||m.push(n.t),r.createElement("article",{className:R.searchResultItem},r.createElement("h2",null,r.createElement(c.Z,{to:t.u+(t.h||""),dangerouslySetInnerHTML:{__html:o?(0,y.C)(h,l):(0,E.o)(h,(0,I.m)(s,"t"),l,100)}})),m.length>0&&r.createElement("p",{className:R.searchResultItemPath},(0,w.e)(m)),o&&r.createElement("p",{className:R.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,E.o)(t.t,(0,I.m)(s,"t"),l,100)}}))}const F=function(){return r.createElement(l.Z,null,r.createElement(P,null))}}}]);