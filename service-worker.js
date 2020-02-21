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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","573934c278fafc6e898085e8117e77c7"],["archives/2014/12/index.html","606c8a39e5dda12f188a6c658e662d1e"],["archives/2014/index.html","31d7e65474b037c8a16297c7f94336e7"],["archives/2015/01/index.html","a30d32ce1c0826a40fc6f9fafb9aaddc"],["archives/2015/02/index.html","1ae519529fcd752aa7efce93e3487199"],["archives/2015/03/index.html","111b4daf8e2d438f36ea25c0599ee46a"],["archives/2015/04/index.html","c5d5bdd1a7b2d09a4770cf2f38888cfa"],["archives/2015/05/index.html","2f07383f200ed87ff710a695d87ed463"],["archives/2015/06/index.html","eed486fa184ba9b24e15f625ca5f8ec7"],["archives/2015/07/index.html","9636916243d743cc8d97b16101dbe899"],["archives/2015/08/index.html","31d662f656ee66d0685988b030218894"],["archives/2015/09/index.html","7c9dc12f0f51e9c8170354fd077f6b9b"],["archives/2015/10/index.html","6ecfffedd0ca9b11151481ee1539d0fe"],["archives/2015/11/index.html","dd4ff86e8ab26ff864e0483b9a55af0b"],["archives/2015/12/index.html","5af2073e1b63d15f04116349fe006f0d"],["archives/2015/index.html","89326ddc5fabeb28206fc80f1f98ad51"],["archives/2015/pages/2/index.html","af98603c1916ff8596f3aa8f94ff2a55"],["archives/2015/pages/3/index.html","000639a36f6af048d55d3a27139ac3f7"],["archives/2015/pages/4/index.html","55f3c56721cedefbb9b9000da7c43d35"],["archives/2015/pages/5/index.html","0ad8e331988b3370df0cdadaa606545f"],["archives/2015/pages/6/index.html","2c12c624f7a9653ec0a9621d4a1b2e02"],["archives/2016/01/index.html","ba03be6ddb202a9a3b447a188dfcf380"],["archives/2016/03/index.html","25f63af1b402b6419b3f4009f23543c9"],["archives/2016/05/index.html","0610632fe7bd88ce100f66c3e58ad521"],["archives/2016/06/index.html","6eb3e15d1eabcb08e874dc6d841a4616"],["archives/2016/07/index.html","345198a61c438b4d58e3c484bf83fc68"],["archives/2016/09/index.html","443686a295ccda677b6a45b8180cc7d7"],["archives/2016/10/index.html","f8d0cb38b3edc5b466e95bd19b5a1374"],["archives/2016/11/index.html","5d8d333e1bdce0cdc8611e15c38a0a4b"],["archives/2016/index.html","24252e7249018673bb31a4af141b59b0"],["archives/2016/pages/2/index.html","0c251c0e5fd9e7c79c50b53bdddaa052"],["archives/2016/pages/3/index.html","ebd80fec55818933d678a5dd1f7deacc"],["archives/2017/02/index.html","4201197feda0a552ecf2bbd4bea4da5f"],["archives/2017/03/index.html","232c7fe82c8fad9e890a1713943f5609"],["archives/2017/04/index.html","da99db66fc17744d25743ff2545ede5e"],["archives/2017/05/index.html","e05a20914614fbd33905b0cfbe081192"],["archives/2017/07/index.html","581b4f182b68f18805df841252203b65"],["archives/2017/08/index.html","b8ed5c77993dde5e1b19c7a3ea95ef2e"],["archives/2017/09/index.html","5899b93ab7837eb9cdb4b36a86b4b2ac"],["archives/2017/10/index.html","1c70ecb4dbb4d8dcc69372ad5294f421"],["archives/2017/11/index.html","b477e6b67abeb22a9903a88bb3cf8a81"],["archives/2017/12/index.html","81134afb151fa7518a96254beb75b5e1"],["archives/2017/index.html","bcab1c5ca926c6f5f554f0594cc158e1"],["archives/2017/pages/2/index.html","0dc58b2271d4b476f46153b570a6598f"],["archives/2018/01/index.html","06d1d1f1debfa9f750564ab419c5ecc7"],["archives/2018/02/index.html","02d51ce3a7efbc11105d400c9df5871a"],["archives/2018/03/index.html","9e40aa3aa09f41a0a7a670a6f43953fc"],["archives/2018/04/index.html","eab2b3bf66db8f969723e7dc7ccf3c19"],["archives/2018/05/index.html","8541661236a2669577b7e4b4107a6442"],["archives/2018/06/index.html","f56ed000758a7b307dbbe6c164205267"],["archives/2018/07/index.html","f6201b67934f5a11d25dcfc6dc2c396e"],["archives/2018/08/index.html","bb6e5da647952a856efae9e2916d2ad5"],["archives/2018/09/index.html","a89c65e7503cfbe767a2c337d62f9629"],["archives/2018/10/index.html","9fb52ecd720eca612a5427f9a4cd1a67"],["archives/2018/index.html","40e7389c135320b8ab6fba0faaa3b40b"],["archives/2018/pages/2/index.html","25108d56222ec7e1b86437ba61d64d22"],["archives/2018/pages/3/index.html","b558a67bef4c11a4bcc1889ca0a53fa6"],["archives/2018/pages/4/index.html","dd38876c6090a1da25e57aebadfeaf95"],["archives/2019/01/index.html","5183f6c33842fbbc32723f380fc2b88b"],["archives/2019/02/index.html","a4142dd6e4ccc18d173a4f0493f4d60f"],["archives/2019/03/index.html","c7d0ce2177ea01c236bfc4d0b122b7ef"],["archives/2019/04/index.html","9606b606c1e2a31015da48bac896092a"],["archives/2019/05/index.html","ee9a88c7a7001d8e6dbbc5c9f535bd2c"],["archives/2019/06/index.html","fd26448c4e807a7eddbd6afc18fb7617"],["archives/2019/07/index.html","0f41a64d742738113cb34947f7b35b78"],["archives/2019/08/index.html","4ae156c92b6a21c4e8b9a497679036bf"],["archives/2019/09/index.html","7abb361bcb69ce0a0d51cf20857a19d4"],["archives/2019/10/index.html","e46e73f03565221640a309cd7aa5f452"],["archives/2019/11/index.html","f90d7426f59b56df0f3446614bff8c41"],["archives/2019/12/index.html","6b8aa72e83cacdffed7780cf254794c2"],["archives/2019/index.html","66783762d95cd3e134b566491bbbf489"],["archives/2019/pages/2/index.html","55a9216cffef21a4fa077eb65ed98127"],["archives/2019/pages/3/index.html","f39f3ad0ab07e0985248c7d8adae182c"],["archives/2020/01/index.html","46a63ce06469af9bda98369203d5cdb3"],["archives/2020/02/index.html","bc95607055166c7873d8f618ce894b20"],["archives/2020/index.html","acca537e93a84bf9964a3b667e2d9437"],["archives/index.html","baabbb4f55369202958b232804faaa9a"],["archives/pages/10/index.html","588fb10602b75b5e78087da39c0153ed"],["archives/pages/11/index.html","ee4568e5139db537b2f05f1dcbb6c5db"],["archives/pages/12/index.html","9b0e244d6328bc1b950a2ef6700f242f"],["archives/pages/13/index.html","6a94db18d1bf966e77779b69250ac5c4"],["archives/pages/14/index.html","9530d7588f30d1d4f3b71d994e7de0e2"],["archives/pages/15/index.html","867612c294581d99c942b2096fedf39a"],["archives/pages/16/index.html","f25f7e2894bac4795f2e3a26bfb77508"],["archives/pages/2/index.html","ca535d39e8d4d52f851ffbd686958755"],["archives/pages/3/index.html","2f68fc517ed3d5e89c78b363dbe69bf3"],["archives/pages/4/index.html","23db2f12b2dcf8623e653e02850972fe"],["archives/pages/5/index.html","1c171ac7dc14cd093a1132acd2e6471b"],["archives/pages/6/index.html","9de7dd3279d375fc1b7b58fb53842831"],["archives/pages/7/index.html","bdbd9e6fe3f46fcde1e1bb7b279e13db"],["archives/pages/8/index.html","9a4a05ca13a9f87019a1daf0e5222e03"],["archives/pages/9/index.html","31d26a98a858c76c4568d9fb66381895"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","be1fa356696a031102dc9d029ed71e2d"],["categories/Unity3D/index.html","6dd74b6facb7b48062309272bb48e1a5"],["categories/Unity3D/pages/2/index.html","46c17bb7f22690f9f99163d2fed1242e"],["categories/index.html","507c9d307dd3e823588dae4c773a149a"],["categories/人工智能/index.html","b4ffd3319fdecffc37f09ee427a0db53"],["categories/前端开发/index.html","72e03c4b8d7253bb79ed51497380fb44"],["categories/单机游戏/index.html","2ce957dc2156b1c2abe3568562c58616"],["categories/开发工具/index.html","86fda528f6bd714a33c81a640d7019d3"],["categories/数据分析/index.html","f99b7de88c456fe0bc15e91faaa8a54b"],["categories/数据存储/index.html","7974292b565dcb8a71b997efb121b412"],["categories/游戏开发/index.html","87e720a31c1f1b143544cabdaf5b18ab"],["categories/游戏开发/pages/2/index.html","2eabc48a2372e3721e6997f2ea13c288"],["categories/游戏引擎/index.html","251940fa788a12994a875030690ff1cc"],["categories/独立博客/index.html","e56c8e4841a42a43aa12d982f911afc0"],["categories/生活感悟/index.html","d53fab0ddbd75e0fbfb7559e0c6f61d9"],["categories/生活感悟/pages/2/index.html","ed5ac29f22550f5d6609a7fdfe60ff8d"],["categories/生活感悟/pages/3/index.html","b5a4893b966975d1dc5238948e9b3d7c"],["categories/编程语言/index.html","627febd39aaacb595280a02d875238a2"],["categories/编程语言/pages/2/index.html","925e6d563afc3e5f8943fc08cba17a07"],["categories/编程语言/pages/3/index.html","6f15b1182e7aa120038b7c1d1ec9c4ab"],["categories/编程语言/pages/4/index.html","5f8f82b59b5a682fe69bb68eb69c9cee"],["categories/编程语言/pages/5/index.html","c53a466f096ea8355813f1a5c8272a4d"],["categories/读书笔记/index.html","3893dc93b5b91c55764416a4e9dcc70e"],["categories/读书笔记/pages/2/index.html","f61ab77fe0d53edf77f713338020189d"],["friends/index.html","34f8a3d73779ad12aae6b8ebce83f16c"],["index.html","400e149a3e845dcc05b800ac4b98c3ac"],["movies/index.html","10ba2f91067d439b0e93a862ac44fbd0"],["musics/index.html","1bd5b320d05cb688f807e4f31bad4ab5"],["pages/10/index.html","b8e9846dd7b5eb16666a55d5139041cb"],["pages/11/index.html","22b1113bb3971f7546fcc11254f99272"],["pages/12/index.html","22ee56d04a292407d5ea3fd768669f03"],["pages/13/index.html","aeb61e7d52a1e56475705376c56b8abe"],["pages/14/index.html","dda666008f5c732d030eda89f19d9a9b"],["pages/15/index.html","35f76ad296d36d949c89894327cafe5f"],["pages/16/index.html","488eb5b40bca83693bdbdfc8d027d381"],["pages/2/index.html","c28c779ca71c44c8ca7327b41f99fa59"],["pages/3/index.html","07172dd539a0320f9cb9279a4628c97d"],["pages/4/index.html","121be6f87f612db38cf43455d5b8799d"],["pages/5/index.html","596705372f854ee6eef62755df885ab6"],["pages/6/index.html","3750c1bacd32bd6ac2059a1d19ed1883"],["pages/7/index.html","1dfe666e1f9f5a9024933f69c5e064eb"],["pages/8/index.html","6e985287493c37aa58a1b18e44e97798"],["pages/9/index.html","bd9a53154185458c5d2e5ac8145a14bc"],["posts/1059499448/index.html","eb7079c5b00f4a464ea4b74334c6d2e6"],["posts/1071063696/index.html","702725e987d5371c4a741b90a95fa4b5"],["posts/1082185388/index.html","a4405c67f92f302af77a7946b78c672c"],["posts/1099762326/index.html","c0f448c0d839606ad2d3aa3712d610f8"],["posts/1113828794/index.html","1f51c2e6450974869d95582e62aa1e26"],["posts/1118169753/index.html","9a22101a89a82ad5aeb9887f1e823179"],["posts/1122710277/index.html","2f30179f1ee1264295cee781a0051d8b"],["posts/1124152964/index.html","632955fec95bf7be2b8c1e001512d7da"],["posts/1127467740/index.html","81a57fcdcc5c0c3936368ebb66fab459"],["posts/1150071886/index.html","884c1c1f49c78887fda8ef56816cd115"],["posts/1150143610/index.html","d4445921558c443c2db754fed5ef1b67"],["posts/1152813120/index.html","377a0427dc13f06f61085cff13038302"],["posts/115524443/index.html","d85577a2ebe07b32024cba37666e3d6d"],["posts/1156673678/index.html","baaa4a41577f399b7551e7aa207f578f"],["posts/1166840790/index.html","13b11e117a5a0de2f02adae5be0edac4"],["posts/116795088/index.html","90b47ff351fa3d076763c908d8183e24"],["posts/1176959868/index.html","ad06bb8b8f0e16aae7b08b4a75126f54"],["posts/1190622881/index.html","3aea18d97933797d1faba2d582c513ac"],["posts/123663202/index.html","67ec4b2de7eb617fc41dd259dd6a766d"],["posts/124807650/index.html","d5f3f0a15e776cd520d798343aa8564e"],["posts/1254783039/index.html","7bcef225eacff2ae5647d4a42539c039"],["posts/1320325685/index.html","f058795b13b126bb07fa07dd4f6624c6"],["posts/1329254441/index.html","915b3b2b4972bf205d2df85c5de49c75"],["posts/1357715684/index.html","1431ea0c3368ce4c486602a0a97d6005"],["posts/1358971951/index.html","5a6bf0e461e3abbe3d847910e9b3e8af"],["posts/1386017461/index.html","a81795a5f4fc5ee4c73dec6d8419f5a9"],["posts/1394521917/index.html","8411ebedce6e3bdc40a5936d9b47ab88"],["posts/1397717193/index.html","5b70d930b31966738f545a8d9c7ad3ec"],["posts/1417719502/index.html","462ae5a8bab781d7d7d469b400c6b457"],["posts/1424645834/index.html","2c8e3c7265b91cd576936f0b863f64eb"],["posts/1444577573/index.html","f33dc53a3296d0bbbbf66a06040513e4"],["posts/1467630055/index.html","0c83d12ad5b9c1661f5333a6a173c8ee"],["posts/1478979553/index.html","0e753146d0a05114eab587ffb24595ab"],["posts/1540537013/index.html","85666d5c0a69d331e0e125943010b280"],["posts/166983157/index.html","c2906ab5c7ca087eea4fb8828abde67f"],["posts/1670305415/index.html","7493fbf972b773f307bdc00da387e736"],["posts/1684318907/index.html","2732f878e3c4378a16ecf61788aa819c"],["posts/169430744/index.html","055e0f4639c3a4a9f4a7442c1848d6ee"],["posts/1700650235/index.html","15829e2c46d874086f91ff7690387a24"],["posts/172426938/index.html","a05ba6606a817532d0c77d7166607299"],["posts/1836680899/index.html","fa010505b3380f38927b04093f71d88a"],["posts/183718218/index.html","df5583248a98c18342dd91e43b83a2b7"],["posts/187480982/index.html","0b1eb7989131515bc832f2d2d3249094"],["posts/1930050594/index.html","9e89fdffff52e42d88f8c76e974c4da5"],["posts/1933583281/index.html","572bd7ea98214df598c80757c44b1dce"],["posts/1940333895/index.html","bf864730b82ea758bbaca1286cc914a5"],["posts/1960676615/index.html","770f92d03f1b559397fbd8146a8be5fd"],["posts/1983298072/index.html","3fdec98da739224917854fe76e469907"],["posts/1989654282/index.html","bf2486ae24b68c032b7af2eb43a58427"],["posts/2015300310/index.html","93f3cc99e46ae511914bd220a85246a5"],["posts/2038378679/index.html","2091fff1fe08a672aa0ac3291ef517dd"],["posts/2041685704/index.html","6c6329c29baf8ef56957ede8d8aba805"],["posts/21112647/index.html","a7f9a8acc1c9446ec2006f4698d2acea"],["posts/2158696176/index.html","4f278c363b2646182a656a59e113c17c"],["posts/2171683728/index.html","0c813c615ddb264d3d4fb4d63710ef1b"],["posts/2186770732/index.html","7912424ad7f2b5ef9b1d0b64050f53ed"],["posts/2275646954/index.html","03a2c152def1d73685d06e7cae92b90f"],["posts/2314414875/index.html","8b264706d691e48d85858308ecb08840"],["posts/2318173297/index.html","3be0cbfb0da9b6ddffd49bf6b1a18b64"],["posts/2418566449/index.html","091fedf17d5fa8e1a1e632dd6977dfd6"],["posts/2436573863/index.html","04bf18c62b5ee2beab9d353b09fc83ad"],["posts/2462008667/index.html","c888c9cf86ee20d21f8888dc593be563"],["posts/2463121881/index.html","1545a85744f44406ed7e60f4a188feb9"],["posts/2527231326/index.html","ab82c91c5227eee961f10fad24dde0dd"],["posts/2583252123/index.html","3ef5ac560abcbfe2ef1061edb712fd74"],["posts/2613006280/index.html","5d2a8606bc4325f9deec99c1a8a9eb00"],["posts/2617501472/index.html","27f3f8c169822841fc42478aa4dcac0c"],["posts/2676125676/index.html","59a867352fb6caf05d9fee00bc1196ab"],["posts/2734896333/index.html","b53bafad8895ad99843cbace3f17621b"],["posts/2752169106/index.html","6548795809fbdc03efaae980ed953879"],["posts/2799263488/index.html","feb8a240ba1ab6b63491894e5c1e587e"],["posts/2805694118/index.html","daff30fcbb0d86277536331beb55dc8c"],["posts/2809571715/index.html","3343d4949337b10955bccb5612cdb530"],["posts/2822230423/index.html","cee562383b019e7193c0dc3d195cf2ca"],["posts/2829333122/index.html","0c4ef349ff47f358505dbf5f4dc1d072"],["posts/2911923212/index.html","44fb731b2762e63464aec85fac670c43"],["posts/2941880815/index.html","0c5bc67ab4da187d8b54a057202febf6"],["posts/2950334112/index.html","053f43e961640391cb21a395bf6aa745"],["posts/2954591764/index.html","4d13bea0a3decc4e2af6d1ce838cca35"],["posts/3019914405/index.html","5eabba017964b92e6e7ac6083a16dc4a"],["posts/3032366281/index.html","76a5cfaf7a3058569d11644139f146bb"],["posts/3040357134/index.html","47c36bc53cb1c80e9b48db057067aa0c"],["posts/305484621/index.html","f74fda7a413915611a0c2edc78c5efe4"],["posts/3083474169/index.html","98509bb8c7755052f9ee63893efc6ebe"],["posts/3099575458/index.html","f4395af21f7ce3b59877ca3756ff13f2"],["posts/3111375079/index.html","f4515a5d0827b7a48292015a12e1eea5"],["posts/3120185261/index.html","e71b3caf8569f9b02e37c66eecb4e717"],["posts/3131944018/index.html","0f3162642942b9d57d0b2045e2db5786"],["posts/316230277/index.html","a1e4ef02a3d7c8c996201da4fc09aa78"],["posts/3175881014/index.html","817a0cb84d1510d768c4728fc7a2fcf8"],["posts/3222622531/index.html","01417784d09e9311668d7cd0bfd60b82"],["posts/3247186509/index.html","58a95256a5cccbcf5e7e7a9506c0ec7f"],["posts/3269605707/index.html","3c602c20bbcb9b2dbc8e6a4ee6357e72"],["posts/3291578070/index.html","5864d6dd955c6bf3d4487f395cebba78"],["posts/331752533/index.html","66514685653b1d35784a54d1b0daa399"],["posts/3321992673/index.html","d93279b5fb81382921551b99973f99f7"],["posts/335366821/index.html","c543b3a7b7bc21c26b616830801bda8d"],["posts/3356910090/index.html","39d76ef7d87d2509329ae493ff73b401"],["posts/337943766/index.html","1a93edb5bed218893667893d4c3362e1"],["posts/3417652955/index.html","3add1f14a5149ccf60f489eebc15a3b8"],["posts/3444626340/index.html","2d8ead198e6d47f9bae72b6edfde03da"],["posts/3449402269/index.html","0d2542dbd5ffaa6625f9cd2ccfd6f60f"],["posts/345410188/index.html","ed9d930b9f6f7a8bd68692bfbb45f84d"],["posts/3461518355/index.html","9a25028c2805e9d6901ee10cfaf12459"],["posts/3494408209/index.html","df3f2c956bffd604b28af32150efa88d"],["posts/352037321/index.html","c1ad3cacd6656d387bca8c91a95d7234"],["posts/3521618732/index.html","9c3e218b1f73bbc40d15ccc7ce7eb66e"],["posts/3568552646/index.html","2f2f604f720ec472520e8e593ce0f63a"],["posts/3603924376/index.html","a526cc42687fbf8fc64b2d1c93e9df63"],["posts/3637847962/index.html","fa82c3dad10ebb91aef9daa063fb3aa1"],["posts/3642630198/index.html","c2ac4a009ced7c7c9c175f58ff21238a"],["posts/3653662258/index.html","bda109e31a080e38291a47794c53ef22"],["posts/3653716295/index.html","a35ac1f63c824e829f5c9c848a8f3636"],["posts/3657008967/index.html","98f81d94192be06f16b58e6217e717b7"],["posts/3668933172/index.html","2c1039eb196718a2e32c692fe97af3b9"],["posts/3677280829/index.html","85b3c946c230d86f8e86e6bbbc38270d"],["posts/3687594958/index.html","298c8e6ccb598e86af635f7575fc614d"],["posts/369095810/index.html","c273b5b94ce2e4f450e62d9c4a646824"],["posts/3695777215/index.html","53b1aab567e87c35f6071b679b356e5a"],["posts/3736599391/index.html","78c7f0545d3b1840ee61358a662d694f"],["posts/3742212493/index.html","54b71ca40a0adea2fd9fc889982629db"],["posts/3782208845/index.html","39182db2f82d430898aa8758d25c715c"],["posts/3789971938/index.html","a81de850988eee97e36b2956759bcde1"],["posts/380519286/index.html","e425d29581c599ff35ebb8fceb0a477f"],["posts/3846545990/index.html","ae5a3868d59a267a590f6e5eea8e782e"],["posts/3873710624/index.html","a614cdc4f49f174b64ff0d338b2b008c"],["posts/3959327595/index.html","efab8dc58bce03c02a88d888f462be82"],["posts/3972610476/index.html","a03e0c5cc83bc6e4439c228194b8a607"],["posts/3995512051/index.html","835fe0894da6fe7d320c785f72130809"],["posts/4088452183/index.html","b7ab49026e0905da3b1ce3cf991b5d4f"],["posts/4116164325/index.html","b6a2240198c234300c02e12a80ae7e01"],["posts/4158690468/index.html","4a656dd0ea5e89d243c2d4ee5307f7d6"],["posts/4159187524/index.html","249f4cef171178a37b72582ad0092f0b"],["posts/4197961431/index.html","50c0cf4baa8c1eb851f32203ff8a42c6"],["posts/4205536912/index.html","8d1611a834c0cf2655d14bec251d61ef"],["posts/4236649/index.html","a9f10b086e06f585a0fb05236fb139f4"],["posts/426338252/index.html","ec9865f0eb5cb959f1cba950c5f8f7b1"],["posts/450254281/index.html","ced7dde661fb8e01c13a52096329afac"],["posts/4891372/index.html","5151f395fe064d2c204c6ba82fbab010"],["posts/569337285/index.html","666f9cdab9fdb77484888624748b5041"],["posts/570137885/index.html","2fb5f7fc1331338cd19f10df116fa026"],["posts/570888918/index.html","7a269938443b01799dcc5b0c473dde1d"],["posts/582264328/index.html","4571400bd91597d2336c52817e7873fc"],["posts/632291273/index.html","455d865eea6a1ebf290b243d4634d3c0"],["posts/70687890/index.html","656f60c9e366b61a0a0bca6bb91b0cb5"],["posts/719322223/index.html","2813e1c9d23693e0f2e7a647a2b20159"],["posts/720539850/index.html","a80f816797660420c1fee400fd49ccf2"],["posts/786195243/index.html","ab847f8a29f4f29073cf56e2cd01909c"],["posts/795474045/index.html","4d7a68ea25e7485b4747bec91ae11b69"],["posts/815861661/index.html","a791f1a2fb3b9aa42416c688e599e5cf"],["posts/821259985/index.html","f16e8fbc4ba48095db8502a7b342d6fb"],["posts/828223375/index.html","98e735fa9eee31d368c707dfa03c971f"],["posts/887585917/index.html","a685bd0a252d688e987f7a93371a2f95"],["posts/888549816/index.html","c5286053f99cbf3b9858811445f63a90"],["posts/906436376/index.html","7b8a97c82b77745efccf680e46f32e52"],["posts/907824546/index.html","d2cc36d0d1a7a9466e9630da4939a1a3"],["posts/927393529/index.html","594c945997ac155a0f2bdaf8f7bb5d1f"],["posts/94443781/index.html","5751b18c0c6b34f6d4827cd67add30c2"],["tags/2014/index.html","ff132bf6f9c17721b2594733571450db"],["tags/2019/index.html","9e8e137a0e1635c492d99644bd84dccc"],["tags/AI/index.html","dd2866bd79ff5bf5df365eb7347ea7b9"],["tags/AOP/index.html","426e3b7f834bd8947b1239c21aa69cb6"],["tags/AR/index.html","b651e7c6b9acb3a1dc0e9f95a641bd0b"],["tags/AssetBundle/index.html","f3aa243274ca990d5cd770b430833eee"],["tags/C/index.html","16eed70bb893d4316b0e56964684b2ab"],["tags/CDN/index.html","b86634f9c0cf9430f03861da4e928c89"],["tags/CG/index.html","afed9128852b55266c501ba8a45479d8"],["tags/CI/index.html","56ac98426e7e405f92b309cf48dfe575"],["tags/CORS/index.html","ebf69bb06f60ca66cd969609caf960f8"],["tags/CSharp/index.html","164bd2a4f981c971a3645024a3992e42"],["tags/Castle/index.html","a2b9069684e7776afce25aa8c0554545"],["tags/DBeaver/index.html","1db8fa4b1f940d0fdb8cf16317b920d0"],["tags/Docker/index.html","e864b8784c3ebf1efbcb810d6c7af90b"],["tags/Dynamic-Proxy/index.html","0bfe22d1943e54b9643a1451a5b17b9e"],["tags/Dynamic-WebApi/index.html","063b1c767b252c4dcaa4f540aa74d12b"],["tags/EF/index.html","98d8bca8077540c031b05bf43e6ba5f8"],["tags/ELK/index.html","0498a078a2238bf7d1ac8828da9db499"],["tags/ES6/index.html","024449d440689da954be0204013dc179"],["tags/EasyAR/index.html","a50a4ff7da9609f66abd8596e75016a3"],["tags/Excel/index.html","9886a908a21a2eb72bfe33fa6fa85f70"],["tags/FP/index.html","3505a68249956745f012d4260941fa56"],["tags/Form/index.html","1738bcedadb5965b893915e2d7feb60c"],["tags/Git/index.html","dc87917b71193c10c8b4a022a306da2c"],["tags/Github/index.html","d88ae061635165d62c69cbaf2c4c2e35"],["tags/HTML5/index.html","1a03dab83d3bc464150f19d5cecf6d23"],["tags/HTTP/index.html","f25d0c2d7621cc7b72f369ad675cf51d"],["tags/Hangfire/index.html","0e4dea65060e4a02ab19c07e091eacea"],["tags/Hexo/index.html","ec89500b27a0091515e204516161f646"],["tags/HttpClient/index.html","705c01177baeefcbe8802a2aa49f8158"],["tags/Hyperlog/index.html","26f13e127657efa1dd95f7a53bf2ada0"],["tags/IDE/index.html","37836c4cdc17227de7f73b0905c4ce58"],["tags/JS/index.html","0ef26b52a638974709d8bf8ddf96d8f2"],["tags/JSON/index.html","86eb683ba4af365b1cf27fa7ce00c393"],["tags/JSONP/index.html","7f5d14b0810cf835db5b6045e2964b1f"],["tags/Java/index.html","16272464b6855c016c63870b1c3aa258"],["tags/JavaScript/index.html","0a04bde34c5879612e6e9752863583fe"],["tags/Jexus/index.html","93a4b81f14abb4d61208b7d530e93956"],["tags/Kindle/index.html","6d0a8198f67a6ee8356bbe5899bb6f7f"],["tags/Lambda/index.html","842ac0efd248e471a7839eed57a22c64"],["tags/Linux/index.html","c827ec648ab538af9a7344bca814667a"],["tags/Liquid/index.html","4b8558f7a17d0f9397198b4781f68d1b"],["tags/Logger/index.html","479d476f86171e87b9382c4b4b2c861d"],["tags/Love2D/index.html","da955c60affd0b9ae53de37e1419b7be"],["tags/Lua/index.html","a350528311bcdc2ab936a6532be14ac2"],["tags/MMD/index.html","4715e1d9cfeb5c90e5a2945aca31ca8a"],["tags/MSBuild/index.html","e92c2588ec25db8917c59eea058c065b"],["tags/MVC/index.html","98909351c224f2f54f01e136dcc4eb79"],["tags/MVVM/index.html","c8c37e065365df9c5fb0e4519aa093fa"],["tags/MapReduce/index.html","50a6c9c86ced960c8404d1b322f2782b"],["tags/Markdown/index.html","8d86a259d1af50b681aef767093234cc"],["tags/Mecanim/index.html","143996c1b9ca9c1472398046d04ed4c3"],["tags/Mono/index.html","faa60eb1ba334a8c97ed94ba84dc7088"],["tags/NET-Core/index.html","a161bebcb16fc1a0742c8af2f8bbf657"],["tags/NET/index.html","2ddf096704b9443d8eb6a12c67ee3703"],["tags/Nginx/index.html","32ce7c942290494e27064696ae5bc863"],["tags/OBJ/index.html","c4a65c8edd9c817922a900fed9c34222"],["tags/Oracle/index.html","539ba8f90be3e1c82fca56b6706ee848"],["tags/PL-SQL/index.html","d8363c99ce837e82f472094ce81abf94"],["tags/POCOController/index.html","468b3e8cbef2d34c3b756beb8b2ee219"],["tags/PWA/index.html","86f6968335b236b753e3fc99d6e5af04"],["tags/Python/index.html","8654a717e829543d5754e6de5c1a3050"],["tags/RESTful/index.html","8820e73bd6c380e61020bf16c3af189f"],["tags/RFC/index.html","d4ab3cc9dc63d9c7b99600665fe3f02b"],["tags/RPG/index.html","1cb2a22b0e9a6b60da379c44a5cab545"],["tags/RSETful/index.html","fa08ad0a2c1338d83793f2a63e7f01a7"],["tags/React/index.html","53aa28e0807b594f6c472c8aefb0b46e"],["tags/Redis/index.html","96e12f0d337c14f0b06c3f60b8ce18f8"],["tags/Referrer/index.html","e011158bb55a70202cdc12d385b356e3"],["tags/SDL/index.html","fb424f78979cfb24e685c4fac422819d"],["tags/SQLite/index.html","cf618465ceb564bf6fc1b2d6c29a3bef"],["tags/SSE/index.html","52d9259c1119d17e3a22f9ca06276ccc"],["tags/SVN/index.html","323a35ef45b0c91441768d0cd015b316"],["tags/Script/index.html","06e26b673f093b6e752f68e2712579ba"],["tags/Server酱/index.html","2c4e10933752374c6f35a1182f38ef75"],["tags/Shader/index.html","e33b0465988cb4022e1d4c122a8ccc1a"],["tags/SignalR/index.html","0fcecbad8b88d6b04ae1355c2e2ac3f9"],["tags/Socket/index.html","bb121302498cf12d6ec3db751cdb9b4d"],["tags/Sonar/index.html","a89df0341f5d6ccc6d6bea673180aa23"],["tags/SourceTree/index.html","91d2fd2d08a0ada809a96e69211fc5e7"],["tags/Sublime/index.html","69f33e4ba04aa9aa307947f47630bd12"],["tags/Swagger/index.html","cccfaa65a5cda73e4138c9120d366fbe"],["tags/Trace/index.html","9a00547155504de603fa55c3f499b2d3"],["tags/Travis/index.html","6dde0efa09d1d078232cd4d8e6aa9b49"],["tags/Unity/index.html","871d19dbdfbc4cf604859e9a6f1af9e6"],["tags/Unity3D/index.html","c60c1f7b3d0114c85bbc03895744dea4"],["tags/Unity3D/pages/2/index.html","ae8f388ca5dd28b28dd4e1f6e95baf1a"],["tags/Unity3D/pages/3/index.html","5c30c870da107c763ed74b55696fd169"],["tags/VSCode/index.html","4c94e1db7da08df648e223348219326c"],["tags/Valine/index.html","d1350000f429a25d531cabe79bdd6813"],["tags/Visual-Studio/index.html","a34e07a1e43ed0785204bc2a3acee59c"],["tags/Vue/index.html","774b01ebf97ce0bce17366d270637047"],["tags/WSL/index.html","bd23eb7f3f1db5f4df4df6a388b2ce40"],["tags/Web-API/index.html","973f90309de4ecd91110a4b3214033a4"],["tags/Web/index.html","e68e3141cf9dca996e2e815ec9d9fcc3"],["tags/WebApi/index.html","d7affd1cddf8cc2ae884d33e2eb31acb"],["tags/WebSocket/index.html","5086e6506f602fec9663a0bbf473f85e"],["tags/Wechat/index.html","24c81278b0a497899a1b6be4d92b794b"],["tags/Windows/index.html","b1ae611aef43aacbde9aa24c0232fd86"],["tags/disunity/index.html","5b9df4e2c8f98a39b9377b22d6154cd6"],["tags/index.html","58b5f3f8498e225a5966890a8ea6895e"],["tags/matplotlib/index.html","13d7cf163789bc5d7bcb1409e40dc369"],["tags/njsDelivr/index.html","fbb2972d0f7cb7ebf01ef4eab570d46f"],["tags/uGUI/index.html","5957636ef202c2d07141d2ec41db02cf"],["tags/zTree/index.html","35bb5414e5b5d0cebb7464c2f0defb00"],["tags/一出好戏/index.html","29e4b596bfb542f2d477e43169401b3c"],["tags/七牛/index.html","155b0300d22049c55561af88a6a9157b"],["tags/主从复制/index.html","c60baa1f79c5b18b60701f0df4cd9f7f"],["tags/事件/index.html","5ed33b49aa92531ab3f43cda01c6c131"],["tags/二维码/index.html","6b52d58286c84c8c297a9050f38d0319"],["tags/云音乐/index.html","277e3e9bc4f03c57c479852ff2c4f504"],["tags/互联网/index.html","a42be63c837bbc4d103679da04b97698"],["tags/亲情/index.html","90b7b9f440b8925f2cdf83ee5b0c5a36"],["tags/人文/index.html","b3e2c72e25176fcbecfa2fdb1916c5ee"],["tags/人生/index.html","593b2a8363770e30aaf75c1a2b454471"],["tags/仙剑奇侠传/index.html","c9aa5e821c9d4c5b18962e5596a20acc"],["tags/价值/index.html","808556f8cb9ee8867265881da143323a"],["tags/优化/index.html","6deadab846cfb680e79fbd93919d68dc"],["tags/全智贤/index.html","36ce36cd8f337eb91e890a1f2e1fa484"],["tags/公众号/index.html","1aa353546f2a703fab4f7abaf02ec6ec"],["tags/关卡系统/index.html","6acb39c6dee68d982d50df3dbde0e3c2"],["tags/函数式编程/index.html","e8f05fbf7bb25fa9293708bc1af7f87a"],["tags/别离/index.html","eefc5ca22ed5c64df62616157b49278d"],["tags/前任/index.html","7240ea1eea8d5a54cda34c5d60575851"],["tags/前端/index.html","f8fc36a6ecb9dbd611458c29e18a0d6f"],["tags/剑指Offer/index.html","4aa47ea99b8b10c56d1dc2c3059353df"],["tags/加密/index.html","0391ea9e5421f33cd6bdd718e384bff9"],["tags/动态代理/index.html","d0f829a4630caf05523917f04fbc8f9c"],["tags/动态加载/index.html","9ce62a3f28c0284412ebac626f4806da"],["tags/动画/index.html","9a4a85d3a4e206fa78e1f89f17d80eec"],["tags/单位/index.html","b6643adc91d27f56d2e2d735692a8b69"],["tags/单机游戏/index.html","c7fb8e633b1490e33843c60c9d80452a"],["tags/印度/index.html","f3a96414d9fb256ca208c07ca7e519f2"],["tags/历史/index.html","746f181048e318d5f00cb295b5f6175f"],["tags/反编译/index.html","32795ff8e9fcae60995adae9e0f0a9d7"],["tags/同步/index.html","abf28626e864d411dbef22943b861657"],["tags/后端/index.html","fa0568abbb7e021c15cd1fea7ffaa654"],["tags/命令/index.html","e4f01bfdbae09f18d7e65807169ad092"],["tags/和平/index.html","49f295c7b0e9335b351063d14d97adad"],["tags/响应式/index.html","390b8bbf157ec9bf7f64220fda888052"],["tags/哲学/index.html","d02324fe0714a3aeeb32fd522efa10a8"],["tags/回家/index.html","f08c442ac5d82adfe93446c71a7cf555"],["tags/回忆/index.html","9c7317126981b652334d22e8090d059c"],["tags/回顾/index.html","07067c56941ca8be1cd8f5c578d98469"],["tags/回首/index.html","6e11a0ef002055bd6d9a44da7b1ca10a"],["tags/图床/index.html","48ea599f4b0fab688929c6157d6d1a45"],["tags/图形/index.html","298de166cedadfac172cba949fda038d"],["tags/地图/index.html","c388d4ccdc4210579b453e95f2239f63"],["tags/塔防/index.html","347284211dfe85f260b5a907a706e74e"],["tags/增强现实/index.html","71918bb3b4e4d8e243fc384ae0d49b03"],["tags/壁纸/index.html","62f2bd1dea07908bd708cdc546a2a2d5"],["tags/夏目漱石/index.html","fbb0387234dc013543b4768ed9ce71e0"],["tags/多线程/index.html","53ec7d2cf0655281d5602666229b4a92"],["tags/大护法/index.html","db6483dcbe3016e0f884943a349846a7"],["tags/委托/index.html","465e22279d475399cefbf6ce78f51969"],["tags/孤独/index.html","29bbfbb428ab6220995072a4acb4f5cc"],["tags/展望/index.html","e4a03412d8ae00f71dd80c10a8aa85aa"],["tags/工作/index.html","ce9bc67eced764517eb79c11ca371c90"],["tags/平凡/index.html","940ecec15b351377b3344919426cbc92"],["tags/年华/index.html","064628a0a36f0779fd42a31d54a88428"],["tags/年度/index.html","2fbaf5c615c1fedc858d45e6f9d87694"],["tags/开源/index.html","2a9b22f18d6c0a5972dc92ab8600727f"],["tags/异常/index.html","8faad87bdd26e7d8abae0628dca1c1c3"],["tags/异步/index.html","220454df7b7adcf0f2e83e82898793e4"],["tags/引擎/index.html","26eb02013e86cb815b0fb48837272ec0"],["tags/影评/index.html","7b0fa5a32e7ef6d969c8f374ba8b6eb6"],["tags/微信/index.html","8f91fcc255e181ac90d423e6ff86e5fc"],["tags/微博/index.html","0046d0b294211925cf617de841f1b9b4"],["tags/心情/index.html","5d8f4aa9e5c79ba8d920d2279b50ec12"],["tags/思维/index.html","92cc7d5f6838602363aad79a3aef6dfc"],["tags/总结/index.html","a18f018c09c9554e51a8e9b6a3ae1e12"],["tags/想法/index.html","2f530be5f2e3b7d4fb197f180ac138a1"],["tags/感悟/index.html","780255452257810b9232e19844a59047"],["tags/成长/index.html","2b4b82446aa494dbb4f108a401ef5afe"],["tags/我是猫/index.html","b8f514df9fdd6df213aec3ed9b48bdef"],["tags/扩展/index.html","19fc86c14c4fa8af2861eabd62613025"],["tags/扩展方法/index.html","b7757018b8d258e7ad6e6c35e633ee86"],["tags/技术/index.html","2d3ad492e3e3ad4797d0dc3c322f3263"],["tags/拖拽/index.html","783dd4be982b84c7184bdd54022eb0b6"],["tags/插件/index.html","d544e538fe67fb946a4cd312a0f6c0f5"],["tags/插件化/index.html","8525cb741b1d6cf20005a6ea9fc4bb6f"],["tags/数字/index.html","dfcf95d5fe250d91881ebd90c8038130"],["tags/数学/index.html","0e781c1574bcb4cb51eac9916814e841"],["tags/数据/index.html","5142cb4f28963c92916e9d1f08c5f95e"],["tags/数据交换/index.html","92ab0bbb6d89a77820a06ebe664889c4"],["tags/数据库/index.html","c661593fe3e621e6e0a65e8034ed5f36"],["tags/文本分类/index.html","a9656426c7803e26b2ca5a7cd0389d4c"],["tags/无问西东/index.html","77f43a62e5bc3fc6604603d439acedf9"],["tags/日剧/index.html","a20a6d0e3fe885758fc9888d3e501d24"],["tags/日志/index.html","0b6d4ad26e8cb9837e0ec3825005fd99"],["tags/日本文学/index.html","0082591e13d8474115e5afac1d487686"],["tags/时区/index.html","076e1dd356f28f3c98a4c9238299a934"],["tags/时间/index.html","435cf445b9ccd7ac9e6bb6e27d9faabf"],["tags/服务器/index.html","6e1b5c898a211da66126e4b1a0a219ec"],["tags/朝圣/index.html","b5d19842e4265616da6f852205200e33"],["tags/朴素贝叶斯/index.html","6900225ead4389e32a8c0971309ea609"],["tags/架构/index.html","f5d1e0e66dd243488972aeae27a3e034"],["tags/标注/index.html","9da6eb3c9e9da3eed9a0061cf01c2b9b"],["tags/校验/index.html","db67c2ef56eb5659bf67feef2a9731ff"],["tags/格式/index.html","8d68fe24100522cb478b92d274340f46"],["tags/格式化/index.html","c895f0cced3490fef71b4e89d87dc21c"],["tags/桌面/index.html","7b608fd76d607ac706ac59918be59075"],["tags/梦想/index.html","99d3b222aa48e104475fdef23059d824"],["tags/概率/index.html","a1ae557fab57125d81a4a914ed3da39a"],["tags/模板/index.html","459ec03aef49c20b9a04202ab28c2b26"],["tags/模板引擎/index.html","76bd3be12563a269df2d488b0f992875"],["tags/毕业/index.html","b8153fcd702b8944163ee8c8817341a3"],["tags/毕业季/index.html","bb28fb7e46ccb40c82a5ca84db1a3ec7"],["tags/消息/index.html","f39e281ab9386cbc17c9f11554a47e70"],["tags/游戏/index.html","89dc9a68a17a3e689426433d1fa8d246"],["tags/游戏/pages/2/index.html","4f7edecaf2d204e511b50d08c641916f"],["tags/游戏开发/index.html","edf06b652c3fc6eea45bc4d4bdf23c38"],["tags/游戏引擎/index.html","4347a3133ef431e9b8913ca1bf4f9535"],["tags/爱情/index.html","4edbd3d6e8cff548e35cf6a4709ba5fd"],["tags/版本控制/index.html","8fbb33ba332497151df6c7fe8eea24b1"],["tags/版权/index.html","f7fd4f3b8b1acc18be22b74707b6bb63"],["tags/特性/index.html","e894ec573b487517af8fb0af09e965ab"],["tags/状态/index.html","0994f9bb7075bf920a53781177fb0e66"],["tags/现实/index.html","938efbf9063c1de2df82c81f1b9f1706"],["tags/生活/index.html","89724a0a1ebace2a08cdf1096646e2e5"],["tags/电影/index.html","a829b3a2e0f9b7ab22bab784de353360"],["tags/画家/index.html","a60e8a955c1f15a98f220cca658137b8"],["tags/知识共享/index.html","3a1b6a3b139dcbdd06a64d199554a364"],["tags/矫情/index.html","ebbac3c2c977f088ec0f25a46c609f96"],["tags/程序员/index.html","ed9978e553d0b3eda02f060424973562"],["tags/穹之扉/index.html","d7e89893e764319a358dde5b3c5459bd"],["tags/穿搭/index.html","892197eb56f5d033df29a50daf0ea9a1"],["tags/童话/index.html","577d8cc134aa8a75e7d99f1497cc6e14"],["tags/笔记/index.html","d063bdc6dbc756d01fa145933155a0cd"],["tags/算法/index.html","4dfb788bd42505173ec2742cae4159f3"],["tags/米花之味/index.html","325ff2242cf2f826331db6c2afeb263d"],["tags/缓存/index.html","2881cd61435fd74ffdd87e357a681c49"],["tags/编程/index.html","4db68376a2f6624d526e85b4b24746dd"],["tags/编译/index.html","8461c4983b7fd175576b01020f66b5c8"],["tags/编辑器/index.html","aa97f42d3f7b4cdaf86ab10fa31350fd"],["tags/网易/index.html","d99949e1b32939af979548ed2c6070a2"],["tags/脚本/index.html","7d4b22f35b67734a1b68054a29618c42"],["tags/脚本语言/index.html","d92178dfab7dbc8c7321cafe554f77df"],["tags/虚拟摇杆/index.html","235f0558edd518cd767472cfa2a1160b"],["tags/蛋炒饭/index.html","8d980e63ce957391f18e159ef531b128"],["tags/表单/index.html","dfcdc1b68ea643b8fce66b9e84b86d9c"],["tags/装饰器/index.html","550366e5134656867e99c220f31221f3"],["tags/西安/index.html","8dc8618e65c535f1aa7e4bd502aec143"],["tags/计算机图形/index.html","f4d57b6a6f946d7a505c253fba409220"],["tags/设计/index.html","7a1b78e0fa09908b694f6ffcfd36caa4"],["tags/设计模式/index.html","b3dfacecaf6564979f7282d455c4bc75"],["tags/访问量/index.html","9243abb2b38977176f7dd85ef60ec7e3"],["tags/评论/index.html","9612cd49571872e6f1ff3f4ff2d81734"],["tags/词云/index.html","16ae76a5b50f97836ef39f06d95d9b08"],["tags/诗人/index.html","dc4f3148cfa31b344196e8e4715bd50e"],["tags/语法/index.html","e2e07f4611eb6976096df359c8f737db"],["tags/请记住我/index.html","27f016466023b308f3d62db581a92e06"],["tags/读书/index.html","180cbc1fa34285d76b0870570d8137d5"],["tags/读写分离/index.html","984161688e3602e2a73621ebaa94ca63"],["tags/调试/index.html","6d8176c43a406a6fa7315ce02e621c0c"],["tags/贝塞尔曲线/index.html","c90403932eec0eadf5170e021b531e86"],["tags/贪吃蛇/index.html","2a02767efb96dbd68c44e1bb3afd5790"],["tags/资源提取/index.html","7dcd063e1ec55859def3468ef7aae2a4"],["tags/跨域/index.html","34a02d9b19c0508a33d4a3c5ddb204d1"],["tags/跨平台/index.html","af052eb0ced3d0fa130a3df898c13609"],["tags/转盘/index.html","ced60fb1573d0d2b90dc521980c6faaf"],["tags/迁移/index.html","fbf26f0260ebff341eea466bd41d42c7"],["tags/通信/index.html","2ad72b8fa135efe4e3ae8baa21a2148b"],["tags/邪不压正/index.html","85e78c6b4db974b83479533614b83743"],["tags/部署/index.html","176f5f5238e91e476d13a007d57e8d69"],["tags/配载/index.html","6b4659cd27584e9b594b2dfdc8b85a22"],["tags/重试/index.html","b1043f95d53ae69335bcc28e4098d6d4"],["tags/长安/index.html","47707285897ae496a8d5f3aaec42e94d"],["tags/长安十二时辰/index.html","759597e1bbeb37923f29e97d016c00c6"],["tags/阅读/index.html","808e2109679ec75d9c7995fc4ab69c28"],["tags/阿里/index.html","5b385d549aa53ee0990ba7a9c9511f81"],["tags/随笔/index.html","2fdb36074d598956aad4cfe6bbc01db8"],["tags/霍金/index.html","6560c185dec9b2bf7176d3fa05e339ca"],["tags/青春/index.html","5d05c52b145727724a8cfab6e01b2d65"],["tags/面试/index.html","6d6b2ea1f9a833d5cdd5a850a5f17dc0"],["tags/韩寒/index.html","8f3b53129527ab7f47a0c73d1f6386fa"],["tags/马尔克斯/index.html","a30e88cb14dc14aea01709569b38006f"],["tags/验证/index.html","b771503c6d478cf1ba300a4f6aee9948"],["tags/黑客/index.html","9932c78c76dbed98dfae8b222710a9a2"],["wiki/index.html","622c79cdf7141f071fbf744b29f94376"],["works/index.html","1268ad7e59a16a27e011cb7af6cfc5c6"]];
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







