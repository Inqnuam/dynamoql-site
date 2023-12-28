"use strict";(self.webpackChunkdynamo_ql=self.webpackChunkdynamo_ql||[]).push([[3932],{1744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var r=t(5893),a=t(1151),s=t(4866),l=t(5162);const o={},i=void 0,u={id:"schema/Advanced",title:"Advanced",description:"Schema class is essentially for DynamoQL internal usage, however it exposes some usefull properties and methods in case you look for them.",source:"@site/docs/schema/Advanced.mdx",sourceDirName:"schema",slug:"/schema/Advanced",permalink:"/dynamoql-site/docs/schema/Advanced",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GotItem",permalink:"/dynamoql-site/docs/schema/type-utilities/GotItem"},next:{title:"Model",permalink:"/dynamoql-site/docs/category/model"}},c={},d=[{value:"marshallPk",id:"marshallpk",level:3},{value:"getTypeFromKeyPath",id:"gettypefromkeypath",level:3}];function m(e){const n={code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Schema class is essentially for DynamoQL internal usage, however it exposes some usefull properties and methods in case you look for them."}),"\n",(0,r.jsx)(n.p,{children:"for our examples we are using this Schema defintion."}),"\n",(0,r.jsxs)(s.Z,{children:[(0,r.jsx)(l.Z,{value:"dql",label:"DynamoQL",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\n\nconst messageSchema = new Schema({\n  conversationId: {\n    type: Number,\n    primaryIndex: true,\n  },\n  messageId: {\n    type: Date,\n    format: "timestamp",\n    sortKey: true\n  },\n  text: String,\n  author: {\n    type: Object,\n    fields: {\n        id: String,\n        nickname: String,\n        socialNetwork: {\n            type: Array,\n            items: {\n                type: Object,\n                fields: {\n                    url: String,\n                    label: {\n                        type: String,\n                        required: true,\n                        enum: ["X", "Facebook", "Instagram"]\n                    }\n                }\n            }\n        }\n    }\n  },\n  response: {\n    type: Set,\n    items: String\n  }\n} as const);\n'})})}),(0,r.jsx)(l.Z,{value:"ts",label:"produced type",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'interface ISocialNetwork {\n    url: string;\n    label: "X" | "Facebook" | "Instagram"\n}\n\n\ninterface IMessage {\n    conversationId: number;\n    messageId: number;\n    text: string;\n    author: {\n        id: string:\n        nickname: string;\n        socialNetwork: ISocialNetwork[]\n    },\n    response?: Set<string>\n}\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"marshallpk",children:"marshallPk"}),"\n",(0,r.jsx)(n.p,{children:"This method is specially usefull when working with indices with Date type."}),"\n",(0,r.jsx)(n.p,{children:"Schema.prototype.marshallPk takes one argument:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["of type String, Number or Buffer, Date, depending on your ",(0,r.jsx)(n.code,{children:"primaryIndex"}),", in our example its a Number."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:"const marshalledPk = messageSchema.marshallPk(237190);\n\n// returns\nmarshalledPk = {\n    conversationId: {\n        N: 237190\n    }\n}\n"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["or a JS object which includes your ",(0,r.jsx)(n.code,{children:"primaryIndex"})," and optionnally ",(0,r.jsx)(n.code,{children:"sortKey"}),"."]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const marshalledPk = messageSchema.marshallPk({\n     conversationId: 237190,\n     messageId: "2023-12-18T13:12:34.797Z"\n     });\n\n// returns\nmarshalledPk = {\n    conversationId: {\n        N: 237190\n    },\n    messageId: {\n        N: 1702905154797\n    }\n}\n'})}),"\n",(0,r.jsx)(n.h3,{id:"gettypefromkeypath",children:"getTypeFromKeyPath"}),"\n",(0,r.jsx)(n.p,{children:"This method allows you to find type declaration object with a key-path."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const fieldType = messageSchema.getTypeFromKeyPath("conversationId");\n\n// returns\nfieldType = {\n    type: "N",\n    primaryIndex: true,\n    required: true\n}\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const fieldType = messageSchema.getTypeFromKeyPath("author.socialNetwork[2].label");\n\n// returns\nfieldType = {\n    type: "S",\n    required: true,\n    enum: ["X", "Facebook", "Instagram"]\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>l});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(7294),a=t(512),s=t(2466),l=t(6550),o=t(469),i=t(1980),u=t(7392),c=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function h(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!h({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[u,d]=p({queryString:t,groupId:a}),[f,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),b=(()=>{const e=u??f;return h({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),y(e)}),[d,y,s]),tabValues:s}}var y=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=i.indexOf(n),a=o[t].value;a!==r&&(u(n),l(a))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function k(e){const n=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(x,{...e,...n})]})}function j(e){const n=(0,y.Z)();return(0,g.jsx)(k,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var r=t(7294);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);