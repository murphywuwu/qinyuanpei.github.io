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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","a4b7b8f32af3f7404ef06675a78e150c"],["archives/2014/12/index.html","cee537675ebe17137a6b2a288767df61"],["archives/2014/index.html","984500f657d5d65cb7cc02bf28490c01"],["archives/2015/01/index.html","239e2ea1530c4e2eb3fa7fd2f67d2368"],["archives/2015/02/index.html","e64d7528b0fbf292b9b45d179fa950ae"],["archives/2015/03/index.html","0edd24e9b44ea7c5ab09ade2ad1f3c00"],["archives/2015/04/index.html","ea1ec08db444ca44de05be0710a5b122"],["archives/2015/05/index.html","f8cc852f753dd94e823a8728f092c9e1"],["archives/2015/06/index.html","1d5544c0d34baf4a7a67ac17ec13d6db"],["archives/2015/07/index.html","8c0c48703dfa02365115ebd48af6537c"],["archives/2015/08/index.html","85df847e4445a68a79976826adde2597"],["archives/2015/09/index.html","0c3464e518eb6dd32477d99a8d13970e"],["archives/2015/10/index.html","4c00f212256d2244bca3b8d1930ccf44"],["archives/2015/11/index.html","5fc719ef893bae6742cdc44887b42225"],["archives/2015/12/index.html","d84ce831c5fc6e9bbac86d3e7c88ef6a"],["archives/2015/index.html","735f043b9333c1adb7b90527ba748fa8"],["archives/2015/pages/2/index.html","7d8ecd36640f5615fdc5cc9fa8f06736"],["archives/2015/pages/3/index.html","4b627161231845e5a676c8e1f4902b6b"],["archives/2015/pages/4/index.html","bebae540ccfb8473fe5c8681edbb5e6d"],["archives/2015/pages/5/index.html","fa20cd839ca79b5a6212a6bd47a5ad3e"],["archives/2015/pages/6/index.html","e565194cfbb870199d2479b47f0afde6"],["archives/2016/01/index.html","7ef2b36a42faf8b8cf28bc0f809158a3"],["archives/2016/03/index.html","62c69ddfec6bf34885973958723b8688"],["archives/2016/05/index.html","dd34e728d6b223d8c61e0bafb2e32e46"],["archives/2016/06/index.html","f43005b3bfcd1e93aa16412d1c603b49"],["archives/2016/07/index.html","4f4f288b218710f2d17773fcf1ca6b0e"],["archives/2016/09/index.html","c723f17a4afaddfcad3a5cc48c9f939b"],["archives/2016/10/index.html","03820bd43b28ad5a77a54cd1245d4d6c"],["archives/2016/11/index.html","ec3c0f776811e4c1862c82f95059a4e4"],["archives/2016/index.html","2b977b30e19107096ef5285e5564329b"],["archives/2016/pages/2/index.html","94a18dd2a27c4e9a2a37a75e7acc14ad"],["archives/2016/pages/3/index.html","b5b36eb4cba6cb65c116ae44b241b493"],["archives/2017/02/index.html","c37917ab6675120e0858d0a1baaa62f1"],["archives/2017/03/index.html","edbc6774cafefb15cfbfecdb72ee51b2"],["archives/2017/04/index.html","6a90916aca254cd0a34c5ce454d32481"],["archives/2017/05/index.html","9fb7fbb466815a9fafed8a2ed4d37e66"],["archives/2017/07/index.html","d849d5a31438300346141e9f1ffea96c"],["archives/2017/08/index.html","6e1673e482823feccf0f45852029f092"],["archives/2017/09/index.html","735e01ec64568dfeaec817c3924840df"],["archives/2017/10/index.html","ff282fb05ada0b784592a85153b41c82"],["archives/2017/11/index.html","4e9cd7e802423fb0e62863fac3bd0cb6"],["archives/2017/12/index.html","f1fb4644a923d2dacd4268d21ea94e4d"],["archives/2017/index.html","c2d23829880b187ff3c6b231ce2b7044"],["archives/2017/pages/2/index.html","0fd2103678a127c81ba8ae0d44fd1ad3"],["archives/2018/01/index.html","eaf6558e0db288af9829a38a8b27b48e"],["archives/2018/02/index.html","ab7ad511d2c7fb3c847236e38962413a"],["archives/2018/03/index.html","1d0a2ff7a7fbf9800707ca424e24c531"],["archives/2018/04/index.html","0c0848c3834c212c958b36daaf0e0e9a"],["archives/2018/05/index.html","077903a99b268f560a7de652178643e0"],["archives/2018/06/index.html","262e224427ad4e1e677cffae6b1922e1"],["archives/2018/07/index.html","0f3456755005037125cf485cbcfb968d"],["archives/2018/08/index.html","b7ef58a6f74faa736ed6a60744156d50"],["archives/2018/09/index.html","646b267f524f50241fc3277396f14b9e"],["archives/2018/10/index.html","4e25147dae8e12286420ba8c6342c1c1"],["archives/2018/index.html","c2a009d0708ef30826ee40e4e2ce41d9"],["archives/2018/pages/2/index.html","e6e85dea9832dc9a0e6c720034f44b83"],["archives/2018/pages/3/index.html","d30b10eefc180755ad574f9559aac93f"],["archives/2018/pages/4/index.html","90e3036973ed86c5d65f34408b91b777"],["archives/2019/01/index.html","cb9322b3d51f611b279da8ea8949fdf4"],["archives/2019/02/index.html","d187fca5d75f53030eb4b920837ecd50"],["archives/2019/03/index.html","868b98195ca637367be4ae89106c489f"],["archives/2019/04/index.html","68002511ecc95a65143e89d59c269a83"],["archives/2019/05/index.html","414aa1d6a6c39fc21b30e18ac50ca51f"],["archives/2019/06/index.html","225e8c1a2552777174375170ec7e8b8b"],["archives/2019/07/index.html","31fec5b415db4287108e0551f98cb5bf"],["archives/2019/08/index.html","0b1255157636dd7fd4fe821411a5251c"],["archives/2019/09/index.html","1f9afb1dfcfa30590fb98fe8e3e574cb"],["archives/2019/10/index.html","e38ea2e94da265bcef20e04eb9f796bc"],["archives/2019/11/index.html","c195eba22111f0adcf52ce565b60ffb4"],["archives/2019/12/index.html","d9fdc1844fa63592ce7115854a849d31"],["archives/2019/index.html","727c17e993b51a8475697e3e0a9b3001"],["archives/2019/pages/2/index.html","d3ab4a36c886af186dd6d00927118e69"],["archives/2019/pages/3/index.html","c61dd4ca6a8dc4b7b9627872cece8559"],["archives/2020/01/index.html","532cf2a723524662d4dd0ee02e3b93ab"],["archives/2020/02/index.html","1d0e6456bc650e77c89fc17675becfe0"],["archives/2020/index.html","5b02424362b62867c1e964979f5c53fa"],["archives/index.html","5d5ab19a145ddf2c207dd72ac1a21564"],["archives/pages/10/index.html","b5fd5f5cbbee46eeba9da2be352be02d"],["archives/pages/11/index.html","7d5251f49df0a3005981ce06a642b071"],["archives/pages/12/index.html","88baffc17cb65b6520b7456b1d0dba4f"],["archives/pages/13/index.html","18fa2f74971406ce912ccb200146e693"],["archives/pages/14/index.html","c1fb3fc44bb9ab0a13a19dce56f9e2b4"],["archives/pages/15/index.html","a855a0e2c3c0dbdfab8b217f65c2c20d"],["archives/pages/16/index.html","183329834aaf43b70ee6528bc5b1b53a"],["archives/pages/2/index.html","cad868f7fac58b03dced2c00de752766"],["archives/pages/3/index.html","402720a6c7eafb74002da6237cbe4eca"],["archives/pages/4/index.html","9e98fad4a2b8b96a1520328f3da9672b"],["archives/pages/5/index.html","bbd249986b264d82277da7fb0da6ad15"],["archives/pages/6/index.html","164fe9ad3443c37c6e143188f52e82d6"],["archives/pages/7/index.html","594efdb2bca560105840d7e0d4e6960b"],["archives/pages/8/index.html","d8a65195a7b06266964668531c51a359"],["archives/pages/9/index.html","23905be4471f3f2dd264baa956bd9c74"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","45724644f36bc9a32e66308b0f2c4b4b"],["categories/Unity3D/index.html","7a734778fd36674d23bcd7d8ddd37fa8"],["categories/Unity3D/pages/2/index.html","77e7d11dd5b71b06a3cce76bebb644f2"],["categories/index.html","54ea419450843c15a938d1a9295971f8"],["categories/人工智能/index.html","c4bc9ae6107758bc3343538f5a4643ab"],["categories/前端开发/index.html","45aa955b92fb154e63f32f82deb7a19a"],["categories/单机游戏/index.html","56512570fe538bdc361454395960c521"],["categories/开发工具/index.html","6d4fe699f8222378dece67f3b326b234"],["categories/数据分析/index.html","ca09e699ec7634bb81aab30f24e585a3"],["categories/数据存储/index.html","65c296ef43187614ecca1827f56d4d7d"],["categories/游戏开发/index.html","e64b043934a629ecc128f56a685dc910"],["categories/游戏开发/pages/2/index.html","984f44cf5cfaa59459a8efb360c8f2cb"],["categories/游戏引擎/index.html","df7b043436cbfcc1a5991c8a755e7502"],["categories/独立博客/index.html","121bcf458e16c886f6a947d995afa259"],["categories/生活感悟/index.html","870b1b0ce58adb51cd345af529bc6d55"],["categories/生活感悟/pages/2/index.html","270ffead38dd6bf17767f8f967b74dc6"],["categories/生活感悟/pages/3/index.html","8e05f0b4734c59c8af4b57ee9a45c0d9"],["categories/编程语言/index.html","8898c8dde8aa6a977fea24a22db58040"],["categories/编程语言/pages/2/index.html","f622dd86c2d2ed365d86420005e10ccf"],["categories/编程语言/pages/3/index.html","67f9f8f2b63c0a0e37c90586ed15e79e"],["categories/编程语言/pages/4/index.html","6fcd07bd38da2f1e2ccaf2737bedefd5"],["categories/编程语言/pages/5/index.html","3d062694162bfd83ffc9ba9a5056d625"],["categories/读书笔记/index.html","904f437042bcb735b543d05586c920cd"],["categories/读书笔记/pages/2/index.html","7de317691a6adb798bc8435e423df896"],["index.html","13ddbad77a5aac91dcaadad37371eccf"],["movies/index.html","de79628dea888e5d5f77947b1ca2e656"],["musics/index.html","33d4a9f1b2274a66bbda8497b5441b6f"],["pages/10/index.html","c444f9620ab10b7b1d5812e089ad2123"],["pages/11/index.html","8892bad291a2d510a8e2be196a7499e1"],["pages/12/index.html","d6afef75788b508ef16f26b5c776b99f"],["pages/13/index.html","7ed1bbd133c7d1322c5da819e003b25b"],["pages/14/index.html","9ba4f065258d5cdc39396cb1db7d2bbb"],["pages/15/index.html","8dfe641288ba75f499cb56c77b90bcd9"],["pages/16/index.html","6ed3b49c5d8c722661de3383e7737c0c"],["pages/2/index.html","2bec4d96ded3ff970a2efd732b873f17"],["pages/3/index.html","f983fe4b83a873c0894c55f0fd4fb9a1"],["pages/4/index.html","5c962ee3546947886bc69640d3a0535f"],["pages/5/index.html","03f17ee1233b0ea3c8643ac3c05d5f2a"],["pages/6/index.html","9c78acf7b48f53c555a85d55c994e58d"],["pages/7/index.html","e34c136af3f202b36ac94ba9f5a1d08c"],["pages/8/index.html","41c3a2a6b7aefbe6b570609bbd6e981f"],["pages/9/index.html","4069d6e462885d778e3cb50af03041d3"],["posts/1059499448/index.html","ea5d92a246b8dade9139187ec441123a"],["posts/1071063696/index.html","6d9858ba79f24f9d794c408914353b69"],["posts/1082185388/index.html","8a9e6ee11c476fdbfdec6e698f3fc2be"],["posts/1099762326/index.html","4e6b8e5c9c984923e9a1825881abcddf"],["posts/1113828794/index.html","0b69ae5dfacc5371e87a2d3ec8dad47c"],["posts/1118169753/index.html","8e81be92211d20a01b748453b4f69050"],["posts/1122710277/index.html","a6d2a288a13dbf4217a19e127b71391c"],["posts/1124152964/index.html","111b5bc1884fa3b34df7a7b6e1741b9a"],["posts/1127467740/index.html","36d05de847948998fece0155261d17e8"],["posts/1150071886/index.html","f2e9ca3223f1914075e47dff8e3c69b8"],["posts/1150143610/index.html","78280aa9eb257c50a0ccab4f54d3c299"],["posts/1152813120/index.html","318426466d0889f58583100b1c147ef3"],["posts/115524443/index.html","608fb116d13e3450c85bdd4e8ac5e244"],["posts/1156673678/index.html","9bae71e6570d4e29fe97540bbafb8207"],["posts/1166840790/index.html","3e89e8ccf18b33342d9dc9f54bb9b9e2"],["posts/116795088/index.html","f9f45a9b9b510796631a1e5736d716a7"],["posts/1176959868/index.html","1e57afa27a96637b5f1e1d4acad03c31"],["posts/1190622881/index.html","b4891a2db2037652f44e3faec2579629"],["posts/123663202/index.html","3061f93cdbcc142ce7a1e244228a4f8c"],["posts/124807650/index.html","a21a19d779eb265324e590e0e23b42c8"],["posts/1254783039/index.html","00c76121f3b4ef9e20ed0b37e6cc4f56"],["posts/1320325685/index.html","2655dba79c298ea3758e60ab7d58fd0d"],["posts/1329254441/index.html","df73c96e1a95857c2eb8d2ba0912a381"],["posts/1357715684/index.html","80a71150efbb5c9b09d179acdfc6d997"],["posts/1358971951/index.html","c8ebfd8961972cc7030509a3be3f3a3e"],["posts/1386017461/index.html","107f3618b521df74c9ca0d4b5830e394"],["posts/1394521917/index.html","64faa87811dfb34083c5cc782bfbf2e0"],["posts/1397717193/index.html","c473d61a9b19ca3908dc69ca33424427"],["posts/1417719502/index.html","d0b7ea7f88f1b993b3ac471989a64e6c"],["posts/1424645834/index.html","5e4a077bc2026c90134bcc00a0d921f2"],["posts/1444577573/index.html","414302fc22a5a65ac8509eb56ae7d107"],["posts/1467630055/index.html","b8003092131aa89e9c2c1e29ea373da5"],["posts/1478979553/index.html","75dfe8de76bb2c5f3767e5ac44d44c3d"],["posts/1540537013/index.html","50e93bd971e023293d5bab868ea68259"],["posts/166983157/index.html","60767653a82cc9596153ee2c2ea2f376"],["posts/1670305415/index.html","8f0b5ddd8b2ba6adb193237a7c58307c"],["posts/1684318907/index.html","c9a1ce98a6506e33236921e756d62090"],["posts/169430744/index.html","b27d1e882c44b0b45fb4e3254095ba87"],["posts/1700650235/index.html","ff3e82cde1bdf214241558a2299371e2"],["posts/172426938/index.html","df2e6c88c437e474436c6da4e18e350f"],["posts/1836680899/index.html","dfa5bc413a03ca17ce6095520b2043a4"],["posts/183718218/index.html","387e665c9f290d6b4a62843979d061dc"],["posts/187480982/index.html","f0997e80f36f0c1f3be9af28c9b619fd"],["posts/1930050594/index.html","d0a7620fa95d82900fe57545f903ee1d"],["posts/1933583281/index.html","a6dc7d3027ee56cb5ed76ed35a67b664"],["posts/1940333895/index.html","30181204738795c0afbb1003f59c7ed5"],["posts/1960676615/index.html","cdd68db9e2e7c80d088585fa2b95d45a"],["posts/1983298072/index.html","34656896fe4e6f8c43382633d27c78fd"],["posts/1989654282/index.html","b3dbd79b5f60e2d629ea137c23c922ac"],["posts/2015300310/index.html","63f24d3bba82891f026ccd1e851eb34a"],["posts/2038378679/index.html","5bcf741172ffb4c5b38925af0db54d34"],["posts/2041685704/index.html","5f60e019d570a1c137e4484d5a63663a"],["posts/21112647/index.html","10a37468cc8f1b5cac47c4a01aba57ec"],["posts/2158696176/index.html","89730256e5d200a04e12799b1fa57f21"],["posts/2171683728/index.html","ee1bb2c1bac21f3777b045724bc2ed0b"],["posts/2186770732/index.html","7d4b9a34ee1c809284a4eb65d0365700"],["posts/2275646954/index.html","a6f43f0a067b54a0528862fd89d4ec3b"],["posts/2314414875/index.html","f0dbbc805019aa7d98739ebebe334714"],["posts/2318173297/index.html","181ee7c2538ffa0a82ff8df63b9c2b15"],["posts/2418566449/index.html","1e9baa79209d9d5baa4dc06c3fb0b5dd"],["posts/2436573863/index.html","27bfed8f25bc2d7fe6857f9be3d0e677"],["posts/2462008667/index.html","97606aa28fd588cea6f4b40bf1eae5ec"],["posts/2463121881/index.html","f6b1da5e409c0181ae5a44cf19111a85"],["posts/2527231326/index.html","1db5a4504d83d426d8ad936d04c2ea7c"],["posts/2583252123/index.html","a238c4a047528feea75487ee11ae07cf"],["posts/2613006280/index.html","6ad247979e31b0c35191ec6fbd6616ff"],["posts/2617501472/index.html","768e0ec77c02241f557c58395ad793a4"],["posts/2676125676/index.html","e6124f2d52808a339d2a07977b09a553"],["posts/2734896333/index.html","d9decc1a2571ab89c7533fef68e8757b"],["posts/2752169106/index.html","c8c6aa020e3cb3a0b4e39d3e69911c7c"],["posts/2799263488/index.html","5abc33a70f0c41b2b3a483810ff85464"],["posts/2805694118/index.html","d0cdaa28b9c48051f66d877fe5738ae5"],["posts/2809571715/index.html","d4d7a5b2c0f68ad5a6627931f773570d"],["posts/2822230423/index.html","1acb44d17a0726599d391d8be12fe656"],["posts/2829333122/index.html","9e80196cd9f56da7a7043e6ed40a4e7f"],["posts/2911923212/index.html","91285034f7e13cc850d6e21d1ea93859"],["posts/2941880815/index.html","8f962f6b07497cb992d3d86ec7df8dd4"],["posts/2950334112/index.html","6731ed8955119f48c6443c4ed7a6a0f4"],["posts/2954591764/index.html","b92b1efce9663fed6441947ce1f545cd"],["posts/3019914405/index.html","49fe7f38dba2c03345a72092686bb980"],["posts/3032366281/index.html","9f3c58e7331eb3ea1f1a1f4d17b04152"],["posts/3040357134/index.html","7f528d01009a2fc3b1ceeca74826917b"],["posts/305484621/index.html","a5ea179928e853e081dce5afd46d7187"],["posts/3083474169/index.html","0bf7749f6ba5069082fc3f1b879800ad"],["posts/3099575458/index.html","538466224248dd97656c1efa1f890996"],["posts/3111375079/index.html","792f252a54b5164caf9300fd41de5dfd"],["posts/3120185261/index.html","9202f84d03c90ded4b8686f03a0e4458"],["posts/3131944018/index.html","b1acbc3e792f29e90b4ee73862db5da4"],["posts/316230277/index.html","d89f828d54a59d8b092c836b0240a35c"],["posts/3175881014/index.html","92615078ce0478e1c4b7563a59e32521"],["posts/3222622531/index.html","a2fe7e3bee4e8d7cb486d639f52bcf97"],["posts/3247186509/index.html","57b000abd339469426b76f26cdf7820b"],["posts/3269605707/index.html","e57f587a55d973372f67fc5189629ce1"],["posts/3291578070/index.html","33a4cc2b1d3a8268e8e848fc0b15b96b"],["posts/331752533/index.html","e1e6217db5952424a5fed4ac16d176a5"],["posts/3321992673/index.html","292e41bcd5e16f7ed5990ae94cc1adb0"],["posts/335366821/index.html","fca4d29142bd144f77e7f27efad43537"],["posts/3356910090/index.html","d751a155a580771c6327804c6b5c5bec"],["posts/337943766/index.html","e766cab68a442b5a474954f6c1727488"],["posts/3417652955/index.html","fa309c38fd70261e092dc8beb16aa4d6"],["posts/3444626340/index.html","0003cbcfb7e789416cf8afd3c4c0c3ce"],["posts/3449402269/index.html","41ae32f63616108e5c6732ea1453a662"],["posts/345410188/index.html","c16f45ad1a6f0359518dfbfb17d4447b"],["posts/3461518355/index.html","42a810db64989d7c8d40ece7e0e665d4"],["posts/3494408209/index.html","c714b4e651dd33400fee5ee349086864"],["posts/352037321/index.html","1fb5fef92d9b5cc9ad833533b3b54afc"],["posts/3521618732/index.html","a51838c3c51f456627e32dac746f546f"],["posts/3568552646/index.html","8e0d332174bb27a901505f2a0ecd9fa5"],["posts/3603924376/index.html","482f2cccc44ee2218a0c20d7ab26f21f"],["posts/3637847962/index.html","dde91e34931fc9cc1a7167480229d3d3"],["posts/3642630198/index.html","117b7594627f96a573305b1a27f5aa98"],["posts/3653662258/index.html","6463fc73fde6c4d7acd66b82beec65d7"],["posts/3653716295/index.html","7eb35402b5b81f5dbef4dbbed7199876"],["posts/3657008967/index.html","0e80662a6265677929f35aacdce06e08"],["posts/3668933172/index.html","560089be9136f38418f432d85a50c3de"],["posts/3677280829/index.html","828eb5696911ff5c6e55c7a9b6740a5d"],["posts/369095810/index.html","503a9fef0bf4c7abea9a7637fa2741fe"],["posts/3695777215/index.html","66320d3a7b68defbc2aae17089f3e92a"],["posts/3736599391/index.html","e15636132f7a09ff62d9ffc2cf382141"],["posts/3742212493/index.html","702ba46e6f9d8bea998880edfb9773af"],["posts/3782208845/index.html","20ad3eb7ede905281cbd50f081a6ceec"],["posts/3789971938/index.html","f98f3312653bbdc63332915156fb641c"],["posts/380519286/index.html","92a5dff89bc1eb77e27fab7ca13e94e2"],["posts/3846545990/index.html","8d8057b6e67822cb457e3ccb839cba04"],["posts/3873710624/index.html","2a2a6212d1f679cb5a45d04073ed4f52"],["posts/3959327595/index.html","b71ed4559b74bc624fe8d15556e142e1"],["posts/3972610476/index.html","49277d50969709595e8b843881309608"],["posts/3995512051/index.html","ef6ea5a47cc8315a69ae5ec78f89fbc9"],["posts/4088452183/index.html","d689d90fd509851fb7df5ed949cc6720"],["posts/4116164325/index.html","9ff14f51b817af48e3c8a2a1596b45e0"],["posts/4158690468/index.html","dcbfb4a8d885de3039de51a7ae6b5316"],["posts/4159187524/index.html","43cdd99e2e9934bb691106ee524d84ce"],["posts/4197961431/index.html","51d7c2017e98315f8de59849b9dc274b"],["posts/4205536912/index.html","4929916aa78fb3bfb7d1d8757d4fbbed"],["posts/4236649/index.html","af645a22b73ea81fe772b3c6578dabda"],["posts/426338252/index.html","d3a15d6a851c03678ee46c38d5a10081"],["posts/450254281/index.html","77b750a22d10aea15ee202c99aef141a"],["posts/4891372/index.html","6efc8c28bf7711a3bfe85ae58b92fa4f"],["posts/569337285/index.html","bd42ee86deebf53961dc9c832c889592"],["posts/570137885/index.html","c8b30480606ecff5f1ea372efea30bc0"],["posts/570888918/index.html","140c408f331f7d559057f61468acd549"],["posts/582264328/index.html","05089520d28de6de704aa1f5f3797f17"],["posts/632291273/index.html","e5875f4b435570a4dd231d6a8a9cbdd5"],["posts/70687890/index.html","628335364751d066a9375d9ee62d47c7"],["posts/719322223/index.html","e6941befb7ede59ca6d3e5ddbace9bc5"],["posts/720539850/index.html","49f3dd0d6cc94839ad0372275b53d41d"],["posts/786195243/index.html","7ac037cd27ca06ea02044a33ee85e826"],["posts/795474045/index.html","e3d502e981468380a3ede679a898e113"],["posts/815861661/index.html","7284831529ea65cf3d19a47919d2765c"],["posts/821259985/index.html","cfa1e158b51689853777f0158249cc3b"],["posts/828223375/index.html","51058a14cc2af5b83233ed2819de341f"],["posts/887585917/index.html","306fe00d91ab2e0ddd14eb8fb43ebb27"],["posts/888549816/index.html","71c0fc2392314fec1b43950f545e3d7f"],["posts/906436376/index.html","3f4aa52b01d9a0fb1387fbe4070adadf"],["posts/907824546/index.html","dda589954c575552d84969cb8dc3df3e"],["posts/927393529/index.html","7b232413dccff09acf1d11c6b8c9291c"],["posts/94443781/index.html","84ef60010861eef709ff89792db02633"],["tags/2014/index.html","23e7b99161a9934094bdbd0f62be2564"],["tags/2019/index.html","ef8061612d5356fa1ba4ca7b72d7d671"],["tags/AI/index.html","f78f996799664c8e32caaeb2b92ba255"],["tags/AOP/index.html","3b4b9e2ad3b0b9130f0599c2e9db2f04"],["tags/AR/index.html","94c08545963e962b45af3b33b857baa4"],["tags/AssetBundle/index.html","096fc767d6cdc8ae4b3163c68891bc64"],["tags/C/index.html","1e8f9893c722258209d188e390d36430"],["tags/CDN/index.html","6c337b42f26060c300ef60475e33c9ef"],["tags/CG/index.html","0ba9e2fcf7c63e5371fb7c05df0df054"],["tags/CI/index.html","5e84e3340c8f8c30d318cec442b4f27b"],["tags/CORS/index.html","fdd91a90b72ba8735754edfd6a873690"],["tags/CSharp/index.html","48f6327c35d2a6357342914b47ba1a2a"],["tags/Castle/index.html","368c9849eba419867152a206f8e95620"],["tags/DBeaver/index.html","1ffc0997c5d86832a0cae108489fd621"],["tags/Docker/index.html","0cea98ecb27e476302201d9eba2f1206"],["tags/Dynamic-Proxy/index.html","698802a0db37799b1ca06013a26e3508"],["tags/Dynamic-WebApi/index.html","e1321fac82083604dafc6ffcf60a9570"],["tags/EF/index.html","172093dcb454592f7a3c68b0fee6eb2a"],["tags/ES6/index.html","d52cf4babb280bc4c9764c970b2c8498"],["tags/EasyAR/index.html","186214cc16fd6b6617101ad59369591c"],["tags/Excel/index.html","52c9342e7acbcadcb8ce0160c3d8c1cf"],["tags/FP/index.html","af3f31a917ff1b4c09ac14cd2dad0a67"],["tags/Form/index.html","909764131a48502d387dfc6dbec9f53c"],["tags/Git/index.html","96b9c622e421d309d431065d4bc020d2"],["tags/Github/index.html","eb30495927d19339b565a7e6270bafa7"],["tags/HTML5/index.html","1a96ed042372385bf6d3516f005090ee"],["tags/HTTP/index.html","a99dd18819b6c0ad3d1c64760b5e5c54"],["tags/Hangfire/index.html","6e856c691406423a7e6d66d6f8855d46"],["tags/Hexo/index.html","d22fe5d8d64bd86cb0024bef4c343806"],["tags/HttpClient/index.html","047f71ef833395ca7f489024f769becd"],["tags/Hyperlog/index.html","34c987d3dd03d8590e63bed9bcef0864"],["tags/IDE/index.html","81688287b1174d80de77b3c5f8d8ebf5"],["tags/JS/index.html","3fc311d6e135a2a53bf6a5f5cf13c49d"],["tags/JSON/index.html","6e50108a7acca77f7a6fcd3c6eaeaf38"],["tags/JSONP/index.html","73a3bbbf8a1a6c379e5d3eeb8eb3e591"],["tags/Java/index.html","984f7e763efdc128c90ee9ae15d8b852"],["tags/JavaScript/index.html","72575d0c9dc7ca4d8fdbec6fcf8a8a8e"],["tags/Jexus/index.html","bd8857512733881ccd1f90d3d140336a"],["tags/Kindle/index.html","5739c8d1fcf8285924b34e5d704adc90"],["tags/Lambda/index.html","d877cd839cb6f1aa062529bcfbb581d7"],["tags/Linux/index.html","351b4245d4bc06a8c13941c6bb0d7f01"],["tags/Liquid/index.html","fa555959a2beffa4d8a059a3c7d269fd"],["tags/Logger/index.html","b37892d89bd2ff619a773ac0df851b4b"],["tags/Love2D/index.html","8276c1c8656c9f69d4c0f9cd4ad96005"],["tags/Lua/index.html","b32f0d0f7009da6a44394d31e7c81169"],["tags/MMD/index.html","25bf74530537b2cb77476a190441885c"],["tags/MSBuild/index.html","21ea0406eacada8d4460afad1b715c86"],["tags/MVC/index.html","b4fe906fcbe55674d795b76d65e76d7c"],["tags/MVVM/index.html","99ce711b3a111eccf2c9758a236315ba"],["tags/MapReduce/index.html","fe0feb20ff298476562b59ab2e0e9d93"],["tags/Markdown/index.html","c439964a7dddae60362468448b4d4946"],["tags/Mecanim/index.html","7d06cdacfe85a3a8f3351a1761017676"],["tags/Mono/index.html","15efe8e431c00f8f3425a5702e8159c5"],["tags/NET-Core/index.html","790814fefda7fcefecdb59a94514fd2c"],["tags/NET/index.html","646e9e8efaba0fea645e04177a57c343"],["tags/Nginx/index.html","8b9261cf33cb3856228492c246fbc74e"],["tags/OBJ/index.html","2073eeb23688bc57633dd7f70cdd3bdd"],["tags/Oracle/index.html","06a111673d164b33a7c88db3c6bd89a5"],["tags/PL-SQL/index.html","52af61251c302259ea3a1c18e45abc62"],["tags/POCOController/index.html","b4d3c764cc25dc5afa1a692adbbf939a"],["tags/PWA/index.html","9002fb623b045b11e3a6e047c4e585ba"],["tags/Python/index.html","5e889f127e0b7334da2fe1bccbe3d334"],["tags/RESTful/index.html","904860fd2f0a67408935aecd2bf5a228"],["tags/RFC/index.html","b38d14dce206f57c0f3a3143bf3f824a"],["tags/RPG/index.html","a2468e6dc95060cdab580281fab732c5"],["tags/RSETful/index.html","1c46d41efb24173f021ee777cb24214f"],["tags/React/index.html","d60d8b0fe41c3505205c63d000ddb78d"],["tags/Redis/index.html","03bbba6e3675a4f8fb801449b93a0ebd"],["tags/Referrer/index.html","a3cd7e2542eb58efd1c52e911343e345"],["tags/SDL/index.html","1fa3f7de1e5e81b0f7113e3cf66d3adb"],["tags/SQLite/index.html","601161bae4286557014d3efb88b9df5c"],["tags/SSE/index.html","26b7a785635f28bbbb2eda316f7af1cf"],["tags/SVN/index.html","ecb03120aa4cc1f933dbd832767cd744"],["tags/Script/index.html","ec7f34fcdaadea9a0c7a0072d096e3b8"],["tags/Server酱/index.html","1a309358fa91469b530a73b511dbf98e"],["tags/Shader/index.html","ebf1fbf680a70159d4309170aeb11e36"],["tags/SignalR/index.html","2977853f5e2d129b185e03486b8d6806"],["tags/Socket/index.html","ab891069485bb11e1665d22f99d5cbde"],["tags/Sonar/index.html","39db21d334a1d4da85ba5e23be420e35"],["tags/SourceTree/index.html","61339577e9b5708c05dea5cd87ac1ab9"],["tags/Sublime/index.html","8cbaad75e2ab461b43dd065beb93dfff"],["tags/Swagger/index.html","033ade95bb6283312f06b5d340de77e8"],["tags/Trace/index.html","8eabf8be2fc6aadff0726869b5de43db"],["tags/Travis/index.html","a9f50a53b95da2089f98416c750607d0"],["tags/Unity/index.html","4d0edd996d40aa55caa037469c22f59c"],["tags/Unity3D/index.html","ad68974913a41899ec87d64d050113c8"],["tags/Unity3D/pages/2/index.html","81d167066a18b81fd977c45a029b0d48"],["tags/Unity3D/pages/3/index.html","7de82a73f459cbba26d01c6f1f8c27ee"],["tags/VSCode/index.html","05ab5f5a692d652bee079f37184a468c"],["tags/Valine/index.html","6de88cfce27c522f009ffcf061264693"],["tags/Visual-Studio/index.html","9ce7e631403350cf7b2c4db9a2579e40"],["tags/Vue/index.html","b6e2500a24734724395c98f1f6839ab5"],["tags/WSL/index.html","4c924cb696d9eb2370d3e4e71d9b9df8"],["tags/Web-API/index.html","21e730aaa64dd1cffdb199ff79d194b5"],["tags/Web/index.html","e48eba7d88b7f5463a1a0c8b3b33d12c"],["tags/WebApi/index.html","aa61477cb37febc4f9db7bb8da38bf0b"],["tags/WebSocket/index.html","a210c8746617235d849c95584197af88"],["tags/Wechat/index.html","cea6c12212708784cf070498b2d0b9a2"],["tags/Windows/index.html","5aac03304907d907bfa2bdfa22e95aa8"],["tags/disunity/index.html","dce96568744d63f438bbb303b4588027"],["tags/index.html","10c2e48bcf2ec6b5a8907d5b351f0f0b"],["tags/matplotlib/index.html","d2ede5eef113569f8863fee62d35e5c3"],["tags/njsDelivr/index.html","6b101527ed6dcf5f7a7a2d3f1c06a2c2"],["tags/uGUI/index.html","026443de081d6aba4e5d4ee69bb766cc"],["tags/zTree/index.html","4ee65a0ddb736aa5df0ac650075cf25c"],["tags/一出好戏/index.html","190ccb9c934740e64ef8040ad70c6b20"],["tags/七牛/index.html","a44422983949357c638fd66328886a76"],["tags/主从复制/index.html","95bf8ce0da559a41d5ef4e59b3c10e59"],["tags/事件/index.html","a22a921acdc064aa0ab4a72a2cfead49"],["tags/二维码/index.html","15cc17bfed4af6fbf752837b929b4b15"],["tags/云音乐/index.html","e4225c61c5ac945f4935f2b5f94284e0"],["tags/互联网/index.html","c1d310388ceabedd12321ff714610843"],["tags/亲情/index.html","afd79ff2ff8e112cf302a64c8290bb8b"],["tags/人文/index.html","0ef4fb36c73338d4a3992be4098967c0"],["tags/人生/index.html","1ba1de778bfd6424cd77d8540051eee5"],["tags/仙剑奇侠传/index.html","25403e77693082a8e7ffdde220cc061f"],["tags/价值/index.html","ea757101469768f306ced5dd0d69830a"],["tags/优化/index.html","ad47e5d8b051dd5caef11d43d4517b37"],["tags/全智贤/index.html","513d527312d49eff5ae94512b5d44d72"],["tags/公众号/index.html","7d753504dcd1c4b4462dcc5e909ef969"],["tags/关卡系统/index.html","00e0e4e5252b08a21bc2492fad65b3f0"],["tags/函数式编程/index.html","d82bd48faaaace49a6a26717ed1e6b67"],["tags/别离/index.html","a68de68252f9a15c37f6a00812ffdc68"],["tags/前任/index.html","b6c78d3cb1bb7519411f3cfc4905d41b"],["tags/前端/index.html","a493b4d50dcdb61863407a069c32c552"],["tags/剑指Offer/index.html","812a37d2d94d9556e25ba8ef2cdb8bf7"],["tags/加密/index.html","c6e5d3104ec4805de4f619b49c51a67f"],["tags/动态代理/index.html","17d3d661f756c2f913b21b56e818cebf"],["tags/动态加载/index.html","9d188830e4f614406e823b8c5e01d70c"],["tags/动画/index.html","05a37dfb6a422fc075356ed9f4dd1979"],["tags/单位/index.html","d6b4c692ab98fded7d11c901233bf2ed"],["tags/单机游戏/index.html","25386b34e823b589bbaa4229342f6fdd"],["tags/印度/index.html","f81d6a770c4514fd777546747edf8ed6"],["tags/历史/index.html","ef16306e639800c0bd6e8eef166595d2"],["tags/反编译/index.html","d2658657ba2a3c1aea9db2137417b1d2"],["tags/同步/index.html","82898b0892533cbdd2722385507e3e4f"],["tags/后端/index.html","c48eb4b20391f854113d40971fb33404"],["tags/命令/index.html","c57b554cee3fa4d46c345753fd3b0ed5"],["tags/和平/index.html","4a7d61e6ff58dca6ed8991844f16f194"],["tags/响应式/index.html","1af0616acfc9745e9afbab2b6f869bd9"],["tags/哲学/index.html","90b46555f0c2ddd7f1f6c7db1896bb13"],["tags/回家/index.html","7ee6cdf65433345be7d784d4435b5ac7"],["tags/回忆/index.html","d8622218e7a4bd7d7174f9d1832f012d"],["tags/回顾/index.html","d9e4acc1e9db3da70a0e091fe6dd8b30"],["tags/回首/index.html","d3d9a2ebfaad13bc972cafa772b4055c"],["tags/图床/index.html","6bf1872fbce3dc4fa59a732e7007eed0"],["tags/图形/index.html","0aa15aec3fbb57565464e8232fdde879"],["tags/地图/index.html","be0a4aa15a16b1d9a914a020f0aea081"],["tags/塔防/index.html","5821c74f3407ea2560e0d7f7c971de7d"],["tags/增强现实/index.html","38991649c375a882647b89238631fb63"],["tags/壁纸/index.html","d90cd9c8f4fa7846eb9281c0377bbdeb"],["tags/夏目漱石/index.html","1b6ede78724c27b04a49c6eb9dd9105e"],["tags/多线程/index.html","5b73fdd9587c1688697e5db7f48b88fd"],["tags/大护法/index.html","5d6e99a1911076870b29912100b12273"],["tags/委托/index.html","88e14ef3742ae38bc702f01c2586daf6"],["tags/孤独/index.html","8bbaa506159bd1233ff565135b775953"],["tags/展望/index.html","d78d69f24e0c8ce8cec0babe41227365"],["tags/工作/index.html","76ec180fb36dd67c9445ae531dceb66d"],["tags/平凡/index.html","51435ccb49aa731364e279351493692b"],["tags/年华/index.html","6909b74e9923d06779569289cfc5a742"],["tags/年度/index.html","1c995692f68202d21e29cb57c7daaa43"],["tags/开源/index.html","debe2e185ebb1e9214427135507964ff"],["tags/异常/index.html","1e71b3f665c74e11670cd58adb463449"],["tags/异步/index.html","0a32bd0568a5d9d2d8bfc1f17110d1f4"],["tags/引擎/index.html","cedd36d194fb44eff50e29dd08ac8abc"],["tags/影评/index.html","7111dcfc9930b79a7d59f278c44c2bc1"],["tags/微信/index.html","eac301bc0cbbe1f1e63f09faef121a44"],["tags/微博/index.html","47325afbfa5841d6696e6a2a920493d5"],["tags/心情/index.html","72c1cc94256198a558442b7695c5375e"],["tags/思维/index.html","3d564554e8a67e8825611565aae5a378"],["tags/总结/index.html","2e4eee593a6cf0565ac20c321fb71258"],["tags/想法/index.html","6e7e1ad617b7b73ad6ec65462c377ee2"],["tags/感悟/index.html","2bf043a0955db1dcc0a11b6d9b9ed0bd"],["tags/成长/index.html","9c03718cca2cc909a7bbbdba0dec30cf"],["tags/我是猫/index.html","04cdada662e10e456354a10715adcfab"],["tags/扩展/index.html","ac84689addee5a7f6452ca91ff221c6a"],["tags/扩展方法/index.html","2e4a80aea65fd739402198696de30bd3"],["tags/技术/index.html","64c06a92c80a9065adcf7db0b401d483"],["tags/拖拽/index.html","a3c25b7be221cc0e813d1ac3fa9f53ed"],["tags/插件/index.html","7e03d826a6b457f409a31db06bf54b20"],["tags/插件化/index.html","f135ffdf7b5e34ff2aaf87e6131dff39"],["tags/数字/index.html","b9d989742155482eaf0f2a9e4c21f05b"],["tags/数学/index.html","ebebe8f80e12758cbb525dad853b9e19"],["tags/数据/index.html","dfa516241d5971a5392a718476902808"],["tags/数据交换/index.html","673700fce1d1610d23a31e031da4db16"],["tags/数据库/index.html","ea31a9329e50085d3082886172094581"],["tags/文本分类/index.html","25e97116ee19695d28904c33d3f22c4c"],["tags/无问西东/index.html","599c652fa4d6f8dc9688180c6d61e857"],["tags/日剧/index.html","21484c838f6a98ad2ab135c479419a69"],["tags/日志/index.html","41ea7e2d69a94da03bd42e65bf7cb98f"],["tags/日本文学/index.html","ecd260af2971f8facd46f1baecd378a1"],["tags/时区/index.html","b88f787f79ec4f5c31527e3279b392d3"],["tags/时间/index.html","fa25ae81df2829a9041dbab05896b67d"],["tags/服务器/index.html","6a8b922082990457fcbc2c94ecc48287"],["tags/朝圣/index.html","5411aec504f8437fea5bd0a98b28d7d9"],["tags/朴素贝叶斯/index.html","9a28702f59930da1b4bbebc39c0777bb"],["tags/架构/index.html","0e1568d4513c3f8c9fc7a4baba2db8e6"],["tags/标注/index.html","1eb16c6d2421529b01b02781a42ffb79"],["tags/校验/index.html","bacccd32e870caf14c1bdaba64e86ff7"],["tags/格式/index.html","5a9d156cf2e21bf0df1e88c14d7a0c04"],["tags/格式化/index.html","633c4f8f5df97e3cf88951dc507d3dbe"],["tags/桌面/index.html","d1c07b8f2c4a5c1b0e8aa56994eff93d"],["tags/梦想/index.html","625e3c9bf0c0af9bc1bedcdd83608fd7"],["tags/概率/index.html","7eef5772f0d2e039e82023fc6ea462ee"],["tags/模板/index.html","c5d36069d655bd60d4f04e011d377cce"],["tags/模板引擎/index.html","326c2798cd004c4f070df37754cd397b"],["tags/毕业/index.html","a842c0dc16d5badfcc1230076308d46b"],["tags/毕业季/index.html","4517bee25a8456a7485828a0bb46cd61"],["tags/消息/index.html","a49c5b59759d48790b239a8f79d535d8"],["tags/游戏/index.html","03752504760273f6d88272bbd5007e92"],["tags/游戏/pages/2/index.html","1fb926e620f7348ca3f19af93accbc64"],["tags/游戏开发/index.html","44cdcd64e9dd07c7df3aa55cb31377d8"],["tags/游戏引擎/index.html","b272aec22e60681bd12488427f010130"],["tags/爱情/index.html","28f12768742780519f4428b39bb21510"],["tags/版本控制/index.html","9bcece39ddfe688b02a34dde07a6c4b5"],["tags/版权/index.html","7a82603cb44a82030ab6b07b11d94be1"],["tags/特性/index.html","8ccc3f9b62e1a09702bcea9ec458dcae"],["tags/状态/index.html","64bac7b6e29962409dd54f6a1e74faeb"],["tags/现实/index.html","02ef6be40c2032281af41d4f30db4ca9"],["tags/生活/index.html","3a74056f823fff306637f27eba19b66d"],["tags/电影/index.html","b40adfe580a8be20e87e2110911b5f8b"],["tags/画家/index.html","e82ae5779ca5e1103fd0a86895ee5101"],["tags/知识共享/index.html","4eabbe7fc80b0b5f86dbe5daa278c167"],["tags/矫情/index.html","57e25ad2d81e711f7b35aef142076d35"],["tags/程序员/index.html","77b30049a670208263faf62cec74b56b"],["tags/穹之扉/index.html","1e9d7a629c27e4aa51348f9d5b0cb805"],["tags/穿搭/index.html","b3ea453989eee7f9b992cf7ee3728492"],["tags/童话/index.html","1f2411ba3f53c906a20d157281c98ea2"],["tags/笔记/index.html","ea48b02b6cb41417cc1f1f51f0575610"],["tags/算法/index.html","5a9b48d835384a6785e9e02faf12a6e4"],["tags/米花之味/index.html","8c30923ad0555c151b3bbd1b5931c800"],["tags/缓存/index.html","2e30c5f4e6c4040b72e9ce12fe90a01f"],["tags/编程/index.html","0bfe6273201bfc52ae5873e7328d0b42"],["tags/编译/index.html","d10f54da811bdb278d732b104768c09c"],["tags/编辑器/index.html","02cbe03a3d2ce5b3fee076ef96fe1eaa"],["tags/网易/index.html","1ba89635f22aa224bf617a4d170c9a50"],["tags/脚本/index.html","6ba3b71897d0c9e399cd2151eac13b32"],["tags/脚本语言/index.html","6c7147b4a103b32856cdec6f6152c5b2"],["tags/虚拟摇杆/index.html","fceb04885195196dce9053e78b584808"],["tags/蛋炒饭/index.html","a820c4c2672937415eff6a3195267166"],["tags/表单/index.html","61b10ec04d6a7479529095d17428b882"],["tags/装饰器/index.html","b86cd520904139312485831febfc0788"],["tags/西安/index.html","d764b7c26d8f3930e5802ccede93ace4"],["tags/计算机图形/index.html","c268f0ce7e18fe7fbf7ced38a5a1a9c6"],["tags/设计/index.html","0e766572e19386468a364dc942f8cfa0"],["tags/设计模式/index.html","5c66f23e158fd949915a3bd37c808fde"],["tags/访问量/index.html","259cfd8b7c7ff65426bdce5044e8b312"],["tags/评论/index.html","6d98b96e8768d9515fadb1c730d4d8c5"],["tags/词云/index.html","d9f305034cdf189d278140295230b0d1"],["tags/诗人/index.html","0f237be02b1b5b8ac99417dc9e2af454"],["tags/语法/index.html","099ce80ed733ef303ff85388c0ad2bb7"],["tags/请记住我/index.html","11e5cea8c68ecf2cbb93494133ca248f"],["tags/读书/index.html","a8a2669ff3008392f891478418f7edad"],["tags/读写分离/index.html","d6630077e68ad774c0ffdfda55f4ffcd"],["tags/调试/index.html","7878fb9272a9b6d76c078df2b7ca10df"],["tags/贝塞尔曲线/index.html","8247d3a26bda380f9d515aac6f1d02df"],["tags/贪吃蛇/index.html","beacdf65b4cce309640e97a30cbd867b"],["tags/资源提取/index.html","a9b531aa69ab31948843d4a5e00540ca"],["tags/跨域/index.html","6b6c24e2247d2890a87417cd535f9a97"],["tags/跨平台/index.html","e4067af5199a63e02986ae75153ddab3"],["tags/转盘/index.html","8a0be85fedda263254d1a3c0fabced88"],["tags/迁移/index.html","6391422ce8a4c37cae8af89a90f63b10"],["tags/通信/index.html","b26b7258b1ddf51ca151d3a5480c5c38"],["tags/邪不压正/index.html","142679902d2f9f87874f7b376d699f90"],["tags/部署/index.html","2fa4b1c806df0597db7a71ae00efe07b"],["tags/配载/index.html","3ee7ebfa4cb4e534f1c80ebeaf66605c"],["tags/重试/index.html","01b03041f858f9c34b121703716b910a"],["tags/长安/index.html","c735169475a2a24eb2c5cddf40657f61"],["tags/长安十二时辰/index.html","8fd5373ae4dbd0c339e680559821945a"],["tags/阅读/index.html","49b409b37bdd2220c4665212a2de4413"],["tags/阿里/index.html","b21e6aba33126facd2a0f802648edd3f"],["tags/随笔/index.html","9debbfc2a82c5c300e9502886b014a5d"],["tags/霍金/index.html","67746e57fb8968c9e7369e6cf184a017"],["tags/青春/index.html","c3950261f11612f58861f99004d82f9a"],["tags/面试/index.html","6c9d9ad5b95676ac4b4fe14c9a9d3b15"],["tags/韩寒/index.html","c8c1818ca4f5e76796e930c725ca1a1c"],["tags/马尔克斯/index.html","86f77a5383a22f8bc14ec65f6509e0cc"],["tags/验证/index.html","83bbf4badf66a25da59b139ff31d6c54"],["tags/黑客/index.html","deaa505e2cb56c04ea8bc266716d0a44"],["wiki/index.html","6542d2ee810e8e4f8ac0d42d5947a2eb"],["works/index.html","048ceac422700c1260ca699cd0f98bfb"]];
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







