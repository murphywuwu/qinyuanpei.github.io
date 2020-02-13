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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","1d09132fa32582cc4541e6a863ebcdff"],["archives/2014/12/index.html","98c6a243409fac096a6ac5f6ce6b767d"],["archives/2014/index.html","59dee95c5ec813e37e4e7a46d25afd50"],["archives/2015/01/index.html","4bbfaec30abe3613b8d697b5c7897f1a"],["archives/2015/02/index.html","d22b615aff82121f34f3d94f3a1c6d9f"],["archives/2015/03/index.html","88cca45bd23f9c3fb335b8c598af9d66"],["archives/2015/04/index.html","2a6e6fd5fa4bb98aa0fce6712818b242"],["archives/2015/05/index.html","961f016ed603040af86eb655a0dbd0c9"],["archives/2015/06/index.html","f85fcdb4b4fb7793234e6e231f54694a"],["archives/2015/07/index.html","065ee4f4be57bc50a8eb44dab8c6982a"],["archives/2015/08/index.html","fae1090564cb1cc4e007cd89902b71fd"],["archives/2015/09/index.html","c1849eafb85e70f5991583839411ff5f"],["archives/2015/10/index.html","73895859131cb4705a84268b60c6346f"],["archives/2015/11/index.html","f3ecdba8c9a59982092d8cafa6a8c772"],["archives/2015/12/index.html","1648c08e3aa5c51f75d1d331ada52b49"],["archives/2015/index.html","b7c035cf63cb556552317c7207832fbb"],["archives/2015/pages/2/index.html","85b7b67117b2ebe211fee00aa326859e"],["archives/2015/pages/3/index.html","7f3491782cc49cb2c1e798318a61e2f0"],["archives/2015/pages/4/index.html","16cde78e9a2f36436d1c7cab2b6d98a3"],["archives/2015/pages/5/index.html","2c344b5bd197076604436367b6e44ad9"],["archives/2015/pages/6/index.html","edc327d32751466bd3f0b86430e9f835"],["archives/2016/01/index.html","8a37e6a40d5c68c0064203fdaf37f70a"],["archives/2016/03/index.html","12418a4cb3133b32001613d3f53c3656"],["archives/2016/05/index.html","0d9b98ad21ae0aa6f43f870fe123f7de"],["archives/2016/06/index.html","6df22b1d60def18d543f5b772ab58609"],["archives/2016/07/index.html","0619dd49c64eb96a0fec5da741691a59"],["archives/2016/09/index.html","751329c53ecf31883e5fbf07670290ea"],["archives/2016/10/index.html","b8f6ef6e43997fae7e002d207764f57e"],["archives/2016/11/index.html","0559f50da52c1de8fc82e863ed3fc9c5"],["archives/2016/index.html","eff73cf614b020dcd0a9b4cbeaeb987f"],["archives/2016/pages/2/index.html","f2ef34e72c9e5f2967c440a730cc1be7"],["archives/2016/pages/3/index.html","6dafc170dc31de3f96cb9396faaccbfc"],["archives/2017/02/index.html","dd9648728826c469364476e0445ea654"],["archives/2017/03/index.html","dbcd27a1d9ac388514b160798f48351f"],["archives/2017/04/index.html","2f387b0de099a09e5130a5104fb09ff5"],["archives/2017/05/index.html","324ea182b4694cea8f2befe6a6cc046d"],["archives/2017/07/index.html","e2112cdda6c9f4f0111662670274cbb8"],["archives/2017/08/index.html","f9326d24dba9f3e938ad8f9b8b11075b"],["archives/2017/09/index.html","6221744ac4d251ec308ab169ad002637"],["archives/2017/10/index.html","bafe16c566a3ef5484249455902d3da3"],["archives/2017/11/index.html","1121b9ef3298a024fc1186e815943705"],["archives/2017/12/index.html","9138ef20fe6a247dd6454e55c742603b"],["archives/2017/index.html","8cd47214b6e6b4416940c362d515c691"],["archives/2017/pages/2/index.html","5f1ca3a84acb3a438661d4ff38e34ae5"],["archives/2018/01/index.html","e6133abe887bb90f3e5740b11a50131c"],["archives/2018/02/index.html","c08fa6762974776bc78b1343575c7555"],["archives/2018/03/index.html","3ee9739f45c7fc28865327f9ec32e430"],["archives/2018/04/index.html","2464ab636f910a6012c982ca6f4189d5"],["archives/2018/05/index.html","141d07fe9f13684bbb16f91f8625f89a"],["archives/2018/06/index.html","b46ad067626f048e8144b2b92d8e2c56"],["archives/2018/07/index.html","71fabb9305cd096565bee78d714541a3"],["archives/2018/08/index.html","1d5738587cbb97ce14e7814da20c9bb9"],["archives/2018/09/index.html","266149985ac30b269432c1240e4c2a58"],["archives/2018/10/index.html","16df235eb5d529eb5e2e5406b8d022d4"],["archives/2018/index.html","82ec491d59aabf7641379e26bc6843d1"],["archives/2018/pages/2/index.html","e64f9d759c7baa22e5ddf70aa217931e"],["archives/2018/pages/3/index.html","458f62ccbe7343c7b058f978dc617b5f"],["archives/2018/pages/4/index.html","c284f7d7385c08e952be450998b788c5"],["archives/2019/01/index.html","1fd817126515ab6f9846d57260c18618"],["archives/2019/02/index.html","d344e3261747c9f21c6772965322a5b5"],["archives/2019/03/index.html","de75654d9b29c14010f53c94bb06994b"],["archives/2019/04/index.html","304856c6d44bfd4a8baae717cb59d4de"],["archives/2019/05/index.html","32697f7d4818a704388e80cee29daba1"],["archives/2019/06/index.html","825098be979875329a6c7c3729e23189"],["archives/2019/07/index.html","81a2af5064fbe1e67fafffc24b6ef6e8"],["archives/2019/08/index.html","4522e820e2e8bb53a3f50bd3e8b342b8"],["archives/2019/09/index.html","34b0262b72ad01a613c75ed6bc25fbfc"],["archives/2019/10/index.html","9446d05c0834299a2d9b53e881e950c7"],["archives/2019/11/index.html","5698da3de4743967d81e42cd83535cd2"],["archives/2019/12/index.html","76289622984e65396f88ca5e1705766a"],["archives/2019/index.html","288b12e33a10a47a4a783a5198ad9ba2"],["archives/2019/pages/2/index.html","0b34326e0e77ef46c3274aba17262c0e"],["archives/2019/pages/3/index.html","e9b0ed2332ec93d872ac867f21ffbb28"],["archives/2020/01/index.html","c40ceaad21e2cb9b2011a6ecac1a680a"],["archives/2020/02/index.html","e97cb2279b0a0f34df0c46b123fcb9ae"],["archives/2020/index.html","9b106c10d26e3a399935f90e17f362d6"],["archives/index.html","f85ad0b7bb0012bfaaf704f609683db4"],["archives/pages/10/index.html","ebc9b145709d83fd31354cd7724dacaf"],["archives/pages/11/index.html","14cf70f3d090f1afab561ef7748d8212"],["archives/pages/12/index.html","6030c5e5cb2de832fe568b759c132256"],["archives/pages/13/index.html","06e04fdb554986e0af28c79fb9dc6d58"],["archives/pages/14/index.html","5d693f56e42bb9214775191e2bc63cba"],["archives/pages/15/index.html","bd2ad27fdb5bbb2a75d44f595b8dd006"],["archives/pages/16/index.html","cbaf93d3cd879ad6efb84724723e730d"],["archives/pages/2/index.html","f9e211ef4644efea219a80741c26ae3e"],["archives/pages/3/index.html","fca4960efff5d2c2a9ac512154dbc6ca"],["archives/pages/4/index.html","29228204828edb8876c3f8bb98485964"],["archives/pages/5/index.html","c1d4aa0ca2d891183548066861cf0a92"],["archives/pages/6/index.html","7308e86d9b8036cbf44f4cc68124b503"],["archives/pages/7/index.html","4cd950ddc3bca7fa79ece7fa3d3cd473"],["archives/pages/8/index.html","57d580271c5d78cf434e29d506000406"],["archives/pages/9/index.html","cfdc883dc7995fb99b69d1d3b3278329"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","5f39bde69c77a5d0b5dcdaaf62319ca8"],["categories/Unity3D/index.html","d7ffe9a07faf06e4215d6c404489f31e"],["categories/Unity3D/pages/2/index.html","44e3e3c4d5faa737e2b4c25e26e58077"],["categories/index.html","28c527b607686b803995e5f1ebf7c0f7"],["categories/人工智能/index.html","8fae61fb00f22360b36c9da2ba6919b0"],["categories/前端开发/index.html","6e0494e04b5057eb9e7961841e2012ef"],["categories/单机游戏/index.html","447356e22a9f43021f4b646df8b6fdcc"],["categories/开发工具/index.html","839740a3348d5b66dfca0c7dc063004d"],["categories/数据分析/index.html","835aac30e39fc1bbdc7c810af50702c1"],["categories/数据存储/index.html","21560f7afaf751057cc19e354b8fd4bb"],["categories/游戏开发/index.html","fb791383085a228ef69a244524148b00"],["categories/游戏开发/pages/2/index.html","e3526a5b4cf7b63cd88ff3db74eabd19"],["categories/游戏引擎/index.html","e69514d101ac0b5b4f9af8d6505d0b1d"],["categories/独立博客/index.html","b4f6906978971b3404a8c313fdbb204a"],["categories/生活感悟/index.html","c26c6b78ccdb8c48dc767421cf5d191b"],["categories/生活感悟/pages/2/index.html","fba706f7bcb05f80a215b52c204d0f27"],["categories/生活感悟/pages/3/index.html","b851402344531e72df49bd770a487e5a"],["categories/编程语言/index.html","ba47dfe0b81439102d952f885063838f"],["categories/编程语言/pages/2/index.html","337938bffa0c2874516048b9864eda40"],["categories/编程语言/pages/3/index.html","48db6dd9f7d2eb2b71668476b7a5427b"],["categories/编程语言/pages/4/index.html","e48ac4298f59ac2e454f9eca40dc6f6d"],["categories/编程语言/pages/5/index.html","d8ca71d913c9a204ab67ac5680aabb1d"],["categories/读书笔记/index.html","9ed0d3c3dfc4b40b5f794366cdb4fc6f"],["categories/读书笔记/pages/2/index.html","c81f90fd8793025fde1b178c640106c7"],["index.html","d3386a36456b1ce826752917bbf362e0"],["movies/index.html","98ff2ca407e6c35950e37edbe8f418dd"],["musics/index.html","d62d43fe54f03626020520f06cdd8a51"],["pages/10/index.html","1ea24a2ac1eed621f4acf86927d7f674"],["pages/11/index.html","3e4bea63c04f531a115a2e5040cd78c7"],["pages/12/index.html","bad37fcddb65b00e1e04c9732217dcea"],["pages/13/index.html","39b3456e342def52f7751a1541bc653a"],["pages/14/index.html","a3a5fc4eac18c286553f9d40409569e2"],["pages/15/index.html","d126df3d9f3194e6eb14abc0e5404fcb"],["pages/16/index.html","d9d18bf0721d47a25d4019cb8ecba1a8"],["pages/2/index.html","d9b9de94fc6d60a3c28d7c0304858f0e"],["pages/3/index.html","56cce08735ec2e97eeb8f4a6614c6ae4"],["pages/4/index.html","b51304e4594937568a739ea72421b1ce"],["pages/5/index.html","ee6ec94ec501b6e36edab563637c4219"],["pages/6/index.html","9863f0032741bb12f4d08c68357580da"],["pages/7/index.html","4d9460e9fdb60ec153065c1d6cd0a6e0"],["pages/8/index.html","366e10ae0cc778d917a0675721f290b9"],["pages/9/index.html","cb9dad4f598620be7af01a6682be1562"],["posts/1059499448/index.html","ec531d600b5f1135a47689f92d2790e4"],["posts/1071063696/index.html","b5ea234e71d71b91883314c3d9c2fda3"],["posts/1082185388/index.html","f39876bf1e7b32b5351d784bf90d847f"],["posts/1099762326/index.html","88aa4b8819a86173b23458c0d1d5715e"],["posts/1113828794/index.html","45789bfd395c51947d1a98b1be79735f"],["posts/1118169753/index.html","0546493c5d479c160b0a0104280aa0b9"],["posts/1122710277/index.html","047ace3ca79dc4967b5b6cfe06000143"],["posts/1124152964/index.html","556c3eea03853760b9657517fedd4961"],["posts/1127467740/index.html","951e051377f290591c13eae4ec280b8b"],["posts/1150071886/index.html","3e6313dcd6e50f673578150544474126"],["posts/1150143610/index.html","172849122aff4d5043cd91d6ae6b8bc4"],["posts/1152813120/index.html","300d2a2736dbc8e83560b6eab1291edd"],["posts/115524443/index.html","65425d77a4d676ecab50566365316153"],["posts/1156673678/index.html","e625b8392285d3ce027fd256fd2b9de3"],["posts/1166840790/index.html","9edbca80bb09d516c3f16a30e69e5e7d"],["posts/116795088/index.html","151e4eec3baece3397556bd7a0d154a1"],["posts/1176959868/index.html","be16797627464d40193e0641d9008d8e"],["posts/1190622881/index.html","c2fcd07134f6b587b0a420e58dbe1eb7"],["posts/123663202/index.html","7bd6d6a7c13ed1baf89c694c2b6f8bcd"],["posts/124807650/index.html","dc43774ea98563ce1b9a6f153e7ebd51"],["posts/1254783039/index.html","8403e739309ad22e02f76f07dfe87c5d"],["posts/1320325685/index.html","da21123af2f8a60c5acb58b80b51078a"],["posts/1329254441/index.html","f67fe8944f302e013fcf87247336dcb0"],["posts/1357715684/index.html","8d56e2c4a827b6c97426c574f7c65609"],["posts/1358971951/index.html","ef47c15740e86a40d18a2d06e18eaac6"],["posts/1386017461/index.html","ae7413c70e0ac07435177d94bb1e3ebf"],["posts/1394521917/index.html","350da7546e2afdd49a37ba914104cb0f"],["posts/1397717193/index.html","57776983fff0b63fbf336045e50440dc"],["posts/1417719502/index.html","24afc1f8e1b1a9b46888f9e734e9fff1"],["posts/1424645834/index.html","0f76c90708c141ce27fae03afc40d177"],["posts/1444577573/index.html","d3fc35d72ad15951504ea4a7fb155cb7"],["posts/1467630055/index.html","7a3e6e1fa67ae0fe8e72ef7a329007d7"],["posts/1478979553/index.html","71917ed8bd09860c876d0e63ccf6aba3"],["posts/1540537013/index.html","cb2f815790fa20db9aa74c9256618ed7"],["posts/166983157/index.html","63f868de50a7361e83dfa54a5ce967d7"],["posts/1670305415/index.html","e3a3992715b05b318be769c1eca5316c"],["posts/1684318907/index.html","61ec85752afed0f4c1a5308b1f605ac7"],["posts/169430744/index.html","100e1e83e0b3db331a532ce38598cb4e"],["posts/1700650235/index.html","9d6c4771c7aab50590e35e0e1d75989b"],["posts/172426938/index.html","72b7fa73f81177db217a3720eb951146"],["posts/1836680899/index.html","f98e83d0ec06b85c741d125c7d7ef394"],["posts/183718218/index.html","b2db3ba53697dcaeb7514d8f82216419"],["posts/187480982/index.html","a1aca588ec382144f58386bee80a3a9b"],["posts/1930050594/index.html","6fc34f110ba1b3060f9817a63d4c6a0e"],["posts/1933583281/index.html","e1b28a28507039a09958a505c83636a4"],["posts/1940333895/index.html","5ebc9c41a9e212357ca7b5408a32b260"],["posts/1960676615/index.html","a4a9ff142bb2c1da3318bd3f2ca89be5"],["posts/1983298072/index.html","c53f0c5ca31428d986db9063d930d477"],["posts/1989654282/index.html","2264b053f3afdc88ee9b43512bc32526"],["posts/2015300310/index.html","abf8c4eac8deaffd0d0e87dfe4c18d3d"],["posts/2038378679/index.html","368311cecf3de438381207424cc6b9fd"],["posts/2041685704/index.html","8d11dbea3531da0b47ebeca36229cadc"],["posts/21112647/index.html","22c64af0266b6e3ca42ea0e949cd66c9"],["posts/2158696176/index.html","579b71d49f6580c24c900d5ec47111c6"],["posts/2171683728/index.html","705641db2c446b9038c3f4335f9f8d0b"],["posts/2186770732/index.html","80c416884b97ce807a3a25e4ac36d80c"],["posts/2275646954/index.html","e0e8d461c9bb62828265ff8886c1da39"],["posts/2314414875/index.html","662b47a3a67d66ec7a744e00e3b3ce00"],["posts/2318173297/index.html","082cae8fb43bf5473ba51b1a21dd3989"],["posts/2418566449/index.html","3e3c8c7318ef0c847d7a4990466d69e6"],["posts/2436573863/index.html","6632a53d31464fc391062eae24f74c70"],["posts/2462008667/index.html","9da21399bc26ada2afed155cb00d0943"],["posts/2463121881/index.html","f9d3479de20d397030d076e239e51f6c"],["posts/2527231326/index.html","d477a1035c155c360fe8c89520bc2dc5"],["posts/2583252123/index.html","258082fff792cae5b571727c45bdd278"],["posts/2613006280/index.html","20164a368c3ca762ad397dc1c7430d70"],["posts/2617501472/index.html","a5085b2014cb90515186dc51ded6e4a8"],["posts/2676125676/index.html","b960191887a21d952a4b9af16b6b3b10"],["posts/2734896333/index.html","b5964b4b0fdac697b49b668692e96621"],["posts/2752169106/index.html","a39512fdb8676e5e4159325175915ee2"],["posts/2799263488/index.html","e57671062188c8d73708ee26a9c47600"],["posts/2805694118/index.html","7eb84a9cc3f275762293d888a5ba39c0"],["posts/2809571715/index.html","4063ac0524c2599c1efd2c8d065474c2"],["posts/2822230423/index.html","e8ca9db298ef7d1175010eb101f4b096"],["posts/2829333122/index.html","5c10ace56055229540b4bdda26b44862"],["posts/2911923212/index.html","af2fc0ba308e07424db0ae69bedcc993"],["posts/2941880815/index.html","452ff840b45fc742535d0a29ff2d428f"],["posts/2950334112/index.html","3263775008904d039a2dcfb925d943b4"],["posts/2954591764/index.html","a0ed9d832fc6cbab908c5de4f973b964"],["posts/3019914405/index.html","0c38b12747f8c9071521c9764001e382"],["posts/3032366281/index.html","33cb05799db587d7a209ba4329314b96"],["posts/3040357134/index.html","ce2e90ab4b356815d2d8d937d08500c9"],["posts/305484621/index.html","1e5de4d68c0a68879b7e9c426d815ae1"],["posts/3083474169/index.html","8b8db47da2e4f696c38f7dd7d3ae8abb"],["posts/3099575458/index.html","f0c9b0dcf6dfb1c149cbab387f2e77b2"],["posts/3111375079/index.html","50c685a8e3b7399f5277cbb72aaa081e"],["posts/3120185261/index.html","6821894ab3def21057bdf5031dbc8394"],["posts/3131944018/index.html","2b96ce7f6a58da88776582d4df962f79"],["posts/316230277/index.html","dc5120972c7be75be31e3cfd89cfa4db"],["posts/3175881014/index.html","166090022095fda69fdc1a11a6d80f19"],["posts/3222622531/index.html","1944a56593a2ff217a670e3a5e75b9e5"],["posts/3247186509/index.html","dde049a5c2dd55f87af9f1bfc16dc426"],["posts/3269605707/index.html","6b566890b8275a20411b72005224dd7e"],["posts/3291578070/index.html","bbbe6822dfeb8d0814d719c4874e8737"],["posts/331752533/index.html","66b1de9f29cd91faec04219eec2ab54f"],["posts/3321992673/index.html","355bf1199c5de75bdb911c076f3bf984"],["posts/335366821/index.html","6c9a48dc0c2414982ae3adc88433accb"],["posts/3356910090/index.html","bd7762206145dac3fd52e7ffdf93febc"],["posts/337943766/index.html","c86e0d865374c3b11e59cce42cc0262c"],["posts/3417652955/index.html","c1e76065e5b4f94a4ad7e47830649c0f"],["posts/3444626340/index.html","954dcd6d88559cc6d1d98c1bcc57a95c"],["posts/3449402269/index.html","853b52dbf248f4b24f2c936bdfe83b05"],["posts/345410188/index.html","3ce2963bed3aa03a86534846512fd650"],["posts/3461518355/index.html","9829365f4b53cdbba4e50b9be6c86e28"],["posts/3494408209/index.html","52a4120437fe52fbfa87ce525dca3774"],["posts/352037321/index.html","13ea2db88d2579916ebbc4a00d03a261"],["posts/3521618732/index.html","659ae81511254da02319ee9ee7b27b98"],["posts/3568552646/index.html","7f36fa2ed43fd417e5ea9629172c4768"],["posts/3603924376/index.html","d8bf92decc6f49fe3532d1da113c470c"],["posts/3637847962/index.html","8b214c1d0fdc55da8f2e46cc4877b3e9"],["posts/3642630198/index.html","d0e4428661437dcb7e17a1ce1c7f6b8a"],["posts/3653662258/index.html","89bd0d5cf53f7705cd44cf83838d0b86"],["posts/3653716295/index.html","3d5ee80150010a0658233cb1eec2749d"],["posts/3657008967/index.html","f17092bc1c515e6a7b66a495c12e4727"],["posts/3668933172/index.html","18ce4e3d48c05cd7ea44be842cf4bbb8"],["posts/3677280829/index.html","0bf1a3a7edf00871f81cdd831a3c73fd"],["posts/369095810/index.html","80e6a3ce6e16df47d26770d3607b5445"],["posts/3695777215/index.html","314c7be00912b837822126ddabc1cc4f"],["posts/3736599391/index.html","d565dcde0aba9f40dcb2c31b589a65e0"],["posts/3742212493/index.html","92ef486ec07fa3e93fc696973e0da7b7"],["posts/3782208845/index.html","20dbf0c2e5ba1319eb8d510f0e800cdc"],["posts/3789971938/index.html","914ca29bb40fd3e7357b3a13f4d42bc7"],["posts/380519286/index.html","e6c949372434b6c393c13b49969871b4"],["posts/3846545990/index.html","72f534e6be1e53d6331e971c4da95d07"],["posts/3873710624/index.html","41ee457b060c9d6cfa98b7ffcf82c5f0"],["posts/3959327595/index.html","52d1346b280613fffb4e70ee43773023"],["posts/3972610476/index.html","5f9e6ab1609aa53e65bc2637b31c7782"],["posts/3995512051/index.html","17e8a20f08a783b87c5e49fe26cc619b"],["posts/4088452183/index.html","c4fdf5a9f21f39b03e83728bba7de6e7"],["posts/4116164325/index.html","17d7f12d2a562925a31e31b8320f3e0b"],["posts/4158690468/index.html","1a1c3e5be83d177c7901b1f3c6a41686"],["posts/4159187524/index.html","403e2faefe46deb4c8cb4da3aaf86b3b"],["posts/4197961431/index.html","8c017ba130c9209d57e3b64ba156c60c"],["posts/4205536912/index.html","03554544252545ce1b9149acdeb6088d"],["posts/4236649/index.html","e8e5c4b827d38fbf255b045299de263d"],["posts/426338252/index.html","02401ac2fb264c7a0bb5dd339a5b76fc"],["posts/450254281/index.html","669a86d3ce644ff642c810d7e7812619"],["posts/4891372/index.html","04304f36d5614eb5b781f4fa7446f662"],["posts/569337285/index.html","2796dda412f8978cd84878c53271bb29"],["posts/570137885/index.html","c10529b5c4f852fba13cf675acab849c"],["posts/570888918/index.html","2d4155e824388f01c79dddeacf1eb996"],["posts/582264328/index.html","a4f062eeb571abf14962cbeea0335af3"],["posts/632291273/index.html","8bb27773451b36d7415b54d46b1c7447"],["posts/70687890/index.html","d4fa5dea74eab5e16487698a6e96ebaa"],["posts/719322223/index.html","f96f110a5fc69b48bc4e07801f3d55bb"],["posts/720539850/index.html","f20c1daf54d2849fe6dccacc01797651"],["posts/786195243/index.html","7d0542e15ed2786a035b6812818117b0"],["posts/795474045/index.html","893114cd4d27d5625418a58fae4f4365"],["posts/815861661/index.html","e430a0e531d8febcf52d31d8c52fa9b6"],["posts/821259985/index.html","f10dd259567498bdc78527c74f5f6dfe"],["posts/828223375/index.html","a47334404be002223820ef0eb9d64e11"],["posts/887585917/index.html","0cca3b1034eae45e6e2becef8c2a3c96"],["posts/888549816/index.html","c117d22470b8a917af202aeecbb6f4b8"],["posts/906436376/index.html","2f3e6f0b9496b3e974bb6aebca20bfd8"],["posts/907824546/index.html","d42c88ca4eed7ae38d583a5b18ce87ac"],["posts/927393529/index.html","9ee8c592a7e94b1120069bd94729c315"],["posts/94443781/index.html","d73304b10ef5343c13f3fe0d6d41e611"],["tags/2014/index.html","d2ddbea57011ad983d5ef5cc7a38c371"],["tags/2019/index.html","8a2d82b1b4bf7500f21a80ac8cad7900"],["tags/AI/index.html","b5e222be262b33d449a1654e9b1552cd"],["tags/AOP/index.html","6784328269ec343b451ec08eb77006dc"],["tags/AR/index.html","27eb030a6193195f3fdc516197fb805c"],["tags/AssetBundle/index.html","7a15bf232e7fce21644d404e7ebc166b"],["tags/C/index.html","aecf8214b9b83c44237b779ace9d5d14"],["tags/CDN/index.html","2663b600f9caa83a0f7c0d454e32ef87"],["tags/CG/index.html","239600fa5c9bd0fa68136e9714a89f88"],["tags/CI/index.html","b439f04ff9bce0483760a05f9442657e"],["tags/CORS/index.html","9404c6eed2397b0494ea076ba5a7777a"],["tags/CSharp/index.html","8c1ca3667bb470330e7c968d2813f121"],["tags/Castle/index.html","9eb6cceec7d2e8c3c00b80e69398432a"],["tags/DBeaver/index.html","1b56399852896e4e67ca725e3cea3356"],["tags/Docker/index.html","315a4afc933b5b34971ab0e0b38d22b5"],["tags/Dynamic-Proxy/index.html","aa82ea5bf89de3f07f06ef5db22fecb3"],["tags/Dynamic-WebApi/index.html","8ccdd483fa1a3a073352c93b02886c18"],["tags/EF/index.html","67618e187c997751cd4698640143cf3b"],["tags/ES6/index.html","6d013c500bfdf596f97ab268858508a9"],["tags/EasyAR/index.html","e08953b183cf2fd32100fcfbbbc7dcbe"],["tags/Excel/index.html","0104158f5fda946ddde2bc9393ec6f21"],["tags/FP/index.html","96e0075610f3194438aa68bc0d17f1ce"],["tags/Form/index.html","238f24e76faabaa7f40c32e794a5ae37"],["tags/Git/index.html","f3203064429d98f4fc3cec86b1d43444"],["tags/Github/index.html","196949ad6980559a16483aa23df12974"],["tags/HTML5/index.html","fe1895c27f077e3917d54c2f8699daa3"],["tags/HTTP/index.html","d2d8a24b462e6be58b2fa1cd984062f3"],["tags/Hangfire/index.html","82efded906aec54acd9fe2de0497bf56"],["tags/Hexo/index.html","7a3887525e5d093e7680553e8840577e"],["tags/HttpClient/index.html","4130c4df4a6ee4f3103456ba79dd299b"],["tags/Hyperlog/index.html","4db9d10420edd888794ea722b1237e6e"],["tags/IDE/index.html","1d0b5374a387dbcb5c26728ef0a9719d"],["tags/JS/index.html","9a12226f0336c6835e9d9c4939a8f97a"],["tags/JSON/index.html","19cfbb17b860370ecf773df6e78dbbdc"],["tags/JSONP/index.html","f197d1d5d3fd2b4e622800c10ae87315"],["tags/Java/index.html","1d0d18c8aa895d1a0d07d8bed158e106"],["tags/JavaScript/index.html","2ba3964ded8dbb048276457b25e5d550"],["tags/Jexus/index.html","6c5ee2aa1260fdf49943f223b1eedcc0"],["tags/Kindle/index.html","103d939177692e78135738fca7afbba0"],["tags/Lambda/index.html","86c1170691bb0f7e77e768753a1ff2b4"],["tags/Linux/index.html","0b8da62f71be4fa691e62a0782b15a8d"],["tags/Liquid/index.html","6d1b3a56b66f2ad43b6765328ffef89b"],["tags/Logger/index.html","a87adbc576ef861d6580354b0a099603"],["tags/Love2D/index.html","d9a01e329deeb0c336163ad8a21488df"],["tags/Lua/index.html","b199e662528e73290d35d7c61651d70b"],["tags/MMD/index.html","67b52c0c7d68feac7f9457c6a2ef5729"],["tags/MSBuild/index.html","c0bd56d0874c1f86bb86f6f3deee3998"],["tags/MVC/index.html","cb2da47116985b683896fa5d57e81821"],["tags/MVVM/index.html","6ce5e67ae4bf4d35f8afb3e2ff7f4aae"],["tags/MapReduce/index.html","38ae2b3a59cd4af14d252a32f02c8f07"],["tags/Markdown/index.html","6898400eb714b16393e9364c9287b25f"],["tags/Mecanim/index.html","b697fe60c3625fc789371335f466a6bf"],["tags/Mono/index.html","6587b12c82a54bc74307001b37894e96"],["tags/NET-Core/index.html","d8d3c9c9f738010f4d15c24e2c9f07cc"],["tags/NET/index.html","344c6005e92bdbee5f12d208c5135525"],["tags/Nginx/index.html","fbe0f94c891b97246f9e0d40edd2ada7"],["tags/OBJ/index.html","ed1977bde86de64e9bed97cbf5e15960"],["tags/Oracle/index.html","289f9e6864cbb273e1a21e74466f7e75"],["tags/PL-SQL/index.html","4ee0cb46254855b198fc9fa0cc079a90"],["tags/POCOController/index.html","7f6a4aa9456b86b04b9cf33800499289"],["tags/PWA/index.html","b1acea403dc5f8e1865f6c4f3f439c47"],["tags/Python/index.html","a46d3523f3516b47f8fdbfb2ca2322c5"],["tags/RESTful/index.html","81d731b186c748542d68d6dacce6869c"],["tags/RFC/index.html","c754f6ec8eafc6dbf682de29a96cc5d9"],["tags/RPG/index.html","47824fa0a596ecd1f95c8bdc67fac44c"],["tags/RSETful/index.html","cef91402ea9f1a38b2b43cbc6e4a11d5"],["tags/React/index.html","3cb4be03ea672c6d0091067211b9d867"],["tags/Redis/index.html","444fab7c5bb6fa74fc65512c81dc0bde"],["tags/Referrer/index.html","6ed574dac5630134f3b13861a9850979"],["tags/SDL/index.html","c897064bf39267928ea7e836e3a6a062"],["tags/SQLite/index.html","05387546ebba6118c29c71929e257492"],["tags/SSE/index.html","f58a497669d27de87b153af80f53410d"],["tags/SVN/index.html","86f49bbf59dd042cccb97bb56ebd05fb"],["tags/Script/index.html","49a4e643d7d87e2a88325574468822e2"],["tags/Server酱/index.html","dbdcb3a0c30fc7494514f156ea14c5f6"],["tags/Shader/index.html","9c2e3e38c2455efd54ac50bc55d2609b"],["tags/SignalR/index.html","36df949f29336f0a468ff616fae01aa9"],["tags/Socket/index.html","f93d3b66aa28f5f57f558148e244bbb2"],["tags/Sonar/index.html","45bcb7c8a7b15a6efad9720bce44d7ea"],["tags/SourceTree/index.html","7be75863eaa005463d4899584289f1b5"],["tags/Sublime/index.html","1e6b3b2b056726825695232a50a55fd6"],["tags/Swagger/index.html","b667804d8ce2d17877e28d8509674a4e"],["tags/Trace/index.html","9df5c9ca5ce686299dd8836d64ab088d"],["tags/Travis/index.html","578353d6f8af1c0ebcb53616a8139d01"],["tags/Unity/index.html","0a5afad10b74eae86f7251addfdeb14e"],["tags/Unity3D/index.html","9110f6225cecec52231f7e170f554c0e"],["tags/Unity3D/pages/2/index.html","3cc6a1e498a52e49d590d6136d276cdf"],["tags/Unity3D/pages/3/index.html","8f1956d4f3f79350f372d0c3f163558c"],["tags/VSCode/index.html","955a7d2bf5d308b9adf8f78c246e63bd"],["tags/Valine/index.html","42e4b97e41f53bd8987fcd88bc81590c"],["tags/Visual-Studio/index.html","f151d15efe64715f806fbbf5fa6d3e0a"],["tags/Vue/index.html","16513aa581a1df726d6c221fbc9383f5"],["tags/WSL/index.html","beb9fbc944f2e28db94ab1d1881a4764"],["tags/Web-API/index.html","24721915bc6c002b6d9a3ff2241a8795"],["tags/Web/index.html","d7926e167a4eb627f5375f165a8dbce1"],["tags/WebApi/index.html","a4b4f9ff8794f3188cda8c1ca1b628c7"],["tags/WebSocket/index.html","ed48bcf1331bb2feb3d10b2fff8b8cd3"],["tags/Wechat/index.html","ad2fb913dc31e377e26fa624dd6d2991"],["tags/Windows/index.html","d8a66b811e5ef688399e1f58eee60f70"],["tags/disunity/index.html","ab11b89321179a21a75e5e8a82b9e7dd"],["tags/index.html","8eb3ac0231d8178d95bce517d36eff8a"],["tags/matplotlib/index.html","a18f934dbc4c76a5e04ce52c710226cf"],["tags/njsDelivr/index.html","c4f975ddd060ee6393b57d346fda549a"],["tags/uGUI/index.html","1176947018c4e9b769b639fe112fba94"],["tags/zTree/index.html","51b1ab315c5ed30a88177efbcf995cff"],["tags/一出好戏/index.html","22c472361535dd6eeeecc997251bab3c"],["tags/七牛/index.html","7ff32098fa05d3c61a8f767bc0ec36df"],["tags/主从复制/index.html","cd72d2dcc289c42fdb3054cf6de6e643"],["tags/事件/index.html","359035c35221165fdaeacff54bc36a95"],["tags/二维码/index.html","03b3ed57c0586ea9e7146454b6227eb0"],["tags/云音乐/index.html","fef13191fade6197fc19582d2ce2ec68"],["tags/互联网/index.html","8ef55ea0affd037fb7e44b2f327d78ab"],["tags/亲情/index.html","b5277a6f271a64d20515cc2f9ace2ba9"],["tags/人文/index.html","34072b9a1e8ef57595ad0c0183a02cf4"],["tags/人生/index.html","9e75a532d927f1dba2f1a2e6df9dc407"],["tags/仙剑奇侠传/index.html","ac4a856396c280c86fcb911207778159"],["tags/价值/index.html","e5de0e806cb7db27d9284a88f735dff6"],["tags/优化/index.html","73f4b4b3b28352e8eca10110cf9c21f2"],["tags/全智贤/index.html","f53734f33e2336ba1348e00da8bfa084"],["tags/公众号/index.html","3ce6bd9400578f060cf5fdb81b7ae9f1"],["tags/关卡系统/index.html","e0a9a6c8e2f9f7cf527acd43f403bc1b"],["tags/函数式编程/index.html","9da8e8beb45fdd1ea3441e616387c611"],["tags/别离/index.html","6baa26b07cb556321fee95dfc4d2432e"],["tags/前任/index.html","cb492e9ef8a7af1665cb311b0aa7c698"],["tags/前端/index.html","70925bb30ec66e290ff0c5a65947a366"],["tags/剑指Offer/index.html","5c3bd643eccce6396054404941199577"],["tags/加密/index.html","8b0205b74d084f673c3e86bbce2a78ac"],["tags/动态代理/index.html","224811be7852e59f6d7dd3f208fd66ca"],["tags/动态加载/index.html","a5c1ee6189d4583dbc82e9af664bc849"],["tags/动画/index.html","f21752aec8acb04a97bcac350c03352f"],["tags/单位/index.html","1e548b0f38daf0a84f3f4cb321267066"],["tags/单机游戏/index.html","4c0b2fd57fe0cdd4b166b052c58c8df8"],["tags/印度/index.html","2f00ddffc9637eb17039b028e78a4be8"],["tags/历史/index.html","96112f3c8fab47254957e6c934d37d28"],["tags/反编译/index.html","1ce2ca0268e1e10afa95630167e2e57d"],["tags/同步/index.html","eab49c9d5c34394b25045da80621909f"],["tags/后端/index.html","0d8b05c7da24b126a664fc155ea153f5"],["tags/命令/index.html","fd3e36f0b5f89c29c18ad6001524458d"],["tags/和平/index.html","abf02730ff15ff558a0731aede83937d"],["tags/响应式/index.html","14fc7d8081a20afa77d560d53207cf99"],["tags/哲学/index.html","3bd6249cda0a8a1d3053ce6486830d0a"],["tags/回家/index.html","130a690aa19bcb24a7c9fcee127b0c35"],["tags/回忆/index.html","0c57b85339d0b11eb7ea0b87e9d07f6b"],["tags/回顾/index.html","6b74dcba1feae00a2bd4e21f96a96763"],["tags/回首/index.html","2fabf0c022eddfe26fc481f60210d302"],["tags/图床/index.html","9c6e3aadf719a0f2ce6bcab25e79bfc0"],["tags/图形/index.html","ed6b946573cfe0559b56dce304319cdd"],["tags/地图/index.html","e44ad4f8b1647a8dcf7e97ff144849a8"],["tags/塔防/index.html","5edc5b3510ffb10d2b6fc2cf8ab0e949"],["tags/增强现实/index.html","cda41ca5e358188899583916cc502a2d"],["tags/壁纸/index.html","f14e3ebf45b3e8a6c7437ae7d4beaff4"],["tags/夏目漱石/index.html","7f7d05446b15e8e0786f2da2456ed5d1"],["tags/多线程/index.html","fa61c92fc85b21e9e6fa86ce83fc1c40"],["tags/大护法/index.html","6d0ce2c61243d9671133c631791f2fab"],["tags/委托/index.html","18100fb5b3fada2a23303794179151d2"],["tags/孤独/index.html","d2977b5f4e69a0c80e291dc135063733"],["tags/展望/index.html","7886839216255caad4384ddc00e545e1"],["tags/工作/index.html","bdf53bbecb88632c4cf23bf215d07024"],["tags/平凡/index.html","64605eab6f6085c024a3838ffa5505f3"],["tags/年华/index.html","be858f6b1f6f3755cbfc045349190f34"],["tags/年度/index.html","15f9d34d660a1a96bb78ff10f0baa00e"],["tags/开源/index.html","3adf6776d5620bdd5507150ce0d5935e"],["tags/异常/index.html","b3c9224e04da21e61fc7b2ed45b9067b"],["tags/异步/index.html","7c249c121391e72484bb33329faedd7e"],["tags/引擎/index.html","c093949d63b822e0afe1327dffd246c9"],["tags/影评/index.html","cf4afaa2d313875169d6e2cdce8145fa"],["tags/微信/index.html","1706cc19ca503b5598dab880a1d8d281"],["tags/微博/index.html","73ce655036d5d5b9bed22a37db2e0417"],["tags/心情/index.html","67ca3b48d42daf4a6389187bbe7561b6"],["tags/思维/index.html","f99537a449369d9975cc57c0af2ec970"],["tags/总结/index.html","40f32aaca1c7689caadcaf3514a92cb0"],["tags/想法/index.html","bf523addafb34bdee4194ab9a5562a02"],["tags/感悟/index.html","23a42e06ae93583885a2b04398033203"],["tags/成长/index.html","9157db1d839fa5766f7e98ae76a4cf35"],["tags/我是猫/index.html","9d848b794fe4878ae59df2a570446573"],["tags/扩展/index.html","5dbc06c5f3a6b834cfb118580f007a8c"],["tags/扩展方法/index.html","72483316852e0d6a72a7a641fa0fc8b5"],["tags/技术/index.html","e5b14b8387be848201c189567e1bbb75"],["tags/拖拽/index.html","6e5346e7c3523ee10e070d074c287c2a"],["tags/插件/index.html","9c5a17f7d064178768e72bcf6f033510"],["tags/插件化/index.html","81867dee3b8eb905c8fba8d3e634679d"],["tags/数字/index.html","33e4c23e1f073a4135d19cd98249d686"],["tags/数学/index.html","7f97e6aeed9db996291e598709fe8bf3"],["tags/数据/index.html","e0d88068ee21e8a53e6d659342982516"],["tags/数据交换/index.html","90e1581ccee4cc0040f23c91c3d0a796"],["tags/数据库/index.html","c72bca24099de4c0c2bd148b925acf78"],["tags/文本分类/index.html","ee9c0466bea73b3ec80df03f84eeb33d"],["tags/无问西东/index.html","a70e9ee626b3b995688fd1a808cdc263"],["tags/日剧/index.html","e9b1d39b0223282d52cb823be1b7395a"],["tags/日志/index.html","bd730f64bcc7581e89fc8897b9d93140"],["tags/日本文学/index.html","14973c7d1250d0aad253cbfe8183b2ee"],["tags/时区/index.html","4e6aaabad80f905eb59d0e6e94cdc06a"],["tags/时间/index.html","a42919bee9776c872652b62e8e642f6f"],["tags/服务器/index.html","7cd04016bf1b3ef7b3ee259378bb2007"],["tags/朝圣/index.html","505afcd0cf643fea37d77e98733cf29f"],["tags/朴素贝叶斯/index.html","99136e25be6cd86e915c3d90b4b3ad70"],["tags/架构/index.html","09f488fb308267bdf7d34bf2a7334f2a"],["tags/标注/index.html","0163a608dc09807bc97be8925a10f58b"],["tags/校验/index.html","ff513177d5162493f5c669eb0fe1444c"],["tags/格式/index.html","3c4a018b7c00b7406cb4bfbb8d140a32"],["tags/格式化/index.html","cd7e5bfc3727678845b23545c462540e"],["tags/桌面/index.html","a18a77e7c09ace71e3f5a824c22c87a4"],["tags/梦想/index.html","16f417fcdbeb6568518517754ebb29d0"],["tags/概率/index.html","1cd50978f27601f19a56adf439d3582c"],["tags/模板/index.html","11cbe3eda6bd3809e721ce3464038b57"],["tags/模板引擎/index.html","224d98dc53aa8251ded04307b7f1ac55"],["tags/毕业/index.html","dfe770dcb47972aafc2cc8719c0e4ae1"],["tags/毕业季/index.html","a824734adef17024bfa3e35a7f5d4eb6"],["tags/消息/index.html","2f855800980e762d17c1bf66fa45d9f5"],["tags/游戏/index.html","08812fa0dcaba23b143583f2c23d2c39"],["tags/游戏/pages/2/index.html","e0e71713f8573f470b63e0056ed116db"],["tags/游戏开发/index.html","c61dee29b4ddf4f4c8464101ef648c2a"],["tags/游戏引擎/index.html","a2da6c9e43a4f2278e12c12f19fe71b2"],["tags/爱情/index.html","df885df990a2f1ec258688defca64464"],["tags/版本控制/index.html","9505216c05a7e3a7d122c4917103ffbf"],["tags/版权/index.html","4b7a90351e65551fddd9aa1856ea4bbb"],["tags/特性/index.html","665ef0b434d75a3f2c5790ee02cd4200"],["tags/状态/index.html","140c08dcdc49824dc42a49a91e6756ec"],["tags/现实/index.html","52c402bb9114cebf90a567fc02b42028"],["tags/生活/index.html","6563e00650ecb6f4f916345591b05d04"],["tags/电影/index.html","df54dbe66e523547b114d3e939aed751"],["tags/画家/index.html","9b07bf5dc6a625060bf9e4ad152eee57"],["tags/知识共享/index.html","01fae9768ccf05e1cfa8a494ee427ff0"],["tags/矫情/index.html","668a5dfd734deb6e338dbf9ef3ae2db4"],["tags/程序员/index.html","276ab5f14ea8ad14f2c537918ccd5612"],["tags/穹之扉/index.html","f213e94e62cc7abc14c7ec2712481455"],["tags/穿搭/index.html","f3573d27041d05468e4469e7ee30bc66"],["tags/童话/index.html","56df91c91bc062484eb9a47ae0e04150"],["tags/笔记/index.html","3ed40b63208724a1b22d1e90e9892a67"],["tags/算法/index.html","8e9d835e49abe457a0f00f43c2e3e8f5"],["tags/米花之味/index.html","8259c9f342de5b2c657fd44cf2d0cd83"],["tags/缓存/index.html","3a813e463f9381482926122751f166c8"],["tags/编程/index.html","4c03e275eaed7ad3df6da1b7e4411d41"],["tags/编译/index.html","05ff7ff17e7e785e879176be3b9499cb"],["tags/编辑器/index.html","2cd29a36f214b58a9036a1a22c92f36e"],["tags/网易/index.html","f5352396384d029786c32eeee5b15cce"],["tags/脚本/index.html","0be4fd85e6151b26bc436028fb26cf61"],["tags/脚本语言/index.html","d44909df00903b275a11d93d231c2f42"],["tags/虚拟摇杆/index.html","a62438d403e6459a78e5812c36a8b0b8"],["tags/蛋炒饭/index.html","d047ea8cb9975f37c5b35496da46f04e"],["tags/表单/index.html","46da44c190ecda2999bbd817855901e0"],["tags/装饰器/index.html","06fcb4aa7847529dfed57813775a32cb"],["tags/西安/index.html","6e9347ebee873842bb33c394912b26bb"],["tags/计算机图形/index.html","bc4ae694a1ee6afc4076975c60c0cc82"],["tags/设计/index.html","02d3c29d5563813ce27edde0379105d5"],["tags/设计模式/index.html","4fd8198cf550149289b04ff42f9118fb"],["tags/访问量/index.html","5982b25eb35296c6d3534e8a8b037136"],["tags/评论/index.html","03b893e3716452010af90ebae6510e08"],["tags/词云/index.html","3dc6158fe60a259b553e8fca3ea88a76"],["tags/诗人/index.html","7f6bc0f9deade77e11e24b83b9a6cec5"],["tags/语法/index.html","c3ce6ad815592ba65f58095773363256"],["tags/请记住我/index.html","c800eea8960d38a2ecf471dcb3239f49"],["tags/读书/index.html","c4952df35c73ec65415f858c03a5a059"],["tags/读写分离/index.html","7dd97fe32f7dfea9e88603975eeccf17"],["tags/调试/index.html","6b6a9dc6b5c3d2a1af14d78e21988a61"],["tags/贝塞尔曲线/index.html","f5ef183e196e4d3d8bb896fdaa89f4d0"],["tags/贪吃蛇/index.html","019d4acd793bb99f51388d17bba245fb"],["tags/资源提取/index.html","4b7721a39571dcb730b69d3d0de5810e"],["tags/跨域/index.html","75ba0449087a318565ed24dc3fb3472a"],["tags/跨平台/index.html","e57b7a7273a518ca90c3af294d8c5187"],["tags/转盘/index.html","146fff618eef5baff6d33b6cdb90a609"],["tags/迁移/index.html","936739cfb54203531e81c6f1195cb647"],["tags/通信/index.html","1924525e38c7984bfb64fe53bd361010"],["tags/邪不压正/index.html","a16c8ce97be00a089e94306a898e4025"],["tags/部署/index.html","e4995fddfaee2101b68ff09b168fd270"],["tags/配载/index.html","cabceeab0ee0b598945335d16508e456"],["tags/重试/index.html","2e04d4833e11a971a13f4d996bc6e8c8"],["tags/长安/index.html","4b95b5f6bd5f5d41041869a7c5ca8b2f"],["tags/长安十二时辰/index.html","d6568a28d6294bec894d069703e98eef"],["tags/阅读/index.html","82a7a20b832d7d8ed30ed07559c69a4a"],["tags/阿里/index.html","33958ef18d39dc64157c37118cb2ccc1"],["tags/随笔/index.html","60dc0c9b4980e9e141a6664a7ff90acb"],["tags/霍金/index.html","914c995268839fb4c52b5f4f123e9868"],["tags/青春/index.html","309994cd59730d0577e08b9bd4083899"],["tags/面试/index.html","d2a0d323c7217625b3b6994a4235f9c8"],["tags/韩寒/index.html","26c15c4a5e16676b7a1e4b7b7f5d6e63"],["tags/马尔克斯/index.html","4976a134db5efb8571b5f6bfac5da001"],["tags/验证/index.html","a8cd91b7f70063187b03616e0aada67d"],["tags/黑客/index.html","454ca826e2886d92e3b4ed0df70538ac"],["wiki/index.html","f7e05b78155e4d9bb67977b62eacd0c3"],["works/index.html","bbdc7bf7436d4063b27b4beaa0480a69"]];
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







