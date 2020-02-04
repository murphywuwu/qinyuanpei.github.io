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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","c58c19b8f8a5c2ec12bb098e5e4cecd9"],["archives/2014/12/index.html","e7dfa03100cd0978851d1869ce95d174"],["archives/2014/index.html","7f4d03dd8f71a38d89baec4c31a7ecec"],["archives/2015/01/index.html","86bd2dd0e546bdb8124636fc0d266a4f"],["archives/2015/02/index.html","b152aaf6854b4ed614296e772e547a1c"],["archives/2015/03/index.html","8f3f74433aff06ff06b819f22a331c90"],["archives/2015/04/index.html","40556c25b61dbb3e9668469c0e0c040b"],["archives/2015/05/index.html","4959b63c79bc0366face74f52197cd32"],["archives/2015/06/index.html","85d01e88ab1216d4f0511fa1a61b85c1"],["archives/2015/07/index.html","496a699ddbd6ad1dd50d22262e96c86c"],["archives/2015/08/index.html","f4c4c2320632be76413ffbf9b9db3742"],["archives/2015/09/index.html","908262513b0e6bcdf5733fc47d4a84ad"],["archives/2015/10/index.html","c1231b385033f2d38eb3caa5a0615b32"],["archives/2015/11/index.html","2d2450a88dcf631237233f949b04f78a"],["archives/2015/12/index.html","cbf41f594db77ad8b2d4d51b762afa89"],["archives/2015/index.html","3634a9a73e142909a5845dceb6bdc4fe"],["archives/2015/pages/2/index.html","0438b73216d283aff814b7230e3ea0d9"],["archives/2015/pages/3/index.html","e98e285f64e153806863363aed9577b3"],["archives/2015/pages/4/index.html","32e09556e2f392302a8cad3435c00c1f"],["archives/2015/pages/5/index.html","21a6e1d9c9717625c6ef3fe330fd13d7"],["archives/2015/pages/6/index.html","fc825ee17c595dda34a90239188b0a4a"],["archives/2016/01/index.html","47929d5ce216a9e526339a6dfcde0025"],["archives/2016/03/index.html","7503dad0716b10abf3f26fbe72f87c91"],["archives/2016/05/index.html","d104e683c030e578268b85b14bf27a50"],["archives/2016/06/index.html","34b4cf36b8beb822c085e40a7e529c43"],["archives/2016/07/index.html","3c54281337b7f8a85a7b35d1fa7b3051"],["archives/2016/09/index.html","e5f08d7959e0ae7316c82388e628b0e5"],["archives/2016/10/index.html","f00453630d9b4e6aa44fb64a6beeb9ce"],["archives/2016/11/index.html","f530603bd7df126dcf0cdeaa9a4facc6"],["archives/2016/index.html","790805e05eeb386d56ef0828349e10b1"],["archives/2016/pages/2/index.html","fcd048f2abad98c8566a954a1580b91b"],["archives/2016/pages/3/index.html","584bfb886255cd5ec2121352cfe50c99"],["archives/2017/02/index.html","f1101f87e5d648391d09d0aab24aafb4"],["archives/2017/03/index.html","dc8046851c1a0a6b2717c771a4d1cb18"],["archives/2017/04/index.html","adcf8c0cb6da6fc74285447122adcf65"],["archives/2017/05/index.html","e0af1d7d03e05464037b922d4d5848ee"],["archives/2017/07/index.html","5113334b64ffe3107318fcfe214c01cd"],["archives/2017/08/index.html","f395d162dffc2607cea0ca1ee1beb6dc"],["archives/2017/09/index.html","357616fc09801f7197a3fbbc3e8d578f"],["archives/2017/10/index.html","f6962518172a3cd838eeca58c29b5a3a"],["archives/2017/11/index.html","e29c0836f73a3c3d36a89ad0c6b5f360"],["archives/2017/12/index.html","cc0e8e7471c62abd5a2debe8cd588ed9"],["archives/2017/index.html","535433aba6e114e6946e5fd42a0bc3db"],["archives/2017/pages/2/index.html","69decbcd472bde619f4d3526e7db6dcc"],["archives/2018/01/index.html","67337e8d467d7bd6f924ab1f93166b1c"],["archives/2018/02/index.html","733672f1e5744b1ae6c94258b3de2cc8"],["archives/2018/03/index.html","3cdda173a2a6eb1e43d718155517eae1"],["archives/2018/04/index.html","b3be9cf79ce9c1af3bfbe859d33c2d59"],["archives/2018/05/index.html","64b69cfec59a5cbde06b3f11ac0ce875"],["archives/2018/06/index.html","6547783c4026493c171883e2a3239c2a"],["archives/2018/07/index.html","7bfdec2a9be31e8640e0431acb92a1a5"],["archives/2018/08/index.html","587228293ca7db895c4be46785bcb24a"],["archives/2018/09/index.html","be8f3133245b0d51f26a0502725e6b32"],["archives/2018/10/index.html","db11a660e6cf1042110a5c72c64a890e"],["archives/2018/index.html","0c7040556e46fc64eb3c6fe2c77bd66b"],["archives/2018/pages/2/index.html","8557e4434ab9686e0a5031b91eadfb28"],["archives/2018/pages/3/index.html","fea7fadcb2eed49473cb638c618bb1f2"],["archives/2018/pages/4/index.html","c4ef47602cfbf6745e4816001522a033"],["archives/2019/01/index.html","316202d59b2d008892e73d0a4447adf8"],["archives/2019/02/index.html","a78dea3057852c69162bc22640d7172c"],["archives/2019/03/index.html","80371256f35d9df92c3401f23ad67651"],["archives/2019/04/index.html","b87edda5e996a74478fff6b9cbd47950"],["archives/2019/05/index.html","4f4b9e42ef0f390e66619dc6745b7d4d"],["archives/2019/06/index.html","fd6e1084609903d8ea8ca3a4df4e5ee4"],["archives/2019/07/index.html","b579a8599bd463697c0b497b7a35bb56"],["archives/2019/08/index.html","712f76cf5f8baecf06773784c1473c01"],["archives/2019/09/index.html","9340c4b60317abb6920eaeff405ca4b2"],["archives/2019/10/index.html","738629549ceb1f5363a80539f103726e"],["archives/2019/11/index.html","ee78516e2201558b8e8eff77d2d9d6a6"],["archives/2019/12/index.html","dfeb2b73b1c75be7ba03287828be9ccd"],["archives/2019/index.html","cc9bf33656dcec6794791c62cc4c1a3f"],["archives/2019/pages/2/index.html","621306e613c77ae3b8fe8086ffa8c7bb"],["archives/2019/pages/3/index.html","a6640f6be2ab57a9eb260364446a236c"],["archives/2020/01/index.html","0c5ec5456cb6768996e26bd00d8e8f65"],["archives/2020/index.html","84369299f9c78a247596194ff6645e8c"],["archives/index.html","33c43190d09a9beaf003b4514a415072"],["archives/pages/10/index.html","81361f176af4630d8f6a9371b06689c7"],["archives/pages/11/index.html","939954a606cd0b3bfe69c6337d100737"],["archives/pages/12/index.html","6fd051faee3c81f17077e726ff620b34"],["archives/pages/13/index.html","621f2c3c651717acf98d8dc1036868bc"],["archives/pages/14/index.html","c2d6becfada767baca69c8a2a78d1dda"],["archives/pages/15/index.html","26a606ba9a19de4bfd7dfb3ae469398a"],["archives/pages/16/index.html","bc6019e442c2458c85699440b5e0156a"],["archives/pages/2/index.html","66dd3eaa213794dda977582496873b35"],["archives/pages/3/index.html","d8f7add996ff475580e9ca4298527b9c"],["archives/pages/4/index.html","fdad71263cffad9dc65aafe76fe637a0"],["archives/pages/5/index.html","16ffed23dba9c811e545e9e64262e09c"],["archives/pages/6/index.html","64f1003279ed1341f0af4f2a814bbb86"],["archives/pages/7/index.html","838c4cbc2910522df1a1d57afa6fbb4e"],["archives/pages/8/index.html","3cd73d233594558d9e9c8d3ab7b646d5"],["archives/pages/9/index.html","560a539d76fdce7c426b69d92686ab76"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","7a09190e67e17f0a6f8010961f614538"],["books/index.html","3920b0976ff7258cf52c18db81855d04"],["categories/Unity3D/index.html","ff56c514e12af195f2dc2ea8d04a7a34"],["categories/Unity3D/pages/2/index.html","a319599d611ab645371f79a0edb3cc84"],["categories/index.html","89993ab4380c7be86df3b98ed367ac85"],["categories/人工智能/index.html","004afea3a7a370b3a0c43d2795df5d18"],["categories/前端开发/index.html","e872cd887bc1b2ac94cdb90959090051"],["categories/单机游戏/index.html","7959dfe76c77aa2091b8192a4cfa584a"],["categories/开发工具/index.html","0bb8b3ee8e494460c3179dc1cbad1366"],["categories/数据分析/index.html","db6e9d6e267f6b5c74f13d5861ea4e44"],["categories/数据存储/index.html","5958b92b65bacf35f3db76682d89ec44"],["categories/游戏开发/index.html","e81098d8bebd402122539a9b9103ce42"],["categories/游戏开发/pages/2/index.html","3c2d4bcfac1be2658a3433e99a2329c2"],["categories/游戏引擎/index.html","65e60f9426cae4d1cfdd9b2bcd3f12ab"],["categories/独立博客/index.html","b9b8583057f022550cf92e4c51104a12"],["categories/生活感悟/index.html","a2a03706bd7b4502444dff66459490c7"],["categories/生活感悟/pages/2/index.html","7000af35a630b19d13dae6198e6a5a5a"],["categories/生活感悟/pages/3/index.html","aaf1cc7272298e9345ad7217188131df"],["categories/编程语言/index.html","4553d8124c75fccf47197661680544aa"],["categories/编程语言/pages/2/index.html","6ff953ccf3122a40c97a0619fd1c6eb8"],["categories/编程语言/pages/3/index.html","cf31cd6b1b77f5acb4ea603a2d2f1535"],["categories/编程语言/pages/4/index.html","c55f32a4e9ac31a341a46315fffcf512"],["categories/编程语言/pages/5/index.html","2bc22d4ebe20f2d3b20d5ea831cb717f"],["categories/读书笔记/index.html","06b5af359b68a5257f0b9533166fc324"],["categories/读书笔记/pages/2/index.html","144260f8773a0d5ace504c737b7f326c"],["index.html","75dab51299f025cdaf153cec2cddfc74"],["movies/index.html","ceeecbe3c47bd3c38cf71dae885b0eda"],["musics/index.html","7b05b91231dcfb72ceed5c2f91fcac94"],["pages/10/index.html","91009d41e1d48359fe953a70394a690f"],["pages/11/index.html","a2e3426ef47c64ddaa99e20e106f9bb6"],["pages/12/index.html","0433a8d9f73f6a65e1186c04a201ae6f"],["pages/13/index.html","40d3b8bf83fd3ff91b9790ff2917eca8"],["pages/14/index.html","ffc1e08c06f551f0383ff3d5f739fe4d"],["pages/15/index.html","a18b64cdb182f56b37a657505eaacb96"],["pages/16/index.html","95cfdbf7078e018fe68b944c9925c99b"],["pages/2/index.html","85f8597585b50648f1b9f5a6699b2d16"],["pages/3/index.html","a97d23f367e457e61aa8ed6f71080b6c"],["pages/4/index.html","d8c2e465c32b39a22bc60908b30f6d3a"],["pages/5/index.html","3ccadffb904ed3b54c5e51fab22182b1"],["pages/6/index.html","38ab81eba5211da69e3f18ac2bad6698"],["pages/7/index.html","ba5c67d75a333c901cb885c50fe3e308"],["pages/8/index.html","f01691d00406782ab7e0dbef9f621403"],["pages/9/index.html","5fb8b932422511c08420e8e1816a4d70"],["posts/1059499448/index.html","f933b98573ebd0ba5f7fc7aa1fdfb148"],["posts/1071063696/index.html","b39f12cc72101a97f063a9871347a491"],["posts/1082185388/index.html","83a14753d6f1e9230bfd29b6ed36b21b"],["posts/1099762326/index.html","eda32d2b6af9d543ae8d122ededec4fd"],["posts/1113828794/index.html","49f3ab58b2af67b37013c0e1c0aad2de"],["posts/1118169753/index.html","ff3cc5e9df06bfdd2bbab3e32008bd17"],["posts/1122710277/index.html","f1c7af25bff65b237771a28950110f83"],["posts/1124152964/index.html","63722a680c1910aba218d82db8a29262"],["posts/1127467740/index.html","bc96afdf191b9fc2029f64e8e9ca90f5"],["posts/1150071886/index.html","dcdb7d9a8105b015f6b38e35ec1870fa"],["posts/1150143610/index.html","7b2eb279afd25a18489e33bf3cf06dc2"],["posts/1152813120/index.html","709be6cfd9f9c5e54b436337f5989a01"],["posts/115524443/index.html","50951a6f54fe821e08381b7c73c73e62"],["posts/1156673678/index.html","ae20bdf0f347ec83aaa3a3ccf9529a3b"],["posts/1166840790/index.html","654e18119bb8e20cb1437c518729b8f6"],["posts/116795088/index.html","7de37ef2a4faa8777b435c9728a76e68"],["posts/1176959868/index.html","f109d457542eb3b9ec4ec7002b91af95"],["posts/1190622881/index.html","092ea2b8b6b215e229cdb979937102b8"],["posts/123663202/index.html","279fa8e4e2dcd05772d7011c819b028f"],["posts/124807650/index.html","db76607341ef56cfeb42af1a7a3988ef"],["posts/1254783039/index.html","d7b8f19ebc96da083543e3f349bd4d6f"],["posts/1320325685/index.html","091e276e1d376698d3b3bfada76012d3"],["posts/1329254441/index.html","207d4c3978d1af5467c21f1af71e9cdb"],["posts/1357715684/index.html","0eaf53e7aca48ea8b5983e93e770ed52"],["posts/1358971951/index.html","ae5e8d634d0927ebb2beedbaacc1648c"],["posts/1386017461/index.html","e4196a36ef361bd1eb7234c817775d22"],["posts/1394521917/index.html","a10b98356d6fa0766217cfe8f47151c2"],["posts/1397717193/index.html","69bccbb56df3861d4b8331c5e778ecf4"],["posts/1424645834/index.html","c98e2a5ea0c12959fc762233e8f36972"],["posts/1444577573/index.html","5ba00b0268ae6b4503d84a49b2a23c99"],["posts/1467630055/index.html","ad93786069427885301cc22744f6e137"],["posts/1478979553/index.html","cd7ea41a45fa532e7c570ecca68cf05c"],["posts/1540537013/index.html","152dca369e41d9ea976eb6477b1c97ea"],["posts/166983157/index.html","2cac5f3181ff2eab590ed391907f5371"],["posts/1670305415/index.html","3347156bfad2be213a71e6c2dee747bb"],["posts/1684318907/index.html","94084a685d6ceb44aa6ecbc63a465d4b"],["posts/169430744/index.html","e62a6e6327972943e27d3d9d7a117d11"],["posts/1700650235/index.html","e00629524a1401852b6db4ed7c9c8c00"],["posts/172426938/index.html","bf97a0bf2db9476af2c72123e9e2b561"],["posts/1836680899/index.html","a3ba4d6e923c5a13c9431ee8f654a59e"],["posts/183718218/index.html","c7f705a7dd0d14af89fe6b29421d520b"],["posts/187480982/index.html","23ff0d4efec1c58258037831a1ec0423"],["posts/1930050594/index.html","517e5f08de131c992852b5660308223d"],["posts/1933583281/index.html","3a80b7cb900472819838277a2094b6d8"],["posts/1940333895/index.html","a9345b762c301638be0c4ad50bacf93a"],["posts/1960676615/index.html","907a7b9b22e680b000305c291b933536"],["posts/1983298072/index.html","d3595aaec7580198e651bcc2a354f6f6"],["posts/1989654282/index.html","b1d50945cf328a45413ebee9beefa50f"],["posts/2015300310/index.html","38e76a7622d2bbd080904997ec0ca2c4"],["posts/2038378679/index.html","bd0f30933b751e63e1f8c9fdd6440aca"],["posts/2041685704/index.html","b92cfc8f249577e9191ff4bb9175df7b"],["posts/21112647/index.html","b4531228479ba01ed2a689c3e819b59d"],["posts/2158696176/index.html","cec01044cd1cfe498a23b72cec029b8a"],["posts/2171683728/index.html","2c4912b258bf64306ac40bed91e0f377"],["posts/2186770732/index.html","1530435d48a4b33a96501e1d984f7216"],["posts/2275646954/index.html","ae99c4e95a9fa36e95b8607dc34185b9"],["posts/2314414875/index.html","05e5fc36ed319e28dd3530a1ff5a36bb"],["posts/2318173297/index.html","ad7208795eef464e849f7cd54d59bf9d"],["posts/2418566449/index.html","35c7978b794cbe6649b33a241ffdaa2b"],["posts/2436573863/index.html","44dba9935e66723f77730c58898c6423"],["posts/2462008667/index.html","1ba5ccea56443fa8139998c88ef5388d"],["posts/2463121881/index.html","39ac435964e8021bd86fc704a70aaccf"],["posts/2527231326/index.html","60e660d6c8791b220da18de2c8c85479"],["posts/2583252123/index.html","37bb385bc4f541d816b26849f27b2f69"],["posts/2613006280/index.html","c039627bcead60c31de9b36d2a255dcb"],["posts/2617501472/index.html","978823f906927f8f710c49a8de4a6978"],["posts/2676125676/index.html","c58c82670c2a4b51a3b600f03f5a6b1f"],["posts/2734896333/index.html","c6431d0aef42c18fe72c73b162e91344"],["posts/2752169106/index.html","2e08d5ae630878d88c5aa0ca2454b8d7"],["posts/2799263488/index.html","4198e75766367032b20a10761512370a"],["posts/2805694118/index.html","928013e6ec7d18430a0a0be859cf9177"],["posts/2809571715/index.html","9b6c2818c1ceabfa97744a7696fcde70"],["posts/2822230423/index.html","a50122805c30703f336c05f317d11f51"],["posts/2829333122/index.html","f02d839141c251dc5a11395909937e62"],["posts/2911923212/index.html","f29719d7d51285c6069d9f1d14ca6ccc"],["posts/2941880815/index.html","361d9f2a107387d27e8bb6076f29b59d"],["posts/2950334112/index.html","471d496387413586ad4530c6e5e75c9c"],["posts/2954591764/index.html","ff133afea8c1bdf13dd26796bab3ab9e"],["posts/3019914405/index.html","26f0837101d17f505300b06e1f87930a"],["posts/3032366281/index.html","4a6ad5f54dff99cdb41c81decc5043ec"],["posts/3040357134/index.html","1650fca282dd6d65a2531df1307c837b"],["posts/305484621/index.html","7701ef271fdd4ad83db9b371a973ea38"],["posts/3083474169/index.html","a6e1252a1594ab117de6edd789565433"],["posts/3099575458/index.html","87704d3c954c7da023b50c9c6509689d"],["posts/3111375079/index.html","d78e87af3da65929e92c1c5302f3c195"],["posts/3120185261/index.html","222a7a2b907cadb81cd4cb50aab501c3"],["posts/3131944018/index.html","a235c175938de9b3e6d45303dc513cde"],["posts/316230277/index.html","50ee4ebd4883e89437edc8a4954c5ce8"],["posts/3175881014/index.html","ad12527792fbad8f2ed82458401b37f0"],["posts/3222622531/index.html","270803f730848bc4f9d6ca8ddccb019e"],["posts/3247186509/index.html","a2a4844b1df92ad9c178afbd242aa89d"],["posts/3269605707/index.html","8d4b1f831535cc42ec89be72be1b3c51"],["posts/3291578070/index.html","5ac895282d870954f96964d2cf88806e"],["posts/331752533/index.html","debed20ec19976403d8877a9ec030036"],["posts/3321992673/index.html","479dd6a2f12f5502bc3b9647fe0cb3d3"],["posts/335366821/index.html","35efdd2bb1e52c476828ec8696104de7"],["posts/3356910090/index.html","8fff6f12f4ef2465b0a64d1547f48a8e"],["posts/337943766/index.html","5e756fa9e9ee250d3a9e2007f0ef5e41"],["posts/3417652955/index.html","7a4d0682dc25b380a6b385265d805d4d"],["posts/3444626340/index.html","d8cd7e25acbc4d5a40eee40833e3de56"],["posts/3449402269/index.html","20b24aa581b34823849ca776d8a125f8"],["posts/345410188/index.html","1d391bd1a826a392ae0dc7896e5810bb"],["posts/3461518355/index.html","2a6584f59429875701aa4842993a9130"],["posts/3494408209/index.html","b6b3e110b9b23d72233b817ae67f06b5"],["posts/352037321/index.html","42707a6a3ecaf410d43a03a64f408bf5"],["posts/3521618732/index.html","4b002a854d00da232a08746c42be8927"],["posts/3568552646/index.html","feeee3680f1410aa3af22ce6142c1f43"],["posts/3603924376/index.html","0753813fbb1053db6f2ed4d55c5b44fa"],["posts/3637847962/index.html","52ea8370acc2969a1cab3b21af1920c6"],["posts/3642630198/index.html","12f11980e2c116785446eb8abf0e4ce4"],["posts/3653662258/index.html","078d5177b57524077ad2b357a49cb55a"],["posts/3653716295/index.html","7ea14049ea72494ec370ed21560c720f"],["posts/3657008967/index.html","8212011bbd058690d5789f8b785e35e2"],["posts/3668933172/index.html","85c6d405d1d152bbd63d098a8ff04958"],["posts/3677280829/index.html","f22df483a2ddd8b67739f4770ce3beeb"],["posts/369095810/index.html","380aa979d019dcfdaa286fb9d4751c28"],["posts/3695777215/index.html","6652a57e180822829dc4b6726a914302"],["posts/3736599391/index.html","df65dd8b2a212350677c292f7929b724"],["posts/3742212493/index.html","f5d3abed20851251a0ff6fab193e0f4a"],["posts/3782208845/index.html","eb4fc9ea807ba6351b3964710f29abb2"],["posts/3789971938/index.html","e06d5d376dd799e1e83740d81c2a0583"],["posts/380519286/index.html","fb89a0513dcb6c790bc89ad01f683350"],["posts/3846545990/index.html","d2b7fa564ed7a7d5c2bfba93bb8f49e4"],["posts/3873710624/index.html","b34fe0db20a5d9523d96d033f3105d47"],["posts/3959327595/index.html","88763e22d601c2486123f7d0bb4f79bc"],["posts/3972610476/index.html","bef0b641df84ed908d3e22995d860217"],["posts/3995512051/index.html","109a0891f9e9e1f13414416e12732e2b"],["posts/4088452183/index.html","8d0ce7d9f9b83c0abd22ec40b78a70e7"],["posts/4116164325/index.html","d09d4b341fe72002da4b8a7ff36781e1"],["posts/4158690468/index.html","650ea0d9f5a2dede5db5302628628d7b"],["posts/4159187524/index.html","7462aee5712bc67367b326675d2b2697"],["posts/4197961431/index.html","cf1791a18678c8b8f6bcc885c57b11a0"],["posts/4205536912/index.html","54ffcda741c771a0e05b1f46d926ebda"],["posts/4236649/index.html","5b1b6cb8694864353b827db721009d9b"],["posts/426338252/index.html","e7ebf3f58fb9c5808cd5950b0b3a1f85"],["posts/450254281/index.html","ccdd43e9c5d15950a92dfe88fabf47b2"],["posts/4891372/index.html","68dc04d2358b0debdac11a2f30b70ef7"],["posts/569337285/index.html","ffb5381a9af3742e37eaf414e6151bd4"],["posts/570137885/index.html","2aafb7e7ba3911a1dbfc16f66fcf6cd7"],["posts/570888918/index.html","ce58955fb1a459831ae70048a8d7d082"],["posts/582264328/index.html","eb69fe379a65bf12c01be11d1446543d"],["posts/632291273/index.html","7b68c2a7599b7ae947287a65307f71c1"],["posts/70687890/index.html","eb7b25f1a2cb1bcd7cd0d68d6277467d"],["posts/719322223/index.html","ecdab6380a5f090daa58439b13aa807b"],["posts/720539850/index.html","22395390167bff3192b0534bba176ad5"],["posts/786195243/index.html","83c59f1bf9626c7a33ed71c3ec1aed4a"],["posts/795474045/index.html","63034c99f054505c31155b6fd4deecb0"],["posts/815861661/index.html","ae54a9df737b68771e83b0fa48bb335d"],["posts/821259985/index.html","5c4111bf6f73d4596881ba3708e2c831"],["posts/828223375/index.html","393967060d2fec188b2f08cdceb883ee"],["posts/887585917/index.html","1802655cde0f4c125d73021c831dff24"],["posts/888549816/index.html","29f0111f71d76715c5ec3f2f40d948c3"],["posts/906436376/index.html","fa21bfb01492d2c6376c4793ee69e41b"],["posts/907824546/index.html","059f3827b078bb64df450c4821763855"],["posts/927393529/index.html","e50989e6652a0f37238ee17d5e7b7d9d"],["posts/94443781/index.html","f309c88f3f8b817fa348e58b21235cca"],["tags/2014/index.html","16178ec4b4df985f24140238364fdb4d"],["tags/2019/index.html","c1d144549cc65b444df0ca32c5bb8897"],["tags/AI/index.html","3505cb3b2901982f4f591308eee92b88"],["tags/AOP/index.html","d8321baf19aeb3ad73dc48a96134f24c"],["tags/AR/index.html","c53150062568c5a409710f1f6f9dc27a"],["tags/AssetBundle/index.html","28964c4a427e088f1a7474655af72229"],["tags/C/index.html","cb209aaae5b865024518015cf6d900f0"],["tags/CG/index.html","b59c7d805572c6c3e71b41f12e5759bb"],["tags/CI/index.html","e570ee9460009fb077dafceb6707f217"],["tags/CORS/index.html","4b5f43fde4f83d3c0ac802bc9b7fc0b5"],["tags/CSharp/index.html","8818faaa9145d75853b7aefd87d2ddc8"],["tags/Castle/index.html","553761796ee05e1094ecd4240eb14b26"],["tags/DBeaver/index.html","47dd217df966f9df8dc9e689f948c3fd"],["tags/Docker/index.html","43d41d2005b56f6241521ae719eb5f50"],["tags/Dynamic-Proxy/index.html","9c3fd9a82e3c3a775c570778eec3cdb9"],["tags/Dynamic-WebApi/index.html","f886f8af47b87b14e82f8b85799814c4"],["tags/EF/index.html","b83d093f0cbca8890df20649aae5e65d"],["tags/ES6/index.html","ba19c93ffc8bf619be0006adf3ea27bd"],["tags/EasyAR/index.html","b7c8decc7612fac50c568aa3666a466f"],["tags/Excel/index.html","9b313575b8bcb945afce0b069516086e"],["tags/FP/index.html","a94f49df749259274dd95346f3a80a16"],["tags/Form/index.html","8802b2b221c4dc90f2e8ee270f3fe29a"],["tags/Git/index.html","5109df641455d7445868640f389eb203"],["tags/Github/index.html","8529611e1f43fe8e5c1bc9608c874a70"],["tags/HTML5/index.html","e6a03d75f75a099d68db1997ac1f90e1"],["tags/HTTP/index.html","db663cd3babe7c4a35a5d9c7b99f9bf8"],["tags/Hangfire/index.html","bae2a42c635aeaf7e7650fc117e630e2"],["tags/Hexo/index.html","e20cf16e1782d29572299d9152959945"],["tags/HttpClient/index.html","edfffa3621c34bb2d4b39e3ad75c43c2"],["tags/Hyperlog/index.html","86ed3ae75ba88db892d7b8306749e295"],["tags/IDE/index.html","ccf9bfd05d9196faaebe35a817ee4cf8"],["tags/JS/index.html","470ad2687202c569f1301dba8952495c"],["tags/JSON/index.html","c071e2c03f1da17c3945e760d1fd6bd4"],["tags/JSONP/index.html","70b18b8f02d0007d35080835cde8a59e"],["tags/Java/index.html","495fe54c65565d4a2006243ef2825a5e"],["tags/JavaScript/index.html","0bc07ed24420677903e62e17bc2b9397"],["tags/Jexus/index.html","2bf5d8775dc64ab8de001e2a446e6d9f"],["tags/Kindle/index.html","ff8bba3df8c0c8f698476ec619f6fc11"],["tags/Lambda/index.html","eb9eb66dbdb0c7f446ffc9264263f484"],["tags/Linux/index.html","02f5ea4a4cfc12a3296cc1a63e2095b1"],["tags/Liquid/index.html","4e52cf1097e63e7c294bff016c7a1abb"],["tags/Logger/index.html","ffa48a887fab5bf28bdbf199834e0280"],["tags/Love2D/index.html","4b27550ec22f23dfe626ebe808fe3db3"],["tags/Lua/index.html","b030f95917915ad076ea073e5f5320e6"],["tags/MMD/index.html","e3b2d04c6c1f0badcf09658e88310c6f"],["tags/MSBuild/index.html","8b8d8d48db842c1052c8d8c7f871d6fa"],["tags/MVC/index.html","5c83eb6262b590701841d6a3de26b102"],["tags/MVVM/index.html","eb541aea8b70864a5a3cc3b1f15a4399"],["tags/MapReduce/index.html","e8ff186ab5c3cce6ab3ca8375336e601"],["tags/Markdown/index.html","b49bf889b301408a60e3ef8446772e1e"],["tags/Mecanim/index.html","babe371f66a8c853901ecfb5480380c0"],["tags/Mono/index.html","f6b7ace04933d58ec9f87f00c7d4b0f6"],["tags/NET-Core/index.html","eb64195648d0b28fa6bf9b1307bd782a"],["tags/NET/index.html","18bab413919c2d1c42ff224ef46d6559"],["tags/Nginx/index.html","5c8df0d179fbbfade5d2202fc512241e"],["tags/OBJ/index.html","2472617d220ad9fbbfdf47b3dc0ed76f"],["tags/Oracle/index.html","45c8e8c246c7ad581220b74effba580a"],["tags/PL-SQL/index.html","c82a7436259e7818fb4e42f824518f56"],["tags/POCOController/index.html","44fee7a9ad5f9a3238e2600382d72d63"],["tags/PWA/index.html","7e9204eeaee8063505cfa4fbc9e1f0c5"],["tags/Python/index.html","4cf01f649984216e5d51e1dc2c6b2b56"],["tags/RESTful/index.html","f821720b9cebf3401e53f9f89acf957a"],["tags/RFC/index.html","1d6431d940e8d4298c81404545a1c0a9"],["tags/RPG/index.html","39f4c9dfaed3f2a40e95f651bd7035dc"],["tags/RSETful/index.html","60a44a5b3db1183236d184ee028c47fa"],["tags/React/index.html","a16df658f4c1070bd8c4a85a46b1d385"],["tags/Redis/index.html","a3397469fa3f7328907aaf759d4b8383"],["tags/Referrer/index.html","a60186fda28eccab5850d34bb80195dd"],["tags/SDL/index.html","6dab72aa04bad5ea8aeecc1cb699b694"],["tags/SQLite/index.html","1c6f00e59871534dc7d0f98171e61877"],["tags/SSE/index.html","476ff22950158d6af7e39e3c07aee4c5"],["tags/SVN/index.html","029c3cfba5df9b7da07d89b684890796"],["tags/Script/index.html","29e7b41247c3f277f120287e9a32f2b9"],["tags/Server酱/index.html","a3ca37c288bc4f038b75526eab32bdae"],["tags/Shader/index.html","d63a8f8a256f824e2eb31db8e96456db"],["tags/SignalR/index.html","ab91b52fc1557a375ed0203ee60d23e0"],["tags/Socket/index.html","232aeaf88cb10696a5a1025e22cb0b05"],["tags/Sonar/index.html","49a1e8c0f8f88b0d9ddc49c0a43086fc"],["tags/SourceTree/index.html","381038134870745323a7af561c0875a4"],["tags/Sublime/index.html","2e10a3aca92a6ff5e16fbd0ae969a7c4"],["tags/Swagger/index.html","b63954cc23d81f574d2764ead8ed04f7"],["tags/Trace/index.html","58f2640e86f698ecaf11ff3290469625"],["tags/Travis/index.html","549d2824cac3754fbd80d9a20a3d5e57"],["tags/Unity/index.html","8070e59c0bbd04f808b8f1c681f5f534"],["tags/Unity3D/index.html","55665a9ccf732fb0890eada4971aec93"],["tags/Unity3D/pages/2/index.html","0016002f359e5dd22d43eb69b8a0a691"],["tags/Unity3D/pages/3/index.html","3d06b552a4a33aa420637abcb147861e"],["tags/VSCode/index.html","3451b80aa0f02048fd1fefa7da8bc8d3"],["tags/Valine/index.html","ef96d08b4116b834e335fe20309fbad4"],["tags/Visual-Studio/index.html","cc5dae63aca4bd2b90ed83823a92e463"],["tags/Vue/index.html","b7aa9f6979279e712bbf12420641eaf3"],["tags/WSL/index.html","c0d6b7bbd272bc4d520fd7443157e8d1"],["tags/Web-API/index.html","ffee087abb361f077a70f42ba401eee1"],["tags/Web/index.html","4df1343e35efe6cf21a594db4571071a"],["tags/WebApi/index.html","af5aaf13f7981a387b404978ff8a83c3"],["tags/WebSocket/index.html","a856c43f9500034a6619283461ea944b"],["tags/Wechat/index.html","e8c1e0a153f5827116c5057d112bbfb8"],["tags/Windows/index.html","21a8e90bb4be6abb342d266beb680bbd"],["tags/disunity/index.html","7c91bec7a359c6db2d9a38babfdf7f4f"],["tags/index.html","7df1fdcebb1d5ef0da78287d3cf7334b"],["tags/matplotlib/index.html","ccbc5b00bccbb9575d1fe0cb62192cb3"],["tags/uGUI/index.html","c221567e60e1d486899be413564f55c3"],["tags/zTree/index.html","0025d5f5842d811edfa0061cf43f784b"],["tags/一出好戏/index.html","35dca634c05d528481ef6f3b41829145"],["tags/七牛/index.html","b9e01e7e1b3766a0122209cfe4ec3523"],["tags/主从复制/index.html","68d37e5d3386220177097a3a72f28de2"],["tags/事件/index.html","fc16afc0dd075a8490b8f4de763343fd"],["tags/二维码/index.html","0bacb8f853a1b3b03074c0c87fabea30"],["tags/云音乐/index.html","ad5c8c2eb6b907048303ad868a6efb3a"],["tags/互联网/index.html","ff45ef087b2a18ec344c342bf9d2ec1f"],["tags/亲情/index.html","8b65c377122cda2914b39a763f34341b"],["tags/人文/index.html","e411536762ef2ceb024224f5de514a7e"],["tags/人生/index.html","71a8bc3de429c794273143dbd80f4ebb"],["tags/仙剑奇侠传/index.html","ea593eaa173b6c8e11a870b6e1b363c6"],["tags/价值/index.html","b002a53429ee26d4f001c313969cf260"],["tags/优化/index.html","d46eaf05b90d85c30872a81e9d8da99c"],["tags/全智贤/index.html","58cb839fdf3b56d790a3dd72f2aa7981"],["tags/公众号/index.html","9143705a2aa856b25e5dfe95d1248e85"],["tags/关卡系统/index.html","76a5cd5f2ed6e0db9ff195f642fa3484"],["tags/函数式编程/index.html","b4e586ad7af87c00e35619dea3070777"],["tags/别离/index.html","0d8ea6faa45cb32f241c2d857750a74f"],["tags/前任/index.html","a91d4f169b97246128428be103329bcd"],["tags/前端/index.html","13a230ba5a5f8be99524ebfd54d40d1a"],["tags/剑指Offer/index.html","abe93150ca9a3ecfa84fe0aabe8ef0f0"],["tags/加密/index.html","16de86bad6fca51037af536f9d4f1ce5"],["tags/动态代理/index.html","d0e70ccf5e418faad753c04c2423f129"],["tags/动态加载/index.html","31e93a0e02af4b64118232127c020ae6"],["tags/动画/index.html","6fbaaa31684e0e14bff7d1ebf5124d5c"],["tags/单位/index.html","1518ccdca26b042a3112072ecee46b33"],["tags/单机游戏/index.html","6a853ee14d46e6218f0960911ddbf6bf"],["tags/印度/index.html","7cbeb48bc12401eeb022408e24631795"],["tags/历史/index.html","e0771b9fb7e1f09b74d3219e9ca960d9"],["tags/反编译/index.html","ad926da639cc64b7c0c6e72650b27e03"],["tags/同步/index.html","cff0a3b505ceaf56ffb6410877a05631"],["tags/后端/index.html","403592646a72cfdcdb668e31b342b226"],["tags/命令/index.html","81032b31dc59b54ccf05abceb7dcbfe5"],["tags/和平/index.html","ece0e0cd205462ec54ea835607842724"],["tags/响应式/index.html","f08a0f26d3b19b0bde07dd88214104b3"],["tags/哲学/index.html","2713a757d2787a8c65bb0dc8f4d24cdf"],["tags/回家/index.html","d42c087eb86ed1be1d5d8cf6301d273c"],["tags/回忆/index.html","a3c29fc6fa46edade18ccca5fca8b8cd"],["tags/回顾/index.html","8ae7f38d81062700b485579798a4a0c0"],["tags/回首/index.html","e694c34468f811961e9fe33864e8e9b1"],["tags/图床/index.html","1956db0ac062595e2d6c2f5b0eaf717e"],["tags/图形/index.html","edbe99419f4f1f693926f745568d2952"],["tags/地图/index.html","d7a79abf0d21cec0bf8e7f38da1ef44f"],["tags/塔防/index.html","91f9b9b7ec4a573b9420645f8e35fc97"],["tags/增强现实/index.html","020a42a0296894ca1a40041c66a20f6d"],["tags/壁纸/index.html","0a5ee8bfd0d323aa1c239bf437bb85bd"],["tags/夏目漱石/index.html","178234bd3024d839fd8b39ff0267822c"],["tags/多线程/index.html","aee1d31fbc6ea22c3294a7d154eb3ae2"],["tags/大护法/index.html","3cece0da526caa74f6535a9ec323a4f3"],["tags/委托/index.html","2c0cebe89fdcf1432c40a268a02bbae7"],["tags/孤独/index.html","3da0f403cb5ebad126ee8650969d73ef"],["tags/展望/index.html","993d268906c79b6924f7b3e0e54341df"],["tags/工作/index.html","1eef78bbcb6605d83a2a089100d69c13"],["tags/平凡/index.html","eda26f2bc4113c6193c1315fb3a4e678"],["tags/年华/index.html","936d1b11d91f51aec1f85040536d1154"],["tags/年度/index.html","c79b3c6ae6d58caafae2f11480923966"],["tags/开源/index.html","e884410048561d1c8bc6479b3d4589e1"],["tags/异常/index.html","c6ebc1087161da685b328f98a1a990ef"],["tags/异步/index.html","b3be21dc41aa569ef5694dd02feed3ca"],["tags/引擎/index.html","2a5bbef6a869d91e8131918d9ebee051"],["tags/影评/index.html","520b22c3397d9068e514173dc2c1af80"],["tags/微信/index.html","ec9e0421c09aafec1b38c68e18b4def1"],["tags/微博/index.html","522f2c38da7a83b8066014a66a6cfb21"],["tags/心情/index.html","f11d9f7652965b41a61d92c3f13cabb2"],["tags/思维/index.html","e2131f0d783c4fc639245283deb47b6c"],["tags/总结/index.html","281e50fc426a85d6a2208c6ecf8aa73e"],["tags/想法/index.html","64d3a880433f0c5c5df73c8c09cf9e8c"],["tags/感悟/index.html","e42329c9b162c46da13cb2857d0f2314"],["tags/成长/index.html","06d8b23ca5ca4b5c80cd5d2baeaa1ed5"],["tags/我是猫/index.html","e0bd6312085574a64e9336dc2a26d508"],["tags/扩展/index.html","f16038c273e215daa7060fc7de1a6a20"],["tags/扩展方法/index.html","ccaad51199ad0c4b41497fc9dae20daf"],["tags/技术/index.html","ca8ac10bbf68723f4c0d6f9d7a34f57f"],["tags/拖拽/index.html","badc896fd0c4861567edb316d8ec3fd4"],["tags/插件/index.html","80ef5ebeb391c56f2cfcf13fe0e30625"],["tags/插件化/index.html","2cbfb053b15817e5c50a1da413590391"],["tags/数字/index.html","4d1ec9618ea39d007b1dab15ec3f9dc8"],["tags/数学/index.html","6a717b804e724c1e9a4fef059e711751"],["tags/数据/index.html","6faf1e08243e894256d7ec436da243f7"],["tags/数据交换/index.html","7c35ec241bc795683554328c742cdb99"],["tags/数据库/index.html","6cb46b030bbd32294b791c01b6721f26"],["tags/文本分类/index.html","69a5df87099c7ab2b53c7d895108fdb8"],["tags/无问西东/index.html","8ff82c60306f59b77b7a3f858892e820"],["tags/日剧/index.html","ad1a1a1debc7ba1943815671fb10a0e2"],["tags/日志/index.html","de1fb576af5a22f0a2b25f44641a160d"],["tags/日本文学/index.html","af9f4403563dc7586bf036a91520903d"],["tags/时区/index.html","69cc2aa77adb93c843158315d9bcf940"],["tags/时间/index.html","cdb391921b63ec9b874fd4a4bf4b1cbb"],["tags/服务器/index.html","e287f0094464aa19512d55526cd96a2a"],["tags/朝圣/index.html","4ea7a68d5edd70f0e07235aa5cede796"],["tags/朴素贝叶斯/index.html","95d29149f921d91e1508bb8bd5dcf403"],["tags/架构/index.html","0afc4d1b6409b457c473918dfc36a520"],["tags/标注/index.html","f7219cd0ae9a9391da134a9bf26e9a0f"],["tags/校验/index.html","196f6c5731f5dfb4b8ad5693e8aa816f"],["tags/格式/index.html","e39a40e759f1ac21315df9565a6700b9"],["tags/格式化/index.html","7f2016d5ceb45a25bcae28a3b369a142"],["tags/桌面/index.html","eb1b9510d241ceb820e4cbc3691c079c"],["tags/梦想/index.html","f34701e421185ba5d048f2085cd70f15"],["tags/概率/index.html","19def5814cf3efc3ea5883017e7727d4"],["tags/模板/index.html","fc9c6098b89ae26af68e46559bac8c4f"],["tags/模板引擎/index.html","c424e4383aca4feb61abab956b481570"],["tags/毕业/index.html","5541578c7f7890644325bc633a1c1bfe"],["tags/毕业季/index.html","35ced02b8f10a80511a68b95155a3457"],["tags/消息/index.html","e3f515ee9159bbbf99ee14aca12240ad"],["tags/游戏/index.html","c2907651abf682163af9f746c0b41be1"],["tags/游戏/pages/2/index.html","d07f5b47512c2fd1576dd600d4e3954b"],["tags/游戏开发/index.html","7985a4f521b3bee17a3617c7c0501198"],["tags/游戏引擎/index.html","84de761588abe53d7c0dd72c370da1e7"],["tags/爱情/index.html","5c2ae267d4504b3e4fc38cb192ac1061"],["tags/版本控制/index.html","3dd2b093d63bc4e49961a14a41e632df"],["tags/版权/index.html","5fb8af44722782cb23a4eec5649a84e7"],["tags/特性/index.html","c673eb79cfdf594779927a557f080cc0"],["tags/状态/index.html","945f09583d9cb1e1bcd3b4fc6af0554a"],["tags/现实/index.html","58bf415cf77b0c0d676012fe1b9d5a14"],["tags/生活/index.html","69edb0b150cb12f293cbfbe47881efd6"],["tags/电影/index.html","8047aaac40cf2d1eff0fbe1343b8e3aa"],["tags/画家/index.html","3541c1367d0e8d22f99782dab4645acf"],["tags/知识共享/index.html","f66245d8d292f1c594b83b873fe87512"],["tags/矫情/index.html","8c11714591fd6b3a9045520d13b3dc7b"],["tags/程序员/index.html","af59c99cecb539e1a9eb98cc418f1f0d"],["tags/穹之扉/index.html","c064285b6b55abfdb0f12a0e783d7030"],["tags/穿搭/index.html","76b73d877c845fd4e214dc09275c422b"],["tags/童话/index.html","03aa2b877fca51d199fe1d96a15bf196"],["tags/笔记/index.html","815c40a58bf6942ba3de022d24882f9f"],["tags/算法/index.html","fecd5addc789fc87aa14f79a681adcbb"],["tags/米花之味/index.html","cc08f8e9b8e11552924e948b422dd7f0"],["tags/缓存/index.html","d2fc695d3429166bcf82c9ca49d1408d"],["tags/编程/index.html","2e13062ea4a522ddfe262ad66676b907"],["tags/编译/index.html","d3eda9fdfc8397bb17d32303bddfe5df"],["tags/编辑器/index.html","09ac296bdbf23355bfcb9efbc3c88fa5"],["tags/网易/index.html","5653d00776aa77e6714d16a42c28e8fd"],["tags/脚本/index.html","2e94124091991b02cbd21dea24513647"],["tags/脚本语言/index.html","74b2ef75cd6268c27cb1f8bd567d09cd"],["tags/虚拟摇杆/index.html","f27981cb99b15025228eb0aabdaed6a2"],["tags/蛋炒饭/index.html","ed0254f817fe9909cda89a6603f7ca94"],["tags/表单/index.html","a79bfad5ae4aca792d74fd552829f128"],["tags/装饰器/index.html","afb0f20ef9e0caf8ec2aa7a12fe4e75d"],["tags/西安/index.html","f4565c1f68d2838b4543cb909cc6d7fe"],["tags/计算机图形/index.html","cfc1b32f4392e2dcde3f1933e4bd80e1"],["tags/设计/index.html","68e0350a0b17dae00ab4fff38fd2e9f5"],["tags/设计模式/index.html","9a5ad4d7c1b2cf88bb6c222938f53c9c"],["tags/访问量/index.html","363470ca8f8d5118bd73033e199524a6"],["tags/评论/index.html","05829c55aa5399a0dab653ef3ce254c8"],["tags/词云/index.html","22c0a78b4bba2147bbe6279109e615ec"],["tags/诗人/index.html","db612c8bf0cec99d1999060091112762"],["tags/语法/index.html","0ba95b76d2dd9dd1afffee837099859c"],["tags/请记住我/index.html","5036ef3ae5adb9adcb66fba114b0a948"],["tags/读书/index.html","91c0e157864683591c552825544e80c5"],["tags/读写分离/index.html","64223d46fff08c31e90cd9d1568d5f1b"],["tags/调试/index.html","46c31fa55af2a9e48b041f5f7f7906e1"],["tags/贝塞尔曲线/index.html","e4ad4cc3b336cb452f1acd5293dde1c2"],["tags/贪吃蛇/index.html","3f5d78c3eb3cd54ea5b88b173e3d0e50"],["tags/资源提取/index.html","c205355003c843fec4209980238010d7"],["tags/跨域/index.html","436cf891a9423bac35fd7432e65ca02c"],["tags/跨平台/index.html","b053921afc4fe6776a30e5e2e3028b0f"],["tags/转盘/index.html","1d85786204d2b6c02ab036c9b67bc28a"],["tags/迁移/index.html","1520a0a03d30473bf4400d2d27540f3a"],["tags/通信/index.html","a01d9b7bdb0129b05b735962b0f592e8"],["tags/邪不压正/index.html","98036da36c3a4fdfd977a977e6e9dbee"],["tags/部署/index.html","2e5b4d5d96f98d0aa47f8dcf9b63f5de"],["tags/配载/index.html","baf5bef8f9a7d798b8b32fb8365197aa"],["tags/重试/index.html","07232d9af06f0232a33236cd5c0ee12f"],["tags/长安/index.html","8e45f93608655e8725d5f58993eee213"],["tags/长安十二时辰/index.html","e0886b5ba15a2937d3deb68ca15a4fc2"],["tags/阅读/index.html","64d1ad6a113c4492f756edf785bbb13f"],["tags/阿里/index.html","efb0d3b2a11ad4db1762d75daae581d9"],["tags/随笔/index.html","6c8865803cc849b2de628e8f2fb80240"],["tags/霍金/index.html","932b4b901bb590da98e65975ed2134a9"],["tags/青春/index.html","95d468c652e53f4c18fc048c23974303"],["tags/面试/index.html","a62d0dd5b120548aeb9607b966f1129e"],["tags/韩寒/index.html","fc3d8f47c1c0cc850dea4e91e0e5aaed"],["tags/马尔克斯/index.html","8bb26a142665f97f9b796ff7450ff002"],["tags/验证/index.html","8fb79c49426dc175dfd3a801e0ace24d"],["tags/黑客/index.html","7d26e50d37329e7ed83f1c7c07c9f5c9"],["wiki/index.html","1f6071bd417655327e6eb6311f776611"],["works/index.html","8c0e7ed4035bfe01774f4b3f08faaf3c"]];
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







