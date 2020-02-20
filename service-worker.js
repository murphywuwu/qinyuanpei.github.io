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

var precacheConfig = [["404.html","1b8c7d7a3299d2a7d1a5b20137c3e1f4"],["about/index.html","cfbe5c3c207ddab2cb727fa8c38f1c75"],["archives/2014/12/index.html","75c0d9aa1d72b0f4cbaa447846dab094"],["archives/2014/index.html","5bac91da5886fd95b4a43d1922b2794a"],["archives/2015/01/index.html","9e439a28d7b0b9139c8fb38a4b51b8a6"],["archives/2015/02/index.html","8bbd97efed883df6b157624929279fd5"],["archives/2015/03/index.html","45a7b8e82bd17289346dca84d21e6221"],["archives/2015/04/index.html","8e64a61f42c1f23daf0f3d7c5f7727fa"],["archives/2015/05/index.html","67fc948d2360004d051fe820f81a102b"],["archives/2015/06/index.html","caaa699ddf5434f9101cc0390690943b"],["archives/2015/07/index.html","ace689bb95a0614a17f2e3940f71fa5f"],["archives/2015/08/index.html","0a435890cc528f7dfcaedb73fd8afe66"],["archives/2015/09/index.html","0d9e03d9d53cc83732176af44a9b1d9d"],["archives/2015/10/index.html","54c7919ae441b4cc5faa45c43dee9e24"],["archives/2015/11/index.html","b59f2cc93347dfa9330d018c55b00526"],["archives/2015/12/index.html","f94f58d6adf1e73206d85c3fb268537d"],["archives/2015/index.html","267ba2d6463e85f3340dcf008a8d8e1c"],["archives/2015/pages/2/index.html","64a7c160dcbfb0b8daa183c54eff62cc"],["archives/2015/pages/3/index.html","eb00ff403f6052c7f89978c5de19ead6"],["archives/2015/pages/4/index.html","626330542ffc1d92dd6b55cb9ccd7f9e"],["archives/2015/pages/5/index.html","4787fa5592ee97bb1ed1e7b728896e49"],["archives/2015/pages/6/index.html","983ef9cf229b2bbaae5937739e516840"],["archives/2016/01/index.html","fadc21e0b4c0ee30880407b26c528667"],["archives/2016/03/index.html","e6363fc1f363523ab3cb1f3e3bc12057"],["archives/2016/05/index.html","2ba3d54a1d3cb457af48e70055437a55"],["archives/2016/06/index.html","0617044bedc155c18bcb17a8a3386be1"],["archives/2016/07/index.html","05858c3d8598306cbbf06a5005b875f4"],["archives/2016/09/index.html","58a3dbf5587f212d2f5a7ea849b35068"],["archives/2016/10/index.html","2e5dd68fa2978721f534d7b0bf94949d"],["archives/2016/11/index.html","0b66abc14e43b209b2a991e9aeefdc39"],["archives/2016/index.html","ff2372168ab27dd337b515e55bdf062c"],["archives/2016/pages/2/index.html","1e6154b75e76454878d1905f4ae114d8"],["archives/2016/pages/3/index.html","40842989f010faec012938b8e818a748"],["archives/2017/02/index.html","2991217768d752f31f13a06cfe881ffc"],["archives/2017/03/index.html","dc060559f03ac8e6fb7ef9ccaffb3921"],["archives/2017/04/index.html","e2893bcc97b13fa0d39ac777cb97488c"],["archives/2017/05/index.html","4441e350f375c2a70f4643414140c9d6"],["archives/2017/07/index.html","4055186f960bcfe8d164c4dfa8ffac53"],["archives/2017/08/index.html","b8b775c0d0e40bf49b587af21c8346a9"],["archives/2017/09/index.html","8ce49610f209fc0a8495c4a80dfb4940"],["archives/2017/10/index.html","55189788be5c2baf7b809ddcbce92767"],["archives/2017/11/index.html","39a3454d7ec426a968f0c888315eb4d8"],["archives/2017/12/index.html","2fca74dfde53e95516073ff800c8e8af"],["archives/2017/index.html","1ed6150a43c6739f697e4a550e78f998"],["archives/2017/pages/2/index.html","818a818a6e0e1c7da86c465bea285c34"],["archives/2018/01/index.html","d66374f71cab455af9f09f2475df78cb"],["archives/2018/02/index.html","4bc31e0c2b36259d36c79e736c068894"],["archives/2018/03/index.html","4445eb99743f71182983a24b318f0d56"],["archives/2018/04/index.html","4a4b2e203c4b79828615b1f439e92ccc"],["archives/2018/05/index.html","6e5bb9edc4d584ea6b60fc43f7a1109a"],["archives/2018/06/index.html","22b06c701dad950803e2178abe49388d"],["archives/2018/07/index.html","61dbbe80c5522d2506784930cd6b4644"],["archives/2018/08/index.html","944b2fbed2a3b3e3f859589754e25b4b"],["archives/2018/09/index.html","b9e7ec96b85bf5b9675f4429181c53c3"],["archives/2018/10/index.html","481474ef5ccf8898590287fa1169ef76"],["archives/2018/index.html","f1cf68e25e3d63b01bc774538876f196"],["archives/2018/pages/2/index.html","7461709ffcc0fc81b32cda5c676a24f1"],["archives/2018/pages/3/index.html","02ce030067e1321c3560aff2e65abb9b"],["archives/2018/pages/4/index.html","b9b780486d8259c28b319f75f2a5d243"],["archives/2019/01/index.html","a158c432f087726f81fb2fb1dcde9839"],["archives/2019/02/index.html","dab4ac6a8aa16745dbcee4c5267400c9"],["archives/2019/03/index.html","17810eb6f6a0295734b63775a5972cf1"],["archives/2019/04/index.html","17e14dbdc7111806fd9e317847c79af9"],["archives/2019/05/index.html","1b3addd9097d1fb5f7468f75fee1d41f"],["archives/2019/06/index.html","824050ca0b14fe4da6f03d5dbf333581"],["archives/2019/07/index.html","9df1de90d38eced127279fd59df858a0"],["archives/2019/08/index.html","3175a4267559392fe9f106e64e98b2c2"],["archives/2019/09/index.html","d1e9b6de7542e992402400123fc5174f"],["archives/2019/10/index.html","f662d989b7f17d03789a0228b608acb1"],["archives/2019/11/index.html","a35f2fcdaf28e91642bdb4270ba1b175"],["archives/2019/12/index.html","6f4b2ea94a3f1cd45f4b54a19b53b4ce"],["archives/2019/index.html","c76bd441d10a89bd5303230b32e717af"],["archives/2019/pages/2/index.html","3ee58b472f2fb17cf632032f03ce3962"],["archives/2019/pages/3/index.html","5b234454196f621754f73c4f3d6db6e5"],["archives/2020/01/index.html","d416bdac363cbc3044a18a1e460649c6"],["archives/2020/02/index.html","b32c35132e63d8ca4c892f5f301e3a8e"],["archives/2020/index.html","5095bc803888b081ea59f5909235e705"],["archives/index.html","881c031ad25e1e2ea1bc957dc518a248"],["archives/pages/10/index.html","22097b2007b6f8946bb88674daab14f9"],["archives/pages/11/index.html","600c6e635b5892f36744f1bc02ab1f1c"],["archives/pages/12/index.html","e98eb4351bd32939779fd64943d4a3d5"],["archives/pages/13/index.html","92636eda8c68e6bbaa3d3c6a08219d79"],["archives/pages/14/index.html","84fac46ceb5c30f3b9727256ae940ca3"],["archives/pages/15/index.html","1c1987882ba38b3e09f93a56615ce4a1"],["archives/pages/16/index.html","27f7d7e7fcf4a9532a9d0b23fd410a53"],["archives/pages/2/index.html","8e2f3adcc8bbd0d9a12531adf28a7905"],["archives/pages/3/index.html","9ca916d30d50792d61366abeef919b57"],["archives/pages/4/index.html","8eceba34616d2fe2b90c51de34e4447e"],["archives/pages/5/index.html","f5ea23114fc7fa982e1abe1ffc349585"],["archives/pages/6/index.html","c48b0868b4f8ce123e06372abef8a078"],["archives/pages/7/index.html","2998d732d217bd38b3b70edbb1355fcd"],["archives/pages/8/index.html","1da22e1451f95d24ed9ddbf159ae0ecd"],["archives/pages/9/index.html","4951fb75147ee4408bfc8866b0a3a327"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","0d0e5e49f120ffa9b115ef112422d434"],["categories/Unity3D/index.html","c2fa6fb967d54d594fcef5d301454f61"],["categories/Unity3D/pages/2/index.html","c2f693c8b6de0a031e667a6bb9af2d82"],["categories/index.html","5ba886a12cfafd52142cbe67f79c90f2"],["categories/人工智能/index.html","e3b87a261f8648622600d33176f3fdd5"],["categories/前端开发/index.html","91b7f2b1b04a93afeb9759763728fd10"],["categories/单机游戏/index.html","41ff19cc9a432011e1d763dfa37bbaa3"],["categories/开发工具/index.html","5b1f98593dc332599c20c700570b172d"],["categories/数据分析/index.html","77913c984b5065e42a63a845ba176bab"],["categories/数据存储/index.html","65dd83a5565c38736ace3a2152260a03"],["categories/游戏开发/index.html","bf80814afbf8205c73701a430151f58b"],["categories/游戏开发/pages/2/index.html","a282fec6189a75b3f4f603f72302bc1d"],["categories/游戏引擎/index.html","fc255c9d3cbdc12f49c85fb49fe5c83c"],["categories/独立博客/index.html","1d47adc2dd08c2e9807c5b592f4d41f6"],["categories/生活感悟/index.html","e2c0b61bad843343b9b7c978aa469fba"],["categories/生活感悟/pages/2/index.html","7bead92b3f95f02581f843ce76032d3c"],["categories/生活感悟/pages/3/index.html","eeb17e5d32e44c1c6b108abf825b9d9e"],["categories/编程语言/index.html","8eb1b7249a86e0a72cbf3a40f9acf351"],["categories/编程语言/pages/2/index.html","4a538b6118572e5cef31563bb8b9d701"],["categories/编程语言/pages/3/index.html","6ba16950d22b76134e77987274785cb3"],["categories/编程语言/pages/4/index.html","32c4f540c91045c2c9f65c51fb836caa"],["categories/编程语言/pages/5/index.html","9826a6d826a536488a4d6f8ba0f975f0"],["categories/读书笔记/index.html","ebe07dbe5c5dc5848039ac4c5900cbb7"],["categories/读书笔记/pages/2/index.html","8bcddbe3a33bdba814433ac92110470c"],["friends/index.html","7f05a713feb01e2b64d3d6108d75b91d"],["index.html","6051459c6a7a397486f3f0c78e7a17c0"],["movies/index.html","06396eed704e491018b508697139e071"],["musics/index.html","da39103dab3fab2751615cdea06b3ecf"],["pages/10/index.html","3afe8f0ea5e12777f08da67cd7d79982"],["pages/11/index.html","dc8f29fbc3b8d8a5a723dcaf99657580"],["pages/12/index.html","fe768aec9d64426b8fb86c3917ba9b3e"],["pages/13/index.html","9db6b5803dd9e7a5c0f9dd31421a3b10"],["pages/14/index.html","c3763886f68a2fd4350d7e818c54f296"],["pages/15/index.html","4a2877efbf8d4c1693d3d6206a2ba4dc"],["pages/16/index.html","396c7ccb878d7b6eb5709b48c1b4228c"],["pages/2/index.html","3720184cac1d9d8ab53c73b620daffe8"],["pages/3/index.html","6abe41b28c165070544a1d3a62787c34"],["pages/4/index.html","9abdacdbb829a70da960a4398e230f1e"],["pages/5/index.html","d60c206e6ae40f5324c4e83d50709d82"],["pages/6/index.html","189018ed3ca16c7722e8e2e54ea217ea"],["pages/7/index.html","2ff7be8b18fffe646e66cf17f686eedd"],["pages/8/index.html","6678ce3c5f7f61406a95c67f20484c44"],["pages/9/index.html","dd6f424e70037220784db30d1cbd32bb"],["posts/1059499448/index.html","6ab727b2c4a1172fa1f7cbe9eb617c76"],["posts/1071063696/index.html","569d624a2894f7b9111d4864d5ff0e1c"],["posts/1082185388/index.html","18231e09e04b92661846376b66d02444"],["posts/1099762326/index.html","dd4f5b0f4b4d523b1c6856e35eb658e5"],["posts/1113828794/index.html","14ae075b174f0809433a0db60a13421f"],["posts/1118169753/index.html","7b0d9b970c41cacdf020e3c9a19aab30"],["posts/1122710277/index.html","564edb02dfc02999238a23428f91bf80"],["posts/1124152964/index.html","8c95e56b7f81103f2383a6a7f182f543"],["posts/1127467740/index.html","53df698349bce5aa05639a32e6573360"],["posts/1150071886/index.html","b9ef27d76cd2a454afdd469be2800f3a"],["posts/1150143610/index.html","fe86f62c2208d44518ebb705adba2505"],["posts/1152813120/index.html","c97a7500d41f483392790bbb24223fff"],["posts/115524443/index.html","fa005989121c5f925235fca9ae244333"],["posts/1156673678/index.html","b2db8ca928af92937d12d45ba49b1f69"],["posts/1166840790/index.html","d340bbb5d48d72bf981dfdcec3d01899"],["posts/116795088/index.html","87c75a92afcee76e969f9d3a19f04a6a"],["posts/1176959868/index.html","0a446e9f849fc22fd55dcb6b90146b21"],["posts/1190622881/index.html","b0b46217ecbda32532bca8ed6fe14e3e"],["posts/123663202/index.html","9dd1d33a596ae174ce09c72eef6cf2b2"],["posts/124807650/index.html","d2b17c3cdca4d46cb26f02b745f82288"],["posts/1254783039/index.html","5d2c3b9f6136c8fca7ecdeab2deec89d"],["posts/1320325685/index.html","b6122a2e55dbd7c39b1df5512c36cca2"],["posts/1329254441/index.html","3b7f3288c2c27f532867312ba083cb2f"],["posts/1357715684/index.html","eb668b6beda49cd0362a80822bb20e96"],["posts/1358971951/index.html","807ce38edfb8428ac100db9cf2206aea"],["posts/1386017461/index.html","11530b59cfd52160d2b119b0680353ec"],["posts/1394521917/index.html","be429349506f69fe583f71391325150f"],["posts/1397717193/index.html","66b68f220c98914d242e674efacc761a"],["posts/1417719502/index.html","53fbc6a3fdf02a3d5ff5a646024ea5c8"],["posts/1424645834/index.html","9ff94328543f6fdb0f4ed1901b257fa5"],["posts/1444577573/index.html","642f8454fb1409e46a80f298400e1325"],["posts/1467630055/index.html","97757f0c40b14cc74273cfcba2a91dbf"],["posts/1478979553/index.html","3d76c75750d92d889f28cbe76fec074a"],["posts/1540537013/index.html","0986f550b474a908ef319ebeb9443584"],["posts/166983157/index.html","3ba932111b88c81c4f7add15e2f38ff9"],["posts/1670305415/index.html","08eef202d649a62dc10d5de9a11221a2"],["posts/1684318907/index.html","d1004abb2e53c1a429ebdb2832d980db"],["posts/169430744/index.html","3d975d2fa873f3399ca9b5e35c3f107a"],["posts/1700650235/index.html","aba0b522e718a4cd2e9a5271c13e0c9c"],["posts/172426938/index.html","3da7c37cacf08b5d59bd216411d330b4"],["posts/1836680899/index.html","2eb11e50e0a96d7664dd3137ef650ccc"],["posts/183718218/index.html","dee7ccb8c50221bc010b585a96a9966d"],["posts/187480982/index.html","9a17a3454fbe565b0e2eebd1576c35a0"],["posts/1930050594/index.html","f4857bdd0aabd2cc6379dc6c7001daf6"],["posts/1933583281/index.html","8e8fb1c036ec3d57e672c173a8beb964"],["posts/1940333895/index.html","12bf822e9c4cf2ba619e56f2a3258dd4"],["posts/1960676615/index.html","6bee22c09e0d573fce1631c7758d4c7d"],["posts/1983298072/index.html","61182fdb5234839992ed3cdbcfa2adb5"],["posts/1989654282/index.html","62427943f5c7421e6a2c63ea849e62c9"],["posts/2015300310/index.html","c290be07198be1bc11548bb51b6bd2fd"],["posts/2038378679/index.html","8cd9161c4cf11f8442b7f9b714eee0e8"],["posts/2041685704/index.html","93d2727f12863bfc011073e35428f47b"],["posts/21112647/index.html","adc0ae11d3d781e1e6d9c40d11eaa434"],["posts/2158696176/index.html","039faeeec76c33da5b2abe3a0399672b"],["posts/2171683728/index.html","ff3cf0f58ce40dda47d06f3c679b7e03"],["posts/2186770732/index.html","7764ed78ae2253172784fc85ed6f9b39"],["posts/2275646954/index.html","f51f3a5a798b204877da2d9aa7b64411"],["posts/2314414875/index.html","2732438b5fa7bfa6e65f823052ccead7"],["posts/2318173297/index.html","54c4e4a4731d8767001bf9a42a00c1aa"],["posts/2418566449/index.html","e542823cdc48bb03ae2c5f7a675071a3"],["posts/2436573863/index.html","ac6d2aee9d46ec67bd654c1d46c787f5"],["posts/2462008667/index.html","2141778c7ed79eec7aa6e7997bc92887"],["posts/2463121881/index.html","73d6a5c6d9d6aa39e1ab381625e1ba3a"],["posts/2527231326/index.html","2d98f3bb5b62b7a61014069c6d8f4f43"],["posts/2583252123/index.html","adfd7c33b3b6e425491f3a71482f5198"],["posts/2613006280/index.html","50977e1b4c58038ea25f632a23cb617f"],["posts/2617501472/index.html","a0ecf3abdd1631faebc68a57e3ef2a88"],["posts/2676125676/index.html","9024f17d6d3101238565c488b84f485c"],["posts/2734896333/index.html","5dca558ad16a93784d09651c38ef906d"],["posts/2752169106/index.html","8748bf1dd122da92aba27709f036e1c2"],["posts/2799263488/index.html","eaa738150e66260ce9ae89ad760fd448"],["posts/2805694118/index.html","8c154758a6f4f37875052bcdbe5da6a2"],["posts/2809571715/index.html","e0791abe77593deb12b9d89c44d7007c"],["posts/2822230423/index.html","f6bac46edcf56c09ba7dcd8691c1eded"],["posts/2829333122/index.html","c9025a2f701d0af3c7b2a0e294de543f"],["posts/2911923212/index.html","71b9d7721caca520de308473a70c30f2"],["posts/2941880815/index.html","fef5d9caa2a96c5c130c319830b896df"],["posts/2950334112/index.html","9fd896356570d2cff768da0d3470c07d"],["posts/2954591764/index.html","f54b082ff245eacabef754713391b514"],["posts/3019914405/index.html","3b5576227f614348b2ba8fcd7a075981"],["posts/3032366281/index.html","2180680dbc93fa889bb5808783aa1700"],["posts/3040357134/index.html","907cc1fe02b7287c8dfb01255886d580"],["posts/305484621/index.html","ea2bba3f4ea69ea01f315ba6caa350ec"],["posts/3083474169/index.html","18e71b75fec28d5aac3857b06860279a"],["posts/3099575458/index.html","b6dd4b3c9ea8eff31db17076bf14505a"],["posts/3111375079/index.html","d2b7e4b5805559b641900e55f465d4d6"],["posts/3120185261/index.html","c0fa3dcfd8773ff9829a4cd40ba0cf95"],["posts/3131944018/index.html","011c4b3095856c462da04395d40424f8"],["posts/316230277/index.html","a29730c999611b2672e3f09bed2cf16c"],["posts/3175881014/index.html","b35cae5883eaf38da44fedc5a5e10f85"],["posts/3222622531/index.html","04ba5f102a8b9e6b910d3c54b0aa97d0"],["posts/3247186509/index.html","da8e7b9b6ffe8907636ec36bd70c1f5d"],["posts/3269605707/index.html","f8cb915eb58b0941a3e5c5aebcfe6b21"],["posts/3291578070/index.html","d3f6aa89c86be97da21b2968eaf4c2e3"],["posts/331752533/index.html","04585830dcf7d71e38d6f96a54edba6d"],["posts/3321992673/index.html","feb5f864c8e08af952f57b5906bd0e6a"],["posts/335366821/index.html","99b2b2211ef4fb1e67f128d9287e1443"],["posts/3356910090/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/337943766/index.html","eb771f25f897e52dd98e650d64ba52b8"],["posts/3417652955/index.html","11009c9d0d1e398043d54e98c797c632"],["posts/3444626340/index.html","4a3ffb69137f04a251e83f12477f5b21"],["posts/3449402269/index.html","bd71be9e1f41dc26fbcc4163f7368b33"],["posts/345410188/index.html","2d3f309f8ddf9c96d86e2fa4e784bd6f"],["posts/3461518355/index.html","420187c567cafcc71d5e7f34add066ca"],["posts/3494408209/index.html","efea09350214530791c48e4a89f2c293"],["posts/352037321/index.html","901bfb052ad82707a1aa66e8bec47c5e"],["posts/3521618732/index.html","2aec368cadaf5224ddef9a800260dbfd"],["posts/3568552646/index.html","2601bcd0971b12ec42cd301f3bb53382"],["posts/3603924376/index.html","cf809fecdf605169b6aa42ea4f84d12a"],["posts/3637847962/index.html","0fd2c56782790db1c3b215019beea03e"],["posts/3642630198/index.html","fe4489030499d07a75318384d65ee35d"],["posts/3653662258/index.html","b37b176ad3f1ceb6b85896c1467cb15b"],["posts/3653716295/index.html","dec6eca32ec05ab30fe8a35be3bacc6e"],["posts/3657008967/index.html","c12f376e769dec48c1bfad4cce2e566c"],["posts/3668933172/index.html","692c9126169e2680e29c994b53903ee2"],["posts/3677280829/index.html","5473b3493cd23de748c03c636a5b68a3"],["posts/3687594958/index.html","f23a30ef5f303692f3a50be01819453c"],["posts/369095810/index.html","f0e2e75a89e1ed4145f46ca72303f518"],["posts/3695777215/index.html","ff3f55d6dd1ccabfa1324494f3d6784d"],["posts/3736599391/index.html","17e0288c4d7da81f899ca6878c15f9e0"],["posts/3742212493/index.html","74ef3ba92257d3a211dde3baa67ba357"],["posts/3782208845/index.html","65f57b67cc113864d33491a74c15591d"],["posts/3789971938/index.html","760a996e9037e0ad075aa1435cb6fba4"],["posts/380519286/index.html","4c4ad85ad4e896f147235bed30d48a9e"],["posts/3846545990/index.html","8ee02191a041f4bd10eb7d4e316ad3e7"],["posts/3873710624/index.html","2c41f18202e30f9df88e8092f756e0af"],["posts/3959327595/index.html","11619784498c5328d2d8586739aee456"],["posts/3972610476/index.html","1b4dc7886b5a0e0b3e245822b028e257"],["posts/3995512051/index.html","dbcd847ceb1f9f99a34112106f5e1c8f"],["posts/4088452183/index.html","ad15bce94264127d2498bf2aa5cdaa06"],["posts/4116164325/index.html","ee1d91951f24508daa24804584dec668"],["posts/4158690468/index.html","915340694214a81052760183626a907f"],["posts/4159187524/index.html","dcb96782107fd1111ce7a3ca3cd06943"],["posts/4197961431/index.html","68d16bdc892392e2af847e510a8647ec"],["posts/4205536912/index.html","0bfb29edb27a359f4298ccd510879493"],["posts/4236649/index.html","50f32e213334dd4916c222dcb422d9d3"],["posts/426338252/index.html","e009f1128b84577c1aa3a2e24cec33b4"],["posts/450254281/index.html","3b3b824b25beada3441459994561629f"],["posts/4891372/index.html","1193ea350d8e82108b89de2fec8bd1aa"],["posts/569337285/index.html","7ee69808ce7df0d4def11fdbed47604d"],["posts/570137885/index.html","f7ccec0c88e65daabfab078df36d5b24"],["posts/570888918/index.html","7deadb793c049b158cf3d5efbb36c095"],["posts/582264328/index.html","4cfb4bfc5f8432a1d8a8e86d2603ded5"],["posts/632291273/index.html","658f2707182645eb1f2a303e6725b237"],["posts/70687890/index.html","eb4fe03e2114c7239c43e0215f8430bd"],["posts/719322223/index.html","c5316c5d4139a21768c43734ad9b83f9"],["posts/720539850/index.html","0de6111bd969aae91a9d7d5ae10e93b9"],["posts/786195243/index.html","95e393985fdb02955da0f7233bcc5b92"],["posts/795474045/index.html","2e3ece72521f01bb836f33a5d51fbda5"],["posts/815861661/index.html","11d113f22730aba7fa6aaf6d964625d1"],["posts/821259985/index.html","bdc704ad620d54e66a2fc0b1b9fdd10e"],["posts/828223375/index.html","7b16c9e2175c90e43bc1ca1951094e6f"],["posts/887585917/index.html","ae0822aad527cedf0b8e0ef9a9b5db9f"],["posts/888549816/index.html","59c2551572cf3a43ad86430616567cb4"],["posts/906436376/index.html","325736fc737584715013fa83c6f37de7"],["posts/907824546/index.html","692659ec0d29ae2e6d640b60efee9852"],["posts/927393529/index.html","d20b02ba1f2547c40236d0ee5f3a0dd2"],["posts/94443781/index.html","7cbbd0909eaf13aa58cfcb0d628df318"],["tags/2014/index.html","47f67be23a03e8694c6d2d7171ed003b"],["tags/2019/index.html","233e7cb229de268e498017ce36efbef2"],["tags/AI/index.html","b13a042b3ee9d3b71dc768938dafc163"],["tags/AOP/index.html","2382a10add2ddf7c24ba260660eceaa7"],["tags/AR/index.html","48485bbf6fa2974308e0a6de90ec14cd"],["tags/AssetBundle/index.html","b682e7182adfd2536fa1d5ab04021655"],["tags/C/index.html","022e7a2fe66d123ab1d6221c4125dea5"],["tags/CDN/index.html","9bf93919f292dffb93b828d65343f915"],["tags/CG/index.html","7ba8abe4d3d9b99884f1baf292cbfa2a"],["tags/CI/index.html","94a5a769ea7a7e15666172dd234f9a1f"],["tags/CORS/index.html","6f0aa4881a315a426bf16ab85a869bf1"],["tags/CSharp/index.html","8a08b271f89864af99069721a386653f"],["tags/Castle/index.html","9765801e1e9668521414965728b09eb0"],["tags/DBeaver/index.html","b7f9d0744d66d97cf1260666ac4228f5"],["tags/Docker/index.html","e9b8b31aaad4e1f1ad28cd969c0eecf5"],["tags/Dynamic-Proxy/index.html","0ec6df2b20c02d5ae7bfb3885e48f3e6"],["tags/Dynamic-WebApi/index.html","587ebf4f83d4c7a8026f81294e45f25d"],["tags/EF/index.html","c2542530588ce8e9abc2933d70069b70"],["tags/ELK/index.html","9f0ecc00e6ee9f88393b0c899856a73e"],["tags/ES6/index.html","4ef042587cb20183b1ccd61ab3b04880"],["tags/EasyAR/index.html","bda6efcbdb6921a0ecd00b76ea0873fe"],["tags/Excel/index.html","543f0362695ebf0548968d6d75974b8b"],["tags/FP/index.html","ea197ed525e433c91fe01a9acae84114"],["tags/Form/index.html","5a16d3fddd10cd2132e4c1fb5687f740"],["tags/Git/index.html","cc5c931b40c56a7e4319b7502750fa97"],["tags/Github/index.html","c5611d47c940b480a93495c479aa478d"],["tags/HTML5/index.html","1874c7458702b1635dd90902b08f298e"],["tags/HTTP/index.html","79a2f9939f0b161bfdd888f9482b87ac"],["tags/Hangfire/index.html","0d9378827f34d18738f50957498c7b71"],["tags/Hexo/index.html","9d2a6c8997dc8cf06ec284f3762622d1"],["tags/HttpClient/index.html","d52cbf6158455c6bf2876ceac82e3edc"],["tags/Hyperlog/index.html","b4a2bb41a61c345d0ec85e88990634fb"],["tags/IDE/index.html","d0905a3c9e5583f7af2020cfa730a2d8"],["tags/JS/index.html","e33fb4b075341da7ba157b74bfd4773a"],["tags/JSON/index.html","5982e136cb97ea308e722ed7ea432d47"],["tags/JSONP/index.html","5d090da6d06f5b5a9c1a3e8ccb330096"],["tags/Java/index.html","f3a5fd1081bd3068372f46732edb6b88"],["tags/JavaScript/index.html","ea281752be2e3f5d87ae45f8a8e4340c"],["tags/Jexus/index.html","c1b00b959d4052babd9527fb57921ef5"],["tags/Kindle/index.html","55483bc93e4287985b70ecb69bbafc00"],["tags/Lambda/index.html","429790eccaa6f1f20013ccb78e50a0d2"],["tags/Linux/index.html","4c693468d003af6368ceb1d193a4bae1"],["tags/Liquid/index.html","e155c89e0d7502f07e53b409ae70024b"],["tags/Logger/index.html","cb2ce2680750e78a9fc9addf32cb28bc"],["tags/Love2D/index.html","cd9736fd68519cac91a827f4f1513ee8"],["tags/Lua/index.html","a59dd8dab5a6dd4ba5da50d98cc3bf16"],["tags/MMD/index.html","13ee27def9b6863ed4d987bfda04ba31"],["tags/MSBuild/index.html","f82bac581f73d485b307e1ad85af1f4a"],["tags/MVC/index.html","1a6838e3a3c12f8506c948063c998d98"],["tags/MVVM/index.html","06a29abca4b9dca533b66458baf049f7"],["tags/MapReduce/index.html","558347971a8d9eff30494eaf23628bcb"],["tags/Markdown/index.html","bc0b0905a26739fa5ce5bf563a78626c"],["tags/Mecanim/index.html","8eaab50c1d8739be0cc78671cd7062be"],["tags/Mono/index.html","8948b8e4a88adef9d34f5bb5382b8ae9"],["tags/NET-Core/index.html","807a8464449b327626d11b383b94e8c4"],["tags/NET/index.html","d94735d3c5791dbd8181ab8f2d35640b"],["tags/Nginx/index.html","94fdc397e84405198b3df48fdc66adb4"],["tags/OBJ/index.html","6bda2ac63fdec2cec957c145691d244d"],["tags/Oracle/index.html","4c12f8176172aa030305af25e1767220"],["tags/PL-SQL/index.html","f80d52d547659921c9a3b8466dd6693c"],["tags/POCOController/index.html","31a5d56cbb1ed4dbaba7bbd4e3296416"],["tags/PWA/index.html","4081d634cecb38b00d560c8fdf3e8224"],["tags/Python/index.html","7f7d250e5f4348c93c91d4e91e5e525e"],["tags/RESTful/index.html","f440b0bd6f17a414b341431c8b69e153"],["tags/RFC/index.html","f0bdb2f501fd52ca8f92cc582013c6c6"],["tags/RPG/index.html","609ecf3550b2020387fd9cc0b240713f"],["tags/RSETful/index.html","e4cc6c29d108dfa256378c2dc330df9f"],["tags/React/index.html","1f5e31c675bdf921eb8d1315fbaed859"],["tags/Redis/index.html","c8b351f038c6d72e72c35a752ade841a"],["tags/Referrer/index.html","9e95857df37a8f9eb6dd619147b9117d"],["tags/SDL/index.html","2846c546c2b6c18409ff7b017581196d"],["tags/SQLite/index.html","2590dab6d576da208fd7d08be602d80e"],["tags/SSE/index.html","505a3f28997163b46b54ffc4c021da9a"],["tags/SVN/index.html","fff2ec465722213ecd41d82ab5552fd4"],["tags/Script/index.html","751741be2f16bdeb160573aa497d785f"],["tags/Server酱/index.html","1d3eb418ee08b0420c7d9d2c0bfd5bf9"],["tags/Shader/index.html","40ab788adc095c1dd4cc3489c1676472"],["tags/SignalR/index.html","1f2b83fbc8aa72a1104d1e3f666c756b"],["tags/Socket/index.html","d1967d13eac19cbdfbc4d09f223347aa"],["tags/Sonar/index.html","f446a5709e7142d2a753bdcd30c9e844"],["tags/SourceTree/index.html","eac4305cbded7108f5c932f3e0877bc5"],["tags/Sublime/index.html","d04fd9a85700d54f0dc43e942c637e57"],["tags/Swagger/index.html","90f5bfb61abcd040815ebad7c98b9a8d"],["tags/Trace/index.html","006dd35c39db282c870594c735415031"],["tags/Travis/index.html","0f591a4ea2a5f89e4a162e470756f6b9"],["tags/Unity/index.html","6a053a6e1aac9f18f00c9716dd2e7baa"],["tags/Unity3D/index.html","54c8f88756b0a0943a61d6447fade2a1"],["tags/Unity3D/pages/2/index.html","f97baac4f6d652f1eca6afa582a13a69"],["tags/Unity3D/pages/3/index.html","43970f9f416736cf9f74a757c0fcef57"],["tags/VSCode/index.html","cfacbd20175d0cfc20275ec5a059074c"],["tags/Valine/index.html","4823d6558b4722c89e24fc42a950c549"],["tags/Visual-Studio/index.html","7556c7e9b7a64a283aebfff102281ee9"],["tags/Vue/index.html","a113d069de006f161ded863a72866605"],["tags/WSL/index.html","5fd5fd7a63199f5648bb6c2f5b4bab98"],["tags/Web-API/index.html","511e1e4cf80b7c21d78622e424bad53d"],["tags/Web/index.html","9feca8362eede27df10aa6cd58031fe3"],["tags/WebApi/index.html","05f0e3f0a2298c755ef3927a31e95813"],["tags/WebSocket/index.html","d2fa77337cdf3a1b65aa40736e3f9542"],["tags/Wechat/index.html","641053aae27c0dd3df0e3abdb9dd6cee"],["tags/Windows/index.html","e2e4463e79f9f6e838284776236b412c"],["tags/disunity/index.html","e8e990c839d1cb45ea4b5503be461527"],["tags/index.html","ea0bed9463240e03b5f8440de1f5e5bc"],["tags/matplotlib/index.html","c80bf3e641827a47205ef92fab7c7537"],["tags/njsDelivr/index.html","fdb0d418c6f5d4c9f1575032885bff56"],["tags/uGUI/index.html","a56805bb8ec8e85b9ae713b604fdf879"],["tags/zTree/index.html","28bae6b55b07232ec9752c4634f8ac81"],["tags/一出好戏/index.html","67a8fabb8444a4cfbba858401f0e06d4"],["tags/七牛/index.html","98b9d626aa7f77351d3dee9775cf51c7"],["tags/主从复制/index.html","8b36a602a445935c8cda59d28bae500c"],["tags/事件/index.html","0387eb985b150f5bf697938d983d9e41"],["tags/二维码/index.html","7365da6574920911eb85e7a923033274"],["tags/云音乐/index.html","91f3225530cf766b375014157040828b"],["tags/互联网/index.html","e98df261ebbb65a912ef2b98cbaf4157"],["tags/亲情/index.html","800f0bc9e836ed6659ee075d25c7c4e5"],["tags/人文/index.html","2107be0b5fac158f59b5ab0af70baee3"],["tags/人生/index.html","9a48f6f806871ad0156930b764dd59fc"],["tags/仙剑奇侠传/index.html","26a63f8697915a81380c154fa1413941"],["tags/价值/index.html","6ba52af1967a71b4b695e06f0117a0b2"],["tags/优化/index.html","f3bc7d75c0359f3330bc27112766df1f"],["tags/全智贤/index.html","ecc7f3ef351c1550b96d3c55d655dd6e"],["tags/公众号/index.html","e75bddfd790b8621df0ef74564e8ba65"],["tags/关卡系统/index.html","3f4041278c8ad32410e0d4b20ae05fd0"],["tags/函数式编程/index.html","8c79c908fea1c8e5dd97f89dbb1cbbdc"],["tags/别离/index.html","5bda1e3452df7ff33c544619dd4b16b9"],["tags/前任/index.html","cdbbc2cd9c7d6cefab7756ebf4205da8"],["tags/前端/index.html","3469f8311da1ab86f70afc07b65b394d"],["tags/剑指Offer/index.html","4732e9a76a25370b679aec0e23b736ec"],["tags/加密/index.html","5a7e7ec9e42368e5a4f416d700a83a0d"],["tags/动态代理/index.html","c57ce4a66992d299cddd3ad14be8b71f"],["tags/动态加载/index.html","d71a9a1bbd7e5f36fa0d834f3cdeaaa7"],["tags/动画/index.html","8255918ed83863e3045e9d2eb9e6d29c"],["tags/单位/index.html","038d681185de0bbde6e5e9ec493c5a58"],["tags/单机游戏/index.html","6abd751216a36a014fdde9adcc11f855"],["tags/印度/index.html","3595bdf6630c2915fb270a68bc1fa31b"],["tags/历史/index.html","5bca78e5f900fba1f121579f425da2b6"],["tags/反编译/index.html","4dffe11a4d152a6bd4680ba13622a63d"],["tags/同步/index.html","ccb3f83caffb45e8e87cc2b594f79b96"],["tags/后端/index.html","cc520991f624efa62d80c4bf8a79f115"],["tags/命令/index.html","aa19fd52d52b4746da636299dbbe107c"],["tags/和平/index.html","d123dc8ff8f3ddb6260c64956ca35a7b"],["tags/响应式/index.html","e2c0e060aa7102c402f83cd0eca6c946"],["tags/哲学/index.html","dacb68820453f7e732bc6f73f02b4b55"],["tags/回家/index.html","ea9b9e3dabb9c07b4a47e0f291a2a5e9"],["tags/回忆/index.html","393e90caf6aac1cf543742bc2659df40"],["tags/回顾/index.html","425d7734db64ece827013698660adbda"],["tags/回首/index.html","69f645d8fadb53eb349f35115d5bc0b9"],["tags/图床/index.html","96605412e0a73737b6a172e8fd5c15d0"],["tags/图形/index.html","bc524813477df935dd44f3f5a524d9a1"],["tags/地图/index.html","e38ed40d01a96c01d6985c1dc617548f"],["tags/塔防/index.html","beefa34c85c9f6a49a6cc9b33bb31a63"],["tags/增强现实/index.html","7cc5970bb4a90bf567bdb3dc036ce85d"],["tags/壁纸/index.html","3372f252520052684dd98ef557ff3b59"],["tags/夏目漱石/index.html","09364dd1d4814c9d38078b48b40622bb"],["tags/多线程/index.html","01ca1aeeedd71ce7e14e9ded4a5ce11d"],["tags/大护法/index.html","7b630b6d335aad0a5d9a693e66d0065a"],["tags/委托/index.html","762732692f9d41f2b69e3b347df23a49"],["tags/孤独/index.html","dca87dd7b454ff8972d3bbcf2b12bc38"],["tags/展望/index.html","80bed71b821e86ba0b6cf94609311d1c"],["tags/工作/index.html","e8d887af55a98c7c4593cb9c7760e686"],["tags/平凡/index.html","d5950125a90096e24e757fbcad5e8057"],["tags/年华/index.html","a757e215cb4dca228aa278f579e259be"],["tags/年度/index.html","dd92ca0116b6364c9a466a06af2f599a"],["tags/开源/index.html","76bc73b72ad965e1867a92791df147e1"],["tags/异常/index.html","f9aadb99b2a4dfda35e254708ccc1832"],["tags/异步/index.html","4127989f1722b995a36af7addb0dc4e0"],["tags/引擎/index.html","9a0e3ebe8a184db9e77a2a8743ef732b"],["tags/影评/index.html","a286d5475f66c672800e2cc1eccec3ee"],["tags/微信/index.html","442d40d81b8f2e359c2ef1239b4d3501"],["tags/微博/index.html","1f6132ace8f190d06927f7fca3acf934"],["tags/心情/index.html","89f76ff7e2c4786b89a76355abfc9b06"],["tags/思维/index.html","5fa44f43a8d0f657ad118030409f4c01"],["tags/总结/index.html","0deb4b24e70cebabaaa17be5ff61f25a"],["tags/想法/index.html","2fd65623dd6c12735d5265751c7eefc0"],["tags/感悟/index.html","271b4fe84bf88208f34216662a423ba5"],["tags/成长/index.html","e1664dd21c0cefa2a987a2f92e61ed9f"],["tags/我是猫/index.html","fff47e5aaa691e241d1c38ab1fe56cc5"],["tags/扩展/index.html","b992fb7d1266a546aed181e00b03b763"],["tags/扩展方法/index.html","e01d3ac699c6d89bdc980c7cd1a21348"],["tags/技术/index.html","cf9a24924a9db07090d6bf40910bd79b"],["tags/拖拽/index.html","b298c826bb4eed4cc4394a0b0ea860ab"],["tags/插件/index.html","6ab09bfe71db2b653e03dc3bad0c04e3"],["tags/插件化/index.html","79e80fbd0c3cb40a2aefbafa35efd402"],["tags/数字/index.html","08dfb5ad44a5dc525c66f275e7e7750d"],["tags/数学/index.html","ae87b7466d1ad6c51db98873efee009c"],["tags/数据/index.html","1783066a9fa6f02dfb7827c02a0f86b8"],["tags/数据交换/index.html","f0c12129a6b9ad1d550e006ad7cd3c99"],["tags/数据库/index.html","77e35006eab8224fc4771ce8055bd9cd"],["tags/文本分类/index.html","2dbd4eb0598b59437fc9214f68f702f2"],["tags/无问西东/index.html","90951081a16c8a76167e8f8d3057fd16"],["tags/日剧/index.html","a4dccd9988a9901abb4e66b166668110"],["tags/日志/index.html","33fd7d6b6aa07ee834249a11a8614d57"],["tags/日本文学/index.html","fa1e3e686f8eb5958067d9ed760e2a06"],["tags/时区/index.html","9e1c51ba97d3bd14a37e7213e84ff7aa"],["tags/时间/index.html","c63dedb65efcdda2256f05dc86f51908"],["tags/服务器/index.html","565902d0b9d2ed332814fa3d5f430bb6"],["tags/朝圣/index.html","4ef88955c2ecc72afd59f06190c5a245"],["tags/朴素贝叶斯/index.html","731822e4f5fe3f3996a184efe3258a67"],["tags/架构/index.html","df0925896cb9e2a08bc856ad88e48b7c"],["tags/标注/index.html","56e8503dbeeea6a4cac9c6b0eaac8ac2"],["tags/校验/index.html","57dbadad5c0c0d223b7ddc86923f38ca"],["tags/格式/index.html","1cdd46e423ab7da10aedea0688f01f0c"],["tags/格式化/index.html","9b67b5735fb7ad3efc0e9a2006fadb5a"],["tags/桌面/index.html","14689efe316821b23b748639c72fd305"],["tags/梦想/index.html","3223180107bec70b1389470e457c8d23"],["tags/概率/index.html","8d64847ac67c10ec00ee185d375e0dd3"],["tags/模板/index.html","5a66fa5e25ab86740355fdd4b1b2d75c"],["tags/模板引擎/index.html","b61bc335fd902991f211536370dcdc59"],["tags/毕业/index.html","f4f7723a319a2612fd2eb7e6e1704115"],["tags/毕业季/index.html","6c8396ca02ddde77136e875c24198e7e"],["tags/消息/index.html","0a49cf453842cca0aefc17c5b8141336"],["tags/游戏/index.html","bdb5bb1a89bda10f7f895b995fc38cf1"],["tags/游戏/pages/2/index.html","45d8c587d2224277a9f5a678096a058b"],["tags/游戏开发/index.html","2410d0cd8a16e9b697f7085a1c13437c"],["tags/游戏引擎/index.html","9ec1e367caab81df34a32a1f309a5c6b"],["tags/爱情/index.html","0d16ed71acd7e465f875d37a05dc84a9"],["tags/版本控制/index.html","ee3d0ba13404823e8caafbd75bdefb87"],["tags/版权/index.html","a567f85869dd73e0dbaa5dffb33f3c9d"],["tags/特性/index.html","d1b05a4fbd1d7b3c8133dd9e77053286"],["tags/状态/index.html","df78d404dffc439c3aa82390a84c93f8"],["tags/现实/index.html","e8395e4ad89bf8b00fdb11cfd41dcb1c"],["tags/生活/index.html","aebb399720bdecc32969da708bd4147a"],["tags/电影/index.html","dc8b7dfdc0cf1d39bc079ea766608d89"],["tags/画家/index.html","4a1a40c9af5e74fc0a5897aceddb16de"],["tags/知识共享/index.html","4be0b828312c0e0c4e0d9a84f735ce57"],["tags/矫情/index.html","54df76ec8094ae37765b12e3bee61cb3"],["tags/程序员/index.html","e829a60f9b19c6923fab1cb3e9684f0c"],["tags/穹之扉/index.html","e5aa467e926d080ca703fdfc30a50c33"],["tags/穿搭/index.html","5a2db0556c71d78f0438581a3860b16b"],["tags/童话/index.html","8c7ebbd36f75624f531aeb3c6b600bf8"],["tags/笔记/index.html","bfa85ee24d525a458d8c3e333b429725"],["tags/算法/index.html","3b9eb62a7ec07918fb998972d6b87850"],["tags/米花之味/index.html","50641d1f75c11735173aca011661c952"],["tags/缓存/index.html","cfa57e04548991350e4a9e1e8a7bf486"],["tags/编程/index.html","b604d3f0ea4d9632b912e8cbb2a1ccf4"],["tags/编译/index.html","ef9600cd269999be08922c688230bceb"],["tags/编辑器/index.html","bd30aa1e0abd588046f2cffb8f68db77"],["tags/网易/index.html","a2fe745f23886ed1dc55827b37a86797"],["tags/脚本/index.html","7797577d4664a6d34bfd9f93fa2f78a3"],["tags/脚本语言/index.html","67465f45c1ae8a6bba781ee2ccdf6a86"],["tags/虚拟摇杆/index.html","aa1c7dc7795770f043f2f2c25e41ab91"],["tags/蛋炒饭/index.html","b5100267bd62a7908943844faf1c8288"],["tags/表单/index.html","a41e4218109eebb06c4f86632ab7b838"],["tags/装饰器/index.html","a31bc9797d1d3ba04ad68b3c88312250"],["tags/西安/index.html","6d2a8d714b10b3ecf14ffd2bb7a9673f"],["tags/计算机图形/index.html","1130c20c87a53cc36b51e11a8c46640b"],["tags/设计/index.html","6b27a238ff4c6e4a28114af30bbf4eba"],["tags/设计模式/index.html","4408e5bcf53728c5895292ab3218b2e0"],["tags/访问量/index.html","4d48ffd773f7b8f834d6326da87aa82e"],["tags/评论/index.html","62fed21b157e3e9e3dfad8019191cbe3"],["tags/词云/index.html","871ab254148378df936178c09bba0a6b"],["tags/诗人/index.html","448afa9b06627ae2d9e61bdfd00f2c9a"],["tags/语法/index.html","6cd70ee931b282e6dce4b1095c77c21e"],["tags/请记住我/index.html","f48b38653a7f42fbf1100eb1ca91eb6f"],["tags/读书/index.html","23d1994d3bfa686ac66660bfe57e9e54"],["tags/读写分离/index.html","da60a125b3dd0800ce43c6e982460515"],["tags/调试/index.html","30c6d98d1f68c05598159df45aa80bed"],["tags/贝塞尔曲线/index.html","9c5a664dfdf4d4d142795c76cf0092f6"],["tags/贪吃蛇/index.html","158f8924b1b489d87a75d2c41ddff32e"],["tags/资源提取/index.html","b4c81149aba2fc46b0e8f848078de18b"],["tags/跨域/index.html","0918ad07807e0fb265aad4a15bff0e86"],["tags/跨平台/index.html","d2f170dba936eab9acc8d06a1639c460"],["tags/转盘/index.html","e1cf9faa2314e1e1f7e55a8b989d60e0"],["tags/迁移/index.html","d7cc70df3eb42d5971e99f486d69f8d0"],["tags/通信/index.html","8e7368f54f1b8f604d2a6bfd0d04d1fc"],["tags/邪不压正/index.html","5c88da2b3cbb25ffd54e1470821fd904"],["tags/部署/index.html","f6db91dc29cdd11fcb4a10507701b5fe"],["tags/配载/index.html","4b006c2dc92eb94a48ca42b82baa8e71"],["tags/重试/index.html","2cf33dcb8f54711b2951bafc1d72c9fc"],["tags/长安/index.html","04f4270579af5665493a1412fa6c01b8"],["tags/长安十二时辰/index.html","85b43cb344b0c77cfe0d622a922217f3"],["tags/阅读/index.html","afdc7a0eb9d2520e66ec3aac74ff5d67"],["tags/阿里/index.html","27678669019cb9c90f7f3063501a7993"],["tags/随笔/index.html","35363ed92d7d8039f37dcf267ba9436e"],["tags/霍金/index.html","b0bb163459d1900cca4cadf1edb604c5"],["tags/青春/index.html","e2706f2300c1f4b5899b53b26b2978af"],["tags/面试/index.html","0fe8a53105677c589fdf2f76430f8e37"],["tags/韩寒/index.html","eba337aa199529fe8aad83bcc7774630"],["tags/马尔克斯/index.html","a2f692c09d8205b0fee95f5a08d3c801"],["tags/验证/index.html","ea2386b797dd58dbe5f339db4b160708"],["tags/黑客/index.html","06a7ffd41dc2b78721e11b3489ed488b"],["wiki/index.html","2d322bcc4f69281fead463d459f56530"],["works/index.html","1100c5611ab5e686d33ddc440db9fb4a"]];
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







