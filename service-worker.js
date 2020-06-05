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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","9c4b7ba9eb8ce0f9c2410612291f62ec"],["archives/2014/12/index.html","3db32282721c8be798fceeafa4f6f03f"],["archives/2014/index.html","195976bcb20f8d43ff4c4c65fc8412a9"],["archives/2015/01/index.html","42a325137841e0bd8891e52494add538"],["archives/2015/02/index.html","ec82b44e540b963bd8104abd46c267e5"],["archives/2015/03/index.html","39827654089630b65efa88526f728cec"],["archives/2015/04/index.html","b804378adceaf9daa1ef3eedcbc171fb"],["archives/2015/05/index.html","516ecd3bd0759e0daf46fe39573eaf8e"],["archives/2015/06/index.html","0b1f152e3e0043296745ffc5eb3855be"],["archives/2015/07/index.html","e0885f0bbc36062b05a59f842318cd34"],["archives/2015/08/index.html","370d506471a915e80ac889156ca039ea"],["archives/2015/09/index.html","e1a8a8cae6fa62bb12c81d184a5d9615"],["archives/2015/10/index.html","c77ef62ac732467259b8670dd1ec7d7c"],["archives/2015/11/index.html","974d15e2ffefa5ab793a27dfca7c923a"],["archives/2015/12/index.html","44660d210db48f084a8ae05384a81a23"],["archives/2015/index.html","e30d3cf3204389fb8f92aae51a6e17e5"],["archives/2015/pages/2/index.html","2714a27d2c75948b54957da461831c7d"],["archives/2015/pages/3/index.html","389a9fe13f1e0845a765511c561835c3"],["archives/2015/pages/4/index.html","801f5a197171b0ccefad14a4e3ca0852"],["archives/2015/pages/5/index.html","012c09b1c2114ac3b528b5b19eb59a2c"],["archives/2015/pages/6/index.html","280ecd98949455e89532139729eb3ed4"],["archives/2016/01/index.html","5e01dad0d7f1e72829e9d3cb9d600561"],["archives/2016/03/index.html","1c275f6ce1006b70ac6f5aaa3f29fafa"],["archives/2016/05/index.html","19deb0ca7afd36aeea12221354733156"],["archives/2016/06/index.html","fe7143b0a4207c53e347561368233ef9"],["archives/2016/07/index.html","fbbd4f24c2047336d363909f3837e97b"],["archives/2016/09/index.html","d9b0139ed4a0e27bb587669ce57d9a00"],["archives/2016/10/index.html","1ca3e21c7c9fbd58bcb316bcc2b75413"],["archives/2016/11/index.html","ed1964388cbcc1a572851c80b548e75a"],["archives/2016/index.html","5453a50a20660190ed31f53eb7000567"],["archives/2016/pages/2/index.html","7fb04177ddc1ed70a37a5d3a1f16531c"],["archives/2016/pages/3/index.html","ce0d1f493ef6f9220a089defeb66d3d1"],["archives/2017/02/index.html","cade8d6998c4f6409bfb807716066e52"],["archives/2017/03/index.html","cc70ba6217f837f2f824e5b98272c1ad"],["archives/2017/04/index.html","0776d725a9ea1b1a664a56d9d8fe06b5"],["archives/2017/05/index.html","3724ab47ee9b3da09263d26d0841156a"],["archives/2017/07/index.html","484ac9b03d624eec888c3d0ee9d779a5"],["archives/2017/08/index.html","1dacf31ed0177a54b9aefb51c8a7b3f0"],["archives/2017/09/index.html","441611a8b3a3347496ade94dae0f2d5d"],["archives/2017/10/index.html","6d6785162a1ab5d058d7a00c046a8cfd"],["archives/2017/11/index.html","0ffd233f115e99eac9928daf9ca086d1"],["archives/2017/12/index.html","051cf2ca0f63bb03a35d351422e5ad8a"],["archives/2017/index.html","8281fff3d87e73e42c6a8368c558d416"],["archives/2017/pages/2/index.html","c74793ed78c2f2b95db480f075333a73"],["archives/2018/01/index.html","d14327c608320347e9fdd933df258529"],["archives/2018/02/index.html","850b2498c930dfe8f1382de08b543182"],["archives/2018/03/index.html","055b451d30fa4011885af540a07cbc22"],["archives/2018/04/index.html","13bd69eca94240b95d8edce5f59407a7"],["archives/2018/05/index.html","193d75bf75e6e4ea2d5766ccd44c080d"],["archives/2018/06/index.html","46ff3fc802af0c852a474c7734cb21bc"],["archives/2018/07/index.html","e18662e66e5dffe535bce7d3f4a79a60"],["archives/2018/08/index.html","d88016166c73544155133fb5bc970b54"],["archives/2018/09/index.html","bba3df3b7f25c41719d559e23f8443d9"],["archives/2018/10/index.html","c24fa576002470a9d1b9cce92a8a9cc2"],["archives/2018/index.html","5a74debb4c319eda6d80ae2c316d4817"],["archives/2018/pages/2/index.html","e034d2e0ea8ae8b8a18bc971d94a345b"],["archives/2018/pages/3/index.html","c050f187192ca185804ba16128f04230"],["archives/2018/pages/4/index.html","bb763d7a0067834c57dc1081b8688f04"],["archives/2019/01/index.html","c014666d5ebc2ece7317ecd16f8ea152"],["archives/2019/02/index.html","62f10c9b7d0df1fb9c317ee469fa0208"],["archives/2019/03/index.html","d2c1075f74bd4be21fe68ee39d929145"],["archives/2019/04/index.html","93ff4dea1140528f8c15c17405af57eb"],["archives/2019/05/index.html","abdae2e73f02aa2cbeaee671670ccf52"],["archives/2019/06/index.html","25551a0a2825b2472574b90a11390269"],["archives/2019/07/index.html","3f5f55d991965acc949a9dc36a1bc455"],["archives/2019/08/index.html","8e48829592a453e4cdf5f2eba8ea0dcf"],["archives/2019/09/index.html","f1bb82eccc30e22945517713dd7f6c3b"],["archives/2019/10/index.html","53725327ae24a062d35274deddbaca56"],["archives/2019/11/index.html","424233c9cc3940b7f3d3b222430115fe"],["archives/2019/12/index.html","5df33c0696d02d26e006ef6d94abb5f4"],["archives/2019/index.html","0bfbb95c315d89b68e6b2beb0d72b914"],["archives/2019/pages/2/index.html","5b4896480cb4a6174d8bb72cf8d6a311"],["archives/2019/pages/3/index.html","2398edea5dec0afc736ff874d45605d1"],["archives/2020/01/index.html","7ce1d5979cb60479cba3eded50c82782"],["archives/2020/02/index.html","2ef7b5dea42cbb132e488c3809cb156c"],["archives/2020/04/index.html","da799fe7ba78f1ad53147d43b1ba1c5e"],["archives/2020/05/index.html","d9582ea583d2c132be989730c9a43c1f"],["archives/2020/index.html","ee2909e164cc6e53ed02990e1a9c22a8"],["archives/index.html","d6c69a330eecc0a7ecb5c823833cd1d2"],["archives/pages/10/index.html","5e4e8a39a2693fa08e6d32346ee0adea"],["archives/pages/11/index.html","96fc4c7a607689930b096231386ae23c"],["archives/pages/12/index.html","78716c442d59b4b64f59fadc1e213411"],["archives/pages/13/index.html","cead1513c90e9f6c4b7fe7bda075023a"],["archives/pages/14/index.html","8be9aa5b8fbebf0154d1622a8ea73b39"],["archives/pages/15/index.html","f637f494dda658e5d523d276cf4707b0"],["archives/pages/16/index.html","3da10aeb54420db1f67271e63e538ea4"],["archives/pages/17/index.html","2f5e4919a1fc527b7e128632c4114a39"],["archives/pages/2/index.html","b5091332c33d20c2ecd821fd3a2245c3"],["archives/pages/3/index.html","535bb7af6331e01cf7ee143e6a35949c"],["archives/pages/4/index.html","e80478f8f2d5ca14cf8cd5170e0d7452"],["archives/pages/5/index.html","f73f2e31a7f1fbbd68da704cec39fb10"],["archives/pages/6/index.html","987af10b53f46425700850c1da78edf2"],["archives/pages/7/index.html","d99211a116c3ed2775203987c51df03e"],["archives/pages/8/index.html","322b9b33e6290e6e6721a573d0715afb"],["archives/pages/9/index.html","dda9ae41c23316eafc2b1f7cc02c3384"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","26ed600e5375fd9ff93ac9444bb0c3db"],["categories/Unity3D/index.html","8329eda79a2729885984867401eb047e"],["categories/Unity3D/pages/2/index.html","22b58066ee8d1ee3f5a8f6809a7dd986"],["categories/index.html","a151bc5068080c8e3ff558da31f45f2b"],["categories/人工智能/index.html","ecaef2cea1fad71fb95ea8761e37c0b2"],["categories/前端开发/index.html","f997f9631d1ebc282e3011131a20d204"],["categories/单机游戏/index.html","0915d40b70d10d75a073cb21f5bef8ae"],["categories/开发工具/index.html","faf15d7ee65771b4e69a74015415c9df"],["categories/数据分析/index.html","95642fd17258c7523998b0613a3244a4"],["categories/数据存储/index.html","4e99135ee89056275531cb5c90a8e117"],["categories/游戏开发/index.html","cd9ceff70b990c6dbf8af6dd1844a352"],["categories/游戏开发/pages/2/index.html","699d36648e240a7ae49f4290d56f2c7e"],["categories/游戏引擎/index.html","bdb865d9c6328a0f96cf6260cb3ca5fc"],["categories/独立博客/index.html","15b5fb97fb981c87a0cb8d6feff84fc5"],["categories/生活感悟/index.html","d92efc6a593af72b51e6568900cb4c55"],["categories/生活感悟/pages/2/index.html","003cae50d43f41460244775de2c3575d"],["categories/生活感悟/pages/3/index.html","b610bbd6109d2e194680e09f0344d4ce"],["categories/编程语言/index.html","1cf01f31054484f47bf57fc6e3899ea8"],["categories/编程语言/pages/2/index.html","1cbb351a3431ce7cc8e2aee04907054a"],["categories/编程语言/pages/3/index.html","57856b778260e974e1166381fff6b7f8"],["categories/编程语言/pages/4/index.html","6b88de2217e0e28679aaecd405aef168"],["categories/编程语言/pages/5/index.html","2cee7e02cc92ce115505e93d0299346c"],["categories/读书笔记/index.html","1257b9e07b2b1529ca252b67797020f0"],["categories/读书笔记/pages/2/index.html","8966209fd91902543c7cd8a06cea3a9b"],["friends/index.html","4225244a5d5fe34273b1f5751ba9d967"],["index.html","d157c405b531251c962a4a3f8f9f35a5"],["movies/index.html","7d6f0bd8bf8232688bbb544af11d7c2e"],["musics/index.html","ef601080d10cd6f7e035b6a9c92d9dc7"],["pages/10/index.html","09842f91e36f3fce4e30167f03388fb0"],["pages/11/index.html","a01a2d8aaac56dbd46404b666a4dc066"],["pages/12/index.html","a3ac1d73ea769d8d4b41f331f312db45"],["pages/13/index.html","10ac1ad4cf6f68c2467f5ca10e03ea47"],["pages/14/index.html","c3efaa55f14c19bed16b7976f084433b"],["pages/15/index.html","92b639dc86e68561a01fddf3e7589e8f"],["pages/16/index.html","6743c61342abbeeaaf8ceb05e568b28a"],["pages/17/index.html","b2c20e014b30050c550bf3fa0dcb08d3"],["pages/2/index.html","b6b4cc544079643a28b1bd08fdd49300"],["pages/3/index.html","bdd39e90b0cdb3dd29242c29e539b91e"],["pages/4/index.html","61866844630094a0236b148f5c021795"],["pages/5/index.html","c6a091561abc62c20996ba50e7c6a05e"],["pages/6/index.html","824b56051602068c219345bdb70649a5"],["pages/7/index.html","3fede793fc1f839271da99bc59fbc3fe"],["pages/8/index.html","4c064e3debcf1ad11f69a3e89bb46a91"],["pages/9/index.html","fc4f749db48eb59ba321cf5e10269108"],["posts/1059499448/index.html","e44763bafdf485395940cda1029ef447"],["posts/1071063696/index.html","bd599a42d11562db6e17cc6aa640977a"],["posts/1082185388/index.html","cf036f05ae283061ff1b1c4ad0c545b3"],["posts/1099762326/index.html","fa5ecc39176b4647716d6258a2fb6336"],["posts/1113828794/index.html","347b29bcfc0020abcf84eda45f0a8d57"],["posts/1118169753/index.html","b4b05d7f8f45b02072c692651f3bf635"],["posts/1122710277/index.html","58d6e447b7bf0ec10e99a5075f020690"],["posts/1124152964/index.html","fd7ec51cb395331989c12fec32223f3a"],["posts/1127467740/index.html","dbf6d40490200a836c24ec38d4d31391"],["posts/1150071886/index.html","565c1f5e959493626e20060f8466df28"],["posts/1150143610/index.html","ab012d540e5affc6dc760c7bbcbb5481"],["posts/1152813120/index.html","1727b80c1626d92ff1ddf23ce62a5d9b"],["posts/115524443/index.html","7f549dd7ee448a8eaa73c4e30fc91c68"],["posts/1156673678/index.html","314187c92b78b3c32c5bc188029b44f9"],["posts/1166840790/index.html","53651f023dfe74b09a90d3377c0b6cc8"],["posts/116795088/index.html","472c2aaca32c0a08903b59075743a354"],["posts/1176959868/index.html","d7d3887272d7466c230190c23029ef5d"],["posts/118272597/index.html","57f8f3aed1ed2a337bb413e13ac588a8"],["posts/1190622881/index.html","df1db2aee39b1f49fc587996685491c2"],["posts/123663202/index.html","a9614543fa2c41ed2cb2a88e93f75ed4"],["posts/124807650/index.html","627086a9ea0ed35b3dd5369803b61ba5"],["posts/1254783039/index.html","e3e5ed066ace4f6916a60af13ae61389"],["posts/1289244227/index.html","01d7812cd1d4f2322bd7f129c8f105d0"],["posts/1320325685/index.html","40a7c4c944575d966c0a1d97e64584fb"],["posts/1329254441/index.html","c1ab1130ece518cb77668ca5d3083b82"],["posts/1357715684/index.html","d670539efe42b9888155855d8d8a41d9"],["posts/1358971951/index.html","2caa23f9353be9f0762e33d71ee9d92a"],["posts/1386017461/index.html","d960b0f52384ab250f9056c9253d3a3b"],["posts/1394521917/index.html","62c990182bf8d0221c2d3f071c78b1f7"],["posts/1397717193/index.html","069b054bc6266e5e3c44886f89c169d5"],["posts/1417719502/index.html","fbddab2df8074c0bb72917a3cb7ec58a"],["posts/1424645834/index.html","c631a8a40e54e82356a43d085a059f20"],["posts/1444577573/index.html","37140232a42d151fca11d34ba253a925"],["posts/1467630055/index.html","4b23a5b68f38606838ae8f018763901c"],["posts/1478979553/index.html","a540a63f5b2a9ed4cdf71de6f5df5222"],["posts/1540537013/index.html","fd6e57b06c7dc2647ced663466eac7ef"],["posts/166983157/index.html","c75d093c37ecc5ce3d09a0775d083b87"],["posts/1670305415/index.html","a181ff8f7a4cec7de9c986aad8644101"],["posts/1684318907/index.html","eb8cc446e6e2381e9b219f1d800bbfd6"],["posts/169430744/index.html","6bf683bc02c93d71c3f27a4447208991"],["posts/1700650235/index.html","258c7c4abe97b7527049f39f2dd34ba9"],["posts/172426938/index.html","148c620297a0ce89099a48e5a65c4e6f"],["posts/1836680899/index.html","1a428e7b02cefd331f3b4b4f7517463c"],["posts/183718218/index.html","1ce2d59b6f089012280c51dd00d94468"],["posts/187480982/index.html","b40a58ecea33c99bf15267a0133fe245"],["posts/1930050594/index.html","0439990d862e6848bd1a822ea3e7dc66"],["posts/1933583281/index.html","8904e96b4ff543686c4e0749d1b7b359"],["posts/1940333895/index.html","9cb0f862a8c23b2501b549f6445e7b8e"],["posts/1960676615/index.html","6e3af46ac98ff1af90f08ef10c37a513"],["posts/1983298072/index.html","c238c7d1a8b7d75548fd26a73cbe1ea9"],["posts/1989654282/index.html","6c7ea1ee92ff653faa87f78af65f5961"],["posts/2015300310/index.html","bfe46acc0478a82c7fcada80c399b88b"],["posts/2038378679/index.html","ae5e38b9a4f1c0bba3357522c645c55a"],["posts/2041685704/index.html","a9e414075dfa8e72bbbf3505626a6fea"],["posts/21112647/index.html","40e18b8e8f9e3f611e7a48e7070133db"],["posts/2158696176/index.html","5d8f20d2e110db458db90162a1e7d9b7"],["posts/2171683728/index.html","704d71d3d80ed53507576332cc6841de"],["posts/2186770732/index.html","44303a307cf8b5ecc2a4258467ffed40"],["posts/2275646954/index.html","018204dc72a441de6a50dd8bc621e909"],["posts/2314414875/index.html","db4710e0575962905b573aea18cfd8fd"],["posts/2318173297/index.html","5dd8867ca0f2085735189a2481fc5b46"],["posts/2418566449/index.html","429d6cc5298697a61c9d48b322908eb2"],["posts/2436573863/index.html","a4b6007db71d6de1076f8cda3321bbb7"],["posts/2462008667/index.html","f9bec945cfa735f24f2434da5bf50c2b"],["posts/2463121881/index.html","e2e8aa2bf781dceb55044ad57cd194c8"],["posts/2488769283/index.html","37f85de765871e45a31ccf8bdb1257df"],["posts/2527231326/index.html","72b669d7b3dcd9f44439d92b595991a1"],["posts/2583252123/index.html","44c61457b1e1c343b307ec663f7a6d86"],["posts/2613006280/index.html","c0d0e6876cec3fd7cd74d42728b73543"],["posts/2617501472/index.html","846d71361a1318e633ab0b5d68ca0e9e"],["posts/2676125676/index.html","05e169fd9a619df067102724a2c7d503"],["posts/2734896333/index.html","f4304948e7daedf43317b3aa6c03f052"],["posts/2752169106/index.html","a59bddcbb8a5466624cb23d57e919326"],["posts/2799263488/index.html","702fce4a026fe3bc15fb39fedb641eed"],["posts/2805694118/index.html","79aafd1137073e2aa0d0bc25cd5ebfbb"],["posts/2809571715/index.html","b0117937157e1ebb61048c5b98dc0177"],["posts/2822230423/index.html","8fd9e162f31be0cdb69c5185028d46a4"],["posts/2829333122/index.html","3d7d1ed513553722e62ff1780b70cb3f"],["posts/2911923212/index.html","ee1d58cdc92c26d86a3788ef21bf2383"],["posts/2941880815/index.html","872752dd8f0cf0609e32f45b709aa136"],["posts/2950334112/index.html","289a780a0d670d7fd4aad9131d986cfb"],["posts/2954591764/index.html","c13e6add84006b9646e8b4c816b57ba2"],["posts/3019914405/index.html","6731a34a2ceb3fc8cc201790ceb74321"],["posts/3032366281/index.html","3ef12489957d38cf71f2d8229cda050b"],["posts/3040357134/index.html","811809d20257ca8f11d4982fb4fc36b1"],["posts/305484621/index.html","32098dcd4f5cd271d8058f6f58398142"],["posts/3083474169/index.html","518ec4bcb91e9ea10d7ee9af91e430a5"],["posts/3099575458/index.html","178587a00cbde1788bab53d74f0fb726"],["posts/3111375079/index.html","630f43f869e5c6dc3a7a607f339538c0"],["posts/3120185261/index.html","df52cfcaa5686e1adfe610b88ead1629"],["posts/3131944018/index.html","e25122bca7587046ea24e44cdc43dd4d"],["posts/316230277/index.html","cca0f1284494aaf70998f43040d0423d"],["posts/3175881014/index.html","de2e506f6b56d44fa57b55921676b954"],["posts/3222622531/index.html","2f5e8de7b1a58f8104007c046eb60078"],["posts/3247186509/index.html","167d116196a5ded0e4b06ccadb329005"],["posts/3269605707/index.html","4a23a98160bea4ceee152aed0e2cf967"],["posts/3291578070/index.html","6040dbb016f57dbe4352959e97525850"],["posts/331752533/index.html","1899b6983ba5a492c37bb7c9c1af52f0"],["posts/3321992673/index.html","985b1ed76224658f876499d7accbdcc6"],["posts/335366821/index.html","11a5a42791f323e91bae28fed054fff4"],["posts/3356910090/index.html","bf4e159251fb736f30e2f99317d05aad"],["posts/337943766/index.html","ef504f4d2c8878f6b82650d4494388b6"],["posts/3417652955/index.html","976d79bc9387299c452118b40c8e6bde"],["posts/3444626340/index.html","e62e2c142bc1314a021a01187b23990e"],["posts/3449402269/index.html","ec7a275b92f8a1b4e5d8aeec8de86cbe"],["posts/345410188/index.html","4679c1c08444ade2e6a05add92867cf3"],["posts/3461518355/index.html","cabcd8b44bdcbafef9220280d3f7a11b"],["posts/3494408209/index.html","f3b53dc8f6d589af3404fade2cf89b20"],["posts/352037321/index.html","a74901b1272f2ac033f67b4be648b7a4"],["posts/3521618732/index.html","8ede81c9fc274033cf34eb0151087591"],["posts/3568552646/index.html","fe10aefe58123619fd0e755c70968682"],["posts/3603924376/index.html","8858903f8bdefe9dc150935872f93a52"],["posts/3637847962/index.html","f72e6719339a5df307545516915c469f"],["posts/3642630198/index.html","2d514ba6ca667850b7ab1203777a81c4"],["posts/3653662258/index.html","e8cf656af26f10c1193955a5a6a97fa5"],["posts/3653716295/index.html","1af636a36cdde77dbb235e08fb04a8e7"],["posts/3657008967/index.html","60d7ea2571a5123002974a67302b7924"],["posts/3668933172/index.html","0af87302cd38a45bc21de966b269046c"],["posts/3677280829/index.html","44613277b89b079df0ad0fb921b121ac"],["posts/3687594958/index.html","6b562d51ee6599e0a04ab577d08296e3"],["posts/369095810/index.html","bcfa0320a9473ac2504c528a9feb7fd1"],["posts/3695777215/index.html","e306bbb8e2e2f9d1904d59d09be90693"],["posts/3736599391/index.html","6e512a44c625b668633f477dc277cd68"],["posts/3742212493/index.html","0a3b6b64232bcce2d5376266230a271e"],["posts/3782208845/index.html","6f48aaaa6be700421c8b4ff458c0ce44"],["posts/3789971938/index.html","a36c20cbf28fcd8f8366daf6c28a8ec4"],["posts/380519286/index.html","df5375a5420f5046c89fcf8f446f99d1"],["posts/3846545990/index.html","299e7cfbf5ed63946cebbf3846ac1bc7"],["posts/3873710624/index.html","b730bc7666f2ab562ad3ed4c0f284e86"],["posts/3959327595/index.html","e786cbedd14a7cede984e64fd1652fdd"],["posts/3972610476/index.html","65a95a44a7ab25987c00ed957506cb1f"],["posts/3995512051/index.html","61aba22ce1d9351e8975107acd316fd2"],["posts/4088452183/index.html","a2b7f9658b62f990701aec1370c07fa8"],["posts/4116164325/index.html","cba5bc3b73ef2cedaba06fc393a43996"],["posts/4158690468/index.html","f3ee85eed8276123d8f5a22fe938508d"],["posts/4159187524/index.html","84cce670fe3b6f113aa94416786c042b"],["posts/4197961431/index.html","723f7a492357209f96b14bd951b0f427"],["posts/4205536912/index.html","15387915aad8b7fd54f8c43ebff77a8f"],["posts/4236649/index.html","99350ac4e9905b607915442fcf5e31ff"],["posts/426338252/index.html","cf765b8392d1cae516c2717bc852dad8"],["posts/450254281/index.html","f849022ede00590a719dd078d60347cd"],["posts/4891372/index.html","f4a4c36cd688068f95e9b42734810480"],["posts/569337285/index.html","f3450c8c03e2f8ad4f2ebc5593cb9738"],["posts/570137885/index.html","24cc088549e0604c93c7e082c2a155e9"],["posts/570888918/index.html","148a6443c22e745531c03170953c43df"],["posts/582264328/index.html","76377bf3eef2ccff8c2a12e9c7b74bfc"],["posts/632291273/index.html","bd2e62a2b622b3b6b5246bf509af6622"],["posts/70687890/index.html","b67b90a9d2b935691864007ab76b2f86"],["posts/719322223/index.html","bd8afc002a264aea2641160ce78fc9bf"],["posts/720539850/index.html","43057a8edb718e594102cdef6dc27a7d"],["posts/786195243/index.html","c76843549b20921ceb21c80aa58f023a"],["posts/795474045/index.html","85495268b1d5d46acb4c6834486c5cc1"],["posts/815861661/index.html","937e905fdf4a2523b948515e9bf19857"],["posts/821259985/index.html","e1825851a8978bbe8904d5244de1d5e5"],["posts/828223375/index.html","915ff4a9fc41ae496cf1930770251bf1"],["posts/887585917/index.html","d33fe95dea92e5155c1f6d3b55131b99"],["posts/888549816/index.html","fbc482dca2ebbaadfc986b46627b8243"],["posts/906436376/index.html","fdc5e8e88a3320ee0bf56289801f9c79"],["posts/907824546/index.html","f29c82e519c9f054556a3c375883f095"],["posts/927393529/index.html","1a530308939d1aead2f4fc3233daf528"],["posts/94443781/index.html","298ee80b274adbb562d8f184454608c8"],["tags/2014/index.html","0f1e2b856ed103d2acf960690840d98d"],["tags/2019/index.html","f9d1cf303126f29ba94da6351599b95d"],["tags/AI/index.html","978818b4bd4d41a83969284095fdd90a"],["tags/AOP/index.html","23692231100809bc0fe750cce4bb286e"],["tags/AR/index.html","e5a4af1b3a0284b37d66894044bd1fab"],["tags/AssetBundle/index.html","a909671aa8e1e2557f539a4663fe02fd"],["tags/C/index.html","0197ec2ca2370e18634c7922142509c7"],["tags/CDN/index.html","097868eb398347b96dc1d11e135013b0"],["tags/CG/index.html","4f96feed1a99362c22b4a1c730dd7729"],["tags/CI/index.html","490679318549b2a27ad16b125577cefb"],["tags/CORS/index.html","81c28b3666e72c2e7fc99b3a77605314"],["tags/CSharp/index.html","f590d6ae4cd2d188145a2a9ca835ae9b"],["tags/Castle/index.html","040718c2f92e3c4e5a8fc346152d4875"],["tags/DBeaver/index.html","7431536c0353cb43d80e3f23cd13e715"],["tags/Dapper/index.html","01f1e64562630f09ad6733f189b89fef"],["tags/Docker/index.html","bd7f3cc0db7c278b53d88945e79bab9c"],["tags/Dynamic-Proxy/index.html","3f9c07d998d633a78a3d55dbd9d3b570"],["tags/Dynamic-WebApi/index.html","db7d7e00e9648cacb2a6678b7999f8bd"],["tags/EF/index.html","5e1ad0f7052a89ef6361e542a73c787a"],["tags/ELK/index.html","a9927fe03b73d12d885a382774eed6e1"],["tags/ES6/index.html","a84d9d5a85a73d3f4eed20e5261ce1f5"],["tags/EasyAR/index.html","98e97f183d72e6139f5b9c263f587a06"],["tags/Excel/index.html","32a55db62086aa65eb874566ab4f0263"],["tags/FP/index.html","95ce1e13994e4ab73b3ba3c33641873b"],["tags/Form/index.html","6fbea9bc2b54d2d01cc60b33b57349c6"],["tags/Git/index.html","cc49a4fb4bd0f1e954909b94dd506281"],["tags/Github/index.html","77f79ee3ca8af11ee348dbab2a19ce86"],["tags/HTML5/index.html","d5eda7699efdd20469b64e3baf88bdb0"],["tags/HTTP/index.html","817f4e1d9e8773ca94ec49359fa4f59d"],["tags/Hangfire/index.html","44db14c46c3188bfd944e305b2a0156d"],["tags/Hexo/index.html","86ff5f6efc577a352d962adcce2a8c14"],["tags/HttpClient/index.html","25b9dc5fd46d9383dec5eba7c30ef077"],["tags/Hyperlog/index.html","a9889ba265787512253c9046f93e6da3"],["tags/IDE/index.html","97f1eb47c5632e57c3a8121d475a2457"],["tags/JS/index.html","5e2549cada04a70b265d679874fc9212"],["tags/JSON/index.html","94479dad93f593270c2270fb4659c8b0"],["tags/JSONP/index.html","b97ab582417726bd20c23c6f4e3bc924"],["tags/Java/index.html","1104442c0258eb2ec3153b38787d0cff"],["tags/JavaScript/index.html","f70c99bb8e9337cd13e6c48dfcf122eb"],["tags/Jexus/index.html","e160e8f4f6e96146719fd3fae538bc64"],["tags/Kindle/index.html","ea66198f33a7cfee20323efbbc6959b0"],["tags/Lambda/index.html","6f59ffcaca7fa74e2c5e6b2884a39365"],["tags/Linq/index.html","36adf8d93879cf7996ab7ebdc76c89c7"],["tags/Linux/index.html","0b89f13b6ce7740459279d0db9f85e0d"],["tags/Liquid/index.html","4c9c0970fc813178a1e206362d904710"],["tags/Logger/index.html","fc6d85d06de4abd26713908f3c3f9c7a"],["tags/Love2D/index.html","8ba20db1b9a259f82c4eba19e8cd937d"],["tags/Lua/index.html","74b0ee0e05a5b16a69dc0b039b10a869"],["tags/MMD/index.html","2b9030b30fdae8dddda34829f5d40e64"],["tags/MSBuild/index.html","22bbe675538f6feef3a1ca1ef96425e9"],["tags/MVC/index.html","b1187ac0560987fa88ce5559c34fcfb7"],["tags/MVVM/index.html","5b5934ef95e5d378f7e2634f48f9f3f2"],["tags/MapReduce/index.html","1d151ee0d6d8afe4375d67a2ce2be553"],["tags/Markdown/index.html","a306b83e12d501f1c79131fa047b6930"],["tags/Mecanim/index.html","c34d47c65bf73b543c0d82b9cd5fac47"],["tags/Mono/index.html","022319a1ea2e8e91ec8ba155296ff923"],["tags/NET-Core/index.html","a5d09da91e18a87b5be2a5f49add88e8"],["tags/NET/index.html","c609970e5ec82d98a9eb23b1c0b54b62"],["tags/Nginx/index.html","a3e8eece487910f56e1f88848510cab0"],["tags/OBJ/index.html","492be40896fd54ce3032f43b032f26cd"],["tags/Oracle/index.html","ce825de2de6cdbf9a22224a3c7f5035c"],["tags/PL-SQL/index.html","ecd34544e5c669e8bad4dbcea648c34e"],["tags/POCOController/index.html","14a993424ac5554add310b657915cba2"],["tags/PWA/index.html","87bdbd28c365c5d0e3af043cfa6b0cf3"],["tags/Python/index.html","cf13e1fc1fd416a79e988c9964835a02"],["tags/RESTful/index.html","3c730bf4ee317ab24747c9d74904904c"],["tags/RFC/index.html","55f32a28c449ada28ea86a3f648f792f"],["tags/RPG/index.html","f2f148267ea6f1cd0b69d54cb5f8f8a1"],["tags/RSETful/index.html","aa4b8dceccec3da5c5eea632543a754e"],["tags/React/index.html","4c2ee5db1cc5080db957fb4d84d3afe6"],["tags/Redis/index.html","01db65899dda5c80217a54400c76262f"],["tags/Referrer/index.html","0840ac0be837b6302f0bc42364741d2d"],["tags/Retrofit/index.html","cf33f93c872fde04ed292cda50b7500d"],["tags/SDL/index.html","48203ca3996fc0fc135ea2d874d80cec"],["tags/SQLite/index.html","c7c779be90941eaa4fcd2980315e9ae0"],["tags/SSE/index.html","97063dfd91049d49625cb628098d5caa"],["tags/SVN/index.html","589e68367fe238015afe6e7d2222e08d"],["tags/Script/index.html","cd6ddd511c814cb42d8d34129b39aa03"],["tags/Server酱/index.html","6f71842c4af78d3f04bbf533c38cf1fc"],["tags/Shader/index.html","b78c356a359d0db54ea3601a2e447a66"],["tags/SignalR/index.html","f3cdc29682f55e909090dc27cd3cc779"],["tags/Socket/index.html","79e67d2b08c8902dd71176a07d9552a5"],["tags/Sonar/index.html","11ed875f5087e1ae17f72ef1ce48afdd"],["tags/SourceTree/index.html","5781c54aa51f58b1f091c674218e34af"],["tags/Sublime/index.html","494f6d7885409ac2f380a1fa35ebe7a9"],["tags/Swagger/index.html","0739e72a8afca3716f492682a049cf7e"],["tags/Trace/index.html","7b96b8e1bf590382c84bc657ef81ee28"],["tags/Travis/index.html","88a6fccb6e18d49c0f00345553164e27"],["tags/Unity/index.html","35f3f0c88bd07a00f52e47b8eb27cf16"],["tags/Unity3D/index.html","f0c050863866a3f6807277a65ba0aa15"],["tags/Unity3D/pages/2/index.html","872704b09196205967e4b30eff3d236c"],["tags/Unity3D/pages/3/index.html","4ca846a6974887ce4c70f94fa0c780b6"],["tags/VSCode/index.html","a318e0ea321b44a86b4d578d28360b78"],["tags/Valine/index.html","b0c1bfeff4de75accf3234930541c0ad"],["tags/Visual-Studio/index.html","b18790bf13b0497d278bad99cbfaae65"],["tags/Vue/index.html","a1b5b16948000b3221c6a649f0a145a9"],["tags/WSL/index.html","a103020ba7a45d640385c06cf06b03d6"],["tags/Web-API/index.html","297c6298ef4c7bb69105c7a61e08beaa"],["tags/Web/index.html","97f935a7524b5a9007fb0dd05987f7f5"],["tags/WebApi/index.html","c70261bd2379e40ae205e5d9b43b6e0a"],["tags/WebSocket/index.html","1b895bf6177dcf91340c1fc77481de5d"],["tags/Wechat/index.html","651c699e47709667ef18933f885770cb"],["tags/Windows/index.html","7e37a510efbbb98250981591ae9f10d7"],["tags/disunity/index.html","4d42d4f6630f9202bbc2880f345c7c14"],["tags/index.html","24483d330c46ff3f0d01d94b510b2a17"],["tags/jsDelivr/index.html","c50a5c3b99cb659c50da3ccfdfaf26c5"],["tags/matplotlib/index.html","90826a39c91c3390eee92824601ae798"],["tags/uGUI/index.html","4dabf1799944956eca7e388ebcf26115"],["tags/zTree/index.html","25269239d9a90f9fd6bca8a5220623f5"],["tags/一出好戏/index.html","6db8b2aabba1f9f7893a2a8b5e358e7a"],["tags/七牛/index.html","872d7ed559fc06a224e195a5d1743323"],["tags/主从复制/index.html","3fe7e1b65251d9812881346fa694fa57"],["tags/事件/index.html","04834dd68b512a6f35e631b6a69bbe1a"],["tags/二维码/index.html","eba8f79cdcf98e33ab806b38b0b15181"],["tags/云音乐/index.html","4de08687cac5fc0895b670be8105fda2"],["tags/互联网/index.html","211fc5baacd9ba1656c0db35f2b0dce4"],["tags/亲情/index.html","89a731fbd0712bae69251bcfe8c366e4"],["tags/人文/index.html","da4691513add462cf40ca7dfad4f05f9"],["tags/人生/index.html","fddf4936f6cd0854de62d31bdcf6ec40"],["tags/仙剑奇侠传/index.html","b68570026359cb7127093e02e8f235c0"],["tags/价值/index.html","ed2bb48301022a6eb364c27f08d68d24"],["tags/优化/index.html","e1be6cf85b856dbc7e2e1ab07ceaaa0b"],["tags/全智贤/index.html","65b2d3a9358d40ac2cc20f6c6eb99c10"],["tags/公众号/index.html","d452a00549aa937072009a27c208469b"],["tags/关卡系统/index.html","60bbe00193dc8bef7865b67e713979ba"],["tags/函数式编程/index.html","49a20067330ba1b6fa07df419ed23932"],["tags/别离/index.html","bba1e8080290ce44683ee5cbdb4b454c"],["tags/前任/index.html","05b9f7bd5676cd5f14ce32b6b11b8e1f"],["tags/前端/index.html","214fae57265f22f83db20be3dac52563"],["tags/剑指Offer/index.html","ae39bfe87132979b71ce910bad5a34dc"],["tags/加密/index.html","39855091e64b7f2d514916ea770992a5"],["tags/动态代理/index.html","2ef047ae67be234015ee0d76099be066"],["tags/动态加载/index.html","49fc91d756ed1a9f7311e5304a8df2a3"],["tags/动画/index.html","e22697f7cda6b796611d14a15f639440"],["tags/单位/index.html","542a3d7e39aefea0859d7ade6bf3fa94"],["tags/单机游戏/index.html","5872a30486c96928be75a0ef7cb394b6"],["tags/印度/index.html","0407f23f531f283a5e9711afda1ff8b4"],["tags/历史/index.html","7519038eed6442247a7395c9f4dd0372"],["tags/反编译/index.html","3fc02c151513eac7410021224eae4d92"],["tags/同步/index.html","4ccff339d4912e3cb4e83faf75baa5f5"],["tags/后端/index.html","403718a5a26b83c0a27cde7c4d70912b"],["tags/命令/index.html","8472d071b81bee2f5e3047c77e7d00b6"],["tags/和平/index.html","ac4e2024c2a1ce88a1dd34ab80578b32"],["tags/响应式/index.html","565fd7c57f1bcbcaea1fc8cbf5f88d45"],["tags/哲学/index.html","dd0c3e1e0ae7f5285c7faed374f0f976"],["tags/回家/index.html","a6d394518db6710c44674bd23175b358"],["tags/回忆/index.html","e23f3e71735c960317dd2c59924f93e9"],["tags/回顾/index.html","0b52e13a700dce60d1d9c918dc6df07f"],["tags/回首/index.html","e41185f253281e0658fc2f7b88a2ef6a"],["tags/图床/index.html","b3e36cbc79da80f77692aab6b4ca0be4"],["tags/图形/index.html","cfa3380c85519d08091ce048807b42ab"],["tags/地图/index.html","d474753fb4cdb4832501d6b107fd3d14"],["tags/塔防/index.html","63abe952bd23133a26099d0980eccdb9"],["tags/增强现实/index.html","eb7817203251da013ff6d7c9c0ff2f68"],["tags/壁纸/index.html","269eee6c80541608b55e75f0ac8329c6"],["tags/夏目漱石/index.html","2aad3c3e983b1bd9e15190999cdc5482"],["tags/多线程/index.html","8ccef828864272acb0f3ccaf7f135b13"],["tags/大护法/index.html","1833fd2c96b74659c982fdd0ef6abb62"],["tags/委托/index.html","6b16b5c50110e3b3e42cd594d3e4191c"],["tags/孤独/index.html","b0e8e999eb3aa813c85161cb69290e76"],["tags/审计/index.html","0a9704c02c958bf0877b1d9162f4439d"],["tags/展望/index.html","e694c2223e181bb8ebf1cc405d87357d"],["tags/工作/index.html","65e51e86c0fce33789e916f43b4184f4"],["tags/平凡/index.html","a21cf9dd86b84d24c2ab976f4b817e51"],["tags/年华/index.html","48618ad8d3c5dce6f2465c7829dd0da7"],["tags/年度/index.html","9dc552738588b2053ba40a10f28460e5"],["tags/开源/index.html","e7447467362f0ca804192d4e230c3684"],["tags/异常/index.html","2804f543905f9907d104be5cab051aae"],["tags/异步/index.html","745717c614182232aac79f003bbf6bd6"],["tags/引擎/index.html","f03826c02ecc9db89ae6af0d1627c701"],["tags/影评/index.html","05d32740f9ffd142456fd1d944c4ab9c"],["tags/微信/index.html","33ae521314d5e032d8285d1a0c156185"],["tags/微博/index.html","13a17923397bb36e127c2c9c68c0e248"],["tags/心情/index.html","92c417d97e8825122746496623fc9880"],["tags/思维/index.html","ab1514281b8bcce7c90838d16f8f5f3f"],["tags/总结/index.html","2ac3a32ddb264e379d0d37402f27046f"],["tags/想法/index.html","af1da860b1b4ada11c915dbcf060be2f"],["tags/感悟/index.html","3b17fd7872deb6dd3eb3539175550b29"],["tags/成长/index.html","849419ba2627d3ee309962341bb68f59"],["tags/我是猫/index.html","8120bea35c7f66f7e2a28c24bd0a95b9"],["tags/扩展/index.html","ce0e46b7701379e80c142d60fb88a261"],["tags/扩展方法/index.html","e44334a2728afe38b230d40691b0b836"],["tags/技术/index.html","2cb72b8fe3ba753ed6a028ec0eddb9e0"],["tags/拖拽/index.html","d9991d64a47ad6615dc5222d801534d8"],["tags/插件/index.html","7fce953e36be1e7e43c43d88f0aa7857"],["tags/插件化/index.html","ff9a50196e720edfc85565fc4eccc4b8"],["tags/数字/index.html","85dc7b3eaa81fc0f5c862807a7888414"],["tags/数学/index.html","18f38115df1e3c29d068dff26ef07fe9"],["tags/数据/index.html","3caf99d087110cac3771181b8dd67a16"],["tags/数据交换/index.html","0ae61e17606c6b1d5f8f83759033fce1"],["tags/数据库/index.html","c5cdf48c80593335ee3a859b19b16db5"],["tags/文本分类/index.html","451689c156176d090e7ba4aa47eb0c4b"],["tags/无问西东/index.html","192d7e4010a5013e5502b22de694f04b"],["tags/日剧/index.html","ff81e5f76fd0e4b4fa5b31c1c4ed0638"],["tags/日志/index.html","dd0f519535ac72703816e5e035f6b4a8"],["tags/日本文学/index.html","6de9b7a7115df81467f01fcaa3c7477b"],["tags/时区/index.html","7761fbff913f6479f2bdacada454d0f2"],["tags/时间/index.html","a52258d2d7ea68e956992b6073ee19b5"],["tags/服务器/index.html","892bd458da9884170bb55843ce27a4b2"],["tags/朝圣/index.html","aa4d342c521a544a1b0511987af5f00e"],["tags/朴素贝叶斯/index.html","defb9428b59aa65387684dda2167ebd4"],["tags/架构/index.html","e28f1b943feb438e1eae279bc663095a"],["tags/标注/index.html","8ca9cbbc1e70fb38d46292d5bddd95ab"],["tags/校验/index.html","367470d454753f55d439e09259c14854"],["tags/格式/index.html","7698d324b4d15f87a3c8d4db7a402545"],["tags/格式化/index.html","a8c1ae1ed2143ccb871c9bfceb749a4f"],["tags/桌面/index.html","9378ee4de95c9caed250df185a5c50c8"],["tags/梦想/index.html","48088010439538d26d6a572bef99f502"],["tags/概率/index.html","21ebfa1963998e527e7b78d809f64f7d"],["tags/模板/index.html","48861ae9b47a6c5cd896d7fceff17416"],["tags/模板引擎/index.html","20f7d02b6abdbe9d50799b6d36c58f09"],["tags/毕业/index.html","ccdca7d55a526447fa549534917776ed"],["tags/毕业季/index.html","c7843fcd16258ad532859017ca4daab5"],["tags/消息/index.html","387a916131ac479814c6126097602494"],["tags/游戏/index.html","3fa4b0b69e842615a023a0895eb916f2"],["tags/游戏/pages/2/index.html","d236892030797efd3d5b134326d90af9"],["tags/游戏开发/index.html","eb328a9cf3b2cfe845aa50ef4287f445"],["tags/游戏引擎/index.html","0c1b7aac8eb78dfa7b4ddd7f24dd55b1"],["tags/爱情/index.html","cd8e62bcfa912583da5605ab512b4205"],["tags/版本控制/index.html","f6b9fa8699435dceec10f203c2214be7"],["tags/版权/index.html","de734c9bdde5c240ddc7e07996db7319"],["tags/特性/index.html","7b0dacadc63325c50049d5e646fe381e"],["tags/状态/index.html","935cd68c7ab12d6d361f77079fe66f9a"],["tags/现实/index.html","101a1524dfbb9b22ff7b050ad1eccbb3"],["tags/生活/index.html","0b2caa70153dfb4410201e3a4cc692cc"],["tags/电影/index.html","04030709615d8418869327625d4820e1"],["tags/画家/index.html","279feaacd29abaeb56155ce6ef817591"],["tags/知识共享/index.html","e0123804336066a5f24266c9e9f790b6"],["tags/矫情/index.html","0224433dc46714f3199eae3ddc62ff0c"],["tags/程序员/index.html","04a3a51407e919590fa82e68433eacd1"],["tags/穹之扉/index.html","0420c41c62e5bd24ea9509a798045031"],["tags/穿搭/index.html","f14f261486eae3e7fe3a2a8ee49fdb74"],["tags/童话/index.html","1402e8828660d0ab954ab0058a7b5af6"],["tags/笔记/index.html","3c5bd67893030776ec67a57a2e12da47"],["tags/算法/index.html","0de4e0e6272f50c3aff0138272a276f9"],["tags/米花之味/index.html","0a79b9a7abd5fe183f50aae3de694bae"],["tags/缓存/index.html","a1e7564e97062efdee7e53061eee0547"],["tags/编程/index.html","8463f641d7243ef941756316f9cdf8fc"],["tags/编译/index.html","a663fe9d06cac51ed445de5aac9109b9"],["tags/编辑器/index.html","9496be1c9325eccfd1f0b4369f8391d1"],["tags/网易/index.html","d2d13b94db03100d1b4f392258cb6338"],["tags/脚本/index.html","bc2e0d6b5b710a3bf9b61a209b1bc747"],["tags/脚本语言/index.html","10b0724a82f884efbe12010489d2a70b"],["tags/虚拟摇杆/index.html","dc0e85ec151e19c8b1ff90af3a12ce37"],["tags/蛋炒饭/index.html","55a8251c0a70c3152bf77da8e09a1e8e"],["tags/表单/index.html","6522dab65709d573ee3c82e92339ff47"],["tags/表达式树/index.html","5779a5632b0f6093db8b15d9c0c6d27d"],["tags/装饰器/index.html","12b84908dd8bb8769b6f68ea99c22e0d"],["tags/西安/index.html","88c2798696f147470ba4268228c502a9"],["tags/计算机图形/index.html","fecc7f907a4153b62311d951004c93cc"],["tags/设计/index.html","39378dd2795516f9af3a25afbcb98a88"],["tags/设计模式/index.html","0f4b3135c01a64772022f005bdd3f5cc"],["tags/访问量/index.html","9d31382116eef86fdf1d04ddc83fc858"],["tags/评论/index.html","2d8c59e15357218e2fa57591922ab417"],["tags/词云/index.html","bdee8b15ae8c26440620df4a8d6cf047"],["tags/诗人/index.html","7570b4a237e5b474c004dcf0923fcf49"],["tags/语法/index.html","a7dd5e4d15dda7ad64b3cccc55c77eb3"],["tags/请记住我/index.html","b2d76e4cbc63e0e9bc0a6f7f1cb12642"],["tags/读书/index.html","655ad62c02e553991b799f4c7f7c6ee2"],["tags/读写分离/index.html","158609f96f2467bc1f382208ca766da1"],["tags/调试/index.html","62e5a85e5faa46e6679b5906451cc390"],["tags/贝塞尔曲线/index.html","304b757da76465b1f9d692e56f040777"],["tags/贪吃蛇/index.html","61a645df1ea895f7e3974256d26f26aa"],["tags/资源提取/index.html","fed3c26638fd5396585a5d2e06b051a0"],["tags/跨域/index.html","cdb50497cd59aff129dc2d6e0cb6fe3b"],["tags/跨平台/index.html","6fd37a72a7721b3bb2fc93232a1ede00"],["tags/转盘/index.html","ee3bcdfe48ab5f0ecd4127852edc4234"],["tags/迁移/index.html","36a3b19b51702e8a60cc93809a4a0b18"],["tags/通信/index.html","2bee9f03bff3e6e890712b7a3f9e8b85"],["tags/邪不压正/index.html","2a99b7b66ec9ea10831c4bac41dd8e3b"],["tags/部署/index.html","1031e7fd4b20df31a6c9a0b01f027b3e"],["tags/配载/index.html","7e05ee09f20f2e62417801a51faedb1d"],["tags/重试/index.html","acf1385d0787ce9f836664ed5b274d68"],["tags/长安/index.html","2994224376123c392162f26aab31cf98"],["tags/长安十二时辰/index.html","c0e057281d4975aa16fe50ef1c8e9d69"],["tags/阅读/index.html","81d8bf49281d8ebcae92cb07d15289e7"],["tags/阿里/index.html","22cd1c3550bae3749ca912596b6948e6"],["tags/随笔/index.html","fadf79f5a7b081d522a92db3e8cf783b"],["tags/霍金/index.html","9b86dfeec534711445bdb0023976b7e3"],["tags/青春/index.html","1f73d0621b08d593a4e53c255959a383"],["tags/面试/index.html","1276192cd92d08739ab9bd21af2cf698"],["tags/韩寒/index.html","9d3f4459c563e21dc2e939adc28dad05"],["tags/马尔克斯/index.html","edb1af1fe8af1ac57a12c2dda9a4d7ba"],["tags/验证/index.html","387702751a0544f8bebaeb7772c090c4"],["tags/黑客/index.html","d61e08069fbec29f70e9cb538d47124f"],["wiki/index.html","4f35f02efbdd80eabf2e41cdd50a4598"],["works/index.html","b6549d595d8d26d51f6a638281c6a0cd"]];
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







