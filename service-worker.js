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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","c2bf3bc43334534e06e53bff6210182c"],["archives/2014/12/index.html","98c6a243409fac096a6ac5f6ce6b767d"],["archives/2014/index.html","59dee95c5ec813e37e4e7a46d25afd50"],["archives/2015/01/index.html","4bbfaec30abe3613b8d697b5c7897f1a"],["archives/2015/02/index.html","d22b615aff82121f34f3d94f3a1c6d9f"],["archives/2015/03/index.html","88cca45bd23f9c3fb335b8c598af9d66"],["archives/2015/04/index.html","2a6e6fd5fa4bb98aa0fce6712818b242"],["archives/2015/05/index.html","961f016ed603040af86eb655a0dbd0c9"],["archives/2015/06/index.html","f85fcdb4b4fb7793234e6e231f54694a"],["archives/2015/07/index.html","065ee4f4be57bc50a8eb44dab8c6982a"],["archives/2015/08/index.html","fae1090564cb1cc4e007cd89902b71fd"],["archives/2015/09/index.html","c1849eafb85e70f5991583839411ff5f"],["archives/2015/10/index.html","73895859131cb4705a84268b60c6346f"],["archives/2015/11/index.html","f3ecdba8c9a59982092d8cafa6a8c772"],["archives/2015/12/index.html","1648c08e3aa5c51f75d1d331ada52b49"],["archives/2015/index.html","b7c035cf63cb556552317c7207832fbb"],["archives/2015/pages/2/index.html","85b7b67117b2ebe211fee00aa326859e"],["archives/2015/pages/3/index.html","7f3491782cc49cb2c1e798318a61e2f0"],["archives/2015/pages/4/index.html","16cde78e9a2f36436d1c7cab2b6d98a3"],["archives/2015/pages/5/index.html","2c344b5bd197076604436367b6e44ad9"],["archives/2015/pages/6/index.html","edc327d32751466bd3f0b86430e9f835"],["archives/2016/01/index.html","8a37e6a40d5c68c0064203fdaf37f70a"],["archives/2016/03/index.html","12418a4cb3133b32001613d3f53c3656"],["archives/2016/05/index.html","0d9b98ad21ae0aa6f43f870fe123f7de"],["archives/2016/06/index.html","6df22b1d60def18d543f5b772ab58609"],["archives/2016/07/index.html","0619dd49c64eb96a0fec5da741691a59"],["archives/2016/09/index.html","751329c53ecf31883e5fbf07670290ea"],["archives/2016/10/index.html","b8f6ef6e43997fae7e002d207764f57e"],["archives/2016/11/index.html","0559f50da52c1de8fc82e863ed3fc9c5"],["archives/2016/index.html","eff73cf614b020dcd0a9b4cbeaeb987f"],["archives/2016/pages/2/index.html","f2ef34e72c9e5f2967c440a730cc1be7"],["archives/2016/pages/3/index.html","6dafc170dc31de3f96cb9396faaccbfc"],["archives/2017/02/index.html","dd9648728826c469364476e0445ea654"],["archives/2017/03/index.html","dbcd27a1d9ac388514b160798f48351f"],["archives/2017/04/index.html","2f387b0de099a09e5130a5104fb09ff5"],["archives/2017/05/index.html","324ea182b4694cea8f2befe6a6cc046d"],["archives/2017/07/index.html","e2112cdda6c9f4f0111662670274cbb8"],["archives/2017/08/index.html","f9326d24dba9f3e938ad8f9b8b11075b"],["archives/2017/09/index.html","6221744ac4d251ec308ab169ad002637"],["archives/2017/10/index.html","bafe16c566a3ef5484249455902d3da3"],["archives/2017/11/index.html","1121b9ef3298a024fc1186e815943705"],["archives/2017/12/index.html","9138ef20fe6a247dd6454e55c742603b"],["archives/2017/index.html","8cd47214b6e6b4416940c362d515c691"],["archives/2017/pages/2/index.html","5f1ca3a84acb3a438661d4ff38e34ae5"],["archives/2018/01/index.html","e6133abe887bb90f3e5740b11a50131c"],["archives/2018/02/index.html","c08fa6762974776bc78b1343575c7555"],["archives/2018/03/index.html","3ee9739f45c7fc28865327f9ec32e430"],["archives/2018/04/index.html","2464ab636f910a6012c982ca6f4189d5"],["archives/2018/05/index.html","141d07fe9f13684bbb16f91f8625f89a"],["archives/2018/06/index.html","b46ad067626f048e8144b2b92d8e2c56"],["archives/2018/07/index.html","71fabb9305cd096565bee78d714541a3"],["archives/2018/08/index.html","1d5738587cbb97ce14e7814da20c9bb9"],["archives/2018/09/index.html","266149985ac30b269432c1240e4c2a58"],["archives/2018/10/index.html","16df235eb5d529eb5e2e5406b8d022d4"],["archives/2018/index.html","82ec491d59aabf7641379e26bc6843d1"],["archives/2018/pages/2/index.html","e64f9d759c7baa22e5ddf70aa217931e"],["archives/2018/pages/3/index.html","458f62ccbe7343c7b058f978dc617b5f"],["archives/2018/pages/4/index.html","c284f7d7385c08e952be450998b788c5"],["archives/2019/01/index.html","1fd817126515ab6f9846d57260c18618"],["archives/2019/02/index.html","d344e3261747c9f21c6772965322a5b5"],["archives/2019/03/index.html","de75654d9b29c14010f53c94bb06994b"],["archives/2019/04/index.html","304856c6d44bfd4a8baae717cb59d4de"],["archives/2019/05/index.html","32697f7d4818a704388e80cee29daba1"],["archives/2019/06/index.html","825098be979875329a6c7c3729e23189"],["archives/2019/07/index.html","81a2af5064fbe1e67fafffc24b6ef6e8"],["archives/2019/08/index.html","4522e820e2e8bb53a3f50bd3e8b342b8"],["archives/2019/09/index.html","34b0262b72ad01a613c75ed6bc25fbfc"],["archives/2019/10/index.html","9446d05c0834299a2d9b53e881e950c7"],["archives/2019/11/index.html","5698da3de4743967d81e42cd83535cd2"],["archives/2019/12/index.html","76289622984e65396f88ca5e1705766a"],["archives/2019/index.html","288b12e33a10a47a4a783a5198ad9ba2"],["archives/2019/pages/2/index.html","0b34326e0e77ef46c3274aba17262c0e"],["archives/2019/pages/3/index.html","e9b0ed2332ec93d872ac867f21ffbb28"],["archives/2020/01/index.html","c40ceaad21e2cb9b2011a6ecac1a680a"],["archives/2020/02/index.html","e97cb2279b0a0f34df0c46b123fcb9ae"],["archives/2020/index.html","9b106c10d26e3a399935f90e17f362d6"],["archives/index.html","f85ad0b7bb0012bfaaf704f609683db4"],["archives/pages/10/index.html","ebc9b145709d83fd31354cd7724dacaf"],["archives/pages/11/index.html","14cf70f3d090f1afab561ef7748d8212"],["archives/pages/12/index.html","6030c5e5cb2de832fe568b759c132256"],["archives/pages/13/index.html","06e04fdb554986e0af28c79fb9dc6d58"],["archives/pages/14/index.html","5d693f56e42bb9214775191e2bc63cba"],["archives/pages/15/index.html","bd2ad27fdb5bbb2a75d44f595b8dd006"],["archives/pages/16/index.html","cbaf93d3cd879ad6efb84724723e730d"],["archives/pages/2/index.html","f9e211ef4644efea219a80741c26ae3e"],["archives/pages/3/index.html","fca4960efff5d2c2a9ac512154dbc6ca"],["archives/pages/4/index.html","29228204828edb8876c3f8bb98485964"],["archives/pages/5/index.html","c1d4aa0ca2d891183548066861cf0a92"],["archives/pages/6/index.html","7308e86d9b8036cbf44f4cc68124b503"],["archives/pages/7/index.html","4cd950ddc3bca7fa79ece7fa3d3cd473"],["archives/pages/8/index.html","57d580271c5d78cf434e29d506000406"],["archives/pages/9/index.html","cfdc883dc7995fb99b69d1d3b3278329"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","5f39bde69c77a5d0b5dcdaaf62319ca8"],["categories/Unity3D/index.html","d7ffe9a07faf06e4215d6c404489f31e"],["categories/Unity3D/pages/2/index.html","44e3e3c4d5faa737e2b4c25e26e58077"],["categories/index.html","596489ff8b6399ef8e00d660719a97db"],["categories/人工智能/index.html","8fae61fb00f22360b36c9da2ba6919b0"],["categories/前端开发/index.html","6e0494e04b5057eb9e7961841e2012ef"],["categories/单机游戏/index.html","447356e22a9f43021f4b646df8b6fdcc"],["categories/开发工具/index.html","839740a3348d5b66dfca0c7dc063004d"],["categories/数据分析/index.html","835aac30e39fc1bbdc7c810af50702c1"],["categories/数据存储/index.html","21560f7afaf751057cc19e354b8fd4bb"],["categories/游戏开发/index.html","fb791383085a228ef69a244524148b00"],["categories/游戏开发/pages/2/index.html","e3526a5b4cf7b63cd88ff3db74eabd19"],["categories/游戏引擎/index.html","e69514d101ac0b5b4f9af8d6505d0b1d"],["categories/独立博客/index.html","b4f6906978971b3404a8c313fdbb204a"],["categories/生活感悟/index.html","c26c6b78ccdb8c48dc767421cf5d191b"],["categories/生活感悟/pages/2/index.html","fba706f7bcb05f80a215b52c204d0f27"],["categories/生活感悟/pages/3/index.html","b851402344531e72df49bd770a487e5a"],["categories/编程语言/index.html","ba47dfe0b81439102d952f885063838f"],["categories/编程语言/pages/2/index.html","337938bffa0c2874516048b9864eda40"],["categories/编程语言/pages/3/index.html","48db6dd9f7d2eb2b71668476b7a5427b"],["categories/编程语言/pages/4/index.html","e48ac4298f59ac2e454f9eca40dc6f6d"],["categories/编程语言/pages/5/index.html","d8ca71d913c9a204ab67ac5680aabb1d"],["categories/读书笔记/index.html","9ed0d3c3dfc4b40b5f794366cdb4fc6f"],["categories/读书笔记/pages/2/index.html","c81f90fd8793025fde1b178c640106c7"],["index.html","d3386a36456b1ce826752917bbf362e0"],["movies/index.html","98ff2ca407e6c35950e37edbe8f418dd"],["musics/index.html","dfc4d8434f5b7135c9817707cb6af83e"],["pages/10/index.html","1ea24a2ac1eed621f4acf86927d7f674"],["pages/11/index.html","3e4bea63c04f531a115a2e5040cd78c7"],["pages/12/index.html","bad37fcddb65b00e1e04c9732217dcea"],["pages/13/index.html","39b3456e342def52f7751a1541bc653a"],["pages/14/index.html","a3a5fc4eac18c286553f9d40409569e2"],["pages/15/index.html","d126df3d9f3194e6eb14abc0e5404fcb"],["pages/16/index.html","d9d18bf0721d47a25d4019cb8ecba1a8"],["pages/2/index.html","d9b9de94fc6d60a3c28d7c0304858f0e"],["pages/3/index.html","56cce08735ec2e97eeb8f4a6614c6ae4"],["pages/4/index.html","b51304e4594937568a739ea72421b1ce"],["pages/5/index.html","ee6ec94ec501b6e36edab563637c4219"],["pages/6/index.html","9863f0032741bb12f4d08c68357580da"],["pages/7/index.html","4d9460e9fdb60ec153065c1d6cd0a6e0"],["pages/8/index.html","366e10ae0cc778d917a0675721f290b9"],["pages/9/index.html","cb9dad4f598620be7af01a6682be1562"],["posts/1059499448/index.html","b3e38fc71c1da5641576858334a56a7f"],["posts/1071063696/index.html","bc493d80efe1ffc84b0840fd4033219c"],["posts/1082185388/index.html","4c0b646a66a5b08ae31f5a29855bec74"],["posts/1099762326/index.html","706c4f1180a8d44ffba04aa775e39fd7"],["posts/1113828794/index.html","ca7039b6fadbd0668fb2b86279a79eeb"],["posts/1118169753/index.html","f215e3d28ba788c741c8211030ad6dff"],["posts/1122710277/index.html","bf6869e08c1d9743fcba584750b13ee5"],["posts/1124152964/index.html","a580218420275616a7aba37b4fb2fe40"],["posts/1127467740/index.html","290f5d06c989199ce1f8cde11644036e"],["posts/1150071886/index.html","c2946bd9f2aadc699ffb1daad4912e5e"],["posts/1150143610/index.html","8504593acef2c454da5bb6a7aaf1e4d3"],["posts/1152813120/index.html","09cf04cb473178b038de7582bfd458da"],["posts/115524443/index.html","a38227bdc62ae34522578f6a6dd877cd"],["posts/1156673678/index.html","ea440d653d4b07dfc2aadd05171f3cac"],["posts/1166840790/index.html","70e40d14136c1db24c66a4b6f30c68ef"],["posts/116795088/index.html","af2eb6b92c2820b9c8e0b3a8b6dbcfc3"],["posts/1176959868/index.html","14aedeec73fa0c4323b30ff6af4796b8"],["posts/1190622881/index.html","8427ef73bb1779847a12d0d69469c87f"],["posts/123663202/index.html","3f3aad6217be053b2d5ba7367fa89d10"],["posts/124807650/index.html","c947d4a1e20b863f24255d44f6e3dc7c"],["posts/1254783039/index.html","629300f4f47787e513db661283496b27"],["posts/1320325685/index.html","a2e0e517fbe4e5cba174216eb8b2a8d4"],["posts/1329254441/index.html","b4ca24b0e0bf02ac4af997cb664d095a"],["posts/1357715684/index.html","424b991e070c7d65a4bf64d530a38ef3"],["posts/1358971951/index.html","fce0686fd5d6f7787b9f0c454006677b"],["posts/1386017461/index.html","773b618056493ed9830904b1754f560a"],["posts/1394521917/index.html","b72d8cf72bbf97404b1b0126062dd7aa"],["posts/1397717193/index.html","a5b8ce831b3ee0ac37fd7dc491113286"],["posts/1417719502/index.html","cb7d9dae08ac3ffc7fef1232938e1747"],["posts/1424645834/index.html","c01e10ecd5974da4c9d08eeb75615194"],["posts/1444577573/index.html","ea9c20530cec6f1f57f4b71eefb145d2"],["posts/1467630055/index.html","d1e16d1dc7f57cae063b510fb2752c97"],["posts/1478979553/index.html","7bbac3f098f5de8ff076c387b8c5ed1b"],["posts/1540537013/index.html","3e4a2136867a03d7a62a7b37c3576396"],["posts/166983157/index.html","d93fcb5a7ca0771a4d1feca34766de9d"],["posts/1670305415/index.html","1a2babde70cc0524c928612406e493a6"],["posts/1684318907/index.html","cbaab8a083c8a16c6c15bd8a05b2e25a"],["posts/169430744/index.html","ddf69a0f9b541843b69775fa2c6207c0"],["posts/1700650235/index.html","c2dc5e4270c0453ff5e7fc840fab7400"],["posts/172426938/index.html","62e5b2326bcba4aa81e5a839505efa8d"],["posts/1836680899/index.html","50c1f21e2f1a900beaa89efe8b7de1b7"],["posts/183718218/index.html","ecb9f45e2d89a8a071fb4b8b1a44a526"],["posts/187480982/index.html","7c49bdf6a195c200c7d6a3e01e502646"],["posts/1930050594/index.html","3c737ae3c3e778ebc4abac6d89d4dce1"],["posts/1933583281/index.html","e8efb7335b5f11de072f606558bbb8f6"],["posts/1940333895/index.html","c1ee6a6aa6a0d2a23b88224d555b1b5b"],["posts/1960676615/index.html","7d12f17d8431da8c9d0d1e09167016af"],["posts/1983298072/index.html","99e9e3f78ee43dd675be9a7e4a9f2f22"],["posts/1989654282/index.html","62e41c3b1e03a0f028ad156a810d4906"],["posts/2015300310/index.html","3ffcd674efe65797831654ae5c0c69e2"],["posts/2038378679/index.html","dd72b750a907b7e824b08a7bba880c5d"],["posts/2041685704/index.html","d79ddf4095dffcc8d6604694c3c7db31"],["posts/21112647/index.html","9e41b20e9431992e6a44d14cdf014976"],["posts/2158696176/index.html","da3c42801d9e2fc73a279609211a22bb"],["posts/2171683728/index.html","7dc42f2ddab9736f8959cb8b8aa7ee3f"],["posts/2186770732/index.html","b993b5f969c359de1b5c7cbc9c334c5b"],["posts/2275646954/index.html","762495b3aca27cbff598f7e7ed298245"],["posts/2314414875/index.html","f3c0238e75c9af9f1c3d5d7bc62152b8"],["posts/2318173297/index.html","3f40831c6d62fd3b416f8fbb41af26ff"],["posts/2418566449/index.html","4e104e2b270cee3b87054f015bed737a"],["posts/2436573863/index.html","2e3e8cdd2fa6792776ca3cb7d687a142"],["posts/2462008667/index.html","0615cee7cd2a9c604c286834337133be"],["posts/2463121881/index.html","28175b6d5c6b12740e9a295ad5128958"],["posts/2527231326/index.html","bfcac1acc9449257adb84a95637145e5"],["posts/2583252123/index.html","00446d5494595da9a37dadf3e1c09a50"],["posts/2613006280/index.html","b1fa177d271692e9213cc99037c60637"],["posts/2617501472/index.html","ec3ce6daf84ec9bb31f46054d63a63f2"],["posts/2676125676/index.html","c924cfbff9ad0840121cb010511d8b41"],["posts/2734896333/index.html","1b9ba735cc1f2aeb1f64c3c108e86976"],["posts/2752169106/index.html","a16765b6d0a2aa39622d5bf3c07f5a5d"],["posts/2799263488/index.html","9cc12c17d610b58f467859709bb6fa9f"],["posts/2805694118/index.html","5d5f948c59359305a3e4dedc7ef0e187"],["posts/2809571715/index.html","80c566caf79289ebec15a324b8fb70c7"],["posts/2822230423/index.html","47e92748d406292855133d33411f8aa9"],["posts/2829333122/index.html","a728863e4d504d17a3b5cf876512f85d"],["posts/2911923212/index.html","f12f289a8ceca8e1cc3d21a9c4374113"],["posts/2941880815/index.html","57855092b2c78d39a1d603001b2c07a6"],["posts/2950334112/index.html","544ee745aca1e5d76c629bb1002918eb"],["posts/2954591764/index.html","3094a126adb25f334b1e5ec2b70eb223"],["posts/3019914405/index.html","291d9a1fdb46aaf3464f35b48245d2cf"],["posts/3032366281/index.html","1905a4e22322b1e101608f42c9ab801a"],["posts/3040357134/index.html","99f8410258c4d5e6367206c27154553e"],["posts/305484621/index.html","bceed5dbf1aecd51c4081633ab55ebc0"],["posts/3083474169/index.html","8a6d5de6643eaf8e09f7050fd23956e8"],["posts/3099575458/index.html","8ae89774ef9343cfa9704ceb94846bdc"],["posts/3111375079/index.html","f62aff4e7b39758ab5e3409aa31f28ce"],["posts/3120185261/index.html","cac0a836fe473f9bb44fef05986fa536"],["posts/3131944018/index.html","8211f1679ff7dbda78b9d5dee31ce605"],["posts/316230277/index.html","23cf2fec0aea55ef3c301979f037cf47"],["posts/3175881014/index.html","675030bbc5894a7aaa4f841b9d7b1b09"],["posts/3222622531/index.html","7d2ad899c4fb2fcb12bce7079b2841fb"],["posts/3247186509/index.html","63cc7e54961438b7a27540931eb985aa"],["posts/3269605707/index.html","930c5ba1e99ebf0c877301888478cb95"],["posts/3291578070/index.html","999a58ab4b0016c5ef8e883183282e77"],["posts/331752533/index.html","b994c4da463414f5caadb77d4b354fde"],["posts/3321992673/index.html","0750fbf9c99b228f72bd6a0aec918ffa"],["posts/335366821/index.html","b831e25fb2e038efc2e303dd090032cc"],["posts/3356910090/index.html","824c738ff968e9fab8b73b777daddb9e"],["posts/337943766/index.html","c2a2f6727d1383b869fecbb5526f7db4"],["posts/3417652955/index.html","b35d93e6004495261c1f91b94065b822"],["posts/3444626340/index.html","faf018e4db34d2afaa3a89e49d880f5d"],["posts/3449402269/index.html","8b49d2f055955c0d693c7b87c4661ac0"],["posts/345410188/index.html","fbe49cd323956472ba78d7bff8ee3bc2"],["posts/3461518355/index.html","e5af6cbdc4fb5939215589ecd139e692"],["posts/3494408209/index.html","163cacdd9358058a494cf1e99661bd9a"],["posts/352037321/index.html","4ac881f1bb9318991930fca300db179c"],["posts/3521618732/index.html","7d98c20b9371f6d1c7fb131629e36672"],["posts/3568552646/index.html","53655ab13f93437d6c38e30a33661110"],["posts/3603924376/index.html","91ee91628099451a4255838f79d300a6"],["posts/3637847962/index.html","5575022f644262d54fd236bd0387ff50"],["posts/3642630198/index.html","cbf349d509cd9a7c2654cfe84029a08e"],["posts/3653662258/index.html","6997924d9699483c72f8f0fa576389d8"],["posts/3653716295/index.html","228f6df1968523e95f140b9f20ff2f26"],["posts/3657008967/index.html","76f1a06886cca078884fa127357a81c1"],["posts/3668933172/index.html","fcf2b12e945aaa5b78bff03fe3101068"],["posts/3677280829/index.html","87413198de26ef3bc15a4ee09201a441"],["posts/369095810/index.html","8c23236727844834743bb1424eac7982"],["posts/3695777215/index.html","e059e2bd262934e2ba1f2fb1ee52f2e1"],["posts/3736599391/index.html","815aa2f8a0bee2143fa8c7d500b08611"],["posts/3742212493/index.html","0ab772b236c856d7772cc3a63779c869"],["posts/3782208845/index.html","09a2cb082a3cabf24f59f7ef012086c7"],["posts/3789971938/index.html","e064d87f3305ccae9da0023ace818ac6"],["posts/380519286/index.html","45509f1d1c3d65cf7a6aa52225dbcf53"],["posts/3846545990/index.html","b0328b3be531b1b7f2451852f4101d3f"],["posts/3873710624/index.html","5d5330eee17e8715c018437f9eb97c19"],["posts/3959327595/index.html","bb98970102924622b34748c96e2337a2"],["posts/3972610476/index.html","af038bf041b33c368d7e9cfdbda37ab4"],["posts/3995512051/index.html","17861580ff7bea80e1b1df5ec7c15966"],["posts/4088452183/index.html","6a5bd232410e80966b7e9029bb27d9a3"],["posts/4116164325/index.html","faeba151673af44191f709890703b261"],["posts/4158690468/index.html","2f32c3d390d79e9e57aaa85dbe4e5604"],["posts/4159187524/index.html","38ea80af4b1d7b3d0d045d8e3e480b5c"],["posts/4197961431/index.html","c5fc3abcd10d862a3e80bc81b6caaf96"],["posts/4205536912/index.html","64e95854bb2b0382a40cf7b14df031cb"],["posts/4236649/index.html","da00918305a801099e5b87e7b20165ac"],["posts/426338252/index.html","174395952cce58ec99e470ca90dc3c18"],["posts/450254281/index.html","1f66ce618b8596e5b31eda1a6d2169a5"],["posts/4891372/index.html","8bee84cf55189bd4433b42c3ed74d3da"],["posts/569337285/index.html","673fadef9b5f52926e6b8f623b121bec"],["posts/570137885/index.html","d7bffa0a210660ef89d8c3fc059addb5"],["posts/570888918/index.html","8b10ae3a3280bf404fd83c5d9bd5720c"],["posts/582264328/index.html","826e4328b5f4b80bf84475db6dd6a8b5"],["posts/632291273/index.html","5af1f3966babbc2ad9d335d526389c0d"],["posts/70687890/index.html","5f8383a7bbcd631c1b454684f568fc43"],["posts/719322223/index.html","011c8312a0cf80d6e7deb28067603150"],["posts/720539850/index.html","7b2b04513edca3f45f9b6b6783cfa86f"],["posts/786195243/index.html","a84c86508329ed42b80e9e9a130b02d5"],["posts/795474045/index.html","86e63e67b91aa325aba00abe838ddcec"],["posts/815861661/index.html","dea4886dd5c1f3a9e5ce690e4a7bebd5"],["posts/821259985/index.html","f76e666ffbfb6dc0ce34be3da169b1a1"],["posts/828223375/index.html","f2f669ab577df7da5c662a595a8d48f4"],["posts/887585917/index.html","b3e4dddfe2c7b22889acabc85e16c760"],["posts/888549816/index.html","9dd55c9b97ecad4c9b24568e88b33873"],["posts/906436376/index.html","b3335802f8d8beebf5ece6bab4084909"],["posts/907824546/index.html","ec2d7a6e642c592762c7e9e1c18d71f2"],["posts/927393529/index.html","faad02f7e678fc49ca1139de2ed2fbe3"],["posts/94443781/index.html","a97e296cd329df1742d8bd21fe60a8e0"],["tags/2014/index.html","077a11022110553c32dcaa990ee82612"],["tags/2019/index.html","957c9d56288cba619108a6c803cb8601"],["tags/AI/index.html","013e5c684a39848bf32593558d62089f"],["tags/AOP/index.html","0e09468a283365aff75797d730396683"],["tags/AR/index.html","b6a8dff293f0109c5296995791736f41"],["tags/AssetBundle/index.html","657755d8b95234a488e06fa2e51fa2e8"],["tags/C/index.html","a3dbdf1547e73657d4a740c25285b66a"],["tags/CDN/index.html","46682b62fd8bf211b22c9515dfebf6b0"],["tags/CG/index.html","0fb3af61c8ac5f9e137df4df0c3fe7d3"],["tags/CI/index.html","e4de6f611912f1312281ab91157d676c"],["tags/CORS/index.html","c5c280f56ffe402799171f1680613353"],["tags/CSharp/index.html","bec6f39aa08bfc3f8fc4c4ae42d178f1"],["tags/Castle/index.html","07158c218e011e21522659e676868616"],["tags/DBeaver/index.html","dd747e32cb7257fa8df7df9d429767c4"],["tags/Docker/index.html","e750601a6349a51f285c6b6613ec6a19"],["tags/Dynamic-Proxy/index.html","302e8dee2704109350342600d273b78e"],["tags/Dynamic-WebApi/index.html","e3e7011d3b9b7f5b5a44def3b930602d"],["tags/EF/index.html","637634dfb990692c0b111d60d8cb1fab"],["tags/ES6/index.html","29777cebefb9e6887741227fb64e31a4"],["tags/EasyAR/index.html","9e84f85e4cbce82b8ac2ffee8c4c79a3"],["tags/Excel/index.html","33e85159bd794efcc9c958c8f325efa2"],["tags/FP/index.html","08f77f4c1fde21b19d6ee2775353695a"],["tags/Form/index.html","2473683f4f5b91d61f6f009b684bf3cd"],["tags/Git/index.html","a7667bd68c8e426e38d09f8d47459234"],["tags/Github/index.html","c46feb35af5a2006b05108c902363c1a"],["tags/HTML5/index.html","b3acd7c5668056ce28131a4224fc86bc"],["tags/HTTP/index.html","4405817aacdd93f64a6f8dab00f651e7"],["tags/Hangfire/index.html","0e89b922ca99ab885b722c58e0155e17"],["tags/Hexo/index.html","5896e6610ae1f3013cd209b58c742973"],["tags/HttpClient/index.html","dd72bf9d66f4710da9c91bfc762fd4c3"],["tags/Hyperlog/index.html","805f2b580e2b09b3da8fbaeb94b83c51"],["tags/IDE/index.html","a2a9334c38b22955196d4a060180e3e1"],["tags/JS/index.html","c47d8ca5e0c2d050ad463a9fbbe81918"],["tags/JSON/index.html","1900b0936e6e4b3276975d90d1c9a0ab"],["tags/JSONP/index.html","1e2bb1941979a736009b90c956ef922c"],["tags/Java/index.html","0b5434494e4c6ca2c8426a2d3d76e8f3"],["tags/JavaScript/index.html","516c47de4d9d435be239616204847c68"],["tags/Jexus/index.html","95c7cf34100fb5691c6fce5b6927e8bd"],["tags/Kindle/index.html","ac6dea535f3c6d1a4b4325fa51a76aa5"],["tags/Lambda/index.html","df6b24b6c37953a68b222d75528829f2"],["tags/Linux/index.html","c0ce5053fbbb6d445907bbb712b70272"],["tags/Liquid/index.html","3f9a143ea6a6b1dff79639973528e9b4"],["tags/Logger/index.html","85eec2ecac393a4299ce1a4458623c61"],["tags/Love2D/index.html","32e4feebbe3dc16b9f1486974b4102d4"],["tags/Lua/index.html","94e693ec6752c6888ca70ed2a0b2eb46"],["tags/MMD/index.html","b9642d95ffe6344bd15b37c5851d1b41"],["tags/MSBuild/index.html","a4a9038b685fb17932e058ebdc73709c"],["tags/MVC/index.html","e00ef2ee689a4d30b317492715e337aa"],["tags/MVVM/index.html","e295f5e6724524fe656828e218ed1536"],["tags/MapReduce/index.html","854f9ec15829d5a7bf97c49e4c8a66c9"],["tags/Markdown/index.html","e09e343b023d4eae5104f7e2e0e9fd30"],["tags/Mecanim/index.html","173c40dfe98b87faf66fae1f7b514fe7"],["tags/Mono/index.html","ce2cbdba4de91d8901503104eb0b2090"],["tags/NET-Core/index.html","fd309f2770baa101c2fa6367dca11a4b"],["tags/NET/index.html","5192f932d466742359d1f3a7981dd724"],["tags/Nginx/index.html","4ee44bb8cf1f1b9d0a3fd7eae5f0b54a"],["tags/OBJ/index.html","1e3d1fd292ae0f89fc5f7dbeecb0c480"],["tags/Oracle/index.html","af577383c4e2908eb7b0bd5a47609597"],["tags/PL-SQL/index.html","25913e5d4f224c95bfefdc2ef5b390b0"],["tags/POCOController/index.html","a49421af3759fac1bf93f79e0e326b91"],["tags/PWA/index.html","f2f03e09647d781e80f9b32780b63ce9"],["tags/Python/index.html","990d138963a078f8019b41f6642497e8"],["tags/RESTful/index.html","14090327e6e8235e5ba91f9223df5067"],["tags/RFC/index.html","a490d2679d8bbc3bd43d4ec398e8090f"],["tags/RPG/index.html","b853ac2952f1d67cf2f4717759bf53c5"],["tags/RSETful/index.html","6165318a5690a7adebef96b13f2fbd27"],["tags/React/index.html","0071469cd35e21b475d94b609bf0a49c"],["tags/Redis/index.html","b4ab970e08a62c0571dc94f991c3ad90"],["tags/Referrer/index.html","44fae053411e12a2a7bd9f678fcc0a4c"],["tags/SDL/index.html","100c658007810732d42392e59bc27d45"],["tags/SQLite/index.html","07092357e8f8117bcbc3e8a6b147f617"],["tags/SSE/index.html","7ad82d421025972d874c1bd28a44c92d"],["tags/SVN/index.html","b0e6b683e312573651aa834708628b1a"],["tags/Script/index.html","a0be346b401a5b83df1b541e4f60cbf7"],["tags/Server酱/index.html","3366901ee3a88655572dd4068080da44"],["tags/Shader/index.html","77572137099ec936ae4a6b033b8c7042"],["tags/SignalR/index.html","212452d57f85f44fde06e51cd6c7c6f0"],["tags/Socket/index.html","6c5f48f2851a78dc4de01bb84aa3920e"],["tags/Sonar/index.html","b3a1b26a150c3a581fce0e412e138ba8"],["tags/SourceTree/index.html","35ab5aa228c6e449ab60c80089c1a17d"],["tags/Sublime/index.html","ad46675b4c89731fb3a09ccb6943de43"],["tags/Swagger/index.html","477f4c9d9c3c5ff41cfbe19659c5a728"],["tags/Trace/index.html","568059345dd00b3c291831b81f7d20f0"],["tags/Travis/index.html","fc112ccc3bd5bf8de3e1f48b14ef4851"],["tags/Unity/index.html","d82c20f37a7923388c155754672c85c4"],["tags/Unity3D/index.html","1597308b3b4030a122fe1580748058fd"],["tags/Unity3D/pages/2/index.html","27fdb3dd4097782a137e4e86933adc4a"],["tags/Unity3D/pages/3/index.html","c7732948a2fd11f93bd58a2fe857c992"],["tags/VSCode/index.html","abad6b3ce339509a622e58f7f9548f9d"],["tags/Valine/index.html","b6d93729df9a7d6f524345673b0d5ab5"],["tags/Visual-Studio/index.html","a6230c7b596b93ec1d9414151bc570de"],["tags/Vue/index.html","b5811f1e47fa44312f6d1c36de89ff68"],["tags/WSL/index.html","491396f9c96cdaadc198f83c25b88f0e"],["tags/Web-API/index.html","9522369db1efa014e001681abdb7537e"],["tags/Web/index.html","e886580ea3f85b24f396ee8faa0ea4a8"],["tags/WebApi/index.html","265238d3ceaeb4d8b3c8917401dabd2b"],["tags/WebSocket/index.html","700a5ff048ebb54c738b73b66abee9cd"],["tags/Wechat/index.html","251a224341581d49f62722f72158ed8a"],["tags/Windows/index.html","18ca2f2cdcd2e04b9fbe55c4f8fc9b74"],["tags/disunity/index.html","dae9dc0838a4db2a5753c2f31456e1af"],["tags/index.html","74ae15fff81b8fe30ca66517043fd48a"],["tags/matplotlib/index.html","95ddc62a95ab2a2aaa49ee8f90bfd0f8"],["tags/njsDelivr/index.html","a8dc80ba1de7476aa992b6939a2e2743"],["tags/uGUI/index.html","84ad4dd874c2dd27674989720ad00bd2"],["tags/zTree/index.html","9182dda494261df43ba96847e1cc7861"],["tags/一出好戏/index.html","f5b8f728854647c7d450a8f71122af10"],["tags/七牛/index.html","d21c29ef6a27fbb58b53768ed90134d2"],["tags/主从复制/index.html","1df07b049826ccc199c43ffa07cf2e67"],["tags/事件/index.html","f79e385f880254e5af4044876c5b98fd"],["tags/二维码/index.html","f527c05ad15a5f28042004cda1983c4f"],["tags/云音乐/index.html","babfe316e04e6b00e88deb76233906cd"],["tags/互联网/index.html","e0fc0dc515d6e35968e46dbe5f0318f7"],["tags/亲情/index.html","52cc16564f613168e3fe67952025dd7a"],["tags/人文/index.html","e612657e5c3d62b2c8639f7ec583e584"],["tags/人生/index.html","b7747f19f8a297f8492c33d67cd1c24b"],["tags/仙剑奇侠传/index.html","9fc1d187c9a3d32b209f24722ac27278"],["tags/价值/index.html","5f1c7265096d58d709ea1c579de70da3"],["tags/优化/index.html","1b3901c207de0dbb539031d0b5f06f69"],["tags/全智贤/index.html","44fc69e89d1f6b17ab998bca71cc502f"],["tags/公众号/index.html","058fa3cfbef755d5987cada4b4fda91b"],["tags/关卡系统/index.html","80e07f4dabf1803214fb508665a51a93"],["tags/函数式编程/index.html","f697971473aebeee048e4f34f8a75223"],["tags/别离/index.html","e1d39b65555ed66404fdf2a5249be38a"],["tags/前任/index.html","35f841d4236057fb024ff99f95df748b"],["tags/前端/index.html","d73a9e3edfbfa67f75f5e2a909e1412c"],["tags/剑指Offer/index.html","6ae0a8074857bd3177cf10cfa1e734de"],["tags/加密/index.html","6d8c8496d3393a59e37c6ce53e85ef74"],["tags/动态代理/index.html","b376b3e1b5de8ca59497bfbe18747848"],["tags/动态加载/index.html","4c630c6aa3da237d19fbc06a8a3a6d50"],["tags/动画/index.html","fad2e2e0e9675d0fce51e74bdf226a67"],["tags/单位/index.html","f3f47340fd02afbc6c9ffd3a24ac169a"],["tags/单机游戏/index.html","f64d52bbb31f46bdd15427033e4cad9e"],["tags/印度/index.html","f4b4e332317a9121a2dbc8f9e0ae602e"],["tags/历史/index.html","7e6826a433a10d64018246ca2ec493ba"],["tags/反编译/index.html","ccadc2d3937924298996cb156da856d8"],["tags/同步/index.html","f1f773c0130b915e9f75bfba18514870"],["tags/后端/index.html","e7ac312a73ae47274d8cf74f8b37e1f3"],["tags/命令/index.html","7f8f4bccd5c33e49057c16069e026d17"],["tags/和平/index.html","4dd1e6aaf941aa78bb6472e3447d57b5"],["tags/响应式/index.html","54a77ff0b13e113a1e8d27aebd33545d"],["tags/哲学/index.html","c483bbac958e1597344d9b9dfd896a0f"],["tags/回家/index.html","a0e4261f1be8f56960379ce6a720b111"],["tags/回忆/index.html","93203a9110001cb58a252e19a4a705ec"],["tags/回顾/index.html","dfe050533b71e69d9da3812465c56b15"],["tags/回首/index.html","f902128e0a68c5625eecb227056a036b"],["tags/图床/index.html","8f0ceeffa4690eeda9420a00f301ce0c"],["tags/图形/index.html","6ad78e0759f046eb20c4e16372ee7362"],["tags/地图/index.html","62322e11faf13542c68895e18d1ca68d"],["tags/塔防/index.html","06bdceac060f20bbeaf9419508e2778d"],["tags/增强现实/index.html","d52fbf18c4d5629a2ae1ce248d2f069b"],["tags/壁纸/index.html","e8995f0d62f8ca5970cead77514f24c8"],["tags/夏目漱石/index.html","364ae495a2ddce23f1021238a20cfb1c"],["tags/多线程/index.html","c0b9a3f61100a4da026c921633e6f580"],["tags/大护法/index.html","86325ad99d76c72f8837940f4bb624d7"],["tags/委托/index.html","5f8902b847ce3d33da1fbe685d832133"],["tags/孤独/index.html","c549093a7ac0485ff497d743e4ed803c"],["tags/展望/index.html","f8cb0e1b3403384b7985125bb2ace806"],["tags/工作/index.html","51d857d16696f7e8e1c2bc7085412e86"],["tags/平凡/index.html","8120e36005a07e6f3696986338abbfae"],["tags/年华/index.html","04bbe7f95acd9d8f8e2314f8dc8b3f8a"],["tags/年度/index.html","9d5e04a254c8713ea5362ece44c59ea5"],["tags/开源/index.html","8ffc26f6113c46b993c13bb6d14fe717"],["tags/异常/index.html","f7fc0e5fc1d70f04b0bec7813d1b2905"],["tags/异步/index.html","1979f8ac3a60967492542785979169ba"],["tags/引擎/index.html","451a067bc422b05e93bc76c3f1848ca0"],["tags/影评/index.html","a32db74909fb700a213535859abdd7d9"],["tags/微信/index.html","74a2079a43a7928ce300329ca9f940f4"],["tags/微博/index.html","933a9569d9190c7ae8f0154d79f9d76d"],["tags/心情/index.html","da616eea597d5b2b7675b335c82d19e7"],["tags/思维/index.html","3b3ebd3217ad716d14e5cd3bc72d242c"],["tags/总结/index.html","7a04beb360b5f342c90093e7eff0b649"],["tags/想法/index.html","601291628d0fc36ae086cba9ec196926"],["tags/感悟/index.html","9fa70a98ef992b81e7a8090e02d6aa21"],["tags/成长/index.html","cbadeac5e54df0029bf77ba1e3516fde"],["tags/我是猫/index.html","55455f4e022b46496e6a578800bf0c55"],["tags/扩展/index.html","41a27d02d7469a954db0595e9a61e222"],["tags/扩展方法/index.html","936733a848924693f919b7c9c84532d4"],["tags/技术/index.html","210bf860d7f71649e32c68d72e3c47d7"],["tags/拖拽/index.html","9bc0715fe9af0f53f4294139d0100030"],["tags/插件/index.html","1274a1a1c37e7b88deff0add9e3792b2"],["tags/插件化/index.html","3f23eda9812a2b9f48e2a0e207d4ad4e"],["tags/数字/index.html","32bc5e39d17fd4e0d673d3fc2b2058a2"],["tags/数学/index.html","44d99e93259629af97782b5ba4562dca"],["tags/数据/index.html","168b0a04e3e725c26c3ed8747216cf41"],["tags/数据交换/index.html","03b73a2cedc211535556d6b89ae4ed10"],["tags/数据库/index.html","76e9d3ee6b0c59a9331543e0288051db"],["tags/文本分类/index.html","6214db7db4a9a5e98b534d83461391dc"],["tags/无问西东/index.html","4afa8923b3788396cf957a2b7421f6ea"],["tags/日剧/index.html","8e0f57f8c182b64b85c9525c7f716eb4"],["tags/日志/index.html","17d14a4b332f51832fe5af7f28bc1822"],["tags/日本文学/index.html","c92fd0a3e84872e496ed1d6d99e0efb9"],["tags/时区/index.html","fef00a47045e8fb421c58947954c0614"],["tags/时间/index.html","ff176afcaefc2e803e97e02436ba72cd"],["tags/服务器/index.html","6dc43551f381364794a2479b836e2f85"],["tags/朝圣/index.html","6ec8680a5cfc8ec9d76da950c3579b6d"],["tags/朴素贝叶斯/index.html","2a6ec90b9018e77f6a3cd6f25027c735"],["tags/架构/index.html","3c60a1070aa5035274686b891460afbc"],["tags/标注/index.html","083888427de89a6feeb08ad79370e3b9"],["tags/校验/index.html","066e6dd907fb72e56823cf9b9916c73a"],["tags/格式/index.html","b2d907bb4524824eb380c33c5cd71b42"],["tags/格式化/index.html","d4e8cc3ff3cb4fb79b49097e71c56561"],["tags/桌面/index.html","e35f623db6857036d1bc6f5c6036af32"],["tags/梦想/index.html","0c07d4fadd33489752ca610ee4b56be3"],["tags/概率/index.html","814c4f10e984156c4064c887c90ed056"],["tags/模板/index.html","b4425c085f574e21a2072bf22e9aa324"],["tags/模板引擎/index.html","b4e719fd799cfc07d307d024d6840859"],["tags/毕业/index.html","bb4483cb3a8cba0c6f7ebf175093c29c"],["tags/毕业季/index.html","0fe3e5782480c2f50e316b720f8ea8ad"],["tags/消息/index.html","5b769c72da03e84995cf3aa3bcb0f454"],["tags/游戏/index.html","8e0f2dbec424350463e92b298264638e"],["tags/游戏/pages/2/index.html","38b9881bddb6f6e5ec5b1a84c842b1ec"],["tags/游戏开发/index.html","f90a48c7198fbe99236d09e1a55c5941"],["tags/游戏引擎/index.html","7f3afd7d3bb3a6cc85694ba8855e4675"],["tags/爱情/index.html","40dbb743c119812a76dab90e09a079ff"],["tags/版本控制/index.html","6051b013b3b1c3a7058b43d7ff1e7295"],["tags/版权/index.html","fa56a307195057bc9ebbbe78c0ca8a5e"],["tags/特性/index.html","0d6c1e6b3031a2d3fecc1ad7e26645b0"],["tags/状态/index.html","08c29cf8d0de85ffc96a2ac7c3339b62"],["tags/现实/index.html","fb462644917d4056377ffe38ed9ecbe0"],["tags/生活/index.html","20539d69cbdd2a97f790863d226eda75"],["tags/电影/index.html","3cebe346cd3dd85c5132bce49a51ead7"],["tags/画家/index.html","02f9c9426c42cc59fec35f55cf55acef"],["tags/知识共享/index.html","71b0afbbcd2f2aff55b31e81d767f0f3"],["tags/矫情/index.html","81655aa47cf21431d03b07e8bc913c53"],["tags/程序员/index.html","ec4b6f731d3de268616bea40d53860e2"],["tags/穹之扉/index.html","e1c9fbad5b1e70a97ba97768b361699f"],["tags/穿搭/index.html","b885e21f2650f8d061a64950cd29d98e"],["tags/童话/index.html","43c383b2d4eca21d459ea6448c27e91f"],["tags/笔记/index.html","a2e0711c6c6ac642581c3e8054260c0f"],["tags/算法/index.html","6015d20730927318ff836992e8f13fc0"],["tags/米花之味/index.html","f423594abd927c46adca873650003cd9"],["tags/缓存/index.html","a677af3b8bb77e16e73acd3c6d12848b"],["tags/编程/index.html","14b0743d20089a0a79bb5b13b55fe33a"],["tags/编译/index.html","fc6fa89bded56f7050fde48ba14d2727"],["tags/编辑器/index.html","144b1176ce874472408da8133c5ff683"],["tags/网易/index.html","e1df540eaf84a46f78ebfb8460bbcf3f"],["tags/脚本/index.html","b24c98f226f1889a2ed89d21471df6ca"],["tags/脚本语言/index.html","cc5438d678ecb0c0c1ee3ac3dac443ad"],["tags/虚拟摇杆/index.html","8a6e8d3cae053862b984115e83e41416"],["tags/蛋炒饭/index.html","208a212c958f4bb047fe7fe2021e5581"],["tags/表单/index.html","c53c975b7a87fbc0fa191f01f7a099a0"],["tags/装饰器/index.html","e3b3be78df7f0fcd1a210528f94d819f"],["tags/西安/index.html","16221d06d2dabd2bdc12cfe7cb5603dc"],["tags/计算机图形/index.html","95c74e7a393fe13e7069dd127815cba0"],["tags/设计/index.html","822f9484138aaac420e04dce4671fa04"],["tags/设计模式/index.html","047bc686b54eaeee1454d38390d2eeaf"],["tags/访问量/index.html","9f64b86d320a94fe59f7c91ff7550428"],["tags/评论/index.html","6d65a5550d75510c94b931bc11e5105b"],["tags/词云/index.html","23c3a27020e205a5a9ebd3a07c11c092"],["tags/诗人/index.html","9208391466e3961ad5da5dc981b17bc3"],["tags/语法/index.html","611de37cc4970d92123e199dbcfe62ed"],["tags/请记住我/index.html","2eb9f910dbde5de0a268f06b5b595c77"],["tags/读书/index.html","09c812c1166ca3833cf9720f0f345aeb"],["tags/读写分离/index.html","4568047bed9650101d85ecf9dd9d00ce"],["tags/调试/index.html","bc9090e7dfba8dea439bf1510ca77f51"],["tags/贝塞尔曲线/index.html","33f067b6396d20933f0e51d16f091036"],["tags/贪吃蛇/index.html","8894b98bd24e56c69b8af38b0fde3c83"],["tags/资源提取/index.html","e050b9a526a48faa0f408b86803694fd"],["tags/跨域/index.html","11f37ca0738554855bef59e452bd7803"],["tags/跨平台/index.html","f8a5292cd756646ce464207f1ea8ae0e"],["tags/转盘/index.html","c4e2c43939c5f3af2a295f33f941dc5a"],["tags/迁移/index.html","82ad1ec051ab566766f89af1972d7063"],["tags/通信/index.html","a73446f2bf8647fa4ced2d1181f92e4a"],["tags/邪不压正/index.html","6e0d41fdb0cd0635c398a65c377b335b"],["tags/部署/index.html","aaa3e0940e39d6009e9ff3c8c8b5effe"],["tags/配载/index.html","cc634aa051c214bd35afec6f84dc8d7d"],["tags/重试/index.html","463f1a8649c1a5715e835ea0d0c0c2ca"],["tags/长安/index.html","675494664d56a37a1be110218fa9f579"],["tags/长安十二时辰/index.html","370a713e74c35ce4bdce6f0ab8160236"],["tags/阅读/index.html","9213171e1a30d832ada4092c4b294a19"],["tags/阿里/index.html","2f61065c63569ccf3e3c817bd70e9298"],["tags/随笔/index.html","e7ce518d7e6f19c90034729e9d9cfda7"],["tags/霍金/index.html","03028b1dcc2049566b6d0a9eb1a1d2e2"],["tags/青春/index.html","890898ec4ce68af74c4635a6c66f56f4"],["tags/面试/index.html","809dc7fc531a76b8c3066fe00efc0d1b"],["tags/韩寒/index.html","e845e8239b53ed8aa9b71f0e180558aa"],["tags/马尔克斯/index.html","7cb9c4081805d1265b6885c6666a66ed"],["tags/验证/index.html","43828bcce0c163dd7ac68f51357ee536"],["tags/黑客/index.html","e06996152ac94f7f5462c98ae43bbfd9"],["wiki/index.html","7aec4cd0a54cb615b59b71de50090e40"],["works/index.html","bbdc7bf7436d4063b27b4beaa0480a69"]];
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







