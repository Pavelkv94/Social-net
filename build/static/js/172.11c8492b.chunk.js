"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[172],{7172:function(e,t,s){s.r(t),s.d(t,{default:function(){return g}});var n=s(1413),a=s(9439),i=s(2791),l=s(3168),r=s(9434),c=s(5559),o=s(7389),u=s(5158),d=s(9867),m={settings_wrapper:"Settings_settings_wrapper__kOlyR",left_panel:"Settings_left_panel__vU804",active:"Settings_active__RYhnw",setting_item:"Settings_setting_item__iPA2O",border:"Settings_border__2io6m",text_field:"Settings_text_field__rFguc",submit:"Settings_submit__vYYEi",error:"Settings_error__9OLtQ"},h=s(184),g=function(){var e=(0,l.$)().t,t=(0,r.I0)(),s=(0,r.v9)((function(e){return e.profile.profileData})),g=(0,r.v9)((function(e){return e.profile.profileEditStatus})),x=(0,r.v9)((function(e){return e.app.user.user_id})),p=(0,i.useState)("profile"),f=(0,a.Z)(p,2),_=f[0],v=f[1],j=(0,i.useState)(s),Z=(0,a.Z)(j,2),N=Z[0],b=Z[1];(0,i.useEffect)((function(){"succeeded"===g&&setTimeout((function(){return t((0,c.vE)("idle"))}),3e3)}),[g,t]),(0,i.useEffect)((function(){t((0,c.GA)(x))}),[t]);var y=N.first_name.length>20||N.last_name.length>20;return(0,h.jsxs)("div",{className:m.settings_wrapper,children:[(0,h.jsx)("div",{className:m.left_panel,children:(0,h.jsx)("span",{onClick:function(){return v("profile")},className:"profile"===_?m.active:"",children:e("profile.profile")})}),(0,h.jsx)(o.Z,{title:e("profile.settings"),width:"100%",margin:"0 0 0 20px",component:(0,h.jsxs)("div",{className:m.settings,children:[(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.firstName")}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:e("settings.firstName"),value:N.first_name,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{first_name:e.currentTarget.value}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.lastName")}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:e("settings.lastName"),value:N.last_name,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{last_name:e.currentTarget.value}))}})]}),y&&(0,h.jsx)("span",{className:m.error,children:e("settings.error")}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.gender")}),(0,h.jsxs)("select",{className:m.text_field,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{gender:e.target.value}))},defaultValue:"Male",children:[(0,h.jsx)("option",{value:"Male",children:e("settings.male")}),(0,h.jsx)("option",{value:"Female",children:e("settings.female")})]})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.birthday")}),(0,h.jsx)("input",{type:"date",className:m.text_field,value:N.birthday,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{birthday:e.currentTarget.value}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.country")}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:e("settings.countruPlaceholder"),value:N.country,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{country:e.currentTarget.value}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.education")}),(0,h.jsx)("input",{type:"text",className:m.text_field,value:N.education,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{education:e.currentTarget.value}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.work")}),(0,h.jsx)("input",{type:"text",className:m.text_field,value:N.work,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{work:e.currentTarget.value}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:e("settings.aboutMe")}),(0,h.jsx)("textarea",{className:m.text_field,cols:30,rows:10,value:N.about,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{about:e.currentTarget.value}))}})]}),(0,h.jsx)("div",{className:m.border}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"Facebook:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://facebook.com/",value:N.contacts.facebook,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{facebook:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"Instagram:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://instagram.com/",value:N.contacts.instagram,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{instagram:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"LinkedIn:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://www.linkedin.com/",value:N.contacts.linkedin,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{linkedin:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"Telegram:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://t.me/",value:N.contacts.telegram,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{telegram:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"Twitter:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://www.twitter.com/",value:N.contacts.twitter,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{twitter:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"VK:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://vk.com",value:N.contacts.vk,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{vk:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.setting_item,children:[(0,h.jsx)("label",{htmlFor:"",children:"Youtube:"}),(0,h.jsx)("input",{type:"text",className:m.text_field,placeholder:"https://youtube.com/",value:N.contacts.youtube,onChange:function(e){return b((0,n.Z)((0,n.Z)({},N),{},{contacts:(0,n.Z)((0,n.Z)({},N.contacts),{},{youtube:e.currentTarget.value})}))}})]}),(0,h.jsxs)("div",{className:m.submit,children:["loading"===g?(0,h.jsx)(d.C,{}):(0,h.jsx)(u.q,{title:e("settings.confirm"),width:200,height:40,margin:"10px 0 0 0",onClick:function(){t((0,c.az)(N))},disabled:y}),"succeeded"===g&&(0,h.jsx)("span",{children:e("settings.success")})]})]})})]})}}}]);
//# sourceMappingURL=172.11c8492b.chunk.js.map