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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","767759a1e35c3ac297a428c0893b7180"],["archives/2014/12/index.html","9aaaa737eb0f7b2b8620ef793924f6ff"],["archives/2014/index.html","06680fe7c5be508800c1e4ee68af51ab"],["archives/2015/01/index.html","16960830c929abd0a24305a52655e004"],["archives/2015/02/index.html","5513eabaf69b9988821bf7292c9eba93"],["archives/2015/03/index.html","736289493006d53d04256737e2153968"],["archives/2015/04/index.html","f05dbd6b5dfebbba9346761b1738a42a"],["archives/2015/05/index.html","2a0aef70494a5d07abd9916a44748720"],["archives/2015/06/index.html","47b83b3e2cac3718a0dff5aaa01e65a3"],["archives/2015/07/index.html","b73751082c74fbaa88d689aacf740514"],["archives/2015/08/index.html","1e7a0fbd9b91078a8f60bad11a1d5a37"],["archives/2015/09/index.html","0f4262e381f64731adc6ba46ef297cb5"],["archives/2015/10/index.html","297f807a9a8b0f034382bddc1b7f62b3"],["archives/2015/11/index.html","7743f5313b85504d40c07b956df9a602"],["archives/2015/12/index.html","f04410d0e57a3e2fbffd6ae30840a81b"],["archives/2015/index.html","6b9f17e5899b7bdc46bc6c43cc0bf556"],["archives/2015/pages/2/index.html","fb05d0b6bd143172a15fdee7c7372ada"],["archives/2015/pages/3/index.html","420af742d6f396e878dcd1171cf264c4"],["archives/2015/pages/4/index.html","270664f7dc7de9673191443b5a38de41"],["archives/2015/pages/5/index.html","6472dead7117bfdd11390ebd409d1629"],["archives/2015/pages/6/index.html","1eeca452a81461af62b325d066825d8c"],["archives/2016/01/index.html","c49f96652d2fa08f40747fd89842ee95"],["archives/2016/03/index.html","5486aad4b234fbbeb4954c4abdf44dab"],["archives/2016/05/index.html","b678fd4cdd76b61c794c5abeaff35516"],["archives/2016/06/index.html","9b46675b9a5b27294fe754bd11f78715"],["archives/2016/07/index.html","9e341aa864dc0f76de123ed09e730760"],["archives/2016/09/index.html","7a23239a33d1a334aeeba3009e95d1f1"],["archives/2016/10/index.html","972fb0609927f44855956e93a27a8b02"],["archives/2016/11/index.html","73678bdc5ac7bf74148ba6f0d805dbf6"],["archives/2016/index.html","3d8578db1eef9b1967a2807b4bf58bdd"],["archives/2016/pages/2/index.html","d228e74a8f7aa3f32c724cc5aace36cc"],["archives/2016/pages/3/index.html","b0939bdd30c0485bc0932ed481a57fde"],["archives/2017/02/index.html","ed6821210351a9a78de9bec335249121"],["archives/2017/03/index.html","1634c3870081361865e8bf124c8dc06d"],["archives/2017/04/index.html","6ede4327ea10e97c507e9b0e3f17e633"],["archives/2017/05/index.html","7c5a1fe8e1b9a6842ad636c6f263e4ab"],["archives/2017/07/index.html","06460b54ed0c915a2169029e836d0df5"],["archives/2017/08/index.html","dfa3d2aa27db458958d3478c0a61be50"],["archives/2017/09/index.html","0890440f947a51542465174e1d94a0d8"],["archives/2017/10/index.html","6c7558c661b409b6354fe2ece4df63c2"],["archives/2017/11/index.html","88179979677545a19a343ef3e2b876a2"],["archives/2017/12/index.html","6894cd36ca8fc165fa22ec4654df8420"],["archives/2017/index.html","191c84e5bd768f4f5347ec07762be165"],["archives/2017/pages/2/index.html","058ce2fd003ca9ccca9ee42227180db7"],["archives/2018/01/index.html","09d1eae20eace82116d6d48a6be805ac"],["archives/2018/02/index.html","5d2f28f23c3cea2bae6cf3d34f31190d"],["archives/2018/03/index.html","6ed8d034a56d4c9ca30232d943ce95a3"],["archives/2018/04/index.html","bf2f136f12a69c903ca193b9c2ca6dd0"],["archives/2018/05/index.html","460aba886bdf0bad2533ec41499f544d"],["archives/2018/06/index.html","4027b35cd8dc82e9e03e56f6f26021c1"],["archives/2018/07/index.html","7ba37ea376b4d91d57e94b8e684661c9"],["archives/2018/08/index.html","bae95e36e380981e38d391c00443f8d6"],["archives/2018/09/index.html","f289fec6d70f0a9e042f0348756f5632"],["archives/2018/10/index.html","a67a697c74b98b1e0adc6ddf732c369d"],["archives/2018/index.html","caec205b1bee55c0f83d9b058fb366c6"],["archives/2018/pages/2/index.html","73f9c6c311f66acc5cc8928d55d557f7"],["archives/2018/pages/3/index.html","71ceb38ec07f62e2fb15fa08a097d34d"],["archives/2018/pages/4/index.html","5d3edc8b20f6abda2d9cac34a101f56c"],["archives/2019/01/index.html","01816c21c84266369b937c65ac98e2f8"],["archives/2019/02/index.html","7b0b1eac763423e332533908f1055f95"],["archives/2019/03/index.html","2060996b353d1eb385954182cb3fdd05"],["archives/2019/04/index.html","090b9f0e92e24da43a07b62750f3aa98"],["archives/2019/05/index.html","e5d339043e72544b534bc09a4ff5655d"],["archives/2019/06/index.html","51c5cebb422012ed4d80f5a7562b9d82"],["archives/2019/07/index.html","3ac379145d353d9961a4f1a8d346f773"],["archives/2019/08/index.html","322a1dc97f51d2d74f11db3069332763"],["archives/2019/09/index.html","06403ad19678442baf0d2301f24effdc"],["archives/2019/10/index.html","94a4761a61a130fdc284da8994eed5fd"],["archives/2019/11/index.html","116e40ab335986571bfbb72c66ceb217"],["archives/2019/12/index.html","17a4d7ece7cd4da58fe05f6c91182e6d"],["archives/2019/index.html","8f543d6dd838e1f8c18d13f0ed50e5dd"],["archives/2019/pages/2/index.html","e1e1a7e932345f8d07f0f78046a18adb"],["archives/2019/pages/3/index.html","47d39d9d20f799adc9245d17e502c028"],["archives/2020/01/index.html","acdb75382a20997e1a39f89e55b8e34e"],["archives/2020/02/index.html","ae1ea0105e2a906dbda24e7281488656"],["archives/2020/index.html","443b795776642d55a0acdf32216f8d3d"],["archives/index.html","e815da3fb191429b6e5ae4b301996574"],["archives/pages/10/index.html","a5cc47856ae9e8a43a9dfbb7e49c8848"],["archives/pages/11/index.html","431f73837aa1ca683497575cd7f179d5"],["archives/pages/12/index.html","08a116518e310d34e665c5a09b65dd05"],["archives/pages/13/index.html","3555a7dc62901c349fc64937aa21790d"],["archives/pages/14/index.html","798470471d64d43e24412274e503b240"],["archives/pages/15/index.html","51370111a50205c2d372157a91af9825"],["archives/pages/16/index.html","0d12556ab5f7059addef35a7182773b9"],["archives/pages/2/index.html","5d087335247c87442f51e45ab6866a25"],["archives/pages/3/index.html","d4ed5e2c45cb69b8f6df2ca8828cb3c7"],["archives/pages/4/index.html","4216a857160f21f4acfca8df0718d18d"],["archives/pages/5/index.html","07cdf456c135a3aabc78d986988431f1"],["archives/pages/6/index.html","2a80ec0d1e3451b7ef35f8c211df5d74"],["archives/pages/7/index.html","9b9f9b4f2282444ff95cb6dba8c2106f"],["archives/pages/8/index.html","04b3d8e8f08cefbad59fe1c47a060a24"],["archives/pages/9/index.html","f1c8f71a88f62fa23a3de721985cddac"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","23a95e1d4b336b75d36f09c9d70f413b"],["categories/Unity3D/index.html","a52aa144e0c29767320ac4b78d08236b"],["categories/Unity3D/pages/2/index.html","00bf55c1535f55cb8213bff6fed1da3d"],["categories/index.html","1d6e0b90b601f46398560d7e6e668761"],["categories/人工智能/index.html","7c5a6e4e85808becc3ad07e6e9a01ca8"],["categories/前端开发/index.html","ea99a30cf3b7d1b598068e3437335cff"],["categories/单机游戏/index.html","689e735f47f8e23dd05cd4cdb923e7c8"],["categories/开发工具/index.html","b9bc220c906f12a1cd9e21bb45d4967a"],["categories/数据分析/index.html","0c16a930c17e744479b78b981808bb76"],["categories/数据存储/index.html","e9ec99637f53061d7949c214da75c959"],["categories/游戏开发/index.html","84823b67f930b7aae15f55a6151d15f8"],["categories/游戏开发/pages/2/index.html","9cd9689cdf10a4dcb1520a6ec13f9388"],["categories/游戏引擎/index.html","4d74668459f1b71f75c9a6ba7c09463f"],["categories/独立博客/index.html","d9fd1aeb2e1cb26b1b29f503d6c581bb"],["categories/生活感悟/index.html","e1e5ef43518648c15cefb742ef3bf6e9"],["categories/生活感悟/pages/2/index.html","272325129e1333ef7b0c849d7756ae0e"],["categories/生活感悟/pages/3/index.html","c31ed5ec4095064908541a748153f84a"],["categories/编程语言/index.html","f180d2ad825dc446e9f4d494223d3015"],["categories/编程语言/pages/2/index.html","6d7c47d8dfa7a6b0f4256907ae01b7f8"],["categories/编程语言/pages/3/index.html","018065b08c0753e7b927ebf829d922d0"],["categories/编程语言/pages/4/index.html","0344738f3ffa55c77da6e0cb731402ae"],["categories/编程语言/pages/5/index.html","654cdb50dad822129774dff19ef564e0"],["categories/读书笔记/index.html","34148ce26ea57b7ca456256e0d7836f4"],["categories/读书笔记/pages/2/index.html","d9fed27b572c7112c94fc805352ef988"],["index.html","398a69191d372b8d682eb2974af6885e"],["movies/index.html","957130d3e06693f353b005f93ae4b100"],["musics/index.html","c7f56957b95e9b3c5911759a1430adac"],["pages/10/index.html","bd09dad814172e38c1901c5ae7acec4e"],["pages/11/index.html","cc6abf1bfdc5c140601998a1d48760dc"],["pages/12/index.html","c26ff29cf00bb4782484f498b765770d"],["pages/13/index.html","5101e73660db8a0e1406ad3a73bb6a5f"],["pages/14/index.html","0e3f93c33108869123af893efc6a189a"],["pages/15/index.html","38f2b7cbdf2d3f34ae7f98708129ca17"],["pages/16/index.html","e86e47c42bc981db075994531a9bce69"],["pages/2/index.html","78db0ceaf1fe8ff711ab7055a11cc3e7"],["pages/3/index.html","b791cab6baa3a45b7f52d27ff2b2dda7"],["pages/4/index.html","b6f4e6510cfe7feb34dfebba814bdfcd"],["pages/5/index.html","92c41daf779c39de54dedaa830773ec3"],["pages/6/index.html","5b1bb58ce95c46359de45877c70588a5"],["pages/7/index.html","981d6d9e93e880dca8eda261592e2378"],["pages/8/index.html","7451670003c74c28406a84ddef78bc43"],["pages/9/index.html","0df5dfdba7e2cc0f863479da2c7bfd0b"],["posts/1059499448/index.html","ec446a88b44ff3dd693a902aa2a8af5f"],["posts/1071063696/index.html","77b82e707b64d065a18c7437e8fb67b0"],["posts/1082185388/index.html","6096749527e4dd09cac13fd118428faa"],["posts/1099762326/index.html","eef32e0edd0b3a81c20045caabc812fd"],["posts/1113828794/index.html","e94cf8d66a684ddbfe02cfdb5138b46e"],["posts/1118169753/index.html","bb6ae61533199f94bef665e19f11e492"],["posts/1122710277/index.html","a98ec03bb34f05404f6a7b3cb1a6632a"],["posts/1124152964/index.html","bd599261b2469cc4b5bb9e8633c19a73"],["posts/1127467740/index.html","58fefb0d89809ba4b7d9306e0b79e41b"],["posts/1150071886/index.html","31fe42191c6cfe9242aba23213219f21"],["posts/1150143610/index.html","2b1dc32b73062ebc01c144e9ba6a6985"],["posts/1152813120/index.html","e73fd5aec7b38b472dcf09c04ab793c1"],["posts/115524443/index.html","6532bca70ea3ca630022c9314e52d866"],["posts/1156673678/index.html","6cfcd8e37b02d2af7cb939e1bbd702d0"],["posts/1166840790/index.html","412dafbf7673743a5d7585bd1f8ffc9a"],["posts/116795088/index.html","bf6ee5438aef1277f64d8e290427aefe"],["posts/1176959868/index.html","09afe4f99ab273a8a51efbef5edb1ad6"],["posts/1190622881/index.html","d16ab1aecc9bb24502c8fb85f5a5a0fd"],["posts/123663202/index.html","5c9f213a51a65de959b4ed5ba3ab9340"],["posts/124807650/index.html","4f5f04c3be1133116c3cbef821796b35"],["posts/1254783039/index.html","5aa673ef14f2b4221a4a72010ef68e6b"],["posts/1320325685/index.html","7319de2b7d72f1251562f23f7418f4d2"],["posts/1329254441/index.html","428728196f0eec3943819b0c61dd2f78"],["posts/1357715684/index.html","8b9a79beb85efd3aff50e8c48dec6910"],["posts/1358971951/index.html","d9a0833668e405b5ada86abeee04b5c8"],["posts/1386017461/index.html","1ae62b4cd999e0862465823088418150"],["posts/1394521917/index.html","c1318ae48653d46c3b40fd0d0baf1e56"],["posts/1397717193/index.html","9014965f581a715636ed1e6e453f2b1e"],["posts/1417719502/index.html","44d9a53f014eaf68f6daea533c428914"],["posts/1424645834/index.html","4a7f00cf08ec9f02ae2ecc86598fa69d"],["posts/1444577573/index.html","fefa211b56382ef6ae7a868e7d678e01"],["posts/1467630055/index.html","2ac72c4358ceb5963110db292997bdc2"],["posts/1478979553/index.html","2658e4b6b2c1a886e98accd226a3aa64"],["posts/1540537013/index.html","87b09667024ad8fc904b38748897fb46"],["posts/166983157/index.html","008a98a87d44d821e33fc47e50995bc3"],["posts/1670305415/index.html","8327223d8e58912fa3dd061f26311b72"],["posts/1684318907/index.html","8c520000d4e7c9176da5d6bb7903a183"],["posts/169430744/index.html","b43f7bac47bf17230c69d8cf934a5e3f"],["posts/1700650235/index.html","8f879b2205d71362628e25dd09a4d853"],["posts/172426938/index.html","5db8c17ecef79cdde1ba910b56b0a729"],["posts/1836680899/index.html","10273cbc40bf4bfc4d93073bf8b9ddfc"],["posts/183718218/index.html","d12b12e17e52ecfe09e9998527a3a4f7"],["posts/187480982/index.html","bff5c978de020a2a36e33e0448d712f7"],["posts/1930050594/index.html","200d970dc3c9264ecda3f53c1fa075c8"],["posts/1933583281/index.html","227cbf7704c0f0202d7d9e395b976357"],["posts/1940333895/index.html","37c69376e4764daaf071282287293b61"],["posts/1960676615/index.html","9c8aa912d6e1d52f7d14e3563c60ffa6"],["posts/1983298072/index.html","2ade3ec700fe1596cf9b7f0c23d8f48d"],["posts/1989654282/index.html","4b70aa6f7c2f1018d0a4bacd05ef8dc6"],["posts/2015300310/index.html","aeee0b87513e0f2ffbd9df2e2af6a1a5"],["posts/2038378679/index.html","0398379208b43886ebcbc74132712382"],["posts/2041685704/index.html","95eddb2b1baa8c20ae7def45c6600d19"],["posts/21112647/index.html","eff5ebc5d5080df89dda50bc224eee4a"],["posts/2158696176/index.html","57d864ac092cbec24686b559383b2feb"],["posts/2171683728/index.html","ff58d8179cbaac55e1d9ad0415bb1882"],["posts/2186770732/index.html","c86493a512a33812905d8229e58e757b"],["posts/2275646954/index.html","73bb12c3e891a85f688ac1eae48d20b1"],["posts/2314414875/index.html","6fffc433f9e29915685cbc1653a0774a"],["posts/2318173297/index.html","179a963cf8ac4e18ecacf0afeaf194a7"],["posts/2418566449/index.html","93d7a2b8dcafd6e8ef7981877aca07a7"],["posts/2436573863/index.html","a5c1ac461261bfe9dd4dc5d632e36238"],["posts/2462008667/index.html","daf4575361ce6ebb20e664f2eafd11be"],["posts/2463121881/index.html","80d8f9fffbc819097725b8afe68f3ac9"],["posts/2527231326/index.html","e4f390b098259edab29a12bb869652c7"],["posts/2583252123/index.html","3eb436d160624b4a9e6aea23567eb00d"],["posts/2613006280/index.html","646d62ac896efa59cd196dd5f2c81d32"],["posts/2617501472/index.html","51c14b4c58b0fceb9a0842d1aaf0a6c4"],["posts/2676125676/index.html","f58f2a16b4d9c14833f5deb7054a944c"],["posts/2734896333/index.html","45f989f8a27ce9d13f679b1a4831b460"],["posts/2752169106/index.html","f5816e990ed90eeebf5859e07274846b"],["posts/2799263488/index.html","08a5a435941a6f2c1076f6a360584a25"],["posts/2805694118/index.html","63524735105cecc47a7dec94ff0bfde1"],["posts/2809571715/index.html","24cc53d3eaedfa4ab794aa6080fbfc1f"],["posts/2822230423/index.html","15bb5b42a50e74c4b0ef3a4d50cf1e8a"],["posts/2829333122/index.html","3590cf4bf26fc744c1b76a1c63ba4b78"],["posts/2911923212/index.html","cb4bd602ac77b29f27d926185e49ff25"],["posts/2941880815/index.html","d5cd8f045c7e3d92c60149cb6ce872ff"],["posts/2950334112/index.html","cae2e85d3eb4dcf2fa98b0be517dd13a"],["posts/2954591764/index.html","5c9388bcbb06c62e1255a9639df772d5"],["posts/3019914405/index.html","6feb70cb61f68e80dc1360bb4ea6254c"],["posts/3032366281/index.html","2a940578add7ff4321c5f38ec1e841b2"],["posts/3040357134/index.html","51f6209040fca919f566c94aece1a389"],["posts/305484621/index.html","5fcca60a8e64f82129e28f141537ffda"],["posts/3083474169/index.html","ad0487a02aaa057fa41c1dc96fb4f8f6"],["posts/3099575458/index.html","4b84ab9a25aaebc3261fe03b4349669e"],["posts/3111375079/index.html","dcdb1fa2ca175bf72989b34cbe201aaa"],["posts/3120185261/index.html","e415ec97ab43a506a7dd803350b0574d"],["posts/3131944018/index.html","40d26be0de6bb33db67ef26391157998"],["posts/316230277/index.html","1c57353b7f169945953610ed0c61cc97"],["posts/3175881014/index.html","188c5c107617fba60f69f4d86bf64c95"],["posts/3222622531/index.html","48e6951feabd116faf893029b8be9d1b"],["posts/3247186509/index.html","cf65a2e598d0a7eb9b86c68546a9119f"],["posts/3269605707/index.html","2900673c170915eba63d7fa5f6b62d0f"],["posts/3291578070/index.html","d2f8e91f6127af907db0c305a2a09235"],["posts/331752533/index.html","d56dc1f8f2f7a742f5d02343b19b8894"],["posts/3321992673/index.html","b6e636c2ee4c84d88fbe6e8257b3653e"],["posts/335366821/index.html","580e0967bf0692dd85090bcc2fc8e6a2"],["posts/3356910090/index.html","45532cd2ae4cfa6ceee44061002ab4b8"],["posts/337943766/index.html","46072a912b7dfdc270d3a76eb1f15680"],["posts/3417652955/index.html","77f1daea45c7879e9b47954b461b0e04"],["posts/3444626340/index.html","c5ef721e05cb5a8dafd4dbfd0c62dcb3"],["posts/3449402269/index.html","057495da4ae5db9931310fa4cdd0cfd3"],["posts/345410188/index.html","15caace0454b0cf323cae490e1409138"],["posts/3461518355/index.html","dd3c8b4a151fdb81aa2c8518e6ba953a"],["posts/3494408209/index.html","f046a7071d6ba310b233da5a127f23a9"],["posts/352037321/index.html","1a08c401374d20dc5f0f654d46909a94"],["posts/3521618732/index.html","e1513ce79800abae4c6713d0a8ca09e8"],["posts/3568552646/index.html","5cd242abf9f7e8340f5f470160ee2de0"],["posts/3603924376/index.html","0347be5043a3d869410e4be94479ce21"],["posts/3637847962/index.html","5a47340560812742afcb1126166f8df3"],["posts/3642630198/index.html","6a50c5cc1390e5190ffabe9b6b30f4ce"],["posts/3653662258/index.html","0ec823d6039db178d26216dd7fb6970d"],["posts/3653716295/index.html","d094c71c29b36a0f6611ca914a9b6f03"],["posts/3657008967/index.html","b83aa7e900a607813e482bcbe60737ff"],["posts/3668933172/index.html","b161e051ce125d7fe287d7a76f1d0746"],["posts/3677280829/index.html","d98d61764aa0b591da8909b13e29ee35"],["posts/369095810/index.html","1ec373d76d14178ef5cd2a85cfac1d75"],["posts/3695777215/index.html","1df424b6fbf43b3de2fa07080555fc75"],["posts/3736599391/index.html","240ce136ff5a948b2f89a603e87300af"],["posts/3742212493/index.html","8ed12ec2248da9b9c956db4a2350695c"],["posts/3782208845/index.html","e0a606f0465d574a75099e56095acc1d"],["posts/3789971938/index.html","b43c6fc42de1e12839a9ccd3deb04cb5"],["posts/380519286/index.html","76796ec70158d550d6df20c408013bb5"],["posts/3846545990/index.html","e88438e039c9b013c2f55b051ccac5f6"],["posts/3873710624/index.html","1e224013e1b40bb84dc88a14b1514980"],["posts/3959327595/index.html","7e2030e4588ff920b0ecce6e2ae1a089"],["posts/3972610476/index.html","19d56968844f73f93890c55b670126d9"],["posts/3995512051/index.html","766d91e867d565f6d30dccf236652095"],["posts/4088452183/index.html","9fde9f2940acb895e150f5217e9d98ff"],["posts/4116164325/index.html","b913c3ecb504766f1bfc9a5fb2373dd1"],["posts/4158690468/index.html","a4d0e33a3759601438bc13832d00969c"],["posts/4159187524/index.html","f001d2bf7a28a3b881dae1e4e5531cba"],["posts/4197961431/index.html","43f453dbf363b77d1da3ab54b592b5e7"],["posts/4205536912/index.html","11fbece2aca163cfa947ab964445bcb2"],["posts/4236649/index.html","5ec36cddc35d4aa2b38774423cba7b24"],["posts/426338252/index.html","87765433a612a601a6f78c306de71fe5"],["posts/450254281/index.html","d42061bcf525cafc076b5f3bc7e70b50"],["posts/4891372/index.html","0ceb0f0f210631f6b04fc1c70fab513b"],["posts/569337285/index.html","d1fb74e46c3d145beb70ace700af3877"],["posts/570137885/index.html","8993b39bce05dc3c194aa3b31a76b1ad"],["posts/570888918/index.html","de0aa1e73cc5f99adb1c451c9cd533ca"],["posts/582264328/index.html","0d5473f7c20934d4c29cfc33bfb18463"],["posts/632291273/index.html","ee637f5625fd9b07fe5faaeb0f294e3d"],["posts/70687890/index.html","75b9069391f76474ecbb6ac9930227a3"],["posts/719322223/index.html","3181d355c8ba1b96fd1eb682cf025aa8"],["posts/720539850/index.html","3932349414358931c36c3299edeceedc"],["posts/786195243/index.html","bd140f1949b1d335d86ef927227539d5"],["posts/795474045/index.html","db89980843b67a0377021faf184d89ef"],["posts/815861661/index.html","b80e596635c5153f29d3fa211cc2418e"],["posts/821259985/index.html","f34118c67ed112f6c9383b7f6a99028f"],["posts/828223375/index.html","b796ed2de25ac4080076542ce4ce4c84"],["posts/887585917/index.html","08b63f5b29631f9222df445008486aeb"],["posts/888549816/index.html","56fae35924f3b9e95fd73aa980280d45"],["posts/906436376/index.html","cda31c8e7b9bf8ca898ed063cc109390"],["posts/907824546/index.html","1b35ad6d9e2d700cd65446d5e13bc46e"],["posts/927393529/index.html","acc01f2b42081e3adee4cf50c0097151"],["posts/94443781/index.html","963c188199fb8d6ebedbd5c77254fc07"],["tags/2014/index.html","ab3a25f944991a41f54279711ed88d5c"],["tags/2019/index.html","84be2bc38805bda48896dded09b7881e"],["tags/AI/index.html","08ebd1717d668df4c41d5193aa5fbf57"],["tags/AOP/index.html","ab8c3cfefa96ccd9149ad7ef9d0eaed3"],["tags/AR/index.html","0c36194c91a99cd896c1b7a499d09692"],["tags/AssetBundle/index.html","bff814b9540d31261826053947d78ca4"],["tags/C/index.html","0916939eb184ad5a6840836045261e09"],["tags/CDN/index.html","6b0dddb0a9f792a57b02c9eb2e100b99"],["tags/CG/index.html","ce89c0feaa7b151d702389e4b86b8df2"],["tags/CI/index.html","68cbcd481681d95f61054a9209dadda2"],["tags/CORS/index.html","30903ab6470be0409c6083a1da34f7e3"],["tags/CSharp/index.html","fcffbbda9295b2db45c0c3e727a43ed8"],["tags/Castle/index.html","7528c0dbd368873c3ef8d277dc1d8f21"],["tags/DBeaver/index.html","d074b4dfd51bcaa23c0474d3b00ac874"],["tags/Docker/index.html","3e11911cccb117ccd8472165cba34362"],["tags/Dynamic-Proxy/index.html","586d9642a4e2b7baf93eb06f96858193"],["tags/Dynamic-WebApi/index.html","45e445e622470bddf7539d52a097a80a"],["tags/EF/index.html","2a2f943c1c2c08c6312ef87136ef571d"],["tags/ES6/index.html","f9bad0371e15826d350d3280938786ae"],["tags/EasyAR/index.html","345d4fe4ed9ed3ad8b401777a25e190e"],["tags/Excel/index.html","26f147bfcc68f443257268fa152651bf"],["tags/FP/index.html","e48bbe77f20f364c2312ae79531b883e"],["tags/Form/index.html","e45fff420a5fe21256874962f6190a93"],["tags/Git/index.html","3f19aee43e0dcfdb91032b272eaceaac"],["tags/Github/index.html","26a5e07384a9715bc482ae57615ad68f"],["tags/HTML5/index.html","6047983c71253387f91d12581ef59b05"],["tags/HTTP/index.html","2301686605802a6da9bd716f53ffb6c6"],["tags/Hangfire/index.html","a56e899c9db1b9cf761b5f171ac92bf3"],["tags/Hexo/index.html","dba6bb93d9fc763d5f1414859c0609f6"],["tags/HttpClient/index.html","5730360fecfed2598c9d88643397fc60"],["tags/Hyperlog/index.html","cd1dc1eeb942ee4ed91eaee26e22a2a0"],["tags/IDE/index.html","fc5d59237977d6fc4cde4b8d9ced7a57"],["tags/JS/index.html","d8663726fd9edfe59f45a0cf1dde24a7"],["tags/JSON/index.html","d0b06ab8e0d2d2c8d28ded7f7e969b03"],["tags/JSONP/index.html","10b7786fe395e57f67789f89e7532a72"],["tags/Java/index.html","193b0ce0fec6f5b8002a5b9ffee01f23"],["tags/JavaScript/index.html","4d6714c972cf01cbacdeabf00d0cc945"],["tags/Jexus/index.html","51088c0500cf49ae9c446fe90b1c802c"],["tags/Kindle/index.html","d2963fb2be6e3611b0408af829104d0d"],["tags/Lambda/index.html","6bebbe64cab2774485717c44889515fb"],["tags/Linux/index.html","9bdbbb6b88646472a7cc252b7f2640ca"],["tags/Liquid/index.html","2f7b5afd61c703ba09fc6364165a02ca"],["tags/Logger/index.html","ed9fb6e90416eaa89fcc9f3de796833c"],["tags/Love2D/index.html","b11d6830ab3c0c6908b76220b596db98"],["tags/Lua/index.html","8435b60d549c3499171a626ac365ffed"],["tags/MMD/index.html","715e1f3ad2703e682437390912f8a476"],["tags/MSBuild/index.html","aab97440e468afe467c1bbc192373698"],["tags/MVC/index.html","1f6c53e30d60e2944187e923ca7fa18f"],["tags/MVVM/index.html","a6cf0c249b801c4116457817755a8110"],["tags/MapReduce/index.html","fdf84559544fb60544b0def96a1ca0ad"],["tags/Markdown/index.html","be247e40902446a012abde8afa89e3c3"],["tags/Mecanim/index.html","161ce25765dca5b5a8446dfa777ea215"],["tags/Mono/index.html","360c0ae30413e64a8150ce68844e4730"],["tags/NET-Core/index.html","b109bf47a5f7508941edd6ce27c277e4"],["tags/NET/index.html","e531ea95e0ac500cf9657523df451343"],["tags/Nginx/index.html","43ff2068759137c65e41cfea78e56a3a"],["tags/OBJ/index.html","f4e71360736bad8ab795e28f9fb16705"],["tags/Oracle/index.html","a33b12db3c98b62e01b7442ccb491683"],["tags/PL-SQL/index.html","38c65338ee04273374edcd79499e1d48"],["tags/POCOController/index.html","0fe84334bf5b2228e101539e69b4155e"],["tags/PWA/index.html","f709e559c2be56617d023d33e63a3de4"],["tags/Python/index.html","9b12dd58a6b730a7b226516793d893de"],["tags/RESTful/index.html","a5c5ebe2e96f8dbb7628e8c90002873b"],["tags/RFC/index.html","a96ba98c137cea8ab565f718447621a8"],["tags/RPG/index.html","ba07ad1b778ecbe27be7840745777208"],["tags/RSETful/index.html","5b89240b2f82944069e2a9374a0bf1b5"],["tags/React/index.html","d4191db7240506097bf36a7f37a53fb2"],["tags/Redis/index.html","5e20a33defebec479ac4b4fa1034eba2"],["tags/Referrer/index.html","763546e3b190d27a81bf1f7ba373ce46"],["tags/SDL/index.html","caf55ed69cc8921074fc6ab5aef23008"],["tags/SQLite/index.html","2885d481611e3fc180e7ccabaa86426c"],["tags/SSE/index.html","b1e021c0e2f5449aa375ff0acab3a9dc"],["tags/SVN/index.html","14c39a4f30be534304c1265ac4b947a1"],["tags/Script/index.html","0bcfe16c7117f0972cede69dd81ac20d"],["tags/Server酱/index.html","227193698e2a0f99144243b9a43dd9b8"],["tags/Shader/index.html","85f1e05a428286fa38336d91a01a7a97"],["tags/SignalR/index.html","e34594d60382ffdbb302029401f9dd41"],["tags/Socket/index.html","afa759906eacb82ef253449307b3cfbf"],["tags/Sonar/index.html","bf42f24570e92a5b6d0e9c719e00db97"],["tags/SourceTree/index.html","b61b37ce2a7b9d22adfa4d6978d3e7e8"],["tags/Sublime/index.html","0921835932609461a19dbbd4b5a559fa"],["tags/Swagger/index.html","1dd90fdfe9d31abaae0fc9be928a4268"],["tags/Trace/index.html","7fcebc983a80f12c208bbc8fe6ada7f4"],["tags/Travis/index.html","97a6c347e3ef7778b3913599cd2a9a4a"],["tags/Unity/index.html","27a67b0e7c0e602306543747d0f3d3f4"],["tags/Unity3D/index.html","c3c2823357b75558d8162581e0f2dbfc"],["tags/Unity3D/pages/2/index.html","c3758fb6dbe22dcf394e86f2736e01d1"],["tags/Unity3D/pages/3/index.html","90401ab69c362c605880f06150e787bc"],["tags/VSCode/index.html","b422c5cdb9746ed018c6dc26693d43ab"],["tags/Valine/index.html","6a350851bf97790d2f5fbab4b889b878"],["tags/Visual-Studio/index.html","c33dd4d5482e9aaff6fc970e38d887dd"],["tags/Vue/index.html","53e895150b4f3ca48f26e709ad3eb49d"],["tags/WSL/index.html","03bfa7b33bd286a04fdcf606cbbc82f1"],["tags/Web-API/index.html","3f8f5d190c46fb41dc6fc6090cbd8cf2"],["tags/Web/index.html","0c1b76c2d6b396cbe5580a905e5a54b2"],["tags/WebApi/index.html","2573fff536cf360a9b8c91583131dc4a"],["tags/WebSocket/index.html","cce5925eabfa835d8deaf5278610506f"],["tags/Wechat/index.html","7ef7bae22c0e3408337d86bc9d78858c"],["tags/Windows/index.html","708b0215ecccefa73ed53a9fc1fccd17"],["tags/disunity/index.html","309a2730f005b2479cfa5630e881f23a"],["tags/index.html","84a1153996f8af248ac5da63a5b070d5"],["tags/matplotlib/index.html","b277abfc7cdb11d5bbd71216a6b79101"],["tags/njsDelivr/index.html","a6985eb82294cdbed696bed688d1e061"],["tags/uGUI/index.html","2887e6b7d740b871931e2880269aa0e4"],["tags/zTree/index.html","85d84a926395f7f0f57a77c16b19c080"],["tags/一出好戏/index.html","d685c0fb37ab7ecce54a3a83f9ea88a9"],["tags/七牛/index.html","0ec83b9733f06f632ea3031ff620aa43"],["tags/主从复制/index.html","932f01a0e1dd9cdd0c507e5873c438c2"],["tags/事件/index.html","22d0aba29e31f17b20945c6953782398"],["tags/二维码/index.html","b98bce3a48ceaebc980c0e59111adead"],["tags/云音乐/index.html","9c815b787ead8b62645ef310ab8431d1"],["tags/互联网/index.html","1e9a6d2843c6b4fe59f974f8e8933d56"],["tags/亲情/index.html","b4c416b38b1df482314880f4d5c40663"],["tags/人文/index.html","e3ca8d208b8af78292a1b951807a4620"],["tags/人生/index.html","48f5a045b9ee8f5b35d039a98f92c85c"],["tags/仙剑奇侠传/index.html","1d80a1b1255037d3b6bc2cecffe14907"],["tags/价值/index.html","faf529a4fa261aea791f213544f19df4"],["tags/优化/index.html","81321d3c76b56a48d1172e10fb01fb51"],["tags/全智贤/index.html","27fb645df3f803016c4cf765ea477705"],["tags/公众号/index.html","62b9868167262fb7768e96471c28c93c"],["tags/关卡系统/index.html","3ea77e537814c71abc8685dd9ef40d8a"],["tags/函数式编程/index.html","61eed059e977d0811db520336320d930"],["tags/别离/index.html","dc66882d866e33c292dd038f88841a01"],["tags/前任/index.html","fe992e069f04919264bd3e816f842e7a"],["tags/前端/index.html","15067cb672b59f05bd04c5c9972840b9"],["tags/剑指Offer/index.html","5556314e5e732ce09e02d2c0ccc3f1fd"],["tags/加密/index.html","f6da5f8d2bd46489f67c303fb918d59e"],["tags/动态代理/index.html","1c98744a3e3ba2fddfa74e9030e5fadc"],["tags/动态加载/index.html","1266ed57de105198de539e0328d88399"],["tags/动画/index.html","ed72e3ba1b6c589ca06ff876603aa3cf"],["tags/单位/index.html","c79c33874763e2ca59fbb818544d559f"],["tags/单机游戏/index.html","b5fa7f259aa19fcf09db80ecc20233ec"],["tags/印度/index.html","ae30611c8a2a3c9f0b978ccf0ccae7a3"],["tags/历史/index.html","c903bddf428dc25b46d5de5316300cf3"],["tags/反编译/index.html","102dfd249044d81f979ad82cb26a1478"],["tags/同步/index.html","6af37f27c8512c7790e8775a7de8b3bd"],["tags/后端/index.html","8584d02ae28597f4481d295d065d5a12"],["tags/命令/index.html","54e786ec4fdfc44b5863f3adfc963602"],["tags/和平/index.html","392098dc7749267eaf4efa583cae4f2c"],["tags/响应式/index.html","e5e19d407448c9d3ef9656c7330ad159"],["tags/哲学/index.html","ef3cec0072add31a08df14bdcaede461"],["tags/回家/index.html","3ebc9c47bf93281a2eae517619bf666b"],["tags/回忆/index.html","26da0a6ba1f41ae322618cef47fc5810"],["tags/回顾/index.html","f806e18eabbf75d64b0d9d7c6fc000d6"],["tags/回首/index.html","573aa01d89b3dbb962d611d3eefb7379"],["tags/图床/index.html","992190dc32178723c29fa226ed9c5477"],["tags/图形/index.html","8ba5a9db54bf0c8ff1153a194f1ffe08"],["tags/地图/index.html","fc5b2f351922198c9fb94f4fc6806a6e"],["tags/塔防/index.html","bf29b5ef78dc344a2ec1c516cf7d8e63"],["tags/增强现实/index.html","4ea4e68c372cc139e65b4479bf42a5ea"],["tags/壁纸/index.html","b0a61b5008e36bcb75f652b22e5374d1"],["tags/夏目漱石/index.html","464aadf2ffe66aec391f94518bc736a1"],["tags/多线程/index.html","7a1e6007ee91aae58ade4ec2245c5105"],["tags/大护法/index.html","e1af67fe6c867b564e6459b653de003e"],["tags/委托/index.html","57872b9458e80c6e4627b8f09236e9c3"],["tags/孤独/index.html","d5e412194379cf4de89ecc31d9bcc5b3"],["tags/展望/index.html","e096776045a77239be66f0e2c62711ca"],["tags/工作/index.html","cd3013c5d039d8925fde618ab794be62"],["tags/平凡/index.html","c93d39ba39cb26d7237e5c35a041dfb3"],["tags/年华/index.html","1e9c113169b3a9c828ccb800715a254e"],["tags/年度/index.html","ed222dd955d8300a55f4431ee9eebe74"],["tags/开源/index.html","5d4ae8c4568b4a4cc14d5e2e94e8de5e"],["tags/异常/index.html","39a643bb2e553d3b218f335797e8310a"],["tags/异步/index.html","8be1fb3929063598a64e5826b146d6ea"],["tags/引擎/index.html","1dc63c1722fea44a55cb02e1b1c631c6"],["tags/影评/index.html","29dfa06fd8049fd88ebe831a64368c41"],["tags/微信/index.html","6861457ce993bb5beca581916d93013f"],["tags/微博/index.html","9a098f18464e931692758abc26e3c515"],["tags/心情/index.html","0a2a2213f6dc28541e66ea778341316c"],["tags/思维/index.html","2af228c6ba71424e4bb97b422cbf4d8a"],["tags/总结/index.html","c3cd3507494fcb0af36bd5369cdee818"],["tags/想法/index.html","66d2248c08e526efef3f91e6793520d3"],["tags/感悟/index.html","c4370626ed51b793aa4d37a07523ea6d"],["tags/成长/index.html","7d09327dc8e4928ca1e2f240766b05cc"],["tags/我是猫/index.html","cd87dfad059bf93f1bdce3a615406897"],["tags/扩展/index.html","444c00f94052489d6fd38f6fec8feb6c"],["tags/扩展方法/index.html","ec7003b7a494811a358e871fc8f11085"],["tags/技术/index.html","1a0bd21aed15bbb9bc38e97a18c9d697"],["tags/拖拽/index.html","824c64118861c66efd051df34e9cbca3"],["tags/插件/index.html","c808eb275f91490ffdad833d98c45b1b"],["tags/插件化/index.html","73a7dc10833015fdf22c6b13b8565dbd"],["tags/数字/index.html","81f0f5d2d269884a19958b5dee2ce60e"],["tags/数学/index.html","0f68e154ead01c8b1918609d0633ea6a"],["tags/数据/index.html","e5ce1702a0d8052f64df4b5b024674ad"],["tags/数据交换/index.html","c63601638ec37269bb00151b24de89a9"],["tags/数据库/index.html","c09f86e3952bd25063046c69903077d7"],["tags/文本分类/index.html","a09aeeea8c307c5a2f18c3d405135859"],["tags/无问西东/index.html","ab899cea7e7117332c0d0990145f9405"],["tags/日剧/index.html","798eac7f5335ef31223454a84c4052cd"],["tags/日志/index.html","41c7397d849e8b47f27e58eb18088707"],["tags/日本文学/index.html","c649eccec6628f545894cab74cee2771"],["tags/时区/index.html","ca198efdd3ad46ca00caec4d58f00597"],["tags/时间/index.html","e86037d1ddc0cc1ddd20583d8631bb2c"],["tags/服务器/index.html","8fa5fde4b99a5b6dd365af029fefd634"],["tags/朝圣/index.html","9a180ed985850aed0da0843901ae3237"],["tags/朴素贝叶斯/index.html","41ee7aa93ab8ff97240376a234eb38b2"],["tags/架构/index.html","0784c56dabe1e6b19f7259e85fa213c4"],["tags/标注/index.html","f81ed70640d315fba1da038feddf52fd"],["tags/校验/index.html","1c7096beeae52a7d27e983237efa8220"],["tags/格式/index.html","c2a2c6c1969a217cfd394f2e42c73801"],["tags/格式化/index.html","a80481bfaf636a86bf44109dacfcb569"],["tags/桌面/index.html","6e2a1819dcd81c9ab46ea0d11d49b6ad"],["tags/梦想/index.html","28b2746fc9c48fcb28a431637ab714c1"],["tags/概率/index.html","679e1de396d3e3bfc8c199261d1df6eb"],["tags/模板/index.html","7a57df038d1fe417829215bc9fef97b3"],["tags/模板引擎/index.html","a46f35dd6829d899da946de2ce1a0425"],["tags/毕业/index.html","e25edde71cd8e1d8ed8a4da7c3a70b51"],["tags/毕业季/index.html","83b46c8d73cb41f9e57e1eb49459b4c3"],["tags/消息/index.html","e021fbf3cf3d12075f6162e859c7ccac"],["tags/游戏/index.html","1f7b1d4e1eb0ab735adc39c47428ff4b"],["tags/游戏/pages/2/index.html","b4a55bb07aa503138d5c2d850e3e444d"],["tags/游戏开发/index.html","95127c57d225eb0d0261c363780682fe"],["tags/游戏引擎/index.html","9be4eaf015cf506ec89412f704b29331"],["tags/爱情/index.html","561eee68f1d665e2b64a133b220d1f9f"],["tags/版本控制/index.html","eef2f6ca47963860173f8e47eccab5a2"],["tags/版权/index.html","1a7b84a23481d164ed08d550703500e2"],["tags/特性/index.html","d605beca46545c37945cb99d3649d398"],["tags/状态/index.html","9d451a57693b42794ebe71b6bba6e8b0"],["tags/现实/index.html","3368177d86480a9c76959eeb5b4cc338"],["tags/生活/index.html","2ef16ea7a412b679325c2413bbfcc52b"],["tags/电影/index.html","101d63bedb972b6e8c0415e783172c9f"],["tags/画家/index.html","6bd721c801c69e8912d052cb47986714"],["tags/知识共享/index.html","f414fe6bfe37d2e632b9f60f7fc5a5b6"],["tags/矫情/index.html","7522e7d0c749e3c69d2cdcf3b60d8728"],["tags/程序员/index.html","d3bc1638fe7d897d3aa79b336fbbabec"],["tags/穹之扉/index.html","06865f074fc1be3df06994ff56aee907"],["tags/穿搭/index.html","827827eb74da70608f242c460e16ac1a"],["tags/童话/index.html","763f3fa8527679240939ec713a0a85b5"],["tags/笔记/index.html","6d4f81e51e129e63d2fe4243390c2e8f"],["tags/算法/index.html","472043b465ceb108f9ecd8ee651665df"],["tags/米花之味/index.html","529fd00bc26f4b0d34d238b6ea28643f"],["tags/缓存/index.html","a1f5571f95a420643f1e8276e97db53f"],["tags/编程/index.html","4b53f693342640c5298e5dc96f891728"],["tags/编译/index.html","f98f30facc5163a6798caecbb622e956"],["tags/编辑器/index.html","289d1020e22592b8c38150fa30cace11"],["tags/网易/index.html","e903caa4b9a2479356dbd5ad60874bb9"],["tags/脚本/index.html","306d153e0a6d8ac2b253d28ce7d41993"],["tags/脚本语言/index.html","57ba1f4565ab98778817d27e0f3045fe"],["tags/虚拟摇杆/index.html","66a81733c4025f83f68933094d2c066e"],["tags/蛋炒饭/index.html","d2b6571e3774158318bf8250085adcdc"],["tags/表单/index.html","9f9daba27c00dbd7e9a7f95300f74728"],["tags/装饰器/index.html","0826cd3f22cd785037d9b4c9ec406517"],["tags/西安/index.html","dedaf8dbacf564679d3b8eaa73b03fd1"],["tags/计算机图形/index.html","ae893d228b153d49f12067fa88281d15"],["tags/设计/index.html","5b37a075a6ae1df8701a6b28426785e1"],["tags/设计模式/index.html","bf3566652ee3f890a6149b61c22e509a"],["tags/访问量/index.html","f12cb2af7a7a734125647311108676bc"],["tags/评论/index.html","3fc1267a25c19763d924beea88020659"],["tags/词云/index.html","8d0ca7c3f50d08647f62caa05bc86914"],["tags/诗人/index.html","9b2a6c80fd88ce46c41686bcd35766a0"],["tags/语法/index.html","ecde8c37bf22a2039df28a8238211f94"],["tags/请记住我/index.html","b6e50891daa9a5b9033b4be688130834"],["tags/读书/index.html","0ab29d19aa9197c3cd9dffbb6a30b9a9"],["tags/读写分离/index.html","4413a092a28ec20a368c928de5ecc611"],["tags/调试/index.html","f7a9812f7c8a47bbc33d1cbaa48090fe"],["tags/贝塞尔曲线/index.html","d6ed6633848b62fb758a91dc2f72fd56"],["tags/贪吃蛇/index.html","00b3361eff0cdb78cf6c726a8af76a9b"],["tags/资源提取/index.html","29c75696fa9d31733dedcf20b7f1cc7d"],["tags/跨域/index.html","4b714b0c6b779db0a87642455f3095b5"],["tags/跨平台/index.html","51b978626a9d22a132ca882014efa31c"],["tags/转盘/index.html","8b41622fcadd846d4a4bafdb6d51ccf0"],["tags/迁移/index.html","c2e8648d060067d7bcc07ba6b8bcfa8e"],["tags/通信/index.html","e7f1ae3b86a25b60740555fb8bc25a35"],["tags/邪不压正/index.html","c08ba2afe38891f9ca2467e20c5ed1e6"],["tags/部署/index.html","9ad903620c99be2c61c80ae29f1a0604"],["tags/配载/index.html","db18fa0cdcafeaea1df0f744970532bc"],["tags/重试/index.html","2b94deac9e0644211e15b54743d4ec09"],["tags/长安/index.html","364d3003ddc82dfeba11e4124294e8d1"],["tags/长安十二时辰/index.html","6369ad0c1912df73dc758eb92cde5a74"],["tags/阅读/index.html","d958d3c24727f44f10d3a7512fa29330"],["tags/阿里/index.html","86c618ac811584310434c2c492284883"],["tags/随笔/index.html","726f43d21e607b0e7daee95da89ac0a3"],["tags/霍金/index.html","cf79eb7e7002547d4365085d87ef03a7"],["tags/青春/index.html","652839ce38d15f9c624826c08fe0389b"],["tags/面试/index.html","911678e1e7e4b9491f6ee8a7cbae7e42"],["tags/韩寒/index.html","78c69b1cba5100c772f63eda13e50ff1"],["tags/马尔克斯/index.html","61239f96afc55a2bf396ba399df45451"],["tags/验证/index.html","6f84c37dc5ea16fc64244378867dd0ea"],["tags/黑客/index.html","06fbac7156d6ec0e75cc5b9500886902"],["wiki/index.html","e51fa06fc6f9accff0a9b764dd2ce3a7"],["works/index.html","fbcbb76060aeb1adb1d7e8cb3e882605"]];
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







