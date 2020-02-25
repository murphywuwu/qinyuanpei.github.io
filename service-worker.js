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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","965cda0921f5b8f979196428dc3f0fa1"],["archives/2014/12/index.html","86d1cc6f4dfbb3ee194fa714f92f6773"],["archives/2014/index.html","5a6bbca8a920dca86f15d10553a8199e"],["archives/2015/01/index.html","2dcd6b07655022be3b52bc151bbf5861"],["archives/2015/02/index.html","f1d2ad1c329dfa8c9cabac2286f7e6ca"],["archives/2015/03/index.html","e8c419cf1682a0cbc6b851bfd76c964b"],["archives/2015/04/index.html","e05a4823173f825f905760dafc99a254"],["archives/2015/05/index.html","42f985abaede15a0bfe9d518cf7cc92d"],["archives/2015/06/index.html","65e9d54017cb8f04f8b18591ce903c89"],["archives/2015/07/index.html","33e8d2ac190668e8605613b50bcc7518"],["archives/2015/08/index.html","d8b9547f06d0ab045ceac48e83ba5ec6"],["archives/2015/09/index.html","32c114059b05406397f1267a384bcaed"],["archives/2015/10/index.html","b3fe7b80b4db01937265b3b42361e860"],["archives/2015/11/index.html","d7628f9d05d9a95257b8a9f0ba8ce63b"],["archives/2015/12/index.html","e49a6b5feae44e723e785016741cf063"],["archives/2015/index.html","58f0dba76bd3f9209df677ab8ae6f847"],["archives/2015/pages/2/index.html","4f7b3952375fcca9c36b96280078f12f"],["archives/2015/pages/3/index.html","973e9dd2f89a055c65238ab9d10141cc"],["archives/2015/pages/4/index.html","a677f3a4d752ea5bcc0de023a267465d"],["archives/2015/pages/5/index.html","d0f6ae8aa4f83b85b98336df5df96b25"],["archives/2015/pages/6/index.html","282440ff162ecfca89f90decd48f874b"],["archives/2016/01/index.html","c053cbc60da42e7af8e1ef1a246e845a"],["archives/2016/03/index.html","757885ede7659a143b1d0553ccd4616a"],["archives/2016/05/index.html","b1700ace34988c7109760c33a78353f5"],["archives/2016/06/index.html","cd46331a2b9e7c1f70f506944dcd78b7"],["archives/2016/07/index.html","fc09b9b578257132018b93673541e072"],["archives/2016/09/index.html","ba3a8616d9b158c9e492fffa22b51672"],["archives/2016/10/index.html","4f6d8c4d26c46f51655b340ad07e5ca4"],["archives/2016/11/index.html","a263eefe10d603f62b68558d597b5c59"],["archives/2016/index.html","ec2d06f83b2c543d0b7fe10464a359b5"],["archives/2016/pages/2/index.html","3fb7f72d92085d43ca86511cdc4d876b"],["archives/2016/pages/3/index.html","28dc37e70720a15d9e52f7c9ec3b2c3f"],["archives/2017/02/index.html","cb7f6e91dbf279f0e458a87c7e03d681"],["archives/2017/03/index.html","917c0ed1885488f2f8eaf2a7e287c880"],["archives/2017/04/index.html","eafe22ab5a1bca291b449801d2455e55"],["archives/2017/05/index.html","be99a3b2722be47ddeb2b1b90a0ccf3e"],["archives/2017/07/index.html","91f53bd664be45246ddb99499fa20068"],["archives/2017/08/index.html","70f0e23b5c84c4e27df07c4f50bcdef5"],["archives/2017/09/index.html","a20024b8f30ab273f59f462883f1281b"],["archives/2017/10/index.html","5f863b052741e62f749127ed4f3c2d52"],["archives/2017/11/index.html","1b4e0c93865ab48ffb5abe7f9279e056"],["archives/2017/12/index.html","a833950671a0c4576f3c2fab8fb91cb9"],["archives/2017/index.html","93d5a6f36bab182f5fd88598baf63dfa"],["archives/2017/pages/2/index.html","f858cf6b4f16b76d002a91e5b8ca9185"],["archives/2018/01/index.html","4d7c627b678f2d0845aeb4579043b2fc"],["archives/2018/02/index.html","fdb8190e98c7d65532457fefc6be9fc6"],["archives/2018/03/index.html","769d4dd8ee78943d5db1bb4e6c92ec5b"],["archives/2018/04/index.html","23dacfcb506043b96469607251e868ef"],["archives/2018/05/index.html","0bfa398dd7c3b97078cc5222ea02621f"],["archives/2018/06/index.html","d5a6958affa69d583fcdc8fae79ddae6"],["archives/2018/07/index.html","05ad5727c5c6afeafc7950993808fb0b"],["archives/2018/08/index.html","79c4e15acfc4d6ffb39f7eae0e22777f"],["archives/2018/09/index.html","3f2b1d7457ca0176d9b88949aa5f9cbc"],["archives/2018/10/index.html","ff234bd910bb0e9492352180b4d7726c"],["archives/2018/index.html","a00774453e876151482741e1b3070b07"],["archives/2018/pages/2/index.html","0275461de63b1a21a8d817dea4b42ae2"],["archives/2018/pages/3/index.html","ac2fd5187cd778a782dc8a212a1599a2"],["archives/2018/pages/4/index.html","5dd32692324275ad230b47745d83c33c"],["archives/2019/01/index.html","2eef96a0473df6c7db7f85b052d1c444"],["archives/2019/02/index.html","c41dbce2ea3e2fc19dcda772dfd3477a"],["archives/2019/03/index.html","84365d9bbd2eaee969b08fbdf10c7882"],["archives/2019/04/index.html","d62f8407c05b702bef57d3509e46de27"],["archives/2019/05/index.html","4b1376fc743b7c57e66a72de6b3e3253"],["archives/2019/06/index.html","d3272d29b730c791031ab30357e727cd"],["archives/2019/07/index.html","733e3fa2500bec34f7ce3c51d9dc5536"],["archives/2019/08/index.html","74fa9b6bdd1d2c5de555e10c7737873d"],["archives/2019/09/index.html","f1860596fffc8c04716407d5a4f13b3b"],["archives/2019/10/index.html","7625201af5cbcc4f70bbb8668a87a433"],["archives/2019/11/index.html","606a5b06c14428fb6bd061ef2468bc55"],["archives/2019/12/index.html","173e83ae87d6f15e46a7ab8dcf0ca7ff"],["archives/2019/index.html","8b0f04233b25699f55ba4b7e08f0df66"],["archives/2019/pages/2/index.html","a98f5369b6cb628232aec29195b428b3"],["archives/2019/pages/3/index.html","18d713d9b5e0a56e231dbb23692e142f"],["archives/2020/01/index.html","9fdd0240ec54ee2f59260ff0ee25d1df"],["archives/2020/02/index.html","5aacc4ade29d165cfcc881e0dd4a2bb4"],["archives/2020/index.html","a9bc6968d062e25137899ac3281a3dae"],["archives/index.html","359709982956d783086cb10bffad485e"],["archives/pages/10/index.html","c97b782b6727d5ad688da72a8e54be2b"],["archives/pages/11/index.html","b413d7e3ea6c7c2d8ec75317f4197434"],["archives/pages/12/index.html","7d66eb075963aea4871694ff80f31d8c"],["archives/pages/13/index.html","d519fe210cfac1ce55de75c87c32fa39"],["archives/pages/14/index.html","8ef2c050ff5f0d9ab13271ff366aecc7"],["archives/pages/15/index.html","d5a4af1057a4d347cfb168b091b2f62c"],["archives/pages/16/index.html","ee4853759fb059d1fad74301dc65da73"],["archives/pages/2/index.html","45a6de3c470fad4e0d7d9562e7002142"],["archives/pages/3/index.html","90e4a8cc4deba737d6021a635fe97c1e"],["archives/pages/4/index.html","2b46c360bb9e9a1d1eee19a866d3b797"],["archives/pages/5/index.html","23937e7da1b00813e22b29af2999c5e7"],["archives/pages/6/index.html","24db94e603dafb1fc011e3a5bb682fcd"],["archives/pages/7/index.html","fc91ce0738de77320e998341b153ff7e"],["archives/pages/8/index.html","d9147525c447af2ac840ba1083a509de"],["archives/pages/9/index.html","8875ce3968fc395e309c99ce8c875ec6"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","8bec31343a3cb3fdf4d3e45c552631ba"],["categories/Unity3D/index.html","8aaf50bfdae95ab2006b7aa967ceab8f"],["categories/Unity3D/pages/2/index.html","02a7db8bbd6c019afbe8cdee04d29ce8"],["categories/index.html","5f2e1a498f8c6d49cb0806443f1dd5d4"],["categories/人工智能/index.html","353c2b92d304e7ffa9182a95e18fa20a"],["categories/前端开发/index.html","f21e14af28035308dc99e2a9aa9c034f"],["categories/单机游戏/index.html","89c0e7a91606571d50017fcae7d60f09"],["categories/开发工具/index.html","04bcf7b8741968af786ce19b766ac862"],["categories/数据分析/index.html","bac764c494a2e777701c41019b56ebd8"],["categories/数据存储/index.html","a7300b2e53315e731c72a06bc884e25d"],["categories/游戏开发/index.html","9162a0e80d8f20b9e74269cdb0958d0f"],["categories/游戏开发/pages/2/index.html","56117ca938f9aaeb9660379f9e094a82"],["categories/游戏引擎/index.html","2a5357b610ec26b1ffd0882b95d03d74"],["categories/独立博客/index.html","9d1ab8fa86b42f14684955e05b991f1b"],["categories/生活感悟/index.html","ca384e4f3cf6e834702c5ca008fb08bc"],["categories/生活感悟/pages/2/index.html","91acd6883281423033016e56565645f1"],["categories/生活感悟/pages/3/index.html","a4cc0c60938a83f763b6124755fb9267"],["categories/编程语言/index.html","5ef8f3d2dfd7dd36ec63b89c9ac7c293"],["categories/编程语言/pages/2/index.html","414cdc07a71d7471829ea955b73b271a"],["categories/编程语言/pages/3/index.html","c8701d55d8c0968d5470a41971fb049d"],["categories/编程语言/pages/4/index.html","5672a441d73dfeffabe93f5989ac5d50"],["categories/编程语言/pages/5/index.html","f38cb8d7030005d7c8f1ce78abda942e"],["categories/读书笔记/index.html","61afa686f551f0220c09eaa56ce97b42"],["categories/读书笔记/pages/2/index.html","39ee45755622864abbd914880d726e0c"],["friends/index.html","252fb136b49662949cff29e4787ad4a7"],["index.html","4977e5cbed29f8c1ee8f14619e16c1b1"],["movies/index.html","fdc2ae249af954493cd25f96492035dc"],["musics/index.html","90b01d61ed578f09f3cd06bfa6bdeb66"],["pages/10/index.html","eed1bd0258103a1992e8d5aa3c62fbb0"],["pages/11/index.html","37b496109f5faea43222ee8274ba1dc9"],["pages/12/index.html","43b08634df5c994bad585cf413b9b6cd"],["pages/13/index.html","34232767c79388d241c5d20edc2d335d"],["pages/14/index.html","ddb618fdbd45f89e04a74f983ccb37e4"],["pages/15/index.html","b32b8f16f33cc1dd2cbfb14b34d26e1b"],["pages/16/index.html","925db9d6a67924bf20fc8d95940025b0"],["pages/2/index.html","fe5140a50b890c7bc54fdbe984be7322"],["pages/3/index.html","22f6f93269487b36366a81410c53b10b"],["pages/4/index.html","45c18543c826204271a350040fff170c"],["pages/5/index.html","350b96e8c6624be376dcb8084689bf0b"],["pages/6/index.html","c3941b730e9ae7941bfa649d14c92a03"],["pages/7/index.html","559af4f6e4b01ecfc88292f5d96b7465"],["pages/8/index.html","410e29fbf6776917926aef676aeb44d8"],["pages/9/index.html","13310bc59adf7b19b621c45c5c821591"],["posts/1059499448/index.html","fb20750d3fae3d375f0977f57c3d6923"],["posts/1071063696/index.html","2511ae1332df8bc82fe13ef70661b94e"],["posts/1082185388/index.html","5e931b8af5a216b153f23d24a071a3fd"],["posts/1099762326/index.html","f689ad4e5b384640261a26b005efa477"],["posts/1113828794/index.html","2078ed99714bb55538ad6ae6d0562f18"],["posts/1118169753/index.html","c7d08e65c0b61086a44baaa692f48f09"],["posts/1122710277/index.html","b910a6dfe0bc03e1f283880de2cd0c12"],["posts/1124152964/index.html","5a5dd7e416f9583e59d3520c553245a0"],["posts/1127467740/index.html","453c4dd12504381f7a7c9060003f550e"],["posts/1150071886/index.html","b444cc5aef8cfbc6a4aa1e7a5e2af43a"],["posts/1150143610/index.html","8a7de5dbbf216faf813d9e2665e6ee2c"],["posts/1152813120/index.html","a57e99fd3bf965de37e588f20b6e7ccb"],["posts/115524443/index.html","605acce7914b3f617967fa4dd25bc1a2"],["posts/1156673678/index.html","5334adc120806c584b8221a65c7f28ef"],["posts/1166840790/index.html","62798dba0a1d9f4ba011e98d222903ba"],["posts/116795088/index.html","b968c257f3e432ccd7df6521b7391b66"],["posts/1176959868/index.html","bfb9251827f4c53513bc745a2a853c8f"],["posts/1190622881/index.html","7a748c0120801aeb52fb3a852dd2594a"],["posts/123663202/index.html","36eb7d910d94c886078bcaf359140cc5"],["posts/124807650/index.html","404a76a20a42c810259a731c081168de"],["posts/1254783039/index.html","9ebd460a89f00233fc9fcb890477f8b5"],["posts/1320325685/index.html","6b59057dbdd6a8a1c251cbc0c3317b12"],["posts/1329254441/index.html","2d365f3fc022bc2ba46dfed33fe651db"],["posts/1357715684/index.html","8bcd3af31dddec0ca0ed8a8ecc272d72"],["posts/1358971951/index.html","937761a472c163bfceb44e976ee26f93"],["posts/1386017461/index.html","6a33f816538d2006d9dfdf8af2322f6a"],["posts/1394521917/index.html","9ae0192f2d3d8a46267b6be39035628e"],["posts/1397717193/index.html","d1bcac39b72a004cfa9ab4f5a63cc8eb"],["posts/1417719502/index.html","64a44148aefee4d6383895c5b7927d04"],["posts/1424645834/index.html","700f4d4750088a4c7c0a812317666b87"],["posts/1444577573/index.html","e648993a866c93da1400f12356e10619"],["posts/1467630055/index.html","3ce7a59f8a13526861245e9e126449fa"],["posts/1478979553/index.html","0784c582fcaec1ed2432e15f1c3eff03"],["posts/1540537013/index.html","ebe74b649fec89cfcc766662d3057780"],["posts/166983157/index.html","4dca38c9a04204f105fc7ed89edf4ea3"],["posts/1670305415/index.html","d6195aba657b4efc43850f6b6103c2b3"],["posts/1684318907/index.html","f3888eda5f278cdcfcdc74f158ebc9f3"],["posts/169430744/index.html","bdaf14dfbcb05e195507d524e7e4a37e"],["posts/1700650235/index.html","3606a739304a6700d30a4893759c7da5"],["posts/172426938/index.html","250f6c575806003198d691d617b137b4"],["posts/1836680899/index.html","d7e4b03cb1ab20beeb0c0aecfe19a5db"],["posts/183718218/index.html","0513eb5df8f931f79fb6a6ef8c10d7c9"],["posts/187480982/index.html","150eff8978fae0dfb39c3c35f4cfbf16"],["posts/1930050594/index.html","e71cf4cd738bf25af88ca0632584ff86"],["posts/1933583281/index.html","e636f5cce4406b7ef011d2d4abd98e2f"],["posts/1940333895/index.html","2205560e1a425a25483bb1666a60f58b"],["posts/1960676615/index.html","dd7a1640211ae317bdfa64a779798415"],["posts/1983298072/index.html","a4fa6f91845b829df79fc3293bff479c"],["posts/1989654282/index.html","ae4ccb43074440e65ce2f6ad943f2513"],["posts/2015300310/index.html","f3d61660ca3e66c1bf8e06e57524eeff"],["posts/2038378679/index.html","09c59aa20869bfbc57ae2046d50c54cd"],["posts/2041685704/index.html","25e25a7f49f1b3d58fb452ac6f1db198"],["posts/21112647/index.html","b2b44e80b0b33257b49ef9abb4df09ac"],["posts/2158696176/index.html","f9c7c28dcb4ba8fa68e6662da70efe56"],["posts/2171683728/index.html","4789e695667606e89570ecb0a4cff076"],["posts/2186770732/index.html","8c6f77edd3f3d14754bdaee9a1cc00b1"],["posts/2275646954/index.html","18cef3ecca55c63af1cfcb2acb55288f"],["posts/2314414875/index.html","4d32e2216880ad41f0fbcba8818ca437"],["posts/2318173297/index.html","ed361186177e31b6024e3cdafd6ab22d"],["posts/2418566449/index.html","77585e62196768c7703458fbf6e20f85"],["posts/2436573863/index.html","47454ba639da0299aa2881af23cbec84"],["posts/2462008667/index.html","c24b5665d2a2b0d0942fed398d41275c"],["posts/2463121881/index.html","3ab80cc6dee4e1e434a5205891153733"],["posts/2527231326/index.html","e97fd66ce279edbeac995515d71c9b10"],["posts/2583252123/index.html","eda06ba75fb5efe9d7b39ab06e74f4c0"],["posts/2613006280/index.html","0bacc57fef6ff8ee8ad70a638f58502b"],["posts/2617501472/index.html","edc7b58cafb0e7fd8beb0da688c8404c"],["posts/2676125676/index.html","e6a3e0c9713ef8bdde7bd023a3178b85"],["posts/2734896333/index.html","69af92b4f406d53d239021770f7e6e00"],["posts/2752169106/index.html","ded2116eac2543d9456a370905b9eab1"],["posts/2799263488/index.html","8bf0539d273c917ac7b26b81f9173264"],["posts/2805694118/index.html","fce347c67576a65e35c0534e84776f03"],["posts/2809571715/index.html","08a51d7d44f93263a33f7a43169a3714"],["posts/2822230423/index.html","1de272a4104758e6bff85ae1b8cba78c"],["posts/2829333122/index.html","e4bf5a516f6e6500133bca9af695e9af"],["posts/2911923212/index.html","04b066945d284b05c87a4c381fe8a45c"],["posts/2941880815/index.html","0cd338f395bc0eef0a014bf642bf2059"],["posts/2950334112/index.html","a304340b39ae9c2e69999f7cf80d7c0c"],["posts/2954591764/index.html","566fcedc49345833cc3f110d5ff50ed6"],["posts/3019914405/index.html","2bdf8c72de701c573062f0865a4ea401"],["posts/3032366281/index.html","b77712fcc9fc2b8ca76b5c78b4046ee3"],["posts/3040357134/index.html","c28f4d8e2f0edb240ed90583e28ef80a"],["posts/305484621/index.html","ee9fa2d77fb9cff4105f9f21b3302e84"],["posts/3083474169/index.html","06f96db880ae3cad9af7373c699c619b"],["posts/3099575458/index.html","e63231d126dcfe8ced27f8aca66cefb3"],["posts/3111375079/index.html","32608fbd5a1a8e74cc1685a9a2757112"],["posts/3120185261/index.html","5b3e2c4aa0e551793cc788678a4e8a3d"],["posts/3131944018/index.html","8a0bdd71091e6788f6808dd94778e0d4"],["posts/316230277/index.html","b7aafefa28ff3cebf65aafe61f26934a"],["posts/3175881014/index.html","6b8e19465b5bcc727160444bbcd6d3f0"],["posts/3222622531/index.html","e4f4784b5322ed59bdf070fc9fe7daf4"],["posts/3247186509/index.html","81c6a6c3408bb6eefc0ea4bc60f2dd97"],["posts/3269605707/index.html","3690a8cd38c9b50087ac07512b9a0030"],["posts/3291578070/index.html","7fdeaef8ffbb0d79e6ec7b12bcbd1a09"],["posts/331752533/index.html","f6080f990627d49096683dc90df5c390"],["posts/3321992673/index.html","5782be7d4ffe9b6f34b246bc43444146"],["posts/335366821/index.html","efb858ac079ea544cdece347877cf4e6"],["posts/3356910090/index.html","fb77c4ff781170574b57e768fd6f9a67"],["posts/337943766/index.html","d4b2f0fdf007e722c3b0f545d6c1bd2d"],["posts/3417652955/index.html","a9f3679a39314906501585c980b1de44"],["posts/3444626340/index.html","29399f57234771bf3dcd6d1f23877986"],["posts/3449402269/index.html","3295fc065f4f513e2689b272ec4a1e5c"],["posts/345410188/index.html","9ed102be4a766781edc46b6922f9ca57"],["posts/3461518355/index.html","06a545a6acd14c81f3b1f5b94e873e96"],["posts/3494408209/index.html","dc90f3a822cc5d9f4c7ac783911ed6b5"],["posts/352037321/index.html","a1eb6b6d8adde74ece1bde9f4bc1bb7f"],["posts/3521618732/index.html","f20c7563d400a323270a46c44c8c3f38"],["posts/3568552646/index.html","b29970dcc907d771891e55f636c379fc"],["posts/3603924376/index.html","beb506cfd01099757c3bd82c8743bf03"],["posts/3637847962/index.html","fa42a5cf2c75fc953017db7a275ed632"],["posts/3642630198/index.html","95d25217f8cdc12017221dea934493a3"],["posts/3653662258/index.html","152da11da66399fad9a7d22b4966f074"],["posts/3653716295/index.html","fd5c7cc92e16d6c67e536f6b364b7cc7"],["posts/3657008967/index.html","4b1d4e4b94c13a805fd814b264bbaded"],["posts/3668933172/index.html","af28d0c2e2350592f299570af1279624"],["posts/3677280829/index.html","b77534de7558a3d27bab1250befaea73"],["posts/3687594958/index.html","7e423762c9b78853cf4d57b4bce8a23c"],["posts/369095810/index.html","3c0b89a0de82aa15eaa4291c3028531e"],["posts/3695777215/index.html","aed02749039765b3dbba8a1543fdf94f"],["posts/3736599391/index.html","ed87272c85114380d1138cd5eb0da258"],["posts/3742212493/index.html","df9fd8bc417b80d4b685920c31653cad"],["posts/3782208845/index.html","c89b38a04d5d4e46bb85eb72ab25f31d"],["posts/3789971938/index.html","7aea0ee34a40d95ca507370ebd7e6426"],["posts/380519286/index.html","ab991e8e1c6384e1a0822f6ceae962bc"],["posts/3846545990/index.html","54e0b7061766bb1b0f6b7e4a3e9c30b0"],["posts/3873710624/index.html","b69f7a7192ed8796ae56fc599cb5052b"],["posts/3959327595/index.html","1b7ab14e01a0d8281bbc812641db2523"],["posts/3972610476/index.html","698d7fa9ba88552a29afb881e32cf5a2"],["posts/3995512051/index.html","cdff849ead2c3ee5af01b5eeba7cd65b"],["posts/4088452183/index.html","8f95c3d11d9f6df940b0b85f3b2bf342"],["posts/4116164325/index.html","0106f745e8eebf781acf85e7254b9850"],["posts/4158690468/index.html","111deac0b1e87f8864f112e004e324aa"],["posts/4159187524/index.html","b8c0c491791d4709b7daf9ac956c5a16"],["posts/4197961431/index.html","dcbf0081b8467fb19fff6439a6b89134"],["posts/4205536912/index.html","a5426582b117f4a4d1f3257f99ff69e9"],["posts/4236649/index.html","f23195f76385ea06ad48fe80c00daedf"],["posts/426338252/index.html","ca90c84bbbc9ce3a54563f58d3924f24"],["posts/450254281/index.html","7d30b22dd7a9a79af1759acf0705db32"],["posts/4891372/index.html","1dec24cb84828170b8b350b9d82387f1"],["posts/569337285/index.html","bc7488cc5a14ca9b8325d31a335d3392"],["posts/570137885/index.html","75512f58ecde6506f09389fe8d6785f3"],["posts/570888918/index.html","fe8ed9242951a6a979048b1c167f7a49"],["posts/582264328/index.html","e2bae3b50406d8d0278c95dfcc83b74e"],["posts/632291273/index.html","7d17f3095c705cf6f1bb301208859b44"],["posts/70687890/index.html","11b36e02529f6cf9ecd427abe7b198c8"],["posts/719322223/index.html","2e826eab696559e87c89a004c43caf08"],["posts/720539850/index.html","0bc8aa297a67b9be30a15a4e138ebdb3"],["posts/786195243/index.html","fdd38b247c8eb3fd2c0797f1cbcc4955"],["posts/795474045/index.html","3898938bee20bd15439130c6bb14907e"],["posts/815861661/index.html","1c879755bf2ca6884bf24d303fcf8305"],["posts/821259985/index.html","8bb350dd76571d9913d6bf2128cb8421"],["posts/828223375/index.html","a8737aaf8d1c9f79086be24811034a7c"],["posts/887585917/index.html","b6a75d314efb92b370ae78d3759f59ad"],["posts/888549816/index.html","697cd82117ea2a6d2d172239bf39e757"],["posts/906436376/index.html","b6b215173a4dee050915bdc1d0649e95"],["posts/907824546/index.html","ecb8bbb6b2a78db5afa9d66fab5dfdb2"],["posts/927393529/index.html","3f0f6883b8aa0cb8d0fbc5ebb0cae4fd"],["posts/94443781/index.html","d72f23b8c230d5f75d5ba49f59fb1f8b"],["tags/2014/index.html","fabe48b58bd609c5fb7f51e9a2e6badc"],["tags/2019/index.html","e992b377791ceb9e46102184d0e3f9fe"],["tags/AI/index.html","28dc1d1fc87426b182760d06513828e7"],["tags/AOP/index.html","e7a098fc73c5c9aec81edc1a3a4ee55b"],["tags/AR/index.html","43e6fd9595cc0b8d5ded1a3d27fd9e85"],["tags/AssetBundle/index.html","2daa8c69310a4749eac4b20c504849fd"],["tags/C/index.html","3f70b2249099e5a872f1ae701c75866c"],["tags/CDN/index.html","5c6f95fe59531cb1196f0c94dba751c3"],["tags/CG/index.html","3f7d4f46b5a44bfeca494e0dad353f3c"],["tags/CI/index.html","9c86b6311660a794f396e1be2d253c75"],["tags/CORS/index.html","25f10e1edfb49832c3b339cd30402a47"],["tags/CSharp/index.html","f386802c917a83a006cfbd884ba7381b"],["tags/Castle/index.html","01b8c4023dbfccac09e0fabd9d173746"],["tags/DBeaver/index.html","2db41a7e5b968885c18e03b3b54642ef"],["tags/Docker/index.html","fe836dd6967ce71eb60b2b050e7ed623"],["tags/Dynamic-Proxy/index.html","e3038cf6def93aba9e25d14b18243213"],["tags/Dynamic-WebApi/index.html","4968c21b1fa1b2aa90833a1a0a8eec5d"],["tags/EF/index.html","6afd7c9db08bb69f2f56d05091d88640"],["tags/ELK/index.html","8b879f24510deb13e1a8f34c1e5a9158"],["tags/ES6/index.html","a4ef20d61bd198130b12e1f99ea727b4"],["tags/EasyAR/index.html","01a5b898ac14c938ea4aed3169cb4d52"],["tags/Excel/index.html","f32d027d6d5f91e1aaef91ae923cf1ed"],["tags/FP/index.html","eccad89da39b8905dfe99e8fc5b33806"],["tags/Form/index.html","1e475f3ee7a16594fa1c6ace549427ad"],["tags/Git/index.html","b1ebad126a41acb077d22210c0d54d06"],["tags/Github/index.html","9aa12fdae254d019800085455930f13f"],["tags/HTML5/index.html","dbc90e232c0744e60e2487d414afd4de"],["tags/HTTP/index.html","295da304d134f62bf1edacff1c34de32"],["tags/Hangfire/index.html","97961950ae6611bac1137e3b010f70fc"],["tags/Hexo/index.html","76013eac7625bdf6d5010d22825270f8"],["tags/HttpClient/index.html","7971a642fe6c679179e029b637f42652"],["tags/Hyperlog/index.html","54cf0a164ee3bd1794e7f53e7f2ec210"],["tags/IDE/index.html","d3cfb3a10328e0e17aec6c85fdf913e2"],["tags/JS/index.html","8ae9db4bfd755e628f6e5ee5c89bf11b"],["tags/JSON/index.html","54b3ae88e59df78df76e17c833cd8667"],["tags/JSONP/index.html","10af1e0c1ed5db55b6a62237f4a0a8a7"],["tags/Java/index.html","80df2f2fab962202ea798436728f459a"],["tags/JavaScript/index.html","4aee34364618dca7afba09fec82bc691"],["tags/Jexus/index.html","fdbca8059a48e895dac9ac00d072a3d8"],["tags/Kindle/index.html","0c7b1025f09f08889604fa2c1a51db24"],["tags/Lambda/index.html","33679a32fd15bd77acb718cc82bfab85"],["tags/Linux/index.html","2721504946545155bc66e578ec7bc04f"],["tags/Liquid/index.html","2bade4d785f4fe5205120d4d8c4ea1f1"],["tags/Logger/index.html","2f155fdfe65b2782a584f12fa2ac3f98"],["tags/Love2D/index.html","4678b02fe49dbda279e0007b9f7fc3e3"],["tags/Lua/index.html","97fc197b9dacec5d7e501ba07d9a5f1b"],["tags/MMD/index.html","d72d2b370de7590cf867d262e3f94678"],["tags/MSBuild/index.html","b71a0a3e7e0f9b10e7ecebb61d1ccbe4"],["tags/MVC/index.html","665e25f3927b0cd89a7a0a226241465e"],["tags/MVVM/index.html","73888a78def167936cddeaf34a90e089"],["tags/MapReduce/index.html","11326580bed99ab2e3cb90a23f185761"],["tags/Markdown/index.html","b3c803132940c300ffc76300cb41a4a7"],["tags/Mecanim/index.html","4d1e7ace0114dc82d6007f65adf5f461"],["tags/Mono/index.html","55ee1e3142d9904c765b081de33a2862"],["tags/NET-Core/index.html","5857b687b35d41d98f1981af1bf670e5"],["tags/NET/index.html","4e9c363fc7876303a42285af57de4a11"],["tags/Nginx/index.html","1009027965f29c8dd922029830f955c5"],["tags/OBJ/index.html","fba3f61ec9f2c05992e25b0bdbd6357e"],["tags/Oracle/index.html","3977dcaf2a7bc2bdc0d90f43a675763a"],["tags/PL-SQL/index.html","03029d15fd13f7b06cba6d290435c4e2"],["tags/POCOController/index.html","1f0bec0179eb80de3c0a00c7a9cf427a"],["tags/PWA/index.html","c7ee0d292163e156311a1973b039b0e4"],["tags/Python/index.html","89390b9a960bd1fe5653c3a8b6181268"],["tags/RESTful/index.html","a7ea2768908f1073c5953832a924da53"],["tags/RFC/index.html","1a6c4b31322a3f7347d4d5cbceac79d3"],["tags/RPG/index.html","30122b3c9e4bcbaf88c65fdeef3f50ab"],["tags/RSETful/index.html","b4db43cc0369e971ab9fc9361abc357e"],["tags/React/index.html","ded16f08e14d28be656a274d7f436059"],["tags/Redis/index.html","ab88d319c0b3492c9545110c823e6ae2"],["tags/Referrer/index.html","72f24a89f526f0de7ba0f16a237005e7"],["tags/SDL/index.html","13f06e093ac705bf462d8b28f8db4d1a"],["tags/SQLite/index.html","dff647323753e081b39cf66559669025"],["tags/SSE/index.html","526ffbdc2d852f22de681b038734dc85"],["tags/SVN/index.html","50f7aa3977f9ff531eccc3607cb1255c"],["tags/Script/index.html","5190a9a28872a7da14d55f8bcfb3bd7e"],["tags/Server酱/index.html","3794a03c4ca41fedf7947f108268cad0"],["tags/Shader/index.html","b096b06cb33b1be4350b733d58ae5225"],["tags/SignalR/index.html","c0e9992e7117cddf2247c7f97020ab3d"],["tags/Socket/index.html","e5bd8dbbaaec4a6a85ffd9f880bc1e8b"],["tags/Sonar/index.html","51ca182d3e9dc00e8990a4ff1ed62886"],["tags/SourceTree/index.html","9fcc5c3750f0cb96f7a938248945d015"],["tags/Sublime/index.html","ac26818ccb469db0becabf433f374d56"],["tags/Swagger/index.html","39e44cc8e2f5e75c889b6eb0c2849379"],["tags/Trace/index.html","1133437578118837067e0896e1bfe925"],["tags/Travis/index.html","c8bd44dfc79b051577d6ab7c30a0356d"],["tags/Unity/index.html","e58a88eaa6f7ce893b2ae5067584786c"],["tags/Unity3D/index.html","7040a8d1ab62e52abc2a5ac74ddf9f0e"],["tags/Unity3D/pages/2/index.html","dfea35695788f7c121305ca0d97a311d"],["tags/Unity3D/pages/3/index.html","12cd10cf8fb17a3aca5a993f513723fd"],["tags/VSCode/index.html","a217de9785d9a38a3ff25a843d11db47"],["tags/Valine/index.html","168cca0ed1541203987256fba684dc90"],["tags/Visual-Studio/index.html","d16323fef5699f4a14757a796e30b856"],["tags/Vue/index.html","a4edfef49bd4042702783391beafb5e0"],["tags/WSL/index.html","9a317140511114c49c4242dec285c7d5"],["tags/Web-API/index.html","620a88adbe0e751cdc883764916a0d50"],["tags/Web/index.html","cf68b0547c643f7db242c34bb6c5dac5"],["tags/WebApi/index.html","eac68d9031aa864c418140da337dba89"],["tags/WebSocket/index.html","574ad96ac9794d2d32f2be5eac5242c4"],["tags/Wechat/index.html","405a7a9abc94bc566a87652113686498"],["tags/Windows/index.html","6d5af53d148afe1b0488de39bb1934cb"],["tags/disunity/index.html","5d2fa02290134dcdef080c6911cecdd6"],["tags/index.html","1f25f809efe658de8aadf1b1c0ecf5a3"],["tags/jsDelivr/index.html","87c7e0b2d8cb93dd657814423f1484e6"],["tags/matplotlib/index.html","057ac8c3469ff7a0521a8fae615cfbda"],["tags/uGUI/index.html","ada787813624181f19c1a2c297aa0c52"],["tags/zTree/index.html","01fad5d8e5cd0f0f3af22c6cb26ed408"],["tags/一出好戏/index.html","4fc563843c71d514c9350b1d2a79bbfd"],["tags/七牛/index.html","03e246c177b69508bb9ac68421fc8feb"],["tags/主从复制/index.html","392d8ff32c240e56ce8ab60ba926816d"],["tags/事件/index.html","d5548c3942dc7e57fdd299ce4b7f1899"],["tags/二维码/index.html","1fda29166a75ca4db689c0e9f9e4edea"],["tags/云音乐/index.html","5df264e08456b1f0a233450df5f4bc08"],["tags/互联网/index.html","9921f628e6933289ded18184ec668965"],["tags/亲情/index.html","6f0c52bfb459ae2bb49e20b90798c018"],["tags/人文/index.html","d314aadde1646124edae2b4f119dc97f"],["tags/人生/index.html","33450fc67f85a84b5dcb197d6a2931dd"],["tags/仙剑奇侠传/index.html","f1ddba8143e258c8df54689bc8f4950c"],["tags/价值/index.html","6619024f4f23dc8b2d03001e069c13bc"],["tags/优化/index.html","5d4ff0f20402474792300d3ca1c1c5f8"],["tags/全智贤/index.html","ac8c088c020ac62278f079e6be58f7dd"],["tags/公众号/index.html","0dedb0bec524d290acfdd1486e93bf1a"],["tags/关卡系统/index.html","569d0fbd62bf97eb7b4c365784390374"],["tags/函数式编程/index.html","1fac1dda4167c5b9091110234ff213af"],["tags/别离/index.html","b13b0f5527bacdd137dadea9e50abee8"],["tags/前任/index.html","3c91141f366a43a12d95f14f64a5dc3a"],["tags/前端/index.html","767fa6cf94bef22917ef9b2c63e977ca"],["tags/剑指Offer/index.html","f54e3ed1dae03222be8fd8f3b9cd57d1"],["tags/加密/index.html","535ac7e44b80bd8950bd37e0bed80b46"],["tags/动态代理/index.html","40d896a2e02dda54dc81839171d616fe"],["tags/动态加载/index.html","84478fad0dd7444a8564380d65402a15"],["tags/动画/index.html","0ffa4c834eb4256adcc1f78c3369f294"],["tags/单位/index.html","43ff75a7e7c44863894aaa1047f5496f"],["tags/单机游戏/index.html","45ef264413363853eaeb5d3efe03a846"],["tags/印度/index.html","38d6c4f4775e22ca0df920cfd443c66f"],["tags/历史/index.html","d6f22cdac2179b8b49c4623d53aaf150"],["tags/反编译/index.html","9dffd1592ad1d34cb8876b6648440fbe"],["tags/同步/index.html","c532ca5dcd8a5062627572092abea81b"],["tags/后端/index.html","c79a8d4c91a939563465ac25062f628d"],["tags/命令/index.html","86af3652599b07b623c4587cc3696a18"],["tags/和平/index.html","cda0b57c29b7b9565d1cc1a597027665"],["tags/响应式/index.html","fc60abe0fdfa2d0ef35a79bdfbb5e359"],["tags/哲学/index.html","d2cc221c479c30e813e948865766540b"],["tags/回家/index.html","94430004c090d8a41a9d7aaba8d2a4aa"],["tags/回忆/index.html","e6461d9c3e4623d2a643884897cf89d4"],["tags/回顾/index.html","778f14e698c1eb10ab9481860edb426f"],["tags/回首/index.html","7e92fc16a70293191c6c6d78b9cd98f9"],["tags/图床/index.html","d599fd130e4d09e107326021e5639062"],["tags/图形/index.html","f1386eedc6e661167c0cc0fbd6dad818"],["tags/地图/index.html","85cd4953400f3b96917ae23742cf0f42"],["tags/塔防/index.html","7ef506d6de370c62043a2c0070d373bd"],["tags/增强现实/index.html","36b5022bc8ef256e80b98abda52adbac"],["tags/壁纸/index.html","44896ccd4f16bfabcb9ac65ee048999f"],["tags/夏目漱石/index.html","bc1c12e5812203096c486bd9b871ee2d"],["tags/多线程/index.html","8436fc0fab2f80e58398648a1dbaa49f"],["tags/大护法/index.html","b5873d4175593b35de0160056d616aa1"],["tags/委托/index.html","33d66a1c62e4d285a1db115e2ecc4b0e"],["tags/孤独/index.html","2841754a400937b256271d8c0f1f1077"],["tags/展望/index.html","2a6e169bc363d89ac8a056d84991e59b"],["tags/工作/index.html","0debabec48eb48ad81685688a7228c9e"],["tags/平凡/index.html","21fedef88ec4b74159a56ed4e8d1bad3"],["tags/年华/index.html","686be65bcd4da3dfec946b9d2e340644"],["tags/年度/index.html","6739fe140e9a4f4bddfbddd21d8f8cd8"],["tags/开源/index.html","77c722b79f54f2424f375cbf311c28b6"],["tags/异常/index.html","de80aa94bc5a4d40a3b02e42b712ae9c"],["tags/异步/index.html","5e49fa7f1c0543d2443d405ece14983d"],["tags/引擎/index.html","cb8c79b88929e70b9875ad0d1134256f"],["tags/影评/index.html","b35d27b9ca08efe805201adba8afb0a4"],["tags/微信/index.html","24755b2ad7ec7199ff12af8f2c27587c"],["tags/微博/index.html","c534d97d9ac6f233df9f318231c5583e"],["tags/心情/index.html","f0c7d605c5b93e7ab43a8da05377d597"],["tags/思维/index.html","de07c5b1bf299ab3df1146ebb78615bb"],["tags/总结/index.html","efdfa81f8060b54c6aea077bb682d0fc"],["tags/想法/index.html","d4e49727634fb08d3b249339eea2348a"],["tags/感悟/index.html","b81ac7759a693fcb0843b931e72d542d"],["tags/成长/index.html","fc022dcecee719d17e30aeac49c5ec40"],["tags/我是猫/index.html","6a5480725086ea6b02d9ade50c1fa725"],["tags/扩展/index.html","e3963a1087290e00ad3a7d2d5d09603d"],["tags/扩展方法/index.html","eaeca820b2a49987c4e9f8ddaace0bc5"],["tags/技术/index.html","4ffbd3028b7271de3a6f8069f9b45e58"],["tags/拖拽/index.html","7de11dbc56a496c9b3a414157cfb1a8b"],["tags/插件/index.html","7767283f2136c2a0b38fa3145ce531f2"],["tags/插件化/index.html","368f9f6fbe0e1442ffa4c0f2850dfb13"],["tags/数字/index.html","64e6aa8e5d0cd7760ca9d6c3cfc729f1"],["tags/数学/index.html","bbc4e8d9d9e09cbff36f88830d952eac"],["tags/数据/index.html","19e0a93110f716db69215021063eef71"],["tags/数据交换/index.html","6945aeb8631133b9fe100f4c8c8e8910"],["tags/数据库/index.html","e6ab935ae3bf53d1a39aa91f37fc9eec"],["tags/文本分类/index.html","7cc3e6b83b5c8da9a79c0291e3d1e2a5"],["tags/无问西东/index.html","b0e32a4c354be950422e9af61b340ea2"],["tags/日剧/index.html","c85aaa520f3443ad422ff34be7c9cc20"],["tags/日志/index.html","eebcd43e1ecb209d36aca0ce871540e8"],["tags/日本文学/index.html","47c4e4f5f7b6121a418897e344675029"],["tags/时区/index.html","3ed285f72b0d175f6920c71aa4db2ff9"],["tags/时间/index.html","fcd9fb505e24f2abdcc25d2a61731b70"],["tags/服务器/index.html","e456c54ac5d565e46033cc8089e30dcb"],["tags/朝圣/index.html","935f8f7e711db046187588d75959f887"],["tags/朴素贝叶斯/index.html","7b91d31349f296b0ac487e1e1b480b72"],["tags/架构/index.html","6c838fd8f3386b3ca9e06c06e35228d2"],["tags/标注/index.html","179d26d2d03239c551d7c00b4c29c386"],["tags/校验/index.html","28c09e2a2f6fcfab941a349b50db68af"],["tags/格式/index.html","6c688ce815f55614e0398b78ac325a93"],["tags/格式化/index.html","e17ef074da95ce260852b9e7f5f67b5f"],["tags/桌面/index.html","4b5450203bf639341abd3c9d72aab24b"],["tags/梦想/index.html","88bade167788d602db7f96494364cc5e"],["tags/概率/index.html","7a9dc810c51cbc14ae137f9083ce8275"],["tags/模板/index.html","c1fe1fbb7bc6170c3e50ebecf30076ae"],["tags/模板引擎/index.html","f153c7cd08fc1731c1ee0ddecab9fd51"],["tags/毕业/index.html","7234625adfaf96549429cbcbabfd9310"],["tags/毕业季/index.html","a24df88e3186096f41f20eedd8c6816d"],["tags/消息/index.html","16f3274bb78ca765189ca5bc59d1112d"],["tags/游戏/index.html","a1c8d5603e626419ed6dee005bcf4091"],["tags/游戏/pages/2/index.html","a069769b2f6cb221bed6c27b3ca94ea9"],["tags/游戏开发/index.html","11e2621c9f39bcb92deb0348d3c6482d"],["tags/游戏引擎/index.html","d7223440d210aaa95387a4f1f6e491fb"],["tags/爱情/index.html","bacca640a210862163a24b61860c9926"],["tags/版本控制/index.html","b3c792832f1f6f065c09bd5824ae2fe7"],["tags/版权/index.html","38d59d2ec38f0af7856c7cfd1a6e4225"],["tags/特性/index.html","454b182184839199709a11178aea4f0a"],["tags/状态/index.html","b86e5a6e13bc2507b78bc04925d17d54"],["tags/现实/index.html","971f05534f7928e6356f08af9e449703"],["tags/生活/index.html","1a6e9142e805058746cbf82eba229c09"],["tags/电影/index.html","30402e8a93a0a3d4fbe3ed4fd121c118"],["tags/画家/index.html","aed1fc799c251c1b4d4fd6b8ad7394bd"],["tags/知识共享/index.html","c3563e86f7514757848b8a5cca3f706f"],["tags/矫情/index.html","931da44064628b77714a4b848bde41fa"],["tags/程序员/index.html","5a9a791f6bbeb7cc9323149d041fd08b"],["tags/穹之扉/index.html","31027e451370b65fcdd2f65dcde5dd87"],["tags/穿搭/index.html","0c9900843d4c8a48c0687c0acf60c2bd"],["tags/童话/index.html","11a393db4c21cc374843b05ae3bd0bed"],["tags/笔记/index.html","a2d002c94fe05774c37f47bc3f55a6f7"],["tags/算法/index.html","1a29daaaa07ad84535616b09a153b569"],["tags/米花之味/index.html","231a4f4e24d62560d042b855f523c514"],["tags/缓存/index.html","3611d0f4fbaddb89792200556a864491"],["tags/编程/index.html","ea6d7ea86dbf5c057333687fb352ffa6"],["tags/编译/index.html","b22dd46f376fe09d00758f2b80cd8f3e"],["tags/编辑器/index.html","4b685fee351f15f7dae34665c4dab6a5"],["tags/网易/index.html","b2c4728157848ee2dc2165c1d23f14b1"],["tags/脚本/index.html","fe8f742c35de48afdfd370c7707b42bf"],["tags/脚本语言/index.html","8fc91fb51053fd3207e430ab77442447"],["tags/虚拟摇杆/index.html","ab5bf5a12d345d38b8b123d6cd3fe57d"],["tags/蛋炒饭/index.html","928a9e1e0dc7281e79ade40a6f5268cf"],["tags/表单/index.html","0e28991ef3deb26de4bffa4d97dc554b"],["tags/装饰器/index.html","56b3b4ddba59813740435f8b21e3d9ed"],["tags/西安/index.html","e895fe1f4eb991c76f8dbf47826ffd3a"],["tags/计算机图形/index.html","4fec20cb2ca831735c5ce971115891c9"],["tags/设计/index.html","bd1959106d24d1df79b84b1f6f790264"],["tags/设计模式/index.html","c72ac78a906e3970632aa3f311fbda6d"],["tags/访问量/index.html","c7c7f6f025864c98762f640357543d5b"],["tags/评论/index.html","676e0cc4aefe63eae3ea0abcadf208db"],["tags/词云/index.html","3c69dfef72fc67ea96e8e42d7c185e6e"],["tags/诗人/index.html","76264d1a2e0753c32a2513e20ea05f89"],["tags/语法/index.html","5dcf13ebacb2c054438e5c0f4610fbf4"],["tags/请记住我/index.html","09fe153e5ef783b81b0b2944f096b15a"],["tags/读书/index.html","20cd85b52e455970a99a02f7ca0539c9"],["tags/读写分离/index.html","c2c05beb0800c737bca081967cd1c4bd"],["tags/调试/index.html","816823d6ef6b8871b89fbaeace7592f8"],["tags/贝塞尔曲线/index.html","c9e38967d17063cfe038b2f47e28478e"],["tags/贪吃蛇/index.html","f54ed9976f12d2c3efd608828d2af464"],["tags/资源提取/index.html","62f543a58cc1495ed550f34d321e689e"],["tags/跨域/index.html","aa40795d3553e703086129f474a8f248"],["tags/跨平台/index.html","0890836f99be75e53249ec5f582e0d54"],["tags/转盘/index.html","a1b4a74a6fc0a03e8743dc6dbea59dad"],["tags/迁移/index.html","f40df4628784ba31753de825a1f415f8"],["tags/通信/index.html","468f6f2a32fa912813ea26d34436ac97"],["tags/邪不压正/index.html","02938091ba344f0eef5b28ade7551376"],["tags/部署/index.html","db83e07db1b74553a9e3c52b50552b6a"],["tags/配载/index.html","232fe487a13b8c54e945fc34ea1b1ba0"],["tags/重试/index.html","d071f4bbd8e9a034c93f54e6ce657e83"],["tags/长安/index.html","3b28271c267e3f9d7928101e3fcc450f"],["tags/长安十二时辰/index.html","971e337cde1ec2f1cb7177c1ec2e01cc"],["tags/阅读/index.html","e8abf50b989ab3b47e132bd1ea8c7336"],["tags/阿里/index.html","e92662cf23c244574b043538cfe82f3d"],["tags/随笔/index.html","d8f27f061db86ceb401708791a9fc2a0"],["tags/霍金/index.html","20898f1429918d106ee1799819ee90c3"],["tags/青春/index.html","ed68ecfa12cca48bd345a58b751abd02"],["tags/面试/index.html","4720a9b69c8e4366d7225e3a27e3b47e"],["tags/韩寒/index.html","b6298e7c462961c89e1e5ff02214521e"],["tags/马尔克斯/index.html","9f78b0cdec601b0e639ee8b92a4738c3"],["tags/验证/index.html","c45bd84efcb48f5bdc402156d5fdc44a"],["tags/黑客/index.html","9fa80f2f11ed52fd78ac5f23b313dc5d"],["wiki/index.html","44a803230bbbc9ac0417e7d2bd500db8"],["works/index.html","49d375ae81eb5c210bc84d3fddaab171"]];
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







