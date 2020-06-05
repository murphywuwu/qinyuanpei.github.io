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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","91bc7a6aabf0f580c60885b60cac337d"],["archives/2014/12/index.html","b9cda2b7a7f55f128a6684f5ffde58a9"],["archives/2014/index.html","35c245331948f02197322aa341f174d7"],["archives/2015/01/index.html","80fc2933d6463a16f2490a2dec047079"],["archives/2015/02/index.html","e3251277f38ccbb77f67fc2d6ad92d59"],["archives/2015/03/index.html","2cb8697c63d492a8693fc095923e0266"],["archives/2015/04/index.html","cd45cd80489280dc2dd295868a7b1327"],["archives/2015/05/index.html","64f8b4d1b9d24e90a6b1b4b7bdb46d4c"],["archives/2015/06/index.html","dc5ccc9f790cc6330dbe3a8572e6d4ca"],["archives/2015/07/index.html","3ec06e69272e88d423dbed7d5591e111"],["archives/2015/08/index.html","cc86e0e8dade7f2ff92ac48760ecb3ac"],["archives/2015/09/index.html","c016e39814fd22d712b1dbbcadbb8b5f"],["archives/2015/10/index.html","40f3484180899077d80fef9d924d704b"],["archives/2015/11/index.html","bc795a31bfcbeace9a4879063320193d"],["archives/2015/12/index.html","9451cf04a603fb2ac24697446dbb7717"],["archives/2015/index.html","7fcbec1782ceebf19e6355f2dadf7a1c"],["archives/2015/pages/2/index.html","5ded22800bbf498a4936b76756bcdeae"],["archives/2015/pages/3/index.html","ecd3520ff787cc14de612fff681b6c2f"],["archives/2015/pages/4/index.html","5cb47aca61be0179bf20146e2cdf7eb0"],["archives/2015/pages/5/index.html","919e417b4e715e1d1675552a50dac6e6"],["archives/2015/pages/6/index.html","bd6586a584dfc0fa52c37883db200c97"],["archives/2016/01/index.html","08e9ccfd26af898e492e9c29960129a8"],["archives/2016/03/index.html","5ffb5b7d96844819676441e23d7f6015"],["archives/2016/05/index.html","3dfceb48ebf3c30ea4787c3097666e13"],["archives/2016/06/index.html","191330fc4db74542ca740d1c60beb684"],["archives/2016/07/index.html","7a8c25ad6b3482fbfd7c52c081bd4646"],["archives/2016/09/index.html","849bfd5a45f3227f3f739496701fbf11"],["archives/2016/10/index.html","9796c2d48110a21da8fef0850cc6be1f"],["archives/2016/11/index.html","b5154b52feaec1c9f0b3564c122b0ee8"],["archives/2016/index.html","c5fa6ee5ab13c139457da4c9fec7ef30"],["archives/2016/pages/2/index.html","90774d794986844eb76f75586d09e7aa"],["archives/2016/pages/3/index.html","dc5a350b4a363e67116872bd28dddc85"],["archives/2017/02/index.html","1c259839b5ed2d4a862d1bc88da23cfc"],["archives/2017/03/index.html","4131c9551ea30195e10104855aee7ca4"],["archives/2017/04/index.html","818721978ed9c7f6b6f6ba4087ddd998"],["archives/2017/05/index.html","3aae39e705502ece8c0f5c433ca608e4"],["archives/2017/07/index.html","cafdd50a0506378edf514c35c162e0dd"],["archives/2017/08/index.html","9e9911acb76ac34b6fc87b71743afae1"],["archives/2017/09/index.html","66993b4fed5362173dd715f927c57aa9"],["archives/2017/10/index.html","5a37c386c590b9e722b508cc2a169ab7"],["archives/2017/11/index.html","f5db4973d767a3e19c23e33a44aeed9d"],["archives/2017/12/index.html","da053f283b07e8cefe9314f62d33366d"],["archives/2017/index.html","ea6a8b6989d1a3316d940503b604a98a"],["archives/2017/pages/2/index.html","4ef85d6b22b1da88c8658ee63814113f"],["archives/2018/01/index.html","2776bbc82c1786623a36403de0331cad"],["archives/2018/02/index.html","73ce8094a338256ce4e11def8b8d1b4d"],["archives/2018/03/index.html","90f4c68753fa64930f342bbe2c2cd572"],["archives/2018/04/index.html","6f8d4e72784dc6d018226eb705721677"],["archives/2018/05/index.html","7c498325bc53229d01550a5b1d5d6994"],["archives/2018/06/index.html","61489b592e9f9054443bf06e2e135248"],["archives/2018/07/index.html","5599da9938ea16b37fe44a4499539141"],["archives/2018/08/index.html","d9c14846ba36ee64cdc1fb0c918bfccd"],["archives/2018/09/index.html","7a8c71c07d5374c9d9e878ebe05e68aa"],["archives/2018/10/index.html","32d943c32a34cad028ebd9f6b72d5675"],["archives/2018/index.html","02b8f364f4ee2c64c87424e6286b06e4"],["archives/2018/pages/2/index.html","ddc0e77d45284d805933b6dce67e6671"],["archives/2018/pages/3/index.html","36df6dd5e9be4177437301fc877f5b92"],["archives/2018/pages/4/index.html","a48397cf31308363e26e92d28edcf895"],["archives/2019/01/index.html","44ba3b7e47808ce1ae4d05ca29fe846c"],["archives/2019/02/index.html","d6b17854204b08fc16c5aea8c5cb3b71"],["archives/2019/03/index.html","b7703e70a9c5ec4049a35e9ec5aba1ba"],["archives/2019/04/index.html","f4f21b5d67f8f190d80c58068c976374"],["archives/2019/05/index.html","a43d64a3e056a41d482e1490827fb837"],["archives/2019/06/index.html","3ab455d64b98983a9b8770d13bf15782"],["archives/2019/07/index.html","418e0efc2b5acebb3b1f00142cfe4518"],["archives/2019/08/index.html","66bbd77f792988ad152e7ed62fbf17f7"],["archives/2019/09/index.html","3b4454ba8e8cd534b5c1cf0a67d487ba"],["archives/2019/10/index.html","9dd0c80f03f28d6ee8e52f28c69d7266"],["archives/2019/11/index.html","0b15e3a51d3b1a138249b752ad05ebe8"],["archives/2019/12/index.html","114ae2713b200e4088ab0d24bf92229b"],["archives/2019/index.html","69f04bb5e2f2efe5f7162f517cdc0395"],["archives/2019/pages/2/index.html","4fcc944f83e696be853e8fcf366c6830"],["archives/2019/pages/3/index.html","3c9da04d335f9a81d5fba31b4a95d9a4"],["archives/2020/01/index.html","faa3f05f5753486b0d71ae4729ff7ab6"],["archives/2020/02/index.html","a45a09796ad83147aaa78010b011f8bb"],["archives/2020/04/index.html","9c6e65035c2f692f676132bf772ff8b4"],["archives/2020/05/index.html","906f638907cdae11fa69c353c9134fb0"],["archives/2020/index.html","2e6221fc1464e5bb20467891e38d44b9"],["archives/index.html","cf76c62c62c88dbae040d618c35110d0"],["archives/pages/10/index.html","9807c8476dc2f05a3c59b86a4e7b6abc"],["archives/pages/11/index.html","abffa0084e03c7709970b2ecb8182ed8"],["archives/pages/12/index.html","ea62769d5a5b53a18ea3c7ee4f18e271"],["archives/pages/13/index.html","2ae3a5237b84511b006916830380176d"],["archives/pages/14/index.html","6a2b719a9d6afc75d8f19bdc33212440"],["archives/pages/15/index.html","b11321fea83c9a99cd9517b0ae744ba3"],["archives/pages/16/index.html","ec967126b4b41ce9786cbf7efaa983a1"],["archives/pages/17/index.html","088e0da8c502e0306702528514c1893c"],["archives/pages/2/index.html","4798cd9e3f08447f46071d0d28b5066c"],["archives/pages/3/index.html","ee318f461068a53f6a254b66e391422e"],["archives/pages/4/index.html","c1fc6d7632e1dff2e4fbede20e9b61eb"],["archives/pages/5/index.html","0656f12d007c6d59a1e177eeb93ad03d"],["archives/pages/6/index.html","975c3aec72f3cc6b5ff903e94070eab1"],["archives/pages/7/index.html","29891379811bb46f435ab2a899b0f85c"],["archives/pages/8/index.html","6a10be3f93b1230ccd86981f62553bbf"],["archives/pages/9/index.html","1d28c5070f0ba0ebc5965ed217d63b1a"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","4e5a783544c1a59d4ea3390f2b772a2d"],["categories/Unity3D/index.html","86adb67f22954b13657f2d3cb035c6d9"],["categories/Unity3D/pages/2/index.html","2b305f8a937a3d32dbdfa171eddac2c8"],["categories/index.html","80a7d60b03b210b853b05d279180c105"],["categories/人工智能/index.html","ef1b6e3732287740e1e606bb5f5a0d12"],["categories/前端开发/index.html","dff09197569d4ec24826e8974415b188"],["categories/单机游戏/index.html","7d43d4b9ed85ef175f8b2280dcdc2d21"],["categories/开发工具/index.html","c17d05fb14a8c8203bc8292828c55ce9"],["categories/数据分析/index.html","5de736a4f61affb029cd15b1e433a141"],["categories/数据存储/index.html","6585ea2dd2fd8b71fd9b888966fabcde"],["categories/游戏开发/index.html","7ed164fbcf870bc0d0f764e8c8e48ab6"],["categories/游戏开发/pages/2/index.html","1eb3905020f526a37e7a965e5c084323"],["categories/游戏引擎/index.html","7b54ea738e997ef59ad1a9905aca15f8"],["categories/独立博客/index.html","7a42881b72b4c81b0312b0cbb39abdfa"],["categories/生活感悟/index.html","c090ad014c2745ec2af409c7e804ba92"],["categories/生活感悟/pages/2/index.html","3f428713e95630c8f5ee437728628c2c"],["categories/生活感悟/pages/3/index.html","cbf5337fca44183030586e6b973250dc"],["categories/编程语言/index.html","783edfa43c97cbae7589ef63bd63a6c7"],["categories/编程语言/pages/2/index.html","cd0fcdb041c8c2c34454892531d28e06"],["categories/编程语言/pages/3/index.html","e2a31968ee84e68fefd98eded4dfd884"],["categories/编程语言/pages/4/index.html","b00969a6595a06003460bd79a0d6a529"],["categories/编程语言/pages/5/index.html","26e343386c29bc76ce6c04ba32bcc72e"],["categories/读书笔记/index.html","bb6d4c124d45c15c28280f638bb05a8b"],["categories/读书笔记/pages/2/index.html","73e3db10aabfb2b514ffaf39baecf2eb"],["friends/index.html","6e846313435f4f27c00dfd48fb820dab"],["index.html","214d949a414e7a2138989eb77f703fbf"],["movies/index.html","ae7e7440d84620f025f27799846a4ad3"],["musics/index.html","82a0236cd741ffe0a9e7893bb7598fe8"],["pages/10/index.html","33bf840015c4d37e2abbd08abf5de826"],["pages/11/index.html","bd7753dd9a8cc3465e897c852808c6f7"],["pages/12/index.html","73f68d791214fb63a58fe4ad65b9265c"],["pages/13/index.html","418ee33505d69e77a34ede29e4adad72"],["pages/14/index.html","0b42df681d101399e6638f032a9262c8"],["pages/15/index.html","faf6cf2bb68887748f62a58abc07c01b"],["pages/16/index.html","2153b9fc5e86221a01c53de6cb79bc17"],["pages/17/index.html","5c87d8f96ecae50908bc8427e72c7945"],["pages/2/index.html","2acda7d8fe7a06652db2e5b543845cc0"],["pages/3/index.html","50f88d6955834cff86035d2fb7ff6941"],["pages/4/index.html","ac55f18870a573b33da4fdc22b93c83e"],["pages/5/index.html","1faf5e064635cad0395829b3b009f591"],["pages/6/index.html","b55e9dd407af1379996303d6662c734c"],["pages/7/index.html","b27d99a8fb073971cbd710e008b93d71"],["pages/8/index.html","19b640ec6341f8247d0468b36395cdb3"],["pages/9/index.html","f62be100756b64d7dbff91872b099b86"],["posts/1059499448/index.html","c4db2306addec05d45e3002f67beb40e"],["posts/1071063696/index.html","227ae8e6a087b18f93f4c838478ece7d"],["posts/1082185388/index.html","f1dae1ce471f8e3041010a07de72f72f"],["posts/1099762326/index.html","2d6048db279ecb45cc707b515324440e"],["posts/1113828794/index.html","0b0c528ee893be253fe8b4694856d56d"],["posts/1118169753/index.html","bc04616722308b92a101c33561c3f529"],["posts/1122710277/index.html","64e1326c1283aa006ac12879e058cb28"],["posts/1124152964/index.html","e0d41e5ff879fea89b8ed63bbc234cad"],["posts/1127467740/index.html","8ce6edccf1a67faa4495c27e830a8f13"],["posts/1150071886/index.html","c1729d0fda193f55785dfa6ce10afe79"],["posts/1150143610/index.html","53a030757d3160b80a55d31b75bb0484"],["posts/1152813120/index.html","c0311df5f08670f2fab8c85efbaa6180"],["posts/115524443/index.html","3eda68bfa902ba5c8c2346bd77789395"],["posts/1156673678/index.html","2a2804fd052218b9edfefca9acf8c367"],["posts/1166840790/index.html","4afd1ebf67f0274f9db4a3b4c75be861"],["posts/116795088/index.html","4226fcbec63e267a66575922dc526e2b"],["posts/1176959868/index.html","b27f8b1327406495d62ad8356e065320"],["posts/118272597/index.html","6ccf0047cb70945baa4032b99ed7224f"],["posts/1190622881/index.html","ef882e265a5cd11971259cd757c06b06"],["posts/123663202/index.html","ec032dde2a0e4c2be15330372bcdff6c"],["posts/124807650/index.html","81dd37d325c720b0215b029aaaa7ed9f"],["posts/1254783039/index.html","4b82b6dff2f8c3181b3a9ef754959f53"],["posts/1289244227/index.html","30211f5f438d4ef2e453e5ed40171463"],["posts/1320325685/index.html","44268bec05f2f77213ff10da5589d86b"],["posts/1329254441/index.html","a43f24b5f270224f3d84cdd3b9df749b"],["posts/1357715684/index.html","a05e69f7b16bc3dc9d8fc74435947720"],["posts/1358971951/index.html","50056bb248cb68ca2f7512c8df4864d7"],["posts/1386017461/index.html","e2ce8a0687faba9c22dfd151516c1449"],["posts/1394521917/index.html","455cc6dc1925ea3f33d004d24c61be74"],["posts/1397717193/index.html","3d24004980e7be1f77e2071a64f99439"],["posts/1417719502/index.html","503d643eb2610bd7b6416a179d905355"],["posts/1424645834/index.html","120dcd035d360f3b1eeb988090ddf9b3"],["posts/1444577573/index.html","0480eace3cdc9b6a2a1f2e24c0e8a6bd"],["posts/1467630055/index.html","e718f8fbf323193ebfe439441a82d92c"],["posts/1478979553/index.html","2c9a944f47857871d6dab2eb1dd5f906"],["posts/1540537013/index.html","e591ab78f83da2a7b2b19de9f517b85d"],["posts/166983157/index.html","681f27bb7fa58c7d98b972edbeea9ba8"],["posts/1670305415/index.html","6d7457ecaad0396fda4748b79a77d2e0"],["posts/1684318907/index.html","cd2bc5faa5eafc9a8aa712681c50e975"],["posts/169430744/index.html","5970bc30c59b703113b3fd4ca883f44e"],["posts/1700650235/index.html","f8350350cbbb2e53caaac82342938bd0"],["posts/172426938/index.html","d68821f16f42e99d0fd9a79fbf9cd70f"],["posts/1836680899/index.html","c45057184a6eaa9fbce26602e066a35b"],["posts/183718218/index.html","bf93c5ac9c2c6b5510a4d518d4a4faa3"],["posts/187480982/index.html","a7e322493661655b3dea6618d3248edb"],["posts/1930050594/index.html","e49f07c1e32bd4dfdaee5b33ee7fd96f"],["posts/1933583281/index.html","c501f6c3a4d409154d082bb4e536f4c9"],["posts/1940333895/index.html","42dbb58c3209701cd8ef3ac883ed7da8"],["posts/1960676615/index.html","f98b44be23c2e1532e73e8febc2e0de4"],["posts/1983298072/index.html","ee29d07c864fffc612617b526a75519c"],["posts/1989654282/index.html","51a67153ef9639e38e262e818e94bf07"],["posts/2015300310/index.html","6c996301b1fcae90964a67f86a329216"],["posts/2038378679/index.html","c07cd07fb1e95f901a71a30bfba95d56"],["posts/2041685704/index.html","1943fdc1cf38b940de21a44453254fad"],["posts/21112647/index.html","92394417828ee33b1fb67570afcc4abf"],["posts/2158696176/index.html","e335febba0a08944d17cfcc227700e13"],["posts/2171683728/index.html","c1175dbf41d1bb19ec53d7187166b0a1"],["posts/2186770732/index.html","c5a22780f8044347c6975afc6d037587"],["posts/2275646954/index.html","8e2a4dcdf10340b9e57c8b40f52e1f19"],["posts/2314414875/index.html","2b3fc41de72729c2055abce9abccdd42"],["posts/2318173297/index.html","2d67cceab0e217848266ef6318a0d8b1"],["posts/2418566449/index.html","681dd1f93b48b2b87b61b59528d68625"],["posts/2436573863/index.html","29b255e21786ac41cbdf32a0f3ec2dfe"],["posts/2462008667/index.html","1b37ad26e6d1d375f67c1b068e22d5b3"],["posts/2463121881/index.html","c4a4dd2b0ccfe34d4775e53ab59df3dd"],["posts/2488769283/index.html","954a0ad1dd39ef1ddf68dd0cc72ac1f2"],["posts/2527231326/index.html","53122efc985b1e0730ce78ef60e381f8"],["posts/2583252123/index.html","2eab119c2409cf1a4f73a531537500eb"],["posts/2613006280/index.html","ab54ddd0222876953dd3811faf0f32c5"],["posts/2617501472/index.html","2ca2f2bfada1d4706c48da41cf3c324d"],["posts/2676125676/index.html","5d2810920ab12124b22116761f3e5bb8"],["posts/2734896333/index.html","771b36a9620904031e7220cd70139b1d"],["posts/2752169106/index.html","189515df3751efdca0145ecd5102109c"],["posts/2799263488/index.html","12d71474ca118da70b9023713d78796d"],["posts/2805694118/index.html","fe6e0d566fcce602d0375f6f4730320e"],["posts/2809571715/index.html","a4cc4cd5c3bb068a965d5d188bbbb874"],["posts/2822230423/index.html","7176126555eaa42dd289134e9fffd56e"],["posts/2829333122/index.html","c88f900c70782f7658ff05b57a4653e2"],["posts/2911923212/index.html","00446a1362f371ce6094c78f16ace29f"],["posts/2941880815/index.html","f532f98bb73e5b5580ce0fa927a5fd7d"],["posts/2950334112/index.html","0caa04c58cf7a024b2ed5b6023dee475"],["posts/2954591764/index.html","1cc6cf551e36b06bbc543ee2ae92384f"],["posts/3019914405/index.html","c9802dbbe01c206a05f52cbd3ebc1541"],["posts/3032366281/index.html","43b70ae78269cfb05751aba0d7b93d2b"],["posts/3040357134/index.html","6274181b58c6378ca0651ac4e17d3cc5"],["posts/305484621/index.html","9e7d19b695691ce69a7f1c0db8e97301"],["posts/3083474169/index.html","f84bc08a172b5e908d64303b60622d06"],["posts/3099575458/index.html","c5e0f8322019e8530d5163d58a605bac"],["posts/3111375079/index.html","e1b74d0347973e5ee019b0726a674b1e"],["posts/3120185261/index.html","11b5038fe575248f6c392f7c602d7f41"],["posts/3131944018/index.html","8644036cd8fa0b68b895ddcba9f0d198"],["posts/316230277/index.html","51909b55185ea264ce453ae64d117209"],["posts/3175881014/index.html","a5df7e709102622f737835c31fd0ea0c"],["posts/3222622531/index.html","7cce875ab27815bbedeaa670cb8c393d"],["posts/3247186509/index.html","98c3eb4c5483413404ece8143d42205b"],["posts/3269605707/index.html","ef48ff92ceb816af4b7f472c1da68da9"],["posts/3291578070/index.html","3a8cb6a8443a44a58f4175fbf58ef9d5"],["posts/331752533/index.html","ccdfc8743d60de0831a29c23a7bc42ba"],["posts/3321992673/index.html","f92a26c0a3689866236d1a25b7ea3fca"],["posts/335366821/index.html","4cad949fe44e518ee6d0f86e3f04a44b"],["posts/3356910090/index.html","342695f0975701189f6195d50aa28161"],["posts/337943766/index.html","d72454cf16abc9813d1b372fb615d996"],["posts/3417652955/index.html","15bf916a94c1604793efb0acce133860"],["posts/3444626340/index.html","9682f050fcfd551a412b8d3b7a80cbbd"],["posts/3449402269/index.html","b78d8e55d24b3249bab60a2161a244c2"],["posts/345410188/index.html","e86c9062f109e206e85e98964a225ca4"],["posts/3461518355/index.html","f8f9bc99a1de43c219ca834aaf0be3af"],["posts/3494408209/index.html","524304206d9bd083d9f415fa25f5dfaf"],["posts/352037321/index.html","9e12a474766242f0151d0b9fb3fdf09c"],["posts/3521618732/index.html","6cec0a32d08ebe7bb8636f4c257b5172"],["posts/3568552646/index.html","aeeb2641dac1bfd84d2ad36f9e447c6d"],["posts/3603924376/index.html","d17a6c7a41baddc204ee5b51398e949b"],["posts/3637847962/index.html","89896a40c8a1d60d6f7763d6cd2d8ace"],["posts/3642630198/index.html","28acc7f074cb67e6d02d40312b948630"],["posts/3653662258/index.html","ab268671a9f7191f42fd4e708f2c46cf"],["posts/3653716295/index.html","46e13847e9eb8c53d885d0e9a94c1985"],["posts/3657008967/index.html","f37a13e6a65f83742b25b4e0ceca0b01"],["posts/3668933172/index.html","6e48f5c06fb129721d42bc11e3959a88"],["posts/3677280829/index.html","6f8bbb6c551e51cbb6e1a63e33ebbd7c"],["posts/3687594958/index.html","6840d5db9c88ee444ff2948309da7de6"],["posts/369095810/index.html","3b27a5a8c0df9f2185804cbd649fc803"],["posts/3695777215/index.html","e70b953661cf783db92d968dffd5e5b2"],["posts/3736599391/index.html","c6a370f59e949a909c495a6705e816a6"],["posts/3742212493/index.html","5d7f7e13f849be55a303d8e0218b677f"],["posts/3782208845/index.html","1536b59166436e8ab09f0b70939bda4e"],["posts/3789971938/index.html","1833820455c4d718bca136115c83a7b7"],["posts/380519286/index.html","f2c0f06d033943a54798f64163bd04e0"],["posts/3846545990/index.html","5b59cb5fecb22c9f9b0a34b7b52f0803"],["posts/3873710624/index.html","120fc72558d42d900d8e999ff0ccda89"],["posts/3959327595/index.html","5ec5377a3072b90425cdbccb9c9b7f8b"],["posts/3972610476/index.html","d090d85c9ba351efc5496adf96a2368c"],["posts/3995512051/index.html","05f8a44412562fcf6677b6bbd162b8f3"],["posts/4088452183/index.html","2625140b804293ea20152bf01ce88c51"],["posts/4116164325/index.html","e1801b646752f94f8185e3e91fa8f4f4"],["posts/4158690468/index.html","299c26599811418d0e9153088f11b172"],["posts/4159187524/index.html","5f5cd233a9d2d21f352889b77fa3482d"],["posts/4197961431/index.html","5032b5de132514c33abf0e6df80070c8"],["posts/4205536912/index.html","e8cdcde395232dfa19d9af2b43383e97"],["posts/4236649/index.html","9c7400b61d5403f5759f5331cefd246b"],["posts/426338252/index.html","743229b10bc010af27864ebae8464058"],["posts/450254281/index.html","98290159e0f2900c04386649082b635c"],["posts/4891372/index.html","8a018e6f86a2f5f3eea93f06014d2837"],["posts/569337285/index.html","30f40bfea79715c733a906b0a62a273b"],["posts/570137885/index.html","141d78193212ffb492ec03663179ee92"],["posts/570888918/index.html","d54605e1b7985188022ac53094fa4e77"],["posts/582264328/index.html","29ef28111f89d419ed30a211dc2bed5f"],["posts/632291273/index.html","b4e963d5af8cf850f84d355096575b02"],["posts/70687890/index.html","ab9aa550978b073d7ce0270061205d2a"],["posts/719322223/index.html","bf43d9c1b83b9d69bca49ab1c55c64fb"],["posts/720539850/index.html","4df55910f2fc1a001fd3cd161c3229f5"],["posts/786195243/index.html","01a472605b450f5100b905c88f72d90d"],["posts/795474045/index.html","5f5eef76c349d1f83b319f7f2caa2b8a"],["posts/815861661/index.html","a79038bbda6c7c9e603afd0364a3a426"],["posts/821259985/index.html","378ae996d12e9feb535118fd3d336ef3"],["posts/828223375/index.html","1002e553fcddaee6e2c814ab3cb0e08a"],["posts/887585917/index.html","274cfa492d50400498a3c910b9375f7f"],["posts/888549816/index.html","295025ec0190e6d71e433b4808c9715c"],["posts/906436376/index.html","27f91d1256418a5f1dcdbc150e6d3ef5"],["posts/907824546/index.html","aff328885b0dff9cd4d2e8fbc62d6f66"],["posts/927393529/index.html","1cfd118fe9324655891cf5a3ae1175aa"],["posts/94443781/index.html","9ef35fda3868a0b5e8e9c0791e0e4c7e"],["tags/2014/index.html","fcf72aa7a939da039ce1d39c8b50fbd9"],["tags/2019/index.html","548b27069e4cf073fca319578a7e0e53"],["tags/AI/index.html","45fcf0a7aa0c474a2c6e838c9f358ace"],["tags/AOP/index.html","eb8dfde4e6f755f256b5dc6463118ec3"],["tags/AR/index.html","b8c602069908602c878bfc86a3f6ea82"],["tags/AssetBundle/index.html","2837ac18de85f11fac39f4e51d4d0e18"],["tags/C/index.html","cbb18da999bc9967505e43ab7f417228"],["tags/CDN/index.html","3d2e520e2f07ef9c35fd4fe98c41196e"],["tags/CG/index.html","d0f44c400292d6befce0796ff6069a73"],["tags/CI/index.html","41f74f85169bc015c6725369c176bfe2"],["tags/CORS/index.html","b74fb47b6fcbaf8083645498cdf1c7e6"],["tags/CSharp/index.html","6dffd51d01d4f8b3d654a133c369950c"],["tags/Castle/index.html","3af5fb8a09895ac2cfee8bf6c7974ab1"],["tags/DBeaver/index.html","6577b8e449d53deec6c031096806d66f"],["tags/Dapper/index.html","499e444867eff1edbcafd44fe93dcbb9"],["tags/Docker/index.html","9a9c7f24c27caf3a1197ca4bd051baee"],["tags/Dynamic-Proxy/index.html","ebe6fb362f303445c7e0e88917b1eef8"],["tags/Dynamic-WebApi/index.html","bfd17abaec7ab3f317ebcfcf8cbcf9ea"],["tags/EF/index.html","52e87818c60a8ce8a4b3fb0ca2f30e54"],["tags/ELK/index.html","0eb8ed91db49fca30834bfb0084e72c4"],["tags/ES6/index.html","ef9032d51dffb441e870d861338c79de"],["tags/EasyAR/index.html","c6fd98e6c834782a9c64ff2df4c10d39"],["tags/Excel/index.html","5b1d88b56b95dcf337cabc966e67a551"],["tags/FP/index.html","59f43d9db7ec0fb3660621e774da3fe1"],["tags/Form/index.html","afe8aa1f0db73366af5746f016ffe2a6"],["tags/Git/index.html","e361141ee0f1756e419dc15ca1fa1281"],["tags/Github/index.html","e979e15a2af402b542d636ab6061c51e"],["tags/HTML5/index.html","166e54722ff2f30278919fb69e954ad4"],["tags/HTTP/index.html","18696c392869169c71f2f7c3bd55114a"],["tags/Hangfire/index.html","ab3041c24318f8c3c5c8bc8f99542f4d"],["tags/Hexo/index.html","5f4623f3466beec9ab1e163af7d02ea4"],["tags/HttpClient/index.html","d0ecc4d77b46ca6ec3103eda654a2ec2"],["tags/Hyperlog/index.html","2e4a95946ebf844b33141c4fafe5f0d3"],["tags/IDE/index.html","e3d065b98cf4faadcebee7407f9c2b65"],["tags/JS/index.html","d29f7d03e255bee3e3e4f5def3154b0e"],["tags/JSON/index.html","9b561180999efba042e82fdfd7e3a007"],["tags/JSONP/index.html","1adc0259e8b45544a603429237ea4b52"],["tags/Java/index.html","689685741ce3692d91b41a2362cd7082"],["tags/JavaScript/index.html","21349f273ddc42d6c255853df469db83"],["tags/Jexus/index.html","37637574fdf725d8e924e613bc21f6a0"],["tags/Kindle/index.html","dc632378809706dccfa6ba542c33cbc0"],["tags/Lambda/index.html","7771ce47777f9d2f2b7f30e767181414"],["tags/Linq/index.html","744dd0d1fb38252d5050f6121ff83a31"],["tags/Linux/index.html","c4bff924d049bcfacb8c92c49d65219a"],["tags/Liquid/index.html","72b79cc96161ee70c9998c6700833563"],["tags/Logger/index.html","65606fbdace0750f7c383fc04dbac1ff"],["tags/Love2D/index.html","c2870dc2492b851937cac2409e2f79ff"],["tags/Lua/index.html","a0eb57e82d405093a648669528438f01"],["tags/MMD/index.html","80e61546264f45012eeb8aa298d62c46"],["tags/MSBuild/index.html","c7c46eaaaceb56ad37e76f8fc17b94ff"],["tags/MVC/index.html","ec472ab4a1bbefa032d5df707d007839"],["tags/MVVM/index.html","0f1972ee0ccaf98504597087c9d462eb"],["tags/MapReduce/index.html","a9f299c091e7d48bdc7d690e06ee1a44"],["tags/Markdown/index.html","643693c6df5455ce421ac936a66033ea"],["tags/Mecanim/index.html","52fd4ca39e80860c52c2d0dc6213ae50"],["tags/Mono/index.html","b58aa2d74f42471d3e26d0c6f532523e"],["tags/NET-Core/index.html","3f72afa7b045342bcac6ccc443e37291"],["tags/NET/index.html","f7a2c3d7d39a9eeac88a8b33dd3747f0"],["tags/Nginx/index.html","0a04908b7cff0017f528467901f47140"],["tags/OBJ/index.html","a6f21ae89d4f19510167a5c7d9a79f65"],["tags/Oracle/index.html","5c2ca79bdcb7aca739ad2cfd07ea20cf"],["tags/PL-SQL/index.html","fe569b09e5e920f3fbc7027a9a1b279e"],["tags/POCOController/index.html","b3bfad4b581d28837ecc63cbbd244a94"],["tags/PWA/index.html","717b7b9651c8e60b750df3bae855a7d4"],["tags/Python/index.html","24d8313aaf1d0fba4025d5f278266ef5"],["tags/RESTful/index.html","5eee3b1755a1625e7fd97143325aae3a"],["tags/RFC/index.html","e5e40d95f91d46843f0e2ae209a483bd"],["tags/RPG/index.html","b488d84387d31a0920304da032e3f977"],["tags/RSETful/index.html","7bfaf8ba2552a32e1995d9ff73a230f9"],["tags/React/index.html","448ad053994a794d4847f5adc75a391e"],["tags/Redis/index.html","3b02cb02fc3e7d5e8da87f5093e142b7"],["tags/Referrer/index.html","daffa70333075c98647f5df9b1869cba"],["tags/Retrofit/index.html","65ea7a38257f5bff957dd1f8a8dace75"],["tags/SDL/index.html","80627787e1bdde5891bdaa5f9a84e1db"],["tags/SQLite/index.html","4d983691580b00462f4c114805bdec0d"],["tags/SSE/index.html","01daf1b09921f17ea4436dafc9602497"],["tags/SVN/index.html","0384735c1abc4a0f4505148297c8228a"],["tags/Script/index.html","2e710149f8df9037b8320a8ef4171c79"],["tags/Server酱/index.html","54432df1accbc3fdef645d465d2b27fc"],["tags/Shader/index.html","391919b6189263acc721c0f4c80a47d6"],["tags/SignalR/index.html","1f09851d1536253325cd5c18a4de3669"],["tags/Socket/index.html","a68290eed66f9764f0181537be2d5adf"],["tags/Sonar/index.html","adee4f132254e80f5eafee4601e63e40"],["tags/SourceTree/index.html","a5accdfc847347dd47ee804b27a7e55d"],["tags/Sublime/index.html","840cdd40bcf7face5150ebd38d9d7edf"],["tags/Swagger/index.html","de33b789f2d9bb5bad60327a6b6cddc3"],["tags/Trace/index.html","63ac93aa1f7280dc22c5fe115cc11628"],["tags/Travis/index.html","56685a121e3023674b3b4d9c5b4004c7"],["tags/Unity/index.html","366e1c5f70de1d2504c81572f0a77882"],["tags/Unity3D/index.html","bb604f5a3758952d4859d1b56b6d02cf"],["tags/Unity3D/pages/2/index.html","1ae0bbb6b75aa1a94fd9b0306e07e3ca"],["tags/Unity3D/pages/3/index.html","f64281b5e64a7917fb8b7c1bb2b9d70f"],["tags/VSCode/index.html","a19e48f1a72afa03a176ec12539cf6c0"],["tags/Valine/index.html","28641f1cb50c025e1be88de52f511ba3"],["tags/Visual-Studio/index.html","f54dd572150f11df2af40195659f685f"],["tags/Vue/index.html","735c7497f9d28435c8fd69ddf0d0bc3c"],["tags/WSL/index.html","eba4b785eb9dc6b71b81b1661b2753ee"],["tags/Web-API/index.html","81e01f89e38e3c2adeb7ecacce49bff8"],["tags/Web/index.html","ce4b105268ecd532a4e71edbbf90197a"],["tags/WebApi/index.html","8372d9e4314cff90bf9bc27db57da458"],["tags/WebSocket/index.html","316d198a84acbfa944cc5a688045d341"],["tags/Wechat/index.html","603145b4eb0e025a47b18ee807514748"],["tags/Windows/index.html","354ef7c0db60dce238065e32d3ae6761"],["tags/disunity/index.html","eef1c49010e26a2b0cfdaf6ddb9cb1d6"],["tags/index.html","3f5cbd78261af77e62f38df496916f0e"],["tags/jsDelivr/index.html","6cdb2a25d371cad6ea035f52ac952ff0"],["tags/matplotlib/index.html","a4aea9366e7e7f54ec480a9a485b1677"],["tags/uGUI/index.html","4bc20e715319e42f0fe7eaaebe6c192e"],["tags/zTree/index.html","8b600f04570d346d57d021dac384ae8a"],["tags/一出好戏/index.html","059ecc8f88b41144d124a60e9e91fec3"],["tags/七牛/index.html","58bf99408cd38283627837c90329a6fd"],["tags/主从复制/index.html","0feb8ef5ceed481bdb9f2592e2812612"],["tags/事件/index.html","fad0b49457d0db91e3c8724c9ffac2db"],["tags/二维码/index.html","026c1bc0ec0c13bb8d0ef7ed500dd9e8"],["tags/云音乐/index.html","7882f703a68a825058310939e18ad996"],["tags/互联网/index.html","d5eb7a40466d4d6b71742d215ca40dbc"],["tags/亲情/index.html","cec03d0e1805b0599622daa636a03e35"],["tags/人文/index.html","919f681003506ada3d6bcf6749a63390"],["tags/人生/index.html","51c6d8c142d8b50c155dfec8e80e065a"],["tags/仙剑奇侠传/index.html","48ac5cb7819c44c7e9cf475057d0fa37"],["tags/价值/index.html","8400a31ae4a2fe4287e4a9b0821ae2bb"],["tags/优化/index.html","70dde5f97f0857cdce18dcf75852c66f"],["tags/全智贤/index.html","6dca0a7d31b02ffad33677e9196c7c6b"],["tags/公众号/index.html","dc9b7b24994dc6b5f32271b33f05bad3"],["tags/关卡系统/index.html","84ce1d6d0f1092b1a3f8cefd9278335c"],["tags/函数式编程/index.html","a85e98c2e1576c07f7366f494c8c249c"],["tags/别离/index.html","def51bdf8ce0fc54896a9e0fdbdf5e67"],["tags/前任/index.html","b0edd3e21aff1d7e2b4d979c75c4d16c"],["tags/前端/index.html","444fc2f8aeb176dc4210545e7df34504"],["tags/剑指Offer/index.html","6e55273a31e9e54986e7c1fc50afbee6"],["tags/加密/index.html","7141387a5639a9f21865e5ec69722c75"],["tags/动态代理/index.html","5f1e78b71a4fd17cbbf47cf5d5fbc55b"],["tags/动态加载/index.html","edb0cdefbf6491e6f7a002dd6a75c195"],["tags/动画/index.html","71ba69734eca3069ac3d344380b230bb"],["tags/单位/index.html","5580ef59637f3be9b0450500beb2f837"],["tags/单机游戏/index.html","65d3efd7d4e74c0dedf369d4775a7454"],["tags/印度/index.html","dfb1aa75d36a4e44a6de13b65720cfb0"],["tags/历史/index.html","116a8efdbba537727eb8aadba851a568"],["tags/反编译/index.html","5dbea62db25f7954cda8961e6a5a770a"],["tags/同步/index.html","bbabfd23aaf4b0aa952eb1b7e9006a3d"],["tags/后端/index.html","335e6be9e6bde8b9467b84898de259ed"],["tags/命令/index.html","f77f53bebd0c49364f9a91a89d0ba822"],["tags/和平/index.html","9a1aad756f210789bfbf590cbc03f6bf"],["tags/响应式/index.html","3b08c4e2fcdf0eeac3f486527a7a974c"],["tags/哲学/index.html","1c6214cbafd96352846c990205e18be6"],["tags/回家/index.html","6549294ef1f390c75d470be44a0be35c"],["tags/回忆/index.html","dc5e5d6b55c4699f6dd582f017aa34d3"],["tags/回顾/index.html","0b42542b8933eb9ca6a47b4c3b2c8125"],["tags/回首/index.html","c89620cb08d0b9d0a001413d8db06148"],["tags/图床/index.html","2ccdf3672c0459f8dde350e6bd79d8c5"],["tags/图形/index.html","9b9a3f1a1872a43b65e78015b62e6117"],["tags/地图/index.html","381de3af4d042c2158eb14e03c1928b5"],["tags/塔防/index.html","c3583776a7cc120d91849fd0c2d9dcb4"],["tags/增强现实/index.html","c6cd0a31cd4a9e5fa61ddd8e2554842d"],["tags/壁纸/index.html","e2330de470df85e19ce24115938fbd01"],["tags/夏目漱石/index.html","a91aa6a6778bb07f07956f2669c7fc96"],["tags/多线程/index.html","a91299e57ad812195b3d7ed3ad93cf5a"],["tags/大护法/index.html","af901ac141cc61ad8e44c165172ad739"],["tags/委托/index.html","a1d827929c1864076f309403c40c4ae5"],["tags/孤独/index.html","0ebab2640d62582b33bcb3eb2d0f0ff1"],["tags/审计/index.html","39e269a8c775a1e1dbaf870435b306a0"],["tags/展望/index.html","d11e61bdca28f8d2340c19a24c6aef26"],["tags/工作/index.html","01c642e4c99daeccf976f2d0dd2f3963"],["tags/平凡/index.html","934e7f5d496057fadbd8774aff09b6f6"],["tags/年华/index.html","7e6d10918f2cb3a2a96057a2dc1a6a2f"],["tags/年度/index.html","702b51a4469be5501ebfb0ae33cd0963"],["tags/开源/index.html","eb1c4ac133c861d6ab203b399eacda47"],["tags/异常/index.html","1f1fff2fc995d93917a67b2a64081610"],["tags/异步/index.html","741b04565eaed08da9a019d732eba76a"],["tags/引擎/index.html","390ec25f1a6622f056cc2db551ca60ad"],["tags/影评/index.html","e62ee9fe3077f48240c2c6d180add1af"],["tags/微信/index.html","281137bfdb94dc46c30ca8ba34dc0552"],["tags/微博/index.html","c36a029f44ad1958d8d0ecb96cbeefc4"],["tags/心情/index.html","4ce2c2a246d0736e9df12453e64a8c2f"],["tags/思维/index.html","632814ebd160d9c107cd6fa3379cc236"],["tags/总结/index.html","6c33a2d6822db9d685d7c1d4097c6df3"],["tags/想法/index.html","b5bbcd35a230e3eb60002f1ee36db961"],["tags/感悟/index.html","7b1a9ad9306ab152583305716ce3cdff"],["tags/成长/index.html","c6e7d609c1fc9bfcee16f6aab56ce4bc"],["tags/我是猫/index.html","dd42dbb8c5f6e42d0a0279d36a467e9c"],["tags/扩展/index.html","6d5f7ce90aeb4a1019a8d944a52fff3d"],["tags/扩展方法/index.html","4cf19dd9a50dc1fe13d744b4127d2258"],["tags/技术/index.html","08cbedf83175703eaabe1f07ffa913a5"],["tags/拖拽/index.html","25a4a648798ef634d81334bec84674d8"],["tags/插件/index.html","df06866b1d663b6ac3924eca67ba19c3"],["tags/插件化/index.html","43c7b82aace90136f11c06aea2c20186"],["tags/数字/index.html","14be55356fa119362dae8ff4d2cee982"],["tags/数学/index.html","60e1aff98cc6679c2178ae583ea9e8ac"],["tags/数据/index.html","c30d6a4e73be753c4640687cd6edcad6"],["tags/数据交换/index.html","28abeaec1a8e4fe8a174f2a6e41620cd"],["tags/数据库/index.html","c2e58bd6b064faec590a56477e6ae810"],["tags/文本分类/index.html","948edd3d60a47490d1069ec0bddedb63"],["tags/无问西东/index.html","c08889b9e44647446089183f628c0772"],["tags/日剧/index.html","ef0ee5509aa15f14fe506208f188e171"],["tags/日志/index.html","c2f9c991521737fe0fee359db5ce676a"],["tags/日本文学/index.html","12a87b852826b3c18d5a52f764b36e3a"],["tags/时区/index.html","91f6f61b7e30c27814ba25872d6ba968"],["tags/时间/index.html","98ff0f7f1dbb4f849c6f055de341f66c"],["tags/服务器/index.html","b44efa5b7e93fc3a00bcb515ba189393"],["tags/朝圣/index.html","ae96ab98b3a1f8d9880e28302c59d061"],["tags/朴素贝叶斯/index.html","0440c2f7622d4aa899196362d4e4aace"],["tags/架构/index.html","8b78689f5082cb41f6328d4eb49f6dfb"],["tags/标注/index.html","71985a1bee2847cb93f1d2b12cae640f"],["tags/校验/index.html","3c7c774bfd32669e12c11733f09b8719"],["tags/格式/index.html","f905a8ed1eb554383de8c7cd0e9f4982"],["tags/格式化/index.html","411c3996512054afefb31f8a4626f433"],["tags/桌面/index.html","7af06aa3e368122f2e7912fb865face4"],["tags/梦想/index.html","67b9f5598ddd3dd6d93b9b81e1323f2c"],["tags/概率/index.html","b5f7ece5e8dcf8ae7878321655dae10e"],["tags/模板/index.html","a48bbdeebacc8e687d975c6027785913"],["tags/模板引擎/index.html","ced7f14a2f17ab9ebaca6b2d29a8c9c5"],["tags/毕业/index.html","1bf5c592fd98a294a029f80d34c86d05"],["tags/毕业季/index.html","63ebff1e4e65229d763969549b1f2853"],["tags/消息/index.html","028fe5c988e0d578a5f96c1db0677f42"],["tags/游戏/index.html","306d0f9d74798f206c6e2bb2e594b9ac"],["tags/游戏/pages/2/index.html","ce51f5fbca78dfaafa612d297edb5d2b"],["tags/游戏开发/index.html","0ab46ce5120cc9a5ba0577e26aeb35c8"],["tags/游戏引擎/index.html","0972b32053018fdaadcbeca0d2cc7caa"],["tags/爱情/index.html","a401387a43824f75121f34ad2c5bd7db"],["tags/版本控制/index.html","2a1686606c83186094f47ddf058b0679"],["tags/版权/index.html","ce109d12d3d2f40485a0caeb09f3af7f"],["tags/特性/index.html","76dc94af2b29b788ffded076919da50e"],["tags/状态/index.html","1141929574caaf97c519914427d3454f"],["tags/现实/index.html","33e4620753130e89e8ada6a6ed7b3ec1"],["tags/生活/index.html","60dbf32a72c200518b8cde1adcd6c1b0"],["tags/电影/index.html","2ac6fe2ca0811e924e2b3749192fff8e"],["tags/画家/index.html","e51bef0effb6313b931341b24daa216c"],["tags/知识共享/index.html","d6b3731a134531b9d64b4095cd05efe3"],["tags/矫情/index.html","e173eccfe830875c266befc347b79343"],["tags/程序员/index.html","3c8a37937681335cc84a59ae149762c1"],["tags/穹之扉/index.html","6caf61505afdd6ec369b2c639316a2c3"],["tags/穿搭/index.html","434275bb4c705ebf3fb29c7b0cc1a358"],["tags/童话/index.html","905647ba04faf9c44af20bee2ed4e1c0"],["tags/笔记/index.html","ef73d86bc160586adc0a3aadd48f99b5"],["tags/算法/index.html","3f71fce37baca128a6724027c243f76a"],["tags/米花之味/index.html","251c2f9d274c93a7328bfcd7fff96863"],["tags/缓存/index.html","12a728e485e28b7d29316f2e4a29ba23"],["tags/编程/index.html","8f471c8d6e6b55cd01003f2c07036ab6"],["tags/编译/index.html","f0af57f19a8e9f6897a55d0aff461b9a"],["tags/编辑器/index.html","87174831de196a39578880eeb709c4ba"],["tags/网易/index.html","d8b20e311c67c956449cfa9a61c03ea7"],["tags/脚本/index.html","95b282ca10f3316e59a6c683843e89db"],["tags/脚本语言/index.html","177c1bb7bc1bb20145b10c53130a1828"],["tags/虚拟摇杆/index.html","a6e4af7dd2c24a8fde700fe4e7b37e7f"],["tags/蛋炒饭/index.html","ea5558e3e19f8996acfb2f88e088ae0f"],["tags/表单/index.html","0edbe9efcf24023533369db32206a4a0"],["tags/表达式树/index.html","5fce404b500a87620b85342be4689db7"],["tags/装饰器/index.html","4652fd84265a95e15c85844e0d09de21"],["tags/西安/index.html","1d3bd26b70519b7072dbc6374009bec9"],["tags/计算机图形/index.html","f3762a467cbaa1d5b573ed320cf01d92"],["tags/设计/index.html","8e242338dc58ddec246fa62ab6b1d429"],["tags/设计模式/index.html","bd44258b2c437f75a882ab8587449c35"],["tags/访问量/index.html","193b2a2c75310a3af0edfa9cdc43f854"],["tags/评论/index.html","a6b71e0cc9ad9181c243fcee6f374e12"],["tags/词云/index.html","e5e5b9a3ac39b47853f5430e09357740"],["tags/诗人/index.html","35810b60ebd9996bc605d2126ffa29da"],["tags/语法/index.html","50c5904567d404394e3f00facd0cccc2"],["tags/请记住我/index.html","b1864332de2fecbbb6b3f2387f5f4edb"],["tags/读书/index.html","66e39bb40d3b5cc89da52eca1c9101d2"],["tags/读写分离/index.html","7a8a82930ed174b3f81f04512adfd0bc"],["tags/调试/index.html","5aa7d9a03dc7f2cbaf03999115a2702a"],["tags/贝塞尔曲线/index.html","e1ee4fa58aaa8c18142eb7c58b86d795"],["tags/贪吃蛇/index.html","7526c77c7daf781d2986647ed6a90875"],["tags/资源提取/index.html","b6cd02f736d99176faca047425681b30"],["tags/跨域/index.html","26586e6977cec6baeb331cf515f602d3"],["tags/跨平台/index.html","862d366b323b5f932f6740d0ef34c2fc"],["tags/转盘/index.html","3f9cfea71fc7d9fbebfe94dea1e46d2b"],["tags/迁移/index.html","afa61990478a458dea18c1f36d011f2f"],["tags/通信/index.html","f341f2d72cfb4666e85fcb65664e920c"],["tags/邪不压正/index.html","1142190edc7ba60c1f2fe9daf81779a1"],["tags/部署/index.html","ddd5e5f38c2cc6a523ee2c582fb8cf54"],["tags/配载/index.html","c68ec73b7bcb49f33355dea832501adf"],["tags/重试/index.html","9ed2aea9a2a7aaedee7e7b5f17beea5e"],["tags/长安/index.html","19eadab0417e335a019f5a3572b7cf80"],["tags/长安十二时辰/index.html","396b8774cec1ef74d59f1635995acd75"],["tags/阅读/index.html","0d24407830c2128d8c0cd8b408ea1144"],["tags/阿里/index.html","2a215a8b36a5b3739290d4ca1c8689dd"],["tags/随笔/index.html","b4b7cb6b5856424534b04cb0f4d015ca"],["tags/霍金/index.html","a9263372ed44a5bb4c79d0892e003699"],["tags/青春/index.html","91f25af2cbb2d645cc98f137c79bbb03"],["tags/面试/index.html","b626cd0ae1bb2c8ef06d09c137bc0cb0"],["tags/韩寒/index.html","2c8181f4be651aa73f99fb74dfb6f255"],["tags/马尔克斯/index.html","139e7a301599a05bc98aac93be86e325"],["tags/验证/index.html","8596fb6aa9e8b53a881541db63840cc1"],["tags/黑客/index.html","78acebeeeef5e171561b2c8abf31402d"],["wiki/index.html","87d264964765be7ace8c9bc305477d40"],["works/index.html","75427e59a2fa494970a4feb6f73c3ad5"]];
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







