(this["webpackJsonpchirp-ui"]=this["webpackJsonpchirp-ui"]||[]).push([[0],{10:function(e,t,n){"use strict";var a=n(0),r=n(12),c=n(16);t.a=function(){return{token:Object(a.useContext)(r.a).token,user:Object(a.useContext)(c.a)}}},12:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var a=n(1),r=n(0),c=n.n(r),u=c.a.createContext({token:null,setToken:function(){return null}});t.b=function(e){var t=e.children,n=localStorage.getItem("token"),o=Object(r.useState)(n||null),l=Object(a.a)(o,2),i=l[0],s=l[1],p={token:i,setToken:s};return Object(r.useEffect)((function(){i?localStorage.setItem("token",i):localStorage.removeItem("token")}),[i]),c.a.createElement(u.Provider,{value:p},t)}},16:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),r=n.n(a),c=n(5),u=n(1),o=n(0),l=n.n(o),i=n(12),s=n(6),p=l.a.createContext({done:!1,authenticated:!1,invalidate:function(){}});t.b=function(e){var t=e.children,n=Object(o.useState)(!1),a=Object(u.a)(n,2),f=a[0],b=a[1],m=Object(o.useState)(!1),d=Object(u.a)(m,2),v=d[0],O=d[1],h=Object(o.useState)(null),j=Object(u.a)(h,2),E=j[0],w=j[1],x=Object(o.useContext)(i.a),g=x.token,k=x.setToken,S={done:f,authenticated:v,invalidate:function(){O(!1),k(null)},name:E||void 0};return Object(o.useEffect)((function(){v||function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!g){e.next=9;break}return e.next=4,Object(s.a)("/user",{headers:{Authorization:"Bearer ".concat(g)}});case 4:t=e.sent,n=t.data,a=n.status,c=n.name,"OK"===a?(O(!0),w(c)):O(!1);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),O(!1);case 14:return e.prev=14,b(!0),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[0,11,14,17]])})));return function(){return e.apply(this,arguments)}}()()}),[v,g]),l.a.createElement(p.Provider,{value:S},t)}},35:function(e,t,n){e.exports={btn:"User_btn__17Csu"}},36:function(e,t,n){e.exports={app:"App_app__2ziFi"}},37:function(e,t,n){e.exports={nav:"Layout_nav__3zIw1"}},38:function(e,t,n){e.exports=n(68)},6:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(2),r=n.n(a),c=n(31),u=n(5),o=n(32),l=n.n(o);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){Object(c.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var p=function(){var e=Object(u.a)(r.a.mark((function e(t){var n,a,c,u,o=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=o.length>1&&void 0!==o[1]?o[1]:{},a=o.length>2?o[2]:void 0,c="localhost:6969",u=a?"https":"http",e.abrupt("return",l.a.request(s({url:"".concat(u,"://").concat(c).concat(t)},n)));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(30),u=n.n(c),o=n(3),l=n(12),i=n(16),s=n(13),p=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Not found!"))},f=function(e){var t=e.routes;return r.a.createElement(s.d,null,t.map((function(e){var t,n=e.to,a=e.exact,c=e.component,u=e.render;return t=c?function(){return r.a.createElement(c,null)}:u||function(){return null},r.a.createElement(s.b,{key:n,path:n,exact:a,render:t})})),r.a.createElement(s.b,{component:p}))},b=function(){return r.a.createElement("div",null,"Loading...")},m=n(2),d=n.n(m),v=n(5),O=n(1),h=n(10),j=n(6),E=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(""),l=Object(O.a)(u,2),i=l[0],s=l[1],p=Object(a.useState)(null),f=Object(O.a)(p,2),b=f[0],m=f[1],E=Object(h.a)().token,w=function(){var e=Object(v.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=3;break}return c(!0),e.abrupt("return");case 3:return e.prev=3,e.next=6,Object(j.a)("/additem",{method:"POST",headers:{Authorization:"Bearer ".concat(E)},data:{content:i}});case 6:t=e.sent,n=t.data,a=n.status,r=n.id,"OK"===a&&m(r),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(3),c(!0);case 16:case"end":return e.stop()}}),e,null,[[3,13]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i?w():c(!0)}},r.a.createElement("h1",null,"New tweet"),b&&r.a.createElement("div",null,r.a.createElement(o.b,{to:"/tweet/".concat(b)},"View new tweet")),n&&r.a.createElement("div",null,"Some error ocurred!"),r.a.createElement("textarea",{placeholder:"What's going on?",value:i,onChange:function(e){c(!1),s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Tweet"),r.a.createElement(o.b,{to:"/search"},"Search tweets"),r.a.createElement(o.b,{to:"/signout"},"Sign out"))},w=function(){var e=Object(h.a)().user,t=e.done,n=e.authenticated;return t&&n?r.a.createElement(E,null):t&&!n?r.a.createElement("div",null,r.a.createElement("h1",null,"Welcome to Chirp!"),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/signin"},"Returning? Sign in.")),r.a.createElement("div",null,r.a.createElement(o.b,{to:"/signup"},"Create an account for free!"))):r.a.createElement(b,null)},x=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),l=Object(O.a)(u,2),i=l[0],s=l[1],p=Object(a.useState)(""),f=Object(O.a)(p,2),b=f[0],m=f[1],h=Object(a.useState)(""),E=Object(O.a)(h,2),w=E[0],x=E[1],g=Object(a.useState)(""),k=Object(O.a)(g,2),S=k[0],y=k[1],C=Object(a.useState)(""),P=Object(O.a)(C,2),T=P[0],F=P[1],K=function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b&&w&&S&&T){e.next=3;break}return s(!0),e.abrupt("return");case 3:if(S===T){e.next=6;break}return s(!0),e.abrupt("return");case 6:return e.prev=6,e.next=9,Object(j.a)("/adduser",{method:"POST",data:{username:b,email:w,password:S}});case 9:t=e.sent,"OK"===t.data.status&&c(!0),e.next=18;break;case 14:e.prev=14,e.t0=e.catch(6),console.log(e.t0),s(!0);case 18:case"end":return e.stop()}}),e,null,[[6,14]])})));return function(){return e.apply(this,arguments)}}(),_=function(e){return function(t){e(t.target.value)}};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),K()}},i&&r.a.createElement("div",null,"Please check your information!"),n&&r.a.createElement("div",null,r.a.createElement("span",null,"Good news! You've signed up. Just verify your email and you're all set!"),r.a.createElement(o.b,{to:"/code"},"Verify here.")),r.a.createElement("input",{type:"text",placeholder:"Username",value:b,onChange:_(m)}),r.a.createElement("input",{type:"email",placeholder:"Email",value:w,onChange:_(x)}),r.a.createElement("input",{type:"password",placeholder:"Password",value:S,onChange:_(y)}),r.a.createElement("input",{type:"password",placeholder:"Password again",value:T,onChange:_(F)}),r.a.createElement("button",null,"Sign up"))},g=function(){var e=Object(a.useState)(),t=Object(O.a)(e,2),n=(t[0],t[1]),c=Object(a.useState)(!1),u=Object(O.a)(c,2),o=(u[0],u[1]),i=Object(a.useState)(),s=Object(O.a)(i,2),p=(s[0],s[1]),f=Object(a.useState)(""),b=Object(O.a)(f,2),m=b[0],h=b[1],E=Object(a.useState)(""),w=Object(O.a)(E,2),x=w[0],g=w[1],k=Object(a.useContext)(l.a).setToken,S=function(){var e=Object(v.a)(d.a.mark((function e(){var t,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/login",{method:"POST",params:{token:!0},data:{username:m,password:x}});case 3:t=e.sent,a=t.data,r=a.status,c=a.token,"OK"===r&&c?k(c):n("Failed to login!"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),n("Failed!");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),y=function(e,t){return function(n){e(n.target.value),t(!1)}};return r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=!0;m.length<1&&(t=!1,o(!0)),x.length<1&&(t=!1,p(!0)),t&&S()}},r.a.createElement("input",{type:"text",placeholder:"Username",value:m,onChange:y(h,o)}),r.a.createElement("input",{type:"password",placeholder:"Password",value:x,onChange:y(g,p)}),r.a.createElement("button",{type:"submit"},"Sign in"))},k=function(){return(0,Object(h.a)().user.invalidate)(),r.a.createElement(s.a,{to:"/signin"})},S=function(){var e=Object(a.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),l=Object(O.a)(u,2),i=l[0],s=l[1],p=Object(a.useState)(""),f=Object(O.a)(p,2),b=f[0],m=f[1],h=Object(a.useState)(""),E=Object(O.a)(h,2),w=E[0],x=E[1],g=function(){var e=Object(v.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/verify",{method:"POST",data:{email:b,key:w}});case 3:t=e.sent,"OK"===t.data.status&&s(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),c(!0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),g()}},n&&r.a.createElement("div",null,"Credentials incorrect!"),i&&r.a.createElement("div",null,r.a.createElement("span",null,"You've been verified!"),r.a.createElement(o.b,{to:"/signin"},"Sign in!")),r.a.createElement("input",{required:!0,type:"email",placeholder:"Email",value:b,onChange:function(e){m(e.target.value)}}),r.a.createElement("input",{required:!0,type:"text",placeholder:"Verification code",value:w,onChange:function(e){x(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Verify"))},y=n(35),C=n.n(y),P=function(){var e=Object(a.useState)(null),t=Object(O.a)(e,2),n=t[0],c=t[1],u=Object(a.useState)(!1),l=Object(O.a)(u,2),i=l[0],p=l[1],f=Object(a.useState)(null),b=Object(O.a)(f,2),m=b[0],E=b[1],w=Object(a.useState)(null),x=Object(O.a)(w,2),g=x[0],k=x[1],S=Object(a.useState)(null),y=Object(O.a)(S,2),P=y[0],T=y[1],F=Object(a.useState)(!1),K=Object(O.a)(F,2),_=K[0],D=K[1],N=Object(a.useState)(),z=Object(O.a)(N,2),q=z[0],A=z[1],I=Object(a.useState)(),U=Object(O.a)(I,2),B=U[0],V=U[1],J=Object(a.useState)(),L=Object(O.a)(J,2),W=L[0],Y=L[1],G=Object(s.h)().user,H=Object(h.a)(),R=H.token,M=H.user,Q=M.done,X=M.authenticated,Z=M.name,$=function(e){return e?r.a.createElement("ul",null,function(e){return e.map((function(e){return r.a.createElement("li",{key:e},r.a.createElement(o.b,{to:"/profile/".concat(e)},e))}))}(e)):r.a.createElement("div",null,"Loading...")};return Object(a.useEffect)((function(){(function(){var e=Object(v.a)(d.a.mark((function e(){var t,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/user/".concat(G));case 3:t=e.sent,n=t.data,a=n.status,r=n.user,"OK"===a?c(r):D(!0),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),D(!0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}})()()}),[G,i]),Object(a.useEffect)((function(){n&&function(){var e=Object(v.a)(d.a.mark((function e(){var t,n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/user/".concat(G,"/followers"));case 3:t=e.sent,n=t.data,a=n.status,r=n.users,c=n.error,"OK"===a?(Q&&X&&Z&&r.includes(Z)&&p(r.includes(Z)),E(r)):A(c),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),A("Not sure what happend");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()()}),[n,X,Q,Z,G]),Object(a.useEffect)((function(){n&&function(){var e=Object(v.a)(d.a.mark((function e(){var t,n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/user/".concat(G,"/following"));case 3:if(t=e.sent,n=t.data,a=n.status,r=n.users,c=n.error,"OK"!==a){e.next=12;break}k(r),e.next=13;break;case 12:throw new Error(c);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),V(e.t0.message);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}()()}),[n,G]),Object(a.useEffect)((function(){n&&function(){var e=Object(v.a)(d.a.mark((function e(){var t,n,a,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(j.a)("/user/".concat(G,"/posts"));case 3:if(t=e.sent,n=t.data,a=n.status,r=n.error,c=n.items,"OK"!==a){e.next=12;break}T(c),e.next=13;break;case 12:throw new Error(r);case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),Y("Failed to get posts");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}()()}),[n,G]),Q?!n||_?r.a.createElement("h2",null,"User ".concat(G," not found!")):r.a.createElement("div",null,r.a.createElement("h1",null,G),r.a.createElement("div",null,function(){return Q&&X&&Z&&R&&m?G===Z?null:r.a.createElement("button",{className:C.a.btn,onClick:(e=!i,function(t){!function(){var t=Object(v.a)(d.a.mark((function t(){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(j.a)("/follow",{method:"POST",headers:{Authorization:"Bearer ".concat(R)},data:{username:G,follow:e}});case 3:"OK"===t.sent.data.status&&p(e),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.warn("Follow request failed");case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}()()})},i?"Unfollow":"Follow"):null;var e}()),r.a.createElement("div",null,r.a.createElement("h3",null,"Posts"),W||(P?P.map((function(e){return r.a.createElement("div",{key:e},r.a.createElement(o.b,{to:"/tweet/".concat(e)},e))})):null)),r.a.createElement("div",null,r.a.createElement("h3",null,"Followers"),r.a.createElement("span",null,"".concat(n.followers," total followers")),q||$(m)),r.a.createElement("div",null,r.a.createElement("h3",null,"Following"),r.a.createElement("span",null,"".concat(n.following," total following")),B||$(g))):null},T=function(e){var t=e.children,n=e.loading,a=e.not,c=e.redirectTo,u=Object(h.a)().user,o=u.done,l=u.authenticated;return o?(a?o&&!l:o&&l)?r.a.createElement(r.a.Fragment,null,t):r.a.createElement(s.a,{to:c}):r.a.createElement(r.a.Fragment,null,n||null)},F=function(e,t){return function(n){var a=t||"/",c=function(t){return r.a.createElement(T,{not:e,redirectTo:a},r.a.createElement(n,t))},u=n.name||n.displayName||"Component";return c.displayName="requireAuthentication(".concat(u,")"),c}},K=[{to:"/",exact:!0,component:w},{to:"/signin",exact:!0,component:F(!0)(g)},{to:"/signup",exact:!0,component:F(!0)(x)},{to:"/signout",exact:!0,component:F()(k)},{to:"/code",exact:!0,component:F(!0)(S)},{to:"/tweet/:id",exact:!0,component:r.a.lazy((function(){return n.e(3).then(n.bind(null,73))}))},{to:"/profile/:user",exact:!0,component:P},{to:"/search",exact:!0,component:r.a.lazy((function(){return n.e(4).then(n.bind(null,72))}))},{to:"/not-found",exact:!0,component:p}],_=n(36),D=n.n(_),N=(n(66),n(37)),z=n.n(N),q=function(e){var t=e.children;return r.a.createElement("div",null,r.a.createElement("nav",{className:z.a.nav},[{to:"/",text:"Home"},{to:"/search",text:"Search"}].map((function(e){var t=e.to,n=e.text;return r.a.createElement(o.b,{to:t},n)}))),r.a.createElement("div",null,t))},A=function(){return r.a.createElement(o.a,null,r.a.createElement(l.b,null,r.a.createElement(i.b,null,r.a.createElement(r.a.Suspense,{fallback:r.a.createElement(b,null)},r.a.createElement(q,null,r.a.createElement("div",{className:D.a.app},r.a.createElement(f,{routes:K})))))))};n(67);u.a.render(r.a.createElement(A,null),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2faa2375.chunk.js.map