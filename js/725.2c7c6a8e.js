"use strict";(self["webpackChunkvue3_tourguide"]=self["webpackChunkvue3_tourguide"]||[]).push([[725],{9315:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(3396);const n={id:"AppFooter",class:"w-full text-center bg-emerald-300 text-white h-32 flex items-center justify-center"},r=(0,l._)("div",null,[(0,l._)("div",null," Vue3-TourGuide #Ryan "),(0,l._)("div",null," 資料來源：運輸資料流通服務平臺 (TDX) ")],-1),o=[r];function s(e,t,a,r,s,d){return(0,l.wg)(),(0,l.iD)("div",n,o)}var d=(0,l.aZ)({name:"AppFooter"}),u=a(89);const i=(0,u.Z)(d,[["render",s]]);var c=i},4751:function(e,t,a){a.d(t,{Z:function(){return p}});var l=a(3396),n=a(7139);const r={id:"AppNav"},o=(0,l.Uk)("首頁");function s(e,t,a,s,d,u){const i=(0,l.up)("router-link"),c=(0,l.up)("a-breadcrumb-item"),p=(0,l.up)("a-breadcrumb");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(p,null,{default:(0,l.w5)((()=>[(0,l.Wm)(c,null,{default:(0,l.w5)((()=>[(0,l.Wm)(i,{to:"/home"},{default:(0,l.w5)((()=>[o])),_:1})])),_:1}),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.breadcrumbList,((e,t)=>((0,l.wg)(),(0,l.j4)(c,{key:t},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{to:e.path},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(e.name),1)])),_:2},1032,["to"])])),_:2},1024)))),128))])),_:1})])}var d=a(9248),u=(0,l.aZ)({name:"AppNav",props:{breadcrumbList:d.Yj},setup(e){return console.log(e.breadcrumbList),{}}}),i=a(89);const c=(0,i.Z)(u,[["render",s]]);var p=c},3466:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var l=a(3396),n=a(7139);const r={id:"AppFoodDetail"},o={class:"main lg:px-20 px-5 mx-auto max-w-6xl containers"},s=["src"],d={class:"text-2xl mt-6"},u=(0,l._)("div",{class:"font-bold text-xl mt-6"},"活動介紹:",-1),i={class:"leading-7 text-slate-500"},c={class:"content mt-9"},p={class:"text bg-slate-100"},m=(0,l._)("span",{class:"text-xl font-bold"},"開放時間 :",-1),f=(0,l.Uk)(),v={class:"text-xl font-medium"},b=(0,l._)("span",{class:"text-xl font-bold"},"連絡電話 :",-1),w=(0,l.Uk)(),x={class:"text-xl font-medium"},_=(0,l._)("span",{class:"text-xl font-bold"},"餐廳地址 :",-1),h=(0,l.Uk)(),D={class:"text-xl font-medium"},g=(0,l._)("span",{class:"text-xl font-bold"},"官方網站 :",-1),A=(0,l.Uk)(),k={class:"text-xl"},Z=["src"];function y(e,t,a,y,U,z){const W=(0,l.up)("AppHeader"),F=(0,l.up)("AppNav"),L=(0,l.up)("AppFooter");return(0,l.wg)(),(0,l.iD)("div",r,[(0,l.Wm)(W),(0,l._)("div",o,[(0,l.Wm)(F,{breadcrumbList:e.breadcrumbList},null,8,["breadcrumbList"]),(0,l._)("img",{src:e.foodDetail[0]?.Picture.PictureUrl1,alt:"",class:"w-full h-96 mt-4"},null,8,s),(0,l._)("div",d,(0,n.zw)(e.foodDetail[0]?.RestaurantName),1),u,(0,l._)("div",i,(0,n.zw)(e.foodDetail[0]?.Description),1),(0,l._)("div",c,[(0,l._)("div",p,[(0,l._)("div",null,[m,f,(0,l._)("span",v,(0,n.zw)(e.foodDetail[0]?.OpenTime),1)]),(0,l._)("div",null,[b,w,(0,l._)("span",x,(0,n.zw)(e.foodDetail[0]?.Phone),1)]),(0,l._)("div",null,[_,h,(0,l._)("span",D,(0,n.zw)(e.foodDetail[0]?.Address),1)]),(0,l._)("div",null,[g,A,(0,l._)("span",k,(0,n.zw)(e.foodDetail[0]?.WebsiteUrl??"無"),1)])])])]),(0,l._)("iframe",{class:"mt-10",width:"100%",height:"250",frameborder:"0",style:{border:"0"},referrerpolicy:"no-referrer-when-downgrade",src:`https://www.google.com/maps/embed/v1/place?key=AIzaSyACwDFpYlaQkcQkdCaUMxSKV3rO9G3hAMI&q=${e.foodDetail[0]?.Address}`,allowfullscreen:""},"\r\n    ",8,Z),(0,l.Wm)(L)])}var U=a(4870),z=a(9735),W=a(678),F=a(3564),L=a(9315),j=a(4751),N=(0,l.aZ)({name:"AppFoodDetail",components:{AppHeader:F.Z,AppFooter:L.Z,AppNav:j.Z},setup(){const e=(0,W.yj)(),t=(0,U.qj)([]),a=()=>{const a=`$filter=RestaurantID eq '${e.params.id}'`;(0,z.Bv)(a).then((a=>{console.log("datas",a);const l=[{name:a[0].City,path:"/home"},{name:a[0].RestaurantName,path:`/food/${e.params.id}`}];n.push(...l),t.push(a[0])}))},n=(0,U.qj)([{name:"品嘗美食",path:"/food"}]);return(0,l.bv)((()=>{a()})),{route:e,breadcrumbList:n,foodDetail:t}}}),C=a(89);const q=(0,C.Z)(N,[["render",y]]);var R=q}}]);
//# sourceMappingURL=725.2c7c6a8e.js.map