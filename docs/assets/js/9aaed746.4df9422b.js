"use strict";(self.webpackChunkdynamo_ql=self.webpackChunkdynamo_ql||[]).push([[4645],{3330:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var i=r(5893),t=r(1151),s=r(4866),a=r(5162);const d={},l=void 0,o={id:"schema/data-types/Array",title:"Array",description:"Introduction",source:"@site/docs/schema/data-types/02-Array.mdx",sourceDirName:"schema/data-types",slug:"/schema/data-types/Array",permalink:"/dynamoql-site/docs/schema/data-types/Array",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Any",permalink:"/dynamoql-site/docs/schema/data-types/Any"},next:{title:"BigInt",permalink:"/dynamoql-site/docs/schema/data-types/BigInt"}},c={},h=[{value:"Introduction",id:"introduction",level:3},{value:"Define an Array",id:"define-an-array",level:3},{value:"Options",id:"options",level:3},{value:"- required",id:"--required",level:3},{value:"- default",id:"--default",level:3},{value:"- validate",id:"--validate",level:3},{value:"- set",id:"--set",level:3},{value:"- get",id:"--get",level:3},{value:"- description",id:"--description",level:3},{value:"Condition expression",id:"condition-expression",level:3},{value:"- equals",id:"--equals",level:3},{value:"- not equals",id:"--not-equals",level:3},{value:"- attribute exists",id:"--attribute-exists",level:3},{value:"- includes",id:"--includes",level:3},{value:"- array length",id:"--array-length",level:3},{value:"- attribute type",id:"--attribute-type",level:3},{value:"- child condition",id:"--child-condition",level:3},{value:"- AND",id:"--and",level:3},{value:"- OR",id:"--or",level:3},{value:"- NOT",id:"--not",level:3},{value:"Update expressions",id:"update-expressions",level:3},{value:"- set",id:"--set-1",level:3},{value:"- if not exists",id:"--if-not-exists",level:3},{value:"- push",id:"--push",level:3},{value:"- unshift",id:"--unshift",level:3},{value:"- remove",id:"--remove",level:3},{value:"- update array element",id:"--update-array-element",level:3}];function u(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Array"}),' represents DynamoDB\'s List data type (marshalled as "L") for DynamoQL.',(0,i.jsx)(n.br,{}),"\n","Every ",(0,i.jsx)(n.code,{children:"Array"})," type must be defined with its ",(0,i.jsx)(n.code,{children:"items"})," type.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"items"})," can be any DynamoQL type."]}),"\n",(0,i.jsx)(n.h3,{id:"define-an-array",children:"Define an Array"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,{value:"dql",label:"DynamoQL",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\n const userSchema = new Schema({\n  id: {\n    type: String,\n    primaryIndex: true,\n    default: randomUUID\n  },\n  friendId: {\n    // highlight-start\n    type: Array,\n    items: String\n    // highlight-end\n  }\n } as const);\n'})})}),(0,i.jsx)(a.Z,{value:"ts",label:"produced type",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface IUserSchema {\n    id: string,\n    friendId?: string[]\n}\n"})})})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"items"})," can also be a union type."]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(a.Z,{value:"dql",label:"DynamoQL",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\n const userSchema = new Schema({\n  id: {\n    type: String,\n    primaryIndex: true,\n    default: randomUUID\n  },\n  friendId: {\n    type: Array,\n    // highlight-next-line\n    items: [String, Number]\n  }\n } as const);\n'})})}),(0,i.jsx)(a.Z,{value:"ts",label:"produced type",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:"interface IUserSchema {\n    id: string,\n    friendId?: (string | number)[]\n}\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h3,{id:"--required",children:"- required"}),"\n",(0,i.jsxs)(n.p,{children:["boolean which makes attribute as required or optionnal, default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\n const userSchema = new Schema({\n  id: {\n    type: String,\n    primaryIndex: true,\n    default: randomUUID\n  },\n  friendId: {\n    type: Array,\n    items: String,\n    // highlight-next-line\n    required: true\n  }\n } as const);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--default",children:"- default"}),"\n",(0,i.jsxs)(n.p,{children:["To set a default value for an attribute use ",(0,i.jsx)(n.code,{children:"default"})," option."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\n const userSchema = new Schema({\n  id: {\n    type: String,\n    primaryIndex: true,\n    default: randomUUID\n  },\n  friendId: {\n    type: Array,\n    items: String,\n    // highlight-next-line\n    default: []\n  }\n } as const);\n'})}),"\n",(0,i.jsxs)(n.p,{children:["With this configuration when you ",(0,i.jsx)(n.code,{children:"put"})," an Item into your table, your Item will contain friendId attribute with an empty array."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"default"})," value's type must match defined Array's type.",(0,i.jsx)(n.br,{}),"\n","Otherwise it will throw an error during dev time and runtime."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\nconst userSchema = new Schema({\n id: {\n   type: String,\n   primaryIndex: true,\n   default: randomUUID\n },\n friendId: {\n   type: Array,\n   items: String,\n   // err\n   default: [5] // DynamoQLInvalidTypeException: "friendId[0]" expected to be "S" received "N".\n }\n} as const);\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"default"})," can also be a (async) function which accepts one argument (put Item value) and must return an array of defined type."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\nconst userSchema = new Schema({\nid: {\n  type: String,\n  primaryIndex: true,\n  default: randomUUID\n},\n// highlight-next-line\nmoderator: Boolean,\nfriendId: {\n  type: Array,\n  items: String,\n  // highlight-start\n  default: (item: Record<string, any>)=> {\n      if(item.moderator) {\n          return ["admin-id"]\n      }\n      return []\n  }\n  // highlight-end\n}\n} as const);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--validate",children:"- validate"}),"\n",(0,i.jsxs)(n.p,{children:["validate option allows you to manually validate provided value in ",(0,i.jsx)(n.code,{children:"put"})," and ",(0,i.jsx)(n.code,{children:"update"})," commands.",(0,i.jsx)(n.br,{}),"\n","To return an error you should return a string which explains value invalidity. Any other returned value is considered as valid."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\nconst userSchema = new Schema({\nid: {\n  type: String,\n  primaryIndex: true,\n  default: randomUUID\n},\nmoderator: Boolean,\nfriendId: {\n  type: Array,\n  items: String,\n  // highlight-start\n  validate: (self: string[])=> {\n      if(self.length > 10) {\n          return "Error: Can not have more than 10 friends."\n      }\n  }\n  // highlight-end\n}\n} as const);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--set",children:"- set"}),"\n",(0,i.jsxs)(n.p,{children:["To modify a value before storing it use ",(0,i.jsx)(n.code,{children:"set"})," option.",(0,i.jsx)(n.br,{}),"\n","set (async) function accepts 3 arguments:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"self"})," provided value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"item"})," entier put Item object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"setterInfo"})," an optionnal value provided inside in put, batchPut, batchWrite, transactWrite command's options."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"set"})," will not be called if attribute doesn't exists in put Item object."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\nconst userSchema = new Schema({\nid: {\n  type: String,\n  primaryIndex: true,\n  default: randomUUID\n},\nmoderator: Boolean,\nfriendId: {\n  type: Array,\n  items: String,\n  // highlight-start\n  set: (self: string[], item: Record<string, any>, setterInfo?: any)=> {\n\n      if(item.moderator && setterInfo?.someCondition) {\n       return ["a-1234567890"]\n      }\n\n      return self\n  }\n  // highlight-end\n}\n} as const);\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--get",children:"- get"}),"\n",(0,i.jsx)(n.p,{children:"When reteving an Item we can transform field's value with get option."}),"\n",(0,i.jsx)(n.p,{children:"get (async) function accepts 3 arguments:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"self"})," retrieved value."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"item"})," entier retrieved Item object."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"getterInfo"})," an optionnal value provided inside get, batchGet, transactGet, query, scan command's options."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," can return anything.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"get"})," will not be called if attribute doesn't exists in stored Item."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-ts",children:'import { Schema } from "dynamoql";\nimport { randomUUID } from "crypto";\n\nconst userSchema = new Schema({\nid: {\n  type: String,\n  primaryIndex: true,\n  default: randomUUID\n},\nmoderator: Boolean,\nfriendId: {\n  type: Array,\n  items: String,\n  // highlight-start\n  get: (self: string[], item: Record<string, any>, getterInfo?: any)=> {\n       return self.map(x=> doSomething(x))\n  }\n  // highlight-end\n}\n} as const);\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"get"})," returned value's type affects Item type when retriving Item(s) from DynamoDB."]})}),"\n",(0,i.jsx)(n.h3,{id:"--description",children:"- description"}),"\n",(0,i.jsx)(n.p,{children:"add any information to the Schema for your personal usage."}),"\n",(0,i.jsx)(n.h3,{id:"condition-expression",children:"Condition expression"}),"\n",(0,i.jsxs)(n.p,{children:["Condition expression are not part of Schema but they are based on your defined Schema.",(0,i.jsx)(n.br,{}),"\n","They are used in various DynamoDB operations to check for some condition(s).",(0,i.jsx)(n.br,{}),"\n","DynamoQL supports all DynamoDB Condition expression."]}),"\n",(0,i.jsx)(n.h3,{id:"--equals",children:"- equals"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: ["admin"]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $eq: ["admin"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--not-equals",children:"- not equals"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $neq: ["admin"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--attribute-exists",children:"- attribute exists"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$exists"})," can be ",(0,i.jsx)(n.code,{children:"true"})," or ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    // highlight-next-line\n    $exists: true\n  }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"--includes",children:"- includes"}),"\n",(0,i.jsx)(n.p,{children:"Checks if stored array contains provided value."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $includes: "admin"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--array-length",children:"- array length"}),"\n",(0,i.jsx)(n.p,{children:"Checks for stored array's length."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    // highlight-next-line\n    $size: 1\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$size"})," can also be any valid numeric comparison operator."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    $size: {\n      // highlight-next-line\n      $gt: 0\n    }\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Possible operators are ",(0,i.jsx)(n.a,{href:"./Number#--equals",children:"$eq"}),", ",(0,i.jsx)(n.a,{href:"./Number#--not-equals",children:"$neq"}),", ",(0,i.jsx)(n.a,{href:"./Number#--greather-than",children:"$gt"}),", ",(0,i.jsx)(n.a,{href:"./Number#--greather-than-or-equal",children:"$gte"}),", ",(0,i.jsx)(n.a,{href:"./Number#--little-than",children:"$lt"}),", ",(0,i.jsx)(n.a,{href:"./Number#--little-than-or-equal",children:"$lte"}),", ",(0,i.jsx)(n.a,{href:"./Number#--in",children:"$in"}),", ",(0,i.jsx)(n.a,{href:"./Number#--between",children:"$between"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"--attribute-type",children:"- attribute type"}),"\n",(0,i.jsx)(n.p,{children:"Checks for stored attribute type."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    // highlight-next-line\n    $type: Array\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$type"})," can be String, Number, Boolean, Null, Buffer, Object, Array, or ",(0,i.jsx)(n.code,{children:"{type: Set, items: String | Number | Buffer }"})]}),"\n",(0,i.jsx)(n.h3,{id:"--child-condition",children:"- child condition"}),"\n",(0,i.jsxs)(n.p,{children:["Sometimes we need to verify a condition on a specific item of array.",(0,i.jsx)(n.br,{}),"\n","Accessing child element is possible with 2 styles."]}),"\n",(0,i.jsx)(n.p,{children:"DynamoDB style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  // highlight-next-line\n  "friendId[9]": "admin"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"DynamoQL style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    "[9]": "admin"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to your defined Array ",(0,i.jsx)(n.code,{children:"items"})," type for more condition.",(0,i.jsx)(n.br,{}),"\n","In our example it will be ",(0,i.jsx)(n.a,{href:"./String#condition-expression",children:"String"})]}),"\n",(0,i.jsx)(n.h3,{id:"--and",children:"- AND"}),"\n",(0,i.jsx)(n.p,{children:"Checks for multiple conditions. Condition is valid if ALL specified conditions are satisfied."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-start\n    $and: [\n      {\n        $size: 6\n      },\n      {\n        $includes: "admin"\n      }\n    ]\n    // highlight-end\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"shorthand style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    $size: 6,\n    $includes: "admin"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--or",children:"- OR"}),"\n",(0,i.jsx)(n.p,{children:"Checks for multiple conditions. Condition is valid if at least one of specified conditions is satisfied."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-start\n    $or: [\n      {\n        $size: 6\n      },\n      {\n        $includes: "admin"\n      }\n    ]\n     // highlight-end\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--not",children:"- NOT"}),"\n",(0,i.jsx)(n.p,{children:"Condition is valid if specified condition is NOT satisfied."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $not: {\n      $includes: "admin"\n    }\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$not"})," accepts any Condition expression."]}),"\n",(0,i.jsx)(n.p,{children:"When multiple conditions are provided inside $not: {} they are considered as $and condition."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    $not: {\n      // highlight-start\n      $size: 6,\n      $includes: "admin"\n      // highlight-end\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"longhand equivalent is:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    $not: {\n      // highlight-start\n      $and: [\n        {\n          $size: 6\n        },\n        {\n          $includes: "admin"\n        }\n      ]\n      // highlight-end\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"update-expressions",children:"Update expressions"}),"\n",(0,i.jsx)(n.p,{children:"Like Condition expression, Update expressions are not part of Schema, but they are based on defined Schema."}),"\n",(0,i.jsxs)(n.p,{children:["Update expressions are used in ",(0,i.jsx)(n.code,{children:"update"}),", ",(0,i.jsx)(n.code,{children:"transactUpdate"})," and ",(0,i.jsx)(n.code,{children:"transactWrite"})," operations."]}),"\n",(0,i.jsx)(n.p,{children:"DynamoQL supports all DynamoDB update operations."}),"\n",(0,i.jsx)(n.h3,{id:"--set-1",children:"- set"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$set"})," replaces stored array by provided array."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $set: ["admin"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"shorthand version is"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: ["admin"]\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"To update a specific item in stored array provide item index in your key path:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "friendId[0]": "admin"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"or with DynamoQL style"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    "[0]": "admin"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to your defined Array ",(0,i.jsx)(n.code,{children:"items"})," type for more operations."]}),"\n",(0,i.jsx)(n.h3,{id:"--if-not-exists",children:"- if not exists"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$ifNotExists"})," sets provided array if attribute do not exists in stored item.",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.code,{children:"$ifNotExists"})," dont affects Condition expression and is attribute specific.",(0,i.jsx)(n.br,{}),"\n","If attribute exists, stored value stays unchanged."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $ifNotExists: ["admin"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--push",children:"- push"}),"\n",(0,i.jsx)(n.p,{children:"inserts provided value(s) at the end of stored array."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $push: "admin"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"push multiple values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $push: ["admin", "guest"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--unshift",children:"- unshift"}),"\n",(0,i.jsx)(n.p,{children:"inserts provided value(s) at the beginning of stored array."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $unshift: "admin"\n  }\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"unshift multiple values."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    // highlight-next-line\n    $unshift: ["admin", "guest"]\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"--remove",children:"- remove"}),"\n",(0,i.jsx)(n.p,{children:"removes item(s) from stored array by index or indices."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    // highlight-next-line\n    $remove: 4\n  }\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"remove multiple items."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:"{\n  friendId: {\n    // highlight-next-line\n    $remove: [1, 4]\n  }\n}\n"})}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.p,{children:["You can not use multiple operations on the same attribute.",(0,i.jsx)(n.br,{}),"\n","This is DynamoDB limitation."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    $remove: 4,\n     // err\n    $push: "admin"\n  }\n}\n'})})]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"During update operations provided values are validated against defined Schema, with TLS for better developper experience and during runtime for type safety."})}),"\n",(0,i.jsx)(n.h3,{id:"--update-array-element",children:"- update array element"}),"\n",(0,i.jsxs)(n.p,{children:["Like with ",(0,i.jsx)(n.a,{href:"#--child-condition",children:"Child condition"})," you can update a specific item in array with its index."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "friendId[4]": "admin"\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"or"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  friendId: {\n    "[4]": "admin"\n  }\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Please refer to your defined Array ",(0,i.jsx)(n.code,{children:"items"})," type for more update operations.",(0,i.jsx)(n.br,{}),"\n","In our example it will be ",(0,i.jsx)(n.a,{href:"./String#update-expressions",children:"String"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},5162:(e,n,r)=>{r.d(n,{Z:()=>a});r(7294);var i=r(512);const t={tabItem:"tabItem_Ymn6"};var s=r(5893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(t.tabItem,a),hidden:r,children:n})}},4866:(e,n,r)=>{r.d(n,{Z:()=>I});var i=r(7294),t=r(512),s=r(2466),a=r(6550),d=r(469),l=r(1980),o=r(7392),c=r(12);function h(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:i,default:t}}=e;return{value:n,label:r,attributes:i,default:t}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function m(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const t=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,l._X)(s),(0,i.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function x(e){const{defaultValue:n,queryString:r=!1,groupId:t}=e,s=u(e),[a,l]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:s}))),[o,h]=p({queryString:r,groupId:t}),[x,j]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,c.Nk)(r);return[t,(0,i.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:t}),f=(()=>{const e=o??x;return m({value:e,tabValues:s})?e:null})();(0,d.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,s]),tabValues:s}}var j=r(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function y(e){let{className:n,block:r,selectedValue:i,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),c=e=>{const n=e.currentTarget,r=l.indexOf(n),t=d[r].value;t!==i&&(o(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;n=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;n=l[r]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.Z)("tabs",{"tabs--block":r},n),children:d.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...s,className:(0,t.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":i===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:t}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function b(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,t.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(y,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function I(e){const n=(0,j.Z)();return(0,g.jsx)(b,{...e,children:h(e.children)},String(n))}},1151:(e,n,r)=>{r.d(n,{Z:()=>d,a:()=>a});var i=r(7294);const t={},s=i.createContext(t);function a(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);