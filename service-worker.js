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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","6afac337f48e2b5b9c40698f55f9ccbd"],["archives/2014/12/index.html","1802c6e4e942ee61d3cdc222fadde8d1"],["archives/2014/index.html","79c20e01f88ce274f191f3679bee0ca9"],["archives/2015/01/index.html","d6c8db00c735604c66d71dad2e17bef1"],["archives/2015/02/index.html","2615a341432e4f1aaeecbc79133cbad2"],["archives/2015/03/index.html","6466a0bacdf480a19b5913a853ece745"],["archives/2015/04/index.html","86bb19f3145336c311c3fc5ad05b20d9"],["archives/2015/05/index.html","4ac5fcde45969e8395f80b0fe0441343"],["archives/2015/06/index.html","f665bccdad26dfaffca2d27a81ad296e"],["archives/2015/07/index.html","21ee8351bd4bbcbae0e9b8d14a2d1e86"],["archives/2015/08/index.html","3d6eee1de061cd35bfe3543f4a5e25dd"],["archives/2015/09/index.html","7cb109721fc4aa1f46a6cf88a95c3b8f"],["archives/2015/10/index.html","996ab97b750857d032d54d31ba5e9b45"],["archives/2015/11/index.html","c83d951fef33bc85b9c38b4c275dbcc5"],["archives/2015/12/index.html","b157d312a5f9d84e4462d0c6c881804f"],["archives/2015/index.html","1e836e2f805639c7cff460b8d81ebdb2"],["archives/2015/pages/2/index.html","2f12d51884aa488ef0aa28c6503d35eb"],["archives/2015/pages/3/index.html","0f69abe1773f3a1506566fc90ce41ee1"],["archives/2015/pages/4/index.html","6e78f0eab37c4912030a93464dfb62b8"],["archives/2015/pages/5/index.html","d0d2cef57fcea8355a4ba5e8f6355504"],["archives/2015/pages/6/index.html","d0e3806188100e9ab836cff6e5510d7a"],["archives/2016/01/index.html","4eceb9ff3d5f06d39e0b3c583da344b2"],["archives/2016/03/index.html","fa3a9fd7369c12b45baef7f3ced30170"],["archives/2016/05/index.html","34cc8b3b5951d6bf220d88427d6ebbf0"],["archives/2016/06/index.html","b9257a8eca312f7ad020a8d10810cf2a"],["archives/2016/07/index.html","9ef42073f3f3b875e5619bf8342ef277"],["archives/2016/09/index.html","839394d0c9096e0a675a7bf94bc1c4a3"],["archives/2016/10/index.html","868b7fe4ff8bc445f27f75d23eecfd32"],["archives/2016/11/index.html","4a6fc26927f9456e1882fbde7cb75104"],["archives/2016/index.html","b869de8ef11bc02164355e130f68fb00"],["archives/2016/pages/2/index.html","e5466f3d1b55c40e61cca0ee7d67e13c"],["archives/2016/pages/3/index.html","fd96dfeffe21b69c9fa9164204e2190f"],["archives/2017/02/index.html","cce606dd723a0bc7efcda8c80c57a407"],["archives/2017/03/index.html","9f14979557e634c26932d093d814b4fb"],["archives/2017/04/index.html","c711e8c84e375c1b72287a0d6a92379d"],["archives/2017/05/index.html","f06c2198f70ebfaa7cd331274126f78e"],["archives/2017/07/index.html","f9d336f7f61ce4acad012037364c04ef"],["archives/2017/08/index.html","0a8a63a3e15117c44e3786ba409aa6c5"],["archives/2017/09/index.html","7fdee2b55eabd4fec78cb61663d268e6"],["archives/2017/10/index.html","752387a7dffa185af1798d92553fd088"],["archives/2017/11/index.html","973f07d490249716a782cf99a2a85fce"],["archives/2017/12/index.html","b5534967e4e919567de0b64a80004551"],["archives/2017/index.html","7874da3ae669aad3fc67e0eb9652eeda"],["archives/2017/pages/2/index.html","8ac74b921850cee98830337f285ed094"],["archives/2018/01/index.html","9881828af8ac3d7035fa275ca9d27427"],["archives/2018/02/index.html","e8c23736190f6cd47bfd136e0040a4c2"],["archives/2018/03/index.html","04e96165eb919732d1c118deb16f4f8e"],["archives/2018/04/index.html","c0411402d900518b0cc734524ff2ab8b"],["archives/2018/05/index.html","649fc4ba6df69e40d492e7ee479bede1"],["archives/2018/06/index.html","969452e57306ef3696fc95df75326d56"],["archives/2018/07/index.html","2d94e9ffc4896a36ee3f5debf1509bd2"],["archives/2018/08/index.html","e745ff61e72075a72620f7f1b41c0e4c"],["archives/2018/09/index.html","dc469857826841871d433af9a1ee0b76"],["archives/2018/10/index.html","a6496c835046dc709bdea49613958ea3"],["archives/2018/index.html","bb0af47e9796ab883efa48e66fba226c"],["archives/2018/pages/2/index.html","59ccf2086eb3878ddb0fc8880dbf1b7a"],["archives/2018/pages/3/index.html","75e9855b6d1157e2db912a39ace86905"],["archives/2018/pages/4/index.html","13ae4055bd659c7c65c5bcbca3cfbd11"],["archives/2019/01/index.html","6d10b0981c53de318077b4008f4fff9e"],["archives/2019/02/index.html","a1aa2661c3804df22bf18a89dce52a1f"],["archives/2019/03/index.html","356b007587dfe6ba403c63bc4d7003d1"],["archives/2019/04/index.html","1b86986a7de3aaa15be6d0e07c0961ba"],["archives/2019/05/index.html","394838ca084766c3f880080aebd45599"],["archives/2019/06/index.html","cf825657d4f4a9f6d3a694f1018df94f"],["archives/2019/07/index.html","57467cac47f9e837ac2d5dd234420acb"],["archives/2019/08/index.html","fc992203efc73e01acc70ad388502010"],["archives/2019/09/index.html","28200ed1cb334923d643d09651790ced"],["archives/2019/10/index.html","dcb453ac494e86fe5f789aaaec656b73"],["archives/2019/11/index.html","8fecb588f4b1fd7eb7b05a889aff6a4e"],["archives/2019/12/index.html","547153e7ec96f0c63f406c2dea8e8ae7"],["archives/2019/index.html","50175e7c596eb9e3220cb2cd8d867af4"],["archives/2019/pages/2/index.html","be2b68da88677e3cff26dac854f79387"],["archives/2019/pages/3/index.html","fc9e54fb5bc1df1960043fb2763af5e4"],["archives/2020/01/index.html","f9a2fcb682711cadba610cba222b8914"],["archives/2020/02/index.html","46979185e267debe52f7abffff67b194"],["archives/2020/index.html","7c9e2697db8c38abe63b13b47cd1c74e"],["archives/index.html","b31cc9f6ca68bf37ce6a9c15d9615300"],["archives/pages/10/index.html","4d50ea6b90f216163d367a584636eb31"],["archives/pages/11/index.html","13df8c832501685fd19e049d5d5eb6f0"],["archives/pages/12/index.html","25c1c97526d0f55a5d122c88ee991abc"],["archives/pages/13/index.html","ce6fbb61f99e3c50befba314d5d51da5"],["archives/pages/14/index.html","de1811ecaeeb266e8f6368e658c092fa"],["archives/pages/15/index.html","f5286e8a11b21da67b2a723761ac1cac"],["archives/pages/16/index.html","ae361f67ce377202802b237eebc02b6b"],["archives/pages/2/index.html","96d5401def446e31b9d5dfa489db4c8e"],["archives/pages/3/index.html","da172e0997f7f62162c3513b419ed4a1"],["archives/pages/4/index.html","158a30be585939fe42749000a65a48fe"],["archives/pages/5/index.html","33d0275a935c356fd69d482526f1cc1e"],["archives/pages/6/index.html","e6ca90ca0bc906ba17669944f5c481b0"],["archives/pages/7/index.html","0f4347958819c0beca353d98fce14cc3"],["archives/pages/8/index.html","b4b3522e29bff6dec55af942d55a8995"],["archives/pages/9/index.html","5a2dfa3d63e0e31f7952f86e429ca9d0"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","97912fa8b499dea1306bc4e1dafaa319"],["categories/Unity3D/index.html","883e3de28dc099e884e8ddbb8c7dcb63"],["categories/Unity3D/pages/2/index.html","37ad114791eadce9b36ce3f4e2cb406a"],["categories/index.html","5f8faafb55abce4b6dd181039808ae04"],["categories/人工智能/index.html","d0421b378a068cda65e1e73d8f51ae97"],["categories/前端开发/index.html","933bbf01f4790b02641cae5f2406ca22"],["categories/单机游戏/index.html","adb46631b40b7a4ad3cf5360a5a8749f"],["categories/开发工具/index.html","8b42ebdec2c2f758c844d7017065f845"],["categories/数据分析/index.html","d636e043a274a16b0b1b4c2b58222c6d"],["categories/数据存储/index.html","4837e7604863af92de5719e0e831bfe2"],["categories/游戏开发/index.html","1d3dda3d12d0aa57dc454b960919b67f"],["categories/游戏开发/pages/2/index.html","f39c742d6770ead84a18abf6d35920d9"],["categories/游戏引擎/index.html","e41dc477f83314b4431b441099830dc4"],["categories/独立博客/index.html","a4c5ca3f5248d553448cf00e324cb64c"],["categories/生活感悟/index.html","ec07b832fa79a9dec9aac47f491097d2"],["categories/生活感悟/pages/2/index.html","789dd855dbcc388b4f175692030ce846"],["categories/生活感悟/pages/3/index.html","ce237e32f7fa9c3fa19c1ecdd7a09db7"],["categories/编程语言/index.html","73f8ec8553676acba08532d64b7419e7"],["categories/编程语言/pages/2/index.html","14c3d93fe72732d3cf0d43b22dd944ce"],["categories/编程语言/pages/3/index.html","2426d3249068e7885f698c865b416453"],["categories/编程语言/pages/4/index.html","d260053519583751abf0166df2914335"],["categories/编程语言/pages/5/index.html","585d0b62d0b78abc46b85b519d379b36"],["categories/读书笔记/index.html","5ba2992eeeb88c44f1258b2632f4f17d"],["categories/读书笔记/pages/2/index.html","35fafbb3ad7e729e7daf417841f145f4"],["index.html","b26a9ecd935bf19090d8cd4569756b94"],["movies/index.html","943139cca256343216455ddfab63043a"],["musics/index.html","ad02cd4fa2a1fd7c499caee83faf111f"],["pages/10/index.html","f9700c0b935867ce272d8338b45cb6d7"],["pages/11/index.html","a92a401457a4f3d006506a767ba053d4"],["pages/12/index.html","75eaae9040ed0d80c649bed43eb400d7"],["pages/13/index.html","1dda462ae324a38c28938590af0f3caf"],["pages/14/index.html","a1c526d2cd80929e6daba2f839f20ff4"],["pages/15/index.html","e46c11eb88676e27a5b352d91772b8a0"],["pages/16/index.html","d6faa3d294700208288e30f3a1b88c6e"],["pages/2/index.html","a99f1ee1c0f374c8dfcb3faf0f06853c"],["pages/3/index.html","00ecfa953f99c2418487f290fbd6abd1"],["pages/4/index.html","c2a739088b6f3ee44c2ccbed42873a79"],["pages/5/index.html","af5ebe652ae072c04602206a71a81480"],["pages/6/index.html","99f6ce919234e24a33670bf8ef586b73"],["pages/7/index.html","7012ac7bc0d479c2d3860b9e9ab1950a"],["pages/8/index.html","81e695556ef73f265e2052e9536f6986"],["pages/9/index.html","20c54935e975f301b3d11fa69c287650"],["posts/1059499448/index.html","c053fcf4690eec8c6a8c337694116535"],["posts/1071063696/index.html","a8ec6c8820cd79c9f54a3abac3580a12"],["posts/1082185388/index.html","922856b0ebdb2d543b075aecbd37e65a"],["posts/1099762326/index.html","40deb930b9f35b15e1401e8e8f5c35a9"],["posts/1113828794/index.html","d6376e15000f458b1035d06b3ce3a7f6"],["posts/1118169753/index.html","3cb9b31405e12b5a8893d46e4536e27d"],["posts/1122710277/index.html","da94159ad42236b634a9df8e6003465c"],["posts/1124152964/index.html","9b844d46e088f1d215ae71462b98564d"],["posts/1127467740/index.html","4ecbb7ae8a846ecc348ed8fd4da4d931"],["posts/1150071886/index.html","8946cdaecc281214495d36d292278a46"],["posts/1150143610/index.html","ca59d7b7d717841e9668ee1613b9ce0e"],["posts/1152813120/index.html","4bd4a1b5789123474570aab5a16f7e00"],["posts/115524443/index.html","f34fb646de38a480d2cf75237708ab19"],["posts/1156673678/index.html","ec7a10bab9a607d1cad303f8cccc3e2a"],["posts/1166840790/index.html","9ea1b986dc3cfe29a99c231cfcb34025"],["posts/116795088/index.html","bb7bf0446ee8f33445535b9650d61aa8"],["posts/1176959868/index.html","7671af94c7fb819f97e0ac893828abf9"],["posts/1190622881/index.html","c6458912881d3c6dd37cce84b131a282"],["posts/123663202/index.html","f06e7d96d60f30df2d50b4b97f03cd39"],["posts/124807650/index.html","46c1ebdded0aa4f99d5023562b7b07d4"],["posts/1254783039/index.html","fbbfb992f2fbd2330a11dd5c8fd8b0d3"],["posts/1320325685/index.html","efb114ff0e32f68f43c032b7198bb136"],["posts/1329254441/index.html","5209f0df1949a10afbeb7e313af26513"],["posts/1357715684/index.html","aae78578826b2478d8650e50e0bf2b2a"],["posts/1358971951/index.html","dbf643becb83385f6b726bf78300a881"],["posts/1386017461/index.html","83b3c903997aa9e3651d28f4e50ddcee"],["posts/1394521917/index.html","7a4fffce956d6695e557f1198149df10"],["posts/1397717193/index.html","0a8c716e5db2d605f5076d0f5cfd2aaa"],["posts/1417719502/index.html","f661db5dedad0f794eb67f9a7deb1c34"],["posts/1424645834/index.html","5097711ce4de2aa622f3cfc7e8475a4e"],["posts/1444577573/index.html","624398155dfe9731f84b783cedbbbcb2"],["posts/1467630055/index.html","da4fbb40362a4711abd6de981f576f77"],["posts/1478979553/index.html","56fee19c74cb145d2469491764a81c1d"],["posts/1540537013/index.html","c6375aec5bdeafd2f247a4621882c01c"],["posts/166983157/index.html","9bbf00da6bfac596b81d808b75e59a8b"],["posts/1670305415/index.html","93f62a345baa1510d86c9cfbe30194c8"],["posts/1684318907/index.html","31f8a0ef4d398430ccc889bebc65e2bd"],["posts/169430744/index.html","429dc15dcf73a149ccd5aec4d520b534"],["posts/1700650235/index.html","718726c334b7a17224ef398312bb1466"],["posts/172426938/index.html","89efeec0de0bf8d84653af701aa052b0"],["posts/1836680899/index.html","0e34e8fdc62ca35a362d2b08c9f2c6cb"],["posts/183718218/index.html","9864c6cbd2edf5998e78593db2ae3f6a"],["posts/187480982/index.html","067d7f71b4a00828a8da40dee5635a2f"],["posts/1930050594/index.html","aef3994a603b2e5b91f9b132501fe365"],["posts/1933583281/index.html","4a704eaa4430a137d97b864114ecbe4f"],["posts/1940333895/index.html","8eff42b9dbfc7f4d02094403262149b6"],["posts/1960676615/index.html","4df6ed37f69b3a4c2c6406fa0e120a32"],["posts/1983298072/index.html","08e4d469c369e08ba0e2f642fb4a2389"],["posts/1989654282/index.html","c46c114d4a800f245f445d0c912b5fb6"],["posts/2015300310/index.html","9c72926b1d065473210a98101f29ddff"],["posts/2038378679/index.html","95fad52e69d07df85019f503d6c2ddad"],["posts/2041685704/index.html","a26bda793dfe051d2bacc60410ecf688"],["posts/21112647/index.html","4e2b769f8f4ed5ea526a1398d51585d4"],["posts/2158696176/index.html","855cb9775e9d8382aaa79e32fb9dde3f"],["posts/2171683728/index.html","ca3dd0f10a70eb57ff929ef88ea52e94"],["posts/2186770732/index.html","55007b9f649df8736e9d6676b43df25a"],["posts/2275646954/index.html","2e5c2e065cdbb9c82d9d40b5a30a311f"],["posts/2314414875/index.html","53a648eaa86d86d61563ba48e399bf2a"],["posts/2318173297/index.html","c050132164994c49c23eba403047ed93"],["posts/2418566449/index.html","ac3ce3ddba5a062361b433d92d35ffc6"],["posts/2436573863/index.html","eab545ff34f450cee58dad3332b4c5da"],["posts/2462008667/index.html","32cfa2b7ea9c9677a2c79bc262f9d9cb"],["posts/2463121881/index.html","2c7d6a2a6daf8c85dd90ff65473f72f9"],["posts/2527231326/index.html","e1b65f67acee6f272d1aa8cbf65fb8ae"],["posts/2583252123/index.html","e33e353c4ea66677208380b81b7ac136"],["posts/2613006280/index.html","2327d4bd0b7e0850f5323b13c75d0878"],["posts/2617501472/index.html","aa2e21f77459114f4657971db5ea3edd"],["posts/2676125676/index.html","fae53c608d0cd135d5deb368de70376b"],["posts/2734896333/index.html","5a3388b50a51fc0b76e19f822d586d35"],["posts/2752169106/index.html","fdb3973b12434494be0ae349c6cca32f"],["posts/2799263488/index.html","dccc3776d4665b14cf93170717d5c272"],["posts/2805694118/index.html","ff0e43cd5454a1f7c3e5e37b633c450c"],["posts/2809571715/index.html","9acc276ceeece5ba6f24ae878f0ff7e2"],["posts/2822230423/index.html","d96f05203e54eaeb31ea5819cdda750b"],["posts/2829333122/index.html","e7d065e93068425a0a31c91255dcd046"],["posts/2911923212/index.html","95b7a7e9c8267eda73fdf9734e2e476b"],["posts/2941880815/index.html","994cdf3636d6cde5f64d6dd8da166c75"],["posts/2950334112/index.html","daa3f3aab73e13af48052424ff98ceec"],["posts/2954591764/index.html","0c9889e1b4b65e48dfc88f6c2321b518"],["posts/3019914405/index.html","b3666f7aae184f7672841c0f87d17317"],["posts/3032366281/index.html","170c0947ca2e3dd0be90259610425e40"],["posts/3040357134/index.html","94bade70572746bd3867a3ef8f3d44a3"],["posts/305484621/index.html","23f429ed046b2435acc5a919f0560f1d"],["posts/3083474169/index.html","1359dfae10361d40e3b300f00aea6d9e"],["posts/3099575458/index.html","7673c173db05f4fd2f73741b1c71291c"],["posts/3111375079/index.html","83c4f64b25f09aa25f7f41c0311fdeb2"],["posts/3120185261/index.html","6204f03716cbc133f23698d8468dd1ff"],["posts/3131944018/index.html","69ef68e30f6d6dc9e09a0f9ea376c794"],["posts/316230277/index.html","8e38165be6c3bfd6a5140a9944982259"],["posts/3175881014/index.html","415f87c3b121aa52b93de36abfc4dac4"],["posts/3222622531/index.html","7d4ee8c05803634598e3f057423a414b"],["posts/3247186509/index.html","a2251149e23a9c3774ddfa6722f19e01"],["posts/3269605707/index.html","fb59dc679e7e4cc04ec398de598be986"],["posts/3291578070/index.html","b5a6fcb725b7a6916755f8f4a02a11ba"],["posts/331752533/index.html","09f9d322e296a2db18bbd271f3d29370"],["posts/3321992673/index.html","8e5ebe935bea52842d64e2cb3155dec7"],["posts/335366821/index.html","2d49579720407e52c6e606701e847239"],["posts/3356910090/index.html","ba0b7f7bf5217977072ee5965faf97f5"],["posts/337943766/index.html","6a2f22e351a790b387c9a8de4c63d64e"],["posts/3417652955/index.html","62c08d25aab2f17cc0d8f7a8a1bfd7ce"],["posts/3444626340/index.html","fbdb0c254e542d4c1a0eb6e1bb92da06"],["posts/3449402269/index.html","e950f1512ba152efc9666a0da262eacb"],["posts/345410188/index.html","b41856759c0d667a50ddbcc21eefca35"],["posts/3461518355/index.html","e730dfdb80587a45d5dcba54c51cc86f"],["posts/3494408209/index.html","675b57219c8b079a14234e808c960bcd"],["posts/352037321/index.html","c95eaba6dc665c385fa5d039e2150def"],["posts/3521618732/index.html","3a34e49187c15959509b810e1a1f93d5"],["posts/3568552646/index.html","c7e0dc3f11148edf2f5a76d13ab2b07b"],["posts/3603924376/index.html","1bd0dcd3f2982b7a66e9c5e372e754e7"],["posts/3637847962/index.html","1fa6872b2f588d6334c2b3b3d393e829"],["posts/3642630198/index.html","676da1fc0a91eb075ff0d9dc3328b90c"],["posts/3653662258/index.html","04068d297cb81bd52a432ebcd8436ed9"],["posts/3653716295/index.html","4f62765b6736ab1179536e4aef15af27"],["posts/3657008967/index.html","e03668175bde5922c8b729f66aca660b"],["posts/3668933172/index.html","61690281ccb64b8e94b46ed4ed0a6f49"],["posts/3677280829/index.html","63cb6bc873a415b50413ab85b0b70bac"],["posts/369095810/index.html","7485d01b95592e10cf5c3d903d6daa93"],["posts/3695777215/index.html","b65f7ff23fc93a58dd52c88f9a5f8902"],["posts/3736599391/index.html","e92929594e6f071dc19b4d6edc345611"],["posts/3742212493/index.html","d98e40d61b00f9736799d1a2c9c70745"],["posts/3782208845/index.html","5f0514658ec055e87b768dcff5ffc471"],["posts/3789971938/index.html","7b1ac8006fff500cbc24dbd8bcccf360"],["posts/380519286/index.html","6bdd7e6863b2d976d9b400e08dcdf89a"],["posts/3846545990/index.html","0b39807620350a1496e0e58d880cc14e"],["posts/3873710624/index.html","58a462e0fefa78d9cc58d0e49c1e5e28"],["posts/3959327595/index.html","f72a9fc4bcbe0833e86ff39604229813"],["posts/3972610476/index.html","8d347ec89e8e33d63c584e4fe3835f0f"],["posts/3995512051/index.html","c83711ffd99898d2b228cc28839c9010"],["posts/4088452183/index.html","a68246ea33a745328aad854a93a9bc83"],["posts/4116164325/index.html","5e2358a3541c2a254ba8976359792032"],["posts/4158690468/index.html","8be941da2e209b316c84ec019a04647b"],["posts/4159187524/index.html","4d21dee1e3f876a6338471c7b05295ee"],["posts/4197961431/index.html","2c6d2cb88f51fdcf03c190c6369f1efe"],["posts/4205536912/index.html","7455a4036c37da14bd1114ea71a2ebbe"],["posts/4236649/index.html","62f7f8a8bd4044c0c5c86f3a491b9c23"],["posts/426338252/index.html","f96adf28787404674f777597c6907f91"],["posts/450254281/index.html","ee78740d00c845f6c85d703ae4d3269f"],["posts/4891372/index.html","f1d19dbd5cdcc60b759915ea0e298fae"],["posts/569337285/index.html","458ed898480f13dd635c2aa3cc58342a"],["posts/570137885/index.html","70df57075769e1826671f4968010dd9a"],["posts/570888918/index.html","af6fbbe14a97c6bbe1ae532180daf704"],["posts/582264328/index.html","bc007b17aba6eed3469d625c8daba824"],["posts/632291273/index.html","349965ef73c1fb438766e442c90eddff"],["posts/70687890/index.html","bdad8ab8b6f208ef1e8b94201b9a7b24"],["posts/719322223/index.html","425f9b33e61b20481050b088aef63db4"],["posts/720539850/index.html","3a38dd721a8a2877a9419e7b875826a5"],["posts/786195243/index.html","830ad57603494ae9b8b07e9e92dd0c03"],["posts/795474045/index.html","bef24af77cdcaa9b2296b7a4636bebda"],["posts/815861661/index.html","12501a48065f70a0b811c6acc70fae2c"],["posts/821259985/index.html","9991e78a60416d755c5679a635b96525"],["posts/828223375/index.html","801917bf36676485edb66a07c8f17fbe"],["posts/887585917/index.html","b927cdc320f7db9e370c63f5fdca6e74"],["posts/888549816/index.html","8a5c5503be944a00f0c030018d703edf"],["posts/906436376/index.html","9120b07f261e7b5ab7dc66dcb770d490"],["posts/907824546/index.html","1f43ce57cb9c9f40a14145a7a03e5435"],["posts/927393529/index.html","e8d20db0fc84e8a11f507320ceb1383e"],["posts/94443781/index.html","aad2896d8c7eee7c8e076757099fb464"],["tags/2014/index.html","f1aa784e8ecd1c2210dd60e5a8a9bfa7"],["tags/2019/index.html","4aac8cc1a15ec14cd066e2934b645729"],["tags/AI/index.html","988ecab8a034905b362217c0346bd35a"],["tags/AOP/index.html","96d059e38cfc8459bcf062d651932d47"],["tags/AR/index.html","46c0dc10c8a4f84dc5a2a1123293ed14"],["tags/AssetBundle/index.html","a5c1e34e82623f7dabc202188f08ea5c"],["tags/C/index.html","46b3d8a19feee22e7431234e04c99f8e"],["tags/CDN/index.html","b10521f31a761c2ad46fa63ce6780e40"],["tags/CG/index.html","90e6f50a1ad5e6e2822729f0afd2f9d2"],["tags/CI/index.html","8a07a6c7b64c3250e15037944e05b37a"],["tags/CORS/index.html","f920b59a34acfe0223250ba5c87b60d8"],["tags/CSharp/index.html","864dbd1e3333d0331277d1f328805be6"],["tags/Castle/index.html","4577032546cdaafbbe50cc9f53072927"],["tags/DBeaver/index.html","594b1f57d9a5fa4850362457ff63c7eb"],["tags/Docker/index.html","ba954ad0b12306970b3379f33e0f8cc8"],["tags/Dynamic-Proxy/index.html","759ed06eda395aa00b8adaf3481bfa76"],["tags/Dynamic-WebApi/index.html","1157ab950d359d8690f74727b560e4e2"],["tags/EF/index.html","6fc3b9e446b5099588203e052a1e91e5"],["tags/ES6/index.html","732f7960fbb9fbcae17969d670f1ef4d"],["tags/EasyAR/index.html","9001c1489eb3b922662a0bf148f3b8a4"],["tags/Excel/index.html","37ff469c6e752a2e394e476fdec1e2fd"],["tags/FP/index.html","b58c281bd97e2ee2d42c151069193ff3"],["tags/Form/index.html","fa1b5d029a7cbb293b5b291c9f842a43"],["tags/Git/index.html","58b139d6214a92ccc0e20db8f2ce2a6a"],["tags/Github/index.html","06eaae9fee5a6c836af013b925825f67"],["tags/HTML5/index.html","7378cc3c76af4deecbb4db9e0762753e"],["tags/HTTP/index.html","36bdf5e1c60abdb06c0fe9bff1894456"],["tags/Hangfire/index.html","2754554eb79112a8c2fe5437d2b55ba1"],["tags/Hexo/index.html","108f406f9e6305b7783e488362a89b84"],["tags/HttpClient/index.html","6a1bb20f51e9ebbfe1a61575b89fc432"],["tags/Hyperlog/index.html","c23eef090f648e653bc2e262d7e6ef52"],["tags/IDE/index.html","c130ed0d370383fcafec1f32a9c84949"],["tags/JS/index.html","bf82e2a7c5c10a1ca6025fd4a71dba8b"],["tags/JSON/index.html","53c57ffbb68e957c73ffc99eac3ae5e6"],["tags/JSONP/index.html","ba758b12697ca5647f4d66ce0184efd5"],["tags/Java/index.html","15004ec0da20ea8fab21f429835b333f"],["tags/JavaScript/index.html","cae1d9f62e3d930ba1e9191b70dd5cd1"],["tags/Jexus/index.html","f8c1459b57ec6cb6f9b3655c3f9f0b8c"],["tags/Kindle/index.html","3f7c9cfd55d1659e9f4d2427f9dd08c6"],["tags/Lambda/index.html","eae31e90536e84970bf742849f26f823"],["tags/Linux/index.html","93d004a2a0ae8bbbb2ae6bb8257a9526"],["tags/Liquid/index.html","f5be15d58d9fa31d6a75fcb1366a3bee"],["tags/Logger/index.html","b3c55c730e7ca3da7e6731132aff6413"],["tags/Love2D/index.html","dc3d2afa709cdea948725bac38b53d57"],["tags/Lua/index.html","8d13fc0bce04c4bb5ffb812aa1037a46"],["tags/MMD/index.html","c222d4ab92bd474e101ff19ae0f9b5d0"],["tags/MSBuild/index.html","a160a7ecca6b580f2aa45ac426badf69"],["tags/MVC/index.html","9b72843207b5fbac08507ee152a1d2e8"],["tags/MVVM/index.html","5950bf8e91579e968c61a30250a2cff8"],["tags/MapReduce/index.html","c7e5dd1dd0c455b09c7008976df3bf35"],["tags/Markdown/index.html","f36b98c87f703479e942fae39a7f1aee"],["tags/Mecanim/index.html","e74cd70b2c9e1d4247b3c2a23c0a3507"],["tags/Mono/index.html","81d971dccf59374a6b43132c56f5824f"],["tags/NET-Core/index.html","f148a4c2ad372a67bbe4c9f9c4d7599c"],["tags/NET/index.html","1a27afefab96780ea9ce52743dad9032"],["tags/Nginx/index.html","0edb655ef1248ddefe43d261195e034a"],["tags/OBJ/index.html","58f1e696332e4a34144cbdfa6c450ff4"],["tags/Oracle/index.html","e41eb059a3792cf9c78907be7754b5e2"],["tags/PL-SQL/index.html","1c5c229912b5e7912ed067d19844ceff"],["tags/POCOController/index.html","7a79973cf0e013d9216127d729a73388"],["tags/PWA/index.html","df2ed47aebd04e9d6b05431be510a2c6"],["tags/Python/index.html","eac3293abfc17a9dae2940c78cd508e5"],["tags/RESTful/index.html","ddb95354adf82654958b6cb04d7586ed"],["tags/RFC/index.html","94befd932683a65db3e635f33940d728"],["tags/RPG/index.html","c3e7cc2e71977513a45df59d509b30ca"],["tags/RSETful/index.html","7a5916b8f2a36188719572b25099fab5"],["tags/React/index.html","f15b1016707a3a501d0f663df5b08689"],["tags/Redis/index.html","2a945c02cd54ae6054724243188aaee9"],["tags/Referrer/index.html","717eea98e6aa76fa75fc26e60284abb8"],["tags/SDL/index.html","eb5ccbaa91e33cfb69d84e250fe65a33"],["tags/SQLite/index.html","b61235ebd31ca199a30391798a11737e"],["tags/SSE/index.html","46cca225c39dc1b71d4b76308155eb1f"],["tags/SVN/index.html","ed110ba5127fd32ab81de8486db8c520"],["tags/Script/index.html","eb0eef7d4275e5f540d24ba5a30eb7d0"],["tags/Server酱/index.html","afae67925497187f3aabbfd5a425fbee"],["tags/Shader/index.html","a6cf7496771c6b0999aee32bec38f5c3"],["tags/SignalR/index.html","7d2fc719f87b9c05d36c884cef7e8d7a"],["tags/Socket/index.html","50cc06035ae15a358506323c1aaa504d"],["tags/Sonar/index.html","59fd67a9f420d2fac7ad660b2fff677f"],["tags/SourceTree/index.html","5966ff0cac2cb4fb87e601417a9a66e4"],["tags/Sublime/index.html","27ce20f466098cd772ff6d60c9516f00"],["tags/Swagger/index.html","349294612394d889fc4ac9327faef6da"],["tags/Trace/index.html","ed4d8175beed11f39fe1064fc761ed6c"],["tags/Travis/index.html","c204edb6f28c10cd5d307db138162fb6"],["tags/Unity/index.html","f75dbc3d4572e033c642bf31a8d1d3df"],["tags/Unity3D/index.html","a3627fef3053fb8e755b57638ce43d57"],["tags/Unity3D/pages/2/index.html","a42f0e41268ebd019bb20f21c05f2c61"],["tags/Unity3D/pages/3/index.html","cfa78306f9e9f5e46b1c4b8b27b1e529"],["tags/VSCode/index.html","ae0837c77a64cbfb1b11671a89722e38"],["tags/Valine/index.html","57c99e1205613f5de3569e7545a3f891"],["tags/Visual-Studio/index.html","b3172ab164cefafc8a17d4bd385bbe99"],["tags/Vue/index.html","a71f72fd7801a23b9bd8a03d682626d2"],["tags/WSL/index.html","2794210df71d9398b876b796ec5244bd"],["tags/Web-API/index.html","f1729abf9f718ed0b4dc8fe1d269e626"],["tags/Web/index.html","9c1e701b9252882212e754c93d4a2d62"],["tags/WebApi/index.html","7676d4d9d5f552da1f4e0b04721054b0"],["tags/WebSocket/index.html","094d245ae810cc02f8e4ad90bf53b3e2"],["tags/Wechat/index.html","f7558a0d7912130bf889f65e5063e88e"],["tags/Windows/index.html","bcbbfbbdd700153672b4e1325963687a"],["tags/disunity/index.html","becb297ee3af236589569c744d87a911"],["tags/index.html","1727e333afabf7ab391e170584a9b446"],["tags/matplotlib/index.html","ed963df787158ebf8e45d258859974f8"],["tags/njsDelivr/index.html","c4431f6964a4e10bb04d0ebe31363e05"],["tags/uGUI/index.html","3b467c166786b4069e45eec159b14cc8"],["tags/zTree/index.html","907a0a50959ae823f43d96067325bac4"],["tags/一出好戏/index.html","76655c82a389fbabd8af277bfe126378"],["tags/七牛/index.html","6efe1039a072edf42be32ea30583c57c"],["tags/主从复制/index.html","1cf87837c918edc3944e77a7faba94bb"],["tags/事件/index.html","36cf9e7c4bbade3263b6c13875e799ec"],["tags/二维码/index.html","b7a0362707a9b5258b115b64d4ca680a"],["tags/云音乐/index.html","c12e77d20999d3ef44a41f4fb8a32048"],["tags/互联网/index.html","0ee625d79462cc93adbfeae61ca53244"],["tags/亲情/index.html","cf70c9d15e19e06f52f89ed7fba3e31f"],["tags/人文/index.html","8dccc20b682e9dfbd0408d62842b4482"],["tags/人生/index.html","242a451e9269abece5154432083eb7b3"],["tags/仙剑奇侠传/index.html","9a491dbac1b7bf1bfa09b8a951dce02e"],["tags/价值/index.html","acd91a59d7c1dc4a43eb16e19517f2a0"],["tags/优化/index.html","89035a09957f2abeb843e20f663a88cb"],["tags/全智贤/index.html","0a2b35a4fc4c25a1ef52cb400e1e798f"],["tags/公众号/index.html","db6850bef637f4ed63f311fceaaba9a0"],["tags/关卡系统/index.html","37214d7bdef41e3cdefc762547583750"],["tags/函数式编程/index.html","8852bd93e7ce00695d3d4eb7be49e2aa"],["tags/别离/index.html","5ffda9f1b3e3c825620bd597788f2289"],["tags/前任/index.html","b370580b134fc57980127750fa6e5580"],["tags/前端/index.html","e2dcaf7871303d0403ac07e4d8a1b062"],["tags/剑指Offer/index.html","2a3538d211f2031d49629fbf0418f554"],["tags/加密/index.html","b7615c5cd1e7b0505d46853c940c0648"],["tags/动态代理/index.html","f03e6fb9c0162f20c28071662431cdb0"],["tags/动态加载/index.html","bb1c6c93eefdaa7dbb8f11f76e18527e"],["tags/动画/index.html","5e7a42cdbe48ad4e3a9130f58655dbba"],["tags/单位/index.html","eee6b6cac83b58ba2b1e7b1947c695ee"],["tags/单机游戏/index.html","1a9ebfa34654ea391ec31d23be025daa"],["tags/印度/index.html","115c8345d2532adbb93bf3fc4dcde37c"],["tags/历史/index.html","32cec6a1a04cafc98d22df03288c78ca"],["tags/反编译/index.html","918074bd7315d0f9d25652bf8ce74ab4"],["tags/同步/index.html","1ac9e698c65f66db3ef9ffd53793cf5a"],["tags/后端/index.html","b8149f4e800d5728e758b1611b287fac"],["tags/命令/index.html","3d5628251a0001bb350878c0f7caf008"],["tags/和平/index.html","963d126a0df8796aa7bd9b385d1f903c"],["tags/响应式/index.html","64971e0321c1c8d8882baa682ff53976"],["tags/哲学/index.html","ad621a9085d18e8aee8bfc51636fc79e"],["tags/回家/index.html","6801f93a7b7f3c9ea32af81525fb1a9d"],["tags/回忆/index.html","ded62d43bd9229e43e6b8ea5afb0f7d1"],["tags/回顾/index.html","94c99ae81869ff58405f69116f6fb5f1"],["tags/回首/index.html","fb95661b1c3bd39dba0fd5932f804c9d"],["tags/图床/index.html","5636e34106e63657d0444bc1cfd58c80"],["tags/图形/index.html","b5d29e814b33250f32d0c5eddd3b3e19"],["tags/地图/index.html","7b735872e6f939718ea940a08e138a3a"],["tags/塔防/index.html","58db061a08fa4c20973614e7ab8426f0"],["tags/增强现实/index.html","364159d990896e9b96fcf7e8adc42628"],["tags/壁纸/index.html","42a9f27506f4ce099654a7afe75514bb"],["tags/夏目漱石/index.html","882bffcece4cce0bfa6cc2c2456f2336"],["tags/多线程/index.html","508a7d3f7b39acb4fa7f719d2c8db39f"],["tags/大护法/index.html","46b5e9d5895e78828e04ff7672676cd3"],["tags/委托/index.html","fcb84ad8abbd6e7fbeef5cfcb731fb29"],["tags/孤独/index.html","5b31a3032c491d7d751fa55b00c6050b"],["tags/展望/index.html","b5b95ae40c462cc157fe822c9747d250"],["tags/工作/index.html","0086d6de647d0b3d83ee6853d0b5e883"],["tags/平凡/index.html","1e39c72294984a577bf90e6406d3e24a"],["tags/年华/index.html","b2176366ce2fd29d5c678d8487284627"],["tags/年度/index.html","86b64a106cd8d7f659b5db54f5fe4ffb"],["tags/开源/index.html","f78ac4338307d0b0b511d23f9bf82e82"],["tags/异常/index.html","015cfd281c70a096e7f83e34b3266a59"],["tags/异步/index.html","7fde7089de41250be92322dc6f35a286"],["tags/引擎/index.html","66b409238797fd1bbd1cfb2302125f7b"],["tags/影评/index.html","c310efecbf8d7d7f2b4d1c0cf9de37fa"],["tags/微信/index.html","3502b8843feeaabef2915a8e6a0c00fd"],["tags/微博/index.html","4da26d6a5369b6156f466702c73cd55e"],["tags/心情/index.html","be0944294f6f3ddde5b68c192db494d3"],["tags/思维/index.html","208db053193783aed220c70c9214a56c"],["tags/总结/index.html","e846a8ebb32c602c4ee3211fa5429de0"],["tags/想法/index.html","229dc0ffffcb1880a197cc667c2c1ad9"],["tags/感悟/index.html","56f112c4027e4a1ee9abafbab1092bff"],["tags/成长/index.html","fea4c7d22394e8157ba3bd5fa824b607"],["tags/我是猫/index.html","7fe3897c493c46d33ed7bb5c4165e98d"],["tags/扩展/index.html","3679287945bb7ea89c06e789b2646efe"],["tags/扩展方法/index.html","4013a428fdd816fdc4a20f0e7930e3e6"],["tags/技术/index.html","9bb2ec5ebf05197afdf7ee43eb059516"],["tags/拖拽/index.html","22f236650a87d4350edc189453dd3cfc"],["tags/插件/index.html","a1cd88c4ea844aa7a86c6eb21392d89a"],["tags/插件化/index.html","b16d515b9a43b3b88e087c9914880c42"],["tags/数字/index.html","85f692043e1c47bfc37db56cbe1ceb82"],["tags/数学/index.html","7533e982e48fd9fb531cf062b78d3002"],["tags/数据/index.html","a544e94778e6df058e3351c3a9ff229c"],["tags/数据交换/index.html","9f46132aa551bc0b52116c5b2ef43a11"],["tags/数据库/index.html","292ba64ebced1ecd9cacccabd01a70f4"],["tags/文本分类/index.html","080b400f41ef0f971b490446cb94aa55"],["tags/无问西东/index.html","a7ebbe96e91eb444843c28f4622e9b65"],["tags/日剧/index.html","a07c5d9575cbe38f58bbc307154cae3b"],["tags/日志/index.html","9b3a92eced5a1281a8bb8e62e9904a7e"],["tags/日本文学/index.html","7a28e77afe2a7f780b3eff4bde5f79cc"],["tags/时区/index.html","0f1a4bd22828e8f14a5b2f617790f702"],["tags/时间/index.html","c7eecb52c11985f6b1ac5bc52567092b"],["tags/服务器/index.html","97e93cb275758e40ea8f6cc4313b8797"],["tags/朝圣/index.html","65a226f19d27a4a3ed9e2225311cd611"],["tags/朴素贝叶斯/index.html","fe0ecd669f4359f95c5f779e3e9231a5"],["tags/架构/index.html","6bea1164f51f863e79901e2116e6be2d"],["tags/标注/index.html","7b75374d5da7a22d5e07e42b31c354f6"],["tags/校验/index.html","a768924f9bbda3f477eef000758193ed"],["tags/格式/index.html","323c30d514d572544bd3b3b781b2ebce"],["tags/格式化/index.html","cde7894dd51698eaaeee251f9af6446a"],["tags/桌面/index.html","b103256d54b530ee911120258c1effd5"],["tags/梦想/index.html","2e37d14718be1e1ebd46a5188fb869cc"],["tags/概率/index.html","865f67ca3a428bdaffd6a799a37c5652"],["tags/模板/index.html","5a29fc8777e0f3ed7870450f454e1ffa"],["tags/模板引擎/index.html","2efcc1a713884b397bb54e288cc6a578"],["tags/毕业/index.html","8a58f41670a4f8d29db6601d4cadbf90"],["tags/毕业季/index.html","b794a60da6a98697457fc2dcdc61c153"],["tags/消息/index.html","468be4ed2134161f3aca0a17e2bd264c"],["tags/游戏/index.html","88c1f5a37936bed9f0e6dea3aed6f760"],["tags/游戏/pages/2/index.html","7bf0579c0dc204eb7ec60905df3874d0"],["tags/游戏开发/index.html","b860703d637002ba599dfb91e0078054"],["tags/游戏引擎/index.html","540ede96e0928735141785e9e7157c9b"],["tags/爱情/index.html","1e686a78d66ba1f7cc77a83cf4c23f86"],["tags/版本控制/index.html","37a792e53d9a0c1163ba2ce689856da2"],["tags/版权/index.html","696720ab645ba745af9980b2cd2daf4e"],["tags/特性/index.html","dcdbee230d06669c46056b3d21a86eb2"],["tags/状态/index.html","03746152ac906a3310eaf2a87824e96a"],["tags/现实/index.html","0014a12aae6a11ffa1d636a2ce92a7dc"],["tags/生活/index.html","339f4ec71f317e2279786b11b251f167"],["tags/电影/index.html","d5100047a683ffe7ba90049caf1a551b"],["tags/画家/index.html","93005eee07279fcfec609fe3d85b982b"],["tags/知识共享/index.html","bc8ad247959b65034823cd2da11701ec"],["tags/矫情/index.html","9de7e4a374f135098efd39f9f00c71f5"],["tags/程序员/index.html","9680a373af573aea69f35741bb2dd45e"],["tags/穹之扉/index.html","1ff258897e8850ad635770976d682a3f"],["tags/穿搭/index.html","e88f95572a2a575956739d9425ec69d4"],["tags/童话/index.html","cb0a0f310f501a9da6925814f3549350"],["tags/笔记/index.html","0c8ee9c37e6e5893bf5d393b09f9853b"],["tags/算法/index.html","391432b6516f05a9d2ee9bcdebfaa4eb"],["tags/米花之味/index.html","4b21831e950c4109f966893223916881"],["tags/缓存/index.html","2a3469c0f32e96565b74da4ca2c6b97d"],["tags/编程/index.html","6337b6f92110b3579d5090bd3706eba9"],["tags/编译/index.html","8faf12d0949af5bab5ea6517ee484781"],["tags/编辑器/index.html","76cc1a1c04369791b10c0892c81ab0a7"],["tags/网易/index.html","c3a7e311b84503025b8f6b653b0bb197"],["tags/脚本/index.html","80c5bdb3198bf1965941310d05612cd1"],["tags/脚本语言/index.html","a2304662e9c7ea3296ff1e243c7e38cc"],["tags/虚拟摇杆/index.html","fa2bdbe253a749bf7a88fe16bb21c151"],["tags/蛋炒饭/index.html","146473276c8ce599484582ee69d75a16"],["tags/表单/index.html","e13697d50d3adc64222fa49a3c69e988"],["tags/装饰器/index.html","8ba7c52bddbaa90e0acbc25659cd01f7"],["tags/西安/index.html","2b266b73c3808c6499b148691489ccd6"],["tags/计算机图形/index.html","f9fca1dbca988617924f7d9c55d992b8"],["tags/设计/index.html","d0202c6a86b7f486662ea01a0474c472"],["tags/设计模式/index.html","7cbb253af8098096547093cfcfd9a2c8"],["tags/访问量/index.html","89d26d7928a07279ff915bd3e989e49d"],["tags/评论/index.html","a569f6112f09d48c68aacc5936bfbc24"],["tags/词云/index.html","884d5862ef17483fd651e64469639cae"],["tags/诗人/index.html","d55463cea0c81781ad87b2406c67b114"],["tags/语法/index.html","faa0b3e8d2ce157df36de327b95958b8"],["tags/请记住我/index.html","0e92c614dfabf563782cdb4197ca0085"],["tags/读书/index.html","2a46ceb784e53eb4538b4dc0e0878a5e"],["tags/读写分离/index.html","416af2ab18d9e50ba977f3bc153dd34f"],["tags/调试/index.html","38ab732d3b77bb259964149c8990331e"],["tags/贝塞尔曲线/index.html","f8b31cad0f2579df12d03860e66bb2f1"],["tags/贪吃蛇/index.html","83a412619aff1d756fb75177602041aa"],["tags/资源提取/index.html","1e30a48b38e7dade8123df7f2257641d"],["tags/跨域/index.html","0e78014b9f1ace77d42877d6fad20dbb"],["tags/跨平台/index.html","b5e5f2e6f44ed9e9998f743915ee2596"],["tags/转盘/index.html","8fbf805a2bca0684d0967d9be2126108"],["tags/迁移/index.html","a5e42db3ff5d263687b0c3ea4ec756c4"],["tags/通信/index.html","af492ffed4f31f2836c4b1d77880e045"],["tags/邪不压正/index.html","4cd7aa5680d573e90005602e4de10e45"],["tags/部署/index.html","cbc1b588d6f66ec0c23810df84fe92ea"],["tags/配载/index.html","355edce631d89a6b2b8699bb4b1ab77a"],["tags/重试/index.html","cd1e7b1490fa80fad41c25e1a803d034"],["tags/长安/index.html","57fd8471d55ee160ca0ca70a129500d7"],["tags/长安十二时辰/index.html","48943d31230eb4d043b56e2a56d26f8d"],["tags/阅读/index.html","9308e64eea9d3043c027e7e5adb06592"],["tags/阿里/index.html","2d8dd1e508666f77d8581697da99c1cc"],["tags/随笔/index.html","deccf75fdfe47b0aa7001ff6ca4eb7df"],["tags/霍金/index.html","cbb6df4d5c8ea6bb65a40a202570f806"],["tags/青春/index.html","afd6d7d340b1d7202aba97285f6264aa"],["tags/面试/index.html","b715e6d3316a5460f0837437222207c5"],["tags/韩寒/index.html","9fd39eaef9e960caf33589f88646b6d8"],["tags/马尔克斯/index.html","7cdb7eb8ae45adf94491f55e8c582893"],["tags/验证/index.html","521e26467d02b5b360ba1eaa71dc8539"],["tags/黑客/index.html","80f6f01d8221d5b46e39deaa8b3541d4"],["wiki/index.html","d2706c632f4737ba84fe1bb83c0b9fe3"],["works/index.html","5e3d4281c40a81b77a2048d883093a19"]];
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







