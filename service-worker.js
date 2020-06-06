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

var precacheConfig = [["404.html","337f0d10c700092509e7c17034e843a4"],["about/index.html","c82dd99cab20ebd6cafc7f8ac7f5fad1"],["archives/2014/12/index.html","10cc1d14babb2135a4880085f21cb30e"],["archives/2014/index.html","a97d13f027286af06a2ce774d4de9c07"],["archives/2015/01/index.html","2da6ff850ea91066eacab3497a634507"],["archives/2015/02/index.html","3cd0cba6afdc9cd475d12d452f278ccc"],["archives/2015/03/index.html","48a0e7ff81800a33bfa3e56ff584fbc2"],["archives/2015/04/index.html","ab6221bf656abf1ed8a757f0192c4f4a"],["archives/2015/05/index.html","fc074b949a40d9b17886b9236f9a3a7f"],["archives/2015/06/index.html","dbf9f0bd850d9b02a5fedddbf6c787d0"],["archives/2015/07/index.html","199277c41367135315c09b75ac9645be"],["archives/2015/08/index.html","d9f0d045113e29133e951b2aa3d70717"],["archives/2015/09/index.html","047c15a6b552cb5604bb22a138f72da6"],["archives/2015/10/index.html","1c5995da3efafa4c831c27e837cc2447"],["archives/2015/11/index.html","7cf3192124ca513adcf1f966349ce55e"],["archives/2015/12/index.html","f0ef5028c5d65330a99a91fd3a85d84d"],["archives/2015/index.html","448af478ad4a20be8ddfa1ae0f0cc955"],["archives/2015/pages/2/index.html","123967202ad50c015e01f9d7c5b73d4b"],["archives/2015/pages/3/index.html","6d2b0298ac801bc8e240af4b00e323a1"],["archives/2015/pages/4/index.html","63e9e8e49d56f95bee9c605e4d9957d7"],["archives/2015/pages/5/index.html","726148e3144f9c96d925bf4e20950dd5"],["archives/2015/pages/6/index.html","3bd21d8e8772b6ad7500fa468a2c06a3"],["archives/2016/01/index.html","6e2911803b244e61f4685f44374dbe1a"],["archives/2016/03/index.html","5276acc58f6f982c17250627c9bff5eb"],["archives/2016/05/index.html","dd0e28d80d670156dcbca64aec78bba4"],["archives/2016/06/index.html","7dce0502dadf618f48e641d64f8f7620"],["archives/2016/07/index.html","d0c4f3138927a9c3a066c077379a0d10"],["archives/2016/09/index.html","26e2866d7ffbdb5a884968b0eb53e793"],["archives/2016/10/index.html","5e42c554ded7340aa7e779f92707308a"],["archives/2016/11/index.html","3cbb63fe48c8a6baf0473a082cef7186"],["archives/2016/index.html","333fd8e54f4c13530e71360470098270"],["archives/2016/pages/2/index.html","7338818a6993584280b500da044c0cdc"],["archives/2016/pages/3/index.html","74020a6e8c1204097a8b806b6bd3163c"],["archives/2017/02/index.html","6656548013c56eeb57b356fbdfb4590b"],["archives/2017/03/index.html","8a05b57c5b99febd0f42369da23a14ad"],["archives/2017/04/index.html","8ed132b6f194b8635eccc348b23b1d5d"],["archives/2017/05/index.html","9f81a8d96f85d69c36021011ec39dc5f"],["archives/2017/07/index.html","20e7978a50c407f3f8a38fbbb331ab85"],["archives/2017/08/index.html","d413f57844f0082ddac0b292feeae3a1"],["archives/2017/09/index.html","fe66380815976ad053cf03425509c507"],["archives/2017/10/index.html","e8470d68cc9eed034bf8fd63a4ca5636"],["archives/2017/11/index.html","6ba7810a89dc996e927c426506a73b5b"],["archives/2017/12/index.html","095ce6343041c415e605386390c8a9a5"],["archives/2017/index.html","cdea77116469e4253353c8adcb2d1525"],["archives/2017/pages/2/index.html","e1482e542f500320aeff518976b6dcf0"],["archives/2018/01/index.html","a522e8b9d4bf6cd492fc3e3c0c7c6b66"],["archives/2018/02/index.html","3c9a9a962a271d6631b4f6bebf9c3dc3"],["archives/2018/03/index.html","b3a9e7ce99d709d8cd3beae16374bb75"],["archives/2018/04/index.html","947f6543f3830cee51c8f7c288c39c81"],["archives/2018/05/index.html","c0bc25b8971f562b318896125c35d938"],["archives/2018/06/index.html","480543587f0c39bf08d41dacab74876a"],["archives/2018/07/index.html","fc1aeda38d088f766179b6f91a3c82c9"],["archives/2018/08/index.html","b79b66906679c2cc062809600b4780af"],["archives/2018/09/index.html","2bd2025698dd6f9d65eec73aed71029c"],["archives/2018/10/index.html","98aceeca6a96e31660a86a6c1b285c50"],["archives/2018/index.html","c0855c1b3b9e3466deff5f1a685be779"],["archives/2018/pages/2/index.html","bda00e7e1a66e126d550ad38d8054795"],["archives/2018/pages/3/index.html","5fbffcadf133e18c3b7688e8d6687a13"],["archives/2018/pages/4/index.html","7d0711759bff9d13cfef14361a1a4ac6"],["archives/2019/01/index.html","119ebfe8f072939603577d3ecd326f0e"],["archives/2019/02/index.html","f0abd90f7cf1508d9dd19c3b20f7c843"],["archives/2019/03/index.html","61cd666b109e1fa6e33cc67715e33f1b"],["archives/2019/04/index.html","986dfad617c1e6b7f7396353f7a52e15"],["archives/2019/05/index.html","e91f99524fbb0c0be779a06755865ee0"],["archives/2019/06/index.html","6a1a54722826f1a021012a6ce364b454"],["archives/2019/07/index.html","4f466d4c5360f2b354e37a013ce53e26"],["archives/2019/08/index.html","a25127de2856070c059d04b49a0cf77a"],["archives/2019/09/index.html","ae9fda3df2ba502036849b37a5a8e49c"],["archives/2019/10/index.html","20518b67c85290f7dfca67ac3ef47f8d"],["archives/2019/11/index.html","e503a9ce8cc3225a6b864c1ff31410aa"],["archives/2019/12/index.html","3bb60c4f4ac994d7c3182ea02c0c2fbe"],["archives/2019/index.html","f3c8d7db8d32238b1bf1ac67a3d518e5"],["archives/2019/pages/2/index.html","c9118ad3abc9157ca23ff563406889c8"],["archives/2019/pages/3/index.html","42cb5a5fb4751ba1cfe26f248845d296"],["archives/2020/01/index.html","8b0b5a3d70bb7e7d24d55fed529c1401"],["archives/2020/02/index.html","e01f34650f6c61b85ec863c0a39fe125"],["archives/2020/04/index.html","f5d20955aac1414a6272ae0ae70e99a0"],["archives/2020/05/index.html","e22b212ed196e3ec1b7782d9ad14a6ab"],["archives/2020/index.html","bb92b51f16271313194df955b8b7a26b"],["archives/index.html","c0959330a04956865e90774e923a49de"],["archives/pages/10/index.html","375c1c91992843c87f9c70be5bb2d55f"],["archives/pages/11/index.html","1d5cd5a9b89e7cb44341aa6bac57ed22"],["archives/pages/12/index.html","93536ed5da26bad0a23cd91b92e2882b"],["archives/pages/13/index.html","0aba4cf86548a0edde668e4c82c22d4d"],["archives/pages/14/index.html","70aed9b8b14b248963cb50755988a1c2"],["archives/pages/15/index.html","7a507d14c72f4a99886607e4bdb40682"],["archives/pages/16/index.html","f1936d30c6fb62a424eb474d741810a3"],["archives/pages/17/index.html","01d23c05cceda3b73e86dd6af0138481"],["archives/pages/2/index.html","d1725827c97333c3abadea87371df180"],["archives/pages/3/index.html","08c3a62338ca16b727f8a8934c84f0ce"],["archives/pages/4/index.html","db6efe2e335b018a725f207bbde43cd3"],["archives/pages/5/index.html","9f26e47045d00151995e4dda4524d1ec"],["archives/pages/6/index.html","2871b5edb86d456228340728b029bb3a"],["archives/pages/7/index.html","05a877ffc57a46206cccb1618526f6b4"],["archives/pages/8/index.html","45f631fd40c8ef6dd61c881334cf2c2e"],["archives/pages/9/index.html","da05fc30489f4f39c45d72d8d7beabf3"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","04967daf0d57d01ac36b257b97016f18"],["categories/Unity3D/index.html","a46d2925117d1df274519f4835698f85"],["categories/Unity3D/pages/2/index.html","56a202795f151fba503736fef3f527b1"],["categories/index.html","d3b6813823d5e91a9538be648922b9d3"],["categories/人工智能/index.html","736d54f9418e92aa7f769405690b0129"],["categories/前端开发/index.html","3a94046039a45b2623355397b2bf5b78"],["categories/单机游戏/index.html","4fa06c2c1fe70effb542a2ba0e6bdf8b"],["categories/开发工具/index.html","050bebf4d38067272fd7911af7a2a802"],["categories/数据分析/index.html","e8b4e0e3823927ae3104da7f8db56cc9"],["categories/数据存储/index.html","3098cf58bea3e11f0d9253e0efc79742"],["categories/游戏开发/index.html","e0e6ad81540a33c963cce21c18c968e7"],["categories/游戏开发/pages/2/index.html","8da6ae33168ba45b14878c827f0387f0"],["categories/游戏引擎/index.html","3afb40c078af69139892a5622ce6fb57"],["categories/独立博客/index.html","7641ef6a24d3e8f350151425105d900d"],["categories/生活感悟/index.html","c5ec5636a73a8738dd5bed9e1b948c0e"],["categories/生活感悟/pages/2/index.html","37ef53eadc8c7f3922e2f24635d4fc3d"],["categories/生活感悟/pages/3/index.html","fb5aba89765b5de2b6271297fddcc496"],["categories/编程语言/index.html","a42d9d16249ac6ef2c3833c9ae68309e"],["categories/编程语言/pages/2/index.html","00310f59ea51c68c558e2c97c5db9f23"],["categories/编程语言/pages/3/index.html","86f960be8f7aa4072d73afedecc71d8d"],["categories/编程语言/pages/4/index.html","e5fd9ce1ce0ba58e77546f3ec64a2ef8"],["categories/编程语言/pages/5/index.html","d83a86cdcc6e93bee84eb1e302acfb47"],["categories/读书笔记/index.html","bf86969a31ca3c07aea19db4ffb57eb6"],["categories/读书笔记/pages/2/index.html","c47530f7f672fd3060a109d882128dfa"],["friends/index.html","8e00a94071533c7003cf281959310d6e"],["index.html","c309612b7729271cb422b4ed45011f30"],["movies/index.html","9dae8e03315b3dddb0011c0b3293dff9"],["musics/index.html","e9283e1701c40caf422f12eafb544f32"],["pages/10/index.html","89640f9d6571ba872128ed2dad92b4b5"],["pages/11/index.html","0958e3cfa17c77ea25279b9ee73a6fa3"],["pages/12/index.html","910614fcdbb7e0709a99fe86f3db0355"],["pages/13/index.html","06a8fbe6ac5f06e3cc750cb380ec0403"],["pages/14/index.html","240068efb21ae18a904e37c21c1b59e2"],["pages/15/index.html","a8ce2dc8f6df4314097e9b313d0c409a"],["pages/16/index.html","e538a3258efcb34cd1456530eaace9b7"],["pages/17/index.html","35d2126863cd9d0a117037873d20fc6e"],["pages/2/index.html","2508c3f7dc76c3b3eac5099dd289a3b3"],["pages/3/index.html","8dbbd4e7ba21e9007c23b3de63d59698"],["pages/4/index.html","542b4b08fc7a91bf52c7a814fc9f5c89"],["pages/5/index.html","d574c51466c81e4eb5fc8c639c60aef5"],["pages/6/index.html","87026d4191398a4cfd1136945cd34702"],["pages/7/index.html","93c6ba02d281fc39d64f52bc370365c8"],["pages/8/index.html","444c49645d1e469f5cbcccb25961a0f1"],["pages/9/index.html","49a275c04ce88e07a359307ae5ad0be0"],["posts/1059499448/index.html","ae42176660db63dabb00325f2d21638d"],["posts/1071063696/index.html","5443d9110a14131bf312123de4d1dda6"],["posts/1082185388/index.html","7f738d20c4b4ef2dc5295575d25e17f5"],["posts/1099762326/index.html","9582a52d9a47ce6328414d1606eb4e3c"],["posts/1113828794/index.html","46919f3803e21389990cafdab8e0f673"],["posts/1118169753/index.html","97d49c199ef6de0860e76a372d381ea1"],["posts/1122710277/index.html","8ca78880aba0064b88af2009452e25bf"],["posts/1124152964/index.html","b67698013883afad2ff72980c557e6f8"],["posts/1127467740/index.html","b02a4f9f9dece117f1a2ce81d9a5ae4d"],["posts/1150071886/index.html","9037332b126a8296b38a55f14b4439fc"],["posts/1150143610/index.html","2e2b5fa9cefe261000366e6271bdd123"],["posts/1152813120/index.html","690fc4144f47988a1a59e64147a96cf0"],["posts/115524443/index.html","359c75e193016c07ecf999e30e37c4d9"],["posts/1156673678/index.html","454871882bc2879a855b6194d30ed4e3"],["posts/1166840790/index.html","d37227da947d2913e20d403c3e7185fc"],["posts/116795088/index.html","fecbdcec9d892fd32c2714b653052cae"],["posts/1176959868/index.html","cc23e4cc0972e0a41fc40833102587ef"],["posts/118272597/index.html","8a99ee318bd9c1e35dbef9faee8108a7"],["posts/1190622881/index.html","f25b19b79303c2f820e7e375aec48215"],["posts/123663202/index.html","fbb8b6e337407d60bdf0e0dd81feb7e7"],["posts/124807650/index.html","52f55575b3a61f80749c68583684df7b"],["posts/1254783039/index.html","1cc38a986231e2d847a9d39aa30e719b"],["posts/1289244227/index.html","28135b851103e60d7df6faf31b8251e1"],["posts/1320325685/index.html","4f45da6edf72b09e1198b7a27dbf9cb9"],["posts/1329254441/index.html","3c9428721a858339ca6234c97ff4a186"],["posts/1357715684/index.html","6139039cc50caa38b2a81a06423f9968"],["posts/1358971951/index.html","78262d81392b4fc76d5d729d1b08d211"],["posts/1386017461/index.html","7efeea4ba46556b45281877891f44a1e"],["posts/1394521917/index.html","94658112c2d3f510b71412052629f75b"],["posts/1397717193/index.html","d21aeb8460986b473a7f592dbd49c604"],["posts/1417719502/index.html","d488f7a9e46d7155d4dd994b335e9a67"],["posts/1424645834/index.html","93226f8c9e25be641e975126fc40b978"],["posts/1444577573/index.html","e116ae9a463b98f3a82984cdbaf438e0"],["posts/1467630055/index.html","90214c1bdec872c7d06cdad33e497f83"],["posts/1478979553/index.html","ae18c9d98452d85fafdba6201ecf6d4a"],["posts/1540537013/index.html","5a714cb7408fd14d5a13baf38fb0ccc8"],["posts/166983157/index.html","969a0f117ade0ae0c0380639960f7eae"],["posts/1670305415/index.html","9b55ec4ed1fcaef5e95eecabbf89c2fd"],["posts/1684318907/index.html","cdbd863700a67ed27819dd338faae594"],["posts/169430744/index.html","61fdb0e84017a88ae7b37b891dcc32bf"],["posts/1700650235/index.html","ada0e885ee3775dc0176a58208633d27"],["posts/172426938/index.html","b03b7350051dd7df3b0676da4d1a819d"],["posts/1836680899/index.html","033a9c324d85fe3343f050a99a1d4ddc"],["posts/183718218/index.html","5fe9aadd45962cf6a96f914545416a07"],["posts/187480982/index.html","879bcfdaa214e9437ec7ca3b556bd5c8"],["posts/1930050594/index.html","c92c666888d500df9cc91a81764b5ab5"],["posts/1933583281/index.html","3697bceccd4fd13a30655600b62a936f"],["posts/1940333895/index.html","a644f88031ec4cd50bae289fe466cac9"],["posts/1960676615/index.html","bc78f61909a593cdb8e5572f6f87900c"],["posts/1983298072/index.html","2c98d7b5c05729861133fb40a86a380f"],["posts/1989654282/index.html","df5870f625f9ba7dd498f7b785a00202"],["posts/2015300310/index.html","fd18768d09e11bf1f81f97a0ea5200a7"],["posts/2038378679/index.html","bc23a493f10a5ca7ab1cd9362f67fb87"],["posts/2041685704/index.html","e14ccdf5e4eb2aca8ac53826fe555826"],["posts/21112647/index.html","e0816154ec05e44e6d772d447abaf78b"],["posts/2158696176/index.html","81140d1216deda64a800c8cae889955f"],["posts/2171683728/index.html","359564400e26cdcbda7ad6c35475c721"],["posts/2186770732/index.html","994a3001c1b75147977ecd585d420336"],["posts/2275646954/index.html","5b41c022426b247d2911b664728562a3"],["posts/2314414875/index.html","45aadc338750d2354c1641a88924582f"],["posts/2318173297/index.html","f30d4478784e578956fbdc3a35ca1caf"],["posts/2418566449/index.html","29feff89aeef118d9670cc0ef5cbdc72"],["posts/2436573863/index.html","d87a92512128aa5329d2d3ecf392475f"],["posts/2462008667/index.html","68bdaa84da3b88f843cd4a97567b3d67"],["posts/2463121881/index.html","559bdce159ed9a9d9d111036f015153c"],["posts/2488769283/index.html","bbecb06340fcd6fa1eb578cbc3ef8044"],["posts/2527231326/index.html","e9033abace3b12bfd6bc59685021ea16"],["posts/2583252123/index.html","472ee54edfa5163ec05563cfb4448921"],["posts/2613006280/index.html","a658e5a6df9fd73b63693924664ea9e6"],["posts/2617501472/index.html","acf3b584531869dd75903c72c33022aa"],["posts/2676125676/index.html","82fbbce4a8fd5ababae6119b8860e158"],["posts/2734896333/index.html","79922f0c47db83ee24bb3acc50b30ff0"],["posts/2752169106/index.html","3cddf603ac270778433e10e57c98a210"],["posts/2799263488/index.html","5b83e9c6532479980f3777f77670885f"],["posts/2805694118/index.html","ca06c88fab7b560aef9c5152c074429f"],["posts/2809571715/index.html","f38bafdd0dad1740e3cc7e7689fd11b3"],["posts/2822230423/index.html","6201ebff3ea374484a5977cd44b7edfb"],["posts/2829333122/index.html","adff451753a70a79674eda5bed3317c5"],["posts/2911923212/index.html","d75827348522bfae9dbcd5d9ae0ec647"],["posts/2941880815/index.html","69d93facedd6f778ccccb9221f98b1f3"],["posts/2950334112/index.html","c16f93eba53edc0cba05aeec5d7144df"],["posts/2954591764/index.html","da3d49c6eb41dda3179138535f7e6d60"],["posts/3019914405/index.html","bb9848c0cf639f1be9e9cc0d26e73353"],["posts/3032366281/index.html","36bf5e7b661229d96af978c388545deb"],["posts/3040357134/index.html","b9ae7f8459487273622943a2e5b066c8"],["posts/305484621/index.html","56dce887677dbc2fc51e0ff34ee00f43"],["posts/3083474169/index.html","b2f7eece2321b69100a5803b6153fe0f"],["posts/3099575458/index.html","ca3b4f9fb8c9083e0ec202eba3630047"],["posts/3111375079/index.html","805b27dcd56cb94fdcccec02dc60582c"],["posts/3120185261/index.html","6508b4c37c06a2117ec8491b0de42e5e"],["posts/3131944018/index.html","7f88783ba127c573797564d6ad500121"],["posts/316230277/index.html","825d7e8940a7daa6e2b53021d31b09bb"],["posts/3175881014/index.html","ea2f79da7832a1aa599cf17fb175894c"],["posts/3222622531/index.html","a5bd7722cb41501aa93bb013aa3a0c5d"],["posts/3247186509/index.html","3b1c1c85a6fde3145b7b226e2f83a422"],["posts/3269605707/index.html","1653f7671e5ed7ab5d574a75364bedf6"],["posts/3291578070/index.html","b0987fdbe3f5b897db29727d155c077c"],["posts/331752533/index.html","5550d5c0746e6fa5c05cd331d71452c8"],["posts/3321992673/index.html","b8ae1f90f6aece50838bdf56c0db327b"],["posts/335366821/index.html","ba169445317ddbb722c6b760fa4451b3"],["posts/3356910090/index.html","7ccd1826149d17ee788f4b838eac4c41"],["posts/337943766/index.html","57c782886c8e3b3430279181eac83e4e"],["posts/3417652955/index.html","603c63ce7001b356a168969151d2a52b"],["posts/3444626340/index.html","1ef8d18d43b94b043f862c3a8c88335e"],["posts/3449402269/index.html","2bae995f7527cb04e603accf41397e18"],["posts/345410188/index.html","63a4d82e2b874d5f2cd6a773a8ac3a74"],["posts/3461518355/index.html","406e02f8bc6946967004a23f06e9e4c7"],["posts/3494408209/index.html","687a14bd3cb65a4960f4b9070d0e9fa9"],["posts/352037321/index.html","b6ba243eb550edad3aa2e7c29bfed696"],["posts/3521618732/index.html","4e8c77d3085f0ae4c3345cac6df8d212"],["posts/3568552646/index.html","fd9598f8c2372eecdfb7c1be022a47ac"],["posts/3603924376/index.html","16036e9d904d4361ad2a66965a83fffc"],["posts/3637847962/index.html","0aad47b84932e012fde62eeea79e2398"],["posts/3642630198/index.html","a3c0334b2fc4b504d7fe511c59042e9f"],["posts/3653662258/index.html","24e0907d036c7787f9dedb969a69728f"],["posts/3653716295/index.html","d9ef0b3d87b74c0c352bb7c0926e982d"],["posts/3657008967/index.html","f619f77d139ba144f8236288b553e4c4"],["posts/3668933172/index.html","7239a86b3b91243610737cb5eb513b6c"],["posts/3677280829/index.html","92186a100c464056503ea78a81f45af9"],["posts/3687594958/index.html","bf15e5d9bcd2f1eee3c30dc94353416f"],["posts/369095810/index.html","7555feaa9bcd747dec773f5877cb2158"],["posts/3695777215/index.html","fe8e9173325760441b36b68c3471528b"],["posts/3736599391/index.html","a1de6f16b93843d1c48184ec839fd664"],["posts/3742212493/index.html","fee6da17c89953b266371a4a63e4f670"],["posts/3782208845/index.html","75083861b30841122b0bfe7cabb5acd7"],["posts/3789971938/index.html","4d1a85f23ebfdfc2dcba17f752cf0f98"],["posts/380519286/index.html","477cbda5c75dce39ef8de25cf7c997a3"],["posts/3846545990/index.html","392beca571f425001548c797d18eddac"],["posts/3873710624/index.html","0f5a546014e5cd137593c23e601fc507"],["posts/3959327595/index.html","2380258717db1b1d1189aa23bd5c869e"],["posts/3972610476/index.html","a3d01560ce8533b02642fcf5f60c644e"],["posts/3995512051/index.html","bfff7fac3dd7aa16404f315c79eaf885"],["posts/4088452183/index.html","d21d298d70e4d227c80656d824169b3c"],["posts/4116164325/index.html","790deb2aeb74a0495f4a7ff6cf44a4e7"],["posts/4158690468/index.html","a5f6bc67aaa7db2b12c28f4b46ef797e"],["posts/4159187524/index.html","f03c137377d5e7abece1a511626b0413"],["posts/4197961431/index.html","64169c09c7ff02bcd5d99c241a397d93"],["posts/4205536912/index.html","f80b51a858e26482cd23e49d78d55884"],["posts/4236649/index.html","0bf6d538a64e05daa9290eb34daa1102"],["posts/426338252/index.html","af6da3d9c93098d11a5f3f72cf5b90a7"],["posts/450254281/index.html","041b6af66e52cae7d1d45496b90a3cba"],["posts/4891372/index.html","d0215bfbdf08c92e48b0325106c6b168"],["posts/569337285/index.html","6854a5277f7170c4bffa971bfb8958f5"],["posts/570137885/index.html","0d53bee42ae71e4de170b5b2ae232f67"],["posts/570888918/index.html","685bbab29b6ffe96d51df0085d7a228a"],["posts/582264328/index.html","4b0d73b10ac88d82acdc6f6f8a0aad99"],["posts/632291273/index.html","f54100be00dca1ea275ef6231d0edfd6"],["posts/70687890/index.html","c5bd54c31a97c6527f4656ce8952b23a"],["posts/719322223/index.html","a6ad62823fb674c7443d2c84e8daaa48"],["posts/720539850/index.html","98cdd63f186621763332b1f0c72f1a0f"],["posts/786195243/index.html","0dff08c44c866c08cb914c601602e6d5"],["posts/795474045/index.html","7a2ea03b856f476b68b034cc9946d65c"],["posts/815861661/index.html","787f1037dcfd09f78cd0724ab2a68af8"],["posts/821259985/index.html","1cc6b3f8a2b91db7b2764b091abdc241"],["posts/828223375/index.html","53aa2e83bf5af1a350067edd80801a59"],["posts/887585917/index.html","33361a49da813f6ff76a1ba56fefea0f"],["posts/888549816/index.html","d9444b2ed1107273a9fad83e70e62b9e"],["posts/906436376/index.html","a4b7a5445f5041aba262efa691bd9a64"],["posts/907824546/index.html","76d33274996b296a88ef05f9876b34cc"],["posts/927393529/index.html","8e678cd9cb968f5ac6035b34a07d0f19"],["posts/94443781/index.html","aa47e9fcf99ab9b2edb25bc359440a6a"],["tags/2014/index.html","14b45b3b84f3bd6aaeab313a7ba44b97"],["tags/2019/index.html","a7b956386473175e28a86fe6a5ca20af"],["tags/AI/index.html","2717b0c20ddc7b79a20d328c6b1141c1"],["tags/AOP/index.html","524d84f631d7fe636e1ad755aff79c4b"],["tags/AR/index.html","c826c44bd90cebf607c9aac1644122e3"],["tags/AssetBundle/index.html","c7b0a1d350e0b3eff3aad8e9da6d6d32"],["tags/C/index.html","21ae5faf6cbf9d85094b50efba942c9d"],["tags/CDN/index.html","d6ceaf72bd5ffc17377ae9dafe003227"],["tags/CG/index.html","6118f85cc82b4f1fc97d01ddd50f32ae"],["tags/CI/index.html","1e46c1cb31abe6e9569d56350558d0a5"],["tags/CORS/index.html","024eccc27c6581c4c1bd8beabca226e4"],["tags/CSharp/index.html","398d710f35ea97303a5f13dc3cc1f15e"],["tags/Castle/index.html","d0b42c337026b9b1e2d7be566376f656"],["tags/DBeaver/index.html","4f514428e3ef6f5e6216e40523dd91a6"],["tags/Dapper/index.html","afd3c813c09598600b0f6e54b53024b9"],["tags/Docker/index.html","9b876b124cea156f51a510b2254a2d47"],["tags/Dynamic-Proxy/index.html","452b3e7591ddf7cb19b686626b2fd4cf"],["tags/Dynamic-WebApi/index.html","96d4516921d43ab4a13c16f7a36a22e4"],["tags/EF/index.html","30c68a8a63a58dc0dd3cbe2e61b09073"],["tags/ELK/index.html","871859a352adc3e4ea21c9734e3667a1"],["tags/ES6/index.html","87c1f7531aa0c7c7b937f531476aac4f"],["tags/EasyAR/index.html","5c8c0d8929add43706809817d6da5dea"],["tags/Excel/index.html","9038986870ee78ba9b5082c1414e8b6d"],["tags/FP/index.html","a360fec0c2eb602a618ec8823bc50a99"],["tags/Form/index.html","3e806781d32ae978a9196e2f0951259e"],["tags/Git/index.html","84ba5365fea735f36ea50f6134b86715"],["tags/Github/index.html","563ed8a93010fa6a54756be3afc3ab05"],["tags/HTML5/index.html","5ae0042ea71f1e6215589286d941824e"],["tags/HTTP/index.html","e44726dc56fdeafb108adc4e523273bb"],["tags/Hangfire/index.html","1bc411961336586675548c287f57ec19"],["tags/Hexo/index.html","75bc8dc407c6af1f5b986f8c64d7c3a9"],["tags/HttpClient/index.html","6b3162174420fee5249b7b8a2837f416"],["tags/Hyperlog/index.html","c3e1ad8a7a14286ca9d0df7c9428ea04"],["tags/IDE/index.html","c1badb237bedf4e5febe544c423c78f1"],["tags/JS/index.html","c27924e204444430380053150d07f9e4"],["tags/JSON/index.html","64cf542d3ffb9ecf7ad73c70f6283d5a"],["tags/JSONP/index.html","d118877db224109a9d0471ee26f246ed"],["tags/Java/index.html","5a03f30f015c58f9d3de3cf0e82bf6a6"],["tags/JavaScript/index.html","bd03ca7c0b46f1d95a231ecdf3524f92"],["tags/Jexus/index.html","b5758561469482e65c9100dbc8e94402"],["tags/Kindle/index.html","55d4a62786de100a5d9b28bb64b2b3d3"],["tags/Lambda/index.html","41af15e32fc1f99c2a60023c62a03294"],["tags/Linq/index.html","2ea2baf16166ab5f87a7f5b1f7aeb651"],["tags/Linux/index.html","58ff6fbebe6faede4fdf4946cc2d5e29"],["tags/Liquid/index.html","6b7f30689cf3fb520c885c17a64c28f6"],["tags/Logger/index.html","a810efc641357dbcdc13d11ace553fe9"],["tags/Love2D/index.html","76b9072a9a138fe6a7e07f9e54731294"],["tags/Lua/index.html","80fae31a691a1b072d7ddd5ceb025a6d"],["tags/MMD/index.html","fb79002efdabe33c46051304a49478cb"],["tags/MSBuild/index.html","ebec2aa4a6ed4c8a54731cf1cb0666a3"],["tags/MVC/index.html","b964e9757220d41db368b21d9fae6848"],["tags/MVVM/index.html","4e89931d0e66986c2d7a5ac103a424e5"],["tags/MapReduce/index.html","e6bd420be3834904416e75c867f1fc61"],["tags/Markdown/index.html","127ad8c3aa9669a4bfd546ebf2252573"],["tags/Mecanim/index.html","113b47b3cd00a6ee0035378492c69629"],["tags/Mono/index.html","b9c3e5e9ba013864faf06c6a3ca8662a"],["tags/NET-Core/index.html","1a8b94329196eaa55d7897a0f299ee8c"],["tags/NET/index.html","bb5dbed0a1b13c51dfc1f41d110659fc"],["tags/Nginx/index.html","6c036e5c93c616cfcef4f436f290b534"],["tags/OBJ/index.html","b1ad8ed7c6c09b8fa800619e039539d2"],["tags/Oracle/index.html","428469830bd9a71b2bcfedc598fa5407"],["tags/PL-SQL/index.html","38a28047216ac1d150b2c551d6277bd7"],["tags/POCOController/index.html","cc0d6e41c56f022caf2fea5679dbd72f"],["tags/PWA/index.html","2070dd358b77245459f37fa517e7272e"],["tags/Python/index.html","249c622e18522240cb2c51823070ac6a"],["tags/RESTful/index.html","681db847e32ed06bfe8bbef8632c6125"],["tags/RFC/index.html","102af0bdfd5d04d3d7032f18229244d2"],["tags/RPG/index.html","c5e3a4f75ac3f56fa94af8613fe0caae"],["tags/RSETful/index.html","43d169d7783f8af114f0fb1a6b02af84"],["tags/React/index.html","847e90ea1e147a02a603a96aa8f2a27a"],["tags/Redis/index.html","b357de669ef2ded3840989d4913da599"],["tags/Referrer/index.html","d6e82d974b8c7f0dd2574f63b7bde2f4"],["tags/Retrofit/index.html","4830abe92747b4e3df8f93ac86bccaf8"],["tags/SDL/index.html","488b2e8f8c4d71e57d79854cef04e695"],["tags/SQLite/index.html","05d3ef9a9c420a9187391c30d499b9f1"],["tags/SSE/index.html","0b93e631d3d9cc346f9626257e2c0c80"],["tags/SVN/index.html","f1aa513e6c4d6ca49c52cb273d2b8bbc"],["tags/Script/index.html","f171b6a32edb63e2b9cf308f86e76974"],["tags/Server酱/index.html","1f45a9e4b9ba00efb6e9fd78970486c7"],["tags/Shader/index.html","d6213a48fa961009c70d3b8575df1329"],["tags/SignalR/index.html","4b4f05a6276ae2556ebb070632a5a739"],["tags/Socket/index.html","de50737f664aeb92e090acd7cf603658"],["tags/Sonar/index.html","fd101225a5b173964aab979508135160"],["tags/SourceTree/index.html","ccd5455bfe4dd8bf3defb8339c495b08"],["tags/Sublime/index.html","8d91b4eaae0c52a1b8aada37db30e444"],["tags/Swagger/index.html","9d150052e9821f4b7efa6e4d6f200e5e"],["tags/Trace/index.html","5dfd2f48861909dbf162dad8ccfa49b0"],["tags/Travis/index.html","d1fe861a34ecbdec3232b4e552f0cc97"],["tags/Unity/index.html","8390e606c278e5ed0453461608e05066"],["tags/Unity3D/index.html","389f24a5658b91a4d89bd4b35e350b9e"],["tags/Unity3D/pages/2/index.html","751ebbf41b7c628bd78497b54194d206"],["tags/Unity3D/pages/3/index.html","b3a3d000fc8cb56e5c5b3b318dd839a5"],["tags/VSCode/index.html","1ed07dad8334aa7a812e6e2411cadf00"],["tags/Valine/index.html","3176658800ebf0c863d4529be3736b9c"],["tags/Visual-Studio/index.html","09c00acc1e7b650406007391253600a4"],["tags/Vue/index.html","c3680b901ac1b230aafe5f1ba591d28f"],["tags/WSL/index.html","196ee9d173e5eb652838b271926a7fe6"],["tags/Web-API/index.html","3cf2af1b1d15431ac0ba65c654d57ed7"],["tags/Web/index.html","44b810f84bcf6d5c6c36041394e0cc12"],["tags/WebApi/index.html","8f5d0586f6341be72ff1d877c225c1d2"],["tags/WebSocket/index.html","135679a8de0ebe2b72a7ce8255eb53db"],["tags/Wechat/index.html","283def78c72b0bb1f458b48a811c2432"],["tags/Windows/index.html","f84f2e5958c30d262623981172da7095"],["tags/disunity/index.html","bfa1f7a136555febfde326916affbd34"],["tags/index.html","572d0f44c6ad7b2210a5ca50206949b2"],["tags/jsDelivr/index.html","2230745701adf2ef34c0c38164640bc9"],["tags/matplotlib/index.html","84245f39188139db5580172a1acf0396"],["tags/uGUI/index.html","e194bf2d0a779eb774ebd657365589c5"],["tags/zTree/index.html","4aa2c35f87d275ba50c06d5a80229a90"],["tags/一出好戏/index.html","a3a94967a6c7ccb658e68ff533886e56"],["tags/七牛/index.html","ddcfa0c9ae9b936428b6fa22c0e97ba2"],["tags/主从复制/index.html","f979f11eb7879445c0a023e41ccfdeb2"],["tags/事件/index.html","bc6d2f3550c547f2a65402ad4078f944"],["tags/二维码/index.html","ac37f2407319e9e0e5cc331275598053"],["tags/云音乐/index.html","decf1626da19f259ca0bba62b1e8bbd7"],["tags/互联网/index.html","d28772e5f6739408a5a3a2c8eb243e39"],["tags/亲情/index.html","6b0bb1dac9fd2092847608323157632d"],["tags/人文/index.html","546481eda7d980d7619634ec109ba77b"],["tags/人生/index.html","9fdfaa63e0d0e0efc3858d82ffc7ae18"],["tags/仙剑奇侠传/index.html","3506613ffb6d68b78a8ac0586fdbe63b"],["tags/价值/index.html","1d8a27dc483bec24e7dadcece4192529"],["tags/优化/index.html","85e48ad6d942c74fac9ee279ce393d9c"],["tags/全智贤/index.html","9da849e6a9bae4466e72715f1af77afb"],["tags/公众号/index.html","a060de2193ace4cad5fa0fbbb3c63362"],["tags/关卡系统/index.html","1f9706cfca0a61783d3c109f6ba66b8e"],["tags/函数式编程/index.html","b7034f3bf640b4e472ec78288e3084fc"],["tags/别离/index.html","3bfe8c0db217098cd98ed33252d78cf7"],["tags/前任/index.html","4e2d059d87f59452e0589455494144b2"],["tags/前端/index.html","af8abf1e84f901ad0be57da1ae78da95"],["tags/剑指Offer/index.html","fc7b44b4034da95bceb25903353d435e"],["tags/加密/index.html","32963110f0ddff8d54c5e00e636a20a5"],["tags/动态代理/index.html","0fbd3e58d4cb891608feaa73bfcd4c79"],["tags/动态加载/index.html","60bedb58e68f128fa40788dd7f5ae98e"],["tags/动画/index.html","de262b1daca4f6c8ecf1546ba3e691e2"],["tags/单位/index.html","0d00806ed07581b8efe1ddc64056f55f"],["tags/单机游戏/index.html","bac787c65257de104af6d24bb22e947e"],["tags/印度/index.html","9fc3ad8caf818fb152474ec5f5de29d1"],["tags/历史/index.html","34e4022700063d0ba6cb5aa9d0261db3"],["tags/反编译/index.html","64ca7231c901a1e1e22ecd5b0c9ab9a7"],["tags/同步/index.html","672fc4e1afca5379059cbc4c72b31332"],["tags/后端/index.html","8423d2cef85b2fbd580a85044b76e160"],["tags/命令/index.html","dfc95c122a24ce5c454c88f66d54d14d"],["tags/和平/index.html","4e3bfcebd6f554d57343b47c3468289c"],["tags/响应式/index.html","1c82f2f46b69798cbcd44308c89da231"],["tags/哲学/index.html","5d0fa1522b5828bead6aed16be77cc95"],["tags/回家/index.html","97f6c28f7a5228b4446fe8693d33380d"],["tags/回忆/index.html","ea2ab72ebb1f087c9c033ea7c9b63acd"],["tags/回顾/index.html","38d418d9536df7aad22a5d98ec6573f2"],["tags/回首/index.html","23ddaf22f9b5778c34f7468d90b221e2"],["tags/图床/index.html","9b7c10c55f66a0f2abee68cf81250c91"],["tags/图形/index.html","9229878e4df0c873fc45bb4d50382bb5"],["tags/地图/index.html","ef47d1f0e0d470996ad896a5da8e9f3f"],["tags/塔防/index.html","be090ca06c9dfbe94fb4698362ee21ab"],["tags/增强现实/index.html","208836a0c9210da85361f99d04ef00e0"],["tags/壁纸/index.html","da19c4e3c3f191b47a11f1c0b3b1e5c8"],["tags/夏目漱石/index.html","7f50c2d960b295459a5dd99ca31a2d46"],["tags/多线程/index.html","32a8501a5d1380d438cb5c5b64923962"],["tags/大护法/index.html","fae38e644962e3bde8ad1005b8721a87"],["tags/委托/index.html","1fc6fec2faeed1d4e7059b3c1aa314f1"],["tags/孤独/index.html","3576ed39df4c0877f4ef0685b4948314"],["tags/审计/index.html","6b907a0ee20562ca187077b241a8afd9"],["tags/展望/index.html","04cc94fd3b4c20a686e39a17d8647c47"],["tags/工作/index.html","c82c051bb1fcd9bf021f09a077ddcf19"],["tags/平凡/index.html","f9d276f2d204fb89d76dc0f7722c395a"],["tags/年华/index.html","de2ee93a115f037c1fcb760131851287"],["tags/年度/index.html","d67d6e9a469d8d915dbe8defe866b139"],["tags/开源/index.html","88b60c80ef8cc6e9dee2cbec929af8bb"],["tags/异常/index.html","1285eaaf2fd83ba9c0700395c6a288ec"],["tags/异步/index.html","d428c7c80b575d41f566dc61d3981aef"],["tags/引擎/index.html","7a47e97a46df91a1187e0d8ab3660a22"],["tags/影评/index.html","f21f70ca1d943084abcb2543fe7aad13"],["tags/微信/index.html","4aa193c738ee54b7ca5ba8febb3b00f0"],["tags/微博/index.html","8486b6a6cc473ccb3154558ce63c05b9"],["tags/心情/index.html","1c2d67c5127c6bb2bb02ad25095f38a2"],["tags/思维/index.html","ecd3f67d51601ef1687cca5d70d8b4da"],["tags/总结/index.html","31bd5c1d577292813b7cc5c4b0afa056"],["tags/想法/index.html","5230ad691c9acea6cf62aae82479781d"],["tags/感悟/index.html","e8d947b254a0b8a171b38ce4800cf259"],["tags/成长/index.html","2fa6d251398350014f58fa06d453b906"],["tags/我是猫/index.html","3990f8f748856c9e45c1cc978c8061cb"],["tags/扩展/index.html","282cabc78f0b07d2f82713f24980b250"],["tags/扩展方法/index.html","86990ede502a5a3a6da7c3990e1e1bf8"],["tags/技术/index.html","45157fc31b91c3c16b69c32573ba6153"],["tags/拖拽/index.html","21757ae728531c0ebe350df4bb6baebe"],["tags/插件/index.html","b6fe929ae39e84bd40e97e51091676cd"],["tags/插件化/index.html","74a7a208854a33d7a976e8f089e2222d"],["tags/数字/index.html","75a9f2143fd37efbedecda5011db762f"],["tags/数学/index.html","318374ad7f061f39f78469d3f4f04f79"],["tags/数据/index.html","bb6233273631207373c9307a68030cbb"],["tags/数据交换/index.html","3dc672526e8b0a38e4283b882558969e"],["tags/数据库/index.html","f38d24d8260e9da1010fd4f79fa706fd"],["tags/文本分类/index.html","d0f3a53ea02f03a197a0145f0847617c"],["tags/无问西东/index.html","4f5d69de934fa45c31e48c7ca3b7b5f8"],["tags/日剧/index.html","c8adf096e022459d82cd94e858116871"],["tags/日志/index.html","1de113c4d8f55951da51c24b21a172bc"],["tags/日本文学/index.html","e7cb624894eb5bcd2d3abbcaf51ab4b9"],["tags/时区/index.html","1a6e8e130297370e1c162ee40fa5f8a1"],["tags/时间/index.html","83b8ad054e059ef50736c8cea4cbd90a"],["tags/服务器/index.html","2761956fa4a0b5329b3380ffe132abe9"],["tags/朝圣/index.html","6a7e1c18f9cbc0df787e49ac40c71ce9"],["tags/朴素贝叶斯/index.html","a7033c2a6cb0abaea7259a1dc4ef0890"],["tags/架构/index.html","f631b4426a022eb0ff5249aef9a07473"],["tags/标注/index.html","f1237e79bcdb0da54b5facf8c57c4427"],["tags/校验/index.html","3510289ff3bb900ff52d50e084768282"],["tags/格式/index.html","83b9ff8fa0fc4a0d0395af6195d282c0"],["tags/格式化/index.html","e6b4c4926ef03fb2e66a3fbec941303c"],["tags/桌面/index.html","b482053700592182d3351d3c99135f0c"],["tags/梦想/index.html","a2eaf8e05108479fc42be83c8f5cec02"],["tags/概率/index.html","5ffc2d8376e65ef784b51e4cc49e49b9"],["tags/模板/index.html","2f70d02e94a4d8ccd91c8259cfe43260"],["tags/模板引擎/index.html","0728656ea4b508b1b076ddd7c82f2778"],["tags/毕业/index.html","41e37f8ce3cd52fa3274e3b870b0f363"],["tags/毕业季/index.html","81d3f1861c0c34c7e7f9005271d0c7dd"],["tags/消息/index.html","2b3ada2aabd7b6cb8c23c3e22116d61b"],["tags/游戏/index.html","61b848f15114eddfae81ab0523af0eb0"],["tags/游戏/pages/2/index.html","8dbdf0129b1a6352e708347ad101e3c8"],["tags/游戏开发/index.html","e5e2848eb856493e1a4032b03a3dc1b6"],["tags/游戏引擎/index.html","4c18691aec1aa0fef2ede2986f17f088"],["tags/爱情/index.html","13880680d4e94efc0d9f2197cc756f20"],["tags/版本控制/index.html","3c57825a839e66a4153be72cd4e7cdd7"],["tags/版权/index.html","5b15c5ba72381f7aad8f4ee56ee946d4"],["tags/特性/index.html","0fc4a8b4902b1a73aec7937258eb6361"],["tags/状态/index.html","fabab23dd4dd91c9f9d35a6b7e55dd58"],["tags/现实/index.html","db8ad689be615153c1569b6faca34442"],["tags/生活/index.html","bdd4d492cec216db7ba1f234f5a9eb6c"],["tags/电影/index.html","a3615d3ea06cddb7b8bb8fe52231f8ee"],["tags/画家/index.html","5979d4397569b8d69d412144b6e2bd1d"],["tags/知识共享/index.html","030491da9e354f96614dd7906b737bfe"],["tags/矫情/index.html","9a7f6331183aa2b11d2124d7949cb4f1"],["tags/程序员/index.html","bb95dccae9bba6db1aff216cd423e5f1"],["tags/穹之扉/index.html","9bfd6f26e70545e96179306b2755d457"],["tags/穿搭/index.html","413bca91071d8fea354efddbdcba1a13"],["tags/童话/index.html","784ddf1dde2eed43d015bd70d4f51ee2"],["tags/笔记/index.html","47be820f161a280d164ec9c0753003c8"],["tags/算法/index.html","7156bc74532a35857dd89155779fc52c"],["tags/米花之味/index.html","7df8a2442457a91a5c3acefd1a0eccc2"],["tags/缓存/index.html","e6d5593e943a4f9402704495e3077d33"],["tags/编程/index.html","43900c8ae153326654842fa9d3390550"],["tags/编译/index.html","23a74011406aaa1783d3dacdeb354765"],["tags/编辑器/index.html","de083698c89ca80fe8ad47a5a69f21a7"],["tags/网易/index.html","cf8b795be24a09f261ac7acdbafb203b"],["tags/脚本/index.html","dccaa41c6b091c9b64d1d5d15d50cf4b"],["tags/脚本语言/index.html","a420aa354885383bdd8f1d1360f39220"],["tags/虚拟摇杆/index.html","18a95231fb3240e4d0506ec490b47a51"],["tags/蛋炒饭/index.html","cccca06b3f80d098db5f2517ee347f05"],["tags/表单/index.html","f53cee0f41f41dc734a392aa4c090655"],["tags/表达式树/index.html","34ae07084900d1562fad499c872414d7"],["tags/装饰器/index.html","e251902d8493d759e1fe7bcec7174aa1"],["tags/西安/index.html","0e41d6e2d50e97c69d0152a54e4a1186"],["tags/计算机图形/index.html","d45c79686935d359ce6b710f7f75c419"],["tags/设计/index.html","b6a1d2e3a794e88a49963193859d3f85"],["tags/设计模式/index.html","1468375ee162e91baad32b493d5afd13"],["tags/访问量/index.html","d6e485f309e7548adfa3e8290d4d611f"],["tags/评论/index.html","18274ae01ff17fa2b239fd10cb105b3f"],["tags/词云/index.html","81ed297087b29aac04ceb0aedc5b4952"],["tags/诗人/index.html","4ce80c4c182ac750d8993a361071fb4f"],["tags/语法/index.html","8ec9cbd33730d5f985142156247a84a6"],["tags/请记住我/index.html","c776b9c46fc381a6dd2cc04bba5837ab"],["tags/读书/index.html","5faa97662b58c3adde4a40f9a14f6f72"],["tags/读写分离/index.html","7fcc24fdfc80f191e3cc63eeac2bc5b7"],["tags/调试/index.html","01feba2ba454a1c9c1154d027d47869b"],["tags/贝塞尔曲线/index.html","2edf42fec4b82665d9adb2d2952de931"],["tags/贪吃蛇/index.html","a6051b601c33583672d45a31452584ac"],["tags/资源提取/index.html","998ae1606663c2a7ccede289c6463305"],["tags/跨域/index.html","119b14769dd38c6464f1eeb84c02c062"],["tags/跨平台/index.html","ae0c19add1720d3199febcdfc39a7e83"],["tags/转盘/index.html","31a37781957a2b4f8788ac1cb695f6e4"],["tags/迁移/index.html","e8a9b26162337a0caa5f9d6f9441aeee"],["tags/通信/index.html","74cca5fd873921987f7bb44427958ca7"],["tags/邪不压正/index.html","1658ecf40d1e05aee6c99a8b29273fb8"],["tags/部署/index.html","b2f22b51c4da391264545af9ff874e1e"],["tags/配载/index.html","e2005a74ed2a3e8ce66391e3517d05d8"],["tags/重试/index.html","42405973c997e317414bfc8f3420c848"],["tags/长安/index.html","0a5ad810e04222c1aa435e71cd22b096"],["tags/长安十二时辰/index.html","c26522d10749eb8c8729d924cffa127e"],["tags/阅读/index.html","9c4c6dc61ead00c0bf6c3c3a585d4488"],["tags/阿里/index.html","d299ef75056839e3c7be0891ea420fa8"],["tags/随笔/index.html","37377716ac005f751a80e99d432d04e7"],["tags/霍金/index.html","2d1153a7c5c4e08cb575cef23b4a9e6d"],["tags/青春/index.html","57300618bbab633d2ced72c5b9795892"],["tags/面试/index.html","9b72b265e568677e85f955ce81d822c5"],["tags/韩寒/index.html","716023335723a649c64b95eeebe9411f"],["tags/马尔克斯/index.html","39c8202690624505bf6d9258471cc115"],["tags/验证/index.html","577ea932b73e7245a64250b98f8b1c64"],["tags/黑客/index.html","9328ef483faecd94f3b76c24f35219a0"],["wiki/index.html","8239290d59b871434b1cb081f7a09328"],["works/index.html","43b3665244fdb63266a6fabd81d1a613"]];
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







