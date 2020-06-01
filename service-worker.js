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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","41761b60010fac1bdbbee41c91ace60d"],["archives/2014/12/index.html","7470542bf616ece62a3e275f34ba2e1a"],["archives/2014/index.html","4da7750cb7e451982b8dcef16f009725"],["archives/2015/01/index.html","ab32c8139b24d7ba50c1af4b79b9ced5"],["archives/2015/02/index.html","96749dfa30ab90a9dd15993174f8a228"],["archives/2015/03/index.html","7bd4318bc406ff24095a5a2f8a64f70f"],["archives/2015/04/index.html","862d9664c7955d2978a29547f00e41ad"],["archives/2015/05/index.html","193bb9f8e49d90611f9147ec9df86329"],["archives/2015/06/index.html","325be0b60b5f65118627957545a3209d"],["archives/2015/07/index.html","f29af8316875815b0e9499b4e89316ef"],["archives/2015/08/index.html","da81f3a439065a9cb557b155a0715a3a"],["archives/2015/09/index.html","47e7bb9c53cbeba6658e205aa1334bef"],["archives/2015/10/index.html","89ed84953b76d21993b785d87d1989d0"],["archives/2015/11/index.html","c10111ebdfb3d535825d94862c927768"],["archives/2015/12/index.html","61032f08589daf6cc3dce94ea60bec6a"],["archives/2015/index.html","e98188a4c8e4b7b912553f862a9edecd"],["archives/2015/pages/2/index.html","bbfbcc78ea53eda9150d1ae050ca6ef9"],["archives/2015/pages/3/index.html","f77223de38df395caeaa27d445928b55"],["archives/2015/pages/4/index.html","816c2091cccf0a58b065a2987df6681e"],["archives/2015/pages/5/index.html","947a6c8080498861a44588241a5246b9"],["archives/2015/pages/6/index.html","dff54ce22e3292ce90de27bee380ca0a"],["archives/2016/01/index.html","eb25e357a5f587313f679f6082c3dd87"],["archives/2016/03/index.html","ef1187979768d18655a6d1480b95903b"],["archives/2016/05/index.html","e65638ed4bbf05914674cc232ed6b78e"],["archives/2016/06/index.html","eee9cec550aca9589964da3ed3fd10c7"],["archives/2016/07/index.html","a080c5548918f7a12c0dc3c68700e99d"],["archives/2016/09/index.html","c0deb5bfd4202519c1d5cfad71ffefea"],["archives/2016/10/index.html","307b7f591c8da614bc80bbfcea9da41a"],["archives/2016/11/index.html","9beb8b26d09c8a9f23c12d27f69c5aca"],["archives/2016/index.html","6da612acb1732320042b976d684e6c52"],["archives/2016/pages/2/index.html","657234f56a552ec1d14d89b00c520dec"],["archives/2016/pages/3/index.html","24eb85f59ef44a08c6ab814e8ab1d755"],["archives/2017/02/index.html","6d8984a7209ae0f6ebe570657adbde99"],["archives/2017/03/index.html","749259a9ed0dac44721d6cf39210e299"],["archives/2017/04/index.html","39c920b2ddb73ed0b5ada4f71e427b9b"],["archives/2017/05/index.html","0d2a269b32be6fa2a7f8944991380fcc"],["archives/2017/07/index.html","596ba69e709cee6ed8bd44257c26ba8a"],["archives/2017/08/index.html","25fbcf2e57de997f6fd556fa0581d524"],["archives/2017/09/index.html","8b2d0c94bf9364d648134e8f7d83a61e"],["archives/2017/10/index.html","1540defbba6a8dd3195e22fce24b0147"],["archives/2017/11/index.html","ae65d52bbe715fdb5e676589c3944e7e"],["archives/2017/12/index.html","86a38dfd9fca7a1592891cb571a50b2e"],["archives/2017/index.html","c827e00bc8b1f67544feb65452ef546b"],["archives/2017/pages/2/index.html","11f40e317aa9f7a498a4d53f7024100a"],["archives/2018/01/index.html","8ea86e396d4aad3544ccef6f4558e18b"],["archives/2018/02/index.html","68ae5c83fa1dae8608c4adb6c97f4af3"],["archives/2018/03/index.html","1eb07fa963d5a65df36df5f26a3d3bd2"],["archives/2018/04/index.html","4e775bc7782f3edd91dec4aae0fba5a8"],["archives/2018/05/index.html","56c680bf6d5b000340dbe4384b5093b9"],["archives/2018/06/index.html","d8016e2385a0b2cda192a17b839b0060"],["archives/2018/07/index.html","4141227f2bc9db216440f0178beffa19"],["archives/2018/08/index.html","fc07ce1d0279795e8437f0b18f3f9095"],["archives/2018/09/index.html","4e9673f50d41e7fb8c84db55e60eafd8"],["archives/2018/10/index.html","9f58baf32b695fb309626e0786dc3fb2"],["archives/2018/index.html","8fe94b0b25a6d580ec285935b78db3ec"],["archives/2018/pages/2/index.html","5d46ea56e1147632f77688b46abba908"],["archives/2018/pages/3/index.html","3eb8850b1a797d73b43c22991db3f7a4"],["archives/2018/pages/4/index.html","6f04bfc3aff5bd4d206b2900f647be33"],["archives/2019/01/index.html","16b2b7711a3528dd4aac4c458965b597"],["archives/2019/02/index.html","93c16bfd962311dfd796e38935ac39bf"],["archives/2019/03/index.html","1682d562c2f8bf84e51d1d1227f5caf8"],["archives/2019/04/index.html","59e4477076a37a31cb8bcddb2ecd1427"],["archives/2019/05/index.html","1eb1df83c2637bc62664d84372bcd867"],["archives/2019/06/index.html","ca86fdbd61af90e25ff524405a853896"],["archives/2019/07/index.html","13de7cd51b97dd08bc7bf71d04f31d2a"],["archives/2019/08/index.html","d0ab8ca076d1e91232d86e1573a406dc"],["archives/2019/09/index.html","3c8a390c23b254e0dccd016c99a9bf63"],["archives/2019/10/index.html","cd6290d4e8934e69cc28f2677bbbf022"],["archives/2019/11/index.html","92c242039e84e1e715b980187fd91011"],["archives/2019/12/index.html","a2af496ba405e532d230f05419e48931"],["archives/2019/index.html","1309857ead31b8e8d782f30cad851e5b"],["archives/2019/pages/2/index.html","b3afaf625f3de9e021fb939ec9fe34fb"],["archives/2019/pages/3/index.html","be930feb247c94d8b98fe5172730034b"],["archives/2020/01/index.html","1b0a07c9eb639f5187719564125cfbad"],["archives/2020/02/index.html","3bd7c1193edc009f0a725d4cc00f7e30"],["archives/2020/04/index.html","f50ffdd34c19537ba62978b456c4da2a"],["archives/2020/05/index.html","b6d4c1c4fa5c72d6cd4447311dea9eba"],["archives/2020/index.html","beec610f2aa4bd91d142f0f5e236bb3c"],["archives/index.html","6c4f2396b737407f290b25311d0bfc63"],["archives/pages/10/index.html","31afc204e14262092c33a373d2b365ac"],["archives/pages/11/index.html","4b28c6c9f85be7fe3e02ca04e291d871"],["archives/pages/12/index.html","2fddd94b3fa2cd3905298774482a645d"],["archives/pages/13/index.html","924284001d51b7a67f439e770d22e41a"],["archives/pages/14/index.html","6a3f7f629cabd63496463c477b6e5643"],["archives/pages/15/index.html","473cbd8f2529b7e8ab6149887f6113e8"],["archives/pages/16/index.html","8ced780362734b57f006d05c548f0374"],["archives/pages/17/index.html","23c62693ca2fc966692e3f83d944d662"],["archives/pages/2/index.html","570ef7d21c560da255a93f1368547457"],["archives/pages/3/index.html","90fb04a9da17a602b29c14e32b6ae443"],["archives/pages/4/index.html","70ba8d70fcb4627073a746eca60b79f2"],["archives/pages/5/index.html","0a75463e52f427b6fba27f5420886a9c"],["archives/pages/6/index.html","fab01829a41b45d825df2dde5635e09d"],["archives/pages/7/index.html","f479d10f57e1c5319d18f5977792507c"],["archives/pages/8/index.html","b80b3574a090c9b036a56c09c85a6e25"],["archives/pages/9/index.html","282b13a38ef89da75eaf962275e8954d"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","3d091fa689808c97841e90fcfabb59ee"],["categories/Unity3D/index.html","128254cd84e9e86225f7e370491faa10"],["categories/Unity3D/pages/2/index.html","544295306869f662a8c02a459c098c45"],["categories/index.html","7df2ed01cadba2d801960da81e2bad42"],["categories/人工智能/index.html","648fe9fe35bb8fbdfcc83a15976d303d"],["categories/前端开发/index.html","b10f4a1e06b406c0362b9a8d14232d3b"],["categories/单机游戏/index.html","4606df5c97c0345c343f2e88c8544b38"],["categories/开发工具/index.html","0060e8f30508d83bd69e1f39dcaa09b9"],["categories/数据分析/index.html","0fabdd031da42752798386cc8329a9c5"],["categories/数据存储/index.html","da2cf32c587ae35de73014cf17370fa1"],["categories/游戏开发/index.html","44cd2d58acf85a3b0f73410ddc891911"],["categories/游戏开发/pages/2/index.html","c7c2478f6177ca180d2a48e32482f36a"],["categories/游戏引擎/index.html","593d07ebafacd2690210519e8939cca8"],["categories/独立博客/index.html","672d4d89711bd7e696bfeffb9728a239"],["categories/生活感悟/index.html","0844e4b5548c8f60715350f799d9a91d"],["categories/生活感悟/pages/2/index.html","621cf270f029e6c15725c708e5faabf6"],["categories/生活感悟/pages/3/index.html","e1db5485836e3f820a01159b77f664b5"],["categories/编程语言/index.html","b542e257816113b0e937fb30d4f6fc59"],["categories/编程语言/pages/2/index.html","568ac153201507f82892d502e94e8041"],["categories/编程语言/pages/3/index.html","522d22b2e9b6c7e49958d04b0196aa5c"],["categories/编程语言/pages/4/index.html","19f03b37ffa3fdcd1b3d2aacb84f17a8"],["categories/编程语言/pages/5/index.html","0a62a5033c83818c9dd06ee40c467ec4"],["categories/读书笔记/index.html","a9a360ea29e037bd964487773b9d1f63"],["categories/读书笔记/pages/2/index.html","21d5f951b358056917d9ffce4e81f957"],["friends/index.html","49009037fcd5eb2941d24139431bc3d4"],["index.html","fd77a7d061b96c099e67ffc45df05997"],["movies/index.html","4763a58a5e7dc29cfc67c7f7ff26de00"],["musics/index.html","ae719433e322fe840e89b42d7515848d"],["pages/10/index.html","d3e36a2e36396b5c21d7363aa44e696e"],["pages/11/index.html","cd7cf05ad34cf581b22f0c690d63c309"],["pages/12/index.html","980af396d6e88bdc4469b14c972668b4"],["pages/13/index.html","166d91de7cf6b9863ba3572880f49023"],["pages/14/index.html","874d198fff7debf7a86b0072fe3cbecf"],["pages/15/index.html","5f040ab6bfea82efd3ddb254eb26b4df"],["pages/16/index.html","f590fb0536badb1e5851bcd0eeafb7aa"],["pages/17/index.html","2b2a9e1f0d28e33b572e14cf6c9f1e47"],["pages/2/index.html","da91e0307d8c32f72cf39f5d09ee906e"],["pages/3/index.html","dbc4b494005bee39950b3d58d8577d97"],["pages/4/index.html","1a49684019fabaefece54e48172e113e"],["pages/5/index.html","5bbf514996684bd031b41284c874852f"],["pages/6/index.html","9ce5f9aa1d8285858530dc86c8a9b82d"],["pages/7/index.html","25dfd5aec51d7c4e4dfb631a2d9cd62c"],["pages/8/index.html","e4628343e941b5c87aba77d04df6230c"],["pages/9/index.html","619a80a2c726396e685fab2af3bc7c91"],["posts/1059499448/index.html","0154cfe7f66cd492650cb2002e40434c"],["posts/1071063696/index.html","bcfd9ebdde7046d6f836cce85e2557c3"],["posts/1082185388/index.html","99dd5ad9df4e69fdeccc8ddf8861ed29"],["posts/1099762326/index.html","405051f6c79c8160a937865fd883bc4c"],["posts/1113828794/index.html","e6470b0f0d48758a324b72fa00860e8d"],["posts/1118169753/index.html","10977f32c5db95adbf932c1f2e455332"],["posts/1122710277/index.html","3e1583852ba10d66031c86024a3161d0"],["posts/1124152964/index.html","a9a5dd82578d6417cc787a3ec40be051"],["posts/1127467740/index.html","aed1079824f07d350a0042ba0b1332e0"],["posts/1150071886/index.html","73435f05f3a58b39192320a1cb0b1c23"],["posts/1150143610/index.html","b17bd3f1e7f1697dae3bda6755d125cd"],["posts/1152813120/index.html","d208c7bbef548a1d8893c8ea89e40bfd"],["posts/115524443/index.html","359ef32ad7cdffc67f2221ff21054eaf"],["posts/1156673678/index.html","53ea33acb8e781f47887fc5493f53a53"],["posts/1166840790/index.html","b5526440c487cef06bf6f37f8d0ac13d"],["posts/116795088/index.html","ee1ebb195b3145a8c0eb2282801667c8"],["posts/1176959868/index.html","96494a63516105547671d65fe0db9844"],["posts/118272597/index.html","ea84aa8ed81deb0818dd223b74ee1db4"],["posts/1190622881/index.html","b085d6c5a6760487333eb786e33bf273"],["posts/123663202/index.html","a038d93d3ee2d3d36b68cc8544ede957"],["posts/124807650/index.html","1985daf5b6cc03a6631f995dccaf101d"],["posts/1254783039/index.html","de05bf1c6f80b8f93e5030bc9d9d6d0c"],["posts/1289244227/index.html","57c0ed76f3a5b59166a0ef780319919a"],["posts/1320325685/index.html","579b77dfe6458c5f0ed61ae8e172d75b"],["posts/1329254441/index.html","24529c13bac3e2d22f93a96d5c57ee31"],["posts/1357715684/index.html","223e17ebff94ab2cc24348169e04b1ab"],["posts/1358971951/index.html","500d96e34b04ad1a4c1e4f2f10875ac3"],["posts/1386017461/index.html","0a1040445af5a739703267f074f40577"],["posts/1394521917/index.html","5e4b79a3a97ceb023555cb2d035b25b9"],["posts/1397717193/index.html","ef49100fce4024b0ef8dd94e7bba1653"],["posts/1417719502/index.html","02c59aef58f5b02a2d91bdf4125f6192"],["posts/1424645834/index.html","576a42dbc99e6845f993049d9d5b4e0e"],["posts/1444577573/index.html","28d276aae7978c593a5ee0596ed3d6fd"],["posts/1467630055/index.html","3209ad16afe2b8aaadc4ea7768a8aec2"],["posts/1478979553/index.html","1bd221245f63e45b79ade74fa9dcd320"],["posts/1540537013/index.html","f568bcdf5e9d47df5f1223f46a7ffb02"],["posts/166983157/index.html","0abe613dd12bbb1198344d239faea5f8"],["posts/1670305415/index.html","d665e70d556e20fdd57cd38e75a4d10e"],["posts/1684318907/index.html","c415e5e5075277dce5550f53c369aa31"],["posts/169430744/index.html","f2bc0caddf50258cd54beb0488157900"],["posts/1700650235/index.html","1ce404f0cf66538caed3fd835bbedfb3"],["posts/172426938/index.html","ee851bdc99b53145cc818dc1606ce592"],["posts/1836680899/index.html","07d07adb89a47c0864dce218bf9df270"],["posts/183718218/index.html","c8156ffa5712908f398312064b96a764"],["posts/187480982/index.html","c5ceaf05606d9bb55c5c2c5b68846119"],["posts/1930050594/index.html","f7ba796a6a331db28b8ea55a8f55a9e4"],["posts/1933583281/index.html","19f18fc585dcfc934aed9eed725f3766"],["posts/1940333895/index.html","4eeb529e7de6f40031b0ecb9c7070248"],["posts/1960676615/index.html","d8ac8412e3b180e9bb4e3ca88593f259"],["posts/1983298072/index.html","ce4042f1de4e5ea35c1c05bbfb81ac59"],["posts/1989654282/index.html","ece32d5895e2c71aad953b4a62889e25"],["posts/2015300310/index.html","3947fb787d59468d7e6f339c86bf4602"],["posts/2038378679/index.html","e48b6fe70083803bbd1c6b4966d6ee97"],["posts/2041685704/index.html","d8917bb13ef00415c5e2a4a626c9295c"],["posts/21112647/index.html","144dbb06f8ac01412ed0f82e3b6fcf41"],["posts/2158696176/index.html","9bdc60c7b3ce59318ee0c0492059f8d5"],["posts/2171683728/index.html","1da729d2dbd83d578ba0d84c547e2d95"],["posts/2186770732/index.html","63dc917e1df92ed541938c2f9a4827dc"],["posts/2275646954/index.html","de23198857deeb4f3dec30cfe6a38e99"],["posts/2314414875/index.html","f13d68f0c5e1a1d13a70c23e9332bcba"],["posts/2318173297/index.html","dbbef51b7825374f75e51ee7ac944525"],["posts/2418566449/index.html","bddf47ec14e709b39f838c52afe39c70"],["posts/2436573863/index.html","b4bc3208da259997fa65ad5d62c7533e"],["posts/2462008667/index.html","d82b2b3eb4dd0eb93251a48d1758eed1"],["posts/2463121881/index.html","6168c814b28be651a054f7df9842c069"],["posts/2488769283/index.html","c61677abf09547f138ba06b8001d97d0"],["posts/2527231326/index.html","4af0cd0c59f39ad7dbb3ffedd607b5d8"],["posts/2583252123/index.html","f0c603d448ccb82136586e1e71db5ef2"],["posts/2613006280/index.html","8b997ac2e4a50874f9377c536184d7a8"],["posts/2617501472/index.html","2435409d2a971d897017aec8ddd24bfa"],["posts/2676125676/index.html","1800de4e189d6776a7af7e014cca8cfc"],["posts/2734896333/index.html","fce18404aae1f3a48e062fc693c9f15f"],["posts/2752169106/index.html","9b9241906e6d7bca4f181ca09d59f0ec"],["posts/2799263488/index.html","31da4ec508bacfa57869c8f1eee26251"],["posts/2805694118/index.html","e773fe39d8cf073cc6c655f1c20d77d6"],["posts/2809571715/index.html","2612ae46f15d7e8c3c3190b75ed547bb"],["posts/2822230423/index.html","9527ba3626de7042ab6e33dd3b28d1f4"],["posts/2829333122/index.html","a1fe802cc8e96a68f12cb08f05df589c"],["posts/2911923212/index.html","03e932a85e275148010b77088f2b9e06"],["posts/2941880815/index.html","ceb0a6c68d4afeaf3aff1dc6fef84b30"],["posts/2950334112/index.html","ca983509d35ac59f1295704a1f0776ec"],["posts/2954591764/index.html","52ff995b91f455ae6a65daec549d158d"],["posts/3019914405/index.html","a353f10caf064924f8952e39b1bff996"],["posts/3032366281/index.html","33cdc20f66e4b968024d29144c0262ec"],["posts/3040357134/index.html","0e0637c6019b362d70f793e3131b1866"],["posts/305484621/index.html","afc85877ff58e70549e7422bf3ab1150"],["posts/3083474169/index.html","2b45a03572cddffc0e71c3fdfc36396e"],["posts/3099575458/index.html","c35de0ee264344d4e8bf1943ceab9906"],["posts/3111375079/index.html","b01cd4dd567a65385b7d0b70b97b215b"],["posts/3120185261/index.html","2e56a9bd72c6a8ffaf3013fd5052ad3d"],["posts/3131944018/index.html","04527092f8dcbcb0573f385a512213d2"],["posts/316230277/index.html","044efb8195cfa21aeec3d14f0170fcde"],["posts/3175881014/index.html","22579693140495802c9b9dc9a623c75b"],["posts/3222622531/index.html","965ecd4ff9abd257e0fb0f332c36afd1"],["posts/3247186509/index.html","188a5bdb1af5a6b0825f352efffc0e82"],["posts/3269605707/index.html","fc07c4bcfa6bff93a7a8c9e7b00bf124"],["posts/3291578070/index.html","46dd00e4b2f3d02698334ff73fd32034"],["posts/331752533/index.html","514acb7da60e555ca0828e6fa4221bf3"],["posts/3321992673/index.html","fa025eaf4e32dec9e72df8059df7f290"],["posts/335366821/index.html","cb70ed2b32467e4b4c8d5eb71aca671c"],["posts/3356910090/index.html","7a54e48e10febccce5a508e441f81fd7"],["posts/337943766/index.html","3784d0394adb19300b32250b5ab98b91"],["posts/3417652955/index.html","1edbc9b29c15457a291704926b77f84a"],["posts/3444626340/index.html","b17913d2e9df25419e09c47fc1e6477e"],["posts/3449402269/index.html","f5cad867bee28870c56adb88192da348"],["posts/345410188/index.html","de6872031ba1c2e7818490de7738743a"],["posts/3461518355/index.html","3f51a8c0666f7916cc97dc86d367040c"],["posts/3494408209/index.html","80973efecf2a06d68556ff814cae5efc"],["posts/352037321/index.html","1c79db2b132db13ce32707dcb1256d13"],["posts/3521618732/index.html","a7648fb921da1b6a5469867ee7f71b81"],["posts/3568552646/index.html","e00fd5b8c1ce841ea586a40f33925511"],["posts/3603924376/index.html","8623e0c176baafeecbe75af69f2a5806"],["posts/3637847962/index.html","e9478f82ed0ffbb752cf011656a65f29"],["posts/3642630198/index.html","32c15b5f9ce2bc9bd69122d849165d54"],["posts/3653662258/index.html","b0d000cd48dd9be50a9371670c7dfd28"],["posts/3653716295/index.html","09f1084ad70d0f88782281c5256f5f04"],["posts/3657008967/index.html","74823e7a9b5795206253314af0e7bb28"],["posts/3668933172/index.html","69d8457d318f565413f60569e43aeda3"],["posts/3677280829/index.html","42edb61b2ed3214f95bef1a4927f5219"],["posts/3687594958/index.html","463a086323c1412819e463da7031c3cd"],["posts/369095810/index.html","e5d99e35696ed691275af58947f20a16"],["posts/3695777215/index.html","e75064b0909350baf1bc8a9158bf2f6f"],["posts/3736599391/index.html","dcbec161288e3e4a88f7c6326fb371a0"],["posts/3742212493/index.html","c3a85e7eac08f4c4443deb78b1ac9ae1"],["posts/3782208845/index.html","877b4dbaa8441fb38f6726b6b6ea2f94"],["posts/3789971938/index.html","60b96264aee721e95f7639f29743be2b"],["posts/380519286/index.html","6f20f0b986b355be9b8f2ab1f57b9b12"],["posts/3846545990/index.html","03940e618970ee8b72af8ff6da02929e"],["posts/3873710624/index.html","149ac36d044ee6a8d0c0dcd482cdff63"],["posts/3959327595/index.html","ebad8c5f81166cdcaebbdb80ed326623"],["posts/3972610476/index.html","d6ba5d427b7b313709df427500059d61"],["posts/3995512051/index.html","448a2d4ab95391bedf41417e670bd3c8"],["posts/4088452183/index.html","5e482e8aaab4725348280a051e61b1c2"],["posts/4116164325/index.html","63030853452483107ab08f4a69f8e4ee"],["posts/4158690468/index.html","f37445aa2034761cf0c324e871912907"],["posts/4159187524/index.html","72eac1837c937fcd2dd8630b59fffeb9"],["posts/4197961431/index.html","5e32f87b7ac1383264146aa64cd71e6e"],["posts/4205536912/index.html","57c08f34a8657e86ee6d590db01ebfd4"],["posts/4236649/index.html","dcc5bb4960c31d057a53c6ddf52c9806"],["posts/426338252/index.html","e3ba192f5780f50c7c9121f2cf8b89ea"],["posts/450254281/index.html","49f47399847ff98b518b1033b2a3d462"],["posts/4891372/index.html","2c6f4a05759fa54fffc129daa5d5972f"],["posts/569337285/index.html","4969bcbd50974a40cdba005144d3a96c"],["posts/570137885/index.html","6e7786c805644a3089875f44a00ea417"],["posts/570888918/index.html","f7f3a9cb3f00d4d1d4a7c2c95a82a516"],["posts/582264328/index.html","09e13f87bf50514f1902b84d267eace7"],["posts/632291273/index.html","8be5624fb00ac375abcd2e041beaf9f5"],["posts/70687890/index.html","1d8e839bbeea66754d7f9b8520742054"],["posts/719322223/index.html","b611e691cf8493c0506a77ff55597d1d"],["posts/720539850/index.html","d51e16c090142f3982af72b13be48750"],["posts/786195243/index.html","35e3cb419d626aa9fb8f67f8897a55db"],["posts/795474045/index.html","d2fc6ba220daea7a896663a7b7f74250"],["posts/815861661/index.html","9769d8012ba43c9f99c79580f42494b8"],["posts/821259985/index.html","8ad01fb4ad1172ed0259aafe0464b984"],["posts/828223375/index.html","cc258afc766db92d099765d359ccb57a"],["posts/887585917/index.html","5c589f88442e6ada3ba613ea626b14ac"],["posts/888549816/index.html","fc0e1b198cded103ee7418a33566c6d8"],["posts/906436376/index.html","27171416dabb20c7430100bdbec17e2c"],["posts/907824546/index.html","bfde08646b2c10761c16ab9e886b4035"],["posts/927393529/index.html","56bdde095b73b3ac460b9d19ed0638c7"],["posts/94443781/index.html","bc3601df82e25f1c3e094a4f9c70b9e6"],["tags/2014/index.html","b5e36df7c7b9e628bef348f575a9de8a"],["tags/2019/index.html","4e5fefaf26b2a97ada14891f5bd656b4"],["tags/AI/index.html","64a5200593bc9e4d2149c132c930d299"],["tags/AOP/index.html","87b02bce45c8bde3646c56c2d3376f02"],["tags/AR/index.html","a0f0425b71471e5259bcd4ec525f4907"],["tags/AssetBundle/index.html","250b07ece09f2b7a03c138bd78eb9ca7"],["tags/C/index.html","05502e6c69abc5389c2d19e57e964800"],["tags/CDN/index.html","53c9279c8f792e2837051254041b7854"],["tags/CG/index.html","268fd4f7c0d76cc62f2cc44e50839b46"],["tags/CI/index.html","f7b36b10ad1e98f0613072e19bdf149f"],["tags/CORS/index.html","b9b0aad393b7b5bc6f5c0f002461c59f"],["tags/CSharp/index.html","91604a1b7c2e81d7aa075afef8b93d88"],["tags/Castle/index.html","bba0c61bbff6739771f93a4015378b11"],["tags/DBeaver/index.html","5b3f7b1a401c8e8e2c7aef1d90d6526c"],["tags/Dapper/index.html","7746b33cb3539ef8ed79589accb74f49"],["tags/Docker/index.html","818d9c5ed89c25350e838eca73a17fd2"],["tags/Dynamic-Proxy/index.html","c7106213dcb3424a54498f1dccd7dade"],["tags/Dynamic-WebApi/index.html","7796319dba180d41fc3ef8a37a84cc39"],["tags/EF/index.html","2603cf44d8842fcf3693b3ee845efe10"],["tags/ELK/index.html","350ccfcde68a6d8750b72c906365eb3d"],["tags/ES6/index.html","1d6569ef23f7f25a44eb8d8fc2e58ba9"],["tags/EasyAR/index.html","cef07ccf661f024abb9e7af33af2ef64"],["tags/Excel/index.html","557107c33d5d845c9043d12cac499f2e"],["tags/FP/index.html","b22932d9cee52d73857847b8d323f3ea"],["tags/Form/index.html","29de82ed48112e92eb1854543e5e52d6"],["tags/Git/index.html","5c4a99f5f4c5895e38c85b9918bf19d1"],["tags/Github/index.html","bb08766305781e444b618d369606dfd7"],["tags/HTML5/index.html","784acdcd1246ce40d85c7b2ac1396a11"],["tags/HTTP/index.html","676c2d14f1c728092c59a24c92c3ca23"],["tags/Hangfire/index.html","872bc7212f32d458d83a7d1fcaea8a78"],["tags/Hexo/index.html","441bbcdc723bca470ea2538ff37e8a9a"],["tags/HttpClient/index.html","d55c7b974a345958a1f9d739475e7c7f"],["tags/Hyperlog/index.html","c5d451d0ac54a2a5a01cd6ce0693920c"],["tags/IDE/index.html","e1b3b6ae0e82e5775deefe5bc26175da"],["tags/JS/index.html","7862996d7c48ab575957063bedd8bad1"],["tags/JSON/index.html","edae1f86128d24279d8a65e79a506d16"],["tags/JSONP/index.html","10a45482b5ef9f17eab2feec40f12bea"],["tags/Java/index.html","d894fc524194e2b1124843b57f671be5"],["tags/JavaScript/index.html","6f3025e708b21e9a38621480f3d99672"],["tags/Jexus/index.html","da41eb84079120bea8262dcba6a78705"],["tags/Kindle/index.html","e8e5d2911609553936de8e130cebdbab"],["tags/Lambda/index.html","6d0e4a006530c0c4823ea49a66be3c6a"],["tags/Linq/index.html","8ccf41405cbe1ce5e3ca931ca2510ac8"],["tags/Linux/index.html","a3aba9d0bcf884e2459349299c851bf1"],["tags/Liquid/index.html","0daa8db41b17d0b484d3671a7bbfc207"],["tags/Logger/index.html","db4ab2e9edd33634f05218038b98d3f1"],["tags/Love2D/index.html","55fd7b9047e24a034de365649d61d102"],["tags/Lua/index.html","189297b7569cd1c88778af99ca3c4a76"],["tags/MMD/index.html","78abf8c7240cfe1d64e0a278648ecd16"],["tags/MSBuild/index.html","64bbd40f020e418cb193b9bc78bb6dc9"],["tags/MVC/index.html","7e6315fd0554be2940adf0b990f602fc"],["tags/MVVM/index.html","57f6584f53c0b86d40efbe12865c17ff"],["tags/MapReduce/index.html","adb99b403f512949eed78ab47f2e2dde"],["tags/Markdown/index.html","432cb2852dd57761ba2d706a939844d4"],["tags/Mecanim/index.html","9714df2b52d71740751a469fb69ddbeb"],["tags/Mono/index.html","1aa20ccdb0fb0f97e602d1fbcf0ae7dd"],["tags/NET-Core/index.html","263db512cea17a0bb63e9026d72f35d8"],["tags/NET/index.html","46e59473b9448f3b8a9cac8d1848c79b"],["tags/Nginx/index.html","9470a03d8b4028f16470e2d0bdacf70d"],["tags/OBJ/index.html","34d33e23bfe98dedad52f3a4c9da4376"],["tags/Oracle/index.html","0451b58602e05f26fa4bd348deb900ad"],["tags/PL-SQL/index.html","12571a014acc7bf827469859fd3bbc0f"],["tags/POCOController/index.html","6566c8d010f69b62ab339edd8a3aade8"],["tags/PWA/index.html","6356222993672d3f11037ee48844d928"],["tags/Python/index.html","77b3f79559fe9e80dab0d5710434a12a"],["tags/RESTful/index.html","60a463eec2808885fa13e8c3f95df375"],["tags/RFC/index.html","185cee4105153dd26443a3c20adee1d6"],["tags/RPG/index.html","350c963a32a61045d66a0e95167d7495"],["tags/RSETful/index.html","abf80777525af80bd16758c65445cfe1"],["tags/React/index.html","d82329e967914ec8d0d48b372b80ab57"],["tags/Redis/index.html","8204f217b54f4e8d2e65e52651b7cf01"],["tags/Referrer/index.html","985cb49dda0c7bfea174bb8923da819d"],["tags/Retrofit/index.html","9c42c9c6756dc46ead1bd0749b3853f6"],["tags/SDL/index.html","297601af226284e608bd2c877bdf79a8"],["tags/SQLite/index.html","c61b6e18a8880d2ca8b8b378b49639bd"],["tags/SSE/index.html","bb5726bb48b1aede2980413296e58a6c"],["tags/SVN/index.html","82beeb7a7926edc65ff914eab2d9f11f"],["tags/Script/index.html","58058113c25ae960b9c5074dcaa2686e"],["tags/Server酱/index.html","dfa997976f03210e56cf317394a0e659"],["tags/Shader/index.html","54fff6cb6a56d997cce52acd091a52cc"],["tags/SignalR/index.html","f3afe6f752057a97df543cf2269a2f28"],["tags/Socket/index.html","ed97410051d5fe1417f81a7ae23a343f"],["tags/Sonar/index.html","d4a0ed92fe1253312575894e3ada25ac"],["tags/SourceTree/index.html","d4f514df3f5d89d502c9922db8f9db43"],["tags/Sublime/index.html","23c91605f92e51724929e86623c4f619"],["tags/Swagger/index.html","722a3137097fa12bd9558eb18788fb96"],["tags/Trace/index.html","3675971aa4d72d3ce559e99436b32e5e"],["tags/Travis/index.html","b268059661a593d96f915d9425155d67"],["tags/Unity/index.html","b128e6cec0b5097c7fe3c2e44290ea05"],["tags/Unity3D/index.html","00761abc4f6f93781e62fdabb6bc1505"],["tags/Unity3D/pages/2/index.html","0138260cce60603069b894a51063969b"],["tags/Unity3D/pages/3/index.html","1d390d1333aa79251b5937492f112f2c"],["tags/VSCode/index.html","c7a977b49c5b59852e6f4440fb11f8a2"],["tags/Valine/index.html","3f3d7665dabfb3df7e88913e3e22107f"],["tags/Visual-Studio/index.html","aa84ef0e145785551389575869108802"],["tags/Vue/index.html","f32275149ae42b4135529c5c22dcd970"],["tags/WSL/index.html","9d84d85b3a01193c98a4a5ebd71e9a4a"],["tags/Web-API/index.html","f0be406d6f149de57ea2ebae9ac29770"],["tags/Web/index.html","4f881cc7c45d37e0a3862f112fcc98e6"],["tags/WebApi/index.html","83f707c59bc2b6c8933cf3e7d956ad69"],["tags/WebSocket/index.html","d9e1ede0b141419de7d355f6e77f956f"],["tags/Wechat/index.html","575a31ba333691cc49751161b492bae5"],["tags/Windows/index.html","e492173f2623537184c7711b2ac5ad78"],["tags/disunity/index.html","b2908ec7d7627415e6a020f2c896f957"],["tags/index.html","6f12b8401584816f6466600b08a512d0"],["tags/jsDelivr/index.html","8cebe458e3276236431fa0f83dd60028"],["tags/matplotlib/index.html","ad3df862fb838ba396ec6198426c745d"],["tags/uGUI/index.html","9031ac364a62b6f1ace21847e8c82c46"],["tags/zTree/index.html","ecdaf4ace5119e7f50e8c36e5cbcbed5"],["tags/一出好戏/index.html","5650352f7ad85f03b0cf71280a8d9a7d"],["tags/七牛/index.html","beb69b1de36b7ba3633e6f91b6883d88"],["tags/主从复制/index.html","393fed60fd560e03bad2132d4a55ee90"],["tags/事件/index.html","f9187de45d06a4e41eb654346e77ddda"],["tags/二维码/index.html","98f31b8f62b929dbf65c3ba8ac7e2299"],["tags/云音乐/index.html","47b5e463acdea979a879b856c8cd51e2"],["tags/互联网/index.html","504689ab5c87eee8b125d217dff7f793"],["tags/亲情/index.html","407dcb747db58c72986d8670a3615b43"],["tags/人文/index.html","3e1431e062dd036342a87cc824f4bbb2"],["tags/人生/index.html","b8783963df57bb03c116b8619675ed45"],["tags/仙剑奇侠传/index.html","f6c90984f58a5f75e183cdfc540120e9"],["tags/价值/index.html","e4c36dba1e48746e4493761980fa0092"],["tags/优化/index.html","1e9a81e1ffa24583c862815c13fb9608"],["tags/全智贤/index.html","c0da527540fc393a8016152121bc424f"],["tags/公众号/index.html","ebd8720aeb935cab69f1fdc564af0c90"],["tags/关卡系统/index.html","2626ec54dc22f6dd0cb8ebc4c8e70403"],["tags/函数式编程/index.html","fd3ae37786285c0145e743b7910e2f46"],["tags/别离/index.html","8a172ce4dca102364185b6c8d4c55492"],["tags/前任/index.html","e818eb4554529578d36869baaa5814bc"],["tags/前端/index.html","651c62c87ec5cecc5695269278b6e12d"],["tags/剑指Offer/index.html","d803ba1dfc7fe76c2d8e4f0cb31f97ce"],["tags/加密/index.html","4c10e7e06293ab17d0cb6a18b88cf306"],["tags/动态代理/index.html","724acf766f67d119a1bac073270b288e"],["tags/动态加载/index.html","a89131ce25a3df61d13f999cc9324d8c"],["tags/动画/index.html","12be66ae598a2d014e4274ce05d43ec7"],["tags/单位/index.html","b66e52f162a2a0bad41d8d5f6f2c4988"],["tags/单机游戏/index.html","c0ecdab1bd745a966ec7afe5a2eb2472"],["tags/印度/index.html","5001654544a7d12056c6585dc4121135"],["tags/历史/index.html","40d202b93cdf9c77a2abeab4b83c4df3"],["tags/反编译/index.html","a6b325da3f734d38f09c07c5e13616c4"],["tags/同步/index.html","4a17dd8df9be4eb9fbb167a31f7bb851"],["tags/后端/index.html","a438dfc752623b70da5c01dc43c1d4e6"],["tags/命令/index.html","01f34855365769d23f92e1dbe0f09658"],["tags/和平/index.html","2e5f75c42e6c7a56b154b66eb290fab8"],["tags/响应式/index.html","4a7b8e96b536c31081e7a3c5e4f4269b"],["tags/哲学/index.html","3061e698da9ee82fbc41393732b9f977"],["tags/回家/index.html","1865db5f21211c486c9bd22145bef66a"],["tags/回忆/index.html","b7f76f0fa3db80ba06a7888f067c36b4"],["tags/回顾/index.html","c8fe025c9322329d580b131ed69e3498"],["tags/回首/index.html","04b87fc82573109ea0a003657d05e9e7"],["tags/图床/index.html","53f54f3b63d35b8edd0887251b2351f2"],["tags/图形/index.html","b7fadbb5ec89df38b6e447783631698f"],["tags/地图/index.html","2442763403dfbe7f0de5fb6097ad3d75"],["tags/塔防/index.html","1225e548e6d47efb75dfbd110b3dddde"],["tags/增强现实/index.html","b9f66eb00d567a44867284161b2ccb57"],["tags/壁纸/index.html","e6a3c56e6f5efc55b65bb04d576e2988"],["tags/夏目漱石/index.html","24f0002966e02f5c1bfc9d1e3e5e7a2f"],["tags/多线程/index.html","689d594b77b4bd3f7ce4143ff239f2c6"],["tags/大护法/index.html","c0670a296c08d6ecc3ae52ed63a8ed46"],["tags/委托/index.html","89f72203e499e5b64232266d7c38b55a"],["tags/孤独/index.html","5b66ca90a53c501386fed79652bf7639"],["tags/审计/index.html","027b48f8c9ae49741434595b16f75bda"],["tags/展望/index.html","552bb4067df62fd86e51076c96f7a3c7"],["tags/工作/index.html","6beda1838690b435666c93de56e0dc3c"],["tags/平凡/index.html","23ef7cb9e5ac965d0bbe045b723f7a9f"],["tags/年华/index.html","35bebc28a915477ed25b639f90c3bf37"],["tags/年度/index.html","50ee3e768699e35211e12dd184dd6b2b"],["tags/开源/index.html","2880b2f911f4457954ca6dd4a7a5fae8"],["tags/异常/index.html","e837db75cf7300f1b558a14928c864fd"],["tags/异步/index.html","0c3ae5b12dc414bbf2ea245f417e8c5f"],["tags/引擎/index.html","ac53d550d7eaf0e6598a5fe919c3d216"],["tags/影评/index.html","cc7823d7d3c1a8093d0836b23abd52c5"],["tags/微信/index.html","cf147178e1ce0d1cb05b54203a37b0ba"],["tags/微博/index.html","7d3ddd14ab44b0f23c83ed07db5d2ac1"],["tags/心情/index.html","cb2319ad70189970e35882157751bb70"],["tags/思维/index.html","c04caaf8f717b75634c2ffcd40e97787"],["tags/总结/index.html","74ed5cc3e3b123a745a5e3539afa330e"],["tags/想法/index.html","5280aa511761158ed33cccd2aaad2b36"],["tags/感悟/index.html","574c239b7475c2abdd8c98314f306283"],["tags/成长/index.html","c68a4af1984d7cbc08cf6bda6434faa0"],["tags/我是猫/index.html","9230f2b0e5b90560c6326d754ab8fb4b"],["tags/扩展/index.html","d94b499bfb87453d22cb84cf2a61971f"],["tags/扩展方法/index.html","a6838e31ed43f2c61384e148a70d002f"],["tags/技术/index.html","5371f95068b04142225a6ab765782e04"],["tags/拖拽/index.html","e87b2066599998ba3c498742642f4441"],["tags/插件/index.html","eb50237bbb80ffb4b07837cedaf5a767"],["tags/插件化/index.html","4e6f950ad589d1948dbd91ca53f87ccd"],["tags/数字/index.html","570ff73ca02bf6026935d97da4086ae8"],["tags/数学/index.html","d2c11b2bac513dbe010d4f87e603cabc"],["tags/数据/index.html","64dddc6f10f859c3697093e7cb0ce7df"],["tags/数据交换/index.html","249805982c4de877ee965be02f6c3223"],["tags/数据库/index.html","b758d40410afaa995f46462a384548a9"],["tags/文本分类/index.html","0fed0bcd991e735877b979c21bfe1d85"],["tags/无问西东/index.html","06ed941156997b707878cc4a0f8948bf"],["tags/日剧/index.html","ab60bfd6475ee034d10b978af61b7017"],["tags/日志/index.html","3f742b01a294b4dff8380dbaf3fe2300"],["tags/日本文学/index.html","a1e266d1c56b3f80d9845fa07628d1b5"],["tags/时区/index.html","0fdd3319ef3252381be2339b604d4164"],["tags/时间/index.html","5b0bdb4e984515e5665c852ef756f68e"],["tags/服务器/index.html","baa429e69a4d460072af561b23ef332c"],["tags/朝圣/index.html","962d44cf7b03da321b18239b35d62d2b"],["tags/朴素贝叶斯/index.html","dbc68031306e7946e09c4d3cd17add3b"],["tags/架构/index.html","df8bbf4ba2110c749150acb10acc489a"],["tags/标注/index.html","e5841f56c6e937caa0295245729cdd78"],["tags/校验/index.html","b129d075410a541b1693c7fc128e91ef"],["tags/格式/index.html","2f564bcaebdb113ff1b0441440185207"],["tags/格式化/index.html","1bdd133fe685976e2f4e2320b1ba8860"],["tags/桌面/index.html","2ca64ba8af4a8b4ca4863ff21de2347d"],["tags/梦想/index.html","f9b890f2f5547bf5f04e986f5f61b248"],["tags/概率/index.html","31de867cebc56e7d01e665f4e7755409"],["tags/模板/index.html","285835322225c237122e683a6e1c4001"],["tags/模板引擎/index.html","3ccfde8ab431791b67cfb25dc0df7cbb"],["tags/毕业/index.html","28aacff11ddf99683fc86e370f7c4b67"],["tags/毕业季/index.html","7f5d813655830dc8a16d979870098e62"],["tags/消息/index.html","803b04366a48b699acd488351494826c"],["tags/游戏/index.html","434190153615128179c6468e6f10e22e"],["tags/游戏/pages/2/index.html","8bb398ee963488e58b70a57ad11eb74e"],["tags/游戏开发/index.html","f6aa31de3af2070e4f4bedfe39805d7b"],["tags/游戏引擎/index.html","346b972ef240e6b0e917813b7c27617f"],["tags/爱情/index.html","ca1c8d450ad3d66f974942e1f0f51539"],["tags/版本控制/index.html","499e23a813eb3f16f39cb8c352aed429"],["tags/版权/index.html","51bc6cd14e5d7513ad6892274502a3e4"],["tags/特性/index.html","2b32135d9bdffdf678b2d5304909a134"],["tags/状态/index.html","08ce0297ac719febfad54385c2c75743"],["tags/现实/index.html","c6c40a438016bd320b449bfcaad5f238"],["tags/生活/index.html","bbf32a4d25ca67cb9755fbbb3857a901"],["tags/电影/index.html","2e6061af63feba6b17ddf7e48fccd65b"],["tags/画家/index.html","fbb782b538418871344729b8c6baeaf8"],["tags/知识共享/index.html","601f37b27a516c3ad8b60ba04791e224"],["tags/矫情/index.html","c2f806ffb5e92ec52faff7f019be1749"],["tags/程序员/index.html","550073afe30c1a47cd146bb4a9009842"],["tags/穹之扉/index.html","785a489245775d12c940bd42dbf8f0d7"],["tags/穿搭/index.html","2549fb441e14847cb02884eb4c475440"],["tags/童话/index.html","e6b7517665ee886f2368d12d1883aa8e"],["tags/笔记/index.html","aa1cd64508e7933bb04940c4efeca873"],["tags/算法/index.html","19038c29c2fb84a4ab62bd75c8278eee"],["tags/米花之味/index.html","7305a5ee07961eda1d7dac282a0dcc76"],["tags/缓存/index.html","a149acc46683325d9d29fd400425ed90"],["tags/编程/index.html","ab6dfab18c9c6016ce4dc23dd30de55d"],["tags/编译/index.html","ecce5c7984b19f2a29e2990b1185bb89"],["tags/编辑器/index.html","569b2ad64295b2e327888dec45a2f0fa"],["tags/网易/index.html","7dcb0816c1cf7f00c783f994ed969320"],["tags/脚本/index.html","d38ed4d579f2e97883f25ea6db08fe94"],["tags/脚本语言/index.html","3411c51b6fc7015cde93d3fd5b1b28de"],["tags/虚拟摇杆/index.html","75e5e5b8525b430416f858c177233172"],["tags/蛋炒饭/index.html","ac2a46e1ffec2b0da74356820b0dc561"],["tags/表单/index.html","abd5ef726cf58e180fc5cf1e75db5bb2"],["tags/表达式树/index.html","2f319aee4f6c69e55a4ee6a98728f21c"],["tags/装饰器/index.html","0ebc90dfb552209c4b486cd3e7beb44d"],["tags/西安/index.html","45dd52b975199b637c3894cd4ee97df6"],["tags/计算机图形/index.html","748e289cca7ae78919ac5805cdbd6ddb"],["tags/设计/index.html","1a7ca4d58bee5c7118fe35e5d194c3ea"],["tags/设计模式/index.html","bf2989d81895edb214f67b15c5831603"],["tags/访问量/index.html","951e8818148a33b77a1ca2cacc0b39f4"],["tags/评论/index.html","6d72a1de900423937e70d7689fbc0a23"],["tags/词云/index.html","ac771d06e24bf65e233793630e585137"],["tags/诗人/index.html","6ef0891ae4ecdd20c8acf16c7b97441d"],["tags/语法/index.html","bcc8dad4aa73a902f5264ba19054ef68"],["tags/请记住我/index.html","5995a0b8d50957619273dedeb9bbbf47"],["tags/读书/index.html","7a64a693b6956f995eb5747d78a35640"],["tags/读写分离/index.html","b9fe5cc616fc5205468dfee79bee14ab"],["tags/调试/index.html","01eff50065ef1eea25618c01d89b2d14"],["tags/贝塞尔曲线/index.html","b740d8a54d5d66a04b06e636046960b5"],["tags/贪吃蛇/index.html","51e5c5464c46d950b6b1f5ddc4839b80"],["tags/资源提取/index.html","287f6bfe6e923c20832ef901f8191a0d"],["tags/跨域/index.html","d46b50c214d006196c7aeaa26f1a348f"],["tags/跨平台/index.html","4126082164c7a1489dec845cb7f8084b"],["tags/转盘/index.html","c68d8bb2f37ebbf93216fc07f7dee9ac"],["tags/迁移/index.html","2488d7971b8d767ede915b7d05c974f5"],["tags/通信/index.html","30ab95543b896ba2c791d8452cac891d"],["tags/邪不压正/index.html","f98b3ab7889aa8c165bc9ce6fa86dc59"],["tags/部署/index.html","d6f189affa90a426da7354708cfbdc88"],["tags/配载/index.html","53d74b5a9a996286359614a3f86546bc"],["tags/重试/index.html","2301f7301b86324ba43404b99c065df6"],["tags/长安/index.html","b3a52cddec77013fc12d789a0c396322"],["tags/长安十二时辰/index.html","155c26c4ad77371fd822b5f6137cd579"],["tags/阅读/index.html","d02f9c187413f4ac9769eaf54c3c459b"],["tags/阿里/index.html","9c1ca4cac9f7a71f941cd85c8bc5d7d8"],["tags/随笔/index.html","367b25ff29871876cf5fab0c4972f631"],["tags/霍金/index.html","6da6137ce5246a712895849d8de6d360"],["tags/青春/index.html","f71940d32681f9f46f8db63caf83609d"],["tags/面试/index.html","5437d2b35ee2f41ac8a023394c373dd8"],["tags/韩寒/index.html","94fb9b43244e2cbc159ff6530590831e"],["tags/马尔克斯/index.html","9cba41a627a894596483bc2f21157dd7"],["tags/验证/index.html","c40f3031bfa62684e86510266cf37f23"],["tags/黑客/index.html","8832af19b936ad468ddc46aad0299e0b"],["wiki/index.html","498c3c484504d47aaab386a5beb6d39c"],["works/index.html","951c2ddbf205e5bedb00ca899681167e"]];
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







