"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[675],{9675:function(s,e,r){r.r(e),r.d(e,{default:function(){return y}});var n=r(9439),c=r(2791),u=r(3168),t=r(9434),i=r(5848),a="Users_users__oN5Ju",o="Users_users_header__2RqrH",_="Users_users_switch__tOySc",l="Users_active__cj9Pz",d="Users_users_switch_vr__plZcb",f="Users_users_main__m5W2K",h="Users_user__ureKU",m="Users_user_back__PY-ZD",v="Users_user_avatar__YC5KI",j="Users_user_name__7dUCb",x="Users_user_name_country__Z+Ik9",p="Users_user_info__TBDOm",k="Users_user_footer__B2awB",U=r(6876),N=r(3504),g=r(5158),w=r(184),b=function(s){var e=s.user,r=s.user_id,n=s.t,c=(0,t.I0)(),u={backgroundImage:"url(".concat(e.background,")")},a={backgroundImage:e.photo?"url(".concat("https://dart-social-network.herokuapp.com").concat(e.photo,")"):"url(".concat(U,")")};return(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)("div",{className:m,style:u,children:(0,w.jsx)("div",{className:v,style:a})}),(0,w.jsxs)("div",{className:j,children:[(0,w.jsx)(N.OL,{to:"/".concat(e.user_id),children:(0,w.jsx)("span",{children:e.name})}),(0,w.jsx)("span",{className:x,children:e.country})]}),(0,w.jsx)("div",{className:p}),(0,w.jsxs)("div",{className:k,children:[void 0!==e.friends.find((function(s){return s===r}))?(0,w.jsx)(g.q,{title:n("users.unfollow"),width:100,height:30,onClick:function(){c((0,i.Ky)({userFrom:r,userTo:e.user_id}))},backgroundColor:"gray"}):(0,w.jsx)(g.q,{title:n("users.follow"),width:100,height:30,onClick:function(){c((0,i.iR)({userFrom:r,userTo:e.user_id}))}}),(0,w.jsx)(N.OL,{to:"/messages",children:(0,w.jsx)(g.q,{title:n("users.message"),width:100,height:30})})]})]})},y=function(){var s=(0,u.$)().t,e=(0,t.I0)(),r=(0,t.v9)((function(s){return s.users.users})),h=(0,t.v9)((function(s){return s.app.user.user_id})),m=(0,c.useState)("all"),v=(0,n.Z)(m,2),j=v[0],x=v[1],p=(0,c.useState)(!1),k=(0,n.Z)(p,2),U=k[0],N=k[1],g=(0,c.useState)(r),y=(0,n.Z)(g,2),C=y[0],Z=y[1];(0,c.useEffect)((function(){"all"===j&&Z(r),"friends"===j&&Z(r.filter((function(s){return void 0!==s.friends.find((function(s){return s===h}))})))}),[j,r,h]),(0,c.useEffect)((function(){e((0,i.Zw)())}),[e]);return(0,w.jsxs)("div",{className:a,children:[(0,w.jsxs)("div",{className:o,children:[(0,w.jsx)("div",{className:"".concat(_," ").concat(!U&&l),onClick:function(){N(!1),x("all")},children:s("users.allUsers")}),(0,w.jsx)("div",{className:d}),(0,w.jsx)("div",{className:"".concat(_," ").concat(U&&l),onClick:function(){N(!0),x("friends")},children:s("users.friends")})]}),(0,w.jsx)("div",{className:f,children:C.filter((function(s){return s.user_id!==h})).map((function(e){return(0,w.jsx)(b,{user:e,user_id:h,t:s})}))})]})}}}]);
//# sourceMappingURL=675.e86f69bf.chunk.js.map