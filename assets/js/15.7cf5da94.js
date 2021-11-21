(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{366:function(e,t,n){"use strict";n.r(t);var a=n(38),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"environment-variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#environment-variables"}},[e._v("#")]),e._v(" Environment Variables")]),e._v(" "),n("p",[e._v("Environment variables (URLs, authentication tokens, some other headers, etc) can be used to easily switch between various working environments (e.g. switching between local, staging and production environments).")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/5756/1*eCxSCJadudYfUYoPRpkSkA.png",alt:""}})]),e._v(" "),n("p",[e._v("The environment variables can be defined in Environments (found in the top right corner in the header). An environment is simply a list of variables that can be used within the interface of the app. After an environment is created, you need to select it from the list of environments for it to be active.")]),e._v(" "),n("p",[e._v("After defining your environment variables, you can use them using the double curly braces syntax "),n("code",{pre:!0},[e._v("{{env_var}}")]),e._v(". In the screenshot below, the swapi variable is used in the URL bar using "),n("code",{pre:!0},[e._v("{{swapi}}")]),e._v(".")]),e._v(" "),n("p",[n("img",{attrs:{src:"https://miro.medium.com/max/5760/1*4FkypN32B8E1K9mJHoKaWA.png",alt:"altair"}})]),e._v(" "),n("p",[e._v("You can also access nested environment variables using the object dot notation.")]),e._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"meta"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"env"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"staging"')]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("Given the environment payload above, you can use the "),n("code",[e._v("env")]),e._v(" variable by using "),n("code",{pre:!0},[e._v("{{meta.env}}")]),e._v(".")]),e._v(" "),n("p",[e._v("Now you can easily test your GraphQL implementations across all your environments by just changing the environment you’re currently working with (instead of having to go to all the tabs to change the URLs and tokens 🤢).")]),e._v(" "),n("p",[e._v("While you can create an environment, there is also the "),n("strong",[e._v("Global environment")]),e._v(" which doesn't need to be selected to be active. If an environment is selected, the environment is merged (shallow merge) with whatever is set in the Global environment. If no environment is selected, only the environment variables in the Global environment can be used.")]),e._v(" "),n("h3",{attrs:{id:"special-environment-variables"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#special-environment-variables"}},[e._v("#")]),e._v(" Special environment variables")]),e._v(" "),n("p",[n("strong",[e._v("headers")]),e._v(" - If you specify a "),n("code",[e._v("headers")]),e._v(" payload in any of the environments (including Global environment), the headers you specify there would be set for all requests sent from all the tabs.")]),e._v(" "),n("div",{staticClass:"language-json extra-class"},[n("pre",{pre:!0,attrs:{class:"language-json"}},[n("code",[n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"headers"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[e._v('"X-Api-Token"')]),n("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[e._v('"12345"')]),e._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),n("p",[e._v("For example given the environment above, every request sent in Altair would have the "),n("code",[e._v("X-Api-Token")]),e._v(" header set to "),n("code",[e._v("12345")]),e._v(".")])])}),[],!1,null,null,null);t.default=s.exports}}]);