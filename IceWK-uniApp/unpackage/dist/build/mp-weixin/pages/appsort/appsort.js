(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/appsort/appsort"],{"1e16":function(e,n,t){"use strict";(function(e){t("c6ef");o(t("66fd"));var n=o(t("5f6b"));function o(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(n.default)}).call(this,t("543d")["createPage"])},"5c31":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return r})),t.d(n,"a",(function(){return o}));var o={nNavbar:function(){return Promise.all([t.e("common/vendor"),t.e("nPro/navbar/navbar")]).then(t.bind(null,"a859"))},nWaterfall:function(){return Promise.all([t.e("common/vendor"),t.e("nPro/waterfall/waterfall")]).then(t.bind(null,"d773"))},nWaterfallView:function(){return Promise.all([t.e("common/vendor"),t.e("nPro/waterfall-view/waterfall-view")]).then(t.bind(null,"3fd7"))}},a=function(){var e=this,n=e.$createElement;e._self._c},r=[]},"5f6b":function(e,n,t){"use strict";t.r(n);var o=t("5c31"),a=t("b95e");for(var r in a)"default"!==r&&function(e){t.d(n,e,(function(){return a[e]}))}(r);var l,c=t("f0c5"),i=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],l);n["default"]=i.exports},b95e:function(e,n,t){"use strict";t.r(n);var o=t("d5ff"),a=t.n(o);for(var r in o)"default"!==r&&function(e){t.d(n,e,(function(){return o[e]}))}(r);n["default"]=a.a},d5ff:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(t("a8d7"));function a(e){return e&&e.__esModule?e:{default:e}}var r=function(){t.e("components/goods/goodsTopicCell").then(function(){return resolve(t("7ab8"))}.bind(null,t)).catch(t.oe)},l=function(){t.e("components/goods/goodsCell").then(function(){return resolve(t("d232"))}.bind(null,t)).catch(t.oe)},c=function(){t.e("components/goods/goodsFlashCell").then(function(){return resolve(t("c1a6"))}.bind(null,t)).catch(t.oe)},i=function(){t.e("components/goods/goodsClubCell").then(function(){return resolve(t("79d0"))}.bind(null,t)).catch(t.oe)},u=[],s={components:{goodsTopicCell:r,goodsCell:l,goodsFlashCell:c,goodsClubCell:i},data:function(){return{items:[]}},onShow:function(){},onLoad:function(){this.getCat()},methods:{goSortList:function(n,t){console.log("go"),e.navigateTo({url:"/pages/appsort/appsortlist?category="+n+"&id="+t})},getCat:function(){var n=this;e.request({url:o.default.GetCat()}).then((function(e){var t=e[1].data;if("undefined"!=typeof t&&"none"!=t&&"NULL"!=t)for(var o=e[1].data,a=0;a<o.length;a++){var r={cover:"",name:"",type:"",topic:"",label:"",width:"",height:"",id:""};r.id=o[a].id,r.cover=o[a].imgclass,r.name=o[a].name,r.type="topic",r.topic="#精选好物推荐#",r.label="好物推荐",r.width=575,r.height=480,u.push(r)}else n.showlist=!1}))},NewLoadData:function(){e.$emit("刷新成功")},calculateHeight:function(e){var n=350*e.height/e.width;return n>400&&(n=400),n<100&&(n=100),"topic"!=e.type&&(n+=104),{h:n}},toLoadData:function(){var e=this,n=this.$refs["n-list"],t=n.nCurrentPage;setTimeout((function(){1===t?(e.items=u,e.$refs["water"].clear(),e.$refs["water"].set(u)):(e.items=e.items.concat(u),e.$refs["water"].concat(u)),t>=4?n.nEndSuccess(!1):n.nEndSuccess(!0)}),300)}}};n.default=s}).call(this,t("543d")["default"])}},[["1e16","common/runtime","common/vendor"]]]);