"use strict";(self.webpackChunkdynamo_ql=self.webpackChunkdynamo_ql||[]).push([[1613],{8224:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=t(5893),s=t(1151);const o={},i=void 0,c={id:"model/API/query",title:"query",description:"Introduction",source:"@site/docs/model/API/query.mdx",sourceDirName:"model/API",slug:"/model/API/query",permalink:"/dynamoql-site/docs/model/API/query",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"put",permalink:"/dynamoql-site/docs/model/API/put"},next:{title:"scan",permalink:"/dynamoql-site/docs/model/API/scan"}},d={},l=[{value:"Introduction",id:"introduction",level:3},{value:"execute",id:"execute",level:3},{value:"options",id:"options",level:3},{value:"exec",id:"exec",level:4},{value:"Select",id:"select",level:4},{value:"getterInfo",id:"getterinfo",level:4}];function a(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"query"})," method performs query request using aws-sdk ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/client/dynamodb/command/QueryCommand/",children:"QueryCommand"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Items"})," in QueryCommandOutput is fully typed based on your Schema declaration."]}),"\n",(0,r.jsx)(n.h3,{id:"execute",children:"execute"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"query"})," takes 2 arguments:"]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["(required) an object which includes:","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["item ",(0,r.jsx)(n.code,{children:"primaryIndex"})]}),"\n",(0,r.jsx)(n.li,{children:"optionnally KeyConditionExpression"}),"\n",(0,r.jsxs)(n.li,{children:["optionnally ",(0,r.jsx)(n.a,{href:"/docs/schema/data-types/String#condition-expression",children:"Condition expression"})," which will perform ",(0,r.jsx)(n.code,{children:"FilterExpression"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#options",children:"options"})," (optionnal)"]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const res = await User.query(\n  {\n    groupId: "group-1", // Schema primaryIndex\n     // Schema sortKey\n    userId: {\n      $startsWith: "user-",\n    },\n    // FilterExpression\n    age: { \n        $gt: 22 \n    }\n  },\n  { ReturnConsumedCapacity: "TOTAL" }\n);\n\nres.Items[0].firstname;\n'})}),"\n",(0,r.jsx)(n.h3,{id:"options",children:"options"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"options"})," is an object which accepts ",(0,r.jsx)(n.code,{children:"QueryCommandInput"})," options and DynamoQL specific options."]}),"\n",(0,r.jsx)(n.h4,{id:"exec",children:"exec"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"exec"})," boolean directive to execute or not the actual request.",(0,r.jsx)(n.br,{}),"\n","When ",(0,r.jsx)(n.code,{children:"false"})," query will return ",(0,r.jsx)(n.code,{children:"QueryCommandInput"})," object."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'import type { QueryCommandInput } from "@aws-sdk/client-dynamodb";\n\nconst cmd: QueryCommandInput = await User.query(\n  {\n    groupId: "group-1"\n  },\n  // highlight-next-line\n  { exec: false }\n);\n'})}),"\n",(0,r.jsx)(n.h4,{id:"select",children:"Select"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Select"})," accepts an array of attributes which produces a ",(0,r.jsx)(n.code,{children:"ProjectionExpression"}),", or ",(0,r.jsx)(n.code,{children:'"ALL"'})," | ",(0,r.jsx)(n.code,{children:'"COUNT"'}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const res = await User.query(\n  {\n    groupId: "group-1"\n  },\n  // highlight-next-line\n  { Select: ["id", "isActive"] }\n);\n\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Select"})," affects QueryCommandOutput type."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const { Items } = await User.query(\n  {\n    groupId: "group-1",\n  },\n  { Select: ["id", "isActive"] }\n);\n\n// err\nItems[0].firstname; // Property \'firstname\' does not exist on type { id: string; isActive?:boolean } ...\n'})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const res = await User.query(\n  {\n    groupId: "group-1",\n  },\n  { Select: "COUNT" }\n);\n\n// err\nres.Items; // Property \'Items\' does not exist on type QueryCommandOutput\n'})})]}),"\n",(0,r.jsx)(n.h4,{id:"getterinfo",children:"getterInfo"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"getterInfo"})," allows you to pass any value to your Schema ",(0,r.jsx)(n.a,{href:"/docs/schema/data-types/String#--get",children:"get"})," function's third argument."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-ts",children:'const res = await User.query(\n  {\n    groupId: "group-1",\n  },\n  // highlight-next-line\n  { getterInfo: { forFrontend: true } }\n);\n'})})]})}function u(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>i});var r=t(7294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);