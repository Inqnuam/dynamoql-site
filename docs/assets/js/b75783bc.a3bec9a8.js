"use strict";(self.webpackChunkdynamo_ql=self.webpackChunkdynamo_ql||[]).push([[4100],{2173:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var r=t(5893),a=t(1151);t(4866),t(5162);const l={},i=void 0,s={id:"model/Define a Model",title:"Define a Model",description:"Introduction",source:"@site/docs/model/Define a Model.mdx",sourceDirName:"model",slug:"/model/Define a Model",permalink:"/dynamoql-site/docs/model/Define a Model",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model",permalink:"/dynamoql-site/docs/category/model"},next:{title:"batchDelete",permalink:"/dynamoql-site/docs/model/API/batchDelete"}},o={},c=[{value:"Introduction",id:"introduction",level:3},{value:"Create a Model",id:"create-a-model",level:3},{value:"simple example",id:"simple-example",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(n.p,{children:"The DynamoQL Model class encompasses all the essential DynamoDB commands required for seamless table interaction. With an exceptionally high level of typing, the Model class eliminates the need to constantly switch between tabs in your DynamoDB documentation while working with the database."}),"\n",(0,r.jsx)(n.p,{children:"When interacting with a table through DynamoQL, the advantages of TypeScript become apparent. You can precisely anticipate what will be written or retrieved from a table even before sending the actual request, alleviating potential headaches associated with data inconsistencies."}),"\n",(0,r.jsx)(n.p,{children:"The overarching objective of DynamoQL is to enhance the developer experience by providing robust type safety for your items without incurring additional costs."}),"\n",(0,r.jsx)(n.h3,{id:"create-a-model",children:"Create a Model"}),"\n",(0,r.jsxs)(n.p,{children:["To create a ",(0,r.jsx)(n.code,{children:"Model"})," all we need is:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Table name"}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/category/schema",children:"Schema"})}),"\n",(0,r.jsx)(n.li,{children:"config for @aws-sdk/client-dynamodb (v3)"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { Schema, Model } from "dynamoql";\n\nconst userSchema = new Schema({\n  id: {\n    type: String,\n    primaryIndex: true,\n  },\n  age: Number,\n  firstname: {\n    type: String,\n    required: true,\n    capitalize: true\n  },\n  isActive: {\n    type: Boolean,\n  },\n  sex: {\n    type: String,\n    required: true,\n    enum: ["female", "male"],\n  },\n  friends: {\n    type: Array,\n    items: String,\n  },\n  data: [Number, String, { type: Set, items: String }]\n} as const);\n\nconst clientConfig = { region: "eu-west-3", endpoint: "http://localhost:8000" };\n\n // highlight-next-line\nexport const User = new Model("user-table", userSchema, clientConfig)\n'})}),"\n",(0,r.jsx)(n.p,{children:"Once defined, your Model instance exposes following methods to interact with your DynamoDB table:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/batchDelete",children:"batchDelete"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/batchGet",children:"batchGet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/batchPut",children:"batchPut"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/batchWrite",children:"batchWrite"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/delete",children:"delete"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/get",children:"get"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/put",children:"put"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/query",children:"query"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/scan",children:"scan"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/transactDelete",children:"transactDelete"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/transactGet",children:"transactGet"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/transactPut",children:"transactPut"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/transactUpdate",children:"transactUpdate"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/transactWrite",children:"transactWrite"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"./API/update",children:"update"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"./API/using%20LSI%20-%20GSI",children:"using"})," LSI / GSI"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"simple-example",children:"simple example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'await User.batchDelete(["user-1", "user-2"])\n'})}),"\n",(0,r.jsx)(n.p,{children:"the same request with aws-sdk:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { DynamoDBClient, BatchWriteItemCommand } from "@aws-sdk/client-dynamodb";\n\nconst client = new DynamoDBClient({\n  region: "eu-west-3",\n  endpoint: "http://localhost:8000",\n});\n\nconst cmd = new BatchWriteItemCommand({\n  RequestItems: {\n    "user-table": [\n      {\n        DeleteRequest: {\n          Key: {\n            id: {\n              S: "user-1",\n            },\n          },\n        },\n      },\n      {\n        DeleteRequest: {\n          Key: {\n            id: {\n              S: "user-2",\n            },\n          },\n        },\n      },\n    ],\n  },\n});\n\nawait client.send(cmd);\n'})}),"\n",(0,r.jsx)(n.admonition,{title:"documentation",type:"note",children:(0,r.jsx)(n.p,{children:"To not duplicate Schema declarations, all documentations in API section will use Schema defined in introduction as example."})}),"\n",(0,r.jsxs)(n.p,{children:["In addition to storage related methods, Model class expose ",(0,r.jsx)(n.code,{children:"client"})," and ",(0,r.jsx)(n.code,{children:"table"})," properties."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"client"})," is DynamoDBClient initialized with your provided config."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"table"})," is an object which expose ",(0,r.jsx)(n.code,{children:"name"})," (table's name)  ",(0,r.jsx)(n.code,{children:"create"}),", ",(0,r.jsx)(n.code,{children:"delete"}),", ",(0,r.jsx)(n.code,{children:"describe"})," and ",(0,r.jsx)(n.code,{children:"update"})," methods."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"They are usefull specially when writing integration tests."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import { User } from "../src/model/user";\n\ndescribe("Testing my table", () => {\n  beforeAll(async () => {\n    try {\n      await User.table.delete();\n    } catch (error) {}\n\n    await User.table.create();\n  });\n});\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var r=t(512);const a={tabItem:"tabItem_Ymn6"};var l=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),a=t(512),l=t(2466),i=t(6550),s=t(469),o=t(1980),c=t(7392),d=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=h(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:l}))),[c,u]=p({queryString:t,groupId:a}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,d.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:l})?e:null})();(0,s.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),x(e)}),[u,x,l]),tabValues:l}}var x=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function g(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const n=e.currentTarget,t=o.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:l}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,a.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function v(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,{...e,...n}),(0,j.jsx)(y,{...e,...n})]})}function w(e){const n=(0,x.Z)();return(0,j.jsx)(v,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(7294);const a={},l=r.createContext(a);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);