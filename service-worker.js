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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","32e4d5e5e093ad7077d25d762897230d"],["archives/2014/12/index.html","9aaaa737eb0f7b2b8620ef793924f6ff"],["archives/2014/index.html","06680fe7c5be508800c1e4ee68af51ab"],["archives/2015/01/index.html","16960830c929abd0a24305a52655e004"],["archives/2015/02/index.html","5513eabaf69b9988821bf7292c9eba93"],["archives/2015/03/index.html","736289493006d53d04256737e2153968"],["archives/2015/04/index.html","f05dbd6b5dfebbba9346761b1738a42a"],["archives/2015/05/index.html","2a0aef70494a5d07abd9916a44748720"],["archives/2015/06/index.html","47b83b3e2cac3718a0dff5aaa01e65a3"],["archives/2015/07/index.html","b73751082c74fbaa88d689aacf740514"],["archives/2015/08/index.html","1e7a0fbd9b91078a8f60bad11a1d5a37"],["archives/2015/09/index.html","0f4262e381f64731adc6ba46ef297cb5"],["archives/2015/10/index.html","297f807a9a8b0f034382bddc1b7f62b3"],["archives/2015/11/index.html","7743f5313b85504d40c07b956df9a602"],["archives/2015/12/index.html","f04410d0e57a3e2fbffd6ae30840a81b"],["archives/2015/index.html","6b9f17e5899b7bdc46bc6c43cc0bf556"],["archives/2015/pages/2/index.html","fb05d0b6bd143172a15fdee7c7372ada"],["archives/2015/pages/3/index.html","420af742d6f396e878dcd1171cf264c4"],["archives/2015/pages/4/index.html","270664f7dc7de9673191443b5a38de41"],["archives/2015/pages/5/index.html","6472dead7117bfdd11390ebd409d1629"],["archives/2015/pages/6/index.html","1eeca452a81461af62b325d066825d8c"],["archives/2016/01/index.html","c49f96652d2fa08f40747fd89842ee95"],["archives/2016/03/index.html","5486aad4b234fbbeb4954c4abdf44dab"],["archives/2016/05/index.html","b678fd4cdd76b61c794c5abeaff35516"],["archives/2016/06/index.html","9b46675b9a5b27294fe754bd11f78715"],["archives/2016/07/index.html","9e341aa864dc0f76de123ed09e730760"],["archives/2016/09/index.html","7a23239a33d1a334aeeba3009e95d1f1"],["archives/2016/10/index.html","972fb0609927f44855956e93a27a8b02"],["archives/2016/11/index.html","73678bdc5ac7bf74148ba6f0d805dbf6"],["archives/2016/index.html","3d8578db1eef9b1967a2807b4bf58bdd"],["archives/2016/pages/2/index.html","d228e74a8f7aa3f32c724cc5aace36cc"],["archives/2016/pages/3/index.html","b0939bdd30c0485bc0932ed481a57fde"],["archives/2017/02/index.html","ed6821210351a9a78de9bec335249121"],["archives/2017/03/index.html","1634c3870081361865e8bf124c8dc06d"],["archives/2017/04/index.html","6ede4327ea10e97c507e9b0e3f17e633"],["archives/2017/05/index.html","7c5a1fe8e1b9a6842ad636c6f263e4ab"],["archives/2017/07/index.html","06460b54ed0c915a2169029e836d0df5"],["archives/2017/08/index.html","dfa3d2aa27db458958d3478c0a61be50"],["archives/2017/09/index.html","0890440f947a51542465174e1d94a0d8"],["archives/2017/10/index.html","6c7558c661b409b6354fe2ece4df63c2"],["archives/2017/11/index.html","88179979677545a19a343ef3e2b876a2"],["archives/2017/12/index.html","6894cd36ca8fc165fa22ec4654df8420"],["archives/2017/index.html","191c84e5bd768f4f5347ec07762be165"],["archives/2017/pages/2/index.html","058ce2fd003ca9ccca9ee42227180db7"],["archives/2018/01/index.html","09d1eae20eace82116d6d48a6be805ac"],["archives/2018/02/index.html","5d2f28f23c3cea2bae6cf3d34f31190d"],["archives/2018/03/index.html","6ed8d034a56d4c9ca30232d943ce95a3"],["archives/2018/04/index.html","bf2f136f12a69c903ca193b9c2ca6dd0"],["archives/2018/05/index.html","460aba886bdf0bad2533ec41499f544d"],["archives/2018/06/index.html","4027b35cd8dc82e9e03e56f6f26021c1"],["archives/2018/07/index.html","7ba37ea376b4d91d57e94b8e684661c9"],["archives/2018/08/index.html","bae95e36e380981e38d391c00443f8d6"],["archives/2018/09/index.html","f289fec6d70f0a9e042f0348756f5632"],["archives/2018/10/index.html","a67a697c74b98b1e0adc6ddf732c369d"],["archives/2018/index.html","caec205b1bee55c0f83d9b058fb366c6"],["archives/2018/pages/2/index.html","73f9c6c311f66acc5cc8928d55d557f7"],["archives/2018/pages/3/index.html","71ceb38ec07f62e2fb15fa08a097d34d"],["archives/2018/pages/4/index.html","5d3edc8b20f6abda2d9cac34a101f56c"],["archives/2019/01/index.html","01816c21c84266369b937c65ac98e2f8"],["archives/2019/02/index.html","7b0b1eac763423e332533908f1055f95"],["archives/2019/03/index.html","2060996b353d1eb385954182cb3fdd05"],["archives/2019/04/index.html","090b9f0e92e24da43a07b62750f3aa98"],["archives/2019/05/index.html","e5d339043e72544b534bc09a4ff5655d"],["archives/2019/06/index.html","51c5cebb422012ed4d80f5a7562b9d82"],["archives/2019/07/index.html","3ac379145d353d9961a4f1a8d346f773"],["archives/2019/08/index.html","322a1dc97f51d2d74f11db3069332763"],["archives/2019/09/index.html","06403ad19678442baf0d2301f24effdc"],["archives/2019/10/index.html","94a4761a61a130fdc284da8994eed5fd"],["archives/2019/11/index.html","116e40ab335986571bfbb72c66ceb217"],["archives/2019/12/index.html","17a4d7ece7cd4da58fe05f6c91182e6d"],["archives/2019/index.html","8f543d6dd838e1f8c18d13f0ed50e5dd"],["archives/2019/pages/2/index.html","e1e1a7e932345f8d07f0f78046a18adb"],["archives/2019/pages/3/index.html","47d39d9d20f799adc9245d17e502c028"],["archives/2020/01/index.html","acdb75382a20997e1a39f89e55b8e34e"],["archives/2020/02/index.html","ae1ea0105e2a906dbda24e7281488656"],["archives/2020/index.html","443b795776642d55a0acdf32216f8d3d"],["archives/index.html","e815da3fb191429b6e5ae4b301996574"],["archives/pages/10/index.html","a5cc47856ae9e8a43a9dfbb7e49c8848"],["archives/pages/11/index.html","431f73837aa1ca683497575cd7f179d5"],["archives/pages/12/index.html","08a116518e310d34e665c5a09b65dd05"],["archives/pages/13/index.html","3555a7dc62901c349fc64937aa21790d"],["archives/pages/14/index.html","798470471d64d43e24412274e503b240"],["archives/pages/15/index.html","51370111a50205c2d372157a91af9825"],["archives/pages/16/index.html","0d12556ab5f7059addef35a7182773b9"],["archives/pages/2/index.html","5d087335247c87442f51e45ab6866a25"],["archives/pages/3/index.html","d4ed5e2c45cb69b8f6df2ca8828cb3c7"],["archives/pages/4/index.html","4216a857160f21f4acfca8df0718d18d"],["archives/pages/5/index.html","07cdf456c135a3aabc78d986988431f1"],["archives/pages/6/index.html","2a80ec0d1e3451b7ef35f8c211df5d74"],["archives/pages/7/index.html","9b9f9b4f2282444ff95cb6dba8c2106f"],["archives/pages/8/index.html","04b3d8e8f08cefbad59fe1c47a060a24"],["archives/pages/9/index.html","f1c8f71a88f62fa23a3de721985cddac"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","23a95e1d4b336b75d36f09c9d70f413b"],["categories/Unity3D/index.html","a52aa144e0c29767320ac4b78d08236b"],["categories/Unity3D/pages/2/index.html","00bf55c1535f55cb8213bff6fed1da3d"],["categories/index.html","2acdcc2a8e3f3be1676692a56c857596"],["categories/人工智能/index.html","7c5a6e4e85808becc3ad07e6e9a01ca8"],["categories/前端开发/index.html","ea99a30cf3b7d1b598068e3437335cff"],["categories/单机游戏/index.html","689e735f47f8e23dd05cd4cdb923e7c8"],["categories/开发工具/index.html","b9bc220c906f12a1cd9e21bb45d4967a"],["categories/数据分析/index.html","0c16a930c17e744479b78b981808bb76"],["categories/数据存储/index.html","e9ec99637f53061d7949c214da75c959"],["categories/游戏开发/index.html","84823b67f930b7aae15f55a6151d15f8"],["categories/游戏开发/pages/2/index.html","9cd9689cdf10a4dcb1520a6ec13f9388"],["categories/游戏引擎/index.html","4d74668459f1b71f75c9a6ba7c09463f"],["categories/独立博客/index.html","d9fd1aeb2e1cb26b1b29f503d6c581bb"],["categories/生活感悟/index.html","e1e5ef43518648c15cefb742ef3bf6e9"],["categories/生活感悟/pages/2/index.html","272325129e1333ef7b0c849d7756ae0e"],["categories/生活感悟/pages/3/index.html","c31ed5ec4095064908541a748153f84a"],["categories/编程语言/index.html","f180d2ad825dc446e9f4d494223d3015"],["categories/编程语言/pages/2/index.html","6d7c47d8dfa7a6b0f4256907ae01b7f8"],["categories/编程语言/pages/3/index.html","018065b08c0753e7b927ebf829d922d0"],["categories/编程语言/pages/4/index.html","0344738f3ffa55c77da6e0cb731402ae"],["categories/编程语言/pages/5/index.html","654cdb50dad822129774dff19ef564e0"],["categories/读书笔记/index.html","34148ce26ea57b7ca456256e0d7836f4"],["categories/读书笔记/pages/2/index.html","d9fed27b572c7112c94fc805352ef988"],["index.html","398a69191d372b8d682eb2974af6885e"],["movies/index.html","957130d3e06693f353b005f93ae4b100"],["musics/index.html","6a696844a2d39883b3faa7745cd27e5c"],["pages/10/index.html","bd09dad814172e38c1901c5ae7acec4e"],["pages/11/index.html","cc6abf1bfdc5c140601998a1d48760dc"],["pages/12/index.html","c26ff29cf00bb4782484f498b765770d"],["pages/13/index.html","5101e73660db8a0e1406ad3a73bb6a5f"],["pages/14/index.html","0e3f93c33108869123af893efc6a189a"],["pages/15/index.html","38f2b7cbdf2d3f34ae7f98708129ca17"],["pages/16/index.html","e86e47c42bc981db075994531a9bce69"],["pages/2/index.html","78db0ceaf1fe8ff711ab7055a11cc3e7"],["pages/3/index.html","b791cab6baa3a45b7f52d27ff2b2dda7"],["pages/4/index.html","b6f4e6510cfe7feb34dfebba814bdfcd"],["pages/5/index.html","92c41daf779c39de54dedaa830773ec3"],["pages/6/index.html","5b1bb58ce95c46359de45877c70588a5"],["pages/7/index.html","981d6d9e93e880dca8eda261592e2378"],["pages/8/index.html","7451670003c74c28406a84ddef78bc43"],["pages/9/index.html","0df5dfdba7e2cc0f863479da2c7bfd0b"],["posts/1059499448/index.html","0dfa1578f702577b4e6b2c59c7ef2b44"],["posts/1071063696/index.html","1c4eba9f3e99de61b88dd5f7306852b9"],["posts/1082185388/index.html","c102d459d3647f020dce8231188cb749"],["posts/1099762326/index.html","1bc6511c2d0404777849f8a0afc1d086"],["posts/1113828794/index.html","8a8c281f4b8c4e5fd60352fa4d2b0d23"],["posts/1118169753/index.html","e09217814a672ade098bab500b334069"],["posts/1122710277/index.html","f4acc60b1cf743177fd18676bd72a72d"],["posts/1124152964/index.html","34b0da662c1b3827865f16554be90a5e"],["posts/1127467740/index.html","d1774bfbf7c527a28d8d9a4b0cba62cc"],["posts/1150071886/index.html","d3921b2330967039925e3e474ad55052"],["posts/1150143610/index.html","34fb28c834a005d6435ab42ab19d7144"],["posts/1152813120/index.html","bc3d7e76ec58727a463c7f775b36cbfa"],["posts/115524443/index.html","9e9aaab2b0eacc110dc89b66cf5de94c"],["posts/1156673678/index.html","303d729d635ed06601b90d8a6bf49a65"],["posts/1166840790/index.html","762aac2dc817459869271a44668ff432"],["posts/116795088/index.html","a67e9dc47e7bc2de44e91cf48b80ed6b"],["posts/1176959868/index.html","4b4f80ebe140ddd464289e3d98e6f649"],["posts/1190622881/index.html","95a712a24a3949b1ee3d3741e0bd92ad"],["posts/123663202/index.html","53505506d3a12e8d27aa65fc105bd8e2"],["posts/124807650/index.html","ba631080a33f92b0214d07eaef0ba0d2"],["posts/1254783039/index.html","5b79ada3ed79e51d899323eb5a234a9c"],["posts/1320325685/index.html","34c204adc5609c2180cc2b7bcf337f77"],["posts/1329254441/index.html","adf2bbc531d34831340f1a6d857fc3c4"],["posts/1357715684/index.html","835334cc5a57305003cfaccfa39a0ff8"],["posts/1358971951/index.html","8647038fb1b654f30ec7418f46ad59c4"],["posts/1386017461/index.html","c1acd6610f2e021f50f4f5ce173cac04"],["posts/1394521917/index.html","bfab47c95ad484def2732718fe7c4449"],["posts/1397717193/index.html","163b85dc4f00729097f080dd02b7c094"],["posts/1417719502/index.html","2d6285208642f5a74dfd9017d65e2942"],["posts/1424645834/index.html","699e07da7bd96b4d369fade4593d33c3"],["posts/1444577573/index.html","5cc5939357648addce6a32beec7f4893"],["posts/1467630055/index.html","3f99f9da51a0d791fff41cb19c652024"],["posts/1478979553/index.html","e8d44eb042ab3a5ceee11d9228d0872d"],["posts/1540537013/index.html","0bd1c68fd422634723cadd946e6c01ea"],["posts/166983157/index.html","457b8271ade517ceaf60d470cd0d6829"],["posts/1670305415/index.html","dff80d29ded0d5279aa81ee5feabd842"],["posts/1684318907/index.html","8db1ee080f1b87b0ad061c8a20fe1ff7"],["posts/169430744/index.html","cd326c7916f8441b8f4fd4e3493ad1f2"],["posts/1700650235/index.html","a339979f10d917f24c9805507bc5111c"],["posts/172426938/index.html","a873be0b6507c00f4512e170742d5494"],["posts/1836680899/index.html","b92340dd8e62f5ed2bf83b1a056c063b"],["posts/183718218/index.html","4b431468d2bcc36d9c193b9f19cb7d7c"],["posts/187480982/index.html","539a7552f2ad6ff9af357026d3af9048"],["posts/1930050594/index.html","fe9492ace02459beb6bd74d129224921"],["posts/1933583281/index.html","bc902e5fde68cb013f0fabbf3c3411ee"],["posts/1940333895/index.html","a50d20420132fdca34997dee8dbcefa0"],["posts/1960676615/index.html","3042ee208f424c71275583ee0efc47ce"],["posts/1983298072/index.html","209b70e240a90de3a286595c4863ec03"],["posts/1989654282/index.html","c4975fff8e3b1d90e8c37fbc79dfdc77"],["posts/2015300310/index.html","17583c42e413f98af5c386929cd247e0"],["posts/2038378679/index.html","a9c728a77d5d5ee2508a9915efc3c4bb"],["posts/2041685704/index.html","50f87fbeabbdbe8b5c2c72f05ac3fd20"],["posts/21112647/index.html","5de0a31bd704f97133a0968fb39d1e7f"],["posts/2158696176/index.html","afc827d26a616cdb677c9eff5436caa3"],["posts/2171683728/index.html","d9dca05063f113b272ebf4e0a8699057"],["posts/2186770732/index.html","4352ae6269bd0deb1c3da579e7f57098"],["posts/2275646954/index.html","f77e9c04a90066aa71ac73b7da32c598"],["posts/2314414875/index.html","a9c7deaca3a5192c8e1a06897410df2d"],["posts/2318173297/index.html","131e07a1f9fe9ae1bdf7902223104306"],["posts/2418566449/index.html","dee06af1401a4cd55acab9ab1e55f27e"],["posts/2436573863/index.html","b052af7971227c6ad6d406dcc5950142"],["posts/2462008667/index.html","aefdbf4b598206d234773e1e1b37ce89"],["posts/2463121881/index.html","d1abfbfcbbc785d59bd1a593be94dd51"],["posts/2527231326/index.html","0f9287958bd4f65ed061592f24a60ec2"],["posts/2583252123/index.html","af7062d390912257e4ca54619cb2780d"],["posts/2613006280/index.html","cc980a1d7b4bf1f044e8305e5b52dc7d"],["posts/2617501472/index.html","7631b3971a10caf6352a2935491063ab"],["posts/2676125676/index.html","701d80b8be100fe9b9e88a0520288b18"],["posts/2734896333/index.html","bd32ead6e66cb56169671290e3cadbac"],["posts/2752169106/index.html","4578a07a8d88bb3516dcb435e01376d7"],["posts/2799263488/index.html","1b2a1321267ac79873bb26e3d6490508"],["posts/2805694118/index.html","6836c952874fd91031447aeca22a406e"],["posts/2809571715/index.html","2631adf719fcedf98c91f68a0ff88365"],["posts/2822230423/index.html","898525a91f4af52bdf6ae92e75c94f13"],["posts/2829333122/index.html","c4a32c53561fc524f759c4e9bd56b40c"],["posts/2911923212/index.html","6b235c2d4af4b7e1426ec944e20b54de"],["posts/2941880815/index.html","619fb96a1a9dcdc930530a8fd18822b6"],["posts/2950334112/index.html","2c9b5a4b3d0a27b23388d49533ea2f38"],["posts/2954591764/index.html","59f1e89bb545dc4f8d4c091159f73ba4"],["posts/3019914405/index.html","1ae896f9a2b82bcb8699b0d50a5aa93b"],["posts/3032366281/index.html","92595b45386142127c66471658dff595"],["posts/3040357134/index.html","3df8be2a0954cf06fdef00899fc6b1f3"],["posts/305484621/index.html","85850f63323cab228ed4a3fb1af03d86"],["posts/3083474169/index.html","10c3a4db0e5afcdce81c15862a2609ee"],["posts/3099575458/index.html","af073a0b5c58950b58b46b04d91f9cf8"],["posts/3111375079/index.html","51a581e13027fd0a428dc83323d4a191"],["posts/3120185261/index.html","2fed11aa8f12e80247ef96c796611a96"],["posts/3131944018/index.html","11628d27a3c0ef0a7300504f24b4e3f0"],["posts/316230277/index.html","9638b9f4f4f49e47bb0739998c37cf45"],["posts/3175881014/index.html","31e4ce756c7ac29e4b8229a02739b509"],["posts/3222622531/index.html","44dbb2d31ce010d6a21e6d5cbc167ea7"],["posts/3247186509/index.html","ecb455ec8a1c94bf33f737b172e6163e"],["posts/3269605707/index.html","4c87a885066bb9734bd900108ae79fe9"],["posts/3291578070/index.html","8b2f942538a0aea4c677d13714a17a14"],["posts/331752533/index.html","aa7c79dfa1db1e044aecafab1c8cd8df"],["posts/3321992673/index.html","da4e5f1e4691ccbec44ea7f26cc867d6"],["posts/335366821/index.html","74ab78c59a92efb18d272199b3db7dd1"],["posts/3356910090/index.html","07ae473a0df56a2c382c807eb2ca13d1"],["posts/337943766/index.html","0a23cdc30de00440e00717ea4c358607"],["posts/3417652955/index.html","eb786c3b0bb30ee9f24b02c870e397a4"],["posts/3444626340/index.html","7bad907e0032b7465b92c5783018e1e9"],["posts/3449402269/index.html","fbe1f38b5e6d49cfe4acee12a549bf2f"],["posts/345410188/index.html","d8502e98506f889c1a19b8da0967bec0"],["posts/3461518355/index.html","42f2879e0a80e8c5659ee9dfb3967a85"],["posts/3494408209/index.html","2758ec94630513b3248042b048805cc4"],["posts/352037321/index.html","d099789b8dccd0feb9d8c45694fa11f1"],["posts/3521618732/index.html","51d42c67847530244c1af55e336444fd"],["posts/3568552646/index.html","83c4b5f9a227cb40c35f033fcab315d6"],["posts/3603924376/index.html","308140633222bd908c311d539e2935b5"],["posts/3637847962/index.html","91cd84f36c1745b0c252cf08f4deca53"],["posts/3642630198/index.html","41a19da226cc617b2a5d8b3d3933f2d0"],["posts/3653662258/index.html","ea79739c558fde00e1076f12ae0a1f6a"],["posts/3653716295/index.html","dfccc35f63bb76d031a24cdc518e3a2a"],["posts/3657008967/index.html","d6119f72b6782ff0136bbc208dc0aa17"],["posts/3668933172/index.html","24c7ffed8837293b6ae8ed9f5fb0c55e"],["posts/3677280829/index.html","7cb4d2ed2814fc0354328db2c6de3848"],["posts/369095810/index.html","d50c1f8222f20560681c91c3083239b7"],["posts/3695777215/index.html","a5d9b702d921249f286b6e9192a6cdd8"],["posts/3736599391/index.html","1ef4c426c535cf17f689e519f844d52a"],["posts/3742212493/index.html","5482eae7b836f565a705affeb9c78255"],["posts/3782208845/index.html","3d809d1144c28043355ce3df3afd6895"],["posts/3789971938/index.html","1b1495ea307b2d38c920ac9d47354ef4"],["posts/380519286/index.html","554228f06a5b68a06cd1e6c3fccc25db"],["posts/3846545990/index.html","fb6839eb4935c04b5ada757c8a26f305"],["posts/3873710624/index.html","74bd2ba775be47f6e14db5cbbbae7273"],["posts/3959327595/index.html","8d042894b95281267e266e43121c2e74"],["posts/3972610476/index.html","d1ba6e1c45b26acb4fd0a0c41ffbec88"],["posts/3995512051/index.html","38fe56c112b7039d832925fa04524a83"],["posts/4088452183/index.html","31ce4e9b96068ddc57b5cff076641308"],["posts/4116164325/index.html","d58a761fb7ee4aa8b19470679ba56164"],["posts/4158690468/index.html","0a4354ed32fcc65756d58bf573f8fa71"],["posts/4159187524/index.html","f2f76df59be1f1110e4713e890fe2f27"],["posts/4197961431/index.html","12307d30856a06ca3b19cc3b81e8a127"],["posts/4205536912/index.html","bc4adf4e0dfaabebd6be55e71691c121"],["posts/4236649/index.html","1a66696ace50e603f400e6759bd7b603"],["posts/426338252/index.html","0f3e3dd4873d26f0f80a4bcdf012d698"],["posts/450254281/index.html","7a7c4290d0bcf0b1181731269a58ddc2"],["posts/4891372/index.html","c8e1163c7b86de6ff331490e4b9a8b8f"],["posts/569337285/index.html","6c520359ba334dbef6be4d9987627e38"],["posts/570137885/index.html","0ab786af25e4d5ffa19cfafe637bedfd"],["posts/570888918/index.html","3e27ef820f8237101d3ad7de1629e96b"],["posts/582264328/index.html","f96a0f3ebcb54bcaec45b625099892ad"],["posts/632291273/index.html","c1804bb108a265739da220e2dc66663c"],["posts/70687890/index.html","3ccaab48c611b16868b36c6237875b6a"],["posts/719322223/index.html","1d0bba8a466da34694a1a6badd14e4c0"],["posts/720539850/index.html","5a26035ab58c0aaa8a1fa33329d2cfed"],["posts/786195243/index.html","e9b7df162a8cc6b37e44847f41c77d32"],["posts/795474045/index.html","a8e31ee9e21a3e198ddaf41c3ff59fe5"],["posts/815861661/index.html","828ad89950cbc472c5c9a342379a9181"],["posts/821259985/index.html","2ef13e2275c53d84472ef4ff3e50e6f7"],["posts/828223375/index.html","1b58a90625975c52b9d83e67a09ccc2e"],["posts/887585917/index.html","98f35b018c3dc2f3c196b262e7606390"],["posts/888549816/index.html","e70e6916c39b9fa5cd28e010bf023ad4"],["posts/906436376/index.html","0328c5b51ad6c1b3f431337fad3018e1"],["posts/907824546/index.html","a9a94ccd8e77581c5659594aa97cdea7"],["posts/927393529/index.html","222afa27663c47d249b088c6be10fb22"],["posts/94443781/index.html","97488ab9f6bbc05f7ca0b85067190db1"],["tags/2014/index.html","6d4e6c25295a49c4c0b12665d734856f"],["tags/2019/index.html","2187e137ea64b9b08a2788c0f54bfc95"],["tags/AI/index.html","d65da0751f12a81f6253c1f475ca1a38"],["tags/AOP/index.html","c51c1fa643d19288211416803f3b86ea"],["tags/AR/index.html","f0b2c269a51dee860a571fe83427eb5f"],["tags/AssetBundle/index.html","5a6956babcf09e51f3a2839e4d5940cd"],["tags/C/index.html","2fc6304bf124a03c817276df5480723d"],["tags/CDN/index.html","51a7e60cb599f93340c7b5e8a672cbf3"],["tags/CG/index.html","ccb2d43d1f451a5accc885556e49dd93"],["tags/CI/index.html","52dea8bd4bc8dd543ff580fec92b9afd"],["tags/CORS/index.html","aa1ecf2216551f17cf35ba9937bb4a5d"],["tags/CSharp/index.html","fb82e83b155a9dc266308f712caa867a"],["tags/Castle/index.html","4238c9c5eacdab1330476ca8d1117d25"],["tags/DBeaver/index.html","32cc262ed9dce5c81876aa528043d382"],["tags/Docker/index.html","78b8a895609b86fb84f4ee0287782b68"],["tags/Dynamic-Proxy/index.html","fc49ee4eef798ac48b8d711c161870ed"],["tags/Dynamic-WebApi/index.html","7f11d0e46cf6d50944dfd0b50bc14964"],["tags/EF/index.html","26e9525fa88488680fbadd21540ff7c9"],["tags/ES6/index.html","c9779069ef0d8a492222379a2435e0e8"],["tags/EasyAR/index.html","0025f330c559f52edd7c0316ccc265c4"],["tags/Excel/index.html","01c00f4f697b1a2042679071d9b82516"],["tags/FP/index.html","0eec8db901c09334e1c27e23f7450f45"],["tags/Form/index.html","0fd8a5f0998e4b59e858476d88f2abb8"],["tags/Git/index.html","bf00aa0cdb359e6bfc3f343964a498b9"],["tags/Github/index.html","1aaa405939a1097cf4a0ea63ea4bf24b"],["tags/HTML5/index.html","8995a0873a718a0ff60678eeb9271742"],["tags/HTTP/index.html","bfdf357c128419723b3eee8c3a86f532"],["tags/Hangfire/index.html","1aa7eb43ce7590bf3399343fc1734cda"],["tags/Hexo/index.html","81f4299ac48845b36d97593ca8e07c44"],["tags/HttpClient/index.html","b0b782b2934460551573ee51f93dd1d8"],["tags/Hyperlog/index.html","1b6c2e83eee9dab8c700f8527b35e0eb"],["tags/IDE/index.html","22f69288cb21c0db61c0e89d737b7afb"],["tags/JS/index.html","7b3757a96f3070dd85d39f74a13081fd"],["tags/JSON/index.html","5b81280eb970ae79f4297bd7bc431219"],["tags/JSONP/index.html","e573567ecc6ea75f2f96e7493b5df3e5"],["tags/Java/index.html","7b7ae006c8d3ce0f716bd3241bfe7965"],["tags/JavaScript/index.html","5c30e6b3eab408ceff972b5a659cb735"],["tags/Jexus/index.html","8940ed2407dfa540d27bf293f818f518"],["tags/Kindle/index.html","d510d82d83cf580444ccb81cf54bf31a"],["tags/Lambda/index.html","f097cf6680bd4396f65baffd237b4393"],["tags/Linux/index.html","844ede6aaa7ab7454d1fd4b2679af07d"],["tags/Liquid/index.html","aea380ef2f13d21907d873f626bc1704"],["tags/Logger/index.html","ab1dabf8839c0b6b4e48d0cdc26c4c9e"],["tags/Love2D/index.html","dcb51e4f01f473a141fdc38d486cbc16"],["tags/Lua/index.html","6a9c4d105accb426cbb7ed6063fc53b5"],["tags/MMD/index.html","8d85669ec88c0298f4b3e53ec854c05b"],["tags/MSBuild/index.html","553887ca5aa52b53cb610745861559d8"],["tags/MVC/index.html","a3dd73f7b2d1ecc4901c077528ddc652"],["tags/MVVM/index.html","817c35bcd94a4e5c53b02c975701865e"],["tags/MapReduce/index.html","e560b87bc2f6ca9d8c9ee0614c70f447"],["tags/Markdown/index.html","e369c0794e4f7850323f226a12f40b5b"],["tags/Mecanim/index.html","1b83c79db782c5c0172a75e24f0bc5fe"],["tags/Mono/index.html","a2ab94973550007c9558e1dcdd91ee73"],["tags/NET-Core/index.html","ad97157345b2333b0cb0b42f3613bba9"],["tags/NET/index.html","cb37cb6a923aa33338b71a0a4d59f048"],["tags/Nginx/index.html","3590ca9941d00123ef75e656a6dbfa12"],["tags/OBJ/index.html","5444582cf757a77fe1a0827e3141d159"],["tags/Oracle/index.html","0671363d26063cc0be3953c5ed518d89"],["tags/PL-SQL/index.html","44866e267f798b54d6e86ce72b1f67cb"],["tags/POCOController/index.html","4d9f2b5cda25b8a4634f8ba381e45d28"],["tags/PWA/index.html","870e5c10270497c4c9cc34540a3e4921"],["tags/Python/index.html","31bab6fda14179077fc5bbbf0bc97884"],["tags/RESTful/index.html","8760ebe652117abb1007c669d9899769"],["tags/RFC/index.html","2f5d35cf8a9de11846b587cb786c5278"],["tags/RPG/index.html","006abe45236ed6e1843107fa23ab09af"],["tags/RSETful/index.html","21d67984d1ca2b7342d936dc849e0bfc"],["tags/React/index.html","bfff79457e8f7ebf0ee44d0af5fdbd42"],["tags/Redis/index.html","148c05c524c2060d12716e15b55909eb"],["tags/Referrer/index.html","9a502757fb67134aff121ddb7bd04a22"],["tags/SDL/index.html","b94ec2630aee2cad3dee1360996292aa"],["tags/SQLite/index.html","71f3e5685c90a124a48db28ee97715ee"],["tags/SSE/index.html","4ce15aab28ed9a4c1732688b1cb5c008"],["tags/SVN/index.html","72d7f53fd8104ce311fdafe838ab4ba9"],["tags/Script/index.html","747f9a9ff40d3481ae8c23e5b2d9c50f"],["tags/Server酱/index.html","64084d11e846a5f2baa14cc316f822a6"],["tags/Shader/index.html","f507b84a7733daf3012dbc271802e325"],["tags/SignalR/index.html","266679746df63bbd3db94d239f7617a9"],["tags/Socket/index.html","c8a36822517f931878ea762176bb10f3"],["tags/Sonar/index.html","998bc7c8d23852e094b5dfd09db30a6d"],["tags/SourceTree/index.html","48874b45c2d5601cfebabd7b79b68358"],["tags/Sublime/index.html","24925eb655a09865bfc39f6702f950ad"],["tags/Swagger/index.html","9d2ed81859500c76e4f0c6b8d21cf4fb"],["tags/Trace/index.html","aab37a39a1b3248c25f73773e56d82f3"],["tags/Travis/index.html","bd2c5dd94d52e8b8023a684f7b044546"],["tags/Unity/index.html","a246edc66556607843408f71b75b5bc8"],["tags/Unity3D/index.html","0299290128dd6e74a9de2d2e12f800c7"],["tags/Unity3D/pages/2/index.html","19d19135cb2847975d173ec9188af221"],["tags/Unity3D/pages/3/index.html","0c58326a1f263a2f606092113e88eb5c"],["tags/VSCode/index.html","950df0a6d68f6ed203f46588d1af48bb"],["tags/Valine/index.html","db1af34d3f25b918c0a520e3305e2f78"],["tags/Visual-Studio/index.html","3fc7ebb70a68c3627481b4ce49a0f194"],["tags/Vue/index.html","8c09407b2d81a85cb374c344fb7e71d4"],["tags/WSL/index.html","81839973b120b51c8469b09981c57392"],["tags/Web-API/index.html","99998a96eb9f21c8cdef0e3dfddae78f"],["tags/Web/index.html","0789d82a296ff0f092f1f74299b4a4cc"],["tags/WebApi/index.html","68c0f7056d84d8a27c2199a705149589"],["tags/WebSocket/index.html","fb279f02a4e06ac26680d64952fe9afb"],["tags/Wechat/index.html","cfad52f74747b1358893488bd2ed3e86"],["tags/Windows/index.html","889b0f0e87f2883a5ca0a771cccf4ffc"],["tags/disunity/index.html","67f07ffba80430f74d6320d818e10d74"],["tags/index.html","0e2a553256cf93dbd9b465698f4c8416"],["tags/matplotlib/index.html","9cbebf7927e1e516b2d42163ba12556d"],["tags/njsDelivr/index.html","a1d2754656ab8b8357bd5c4a5ec185f7"],["tags/uGUI/index.html","2d3352ff660bb9f168e97ec5916ce248"],["tags/zTree/index.html","a912ad61c354bd97aaf8ed61886b87bb"],["tags/一出好戏/index.html","d56f3cab6c7eb27f6a17b594f4afdb5d"],["tags/七牛/index.html","417dedc487ea34742c1eb5487214e149"],["tags/主从复制/index.html","7b58936dcb99de864a3d94b2ee3db088"],["tags/事件/index.html","220df8b74969da4c58a3e71bbbc2999e"],["tags/二维码/index.html","9235cf232533b7cfa6088a5b0c6a0349"],["tags/云音乐/index.html","374226c7bba3636038012d7d0908e6b1"],["tags/互联网/index.html","5ec8a9c40598342a1791ef4e47719979"],["tags/亲情/index.html","871e8b2b41f4689342bbc3e69b9c8b5f"],["tags/人文/index.html","b4bb61f119ea63dc7eb90f07a0728a92"],["tags/人生/index.html","06693d2422f04e99da206f53294406c5"],["tags/仙剑奇侠传/index.html","4fd61642039db567e95b04e9c9d5a92f"],["tags/价值/index.html","f92683556ae629a2cb1c2f7c5973edd0"],["tags/优化/index.html","fc2c1743582acb9c6adb71fed8ac9c2b"],["tags/全智贤/index.html","e9ab4607e33157ed9e2c237a9e3ebb49"],["tags/公众号/index.html","914a9ff3ab5b863b6df522d908893bc9"],["tags/关卡系统/index.html","3052cda24faae1f07e0a9e7854e6c00b"],["tags/函数式编程/index.html","104392b49b3f57503ff3472a7d87d07b"],["tags/别离/index.html","7019467788f1021062df67b6651676e2"],["tags/前任/index.html","2dea4a756c3f57148047bdbea9da4d3f"],["tags/前端/index.html","12b292232e81028098dcfa5c9fea02ba"],["tags/剑指Offer/index.html","4ae43e040f10b72c85599fd7dd2fbea4"],["tags/加密/index.html","e98bb7f1794bb99f9a133ccc75c2bf1b"],["tags/动态代理/index.html","0adee43ee88e2403846ef58180e20aa9"],["tags/动态加载/index.html","832a20469b87f547bb1a01dc118f6ffd"],["tags/动画/index.html","b41f9ddbcebcfa6d0f608642bf183210"],["tags/单位/index.html","4bf74c23929c61d779bafeb985ba2ae0"],["tags/单机游戏/index.html","36f3c44d1f5425bf38841ead71c2c7a6"],["tags/印度/index.html","6f680ca03d3276746425a08f71afa470"],["tags/历史/index.html","2e9aafc95907821640db2f972f870a6c"],["tags/反编译/index.html","96f2fd3732c5945eb305ec934c9a89d1"],["tags/同步/index.html","814867e75cacd3cfbd803427d7104d11"],["tags/后端/index.html","480e33e13b5be06c28c001edd626cfba"],["tags/命令/index.html","d8b9cdb96bf6b793d19b8e9cd883cc49"],["tags/和平/index.html","b29c6bbbd9ede9eea49eb3a09b7e3176"],["tags/响应式/index.html","3810bf4ba96994f51d9986681441554c"],["tags/哲学/index.html","a90a58301a0b13fe69e0096a947f5353"],["tags/回家/index.html","7ae397588ef65c05438cefc88ef9ab2e"],["tags/回忆/index.html","ae1afc8097bb53d1fec996666239b542"],["tags/回顾/index.html","0678f855c7bfd3ce419ec561c8189beb"],["tags/回首/index.html","40fafe8e7dd5d3784239c55afe1d1feb"],["tags/图床/index.html","e940c26f9bc54a317b592614e45794d3"],["tags/图形/index.html","a27c6179b193768c02482a7d8c29999b"],["tags/地图/index.html","fb22c29ecdfc2175d687c09f7e56d412"],["tags/塔防/index.html","077133906f2300128fd042a9d9d39a78"],["tags/增强现实/index.html","1e1bc2ce8d8bcede3a5538de5398dddf"],["tags/壁纸/index.html","24e6c7914cd971386cf90446863d5f61"],["tags/夏目漱石/index.html","238371542cb5958e5f2f3f5df1bbcdc1"],["tags/多线程/index.html","a1cddc31796c8b2a81628a0cc15709ba"],["tags/大护法/index.html","3468a124efb379a2acb012eae35d9247"],["tags/委托/index.html","399beb7c993498b290333baffc963e14"],["tags/孤独/index.html","7f156cff806571a76beffc6089f8eb9c"],["tags/展望/index.html","068001ecee57bc54aed69335a1bc4fae"],["tags/工作/index.html","da068a62a729bcf090c993db1bfa3f82"],["tags/平凡/index.html","bde073c9cabf5f7e5014e46c35e74b82"],["tags/年华/index.html","496dcb7c3ae0d0beed6afcb815ee7006"],["tags/年度/index.html","827cba286d466655cafc83bb95205363"],["tags/开源/index.html","850da5484e3a02c30289530582f15eb5"],["tags/异常/index.html","533d77a45305f4c5c4cff9adadc2e97c"],["tags/异步/index.html","8b0b8ea77363b0ba4e068e6970466519"],["tags/引擎/index.html","48f875d4bef076cb8d8823c4858d99d8"],["tags/影评/index.html","4f9ae563ca4c0108b003a9576f58c5b0"],["tags/微信/index.html","691834b6002c9b421e1e5fd420e51f78"],["tags/微博/index.html","b33d25d37b0e1a5484329f0bfe31b987"],["tags/心情/index.html","bf3d1884fd64281b6a79717d7138a5be"],["tags/思维/index.html","d959e2223e41e22a29a7ed2e5c5008f8"],["tags/总结/index.html","0198c92185682dfc696711173b9e01d6"],["tags/想法/index.html","165dd2b5f557d4ad9610d16963206c2a"],["tags/感悟/index.html","efce62942e7ebc324052f262c61d67ad"],["tags/成长/index.html","5a8c05028e4abc3abfc27df6989c1328"],["tags/我是猫/index.html","9a99a7f30e0b020933dd16def5a059c0"],["tags/扩展/index.html","18a0a154570f950f6eca78dbfb1fbf1a"],["tags/扩展方法/index.html","52a28da3f518cf1616f716ac4fe14a66"],["tags/技术/index.html","e8f480d6217e556bf38fdbdf18dc0c5f"],["tags/拖拽/index.html","ed81ed7805f755bb57efe1ae6627f3bc"],["tags/插件/index.html","5f945a3157c5f3982343f9b35f3706cb"],["tags/插件化/index.html","251ad349f281074b5e90654781fbd22d"],["tags/数字/index.html","bfb4dc81836d02ffe9f5cfe1bbab7336"],["tags/数学/index.html","ebdaa96f44d4d236d524bb624fcb1d0f"],["tags/数据/index.html","a59a4e8f28fe72acd45646be704b33f4"],["tags/数据交换/index.html","2331a394b5095bb4eb2cd3cdd3775db2"],["tags/数据库/index.html","93a95947d39532e9ffc9eb40d2f8d7d8"],["tags/文本分类/index.html","f9f5e36769bea7d3ceb8bc2265ec8f2b"],["tags/无问西东/index.html","bb25e0c1bfdd790b462a2c13b98c05e6"],["tags/日剧/index.html","5c3692e474fb453288a8dc358655b512"],["tags/日志/index.html","0cb4d38b91b5eb4c95b940227703cf0c"],["tags/日本文学/index.html","ed0e1a37ad7769d7dc4f78387b7ed89f"],["tags/时区/index.html","6ee5e5083d53a29e4366d5a2eaef9ae0"],["tags/时间/index.html","8bfc72b492bcdc8bd8fc35b56b240268"],["tags/服务器/index.html","67a2a3594822c052e9a824142ada6a0a"],["tags/朝圣/index.html","d3d5cde57d0483509e3891c93782c854"],["tags/朴素贝叶斯/index.html","57fedeb431dc9b748cc2b703c94df21c"],["tags/架构/index.html","113dd17ba7684a18c1b1a540b2fbeab8"],["tags/标注/index.html","f829dba0dcfbc5fa5169ad4da9fae115"],["tags/校验/index.html","10be5d9c65d4cb15af0582a92bc9c949"],["tags/格式/index.html","d699e31b0f4adac1078aadc09869442f"],["tags/格式化/index.html","d2208fff978cc6675589a259c5688d53"],["tags/桌面/index.html","ee05cf1aa38733e902d838741ae00924"],["tags/梦想/index.html","b5cda2afe2ace311d395c8ddc82198a7"],["tags/概率/index.html","5f55d5d15931411ba0c22a8260a75107"],["tags/模板/index.html","df86b94b31c7ef1421bf34b4a47e1d50"],["tags/模板引擎/index.html","6f0173f8ab3ce64aa9abfbefba227918"],["tags/毕业/index.html","49d39770fc7adff431156e7a305c6600"],["tags/毕业季/index.html","9fb1bd07ff03865cc63d25d85c1b8c73"],["tags/消息/index.html","491a25f6fcc8d4e12ca1f47aded36691"],["tags/游戏/index.html","cd232d1e968712c47423cccb400958dd"],["tags/游戏/pages/2/index.html","c9ea39be626018e8f6689c1ddc090690"],["tags/游戏开发/index.html","a8054a85b16e2955f1948bcde002cee8"],["tags/游戏引擎/index.html","10bd3da4cb21682f48df10423cb16421"],["tags/爱情/index.html","10ac183ff395395798103f9a9c663507"],["tags/版本控制/index.html","2796211c4348f4c7773613c87eabce6a"],["tags/版权/index.html","5c741cbdc1aae94faa63f43df4fa05f1"],["tags/特性/index.html","72c8021fa90bc355424654976364c821"],["tags/状态/index.html","2e0f499abbc3a58b63577c490da431b5"],["tags/现实/index.html","ea289b478d24883023d93c364ef87c8f"],["tags/生活/index.html","555291c1116877095420c51deae10d14"],["tags/电影/index.html","293a20dd24707d1bad80ad01d22e377c"],["tags/画家/index.html","3d577eec8da62b58c9b601796aff8e34"],["tags/知识共享/index.html","801fd0ae2557f3786789a830663c97b5"],["tags/矫情/index.html","0b778cccb5642fc42929b593bbcbabfe"],["tags/程序员/index.html","0ef1d72a2f8a7d51d1210d940ab9e73d"],["tags/穹之扉/index.html","f00aca268d1446dc245861286275719f"],["tags/穿搭/index.html","fb655eddba3f752af68071dc32e65c09"],["tags/童话/index.html","69cdb9ba2c9b2bfd05040e2e5b4055c0"],["tags/笔记/index.html","569b28826c9a6a52a55e7eebd23be336"],["tags/算法/index.html","266c4629f675ee2b0f2f9dfef294ec9b"],["tags/米花之味/index.html","2f0ebdb1b1e3710628e84b66cc648fba"],["tags/缓存/index.html","aed51480196002d1583ae5be18d3a8e7"],["tags/编程/index.html","b17b68d08cfe299eefe992a92d4ddd70"],["tags/编译/index.html","eec86e60f901ab176d350dd00eca34bb"],["tags/编辑器/index.html","e04e999f8a4d68cd5bbfc35a045df0fa"],["tags/网易/index.html","d9079922373185ac35680c01a8e9e9af"],["tags/脚本/index.html","3c1435a3a0fc1203225799ab0070f6b6"],["tags/脚本语言/index.html","d2aa8ecdd9713e466969f470e51bbec5"],["tags/虚拟摇杆/index.html","950e83583a6d57918e13abf050272710"],["tags/蛋炒饭/index.html","48ecc6d6cdf8068dfa49686f82653abe"],["tags/表单/index.html","c65ba58c6b9ce3319c9e7885ce5a360e"],["tags/装饰器/index.html","89efdc43d726f139e53ec7677cc29824"],["tags/西安/index.html","dd6effb689ea8ce5c4a65e5491507ce6"],["tags/计算机图形/index.html","4e2e871f98cc6308825420ab21caea11"],["tags/设计/index.html","655f825a5f6e52f046b155fa717a39f1"],["tags/设计模式/index.html","d66370530c3bbd5a60746adf7219658e"],["tags/访问量/index.html","948b33319a5465e3d7a7e0a5073e14ac"],["tags/评论/index.html","bf0ed6ee87e4c47a665830703dabae03"],["tags/词云/index.html","0f299e146f906e6f13fe47b00fef4794"],["tags/诗人/index.html","effcfe744994072339a95915bf00e4f7"],["tags/语法/index.html","9addd097181c10d5bfed5e22d7c98df2"],["tags/请记住我/index.html","ecd10b1dea736a00ff37d05305a98347"],["tags/读书/index.html","b39b154935da7c61654715821a5e8907"],["tags/读写分离/index.html","46fb1d76c9c97f3cb400c83f0642e7fe"],["tags/调试/index.html","dcaaf34ef3b012654057fbd1575bb842"],["tags/贝塞尔曲线/index.html","26e84270c5771e2ee05eb12077a9fca3"],["tags/贪吃蛇/index.html","ef47be35585474267f452a9de4c7d2fd"],["tags/资源提取/index.html","897e0467fba8a81b68ba01a59fb59183"],["tags/跨域/index.html","840fd274bb7c9cc2c384feba830410c0"],["tags/跨平台/index.html","9965e128345b8ace914c73d5c3c9ffc5"],["tags/转盘/index.html","de24cbcf32de0344c626aa87503a5610"],["tags/迁移/index.html","d396c142201f2fbc8d069d165dcb398e"],["tags/通信/index.html","bee5f7fc4543d9904d1516cfc8271f1e"],["tags/邪不压正/index.html","9b4522c758a278faba8c68c988318ed5"],["tags/部署/index.html","f0e7572e01be427b2055bbe22646ac8c"],["tags/配载/index.html","137ad54d052bcf686c9e104050abb533"],["tags/重试/index.html","8a33c02268f735da415c8e2b2bae6f08"],["tags/长安/index.html","a62c7744a87f16f122615301a1ca11b7"],["tags/长安十二时辰/index.html","55c9412f09e3f5011d2288e7514d571e"],["tags/阅读/index.html","f46a4b014c20d88c0e71d1bc7b9aeed4"],["tags/阿里/index.html","98c46f7e64d283a383cfaf7e80e2a51a"],["tags/随笔/index.html","428ebfa4edd98b995c67989a92ff1dce"],["tags/霍金/index.html","90f1942846e61ecebe381af17786ac69"],["tags/青春/index.html","789d12097bc5053cfe88ae4e8cae8deb"],["tags/面试/index.html","17c227d2197484a09405da7929adba62"],["tags/韩寒/index.html","58e404ac4a00161816bbc8a68b3e9e05"],["tags/马尔克斯/index.html","b878a39f2ecd2d57f756e8c962bd1ef4"],["tags/验证/index.html","a7f13fad31d032b0ca4c2fc4f6fc38a4"],["tags/黑客/index.html","5750dd6f7e2c0ce18c2c468de528cb8c"],["wiki/index.html","3b824bb3e0b3b3ecdac5a5b41dc3f09c"],["works/index.html","fbcbb76060aeb1adb1d7e8cb3e882605"]];
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







