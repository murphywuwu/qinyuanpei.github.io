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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","b9e45ccb3061f514385f429813b5638a"],["archives/2014/12/index.html","98c6a243409fac096a6ac5f6ce6b767d"],["archives/2014/index.html","59dee95c5ec813e37e4e7a46d25afd50"],["archives/2015/01/index.html","4bbfaec30abe3613b8d697b5c7897f1a"],["archives/2015/02/index.html","d22b615aff82121f34f3d94f3a1c6d9f"],["archives/2015/03/index.html","88cca45bd23f9c3fb335b8c598af9d66"],["archives/2015/04/index.html","2a6e6fd5fa4bb98aa0fce6712818b242"],["archives/2015/05/index.html","961f016ed603040af86eb655a0dbd0c9"],["archives/2015/06/index.html","f85fcdb4b4fb7793234e6e231f54694a"],["archives/2015/07/index.html","065ee4f4be57bc50a8eb44dab8c6982a"],["archives/2015/08/index.html","fae1090564cb1cc4e007cd89902b71fd"],["archives/2015/09/index.html","c1849eafb85e70f5991583839411ff5f"],["archives/2015/10/index.html","73895859131cb4705a84268b60c6346f"],["archives/2015/11/index.html","f3ecdba8c9a59982092d8cafa6a8c772"],["archives/2015/12/index.html","1648c08e3aa5c51f75d1d331ada52b49"],["archives/2015/index.html","b7c035cf63cb556552317c7207832fbb"],["archives/2015/pages/2/index.html","85b7b67117b2ebe211fee00aa326859e"],["archives/2015/pages/3/index.html","7f3491782cc49cb2c1e798318a61e2f0"],["archives/2015/pages/4/index.html","16cde78e9a2f36436d1c7cab2b6d98a3"],["archives/2015/pages/5/index.html","2c344b5bd197076604436367b6e44ad9"],["archives/2015/pages/6/index.html","edc327d32751466bd3f0b86430e9f835"],["archives/2016/01/index.html","8a37e6a40d5c68c0064203fdaf37f70a"],["archives/2016/03/index.html","12418a4cb3133b32001613d3f53c3656"],["archives/2016/05/index.html","0d9b98ad21ae0aa6f43f870fe123f7de"],["archives/2016/06/index.html","6df22b1d60def18d543f5b772ab58609"],["archives/2016/07/index.html","0619dd49c64eb96a0fec5da741691a59"],["archives/2016/09/index.html","751329c53ecf31883e5fbf07670290ea"],["archives/2016/10/index.html","b8f6ef6e43997fae7e002d207764f57e"],["archives/2016/11/index.html","0559f50da52c1de8fc82e863ed3fc9c5"],["archives/2016/index.html","eff73cf614b020dcd0a9b4cbeaeb987f"],["archives/2016/pages/2/index.html","f2ef34e72c9e5f2967c440a730cc1be7"],["archives/2016/pages/3/index.html","6dafc170dc31de3f96cb9396faaccbfc"],["archives/2017/02/index.html","dd9648728826c469364476e0445ea654"],["archives/2017/03/index.html","dbcd27a1d9ac388514b160798f48351f"],["archives/2017/04/index.html","2f387b0de099a09e5130a5104fb09ff5"],["archives/2017/05/index.html","324ea182b4694cea8f2befe6a6cc046d"],["archives/2017/07/index.html","e2112cdda6c9f4f0111662670274cbb8"],["archives/2017/08/index.html","f9326d24dba9f3e938ad8f9b8b11075b"],["archives/2017/09/index.html","6221744ac4d251ec308ab169ad002637"],["archives/2017/10/index.html","bafe16c566a3ef5484249455902d3da3"],["archives/2017/11/index.html","1121b9ef3298a024fc1186e815943705"],["archives/2017/12/index.html","9138ef20fe6a247dd6454e55c742603b"],["archives/2017/index.html","8cd47214b6e6b4416940c362d515c691"],["archives/2017/pages/2/index.html","5f1ca3a84acb3a438661d4ff38e34ae5"],["archives/2018/01/index.html","e6133abe887bb90f3e5740b11a50131c"],["archives/2018/02/index.html","c08fa6762974776bc78b1343575c7555"],["archives/2018/03/index.html","3ee9739f45c7fc28865327f9ec32e430"],["archives/2018/04/index.html","2464ab636f910a6012c982ca6f4189d5"],["archives/2018/05/index.html","141d07fe9f13684bbb16f91f8625f89a"],["archives/2018/06/index.html","b46ad067626f048e8144b2b92d8e2c56"],["archives/2018/07/index.html","71fabb9305cd096565bee78d714541a3"],["archives/2018/08/index.html","1d5738587cbb97ce14e7814da20c9bb9"],["archives/2018/09/index.html","266149985ac30b269432c1240e4c2a58"],["archives/2018/10/index.html","16df235eb5d529eb5e2e5406b8d022d4"],["archives/2018/index.html","82ec491d59aabf7641379e26bc6843d1"],["archives/2018/pages/2/index.html","e64f9d759c7baa22e5ddf70aa217931e"],["archives/2018/pages/3/index.html","458f62ccbe7343c7b058f978dc617b5f"],["archives/2018/pages/4/index.html","c284f7d7385c08e952be450998b788c5"],["archives/2019/01/index.html","1fd817126515ab6f9846d57260c18618"],["archives/2019/02/index.html","d344e3261747c9f21c6772965322a5b5"],["archives/2019/03/index.html","de75654d9b29c14010f53c94bb06994b"],["archives/2019/04/index.html","304856c6d44bfd4a8baae717cb59d4de"],["archives/2019/05/index.html","32697f7d4818a704388e80cee29daba1"],["archives/2019/06/index.html","825098be979875329a6c7c3729e23189"],["archives/2019/07/index.html","81a2af5064fbe1e67fafffc24b6ef6e8"],["archives/2019/08/index.html","4522e820e2e8bb53a3f50bd3e8b342b8"],["archives/2019/09/index.html","34b0262b72ad01a613c75ed6bc25fbfc"],["archives/2019/10/index.html","9446d05c0834299a2d9b53e881e950c7"],["archives/2019/11/index.html","5698da3de4743967d81e42cd83535cd2"],["archives/2019/12/index.html","76289622984e65396f88ca5e1705766a"],["archives/2019/index.html","288b12e33a10a47a4a783a5198ad9ba2"],["archives/2019/pages/2/index.html","0b34326e0e77ef46c3274aba17262c0e"],["archives/2019/pages/3/index.html","e9b0ed2332ec93d872ac867f21ffbb28"],["archives/2020/01/index.html","c40ceaad21e2cb9b2011a6ecac1a680a"],["archives/2020/02/index.html","e97cb2279b0a0f34df0c46b123fcb9ae"],["archives/2020/index.html","9b106c10d26e3a399935f90e17f362d6"],["archives/index.html","f85ad0b7bb0012bfaaf704f609683db4"],["archives/pages/10/index.html","ebc9b145709d83fd31354cd7724dacaf"],["archives/pages/11/index.html","14cf70f3d090f1afab561ef7748d8212"],["archives/pages/12/index.html","6030c5e5cb2de832fe568b759c132256"],["archives/pages/13/index.html","06e04fdb554986e0af28c79fb9dc6d58"],["archives/pages/14/index.html","5d693f56e42bb9214775191e2bc63cba"],["archives/pages/15/index.html","bd2ad27fdb5bbb2a75d44f595b8dd006"],["archives/pages/16/index.html","cbaf93d3cd879ad6efb84724723e730d"],["archives/pages/2/index.html","f9e211ef4644efea219a80741c26ae3e"],["archives/pages/3/index.html","fca4960efff5d2c2a9ac512154dbc6ca"],["archives/pages/4/index.html","29228204828edb8876c3f8bb98485964"],["archives/pages/5/index.html","c1d4aa0ca2d891183548066861cf0a92"],["archives/pages/6/index.html","7308e86d9b8036cbf44f4cc68124b503"],["archives/pages/7/index.html","4cd950ddc3bca7fa79ece7fa3d3cd473"],["archives/pages/8/index.html","57d580271c5d78cf434e29d506000406"],["archives/pages/9/index.html","cfdc883dc7995fb99b69d1d3b3278329"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","5f39bde69c77a5d0b5dcdaaf62319ca8"],["categories/Unity3D/index.html","d7ffe9a07faf06e4215d6c404489f31e"],["categories/Unity3D/pages/2/index.html","44e3e3c4d5faa737e2b4c25e26e58077"],["categories/index.html","c88f1a07d9e80378879d80032d1368aa"],["categories/人工智能/index.html","8fae61fb00f22360b36c9da2ba6919b0"],["categories/前端开发/index.html","6e0494e04b5057eb9e7961841e2012ef"],["categories/单机游戏/index.html","447356e22a9f43021f4b646df8b6fdcc"],["categories/开发工具/index.html","839740a3348d5b66dfca0c7dc063004d"],["categories/数据分析/index.html","835aac30e39fc1bbdc7c810af50702c1"],["categories/数据存储/index.html","21560f7afaf751057cc19e354b8fd4bb"],["categories/游戏开发/index.html","fb791383085a228ef69a244524148b00"],["categories/游戏开发/pages/2/index.html","e3526a5b4cf7b63cd88ff3db74eabd19"],["categories/游戏引擎/index.html","e69514d101ac0b5b4f9af8d6505d0b1d"],["categories/独立博客/index.html","b4f6906978971b3404a8c313fdbb204a"],["categories/生活感悟/index.html","c26c6b78ccdb8c48dc767421cf5d191b"],["categories/生活感悟/pages/2/index.html","fba706f7bcb05f80a215b52c204d0f27"],["categories/生活感悟/pages/3/index.html","b851402344531e72df49bd770a487e5a"],["categories/编程语言/index.html","ba47dfe0b81439102d952f885063838f"],["categories/编程语言/pages/2/index.html","337938bffa0c2874516048b9864eda40"],["categories/编程语言/pages/3/index.html","48db6dd9f7d2eb2b71668476b7a5427b"],["categories/编程语言/pages/4/index.html","e48ac4298f59ac2e454f9eca40dc6f6d"],["categories/编程语言/pages/5/index.html","d8ca71d913c9a204ab67ac5680aabb1d"],["categories/读书笔记/index.html","9ed0d3c3dfc4b40b5f794366cdb4fc6f"],["categories/读书笔记/pages/2/index.html","c81f90fd8793025fde1b178c640106c7"],["index.html","d3386a36456b1ce826752917bbf362e0"],["movies/index.html","98ff2ca407e6c35950e37edbe8f418dd"],["musics/index.html","5b3f14fbcc3145f9fa7cab65acefaad6"],["pages/10/index.html","1ea24a2ac1eed621f4acf86927d7f674"],["pages/11/index.html","3e4bea63c04f531a115a2e5040cd78c7"],["pages/12/index.html","bad37fcddb65b00e1e04c9732217dcea"],["pages/13/index.html","39b3456e342def52f7751a1541bc653a"],["pages/14/index.html","a3a5fc4eac18c286553f9d40409569e2"],["pages/15/index.html","d126df3d9f3194e6eb14abc0e5404fcb"],["pages/16/index.html","d9d18bf0721d47a25d4019cb8ecba1a8"],["pages/2/index.html","d9b9de94fc6d60a3c28d7c0304858f0e"],["pages/3/index.html","56cce08735ec2e97eeb8f4a6614c6ae4"],["pages/4/index.html","b51304e4594937568a739ea72421b1ce"],["pages/5/index.html","ee6ec94ec501b6e36edab563637c4219"],["pages/6/index.html","9863f0032741bb12f4d08c68357580da"],["pages/7/index.html","4d9460e9fdb60ec153065c1d6cd0a6e0"],["pages/8/index.html","366e10ae0cc778d917a0675721f290b9"],["pages/9/index.html","cb9dad4f598620be7af01a6682be1562"],["posts/1059499448/index.html","935041ee9832a54c7287bfe12f395dc3"],["posts/1071063696/index.html","c3eedee0b9d8fe872b735b6553f2d87d"],["posts/1082185388/index.html","424831f968fc8bdad34b6f3fe9821800"],["posts/1099762326/index.html","3a13f2cbad2ca555b88bfff0880b3650"],["posts/1113828794/index.html","fcc616e65faa05fea413c0e5244efc16"],["posts/1118169753/index.html","9eaac634c5e4d0abca2c01ea164915dd"],["posts/1122710277/index.html","58b514753420f29f0e4d78a3ead74dbe"],["posts/1124152964/index.html","aa464f29b335f781255b751a42ab6a50"],["posts/1127467740/index.html","c49b249aa0c4fdfc73b5c4f967a5239a"],["posts/1150071886/index.html","c0b9044c847c9d78098507f917954cc5"],["posts/1150143610/index.html","64f333f99ad4d78087157a1dd8b13c4e"],["posts/1152813120/index.html","3996396b6ade2027033033c21c8afd97"],["posts/115524443/index.html","5a5ce4c3532d06fba0ae82d41b8c02a6"],["posts/1156673678/index.html","152c534452e544dc91be9c8be5cc9457"],["posts/1166840790/index.html","7faad6da49310337430abd9d0e7d8e55"],["posts/116795088/index.html","33d5e9c59ef31a8249631f72920627aa"],["posts/1176959868/index.html","202c8f2e6d2d266e41878a2a493bdb6c"],["posts/1190622881/index.html","9e9c07bea7eac0ac17612a87c1793200"],["posts/123663202/index.html","b1a70ceeebdb92f231dbd33f542cf9a8"],["posts/124807650/index.html","2453e75191f16fe496fe9863c9999e70"],["posts/1254783039/index.html","d819488da5f1aa9c6824d35ad6dae439"],["posts/1320325685/index.html","99892d710b075805985e8b0cc9fc810c"],["posts/1329254441/index.html","db74ccc17850a1ba758cbf98f7914953"],["posts/1357715684/index.html","68523be1b80c55aa61e3583fdd04481f"],["posts/1358971951/index.html","c6858eafa59794b299aa6530be328c9e"],["posts/1386017461/index.html","40917d0cdf9d562fa9edbd5fb1d0e419"],["posts/1394521917/index.html","94c0b0c105ef49c901e042197f53af26"],["posts/1397717193/index.html","5ca875a4c17146bf04e841d3c4de72d6"],["posts/1417719502/index.html","c7e08b343727156c3c94fc01d04f64b8"],["posts/1424645834/index.html","5932afe24e680ad0f9abedd45e6e2148"],["posts/1444577573/index.html","6d8c2053b5e2bef6080798bb1d3bb2c0"],["posts/1467630055/index.html","288aa1b724f4c53e946ed309e4e46376"],["posts/1478979553/index.html","664d3b5bad4213bea7fe6dbc073fe360"],["posts/1540537013/index.html","a38ecaeafddb02bbd96ac94fa61c3476"],["posts/166983157/index.html","28b0359f71454475b5a8aa96bed4636a"],["posts/1670305415/index.html","7e3fd3d88b948174c88facf64a975842"],["posts/1684318907/index.html","4759eafb8332f95140a0543e3b275656"],["posts/169430744/index.html","5bf6a23e43174c5a69141a148b050890"],["posts/1700650235/index.html","f143f8487e08b61ef8ac67fe924543c7"],["posts/172426938/index.html","eccfa219b46b5196b160cc3c4746432a"],["posts/1836680899/index.html","53ac487527b6618218cf4131331e7df5"],["posts/183718218/index.html","1cf2ade41664a1e0e5f58aa8e6f26a43"],["posts/187480982/index.html","fbe00f8df03088c63225a23665198c80"],["posts/1930050594/index.html","3ad2f47e80f511339bd3f7b8b4d08dec"],["posts/1933583281/index.html","b89b73f6717bb0173b8c7302634b150c"],["posts/1940333895/index.html","62480102dbb41a8a0b74f25b4bbcd346"],["posts/1960676615/index.html","1000eb9be276f4ef0ff8d351a512d682"],["posts/1983298072/index.html","ce156472ee6ec3659b3e4336eb479af0"],["posts/1989654282/index.html","bc82d180821459ed4942e35a8351df5c"],["posts/2015300310/index.html","fcbab3b3138409df1197954afb32d882"],["posts/2038378679/index.html","3a606ef5caeafc0eef56fdbeaed571ba"],["posts/2041685704/index.html","ad75d28ac79f8264acb9eae50d7bac9a"],["posts/21112647/index.html","9b622e2870590b0bd8207ded9b1cd7dc"],["posts/2158696176/index.html","f20c9e4360f9e9d48522772e5aad199a"],["posts/2171683728/index.html","cd5b187a59e8cff70a7cf7e94b08028d"],["posts/2186770732/index.html","b96aeb715dbf51a312898d9a0b04b7be"],["posts/2275646954/index.html","14b1f96b720b5528f76b510b4d6a1977"],["posts/2314414875/index.html","ec04aed961b1db762dff37c48cb72a6f"],["posts/2318173297/index.html","608627ca95d47ff5e62670f91849cfaa"],["posts/2418566449/index.html","ce5cabec84433fb24cda5215483f0b6e"],["posts/2436573863/index.html","572d1662f819f31ebbec26f55d54fa5b"],["posts/2462008667/index.html","3657b5abd4bc300bde17c0d032b19375"],["posts/2463121881/index.html","832578c838853ab20dafa6f5620ce1f3"],["posts/2527231326/index.html","ee68b3477d9ed20991625caa4a952516"],["posts/2583252123/index.html","41af89ef24069cdb6fe7cbfad3b3b055"],["posts/2613006280/index.html","2b7d4171931aabbd5c70556e1b4ea86e"],["posts/2617501472/index.html","d518153a87f04ac745647758524cfbe0"],["posts/2676125676/index.html","71feecc572bf7d92767b7406916b7461"],["posts/2734896333/index.html","9f3bb5254d73d0d2cad2816031d4a438"],["posts/2752169106/index.html","b173ab114e0cacd19d6996eb50ec1dc0"],["posts/2799263488/index.html","95ca1cf4a657a55592a6bda8a146fbb3"],["posts/2805694118/index.html","ba9e5eed9afbe5c627b8a3e2ab9d44e0"],["posts/2809571715/index.html","a2644b42c754787ad0555453166c6945"],["posts/2822230423/index.html","21b5359f1a5a6a05da8e7d9f45821e0d"],["posts/2829333122/index.html","5e8b68c9575d906e7d8b55d7cffb9bac"],["posts/2911923212/index.html","50a85af4bd243b38512b4e9b3a2d9133"],["posts/2941880815/index.html","ecba63323cdbf0d5ac200149e48a3d3c"],["posts/2950334112/index.html","08df87e2d5e50f2cd7e7384fa1ffd892"],["posts/2954591764/index.html","072949245021768b1818dd9668988e46"],["posts/3019914405/index.html","9f74fc8176451954635de4934485526d"],["posts/3032366281/index.html","a284613e806c3547556d75571b64d8db"],["posts/3040357134/index.html","c04064b8a23fe942d830beaea351327f"],["posts/305484621/index.html","91c0dee8b6d6ede0086d61d99e5c3042"],["posts/3083474169/index.html","7a9a9bfc547992ede8a750dbdd325d64"],["posts/3099575458/index.html","e388e01f170598d4d28736f7fde457cc"],["posts/3111375079/index.html","751ee57110a1226dc751f9616a7d610f"],["posts/3120185261/index.html","ad6662a5fd14841f2d7ddc0acb67705f"],["posts/3131944018/index.html","93d2b18ef31f6753e1e9a4a20c6cf514"],["posts/316230277/index.html","1ffdbf3613b20c86847f55e7f4778923"],["posts/3175881014/index.html","cbe6c29b4905825ec3284bc4b100757d"],["posts/3222622531/index.html","daf0fc7def3d04f412564915e85167de"],["posts/3247186509/index.html","1ab09b1154c72de61fdbdf46aa343663"],["posts/3269605707/index.html","090fa599ff2bdbab25ec66ae1b0acd5f"],["posts/3291578070/index.html","e50ae0101d49c9cef50e7c0afb83f3cf"],["posts/331752533/index.html","b38bf2abf2f8b058f30702d183f0ec5b"],["posts/3321992673/index.html","34b4099a9d350f32a14f44ae8b3abb72"],["posts/335366821/index.html","8183fef1421e400ea19a843ed6de8110"],["posts/3356910090/index.html","a92579123e7a434af2e9bd5455271494"],["posts/337943766/index.html","333bf16bd7e4538f294566682301d459"],["posts/3417652955/index.html","2e3553d8fd8aa0cb553b21f872735dbd"],["posts/3444626340/index.html","71d321a53af8b93a6607048c023bc9c1"],["posts/3449402269/index.html","eb4dc14366126fb80e8b277f095c46c6"],["posts/345410188/index.html","4d786a9e6731408a62dd79fa828b7334"],["posts/3461518355/index.html","f88a86572b3a135a01f2bc6097249072"],["posts/3494408209/index.html","3646ba5bff8cb073a0dad6bc17631a78"],["posts/352037321/index.html","d72f4e013057c4ccb052aecbb8c717dc"],["posts/3521618732/index.html","da561b0c4d8916957aa3f3438456e7b0"],["posts/3568552646/index.html","c81c04e1c537a870b28d9630d59a6587"],["posts/3603924376/index.html","55824af781f71f2055baa92697e62f8e"],["posts/3637847962/index.html","292b46332f5b48ac5afe5c8bb4b67ce6"],["posts/3642630198/index.html","c160f18cb0ffdc8d6df1df440af78414"],["posts/3653662258/index.html","fdf2bc7bee7018db3de73ef89333a7fc"],["posts/3653716295/index.html","85ff31bf371b138ec103563d43ee55f7"],["posts/3657008967/index.html","9a815fc5157145f70435bf60032544e1"],["posts/3668933172/index.html","91d5fda1d0ab9ae92d9f16d31ee81b2d"],["posts/3677280829/index.html","d34efd6794aa980335659763dd6b7f62"],["posts/369095810/index.html","ba78eaa7618b0e92341bdb90904309ac"],["posts/3695777215/index.html","fed276a287aca920cf76f674dd6dfe86"],["posts/3736599391/index.html","36e4a0eb030dfcadf1611dbeec953234"],["posts/3742212493/index.html","87c7d7df519a91a9b764902f065238c6"],["posts/3782208845/index.html","c014f45cad5030e1a4a13e5e1dc677a2"],["posts/3789971938/index.html","d19f599da1ea167420df2cb782fcb779"],["posts/380519286/index.html","69534a8355265126816bc00a99e95817"],["posts/3846545990/index.html","da98be85f90b81fac39724e9eab1ab39"],["posts/3873710624/index.html","35d1c28f8fecb57ce63f5ed3fdbe762e"],["posts/3959327595/index.html","a37180d3bbf0ff11fb095daab89e8f49"],["posts/3972610476/index.html","489ebd406b80f4de981fa32240900c20"],["posts/3995512051/index.html","9979bc6ef8f056196e74920d4fb983b9"],["posts/4088452183/index.html","9044d257305afc8a67607b15d50f6635"],["posts/4116164325/index.html","935793d4d92f2ff9b62cd1c440b8c5d2"],["posts/4158690468/index.html","e11d7faba613cd90f14841beb8412204"],["posts/4159187524/index.html","c52648dabc2470995ddf31342dc921a3"],["posts/4197961431/index.html","5f16e704e4fddf5317d0fd853856c3db"],["posts/4205536912/index.html","a10ef5628062b06564b603857116e4bc"],["posts/4236649/index.html","6dbd8d8e979ebe330a3bd9a46466cf64"],["posts/426338252/index.html","f39f607d8375a140cfd5c95c2e45c1d8"],["posts/450254281/index.html","fadb91f94cebaf9e1ca02a60cdd9c2a1"],["posts/4891372/index.html","94a2a7b1e2e4d0ccaaeb83bfe0065269"],["posts/569337285/index.html","d87803c4159350527fc30e8f5d5f28fd"],["posts/570137885/index.html","62c1bc1671e8ec422538bbfda682dbf4"],["posts/570888918/index.html","5987db740c9fc7391c714b6ad65ae42a"],["posts/582264328/index.html","f815aba19bdb896c74823843afcdca23"],["posts/632291273/index.html","2238a6ead586ec36be7eaf0aca5b039f"],["posts/70687890/index.html","65eb6382678bbaa61cedac3dbc418878"],["posts/719322223/index.html","d297b7b8d06a46b275b88ce449504a5f"],["posts/720539850/index.html","7559c78380c48ed42b24e5c835415e59"],["posts/786195243/index.html","978c6b7eb078a6b800c419b859b6de1f"],["posts/795474045/index.html","2fd1b1b3303fceee03a2aa1814a9dc86"],["posts/815861661/index.html","cceb1a2743490c84d6a733a5370cda05"],["posts/821259985/index.html","595ae603b035eb81b391b978d8a0aa1a"],["posts/828223375/index.html","c8aa7509adeb8d69cc44fbd72fec4038"],["posts/887585917/index.html","6dfd7328aae8270d41ab40a521c36fcf"],["posts/888549816/index.html","5c30cc23d96c5cabfaf185bfcad1fa4f"],["posts/906436376/index.html","414d408df411cd2d7131d0c071f3d823"],["posts/907824546/index.html","98325c6c58b424b998476ab081498dbb"],["posts/927393529/index.html","71b22f17264e52f72ba6a6c31e92394d"],["posts/94443781/index.html","7fc4607193af0d6e36a9ebaf7f760df4"],["tags/2014/index.html","75276cccd1c40d7476310255e0f9daf3"],["tags/2019/index.html","3fa94c9c66e39aa1687224c95966c57e"],["tags/AI/index.html","62c3691cfc57d85ef67517fa1a3de82e"],["tags/AOP/index.html","f36b5d588eb7b47ca05a5d681cf77893"],["tags/AR/index.html","2038f9bd853f42883b38ae0d3d03b788"],["tags/AssetBundle/index.html","3ad2bb2d6b72328025deefe2566ab4e5"],["tags/C/index.html","951bb6bbc444478060a73a139f02a923"],["tags/CDN/index.html","a16ba97b15268a67de616d4aba820321"],["tags/CG/index.html","e547a438e8cd39575e77a79d1ea64162"],["tags/CI/index.html","729df9777ddfd5890f181582bfba7ce2"],["tags/CORS/index.html","955936b1452bda06a30971d8ab91ee98"],["tags/CSharp/index.html","f56c7d56a0d13a514c68027718545228"],["tags/Castle/index.html","6e4207c118761ab649dd87fe7a93df09"],["tags/DBeaver/index.html","a8f5cf3f6ea60c5d17f1f2c5ac08ad9e"],["tags/Docker/index.html","d4e0bc1ade2ffe2b4031e24e4fc46d45"],["tags/Dynamic-Proxy/index.html","cd0ffd97158526aec00b367d22ff3a6b"],["tags/Dynamic-WebApi/index.html","691e782d86018d8f0680e44ec1bc5d70"],["tags/EF/index.html","e08152f6f4dcee4bd965093dcbfd3846"],["tags/ES6/index.html","b70b449011b3e610ff43ae8d2b12df4e"],["tags/EasyAR/index.html","eaee99f12c77cb2ff898a989d6b5ebf6"],["tags/Excel/index.html","3da2eb150dbf336cf7773fefd214120e"],["tags/FP/index.html","09ebfcdaabd1c8642ea168d1aae02ceb"],["tags/Form/index.html","85c2a52f7d36db5804fdbc6a8f3843e6"],["tags/Git/index.html","ff4a91c0d682a3191e6714652e0a8a3c"],["tags/Github/index.html","2e9304162d114a1bc1333291b1c2a054"],["tags/HTML5/index.html","5119a88f672087ec87c73e844f4f931f"],["tags/HTTP/index.html","115c730c1911ae9cbe0887d3b257cbde"],["tags/Hangfire/index.html","9261574e0ef5cc90f923255f418537f5"],["tags/Hexo/index.html","785ca5a20c1c3125b0da311506ad010a"],["tags/HttpClient/index.html","dd9be7a7569fdb5e8a4d8f8f59ea16e7"],["tags/Hyperlog/index.html","b0162c6ff6ebce8691ee060dbf6d9ef3"],["tags/IDE/index.html","54027e446623dd752e4ea1bb88ca7496"],["tags/JS/index.html","215aad23d01aacf60b4028410f14cfe1"],["tags/JSON/index.html","63938907e71995975a8a6867a6759695"],["tags/JSONP/index.html","78a147b7831c5958f35b09a38b83348b"],["tags/Java/index.html","2b0ad1f50aa011efd51ef3e04983ccce"],["tags/JavaScript/index.html","5984e96d3752c4c67aee6bacf712064d"],["tags/Jexus/index.html","d78a6d822d4ce41897c4329f16a12dd0"],["tags/Kindle/index.html","12fd3d12236e1ddfa154ea2ab12d6dad"],["tags/Lambda/index.html","1a45711b58a50605a57bf364c5865bc0"],["tags/Linux/index.html","4c834ed1f10abe51967b477ca5c0f3ef"],["tags/Liquid/index.html","0592c3baee6ad4862c0614f7cf861d77"],["tags/Logger/index.html","2c2494244d1620886736b168578897cb"],["tags/Love2D/index.html","bac1cfc51a90da99ad235d117ae4f220"],["tags/Lua/index.html","8c6ec5389727354c395351b791621c04"],["tags/MMD/index.html","a96fc73a59a75413578e3526b9bd95b6"],["tags/MSBuild/index.html","f3b7bea4dbc8d7bc20abb68d31cd49e0"],["tags/MVC/index.html","a1b28222f8e31b10304957120a7940d3"],["tags/MVVM/index.html","86c4a4fa5561c386a9ffc85cb34d9672"],["tags/MapReduce/index.html","430b06ab248b4e3c18a401699598514f"],["tags/Markdown/index.html","81983e3bc9a4855b68507333b51613a6"],["tags/Mecanim/index.html","e963688d91f8030e62c54f45d821a558"],["tags/Mono/index.html","ca8c2d6e665fe89d028058a248e3d65e"],["tags/NET-Core/index.html","ee012272b8c55f5912c8c958f0c2d65a"],["tags/NET/index.html","0ce54b724cef1c3618c2d44e96c6d9d3"],["tags/Nginx/index.html","138ac1ef7bd7493a5c987482f0067959"],["tags/OBJ/index.html","f6f2076e95916ab8988df299aa4338ae"],["tags/Oracle/index.html","ae994b87e6a3eef772327e653d35695a"],["tags/PL-SQL/index.html","c797c7323f899a7100ec23c6b74ee87b"],["tags/POCOController/index.html","79fc9bd603f1b9902e9ef88d74ffbc29"],["tags/PWA/index.html","3eff8d603faf913dbb2c0e9bc82fd2d0"],["tags/Python/index.html","2928b65eb8a3dddc6d3ec9d32b9c9ba3"],["tags/RESTful/index.html","3023f278e7225c86b6d9163f05a8f351"],["tags/RFC/index.html","fd2a0d0f82830c4977a32e2ae67c6464"],["tags/RPG/index.html","02e0b04e0298b43318934638b9121093"],["tags/RSETful/index.html","61a72358c5e1baa1983d885c329f868c"],["tags/React/index.html","fc00bead7d5902ae8e43f2c24f1c12ff"],["tags/Redis/index.html","0d0180e32f198fc06282f6d13b137dbd"],["tags/Referrer/index.html","5b66b841e22dbc4f3a16eef6692d6235"],["tags/SDL/index.html","8c90984fed1d1976e44424538317151c"],["tags/SQLite/index.html","b4d34aaef784c2234f16f6373f4d1bb5"],["tags/SSE/index.html","d03b3d717061ccd494c7c4c722c27bc8"],["tags/SVN/index.html","ec4aa89fa1b34e24f20801779a1967ca"],["tags/Script/index.html","4983d081b5148270a31d08d4e1a5c994"],["tags/Server酱/index.html","bda3aaa7582739443f37378a9897eec1"],["tags/Shader/index.html","d467431d2338467aa071507371e2c0c6"],["tags/SignalR/index.html","12c9e3d8802ed66defe28ed0b09952aa"],["tags/Socket/index.html","267fd435e6acc4d81d472941c818b330"],["tags/Sonar/index.html","963789af8bf1cf9dcbab8a7805615a6d"],["tags/SourceTree/index.html","40f741c14225bdc1b30ee3eb5065824e"],["tags/Sublime/index.html","df391ae29877686ecbda3bcf7d98c221"],["tags/Swagger/index.html","360af5278bf0b5c5dc1989582676613f"],["tags/Trace/index.html","ae4707571318fbf46971dae39d717177"],["tags/Travis/index.html","119beda421dae6b5cb0d8c8b865848ad"],["tags/Unity/index.html","2d5b1847d29dd5d85c14997dc98e656c"],["tags/Unity3D/index.html","3c8185a6b2c9382aad42b4d0cd8ab5a6"],["tags/Unity3D/pages/2/index.html","14dfabc7226276fd71383586c12ce5d4"],["tags/Unity3D/pages/3/index.html","d6abeb6f3ed19fb31c1859852c6936a7"],["tags/VSCode/index.html","ec5e305c7cff86acdf964b09f3e8ee71"],["tags/Valine/index.html","5a20741816e622fc43acce15135b66f2"],["tags/Visual-Studio/index.html","103074e98473950d1a4da27c03af640d"],["tags/Vue/index.html","eaf7ff0798260fdda1995da17a296ff3"],["tags/WSL/index.html","390ca45bedbd321b432efbfe6d634d71"],["tags/Web-API/index.html","1122399226bfc3b254b15df9fc0c793c"],["tags/Web/index.html","820279b560ab03d92933bfb3e9382b4b"],["tags/WebApi/index.html","ffcd41c4d9bd5b32a500b9071c56ae4c"],["tags/WebSocket/index.html","939e6db9acf69f51fd3dc9e47d9958ba"],["tags/Wechat/index.html","16630800f2e18f0ad590c440648325f6"],["tags/Windows/index.html","b1e9bedaad27b8e3bb0bab1e914a9cd4"],["tags/disunity/index.html","19f12a0a3e5e96a9349c891802c28f30"],["tags/index.html","6d5a933746e11ec0af8bc58fd2b3dba3"],["tags/matplotlib/index.html","475388be0f6f5e5359bd1bb8e124307e"],["tags/njsDelivr/index.html","55e83240299a1e9666030fe23f27f0d7"],["tags/uGUI/index.html","af47315c44f962689583055cdb5ea2fc"],["tags/zTree/index.html","660f2085a8e615b56fbd6b0c3237799a"],["tags/一出好戏/index.html","fa713b141e8551f9d758e47330d44656"],["tags/七牛/index.html","999704dc2e45c62ee62052101094cd72"],["tags/主从复制/index.html","d8c1a581607354c57a46d332e16d1376"],["tags/事件/index.html","29610cfd70709c5371517832255e9985"],["tags/二维码/index.html","dbef7a3c3baadfaca23c7525f4d085b4"],["tags/云音乐/index.html","ba0d4a97bc16c2fa40c4a99f11117809"],["tags/互联网/index.html","378b3821eab2a8e414aece15afff7959"],["tags/亲情/index.html","c073bdc8a5acbc29fe02fd405f114d32"],["tags/人文/index.html","79ed536ebbf5dc7b20032d202985204a"],["tags/人生/index.html","ba05c40c484b6346280693ea50c96a3b"],["tags/仙剑奇侠传/index.html","ab7694a9a3f8ec61b97cbac22d2c68c4"],["tags/价值/index.html","1bb37768ac22bd1aff1dd9eb3e8c3e0e"],["tags/优化/index.html","a034d689c246556b8145d3425a822aba"],["tags/全智贤/index.html","5851945fff62cf50d09d3e19025eb4f4"],["tags/公众号/index.html","a9580b25f2d3a7b2f916d8e249038ca2"],["tags/关卡系统/index.html","6feb4e536959a305effb8f77164c8a21"],["tags/函数式编程/index.html","5e7098162db92813c1153a846c5f1dc6"],["tags/别离/index.html","e6c4ac273ab53ca521d3b7eb7e5ea0bd"],["tags/前任/index.html","b47e899472e9d188cbe39f0571a422e5"],["tags/前端/index.html","623763fbb09b1c68368bf30396596d4d"],["tags/剑指Offer/index.html","b1b90b6337f493906e65f84ee523d7fe"],["tags/加密/index.html","c27989f1d8434a50df247d1f3eab9d60"],["tags/动态代理/index.html","d05e3a3d898ee11bfb71d00a6a263130"],["tags/动态加载/index.html","e11060616260f09bfff8cce412084399"],["tags/动画/index.html","ba099a089dee5b234898ef35fb0510cf"],["tags/单位/index.html","e89a959a0ac52685a3363ab3902c3b0e"],["tags/单机游戏/index.html","82aa181ff3e5cd5e6cdd6bb6337f65d8"],["tags/印度/index.html","a62a73cdc575a1757b42e93562923786"],["tags/历史/index.html","5f03f81571e191199b914dab626330d5"],["tags/反编译/index.html","baca25b2023e38266b77f8b1d9e35fef"],["tags/同步/index.html","a5c604970b37100c3ff20b98cadc47b9"],["tags/后端/index.html","fa6b01ee93dcdc719b64f5c1cbd4a23a"],["tags/命令/index.html","66da36e6b52fb70ad9bba2497b5677b7"],["tags/和平/index.html","7192d064a76b995ac12614e045be6d9b"],["tags/响应式/index.html","278b588660d4b86c0f4f889e6cab79ed"],["tags/哲学/index.html","e518c907b2572789e9b1491c0e608f07"],["tags/回家/index.html","d6e5d50222f6c57fb09351bcbfa39211"],["tags/回忆/index.html","240792a9072c28a237b43c588f82a9ad"],["tags/回顾/index.html","d75f2fe5a78d1b629c439edf34058944"],["tags/回首/index.html","6bf86e6875a60f1c9580afae0016f5f1"],["tags/图床/index.html","9166492cd97183809ceec5e8f378ff95"],["tags/图形/index.html","91d4d75eb112fc729ec327b106165171"],["tags/地图/index.html","ad58e149966ebd5d6eda587b5b5ab7bc"],["tags/塔防/index.html","3eabe74cb6099de719f5ebb7c470e8a3"],["tags/增强现实/index.html","b1056183f0cb311bbcd7b1784c7305ff"],["tags/壁纸/index.html","fd0a22c01792f4394d9bd488e5b8c2ee"],["tags/夏目漱石/index.html","ccc635e280df12884419ee20321443d3"],["tags/多线程/index.html","76a69f56cb5454a062abd9028852a867"],["tags/大护法/index.html","9cdc8c3a764dbf2f5ccf72ee9baaec5e"],["tags/委托/index.html","7825f5e7dd36817b4ee61d422a1cf732"],["tags/孤独/index.html","866a72be6af8239fbb7c6a37bd87bf07"],["tags/展望/index.html","8dff72cf6753129bbe25bf7d56951744"],["tags/工作/index.html","0ba7b57cd11c380da4051b802a493b80"],["tags/平凡/index.html","21f147829f39fce9af9f5c9a5173c71d"],["tags/年华/index.html","1139e01e8e6981956e8f932d7d52f6ca"],["tags/年度/index.html","e21c8313180a9bb73241b16902b0ca64"],["tags/开源/index.html","52f6c5294fc645705cd776172d6021c6"],["tags/异常/index.html","9227a75038807127e93e8e7162ccbb68"],["tags/异步/index.html","defc535b3d67688100b9b019d16d79ca"],["tags/引擎/index.html","bebc3f8d33296c04b6e95df7c2c0480e"],["tags/影评/index.html","574d939ea1547e7c416b64bd84df4450"],["tags/微信/index.html","ff6372191b09bf9046cbdc8daf799702"],["tags/微博/index.html","dc3b99e48bf36c51292190986603c901"],["tags/心情/index.html","0f14df300fecc7d08c32cdf3669b8e02"],["tags/思维/index.html","dff152092075f6c53227832894aebe3b"],["tags/总结/index.html","e1fcb4241d81bf5e912f9687272cdbbc"],["tags/想法/index.html","46bd3023058c2a7c69faf2ded8e1dfa1"],["tags/感悟/index.html","8a6a6228e43f9af940eeb22da89ac6b1"],["tags/成长/index.html","02d19692a66f4fb37eaaea3a88ffe3e9"],["tags/我是猫/index.html","f09da6de46f91f7118c9fa1f074bbce1"],["tags/扩展/index.html","851625645e7d23ea67e54f1d33b5cb53"],["tags/扩展方法/index.html","1a78d06caaae1cf5c3a2e2ddaf846b67"],["tags/技术/index.html","bc75f2da6bb69893527a96d36a631656"],["tags/拖拽/index.html","deb1e5b52dd4780cc31e9892a2117b3a"],["tags/插件/index.html","5fac31c7fdd7bffb1c769f0612488fbf"],["tags/插件化/index.html","5469cfef5c06eed125d6978f8b6529bb"],["tags/数字/index.html","5fc3cd96c4e4a42cdcfdc40487d9ca12"],["tags/数学/index.html","17a9bf399a947fdb6994e31c25f19011"],["tags/数据/index.html","5de9c234410c77a4bfc3affb81d086bf"],["tags/数据交换/index.html","cd69ae8196a356b70bef6db06a33b73d"],["tags/数据库/index.html","db2ab1101c7e40d4cb80ef68662cf9ff"],["tags/文本分类/index.html","c6e14263831ae40991f588359a04fe73"],["tags/无问西东/index.html","d51b73a0b6237fd31d8dd8dacc972665"],["tags/日剧/index.html","9987292b5348dcc455ec2bb313f7d693"],["tags/日志/index.html","51e0c2f64cbb829872f089a14f75d913"],["tags/日本文学/index.html","c638491eea204681e289bb51459ca487"],["tags/时区/index.html","d009cbc25920d77c8d9903f16bc3b3df"],["tags/时间/index.html","b7b080d85975aa5110ca30cdfa65459f"],["tags/服务器/index.html","b4fb92e8d6fac8805fd464b10a4b0bad"],["tags/朝圣/index.html","4fb44e701302a015535130e2b9160723"],["tags/朴素贝叶斯/index.html","d2cf22ae0757d62dbf2d94883af0d72b"],["tags/架构/index.html","a238d06612414c58adb17fa5c8ff2f66"],["tags/标注/index.html","f27af8babe928871f16fed6d2ac30558"],["tags/校验/index.html","fb31a8797c14de0eddf586f02ea0b893"],["tags/格式/index.html","65fffa77816061c1eef8a946bb3f1d67"],["tags/格式化/index.html","e22d96d8745a91268b67722f3778b6fd"],["tags/桌面/index.html","d9a24f941c1d6c75e60b06fb792dddf2"],["tags/梦想/index.html","8de5407f2e0bf05d4cd19ca1863148f3"],["tags/概率/index.html","207de6199760cb1ad6e77de39df79bc0"],["tags/模板/index.html","83d52c76dea9bb507d9365aae7d47ead"],["tags/模板引擎/index.html","6f12852de8be30f0b50adb4adffc5b39"],["tags/毕业/index.html","6498832bc239a40ffa8d2b45643da193"],["tags/毕业季/index.html","6702f5a4b93c3bdf5cb83b8181ea7568"],["tags/消息/index.html","513f0083d21e556e78d964bd88cf78ea"],["tags/游戏/index.html","78a9ec477a0df8f05846cfb250064cad"],["tags/游戏/pages/2/index.html","421307d0bfab40b36e7c257d83112023"],["tags/游戏开发/index.html","2f253617cf2fd8682e7fd1b8b5aae4cd"],["tags/游戏引擎/index.html","6eea1b5bf41b83cfbed309494a0e8ea3"],["tags/爱情/index.html","08aab15f1bb9328bc9a3e8dc193af863"],["tags/版本控制/index.html","b566992601ca762b096ed99ceb071ebd"],["tags/版权/index.html","bee128f2a9e8b7cd75a55d1c1e0dcabc"],["tags/特性/index.html","e6c7d0e8f2d6362801575ee0b2232811"],["tags/状态/index.html","a4ea4dd6343ea35f69799b1629198644"],["tags/现实/index.html","8175ed777a86b3cf84b18049193c6a87"],["tags/生活/index.html","4538190ee316f3249cfee1eba6d5857d"],["tags/电影/index.html","c493a33a192814f17d64e43967d50ff2"],["tags/画家/index.html","3db908a5e63155fa8219c3dc56e791aa"],["tags/知识共享/index.html","f31e2128fa0909b5873a77f0a86c67fd"],["tags/矫情/index.html","03d8f7e14d2036f8cc94d0e1af123114"],["tags/程序员/index.html","5f2d5a2bed34ca521b40a79b35919360"],["tags/穹之扉/index.html","e4a806f81fc15403b1865a94ae88b4f4"],["tags/穿搭/index.html","34a85c5e546a75ee750ffbe90a905f46"],["tags/童话/index.html","ec425dfd41d6e296246598ed3f261d5e"],["tags/笔记/index.html","0d1d7e17ddbaed10a7a14ba17b24c6ae"],["tags/算法/index.html","06f5893a2180b6858c5c0500bdee4595"],["tags/米花之味/index.html","d49e20e263ffc8471d260f3ff50387a4"],["tags/缓存/index.html","bfa426d4f3d36bb3a6766ef313f7038d"],["tags/编程/index.html","e08d3872d43dc2be2e351b6d4df48427"],["tags/编译/index.html","6c9ba1214978c994db8b7e5f4cf1ff7c"],["tags/编辑器/index.html","39e4c484cd322c78d957692d640d762c"],["tags/网易/index.html","42e19500e9f7602edea784abe6787834"],["tags/脚本/index.html","9282b0c4d9883cc23ad4471fef326064"],["tags/脚本语言/index.html","db678a8c1e4cf2a039adc949bc921cc6"],["tags/虚拟摇杆/index.html","81153b1a21f4f6b3a318f8ea538d382d"],["tags/蛋炒饭/index.html","1fdd309412f4214b81210528ae20996b"],["tags/表单/index.html","6af68bf487be41f0fac378a8568bac78"],["tags/装饰器/index.html","6c8ac3e9c927fb056a96a01b713b4a02"],["tags/西安/index.html","64f36f7de0fc6f9c8ea41dbea4d1574c"],["tags/计算机图形/index.html","7397be81246228759c660b4abc681d86"],["tags/设计/index.html","486c0b423b74e57e37a15858823c375a"],["tags/设计模式/index.html","0925fdd8e0d33bf6cac7ab3ed8537e32"],["tags/访问量/index.html","44453e5eb15e5bdf523e560abba24956"],["tags/评论/index.html","e584180277efe37bad487c4b60b99edc"],["tags/词云/index.html","515f2eaf33e1007c7df9f42d41e7830f"],["tags/诗人/index.html","878224bff4885d4b4b8c1b57a2a8f040"],["tags/语法/index.html","7bfcb0726f9d5bf7da08526c61afb755"],["tags/请记住我/index.html","f7a372ab017bf1457e8be687bd37175a"],["tags/读书/index.html","b3df5589da57a36ffc0b66fef05c95e3"],["tags/读写分离/index.html","09e16aaa0fc2ca1d1afc26f066792536"],["tags/调试/index.html","5661ef3670df9e6c2d06d0bb0027b21d"],["tags/贝塞尔曲线/index.html","2412507fce6566c478f026e85b719967"],["tags/贪吃蛇/index.html","e69010f6f735f8a955cf94a67af091cc"],["tags/资源提取/index.html","c39faffa5b1b72ec48524475c4e041c8"],["tags/跨域/index.html","6b8d6cebe3bd6e33424420bfed2bd7b9"],["tags/跨平台/index.html","e105e0cee574822c997d678585369207"],["tags/转盘/index.html","e17ada83670c96510b0d802b42f3cbe8"],["tags/迁移/index.html","fb91cdc3a027e5eb3e3287984554570b"],["tags/通信/index.html","98572aca8a0752f0466c3027763f4761"],["tags/邪不压正/index.html","c4f8b43e229680a247b664aa5aa8dbb2"],["tags/部署/index.html","302aa38ce6a6353553b4e3ea6a9c4477"],["tags/配载/index.html","395e5aa2d041c1ccfbee8f335d3596c5"],["tags/重试/index.html","976e8180c07e9f9763c40c59da8c5164"],["tags/长安/index.html","627b25b3a26f70fd3c7688e2f1dbd42e"],["tags/长安十二时辰/index.html","9125ccd546396cb0121b453f3f8c1367"],["tags/阅读/index.html","4378cee0036657b44437b5e03673cc77"],["tags/阿里/index.html","f83883a6c1d91acfb55f38225d8f2ffe"],["tags/随笔/index.html","0e997e30f6632dcd3a623c6df464d0bb"],["tags/霍金/index.html","462ed4e4a8ceb88f2cea403c37e0ad10"],["tags/青春/index.html","fda183baf55d533d76a8d45e17cadb79"],["tags/面试/index.html","d02c3d3c46e298b9e819a67216c99aff"],["tags/韩寒/index.html","b593e273d772db5b51abed3e89ddfd64"],["tags/马尔克斯/index.html","c1f6c23a71ae24291bf7a876d3098e44"],["tags/验证/index.html","dc9d4273237199974e53efd96163231f"],["tags/黑客/index.html","5ef3117776f3af4e18a42f969bb3857f"],["wiki/index.html","783a39ba320f252da892fd9a23a6e717"],["works/index.html","bbdc7bf7436d4063b27b4beaa0480a69"]];
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







