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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","20edc1f51ca90dd30268d8e0acd71fce"],["archives/2014/12/index.html","5c415f0d8731926598b3adc69bbc7575"],["archives/2014/index.html","85f2f7b0a3c68b05172b2e7c1e5e03f8"],["archives/2015/01/index.html","88c289ded2f2c1e6f38e729fea5ff952"],["archives/2015/02/index.html","76788ce6f2bd1cd659a7cb2752b3a152"],["archives/2015/03/index.html","70251151543da0f7aa65bd4ae447b441"],["archives/2015/04/index.html","0fd3681895a88c0fe427131f6b5a256a"],["archives/2015/05/index.html","ddcabe5e035bc5cf6ba12de6369cabd9"],["archives/2015/06/index.html","b5d6965d39eab2c58af8635656726c10"],["archives/2015/07/index.html","7118e0fee615b57529d5d551d1f9f26b"],["archives/2015/08/index.html","528a32f41f44e9c43948d32d0c07628d"],["archives/2015/09/index.html","d02a30b8bb5b455b3d3586758a38be36"],["archives/2015/10/index.html","6d22fc47b4de8e90f0b11ea8f09b48ba"],["archives/2015/11/index.html","3bdaeb748cd503d302083558045e4a71"],["archives/2015/12/index.html","87f96213d57add7797bab86a1f33de6b"],["archives/2015/index.html","7cde410a814994879326f5c4c8590290"],["archives/2015/pages/2/index.html","8bec1505fb903a8b4c19ce558f25b7b3"],["archives/2015/pages/3/index.html","ac5ab92c3d0a5b0eb0c6c351ab152a06"],["archives/2015/pages/4/index.html","4a66ed15a47e7d9390a5c1d4f3868c3b"],["archives/2015/pages/5/index.html","dc77dd73081783b281c3f7d99555dc2c"],["archives/2015/pages/6/index.html","ef6a785703e0b2ed62c2f337361ee32d"],["archives/2016/01/index.html","91bf86359c6c82480645beaf4c412d8d"],["archives/2016/03/index.html","a5c642a2e4f3f97bf7e75d4c00a6fc80"],["archives/2016/05/index.html","00b0e7cf4d8b724ad1232708e7cef9b7"],["archives/2016/06/index.html","7dffa68bab4de7eaeaa5cc19d366c515"],["archives/2016/07/index.html","4ec5c6424bb099eea4309363347b2e73"],["archives/2016/09/index.html","c3dd8a4b69e3b8f598306f52e41887c3"],["archives/2016/10/index.html","e5710ee4dd980c545f346a090dba2a4e"],["archives/2016/11/index.html","f7f337caec744a7e0640ee9e7bee56f2"],["archives/2016/index.html","1b66580a530b7d2cd651003225efc0ef"],["archives/2016/pages/2/index.html","c1bec359ec87956944cb6d419ee8845b"],["archives/2016/pages/3/index.html","c21d2c90b47ec6f6182cdfe4bb5b9bf1"],["archives/2017/02/index.html","5c4e2a63170d853bdab011fa35033b71"],["archives/2017/03/index.html","ea922b71d2170c9c1ff3d11a9440fb84"],["archives/2017/04/index.html","d63fd23cb3d05a24b9819920ad8e2a70"],["archives/2017/05/index.html","655b055e656244c23fae36a86b581181"],["archives/2017/07/index.html","a14e928c3aeb3ad5bce018f024903289"],["archives/2017/08/index.html","79c34a7219c845e497ee1b3482aa7961"],["archives/2017/09/index.html","182b4ce220e7d1aa7516abbaee99e9ec"],["archives/2017/10/index.html","d921b37c171afffc6b14fd46537a5567"],["archives/2017/11/index.html","980c3d87fe0ca0babfac9a2dbcb833c8"],["archives/2017/12/index.html","f6b5f7da23b5c4d592b3642a40c102d2"],["archives/2017/index.html","597d963fefcff04cdadc21419ffb5863"],["archives/2017/pages/2/index.html","b55f72fe21e28b98ba552e32d3d159a8"],["archives/2018/01/index.html","98881cba94cb998ead183229ce66680f"],["archives/2018/02/index.html","be890be7134554751583330259132c61"],["archives/2018/03/index.html","2554fa40efa11a382f906e8d9009b7cc"],["archives/2018/04/index.html","30a45f628479a866ea749311a228bfbe"],["archives/2018/05/index.html","b031013eadd33f3868b50d52635a9b68"],["archives/2018/06/index.html","c63cb0034bdf1216b2d98bdde942e612"],["archives/2018/07/index.html","3c427ea94b42fd9ae638d9246def40d3"],["archives/2018/08/index.html","d61dbb6530e0a3e5420d8ac5d1a44875"],["archives/2018/09/index.html","7cb9559a6c963a1e462bcc70c1e68e92"],["archives/2018/10/index.html","3b86f26a82b99035cf05dcf7b0dd70ea"],["archives/2018/index.html","db93384e3b7d5f1962dde8e5f23576d8"],["archives/2018/pages/2/index.html","b81b483c24b3d6eef3ef2114bd7182e2"],["archives/2018/pages/3/index.html","de7751c4b3e63717826a3107298f75a3"],["archives/2018/pages/4/index.html","0003ceadb2df9b329d945bcb3d1ffc54"],["archives/2019/01/index.html","94cec116fee8885d39538126e3436010"],["archives/2019/02/index.html","0ef95e1ee2c904febd6ae001e550e7d1"],["archives/2019/03/index.html","0f017d7b948af4d6748a366753b041b0"],["archives/2019/04/index.html","e32fea9828585cfa2f50a9b6e2fe3c0a"],["archives/2019/05/index.html","28104f2023ea56f9e45ceec96115dbf2"],["archives/2019/06/index.html","8e017f8721630d38a0fb064fe361594c"],["archives/2019/07/index.html","965790bcd26c42b717c0237bc6796dd1"],["archives/2019/08/index.html","0898708cba6458620d287bdb432fe306"],["archives/2019/09/index.html","99124fc3c2cd7e89fd185d3e61444f4d"],["archives/2019/10/index.html","47d968bed4d00a54bd986dc31258ea0f"],["archives/2019/11/index.html","4a2b788f7789cce69f4f3e2ab4e692e7"],["archives/2019/12/index.html","00145a8cbad8d16722d4be2ffd4b8603"],["archives/2019/index.html","3a781bb0ff9a8e2022961ee1973fc2c9"],["archives/2019/pages/2/index.html","557a18f6877c573ffe94824933fa39a6"],["archives/2019/pages/3/index.html","3442a0cf49e7a67ab7e1c1750f3eb2d6"],["archives/2020/01/index.html","a6154a6a4192fd2793861d412849de81"],["archives/2020/02/index.html","bae59a6548bdbddc42ef24dda34b536e"],["archives/2020/index.html","2318faa5898135b4162922c3a31bf28d"],["archives/index.html","9e80e08af098058589d084ed53398770"],["archives/pages/10/index.html","ca9831ad95a15e61faf08114faca5bcc"],["archives/pages/11/index.html","e1110272d93a641753a469aa08e4b0a7"],["archives/pages/12/index.html","75bba5d6a6c5b886478574e59fa99720"],["archives/pages/13/index.html","51fb29c3a5164db7eadb5555e695596b"],["archives/pages/14/index.html","2f3c26b99de627202af89940a298c749"],["archives/pages/15/index.html","88991cbe92acbea258fc5768032baced"],["archives/pages/16/index.html","65388fe5ecbeccd5f9df5ddd6bd160ad"],["archives/pages/2/index.html","f31936c12855cd593319d4774fe28c93"],["archives/pages/3/index.html","c010d3d1ecec78a1f54dbbe0469612ac"],["archives/pages/4/index.html","8c4f5245369803ae5d29c173252fa3fa"],["archives/pages/5/index.html","fae730f7272f3c39ae44c01d261918cc"],["archives/pages/6/index.html","199d3226516e616f373844944389d778"],["archives/pages/7/index.html","fd8293a08ca9ff9c9f447f50e47feb28"],["archives/pages/8/index.html","5bfd6c73d3d3dbca6e4b7723863c06f4"],["archives/pages/9/index.html","15472fc291f73328ef3447f61a0ed9d5"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","6a77034130b6407b1182fcfd81f43db1"],["categories/Unity3D/index.html","e2f86395650eb7f569baf84dfaf6c2a9"],["categories/Unity3D/pages/2/index.html","b8c43ca53d73027f625d1495c7b3714e"],["categories/index.html","0f112a8bf463cd02d6f176c2f8fb5bc7"],["categories/人工智能/index.html","6747fb2348c5035e23171eb16a93089b"],["categories/前端开发/index.html","a27a8d56a764aff4c0095a5826952a97"],["categories/单机游戏/index.html","621ebfa8d8e69f2fbf6a91bbc4dc60eb"],["categories/开发工具/index.html","7581834e6dbbff73efb1321b526f3433"],["categories/数据分析/index.html","165275319bc764da4b4fb2dedc53a1b9"],["categories/数据存储/index.html","43aaf62cc2df4a9da67a40859853d400"],["categories/游戏开发/index.html","487fffccb8e48f52c7631a1a638066b2"],["categories/游戏开发/pages/2/index.html","54a15f61fea67f67f9c07e43557ad112"],["categories/游戏引擎/index.html","9167c07895d3ddbc5ae5a6f8c39c89da"],["categories/独立博客/index.html","1cdc43d43bfc4a65e5fa2610e790d895"],["categories/生活感悟/index.html","f84e5dca0bcd27604a8268f15164e34a"],["categories/生活感悟/pages/2/index.html","7d44b40855008f0d15b08f936da29fe5"],["categories/生活感悟/pages/3/index.html","cdce38bbe09d65a5519a7382b4e5e90a"],["categories/编程语言/index.html","326d5b3f9d6f6b0ffc6031b631bf91fd"],["categories/编程语言/pages/2/index.html","7e9c8d4583ef1983bec92af2cb3a1b4b"],["categories/编程语言/pages/3/index.html","2bbfd702b580e989fdf9798c196d0392"],["categories/编程语言/pages/4/index.html","48427ac52199d1a2418cd7ed3b903663"],["categories/编程语言/pages/5/index.html","82d32f8b3963f7cb55eeb409453e70c4"],["categories/读书笔记/index.html","a318bf548d62e3c54fbc4ffe17d072e8"],["categories/读书笔记/pages/2/index.html","a04e3c31ea7583cd8208a3196b919a3f"],["index.html","70513daaa9f382e8d5e167cc8103adc5"],["movies/index.html","199a51d5f4f0d7b5da0c4717636195e3"],["musics/index.html","3fe2d798e4246534ab03afbfcd137de7"],["pages/10/index.html","50b0d0c6e6c03ed9cfc7d1965df52ab5"],["pages/11/index.html","f00470ad6154c3d8925f578563f4c6cf"],["pages/12/index.html","9da351ab18ee6ead1a9690637c536670"],["pages/13/index.html","6328509c8cd8ce323bc229cef7671a34"],["pages/14/index.html","785da90ae26d6b67b5275b711e9231b0"],["pages/15/index.html","5df7e163c493ffebf6c22bf0ead69ca1"],["pages/16/index.html","05a0a9f82fca36797583fe1f06c7d359"],["pages/2/index.html","2fd93c5d97da48fea847fcd194546625"],["pages/3/index.html","cd6715e31880ead46a21e248cea729bb"],["pages/4/index.html","7af5d200940475d9be3751e6d10587e7"],["pages/5/index.html","9338880f4a8d6989ad21f218e1124088"],["pages/6/index.html","f62889b15bc2eff895b7812286a89118"],["pages/7/index.html","9573abc1a929fdd9e34d8cc05f28f62a"],["pages/8/index.html","ee56cd878e10f3d4906ee6dbb453225b"],["pages/9/index.html","6179078ad4df864e3aa31d29b6867177"],["posts/1059499448/index.html","c761b40be6f89625630250f097548131"],["posts/1071063696/index.html","7e1b26444c4cac3e0aaeb248ea9ac0c4"],["posts/1082185388/index.html","51a0caf94008569edda2aa11da7f6f6e"],["posts/1099762326/index.html","922a7dbca2a3c502c81d72381ff8ea4a"],["posts/1113828794/index.html","97b53b2f01e0fb8411035eacb10047bc"],["posts/1118169753/index.html","7a8b75de325d098b3f1240e3991622fd"],["posts/1122710277/index.html","cbee2e7dda38f5934438749a10f13bd5"],["posts/1124152964/index.html","946b08e5f4a4ded169087f3eae93bf40"],["posts/1127467740/index.html","9639614a8d196c6019d2036eb0fad5ca"],["posts/1150071886/index.html","a02f56aa5e0704ce85bb368f119589e8"],["posts/1150143610/index.html","6ea90c61ffc37949573903b3fcf9e86e"],["posts/1152813120/index.html","78cdf57e53159c173ddc5d60f9acd3a1"],["posts/115524443/index.html","ff82dd87dcb4324eb50a18d0baac53de"],["posts/1156673678/index.html","47750b7c9f63230328221b54f81089ab"],["posts/1166840790/index.html","193f0cde98337457bc802ca4cdafa832"],["posts/116795088/index.html","fa387fc72a6a4995b4feb4ff3b6254e0"],["posts/1176959868/index.html","ae65f25c282561e6d24baa139496a98a"],["posts/1190622881/index.html","337f73b81b23e1cbbe7736bf143a3f0f"],["posts/123663202/index.html","1d8d969108fb2c830d4107cc460e8900"],["posts/124807650/index.html","2e940e7c880eaa58bc969784237fb057"],["posts/1254783039/index.html","4f5fd3b4432b5c47838911a081d74daa"],["posts/1320325685/index.html","e5173e1583310196ffbb569b89154b5b"],["posts/1329254441/index.html","ccb35be3b5018d9657a336a1bc16cb71"],["posts/1357715684/index.html","bbae238c739a7beb319890ea1ff57291"],["posts/1358971951/index.html","72edfeec7af698844689d7d9b11233f9"],["posts/1386017461/index.html","1a863fd5f5ed81dbf62edee02f341fd1"],["posts/1394521917/index.html","43e0cfca5ec0eae6088a9dffba81178f"],["posts/1397717193/index.html","7ef9c855c93308e4d88425825080f4ef"],["posts/1417719502/index.html","db2611ab3dc793f8492599cb9a1b3f8b"],["posts/1424645834/index.html","574fe666dff61c9762ebd702fcb98c5f"],["posts/1444577573/index.html","fb8a1dc8b534bebad5850f61735da0bb"],["posts/1467630055/index.html","4da00e93f1ead7decb5d0654446c0c52"],["posts/1478979553/index.html","30770cc6a49b8a710bf24dcc047e34e2"],["posts/1540537013/index.html","fa89f5ef99829ad29b9296b3b119e99b"],["posts/166983157/index.html","21aadec74d4a389090a8e894bd705d1a"],["posts/1670305415/index.html","9b1502d7f05dc82bafbd7bae169a7a96"],["posts/1684318907/index.html","7f0665dd68da3207329542e058178edf"],["posts/169430744/index.html","4fad6d62f9ae6be766d37988c4d64b89"],["posts/1700650235/index.html","1b173a8b46d5f8dd809a3192460e54cb"],["posts/172426938/index.html","fa050c7b04ec2ec5d52f643bcaec768b"],["posts/1836680899/index.html","faca37da61eeb5113e73f75c78be380b"],["posts/183718218/index.html","08c99e18833b49eb734aaaf6eefa654a"],["posts/187480982/index.html","afcb2d0c20bd82eb47b49a4c89114ca4"],["posts/1930050594/index.html","9f6686761a0ae51adc222bd2d180f701"],["posts/1933583281/index.html","b2a6c0370a7db70064e5551abf7373c9"],["posts/1940333895/index.html","cf1fc24a0e7988708af2213d4b7aeb4e"],["posts/1960676615/index.html","01bd9f887fb630dbca854bd2cdb24067"],["posts/1983298072/index.html","ac1fb4ee3bd77628aa8745a791d4de05"],["posts/1989654282/index.html","055adf6b8ded4498c0346cc6be1790e1"],["posts/2015300310/index.html","12e1ba21339b336352aa0b0557a7dca3"],["posts/2038378679/index.html","2ce4ccf0b51b0320c3413d154e792bb3"],["posts/2041685704/index.html","a4cbdd3d106e11ef3c13d8c5f5c6938f"],["posts/21112647/index.html","5f38cc067a014a4d62c09ed7d6c880dd"],["posts/2158696176/index.html","939e9f16c2e4f637e0bf449a585deeb3"],["posts/2171683728/index.html","069aa9cd251599667b5f5cbf43fc68c7"],["posts/2186770732/index.html","61a06a30f0b7dea8c0e8afb2aa9f018c"],["posts/2275646954/index.html","8b2708b29cb2c1b9dd13828e8c345c2c"],["posts/2314414875/index.html","e8fe100ee1d37749d24777ffa1828628"],["posts/2318173297/index.html","aa6efcc91549e6dcb7420a689c3a9182"],["posts/2418566449/index.html","1e14eccddc2e56941360e39fca6aed4b"],["posts/2436573863/index.html","bb24194c5972233667693f697d137db3"],["posts/2462008667/index.html","df74de84301cb4bf770c70472f8007d7"],["posts/2463121881/index.html","52e3c5ba999326cdf27156631eaa0894"],["posts/2527231326/index.html","480a2677a70352fa462b50033c3a99fb"],["posts/2583252123/index.html","653c6af1d9793380374c7a8711f6ee17"],["posts/2613006280/index.html","f5af899767e49c33f6adf2bcd4c8bfca"],["posts/2617501472/index.html","db7cf21fbab2594deed9cafb4ff508aa"],["posts/2676125676/index.html","c4c6409a53f632d1f852ea9535f4b5da"],["posts/2734896333/index.html","0ce67fd779975470a9a08607ff91e538"],["posts/2752169106/index.html","296eefe437bb9e07742b80a04973fc8b"],["posts/2799263488/index.html","983a7ecc0d0bf27014854538902cc013"],["posts/2805694118/index.html","34b7b1d264ebb30aaae8f8c5273b8e2f"],["posts/2809571715/index.html","69d7dd87855786be3bcc31a2ad80e9b6"],["posts/2822230423/index.html","edc18737be6cb1132d2570a0d2bc4725"],["posts/2829333122/index.html","4cd82b64a754216c34a457800f007a0b"],["posts/2911923212/index.html","cdce7740f1268d0bea30e670e3cc7c89"],["posts/2941880815/index.html","f24718ba9cc8506b9e8988e87d85a369"],["posts/2950334112/index.html","7d21f87aaccb4f30807488fbfb4fdb9f"],["posts/2954591764/index.html","80ccc20999908f6ce21b2bf1d63a2c66"],["posts/3019914405/index.html","53ddc156d918ec57446fd9d44db4964f"],["posts/3032366281/index.html","7453368e96ec55e1d041792e52bbef93"],["posts/3040357134/index.html","d80525425fef476c9e0902a35096e4a6"],["posts/305484621/index.html","034d0b6327564cba4c459496169e1217"],["posts/3083474169/index.html","42178cd7b714e218f771530fd1c93885"],["posts/3099575458/index.html","1a67b5741fd147f13ce9f91d8b8503fc"],["posts/3111375079/index.html","d33b46afd6f3ac95c6c203f049459822"],["posts/3120185261/index.html","5e471a20b975efdf03f998da25a870fc"],["posts/3131944018/index.html","9b6c78e41a4e4fdeede49e1fbe2e9138"],["posts/316230277/index.html","a4f30eed29aaf30dae411d5851625ee7"],["posts/3175881014/index.html","1a5073b2d2a6335e83b75aa25f911c64"],["posts/3222622531/index.html","d1fc9b21e14c01b3a67374310f3a9038"],["posts/3247186509/index.html","29a81cdfaf1ade0b4b51d859f811bf83"],["posts/3269605707/index.html","478fb8aee66610669c1f176bc46c478e"],["posts/3291578070/index.html","4c29ea154688ebfe9853f27186ce31e4"],["posts/331752533/index.html","5c87d49cb287de981cc9510c675e11ee"],["posts/3321992673/index.html","415635d05f82abc2793f5359c9faa90d"],["posts/335366821/index.html","ba8245074487b4119e66bc0306d3b7c3"],["posts/3356910090/index.html","550701e9860f0955e83f944b0a26cbe2"],["posts/337943766/index.html","6164713a3460644faeafb7a217d1d6bc"],["posts/3417652955/index.html","5cdb7c89a601884235a2c94faab63dd8"],["posts/3444626340/index.html","54c44074acd2e75fe53f4af19d8fe283"],["posts/3449402269/index.html","189ee65632f5d9f224ddcde67540acd4"],["posts/345410188/index.html","2837ba8d8dcf986cbf303578ee060aae"],["posts/3461518355/index.html","927b7dbe60fa16bd770363f0063d6e47"],["posts/3494408209/index.html","e36353f26734b8d3b3d1dc3ba84bf3e8"],["posts/352037321/index.html","0d571b7354e74c9224d04be30fd3355e"],["posts/3521618732/index.html","76723e822d386de29abcc687ae27e651"],["posts/3568552646/index.html","46b57bb7fc1aafd5c951e227d5408c63"],["posts/3603924376/index.html","3b40886e7b53039e739de257cff6cf32"],["posts/3637847962/index.html","391bfca43d06f3f9c15e227b3b772f2f"],["posts/3642630198/index.html","d19fff5f8e73736f902a7721a219684f"],["posts/3653662258/index.html","1e65f621f39ada7143eddb8bff89306f"],["posts/3653716295/index.html","f91244895e54ee4cdeb0b58c712f6dc2"],["posts/3657008967/index.html","e77a8cbab8d63add6b2762f6a077aff2"],["posts/3668933172/index.html","2d34f9837c95ff8e7454b6f731bd8ca8"],["posts/3677280829/index.html","7b7f544809baa39665224bcf868f3cac"],["posts/3687594958/index.html","558736315751c4247ff3caa76f22fa2e"],["posts/369095810/index.html","c7e536bade2cf1d7594e0a84a7f17dfa"],["posts/3695777215/index.html","d8aa7719ac1bf417ae599ddd02ed2732"],["posts/3736599391/index.html","15dc4a6511248e30b6b241f1c6f35a3b"],["posts/3742212493/index.html","d1c4f484f3ac12107e013dbadeea7cd2"],["posts/3782208845/index.html","d508053a1a87e7c5612951742863ba61"],["posts/3789971938/index.html","702931375cf874b3d3a6d9b3fa3ea0b7"],["posts/380519286/index.html","5cf9c9491fa81854648dcef389f3bbba"],["posts/3846545990/index.html","4ab4412fad2889deb1c3e00f21dfc9be"],["posts/3873710624/index.html","b5bd33b60fdb25ff28a0987832162a55"],["posts/3959327595/index.html","ed01a0784b1ea88954f52439a3ea642f"],["posts/3972610476/index.html","3f98f533439d4ab7b94a29d2fdd8adc9"],["posts/3995512051/index.html","7afba806de86d8aef77e01ee46e8167e"],["posts/4088452183/index.html","09b63ae722d888474e65f3eee24aa02c"],["posts/4116164325/index.html","4656c03a6f4b2266cd2a98693902f7da"],["posts/4158690468/index.html","bde31af45b4c7897f19ca30cd5dfe377"],["posts/4159187524/index.html","0001617298cc394d629b8f9876746b27"],["posts/4197961431/index.html","261a476b2ff7a93efd0864efc6f01e19"],["posts/4205536912/index.html","e4166b1b48ecb6205a17dcff4b7e9e23"],["posts/4236649/index.html","4feef74b40bdf847475ec2a5e2d2cbb4"],["posts/426338252/index.html","01d934e8c855f93da1ce1521a39b9c92"],["posts/450254281/index.html","fe1f1fb70745fc52dd477bee96c23b01"],["posts/4891372/index.html","6e820266dd9aa95ab45b0a636ad43298"],["posts/569337285/index.html","b25fc7fefc521b5b6d557f31daf11f22"],["posts/570137885/index.html","ebb3e9249f9caa081e64d05f57c2fd0c"],["posts/570888918/index.html","c483b5dc91df97fe2254a739bf622938"],["posts/582264328/index.html","45cf7156095bf7493a831ccf7567bd10"],["posts/632291273/index.html","b3860bb4f93b152ba2abeeb675dc5e19"],["posts/70687890/index.html","2e4cc00c7cf54a7167529f15b7941597"],["posts/719322223/index.html","695d0c2608bfe12faaaf223d90d82cda"],["posts/720539850/index.html","e95390c6a64fc8b316acccb76ae7e15f"],["posts/786195243/index.html","4d543c5e5814180c1ce72556633348cb"],["posts/795474045/index.html","65a3a43a0a8e8f471ca6e9e12126bdf6"],["posts/815861661/index.html","db89a59cd2cb6e4b80283122ddf42a90"],["posts/821259985/index.html","06dc8752b4ac9a14ef715ad8ed64fa58"],["posts/828223375/index.html","68064a14d9ecabc4dc25c1cf45843d2c"],["posts/887585917/index.html","70612b0af7ec322c5f0068c944eef581"],["posts/888549816/index.html","d9614137ff305089d0463a8826465634"],["posts/906436376/index.html","e53243229a2ca631071dbbc9abb74d9d"],["posts/907824546/index.html","22c5434a3f9a03fc58e6d4dfb084cff1"],["posts/927393529/index.html","3e97080bd1129212da84d5dde33b3e47"],["posts/94443781/index.html","0bdfae75a3f0013f5febdb847d83022f"],["tags/2014/index.html","7482196b9b47263d7af114059e0b5638"],["tags/2019/index.html","3164670f5a75304eb948976e644ce47b"],["tags/AI/index.html","d664fcaa6d583b0011e12aa93a32cc92"],["tags/AOP/index.html","57ff1dcb557b8520634e67e24f1c3380"],["tags/AR/index.html","f3f1477aea0a91d2c87c421a9195b946"],["tags/AssetBundle/index.html","d540a1b866f897e7a04f01a3d5cf4148"],["tags/C/index.html","3837ead270abb2f6fc5b62791c71d8e6"],["tags/CDN/index.html","7cd0f8180fb1b2fac7288b91d6ac35ca"],["tags/CG/index.html","0b5a011c9770c33d54ddeb7204524005"],["tags/CI/index.html","0af52f5011a793f2c2f697a23930fb60"],["tags/CORS/index.html","63b2d5575d930aa5f98af99a045c95f8"],["tags/CSharp/index.html","3e11a91f9177134e13446ee2f425031e"],["tags/Castle/index.html","cad1d77598f16cb4d07feb8d0ad8afd0"],["tags/DBeaver/index.html","23f9298f9856bc9d100e5e96f9f8a965"],["tags/Docker/index.html","47f90ec2e9fe695fb3b050b65d55ad7c"],["tags/Dynamic-Proxy/index.html","3738bc49bc1b0266d2ed73df348f5aaf"],["tags/Dynamic-WebApi/index.html","4a7c8ac4785959074a9b4c9b19acbd1f"],["tags/EF/index.html","1995869e18d0b33b76f14548c937bbc5"],["tags/ELK/index.html","1ac9f0f96236005570a86e96de7aea7b"],["tags/ES6/index.html","3e8f6aa2a44e496ea9533a8d573ffd38"],["tags/EasyAR/index.html","96c6caf7bfcb92ad72097adf3f13db7d"],["tags/Excel/index.html","72f648abd4199429a97f6bea485f9aa3"],["tags/FP/index.html","00912e940e75e109985091ae5eeb75e8"],["tags/Form/index.html","9d10cc46153777097aab1c9089ca73da"],["tags/Git/index.html","e5ccd75fffbc15bf1bb70bafa8924d7b"],["tags/Github/index.html","57285f717e32ac3b2957cf8a76290f82"],["tags/HTML5/index.html","73d7671381121f46f28f06ed3a5ea889"],["tags/HTTP/index.html","90d85810b2b0841dbd83127d2a711d58"],["tags/Hangfire/index.html","8f0327218dcd969a78a14455d51b6678"],["tags/Hexo/index.html","120218a583a031b8d420924414d98b6f"],["tags/HttpClient/index.html","b61db2bfbcf181a12e1fd19363a6b72e"],["tags/Hyperlog/index.html","4daba86a7608a7557a4c51a9d9c905bb"],["tags/IDE/index.html","327a775a53c3ca70ca0c2888a9a94618"],["tags/JS/index.html","3963ab88cc10059e32dc77ff2a53292f"],["tags/JSON/index.html","11ddf172e35e85386e322165ca1f301c"],["tags/JSONP/index.html","7a61b22fb08c51871a0f30a874811811"],["tags/Java/index.html","bfe20b8967efb615ab06d3ef65aa5245"],["tags/JavaScript/index.html","d6a6e389270aa70abf492ae796467d00"],["tags/Jexus/index.html","4bea9d467bd1acb8532b6a486c53fbe8"],["tags/Kindle/index.html","3ab34c51a4dd8acdd0dc5a94b2f3cb74"],["tags/Lambda/index.html","d9ec379926d77c558cfb5ddcd66d08a4"],["tags/Linux/index.html","c41cd5e1cec46ed0851fa3406be7946c"],["tags/Liquid/index.html","37ce34de5bf309897e7f0dbebe5bdf0c"],["tags/Logger/index.html","eb510072bd99b785316bf918080ba03c"],["tags/Love2D/index.html","74c53730ded496fe7b32fbb2db0c8b71"],["tags/Lua/index.html","f487c46d206763f1555c37f62c9e57db"],["tags/MMD/index.html","72bfc3dedc038254b90fbb97888c287e"],["tags/MSBuild/index.html","1fe68617ef6100aae70ec5736a5595d9"],["tags/MVC/index.html","59f8f216b03f1f8d75a8eeeb534265fd"],["tags/MVVM/index.html","f82d00d712341840ee0079600903ed4e"],["tags/MapReduce/index.html","7281906c90e24bcb04e264075a66c59e"],["tags/Markdown/index.html","e710afaadf4e476cde05d946f355593e"],["tags/Mecanim/index.html","ae165103840f04508d66574bc4660596"],["tags/Mono/index.html","a9d2507f8b3f302c4d5d6f29fb7dbbd8"],["tags/NET-Core/index.html","c14db239d1ff537f14695d66713510a0"],["tags/NET/index.html","dd6313e83dbbd25604a12f2ff7174f59"],["tags/Nginx/index.html","55f12b57ea6ed770a5a171a31d93700b"],["tags/OBJ/index.html","c4cfda9cc351790e8550b3b56d277663"],["tags/Oracle/index.html","4bb0bc2800eca36111e5e221e5d6d361"],["tags/PL-SQL/index.html","d76fd8f3c0097e854177267f7d441283"],["tags/POCOController/index.html","996fc6a8cf6579498ac07c53829547fb"],["tags/PWA/index.html","65465616f6c979f898a7937d604fe4c2"],["tags/Python/index.html","dff3542dc6923d4a3a983cc4960a4ef3"],["tags/RESTful/index.html","59c28dc0672e8a9c0beaea99cefd884f"],["tags/RFC/index.html","de7b79e19104df3f6360a95f5639a937"],["tags/RPG/index.html","bfd3543e2fa477c51a195ef6be009154"],["tags/RSETful/index.html","91900856e709127440088c83d13663ec"],["tags/React/index.html","3ba9134681d70c6cf6c9bb2da6a0f703"],["tags/Redis/index.html","3678578393f6102ea61188ae4e15c10b"],["tags/Referrer/index.html","2518d3876e6fd14c15e88682ba82d298"],["tags/SDL/index.html","b93f84761d6c6bfa12135f838e824fcb"],["tags/SQLite/index.html","a9bd55463522452a5ef57076b74741c9"],["tags/SSE/index.html","6c606e6dae81f625e7fbb911f76516a3"],["tags/SVN/index.html","d81393eb61c1a656f3e4e66745afed67"],["tags/Script/index.html","6ee05a5d37246d835975e5f4eb11c586"],["tags/Server酱/index.html","f0dbc5cddeb7ef1fad40eda6a5481a56"],["tags/Shader/index.html","88efac767e20b9f5c7366814f73397b4"],["tags/SignalR/index.html","2e242ce9481147f4357564705aed43f6"],["tags/Socket/index.html","6d6bdc6c2cdba8920fe1a5e437c9bf9b"],["tags/Sonar/index.html","f9e144cef02b925cc01a0c4e8f1f02d0"],["tags/SourceTree/index.html","9c0f8d57622e31b7f3fa2847b0e09449"],["tags/Sublime/index.html","c2b921a989fc0ccf29706289a125fb24"],["tags/Swagger/index.html","b2e4346af9a1c16a23e30569eb06edf7"],["tags/Trace/index.html","30d9f035090258f16d30fd2d978aaeb4"],["tags/Travis/index.html","a552fd1ab52902cbdfd7ad5f6fb6063f"],["tags/Unity/index.html","3ba622b74e067e59e2e0a31c38e8e9aa"],["tags/Unity3D/index.html","c050515cdac0301f792f619f1f96bea9"],["tags/Unity3D/pages/2/index.html","eff555ef337501a6fa155351b3a1269d"],["tags/Unity3D/pages/3/index.html","3c7e8d6edc2a1b4436b6c2eed29a9ec7"],["tags/VSCode/index.html","059b2039f60832d7e0ee731f4ac57638"],["tags/Valine/index.html","e67f87a7cfbb22c5555bb80d23bb69e4"],["tags/Visual-Studio/index.html","c6432d4bc6b50a1015e79b2b56c6ac1a"],["tags/Vue/index.html","e9bcb6ed2c7922c4bf378d381f202dcd"],["tags/WSL/index.html","c65fbcf6ee39e24ec3f25b3168588cae"],["tags/Web-API/index.html","2d390c2cb999ae6cce16170e5e88e317"],["tags/Web/index.html","f3f0666dc82ef69146ed31953657b4db"],["tags/WebApi/index.html","f57243e2e4a3b1ed995c3d0f74b08422"],["tags/WebSocket/index.html","e65264d4ef3509b7fa3101e9078c9f17"],["tags/Wechat/index.html","d6be3634942daa56ebfc5445388929ee"],["tags/Windows/index.html","c7dce23f8fdb04b0ad3a301d80edc56e"],["tags/disunity/index.html","f33e565301008b606d75813d02fd3cbd"],["tags/index.html","30a30a7325c0166f319de6590f072acf"],["tags/matplotlib/index.html","6d26ed55da33c020039d1f3aef7a7f58"],["tags/njsDelivr/index.html","60e842add8f4ce16ebf259e9c6482899"],["tags/uGUI/index.html","5b8fde1bfa56eb642c8b70a062aeb4f2"],["tags/zTree/index.html","7aeece7ab829a23484dbfaf954aab9f0"],["tags/一出好戏/index.html","bbaf773d8a7d154bd89f05a3f7a5f839"],["tags/七牛/index.html","4e84af3447a094842da8a4baa11f5df5"],["tags/主从复制/index.html","c8c5b5b2097bf1fd6daa88884167f5ff"],["tags/事件/index.html","4fda2967d977936325f285c4cb00718b"],["tags/二维码/index.html","4325fa6566e7c56a5a9333ef79c3b72a"],["tags/云音乐/index.html","dd2af3a6375f005189f52e62b7d3e9a2"],["tags/互联网/index.html","7f177f46d63dcfb2f8f561c97774e40f"],["tags/亲情/index.html","159e714ca483e2827bb6dbb46687d76f"],["tags/人文/index.html","8dcc641409b4f2dbab36514a92b91336"],["tags/人生/index.html","f50bae475fc75b160ae1ed6ae8daaa79"],["tags/仙剑奇侠传/index.html","3ab40a693841000d1d96459a2dfb7ec4"],["tags/价值/index.html","d9f43a1145f0591df8f90c277c701535"],["tags/优化/index.html","ca98982e1e769289e4cfe3ecd3e98a8d"],["tags/全智贤/index.html","503274fe43ab48bc4d51004738923a2d"],["tags/公众号/index.html","dcfd90f5c657b96024e0a4209386bf4c"],["tags/关卡系统/index.html","ee0723fd35ef46f56febe17f6a5eb379"],["tags/函数式编程/index.html","dddd3e4febcfd8203cfd51b3cef65651"],["tags/别离/index.html","0a87d29e42e752a938bf99b2669996e4"],["tags/前任/index.html","a862455075f5c8616b834831c2f2f7ab"],["tags/前端/index.html","3d8b2b1193588953a69b09f3ded1e487"],["tags/剑指Offer/index.html","de57a3927f91da44ee2ed05accbb2718"],["tags/加密/index.html","36c31e30200cea3bb28127d147ecea4a"],["tags/动态代理/index.html","3d57dd2e880cc00341881a56781c2eb7"],["tags/动态加载/index.html","e1bfac4179a13874aba89c204746f4de"],["tags/动画/index.html","764cf2f3fbc3bb837c323f0097d9ee5c"],["tags/单位/index.html","04f5719e9e5be3c3e36084fc546f2da9"],["tags/单机游戏/index.html","c0e17a2beb57f47ccf47804573f02981"],["tags/印度/index.html","a8c130ce88932802c8347dcc88110c94"],["tags/历史/index.html","81e1c116a9d55e9d19e8739edb7c73e4"],["tags/反编译/index.html","906292855ce2fece5a6a7a78d9a95c68"],["tags/同步/index.html","6beb487c65821fb78f953fb80f39b0ae"],["tags/后端/index.html","15845b87146547510fcd900173198ccd"],["tags/命令/index.html","605204f71fdeca2a7e44f2d95ab12eb0"],["tags/和平/index.html","f221975dcf92b04ddf12959704f2b3d4"],["tags/响应式/index.html","82861c0a3f5f47b8300eb8737ef15a1d"],["tags/哲学/index.html","3bf803b44a8052970f7de42d71fd9dbd"],["tags/回家/index.html","19fb2eda057a861c078df93f38476298"],["tags/回忆/index.html","b7fcb2aa8abb663023d4babc0d934a14"],["tags/回顾/index.html","378849903be9ad84bdaddd750c24710b"],["tags/回首/index.html","d744e9f4693282bc47cdf1336eba0529"],["tags/图床/index.html","7c4b0f30c626bb9abba272f3f76cc411"],["tags/图形/index.html","aa915339774728ff5dd076501d5036df"],["tags/地图/index.html","5402fdc16810f4b99fdd557cbb41b2c5"],["tags/塔防/index.html","00b101bd53ec9310864f6f9c2f43faf8"],["tags/增强现实/index.html","6b73429f2c2b62caf85c52db3135519d"],["tags/壁纸/index.html","3777ebe43e93ef4d3d986445e1db5fe6"],["tags/夏目漱石/index.html","9dc9b18ab4f0b1131bfe0c2b5fe94b8c"],["tags/多线程/index.html","4df9acf6e9fff19a9b203d8cfcba27ff"],["tags/大护法/index.html","67b2aec13c905273b12e9c9a336b5ab5"],["tags/委托/index.html","723b09e78901cfcf84e53bf712bdd35f"],["tags/孤独/index.html","1e034563e201aed24f4119bc867663f7"],["tags/展望/index.html","87c21b9e5ee85a6e92bae9e169b40bb5"],["tags/工作/index.html","806a883a61d06a203194e18533b01f18"],["tags/平凡/index.html","db335951ed6fccdd013973132e03dfad"],["tags/年华/index.html","07d6afdf4ef8c38e285e9c167f7d00da"],["tags/年度/index.html","9c19fefa7b11ff4df8466ba8fa395dbb"],["tags/开源/index.html","4f197b96f4e8b0928e2095a8c3ba0ef8"],["tags/异常/index.html","256cf77b1b072b68914bfada606cd768"],["tags/异步/index.html","956a8fdc4a9fad8acfb7b535fb81c140"],["tags/引擎/index.html","eb857e9880bb507c6d5391a37ebcc883"],["tags/影评/index.html","98e0b8efbfd0ba5ca55db2f98a6cff74"],["tags/微信/index.html","27831a754b7044c37d7f0e5d299bda1f"],["tags/微博/index.html","7756822bd338fcb580d613cced0cbc4c"],["tags/心情/index.html","aeebb77ad2c44c113b5b5f44e7ad05ec"],["tags/思维/index.html","dfcd19dba9c36a2feb2201c757bb0273"],["tags/总结/index.html","5aff81406216cb8b95f81eab89c6cea9"],["tags/想法/index.html","def56bc81a9f7ee2e4628568eb4f9b4d"],["tags/感悟/index.html","536deb40babbb1fb29c35fcab8e5da5c"],["tags/成长/index.html","67be1c90c5e4f405ff5b426e5ed6467c"],["tags/我是猫/index.html","bce0f02b18762719e0360ed4f2250de7"],["tags/扩展/index.html","d71575c1544aea8168656a64b27ed8b3"],["tags/扩展方法/index.html","5352e86ef6858c4d9ee6eb9c443b279c"],["tags/技术/index.html","b79d895cb952b07aedc634726b5cd7a0"],["tags/拖拽/index.html","aec27b3bf4cec2e7e685f9627caef847"],["tags/插件/index.html","e1fc7eb0d6d7d3980f13c4ae93d510c6"],["tags/插件化/index.html","0dc318776b2ace09828f394eb8a21f2e"],["tags/数字/index.html","1875f89aab6411fbe5eff5ecf4cb2b69"],["tags/数学/index.html","d28f6021c3a4d3dc9a82733745840acc"],["tags/数据/index.html","63a1927b6c850cd19e46613bfdbb036c"],["tags/数据交换/index.html","54bbe94d9ee00799e8080ec31114d4e2"],["tags/数据库/index.html","a8fc81737f24cf59d733655e42a8e88a"],["tags/文本分类/index.html","58d53e767f143950ea6dc6852a9fd633"],["tags/无问西东/index.html","a083c94639d744f0799c6e5a06c9cc76"],["tags/日剧/index.html","136372a4a7df3d454eecd30aab3e1795"],["tags/日志/index.html","f364dc721c124d83e7a52de981ce5ae5"],["tags/日本文学/index.html","564546713e4ac1ef872572a2433cb8aa"],["tags/时区/index.html","e1c2ef12b24be423e7a271d3dc85d1b4"],["tags/时间/index.html","0ccc4a684a3a3df3a92bd4ecc77aa0a6"],["tags/服务器/index.html","db06ba0bfe6dca65e273e056e521d9ea"],["tags/朝圣/index.html","c36b8cde6849e15a8f919e1d23f42fd3"],["tags/朴素贝叶斯/index.html","95d91180ee7ca163cb318215146f8d59"],["tags/架构/index.html","b6c18714681ffa6639ec2aed8987fc4a"],["tags/标注/index.html","fc2fb7603277f215c7b43b865be39f8f"],["tags/校验/index.html","4f276ea52d39c7d9864aaa7482c5287e"],["tags/格式/index.html","b9e900a6b99469e42539bd5a1e0b34d1"],["tags/格式化/index.html","89c738dbd6760385a3a5349d7926c27c"],["tags/桌面/index.html","d6b49d5e5415f8e39754963d8061df6f"],["tags/梦想/index.html","b6936eb936ab742ca0a0674a6b7dc472"],["tags/概率/index.html","8d88ae18db98c6c77f29d12a40aad9bb"],["tags/模板/index.html","23966dec516cdbeece9e95def2c83c20"],["tags/模板引擎/index.html","dd26adc87d80357d18d993af67d793ef"],["tags/毕业/index.html","eaf77ae0c5e27be61966e483c689748c"],["tags/毕业季/index.html","95527d9b6941202b7845df8be8f25652"],["tags/消息/index.html","49b542c50caa106e09c5f6d83c85917e"],["tags/游戏/index.html","5bd2f6618a7a4182cfb59a320fa8f186"],["tags/游戏/pages/2/index.html","80d9768933789aa3c6d939b0ab826e0b"],["tags/游戏开发/index.html","bb332e3e790799a5b84430997c601d5f"],["tags/游戏引擎/index.html","f9db9e1a7af363389623b424fd4a73bf"],["tags/爱情/index.html","abc9a70bb195df49e5a142141c60214d"],["tags/版本控制/index.html","9bbc940cf5446d134789b17d9d3e6575"],["tags/版权/index.html","3874a3cfc9dd24d19bb821747c64ea4d"],["tags/特性/index.html","bef369f7a08bb2254ce3ec94cbd92e8c"],["tags/状态/index.html","fcb27b10c78a6b8c4892e47a68a68f62"],["tags/现实/index.html","7779bd342b65f7e6647511eda4e18570"],["tags/生活/index.html","18d7a48b17f16a3b987922440eb0ab07"],["tags/电影/index.html","12213007ecd000d777c6871e06619f28"],["tags/画家/index.html","d817650cab6a836f1269bd703cec28b8"],["tags/知识共享/index.html","a7ea3bd974dbb29438bf95881750a65a"],["tags/矫情/index.html","a3e8d9ebba5f7a2c37dd33d2c8b73ed9"],["tags/程序员/index.html","20a5f43d3cd08c945bcdfee60221547e"],["tags/穹之扉/index.html","78afb5e9d4800a1243c791a8f50785bc"],["tags/穿搭/index.html","a9fd35243a7d97a8ca38b62a8e533b6e"],["tags/童话/index.html","8f194a8992794cd385cf391798df1a23"],["tags/笔记/index.html","76de02f4a9e40f289ff3545ff3eebd81"],["tags/算法/index.html","0da12d1d6c710fe475b89fea616c6368"],["tags/米花之味/index.html","c10cea27069e5e997488d7896d4a0548"],["tags/缓存/index.html","358f02f9a49319746704fabfc799988f"],["tags/编程/index.html","f1530d00b86b8a2814252ff4d5469471"],["tags/编译/index.html","5155b6301b1e22d9d1a30e0fcb7a7281"],["tags/编辑器/index.html","e3eda27bf7e6e05af1d308165b88f0f2"],["tags/网易/index.html","4d1061fd67cbda4d8388f851e1f3cb0b"],["tags/脚本/index.html","336cb915d091427a535031cd3abd5a74"],["tags/脚本语言/index.html","474e2f7386a474745d957f04cceaf48c"],["tags/虚拟摇杆/index.html","a34f221f7986de63313388ab3e83729d"],["tags/蛋炒饭/index.html","4d1ac4bb6b945474b4c4c75b1d63d441"],["tags/表单/index.html","28af4b19629aba3c729100af0a69e1a4"],["tags/装饰器/index.html","329262e100438f23d0416ce2324f826e"],["tags/西安/index.html","60d8e72f09e69106fbb176d78646c71d"],["tags/计算机图形/index.html","5380e247e0a7f5fa8bfa3fe056bf9d3e"],["tags/设计/index.html","925dd5a734885386e68b5c315be98e90"],["tags/设计模式/index.html","c9eacf592eba7ec2b5de2d91c818eadd"],["tags/访问量/index.html","55410756d5a840b4130271ed6860f460"],["tags/评论/index.html","6878b9b64632a74c31b3efc81380292b"],["tags/词云/index.html","4d55bf3e88fc50b3e980bca42f2b3e77"],["tags/诗人/index.html","f5dd4d4b6799b92782e468060552a9a3"],["tags/语法/index.html","3789ec0ee24c81bbdc50a2dcd6d28aa2"],["tags/请记住我/index.html","503a71c3aef621b00272d127c6dbeab6"],["tags/读书/index.html","6925ee951a4c15430eacc51af2151d5e"],["tags/读写分离/index.html","b8d16e10278bb1277f50bcbe834fe0bb"],["tags/调试/index.html","aa77c7a9aaa8736b521f53b7e62788b3"],["tags/贝塞尔曲线/index.html","09e12bffc17411b26b9b550f075a0384"],["tags/贪吃蛇/index.html","2473525e2ed48dac51245bb46d27e135"],["tags/资源提取/index.html","14864c7ad6d01d7a854131e8fe53810c"],["tags/跨域/index.html","ba81f6da5c3c542b62154b2b868824dc"],["tags/跨平台/index.html","fe0cd11feb51a8ba5b963a0e7d501bbb"],["tags/转盘/index.html","8e07a21bb0386cb1fe81361d4bb3c7f6"],["tags/迁移/index.html","379675db0a50e259d26b419aefdeb0f0"],["tags/通信/index.html","06eed3b45a1db4e5aceec1451d68b46e"],["tags/邪不压正/index.html","411e50e40e86e0af39b11d9340a46ee3"],["tags/部署/index.html","a9559cdadf6adaaff669f770b6ce44e9"],["tags/配载/index.html","7c54cb435596ca51f1e935bce7d4c2f9"],["tags/重试/index.html","5b943d24858a922bd2207281f73fe8fa"],["tags/长安/index.html","88f01c7cc08a4f35a660e83a4e8f8114"],["tags/长安十二时辰/index.html","d47507597bba0f716e7f165215d751c6"],["tags/阅读/index.html","f1053aaf79e8bf0b98b67392a8923d5e"],["tags/阿里/index.html","e0dc91f2927bd7ecd4b5c717ff0f5a74"],["tags/随笔/index.html","d5c882d8ed6f6fdb7d0b7e06472eb084"],["tags/霍金/index.html","819fe3f8d2bbbe82a73c3d7f6743176c"],["tags/青春/index.html","7d597f681081968543556436e04a3851"],["tags/面试/index.html","2698cdd202b4c196ad9e60c089ed3a1a"],["tags/韩寒/index.html","e79ca4ac512e74a06fcd99a695f7e6c2"],["tags/马尔克斯/index.html","dee9885ab0fc95ff06f64f20723a02fe"],["tags/验证/index.html","79033778b4e287de8812897a16e18de9"],["tags/黑客/index.html","a128619f12527b2678f2a1e57a439ab3"],["wiki/index.html","2c340d50eec0e5c9e6e7f26ddb6b09d0"],["works/index.html","808d1cb4029922fa5d94ea70d0b89338"]];
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







