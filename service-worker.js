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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","e232007f13775ebbfb2114cd8968d249"],["archives/2014/12/index.html","23495824ae7b5a2448d3af9f3845b97f"],["archives/2014/index.html","6ef2303da2cbb8ed97e60e05989dcb78"],["archives/2015/01/index.html","bf5b14edf04ceb1795a9ef33e8773735"],["archives/2015/02/index.html","88a77f722b3027ed2893820000208417"],["archives/2015/03/index.html","fbab1750fa2af5aaa24616c31c0194b1"],["archives/2015/04/index.html","d402015ff393320fdfea7480acfecedd"],["archives/2015/05/index.html","cbfb15d5494696b64e73bccef0ee8386"],["archives/2015/06/index.html","46d0ae1361ebb731020f81d510bee4ff"],["archives/2015/07/index.html","a1d63633ce42bdd346390a4d41994d91"],["archives/2015/08/index.html","355f8e3f2e789b67a55c5a16dde3e70e"],["archives/2015/09/index.html","5054e690e97d4938fdbbb3545742bacb"],["archives/2015/10/index.html","ea100d05b028f2d99c979f46a4ccdf7e"],["archives/2015/11/index.html","f833ae121d47b59946735714498bd47f"],["archives/2015/12/index.html","38dfb4e7d00b85d7eed41a9b9f7a8494"],["archives/2015/index.html","bb1db97cdc24910eafe7c052efa5a8c8"],["archives/2015/pages/2/index.html","0204c7ffcddb33aa97f2c42cbc278e1e"],["archives/2015/pages/3/index.html","4a04b7b4f0e4ad3015a2494079132e1c"],["archives/2015/pages/4/index.html","ad9f5c91d5ae4c71658513688f25b40c"],["archives/2015/pages/5/index.html","052cbadf46d00eefecd6e950643974c8"],["archives/2015/pages/6/index.html","dc08498fc58e781f2325cf27c4301706"],["archives/2016/01/index.html","55b52adcf69d91091888ca27b980dc03"],["archives/2016/03/index.html","7ebd885107a58dfac7bad2c248d83698"],["archives/2016/05/index.html","ae14b0f3f2c9dc078deec8b6d4a0a858"],["archives/2016/06/index.html","9be763bfe62ceb88f68d18e11283a5ce"],["archives/2016/07/index.html","93dad33cbabc3496fbb3f085b34b76be"],["archives/2016/09/index.html","4fddaed68451a36e7e8ba9cfad14a802"],["archives/2016/10/index.html","3042ab72096a6ac39cfa5fad6882b2cb"],["archives/2016/11/index.html","339d5f822aeb5c475f71256725ad7f1d"],["archives/2016/index.html","9d40d39423fbc1f6cc6101673099e994"],["archives/2016/pages/2/index.html","3085887202d0df0c2007876718fb4ea4"],["archives/2016/pages/3/index.html","b60f15322721a134df397e29a638a59b"],["archives/2017/02/index.html","78a63926720a7d2f48d1d29cc83d14be"],["archives/2017/03/index.html","bc9c1984093fce463f38c3cea71ce690"],["archives/2017/04/index.html","ce82abb5f7080d79853c4ecde718d8d0"],["archives/2017/05/index.html","4f1d09de41f67faf180589f02ea81d04"],["archives/2017/07/index.html","f9b79f79c5efcf465a63c44a53977191"],["archives/2017/08/index.html","78d772900fcf7875a6586a9c60479410"],["archives/2017/09/index.html","5b5ee15b3817d72e6ef5038045547d77"],["archives/2017/10/index.html","20765bb671043c6bc00c71de108adf1d"],["archives/2017/11/index.html","a147e0fa966c4dfd1ce3fcf627070f35"],["archives/2017/12/index.html","24aafc13c24444763423a8f138f942dd"],["archives/2017/index.html","df54e05d98440bbcd16bd922dcd91acd"],["archives/2017/pages/2/index.html","598f5ff81409893df8bcedd09e26db98"],["archives/2018/01/index.html","89658477087f00a13c9d9ad44fed6e98"],["archives/2018/02/index.html","0b5b836b1007e767455283604694adda"],["archives/2018/03/index.html","86da18fb77faa924f76c03abd1276fa8"],["archives/2018/04/index.html","faf33484a660a21fd2d7efce524a54ca"],["archives/2018/05/index.html","2674e9fd13fd32840620e8e29c66a588"],["archives/2018/06/index.html","08ac8de44f385c4c3bbfa8d4de553dcc"],["archives/2018/07/index.html","ce0557fe0f27f7c4d4be1411ddf6233c"],["archives/2018/08/index.html","4f5aab8878ac3aba5a336c415ffa6a07"],["archives/2018/09/index.html","7de068381e134a8d6ccb320389c7f62d"],["archives/2018/10/index.html","044adbdf551766c433f9d154decc1182"],["archives/2018/index.html","93587aeb2a7f1c32aaec0552d2521c4d"],["archives/2018/pages/2/index.html","88c1ee857d50c7fdc94512e3cd27e86a"],["archives/2018/pages/3/index.html","e8d0d3420e3679a241c060fd21bdf5f1"],["archives/2018/pages/4/index.html","615c390b3e6ced165210fdc909cddc7d"],["archives/2019/01/index.html","e1a9e55f6b7a83b873e12cc2a250fb06"],["archives/2019/02/index.html","676ae53679c0f7921747ff10a8994c90"],["archives/2019/03/index.html","b953e5eb5ff51d3d2c9275f095187e23"],["archives/2019/04/index.html","d22777a33643f8b94f5b57de7dae5f5e"],["archives/2019/05/index.html","99244e3b69b0f5fb7f15ce9dcd02c469"],["archives/2019/06/index.html","ba3f34923c66b3813405f1746a197427"],["archives/2019/07/index.html","a1d64bf5c31001372cf5022ff92cdd6a"],["archives/2019/08/index.html","62b976d463235ace5e286a1709fa2cba"],["archives/2019/09/index.html","b074a33cf1fa80ada73aeeb1e5dcd525"],["archives/2019/10/index.html","10ba83199927ac9d7609a86fafb121a2"],["archives/2019/11/index.html","fee9aee5bf9cecaaa341ce4ea53f2743"],["archives/2019/12/index.html","ccf0689ab22ef389a496f2ee87202d87"],["archives/2019/index.html","bc8637877ce2f81daba0de290ac10e73"],["archives/2019/pages/2/index.html","b1547345a5454a25df3c6306256a373b"],["archives/2019/pages/3/index.html","fa1d9d1b00da1c4c4802a409dec6ac3e"],["archives/2020/01/index.html","fc69c4da4a0613f4117347eabd7583b1"],["archives/2020/02/index.html","224639f0e53b7abf56ba8a32691a651c"],["archives/2020/index.html","d847810619190f3d49cf03ece538fdcd"],["archives/index.html","589b576f07b3ee0cec300eb0ae8d9d13"],["archives/pages/10/index.html","bdce455dade664fb3f1eb11abefd7156"],["archives/pages/11/index.html","6813479c17e63e386576cd9e2d5cda55"],["archives/pages/12/index.html","9a699e14c4d340d52a3a12d406fbda51"],["archives/pages/13/index.html","a6a66816fa96c50457cbde54a3b75ef1"],["archives/pages/14/index.html","ce280dda4d1b4642c6ee306daa701da3"],["archives/pages/15/index.html","edc2146fedbfd49d9cda5d1d2997a13b"],["archives/pages/16/index.html","9d759ba93e7570081d96b1e6c22a7e81"],["archives/pages/2/index.html","5e20ec4aba4e01baf5093cf70381be88"],["archives/pages/3/index.html","baec1ec65c378e2de60ae859da454a80"],["archives/pages/4/index.html","0b69cde2a5bf0d722f7d0b88b0c60906"],["archives/pages/5/index.html","e020a7597ab3c7b0cd239013b264be14"],["archives/pages/6/index.html","1ec1599a4b3c18f74543ca8de7bf7739"],["archives/pages/7/index.html","646b7b3d7094c98debdb729f1101def4"],["archives/pages/8/index.html","685a310d8bf485e2a3c6add236641d3f"],["archives/pages/9/index.html","3448b0d238ad3bf8ddbce16eed087269"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","a4cfb0e3300d0c0ef9df32e24028b6c2"],["categories/Unity3D/index.html","cc32de4b3fdd5add237c6e71435d3a3d"],["categories/Unity3D/pages/2/index.html","93a939a1b88d35fe5c370c7d2d00b6af"],["categories/index.html","af978481e8ef0b11c6bbf8eb958bde2d"],["categories/人工智能/index.html","73080b384ddb27d4cf810a2d0d344e69"],["categories/前端开发/index.html","22ff7903f624fe08d25d3e6d12420fba"],["categories/单机游戏/index.html","f3768ba6310d424c92801b654dbb722e"],["categories/开发工具/index.html","fdff49837cbbfe193da3e27cd432934c"],["categories/数据分析/index.html","26cfcd2e235b3b0dd176085fc1e89592"],["categories/数据存储/index.html","89153bdff1bbe40a9ecf98ea038f83b7"],["categories/游戏开发/index.html","f3ed7f5f37c268266bd13d23a428945b"],["categories/游戏开发/pages/2/index.html","13b3b3e286dd680f128e74d0c1f11f33"],["categories/游戏引擎/index.html","2096a3109b9393028e077c089e0adf08"],["categories/独立博客/index.html","cea3bda7a8f86814d439aafcbf74a7d2"],["categories/生活感悟/index.html","fdab572b71e32fb6c33b83ffa3f7d808"],["categories/生活感悟/pages/2/index.html","20f242af622985656727aa549a870d5c"],["categories/生活感悟/pages/3/index.html","a598de5c481fe5c4be0208b8d99a86ea"],["categories/编程语言/index.html","8b01179c6d53495f01de56cb6a8fc2dd"],["categories/编程语言/pages/2/index.html","628b00f3d2907622d8ad322c0cae506f"],["categories/编程语言/pages/3/index.html","6504bfdef00cf60b7b2ac549e697638c"],["categories/编程语言/pages/4/index.html","7b64c1352dab2bfb1f4e929f089104db"],["categories/编程语言/pages/5/index.html","906d11472db59f6acc1026b009ded72d"],["categories/读书笔记/index.html","1d6b1ae46f455e83ade6c0f25e0e21d9"],["categories/读书笔记/pages/2/index.html","f39bfeb6336082e9721eb0d3ca666b3f"],["index.html","76fe13dff420fb0f164a4ed7a54bf714"],["movies/index.html","969db4d894aa1bfe79f00988022f6970"],["musics/index.html","4941041f0f4863465d6e8041b5cfca10"],["pages/10/index.html","9f1a3d24e4357fb75628ae4922ec8bbe"],["pages/11/index.html","8cd8863746a732d36de7f2f73776181a"],["pages/12/index.html","52813f7cf975af395d4566038f1f3351"],["pages/13/index.html","67e7657af05f09c06dc4d0664ce75961"],["pages/14/index.html","fc89f3a6ddd17b8751e5e8a0688aeafe"],["pages/15/index.html","cef580a4a9070be518d96862c9e63fe7"],["pages/16/index.html","3a80ceb0c6b20f520636db8cba98410f"],["pages/2/index.html","4f6208565b5647ea528b354681fdadeb"],["pages/3/index.html","c748ed03a6a6dcc29ff9529e4864637a"],["pages/4/index.html","d528a150b2df976402288c8442919944"],["pages/5/index.html","d3f5a1dad434b268eb623df8c28738c6"],["pages/6/index.html","2ff30c878a956522bf42b1cd3483a9f5"],["pages/7/index.html","4c0ddc2731817485199d610c5f6aed3c"],["pages/8/index.html","f48947331f57caeb4bbc6341e3b49cf8"],["pages/9/index.html","9cc7e07fdc87dddb2cc5d3f7577145a4"],["posts/1059499448/index.html","0377ed06d01eaf4bd74ab2b87953962f"],["posts/1071063696/index.html","ef94a26338f2fc127a3a45e3b4ad34e1"],["posts/1082185388/index.html","cca766333ae5a95dab172479a788744d"],["posts/1099762326/index.html","b37f3bcee6387f214f84061f206a562f"],["posts/1113828794/index.html","6cd43843b2f5c46af2f4a866f342ebc4"],["posts/1118169753/index.html","d26cf0b4778fc183c9aec59e1f11fb06"],["posts/1122710277/index.html","d207322e3ebcae469b90465fd8052b22"],["posts/1124152964/index.html","6be4963c517a6d958e39a3bf7c243e79"],["posts/1127467740/index.html","03903dc89b70f1587b66a10e44db8027"],["posts/1150071886/index.html","77e0aef8f3f3f3c042efad130a00424c"],["posts/1150143610/index.html","09e6db338175b8a421a139b68486b1cd"],["posts/1152813120/index.html","65ae9a5d3ee4741e8a35f25d54471751"],["posts/115524443/index.html","3f43a9c5201fe359fdf38e90d0c6b549"],["posts/1156673678/index.html","4ae24a1ed61205f91f25fac27c9e98f9"],["posts/1166840790/index.html","91e3ba8f452d69bf6407bc250346e8bd"],["posts/116795088/index.html","c1b33ece288d43b6b1a408075600de77"],["posts/1176959868/index.html","bc8ae0cb755f2355bc50a8b1c5f989d9"],["posts/1190622881/index.html","4ae60f3c2a7b2c7f5b3f758bf0ae37ab"],["posts/123663202/index.html","9e236e2b5e3fba6578a3988d9a7ea3f7"],["posts/124807650/index.html","5cb618fc9459aef90202c5dcd557cc14"],["posts/1254783039/index.html","fd51165513223c7b535ad94f5e0c1d27"],["posts/1320325685/index.html","1608dbebafce9e12935988f75dd012cd"],["posts/1329254441/index.html","90cef22264f3b6934360a706ce72d19a"],["posts/1357715684/index.html","36b2b986cc5383810f49c547489addfc"],["posts/1358971951/index.html","e97fff31e133918d203af3b2261f09a6"],["posts/1386017461/index.html","a1209ef90bc9b43bf50a3443045c3345"],["posts/1394521917/index.html","6e9675c54fd3b939c431c236da30a944"],["posts/1397717193/index.html","5a36bc8baeac60f3ce216b075ee3e1dd"],["posts/1417719502/index.html","ce701638bebcf1746902a30f50ec6b5f"],["posts/1424645834/index.html","110648f20fe12f4eb96cb7a7a212150c"],["posts/1444577573/index.html","bda188a056cab5bafc1417f291e32d22"],["posts/1467630055/index.html","6ebe6acee3f4b18f540d8bae76aee3ce"],["posts/1478979553/index.html","c3a12a7a4a9dacbb8a6ad97d4f665a71"],["posts/1540537013/index.html","a7b1c410c0ef85a6b84bc4630e4c5913"],["posts/166983157/index.html","7c2e4ed796d5dec0d94ac4b842a460db"],["posts/1670305415/index.html","126ca1a1d3a3b828a63f541a08dbca85"],["posts/1684318907/index.html","df823fba525bcbdf1466e4f6cb2e680a"],["posts/169430744/index.html","e4e69a63fbc089a476480d92cfe3f04e"],["posts/1700650235/index.html","6ee8afdf77b6efebf018f86b7c3241bf"],["posts/172426938/index.html","31a91ced8fe8f6e2f6efec06dd9ded4d"],["posts/1836680899/index.html","7276634662d0b0117dae780cb6c95a53"],["posts/183718218/index.html","2541ced62a1e12a0c9a8a23ee8dfa8fa"],["posts/187480982/index.html","c90b2cc583720cff845065b12b707dcb"],["posts/1930050594/index.html","2f6bc79a7626c2b7da1342f1d66c1f6d"],["posts/1933583281/index.html","419456ab95d2d16939e805b942fbcba3"],["posts/1940333895/index.html","0128980a62024339be038690c845803b"],["posts/1960676615/index.html","5956fbe0285b6ae2d84e4c056bd0f379"],["posts/1983298072/index.html","8870f6cf2927638236bda7085ca38fcf"],["posts/1989654282/index.html","2e098c3077a34de17bd0f1940e1e8fd3"],["posts/2015300310/index.html","d081f00c2c175d49df72615cf13ed52d"],["posts/2038378679/index.html","1eb590210355627f922c33ebdbb76245"],["posts/2041685704/index.html","03ccfbaa152a180ea4848a29622962e5"],["posts/21112647/index.html","5ec3aa7be11ac676a56aafd99979510c"],["posts/2158696176/index.html","c8ef5777de48a395a8d51f37324d3cf9"],["posts/2171683728/index.html","844a82fdb4e5ea6570eeba00e07a0b94"],["posts/2186770732/index.html","83657232bb18ef4a42264bb7c3187661"],["posts/2275646954/index.html","be3a10b27c34e2932a6ec55c3cad7736"],["posts/2314414875/index.html","bb879f68c01eaadc4942a36f85d8a486"],["posts/2318173297/index.html","0ecd542b0fd516bec1569a5817165248"],["posts/2418566449/index.html","bc5047f423575dae8c6e05c750eb2a7a"],["posts/2436573863/index.html","b43cf0205ad4222d18504d3f401c316c"],["posts/2462008667/index.html","de62312285a6d8a42f05021b2cf0566b"],["posts/2463121881/index.html","ce4a266954f9b57192e1828a2924875f"],["posts/2527231326/index.html","0f0625bcf6519fb99a37358e371760f8"],["posts/2583252123/index.html","7b5f272eebb54a7621eff3b983116626"],["posts/2613006280/index.html","546142f961c049a0f83e7a8bc92412ce"],["posts/2617501472/index.html","457f39cd934f3b889992c873af68771a"],["posts/2676125676/index.html","a84c23c19d2f8c9559a400f165a76393"],["posts/2734896333/index.html","1ac43704a3f746eb5b2c1460fcc725f6"],["posts/2752169106/index.html","0a37b5f5b32fb7e743a3d8c6b1e32359"],["posts/2799263488/index.html","bb4249e8dfa47027c0fb7f72177e70ab"],["posts/2805694118/index.html","c18b3303f32fce68c467c4d2ea4d6a78"],["posts/2809571715/index.html","ddf5d7b2d73ee23039db2b804c250ad9"],["posts/2822230423/index.html","e2a33c9a0a7867266a971f2ee6e6f2a5"],["posts/2829333122/index.html","b5e9822423b2d6343ef8a6e12a8cda3a"],["posts/2911923212/index.html","9e1fcc8512a0205a4a2ee40b47fae0d8"],["posts/2941880815/index.html","842160c498845a4e7ab033974b71080d"],["posts/2950334112/index.html","33c1f210696476abc2b045e31e20c8fc"],["posts/2954591764/index.html","fa17f6aaf03666084ad7eb8cbae76bb8"],["posts/3019914405/index.html","45df1e12125d353797440b3ceb06b336"],["posts/3032366281/index.html","caeb037a2ae857193157c14490af8aa6"],["posts/3040357134/index.html","c8e0915219643289f3ce6b83c5ea902d"],["posts/305484621/index.html","23a77783bf4383f947933b3355ad4bed"],["posts/3083474169/index.html","f37d9251e131696614198c9d65f8a2cf"],["posts/3099575458/index.html","63ce514fcd825fd8d005581c04d4fca6"],["posts/3111375079/index.html","a2489e7d0ec5aa9e22ffd939cbabc9cb"],["posts/3120185261/index.html","28b366d1eb913aeced5b2e082fec206f"],["posts/3131944018/index.html","074ca716979c321bb6c30c8bd3c6977a"],["posts/316230277/index.html","48ce5650470b33dfb482d000bad6c9a2"],["posts/3175881014/index.html","0c3dc62ff426ef1b3aab5f4aeecf398d"],["posts/3222622531/index.html","619feb048bedd9614ed8574970876012"],["posts/3247186509/index.html","9e8dd6f44883f1908f4cd742155fe382"],["posts/3269605707/index.html","7a665a92db95507522238d3e47f133ad"],["posts/3291578070/index.html","9a7705f56731141f2ffe7d9358272b28"],["posts/331752533/index.html","10f1d219ac17226694243fbdbacc96e8"],["posts/3321992673/index.html","369bf1c89dc86caf79f67da1d01b585d"],["posts/335366821/index.html","64840e5b56a09439cd8cfd669885ea15"],["posts/3356910090/index.html","7434d3414ca84cabff90bffab40c2b1d"],["posts/337943766/index.html","7935728d02c614801af66f6b7f2da1e5"],["posts/3417652955/index.html","b724fd372ded60c412cd3fd0543bf2e4"],["posts/3444626340/index.html","4383a0320d552002299d47b552add4d8"],["posts/3449402269/index.html","b368773a44c773001318c46290a1f745"],["posts/345410188/index.html","16b6f51b4d943f2be326baa319c59a46"],["posts/3461518355/index.html","8a1555ddae3f3be0ced2b9fcd1d9aff6"],["posts/3494408209/index.html","b141c158babfa9d8b4d342d22ddd6966"],["posts/352037321/index.html","48f37a1574b6b647f6d8095347e5210f"],["posts/3521618732/index.html","3388bd68752102a6eccf237630cb45f9"],["posts/3568552646/index.html","444229bd524a7efc5ac7d4329944b35a"],["posts/3603924376/index.html","741da917d981b41dc4a1479fae0a2417"],["posts/3637847962/index.html","9b229c7fd5577b9f38b9cd9f20d063a7"],["posts/3642630198/index.html","0867c909b47a1d8de3cbca27d84847f7"],["posts/3653662258/index.html","8e7687a8d3274859d05ac05a3b71c4e4"],["posts/3653716295/index.html","044a2118a60b95b4fa9de1f1d8557494"],["posts/3657008967/index.html","6ff230b0e3721304d607892a561db22b"],["posts/3668933172/index.html","3bdd52b3ecaed3d7c3bc4d46ff6643ff"],["posts/3677280829/index.html","fc4c9838dee25ff27cc732fb3a871adb"],["posts/369095810/index.html","61f5d714b1ff00307a3d5d658bf8046a"],["posts/3695777215/index.html","c77030e869e6e5da454b710aa396ba08"],["posts/3736599391/index.html","781b6553b762680204da8a9eea3cb579"],["posts/3742212493/index.html","322af2dbc39d2a70a8cfc9b3451a7472"],["posts/3782208845/index.html","e58e11b1c0111b40a003b9786a939029"],["posts/3789971938/index.html","af79886569504defba015a9579106d56"],["posts/380519286/index.html","1cc02142aac33f7ea001890a08edb2b0"],["posts/3846545990/index.html","245e9a7af5ff75d9f3533309f3b66f48"],["posts/3873710624/index.html","6f87286677fd912878173e69959b567d"],["posts/3959327595/index.html","99f40f4dc4abd74669e1f98051a0515e"],["posts/3972610476/index.html","8b1aa25d71ad8b0e5c07801e3b073257"],["posts/3995512051/index.html","8cceaaeb8f61e10b077adc0fce1e8f94"],["posts/4088452183/index.html","50ae6c4c7d5cf521ddf15a0831c9a8d0"],["posts/4116164325/index.html","96e569f416ce5093d5f938931ce0fbe2"],["posts/4158690468/index.html","51edb137b72fd9fe4fa0b6b07d84a3e9"],["posts/4159187524/index.html","ab0e5ac55a5e645b1878735fcf579f87"],["posts/4197961431/index.html","0977560667638275383b590384eff4af"],["posts/4205536912/index.html","93065730ae4ee4b2f9e83410742da062"],["posts/4236649/index.html","7177e98bded7037fb4d21cbbad064518"],["posts/426338252/index.html","b3ba3a31fc2d9541403446ad7bc6ae7f"],["posts/450254281/index.html","a3ade94de2b62b32a4a833de80fe1da1"],["posts/4891372/index.html","1547527a50082bbd1ab7429612966b65"],["posts/569337285/index.html","9247d5f108e42984460e204ca75165b4"],["posts/570137885/index.html","5b3c3c03e1033de18ec39a125521637a"],["posts/570888918/index.html","b439fbb05bc63cc8748a3e4248bb0117"],["posts/582264328/index.html","a7332feef3e8f30a498bfd3c4f415fbd"],["posts/632291273/index.html","6e20d2661a8d422d146d185ea6da0ba7"],["posts/70687890/index.html","a1ca32655c47cf86accf9f9138d07fd2"],["posts/719322223/index.html","4f72228cb3a61e9074a5589d49942b28"],["posts/720539850/index.html","960494090e728e501190740ebab9728d"],["posts/786195243/index.html","8fef48859551e5495ae50658f6746543"],["posts/795474045/index.html","5d4c9ed5b639a6c2229d1cb677864da7"],["posts/815861661/index.html","8197a31b43e46614d267360ffe5fc911"],["posts/821259985/index.html","78b047d32d2a992ec14b3e69279e0a57"],["posts/828223375/index.html","332dac199ae9035428528764da789ae2"],["posts/887585917/index.html","099072aaf258ee7f64ac7959bc0ee477"],["posts/888549816/index.html","fae7c387d54efd0f2877e7c8159b8f0c"],["posts/906436376/index.html","acba787ec6ca794ca0f35f8c9aa95a53"],["posts/907824546/index.html","1c10581ac16294a6ea410d4571bc0556"],["posts/927393529/index.html","95bc851def0e8eb11026cbd2eb3f2e91"],["posts/94443781/index.html","d3bd33340444746793aec0cd84d28ac5"],["tags/2014/index.html","40d5c59428e64cbe019b825f6b566550"],["tags/2019/index.html","cd4f28f4a0eaaa1a32182dd22a149005"],["tags/AI/index.html","dfc9fdafa0024415869897edf87d934d"],["tags/AOP/index.html","32770f0a51d166362aa789eb6edcdf78"],["tags/AR/index.html","cf19a93b5a3fc7875e14deab4d770591"],["tags/AssetBundle/index.html","8e5817ef6dd3ff65483c128f91626f54"],["tags/C/index.html","d5826a29df243576e85c939d9bc6cb46"],["tags/CDN/index.html","2b43835abc45aeac0a2dddf090b4daf2"],["tags/CG/index.html","4d499ffe9fbd363c927c6b788e26775d"],["tags/CI/index.html","b3720db45eda0d72ceba991ed6fe3b6d"],["tags/CORS/index.html","cd3ea0ba8aaf82c3a9b843c7ac655352"],["tags/CSharp/index.html","9d3643c8126553dc8b23ed861f65910c"],["tags/Castle/index.html","5653869731924f8aba7f8e193438c741"],["tags/DBeaver/index.html","9b27d0ab5a5a0998036ed9d90922caea"],["tags/Docker/index.html","4d9d8b23c8bc2693de0da43c06c5b57e"],["tags/Dynamic-Proxy/index.html","519e2a53efba1ad881d3107ffdc314f7"],["tags/Dynamic-WebApi/index.html","813937b9fdd551693855dfdb1d360d36"],["tags/EF/index.html","9227acdeebf3aac24b76f00f4eb05d03"],["tags/ES6/index.html","b846ab250959b36a4d967ed0eeaddc1a"],["tags/EasyAR/index.html","0842f069fff4019ec4eca5266b959a5e"],["tags/Excel/index.html","048ec076347e30aae71a33b3ab519595"],["tags/FP/index.html","9a2feb3e21c1865892b1e4dc106a1673"],["tags/Form/index.html","74a7f033f836b2f6b40dc6fa895f0551"],["tags/Git/index.html","dd83b9a8cb11bcbd7770c4c6c77abbe6"],["tags/Github/index.html","fd1154c980802c008e42c9b68463f024"],["tags/HTML5/index.html","3917219697df6a93b059c9ce9a588f7e"],["tags/HTTP/index.html","799647864dacd64ec4c803de79a6eac5"],["tags/Hangfire/index.html","811072f335ae13985ce31977a40ff61c"],["tags/Hexo/index.html","90e3f86c14ee0eff6ebad523a9217e2c"],["tags/HttpClient/index.html","eb7552cb9c4e20aacc19d5949ebb65a8"],["tags/Hyperlog/index.html","e5d1303625ff2f2c17419381bcdd3a6b"],["tags/IDE/index.html","aa784824728d5f22604f33b36c28dec0"],["tags/JS/index.html","8b73c51f4f3ce88355dc19a706c40c53"],["tags/JSON/index.html","9bf2a987a2d6054860ee81bc8115e4c7"],["tags/JSONP/index.html","2ed4c22836a2f274f24737f60ff3178a"],["tags/Java/index.html","e1b55740cdcc3efb23015e607e5fa4f1"],["tags/JavaScript/index.html","c062294510f8d3b52bf14f7061ad65bd"],["tags/Jexus/index.html","90c7315cb25abce153a56902e3fd9446"],["tags/Kindle/index.html","472fae004fcb876b688b5ebd3c82b0a1"],["tags/Lambda/index.html","01dd3dead00d5dec00af9dfaf0abbd7b"],["tags/Linux/index.html","70025ca19d30b1d85a67a131430dd47d"],["tags/Liquid/index.html","97ea3b386d57887e7360b22c7202abef"],["tags/Logger/index.html","280491cbea06035eeafb6b9ddd4f5e53"],["tags/Love2D/index.html","bce7aa7954ea859ef7ca7489c2d99a67"],["tags/Lua/index.html","b2c8c587d40265c49a8fa41934cd972e"],["tags/MMD/index.html","9b7627e79aeb71afd60d28b8f354e9ff"],["tags/MSBuild/index.html","b394b808c39f5370a56a3b9898e41516"],["tags/MVC/index.html","fe214eaa6c53279ef223592a57c96d64"],["tags/MVVM/index.html","f0524d01862b802189e4c4bd424dd0ab"],["tags/MapReduce/index.html","a4a0ddabb62b26a91f8914e558a29940"],["tags/Markdown/index.html","c2fd59ee0784ca34d17f72e3bf33a12c"],["tags/Mecanim/index.html","db4baae850c0cde65fbead66975e0566"],["tags/Mono/index.html","aa64f059f584227a14326944855e428d"],["tags/NET-Core/index.html","d101a20acd51585139c9829aa27330ef"],["tags/NET/index.html","3e19f13b2923067873658b165755f50c"],["tags/Nginx/index.html","90db1123fc07f9456ceb201bb15ba250"],["tags/OBJ/index.html","0233354371ae6db50eecf2db33a57e3e"],["tags/Oracle/index.html","c94007c6f550e44fd2f6ed1d51b7b761"],["tags/PL-SQL/index.html","bb8f5c6dd236bec99fe9272a663e527f"],["tags/POCOController/index.html","958760ebb78b605a7ca7020db7601152"],["tags/PWA/index.html","a86e54a118c1fcf8837f1d6b72051303"],["tags/Python/index.html","92080d273b7603865a1bb87ebe8fe0d5"],["tags/RESTful/index.html","81f9af931daffb13e52d475b1124946a"],["tags/RFC/index.html","5d84690b737c7323302500b1fe32d6ba"],["tags/RPG/index.html","96e979c06cdd2f4674b8620c182f7d0f"],["tags/RSETful/index.html","a9781a0ccad934b811aeb326e061e409"],["tags/React/index.html","25774328accdf4048b4e0e57822bc39c"],["tags/Redis/index.html","fe48d90635587e008bf32a070bf64767"],["tags/Referrer/index.html","09110ec07fe9facba00ef6b32dc9a0e9"],["tags/SDL/index.html","5d09905b84c481fc264174355fc1bf98"],["tags/SQLite/index.html","be493680d2701a3ffb1325fe52eec6e9"],["tags/SSE/index.html","07c9a0178366d4acd95c1867f763cfb5"],["tags/SVN/index.html","9f235e9e76d4ee8b6008ef622dee6186"],["tags/Script/index.html","bcf8d35c82ee6460f61e6967b0d740f6"],["tags/Server酱/index.html","657b09e98d07e815b61ae317103c5124"],["tags/Shader/index.html","42fa51f0d80a33a3883b0133f6b4d3fe"],["tags/SignalR/index.html","f552626d4336f45b241e9e06519a6ef2"],["tags/Socket/index.html","a1264aef7bd104ae684c07ec051e15ad"],["tags/Sonar/index.html","6513bae78040068601ada50d94dea4d2"],["tags/SourceTree/index.html","fa8d7dedb792db584dbdb48043a3c270"],["tags/Sublime/index.html","f79198b63c3364062caedc28abf7b692"],["tags/Swagger/index.html","50ed51d7b1a758115b03a7ebc2689340"],["tags/Trace/index.html","150194097815d1a9b1372d3f90bd5d24"],["tags/Travis/index.html","53d44fd459d59eed6521b1cc4d718c3f"],["tags/Unity/index.html","ccfdfe1ccb518d87caaf5a9ddd10b28c"],["tags/Unity3D/index.html","e8143c9e41d5bd19bb62a530ec931dfa"],["tags/Unity3D/pages/2/index.html","fa4a6b6c8416fa057e316f71d6d8adc7"],["tags/Unity3D/pages/3/index.html","6af659c22c9b1652889d1031b38585d8"],["tags/VSCode/index.html","4538763dc3cdf46f7e28221266a5790e"],["tags/Valine/index.html","32d72879d49f1aa246231fb6ddc44d65"],["tags/Visual-Studio/index.html","13595963d14d2008f449c02fb569dc1c"],["tags/Vue/index.html","842e0b76c3f4d777b23048714f6803bb"],["tags/WSL/index.html","d16d9e63de0e11c924af27b3b919eb72"],["tags/Web-API/index.html","b07b72997c461542904af3785aa53183"],["tags/Web/index.html","9fbd660c532b1fa027489cb3091c151d"],["tags/WebApi/index.html","9e6c9b2db7b0d093d786ddf6568ac465"],["tags/WebSocket/index.html","833d26194aa3e1764b62553fc29c22c2"],["tags/Wechat/index.html","c9662e57d98e303f63c6d66d4d1d3569"],["tags/Windows/index.html","0c020ad5cadc463a348fee218bbcbe10"],["tags/disunity/index.html","759b4088a2266fade4ff0e321665af26"],["tags/index.html","cdbcee66bbef7689c5db4000c15833fb"],["tags/matplotlib/index.html","309d793c9100bc2dd61b870a7f4b627c"],["tags/njsDelivr/index.html","fa55ad42be735b78250bea7dd51b82cf"],["tags/uGUI/index.html","f5e13e6ede57c7510ae93d69e90885d6"],["tags/zTree/index.html","7a9a5a24595de656bd9bb13fbd109f9f"],["tags/一出好戏/index.html","2bd231f9d43fa2ab4288c4e801f86e9c"],["tags/七牛/index.html","8ed26ce688381abe029e29903964f521"],["tags/主从复制/index.html","fbc196d36c90d680a8d17de5d7b3ee1f"],["tags/事件/index.html","e94e32631df3fcac5ca2594f5f22af74"],["tags/二维码/index.html","b931e4a221e40bdac260b55c7b962d9d"],["tags/云音乐/index.html","e414a1b7c05ce778b0ac8a3094fb8b2c"],["tags/互联网/index.html","f0741e66af368cc737b9c69f7b71d3fa"],["tags/亲情/index.html","d2d0817ac95b58e6dbe29d31eb4d1cb0"],["tags/人文/index.html","03f8ae0d23867f54a91b37fdf53298dd"],["tags/人生/index.html","63ed5beff46284549852ba0bfd3502ee"],["tags/仙剑奇侠传/index.html","a8ca5f201ce7eba697c1e19143ed9643"],["tags/价值/index.html","47a851faffa9571dc85148f7d67152a2"],["tags/优化/index.html","74f33979dcff716c4ce6447a4eefd7d9"],["tags/全智贤/index.html","c00b48e02e975e657c57cc3bf99a4e01"],["tags/公众号/index.html","7c6cc331fbb3d8ccbd72dea47122cb7f"],["tags/关卡系统/index.html","ced7c647ea2b946897f9519e8224ddc0"],["tags/函数式编程/index.html","bd6643199a06ceeeb11b5d84f7aac907"],["tags/别离/index.html","f16a9373202f4aa8fc87f569eb418c8e"],["tags/前任/index.html","3ac16728ee73cc1cecc37f48c998b248"],["tags/前端/index.html","4968b4ea087a12edce26468de0c01757"],["tags/剑指Offer/index.html","36718609b122438a80aa05e5906146cf"],["tags/加密/index.html","ff6fa668de7c0970d941df4012eae14c"],["tags/动态代理/index.html","718a6627cae270365265a56071996421"],["tags/动态加载/index.html","5029bef540cd7a79a5fd5d53b01b3659"],["tags/动画/index.html","abdd63d6908345a4f7b63971353aac28"],["tags/单位/index.html","05893018e49fd90a60827750f8ed4c3c"],["tags/单机游戏/index.html","fd3a4d102e2c220acda4a05063e31443"],["tags/印度/index.html","e48904d08746138a373e5fe1dd856f87"],["tags/历史/index.html","3be431400c36ef8a2669ee6eab59fdd0"],["tags/反编译/index.html","cb6b22b4e0a010ec0b77a0dff9e4c677"],["tags/同步/index.html","adc5b6ed0e32deb43de3c73337a89560"],["tags/后端/index.html","79e12a2d4984075e3a7a557c10bd554c"],["tags/命令/index.html","ea28996599381b88efe70ca71c6eb86c"],["tags/和平/index.html","d05ccf8d96bfae70acb2f05f744e2f01"],["tags/响应式/index.html","d6554a522fc686f772a061c566e64e4e"],["tags/哲学/index.html","9ae643040023d59210e22f53b90d53dc"],["tags/回家/index.html","1d4a5d395162e0cbb738f6e1c214dae4"],["tags/回忆/index.html","9b7fc02b9d49fb6b2379238f2f3ec606"],["tags/回顾/index.html","a118483aff2ce65fadfd920d5ab7e2d6"],["tags/回首/index.html","5b0a05ab0e406db72e5a789b5261e36d"],["tags/图床/index.html","948b4fc7176bc52aca377c293e8c863d"],["tags/图形/index.html","0e6af98563021812689b105c4e3581fb"],["tags/地图/index.html","1da7fc404582673728238a08d56332fc"],["tags/塔防/index.html","1c4e2d43bed150abe94b30e2410529de"],["tags/增强现实/index.html","0e82453dca159d233c82bc73e6cfb659"],["tags/壁纸/index.html","bd1b257d358ea77d9107417f9a9f9b9a"],["tags/夏目漱石/index.html","ee9e6d0671bd348d41776323569ef2dc"],["tags/多线程/index.html","4c8b3103c14824b8c7f73270a1663e81"],["tags/大护法/index.html","e7f1635331367675079ef0f83d85dae7"],["tags/委托/index.html","9fca00457ce5b72b7b91b5f1a8ec1d8f"],["tags/孤独/index.html","fe4ad7a7d36a71a7bd30dbf9794a0dec"],["tags/展望/index.html","0b7ed76f63d9b534d8d7455eea73f994"],["tags/工作/index.html","20d75d1f41e395cedae4a808127cf378"],["tags/平凡/index.html","5d999c6649b021fe8e05ca309448e588"],["tags/年华/index.html","a5396be206c629145977e542635c9c80"],["tags/年度/index.html","0db088e3bc1ad30076a5aec3dfa565a4"],["tags/开源/index.html","e40b5d69382cf38e44fe9584935e16d5"],["tags/异常/index.html","f558b8848f3ed7bdce28f8fe6259de83"],["tags/异步/index.html","6119142fed029b7a3117324f1f4a4bc4"],["tags/引擎/index.html","f64e04dca772fa568e71eb56d970b0a3"],["tags/影评/index.html","c9495f30ba95b043c4e8daabfbfc7b7a"],["tags/微信/index.html","467eb93a3050061dbc3827eaaca42e1b"],["tags/微博/index.html","e03a167f88b6213f720ae886872bb7be"],["tags/心情/index.html","279fdcb43f8a90912f242fafd680cf02"],["tags/思维/index.html","8596c229a5051dff5a2bed7b4eb730a0"],["tags/总结/index.html","570bcf908b225d6df4034727c8c7868d"],["tags/想法/index.html","7acdcf03a0e4a6d51e77672308ec3b96"],["tags/感悟/index.html","85a09471512b4e7dcb01463eef5afa77"],["tags/成长/index.html","c45cf7ce4c8c3e2dacf0c3ba79a44112"],["tags/我是猫/index.html","b0cb5bccce3d969df8c6b7a06ceca5e0"],["tags/扩展/index.html","2fc5064b70b766b23d6d70397d51b4f6"],["tags/扩展方法/index.html","6946e4bf72753a04f68726b6aeaa2df9"],["tags/技术/index.html","1fa65c7b4cd8ef48a0d89d24dabac5d0"],["tags/拖拽/index.html","70f45c49d2823657107babbeee6ad4d0"],["tags/插件/index.html","3faa7c6abe1748c74956618cb87c8197"],["tags/插件化/index.html","f6987578eb1fd34bdaa109bb792ef482"],["tags/数字/index.html","f683b3683a32053bd4864c7178a41108"],["tags/数学/index.html","36a92c6476717aab95c89cd1bc1e2e8a"],["tags/数据/index.html","e1824eba7284a460d53af95ec2f8a938"],["tags/数据交换/index.html","4e14818b59343020f48e8d9728b41f03"],["tags/数据库/index.html","69ded89fe281a68e23b49c4035b0a1e7"],["tags/文本分类/index.html","8457521ef92c4f09a9fc0dc1c80c9512"],["tags/无问西东/index.html","5b09930559eb3aaa36a8393ec8f8a7f5"],["tags/日剧/index.html","1e68a2d91d500ca7f51181b18a773b9e"],["tags/日志/index.html","65271fd2f5ddf157bde93e39ac8fbae4"],["tags/日本文学/index.html","1d1460ede8ec80c1c5c8b4ee960a19cb"],["tags/时区/index.html","024d1b625505db084bf097f0462d6c23"],["tags/时间/index.html","da9305f50c5168e23976fc9812cc6989"],["tags/服务器/index.html","0f118c32e33171b3e57edaf375bb3578"],["tags/朝圣/index.html","473c2e0bbb0fd15dddfb0aec373ffdda"],["tags/朴素贝叶斯/index.html","8b9a7a596beb4d5b9adddfce89cfbe7e"],["tags/架构/index.html","b6a371d03ff031a44788ddb30e6190e0"],["tags/标注/index.html","61c562e15a6806b6725db32ea4c65397"],["tags/校验/index.html","232f456eed5628d00b083e66c658f137"],["tags/格式/index.html","fdb182a078df1b53ebc201d62a0c0af8"],["tags/格式化/index.html","e58fb7f3b8c7a9391839b458deb4508f"],["tags/桌面/index.html","f6c1cb576baedd6951c5a52dae26a981"],["tags/梦想/index.html","1f971a6730dff7ca33718899bb0bf8da"],["tags/概率/index.html","a25c98f6cf59d052358d9a0077c464f3"],["tags/模板/index.html","92b69e967d912adeeccefb746ba52ed7"],["tags/模板引擎/index.html","a0b84f2124d4184b5e4667ad72d8ef49"],["tags/毕业/index.html","448e9f546f888c5363ec83ded2a37315"],["tags/毕业季/index.html","242e8c97f027728482b932df671fd088"],["tags/消息/index.html","5a4361143bd5c69c36361ccd9e87ab0a"],["tags/游戏/index.html","96a5beb3f3eef5305a7d699f919dcab0"],["tags/游戏/pages/2/index.html","1b909ad4e679a4ef441ebc2e515d4013"],["tags/游戏开发/index.html","85784e530ba7164af697e63eb0925f55"],["tags/游戏引擎/index.html","fa604def486f5c8d714c8bc5c1b3cbfc"],["tags/爱情/index.html","cd6efac005d731115b00bbf2ded2d041"],["tags/版本控制/index.html","5433d2e0090293e120627f49dba6df8f"],["tags/版权/index.html","bcdd360a4c355dc6105a793209aadf69"],["tags/特性/index.html","2e58201f393e5ea23fb24e966b567328"],["tags/状态/index.html","71d96fde0552767765cda8b17e926017"],["tags/现实/index.html","1352adbe94aa107f2ad3bbf7f6016ac8"],["tags/生活/index.html","3ad95ddc687485482a00057dda7f6b42"],["tags/电影/index.html","dd2f1abc6c98b56b4618de4ad1a32178"],["tags/画家/index.html","3a5596a7ce381676c79e844fb1a47a31"],["tags/知识共享/index.html","3091dfc65ff1468f95d2b8b457dabb47"],["tags/矫情/index.html","201badb1179681126d8c713a839e592b"],["tags/程序员/index.html","04c8517cbf1f568a22c81cbccd668a9b"],["tags/穹之扉/index.html","8c78ecc76bf1564fee37bedc37a669a4"],["tags/穿搭/index.html","5ae9e8dbda23bd3524e0123c0846b52c"],["tags/童话/index.html","f301026f0238a91977ae4acbadfe87a3"],["tags/笔记/index.html","80c1d385afc24c1f31786849c15a1134"],["tags/算法/index.html","2a38a5211de248e98f19c0c80d592090"],["tags/米花之味/index.html","fbb61231985abf15874dff0c4c502a19"],["tags/缓存/index.html","b7551076c22052eba56414d12adbf3e5"],["tags/编程/index.html","110dae517d257b47c39909d2998e0df6"],["tags/编译/index.html","aef9653d8d81562dd574140e0f5073fc"],["tags/编辑器/index.html","e19d33683fb579d0f3bec86e5733bd98"],["tags/网易/index.html","8d65dd2b56bbbbca5e27dd0ef5de077a"],["tags/脚本/index.html","afcaf6e0f53530a54b1a80add634272c"],["tags/脚本语言/index.html","6b0e2130f93451aa5ad242f17de487ec"],["tags/虚拟摇杆/index.html","bb7102c92d9566b843482ea7f763ed95"],["tags/蛋炒饭/index.html","2668b3a4d49f4d0f50271de5673ada1f"],["tags/表单/index.html","1ddb7aca170064395b913c5dcabf590a"],["tags/装饰器/index.html","34130aa1a4c838af96322595eede371b"],["tags/西安/index.html","72dbc10caff63ae3b1de188770fdad98"],["tags/计算机图形/index.html","8bc062454f781c7363751659a602bad5"],["tags/设计/index.html","83036c44909d408b596886c737a26ac6"],["tags/设计模式/index.html","e6673936f93934d55efb1263e3691db7"],["tags/访问量/index.html","1f79900389f1d1ebe804ccbca506410d"],["tags/评论/index.html","f33d6e2f76b098ff68e7a4f6fb3d9687"],["tags/词云/index.html","86263bf15284e97971276dfa4555694d"],["tags/诗人/index.html","eda76f6056d1ef1095a912c056a63e1b"],["tags/语法/index.html","51de5ad95c44718fb08a917089127e63"],["tags/请记住我/index.html","4e38e37942d1cc4f4b4a589c4b546ee4"],["tags/读书/index.html","18b0192ce417ffa40bf380d481bddf8b"],["tags/读写分离/index.html","b5aedac328eed5693724ebffbbb14d86"],["tags/调试/index.html","5c96daa2785f8fd6d7950b33e46bc044"],["tags/贝塞尔曲线/index.html","a9ab2b1b59d3b6106c867330e85e6899"],["tags/贪吃蛇/index.html","f9ec0aa51f98218ab45177df0d11d5b1"],["tags/资源提取/index.html","baf41f9c6fe5b04b1f1367187ee7fecc"],["tags/跨域/index.html","478ce526b9f5b29dfc56dadafff02850"],["tags/跨平台/index.html","5a304eabfed41dc8e5e8a2335cbdee69"],["tags/转盘/index.html","cf69e54cd68026015a1d61634760af9e"],["tags/迁移/index.html","eb197b2fb7ad31963201a818ea054cf3"],["tags/通信/index.html","4859c3750e2aa4ea5ce156b1b895dd31"],["tags/邪不压正/index.html","c1cfbb594ec54b911a47911dcc24eb09"],["tags/部署/index.html","17a2bebd54aa648628633867c569f124"],["tags/配载/index.html","0210cd3fd0283219d5d5b1aec383031c"],["tags/重试/index.html","fbb50b3bf7a9fb75f8f2f202909c3859"],["tags/长安/index.html","0d4a0c5e50523214549e3817754241df"],["tags/长安十二时辰/index.html","bd5a7caf70ae174d694ec629255fdd9c"],["tags/阅读/index.html","b46873e36f2cd8baa34dd31d124aab30"],["tags/阿里/index.html","eb3288621d24d4778dc3c9313b03d215"],["tags/随笔/index.html","eb676ce2635f7597efb04f99475c1d87"],["tags/霍金/index.html","9c7d9b413ed26d71b526f05429a22f07"],["tags/青春/index.html","818ef02fc35dd3a66e4edef19e1705a3"],["tags/面试/index.html","5b80145dbf49b38f3477822b4b2e4a22"],["tags/韩寒/index.html","3e77d12dc4a1b13acf1b627b61939fff"],["tags/马尔克斯/index.html","df09ece1fda72eafd416f318536f75e5"],["tags/验证/index.html","6ef620282a70b0bf78b58b797e420a70"],["tags/黑客/index.html","e73a0d675e4a9ba3ac4ed7be20789106"],["wiki/index.html","5eb546a4218f55681ca399bd47f38319"],["works/index.html","6d1c3131cdd062fe6e92918eb1dfcbd1"]];
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







