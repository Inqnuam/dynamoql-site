"use strict";(self.webpackChunkdynamo_ql=self.webpackChunkdynamo_ql||[]).push([[2894],{1865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=t(5893),i=t(1151);const a={},r=void 0,o={id:"model/API/batchWrite",title:"batchWrite",description:"Introduction",source:"@site/docs/model/API/batchWrite.mdx",sourceDirName:"model/API",slug:"/model/API/batchWrite",permalink:"/dynamoql-site/docs/model/API/batchWrite",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"batchPut",permalink:"/dynamoql-site/docs/model/API/batchPut"},next:{title:"delete",permalink:"/dynamoql-site/docs/model/API/delete"}},c={},d=[{value:"Introduction",id:"introduction",level:3},{value:"execute",id:"execute",level:3},{value:"options",id:"options",level:3},{value:"exec",id:"exec",level:4},{value:"setterInfo",id:"setterinfo",level:4}];function l(e){const n={a:"a",br:"br",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"batchWrite"})," method performs batch put and batch delete request using aws-sdk ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/command/BatchWriteItemCommand/",children:"BatchWriteItemCommand"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In addition to BatchWriteItemCommandOutput ",(0,s.jsx)(n.code,{children:"batchWrite"})," response will include ",(0,s.jsx)(n.code,{children:"Items"})," which is fully typed based on your Schema declaration.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.code,{children:"Items"})," is usefull as your Schema may include ",(0,s.jsx)(n.code,{children:"default"}),", ",(0,s.jsx)(n.code,{children:"set"})," or other transformer options."]}),"\n",(0,s.jsx)(n.h3,{id:"execute",children:"execute"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"batchWrite"})," takes 2 arguments:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"object with put and/or delete Items"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#options",children:"options"})," (optionnal)"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"any invalid value in put Item will lead to dev time and runtime error"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const res = await User.batchWrite(\n  {\n    delete: ["user-24", "user-61"],\n    put: [\n      {\n        id: "user-1",\n        age: 27,\n        firstname: "John",\n        sex: "male",\n        data: "something",\n      },\n      {\n        id: "user-2",\n        age: 22,\n        firstname: "Sara",\n        sex: "female",\n        data: "something",\n        friends: ["user-1"],\n        isActive: false,\n      },\n      {\n        id: "user-3",\n        age: 461,\n        firstname: "E.T.,",\n        // err\n        sex: "not human", // Type \'"not human"\' is not assignable to type \'"male" | "female"\'.\n        data: "something",\n      },\n    ],\n  },\n  { ReturnConsumedCapacity: "TOTAL" }\n);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"options"})," is an object which accepts ",(0,s.jsx)(n.code,{children:"BatchWriteItemCommandInput"})," options and DynamoQL specific options."]}),"\n",(0,s.jsx)(n.h4,{id:"exec",children:"exec"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"exec"})," boolean directive to execute or not the actual request.",(0,s.jsx)(n.br,{}),"\n","When ",(0,s.jsx)(n.code,{children:"false"})," batchWrite will return ",(0,s.jsx)(n.code,{children:"BatchWriteItemCommandInput"})," object."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'import type { BatchWriteItemCommandInput } from "@aws-sdk/client-dynamodb";\n\nconst cmd: BatchWriteItemCommandInput = await User.batchWrite(\n  {\n    delete: ["user-24", "user-61"],\n    put: [\n      {\n        id: "user-1",\n        age: 27,\n        firstname: "John",\n        sex: "male",\n        data: "something",\n      },\n      {\n        id: "user-2",\n        age: 22,\n        firstname: "Sara",\n        sex: "female",\n        data: "something",\n        friends: ["user-1"],\n        isActive: false,\n      }\n    ]\n  },\n   // highlight-next-line\n  { exec: false }\n);\n'})}),"\n",(0,s.jsx)(n.h4,{id:"setterinfo",children:"setterInfo"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"setterInfo"})," allows you to pass any value to your Schema ",(0,s.jsx)(n.a,{href:"/docs/schema/data-types/String#--set",children:"set"})," function's third argument."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ts",children:'const res = await User.batchWrite(\n  {\n    delete: ["user-24", "user-61"],\n    put: [\n      {\n        id: "user-1",\n        age: 27,\n        firstname: "John",\n        sex: "male",\n        data: "something",\n      },\n      {\n        id: "user-2",\n        age: 22,\n        firstname: "Sara",\n        sex: "female",\n        data: "something",\n        friends: ["user-1"],\n        isActive: false,\n      }\n    ]\n  },\n  // highlight-next-line\n  { setterInfo: { generateHash: true } }\n);\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(7294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);