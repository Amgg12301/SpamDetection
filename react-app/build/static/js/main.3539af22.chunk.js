(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{18:function(e,t,s){},19:function(e,t,s){},23:function(e,t,s){"use strict";s.r(t);var c=s(5),a=s(0),n=s.n(a),r=s(11),i=s.n(r),o=(s(18),s(19),s(6));var l=function(e){var t="Input a message to see the magic!",s="\ud83e\udd14";return"ham"===e.type?(t="This is HAM aka not spam!",s="\ud83e\udd29"):"spam"===e.type&&(t="This is SPAM, please be careful!!",s="\ud83d\ude21"),Object(c.jsxs)("div",{className:"result",children:[Object(c.jsx)("h2",{children:"What type of message is this?"}),Object(c.jsx)("p",{className:"emoji",children:s}),Object(c.jsx)("p",{className:"message",children:t})]})},j=s(25),h=s(26);var u=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),s=t[0],n=t[1],r=Object(a.useState)(""),i=Object(o.a)(r,2),u=i[0],b=i[1],d=Object(a.useState)(94.67703349282297),p=Object(o.a)(d,2),m=p[0],O=p[1];return Object(c.jsxs)("div",{className:"inner",children:[Object(c.jsx)("div",{className:"textbox",children:Object(c.jsxs)(j.a,{onSubmit:function(e){e.preventDefault(),""===s&&alert("Must be a non-empty message!"),console.log(s),fetch("/results",{method:"POST",cache:"no-cache",headers:{content_type:"application/json"},body:JSON.stringify(s)}).then((function(e){return e.json()})).then((function(e){console.log(e),b(e.result),O(e.accuracy_score)}))},children:[Object(c.jsxs)(j.a.Group,{controlId:"exampleForm.ControlTextarea1",children:[Object(c.jsx)("h2",{children:"Enter your message:"}),Object(c.jsx)(j.a.Control,{as:"textarea",rows:20,value:s,placeholder:"Start typing here...",onChange:function(e){return n(e.target.value)}})]}),Object(c.jsx)(h.a,{className:"submitButton",size:"lg",variant:"primary",type:"submit",children:"Check it out!"})]})}),Object(c.jsx)("div",{className:"result",children:Object(c.jsx)(l,{type:u})}),Object(c.jsx)("div",{className:"score",children:Object(c.jsxs)("p",{children:["Spam Classification Model Accuracy Score: ",m,"%"]})})]})};var b=function(){return Object(c.jsxs)("div",{className:"app",children:[Object(c.jsx)("div",{className:"header",children:Object(c.jsx)("h1",{children:"Let's Fight Spam Messages Together!"})}),Object(c.jsx)(u,{})]})},d=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,27)).then((function(t){var s=t.getCLS,c=t.getFID,a=t.getFCP,n=t.getLCP,r=t.getTTFB;s(e),c(e),a(e),n(e),r(e)}))};i.a.render(Object(c.jsx)(n.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root")),d()}},[[23,1,2]]]);
//# sourceMappingURL=main.3539af22.chunk.js.map