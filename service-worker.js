/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["404.html","337f0d10c700092509e7c17034e843a4"],["about/index.html","159ce33046d5beafb48291ef4ad9df3f"],["archives/2014/12/index.html","6524c5d3f8e038ce1ac2b329fe81cbba"],["archives/2014/index.html","768526c7ea904b7d4bfec9279a8d41f0"],["archives/2015/01/index.html","5478c1de8b26d78959e4b683f94a2cb7"],["archives/2015/02/index.html","696f4c9e1d4af5cdd6606fa1d8927b90"],["archives/2015/03/index.html","75386b49e76b6c07b3ada47b8e8dc739"],["archives/2015/04/index.html","a37f5e5a41f5946d9b1b36ea04f5c69d"],["archives/2015/05/index.html","db346a9e76b6d80c48f95d414716e5aa"],["archives/2015/06/index.html","54833835fb52a246c2a9037d1f24941e"],["archives/2015/07/index.html","e21b918ca9b588e704f9ce03556c96d2"],["archives/2015/08/index.html","80e36ffc3db0a51166f1733d870e0026"],["archives/2015/09/index.html","c2aaaecc7a30b4548ec9a1621eb41ec3"],["archives/2015/10/index.html","d6d5b8ad2b5574c76604b19dd4b1f120"],["archives/2015/11/index.html","de6e5dc9aa769a020f7470eba394aaff"],["archives/2015/12/index.html","49cd6d2b9ea4857c6cd44cbdef45e659"],["archives/2015/index.html","36dc1f952db91f73fece91bd8fc2b533"],["archives/2015/pages/2/index.html","0f2dc9d79ff03f2b06ab54fbeb608a3f"],["archives/2015/pages/3/index.html","8d9fdab5528d7942e2c0904444eb76bf"],["archives/2015/pages/4/index.html","0a2f2070d87dc9adf6771bc1a66ccab8"],["archives/2015/pages/5/index.html","1a0022b0226236143be9b459ddee77a8"],["archives/2015/pages/6/index.html","9cd46de52ec091255b28c5e3f9b836e2"],["archives/2016/01/index.html","fc7e1b6336f34c69eb0245bc5174edde"],["archives/2016/03/index.html","afa595aecae8f42d394a39da6e8f808b"],["archives/2016/05/index.html","4c617070a3bec4a1f1344a0111cf158a"],["archives/2016/06/index.html","7c0dc8c7b376994ae20a54cf7148af6c"],["archives/2016/07/index.html","ae14482a107a02641adbbabf6ba01b07"],["archives/2016/09/index.html","a8208232a4088d26b730ed2a564be46c"],["archives/2016/10/index.html","6f6a6d20642a48f51fa377b8afa2e0a5"],["archives/2016/11/index.html","777d16136718297b6ab5c220d2f32eeb"],["archives/2016/index.html","75547ca7829f2b65dcb6d2ce16515ec8"],["archives/2016/pages/2/index.html","a1b9b951bcbb594f0dcfb0825c9db931"],["archives/2016/pages/3/index.html","6b6a79732029f0e4e4c329d072d29de3"],["archives/2017/02/index.html","09f985c75790162d439ab3a5b14e2509"],["archives/2017/03/index.html","322daed7e6b5817407fb36d15c139692"],["archives/2017/04/index.html","f1cb313eca187061abac6e6cad635f7c"],["archives/2017/05/index.html","6ea37ad4fd85ccae69313a3fc6cd6395"],["archives/2017/07/index.html","4d43d582085094291caab33a80e86071"],["archives/2017/08/index.html","1978617e282208559f4e9e432393bc9e"],["archives/2017/09/index.html","159e7b41f4bb01be6245367917085182"],["archives/2017/10/index.html","61e93a3e1f6c453af44a467dadbd6d4c"],["archives/2017/11/index.html","8bb14219b30912dd32b264f02af2743e"],["archives/2017/12/index.html","6d347c973cd00dba87d0bb7d55dfc757"],["archives/2017/index.html","180f4174caaa99c8e87f63538de39716"],["archives/2017/pages/2/index.html","618d6ca9830e85feb3eb558575052a3c"],["archives/2018/01/index.html","6a61970deac6e8196815651261da31d4"],["archives/2018/02/index.html","e2711ee676bcbdf2853e4e9d6bfb8caa"],["archives/2018/03/index.html","d4a427436c2cf7121ad0bb085c394549"],["archives/2018/04/index.html","7c335cade8e75de32bbca003e9551728"],["archives/2018/05/index.html","d59b68c83322ddd4aa9ae8e3d6372d3d"],["archives/2018/06/index.html","cae54b4bed02b057b966ec98da194f6b"],["archives/2018/07/index.html","8eca1d3b4d0e44fb52c832bf346933b0"],["archives/2018/08/index.html","f146f64a7d55455d3f34804a2f48aa23"],["archives/2018/09/index.html","26d53ebd06773e47b1895ea942a846f4"],["archives/2018/10/index.html","7b26dfb815ed9666d1fdff7ff28abae0"],["archives/2018/index.html","348af5051213320314f43b3cceec69f1"],["archives/2018/pages/2/index.html","f74f2e0e25857945383e02e924b4e232"],["archives/2018/pages/3/index.html","09450efde43eabe2871a81bbc7303e04"],["archives/2018/pages/4/index.html","c72930c5f1dc96586443af5b48c7521e"],["archives/2019/01/index.html","4269268b6985a287eac0b411dc0bbeb4"],["archives/2019/02/index.html","72fde320fe7cd362a1558a7c405bf589"],["archives/2019/03/index.html","048d426cee17799bfe78a8c585c0307e"],["archives/2019/04/index.html","b84b00db99a5cb9ccd98f3ebc6121418"],["archives/2019/05/index.html","4a48677eb8f8d4e23ee277fe63011b04"],["archives/2019/06/index.html","38ab7b5cfb04bcd161b7c125c2355ee1"],["archives/2019/07/index.html","f120fd540ac023614008d8b5021244f3"],["archives/2019/08/index.html","ddb8dd9b6ec896f86c8af7b9233aa11b"],["archives/2019/09/index.html","2e878506bfe5b4f6a35b66915774d7d4"],["archives/2019/10/index.html","4acf3d93b7883066ff1d84df5cdb462c"],["archives/2019/11/index.html","ecc9612f860926f209933e8af3b2aa8d"],["archives/2019/12/index.html","e8dcb7393a1eba175a82f6a629f0941b"],["archives/2019/index.html","4b69806fca3b2e529b92908fac69fe4f"],["archives/2019/pages/2/index.html","7c654d0c4f6e8a723af3be853305637d"],["archives/2019/pages/3/index.html","666f510b2d057f48024b3af99acc0a04"],["archives/2020/01/index.html","5872df3be47f467d3583afa1300e9bbd"],["archives/2020/02/index.html","1122160a6e579308df518c23bf7e3241"],["archives/2020/04/index.html","9ea1f813e3317aeb2c0cf870b94943fc"],["archives/2020/05/index.html","1b92a490c3220c06576c647c4db479d3"],["archives/2020/index.html","69e7eea18d0545fd2fe4cf566cd710f0"],["archives/index.html","12b891fb2a7594f8266e7442ee024009"],["archives/pages/10/index.html","d5a9ff02c7a4fd3e55aa38b87a2e95c2"],["archives/pages/11/index.html","5a2df5bdcdf2974b21b311ea2b20b40b"],["archives/pages/12/index.html","c3bc45aadede38a1360c62b0daacb91e"],["archives/pages/13/index.html","a4b8a500e4ffd5d2dd5c7ba65e1f944b"],["archives/pages/14/index.html","dc51a1fba55de3a1e8fe979eba1b9d32"],["archives/pages/15/index.html","6604d5ad1f94752cbed4d142b7ec6a01"],["archives/pages/16/index.html","48fb65d53238681da7bef7747540e7c8"],["archives/pages/17/index.html","ad2bd166521265002e36c5662316759a"],["archives/pages/2/index.html","d076f18e51690a72b2111b7689b922f4"],["archives/pages/3/index.html","dcb1bef67d1e62e7fd3c5cc75c0e8235"],["archives/pages/4/index.html","1a51e09353a633bf606743c283dab9c7"],["archives/pages/5/index.html","eb87ed59b6e1305bbb7621d97afc5c65"],["archives/pages/6/index.html","445099ad1684321b39081ab8e4f9a4ac"],["archives/pages/7/index.html","78ac9d89523473993ad20f551e9f37e4"],["archives/pages/8/index.html","44c1e4e5fbee5fcc27fb2e29fe2dcb22"],["archives/pages/9/index.html","471cea2583863ea6ef8df6df9ba3f1c8"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","c39069d737d9e18556dcc3166c465fbb"],["categories/Unity3D/index.html","7b5e2b5cdc770379614e66ccd15572cf"],["categories/Unity3D/pages/2/index.html","3c2b714cc29b11569a4fb3d2ee267c43"],["categories/index.html","84d02d362a18e2cdf211c0d58dd991dc"],["categories/人工智能/index.html","66dfd93d5ff9cfef73213f57b16ce9e0"],["categories/前端开发/index.html","42c8690ece2a048826ecee0df6beeb8d"],["categories/单机游戏/index.html","fb300a6224f121af428c4acafbc44438"],["categories/开发工具/index.html","787423bdafaee5b895622c31d1eaeee5"],["categories/数据分析/index.html","6319d939e72d9f83864e711c164b242e"],["categories/数据存储/index.html","a59625b78bc21926d57aef6d48798510"],["categories/游戏开发/index.html","38bdcfbcc0af9477988ab35607d00311"],["categories/游戏开发/pages/2/index.html","5a7f2c5036c179d70f43d6166af3d256"],["categories/游戏引擎/index.html","bda537a9fb2940411f9d7cad6a9b292f"],["categories/独立博客/index.html","e64b8b7f546c062bd12ecf2e1687f2fb"],["categories/生活感悟/index.html","d1647cbc4a78cd4c0f2c91bec90a4650"],["categories/生活感悟/pages/2/index.html","cbdc0c82b34a1c3ee37942c53567ebd4"],["categories/生活感悟/pages/3/index.html","0e740112efbeff3da2d2dcd6658c6c2c"],["categories/编程语言/index.html","bc1365f4b2e7b102f7a8d43a340a7f12"],["categories/编程语言/pages/2/index.html","d208d9b8dc147e69aef3b186be6d1172"],["categories/编程语言/pages/3/index.html","575c46fcb4c49e48b13065712f59541c"],["categories/编程语言/pages/4/index.html","b1ba6f7df86f5a0ea4f8eb4fdfbfb11f"],["categories/编程语言/pages/5/index.html","f21df9456e640de7905303a773fa0ee8"],["categories/读书笔记/index.html","8dc05dd14503c7b52f109591627e6825"],["categories/读书笔记/pages/2/index.html","5d1e50e1856626ba6fe10912d64abbd7"],["friends/index.html","2a4bf9699cb63ba03d92928b51e64ac7"],["index.html","60a1ed27ce22c9a92ed8acbdf91fa3f0"],["movies/index.html","f279e89eb8f021f933e8d08b6bbadfde"],["musics/index.html","059943df49f9209b21b61a6e7f90f071"],["pages/10/index.html","e8894035f0decf3c991f9f46f795b390"],["pages/11/index.html","c43344b4c2ed79826ee1fbbc2fa4a6d9"],["pages/12/index.html","756a87c61710588e9954ae7692c6aa2a"],["pages/13/index.html","1dc815331a7ed5870825576ba470a14d"],["pages/14/index.html","32a8caad9b6cd5447ee7fce2da6c795a"],["pages/15/index.html","7007d1c6213b9eda913389c157641995"],["pages/16/index.html","ef9f1d2fbe16625233d2999918bc19e5"],["pages/17/index.html","ed78a7f3f828e0a233096b94aa0cc45b"],["pages/2/index.html","e44b2ea45147557818c2871498afc3fe"],["pages/3/index.html","af12bfadf5b53c5bc9b932c932a016be"],["pages/4/index.html","3d65e322a9068f3580787158d10f397a"],["pages/5/index.html","5a7fc2e1ed92e2470e6f137b1427ca91"],["pages/6/index.html","1183a018022c4e6880c5c424dfbacb89"],["pages/7/index.html","dae8ffec8b82a4a17822d79249ca3d2b"],["pages/8/index.html","8e92f6044f475be87e01de1c11f142a7"],["pages/9/index.html","20005e4ce5fd123f386d6dd4e4407341"],["posts/1059499448/index.html","c3f25dfb4ecee7d7ffae1b586f12e577"],["posts/1071063696/index.html","c4025535a20123d8ce3dad14ac0cb2e4"],["posts/1082185388/index.html","b983d26d1c9a2c7dc93b398081d32698"],["posts/1099762326/index.html","4f4870cc87c1927bab961f5e6abc5373"],["posts/1113828794/index.html","581a2597e76439aca51969ce9f084cfd"],["posts/1118169753/index.html","4b7a25df602bd22b339ff4bde2ebf0a9"],["posts/1122710277/index.html","65941393cee9eabed0ed72d3b60a2fba"],["posts/1124152964/index.html","23797c43462decdc44fa0f1dae7274d5"],["posts/1127467740/index.html","6f3c5339c80bfba3c66d666aaca4457c"],["posts/1150071886/index.html","ff77989dc4ea59de75a07e660f690adf"],["posts/1150143610/index.html","15102939395b9d4990e07e42481e9cb4"],["posts/1152813120/index.html","50b57319c257278a53f6c2e83ee5c251"],["posts/115524443/index.html","57604465d4976e87e0efad90f5cc6770"],["posts/1156673678/index.html","7e0ac201da37e8513824d16400e2a194"],["posts/1166840790/index.html","3b73a41b626228496cfa179fa5161ac3"],["posts/116795088/index.html","2b60618aaf0dcc4080aa3e0aea945b32"],["posts/1176959868/index.html","35df939dfc533dfd9f4db137832a7ffe"],["posts/118272597/index.html","78bbd6df8e666ac5fbfb698b866ddf33"],["posts/1190622881/index.html","2bca8926500c601ec05b3c46afe881b8"],["posts/123663202/index.html","9e1a2870ef057c590f580a787e30c29e"],["posts/124807650/index.html","1842b9ca54fc8705f80c983ca44544cb"],["posts/1254783039/index.html","8d5daea3136438768716ed3901e7bee8"],["posts/1289244227/index.html","b74ae46f73b84ff6c02cc7f24a6fa7dc"],["posts/1320325685/index.html","34d2217010ad6d36c8b7d0b2438b9ceb"],["posts/1329254441/index.html","ec978760ef0c28c37d3dfff341035d62"],["posts/1357715684/index.html","18ed3a2070d8df5981b0627bae54e92a"],["posts/1358971951/index.html","bc073fefc71152eb516a4fb48d117453"],["posts/1386017461/index.html","34489dad174cee0d159b862524116281"],["posts/1394521917/index.html","d4eea57d468aee392fbea33cefdee17e"],["posts/1397717193/index.html","5e9246c4c8fe7c44cf572651a46357c5"],["posts/1417719502/index.html","2a1d904b49b1a3f34afb14f941e97213"],["posts/1424645834/index.html","60c3784433da1bb9093626416c3e487c"],["posts/1444577573/index.html","09dcbad239f2a02e1521182f0a9ba60f"],["posts/1467630055/index.html","097ecb54a6c04e27eb240e330c79a85d"],["posts/1478979553/index.html","21e96e564424b7f636d3c6398c40507d"],["posts/1540537013/index.html","92ae383922bc9937114c2d43caed79ae"],["posts/166983157/index.html","7988d28597f7bc066d8874c5c9bb312c"],["posts/1670305415/index.html","3d14d5b68dfb2f0fdc0b8267ee83f083"],["posts/1684318907/index.html","1b0698e93535cd1bd8b21eb813765229"],["posts/169430744/index.html","e5b4b1093203c9ed39d2b10df9a6b213"],["posts/1700650235/index.html","801740a0b26258f02d2fb7a8ad32c7d9"],["posts/172426938/index.html","240bb373259e2e9e6b21aa6aa5c32652"],["posts/1836680899/index.html","f65cc2e8b05710945009b6a7732e7308"],["posts/183718218/index.html","b83f64a0a96714a7fe1fc0f9e0659c54"],["posts/187480982/index.html","abb7acad34d0ff5a96e91353bfc788c9"],["posts/1930050594/index.html","0d928794a967cad532ed063d3dab4b2b"],["posts/1933583281/index.html","e76b2e7e72d6ad4e497b9efddf5979e0"],["posts/1940333895/index.html","d8dce0a44336bf6f1a7870589334a419"],["posts/1960676615/index.html","35ea5a094f906d93810f4480df6fd5b2"],["posts/1983298072/index.html","103d8f064ea73cdef2200dc21afd31a6"],["posts/1989654282/index.html","8a65fa8a2212cf7c3a2d8391676d0c06"],["posts/2015300310/index.html","10173cbce0ee0730cff7a59692e71626"],["posts/2038378679/index.html","cd7e9d12d4513cd6ffee45d14f19618f"],["posts/2041685704/index.html","c66be30e686c1bc05f0bf7f0ba4e4d07"],["posts/21112647/index.html","0468ab3e713d3b758fe92e20f144853d"],["posts/2158696176/index.html","f7ede8705847d7267aed36f2c4159fc7"],["posts/2171683728/index.html","0cfcfbfdddfca9d4c4cd36c3f62b44a6"],["posts/2186770732/index.html","8443167ced2a6175faf8b9d3c7915273"],["posts/2275646954/index.html","01cad3cdf0e9e7c41901b651820c3331"],["posts/2314414875/index.html","d5fd7786de876388b777880f349d745a"],["posts/2318173297/index.html","02b3542d015cd578622ce618859df7ee"],["posts/2418566449/index.html","1392b59863dcef68eb64bf825e017678"],["posts/2436573863/index.html","8bc011dce41a1be2d509870e8d60812b"],["posts/2462008667/index.html","be8427e2a6cdce02186b738f419cc9c7"],["posts/2463121881/index.html","970e2e74bded3fd7f598d169cb1132f2"],["posts/2488769283/index.html","d9ce74f9dd04df8489977df7e6420e3f"],["posts/2527231326/index.html","99bd53daee0b6628e1b20405e95458fa"],["posts/2583252123/index.html","a2d526e0f5fe503c473ef6299e629a0b"],["posts/2613006280/index.html","015cc7834c8c0062787826743e8d0e65"],["posts/2617501472/index.html","77a110e06736f5c6608b44076171a565"],["posts/2676125676/index.html","3cbeb6f0e566ad778431da554e1077e8"],["posts/2734896333/index.html","e42d86d31346a958c4dadeb5ad8e8d46"],["posts/2752169106/index.html","659bfb9edc4e2a3558fac3950029731e"],["posts/2799263488/index.html","8eaa035372af38192c329977c695a1dd"],["posts/2805694118/index.html","7a805496474b5f31b8951e8f848d4c10"],["posts/2809571715/index.html","12eec6c085691f4e41e3d7e3fa03fe1f"],["posts/2822230423/index.html","27ed0c77b73db1028f708a55f4b72c84"],["posts/2829333122/index.html","be9bbd95b1f656de3940d9088ba04973"],["posts/2911923212/index.html","b18d87ad9b7c92bd0957033930ac326f"],["posts/2941880815/index.html","4a7c4b359e1423c86081249f2f8bb53e"],["posts/2950334112/index.html","8198f2d16f8fc986be8c43ef91e8a395"],["posts/2954591764/index.html","db5cfaf6ba0e98bf883a385301111ffd"],["posts/3019914405/index.html","860476f965ce68f1a04f9cadd925eb34"],["posts/3032366281/index.html","dc2e98738e13920c60ee666728e73404"],["posts/3040357134/index.html","be443b67d082bee455c93806b54f56e3"],["posts/305484621/index.html","cf0e8e2cbcfdc0a73e6d4b960d46ba06"],["posts/3083474169/index.html","161ae9f9b2fa4b8ab8253639a57a5a33"],["posts/3099575458/index.html","3a07f44138ca1bb7247f662679a68317"],["posts/3111375079/index.html","460fabc3b610fcbc7c5ba1fab1ba7b62"],["posts/3120185261/index.html","7d75d80f104f2a1538b668618fc2d1f6"],["posts/3131944018/index.html","f73b4436bbb3f04a1ce3d1423afd7db4"],["posts/316230277/index.html","2fce9ba3450fd4101a6620a159da49ea"],["posts/3175881014/index.html","cd2f4f47136f64bd6548ed0a7a9ecb01"],["posts/3222622531/index.html","da379d1c4ec0983fd0ee3d4520a4ffe0"],["posts/3247186509/index.html","f23fe278f69e849e2e29819820d7eca5"],["posts/3269605707/index.html","6b2c43254943f2c877db5701da78f6e5"],["posts/3291578070/index.html","8a65a8839eed7b3b29d30b1468b67b67"],["posts/331752533/index.html","70cba4fb3f549e4f1a6143db7d68b639"],["posts/3321992673/index.html","7e23c533d6d65f9b6c0912ad12547110"],["posts/335366821/index.html","e4d136f9dc0103d16acd782af89c5f2a"],["posts/3356910090/index.html","db636b0264efb2ea2dec5c83a5b2d2ee"],["posts/337943766/index.html","0af702b9c9e07308c134384eec2e023c"],["posts/3417652955/index.html","fdafe7e6356f61de187bc3d6ac9dbe99"],["posts/3444626340/index.html","78a03caa60493a10dd47842a330334e1"],["posts/3449402269/index.html","9beb7700ea5ccc7ba5004aa57dd89810"],["posts/345410188/index.html","5959ecb2c4e03687a5a002bc161047de"],["posts/3461518355/index.html","4e269cf822c9fa7c5fe0f988f97d5be1"],["posts/3494408209/index.html","0d366e99bdfe200ece470eb39ed763c3"],["posts/352037321/index.html","fa4b449c6987084db7bd3715e7f20e32"],["posts/3521618732/index.html","e16dbf3babc55ab9c4713b6b9a81677e"],["posts/3568552646/index.html","c5e4b92e15426f309142feb299723cd8"],["posts/3603924376/index.html","4f2e0ac971683ceff1bb57ed7849cff7"],["posts/3637847962/index.html","6d4033c4ec671b697465d29fb8527453"],["posts/3642630198/index.html","93ee6d8ec261128ead13f536fa2a6a67"],["posts/3653662258/index.html","b4d7f443c9e32cce1fbd71c9b6405dca"],["posts/3653716295/index.html","cca7c5c3d89e07f8ca9f6efa09f8dec4"],["posts/3657008967/index.html","53c1168698ee9e162f898e6ed769782b"],["posts/3668933172/index.html","c4aa925bede4a975b45d212d20287d60"],["posts/3677280829/index.html","975bada02a21cad18880657601ffb3db"],["posts/3687594958/index.html","3b5b6ffd03178cb07624c12af3a51078"],["posts/369095810/index.html","8886fccdeffef79c65f52bebb17fe470"],["posts/3695777215/index.html","0982e6eab5e18dee1e5ee2037cfaed44"],["posts/3736599391/index.html","97cf1cacb4fba3f34d439f8259005ad9"],["posts/3742212493/index.html","771fee92f8babf7f0f1ce9bed5dae9de"],["posts/3782208845/index.html","56cb3b5f43de838b89c21caf1873cae2"],["posts/3789971938/index.html","140ee510ac4ad0d2a6221dba0680ac15"],["posts/380519286/index.html","fe5e25236308e4e1a806320e7fc86047"],["posts/3846545990/index.html","8323330192a9a778f21bf5ffc388c788"],["posts/3873710624/index.html","785b0fd2c25571c0e0bf89078d91292f"],["posts/3959327595/index.html","3c21c65ea11708cfdca865ba7888425d"],["posts/3972610476/index.html","26c2fa289a7f9f07dd03e39d7bd18f88"],["posts/3995512051/index.html","ac0e8dca6d2e8a46a5548ec468345980"],["posts/4088452183/index.html","9ab233b001fff17e9f3a6a064e2a99c4"],["posts/4116164325/index.html","bfd0afdfe6e9e2f6a8234509f8c8919d"],["posts/4158690468/index.html","f5b203b76251c836e872a67dcb1c0946"],["posts/4159187524/index.html","cf4235ded38370af0f756ec92b6a6b2a"],["posts/4197961431/index.html","002a526740544e2183504732e7a4a66f"],["posts/4205536912/index.html","317b96e9fedbd98ff29e053cabc12354"],["posts/4236649/index.html","3e8f07673fb6b9555f0409c320f2bb09"],["posts/426338252/index.html","f5c53dd81c2bf8d885a6e6c16cf736f8"],["posts/450254281/index.html","ff1f74fa6bb8dbf34ffcd1e326cc780c"],["posts/4891372/index.html","caf755657049e502ff7e5e9c7d5994b7"],["posts/569337285/index.html","bf8535461b0d96ed18fc3a97d0d01e8c"],["posts/570137885/index.html","35fddbca24c35d8588739dcd87f4854d"],["posts/570888918/index.html","5963af5594f9b2a901f26e5a2622d776"],["posts/582264328/index.html","84264eb9123473736c1a74e5af145cd1"],["posts/632291273/index.html","09848f6e5ab2ccf0c18e1ae34c3a2e67"],["posts/70687890/index.html","51b559bdfca0c1b4b2a7d0a5cbd8d711"],["posts/719322223/index.html","3999c911009d8313fd7ca3f79efe811a"],["posts/720539850/index.html","09e8fbd064f0e1f703d307e2498f96c5"],["posts/786195243/index.html","b3ba3647fc23f95ab711e6edb3363de2"],["posts/795474045/index.html","2afafab74058cc9bfb0dd8550052ec1e"],["posts/815861661/index.html","c5cb3e3c26ada2122ea58ef76c086790"],["posts/821259985/index.html","1eb5c7bee819940c5d5839436c4348fe"],["posts/828223375/index.html","69456036aa2cec5d429c45e6dc7a7402"],["posts/887585917/index.html","1bf38a016bfb1a40387f68c06d8d2335"],["posts/888549816/index.html","f791898c0a087d222fe42c63a3d3a4dc"],["posts/906436376/index.html","29beab9d9ba96c6d3a61261ca643c2c3"],["posts/907824546/index.html","13b48bed1e6e45842adf9ca6da6f5cc0"],["posts/927393529/index.html","732e0a61b77c2fd629d70c68d089b89a"],["posts/94443781/index.html","d44bcc2775c420b8e4fe9e4e93fbf491"],["tags/2014/index.html","c2e73299a88c7168d66e29e0b4ef4f09"],["tags/2019/index.html","9eea43fc149ec3148996b6c503091586"],["tags/AI/index.html","5ff7b5cc395e49cb5badebcfeaff06ef"],["tags/AOP/index.html","a2425f29c3352bc24889ca1720d0eaa9"],["tags/AR/index.html","bfab9b3248db0cb63dba21bec281029f"],["tags/AssetBundle/index.html","05560e0b77bffc6ff73d9314834f778f"],["tags/C/index.html","05a07afc5f78e831e5f0b3935249cdd1"],["tags/CDN/index.html","1115342e068e09f3ae79e769fda7c51b"],["tags/CG/index.html","be45540600eb7a846c6d59a4fd1d26c2"],["tags/CI/index.html","0f4f45fb5e82a2355214d755acb25e2d"],["tags/CORS/index.html","437185846f741ecfe463f288dad4e428"],["tags/CSharp/index.html","8fdb81ca4b18b55f2ae44da76e9ed59a"],["tags/Castle/index.html","dec98b8d94f069e3ca8e4fa7d2c61c8b"],["tags/DBeaver/index.html","43f77a9b7aac9fcc564f1a2e88c5856a"],["tags/Dapper/index.html","d5e08d4d5fefb7e1f0401f0e48d8958b"],["tags/Docker/index.html","753c2ffeae38fdc8dbc9d8c9481e4fc9"],["tags/Dynamic-Proxy/index.html","1e69a5904320c95411b3206c6b327fa6"],["tags/Dynamic-WebApi/index.html","c73f6d7c327b1dc5845f0c1e647e4c7a"],["tags/EF/index.html","d16cb61664f02fd60c6ba31b41eca39d"],["tags/ELK/index.html","7cc79749dc66d0e37cb4461d17e19e3e"],["tags/ES6/index.html","6f7c9ed60aec8ae16facc39b1e4043ed"],["tags/EasyAR/index.html","99d0ec8fb3ce50c1f5ae9c71f124a828"],["tags/Excel/index.html","c2dffd7e568f10e0d4efd7ea922e684b"],["tags/FP/index.html","2c0303f7b1977687df2079f3bed76ab6"],["tags/Form/index.html","8a5b7c1dadd9060b0bda4b4d74d09d07"],["tags/Git/index.html","4d6fa59fc2e136ab0473e7514fc9c58b"],["tags/Github/index.html","bd1a3fce7959b8678805998ef84006c2"],["tags/HTML5/index.html","227bbc0f556b83dbc6353218f3563910"],["tags/HTTP/index.html","b17a782d8bae4388fea66f08a8dff3f5"],["tags/Hangfire/index.html","02e1ed38fbabfb1d7cf8184ad235a7fc"],["tags/Hexo/index.html","af6f05c173b3258c3c4ebf086b7b662f"],["tags/HttpClient/index.html","5643e125393888e531145345fa28d0e4"],["tags/Hyperlog/index.html","3da304f3d9b7f4e850c1cc3ae74f62d8"],["tags/IDE/index.html","d4f9cbb1c2dc29513788d66c0ec72f71"],["tags/JS/index.html","d4b382441400faf6942e1ad516268328"],["tags/JSON/index.html","b1d63a09dd4c06525923094f80535d14"],["tags/JSONP/index.html","03ad29da950f4c75e1b92164494dd8a5"],["tags/Java/index.html","19b7adb58d682ea4b8f263716b78e084"],["tags/JavaScript/index.html","7665865c97b46193278bc3604b59a399"],["tags/Jexus/index.html","492aaeb18562852d21d0fe2b496da31e"],["tags/Kindle/index.html","951e1d683c0ab4a2d75f1d39eed17c25"],["tags/Lambda/index.html","e68d1359fbb0c33a328c7142bed5902b"],["tags/Linq/index.html","e23246eac2da78417596d6dfc1896076"],["tags/Linux/index.html","040bfae612658799509958fecda8df2d"],["tags/Liquid/index.html","ee92744ea195a8bffe2e4600285bc6a8"],["tags/Logger/index.html","db5e2ac1a56bbab51513d092d72195de"],["tags/Love2D/index.html","770136eb37890ded1fc8372e96dab343"],["tags/Lua/index.html","55479ae15b9fda139ebc87108971eb04"],["tags/MMD/index.html","7ab71874650ff56ee475818976848ef2"],["tags/MSBuild/index.html","6e1fff3de09d0a203d1692f13a76cb2d"],["tags/MVC/index.html","27d507e4d6ecd635cde9b6401f9ec5b2"],["tags/MVVM/index.html","40553c5ded850c936dd3b46754b2cb00"],["tags/MapReduce/index.html","b5a7300f4fe19c8df721cce4846cdbf8"],["tags/Markdown/index.html","fa99339d6a7c23f15a8b3f68bf7549e1"],["tags/Mecanim/index.html","b5cde621fabd0d26e2c0fbfb060848c5"],["tags/Mono/index.html","bd8e5c4376baa758d347e18f4760a977"],["tags/NET-Core/index.html","063984a02350073cc25f17c45a63a5c4"],["tags/NET/index.html","54bba916093d599d064d502cdb4e62ad"],["tags/Nginx/index.html","74b866ca57896e81cfa7da214a4c3775"],["tags/OBJ/index.html","4ff15767c9604ce5de4a95ec0abd709b"],["tags/Oracle/index.html","75707bc3c4ea099630c281a9a1246aea"],["tags/PL-SQL/index.html","85f630053477566b877c5c3afbdac588"],["tags/POCOController/index.html","d0bcb15455fe4e439f4e09d73d71bf3c"],["tags/PWA/index.html","9f5c9960d957758d12d1a14a62ce182c"],["tags/Python/index.html","231d9b68926d06a26a2cbf0d93671398"],["tags/RESTful/index.html","d372b9d5b63b17cb1b16ea9ad47f9098"],["tags/RFC/index.html","3d17000dbcf0bd529699707881939347"],["tags/RPG/index.html","7582d851dde70d881d2ef33322355879"],["tags/RSETful/index.html","e847387d14af0f2c55e9134f777fcd1d"],["tags/React/index.html","e60d2735fba71bb750a5ba284641aaa5"],["tags/Redis/index.html","ddeb4765225c633ce8f0dc86071aea0d"],["tags/Referrer/index.html","666b77f45a27fb4d45ec59d75c9852ec"],["tags/Retrofit/index.html","8f834390a59cb1def4f37a29a2134caa"],["tags/SDL/index.html","ba3a534666624939ea45a70b8cdd9919"],["tags/SQLite/index.html","cf5b5a3fe0ad1706c27d409eb2a9aa0a"],["tags/SSE/index.html","37cabb9a1d3684e1ca90bed3704111a8"],["tags/SVN/index.html","a934cd5f44bf6dbaa0c53c697c850af3"],["tags/Script/index.html","a716339f5813f83581bcbc0412bbab84"],["tags/Server酱/index.html","1f3e09d19aa8fcd741bdd22a3c3eb66f"],["tags/Shader/index.html","127d9af2793ae38fba74ad5b6a4852f1"],["tags/SignalR/index.html","9e7c860414cd6c2366aaa80fe750e539"],["tags/Socket/index.html","27eed02b8a888ec3ac770ef4b249f1da"],["tags/Sonar/index.html","185f1b8fab8c28fe5744a6baf72c0832"],["tags/SourceTree/index.html","bfae9059d48066446e8c32dd237bf282"],["tags/Sublime/index.html","a23af5477b2caaf4d2b49e53f939a405"],["tags/Swagger/index.html","af6f743eeca1b3947ccfa0172152724b"],["tags/Trace/index.html","9160e9b9f9d601f934600f9dbe9f7c50"],["tags/Travis/index.html","2932707a14919ff1926f2f825a8a80a4"],["tags/Unity/index.html","0489edfe4307831e3faec6e650d9bb48"],["tags/Unity3D/index.html","67b810cd568c6d3fd9594d90c22dd595"],["tags/Unity3D/pages/2/index.html","59eb01d0ae38b51d39f9ba263f3b0c72"],["tags/Unity3D/pages/3/index.html","83e8756a17666080f713c92d24017955"],["tags/VSCode/index.html","39d3af39794e3ad127b9dd86a4374c9b"],["tags/Valine/index.html","4bc1273c2fbb64448f2784460dca15af"],["tags/Visual-Studio/index.html","ce04cb89e6180e3139dac3322fdb05c5"],["tags/Vue/index.html","0c37dcd3b5d0e17b0e0371f524be7398"],["tags/WSL/index.html","721d3f6bc524938922523c478b697d11"],["tags/Web-API/index.html","106c148ba55bcb1ef455c9372cfa580d"],["tags/Web/index.html","e37048bdef5524460bd6e665963c6858"],["tags/WebApi/index.html","b92b68198e2dae2c748a7a2c649c43c0"],["tags/WebSocket/index.html","a84edb6740a8d72978a12db1a4269228"],["tags/Wechat/index.html","6eb7bbfe1c9412745a63be49b618a6f3"],["tags/Windows/index.html","d7678bb4bcc6faae911dea8c3bff9e48"],["tags/disunity/index.html","47e5a0bb9beb243f1acf722e2bb3ddea"],["tags/index.html","ca68fecdb1070cb78ebded3b13a1c3f5"],["tags/jsDelivr/index.html","4a0fdc17e4ba58ecadfe63fd59cbf3ce"],["tags/matplotlib/index.html","04b449924731e25627e8be91ae51f51e"],["tags/uGUI/index.html","7d3dea7c271373cf9b887996013dd46f"],["tags/zTree/index.html","7f5693b6e63033fd12bdbafb777ee0db"],["tags/一出好戏/index.html","4ec8d5ac99c0c894ac6a408ed81573b0"],["tags/七牛/index.html","4c331d0ece4db9b610a47e633a158c0c"],["tags/主从复制/index.html","e8ecfacd3b8e52bd44d799495ba202e0"],["tags/事件/index.html","1c31b189f52f82ba92297c17bded69e3"],["tags/二维码/index.html","7a97b9b13aa3758da8d80f98ba4e5d1a"],["tags/云音乐/index.html","82cbf28caf4bba168068e6fff171b339"],["tags/互联网/index.html","9fa1e55783b5866cf568817d7a1030af"],["tags/亲情/index.html","0f737c1e6ee0183014100f67aac86868"],["tags/人文/index.html","f2b297dc87d7142b8219641677c657d0"],["tags/人生/index.html","ad9e1bab92f461deb2510cea74a11421"],["tags/仙剑奇侠传/index.html","ffbb5cbfd8d4965a8cedd654a3967f80"],["tags/价值/index.html","3bc3247fe32794cdb81a734cda83746d"],["tags/优化/index.html","68a1d51b723abdeeb668ed77800b0ec6"],["tags/全智贤/index.html","2c86ecc25c4e337931949f1b10ef0b9a"],["tags/公众号/index.html","492aba5b61423844670ac981ac624dd8"],["tags/关卡系统/index.html","f1bc0aa2663f4cf41c9e4e25adc7e6cd"],["tags/函数式编程/index.html","cf58511bb32961728c3036246f366074"],["tags/别离/index.html","375a4716c96d010e3585212fe97e2095"],["tags/前任/index.html","c3eb71dd690cb1dc6d25557b90f0d49a"],["tags/前端/index.html","c1f5dc4fe99a2320317dc89ee04f99b8"],["tags/剑指Offer/index.html","4d82d0316ac49acff59043d82b373d50"],["tags/加密/index.html","530b3eed0f661020c14c7a020b4c63bc"],["tags/动态代理/index.html","fc9c87a8c1091e41e4dadcef9802285b"],["tags/动态加载/index.html","39eee622af4f372a1f727b78742b72e2"],["tags/动画/index.html","c4148fe987a1ee65ed4a33b37d0741e9"],["tags/单位/index.html","49be8f32f63551079ab219a371405f05"],["tags/单机游戏/index.html","e02d40e397354e093e0fba540e100c30"],["tags/印度/index.html","cdf41ea9dd2c5ac5c4459062a64558df"],["tags/历史/index.html","60c6cab96f507af1a8e1e0276e41b362"],["tags/反编译/index.html","0ced5bcb749812103ec88621a80adacf"],["tags/同步/index.html","fb9a9226b3923358ae8a49096c2f0a41"],["tags/后端/index.html","514967e9019ed20ee17375ac9b0a8775"],["tags/命令/index.html","2c91da11e41ad662d6b2173025f7c4a6"],["tags/和平/index.html","4fc83fc77b67620dca1a31b05e17c6fa"],["tags/响应式/index.html","44dc24ba8acb6e69bde383fc0497389c"],["tags/哲学/index.html","9e210b065da886c08aa5ed5a5980b2cc"],["tags/回家/index.html","e6b90cc3ce8b1df4ef9d97839c23c6e8"],["tags/回忆/index.html","552dd03a35823d530b52a5753bdc56e2"],["tags/回顾/index.html","3b7e2362d1b70bae55a1e090f687912f"],["tags/回首/index.html","5d157c77ac2522c9e71c256e108230d9"],["tags/图床/index.html","9bbc55437842f6c6699cc88dee97597d"],["tags/图形/index.html","ff08662705cb1dd8f6b510eec2f774d8"],["tags/地图/index.html","b9ebebf27b917608e5bcb1b0033e5028"],["tags/塔防/index.html","830c92b0e0923eacee8cc459c4efb319"],["tags/增强现实/index.html","67c50bfa9110039455b5befcfea594cf"],["tags/壁纸/index.html","beec28849c3d5ba04c207e8bc6704904"],["tags/夏目漱石/index.html","e29a74d13b7d71169b654ada29e61303"],["tags/多线程/index.html","a6ff90fe9f0404955ae7118b5dfab809"],["tags/大护法/index.html","04a2ac5c9a95fa63a306f3e81d74e67e"],["tags/委托/index.html","17ed571cef0cb15ac469f51498e8d29b"],["tags/孤独/index.html","effdf71914d0d061178256b12a9157e2"],["tags/审计/index.html","8e3f16876a93264e94c764ebc2ef1f0d"],["tags/展望/index.html","1215b116d88c7111edd6018b6c66fc4b"],["tags/工作/index.html","c4cf5f049a9562871842ba51573ea39a"],["tags/平凡/index.html","43f6b140de412b1e11f691b7fe42037f"],["tags/年华/index.html","09617102e3a0512fe3837d636ba6b7b5"],["tags/年度/index.html","93573269cc4be371c18c15b75bd9e574"],["tags/开源/index.html","2e8c2fc681c7011158ff7a7bb5702b5f"],["tags/异常/index.html","73cf2b3e085557b6ad8285334303fd37"],["tags/异步/index.html","2f8bdc78e76f65df831cd3e27d26a34e"],["tags/引擎/index.html","0253fea6d115c92803c89cac30dea5b4"],["tags/影评/index.html","700953658b6d1f5198080c2688b6c25e"],["tags/微信/index.html","b1a57040e7488475f5b2c62af8fa64bf"],["tags/微博/index.html","27630c9a59316358992507ef3940a8a0"],["tags/心情/index.html","dc58ea0a11d1c1afd800f8f41afb89ab"],["tags/思维/index.html","7636e99c2d7922fa387711bbc2e4241b"],["tags/总结/index.html","261823784d7d05c69114f8643ddd1144"],["tags/想法/index.html","69619d824caaa05e5f068bedb70471ab"],["tags/感悟/index.html","e85671490ccbca0a02088e925025c09f"],["tags/成长/index.html","b655f055a65bbcf8067548ec122886a7"],["tags/我是猫/index.html","89914a1587a03fa4d486d0406cfec135"],["tags/扩展/index.html","4438c050888e4301ea6b0561ec4368b1"],["tags/扩展方法/index.html","eeaa17ad283102741296ed9a7135b92f"],["tags/技术/index.html","bc23edeee8a778736d257f691b0a0ec9"],["tags/拖拽/index.html","2d6bdcdca6fc9224d471ac7590414f3b"],["tags/插件/index.html","b1a16edff1d11bd0b6cfd5d429bee03f"],["tags/插件化/index.html","7bb0c32f207fa09d113b5e6b4abd093c"],["tags/数字/index.html","2929fd519f8a165ebfa64763c3e18af8"],["tags/数学/index.html","640f0573e9752a5056d7849a2b321562"],["tags/数据/index.html","e2e9faa449d825aaf99ecb81df0ba4a9"],["tags/数据交换/index.html","f5fb592113f0853bd1c3b2e977eec132"],["tags/数据库/index.html","c178facefa601ca9c8fe60c9f4d3285c"],["tags/文本分类/index.html","6c726f91014e51e940a5232a2e14a1a7"],["tags/无问西东/index.html","bf69a6eadf9b8a02c352d65228efccd6"],["tags/日剧/index.html","c70981377fb257f6f790003d8098369f"],["tags/日志/index.html","4036f7211d65bb0b1c30c6453f1a0b05"],["tags/日本文学/index.html","6da70d93244239725fa3426178931641"],["tags/时区/index.html","ef589fdd95b27c885914ad5b3931e37c"],["tags/时间/index.html","5546766655f42ea2658798baf41305eb"],["tags/服务器/index.html","a91beea8b128cc46f07d12e017217b9f"],["tags/朝圣/index.html","0af89f8778a02c8fea0c603d1a9a1227"],["tags/朴素贝叶斯/index.html","bda0622b6b884d807d6b58b8ab42e547"],["tags/架构/index.html","7631701b40c6383c46a61bc7fa277ec1"],["tags/标注/index.html","1c05f722b8e51f1fdd3aee0e8af73e11"],["tags/校验/index.html","1de6ce0aabe73192c16040edea17ec78"],["tags/格式/index.html","e9028620877dd2f11febada2f27d155d"],["tags/格式化/index.html","7487c91f91edde133bc55f93de8383be"],["tags/桌面/index.html","98c37b045ae5b8c640713652f2ff7355"],["tags/梦想/index.html","5500e49d4f7c9734e979bac21a958210"],["tags/概率/index.html","5f786b0cea289f33df1f69678127f813"],["tags/模板/index.html","255319000bcabf31c47e086292a4e072"],["tags/模板引擎/index.html","035c04ff9e292b38a9eb536ad631bcd4"],["tags/毕业/index.html","07d0bdc909c8b216e17cbd86e7309c4d"],["tags/毕业季/index.html","17936a2acaaf469092639c014657db58"],["tags/消息/index.html","4d0c275765bb431618d78697739105d1"],["tags/游戏/index.html","c7b0813f18eaf6a926110f043ac90a12"],["tags/游戏/pages/2/index.html","62174234ceecd48ba4261acaeaffcc53"],["tags/游戏开发/index.html","657f08cf178e43a272851eb1f974c43d"],["tags/游戏引擎/index.html","440ec667e5e29d7d086d6455ea0f441d"],["tags/爱情/index.html","e1f57ac2bb94612079719d02bddf3756"],["tags/版本控制/index.html","05dae4d7cb8ce5f25ef54bde40c8cd99"],["tags/版权/index.html","bf2fb9fe8987a572c5d2a58f820f1216"],["tags/特性/index.html","83378254a2df6090d7f77a02d83a576e"],["tags/状态/index.html","9d163516bf3d398c86116306c99bab94"],["tags/现实/index.html","2d1ab85ed1776d6e4e27d0b938400cd1"],["tags/生活/index.html","1acfc9e4dcafbd8096d199cf0a700a95"],["tags/电影/index.html","a79a188800ff7eb2128e30ec4bed37fe"],["tags/画家/index.html","ee5a39e3335dcfa4ee3833a1e016bf05"],["tags/知识共享/index.html","cbc9a2fa6d8ebdbfca619c513fcfb89f"],["tags/矫情/index.html","a3949c1a4b155611a913f58e1c1fbae4"],["tags/程序员/index.html","3625bea52dd90752aaeef022c217239c"],["tags/穹之扉/index.html","5525d295b8017b1311b3f257979b19f9"],["tags/穿搭/index.html","546a271f3f5991812d71072fcf60118d"],["tags/童话/index.html","5c8cbd64ad262563c86473182fbd8cf5"],["tags/笔记/index.html","12487b57dafc1247ff63ec211918f2c9"],["tags/算法/index.html","5677f62ad8153123935e5f504c14237a"],["tags/米花之味/index.html","3cc2e434f8255698f0e03bcbf8b1a874"],["tags/缓存/index.html","bb0d7dfb69eaf9db579621e2c191104e"],["tags/编程/index.html","6a491e9b21d808c6a41412bf64394b83"],["tags/编译/index.html","28d977f36a91b762913f5876d417d1bb"],["tags/编辑器/index.html","b99df8e722ff83390b15861d7cc5a100"],["tags/网易/index.html","581be02373640163af5472ef448caf93"],["tags/脚本/index.html","0b64629687b0152d5c9aa9fd5a705ebe"],["tags/脚本语言/index.html","78fa965795ae5b0eca8cdb7860aad2d9"],["tags/虚拟摇杆/index.html","cc912730194daf813507f8c5f166c962"],["tags/蛋炒饭/index.html","841f44e3c44dff52141a8218b214952e"],["tags/表单/index.html","813c871c22db7853c2910645badc8e3b"],["tags/表达式树/index.html","78b96035fd3f92e344d73dc72c716e3f"],["tags/装饰器/index.html","964fcfe6c4eda92f9cfb3906a8ef16c7"],["tags/西安/index.html","5d901a52f157c4a058c124bcfbd7bcb3"],["tags/计算机图形/index.html","bee75024341d70ce34b615736ba4dbf4"],["tags/设计/index.html","c0365a9d354b38cc2c2b930ea5dd126e"],["tags/设计模式/index.html","184ad8098f5f5e14fec6bc779f874067"],["tags/访问量/index.html","9844e5b7e94ffad5078be3951bdc5f4c"],["tags/评论/index.html","2d51521f3f954a5f7a3e5d67444b127a"],["tags/词云/index.html","6a6f9ddb0f85757e9308fc06332083ea"],["tags/诗人/index.html","a0f344e3d6a229a53796ab88a0bfa9dc"],["tags/语法/index.html","1a92e8575d400683c01c7405907add7e"],["tags/请记住我/index.html","e89756c19729d9eade58eaf5acae8b37"],["tags/读书/index.html","2029f6c2cf69a2c07f5219fc0cfe6c45"],["tags/读写分离/index.html","4043e185d529d64418ad0dc9b8a41531"],["tags/调试/index.html","12c22fddb7ba723cb5962d8f3fccae1e"],["tags/贝塞尔曲线/index.html","6eac534f81b37bcfe9258b523c0dd057"],["tags/贪吃蛇/index.html","da0d41eafef0c1970da010fd8e9ec783"],["tags/资源提取/index.html","b84eb0fe037976fbeb186b920fe533a5"],["tags/跨域/index.html","41dd123643513645fe6ef0ba5dfc380c"],["tags/跨平台/index.html","75ad755107ae8bf1554971bf6ce7c8ee"],["tags/转盘/index.html","9a9f3494123cdebfef5d0097847743bb"],["tags/迁移/index.html","6d50b7662581f884dbc6331491ddc8e0"],["tags/通信/index.html","1b415c2d0bd42823436b3164311d8715"],["tags/邪不压正/index.html","7ee8c8f3453863bedc805df03756a61c"],["tags/部署/index.html","46398b488ac38802e10edf4340300020"],["tags/配载/index.html","ff38cc4466dcb4134425daf149990d13"],["tags/重试/index.html","58a77d8214c3fa0b04d75e5cd438aefa"],["tags/长安/index.html","bf72eaa01a60d2d968a6c58b786acbce"],["tags/长安十二时辰/index.html","a5cb66e77eec368f10d1fc5bdcac0587"],["tags/阅读/index.html","fa789262f2eb09785b555182cb343ac5"],["tags/阿里/index.html","56b594f305090313eec5317964166678"],["tags/随笔/index.html","8fa6a21b37c6b2a1270a343aeca86295"],["tags/霍金/index.html","ac20ab3f38be41dafdc5df6983c045c6"],["tags/青春/index.html","9b887fa61d831e77d8a0b4f8fef68cfb"],["tags/面试/index.html","91cb84fa82b32a1b4013b673d6a041c4"],["tags/韩寒/index.html","ccdbeb0da2e240c65efaf4069b89c3af"],["tags/马尔克斯/index.html","581290d025fd6030adf8036429df225f"],["tags/验证/index.html","decef880d83c0ad2a8e876100d08667c"],["tags/黑客/index.html","f10cc3af907eccedb29f58324d7cca21"],["wiki/index.html","9cacad098bfea7ae61ff2b47b5a3ad72"],["works/index.html","daa5190f972bb7e830df3cb5759e541b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







