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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","cd8cd6e2d080df525a78ecf7d2aab59b"],["archives/2014/12/index.html","0d5419f745eb373c97be752ab87ffd76"],["archives/2014/index.html","7b619faba3e0d1f303d1b454a29c41b5"],["archives/2015/01/index.html","5746a3091388da62f5ca4dd75eefb0f9"],["archives/2015/02/index.html","e2475e884b1caf6312c9b6dc6f452134"],["archives/2015/03/index.html","e893977d0c30c6671770e0a42f936736"],["archives/2015/04/index.html","0b9f4841659490eaf85246643a5fc1b3"],["archives/2015/05/index.html","866d555b103e64221a201d1eef462ac3"],["archives/2015/06/index.html","fa2b1dd99d05952cffbffd900a8e896f"],["archives/2015/07/index.html","25efd2cd7d20458f0de66d8689ae0b51"],["archives/2015/08/index.html","a491e24313d76433b50aa74a48b66617"],["archives/2015/09/index.html","c314bf0e0fed92b30e65ccaf0c73017d"],["archives/2015/10/index.html","35c5e7f2a10baf16e5b108c30d4c7fae"],["archives/2015/11/index.html","71a7981c9474e1f4221379d28f5f7853"],["archives/2015/12/index.html","b038efb56b9db76b4b083fadc8e66d2e"],["archives/2015/index.html","005b281c3f1772a3fe003461229d0975"],["archives/2015/pages/2/index.html","2bb4f8cde5344f46280fe3cd379363c0"],["archives/2015/pages/3/index.html","012d43dfe3132fbe5bbcef5e476afc64"],["archives/2015/pages/4/index.html","6bda6fc878e6ea60447c164583f25fb5"],["archives/2015/pages/5/index.html","c172dce472ece2d49995bb342911389b"],["archives/2015/pages/6/index.html","75c4543bdd8d26d93c0146e768324d21"],["archives/2016/01/index.html","05b4093a116fa15918c9b9dc68970d6b"],["archives/2016/03/index.html","5f8957eaf06d0137b9d2f14583e1ce76"],["archives/2016/05/index.html","a68052563bc76ef2eee99bdaa1e25637"],["archives/2016/06/index.html","afe5a529ab73b46fe53d2ca736f42b2b"],["archives/2016/07/index.html","9aa97e1a156493e11f48dcc485913315"],["archives/2016/09/index.html","d8eaa79afe1fef9d99b8c07284b4ce11"],["archives/2016/10/index.html","a0333b210aa81e46b31feb0987816be3"],["archives/2016/11/index.html","a7a8417dd661c1a721607263c7646cb9"],["archives/2016/index.html","c2716bd6671b8439d2faad966431e28e"],["archives/2016/pages/2/index.html","90a31a480f8547f7c0f3e348fcc1e0e3"],["archives/2016/pages/3/index.html","3757102870b8566dda2e3b9453657a80"],["archives/2017/02/index.html","c0756cc8fb9846107a577ad15e86f41f"],["archives/2017/03/index.html","5c3cad92c7a4ab8111704e72943566aa"],["archives/2017/04/index.html","8321f9d6aa0f08c4d8bd8330016722bc"],["archives/2017/05/index.html","856edd0ec7808ec8484a32e95a4961ea"],["archives/2017/07/index.html","b251bb58e6d2335520e63ceb2749348c"],["archives/2017/08/index.html","496e1caac654875b7cbbf7c7fa1b1c55"],["archives/2017/09/index.html","6a09b513de036804e5ec1e23f34244eb"],["archives/2017/10/index.html","830de9b42e3fa89b4bb3cbdd59ba26d8"],["archives/2017/11/index.html","d562856f358f11bb52d18ec4d04a89b4"],["archives/2017/12/index.html","ae8cbeb91f56538bc28b68a4543b859f"],["archives/2017/index.html","b02468535f7208710061a02d71a3a13d"],["archives/2017/pages/2/index.html","7d86853cb13715df01598530e6fd0149"],["archives/2018/01/index.html","2b49b3dabd06fd47460bb18d848f9d5c"],["archives/2018/02/index.html","3ced4e3817ec5f9da9d85ba418da858f"],["archives/2018/03/index.html","7ba59aee2715a44bd661f8d8a9f8ad16"],["archives/2018/04/index.html","56532b935752bde243c41fe14986bd78"],["archives/2018/05/index.html","f9d470d45291ae2ceaaabda934d1b4f1"],["archives/2018/06/index.html","448ca1f23a965fd530a7136bb8d43847"],["archives/2018/07/index.html","4428dabcd67886b3adb5b8e6bfdd2dce"],["archives/2018/08/index.html","88005c2e2217cb0d8869fc50da63ce3b"],["archives/2018/09/index.html","f29367599a37e4d220c94c6c9eb67f43"],["archives/2018/10/index.html","0303830fe7abfe86b43b629a83690327"],["archives/2018/index.html","aaab642cd98700ad2b1752d7c43539ff"],["archives/2018/pages/2/index.html","7d5ead969196698505e0b59b3487cdef"],["archives/2018/pages/3/index.html","751ce2fe7ce8e504c4472b160153a11c"],["archives/2018/pages/4/index.html","175700765ac6e6fbe03e5dbe02d1c600"],["archives/2019/01/index.html","19a7c8b63d2f61c1ba9765e7bde84049"],["archives/2019/02/index.html","b02f19efe6b0eabc80103cd47bf6eea6"],["archives/2019/03/index.html","db4662e55b69629b092b707cfed0a796"],["archives/2019/04/index.html","0f72e5bba6d3059cca414d7155e64227"],["archives/2019/05/index.html","a3a7d96f725720ab571927896fcd8564"],["archives/2019/06/index.html","aa409ad27c425c0ee4335ccac6d599a9"],["archives/2019/07/index.html","f704d136220cf868fd6af4a86c58d8cd"],["archives/2019/08/index.html","7cd00778b6d4bad435f9a8665b2c3c71"],["archives/2019/09/index.html","a5799092d46d9293a2b6b7b272436a6c"],["archives/2019/10/index.html","d49e8ece8e5365524c69e42d3a9c0aae"],["archives/2019/11/index.html","6b58740373b9bc86739d97dcff10fe2d"],["archives/2019/12/index.html","bdd876145672233d67cd5bc98d88347a"],["archives/2019/index.html","d1f896ccae878ec55cbc1716c5e3dee4"],["archives/2019/pages/2/index.html","168c3ef21e939245da11f4d4593ea0a6"],["archives/2019/pages/3/index.html","83b2b4e38cbfe6fd1c39eb50e694a200"],["archives/2020/01/index.html","bc3ad5552f58addec9cc27052aa4f8d9"],["archives/2020/02/index.html","cc25ae83b84aad19ee113c204cc62bf1"],["archives/2020/index.html","0235986c3c345ef6f5e4a704d0af8740"],["archives/index.html","46f437e71cf9a060b2f34710abf881ac"],["archives/pages/10/index.html","9436788bfa39ebbb9e8d1735f04d84a6"],["archives/pages/11/index.html","9e950a07177a1bbf2f3b79cdcedc839b"],["archives/pages/12/index.html","4168e7d58c63bb7bb1f9982b5ee392f6"],["archives/pages/13/index.html","f156432971cb1674c1f14e45e44d779f"],["archives/pages/14/index.html","41d0d43477758c0d7abb6f085157be70"],["archives/pages/15/index.html","cd1da0227d87adc7f1959fd7d566610c"],["archives/pages/16/index.html","2443cc50d09e47c26565fb7ee82b13e9"],["archives/pages/2/index.html","e772485a6ef332981a87bc32741df6d2"],["archives/pages/3/index.html","118d0de64016258b1c6c13dfec99e3c6"],["archives/pages/4/index.html","385d8ca0ec56f68d46d23dd78a53120c"],["archives/pages/5/index.html","2b0108ddaa5ba65bdd772eecc77e35ac"],["archives/pages/6/index.html","d84573ff7c07a1139a6ccfe1d0cf3913"],["archives/pages/7/index.html","e201aacf135b2e4445cabca1a50e5be5"],["archives/pages/8/index.html","3289b44581925798b26c16c657785b57"],["archives/pages/9/index.html","c7ea145f0e0ae268b06f7981ee87e850"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","ce397ee668f27e94ab6b186ed9a200f5"],["categories/Unity3D/index.html","4f6b22778cf1bb5aeef43037cb144c04"],["categories/Unity3D/pages/2/index.html","523150e7fd6da22315be60cf3f8f6be3"],["categories/index.html","25e34a7b116d043ec7c57c8405956aa7"],["categories/人工智能/index.html","c3b09e688b3a5379c386e60bcfa2815e"],["categories/前端开发/index.html","01ee29415f74dee23cc09ac5d39adf37"],["categories/单机游戏/index.html","5544e2ae469c713a56ca97da58e7b3bc"],["categories/开发工具/index.html","764f1f91d7d943d3d0573d284cc8ea41"],["categories/数据分析/index.html","4111d752dc45ab8b5ac4614662c0b12a"],["categories/数据存储/index.html","175392223b89adddb811e0bc0eb518f5"],["categories/游戏开发/index.html","bab27418c623f4b3b5df77fa6cf53e5c"],["categories/游戏开发/pages/2/index.html","024856ae0376dabb8fd74dce50df6401"],["categories/游戏引擎/index.html","65da84f024f5c4f155570d721c38a568"],["categories/独立博客/index.html","131f0b627c8b1e283c926c95abd3c982"],["categories/生活感悟/index.html","0c827a38081f3e5ad6dae75b5f643126"],["categories/生活感悟/pages/2/index.html","e6fcf2f650f975905d08fce53483e22c"],["categories/生活感悟/pages/3/index.html","bb90f7be3f082dd91568618fc6603751"],["categories/编程语言/index.html","71976a06a884672d882ceff8529f78f2"],["categories/编程语言/pages/2/index.html","21dfe08746a9fa8307d0382279c1b4ef"],["categories/编程语言/pages/3/index.html","494c7b02dc9418a0baf0b0e0ec05774b"],["categories/编程语言/pages/4/index.html","3f90dbae8b233ceb8faa9e1764067a18"],["categories/编程语言/pages/5/index.html","fa1dd85efd4981c90ec2b806d95d0cb0"],["categories/读书笔记/index.html","6028b3ec250dda02eee66ed0e965138e"],["categories/读书笔记/pages/2/index.html","8f6b99e26bdbb3b28e2da3c598b9616a"],["index.html","c16c319d5e2ea67b06659375b484ae1d"],["movies/index.html","3bdcaa19cd93350876a6d6e5793a2627"],["musics/index.html","d4f405e34882a769faf0231d92558c04"],["pages/10/index.html","3825cdb8eb59783c50d0c20bb7adcb3a"],["pages/11/index.html","15eb92f3e0da556a0d1524f51c82cace"],["pages/12/index.html","e7751701ae2e819a6a530c0cbe92d384"],["pages/13/index.html","7bf763d4bc7f270f26e8250ff5004332"],["pages/14/index.html","36f1378e2ecd952df52b78135ff835a3"],["pages/15/index.html","33465b76afd20d59adcdfbe3e9032ce6"],["pages/16/index.html","dde677e144c6968b10d52d044abe91a6"],["pages/2/index.html","19c4ddee52916674a51e09e4f6acda9b"],["pages/3/index.html","a76a22ca598542973addd1737bf72f59"],["pages/4/index.html","d30cfcff139abda9297db37846e815fa"],["pages/5/index.html","062f5fdc07925f4fe4cc0c4f19de636e"],["pages/6/index.html","2c69d3e7453ee44ccb5489ca3a9a1300"],["pages/7/index.html","ca80f983cc5c60de55f824638b253301"],["pages/8/index.html","68d6e00968bd5f9772b803a292cf1570"],["pages/9/index.html","1e215548a6082a1674a9a6cddd946b15"],["posts/1059499448/index.html","402458d71b55ff703a9275a33cc44dd9"],["posts/1071063696/index.html","60f4c17bc73d6d398f8ccaa057fd1829"],["posts/1082185388/index.html","d00fc28e9d53c060224c32ec0cb9ea20"],["posts/1099762326/index.html","4880e02f07db9070ec95cc5cfa7a60d7"],["posts/1113828794/index.html","f9fe09881b2f8597552dba7cd9fd6791"],["posts/1118169753/index.html","d8396fe8fa3dcccc85fd5e683680bec9"],["posts/1122710277/index.html","2085f3e4cc833aa17357cad8314bb1fa"],["posts/1124152964/index.html","1dadb1ccbca5711a9788b5dd3e205613"],["posts/1127467740/index.html","ccf24c9d6d1aacd0df4972415ff797f1"],["posts/1150071886/index.html","f6cc26b912327f04dea61dd50c1b5429"],["posts/1150143610/index.html","3495b94447c6732d4a436932106bcf55"],["posts/1152813120/index.html","b953a03a4e104bd0a55fe6dd57a339cd"],["posts/115524443/index.html","bc4fbf969e8c5ed9d74e0759c75e4d5a"],["posts/1156673678/index.html","5176c7a9782c0851e2e41a40a528d710"],["posts/1166840790/index.html","354d99814a7bf0741eb2dd8d4c470963"],["posts/116795088/index.html","c0a4f14b68ac496020a012bc7b876427"],["posts/1176959868/index.html","c91634dc59c0ddfb34f066d0ff0d8ecd"],["posts/1190622881/index.html","83bd20d760c3b9ed80f18bb860aae6ea"],["posts/123663202/index.html","b69ff7c928a849ae9eb290c68e4f6ca2"],["posts/124807650/index.html","fab5556760fae9df16001671606f5691"],["posts/1254783039/index.html","c5eef4ac8999a3359f5dc2a8060ea6bb"],["posts/1320325685/index.html","5ad65311ac8380e867fe7bfa39861fa2"],["posts/1329254441/index.html","a39e45ef620c20d5e755d47977989667"],["posts/1357715684/index.html","8d3b39603dbdafd5b974634676903b94"],["posts/1358971951/index.html","1eb9fcd621f4a7520cfab9e4d82b34c9"],["posts/1386017461/index.html","0a508cce6b52a3b60b367d8dfddff0ed"],["posts/1394521917/index.html","45de98780c8f39e960a2853c67477fea"],["posts/1397717193/index.html","e643aa588c862f27d11583d8b83d4f93"],["posts/1417719502/index.html","008706b5eaf069886e844a8cfc907b2d"],["posts/1424645834/index.html","3a1c80d30e2017bb30b5e69f6b4e85b3"],["posts/1444577573/index.html","926e0b49ab990afe9d85c6c4854ce6c5"],["posts/1467630055/index.html","e39eb97c3479cd601f055c449292ee7a"],["posts/1478979553/index.html","076e4e108f353a9a0d0fb185e5f2bd69"],["posts/1540537013/index.html","abd5f7acde09b65484463af6ea078b22"],["posts/166983157/index.html","5bfb10289ce650bc1c941a975e71ef97"],["posts/1670305415/index.html","81fdd98ee8dc4d7e135280a5f1c7a051"],["posts/1684318907/index.html","1604e5d4672dd1f592aec167226f4519"],["posts/169430744/index.html","6b22b72f0ff32f14cd78ac6eb693d2b1"],["posts/1700650235/index.html","e45a5cc341bef044b123119d86605952"],["posts/172426938/index.html","8a112f6b058a93df63f05623166eb26f"],["posts/1836680899/index.html","5c65bd71f80fd07fb05527c195037058"],["posts/183718218/index.html","a03e536fb7e3bbfd5d389a959560d8bd"],["posts/187480982/index.html","c7c5f68fd582798ba7a7f6030a7bd668"],["posts/1930050594/index.html","43078b0b0230d03fdd0575b999f8fcf1"],["posts/1933583281/index.html","0e7d97a70bc9879eb2b5a8722a5b4154"],["posts/1940333895/index.html","2bc39e428ee8917dacb8ace19ee27949"],["posts/1960676615/index.html","4effefdfd40853495b26baa89488cdd1"],["posts/1983298072/index.html","257ca635469e7735fdbc4dc03b52538f"],["posts/1989654282/index.html","b66dd39cd8ce8a5d05ec4b20e6f9db9f"],["posts/2015300310/index.html","6c142cdc3288711a42a00ee443582ad6"],["posts/2038378679/index.html","e3bc7be3572e51767ee0cd13cf37d4bd"],["posts/2041685704/index.html","f5411a742158d4724cfc3bee45fb351f"],["posts/21112647/index.html","4e691dfe8c493feb465795dd9316eef0"],["posts/2158696176/index.html","443293d5c60148168efee0f496bf5221"],["posts/2171683728/index.html","0e71879dbd132d27756c293b5998a303"],["posts/2186770732/index.html","301f2573e55b92a54e482a50fbb8dbbd"],["posts/2275646954/index.html","3d779464d05864daba5901ea94790f5d"],["posts/2314414875/index.html","815950decf7ef9da85a432e8b6f5df3c"],["posts/2318173297/index.html","339aaec7e0e298e3f1fa4b1f65795fc8"],["posts/2418566449/index.html","3cc9b0201d6c328b0f2a01fedc71095c"],["posts/2436573863/index.html","446d1e41a1eb5097fb185912d9896b02"],["posts/2462008667/index.html","04281cdafa390490e9275971b39ee11b"],["posts/2463121881/index.html","0bd6a5d6998b262f3b35bc969721530d"],["posts/2527231326/index.html","298435bbbdc4250777a0791f46f4f448"],["posts/2583252123/index.html","2fc64cb0016f7a831105d75194b94522"],["posts/2613006280/index.html","f35a68218693ddb01486e8277b81e7ac"],["posts/2617501472/index.html","9508e9ed54f3b47b0e46a8e55479a4af"],["posts/2676125676/index.html","966f2b766ad056523e0ef2ccf1d95da1"],["posts/2734896333/index.html","0a4432fa18774bfb3e1bd2ee8140de53"],["posts/2752169106/index.html","a647fba4cf06f4c59acd637ee3250bd3"],["posts/2799263488/index.html","4e224961e365bd58cf9d1d72914e888d"],["posts/2805694118/index.html","f14ad9d60858b0ddfcdbad73918e9ec3"],["posts/2809571715/index.html","92e37d5f55837c0c0e6ba8a10fa6f24b"],["posts/2822230423/index.html","506d6e0a78e199c67efa713dc59e5a83"],["posts/2829333122/index.html","96fc2f9ee6cb91b8ebd188f6545f637e"],["posts/2911923212/index.html","64c0a6abae1a6ce00476aee35ddd1f3d"],["posts/2941880815/index.html","2932c8230c89ca7c9fa74154ff1818cc"],["posts/2950334112/index.html","a6cd4429136e0b5b23dddc0bcdc8bdd3"],["posts/2954591764/index.html","cc3b0d7291464474acda2490815cf323"],["posts/3019914405/index.html","fc15e3974cceb4f0a20b0812616b5435"],["posts/3032366281/index.html","6dd516c7a0c864ee8ec8092116118f49"],["posts/3040357134/index.html","d90e97a8e82c1bedd7032b22a6907f3c"],["posts/305484621/index.html","9906cac7de2dcd22e1a96506ecfe48f6"],["posts/3083474169/index.html","60845ad5ac47c090246feb9fd2a9a743"],["posts/3099575458/index.html","10e132a1eba9a5011fc142abb7144198"],["posts/3111375079/index.html","ec93e4e3a75d9f709935fd7aa10b452e"],["posts/3120185261/index.html","5c19505d0dc0a9c51658b603efa96844"],["posts/3131944018/index.html","0eee9b30a342384a89ad5326b34c4297"],["posts/316230277/index.html","a7cd4744ab33ea1d54d512ede2e2f861"],["posts/3175881014/index.html","f050069c3fbe4412c16f27b495dabe2a"],["posts/3222622531/index.html","55ab33eed43a4fd2841b8583471392dc"],["posts/3247186509/index.html","362d31866d46c248d81dd04538096648"],["posts/3269605707/index.html","9e4857d45f0c073fa670de9c202716a5"],["posts/3291578070/index.html","a1d8b6aad41d9ae2efb6546f76fc6c5f"],["posts/331752533/index.html","d9db13dc39541d9cd229eb55385a3478"],["posts/3321992673/index.html","5e56af4d1774c82958698cce2eb856bc"],["posts/335366821/index.html","d745cef740e2b435bf390706d784dc43"],["posts/3356910090/index.html","9f13c7152861d7a82cb79a01e5c98d07"],["posts/337943766/index.html","443e99f3354a1a9fd6d42041df32042d"],["posts/3417652955/index.html","b8d8c7da4b49d419f61a853d9d89f81c"],["posts/3444626340/index.html","8c23efcd5c465a7d53291bef1049e9d6"],["posts/3449402269/index.html","73342e0387a641ccd26c652716bd3721"],["posts/345410188/index.html","0757ffc49fe8c354e7d63a29af8207ec"],["posts/3461518355/index.html","e43919b05b1c12da93a773bd97e64591"],["posts/3494408209/index.html","4f8fc01874c1a2c6e38fb77894032c9f"],["posts/352037321/index.html","be128b1664f0d6b1efae8c1ad5e500f4"],["posts/3521618732/index.html","f4294f2abff0553c2f191b865083efe3"],["posts/3568552646/index.html","389848df323c25c53cdb102988a70270"],["posts/3603924376/index.html","edb226f997136d21d6c7567fdf281048"],["posts/3637847962/index.html","46cbf0daa2bb6b2adf905f8e0992e48f"],["posts/3642630198/index.html","56ac44ef5b51f98ce7a384a63298fc8e"],["posts/3653662258/index.html","ddf4b75c676145238651d3bfdf895187"],["posts/3653716295/index.html","b6bd4aa106cf0f408be6902b416ef706"],["posts/3657008967/index.html","1df8f5d4089dac6f69ecb4d4cb881c89"],["posts/3668933172/index.html","cf4b1a41a9a05f2e0e987d406ab7322c"],["posts/3677280829/index.html","064d9493d0dbc686eaf27f4f3b422b07"],["posts/3687594958/index.html","0ef3e716a0a7ae946aa6c180f639a352"],["posts/369095810/index.html","ac1dd05a84cece88f7ae5deeb277a956"],["posts/3695777215/index.html","0fbbdc3580bd1d2fab4039e0bad11be6"],["posts/3736599391/index.html","f2d58f615fe7c29525547ce89e287e9d"],["posts/3742212493/index.html","1f10d714d45ed8d6d755b91a60dd9b31"],["posts/3782208845/index.html","04824592e201069306ef0fbb990e3c49"],["posts/3789971938/index.html","0640ae4ce64deb8f368eaba5b4e14883"],["posts/380519286/index.html","d6695cb3b9cef505c129b28dc9bad0ee"],["posts/3846545990/index.html","bb118a9d6370ad3a71dd0253bac692a7"],["posts/3873710624/index.html","3ce6b175f0496d5ae0b990f2e09a02ea"],["posts/3959327595/index.html","9b8335a30bcab2e05f351dedcf420fb3"],["posts/3972610476/index.html","60d3ded4b595320de9dd77191ed6d0c1"],["posts/3995512051/index.html","cba3b97e061c8b64f274762414977190"],["posts/4088452183/index.html","284c5fc838850c67fcf704e4aa588c9e"],["posts/4116164325/index.html","a2b44a26742ae1c57fa9263349f2bc12"],["posts/4158690468/index.html","7195b4d2e6fd0d92f50dbc70bdcd153c"],["posts/4159187524/index.html","83ef52676657d802b8a01ae2d7b6f724"],["posts/4197961431/index.html","f723a1321f73c1af13ee094d4b55adaa"],["posts/4205536912/index.html","f5ab237783ef564746e0fe3b5009403e"],["posts/4236649/index.html","387bac1267e95ac5dcdb9842074c83ac"],["posts/426338252/index.html","1bdfd745832983154495c9d02fd8eeb7"],["posts/450254281/index.html","3b7306430f91a94cae0a743c440d6777"],["posts/4891372/index.html","a5180da2c85b4f7dc6e96fe97a15dd3e"],["posts/569337285/index.html","679a13a2db3e010dc97ca8597a4fa85e"],["posts/570137885/index.html","82d0bb85fbbd61dccbc54afc70a86d46"],["posts/570888918/index.html","f26d1360e05e597f88819a1e68b416d7"],["posts/582264328/index.html","9d76a2ac635e303a9bd57d3cd8eed4b4"],["posts/632291273/index.html","5dc2eff6eaa01ada2fb87811c92652df"],["posts/70687890/index.html","8106ef4fc9cdb8248ac81d1044b610e8"],["posts/719322223/index.html","4de32a2241b29ee32faa14fc611e8750"],["posts/720539850/index.html","143405bdc16bda16c16618db5f0c62b0"],["posts/786195243/index.html","d20cd163188ecc9a291bf52703e89059"],["posts/795474045/index.html","b8104e861a2abe9d49db28d732deb529"],["posts/815861661/index.html","e5627356cb6e4ca2e1b9d471f6582383"],["posts/821259985/index.html","bf8daa63778ec00a773d6763deb920b1"],["posts/828223375/index.html","3ccc15cb92c7319d6ef76f9d2f757520"],["posts/887585917/index.html","17ade5b6f6cb1023082991ef773d68bc"],["posts/888549816/index.html","fdad85971f602dc004fa9fd947792cd9"],["posts/906436376/index.html","c14fa8077b3a0436a45c6fb76143131d"],["posts/907824546/index.html","49e42d408f88561492695e60ab34bd70"],["posts/927393529/index.html","2bfa7014659a69d731d4d03511374cab"],["posts/94443781/index.html","62f6a8936f03486587721972ba173010"],["tags/2014/index.html","5b39b3a6459bea45ef7e8ca7d8ae251e"],["tags/2019/index.html","4478d18447d49395a3234d2fadf2020c"],["tags/AI/index.html","e9149076eebe31a2f35d5f87497f77b6"],["tags/AOP/index.html","898443700662808f39aa0b356fe5120f"],["tags/AR/index.html","ab250f04183af90555ffcb883a445875"],["tags/AssetBundle/index.html","b86777712fcefddd5ec21189c1adf6c4"],["tags/C/index.html","e2cae8768969f3bad4e1bf3d9258bdb7"],["tags/CDN/index.html","f8e408cd673269ae13c4b91284f477f1"],["tags/CG/index.html","cfd2a2cd229875ad2333b1573eb6742f"],["tags/CI/index.html","e7422fb9f5b0e3e5e99380b01852583f"],["tags/CORS/index.html","25dbfdfc3904c533097a520eacdbe182"],["tags/CSharp/index.html","907b8b9281f80e7d26137c8dc2d4b401"],["tags/Castle/index.html","27e88a12072428d108f5aa78fd70e745"],["tags/DBeaver/index.html","c185771ad0821443b468e3a526a19fff"],["tags/Docker/index.html","10d5c9f14962e82055e8a44408549b1c"],["tags/Dynamic-Proxy/index.html","302a65b69ab431ed25caf850e097cb55"],["tags/Dynamic-WebApi/index.html","fab1d6521ff5b2f6aa9aa144a166ee0b"],["tags/EF/index.html","53b8f487ff386b5e2b71b5038ce9968e"],["tags/ELK/index.html","b03410b10e4954c171dc3103c897fc82"],["tags/ES6/index.html","6018cf2579477743dfa821b9246b6c3b"],["tags/EasyAR/index.html","722e4c63ec8132b90fb73d261e128b1c"],["tags/Excel/index.html","70b2ab0420e31ac70d268fbcbf54cb0c"],["tags/FP/index.html","8391a8aa8a61eff9cf053740d79efe68"],["tags/Form/index.html","5694f5e77d6467bb8eed556ba344760a"],["tags/Git/index.html","76681a29dad07439055852db06d1c60b"],["tags/Github/index.html","d0b11e384ed91a33e8d741c650ba520f"],["tags/HTML5/index.html","6eb495b51b27efbb8e270c437e5070c8"],["tags/HTTP/index.html","26ced3adbe0e1e940bfc215c8b699e04"],["tags/Hangfire/index.html","c14b1199beb8022f44a8e2eb59d7fdcf"],["tags/Hexo/index.html","bfd924ab6b673e072dad2a73b7293459"],["tags/HttpClient/index.html","e552c13804d6f467e76caa23b5f55294"],["tags/Hyperlog/index.html","ba0d438206b7605910e2e5855018493a"],["tags/IDE/index.html","6d20dd846794d4b4cb26c46794ede455"],["tags/JS/index.html","6ad52f4c611a8060fd7ca0cbf5c7ef21"],["tags/JSON/index.html","a90f689d53cfacf2d207186d453300d5"],["tags/JSONP/index.html","5c5eee0aea14cd1e4b11f08424454d87"],["tags/Java/index.html","0f38f8cc7402fbeda3c3f42d0f700079"],["tags/JavaScript/index.html","7b8645020c097caeabd1ddb509a13bda"],["tags/Jexus/index.html","e50901468fcc71a2cd3df076ddf0e7f4"],["tags/Kindle/index.html","ec82e1eddd273943cf0b971183779b83"],["tags/Lambda/index.html","8bdc90c029f31cea3ab1680ea34136f4"],["tags/Linux/index.html","4612c52daf5890d1a18a9586e71dd240"],["tags/Liquid/index.html","0c56363b02c7b3cfb1e174dc0d6970c7"],["tags/Logger/index.html","3de801408594f292dc60feb67178eab2"],["tags/Love2D/index.html","8163ec3af66ade107b6c77138e62fc37"],["tags/Lua/index.html","65dff43fed1386a623ddb1cd5f60ca97"],["tags/MMD/index.html","630adcf6aa90ca4fe07a207a89402fab"],["tags/MSBuild/index.html","3bca290a2c79cf32f26783d56603d648"],["tags/MVC/index.html","6cbcfd2215f78b97f8da4497f763f405"],["tags/MVVM/index.html","1fad552ffb8d483a5eef168f241307ab"],["tags/MapReduce/index.html","2a4ce835003753eed49f738bc27fcf8f"],["tags/Markdown/index.html","2d3dc41acd6a71646327aea8781eaeb3"],["tags/Mecanim/index.html","da2454a8428f3e6d07be4d5a6138f620"],["tags/Mono/index.html","1408d9441e4ce785e4b47dc41cbd467e"],["tags/NET-Core/index.html","007657e90e74e122690a6df47cf53e4f"],["tags/NET/index.html","e711961195932a40ea18c740d486a3c8"],["tags/Nginx/index.html","1dbc42c4dab6f6e7ecda9b626b72739d"],["tags/OBJ/index.html","347764af3eec73831962706d13fa8763"],["tags/Oracle/index.html","5eb8041d20bbeb7fe6bfc24a544ed455"],["tags/PL-SQL/index.html","8fbfdf28e4179e8155cfa59cb038badc"],["tags/POCOController/index.html","756ed8a2931e1f2de207cd81e8ab034a"],["tags/PWA/index.html","41cc077ecd279263fc74167382a579f6"],["tags/Python/index.html","c0601035fe1609a49dc6940d16421d88"],["tags/RESTful/index.html","4bd9599807fb2c568a28a1f1da6efe65"],["tags/RFC/index.html","c580bda7363f00cb68b5e29d34bbc173"],["tags/RPG/index.html","083b45c040fcc5bb382d63de08da53b8"],["tags/RSETful/index.html","2da9d91797e7444fe538cacd313bb278"],["tags/React/index.html","13f22c6d78fc0034a68d454be8c90cb4"],["tags/Redis/index.html","c66ab397765acd0c1c33bf944e3406f3"],["tags/Referrer/index.html","60bcb30b86f3c8131944b7c72244b83a"],["tags/SDL/index.html","ebfdc35d6a114c09f15dc45c1749e760"],["tags/SQLite/index.html","1b86ca8c2aab083cb005a6d486cfd412"],["tags/SSE/index.html","321288d531a0ffa14cbdc83b3c32e057"],["tags/SVN/index.html","b51868e42c9d9f089a20c672f4c87157"],["tags/Script/index.html","5596fc50e7fb912b7a1418226f79f75f"],["tags/Server酱/index.html","85deb567c0e6b48da0dd8fb637558d50"],["tags/Shader/index.html","e7318abb70e03cf924009ebe7c5e4c29"],["tags/SignalR/index.html","927bd8e4165a605e098a7aea3ccf9507"],["tags/Socket/index.html","06f4b6cff7ce366e0407390dd5b82e81"],["tags/Sonar/index.html","75217488e47fde0d8b1ae4cd38b37365"],["tags/SourceTree/index.html","44421726fe1b2c2425d037ce562d26ec"],["tags/Sublime/index.html","48e64fd77471fad277cd587c292eb477"],["tags/Swagger/index.html","cadc6acb1260ad0f6d91d97c95f25dd3"],["tags/Trace/index.html","363ecebb0efe0cecd7409c519b822c01"],["tags/Travis/index.html","b69be604671cd2005812aa56dda344a4"],["tags/Unity/index.html","432e5d3386f80a47910d7154d5424185"],["tags/Unity3D/index.html","039773c0c3adea9909acb44434ed51d9"],["tags/Unity3D/pages/2/index.html","f85b8aa253d66d6bfcca01faa2789605"],["tags/Unity3D/pages/3/index.html","2a14f7c5ac962547933123f2c9ec3ed9"],["tags/VSCode/index.html","6869cfcf8bbf62cda39478db6b4afc85"],["tags/Valine/index.html","55a70a889d0a84d8eaa3036ca07a5b82"],["tags/Visual-Studio/index.html","1f730b6cf3b239fcfbe44b3ebd28a363"],["tags/Vue/index.html","0c6473807a1e7d4f4ca23711dd24b202"],["tags/WSL/index.html","6ecf47834a441c5109b6f8597f3f5398"],["tags/Web-API/index.html","a4eeca8c401369a01c4bf21446e73bad"],["tags/Web/index.html","2e8febadf5582a2c37844e2ab283c36e"],["tags/WebApi/index.html","be02ce851287c932ee622f2f81128a6c"],["tags/WebSocket/index.html","b68f4005006e3c0b5b3ea45d0625f417"],["tags/Wechat/index.html","068bbba9ebb4296f57c5b624828148a2"],["tags/Windows/index.html","b68a0977b412323eeb3aa443e0599e6f"],["tags/disunity/index.html","c6ccfff772c5987547154fa2459850b5"],["tags/index.html","65f35f7f444c3b338ee5ac4480427dce"],["tags/matplotlib/index.html","157d5d9bd3ab9f3c56203c588b815b18"],["tags/njsDelivr/index.html","1349892843b8599ea0faa3ccd6119d60"],["tags/uGUI/index.html","c4c11d2eb171c8fa549e90f177c01c3d"],["tags/zTree/index.html","0e2d8ad0624408680dfecbcfce3faa8a"],["tags/一出好戏/index.html","5335e883d9ce951b61322cebdc098cb7"],["tags/七牛/index.html","64a2cd22cb9d9e1a958b37140be1bdec"],["tags/主从复制/index.html","144a571c4d16b3275106d7ea7ea532f5"],["tags/事件/index.html","68f3b39dee48a806ba58214038f45caa"],["tags/二维码/index.html","bea08dd3c085a3920972858c124281e4"],["tags/云音乐/index.html","b8b502bf6e0862c9aab290a91fbaa02e"],["tags/互联网/index.html","60615f3d58e1a049a11032d807125658"],["tags/亲情/index.html","8a4db18971ea2e7f2a3f5dbb9ce3190e"],["tags/人文/index.html","d2f0aa5c7d36883f2fbc94766a74ab21"],["tags/人生/index.html","465dacda9c661daa5110096969555169"],["tags/仙剑奇侠传/index.html","d5f5c7baec2ccc3588c5c492ff3257ac"],["tags/价值/index.html","6e015de0919340cd942085bb07710e6c"],["tags/优化/index.html","5ce9890d1980eb8e9c3a3ddfb7a9b73c"],["tags/全智贤/index.html","f2c692a6e8871f47ab6cdbb3ba70fabc"],["tags/公众号/index.html","c2533a9979c080cf197e53bb3281355f"],["tags/关卡系统/index.html","f126834687645a515f16cfba4a73d81b"],["tags/函数式编程/index.html","e2f7078603750b363d0cf35c1205a5ce"],["tags/别离/index.html","9a312ea79d876a90fe21e8165bbda29c"],["tags/前任/index.html","f7ad557c84ca4cbfd167801c8fa44c76"],["tags/前端/index.html","f2edc0aae1fb885addda12b7a55048b3"],["tags/剑指Offer/index.html","7eb6d0dbfd6c02063a5377be917299f6"],["tags/加密/index.html","aa9ebcfeb6a04bd2c8bba574b6c0228e"],["tags/动态代理/index.html","6ffcd2d71ac729bc9189cd89bb168129"],["tags/动态加载/index.html","175a5f7cd6a8eb97b9a88fb8cfb0f496"],["tags/动画/index.html","b27392b5bd7094ac642d2e6126901fe8"],["tags/单位/index.html","1a3afbb1fc21c21cf9b3372a2ff38c64"],["tags/单机游戏/index.html","0d1b26ec23eeca71a47178e19b7aea1e"],["tags/印度/index.html","43627eb3f405bcdb8a3ced9f36a87ea6"],["tags/历史/index.html","3735e62b36a338205b113312176e2520"],["tags/反编译/index.html","b89ec3cdeac341ab07e6cb999b2ceacd"],["tags/同步/index.html","d32438139a7e8bed0ef31e37107ee933"],["tags/后端/index.html","05497033e9154253f5ed09a2d2d7456f"],["tags/命令/index.html","a9e16cdbc1d0a382326532546204266d"],["tags/和平/index.html","9ba8fd05f312e95a76ba330e5302b7ca"],["tags/响应式/index.html","d671bb6671c4312b6690d50a878bf188"],["tags/哲学/index.html","0af0dafcc07a72184bf17a5b0e4c16df"],["tags/回家/index.html","f5922e873a7a44fad7ef1ec97ff5ddba"],["tags/回忆/index.html","d32e869ece5f4e1cb974afe429d2e2bc"],["tags/回顾/index.html","82bfc50cbd952e6838f8bc17e18c808b"],["tags/回首/index.html","4311d3ec1d124386b80ee79b71bfb2b6"],["tags/图床/index.html","613d96b49236d699f60c9892d3a3ab87"],["tags/图形/index.html","ed5e2bf8a45da36658d4d250c7f65610"],["tags/地图/index.html","f57a8fc122b25acb2d2e9e2aff611351"],["tags/塔防/index.html","50a3f3e8a14fcfd4415c78d78f654a15"],["tags/增强现实/index.html","c7aa2e82217d950f87b0de9baf9e44b4"],["tags/壁纸/index.html","47bd5cb298c7c29ef05e5bcc391064c2"],["tags/夏目漱石/index.html","8f47134c73b6e8014f357920b1023a4f"],["tags/多线程/index.html","5594fe981be213d7add7ccc90bc2ac49"],["tags/大护法/index.html","7b4a1d98ae07a57c63a623e276a02a06"],["tags/委托/index.html","a8e129e2a5fe6efa7ec362b2fe2db5f6"],["tags/孤独/index.html","14eb7584d647c3eecb1a4805cfb0deef"],["tags/展望/index.html","e11094b8611652aaad162afc944371d2"],["tags/工作/index.html","ece99d0b93526ab3b51e50f6187962cc"],["tags/平凡/index.html","de498abffc96f67945799b08aeee8ee2"],["tags/年华/index.html","86fade07b81e3b025a44b5964bff77c6"],["tags/年度/index.html","06f74a445137a96b471c7f36a419bd87"],["tags/开源/index.html","afb8e0ca69f5d1babe320fbdbf690100"],["tags/异常/index.html","36957e3f6e302c4fb748782cce3ad8e1"],["tags/异步/index.html","b9b3c9bd90ba13ca595383437543d5bf"],["tags/引擎/index.html","04e5d73414ea0239bd2cf1590cbf548a"],["tags/影评/index.html","66496cc8081044ee38def7a2abc2123a"],["tags/微信/index.html","040ff76f7a2b746b17be4588d3eaaa74"],["tags/微博/index.html","008c93a37e452e250d0147a704a42560"],["tags/心情/index.html","6df5706608c2eb300e4d0a008ad73bde"],["tags/思维/index.html","bf4c6a278c9cbf30a0d4f3925fae108d"],["tags/总结/index.html","1c9344f8b9f6c29447a9b4f4d890e943"],["tags/想法/index.html","1b622d283124f6f667150ceec273695a"],["tags/感悟/index.html","8e48eca9544e162a0a096cb03e694b08"],["tags/成长/index.html","eddf52f2a5b22422a21e9a9fddf4c821"],["tags/我是猫/index.html","99d47b999ed4a12564e88cbe121c93fe"],["tags/扩展/index.html","b494e2abe4bcbd1d3ef8be7b01da26d6"],["tags/扩展方法/index.html","25a2e38ac1ac506347b9953cbef94859"],["tags/技术/index.html","874f89ef20bef2559ee81cb5a889d640"],["tags/拖拽/index.html","12a88320f04b4a3b6eeeff47079487fd"],["tags/插件/index.html","17e2ee40d79182e0d3769ff8da98309e"],["tags/插件化/index.html","65bb87a16f8c1d21c632fa812e76b4ff"],["tags/数字/index.html","40c447251d78d6e0744cf290ce092f76"],["tags/数学/index.html","ab8459a96f5718512ddf2801bceadeac"],["tags/数据/index.html","3fae265f6c160cbeeb7110be4b591467"],["tags/数据交换/index.html","6e75ea7c18c637114a36e5629c10a4d0"],["tags/数据库/index.html","91ed758f9a35f77cd6081286bdb57d19"],["tags/文本分类/index.html","cb42d243390e81de094bcadd3e2d1867"],["tags/无问西东/index.html","3dde6412ff590f64d63cea5afcc58a39"],["tags/日剧/index.html","eea956b93585161cda1ed53be223cfd5"],["tags/日志/index.html","604c9e71fe43cd703088bb36d9c868cb"],["tags/日本文学/index.html","ff47adc276e0a5debe3b5e0cd11e630f"],["tags/时区/index.html","623298e6423e7c8df344296857661001"],["tags/时间/index.html","d6f3ad3473d6b52f0e78a73aae8ce6a9"],["tags/服务器/index.html","cf1a626952b4fa04ad81b8470c298595"],["tags/朝圣/index.html","18a8d5bdaf991757c032de8e3c790bd8"],["tags/朴素贝叶斯/index.html","94d5f45d7a026448811e1a20b47b065f"],["tags/架构/index.html","21fdce6382f22f1737dedcaf6f017148"],["tags/标注/index.html","c32add596e0b5e31b2009cca64dde1d7"],["tags/校验/index.html","9419aab581584c6ce77d7b82d3c7f084"],["tags/格式/index.html","c4c5164410582407b772e5bad87f60f7"],["tags/格式化/index.html","fb15dcfa1cb8c1c8ee461318245b995c"],["tags/桌面/index.html","772d4d64795c943661e0519dfa44af79"],["tags/梦想/index.html","53a0e5435db108cb482f77f69f5871b9"],["tags/概率/index.html","0adf042ffd91e49dc9726e27b0fe1579"],["tags/模板/index.html","a8a89d27d9d46f8ae0f6a76336bd480f"],["tags/模板引擎/index.html","170aa825a38b9c28e4498de99286ddac"],["tags/毕业/index.html","b1acc9354ddaa477c65a86c26ac5cf59"],["tags/毕业季/index.html","ccd2faebc53f53da03ffcd646c512be7"],["tags/消息/index.html","4e8fa9f86e465d0ce3bb3a9025b4d1c9"],["tags/游戏/index.html","a62b50c82ef9d439035d9da33d2a899f"],["tags/游戏/pages/2/index.html","32385a2f7c56f22af3e4034d14e546c5"],["tags/游戏开发/index.html","732f355ae36719fc665d23cf49dd0dbd"],["tags/游戏引擎/index.html","8acfa5e690c595896315b363efa98b3b"],["tags/爱情/index.html","217b0b4785390b548cd21486b0b50905"],["tags/版本控制/index.html","6d23ed17a69d696156b183797634e4a3"],["tags/版权/index.html","aac196425116a855410241865c0b3939"],["tags/特性/index.html","a993eccfc1d231de01e5368c49920b11"],["tags/状态/index.html","8090295956f3607245d52604d47065e6"],["tags/现实/index.html","8a410eb57333fd7382a766fee445481c"],["tags/生活/index.html","2ad356ec604c0833c6ac5bb7afefeca1"],["tags/电影/index.html","cdf50b26195604e0c5fbbd42a7f487a8"],["tags/画家/index.html","c0c72d7d8b41ee6e1fdff98f38e45521"],["tags/知识共享/index.html","adc70e0efa0440c7c08f28836e761415"],["tags/矫情/index.html","dfb17d4e8b973ea8d8930766f586d7d4"],["tags/程序员/index.html","5aa82da017aa8206c2a55e3f4e308131"],["tags/穹之扉/index.html","5f4b5a8a4f836aba56e218b35eb1f2df"],["tags/穿搭/index.html","94b274c7d3f4b33a11de036e2138f784"],["tags/童话/index.html","2a83ce1294881a0e386d991a6380bc5e"],["tags/笔记/index.html","72eced5470024c99047717770bff9b4b"],["tags/算法/index.html","3a50fe5a16a37013d0cbc973bb97004e"],["tags/米花之味/index.html","8ab3796466ff495919d06c52eb4d3508"],["tags/缓存/index.html","07b2e98496c98f860ac7520f8ec0fc08"],["tags/编程/index.html","ab5d999f958a85a70f0a74201c837390"],["tags/编译/index.html","f0a08b538ff8d56a5db533e631cc5a6d"],["tags/编辑器/index.html","9ae2d317eb3262d0031bf58cd5732f35"],["tags/网易/index.html","79c0f2d5b07c5c941c2626711fed929c"],["tags/脚本/index.html","8b2f77d8d3693161c83c789e722e4a04"],["tags/脚本语言/index.html","997073ef4f5539102949b5c7f1f00c15"],["tags/虚拟摇杆/index.html","dbcee74b9dc051e7b92ca03714d409f9"],["tags/蛋炒饭/index.html","3c7b9096d86d62632909115af2bf994d"],["tags/表单/index.html","cc47fa230ebf6c8676a5ac49e1f536b6"],["tags/装饰器/index.html","a1f9a396cf96208e97e01d1962ca0b95"],["tags/西安/index.html","50ff62f4f6b751baa0322dc7fdadf41c"],["tags/计算机图形/index.html","9ed2b4a0b84815565a28083f39a40f5d"],["tags/设计/index.html","44f11174cec8a16e5a05ab04507dcc45"],["tags/设计模式/index.html","a395d37d98a20a56a5e768041f410a73"],["tags/访问量/index.html","313d60d564673a51736c811eddeb6f8b"],["tags/评论/index.html","3dc99efed7b170863232d00233ef21dd"],["tags/词云/index.html","02fe3f7dbe43d84a7672315167fe0dce"],["tags/诗人/index.html","3f2a383a3575a0c73c236b85c147e79a"],["tags/语法/index.html","5441acab5affa1d03ecebd4343728ca5"],["tags/请记住我/index.html","8fcb9bde1889908f04502e753455d4ba"],["tags/读书/index.html","65ff8aa4be7bfcbea0253a87a047f44c"],["tags/读写分离/index.html","64a791aab88f2d94b2681fbd2cb814fb"],["tags/调试/index.html","b8fcb656641d6cecead1d218a8cf049d"],["tags/贝塞尔曲线/index.html","2d6e4bd49e48d87238303136787d2f46"],["tags/贪吃蛇/index.html","d6635a6d523684a5f9e42a82d9a72b14"],["tags/资源提取/index.html","cf90cfb9655c5f912386b4122205441a"],["tags/跨域/index.html","3c8c93be522cdf0330f84b715125cd9d"],["tags/跨平台/index.html","810c0a89499b1fe3caaffa2d79f5620d"],["tags/转盘/index.html","c3b2d67ed3332b04dee8c97abf811f46"],["tags/迁移/index.html","45e05bd0cd965291143628fb33a70ef1"],["tags/通信/index.html","939ad4d59d381f5de8b156b00ea456b2"],["tags/邪不压正/index.html","cff61b3e253be53217c21cb8adcae956"],["tags/部署/index.html","d124749803cfbda61b813b316ec4deda"],["tags/配载/index.html","42c28dda0d399f02f6c4c980351d58ca"],["tags/重试/index.html","ecec4ae79d0112bbb035b0bbfa152f74"],["tags/长安/index.html","a308f7713ce388cacf52adbfdcda06fd"],["tags/长安十二时辰/index.html","32b77f5ad903829ee0a47847d2341063"],["tags/阅读/index.html","ab6ac7dfa7d2ef29fb658fa7cf4ce787"],["tags/阿里/index.html","c214ca751f4be72848098d8f29f4bdd5"],["tags/随笔/index.html","b7a4102c50775eda06904dd42338d3c3"],["tags/霍金/index.html","387fbe347c35b8fb4248e6cf2aa3e58d"],["tags/青春/index.html","6b83ee41ec2d35ec3889cdc5159783cb"],["tags/面试/index.html","b11dff7d1adf8d5dc8ad4f34f074f780"],["tags/韩寒/index.html","dd7f3bd341dec49b76c0a7e4bd9f1895"],["tags/马尔克斯/index.html","a61609e19ab19dcfe34dec1bf84952b9"],["tags/验证/index.html","9714b5a71266d4191f169b6c830d93ce"],["tags/黑客/index.html","6c4197ea455366857c6dec57437c1ddf"],["wiki/index.html","ce8ff59dc5ce74144f73577304a1e378"],["works/index.html","76e5a82a39334b608b38f02d3555a4ec"]];
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







