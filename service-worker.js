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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","9aef4840430b196fa194b6d1d378d67c"],["archives/2014/12/index.html","b7f61a093195c71f02e973bdc96769bd"],["archives/2014/index.html","9a522464497da5d3bdb78635f6167edb"],["archives/2015/01/index.html","9f235a001f6bb04b22f4b6e99eaa8964"],["archives/2015/02/index.html","e9d6e1c3b84ee6c8cf3ff31ad330df94"],["archives/2015/03/index.html","3512557aeedfe98f8633c4550e2fd7fe"],["archives/2015/04/index.html","d1686265cb5f9c2fcafbddd096b9b826"],["archives/2015/05/index.html","5e68689c59a7bf94555b44f36c5b4d30"],["archives/2015/06/index.html","e32fc8a0f213df13f512388d55dc33c0"],["archives/2015/07/index.html","0913d2a10e986644cf7deb737ee62f3b"],["archives/2015/08/index.html","b3550310b8fb6b94ea6ee40978f86c14"],["archives/2015/09/index.html","f1d22bd65736d5b1cbb0b9ebd2e9ec08"],["archives/2015/10/index.html","ba6beb148def679291541560ae63f551"],["archives/2015/11/index.html","c617e5b6eee4f6a31a485dea7354e41d"],["archives/2015/12/index.html","94ab7db2ca48572a29fcf31b04b22a2b"],["archives/2015/index.html","ef8e3dd240e320a523582a29df2962ce"],["archives/2015/pages/2/index.html","4f744d946207aa4f4c853dee93e3005a"],["archives/2015/pages/3/index.html","1d6142bee8b9fa92efc84a04841ac773"],["archives/2015/pages/4/index.html","477e025f001b6fa485a94868261e153e"],["archives/2015/pages/5/index.html","0978bf6cac9dd299b569463b9dce5d48"],["archives/2015/pages/6/index.html","2044632002fca10d5217da0ee51494ec"],["archives/2016/01/index.html","7e22fbaa1a265fbaa01c1abeef7edf5c"],["archives/2016/03/index.html","5d9de1dc83fb1d987473d430685c8ff1"],["archives/2016/05/index.html","4dca9ecb61f864d58d2170dc59eef481"],["archives/2016/06/index.html","3137b767ef432df12973ecf407bfce26"],["archives/2016/07/index.html","3d2cbf370ee4b79c95971602e264bb9c"],["archives/2016/09/index.html","3d5bde3dfc289767bd91e791365a1e3e"],["archives/2016/10/index.html","42c10e213dce9b8c48dbf93bc59e153e"],["archives/2016/11/index.html","b95e3f40fcf4cf1bf84bda7dc302403c"],["archives/2016/index.html","40dde276639e37ff97d07e3f51af3d6e"],["archives/2016/pages/2/index.html","9a054c61955eeed792431ccbb033386d"],["archives/2016/pages/3/index.html","2a6de824b2e5734d540ce613f9e4a7ff"],["archives/2017/02/index.html","2e6fb218cdbd6f650fe67267ac9b5279"],["archives/2017/03/index.html","7867c3591b53c854a2d39a38fef479eb"],["archives/2017/04/index.html","276951730d31d325e2242b46e53638d4"],["archives/2017/05/index.html","e4a4c091aa00d8b3e6fb6be9e7783a57"],["archives/2017/07/index.html","2fc1764a3a29088d601ec2fd346513cf"],["archives/2017/08/index.html","0a592446fec78fd9f20ce7743157cd19"],["archives/2017/09/index.html","aec4f13dc55058986ec2c8d04df95e9a"],["archives/2017/10/index.html","05edbd5c07bf244a80f727ba3f2d7cda"],["archives/2017/11/index.html","5521921a16923ffae4fea2ab9c0e2edb"],["archives/2017/12/index.html","1ef309e3e6d5fb9db45215e538c9fc4c"],["archives/2017/index.html","3f14e74a7677e9a6b7c524fa8c88f9b8"],["archives/2017/pages/2/index.html","17389ce5a3cdd7e1defde7a90298ae10"],["archives/2018/01/index.html","680969fc2ffda25fccb3f1bfc0fa12b2"],["archives/2018/02/index.html","79713eb51b0a259f2e30c09e488cbe3e"],["archives/2018/03/index.html","1c3d05a7123307446f2a59c1bbff3f2d"],["archives/2018/04/index.html","f2bc7404397826d276a66be4ef5512f1"],["archives/2018/05/index.html","549b4f2164e5ee28b5571108b79ceb9c"],["archives/2018/06/index.html","f330f4929fd2ba9893be84cbe6c94d80"],["archives/2018/07/index.html","15424827f1ec7cdbbd975935242cb8d9"],["archives/2018/08/index.html","f0b8c22c6aec616439fb2add21099b96"],["archives/2018/09/index.html","2a3f535ae7a3742663015a20373001e7"],["archives/2018/10/index.html","2d62e25afbc3f4adc52e2f5303860686"],["archives/2018/index.html","5477515806025f59e5d19c221791ab62"],["archives/2018/pages/2/index.html","8f3c501f56c318854645e61786426df9"],["archives/2018/pages/3/index.html","7766bb6db718447cd170747edbb47b80"],["archives/2018/pages/4/index.html","8184758ebc296184266b2d55733acbd9"],["archives/2019/01/index.html","849c4baab8a982f7f6e3cb415b8bd29b"],["archives/2019/02/index.html","405a23333274bbc6302ca75d14b54b7a"],["archives/2019/03/index.html","098707b632af358647054242706ddef0"],["archives/2019/04/index.html","1cee21693cc44dd28e73ecb977189665"],["archives/2019/05/index.html","3abca9a492258e331a84a61214a1ac93"],["archives/2019/06/index.html","c2a7947fa0c5bab99d1611ddc8e12e28"],["archives/2019/07/index.html","d78e89348e18481cd26cb532e33cb1be"],["archives/2019/08/index.html","905fbbb9de70b24283914be0087c2efb"],["archives/2019/09/index.html","513749f43b56063582b43110bdcd1e9f"],["archives/2019/10/index.html","68740c37821b6643af0476fcc23a8348"],["archives/2019/11/index.html","5b0554cafea399a63139728e804a9ead"],["archives/2019/12/index.html","1ccdd896e8920835fa77136082873048"],["archives/2019/index.html","0bc5d7346e52134e95a5a8bb2c561d85"],["archives/2019/pages/2/index.html","4f927fa7196c04de0439bd42faef31bb"],["archives/2019/pages/3/index.html","82a7d795be0eb8019b2248448c5f5f71"],["archives/2020/01/index.html","27d4b26cea2d1dabf4a772a2c02f2de7"],["archives/2020/02/index.html","313121ebb421faa20b539511639e9fde"],["archives/2020/04/index.html","aef523bc9ac326f437bc5b90b358da55"],["archives/2020/index.html","cd7d2f1fe852a6eea2c0d279bdcbf36e"],["archives/index.html","5fad3ba8fdfd2710d9aeb91cb68c4bb8"],["archives/pages/10/index.html","be14343aeed03fff1bd5c69616d1c4b5"],["archives/pages/11/index.html","47cacbf23f81c9ed5586c26d2fbe54a7"],["archives/pages/12/index.html","3991d4ce9459a9448d480ac8c5464fb7"],["archives/pages/13/index.html","5a7244f0fdefa29cedb0618d08990252"],["archives/pages/14/index.html","5d5c565d12be5b70036e2d8b9d30dfe6"],["archives/pages/15/index.html","8be52232562f279bdb598fce03c2aee2"],["archives/pages/16/index.html","a76036180bb0a903eabb0ef0b7890932"],["archives/pages/2/index.html","735e2a9f3f5f9dccd40bbad4ab9cc392"],["archives/pages/3/index.html","ca9f913cfb1bde016b6dff1272bf3c90"],["archives/pages/4/index.html","ca821a1559a2aded9ab629ea6b8a4bf6"],["archives/pages/5/index.html","b0a7abb6a6e685a54d9576b7a0a4a2e3"],["archives/pages/6/index.html","0b60c9a82f4f86e8eda16a30e1cf535e"],["archives/pages/7/index.html","9e1e911f4856c9c51e9d57588c29e3b6"],["archives/pages/8/index.html","e6fa818cc89e8b732403dc9b8f5356ad"],["archives/pages/9/index.html","d963b7e0103eada47c4db32b8341a3ec"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","83b458f574cf34862b972e7757bda8ac"],["categories/Unity3D/index.html","1e7f65d3d5dc9c7af98f14f8cab2d0fb"],["categories/Unity3D/pages/2/index.html","cb856d004334b3676761248686416a5b"],["categories/index.html","ccc58af85411bab35cb2f73de84cd130"],["categories/人工智能/index.html","311514c8df6d39f8073673de25c5e3a4"],["categories/前端开发/index.html","0fcf7df7ac4f60d74bd23846143e1ede"],["categories/单机游戏/index.html","2a6b3c5f9d3615d68206143071e1a16b"],["categories/开发工具/index.html","64648f8a34c4793e293022541fe33d4d"],["categories/数据分析/index.html","fb271460538ea1c5917360c170bda917"],["categories/数据存储/index.html","9d2496c84920f41cb5efef816849a403"],["categories/游戏开发/index.html","74167b76cd939625221d1ef700ee202e"],["categories/游戏开发/pages/2/index.html","04215f19c5b2ab4b9c68693911c6fb38"],["categories/游戏引擎/index.html","1368a8804789f201de04f4556b7b5d67"],["categories/独立博客/index.html","bb54f41de19640db9c6b0f344b8aae9a"],["categories/生活感悟/index.html","56a83f8353de25c0aff173e5862e5058"],["categories/生活感悟/pages/2/index.html","f5b4ee68c7f1e41aa73940bf1c01819a"],["categories/生活感悟/pages/3/index.html","32709ba1f7ef44653c0bdd1021366b9f"],["categories/编程语言/index.html","beac2f4694320748a7887b958bf3d5bb"],["categories/编程语言/pages/2/index.html","5741ea1c71f6cdeb3d50e7648109e740"],["categories/编程语言/pages/3/index.html","b93aad657c925e5f03bbf68dd8c04d7e"],["categories/编程语言/pages/4/index.html","f05b6f6d75e4c21486547069c7dd2964"],["categories/编程语言/pages/5/index.html","9aeb0980191be0aa89f1dc386f729586"],["categories/读书笔记/index.html","aafbfa66b68b337bed6ac743cf6693ee"],["categories/读书笔记/pages/2/index.html","0dfa04c455609fce45585c85db702626"],["friends/index.html","949be2a861fe95812eb619e2873c0e72"],["index.html","40830bbe9681c4eab956a3006a1f51ed"],["movies/index.html","1d0433212cc5f07eb48e205cf41e17d8"],["musics/index.html","a674e2bd7936b1487a93ae949e5edd1e"],["pages/10/index.html","0b4f5959df8c4d3978e995b0f7f48114"],["pages/11/index.html","540ea07ac7fe969da799c3737e1c9929"],["pages/12/index.html","7b3bf25be3ae20f4670a8a3c276ee8b5"],["pages/13/index.html","14b9091edfe276f6a559cfee40b064fe"],["pages/14/index.html","bc7ee7b67c341cf699d6a75ca51e17d9"],["pages/15/index.html","d1b5529ea9b6bfc6f4c307dcbe9820e7"],["pages/16/index.html","3369adff704faf364c01937e0c5d3d43"],["pages/2/index.html","6754aa3b9f96d8744a8c76b3029ed962"],["pages/3/index.html","96390cc7c8a28d4231f7a99857e216ac"],["pages/4/index.html","03f3c7a9641f18dce550f6987df9d75a"],["pages/5/index.html","d3c5fed9ba9b97abc90aa97210ac0dcc"],["pages/6/index.html","08f464445aca32e34eea4f574de8051b"],["pages/7/index.html","015db8e137f332472bec471fbda3ea83"],["pages/8/index.html","a0f512df93a6aa8416662af77bbea603"],["pages/9/index.html","dd0d635ba279aa1ca2ba991fc6fdaec6"],["posts/1059499448/index.html","dc78d56d322d7d594fae30dc0669e4f8"],["posts/1071063696/index.html","a5bbc076cb7ef0e58cfbbccf91bb6976"],["posts/1082185388/index.html","b7d276a4e21feec23b38059fac1d5053"],["posts/1099762326/index.html","6194b616fa36c4d4de91ed0fee41c17e"],["posts/1113828794/index.html","ff8258cfcc19549ce7bc3d8bbb0deb35"],["posts/1118169753/index.html","f740455be4eb955f8d792ac93ebc54b7"],["posts/1122710277/index.html","00d8e49fd7fe7c4a63697f014a9c546b"],["posts/1124152964/index.html","e4cce6d3fab0b9f833334f8b339a5dc0"],["posts/1127467740/index.html","515b444249a0c749322ce4900870b9a0"],["posts/1150071886/index.html","8ecefe93d9d95663ca829dbbba69d6ef"],["posts/1150143610/index.html","aecda9c1d6c2c3b93865e0cd2744629e"],["posts/1152813120/index.html","678591a631ce5704dcb428b9f000a184"],["posts/115524443/index.html","387c698f882ddf61d8d22fd8fd5ed991"],["posts/1156673678/index.html","e17e29623928a53b150dd91c4acfe247"],["posts/1166840790/index.html","7ce09d92944201ad92ce928e230e0172"],["posts/116795088/index.html","195c98b3de08a10d82a26d82aa9691a9"],["posts/1176959868/index.html","55e43702c2d3a1534712030525b41302"],["posts/1190622881/index.html","f3a151858d49fdd3930e10453de6c677"],["posts/123663202/index.html","ecc177eb934cad6f049ec07e12b01d30"],["posts/124807650/index.html","461aa4ef83bffd6f5e8e9e267a44bf98"],["posts/1254783039/index.html","997284f51162e4f0192ed4d62c4f4373"],["posts/1320325685/index.html","e7e565503436464f6e1b07ad16b1aa0a"],["posts/1329254441/index.html","3e3cd9df92484a3d74622d793273e51c"],["posts/1357715684/index.html","d4ece5ed935adcd92f097789e0f76adc"],["posts/1358971951/index.html","07db5addd84e9a79d3962e07dcdd3396"],["posts/1386017461/index.html","7730dc30dcc7bf04a13589f67f18930e"],["posts/1394521917/index.html","af178cc760fb460f74da621de55c95ac"],["posts/1397717193/index.html","b6568464082993fc59fb0901ff4c1547"],["posts/1417719502/index.html","f4c2d288abcf5afacf2510c148ec8e6b"],["posts/1424645834/index.html","ac43e43570abfe8fd7318c71eae5ed91"],["posts/1444577573/index.html","97c27d4f454066d28aa2ade6250d4e3a"],["posts/1467630055/index.html","f0349f3ddf5b3cd9ecdf5229a0904608"],["posts/1478979553/index.html","23a2bd1729d46303938d29f6b9b928c4"],["posts/1540537013/index.html","9f6f84f01e60d4f102548f32846b07d8"],["posts/166983157/index.html","d7688a621065312a12d8e02133007110"],["posts/1670305415/index.html","8952464c65a1e0881c7dffdb56a0801f"],["posts/1684318907/index.html","e67790edd7425eb59ee370ab0f04534c"],["posts/169430744/index.html","1015a85f0fc1b76ffa30c589e8d8fe0f"],["posts/1700650235/index.html","302c08fc26993948e3316036c90f34b0"],["posts/172426938/index.html","402cdff4565dd31ca43dacc85c46439c"],["posts/1836680899/index.html","450f820f6483cf245dc81e8c7a7e4a89"],["posts/183718218/index.html","2e6981ff6e188eac5d835b2a9a0673c5"],["posts/187480982/index.html","d6d8c07dfb65d48625ce7cc2b11e5687"],["posts/1930050594/index.html","1b87d9d3fa169f30a547abc99f312d0b"],["posts/1933583281/index.html","2eef82cd0824f5abe046a752c2fa491c"],["posts/1940333895/index.html","b5e9a3a30ad554e6083eb502aa167cb5"],["posts/1960676615/index.html","d6ef539891d80ab351b8d3f4f99701db"],["posts/1983298072/index.html","77af1a87040d41c9e7a8f1fc0122cb0b"],["posts/1989654282/index.html","f08335a8b1c49811877a8488a2058d78"],["posts/2015300310/index.html","6d6c5e42b68dad39d2df15ee17d52e87"],["posts/2038378679/index.html","bcf9a59565f9fafd1c6216e815b0db59"],["posts/2041685704/index.html","75e685dc45b7a0515ddb30f6e99bf1b3"],["posts/21112647/index.html","56c275d76007dcd32ac6391505fbc9e9"],["posts/2158696176/index.html","b46b10974dcae3fafbfbb29a4738684f"],["posts/2171683728/index.html","57ee2feb94b81c974cdb8ed75401278d"],["posts/2186770732/index.html","531f5bc2d75c80dd5a2547e5dc31037f"],["posts/2275646954/index.html","c60d58b1ae2fc86d90332aac39db581d"],["posts/2314414875/index.html","6a42538fbb85eb2b8acd2edd5c80de7e"],["posts/2318173297/index.html","a15a128a619440fb9b2703e497fb5b10"],["posts/2418566449/index.html","7f2bef8f930ab9e825dfc1fde780fc7c"],["posts/2436573863/index.html","66c981722c390277058cee3487b38964"],["posts/2462008667/index.html","a57c927d078e9c8f4d89fa63e5ce1c8f"],["posts/2463121881/index.html","777b9bb632a21341bbfd3ff055345258"],["posts/2488769283/index.html","9b85b0c4ba53b8adf1aee88abba7ba79"],["posts/2527231326/index.html","8b7e7783495f35ef6f7d3d5c5b4aefb6"],["posts/2583252123/index.html","f4341deb8cc735f06a4ed9b9e5a1b819"],["posts/2613006280/index.html","33b76a07473369272f19553073e86f32"],["posts/2617501472/index.html","f126f2c394e121d7a175ece4a2a6af4f"],["posts/2676125676/index.html","cd6e6e056338963082c2f3711840eb61"],["posts/2734896333/index.html","ba0436617e5969c3278f4f49aa06081c"],["posts/2752169106/index.html","f60cd7df8f6ba04e231e874c4f261513"],["posts/2799263488/index.html","04f12e779c0087e20d9dfbb3856da06b"],["posts/2805694118/index.html","eae7a9939a02a7d0cd6963c87093eaa5"],["posts/2809571715/index.html","adcb31ca9c8451cbb11477cec480eca2"],["posts/2822230423/index.html","1e2ce7dc60cadc8845eb581f786e34a6"],["posts/2829333122/index.html","49268d796c15585def062d2848a8e819"],["posts/2911923212/index.html","b9e5bbe502a676d3a9875bbef432786e"],["posts/2941880815/index.html","4e8e4cf4d3e61ff20e4a8c9dace100e7"],["posts/2950334112/index.html","4519117a8057a7597258ef4bccccc52c"],["posts/2954591764/index.html","0d3958b38a20d1f7edf80d9163edcb88"],["posts/3019914405/index.html","665abe7766bed91d85c92b6b45ffd5b1"],["posts/3032366281/index.html","4f07b504cab16109851e6187ec181915"],["posts/3040357134/index.html","af79031ee7d53c65323c8b99e187e54d"],["posts/305484621/index.html","83f2a2196432371fa17bf5a2ab48d8c3"],["posts/3083474169/index.html","85ff6a5a367d1abbbb9c2f4e44465c23"],["posts/3099575458/index.html","95751f95ec98f27c82ec893e4743c1ea"],["posts/3111375079/index.html","e160de4620262e97c77372d1741333c1"],["posts/3120185261/index.html","ea99c476c91b679341b3a5e81be6b765"],["posts/3131944018/index.html","df2885ad5e92f314a1e60ee63ab77d07"],["posts/316230277/index.html","f7380e26fa7360b99fb65ed4dfe7292a"],["posts/3175881014/index.html","6cb487abe0f490cd70d8c67a8490267d"],["posts/3222622531/index.html","9996996c3610efaacd4902aeb236d3d2"],["posts/3247186509/index.html","5147e27ce2ddc019abae2c9945ff828d"],["posts/3269605707/index.html","a82e46301153419881f5d4cc7d15de94"],["posts/3291578070/index.html","a9dc1dc3b263dba9b8605cfc2952a806"],["posts/331752533/index.html","f7de98cf5a7f3b96dff7ea2d4ad95c92"],["posts/3321992673/index.html","dc0d0c42fda42a37666583e7fe939484"],["posts/335366821/index.html","872057cc697aeccbea6446436906750f"],["posts/3356910090/index.html","c9be660163e341a1b2a7f551d57d484d"],["posts/337943766/index.html","84554b2fe2ff623b7b676af351af84ce"],["posts/3417652955/index.html","d4be0d1a598c8769567a36a56d1f5e39"],["posts/3444626340/index.html","89f9690e7204873693cd8f239f557fcf"],["posts/3449402269/index.html","7e0a6204f301052cce70e58991737b6d"],["posts/345410188/index.html","83386d39f564f6e2d790a2cecb1bbb01"],["posts/3461518355/index.html","aba6324a1fa3096ab01ae6bdab57d836"],["posts/3494408209/index.html","e9522e7601a4b5f6226f5cd98f1f3315"],["posts/352037321/index.html","247f4d2546364a00b414110d647f79d5"],["posts/3521618732/index.html","376539fc2cd78ebf1f94de1621a8b3ef"],["posts/3568552646/index.html","b71106634feb9c73c7f1a2faec39b68e"],["posts/3603924376/index.html","750e6329624ae79d80921262d57c9d43"],["posts/3637847962/index.html","26b7057c97fa174c7d0f361224dfbc76"],["posts/3642630198/index.html","edef3a615169e404fca38beb95a05b55"],["posts/3653662258/index.html","0eb2c63db871fa839c767d2b586cdc77"],["posts/3653716295/index.html","bff30d6864330b019cab598dbe890827"],["posts/3657008967/index.html","a024dc5fcf2487ecf291858bdbd46f7c"],["posts/3668933172/index.html","4aafa0b5f76489283c4f223172c6c86c"],["posts/3677280829/index.html","d6ce4d05433ae13bae8a39ddc61ecf8c"],["posts/3687594958/index.html","0f46018eeb4c6f5a2153a62290605043"],["posts/369095810/index.html","b93821f51a7c1ae0824d70a1ca010f71"],["posts/3695777215/index.html","a662627276e3d6b9cd9a35b0ef689fc8"],["posts/3736599391/index.html","5701ffc6a73ebaad8556f9f5d1f3812f"],["posts/3742212493/index.html","df694c54f2b8565047aa1250f5f47990"],["posts/3782208845/index.html","28379409641aec8099268bae545ff921"],["posts/3789971938/index.html","56c3bfbaed04e0c716606bc196bc9dfe"],["posts/380519286/index.html","5b7b2f112c2652712c176885a688ce34"],["posts/3846545990/index.html","1ecca52dfa16e858bb471eebdf36aac5"],["posts/3873710624/index.html","84fe65901634edef089a51031243ba5d"],["posts/3959327595/index.html","cad18d3627768c541a5ddb9f7da34d77"],["posts/3972610476/index.html","8b561e031c68866a394937a46cdf3697"],["posts/3995512051/index.html","77d340c41b9c6180ae4e699ae7b6fb08"],["posts/4088452183/index.html","e552578ce6eecc87a86486a91f2f801f"],["posts/4116164325/index.html","7417c908136acc88868da43ae058ac2b"],["posts/4158690468/index.html","d33c7cd9cc06e541617f17dfa2d099c8"],["posts/4159187524/index.html","576dd4cee5cac51b3d8fb5a2f2eda0a7"],["posts/4197961431/index.html","d271801ad94e85131cf5c30e8c049b60"],["posts/4205536912/index.html","fd95f88017ee7427e0c2ba189a73eb82"],["posts/4236649/index.html","7dba395643c8b3b9a352975bd1012925"],["posts/426338252/index.html","78ef75bdd1694cb1f32e31f6d1de84b1"],["posts/450254281/index.html","7416056264e0a396e7ab9e81cf6fdf54"],["posts/4891372/index.html","cb12f4e45649cfc9246c643638a4c6b8"],["posts/569337285/index.html","38293a70f606de24a8db101e73ce59eb"],["posts/570137885/index.html","af7e457432af8720e346ff07e547ea9e"],["posts/570888918/index.html","15d77db9c9a17fd42bc2f3aebf698804"],["posts/582264328/index.html","58a1bc8848e1c33896a16b172efa6290"],["posts/632291273/index.html","272400a8251a54826c304e852e2fcdae"],["posts/70687890/index.html","2f6128c63996e55da311646a68044179"],["posts/719322223/index.html","5877e2e3a110b1ff4f8ee95b7d345c2a"],["posts/720539850/index.html","31a3899b7ec4192e1104a07346f072c8"],["posts/786195243/index.html","0b6e5239c82be11037a6cc7be2629937"],["posts/795474045/index.html","c3d03109de000280e16bb5dfbc5d794f"],["posts/815861661/index.html","b9dc7523167eff99ec5b4303a6e0b2eb"],["posts/821259985/index.html","dad515bc7e5cb37ff62ddc52caa36e27"],["posts/828223375/index.html","775c38dc803f57fa4d36c3f850167356"],["posts/887585917/index.html","a6e07a40739bd420114c11a2c42bea4a"],["posts/888549816/index.html","4d658de00a0f5c5860e6fbfa12f8563c"],["posts/906436376/index.html","f72c02f6acadbfd3326c0de4b9047dbd"],["posts/907824546/index.html","ba494c1ffddaab07a76d02a72c92c571"],["posts/927393529/index.html","63db4a1c8647a8cd5e72d8a308075d8e"],["posts/94443781/index.html","5c9e6992e40c115c78afaccdc7a5629d"],["tags/2014/index.html","f138266f90ad6bda3ea30e846dc44a52"],["tags/2019/index.html","6f1365340a22c5fbcdf40cc5c26641d7"],["tags/AI/index.html","d3a1664e531642fb6f9a464da9d4a8f2"],["tags/AOP/index.html","77226e6f8dcd15b4fb9138ca91389740"],["tags/AR/index.html","974556cdd7e37aa5eb80d51fe87eac83"],["tags/AssetBundle/index.html","bdaffe8f186eee0754310f6eeaa123b6"],["tags/C/index.html","e183e72e46326055e11c4b92feed6ab6"],["tags/CDN/index.html","641849f5d410a6930eda6b23e05f3acf"],["tags/CG/index.html","4bb4a596529d89d3c103cb42315685c0"],["tags/CI/index.html","0148a119785303095090cc6ec6b8e566"],["tags/CORS/index.html","0b870ace8fb687c9578cb554daf96af8"],["tags/CSharp/index.html","80bbff6f5fbe5a5dcc71ac5a4779accc"],["tags/Castle/index.html","a47f81b6f82e8b58bd5299f443ac3a38"],["tags/DBeaver/index.html","eacb96cfdf0f1c0536d1430ec61b096d"],["tags/Docker/index.html","8d5d8dd604641fd6d186e408006bbc49"],["tags/Dynamic-Proxy/index.html","2de791bfa286b782582eecd136cd80b1"],["tags/Dynamic-WebApi/index.html","ae48ef21ac4ffaa7f4d8a8025009b7ad"],["tags/EF/index.html","6f2983435aa95c02c4b6c0048ed93f7d"],["tags/ELK/index.html","b169ef53b28f80f76b08d86facb0cc67"],["tags/ES6/index.html","5f2c0eebd12a648456928e1ebe70d18f"],["tags/EasyAR/index.html","d4e841f28c9a2a6cb64beb9cfe96e7af"],["tags/Excel/index.html","85e58083cbd1372e6f5e9628d6fac611"],["tags/FP/index.html","d90bdfa54691720f6b78d8f07129937f"],["tags/Form/index.html","8cc3f2897ee7ca5165981bc0255e2560"],["tags/Git/index.html","0eadf3e4a5d7463e2fcd8cba97fe7253"],["tags/Github/index.html","ff4b3b8fd7865e49db0c08597fa43c73"],["tags/HTML5/index.html","9e9c1d82a9e594da3d3399c7b4baa4ee"],["tags/HTTP/index.html","9db9a501455ca3d23b0f103ac3f36ed3"],["tags/Hangfire/index.html","f858ceb5d85215b2dd088a83c018e208"],["tags/Hexo/index.html","285860ee4d0be975d4b753cc91e35f61"],["tags/HttpClient/index.html","157ed4620b63e9f822b1b02ccdfc71f1"],["tags/Hyperlog/index.html","8a8cf0d9ae93f00f5e465e6ab3694a05"],["tags/IDE/index.html","e08c7c36417f2275018daa8446353be8"],["tags/JS/index.html","db67b927140a05f28ed2baa830e7a454"],["tags/JSON/index.html","a5a1e67d182ff31c91343006addd4393"],["tags/JSONP/index.html","14b6df8a00de2d15f16a7ea3b5e139e5"],["tags/Java/index.html","2dbf79a07efa3f2a1c0b7d88fa0aca9e"],["tags/JavaScript/index.html","dba7c0270ce314066a8b8e565d09d276"],["tags/Jexus/index.html","4c58aef8be5760ce477baeeae507df92"],["tags/Kindle/index.html","1bf4ecbd3eb9277b9c55b6efb33a092b"],["tags/Lambda/index.html","2480346e97423548d592655fc9a323b1"],["tags/Linux/index.html","737c6fd99de465530ff14804e2014148"],["tags/Liquid/index.html","194c2f75cabd5d51c9bbd67c2bd9928c"],["tags/Logger/index.html","2f7ff534a404e01ff1bceb1ed86bbad2"],["tags/Love2D/index.html","8234506e95d8a7e2f34fab9eb3775600"],["tags/Lua/index.html","50ba4fcd927fe172f3c1ad40468c24df"],["tags/MMD/index.html","213d055a747345fb0f08d24272c9c32f"],["tags/MSBuild/index.html","8361eaef1226c1089c3e975a13fb936c"],["tags/MVC/index.html","eed80d5287b48931b7c8409657b2ea34"],["tags/MVVM/index.html","44b7484dd9740cbd6a916ee6254ccfff"],["tags/MapReduce/index.html","a981f04fa763ab8c7adb8308dc8f3b1f"],["tags/Markdown/index.html","95cdceb47d1259d5625bec3f28425d8c"],["tags/Mecanim/index.html","127de12c387aebca2a0b7e95a22adcd6"],["tags/Mono/index.html","21b82f07a308503cc890f30a5d2de497"],["tags/NET-Core/index.html","068799866295cdbc822318749ce5cb50"],["tags/NET/index.html","fc9981e00fe012329e04a456d50f4710"],["tags/Nginx/index.html","2a67c8b39cfe0321b7e5a3a039f92e61"],["tags/OBJ/index.html","fdf6691abb9cf0f194c437b4ffe7bc7d"],["tags/Oracle/index.html","692aaf5ea226096b363081d44d96f1a7"],["tags/PL-SQL/index.html","5fd786ac41c50399e67c13c62d71c7bc"],["tags/POCOController/index.html","2d0c452918ec0323516f3a373905a5bb"],["tags/PWA/index.html","2bd1f8181472bddd5d472d12f3bfcc81"],["tags/Python/index.html","59bbb84b8b1ad8bb69fae2683b79ec61"],["tags/RESTful/index.html","7456b896ca254b59bcf39c8ccf05582e"],["tags/RFC/index.html","91ba926f51f021323f774365ace56cb5"],["tags/RPG/index.html","9f2dbb436f9e0c6090c4ee3489095139"],["tags/RSETful/index.html","21f2392a03ed3f774daf43d265b4d5e9"],["tags/React/index.html","cfe8d37580d5294180f4fc5f49941c5e"],["tags/Redis/index.html","05c76668edb484b73ba418658e1b8d8f"],["tags/Referrer/index.html","361208875a989f6b57ad74b6664cfa8e"],["tags/Retrofit/index.html","d371b7395e17a0aff5392ef6861821e0"],["tags/SDL/index.html","19beede613c152fb4acf4a99b949bc31"],["tags/SQLite/index.html","70a9230fdb9a1dc7f47856067eec65d9"],["tags/SSE/index.html","463ac7521816ebd8ca572b04fba249ce"],["tags/SVN/index.html","7c12ec5c4738f5fb242eee9e4e2a5678"],["tags/Script/index.html","c6166da32dbf1f180395143514ecb6fa"],["tags/Server酱/index.html","ad0974725b1d42c9ec9e236e7fc39012"],["tags/Shader/index.html","f5c25c90c6be9b3070051717c0090557"],["tags/SignalR/index.html","d6c85f8d991d3cee6eafade9c60322b7"],["tags/Socket/index.html","7903f27f281eb83c8419677c1646c98a"],["tags/Sonar/index.html","90723663e18c112d1a484caa6144ec26"],["tags/SourceTree/index.html","e5ea7e69df198b99c8a3c3cd9a65156b"],["tags/Sublime/index.html","668749e0483df9f365d2981fd6e503ca"],["tags/Swagger/index.html","d7d81f7298ba32afe2f7c27d4b97ca7d"],["tags/Trace/index.html","3c5e1fca38c7e16d3bc47f43a9616615"],["tags/Travis/index.html","ec1a87f294b366f8415414a0f5a2ffef"],["tags/Unity/index.html","1de27ac7a6bc49631ffd23744a1f1458"],["tags/Unity3D/index.html","68be0a45e202dabf62f6cb1d95a15862"],["tags/Unity3D/pages/2/index.html","00d5a71e25d87cb2fb51dcade2e543a9"],["tags/Unity3D/pages/3/index.html","9a1f876f0479eabcfed19f454bae500c"],["tags/VSCode/index.html","56ebde5b093c3db93617560451e4c7c0"],["tags/Valine/index.html","aa13cc462f43cb4f4f48cd6be9b61371"],["tags/Visual-Studio/index.html","ab6b1307c60d7cc00bf631dfad1e74c6"],["tags/Vue/index.html","3ab7fad0f1de83c508b5dede4e731441"],["tags/WSL/index.html","61f3025e48f2cd8c88f789ed98eefbb5"],["tags/Web-API/index.html","89013586a818c75b6ddc854b32c5a586"],["tags/Web/index.html","26cd00b07307f251151a3f346f728a1e"],["tags/WebApi/index.html","6401cb9f43535b50f17115e5937eb719"],["tags/WebSocket/index.html","6a5988350cbbf237c4c3d67f92fff680"],["tags/Wechat/index.html","2ee381d18d9b2be0e8c983f4e44e7f21"],["tags/Windows/index.html","ec8cd6e476d36af94e9529e4a8643f7f"],["tags/disunity/index.html","012d062e3701eb3ab14582880e019a58"],["tags/index.html","c22030e4b7227b6bdc76c2a650f096e5"],["tags/jsDelivr/index.html","7257f0aa24aa6f9712152e10d41f7031"],["tags/matplotlib/index.html","a9bde88fd62015389891abb95d7d492b"],["tags/uGUI/index.html","e28219bce5165fbcc6f4ad1ec88b230a"],["tags/zTree/index.html","26e2a8a32ad397d7f2690144d507f25e"],["tags/一出好戏/index.html","87cec1ead922ad09874c6e96dc18e227"],["tags/七牛/index.html","a5ba61190927ec42050bdbef7ece62d5"],["tags/主从复制/index.html","6380f451e3e37b44fd1774541940df3a"],["tags/事件/index.html","7a466e54668118c8587f4855fd15958b"],["tags/二维码/index.html","d285378adbd402d572cac6efaa355caf"],["tags/云音乐/index.html","b23f4c27867ee3a91cd43eb209e0171b"],["tags/互联网/index.html","2c75565e8c986a0cd844c2362ced04f0"],["tags/亲情/index.html","53272a162ba38198acd460c68dc163b5"],["tags/人文/index.html","43ce4a3dae49c7b68720cf27c1345136"],["tags/人生/index.html","0285e3276ed0dd9c66f795887838d27b"],["tags/仙剑奇侠传/index.html","5b0a8e16485403a7909be00634bc8a37"],["tags/价值/index.html","350407f5ce4837413bc743324d9f7eb4"],["tags/优化/index.html","bbe9507ad4b4a01dc5e684a2e989b60e"],["tags/全智贤/index.html","d710f3ffc96f5aa8ee42516e47455334"],["tags/公众号/index.html","0499e4f7580fb92f6e88c03cbf780c9f"],["tags/关卡系统/index.html","fa558c7bf06ee9d02e9890259b1a8ffe"],["tags/函数式编程/index.html","090592bb0043285de61e8a87a0b57a4e"],["tags/别离/index.html","86b12a3576253120ac584e46dfa2b774"],["tags/前任/index.html","cb320fb93843f628a6cad4f870bbc7e4"],["tags/前端/index.html","d0cb64fcb5550395b3c37a1ebc3dbf46"],["tags/剑指Offer/index.html","de4cbf5cca5cb6171d3bee207dadec53"],["tags/加密/index.html","71fda18f49a0a7592a6f5999141d5cc3"],["tags/动态代理/index.html","b6669d6cedfa312ca14d8f31595ddb7b"],["tags/动态加载/index.html","6342136be70e2975d747c948abfd4430"],["tags/动画/index.html","cca39c895bbbd4f0a77a319652fbdf93"],["tags/单位/index.html","e742532819ccd5f281c73160729a9bec"],["tags/单机游戏/index.html","4a29dba3df73f9336582053b10e2238b"],["tags/印度/index.html","9bc9afba323df8f79fce301df4af8da3"],["tags/历史/index.html","c0bb9c8db60388beedb70b56f06103f3"],["tags/反编译/index.html","63e3106b5360a9a09e52efb18966ce78"],["tags/同步/index.html","4328e445efcdef0923a1890d6e65a536"],["tags/后端/index.html","c87ffc91b1fd35963605def0adfb0355"],["tags/命令/index.html","8c359cd198d27b496a83a1a98845eb0e"],["tags/和平/index.html","aef87dfab9dbd76a6fd16aa8f848ccfa"],["tags/响应式/index.html","12cb4e9e1e742db6e639abdfb9b17770"],["tags/哲学/index.html","1728d0ef6d7720a4d499e719b2fb4234"],["tags/回家/index.html","1f5d1395a975394f729beb98c8bf48c6"],["tags/回忆/index.html","70dc7a37eb6018b5cd9266e55a304769"],["tags/回顾/index.html","f62bbf90e3615a4e5d01423e0037a066"],["tags/回首/index.html","5782f1f41e441d4b6afa6d4a1fef7149"],["tags/图床/index.html","65406132d1e9684dc3a0f2b8abbae5fc"],["tags/图形/index.html","b43223d387e274c730aeb2e0c6bed386"],["tags/地图/index.html","5f3454c37fa23e171ee250664ef8c84b"],["tags/塔防/index.html","19147829ff758d4740a7650087dc7c74"],["tags/增强现实/index.html","94c4db6a2cd536b00641993f0a362d66"],["tags/壁纸/index.html","01f8519472236c864d65498dd8a7d194"],["tags/夏目漱石/index.html","1435fb4588fd881ab6d30c177fdde28c"],["tags/多线程/index.html","5b66351b17a1e786279eaae1ef321443"],["tags/大护法/index.html","371425c341abef4f409c61d04c519fe8"],["tags/委托/index.html","a5dc158509ff82cb37a9fbd99df3710d"],["tags/孤独/index.html","ca192a708c64aa7b54d61d490e88ad15"],["tags/展望/index.html","92685aa8f1750f8bf3558d7cbd792ac5"],["tags/工作/index.html","afec3ae58fadf83f383eb020563eb5b2"],["tags/平凡/index.html","39275dbc1a88406dc8ef97d028bf2db5"],["tags/年华/index.html","e82a83b6d82dec2b79f1980c7a0cdf7e"],["tags/年度/index.html","5059ffa5cf9cfcfb900f7eb29d969f77"],["tags/开源/index.html","76c485c7e0d7274f2e91f32579549150"],["tags/异常/index.html","a059cb815bd43a8c508a99cce6d30054"],["tags/异步/index.html","cc46750645df1cc105dba2dc485c67b8"],["tags/引擎/index.html","14c3052c9263d5be9bfd94fbc7a7f3da"],["tags/影评/index.html","b7fbebac80b6258702053eaa7ba5903c"],["tags/微信/index.html","8335019940d8ef13a1efaf6a230b231e"],["tags/微博/index.html","0cc3abd6d297b8cce60c18fa1a4334c1"],["tags/心情/index.html","1035c24c5abb1602a5291bf0aae762d8"],["tags/思维/index.html","1b5b1895d595c4d408ea1d02c3955a6d"],["tags/总结/index.html","2f61e7885621426d3f235136ee99bd00"],["tags/想法/index.html","de6ca70e726d9f705c21f7c9cb2bee2e"],["tags/感悟/index.html","e28e14016a56f5dbf33504bd592f3f4f"],["tags/成长/index.html","984f1c3f7fa1feaeae38664d535b8eb2"],["tags/我是猫/index.html","268cf437013bef4b14b351795f27267c"],["tags/扩展/index.html","4575dbe24adad3575b50751551eb1212"],["tags/扩展方法/index.html","998ae64b9f8f07c61b5d00c695e246c8"],["tags/技术/index.html","811961110dc2d94fbe5c1b41e19de5fc"],["tags/拖拽/index.html","aa141e9bc4148c943bbcfbcc16fafa86"],["tags/插件/index.html","9a1e348beb20356d191cea37be880abc"],["tags/插件化/index.html","e3767a07d11e651b8a6aa43cdaa9be1a"],["tags/数字/index.html","a115bf18f5f6d72d9f429fe9692d6dd7"],["tags/数学/index.html","34955f185131be96ab3e01d4dbc2975d"],["tags/数据/index.html","1167b7efb93ab42674b81247593ed454"],["tags/数据交换/index.html","614aae926a006a72f511c15e751e28d5"],["tags/数据库/index.html","a6086875425246ea24eeaf9ffa4b6f1d"],["tags/文本分类/index.html","3eb39028ade968548d0e05327f51c2ad"],["tags/无问西东/index.html","522d8ed8aea6b66193ec07c6a7eaff6a"],["tags/日剧/index.html","5431017a12b03e0c9cc8f3e4357251ce"],["tags/日志/index.html","6b82e629051c94892e8f3a00d61cfd25"],["tags/日本文学/index.html","dde1f302964cd04af2f9103dee0dd3e1"],["tags/时区/index.html","78bf51274c1389d5fe620ff7ae3feec1"],["tags/时间/index.html","9b33a9541bfd16a25b3bb5f3af98417a"],["tags/服务器/index.html","93e3034531eebeddc0f6232bf79352b1"],["tags/朝圣/index.html","16f2072a25e9eecf76bf6e2fcf90a129"],["tags/朴素贝叶斯/index.html","fc5d0babb131a4ee752262afbe58d4ca"],["tags/架构/index.html","54c31cb6b7598720326323f07999f392"],["tags/标注/index.html","578c8ea521474936374cc3ef1edfc70e"],["tags/校验/index.html","419654cd90eee5b01bb571c42b3434b5"],["tags/格式/index.html","9e87f20bd67e87cd5367a0d79ba1679b"],["tags/格式化/index.html","43f85aa4e56973b8d7b696618f57c9cc"],["tags/桌面/index.html","8d6fe40b25a89b4e766ef4f17821f166"],["tags/梦想/index.html","ef86557714b1bc1d023846602f40e9c6"],["tags/概率/index.html","282fe858dfbf5f112a1a0c1aa427922a"],["tags/模板/index.html","3126288af3a366c395f546eb9efc16e9"],["tags/模板引擎/index.html","3db37d12d042f6427b8459f0453cd95e"],["tags/毕业/index.html","fba10fcff4869c2ce9560b61544c4c48"],["tags/毕业季/index.html","f93e72f04d8a30eb50151a702143204e"],["tags/消息/index.html","7e2fe529af92c98c20ea4f53f66c7cdc"],["tags/游戏/index.html","82b264867cb0f1227b06edaba4672c08"],["tags/游戏/pages/2/index.html","1f01510ae25ed05a74964ebc33744d49"],["tags/游戏开发/index.html","94c2ef3c13c2d357439b562891f2db99"],["tags/游戏引擎/index.html","20153fa19d78c02cf5d96584ffec6c9d"],["tags/爱情/index.html","4e0e3c4f9dd29125a93cf857808fecbb"],["tags/版本控制/index.html","72fcdb98eba1d60fea8bc53217fbb493"],["tags/版权/index.html","8c1711a753c50afe946e930bde1711b6"],["tags/特性/index.html","9516049a2036935f2a708cf2a3a76f51"],["tags/状态/index.html","005f71c06a010957a9c9e864a845e4d7"],["tags/现实/index.html","b2263b6746069984ac743fba9da5348f"],["tags/生活/index.html","37b465cc369f35d28ad2f8046355d03c"],["tags/电影/index.html","50b2b55535c07f46ab3ec85e0d7f45e6"],["tags/画家/index.html","f8375db4ffc8083c0b460c112ef078ab"],["tags/知识共享/index.html","cf00f2733e8f2ee5c604921f62dbf6c7"],["tags/矫情/index.html","adc206f117de42b50939d9bd23436f69"],["tags/程序员/index.html","85bc1895d1eb268166f842704e90812b"],["tags/穹之扉/index.html","40f6bef82b56d13b7ebccadb11f5dee3"],["tags/穿搭/index.html","db548951fb8ee418e43e7a497a5a5bca"],["tags/童话/index.html","a26910998234fca8c7928d26d1fb8434"],["tags/笔记/index.html","3c3e0e5f05ff7995a329593654d73c50"],["tags/算法/index.html","aaf9a7f7fa37855f45714a15b833f8f0"],["tags/米花之味/index.html","166b56c3d8f36f4efe51b1a47406a77f"],["tags/缓存/index.html","ec4433b859a8ccd2b3f09ead89b9849b"],["tags/编程/index.html","0185fa235ce3c328ccc537ece38f341b"],["tags/编译/index.html","8a1e6558138c8562b0e8ba2d0fdfc7d7"],["tags/编辑器/index.html","a76d5fde793f47b3fb49510f9e877883"],["tags/网易/index.html","dbd56928d01cb15954a3b2ce0ecd2040"],["tags/脚本/index.html","b02b261f105bd392864d968e59a97e38"],["tags/脚本语言/index.html","fd6507d8648e75013038d964baac5f3d"],["tags/虚拟摇杆/index.html","4f5a6908417c2f80cac64dc413ff6d98"],["tags/蛋炒饭/index.html","2cf40d867975b009adc4140459d01b05"],["tags/表单/index.html","91bf3c6c36cdbee846e127862d4699f7"],["tags/装饰器/index.html","ec55b2e92750773b0deff48ff00b4d65"],["tags/西安/index.html","1ec8d491ff31b93d54869ac2876430b7"],["tags/计算机图形/index.html","61294dd5de0469da0e26f924056c594f"],["tags/设计/index.html","caaa35e910a24c0d0e5c05a480f99e8e"],["tags/设计模式/index.html","5802ee392063c86577e17f0d5541a845"],["tags/访问量/index.html","8ad6865e61a889ca11f1cbab140b9e12"],["tags/评论/index.html","046ce832e0cc7506848ecdc717412a7f"],["tags/词云/index.html","42eb9e583b708018731f04940a3236d2"],["tags/诗人/index.html","fdbc947bd8349b27d28ba8a24cf4fd8c"],["tags/语法/index.html","0c9c2b7e95ee4ec506aa6893ee308860"],["tags/请记住我/index.html","c314e85d4a280542f7703a87b8c66eca"],["tags/读书/index.html","b6c871d4e5f1724806b1859acc484386"],["tags/读写分离/index.html","2542ff9224ae29736ff1f53ff90cd720"],["tags/调试/index.html","a07bcf8c36a5bb8b543ad873a9798862"],["tags/贝塞尔曲线/index.html","0fd054a37c2ee70277ec7fe367ad8240"],["tags/贪吃蛇/index.html","019d2a96f4dbf2a89b2ea87f74174e64"],["tags/资源提取/index.html","a5561d9b75471224c98e605b8525b670"],["tags/跨域/index.html","a422532a8ef808926793e4e001178f0f"],["tags/跨平台/index.html","b9c8b7f97e27e48fa8fb071d794e04a1"],["tags/转盘/index.html","bb24cdb43cf415a67206e2be842dbd59"],["tags/迁移/index.html","7f903b7e1c8ff49df907441eb48ea3bb"],["tags/通信/index.html","1d47bdea0726a8399b1cb5c801885a4a"],["tags/邪不压正/index.html","31bd1b31e30897f923e9e218204c81f7"],["tags/部署/index.html","a35da5810442a7fb2af928979c6fac8b"],["tags/配载/index.html","4da7008af5b35dbd02477ae8d0c5d1ad"],["tags/重试/index.html","d347d5ee4dc72ff94f529d071f45e9ae"],["tags/长安/index.html","2348af5ee43d8f31fd6992f1ff4fc327"],["tags/长安十二时辰/index.html","19281ac7b442761da672fc652da95e1a"],["tags/阅读/index.html","09b35fdfa1c17148893fb625546f3325"],["tags/阿里/index.html","224466736e2739e7508e79dc6638d2ff"],["tags/随笔/index.html","fb6bc9c50f34cfdc09ccdcb75fcfbedd"],["tags/霍金/index.html","b9373098d4e74cdb14495d2f67672d67"],["tags/青春/index.html","5bcd7a61ccb0878a35ab400b3abaa44b"],["tags/面试/index.html","f67b30d454759c866e5ae8df751cd767"],["tags/韩寒/index.html","9f8d26d253d938d87d85b28570796fa1"],["tags/马尔克斯/index.html","ee1727bf82c745d4341c657d35e0aa0c"],["tags/验证/index.html","551115b99ec32556e98b99a9cefdc957"],["tags/黑客/index.html","54e2294ecafef4577aac77039dae9304"],["wiki/index.html","3498a028949d354a6ae85b17f4401e39"],["works/index.html","4bdbf0d2a15f8e78252aad9cee06ea8c"]];
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







