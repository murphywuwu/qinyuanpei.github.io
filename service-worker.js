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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","89105beed66db9424e82786b38d1b0c0"],["archives/2014/12/index.html","9aaaa737eb0f7b2b8620ef793924f6ff"],["archives/2014/index.html","06680fe7c5be508800c1e4ee68af51ab"],["archives/2015/01/index.html","16960830c929abd0a24305a52655e004"],["archives/2015/02/index.html","5513eabaf69b9988821bf7292c9eba93"],["archives/2015/03/index.html","736289493006d53d04256737e2153968"],["archives/2015/04/index.html","f05dbd6b5dfebbba9346761b1738a42a"],["archives/2015/05/index.html","2a0aef70494a5d07abd9916a44748720"],["archives/2015/06/index.html","47b83b3e2cac3718a0dff5aaa01e65a3"],["archives/2015/07/index.html","b73751082c74fbaa88d689aacf740514"],["archives/2015/08/index.html","1e7a0fbd9b91078a8f60bad11a1d5a37"],["archives/2015/09/index.html","0f4262e381f64731adc6ba46ef297cb5"],["archives/2015/10/index.html","297f807a9a8b0f034382bddc1b7f62b3"],["archives/2015/11/index.html","7743f5313b85504d40c07b956df9a602"],["archives/2015/12/index.html","f04410d0e57a3e2fbffd6ae30840a81b"],["archives/2015/index.html","6b9f17e5899b7bdc46bc6c43cc0bf556"],["archives/2015/pages/2/index.html","fb05d0b6bd143172a15fdee7c7372ada"],["archives/2015/pages/3/index.html","420af742d6f396e878dcd1171cf264c4"],["archives/2015/pages/4/index.html","270664f7dc7de9673191443b5a38de41"],["archives/2015/pages/5/index.html","6472dead7117bfdd11390ebd409d1629"],["archives/2015/pages/6/index.html","1eeca452a81461af62b325d066825d8c"],["archives/2016/01/index.html","c49f96652d2fa08f40747fd89842ee95"],["archives/2016/03/index.html","5486aad4b234fbbeb4954c4abdf44dab"],["archives/2016/05/index.html","b678fd4cdd76b61c794c5abeaff35516"],["archives/2016/06/index.html","9b46675b9a5b27294fe754bd11f78715"],["archives/2016/07/index.html","9e341aa864dc0f76de123ed09e730760"],["archives/2016/09/index.html","7a23239a33d1a334aeeba3009e95d1f1"],["archives/2016/10/index.html","972fb0609927f44855956e93a27a8b02"],["archives/2016/11/index.html","73678bdc5ac7bf74148ba6f0d805dbf6"],["archives/2016/index.html","3d8578db1eef9b1967a2807b4bf58bdd"],["archives/2016/pages/2/index.html","d228e74a8f7aa3f32c724cc5aace36cc"],["archives/2016/pages/3/index.html","b0939bdd30c0485bc0932ed481a57fde"],["archives/2017/02/index.html","ed6821210351a9a78de9bec335249121"],["archives/2017/03/index.html","1634c3870081361865e8bf124c8dc06d"],["archives/2017/04/index.html","6ede4327ea10e97c507e9b0e3f17e633"],["archives/2017/05/index.html","7c5a1fe8e1b9a6842ad636c6f263e4ab"],["archives/2017/07/index.html","06460b54ed0c915a2169029e836d0df5"],["archives/2017/08/index.html","dfa3d2aa27db458958d3478c0a61be50"],["archives/2017/09/index.html","0890440f947a51542465174e1d94a0d8"],["archives/2017/10/index.html","6c7558c661b409b6354fe2ece4df63c2"],["archives/2017/11/index.html","88179979677545a19a343ef3e2b876a2"],["archives/2017/12/index.html","6894cd36ca8fc165fa22ec4654df8420"],["archives/2017/index.html","191c84e5bd768f4f5347ec07762be165"],["archives/2017/pages/2/index.html","058ce2fd003ca9ccca9ee42227180db7"],["archives/2018/01/index.html","09d1eae20eace82116d6d48a6be805ac"],["archives/2018/02/index.html","5d2f28f23c3cea2bae6cf3d34f31190d"],["archives/2018/03/index.html","6ed8d034a56d4c9ca30232d943ce95a3"],["archives/2018/04/index.html","bf2f136f12a69c903ca193b9c2ca6dd0"],["archives/2018/05/index.html","460aba886bdf0bad2533ec41499f544d"],["archives/2018/06/index.html","4027b35cd8dc82e9e03e56f6f26021c1"],["archives/2018/07/index.html","7ba37ea376b4d91d57e94b8e684661c9"],["archives/2018/08/index.html","bae95e36e380981e38d391c00443f8d6"],["archives/2018/09/index.html","f289fec6d70f0a9e042f0348756f5632"],["archives/2018/10/index.html","a67a697c74b98b1e0adc6ddf732c369d"],["archives/2018/index.html","caec205b1bee55c0f83d9b058fb366c6"],["archives/2018/pages/2/index.html","73f9c6c311f66acc5cc8928d55d557f7"],["archives/2018/pages/3/index.html","71ceb38ec07f62e2fb15fa08a097d34d"],["archives/2018/pages/4/index.html","5d3edc8b20f6abda2d9cac34a101f56c"],["archives/2019/01/index.html","01816c21c84266369b937c65ac98e2f8"],["archives/2019/02/index.html","7b0b1eac763423e332533908f1055f95"],["archives/2019/03/index.html","2060996b353d1eb385954182cb3fdd05"],["archives/2019/04/index.html","090b9f0e92e24da43a07b62750f3aa98"],["archives/2019/05/index.html","e5d339043e72544b534bc09a4ff5655d"],["archives/2019/06/index.html","51c5cebb422012ed4d80f5a7562b9d82"],["archives/2019/07/index.html","3ac379145d353d9961a4f1a8d346f773"],["archives/2019/08/index.html","322a1dc97f51d2d74f11db3069332763"],["archives/2019/09/index.html","06403ad19678442baf0d2301f24effdc"],["archives/2019/10/index.html","94a4761a61a130fdc284da8994eed5fd"],["archives/2019/11/index.html","116e40ab335986571bfbb72c66ceb217"],["archives/2019/12/index.html","17a4d7ece7cd4da58fe05f6c91182e6d"],["archives/2019/index.html","8f543d6dd838e1f8c18d13f0ed50e5dd"],["archives/2019/pages/2/index.html","e1e1a7e932345f8d07f0f78046a18adb"],["archives/2019/pages/3/index.html","47d39d9d20f799adc9245d17e502c028"],["archives/2020/01/index.html","acdb75382a20997e1a39f89e55b8e34e"],["archives/2020/02/index.html","ae1ea0105e2a906dbda24e7281488656"],["archives/2020/index.html","443b795776642d55a0acdf32216f8d3d"],["archives/index.html","e815da3fb191429b6e5ae4b301996574"],["archives/pages/10/index.html","a5cc47856ae9e8a43a9dfbb7e49c8848"],["archives/pages/11/index.html","431f73837aa1ca683497575cd7f179d5"],["archives/pages/12/index.html","08a116518e310d34e665c5a09b65dd05"],["archives/pages/13/index.html","3555a7dc62901c349fc64937aa21790d"],["archives/pages/14/index.html","798470471d64d43e24412274e503b240"],["archives/pages/15/index.html","51370111a50205c2d372157a91af9825"],["archives/pages/16/index.html","0d12556ab5f7059addef35a7182773b9"],["archives/pages/2/index.html","5d087335247c87442f51e45ab6866a25"],["archives/pages/3/index.html","d4ed5e2c45cb69b8f6df2ca8828cb3c7"],["archives/pages/4/index.html","4216a857160f21f4acfca8df0718d18d"],["archives/pages/5/index.html","07cdf456c135a3aabc78d986988431f1"],["archives/pages/6/index.html","2a80ec0d1e3451b7ef35f8c211df5d74"],["archives/pages/7/index.html","9b9f9b4f2282444ff95cb6dba8c2106f"],["archives/pages/8/index.html","04b3d8e8f08cefbad59fe1c47a060a24"],["archives/pages/9/index.html","f1c8f71a88f62fa23a3de721985cddac"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","23a95e1d4b336b75d36f09c9d70f413b"],["categories/Unity3D/index.html","a52aa144e0c29767320ac4b78d08236b"],["categories/Unity3D/pages/2/index.html","00bf55c1535f55cb8213bff6fed1da3d"],["categories/index.html","b6ac5eceee5cfc03ed2f8bae37d23841"],["categories/人工智能/index.html","7c5a6e4e85808becc3ad07e6e9a01ca8"],["categories/前端开发/index.html","ea99a30cf3b7d1b598068e3437335cff"],["categories/单机游戏/index.html","689e735f47f8e23dd05cd4cdb923e7c8"],["categories/开发工具/index.html","b9bc220c906f12a1cd9e21bb45d4967a"],["categories/数据分析/index.html","0c16a930c17e744479b78b981808bb76"],["categories/数据存储/index.html","e9ec99637f53061d7949c214da75c959"],["categories/游戏开发/index.html","84823b67f930b7aae15f55a6151d15f8"],["categories/游戏开发/pages/2/index.html","9cd9689cdf10a4dcb1520a6ec13f9388"],["categories/游戏引擎/index.html","4d74668459f1b71f75c9a6ba7c09463f"],["categories/独立博客/index.html","d9fd1aeb2e1cb26b1b29f503d6c581bb"],["categories/生活感悟/index.html","e1e5ef43518648c15cefb742ef3bf6e9"],["categories/生活感悟/pages/2/index.html","272325129e1333ef7b0c849d7756ae0e"],["categories/生活感悟/pages/3/index.html","c31ed5ec4095064908541a748153f84a"],["categories/编程语言/index.html","f180d2ad825dc446e9f4d494223d3015"],["categories/编程语言/pages/2/index.html","6d7c47d8dfa7a6b0f4256907ae01b7f8"],["categories/编程语言/pages/3/index.html","018065b08c0753e7b927ebf829d922d0"],["categories/编程语言/pages/4/index.html","0344738f3ffa55c77da6e0cb731402ae"],["categories/编程语言/pages/5/index.html","654cdb50dad822129774dff19ef564e0"],["categories/读书笔记/index.html","34148ce26ea57b7ca456256e0d7836f4"],["categories/读书笔记/pages/2/index.html","d9fed27b572c7112c94fc805352ef988"],["index.html","398a69191d372b8d682eb2974af6885e"],["movies/index.html","957130d3e06693f353b005f93ae4b100"],["musics/index.html","2a0bf32ae34146d5d9b4cf653980efed"],["pages/10/index.html","bd09dad814172e38c1901c5ae7acec4e"],["pages/11/index.html","cc6abf1bfdc5c140601998a1d48760dc"],["pages/12/index.html","c26ff29cf00bb4782484f498b765770d"],["pages/13/index.html","5101e73660db8a0e1406ad3a73bb6a5f"],["pages/14/index.html","0e3f93c33108869123af893efc6a189a"],["pages/15/index.html","38f2b7cbdf2d3f34ae7f98708129ca17"],["pages/16/index.html","e86e47c42bc981db075994531a9bce69"],["pages/2/index.html","78db0ceaf1fe8ff711ab7055a11cc3e7"],["pages/3/index.html","b791cab6baa3a45b7f52d27ff2b2dda7"],["pages/4/index.html","b6f4e6510cfe7feb34dfebba814bdfcd"],["pages/5/index.html","92c41daf779c39de54dedaa830773ec3"],["pages/6/index.html","5b1bb58ce95c46359de45877c70588a5"],["pages/7/index.html","981d6d9e93e880dca8eda261592e2378"],["pages/8/index.html","7451670003c74c28406a84ddef78bc43"],["pages/9/index.html","0df5dfdba7e2cc0f863479da2c7bfd0b"],["posts/1059499448/index.html","fc7ac84336b64e0f8e55bd920e55b74a"],["posts/1071063696/index.html","5302f7135a2a1f883a945bff2c1736cb"],["posts/1082185388/index.html","316f3855273431fda1ed4714649b5438"],["posts/1099762326/index.html","7ef26698e01d7ae016ad65f1f0f85af7"],["posts/1113828794/index.html","48a76017842fd3fa22218e5a42c1d89b"],["posts/1118169753/index.html","1efb9dce36c232e1a1836491eb15a479"],["posts/1122710277/index.html","99a91990b15373a52950258e6d366b9f"],["posts/1124152964/index.html","013b17c81be62df09e15f8472894b88c"],["posts/1127467740/index.html","752d9cc73139d6a265f4f867b7c01513"],["posts/1150071886/index.html","f6753b9dfaca310393d35fc8c3417d65"],["posts/1150143610/index.html","06f14709feca0c1374e58926ae8d9e51"],["posts/1152813120/index.html","adcb1a5db8f49677296f89fbef1993d6"],["posts/115524443/index.html","5695632e0874dbddc38ac3a789380319"],["posts/1156673678/index.html","91e9311f0485b0d346d64e8f8d8fb8d8"],["posts/1166840790/index.html","21822725167f13feb384aa8a2f96e2dd"],["posts/116795088/index.html","05a25ce74cd6cc145c165ef871736a09"],["posts/1176959868/index.html","b7e5a9f924e0e48be2249888d479d6e3"],["posts/1190622881/index.html","2d469d47d82c910b5d9db742a5897da7"],["posts/123663202/index.html","29c1e8e45817a8ee4597de88fa9bb9a9"],["posts/124807650/index.html","190338fec342f45df0638763969b65de"],["posts/1254783039/index.html","3cfaeede96a9e34a6a4343149ed2b347"],["posts/1320325685/index.html","91c9feeef698fec7171a19d500a37432"],["posts/1329254441/index.html","82e1648ed1f252d374521826244b54b9"],["posts/1357715684/index.html","90e2c96900ccb511d28d512006064fcd"],["posts/1358971951/index.html","48b3c006e82baa6d340e8100bd2efbd3"],["posts/1386017461/index.html","f0fba61551c47a05100ec6e05452a506"],["posts/1394521917/index.html","5a81f9ec57a02b84ef149421d830cf3c"],["posts/1397717193/index.html","23808089c42c25a15ab19d459e94941a"],["posts/1417719502/index.html","c31399d516d8693819db256b50bc2470"],["posts/1424645834/index.html","f992158b1de94b9aa8f550c2a3a2c894"],["posts/1444577573/index.html","f1e537f64aa599d0febd526757f5ba14"],["posts/1467630055/index.html","8efa020a6557b92e572ceb99ff1239cd"],["posts/1478979553/index.html","5e9a66c955855df4f339e8c3cb4a7b0e"],["posts/1540537013/index.html","edefbaf2c62ae2bebac54ad114bb183b"],["posts/166983157/index.html","2422418af053b6e8b5c19d87c5a3d147"],["posts/1670305415/index.html","f44d79f7225015c7bcd8d597acc480e4"],["posts/1684318907/index.html","4076e7dd8468abf56928610ccb5efaf5"],["posts/169430744/index.html","3bcfcb4590b66a333a3d6df8cb645e1e"],["posts/1700650235/index.html","37eb01edd4b24f9cc24a84d524f312ca"],["posts/172426938/index.html","48bb0c389b354b1813706b41ca3349a8"],["posts/1836680899/index.html","9bdda94ca80d89576e3e59e443ee7d08"],["posts/183718218/index.html","4d1bc3972e7871970d3e25acb5ae4965"],["posts/187480982/index.html","ca3871cc2f9ab2c470d7b11cf850425e"],["posts/1930050594/index.html","80083d1b7fcd99e3511d0a3d6c39c766"],["posts/1933583281/index.html","31cf92fff3ed691e8ca6cdd408207822"],["posts/1940333895/index.html","c854d193d31eb2eb1b0e64eb48ff5ea3"],["posts/1960676615/index.html","92eb31d349b80233e4d2492dcb50c324"],["posts/1983298072/index.html","3aad80a550cdb47e0ba7209b07360430"],["posts/1989654282/index.html","518aae80c1a20b7fa64ae01138515d89"],["posts/2015300310/index.html","28da7b807b4daaffe1dc07ebaaffdee1"],["posts/2038378679/index.html","5e89d41d8fbc69278e450853f9a1593e"],["posts/2041685704/index.html","c37de8633f86799059e8171c6604ef91"],["posts/21112647/index.html","de3d4e6a8e9d74d7f077392254426d7c"],["posts/2158696176/index.html","08f125bd5080959646221752a8883e5a"],["posts/2171683728/index.html","ce370ece6b907c65fd08a0c3b3305f9c"],["posts/2186770732/index.html","b3e200e070556810d3d0cd68a09409de"],["posts/2275646954/index.html","d7807929ce30391d046512bdcdbfa9f4"],["posts/2314414875/index.html","2b22867ace0897b3954b3feacf022abf"],["posts/2318173297/index.html","1038952d4e5d11e441ee0b947d77cf8f"],["posts/2418566449/index.html","7ae97883f39523dc62ef038176b0f24f"],["posts/2436573863/index.html","0503d4d8227f0e47c33f1f5e26900300"],["posts/2462008667/index.html","767e83cdc7432da1ed015a9f388330c4"],["posts/2463121881/index.html","ba83e0efe9a581a3d44a21c6bb8c9425"],["posts/2527231326/index.html","25443c4132ebf48cbd4cc5da697fa1b3"],["posts/2583252123/index.html","72f7a6cf6b0ea839a2dc65885d95a14b"],["posts/2613006280/index.html","139935988291a4500599ef631e530573"],["posts/2617501472/index.html","4e1beb2fd74a7c2a0408fdb1ae852c4c"],["posts/2676125676/index.html","b0cf01785e1cf77ac3ea6ce835bf3d70"],["posts/2734896333/index.html","1e103ef647ae6db554cf12d5890ca15e"],["posts/2752169106/index.html","8669d2f91826e6338011d2a0a7d2603d"],["posts/2799263488/index.html","2956e820299ee7f2e51f385169b870b7"],["posts/2805694118/index.html","3c4eab6fe5a02ef82dc59e7b3c388a4c"],["posts/2809571715/index.html","4861db4746c14a9b9d19717cc17dc5f2"],["posts/2822230423/index.html","137a20b39d2b0e1af9ac2577bf12e662"],["posts/2829333122/index.html","b04400f5a2eb32e88942474806f276c5"],["posts/2911923212/index.html","9cd78d12dc8a5dae1e9da4e81820c184"],["posts/2941880815/index.html","ffff2c5fd1593abbf38b887944af467c"],["posts/2950334112/index.html","002147407c73d42506f1664770704f4b"],["posts/2954591764/index.html","07948a7a9b8991f3d4c3f0aeaaf30d4c"],["posts/3019914405/index.html","8d5f98ef5d13ec5f639e38f7f2fc6d97"],["posts/3032366281/index.html","d5303472b27592c0bbe6c9d9d316a192"],["posts/3040357134/index.html","f2b2cfee122c2860bba86b5062b53a78"],["posts/305484621/index.html","f5e4b95100c4943f7f4c3831400dd63a"],["posts/3083474169/index.html","9e75fb459b0112a568d75d861f88ae02"],["posts/3099575458/index.html","54b20e3b4e2bc68952008ec53ba52052"],["posts/3111375079/index.html","49c78206d0c9ecdef0f6a59ab5656700"],["posts/3120185261/index.html","91a64363818e3d8c7c2149c9cdbf9438"],["posts/3131944018/index.html","8302ac477c230562b86ffc6ce4ea7f9d"],["posts/316230277/index.html","bef0dbbde117bc03869cae6a41e2869e"],["posts/3175881014/index.html","082d807d34e2fc109e2d28c4ea054c3f"],["posts/3222622531/index.html","5b077c61e2632250203dfdd09cd2ce69"],["posts/3247186509/index.html","4f9b158e8b23bbe1281e135f87a3ecc7"],["posts/3269605707/index.html","6e3c7f493fb32f7afa27199fb8cb3976"],["posts/3291578070/index.html","716f34f729b37f7740d030c003b3da7f"],["posts/331752533/index.html","f741a6e8ce7800c195e1c86d20026709"],["posts/3321992673/index.html","1390841667b67f655d4941e3e928b240"],["posts/335366821/index.html","b826880ac8bf45e871291b268bba5850"],["posts/3356910090/index.html","222255afbcda7eec55aa7919a6a300f8"],["posts/337943766/index.html","4811a6493ace544497778d45295a795b"],["posts/3417652955/index.html","df3d7c019b26b85fbae2692faee409fe"],["posts/3444626340/index.html","eb8da920d0f255f114881757d72a2df8"],["posts/3449402269/index.html","7e47c298772c9feec3dd46c25a92137e"],["posts/345410188/index.html","9a461002c771578dd3c6f711062eea9e"],["posts/3461518355/index.html","3f153b19d701642b4db0f05def8aa6a4"],["posts/3494408209/index.html","310b254ef4a9effdc81d30d17e56f1cf"],["posts/352037321/index.html","2cbea7c74dc3a8535c4c888ea02dcac8"],["posts/3521618732/index.html","ec3c90b047cbce496ea8c066593f71e0"],["posts/3568552646/index.html","f620fbd4e02701088354ebb67dd6f776"],["posts/3603924376/index.html","a8db1c3c00b2ea668288f28819b9141d"],["posts/3637847962/index.html","27d13b61695d94a119d2507925e34cca"],["posts/3642630198/index.html","cb2b4d2b0b27acb52f5588895cefa40b"],["posts/3653662258/index.html","1be1b54a7b89d4f219050b30737e6075"],["posts/3653716295/index.html","955480a54befd8542912110287056051"],["posts/3657008967/index.html","f211f45f7bfa820dfe325413d454a21c"],["posts/3668933172/index.html","03ac12216166f8f5db9c1e583ee6b114"],["posts/3677280829/index.html","740d9af0d9b6164d034201d0ed1fab2d"],["posts/369095810/index.html","32121ab05967417d7ceb5f77f35227ae"],["posts/3695777215/index.html","9bf1c8b0357b1f09f9a4eb37fee46809"],["posts/3736599391/index.html","fa77208f2f2d366307b0f571c3bdefab"],["posts/3742212493/index.html","eefbbd7c817b6cab1f92ef378a8edfe1"],["posts/3782208845/index.html","5ebcc6599b627a48b7e523b630c4621b"],["posts/3789971938/index.html","6b9fdb5dbd6272cabff38a03fc5485ed"],["posts/380519286/index.html","c8a8a3fa73d1cfe15fa413e616574a99"],["posts/3846545990/index.html","5db28a013199522b1ee5f514be265443"],["posts/3873710624/index.html","bda2d71d7a9aef32a1f9e3c8f53376a6"],["posts/3959327595/index.html","c1fc93e499902d276df91fed943e3cf8"],["posts/3972610476/index.html","fb18479d329a48310e0aa737fb8753e8"],["posts/3995512051/index.html","82660746b7651db43ed7e8e2ab8b9a2b"],["posts/4088452183/index.html","e4ee1dace13e6b4b092fe2f72a4d4727"],["posts/4116164325/index.html","ee7056c335c95c5e460386c9b63085e3"],["posts/4158690468/index.html","201c29365977531cd227a0a1a1abf155"],["posts/4159187524/index.html","203ba73397734309e3d0934c67f7bdae"],["posts/4197961431/index.html","1c7f287784f432102f5f5dd191e3ccc6"],["posts/4205536912/index.html","94b8150bffe353af1f091f124767b59a"],["posts/4236649/index.html","0c832d9cb40ce55189aefe9f83cde64e"],["posts/426338252/index.html","861a0804a2bb21c59638bdc68d766920"],["posts/450254281/index.html","ad3292a2d3b623bef37744ab80056173"],["posts/4891372/index.html","cecc43c506e2eaad748964b7db2f2853"],["posts/569337285/index.html","43d07195bb78bd2df785e1865e1ae905"],["posts/570137885/index.html","2b63a44b411681a8aa2cd33e12155c59"],["posts/570888918/index.html","055a4331d2e8c3fe30f0fcef1dbb8384"],["posts/582264328/index.html","d59e55e46f7fe637823bcf45408c0cfe"],["posts/632291273/index.html","544fa858812f355539a607dcb69169ea"],["posts/70687890/index.html","407ab70baa946f552a59002a3f470631"],["posts/719322223/index.html","4937eebd43a6b8767b9161ad4be61598"],["posts/720539850/index.html","b079484f2ba519f0f9f290a41782dddf"],["posts/786195243/index.html","27b7327f7722d296d5b8fdc18ca001da"],["posts/795474045/index.html","3fc5cc39088ddb7484b019e9e0500cd9"],["posts/815861661/index.html","ce59d1c3273cfca1c22c6d5d02b2c145"],["posts/821259985/index.html","1f3e5387c085be5df7ecc18a343afed2"],["posts/828223375/index.html","020500f8eb4e3adb588cabbf290d7cd7"],["posts/887585917/index.html","bef1f5c4a256724945fe4ad40f52c15f"],["posts/888549816/index.html","c7a3ef390838adb06ac85dfca324cdd8"],["posts/906436376/index.html","22d0fc5eeba57d5768fa88ebcc3b55bb"],["posts/907824546/index.html","ab0745d70a6cd6356f37988ac66a2c1a"],["posts/927393529/index.html","ff0178ac73d5f95ca928fa62f2928eee"],["posts/94443781/index.html","3e7bfea134c3d84ea4c5545f07aca1be"],["tags/2014/index.html","8a916ddcf23397d9f423d9959d2c3ce9"],["tags/2019/index.html","a3bc199a27412608c920c7c342c023fe"],["tags/AI/index.html","caa4394d01f797594a3c629f2ae0df46"],["tags/AOP/index.html","7fb3f5fa5936315f3b9f1cf1f1922aad"],["tags/AR/index.html","5c1e782ad7067f665fee155cc38dd930"],["tags/AssetBundle/index.html","1d209276e80ff7c958dfabfa660593c6"],["tags/C/index.html","c8f2486a5bc05992f3b9ff9b8837d5c7"],["tags/CDN/index.html","82edce37c3c092cb66c97a36817f710e"],["tags/CG/index.html","89b02651339319fd586ad2138f78b3cf"],["tags/CI/index.html","bd73442942695da5f8f88f2984388365"],["tags/CORS/index.html","f3640e8e8f509f81fa78e47e62861732"],["tags/CSharp/index.html","cabac9ebd6d6e2bb4111d39b3f901bbb"],["tags/Castle/index.html","a424d8d911ca7d8da6e3cf8e6e50af28"],["tags/DBeaver/index.html","9edbc8312af485869713deed51ec3a50"],["tags/Docker/index.html","751e8154a7f2423256e1595d6a909de5"],["tags/Dynamic-Proxy/index.html","c794f3ff83214146544ed14f6f149806"],["tags/Dynamic-WebApi/index.html","3bcab30f3a7326f45e9f8225baa90d40"],["tags/EF/index.html","4946359af76b7f3bbef88efa8a0a8caf"],["tags/ES6/index.html","4930b2d8aefd0c96da01bb5af0a93eeb"],["tags/EasyAR/index.html","84ebd4484d3fe755c49086a80bf1d74a"],["tags/Excel/index.html","4267b29c6d3e22b557a60880220eb877"],["tags/FP/index.html","74df759ddf43133568541624f9989bbc"],["tags/Form/index.html","554a3ad69bd1132b96572e3ebc67bd01"],["tags/Git/index.html","3fadc2d916cd470ef355f431814cb57f"],["tags/Github/index.html","ad0a200af17edf5b614c18e4d01e171f"],["tags/HTML5/index.html","8049cad5126e13d8ec80f0aa54cd45e2"],["tags/HTTP/index.html","4a25697cfa0c5978eb73976f2d70962a"],["tags/Hangfire/index.html","18d0e0685049cc9b0d4ea9bc9d5eceb2"],["tags/Hexo/index.html","a467102300f164d1e7f84299dd2fec80"],["tags/HttpClient/index.html","124e5f935c3639909689c16fff9fe06c"],["tags/Hyperlog/index.html","36af2eb200411d499c09d163aae210cb"],["tags/IDE/index.html","2c8af1bf6ba87cb8921082315f53f88c"],["tags/JS/index.html","d6b773a29f51bee8ac89bf1f54797fba"],["tags/JSON/index.html","5c8bd55eca109c3fda516ad5f5c6b837"],["tags/JSONP/index.html","4db3820e7174b2e29cafabc9fa7a971a"],["tags/Java/index.html","287ecb20506ce08b9fbbdc8a71706f8a"],["tags/JavaScript/index.html","abc92d784ec7357adf693aab78620c08"],["tags/Jexus/index.html","6fe00c138046886fe25b24d4cf0dd8d9"],["tags/Kindle/index.html","806c4731d8f964092f7617784032a244"],["tags/Lambda/index.html","12cf4e947e581f992c2481ec0784d8e0"],["tags/Linux/index.html","5996ca5fc4ee50c9ca4bf66d6601e0f5"],["tags/Liquid/index.html","c1e7fb4d2e1bed1872377cebc7d74fa9"],["tags/Logger/index.html","193ece573decbdb3bfb5162a84fed50a"],["tags/Love2D/index.html","3a116f2fcc189e96eb180055406a2de4"],["tags/Lua/index.html","881b6093ace918baba3cdd2a59495897"],["tags/MMD/index.html","bb15e4b0173e53ee2b5462ac2be3e4a5"],["tags/MSBuild/index.html","0f665944c956c04fd569f2234255662e"],["tags/MVC/index.html","eb46446f8aed72acdc53a066b414652b"],["tags/MVVM/index.html","66fe298b3509ee0e0fa70b66b5eb6da7"],["tags/MapReduce/index.html","1f40234e1e39ea7dcfb484572c24edeb"],["tags/Markdown/index.html","65a179c83587460d8e21deb306cc8fc3"],["tags/Mecanim/index.html","76db68cb23d049ab43e6ae974674acb4"],["tags/Mono/index.html","2141062920d9d7ad40fc56cf85bcbb30"],["tags/NET-Core/index.html","942f61e412312e596c4bfa65ab44f1e3"],["tags/NET/index.html","8640fd68ac9d9d75d4c8ff0686658917"],["tags/Nginx/index.html","cabc32caf4434b44ec304a11f673c128"],["tags/OBJ/index.html","8fe20f83f314948cc2c59077b1ddd01d"],["tags/Oracle/index.html","50207365d3a58b8ef7c2f878a7a737cb"],["tags/PL-SQL/index.html","8cf99433c478ee0a32b4143a470d06c3"],["tags/POCOController/index.html","772199d3386e811227580c7d56f806ea"],["tags/PWA/index.html","291f4a4e319472db8f3b66cd5132e800"],["tags/Python/index.html","0bf606d76989e87ea0c995c1ebb54f16"],["tags/RESTful/index.html","374816145a5c31e4ce42e245168ed710"],["tags/RFC/index.html","e22ea268a443842b0e0625f5345444e9"],["tags/RPG/index.html","18b04d5d61c08463969a841cf6651a1d"],["tags/RSETful/index.html","c16c30b6b0227e2c72203eea22a27f81"],["tags/React/index.html","e946a9b56443ef99a239281c0ad0a3b7"],["tags/Redis/index.html","e5919529c13a9916789b025c02cd14b3"],["tags/Referrer/index.html","0e7642f5e1e3572ed204ae433a9e73aa"],["tags/SDL/index.html","b8d160a4bc4f0b54ff5b944a758c530b"],["tags/SQLite/index.html","4298f5f5a66baf2e4cc89ab5344156e6"],["tags/SSE/index.html","79c9aa02cdd64aae0e57fb337a938fc0"],["tags/SVN/index.html","f0f5235d7ecf854ad7fae24caa3b18ca"],["tags/Script/index.html","8e30f11bff2078a56930dfcef3ea2535"],["tags/Server酱/index.html","86e58da6bf66fbd6531b509716a8b650"],["tags/Shader/index.html","0befd0588cf4860a67e85b5dafcbc8fe"],["tags/SignalR/index.html","ac612627bd0ad8a9e6c23e3445d43dc3"],["tags/Socket/index.html","89402928604d2a83610570ff866d680c"],["tags/Sonar/index.html","7eb8517783336905ad2737f7849f42a8"],["tags/SourceTree/index.html","a5c2b09e5f346f575f71fbd2fdc4ef06"],["tags/Sublime/index.html","de1c69245eaf9406effed6f070d27c41"],["tags/Swagger/index.html","61ee06247d06ec01e36869b855e57485"],["tags/Trace/index.html","a0545adf0e1baaf3d322406900842fe2"],["tags/Travis/index.html","45bd7e6fe50c7353ee11cbee59e45b5f"],["tags/Unity/index.html","c82470e65f82dcb24395a7a993600fb4"],["tags/Unity3D/index.html","9972e736ead8e764af6d119cc54085f5"],["tags/Unity3D/pages/2/index.html","20f924356f4bb5a6960b556154c01a75"],["tags/Unity3D/pages/3/index.html","141c64b99c55f80f3abf6bf5b5ec52e5"],["tags/VSCode/index.html","ebc6db708fc4cd62f035bfdfa106753e"],["tags/Valine/index.html","865df47d60ba830445b7f95f74b98ed2"],["tags/Visual-Studio/index.html","6e4ac2203c8e3d984545251e0f61a655"],["tags/Vue/index.html","5c47ac079d570ddc7263d7e1314470e2"],["tags/WSL/index.html","735741fc7c055b34618dd36e6e2b81e7"],["tags/Web-API/index.html","5797e839b998b5416b372154088271e9"],["tags/Web/index.html","a7f683b64b0078c64e6b0bca4d205bef"],["tags/WebApi/index.html","ddf8a5572e9244e04a4ad3c535fca103"],["tags/WebSocket/index.html","3b45d34c6f366a463559806cd8f1da66"],["tags/Wechat/index.html","f0cd703d034d00abe6180538b5f4e916"],["tags/Windows/index.html","41a35122aac6bfa635adb4f34b8dff99"],["tags/disunity/index.html","7739a6e208ecde80900d14ea71beb6bb"],["tags/index.html","021f32d0c8326ca06c0b515e5e53394f"],["tags/matplotlib/index.html","cf745c0e18d1323e176728ca151f27c4"],["tags/njsDelivr/index.html","ef2a87e03b38437176d43f7cac8a6b92"],["tags/uGUI/index.html","8f315cc29f2cd14b4b239852d70299e8"],["tags/zTree/index.html","e8d2ade93e5e60bca8c5266d3e36076a"],["tags/一出好戏/index.html","abe46669c39dd5ad128893b03ffdae78"],["tags/七牛/index.html","0f23a21c23ecb9ae688e101e8fe00a0a"],["tags/主从复制/index.html","2b85623a4f508a8736ad39fbe3177375"],["tags/事件/index.html","d92b7a040480a7f14962318eaaa8fe7b"],["tags/二维码/index.html","344cdc5b9a980a1f876a95bf2ee18bed"],["tags/云音乐/index.html","80766f515ce2b11a0a5b318d1ea9c9ab"],["tags/互联网/index.html","cda90b279158041c3c2fc9a92935a79c"],["tags/亲情/index.html","0d26314e36c714d6fb755297224bdf5a"],["tags/人文/index.html","2feb963356f5c4fdaf1886e540e0da8d"],["tags/人生/index.html","f2c05a0bbaa0c0435d64384b0c64ef11"],["tags/仙剑奇侠传/index.html","cd42327b1c131d47f6108c1ba7d924fe"],["tags/价值/index.html","4d66a330269bff9903b65cb3d54b38f5"],["tags/优化/index.html","6be143dbc0eae7e4b90c2acec0bde373"],["tags/全智贤/index.html","8ee6b42a1d55cb671ce2f9caf55831d2"],["tags/公众号/index.html","ac1e5df1f4a92385d4ee98076ec21dc4"],["tags/关卡系统/index.html","9f5207699bd5d3dac7e1530ab8425551"],["tags/函数式编程/index.html","e5dc899fd68c579075ca8b58dca1067d"],["tags/别离/index.html","2163547cfc580197008ad306740c5952"],["tags/前任/index.html","cb4f25248bdd32a493bb23858a5fdeaa"],["tags/前端/index.html","db5dd47b4d565aaf52d1d28d3351118a"],["tags/剑指Offer/index.html","997de1003b55eba6cceaabbdf5a4eb8f"],["tags/加密/index.html","2276e6ded15b24ffe6a17abe0c34be1d"],["tags/动态代理/index.html","c8c6067cfd4cdd616f9b30e5af0bdcc4"],["tags/动态加载/index.html","0147f5dca326592a1b393d3a961d8380"],["tags/动画/index.html","6a57950f276f175569fdc1a97267e449"],["tags/单位/index.html","208a89feb8ee13bb70621540957a0ff9"],["tags/单机游戏/index.html","f12b815e4c732d46b5d15d62358b1f35"],["tags/印度/index.html","1b7dc6ea49c652aa619747d7bbd1c820"],["tags/历史/index.html","a74b40204b71266c61c7bc462eb6303b"],["tags/反编译/index.html","da5bc72761d3cb2471bfebd874516c42"],["tags/同步/index.html","053d43b43e01dfb04bddb3770304e0b4"],["tags/后端/index.html","ae8b6febf0901ef36b37b914f26238a1"],["tags/命令/index.html","2d3ae1822b50f908d72ad5a5d2625230"],["tags/和平/index.html","fcab5d678679b646a02e039f6cc775ed"],["tags/响应式/index.html","beb33e2224fdb82ecfaf2ec09c1dbde7"],["tags/哲学/index.html","8ef287e1947c89e569a78a4f0cee83d1"],["tags/回家/index.html","9349f997ac60f42e47499bb2ce9d8265"],["tags/回忆/index.html","bbc04b188fbaf6205ea4b14e442be5c6"],["tags/回顾/index.html","aece4585ae5aa0017be71542460217d1"],["tags/回首/index.html","c3203ecda179af1c1f5a627b188636a5"],["tags/图床/index.html","e08e9eb240a2f4efb997991a240dbc10"],["tags/图形/index.html","d8c39e32fc29f29d33a668da8118767e"],["tags/地图/index.html","e4ab2dfa5a3fe6b912cb55aeb4503ea7"],["tags/塔防/index.html","53b7f71db37aad2868d977a240078a6b"],["tags/增强现实/index.html","168b692044773afe1c8c37d105cf9944"],["tags/壁纸/index.html","8319b1caad972885f86bc9b8d26affed"],["tags/夏目漱石/index.html","931bc9bf85ee0ce349133109f2dc91e7"],["tags/多线程/index.html","37d77211aeac6f4876c4b2a4cc0d70f6"],["tags/大护法/index.html","b7bac301c7cb23cb92ae78bf910640f7"],["tags/委托/index.html","35f5bfa9b80c4b96b5b7e25a815b804e"],["tags/孤独/index.html","4133707622039c236d4322aa647d8d7f"],["tags/展望/index.html","db3c13cc5abc1785541d2cef9b0955c8"],["tags/工作/index.html","bb017ef3362cbebbab54f85959f01792"],["tags/平凡/index.html","d90ae78f9586f1176734e249c1a0f21e"],["tags/年华/index.html","1035cf5563df2b8866bc7e45fb11cfec"],["tags/年度/index.html","527d3f3cdb88c214db0584dd27e2bcda"],["tags/开源/index.html","f186cd197552ecba947b1417af4df6dc"],["tags/异常/index.html","3ef2b8c54b4720b4ad1b21dcd1812323"],["tags/异步/index.html","16e91a6853a8a31d46b0dbc128e81342"],["tags/引擎/index.html","c09c0dd2d250bdd9b5c658680a0904dd"],["tags/影评/index.html","d760d24f882eca04857edd4fa8083f73"],["tags/微信/index.html","fa8b7c721f6e895ad82bb5ad51f99943"],["tags/微博/index.html","01ab85e51a8acba8b92803f6387f6022"],["tags/心情/index.html","38923228be033c0b303693848111a142"],["tags/思维/index.html","e0f257361759dd44bda2e572a74b268b"],["tags/总结/index.html","fb0e5702e7457bee7d7d5d948091b3f4"],["tags/想法/index.html","9c03392aca6f5be680f71fa0c1c1cc47"],["tags/感悟/index.html","1eb3756d67ca7a622cb9c9a56694151a"],["tags/成长/index.html","18fb415a71800ba044062243d9e0ce14"],["tags/我是猫/index.html","3d747c532aa9f3652f783137bb2aaf9c"],["tags/扩展/index.html","08bfe7fbcd315e7cfd6d9cf439ceb4ef"],["tags/扩展方法/index.html","e716fe3af37ce35038389d50d7d7c682"],["tags/技术/index.html","f67a45e1d16fcae94f0261633b7f97f9"],["tags/拖拽/index.html","aff1dd3ce75df9574ae51b6ce348cf5f"],["tags/插件/index.html","8bc11d142177426305079ecff8a1d79c"],["tags/插件化/index.html","cdb461370f08922356a0d82ee8059005"],["tags/数字/index.html","13f689fef1498e5cc0103f599ed3dc35"],["tags/数学/index.html","4834e420b77ac7c730f88dfc9372bf75"],["tags/数据/index.html","f2dac600b7503de22316d7f58ec228ac"],["tags/数据交换/index.html","bc6371ea13b3e43babf585403efb448a"],["tags/数据库/index.html","d51723b62dd4dbe089ecc509c4f9d05a"],["tags/文本分类/index.html","3acb5ff99b8c7e0e2e70a78d7aa69db6"],["tags/无问西东/index.html","67545d40a875070324df5836063969d8"],["tags/日剧/index.html","ace3e0fb18e32fb8df5dfe2acd87c9dc"],["tags/日志/index.html","5f0235a22d5d6fe8983bf1f8e0ca95bf"],["tags/日本文学/index.html","ae1010710bffe073f527b65c80eaf234"],["tags/时区/index.html","854281c673c7408f808b0e0ea7a54964"],["tags/时间/index.html","9c4bda4010c49914f745363dfe3cdcc8"],["tags/服务器/index.html","df06343ad4a3c444fe1c067dd427a6de"],["tags/朝圣/index.html","c87ecb65aa740bacb93562562f97655d"],["tags/朴素贝叶斯/index.html","e53857b94ad877cbf09336b9d8f01041"],["tags/架构/index.html","60e82809d883d859f9aede0a74c22e44"],["tags/标注/index.html","08a901a2037e7d213744656bdbf7c3b9"],["tags/校验/index.html","61fcc98676edc32cffac24a541abab53"],["tags/格式/index.html","3b10d701b411d71be00d024029c91741"],["tags/格式化/index.html","20fb312eccd4b7a331189dc7d8d35c43"],["tags/桌面/index.html","45ad029d9e32646e4d2d4f120cc51962"],["tags/梦想/index.html","e09f0539c7ac7d56a291e4262e6a8130"],["tags/概率/index.html","186b30fac34315d6015230f22934a1c2"],["tags/模板/index.html","6ec8d9b251cde5c45d3864077e26285e"],["tags/模板引擎/index.html","81fda883cab808c018832e8295299504"],["tags/毕业/index.html","fddf8de41bcffac3c2fd0d9286efa84a"],["tags/毕业季/index.html","9b525e0cc9b2b3e4ae7e740767cc43e2"],["tags/消息/index.html","99cd4eab06af6c757ccddea64325893c"],["tags/游戏/index.html","df580bfb0b49aec387aee6091912ea46"],["tags/游戏/pages/2/index.html","0753308dd94348412fe08bd821a4f74a"],["tags/游戏开发/index.html","6cfa2eaf3a43b34260c6d6cac3f144c1"],["tags/游戏引擎/index.html","1fff94fa907b366ecf26a4496552411f"],["tags/爱情/index.html","45b84ab215ca05f331012e7df6aedde0"],["tags/版本控制/index.html","d7b1fcbd17538de507883806dbefa7a8"],["tags/版权/index.html","d863c0e1445fdf4d34db1f7a000da022"],["tags/特性/index.html","472accdb2a59783fece9edd1305900af"],["tags/状态/index.html","8b14773214e12498d9b36362635122a5"],["tags/现实/index.html","c56fef85c692eb31c2ea5f593daf000c"],["tags/生活/index.html","4ae191f389177bdb074c053f0ff8f2b7"],["tags/电影/index.html","a369fab0a93b0da19346293973eab3fd"],["tags/画家/index.html","9a3cc35008ca864af8224f9c7f2d8ed1"],["tags/知识共享/index.html","6039c4d195a0d1338bdeeb478a962522"],["tags/矫情/index.html","23186ef02ac9d05a1fbaef121d1efcc5"],["tags/程序员/index.html","0f8f39e1f2cf2f210b065bc2d5c7b5e2"],["tags/穹之扉/index.html","99d9d0457014e6f520244a0cda126869"],["tags/穿搭/index.html","d9962c6697783aca527e3d30d8d8ad73"],["tags/童话/index.html","acb6c2167b70a68dad4ac8405722c03a"],["tags/笔记/index.html","1da4c7230a6cf74e3801d56cdf9f80c9"],["tags/算法/index.html","dda5dc053dc572c0c8f5a65d3f4d051d"],["tags/米花之味/index.html","664dfddf5a541949f44a764d8a287d9d"],["tags/缓存/index.html","91963f841e0d7fa1616fbd8a369e675b"],["tags/编程/index.html","b69c134d8c8167c772dd46e8240f46b4"],["tags/编译/index.html","19897814c7d5a8d4313858aefb716be6"],["tags/编辑器/index.html","427f5184de6614e3de217952956a6d0d"],["tags/网易/index.html","c905d6c94f81a62cb6159e88e9ea4eef"],["tags/脚本/index.html","b31e9b25a59bc52a9909c9a5455dcb05"],["tags/脚本语言/index.html","e47822ae4a1b8864434606f7cb971a3c"],["tags/虚拟摇杆/index.html","7bb207a1b19376e310c16cdb190bfb59"],["tags/蛋炒饭/index.html","a1b4c8b26b83ae06121425eeda108329"],["tags/表单/index.html","1bd514cc96edd94bba86b8e5836ff88d"],["tags/装饰器/index.html","149101f040e0b16aa89b8f84714bc169"],["tags/西安/index.html","53f04ab9dba9c7df50564f3c8ce9ad76"],["tags/计算机图形/index.html","b421176b31238586bd3b109a827ee241"],["tags/设计/index.html","b49c1ae54c2daf078649c784ae4e5cf5"],["tags/设计模式/index.html","2b7c94a794045ae99f5b4ea9f39c6907"],["tags/访问量/index.html","2016f39b02b65a96230115250cba99e6"],["tags/评论/index.html","f09896de546a2d216f95df88e0c5e721"],["tags/词云/index.html","34951db7f1077f02a0c1850afcf40139"],["tags/诗人/index.html","9684cedc4f955167294aaceca5ca6679"],["tags/语法/index.html","4ff3a447bd17da08ead249da5c5b1803"],["tags/请记住我/index.html","d56a36030dd48d2338376b37ea3bd2ed"],["tags/读书/index.html","96ecc868800684faf74c0393426bbb56"],["tags/读写分离/index.html","3edc252df59b2175128ee9f85e8a3a6f"],["tags/调试/index.html","0ee67ef9419578480aa517c412a3b724"],["tags/贝塞尔曲线/index.html","30b522cc6085dc36f9fd087bf7d685c3"],["tags/贪吃蛇/index.html","95e7d7c21d888bdccb20f8dabb197da2"],["tags/资源提取/index.html","864df88243b9b5661073c7411deef0d1"],["tags/跨域/index.html","3a8d4196b248b0dfa540d8b973e8d32a"],["tags/跨平台/index.html","f2d42e2aa64e38c7ba76c682daba8bfa"],["tags/转盘/index.html","59958d27001d3469a980d5fddf371512"],["tags/迁移/index.html","8f79f8dbf17f6b2defc25a9e1f567fa0"],["tags/通信/index.html","cef0018c85548407ae74c4e5e00ae2ea"],["tags/邪不压正/index.html","c10944c5088da0033c98470e5f834f0a"],["tags/部署/index.html","7957e714dd462158edfbae7019e16225"],["tags/配载/index.html","4d2c188921f5dc046428b97bcfc73277"],["tags/重试/index.html","3ea5ca0e72e7dffb20947a7e64c6e465"],["tags/长安/index.html","7ad73ebb2aca169b63f02ca459dfc56b"],["tags/长安十二时辰/index.html","debd0afaef607488932f66b221e0e76e"],["tags/阅读/index.html","4ae1689cb745e2677ca52fee52db43e1"],["tags/阿里/index.html","2bbe25e2b1ac9f8905f59ef59bb803aa"],["tags/随笔/index.html","d103c7502b2246900bb461c0a4416542"],["tags/霍金/index.html","506d58dbe2229392c441fadb4238c928"],["tags/青春/index.html","30a36465465901680b9caaa78af05083"],["tags/面试/index.html","efd98793fcf523b40c2d8fd1ec1aa18b"],["tags/韩寒/index.html","b274633c386bec94481c1f0f2694703e"],["tags/马尔克斯/index.html","8507df387d6e5a9d7ff7c78341813b1b"],["tags/验证/index.html","b980a59f6839d1f5d34cfd3537e7fdf5"],["tags/黑客/index.html","c527fed3c9f644ba0003c248062f25d4"],["wiki/index.html","9109397dda8f15954c3d4f1b4d658223"],["works/index.html","fbcbb76060aeb1adb1d7e8cb3e882605"]];
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







