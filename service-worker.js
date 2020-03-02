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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d8ebaa6324659f05997acd0a1ae01e61"],["archives/2014/12/index.html","5a4b61853a66a79c7d343e0bfb25d6fb"],["archives/2014/index.html","6bd85492615eadce986e384048f52798"],["archives/2015/01/index.html","9e851760bcf58c608eb341a568ab94c6"],["archives/2015/02/index.html","51359e58de192854c5e5be62d33c3a42"],["archives/2015/03/index.html","7fa5ce2c73e80025c42462e128aa134a"],["archives/2015/04/index.html","8237ed17bd1ceed1e837ebe91a0f4bf7"],["archives/2015/05/index.html","dbb0bd0c94da977233afe14cbddafc32"],["archives/2015/06/index.html","a21d4475b837469f19e2993ae23fd3b7"],["archives/2015/07/index.html","9ebfb5bfe2bd73a8d90645c8cf36da5f"],["archives/2015/08/index.html","d8e32e76d9d00c0b162570bc22a34a68"],["archives/2015/09/index.html","bce2d162bae74d6753398b8b95c312cb"],["archives/2015/10/index.html","c1c274433f48ebca27f27c512389c72c"],["archives/2015/11/index.html","bba0df5f045c96ed55a1fb7d3f9de631"],["archives/2015/12/index.html","23f37cc1dd2082daa83a7a95cf5d586c"],["archives/2015/index.html","d7b5c4ade8908d6775121d0b6fe8d3f7"],["archives/2015/pages/2/index.html","59fd6919ce56c5e57cf22afe749bab5d"],["archives/2015/pages/3/index.html","16365547c29397668f783df5c21c2b80"],["archives/2015/pages/4/index.html","a532ba50a661d28e5bd075185e2414e7"],["archives/2015/pages/5/index.html","327b98549fe0cdb3fa2b34cfecbf2c8f"],["archives/2015/pages/6/index.html","7563c5f2a957128f032ee5986199986e"],["archives/2016/01/index.html","1431200ad308df37d805339f87f5a74f"],["archives/2016/03/index.html","607338b99852deb9c7f4fd7b1a9b3127"],["archives/2016/05/index.html","7a7d726943ceb004abcf9caf66dd7848"],["archives/2016/06/index.html","89c992a9f73cfc609b4ff9fc8add8748"],["archives/2016/07/index.html","a60acce7885d88265729f90cafba0d65"],["archives/2016/09/index.html","5c1210245064823f31ab3c92c335a970"],["archives/2016/10/index.html","4483df0bd8dfd78aa6662b67b6397969"],["archives/2016/11/index.html","d5aa904c6c8b463938da05cfbb640a07"],["archives/2016/index.html","4771becd881682c6866c4b7ca157c1fd"],["archives/2016/pages/2/index.html","d0bcacf6499bb23dcbd218346628935e"],["archives/2016/pages/3/index.html","eb88d2bdedd485cfbe0fa506e30502a3"],["archives/2017/02/index.html","d339f6ca68bb4f76d76cf73639426dfe"],["archives/2017/03/index.html","58f768f5010cb269cdd4c0caea4ab64b"],["archives/2017/04/index.html","2dc58708311b7bb0aefd4ffa5c1fe97c"],["archives/2017/05/index.html","e15f585f89c4c1e94ca048bb3a664f46"],["archives/2017/07/index.html","f85646cdb521b9e7791131329deeddcf"],["archives/2017/08/index.html","9a59d5dc39e9eb22b6d9bd6838f7a9f4"],["archives/2017/09/index.html","45c5e5608133d1cd28f85befe613dad1"],["archives/2017/10/index.html","9614f3d53480ef6db7508b1ae28ac3ea"],["archives/2017/11/index.html","5cbf71be9b96b834abb8334ab4c3d980"],["archives/2017/12/index.html","7d85dbc738fd1421f9b7024de78090c2"],["archives/2017/index.html","9a95c3c7e60a06582cb7690be2b09b66"],["archives/2017/pages/2/index.html","76a143b7776c7e48f686a8a0fc3c06a1"],["archives/2018/01/index.html","69448b8865efc14eed0de19441ff492b"],["archives/2018/02/index.html","1a8aa1ef4de8bfaa9918d42327250ffd"],["archives/2018/03/index.html","64b32bccfdd79db04808e2d544e14d7a"],["archives/2018/04/index.html","8f4c4ace5189161cf721b886b7383199"],["archives/2018/05/index.html","4d76df31c1334a58ff5f6797ec2273e7"],["archives/2018/06/index.html","b811e1705f8b902007e0b2cb4c25d56d"],["archives/2018/07/index.html","eb88cd2c80c921152b082601a29f89e4"],["archives/2018/08/index.html","3622b8783b96e8a907267562afa966a1"],["archives/2018/09/index.html","e89db6b2cb317e7a9b486044101ae19d"],["archives/2018/10/index.html","12870595e51239dad370dacf424d6095"],["archives/2018/index.html","6dd99bba9124d111207cf15a0fd322f9"],["archives/2018/pages/2/index.html","c13ceb5d785208f89efaa3b5a6992005"],["archives/2018/pages/3/index.html","3f1c13566816c1d69236341b7851fa16"],["archives/2018/pages/4/index.html","eb916303f1887cd7c4bcdd0010faeea4"],["archives/2019/01/index.html","6941fb1853d68813ccd2a87e506d76c1"],["archives/2019/02/index.html","eeb2c8c867035e158dd2b54f4321e805"],["archives/2019/03/index.html","2ba94a1ae7fb6ed76e40cd0421a25fb6"],["archives/2019/04/index.html","06077b4750d49a58a5584ad81bfb9bbb"],["archives/2019/05/index.html","17a07d614d5cf0cf41d191c22fa3bf7c"],["archives/2019/06/index.html","471941a27be3b019298e6149ddcf9949"],["archives/2019/07/index.html","64bb2493988d52207c499d1f23a31cff"],["archives/2019/08/index.html","8ce86c177527099cd989ec9c3221d609"],["archives/2019/09/index.html","960ccf027ba481df3dc8c4f8dc42a8f1"],["archives/2019/10/index.html","71476d2f66d7922a4635b1eb18c3cd83"],["archives/2019/11/index.html","0acf7e4ece21e6f9ed367a0cd9622954"],["archives/2019/12/index.html","8ecaea5af8d23d4a6795e30ba732dd3f"],["archives/2019/index.html","29a2b139cc07c1f3ccf8831f6a0c3415"],["archives/2019/pages/2/index.html","5a052453c7a754de628330d54b1cd300"],["archives/2019/pages/3/index.html","2019b3f26159326d99e4c437be44a3d3"],["archives/2020/01/index.html","9be4d74e7da2a59a7b87192be8a16cf6"],["archives/2020/02/index.html","8315d731cfb91e1997ff274b6e8009a5"],["archives/2020/index.html","8c7ee6614a61f2c53e096cf2c1636375"],["archives/index.html","a4de6b468be8f7ba2ceac80b35e0a404"],["archives/pages/10/index.html","6c439c99e85941a254f62f4264edca01"],["archives/pages/11/index.html","3dc0772a1974b2e92a4998c053f380f7"],["archives/pages/12/index.html","7f6c3604a33c06deac72998b1488d14f"],["archives/pages/13/index.html","98ad04c0822cae10b4bf1b80be662d9d"],["archives/pages/14/index.html","079a14dd53e4c8e4433a4fbbedb5e4a8"],["archives/pages/15/index.html","6132bdc8ff46bdde4a8a8787aadcb4e6"],["archives/pages/16/index.html","e9208225b4aa2f0c54b632c54db0d1f9"],["archives/pages/2/index.html","5f4c6c6843d7e2900f97d95bb8a349d5"],["archives/pages/3/index.html","5045dc05154b2f9d398aff0a18b77cdf"],["archives/pages/4/index.html","2b823337ce85c760cd16fb8801b51a4a"],["archives/pages/5/index.html","0f6a4dc3670bb3c2cf59a583259dde64"],["archives/pages/6/index.html","1a6deb939f1546420a82844fa1d8bd63"],["archives/pages/7/index.html","9b83c3e64c936023468009f2d0bac771"],["archives/pages/8/index.html","0cc4a40e6dc67ebef161c199aea45c23"],["archives/pages/9/index.html","d77bd5ab1f25f655652f3850bd1882ea"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","8358f976fac40a502937b09abacaaa12"],["categories/Unity3D/index.html","5ac7029abf6ec8a022ff3fc8b2cc2205"],["categories/Unity3D/pages/2/index.html","90dc2204c5b0ebbee64f036aa59843fd"],["categories/index.html","547fbc6acb898ceebe1fc069732fc573"],["categories/人工智能/index.html","9297f28b631a2e3136f78f62430c74a8"],["categories/前端开发/index.html","4c2dd0c7e480a3b23168d3a0fafc57b7"],["categories/单机游戏/index.html","37156e43c1eb55c5a0fd423880489130"],["categories/开发工具/index.html","926c06f99bb61dc1166a0a4fd0b12f58"],["categories/数据分析/index.html","3f8359b25d62caba24324f9efc77b096"],["categories/数据存储/index.html","0573ceed5a8d7585c51d32e217746a57"],["categories/游戏开发/index.html","fe1479ab67165dfc59ebaa69a099ffa5"],["categories/游戏开发/pages/2/index.html","b57c62de0b626b1042e951727d536e84"],["categories/游戏引擎/index.html","756752204fa8d59fcd64de587f4e3c46"],["categories/独立博客/index.html","5053fe23141ecacf09cdb43ed79999e1"],["categories/生活感悟/index.html","28af390ad641bd6a32f209c2ba38a03c"],["categories/生活感悟/pages/2/index.html","b93bbc896d516ffb9b30fa79856be018"],["categories/生活感悟/pages/3/index.html","77b1106df7fa4874236288f5121ddcd0"],["categories/编程语言/index.html","d5ac67caf173c0bf0e2d5c9fb68531c3"],["categories/编程语言/pages/2/index.html","5651a984c07fdfde99210797dff24c8c"],["categories/编程语言/pages/3/index.html","818e63e3f4adaf3c88e42a30b4f68466"],["categories/编程语言/pages/4/index.html","5a2386f42b7d598c3dfa599fe404f81a"],["categories/编程语言/pages/5/index.html","857c415aaa64bdb6dfd7c22ec979e7fb"],["categories/读书笔记/index.html","4c1e696830475d0b6adbfc9353427291"],["categories/读书笔记/pages/2/index.html","a7c616f90f6df6f5084b8a5423597c0a"],["friends/index.html","38f469448b8976a5c7757c7e01f9a7b6"],["index.html","aa9e857908356346765d0dd931527336"],["movies/index.html","e3b23f23b2525ac4e886010998253791"],["musics/index.html","5e20cb5236d28169e0c5991c493da849"],["pages/10/index.html","858105069b85e2be08b7a58d65ec6452"],["pages/11/index.html","30c3e3c55c608dd9182c1067934be588"],["pages/12/index.html","27ff5193d0f9ae6fbf62f5bb9cc0c0b5"],["pages/13/index.html","54886ca10da96d5b04377cd37ac13284"],["pages/14/index.html","2c14c6984ec4656cb162fb6be2c9196a"],["pages/15/index.html","1473ed3a9f89f432eb5f8eb74b759d50"],["pages/16/index.html","81091733128da144d89716fff8e6a2d0"],["pages/2/index.html","a5e12fe94c5676d619598ec13334c713"],["pages/3/index.html","8c8040c6c7fdde990c67b056e62320ad"],["pages/4/index.html","f87a272de5e2368a428075f4c6b76440"],["pages/5/index.html","8a9c9425463de4e66f438a3b57aef782"],["pages/6/index.html","cab8c189c717c30084ad16935e1883df"],["pages/7/index.html","272ed7ae9ee7ead9bdf00eb934732569"],["pages/8/index.html","ed6a57b21126dc822c6405d45e2b198e"],["pages/9/index.html","852c2f2804f35e0716bae83421f78c2f"],["posts/1059499448/index.html","99c6a59fe15a884b1846c452759973f5"],["posts/1071063696/index.html","5926ba38bbbf72337e34a5cf18e4bad9"],["posts/1082185388/index.html","ee1337fe11b97f775e35bb088502ddf3"],["posts/1099762326/index.html","8492fc56d426352b23b3273d75b6e8ae"],["posts/1113828794/index.html","85996443728901577192578d9abc3f74"],["posts/1118169753/index.html","dc3bc82a1c38dfcc3002c34081893294"],["posts/1122710277/index.html","61885ac997cb2a9a51b6afe2b58c2bfd"],["posts/1124152964/index.html","30831335dffc2d184d452629732c2263"],["posts/1127467740/index.html","0f2d196d7164a042fe8ff82b7fcde69e"],["posts/1150071886/index.html","d9fbd44e6905bd2d0f1acb2e522cca61"],["posts/1150143610/index.html","ae1ec39034125ad0294d49eade0e6db9"],["posts/1152813120/index.html","ff6bb942df2b559ab33fc38da513edc4"],["posts/115524443/index.html","0e34fd63e727c084b879431ab57d23da"],["posts/1156673678/index.html","835c520b9f3a107f7fd9166276d4c063"],["posts/1166840790/index.html","a340bb6ae7e54075e081a51872a6a25d"],["posts/116795088/index.html","925b3c30515783bb6028113f8d8a8152"],["posts/1176959868/index.html","b3812b10fdb325e2964dcdc497381097"],["posts/1190622881/index.html","6b8bc2c75c118f65afee9c716d03c9c8"],["posts/123663202/index.html","81c3b0d167b6515fb8b2a554de50517f"],["posts/124807650/index.html","9b48bae3ed69a340e2fd44e6370a4198"],["posts/1254783039/index.html","fdab6770c4a3926b3746a543086a7fae"],["posts/1320325685/index.html","60b0ce96f97554f96cdeb54b940218d2"],["posts/1329254441/index.html","bf4ad44344de5c8b90d52920eacebf28"],["posts/1357715684/index.html","19589aa34b694445abc0655cfd399ed1"],["posts/1358971951/index.html","8fb0a7520e20991c20eee9de8838e549"],["posts/1386017461/index.html","35a1dea3d9b4d44a7d07749bf7c5edd2"],["posts/1394521917/index.html","089ad0f0aad381a7e456a992e3af6c08"],["posts/1397717193/index.html","38b05e060968362ce0978ace071bc33b"],["posts/1417719502/index.html","ddcb51c8b2347a5474e03d50f26cedc2"],["posts/1424645834/index.html","cf83c7b674ce0078c9649bfe4e75d20b"],["posts/1444577573/index.html","3be403c2699721b51655c20e5a83d130"],["posts/1467630055/index.html","5239ea26cd59333fcecd1ea4d0fd78cc"],["posts/1478979553/index.html","1adc6f59d00a6d2d1baa21b82e1a17a0"],["posts/1540537013/index.html","728990463a35b003678f8c0f222d6111"],["posts/166983157/index.html","31f6a7ee72a31a31d57d40d42882edee"],["posts/1670305415/index.html","e6561c6f60f5f694f567d01ed491b789"],["posts/1684318907/index.html","6028b8e0b8a2d7a17e3e7c8125f49a12"],["posts/169430744/index.html","b2e1f89265537951df08200338c02eca"],["posts/1700650235/index.html","06ef51c4ea3c5786cf36b5df82ae3242"],["posts/172426938/index.html","869108cb363c521e092a11c7a23343fd"],["posts/1836680899/index.html","90cf8a67cc845658e69a9af5b17dcffc"],["posts/183718218/index.html","fbd9b655abd39884f9ca150c6f9253fe"],["posts/187480982/index.html","b7350dcf940b6f3e3980f26705eaf8b3"],["posts/1930050594/index.html","5344ffeb629aeb67c44d9ba7ffcf204a"],["posts/1933583281/index.html","dcf6d4c8b434a57c14d0447fb9629321"],["posts/1940333895/index.html","a47d9a4149b940f3e76a6135b16cdaa9"],["posts/1960676615/index.html","7c808a8aba0305fded187f17ce682122"],["posts/1983298072/index.html","2199e9e77adea0e1818eaa9b05c3d27e"],["posts/1989654282/index.html","91d9c3a557297ecdb2ec8de0dded0cfe"],["posts/2015300310/index.html","c863b1c34d87e782dc5ab58b7fa77512"],["posts/2038378679/index.html","0e92e25550ec00c9d19a757c65bcb3b4"],["posts/2041685704/index.html","4c1f3dc4b4d678cfc3d244ec3fc94cbc"],["posts/21112647/index.html","f69fe1e7bc118b0e53c415983cf1e921"],["posts/2158696176/index.html","aefacc1b6d81ad7441bc86e18542439d"],["posts/2171683728/index.html","a56cf5470cfce27b4952dba389c676a5"],["posts/2186770732/index.html","a50a5aba1f63d2787b8d41ef7e166186"],["posts/2275646954/index.html","060689a5c0da2feb112c6d2f37262a96"],["posts/2314414875/index.html","a45e71061143e538397ba58334cb7ff3"],["posts/2318173297/index.html","cb5a84efb897640bf0916bdc07442bc4"],["posts/2418566449/index.html","1be04dc3ac328f54dcda2b6d277e5f56"],["posts/2436573863/index.html","6f403785b7d438ccb67c46d569d76496"],["posts/2462008667/index.html","6c5978438988565b326aea35c60abe22"],["posts/2463121881/index.html","227ec2b7492c469e6299c983396d5f88"],["posts/2527231326/index.html","7a580beae85fcbbc6f74dc9a076b0416"],["posts/2583252123/index.html","57c9b879887ddd8e1c8e5cf4064a5c96"],["posts/2613006280/index.html","1df9c2aee85b13219c9901cadc2ad98d"],["posts/2617501472/index.html","0adb8954280fc0d4615f00958375f184"],["posts/2676125676/index.html","12e2170f053e20401dda29fe263756ba"],["posts/2734896333/index.html","71d91bd2306a147ba929ca2d940670b3"],["posts/2752169106/index.html","dbf8dfd300319b5a116451de1ba801ee"],["posts/2799263488/index.html","49e457261fc7ff9056c2f1f440b48b89"],["posts/2805694118/index.html","8bef180994faa2fe0758eb9ca1ae4ec8"],["posts/2809571715/index.html","ad3c30bf1b760f22bddbf679ade846a9"],["posts/2822230423/index.html","ed8f9a66e3b8be2fec2fd5d4c3b3d721"],["posts/2829333122/index.html","95fe9542c0f221339e3fb7537b88f25e"],["posts/2911923212/index.html","0a7e418d37c4ca8588a58e5c930e60d5"],["posts/2941880815/index.html","c03de293e4a9b16bce7a134d0e9a7b75"],["posts/2950334112/index.html","fdf079aaf053aad447a4be75db6f50aa"],["posts/2954591764/index.html","19068084bf2f46cbdb2a8f1e5f579a81"],["posts/3019914405/index.html","ad2374848a544ff496fb3f9a5573c623"],["posts/3032366281/index.html","e991660b310d61467041edb28e251e88"],["posts/3040357134/index.html","72db8c5cfc79107bfea3cb98f283e42b"],["posts/305484621/index.html","dc8e89e16b859f15b6b5329a8a3d6e83"],["posts/3083474169/index.html","3b718ae92aa3b609554a7fd1a770e910"],["posts/3099575458/index.html","ec04d543105f6397125afa0faa1a3fa3"],["posts/3111375079/index.html","b5ce4d159ce6c80a7a9c69f14cdbc08d"],["posts/3120185261/index.html","c6db8636cd12273dc72f058e8a83665f"],["posts/3131944018/index.html","0db0155ea3d7fbd13bc576d1fb04c4d9"],["posts/316230277/index.html","9e8ad1e57575ed7cdf139e94813a8a61"],["posts/3175881014/index.html","7ed27d04b43de01dac3dd426a607cedc"],["posts/3222622531/index.html","75bef15d7cd59fac127f573c86772109"],["posts/3247186509/index.html","2e13161b77facbc1943c985f4bb3805c"],["posts/3269605707/index.html","af31e1ca18c6c414546ebc4bbbf4776a"],["posts/3291578070/index.html","c15d87be21b9163e773108ff66de689d"],["posts/331752533/index.html","a75030d55d2acb40e0f7d6214ad4c816"],["posts/3321992673/index.html","05c41ad9ff5f27fdfe1993f6180eb2c8"],["posts/335366821/index.html","1dd7f40df501838fb82f4b9f610f095d"],["posts/3356910090/index.html","2c0a469e986a6c5ae0704525d1203427"],["posts/337943766/index.html","3c15f69a282f96740e0320281830a145"],["posts/3417652955/index.html","6caccb56dd0508186291127a1941a060"],["posts/3444626340/index.html","3fe32da6fab8d751cb26056f04690b2c"],["posts/3449402269/index.html","f04d1009f7b97e4ae5b3cac7a60df072"],["posts/345410188/index.html","2d11c0139acb073df427b590e5a2aff4"],["posts/3461518355/index.html","21b099195a29d055d2370929b63d8a0d"],["posts/3494408209/index.html","e53a077c324950cfc9c96e7c105cfe52"],["posts/352037321/index.html","cd7e8f6b8f490017a7b914ed9beb257c"],["posts/3521618732/index.html","84d8b23980de69003134c111272565be"],["posts/3568552646/index.html","298a29435cad5528eec28b2167a48abf"],["posts/3603924376/index.html","7a698d282b180a5a57deb73beff3b947"],["posts/3637847962/index.html","e59d090f734c1f3f711e2ed0a15da3b9"],["posts/3642630198/index.html","cc1f009c78c576885f4c5ac7d5663b7d"],["posts/3653662258/index.html","40aa761b5dbd462f6965880730800c91"],["posts/3653716295/index.html","f187b077729066f0a2e791509ce1a813"],["posts/3657008967/index.html","4882b889a1ac25880545bd2211c69220"],["posts/3668933172/index.html","812b4da0a432f3d7570b6d7caaddc028"],["posts/3677280829/index.html","2a69c0b02458915e95a3a815a5608abd"],["posts/3687594958/index.html","8d34bc6c516c5e90e2e76adf90f7dd42"],["posts/369095810/index.html","5fa84985fc9d63d573123f17ed573a34"],["posts/3695777215/index.html","21a8e1a658770f96b8239ee52f85d49f"],["posts/3736599391/index.html","a7d962f198d70e452d6b722c486798e1"],["posts/3742212493/index.html","286be5a2969365e0c38743f0de8b634b"],["posts/3782208845/index.html","ab7dcbdc105d11b3faa55672afd813a4"],["posts/3789971938/index.html","de8561c8d76ba086448dea176ef2f19f"],["posts/380519286/index.html","370887c1d7d1e7b94e321f880e93110c"],["posts/3846545990/index.html","9978467c2527682eedff446ff4c7dada"],["posts/3873710624/index.html","1019495c10d6bc77713c9c10e8a385f6"],["posts/3959327595/index.html","41a30e66ae4540d0b0d3a4c79a11350e"],["posts/3972610476/index.html","66a2eeb413bc19dcb957d55143484796"],["posts/3995512051/index.html","416cf8247299b8d8fbf9d9a402259cc1"],["posts/4088452183/index.html","9ad861464218162ccf8ac7b0e53330ae"],["posts/4116164325/index.html","85797febaa4c228c008fd04d9559ea84"],["posts/4158690468/index.html","b0d1c642ef8bd689d277bbbe5d95174f"],["posts/4159187524/index.html","4b0c545937888d29a74414eb6017c864"],["posts/4197961431/index.html","46a591b722fe3574d04e1b867ea5250a"],["posts/4205536912/index.html","118c832c0e48bec2babcb2f1ce944ff6"],["posts/4236649/index.html","0496d9933f40415553e49152f8137e75"],["posts/426338252/index.html","a7f8300332c659bc9e4566020ca65ee8"],["posts/450254281/index.html","1c67cc41fa34a8c706cb63eb835b98ee"],["posts/4891372/index.html","fb9666639ea3ddd53d5e3a56a503d6bf"],["posts/569337285/index.html","076a7b805d270013a8c9588d17e4d973"],["posts/570137885/index.html","1db7e803236b2d8a10af15d2b2ff18ad"],["posts/570888918/index.html","ffd3d9f3c10d564cfea9a0a50630b91e"],["posts/582264328/index.html","16a10d136b4224bcf915909b2510b99d"],["posts/632291273/index.html","bb755ec345eea7be200e00cc79239b4d"],["posts/70687890/index.html","afe1b8771a0576057c24093166fa50bc"],["posts/719322223/index.html","aa44d59772e6441d7b606454a3f0e203"],["posts/720539850/index.html","8be714a4024eca70746325c11a8f33d6"],["posts/786195243/index.html","80282885c460a9889d89c77d1029ad65"],["posts/795474045/index.html","85e83c4461d4b7e72d418425c20916a6"],["posts/815861661/index.html","fba50e4af183f1f05be7c8ddeee07e74"],["posts/821259985/index.html","dc54fbd2d920017315de6b5cc5269caf"],["posts/828223375/index.html","2a9d44066b22af287f96e83508e735b0"],["posts/887585917/index.html","ed2e40a9ca799853d923d16169a086ad"],["posts/888549816/index.html","608922b63e4227aac35e394a3241f6be"],["posts/906436376/index.html","b1274c12f307f05792e7af156c845310"],["posts/907824546/index.html","554fb6f761859d96df765b4d2662e7c7"],["posts/927393529/index.html","38fd92d6d3df2bc2dbc6e0b00499faba"],["posts/94443781/index.html","0e3fd245dfe0fddec117fe930101bba1"],["tags/2014/index.html","cc466f7232b31e014222676d706258a4"],["tags/2019/index.html","2fc126b683344b53a044fa2c21c92817"],["tags/AI/index.html","299eaedd26b643b6bd708e2957622845"],["tags/AOP/index.html","61aea5c40acef9ba4227a4d7cc4a3b53"],["tags/AR/index.html","ac54266a035c1512f61c6e199e7a1bd2"],["tags/AssetBundle/index.html","c70b1aaaeeae942915eae45488b91600"],["tags/C/index.html","78cd4a3412ab315b94238ac9f1e7542a"],["tags/CDN/index.html","57a6ad70f90227f687b6d9e68c9b161c"],["tags/CG/index.html","2f68485f9f04c5daed750a161df4ad2f"],["tags/CI/index.html","0738b555e20b1349dfc14d82b24cc9c2"],["tags/CORS/index.html","83f27050d6f262495384a41de9ca03a4"],["tags/CSharp/index.html","63767692321aa761fee95f7a184d1d28"],["tags/Castle/index.html","c26817bc88188fea4d67c4a826fe8b3c"],["tags/DBeaver/index.html","7ca5f0dfc54f1bd36811d6f28d31d57f"],["tags/Docker/index.html","0ce144e8117648ada9188212726e3156"],["tags/Dynamic-Proxy/index.html","9fbf52868c332ada8b9458710fb45960"],["tags/Dynamic-WebApi/index.html","7e2d943521b75f52bba739b8e601c428"],["tags/EF/index.html","ca5ed33a860393723dd02ecf83e71142"],["tags/ELK/index.html","72413df07f58c39930f91825b4e9e6e2"],["tags/ES6/index.html","ffa0e7ea2b3392c6b5da573604b0197c"],["tags/EasyAR/index.html","ce857512917ca98a3b819fcda1b4524b"],["tags/Excel/index.html","4021ad05d6edafd9930c314b6f307101"],["tags/FP/index.html","e78ad0a86add305bee77aee4ddcebe3c"],["tags/Form/index.html","d1f3195c1b21995d08c9733b4768a8ae"],["tags/Git/index.html","b99d452cbcd1c1f451e43667e0e4cfd1"],["tags/Github/index.html","979de4c58820f31639ffde3ee7932fdd"],["tags/HTML5/index.html","efba8459fe5c198053949de2cda4fbc6"],["tags/HTTP/index.html","60004e417becc01639196a00cba8134d"],["tags/Hangfire/index.html","2e3f2078b12487e3997b644cb6b66cab"],["tags/Hexo/index.html","1859026de6841a40f965ecd8d80f61f3"],["tags/HttpClient/index.html","9b3b48b9f0ec1a3bcbb4a52ae2f87f04"],["tags/Hyperlog/index.html","cc3affb10c48c14620d043e3ce87ca37"],["tags/IDE/index.html","2920b8935c062bc883e8c783af8298e1"],["tags/JS/index.html","f84c6a0547c84f0fc27449dbab62bfb4"],["tags/JSON/index.html","9a96d872b5e6d9e8367b55383fa10954"],["tags/JSONP/index.html","6a9701484ca11518d807325ef38a25c3"],["tags/Java/index.html","454220eca8509e8f7a07d1698174fd6c"],["tags/JavaScript/index.html","846377a80b1b8905ac0d7dca849ba1b2"],["tags/Jexus/index.html","d45111f996940a7c4163e148c7a91feb"],["tags/Kindle/index.html","73a5b2e1867411fed1d2f77af50f3c26"],["tags/Lambda/index.html","3f08fb703dcd21735d9ff1184ba08bc8"],["tags/Linux/index.html","32886a19c502b10659b8b20e9cbc6987"],["tags/Liquid/index.html","ffb59bea2770006b2d8c97cc14653408"],["tags/Logger/index.html","65b4c863d9439031ad94224195ad258c"],["tags/Love2D/index.html","0dc081d8c4792fb48f98050e0cde3a66"],["tags/Lua/index.html","ae26caf1dd664bb1c0cb5948b6709c3e"],["tags/MMD/index.html","af9807b4604c83e1dcde4d48cf1a008e"],["tags/MSBuild/index.html","fe8efe44ad8626bba41ee2c4efe5bd7a"],["tags/MVC/index.html","99e33aeec2b667cd60e86c7040b19bfa"],["tags/MVVM/index.html","4b4bba4323a568a12a3f53339563744c"],["tags/MapReduce/index.html","2fe4b23e45467891d15c7159e73c62b9"],["tags/Markdown/index.html","ba271d71ded1335c2c6fd6356dad326c"],["tags/Mecanim/index.html","883f598f0e60b71cc5bd9ba1c65323b1"],["tags/Mono/index.html","ab15080155468d5104dbd63abd1c302e"],["tags/NET-Core/index.html","0baff0f158bcc62345d04785eb80364b"],["tags/NET/index.html","99ba3871966b9b8439216440ba1051fd"],["tags/Nginx/index.html","9a47b7057e6fa874ab78837e98d1655f"],["tags/OBJ/index.html","a715f1bccf496b5e462b4f4127dfa7c0"],["tags/Oracle/index.html","67ff1d6fcba8cbb35ed14b7879d68475"],["tags/PL-SQL/index.html","224e84b51e3b3bb654c1e1b5052375c2"],["tags/POCOController/index.html","8074b946347c7657f25a69df56e729c3"],["tags/PWA/index.html","43c19e8909e65522fd9ae7b24ab9171a"],["tags/Python/index.html","cbb520c27def3e16d7832beafff8b5c5"],["tags/RESTful/index.html","8555e6da2b39c572dd7481247f06ff04"],["tags/RFC/index.html","60d135edaa0e2a33dd094368d3493d3c"],["tags/RPG/index.html","767344820825ebe77b93791070bdcbc9"],["tags/RSETful/index.html","c12a4380efbd175cea9a0487c834af84"],["tags/React/index.html","1a521c51deba415c20b4bee1cf618d19"],["tags/Redis/index.html","96e69744cd3b3ec258a1d5cdb0a34acd"],["tags/Referrer/index.html","fde787453f5b2b1c8a1fb198890bce4a"],["tags/SDL/index.html","be1e6e1b26055b7dd7e1082cfe201acf"],["tags/SQLite/index.html","d6666bbcfb3ba7d73c3446205ca5ecf7"],["tags/SSE/index.html","c346eda6cccbafa964c8e1b470b196f7"],["tags/SVN/index.html","fc85beb7eee6783e5d80504271911d16"],["tags/Script/index.html","808e39b839aba0bfb33a2a90c2745699"],["tags/Server酱/index.html","93912707fcc2c049e3e1b877a44df697"],["tags/Shader/index.html","35681738225125f6eaf16fd54dab9abb"],["tags/SignalR/index.html","1924cd4c61ed838cc971358b06a11bd9"],["tags/Socket/index.html","6958049cf3adc8db64783ab6b4689692"],["tags/Sonar/index.html","851b8d2e5436e843562a26734ac19478"],["tags/SourceTree/index.html","28586638ac4c9d9972633ea0c1a686ba"],["tags/Sublime/index.html","4d7fe6e08e961120f6cefbc46d18058d"],["tags/Swagger/index.html","1386bd7c0f4ff69296a539a8dad5e658"],["tags/Trace/index.html","85ac4fe40009f3e34c4f251a0ad7e1a5"],["tags/Travis/index.html","c12856e852ce74213e69a934beed6827"],["tags/Unity/index.html","be685f3019f51211e0c305056d7f1625"],["tags/Unity3D/index.html","08d5a4e4270b8974773e8ed1dae6b727"],["tags/Unity3D/pages/2/index.html","c6bce9529aec08ac227a5b83387ee97c"],["tags/Unity3D/pages/3/index.html","27bb5b7297be7708d665124199c9bdbe"],["tags/VSCode/index.html","75748c8873ca9946aafb2f9b8933a455"],["tags/Valine/index.html","18ad73093eea62fddb607460e6182866"],["tags/Visual-Studio/index.html","444ff9db0971ca30cd226a774acb65d6"],["tags/Vue/index.html","e4afc46284e7c36006894be4275a9d11"],["tags/WSL/index.html","b43c6a7ed3a1464a4876ebc728fedcf7"],["tags/Web-API/index.html","557a28a4d3e733b3b74c7a950060e2cf"],["tags/Web/index.html","176ca9a3bdd0051e00650f04dbee1fdb"],["tags/WebApi/index.html","dd7abacb8a5b41ee95ce56ae196ef5f2"],["tags/WebSocket/index.html","236fc9b8cadd0d1fa75d3ff6cfeb2b4f"],["tags/Wechat/index.html","133b53d9dc5104089c6d72769c4b3b3c"],["tags/Windows/index.html","0602e8bc82dd09a2503adf33f4aaff0b"],["tags/disunity/index.html","b2eb68c096c52340d211eb3304e33cf4"],["tags/index.html","b84b9cfe31d200d442530740de4a782e"],["tags/jsDelivr/index.html","283a17850985f174bd728b50363a9820"],["tags/matplotlib/index.html","430e8e8a3cc1c2d35004ec1c44bb3cc8"],["tags/uGUI/index.html","2ced90431e8d6a60ae5b1f419834ea15"],["tags/zTree/index.html","0a3e2ee605f065cdbd95113c9270b7ed"],["tags/一出好戏/index.html","dba791cfd0d4b5b2765c7960110ec2eb"],["tags/七牛/index.html","c1c0556a8f1362e7276d420af075af28"],["tags/主从复制/index.html","d08204b1af4e593b251768e0823da52e"],["tags/事件/index.html","e29b68f1e058237186c636b3dcabdee1"],["tags/二维码/index.html","774695085e295b094032f7c2fb71545e"],["tags/云音乐/index.html","8332784ad1ac9a797b13c8c868ae3ce7"],["tags/互联网/index.html","c50e40b375d3575ed718e3ef740a44af"],["tags/亲情/index.html","5240ce79fd0cc6a77652d37fc8ddb028"],["tags/人文/index.html","c95756a9abab162e758f7e1c751cb47a"],["tags/人生/index.html","34d3c129c22a037dfe8bab470344f123"],["tags/仙剑奇侠传/index.html","8bd9bd64db3c52fab81a1e985f901db2"],["tags/价值/index.html","40fe0db6a17ffd85e431d77778358f37"],["tags/优化/index.html","5ce5069069b06d6668aaec697760bf47"],["tags/全智贤/index.html","2b77b0fd22659664e6f535a52c420337"],["tags/公众号/index.html","edcdf0457f77a7105604413ff0d7fdba"],["tags/关卡系统/index.html","18b9d46ff54c45f80bde5909ee8a1241"],["tags/函数式编程/index.html","acc4649b93e74c4d492e94b935c670ac"],["tags/别离/index.html","ec35f737ac44c7b1719d5378e9b8366e"],["tags/前任/index.html","3ecb7875c5571265b9a5cc11d321d664"],["tags/前端/index.html","b05a146a433546fef9cac35040d53a78"],["tags/剑指Offer/index.html","2667d524bdb10dcc8a9d7921966a44a2"],["tags/加密/index.html","f004daa6b63de37d20b0339a362e1e42"],["tags/动态代理/index.html","f31762dfc8b2bad232fc82744b58577f"],["tags/动态加载/index.html","1a62964398aae17faec5e0b711b2a4c7"],["tags/动画/index.html","06751b202befec67284a8eb8a663a3d6"],["tags/单位/index.html","3dc44f0611756e998148609cb0b45524"],["tags/单机游戏/index.html","23ef7ddd6d5a8dc4fb5ecb8a8228ec72"],["tags/印度/index.html","7ac0d2557c012332bb284344ab28269f"],["tags/历史/index.html","57200e04041c4dcdaa23f0e8c4d0c825"],["tags/反编译/index.html","7c5a62d975de7e7165b384a912e19cc2"],["tags/同步/index.html","f1068241fa65762695a3a9e397ed933e"],["tags/后端/index.html","c3a0d384454f8cdb1ecb5604dd4c61fa"],["tags/命令/index.html","1aa68371ea2f8e2c6ea6ee035f24e3bb"],["tags/和平/index.html","2ea170f56d3e697ba9d4b791cc8a0c5b"],["tags/响应式/index.html","a9dd5fd1dbb4fd742a08f51614f64168"],["tags/哲学/index.html","5f09fe90335fb161637df92c9d166f90"],["tags/回家/index.html","178ec5a7d7a4ce36c3ac7be1db0dde7b"],["tags/回忆/index.html","a6752609a5ef5145aeb6fed6a6eb2f42"],["tags/回顾/index.html","fbf779c7169431309c2f58b48436cc67"],["tags/回首/index.html","78c2e93da36e093b640e33156f5c2073"],["tags/图床/index.html","a3e2f1670bb2877a119d76c7aeff93d2"],["tags/图形/index.html","fcd94c5c9b8e35ae736476a5eaa9752c"],["tags/地图/index.html","66ee2fe38f98ca1a83c0ea6cfc1c2c83"],["tags/塔防/index.html","3f2cf45d2a0e562508b6bd4839142f0f"],["tags/增强现实/index.html","e062ff8ad8d232d690e666eb37046c0e"],["tags/壁纸/index.html","9f42beeabc743663290b48db9d73f6e9"],["tags/夏目漱石/index.html","f9e076ab224e3f3ef71f060b095ffb84"],["tags/多线程/index.html","3fc3d8e9bc085e887961f885f4eefec5"],["tags/大护法/index.html","ff004932550013f651849ac522c39934"],["tags/委托/index.html","759d2063dc1baa42ae4e5440bf9db87c"],["tags/孤独/index.html","906d707615bedf30149c95de02c02dbc"],["tags/展望/index.html","59286c0d74e1131166d6b54759151c7d"],["tags/工作/index.html","56e166d3c9b513752805881d2d24f420"],["tags/平凡/index.html","059f543926d81c89c0e343ec2045214b"],["tags/年华/index.html","7f5d1c3a87578969318e00c857ca2f69"],["tags/年度/index.html","275201699692248fc0573f5b31c3c76a"],["tags/开源/index.html","7eb78c548a0539441d898ff531edee44"],["tags/异常/index.html","723bf2ce9bbac9ed38713b5620ca0054"],["tags/异步/index.html","19b3de10af1937f68ee1351d24bb8796"],["tags/引擎/index.html","c4546d51b1c77f1676528d5904e2a191"],["tags/影评/index.html","5e2abe6476b1bac632cb5012626fe0cd"],["tags/微信/index.html","1328392f921606fd088c17247bbc9e66"],["tags/微博/index.html","39c6b262e61b2c09f756f39d8e4e7832"],["tags/心情/index.html","57135c5ea70e6af3a441a3d61386962d"],["tags/思维/index.html","6dfeb9826bb2b83ed88a1d7e3de918fe"],["tags/总结/index.html","43919d24379d15e4d0bebdaf3432226d"],["tags/想法/index.html","60cb94427162aab3c304c049ac998d04"],["tags/感悟/index.html","119f536630ae23c055fc0c1c5c07f980"],["tags/成长/index.html","4610468eef87d4fd455bd514749a9e6d"],["tags/我是猫/index.html","d8e54ca7bf66992a31e1788d3308bdd7"],["tags/扩展/index.html","65e91c781175dee341ca4d6e4078289f"],["tags/扩展方法/index.html","e7de8a803aec9176ba2ec51e1d514e78"],["tags/技术/index.html","a23d7434b5947cafb4f9363a0a291a61"],["tags/拖拽/index.html","402ef3fd157c59d29ded3c7ea01e4687"],["tags/插件/index.html","24b29eafa706c67dd4416a26eb06b888"],["tags/插件化/index.html","181b39701b005d9625ccd95212b13941"],["tags/数字/index.html","e2589b2d911107b8d107c004384379bb"],["tags/数学/index.html","f2eb5d27c2b5bb74d8063fb0aa7a11f4"],["tags/数据/index.html","df7e674ba5576b3ed7ff905a0157baaa"],["tags/数据交换/index.html","c6eb2299164d419aff5efe72b5e9a2bb"],["tags/数据库/index.html","29a66fd5c41530b384deb19fdddbfab6"],["tags/文本分类/index.html","a5ceabdfe989ae31c5b290fb959ca571"],["tags/无问西东/index.html","8105718649c53a5949f92067af0e1dd9"],["tags/日剧/index.html","23d2afdaff4cc0751d1e9af35eec8a12"],["tags/日志/index.html","21ba58ecbc81859a7adbc954257e61f7"],["tags/日本文学/index.html","bd246e48b236c1dddde357c0da719dfa"],["tags/时区/index.html","2ec464bd45dd52bb67ba56d22e465e98"],["tags/时间/index.html","96c8eacefe51807d3317c315226544b0"],["tags/服务器/index.html","5a32414aa4e28f1cb456de3333c920f1"],["tags/朝圣/index.html","c9a87b872a1ecf650ca81f61790c1abb"],["tags/朴素贝叶斯/index.html","a066d2eec52e8220d5b7672d48077623"],["tags/架构/index.html","53ba68f78cdf770b1e222d0a4f5cdd74"],["tags/标注/index.html","0b2343413b9b6e339a1fc78bd02bb9b2"],["tags/校验/index.html","dae9ca78dbf0984f16c326d66fa8513c"],["tags/格式/index.html","f8466762e1afe09dd9d58fe4b849cb6a"],["tags/格式化/index.html","7463e420f7ec837d95480863890f27d7"],["tags/桌面/index.html","9af98c81973a975bdae41d2b65185b31"],["tags/梦想/index.html","4b11e0f357a7fab5f556fd822c8a24ed"],["tags/概率/index.html","35cd815ac402a14b043e292a3a186697"],["tags/模板/index.html","3a9e9097c0eba5e918242205223ec6a4"],["tags/模板引擎/index.html","958e2419a1dc0a9acc3bfa3910c438e3"],["tags/毕业/index.html","223970bd6d11ac08fcb4a6996c66fd75"],["tags/毕业季/index.html","0705b8e9c3a81acbe731018ee03269fe"],["tags/消息/index.html","54a7cafcf684ae6927d5c8bb6a0179af"],["tags/游戏/index.html","e6a0e7540830cf6e44d5840f9a81d1f4"],["tags/游戏/pages/2/index.html","44503ce67ddf5f1508f09652fd38e6a5"],["tags/游戏开发/index.html","f8e8a1793e3e02e840c3caba6d1f71ac"],["tags/游戏引擎/index.html","b62aebb032cb9b67c033dac869accb46"],["tags/爱情/index.html","6d13d954f0f151a630d14bb8024a9b82"],["tags/版本控制/index.html","0863597b14e357219f5979876901d2f4"],["tags/版权/index.html","00494e466b2224158b51e98be31b125b"],["tags/特性/index.html","f21e65e5bc104095b4b982b1ec0b0e4b"],["tags/状态/index.html","ac045361d05f21f2f553d00076863c02"],["tags/现实/index.html","264403cb2c9ee8d1f6f11faaf1e4cbc3"],["tags/生活/index.html","ba5dd8f1000e5261757271d21fc9dfdb"],["tags/电影/index.html","094d5948d5947f06ceeec39878ed5403"],["tags/画家/index.html","d5cd319430890356e337c884bafc02f9"],["tags/知识共享/index.html","1f207f5a1b84e12384fb780341e71eee"],["tags/矫情/index.html","3a456ec16466a2ad5ebec2fd431c1b44"],["tags/程序员/index.html","c76e6c36bc7eb4884426050f9ca919c7"],["tags/穹之扉/index.html","08dd65891cab77272b5d59187a5e9b95"],["tags/穿搭/index.html","06b50dd7da8b95274ee340913f2ba270"],["tags/童话/index.html","c6587e3e59765943bb682d4568e2cc85"],["tags/笔记/index.html","e12972f2d67ea22cf155b95114481231"],["tags/算法/index.html","b846cbed3c1970c5a0c89a899405cb5b"],["tags/米花之味/index.html","63ba16ce2fe82df7d37403c5b352b0a8"],["tags/缓存/index.html","6ea58cbf7e412b90d900357da0772019"],["tags/编程/index.html","9a0a73412757e9066c67d4bee90fe33d"],["tags/编译/index.html","86443f522eb68f05c9f579e8dda7ac58"],["tags/编辑器/index.html","17d39f241ac76f352b95eaf569db95ce"],["tags/网易/index.html","6ee00ac5d46abbbc3a97c81a5e3f7e48"],["tags/脚本/index.html","b446d73fa1c409304e70c78f76936f36"],["tags/脚本语言/index.html","ddee35297f68f5dc072be1d8f04e4f98"],["tags/虚拟摇杆/index.html","624d2a7de67eed495751f23d1b5e0f13"],["tags/蛋炒饭/index.html","fdc20a6f6bfbd65c8468e79c1cb335b7"],["tags/表单/index.html","f357c5843cfd9a3eb951a16d2233f63d"],["tags/装饰器/index.html","46d796630b91480daacdbd853e0de4b1"],["tags/西安/index.html","0d9502f12e8d1268c4067098482385c3"],["tags/计算机图形/index.html","3bef19f6e44fd64fea65e25c6637d9c2"],["tags/设计/index.html","fcd29ab01548b5c53e3c252d4b7b31b3"],["tags/设计模式/index.html","f9f87e7d0c380be41dbfc9f643289b81"],["tags/访问量/index.html","09efe9453959dd87be09453a88b8e961"],["tags/评论/index.html","e3150ba00f5e42ed41f46cf9bde522a6"],["tags/词云/index.html","f06444fafb68b083fbb6e5b23fed3b88"],["tags/诗人/index.html","b03470d77b43c368ba7dbd556c985127"],["tags/语法/index.html","154d035172d509e69693bbc9cc646c88"],["tags/请记住我/index.html","6b2089655bc33afbab7e703ba3beeec4"],["tags/读书/index.html","d05a1a81193b7a351603009d06c5ef35"],["tags/读写分离/index.html","80140657383db652d615040468672893"],["tags/调试/index.html","de720b9bddad6d68beee789fb4eec272"],["tags/贝塞尔曲线/index.html","53c993000c5c08db7720bf5abd018229"],["tags/贪吃蛇/index.html","44c3c2fa6b6c502b21ad9f43ef752805"],["tags/资源提取/index.html","00f5ef6247a9797645338ce5c68d357e"],["tags/跨域/index.html","201e4be289886cc46cefe8cfb88711dd"],["tags/跨平台/index.html","451d124843d9a9faf4475a3316e03de0"],["tags/转盘/index.html","35a95b543029a2a149a4611aecad57f8"],["tags/迁移/index.html","bee81e37d679d1ac4891a1b63232e6ac"],["tags/通信/index.html","d9275142e519a2f720a758780234d32c"],["tags/邪不压正/index.html","36110bff5eea742ba609661e91ff950c"],["tags/部署/index.html","154ff2a4e0fcf7ff11a0f127763d0e5b"],["tags/配载/index.html","69c13df065cfe5c4666ecad54aced8d0"],["tags/重试/index.html","e800650e14e32d3c6508b1ed902ce364"],["tags/长安/index.html","50ce90285b170194d65d49e81adcabfe"],["tags/长安十二时辰/index.html","e50e11700bbfe071a3d9bc534afe2d9f"],["tags/阅读/index.html","0f5b184ee3491ac0d9b27dae35bcab56"],["tags/阿里/index.html","cddec97b6c94fdbafc66afc5d71151e9"],["tags/随笔/index.html","956b04f9dd4f2fe9140a62bd4846bf32"],["tags/霍金/index.html","3fce4d403e09edd03d5248e94dff05ff"],["tags/青春/index.html","ad1f66c9d466eef4c678b59d4d2b9d83"],["tags/面试/index.html","cdce9b7e74baf23828fcec8c64dde107"],["tags/韩寒/index.html","691cc4745b7ff4e8e9912ba93ec9d0a1"],["tags/马尔克斯/index.html","39e7399639a6ea20f24f4d55d77c4c16"],["tags/验证/index.html","b371981bbf3e7cbc92e661e7525da52e"],["tags/黑客/index.html","66bed7dc39cf45cbc7e6d8f2bb975421"],["wiki/index.html","70ce0fcffb8062c9eb2aafd9aaed3394"],["works/index.html","aa8bfe0a530c20c447f47e83b644805f"]];
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







