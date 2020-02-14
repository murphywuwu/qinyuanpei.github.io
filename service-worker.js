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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","abbde5b98257499b75ea6d1f15c52e22"],["archives/2014/12/index.html","9aaaa737eb0f7b2b8620ef793924f6ff"],["archives/2014/index.html","06680fe7c5be508800c1e4ee68af51ab"],["archives/2015/01/index.html","16960830c929abd0a24305a52655e004"],["archives/2015/02/index.html","5513eabaf69b9988821bf7292c9eba93"],["archives/2015/03/index.html","736289493006d53d04256737e2153968"],["archives/2015/04/index.html","f05dbd6b5dfebbba9346761b1738a42a"],["archives/2015/05/index.html","2a0aef70494a5d07abd9916a44748720"],["archives/2015/06/index.html","47b83b3e2cac3718a0dff5aaa01e65a3"],["archives/2015/07/index.html","b73751082c74fbaa88d689aacf740514"],["archives/2015/08/index.html","1e7a0fbd9b91078a8f60bad11a1d5a37"],["archives/2015/09/index.html","0f4262e381f64731adc6ba46ef297cb5"],["archives/2015/10/index.html","297f807a9a8b0f034382bddc1b7f62b3"],["archives/2015/11/index.html","7743f5313b85504d40c07b956df9a602"],["archives/2015/12/index.html","f04410d0e57a3e2fbffd6ae30840a81b"],["archives/2015/index.html","6b9f17e5899b7bdc46bc6c43cc0bf556"],["archives/2015/pages/2/index.html","fb05d0b6bd143172a15fdee7c7372ada"],["archives/2015/pages/3/index.html","420af742d6f396e878dcd1171cf264c4"],["archives/2015/pages/4/index.html","270664f7dc7de9673191443b5a38de41"],["archives/2015/pages/5/index.html","6472dead7117bfdd11390ebd409d1629"],["archives/2015/pages/6/index.html","1eeca452a81461af62b325d066825d8c"],["archives/2016/01/index.html","c49f96652d2fa08f40747fd89842ee95"],["archives/2016/03/index.html","5486aad4b234fbbeb4954c4abdf44dab"],["archives/2016/05/index.html","b678fd4cdd76b61c794c5abeaff35516"],["archives/2016/06/index.html","9b46675b9a5b27294fe754bd11f78715"],["archives/2016/07/index.html","9e341aa864dc0f76de123ed09e730760"],["archives/2016/09/index.html","7a23239a33d1a334aeeba3009e95d1f1"],["archives/2016/10/index.html","972fb0609927f44855956e93a27a8b02"],["archives/2016/11/index.html","73678bdc5ac7bf74148ba6f0d805dbf6"],["archives/2016/index.html","3d8578db1eef9b1967a2807b4bf58bdd"],["archives/2016/pages/2/index.html","d228e74a8f7aa3f32c724cc5aace36cc"],["archives/2016/pages/3/index.html","b0939bdd30c0485bc0932ed481a57fde"],["archives/2017/02/index.html","ed6821210351a9a78de9bec335249121"],["archives/2017/03/index.html","1634c3870081361865e8bf124c8dc06d"],["archives/2017/04/index.html","6ede4327ea10e97c507e9b0e3f17e633"],["archives/2017/05/index.html","7c5a1fe8e1b9a6842ad636c6f263e4ab"],["archives/2017/07/index.html","06460b54ed0c915a2169029e836d0df5"],["archives/2017/08/index.html","dfa3d2aa27db458958d3478c0a61be50"],["archives/2017/09/index.html","0890440f947a51542465174e1d94a0d8"],["archives/2017/10/index.html","6c7558c661b409b6354fe2ece4df63c2"],["archives/2017/11/index.html","88179979677545a19a343ef3e2b876a2"],["archives/2017/12/index.html","6894cd36ca8fc165fa22ec4654df8420"],["archives/2017/index.html","191c84e5bd768f4f5347ec07762be165"],["archives/2017/pages/2/index.html","058ce2fd003ca9ccca9ee42227180db7"],["archives/2018/01/index.html","09d1eae20eace82116d6d48a6be805ac"],["archives/2018/02/index.html","5d2f28f23c3cea2bae6cf3d34f31190d"],["archives/2018/03/index.html","6ed8d034a56d4c9ca30232d943ce95a3"],["archives/2018/04/index.html","bf2f136f12a69c903ca193b9c2ca6dd0"],["archives/2018/05/index.html","460aba886bdf0bad2533ec41499f544d"],["archives/2018/06/index.html","4027b35cd8dc82e9e03e56f6f26021c1"],["archives/2018/07/index.html","7ba37ea376b4d91d57e94b8e684661c9"],["archives/2018/08/index.html","bae95e36e380981e38d391c00443f8d6"],["archives/2018/09/index.html","f289fec6d70f0a9e042f0348756f5632"],["archives/2018/10/index.html","a67a697c74b98b1e0adc6ddf732c369d"],["archives/2018/index.html","caec205b1bee55c0f83d9b058fb366c6"],["archives/2018/pages/2/index.html","73f9c6c311f66acc5cc8928d55d557f7"],["archives/2018/pages/3/index.html","71ceb38ec07f62e2fb15fa08a097d34d"],["archives/2018/pages/4/index.html","5d3edc8b20f6abda2d9cac34a101f56c"],["archives/2019/01/index.html","01816c21c84266369b937c65ac98e2f8"],["archives/2019/02/index.html","7b0b1eac763423e332533908f1055f95"],["archives/2019/03/index.html","2060996b353d1eb385954182cb3fdd05"],["archives/2019/04/index.html","090b9f0e92e24da43a07b62750f3aa98"],["archives/2019/05/index.html","e5d339043e72544b534bc09a4ff5655d"],["archives/2019/06/index.html","51c5cebb422012ed4d80f5a7562b9d82"],["archives/2019/07/index.html","3ac379145d353d9961a4f1a8d346f773"],["archives/2019/08/index.html","322a1dc97f51d2d74f11db3069332763"],["archives/2019/09/index.html","06403ad19678442baf0d2301f24effdc"],["archives/2019/10/index.html","94a4761a61a130fdc284da8994eed5fd"],["archives/2019/11/index.html","116e40ab335986571bfbb72c66ceb217"],["archives/2019/12/index.html","17a4d7ece7cd4da58fe05f6c91182e6d"],["archives/2019/index.html","8f543d6dd838e1f8c18d13f0ed50e5dd"],["archives/2019/pages/2/index.html","e1e1a7e932345f8d07f0f78046a18adb"],["archives/2019/pages/3/index.html","47d39d9d20f799adc9245d17e502c028"],["archives/2020/01/index.html","acdb75382a20997e1a39f89e55b8e34e"],["archives/2020/02/index.html","ae1ea0105e2a906dbda24e7281488656"],["archives/2020/index.html","443b795776642d55a0acdf32216f8d3d"],["archives/index.html","e815da3fb191429b6e5ae4b301996574"],["archives/pages/10/index.html","a5cc47856ae9e8a43a9dfbb7e49c8848"],["archives/pages/11/index.html","431f73837aa1ca683497575cd7f179d5"],["archives/pages/12/index.html","08a116518e310d34e665c5a09b65dd05"],["archives/pages/13/index.html","3555a7dc62901c349fc64937aa21790d"],["archives/pages/14/index.html","798470471d64d43e24412274e503b240"],["archives/pages/15/index.html","51370111a50205c2d372157a91af9825"],["archives/pages/16/index.html","0d12556ab5f7059addef35a7182773b9"],["archives/pages/2/index.html","5d087335247c87442f51e45ab6866a25"],["archives/pages/3/index.html","d4ed5e2c45cb69b8f6df2ca8828cb3c7"],["archives/pages/4/index.html","4216a857160f21f4acfca8df0718d18d"],["archives/pages/5/index.html","07cdf456c135a3aabc78d986988431f1"],["archives/pages/6/index.html","2a80ec0d1e3451b7ef35f8c211df5d74"],["archives/pages/7/index.html","9b9f9b4f2282444ff95cb6dba8c2106f"],["archives/pages/8/index.html","04b3d8e8f08cefbad59fe1c47a060a24"],["archives/pages/9/index.html","f1c8f71a88f62fa23a3de721985cddac"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","23a95e1d4b336b75d36f09c9d70f413b"],["categories/Unity3D/index.html","44a2da89d6b20597568283c547990d79"],["categories/Unity3D/pages/2/index.html","38818b43bcb09959724e23b7b3e62f16"],["categories/index.html","f799b6442cac4ed583e5b020b6485e57"],["categories/人工智能/index.html","785d84ea28a7e98b94576e521b7cc257"],["categories/前端开发/index.html","68c1dc491903571cb15a88f885a66feb"],["categories/单机游戏/index.html","68d1c1b11d2237bb640bdad76560d98c"],["categories/开发工具/index.html","d7f35e03594bb0181a065416f98b8bfa"],["categories/数据分析/index.html","32c0bc17c94cbab17b223d812cd761d0"],["categories/数据存储/index.html","651cc96d9b7c800eab2c3574ffcb2a89"],["categories/游戏开发/index.html","5e71f9e7e40f6ec822fc687ebd22a014"],["categories/游戏开发/pages/2/index.html","cb31c531ae68e88bc1bd6db530056908"],["categories/游戏引擎/index.html","79ef649ea0394cc190286e42b6f771c1"],["categories/独立博客/index.html","f12523c6a5a6e76c2c4ea77b3e9cc908"],["categories/生活感悟/index.html","e8d766810dab33bbd62c664bf6cd314b"],["categories/生活感悟/pages/2/index.html","cfbac33f8ff162dfe7e77bedde6c73b2"],["categories/生活感悟/pages/3/index.html","e65d97d5b741b5b0e63945d4453606b2"],["categories/编程语言/index.html","8f915807d9340e20e097a08dfc9c10fb"],["categories/编程语言/pages/2/index.html","422f4dfd95056c2bf94c9994efca21b3"],["categories/编程语言/pages/3/index.html","6dfd90a9811dcd487023d373b30a85b7"],["categories/编程语言/pages/4/index.html","0014f61a4a1dc25ed4db74907056db54"],["categories/编程语言/pages/5/index.html","2399930e55dabeb5b344a1c1c5775aa6"],["categories/读书笔记/index.html","da074c98145f2747841718f3fc5c483f"],["categories/读书笔记/pages/2/index.html","1781fc7b174e1cd0e4f1d6f2c9d3f62b"],["index.html","398a69191d372b8d682eb2974af6885e"],["movies/index.html","957130d3e06693f353b005f93ae4b100"],["musics/index.html","d648b41524544573e98f6c301bf849b2"],["pages/10/index.html","bd09dad814172e38c1901c5ae7acec4e"],["pages/11/index.html","cc6abf1bfdc5c140601998a1d48760dc"],["pages/12/index.html","c26ff29cf00bb4782484f498b765770d"],["pages/13/index.html","5101e73660db8a0e1406ad3a73bb6a5f"],["pages/14/index.html","0e3f93c33108869123af893efc6a189a"],["pages/15/index.html","38f2b7cbdf2d3f34ae7f98708129ca17"],["pages/16/index.html","e86e47c42bc981db075994531a9bce69"],["pages/2/index.html","78db0ceaf1fe8ff711ab7055a11cc3e7"],["pages/3/index.html","b791cab6baa3a45b7f52d27ff2b2dda7"],["pages/4/index.html","b6f4e6510cfe7feb34dfebba814bdfcd"],["pages/5/index.html","92c41daf779c39de54dedaa830773ec3"],["pages/6/index.html","5b1bb58ce95c46359de45877c70588a5"],["pages/7/index.html","981d6d9e93e880dca8eda261592e2378"],["pages/8/index.html","7451670003c74c28406a84ddef78bc43"],["pages/9/index.html","0df5dfdba7e2cc0f863479da2c7bfd0b"],["posts/1059499448/index.html","a3006683e11e4a071cb6c419e3c6df93"],["posts/1071063696/index.html","3ed1be9623562fd2a2580a65e51777b7"],["posts/1082185388/index.html","4993684b641b347eec01bfb530e11d5f"],["posts/1099762326/index.html","b2e59b5859b458e821b93d4e57b0fe59"],["posts/1113828794/index.html","4dbcbbc4e901974375219001e47a8a3e"],["posts/1118169753/index.html","a7acdd8fb8d8de6e527217d7ff06666a"],["posts/1122710277/index.html","638cf57289bceb466879103aef7d3c80"],["posts/1124152964/index.html","39d0937e5002a21d1f3a8c010f864e2a"],["posts/1127467740/index.html","a0931b2c26676c7558037962d14b1865"],["posts/1150071886/index.html","96e688b6d28c6f27397be704f17b73f8"],["posts/1150143610/index.html","e5e4915e7061611d436bc5cec8320da0"],["posts/1152813120/index.html","14d6d46f5ab6383210f968d670d0dc43"],["posts/115524443/index.html","c7648e686bf98a92f6408894dab8a4cf"],["posts/1156673678/index.html","0b70b51a88ff28ac78eb021dc3c05ddc"],["posts/1166840790/index.html","25c0ace15c5af3087c730a26239125c5"],["posts/116795088/index.html","5e4d36643a2539b3f8e1c2bd305f8917"],["posts/1176959868/index.html","d9af34febe07016da1a512e4e86cf400"],["posts/1190622881/index.html","f6dd06c0c5f6d94870d00fa305505c3e"],["posts/123663202/index.html","1d758b31aacf7590559ee6091cf267bc"],["posts/124807650/index.html","0fb06d897ddc039196ec1b27a2c44cb5"],["posts/1254783039/index.html","96bf32913140847769c709898f3c5e5b"],["posts/1320325685/index.html","1eb1891998012057f27710a9353c5ab5"],["posts/1329254441/index.html","07f158ddc08aa851c09da76c290b24d0"],["posts/1357715684/index.html","734619e34e25f186ae53fa20a70bf495"],["posts/1358971951/index.html","d2bb05f7324002a71416d17b5925aaba"],["posts/1386017461/index.html","e3c9a4e57fa86215c0a47ba269623a1a"],["posts/1394521917/index.html","2dea23a0240b928beb9f43d53994e907"],["posts/1397717193/index.html","fbf30f55edb225a72bd2129438386d08"],["posts/1417719502/index.html","ce0c8bc2d3ffa2ea56012a3f9cdd6bd4"],["posts/1424645834/index.html","f04a109204daab46d8a0e11dccd415fc"],["posts/1444577573/index.html","b2390a932b763f5b397dfd54920feb76"],["posts/1467630055/index.html","a44ba40299d2900f468b0064f2b332e2"],["posts/1478979553/index.html","8c37a6beef95ed06e87cc5e4a8abc2ab"],["posts/1540537013/index.html","885ef8bdffefc259e1071565ec8ebe9b"],["posts/166983157/index.html","9fb7e9bddcaaf58088afe82d8522bda8"],["posts/1670305415/index.html","a008668b7462c731e659158d8f3ae543"],["posts/1684318907/index.html","9b1b31285f8699985b0e2489e9b8ba7d"],["posts/169430744/index.html","e9ba2c3351c7ee4ac445c97802f8d4d9"],["posts/1700650235/index.html","9112aab4cfab984fe7ab17ebf4e5c9b5"],["posts/172426938/index.html","058eb7d2e4d26c0bf7c135d9c7311d7b"],["posts/1836680899/index.html","1eba04785756a9f3e4024136bfdb68c6"],["posts/183718218/index.html","1b9a059450adbf9f6e8cf130ea8dfa7b"],["posts/187480982/index.html","2a704d7dafe761cd4c757ad60e6dee06"],["posts/1930050594/index.html","8a4304e48bcecbf08bf28cc0281d8195"],["posts/1933583281/index.html","5befdb234c2f1a3df058073dc76fcad2"],["posts/1940333895/index.html","9d5033fb70b09f0c1d97b3a0c144bd1b"],["posts/1960676615/index.html","4e4d59b9c57df7b23f9dc94cd74185de"],["posts/1983298072/index.html","99e6740de806d2b6a9ec80a0185b849c"],["posts/1989654282/index.html","4d50f6cab199fa5eecdcee92b113105d"],["posts/2015300310/index.html","11a0e371bdddb7a9f3bc8c12c9f480ce"],["posts/2038378679/index.html","6b8dd759044c4072679d9629bfe558c6"],["posts/2041685704/index.html","a59134b72e73c77e82078c642d2ffa16"],["posts/21112647/index.html","8edb297b2128b82cd668a161faf1c4e1"],["posts/2158696176/index.html","67667617f99c3e1d326f15b4a6589036"],["posts/2171683728/index.html","bfc2fbab75e29bbc1ed6fe8917c84d8e"],["posts/2186770732/index.html","9255e6c5aafee90ca94579cc37e5aa60"],["posts/2275646954/index.html","d7d367b0c6c7ea98351d9dd0dedb463b"],["posts/2314414875/index.html","593ceac8e4811c10bbd2f7078f2f3b38"],["posts/2318173297/index.html","13f1fa4830516aae4324dc9ccb7d12f8"],["posts/2418566449/index.html","dd0c236d5580ef4fceac2919fe471e0b"],["posts/2436573863/index.html","ae6b5a60b36b4b52d12b76f193610702"],["posts/2462008667/index.html","dac05a117c55db038fa0d6314c1775f6"],["posts/2463121881/index.html","0da9347f190ed0ddbaf352b8ec2aaf99"],["posts/2527231326/index.html","7645e80a5d3aa07519aa05af9f2422b7"],["posts/2583252123/index.html","e2018dc3db48173fbad3b488f1961691"],["posts/2613006280/index.html","a987d1dc3900ef3bb60f50925bedbdb7"],["posts/2617501472/index.html","f0c26a21b352fb7abd5e0df30437697b"],["posts/2676125676/index.html","33262cb98ed7f419411273fa9f599681"],["posts/2734896333/index.html","253f6704391e3252ad07d3d165a9257c"],["posts/2752169106/index.html","2fae95afddd0a49f83e3257477bd3853"],["posts/2799263488/index.html","70337b3357ac8010de0654f7995d191c"],["posts/2805694118/index.html","7c111ea35acb11308017571b082b7ab4"],["posts/2809571715/index.html","f908eec2257bb2e6153537da8df0e4d9"],["posts/2822230423/index.html","a26bf1fda9b0ed6425a6c2547511fac6"],["posts/2829333122/index.html","1091e60851537af919135084c463c16d"],["posts/2911923212/index.html","bd2a1f1b0568d38d4ef231d1c1349d17"],["posts/2941880815/index.html","412c9ccf01f32b1ef5dd3d7ced82408b"],["posts/2950334112/index.html","5a2384afb72ada98a93f40b8a40039e5"],["posts/2954591764/index.html","843a3a38d899bd40127176a43df76a80"],["posts/3019914405/index.html","5e5e5a533322bffc4751a9246c5ce637"],["posts/3032366281/index.html","ef47afaa4718a1006702b30ccb41bb41"],["posts/3040357134/index.html","386a022b12187740bcb0a61b82dc3bad"],["posts/305484621/index.html","d1f44c577a1ec0e0b7d8b0a334b87ee5"],["posts/3083474169/index.html","4cd2b4da2630af9263cf7ec78c438222"],["posts/3099575458/index.html","2f40673f031168f0ced6cd8a61c00ad6"],["posts/3111375079/index.html","64071c032e44a3d4e5095a1d2b75348e"],["posts/3120185261/index.html","418f2a18a36b29f1bb453dcb8594c538"],["posts/3131944018/index.html","68c35959e0ef57dc14e65b8b8468a65a"],["posts/316230277/index.html","885ce998add4525a297a9cc4f1a7b1d5"],["posts/3175881014/index.html","0fc87c7a3e09199716c07755597e21bc"],["posts/3222622531/index.html","c6296a38b8edca7c6a01a539ae9ca539"],["posts/3247186509/index.html","933899270ebc668b6c92dce020756ff5"],["posts/3269605707/index.html","3406a8ed1b09539c42bdb0a85504da4a"],["posts/3291578070/index.html","412681d25bdf54c9b1b3b55c47c20b80"],["posts/331752533/index.html","52846ffb0ad364074eff47fd0dd8929f"],["posts/3321992673/index.html","3abad3fc0a56060bc719ab5484f82249"],["posts/335366821/index.html","f2de6e886fbd7775fac98da7dfc031cf"],["posts/3356910090/index.html","c2406a6824211d6be9ff7f5148af3591"],["posts/337943766/index.html","3046bfa5bca72a672811ffac92130838"],["posts/3417652955/index.html","9489c7829507732145ad1caae1ddde50"],["posts/3444626340/index.html","9459303400542b9604ac28137cfda583"],["posts/3449402269/index.html","15fb3c8ec468d7af74b4502a4858cc12"],["posts/345410188/index.html","0ab308b281ac465610c45fdcbb1e7f5c"],["posts/3461518355/index.html","ea6c686e44f6dc152d47afe58385e962"],["posts/3494408209/index.html","90e5fa293d9a7bc1b60cb5d662fffc8b"],["posts/352037321/index.html","ee9588e1c0b1cf307a2f1ab3927afe18"],["posts/3521618732/index.html","35b80d0dd960b0596e34697cbb5323a9"],["posts/3568552646/index.html","cbfe070cf3ab712665fc4f793395b072"],["posts/3603924376/index.html","7dd83cc3171a8a19391ab2a2948c8805"],["posts/3637847962/index.html","45716a125a024f74c214209edf1c53e7"],["posts/3642630198/index.html","44c0043de38af98cee3bb0dc52a6fa7b"],["posts/3653662258/index.html","c96cff8d6c075ce3f65b6cbcdc557f4d"],["posts/3653716295/index.html","58d1c7cc702688fa344472626836b249"],["posts/3657008967/index.html","ab76780fdbbd0626ccd07405de3ee051"],["posts/3668933172/index.html","f85f9d97679baa825fe75df19b51b0eb"],["posts/3677280829/index.html","d945f0eba1ba3dea13a134496f4e146e"],["posts/369095810/index.html","c400dce0f15f8a6476ebc78007eb4791"],["posts/3695777215/index.html","d529a7910978d4a9376f89bd953eb757"],["posts/3736599391/index.html","181e0118769a7fe375ac2ad18354ff68"],["posts/3742212493/index.html","3bdb380c8570e0aae0ecaf85efacedf9"],["posts/3782208845/index.html","ec7afc85294725e509721675f592ef8c"],["posts/3789971938/index.html","2f35fa2d35ac57e006f78414a765ca42"],["posts/380519286/index.html","ddc66022b35aa902bb24b3737c91c9f9"],["posts/3846545990/index.html","e52d22d66e1b03db5c12360b9ea6ad20"],["posts/3873710624/index.html","89e0d3b2097c8042e4e975b889989253"],["posts/3959327595/index.html","ccd055bc2c954f62138ec2b1f39811ec"],["posts/3972610476/index.html","532f18d4ee6cf8c81acd19cd33009b25"],["posts/3995512051/index.html","4649c96ae48b369662c2c19f85987e20"],["posts/4088452183/index.html","27bbc7d3462141da308a144f3809c27d"],["posts/4116164325/index.html","e61eac25dbb4cf49528a0e049c72a40f"],["posts/4158690468/index.html","2d65a7453647b6b36413e530aba2c9e9"],["posts/4159187524/index.html","e6f790998a381fb757b0201c6b61b18d"],["posts/4197961431/index.html","b3bd74482b027f2906ebdbbc2dbc0c97"],["posts/4205536912/index.html","e83c6020b2a8641d04c40d9725036ac1"],["posts/4236649/index.html","3b7f5dd6a36fe9c514ee14d507a67b64"],["posts/426338252/index.html","0b0e29816143c2faddc98a8a63cad113"],["posts/450254281/index.html","38d4522100909014b704ee53e3c11adc"],["posts/4891372/index.html","26cffc567a3bb025312437372a183859"],["posts/569337285/index.html","62e09812db1f636e43ed47db3c754fc2"],["posts/570137885/index.html","5e090cccc3334b744e7feec4559d1c19"],["posts/570888918/index.html","1401d1849a79afd62d7119282c3d426e"],["posts/582264328/index.html","e92be679f5129a6109caa44aecde657d"],["posts/632291273/index.html","454eaefc0aff5bfbc4ae5ee7a42d0aa3"],["posts/70687890/index.html","54beab5f13fe8826da34766060a7cf4d"],["posts/719322223/index.html","0302fd65d013a393df23779640ecb0e2"],["posts/720539850/index.html","911a852b2ed92c52db8fc0632c229cd1"],["posts/786195243/index.html","4972747a8f6e0b230df2f1751639c035"],["posts/795474045/index.html","94df767088b2d15d7e29dae9f9a3d9a3"],["posts/815861661/index.html","b3beaa07c364ebd462467622fad8d1d3"],["posts/821259985/index.html","0db75f7ace2a7beff56022434b443263"],["posts/828223375/index.html","e114b76b4fe3012c1dc6d9627ec34a15"],["posts/887585917/index.html","1778e8ac485b5de5d7307ae7de2594c2"],["posts/888549816/index.html","6f5b23a40d6839ded81b33047ad6ff00"],["posts/906436376/index.html","c2605b8c96b005461407afa271145da4"],["posts/907824546/index.html","e17b5a0a02ddec90d3da2efa9f7c61b0"],["posts/927393529/index.html","6d4c7f302cdd71ffedfcc07d5b6a769b"],["posts/94443781/index.html","9f187a35e2634a70038101b1f169b2cc"],["tags/2014/index.html","ed72a3403ba0a44a408b6cff0d05cdab"],["tags/2019/index.html","fd58a00fd6488407914d53f3a489158d"],["tags/AI/index.html","fedf59fe2fbf054599e2752cfa755190"],["tags/AOP/index.html","f22157d4e7ddcda24d285b8f36d183c4"],["tags/AR/index.html","b6ea1daad58e78e23547701bd47f1abd"],["tags/AssetBundle/index.html","da60c3e4fe2aa3481a3403e7bb34264d"],["tags/C/index.html","054c3cf689d36d9fd790c939c70d9e8d"],["tags/CDN/index.html","1d5f51a9cbf8dbc6d54c1f029ce1124f"],["tags/CG/index.html","b38f985b81db303a1b8205816950159d"],["tags/CI/index.html","8ecd539187fd36054d97f237ffd985ab"],["tags/CORS/index.html","9016b6a1f482c8968b21d67a4423e74f"],["tags/CSharp/index.html","f2c3a56b4deeddb92d8d929c9121ec91"],["tags/Castle/index.html","c8a17e81aa2f805106165bd5e73ec678"],["tags/DBeaver/index.html","52cc7ff6f02eb55ee3a8f94794307c65"],["tags/Docker/index.html","5e21a451ae5f2d6848f6531c5ea7e399"],["tags/Dynamic-Proxy/index.html","3ce0a86e7921f4f2d971823772a5c121"],["tags/Dynamic-WebApi/index.html","da6f2f7ee6d660242615bfe1b823fdd3"],["tags/EF/index.html","2d17334cf321e6acb8ff998f6becf030"],["tags/ES6/index.html","41e8cd33153e60e66ad815a678eba77d"],["tags/EasyAR/index.html","ae238d59269f92d536eb920dc0fded4b"],["tags/Excel/index.html","f1996e7d153f9335456e57b0e010bb11"],["tags/FP/index.html","2060daa775d9f1e93f7c7d63b8d5048a"],["tags/Form/index.html","2e62492f4ad0603b20d10c5d20a51486"],["tags/Git/index.html","95614fce6c73d32a1dc117ddbf805152"],["tags/Github/index.html","8aa0b44cb63babe8f202d49651baf6df"],["tags/HTML5/index.html","180cb9e0403917b92bed2e17b13140b6"],["tags/HTTP/index.html","3169156fdd2e168c902ac0c47b4d9a92"],["tags/Hangfire/index.html","6d62283f6ec66938ad9f0caa57350a98"],["tags/Hexo/index.html","ff6ee698f314ce39ab56035f449fbad4"],["tags/HttpClient/index.html","0103fdc68917d142c5bdd54c4617b13f"],["tags/Hyperlog/index.html","31a3c4b3147a93bb0b3708e153aeadcd"],["tags/IDE/index.html","9a1db44cc944d3e20ba2cb7abd86c4d3"],["tags/JS/index.html","ac63ce1cf0366afc66978a6464390b6b"],["tags/JSON/index.html","dd9fa0cab55c11b786cd435d79143803"],["tags/JSONP/index.html","125e7b8d6b007347c9d573d0bcc6bcb4"],["tags/Java/index.html","ba499b90f98ea2b3658b5b6e66ef9fd0"],["tags/JavaScript/index.html","ecb8b43891f9e01bd988355f1e267938"],["tags/Jexus/index.html","94d6a4dbebd99a5db48d8d0f5571ca04"],["tags/Kindle/index.html","dd1d39e4538a659b0de93a99dcca599c"],["tags/Lambda/index.html","6db19f0c031a244951a218184385161d"],["tags/Linux/index.html","77a7c8d2cf9351590bc10a7a87edbc90"],["tags/Liquid/index.html","766d9082cd669cb1d87b08aa40ec5805"],["tags/Logger/index.html","fb4c367572d4c6d2e1e88703ad875722"],["tags/Love2D/index.html","f66b556b0cb1bca58b0d20d91ccd891c"],["tags/Lua/index.html","fd8b55b3bec4ad7ec18e7b42228484a8"],["tags/MMD/index.html","5a03aa7aff2340c259e8a66585978b62"],["tags/MSBuild/index.html","0114ba9e8dd2c9eb218389dfa187aada"],["tags/MVC/index.html","3a8c9fcf79a7e17bf00ffe8d897362f2"],["tags/MVVM/index.html","b979b781cb87c9fd2f723da8c596d8e2"],["tags/MapReduce/index.html","616b10be742abfacc5b228c12cdcc9d9"],["tags/Markdown/index.html","970d9843cb96fa8034e077cd2c8b3dd2"],["tags/Mecanim/index.html","7f71e27ba60da0449ead90450bb845bf"],["tags/Mono/index.html","117b210fb99740012e7480ef6df09aa8"],["tags/NET-Core/index.html","3aa94cba60af6fbd0f52034448db54df"],["tags/NET/index.html","31485977168b90225849b48c081c0a0a"],["tags/Nginx/index.html","af9d7565c412e09c42ee3f1ad0490576"],["tags/OBJ/index.html","3d7eff76635d58275e0f2df302e865a1"],["tags/Oracle/index.html","c0f909bc452d3ec5b0e7a30e820ec050"],["tags/PL-SQL/index.html","7de4cefbee065face1ff9e38f26bb359"],["tags/POCOController/index.html","b35adcbba53d85b4bc3dbb0b501ab771"],["tags/PWA/index.html","b31b3faf3c48885120e39ccd0c4c8f5a"],["tags/Python/index.html","e1691e7fd6be180795d79bd660b98757"],["tags/RESTful/index.html","aae7e8cc18826e534ca8295f285636f1"],["tags/RFC/index.html","49f9e5b952010155e8edc3493a076bf4"],["tags/RPG/index.html","86bd198f5a1b4818816388e89bbe3fe8"],["tags/RSETful/index.html","e39e4808621716f17379663399368d1f"],["tags/React/index.html","b723803f4c6526f5a20224529a42a0cf"],["tags/Redis/index.html","b16149ef56b023381024bf9eabad6fa9"],["tags/Referrer/index.html","36ea7b41b787967a795f6cc27c005250"],["tags/SDL/index.html","8fb7257f14a7aa78820ba80a2aa7f8d0"],["tags/SQLite/index.html","b573d5fe87f90a9d9fa51d92c40f3f9b"],["tags/SSE/index.html","da72d7d64b8d4c81bd43139589016073"],["tags/SVN/index.html","1086ab2101d2655c7a46a3daaa93a211"],["tags/Script/index.html","19a5c833b41af04a3fc4dad55ae4b93c"],["tags/Server酱/index.html","d9b1afe51563dce76670910c20acab88"],["tags/Shader/index.html","3ee49450e62a066dc25d8f66e96615e8"],["tags/SignalR/index.html","f8341a252773808e57b1ba871efcdf6c"],["tags/Socket/index.html","b4ea050fba405391317fc74440ddfddb"],["tags/Sonar/index.html","5bc6ffbc7bcb2159e8b8df6362af791b"],["tags/SourceTree/index.html","9eb78e17ef1aa7a7c251256cf1b301fd"],["tags/Sublime/index.html","dba9e81e4b9977feb4bd94c6daa43c7d"],["tags/Swagger/index.html","f2e807aa3baebfca9ac4f9918085707d"],["tags/Trace/index.html","41a79c5d5af7187d29bbf8708d17d181"],["tags/Travis/index.html","7ceb0df8e935184142df816602ca6622"],["tags/Unity/index.html","2e05bbf90f808b8b81ae491406f6a0a6"],["tags/Unity3D/index.html","42050938b105429d7a63d8895f00d15b"],["tags/Unity3D/pages/2/index.html","255e4ee0c2707e7bb39cc301a7a61ecb"],["tags/Unity3D/pages/3/index.html","f118a1bfd9d62c2d4a79724c770e3ae0"],["tags/VSCode/index.html","688b7277fce74cf2429bc468d86a6a7d"],["tags/Valine/index.html","50f93cbf38b73bfa735520f7f6abbdc3"],["tags/Visual-Studio/index.html","f61f2f1b617215d7ec750ec1266d4cd4"],["tags/Vue/index.html","959a520223778ded0c6af91b01a6374b"],["tags/WSL/index.html","410dfec82299c334aa3d5890f0065766"],["tags/Web-API/index.html","b5f7b1cd7c9cc53656816911ad5069d3"],["tags/Web/index.html","990ff12209c27c4570c556e4e8cb6bfa"],["tags/WebApi/index.html","7f33e74c704082198d972c7029293421"],["tags/WebSocket/index.html","c27f9660a132a541b6d9fe09a94c4ec3"],["tags/Wechat/index.html","57409f23f1ce1b425653fea422127d22"],["tags/Windows/index.html","9be6a7eeffbdfceffdb747ffec59f9fd"],["tags/disunity/index.html","96648703509d7674dca5a9f74fd0e29e"],["tags/index.html","7c6b63ae7a6c31daceb50dafcb264a60"],["tags/matplotlib/index.html","7dabdcca32b1e2cfc04f4756153f6fd0"],["tags/njsDelivr/index.html","674aed08bf540eb048f20453645a079c"],["tags/uGUI/index.html","f5d0536395643847fe1fd4131fd4921b"],["tags/zTree/index.html","7ca293417359f63c41095fd9b84fc3e7"],["tags/一出好戏/index.html","70c8ec075031929e393c1328e030a210"],["tags/七牛/index.html","ab9b169db3c17cbd6f22522520900fed"],["tags/主从复制/index.html","50010fd22e5f0ea37d36fe4b6dc92f69"],["tags/事件/index.html","6c4eecc15f7fd6fdf7ed103eaf697356"],["tags/二维码/index.html","27bd4198a268ef7b96d71b5f9ffaee65"],["tags/云音乐/index.html","c13652749b0f0f1844e4f09de19cb775"],["tags/互联网/index.html","b450e3fd06c1bb55b27238d21a32cc20"],["tags/亲情/index.html","3fd17df5a7fbaca39b835ac94554fc90"],["tags/人文/index.html","44868acfe8ff0636660829795aa901c9"],["tags/人生/index.html","0df96558007effc6421a27eb9390a2b0"],["tags/仙剑奇侠传/index.html","ba8f6f8785a6e2a0731a6c2e87bc9796"],["tags/价值/index.html","59070ad8196c52c639f1d585ce0d8063"],["tags/优化/index.html","338e3bfbf35e41e7bd6aac7c41f25b2a"],["tags/全智贤/index.html","9176dfcf6add6456365c07e49c8abb80"],["tags/公众号/index.html","5edc8ce035404151d0dd17d8e419639e"],["tags/关卡系统/index.html","70cf7d4cc81bf20e80a742f5bacc7cb2"],["tags/函数式编程/index.html","cb150c929b74237814832dabc48ce12d"],["tags/别离/index.html","b422fc88379b294ef4a7ad17e231bd92"],["tags/前任/index.html","4fbe39e894aec800221f19b3501cb9a3"],["tags/前端/index.html","8bcb9fadb01d37ffb318dfd0c76e872c"],["tags/剑指Offer/index.html","76e00cda172f838b1014e188dffb1c5f"],["tags/加密/index.html","49fe24029e417c1da6f42b0b0d9bd09a"],["tags/动态代理/index.html","77c5d7584a41febe1ee3f5f3f08bf697"],["tags/动态加载/index.html","9de5f05953eb0cc342622de0c1c69e05"],["tags/动画/index.html","6e019dba2b86cb8fd919c5da321ee2c2"],["tags/单位/index.html","f1469bee10174ef4d1b48c3b7f74842e"],["tags/单机游戏/index.html","54d4770e052744cf90c110e76a99fa9b"],["tags/印度/index.html","5803e6597f2db8aa8ea7500a7a44ce7c"],["tags/历史/index.html","591c5694aa509eea0c6924473491cea3"],["tags/反编译/index.html","0e842aa4f30d514c3a8f2e28b6b03e4f"],["tags/同步/index.html","784ae5a3accca4bee0ba8190870658f1"],["tags/后端/index.html","f45f733f06898c1c18f6be58ca6c7d1b"],["tags/命令/index.html","8e188838491097ef55d4eba8adf36a39"],["tags/和平/index.html","403ea935821da0b0a28a43ebb9d2041b"],["tags/响应式/index.html","c52bb058efa915d46e7d6e361993c13e"],["tags/哲学/index.html","a1d00d2928c63279798f2543e456b65d"],["tags/回家/index.html","5e9f4e58463ba6c0d9d970eb441d7f31"],["tags/回忆/index.html","103706c522440ad0e85106b78efda395"],["tags/回顾/index.html","085a25bd45553d9861d983d5f94e56e4"],["tags/回首/index.html","f907a69f20316810b327a0534047be99"],["tags/图床/index.html","7385be2aea0cc235b5ec1764e7448403"],["tags/图形/index.html","91a912a2e4557b3c6dc53261d476f84d"],["tags/地图/index.html","87a2bdc5b12a257dc0d84e44016e32a0"],["tags/塔防/index.html","bf1d37c2e17ac8fbb49ad2b6a171a6bb"],["tags/增强现实/index.html","012027911b719ad0b92db4cc1e9a205d"],["tags/壁纸/index.html","9193e8b09be0edca62d7f20464f192ad"],["tags/夏目漱石/index.html","68940905fdeb86abcc5c791fbab5f87d"],["tags/多线程/index.html","bd720086f540d8dc553156df243b92e9"],["tags/大护法/index.html","b6f74b8b21ab07ccebacecc2b4972be2"],["tags/委托/index.html","a8deae289dd39252e929efb3f0bfbe38"],["tags/孤独/index.html","546624b661a68110bf380bcb7d5d4e20"],["tags/展望/index.html","9dd0f6e51aacdc8e682b62d924079b3d"],["tags/工作/index.html","922a39fd06bb5e982f2f92a62274fb07"],["tags/平凡/index.html","35111977a34f5ca4857063334bb39e99"],["tags/年华/index.html","baaca572c3665bd296a81d8644644dd1"],["tags/年度/index.html","1e28d382069667ebe67ed0231a6852c7"],["tags/开源/index.html","854d8cc7456511955f05a0051158e6e3"],["tags/异常/index.html","02942bef499bfdf965b515837e5d7042"],["tags/异步/index.html","2281e789b8af5b244fc3abcedba6449d"],["tags/引擎/index.html","cbcf4e3c5dcfb5e7f365c13db62e92c2"],["tags/影评/index.html","2f4535229feb5f6bdca0c38154d33c86"],["tags/微信/index.html","f872891c27139661ff3731b1aa316e50"],["tags/微博/index.html","449d8028b2ddf7096fa27667516da08b"],["tags/心情/index.html","facf1c3858939506f3d8f1d80c71ba31"],["tags/思维/index.html","f3c27689df11ff2543560dec20d8e2f4"],["tags/总结/index.html","45ce1f49186b43b55c5c874ff52e6e0e"],["tags/想法/index.html","e4008255202852c80454e396e55a2749"],["tags/感悟/index.html","b5ffbdc08cdf3a303969649b2ce2b730"],["tags/成长/index.html","f23c5859285687546341e0c67f538c8d"],["tags/我是猫/index.html","f45accf8c3ff275119059609f5b6fb32"],["tags/扩展/index.html","90c3c9a2777a7df5611c19ecd5464133"],["tags/扩展方法/index.html","7f98b65fbfc36961e1fb3ee230c7849a"],["tags/技术/index.html","8710a56d1096d78c89cb684497fee998"],["tags/拖拽/index.html","062cb586a25cc0168d0ce6491bdf97d1"],["tags/插件/index.html","0fc22a0ea1996886aeaab6c8774cb818"],["tags/插件化/index.html","e7ef4b851407eb25eac0564a2343f2cb"],["tags/数字/index.html","646cc7c3fb8d20a26d5533f1cdc32ad8"],["tags/数学/index.html","c7b6b4981d6e212bc634813efbe718d2"],["tags/数据/index.html","15b1cf95751f911d4499bddeb66fae5d"],["tags/数据交换/index.html","da9ee642d9795d73712675240672b400"],["tags/数据库/index.html","db81dc022e24525c0311d2c2eac4cb86"],["tags/文本分类/index.html","7720484a26c72d4fe3e18b02c630e9af"],["tags/无问西东/index.html","2926a6f576445ec748928d5d95609077"],["tags/日剧/index.html","854fa55a66b1d9f336994c679b68dc94"],["tags/日志/index.html","e937cb212fc863f40bef1eb5d3dff18f"],["tags/日本文学/index.html","60704ea324ffc279b3f40023643cbd42"],["tags/时区/index.html","f16c9f06d70eaf785967d62116921e98"],["tags/时间/index.html","e2f85c559e19677dcf114fcfb3e3b344"],["tags/服务器/index.html","607e7ed449d70a3a7764d9184600ab34"],["tags/朝圣/index.html","59db8949c007855943b8c0991fd34a4d"],["tags/朴素贝叶斯/index.html","65cd0feee138e7ee68c475d232be97f9"],["tags/架构/index.html","edf75aecaaf12d90a462ce07f83eb7b7"],["tags/标注/index.html","2e84162b8fa591385f39020a4967f916"],["tags/校验/index.html","332e6773941d8e5d3f5ad0686bd36359"],["tags/格式/index.html","0dcb59139cb31a455472783b61acef8b"],["tags/格式化/index.html","b140323295868e16ec769d6f449e403a"],["tags/桌面/index.html","36950970530f2c20b79afabe2d241245"],["tags/梦想/index.html","fe4a080255f55bda9a7c595a372dc1f8"],["tags/概率/index.html","a4ab9fc26269cdf3c0db5dc9fab523b2"],["tags/模板/index.html","3de81c88fd75a3a49cb8c98d0c57dda1"],["tags/模板引擎/index.html","c83f700e4efad49072a38843b986c636"],["tags/毕业/index.html","54aa6f996128ac829510ccc51110c6b2"],["tags/毕业季/index.html","7e615b8ce06a400be5127ba687bde37b"],["tags/消息/index.html","42173b512442270b730d7db03f1f116b"],["tags/游戏/index.html","bca1ed7e9e50c64526978699dec3f50f"],["tags/游戏/pages/2/index.html","e698ef66a20a8805507dbd3b4f19182b"],["tags/游戏开发/index.html","39d17201276e2c1b7e92bc1b4c9e9165"],["tags/游戏引擎/index.html","d5875fa67caddc771b77dbed6632d454"],["tags/爱情/index.html","0e3d55f2ca2609a6147f7f867c5007f4"],["tags/版本控制/index.html","33d157e2b6334a6d8f1c617614808c4a"],["tags/版权/index.html","7db39c3dc4c707381e48a3b83508cfa7"],["tags/特性/index.html","ddc3e5b555208e010409b442e5a3216f"],["tags/状态/index.html","2cbe760288fb9d87e7d7df128c006f65"],["tags/现实/index.html","cbcef9f8b2565403032558477b04b01e"],["tags/生活/index.html","3658d6c762c500d0f12c1f12c7fa381a"],["tags/电影/index.html","53e64a06b04a9922a0c3f05ac2a9b9fd"],["tags/画家/index.html","818e28a2830de12114c13193394c921e"],["tags/知识共享/index.html","f597524673f76646b0d75a4b3784d7f1"],["tags/矫情/index.html","a4e001ff089933c52b5ae50c6c23bf3b"],["tags/程序员/index.html","91e24e62ad6a697e608861fb56de4f6c"],["tags/穹之扉/index.html","70d9a5422518fbaca52e43096e50b45e"],["tags/穿搭/index.html","dd7dd1a2a576bcb9cf3b11baf4f94c5a"],["tags/童话/index.html","a900f216f84b447ce8f7f33e5e490745"],["tags/笔记/index.html","82700206a42bdcc74f4591b03cee33c0"],["tags/算法/index.html","b7b242da7e12fb79ad58dcab86cfae63"],["tags/米花之味/index.html","97a7a9e20aae66bafb24aa843495de4a"],["tags/缓存/index.html","2fa25d9fd21db92679c3cebd7f8067d0"],["tags/编程/index.html","c8e65e460eab926008f97692771eeaed"],["tags/编译/index.html","81204a772a489cef836a0c0f95003539"],["tags/编辑器/index.html","3ca1554c87271f32939b055ada5bff98"],["tags/网易/index.html","a22a50b1e58303ca5c877b772802fef7"],["tags/脚本/index.html","427549cbcdc8c1e6193676564a9b4ef5"],["tags/脚本语言/index.html","2572e571c0c20835f610fe2668377e3c"],["tags/虚拟摇杆/index.html","974d5eff6724c1c71f4793b81c3542d6"],["tags/蛋炒饭/index.html","8088ff8cb19d705ca4d1f15b8377a4dd"],["tags/表单/index.html","f2375eb6d3f6ce79acc5f49e92679a7f"],["tags/装饰器/index.html","19e3bf45b2f9f18e264ef9c3e3d82636"],["tags/西安/index.html","bae562ec307d6b8321e640a74991a360"],["tags/计算机图形/index.html","29138904e23e33828986146bd5fcf864"],["tags/设计/index.html","0ea8adee14ed5759f5bb2c177cc82202"],["tags/设计模式/index.html","10d66b442a5517ba2d3030c1c2e4ded0"],["tags/访问量/index.html","1ec5ef1633d0c8cae63a4b279f287273"],["tags/评论/index.html","f8fc355a34c1fff96d6a948c57839d1e"],["tags/词云/index.html","7a042dc69b037f053220f46d0b0fc60a"],["tags/诗人/index.html","8b0c0d39767ee42cc68a2e2a7179d30d"],["tags/语法/index.html","1aeb41d9467517ab4f648aa179900675"],["tags/请记住我/index.html","c7af2db559fad31c1afa043fe3538535"],["tags/读书/index.html","22d70f755eb4fe2ea1be29bfadf99b8e"],["tags/读写分离/index.html","77bf05cd990f9b1f05ca6096db3b7524"],["tags/调试/index.html","a734d1fa1f63356ff1861b291a2e4eda"],["tags/贝塞尔曲线/index.html","85db90ccc55d3b9eaa31dad52ebe5396"],["tags/贪吃蛇/index.html","b735b7d593cdcdf116accce4fa0044f1"],["tags/资源提取/index.html","9be1e3645c44468d54329f7c64ecf40a"],["tags/跨域/index.html","8e386f24bc0c31a51f12c1e9d44eeac3"],["tags/跨平台/index.html","a31d1b7e166f7ae44273a599dff311de"],["tags/转盘/index.html","e251eb5ba1d5d536a8c954fc15c4aa12"],["tags/迁移/index.html","376b234976fbb4f352749a088bb2344e"],["tags/通信/index.html","811a652ff4feb9b39c15a8f1b657ca81"],["tags/邪不压正/index.html","4b1092062cc0ea3d27d5c81ff366c287"],["tags/部署/index.html","24850282934db5ef31bc59004fbe8762"],["tags/配载/index.html","b95a07a78f720661d781a55fa00fc0fd"],["tags/重试/index.html","66384913108fa45298dbd87dbb594c7f"],["tags/长安/index.html","8906ddb58220bb538d7c957e7df35450"],["tags/长安十二时辰/index.html","d3857937b332be684bc72d5c39ba79b1"],["tags/阅读/index.html","21f545820e8fe6d798353c39a2df616c"],["tags/阿里/index.html","e8406afe29cc32592761f5a0373b87d2"],["tags/随笔/index.html","002d5c7bc0d759305395aff47d193e84"],["tags/霍金/index.html","59dfe9709b028fba45ba95ee7c188cd0"],["tags/青春/index.html","16f711c9cea5814893effd6001dc0a71"],["tags/面试/index.html","c63e47bac9d36b3d3f95c42894f0f137"],["tags/韩寒/index.html","43ad454167c11b54e0258d29b1f1fb6f"],["tags/马尔克斯/index.html","6add6a796907a4dd393947a1d0066322"],["tags/验证/index.html","ccbc1e7e065142b92c30dbd28ca1a574"],["tags/黑客/index.html","73728060c8b83c649f145053eb1b2057"],["wiki/index.html","b482c2c53d0ff795975daddcf00a192b"],["works/index.html","fbcbb76060aeb1adb1d7e8cb3e882605"]];
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







