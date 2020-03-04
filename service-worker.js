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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","e2c7d98f12ed5b3632843294f84de3a4"],["archives/2014/12/index.html","12c91515bbdbee0dcdfe1700dac43a1f"],["archives/2014/index.html","9fd064c5ced958f440c67051c513dab8"],["archives/2015/01/index.html","8e44a93e314ebb979d327b35798c7a6f"],["archives/2015/02/index.html","02cce5624535a4cc6a74dc48d7f793a3"],["archives/2015/03/index.html","a561399cb4eb74ca39c10e101653ecf2"],["archives/2015/04/index.html","fc27306cde040a9bd1e6e6b489745b21"],["archives/2015/05/index.html","ac1aac8de12ad47a06cf1336a490787a"],["archives/2015/06/index.html","382588b703c62d1e1df7dcbf1ba98170"],["archives/2015/07/index.html","e5e7ccc0b19612298fd0d10466047d15"],["archives/2015/08/index.html","5b71f07b78c5bfe879d12a59a3e1ba34"],["archives/2015/09/index.html","227a859e814f0b65a01d7af220d1a8c7"],["archives/2015/10/index.html","a98efef73a172374d316a3f8a21d7611"],["archives/2015/11/index.html","4ee9c2f09e0d758dbc022f4394825e37"],["archives/2015/12/index.html","160113ab7b86e6e34022c5c2202ff1be"],["archives/2015/index.html","1b9eba470cc68eb4db1d7ff76e8d58a8"],["archives/2015/pages/2/index.html","c47360d09115999a1a594366d01efbe1"],["archives/2015/pages/3/index.html","de5d6890e27ed0114045896260ed834e"],["archives/2015/pages/4/index.html","0f71417e42d76434727ab8f779be6163"],["archives/2015/pages/5/index.html","f3a9aed28a2df54806d2128606efbe12"],["archives/2015/pages/6/index.html","4db898e05a3c56643a78466a9878d69d"],["archives/2016/01/index.html","5eac48635b0b7753eaec5150e12fdd75"],["archives/2016/03/index.html","53f81de3528ca0d35a1af041b7c2f6d5"],["archives/2016/05/index.html","7ab3a13436268101c6da7464959c9c66"],["archives/2016/06/index.html","5ad6837505e02a1cfdbc946e13d004ca"],["archives/2016/07/index.html","9764eb79f7a328e16083f01687d7b453"],["archives/2016/09/index.html","6e6c19d0eb9d54df4b289a0139c67327"],["archives/2016/10/index.html","04085c7ccbb938ba4696487e3166c346"],["archives/2016/11/index.html","624f649a090ad8eb1a8c9bde6f7dfb7b"],["archives/2016/index.html","7a9a46935bc0c4dc40f8ced3bf118623"],["archives/2016/pages/2/index.html","4ed8889e7f0b30af40983fe98d48a32d"],["archives/2016/pages/3/index.html","83a514a467f7002e6bf78e9127cb7cb8"],["archives/2017/02/index.html","7b9c64d0584fed7263df7536b8840559"],["archives/2017/03/index.html","0961cc647fdd378f4fc2ebb48a1369e8"],["archives/2017/04/index.html","bc6df62fd97b8a380fc1dbce2ddef5c9"],["archives/2017/05/index.html","aa7b20ffa95c818677493e7450733499"],["archives/2017/07/index.html","94c3e3cc8732a3338d28a7acb0ba4526"],["archives/2017/08/index.html","36a960293bf2ded20baa4f88b5c9a35e"],["archives/2017/09/index.html","b6dbbb658a47621b2bb48b01754e0747"],["archives/2017/10/index.html","1ba47829c8d656dbaa48996013ecea77"],["archives/2017/11/index.html","4a9ccd2f1db65878ecf048bc271ae1fa"],["archives/2017/12/index.html","112d4cd93d4d0a5e21ca482d7ccb2a3c"],["archives/2017/index.html","bce7e35f63f90d94b2915a22e4d49308"],["archives/2017/pages/2/index.html","905245f912eb0c6e03da3246122cbc2a"],["archives/2018/01/index.html","8388a849b19b918fb5ae8f4f273fcc19"],["archives/2018/02/index.html","f2a3cead26c0cd84cc6c04164885a331"],["archives/2018/03/index.html","20178b076e02c0a71fbd9ad650ab2a94"],["archives/2018/04/index.html","9843f98a5bca6ae3f42304daac21f56d"],["archives/2018/05/index.html","e051f47ba33cb864b15edb1d4531fcc2"],["archives/2018/06/index.html","686435048ef6e665e2f792f86ef43cb4"],["archives/2018/07/index.html","2abe54d3b36e19b87c35df96ea52bdfa"],["archives/2018/08/index.html","a1cb6ee34a13c4f631a073482e9f964c"],["archives/2018/09/index.html","0852a5d04e33a48605fb4d1acc001a89"],["archives/2018/10/index.html","f44450743750f79d7bb310a7103ba0e3"],["archives/2018/index.html","5de187746ba90b6ee36fb127cba84d1b"],["archives/2018/pages/2/index.html","cd63ff032a7703014e1b95247a4c52c4"],["archives/2018/pages/3/index.html","f8fbaf0deb86b8f8b49002ab4444bab5"],["archives/2018/pages/4/index.html","5ccd923e158eb36a8c7be9a0cd6e31ba"],["archives/2019/01/index.html","b0a4d8e5895b3e7a192272c968baac63"],["archives/2019/02/index.html","75904f4d65c74630d3690257303591c0"],["archives/2019/03/index.html","1d543774fefc658c25faf02a3da945c6"],["archives/2019/04/index.html","f540cfd8138ef1bf4d37c83ccaf0fee7"],["archives/2019/05/index.html","d8c24fbc8633a5065169b0586128b24b"],["archives/2019/06/index.html","7849a4cb39c66bd7442ba63ff0da6072"],["archives/2019/07/index.html","9fb6904e7107b132c1086090102cb4ae"],["archives/2019/08/index.html","5a2d5e96e6f59774192f87f1fe87e316"],["archives/2019/09/index.html","8f516982b52c19e208876b5c78d917f7"],["archives/2019/10/index.html","dd75a503ef95652c8832d73c7f0644be"],["archives/2019/11/index.html","465acc39decd00ee1b9e7622ebdb5668"],["archives/2019/12/index.html","f8da50a4b121d9b28dda6d70364bca2b"],["archives/2019/index.html","68b2d7653b1257ae7c54355e64505a51"],["archives/2019/pages/2/index.html","96b1bae303aa92640dc3c65bfe3a240b"],["archives/2019/pages/3/index.html","0325180650d39a482c8b485e047e29fd"],["archives/2020/01/index.html","0e289d13763f454c8a3a5046e622aa03"],["archives/2020/02/index.html","a433040230bff023000d2ce4fe6926d6"],["archives/2020/index.html","a0db410cdb96c9600cf0f4a5bdcfaaca"],["archives/index.html","aabe713033a6aa3e4f1fef2ab089f126"],["archives/pages/10/index.html","37717e9a8f21fea1c5a7bc5c2888d95d"],["archives/pages/11/index.html","fa92a8b401030335bdbe270db24d28a6"],["archives/pages/12/index.html","98841fc3e29d79bd4029fcecbe4cf93c"],["archives/pages/13/index.html","8c7095cf9f167955803e57879b765a8d"],["archives/pages/14/index.html","f0e73170c4450a55f5891400910efda3"],["archives/pages/15/index.html","2c19ebca81d6226c8aba515d14920cfc"],["archives/pages/16/index.html","af2a63163292aab98d1cdffa0a78c235"],["archives/pages/2/index.html","6eb5f2e919db9640ccf1e521507d60fc"],["archives/pages/3/index.html","d2be0c3ac0124a576d4de7ddf296ebd3"],["archives/pages/4/index.html","296a770836338e77fa0bcbd74574c0d4"],["archives/pages/5/index.html","fc438e1bf56eec92716250d89e741118"],["archives/pages/6/index.html","cc4ebe94b2524cce5af79abeb58c5b4c"],["archives/pages/7/index.html","e084c66b52d24f32ef17dea216d8ff5d"],["archives/pages/8/index.html","58983a76864514ed12e67712f3e57a8f"],["archives/pages/9/index.html","8af4a390f488544b13ddedf8ef80184f"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","694eeef3cd74299121fd753529faab24"],["categories/Unity3D/index.html","07c096c9d56daee302d609ecb06f871c"],["categories/Unity3D/pages/2/index.html","56c2e43e9c795945e668c399221a0a57"],["categories/index.html","47ab0ec6cca3f03b94eebec243ad791d"],["categories/人工智能/index.html","660b5b272f25eb092f7013cf6240a8be"],["categories/前端开发/index.html","3611f8055069583f3330ed1d66d092a6"],["categories/单机游戏/index.html","b749f61e9f6a6be4506362ebc918fbf3"],["categories/开发工具/index.html","930d207c5ba63daae1b7e71f46eb1608"],["categories/数据分析/index.html","78889d4f0ad240f7579fc96e73e96808"],["categories/数据存储/index.html","887df4f83fa76ddbfbb077dfc3c97333"],["categories/游戏开发/index.html","2d36cc9d33049fee4c69e1edd3430f64"],["categories/游戏开发/pages/2/index.html","c781c77f30afcf95a9a35d49ca1b0b4a"],["categories/游戏引擎/index.html","3b7c2e500e73e72e6b1b6ec83d35f83a"],["categories/独立博客/index.html","03f2b96dd014849ee49b9037367d82a4"],["categories/生活感悟/index.html","a38c1ff6cead6d52de76c14b11b790c7"],["categories/生活感悟/pages/2/index.html","c784ef1f5facb0f6962340065fb8c4ec"],["categories/生活感悟/pages/3/index.html","373c85e2ea6fe8705517ea59c4cd3fd0"],["categories/编程语言/index.html","e931e898b8a17beffca1528ec708ca91"],["categories/编程语言/pages/2/index.html","801426f75a0c7676581a27073a18b76a"],["categories/编程语言/pages/3/index.html","444256a0f8b1bb57ad9a1d3277fa5f6f"],["categories/编程语言/pages/4/index.html","3fcf5f04d16f37c87438422eab7f873e"],["categories/编程语言/pages/5/index.html","3600c3debca2231dabbf582f3103f64f"],["categories/读书笔记/index.html","9c1303272b559de7b9dcdcafca1f6191"],["categories/读书笔记/pages/2/index.html","22774a7db871a3b018d3afb5330df396"],["friends/index.html","dba1226856e5606b5b6465b4a3d989a3"],["index.html","8cc51eacd76dc7b267fc883cc555535c"],["movies/index.html","9c1bbc2e38c8baf2a83fca0c22654dd9"],["musics/index.html","b82d7c5400160df92357d8c05e5c754a"],["pages/10/index.html","d92a94eb5d1f29ba0280aff74c34c458"],["pages/11/index.html","62e15fadc549d2b292a1756daf5d0d96"],["pages/12/index.html","cc519570d65547c7976fc17685869cc0"],["pages/13/index.html","f6bc7317d710a7f6a1ac78810c9c29c8"],["pages/14/index.html","14383c53592a07d521afae2a7610c5b4"],["pages/15/index.html","695bb1bcfaf0b814caeb499ef9742fa2"],["pages/16/index.html","201bdaaf956f9070e9f3dbdfce093113"],["pages/2/index.html","7d5c94d718bc221ccc02ac74e1237c26"],["pages/3/index.html","90900e15efd33783fb2954b211b66a97"],["pages/4/index.html","b52b49ef1c41b181b9629a7fba8b8de4"],["pages/5/index.html","a616436a1cb3f009b281a5b1e3d7ee96"],["pages/6/index.html","dc6b8a80df4c118add61bd1a204f3a52"],["pages/7/index.html","55f569e7e246a3e1c9e69d992ee79ba1"],["pages/8/index.html","63ba467da149445c684888e852e63e08"],["pages/9/index.html","8343627f71dc55a2ad4baefef1b29afd"],["posts/1059499448/index.html","bd633616d8741bf926e386e177930c24"],["posts/1071063696/index.html","58ecb454ce9b4b6d4214346066ed9ddf"],["posts/1082185388/index.html","77a712d8fa0c128c382269d7756a29e2"],["posts/1099762326/index.html","d3ad61415b06997f27f589c40620cbab"],["posts/1113828794/index.html","462ca0d1fdbee4c39622bbb324e3fc47"],["posts/1118169753/index.html","2b83ebf059bf4bfb612b5fdb02e8b785"],["posts/1122710277/index.html","6c247c7ad746285bdc6d225a098d06a4"],["posts/1124152964/index.html","e6cd27a78b19aedd29ede8cd1eedc0f8"],["posts/1127467740/index.html","ede0e7bbf4434206adf95aa9da62a96a"],["posts/1150071886/index.html","b3d9273702f93be9be579381aaa82d91"],["posts/1150143610/index.html","bac872da47ce23d0a0d3b3bbefac07e0"],["posts/1152813120/index.html","6da4a9e3c3ad6f29f55232c3ee8fd5cb"],["posts/115524443/index.html","06f10e0f0177b3ded1be1898f87b7d89"],["posts/1156673678/index.html","99672c570848f78ce14a038e02aa0fa4"],["posts/1166840790/index.html","3f1f3ec155cce474070024d2a112e21b"],["posts/116795088/index.html","67a14a9cc99b15a55b82b9478f468eb3"],["posts/1176959868/index.html","284d601c584065eb67f95e178bae9af5"],["posts/1190622881/index.html","32c6b56860f8b03fb2a2184ba576285c"],["posts/123663202/index.html","5212ecd356c0baefc7bfe20e90346881"],["posts/124807650/index.html","ba6de48c1390d3955d9cb93b2560eabc"],["posts/1254783039/index.html","a6826bbdbc68f68575d898d4b30a4ca1"],["posts/1320325685/index.html","e1b821c80f80252736c98a10dcb8cb8c"],["posts/1329254441/index.html","85eb0525431fa9f8ebfcc36b89f17320"],["posts/1357715684/index.html","9aff0892c3f818c06e2ca6f46c065038"],["posts/1358971951/index.html","e2004b4a75944e4996cecdea98a1aa01"],["posts/1386017461/index.html","858763c927eec4700395fae94a0706b3"],["posts/1394521917/index.html","024047e776f14ee284d7be7a2937cd4e"],["posts/1397717193/index.html","383c7877bbb4b89a46904ca73a89ecba"],["posts/1417719502/index.html","248973a98cf03299c71a53b30e5bed7d"],["posts/1424645834/index.html","a2e0523226e67f71efb33cc76ef5e19e"],["posts/1444577573/index.html","e2d00d920ebe40e865743dc8daeeff48"],["posts/1467630055/index.html","71bee3a60787a4f97391f7e63b80179b"],["posts/1478979553/index.html","19dc20d6e78300746cc770de6dc71866"],["posts/1540537013/index.html","3201d5b663d79e45fdfeca3b82c1a1f9"],["posts/166983157/index.html","c1ee21b6a84c2a792b2d6ba2c3606458"],["posts/1670305415/index.html","2ae2c5937baf19a9f3a25d3aec0eb983"],["posts/1684318907/index.html","5813df72a365b9c9bab12aa9d605f8f0"],["posts/169430744/index.html","4c91a8258561dee2cfab24eacd9afcfe"],["posts/1700650235/index.html","39a0e433a8eb98177c4bf35ce72a26b9"],["posts/172426938/index.html","7b6b9ba39f5479e75dbe4d181ba37063"],["posts/1836680899/index.html","35646c121c10ebd0b6126742db0ce139"],["posts/183718218/index.html","ba7e171ab625a2004b92bf7f5667dbc4"],["posts/187480982/index.html","6ac8a6cd787045dc0f9657d23fe245a2"],["posts/1930050594/index.html","d824f5c8097c6c4f933d2c7f6f35753e"],["posts/1933583281/index.html","ec337de4aa9a0fe3e77ce6209fa8b774"],["posts/1940333895/index.html","47be7c1c3cb6c93aaaa2ff86ab5c8cea"],["posts/1960676615/index.html","ef6f9c3d13970e4476a30df84c0c8458"],["posts/1983298072/index.html","1ada0d503552cf4eae4ae1cd8549c28c"],["posts/1989654282/index.html","5717ef1a3f27d7fa66de1be190cd2f64"],["posts/2015300310/index.html","d203ce89715de3809faeb5215ea75bb0"],["posts/2038378679/index.html","1f87f794bb6ad2b0b45f126f984112e9"],["posts/2041685704/index.html","0cb2890f58b585975084199b6ae5c5cd"],["posts/21112647/index.html","63f6956ed235d1680e16f8e288accc7f"],["posts/2158696176/index.html","f26a9def06e749847a0cf3613bc4630a"],["posts/2171683728/index.html","9b4d0a77a1768b4801297abe1e26b18a"],["posts/2186770732/index.html","292831fb822bbe24cd722f49949848b5"],["posts/2275646954/index.html","49863d3f82b021a42c36c4ffa24289f4"],["posts/2314414875/index.html","73a345fd232a5276fbf5bbff28bc6598"],["posts/2318173297/index.html","f1dc80b96f0dbf39d981fc57dd46a45b"],["posts/2418566449/index.html","d993218308694f5f0ef1c7fd2715194c"],["posts/2436573863/index.html","041b0ad8b6c6be5a7379a459b0a862eb"],["posts/2462008667/index.html","6a94323d3944222f494a527194b000e9"],["posts/2463121881/index.html","51f6977c0474f2f59ea065f435084d12"],["posts/2527231326/index.html","90312770154afb22ee16c1511a3f47a7"],["posts/2583252123/index.html","d2eea48ce25aad8bfa309fefde64560d"],["posts/2613006280/index.html","dba88265825ea3720f699671d08b5978"],["posts/2617501472/index.html","23f0f79203699520c378c21b0b6137f0"],["posts/2676125676/index.html","7b86809ec79cd22fd453e2b8e727d80f"],["posts/2734896333/index.html","8b11fbb6ee615e908fee2030949ee624"],["posts/2752169106/index.html","f9692d1006a863d330aabaf362fbc6e4"],["posts/2799263488/index.html","8e305b0b950614700583728f0a28cd06"],["posts/2805694118/index.html","c04ce9620f86a0aabdb131a1718007e2"],["posts/2809571715/index.html","0d1646402003cd280b9b19f694064c77"],["posts/2822230423/index.html","47b64801ed11e2b82adf73d62a00d6bf"],["posts/2829333122/index.html","3d35d74678c8c5ea587e29b1d5fae077"],["posts/2911923212/index.html","fb79b852eeddfd52a940c538812f8bcd"],["posts/2941880815/index.html","9ffaecffbbe37bce408183409c7fba98"],["posts/2950334112/index.html","a2920df14c490e14a59110408e437615"],["posts/2954591764/index.html","64cf5d04130b28256b4ffda562aa87eb"],["posts/3019914405/index.html","d102f57f3169664483cf4e1b61e3ac06"],["posts/3032366281/index.html","71bc7ac1bf17c7d6de9b1de9dc637c9e"],["posts/3040357134/index.html","4f4e28c3717d962cc3b3eeeddcf79a57"],["posts/305484621/index.html","aa0916f781c7f2cc539be2f09d032ef6"],["posts/3083474169/index.html","51753ad8e3c4153d00d63d1ca5ea0778"],["posts/3099575458/index.html","9e7b2f41bdfdf0ba23c04037318af0cc"],["posts/3111375079/index.html","292950a530eb768dba1f701eaa6dc3ba"],["posts/3120185261/index.html","755d0cf828f4106626fe640a8c793d14"],["posts/3131944018/index.html","2f54bf1e97d8a18519281036c63dda83"],["posts/316230277/index.html","5936c6f09e15b859195a5291e70db634"],["posts/3175881014/index.html","76d03145b68ab86076f7aef69ced8ad1"],["posts/3222622531/index.html","129cda7a728e7274055f63bce94d53ba"],["posts/3247186509/index.html","2d7f4b9ad24b964cdaf19a1495eb79c2"],["posts/3269605707/index.html","78ff65876247d71732832023eab7b2a5"],["posts/3291578070/index.html","f93ed3d97b419788eb424110d03f6234"],["posts/331752533/index.html","dbf87b79f04127931b3f60b6ab9545ad"],["posts/3321992673/index.html","09988d0432c73e57fb256257dac44efd"],["posts/335366821/index.html","6652716654d0684b7462553e25335b7c"],["posts/3356910090/index.html","a386512eca569d6997c1a111280c57f1"],["posts/337943766/index.html","30189765ae7d3c3479417149be79302d"],["posts/3417652955/index.html","1c1e387d907abdc5adccb961a34e8f55"],["posts/3444626340/index.html","0e5345b4d502de704a088ea346c6e040"],["posts/3449402269/index.html","18b63dbdc2165fb596639bc3557154b7"],["posts/345410188/index.html","3a225a20ebe00124c9e649d7654e916d"],["posts/3461518355/index.html","d57aa381ec414ed48b7dba4a60636b11"],["posts/3494408209/index.html","25968283535963bb69d1c5595891050b"],["posts/352037321/index.html","9903def4d948cef2d36fa03eda0a9801"],["posts/3521618732/index.html","19bade0c2974f58a0b4664303a31bd2f"],["posts/3568552646/index.html","d160c02f90bef5f05752ac77b3177088"],["posts/3603924376/index.html","213fa287aaf6cff53d4418f8c212b7d7"],["posts/3637847962/index.html","c69fec3d0dcf6ab4020630a3815e505e"],["posts/3642630198/index.html","487601fb4dc8ff1b78d6510def085f65"],["posts/3653662258/index.html","7102851a2f4a77158285b2d6c77ecdcf"],["posts/3653716295/index.html","db0522ee6e14ec506f96883776c31e58"],["posts/3657008967/index.html","72fe0f62b8b86ca6d3c1ea7d3e06cddd"],["posts/3668933172/index.html","fc4407ceadbf58eddd3898bd3e44fedc"],["posts/3677280829/index.html","656115584a80bf3fa6fe1d7df1ca7d10"],["posts/3687594958/index.html","cf139b5d39755a96f2ec96154cbe1edb"],["posts/369095810/index.html","547fd4b3720697f3f3fa81da9f0214b5"],["posts/3695777215/index.html","e8caa2d355dc1caad893e28a0a299c37"],["posts/3736599391/index.html","c6eeecf5af0754c2ba6d6f904d0e9444"],["posts/3742212493/index.html","87bc17c898420af86d9762c2a56bb541"],["posts/3782208845/index.html","5ddf5299a343f53c295f945c9de0f78d"],["posts/3789971938/index.html","1ddac1cb177a31fbcfb404d8fb977091"],["posts/380519286/index.html","47b8c2353ca357da1a5a95c74bc9e27b"],["posts/3846545990/index.html","353983659ac247bdee5e8ac052dc16bc"],["posts/3873710624/index.html","6f93af38f138e1b97087a372627b8365"],["posts/3959327595/index.html","0cf8192b7949cbd5b2846c0b08b32e69"],["posts/3972610476/index.html","7d4b23412a09a113b4721f7a339cb96a"],["posts/3995512051/index.html","75f82f50dcdf2c5018ccdd97f5e513a1"],["posts/4088452183/index.html","573f7d633ab4e15e9c73361c1f24b8b6"],["posts/4116164325/index.html","216f7cac20896d2153c446848dfa36b7"],["posts/4158690468/index.html","e6b4a618770a9ab12d03d9a8df8db174"],["posts/4159187524/index.html","9e7ce86ee086f1f3d2d568132f6ac1c8"],["posts/4197961431/index.html","df4e8c2d55afc8012e0d6bbec68c1be0"],["posts/4205536912/index.html","468e1f7b8b107f832a1a5c753061cdd3"],["posts/4236649/index.html","a594cc05ec293e3568495f2039e273e9"],["posts/426338252/index.html","4aa9dfc9eafe0f60d9c67f0163fb6ea7"],["posts/450254281/index.html","decd8e177c432512cd6d2f1482193111"],["posts/4891372/index.html","2615501bddaeb0e74343eabbcc90c7dc"],["posts/569337285/index.html","178a77ca203e52bc468a16767383f0cb"],["posts/570137885/index.html","849afc81a9a8dae162b4074add5ba44b"],["posts/570888918/index.html","e2e953a5e314b3d47a7d45f59c95e5aa"],["posts/582264328/index.html","8e8399b15cbfe4ef077cdbaa269dddbc"],["posts/632291273/index.html","ce792791cbb201f5444b2c952505ad12"],["posts/70687890/index.html","72b3af1e91f1755bc59c7d583185e265"],["posts/719322223/index.html","945a3c44296afa6b806dbd8b7a8c5489"],["posts/720539850/index.html","7d7468794a95225e8387cc6cb02aee90"],["posts/786195243/index.html","1aafdc87f762cd09056611aa93dc21eb"],["posts/795474045/index.html","d004d0a1f2affeb9846bad6a9bb036f1"],["posts/815861661/index.html","ba518c1dd7f3a4ae5d8480b061a4eb27"],["posts/821259985/index.html","05863111983396e5fde0ea01d154a015"],["posts/828223375/index.html","129f9437096f0dfd1a7beca8dc80635c"],["posts/887585917/index.html","cdda73a8bf88c6eb5d3f252b931c1d21"],["posts/888549816/index.html","ccdb41734855be704d93b78a713b2c3b"],["posts/906436376/index.html","17df46d19ccd011bcf4ca29070f32a75"],["posts/907824546/index.html","c4627b902fb459393bc912263b0dbb96"],["posts/927393529/index.html","876cce889765b5761fbfef4aa28ed49f"],["posts/94443781/index.html","6d4d817f53606ca6242c47576bc46000"],["tags/2014/index.html","9e47a9f8a057198afa0b81970feed1cb"],["tags/2019/index.html","9b72260c9405875ae724a1b8432bfe1e"],["tags/AI/index.html","046c9a83fbb7c46e6de71ba12943350d"],["tags/AOP/index.html","75e4f3a4988a8da81eb0f53a8bfac48a"],["tags/AR/index.html","50b5281e18ec0fe17e34b9a1594ecf01"],["tags/AssetBundle/index.html","3b76482c12c94c8a3e7ced17a1896e6a"],["tags/C/index.html","7f247e7b48d13e4ee1681582351a58f6"],["tags/CDN/index.html","7821df230f88708f45670042429287f9"],["tags/CG/index.html","86e8396f1b213ef49a7ff8546660ee88"],["tags/CI/index.html","2a93bfc0fe210b59928906db44c3b65a"],["tags/CORS/index.html","cbd06bffe1b4c0eb8e4ed9fb1994c9a9"],["tags/CSharp/index.html","a0cfd0455d63e4406b22ea0c341d5bdf"],["tags/Castle/index.html","5a3ab8bf74da8fcae07dc068f11f918a"],["tags/DBeaver/index.html","5cf64e485905e661c99eb6f90614e27e"],["tags/Docker/index.html","988d7f0a1ac8f9820b36665db4028a1c"],["tags/Dynamic-Proxy/index.html","a63faa5cade6c503127c5b5689ad6e6a"],["tags/Dynamic-WebApi/index.html","b8590b0ff0a25fe8c700cdb8c0d454de"],["tags/EF/index.html","2e5eb2765a4e1a66aeb555f319dc41dc"],["tags/ELK/index.html","5dec79c09c42b1fe946fd478a8eadc0a"],["tags/ES6/index.html","ee0d589d77b8a104abfab038036762d1"],["tags/EasyAR/index.html","62ec592b6aa000a4db633dfade23c83b"],["tags/Excel/index.html","138ae2c5a3a6081c8e2036be2f63f09f"],["tags/FP/index.html","d908dec1f706f6c4423579fa18888d9a"],["tags/Form/index.html","f4c64210368a9f5d8a213a5672ba071d"],["tags/Git/index.html","29ad3aa13016f4a922126ecedb123fa1"],["tags/Github/index.html","92e5c379845de09ac8244ed502017a33"],["tags/HTML5/index.html","8bbbfd8e302f277a91a3e94363587193"],["tags/HTTP/index.html","bc81b6483d3769c8897fe8dc25c0d269"],["tags/Hangfire/index.html","62b6342c8ff80f9eaefe1aedc9a506d9"],["tags/Hexo/index.html","e2f78733dbdef03d1c61a916d8519fee"],["tags/HttpClient/index.html","9b7802671414cefa41aca12b41b5f468"],["tags/Hyperlog/index.html","2c9ae684803c8105cc5bbc8be8940b2f"],["tags/IDE/index.html","05eba31575e7186cd6554e58d57bc943"],["tags/JS/index.html","ea313956e14af5ef90b86e8751fccb1a"],["tags/JSON/index.html","3f5b1d0bf9337919953f8317623b0ad1"],["tags/JSONP/index.html","ca5ff7a6e151c55216437289a98ae41a"],["tags/Java/index.html","664bb3faeabeb11390894156d7c3533d"],["tags/JavaScript/index.html","5100ebdfbc9103c401982ff5d63e3227"],["tags/Jexus/index.html","4fe7c2383eb7a1cb9086e267be6842d7"],["tags/Kindle/index.html","ac516cdb127ba384c3c934cd29422012"],["tags/Lambda/index.html","37809740a757d0404afb0b0b033d598f"],["tags/Linux/index.html","2ae2ae2645c4809ce0d6aa9ad35a2856"],["tags/Liquid/index.html","cc3b7c70cc02fb7ae7c7e49635a9d74e"],["tags/Logger/index.html","f18adc4100355c86b43ef684dc69d669"],["tags/Love2D/index.html","b528d61ba3ef3e2755be8132ad095168"],["tags/Lua/index.html","588190bafbf2e15f3c8208df02fa88cd"],["tags/MMD/index.html","2a351083b1c5006e478e1f046a80dd69"],["tags/MSBuild/index.html","6b1e958639739f1f1e75d1a6d6d50145"],["tags/MVC/index.html","da7925f6a8e28310cf381c432ec0b27a"],["tags/MVVM/index.html","e5fe9383ebc5919e069bc756fc54c224"],["tags/MapReduce/index.html","abbad0b045f40ca1b74ed23d61be80af"],["tags/Markdown/index.html","5e7f245c150663ed09000bcc163f5637"],["tags/Mecanim/index.html","f3e9579234b9e8e1063fb6aa3e7068b1"],["tags/Mono/index.html","c7091ca1920452f59fa4761c69e34acb"],["tags/NET-Core/index.html","ef12ca813361ea83f4b99102ec25de9e"],["tags/NET/index.html","ca4e0348696abbee8fb669296440209c"],["tags/Nginx/index.html","f23401658ffb7bad2ad68c32f414bc5d"],["tags/OBJ/index.html","ad3cc83e49a3717fb6715d9f6f41c63f"],["tags/Oracle/index.html","f874fed097f7a2936ba6f5d387981e6f"],["tags/PL-SQL/index.html","ef68c5488d2b5ac516770b946c2425dc"],["tags/POCOController/index.html","ff319289575a48c7f2e614cb150a6cfe"],["tags/PWA/index.html","c7fc6d9d2b6795b9502607ac449814cd"],["tags/Python/index.html","22a6e85b0502dda0c1bb74fd834488ff"],["tags/RESTful/index.html","dc32263d54e706e12872accfacd6d208"],["tags/RFC/index.html","a49ecd5525c396c3128bca22ac248f63"],["tags/RPG/index.html","b88a083b07c180683ff3c8a3bc01bbcd"],["tags/RSETful/index.html","22c4779a7f5d684f050cf2da13eaf764"],["tags/React/index.html","6ca130d1b8e6654a710d90ea0f413c7d"],["tags/Redis/index.html","dd6d6102397d766701aeecd9937791e2"],["tags/Referrer/index.html","39234b38cc3d3ba179a624321d2f884f"],["tags/SDL/index.html","0f68ccf29794541eb7260d3e8fe60ee5"],["tags/SQLite/index.html","3695e93a45ba3d8bfe7ddd2efc55d24c"],["tags/SSE/index.html","f087d41143b338e0bd0d3e13fbbb84ee"],["tags/SVN/index.html","996f6bd8170475f01d8d82656f18d629"],["tags/Script/index.html","95e42f904585ff35da13080f2a67790d"],["tags/Server酱/index.html","507ef773b6ea9011dae7a3b18c272d7e"],["tags/Shader/index.html","5941e4616e63e8798b207c4a4280e5f7"],["tags/SignalR/index.html","6497b5ca9941516aadc0979dfe3d041a"],["tags/Socket/index.html","bba858d391f5d40da2fa8d2ebf8e85dd"],["tags/Sonar/index.html","e1f894fa413df39d16270d29eb205c9e"],["tags/SourceTree/index.html","f65792b9fa0396fb8e44948d261a41b1"],["tags/Sublime/index.html","3608d2af56cc7ba907f2b9a5cf0de2d7"],["tags/Swagger/index.html","18a8b6a788bfe48cb7a76c98439a17ed"],["tags/Trace/index.html","386c8acddb8e865ce5a801b7d67ef69e"],["tags/Travis/index.html","b4356aa4eaa68c25e5966215a5f96663"],["tags/Unity/index.html","5ae356b0436a917bbd18726c7c15196c"],["tags/Unity3D/index.html","dda8e74423975f9405559b28da9eb1a0"],["tags/Unity3D/pages/2/index.html","60ef3167eca0cac359a7e78604d8141b"],["tags/Unity3D/pages/3/index.html","196df057a7cc69727b7f38c569729fd1"],["tags/VSCode/index.html","466b74d3494584a12c6110da8c7e0a72"],["tags/Valine/index.html","455949d04266d30407cbf6f9cdcfb9c3"],["tags/Visual-Studio/index.html","14ee7d1e8c2c6b7c3d88f6ba43cb4480"],["tags/Vue/index.html","77afdd85560986f6cfae3a483a8c72ca"],["tags/WSL/index.html","3095442810a6514eec90727ffd7f9f92"],["tags/Web-API/index.html","cd0ba95da029eb0a5b6915da2bc79cf5"],["tags/Web/index.html","857110b894b22d18230b721657fd364c"],["tags/WebApi/index.html","8732c8351ce12f31eb84ac2e3aa2c166"],["tags/WebSocket/index.html","11c9fb746c3a1b89e30bebccb6e4e7f8"],["tags/Wechat/index.html","457ea9bae9366b47220f9f98b47a1478"],["tags/Windows/index.html","f8ef46ecc86c0da6550b0d707aba7555"],["tags/disunity/index.html","5c178b44151fe2aa73eccef625818ecb"],["tags/index.html","3c78adc1ad72f616190d06913c83fd9d"],["tags/jsDelivr/index.html","1e64cbd6c64d0feb636628eecd9464e3"],["tags/matplotlib/index.html","65e1f295a949356bb8685c9b653c268d"],["tags/uGUI/index.html","4fd25984572e74b046ce2ed6d7477814"],["tags/zTree/index.html","f8bc37565f08058ba60a13ebf3d7ad51"],["tags/一出好戏/index.html","077567b7a4aab6f5781222f8485f7703"],["tags/七牛/index.html","076ec59d09d80b8dfe4c2df80b61cc8c"],["tags/主从复制/index.html","85982ff02bf66b88f273235267267240"],["tags/事件/index.html","ca1a24bbb85d795be5c63c0897ad4448"],["tags/二维码/index.html","66093d9a7fd38f60e354fba5b2477271"],["tags/云音乐/index.html","3d98320e7ccf5788b1369fc484ec2c1e"],["tags/互联网/index.html","b77c067d3a18afb4ecdf3c7226208608"],["tags/亲情/index.html","3241135a5b9b01340e6696a0d6334d14"],["tags/人文/index.html","1f498b75bb64e7435596ad588041528f"],["tags/人生/index.html","429d1f5682479fe69d8f700e46d0e4fc"],["tags/仙剑奇侠传/index.html","4d41356250019ad53b785f3a7986ab9b"],["tags/价值/index.html","e26eedb478e17ccc576ab104dffd3ad8"],["tags/优化/index.html","c1e48163e00db3358e9c59979b2a70e6"],["tags/全智贤/index.html","3e257e4a3ef014ac7eac6aaf52320d74"],["tags/公众号/index.html","78fe6f937871c07265fb9ce97cd23bd7"],["tags/关卡系统/index.html","a56d7e087a48398ea71840bb9882fcc1"],["tags/函数式编程/index.html","2df03c70a7275453eafcf112a7f47d1e"],["tags/别离/index.html","4c0a522d502e78adf5c0fb7a5a09936f"],["tags/前任/index.html","4f4dd70e0001c1aa4a0a9d83f504d7bc"],["tags/前端/index.html","775b6075960b432e02af8cd07cb601e4"],["tags/剑指Offer/index.html","7183e3a2816dacb59fd18bdf3eee379e"],["tags/加密/index.html","b65c91f8879df0fd6159a243cb4e850b"],["tags/动态代理/index.html","219882d259bd28e142023b9c0203e1ae"],["tags/动态加载/index.html","6dc0ccddc4de4d18262b8f49a7cb4045"],["tags/动画/index.html","0a12a3170d168b7e0b9f588b47704490"],["tags/单位/index.html","90e890543a07c4aa7e62bb4487cb4d5a"],["tags/单机游戏/index.html","acba0fbe8a495e74214c52765929f752"],["tags/印度/index.html","e8eb77a244331508eb971545b05d32a1"],["tags/历史/index.html","a5dc55fa827203bf91606757a9a5a22c"],["tags/反编译/index.html","b2df575b542e82e5fec4513128f0de5a"],["tags/同步/index.html","e60d1afae9a7fc8e1ede555f110be57f"],["tags/后端/index.html","e801266642276bab4106425b5cc29735"],["tags/命令/index.html","ae0f1d501701ae7d7f9d7a8575c694eb"],["tags/和平/index.html","e511d476f6f286be159f1c3d7e0da9f3"],["tags/响应式/index.html","f1b9709e18f1f4dbced476201d183295"],["tags/哲学/index.html","24cfeada13c7b04e9f381c0d15426cec"],["tags/回家/index.html","16b48b512c49db3155aaa6805eb64fb3"],["tags/回忆/index.html","50906af9d8fcffdc107cf870c9f96db3"],["tags/回顾/index.html","13d9a2b27173c952969ed52f17434061"],["tags/回首/index.html","a6837a24d67018c325fa589f5fa3213c"],["tags/图床/index.html","a2b30f8a70b46dbd65a326b907c376f3"],["tags/图形/index.html","013f573765db89c3981405a4e6637e96"],["tags/地图/index.html","817c634c0fc4ef621c610cd28ab8522d"],["tags/塔防/index.html","68aba29cf701a4694465fd3ab1c3e099"],["tags/增强现实/index.html","b7380510729dc82993af9e069b8f5cfd"],["tags/壁纸/index.html","2ca71a543eeed37403ec02694b37a2bd"],["tags/夏目漱石/index.html","e8dbaba6d021b625f5dbe09f508c5fcd"],["tags/多线程/index.html","96bfe07921c65382d5dc066673c3d0f8"],["tags/大护法/index.html","212ae4fc484ca9fc82db28fb27cea715"],["tags/委托/index.html","9b89d5d4d3baef91733a84255ab24463"],["tags/孤独/index.html","96b63378d24d40452439689969eea050"],["tags/展望/index.html","7d9521cc52a10f804ab1f2b27f1bc758"],["tags/工作/index.html","d27ccc3e5d7b4c682288021b1d9eb5c1"],["tags/平凡/index.html","0be03367aa5be8d7f74f5513e60a9866"],["tags/年华/index.html","e2500fd092da15d5ec20bfef0b3841d1"],["tags/年度/index.html","1fa85a006b75d28736ea05753b8865f2"],["tags/开源/index.html","ae726d2b47ae0a523373a8d43a0d99a1"],["tags/异常/index.html","d3c0cb19bec6a4d60334cc23a599eb1e"],["tags/异步/index.html","04db47f5234e7def84315816b8c43153"],["tags/引擎/index.html","0aff2999b8dcf3a1c030bfb4771b08ac"],["tags/影评/index.html","1b82feddbac475722c8b8b93f68f9a27"],["tags/微信/index.html","1bbf75f4a83b600faa267a473a0998f1"],["tags/微博/index.html","1b0a63dc56742c39fdd62497b4c8d5e6"],["tags/心情/index.html","d06074ee2f37bff6185419e3c2e9e1fc"],["tags/思维/index.html","9739a35ce47d0df8e7c0e96fb7843b2f"],["tags/总结/index.html","78f22063758f46f677dd8430ab08a02a"],["tags/想法/index.html","ff3eb9d843abc45753d24a3ecd9ce620"],["tags/感悟/index.html","a1dd6d2b0a3600f10fdab2aea70871d4"],["tags/成长/index.html","a29bc54b90831ec015063614f0a8ccb6"],["tags/我是猫/index.html","93df6958c33ee45c4d6dda3d02af7ef8"],["tags/扩展/index.html","a8b978ffb411c6a5aa43781e0243cfea"],["tags/扩展方法/index.html","3f69b4b4a996b9127af9875286dd7e4d"],["tags/技术/index.html","1f77a5ad26cc951249c21d23dad89779"],["tags/拖拽/index.html","fd7e6c3608e5c4272cb23b7ec3d51a61"],["tags/插件/index.html","4376b08282df464a81931e7bc8ae6df8"],["tags/插件化/index.html","74e1711b64d0a4e1f19b46eb423fe138"],["tags/数字/index.html","eeba5c2ac5f2eb3ede162a7c1592a4da"],["tags/数学/index.html","742d7ce76bc823571c970a1bfb463a7b"],["tags/数据/index.html","01b8aedcde4a54de47aa04ba31b82e8a"],["tags/数据交换/index.html","8c88d09790f513462e9c3e1bf6f1d2c1"],["tags/数据库/index.html","e803b487a779959bb4a1890536cdea15"],["tags/文本分类/index.html","8a0478f313a208d2b63dcd327c5f5018"],["tags/无问西东/index.html","399a27a01d9f90d755a2edf92ceaa9fa"],["tags/日剧/index.html","94faa0eb4a0e2385b745d5af4d478415"],["tags/日志/index.html","43daca130b1209a45d18b8ee4648a191"],["tags/日本文学/index.html","42fb9b62b5bd2dfade23e8f494df9956"],["tags/时区/index.html","6d386db56c8f013307809adef3ce67d6"],["tags/时间/index.html","de20ffa4f958517cbe651c22dd86f61f"],["tags/服务器/index.html","76303048abd6a2ad8750251bc2aff9ec"],["tags/朝圣/index.html","284bdbe11dd0dac3e0c36df1457bf62f"],["tags/朴素贝叶斯/index.html","a9ad5e05e6acbe6d6da45732b26898df"],["tags/架构/index.html","eb8f2a5bd349e009f4f0281b1a73da28"],["tags/标注/index.html","86f7e89a1e6e6f725dab183b4949c731"],["tags/校验/index.html","b94593294b870b47a1de31a0b89d2d87"],["tags/格式/index.html","f0df59e30c891b48b64f806a88afb941"],["tags/格式化/index.html","bcbb4d74d77c9438618d665c614471fd"],["tags/桌面/index.html","9cc67f9c98fd2c0596f876be546fe84a"],["tags/梦想/index.html","0461bf6d5c88979bdb360a722841d768"],["tags/概率/index.html","517cd6c97f80c95ed15b945c5ccfb32d"],["tags/模板/index.html","f43cb7fab5c0c4a14da9b32fa8d990bd"],["tags/模板引擎/index.html","b974211797a81f3aff6f46ce69e56125"],["tags/毕业/index.html","a080c6c7c911b3185e3427e4c0ee3089"],["tags/毕业季/index.html","afbfe3ab6dd572dfed7927dabc9665ad"],["tags/消息/index.html","5b5940f80360aed1744f82d199f1a506"],["tags/游戏/index.html","7907fd1de4ad97ee8b558c459a25218a"],["tags/游戏/pages/2/index.html","3a36f5b033e4243d0b71f11347cbd10c"],["tags/游戏开发/index.html","ddb49cc97eb521b3ca70fa0c8c2fe049"],["tags/游戏引擎/index.html","d9d0defc14a63e9083377f4826f47a93"],["tags/爱情/index.html","c74c1d967c03209ced15d5f566806e7f"],["tags/版本控制/index.html","3a5f68484186a78866b80f52481f0c47"],["tags/版权/index.html","426e8f656a6c415f63d4ddaca9db7364"],["tags/特性/index.html","0f54d5015aa37bd450283ba328a24ed0"],["tags/状态/index.html","774e3c1fe918ed2189a5258e5833de5e"],["tags/现实/index.html","b8ddc1ed0514d1c1253f41d15df6cfc1"],["tags/生活/index.html","e0d11f85b814694d33db459a5603edcd"],["tags/电影/index.html","2a55a302e45160aa72ea23fdb6aa20e4"],["tags/画家/index.html","a6523eba63002aedca81ac22f8fdde16"],["tags/知识共享/index.html","84ae66c085b4907cb24b825ca83ef9fe"],["tags/矫情/index.html","7d2ac7bc99d589eb8ad2d0659efe9986"],["tags/程序员/index.html","12e212178b8aff65898e63449ec28044"],["tags/穹之扉/index.html","7650ef7a1b4771861279453412a126e0"],["tags/穿搭/index.html","b301920c5df8c8a37658d5d1df2d8064"],["tags/童话/index.html","365d7b9f2301fd3de981a88d973d26b5"],["tags/笔记/index.html","951f54ee69b5256d86c9e3b15aa4425b"],["tags/算法/index.html","eaa54fbe8f70d5d26b52a817c394049c"],["tags/米花之味/index.html","b87184acdb261f4a7823cf55e6733771"],["tags/缓存/index.html","ae028c907c4d287de9d86abb3d85d29d"],["tags/编程/index.html","d6f5efea44746f9765bf99d60db9fca1"],["tags/编译/index.html","40d8ed3ff02de268330254b1c6bacafe"],["tags/编辑器/index.html","524e497a69dcfbd40e57df1b1603965d"],["tags/网易/index.html","348d2098016c283edb123781524d8ec5"],["tags/脚本/index.html","64c2e021a46119f0c8b41ba6dc6bd9e7"],["tags/脚本语言/index.html","58a367daf9c4bfd22e45acbfd6862c83"],["tags/虚拟摇杆/index.html","51ce2f0466af05ab14377313aa06472c"],["tags/蛋炒饭/index.html","273aeb7c9f24930650a5f6ad4ac8e6c3"],["tags/表单/index.html","ecb9e0467c96fa0c599f519217d1eb95"],["tags/装饰器/index.html","0b53421915d63f42a39331a847b17a4b"],["tags/西安/index.html","7de3c4e6252af9deaaf6fcaa8f21771f"],["tags/计算机图形/index.html","76ae7de1bb264252271010de6699ffae"],["tags/设计/index.html","9168db14a0005adadbb4cf0e739fb1ef"],["tags/设计模式/index.html","e3121bc58a5fe5f754368b7e88a553d1"],["tags/访问量/index.html","7f9a01402ee968fc9c05d6c2e64fee56"],["tags/评论/index.html","b5e25caf33a19d8e5764f40f3fe5c2ae"],["tags/词云/index.html","eeefab2a38b3201327c496df57e077ac"],["tags/诗人/index.html","1963a6e8b899f7cd274f65e2f9b9ae31"],["tags/语法/index.html","1f4d1f00d001a0f3e575576e6cd5c530"],["tags/请记住我/index.html","6ca75ab2146f99830c09df41aa4a3bc5"],["tags/读书/index.html","3cbe7f80bf7012f8751b424146e58cf9"],["tags/读写分离/index.html","21946966903cec5da1b7ceff88b8b3c7"],["tags/调试/index.html","9010d46feac7101e3a9ea6c47f73b684"],["tags/贝塞尔曲线/index.html","e799cf6d17742cb38a8fb57e50982e88"],["tags/贪吃蛇/index.html","22c120b5bd998a64ce3c5c2bd9f42f6c"],["tags/资源提取/index.html","ac0820c6efe59be6dd00f0a9a8375368"],["tags/跨域/index.html","ed0d4615a8366a892db29811494ab994"],["tags/跨平台/index.html","6671a67cc54a2bc74f9435159e0ab686"],["tags/转盘/index.html","142abff8fbf8a62fe3a7dbe5ad77e434"],["tags/迁移/index.html","6283844c491bb0a3c3fc9a44b9c77170"],["tags/通信/index.html","86d37a96c1578d1eb331074fbcf675bd"],["tags/邪不压正/index.html","01f39b3ccfd15a4179a06b6aff8a54c2"],["tags/部署/index.html","e7f6df7dca70e59f1bd6c082802a0e8b"],["tags/配载/index.html","548dac50f78c4e645207723c51340ce4"],["tags/重试/index.html","c3b3bdd6d41cf0caf5130a69236189aa"],["tags/长安/index.html","6bb484b468da0e60db9236c72f71b587"],["tags/长安十二时辰/index.html","1510bac4a21b5f66869056a2e379d515"],["tags/阅读/index.html","0af52322dd2e81681a00ef3b8773850b"],["tags/阿里/index.html","57c76c8fa615596318de9b5094ce2de4"],["tags/随笔/index.html","f47ca747460d65824c84878b9a8fcd86"],["tags/霍金/index.html","3f21f8bc4696f9186ed4ab1c1554a4ce"],["tags/青春/index.html","041cf6c9e990e7b324afded998b7759b"],["tags/面试/index.html","45e31bbcc206dad4c9bf8310650987c5"],["tags/韩寒/index.html","75dbc1caacd4c0ecbb0f33baf360c1e1"],["tags/马尔克斯/index.html","a12ea2f177889fa12db4270aef6b2ac8"],["tags/验证/index.html","71ea24db1ddf89c52a3084ddd6d47a1b"],["tags/黑客/index.html","6579d7224e7b354af87cf13b93df08b0"],["wiki/index.html","66be0a92ed9701484f7d88717a854b2e"],["works/index.html","2a224c28d41dccd762f01b243e68bf61"]];
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







