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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","b3646b5950ae0159eb50cb14b7eacb63"],["archives/2014/12/index.html","5d58895f8aef3be4241f95d6b2c88e4b"],["archives/2014/index.html","81289be3d53a1a88f8e4e9f58739df61"],["archives/2015/01/index.html","3ca36bf4f43111edd49d27a6986a0a30"],["archives/2015/02/index.html","ff9a44d9309c514c50cbcc907cfe7177"],["archives/2015/03/index.html","46ec05c941f12b45e2f27bda06391599"],["archives/2015/04/index.html","e48234b1afadf7da5094cf419960e1f1"],["archives/2015/05/index.html","a728d981831abfdfd7728083b78424d3"],["archives/2015/06/index.html","07d9be9fed6472db0457ef3e9b99201a"],["archives/2015/07/index.html","e49e070da63c0da3571fd8d0e14ed36a"],["archives/2015/08/index.html","d2c86032d227c46620ab91ef4baefc25"],["archives/2015/09/index.html","c96afe95b96ec43b13f225f598d4948d"],["archives/2015/10/index.html","136feeaff6ce5194dd658d242ae713d0"],["archives/2015/11/index.html","5949b580586d1523b7375f86ff8fa8bc"],["archives/2015/12/index.html","63ac603f27adc373fd249e1b12d041fa"],["archives/2015/index.html","5a81c212ab66b549e84bf6bba831e6da"],["archives/2015/pages/2/index.html","64b161ee9158df8f94c947474d782c3b"],["archives/2015/pages/3/index.html","85ce979834ebab8aac7bfb055575b9c2"],["archives/2015/pages/4/index.html","eadbff90ede223ffcf482ba0b1f81916"],["archives/2015/pages/5/index.html","d7fcaef9320db463d9f7519d69024c21"],["archives/2015/pages/6/index.html","2eafedf42469a61ffbf1b055bcb1e06b"],["archives/2016/01/index.html","c786b90019b1e81befa1a666834f4f68"],["archives/2016/03/index.html","00ddb0456af3325ac3c3fafac4de8658"],["archives/2016/05/index.html","ca0beb137dbfb66c4a591e2456c9b056"],["archives/2016/06/index.html","abec8bca7b683feaaca396fbd2c0b16c"],["archives/2016/07/index.html","42f2e6fcd1ebafc750d7c1fe92d0cdf7"],["archives/2016/09/index.html","0fccade24c62015896b95a21e95d01dc"],["archives/2016/10/index.html","7c6ff94c1e5aed045fed50ef26134d60"],["archives/2016/11/index.html","365490525afb98ba6995f4049fe7c1a5"],["archives/2016/index.html","5c373f8fd586f0155ee17650304ad1b2"],["archives/2016/pages/2/index.html","e889e995995a472534f64284b64e27ae"],["archives/2016/pages/3/index.html","d7ff5673c7abc7b64e87030315a9429b"],["archives/2017/02/index.html","e101ea617e65eb4263dc1c2e29b9f579"],["archives/2017/03/index.html","d170cca7766d52a5d468dfa6558c52f8"],["archives/2017/04/index.html","1ef7569771904be7e85fd02014dbeb10"],["archives/2017/05/index.html","33f2204590503fab80e170795b70e98f"],["archives/2017/07/index.html","0a84a13c8574153f11b72bcd9214287b"],["archives/2017/08/index.html","8b6535638baf254d3888e469a66a61ff"],["archives/2017/09/index.html","fea9bedc74ca301db918c1f3a0ed7bc7"],["archives/2017/10/index.html","a8518646a6058955fb7946ce9d9e47b2"],["archives/2017/11/index.html","9b9b24e1d53ca132392e5e79122a19af"],["archives/2017/12/index.html","9c296a75e0bdd86cd9a52686358ab709"],["archives/2017/index.html","9131c4d0bc71e518d762f2206fa6d5ac"],["archives/2017/pages/2/index.html","25489ecc0da4877802696e35a2a374e2"],["archives/2018/01/index.html","61dae220c0130a6b36d2d8ddebde9553"],["archives/2018/02/index.html","40687f46328ff168a93a6f086617ed46"],["archives/2018/03/index.html","3f8f927b0bab04d46b34534dd1ef32ba"],["archives/2018/04/index.html","fa718ae04f7def755f4c5f5520513e8d"],["archives/2018/05/index.html","0abb8f351b61728d6a6398b629752e22"],["archives/2018/06/index.html","15d3890e4b91d02bfd528b3d5845bf45"],["archives/2018/07/index.html","1629354f7c670a2822df4f4b507a4339"],["archives/2018/08/index.html","3c6099e9503d191607fd4c807a14ff3b"],["archives/2018/09/index.html","bb9597065087ffaa4d9a4a9d87ae5823"],["archives/2018/10/index.html","e10442a11047362064788716fc3fb9f8"],["archives/2018/index.html","77ab6d9d2534f008ff4a1643bcdf0698"],["archives/2018/pages/2/index.html","efd83d1800f16e8063e4b7400fe457cf"],["archives/2018/pages/3/index.html","66f9536ff2c45aee80c0c88d25750af1"],["archives/2018/pages/4/index.html","d2de713404f0c9bc994281e3c942dd65"],["archives/2019/01/index.html","1bc76361215f321be5045b2281ff551a"],["archives/2019/02/index.html","d0f9ef58ae063c94268467b94cdb84ec"],["archives/2019/03/index.html","123279a93834f6ebb3b272f2d5bb09d3"],["archives/2019/04/index.html","bdf301bac448393bf5440aa2074c86ab"],["archives/2019/05/index.html","a615a36d8ac87de7b33186b113eeb35e"],["archives/2019/06/index.html","c1aa95efac2546fc54a610f09e8c36bd"],["archives/2019/07/index.html","298b718192fbb66d5e0a76dfa3c70d1b"],["archives/2019/08/index.html","fa8ec362dd8656fe9cdbc9e2a8eb74b3"],["archives/2019/09/index.html","cae183f5a418268629205da35840857f"],["archives/2019/10/index.html","11ea96db74ded2eafeb7f152cfb39c77"],["archives/2019/11/index.html","2d0297d81d3bfcf69f22b1f2a4b7430b"],["archives/2019/12/index.html","1b520aa1887f8b4a7f91e275e30a7e08"],["archives/2019/index.html","1447ca2848c234833870fc870d32f1b2"],["archives/2019/pages/2/index.html","3861f0a0dd9871552ee6bf57ebf6bc6d"],["archives/2019/pages/3/index.html","b40917f6c94ca4815e539d9abbc2d288"],["archives/2020/01/index.html","0fb8bbd9094702ab178bbb5889e8f496"],["archives/2020/02/index.html","cbf9d43f61f487ee4436824f0a0d3d0d"],["archives/2020/04/index.html","d4c3ba6da06ddf218ec6eb232ecf11f8"],["archives/2020/index.html","a9f8eeee73674b2b7f7db39643a44829"],["archives/index.html","ad8f09622a2fde6bf1a4467f334abe8d"],["archives/pages/10/index.html","30927aeb7ed4ecd542e8cb45c156ff5b"],["archives/pages/11/index.html","507793a5d10e8ef5f72d4ca98b3b149a"],["archives/pages/12/index.html","c5421d355353a5b694d94e0a776e0106"],["archives/pages/13/index.html","7d01e110ff4f5558662097424047ff33"],["archives/pages/14/index.html","af378e387858d575db0577c794d6e532"],["archives/pages/15/index.html","765ff349b59daa56c2bf3add8976f8e9"],["archives/pages/16/index.html","0de698c9a7462cd3ee5f3a042017cb08"],["archives/pages/2/index.html","25400850a8c5503b345f8dabc7c27db6"],["archives/pages/3/index.html","eeeede4edf5926416292b3d426e2aa66"],["archives/pages/4/index.html","9b76e16175d4e0fe326ce96ee1a57676"],["archives/pages/5/index.html","021e77b06b015008cf5dae6c2499bca6"],["archives/pages/6/index.html","5b7f7fc2ee330436a5a5b45e69c27fbd"],["archives/pages/7/index.html","d31aa72a5d06f4b11d5c143f688f131d"],["archives/pages/8/index.html","41d91d473c1d5dee14c172072133bacc"],["archives/pages/9/index.html","79934756dec12c9d4fd2db45f0ba1017"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","f39893da95fb1ffa6c898f6376cb7558"],["categories/Unity3D/index.html","5d884c16935d4badbc40d19a89b009cf"],["categories/Unity3D/pages/2/index.html","a5d94b2b5c39ffef053335d93d0c4255"],["categories/index.html","b37461d507cb758b6437fc565bce09da"],["categories/人工智能/index.html","7ce4e9377e76d65bbcce719358e9d68b"],["categories/前端开发/index.html","241a798dfe06a947b21de7ff941dd373"],["categories/单机游戏/index.html","b9f83ec4606415013c01a1a2470b6021"],["categories/开发工具/index.html","3a6201899f0bb6c74b4577b6746ad659"],["categories/数据分析/index.html","0d40caba21e201e34d221ca007645f52"],["categories/数据存储/index.html","a6a2d62a5737e94cce23fd9bf57d4c2a"],["categories/游戏开发/index.html","8f4cba1f81c1f89ec35261797d7bfc91"],["categories/游戏开发/pages/2/index.html","829b2d5502dcb30a76ae4ac37c49a374"],["categories/游戏引擎/index.html","6fdaf4ef8333fff45548ad5e10b9ddf5"],["categories/独立博客/index.html","742266ee97a65ba72b920e3c3d971ad4"],["categories/生活感悟/index.html","bb64832a985593d3cf490c7f527ac6fd"],["categories/生活感悟/pages/2/index.html","67c1ca90334911b6a10cf2642611b51b"],["categories/生活感悟/pages/3/index.html","409ae18d4e34d926a41ed2eac43c6702"],["categories/编程语言/index.html","faf72a340e6c1f3ad91760700f8056f8"],["categories/编程语言/pages/2/index.html","55be90caab65fbbaca1fd2d3b1547350"],["categories/编程语言/pages/3/index.html","f4c1759877e41dda59eb7b87e0f1363b"],["categories/编程语言/pages/4/index.html","d6f4fc3c625722a9065d103d4dbb8a03"],["categories/编程语言/pages/5/index.html","c79bb9830925340de99181e77b89cab0"],["categories/读书笔记/index.html","a0c737241779787ce97e7f743b5b9962"],["categories/读书笔记/pages/2/index.html","ba74231f6f02581a953b44304409c646"],["friends/index.html","b8174871d0d83ae676eec3bf30e84ca5"],["index.html","f8d15f657bc23d348d60a3290005390e"],["movies/index.html","285c4401469722bd5f4097e7f3aa6850"],["musics/index.html","4ea96529a3435dd544358ee1f378d2c4"],["pages/10/index.html","7dbddc8f5ba5e0411004862a129748a5"],["pages/11/index.html","e3df14b2538745e5c709efa9f3e5f7fa"],["pages/12/index.html","55c2c72d6215db012585e23aa86e25bc"],["pages/13/index.html","a8ba0eb9ffeb987f988062a7856aba19"],["pages/14/index.html","4f00ac092319f5ed223198e1b6d3f19d"],["pages/15/index.html","e9228d5741a9bcd2f1f0a9db4925e428"],["pages/16/index.html","04cccdf25c76888684ae56c8d21bc133"],["pages/2/index.html","fd8f65e1262fb542c47ef6a0d4f07bb4"],["pages/3/index.html","843311b108912dc359316c602e2233f0"],["pages/4/index.html","406a0748f30a4579a38646a28239a916"],["pages/5/index.html","ee2fa08976bc8029c7beef06b660f982"],["pages/6/index.html","d268b69a5d5ada415c589750960cf4ef"],["pages/7/index.html","69cbeb53887aa6e4de27ff13ce33c83e"],["pages/8/index.html","1f08133799ff24f55a26d9b58a86478b"],["pages/9/index.html","312feb5a98370c0272fcee2adfb93589"],["posts/1059499448/index.html","ce67700068133798e50a2b79feb7f63a"],["posts/1071063696/index.html","9ac19b6a9d52712b4a50b8d170e6a919"],["posts/1082185388/index.html","faabd7303679c552ffdd505014b75fbb"],["posts/1099762326/index.html","24459944ad5de7dfe84a40f17420b59c"],["posts/1113828794/index.html","120ab0a0ad83e29e97e5d48905194c01"],["posts/1118169753/index.html","f5c516c76397c76d6910f11e5767c39a"],["posts/1122710277/index.html","13e34a95f8294a58820aac5f9a62ae42"],["posts/1124152964/index.html","6e3f285f6e4227206331bf16bf3bae63"],["posts/1127467740/index.html","d380f0204e35a948b9c27df1a7436efe"],["posts/1150071886/index.html","7b460e132c6ddff6c756c4405c85f05f"],["posts/1150143610/index.html","0644b258c7980714815276a6c9028e69"],["posts/1152813120/index.html","795fbc88e36d911cffdbc18d4a4b72a3"],["posts/115524443/index.html","f652fac709575c9396306ea9b2165bc5"],["posts/1156673678/index.html","98a789f86ad2f5738e95a9a278bc4d20"],["posts/1166840790/index.html","01025afe95fbb5f2487d25ec756f1917"],["posts/116795088/index.html","a4e418779e70571fa16f08c62d39aefc"],["posts/1176959868/index.html","9f432289417237566210709a1099f169"],["posts/1190622881/index.html","6a52419a60dc96e8fb9f639366a0160e"],["posts/123663202/index.html","da786614e59e025dd7c15e0db0329cf3"],["posts/124807650/index.html","f049853b68683cd33f5e086e60e988b2"],["posts/1254783039/index.html","d67c825316a4d97f2abb8bd2832f61cc"],["posts/1289244227/index.html","8e5e0431c6a2e289244f2df46c549833"],["posts/1320325685/index.html","cd9dfdfb3e510d338042ae161d4bc4af"],["posts/1329254441/index.html","fe9dcc47c4c8f9bf5ba39d13a9046cf7"],["posts/1357715684/index.html","9f4fdcb9511066c4c3fa5df80271ef21"],["posts/1358971951/index.html","e66c8f8cbcbce4eaf4d20e5061fa1fba"],["posts/1386017461/index.html","dbcf66fa73ed50b8a6ea325e00c3efc6"],["posts/1394521917/index.html","a40b7950bb14b772f71f3afcb1b56c6f"],["posts/1397717193/index.html","88c50c88adb3102ff8106a6047745a1b"],["posts/1417719502/index.html","add48b93a686205bc4b9fdfc00d7ae5a"],["posts/1424645834/index.html","7c8428f1aa2f121578bf1350b455863f"],["posts/1444577573/index.html","8264061e3a63010203cfec5bbe42be7b"],["posts/1467630055/index.html","e1c379f16796d177b0b5b733137f1b51"],["posts/1478979553/index.html","81cbfd275d951a22b4f7f2f4efeb0411"],["posts/1540537013/index.html","3ffcd6df351b978c120a9e8337429e77"],["posts/166983157/index.html","9ec43e2bc7e09249f79d8a22e8fa9946"],["posts/1670305415/index.html","4c497eddbd65808b86a5f87226f7a461"],["posts/1684318907/index.html","fbe48e8cbd430fd0cb31403779a9ed90"],["posts/169430744/index.html","337344d7512ad480cb65af812283d205"],["posts/1700650235/index.html","f3303deb16d8aed803a9988e9c724542"],["posts/172426938/index.html","af63c96e6b5d359d3714453d623298c2"],["posts/1836680899/index.html","c00ce429d683aafcf94522321da89e52"],["posts/183718218/index.html","01bb9999e8d5bf011af1a3d92f6ff243"],["posts/187480982/index.html","93cc1d981985e42c4a4d20fdbdaaff0f"],["posts/1930050594/index.html","3ca14606c74458144f6b54ecc761b6d3"],["posts/1933583281/index.html","35ecabd47cb4a029b0c9e0017668171e"],["posts/1940333895/index.html","e507f3436755f4e1052fce3174cd63cb"],["posts/1960676615/index.html","46b4df8c90d0f0b1826ebf0b76d2a0da"],["posts/1983298072/index.html","f1b17c7d871ee2cfc2dc3e10b11c7ee8"],["posts/1989654282/index.html","1aeee7f352f856b0faab7a3dcefe6462"],["posts/2015300310/index.html","c435dfe55afb937e7d86d5a9cbea3e21"],["posts/2038378679/index.html","9e4d952df01911609c9f2e9b73b55ae4"],["posts/2041685704/index.html","a826c0216ffd298584339ee570f333b6"],["posts/21112647/index.html","31555e97ea6136d0c18299e2cc51a87d"],["posts/2158696176/index.html","761c77b576636c67e9096a2b6320fe12"],["posts/2171683728/index.html","dc47b83a54efd4d096ad480914cd669b"],["posts/2186770732/index.html","a099c7bfa6fac97c57ea8c1843a7d932"],["posts/2275646954/index.html","3f6c57a809159e46651c387ad46ed618"],["posts/2314414875/index.html","2e9187f04c25667c7fa6972874d4f07e"],["posts/2318173297/index.html","3aeca352ae4f33d439408c27443a4b72"],["posts/2418566449/index.html","4c1ab78c15ebf70378edbcacd507ac01"],["posts/2436573863/index.html","94c84dfdb56b20ad26b7115c485fe6f6"],["posts/2462008667/index.html","b2ba67f323cd6da550e660a5237207e8"],["posts/2463121881/index.html","8a4364f6c7e1d5ec113912282fcd1a65"],["posts/2488769283/index.html","012aa88096e4eecfa70de38367cc22b3"],["posts/2527231326/index.html","d7b840ade2bcd96e9484473b477d1b09"],["posts/2583252123/index.html","ff0f1d17649357b83005bf2a2f3fce02"],["posts/2613006280/index.html","2164237e0b94b9dcb51805e100623121"],["posts/2617501472/index.html","95068f3b518ba9d77ac35ac6f57bf246"],["posts/2676125676/index.html","3889b0625cf6335fa24ff45de763a5d6"],["posts/2734896333/index.html","f98e2c6b7b51e0bbdc5ee12b95239369"],["posts/2752169106/index.html","3ac556a17aeb8ff6bf827af828b1f1d4"],["posts/2799263488/index.html","d2e8ec0f4f7f1f309ffd36f083b7c0d7"],["posts/2805694118/index.html","2a92e5f75f54cb6c736caa2eba5af7d7"],["posts/2809571715/index.html","a8c666a01524b9af05db2f9be10c80f7"],["posts/2822230423/index.html","c6ec859b8c23ef3f612b2e3bb6cf8859"],["posts/2829333122/index.html","e2fa11af01e35477fb6193d59d2503d8"],["posts/2911923212/index.html","42f951dc876a7594fd4ecf073a7dd0f6"],["posts/2941880815/index.html","a4784c6cb987f3f56bb14cd96cfd9661"],["posts/2950334112/index.html","4a3f18f8efde2967dd6c056237b0c41f"],["posts/2954591764/index.html","e393abde39ddcca77c9a9b32c78e7fa6"],["posts/3019914405/index.html","b0c1e61d4ba1907414326667a7ead5df"],["posts/3032366281/index.html","218147e2b7fea97595088efe4be1c031"],["posts/3040357134/index.html","a19fdfce1e60cf83496981473b03b6c4"],["posts/305484621/index.html","375777a1e84c8890b4b1b715d3aa2005"],["posts/3083474169/index.html","26baa769cee7cecd1b6b8542d52f3f2b"],["posts/3099575458/index.html","5c0d6a1688f652593bc0c5b5af9bae04"],["posts/3111375079/index.html","b55dfd8eee79748db8fad28ba3150197"],["posts/3120185261/index.html","64081437b023269eeeee14004beee29e"],["posts/3131944018/index.html","ecc3417404bfc05d3db0b67b8ee2dfc3"],["posts/316230277/index.html","a233988328461f3128eec0b49d8804b7"],["posts/3175881014/index.html","80c7140624fec4f4b8ab64078f05b439"],["posts/3222622531/index.html","78b0fadcc8bafda3bf4feab8c6a72c15"],["posts/3247186509/index.html","052cb56b761d01e5d068715379084a01"],["posts/3269605707/index.html","0ad329bcc2b9e76e9a0befe83f5b6089"],["posts/3291578070/index.html","74a33f8d047043fc7860d9202a055c02"],["posts/331752533/index.html","72f89abc93d7210c55d5a768c1ad4ea8"],["posts/3321992673/index.html","7f881512bdb63da08aa1ccad433df2ad"],["posts/335366821/index.html","159f6018784c2273a5a7568301ee0bad"],["posts/3356910090/index.html","c59db97044ea84032a43491644e6ff90"],["posts/337943766/index.html","e175a4d71d61c817ef0e81bb8bebb787"],["posts/3417652955/index.html","2af22b1693c49d91805d4d7a39dd5ff7"],["posts/3444626340/index.html","5ab42ab48859fadf1429f3e0ca356a07"],["posts/3449402269/index.html","7ea4a4ace765abe0e768cbee31c99262"],["posts/345410188/index.html","d92d52ddfa85ef8e884f61e22e75c14a"],["posts/3461518355/index.html","bc55c37db7986f08870583d3456a5f8f"],["posts/3494408209/index.html","36844a8c326266878cdd2d3b6029361b"],["posts/352037321/index.html","fab6ac4906d0b7b12fd6280bc4c2abde"],["posts/3521618732/index.html","6f84e12b28b909d01812bac613ca3a0e"],["posts/3568552646/index.html","b16b1f1ac46a5f2cf3da6aea528fb3a2"],["posts/3603924376/index.html","810ea6aea7037488e5fe2dcfb18e03aa"],["posts/3637847962/index.html","3563ac205d735b77d69fa0a434d69ab9"],["posts/3642630198/index.html","1b6df8a3b6424f2b0844f66fac7608d9"],["posts/3653662258/index.html","d2fbb8d4f625eb1f061c8ecf651b5a54"],["posts/3653716295/index.html","9afe3a545f19a559ba637c33b9d11a9c"],["posts/3657008967/index.html","1668306c2e9d4c634b4eca895b287346"],["posts/3668933172/index.html","1e77f511ef737c2014957d39357abbb9"],["posts/3677280829/index.html","ae180ece6e8223e42f5a262d912ad541"],["posts/3687594958/index.html","4997b1b663b33855206be1220024069b"],["posts/369095810/index.html","039a37181505ad4a171ab08ecbf35f5e"],["posts/3695777215/index.html","a3d5d7d781475818962c0a3435fece57"],["posts/3736599391/index.html","e864ef5ee6836b236a57c99db685b958"],["posts/3742212493/index.html","f88bacb1a6287eb8e5cac42f1058613e"],["posts/3782208845/index.html","76129a8528fdced84e0092b5ac11daa5"],["posts/3789971938/index.html","c3a62c6a981b6b15546f671da033cd42"],["posts/380519286/index.html","0f401c5666d0546e1343c755cce94887"],["posts/3846545990/index.html","8aeee3ef5d2b98af5147dc59254ebf95"],["posts/3873710624/index.html","9be83902eaa28309a48eb9a245fe71ec"],["posts/3959327595/index.html","bf82dc47cbbb25ca0da5edc324c1ffcf"],["posts/3972610476/index.html","4e6521730f75e14a2eb41497c34bf3f6"],["posts/3995512051/index.html","3a061160e564bb9142fd888e02436c1b"],["posts/4088452183/index.html","4af66c40edd1e15f838307862b501b47"],["posts/4116164325/index.html","a2c341b99f9023df1946b10c13c89b80"],["posts/4158690468/index.html","a0ef301747180904842db0167b7fdd53"],["posts/4159187524/index.html","a6576208c0a6c769030becd14548a48f"],["posts/4197961431/index.html","fcfb5f0391445c6457e213e4ac60e72f"],["posts/4205536912/index.html","4cdf36d6b42c8d225ac3240d0ddd7412"],["posts/4236649/index.html","73e3ce0acf593cbd28ed6cd2a9cf0ec5"],["posts/426338252/index.html","0eb83c4e501679f44f2ffbad49008658"],["posts/450254281/index.html","75f979091ba44077e022e43c58a73b1a"],["posts/4891372/index.html","d4afdc332e01de5f4e39b546b9458bd0"],["posts/569337285/index.html","54713166342018f0b67f30c1165ffcad"],["posts/570137885/index.html","6aee3a674cee030a1e3faf78ff852ddd"],["posts/570888918/index.html","16d4d8ebd0914088490e58846dd97ef5"],["posts/582264328/index.html","515778f043515e7a449515d73cf3e961"],["posts/632291273/index.html","cd4ada166dd6c74ffb259d2b26fb0c12"],["posts/70687890/index.html","be9b6616241f116376578eb490ef474f"],["posts/719322223/index.html","c967ea84ecece16de5445ab7dec4b089"],["posts/720539850/index.html","65220482b1c49482c28089a3a36b8b7e"],["posts/786195243/index.html","d67337973966ebbbe06494911af55e5a"],["posts/795474045/index.html","3cea746bbbfb5f0693cfd45655923086"],["posts/815861661/index.html","e9d3820ba5891ba64debfb8eefe87fd4"],["posts/821259985/index.html","0e4e1615fe100653fa31aa5a5dad0d7a"],["posts/828223375/index.html","a6e6afbedb35566d80a9be9c686db9c5"],["posts/887585917/index.html","7ec04b6fba01d3de8c1c97ed686b587a"],["posts/888549816/index.html","ad4a023f20a3da47069049dcfc012798"],["posts/906436376/index.html","fbaac8c9c8e1c5520a3868fabd5f8519"],["posts/907824546/index.html","4915aa1b26326b6d000e182c995f6923"],["posts/927393529/index.html","33eb2fc5bd6e2fac3dcbf64cdc2e4b44"],["posts/94443781/index.html","e6ff1e0f7ca6e3b546f520c848329a1d"],["tags/2014/index.html","619b513575169b7f287e1ebe6bc38d6d"],["tags/2019/index.html","7430a665abd029629ecc104ad06f6f97"],["tags/AI/index.html","0d20dff9c66d0da6a1706879ab896102"],["tags/AOP/index.html","2e71d49fcb1668e3c4546fab06c04e9f"],["tags/AR/index.html","d2c7848cd59c8e4185dc643cc6eac2a5"],["tags/AssetBundle/index.html","d98a13789543fc7f278fad3cc6b7b38c"],["tags/C/index.html","86eb840e709203039a77d8bcdee644da"],["tags/CDN/index.html","b13c27c2cc83714db5ea8baf02e627e8"],["tags/CG/index.html","a8fcb3147217cc55c8da3ccd5170f6c7"],["tags/CI/index.html","4203335fa4017f95dfdb8b36599ece65"],["tags/CORS/index.html","401288d2bbe73d6d79628aad1c226a96"],["tags/CSharp/index.html","46fc8b63786782820a799ead4a90d3dc"],["tags/Castle/index.html","9c0a3dbcb6a83968040a77d2926848b0"],["tags/DBeaver/index.html","1ab2c9b4a50faa0698491dde5432b709"],["tags/Dapper/index.html","a96ff32b9a362201d93c57ef96b7bf40"],["tags/Docker/index.html","c1d643095d3ee66e55fef2abb8ef4407"],["tags/Dynamic-Proxy/index.html","910c8a7011c5c9518dada8e3b1532fd2"],["tags/Dynamic-WebApi/index.html","cb080bea9b7733e091d0f0c1aca79c12"],["tags/EF/index.html","fbff97fa4790e543f27df05ea9a7fd63"],["tags/ELK/index.html","602e340572ef7cca16dbb4948f1b30c8"],["tags/ES6/index.html","9a7fd91d7b24933768bb3c82d6825493"],["tags/EasyAR/index.html","56218564d71fa8125daee56b9de617a1"],["tags/Excel/index.html","4c5d2994cfd26744bfb4a20fa6c4fbfe"],["tags/FP/index.html","0080de853e6ceb0321db098ac97f12bb"],["tags/Form/index.html","66c5caa609c46bdb27f3fd17caf6abc1"],["tags/Git/index.html","2d84926b9e89236ef30da13791d9b1ab"],["tags/Github/index.html","0a77a2d40d0c1e1440923c90e339e7c5"],["tags/HTML5/index.html","031ce27e8a0849238e4d95f90b4645b8"],["tags/HTTP/index.html","1015b3bfb3480cdcd92d0c1fa9584345"],["tags/Hangfire/index.html","86f374971b412250dcd2b0c37ffb5015"],["tags/Hexo/index.html","698fab2d179fdc1cf2091b7b1af170ce"],["tags/HttpClient/index.html","ece47dbb1bc7f850789f2b012cd3e374"],["tags/Hyperlog/index.html","c91cb3271063645dcd51c26d631da9b8"],["tags/IDE/index.html","b4f24cf28909310049693a0ae94907dc"],["tags/JS/index.html","86e49fefa669d67c452d4fadbeef5eee"],["tags/JSON/index.html","0fd5cc9c4e1875339833f83bc11941af"],["tags/JSONP/index.html","7d8ef891aaed099117a7ee573a5865dd"],["tags/Java/index.html","a99004a8f4397c210d2fdd90d9113d7c"],["tags/JavaScript/index.html","1d85857f7f53385099e855d43829e744"],["tags/Jexus/index.html","111fd8a6e0183e1f8566f2c8a8202419"],["tags/Kindle/index.html","3dec9074745916b6140390bb72764922"],["tags/Lambda/index.html","20d913c74992c370b054f8ffdca5ca13"],["tags/Linux/index.html","ddae953736d3bbb6640552c7ac4434ac"],["tags/Liquid/index.html","5618d72f6fbd25e209d3b76b4d4e839d"],["tags/Logger/index.html","b1133edec52c5cb4e749309f80e246ba"],["tags/Love2D/index.html","c3e15c9f882cb6de4d1e1ca393f17591"],["tags/Lua/index.html","3e791b2f4ca1e2f18cd4c9671d455867"],["tags/MMD/index.html","3848c7f482559d88399183f7852eb7cc"],["tags/MSBuild/index.html","794bf44d9ac9477da6e17999ca0aa983"],["tags/MVC/index.html","efb5b2a321791771cc8dcf2b4d5e96a9"],["tags/MVVM/index.html","604b0f6b24d03d4324ea34b7f3b4b0f4"],["tags/MapReduce/index.html","18d301581d694a9afc08138a2f3d9cec"],["tags/Markdown/index.html","765ec178fcac842e1a77ff6534c8bf1a"],["tags/Mecanim/index.html","cfacc1e0ebf3635dc54fd69c5c788b36"],["tags/Mono/index.html","4581f5a1bb7fb2ae44eaa4616bc3627b"],["tags/NET-Core/index.html","3828961c8b1f4730374ca1e700727e28"],["tags/NET/index.html","2e232726ee226476d8af9aa13c2d43a4"],["tags/Nginx/index.html","3ad49103e9ad9c247144a20cae32b740"],["tags/OBJ/index.html","6e39775dbf25223f083a1094f8b23149"],["tags/Oracle/index.html","3decc9696e65ce60523f9d2aecf7abb6"],["tags/PL-SQL/index.html","6cab968dc4c22c8c1dc06a303a304a60"],["tags/POCOController/index.html","e74daf42db7b14f21de06ac467960237"],["tags/PWA/index.html","5fb0c3e1b20201636055b12436815dc3"],["tags/Python/index.html","31e7eb4b0d254126bb588c65a835cd25"],["tags/RESTful/index.html","d115dd3f55b4ac899a741b7105ad5432"],["tags/RFC/index.html","f0720ef21717fede22d2658d8946eec9"],["tags/RPG/index.html","01650a360ba012c97e1647fe2c97cd87"],["tags/RSETful/index.html","18df51dfe6d7aa2fa30a125ea70991a6"],["tags/React/index.html","b8722f1f56214997e86f7b8886f12148"],["tags/Redis/index.html","0f277b4445f42da76464fb43f1b017e4"],["tags/Referrer/index.html","b7185dd76f49f85fdf456c48d3df3ad2"],["tags/Retrofit/index.html","26ad738b196a84b920e4a844ecbc0f33"],["tags/SDL/index.html","0fc43bb872eaa73cea0f5ac6d451698a"],["tags/SQLite/index.html","df89d0f10feb175c5e76eef1f62290cd"],["tags/SSE/index.html","d17f375d606892c2eb1391df7c8b202c"],["tags/SVN/index.html","ff210307a9f894ff1221ae4168cc7638"],["tags/Script/index.html","a1abbe1512119616480252493adb6a35"],["tags/Server酱/index.html","07c386e5cd606660cd8b690a1a953b4e"],["tags/Shader/index.html","cbb2ede82234f4eb95f5e00f03c57234"],["tags/SignalR/index.html","bc6cf5b8ec6aef66aa21478baa221c31"],["tags/Socket/index.html","c28a191091ae8ae91739a004741e7cd3"],["tags/Sonar/index.html","8e40295459674c57c5d2b300def9a2f2"],["tags/SourceTree/index.html","53c7bf0dacadf64fc86004984bdc81b9"],["tags/Sublime/index.html","49b2e2e701d5e99f40ee449023ecf6ad"],["tags/Swagger/index.html","1c29f106cab470e0f9c06b8141163271"],["tags/Trace/index.html","9fe947f8b3466bc7d86af0d7d5691403"],["tags/Travis/index.html","2af0685235b74f776490640867a07a60"],["tags/Unity/index.html","26c87a0622e1addc026a5e256d78ada4"],["tags/Unity3D/index.html","3c7c543e899b51701616740ae148b6b0"],["tags/Unity3D/pages/2/index.html","b82d1aa566d4127a227b1577b42f12c8"],["tags/Unity3D/pages/3/index.html","b007086f02e2b1771c0673b385552e7d"],["tags/VSCode/index.html","6bf80d2166aa86d252d6ea21b8a55be5"],["tags/Valine/index.html","1738cf7f7af63ec46a20c4698775fa06"],["tags/Visual-Studio/index.html","3d7a052fea85988db0e89df30039b71b"],["tags/Vue/index.html","aca710d70912c9f6859418a3ab001035"],["tags/WSL/index.html","4bb6b4b198414e37ac2e644f911f654d"],["tags/Web-API/index.html","d931778ad5faae4c474f14f5a6564166"],["tags/Web/index.html","9632e9af5e49aab21d2bc5d2d70a5062"],["tags/WebApi/index.html","0b20a9a06d1becbcfc649de0a94a40ca"],["tags/WebSocket/index.html","3015c434609d4b9b05a85585f11851b3"],["tags/Wechat/index.html","6609d31ab45a6079c03b0a9987b28902"],["tags/Windows/index.html","469f70b80c2ec3cb39d2548dec5ad5f7"],["tags/disunity/index.html","bd35b509768e3905b3baf22ff24a8c6f"],["tags/index.html","48a3d8134ecdd7636bf9869d36118092"],["tags/jsDelivr/index.html","279081f100e1da777b2affdf668e9ff3"],["tags/matplotlib/index.html","2b88235ba740a5489816a06f98d5a970"],["tags/uGUI/index.html","fa46d733e9a48bace717a8ebb58b0adf"],["tags/zTree/index.html","e9b6bd1ca4af77531a03169ad7766575"],["tags/一出好戏/index.html","08e2e02204787ede5de06d6a662d7398"],["tags/七牛/index.html","d9f4d9af74fa32e3f1397d61c835149f"],["tags/主从复制/index.html","2bb7922f3d461fd6db9fb94c6d2f6397"],["tags/事件/index.html","e869c1977d5343fbf77a51e1ad21cae8"],["tags/二维码/index.html","b143828f9413c6170af250ef83f8ecce"],["tags/云音乐/index.html","6faaa5293ddf663156b0a951f075d473"],["tags/互联网/index.html","7b6c8eed01812e267020d79fe336f91f"],["tags/亲情/index.html","db006f28015ed3ce7d71b392e867265c"],["tags/人文/index.html","50406ebe93be4b4d280581ba6f9f50a6"],["tags/人生/index.html","ed6577029b2671e45ccbbfaa19bf158a"],["tags/仙剑奇侠传/index.html","3905f0c4144b6c9a07f91ee4e094b004"],["tags/价值/index.html","e186d56d09f03f4fafb90ff6bba475e7"],["tags/优化/index.html","da13fd03d9e5d8545ba728743ee36953"],["tags/全智贤/index.html","6f435b234e3b03c1504f3b30bc395c3a"],["tags/公众号/index.html","5d00dcd97f0423cc326fc2f42e9b1638"],["tags/关卡系统/index.html","cef643d65639249cd50bcf67b8ea3403"],["tags/函数式编程/index.html","c6f8f77ca6848c6bb2a051df9baa0172"],["tags/别离/index.html","b1e4fa7d8e57b26481829b15915f27b2"],["tags/前任/index.html","44d4c2a9df13a3a779baf796ffa2bae2"],["tags/前端/index.html","bdf1f169942b046795b4d4012a67b091"],["tags/剑指Offer/index.html","8b51c2d9729fb213f615b54722f80e3f"],["tags/加密/index.html","8dfe21c08bbd6f54f9c1b75ea7642ec4"],["tags/动态代理/index.html","f08102ee84ff378269b49d851c5a7b5a"],["tags/动态加载/index.html","aa66971e3c1ea584ca6cf1c6c7d3ee29"],["tags/动画/index.html","2b42f3bd511c7828473ab7ad9d11ba08"],["tags/单位/index.html","ded9fd6ee42c5dcca2693f4a01838273"],["tags/单机游戏/index.html","564e359a5b0e6a991cfa12b597393af0"],["tags/印度/index.html","1165091a6dd9516d2ca71fbfce5dfbab"],["tags/历史/index.html","343382ada786beee4b7972fc8de19b24"],["tags/反编译/index.html","6b93822d6280b6904e3d2d2af66319c5"],["tags/同步/index.html","c57a51c8c7c36d8b0a6359159ca06adb"],["tags/后端/index.html","c9a0dcb620b9b20472411b5fd53458e0"],["tags/命令/index.html","5407c99c6af07acea4e2cf8ed0e2174c"],["tags/和平/index.html","7e7f24ae62648374a492b1f7e2135aa2"],["tags/响应式/index.html","6f13bccac517edca9a1d1bedae29af59"],["tags/哲学/index.html","fbbcf64873676eafd5e90a202424902a"],["tags/回家/index.html","acacd959fce20057da3b55ffa95b0fa3"],["tags/回忆/index.html","157a7994949fc4a681a4bb79f62994ea"],["tags/回顾/index.html","b4231c03604afce2f1a7833b1535b9ed"],["tags/回首/index.html","38169cf9c417878c451092761ba85d18"],["tags/图床/index.html","6600ca531c5ac9770b8f4c633a18282a"],["tags/图形/index.html","1bb4fc9aa7233cd8493bf1daecc0186f"],["tags/地图/index.html","6760f3e9965a366322a6f5052e0099b0"],["tags/塔防/index.html","2ea4883359e1c1c191e2310c6832d049"],["tags/增强现实/index.html","57a6105a51e7e5e01566a30c1f143505"],["tags/壁纸/index.html","4f0c39c0fdbe140d3058c317fbb0787b"],["tags/夏目漱石/index.html","b2b5f019e394eb1648c5ba376329da8b"],["tags/多线程/index.html","2decf7349153b51bf6d5e02b12d91ff8"],["tags/大护法/index.html","48552a504ff1991cadaac9f4118edea2"],["tags/委托/index.html","47affea1a286870516201bc715739286"],["tags/孤独/index.html","4d57c91ee579fe647d2490444a324494"],["tags/审计/index.html","4bdd96fdc294b68145d09cf9c198d633"],["tags/展望/index.html","36e2fdb03a91af22fc5ccf826cc320bf"],["tags/工作/index.html","b4baaae47152e870ab61db7c28ccd048"],["tags/平凡/index.html","a1c152b251954d36aa49a84f5f6c32ac"],["tags/年华/index.html","c237ffc4d2de721aaea2a12b3b7fe60b"],["tags/年度/index.html","bb125ff380dfcb69f6c04e07b495ed83"],["tags/开源/index.html","dde89788f70df609af57df7c83b183b5"],["tags/异常/index.html","c0ebb26b5df1ab403857cfd58bd2613c"],["tags/异步/index.html","01fe374c66465099fe2a15df4ef83b5a"],["tags/引擎/index.html","b3441c4c09c9aa48cec7491527151b07"],["tags/影评/index.html","eb76e9e8787b6a08472d25edf5333994"],["tags/微信/index.html","53a46225808780adf632030453541d91"],["tags/微博/index.html","124550f1f6faf7f72edf60baea59c021"],["tags/心情/index.html","1ede076219eaa6f8c5390534e4dcb108"],["tags/思维/index.html","11aaf777be4d1d4d3309e7cfdc61ab91"],["tags/总结/index.html","fb46accdb81e5ea64143c798207e8dea"],["tags/想法/index.html","0e2f20801f3e58c2e267267b31e98cfe"],["tags/感悟/index.html","74b460c932e53ef97728c8e7b944c2ac"],["tags/成长/index.html","1365c6914b461429b6f1f8d44702a7bb"],["tags/我是猫/index.html","552d235a25a89fe9d43739f1a5e55e18"],["tags/扩展/index.html","488565e33d73ee7f612705e2fb0844b3"],["tags/扩展方法/index.html","843bbb2918da1800b5438e57732087cf"],["tags/技术/index.html","70a4c99f6f67694866450a4144d23830"],["tags/拖拽/index.html","27b01d97edb4f8b828e451c6362ef740"],["tags/插件/index.html","901afeb2e902d90cc711e73a33d82835"],["tags/插件化/index.html","95ee6cad320b7c7b1cbf981fbbb6eb66"],["tags/数字/index.html","c1a39acab0c03790a098fbc53f865bb6"],["tags/数学/index.html","93e65e87eb52a24bfe19695981d2093f"],["tags/数据/index.html","e8895cdc79d25857268b1fc8a50dabce"],["tags/数据交换/index.html","4661323f6dc70c1e0bd73c5f24620516"],["tags/数据库/index.html","7a13a633f64f7c4161d42ea62fd1a506"],["tags/文本分类/index.html","f11453400debf1e9b0dbbaa8a33fd422"],["tags/无问西东/index.html","1d14bb58bb2c4eb7949d34043e0a009e"],["tags/日剧/index.html","b28769e2d2ea9a2e82dae2f2e4b1b386"],["tags/日志/index.html","ff34309441be0339696a50e3486b7bf6"],["tags/日本文学/index.html","a647b6d08046f588576b0032c35a39de"],["tags/时区/index.html","5bf370d62ae503bd10936f2237b9e96b"],["tags/时间/index.html","8595a2bfcae8359036edd3d5cf50f435"],["tags/服务器/index.html","0f5bd996c6dc64426528f64fe099f6b8"],["tags/朝圣/index.html","dd1bf9d5a4e158ae4df15630ae2d2683"],["tags/朴素贝叶斯/index.html","b975365033851d8b079b90d80b98a41d"],["tags/架构/index.html","bf845bb52b71dfdfc49a516ae056e956"],["tags/标注/index.html","166972ca9cc386300466ef77b28e7021"],["tags/校验/index.html","e823d7f0ae6a50092e136dbe0602f2c0"],["tags/格式/index.html","61b42efbc079b4b73fb65cb3c0383fc4"],["tags/格式化/index.html","057158ad23de79bafbcf116d35152b4c"],["tags/桌面/index.html","318206a55d0009b34d6f20a257448762"],["tags/梦想/index.html","a2e827df4e6786a40410f650cf0be5cb"],["tags/概率/index.html","405191a99acee39f0ad7acefb0921ddf"],["tags/模板/index.html","696c1415f0c2a183691e64908bdf175a"],["tags/模板引擎/index.html","5e54ae4886638c0fbc44b960df465219"],["tags/毕业/index.html","f428b6569d0d60f87761046e4416583c"],["tags/毕业季/index.html","2bc05e7027f6023a031d3f31e85aadae"],["tags/消息/index.html","460534b2f5b22fd3e0b3ec512ea501c0"],["tags/游戏/index.html","2dc6c8fd375a3978a02a7edfc2ce6fe5"],["tags/游戏/pages/2/index.html","8338843fc5fb0e0a3cf821c0286a44fb"],["tags/游戏开发/index.html","900447df1afeccb1d1fc5f7d1ab64647"],["tags/游戏引擎/index.html","5c08550f62ac321d4451cba85a513fa4"],["tags/爱情/index.html","6c06bcd21875a2d63635fee9f119df93"],["tags/版本控制/index.html","8bcb84dcb62ced4e59946d4b06bc3659"],["tags/版权/index.html","63510c6fe272e3922c38430e48ba9727"],["tags/特性/index.html","60014662ca6a80547d80cad21abf9607"],["tags/状态/index.html","656033bbf3f1cb52a00762014362d6f9"],["tags/现实/index.html","871969ca58aebc38617a049012140327"],["tags/生活/index.html","8cce78c7a73a5bf3e4d1531bd61bbb27"],["tags/电影/index.html","9b62686d5d68a98af4271ce52ac2e6e8"],["tags/画家/index.html","db29d3fed0d8895d63e72212d8935c3c"],["tags/知识共享/index.html","f06cd52e9c609dd9234996628c32bbba"],["tags/矫情/index.html","b6c76ad0407213f8c8007b21dfc3e82e"],["tags/程序员/index.html","ed06387bdf1c0bb592a0c05b44faaabf"],["tags/穹之扉/index.html","d000b165a0e7bf0ccdae17f5b17d84bc"],["tags/穿搭/index.html","c92de330872d52472ecbc72da4cdd9e9"],["tags/童话/index.html","e74438a68cf5aa012264f3b6ccea7fcc"],["tags/笔记/index.html","3e07483cac0c7b5c684860e33f785b12"],["tags/算法/index.html","43a57fb7e935b0d51a6bc4958864fe5e"],["tags/米花之味/index.html","8a9bb2b192047208a6ed1ed4a18eb3fa"],["tags/缓存/index.html","16dfdb4c592d4f0ba5c1fbbf20346e9d"],["tags/编程/index.html","31894f694ca9e1778a1dccc2c44d8943"],["tags/编译/index.html","2de5deabb4e852c3f3a6eef488f852ee"],["tags/编辑器/index.html","568ca41db1f9d207655aa59403efbb2e"],["tags/网易/index.html","13b31625682e6d0d22afad53716557ae"],["tags/脚本/index.html","04c9f17fa7411a178f74548fed78cdf9"],["tags/脚本语言/index.html","add399312592a1afbf9b7bf570d0c3c7"],["tags/虚拟摇杆/index.html","7808b510fb8c1b576c7acee02d238d8d"],["tags/蛋炒饭/index.html","8ecf0c2e4aeffa51705f1f7d1157e921"],["tags/表单/index.html","ea160aca8690555ccb91f9a33f6a1276"],["tags/装饰器/index.html","0b4a5b94207a4a17d59d669a4101a201"],["tags/西安/index.html","a99a1ac6acb01abc0bce479233e87a3f"],["tags/计算机图形/index.html","d9fac3d9e6fd6595ab4150cd0a58924f"],["tags/设计/index.html","802e08455b57f9b2239381605162dd80"],["tags/设计模式/index.html","8e6557c79f6d6cf64717f22b71acc461"],["tags/访问量/index.html","42ee9457a8604355484295487e7234b5"],["tags/评论/index.html","112b46b3563e51cca29671ccf45f1d84"],["tags/词云/index.html","c367aab9db3a635613bbc05d98c89725"],["tags/诗人/index.html","b8682574341e0f2fefdbf6a8f133fdba"],["tags/语法/index.html","4555cfc6e3b0b179d31d5f533eccee45"],["tags/请记住我/index.html","76b07683351dec9f01c5431d6827aab4"],["tags/读书/index.html","3e0237e14f367dc7d366e8bca025142d"],["tags/读写分离/index.html","cc22237a58aef5acb6bc6406a9bacaef"],["tags/调试/index.html","48b0085786a0396196ffee9dbd67b3ac"],["tags/贝塞尔曲线/index.html","22c2d4156282de595ae1577994adf54d"],["tags/贪吃蛇/index.html","0c739c6b4932ff6040606153d29ff4b4"],["tags/资源提取/index.html","f16c1244a7d617f216361b1d9e04077d"],["tags/跨域/index.html","1321248865d4a3d75bf55dc6608d9836"],["tags/跨平台/index.html","9f4b6c2a8b3937407e269c3c5ed94602"],["tags/转盘/index.html","824ca5190e807b4bc5919e658cf1ece7"],["tags/迁移/index.html","7d9cb71b194bc358ed24b17e449e65d2"],["tags/通信/index.html","04c8cdcc49528a44c8d4a77e798f2e55"],["tags/邪不压正/index.html","11794a982b600cb6b009282141e97a83"],["tags/部署/index.html","2e845a103217faba27eb1154f7bd5bb8"],["tags/配载/index.html","c1ca5329fa7abd3807c71b82bad7a098"],["tags/重试/index.html","9ff7d5062c9c83bf9c15fe5aa114d8a1"],["tags/长安/index.html","fbe8b770aa8f056ca260263115ade649"],["tags/长安十二时辰/index.html","70469c06a9f30d9590a7da86414ad2a3"],["tags/阅读/index.html","e1c3e1eb3ba98d79bd8811fb052a992d"],["tags/阿里/index.html","cd07e8cc4c37b151b0458855e0118311"],["tags/随笔/index.html","e92ce79c2420ad56821f38b6ce8f8a2a"],["tags/霍金/index.html","d4c7cf2e915e0da9daa27d10c02b28bd"],["tags/青春/index.html","9af8c10042207922f2bb283907063aa1"],["tags/面试/index.html","cd9b47b5cd7e164b7dd7dce6781922ba"],["tags/韩寒/index.html","f93a006acc4a5014a75f002d7c3fd93e"],["tags/马尔克斯/index.html","c8c40bae3e83cc5e4dac9b3b8d54defa"],["tags/验证/index.html","75a77bec2bf1a1014aea2dce165dc5cf"],["tags/黑客/index.html","4f32b1d60cc225f0fd2561fb143d65d7"],["wiki/index.html","b76c897ab3b53a312fe02fe0fec740cf"],["works/index.html","df7b7b9a694dc0a5bb31df1f968379cc"]];
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







