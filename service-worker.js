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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d55a4a48e8befaaab9b5c590872021d3"],["archives/2014/12/index.html","44b400ba2137cf2a8a5bdbb5f18733d0"],["archives/2014/index.html","aea67fb608113e1f4a762ace833d8314"],["archives/2015/01/index.html","8048a9dfdc051093810c4811003109bd"],["archives/2015/02/index.html","2382eb55734a0ea2440ed78342b08e98"],["archives/2015/03/index.html","6bacaa38a21eb6b101caf9bcf48519a1"],["archives/2015/04/index.html","46c9b1347d4fec8ab3771e256ae47f49"],["archives/2015/05/index.html","49d63bdfeb883406bc0f3827f1579dcf"],["archives/2015/06/index.html","db4deaf2e3d3acfe26f2895c61b95b97"],["archives/2015/07/index.html","c2dfe8b20ea4abdaca84e2df32670919"],["archives/2015/08/index.html","e0c13f35499f9c68775b32aa49fee835"],["archives/2015/09/index.html","9a456284b2b2a7d35d77edb6b1fe04b8"],["archives/2015/10/index.html","d8d500243b6fffa260493c37e3d5d4a4"],["archives/2015/11/index.html","b23788f701545ededeb3c473319f40d3"],["archives/2015/12/index.html","ef7de53a3e601a0f4fd4d699628cf98e"],["archives/2015/index.html","a37faca633b97a288a4f12b76c92ce53"],["archives/2015/pages/2/index.html","769891325c9d344c45e86128278bc9db"],["archives/2015/pages/3/index.html","1014df978c16e59b37d41337dd92f121"],["archives/2015/pages/4/index.html","014201970636e53b0f0bb7630ea9fd28"],["archives/2015/pages/5/index.html","4aa06153aeb065a652eaeb70643a5eed"],["archives/2015/pages/6/index.html","ea9065b8472b0e13f6e06b386aecdf50"],["archives/2016/01/index.html","02487ee1ee99397c5f2a26d16eb0d120"],["archives/2016/03/index.html","fea53cdd2e5ffefe9ece547280702bf4"],["archives/2016/05/index.html","50acd740ae82ee8e76afed87dfc8290f"],["archives/2016/06/index.html","49007956c837a7d0e2640c3808896571"],["archives/2016/07/index.html","6d191605422163748e46f8ff0dfdf708"],["archives/2016/09/index.html","3fb659e98c0cecfe264eef2115bc477b"],["archives/2016/10/index.html","b8f562fb46c7b5b69cab7353d664db7e"],["archives/2016/11/index.html","669605f84a09a2e95dfff076f4af2dce"],["archives/2016/index.html","619b1f65679a0fbe2b8dcc4c1c5f6992"],["archives/2016/pages/2/index.html","03aea88753461e8f1b3a6d85aa564b7b"],["archives/2016/pages/3/index.html","031aa6508bacea50391f36a29e08b824"],["archives/2017/02/index.html","d178c916f3b1204236d2b4d0b22df271"],["archives/2017/03/index.html","518d5660f9efd154311591844d5ac116"],["archives/2017/04/index.html","baeec7fef9bd5fefd50f2eaa3043efc4"],["archives/2017/05/index.html","a2d3762a0836841a3ec5619552f45a9e"],["archives/2017/07/index.html","6a9d47c7554d18157c0e8c5c38df90bf"],["archives/2017/08/index.html","4367a8df9d48a6eda43acb27b4bf1bf2"],["archives/2017/09/index.html","68454efa50a253711f503cfefd0d9b77"],["archives/2017/10/index.html","a5a31bce99ac041afc47cde6ac2654e8"],["archives/2017/11/index.html","4396edc0adf09548deffb59575d58474"],["archives/2017/12/index.html","0591c379e662e8ce59e560d0f058b080"],["archives/2017/index.html","560f403fa6e832814d9e837ff89a1553"],["archives/2017/pages/2/index.html","f9b127275767cca37ff9bb121e6a9dfe"],["archives/2018/01/index.html","468d51dce84c522c56fc253e933bcf65"],["archives/2018/02/index.html","7b27ca9d71c3ea3656b1904d31ad62f8"],["archives/2018/03/index.html","1b57de081c5fe2fcc46a311ac20ea5ac"],["archives/2018/04/index.html","610f11630f8995b75f6896a31373c685"],["archives/2018/05/index.html","3a4024255a3363626d2211b834f7c3d8"],["archives/2018/06/index.html","31fe1af472fbc1876e1d0d16e59fa72b"],["archives/2018/07/index.html","9e999b14ca97b71ab07be4643115b015"],["archives/2018/08/index.html","047c16a880bf247c8f3f6742034ce21b"],["archives/2018/09/index.html","d4414e9ec79253ada89e26748e38656a"],["archives/2018/10/index.html","2ace698fa088700b2b58537cc61809e5"],["archives/2018/index.html","4e1f70aa8929c7ac604eac137638455d"],["archives/2018/pages/2/index.html","fa3afe38b401a506f80c98d7d7e82c7e"],["archives/2018/pages/3/index.html","65c847e026d8e6bcc3083bfaa7db4143"],["archives/2018/pages/4/index.html","088e1abe69e758d8dd903d7fb866662c"],["archives/2019/01/index.html","1a320c6e82a40c641b524d1a5c7dcfbf"],["archives/2019/02/index.html","d453a701a89f50f9687edd5016729d6a"],["archives/2019/03/index.html","fd477f8f448b072950f98861921bde9e"],["archives/2019/04/index.html","b818d50dd4091d4d730c6a73e64e5bdb"],["archives/2019/05/index.html","5251c32579158faea467735160d02383"],["archives/2019/06/index.html","1f3248ec37ec0b6a2d063df9492c7299"],["archives/2019/07/index.html","0e5e667039bc00787f44fe458922e1f3"],["archives/2019/08/index.html","cfcdee34cd3af70766e4523bb854a6d1"],["archives/2019/09/index.html","ce958f2aa3635fa38de7986d9176e6a9"],["archives/2019/10/index.html","2b3136f2c6c48de4be0141ffe06b8119"],["archives/2019/11/index.html","8f9be8447c53f4f29a62112892038fe5"],["archives/2019/12/index.html","a248e745612b86b6e89b9addc03cda3c"],["archives/2019/index.html","a13a0dab64a9a71a0b9992a45164930b"],["archives/2019/pages/2/index.html","d63817b2975cbb2fcb04ab4ee0d4b813"],["archives/2019/pages/3/index.html","a44bc19883dcad985120fb8fe3d49922"],["archives/2020/01/index.html","c9c068adb77133cbae9c495624cdcf7c"],["archives/2020/02/index.html","f74455b4a782a52b00af1d05aab97ffe"],["archives/2020/index.html","9dc3689e6e6ab4a772ae760c8d0fc266"],["archives/index.html","0a268252179cf56b6d920e5e27d0e3cc"],["archives/pages/10/index.html","1808ae645205fc23544891bf1ff4edfa"],["archives/pages/11/index.html","215aacc166c22ad9aca8c5fa3dcf1b13"],["archives/pages/12/index.html","091ad2f9dbf19fc3648670e5395fb52c"],["archives/pages/13/index.html","3878d784f7b9e721874cf8637e2be602"],["archives/pages/14/index.html","e0204080125e2f5a8d04d8cf17e6c700"],["archives/pages/15/index.html","f8d22f3e2853cc3f0d6c1d07f2fa59cd"],["archives/pages/16/index.html","84f5970ae13eca453bec7d6e2e8d6afe"],["archives/pages/2/index.html","e3299bd31910a584028396053ca8fac7"],["archives/pages/3/index.html","9d2bb1ca3350b046b6084e6b743341cc"],["archives/pages/4/index.html","641c35cd253b8db654b2786149d14d32"],["archives/pages/5/index.html","541d400b94691bdfb432595f62b6061a"],["archives/pages/6/index.html","f01838238bb14541da8e2d625f87baba"],["archives/pages/7/index.html","49878e2d26c7f0685632720d6100034e"],["archives/pages/8/index.html","fa7f13b3f0af0edba0a44a06747be9e5"],["archives/pages/9/index.html","f03cdc3c9bb16ba9883f19fac4d07fa5"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","d7e6813d56efbecc8ba17bbbd77ee0d6"],["categories/Unity3D/index.html","80aff97bc1f65696621303a0b8547559"],["categories/Unity3D/pages/2/index.html","afdf5b329b1a10e945e7cbb36e1dfef3"],["categories/index.html","342bf80359f0954271190e91732410d1"],["categories/人工智能/index.html","a1257cbd7b0609bfe1100de7d68f599c"],["categories/前端开发/index.html","85a358438ca53f332cd85ce16d5fde83"],["categories/单机游戏/index.html","95869cbb8c79fa52a41a4825bfa279fc"],["categories/开发工具/index.html","364644d981ab54b510aef7ef9602cab8"],["categories/数据分析/index.html","04bc9b097bef3c20c2e95abee414c5ab"],["categories/数据存储/index.html","2e24e2e859babc4db010f6ee5e66dc82"],["categories/游戏开发/index.html","d5d0a4dd45bb4ecfa67596a5f8ae0141"],["categories/游戏开发/pages/2/index.html","ddc2ac1363fa257855db5a8a1617d27b"],["categories/游戏引擎/index.html","271f6439c557b41091effcda8ee184cd"],["categories/独立博客/index.html","6962836c6479bbfc46aeafaf1e1cfcd7"],["categories/生活感悟/index.html","e505c29df826055cfc24e46bd667204f"],["categories/生活感悟/pages/2/index.html","b4f0395aa4824960881114a6980c93b6"],["categories/生活感悟/pages/3/index.html","411900f9d6775737a9eca7e79658169c"],["categories/编程语言/index.html","a9ebfdad9eb1814336379b9c01902e96"],["categories/编程语言/pages/2/index.html","9fc68a021893b2c3ba96aeb0f3a5dcbf"],["categories/编程语言/pages/3/index.html","4cf3b604b9f88b1f557e471cbbd318ee"],["categories/编程语言/pages/4/index.html","0c111ea01d2cd174a0bffbb5d8d0b48e"],["categories/编程语言/pages/5/index.html","529cba1a3582c677aae17567d7acb656"],["categories/读书笔记/index.html","d2c42297e4fdfbcab56ff675adba105c"],["categories/读书笔记/pages/2/index.html","caa11253ec7f11451317227a3ecf1140"],["friends/index.html","d314ec02860fd61e85ded04b478f7a88"],["index.html","bb98176498b2428ab759ad39fa0df70c"],["movies/index.html","f8d50cd324b79f9595ce622ac3d48c44"],["musics/index.html","6c120152730d3c191c79dec3825568a8"],["pages/10/index.html","6f7bdf08cf9f45ad5ee0ebb648826a27"],["pages/11/index.html","d3801f14b37b0d64dcc602f2707c7089"],["pages/12/index.html","e9db6ea3411619261ac8326da0418d4e"],["pages/13/index.html","e600674926370288efcd05b53f7f9318"],["pages/14/index.html","544217bba1d1f7c45e1f143e10bdd980"],["pages/15/index.html","f18f02061856ebdd217c2574a5cae50a"],["pages/16/index.html","bd423f02eb2fc5c08921185ac344b93d"],["pages/2/index.html","245d192e979a74634529a5744e100893"],["pages/3/index.html","2edd42e2926e36146a1cbf8fe45618da"],["pages/4/index.html","ec0bcaa516ce3f4a905d5f3b66fd3b7c"],["pages/5/index.html","17a38a6f1490153718945abda6a46b3f"],["pages/6/index.html","368da205673bf6e3ff2922098c2ec749"],["pages/7/index.html","b205a10e7780a4c16dfb8c3b1b52cb79"],["pages/8/index.html","ab7f2e37604bd1c266f1e6f3666149ea"],["pages/9/index.html","8b2c53536d8fae143f3a707f2571f46f"],["posts/1059499448/index.html","a551d5a286d60d96b13692bc0d704154"],["posts/1071063696/index.html","53c4633740bd314575b58ae5289d67a0"],["posts/1082185388/index.html","ba4d6f60e0276a8bb24c9b260cbde83f"],["posts/1099762326/index.html","028a37f5e0a49f676ae9f31b5cb44cbf"],["posts/1113828794/index.html","ecb3733cb241662e9676a8ae2d02c497"],["posts/1118169753/index.html","9fcca15174859a3614b60c776f854ce3"],["posts/1122710277/index.html","f970b3877bfaf9aabbbde5cdafaa360a"],["posts/1124152964/index.html","5b70b22612950763d9fec132541316b5"],["posts/1127467740/index.html","0fe9a32830177a43890a58ebb37891d4"],["posts/1150071886/index.html","21b655de9e4ca2100a010b729ea73f73"],["posts/1150143610/index.html","2d81159fe129649ee76ecb9a29268934"],["posts/1152813120/index.html","117454aef1eea28a5c1b9e4e542b9fdc"],["posts/115524443/index.html","17433ebb88105942b6ae41ad78422697"],["posts/1156673678/index.html","200d113c1107c383f86b19997fd4a806"],["posts/1166840790/index.html","ba066ffaf06c3cfb83560780bebc4f51"],["posts/116795088/index.html","080760610d14b8bfce6974a04ed97f15"],["posts/1176959868/index.html","e717ca0ba27f165b05f2665fca4221f6"],["posts/1190622881/index.html","713f3b271bb559cd585c5df6facc6a9c"],["posts/123663202/index.html","9b8dd3b35d2c8a08120ad0177ba9f4a8"],["posts/124807650/index.html","02b4fcd3417cc47c529b76d6298fcb1a"],["posts/1254783039/index.html","a994a896cbdbc10eeef3a9f67ee99218"],["posts/1320325685/index.html","3532163094dec1b52e82a70ee940f801"],["posts/1329254441/index.html","655e777ae261586386d00efde6b863bd"],["posts/1357715684/index.html","3a88d46bcaf714203ca9106c0ee2cbbd"],["posts/1358971951/index.html","7d54b7d32cc49e68a19fa4aae9ced93b"],["posts/1386017461/index.html","668f32d1fb51fb169bc558a91ff537b5"],["posts/1394521917/index.html","3440d7e38048fc976c800a83cba0557d"],["posts/1397717193/index.html","9c0b5d38b05dede34d929636f58f4e54"],["posts/1417719502/index.html","635810e612341cfae33faed71e9a6bb5"],["posts/1424645834/index.html","ff15d047276a0149dbfec8d99b90ea41"],["posts/1444577573/index.html","742cd2bfcdcc93de61c10589db0587d8"],["posts/1467630055/index.html","9eefb78cdee41177ef0f73220ffe01ac"],["posts/1478979553/index.html","6fc60fe14bb4cd26e159fe950c9ba0e9"],["posts/1540537013/index.html","ca39b80460abeb2aeb825b0af2ca5ba3"],["posts/166983157/index.html","ccddbc7035b093e004087d55b394680a"],["posts/1670305415/index.html","fb81d63abd46710daf9aaa0af5d68de8"],["posts/1684318907/index.html","f42833ac36d312b7e8cbabe2046c2373"],["posts/169430744/index.html","4190bce1ac0fbe0ddcf2154c6fb2a639"],["posts/1700650235/index.html","d4177466740111908ca93e4fa4c83724"],["posts/172426938/index.html","24fc7273ff4e202064aabece9cd51cfb"],["posts/1836680899/index.html","0853bbd4b42bd33242f2cb40d091eb5f"],["posts/183718218/index.html","462b26bf20504e8f1d9ff8e8568328d6"],["posts/187480982/index.html","c59353727a89fb876b2364556c50c46c"],["posts/1930050594/index.html","03d7871d1ab399ed51d7a44f8fa6eee5"],["posts/1933583281/index.html","17f93c0af9bdfd8d8454d54d25c629d4"],["posts/1940333895/index.html","3c27e2bee1f68c70e576262c750b1432"],["posts/1960676615/index.html","aa1f8bc97aaa764097c557e547384ca6"],["posts/1983298072/index.html","83ea74ae122a37e5ed6b8c126004b3a5"],["posts/1989654282/index.html","00b64e731b51ab7101dd096b15d4c8b2"],["posts/2015300310/index.html","0b6156418f65297024e70bc89fe73337"],["posts/2038378679/index.html","de8d49899ae9452ac0deaa61dab1ae60"],["posts/2041685704/index.html","9f1c1fb8fdc228ed1ebaf4cfa658fd63"],["posts/21112647/index.html","e73158d4989d19230da76dabbe27bf23"],["posts/2158696176/index.html","a341503a3e2db2f069ca2041b739e84b"],["posts/2171683728/index.html","2042121b97738459a5441a81a291eda7"],["posts/2186770732/index.html","9cdf0a3f049063b239d0703f16936b48"],["posts/2275646954/index.html","ea3d54710c9de7721097a20bfb6779a2"],["posts/2314414875/index.html","3305dc6f92bfd2281d18c6074c771105"],["posts/2318173297/index.html","d4edb64d094070e3134b99c3f160bec6"],["posts/2418566449/index.html","3d9a0590ba83cb8f52b6807f30459733"],["posts/2436573863/index.html","334556b46845ffc8c97c9d547597f9aa"],["posts/2462008667/index.html","f7af06f7f339805767c8ad9122cd54d1"],["posts/2463121881/index.html","5a5b1e8482e067e8f868373bee02f86b"],["posts/2527231326/index.html","9fbbfc64eb220df2f62c6c1df4383e24"],["posts/2583252123/index.html","92ff20cada2c8a55a5f6069183f478be"],["posts/2613006280/index.html","39037099a66211a5cce0f9f5498b88d5"],["posts/2617501472/index.html","f73f21199d407e422f4dd5136bf4456a"],["posts/2676125676/index.html","574deaa98437c12d3184bf7d76af64df"],["posts/2734896333/index.html","3b45dcbd65091c3bee26d491ceec8b3c"],["posts/2752169106/index.html","d224a3f742fab0916b3f6c0aff64e60f"],["posts/2799263488/index.html","d998a27c00916e502cc183927fc48baf"],["posts/2805694118/index.html","9e7547cc256301143284c63231da47ad"],["posts/2809571715/index.html","a6335378f2fbeddc114771bfb29c9a15"],["posts/2822230423/index.html","3816fdaf7743642058605d15061e27ff"],["posts/2829333122/index.html","d2055239ca2df79537277936839eb292"],["posts/2911923212/index.html","817f00684fdfcf67f0619da33decbf07"],["posts/2941880815/index.html","e3556502d14cca401357249b87269748"],["posts/2950334112/index.html","661448ead301c5a4c26295b0737bdb2d"],["posts/2954591764/index.html","b7e79ee0026f2fb8abb3922f59bbd665"],["posts/3019914405/index.html","b0f90f0d4496a024578ba9601e48c50e"],["posts/3032366281/index.html","b544d6994267912c8d0f26c3a9b3ffc6"],["posts/3040357134/index.html","e92fc784750f89d6342e4d51b7ed6aae"],["posts/305484621/index.html","2742bf39e0509644b46960d93d325399"],["posts/3083474169/index.html","1a228b07fd359cdc679f5ecabd03bc3c"],["posts/3099575458/index.html","3a9f720d52e2a681dfca5287424b00d3"],["posts/3111375079/index.html","c6448acb96a3ddac11510e007340cb9f"],["posts/3120185261/index.html","cae658d31d50bfe934a10d6e96a8503a"],["posts/3131944018/index.html","a0f20dc030fba93d22449e27c7ae4a6b"],["posts/316230277/index.html","1a2e238e2ebb2e8b633f53779609f2a8"],["posts/3175881014/index.html","12a21c435b5ee159316ce71075446a26"],["posts/3222622531/index.html","9355e3c66fb4a1badecc04da83c10ebc"],["posts/3247186509/index.html","2ff6c1ad82b3c741c956b8c3322e7da4"],["posts/3269605707/index.html","618edde347c1291af46d462c03fd1040"],["posts/3291578070/index.html","b25da34f6f02cb63e78286783ec56a71"],["posts/331752533/index.html","72d9300b9fb649b5b3c9e47d57cb2dc2"],["posts/3321992673/index.html","8c56b76057ee8c5e4c24e71dadd758f5"],["posts/335366821/index.html","9b3a1115c81986204ab1c29750f03cf3"],["posts/3356910090/index.html","028cbb1df233c3330719e3c43d50dfd0"],["posts/337943766/index.html","f3da29c1644e9e7d90c1218f195014ec"],["posts/3417652955/index.html","20b2ad16345262a534333a41625c0ed7"],["posts/3444626340/index.html","b6008f57a102908a06c18fc8fe3a0cb1"],["posts/3449402269/index.html","eb1900a287384fb993fa5b00d5031527"],["posts/345410188/index.html","965e8153ab79059044c8fbd43cb4d844"],["posts/3461518355/index.html","e1d539445b13ccf1be5984d5f0448195"],["posts/3494408209/index.html","fb0fe9061a4b9bd35ff5d54b4cd5c32e"],["posts/352037321/index.html","93d19b95c8b23318c06af0a1aee5c4b8"],["posts/3521618732/index.html","6579ba0b00108ea6a306dc832f463a97"],["posts/3568552646/index.html","eb78647641bb496db65f8ecec0e16f25"],["posts/3603924376/index.html","fc2b7e1f202a4c48c93b0abc3ebed2e3"],["posts/3637847962/index.html","6665351206765002113b734216659cdd"],["posts/3642630198/index.html","d35c60cf20be847160bd108c2bc41c7f"],["posts/3653662258/index.html","be749ce9e8737b32838a4ab11aa2dcf7"],["posts/3653716295/index.html","926124115b282b14c71b35fb389c9c32"],["posts/3657008967/index.html","adf02857ada92c43038d9bb2f4f6a0f8"],["posts/3668933172/index.html","074f768d94a5c92442000985981bc855"],["posts/3677280829/index.html","e22eca85e94e2889c81455d9493df0f1"],["posts/3687594958/index.html","d743f4385f8385d06c82eca09314155b"],["posts/369095810/index.html","ae82b8fe7b09d9cc9b6a06dfd46f1189"],["posts/3695777215/index.html","345a326bfac5f4a3b2549d6c6bc019d3"],["posts/3736599391/index.html","9266eb935d6e9abf14cb3bf3c5058b17"],["posts/3742212493/index.html","d3a722b8682c6c9a9ca652eb6386765a"],["posts/3782208845/index.html","6c09be2d471454a673a22d04f510d719"],["posts/3789971938/index.html","1855f0123b07697ccd3b0229f9d515bf"],["posts/380519286/index.html","a5971ea8d1a598c1d3ebb56f91971730"],["posts/3846545990/index.html","1c3a30ba7a05ee708228569f1115d7f3"],["posts/3873710624/index.html","2b8b6fa27a3448b26d4f8282365ce04b"],["posts/3959327595/index.html","c90e07db4e132e864a5f3ff4ce972b44"],["posts/3972610476/index.html","6350ad80bdd60c8af5540f56b6fbc447"],["posts/3995512051/index.html","a5a6522f721ea54339da32c80ed1208b"],["posts/4088452183/index.html","b43e36c0274f0ecee8d3a9e3ecfdd92e"],["posts/4116164325/index.html","d4d0f2f08cb806e2d0fd96bfd41892d4"],["posts/4158690468/index.html","4523b04302bb0e6a1951b21a9e6bbaa2"],["posts/4159187524/index.html","575c92c0357a07df25a9a4de18e2a28d"],["posts/4197961431/index.html","211398cf391c86d10798dc5920cb3a1f"],["posts/4205536912/index.html","98e40f23a65e95e9a9a9d9fb58e75c38"],["posts/4236649/index.html","7810c7fc298c10ff9b2c89bd25d10241"],["posts/426338252/index.html","f520062dd0e358c78555cf128ab55a5f"],["posts/450254281/index.html","7698c6e056a040a507067dc1ceb119d2"],["posts/4891372/index.html","4cedca5418b4db7e440d3e224de56345"],["posts/569337285/index.html","f8b48028f997493a7a3b222e36dfe2a0"],["posts/570137885/index.html","c4d4e0f6814b23632e082c86d155e137"],["posts/570888918/index.html","15885bc749ef42357c4385febc9f00d1"],["posts/582264328/index.html","99342a5ade71a04ab527b796e984d309"],["posts/632291273/index.html","6a04c4f6829d7f484c45aa0e8e319c17"],["posts/70687890/index.html","4e15946fb682c63b2e05159947958ccf"],["posts/719322223/index.html","100e23042dff6c079a1d6820651bfe2c"],["posts/720539850/index.html","607b8c46745e1827fbbb765f686361eb"],["posts/786195243/index.html","bafd6b253c0d391f8d7255ef33768f5f"],["posts/795474045/index.html","2070654f61291ea991c57cf2a1611a8c"],["posts/815861661/index.html","f8f6f17d073ab47ca7dd9f8b315c28d6"],["posts/821259985/index.html","165039f4b9781b809f656761356d7682"],["posts/828223375/index.html","5fad876832119e8ed701d7f65aa5a6e0"],["posts/887585917/index.html","84e887204fc51e4322449fb2663aaeaa"],["posts/888549816/index.html","f3fc9f620de7f92387077a7134884ab8"],["posts/906436376/index.html","0eb24f652ecb86527c745bbb7a699212"],["posts/907824546/index.html","6c7c21565777a755f1997792f5d88c77"],["posts/927393529/index.html","67a8dcf03634f4b503ce322bd8ccd361"],["posts/94443781/index.html","cb475304a5f0205b8063f68387db4373"],["tags/2014/index.html","905be5a96ebaa35387bc431d41c3e711"],["tags/2019/index.html","812b05b155fb50aefc80d59c0e3118dc"],["tags/AI/index.html","6c8e3102f6c387abc1bd3f79cc5dbcb4"],["tags/AOP/index.html","37705a88cd7efbd9c249e8789f87a29c"],["tags/AR/index.html","1ded89794e031476cc96a9194c89afbe"],["tags/AssetBundle/index.html","efc1f90c4f01192a1c1e86fa337507fd"],["tags/C/index.html","b9137e03f8d5d6abab63c340ea429e83"],["tags/CDN/index.html","307426c35dcd412ab468953258181dc8"],["tags/CG/index.html","6f5794888ea6fb87a75a8084fb72ecb6"],["tags/CI/index.html","9d002619a880b26ae352874c8166a6e9"],["tags/CORS/index.html","7a28bce161983ec392bd56f77c6ae643"],["tags/CSharp/index.html","ca8c8491699978ab64ca112cda25e048"],["tags/Castle/index.html","fcc6ce868ac0b0c2c4c2d98585676280"],["tags/DBeaver/index.html","ddef711d6f2c78beb799a6a609b5a23f"],["tags/Docker/index.html","98be0e7177827c50affe39c28917199a"],["tags/Dynamic-Proxy/index.html","0a579443e3fc6d7a47b7e6b7a689f327"],["tags/Dynamic-WebApi/index.html","44a67e536672f4bc8616a1a1ee1ff821"],["tags/EF/index.html","5ab7e5c9560ed95779154930e48243a2"],["tags/ELK/index.html","c715a426b2a4cadd5129e17604d8d24d"],["tags/ES6/index.html","2cbf8f8c7e632053872674354248aaef"],["tags/EasyAR/index.html","8ae486df2c4f96b12a807fb4a200ad29"],["tags/Excel/index.html","f13fc5062a221491ebe7c483926fcc93"],["tags/FP/index.html","a8ba1a6edfe4e563e182f3f184c90140"],["tags/Form/index.html","4902527185e77b26867e1a1435142eec"],["tags/Git/index.html","089a5499d2da2920a23274ac0804f94e"],["tags/Github/index.html","4f660daf290c4704ab350710dfa165de"],["tags/HTML5/index.html","aaffc7c2aef5ce1404abcfc423cc0d2f"],["tags/HTTP/index.html","6c5e6f0b3309a66412112ea55190658b"],["tags/Hangfire/index.html","744bc66733115b87a2dd0f5a9bf62335"],["tags/Hexo/index.html","ab9ee2ad5290ee9f83db02273b6014d3"],["tags/HttpClient/index.html","5216e9cce2e68a27748b7fdeb719a768"],["tags/Hyperlog/index.html","acba91cbed5f5aa6e8a0fd50f3e114e3"],["tags/IDE/index.html","856fb7a5bccf5fa24c263fa23df4d5d7"],["tags/JS/index.html","37c481e38ae4a42b626372b4088c85ff"],["tags/JSON/index.html","e2a53b2332bd24a72ec20f04470c5804"],["tags/JSONP/index.html","84e2b413bedfbe0adf1db74827629b49"],["tags/Java/index.html","6422dc35aed02579f418e94651f45500"],["tags/JavaScript/index.html","cf6f8ba84d421f700c6fe81a7e8e8b32"],["tags/Jexus/index.html","853c462a3f17ba9d5d30279d7e5ead11"],["tags/Kindle/index.html","a118850519707193af75fd7707300b26"],["tags/Lambda/index.html","8928da1084bcdc9141e9c31f264fdf4e"],["tags/Linux/index.html","db116e11e37a9ab5dee0b51eea646083"],["tags/Liquid/index.html","37f5b276d63b498a260f39f7f3af55d7"],["tags/Logger/index.html","a84f3aa41a523e05c2d938d0bab9fdde"],["tags/Love2D/index.html","7609ea0536fa6035fc6f50a034a98f1b"],["tags/Lua/index.html","c1508d2dd8088bc17b2f3cb10a22d273"],["tags/MMD/index.html","31862f3c65f81f8d387ab1a7de115732"],["tags/MSBuild/index.html","db5504eb122b84302908d64d6a284e6f"],["tags/MVC/index.html","f5e57a540362893e08b788b38dedebfb"],["tags/MVVM/index.html","ee6c1f8b38f32dfa0e8a937a02ade4dc"],["tags/MapReduce/index.html","f7216b0f631539a274334905b7df2a39"],["tags/Markdown/index.html","baf50f241c533bab604001b4be9e3ddd"],["tags/Mecanim/index.html","d79d31f06504afba49de757cc8939f22"],["tags/Mono/index.html","5ffc95f173b369c5d8aba0bc963a4ea1"],["tags/NET-Core/index.html","35172aa9bcc4e11dacd2d1a1945ea1ba"],["tags/NET/index.html","79beed06c0167e745bc8ad7c61107809"],["tags/Nginx/index.html","ab41c849ecc8fa54a327641b86f7d398"],["tags/OBJ/index.html","6be22e006cbefca6de3e875e131d6ae9"],["tags/Oracle/index.html","e518fb5f14a93d8f6925361cb782676b"],["tags/PL-SQL/index.html","121a1b2e44ff8b0e1bc9bfd84f9cc691"],["tags/POCOController/index.html","e0e2d4ccc72623f716740d7e08fb058c"],["tags/PWA/index.html","fabc3e13dace20e669d35dc7b1a7b1f4"],["tags/Python/index.html","7ce6bca63a93c096cc25156ec529b8b6"],["tags/RESTful/index.html","f9fb474fc56d0d46f4bf3d097823e8ab"],["tags/RFC/index.html","dc9e0d150944be9f01f7f2a176d81b62"],["tags/RPG/index.html","dd51360aa16738e96185fba23018b037"],["tags/RSETful/index.html","45b3a1a3474660c442630f93d49446d5"],["tags/React/index.html","ac567ba2abc4b12efacc606ff8dc0e9f"],["tags/Redis/index.html","c96bbe04b364c43e35be8e44314e5fd4"],["tags/Referrer/index.html","3be95da0b233f269e753c89a843727c4"],["tags/SDL/index.html","8313fd4e1db35046919ff314a5aeb2d3"],["tags/SQLite/index.html","079b02cfb26fb13f019e167dc06084bc"],["tags/SSE/index.html","922c20c669e2c3453859500f1d7419c8"],["tags/SVN/index.html","802f80aca09da570498990079357a05a"],["tags/Script/index.html","ebc4fd7e0e915bc42a8d4b447c4cb618"],["tags/Server酱/index.html","2100332bb9ee76da2ba9cfc151033d58"],["tags/Shader/index.html","4939ebf459794bb80ac8efe6a9c27683"],["tags/SignalR/index.html","0330c6cc3f95ee50143ad2dfc458d34d"],["tags/Socket/index.html","e56e973a1b542abab86a75cbab25d60e"],["tags/Sonar/index.html","0e65b9a2594dea57d63a9566724436f4"],["tags/SourceTree/index.html","ce617d21b1b8f976dfbc026e4b9c2968"],["tags/Sublime/index.html","5de38e42d6480d34d70cd5d7e48d60df"],["tags/Swagger/index.html","97818221a0243eebeffaf8b07c3e3930"],["tags/Trace/index.html","ac4a763e1c5fea267080eb0544f53fd2"],["tags/Travis/index.html","9ed365f4597f772030b5f6ea01edcc99"],["tags/Unity/index.html","0473f0f0e737f4eb8e03b65c96016c7c"],["tags/Unity3D/index.html","ca4877e4555d39a1b118b35c6c2a32b4"],["tags/Unity3D/pages/2/index.html","4693e9025ca7be38aa1c44b38b2a92d2"],["tags/Unity3D/pages/3/index.html","d7417d9f6974df838efc730f17bd0d64"],["tags/VSCode/index.html","1844c68a1078231ac216184dd3883137"],["tags/Valine/index.html","022cb55d892c86ada84f396e1c9899fb"],["tags/Visual-Studio/index.html","7b1f0fb3286ef83aa3db6ce1f28677fc"],["tags/Vue/index.html","afcdad51ccfa7d50bb10b44a8578ae94"],["tags/WSL/index.html","7a5b60f1e7b37fb1ddb94a44efd17049"],["tags/Web-API/index.html","b3b64ae3211320a708eb2c2451349309"],["tags/Web/index.html","c6196d568fd0176b1129af4c27b0b505"],["tags/WebApi/index.html","dc98b446fec0aa2605a357b781ce7b04"],["tags/WebSocket/index.html","fcc104e4e0bfd03fe0cb6f36dd4badb8"],["tags/Wechat/index.html","00afb04c8074e7b63e529f57b7cd7879"],["tags/Windows/index.html","941e619927f8237bbfa534106a2bbd9f"],["tags/disunity/index.html","18025126b400269c683dadaeeee87a32"],["tags/index.html","19c251411980a0a3ebe28161fe7ff44b"],["tags/matplotlib/index.html","9cb2de755f7c054867de95c7a84d48c7"],["tags/njsDelivr/index.html","628270ab03493ccc310c74541ccb6c87"],["tags/uGUI/index.html","128d95585151b6eecc92b5e002a6c719"],["tags/zTree/index.html","510422c291ad9e08221c03670f133581"],["tags/一出好戏/index.html","6d199c9358defdd33c65ce580be6df97"],["tags/七牛/index.html","2f6e5436454b66f34444efa4ad8fd3b9"],["tags/主从复制/index.html","61694e985f0ee12ca8e1048976baa166"],["tags/事件/index.html","dab4d3f22ffab47a3008b20cf204bc08"],["tags/二维码/index.html","e197ae52d5b5abd83ed0f055780f71bb"],["tags/云音乐/index.html","eb22f9482bd238849ce629ae494bfba9"],["tags/互联网/index.html","bc428b8344d9dce0111c22b9fc440081"],["tags/亲情/index.html","03ea597764241d5ac8f7ae13cf2a6105"],["tags/人文/index.html","4d8b74c496f903fe7fbcd8086ae4ed2c"],["tags/人生/index.html","12eded01ae0c8806a8f50c95e0b6ad0b"],["tags/仙剑奇侠传/index.html","088ba3c35bb606b239ec4fdb248404d0"],["tags/价值/index.html","d039268cc421f55a311267b0c197a10e"],["tags/优化/index.html","82ee231c2974edd4fb5151fd6c28a49f"],["tags/全智贤/index.html","d8feb8fe91d8478fff11a556e604492b"],["tags/公众号/index.html","b3dd11380df96e80c3a844b71a9e1373"],["tags/关卡系统/index.html","082805da65b881248850ca6f4c50baa6"],["tags/函数式编程/index.html","3e89c3d89060bbf09824e21deba1fdd9"],["tags/别离/index.html","14dfd2dc9ce874c5d326984e7ec9b600"],["tags/前任/index.html","1b7ac3d4d56d1419daf2be25e7ea6b49"],["tags/前端/index.html","3984274ce742d843f8279500801bd09e"],["tags/剑指Offer/index.html","e1b09a4a3fb48403fabfbb88fb054b0f"],["tags/加密/index.html","756db9c65119f33e72b0f6fb9e0cbb65"],["tags/动态代理/index.html","fbdd6773c641eea5cc9d4a710408768e"],["tags/动态加载/index.html","1566f09495b00828d08f15d1c4251581"],["tags/动画/index.html","62829e0d866c8445082018d334d4305c"],["tags/单位/index.html","815a2aeaf6e884ba205419e37b6e651c"],["tags/单机游戏/index.html","4b2d155083849cbb75e81680d84f2998"],["tags/印度/index.html","907956860753884fc10175c1d1a44fe8"],["tags/历史/index.html","a26f58a53a867684cdbeba6e24dbdfdf"],["tags/反编译/index.html","51436e859d09a16b239d53e57cf8595e"],["tags/同步/index.html","8cb7ba4afe5f72438e1fab6ad2e301e4"],["tags/后端/index.html","92c3a96ab515b55d9067e576f95d86b0"],["tags/命令/index.html","0cdbfa74246e6cb884a10e22924487ef"],["tags/和平/index.html","92ad7d737ebd4f9669e777eb1b1e4185"],["tags/响应式/index.html","497b4eea1e66a6baa7e783ce9afcde25"],["tags/哲学/index.html","057c22f25d264f7cbc59642c4d0caaf1"],["tags/回家/index.html","113cca3a5a6bdedb4798b3a6080b3776"],["tags/回忆/index.html","71d33951188f1bc2d56114f79c2b4cfd"],["tags/回顾/index.html","fdd549a220db696b49f28648f90619be"],["tags/回首/index.html","538ed18d7f6697f75956628506f7e805"],["tags/图床/index.html","eb390a28c6514725da748557099188e2"],["tags/图形/index.html","caefb5e7506a4fc5ca3a4aceba4f7443"],["tags/地图/index.html","e29f9a0df42afdd9bdb1be7e2f51ccf5"],["tags/塔防/index.html","25cf336c05c6b2224e6d4ef075b7efe0"],["tags/增强现实/index.html","80ffc95c9fb07feb514b984f3f774828"],["tags/壁纸/index.html","79b6f68b256e975dd68b6cb11f9881e5"],["tags/夏目漱石/index.html","f2bfb5f2245c708ba050f694c5697034"],["tags/多线程/index.html","ab4626598c871af3048bcdb6f3732af8"],["tags/大护法/index.html","bcdae1866f9c0bd5561f56d865d019ff"],["tags/委托/index.html","f804f77ae14a16c548da4ad4c469feae"],["tags/孤独/index.html","ea0b720bfb6127660ed2eb50c82b79df"],["tags/展望/index.html","a94148f53efedbce1f1b694000f12a5c"],["tags/工作/index.html","242f844afec2c8721723d239ae86bb2a"],["tags/平凡/index.html","213a4f4fc819c97b65ed0e67e28abea1"],["tags/年华/index.html","4d2fb64e2df4d9bfb4069dd12a56dd99"],["tags/年度/index.html","b66766d0f2babb4d04a2b0f37572337e"],["tags/开源/index.html","559ce2e99de2ad6d75a34bbc5df87dad"],["tags/异常/index.html","b35bd86e782874191a5814c0d7ef89c1"],["tags/异步/index.html","ce6dad90d4e28c40fdbf7bd9b1b4a423"],["tags/引擎/index.html","e69e25799f91ee72de7f2d12cdcfbbad"],["tags/影评/index.html","6be228c14d36941aaaf56e42d4cefac1"],["tags/微信/index.html","f4d14411fd3dc3bd48f69ac032b4e4dd"],["tags/微博/index.html","d2bf98f03a36c20a072e0b20c69623ea"],["tags/心情/index.html","241546c12a031a6933f3cc26ae56eb66"],["tags/思维/index.html","a18b341f168b5fe0fd4e1023b12a0cb5"],["tags/总结/index.html","68941446de38e3dde21179011a0b82b6"],["tags/想法/index.html","bf81032073f40e68a0afb143cee4c881"],["tags/感悟/index.html","9ff8124def6d6b23f5265acafbfec226"],["tags/成长/index.html","578790d639e4071d70769e955927f94b"],["tags/我是猫/index.html","49ae400a5211aa820e21a7c47489357b"],["tags/扩展/index.html","40d28c4a32a333342b4396f16c9e44b2"],["tags/扩展方法/index.html","896a730770fcadcdb782c5da0e1e76c1"],["tags/技术/index.html","b243790edd71ecc6466de508def2390f"],["tags/拖拽/index.html","8ca77f15aef0ade74f7b2038168696a6"],["tags/插件/index.html","39b210e4e9620b173c62fddb806d7197"],["tags/插件化/index.html","d2f27dd9176fb8647ab5de57462cef11"],["tags/数字/index.html","96fbee128624111b2c70c1559a02c71b"],["tags/数学/index.html","6fb2431b15bce4230471bd5ade2ac476"],["tags/数据/index.html","8ee2d153562e45ac2e6579bfe9ae1520"],["tags/数据交换/index.html","237741588bcfba26a5bc7fa2274dd61e"],["tags/数据库/index.html","c389e3d46f6a78eba6ac31cf7079eed2"],["tags/文本分类/index.html","678fbf3a24b2e9bf5ad06947d70f3e51"],["tags/无问西东/index.html","cc27d5000826f2f7dc7d6f97a212ef19"],["tags/日剧/index.html","fd8675118184f581c5f61d3de474abb9"],["tags/日志/index.html","ff33cb627527c99bb17132c093a56b43"],["tags/日本文学/index.html","dc7d7b80b66ff9960b92f16200bc3b9d"],["tags/时区/index.html","82c0b818dc83c5580290a154d378add1"],["tags/时间/index.html","fb15ee0db9015107ec5cd3588237ee61"],["tags/服务器/index.html","652c2b9c7d8aac73927404f44fc80ebf"],["tags/朝圣/index.html","c64ef99d1b126da215546d12f0f6aad9"],["tags/朴素贝叶斯/index.html","a9e90f915b598ee59198217a18ba0c7d"],["tags/架构/index.html","c282dc4aa3283e2f6d73805e25a33c6e"],["tags/标注/index.html","8f0cf0d45308b72f8f3e79aa9fb3ea8d"],["tags/校验/index.html","ff65bf97d335b269bc50410aad36614b"],["tags/格式/index.html","b03a8becf28270ec4f22942b36734719"],["tags/格式化/index.html","0a13b4dad923a99058c82f1100d39401"],["tags/桌面/index.html","aa15946b43f0749331642f7978e857fa"],["tags/梦想/index.html","dd11aa8e2bb79a3920b609828df577d3"],["tags/概率/index.html","fe7a9b778a20672136b71d47d7c1b06e"],["tags/模板/index.html","def28f79e887de8383b1df7676b18742"],["tags/模板引擎/index.html","36b1277ccc8bab004f6efec6851d1a12"],["tags/毕业/index.html","e54129d376c09eb1f9a80c0c3fee055b"],["tags/毕业季/index.html","0ff84fab142359a6d43054d68116a530"],["tags/消息/index.html","ed39adfa0675e51d03e63c659f4bcc55"],["tags/游戏/index.html","9c00fb2885e741e626a0e29ef3fd7a85"],["tags/游戏/pages/2/index.html","eaa5ed96e929a8266d3354d3197f9000"],["tags/游戏开发/index.html","a80609a09fd10d65b522e6c24bc3986b"],["tags/游戏引擎/index.html","bb003bb27678431adef0ac58eeabf92b"],["tags/爱情/index.html","c7d613281eec7637af47e23729b24a0d"],["tags/版本控制/index.html","5436b4590d1a27b1cc3e009b1ef5cc2b"],["tags/版权/index.html","ac1a0fec1b3ba71ec90147c60bcdee59"],["tags/特性/index.html","951d7040ceca91eb0749297e8914fb88"],["tags/状态/index.html","ab8dc5fe6c16c1dec8fcc283b1a5c228"],["tags/现实/index.html","14515972c6d8f30c0bd28651e55da1c1"],["tags/生活/index.html","626ee18bdc3d82f0a6fd8bd7f5db821d"],["tags/电影/index.html","3c4c38e143d0916bf24b72ba4b75c03c"],["tags/画家/index.html","d0317fca3236020b18f75b728e66280a"],["tags/知识共享/index.html","1d323c9d444e899160005553a18e4f0a"],["tags/矫情/index.html","df47905a43c471e2617b9da80bf1650e"],["tags/程序员/index.html","8c49a25d81b86af42140059711e7f792"],["tags/穹之扉/index.html","527289bbc31cb9f4992afab22adc6755"],["tags/穿搭/index.html","f3021b287e0cad5c1d673c38dc2e41bd"],["tags/童话/index.html","729d43393b607509d74028c0c01d69bb"],["tags/笔记/index.html","8a6ec451de0eabc0915ac2b48440ec86"],["tags/算法/index.html","6f01b17fc329760ead86ed9f783680dd"],["tags/米花之味/index.html","e4b09e70e74b10df00bb5cfa49a37afd"],["tags/缓存/index.html","5f62255e2a55290845737b24848d1c26"],["tags/编程/index.html","7380885c36af0986a85d48840392c841"],["tags/编译/index.html","5d2411b8e4cad07477d10ef83c8e5b4a"],["tags/编辑器/index.html","8227436e0d802ba10b75c276431096a5"],["tags/网易/index.html","7b11150c5c2b13922acb4fea41d47729"],["tags/脚本/index.html","f7c73e44eb74a4223565f566fd827320"],["tags/脚本语言/index.html","a92c50c9c4e696d4bbad956c721e6334"],["tags/虚拟摇杆/index.html","cf0336c05c84cd7aacea67ae9d387f24"],["tags/蛋炒饭/index.html","ded7d993bd7c610be5f6f31ea216d009"],["tags/表单/index.html","75a0264edd7fe6badfd1cec9d75d85a1"],["tags/装饰器/index.html","62faff375e49955bde0d0278fd26bbfa"],["tags/西安/index.html","2f73240c338a67a4c24ee057aca7be67"],["tags/计算机图形/index.html","c114a095e1d76c0c02856098aad62ef2"],["tags/设计/index.html","921704596f154a7ec6ea6184d347196e"],["tags/设计模式/index.html","6c11a8867880d4d1b819180bba2cc66b"],["tags/访问量/index.html","fc33f14994cf30a98e35b54c607996e8"],["tags/评论/index.html","ba38f829f846911faf8ef7f8a5b79190"],["tags/词云/index.html","116f46805336b7db7434963e91b70aa4"],["tags/诗人/index.html","32bb1775181622a42f874db9df0bb737"],["tags/语法/index.html","02468f77775dd8ef3e48890397380723"],["tags/请记住我/index.html","98d71cb137dad3fce71897d76e9aaa0d"],["tags/读书/index.html","64ed166b35078e2f535a5d737f44753e"],["tags/读写分离/index.html","6c388e510ae233b29651118ad70c8ee3"],["tags/调试/index.html","6b16b2ef69da03dbde035ffb3de38f51"],["tags/贝塞尔曲线/index.html","e75c8ccfc62a72294e8cfcd059f3eafb"],["tags/贪吃蛇/index.html","e4d1e0106f88859e482257e5a7cae593"],["tags/资源提取/index.html","02d120c2d9fbd0318d2f9a54a1b25ca5"],["tags/跨域/index.html","c72683ef6a0a8673d6166c2bd2dfdb9e"],["tags/跨平台/index.html","7ac9f4815edf92ae3f7e24fe16186e1f"],["tags/转盘/index.html","4ac93f4dc53aa7ad2800920d0b7722ac"],["tags/迁移/index.html","0730e2a98f639e71a5697122650f22bf"],["tags/通信/index.html","2f68baf95c52d40e632f6fa1d7a25535"],["tags/邪不压正/index.html","9fffe984cab568fe10950f4c9c9082ce"],["tags/部署/index.html","ce17b5750eaa6fd87d4ad269ac4b870a"],["tags/配载/index.html","c6310aa156e3a6d1043af6ab768c6fcd"],["tags/重试/index.html","2e87006dd970303f7226f57437b5f1d6"],["tags/长安/index.html","0dce4119865eef77f414385350d39efc"],["tags/长安十二时辰/index.html","607697dab72ba505155dd6058a8abb81"],["tags/阅读/index.html","57be2bfc3726acb3ddca020e4becc8c7"],["tags/阿里/index.html","c6d20dbaedc87c620599facfec415231"],["tags/随笔/index.html","4b244c2edbbb3d29624a992917ffc184"],["tags/霍金/index.html","55c97c70f33f3c9a5ce661617e00a329"],["tags/青春/index.html","0cda536f5b188e2e9d6891a4370b8f3e"],["tags/面试/index.html","a3a2671ac508035f31daa95fadce232f"],["tags/韩寒/index.html","2ba36e57f587c936f62a8b49fa994573"],["tags/马尔克斯/index.html","4246d53d1100aa423500abda3e998b38"],["tags/验证/index.html","338d5914a9deef8517d6e32f1145c32f"],["tags/黑客/index.html","f98c05c9a55c7a7ab8f719a15353826b"],["wiki/index.html","3c5fb1826d8dff8639710051296869cf"],["works/index.html","10e9bb9bf7e31dcbea82a69b68b4b7c0"]];
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







