(this.webpackJsonpfeedback=this.webpackJsonpfeedback||[]).push([[0],[,,function(e,t,n){e.exports={btn:"feedback_btn__1iNNE"}},,,,,,function(e,t,n){e.exports={list:"statistic_list__DjrNC"}},function(e,t,n){e.exports={section:"section_section__31g01"}},,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),i=n(4),s=n.n(i),o=(n(16),n(5)),r=n(6),l=n(7),d=n(11),b=n(10),u=n(2),j=n.n(u),v=n(0);function h(e){var t=e.feedback;return Object(v.jsxs)("div",{className:j.a.btns,children:[Object(v.jsx)("button",{type:"button",className:j.a.btn,onClick:function(){return t("good")},children:"Good"}),Object(v.jsx)("button",{type:"button",className:j.a.btn,onClick:function(){return t("neutral")},children:"Neutral"}),Object(v.jsx)("button",{type:"button",className:j.a.btn,onClick:function(){return t("bad")},children:"Bad"})]})}var f=n(8),O=n.n(f);function x(e){var t=e.good,n=void 0===t?0:t,c=e.neutral,a=void 0===c?0:c,i=e.bad,s=void 0===i?0:i,o=e.total,r=void 0===o?0:o,l=e.positivePercentage,d=void 0===l?"0":l;return Object(v.jsxs)("ul",{className:O.a.list,children:[Object(v.jsxs)("li",{children:["Good: ",n]}),Object(v.jsxs)("li",{children:["Neutral: ",a]}),Object(v.jsxs)("li",{children:["Bad: ",s]}),Object(v.jsxs)("li",{children:["Total: ",r]}),Object(v.jsxs)("li",{children:["Positive feedback: ",d,"%"]})]})}var k=n(9),p=n.n(k);function N(e){var t=e.title,n=void 0===t?"Title":t,c=e.children;return Object(v.jsxs)("div",{className:p.a.section,children:[Object(v.jsx)("h2",{children:n}),c]})}n(18);var g=function(e){Object(d.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={good:0,neutral:0,bad:0},e.totalFeedaback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}))},e.positiveFeedback=function(e,t){return(t/e*100).toFixed(2)},e.leaveFeedback=function(t){e.setState((function(e){return Object(o.a)({},t,e[t]+1)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.state,t=e.good,n=e.bad,c=e.neutral,a=this.totalFeedaback(),i=this.positiveFeedback(a,this.state.good);return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(N,{title:"Please leave feeaback",children:Object(v.jsx)(h,{feedback:this.leaveFeedback})}),Object(v.jsx)(N,{title:"Statistic",children:a>0?Object(v.jsx)(x,{good:t,neutral:c,bad:n,total:a,positivePercentage:i}):"No feedback"})]})}}]),n}(c.Component);s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(g,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.57ee5743.chunk.js.map