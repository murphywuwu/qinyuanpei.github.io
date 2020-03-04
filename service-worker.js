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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","071a21802c2a72a64f4cb729ffaafdb5"],["archives/2014/12/index.html","c9e79dfebc43b515aba77f075cf1047f"],["archives/2014/index.html","7b57b5ed0656ea4c19db3ee562cee334"],["archives/2015/01/index.html","48c4026f78d7fdf98fdd2e1d0823603a"],["archives/2015/02/index.html","2517149e18ff688e0320e467ae78e24c"],["archives/2015/03/index.html","6119a49eabb5a95f3b27c90f11ed23fe"],["archives/2015/04/index.html","6522016d421f4bd6a7428befdad096fc"],["archives/2015/05/index.html","f6a877c19cb73384cd57ee1cf043ca88"],["archives/2015/06/index.html","8767d9b1d8e568d0906b7d0020d9e6ca"],["archives/2015/07/index.html","f7ea5eb6d98fc1aaa6fb634090091d74"],["archives/2015/08/index.html","295946732444606d989d4e7fccc3b168"],["archives/2015/09/index.html","92b05b912644578eac15b5a7b4440d80"],["archives/2015/10/index.html","7d0e3fad0c20f20eb69bd43139bd3775"],["archives/2015/11/index.html","2bd14482d38ebde11ecb9fbba41e9c48"],["archives/2015/12/index.html","e41775ba2ebba7414e6e28e62032bb9e"],["archives/2015/index.html","5770447c43dc7adfdc51f20ff91b1cbf"],["archives/2015/pages/2/index.html","773413da4c5e36cc7212b14d8497633d"],["archives/2015/pages/3/index.html","6e6e3c4b021ee35a892119d74b65cb9d"],["archives/2015/pages/4/index.html","5c7a54b5b0b5795db60701b48d986469"],["archives/2015/pages/5/index.html","02e0bbd60ba429a4339a330d499b7100"],["archives/2015/pages/6/index.html","1c0d6e1cc834eb83c62402d1aac21807"],["archives/2016/01/index.html","577c07018265ad430650a0eb0a65ad0a"],["archives/2016/03/index.html","3c7f948c39762fca01535819651ce682"],["archives/2016/05/index.html","ce2fc9a3221250a13be64212f4b49177"],["archives/2016/06/index.html","0eeeedc38d38ad2df415f42b67e13b8f"],["archives/2016/07/index.html","04f107ca33ccd30321fe53cce7b486f9"],["archives/2016/09/index.html","9c596d084f3af3497f99f21251bfa428"],["archives/2016/10/index.html","9ad10bae76684ae4daa1b7f6f053e5b0"],["archives/2016/11/index.html","fcb8df80791715363f3f5bdcbf8377d8"],["archives/2016/index.html","ede5e1bacff067f0d408f860bdea9916"],["archives/2016/pages/2/index.html","8289446e0f8b87bafffab3ca3a28b618"],["archives/2016/pages/3/index.html","0cf1282067b5ca64cf1c675d419adbba"],["archives/2017/02/index.html","b5539b6c5cca4daf28012b5a4f340e24"],["archives/2017/03/index.html","556fbb2a6f081f7a8705f9d68fc45227"],["archives/2017/04/index.html","3fc657eb92525020f78e336647f1dec6"],["archives/2017/05/index.html","e76d65cd99c2a5d2ed84d49e8469b2ab"],["archives/2017/07/index.html","7385d0bef3c5c306ab38b09b2c7758ee"],["archives/2017/08/index.html","012cc466a60b07623eabf95f3818f407"],["archives/2017/09/index.html","51fa18d37d67bbb7f8e55d0ce9d8a2dc"],["archives/2017/10/index.html","ec35d8cea2856025ebd5101a769fab99"],["archives/2017/11/index.html","eef297e72eb027414ecb63a3cd4147df"],["archives/2017/12/index.html","98ce55f1944975c217d7b6857b180e59"],["archives/2017/index.html","f94e055810ea76f24d129b5d5a510345"],["archives/2017/pages/2/index.html","862a0d147118f524c62e1ccb3be9be20"],["archives/2018/01/index.html","e322c93bcefb6db92bd247119a3e5e97"],["archives/2018/02/index.html","9512bb5995c6891a86e326ac605000b4"],["archives/2018/03/index.html","58ac2a2e121c2c9cec75ecedada1a37e"],["archives/2018/04/index.html","37a85acda17a8e87e135c7325e4088c2"],["archives/2018/05/index.html","aed62805389d0942529b37d3f3d54d07"],["archives/2018/06/index.html","108f8fbc85aa5ba262c7a57aab69cd3f"],["archives/2018/07/index.html","e13060e827cf25995da318c267f63abe"],["archives/2018/08/index.html","633df9d1889cbac57dfda53812e41e74"],["archives/2018/09/index.html","291beb660868a61c27a7b88f4d49b8f3"],["archives/2018/10/index.html","755cab853fb5be5365df378aa8b2ed6a"],["archives/2018/index.html","984871c0f451db9d6b4a13a865b0b7c4"],["archives/2018/pages/2/index.html","6a22f6c363eb027c73dff2d8d80a96b2"],["archives/2018/pages/3/index.html","23327dfb971d513ade6702567bb2232c"],["archives/2018/pages/4/index.html","aebf6dd5815c18b864fd7b6c9921984d"],["archives/2019/01/index.html","c4e6a10960fba6fe61b208e7ac23ee19"],["archives/2019/02/index.html","a49bcbb9a801feb0101e198b9e2500c0"],["archives/2019/03/index.html","24477652be7427425b9e21c68800234b"],["archives/2019/04/index.html","52708d5056ee1e1e7424c549394e4370"],["archives/2019/05/index.html","23d2ae4343f7343c6af8592dd43c2ee7"],["archives/2019/06/index.html","8b17ce2327ccd6e39b836d5ef6add8f3"],["archives/2019/07/index.html","ceba6e314a711b102de69e8e63b8f6a7"],["archives/2019/08/index.html","e614cf1b7360442ecfce2484e1fd7caf"],["archives/2019/09/index.html","0e4e717ecd342078806b389ee5defbcd"],["archives/2019/10/index.html","da6370133ee01e01ae97879594fa1ac9"],["archives/2019/11/index.html","3a485bc4de46d3cf4c72a6a64d254aa1"],["archives/2019/12/index.html","bf2fe0854531e3a5ba71026bc53c2ae2"],["archives/2019/index.html","0b574e66fbf9a32af680b06984fce09f"],["archives/2019/pages/2/index.html","cb3c94c908aa44751df3948f00b91c54"],["archives/2019/pages/3/index.html","1ceb06890e3c691c8a7ff06a57e5778f"],["archives/2020/01/index.html","9e5075e13ea7eb4c56a23dc1831b8af2"],["archives/2020/02/index.html","3ad92b014fb20c201b83f551e1dd9e0f"],["archives/2020/index.html","b5a20e94a23f88d5ecf533160982c442"],["archives/index.html","f6ac34bb78b432723ea977a04a95f5c1"],["archives/pages/10/index.html","2a32388085b5865258bee640c3fe047f"],["archives/pages/11/index.html","293b865df4ec89928f6fb1741a0aaf9e"],["archives/pages/12/index.html","4794d15ce47e7d3755a88549c1648033"],["archives/pages/13/index.html","12d4a9cf4010481d57f552446e986e6c"],["archives/pages/14/index.html","871eb49cd16fdc2912bf1521fa8c5f2d"],["archives/pages/15/index.html","bcc26c45a2c45a7b6e7259eec04636da"],["archives/pages/16/index.html","a7fa3c4fbbda77488886c5ac05b52ccc"],["archives/pages/2/index.html","22214641b9836cb2cdde58b8cba76616"],["archives/pages/3/index.html","d5d550603d3d727c7722fd82cd74e53b"],["archives/pages/4/index.html","e38b2244b2590bdee12ac8a6b8b8d9d6"],["archives/pages/5/index.html","8647e9f73c619e85b2fad2bb52bc9c3e"],["archives/pages/6/index.html","c1c376d6f71d8a9e49f0088fd353148c"],["archives/pages/7/index.html","b3abba138cd5492b3be633317fc9e3a0"],["archives/pages/8/index.html","0710aa7b647455f86c0062666d47a2c5"],["archives/pages/9/index.html","f36873c0d53bd90879e48df60a5804c6"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","c5675c06dd6650a30b1e917a14735c23"],["categories/Unity3D/index.html","0bf406925431eeb3a4da1bdafb8dfa7b"],["categories/Unity3D/pages/2/index.html","424ca948260d28e1d375c5564b10cfeb"],["categories/index.html","67236ab1b1909c6f295f7b9ff03a41b1"],["categories/人工智能/index.html","8007db5447036f6a69873176b0ff8a27"],["categories/前端开发/index.html","0295dc2c42e4b84336788d239fc6d7b5"],["categories/单机游戏/index.html","0da48971447c6618cacb90ff842abb6a"],["categories/开发工具/index.html","3587d1dccc5bf6651a1f3bf5eb281891"],["categories/数据分析/index.html","9bcdd55ce4301ce181b627d88c09cffc"],["categories/数据存储/index.html","efab590a86be18c66cae08b57401b212"],["categories/游戏开发/index.html","ec6ab2b25c7fcbfbfa19f400ea2e515f"],["categories/游戏开发/pages/2/index.html","533fffe29846a8a52453e83a0e4922ee"],["categories/游戏引擎/index.html","7b82c64401cb7d2df6d75809cadc74cb"],["categories/独立博客/index.html","6dab566f3ccaa3984f20850eeef2e293"],["categories/生活感悟/index.html","dca1f53c08829c98b27e5b62df51f25f"],["categories/生活感悟/pages/2/index.html","90187a033d856d3e9482c81c2834d753"],["categories/生活感悟/pages/3/index.html","4e584f59e5b205851d2c0351cbf200a1"],["categories/编程语言/index.html","69694b80b21c952eccacffc005c0c08a"],["categories/编程语言/pages/2/index.html","9ae842b2795d04ababa2639cd943a627"],["categories/编程语言/pages/3/index.html","0f327b01219d7220868edf84d2cdee63"],["categories/编程语言/pages/4/index.html","ec04e5a8d1b0b6a49aff24cb727f7da2"],["categories/编程语言/pages/5/index.html","d42ac97069d6f899ba19d15bcbe457d6"],["categories/读书笔记/index.html","4deeac908c8a958b359a65d48da23c95"],["categories/读书笔记/pages/2/index.html","3fe610825178d11813e396c6788f5b8d"],["friends/index.html","54761a95ae6969967b7e6d47295e24b3"],["index.html","661ceb14bf30a5a77cf5ce684ce82b55"],["movies/index.html","bdded9b81224715024ba3a4d52390ea0"],["musics/index.html","2a4f50efe644ee6682bae56dadafaac3"],["pages/10/index.html","03c80be34ad33dbf5c2ef6185bf608ff"],["pages/11/index.html","f1fd4200f6769bc8595a139d385f07de"],["pages/12/index.html","cd34c91de7f51073773d59e9fb205c64"],["pages/13/index.html","807d571b82eb9d6a95d8a28cdf22d51f"],["pages/14/index.html","dcc0636932cfd8be8d76b464f5fb561b"],["pages/15/index.html","50953bbcbfdd2f38c287d45d48c59994"],["pages/16/index.html","dc0a89ce8fb575a0f137bcf3562efdbb"],["pages/2/index.html","3949549ca38ce376a072c0ca807a429a"],["pages/3/index.html","d3a35e9fff254aacf66eb0e6e2675471"],["pages/4/index.html","a9e747c74ee96609531ab164a2fc058c"],["pages/5/index.html","b5ba8db0a6cdac51e28268aee39a836a"],["pages/6/index.html","4f2ee12c67223ebb2f4ca4a88e314604"],["pages/7/index.html","f554e3ab1abeebc0ebf68ade61bc9718"],["pages/8/index.html","3aaec25e10c2649286e54cb79cef72b4"],["pages/9/index.html","be386af2ee75d69ab82197c8a41ffeb1"],["posts/1059499448/index.html","bb618f563dc9db61ec9e1260a0b45b51"],["posts/1071063696/index.html","c35470dd79740f837a39faff6cfb94c5"],["posts/1082185388/index.html","90916f0b714c73fa55325aa4d9d6b5af"],["posts/1099762326/index.html","33bba5d6ace82c438af90f9ac5f32e98"],["posts/1113828794/index.html","581567de2a027eea1f26c413013d1e1d"],["posts/1118169753/index.html","685178937e8dfa8fb7402f6d62fa787f"],["posts/1122710277/index.html","d3a6382a2d7ac0ac61ffb02684d4539e"],["posts/1124152964/index.html","667000b1525244f1e109fce1c228da9a"],["posts/1127467740/index.html","09f2f93fc6955b1b8f3bcbc97be02c24"],["posts/1150071886/index.html","d016bc44d9808af3dac1014b1a0b21c7"],["posts/1150143610/index.html","d5dad403df9d414b40e19e205fc45de8"],["posts/1152813120/index.html","4f8a4734694c3d1905a809b8e2cd8891"],["posts/115524443/index.html","ccf445e8d9c449fe6090a4c0aa266be8"],["posts/1156673678/index.html","158669e22f05f59e539a8a5ca6a8b7d1"],["posts/1166840790/index.html","00a66f5da16d678ac78684c452c1ad38"],["posts/116795088/index.html","eab76e6d7d1f86403219daa4aa6c4fc2"],["posts/1176959868/index.html","b0544f1db2d9d3c41d0d27cb81439d98"],["posts/1190622881/index.html","94963c5978569e27c4a513c497afb2f8"],["posts/123663202/index.html","a15a155edcb041bcd7551e826318920d"],["posts/124807650/index.html","b32f2a7365fd35656fd4044e68562cf5"],["posts/1254783039/index.html","e241e0e3cf0e8bf0cc21112fdd3a9ae4"],["posts/1320325685/index.html","eeaf8973f2fdcee1b703156f636aa316"],["posts/1329254441/index.html","c9d1786d5b17b4f02df1882d6eaaea0f"],["posts/1357715684/index.html","a204f6f7ac564a72e47d5b788ed6937c"],["posts/1358971951/index.html","f04a2b71b1e54a6142a2348645147f5e"],["posts/1386017461/index.html","5e10ac449b14bb7d827c7dd3f4b45a5a"],["posts/1394521917/index.html","e355e5d5120e809b35f43728153b1137"],["posts/1397717193/index.html","fc6a9f836e425fa62bae2b01eb564f0c"],["posts/1417719502/index.html","eaef8c7f74b43f778e93b68d0e1c9698"],["posts/1424645834/index.html","5d523a2a986fcd2bcb66fd3f1d621f67"],["posts/1444577573/index.html","7bc78f19c65ed5b009bf1da506e4e7bb"],["posts/1467630055/index.html","23814dfb63f080774abc4c681e40ce44"],["posts/1478979553/index.html","213c2c3f5604e054218134b20487167d"],["posts/1540537013/index.html","93131005b1da26e18159bea8c4d040ac"],["posts/166983157/index.html","d482a8b5794ebbe7770e22630c81e02e"],["posts/1670305415/index.html","ad13a3fb986977d3c5c29076ffbfec54"],["posts/1684318907/index.html","2c0aed74476f169627f22a4789c3f14a"],["posts/169430744/index.html","1d508f167b8ef61ee7ab96f6e8216fcf"],["posts/1700650235/index.html","1a2629b77dd23e564a590898e5a21c05"],["posts/172426938/index.html","4391bdee954f3fa8521b72e482153ce4"],["posts/1836680899/index.html","867d9d6744b2eb0aebc9e20d763d34bf"],["posts/183718218/index.html","e0c4f46ef342efec1906cede41fe39c9"],["posts/187480982/index.html","76157bf4c9eee407e4dd15f18e3b1fa7"],["posts/1930050594/index.html","8ae9afa4ff75fb0f4b882c0fa4540d2f"],["posts/1933583281/index.html","514568ab0af2a56a7d5067b48ed30b33"],["posts/1940333895/index.html","e985d25df3b7765665f23ded8bcdf073"],["posts/1960676615/index.html","afa0467b2fc01d9e8826121998e06913"],["posts/1983298072/index.html","5bd4ae1b489b51be937d63588e412d49"],["posts/1989654282/index.html","a2cde75277aee045d49380717dee62aa"],["posts/2015300310/index.html","46f4c0a70d8a755168b810b47b4e6a75"],["posts/2038378679/index.html","2eb13a02676714b404b3c9f070afbef6"],["posts/2041685704/index.html","16ac4d0d9510f207880333995f7ff12f"],["posts/21112647/index.html","a09c1577e0ceb58dda20039be603d3d8"],["posts/2158696176/index.html","86917a9d8d78cbeee46c3a1300611fba"],["posts/2171683728/index.html","fcafb5a0c48e258b90b6048dbaef5d27"],["posts/2186770732/index.html","0cd42c0a740342c090e13441a5bc2964"],["posts/2275646954/index.html","6eb6d01c5f727e1be2d3251ff71bafc5"],["posts/2314414875/index.html","5b6002cb989e92e15493d4b0cdb8e316"],["posts/2318173297/index.html","230dab622d0c15570b34e50535be4fbb"],["posts/2418566449/index.html","62c6cf2d3747b08815fc29962b1ea372"],["posts/2436573863/index.html","bc424db11262d961917ef286ae121540"],["posts/2462008667/index.html","62cfe6d605b9e0caa9596ad4c9c444c0"],["posts/2463121881/index.html","c166607a4530a787982cc317377a2f68"],["posts/2527231326/index.html","fb4ce15359132d59e3b9b8943afd1a84"],["posts/2583252123/index.html","8c15de27bf62db1bce8e159b504592e7"],["posts/2613006280/index.html","bdda1e0c65b18601fb73b5006a9291e5"],["posts/2617501472/index.html","8d31ea4a03efa77858fff879715b6ccf"],["posts/2676125676/index.html","8156a4443f6d078fc034b5da318e85a7"],["posts/2734896333/index.html","02aa68538dd4ed17a75ff28dbb1ef8fc"],["posts/2752169106/index.html","5aee0b2d58c8e5766dcdd539c6f6fe5b"],["posts/2799263488/index.html","9a7351a5e9e9ec22c0c66993aa78d323"],["posts/2805694118/index.html","97a9974c7dcbd813243236a165db1471"],["posts/2809571715/index.html","6165ba2a9ec460a9c07e94f7511dde9c"],["posts/2822230423/index.html","733e52dbe19ce3ff1930f074ed929bc3"],["posts/2829333122/index.html","765e87054b473735878834c4ae17e6d3"],["posts/2911923212/index.html","db1458debae6b1e977049a5e4ee25ac3"],["posts/2941880815/index.html","40062b2acb4af6acd90ac64424afec0d"],["posts/2950334112/index.html","2a87a60b8e25855c7398f2413335ed3b"],["posts/2954591764/index.html","6df1ac2a68badfa34ff64380b80c8703"],["posts/3019914405/index.html","329d0cc03cb6905454ef1f6320988100"],["posts/3032366281/index.html","1e035ea0d48b2b65ec7d420d57bb68e0"],["posts/3040357134/index.html","bb767227a714647ca0cb865cbaa47454"],["posts/305484621/index.html","2ee59db65ee1e7e3ca4c5877e98d2093"],["posts/3083474169/index.html","42679dfbf757ae987c8dbaa7951c2264"],["posts/3099575458/index.html","66019ad62fa4001d44d6d9b69b3f1329"],["posts/3111375079/index.html","95588f6ba3038680ab37b8016b418695"],["posts/3120185261/index.html","db3b67c5192931629bf3c0f5f568b7e5"],["posts/3131944018/index.html","2877a95e3ffebe908a210ca2d21fd124"],["posts/316230277/index.html","86464f74a5ce9bc02a146ef7cbf994a9"],["posts/3175881014/index.html","f1f890dbd621a5b0f09dc6eac1051dc7"],["posts/3222622531/index.html","ced48f27b2418c428b6c736dfd7d4f26"],["posts/3247186509/index.html","e5ea4f50dd0d0981b8a347eda7e68497"],["posts/3269605707/index.html","33bcee5562162b213f3b1c0769420493"],["posts/3291578070/index.html","84f22371e4f043e7af96cbaf5f7c1931"],["posts/331752533/index.html","6845ad5e37611a919d8bfe95779738f7"],["posts/3321992673/index.html","224284ed7d47d1e89ba7a54e9033ef81"],["posts/335366821/index.html","599db99d21346ab8c86ac9253df96fc2"],["posts/3356910090/index.html","0baa7197189ad366189c5a7c52208a05"],["posts/337943766/index.html","89a2598d51c9734f9467be2f388fa93f"],["posts/3417652955/index.html","74283c4eebed4fcf379ac0b094c226e4"],["posts/3444626340/index.html","52dc48ec5dd82e224eb446962330bc2b"],["posts/3449402269/index.html","07db8008c74450674763a45a18fbf67f"],["posts/345410188/index.html","c059004526b4e3b0a910f0d4b976e565"],["posts/3461518355/index.html","8c851c9519d6b0f1b2dbc3cc047bf898"],["posts/3494408209/index.html","67b25446c9822c88cb67b92067b54ed5"],["posts/352037321/index.html","8f30017519ef330628109fd1a6693679"],["posts/3521618732/index.html","aaa7de74e2052702856845ac69079a26"],["posts/3568552646/index.html","d79f0a4a4a7e311266b475cc9b0cce14"],["posts/3603924376/index.html","dd8c013e43ffaa27b3a4f5ceef76d422"],["posts/3637847962/index.html","6411c023bb4c8ee94a36ae4308985816"],["posts/3642630198/index.html","a8faade69d69a0e0a828afff640da4fe"],["posts/3653662258/index.html","cf86307bb89cf1548b0982071260b614"],["posts/3653716295/index.html","11516b1ea022b27306a8a198b08ade9e"],["posts/3657008967/index.html","f01b4a7ff1480309478f845837f6310a"],["posts/3668933172/index.html","391ca805a81b285584e6bc261117c248"],["posts/3677280829/index.html","a5f6069a4a38e8cfdc5007fb9275acab"],["posts/3687594958/index.html","aa54a0244080d858e3671c4b9bceb761"],["posts/369095810/index.html","59160f422e46072cd540e41b8b1b6d7e"],["posts/3695777215/index.html","fd4faf08b1887538e81fc36fe4d8329d"],["posts/3736599391/index.html","a4929d75a68632089774f05a48ef5881"],["posts/3742212493/index.html","0ef752c7ea3004d70fec33868500c6b4"],["posts/3782208845/index.html","72271f73b9316789d667ed033a88fe7b"],["posts/3789971938/index.html","fcd0324c0bcc3e16f0551486f2686054"],["posts/380519286/index.html","8be08364a4488487ec134d4c8b14e3b3"],["posts/3846545990/index.html","3d8004e1f33cdb46c1d6c520ccb77023"],["posts/3873710624/index.html","d77a1a1aaea0f9667f38519405b7182e"],["posts/3959327595/index.html","4ea5bfdf300c0dd042ac163dac3b4c1d"],["posts/3972610476/index.html","ea722521773016181e18df75c3feb2fe"],["posts/3995512051/index.html","1284d480ea8f2a0a91ef8cdeac66ffca"],["posts/4088452183/index.html","0c40ddbc4e846e25483eb70cfabb6a58"],["posts/4116164325/index.html","1c83081e4df1dae05f0b0807e91bd079"],["posts/4158690468/index.html","32efe9ad8f208dfb70cad9a37cc3fc57"],["posts/4159187524/index.html","45ce1ee33dff86592d6f0531d8eef59e"],["posts/4197961431/index.html","14739a9f70ff90381a92ea6330c2509d"],["posts/4205536912/index.html","0f96cdabf05a5a4b00e8b2113d937caa"],["posts/4236649/index.html","957a3daac396dc23f2c297158572dc99"],["posts/426338252/index.html","cf61fcacafbaf1edefa174350ca94197"],["posts/450254281/index.html","bda5ff789e5e7f37261a264e2c29fd14"],["posts/4891372/index.html","05eaa49f80b01e56d419bb328da718c4"],["posts/569337285/index.html","b3b6a14804071ffcd79e730ee2e005c8"],["posts/570137885/index.html","687b6063cf4ac409c972567a94005854"],["posts/570888918/index.html","cd8c78fcab2b9b8a17fcc99c4e5e48d7"],["posts/582264328/index.html","eb2bfeb9031b8ef39ecaa63ceb554d2d"],["posts/632291273/index.html","7afeb2248bf961a6d098f8c7b7d6926e"],["posts/70687890/index.html","7f437917faca4d0e3cdff7712d2dd49c"],["posts/719322223/index.html","13ad2774e56c4a7d7e72a9a238ba84eb"],["posts/720539850/index.html","42113709b5149890c240c46ad23f059b"],["posts/786195243/index.html","c896a5ef4b6fceff0293734afbccf66c"],["posts/795474045/index.html","4fa3bbcc9dc92444dfca7003c521e71a"],["posts/815861661/index.html","a0cee8e5b418242528ecbbf4b8cc2eb1"],["posts/821259985/index.html","174fe6dc9431dbeb45655983eac7e25f"],["posts/828223375/index.html","cfccfa69fa782b379cf537803353a002"],["posts/887585917/index.html","d2a443b82cadfb79f6f1860d1d624bd1"],["posts/888549816/index.html","506ce70f4bd9ea200285423ca3852d05"],["posts/906436376/index.html","680ab87a887bfa13c52ea552f6af13ae"],["posts/907824546/index.html","634035726c6b063384c366da23d2abf1"],["posts/927393529/index.html","fbdcb6d7bc6fc796aacc61089f34c74b"],["posts/94443781/index.html","3582402d1fd241ecad327c2e25b90c32"],["tags/2014/index.html","05b50172a875dfe45a1e7b886e5580bb"],["tags/2019/index.html","62e632565d54df204b97a9d1e4e55a75"],["tags/AI/index.html","2cee091dd9d9f513779e0afe3020e987"],["tags/AOP/index.html","40ee8f4110e68990bee5d2de1062be7f"],["tags/AR/index.html","956f662bffb37385107d731df02c9109"],["tags/AssetBundle/index.html","3231183fa79c0f2d0ffb0c8debbcee33"],["tags/C/index.html","c85d17e48854e6db8dcdfcb5679f704e"],["tags/CDN/index.html","4bb000a7ddbd4087a27cbe7cfdc07a17"],["tags/CG/index.html","102d08d3e0f3cf547999fe9cc54b429c"],["tags/CI/index.html","176a84265f5212c08b0dde08db7346cc"],["tags/CORS/index.html","0dc698c68e6f82475738bda3b97b5b12"],["tags/CSharp/index.html","7a41d4988f22f8675d6d27d66a8e757f"],["tags/Castle/index.html","5d3758d9cb188f45717db61d11502ccc"],["tags/DBeaver/index.html","ce48f8d7b054073117628eda17c0bf53"],["tags/Docker/index.html","7254a894c0cce398a37e505dcc1c61c1"],["tags/Dynamic-Proxy/index.html","4b9edf92739367487c4024577f840ce3"],["tags/Dynamic-WebApi/index.html","6dc433ef218e07769b74c88fc943c591"],["tags/EF/index.html","37d01c6d4b31960f40ab6066cc1b5dcb"],["tags/ELK/index.html","ca5fd64d37e015c8c772d5cfa18f209a"],["tags/ES6/index.html","69446ec8cbde3f9022549249f1788c95"],["tags/EasyAR/index.html","6d2078510704ab23eaef1977d74457b8"],["tags/Excel/index.html","83f331efd8df57f7546407fac0d7149d"],["tags/FP/index.html","158c6c7ff24958d8d8b0d6c13fdcf43e"],["tags/Form/index.html","f13e1a7bdcf9c235ea0557f5d5830c8b"],["tags/Git/index.html","28675e88d963dbe44f420aae3f9b650d"],["tags/Github/index.html","ac92cf0d8ab1fe746e4ad2bccf690bc6"],["tags/HTML5/index.html","9a033c95649c7244a690e72b9143d483"],["tags/HTTP/index.html","46593ae03b06cef21740003fcd86ccfc"],["tags/Hangfire/index.html","81f6703ea7199d85792e8c30bf74f6b7"],["tags/Hexo/index.html","440ccbf45441ee3989080b4909705228"],["tags/HttpClient/index.html","87294f078bcceccbc812ad96e4c06ce5"],["tags/Hyperlog/index.html","7182120fb2eb2e04f1afaf40a52ef417"],["tags/IDE/index.html","558e9fb612f4d42c399b1c35acafe439"],["tags/JS/index.html","3b02ed84763811c19d6d69eeb8e28783"],["tags/JSON/index.html","884c191a02d3dbba27e975f63ee91980"],["tags/JSONP/index.html","6e6d78aea9dca4529c3ca2d8f38f7835"],["tags/Java/index.html","523a78ac8ca61bf17afb2f44ad25b0a6"],["tags/JavaScript/index.html","9fd251a0eb72356ed7ebed59e164f9d6"],["tags/Jexus/index.html","d74cb585fa7efed23d2640cbe7e16cee"],["tags/Kindle/index.html","64379148ee482ac331ff723393c8fadd"],["tags/Lambda/index.html","dc1ed98eae7b969c4b75c1a4153ca2bc"],["tags/Linux/index.html","82b0b3e922a640071c1d6404510e76de"],["tags/Liquid/index.html","c9c376cc504bfa710bf553e0eb267195"],["tags/Logger/index.html","45b79c269ae947cbdbeaebb0db40b8e9"],["tags/Love2D/index.html","7102105a214d85a620dce05d4ce9e776"],["tags/Lua/index.html","6c77f957e4f6a40e7ecf8def95e97895"],["tags/MMD/index.html","b2d42fade62c2d63daaaf926c615ee70"],["tags/MSBuild/index.html","1520aaedf6e10b3427cd54d16fa6181a"],["tags/MVC/index.html","e188bb294cedf65cdf774cb6fb866921"],["tags/MVVM/index.html","0c1a1cd4462e7ad671cc7de3ec860ad4"],["tags/MapReduce/index.html","a3a93ecc9cc1fed83c1a7c9721041a8d"],["tags/Markdown/index.html","25ea1b8c73b2c5ac23ffaa645675a841"],["tags/Mecanim/index.html","e384fab2f624fe43d9455eebdced1175"],["tags/Mono/index.html","33ab4178b95bf79f5b4a546794cf6ab3"],["tags/NET-Core/index.html","2fe2828f23a6e214a20b597a00fc094a"],["tags/NET/index.html","47e6626de7f11288366ca32b6d3f8f85"],["tags/Nginx/index.html","63d5c626f26ccd9707f2abe8c2d49f9c"],["tags/OBJ/index.html","5e365831a9bb1e49dfe9ecaffee9d6e7"],["tags/Oracle/index.html","a8304798d34b69d141771e9a192e179c"],["tags/PL-SQL/index.html","053d632d47fd221d0b41bc5e7532a61b"],["tags/POCOController/index.html","88d39989a0f30d0232c5c5b4a6fa6bb5"],["tags/PWA/index.html","f5fed6bd06678719ecf3af99b32f936c"],["tags/Python/index.html","a006a3ba8f06d23524db188e4e81feff"],["tags/RESTful/index.html","9e3d86bc3c57c6570bfc369939ac5d42"],["tags/RFC/index.html","7c41af0ad6a4e3b5f40ef227f6343fe8"],["tags/RPG/index.html","0d21803ebcdb0725bff8e53d68fa7005"],["tags/RSETful/index.html","7935ee612a8b7ad3a0c93edc93fd0c70"],["tags/React/index.html","971bb37f7eff2db65e08f362edb42705"],["tags/Redis/index.html","caf713d2f8f7dc96459cc28f8d735411"],["tags/Referrer/index.html","7861f6f46c263379acab6b9215275704"],["tags/SDL/index.html","23b2973ab84833acb304c6b20b6c37f4"],["tags/SQLite/index.html","92375099202ee0b655c3da5e2072328c"],["tags/SSE/index.html","0fdd57701fcf8dc041e8714cdc32e947"],["tags/SVN/index.html","8edad0ca06a5d87677cb3f2ccfe0c4da"],["tags/Script/index.html","c5c8878ff462b560b6830fb0ece5c09f"],["tags/Server酱/index.html","574218f3dd0ea15e4c47e23ad16bc4f3"],["tags/Shader/index.html","07490de6edcdbfa002c1d30da0efdd4e"],["tags/SignalR/index.html","dd288cb10d8ad7e59050c9d03757db9d"],["tags/Socket/index.html","ebb9cc6856564c203d7684ce79ff9660"],["tags/Sonar/index.html","0ca5eb6a9335feeb95e24825dc5a9db9"],["tags/SourceTree/index.html","61dbdc7d8399449052ae0c67a229edbd"],["tags/Sublime/index.html","14f9b90f1255386da3ac11fa6ca57a07"],["tags/Swagger/index.html","ae6da1042a10d9100f6b231fa9f9ed27"],["tags/Trace/index.html","52326e1c3bdb95f3bf58109a58bf5940"],["tags/Travis/index.html","7f976dde2b40b00338b7867c6704e969"],["tags/Unity/index.html","173a28233ea80971afb1ea32dd5a86a9"],["tags/Unity3D/index.html","d2577d4bb8ef202cfb1e448326b250a0"],["tags/Unity3D/pages/2/index.html","8e1b3c8db42bb45e1097e14c30fc1e04"],["tags/Unity3D/pages/3/index.html","06b17929ba388dd7f2e3a34e60e0ade4"],["tags/VSCode/index.html","ce9d0b9518d9ba69acbdae895dba55c5"],["tags/Valine/index.html","67eccb3c40ab74824709f970fc4108b4"],["tags/Visual-Studio/index.html","62a3613cbf0786fc569f0e1904196c56"],["tags/Vue/index.html","e56ecfef93a0642c730f1b17ed4295be"],["tags/WSL/index.html","0c6cf888913d85fb93510ce4a49ac56a"],["tags/Web-API/index.html","8fe9a62a2efb3de2f805bfe88bebd084"],["tags/Web/index.html","b03a0f108b7427eb8b3c0b1496bc555c"],["tags/WebApi/index.html","1f48971d91c66100bc348581d83ebf2c"],["tags/WebSocket/index.html","09327143f492a2dd077c80d84304b213"],["tags/Wechat/index.html","985bf0769ec09fd80968ca9f0d0a658f"],["tags/Windows/index.html","bb44b469f2b1e80e2b259f776522c8bf"],["tags/disunity/index.html","272f166e901a3de477cf1bb9acddc644"],["tags/index.html","c1bc4a9ccb766214ef84bc113f94f454"],["tags/jsDelivr/index.html","8785d8bb16e5d4ec01d3033fc1780b4c"],["tags/matplotlib/index.html","cb3fec462916fa98123d622575eeb381"],["tags/uGUI/index.html","44027e16e363fae4a6f2efab4c9ecc80"],["tags/zTree/index.html","76ffbb451868da64aef8f19c80a54cbd"],["tags/一出好戏/index.html","144ae8d62f5fdd530cf750ea387b6161"],["tags/七牛/index.html","a79e4e94ac84763158d4039ac536aea3"],["tags/主从复制/index.html","f6e4ef8c6ae23aa64d6b5d4af5520c07"],["tags/事件/index.html","f53b33f1f9abc2d664a87fe68a04ddd5"],["tags/二维码/index.html","9e5a75c137f943848836ccd5d87ee290"],["tags/云音乐/index.html","aadd91162f4f5820ea2753a4c5ee32e1"],["tags/互联网/index.html","abc05e59582f489f6889562b17903a04"],["tags/亲情/index.html","4a9b3484fa3a866054a36cd222a754f3"],["tags/人文/index.html","ed626d8d029752bc6807b7a8388fcd05"],["tags/人生/index.html","95223acb09d535f588325d85b2ebb240"],["tags/仙剑奇侠传/index.html","0ef9884f4f413dbdfb6d53f80503c401"],["tags/价值/index.html","cd9e60b77449862ceff84fb3b2947310"],["tags/优化/index.html","a0dcd0b30b08c5d4d23ea1b30277e8e2"],["tags/全智贤/index.html","a172bc4d745bc171fea5a95f1751d8a3"],["tags/公众号/index.html","6d8b294bbe8d922da5da94fbc8365fb3"],["tags/关卡系统/index.html","437e7ee7017f4732f55ffdf81b2b2591"],["tags/函数式编程/index.html","fc52c97d775eb5047e604a7242a764fc"],["tags/别离/index.html","d07b2c5a7dc84f464684b300b76bcbb3"],["tags/前任/index.html","4bad5e65473a28379317a9cce334d15e"],["tags/前端/index.html","3db400cbfe3ae1b5a89f2ef197a46353"],["tags/剑指Offer/index.html","0b553537d444372ddca9db8eb8af2d03"],["tags/加密/index.html","fd78c8cb79cc386f46983672299ac97f"],["tags/动态代理/index.html","ff2c613e87cf7183edc6b6204d960aa6"],["tags/动态加载/index.html","eeb1048ac3ac1e0bcf30d14a0b422f9e"],["tags/动画/index.html","5dbb840bd2d6a4f536e9dee40a0bc129"],["tags/单位/index.html","842a8b188698369540b73fa9f34c129d"],["tags/单机游戏/index.html","cf1bd5a94f85a9a702d9f657aa5be81c"],["tags/印度/index.html","4f1fc0e73f121e218440e9c05ae094f8"],["tags/历史/index.html","15c07ca322a88ca3ef8f2d373a3622da"],["tags/反编译/index.html","d8ef1dde01bf38d09e877950b03e3651"],["tags/同步/index.html","bbbecb33992f1c9ac59e7366ff43f071"],["tags/后端/index.html","c5eb19cb18fb6151fab23e230856758e"],["tags/命令/index.html","da4c7c8785a23879f36f5f0f06c6d2a4"],["tags/和平/index.html","8c52c94c2a78e1f66f2fb86d483186ce"],["tags/响应式/index.html","acc292c304bfabd8b2f4dbb7a81c456a"],["tags/哲学/index.html","f6e9c47976067fe84d89b8832d5abfeb"],["tags/回家/index.html","4dfdccea50349ad08f98cb065862835d"],["tags/回忆/index.html","8c4acc2dc593172bd8a095fb00be3f04"],["tags/回顾/index.html","a38e881a6c8e690424d58e4b6a1fcd16"],["tags/回首/index.html","8bd04aa01d1ce1e5d93794aca62e922e"],["tags/图床/index.html","7469a56b15823b7410551b0600e4c6df"],["tags/图形/index.html","58c76c4738ff950f24376c93ab035260"],["tags/地图/index.html","0ed56babc8f7692ac5b0ce6ef7be91d6"],["tags/塔防/index.html","9945fa70d0f8a4cf3d6ce070975c81dd"],["tags/增强现实/index.html","80726070e1692ab33d8c0bff7be8fba6"],["tags/壁纸/index.html","43464f0e2fbbe2c695c05cf465bb5727"],["tags/夏目漱石/index.html","8bec411463e28ce681e1790e4f997ca6"],["tags/多线程/index.html","fd7d628d18df0530f5b2b5c06ec4f559"],["tags/大护法/index.html","cd370d6b6e437552cc5fd257db948d5b"],["tags/委托/index.html","93de252dceb87d7bd5fde822c77f0a6e"],["tags/孤独/index.html","f6136afb6eef0dfcbd776d9081a848af"],["tags/展望/index.html","f1fd2bd6b73da0279ae9e69d0ecfcd7d"],["tags/工作/index.html","72f0aaf17736379779de0f797b8dd00e"],["tags/平凡/index.html","9fc5a98c90e512846addbb1fe1417396"],["tags/年华/index.html","0e07649bd827c6d29e4e6f3662c8d1e1"],["tags/年度/index.html","2157d083046e774a70712790f2708f5e"],["tags/开源/index.html","f745e1fca0d8051ccabcc7c7a9792574"],["tags/异常/index.html","6b9f733f35ed19790f9fc920d527aa92"],["tags/异步/index.html","2073762d9c076dbcba153770b8960efc"],["tags/引擎/index.html","c92fff8b31076e4e10b235b4ac385bd1"],["tags/影评/index.html","1c7d2853a791e70068eff64f7e369e94"],["tags/微信/index.html","b3b29dd0d0a47e1cff2e4230374852d3"],["tags/微博/index.html","49ab6ac623e24ed69b6da503e2401a09"],["tags/心情/index.html","05b853b90f5c4ab38ded9a85f7859d65"],["tags/思维/index.html","4790d1f2713ea64b1613d462b457e636"],["tags/总结/index.html","019d17fa075daf72aaf17d1376d9f797"],["tags/想法/index.html","7ea3a228b4dfc07190d3bfbae163bd91"],["tags/感悟/index.html","b08cdaeed025e653d9f37ee1effc9d44"],["tags/成长/index.html","dfe7c68ff909de6f6441368f96d093dd"],["tags/我是猫/index.html","1a9c9452f1a7144cd8ef3fae50c88f09"],["tags/扩展/index.html","eb186df3c597bbefdd531160807e43b7"],["tags/扩展方法/index.html","53a169eedaaf5b8820cf88a7ce38a3ff"],["tags/技术/index.html","3596dc51f0077af8703dae268fc0583c"],["tags/拖拽/index.html","bbd4e9be6370ea3a91bd0e67a6bf0485"],["tags/插件/index.html","e351af5bd12b6c89a78c90f0b972131e"],["tags/插件化/index.html","9485d73108e11be30f27ac9d0718a84c"],["tags/数字/index.html","9bbf15833e0b314d5a6df1d610f346d4"],["tags/数学/index.html","dd3cde15e82cdbd3704f5b7b10c789e1"],["tags/数据/index.html","29433aad39e85614756fb3d997b247ba"],["tags/数据交换/index.html","dcfa9a7cacd70d0f39234b3a99aaa4ac"],["tags/数据库/index.html","95cec603796677764371d26d96d7ce24"],["tags/文本分类/index.html","76579a51220d0e180323c30b23d1abc5"],["tags/无问西东/index.html","62025fbb29217696d7995a4fa73ea340"],["tags/日剧/index.html","cb3f2e2fc95df97ca2716394f1ff3256"],["tags/日志/index.html","cf269bd3c9a82c6ff978e192768a973c"],["tags/日本文学/index.html","c5237f745f245743e26703d01bcc7e66"],["tags/时区/index.html","7a14094ae66b3b4d25e323eeadcf1e58"],["tags/时间/index.html","290f5bd9b494a4c6eb81d89b0608118b"],["tags/服务器/index.html","ce97472e461574419a3b8dc372d5376d"],["tags/朝圣/index.html","55a6ad9cfefdb584de5f92e09444d068"],["tags/朴素贝叶斯/index.html","02180b6aa8b1fa62151b7711dc269706"],["tags/架构/index.html","261728fe90bb39dc58e75300dcec79da"],["tags/标注/index.html","fe1814d21f5edf47ab1eec174099088e"],["tags/校验/index.html","dd99781520cee32957f1e07c33ff7174"],["tags/格式/index.html","018224bc86f65241799e3abd8a79a6e5"],["tags/格式化/index.html","e0339a695eb3287d331ed36b31362373"],["tags/桌面/index.html","4d225383a21eb3c6bd5e802c68c60fd6"],["tags/梦想/index.html","b73f44a73f53798ea8df455d966904fb"],["tags/概率/index.html","ba8a8f93a9137085564cc52d75f111b1"],["tags/模板/index.html","f60ef3d62a4f511e004b04a9d74b7b34"],["tags/模板引擎/index.html","920528f7095afadae78baaa2938cce3c"],["tags/毕业/index.html","f3dee27fa3cfb0cc5a14048ed3f45a8d"],["tags/毕业季/index.html","05a0e8715a2cbbfac4b920d34674426c"],["tags/消息/index.html","740f6cc426f3cffbaf7f7cd26a767ff6"],["tags/游戏/index.html","d8e0c0a6b9e4575db900c620d96406b2"],["tags/游戏/pages/2/index.html","30875c1abdc49eba39531c85a6b1665a"],["tags/游戏开发/index.html","1316b681b30b7a5f7116eab1439c4482"],["tags/游戏引擎/index.html","d66b1e14b75c45dd7db7f4bbab53b41a"],["tags/爱情/index.html","433854579ddbca32c3e19231c82282f2"],["tags/版本控制/index.html","eaa2c55fe7f29d55b07e389ebf069109"],["tags/版权/index.html","46b82244c15ad09eb962dcadb5f8a569"],["tags/特性/index.html","ef54842bf44ce32d78790026b5cca811"],["tags/状态/index.html","c47f7ef8e82a9aa00bef951ae3c7cf5e"],["tags/现实/index.html","451cf7ff356c93fb73d4f9e325296e4c"],["tags/生活/index.html","d8be7d9f9bdff898462395f2ee2a7400"],["tags/电影/index.html","4df0fd87a88b76474b5a155442cbdce5"],["tags/画家/index.html","b05b8e80b169254fc1f2d18d945fae98"],["tags/知识共享/index.html","4fb315167b721bcac6f639c7b32cbfe1"],["tags/矫情/index.html","b26e3ae3eb60feb84d66229262db6a60"],["tags/程序员/index.html","e3fc34bad191580a7df2c16554452c25"],["tags/穹之扉/index.html","425c1be2b82a36f2ce33dd0be9c8f7dd"],["tags/穿搭/index.html","0e18daac7f09c3fb1ead79134f7f2d37"],["tags/童话/index.html","4e71c9d22d1cfb95472539c83b6c018b"],["tags/笔记/index.html","dc013d4bc5dd43c7126e2077e0c2e52f"],["tags/算法/index.html","1aa7dd5c12e05b979c65972adb29c985"],["tags/米花之味/index.html","753b1567aac1109d9da5eb3c29a87d2c"],["tags/缓存/index.html","4968fc8ecca00f970d7c52fe34940755"],["tags/编程/index.html","cad1b16ccf831f4ce09c8ac821061f2f"],["tags/编译/index.html","2f6bbd998111fa6b6230964533858228"],["tags/编辑器/index.html","2e4dda0a69091fa8ceab5a232cfcca52"],["tags/网易/index.html","cc8443e570e2c188873b8c3a8c993eb4"],["tags/脚本/index.html","7c006eff842143632cb978edd6e90358"],["tags/脚本语言/index.html","5b6ed345b13c2a7385eedea54caedb40"],["tags/虚拟摇杆/index.html","bdaaae898a1070342a1690f941d64907"],["tags/蛋炒饭/index.html","4a3f00551fe8f64ebd298ad23c5d5b71"],["tags/表单/index.html","8b7c4adbc16f009bd3096a9bb1c260a2"],["tags/装饰器/index.html","330a321617d4857f80ddc001e001f7e3"],["tags/西安/index.html","c1f2141345b59fb94d7c3a835503be1a"],["tags/计算机图形/index.html","aaec135433ca1303079ca61535cda6b8"],["tags/设计/index.html","0345f83be41e48b6d04b59084b492c9b"],["tags/设计模式/index.html","616a651d7fc3697b57aaf0bd96f855b4"],["tags/访问量/index.html","54b3fa27ea998840209199c3bf3c3bd2"],["tags/评论/index.html","8e978677ba678739f32e49c2b15a28e9"],["tags/词云/index.html","51a0c26796498341f8e0ec79cd77b6fa"],["tags/诗人/index.html","0a79c73fb88ff4b7cc1c5730bfe81c68"],["tags/语法/index.html","9c8d5fd9a6b19d58ffd044e59bd797af"],["tags/请记住我/index.html","fb7aabe39a087165cc38b2aff16d594b"],["tags/读书/index.html","adcb182945ad0763627d09010315850c"],["tags/读写分离/index.html","4c6bdd4905d561876bebfd78c43f71b9"],["tags/调试/index.html","38451f2f7287248428397939f1a50b7f"],["tags/贝塞尔曲线/index.html","1f19eb23f1df1521851f1761d42b5f25"],["tags/贪吃蛇/index.html","287a8dd56deed2ac918690aee2171662"],["tags/资源提取/index.html","24a5a2eace879b2c40fc0fb1b6abf3e6"],["tags/跨域/index.html","675dd476f589d9e483369153d6faadef"],["tags/跨平台/index.html","e0928ca77050ba99cdbfb3bf0f14f9ac"],["tags/转盘/index.html","bf28b7478b2838685716cd0330528a4d"],["tags/迁移/index.html","8e848eef2eed6bf55896df691eb5def1"],["tags/通信/index.html","e7f3981eca5795794ef983f224c3fcee"],["tags/邪不压正/index.html","470e8d1ae2ff50f51ae52ba69f54d90d"],["tags/部署/index.html","22262d3d325d6b3407e9eb49f4b24108"],["tags/配载/index.html","885efcc907f346bb6025b05bbac5bd09"],["tags/重试/index.html","5c7f331d81e530e6f496f3770ad67bf4"],["tags/长安/index.html","21ac19b29015be63fcaf13aa74e1842b"],["tags/长安十二时辰/index.html","e56911710ccde5a4722777b35c983dd8"],["tags/阅读/index.html","e7c195e149542dce0f4ed5d379b7e006"],["tags/阿里/index.html","6bc932d2a56cb36992ae1bee558cbf06"],["tags/随笔/index.html","dfe0c30524435147fb08a13d9384e1bf"],["tags/霍金/index.html","ea08ea692c626db4645662d65551ef5d"],["tags/青春/index.html","cf5dfbe0695303813d0598d56cae5370"],["tags/面试/index.html","a22db97c3352621ecd7be19ee035a3b1"],["tags/韩寒/index.html","d9f0bdca77718494095cf6650e24f7d9"],["tags/马尔克斯/index.html","886c89765678c2a3ff20a8f9d94e8539"],["tags/验证/index.html","2180d4bff5b43862c0119cb1205ea5ba"],["tags/黑客/index.html","0c0021c1708a7d6074f5311e41ebd845"],["wiki/index.html","15b4a5b7a4a70f7e387c519a8754987a"],["works/index.html","5b2f27a4f02b2e8ac2b00f839c5f2bac"]];
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







