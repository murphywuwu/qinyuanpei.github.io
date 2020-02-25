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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d4667cf7f78ee99a91131bdfdba11464"],["archives/2014/12/index.html","dc29f959f231c12b03176e493305d297"],["archives/2014/index.html","6f780a3cf2f6617adc2d704fd8312856"],["archives/2015/01/index.html","e51c7a7a1614d8ce35a3073d44d80e90"],["archives/2015/02/index.html","aac041b7f02e324fb2aa6186011e2651"],["archives/2015/03/index.html","f115ad389399122065cb1d19d51c1c92"],["archives/2015/04/index.html","d0b0991853d1e67cde8de0448febbee3"],["archives/2015/05/index.html","3fac855d9aa8a47ee508a02f3672e072"],["archives/2015/06/index.html","7f131b673e69a72cc95d30659da3fe8b"],["archives/2015/07/index.html","b483c9047bdecce9f9ed951c0ffb886d"],["archives/2015/08/index.html","44b1333791c45312577845dbfcef6e82"],["archives/2015/09/index.html","81cb562c9d98ee55e24afb21927ca161"],["archives/2015/10/index.html","a966b167cae30b88248a9e08c1384e34"],["archives/2015/11/index.html","eb8383f2f5ec2e5201d8d3534bfb741a"],["archives/2015/12/index.html","b0bc7db491940df82616063cc9fc5521"],["archives/2015/index.html","b2c11e45d90f7511e9787adc9f6c6f30"],["archives/2015/pages/2/index.html","da60209b870b34832a6b076c66adc810"],["archives/2015/pages/3/index.html","f87c1d8918437ecd2a8e84ffa71a4222"],["archives/2015/pages/4/index.html","d973050cb42dddfb86ee415b84d0826c"],["archives/2015/pages/5/index.html","a902cd71860a3d48c1860298d646ca2f"],["archives/2015/pages/6/index.html","267aef3334ced2e842b5e83c1760c98f"],["archives/2016/01/index.html","f61f448df79c95522c5a3b1ac2cd942a"],["archives/2016/03/index.html","b43aa52729b7cc4d5bb89e3d0263f232"],["archives/2016/05/index.html","22e3d1208e7a2f05fc67c8d423efe5d2"],["archives/2016/06/index.html","34a883abc440e3e99c34c42f0ee152e9"],["archives/2016/07/index.html","be41ed9ddbac13a634a6b8e0d1f98bbe"],["archives/2016/09/index.html","ac8f77d0ff3aa257cd545cdbc86fc3b9"],["archives/2016/10/index.html","458902413fe79225017f9c9e196fc7b0"],["archives/2016/11/index.html","4946cf098cac82e8a0ea7bc2e30bcf3d"],["archives/2016/index.html","72062db76592f950d33b593a9d868c92"],["archives/2016/pages/2/index.html","8d060e32357f1cadada7011867518709"],["archives/2016/pages/3/index.html","d8c67243f5b63a8a05c71971f941735d"],["archives/2017/02/index.html","3a4dbaf3d6e6f02d508590e278bd0813"],["archives/2017/03/index.html","f6ef1ea8c531eb17bcb461a55bcf2b08"],["archives/2017/04/index.html","2d3ce06ada2576c262a76535c3a416a3"],["archives/2017/05/index.html","5defb51711bc0f06b16363725e2d217a"],["archives/2017/07/index.html","2493f9b5d2db67af21ac2d12a9460462"],["archives/2017/08/index.html","b95687e15ad7c6ecf5571666944af48e"],["archives/2017/09/index.html","75e9fd6a3c4da16238c4e93a783f6fdb"],["archives/2017/10/index.html","884d8802a3847a820fb06039b5b6f814"],["archives/2017/11/index.html","1d437fb3d1acbbc55009d3f321abb6d8"],["archives/2017/12/index.html","ab2f344b43fe87fa7599d2befc84601a"],["archives/2017/index.html","3bc34cdc3e6a0eea6ce29d1902e0c367"],["archives/2017/pages/2/index.html","e859da23de83132a8928bac3be8ebb60"],["archives/2018/01/index.html","08ad3d4971fe4fcef7b456cf9346286a"],["archives/2018/02/index.html","cde6ef842f7d939586fdb0c49830c131"],["archives/2018/03/index.html","88d9d06bfde98716dd8a816cbca5745f"],["archives/2018/04/index.html","a6d21b6060b9118a209a48b80df8fcca"],["archives/2018/05/index.html","293ef4bdc8d539531bd205f467b4bbba"],["archives/2018/06/index.html","537a1d11f6cda7f99f3832445611d0a4"],["archives/2018/07/index.html","953d6d043a52f328cf6804426067546f"],["archives/2018/08/index.html","711e2fb2758b75e4d1fb2991a46c63be"],["archives/2018/09/index.html","1812a8d5aafd032ee3b8e058a33b15a7"],["archives/2018/10/index.html","732617a9a6323cd1cf95a7511aa33f9f"],["archives/2018/index.html","ac8e0e0f46893dba250cca3766ae7c0a"],["archives/2018/pages/2/index.html","c92cfec8f596c5e3768242d22db72e2b"],["archives/2018/pages/3/index.html","fff0584f1b6c35d7e40b14b0e4dc62f9"],["archives/2018/pages/4/index.html","c30228f075372281966367284a5d77de"],["archives/2019/01/index.html","3fafa756ee5c2bdeef63c699f16979e6"],["archives/2019/02/index.html","ff1af8d8dab260662aa9d21bbbc61aea"],["archives/2019/03/index.html","b41b609a7f84f405d97de7c3e34c9f80"],["archives/2019/04/index.html","da94d21d32aa583aa66d597ed94cefb9"],["archives/2019/05/index.html","2218cf6c32483fc90e47f058e78f5830"],["archives/2019/06/index.html","df46b4beada2712edae401af05b24d16"],["archives/2019/07/index.html","310ff67fae873a6b93ec8fe2521963e8"],["archives/2019/08/index.html","0bde0a0b40feb63546338e1cdbb271b1"],["archives/2019/09/index.html","db5c65e37d2148cdceea3be5df89d461"],["archives/2019/10/index.html","0b35beace58e33bef46fcb2f20e84a0c"],["archives/2019/11/index.html","6abe448d88f05b18a931774f53254f4e"],["archives/2019/12/index.html","b4d6e9a7cf05dd8debf3d12ac0f9df7f"],["archives/2019/index.html","f4cc704f3a3f18d208df3bc91345ad3d"],["archives/2019/pages/2/index.html","49458115e113bce45d8c2cec37352bb8"],["archives/2019/pages/3/index.html","b116d67f63e99728bc04051824447e9c"],["archives/2020/01/index.html","13c929323c24dd0489fbc2e1b4eb3dbd"],["archives/2020/02/index.html","b5112d44d888bfd5a0031bc8eaad72ca"],["archives/2020/index.html","adddeb0147d59d1ce15f38da5c5aea0b"],["archives/index.html","057d6bdd042d75fda9a00d6d97c59955"],["archives/pages/10/index.html","e9a3d0a428bd8da59fa6ea2fbcaa63ba"],["archives/pages/11/index.html","55b0a6b5cb26c2dd8bbac23e622088c5"],["archives/pages/12/index.html","21aa15897f9d6b263d21cfe4b06146ee"],["archives/pages/13/index.html","cf344fb7f66cd6c291304babefaa0a07"],["archives/pages/14/index.html","90c5a0b0684c7f39a46cf76ad39ca5a3"],["archives/pages/15/index.html","a40f9e38dbccec7ad28cacb5f58fd411"],["archives/pages/16/index.html","c6f9fa3d458bc28c3635aa4f69a05b97"],["archives/pages/2/index.html","9388075b8b106df01da39fe225f8ffce"],["archives/pages/3/index.html","8c8b3d867669d995de5f44c098126673"],["archives/pages/4/index.html","86e5a0849d78948fc43dddf8819c1989"],["archives/pages/5/index.html","ede8f8bb4bcc9d2dfdc6f90b63bea8fc"],["archives/pages/6/index.html","ff46c06d0a1e82e8947b88cfcc344845"],["archives/pages/7/index.html","358e6de936649d0427363ea64f5b8aeb"],["archives/pages/8/index.html","3efb03d1e8b992ebabbae6e424cba80e"],["archives/pages/9/index.html","8c0d575f0493678dcd60737279465dca"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","336ac1736447f3e71b6743d336472c62"],["categories/Unity3D/index.html","4acdf5cdee398898c1f07caa71a2a8f3"],["categories/Unity3D/pages/2/index.html","caf2fc5906c71a74c1d5b5a3d05bbaf1"],["categories/index.html","deb610e136c38174036781165b8cb6de"],["categories/人工智能/index.html","ff5caa24967da6fafef779eb4f6baf05"],["categories/前端开发/index.html","7865138005b93073bc8af49e0b2efb8d"],["categories/单机游戏/index.html","0dfddac11403bb261501b70a7560338f"],["categories/开发工具/index.html","3171ff3b9ced57bba6112783fde3f131"],["categories/数据分析/index.html","a3b2cf0d5f3072d2c2a11ff61dbb9b75"],["categories/数据存储/index.html","8f857e8504066db1e509c677bbe261c8"],["categories/游戏开发/index.html","cfe13d6057de981efc6b8cd8d14feec3"],["categories/游戏开发/pages/2/index.html","222b519392775b912cfe42ae3f03a69c"],["categories/游戏引擎/index.html","061864ace0db60b40adc7908a01b4c05"],["categories/独立博客/index.html","614adfad0934b1d75755d22858a704c9"],["categories/生活感悟/index.html","55b3b6caf1410460446c6b8f4e2cd329"],["categories/生活感悟/pages/2/index.html","0820f72f19d874e0909891b29d6c57e9"],["categories/生活感悟/pages/3/index.html","3687ecbe66568bafa2ac97699b91032c"],["categories/编程语言/index.html","eb4cc426c243df4024c09be99cda3afc"],["categories/编程语言/pages/2/index.html","45c450f4ba002bff4c287b4d038bb793"],["categories/编程语言/pages/3/index.html","bc620adae72643a1df518529f4a702a6"],["categories/编程语言/pages/4/index.html","b0c99443d3c1d2fcbfe4071179473ad3"],["categories/编程语言/pages/5/index.html","13c495efa4c800da5aa3f2c2f95eaddc"],["categories/读书笔记/index.html","de6ad6d45c5e53cd8652f2155e1d2073"],["categories/读书笔记/pages/2/index.html","caccd39376104a4db23dc2d3a6000b18"],["friends/index.html","e34dbad46ebb24c6bc29c59f249245f1"],["index.html","b0f542367e904dc3027d9d351c0abe04"],["movies/index.html","aca4c8d529cdc460519b6af04bf0c37f"],["musics/index.html","862bbd59995491dc8f3df276635f7424"],["pages/10/index.html","cba7d86838a2ccb15c0b2830a37d6a46"],["pages/11/index.html","feb5676265bcec5edb4a0184640d51fb"],["pages/12/index.html","0a63332ae333e2743b8c6c72688040af"],["pages/13/index.html","658759623fa8037741bbf5b310c7ca56"],["pages/14/index.html","df1b896d7b2b4e1323bee674f78b9bd4"],["pages/15/index.html","69139bb6709cf514f03130921317a53f"],["pages/16/index.html","4cdaa93841820b4b759082e84c97333c"],["pages/2/index.html","37a81ef3c4cf8c1ddcc7860512e025e5"],["pages/3/index.html","6983e175f07e88ce0f6c9dc0d91b22f2"],["pages/4/index.html","03c3c8f31ebfd606105c57012a7133f1"],["pages/5/index.html","fb5ac44492a0f98bc55d1c1e23742b88"],["pages/6/index.html","588e39ee4eff2d5e34daa8bf1e70829a"],["pages/7/index.html","0bf483ab42fcc5b5c5638283ba09201d"],["pages/8/index.html","f470cfcf172b327a814ca02f4218a924"],["pages/9/index.html","3e9c9a39a977c4d613230a7689760ec5"],["posts/1059499448/index.html","70af6a7d89c01a2241b6da9b2d7a3b21"],["posts/1071063696/index.html","b0b660854b27434de829e0447963ce2e"],["posts/1082185388/index.html","f1b8a551951f3da1281f93e87607ef4b"],["posts/1099762326/index.html","e81068ad7590f984067c9e9c0e2ac1a9"],["posts/1113828794/index.html","338df53ed2907ecce0decbf7e3d7552e"],["posts/1118169753/index.html","1d0b06e089e7248cd0ed4435a091fae9"],["posts/1122710277/index.html","d365c950cbee0ab5041c4ac4fe78cdb5"],["posts/1124152964/index.html","3277ff423030e5af72f9fecb0e90c820"],["posts/1127467740/index.html","b675494bda6f497d62c09e340735c413"],["posts/1150071886/index.html","5bd7edd0dd7574aca6619920a845890d"],["posts/1150143610/index.html","36faf11f66bf6f1cd06e208eef6b0739"],["posts/1152813120/index.html","6f916f0122dbf3ca6a69aecd1f05f66d"],["posts/115524443/index.html","a6b2defd3a6e153eb1c3e415890589bd"],["posts/1156673678/index.html","732acfdd803c2ca8dc5a6676d11bea75"],["posts/1166840790/index.html","f2e4e56898f7b4893058b4dc4e1f963a"],["posts/116795088/index.html","392929478068f9ac2c129103b2fd985b"],["posts/1176959868/index.html","0096278cbf7727724c92fab1d7d02241"],["posts/1190622881/index.html","a71fe3054d43f7b600e5c136eeb3695a"],["posts/123663202/index.html","84f9d1f9909e0964df18f3d59b8c8a75"],["posts/124807650/index.html","e8b0705696d8e98b6dba6461df270d37"],["posts/1254783039/index.html","c07853970587289710dc8d46ec4c7ecc"],["posts/1320325685/index.html","7d530b4756df4b8f618dd2a1669b5ff6"],["posts/1329254441/index.html","95d295216f17e46d0b0c48fc455175f0"],["posts/1357715684/index.html","a6560dbc7bdd270c75b7a6d328c4d5ff"],["posts/1358971951/index.html","5c2ea17735cd711236afe238cf3bf8fa"],["posts/1386017461/index.html","e1470da52c263f264bc9b3ef6dbc7e16"],["posts/1394521917/index.html","4baef952910802e862daaa9f35772d80"],["posts/1397717193/index.html","c1204eb0a54143f605b3daf00407324c"],["posts/1417719502/index.html","9026bd2f7b1694add5526cb422a08a13"],["posts/1424645834/index.html","e8c7c4d7cbaf0641a86a9298772e03e7"],["posts/1444577573/index.html","b8ab9f870a547cd79e815ee5a24efcf8"],["posts/1467630055/index.html","798803fca949f43cca39a1ca27959630"],["posts/1478979553/index.html","3cd8fdd08b848685434607a77e391035"],["posts/1540537013/index.html","ce067e33a024cfe3d7f71f81889fb97a"],["posts/166983157/index.html","4b3243746f8243a1adad95b50639ece6"],["posts/1670305415/index.html","eeeecbfb0adc44c089f770a019e1100c"],["posts/1684318907/index.html","bdbdad42b4be009549d7ace21640aeab"],["posts/169430744/index.html","80a339efef1fb5d88f028100d08789e7"],["posts/1700650235/index.html","b65614a2b5cb56f1be4903b0c68ce20b"],["posts/172426938/index.html","c3dd1859baa539f6f01c1eeb0934a244"],["posts/1836680899/index.html","0928b5e4b718e28f75f4987be2fbf345"],["posts/183718218/index.html","0d857834245650261e1161196cef303b"],["posts/187480982/index.html","ec2faf4e493323c7f06d5a8017320cb3"],["posts/1930050594/index.html","1692268a0b9ec07b8923d6e37f5037e3"],["posts/1933583281/index.html","510f0d8108ccd03b613fa8adc16c05ac"],["posts/1940333895/index.html","ebd8625b01790441d8fadc74b2ef063a"],["posts/1960676615/index.html","d7b8c0148c613bd1e46e225d848d3572"],["posts/1983298072/index.html","f1b1b2f9ace36f979dc7b27a2131a467"],["posts/1989654282/index.html","16d971bd5c7bdec8a280c48a95f58de1"],["posts/2015300310/index.html","229b58e6b3301b1d14818e8002513bc5"],["posts/2038378679/index.html","4376594b64d8f22c900ac58c222ff4ab"],["posts/2041685704/index.html","2857c9693396790cc425bb11cce82312"],["posts/21112647/index.html","1fa79a5c72802d489c78377e40582636"],["posts/2158696176/index.html","6ce6d933e946d86d72da71e5144bd086"],["posts/2171683728/index.html","2f8bdb115604c2a885399bb7813cabdc"],["posts/2186770732/index.html","5ba6dc06bdb74ce1a5124990652e0fbb"],["posts/2275646954/index.html","ce773401cdaf82e603f49e29d1fe313a"],["posts/2314414875/index.html","f8b0e5ca491ef3568b9e2abfe449107c"],["posts/2318173297/index.html","6f9ec542e7697ae06243c2bb7edb175f"],["posts/2418566449/index.html","cf4bbcf7bc1322ab16c65fcaef8116cd"],["posts/2436573863/index.html","14f62bddd7a148a953a2799777380a8a"],["posts/2462008667/index.html","e3715746d9e860612912c8c94b438736"],["posts/2463121881/index.html","e06bd62c11c8f2e5631cb53b22c2f95c"],["posts/2527231326/index.html","57860ee03af8bbf49c2b96b6e720ccdb"],["posts/2583252123/index.html","0a1c06b9a5c0f3fd7965cc85ca3936c6"],["posts/2613006280/index.html","6d972ee4caa411f26741b317c8533acf"],["posts/2617501472/index.html","d2ac72aca19c69dab7b240f29395e89d"],["posts/2676125676/index.html","115f7264a4841fe331ff0c6c87806e3c"],["posts/2734896333/index.html","33386fef07987e2c6c9d79af1395ceaf"],["posts/2752169106/index.html","4b8b2bb0e76b769f32bbde306be2f50e"],["posts/2799263488/index.html","cf38ac69e4da9d647f7750fdd5a401fd"],["posts/2805694118/index.html","ab2cac979a927e3c604343641abee8df"],["posts/2809571715/index.html","a321636e0231b0cad1c419be5a796b35"],["posts/2822230423/index.html","eca57488ba3f659ef19b4b3c0fc0aba5"],["posts/2829333122/index.html","f39118332aed8b5cc4d41252c26ce78d"],["posts/2911923212/index.html","bd8eeaac918235d3dd65213b8c9c92fc"],["posts/2941880815/index.html","44f92d0bdbac641b2c102f95efcf07a1"],["posts/2950334112/index.html","5aa513c050586fa3845eb47044cfa73e"],["posts/2954591764/index.html","3d958fc205e0285ce3c2ee3f42006792"],["posts/3019914405/index.html","77cac86f02cbb293beb227c8a00eb47f"],["posts/3032366281/index.html","554702e00ce9c5b120369741c1aad806"],["posts/3040357134/index.html","5b0e75bdf80a3404c4f83e48ffaa9f59"],["posts/305484621/index.html","9d3cd229e30c49a5ae2d7b899e90d474"],["posts/3083474169/index.html","60cfd755f41011b9d668b9bdb51b11c7"],["posts/3099575458/index.html","866836ab02b54bce2151ca16f13894f3"],["posts/3111375079/index.html","f3bad2788287fa3b9fd44481ef9fb7f5"],["posts/3120185261/index.html","d7ce2d87c0612d1628e76c9b2599846c"],["posts/3131944018/index.html","06ac26bc2d868cf71791984a9d6d654a"],["posts/316230277/index.html","e39bec7e48b3619629be8d32cec6e675"],["posts/3175881014/index.html","146518e4887850c735be6ed6484c481b"],["posts/3222622531/index.html","2b9d004d9379924a0352b88ae804ef03"],["posts/3247186509/index.html","b59e9f4e4f1ebd0fda6e2fab4373d3d1"],["posts/3269605707/index.html","e358c1d19223cd9eeb3b125fb932a0a8"],["posts/3291578070/index.html","6b991aea84f4840c1166c7149c696897"],["posts/331752533/index.html","b1381d0df1dcd97419d56d96b51ca9d3"],["posts/3321992673/index.html","b77bff619bcd0f4688bef50ac97ea52b"],["posts/335366821/index.html","ee158d0d6f7225f617aadf0ff624c29d"],["posts/3356910090/index.html","ec9d4b43382ecba10f4ea07f7e7dfbe2"],["posts/337943766/index.html","e7b69006f6e1a2c83d72653b94914d7f"],["posts/3417652955/index.html","9dcc9c8d2440bee7579ad41b4f7e83f0"],["posts/3444626340/index.html","446ffefdb65c527434b12342a7fd4c63"],["posts/3449402269/index.html","4f93893832e26c8f2588be53da245283"],["posts/345410188/index.html","d1a8c5ade18f26dc3f48dbcafc3b08b0"],["posts/3461518355/index.html","08db8638b1b882fff38f6aed7ea40f3d"],["posts/3494408209/index.html","d0671bba81efb30db6ce8fd6be06458c"],["posts/352037321/index.html","6cdb922d1ca4259e232de447b75367e6"],["posts/3521618732/index.html","cb9265c08728eadb7bf1063851631a47"],["posts/3568552646/index.html","7e257a7f6eabcbdfc6dec54901cd4772"],["posts/3603924376/index.html","9b267f78e85708c5129a5e903111858c"],["posts/3637847962/index.html","c099ede39c34a5620d549b6e3d529410"],["posts/3642630198/index.html","b78caffbd1e5abaf953205e9e29abbe7"],["posts/3653662258/index.html","dc22972a012ec99d991cf81de5c86107"],["posts/3653716295/index.html","d2e44858dbf4869d7781b0993ef0ab03"],["posts/3657008967/index.html","a3649ce1d5f6c1f26c2995d0f383ca46"],["posts/3668933172/index.html","36f5af6c3970fccd806a3112bfbf2b5a"],["posts/3677280829/index.html","cf127ec1c5739055bd90f20d0c841d4d"],["posts/3687594958/index.html","01075abfcca86159f8a7508684098fa8"],["posts/369095810/index.html","f8f5bd4f6fb8c83f21367ad0cf7ef4c1"],["posts/3695777215/index.html","3a0232aef9fe57f647e4f0f574f7d9cd"],["posts/3736599391/index.html","724a249d2076a77dfd5224cc7b3037fb"],["posts/3742212493/index.html","c7f5f26523311b47dd0df6c11ff4dcb4"],["posts/3782208845/index.html","c6bd1009173ac2dbfdec8d302a9b309f"],["posts/3789971938/index.html","95bfc084782e8eb6a39c711ea6a73062"],["posts/380519286/index.html","796e8c35d619d662f78d77e95336bfef"],["posts/3846545990/index.html","7ae0e0d604f65e8446d5f88fabb3258c"],["posts/3873710624/index.html","88bca8a21ff75f3a3e6e441f13468151"],["posts/3959327595/index.html","3c840f98a6ce0d3af38d578201e2bb0e"],["posts/3972610476/index.html","4f8e036f831a4d1462233cfbad19afb4"],["posts/3995512051/index.html","d657aa239f969b0398d8cf7af39af3e1"],["posts/4088452183/index.html","85f97ae009be1c6835471731af7765f3"],["posts/4116164325/index.html","2d179e4e43364eeff81aaec8ca146c22"],["posts/4158690468/index.html","d06992d2f50580861b20000fb1f15dee"],["posts/4159187524/index.html","0d04e6a627a6e06d56111332b04000b2"],["posts/4197961431/index.html","bb426a71e232c58882956b65a5ab0923"],["posts/4205536912/index.html","041b7c6887011381b6b7e6841d065581"],["posts/4236649/index.html","c81fcbf22edc0d5ff7ee287f4ddf07bb"],["posts/426338252/index.html","e4b28a3215dc49c42c9969a5c5740ca2"],["posts/450254281/index.html","533691efc185e3f2aa71a93c1b671d1d"],["posts/4891372/index.html","7e4e6c52764ca9521940d936eef2e5e9"],["posts/569337285/index.html","66edfce0dba621a0c0e69537c88ab5bd"],["posts/570137885/index.html","c3d0ec394e4c99a495f47c89ad6cd51b"],["posts/570888918/index.html","4bf64b9fb3e38b1021c40efbb69f2b58"],["posts/582264328/index.html","d26707bc4bc8de9e470e9e649602c52b"],["posts/632291273/index.html","ce357fa1dd2a72247ba217fe08232818"],["posts/70687890/index.html","e878d9c8b2b6faca0d3e0f4112e5ccc3"],["posts/719322223/index.html","a778972bc4b2a4f0e12205630bf7f464"],["posts/720539850/index.html","2ff29a9859f840f9fda05b08ceba21b9"],["posts/786195243/index.html","418ca105f4567b7f0d8b50bed1d51517"],["posts/795474045/index.html","23180009e925f64779ab644a1d0515b3"],["posts/815861661/index.html","972156e6a07fa83d929b541fb818d319"],["posts/821259985/index.html","c646bd591c5753ac49ee6f93b3703d16"],["posts/828223375/index.html","54f3357bafa6806d3c8c98915469bf8d"],["posts/887585917/index.html","7c72ef0c8cc5f554c16dc1d4034c6ac0"],["posts/888549816/index.html","5f8ad83c441d28876791e18cf7091a09"],["posts/906436376/index.html","818a9fefc103578c40ba62d4d9fa72ec"],["posts/907824546/index.html","b9c865a68ce7b21cf0c95ebb3ae5f872"],["posts/927393529/index.html","832ccde352831a1f86e535b5ca01bc07"],["posts/94443781/index.html","02a146c3d40392fd2b13473e6016bad4"],["tags/2014/index.html","78d9c118f93b11fe216d2c92ef91ad2e"],["tags/2019/index.html","96445e51937e9828c101975df9029816"],["tags/AI/index.html","d5f2fea9f5ef21903a932d07742323e7"],["tags/AOP/index.html","e7a107b094802db644e87576cfe7ab5c"],["tags/AR/index.html","47a385a3d4290eaec2e79a2ea1125dd6"],["tags/AssetBundle/index.html","a9d34b95eed5709f3a842e5d65fac52b"],["tags/C/index.html","d1b96cb3a027d043f40a8bfc76b0ba8d"],["tags/CDN/index.html","cbb31f147fb18477d9abf281d7fa5efa"],["tags/CG/index.html","1cbf721ed559d1eece25a4760af972a8"],["tags/CI/index.html","8e55150c491e7825720fc236c59cfb32"],["tags/CORS/index.html","fb9a601ec156206b0378f78357e94753"],["tags/CSharp/index.html","1b12c3ac9c1be8ed25806c896cf5bf11"],["tags/Castle/index.html","519d8808c37efee2238edb40868af4d2"],["tags/DBeaver/index.html","efd1d6f14cf3299109a7a39d6799fb09"],["tags/Docker/index.html","79c847a918de6995d6c415e36ac719c3"],["tags/Dynamic-Proxy/index.html","ffc298a269038cf4261d3b20f7551924"],["tags/Dynamic-WebApi/index.html","298d85d251d3a457dad2bd1f8b945822"],["tags/EF/index.html","114080ddccd9c0d6d9a2c7da8afcf35c"],["tags/ELK/index.html","88bf53f83a6ee2be2534a0e69d811ff6"],["tags/ES6/index.html","f7c77dd37e25b65d805098a7e76eeb56"],["tags/EasyAR/index.html","8ed2c32f782bc89bad99e76b3ec77221"],["tags/Excel/index.html","6ae41e5af152f795d4caee8716bf3571"],["tags/FP/index.html","72a44b794fb1228d957f75e983f9aac6"],["tags/Form/index.html","683cfd96de78b4f2ff2f89a3e2f9b96f"],["tags/Git/index.html","abafc2992250df1955af4a63fbb35476"],["tags/Github/index.html","c1721c76c45765a5db5f3303b4c834ab"],["tags/HTML5/index.html","0f75ae8c4240695ae9bd5a40f83a5bc1"],["tags/HTTP/index.html","808fd9f74193948b57371507a44a5b33"],["tags/Hangfire/index.html","65b9c35566ed8fac55149c64189f8460"],["tags/Hexo/index.html","1264298a098c3cf35046bdfd5b417f52"],["tags/HttpClient/index.html","efe56e076c115feda09c69b9061a466c"],["tags/Hyperlog/index.html","64fedfb9080c71e98401189f4c69cd7f"],["tags/IDE/index.html","2279ea6565dd0e81f58ff20e41a1ba62"],["tags/JS/index.html","43333d39c84eca71622ec9e77787e1cf"],["tags/JSON/index.html","f18862d37be293b09ac8610786dd8ea4"],["tags/JSONP/index.html","3d49cda5aaa67601c136a234f42310a4"],["tags/Java/index.html","daac17952cc861ce7806d1998f0b9ca2"],["tags/JavaScript/index.html","d0010af9673da87dd9eb26ada4cf9693"],["tags/Jexus/index.html","c741030bb01f5c377652508032304faf"],["tags/Kindle/index.html","c37c4fae50140bd7c0dad53d9d4c0f10"],["tags/Lambda/index.html","5efac52d7224313905e1e8922cc77443"],["tags/Linux/index.html","ebcfc01d6ab029e064dbf4780efc9b6f"],["tags/Liquid/index.html","cb0e423864a5038fb093c63b3db74439"],["tags/Logger/index.html","b64654bcf217015b87d6b8fd42e79e72"],["tags/Love2D/index.html","5e99aea79ad002f0376f17766dcbe58a"],["tags/Lua/index.html","6bfa7c015bdf2f51c8de5053d5a3330e"],["tags/MMD/index.html","e119554d6f320008fb0f305990572993"],["tags/MSBuild/index.html","5d158bb34b6faf2110adbabbceb9a26f"],["tags/MVC/index.html","c7371cb1a1adb813d03d63bcdb6f1c02"],["tags/MVVM/index.html","57422d4fb12c795be1626f2670a2daea"],["tags/MapReduce/index.html","57b64e20c4f4774a158d82bd416eb187"],["tags/Markdown/index.html","b0cd28bbdbd4bbaee13e5dccd69a89bb"],["tags/Mecanim/index.html","c409f29518b7c8a45b3aa56b74f2017d"],["tags/Mono/index.html","c2d749ddada2132d0680733834010c18"],["tags/NET-Core/index.html","3c5ec0a209581dbc2b03bdbc10026a1d"],["tags/NET/index.html","401d8eb458e6794c1541261b53d7b152"],["tags/Nginx/index.html","ac24c2032fb41cf383ef2f54ab1b0725"],["tags/OBJ/index.html","bd3c22699d1fa998b422d2fa9a1e2c25"],["tags/Oracle/index.html","4dc1c38a9434e51bee81f50b573c62f3"],["tags/PL-SQL/index.html","cdcbfcd327b42c7f8f87c2dd7e80cbd8"],["tags/POCOController/index.html","9a263f8500698bd05260c0ed392459eb"],["tags/PWA/index.html","ff5bcbae0321999851c8f8e1eb97512b"],["tags/Python/index.html","5487f03fc9605799b2ce850c35907d48"],["tags/RESTful/index.html","af16059bf59c823084e66ba2a3651c2e"],["tags/RFC/index.html","8b8b0984e00e3f01d6b92599ce0eb8f3"],["tags/RPG/index.html","67a9db1bee29bacd02e9d8a1598c509b"],["tags/RSETful/index.html","20895aa44ab58295127ccf0f6f3ce3e6"],["tags/React/index.html","c629827f5162c33b78b56996cbee4d05"],["tags/Redis/index.html","7f8e7ee14dbd4a5e60ab927a45f2cb8b"],["tags/Referrer/index.html","a22340ec32061f2c4abca63c08d1351e"],["tags/SDL/index.html","c8237b2391bcc1dccb062cb571c101ce"],["tags/SQLite/index.html","c4f59393b9e9342d97598d627db4fa45"],["tags/SSE/index.html","5bc837cf5b03c44d65531cf809f89f16"],["tags/SVN/index.html","e8533426dad6b8be6b81693b8908e42b"],["tags/Script/index.html","c2601e1e13052b3346e2e9889bbbb02c"],["tags/Server酱/index.html","75a9a94137be060507e1b58f3518db0d"],["tags/Shader/index.html","9d9e14b3d1c9783f47425609ca2ff223"],["tags/SignalR/index.html","9106a89107dadbe089c4b52427d6468a"],["tags/Socket/index.html","eedf1a4eb442c86cc8b172d8cd55805d"],["tags/Sonar/index.html","2aa3830f62a63814ca812b239b46fbf6"],["tags/SourceTree/index.html","63e12764a55f2ff65100a2c0215504da"],["tags/Sublime/index.html","9483fad5ce8816f7200ff4a706707b1b"],["tags/Swagger/index.html","de2a11300dfa30e49b7c879c5f698fa6"],["tags/Trace/index.html","48d78ecf32a60e9bdd98dff108dbc8d1"],["tags/Travis/index.html","9658639e70077dba0a8b1b18294ef79d"],["tags/Unity/index.html","03590dc7216544c4e312e432aa01caac"],["tags/Unity3D/index.html","4f3e393e7b7a6b672920154db2a6793f"],["tags/Unity3D/pages/2/index.html","8bff20749d731f3de455031a97dcff46"],["tags/Unity3D/pages/3/index.html","b4dac86ef86f303d244e35b7b7978410"],["tags/VSCode/index.html","3fb38a24442844e6f298f611180b7ece"],["tags/Valine/index.html","6b5f86d3086219adecc28da801ae6cea"],["tags/Visual-Studio/index.html","514cb53c3e0afdee767d3e9a6b2888ef"],["tags/Vue/index.html","eb9f201b1c2a8901678413b4997bb75e"],["tags/WSL/index.html","66517e6f60e86fdb69f7602656317c18"],["tags/Web-API/index.html","50a3b731420bd4e12f1eaceaa86fc8c2"],["tags/Web/index.html","4290c046aeb32509e5f393f231e3d3c2"],["tags/WebApi/index.html","0002cf3a55b765d707a1796ee9e3625d"],["tags/WebSocket/index.html","a6d530b8cd829c4b012601474135bffa"],["tags/Wechat/index.html","e9d6d94de933fa8a4d8f54815f87aac3"],["tags/Windows/index.html","951bcaeb1c955775219c2934f29121cb"],["tags/disunity/index.html","2604ac33d9c0434d3bce82951c3eb126"],["tags/index.html","7e9aa788651d804705749c20ed140942"],["tags/jsDelivr/index.html","9d9e7c438240715f5a83ce5b18f59d32"],["tags/matplotlib/index.html","831d43f84a0284eeed436bc42b10cdef"],["tags/uGUI/index.html","4285385af135d361dabca658d00ec4b2"],["tags/zTree/index.html","5258d005acdae9fecfd9b1cc589c2b50"],["tags/一出好戏/index.html","0c2cdb4b17a19d6311b1a3f9d6e1bbfa"],["tags/七牛/index.html","a8c0cf62beb12a4343f91fdf55e3f778"],["tags/主从复制/index.html","652685aa55c4a76dda1c08ebf39fca66"],["tags/事件/index.html","73e8315bdecf1f0be936f93767a37f7b"],["tags/二维码/index.html","39c7281f50fa8fff8c61ef082a35b0c2"],["tags/云音乐/index.html","74e6b02d6636ffcb0262e2612405d7ea"],["tags/互联网/index.html","fe9a3d9164c5dc5638ca655f42fc69b2"],["tags/亲情/index.html","840f259b21afef4bb2f8bb4fb6d002f3"],["tags/人文/index.html","04e96a8f80ffa546f07a04d80391e5d0"],["tags/人生/index.html","bb9e3f499183ffd4e58b32917e2fda5a"],["tags/仙剑奇侠传/index.html","21cb3d4b3eb49bff713ab2fe448bb707"],["tags/价值/index.html","84f0a0098e174a9eccc2cfed019f0f94"],["tags/优化/index.html","a926d18af04266907a430569751c7afb"],["tags/全智贤/index.html","64f1b0344c73b3ecdb0dc166655494c7"],["tags/公众号/index.html","4985e50a8cb476826817ca67a8210ad9"],["tags/关卡系统/index.html","fa006f5b74f1695bf8b55042ac019d5e"],["tags/函数式编程/index.html","6ff5e897267dc5d073c99f2d22b927da"],["tags/别离/index.html","c7f360698ab5dab8e8c5d0fd7bb0ad49"],["tags/前任/index.html","06e09c5af954b0c26060ac147835177b"],["tags/前端/index.html","5ed1a5d1174f16e004fb802cacbb05dc"],["tags/剑指Offer/index.html","9adeb52eded474cb2d92f4eedcd5e959"],["tags/加密/index.html","f7df4291fa1c76af1ca889eb4b81b352"],["tags/动态代理/index.html","b3fe318c118bf5ab447fda02c6c7e788"],["tags/动态加载/index.html","ce94afb85ee028b16aff16d47467f9ee"],["tags/动画/index.html","14a1e803d37069bbf184a550f4eb5725"],["tags/单位/index.html","abbacd1b84b155bd7838bceb3b02a718"],["tags/单机游戏/index.html","66b403f45da7de2e0a1dfaf9e054d0d5"],["tags/印度/index.html","61017ecd50e13ba85f91b6bfd09ff7b0"],["tags/历史/index.html","1d84e41072f2488041e8bd36bf46f021"],["tags/反编译/index.html","a371c16cbe5140161770ed000d640577"],["tags/同步/index.html","3bdd9576f3acaeb7b404330e139ad03d"],["tags/后端/index.html","0420cec63f414f63a8f0691e234f4711"],["tags/命令/index.html","a835c280e33729e72aebe1b4199db19d"],["tags/和平/index.html","93e1185fb00f6223414c9cf80beaed5c"],["tags/响应式/index.html","e6ae71a49b32a0871cf19da0b423a697"],["tags/哲学/index.html","1a95de138145b396bf01c9f67c3c3a5c"],["tags/回家/index.html","2145ad8cf14606d8f5c88512ed0555a4"],["tags/回忆/index.html","25cd52f68d89137534644a6b5538f7ca"],["tags/回顾/index.html","2d6d99ffc0348e970f131bc8eaf179c4"],["tags/回首/index.html","9719ad87c680f7c7711497e6da867da7"],["tags/图床/index.html","e6cb4eed10a0f6a753a2f62ad2724a45"],["tags/图形/index.html","6f4e77fb75443b94d1bf8cc8fbf35c94"],["tags/地图/index.html","b5d7688bd5fb7fd8b1c3879067cdc263"],["tags/塔防/index.html","d5794c0ede14f88dbb0f16100260d3d0"],["tags/增强现实/index.html","8a57f89f26949362d276d2bf0c94aae7"],["tags/壁纸/index.html","d002d277e8b0bc0bb31b3027da87a5bc"],["tags/夏目漱石/index.html","a2fe4a521ddc724f48dc993d306f8678"],["tags/多线程/index.html","f9209f108fca570d87f783ae28e04c7f"],["tags/大护法/index.html","d89c627161b9bb0fd92fa8c3397788da"],["tags/委托/index.html","b37cf0453caa0e48c2fb37f3f7eb4a7a"],["tags/孤独/index.html","67417e7003b96b1333c565cf10bb5cdf"],["tags/展望/index.html","a04af2b55333693567f539a3a2f73ab7"],["tags/工作/index.html","07f588ed0a78f4cfedd1df8d53741c84"],["tags/平凡/index.html","2b9d143d1368d99e7c7fefbc769ba9f8"],["tags/年华/index.html","f19059dd5bd098b4e9204d2286dacb18"],["tags/年度/index.html","8d2c79c6d29cfdd6d0ad34ce90e0e0b4"],["tags/开源/index.html","83051fa89f7ed2aa1b0d8800844208a1"],["tags/异常/index.html","65257199a636efab2ae0e03c1d7b897c"],["tags/异步/index.html","51a3f932e7b2bed8b5bd427cb555cb1d"],["tags/引擎/index.html","649a21dddcabef046eae99e1d76796ca"],["tags/影评/index.html","2b06ed3b690d312dcc68e43c8247a585"],["tags/微信/index.html","fa9b66f8f6aae3153203da13c0ebf88a"],["tags/微博/index.html","f82113659b89b9fe06a3113989f01936"],["tags/心情/index.html","3e6d8c07d12f491e494619e6d336eaa3"],["tags/思维/index.html","c62ac2c7dcc17781b1f050fbac67ccc2"],["tags/总结/index.html","d7fe6816d772c42b5639f022fb64ec3d"],["tags/想法/index.html","31a8f39846eee29cddace1a245764e5e"],["tags/感悟/index.html","cd661c154a36b316620e9ed2bfa7ee4a"],["tags/成长/index.html","30ed652fc67fcc4a2e89cb879a2b3670"],["tags/我是猫/index.html","7564d1c3c714f4008d31c7d461a3f194"],["tags/扩展/index.html","50a923bae196b072f10ca7555558d307"],["tags/扩展方法/index.html","cc29571234f8cbfef0722e557b179860"],["tags/技术/index.html","17b5960ba31cd50fc06702df47518a40"],["tags/拖拽/index.html","ae89196cc21a66961badb15f6f715052"],["tags/插件/index.html","9dae2e636a0112075af7707182b834f9"],["tags/插件化/index.html","7c3563592a1267ca1fbd8903a0105d41"],["tags/数字/index.html","85d222f6cb5ca7dfd9d3e0f204ab2ec1"],["tags/数学/index.html","16c31c40b8ff678ff611d0cc3b241aba"],["tags/数据/index.html","5338b767ed93db6df6d3ba717752fea6"],["tags/数据交换/index.html","3c53aac3850da73cc5baf0baea8840e3"],["tags/数据库/index.html","42ba5554bea1749c7556ae35ca724772"],["tags/文本分类/index.html","9c1b50cea3d75c381a4fe99b128cb28d"],["tags/无问西东/index.html","edb09e91271c6ef18c79a0a03b7d98be"],["tags/日剧/index.html","d09d8eeacd2a40837e126aeba1cd673a"],["tags/日志/index.html","b88babf4e46d4641e989d390a129e918"],["tags/日本文学/index.html","c92c90633e8634375ce42129c04513ff"],["tags/时区/index.html","b5829b77f73d4284e64f0e27913e5608"],["tags/时间/index.html","8d9e63a89a58b58f5cc35b27d9c54442"],["tags/服务器/index.html","a27bd9770de5dbb4766af330ea02a5cd"],["tags/朝圣/index.html","e991ef08587277614b9e1c603ad15e7c"],["tags/朴素贝叶斯/index.html","d4942d472dd0b275b9762f03f5ed9a24"],["tags/架构/index.html","7332a316e8e0549226ac7261dc018086"],["tags/标注/index.html","8177169c29aa59c48197a1749be6c823"],["tags/校验/index.html","04210c13705125a5f041a93a28e5280e"],["tags/格式/index.html","0bc5ed61186cc7c2b045b69a271ce519"],["tags/格式化/index.html","e7d0fd30882d2add1a721f7dd8bd5078"],["tags/桌面/index.html","798c2565451e8cd5aba8de1bff6625ca"],["tags/梦想/index.html","0f56134dcd986235f2760491b9e8f801"],["tags/概率/index.html","fce40891cc6c64c948008393c054f1bc"],["tags/模板/index.html","929e553d6b350aa2bc78b37aec9a6f97"],["tags/模板引擎/index.html","c7326690be0ef42d655b6f292dd59227"],["tags/毕业/index.html","0e5d105ae9420ab3aa772286d005db88"],["tags/毕业季/index.html","547faace76ed1069966103b0f2078e5a"],["tags/消息/index.html","8b384782229f39d7ade17bec49466569"],["tags/游戏/index.html","9a91ca0940d4ba832447ba8397f61277"],["tags/游戏/pages/2/index.html","67751baa802e83d3b6a5aee72d4e253c"],["tags/游戏开发/index.html","e7f57c0cb89b10a162af9d65525bac16"],["tags/游戏引擎/index.html","0d81b1dff60d0711cf2d7187397eb525"],["tags/爱情/index.html","69965443fe7b601ef0dfcd8f5c1e9f48"],["tags/版本控制/index.html","307202441578db023fc9f77e0943c0df"],["tags/版权/index.html","6a6ade6f649308d043f7fa52b656d6f9"],["tags/特性/index.html","4328678e15ed4a5fce0d94f778d55298"],["tags/状态/index.html","9d70e0b708e6f3b8631a0645ba5b8c1f"],["tags/现实/index.html","203afc13b5f4bea540eff47a72401c7b"],["tags/生活/index.html","227d4afe2a4d4bd3c06ea65bd5d94bf7"],["tags/电影/index.html","7054223f359657c940fd8b8f89dcefe5"],["tags/画家/index.html","93415f97338b8b12ef7f83d05d5079f5"],["tags/知识共享/index.html","67ad99a05d137936e462dc9a9572d771"],["tags/矫情/index.html","5612bb43cf28671076667facd6044e00"],["tags/程序员/index.html","b0a4bc29b3b3459a49f29a868d7ea53e"],["tags/穹之扉/index.html","43ad7fcbd0fb270b98c9132c1336342c"],["tags/穿搭/index.html","cfd05089ab008e1f667f9ef88a873901"],["tags/童话/index.html","e449e9401298a8c187bd630c67ef8939"],["tags/笔记/index.html","8279e409547f6e3397b84fbdd8701a56"],["tags/算法/index.html","83a2d8431bc5a6501ffd3b928f7fd115"],["tags/米花之味/index.html","6ca196e7840ccb2e61f2b0dd88d59b2e"],["tags/缓存/index.html","76b3774e8cb7e65171f3702de7df21e4"],["tags/编程/index.html","61fef424e098cf7d49618e2280b11516"],["tags/编译/index.html","b7e1bb87b9e29c51dfd8cfacf4996019"],["tags/编辑器/index.html","3d7b4003372476708dba982388952801"],["tags/网易/index.html","35d405cb38cf971906d66cf3c23db730"],["tags/脚本/index.html","37df539dd873a37925082e2a823d2c7b"],["tags/脚本语言/index.html","d9b10b4ace7110de3deb98967dbe90d1"],["tags/虚拟摇杆/index.html","50232d0a166ad5f3c735763fb403132d"],["tags/蛋炒饭/index.html","5573bed9d61e4b58f865ef9e359c05a3"],["tags/表单/index.html","bc9885737efafd2cc8351f3d00e58a01"],["tags/装饰器/index.html","0478df42ff924e60a8a3cbddc08192b1"],["tags/西安/index.html","2a49fce321f8613204ac7310739ec35f"],["tags/计算机图形/index.html","e58e888dca6c5a81a0e1d80e083d88eb"],["tags/设计/index.html","c4b2a7d7d3f7ac551b38eea357dcf0e7"],["tags/设计模式/index.html","303f3672717ebae13eec20a1ca094f46"],["tags/访问量/index.html","56e12e91fe02b400b9020aca432dba48"],["tags/评论/index.html","b2b8d2b39e68803daf1e52a111ca6228"],["tags/词云/index.html","ac922b1aa468a1de07e53b51517f3750"],["tags/诗人/index.html","2ac42b25dc470989c2d56483957f8140"],["tags/语法/index.html","527b705ecc01a469f5daa093f4dcc505"],["tags/请记住我/index.html","bf8e02769a0321775037cbbde8a405b7"],["tags/读书/index.html","b799640936d7f8e26cdf365b792152dd"],["tags/读写分离/index.html","dddc2931a28b14a6dbdfb0c95c012cb7"],["tags/调试/index.html","f7adfed6f6e351c0f61084e8e9f254de"],["tags/贝塞尔曲线/index.html","47a4e416b81c9d13d831b2ff885ebc9d"],["tags/贪吃蛇/index.html","f55224cfb06c054858ed3aa2d95e96b3"],["tags/资源提取/index.html","ac0ad857b8c448a4ad3c89d3b5ddcffb"],["tags/跨域/index.html","5ebb83b99d83d93a454f97e4094c9f01"],["tags/跨平台/index.html","ce4cc1c57c651af1da25e7d92d22d647"],["tags/转盘/index.html","0c07b2bed00dd72b267e456cfba83fb6"],["tags/迁移/index.html","23f6cda17e31cec0dc1d75f6fc93a3e1"],["tags/通信/index.html","2160a0b4dd3da7fa7be96b9bcf8c684e"],["tags/邪不压正/index.html","c079093caccd0939e2e26994a47e35b3"],["tags/部署/index.html","816cb2257ec64ef615aaf23e6c7dfd17"],["tags/配载/index.html","5e67437e3adee3e2da7b79fa23701a81"],["tags/重试/index.html","7b5c501a93f9661b083e184501402035"],["tags/长安/index.html","d510de5d80a51010e39463eab446e981"],["tags/长安十二时辰/index.html","30d32fe008d50b86ae48f9d75857fc52"],["tags/阅读/index.html","6e6d8fcbc972665bebe27f828cff4d7f"],["tags/阿里/index.html","212899b8199ce7db93d49914a1c5dd78"],["tags/随笔/index.html","31a30b5ae4db212437b33906c4f226eb"],["tags/霍金/index.html","8c657e3f342cfad1b03f9374f55aef87"],["tags/青春/index.html","525a114f601c315efcd5acc362f10a2b"],["tags/面试/index.html","8e836290513d0508dfc83b632f8a622c"],["tags/韩寒/index.html","c44bae756cc8c2ec89ee2772445d4457"],["tags/马尔克斯/index.html","584de163dec6970bbf2ca898f235e33f"],["tags/验证/index.html","4af7937ec7760b185e27872aa8e120a8"],["tags/黑客/index.html","c6376f62534e2a4542b46e2049f197d4"],["wiki/index.html","49a9cd8af4c381aca0e3ec427f54d13b"],["works/index.html","53aa1acea0865528a7342ff52fac57f5"]];
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







