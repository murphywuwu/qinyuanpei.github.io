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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","154d4e35e43c6bae76a41a78ba9be714"],["archives/2014/12/index.html","aaa15915e6f21221062d91b932edb5c8"],["archives/2014/index.html","6fc775279e8458b3f2461106a0e1fb5a"],["archives/2015/01/index.html","c058d8c9f076ff9e15f86c229444352a"],["archives/2015/02/index.html","8614a9d61be87ba8b67dcf7d7a6aca4f"],["archives/2015/03/index.html","22ec086f493e7b4518c30327f5b691ab"],["archives/2015/04/index.html","5979b8cbdd4b9ec46072e3052bc5c6dd"],["archives/2015/05/index.html","cf41c9700c31e0aaf4a4ca30e927dd29"],["archives/2015/06/index.html","a8e5821ab9aec60612f6d6e234da5965"],["archives/2015/07/index.html","feb6debebf66f28905bb1412ba3bfe13"],["archives/2015/08/index.html","83c9154397499fd70b311d3c3a200922"],["archives/2015/09/index.html","5528becb86a124601c96026dd2bfa879"],["archives/2015/10/index.html","eadcc4c3ce990d1985dda99a2089d1f3"],["archives/2015/11/index.html","031d64eae0a7b47ffd40101de562a1c5"],["archives/2015/12/index.html","26910aee8f41590212c0be081c91beca"],["archives/2015/index.html","52b2fa77083b1ec31ac213d343881760"],["archives/2015/pages/2/index.html","d02b84f5427b07afb606aa4a458fcd15"],["archives/2015/pages/3/index.html","767b23595fa9af158c560ceca25678d5"],["archives/2015/pages/4/index.html","fc279074eee2f0ab4c33bd021276711e"],["archives/2015/pages/5/index.html","3e581aae64021436df16f041294658b3"],["archives/2015/pages/6/index.html","a226b7808e7c9183c1adfb7099ba0138"],["archives/2016/01/index.html","2adcaa957eb7960e962e7103c179f21b"],["archives/2016/03/index.html","b8827ac60a2e8c9932e0d67a869c037c"],["archives/2016/05/index.html","bc3c8987235c6bc2229d31b423ccdcec"],["archives/2016/06/index.html","56ae799e13b8be15f732537e08d26c47"],["archives/2016/07/index.html","a18b7b3360db18ddd9d9eed8d498ea00"],["archives/2016/09/index.html","1e54c140bfa380e32e6604ef5f29d4d9"],["archives/2016/10/index.html","9af04179ca70e230d6000d942593f260"],["archives/2016/11/index.html","ac0631500c5d62e92db3912dbd755476"],["archives/2016/index.html","61dc783ffee0f919852c05b06f7263ab"],["archives/2016/pages/2/index.html","86c1b864bfc6b189441fa5f1e04018ee"],["archives/2016/pages/3/index.html","3ffa6bf653782f4ea58421d2d355a0ec"],["archives/2017/02/index.html","6412efbfe0dea9b0a23701fc333ed274"],["archives/2017/03/index.html","d1f285b7c4fe9702e72526bdaef98a74"],["archives/2017/04/index.html","805b4703d155c8de05cee2fd9171ceb0"],["archives/2017/05/index.html","726fa417e80f87fa0afd0fcd5c2f749e"],["archives/2017/07/index.html","479c771dfe62bdfe341ccb883065235c"],["archives/2017/08/index.html","28f587497cdba5df592f6a56675aa03c"],["archives/2017/09/index.html","bd31fc8d142e60066106aa13ca0abae9"],["archives/2017/10/index.html","f0a47e22b8ed582c8464f132bc60e30b"],["archives/2017/11/index.html","1faab7c9c576918a3c8000d59c37c459"],["archives/2017/12/index.html","d701e412a8c790f50dc0a00c02cb20ba"],["archives/2017/index.html","483a580a5c5d691c766bceffd09c9fe7"],["archives/2017/pages/2/index.html","c0e20fce703b3c7895c048153db97ffe"],["archives/2018/01/index.html","ba9780a3e119125bc4fad9b849e76304"],["archives/2018/02/index.html","58dfbdd301756285235edf66b1e363f7"],["archives/2018/03/index.html","460cade0a006a042bed1961064fcfdc5"],["archives/2018/04/index.html","892cc225e20b35ff4f47e92ca8f517d4"],["archives/2018/05/index.html","09286b7f8e0966e4974a16394ea46369"],["archives/2018/06/index.html","81791e5583ac34dedd909692f32de1bc"],["archives/2018/07/index.html","84a1db4ba0f367224a64fee352bb2d8a"],["archives/2018/08/index.html","494ae95c8306857051a746c2fa9e5ca6"],["archives/2018/09/index.html","11f0ad8c704e4f9d3bf5beecef2ede49"],["archives/2018/10/index.html","b37776e3509b68e82f9e1921e6687d39"],["archives/2018/index.html","0dfa0fa68e61d129349e4ddc0b4676b9"],["archives/2018/pages/2/index.html","ea6638ffa91aa9e0f4075673b7e9e0c5"],["archives/2018/pages/3/index.html","914ddb9f27f6e594c2b0f350db8336f0"],["archives/2018/pages/4/index.html","9a29e163814e6bd3b7b849a7b0d6ad22"],["archives/2019/01/index.html","6a9f77719f87ceabc86dc2918aebcb4f"],["archives/2019/02/index.html","b038daf146ee29bedd38b04321fafabc"],["archives/2019/03/index.html","2fdc91f6c4eb0c63592e66a043488c6b"],["archives/2019/04/index.html","1104dc893bb06f5d2a3d8d3d46e1923d"],["archives/2019/05/index.html","031b66f7341c4e9fd2b59980c0862861"],["archives/2019/06/index.html","9e1e3ef6c3ff548b4b5e83f23b465bf2"],["archives/2019/07/index.html","c7b2ede6fe79a1c7529efb89ba48dd22"],["archives/2019/08/index.html","6bbc7cde49c71ca1480bf8f43ab560ec"],["archives/2019/09/index.html","0e03d4d7570880037caa821022e39311"],["archives/2019/10/index.html","00b9300605cc3464f2738d5b06d1d43f"],["archives/2019/11/index.html","45321038e69c31b760938f4cedb44f85"],["archives/2019/12/index.html","feae872329cdbf7e3b5c59b0109ee96d"],["archives/2019/index.html","fae3c51b68db555316ce05281f7b0efb"],["archives/2019/pages/2/index.html","0e2721263b76a12ec514124a0e2991e8"],["archives/2019/pages/3/index.html","8e3f494e3af88390017b50329fac9d9b"],["archives/2020/01/index.html","3df8aaa6780bba3b6c4e51fc3f5a198f"],["archives/2020/02/index.html","f5c79ce20f9c1260bb1c1aac689e16a6"],["archives/2020/index.html","40ef91fdf996d1dc72374b196cf28e29"],["archives/index.html","efe4797de6f576329a8aeced7ce1e3e5"],["archives/pages/10/index.html","23db975d911ed4fe80710537ed1fc9ac"],["archives/pages/11/index.html","a06b7a0791a0960c0b8efda3fb01a54b"],["archives/pages/12/index.html","4230bf480d39233b5082fb0c7d92a384"],["archives/pages/13/index.html","95ef69977364a3bd189bf4eba8c7a146"],["archives/pages/14/index.html","b0d944aa6fdbf2fcd45668d5db393fd8"],["archives/pages/15/index.html","45e64ffca515da9d735bcd68fe803469"],["archives/pages/16/index.html","766a674df8c51efa1e043562faeba94d"],["archives/pages/2/index.html","42695cf764cbf6dcddca1b000a070101"],["archives/pages/3/index.html","e0cb9a78a1f5653dcb3548b7c2c3c9ef"],["archives/pages/4/index.html","5cc5d5408b2f8c63e212119b3235585a"],["archives/pages/5/index.html","264ed7514bc0db09add9a08d2d7d6a75"],["archives/pages/6/index.html","4d9fa0c7ed490aa376581b2fd5bbdb4b"],["archives/pages/7/index.html","c81d12bc6d64715178a830a427cd2fea"],["archives/pages/8/index.html","490462db5b3dcfe4aa4eea56a9713778"],["archives/pages/9/index.html","48daea93d320d30cbf47c7e365be5435"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","7fd5f76884cc73b2acb4da200dfdd19e"],["categories/Unity3D/index.html","b48d4851b07527f42b324247a7519d15"],["categories/Unity3D/pages/2/index.html","02f1011ac1f293bc7b0749e770ff3563"],["categories/index.html","96cebac3938ee058ddaba7dc15865cfa"],["categories/人工智能/index.html","bfe412dd8727470ec5a6559cbce01a8c"],["categories/前端开发/index.html","b1c433c47738361f83c3e1e862c7bbe7"],["categories/单机游戏/index.html","f0c4b542908d397cc5ad187ab05ca8ac"],["categories/开发工具/index.html","f71dd45d87b1faccac493882c5772c1b"],["categories/数据分析/index.html","24272fb366948c4705829cf4c978c7f3"],["categories/数据存储/index.html","1c69c87428000c7a2b242acdcf7ae587"],["categories/游戏开发/index.html","d856c5aff8194f04464aacc9fd037469"],["categories/游戏开发/pages/2/index.html","58895839439806120213ce82534b8ca5"],["categories/游戏引擎/index.html","fe068ba408bcc2cec195977301402b83"],["categories/独立博客/index.html","4a4b615f3a6c7879d4354f81fc83ce37"],["categories/生活感悟/index.html","42e931acab00e3d108e5fdbb0995e6a5"],["categories/生活感悟/pages/2/index.html","e5d640bd0d9400943c27b74e65db09dd"],["categories/生活感悟/pages/3/index.html","45924045f895aa2a9c6066571e874068"],["categories/编程语言/index.html","afcbea17090e926f9b194f987b14f643"],["categories/编程语言/pages/2/index.html","b26180aed56de15777ea21ea914b7eb4"],["categories/编程语言/pages/3/index.html","1e0cd54649b7e5f1cf6b31637c1b542e"],["categories/编程语言/pages/4/index.html","a520ac58a03446a00386b21d7b765246"],["categories/编程语言/pages/5/index.html","28f36de9e3ce6e59f3c829bdc1cf7acf"],["categories/读书笔记/index.html","61f259c7b34762c3ff538b11ea089959"],["categories/读书笔记/pages/2/index.html","f9e9a1ab5d6692408b470caf860cf81b"],["friends/index.html","053646dc67b23b5d1715f09f3a324db0"],["index.html","b3c584032906fa3933119ff8bcfcf5d9"],["movies/index.html","fd75497e1c96519f419c3e35bedd255d"],["musics/index.html","45014d1523ccea50d8e50401b8c1651f"],["pages/10/index.html","688015619d3e234dc2472a9f614b7021"],["pages/11/index.html","a9660b7607ce2a14191c385f85497e4c"],["pages/12/index.html","ec5b4be1502f1157f8d0d201ca583c90"],["pages/13/index.html","92690377010a208b1c5a1df827e246ca"],["pages/14/index.html","7c15cd1ad95ce729a3819d4876a8c313"],["pages/15/index.html","4f0903378e643a22a80c918124de27e5"],["pages/16/index.html","6e1c3d10dd4c5985fd375529269c1594"],["pages/2/index.html","8fa55d0d3cdf3d69f5ed08ebc77597dc"],["pages/3/index.html","1b9d38979ceec86d83462e1aad1dda2b"],["pages/4/index.html","555bef98920487994d2fc89834c0871d"],["pages/5/index.html","bfd06a3871e60114f10390f06922b752"],["pages/6/index.html","30b4225372282e3b72fa707d80540f67"],["pages/7/index.html","1d93c49ac31f2d69c442c4ce1432771b"],["pages/8/index.html","0e5bd82a51bf5b561e333917f14dc455"],["pages/9/index.html","ee41a37b95d8680c8251c31acaab482c"],["posts/1059499448/index.html","02eb214da249b631790a950fdd00a8e6"],["posts/1071063696/index.html","8f7ad80100d02e2880086227f0a32136"],["posts/1082185388/index.html","22a8ad93620d50e4ab4f702c70c45378"],["posts/1099762326/index.html","34a129fdff768715198766ec2353810e"],["posts/1113828794/index.html","fa729da7d5c5623c1cf210f5167359d0"],["posts/1118169753/index.html","632c993e54f7e7f8fee5afc9bd4d601e"],["posts/1122710277/index.html","fb1e3bdadd4f769fd19177769795f74c"],["posts/1124152964/index.html","70b9d75feecb0deecd1158cdac5a9fec"],["posts/1127467740/index.html","7eebdac91c08cdad611ff1d67b21cf26"],["posts/1150071886/index.html","beb7e9378d949b238256ecb70b37cf30"],["posts/1150143610/index.html","7b509755d6e6e3ed2ffbe37923332654"],["posts/1152813120/index.html","258fb9a0b4110c565a84370eff4a285f"],["posts/115524443/index.html","6e5f113c4864e2f8643d749cdf07bffe"],["posts/1156673678/index.html","c93ecf57c485b1b3d67abc7d9706038d"],["posts/1166840790/index.html","7bb2b620444fefdffb35b650a5d05770"],["posts/116795088/index.html","71b7eeb8c5d7c80fbfa7618d974ef4a3"],["posts/1176959868/index.html","a10c758be890f304ff0cc9399283c41e"],["posts/1190622881/index.html","247774ca019dcfaa0a7ca60079246b19"],["posts/123663202/index.html","8d32f134eb35fb904f23855029c23539"],["posts/124807650/index.html","be0fed92b572a4824855bfbbff729267"],["posts/1254783039/index.html","07038a515fa5a66a6c58425e35a2568f"],["posts/1320325685/index.html","aa930630a022fa15b002c63486bb3c0f"],["posts/1329254441/index.html","6cca2837765f6d84a25dd0a221a3940b"],["posts/1357715684/index.html","5535dc83cd709f7b703ae2623cfe893c"],["posts/1358971951/index.html","bef9e0e5c273e869c2be346749812975"],["posts/1386017461/index.html","82b119163c7f61247da0de076a339a64"],["posts/1394521917/index.html","51dda3497a9ec21ec7bafafce1110c61"],["posts/1397717193/index.html","c20bcddc0ddf2f8943121cf8b3af41f5"],["posts/1417719502/index.html","9c4415849759c49e87d3eba13b1fce7d"],["posts/1424645834/index.html","0fb0ecac90620594204c6e3e62274cdc"],["posts/1444577573/index.html","d60736914ab6bec563e457320c25522f"],["posts/1467630055/index.html","b5784c5cd3f9938b3f4cf3409048294f"],["posts/1478979553/index.html","b6febfbe005139725c8035e64e41a299"],["posts/1540537013/index.html","b067469676efba5e118ca0bb62519ab2"],["posts/166983157/index.html","0288b17839dfe9fb2c186c3f9dca41b3"],["posts/1670305415/index.html","7944773e044b5acf78cd1297e59e7bcc"],["posts/1684318907/index.html","a61291b827f5b1c66c254193d0a53afe"],["posts/169430744/index.html","360803f9077f6e5133ce5180a6881223"],["posts/1700650235/index.html","925bbaaba443e486c2baa6e941b4f17b"],["posts/172426938/index.html","5daa78549580468509a04112cceab0e9"],["posts/1836680899/index.html","fa76703958f5cccff5d081c525729c6c"],["posts/183718218/index.html","52643d9f2871c8591c494b96b8abbd43"],["posts/187480982/index.html","9e3db61b774f1414f7276ab96e516c3b"],["posts/1930050594/index.html","bbd6289392b5e3bf4a23bf8c82c8e3ca"],["posts/1933583281/index.html","641cd8d1f472d775d37257c49fbca19e"],["posts/1940333895/index.html","a562723ab7f4a8a668393f1144823c59"],["posts/1960676615/index.html","6b2dd0795ca6fe99402e3cf46d863342"],["posts/1983298072/index.html","21735e61432e9bf499ba6a96e93860e3"],["posts/1989654282/index.html","43e19dc2a1de20596490185883ba3d64"],["posts/2015300310/index.html","6a0162c2d43bdc63eb865d8408591f04"],["posts/2038378679/index.html","7656caf9e7e5fb754968314fe1be19ba"],["posts/2041685704/index.html","ef3349fcbf0ff2ae2d78e6a68a4ead0e"],["posts/21112647/index.html","785344cf1bbc1b998121456c37b6a37a"],["posts/2158696176/index.html","53df7721ccf6f4a236f79ee711e505e1"],["posts/2171683728/index.html","d6e8151decbf7ee6c519fbe7fe7efa89"],["posts/2186770732/index.html","3ffa1a9be65bca6c116e8d9d5b794cbb"],["posts/2275646954/index.html","7d50725df25c5a85c12a3954fae18af8"],["posts/2314414875/index.html","7a07d720ca31a7323a046b7e256cea90"],["posts/2318173297/index.html","c32d79d76c57f99d4e5b88dcc5aa39bd"],["posts/2418566449/index.html","4e3f026966335c252d600bdd2b43194a"],["posts/2436573863/index.html","6896b1378befe461e914e0b90b8297ee"],["posts/2462008667/index.html","922a33e45ba7c401f87b01ec28915fa1"],["posts/2463121881/index.html","cc57df3df0ff8c10f3dc2dd117c8f29b"],["posts/2527231326/index.html","55408881bb56936d5356aabf1a282d2c"],["posts/2583252123/index.html","581500ecd6d16fd2ba7e4bc9e040510a"],["posts/2613006280/index.html","e23b94f2b6429a3e622b9bee44bfd92c"],["posts/2617501472/index.html","590d61130a302a7a188600acef6c5835"],["posts/2676125676/index.html","200a9d6a17e928dc5bdcfc51f3def79a"],["posts/2734896333/index.html","2e1e42bda8234622c6f647fb2c5b112b"],["posts/2752169106/index.html","15ad89e76f440d0c1d8778cc3ab5cdc4"],["posts/2799263488/index.html","fb83d4cb4e6467bc626b6bbf27ff10ac"],["posts/2805694118/index.html","6228babf221442bef55495b00cd5d869"],["posts/2809571715/index.html","f25f29cc77571420f0892b50924852d4"],["posts/2822230423/index.html","c5364dab185b639aa3c1cc42ddf2e647"],["posts/2829333122/index.html","34f241463142470d0cf44490b30a72c9"],["posts/2911923212/index.html","8a9d02c948e88dffa3a19370d39012f8"],["posts/2941880815/index.html","763ed02cfd2ff617053fe5362bb38c33"],["posts/2950334112/index.html","c5f700020956482793c79dfd15b5357f"],["posts/2954591764/index.html","e967da2ed2ab00a2a407ea249a8d7ac4"],["posts/3019914405/index.html","016c3970cf518095739f4efc74e22744"],["posts/3032366281/index.html","2029ab2278fdf4e3ee673a58a863c931"],["posts/3040357134/index.html","df9863186d787eb1cdb2a96c4bc7a904"],["posts/305484621/index.html","55243ec81326ab6d95ffda4669fe45f8"],["posts/3083474169/index.html","25013ec67733a24591a60f70e636f074"],["posts/3099575458/index.html","544d86cbcc47ac76862a9c6084638364"],["posts/3111375079/index.html","5cf4b9ffbbb49491c2b16c46520630a2"],["posts/3120185261/index.html","fac92d98966b4991f5bbbac467d41ace"],["posts/3131944018/index.html","d0d522d3622a2676204cefe1a5b26e2d"],["posts/316230277/index.html","cc65b833f945fdd3e760f8660b4918b3"],["posts/3175881014/index.html","cf27785864ffe65c790b80118ee1e653"],["posts/3222622531/index.html","ae6b34dacfe6df3f2b559b7cd89e301d"],["posts/3247186509/index.html","1c42958ed0f862ef33e4338c6fcdbca4"],["posts/3269605707/index.html","1d8d0f30dc5ab3d46c80391f1b5c712b"],["posts/3291578070/index.html","1703ff9a7e7b30c33c51911e84e55654"],["posts/331752533/index.html","42ed7a99d202e1a7a03f555a463a203c"],["posts/3321992673/index.html","b4d48d1d7b1084f4c40695b63556dae5"],["posts/335366821/index.html","08520e64c5a7383abf0c906d4e5c0c9a"],["posts/3356910090/index.html","ec2dfb64ea0992315c4f751ea6b45412"],["posts/337943766/index.html","701b70fcfd9511f421259b04236529ec"],["posts/3417652955/index.html","efe1537b9519387d914fe6aacc704e51"],["posts/3444626340/index.html","55dbbabbd2c9b3ac2f341aa3228bf67f"],["posts/3449402269/index.html","9b2ceca522c0fec0c8b01f275542af13"],["posts/345410188/index.html","0fccad68fed95feceee35fbd77dbe8bf"],["posts/3461518355/index.html","0468839a0e244c9dacb37e439ae3833e"],["posts/3494408209/index.html","d5894824c9a340a5536a5e5c272d1b08"],["posts/352037321/index.html","2eb1a6cb2f18f107f730442c455380ad"],["posts/3521618732/index.html","49696835cb80a0fddbe446890470b9b1"],["posts/3568552646/index.html","4966731591be2b639ab1c0971d667e90"],["posts/3603924376/index.html","59e4c52179204249d4921c1c360b45b7"],["posts/3637847962/index.html","5b6458142701c4144d5a1b82c0e74bd7"],["posts/3642630198/index.html","699d36b7b70bc8ae161bc197ff55da3d"],["posts/3653662258/index.html","a618ea12593df7b0ecf81c387bbc962a"],["posts/3653716295/index.html","bb00ee32d7a4731bd760748f59f2fb9b"],["posts/3657008967/index.html","bf1436ee884e8641334e07ffaf8110a2"],["posts/3668933172/index.html","1bb4057490aac1658c88bf044a0b78dd"],["posts/3677280829/index.html","6ab6fac05123a6a81cd566ee2430de95"],["posts/3687594958/index.html","844613d19a4fad7d50ffb96cba333a7a"],["posts/369095810/index.html","c34a47101231875003888ae90e132517"],["posts/3695777215/index.html","95b0e4cd28c3c0e29af3b4456061fdbd"],["posts/3736599391/index.html","a95f94003cd3faed331e0558f916e63b"],["posts/3742212493/index.html","74250d052f3f466b6ba2a38cb7207e41"],["posts/3782208845/index.html","956e4ba5c49ad0e4f9339acf86fe1387"],["posts/3789971938/index.html","f4ceb0f1fa97091c14bf58abcf45da2c"],["posts/380519286/index.html","48039f3ebbd6188d28a39a8ffdb37cfe"],["posts/3846545990/index.html","4bc52a295f678247b590e3ab758319a4"],["posts/3873710624/index.html","e41295dd19158b6dbaf9d80cef12565e"],["posts/3959327595/index.html","336d65481734857ad56aa1d50457a539"],["posts/3972610476/index.html","9b89f363262775cafea5924e485bb72f"],["posts/3995512051/index.html","5078dfa948228b78f676ed3226db4fd2"],["posts/4088452183/index.html","c4b4d1259cfb0305494a235514c2cbc3"],["posts/4116164325/index.html","ba1dfc7a585cb4f3b9e4e9f469929d20"],["posts/4158690468/index.html","0ca312905dd1cd2fdb473396499e76bb"],["posts/4159187524/index.html","7e6fe3a26e9157cf7924ae6c7f13725d"],["posts/4197961431/index.html","3fa952bc2ca9c02b4440f1899f9361e1"],["posts/4205536912/index.html","69946028a6bee2e968bd55405cb79846"],["posts/4236649/index.html","b49b77c39deb5950ffc650344a1834bc"],["posts/426338252/index.html","e917573f9dc1b4cec457da90db197022"],["posts/450254281/index.html","c51604e69280a966aeba0ada72246cf1"],["posts/4891372/index.html","a9b9d9a81a4eda68a330f18eff0d232a"],["posts/569337285/index.html","385f9c2f720a2df241c108915de25425"],["posts/570137885/index.html","344510f4d3d132fc818fc15de02250b3"],["posts/570888918/index.html","4e1f1586500fe5eb5dd6cad8d0b63b27"],["posts/582264328/index.html","830cc6cf5b36cdc8fd8898d82c590b5f"],["posts/632291273/index.html","d64bdad2a829802ab4a9eea1d48d3c5a"],["posts/70687890/index.html","9129dbbdec743a2acd53047eb62e7f6f"],["posts/719322223/index.html","534ee272cfcf54b6fb42989de3f7018e"],["posts/720539850/index.html","986d974dcc504f8a9351ad9f8e020f12"],["posts/786195243/index.html","bb4f8aade3b152a3f42e111185257bad"],["posts/795474045/index.html","f0769d9bc8a49d405dba1c178f4dd646"],["posts/815861661/index.html","ed433e7f87f657c16a13fac30cfd5e91"],["posts/821259985/index.html","1007679c748882a13d2be5cbce2b498d"],["posts/828223375/index.html","a7ba8c8d53e6465c17fa1da63b23e5d1"],["posts/887585917/index.html","63bf2e591f6057f0b3e086c3694bbacf"],["posts/888549816/index.html","3a4807f74ab8459b6919641ee453552b"],["posts/906436376/index.html","f199179f9b7b65303aa9bd1ef89e7ba5"],["posts/907824546/index.html","a92b5930ed9e2411c05ca14f2f7cf6e1"],["posts/927393529/index.html","bcdff785dd4391371f99ad94bc2b8c78"],["posts/94443781/index.html","f4a6a55c0fe94ef45c4f59777a07ed95"],["tags/2014/index.html","6623e9ef071016278fa11b33c99d261f"],["tags/2019/index.html","9c574cda458eb32a1c91778b1842e146"],["tags/AI/index.html","c6ff2476133b461f0be78e302391abc7"],["tags/AOP/index.html","863ec5382a29683de924f9b09b65038c"],["tags/AR/index.html","bb03291edffca7019a8a3ce05c1f9465"],["tags/AssetBundle/index.html","b6084d487ef16039073f7d6e550c2466"],["tags/C/index.html","c3659e29046d62a188a9c83c0fe6dce7"],["tags/CDN/index.html","538ef9458763a2da9ed010da55b051fa"],["tags/CG/index.html","b996ad17dfe7fc28b8dfa7d21a56858c"],["tags/CI/index.html","79a3ad72483d48e2b2ea5e776556e76f"],["tags/CORS/index.html","ab962f79f71ba2000956af580a0bb918"],["tags/CSharp/index.html","b108931a51c525d8d4909be4e338a542"],["tags/Castle/index.html","036c3e51d9a312987d0af991028df320"],["tags/DBeaver/index.html","21e987fdc4db72fe361088d4dcab2122"],["tags/Docker/index.html","7198ea7b924ca1ed592739c9c785cfe1"],["tags/Dynamic-Proxy/index.html","fec80d2239696edf435972d7808980e8"],["tags/Dynamic-WebApi/index.html","d1b7cf1c9dd40fefffe5d8ac601280da"],["tags/EF/index.html","083ba6730a9b44cd5eab08ecf832c3dd"],["tags/ELK/index.html","4c6a8bfc9bab0682917c659d855d8e4d"],["tags/ES6/index.html","14252111b4b520cc36cc06e1ee337adc"],["tags/EasyAR/index.html","3fef67f342eb2f161e04a42b77adcc90"],["tags/Excel/index.html","eafbc13488f72d39608790f459f04707"],["tags/FP/index.html","30fb5e93fd3442befaaa6a9956660ba9"],["tags/Form/index.html","c882d74d9f3181754cbe5ea8d38c9589"],["tags/Git/index.html","51935b003467bb278915e35b16d7da7f"],["tags/Github/index.html","275826a024383cc87ede53d6951f833b"],["tags/HTML5/index.html","d6adc0bf996589ff1c10bf7c6a038d58"],["tags/HTTP/index.html","705f80a8a25420130690977b2444ea02"],["tags/Hangfire/index.html","302a6a3ac8926523c699ecdb7c01e10a"],["tags/Hexo/index.html","c98e33532c23103c35611e0260dd56f8"],["tags/HttpClient/index.html","fbdc09634753b51c86adeeb8a7453633"],["tags/Hyperlog/index.html","8a63b1a5e2714da24fd4966687d0e5d3"],["tags/IDE/index.html","73aae92d905eba7f2ad5d3f48e10dbe5"],["tags/JS/index.html","346b0c6a74c085b14f677eabef677723"],["tags/JSON/index.html","0f75b7b99f5ad5e363f9821bbfdb77ca"],["tags/JSONP/index.html","6e57ac16dc57032c3c6f051cef816448"],["tags/Java/index.html","90c9927a07315a7a195a014505986d1c"],["tags/JavaScript/index.html","46dfa90330729639cde24239eb50c688"],["tags/Jexus/index.html","1abe7dcd2af99f46eecf93cea5437fd3"],["tags/Kindle/index.html","b3dbb9364c78cc761b548a1a59e09ffa"],["tags/Lambda/index.html","0f575662150719f78562593d66f43e13"],["tags/Linux/index.html","f54485ccb56048b52b4138342d7419cd"],["tags/Liquid/index.html","68959b071343200ecddebee5723a542f"],["tags/Logger/index.html","c16f4a4b80fe039662fad4f278d605a7"],["tags/Love2D/index.html","35553ed9a72014c0e517d02df903128a"],["tags/Lua/index.html","343202ed63f563c1ab8237d43a9701e1"],["tags/MMD/index.html","9a4b9d7101bed9da094e0cc29c517daa"],["tags/MSBuild/index.html","e66eec0fe78a605b9a4b2b92993d2ab1"],["tags/MVC/index.html","f9c0258471cb2b7f40dfea564d512fb9"],["tags/MVVM/index.html","cac636bec41afbe93e9e6b5fd4b49311"],["tags/MapReduce/index.html","d5e7b4c8c251f2685979d390cbe48e4a"],["tags/Markdown/index.html","0d69280796a2ef38641ab60987cb1ba9"],["tags/Mecanim/index.html","dcfdb04375d004866fd259b5e7394ddf"],["tags/Mono/index.html","8d90dd754935439647c2076ceb5ef90e"],["tags/NET-Core/index.html","1083db4732aa272f3d576a16aaef54c4"],["tags/NET/index.html","0a81834dab8e767c14c92a51598fb539"],["tags/Nginx/index.html","7026a928bf25b0f99cd2f5f6dfde92cf"],["tags/OBJ/index.html","2c0e6b77a1372b0d383cb508306624b3"],["tags/Oracle/index.html","c82b4012d20b0b8efb5584e5ce31ef5c"],["tags/PL-SQL/index.html","542fdb9b3c2f0937e452206337da6f23"],["tags/POCOController/index.html","917d8e8d3245ae081e9881b86069de4a"],["tags/PWA/index.html","5f677652de07a2cbe7867228bfe452bf"],["tags/Python/index.html","c7f1bf0b8aec08482eb8ebf5958060bd"],["tags/RESTful/index.html","dd7a4239f7a225ba01fd3a78a3c65af1"],["tags/RFC/index.html","c4161691506ba46bdbcb397f9548a897"],["tags/RPG/index.html","0f3cdcaeae8a07621b52f5c3fb29c429"],["tags/RSETful/index.html","3218f837b4cc919c306866ee479355f6"],["tags/React/index.html","f37fb16ab25d4b7cc13d569bc64062d4"],["tags/Redis/index.html","cae1f76c0443c1cc2a725200fcb3383a"],["tags/Referrer/index.html","8a5ab17cd9722a7d002dde8eae9b8b51"],["tags/SDL/index.html","e24f97617d5f24b75987e718ef5b46fd"],["tags/SQLite/index.html","528bb44a5401b0ab498f9e6f8a444ec5"],["tags/SSE/index.html","8af4ef2043265096c9f7e762fdc7fc11"],["tags/SVN/index.html","ec40bcd2eb4493953bd800bd82cc0894"],["tags/Script/index.html","1d1e4783bb34eb0a386584a82f95a2bc"],["tags/Server酱/index.html","1823085e42a5cc7f422f2a2fc47b41a6"],["tags/Shader/index.html","4a3824be5a0a59001f6b310e71bd49eb"],["tags/SignalR/index.html","730b89b09253b24a2a00cbfd30e69fa3"],["tags/Socket/index.html","3cc28eb3d45b74985961ad177229c551"],["tags/Sonar/index.html","8eadc8531ec7187fd3403c2aab505d39"],["tags/SourceTree/index.html","ec95e41e5af8725887bacc7594189ddc"],["tags/Sublime/index.html","f823e30f037dd4d71be5ee6fe6e7bc38"],["tags/Swagger/index.html","4558956fce7781c8acf1e02ce797b03a"],["tags/Trace/index.html","74ae6d8363b06ef1d43822d65445ed66"],["tags/Travis/index.html","a76eb461b3276b04f68f36dc96e21158"],["tags/Unity/index.html","b18eb91c3c5058cffa2159385a298cca"],["tags/Unity3D/index.html","f5d0dfb368d571274c25eaba01c3d311"],["tags/Unity3D/pages/2/index.html","f7a596ada3727f9aac422e275746a032"],["tags/Unity3D/pages/3/index.html","7a2d2e6e43cce2760ce51a3dcfe45599"],["tags/VSCode/index.html","50eaddf619cad3c4f2a21a0235724921"],["tags/Valine/index.html","237d520a5983c2d44b0428714a3902d4"],["tags/Visual-Studio/index.html","fd7dcea90aec86051d6527415481f307"],["tags/Vue/index.html","d1754508d8a924d7341541bd44e281c7"],["tags/WSL/index.html","68d95420c528443a21712574c1b7e5bb"],["tags/Web-API/index.html","7db292fb477fc524e3a4338b77a8c4d9"],["tags/Web/index.html","c4a3bda203fb3acef0b746d88d5e9a46"],["tags/WebApi/index.html","584eade2d05a6ae5757b2729f351bd8f"],["tags/WebSocket/index.html","d0d3230e163ecee2a7edb2032a2dc5d0"],["tags/Wechat/index.html","a1e6127c5f4212a0955c9d5a1c5927c7"],["tags/Windows/index.html","bfe2e3b2f0c97b7d4461d2929e7028f9"],["tags/disunity/index.html","814474825adedc2e8b0629d0fe419507"],["tags/index.html","06a90e30432dece7d2c9c5057710f187"],["tags/jsDelivr/index.html","4f0559af21fa3d747d3f711792dcc3ce"],["tags/matplotlib/index.html","7a1bf6b84a30db4485fe57bdee8aba45"],["tags/uGUI/index.html","ed5ccddb7fc465da1e616ee7822f417b"],["tags/zTree/index.html","5af068f34deca9999323c7e3aeacd2fa"],["tags/一出好戏/index.html","c3f362bedb078d96ca6404ffcecb7d4e"],["tags/七牛/index.html","5e7f25b3d74009e582f3de71193c596a"],["tags/主从复制/index.html","ee811298cfec87c5a84542753f2170ce"],["tags/事件/index.html","d30df429815e8d1236dda874da07df15"],["tags/二维码/index.html","8bdf7cfc42a7f39e64c8c3cd67977435"],["tags/云音乐/index.html","a0ac8ef26ca1066cfdaaaf7c7738d17c"],["tags/互联网/index.html","8cd71c4b89fa707a0f26e7e8bfe55378"],["tags/亲情/index.html","c3eb0801be27eec916831b4bd6fe4d26"],["tags/人文/index.html","3cca0276fdacbd254d896d4f9d40586c"],["tags/人生/index.html","a331a04c05d55b49f1416b6e0697f847"],["tags/仙剑奇侠传/index.html","25aa8eb3cfbf22544956c91c3e9aab21"],["tags/价值/index.html","85db99056779307efabad489abca29fa"],["tags/优化/index.html","483032270effee567953ff6ce8e4c5ee"],["tags/全智贤/index.html","2a117283a39f5363df0dca9d9bdd7322"],["tags/公众号/index.html","2244b2a5ad0d9071b8e02452aaa2ab46"],["tags/关卡系统/index.html","199bf51d422880460d3e1d10f04337dd"],["tags/函数式编程/index.html","1cf79de7e4750e2e495e1072ee6cae6c"],["tags/别离/index.html","34e0d949b2890622d7bacc9d56e3f53c"],["tags/前任/index.html","5fd1a1fc87b78d68b7e983b2eae60118"],["tags/前端/index.html","dd3976c555afffaa9f9b1988f5baba7b"],["tags/剑指Offer/index.html","e269d3fafd86ff80e6e2ed3b84a07631"],["tags/加密/index.html","c7fed7da98d4ceb123347368a3529de4"],["tags/动态代理/index.html","f9d6cd12d9252ce990a29a63c1ca4971"],["tags/动态加载/index.html","6f47111c325f37c71b0af500a4f5ba35"],["tags/动画/index.html","3c5d8f4debd9983d5ca33c62193b4183"],["tags/单位/index.html","dcfc16a51b1358e8dd411502160e92fd"],["tags/单机游戏/index.html","274aa2ab31872b93c16725e7c7548e87"],["tags/印度/index.html","fd3fb2187389684316729407f9d9edb4"],["tags/历史/index.html","093f28ab33501073b060dcc598ef0b3b"],["tags/反编译/index.html","d621e8873095ea7dfc4f69e0cb6117b4"],["tags/同步/index.html","7def6660adaa80bef5b8675c2b0900c2"],["tags/后端/index.html","054973ffc6ef0a5eda4dc16347df7e52"],["tags/命令/index.html","a1b7cdfc2f1132822d0be6264cca695a"],["tags/和平/index.html","91a725a6abc021ad544f6a39979c5fe4"],["tags/响应式/index.html","9f1d24b6154478f4468ab786f26fe1f7"],["tags/哲学/index.html","b5444c8eddd32a3d875b83b20d50c711"],["tags/回家/index.html","6dc34105c326da24417f6f501add7ab6"],["tags/回忆/index.html","af76632aef2c569d2d4502fd5edf07d3"],["tags/回顾/index.html","642dc8583c419bab807e4f4c401e4a00"],["tags/回首/index.html","4722c3eb9acf3890aefcd1b4d8b5da24"],["tags/图床/index.html","12f879f646e206f855c804900aad3824"],["tags/图形/index.html","7850f3e1a21b24116b8b4238df25b8f5"],["tags/地图/index.html","3b1f27c4314160446a72ea0fe15c8757"],["tags/塔防/index.html","032aa1e212ca0549e199c6e9c61d498f"],["tags/增强现实/index.html","b4b7778f7dbc6a236c5d94fec8b54b08"],["tags/壁纸/index.html","bcfa0886710e922589c97ac7c22df514"],["tags/夏目漱石/index.html","bf565ef27ec2bd2e8a707ad120cc5c26"],["tags/多线程/index.html","4e280a64aa641b070c123fa261a5c420"],["tags/大护法/index.html","e4d15ec1c9fc0400221f5d7dc007e712"],["tags/委托/index.html","2dce0edc7ca34962f8d61252ea416ae9"],["tags/孤独/index.html","2bc55348252799fbcbaa2cb8a23b0c5f"],["tags/展望/index.html","b4fc49453da74af369b3dae32b842a1d"],["tags/工作/index.html","6d075220a86a5deb8e75a4c6654c6a2b"],["tags/平凡/index.html","afa4b2728977e24564fe5e75f8825da9"],["tags/年华/index.html","af12d293c5874d4979f0417929ce7a27"],["tags/年度/index.html","43e4ed3c67e83413aaf03ed4f0843e23"],["tags/开源/index.html","275a025596c21dfe277ed42f7b946e8f"],["tags/异常/index.html","545b017c8f5a24d387d43d88682686dc"],["tags/异步/index.html","deffa4e0e7bff97d48cfe1b737074414"],["tags/引擎/index.html","8ef31fc21abbaa38879f822b61fc1c30"],["tags/影评/index.html","4ad971473b80481971edc026f2965df1"],["tags/微信/index.html","ee8b5cc1680199b9e390cd7b6073d830"],["tags/微博/index.html","624e0af4b66c5fd01a3fcab5195ec2a4"],["tags/心情/index.html","6528dbbe1344efd515037fd89c284a5a"],["tags/思维/index.html","046781b2c3d765da43e86e46ca4b871a"],["tags/总结/index.html","bc5aee924b8bdd9a30286b956b63d5e1"],["tags/想法/index.html","a3de07e738cc52286f154b2c0d77321e"],["tags/感悟/index.html","7eed5d99a9bf03763dc244e7e00b362a"],["tags/成长/index.html","621a6e76c024eec8b65df9b9c7f936a5"],["tags/我是猫/index.html","6fac5a5b7ffe2bd87de238bccf76e3b8"],["tags/扩展/index.html","573fc98c1826c164180b5d82c3d79835"],["tags/扩展方法/index.html","fade85fd4241d93739fe49ac5275e7a9"],["tags/技术/index.html","31ce5759c8325fe0f0bf57248e01febb"],["tags/拖拽/index.html","bd6062eb7911caf89df61dab0a3e383e"],["tags/插件/index.html","ea4ea1962ffe76220783fdafbf5675cd"],["tags/插件化/index.html","a1250ff2e9ee46cd5290104aa7ef75b7"],["tags/数字/index.html","b4b692d414fd5351d973bce1f92cc002"],["tags/数学/index.html","2bf9ca66766a4af1a6614f641a9106f2"],["tags/数据/index.html","3b714a3d958d9b69c601b194d4173a4f"],["tags/数据交换/index.html","2ac45efd12bbf9854fff29d8f8428dcd"],["tags/数据库/index.html","ff4d629c296460bfa03ffd98f5ca4db6"],["tags/文本分类/index.html","22cfc3dd8231bd4abc88d98e5a165e0b"],["tags/无问西东/index.html","f3f6831a4608eeca393055dfabafe041"],["tags/日剧/index.html","6db038512d2902ab589892c45b7b3da9"],["tags/日志/index.html","6a45767cb1632a4ddffeea9c09f30653"],["tags/日本文学/index.html","e08e7a8e371eb1f17a8b226dad367882"],["tags/时区/index.html","d021138e4d26757971c1e065b9466298"],["tags/时间/index.html","aec27635d9bf429151f9f8429a69c90c"],["tags/服务器/index.html","469e34e4de821dce7bb2e8390a5c131f"],["tags/朝圣/index.html","41b90fe2676de33b5db4ca07ca75e50c"],["tags/朴素贝叶斯/index.html","493d185fa284d4edfcf91331612d5eca"],["tags/架构/index.html","0ed4ec9f35c98cff3833c21ed2f9d581"],["tags/标注/index.html","e546a67fb0bc21806bb19dbaad951d24"],["tags/校验/index.html","b2bda68627e166d679d2a0b80f82b25c"],["tags/格式/index.html","0a7c75e8f457617b235fc2b51d1f34d0"],["tags/格式化/index.html","1737bbe5747ba43fc1885c428c35038e"],["tags/桌面/index.html","6b12c3c6c9ba36256bcd6ebc66ba9ba8"],["tags/梦想/index.html","3baa62dabf7f50c8bbf230043f970f03"],["tags/概率/index.html","700877d42b2e127c85c900240ae31644"],["tags/模板/index.html","dbe3050ab265ac5b73da945811616d8f"],["tags/模板引擎/index.html","e31a0b30263e4fc3785dbb592e21b81d"],["tags/毕业/index.html","8807acf12e6e5fd970d8a70a53850372"],["tags/毕业季/index.html","b58789393b65afbc2786a881fcb35055"],["tags/消息/index.html","df45748af82b119d1e891b43254c13fc"],["tags/游戏/index.html","c0ad34d8e00a162fec5715db0a62b214"],["tags/游戏/pages/2/index.html","fb7351339b865caa3c1703aaea8af435"],["tags/游戏开发/index.html","9074f42776e79f4cd74a42d59695a432"],["tags/游戏引擎/index.html","5c5febd42bb927d7e8a2d871005af01e"],["tags/爱情/index.html","eddb508e2fa97c84c7d1a8d04f973ae1"],["tags/版本控制/index.html","eeac82d84178f715e5294bd1d419a03e"],["tags/版权/index.html","d65803519ed8b1179ed3c9b5fff7e5d4"],["tags/特性/index.html","4f3d4a3ea69e9661ae519168df35ee2b"],["tags/状态/index.html","256de310468ee583d0a6ac36c5184fc3"],["tags/现实/index.html","1a6c27176a9c72fd64a3acbed3782767"],["tags/生活/index.html","4693ce2b5d690a4564dd9de706860c56"],["tags/电影/index.html","abc378260c896f08d529c27775ec9d2a"],["tags/画家/index.html","119befec1de14ba2511500b9b5f1373b"],["tags/知识共享/index.html","8e36d43d250b54012000b078e4f8c11a"],["tags/矫情/index.html","30539fb3689951b204e71ab9201f88d7"],["tags/程序员/index.html","dbdf7ce8b0ca482184061b6e85ffd8ae"],["tags/穹之扉/index.html","251dbe114b0e346c270ea6367bb3f27b"],["tags/穿搭/index.html","c0fecb6aabb5302c5de872684b4432f8"],["tags/童话/index.html","6fcf8236c590f806bc0fe584c8de1f02"],["tags/笔记/index.html","decc1f937cfc09e4c3709cad061e0c2e"],["tags/算法/index.html","323041a132b1094d6e5da636f79e378b"],["tags/米花之味/index.html","66e796177859565b9b413a3e263f32f1"],["tags/缓存/index.html","0871392448c5781e0825db78139645be"],["tags/编程/index.html","d26e0de50d3197b3c19e3629a58c08d8"],["tags/编译/index.html","2dcfcd486a7f2c2fd342c2f54539155d"],["tags/编辑器/index.html","db273a78021606901c36363de42a4960"],["tags/网易/index.html","903f6105251a5d2af363d7c550a632a4"],["tags/脚本/index.html","f83c4c2426bc2222e8c4c73dac1519eb"],["tags/脚本语言/index.html","59f98f34e39fe487a6e17d07eecdd5b0"],["tags/虚拟摇杆/index.html","905f6eba9a64586d9ed696188a4c00d7"],["tags/蛋炒饭/index.html","87e3acfbcb88bcd586addbca5e8b8c25"],["tags/表单/index.html","3170af041eb59bf6cefd0ddb720aef95"],["tags/装饰器/index.html","49038e6725631d0d990c41fd9f372e33"],["tags/西安/index.html","618361d0ec922b694707ec61c359f6b7"],["tags/计算机图形/index.html","5f5b990d403e3e6170aea2b1dd08bd43"],["tags/设计/index.html","a59f7cc6a1a772f6b081b94b6509542e"],["tags/设计模式/index.html","4cc5919a7c484573b44906d095ecd699"],["tags/访问量/index.html","7549e36b5c8b60923338be385a062979"],["tags/评论/index.html","b845f93ae6d9d8dc99c8f0bb8cb1027b"],["tags/词云/index.html","4c2813054b6542864ee59f1f9bb1d834"],["tags/诗人/index.html","4d8e04e26478d5fa102cff9b6d8b2495"],["tags/语法/index.html","410d7c60c2d76febe8b3d5b85e1e3ded"],["tags/请记住我/index.html","c9e4aa41f06ab8180a9c7f8d9d1c0c07"],["tags/读书/index.html","651917b299e829ca68e987d178b4291c"],["tags/读写分离/index.html","ff35440a4ac834c6339d3fb66c82539c"],["tags/调试/index.html","498b1879fe76d26206d2b7413d294d1d"],["tags/贝塞尔曲线/index.html","3b97826c0a6608010a781c7db8810825"],["tags/贪吃蛇/index.html","2bab4450048c398dd0baf2c538b7d9b5"],["tags/资源提取/index.html","f4086d559319f6a325011b2c8c8a8c4c"],["tags/跨域/index.html","64c0ccc2ac5367cd0db23c87bd957def"],["tags/跨平台/index.html","92fa9f8b0bf2ffaea00aa223549414bc"],["tags/转盘/index.html","432bc8198c6b56f61eeb09da324b784c"],["tags/迁移/index.html","ac2ab08919e3c6bf9259507f73433b8f"],["tags/通信/index.html","b46ddf1875722f97e088053888d0237b"],["tags/邪不压正/index.html","17d538dc42f02870f8e70e21407e7922"],["tags/部署/index.html","b9e7b884f44ab8f57d2ca6aa1ca84c3e"],["tags/配载/index.html","9f885ce262d4cdb2db7bd6eb08a804ab"],["tags/重试/index.html","1cf8554298739349dc6324e81fed69a8"],["tags/长安/index.html","4c2349c84e169cb978f9ff7eb245010b"],["tags/长安十二时辰/index.html","3c30ef5382e448f1bc734a75dc7e6168"],["tags/阅读/index.html","30d1358da490597205ae0e529c6c3460"],["tags/阿里/index.html","042ee6ea6dd3ec2d04a42baaf52943ee"],["tags/随笔/index.html","b0c5603c76ae2150c6390cf365561a0d"],["tags/霍金/index.html","ff37e4ecd19d6a5fcdb50fa428c33ceb"],["tags/青春/index.html","8afe77ad5a1082a9b29e30ef43cca809"],["tags/面试/index.html","4da0b9060a5089eb70438427737d9f21"],["tags/韩寒/index.html","8b11600ca8e58642159db922c7a866f3"],["tags/马尔克斯/index.html","4e7df1e9b5619e5da1f29b986e1a3f7e"],["tags/验证/index.html","7ce51f094b35f9ca06756e8c8d464a56"],["tags/黑客/index.html","0969cc93d8d94888b93fb1ad64e4eaeb"],["wiki/index.html","e3c265dbac6d0f6ee07be3ac25fd6c29"],["works/index.html","48f9488ff2d6229719f8a433e2101e05"]];
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







