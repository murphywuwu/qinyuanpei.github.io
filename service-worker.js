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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","3d5b8d1fe8dadf1912f4f84aec844520"],["archives/2014/12/index.html","e20b760cff8fcf38c19e8f40680a50eb"],["archives/2014/index.html","81eebabb74dbb88f906b355061de6faf"],["archives/2015/01/index.html","7517039963ba60c03876fc4be9c6185e"],["archives/2015/02/index.html","3c2fce0b7c4ebfc4bcbc92dbb22644d5"],["archives/2015/03/index.html","f2316f36c3a3bb97700d841dd70d7d13"],["archives/2015/04/index.html","33403a67893fab6f1ce342a7e05568af"],["archives/2015/05/index.html","a682112a544d1500cf8469497dab458e"],["archives/2015/06/index.html","d86ff25f3dc660b3f2513048c6f4f10f"],["archives/2015/07/index.html","9d6b2519d34142e66f0f0d9370ba1015"],["archives/2015/08/index.html","fb52af0f85aabdf19be0a0ad36918562"],["archives/2015/09/index.html","7bd6b7ee8914e4005dd00843906d7e7b"],["archives/2015/10/index.html","11355c33f34a8191c0fc795a0f28ee3d"],["archives/2015/11/index.html","b698b20cfd8720fe7e9fcf778c3a4a54"],["archives/2015/12/index.html","372990749334401a4cb6e3ecf46d8f60"],["archives/2015/index.html","287d384dddfdbbe1dc5892e8df4b217f"],["archives/2015/pages/2/index.html","bb4fb681371237cd8e96972c50a9e4be"],["archives/2015/pages/3/index.html","75b89238621b64a14f6b43c9544fd020"],["archives/2015/pages/4/index.html","fb20827c88bc33f407c74705322e309a"],["archives/2015/pages/5/index.html","180485ceb3a50ae775e3d640ae7468b4"],["archives/2015/pages/6/index.html","a29d5c22f8d979541cf8b44e9e4c165b"],["archives/2016/01/index.html","cc2061a1e5402fb1e26d2791afcf0200"],["archives/2016/03/index.html","f1bf935217a9da7feef49ce68ba5c9ae"],["archives/2016/05/index.html","b752f80ac6843e81a21156fcbad0b458"],["archives/2016/06/index.html","76a4cd0b95fc3dae1add6b488e05ee31"],["archives/2016/07/index.html","7cc3c8828f9df8e5c1f6757eaea1ca0f"],["archives/2016/09/index.html","5621255fddd1b2f288f39ab4bc938d7a"],["archives/2016/10/index.html","bfcd73a5332dd2abb144fe7ba93324df"],["archives/2016/11/index.html","07aaf1deb5fe3c8b29bba0619a7a404b"],["archives/2016/index.html","504f381cc0675c1baae1836cfa00bb39"],["archives/2016/pages/2/index.html","38d0ed0b5fc975b23a411121fdc5c461"],["archives/2016/pages/3/index.html","797d20c81dfddbbcc6184a89cb072d60"],["archives/2017/02/index.html","66cec239686940e883654a457dcba525"],["archives/2017/03/index.html","a5cd5eb793c088bed1bfc4291eb7f4bd"],["archives/2017/04/index.html","9860b744ef091711d3998a1f9074152a"],["archives/2017/05/index.html","ce3710deb4f81c028c0b953197b1db31"],["archives/2017/07/index.html","2419c69c6956c90652b2288606b546cd"],["archives/2017/08/index.html","150988caa508699f29d6508fd5371293"],["archives/2017/09/index.html","50055dadfc4ed19516e6500cdaf6f6d3"],["archives/2017/10/index.html","7f09c96c6793305f4d58a51dc14e0d03"],["archives/2017/11/index.html","59bffb1f23084ed535abd62af087298e"],["archives/2017/12/index.html","20e884f431fdcc77b4e6d00e6d1f0829"],["archives/2017/index.html","d02773493fdc11ebe504fc9eab5fe635"],["archives/2017/pages/2/index.html","5844cdf026ad463fcbce2741f64eede1"],["archives/2018/01/index.html","661589b388c455a53f58ba6bd2774a58"],["archives/2018/02/index.html","b0a11e7bb9839d8c9be5ed0a0f46d95a"],["archives/2018/03/index.html","d6f3d13077884799acc3457ce2ec7d96"],["archives/2018/04/index.html","f6f3bf807503be82bf299d84e8332402"],["archives/2018/05/index.html","107692b1b49131f949cae571f752a847"],["archives/2018/06/index.html","2920d4b77d6e701f3112844b290a1cb1"],["archives/2018/07/index.html","09a6d10cc5c8ca5550970eec6ab2d99a"],["archives/2018/08/index.html","4fe983814b7f94a0153b3283e0f71f95"],["archives/2018/09/index.html","8309cf2a41c7aa6c17f69869807c01c6"],["archives/2018/10/index.html","2737a950f5854ed0d2135b16dfec6104"],["archives/2018/index.html","122e674e336fc85e173cbf50c8fa6249"],["archives/2018/pages/2/index.html","2cb6884e7951728d046d2a112e74a3a2"],["archives/2018/pages/3/index.html","d74dc8bf5c27493d686c8ec687a34507"],["archives/2018/pages/4/index.html","b71e5d947145590203d666d2ca42a0fd"],["archives/2019/01/index.html","792ca20851e84b321f9bcf2820ed5d9d"],["archives/2019/02/index.html","be0ad16980cd31353ad995e9fb7b8051"],["archives/2019/03/index.html","6bae4adcd0ca67544ac50058f6bcf061"],["archives/2019/04/index.html","772bdfb1f71d8f413175a26a57c1f904"],["archives/2019/05/index.html","f8e8232fd2455506f4dc70fa2724a7d1"],["archives/2019/06/index.html","35913cbb906eecf27404ea245b4a945b"],["archives/2019/07/index.html","f7e7e084d32085ef7608b1910454a390"],["archives/2019/08/index.html","3cfb64c6cd94a900490fc139cded1db6"],["archives/2019/09/index.html","2d3d3fbcab03dea8021df2c01b180685"],["archives/2019/10/index.html","fb413e3368044454e9e4647f56107da4"],["archives/2019/11/index.html","f9c0b87828a915514951398246815681"],["archives/2019/12/index.html","b868f9ddeabb4a1df540e095d0615d6b"],["archives/2019/index.html","35d37aaa92b7ca356d4eadae6f75639d"],["archives/2019/pages/2/index.html","550677db19395f9621f12cc6616a27fb"],["archives/2019/pages/3/index.html","c9cbba48f9c918bdd31dd53e7284755a"],["archives/2020/01/index.html","eef1964c56e70d81154ac04d4c6ac72b"],["archives/2020/02/index.html","07b3356bc8d475b53db7859b0ed9c788"],["archives/2020/index.html","8c774b5f28fe2f07997039cd3cb47c74"],["archives/index.html","f6b4928e14423ee005008fece4c27bc8"],["archives/pages/10/index.html","a0f0f1cb0cffab8418fd231d843e6753"],["archives/pages/11/index.html","040ffd5769775c628124fbba01ce7480"],["archives/pages/12/index.html","33c1ea6ca222a2f2a6c08dcd7959b13b"],["archives/pages/13/index.html","0556e0a535418687be2f369d7a4e0106"],["archives/pages/14/index.html","a4a356a838212809f4ac09c24255a2df"],["archives/pages/15/index.html","ca8ab74bf89599ef22833e6d51508b21"],["archives/pages/16/index.html","bfb53ac597af532161a6f02819464536"],["archives/pages/2/index.html","8dfe25fad5e7a71714a27b93c83ebd17"],["archives/pages/3/index.html","859470b7487f9431942e7646f5925c9a"],["archives/pages/4/index.html","f065b03428820e2ffcfdba3219eef3fa"],["archives/pages/5/index.html","7a9c2bb96612b8a45e82146de561cd22"],["archives/pages/6/index.html","a05b1f0a3e0674f95068826a14693bcf"],["archives/pages/7/index.html","32afa5ea5877bd99244f408738fb1e20"],["archives/pages/8/index.html","7aad6ffee1ed8dcb1e1276386aca329f"],["archives/pages/9/index.html","1a9a27241f0968bb0c6787fdd96d5714"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","25343b0e42b6e4800eb6820be4721fd4"],["categories/Unity3D/index.html","65a10e25d925cc91ece29faf7a6b97fa"],["categories/Unity3D/pages/2/index.html","4854d31f1acd8daa5d3fdf61bf9055e1"],["categories/index.html","0fe93d934ad4ff62b8daf3a7da1e6a49"],["categories/人工智能/index.html","a0378d77739e14717fd4fdc1a7ec68a4"],["categories/前端开发/index.html","48f154c40fa024ad03ae11a58ccb722c"],["categories/单机游戏/index.html","d65a4682defe77a0184d0dfcd0eb8508"],["categories/开发工具/index.html","895144d12b3e7f939f545596a1cfb483"],["categories/数据分析/index.html","4dee0b1b4060c31e896b0377844e49d0"],["categories/数据存储/index.html","f5893b55e1944cc2da7ce7686610db02"],["categories/游戏开发/index.html","3c43bd7026ea62b64ef5cf84677869da"],["categories/游戏开发/pages/2/index.html","186f06e1cc62b79248fcf8564a6c1e2c"],["categories/游戏引擎/index.html","00c2214bf9fd4de9997b5baffb5ff175"],["categories/独立博客/index.html","fc0cf59a475d649127d5cb5ad088e6dd"],["categories/生活感悟/index.html","3443a051a2c25ab91f98f17b05569476"],["categories/生活感悟/pages/2/index.html","7ffb7584f15be1a3b1ea3c0b853f510f"],["categories/生活感悟/pages/3/index.html","f18e8e85622d75ec7c93c96327e9397c"],["categories/编程语言/index.html","820bcb1b64f722ee070add17c9e0d122"],["categories/编程语言/pages/2/index.html","c3dcdbb22cfa6996faac514f1369d555"],["categories/编程语言/pages/3/index.html","02f392adcca718b33b8534d58af641c6"],["categories/编程语言/pages/4/index.html","20f27e49d948cfff6f1f4a4c45a282ba"],["categories/编程语言/pages/5/index.html","c38018c121cf2be92b3e71888e481a1d"],["categories/读书笔记/index.html","1a05f4e9e593c1b81ce220f238fda818"],["categories/读书笔记/pages/2/index.html","4c4acb642efc8cb9d4cd8080566d050e"],["friends/index.html","052c7578f2b212c02e7b214dca2c2a36"],["index.html","ee6058e3a46d7db0f88ec521697bae59"],["movies/index.html","d41da06781f8e0a7961d911a3189f045"],["musics/index.html","11d77fa2e2d66963eb7c5d14e3c48b02"],["pages/10/index.html","748d8432fab56882f054c9dc7e818201"],["pages/11/index.html","3283cf253b79ab517d5439d14d06494f"],["pages/12/index.html","ac7056206e2fcbf040ae2e27449620f1"],["pages/13/index.html","104ee1cce36e19bf2a7db24927dc3517"],["pages/14/index.html","7421f99c6d1da829514deedf605be9e2"],["pages/15/index.html","06a8fbec27f9b88186251dcebd44b896"],["pages/16/index.html","c03a37e4c49aa25ef6ccf1aff985f985"],["pages/2/index.html","11e662af4f7e33c61344388b728d40a5"],["pages/3/index.html","39d0e7721457adeaae4703c4bcfb0796"],["pages/4/index.html","c65ca6031c6a98c50800b39e7eb2d10b"],["pages/5/index.html","d670f18b2506b5dec5c4e0f2d7ec8921"],["pages/6/index.html","b941e784344861adab126995e280b4a7"],["pages/7/index.html","f7c0cb70512340cac4a3efadfd6e74ed"],["pages/8/index.html","70a233d716fce6d534c097d3acc4e712"],["pages/9/index.html","3a22691b82bdc802ed2be735e6902a0a"],["posts/1059499448/index.html","a37b94b5535fd7bbced6a59c82810f4c"],["posts/1071063696/index.html","368239164604872579793450eabbb4f5"],["posts/1082185388/index.html","677d70aead113769a80e9e0c0715cf73"],["posts/1099762326/index.html","cef8c632768858aef8d0b923e44b015d"],["posts/1113828794/index.html","69bc45f8b37b7331ff4153c64d2f6d29"],["posts/1118169753/index.html","d3ca0a9c57e64c15a5c99b59da6bae4e"],["posts/1122710277/index.html","8870e4b9ce6bd512554edf214352e5e8"],["posts/1124152964/index.html","1e149093a45b229088b09824bc6fe631"],["posts/1127467740/index.html","523c5c914c6c33d334ec640ff709692b"],["posts/1150071886/index.html","3a7a86a1c54e7c9eaa38430aae1d5b80"],["posts/1150143610/index.html","fb50cc1ca26d190f8cd078c3dc4df9be"],["posts/1152813120/index.html","a1bb713afec4cdf938e69784e57820a3"],["posts/115524443/index.html","47f659fb7b894998493f59fd991ba21f"],["posts/1156673678/index.html","b7a02b9be90c2b765b51d4f5ffa7b36e"],["posts/1166840790/index.html","07aa9ece4fd8a2b7ef477584d7c39fe7"],["posts/116795088/index.html","a6a8cc0d6540d67fac3825aaef5eaaeb"],["posts/1176959868/index.html","60051112eebb7cfd1d6f4b8b85068170"],["posts/1190622881/index.html","472551ea8a6bb8c29386b95ff9193a00"],["posts/123663202/index.html","006a4f3529a21583b97005315a6482cb"],["posts/124807650/index.html","d28374bb209c3523ad81629fb8218ac4"],["posts/1254783039/index.html","6cc9449dbb4a98a5a2ec5e66d95fbbaf"],["posts/1320325685/index.html","65529adc2d3c553cace6fd0885db03ca"],["posts/1329254441/index.html","4dee0c41154eccce104989c811c2b603"],["posts/1357715684/index.html","81eb307eb5453de29e3337a3765ba52a"],["posts/1358971951/index.html","01deca41c7d6b01d2b8bb4603e9b339c"],["posts/1386017461/index.html","3ccbe9879b3304701648a26bad832a9d"],["posts/1394521917/index.html","9704f19759b5f7455b9c4962389188b1"],["posts/1397717193/index.html","49cf0b3c1e80cd0d96784e487124b3a7"],["posts/1417719502/index.html","e7c5a91700ce1bf45c69795424d5bbc3"],["posts/1424645834/index.html","25586d747ca1b6d2dcdb9b96eebe652a"],["posts/1444577573/index.html","9276a657dfd628067184ff6a5717ab26"],["posts/1467630055/index.html","2850543fc698200ce242849133c3bd66"],["posts/1478979553/index.html","575583c38cef5e31170ad4b8cd2ee177"],["posts/1540537013/index.html","5d6151e2087b3bb559cf66f11d206975"],["posts/166983157/index.html","14ec0c356bb0dc1836e83c235981e3e8"],["posts/1670305415/index.html","3cceccf44071afd5c826f0e389ee827e"],["posts/1684318907/index.html","6a0d1d128d10f8f7c41392ecd0c4f901"],["posts/169430744/index.html","5d2e7344003e51715b6e0b74644077d7"],["posts/1700650235/index.html","d26003ee65f50caec25b3feff33087cc"],["posts/172426938/index.html","6f15410bbb7b3621a6740b4e9d960cfb"],["posts/1836680899/index.html","378ac32ee3022213643c97811ac89b23"],["posts/183718218/index.html","238c4c578b26c1b38b901204ff667047"],["posts/187480982/index.html","ff132f955d179bf171e38ae1ee60147c"],["posts/1930050594/index.html","f7077dabb53cdf6dfcc6849f7c40ae4d"],["posts/1933583281/index.html","72a634c6cf1e469465cea77642a8986f"],["posts/1940333895/index.html","c0734b423b0e1c0b35870714001852d1"],["posts/1960676615/index.html","84468623798037ce144bb16ac26b17f0"],["posts/1983298072/index.html","4264008d207eaa8e7280695a19555019"],["posts/1989654282/index.html","5797be5bc3754289ec16f4d19ec1e19c"],["posts/2015300310/index.html","3f892bcf17083b09b0a724a7290d3bea"],["posts/2038378679/index.html","3f393a6768a4a41dfccb4e62242c5459"],["posts/2041685704/index.html","d23766825ab793de7037d7e7967cd5e3"],["posts/21112647/index.html","64274bcc91345f58d55b352953f2662b"],["posts/2158696176/index.html","bab309b8f826cd347a29ba285b3db8e2"],["posts/2171683728/index.html","be46d917ebaf8e5f8f802669221d15da"],["posts/2186770732/index.html","1fd01d7ce3e9e6e3d5ae328a5a86a82e"],["posts/2275646954/index.html","f0eb73ea0f435456d2268c337a64816f"],["posts/2314414875/index.html","4265c1eeae470ac3b352b1cb67c6c32b"],["posts/2318173297/index.html","00a09d49e471ff39e59709eaa3c68d17"],["posts/2418566449/index.html","fce490785a8c7712533069cb80184167"],["posts/2436573863/index.html","f5443687bcbc835c919f8d53867109b1"],["posts/2462008667/index.html","ca39496b59730e7fd3e37aadc86dcca9"],["posts/2463121881/index.html","719e230813d0985a329e00ba74633657"],["posts/2527231326/index.html","5885de7ebef0d20ac8f5d202c4917fd3"],["posts/2583252123/index.html","3807ea3e993a384970c233ff7cbe9172"],["posts/2613006280/index.html","9418fb6a27c9f6256ae3c68721990dad"],["posts/2617501472/index.html","ae1d0e1a867afad697956d221e583565"],["posts/2676125676/index.html","fd6eda6b18f60850414b52daa94689f4"],["posts/2734896333/index.html","b63bf8fc4e923f2f748098599ab544bf"],["posts/2752169106/index.html","ec0ca0d5405e01c577fda77217783b04"],["posts/2799263488/index.html","99bac1ef3b39b039249313971c57d0e2"],["posts/2805694118/index.html","0304889af64063e23f4b02b30dfd93e0"],["posts/2809571715/index.html","983ab242cf9897be44d685c3d7b0bd45"],["posts/2822230423/index.html","90eb3010c3418b71213b6838543f8e26"],["posts/2829333122/index.html","c587a938cf19ceabb9fd966acf28c017"],["posts/2911923212/index.html","a485524d11105e289ff45e4becdfd673"],["posts/2941880815/index.html","bd050fabf2bdd6f053a62b317b0f0f60"],["posts/2950334112/index.html","28159b72cad7ac7873f5c14d2b0103f8"],["posts/2954591764/index.html","d55532b3b990e7f59cfb3c67db480e75"],["posts/3019914405/index.html","7c0bba50160d6942b6043b28923c790e"],["posts/3032366281/index.html","4abceefc0b4f0c93d61b9fdfafc2d909"],["posts/3040357134/index.html","1b96ba7b998c9b7a53566e013b7e77ba"],["posts/305484621/index.html","26884f9d8d221a447cc856e6724ff80d"],["posts/3083474169/index.html","0ccd04dacbeda27f0e4e0775b50feb2d"],["posts/3099575458/index.html","8172a4758c3e112e3faad172ab89e2e2"],["posts/3111375079/index.html","c16dc33ae5df36a6fbbb637f21ccc469"],["posts/3120185261/index.html","c8efd759153ef724c2037db2c7e6283e"],["posts/3131944018/index.html","983b8b0d80446b6a9f4d58e10d9ef5f4"],["posts/316230277/index.html","4ed00a83b91f6a3d919a24fa8fdc7592"],["posts/3175881014/index.html","ced3d54efb2afa97f9dd91aadbdb1a51"],["posts/3222622531/index.html","c0d43fb615c4a7e9147b4b62959b4173"],["posts/3247186509/index.html","3902bc4e66124dc7d56bcacc28b5ae67"],["posts/3269605707/index.html","c81d2b5cfbf5b4a6859289ab4c2fa533"],["posts/3291578070/index.html","f743b164ca77b38c2240a8d792adf270"],["posts/331752533/index.html","eb7582cded2e906c0582f960883491d3"],["posts/3321992673/index.html","376c1b2392c2fa48e67a2b492951b25a"],["posts/335366821/index.html","c042fef883c2515dbb3227c20ee91be3"],["posts/3356910090/index.html","5cd1bced59865b4ed97070cb2ae118d6"],["posts/337943766/index.html","9a413373de179bc6e72440a33284ba5e"],["posts/3417652955/index.html","267eb648fd15a5dbb727f7bf1b191a48"],["posts/3444626340/index.html","c8d6e3bc253bef2aed63affcaae06218"],["posts/3449402269/index.html","fb00a35dd89928dfb9ecf97ffb555643"],["posts/345410188/index.html","d5aeeeacfe2a4b5a5c497027b4a3c82a"],["posts/3461518355/index.html","5fcfb97bf51952c8418a738e88cf35bd"],["posts/3494408209/index.html","a91eff7417ed57d0dce06db306150722"],["posts/352037321/index.html","40cc58bc5c63abafd4bb57fbaef09388"],["posts/3521618732/index.html","fb34318ee20225405a34ae9484ed0e80"],["posts/3568552646/index.html","973b4a8eb90260a64c7e5500179d29df"],["posts/3603924376/index.html","156b2105ee8e41288c03e5530623064b"],["posts/3637847962/index.html","a48fd7bebcc7435d49da9532292c92c3"],["posts/3642630198/index.html","020612810c91aeb9d87e53e8ca6c2ed7"],["posts/3653662258/index.html","69f45114964a2ec2e980ba78d0c18992"],["posts/3653716295/index.html","13d68a12991ed87a53d1c362913d4156"],["posts/3657008967/index.html","177aefcb5ac4395b4738f05d76a181a3"],["posts/3668933172/index.html","901ffc3a3fb5a262569a51affb7249f2"],["posts/3677280829/index.html","1dae8400c4d098a4bd3cf3d3c4fe21d8"],["posts/3687594958/index.html","b24b082413ff8898e1fd6534598b9a22"],["posts/369095810/index.html","7298c33587430b0339e6d624310ceac9"],["posts/3695777215/index.html","a0657b34fc3989f213e9a2f2a9c82c7d"],["posts/3736599391/index.html","988fe4c8eefe76f9973ffef6271d7b20"],["posts/3742212493/index.html","ab15a737786d349370c3b711f7525bfa"],["posts/3782208845/index.html","29e351261d35ca299f90cf893b82d342"],["posts/3789971938/index.html","84ad8537cdfb391a7d26b93e9641d36f"],["posts/380519286/index.html","c54071923a9b73ce8a46b2df93eb0e30"],["posts/3846545990/index.html","494b8566a1eb4e65d6cab2ec06d4c533"],["posts/3873710624/index.html","d4cefd864258a9e0498eddb085bd9d20"],["posts/3959327595/index.html","31e37d04912fb2c579d117bf4cf76410"],["posts/3972610476/index.html","38220af145febf4e20bbaaad92f73931"],["posts/3995512051/index.html","a49d422afc20ef71f6db16edf705f0e3"],["posts/4088452183/index.html","02db4f1a75a5e981d9e5a21bd0aa85d1"],["posts/4116164325/index.html","77cb1bf84ee62be08650c083c93a6d1d"],["posts/4158690468/index.html","c546bdd1aad1a67cfe18f679e0aface2"],["posts/4159187524/index.html","b616b840b01e4dc5bd1b915b0a92a435"],["posts/4197961431/index.html","2493e02326c674ab5c18a246d03fd8d5"],["posts/4205536912/index.html","16f4c088d1c7ab30b704492bcf79e7e8"],["posts/4236649/index.html","dbfb14f1945538349dcb9a28705ad834"],["posts/426338252/index.html","a7bf3636a1abc81397a5de0ca6dd0003"],["posts/450254281/index.html","123d32fe06e76351ccf7488f881016d0"],["posts/4891372/index.html","e4f01be9b2d5f90e9a59434a81229f6d"],["posts/569337285/index.html","cf6860c6f1bc2f0354f66225b6f5e948"],["posts/570137885/index.html","f626e4461d3648bea0639cd056b5e145"],["posts/570888918/index.html","5b5a277fe0adb1727a989c5860f3b6f7"],["posts/582264328/index.html","a50367638d66b33fbe8b111d82d34b24"],["posts/632291273/index.html","d75c1e61b7d31b3799e84b1c53c23482"],["posts/70687890/index.html","b3bf8cfb3a451d064c270b4ddd5017b5"],["posts/719322223/index.html","b1f3c9f1d03f7025478ea071131f45cf"],["posts/720539850/index.html","0c2e070fff752676276006e6328b1f6d"],["posts/786195243/index.html","a29050a8fe11ab9c224e082c660d8b13"],["posts/795474045/index.html","f1da140d3835ed1903efb0b135b85afa"],["posts/815861661/index.html","a533cf2fa8e347ffd2d71336dd909234"],["posts/821259985/index.html","88515f4074bff4de40ac0bbc554f36d2"],["posts/828223375/index.html","3b65326d41a656e47a68a7e7afc365ef"],["posts/887585917/index.html","57f2edf69ddc63e6a867786706a4ceec"],["posts/888549816/index.html","70187bde4589c993835dc224f347e963"],["posts/906436376/index.html","d7c53d87fc4a64d62b3c708c848c94a5"],["posts/907824546/index.html","0ee9e08584277970a19651ce15fab0c7"],["posts/927393529/index.html","b0092579d9ac41742dd7e72246605cf7"],["posts/94443781/index.html","9d466c892e3e628749d70848294cbe1f"],["tags/2014/index.html","d6dda1968bec65d870bb0890c6eb430f"],["tags/2019/index.html","128ca61de412666900eb573c27727454"],["tags/AI/index.html","d858f13f0e1db927d64fbdf2c6c9ec6c"],["tags/AOP/index.html","641468b8658138645b61a36d61970696"],["tags/AR/index.html","747aab646e9f1fc972118ff3b5418f72"],["tags/AssetBundle/index.html","18d3ae3fc20df38bd4855eef7bf5a69d"],["tags/C/index.html","ca13608211bd476e05874f50189d9a2a"],["tags/CDN/index.html","e7f2bc7d8921c6ef40bc124e61f51121"],["tags/CG/index.html","498c99890cb413c5e8ea049b4fa72326"],["tags/CI/index.html","39efea5ce2f052c17240c13bb81abf51"],["tags/CORS/index.html","4918653313ef84885ffcbda0628cc59f"],["tags/CSharp/index.html","409e231fb1c188cdc956208ebb103143"],["tags/Castle/index.html","610ac781355216e6ff05565ac35187b0"],["tags/DBeaver/index.html","f52722bcca6b47ea9f4e0c620335d87a"],["tags/Docker/index.html","057a00fca9d53f62731bc148f98e8269"],["tags/Dynamic-Proxy/index.html","26c48839fbbb44d3cc12e043af132a31"],["tags/Dynamic-WebApi/index.html","85180c93c4933e0a5ad2e5e12f87acde"],["tags/EF/index.html","cc5088d66f9e4a54d880b138ed77a516"],["tags/ELK/index.html","6fc0bcdd6315c994c66f6a8543bc19e5"],["tags/ES6/index.html","d3f96dd76de7694f9d969355c69f7061"],["tags/EasyAR/index.html","74249c0ec0478874de9419faa1a84802"],["tags/Excel/index.html","614bb54677ce6bbab5c9ffd8fb9de363"],["tags/FP/index.html","5445d88d956625e195e61728bb503541"],["tags/Form/index.html","9144225f5899da03ae24a390ec2ce784"],["tags/Git/index.html","c286faf89b6cdbda895c8c9a01db21ff"],["tags/Github/index.html","94c4243141c65cc67f7e9009ced2664b"],["tags/HTML5/index.html","496bf9bdcd2a511a646def4bd637ab0d"],["tags/HTTP/index.html","9132b495015feec2a2535ff6a693bb5d"],["tags/Hangfire/index.html","a50fb2890e39d45275e576d966c1a5ac"],["tags/Hexo/index.html","417a55f56b39561c6cef15cdfb56ef53"],["tags/HttpClient/index.html","e928cf1ee28ec34c13946d2b01e5f213"],["tags/Hyperlog/index.html","ed072816c70d65d64b0c336a672959b3"],["tags/IDE/index.html","887b09ef56193d38d4b73c150bb30b64"],["tags/JS/index.html","32bbbd74421f0fe3cf55fecead46b40e"],["tags/JSON/index.html","fe96ac558ba4c1254738dcefa75509ef"],["tags/JSONP/index.html","f6ab15071c41c9cf73f2712d40d528f5"],["tags/Java/index.html","e0802961a102ce369c62026d8a7239a6"],["tags/JavaScript/index.html","e276135e47aef6e855714d42deb1139b"],["tags/Jexus/index.html","08124d9f1a683778effb892d99b31031"],["tags/Kindle/index.html","c7cbfb248df4510ecb32b16bbeaaca66"],["tags/Lambda/index.html","af0a66fc310e3128210321e1ade816c0"],["tags/Linux/index.html","4e4df8ba418f1f1f729f3e10e641e30e"],["tags/Liquid/index.html","4d40db60d96117b0d9df6bbac1f72408"],["tags/Logger/index.html","f4bdafe8fb3befe70c2d3a68096ead4d"],["tags/Love2D/index.html","5650919562e18bdcc869dcab3ab40d06"],["tags/Lua/index.html","8251ff61945db3f850e1a0e344c202f7"],["tags/MMD/index.html","469280abae4d92e585217bb78ce97af3"],["tags/MSBuild/index.html","a3c32ce5dc1a3ef21e87e64f2af124bb"],["tags/MVC/index.html","699530053d443954348ef7892adb0953"],["tags/MVVM/index.html","87367d98d7e8a25e8e69d9980a545983"],["tags/MapReduce/index.html","19ef6b74e93e3c558192f13cd12a39fe"],["tags/Markdown/index.html","8c58618f0f7225d7632c3b24a5f30090"],["tags/Mecanim/index.html","0370d496f806bcebd275a1d0db1bd45a"],["tags/Mono/index.html","6693166e15ed4b3dce4884b277b00e15"],["tags/NET-Core/index.html","3b06b143635d4665069d52793f5c9d08"],["tags/NET/index.html","0ce726aec338474cfe9bf7557184c872"],["tags/Nginx/index.html","df191afba5f4dd812143ac940584bec8"],["tags/OBJ/index.html","78f2b5cce848186bab79465ba0ce1d11"],["tags/Oracle/index.html","6a46ba78824e34d7abb29b41cc389cf8"],["tags/PL-SQL/index.html","443cec140990a3b92f08d74f295caecc"],["tags/POCOController/index.html","bda9c324cfb45f13afe2ed3e32f5d429"],["tags/PWA/index.html","68781130a95eae722a3e5bce9f139281"],["tags/Python/index.html","2f60d19e56a4d75bf30bef99c3abc62a"],["tags/RESTful/index.html","b6ba7c99b321602230e8ef42a12c7327"],["tags/RFC/index.html","96029169cd9954f534b455d17baaa93b"],["tags/RPG/index.html","cf5275f3f4174e4a8bf41c60e102c266"],["tags/RSETful/index.html","0ed8c98eb95cafd12d0223974581ef1e"],["tags/React/index.html","4a418c1cff17274b538de4d4fb09f967"],["tags/Redis/index.html","e102e2fc3f472ee8150d6f6c9b199bb2"],["tags/Referrer/index.html","3944bab453f05a6697d76e7c76c9817c"],["tags/SDL/index.html","117dc4a3675cc77e25a7fc1491b1ea6c"],["tags/SQLite/index.html","66d95af6787430bacccb73fccd2191ad"],["tags/SSE/index.html","67aa8e9904c5ce90d0797de005fc8d35"],["tags/SVN/index.html","cdce2aeb684420aa94bbf8eb875cb0b1"],["tags/Script/index.html","f293aef7db7e472e4acbf53a4c275be0"],["tags/Server酱/index.html","d5e98b0efa5d31fd388d5fd9d569fc5c"],["tags/Shader/index.html","e684f4113508f6c622eb264baf63792d"],["tags/SignalR/index.html","c77aa1f2bfdf3e5b02b087e6b26cf386"],["tags/Socket/index.html","7dda55167975c031fdfeddb725e9b866"],["tags/Sonar/index.html","070a578636a35d165754a7cc190becdb"],["tags/SourceTree/index.html","7bd0c003152bfa79c1536538488de115"],["tags/Sublime/index.html","fc0767a5532aa62cbcc78c4a9c028481"],["tags/Swagger/index.html","242d1e85618edf407db1c8be9208a229"],["tags/Trace/index.html","27a552dc7f58738a66e50c466d7f95ea"],["tags/Travis/index.html","0cbf807e84b31ffdb3355d45b1d4c40a"],["tags/Unity/index.html","c684335d1269c18dc6380e25270eba27"],["tags/Unity3D/index.html","468462195b7f48e9cd27eda5a25cf502"],["tags/Unity3D/pages/2/index.html","4632abf6ea32e33dd873577dd105ce57"],["tags/Unity3D/pages/3/index.html","8a9625fe2644d1104c3e8e1fb7934e3f"],["tags/VSCode/index.html","4057b2401014b1a4327af382a602367c"],["tags/Valine/index.html","ae2479b0db2c88abeed1168889dc70d0"],["tags/Visual-Studio/index.html","8573285906d182d1ca974e58015c1b5d"],["tags/Vue/index.html","a5f03e41aed89fff2c0fd4307b9ef4e2"],["tags/WSL/index.html","86d16f164637d5db148df2d973994dba"],["tags/Web-API/index.html","5b249364ebdb477285b175af7a2d599f"],["tags/Web/index.html","4b81103472aa09f2c5ddc54a6e642362"],["tags/WebApi/index.html","d640ad2d66478240e658cc4fb1d64026"],["tags/WebSocket/index.html","39bf800ed2d0edc9002f1f23e1dcb6b5"],["tags/Wechat/index.html","3c70c7bfcd6cb41b54c9b5db4696dfae"],["tags/Windows/index.html","dff18d63a29ee84e10dbd9c3e52fd565"],["tags/disunity/index.html","00fd33460d047dfb1998dbf7f2c397d5"],["tags/index.html","a4f27cf3784ab67b3831af63ec5c412d"],["tags/jsDelivr/index.html","c6fd0e0312fb821204d45c4dc56a0053"],["tags/matplotlib/index.html","0b0dc9a1fc0aa2ad4b56458adb13a5bb"],["tags/uGUI/index.html","e384138258a3dd0cd7cad7e5fd0ee1c8"],["tags/zTree/index.html","5c83cb384651343907c89b16c94a2b09"],["tags/一出好戏/index.html","fe06484483e0bfe2de2bdce2eba9e902"],["tags/七牛/index.html","e3570ccb4cb244d8a7c47b43569c1a5e"],["tags/主从复制/index.html","4a281bf55a322d14ac56a4ccbd469524"],["tags/事件/index.html","b131e573c30c7ebbe1a08021fde27ba3"],["tags/二维码/index.html","2bc88717196fee074f735e4acd77ae7d"],["tags/云音乐/index.html","f90ce4592e6ff56794aafd5edee0c7eb"],["tags/互联网/index.html","bb617201e0fc1cdba8bbd75bd51cd43b"],["tags/亲情/index.html","06f96d717d0ffa5b96cecbe3fd4b52b7"],["tags/人文/index.html","b4ff2658228b95a8695caa4384e0d3a8"],["tags/人生/index.html","be5bd1f75244d2e40020f558e4223123"],["tags/仙剑奇侠传/index.html","7babd0fe2f29578912ceba79528dc4f6"],["tags/价值/index.html","cbf19005ae1b91c27faad0464a9e2049"],["tags/优化/index.html","954f4b754fdd6086723a40994059a06d"],["tags/全智贤/index.html","299f4cb9608374c6702d66b7d42ca1cd"],["tags/公众号/index.html","4d5114a710c8c40ceb305037010707e1"],["tags/关卡系统/index.html","0a16216f5998d2cf9f0e6ab8ded4c62f"],["tags/函数式编程/index.html","eb87c8bd999c69a1cae533b1abce1af5"],["tags/别离/index.html","78e7b213745f6357f1387a85b2b60a50"],["tags/前任/index.html","fea144cdd454c1e575c7e539b1313b2a"],["tags/前端/index.html","f54847195ee41da2a1a6dca7eef17d67"],["tags/剑指Offer/index.html","71844f39d0cf4a31cb9fcf08fec98e5a"],["tags/加密/index.html","5e4e10c234bf6be68637c6504c2ec185"],["tags/动态代理/index.html","be5a550bc54128cf0577a61449c1ff6d"],["tags/动态加载/index.html","570547f4ac8e1d8f5d2bf8d545c71f42"],["tags/动画/index.html","6b48015b9e2db35557aada3ac8d30d4b"],["tags/单位/index.html","10158c9dc58b8ee87b5824dab57d765e"],["tags/单机游戏/index.html","ab8d8771ad8bf2169160acb0f603d66d"],["tags/印度/index.html","2b9def2932b9f94c2b499fdc1ecd80e0"],["tags/历史/index.html","f131a011dbfe22ad5b277dce149db7a2"],["tags/反编译/index.html","e3183330a90652dace80f1805f1d6f17"],["tags/同步/index.html","5bc0a56998972323d1b8bb890bc45747"],["tags/后端/index.html","f9453a95432c6b399d30180f4ac33943"],["tags/命令/index.html","bd0b009b1fdee4308a9ab8c7c2f1e429"],["tags/和平/index.html","d05211e5eae52a38bb799e65a7139654"],["tags/响应式/index.html","c92ec0f41195924e0450f94f0241fe85"],["tags/哲学/index.html","c197d6c86f8aa49c23ea637ce3197203"],["tags/回家/index.html","e1a911484b05715201845cde20040648"],["tags/回忆/index.html","204dbe90357961bcac5c8c6bb4e0f142"],["tags/回顾/index.html","b78ffb98cbc02c3219e2fa6d037ae880"],["tags/回首/index.html","128c88d195cf5781b1b437e6cb2c6848"],["tags/图床/index.html","ce10bca2d6dbee19c8943061bb756b30"],["tags/图形/index.html","d2dca621ca8247924dd9ad957269d98c"],["tags/地图/index.html","f400617da33f8e0d863d92fecbc905e6"],["tags/塔防/index.html","fbbdc79b0c4ccf3757521ee699893763"],["tags/增强现实/index.html","f979572e01ee47972bde3fe8c918373c"],["tags/壁纸/index.html","d7c0cd0ae63536f89095bfaceaac0e47"],["tags/夏目漱石/index.html","25895adb5ce7cc80e48807b888213552"],["tags/多线程/index.html","543f16a03fabda0f2460805584837535"],["tags/大护法/index.html","a87f21b77d0b005cd104b35aced285bb"],["tags/委托/index.html","7887b7bc05e006082d27f0115654d8dd"],["tags/孤独/index.html","e3dbe1e3a53820ad2d4d4006781c1072"],["tags/展望/index.html","053c1878b24db0c041cac422d6d3d9fc"],["tags/工作/index.html","31ff2a8079e64653bbb0ca9fd1d5ff31"],["tags/平凡/index.html","d5182e04459ef672dea5b513828df2d5"],["tags/年华/index.html","d09132ff820e244498be0e2191d4bb2b"],["tags/年度/index.html","8412ed1416f3694d165ff9076358e465"],["tags/开源/index.html","08cd1a5e3b9cfcdd27a363a03ffc479e"],["tags/异常/index.html","fafa88206ee69f73f51fc7a310dd7827"],["tags/异步/index.html","fd87195f0e9520f0ea00fdfb8be100f9"],["tags/引擎/index.html","0cb08d849fe27ebedb2d9d3b9051787b"],["tags/影评/index.html","a48862cd42640c36c972e697fd888f91"],["tags/微信/index.html","4a9f8b40c308ea7ccd30654e8cceb90f"],["tags/微博/index.html","189a6bb578a41320097936335bcc19d9"],["tags/心情/index.html","649010177d668da4e2aa263830f72db4"],["tags/思维/index.html","ba28a98661d3644b346822218c3be8bc"],["tags/总结/index.html","21566a72e1c7cde38b11381431644820"],["tags/想法/index.html","f55905f777061bf15972308ac226da61"],["tags/感悟/index.html","14df635a93134e014a49b0dd0041c500"],["tags/成长/index.html","c51573dde9517e1b2018a20ff18da6ed"],["tags/我是猫/index.html","b543b9585812e5ef6a6173fee22ffc67"],["tags/扩展/index.html","7950cebb05c0225518f52ed4e984c5e0"],["tags/扩展方法/index.html","a7669c22b4e6db4c2080c2844e1040bf"],["tags/技术/index.html","dae1f050c3384c8ded2145a0ff8a0451"],["tags/拖拽/index.html","04a02058f2a6689ee230cab8fb171cb2"],["tags/插件/index.html","e46052f1abbf8e33e9ca4f476c2956a6"],["tags/插件化/index.html","6b73e13090ba97b2790de8633365a81e"],["tags/数字/index.html","e1f9d6ca07bf75dc9a74f65730f548c2"],["tags/数学/index.html","8dde72a6a5839b52acbc4cc9a2171248"],["tags/数据/index.html","555fd3929cb40bf815b6f8bfd580e818"],["tags/数据交换/index.html","9d3b0a729c1374ab495febb473760560"],["tags/数据库/index.html","a66e72c0f41f17fcc87332f768008c70"],["tags/文本分类/index.html","142b292c52cf8f2e688aed086d00ed75"],["tags/无问西东/index.html","5588c609f5638c9ed39f29834a2c71c2"],["tags/日剧/index.html","74e148257a3086668f59e4eb92997fe6"],["tags/日志/index.html","31e639356d1d8e1e437bfafa10fcf900"],["tags/日本文学/index.html","5e1423a87a8407d68af7ce7a9c13b0b5"],["tags/时区/index.html","e75e26ca56cdda02e11b49dcb1d01876"],["tags/时间/index.html","57038a391d3790418f9544150872ea3f"],["tags/服务器/index.html","60d30687216e05c0b9605a61835cf138"],["tags/朝圣/index.html","5aca73bfb42b8121e9318b2a14f00a7f"],["tags/朴素贝叶斯/index.html","8660bbb3227c26bd36c69262f2079747"],["tags/架构/index.html","c4c3fa70a9b64dd92703fea24592da16"],["tags/标注/index.html","6dae7942fabd7208001aa144d154e770"],["tags/校验/index.html","da66f34e14395c04e85d2c8b14dfb172"],["tags/格式/index.html","822399d038ed94efb43a9907c9f9ba0d"],["tags/格式化/index.html","5054f043489bd6754ffbae29a0a52ce8"],["tags/桌面/index.html","ea30af226fec38ac1eeb1e8a96608051"],["tags/梦想/index.html","1ad97b69a39145342d05021ec9dc0811"],["tags/概率/index.html","47d7b459f065722b20c01e35c08c5311"],["tags/模板/index.html","edec5888e9556ebaf7056d5bf6b6e6d6"],["tags/模板引擎/index.html","c67764a358bf6e05390a3c97a426235c"],["tags/毕业/index.html","fde78678f346da74b3d02e1df7113b14"],["tags/毕业季/index.html","a4c144d41dcb3a09f4d59824ce4ad747"],["tags/消息/index.html","b3391a8198775430f70c9404c2aeadd6"],["tags/游戏/index.html","d13efdfd21f181da6d8a48f5c4d79242"],["tags/游戏/pages/2/index.html","f78f424b77ab23d19dffb41aec0df040"],["tags/游戏开发/index.html","57f676c881f4eeae74f14a795ad0eebe"],["tags/游戏引擎/index.html","5796197fbc94fc068667cfa882e9e63f"],["tags/爱情/index.html","44b8ee3377acaae8798f4baca009b433"],["tags/版本控制/index.html","b6c34d6544fca4a27c82387924159204"],["tags/版权/index.html","3032ff1a58979a5aae1e8ec309cfd328"],["tags/特性/index.html","434e7afa3ae96fadfd665bfd894256f5"],["tags/状态/index.html","047024af578fd2d38f6351827eb652cb"],["tags/现实/index.html","7eeada0b395c9711cbcad4a41dc4f2a1"],["tags/生活/index.html","18e7926458d33d43b4b43e00787f9e43"],["tags/电影/index.html","0b3d58fa7c23d9baada9cddd03cece65"],["tags/画家/index.html","4f577b0983e117f9e3b1b6d9133decfd"],["tags/知识共享/index.html","00fcb62c28165724d02e7ee756aaefcf"],["tags/矫情/index.html","23ab0503a023367d1f0049ff0a927a63"],["tags/程序员/index.html","6fa0c84534e15f1b85b0488e382683cf"],["tags/穹之扉/index.html","c26d092c418e16899144b76b6e631a9a"],["tags/穿搭/index.html","9032114c7e978620ee7307db086d8e4c"],["tags/童话/index.html","b44ccc4d0f5d2846f18b3c033097d70d"],["tags/笔记/index.html","ec63cad8726acdc7d7590bc284219abb"],["tags/算法/index.html","94072b6b1301857d0b9a864778b9e274"],["tags/米花之味/index.html","f1b93fdf5c051aed970925052d8aa37f"],["tags/缓存/index.html","81484abb2003d0cefb205f5108c1e6bd"],["tags/编程/index.html","61f02c1b7a94712db5a9cffa4060dc91"],["tags/编译/index.html","6e4c2a8779a87ed46659714444179f64"],["tags/编辑器/index.html","7b4ef9445e9aabb346f30a065f870c2b"],["tags/网易/index.html","84d7972a08f9ccd48e6e3df92a5a5ca2"],["tags/脚本/index.html","c9b827e58fde3a467e19e946e5bdbe2e"],["tags/脚本语言/index.html","d5adc343e384e44a06170f09aff2d5f4"],["tags/虚拟摇杆/index.html","10f9112f4dbfb2cfc211d00423e9252b"],["tags/蛋炒饭/index.html","222fb25593e4444d699fe1556d8ac1a7"],["tags/表单/index.html","605b2782e7e1d834af62502a73622f6f"],["tags/装饰器/index.html","e7e7e3761f35c92923f2f2a531ad459d"],["tags/西安/index.html","8cfa988717990bf2a85a801e486b95c2"],["tags/计算机图形/index.html","0bb4007abc8d4a51e9d5027a821e8a3f"],["tags/设计/index.html","367d7301e3a9c157efb8568c15dfe6d3"],["tags/设计模式/index.html","71493f3a2db87268629fc26c4f55af0c"],["tags/访问量/index.html","4104d32654a2d7b6d39ec771357252c0"],["tags/评论/index.html","0172e63937e0bb01af79a08cb8950083"],["tags/词云/index.html","065233afd9df14f16a2d6342ca91e323"],["tags/诗人/index.html","336d3d44438ebb08cb81516e981ef4d2"],["tags/语法/index.html","c04fe92efd1f6186f10784b78ac369cb"],["tags/请记住我/index.html","020f0438d14cec648a0d0480540d9657"],["tags/读书/index.html","9b157e549c378120c038027e5b58e4da"],["tags/读写分离/index.html","12f7b2a3fba658bdc1de6859f7bb61ac"],["tags/调试/index.html","d18dc217f5eb73be7eb2b6c729c0ec71"],["tags/贝塞尔曲线/index.html","abb8b9c9d7a68e67d549de0c8d246cea"],["tags/贪吃蛇/index.html","670ba7c6d4a211b1abc0cf70f16f6cb1"],["tags/资源提取/index.html","b2ea3c27f1a8c6b66425313ca8b2635d"],["tags/跨域/index.html","81676e329c0111b816ba86750c74ca57"],["tags/跨平台/index.html","252639e08d33ebeffffc01426948ffd0"],["tags/转盘/index.html","633b225b9f5444b1311b238d915b4ef3"],["tags/迁移/index.html","92a385e6167168b152c994380fe0e55a"],["tags/通信/index.html","c7967439f59e6584e515f9184addcc42"],["tags/邪不压正/index.html","753679afcb48b016c4837b7c7fc1f5e5"],["tags/部署/index.html","e7a6b9ef453a8025d119b86a68d39cbb"],["tags/配载/index.html","3e50be570298a754ceb7533067823138"],["tags/重试/index.html","196ecd520cef286cbc1e14ef091ca47d"],["tags/长安/index.html","e5d7b674a928678969d6bec9fdae58a0"],["tags/长安十二时辰/index.html","328bf75db56af8983480000d7056c591"],["tags/阅读/index.html","feeb73ae620ce1471d5c57d822b8f9d8"],["tags/阿里/index.html","675e638e2cc8c604e974dd96f603617a"],["tags/随笔/index.html","f74cdcb6ec52fb41da1d4c97f20b87d9"],["tags/霍金/index.html","67e5e42d7a31af99faad98574c41b8ed"],["tags/青春/index.html","e14db55cb39dca7b108147873c25a291"],["tags/面试/index.html","2e257db8c47634bb483dd37e0a4551a4"],["tags/韩寒/index.html","f09d7faaa79353a05859d1a8b6fa70a7"],["tags/马尔克斯/index.html","31bfa5fcb77ca73243228a11223e253a"],["tags/验证/index.html","9f8298a776ef87006f6f2be81b94a18a"],["tags/黑客/index.html","d40d371568dbdbf8d69598b24ff31806"],["wiki/index.html","bb55bcba428494b54d662a407e4a2cb0"],["works/index.html","eb748fa185582c4c908b04639d242dad"]];
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







