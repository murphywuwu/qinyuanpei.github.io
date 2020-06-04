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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","8c392f0da3a89def2a93e21fba2b06dc"],["archives/2014/12/index.html","cca36c2fc9bb3da20f87d92f32e55d7b"],["archives/2014/index.html","f38baf0cf4480911057c7d3bd8060778"],["archives/2015/01/index.html","0458d160e2c4442cb725db355ac31d26"],["archives/2015/02/index.html","f1413635a5a31e697947b9368ab8b453"],["archives/2015/03/index.html","a74371b07699cf1854b7615c9ec80a5d"],["archives/2015/04/index.html","7131711b7136078323b40477e21a2c3c"],["archives/2015/05/index.html","09d34c6055de3f09fb5366cdd5586fa0"],["archives/2015/06/index.html","9074ad326f4d3a10e25b41e279273ac4"],["archives/2015/07/index.html","f18e3bfde80d8faefadf8707f5f9fbb0"],["archives/2015/08/index.html","5ff73e53ecfb3e4774ef843877761082"],["archives/2015/09/index.html","ff33684fbc06e8ffd1353cc713d15f77"],["archives/2015/10/index.html","9a39dc6ab8876eb8d2b093dd7731ed3d"],["archives/2015/11/index.html","e71bfa39453b0c3c050cb671d5bf8f15"],["archives/2015/12/index.html","ddf9f17edc5c16655b6e38b26d480040"],["archives/2015/index.html","93ec026c06ac8cd3eacedd15f73e3b8d"],["archives/2015/pages/2/index.html","52575f1c7b9e3d1fe8eaadb186caccc8"],["archives/2015/pages/3/index.html","85e832426753cda481c19737dbe38156"],["archives/2015/pages/4/index.html","262192b42daf18818c547f3cfc1f0037"],["archives/2015/pages/5/index.html","1762b4d133bd56e3dd190eb6ca904289"],["archives/2015/pages/6/index.html","19fea96a5bcf5f000235ad33e405272f"],["archives/2016/01/index.html","2563895b2e4fa0c3af2b90268fc29e91"],["archives/2016/03/index.html","3807cd9bcdee5071ae5b639fa0fa6e3f"],["archives/2016/05/index.html","8f71e44bfa7563dc42b294031a4f9559"],["archives/2016/06/index.html","93a8706fcd64b71aa62fed99956d17ed"],["archives/2016/07/index.html","6d2134aec1b3cdca98da220b3744d9d4"],["archives/2016/09/index.html","210d0c468a5a7299123d77ec2cc292ec"],["archives/2016/10/index.html","b3eca816c2817054e0246fb4047898c7"],["archives/2016/11/index.html","cc35966d50e208ebe1c8876de34bb5bf"],["archives/2016/index.html","b6de39cf16c833614b931d4c0e741a5a"],["archives/2016/pages/2/index.html","d8a6f0b9812f94d61be0e5deb4918420"],["archives/2016/pages/3/index.html","25f7deb85c1eb6f4e74b54a2343cb227"],["archives/2017/02/index.html","bf2c034e74dfb864d60cc75162513e48"],["archives/2017/03/index.html","e4fedfdde169b5e57bc1ff21a2b16f77"],["archives/2017/04/index.html","fb123150cf9384a440a6e1f1b4ae6f33"],["archives/2017/05/index.html","4300a6b93f7e38731573d736594b8aad"],["archives/2017/07/index.html","1e8620233145fb55cdc08473892d9e9b"],["archives/2017/08/index.html","96f874c3ad3a064c2d8f1e20c202d3be"],["archives/2017/09/index.html","73f79ecd2fb434357c7ee44756ff57c0"],["archives/2017/10/index.html","cb8f14ae58017b0811f76f599c99282a"],["archives/2017/11/index.html","b6d4b7838b9eabd553e11b2bb4fa4e70"],["archives/2017/12/index.html","94e28eb3bccbdf4455656cfd89c88097"],["archives/2017/index.html","e658f0761e379309c4dc46ae2a016266"],["archives/2017/pages/2/index.html","0421a5f896914e1f69848651dacf9867"],["archives/2018/01/index.html","ded791cc2bad8e6739a772f80802d1a9"],["archives/2018/02/index.html","75c635206d2eb551a8999542ce4b4e5b"],["archives/2018/03/index.html","e938ed48c48f125090858e00b2cdb277"],["archives/2018/04/index.html","8f874ca1afd3e2de080509061e946e1e"],["archives/2018/05/index.html","aa6037b87c37d174f46638f5eab24e70"],["archives/2018/06/index.html","135fadf12421faff247a48ad653d4506"],["archives/2018/07/index.html","56c9a1cebba56efafb93cd460e0628a5"],["archives/2018/08/index.html","8c33cb5d35206e06a6a3c41db03db532"],["archives/2018/09/index.html","19d385afa55cbe9c31bab669d051f6be"],["archives/2018/10/index.html","1f83f1b3ec7314f68f1f2a20a0368076"],["archives/2018/index.html","ac6cea19c6fc215bce0f3be317b2467f"],["archives/2018/pages/2/index.html","52ad23b1b3a855d03c56a860db960582"],["archives/2018/pages/3/index.html","19a0764c0487b19a9c558eb80852ba9c"],["archives/2018/pages/4/index.html","657140efc26694bb068f05fc1fff6084"],["archives/2019/01/index.html","5ed712141b0109ee2fc9b1f87829bb86"],["archives/2019/02/index.html","50157559c99f3c42be75006d3bb243e1"],["archives/2019/03/index.html","fc1ea723835099e4830b98a47b4d5260"],["archives/2019/04/index.html","c44f32862ac1b96a077df381df7f9425"],["archives/2019/05/index.html","990fcb201b3b5567a5657dfd05598dbc"],["archives/2019/06/index.html","9cad1cf2349af7d2ed8167f573c9df0c"],["archives/2019/07/index.html","07e996d0f003f7ad72c268326c15d03e"],["archives/2019/08/index.html","79109bd4d1ca6460724199c9746734de"],["archives/2019/09/index.html","5ed1cff1e2b485b28295dac211e7975d"],["archives/2019/10/index.html","f8be5d17b7ea9811290d72f7626919ea"],["archives/2019/11/index.html","59c03cbc1eea663a4546041a80b4dacf"],["archives/2019/12/index.html","25472caf0686da69a8ea97a86065e20a"],["archives/2019/index.html","dfd92566cc0bbac9db8f9ad7d532adc8"],["archives/2019/pages/2/index.html","924ff16c44cb015c20ed0abc5f34504e"],["archives/2019/pages/3/index.html","a5c793bdb0e5660b6bab04c424a8aa05"],["archives/2020/01/index.html","1aed7b7981c10b35ec10e68cc38bcee0"],["archives/2020/02/index.html","def2adc398fe45823bc73de4ab1f6eaa"],["archives/2020/04/index.html","0659edea15e13fe0aa4a2508aec7cabc"],["archives/2020/05/index.html","c368852f9dce62988e34d14882ae866f"],["archives/2020/index.html","36068bbb917bbe9a03b0bac565d3504e"],["archives/index.html","447dd49b11de603c9d41b0dd7d5da92f"],["archives/pages/10/index.html","486307054525a78b2fff07b1ef267676"],["archives/pages/11/index.html","938d82ff7a822db764d2d1717cb1c041"],["archives/pages/12/index.html","ce1a4f9670e333ca75a5b34de24d0966"],["archives/pages/13/index.html","8858b63365c8e8b1f6a9086c92750e40"],["archives/pages/14/index.html","e313f64e9fb7354e6d8ceb80ff892d69"],["archives/pages/15/index.html","e6a5ef0f405f9d482d6140638f95ee37"],["archives/pages/16/index.html","a6a145e68031c02cb82c2834b5cc5e0c"],["archives/pages/17/index.html","4f37debd7d4516bb7849da479681f9e9"],["archives/pages/2/index.html","24b1883c1fff7aa0529440449429afd2"],["archives/pages/3/index.html","04556b6ffd6941d18a56f4dd76ec26dd"],["archives/pages/4/index.html","df8ebb42f54228d85659555a370135e2"],["archives/pages/5/index.html","24039e453d51f1ff73ed57f8de9c03bb"],["archives/pages/6/index.html","67921d41fdef81a3deb29a7977ad11fb"],["archives/pages/7/index.html","f1b92d12b3f8afc5fbf24a643e95a3c4"],["archives/pages/8/index.html","19df9dd89fd251ddd858164696dd70e4"],["archives/pages/9/index.html","9d357fd2b5a4c4eb88c155bcb086a981"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","b4ef23d2c90f213434c1eadd1c8c453c"],["categories/Unity3D/index.html","506ff0259d3c4449a84def83a60c7d6d"],["categories/Unity3D/pages/2/index.html","3ebe34437617a012b68fa082e1504ebb"],["categories/index.html","a40699200628420d4d0f10b5bef2f76f"],["categories/人工智能/index.html","92afbe94dfbe3e9c0267bc6972ef8931"],["categories/前端开发/index.html","4c8a8575a51950221c58f3cdc8dfd640"],["categories/单机游戏/index.html","ddf6de775327f1a865ff216e7a658c0a"],["categories/开发工具/index.html","215ffdcdf2f54813dcc8b36c4a5c9bbf"],["categories/数据分析/index.html","841483265d058838b2dc8300185fc25c"],["categories/数据存储/index.html","da4337bc15dd58f3947dec9f123cf8b4"],["categories/游戏开发/index.html","212ccab95a2da3df14c1f1da173360f1"],["categories/游戏开发/pages/2/index.html","c71e4ed2431e0f4d3a74c4ae90b88a97"],["categories/游戏引擎/index.html","c145e84e2078aa679bf4c9fe306b9543"],["categories/独立博客/index.html","3f8e61d59530bc8f73ebb2abacf58927"],["categories/生活感悟/index.html","ef526041d86065bb0b2a0f9ef67cbaa0"],["categories/生活感悟/pages/2/index.html","9c5a0edfa05935d3e6b2d15187611565"],["categories/生活感悟/pages/3/index.html","65945a91bddf544f9a3bf6c86af698a2"],["categories/编程语言/index.html","7554e51f3d499dc9c63d345e3fa153af"],["categories/编程语言/pages/2/index.html","1255fb173f743a6ee241edc41a8646ba"],["categories/编程语言/pages/3/index.html","c9903730f871ba81767bd0dbfed91428"],["categories/编程语言/pages/4/index.html","2883087d4cb9adabd2e62683f6ef3420"],["categories/编程语言/pages/5/index.html","0a9554c52f0034e75fa43c5048c9d31b"],["categories/读书笔记/index.html","6349ce13d6138481704d4ad2ff457ec9"],["categories/读书笔记/pages/2/index.html","f76f144b9def3644e5a6f1d26986bee1"],["friends/index.html","3876b9a852e166d18f74a30e0def7afd"],["index.html","c4e4ff97716c5f6ef929a659c30adda3"],["movies/index.html","7c97fc49907f04556320feb3ad3c9779"],["musics/index.html","ec71bf7ec1d27a6d1ad3da64137786cb"],["pages/10/index.html","08f7668c0dfdb2384d5a703a61d4a5d6"],["pages/11/index.html","cdf74e429058de2f318265b4f948ec8b"],["pages/12/index.html","da62d8c58d2f0e9ebd61981542322205"],["pages/13/index.html","5f985c165af7fc6ece6aca1600152f5b"],["pages/14/index.html","ebf551d78f1edeaaf988092f572f7334"],["pages/15/index.html","e390003d4d686471a086c11b6ebc0971"],["pages/16/index.html","02b9a265d986f2aaef0df4a09ef1144b"],["pages/17/index.html","6e8573ebca4727437a87e50181a9600a"],["pages/2/index.html","367907b9a5e5bd56861cefc11c31a32e"],["pages/3/index.html","13da8d7b622c952903e6c38a9e7c8526"],["pages/4/index.html","fe09439d9d7f9039abf2541bec874e56"],["pages/5/index.html","427de6afb5c6e1e5eeb879f9700a3154"],["pages/6/index.html","3750d02b09058b29c893cbc0bd9cd69a"],["pages/7/index.html","1255ab0dc1de117565ef09739cfbc323"],["pages/8/index.html","585b128a53a83669635adcbf3b3270c7"],["pages/9/index.html","af3fb33f0ce5f9d396645a13dcdf1721"],["posts/1059499448/index.html","33048e06326dac0a072b2ccc7f6a57ca"],["posts/1071063696/index.html","7bd4a83beaab0acf6818d41b144c6aa6"],["posts/1082185388/index.html","22acb4750e454998796159efb05ea839"],["posts/1099762326/index.html","b478cb26b9ee0e31b8137b33e75f3010"],["posts/1113828794/index.html","7ec6b228ebb63f6176264e7338ecd73b"],["posts/1118169753/index.html","63256acf99e42fa2febc5f85b958692c"],["posts/1122710277/index.html","d81dee90849123b01522017c9443ab16"],["posts/1124152964/index.html","ddd7ab4b09f1e740bbf935d472ebe5b8"],["posts/1127467740/index.html","f2e1a7c3a258a1ffdd53f5cb8349e94b"],["posts/1150071886/index.html","5742c72a701ebc310dbba6b92edd666f"],["posts/1150143610/index.html","8eb793f919b66d5bdf1fbf6c658787fb"],["posts/1152813120/index.html","f4f8318578515f7084572f5bf02962fe"],["posts/115524443/index.html","cc299d1384fea4892c87d9df0ff754f9"],["posts/1156673678/index.html","57d58fec73f4d1b31b98efe6c16f2e13"],["posts/1166840790/index.html","a763219a4a2b121aaacf0361ffdbf9a8"],["posts/116795088/index.html","e3b601e7fd6b3cd6119bc57bcfb4439c"],["posts/1176959868/index.html","37280babea9b5e5df8338926b1a40c2b"],["posts/118272597/index.html","b2f9be56c42eaf2d67edfb1f1712413d"],["posts/1190622881/index.html","2d8e55f40e65f297da05f5cbabcf7431"],["posts/123663202/index.html","8a9261b416fd2ba1b3de1122918c0d05"],["posts/124807650/index.html","c5c7528d877174452568559bb2889798"],["posts/1254783039/index.html","b0d05c05cca2addf4b2c857092e37be5"],["posts/1289244227/index.html","999a131509d0521f0d94c920505f9619"],["posts/1320325685/index.html","46b74c369872dba465b0b0a6620a835f"],["posts/1329254441/index.html","70242a09549c8e2aabe3496ab1381e19"],["posts/1357715684/index.html","ed76170ece43380789428cd4860b32f6"],["posts/1358971951/index.html","b1f4c5b337b5fded9e75796189359f75"],["posts/1386017461/index.html","e012c2bcd3a76bf67edac178fbbcb206"],["posts/1394521917/index.html","06e98434e3f3d086d22097081182dd3c"],["posts/1397717193/index.html","b1939a266f04a496ec59ca6a516bfd9f"],["posts/1417719502/index.html","6c86b282cf509bd7c0381185439c818b"],["posts/1424645834/index.html","2680b96e6233716938dc375a3feaa7e0"],["posts/1444577573/index.html","0adb13cc8e321d4707c1b5e34ab7741d"],["posts/1467630055/index.html","c4e7f866c03aa1c00101e4d250ce2213"],["posts/1478979553/index.html","ff56b64a117ff63e9dedbb3091179588"],["posts/1540537013/index.html","5fbfdedd242469c9bf4f6bbccc276e92"],["posts/166983157/index.html","ad65159c91760c7d01bd37ebe3b7cd88"],["posts/1670305415/index.html","e217e3f13e13247f443d98612743bc91"],["posts/1684318907/index.html","f72724c4de1a46dd93945488e46087eb"],["posts/169430744/index.html","f67e640675f219ff74a59fbade251231"],["posts/1700650235/index.html","add32050549bd581e50fc696e1c4261b"],["posts/172426938/index.html","d2879aa4f05ff98b377116d87ba1e411"],["posts/1836680899/index.html","bf80a044487cb5dff2b4f65cb6316391"],["posts/183718218/index.html","c26d3b49c0fb88ca0309fff943f0609f"],["posts/187480982/index.html","6aa7e4fc1333c1450745b196530a5dd2"],["posts/1930050594/index.html","ba7d3f36047516cbb6ff81148205989c"],["posts/1933583281/index.html","66660ed0824afaba9e97904562ebbb0d"],["posts/1940333895/index.html","8d8397db15eb320f54634e31636017e3"],["posts/1960676615/index.html","fb3e628e9e0569acaf29234c9f9ef950"],["posts/1983298072/index.html","f9c257ab9b626014c2c9b5505f38409b"],["posts/1989654282/index.html","a5da28cab38e655040510ea86b33691c"],["posts/2015300310/index.html","1496b818d78a3ec061e060f22a385f15"],["posts/2038378679/index.html","1371bff4bdc16d4024b6e4ea64e88be4"],["posts/2041685704/index.html","c7a9c2262dcbb0b797507192086ba376"],["posts/21112647/index.html","5bbba2d98ba0f8bf3e1d31147b21ca58"],["posts/2158696176/index.html","e5347cec002109e8139327b4ce202763"],["posts/2171683728/index.html","eb448fa2008065532cd2bbb6ac0c7c7b"],["posts/2186770732/index.html","b27451b58b128bddfb5a778ac721d3ad"],["posts/2275646954/index.html","250d19d7355cdb046ccfde91e25b146d"],["posts/2314414875/index.html","3c31ce4dc7f214a752378abbfbbb8096"],["posts/2318173297/index.html","bdfc41df7c770b3d73f3d3c9ade9a3d2"],["posts/2418566449/index.html","b1b7d4ec88ea69e5064cf00ae7105a51"],["posts/2436573863/index.html","264b7da927f206d876805d3c5658594b"],["posts/2462008667/index.html","30ad1cdbcdd9131fed53edac5bf25206"],["posts/2463121881/index.html","0095ff881194aaf559f1ee3e8af26bce"],["posts/2488769283/index.html","b8e0df43227fbb789fb71ea07ac392bf"],["posts/2527231326/index.html","abe5305968c18259dbdf3fd059ec96b8"],["posts/2583252123/index.html","1e6f9a85e5ad6ffcd1f999e8b5291164"],["posts/2613006280/index.html","5bd25378497ab048ba19e39e58243dcb"],["posts/2617501472/index.html","cdb45aa8d4eedbbee3c84a20e48e1181"],["posts/2676125676/index.html","5cc6d1cf7fe614a8542913535bfc9122"],["posts/2734896333/index.html","a167d6afb73f4c4fb9950657afa57f88"],["posts/2752169106/index.html","b470efb68f2d2a41aa9b2a887698058b"],["posts/2799263488/index.html","ac236d934f9a3d7f0ace528da85a796d"],["posts/2805694118/index.html","cda9f8122361468e8a1e16628138cff4"],["posts/2809571715/index.html","4cb456949313a44d406344273542c412"],["posts/2822230423/index.html","a3638d31b0b5553c77b3194fc24e6c5a"],["posts/2829333122/index.html","0b6ed87d6afba3c72772dd09a35cb2b1"],["posts/2911923212/index.html","029b61e9f9d32d674ce5af5a51a933ee"],["posts/2941880815/index.html","d825de6ae20d8a7c82ad80884d869854"],["posts/2950334112/index.html","00889e4e1a8a4383b7b8fb4e00545f71"],["posts/2954591764/index.html","3c659f4592abc228992bb304517e58ef"],["posts/3019914405/index.html","b80208a4ce1f50b7665ec20f07db0da8"],["posts/3032366281/index.html","9650344ba786e3a833e249ded8a965e7"],["posts/3040357134/index.html","6f363abb5d84c0736449f27b9aa041c8"],["posts/305484621/index.html","16e6aae8e1c7f7bae936c6a1647cf90c"],["posts/3083474169/index.html","c4ee3a81bb6cf232e098971189dc575b"],["posts/3099575458/index.html","23f61ce36addd65e70b4c38fedbcd2c1"],["posts/3111375079/index.html","6e1a3036f421d6921528b0577635f768"],["posts/3120185261/index.html","0ae643fcb574da2a3a40195044703295"],["posts/3131944018/index.html","149871f0a2253b6cffb55e513420d3bf"],["posts/316230277/index.html","a1d63ebb131f7c8a3a2fd9411b209f8e"],["posts/3175881014/index.html","55a14161fbbe8137e6097b0204d2b78d"],["posts/3222622531/index.html","82956233177eb0816a3a7c327b29ef36"],["posts/3247186509/index.html","9e16ff67f7d8a40738677fa717c08902"],["posts/3269605707/index.html","4e683f406540d78128ec6f0dc520aaaa"],["posts/3291578070/index.html","0aec7947a5f4a5d6a8486a53c342ce90"],["posts/331752533/index.html","b65d6c019c48908360f64a34a197c574"],["posts/3321992673/index.html","b7af56036711049c4ed5916ca9c23018"],["posts/335366821/index.html","99f400f666879219bac5519b71bdc869"],["posts/3356910090/index.html","baabdd5c30bfd951a3e1cda5fe55b17d"],["posts/337943766/index.html","d923f66bda3e13f341dae2e39b8b79eb"],["posts/3417652955/index.html","49239d8f2c455973e0b0d71b38d6f519"],["posts/3444626340/index.html","9cd1dffca4bd27e9090c461a27473d3c"],["posts/3449402269/index.html","8ddba31374e101d4ede50200e43047f5"],["posts/345410188/index.html","f9f018c53f74d48625c4d815964819f5"],["posts/3461518355/index.html","f3e36c3c51cab9aa513b6bef9158afaa"],["posts/3494408209/index.html","2dffd4c378a9f54ef67d0dc58e1d8faa"],["posts/352037321/index.html","d60918730cb243bd649c90fb7e2a74a2"],["posts/3521618732/index.html","cb559cf7f662b99cce65552f50fbcc8e"],["posts/3568552646/index.html","f42a7591bad1b78b1d4abbd65c7e2cb6"],["posts/3603924376/index.html","785b15c170e94f905b958cfab00b0bf0"],["posts/3637847962/index.html","143779392191fc5eceebd57372c4a950"],["posts/3642630198/index.html","3ce952722a331ae0a52089049b08baf8"],["posts/3653662258/index.html","fba8064d10b3b75be8ab7c42f3e5249c"],["posts/3653716295/index.html","37fec78603703c95b57a88454c08623e"],["posts/3657008967/index.html","fb07845a759f73976dd774f99d43c294"],["posts/3668933172/index.html","de5c61f2222df0aa148a33698f254a56"],["posts/3677280829/index.html","79fa0ab9bf2e1014ab9044aabbea3492"],["posts/3687594958/index.html","1adf3f3521b9e2bf190beb2a589cf492"],["posts/369095810/index.html","1d5bce5607b3dceeebb9e8195cfe0a47"],["posts/3695777215/index.html","e185370db9f2c8dbe65534988e7cc15a"],["posts/3736599391/index.html","43764d69210a9ac2a7e7f37bdd0330af"],["posts/3742212493/index.html","ebf1413ea2ab0d01097dbeff13a31137"],["posts/3782208845/index.html","6eca715594d2e2394867ddd3a59ead11"],["posts/3789971938/index.html","bd78e5ad72b11863894b6fe99865cfd2"],["posts/380519286/index.html","edc839bb45879418a9f576d997c8a826"],["posts/3846545990/index.html","ac5aa43702d486c3d3b08b0eac4c0f4e"],["posts/3873710624/index.html","b21380133228434c26a8aaf923d955ed"],["posts/3959327595/index.html","4ec4d6a660dd4ce324906d37aa9372ff"],["posts/3972610476/index.html","2ce748a286d241a5030831fae887e663"],["posts/3995512051/index.html","3f8b6b2df1d9c8ab59abc319112a2080"],["posts/4088452183/index.html","9244331ff643d69a52fa188f215a49f0"],["posts/4116164325/index.html","a6c3be9b67949e7b2e6c9a16b700d00f"],["posts/4158690468/index.html","e385c28fd2df0257341102c396788cad"],["posts/4159187524/index.html","4ba46aacb18abbb62bca44c309e75e3a"],["posts/4197961431/index.html","ff98431a02700c8d80aab60fa592ad16"],["posts/4205536912/index.html","bc63c69a893be41196b836ac64a54b8b"],["posts/4236649/index.html","002e943128508344aef01bceff9b1a58"],["posts/426338252/index.html","6c735ac9e20c62a8a67a93763682dc37"],["posts/450254281/index.html","0d7f3bc9d0495df6f82ebd4aeb0b7aa7"],["posts/4891372/index.html","267f40858514220fb86d3aea8d68404f"],["posts/569337285/index.html","174a48a4de4edb9551b5fe39114ec456"],["posts/570137885/index.html","eb39bb52d0701d564bbbca4aa1c0e8a1"],["posts/570888918/index.html","85f059e4c8537e77bb22635695b41c8e"],["posts/582264328/index.html","be1514cee6a027a95905e8a413a89478"],["posts/632291273/index.html","e9bf32966d8fdf88f4381737fdc4e85a"],["posts/70687890/index.html","d4188813d981c3f2cfe744641a9cac0c"],["posts/719322223/index.html","bd47258db2078539e534bb38df4ac84a"],["posts/720539850/index.html","7e903cb90fe8c03274d3285c14cae0db"],["posts/786195243/index.html","ed5f53638c9ca2466b1cfe11a10e6fbc"],["posts/795474045/index.html","1e71e873d7473ee772f88f9de5e4373e"],["posts/815861661/index.html","3ab2e8b8269b104923b5526ee6140279"],["posts/821259985/index.html","bea423d88fa1e63be238994eae7e66ac"],["posts/828223375/index.html","58d4f763c34e874fe687a9601c1364d1"],["posts/887585917/index.html","8672d52a769e3dbf7dd2c7a71715b02a"],["posts/888549816/index.html","87248ed1681a94207d7756b6a3b86d5c"],["posts/906436376/index.html","6bc5f839491dacaa018074628a48cd63"],["posts/907824546/index.html","77860af3ec428263ba71a1f01dba5334"],["posts/927393529/index.html","f2058ea6d0e1102771b87e44ee7c7f9d"],["posts/94443781/index.html","17221af914bc8dda464fa6de6f01ede2"],["tags/2014/index.html","bc5c1e5b4bdf531332da5870a6e4b748"],["tags/2019/index.html","86ac8153ed8ad326f879603f35a86521"],["tags/AI/index.html","8b5efcab78c1d59ac53389d8c7689c3a"],["tags/AOP/index.html","9beb314ccff0d9e9f77284c68ce17634"],["tags/AR/index.html","9b9792bbb07846c878202c7702069d6a"],["tags/AssetBundle/index.html","124ac04ef63c8b2d22ed0cfd6998b137"],["tags/C/index.html","289dcd4d6c1a97cc36cf8f4facc2bb8b"],["tags/CDN/index.html","e2561fe1a3997380bcab77da95fa5ebb"],["tags/CG/index.html","98562ac784c8a57068c1a653c651e8ce"],["tags/CI/index.html","171f747baceb835ba227bc7147080586"],["tags/CORS/index.html","94000cfedf3c04029aabfdde6389744e"],["tags/CSharp/index.html","a0f4d5f4023e362436bf1cac81c7b40c"],["tags/Castle/index.html","1a17a6f05d6b690b0b65f28e5931688c"],["tags/DBeaver/index.html","b8ddd6a6f8b75c0fe896cbf4aa6bd6c7"],["tags/Dapper/index.html","36b054b015edf0406e547f86ea347c09"],["tags/Docker/index.html","9f6b06d1f83bbfe79dcca0318b15a148"],["tags/Dynamic-Proxy/index.html","bea50b99dad67706de37b7aa8165e157"],["tags/Dynamic-WebApi/index.html","bb06df6b8c3ef9ac8bc4edbff727eb4a"],["tags/EF/index.html","996e07c27cc5169618e4be6164ca999c"],["tags/ELK/index.html","cbfe5413034833e2a7c213655806ca44"],["tags/ES6/index.html","f8d7d74dee1c4a83400a1e636a1b16f2"],["tags/EasyAR/index.html","1436d479825a4a5799792aac062af0b5"],["tags/Excel/index.html","bc2cca41751cc61dc3843b2a4e1e8d09"],["tags/FP/index.html","ca01b4ab2638ad9d2d706ec47265d3de"],["tags/Form/index.html","08bbda4c4ecfe84279e12e6572ac51ba"],["tags/Git/index.html","021e2141608f02d97db6838722a4f34b"],["tags/Github/index.html","65731d86907799a0342dd6d1b40079e6"],["tags/HTML5/index.html","d70521763e5f02f51672fc05edfef66b"],["tags/HTTP/index.html","d27161f77dad6beeb90da38c9f94d0b6"],["tags/Hangfire/index.html","387ce911ea1a6ea4e78df1ee1e478dee"],["tags/Hexo/index.html","9f1e5e4f65ba3ca97acec8494f343147"],["tags/HttpClient/index.html","cc3f1371008a20ae0439a60616adb5e8"],["tags/Hyperlog/index.html","2dc0fe055aa1159fd63248a66f210252"],["tags/IDE/index.html","513f614e88a45b6c243d29a54e601221"],["tags/JS/index.html","3f3db22b2072856e9c4e417e048a2ae3"],["tags/JSON/index.html","ad5f01787be5fa8c5fad90297dd71a7e"],["tags/JSONP/index.html","057b953eee750dcefd4ed29b96f532bd"],["tags/Java/index.html","13a8d5878ea354c568fb48d7e22c45e7"],["tags/JavaScript/index.html","b3e8423d8aac2a612c229f064e80f576"],["tags/Jexus/index.html","c15225532e2e5ee7d44436ff1ed1dab0"],["tags/Kindle/index.html","37bda0e6101c21d5c3443789828d85b1"],["tags/Lambda/index.html","2fbc292350543418c3b80e5d8e49e687"],["tags/Linq/index.html","50e088f47d6425424f1e12569d69c6b2"],["tags/Linux/index.html","6ac620bfa9d9699c9c66617fe3a7a9e4"],["tags/Liquid/index.html","b2fabbf6a01530646806c9f80377ac42"],["tags/Logger/index.html","3baf054a680a2fd403b552867d891ef4"],["tags/Love2D/index.html","f73dafee14d740444a6741f3c8db9852"],["tags/Lua/index.html","f53efcdd38cd04ecf901bc5ad4da7808"],["tags/MMD/index.html","1b95c1ccca49e468d3647063785f106b"],["tags/MSBuild/index.html","923769cbeed8524ff7884f8fb4109f3c"],["tags/MVC/index.html","d6d131903d59d31dc0b26784df02d9f7"],["tags/MVVM/index.html","9e4c648e0ff73796945e0815bc88b600"],["tags/MapReduce/index.html","004db79e646e158b3a71ad18eda1a229"],["tags/Markdown/index.html","ad2f31f31010125c83f809631a165c08"],["tags/Mecanim/index.html","78db7b0d359f7c8f34e753aeed4ea295"],["tags/Mono/index.html","c5c7aab5b42fca012714b7a748b4d322"],["tags/NET-Core/index.html","ee8dc78f62d245a64d59751de63fbb8f"],["tags/NET/index.html","882aaa33ecf44427c21532eb995f8122"],["tags/Nginx/index.html","5808eda02c0373fcaba79309d9c8a953"],["tags/OBJ/index.html","9bb124b8186e863715fe8b062bf6e28a"],["tags/Oracle/index.html","34c39f3ff20db868829925d48f05fd54"],["tags/PL-SQL/index.html","bcab952a1420f58d278ea16945455852"],["tags/POCOController/index.html","8a812a050bae64e1912a74965725a15e"],["tags/PWA/index.html","5a6ef61f14120e8a0e92440198dafbb5"],["tags/Python/index.html","e6c9f6ed92fbfb1e5866364c734b9cca"],["tags/RESTful/index.html","0c97a9023879a58d0163efbd054cce8c"],["tags/RFC/index.html","6ffceea6c81d09b4ff42177ae56ac940"],["tags/RPG/index.html","c85c8c1e9bedb4c23bd7651be3660013"],["tags/RSETful/index.html","a37147436bc532ae08bee92736512228"],["tags/React/index.html","2719e6681722e12586a8268b995a59fc"],["tags/Redis/index.html","4d72efc580130d778fc026d16041ae23"],["tags/Referrer/index.html","916290982332b3aa10295ad0ed5d0340"],["tags/Retrofit/index.html","ad3454bb557088801068542f4d3d87f1"],["tags/SDL/index.html","f2a6a8db76fef4f795ae519e000f5b39"],["tags/SQLite/index.html","4c38803f404e3049db9cc187750cc860"],["tags/SSE/index.html","95ce5e7b4c375a2c43502d42e27dc0cf"],["tags/SVN/index.html","96ab60dcde6668107bb80c0fa7fa723f"],["tags/Script/index.html","520d0ee8ccb1fd68cfae966da513dcef"],["tags/Server酱/index.html","6331cb2c41494c97ee1af6829a55cd83"],["tags/Shader/index.html","d00d6335dddd632570e2c6dcdad61982"],["tags/SignalR/index.html","b927caeec46276428d18a2baa9c38a17"],["tags/Socket/index.html","3e423a015af25e380196d71531ad09d0"],["tags/Sonar/index.html","614191fd1191c4c0dd7556005c9bc548"],["tags/SourceTree/index.html","a7d0e91c30e19d03ec1e5a1806f70a0c"],["tags/Sublime/index.html","68cca14e5443fd9dc026dac9d3f81ecd"],["tags/Swagger/index.html","a1b473cb8b19af2b3c71dba620d3b2f7"],["tags/Trace/index.html","c2cdb4cc1043261116e018e88de7e403"],["tags/Travis/index.html","2d2fe3b6330947253b4f6be6e8e08d72"],["tags/Unity/index.html","cd85d4e3832dc5cd072ad3ad0a21eefe"],["tags/Unity3D/index.html","439a4d51cb470ac7e843d77354c99a0e"],["tags/Unity3D/pages/2/index.html","3520e55c8e1244233a3554a34275ba8e"],["tags/Unity3D/pages/3/index.html","561de258bf1dc9de85843df0e5668280"],["tags/VSCode/index.html","f23b4a4518f24a04546f1e50377b9d1f"],["tags/Valine/index.html","655d07b4f57466abfd7b3db4067a87e8"],["tags/Visual-Studio/index.html","f8c1d23d8a625a32f4ecc57428a10448"],["tags/Vue/index.html","ad4dc0ef9e8652679867ec0b59f2da42"],["tags/WSL/index.html","ade442cd62bf0dcf53bf346f49c02654"],["tags/Web-API/index.html","99e13442d66b8e766bb57e12fe29e541"],["tags/Web/index.html","0281aca6483b8e5552332f2ec1c6345f"],["tags/WebApi/index.html","0e51c4e15b9a9f21806a9bb2760ec227"],["tags/WebSocket/index.html","977bb4d69879984a44bc703571eb1791"],["tags/Wechat/index.html","12b69dfd9f8e40872149c45b094d0a43"],["tags/Windows/index.html","4ad3581a4c658865fb6f8999bb28f3e1"],["tags/disunity/index.html","5e55ecf47c0409670ff45fab444c90a9"],["tags/index.html","c902f1bbd4e079e8ac44053f5a095741"],["tags/jsDelivr/index.html","9c573427b899345e77f5991cab40d7cb"],["tags/matplotlib/index.html","7745efd18a098b6f654b1f82a2447d6d"],["tags/uGUI/index.html","136f072cc958d5c0e971ea23d1a1b724"],["tags/zTree/index.html","14547a5a593fce34b91ed36d7cc383e6"],["tags/一出好戏/index.html","de0e296fd6cd177cfdb5d78ab732b4ea"],["tags/七牛/index.html","ceabbd20fe44705439ba277fe5db4d6c"],["tags/主从复制/index.html","074c640d38e8c9665cf109916d731c63"],["tags/事件/index.html","3d55b43323fa259d085799166392cb4c"],["tags/二维码/index.html","b8201cd50e816308cc7db3d76cfadea8"],["tags/云音乐/index.html","21dbba5c5b65af67de8ee8cd20eb63ea"],["tags/互联网/index.html","3e9ae880f1e7ea6491977cb745ac0b44"],["tags/亲情/index.html","06c9713d213e3d19260b5f4d786ce533"],["tags/人文/index.html","df778e2327713f63139d1491b92c251f"],["tags/人生/index.html","0ac514fa34e29efbc92c9996b0e6ba9a"],["tags/仙剑奇侠传/index.html","0dc0cef8ef239bae9a71c05e4d65327e"],["tags/价值/index.html","e412f1c51ba3fde89469999cc17e1ed5"],["tags/优化/index.html","4ecc31e5e90d6ebc120317efe832a992"],["tags/全智贤/index.html","bd7d568445362a5c8a51be25a2e44239"],["tags/公众号/index.html","0f57c4bf59a81e3c5f317764828c73f0"],["tags/关卡系统/index.html","9ef1d239990e8d9d211f6ec48b61ed1f"],["tags/函数式编程/index.html","2257f65b548f3ccdb104b98efb1a2cd3"],["tags/别离/index.html","c37bd2199035d0c07bfcde8208adbb57"],["tags/前任/index.html","41e918fd51715007c48fe6425b30813d"],["tags/前端/index.html","f71cf1620dacbb2c918cc27da4c630e1"],["tags/剑指Offer/index.html","a636fc11587e57822bd4527343a1dbfa"],["tags/加密/index.html","3898d8d6e07bc0ec97bb6f1fd45cf6d7"],["tags/动态代理/index.html","7638ef8af36c2fcefa16094766738ab4"],["tags/动态加载/index.html","d92351e7f41441ae58767470beebd520"],["tags/动画/index.html","9c6073c30a3f4f8e283768490e4ffe49"],["tags/单位/index.html","b1258dd0c42d953d409bd3de39319e22"],["tags/单机游戏/index.html","c38e7a6ef9a6b8667879b280c8200574"],["tags/印度/index.html","844746bba9b59a384ea1f9fc3b355c5e"],["tags/历史/index.html","d518420a459266809873ff3ad303be0f"],["tags/反编译/index.html","2f9aada2ed419c5330875181f4b66ab0"],["tags/同步/index.html","d06e883b5392e63923f111259f76b4a0"],["tags/后端/index.html","ff5f6f563ec76f66664959976c01596e"],["tags/命令/index.html","bb477ec96e7314ed8b1d5e43dd98e7b3"],["tags/和平/index.html","42694a1fe2d812bccdc5fed943b661ca"],["tags/响应式/index.html","43b57d8ccc87f067aa0bd18b68e4dc02"],["tags/哲学/index.html","e64f4675b232cda646a3d83593b2fc35"],["tags/回家/index.html","202551c01c4037e54350ac7dda0140c2"],["tags/回忆/index.html","1771dbbf7e4b6ce02211eae8b4a42617"],["tags/回顾/index.html","4a033b9df1c30e5ff779d9373c77201d"],["tags/回首/index.html","3f6e45d1b8da945f57129ebeafabc3e5"],["tags/图床/index.html","787eb9c8ed5c7bc90e9655cdf0085ba5"],["tags/图形/index.html","2387d70c3e3a40316522cfdb53010593"],["tags/地图/index.html","5b8b3e8f60d5eed31f82860691d1a832"],["tags/塔防/index.html","2fe7001113e74f82649ba2b2a5848b00"],["tags/增强现实/index.html","40208ddc5870cae6568c6542471dc044"],["tags/壁纸/index.html","85df7b24947531a9c69355da2d1d1e53"],["tags/夏目漱石/index.html","a7d5ab94de9e055cd973cb26415a01b7"],["tags/多线程/index.html","f88ac71a8a407460608eb0f88677231e"],["tags/大护法/index.html","c3e503846a364b1ee2c065ecc9ed58df"],["tags/委托/index.html","a3e5d867eca4da298c6e56a5c59b1e6e"],["tags/孤独/index.html","9468bd66c4a7ff5f3461fa3bf200e3f9"],["tags/审计/index.html","d82bf55c389989b5289ff89da398aad4"],["tags/展望/index.html","efb62e7f98d0e7dd325a4f7cfe747800"],["tags/工作/index.html","97713a32c0784fa444ba68a20c13049c"],["tags/平凡/index.html","0fa71ea8d434824a8e46e1b41bf88e15"],["tags/年华/index.html","2c9289470ec1c9a6c2c6ff74ea8eb614"],["tags/年度/index.html","038fe6f52f8376b5c9830bf2e81ae6b0"],["tags/开源/index.html","2b0be12c9e72e518cd8505ae28acca24"],["tags/异常/index.html","59c2cfb47833bc5d4bdc131006d863f8"],["tags/异步/index.html","e6e81dab36202e34e7cd25ccbec2844a"],["tags/引擎/index.html","65e5a7f83cc201c0fa93a6e7cdbe45d9"],["tags/影评/index.html","d7f1d6b9ff7fe9c18913959cf6daabe4"],["tags/微信/index.html","a21cbcb1ef8b18151b01b00dd2a7b870"],["tags/微博/index.html","68312169c835a722418501c6a1c7b906"],["tags/心情/index.html","f1b43b612b03ebf927632f19847d36f3"],["tags/思维/index.html","1993b049a4c42a5ffbcc2f3bf25a450b"],["tags/总结/index.html","433687953f51d478eb270a53afb77be4"],["tags/想法/index.html","87e7c3f04fbc129495f90879be1ba415"],["tags/感悟/index.html","8b899f054511d9da425ecd01a59424c5"],["tags/成长/index.html","d3b1f87d8ec43cb19db47df88af8b623"],["tags/我是猫/index.html","32af6594b41e486795c155be84b633f2"],["tags/扩展/index.html","4958a5034d0fb92e28d99a091a364476"],["tags/扩展方法/index.html","8966f0da6f9542aff9f28beced2052a1"],["tags/技术/index.html","d659fcf9458f3c3d39e876250b3fb734"],["tags/拖拽/index.html","4e933252d932a22c5f70179257da937e"],["tags/插件/index.html","3934cda2d0e3b9f1cbda9e79e42325c5"],["tags/插件化/index.html","dc630bdd13e15525460fafce2f77126e"],["tags/数字/index.html","e73a15e34a6d627ccfc047aeb37cb987"],["tags/数学/index.html","4d93095f2631b85a97e2a7c78714b67b"],["tags/数据/index.html","0e3506dec4dd8efd73e89dc69ec9e87b"],["tags/数据交换/index.html","6d137ad8b140c0108ad382849dd790b7"],["tags/数据库/index.html","3ea68493b2b90cf8b06a47763e7ed9f6"],["tags/文本分类/index.html","027d3864f45b2692137400975db997b4"],["tags/无问西东/index.html","051d6f125f99c0fa39ebbbe75faed0b7"],["tags/日剧/index.html","51c6e6effd60af700d0baba6748b3e6a"],["tags/日志/index.html","6969a639ea315f248a925d7d40e3212d"],["tags/日本文学/index.html","51e3d46410984277432e7338273c76a5"],["tags/时区/index.html","eba0b212940b15332d603c6f629b6538"],["tags/时间/index.html","fdfc80dc807f1c9f55f5357c61c5f761"],["tags/服务器/index.html","41f930970835d813afa9bf4021cfee59"],["tags/朝圣/index.html","264bf59feb2427d860b99cf3d144f5dc"],["tags/朴素贝叶斯/index.html","afdb18cadaf4f2a8ceabf2681fc422a1"],["tags/架构/index.html","af44fbfaffeb3593d08a6200d06d3a3b"],["tags/标注/index.html","b57a9a8b0f83ebc4db8eca9677e46eb6"],["tags/校验/index.html","9f3a98f05eee1ffcd3c2fec56792644d"],["tags/格式/index.html","db548f39afef5db0ef502a72719e8c32"],["tags/格式化/index.html","8d6675edf066cce64f2d82c3423d2b5b"],["tags/桌面/index.html","44554e2771aa3b74c4129f669f0415e2"],["tags/梦想/index.html","ce7c1ab38d9dbd007d25bf615cd2351a"],["tags/概率/index.html","fa7c9967007d9085e97c9ddfc885ed75"],["tags/模板/index.html","a1b9cf2ffbe20416e5a0efff15272967"],["tags/模板引擎/index.html","406c21b4ba9738707c19fcd0918a7f8d"],["tags/毕业/index.html","9ebfd5843a250e256a6ea550a3927c62"],["tags/毕业季/index.html","7ae4b8d3ee5a432df2137d0d81b3e9f7"],["tags/消息/index.html","b238ae6391fe791daffb1e03f80065ca"],["tags/游戏/index.html","e49394054ef6a6fe6aaed815c5e2d5f4"],["tags/游戏/pages/2/index.html","d0e26f1430424f078a6f0dca52ea303c"],["tags/游戏开发/index.html","b9fc4faf499c37beda28506520d924aa"],["tags/游戏引擎/index.html","3478b3b60f451caabddcf7ca3db78135"],["tags/爱情/index.html","379c4bf16cf7eb95ffc7f07f59b8aa89"],["tags/版本控制/index.html","a026a3902a33644c12b54f04b04201f6"],["tags/版权/index.html","d92a48af541418e5fbe591365c084cf6"],["tags/特性/index.html","94b69496dafa68412e140574375a666c"],["tags/状态/index.html","77056b9b811f2a565b8d8d6920c1f45e"],["tags/现实/index.html","dd6df379b9dc1202703991146f7e267d"],["tags/生活/index.html","f8b680e1219e2d3262e1d3195b658d57"],["tags/电影/index.html","5c2f2b791de556560564efcf78b936c8"],["tags/画家/index.html","cb94c0d43956809739a5aab14a799614"],["tags/知识共享/index.html","289b6375a6b2e85d16bcb7ff667537e8"],["tags/矫情/index.html","319827ade36e6ff9276236a41f83fc47"],["tags/程序员/index.html","6e1fe7f53acbb3201420ae1e1a9e165c"],["tags/穹之扉/index.html","d90ff8ff2141eff53d1029d2b7fa1c8a"],["tags/穿搭/index.html","06d2a4526a62db07cb5c9265bbd83158"],["tags/童话/index.html","a92b2d54b11082cab79ee0ea35f9c06f"],["tags/笔记/index.html","2487f52637423735f0d166e57b0b9dbf"],["tags/算法/index.html","d4f5f28050534226405a6d99bf413c69"],["tags/米花之味/index.html","697a1a5af3e2924c907065f031fcf41a"],["tags/缓存/index.html","ec668a8591aeda8a3883d92cc7d05571"],["tags/编程/index.html","543f857d2c7ceb1c4723891853b935b8"],["tags/编译/index.html","4e2ed7e1d954be7ee92be93c998b6e39"],["tags/编辑器/index.html","5402c4d9b0c5423427e5e4050dcc3a7e"],["tags/网易/index.html","1df32639616dedcaae72c0232b505bfd"],["tags/脚本/index.html","f78a7405d2e94aa41124670da78d37fa"],["tags/脚本语言/index.html","a38a3fb6559fda57bbb0e8b80d375dce"],["tags/虚拟摇杆/index.html","fba31ed588c49e09e5d59f1f70d07cd0"],["tags/蛋炒饭/index.html","3ea24adb6857e5b381d13d433b7d3a63"],["tags/表单/index.html","dd07a4ca84124bb43f85bdd56f1f0ca3"],["tags/表达式树/index.html","d2c0d677e698e62f662a6081dc249a0c"],["tags/装饰器/index.html","6ad9d9a515699bd92d32ea752555c4e9"],["tags/西安/index.html","43aee79ed2a93daccc33f28aa6dfc10a"],["tags/计算机图形/index.html","e68c8bc5514d7297406e4109fb2c0e65"],["tags/设计/index.html","6e4582f1609d74bb11a12d02ccb84b46"],["tags/设计模式/index.html","0f9fd79de59dd53322c301f7436bf7fe"],["tags/访问量/index.html","6403ddeb6922faef679da9cc074286e0"],["tags/评论/index.html","208529ffe6efbe7b9f46a3106793a749"],["tags/词云/index.html","2b7000871f8ef13e3667806f27b093f3"],["tags/诗人/index.html","7cce3e99f1873bcb0f43831ea9500b4a"],["tags/语法/index.html","b3e680cc90c813691820f93fc468827d"],["tags/请记住我/index.html","c111c0cbf573cf8d7514db41ead3e0ce"],["tags/读书/index.html","df5a47fe52467bbf7091eb4d0b9c5e89"],["tags/读写分离/index.html","a8391647dfe8f717494445917354e431"],["tags/调试/index.html","a8bc46895d59edff561cefb9890554a6"],["tags/贝塞尔曲线/index.html","907616507520e043d2887b459061249f"],["tags/贪吃蛇/index.html","1788d18a408eef6560887e2316e2e4a5"],["tags/资源提取/index.html","3a994844290ce90fc510b75d9ec2ebc4"],["tags/跨域/index.html","2e62c2643b751b4c2f9b377c1802e54f"],["tags/跨平台/index.html","2bcff1f43be0726d5f94194810658cfe"],["tags/转盘/index.html","8da60a18ac576f2287f1022c67a8160d"],["tags/迁移/index.html","a800a0d758db7f6f7c62c527cf1aa2c6"],["tags/通信/index.html","6a24c6d06f5b94c7ba2a9a572abe7c4e"],["tags/邪不压正/index.html","008f4826a213afbefddd1ffe1f8219d5"],["tags/部署/index.html","e4b27520b5aea75351f107a544829c34"],["tags/配载/index.html","8fd1ebe1e98d8ee8abbf9c5b6c72e2f1"],["tags/重试/index.html","79bcbac645d0b294f61450722445c03a"],["tags/长安/index.html","0d80e22389e3f2b27b6520150e1f314f"],["tags/长安十二时辰/index.html","76c430f2008554b925cc7170fa3078ec"],["tags/阅读/index.html","a51d2618bb572a7ad36481102ac157aa"],["tags/阿里/index.html","1e1d1f5b1a770b96ff63a01c1085f052"],["tags/随笔/index.html","3495a5bd7b464721efbf02ddba42e909"],["tags/霍金/index.html","07e2c709f92a74d957574648307d26cf"],["tags/青春/index.html","5dc3bff531b2de2da58c52073e1bb878"],["tags/面试/index.html","2a54c78cc0744852c559dd699eeb648d"],["tags/韩寒/index.html","307a5c9333b4ce640752dd4428cd076e"],["tags/马尔克斯/index.html","1fc9d6b6336b48e2f3661d611aebc78c"],["tags/验证/index.html","6c94af2117f084eb60a53ee2df6e9a83"],["tags/黑客/index.html","f1a38b8ecc95a74acbc3627d88878db0"],["wiki/index.html","d49799c45f74b92b44b7aabd7f224628"],["works/index.html","db2eb66bbf9ba0a1c7f9856a74e831f2"]];
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







