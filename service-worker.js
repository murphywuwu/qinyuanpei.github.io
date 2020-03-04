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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","0a1d8e14dff4e42ea0486006688e3810"],["archives/2014/12/index.html","25e1fb77ae600e815389a81ee2326925"],["archives/2014/index.html","9a3a43551e841e552697d2e261cd0040"],["archives/2015/01/index.html","0e6ad6407cc647adf5e3b1a3e2dab70d"],["archives/2015/02/index.html","b074002a7590937ba0f6b216dce4eb4d"],["archives/2015/03/index.html","df03298fad57ff96e74bd8334f90664d"],["archives/2015/04/index.html","b782ebc03b23f85a8aa4ae65ea124b20"],["archives/2015/05/index.html","d74db025934a7d880cb759c1f9a59345"],["archives/2015/06/index.html","b36ae679fb096805db59ff0319f7df56"],["archives/2015/07/index.html","b7b518e6cdb34e82e98c37c2da660e99"],["archives/2015/08/index.html","677e1942281614f2ebad2ed6c0faf986"],["archives/2015/09/index.html","e7e4b8d92fc3331ce8dbc1a316faeffa"],["archives/2015/10/index.html","f8d4c57a5e329d8b484d51c0f54eb289"],["archives/2015/11/index.html","d504be0317209ec76a4646523f5ceb22"],["archives/2015/12/index.html","28d58897d7cb3c4e56275d91a40301e2"],["archives/2015/index.html","6f0911fb39b9b64a5b7e92e6cb597563"],["archives/2015/pages/2/index.html","5b61a5d005c1ad79b2c14bfa5bedbaf8"],["archives/2015/pages/3/index.html","268c91f1bbfc4baa389834181e02eb49"],["archives/2015/pages/4/index.html","2e89907976dda7f9893f840a8fd1e8f3"],["archives/2015/pages/5/index.html","4f5d4c8050fdb360ffa530a1e008f1fa"],["archives/2015/pages/6/index.html","9a77673c81a31a1bfae66a38ba760f37"],["archives/2016/01/index.html","6a12adbf74635e2665f0fc70fa6d28ed"],["archives/2016/03/index.html","5e1da79b5071c12e382f95aef270955c"],["archives/2016/05/index.html","58f54d4d4e8c02b2888fb3962941963b"],["archives/2016/06/index.html","2e244aec1dd6e10169102785c3534024"],["archives/2016/07/index.html","8baf543cc1a43c2117c7b69f1b7baf52"],["archives/2016/09/index.html","8be46e2069fcb8210b3647cd08b64b16"],["archives/2016/10/index.html","5e7fc96c5a49b17c6da8f1525e1c2dc3"],["archives/2016/11/index.html","59f508f9adf09acb18c340193f4e5008"],["archives/2016/index.html","4313d3aef0bf273ba738a3d9864030ba"],["archives/2016/pages/2/index.html","609d64fdeb5ef5d8df66ed9458846121"],["archives/2016/pages/3/index.html","8943c854469faccd32bfe9d61ee8c317"],["archives/2017/02/index.html","0930c72d207ef97171d4c2331aa4d341"],["archives/2017/03/index.html","84c95f245302203aab2322abaaba9f73"],["archives/2017/04/index.html","517405cc977b4807b1ca891d6e7157dd"],["archives/2017/05/index.html","559bbd2bca4dd4921eb8ac2d76ea6ba9"],["archives/2017/07/index.html","b9aa5b8f780c6d8571df1d1dd8c3e3b6"],["archives/2017/08/index.html","6127fae11a07f471daf91e0aa1cf073f"],["archives/2017/09/index.html","a385696bdd1cb82e96d8828b08cc4f90"],["archives/2017/10/index.html","6888821809b6eff87b874f40aed3f608"],["archives/2017/11/index.html","e5f2241b8e19510d2d972eab28c7a233"],["archives/2017/12/index.html","a7b89a648824e27e8d37a0c7d3eab58f"],["archives/2017/index.html","25f9b531270795a5aca1bd50faca29ac"],["archives/2017/pages/2/index.html","cf710711f06d9ffa219b95443abc7176"],["archives/2018/01/index.html","00d50d2b1d4fa1d0c31498e4bb34a539"],["archives/2018/02/index.html","c926299b2454fe1d79aa2d1dcb1f61bc"],["archives/2018/03/index.html","eddfcb007362512f71bb7842b2c95399"],["archives/2018/04/index.html","3629257cf3eeeee7709f504902b61b79"],["archives/2018/05/index.html","47319b77706f9861b6512fedf7ba4e28"],["archives/2018/06/index.html","6c83c9f82c1b77d6e80db55eddca7ef2"],["archives/2018/07/index.html","fe996bf0ec73302c0d54bc5b6bf09304"],["archives/2018/08/index.html","918d2a2d452245fe2b8e394989660a5a"],["archives/2018/09/index.html","fecdd71388c0cefe2ba010eeb98a142c"],["archives/2018/10/index.html","5ab32a0a03c255d7f6968a125ca68073"],["archives/2018/index.html","be95f6645d09f7c5472d83b5930d7a16"],["archives/2018/pages/2/index.html","e36d1d57c2374034433e7c93d19ef944"],["archives/2018/pages/3/index.html","622e8b8ff5e3587914a361394cc7c00c"],["archives/2018/pages/4/index.html","e39a007bf0e3fcdbe8e45be4f7d74a0d"],["archives/2019/01/index.html","fce79d861451459becc229eb7ad759b2"],["archives/2019/02/index.html","a2e96cec56dd6b3fdb31e712fc9ad3ab"],["archives/2019/03/index.html","787f16153afb48ab19b82065dd365013"],["archives/2019/04/index.html","802d923b9416a40779bd9971edbfd254"],["archives/2019/05/index.html","aba66c7ffff8326d22957d8ba61d3e1e"],["archives/2019/06/index.html","8700f99a7f27cb1d3e0e560bcda514ea"],["archives/2019/07/index.html","f25b716d284e81192c67b364ac4052a3"],["archives/2019/08/index.html","08f5d112adb2944429acbfa4a43d001f"],["archives/2019/09/index.html","e4f6867a0daac709399b0dc3109b64ac"],["archives/2019/10/index.html","d74c1f807e33ebe17c3ae89031104120"],["archives/2019/11/index.html","871261ac4862a7f6c6f5a10a19b81f66"],["archives/2019/12/index.html","6a623b062b890024f3792143cdb711aa"],["archives/2019/index.html","939e2a295e4becc6286151734e17fcfd"],["archives/2019/pages/2/index.html","7c255d972b5f7e0d098c6f4f51989298"],["archives/2019/pages/3/index.html","944b80802f99c48230305805784bab8f"],["archives/2020/01/index.html","02febe7503de834c61e28b21ae7af3ec"],["archives/2020/02/index.html","ef5579689f12899364894403cb96953e"],["archives/2020/index.html","785e455f6a984f3d54e98bcc4b1f4ef1"],["archives/index.html","6fa6b9eb140c207708b751f92ab62250"],["archives/pages/10/index.html","59cb9f3a49c3678fd5e2fdd87f27ff65"],["archives/pages/11/index.html","0169e32f190038830e8f3c4fa6d8ca01"],["archives/pages/12/index.html","197616e0ecf9e1bb277f24f28594971b"],["archives/pages/13/index.html","b413f504ef80ce6088fada1b069c4ec1"],["archives/pages/14/index.html","c4f05dbee6407f754d889332034fafbe"],["archives/pages/15/index.html","829ef287d17ce655b5281c483281a65a"],["archives/pages/16/index.html","ba3d255e323281bf4de644f649219140"],["archives/pages/2/index.html","4cc9023c7a59c21b7347714bc445c36e"],["archives/pages/3/index.html","05d4bec012127d5e69ebd5a08a8d7ba3"],["archives/pages/4/index.html","c09c4ec2f83a3b3ae588114d79e25faf"],["archives/pages/5/index.html","5033dc366402cac5ff9da78ec132ed34"],["archives/pages/6/index.html","f8adac198eb66004569d6b9cbc8dd5d0"],["archives/pages/7/index.html","08635593408580198e1888df888a9467"],["archives/pages/8/index.html","f17d107ac2f413ee4847f8eb89c31d5f"],["archives/pages/9/index.html","cca79b55bc964a4ca7ae39740f989128"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","54c90b38d22530cb36a659f6f7d3b858"],["categories/Unity3D/index.html","2c684c73b84e3288ce847a9b3fa7d2c7"],["categories/Unity3D/pages/2/index.html","8166fc6e0943a1a4cd07bcb5ec5dba96"],["categories/index.html","5730c87e3840f09f301d538783053c45"],["categories/人工智能/index.html","769bb55d5e343dd298544b2f0ab9dd4e"],["categories/前端开发/index.html","15e8cccb79c8f95e29ac305545f0c683"],["categories/单机游戏/index.html","09c4f5659530416be3c2121f74c90656"],["categories/开发工具/index.html","f759d294c8ad07dc69a58988a880347a"],["categories/数据分析/index.html","90c0f2cc67e3a3fe72afea8ee9284680"],["categories/数据存储/index.html","c89f211037757d7ff991f4a7d8129970"],["categories/游戏开发/index.html","e6cc5e49b720494faec33505aa2580b4"],["categories/游戏开发/pages/2/index.html","734601175b6d7f1c8f23279bd3fc2158"],["categories/游戏引擎/index.html","c86dfa1541195d167202d53fa649c95c"],["categories/独立博客/index.html","775320b8a9a4392f7be56f3f1579373c"],["categories/生活感悟/index.html","d2980be1d43deb70e2d4cd2c45d24472"],["categories/生活感悟/pages/2/index.html","d1273f500ec0f8380255a77c731bb141"],["categories/生活感悟/pages/3/index.html","313ce255ef0a880cf7bb02a8b6667733"],["categories/编程语言/index.html","8db0a63764858157d0ade9c614c12c37"],["categories/编程语言/pages/2/index.html","740f79b59f296630facf1030e9418f78"],["categories/编程语言/pages/3/index.html","69146b46e100374993521dc6fbe01aef"],["categories/编程语言/pages/4/index.html","900f87f2ec026bf8d182a6b6c29ae1a4"],["categories/编程语言/pages/5/index.html","2fe288e055188090ee2d3782ebc5c5d5"],["categories/读书笔记/index.html","6c2f5ff578b3f895842102b6b93e9c88"],["categories/读书笔记/pages/2/index.html","d8259feed218bc1101623398f4785b3a"],["friends/index.html","1895953e26bab1c2ba179ec68931b756"],["index.html","2da6a2cf4030b3014a5ccda4b5f91f16"],["movies/index.html","48dc6b3ec77faeef59dae0918264a9c4"],["musics/index.html","c317797e1bc45c507fc53c7718ccbec7"],["pages/10/index.html","d15cc45780279f081ed36968ec629ddf"],["pages/11/index.html","950db72bd4842966c93c468f8f6c28f7"],["pages/12/index.html","8d3035ae59b99af0d712efb12ed0ba0d"],["pages/13/index.html","55fbb12f146613fe918c32d055b7f84c"],["pages/14/index.html","d111cbda51038fb0ec9cd5dc8d2cbd45"],["pages/15/index.html","20597f2362ceda7f4ab4c0c08492a3ce"],["pages/16/index.html","ea697490aac1c783f81a7ee541957129"],["pages/2/index.html","7a7974c0a9f42ff9d001a20a585c7de7"],["pages/3/index.html","dc44625fff916022e647861963ee8887"],["pages/4/index.html","9f165152aa03c192c4dd59a3999db4ea"],["pages/5/index.html","6ddd871e4f9552c65725dc5d7962c0a0"],["pages/6/index.html","7980dc5bdb2a6ab840765db7d9f4f15b"],["pages/7/index.html","290edd3d0b57135cc68fcd8048bf8acb"],["pages/8/index.html","ce0ce93e5039e800560ebcddc460ae60"],["pages/9/index.html","cdc19e0ffe1a6e994f65b96d2605b0ed"],["posts/1059499448/index.html","1e3ba0dca652d3c5ea696c3f5a826f02"],["posts/1071063696/index.html","68245d8b3acd0afc3f13c78294753d0a"],["posts/1082185388/index.html","14662980f60e7226f518ff4cfdb9bf09"],["posts/1099762326/index.html","7e6e5c2a9b69498153e6b5361ce95b58"],["posts/1113828794/index.html","7050d67fd405fb47293ab419e43b03ad"],["posts/1118169753/index.html","b3e1109da6887ad5cfd57498bb213713"],["posts/1122710277/index.html","0a4a2138f8a6e9e564471c880f32f10b"],["posts/1124152964/index.html","073315eb17d2d52c67403c3e345d2099"],["posts/1127467740/index.html","3a69a1c8517e519881e57bae045f5723"],["posts/1150071886/index.html","f001af5ab9d6725b3e05275e3a9fdbbd"],["posts/1150143610/index.html","a6fa9befc21b5f1edbfe314fc20ac660"],["posts/1152813120/index.html","f2e210d61b312dd764c26b8b136b2a8f"],["posts/115524443/index.html","e7c9b7d4120842768a84cb6b057a7b8c"],["posts/1156673678/index.html","69df883dff9d8375176e9e80789d2e97"],["posts/1166840790/index.html","8823ecebf609ef44ed5be2b88a630a47"],["posts/116795088/index.html","25dbaca78236de3de133056f1a57a7b0"],["posts/1176959868/index.html","95e4cbce3cba158f69bf99832cab7c12"],["posts/1190622881/index.html","3416562fd94b9324ff502e36ba4e47ed"],["posts/123663202/index.html","301c9c3b1491dfd126bb37f5d97eab75"],["posts/124807650/index.html","d012a51c2dad9d1080eff4d646708d0a"],["posts/1254783039/index.html","6e6ea468158c4d2e38e3aced0e25dfdb"],["posts/1320325685/index.html","24d6efa6c2520e6a45bd286e0826e257"],["posts/1329254441/index.html","8de83e512840c31afeddf5241cbb3513"],["posts/1357715684/index.html","f37b513cd91c7dafe93b586a19404054"],["posts/1358971951/index.html","8495dcfea45494c8850c0f49bc4c4dee"],["posts/1386017461/index.html","f11cd8643b2fcf46ad991db9836ad8eb"],["posts/1394521917/index.html","4244c0b88ea7aeafce89f48f098c76f3"],["posts/1397717193/index.html","592c437f8252ba75b14f11fe663a4851"],["posts/1417719502/index.html","b0ba3635c182bb26090566b23fccc7d2"],["posts/1424645834/index.html","10a4af7139c741c6dcf711a2f93797b7"],["posts/1444577573/index.html","2e6c348a0690d249d88c17e36fab8c3e"],["posts/1467630055/index.html","9612ae83803ff49ba834ee5f7750f2af"],["posts/1478979553/index.html","798030d9543bd2cd5cd08eadce5f7aec"],["posts/1540537013/index.html","9bc71bc354821fcd4f631f01b62905a4"],["posts/166983157/index.html","ccdc509f5f2b3c163becb3e4c2423b79"],["posts/1670305415/index.html","aeb88e4124f6cfdb204eb13f4c2b6896"],["posts/1684318907/index.html","6217d794b9e742dc2f873512068c9080"],["posts/169430744/index.html","e38ffb39badb2c77254c32e446991de1"],["posts/1700650235/index.html","bc92870f9781cd0fb21a02527429d8ae"],["posts/172426938/index.html","b2d9c21ea7a462d2d88a963a754023a8"],["posts/1836680899/index.html","9d7eee3768ae2899f6a96a9419af8714"],["posts/183718218/index.html","a48d1e698e55bf5cdaea7827a5707d58"],["posts/187480982/index.html","4e3d1d3d5c9628d8a0c6db9a38e3103d"],["posts/1930050594/index.html","d485f120cf55fbca1857c2debce91ae8"],["posts/1933583281/index.html","96545e55a85f7679a02e1a51ec56bdf6"],["posts/1940333895/index.html","2b730f3e55b5a01a81bbaffb904c418f"],["posts/1960676615/index.html","90e85afae553f5c7836c0ccd1f73df05"],["posts/1983298072/index.html","4692425d9c66cfea2250653868b60f8b"],["posts/1989654282/index.html","e87d774bc7d4953260a88b22512be71d"],["posts/2015300310/index.html","318e4a9eb78aefcb0390343e322a1cbd"],["posts/2038378679/index.html","7ba4ce87c81dc885365ae5b8db114871"],["posts/2041685704/index.html","e141b4125f5e8b483e132d2f2e767f67"],["posts/21112647/index.html","d74f4b450752366eaefdd5f4e1e21342"],["posts/2158696176/index.html","712123856e82bd1ce36d0017c30fe4cc"],["posts/2171683728/index.html","d2504c069740f5adb3d19cefda2dc618"],["posts/2186770732/index.html","a13cdaaafe4b48d4e8c8116daa83e357"],["posts/2275646954/index.html","f5f478c2434967c3fa9581c4ba21d207"],["posts/2314414875/index.html","1aead7d41c69fe35649f40ef5158acf6"],["posts/2318173297/index.html","1ea81fa15498069c4c3ec93795589042"],["posts/2418566449/index.html","b67ceba74b7e361e64be65e7d99407ff"],["posts/2436573863/index.html","632b2edf1c9d485ab1674cad98cab119"],["posts/2462008667/index.html","5e3b083ea3278b8fda9bed2ebbbf6121"],["posts/2463121881/index.html","f0a228718c919bc7ec86742439e5ea01"],["posts/2527231326/index.html","eced9a99f7c8ad1a5936eda90d45fbe3"],["posts/2583252123/index.html","b184c3e73ad89ae21c719cd75b5f9578"],["posts/2613006280/index.html","f69eb8876aa8b95063ebcf382c2ee8e1"],["posts/2617501472/index.html","77c703b0e5474bc34b1493617cdff1ca"],["posts/2676125676/index.html","ca0eaf808b39babfaddebe75862da2f4"],["posts/2734896333/index.html","94b687b0a9e4b55949b681a86a561a11"],["posts/2752169106/index.html","4ed91089395f1cd754d09bbacafa100b"],["posts/2799263488/index.html","cc7ba061a0d7701978cef4e6a8f6548f"],["posts/2805694118/index.html","b182a531c47e44deb33c2b8fc4abbc45"],["posts/2809571715/index.html","8101f18c865edd7edf52e20a795dc562"],["posts/2822230423/index.html","47aa821811b95e3bb0dce3836bbc9b36"],["posts/2829333122/index.html","2eacd03477e66d3f925c5ff34bbbaa8e"],["posts/2911923212/index.html","aba6c3ca6d381e0e6b994f24bf36c9fb"],["posts/2941880815/index.html","701bfed33650020e98bc23ab804e235f"],["posts/2950334112/index.html","c4a49df9cb322f56e04b2ad9a954b966"],["posts/2954591764/index.html","0b56f2884ab18e5d6f3cb33476b11661"],["posts/3019914405/index.html","1def66982e2efc8cfc98b5504c4d23a1"],["posts/3032366281/index.html","ceb6f325dd0594caf19486c81de302be"],["posts/3040357134/index.html","0acaa518e3615736fe70eeb210715011"],["posts/305484621/index.html","e694b4b11b24603db2558d8edc0d6aa0"],["posts/3083474169/index.html","87c5a26ee43f77ad731ad49ed800030f"],["posts/3099575458/index.html","5f9859a690085fb29c017b0a90bea153"],["posts/3111375079/index.html","05cc0bc5357f51b535875b723191e116"],["posts/3120185261/index.html","54ee72d5b796fd4fbc314856ba7c5cc9"],["posts/3131944018/index.html","a85c34471d5cc6eb6d91497eca1c6a12"],["posts/316230277/index.html","a25e7a4a84908ab568d53e754ed5160c"],["posts/3175881014/index.html","1de3287f77749bdb4667245d8d221b84"],["posts/3222622531/index.html","a17793ed0bc2d6b979a9481cd043546d"],["posts/3247186509/index.html","116b856c30821b8e681372e098b4d3fe"],["posts/3269605707/index.html","a5da4f830c1b0d9797a7c8dbacedb1e8"],["posts/3291578070/index.html","92cf90f3f63fdcd07440b48ab394b0b5"],["posts/331752533/index.html","bd199ad25ddbf2e89c5e159b4492a3c9"],["posts/3321992673/index.html","fe845172c75cad909d2153384c9637f3"],["posts/335366821/index.html","5b92201595a7b8ab8d93f4754f5c9eb0"],["posts/3356910090/index.html","466d382b7bfaeb9ab5d4b906790929df"],["posts/337943766/index.html","0faeebeeaf0dc56c48c8f82ef0adbdd8"],["posts/3417652955/index.html","6aadab8ae9937caf5a852278ffc7cbdb"],["posts/3444626340/index.html","dd5b397f5d4a1f68890d692c1f7f0f0e"],["posts/3449402269/index.html","37755c344334b8b42f3cebfad5bc6319"],["posts/345410188/index.html","1a0d62958b749f6880896dc85132288a"],["posts/3461518355/index.html","bed35b6a38f545603b1f01841bba011a"],["posts/3494408209/index.html","5ee538b72a2a6cde3a6f0fb9e13d01cc"],["posts/352037321/index.html","21a972985b1eb20dded5e42f0663bc86"],["posts/3521618732/index.html","afd751ea66b006b11cadd889aa0a6720"],["posts/3568552646/index.html","c9c3c0cce99f467f2ad6ac7877926076"],["posts/3603924376/index.html","3e53ae9e911d0cfe7d8a774bb3614f49"],["posts/3637847962/index.html","54374867f6d67d39751445adccc2aea0"],["posts/3642630198/index.html","49991c27295ca56f9bda0e4827f96a3c"],["posts/3653662258/index.html","f0dcb16d3f8d392566e6220bb6d17bd4"],["posts/3653716295/index.html","9e9eb349a96b4a624b06943f5dc58135"],["posts/3657008967/index.html","b2bde0349c26802c405de8d9b7ff3c6a"],["posts/3668933172/index.html","1cc87095d5c2bac98f97ef0e67af68e2"],["posts/3677280829/index.html","80b2c6976d58a8472420bcdba065195e"],["posts/3687594958/index.html","934b7976a910c20aea508a0a21632c18"],["posts/369095810/index.html","b431fd458d6a320a629dd860ba6701c3"],["posts/3695777215/index.html","e36128354be62363a7374f95e147c6c1"],["posts/3736599391/index.html","c09c8726d8fefe6cecf736bf546a7fb3"],["posts/3742212493/index.html","d8be814bb91a01191c00eae663ce72ad"],["posts/3782208845/index.html","c660356261350f48a09028868ccadc68"],["posts/3789971938/index.html","36bef3c6694a302b302637088dd9b320"],["posts/380519286/index.html","6e556163206ad7346124e2dfe89977c7"],["posts/3846545990/index.html","d66b8be19b7bd039a20d0fd53bcf1346"],["posts/3873710624/index.html","71d4c3e92cc5446c5cfa956c681ba0ef"],["posts/3959327595/index.html","9658d9f4a4563e50343ea4f645f4f631"],["posts/3972610476/index.html","c85a994b44da2f04f3683977879a57cc"],["posts/3995512051/index.html","8248c450c4d7f7e31d8b37d35cd32d43"],["posts/4088452183/index.html","9b67c0c9d89e6f282630c616c3c67803"],["posts/4116164325/index.html","9f8082aded1b5fad6905305ec20d66e3"],["posts/4158690468/index.html","b82389b33938cee0f24ce33065650792"],["posts/4159187524/index.html","61b4e676bc32053fc534d3df68d19c48"],["posts/4197961431/index.html","35c7ac02787fa19c353de419a18b4b47"],["posts/4205536912/index.html","c915cf8225f154cb362704ade17e2b85"],["posts/4236649/index.html","8a410092605d9db1d5911b47611d6b5e"],["posts/426338252/index.html","743a54de5a77105db19939b805b3c58e"],["posts/450254281/index.html","e8495aa9c488f5ab7e60188517883501"],["posts/4891372/index.html","e0452a5db1d7e4e0501c3204a9702e79"],["posts/569337285/index.html","9387edb51c6639dd7c664b62882da2c6"],["posts/570137885/index.html","a404d0514906bff0974dfe9ba7b87b3a"],["posts/570888918/index.html","ea1a72b6888242df5a161902e0dcdc29"],["posts/582264328/index.html","f589a00797eff7fbbac9cedb528c9439"],["posts/632291273/index.html","83927eba4d6741f971c5c01c82e240a1"],["posts/70687890/index.html","9ce2c6844e443234f00ac4ef78940797"],["posts/719322223/index.html","694345dce8b6befc3b94cb4796cb63d1"],["posts/720539850/index.html","8209c3f4571d7e5f3315cd3906be7179"],["posts/786195243/index.html","b36071fca2d834b963b0fb46d9c7770f"],["posts/795474045/index.html","bb9522238e9b61c5189a4ef3e50c114a"],["posts/815861661/index.html","8a21b83877ffb82993990bc823e2bc7f"],["posts/821259985/index.html","ff3d545b833ee15dec90845162eb2248"],["posts/828223375/index.html","5bf2ce8eb91f5424fcaaab9803b5d7fb"],["posts/887585917/index.html","108122d62563978ee956967425a64525"],["posts/888549816/index.html","0bdc508bacf8a7529cc0f3ebf4aebaa2"],["posts/906436376/index.html","ecfa5274d68bab7d7822031b34ae2248"],["posts/907824546/index.html","8ec5c3f3e1c1e6fc6f19516082948d4d"],["posts/927393529/index.html","ed6b0e0e0fadcc49a86123036d3dfd00"],["posts/94443781/index.html","a4db0c7965ab90366b9cf94706d11a21"],["tags/2014/index.html","0e06cd9a1c18ccd48e62bd7dab0afd0b"],["tags/2019/index.html","d1a39d13490755b543370071bcbb8402"],["tags/AI/index.html","ad1b1648e0f1f0e00043e69730684bb7"],["tags/AOP/index.html","2042a69fb33f1961b767095583627bf6"],["tags/AR/index.html","f3cde2b582d46062d6d0e2173da6e339"],["tags/AssetBundle/index.html","58a245efdd2157c0dcde71ba7c1c1e5a"],["tags/C/index.html","4c8527c53182a0fe5e3fccc1c70cbcdd"],["tags/CDN/index.html","762793ff7ca9ced31db3b53b3d8e2fc2"],["tags/CG/index.html","c7734834a13a81edc64c1100a042fbb5"],["tags/CI/index.html","fcf56a6d37d3c0298bfa2f40a9bf7ded"],["tags/CORS/index.html","333ea0850868f00b84f2cb236f987a4e"],["tags/CSharp/index.html","467cc7089082c6cfabf07b6238480717"],["tags/Castle/index.html","f74b4848c9ec187b575d9a3c84649424"],["tags/DBeaver/index.html","76e0d6750dcd6bbf48a738d8117c8abb"],["tags/Docker/index.html","b58e9c98e3379c9489948ef2df952628"],["tags/Dynamic-Proxy/index.html","3a45a893c917c412a1d29b28fc03b1fe"],["tags/Dynamic-WebApi/index.html","403bea6d95e9729212eda857e8a84272"],["tags/EF/index.html","b81d36795f37a93c842b8ee7a2aa2912"],["tags/ELK/index.html","856733e40a721f6bdf8af5f12f0e3021"],["tags/ES6/index.html","dca1129c2ad36ddbc7e96e57e28c610e"],["tags/EasyAR/index.html","168c3302f43e38f353ef0c1b849c0896"],["tags/Excel/index.html","fc9fa6f85f514056d9af3d74bd705841"],["tags/FP/index.html","d731b06ced4c0738f38ba191f3e43fb3"],["tags/Form/index.html","88c8780b0d3d1c101e629c2101996310"],["tags/Git/index.html","9dfc669a42c74486c6fa8bfbf4d9231d"],["tags/Github/index.html","790ebae0a866ef46cbe83c73bf54fe4e"],["tags/HTML5/index.html","4d6cb6ce92df99ff2476cd3cf93afebc"],["tags/HTTP/index.html","28bc308f1f7889076139a6a39962850d"],["tags/Hangfire/index.html","ee9aea9928e6b3dddb140fa91d7f7569"],["tags/Hexo/index.html","ed6e7c6267cd93081df0470f33dce3e3"],["tags/HttpClient/index.html","17c4247543db9175858d2aa6a0e4cd33"],["tags/Hyperlog/index.html","c02e06e10f87f3f3deb739d46e48b777"],["tags/IDE/index.html","2fa0bcf3e9f95ae03b9ef46792f7faed"],["tags/JS/index.html","591d44a38f63eb3bdfe6adc5565f6577"],["tags/JSON/index.html","4d0463ac796f241ebd4c5be6831e0057"],["tags/JSONP/index.html","1e709bbfe09beaa04576a7f9499fc82a"],["tags/Java/index.html","e0bc369120ebe7c805281eeccb006e27"],["tags/JavaScript/index.html","f501a90a2c81934d0914f582ae2dd714"],["tags/Jexus/index.html","169f73ea617700c42c5e751e357cf02d"],["tags/Kindle/index.html","6afa7038a543871c4d6dd2fb58c2e68a"],["tags/Lambda/index.html","197ac8fc4a39f49851d7ce8f1ce34f3b"],["tags/Linux/index.html","97acadd6cf046ca4f00258d47e7f1e77"],["tags/Liquid/index.html","3dc761ef1f4cb0235d927e943ccc9003"],["tags/Logger/index.html","c973f0fabfbdc5bfa85a9bd10697f019"],["tags/Love2D/index.html","a79b2426a4d6e33f8ff7993390138c60"],["tags/Lua/index.html","58b2b1297ef522d9da9861d1f4f968d4"],["tags/MMD/index.html","4f807cc61874ee8aa2e0c2a644248881"],["tags/MSBuild/index.html","ef63680e159fc07de71c8ba910b860d2"],["tags/MVC/index.html","f5446f8ce7e44e07481d9841b5b813be"],["tags/MVVM/index.html","935f2c56d9b0931d3ce311ff3e7ca1c6"],["tags/MapReduce/index.html","d9d45887224956ea54c26a859f936d5e"],["tags/Markdown/index.html","3a6232622d450538bab1d4da7f3e1c1f"],["tags/Mecanim/index.html","261e90143ae0f5058771282e0d978d83"],["tags/Mono/index.html","93c5815835fab016231f77f9e4e95a4d"],["tags/NET-Core/index.html","45d57e5d89dee25b4c05a6267d32deb0"],["tags/NET/index.html","9fd154b627de57012a94a04c4b50a1b2"],["tags/Nginx/index.html","b117b0d4b3b9623f7ce49806a68dc1c8"],["tags/OBJ/index.html","c3fa6556dc52ece36d9048fa09a75a37"],["tags/Oracle/index.html","760e3cf60f089e99bbc0dc7ea05d55ed"],["tags/PL-SQL/index.html","be055f889ac31be4b1a577bf220dcc5a"],["tags/POCOController/index.html","6fbf6633ec2652b17a6552ed372fc7bb"],["tags/PWA/index.html","be4c6f73d5de08dd88e36216c5fd8981"],["tags/Python/index.html","6008799a0dc1741bb83ffff36792d612"],["tags/RESTful/index.html","9e8761d4e6284d4b09a156e294ecb875"],["tags/RFC/index.html","d542894637ed96c9584bfcf43ecee5ab"],["tags/RPG/index.html","f412b111dc9f1efd2fd47494b2c9325f"],["tags/RSETful/index.html","e78f8fb42142e5ce8abe7add1e156799"],["tags/React/index.html","a2f67c7c61f10036422d0a1c4539323a"],["tags/Redis/index.html","f0925f2a55feb471ba05f67e00a308f5"],["tags/Referrer/index.html","76759b070e6e02f7e9aa0bec4f894e0f"],["tags/SDL/index.html","18198b19cdc1a0a456516c426c8246df"],["tags/SQLite/index.html","1851ed71b1011199323dff39fab24ca3"],["tags/SSE/index.html","7c7b71868f9ad07f93a5375e91bffbe5"],["tags/SVN/index.html","95650ae95f7d60ea854734d503c076bf"],["tags/Script/index.html","5b7ac9b60a73409ebed630663e1bb3c7"],["tags/Server酱/index.html","8f3b88240a2e2cde2f5831ec83fb7832"],["tags/Shader/index.html","34592e9cd5229a95496d9cacc6af7e6b"],["tags/SignalR/index.html","468fc3cb606caa2c8f0d92e8993913b7"],["tags/Socket/index.html","b454388ef41591bbc9e251d5049b1ece"],["tags/Sonar/index.html","8763a87a865f128a7aa7b321cc73f01d"],["tags/SourceTree/index.html","22e9519b3f03a52d6289a0db2766780d"],["tags/Sublime/index.html","4314293e00c63346592172572d0d92be"],["tags/Swagger/index.html","e3baede444880ea254208c72672f4a4f"],["tags/Trace/index.html","809dcc896268e8df1c70ba2a8aeba6d0"],["tags/Travis/index.html","76779d757404f0e4301ca828401a3a20"],["tags/Unity/index.html","0dcac84e203acea3341dcb6411cc1133"],["tags/Unity3D/index.html","02a9a4c572e6d376470df429dc918482"],["tags/Unity3D/pages/2/index.html","eb88789f4bab44ef15c67c6e88a506bb"],["tags/Unity3D/pages/3/index.html","c5ec746eac817f9cfe7da7b4fc93a524"],["tags/VSCode/index.html","c396d02f6a560b3310ffe1fa9c1aa75c"],["tags/Valine/index.html","59440744dd603835d8b0062221a5dd95"],["tags/Visual-Studio/index.html","338059d1a39ac5cf43ed16142c00bbbb"],["tags/Vue/index.html","01f0b76eb22bb440c111f5e0f465d511"],["tags/WSL/index.html","0b26b2ba2f2c238e630c0127048c3b88"],["tags/Web-API/index.html","f9901c5fe60f6b1a74beca1c162c6969"],["tags/Web/index.html","8dc3c04a73d86013a56067ab2fcc2deb"],["tags/WebApi/index.html","95884fa7558a0c1f19b49b31d342f2ab"],["tags/WebSocket/index.html","8a69d7bf4cf6eb27a6f6c7a6ce722c6a"],["tags/Wechat/index.html","65353608d51ce295184d56c5a6bf973b"],["tags/Windows/index.html","4bbbdba5d3918beef42f14dc7df98709"],["tags/disunity/index.html","3e54fcb0f02a376e43a4f8659a4e5143"],["tags/index.html","70664aea881f015c8f54abf6eafc603d"],["tags/jsDelivr/index.html","3b785bc06959ea2d3801da8611cd7a4c"],["tags/matplotlib/index.html","099520481ec74a4e49bb0d5ea2172633"],["tags/uGUI/index.html","23781bc2564f14e2c7eeb66a2fcab85c"],["tags/zTree/index.html","a932e4d2916e825ae2bcb40b41d8ffda"],["tags/一出好戏/index.html","22704a2e45df2be3d87293cfbbcb8042"],["tags/七牛/index.html","6175cb06d79091264c7afc3cc7db094e"],["tags/主从复制/index.html","c7386ad583eca132b79ce9d58cd6dbe6"],["tags/事件/index.html","d8e7d55298ef7dec762672f507c01a08"],["tags/二维码/index.html","6f45a7ef6a21f28333f2ae58bdcaee6a"],["tags/云音乐/index.html","0bc287aef9939cfd6e7378419bc3193e"],["tags/互联网/index.html","6387d656a56c9c862af40cf6d1ceaf0b"],["tags/亲情/index.html","4c024e7cdf005095a9ce261d305230d5"],["tags/人文/index.html","483278c943d341022c945de7d7c2e713"],["tags/人生/index.html","7e521b870fb7978fdff3c0689a8938b3"],["tags/仙剑奇侠传/index.html","a1802477a21167f53712a9bc008f50e5"],["tags/价值/index.html","1c0376d3cffda639336402f533c9d324"],["tags/优化/index.html","8b6dcccde974e982cce83cfadd7d79ce"],["tags/全智贤/index.html","b5d0ab83f75abb3554a26f2c9625e49a"],["tags/公众号/index.html","e0684481a37b9a7b5b58128894629609"],["tags/关卡系统/index.html","9e8151696def480d4f35c07257b80fb0"],["tags/函数式编程/index.html","49b4b25cb32a8e20387668db60008634"],["tags/别离/index.html","28af941bd9ace9a1c0d6880ab6c4afb4"],["tags/前任/index.html","719f10921e1df478282288225b1ce01f"],["tags/前端/index.html","4fbe57f8af515835e7950b4a4ec8dbe1"],["tags/剑指Offer/index.html","640d88fd9d9abf0cdccbcabe97367616"],["tags/加密/index.html","f764e0712b45f23c90615362718a95d2"],["tags/动态代理/index.html","f3c5b3b7153089c7a298f2dcd26a7e69"],["tags/动态加载/index.html","8aa9aa46ae5cdcb72bda44750bf44653"],["tags/动画/index.html","2dff597ca7ff537bdb667b64d030d016"],["tags/单位/index.html","8e6d0d348283742287ad65da1a71ee76"],["tags/单机游戏/index.html","31a3288ee6f6973b017451034fcdf27c"],["tags/印度/index.html","53a71994d91d2be97c376f3b741ae8e7"],["tags/历史/index.html","fad3bbd8a0da06ef744b76f22d2c5c98"],["tags/反编译/index.html","d499996d265c324fa88de790def57ec5"],["tags/同步/index.html","08a97be7c49b9cebf41fd4f763ae4655"],["tags/后端/index.html","70355bff0e6022ab24e53767fbe745d4"],["tags/命令/index.html","839f031a8a7a86b1f3d7677ef998d7f4"],["tags/和平/index.html","08f3f2d643ce3305756e7c7e499bfd22"],["tags/响应式/index.html","10576d31306ea7d1c2b2328f1b0cf217"],["tags/哲学/index.html","296463dacfd6dcacbd7bd198695a6f3c"],["tags/回家/index.html","06fafb79ce398eecb5921ddb57bae9c2"],["tags/回忆/index.html","5f503b4915aa74809c88c8d3d251081a"],["tags/回顾/index.html","f8710fc176712e9442a774e4e4b6b72b"],["tags/回首/index.html","f84a1882d2a90898e93ce46123224516"],["tags/图床/index.html","51c709d2bec02f9cbb6e2ae63ee94427"],["tags/图形/index.html","11bd0fc34d9430ba5fed880f39251307"],["tags/地图/index.html","c4c8f404b28b2ea014206ee0b947988e"],["tags/塔防/index.html","8aa37ea6bed983a8efe2ddc4b2187c1e"],["tags/增强现实/index.html","843960a0b367f20f9027a79641cef840"],["tags/壁纸/index.html","f5d1c5642330c911ecd52c8c9dac1197"],["tags/夏目漱石/index.html","41d1398f9910c777dd5acf15a79be5ab"],["tags/多线程/index.html","6b1319fb146d4866a7dc61bf70d5e256"],["tags/大护法/index.html","b9108f4d520b00cbfa634b85bfaff020"],["tags/委托/index.html","ca410757f497ea6442e67753674f88da"],["tags/孤独/index.html","bbc82fa4678b41bd186e97484a3905ce"],["tags/展望/index.html","cae775de964c30ac988dbe1dcb65e009"],["tags/工作/index.html","252d642e03a6e2eaefc95406e57eba39"],["tags/平凡/index.html","348166d9b861103a70b620c59965a8b0"],["tags/年华/index.html","95746b2fa4b90837ace9f02e894d9809"],["tags/年度/index.html","de5dbe279584113683b6a59d8494e76b"],["tags/开源/index.html","ff53f327d2a29db237c984fd367aef89"],["tags/异常/index.html","35ac72b2e5a29b41a49d31752779049f"],["tags/异步/index.html","3f22d354fa9967f8510f5062e3f639c8"],["tags/引擎/index.html","c6e05cd8a33ca0564c3bec2955b312a5"],["tags/影评/index.html","b2be424b77a55858970a7dd5a8cda860"],["tags/微信/index.html","41de6a59afffacd2ada6020f128939a6"],["tags/微博/index.html","7b311307ae6e15d66b5cb393eed80fb0"],["tags/心情/index.html","e4fb0997d69a3488eaa00acb629d721c"],["tags/思维/index.html","e87425bb1f75f4c97118615349497816"],["tags/总结/index.html","01fc559ffde71c925cd91c1fe6239243"],["tags/想法/index.html","a3ace2a52027995da4470b17c1527f46"],["tags/感悟/index.html","1a33cd0f785b13b78ecf46f45df145ed"],["tags/成长/index.html","7f2deee9391f5e0d659b6a49d4574c03"],["tags/我是猫/index.html","5deb1d7cc025a2489697a500159e34b6"],["tags/扩展/index.html","d213d30d0cade51600f5249eb9458eb5"],["tags/扩展方法/index.html","86336c78213df9239da7c0dfe7c97c9c"],["tags/技术/index.html","019454d85c799372102e4a1868e8dab7"],["tags/拖拽/index.html","1c8429db218591e2a4a0beab64a5249b"],["tags/插件/index.html","2a8cb678f01a223acc6bafb98b87321f"],["tags/插件化/index.html","118080e3a9a7a95e900a769008e46fba"],["tags/数字/index.html","d4522a1061336f12d07c5c02cee61362"],["tags/数学/index.html","69d3e85141fdd16539625dcc6d727ea8"],["tags/数据/index.html","eaa6cb2bbb6274b0f10c4e1ef61337ce"],["tags/数据交换/index.html","d3705864e047416fbd8b7dac07a84084"],["tags/数据库/index.html","f79a3e0d8a9950d503273d7dd854229e"],["tags/文本分类/index.html","3ef508a4b49bc74323aca4f226ecc60b"],["tags/无问西东/index.html","2e13801b30184b89584648ad5bf11805"],["tags/日剧/index.html","75eb445e045e17632c2dff093de64817"],["tags/日志/index.html","9c0fb317893a721f2465a66ae1ee7c35"],["tags/日本文学/index.html","0986172480d1249d79e1335a4b1a2f3f"],["tags/时区/index.html","4642ecb6672bd1016d268c6256f57fe0"],["tags/时间/index.html","9ada9588429bb7afa28f15c626520a0a"],["tags/服务器/index.html","1886eff937cfa30259f071b4c8dee1e4"],["tags/朝圣/index.html","1eeabb21793797d9661b294f31aff330"],["tags/朴素贝叶斯/index.html","505f904b2f4f822c0eeaef4e5d86c8cf"],["tags/架构/index.html","6595c677ec718efe124941b1189f1d0a"],["tags/标注/index.html","1c16d94bd88d8c60f5df54722f53533f"],["tags/校验/index.html","29bf803635dbb04ce9a2eaeaae2459cc"],["tags/格式/index.html","dc0bc7da6754cb8b830945a2ea6e73cd"],["tags/格式化/index.html","c5d26330956d08c4f52ed9527b8ba379"],["tags/桌面/index.html","1f4fccd380008bd78b2950db055625ca"],["tags/梦想/index.html","8f8825717375533fa1c42181c8d0d327"],["tags/概率/index.html","17486e636f4c1a35bba9d7bbe71232a6"],["tags/模板/index.html","87b9e28240f63a03aa22edd3b4a40ae4"],["tags/模板引擎/index.html","5abda96f5a5ac8ad54a8b4e815f09bd2"],["tags/毕业/index.html","169a53c01f7c9ef9649f41e18c298301"],["tags/毕业季/index.html","eca3dd989b1e371a364dd1a3fa9ce43f"],["tags/消息/index.html","6569cde1b9e142949b9b36d6660a212c"],["tags/游戏/index.html","3d1e338ada90404109b53ba97da35a64"],["tags/游戏/pages/2/index.html","556efcd2c1667b7ce289f7f954bb9629"],["tags/游戏开发/index.html","f38f4b80c87c910b3d8e1642558741e8"],["tags/游戏引擎/index.html","b6753703d2427d22551bbeccda7807cf"],["tags/爱情/index.html","b580c9a2b31eb3dfe6b9e756e84a27af"],["tags/版本控制/index.html","292430c8ac52c13ba204e9c7fa2d1360"],["tags/版权/index.html","9d691cf3a96a63b7c29d1d5fc63436ec"],["tags/特性/index.html","13a469763955092a037781d4726e2b99"],["tags/状态/index.html","b7e115dd2a53881d846c1ccc7b5143dc"],["tags/现实/index.html","936814c2018704d37be8e6a6a48531ec"],["tags/生活/index.html","4b378ccd974f9397261295f1cfca01f9"],["tags/电影/index.html","ca12d5ab60852cee1d3012f1997ff16c"],["tags/画家/index.html","f014050f235a77236e1298fc5e0e1191"],["tags/知识共享/index.html","12c6326e6dc356538769505d47a1458b"],["tags/矫情/index.html","54934f812d9935466dd04b6f83b5c7b0"],["tags/程序员/index.html","203ffcd11b6a0cdcf9f301e1517dd543"],["tags/穹之扉/index.html","a5a07799ed5acca48873646e14aaee3b"],["tags/穿搭/index.html","441f9c8d7bb124166f95d70e5296c166"],["tags/童话/index.html","9a19a81c4726fe863b4cc9783e5b330f"],["tags/笔记/index.html","34e15f27a16d9419720bccc2690bce56"],["tags/算法/index.html","3c4751317d333411fe915dee4935dad6"],["tags/米花之味/index.html","417d2ce937ca415fa6706b3b20825135"],["tags/缓存/index.html","a2998d65351a07ef712931c47419a18c"],["tags/编程/index.html","77bbe8a263e30432b7916a0ecddb7030"],["tags/编译/index.html","3753aa280adda14bdfb7e686e9213f21"],["tags/编辑器/index.html","8aa5042607724d3dafbaa9ec27c08cf1"],["tags/网易/index.html","7b2889eba923b0207f9e1e958fbe9bf1"],["tags/脚本/index.html","8be2eb90c8c89f9446cdf0007d2d7d70"],["tags/脚本语言/index.html","27323c0363984fa95892a888bfa44bbf"],["tags/虚拟摇杆/index.html","31d9f8082c1c99ee87099e15fe425198"],["tags/蛋炒饭/index.html","8614fa99103482d8d4e6f86f301b2f43"],["tags/表单/index.html","59c96cc5e262de8a2443613572acd9eb"],["tags/装饰器/index.html","3aa67405c02df588440af79a8699aa8c"],["tags/西安/index.html","dbb3fa779828bd70ceab017bb687ae0a"],["tags/计算机图形/index.html","ea4ba95c41dc9ecbe72d18a4deff75d5"],["tags/设计/index.html","4b68c12e8547740f41f458515cad15fe"],["tags/设计模式/index.html","7509eb339d35bd75162f47cd3bbc77f2"],["tags/访问量/index.html","98333c81b85947c55b9e244b5a700378"],["tags/评论/index.html","b265453d90923672b7a3002800ed64e8"],["tags/词云/index.html","00f93a90f7339ee92c3d728a195cb2fb"],["tags/诗人/index.html","8e7eea30767bb930fe1d0fe521490900"],["tags/语法/index.html","a2d1ff736dff4853407857b323e47b40"],["tags/请记住我/index.html","38a59ff05c05ac423067b8115570454d"],["tags/读书/index.html","ce14d60a74c7d935e95f88eba3ba984f"],["tags/读写分离/index.html","40f1e63e75eda9f19f78629f72e608b5"],["tags/调试/index.html","73fa1df3f6cad0d366bf9922d7dedbf2"],["tags/贝塞尔曲线/index.html","ea21029f030c382c1a89ef5ee167f3a1"],["tags/贪吃蛇/index.html","4e798965e9a949a82d65868918f6f7f6"],["tags/资源提取/index.html","630b35002037d2d0ba08f6a6d166f5ae"],["tags/跨域/index.html","44b223cf07969e2721ec8f02920f9a51"],["tags/跨平台/index.html","c1521d976a9b9cbf7cec8ce180e4f499"],["tags/转盘/index.html","c85f78d8eb6f5e49cd87a87c5afd89e5"],["tags/迁移/index.html","2dea6ec417211dd72336f76cb5f6b847"],["tags/通信/index.html","6ae457befcc046078d5c6273c4cfd23c"],["tags/邪不压正/index.html","28701b5973f65ab4046ff25306fe9d71"],["tags/部署/index.html","aee107da8d29078cfdd4f35296f238ff"],["tags/配载/index.html","1acd8dbb6143c0eabafae837a71fbc2b"],["tags/重试/index.html","be1b03b2026bec27290ab861832c968f"],["tags/长安/index.html","9d983e7d698a1c3389a2157758fb1cb4"],["tags/长安十二时辰/index.html","c22dfc74fce1b591c98f0086138d5c5d"],["tags/阅读/index.html","bc3a31990ee1fafa03433484dd5d159d"],["tags/阿里/index.html","8e03f4f76af711496d4457065bcf8f13"],["tags/随笔/index.html","682f44f16c088244bb430cddbce1ca28"],["tags/霍金/index.html","6535f1a53ec5246d15629d03930bf065"],["tags/青春/index.html","499db8118bd935625a41c474f84e09d1"],["tags/面试/index.html","4bb5eda2206fdca4f11cc316e08501f9"],["tags/韩寒/index.html","f98ab1d05ef441c3a55f45e164aeaf60"],["tags/马尔克斯/index.html","4de095be0dc30cf3e019eebb850fb2d4"],["tags/验证/index.html","524c667135771c7d48ae2efdf8fd52e4"],["tags/黑客/index.html","30c37fe175e5b0e3643b37f382b7f897"],["wiki/index.html","96b41b84f0c4c021130a3f7d7a0e606c"],["works/index.html","c1e3f54cbae9453febc159c696aa4437"]];
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







