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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","b947d09b6c4036bac5026ad1d86cd015"],["archives/2014/12/index.html","e7dfa03100cd0978851d1869ce95d174"],["archives/2014/index.html","7f4d03dd8f71a38d89baec4c31a7ecec"],["archives/2015/01/index.html","86bd2dd0e546bdb8124636fc0d266a4f"],["archives/2015/02/index.html","b152aaf6854b4ed614296e772e547a1c"],["archives/2015/03/index.html","8f3f74433aff06ff06b819f22a331c90"],["archives/2015/04/index.html","40556c25b61dbb3e9668469c0e0c040b"],["archives/2015/05/index.html","4959b63c79bc0366face74f52197cd32"],["archives/2015/06/index.html","85d01e88ab1216d4f0511fa1a61b85c1"],["archives/2015/07/index.html","496a699ddbd6ad1dd50d22262e96c86c"],["archives/2015/08/index.html","f4c4c2320632be76413ffbf9b9db3742"],["archives/2015/09/index.html","908262513b0e6bcdf5733fc47d4a84ad"],["archives/2015/10/index.html","c1231b385033f2d38eb3caa5a0615b32"],["archives/2015/11/index.html","2d2450a88dcf631237233f949b04f78a"],["archives/2015/12/index.html","cbf41f594db77ad8b2d4d51b762afa89"],["archives/2015/index.html","3634a9a73e142909a5845dceb6bdc4fe"],["archives/2015/pages/2/index.html","0438b73216d283aff814b7230e3ea0d9"],["archives/2015/pages/3/index.html","e98e285f64e153806863363aed9577b3"],["archives/2015/pages/4/index.html","32e09556e2f392302a8cad3435c00c1f"],["archives/2015/pages/5/index.html","21a6e1d9c9717625c6ef3fe330fd13d7"],["archives/2015/pages/6/index.html","fc825ee17c595dda34a90239188b0a4a"],["archives/2016/01/index.html","47929d5ce216a9e526339a6dfcde0025"],["archives/2016/03/index.html","7503dad0716b10abf3f26fbe72f87c91"],["archives/2016/05/index.html","d104e683c030e578268b85b14bf27a50"],["archives/2016/06/index.html","34b4cf36b8beb822c085e40a7e529c43"],["archives/2016/07/index.html","3c54281337b7f8a85a7b35d1fa7b3051"],["archives/2016/09/index.html","e5f08d7959e0ae7316c82388e628b0e5"],["archives/2016/10/index.html","f00453630d9b4e6aa44fb64a6beeb9ce"],["archives/2016/11/index.html","f530603bd7df126dcf0cdeaa9a4facc6"],["archives/2016/index.html","790805e05eeb386d56ef0828349e10b1"],["archives/2016/pages/2/index.html","fcd048f2abad98c8566a954a1580b91b"],["archives/2016/pages/3/index.html","584bfb886255cd5ec2121352cfe50c99"],["archives/2017/02/index.html","f1101f87e5d648391d09d0aab24aafb4"],["archives/2017/03/index.html","dc8046851c1a0a6b2717c771a4d1cb18"],["archives/2017/04/index.html","adcf8c0cb6da6fc74285447122adcf65"],["archives/2017/05/index.html","e0af1d7d03e05464037b922d4d5848ee"],["archives/2017/07/index.html","5113334b64ffe3107318fcfe214c01cd"],["archives/2017/08/index.html","f395d162dffc2607cea0ca1ee1beb6dc"],["archives/2017/09/index.html","357616fc09801f7197a3fbbc3e8d578f"],["archives/2017/10/index.html","f6962518172a3cd838eeca58c29b5a3a"],["archives/2017/11/index.html","e29c0836f73a3c3d36a89ad0c6b5f360"],["archives/2017/12/index.html","cc0e8e7471c62abd5a2debe8cd588ed9"],["archives/2017/index.html","535433aba6e114e6946e5fd42a0bc3db"],["archives/2017/pages/2/index.html","69decbcd472bde619f4d3526e7db6dcc"],["archives/2018/01/index.html","67337e8d467d7bd6f924ab1f93166b1c"],["archives/2018/02/index.html","733672f1e5744b1ae6c94258b3de2cc8"],["archives/2018/03/index.html","3cdda173a2a6eb1e43d718155517eae1"],["archives/2018/04/index.html","b3be9cf79ce9c1af3bfbe859d33c2d59"],["archives/2018/05/index.html","64b69cfec59a5cbde06b3f11ac0ce875"],["archives/2018/06/index.html","6547783c4026493c171883e2a3239c2a"],["archives/2018/07/index.html","7bfdec2a9be31e8640e0431acb92a1a5"],["archives/2018/08/index.html","587228293ca7db895c4be46785bcb24a"],["archives/2018/09/index.html","be8f3133245b0d51f26a0502725e6b32"],["archives/2018/10/index.html","db11a660e6cf1042110a5c72c64a890e"],["archives/2018/index.html","0c7040556e46fc64eb3c6fe2c77bd66b"],["archives/2018/pages/2/index.html","8557e4434ab9686e0a5031b91eadfb28"],["archives/2018/pages/3/index.html","fea7fadcb2eed49473cb638c618bb1f2"],["archives/2018/pages/4/index.html","c4ef47602cfbf6745e4816001522a033"],["archives/2019/01/index.html","316202d59b2d008892e73d0a4447adf8"],["archives/2019/02/index.html","a78dea3057852c69162bc22640d7172c"],["archives/2019/03/index.html","80371256f35d9df92c3401f23ad67651"],["archives/2019/04/index.html","b87edda5e996a74478fff6b9cbd47950"],["archives/2019/05/index.html","4f4b9e42ef0f390e66619dc6745b7d4d"],["archives/2019/06/index.html","fd6e1084609903d8ea8ca3a4df4e5ee4"],["archives/2019/07/index.html","b579a8599bd463697c0b497b7a35bb56"],["archives/2019/08/index.html","712f76cf5f8baecf06773784c1473c01"],["archives/2019/09/index.html","9340c4b60317abb6920eaeff405ca4b2"],["archives/2019/10/index.html","738629549ceb1f5363a80539f103726e"],["archives/2019/11/index.html","ee78516e2201558b8e8eff77d2d9d6a6"],["archives/2019/12/index.html","dfeb2b73b1c75be7ba03287828be9ccd"],["archives/2019/index.html","cc9bf33656dcec6794791c62cc4c1a3f"],["archives/2019/pages/2/index.html","621306e613c77ae3b8fe8086ffa8c7bb"],["archives/2019/pages/3/index.html","a6640f6be2ab57a9eb260364446a236c"],["archives/2020/01/index.html","0c5ec5456cb6768996e26bd00d8e8f65"],["archives/2020/index.html","84369299f9c78a247596194ff6645e8c"],["archives/index.html","33c43190d09a9beaf003b4514a415072"],["archives/pages/10/index.html","81361f176af4630d8f6a9371b06689c7"],["archives/pages/11/index.html","939954a606cd0b3bfe69c6337d100737"],["archives/pages/12/index.html","6fd051faee3c81f17077e726ff620b34"],["archives/pages/13/index.html","621f2c3c651717acf98d8dc1036868bc"],["archives/pages/14/index.html","c2d6becfada767baca69c8a2a78d1dda"],["archives/pages/15/index.html","26a606ba9a19de4bfd7dfb3ae469398a"],["archives/pages/16/index.html","bc6019e442c2458c85699440b5e0156a"],["archives/pages/2/index.html","66dd3eaa213794dda977582496873b35"],["archives/pages/3/index.html","d8f7add996ff475580e9ca4298527b9c"],["archives/pages/4/index.html","fdad71263cffad9dc65aafe76fe637a0"],["archives/pages/5/index.html","16ffed23dba9c811e545e9e64262e09c"],["archives/pages/6/index.html","64f1003279ed1341f0af4f2a814bbb86"],["archives/pages/7/index.html","838c4cbc2910522df1a1d57afa6fbb4e"],["archives/pages/8/index.html","3cd73d233594558d9e9c8d3ab7b646d5"],["archives/pages/9/index.html","560a539d76fdce7c426b69d92686ab76"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","7a09190e67e17f0a6f8010961f614538"],["books/index.html","3920b0976ff7258cf52c18db81855d04"],["categories/Unity3D/index.html","f3f7a2778ebfae6dc362c1504560f713"],["categories/Unity3D/pages/2/index.html","088ae506b05642bbbe79870c2538ecd9"],["categories/index.html","06e3e54f5d6ac20f1e4f49964992f600"],["categories/人工智能/index.html","d74ab3f367f586eac921dd21962a643b"],["categories/前端开发/index.html","584f546a0fb37526e1de9c23a9563d89"],["categories/单机游戏/index.html","20985fe23fb59367d4eee632e36f36f2"],["categories/开发工具/index.html","5238d8f97d5b06feac83994ef49abf7b"],["categories/数据分析/index.html","debae94b7def00c855637c81a6426f91"],["categories/数据存储/index.html","adef7157221f606568b38919be177506"],["categories/游戏开发/index.html","dc58506c9b7f713e9bea76b61d7fb873"],["categories/游戏开发/pages/2/index.html","9db79137fd79df5b178d5c6b90fdb236"],["categories/游戏引擎/index.html","d01c42a14277c3f1e20e4b454e16d414"],["categories/独立博客/index.html","8b0ab780ff74e6da6b02a68976611314"],["categories/生活感悟/index.html","fd000774080fd7faa2fbfa885daec1c5"],["categories/生活感悟/pages/2/index.html","0e77fa48f5b7fbaa42cb0c1cbbf9c0de"],["categories/生活感悟/pages/3/index.html","106228520b7ecb332a01450fb67d4011"],["categories/编程语言/index.html","cb3c7c3943a834939e6da0b6af7f2a48"],["categories/编程语言/pages/2/index.html","07be3dad1b6bca3a23746d901cf159cf"],["categories/编程语言/pages/3/index.html","43fb5c5f5c86fc5899ed274b6d96957c"],["categories/编程语言/pages/4/index.html","d4e2410cb1b86f66d85da5459c944d90"],["categories/编程语言/pages/5/index.html","ab2cade2fc185c7a362dadc13650e100"],["categories/读书笔记/index.html","798a9f8d2dcea558c2c21af762eb1c46"],["categories/读书笔记/pages/2/index.html","b310192da1ff53ef6e4d4df5cd6c2b77"],["index.html","75dab51299f025cdaf153cec2cddfc74"],["movies/index.html","ceeecbe3c47bd3c38cf71dae885b0eda"],["musics/index.html","1ce2d632fd3a0d49b071bc691400abe7"],["pages/10/index.html","91009d41e1d48359fe953a70394a690f"],["pages/11/index.html","a2e3426ef47c64ddaa99e20e106f9bb6"],["pages/12/index.html","0433a8d9f73f6a65e1186c04a201ae6f"],["pages/13/index.html","40d3b8bf83fd3ff91b9790ff2917eca8"],["pages/14/index.html","ffc1e08c06f551f0383ff3d5f739fe4d"],["pages/15/index.html","a18b64cdb182f56b37a657505eaacb96"],["pages/16/index.html","95cfdbf7078e018fe68b944c9925c99b"],["pages/2/index.html","85f8597585b50648f1b9f5a6699b2d16"],["pages/3/index.html","a97d23f367e457e61aa8ed6f71080b6c"],["pages/4/index.html","d8c2e465c32b39a22bc60908b30f6d3a"],["pages/5/index.html","3ccadffb904ed3b54c5e51fab22182b1"],["pages/6/index.html","38ab81eba5211da69e3f18ac2bad6698"],["pages/7/index.html","ba5c67d75a333c901cb885c50fe3e308"],["pages/8/index.html","f01691d00406782ab7e0dbef9f621403"],["pages/9/index.html","5fb8b932422511c08420e8e1816a4d70"],["posts/1059499448/index.html","3d3f25f68b7888a1131003a02471c390"],["posts/1071063696/index.html","3d8600a5616a0d6e9d8ba041da0a1f04"],["posts/1082185388/index.html","02aab4b06d0167ed52ff18738224e136"],["posts/1099762326/index.html","5f15b72e70800d3bc2f5b6de6c34e635"],["posts/1113828794/index.html","023b44355966974cf471d60bce8f0fda"],["posts/1118169753/index.html","a4be9a91d1a6d375a0d25de8697f0b7c"],["posts/1122710277/index.html","1416e091da4ef541c4ae2e3946e5736f"],["posts/1124152964/index.html","46aa04546b0e86fd28daf8d0a998a2e0"],["posts/1127467740/index.html","3967af659ede711319996f21e3473c26"],["posts/1150071886/index.html","77ab3127b72e4da5bd8e8a99dbd39149"],["posts/1150143610/index.html","e4cccd89f161bcba4b16808e9790bad8"],["posts/1152813120/index.html","ef710513ff6e4c98dae2649b3178bdf1"],["posts/115524443/index.html","2e021f78736b68ef391ef4a51934c2da"],["posts/1156673678/index.html","4006c9f9ee162b3bca8cb07765282eb7"],["posts/1166840790/index.html","29e4b6d417aad88565e6258291ade7c8"],["posts/116795088/index.html","cd7a70e1655189a35ce88a353cbe3d6f"],["posts/1176959868/index.html","b4c1b87ca508a7f6b1fad1796b60cad7"],["posts/1190622881/index.html","59f28f6a132a737cb63a0d388afa405f"],["posts/123663202/index.html","aaeb8a2f805e47e781689f153abc68fd"],["posts/124807650/index.html","288db898b24ec6b796aa219435a6e91b"],["posts/1254783039/index.html","c36a8afaaffb06fdc10006388272d059"],["posts/1320325685/index.html","b9e7382cc10f24dd6712b1587ec2001f"],["posts/1329254441/index.html","c0d9bd31701fc8bc87517cdf371e077e"],["posts/1357715684/index.html","644432d172f29ab9653e3a6eac56c02d"],["posts/1358971951/index.html","fba095a3401bfec04e6a0de66f023e5a"],["posts/1386017461/index.html","496c61ce7cee4850627c6ec2c2f6c10f"],["posts/1394521917/index.html","f605d1c5baca91a7264584f8921b31a9"],["posts/1397717193/index.html","3f8cce98456fddb9688a4ed5471d14e9"],["posts/1424645834/index.html","21fbdf5e2d968314f5d9154b5e021757"],["posts/1444577573/index.html","d83f189d2156f13a400beb7fde7c074c"],["posts/1467630055/index.html","d565ce5b9d829945c193717c1259f7d3"],["posts/1478979553/index.html","3f940b26da896e6d27c1b5ff233447aa"],["posts/1540537013/index.html","60e90f843c7f8721afc473f3c631a7b9"],["posts/166983157/index.html","40a886956176163880677b7c5bccc5ac"],["posts/1670305415/index.html","bed701fa5511b4687420e34cc50e387e"],["posts/1684318907/index.html","05065f51fcd954793dff3c7bec9fec01"],["posts/169430744/index.html","ab9f14497be1b1481ee69e28c2e2d193"],["posts/1700650235/index.html","131c3990cc37db7071486c03a1410ba1"],["posts/172426938/index.html","115437c40077f2387282121aa8e13622"],["posts/1836680899/index.html","f72261281f48eea83583dde89dcbf9fa"],["posts/183718218/index.html","5842b584f94c2eccabfd8a564a16ca45"],["posts/187480982/index.html","397f63afb07db7748e2278abcf94965e"],["posts/1930050594/index.html","4daeb77ec42a6b39561e4387ac62f6c8"],["posts/1933583281/index.html","e563b44abfac1e9f846c70fbfeedf0ff"],["posts/1940333895/index.html","fd8b72431587a525a5ba858b3af6dbe7"],["posts/1960676615/index.html","fe0e2d6cfce7f196fb5136cb08e229fe"],["posts/1983298072/index.html","d9d16306f1eff517c0490d7cf24063c2"],["posts/1989654282/index.html","7150c1103a8ad98fa2a42c742becbee9"],["posts/2015300310/index.html","58bc4528ea59c11afd8c72cbe121d87c"],["posts/2038378679/index.html","92da611da48ef7039bbce25fcdfb5e56"],["posts/2041685704/index.html","a23601af7428ad820deccba227fb8673"],["posts/21112647/index.html","f12f2c48af7927db442e162d8820669b"],["posts/2158696176/index.html","84a355b2c6b74515e1ddd8310a16980f"],["posts/2171683728/index.html","b19cd10ea8ba0b6e8b759dee86b7e158"],["posts/2186770732/index.html","0854446339cd3f3f7b5492077eb76ca4"],["posts/2275646954/index.html","2fc1707e648757d6760ef863d5394779"],["posts/2314414875/index.html","f9a357997657437828ba66c2c04c9f16"],["posts/2318173297/index.html","406cd3f2d60120d0c56fe63628f23bfd"],["posts/2418566449/index.html","06463f47746b940923237210857ed24c"],["posts/2436573863/index.html","8b072d7555ebfdfe01d9d86671ea8fc9"],["posts/2462008667/index.html","28db10f501dafcef767b1f3001f5c9a9"],["posts/2463121881/index.html","749c9b9e6f5fb17bc420eccb0ae6e23e"],["posts/2527231326/index.html","2a8c426b2b5a9303e756edfc4f577547"],["posts/2583252123/index.html","6250670d88067a327e870debd00f7c65"],["posts/2613006280/index.html","1aa045c61873c435c8dfd3f21ec11618"],["posts/2617501472/index.html","f64ec5194715235efb460d686d0cb628"],["posts/2676125676/index.html","8ba31badd2f5c9990adfe9062241bed6"],["posts/2734896333/index.html","cdc52c8f4e5d72f811b6e2d675e65565"],["posts/2752169106/index.html","4bdd1747564c494908e6e99ade89aff2"],["posts/2799263488/index.html","2f9c16ecc2c2f5926da9d67c0eecc66d"],["posts/2805694118/index.html","e8a9ad2d58c0d3acecc61e2064b47c04"],["posts/2809571715/index.html","7593869113dbf572b6535fa6821e8fa5"],["posts/2822230423/index.html","7c6c088ddee1a6fe85e6fefabd76bc67"],["posts/2829333122/index.html","982591b0011c2cc595c9ee0b020a8631"],["posts/2911923212/index.html","1fe35cd2bd6e43e287e37eb992235812"],["posts/2941880815/index.html","3154b9e90c40c842bcd881766ad0ee70"],["posts/2950334112/index.html","b323f30cc5898640c98395e2ec5ee29c"],["posts/2954591764/index.html","3898978b22b13c267ef5d816c21ce4d9"],["posts/3019914405/index.html","2ea1a4ffc83c8b97fbe0e111ad3bc2b0"],["posts/3032366281/index.html","9377a3c11093154a89e2a00d5e21c7df"],["posts/3040357134/index.html","45f194886fe90e2e58058509c05c1a3c"],["posts/305484621/index.html","469d96893d04418ad154cf6d52cdb83e"],["posts/3083474169/index.html","1dd15689b8f59b42574a9a1faff25e90"],["posts/3099575458/index.html","98df4ee3394aaaff253ff3fdba278198"],["posts/3111375079/index.html","2483a917727ad79b62229a459b96da59"],["posts/3120185261/index.html","26e7cac1c127520c457149f143183ef4"],["posts/3131944018/index.html","62e287e350079522f37e5d1e20c5c3e2"],["posts/316230277/index.html","486acb9a7658cc3c056e91df1a40c2ff"],["posts/3175881014/index.html","0a5b1cd236259c7c60010c74328be574"],["posts/3222622531/index.html","4090a37c2de70e80337b5d456ff14dd9"],["posts/3247186509/index.html","23e74f3032fb238f2d1b749873558d8c"],["posts/3269605707/index.html","4322c3bd927645f1ed9c1cb66011fa06"],["posts/3291578070/index.html","81412259238380adb21e9f85a71e2f3f"],["posts/331752533/index.html","de158314d8b82111f7afe6fbc3b25340"],["posts/3321992673/index.html","6ec5ece158e2ef9c0daf249c677b5bdc"],["posts/335366821/index.html","dc7d308989b6d193cc4e03e73927d6d7"],["posts/3356910090/index.html","8ccffa4bb1c308b45bd3643b127af703"],["posts/337943766/index.html","d31925058848a2e89cfc8ae0936af09c"],["posts/3417652955/index.html","ac7c9f1238e4d1d12474328e392a1cf2"],["posts/3444626340/index.html","a5afdcc44d1fe3b1b79bd2c15e1b8812"],["posts/3449402269/index.html","dc7e6d9ec660eddbcd92a6e85879ce22"],["posts/345410188/index.html","0e2aaa0e43f9f934a540f216682263f8"],["posts/3461518355/index.html","176d36b5df68e57569b6e661241059ae"],["posts/3494408209/index.html","a1ca54a845e744183ee5f6ad34b22f70"],["posts/352037321/index.html","e0f40f680a803c74f1ba9fcc667eb5c7"],["posts/3521618732/index.html","885d46a7ee43e02f9bdbad529fa230a4"],["posts/3568552646/index.html","47266c35f2a2c02d07fd125d3597e531"],["posts/3603924376/index.html","20c3aed474bdf13d90b58d42972c16cf"],["posts/3637847962/index.html","c7cf827cd8dee78e51f026166ac9b13f"],["posts/3642630198/index.html","ee8fb896278fced759ccc987cf6b9775"],["posts/3653662258/index.html","866d79dd1d9a56ea8a1b5ad897e1c1f9"],["posts/3653716295/index.html","032f3d419c4fecf33a120e1872f78da8"],["posts/3657008967/index.html","3d2ff4a80b312b23fcf02bebfd0335db"],["posts/3668933172/index.html","66eae8624f8dac8036d3458dafe8fa36"],["posts/3677280829/index.html","9a8047c1c673ef97e092e22d1faf915e"],["posts/369095810/index.html","55787b5a7bcf58128ab91a78d4242e6c"],["posts/3695777215/index.html","8720bae9a769a274215a374389c5a8a1"],["posts/3736599391/index.html","827d2d12acf1337d97950e4efc303eb1"],["posts/3742212493/index.html","06c4422ea210d36c38566db801f2ce57"],["posts/3782208845/index.html","4e402f617efbb4947b6cf1789fafda77"],["posts/3789971938/index.html","c3ab473c5e4c04bdcb42962edfc3ecca"],["posts/380519286/index.html","d9363eecae6833d0d7943e375b6bd364"],["posts/3846545990/index.html","8e488ae9c88521a9291b4ee4017e1d38"],["posts/3873710624/index.html","65611555d893a068971f154e7fe3b4e6"],["posts/3959327595/index.html","216b3c755284bae199e60f570c280fc5"],["posts/3972610476/index.html","b2d8b87b4b50f3f03c64ce85351210c3"],["posts/3995512051/index.html","f2c8bc2f5169a23cb5fa12f2ce982fe2"],["posts/4088452183/index.html","a11466ae1091af6a59c481c576105137"],["posts/4116164325/index.html","d2989bbc6de492adaf5a2f6f10a1602c"],["posts/4158690468/index.html","9ff79f32f4e5e837797d2bd16ef4c00b"],["posts/4159187524/index.html","4fcf072e45eed0f6a709a337bd62c8d6"],["posts/4197961431/index.html","ea9e5a6c8c5b5d7a43f3121882a61190"],["posts/4205536912/index.html","ca3f1695420bed94dd6f032a5cdfa517"],["posts/4236649/index.html","727b76242bf9ff7e7ae9e869723526af"],["posts/426338252/index.html","6a189a9631bca1adedb68f645b2cb8e6"],["posts/450254281/index.html","501e4decb1782e289e31dc63fb4f5ab5"],["posts/4891372/index.html","38fc15357b4ec1604f928c27d413a93e"],["posts/569337285/index.html","a3d0514ff17da538a478835973c9ce0f"],["posts/570137885/index.html","251cb3b8db42cab59cbfea247d4f59e7"],["posts/570888918/index.html","b9523c67e6abd45b116a230572c70988"],["posts/582264328/index.html","80e8461af2245879eb9493af1ab05b94"],["posts/632291273/index.html","eeae6d7034d6e906379c3d3f25256066"],["posts/70687890/index.html","ff76cf5347e13e0245bab51a32c176b0"],["posts/719322223/index.html","d1323e6efe0dc9a8c96ba2219125e5db"],["posts/720539850/index.html","561ace2431996b0290dc9aef4b330e83"],["posts/786195243/index.html","c1979e9b7bb1ee9225a4404d31b9ab85"],["posts/795474045/index.html","1cd9c4cdbf76e0fb46b490d8cccdeb4c"],["posts/815861661/index.html","e4f14ae003cae38b06a37a31f90883c9"],["posts/821259985/index.html","550b8286d731fc3bff884e9171e5f567"],["posts/828223375/index.html","ac5bba8c1f7ec127b1fc88b6a05eae03"],["posts/887585917/index.html","ba51ba594a429bc01a6edb608a1a196a"],["posts/888549816/index.html","cc1427bec1245f89d1d1fa026660e6b3"],["posts/906436376/index.html","7550bda07083ea48b8e6db011ae5d8dd"],["posts/907824546/index.html","c78d2e6381f930dcd4fba19e744be829"],["posts/927393529/index.html","964bc858ad462b39e28148bd7efbb562"],["posts/94443781/index.html","ead3bf6c5c0deb4a1d1280c78b2059c5"],["tags/2014/index.html","d61fc0922f65fc845df7320dc8a7921c"],["tags/2019/index.html","7de5659e15cad66605898c5446203771"],["tags/AI/index.html","31bddc8df4afd49b321331cec548fc98"],["tags/AOP/index.html","861ee16c887cf5f366f59c2dab5580de"],["tags/AR/index.html","5a8364b87e30edd8dbe99b9f1d5a4246"],["tags/AssetBundle/index.html","b30e81cbb5e407a678013c6c1658e543"],["tags/C/index.html","755ffad34928025378efe62441c21257"],["tags/CG/index.html","cb57e0c19e8f016fc63abad445d71d3f"],["tags/CI/index.html","da73cd9e40e8d9b6a833b8ceaa4729ac"],["tags/CORS/index.html","508bcdfb5a4e6bed247fa048d3b5beba"],["tags/CSharp/index.html","8813ea6bda3b96ab1ec2804dc5d91e70"],["tags/Castle/index.html","d8381ab4f0a41caa577d4530346fa313"],["tags/DBeaver/index.html","5ce58941dd839bc285be51d2feb59a19"],["tags/Docker/index.html","591db4394f32d331467a5b892ea73516"],["tags/Dynamic-Proxy/index.html","76248c3fefac4c38c3c501dd10f97534"],["tags/Dynamic-WebApi/index.html","a11571b3788b74f78207d584a252fe64"],["tags/EF/index.html","615bab430d59dc3a16d048a3dbfc696a"],["tags/ES6/index.html","beab9dcea32ca38db8e3eaf37e8d2ddf"],["tags/EasyAR/index.html","41adb5d092e3ad1ba44db749d27b893d"],["tags/Excel/index.html","9bbb10dfe674297bed330bd50abf8c18"],["tags/FP/index.html","c076c1047aad32f6f640ab02dcf4dada"],["tags/Form/index.html","73ebfc78cf4db4f6030b67b1326673d6"],["tags/Git/index.html","246715e1f8430cc91309e683be788022"],["tags/Github/index.html","8c40a36e809c59b1ea2c8a096f0f415e"],["tags/HTML5/index.html","7133660475f60b35167cd545fca7d67c"],["tags/HTTP/index.html","7bc5ff466af78859f841385c73020632"],["tags/Hangfire/index.html","84638eb1af891ea927e6219b2908ae79"],["tags/Hexo/index.html","a8d792c5f8a157b54e524fa2c6b233c4"],["tags/HttpClient/index.html","196a12a2ca49b5f1a3737ce4ae59d8a1"],["tags/Hyperlog/index.html","8fa9507153ed13c6bc03184a36a18410"],["tags/IDE/index.html","1dba573555668245ab7dd05d428d963c"],["tags/JS/index.html","5327e62209b93c77b4905b78068d029f"],["tags/JSON/index.html","bf0a9cff05aebf6a534a3cf032fb95b1"],["tags/JSONP/index.html","7c2a8db8ed348c745231bc3e05ff8936"],["tags/Java/index.html","544e812f8c03ae653dbd6ab68bc23fdd"],["tags/JavaScript/index.html","c058fb7810af3d24add9012b0d263986"],["tags/Jexus/index.html","72eaafbf591db5f2f8e6c569d3df091f"],["tags/Kindle/index.html","7f60487675dd4f31825449d794398842"],["tags/Lambda/index.html","18dddebdce729961a2529a34ee2e598f"],["tags/Linux/index.html","ebfecd685720638654c31c0a053a9153"],["tags/Liquid/index.html","7dc300d5b3c30f3ad15cfec57f5847b6"],["tags/Logger/index.html","ed880cbdf3eefa86b46f02b0c9676042"],["tags/Love2D/index.html","086c958b09e6aec3324a262b67115ba3"],["tags/Lua/index.html","84ba64d611988e83dd645d970e337268"],["tags/MMD/index.html","9b0be25dd0d89b7a14b7b0670338bfbd"],["tags/MSBuild/index.html","0be10c717fb754150028399fddf96211"],["tags/MVC/index.html","8266455e81f361c6a16d69150a6e304c"],["tags/MVVM/index.html","b182133dbef73b1e9d0e3f0e4b3cba7e"],["tags/MapReduce/index.html","ea2d9b5d28a3c9218e80ea0477e474f5"],["tags/Markdown/index.html","92da030a0733fcca1c1fa11e481a8987"],["tags/Mecanim/index.html","15b5a18c339eb3cf4a899fda2bd266ec"],["tags/Mono/index.html","13d5989714b61bf87f062b10541a9336"],["tags/NET-Core/index.html","87ae6b6c67bec918355035fa54b9aef6"],["tags/NET/index.html","096aba59c69bedce0b5ce91fed13c1b4"],["tags/Nginx/index.html","6823af29605980f6d92585f5bc6d97b9"],["tags/OBJ/index.html","0fa7710d7d4a0f456479cd3e030cc8af"],["tags/Oracle/index.html","6b28b605fea280c6e9a9ae1f1dde5b11"],["tags/PL-SQL/index.html","0ed78a0e338d2d3de4ba94f5ae69768c"],["tags/POCOController/index.html","81d7966de590fbb80d4c946506eff080"],["tags/PWA/index.html","56ee7869cbe949dfd8bc3b7f3b51f7d1"],["tags/Python/index.html","f2046e9c2dc9a48b6e1eab9356937f76"],["tags/RESTful/index.html","1bad17ed456bd3dccae0b7d799281e51"],["tags/RFC/index.html","fc9260f9587ec58ea395c9a269e73384"],["tags/RPG/index.html","47603cf10ffa34ba7b69ef170a315a3a"],["tags/RSETful/index.html","c47f13d4814dffd1d4d161f4072c9e5d"],["tags/React/index.html","b6a512b54e429c38b717348804460c32"],["tags/Redis/index.html","c62d0f24b720892903595fdfa0b63ad6"],["tags/Referrer/index.html","018ca9400c983fd5ff637e5fdb92a10d"],["tags/SDL/index.html","f2802fbc2be2d8670d0f5b0bbeeec0d4"],["tags/SQLite/index.html","c11c040edb2f259804652daab548c564"],["tags/SSE/index.html","2c630c40880a2ddc2779c9fa8b231670"],["tags/SVN/index.html","485ef8696a879d75f463ece5de72d573"],["tags/Script/index.html","5f9e644dc682d9200cc0da283388087a"],["tags/Server酱/index.html","fa63c7c7e969eb370af6ddc050f6e187"],["tags/Shader/index.html","c4a8659ddbfd81a6fe5be95766432320"],["tags/SignalR/index.html","62acf7f0ba02104e7725832e7c2e9328"],["tags/Socket/index.html","8ef159e0a3c8538117164a661e886273"],["tags/Sonar/index.html","888ec594283c4e38b9378f7657c289da"],["tags/SourceTree/index.html","94f54000bf43251e274fb948ec245f10"],["tags/Sublime/index.html","71342ee69a032b1234c5d3c61fe1a02f"],["tags/Swagger/index.html","ab89fefb4e636d429136219e8ed7baf1"],["tags/Trace/index.html","4dde3a198a63867a9339deccc4d700cf"],["tags/Travis/index.html","42f468654fa365cacd9b232eadb4e5a9"],["tags/Unity/index.html","faa079792772b11539090bb6e71d296a"],["tags/Unity3D/index.html","18c42461934f8ff7e6301c573e83563d"],["tags/Unity3D/pages/2/index.html","392840d482a8fcf28949a4da01260e1c"],["tags/Unity3D/pages/3/index.html","586b90bc7ef9f194c7b67dba1c8d4059"],["tags/VSCode/index.html","1814b357e7753113e06cb603406a0e9d"],["tags/Valine/index.html","52bb31f7792e2cb6862a7edee71df73c"],["tags/Visual-Studio/index.html","c002f541123f8eb1a3714908e79bd6b3"],["tags/Vue/index.html","26d0251b2ae1bb0ec80dce973d60c647"],["tags/WSL/index.html","d80f4cba7df7e3118ba5edf400f1731b"],["tags/Web-API/index.html","cb061e62ac07f709efa585458c36af53"],["tags/Web/index.html","d2381656d55eb9562dc07faf9f3d5146"],["tags/WebApi/index.html","8665df1b5b09cb3931b1c5ae16697d84"],["tags/WebSocket/index.html","405211a4985b77c5c77babde0b03c093"],["tags/Wechat/index.html","ba2444faaa80a1f4b6dd192193185f6b"],["tags/Windows/index.html","fc6895e24229cae73e405c1263e36e28"],["tags/disunity/index.html","0b76196f6b7db58f821e5c5c07e5f5ea"],["tags/index.html","84927b260e8fd1c2060e5a287eca75dc"],["tags/matplotlib/index.html","0f7627c432df0676c362817cf0547be2"],["tags/uGUI/index.html","58442d38d0633e9731e89be780b8cb13"],["tags/zTree/index.html","28b89991dfac0029d97760d26b9f5ddb"],["tags/一出好戏/index.html","94f04be4ad874dde20d500005e8f4680"],["tags/七牛/index.html","6f13a5bc71f2fc1ca7052bc00dfcd4cb"],["tags/主从复制/index.html","379fc4c436f9638be835a211ebe6ec71"],["tags/事件/index.html","ca95aad7a13326cc626d8cf85d05cea0"],["tags/二维码/index.html","d158b5b57565b60b1ddaf3cb1761864f"],["tags/云音乐/index.html","934964c9197a5811755860fd7d8583f1"],["tags/互联网/index.html","e246f3ae189c891102c28d8cfc4742dd"],["tags/亲情/index.html","9476b6f8dd7ddfc73b9bc519692fcd36"],["tags/人文/index.html","06c4f6be6270f23e42eb3d92647e7752"],["tags/人生/index.html","2e00c4c487eedef85d9b643829366f7d"],["tags/仙剑奇侠传/index.html","dce6da5a8173e53cbf0bfdf9b8396697"],["tags/价值/index.html","e491a8ea602d01f93dfee3b07c718233"],["tags/优化/index.html","b70464c9ffe68a450169215de5484db8"],["tags/全智贤/index.html","bd533a47a3cad4dc2ab125fe43652769"],["tags/公众号/index.html","6ab64817368050356ce8635d738407d4"],["tags/关卡系统/index.html","2ff35754b7f737ae7c84dd5232b863de"],["tags/函数式编程/index.html","cf6aed41429c7bed56136cdce4869037"],["tags/别离/index.html","f4bad8ad2629a23f7046a375e03a65db"],["tags/前任/index.html","aa6c7fbe9687eee20904d4652263d2aa"],["tags/前端/index.html","409e30961886194081adb63710044b2f"],["tags/剑指Offer/index.html","40a7aa70fe173091432e2f0c05f323f7"],["tags/加密/index.html","28752a70c7f74783eeea312be3e9f7bd"],["tags/动态代理/index.html","9442a318001b882d96b2698fc6e1a080"],["tags/动态加载/index.html","d346b749328e7b3e98004c98e8c58b17"],["tags/动画/index.html","6e6302b0785aaa443e52a311aecd687d"],["tags/单位/index.html","147e3c5dfe091f71b15de42a33b69594"],["tags/单机游戏/index.html","c6c9572bbac1d500fda7898d03249b28"],["tags/印度/index.html","fe18a8e5d1dc4a600df4801152781419"],["tags/历史/index.html","e3a3c5c65685004464465d620de05cc0"],["tags/反编译/index.html","cc28cef67460380388b35646cab263c2"],["tags/同步/index.html","1e4b80ad31360f5ac9403dd79f2f218c"],["tags/后端/index.html","5c8260350be450dadca36a9b5f6ed94a"],["tags/命令/index.html","c79f77a7965b7c304f224c5b9c2a9bea"],["tags/和平/index.html","6173fe1437058ae45b6143dab54f6989"],["tags/响应式/index.html","7f1b967ea7c4ee39f0516826cc1843d8"],["tags/哲学/index.html","0d339fea6b14057da3aedd38fdbf0435"],["tags/回家/index.html","c0289c4dfe50c056de688535c9f6e476"],["tags/回忆/index.html","f70c7302a32217a16276b3c2fe446c23"],["tags/回顾/index.html","01aebb221bb33ce473919a685505790b"],["tags/回首/index.html","fc7e9930a363486f75f7cedfc663d24e"],["tags/图床/index.html","76b5b7e639aafe009c8e7b4481aa4513"],["tags/图形/index.html","541dc4f9afab883a954b3b722a41428f"],["tags/地图/index.html","7959084b78582c5c8ff477429fa9bd19"],["tags/塔防/index.html","0bc946582a8e81888d1170c1368f27ec"],["tags/增强现实/index.html","044749c0f1ee7e4eb843579be2a2de4f"],["tags/壁纸/index.html","f515b32005cabc471dc81d8cfb74d043"],["tags/夏目漱石/index.html","2ceba2683d3e5a766fdadf6ebced0f1e"],["tags/多线程/index.html","0ce5fc304b1931ca7be53b5088dc65fb"],["tags/大护法/index.html","e33e9e88cc326cea0a0d30267b337a69"],["tags/委托/index.html","01596d13222cf3ffc6b4b2cc08534dc7"],["tags/孤独/index.html","0efb82cd58605a4cabce47fb256b94ed"],["tags/展望/index.html","7322b1da155bf801d1fb5b040096c8f6"],["tags/工作/index.html","8926a1d20648ef31638bddb261d79473"],["tags/平凡/index.html","bb5189ee94cb4fd90d808bd617ee7a5c"],["tags/年华/index.html","685a00d75c88e2451839e105eb77c830"],["tags/年度/index.html","b3cca996def85dc68c746b102d998fe3"],["tags/开源/index.html","cffe846c9d5f9445e774d95d001f087b"],["tags/异常/index.html","482bb941cd89b431c1e63baf44a98d12"],["tags/异步/index.html","cc611c3ab1a177261ea99ec4949c3d7d"],["tags/引擎/index.html","ec6a89d535cdd3a64551a0bf432364cc"],["tags/影评/index.html","f85130367ab09e85df265fa1ea35875f"],["tags/微信/index.html","62ba89e16a6cc56c638ed06d3acb6c51"],["tags/微博/index.html","1875e6133defc46e0f8732c9e8c90e91"],["tags/心情/index.html","23a909a6666ceaa1b88475666624fe68"],["tags/思维/index.html","82824158a9b2f8fd95946876b595f9b4"],["tags/总结/index.html","a3b6d37db825f1385be41414ef46e19b"],["tags/想法/index.html","eda7090a62d7851591ffe497f953410b"],["tags/感悟/index.html","c79de1ced876a429a375e113d3d16dab"],["tags/成长/index.html","4c9bea4b4ea1a355d626f1b343dc2668"],["tags/我是猫/index.html","631d11295ea48f6ffa5d16bbcbb51d03"],["tags/扩展/index.html","c1a20509c08b865f238f08679f3bff4f"],["tags/扩展方法/index.html","5040505bf22c1e0b878667b5ead5021a"],["tags/技术/index.html","c4c2c72c47b49c5d3c082667074d329e"],["tags/拖拽/index.html","44d62da6924ae8ef7c36ce76640335f7"],["tags/插件/index.html","844b963df1cc9374e6d0effb7f6eb9ac"],["tags/插件化/index.html","d1668f8ecce1aa8b2b4d956c06a5a540"],["tags/数字/index.html","a7113b3fbb216843014670f0b719e1dc"],["tags/数学/index.html","81249c658b930ce7f397b340c72f3841"],["tags/数据/index.html","b161210b25b17f277ed3a118cb1e5a7c"],["tags/数据交换/index.html","a2b51b31a15919d80699d92c2edd8d6a"],["tags/数据库/index.html","2ff8ff144a3770cfbfb1019e5553d336"],["tags/文本分类/index.html","d17c7d4dc347693596e7e315672a7e9b"],["tags/无问西东/index.html","5e3717892b92f95507b83f5b83f23ad3"],["tags/日剧/index.html","ad6ab7b6f3d7ad678bd388cbdef22bd5"],["tags/日志/index.html","9b94dffeb45be8ddc6e0a71b5c5860a2"],["tags/日本文学/index.html","abb4c42978d00998f4ee75b4da579434"],["tags/时区/index.html","55c20b456a1e92384bdff941df0231d5"],["tags/时间/index.html","2b6040c681ea256974419e76a03f76a0"],["tags/服务器/index.html","05465018534790da771be10d14d35af6"],["tags/朝圣/index.html","a444f248750aa8d8890c3f0ec32689fc"],["tags/朴素贝叶斯/index.html","dbcd74a41e2cd8166b27f3c1cc46e774"],["tags/架构/index.html","252ae7dc5b78b61beb20d3cc53e1840c"],["tags/标注/index.html","6ab94a74f7159c3861e41f31e80bcc09"],["tags/校验/index.html","0126453dcf5f9efee07b6b036e9b0a0d"],["tags/格式/index.html","f5f175e17136d6451b8293237faf3eb7"],["tags/格式化/index.html","ada938a0912d284b81ec277dd8af6549"],["tags/桌面/index.html","73687060c99d543504490d146a900d1a"],["tags/梦想/index.html","2187e70b1a784d42e8e32af38deab019"],["tags/概率/index.html","65128957d5e3239fb01e6ac560ae4e04"],["tags/模板/index.html","32af71daecc4fd4ff8bbdeebd24ea8ef"],["tags/模板引擎/index.html","32b6a587e92db20f450ceded4eeef637"],["tags/毕业/index.html","d2cafb45f77c44af3dd767a278d9e022"],["tags/毕业季/index.html","2fe7dd6d538818a896a1c6c8c7676797"],["tags/消息/index.html","587abc8e2aa658e8d3b8ac0ec1125ee8"],["tags/游戏/index.html","4e9e3f54886dd384cdf33bb37a12b76b"],["tags/游戏/pages/2/index.html","cce3d50477edf4dca82becd81d185e22"],["tags/游戏开发/index.html","a71e20fde9d67895922c9ccb824ce748"],["tags/游戏引擎/index.html","fd129d6e812ae8d1b48c810fd4029518"],["tags/爱情/index.html","35696c1f5e9c5d1245b8dad4f60d69a2"],["tags/版本控制/index.html","97821a85fdf9731447dee797f652a56a"],["tags/版权/index.html","316e2ddbecb5ff7012bf5dc28b142576"],["tags/特性/index.html","9245a0687af7564e258ec3bfbf284822"],["tags/状态/index.html","a539bc7634fc3a0d8196e9c220b1525d"],["tags/现实/index.html","ac15c16c7fd100c1b7016bccf93bec6d"],["tags/生活/index.html","5f5c441c537920b29fc8d87a190a1359"],["tags/电影/index.html","4c9d1a9f328ce2b392a382036915b2e0"],["tags/画家/index.html","0a5a6a2bb4ee508e5c88b4a50baeb47c"],["tags/知识共享/index.html","0351d45a6f6cfb2f87af60469d9a62e2"],["tags/矫情/index.html","9911f525c47972fe81e5c4859a21993a"],["tags/程序员/index.html","456c88359fbbfbf1884c5ce19a5db23e"],["tags/穹之扉/index.html","5216a787baad837f494656f3f03c312f"],["tags/穿搭/index.html","13ed6a0b0450851773f80d573ae1b477"],["tags/童话/index.html","7a1853ba007d4ddaafc4538e05a34066"],["tags/笔记/index.html","54f6f418cac7b06e7f6bed7aba0a0c0d"],["tags/算法/index.html","3cf87edd6d184e95375509ba66d3b059"],["tags/米花之味/index.html","36efaa2dd3f9c843e4a40688d3cb5d68"],["tags/缓存/index.html","13638b41e1ae6a7027e311c6c641b486"],["tags/编程/index.html","455c5ca286cdc7b9659c2874cdee151c"],["tags/编译/index.html","c13e1c5d339224d32f89ab3f29b40400"],["tags/编辑器/index.html","341d33312c3baa87ef959277d5f48e88"],["tags/网易/index.html","670e90f1429b3f8fc1547a2e0c1d46d7"],["tags/脚本/index.html","c201ab913273a7dde4f3e0ca67297137"],["tags/脚本语言/index.html","e29c4d9cfd76d5ab974b698db1d248e8"],["tags/虚拟摇杆/index.html","a9a1b73bc1b19fb69e785ae09b1d7475"],["tags/蛋炒饭/index.html","48afe3753c962a7c558872f6caa9f1fc"],["tags/表单/index.html","5885a5298262b832bc08a14e4c194cc8"],["tags/装饰器/index.html","1842b615aae24f1e199698cc672b5cd1"],["tags/西安/index.html","1e37e2de9fb7ffdc34ab9eb9304ca541"],["tags/计算机图形/index.html","6799223e77bf74b61a7f9b6183b1966e"],["tags/设计/index.html","f90bfc4002d6fd9b5a48631b0c2f3bf0"],["tags/设计模式/index.html","312d4a60f96dd958e0b320135fc1b7d8"],["tags/访问量/index.html","4146e4532b13de18354219d3a3943064"],["tags/评论/index.html","487f56be244601adc6766d4f360fc0f5"],["tags/词云/index.html","d0204d488a2a6219e5c4cfb49cbc0ebf"],["tags/诗人/index.html","54e1bce166f6661cc5b5639cca315220"],["tags/语法/index.html","e1e86ad89401a0e9bff4fbeb30649e79"],["tags/请记住我/index.html","a6580d9925e9bc5afabed27a7c741871"],["tags/读书/index.html","036ee40afdb0266478d9834b82358763"],["tags/读写分离/index.html","2e1d2436bac168db99f4583fa7761d3f"],["tags/调试/index.html","a0029eafc468bda255029d95ddf2737b"],["tags/贝塞尔曲线/index.html","760f7d61b5ffcd6be5c0594ec9bececf"],["tags/贪吃蛇/index.html","d626b1f17b89c90da471836a706eeabf"],["tags/资源提取/index.html","a4fedc2b3ae6819a9d803d7b6d0af108"],["tags/跨域/index.html","467e4144d3e27c51e305802a03051482"],["tags/跨平台/index.html","683df3eaa88853313b88015248433dac"],["tags/转盘/index.html","24b80eb24abf4f673b82253125315118"],["tags/迁移/index.html","7989cfe87bf4aae7fcf3e7cf0c019a54"],["tags/通信/index.html","9f6aaf1de2f2d0dad175dea07f781c5c"],["tags/邪不压正/index.html","ab14e5da6cdb544b7656c5c9969a5484"],["tags/部署/index.html","25ddc40ce94dd7dd699a06dcde03849c"],["tags/配载/index.html","0a7f84ede9050a0fb29044c53681b652"],["tags/重试/index.html","7636a2b0c741beeb2eb41b108dbe5504"],["tags/长安/index.html","9e43de7d42df74e00237f5a9d82b2344"],["tags/长安十二时辰/index.html","7604f13dadb5263fb2211646b833df69"],["tags/阅读/index.html","9a939b53981ff642c34fdc20a5b6676f"],["tags/阿里/index.html","1a74294297cf45c7f6f1d959b7057029"],["tags/随笔/index.html","366f3662ee37da5ce18cb116dc80f0df"],["tags/霍金/index.html","2f6b1485d27594f709e00fe8eb9d55fc"],["tags/青春/index.html","b87ee004c7055c5294cd955f48994172"],["tags/面试/index.html","e251848a74914dddbe85492d6d70e5d0"],["tags/韩寒/index.html","f4374a9c6fca02636d433f6fa1a145c8"],["tags/马尔克斯/index.html","0d83242510921942da69dbde261ac1a1"],["tags/验证/index.html","24af2b4634da5d20457ba40ad0689dab"],["tags/黑客/index.html","498366c2caeef4389dda11861f50cf71"],["wiki/index.html","12e262784ffa0aef1cbbf66e3fa496b9"],["works/index.html","8c0e7ed4035bfe01774f4b3f08faaf3c"]];
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







