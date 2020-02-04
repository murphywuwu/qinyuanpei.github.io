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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","ae113f834835b67de434f89308940108"],["archives/2014/12/index.html","e7dfa03100cd0978851d1869ce95d174"],["archives/2014/index.html","7f4d03dd8f71a38d89baec4c31a7ecec"],["archives/2015/01/index.html","86bd2dd0e546bdb8124636fc0d266a4f"],["archives/2015/02/index.html","b152aaf6854b4ed614296e772e547a1c"],["archives/2015/03/index.html","8f3f74433aff06ff06b819f22a331c90"],["archives/2015/04/index.html","40556c25b61dbb3e9668469c0e0c040b"],["archives/2015/05/index.html","4959b63c79bc0366face74f52197cd32"],["archives/2015/06/index.html","85d01e88ab1216d4f0511fa1a61b85c1"],["archives/2015/07/index.html","496a699ddbd6ad1dd50d22262e96c86c"],["archives/2015/08/index.html","f4c4c2320632be76413ffbf9b9db3742"],["archives/2015/09/index.html","908262513b0e6bcdf5733fc47d4a84ad"],["archives/2015/10/index.html","c1231b385033f2d38eb3caa5a0615b32"],["archives/2015/11/index.html","2d2450a88dcf631237233f949b04f78a"],["archives/2015/12/index.html","cbf41f594db77ad8b2d4d51b762afa89"],["archives/2015/index.html","3634a9a73e142909a5845dceb6bdc4fe"],["archives/2015/pages/2/index.html","0438b73216d283aff814b7230e3ea0d9"],["archives/2015/pages/3/index.html","e98e285f64e153806863363aed9577b3"],["archives/2015/pages/4/index.html","32e09556e2f392302a8cad3435c00c1f"],["archives/2015/pages/5/index.html","21a6e1d9c9717625c6ef3fe330fd13d7"],["archives/2015/pages/6/index.html","fc825ee17c595dda34a90239188b0a4a"],["archives/2016/01/index.html","47929d5ce216a9e526339a6dfcde0025"],["archives/2016/03/index.html","7503dad0716b10abf3f26fbe72f87c91"],["archives/2016/05/index.html","d104e683c030e578268b85b14bf27a50"],["archives/2016/06/index.html","34b4cf36b8beb822c085e40a7e529c43"],["archives/2016/07/index.html","3c54281337b7f8a85a7b35d1fa7b3051"],["archives/2016/09/index.html","e5f08d7959e0ae7316c82388e628b0e5"],["archives/2016/10/index.html","f00453630d9b4e6aa44fb64a6beeb9ce"],["archives/2016/11/index.html","f530603bd7df126dcf0cdeaa9a4facc6"],["archives/2016/index.html","790805e05eeb386d56ef0828349e10b1"],["archives/2016/pages/2/index.html","fcd048f2abad98c8566a954a1580b91b"],["archives/2016/pages/3/index.html","584bfb886255cd5ec2121352cfe50c99"],["archives/2017/02/index.html","f1101f87e5d648391d09d0aab24aafb4"],["archives/2017/03/index.html","dc8046851c1a0a6b2717c771a4d1cb18"],["archives/2017/04/index.html","adcf8c0cb6da6fc74285447122adcf65"],["archives/2017/05/index.html","e0af1d7d03e05464037b922d4d5848ee"],["archives/2017/07/index.html","5113334b64ffe3107318fcfe214c01cd"],["archives/2017/08/index.html","f395d162dffc2607cea0ca1ee1beb6dc"],["archives/2017/09/index.html","357616fc09801f7197a3fbbc3e8d578f"],["archives/2017/10/index.html","f6962518172a3cd838eeca58c29b5a3a"],["archives/2017/11/index.html","e29c0836f73a3c3d36a89ad0c6b5f360"],["archives/2017/12/index.html","cc0e8e7471c62abd5a2debe8cd588ed9"],["archives/2017/index.html","535433aba6e114e6946e5fd42a0bc3db"],["archives/2017/pages/2/index.html","69decbcd472bde619f4d3526e7db6dcc"],["archives/2018/01/index.html","67337e8d467d7bd6f924ab1f93166b1c"],["archives/2018/02/index.html","733672f1e5744b1ae6c94258b3de2cc8"],["archives/2018/03/index.html","3cdda173a2a6eb1e43d718155517eae1"],["archives/2018/04/index.html","b3be9cf79ce9c1af3bfbe859d33c2d59"],["archives/2018/05/index.html","64b69cfec59a5cbde06b3f11ac0ce875"],["archives/2018/06/index.html","6547783c4026493c171883e2a3239c2a"],["archives/2018/07/index.html","7bfdec2a9be31e8640e0431acb92a1a5"],["archives/2018/08/index.html","587228293ca7db895c4be46785bcb24a"],["archives/2018/09/index.html","be8f3133245b0d51f26a0502725e6b32"],["archives/2018/10/index.html","db11a660e6cf1042110a5c72c64a890e"],["archives/2018/index.html","0c7040556e46fc64eb3c6fe2c77bd66b"],["archives/2018/pages/2/index.html","8557e4434ab9686e0a5031b91eadfb28"],["archives/2018/pages/3/index.html","fea7fadcb2eed49473cb638c618bb1f2"],["archives/2018/pages/4/index.html","c4ef47602cfbf6745e4816001522a033"],["archives/2019/01/index.html","316202d59b2d008892e73d0a4447adf8"],["archives/2019/02/index.html","a78dea3057852c69162bc22640d7172c"],["archives/2019/03/index.html","80371256f35d9df92c3401f23ad67651"],["archives/2019/04/index.html","b87edda5e996a74478fff6b9cbd47950"],["archives/2019/05/index.html","4f4b9e42ef0f390e66619dc6745b7d4d"],["archives/2019/06/index.html","fd6e1084609903d8ea8ca3a4df4e5ee4"],["archives/2019/07/index.html","b579a8599bd463697c0b497b7a35bb56"],["archives/2019/08/index.html","712f76cf5f8baecf06773784c1473c01"],["archives/2019/09/index.html","9340c4b60317abb6920eaeff405ca4b2"],["archives/2019/10/index.html","738629549ceb1f5363a80539f103726e"],["archives/2019/11/index.html","ee78516e2201558b8e8eff77d2d9d6a6"],["archives/2019/12/index.html","dfeb2b73b1c75be7ba03287828be9ccd"],["archives/2019/index.html","cc9bf33656dcec6794791c62cc4c1a3f"],["archives/2019/pages/2/index.html","621306e613c77ae3b8fe8086ffa8c7bb"],["archives/2019/pages/3/index.html","a6640f6be2ab57a9eb260364446a236c"],["archives/2020/01/index.html","0c5ec5456cb6768996e26bd00d8e8f65"],["archives/2020/index.html","84369299f9c78a247596194ff6645e8c"],["archives/index.html","33c43190d09a9beaf003b4514a415072"],["archives/pages/10/index.html","81361f176af4630d8f6a9371b06689c7"],["archives/pages/11/index.html","939954a606cd0b3bfe69c6337d100737"],["archives/pages/12/index.html","6fd051faee3c81f17077e726ff620b34"],["archives/pages/13/index.html","621f2c3c651717acf98d8dc1036868bc"],["archives/pages/14/index.html","c2d6becfada767baca69c8a2a78d1dda"],["archives/pages/15/index.html","26a606ba9a19de4bfd7dfb3ae469398a"],["archives/pages/16/index.html","bc6019e442c2458c85699440b5e0156a"],["archives/pages/2/index.html","66dd3eaa213794dda977582496873b35"],["archives/pages/3/index.html","d8f7add996ff475580e9ca4298527b9c"],["archives/pages/4/index.html","fdad71263cffad9dc65aafe76fe637a0"],["archives/pages/5/index.html","16ffed23dba9c811e545e9e64262e09c"],["archives/pages/6/index.html","64f1003279ed1341f0af4f2a814bbb86"],["archives/pages/7/index.html","838c4cbc2910522df1a1d57afa6fbb4e"],["archives/pages/8/index.html","3cd73d233594558d9e9c8d3ab7b646d5"],["archives/pages/9/index.html","560a539d76fdce7c426b69d92686ab76"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","7a09190e67e17f0a6f8010961f614538"],["books/index.html","3920b0976ff7258cf52c18db81855d04"],["categories/Unity3D/index.html","f3f7a2778ebfae6dc362c1504560f713"],["categories/Unity3D/pages/2/index.html","088ae506b05642bbbe79870c2538ecd9"],["categories/index.html","93236471d665a6b26cbad82ccb9dd1a7"],["categories/人工智能/index.html","d74ab3f367f586eac921dd21962a643b"],["categories/前端开发/index.html","584f546a0fb37526e1de9c23a9563d89"],["categories/单机游戏/index.html","20985fe23fb59367d4eee632e36f36f2"],["categories/开发工具/index.html","5238d8f97d5b06feac83994ef49abf7b"],["categories/数据分析/index.html","debae94b7def00c855637c81a6426f91"],["categories/数据存储/index.html","adef7157221f606568b38919be177506"],["categories/游戏开发/index.html","dc58506c9b7f713e9bea76b61d7fb873"],["categories/游戏开发/pages/2/index.html","9db79137fd79df5b178d5c6b90fdb236"],["categories/游戏引擎/index.html","d01c42a14277c3f1e20e4b454e16d414"],["categories/独立博客/index.html","8b0ab780ff74e6da6b02a68976611314"],["categories/生活感悟/index.html","fd000774080fd7faa2fbfa885daec1c5"],["categories/生活感悟/pages/2/index.html","0e77fa48f5b7fbaa42cb0c1cbbf9c0de"],["categories/生活感悟/pages/3/index.html","106228520b7ecb332a01450fb67d4011"],["categories/编程语言/index.html","cb3c7c3943a834939e6da0b6af7f2a48"],["categories/编程语言/pages/2/index.html","07be3dad1b6bca3a23746d901cf159cf"],["categories/编程语言/pages/3/index.html","43fb5c5f5c86fc5899ed274b6d96957c"],["categories/编程语言/pages/4/index.html","d4e2410cb1b86f66d85da5459c944d90"],["categories/编程语言/pages/5/index.html","ab2cade2fc185c7a362dadc13650e100"],["categories/读书笔记/index.html","798a9f8d2dcea558c2c21af762eb1c46"],["categories/读书笔记/pages/2/index.html","b310192da1ff53ef6e4d4df5cd6c2b77"],["index.html","75dab51299f025cdaf153cec2cddfc74"],["movies/index.html","ceeecbe3c47bd3c38cf71dae885b0eda"],["musics/index.html","4b532a57efde2aff72e3368742922dce"],["pages/10/index.html","91009d41e1d48359fe953a70394a690f"],["pages/11/index.html","a2e3426ef47c64ddaa99e20e106f9bb6"],["pages/12/index.html","0433a8d9f73f6a65e1186c04a201ae6f"],["pages/13/index.html","40d3b8bf83fd3ff91b9790ff2917eca8"],["pages/14/index.html","ffc1e08c06f551f0383ff3d5f739fe4d"],["pages/15/index.html","a18b64cdb182f56b37a657505eaacb96"],["pages/16/index.html","95cfdbf7078e018fe68b944c9925c99b"],["pages/2/index.html","85f8597585b50648f1b9f5a6699b2d16"],["pages/3/index.html","a97d23f367e457e61aa8ed6f71080b6c"],["pages/4/index.html","d8c2e465c32b39a22bc60908b30f6d3a"],["pages/5/index.html","3ccadffb904ed3b54c5e51fab22182b1"],["pages/6/index.html","38ab81eba5211da69e3f18ac2bad6698"],["pages/7/index.html","ba5c67d75a333c901cb885c50fe3e308"],["pages/8/index.html","f01691d00406782ab7e0dbef9f621403"],["pages/9/index.html","5fb8b932422511c08420e8e1816a4d70"],["posts/1059499448/index.html","2da66526ebf6e592b85c4a2d8f3b1ef2"],["posts/1071063696/index.html","e7ccf6057845c4b23a81cd29fae52fed"],["posts/1082185388/index.html","5792c111072aa87471f5b764ebb24d6a"],["posts/1099762326/index.html","a2a13e1e35d922e7e08bb3a1584d47de"],["posts/1113828794/index.html","5e214e9e5966233211d3bc2c62b57779"],["posts/1118169753/index.html","ce2f47f727d4d2c43b8419b49cffc811"],["posts/1122710277/index.html","3d8223c63c13bc35d6368ffebf8aeade"],["posts/1124152964/index.html","be3f0de5b85b62322d91d157f4be9f0a"],["posts/1127467740/index.html","61bc4d052bf53bcaf2edeb08549ba9bb"],["posts/1150071886/index.html","61f3f18fbfddf437618b28cb461d00e6"],["posts/1150143610/index.html","f37583087e98109a958b6ca3e9065344"],["posts/1152813120/index.html","94eeb8925662de0df90fa48959cf0eff"],["posts/115524443/index.html","23f76fb0b6ff08ab49261d5ece450aac"],["posts/1156673678/index.html","3da2ffc290168d7e8ce5d03737a56490"],["posts/1166840790/index.html","4705a7e44fc3de824bca37d775208616"],["posts/116795088/index.html","6a574cd29cd1c7e4f6c2360f0412fcd3"],["posts/1176959868/index.html","3fef25084abb06b59e560126a2bd0acf"],["posts/1190622881/index.html","4208015cc4dcc985cbf37cf97488e7b9"],["posts/123663202/index.html","77737bd4ec061ea575ee89f3061c2e2c"],["posts/124807650/index.html","6fa03cf102406163a82aba8f7e3eca28"],["posts/1254783039/index.html","3e98fe7ab0c54d9376e6cf87c39cd051"],["posts/1320325685/index.html","0d868627977683ba86677ac14bc631f3"],["posts/1329254441/index.html","054523f4f05e993d77f7ae0b7f9d9fc5"],["posts/1357715684/index.html","a89f02c13a3889dc1ced555137791527"],["posts/1358971951/index.html","1fa43b30443209d45929d68bb0353349"],["posts/1386017461/index.html","f5b46d5f65698864aa842e148ebea661"],["posts/1394521917/index.html","69c6fa2e2d9029fc86dbfe261d452e63"],["posts/1397717193/index.html","4e637819ad1d1bb0d44778348f1e1ffd"],["posts/1424645834/index.html","b6fb0f379a9a669fcbe6fa7c31eb68c6"],["posts/1444577573/index.html","9537424049dc8ed88fb184dd900050e8"],["posts/1467630055/index.html","4e3b57bbb3f9ff3face7e6d974d814de"],["posts/1478979553/index.html","d0f1dd76e19ddd680807e59a6c85fd57"],["posts/1540537013/index.html","11180c77e8380ca6b8db8767f30616a6"],["posts/166983157/index.html","821afe28b5c5d3b21928b91c104b8d94"],["posts/1670305415/index.html","f467a16c171c85bc0bbc61bfd9f2af54"],["posts/1684318907/index.html","dc77d70b8b507d3327af0208f0480ce3"],["posts/169430744/index.html","76487ae5ac9ece59d14e935a908eb905"],["posts/1700650235/index.html","d30e0da1ab86f25127e782d781e667ba"],["posts/172426938/index.html","ffc2ed140aebad9c10d0a2507e5cd517"],["posts/1836680899/index.html","185c61b6c7f7fd1e799125f3a9a6db7b"],["posts/183718218/index.html","99605aea9528c313ae896fc9df8cfe2b"],["posts/187480982/index.html","e9ab436b513724941241a4b1e9572c71"],["posts/1930050594/index.html","2eefa5148967176ffc2354abea1ca4f3"],["posts/1933583281/index.html","33643b5d389099a01df6b5293208d1c5"],["posts/1940333895/index.html","8c29a0a54cb044d5b5d4a90651d36e90"],["posts/1960676615/index.html","2e9fa4b07df115cfa30dfe08cc6b9c1c"],["posts/1983298072/index.html","fb0c42c5886dfe59c4836e306ae9915d"],["posts/1989654282/index.html","31dc0a6bed4a686ada82b1fbce583553"],["posts/2015300310/index.html","483aa15fca544b3eeb3be2fa6b509979"],["posts/2038378679/index.html","cf72d3e62b3aea2997283b9a95a8ef4f"],["posts/2041685704/index.html","9a3847eb773b56d53c43c776baaf0751"],["posts/21112647/index.html","6ee544fdcd4b2949c5fd0d4e9e4ff9e1"],["posts/2158696176/index.html","021b8ed26d3ad3874b13d4bd29514e1a"],["posts/2171683728/index.html","190b81679e75d710c32e6aaae7e482ee"],["posts/2186770732/index.html","538e224624d0a8c59eb632ffeb46ced1"],["posts/2275646954/index.html","af03c384eabc917b0ea2725d3369dc4f"],["posts/2314414875/index.html","e502fc8ff623d6ffc929bac6f76e2dde"],["posts/2318173297/index.html","044a68f31ef082d1e7a8a8608039d041"],["posts/2418566449/index.html","b7a177e1a85cc975e826f41897831441"],["posts/2436573863/index.html","7a6bb6fa05fa2bd63aca04543932da18"],["posts/2462008667/index.html","aafd59f71fe4fa0218c66b5d2924d58c"],["posts/2463121881/index.html","a83952f57b3c1d5763263b5389e0eb46"],["posts/2527231326/index.html","c08c75800d00162b8332ceceb176b394"],["posts/2583252123/index.html","e4d928eacca0eb1b6b24c9841b40a4b0"],["posts/2613006280/index.html","4067030ad7370dec8812aa587b059d3c"],["posts/2617501472/index.html","325c7211f1ab6985880f8bd2839bbd7a"],["posts/2676125676/index.html","00b3fb25418227a839041bf6452b08ed"],["posts/2734896333/index.html","b527a8fc9610e009109084455eeb74c8"],["posts/2752169106/index.html","c49387c0149dac2cf6d2e7a5b4dba217"],["posts/2799263488/index.html","62f90d5b22359d25b8ab26667f4ce6bf"],["posts/2805694118/index.html","93cb0ccb519c6ae58cf783f9befce7e1"],["posts/2809571715/index.html","0b876e32bcd56cf5eeeb4c0731facfa2"],["posts/2822230423/index.html","d1435b3f119244e887e76e9f5081fa43"],["posts/2829333122/index.html","058464e1a3587e1d5d500d9d201433b7"],["posts/2911923212/index.html","8a87f9b4fd5c3b1a334a2076a818036b"],["posts/2941880815/index.html","3fa59599f1c84c482842773c93049ffe"],["posts/2950334112/index.html","5ac827ac34c4cde6753808e6cccf18fd"],["posts/2954591764/index.html","d244f385b9f0715b159942d5f647f991"],["posts/3019914405/index.html","af9b926d43ff9b11643d7694d229f140"],["posts/3032366281/index.html","0075dbdefa06a8fc704e1845f86051ac"],["posts/3040357134/index.html","65c611f81c2bd128833f7546521bb88b"],["posts/305484621/index.html","0ab7516b28a9335b755f27a956aaf34c"],["posts/3083474169/index.html","b5c8c20c8b790748eb77f0017f06843e"],["posts/3099575458/index.html","5645a2bf0ce833a0a29a9a4d0feff1fa"],["posts/3111375079/index.html","b3064e1a676db5fcb5f92c626091d5fc"],["posts/3120185261/index.html","31740936fae4e3882386933cae9d4a0a"],["posts/3131944018/index.html","5038325b0942e9e40203f2450b19d022"],["posts/316230277/index.html","3d678d12f0c8de2db9cda347cfda17ef"],["posts/3175881014/index.html","152aa936f2c4caa05cecd7918600e495"],["posts/3222622531/index.html","e49ccb5adb7419a6505d2d92710821ec"],["posts/3247186509/index.html","ff63a27b65414c3de548793f81ba175f"],["posts/3269605707/index.html","c9950bf9a5067a13877f314c91312590"],["posts/3291578070/index.html","a9d5af1b584ee926ad988407a8ad7651"],["posts/331752533/index.html","0a4a739811eab44544012f4708c7d7eb"],["posts/3321992673/index.html","49ac94215090a7fd0de1b513831128e4"],["posts/335366821/index.html","50375aad36b9c01cd3bd0c8088e6261e"],["posts/3356910090/index.html","3aa743d635627e7350fc5772aba189f6"],["posts/337943766/index.html","8dc0ac84e3aef7a28d447ef42cccac0b"],["posts/3417652955/index.html","2948bc7231eba28f5935ed5f2b9f9337"],["posts/3444626340/index.html","b92f63d3421d8703ab1a882985afe619"],["posts/3449402269/index.html","8130fbd442f4580d88f183285ae8c946"],["posts/345410188/index.html","65cc84e6b7e50594438f3c0fb4a0b89e"],["posts/3461518355/index.html","de9a3b0adeeac4a0a5900e9629648a61"],["posts/3494408209/index.html","2ab08bcee563dca781d6d44e6a9c05a5"],["posts/352037321/index.html","a9f8a2c76a153da64334e57da08df420"],["posts/3521618732/index.html","aad4de6ce5027938bfdbd9e4d7df7e84"],["posts/3568552646/index.html","946f58aea2277150465d52b65d44a0a6"],["posts/3603924376/index.html","ce816746c9c30e7e18b85d62e2e3b29b"],["posts/3637847962/index.html","7fa1fd4d3d1920d5622c7b6db36f0ee9"],["posts/3642630198/index.html","e646cd84a528cd6e360f5157468b6228"],["posts/3653662258/index.html","a92165df230d4a3417d98d6fff9f96bb"],["posts/3653716295/index.html","30d20349e10f75dbe1fb5b8873419060"],["posts/3657008967/index.html","091f1f3da3a91820d1e4a8273058ec4d"],["posts/3668933172/index.html","667cee0fc9f883c2fe46f36338662bce"],["posts/3677280829/index.html","38b0c82671106a58a1e19d31acf75a4c"],["posts/369095810/index.html","5fbc96f3d9d18f72326939dd5a264bbe"],["posts/3695777215/index.html","7991db9a56f56b57802095c3c80f1cb3"],["posts/3736599391/index.html","742229dcea95a5e16c4fd1e8f462f7aa"],["posts/3742212493/index.html","65395883f391f06b7404b7f1c11667c5"],["posts/3782208845/index.html","dc99d59273aa525c00db83ea15a8fa1b"],["posts/3789971938/index.html","75784ee8498a9eef4566012c2251b75c"],["posts/380519286/index.html","fb6b9ae4438a5a95f14ababa899dbdce"],["posts/3846545990/index.html","3820d5f74a952cfbd200e7181ac658aa"],["posts/3873710624/index.html","0967e0a71f9022fcc5b0fd6fe68493b4"],["posts/3959327595/index.html","0d5abc85fac507ce45c3d087a8cdf441"],["posts/3972610476/index.html","5c316edaddebcccdb17b6de948fe9759"],["posts/3995512051/index.html","80612d95ba563b1d61c7072acdaa4978"],["posts/4088452183/index.html","6eea7fe64281baea0a369a95cedf6248"],["posts/4116164325/index.html","2201dc14f728da6abef8793d050fa443"],["posts/4158690468/index.html","eaa0701d428cc774ae15a8365a48868d"],["posts/4159187524/index.html","9d6a5c44dcbbbad0b22aebeeda6334c4"],["posts/4197961431/index.html","ee507a473a6d6910845f367a98bab6f3"],["posts/4205536912/index.html","caf06cb72069c3c41d71a00ccfbb9782"],["posts/4236649/index.html","be3282dbbe9c83769dc00d2af5fe3205"],["posts/426338252/index.html","580839773cf8d84bf8e14cd1c5e562dc"],["posts/450254281/index.html","aa8871e45ef624a30d6f5482f3b21687"],["posts/4891372/index.html","f826286f5983a8bda672d3ef5b302434"],["posts/569337285/index.html","59872367c654e49f3cb7a26ebbdf28cd"],["posts/570137885/index.html","e50939e6e084b36a2ad89d4a6073a110"],["posts/570888918/index.html","007345d7658d4d6f74839baf481e9c04"],["posts/582264328/index.html","ba74029edbe0c522171fbcd4208d2d53"],["posts/632291273/index.html","89fa7641d608b34aaf369d9a5914bb54"],["posts/70687890/index.html","a336d65fcb7006f89fb46bafc49b4e9e"],["posts/719322223/index.html","dc25046ebcdc5556991447feddcdbd40"],["posts/720539850/index.html","2f07c2a6f55b0b8e084681d582c87d60"],["posts/786195243/index.html","1436ea4b02629d3deee757da0fcd3067"],["posts/795474045/index.html","90dcd45f6a9540e261916cf268f61960"],["posts/815861661/index.html","08055fcd4d0d66a1aaea54c06bf7f071"],["posts/821259985/index.html","148ba3738995d68b485e13e44718a30c"],["posts/828223375/index.html","d9bdee83121a1907fec3f86b8516c316"],["posts/887585917/index.html","946c69acda197eab465dfb86fa0198cc"],["posts/888549816/index.html","c4c61211aedaf8f64282a9c56ddb8830"],["posts/906436376/index.html","d826cf8b279ca3072472298e21558064"],["posts/907824546/index.html","750cef367f08c8bbff42321678060f3f"],["posts/927393529/index.html","5dc7450b3aa96a273325e57f3ce3d377"],["posts/94443781/index.html","40ee2268a170435075e29e06c5cd43c5"],["tags/2014/index.html","18376876b7e155007fc4e0ffdb6b147f"],["tags/2019/index.html","25bd5d120c98dc1b0f3a841c409f1fc4"],["tags/AI/index.html","12b02c6da043f5cb9632acc089ec7dbf"],["tags/AOP/index.html","7a06072b127ace52a96e3a9ddf4e6c2c"],["tags/AR/index.html","72aa9d95a6b1e51643aa6dec6fc28a26"],["tags/AssetBundle/index.html","671f3839a4a348f40292a2c4efb43e84"],["tags/C/index.html","7df95b3f327e491e416d76aa2f4e918e"],["tags/CG/index.html","f1231a36e42eec4b65fa69ec81f36848"],["tags/CI/index.html","2e436ffb1a2d6e0511cf4261d1c0e66e"],["tags/CORS/index.html","0e0c64c60679ac7b71f05f4a42e2c53c"],["tags/CSharp/index.html","b564a9304e72dd79aaad6de0b726d82e"],["tags/Castle/index.html","036b0159aaa9668c544fa027047b5e7e"],["tags/DBeaver/index.html","79ad76a0951aeb1a6e0d7d531bb5fc42"],["tags/Docker/index.html","85666b09b2a4016f4268beb0d5daf50c"],["tags/Dynamic-Proxy/index.html","9c60b6acfce27ccb0c46a0a5076eee1e"],["tags/Dynamic-WebApi/index.html","baeef201bc565dbe3e84a5e3709ed78d"],["tags/EF/index.html","0141ef1a3a1167ad00b7a0de9b787ec9"],["tags/ES6/index.html","ada873041751e4e9a5890480c4729ddc"],["tags/EasyAR/index.html","b11fa0a484189f51d4c108253604a8c8"],["tags/Excel/index.html","c0c9083c819ea211f307f93d4a4b7222"],["tags/FP/index.html","f083ad3cab072160f477b202e122419c"],["tags/Form/index.html","15da9d0a7fc86d6afa1b4e221f966272"],["tags/Git/index.html","aa2bd88b3098065c8417f291c2381adf"],["tags/Github/index.html","b57ede87553ba885cee238cf179325dc"],["tags/HTML5/index.html","e4841d250747b55428dbdaa708b59f4e"],["tags/HTTP/index.html","20001a4fb84338d9eaed50aa6910354c"],["tags/Hangfire/index.html","be679648d60f914bfb374da0a41f1df4"],["tags/Hexo/index.html","9c9fd0fe62e09925a5fcc4e6c12fe59c"],["tags/HttpClient/index.html","0baf7c8a7b9a7a3de6e9ab85382b064a"],["tags/Hyperlog/index.html","d4e3503de3a991eb86f1c532c5f6eba1"],["tags/IDE/index.html","24c879f0664e63c61986aca8ce6ade3a"],["tags/JS/index.html","62510ef5f984fa2e9526110e7d285001"],["tags/JSON/index.html","9a2eacd481fecf51dd1da08d96da93a8"],["tags/JSONP/index.html","46ba843615f5ad9bab5773285fa0edee"],["tags/Java/index.html","11ca2cc0d42679fe2600471821f8a7b2"],["tags/JavaScript/index.html","889dde7130a83b0b3b054b08d1f01da0"],["tags/Jexus/index.html","ede07a6e4557c413d0ce5af2b95a0210"],["tags/Kindle/index.html","3120e53b700b391c8a1359098f999da1"],["tags/Lambda/index.html","5474c13d0892fd54a0985cb17cdfc7ee"],["tags/Linux/index.html","de285b4019ae37b73403f21ec03a8e17"],["tags/Liquid/index.html","f1e27427baba6915e32936aa005e1b73"],["tags/Logger/index.html","bf918d0e9ed0db9e037b5a6801e7d385"],["tags/Love2D/index.html","1693a55803063fe7917ad1cf18374905"],["tags/Lua/index.html","62b98f8f3a63608b80c31d7b44cef5b4"],["tags/MMD/index.html","fe270577c8d59135172855653bce2ae5"],["tags/MSBuild/index.html","a68ad2cdf1d9b8103ff76ad9c5e59f62"],["tags/MVC/index.html","044beb331a791b530704c2d9b9dc43d7"],["tags/MVVM/index.html","f701e52451c809db1954f2f2880aaa49"],["tags/MapReduce/index.html","2873cdd4e27a46f10f2e777ea1e199d8"],["tags/Markdown/index.html","3423d1175a602c475c059b25aee7c714"],["tags/Mecanim/index.html","362b9472d255b3916850e22617e8d1bd"],["tags/Mono/index.html","20aaec129de3adb1c3cbf081b310d2ca"],["tags/NET-Core/index.html","3fa4d8380a27de87b95786dc2a3b3d13"],["tags/NET/index.html","fd997fdf77905bd6218f6d85fce99630"],["tags/Nginx/index.html","eb4e75c8ea1ff9eb30380de1b0ff8378"],["tags/OBJ/index.html","7b8b05cdafb9ff36d576b68acaeb3c43"],["tags/Oracle/index.html","dbb89620dacc65e459d1485e20b926e2"],["tags/PL-SQL/index.html","3241b862ef57188d45476a6455f12254"],["tags/POCOController/index.html","0e1fadac6fc6cdba7b1833460ab22e7e"],["tags/PWA/index.html","f57428ecb15717aef5de7df49b2d8cc1"],["tags/Python/index.html","468b0262e815edbe11ff9739752f2165"],["tags/RESTful/index.html","630f20d082b83980b88cfcc4be286540"],["tags/RFC/index.html","110822b8cd7338851974b50b963f3d3a"],["tags/RPG/index.html","064fb9cc19c58da3d11f3861de46f1a8"],["tags/RSETful/index.html","92aa6054d229e17268e0d76d4afffb0b"],["tags/React/index.html","86293b6c463e24438a85975c15d12d89"],["tags/Redis/index.html","6472399c6c4ffec73bb9a95820432525"],["tags/Referrer/index.html","de220f04eb368a1d942327ce4735ec94"],["tags/SDL/index.html","151694ca291765cbe06eb13d46e681aa"],["tags/SQLite/index.html","d47383d0248c0d8ab47e2cff01dad8b0"],["tags/SSE/index.html","b94db3742b8775606eeba46019bc2d5c"],["tags/SVN/index.html","c323f996256f24710d55a5ee1ce40e84"],["tags/Script/index.html","ce4a2f37d6b53cb2869ab7b4e9fc967d"],["tags/Server酱/index.html","a0c7d88f5548055def6867f93b8d2942"],["tags/Shader/index.html","34557767ec3fe314baa422cd20743c90"],["tags/SignalR/index.html","54de079ddfcba1a629694b4a6014fc2a"],["tags/Socket/index.html","65a5fcba3f79de40902a024392420f63"],["tags/Sonar/index.html","fcb0efd223287267b8a0bd90c73bd6c0"],["tags/SourceTree/index.html","0328c6500624be0fe462d1d12c6b7e6b"],["tags/Sublime/index.html","d8f63634649060000c8e9d09d9989e8e"],["tags/Swagger/index.html","a938f098e2706add572cdfb5298c5493"],["tags/Trace/index.html","8072aa6e98756a84a856e41706eee492"],["tags/Travis/index.html","4914d86474cc931b782d27bd5fc1c8e4"],["tags/Unity/index.html","546b7c80b0116db2e17bbf64931d09e6"],["tags/Unity3D/index.html","f5c93118ddeb472e81f0b82b2c3a68fa"],["tags/Unity3D/pages/2/index.html","f3030cc07e9efa695890f10b59fda6e3"],["tags/Unity3D/pages/3/index.html","5645a79195debe7389851321f36e740f"],["tags/VSCode/index.html","834371efff52ee33c9a9e604b4eaef45"],["tags/Valine/index.html","1decb463086edc2a159f70211784773e"],["tags/Visual-Studio/index.html","5994ba69ece1b55c9d7e10ba14ec872e"],["tags/Vue/index.html","b4f03a75b85e82af524a641d00152e3f"],["tags/WSL/index.html","6184cfbb0172d570df5bf34b2b68195f"],["tags/Web-API/index.html","eac963328e6b06a2ba7de24537296b2b"],["tags/Web/index.html","5d93bb6390bc354e60e647081601eb6f"],["tags/WebApi/index.html","6556a272280c77b9d288607b3989eb16"],["tags/WebSocket/index.html","dac6adafea3975b3f442dc21ce645215"],["tags/Wechat/index.html","c3a9b53e1d9b0cdebc7b19cb3cf2a789"],["tags/Windows/index.html","272e388df721ff5a2c68da3679aaa2d5"],["tags/disunity/index.html","9d00c8606bc7dfc3bc3b00286fc02722"],["tags/index.html","e9784cbcc5dd5e9e75131aa68a7d8224"],["tags/matplotlib/index.html","d851547fb77dfb0eb18384aa98417edb"],["tags/uGUI/index.html","4a41b00528b997e5e576ec4e1802388a"],["tags/zTree/index.html","e27a66ecb65654516723eb03ef2ee8fe"],["tags/一出好戏/index.html","2d5c522a1eabd78d5e882d9aafc839f4"],["tags/七牛/index.html","afdacac2608591a8343accb1a9395f25"],["tags/主从复制/index.html","34cfd8bfbd32581e9c35c90404427840"],["tags/事件/index.html","1bf58c636b892b76fae245cca80dc960"],["tags/二维码/index.html","0e81029cf8506f82ec0bca99fda1a2ed"],["tags/云音乐/index.html","9e72409ba04ff600e4c520cae72c489d"],["tags/互联网/index.html","bfa7a8ca2bc3f606a710d34361b65310"],["tags/亲情/index.html","e6d3bd7b077923dbc529df0fa1159ea7"],["tags/人文/index.html","e5d4164cf4fcd240939d2c24732a60c0"],["tags/人生/index.html","d044be7e43d298eb4fdda79ff06efca5"],["tags/仙剑奇侠传/index.html","665195a32d1201c46f55e37cd4c6e880"],["tags/价值/index.html","305870565ee768559d817aad52f89348"],["tags/优化/index.html","5c4e3afe4da2f44e2834f730f2a3369f"],["tags/全智贤/index.html","6826dfa206e7f7ef26b43cc9aef541ce"],["tags/公众号/index.html","861201364418462bef894726886af477"],["tags/关卡系统/index.html","a887638fe1e9735476e789f9cad737f9"],["tags/函数式编程/index.html","9b1d9103669b14686d3cad29eb94509b"],["tags/别离/index.html","e6f038b8e7bfd8f50e32707ac7cafdcc"],["tags/前任/index.html","be207e4dc97cc02e99458886c7ddf850"],["tags/前端/index.html","137790e400f13ed61ba3ae2a56abf103"],["tags/剑指Offer/index.html","f4dd4b3cb999a7d38984e35720b1a27a"],["tags/加密/index.html","e2a08ad514b772de710af2c19518986f"],["tags/动态代理/index.html","c3161db0220043074b6e7f058d99a6f8"],["tags/动态加载/index.html","0903d7695d52d5d203b8b3c771c11ce2"],["tags/动画/index.html","0744ddb6cd770030ac94bb432d6a49da"],["tags/单位/index.html","86bf709bc8f216f84ced3ad4e5780271"],["tags/单机游戏/index.html","50605b79fb08a1623665bc97357bc537"],["tags/印度/index.html","058f968ef1717f164473fb56283b4742"],["tags/历史/index.html","65b70412615329c7161d8846cc356592"],["tags/反编译/index.html","443b417b5c5be306c018764195a70ec9"],["tags/同步/index.html","94fa39979eda25c301db5da52d152d1b"],["tags/后端/index.html","b9c7072f5fbb6edbc808efed492afe5e"],["tags/命令/index.html","c40c57debebdcc5ba75a54f369ba774a"],["tags/和平/index.html","7f3080c855efcd3b5da75dbc49dcc5f7"],["tags/响应式/index.html","dfe30d07ec7ca4a90020b53c4af45c3f"],["tags/哲学/index.html","a4cb8cb942e09ebfec2dbf2d6a98e688"],["tags/回家/index.html","18881bc7930cccdc97a116f697a50890"],["tags/回忆/index.html","1fbc5c59475355123914780392a2a968"],["tags/回顾/index.html","cc0b979120a578e3867a5f81cdcc837c"],["tags/回首/index.html","f12321c3bf44bb9a1655359e4a016e3f"],["tags/图床/index.html","b4e780db11810c7836300b681b13d375"],["tags/图形/index.html","6a819784f74f1db991017e94cc09c9c3"],["tags/地图/index.html","60a1f79a8eb540ea3ca66a8aa4453edf"],["tags/塔防/index.html","9a786e472e6cf55b29fd98c28e45deec"],["tags/增强现实/index.html","c78478a86b38d756b70354bdf755cb1e"],["tags/壁纸/index.html","a02912462e9ef81e4e3f1c39b20f4968"],["tags/夏目漱石/index.html","2ab5b68f3a514be7b14d433859353ccd"],["tags/多线程/index.html","1d4591467c356ee188d783eb9a007a96"],["tags/大护法/index.html","3accca687132aac960672a26aa584f5a"],["tags/委托/index.html","0e57492bf127720148df5b52381dd562"],["tags/孤独/index.html","12963fa92b2b8685aaee74cc38451454"],["tags/展望/index.html","942c08272ed79e0d87fae72e5a6dfe7a"],["tags/工作/index.html","cf46dea1cacac73e419fd4f3bb1d5ecd"],["tags/平凡/index.html","8d2e6901afd2218f8bbf9441b723b5e5"],["tags/年华/index.html","94abd509b25c0f1eae07db4616543345"],["tags/年度/index.html","9b0fac6fad08da2b6a2acf5c312fedde"],["tags/开源/index.html","616d869b5b1e1e0dd39b91b283b2af50"],["tags/异常/index.html","cf68da11b274ba249591299dbbc4c6a4"],["tags/异步/index.html","c5f6e69689e90b56d38fc219b2447260"],["tags/引擎/index.html","71f79ad841e360ff353603aa8c7b6fd2"],["tags/影评/index.html","eaef79f8749434cc5771fe2885300785"],["tags/微信/index.html","04117c7fb5636420fa5b36f355457248"],["tags/微博/index.html","dd522424d4e7002cfc4e914aac9b2991"],["tags/心情/index.html","0c41fcfe64bc1a16f9e33ddee08cc32d"],["tags/思维/index.html","5dfe1a08eedcb6b23f4e91f422c750a1"],["tags/总结/index.html","21b957128093930e79bf5284a7dc0db0"],["tags/想法/index.html","3cdf67d4d5d7b3f947f514620331175e"],["tags/感悟/index.html","90a69c9e0a6734de40793b947301edeb"],["tags/成长/index.html","d39d367c9494104b1bd8a6e9984d470c"],["tags/我是猫/index.html","46aa7eb679a7a377bbd106b5bd8f765e"],["tags/扩展/index.html","83fc0c0bb4f8ef0a31bb340515b37beb"],["tags/扩展方法/index.html","762b062ae8605dd637bc89cebf59073e"],["tags/技术/index.html","18d7d95816a498eacad2b7a1f253ad0c"],["tags/拖拽/index.html","aa4528d5a88dac5f7fe9a26cce94703a"],["tags/插件/index.html","bed9a12affabc0bb9097f3a38b7806a2"],["tags/插件化/index.html","5172e00f870188d1542ecd601d433438"],["tags/数字/index.html","d3fc9a159fe45cffc9607aaa86aab863"],["tags/数学/index.html","6afc52ebb32471fac83d1d23d78dbb9d"],["tags/数据/index.html","54cbdf5f720b78f85991856c5864a642"],["tags/数据交换/index.html","189e942c539faaf05aa58b3950436883"],["tags/数据库/index.html","51c330c28f5693149045c75095c31841"],["tags/文本分类/index.html","f4d93264e5643c0e14805373af92ee4a"],["tags/无问西东/index.html","b47860cf7746efe3e325af8c1c71a7cc"],["tags/日剧/index.html","b227355e07789e77969cce8de2c31cc8"],["tags/日志/index.html","b9a90acba83cee94fb56c18ab607230b"],["tags/日本文学/index.html","0cfd89cc6a7e25e0e8763137ad23b6fe"],["tags/时区/index.html","f038d50aba0cb9463479a2be4d1af37b"],["tags/时间/index.html","ab82ef5e3794d06366e2abef4f80b63d"],["tags/服务器/index.html","f3a11f0c181eca0469fc41389646b231"],["tags/朝圣/index.html","0d9505fea367e5c8dcefd512f7f2c98c"],["tags/朴素贝叶斯/index.html","5373b590b79d9c8d8465161873f4f310"],["tags/架构/index.html","aa31c7d702d4c77c18dcfcdf265f5bf1"],["tags/标注/index.html","fe6d0304af9d6712e6d9bf0a70126980"],["tags/校验/index.html","79513c5f5739d3b69ab7e6679cbdaa27"],["tags/格式/index.html","8f82c2faa2ca41371921a8c414e1de6d"],["tags/格式化/index.html","1fc60b9fe926a9a27467ee5ed96fb881"],["tags/桌面/index.html","478493c2e09bd20a4691f66980c15205"],["tags/梦想/index.html","d832195d6e27b0277d63deb6fec6e513"],["tags/概率/index.html","9864f4d2f74b064828f90760b77b2823"],["tags/模板/index.html","fa823c642f11049aa3aaf6594a3748ce"],["tags/模板引擎/index.html","5b8d69962e180b3eaf0ebf3792ac3738"],["tags/毕业/index.html","eab0e15b0f65e8dcaddb39fbab047bec"],["tags/毕业季/index.html","82ca3fc5212a4ef9b750efd4c1d4164a"],["tags/消息/index.html","22415c8b01509312814a88065a3b81ff"],["tags/游戏/index.html","26406babb97af7a70bf9dc2ffdecff55"],["tags/游戏/pages/2/index.html","f24869dbd5f9eb8461ea6d09071b2f67"],["tags/游戏开发/index.html","9df5af5be04af78d302ae24f669ffc40"],["tags/游戏引擎/index.html","137c73801ed4fdd5eebdcbb5a57b21c7"],["tags/爱情/index.html","43ab49989fc793719e65dc2e2c06c7dd"],["tags/版本控制/index.html","4a6894b15700c2e6f6ab10f13a5093b5"],["tags/版权/index.html","e05c12bd6f78ecaff57b11e370e53972"],["tags/特性/index.html","3e3cdd8f14880fd789fefcfc193974f1"],["tags/状态/index.html","b3c5eee10acfc2aa84251eba2e51a327"],["tags/现实/index.html","c8a4b6e92a3e0568324b9824ff3e3aec"],["tags/生活/index.html","1f466a2eb6b672db0801dde28e33bbc7"],["tags/电影/index.html","81b61467d530a02b66468c27a69c10db"],["tags/画家/index.html","c16c677fe064b76b39d123f4702079dc"],["tags/知识共享/index.html","c04945fc76c95f676a9ff4502bfc9665"],["tags/矫情/index.html","61e0d4ee4cea1b0c0bb9ccb134f1ab2a"],["tags/程序员/index.html","07170fd89b03b962ed0c5f31930f440b"],["tags/穹之扉/index.html","92778f9ccb8da75b33ea238fe6796903"],["tags/穿搭/index.html","1e4bbf7b2ec6a78ab69cdd45bfca9694"],["tags/童话/index.html","9fd3dbe5b2fb3b59943ef923c61fe769"],["tags/笔记/index.html","413b28bc8fac47c5de47de0373869570"],["tags/算法/index.html","6fdd697a1d7a70e7c34619ee217c1837"],["tags/米花之味/index.html","95913a3fe63160274012e9bedd6cce43"],["tags/缓存/index.html","029062dd5068cbaf930f20872869d908"],["tags/编程/index.html","b039533d9b4ce9e2cb73ef8f6972ee4d"],["tags/编译/index.html","7b3b2cc451968f523fa26dd6b2d53058"],["tags/编辑器/index.html","2c555475d303b8afbdc90bee07f2e5e5"],["tags/网易/index.html","a0d83006f691c6ef3522f17e14e6082e"],["tags/脚本/index.html","4f87ae2d8a5dcbb680831650536ec499"],["tags/脚本语言/index.html","a142bdfe9f1288bfb1bc766b96c3f937"],["tags/虚拟摇杆/index.html","bee54b7ba42ccdb95328d3e933cc5b2f"],["tags/蛋炒饭/index.html","901db524710a0ae0e9c550cb6513e3bd"],["tags/表单/index.html","aa9f111d24e63a82fff7dfad1f16a670"],["tags/装饰器/index.html","0b871a9347602d3695c30c7a996f1264"],["tags/西安/index.html","87e7205c559e3973982b57518ddbd8b9"],["tags/计算机图形/index.html","f602ab2c888a82dfef19705672697ca0"],["tags/设计/index.html","4c74c3e3248f336eb8906831ac56fced"],["tags/设计模式/index.html","591fd78a2536807689cf1a5b5794f754"],["tags/访问量/index.html","cc2341a0ae9e359e45c26b6ea899de8e"],["tags/评论/index.html","9363d81ec49b01da2a871b7a5da0e607"],["tags/词云/index.html","7866d3602f0354e01d89965b77791b5c"],["tags/诗人/index.html","c3e2c573232ff523f8895eb31fdd666f"],["tags/语法/index.html","8d4544e2ebb2f566660cf11597ea1add"],["tags/请记住我/index.html","54bdb8c1bbce6e3fb588d59654b52696"],["tags/读书/index.html","4b62ea09495f61885aea3f69560d1e56"],["tags/读写分离/index.html","f504775aa4e9e5fc646841cdad51741a"],["tags/调试/index.html","4eadeb75fa677719819b8d5547269d43"],["tags/贝塞尔曲线/index.html","12dcd6629f260b40d4b8b24e58f4e17c"],["tags/贪吃蛇/index.html","87ebab845ea03d32f409f538bade08c6"],["tags/资源提取/index.html","c9ba1f20b64bdc1420308ce206494170"],["tags/跨域/index.html","fc93d5050c7554c5f0730077182dd18e"],["tags/跨平台/index.html","6fba0a3de2b45fbfc8c464eeb72198a7"],["tags/转盘/index.html","68931f5afc688b5f60d8936ed122ef86"],["tags/迁移/index.html","1c050f95c7163854d8bf4de8d177fe5f"],["tags/通信/index.html","782a28bc43142d08fa6c0bb128d0943e"],["tags/邪不压正/index.html","5fb91d9cf64a1d10236417d0d825758f"],["tags/部署/index.html","6b5a66dd769098d3c13bd58b5c00d019"],["tags/配载/index.html","05a21b9f974da2df2794095824bf38ad"],["tags/重试/index.html","663355c2acc9619ca2853d266c71e884"],["tags/长安/index.html","ef8d0e64f7cc6ec65161bad02046c8b2"],["tags/长安十二时辰/index.html","9d604435fe90139ce72346004c8d6631"],["tags/阅读/index.html","61c50be05cf0fcce717eac709bfe677b"],["tags/阿里/index.html","61d6b9e0050b349ea3a24344ccf9124d"],["tags/随笔/index.html","44664095a208198db54bdf6d15855b9c"],["tags/霍金/index.html","3525c8f350fc5e06ee47b70063998108"],["tags/青春/index.html","586bb62d82fc47501245b809ee390a61"],["tags/面试/index.html","9c7a2684a594903a8e849c1833cafa36"],["tags/韩寒/index.html","be827e3db1b6e01b954f13d744c17809"],["tags/马尔克斯/index.html","9bd9af0bb22aadd9a64c2887bf3f7e0b"],["tags/验证/index.html","e0500ea9461affc262f1a8c1483a66f2"],["tags/黑客/index.html","5b7eb17941d005454c3e96d800248550"],["wiki/index.html","e6d5560a2043f354af97ad632e4738a0"],["works/index.html","8c0e7ed4035bfe01774f4b3f08faaf3c"]];
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







