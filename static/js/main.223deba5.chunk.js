(this["webpackJsonpreact_tabs-js"]=this["webpackJsonpreact_tabs-js"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(3),a=n.n(c),i=n(5),s=n(1),d=(n(10),n(11),n(12),n(4)),b=n.n(d),r=n(0),o=function(t){var e=t.tabs,n=t.selectedTabId,c=t.onTabSelected,a=e.some((function(t){return t.id===n}))?n:e[0].id,i=e.find((function(t){return t.id===a})).content;return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){var e=t.id,n=t.title,i=e===a;return Object(r.jsx)("li",{className:b()({"is-active":i}),"data-cy":"Tab",children:Object(r.jsx)("a",{onClick:function(){return!i&&c(t)},href:"#".concat(e),"data-cy":"TabLink",children:n})},e)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:i})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(l[0].id),e=Object(i.a)(t,2),n=e[0],c=e[1],a=l.find((function(t){return t.id===n})).title;return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(a)}),Object(r.jsx)(o,{tabs:l,selectedTabId:n,onTabSelected:function(t){return function(t){c(t.id)}(t)}})]})};a.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.223deba5.chunk.js.map