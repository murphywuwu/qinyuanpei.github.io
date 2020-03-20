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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","30a258b41fb5c3ce107ebd2e0063b25b"],["archives/2014/12/index.html","4f319b5c34501ac1526d20e15c1d9b29"],["archives/2014/index.html","4189bb230b82ec2c57271a868032004d"],["archives/2015/01/index.html","e5ed1906b17d8fbaa12f26553282af9f"],["archives/2015/02/index.html","f0d9b5f2634646db1cfe6e70ae1a8a52"],["archives/2015/03/index.html","06cd97e464784d0c0318ea4b733be9fb"],["archives/2015/04/index.html","95062e60a148b0df3189a30e24f7dd0d"],["archives/2015/05/index.html","cf02b8ed3dd689d588f5aa5322c2c86a"],["archives/2015/06/index.html","10c0c1fb88c96d2c539e25812acfb22d"],["archives/2015/07/index.html","6d2b6b23080d1f2406b149c0c862d903"],["archives/2015/08/index.html","7fd2d834fc07876f6714beaf58720aca"],["archives/2015/09/index.html","4fb4dbb60dfad2d3e1da8307553ae6f4"],["archives/2015/10/index.html","846b572208ee273135fdaf65923ad760"],["archives/2015/11/index.html","e1a9cb8970638acaedbe148084342e85"],["archives/2015/12/index.html","a677d0bc88d1446903699facf225edb3"],["archives/2015/index.html","02727f433b732931c33015567d89b37b"],["archives/2015/pages/2/index.html","5d6507d24d4507ee9c3035b49d390802"],["archives/2015/pages/3/index.html","8cca225f700ce98e295102ae9aa0b4ee"],["archives/2015/pages/4/index.html","e5e6c6ab33ca91dee1086296eb74be34"],["archives/2015/pages/5/index.html","dad9088a6213ef344bc4ba415d1fcea4"],["archives/2015/pages/6/index.html","d34d118ea478c75f74953c052b72de3d"],["archives/2016/01/index.html","3030a8f8fb591c3d96b6eb09a590c654"],["archives/2016/03/index.html","77ce90b91bf1972a80bddbd2fda8e728"],["archives/2016/05/index.html","561452898fd4817c0a225c49210d7596"],["archives/2016/06/index.html","2656bdcb26fd4c2c8ee3b2a558fc5e7b"],["archives/2016/07/index.html","d279525064b5159ef524fa8d9c846bb1"],["archives/2016/09/index.html","c568c817dbe56fa7070bcadce0010b86"],["archives/2016/10/index.html","b345fe660f156834387adbf467ada937"],["archives/2016/11/index.html","3620b050bcf055463931bf3d02e35179"],["archives/2016/index.html","7eb9c58dff3cae3a842c391904bd235e"],["archives/2016/pages/2/index.html","e2a39543b8d33bf29454213c168210cd"],["archives/2016/pages/3/index.html","c8c649bc5790713ef1485ddfa32cccc8"],["archives/2017/02/index.html","4286aa315c9279bd975a0baacdab7eb9"],["archives/2017/03/index.html","f21c052fd3386f6773b1bf5251577211"],["archives/2017/04/index.html","2fee8f514d17c55625e0aae130d55444"],["archives/2017/05/index.html","96ef089fad191d4990564e158542591d"],["archives/2017/07/index.html","a3580b3ebf7b19500db455e8e2cf684b"],["archives/2017/08/index.html","2eb346a70f6e31102d3688d59936f7aa"],["archives/2017/09/index.html","0155632006d091fa06fe0d8b821061c4"],["archives/2017/10/index.html","68615e3d2286de8bcf762d71738e1752"],["archives/2017/11/index.html","63b4299773cb8e373a857568b930fcf1"],["archives/2017/12/index.html","a2cd90ae5657e02901ab1deb9aa6282f"],["archives/2017/index.html","8330b2aaa3b1f207117a7c62cbae4ea5"],["archives/2017/pages/2/index.html","8daf71a38d7adbf46a6b6199352240f1"],["archives/2018/01/index.html","ac485279d70c831bf9fd6a48b1d93976"],["archives/2018/02/index.html","858ef1c5b436b3d714a24125787c4813"],["archives/2018/03/index.html","915f73049099676be9c9c6d4a4b5f8a4"],["archives/2018/04/index.html","9112eacca931c10b0054da56f5bf8505"],["archives/2018/05/index.html","3f69b11b8fa44bfeb29b1149b006607d"],["archives/2018/06/index.html","5cbb4f6c970f81f9ffb161d730e0dcc9"],["archives/2018/07/index.html","f5782416de2bf92e6c83c08638ea2ea4"],["archives/2018/08/index.html","c3d4fd99efc3b419374b98b9ae9cf6be"],["archives/2018/09/index.html","426d5a634939324e1e26013893dbb1b4"],["archives/2018/10/index.html","da199eb584ac509b14f25aac6c5c49f4"],["archives/2018/index.html","b0c81cbb6520d1e466b2bf3fa1169f7e"],["archives/2018/pages/2/index.html","ee2ac00274534a68b4979653f4db9e74"],["archives/2018/pages/3/index.html","ff220f5f712d99dba8313c0881c0d023"],["archives/2018/pages/4/index.html","439255b6261081aed6ec5098129f3ea2"],["archives/2019/01/index.html","0c2ef9d0433611273005793477cd2ac4"],["archives/2019/02/index.html","03df6ddb0c025da4627f9cb1935c664f"],["archives/2019/03/index.html","d0899b97adf28fec93b7877020da183c"],["archives/2019/04/index.html","2c524067269935674544b90744210dae"],["archives/2019/05/index.html","189c7ff5eeb794c9bb34ede510c82d83"],["archives/2019/06/index.html","21962b2efa01b251cbd46a2905a26a65"],["archives/2019/07/index.html","370dd67628ad7742460706c7d3c5ee0e"],["archives/2019/08/index.html","32bc1ce8d24e391b187887bc62646c81"],["archives/2019/09/index.html","ba3c0eb02abd62e14749e6df7e95ea9a"],["archives/2019/10/index.html","53bc59806355aeb26712723815d2b70a"],["archives/2019/11/index.html","ccda990f120b3e64707532e3c29a9b98"],["archives/2019/12/index.html","54080b146520224a3d97052549012697"],["archives/2019/index.html","a40fc6f72041b06a579c0ab6c5ce0eab"],["archives/2019/pages/2/index.html","d21f05de1d9a7073b7be2f47308bfd6d"],["archives/2019/pages/3/index.html","998d060136fa9abc19934eac0355e375"],["archives/2020/01/index.html","92c83a0b5978ca0146988c763bc16a67"],["archives/2020/02/index.html","d1d4a0ed773ed5b6c97a0d4537586d66"],["archives/2020/index.html","cbca681e668945d1f19834aaf2dd196b"],["archives/index.html","7cbeb9ca02f1c4604d5f1ec0a7b173bf"],["archives/pages/10/index.html","14778e2819a6a5a301a2e451c8f5440e"],["archives/pages/11/index.html","272233a3d7b82907d4586ca001b2d3df"],["archives/pages/12/index.html","3d987f50c5e9a8060f50e9a8f3edcf75"],["archives/pages/13/index.html","08c030371e636938b98032f29e3ecd5e"],["archives/pages/14/index.html","8800cc8f1a76d448a8412476c14f172e"],["archives/pages/15/index.html","95775b08020559b3930759e8b9d263e9"],["archives/pages/16/index.html","b34a312f485d427c00d46e703e7bea34"],["archives/pages/2/index.html","d17094a0b8e42f659c46e5ce3c38ad04"],["archives/pages/3/index.html","a6594606cd570541514298ec67863856"],["archives/pages/4/index.html","d3a8abc57d752a6956ad5002156db010"],["archives/pages/5/index.html","a929690aba6021bf150013441f5b531e"],["archives/pages/6/index.html","217aedc8b665a15c349bc98866b074b1"],["archives/pages/7/index.html","c25292ad2bc4f2bbd49f24448435ba89"],["archives/pages/8/index.html","59f1722fac7d297e8f1b2cd3850c6116"],["archives/pages/9/index.html","1336afd546aa1f01ad09cefc351e5f14"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","abd3bbca88c850a1e26d5214dd238fba"],["categories/Unity3D/index.html","c5626d8b8330370c45db6ed31f9a90e7"],["categories/Unity3D/pages/2/index.html","21f9354f16190f9c2c5c247a60a82573"],["categories/index.html","9f83fd7d3668b06730559190565ee041"],["categories/人工智能/index.html","587ad2cc4c1cdacac5b7425f14686677"],["categories/前端开发/index.html","c32408d799ad755d77ec0336d79abcf8"],["categories/单机游戏/index.html","a4048376e3bd67680b24c0969bde7100"],["categories/开发工具/index.html","30a3e18ae2088ab740c9a9f4ae3040cc"],["categories/数据分析/index.html","bb29d5da63a171e1bc9e7fe474179b99"],["categories/数据存储/index.html","3fe9c6d83bd4afdebc12245486151295"],["categories/游戏开发/index.html","a7071385311e014401ee6bf09cb774b9"],["categories/游戏开发/pages/2/index.html","27597946f527101379f47630ec65eafc"],["categories/游戏引擎/index.html","fc6bc4144d811e1ddcd94ceb5c4dd0a7"],["categories/独立博客/index.html","884a0b693f959038f5e2afe6d712873a"],["categories/生活感悟/index.html","381d88954cc9b21798ccc40f8f3511d3"],["categories/生活感悟/pages/2/index.html","59a4e202abea896efc3b68baeca87f69"],["categories/生活感悟/pages/3/index.html","f39d93332880c6f74b705ae496f694ff"],["categories/编程语言/index.html","eda797d5b00c25afe5e04283013658dc"],["categories/编程语言/pages/2/index.html","4b90c8cca8225684157ca1cdd99d95fb"],["categories/编程语言/pages/3/index.html","c0873211309bf69152ba9a7cb8d92526"],["categories/编程语言/pages/4/index.html","fe4012718f7007033b10411b82b1d1c8"],["categories/编程语言/pages/5/index.html","16ed5fe8600b43e3a6d73ea5148c2960"],["categories/读书笔记/index.html","0f1adea83c646813e9aa27e983bd2da3"],["categories/读书笔记/pages/2/index.html","1505fcc453066262ba83b6c37362a7c5"],["friends/index.html","82314a1a6eb7d07fd2fefeefb0178010"],["index.html","9e8a9115f58fe58d7d20ec1bc07457eb"],["movies/index.html","53c85eb5117f8d5aaaf7bdc1aca0093c"],["musics/index.html","ff2b87f07e09102c161f6f591dc2823b"],["pages/10/index.html","4ca419e06d8dbc5e7b865580c79a6fb9"],["pages/11/index.html","6b7f3be35834b028ed2b0e235210b871"],["pages/12/index.html","1ff295be29d1da71213f8762188d0f41"],["pages/13/index.html","7c62278b1007769772c7aa7377eebd0f"],["pages/14/index.html","b9ea26d1863b26dd3e2760506afeafa9"],["pages/15/index.html","c6f9572dbb79f57d451048d81d2216b7"],["pages/16/index.html","3de8004ecc743baf9cf7afa4736806db"],["pages/2/index.html","0e4ce2657f4f1f8b741542fceb913fb8"],["pages/3/index.html","cbb88b190b8098c17073e33cb01161ae"],["pages/4/index.html","7400bb578f2158ed88cce99f474242ce"],["pages/5/index.html","7822d213cc17b522531e3473f03a20ac"],["pages/6/index.html","9ddf0895eabc2d326232b61f5cad54c0"],["pages/7/index.html","cdd862666bd2239eb0f6da2e57352310"],["pages/8/index.html","d2387aa070f773689369daa302bdf9e8"],["pages/9/index.html","20805f7cc4007ee8d1f88352260967a7"],["posts/1059499448/index.html","de96120eb060949ce71613c9e5f2a2e8"],["posts/1071063696/index.html","72bd63f1bb136220e6ac1bb95389b5b1"],["posts/1082185388/index.html","add8b059164321fb4ec52936ab1583c8"],["posts/1099762326/index.html","6726442833772faeb95311fcddb6ae21"],["posts/1113828794/index.html","6ee5968ad2c4b503f337a2b4357eb3fc"],["posts/1118169753/index.html","19c00b389bb0f969dc542afc5adea45c"],["posts/1122710277/index.html","de1731535bc23aa4f97b4cd9191bfd35"],["posts/1124152964/index.html","24578bf5fe3b39fe25438f6675e4b8c7"],["posts/1127467740/index.html","dcfb003d636e63ec8f77fe157453c207"],["posts/1150071886/index.html","828b419ee7418cd3c1eb140cb8a641f0"],["posts/1150143610/index.html","08abe41145a9cec0ac784afdaafbf937"],["posts/1152813120/index.html","3daa73c11d8d97f827bf69ea1abe1f67"],["posts/115524443/index.html","5b19e9f9037770e25fc1bb7797c8cc93"],["posts/1156673678/index.html","5ac5d228b1e2651f73988b3abf216ae3"],["posts/1166840790/index.html","ae7800e317458e177ca87aecfcad1924"],["posts/116795088/index.html","5f04372ae64e4317f20f8b2221a0c946"],["posts/1176959868/index.html","365d1406474af730903c16e02af9d5b2"],["posts/1190622881/index.html","fb0d5ea208c9be4c255bf02fe71380df"],["posts/123663202/index.html","3904fdb8571dcbbe71fe38e0d8b127df"],["posts/124807650/index.html","d2b5380c91f00cf0fa4ccbd4df9383d6"],["posts/1254783039/index.html","7e947ece81db4923750fd64435389f6e"],["posts/1320325685/index.html","5ae177cc18eab4d9d45b4362553996ce"],["posts/1329254441/index.html","3e0b1850db0fff4592910d2533691e69"],["posts/1357715684/index.html","1669d32253eaf5dace083d017cb205de"],["posts/1358971951/index.html","25881ec948ef153f6687f79114184963"],["posts/1386017461/index.html","e52003eed10aa002c2ae0cb14c2c7978"],["posts/1394521917/index.html","ac2431f7b1645ed7b750b5c8ce3b0034"],["posts/1397717193/index.html","7fa95f08dbda4e6aa01a7a7c387708e6"],["posts/1417719502/index.html","3a4684fa1f369e734a85302e44e4a233"],["posts/1424645834/index.html","d11407ccfd59404d88796be59f1a8fc0"],["posts/1444577573/index.html","526152fa87f1c80ed69e9aeb2f5d82f4"],["posts/1467630055/index.html","5867ac9ecd52928f2964a81c57bf4e15"],["posts/1478979553/index.html","55ebb96e46c4a1a597637796e8e908a5"],["posts/1540537013/index.html","024beff6389c07b992e1e9dadf59e9c8"],["posts/166983157/index.html","b75cff769be8b309f686c609105c7596"],["posts/1670305415/index.html","4ee6eb1294f695c5feb4bae3977e8a99"],["posts/1684318907/index.html","9a8b5a5250da71dd409dcdf82e542d7d"],["posts/169430744/index.html","ba1d56fdfce2987f7046fa895f0a2def"],["posts/1700650235/index.html","7018f7decf91d8dbef831966aed3531e"],["posts/172426938/index.html","9a9dda9166d741299d1fca303a45a9bd"],["posts/1836680899/index.html","e1e4d400751c2869f8881874263dc719"],["posts/183718218/index.html","d859b607aa73c6823787854d20f0ac9e"],["posts/187480982/index.html","d5376af34b94f9b91e7e1e4cdb836e44"],["posts/1930050594/index.html","de4205cdb5a5b9899429118790c42299"],["posts/1933583281/index.html","8244fb93a8ae1564c07ad413b273fece"],["posts/1940333895/index.html","d18869a62a6168b733ec7f3566eebc72"],["posts/1960676615/index.html","d53338c7306dd634c5aae826e8a11df9"],["posts/1983298072/index.html","9fe04080a75b87bde1a4412e8122ca72"],["posts/1989654282/index.html","15aab6c80914d75732ed3a67b299a182"],["posts/2015300310/index.html","8dcf6873e407bab07b9723602bb019f3"],["posts/2038378679/index.html","b6564165e04c30247b9c80b866fd19e7"],["posts/2041685704/index.html","cf9bc57fe6a7379d5ceef3f3bdd66f33"],["posts/21112647/index.html","090bc9d5d8ae0af29600f69f0821c517"],["posts/2158696176/index.html","b3b641984a619e3edfa3e91ce089c653"],["posts/2171683728/index.html","047c48cd491190b809c53268a59c5139"],["posts/2186770732/index.html","e07455f79ec5eed659e08df8ca4c9af4"],["posts/2275646954/index.html","805ddaa2f89c9da4c3f757ad2030fa41"],["posts/2314414875/index.html","7e31a137ba40f447fb19534f7a26121e"],["posts/2318173297/index.html","080248c26e5c604c4d13f9e40c607976"],["posts/2418566449/index.html","e336057519852f3832c217fa29da912c"],["posts/2436573863/index.html","2cdcef98e9b17fc4ecc100663d2e52dc"],["posts/2462008667/index.html","b9abf8aeeca0cd151e01ff39f84cb730"],["posts/2463121881/index.html","3a444d55d3d572cc7dbdbf3e198f1dba"],["posts/2527231326/index.html","6e0a595adb0b319ec1866a564d70a1d7"],["posts/2583252123/index.html","6608a9b79f8ff5498b40c79c515e1e6c"],["posts/2613006280/index.html","5130855b348b7ec909db4e022263953e"],["posts/2617501472/index.html","fce4ca011b2c48370375bf8c0c814792"],["posts/2676125676/index.html","e26bb1713ebef34b5a0515b2de7170e4"],["posts/2734896333/index.html","d06f4fbba744390d5ed9853429fe00d3"],["posts/2752169106/index.html","51346921189789d388a4d9fa563586c7"],["posts/2799263488/index.html","fa15a8762652bcc1391ab8382b2148b2"],["posts/2805694118/index.html","430d426dc84d03863225f10957fd4d15"],["posts/2809571715/index.html","7508c622bdca9ca3ded00558f0525993"],["posts/2822230423/index.html","3b25a47dc3ebc0cca2a0660c5ccc733f"],["posts/2829333122/index.html","eaf4b5837e19877353974bf978f8d88b"],["posts/2911923212/index.html","ee7f0bdd578f59612609f5d1c431acfe"],["posts/2941880815/index.html","3abcc4fcf671de2a51fc1e37e031620c"],["posts/2950334112/index.html","fddc33bdca8a4d32e62486cdc63d29a0"],["posts/2954591764/index.html","3f19cc127292aa5a876464e9323db386"],["posts/3019914405/index.html","9f1f23dfdd1c7fa634314f0cd187d3b9"],["posts/3032366281/index.html","2f9555574562ce0b2de401bf70d86b53"],["posts/3040357134/index.html","971a2f149e533e5389d70bfabc86c8d0"],["posts/305484621/index.html","b6e5d6d3dc7160fafcd70921c526de97"],["posts/3083474169/index.html","68783aa8958a00278a76c40f8f341e36"],["posts/3099575458/index.html","6ce256ae3f35976abe946d87ae2ebc3e"],["posts/3111375079/index.html","4bacbfef4ec0ab704e3b0801b4b7db46"],["posts/3120185261/index.html","0bbaa716e674e50464a4a439c80735eb"],["posts/3131944018/index.html","ef7ccb4f393d0b7f125ca960a2fb12d3"],["posts/316230277/index.html","ffcf35fb145fb8087c6a4f4ae822740c"],["posts/3175881014/index.html","9bea81960ae159651eafa1ef5238528f"],["posts/3222622531/index.html","aabb3b17e87a10307f0c445c1f6932fd"],["posts/3247186509/index.html","93d258b91e7658f739b53845ccf67ebe"],["posts/3269605707/index.html","717f1020230b268889cda9eb32aebeed"],["posts/3291578070/index.html","342729c9bdb1f3f3bdfcc0ff6332565b"],["posts/331752533/index.html","9810f23e6f921bc4b9f37b9a0dcc5c41"],["posts/3321992673/index.html","882c52e9ce15a342af67835ab20694be"],["posts/335366821/index.html","6ee73ae004dc1d2f99134a17ebc2dab8"],["posts/3356910090/index.html","8ad5fe5f166449872c2dae64d621f661"],["posts/337943766/index.html","01232c636720e8073ef0142e1ae0f8a7"],["posts/3417652955/index.html","6564d212a1c79d24d2aa57d7443415ab"],["posts/3444626340/index.html","82815e6a0ec46a7ea403ee55315df71a"],["posts/3449402269/index.html","561a155c797324934e578ff36d55c138"],["posts/345410188/index.html","a0a70eee2c9281381e790ecd354e4a58"],["posts/3461518355/index.html","acf1bd229ce86961dabda6993dbf30a5"],["posts/3494408209/index.html","f97e561501cf9b6ca389ffbbd29c2f01"],["posts/352037321/index.html","76e3023c304207d3020db5b943220236"],["posts/3521618732/index.html","407abc46851c8f3254365501a6104e4d"],["posts/3568552646/index.html","fe98568b6c6e31df77d72e59a474750d"],["posts/3603924376/index.html","945b37d8200a4438a5b67a393c3bc041"],["posts/3637847962/index.html","8ff4d6043bf9c0e05a02ebcbf65ac08e"],["posts/3642630198/index.html","2f37604ff9599d43ad199f356c917134"],["posts/3653662258/index.html","c98849b4867a19500c387f877b083c6a"],["posts/3653716295/index.html","e0e76004954e07b75755fe29219390a8"],["posts/3657008967/index.html","0e93716666c4b7ba5e48c521263ab2f6"],["posts/3668933172/index.html","6c1b28bab1c5095b63388092f550a174"],["posts/3677280829/index.html","722bb4713f51f7b9243468b0496ca55b"],["posts/3687594958/index.html","04a838ad379365ad1e53a53dea21bd36"],["posts/369095810/index.html","95b5a36c6668e57291d48c5d6ec66c58"],["posts/3695777215/index.html","053c0346fc3668bd67abd3d4fa283529"],["posts/3736599391/index.html","497130787c3aa0ea34cde6d1edcbe32d"],["posts/3742212493/index.html","72edd42ac01acd8fc20a29e6aaefc5eb"],["posts/3782208845/index.html","e99f75a8f7b8f04743db5351e7687619"],["posts/3789971938/index.html","17dfb76d07608365be483dbc1c24bb8d"],["posts/380519286/index.html","2c22936b08a1d2a8cb973d0ebd54b531"],["posts/3846545990/index.html","7fe4d521f616d2ee126e546ba7c4fd18"],["posts/3873710624/index.html","df8388c36f90416f53303ce8963fe2b5"],["posts/3959327595/index.html","8756ffb51a542e22336a67098155ab72"],["posts/3972610476/index.html","cafa02fe620bba3d397c70fa55ac40cc"],["posts/3995512051/index.html","237b9f9c376b9121464faa02c8893a2e"],["posts/4088452183/index.html","a941bb10e11455b84f25601b46da5bb5"],["posts/4116164325/index.html","6026834788f350193b095a4cc680f721"],["posts/4158690468/index.html","5e198929077187527c989dbc1b2f181b"],["posts/4159187524/index.html","f1e7a763b3c726da891b5acc2e544b7c"],["posts/4197961431/index.html","9df4dd65279c8bf12754fb71864b6694"],["posts/4205536912/index.html","5456f84e01181864ca84520971463550"],["posts/4236649/index.html","909728326021eaadeb272ae9f7b3f488"],["posts/426338252/index.html","6a57b56fafe357220043acf0dd53fcad"],["posts/450254281/index.html","1a9fd88320fada8109e52d35b3bd8ce5"],["posts/4891372/index.html","8a1cffbebd2ff004a3e92610356c2a4d"],["posts/569337285/index.html","eb861a03fc47c8ea9c121fe69a7fe7e6"],["posts/570137885/index.html","bd113c5a4656e0a763046da521ea69ff"],["posts/570888918/index.html","0c09157e5698b57faecabe2b2bc35263"],["posts/582264328/index.html","5b831349cfdb07f59cac9104a8edc2d3"],["posts/632291273/index.html","dec856ba1aaf94a0c5de4476558e9865"],["posts/70687890/index.html","44768d71b5aa78ab1d84bdc15444c539"],["posts/719322223/index.html","08f985d687e797dca588cfc6e108c5c9"],["posts/720539850/index.html","dfac4ceaa5cd15b41b6fd9956f8f6582"],["posts/786195243/index.html","d06abbe4e2bcad982fe12c2db95d1516"],["posts/795474045/index.html","fe430032439182abca078e9894d0e754"],["posts/815861661/index.html","6817c5dcf0a14d517c1da7e5ef2292aa"],["posts/821259985/index.html","e9780309c129200c6abac0f5b20fd9d2"],["posts/828223375/index.html","5e38e60d373776e0217ed1dbea13eace"],["posts/887585917/index.html","6ae4ea9219052d68f87f5b1d35831686"],["posts/888549816/index.html","5f04166557bddd32258bb743281d85c5"],["posts/906436376/index.html","0b64d7885a584b9cfc20709f7b598db9"],["posts/907824546/index.html","5f11eca553fa1f5de5d6f230506a0eb5"],["posts/927393529/index.html","60c0e9e1c37b3afafe5f537b51cfd0fc"],["posts/94443781/index.html","11d544ffd7a5ec6b82e5272c55adefdb"],["tags/2014/index.html","489959a6d9f43d61b9eb3375277b0d6c"],["tags/2019/index.html","a2c584db0f117d28b2ee958478a75864"],["tags/AI/index.html","6882989554ef85a180128885ddb4ebec"],["tags/AOP/index.html","647ca5a74c4bf67c7043c35d3f196afe"],["tags/AR/index.html","18ca44bf64811563b72bea56b57d6a2f"],["tags/AssetBundle/index.html","972a22ddda6fcfe404265660b3f5dcb0"],["tags/C/index.html","7bffda27a6ca8d2dddfb15f372651266"],["tags/CDN/index.html","bf481bcfd41a2275bae1d69f5666984c"],["tags/CG/index.html","568d8140bd4b4c1b6830a12292782380"],["tags/CI/index.html","056029e04b95a90562e974c0eb759b3b"],["tags/CORS/index.html","a6c57a02a09d993aa5fdc55cf3f348cd"],["tags/CSharp/index.html","052d50fd89e8d89fd5afc607f8e51255"],["tags/Castle/index.html","1f9af49012011678b9313fdbb199bb85"],["tags/DBeaver/index.html","75c173ac944f83034f7667d5a194004c"],["tags/Docker/index.html","be1bea3a2babc9acd0030f2929cba607"],["tags/Dynamic-Proxy/index.html","fef12f88f96ec22061d7b3b3e256f2e1"],["tags/Dynamic-WebApi/index.html","dcbc17fdc3ecf31221041fdc7f92fe35"],["tags/EF/index.html","70260215f537413423f06bba39381e16"],["tags/ELK/index.html","fb85f7621ac39f74787e145461210897"],["tags/ES6/index.html","252e60dc11f56bf95e00def4ff8e07e0"],["tags/EasyAR/index.html","d7540d22e851661ec7795459437a7d2b"],["tags/Excel/index.html","8c4e4d84daff750518703431d4209341"],["tags/FP/index.html","74512ed1842e9c67b4f211a6a9c09122"],["tags/Form/index.html","b03f209c47cb3f7068b196bc0ad71cbe"],["tags/Git/index.html","83594171b1e556f4488d475fa10ff41a"],["tags/Github/index.html","7453c1bb8ead712e8eb03ccceb9c6449"],["tags/HTML5/index.html","a5f109e1e43c742c173a3435cc4273e6"],["tags/HTTP/index.html","8e043c459716cc7e59751a45a120cef0"],["tags/Hangfire/index.html","978bafded0dab0d986ed136c61bba44a"],["tags/Hexo/index.html","f9e07fe2248580d6675aa2f20e8822a8"],["tags/HttpClient/index.html","d81282fdf737b678fcda667c6465f2d7"],["tags/Hyperlog/index.html","39a2d24fd932c2a2978b45d4962e21b1"],["tags/IDE/index.html","c9eb5cf40db47deae38cd1459eae98d1"],["tags/JS/index.html","81233448a5481c975efcb04c81d789aa"],["tags/JSON/index.html","9aca320b6e1ca22dc21f5f71bbe93a18"],["tags/JSONP/index.html","685285ba9366244d75aa7cec6e39eb5f"],["tags/Java/index.html","eb768dcc70c7282fdefa355721b6f585"],["tags/JavaScript/index.html","b48c0bbcf74e0a6288533b82b3fde89a"],["tags/Jexus/index.html","a10fe9e74a3d608d1206385a025e6834"],["tags/Kindle/index.html","d2e2eec12317e01995f750de116b8475"],["tags/Lambda/index.html","6e7b767bddd6a3d2a9c308b3b9b88702"],["tags/Linux/index.html","f52a1b965cc5a06b0dbaeb5524c817a7"],["tags/Liquid/index.html","05e43d0d22d9977148649ed88530a13b"],["tags/Logger/index.html","3812a1cdf87beef0c945900dc8492884"],["tags/Love2D/index.html","cde473b611bde2a6e7286f0f89c2e435"],["tags/Lua/index.html","bccea0c6f90ceeee48da651b2aeb09dd"],["tags/MMD/index.html","8710043dab0dde761ab2c0c400b3dba7"],["tags/MSBuild/index.html","d0051b9ce2f4a59767fdec36eba670b3"],["tags/MVC/index.html","e13bfa8d5f2c2a97d74868f5d715ce6e"],["tags/MVVM/index.html","d4d967b023fef3c82dc7fa1f0a716605"],["tags/MapReduce/index.html","76a76c9672bbd672764a6d4ea2ba164c"],["tags/Markdown/index.html","31094e090b076d330b7fec6b5ec45ecc"],["tags/Mecanim/index.html","089ecab70b0aa3cf4b186c5ec26180aa"],["tags/Mono/index.html","f3426c21985627cf1d7a920c3da95020"],["tags/NET-Core/index.html","7313e6c7223401a8f9d81ecd49fda535"],["tags/NET/index.html","283f9d6e0de4fc36d5f3afa6960e1db7"],["tags/Nginx/index.html","0f4adf8518959dc73bea136b0ee51578"],["tags/OBJ/index.html","6669540356b33244d442d33f2d11303b"],["tags/Oracle/index.html","75419eafac4c50627e503f6cb56a1bfd"],["tags/PL-SQL/index.html","02eb70c7d1582d6580f9609839314f6e"],["tags/POCOController/index.html","e41d35aea1a156a95bc4156e86b12353"],["tags/PWA/index.html","6d6973bc9e3d23babd3ea911c159b2ad"],["tags/Python/index.html","b6882ed280fbc6381bcaba0fdb853fbc"],["tags/RESTful/index.html","9a5ccc723df60f63ec25fa600200e6f9"],["tags/RFC/index.html","108ab2a6ffe3b3cc010f46254a052326"],["tags/RPG/index.html","dd00eadf3f6f75e68282318244a9066d"],["tags/RSETful/index.html","cc333da066bfbe53b9b7ce20f393f36c"],["tags/React/index.html","863edd7d129d6c9de9de83f4bae3ec8e"],["tags/Redis/index.html","e0401e60024b088835bb090f0d23c2a8"],["tags/Referrer/index.html","4ab2c7980475f9005ea1b9ef36d3071d"],["tags/SDL/index.html","1716ff62671c0519490364204b50ec29"],["tags/SQLite/index.html","94386cb51bca1bfc281aadbb2fb840ba"],["tags/SSE/index.html","8834d178fdaa184f91b3084fc514be48"],["tags/SVN/index.html","4c319df0180fdaf70a4e6a00dc7ac74d"],["tags/Script/index.html","c0e9d0ca8e2bf87b5a8a37e165f74a4e"],["tags/Server酱/index.html","f1dd028f01a12e37a8656ba46487476d"],["tags/Shader/index.html","02964c91cef39bfd5614d96cc25dfd16"],["tags/SignalR/index.html","1c9f93be1ea51b521ea55ea051c9e719"],["tags/Socket/index.html","d67b18bbf928306672fc76965706bf43"],["tags/Sonar/index.html","9fc48ba9c713b95636d3b71ffaec8fc1"],["tags/SourceTree/index.html","8d18448c36149ac6ffac2b134dc48e1f"],["tags/Sublime/index.html","c443e61eb1125e0788cae0c490e9f644"],["tags/Swagger/index.html","d903334fded2364fe2c6fa5fd2852d11"],["tags/Trace/index.html","a90e931bf2450b1943159131ab4d1de8"],["tags/Travis/index.html","2aa6da440c416266f8761d9adca0bcfd"],["tags/Unity/index.html","15b62513c8e1bf4d02a15d56b04740d5"],["tags/Unity3D/index.html","92e971f381917683e8a015ef4b1fc04d"],["tags/Unity3D/pages/2/index.html","5867c3bec8acddc09d87e041f7a8d047"],["tags/Unity3D/pages/3/index.html","513422b8a9e484e5c28be230d7b2dc2c"],["tags/VSCode/index.html","3fbe391d99f2c18b2cb47af6beb73080"],["tags/Valine/index.html","bd9f8ddc3f61eae141af45e7ece0d770"],["tags/Visual-Studio/index.html","efa5c1f257ada376a9813d1ac4ff82bf"],["tags/Vue/index.html","0e6a70ca61b57c581dd03ff5a006b125"],["tags/WSL/index.html","5c182e367a2e4e83d3f5e513af38061f"],["tags/Web-API/index.html","379076579c58f6cd41c2bde7d524ca24"],["tags/Web/index.html","1bfc212e84fa830e15f55495150743ef"],["tags/WebApi/index.html","4b00d65820848fb00c75ee5cec4a6d04"],["tags/WebSocket/index.html","4b23ac6ad9342593ebd8eac6248e9840"],["tags/Wechat/index.html","d8e3c93cab70d34eeda060c2b89d5e8c"],["tags/Windows/index.html","fcf5f82bb78f03bb3110746213a5b1c5"],["tags/disunity/index.html","4591d1d210c057bd362da9f439c628e8"],["tags/index.html","8a9884948da112136c33ae2584d15aa1"],["tags/jsDelivr/index.html","3194b196e250028d5a58f043d9520c70"],["tags/matplotlib/index.html","3eadc07e70b9fef5261d1236899d05e8"],["tags/uGUI/index.html","7d60922f7b611b014f63a97069f5e0a3"],["tags/zTree/index.html","f3ba1ddb36c6ab335b0a7a22212b9d08"],["tags/一出好戏/index.html","a8ddb33b7748527ce0b48271c8b70a58"],["tags/七牛/index.html","5cf63ff9955c2f271ab832d6b5946e2b"],["tags/主从复制/index.html","55903d1fd8e53fbe7b94c7364f86e77d"],["tags/事件/index.html","ce78972d8f59d81ab683f9012a7fad46"],["tags/二维码/index.html","6440023095dfeb408b14cb915a9800b5"],["tags/云音乐/index.html","4c9e938c8d33eafb4e49689f8152a3ac"],["tags/互联网/index.html","550125559cf4e863484d79c09b279470"],["tags/亲情/index.html","c4fb6d3cb373b2b4e42fe8a3ca0d0049"],["tags/人文/index.html","38f8033a785dd1ed67f00c38dd55ec99"],["tags/人生/index.html","392f27b8001c5660362611aab61203f7"],["tags/仙剑奇侠传/index.html","0566ed70e544a1d0f6b73a4ed94178a9"],["tags/价值/index.html","b792df8beee79e2d9f38be7584fcf68d"],["tags/优化/index.html","3c9b46d98cea48abaa38d72e3baea135"],["tags/全智贤/index.html","c98ee988c12b295be9b321b16c980a8c"],["tags/公众号/index.html","752202a9691464edaba9e50bd6bf490f"],["tags/关卡系统/index.html","ed03131ae688874ef80460c21afbd208"],["tags/函数式编程/index.html","6478079a44db054d6c999ba6680ecfca"],["tags/别离/index.html","0cbde1b907d7c913093b9c7054a85b9c"],["tags/前任/index.html","69393e8aa108eee3b20cd75bfccc11b4"],["tags/前端/index.html","8d4f6ae11c0e868ec0532baa2efcb39c"],["tags/剑指Offer/index.html","116266a250a1e48fd749b290216dbc07"],["tags/加密/index.html","1a612d703ada43ea3f251679cf2f5d68"],["tags/动态代理/index.html","f1c5c44cb974a19e596bb1e1eafc685f"],["tags/动态加载/index.html","89c2193ed83620739c2a7d2b95f389d7"],["tags/动画/index.html","f20fc709362733632684d8c8e6102b39"],["tags/单位/index.html","c7ab8463c308ab1951cdad4919acff0b"],["tags/单机游戏/index.html","724e0ec29e56331b67c7d9f1a25246c7"],["tags/印度/index.html","76eeca6836fcb5e80d3cbf780c7b056a"],["tags/历史/index.html","5dc4a10f217a7d11ea660da46bad43ad"],["tags/反编译/index.html","cf630a471a8ed92cd5e9e7478f19b01b"],["tags/同步/index.html","9aea85a8905821ed4154508c3d24c79f"],["tags/后端/index.html","7a5f2357e21670f893e35e30815cb846"],["tags/命令/index.html","57451793d6574af4805d2412b5e810dd"],["tags/和平/index.html","955fc0eb1b705f43e10628f06ecf70ef"],["tags/响应式/index.html","40b708f14b0971c906ca1ec02cb0e6fe"],["tags/哲学/index.html","b97ec4c67ea35a933f19934c98419e63"],["tags/回家/index.html","9aee386fa006f6b47e55d6d3e9ac2fc9"],["tags/回忆/index.html","3dc41466c46ed627095110999060ec6b"],["tags/回顾/index.html","d5f1595ea2eef50d99856e01f39bfcb7"],["tags/回首/index.html","c91811ea0589190d0b70f293a3fc95e8"],["tags/图床/index.html","d78d4e5bb5b875a5856804c7478106dd"],["tags/图形/index.html","fd4faa405906eed659813cd63ff2e11c"],["tags/地图/index.html","85f6b12d921c77314c177fef35a34048"],["tags/塔防/index.html","7ad1bcfce8e3dddd4f993be1a415fb1f"],["tags/增强现实/index.html","4ecc658dba191b13941c6b99e9b0059f"],["tags/壁纸/index.html","13d42617de0c4c8ec64e0c42b032c8dd"],["tags/夏目漱石/index.html","7ec77d2ca7467d75908472930a728b1f"],["tags/多线程/index.html","b93e5700a44a6b21f3adf960be110c02"],["tags/大护法/index.html","88896af75463dff023a1ed943fb81d69"],["tags/委托/index.html","5d37bf46d731ac9ba3ef15ec60f63b99"],["tags/孤独/index.html","9f896f998c3323c3ccff4409962c83b2"],["tags/展望/index.html","2a0f96ad539d795f8a0c19f3fa5ef51a"],["tags/工作/index.html","6e4275f77d4726215832c71d3738136c"],["tags/平凡/index.html","efc54d2b7319d0477eb3eb624e995810"],["tags/年华/index.html","3592388f1f5ed8de1ac26c0de3b4a5d9"],["tags/年度/index.html","4ff7bb11c8537d54da9f85b22d0a20e6"],["tags/开源/index.html","ba2770a17bbeeb863a47afe68125a593"],["tags/异常/index.html","704768ad31f5fc9d8c861849ca576601"],["tags/异步/index.html","46ac4063aaa178692f20177339e40038"],["tags/引擎/index.html","f48b5a3936a5460042689280806cbf4c"],["tags/影评/index.html","540d6394a77fe1e7857fa2edad42129c"],["tags/微信/index.html","82ea27c3bb4701b665c220b0c5d48c53"],["tags/微博/index.html","478e7c6705e5a24bf5be5a356af03750"],["tags/心情/index.html","fbcbec3782e839c8214e47f0e247d746"],["tags/思维/index.html","2d8121578ea5a792bf33168d459e3367"],["tags/总结/index.html","fcb6900e82c5cdf81242b816b117fe16"],["tags/想法/index.html","f60f8ab183963eeee3f7e06c63dc4bbc"],["tags/感悟/index.html","9201e7dbfe95e376b0cb2134b7133250"],["tags/成长/index.html","32d79666fe074562e2be94974dbe1740"],["tags/我是猫/index.html","e50c0d68643811657e2730f28c17abf5"],["tags/扩展/index.html","b617573b52b0864ad4ab89ef7d9fcbb5"],["tags/扩展方法/index.html","4b23b13c7b7dcf8c09ff0c17650c6952"],["tags/技术/index.html","aa570176d0e8df12b4969f9921c05bb6"],["tags/拖拽/index.html","cdfe6f59974c800e309dc30e724851ce"],["tags/插件/index.html","610f6a740c1d8f58d7c9b2cfa076245e"],["tags/插件化/index.html","cf8ee6e238f7d01b4b0adad9f8573e57"],["tags/数字/index.html","656b79c256ea7fd4a9c1763adf74762a"],["tags/数学/index.html","fa44ab45c5781b9f7be2d5d34153b116"],["tags/数据/index.html","28f6fbac00132a63fa700c8e9418f90b"],["tags/数据交换/index.html","d94d0e1a334a62aa3c6c4be34b30e51d"],["tags/数据库/index.html","68627d5c1c9dec82e3eadbe00e930232"],["tags/文本分类/index.html","7b79375fd40c3cb8c9832d66b76d6417"],["tags/无问西东/index.html","7a4aaa4bf3d2a9ea5745c46cdb61f5f6"],["tags/日剧/index.html","76694cea740a71cc2c04e1c0fbbc86f0"],["tags/日志/index.html","0407af048f60bf230e99eee5533ca204"],["tags/日本文学/index.html","f11ed8c02a4a5bcd9dfb3ea28b92cd28"],["tags/时区/index.html","bf74bd0dfdec00d2a2029acae39aa388"],["tags/时间/index.html","a20b281d936fe87ba0bcc46a4808d526"],["tags/服务器/index.html","15de6f294fed13ca194fb34df3abb7f5"],["tags/朝圣/index.html","aacd052205ffaebfa2051bbc8456bf79"],["tags/朴素贝叶斯/index.html","3f04c05603c7446572664e4d0552334f"],["tags/架构/index.html","7b28193a452480fb7d388fe1d5cf02f7"],["tags/标注/index.html","1844c4789ffb2d4bcc40131e9609b9c2"],["tags/校验/index.html","e01121342db08df13f84e071fa01cd5e"],["tags/格式/index.html","37a552e08fb166e1d81a639aaaa236b5"],["tags/格式化/index.html","713b6229428478d846404758eb03cd6d"],["tags/桌面/index.html","fa9ad7abe80c60ac458f191e872b73b1"],["tags/梦想/index.html","cea4225237bcdb66c8ba288fed91c95c"],["tags/概率/index.html","90ec20fdd08d39f46db3fed67fb71646"],["tags/模板/index.html","0f726f938d8205d34cfd77d7adc2d76a"],["tags/模板引擎/index.html","1b3484ec860f60a1cb4f79873d5a6618"],["tags/毕业/index.html","0607cdbc88f886d754ae41c1886d7f12"],["tags/毕业季/index.html","f0dee3dcd546b8b218d1ee425758c79c"],["tags/消息/index.html","f01cff0cc33b46999eb9a4c506567798"],["tags/游戏/index.html","5a5db77019f47521847ef729872c9595"],["tags/游戏/pages/2/index.html","5a0748600406191b3d661dbea5754b45"],["tags/游戏开发/index.html","4f09abd1c064df226cd3c725bb4fd1f1"],["tags/游戏引擎/index.html","bc6ce121d281de61c2af3dfe2b994c25"],["tags/爱情/index.html","ff2c74d45c76da4e00dee239e5b22e57"],["tags/版本控制/index.html","9f3205ba072c3cf1f5eb354a5a4e208c"],["tags/版权/index.html","05d6814d5a0f3b43887a4874084884c9"],["tags/特性/index.html","50f7d5a1160968813ff7bb59630fcd51"],["tags/状态/index.html","ade25372c78c09c5fe01e2f9fd3d9762"],["tags/现实/index.html","9bffd476e8ca56751a9de0e9b8d7865c"],["tags/生活/index.html","af8776cd05078d6a46a2c950e393b79a"],["tags/电影/index.html","50652ecb550b081c76e5a833cf15b1a3"],["tags/画家/index.html","7e9d18e9abb5bb0e45c7a11430de80be"],["tags/知识共享/index.html","215ce3af00728b2dd43a9c674f0b154b"],["tags/矫情/index.html","91acf424d163d3984496357b38e86e7e"],["tags/程序员/index.html","b2c8ab3977c14682a6e6a7fede349a13"],["tags/穹之扉/index.html","3d733fe2eaa37a786b6a2778f64d3973"],["tags/穿搭/index.html","1051be5dbfdd83ec7df511dd38ffc2b9"],["tags/童话/index.html","f57eaa57db2589316c9c5ae6a1d05ce9"],["tags/笔记/index.html","621505d7249e02474f152f8e95a2ebc0"],["tags/算法/index.html","071dd046df7cffb8c49f70f857e9102c"],["tags/米花之味/index.html","8018c82e021732749e12b97d7e25326a"],["tags/缓存/index.html","183282ca610b0e8434b32ef766706a59"],["tags/编程/index.html","38b34a26639cde6013cdb9860cc50297"],["tags/编译/index.html","17c76b1696c19ba771a4d99845b0e4fa"],["tags/编辑器/index.html","1c2ab7859d93327e69f65bd6d43000a6"],["tags/网易/index.html","7fb8aa4b284fff786675d60a36e5aa80"],["tags/脚本/index.html","cc78f4d72fd9cd7ee2815764e32d4a00"],["tags/脚本语言/index.html","1fe850953616da550153c5c70753489f"],["tags/虚拟摇杆/index.html","67c91f1f585475af04da3f59f903480b"],["tags/蛋炒饭/index.html","c2a8e8bbdc670615f37e4d1ca884782b"],["tags/表单/index.html","8c61958136588a609caa5f2eb0ae4db3"],["tags/装饰器/index.html","8e7eef387b33fea9ab7145da34b244bf"],["tags/西安/index.html","31e265bcd75cba32d971b6a5babb7241"],["tags/计算机图形/index.html","3e99a869e17d4732e5158a07d6da15b2"],["tags/设计/index.html","976c2eb63a6ef5ca9102e572e56bb33b"],["tags/设计模式/index.html","90b55e72f1930760f00fd116352d792a"],["tags/访问量/index.html","d771081376ca7ac8a11865d5543605ed"],["tags/评论/index.html","1df0d605e4c66399563da39ff74a0b68"],["tags/词云/index.html","f04bb4bd6c0fa29ab2903f3a8dbe58d7"],["tags/诗人/index.html","75da29fce04265fb8778afbcbd1c1c7f"],["tags/语法/index.html","308ace2bd29417a41982267712928bc7"],["tags/请记住我/index.html","35d27fdac4cc8f235fe91f5d4bddd64a"],["tags/读书/index.html","a0045674e80acdae7c479303e80413e7"],["tags/读写分离/index.html","879ebe2ce61403167bcf2af0ea62feb1"],["tags/调试/index.html","d23950b99c74365ae427cacfe1c5c7cd"],["tags/贝塞尔曲线/index.html","5343161d32e466c9f765694547dad7e3"],["tags/贪吃蛇/index.html","4f97a453c576a53451ee9e939fecb80e"],["tags/资源提取/index.html","bc75de89631a73c8f72e7e04251d7487"],["tags/跨域/index.html","74c5f5c61a3e719dc8fc0c33e24c7720"],["tags/跨平台/index.html","e9aaf76f616fbeaf7f35977e0379311b"],["tags/转盘/index.html","e5d442542e7ac375732e861c46fcc7d4"],["tags/迁移/index.html","5d5c3eefe89599380d9ae28fec1b7c38"],["tags/通信/index.html","a7e36cfae4ee5f45d7ebf22a5daf311f"],["tags/邪不压正/index.html","06357f5d41743eb35ca3bb5ad54b39dc"],["tags/部署/index.html","8912d435cc2b6e6bd074f3d74310a5e8"],["tags/配载/index.html","a990e799e6db825e8b8e634ec70bb597"],["tags/重试/index.html","904604f40a79c7a81857a62209a7471b"],["tags/长安/index.html","a595bf52ccbb4ed812a4c6a6dd60cb97"],["tags/长安十二时辰/index.html","e1238318ae101a114267b6aaacb1fe1c"],["tags/阅读/index.html","a3957d2d2d43078dce4daac3a60ed9e5"],["tags/阿里/index.html","9c45400ecb5a6d731aed2cd4f1529d46"],["tags/随笔/index.html","1f44367284c52c1750e59caf1230fea3"],["tags/霍金/index.html","b201765f6029a904a178bd9c6c1dffec"],["tags/青春/index.html","fe4f1c618ca58bcbe7cc50b30f49b379"],["tags/面试/index.html","68fec2d45d695f159acdfc3ccf583010"],["tags/韩寒/index.html","b37d1626f80d16bf794810eeb166738c"],["tags/马尔克斯/index.html","e303e3120cb4b4f067f45c6747f3f3e9"],["tags/验证/index.html","52b9bedb6509c2b5600b65568a85fea6"],["tags/黑客/index.html","0ea47095a8057759c516413d08e54f7f"],["wiki/index.html","99ccf7e8576056981c1308ba08c51743"],["works/index.html","59c8925d08c83396c8bd3969c8e33dc7"]];
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







