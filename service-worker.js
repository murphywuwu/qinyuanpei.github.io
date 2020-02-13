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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d18bab277738dd524d873907e5825248"],["archives/2014/12/index.html","46e647c730ec8e6fd04b49d8c3071ada"],["archives/2014/index.html","7d9ff10c9ea321f92c819b8113676e47"],["archives/2015/01/index.html","bc6015083160df28df32efa0359f128c"],["archives/2015/02/index.html","51c900d9550a96c5d5dd921a3a79290f"],["archives/2015/03/index.html","75d78a3d975dcf36cb70d34bad93490b"],["archives/2015/04/index.html","c14b65fb179ca80865248a1cae67077d"],["archives/2015/05/index.html","556df30481ac8ef81a2a40702fa5a6eb"],["archives/2015/06/index.html","c83a038261878ddf96234b81e3ffd69e"],["archives/2015/07/index.html","ee7910c7e94e197be751e7af7950caa4"],["archives/2015/08/index.html","a0682c2cab7cf2e213376bcdc4f2e477"],["archives/2015/09/index.html","1c26d430bd42699dae06c37fd710692f"],["archives/2015/10/index.html","7119f311fc4c6669db04fc322c935204"],["archives/2015/11/index.html","8e6d27814be72ab66b922c4eee6f0055"],["archives/2015/12/index.html","5646e78097eea293479f3e04df25f030"],["archives/2015/index.html","a1d6f962d63d63451dd86fd2422e8798"],["archives/2015/pages/2/index.html","f91cc573d6bdd1790bb3a0f470aef8bc"],["archives/2015/pages/3/index.html","6e1bbb3462458f00bc8190ecd9411cd4"],["archives/2015/pages/4/index.html","4ecb2f82c00d2587192f67e53ae92d61"],["archives/2015/pages/5/index.html","64cf07d1da30ae34e8d476ffe4aa7452"],["archives/2015/pages/6/index.html","81af99fa47e32aefb90728152a93280d"],["archives/2016/01/index.html","139fec8f91648691d5841b424b1a150f"],["archives/2016/03/index.html","eadbdabf49c4c894da8cd6083dfffd1b"],["archives/2016/05/index.html","ab0ac00f78e91b1c68ee9cd2b936917a"],["archives/2016/06/index.html","d46a5ecf9110ae730479757466559466"],["archives/2016/07/index.html","3066aff88456fcbd702499895051c492"],["archives/2016/09/index.html","5dfa521a9e72da2c65cc1b6028a11e83"],["archives/2016/10/index.html","6d17dddcef4f2f65c2061161f9a10b9b"],["archives/2016/11/index.html","e352870c92aff27ec3c15c93703fb705"],["archives/2016/index.html","6bb7397f04987d9982246ea9bfa5ce6c"],["archives/2016/pages/2/index.html","4b375b3d83492458ea80758826533bf2"],["archives/2016/pages/3/index.html","8dcf0bf15da178e616de3bb078926a43"],["archives/2017/02/index.html","32b8b0ea2cdbff8e699d51c8710fa9be"],["archives/2017/03/index.html","ff50ca1c2a5c52945052d7497c4b5c57"],["archives/2017/04/index.html","9f52257c4549cf00c3085c1ba08f89d6"],["archives/2017/05/index.html","d45122c523c9189a539d4775f82253eb"],["archives/2017/07/index.html","b3543c2406e029bb67792c8fdf118396"],["archives/2017/08/index.html","8a6dda038f6bd561d1bc4df9022e90c1"],["archives/2017/09/index.html","58dfc9a84ff07e91b987bf874a33f794"],["archives/2017/10/index.html","036643cb66ddd3dac4c9bab5794a6a13"],["archives/2017/11/index.html","52800de14c62e3873f6c58d77fc97048"],["archives/2017/12/index.html","bb24d0fa1bc3881657634c4e9be51f80"],["archives/2017/index.html","397785116169bd41bd417bb7cea79144"],["archives/2017/pages/2/index.html","bb66a60debd94a74c9b94796a4cc975b"],["archives/2018/01/index.html","132c7dcea040780bc3f63776f6f728c3"],["archives/2018/02/index.html","1467cb056310644bc06faca542bc9435"],["archives/2018/03/index.html","8b1a2fb1cd2137fe69a32c628b5e80fe"],["archives/2018/04/index.html","e3aac46b071152f7dcbf4d54215c8c2d"],["archives/2018/05/index.html","f1c4a56d58b1045645818f28e1c1c650"],["archives/2018/06/index.html","d558198159608e27f6b5596723f17bd2"],["archives/2018/07/index.html","daa4a3357218bd9cf973c941c91d73e8"],["archives/2018/08/index.html","41422a7d110f0b9a048ba25689261698"],["archives/2018/09/index.html","a4d44e00ec89ac8eb3b32a255b38eeff"],["archives/2018/10/index.html","535a3de7937dfeed0bf66e07508d2173"],["archives/2018/index.html","ce7161eb8e31e3014b6fa5676a07cf87"],["archives/2018/pages/2/index.html","1ba3268a2010403c7499d117a55c2569"],["archives/2018/pages/3/index.html","92cbc25ca3de2f7d3fbc1a5191a1d7c0"],["archives/2018/pages/4/index.html","2b9b9fd3cdf39b35c3344774171628c0"],["archives/2019/01/index.html","85c27d53173e367f83ff74c6d72b539c"],["archives/2019/02/index.html","f4d13d8038a344d4d21e2f1fcea5ea07"],["archives/2019/03/index.html","919e43989d2508c5300e2cf1a7582b24"],["archives/2019/04/index.html","5e07aab0fe404a3b9029d61dbcc0faac"],["archives/2019/05/index.html","61fa17087ab27e930bdea9fb4ce153e8"],["archives/2019/06/index.html","c0d98a903dda12496cd61b9684d636df"],["archives/2019/07/index.html","94058076500cf1c2e854f195768bd477"],["archives/2019/08/index.html","7968e6579b8a36cb7db51bc8cc742443"],["archives/2019/09/index.html","0cad2ffc9c118644dd8ecfe96a58e2e9"],["archives/2019/10/index.html","6330721b315774e43132f3cc95fab9fc"],["archives/2019/11/index.html","2d61c873beee0976e4eaae58de7b58e1"],["archives/2019/12/index.html","1e258e010d83cba45454512543feedf3"],["archives/2019/index.html","a24206d0365f65fcfbc22b0556c2c875"],["archives/2019/pages/2/index.html","7062a2007cca8aecdb312ded4f47b5f6"],["archives/2019/pages/3/index.html","e79d7eaebfdd80c3d62783a61f729b54"],["archives/2020/01/index.html","c889da034ed1ecf6d15dcca0a28bfec9"],["archives/2020/02/index.html","08f1586707008cf0377c10fae1e5c743"],["archives/2020/index.html","8be62b4f08d6ae18e83a9ae417ccef85"],["archives/index.html","c3931fcc7c51e6d3a7b1b3722434154d"],["archives/pages/10/index.html","9c6d57fd15ea4e2c65e5ff5d78061ff6"],["archives/pages/11/index.html","dc61437aee95c5ebf1eb44493f9a4029"],["archives/pages/12/index.html","d5d0668c16920affb3dd81fdc002ea1e"],["archives/pages/13/index.html","0d2aecd735ab3e872ed31bd53e7591b3"],["archives/pages/14/index.html","0ad5200349a2a411aadccf99bb547187"],["archives/pages/15/index.html","efe18e9b916753beb1671d04407aadcd"],["archives/pages/16/index.html","c05fa1915eea8da3bfb3c323555dc361"],["archives/pages/2/index.html","c3199f446b2b86b9a9564cd1b536c46c"],["archives/pages/3/index.html","4f0b41f5e8fc379b1d57899cb773d4ab"],["archives/pages/4/index.html","627469d3acdf33444b059689d74a4aa3"],["archives/pages/5/index.html","9b78a94ab1ecbae98dd13773739b5bec"],["archives/pages/6/index.html","8dd536b12effcc45711561dceb928daa"],["archives/pages/7/index.html","1c1180e5547eea0479f3738e492d370b"],["archives/pages/8/index.html","f729e6fe541cbc9f627320c15da9580f"],["archives/pages/9/index.html","06a336a0c4508912e755885bbaa747c0"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","445485fb80521d6d53aa45215ea8da54"],["categories/Unity3D/index.html","f92e2830917109affc7c494309568555"],["categories/Unity3D/pages/2/index.html","908abd18a39f0bd7c3ec4c2c67badd2c"],["categories/index.html","33b27863fa2cb1e908e89b9abbdbdb99"],["categories/人工智能/index.html","026a3d5249d8b2f9449d2df5d45562b9"],["categories/前端开发/index.html","d8e91c75cd574faa5bc5f20aabc523c0"],["categories/单机游戏/index.html","5168e5b478e43f23793ca16dc69d8d29"],["categories/开发工具/index.html","03d4ee08e809cd3a529659322ce86aba"],["categories/数据分析/index.html","117877832be41a4a577c2f803d68e5e3"],["categories/数据存储/index.html","e8787a2dde2410e14dc087ff46dc0ba9"],["categories/游戏开发/index.html","058b95e7923b4efe9c3c88077855e2e7"],["categories/游戏开发/pages/2/index.html","5db8c6683f591a863600ced4fa6d02ba"],["categories/游戏引擎/index.html","d7f42d85ae0e7c8bce52148b77a5fb8f"],["categories/独立博客/index.html","675d688b27074ea3a046c42852d241df"],["categories/生活感悟/index.html","aeaa50058963152ef0360b3ca055efd9"],["categories/生活感悟/pages/2/index.html","9b5ef716f41c8362734831b211b4cebe"],["categories/生活感悟/pages/3/index.html","5a3b420ada93e8740b4191f181359100"],["categories/编程语言/index.html","d1cdd537cfd2616a2d0dc7fbcd0d0121"],["categories/编程语言/pages/2/index.html","1d58aa75253d596c2b2c70352c13f0e5"],["categories/编程语言/pages/3/index.html","8c1b6aa67f57fa2e1062125b3c845c12"],["categories/编程语言/pages/4/index.html","f288d376710e15c890df2dd08fe457be"],["categories/编程语言/pages/5/index.html","3d059df865bd5f722d224664f1b4d7c6"],["categories/读书笔记/index.html","10002c1ada8699dc135cf3d8da8b70c2"],["categories/读书笔记/pages/2/index.html","8480988c3b7657f08303ff9c19e12651"],["index.html","1cbfabdd22f5303087552b1a6f77b6be"],["movies/index.html","3674dd4901f72eaeb1ff4be8a43e0bc4"],["musics/index.html","85154d7058aca22efa3534af14997ff8"],["pages/10/index.html","6ea3fa3aa73fd2921fc590f11878f0ba"],["pages/11/index.html","4094d2141a0f06d2b85272183d15e938"],["pages/12/index.html","4dbf09e99a0849e6607e6886f615a258"],["pages/13/index.html","0ddeed769faa1e37f8f5da9c556877a9"],["pages/14/index.html","12c645ef778fddbbd65d865c1d9419b9"],["pages/15/index.html","8a7a910f8fc16c50bd0f831e7f42ffd2"],["pages/16/index.html","68c18bb97ad8b8cc433d1f467b4995a3"],["pages/2/index.html","65a890d489d9299d7e61ac3c64098d66"],["pages/3/index.html","d29855d516f4f61375e164b30357aae5"],["pages/4/index.html","49649ec5ab17d28c0268733fcf9942c0"],["pages/5/index.html","2ffd8d0bf5169c938d20ef18c118c816"],["pages/6/index.html","eb57e0fac455d485e7ad61330b6326b0"],["pages/7/index.html","fa81f2923ff0a308c0684263441632a3"],["pages/8/index.html","34fe342c98f6da45aa94ec0b859fff7f"],["pages/9/index.html","affa5d70b14a4072ae89f74c2638bde6"],["posts/1059499448/index.html","a20e7ba27b8b6c616789ed069f5c8b17"],["posts/1071063696/index.html","8eb9824eaa2c9da3a9f4af044fe95c56"],["posts/1082185388/index.html","541a16e34b4b433ff4a06bf8f6adc0a9"],["posts/1099762326/index.html","3a6974dc1f56138ddf9b7d646971ce28"],["posts/1113828794/index.html","a2de84c46c8ae49bbacaab35ac74bf52"],["posts/1118169753/index.html","f3988adf78061ca2a1cdaf86894ba799"],["posts/1122710277/index.html","c2f9d06860b0d9b080c4346ebf66bcaa"],["posts/1124152964/index.html","caf221d485837d4bf9dc9fdfe4ada4b0"],["posts/1127467740/index.html","a3b98d41dfe856182bd2cb091ce013a9"],["posts/1150071886/index.html","5ec1724ebb3e4a3c9e6aa5f4b7551a33"],["posts/1150143610/index.html","5b848d7ce11dbee7d25446f4c2f2fdd6"],["posts/1152813120/index.html","ab7a481000fb917d1dd6c95f6a81fcc5"],["posts/115524443/index.html","c6ac6aebcc05390f62b8d15693a74221"],["posts/1156673678/index.html","d8f1f67eaa7c82a772bbd7622c72f51e"],["posts/1166840790/index.html","2193977900776003f495f769fde372f2"],["posts/116795088/index.html","39c39c473636ada9616fa9343c46eb37"],["posts/1176959868/index.html","d4811ec63424795f2fed76bfd21646ba"],["posts/1190622881/index.html","affc1fb6b374b3ecb85e4f52ead1a9cf"],["posts/123663202/index.html","b5a05cb20f5a3a327fad632d9814c5f4"],["posts/124807650/index.html","d5ff5e56e5540ad4a6302f05dc0d94cb"],["posts/1254783039/index.html","e609268303ca0dbf78495184b75a7bb1"],["posts/1320325685/index.html","f42926f8a0cf47a042804acdaca2b173"],["posts/1329254441/index.html","16deface3eec2257495d3007019b9d85"],["posts/1357715684/index.html","a37d8bdc602f27e8eb58824174af9bf5"],["posts/1358971951/index.html","d1d8e53a3d9914ebf12e001fe6d52b4e"],["posts/1386017461/index.html","cdfdf75a0f4255d1498654f9ac1aaacd"],["posts/1394521917/index.html","70cffcb4506650914c55ec791f034c7d"],["posts/1397717193/index.html","8ce48126604d2efbcb6bf05487fec4a2"],["posts/1417719502/index.html","bffad30e4459fd95f9a1101831af3e15"],["posts/1424645834/index.html","636d1131059f0edd6d273e03a3de5410"],["posts/1444577573/index.html","4bc2cbded4365fd484482234bb20ee34"],["posts/1467630055/index.html","8a023a220b0c2a18a8e011a3af2329cd"],["posts/1478979553/index.html","ea0644b6d396e73e9bdb00a80c63c2cf"],["posts/1540537013/index.html","776184216063b6978752bf63ba738418"],["posts/166983157/index.html","ea65efe5a3ac7b43cbfab3a305776912"],["posts/1670305415/index.html","625071f4013dec8134eabbc04dd2d3b8"],["posts/1684318907/index.html","4ef900d4cb4c0ff63bfee4eb3e59097a"],["posts/169430744/index.html","202dd930e85fa2b6eb399899e2dcda48"],["posts/1700650235/index.html","5b865cff83bc59d8bb44bbba3e2c8084"],["posts/172426938/index.html","a06ddef6080bf910c2b0d574fbb36317"],["posts/1836680899/index.html","0f0d421f4d2cbae1cb449a68add5bf47"],["posts/183718218/index.html","da54c68bf8eb36454fc3a5c29b302ee9"],["posts/187480982/index.html","59ace81a964cf312367b9c9c08323760"],["posts/1930050594/index.html","d4e4a37417ab7bb13966a1c3de509aac"],["posts/1933583281/index.html","60b4319ec89601ed2421a1e0ea005d57"],["posts/1940333895/index.html","1c91f14a9a1a0677288bda89bceb94ad"],["posts/1960676615/index.html","942dfd963e2c22899b09691cc9a85ae3"],["posts/1983298072/index.html","e4fa74d0ab77dacc169c042b3edbf7bc"],["posts/1989654282/index.html","c7245ac36c0149380941a574fd2aa055"],["posts/2015300310/index.html","6aaf20d36550f36a58256ba326513811"],["posts/2038378679/index.html","b4f56529f89a9b4d55137dfd3a217211"],["posts/2041685704/index.html","6f3fd1b0a55e36db0bb876524a881f11"],["posts/21112647/index.html","f608978e562d0b5b4b66c95759e7e868"],["posts/2158696176/index.html","1ebf0e06d6ab8900b90789548e31ac43"],["posts/2171683728/index.html","fe5d80ed34c42466b8b10741687cbc4a"],["posts/2186770732/index.html","a12eb768662aa3ea7e33939ce568b807"],["posts/2275646954/index.html","3f7de756bdd616459d66cd9b5c225fc7"],["posts/2314414875/index.html","39a9af945bc7ef2438b1f3ee07ce735e"],["posts/2318173297/index.html","5b174bf553595361f9d8950b7efaea71"],["posts/2418566449/index.html","3d492d47d86ea1e636b245048c03366a"],["posts/2436573863/index.html","d4e431d27736d2fb61226bcd68e4019d"],["posts/2462008667/index.html","9ae1ed08a02e4815026fe86e80949f9a"],["posts/2463121881/index.html","f6391d7c9f58d37e1ceb2ecd3374c316"],["posts/2527231326/index.html","0fc0481bb7f366d6abbdcc81f602954a"],["posts/2583252123/index.html","057db8dd9644b0b47cab285ccfa82840"],["posts/2613006280/index.html","22ad040bb865598bc9ac20fdf94fb553"],["posts/2617501472/index.html","ff08fb70ed57e65219e5c4a2930de677"],["posts/2676125676/index.html","9f7a534d3f6750f5ceed98fd0e3761c7"],["posts/2734896333/index.html","0f2d7f22381d59996de8decff009f029"],["posts/2752169106/index.html","d9f8d72de6ac31ba707d21c84c3381e4"],["posts/2799263488/index.html","a481f52c629bc22cdff86bd07ba3cd0d"],["posts/2805694118/index.html","c9ca2c54e50621be0fee070a02ca8337"],["posts/2809571715/index.html","8ec32d2720de5483007030f15eba23b9"],["posts/2822230423/index.html","229692e85bd952afa9dff358db5105b9"],["posts/2829333122/index.html","330015b1f8cf053b4ecad2adb498e336"],["posts/2911923212/index.html","4baf97273b6e529681541ddba326eca1"],["posts/2941880815/index.html","1a9cf59a320e1a6e18f359fd52f4a341"],["posts/2950334112/index.html","9ac1593274f3cbe4452ebafb00a46f42"],["posts/2954591764/index.html","9518c56beed6721d1ab959d5dad2de39"],["posts/3019914405/index.html","5a0b0791a54620e6c65e8f2214cedcf1"],["posts/3032366281/index.html","6dfa74df607cbb3a61d679108e7a5a83"],["posts/3040357134/index.html","b05286d72296b2f3091509edffb9aa13"],["posts/305484621/index.html","3e943f1aa21ebbe85affef269310b89f"],["posts/3083474169/index.html","109a1e41209397287335a8e60d89b853"],["posts/3099575458/index.html","e75b06f7863b0bb56b57d2cab12b899d"],["posts/3111375079/index.html","733045a603a0dbf130cf7c22122378db"],["posts/3120185261/index.html","6543c340e8e5e48ef866ed18f1b8b64d"],["posts/3131944018/index.html","56ea05276a6aa646f87be2056d20ca15"],["posts/316230277/index.html","242644ff52f40599a92b86e3b9806c29"],["posts/3175881014/index.html","8e1364c0cea2f520008b8ed1c76ecda4"],["posts/3222622531/index.html","4dada846a7e824221d245f056cae5807"],["posts/3247186509/index.html","72a69e6f92d3db835ebd5b1c6dde5648"],["posts/3269605707/index.html","ad87f303a09c89b06b8b1bb3df16ee8d"],["posts/3291578070/index.html","8bc3b79d5d15dfa16a623767dcd0bf0b"],["posts/331752533/index.html","a08a349cb73bf1e4954d3ea4cf118b20"],["posts/3321992673/index.html","2277c1b1e0a843eba2b1eb41acdeead8"],["posts/335366821/index.html","7fb2685c0b986fb8d9d479d7d4fa7b79"],["posts/3356910090/index.html","3511fe9452cb975e0265032bd58fd830"],["posts/337943766/index.html","773198574517cbf9557d6c06a246f34d"],["posts/3417652955/index.html","64db5625da4fce15c8dda09ecf629250"],["posts/3444626340/index.html","06660102e903e91cec37e140d4f27d70"],["posts/3449402269/index.html","a4ad4a3e849a43ff1d94d0567dbdf91c"],["posts/345410188/index.html","cfbc441e9de34e3a452f127e9911ba09"],["posts/3461518355/index.html","e5d79c014cdadc6c2e6c83101adf0275"],["posts/3494408209/index.html","3d237f044742953c0506b09149c295ba"],["posts/352037321/index.html","9a57e4c765a52b47c81c2722017cadde"],["posts/3521618732/index.html","5b28e018f5a743c6b64d30af8b73b270"],["posts/3568552646/index.html","2077599aa9e779562b08f00d8aba884e"],["posts/3603924376/index.html","ea8d04fbf064884f6f3172a6ff9fb258"],["posts/3637847962/index.html","5548fd73cafe7c975257f2fd13a3debe"],["posts/3642630198/index.html","00bdd51b91fdb04a2eab9993d1451563"],["posts/3653662258/index.html","9d7e2432551ab2c9c51ed1bd392ba2a6"],["posts/3653716295/index.html","d5af1f728a352c0df3a80f695ad14a69"],["posts/3657008967/index.html","1abde5c7a0b4ea7c2a6a4d46d5c36d9e"],["posts/3668933172/index.html","459abe5ca76e41cd2ab6560d68696cd3"],["posts/3677280829/index.html","188f187d57d0e9f411808fda6e6460de"],["posts/369095810/index.html","c46dce0ad816542bb5c4854990d37177"],["posts/3695777215/index.html","e455d69d833030eb40109d4412593331"],["posts/3736599391/index.html","a2a984afba30c6c1eedb5bbfa4b2a593"],["posts/3742212493/index.html","ec33149791a3a84e2b03598f0e864667"],["posts/3782208845/index.html","1635080eaa6b8c6cfebd7f2117aa7cda"],["posts/3789971938/index.html","9f9c2951a03b4aba01c914ff9a2eef68"],["posts/380519286/index.html","72a6cb8a8d14f5a9a3ad7e6f40aad6bd"],["posts/3846545990/index.html","b6237f6331f0845c00311946a200aac2"],["posts/3873710624/index.html","7aa7e01029cb6799ce6fb5a33549e21b"],["posts/3959327595/index.html","8151ea73a12fa11cff16de096a673f29"],["posts/3972610476/index.html","dac1d101632fefb93b5ef7765e3f224d"],["posts/3995512051/index.html","7eb2d8f720813a13d7f578e284984b07"],["posts/4088452183/index.html","f67f4bd35147ab7be32ac397dafe0ad9"],["posts/4116164325/index.html","1801606919da57c480ce696ada880c0e"],["posts/4158690468/index.html","6d724c898b6e42d38e8712ddd68580fc"],["posts/4159187524/index.html","b49777f62901eb568e21acd90a215a35"],["posts/4197961431/index.html","5d48d3b4037d3f749dcb547ec32ba266"],["posts/4205536912/index.html","7906e3afae76ae7d22e985c1704afc22"],["posts/4236649/index.html","0690f541dec1c78c41c7cb87010383b8"],["posts/426338252/index.html","f4f37329731e695e541d935d53aede9f"],["posts/450254281/index.html","f28c0c610d9c59f6514af3c166579445"],["posts/4891372/index.html","21914986e0f63a06f52e35d71b9879cc"],["posts/569337285/index.html","204a391479bc50cc9831d7d3f3a49b06"],["posts/570137885/index.html","88b6e32043d8358c0829c1977b2f4d18"],["posts/570888918/index.html","a85f2316507668abc9d66ca1266329a3"],["posts/582264328/index.html","faeee8e9a6408d0f70e6cf50fb03e746"],["posts/632291273/index.html","5cf2069350e69ed7e113daa87580e77e"],["posts/70687890/index.html","f1a2c16d3112723bb989e9e685b3dc2f"],["posts/719322223/index.html","5b830110db6545c3966893b839d2219b"],["posts/720539850/index.html","176f280fa93668e26aecbe605dec941c"],["posts/786195243/index.html","c87c43e5fbd195e49564c4f425f4ca17"],["posts/795474045/index.html","8c25665f92c7affc584a875bc9783484"],["posts/815861661/index.html","7aaa46619ac5a89495c3ff6d7d8cc5e2"],["posts/821259985/index.html","6ad0c3e48ba6def13794a2f1742f195b"],["posts/828223375/index.html","86088e8eca6718fb67beca6c9cbfda40"],["posts/887585917/index.html","92ea1ed9cfa555ea10ffce10df27e568"],["posts/888549816/index.html","cbb868b095eb95879164ffb24b91dbc2"],["posts/906436376/index.html","f76567ad8dcce24ca1be08c7831ccda3"],["posts/907824546/index.html","65396cf06947a92af680af0e9468450e"],["posts/927393529/index.html","09e68af441b1c1fcf202996dcb4125b2"],["posts/94443781/index.html","4b13bff49109e28beb1ca56fe436ee83"],["tags/2014/index.html","bed5cf16c8f8750cf6609f565c058542"],["tags/2019/index.html","38958e2ae22f0bd99e76945d4dac4b89"],["tags/AI/index.html","91f02d06606fe81a616c199ae992cd01"],["tags/AOP/index.html","037566601778c3efb2d0bd5c3774181d"],["tags/AR/index.html","5c94278e6a0b947dd153d869d557289a"],["tags/AssetBundle/index.html","f6c547955629d4030becb463437974b3"],["tags/C/index.html","e28795d8ee7648bace16086f596de685"],["tags/CDN/index.html","8b399da7e8637790dbba07c6c2727197"],["tags/CG/index.html","100714747ee6654638b3eb5b7dce8587"],["tags/CI/index.html","ff337a2ec905137cf509c9e5d09e9e7e"],["tags/CORS/index.html","7cfb2bb841a6580fd0a94b8c5b5f7969"],["tags/CSharp/index.html","9b5158cebb6cb0105bddd319d33a9116"],["tags/Castle/index.html","0bd543e78784df7fdb44b56c60f15656"],["tags/DBeaver/index.html","bbbb82b289924ed728f1dab126ca8390"],["tags/Docker/index.html","6d5e0fe519e0137d2b256cea4b3b4580"],["tags/Dynamic-Proxy/index.html","079a509c283b76177be185a4e71b7eb2"],["tags/Dynamic-WebApi/index.html","9fa97dbedc7eddc601e82e3eda7258ba"],["tags/EF/index.html","2ddfbc0a9ab3fd9552cee486b92705f3"],["tags/ES6/index.html","644899b6a00a2520ba2f10d17a046098"],["tags/EasyAR/index.html","b4bbf73441c80a5d410d1203c6dc927f"],["tags/Excel/index.html","92e9159f29546b5af9b0a555fb2c231a"],["tags/FP/index.html","222e405ae4fe094d8650723a90a8fa3a"],["tags/Form/index.html","0c42cd475ebd549349a2693793f25bbb"],["tags/Git/index.html","dc41a6656aececd03b7e012cb2f1c007"],["tags/Github/index.html","9a2016777c8731cef9f33d06610acc6e"],["tags/HTML5/index.html","85898d7b901b18f791b1215bc700dbce"],["tags/HTTP/index.html","5e019f923ad889516f2224a54860074a"],["tags/Hangfire/index.html","6fc451e20166c2247ccd482f7b27a35e"],["tags/Hexo/index.html","5205e45f30c5a687a2ffc931677ba829"],["tags/HttpClient/index.html","7d66c3fe599f2b87e8aa72b95510e8ca"],["tags/Hyperlog/index.html","32d6d6e745a4b443f8a5a1d47e5c8616"],["tags/IDE/index.html","e924b2a45662577dc2a4ac888baabe4c"],["tags/JS/index.html","f7c1317085ddf59ee0b2d4606b0acace"],["tags/JSON/index.html","595d712df770fd55d155c75a83ed735c"],["tags/JSONP/index.html","b06dad188c3ec76df27d369336bff225"],["tags/Java/index.html","fe656ec845531ee3aeab3557f98d635f"],["tags/JavaScript/index.html","bcb671d38b8c2bc41201d1e892cd15bf"],["tags/Jexus/index.html","0587ee59f7b1363a96477d21742b952a"],["tags/Kindle/index.html","ce7d21d0b663a6c925ca08ba060a0c1e"],["tags/Lambda/index.html","e00d51983fbf285219e60582a78e465b"],["tags/Linux/index.html","6d4f06f804132d4923eb6cc95ef04180"],["tags/Liquid/index.html","07bd3057165c140418333ed104c4c461"],["tags/Logger/index.html","931bd533c53f75383d277301d831c45c"],["tags/Love2D/index.html","85a8bec9b1f6dfcbab4b35fbae9ea010"],["tags/Lua/index.html","c1557d8b63557aa97d4752809d89fcc7"],["tags/MMD/index.html","4c1f6be89aa8eb1e8cb6c6bfd23cc562"],["tags/MSBuild/index.html","82948d4a27163a60f4e324b73c70fe56"],["tags/MVC/index.html","b52f6470892fb84cc1d8a9b317e406c6"],["tags/MVVM/index.html","e6016bce130ed7e5355adcbc86a311a8"],["tags/MapReduce/index.html","415d54adeb6d8bebfe80030d2265c6be"],["tags/Markdown/index.html","5f07dd3f4e1f1728c8e8c85e0e1e1f0a"],["tags/Mecanim/index.html","02ec0db7c50d9dc5d9eca30ee156f57e"],["tags/Mono/index.html","38ca37f56bf8388faa3fed63b5e59ba9"],["tags/NET-Core/index.html","8ca59ebb5593d7bf754e55bd9363081c"],["tags/NET/index.html","1fec7a2cbecfbf782fcc98789add8dce"],["tags/Nginx/index.html","2fcc68ff9b385c3345583b253596f4b4"],["tags/OBJ/index.html","02feb03954a9fc6601ec50375113ecab"],["tags/Oracle/index.html","7d4f31862f3e09854a7facdd5299703a"],["tags/PL-SQL/index.html","55e5c5c085a4caff7ee57dd71b3c4c73"],["tags/POCOController/index.html","1d5dcc413b607213d6f10c3d73551f18"],["tags/PWA/index.html","293a41e78b8a34c5ef47ae8a23d1aef7"],["tags/Python/index.html","90c43c209781d23da382a547179f8ebe"],["tags/RESTful/index.html","75608e8300d51bf5d6f3ceaffe43f276"],["tags/RFC/index.html","c0a79fffd3129382d458275327aa8e1f"],["tags/RPG/index.html","1d413a64ece2b42bf7724b813738aa6c"],["tags/RSETful/index.html","59b1ac40ab5641c9d8d5a0601930205b"],["tags/React/index.html","a47d22bd29e3a831f54d520627ef67c5"],["tags/Redis/index.html","cb4ca57ca9a1f24aa335bd2e24fd2adf"],["tags/Referrer/index.html","4bde53193802b47fbcad426ee3314eff"],["tags/SDL/index.html","79da76b29817eca93239c638be004c19"],["tags/SQLite/index.html","0b4f8b0ba390ea8ce206654e3f49f345"],["tags/SSE/index.html","280759c9b992d02c3bb44785fd0fb29f"],["tags/SVN/index.html","3dbc2264a929b29d7cf8babdc8461292"],["tags/Script/index.html","06f9ac2ebc1c9416ec3c60d33402eb4d"],["tags/Server酱/index.html","d0c357f70dbc5bb83c30679deefd7587"],["tags/Shader/index.html","c806e74d6bd073b7c684973144f00dc0"],["tags/SignalR/index.html","8e7beccdb084f5f8a7c31185b690c3ee"],["tags/Socket/index.html","8c81f76f699626ff7e5943b60c28233b"],["tags/Sonar/index.html","0fa547fbd627c469893217ea4ede58cd"],["tags/SourceTree/index.html","bc9462640d6e0a103d3e0869f06b56ca"],["tags/Sublime/index.html","0094257ca3acfc1526cdea198529ad18"],["tags/Swagger/index.html","4caa5e3a8a67b107761b054964ccdfe3"],["tags/Trace/index.html","b8c3cc62ab6e0929a738c621bdbae37f"],["tags/Travis/index.html","841f57ff619e81e03a8fc4f536ceaa96"],["tags/Unity/index.html","18ceffaf58c85f5e486cd1d4d01b74f3"],["tags/Unity3D/index.html","0ded33d284ed89cf1e5da6612eb5f13e"],["tags/Unity3D/pages/2/index.html","bd1198930cf56431cf0f9b20c15bf299"],["tags/Unity3D/pages/3/index.html","5e48cfaa97aa74be426ea23c38338b4d"],["tags/VSCode/index.html","f6c66623bb4c8143f1189eed862aaa8f"],["tags/Valine/index.html","3814f00191591489443feb57927dd8bb"],["tags/Visual-Studio/index.html","d013f4cd80e54f6077677c33c4b07214"],["tags/Vue/index.html","ba4e4ccc68b80b2d5f73f6dd66aac85c"],["tags/WSL/index.html","c08baa8df1a9ac16625c687035520dc6"],["tags/Web-API/index.html","868c3b7d33ef9cc0c4545d80cc904e6b"],["tags/Web/index.html","e74e1605a105169dfd28691c0b009a3e"],["tags/WebApi/index.html","cf4f8cc38beb30108b9667b025664694"],["tags/WebSocket/index.html","2cf62a97c509c50336a2acd1f2909a8c"],["tags/Wechat/index.html","c3ca86f2ef927738725a0a5af1e8156f"],["tags/Windows/index.html","7c1dbf101d941caeddca75ada51b2ea6"],["tags/disunity/index.html","beeaa23dd5c29e59fb87d13dbaf8593e"],["tags/index.html","9ca31bb4efbf79f0a73b82be8744bb0f"],["tags/matplotlib/index.html","7a24c6478aca1d11a6b7f793b8ec6dbd"],["tags/njsDelivr/index.html","354f41d39fcb9debb69ee3b17815853c"],["tags/uGUI/index.html","ec5eab3941145eabfb9157bfda9f017f"],["tags/zTree/index.html","9b90e57920bf8050956215511edcf3ca"],["tags/一出好戏/index.html","59145e1e22cbb6fd36b6151fea59b121"],["tags/七牛/index.html","206fcdbe48a8e0a3c2be4eb20ede2f50"],["tags/主从复制/index.html","fd89f850419e83e426c5bd891331c93b"],["tags/事件/index.html","6f21cf007e41210147f883d015db6b94"],["tags/二维码/index.html","1842b35bccafbc030a9411e426f59600"],["tags/云音乐/index.html","303268979f1ec535c0f06b77d0382b45"],["tags/互联网/index.html","f3dae065ddcfa47d60b0947604d6b852"],["tags/亲情/index.html","4894dfbd765ef8f07a13c9206e1363e9"],["tags/人文/index.html","d34ee9660db7adf8ad28d73a0463c397"],["tags/人生/index.html","17b84088c3b7ddac5be8330bef263073"],["tags/仙剑奇侠传/index.html","e5a076e8ea64a672143f73ff3e5cb974"],["tags/价值/index.html","7d15626aabc86b823d61376c48d98a9b"],["tags/优化/index.html","34749e3b3386a2e855e9a8a66b462d92"],["tags/全智贤/index.html","5a2a5ab3d04de100cd4a3cff953db6bb"],["tags/公众号/index.html","7b0eea5572c24c1e4970091d0cb00cc8"],["tags/关卡系统/index.html","27bbf0c50490730397d6685c31e78d60"],["tags/函数式编程/index.html","f5c4ae63f79b09f4a5ebd06bfb1121c7"],["tags/别离/index.html","483489a319da8f5892b905205c3e3ebd"],["tags/前任/index.html","5bf5b49570215e321a4edc53887f1631"],["tags/前端/index.html","b204ea0c1a184d3f439546245ac2d0c9"],["tags/剑指Offer/index.html","ad46504befb3b8f3bbb6edeee97aac87"],["tags/加密/index.html","7045f972e776572331913eae83eb09e3"],["tags/动态代理/index.html","71a9ff5407da0f7f6d709906e4c90fd7"],["tags/动态加载/index.html","f02c42e5cddf3288492b4b97b48f3e9a"],["tags/动画/index.html","82c670c30a5c7977f6a9682273d09da8"],["tags/单位/index.html","6d8ffc979d466201694aaa1ffa9371d3"],["tags/单机游戏/index.html","c1ddac71f1a04054d689f7e85beb41ca"],["tags/印度/index.html","0006eda85c652069ca35d075a114c90d"],["tags/历史/index.html","34f5a22c46652ec3ffd6040400ea4adc"],["tags/反编译/index.html","c06d817d79bca0db4ebd8e7cc157abc1"],["tags/同步/index.html","6aae73ff8b527a44750eecd02c9affa8"],["tags/后端/index.html","fd804dd5ebb9453ff967e40890aeea45"],["tags/命令/index.html","dcdf969f9e017fd22296991ca4c37280"],["tags/和平/index.html","f5383dd43e80fb20c0d69f0667dea037"],["tags/响应式/index.html","0e80d23627ab23b9a0ce81811165eb5f"],["tags/哲学/index.html","86c2b2cd2bcedec971b049bf3703bfe6"],["tags/回家/index.html","40d08bc741fe02867458167ecf0eff25"],["tags/回忆/index.html","b870f1bc30e4eb4b9fad10576f1610a0"],["tags/回顾/index.html","9cf19d79e626c691576ae128338ff800"],["tags/回首/index.html","69c6ee2e8d12d923088e71c0c3dbded6"],["tags/图床/index.html","2163483e2b2a2c4d406cd2d9a0798633"],["tags/图形/index.html","45cdf7351676fa9a66bf1d999cd90923"],["tags/地图/index.html","714c0d12ae32b66ccc0149847d24db9b"],["tags/塔防/index.html","deb9c7f08d510164d5c00e8a1e650121"],["tags/增强现实/index.html","4d5bf978f0b7b35335d5868cec89ee9d"],["tags/壁纸/index.html","eb60121aba3ecc9a23158e73ca2994a9"],["tags/夏目漱石/index.html","cbafe8b56580dfe40185f58bad032d60"],["tags/多线程/index.html","b5cfee24cc106399a76ba06e6b209db0"],["tags/大护法/index.html","57c02393b521bfbe021823397709b070"],["tags/委托/index.html","83f7d3e0144fa0ece24da5218ef61351"],["tags/孤独/index.html","5b6c000b14d8175403e7cb95da0cffaf"],["tags/展望/index.html","2b98e05ed2ea153e30413016949869e3"],["tags/工作/index.html","285e743c1d7aa1a97602e9c2e20eeb43"],["tags/平凡/index.html","e11621bf69d8a2c48197454dae797c11"],["tags/年华/index.html","ee64f9e516ff04442e76fcd2999a4b41"],["tags/年度/index.html","0537afaaaaac5911b02d820d7b7f3a7b"],["tags/开源/index.html","b24117b30ada23e61220abaadfcfabb2"],["tags/异常/index.html","a33e4b484424b1dc6d5560179e9ba2f5"],["tags/异步/index.html","401e3061532e67135943401fda2b1dda"],["tags/引擎/index.html","b85fee2be58bac073d0768c35e196084"],["tags/影评/index.html","56550179e69f98ce9040884aaa40e7b6"],["tags/微信/index.html","1115a5acaceae516975918803c247384"],["tags/微博/index.html","b9e4e8853a7f5b10a6d40585ddafea07"],["tags/心情/index.html","7c65dbec1062580323027f1513b69771"],["tags/思维/index.html","df71d22bca7dec95385d812bcdd2d0ad"],["tags/总结/index.html","deca5cd74b55bba6252e1e4d8b6cd07a"],["tags/想法/index.html","c5863817c1705a6385153284fd31f50e"],["tags/感悟/index.html","c2d764a6089d84c7f50d434ceb4f58bb"],["tags/成长/index.html","e920cb63dbb2e64921ad23a847d6242d"],["tags/我是猫/index.html","6d043ce5f3bbe0246f363eb88575872a"],["tags/扩展/index.html","1bc755f951885942873ffda4e84fe3e9"],["tags/扩展方法/index.html","da1652b155c2a2b7d1443be6febf10b9"],["tags/技术/index.html","0b3db1f85acfce06320ca6f3fe900666"],["tags/拖拽/index.html","66862950e3fdf81ead80dc6812ad5951"],["tags/插件/index.html","6c82c05b8b26fb845b646357f48d37c8"],["tags/插件化/index.html","0394725d26ad6d34280be3cbd9900ee4"],["tags/数字/index.html","7fb1ec78caebc79bdb764ac69925ae90"],["tags/数学/index.html","110c5366e9d4e31352761888268d6597"],["tags/数据/index.html","a39610ea44ff50a3b6d8d2fb1ea6d6a3"],["tags/数据交换/index.html","402e42b786d8d85b95af4d9ee02f3019"],["tags/数据库/index.html","90d21d285aa39c07f8ecfc34534e9fde"],["tags/文本分类/index.html","45f55f41f37b1ff4c227a540f0e6d90d"],["tags/无问西东/index.html","dbd1d7ba7d781fa15f5ba185d06164dc"],["tags/日剧/index.html","c89af83f944ecbc4b0ae7312f6e38553"],["tags/日志/index.html","1bcb1601619d38143cd3a80b745b011a"],["tags/日本文学/index.html","d1db9e9f41dc49345a6f3aaa49bce8fb"],["tags/时区/index.html","2b43e25662ddb9a281d3684c29e15583"],["tags/时间/index.html","fb855e8e4133987a79cc27d7b942d719"],["tags/服务器/index.html","f098701046907ec1efe60de28f1fa808"],["tags/朝圣/index.html","c3bcc7a97ecc4c1b5c7630ee917eb7fe"],["tags/朴素贝叶斯/index.html","ab8470956e0de26c0d139c70b5556c21"],["tags/架构/index.html","58bd085c2943296e7776d2c65872133d"],["tags/标注/index.html","31ac6db64dc2a411ec7792d4e40b0b17"],["tags/校验/index.html","6b3f4efd350ec69a027d0c6644c1f63a"],["tags/格式/index.html","cd77e433343fb9a88eb355d5f7b217ef"],["tags/格式化/index.html","e417b558e97237298715606b5170bd08"],["tags/桌面/index.html","f1f7c75f53a2f217b4fda1626303eedf"],["tags/梦想/index.html","9e71e5487709260808298c6d20ff3f77"],["tags/概率/index.html","6f372a98bb02f0ea2d001e05d85898c5"],["tags/模板/index.html","58acbab89645c2c0d1ee9c4a6b5f122c"],["tags/模板引擎/index.html","e1280bce084d9157c976e40e8954e75b"],["tags/毕业/index.html","e7cd277c506aeb5e352aa8714f013bf4"],["tags/毕业季/index.html","b34003628717f7fd8ae3d5b12eb07037"],["tags/消息/index.html","a138deb4b921f3d97451aacbc8b3ec1f"],["tags/游戏/index.html","0bfeef2c328c6b3cb280cad9451745a5"],["tags/游戏/pages/2/index.html","bc85ba346c500c662f9da182a9ddf4e2"],["tags/游戏开发/index.html","fe4e21e0eac812f707c6b92bb0e190f9"],["tags/游戏引擎/index.html","3a6df3347073cb7652f96e63ffc6ee81"],["tags/爱情/index.html","927d76b3cc229550ad635962d12c3786"],["tags/版本控制/index.html","c1f2d594ecdf1a6b0df65562729f3d58"],["tags/版权/index.html","d53a5e9e2551912d4ee20c5c04cc38d3"],["tags/特性/index.html","289d94ca476fc1d7dcf15dc541ce83ba"],["tags/状态/index.html","3938cff9ed1e4a9246b8e3d989dbb2de"],["tags/现实/index.html","42e96c91e6cab6a6dabb20d86d7380dc"],["tags/生活/index.html","922fbad83bcab829ee14efa8bdbdf67e"],["tags/电影/index.html","0f2db9e054cfe873cd2f94c49ae2127d"],["tags/画家/index.html","a0a24e13b339fdfe6fbc89cd9124d050"],["tags/知识共享/index.html","16bfa0419872eb7bec85275edf97de12"],["tags/矫情/index.html","e54b5ceef97148e8b937aee755d25c6d"],["tags/程序员/index.html","42fc030e322576a6f4690b4481b8233e"],["tags/穹之扉/index.html","ea481e6084acbbc1099666673f788978"],["tags/穿搭/index.html","419d35c120ad8f6a7fc7285c65b54c7e"],["tags/童话/index.html","dea72670626238ab81eb69eb9cd78a36"],["tags/笔记/index.html","f88b7f585f2458306cdba2b7fa540a3f"],["tags/算法/index.html","4409f94764a620c678e8f227863366eb"],["tags/米花之味/index.html","974330192277d0184e71e64b9beeda03"],["tags/缓存/index.html","1d4d34dcac722dfd135bed8d39623d0d"],["tags/编程/index.html","6cb84163375e421e68eca339c4db02ff"],["tags/编译/index.html","421adb12980e03fd504d424c81775cd6"],["tags/编辑器/index.html","b3156243c2dccc529493be7121df58d0"],["tags/网易/index.html","9431025430f78f5c15c216dfbccdcf72"],["tags/脚本/index.html","6b2eedca160025931e667063c1d370eb"],["tags/脚本语言/index.html","24c4a38b37bcdf1cd03a66024722c906"],["tags/虚拟摇杆/index.html","c8187d5fe1fbc2e58ad706d4f13ad514"],["tags/蛋炒饭/index.html","7f641c698da042b39a266a6a68ac8a8f"],["tags/表单/index.html","1b4df996d003cdb7099b6c4090f77d5c"],["tags/装饰器/index.html","08624a158bf579e39c8981e2d1eefad4"],["tags/西安/index.html","a93c3e9b204467b451549d7650ab387c"],["tags/计算机图形/index.html","157a79d573256ded8960aca97d455cf3"],["tags/设计/index.html","cbf937746e1048ccc8c4ecc3cca1e014"],["tags/设计模式/index.html","4ac6f2ae9901a67c5427b8621854f320"],["tags/访问量/index.html","06c8ca7e9b6dd1bd445ad943b7abac4f"],["tags/评论/index.html","763852feda8860ed2687270003f5a6ca"],["tags/词云/index.html","e849ddbc04c77d86e249dc33e6e827c4"],["tags/诗人/index.html","6031c513db0e40e415b8c79ba4b0fcfd"],["tags/语法/index.html","b88296d2e175b0e4b48db662e6a0b363"],["tags/请记住我/index.html","4d53497b490abf2fa8f33034c7a8d912"],["tags/读书/index.html","1d9909bc88cbfa86d5bb427f351bc93c"],["tags/读写分离/index.html","07ee14a57465ec670e9983e216b332ec"],["tags/调试/index.html","eaed4f6300b09ff7abe2b7885bcbcfb2"],["tags/贝塞尔曲线/index.html","38e0914f1e43e415f85125d5df811c3d"],["tags/贪吃蛇/index.html","c8c83c18f85128f6bfb58786dd965813"],["tags/资源提取/index.html","6b8dd6a45f1755670216bb66297623f4"],["tags/跨域/index.html","7e268f4038d920e18edcaee2a08be5a4"],["tags/跨平台/index.html","ef9c0d84b47601392ef2911d80355bec"],["tags/转盘/index.html","24f4419ea4c7fa9b82405d3982e90ec2"],["tags/迁移/index.html","2eec2809ed66061a7aefb0b47936218d"],["tags/通信/index.html","c2db09cffe95139295924a9e1d8c98cf"],["tags/邪不压正/index.html","2dc168ba87269fb4cf8d3fee3e15f109"],["tags/部署/index.html","8dd8b0bdc528a5de615dda2cb78e42ff"],["tags/配载/index.html","ada37dca3a4e174115a19ea177fbb97b"],["tags/重试/index.html","18f5d5c40b80a9c93c8196330c7cbdc9"],["tags/长安/index.html","d1575de8c009d1b1e3f6623ff74bcebb"],["tags/长安十二时辰/index.html","b2b3d71d346ce5eaffb93ef94651e7d5"],["tags/阅读/index.html","28eccfc02354abf6f01d37d8280e97e7"],["tags/阿里/index.html","28ec90c5362a3fab5606874882e9ca1b"],["tags/随笔/index.html","b962e8a324c6164cf4a4dbecc095aaff"],["tags/霍金/index.html","6086cfdf521fbcf9c78bd40207059a84"],["tags/青春/index.html","054d792479a8f3c572d068beeb3a4dbf"],["tags/面试/index.html","d3d9db483df14a210a373c27254cb7a6"],["tags/韩寒/index.html","f56c26d195c405b7fb68c3c1268eb145"],["tags/马尔克斯/index.html","937a89f8961294a55f51caaa48acb617"],["tags/验证/index.html","aa994fcd7764afb592d4cc3ff974b41b"],["tags/黑客/index.html","fda5cfeed7b24ed10faccad0f3a6f6ca"],["wiki/index.html","474d8ac7f13af24677c09492891b4125"],["works/index.html","610ede15622d057d301beef5f4cf117d"]];
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







