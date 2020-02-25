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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","98914c40b6e9a96b1fffbe02abe79aaa"],["archives/2014/12/index.html","cc170fc77f2379be9d9245a7b63ebdd9"],["archives/2014/index.html","29fd80c66da42fa066d923d74710b8b8"],["archives/2015/01/index.html","a4757095933376eed9f2a7c32ea80d5b"],["archives/2015/02/index.html","12a5cc83b85d23157da89160813ec959"],["archives/2015/03/index.html","43a19f1ff8a45ae4b1b61baffa89fa17"],["archives/2015/04/index.html","5e4f1286637b84d9b70dcf91658c92b5"],["archives/2015/05/index.html","01e22b70a12942aa25930a8d60ee059c"],["archives/2015/06/index.html","06f061b8e445dbddb0515b83a2439899"],["archives/2015/07/index.html","3a4c41dcc4d2ffbfb56d05b029e755d4"],["archives/2015/08/index.html","cc7c53e52e4bd521894c39e9967eb85c"],["archives/2015/09/index.html","e555dc8b482abd3a0274e46490f24b90"],["archives/2015/10/index.html","9108f2c58e4342a1f6188937e44aefa5"],["archives/2015/11/index.html","effe55a910288844d62e75664cd652a0"],["archives/2015/12/index.html","eacb8b05a4158bddd8b5ba7df97be57c"],["archives/2015/index.html","2590b69b4f1af34949900a003024b07f"],["archives/2015/pages/2/index.html","989623e6d7834fa3aa047826fdf9c86b"],["archives/2015/pages/3/index.html","1856bbfda6e45a325cc9c94966ac758b"],["archives/2015/pages/4/index.html","9185a14735ce122a0e3b3017820141b9"],["archives/2015/pages/5/index.html","5afb319bc49893dee09bd77c6f16826d"],["archives/2015/pages/6/index.html","9e23bedd0140688a10aedf30a0440856"],["archives/2016/01/index.html","d0965bb0468bbd2cf62aa73ab20d028c"],["archives/2016/03/index.html","bafa5e0f73c5ccdb270bd3244e9e925a"],["archives/2016/05/index.html","09830d55a501fe8daf5d489f716b6733"],["archives/2016/06/index.html","20d2aafd81c2eef3a5be3e4cd650adc8"],["archives/2016/07/index.html","70eaadc8be9b54481cf0279026c41981"],["archives/2016/09/index.html","065ee42d79f460fb8cb545a466ecbd91"],["archives/2016/10/index.html","6450864746512d83c49a73abe787e1b9"],["archives/2016/11/index.html","08d64bfaaa6fed10e854608a7b03b1b5"],["archives/2016/index.html","6a2c14c93d3e5bf1719942b003269728"],["archives/2016/pages/2/index.html","4a6873fa872281151c45b43e44e5b4a3"],["archives/2016/pages/3/index.html","6e5cf4349759b72a40cb3b1be19e3256"],["archives/2017/02/index.html","91ffeaae28fc5537e097107f9f49b8e1"],["archives/2017/03/index.html","3218bcec24ffcafae62f7718f943c344"],["archives/2017/04/index.html","c44e267634337172ddf28a13a2126cd2"],["archives/2017/05/index.html","69b51b9fe04c740ed7b513049322c182"],["archives/2017/07/index.html","2e62c6e53edfae3169a9851fb0887e9d"],["archives/2017/08/index.html","33e9e9e002702ea16e71b9dbac21fd6a"],["archives/2017/09/index.html","1793adff389db641483ce1d23c7d344c"],["archives/2017/10/index.html","83cb6f31284317b7be56f393e374d2fd"],["archives/2017/11/index.html","ee71c2c440b8ee6f68998b5e9311536d"],["archives/2017/12/index.html","56d1fb85eb048ea443e391480dbd3116"],["archives/2017/index.html","04feb628142e43ecb60924254943c20c"],["archives/2017/pages/2/index.html","24e37f6c014d37277e8085e69bbcb2dd"],["archives/2018/01/index.html","20c0edb1760a24828ac18a176a018f03"],["archives/2018/02/index.html","13a218fa507e574af8fd827d8e1f84fe"],["archives/2018/03/index.html","117a1af97bef1fc4e32176969e3e53c6"],["archives/2018/04/index.html","c791dbeb36ad56302ea24ffdbf33cdd2"],["archives/2018/05/index.html","cc87bd70030cb1e14619cb394f83aa0e"],["archives/2018/06/index.html","c12fc6f59b04b3756745ea8526140daa"],["archives/2018/07/index.html","0dd08aacf53c425f1f16f2992c48857c"],["archives/2018/08/index.html","0d4f7854ef47849b65d0117ffe66009b"],["archives/2018/09/index.html","6d99f563e3d773e46cc4ee706afc1c0a"],["archives/2018/10/index.html","34e5acca495f96a8bbb3e9b73ceeb2aa"],["archives/2018/index.html","ac82cd4f833bc18a370c9ed189eff503"],["archives/2018/pages/2/index.html","2ccfb4252a1ec707a951d609af7b271b"],["archives/2018/pages/3/index.html","1901ddf232bc70a4b6c68455dd160227"],["archives/2018/pages/4/index.html","6fa4711a4ef5d82e716f642cc9f23713"],["archives/2019/01/index.html","bf79872d261ec919d032d3573cfd0644"],["archives/2019/02/index.html","c1185a5738613330bd1115d18fedafaa"],["archives/2019/03/index.html","4770ffd76daeb3332b3be0ab31ff88a5"],["archives/2019/04/index.html","76a0cf79716082cbd106574ecd6bfa39"],["archives/2019/05/index.html","5ae3659945d6d33ad4209256c9e39786"],["archives/2019/06/index.html","1d966c7af84b23876a5d35cbc94943d7"],["archives/2019/07/index.html","045234cc30747bb385380c7bbd7a837f"],["archives/2019/08/index.html","8c57e6f6ab52eae8d086e7e0bc144851"],["archives/2019/09/index.html","ca8cfd2a5dfbf43cc8aca0726e0b1d1b"],["archives/2019/10/index.html","068292846e286a1b816faeb89d55f1c8"],["archives/2019/11/index.html","e7cff31a44f02000a20046ef900dcf3a"],["archives/2019/12/index.html","d6a3c9eca8763c9cc9bd263f6507ff41"],["archives/2019/index.html","3e6a191bbda558a75284d6b2911825a6"],["archives/2019/pages/2/index.html","d57a70ed565712c2080c97c4fd52226e"],["archives/2019/pages/3/index.html","04a26d46b478bb01713c81374d09f329"],["archives/2020/01/index.html","c504f94b3a832429f8755e52d7451a4b"],["archives/2020/02/index.html","3828b20192f3b1ea2c31aa5e3293c24d"],["archives/2020/index.html","271ade6d5517cf271637b411a1bf9503"],["archives/index.html","44f4431203a05a2e05ccf3e58378242b"],["archives/pages/10/index.html","741224d4be389e6674fb5f644602bdbc"],["archives/pages/11/index.html","8904c4ca28a70e4e132897f05db7b380"],["archives/pages/12/index.html","36040c2ff76ce93e2452200ce1af606e"],["archives/pages/13/index.html","7bbd2e25111ed4ccd0be1b9241c2d8f0"],["archives/pages/14/index.html","a18e0a3c9892c48290cdd740a08689de"],["archives/pages/15/index.html","9aeed108da833c91234d7c4919a669b0"],["archives/pages/16/index.html","230a7076518b384810f7f531680ff42d"],["archives/pages/2/index.html","6e58131030369b3bc3d4abe875a8356c"],["archives/pages/3/index.html","71025e410d9f25fbec4c8c05f833d48f"],["archives/pages/4/index.html","b298aae509a81091e5cc2b64cc0f2ba5"],["archives/pages/5/index.html","1b165a450c54a9651fe209e59be1885a"],["archives/pages/6/index.html","29a051fd0458aca6c5c7e1bc342fa9b8"],["archives/pages/7/index.html","985d6ffbba599503bfc127051848e8a3"],["archives/pages/8/index.html","06221760efc1d06dfd56f216a5213843"],["archives/pages/9/index.html","46ffd426c0b5e2331bf01ee8fa889aa8"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","2eb748f7a4ee179d20b65eebfe1781c2"],["categories/Unity3D/index.html","e92c961e87335bf926795dd3bb0b9b2c"],["categories/Unity3D/pages/2/index.html","d6db8ea98e7b5e56150f50e619770ef8"],["categories/index.html","9fd04d3346b6510736e51ce7f5f3dabc"],["categories/人工智能/index.html","b11bf41c5fe037f69af2df8bbba6d38e"],["categories/前端开发/index.html","cfb29f36b6d9a3bc7139eefee252896f"],["categories/单机游戏/index.html","27649919e409c8d65a41d257ce49ee0b"],["categories/开发工具/index.html","3d6718bf183d68eecf066773dd14cd10"],["categories/数据分析/index.html","5e8eef5b148b8471777238f098260c0c"],["categories/数据存储/index.html","06e32b684a2a0c86e85605d2be82fac5"],["categories/游戏开发/index.html","6050a22f6900e9143ac854b094394856"],["categories/游戏开发/pages/2/index.html","c0ba53af82b4597dcacb3ac5e93fa1d7"],["categories/游戏引擎/index.html","a4b8c6b7fb0813a66fa9d7994bc5191b"],["categories/独立博客/index.html","47e9a973e1ddfab368e99331f5b57454"],["categories/生活感悟/index.html","c74914ad25d4e0371c1fd6b11dcddab6"],["categories/生活感悟/pages/2/index.html","ce31988e65e298747aa2af89767af641"],["categories/生活感悟/pages/3/index.html","97a5f2b8ce059ba8f1d7af3f5a8ff514"],["categories/编程语言/index.html","8cfe28335e6e1a33bfd57bd348ae66a2"],["categories/编程语言/pages/2/index.html","a0f67ddfa95f3df60d08639dfa617293"],["categories/编程语言/pages/3/index.html","23003d61d636253bfcfee31170c41e7c"],["categories/编程语言/pages/4/index.html","4f5bdd3e846b1143e5c26ac24c28c68e"],["categories/编程语言/pages/5/index.html","2389b600ff86c228c436a26ac285f57e"],["categories/读书笔记/index.html","fa0b0d1996c1b2720f4fc2823314abc5"],["categories/读书笔记/pages/2/index.html","2e930a7d890753bf21f480f1964bb82c"],["friends/index.html","d25dad30346813ff3fbc055993de1734"],["index.html","b2f37f03e4edd2e8a1a986641c170f94"],["movies/index.html","2041a3b297eca1a04ce44027091b90bb"],["musics/index.html","c973811348166c9ac7c79ffc7936c5ea"],["pages/10/index.html","6fab6e49238b488770ef91c79f2b8ecd"],["pages/11/index.html","a6466d734d288afe3f2edc364d8149a7"],["pages/12/index.html","bc573c2b5aef09dbb981adc884dc8117"],["pages/13/index.html","0c2cc5a4ecb7abc39c9336c247a63a26"],["pages/14/index.html","22b18ef58648ed74d90be5d6affc9d56"],["pages/15/index.html","7ede501bee07090005945b8545443c39"],["pages/16/index.html","0d4c9565ae35ce21ae17ae70a51c0c52"],["pages/2/index.html","5395904d5a1000926deba3d9719e111f"],["pages/3/index.html","1c2cf535313754126a2048bab4f130f9"],["pages/4/index.html","b1d081a595ffbc3f541b81856e09bb6c"],["pages/5/index.html","13eb7292f3a8e381b9fd798654a89b18"],["pages/6/index.html","1c3502e8f53891056d1ef83becb7188b"],["pages/7/index.html","6aad7772b7f0b5f061a75a490ddee32d"],["pages/8/index.html","37baba45b8ea1d4fb8ffb675591307f6"],["pages/9/index.html","ee55b839bd248dd112a3d5260a92c8c4"],["posts/1059499448/index.html","c214077d2bada56d039904e53bc24f55"],["posts/1071063696/index.html","30098a325788309ced75ac0bdd3c0544"],["posts/1082185388/index.html","ae5f9debe5aeac57b90dc1ebdfb554d2"],["posts/1099762326/index.html","b5a99008dea990fc8d638bddff348b30"],["posts/1113828794/index.html","19dc6807e1340e5e22ce574f8fba887a"],["posts/1118169753/index.html","9c5d549084c768184ef762c95ebdc48e"],["posts/1122710277/index.html","d6441e853e15423d5e0fa5ef75b9bab8"],["posts/1124152964/index.html","00cf26d65b5e353253303b70bbd4c40c"],["posts/1127467740/index.html","462d10184611177da7208e03ce71e44a"],["posts/1150071886/index.html","143e6989620ff3241b546bc8693b8574"],["posts/1150143610/index.html","7b7bc081c6ac5d78bbea8fc73bc0880d"],["posts/1152813120/index.html","97d634a2a9d1d51b24feeafeeae5fd4d"],["posts/115524443/index.html","575d583e0c344a3990f42b43221a0b5c"],["posts/1156673678/index.html","632fbe1f48a2327057398863f07cce0e"],["posts/1166840790/index.html","ad7f234f8ba59b3988d316e4e149b2bb"],["posts/116795088/index.html","155b46cc4c22557d70bc8a906813c43c"],["posts/1176959868/index.html","33a046b7099a15b57b1222be473b43f9"],["posts/1190622881/index.html","2871b238193256260b183e5628a8d953"],["posts/123663202/index.html","31c73abf9755e40bbc992a09e1346ebd"],["posts/124807650/index.html","85ccdd7ba75d39de50eb6b16f062163f"],["posts/1254783039/index.html","75e061f545c74958cdbc25bf832b9579"],["posts/1320325685/index.html","3ca89c7655d3e8b5cbeefaa97b9b2176"],["posts/1329254441/index.html","1140c3993875dd19718797a30f452e6b"],["posts/1357715684/index.html","7ebb84490cfd4e09b7de832a75024175"],["posts/1358971951/index.html","4d791db938a3fa8d9261e5e35d765f52"],["posts/1386017461/index.html","e63aa4726038c70ce507c0ec501fa25c"],["posts/1394521917/index.html","46583b785748d4a71dae79471242c4d7"],["posts/1397717193/index.html","97992e321e57f92f500f98b2cfd65575"],["posts/1417719502/index.html","0e337d691e2ff4c5ede46c73d6fb80ed"],["posts/1424645834/index.html","0ba5de22e53d40e550a855841880e2f9"],["posts/1444577573/index.html","ed3b54ee71297d3c0d1f076ea5fb3df6"],["posts/1467630055/index.html","4e33e7f440ea04a72d40d8a7a6228ad3"],["posts/1478979553/index.html","5d6b689a96ae6c0ca82bad1a718208b2"],["posts/1540537013/index.html","01acb5200e6058f59812db875ab15e28"],["posts/166983157/index.html","673d52e6f8463ff778f71da2bce026cb"],["posts/1670305415/index.html","331711a346bb40929f585f116bf2d4cf"],["posts/1684318907/index.html","be5cf143a51713d06ba8119e478616fa"],["posts/169430744/index.html","55dc92075f363a57ebacb9a610e9cd88"],["posts/1700650235/index.html","3a4c84d440e6a1aeb6816e9365d001c5"],["posts/172426938/index.html","e3660af3ee3aa158dd720d1172bc0c22"],["posts/1836680899/index.html","41998e1b16a854d6425b3d3dd675acbd"],["posts/183718218/index.html","ef4d8456efc3ae6c1d4668cf9f17af78"],["posts/187480982/index.html","7e37ddd1f894043fa87a2155594a2d8b"],["posts/1930050594/index.html","ccfc204d1edac067c5eab8a8f7183dd6"],["posts/1933583281/index.html","17490a315e5950a8aeb5faf0861c8aff"],["posts/1940333895/index.html","d0880dca94d3e07ab0abe21a731e0942"],["posts/1960676615/index.html","c83df709efaf09ffbc1b9f8d90fe069b"],["posts/1983298072/index.html","3efbe30a6294bf9866fbaa127d9f690e"],["posts/1989654282/index.html","055a49e824cd5b8d39c0442efa1e3ad3"],["posts/2015300310/index.html","9ea281c69769ec3d4ec5b71b96ba7e2f"],["posts/2038378679/index.html","867b024aeeaf2264145f50c9b7fd8f9b"],["posts/2041685704/index.html","6b52325adeedf2312e2610e6bb390f56"],["posts/21112647/index.html","2920dfa2b663c3dc9e930ede64ed7d9b"],["posts/2158696176/index.html","482ac7d0287a8890c4b9a5de7d799f5f"],["posts/2171683728/index.html","290c2c9de1f7d761e5dbaa368d04b95b"],["posts/2186770732/index.html","c07bc010f235eb08e02e26a528bca085"],["posts/2275646954/index.html","df62949bc2d583a8d39c3f8ba0cb4b9b"],["posts/2314414875/index.html","097e8ff66ff5721db4b392a18941c1cf"],["posts/2318173297/index.html","1e504c54ad2260a170d8d94a03e81d8c"],["posts/2418566449/index.html","ea43ea76a973001ccdacf2dd9b520c18"],["posts/2436573863/index.html","ffab6551b0a24c02aaca9c3674cef45c"],["posts/2462008667/index.html","d6a358a41b72af85778cf7a0297c87f6"],["posts/2463121881/index.html","0e7c90f3a26f45f2da74e8a375ada5e4"],["posts/2527231326/index.html","8fd1e6bbc99808e7d4166c1ca6c59fae"],["posts/2583252123/index.html","13d1fd5c008b0075b0f0c3e952e67088"],["posts/2613006280/index.html","f9f78dd1e9561889d4a67dd32fda9e7e"],["posts/2617501472/index.html","f0d852b125c63cffb8a8707d0a4cb3d1"],["posts/2676125676/index.html","f24e7cf24235866b85f3cd9709750fcf"],["posts/2734896333/index.html","9f20c05f0c7345df0b25a5ea64c757cd"],["posts/2752169106/index.html","9e3b72f2ffc0350b4af2093592f40cf0"],["posts/2799263488/index.html","a195013020c6fd0e5e498cbeada790f0"],["posts/2805694118/index.html","413b9ff366bbd8c676680f4f7abf954e"],["posts/2809571715/index.html","c16b473329e14b16bd2ce07cfa428992"],["posts/2822230423/index.html","70e9f41baeb8ce3ccdaa8b099072fcd1"],["posts/2829333122/index.html","27170adc822e704c29e643ebb574ae94"],["posts/2911923212/index.html","3ea4ae9986e6d6d1acf2985f11693484"],["posts/2941880815/index.html","8e0a38696c3e6677f9d63f36955fa560"],["posts/2950334112/index.html","833153e8d9d8dcc4c7054a127f6684ac"],["posts/2954591764/index.html","f3e125c6cea94680f37cb0439ab1557b"],["posts/3019914405/index.html","bc3ce31a156c7830e74e37d49ed8d33a"],["posts/3032366281/index.html","bdb0c9d9d0ffd21258448224780f3aec"],["posts/3040357134/index.html","cad0a8c85258efa2fbc8ca5aad59bf20"],["posts/305484621/index.html","7695f053ca3d816e80b2219e2dd6b75e"],["posts/3083474169/index.html","d8c5789b85471e0ce1355125c574fadb"],["posts/3099575458/index.html","f2f763f5ed6d3c26465478a265aec20f"],["posts/3111375079/index.html","14bf660d447481464880698db755c835"],["posts/3120185261/index.html","0cee624ed29b050a0550f54933cdc530"],["posts/3131944018/index.html","80155f86f2e08647b6e1ae200a168b81"],["posts/316230277/index.html","357237a77c6457e51f6ce7887912771b"],["posts/3175881014/index.html","927295e172f493b445225ce86509a6df"],["posts/3222622531/index.html","bb39e2f850b3ff2e738a80152d4b95b3"],["posts/3247186509/index.html","4230a2fde9ac2fa77b7a9c493c17780b"],["posts/3269605707/index.html","293509e42db8c9cb102410f83eeb91bb"],["posts/3291578070/index.html","e1d2147099d03b81ab90a77461850613"],["posts/331752533/index.html","5be9c11c63cb21191d928a4400a773e8"],["posts/3321992673/index.html","4034b79d7b401e463c6a33758d065579"],["posts/335366821/index.html","e43d969c74aafbcd0ce8ba7a937c21a7"],["posts/3356910090/index.html","4ee80caa32493ca19d06f9b0336042d3"],["posts/337943766/index.html","37e4971361c7a00d7a5267054373f798"],["posts/3417652955/index.html","ee9c41dca4698c3529bcc6a0f0db73ae"],["posts/3444626340/index.html","331744ba6e0fb7a48ad3d4db3cc27c6d"],["posts/3449402269/index.html","0f3f66db5b86b3852f669c14cdc51e6c"],["posts/345410188/index.html","936807509b5937b79a07ce61e8003068"],["posts/3461518355/index.html","e6a9a4cf267a09d51c3f4905bd489990"],["posts/3494408209/index.html","9ad622518f9ba6efcbbe846d856d9a78"],["posts/352037321/index.html","48ed9f14e4ca6f49a794efefeb064e23"],["posts/3521618732/index.html","f2759245aed70f91796385f417d72b30"],["posts/3568552646/index.html","a223b92ae0e3e25f5f7c1eda944c4189"],["posts/3603924376/index.html","93e59ec77e84eb0723656f570c30823f"],["posts/3637847962/index.html","840d6587c41b87036652cae81e96c4a6"],["posts/3642630198/index.html","c07f12b0f8ecdeda00f60a56a75e0b18"],["posts/3653662258/index.html","9d9dfd9a7b19b41c7f8e93c473658064"],["posts/3653716295/index.html","44352353870e73095a11b0710bf18610"],["posts/3657008967/index.html","0ebf887ba170203e6def5e43cb09b56f"],["posts/3668933172/index.html","12a19246938385303e79f67d67451f50"],["posts/3677280829/index.html","b870375d6ac00181db0ead091ecef8e3"],["posts/3687594958/index.html","1072d258a60bc6e3398cd1569baaf867"],["posts/369095810/index.html","a5fa695eda20eb005b45f5d8a9279790"],["posts/3695777215/index.html","1e88732da09a45c21e6776ea59b48701"],["posts/3736599391/index.html","0278a74101b650bd0781031c81bed380"],["posts/3742212493/index.html","33a0f67a86a4070562540e3335dabccf"],["posts/3782208845/index.html","c184c0b642d21e5dd8dc7b9b1481e43d"],["posts/3789971938/index.html","a84be1618a96014449ea02d90f46c8c5"],["posts/380519286/index.html","3c954e759d50ef6a261d870fcedc9464"],["posts/3846545990/index.html","b7bb46eee8f9646137c88b63cd2d751a"],["posts/3873710624/index.html","fba8a7899be1c52957faac21d3e436de"],["posts/3959327595/index.html","96c725bfffd12778ed476e795fbd4a8a"],["posts/3972610476/index.html","5037dd4286552ffec702f187aaf58e61"],["posts/3995512051/index.html","087fd5d900f280810298994ee1c6239b"],["posts/4088452183/index.html","9cef89bacb7babe9e81d55e90b99d373"],["posts/4116164325/index.html","b42a15b803d962f3bf651d465997c0ed"],["posts/4158690468/index.html","a8baa7886a3527118d94b5592585ba6d"],["posts/4159187524/index.html","ff2b82d96c3b708f9187163a7a8153c4"],["posts/4197961431/index.html","3256ddd6e69bb8f580f0c4c45e4ca4d5"],["posts/4205536912/index.html","3c122e3d0243a4a78495f486d2cef2dc"],["posts/4236649/index.html","74ca803f550e385e1be8687d9e10d644"],["posts/426338252/index.html","c12e3f2c4560f2747870078577818bb1"],["posts/450254281/index.html","1ea1301fb5c76e3840300f408a6a8b90"],["posts/4891372/index.html","bd7c303501d60cc456ca5ca01c7dc71d"],["posts/569337285/index.html","f58fcef73e86e947f937ab43e4c65f2c"],["posts/570137885/index.html","e0795f1a04b92aa4b1ee80da4d5f39e2"],["posts/570888918/index.html","249a88d01174716283732485e2b397ab"],["posts/582264328/index.html","fe7f489a9f56ec92801a75ce9f9007ea"],["posts/632291273/index.html","34ea3ccd80e78c02999b97fd4beee218"],["posts/70687890/index.html","0cead21ed8a765f34325d43a1c274e05"],["posts/719322223/index.html","55af19adb97e1afa295586808fa16339"],["posts/720539850/index.html","7f123a61a6ac1db6ec0289dd883dd099"],["posts/786195243/index.html","510d43974479fa5c47010b8309e2dbab"],["posts/795474045/index.html","2242a2162568923bc536b44d267d28ca"],["posts/815861661/index.html","6bd7ea977082f5fbeb85c64c384ad40a"],["posts/821259985/index.html","ed2f0a9a8c62776bc282fa7f3253b3ce"],["posts/828223375/index.html","8e5b35669f78dfec88e5bb621ab7f348"],["posts/887585917/index.html","19066c009d5d3c2f48c311bc04309a79"],["posts/888549816/index.html","83bd78e32c2ddb46425205dcb28e97a7"],["posts/906436376/index.html","07909cd1e3a773dc65123c5fc77128a3"],["posts/907824546/index.html","6c9be4207726f65738b3d3d15aaedddb"],["posts/927393529/index.html","ab30d1dcd011d6dc307b1d19f0846103"],["posts/94443781/index.html","45020443086b1425779509b1196e558a"],["tags/2014/index.html","bf44303c1002dccd4fca6db172fd08a1"],["tags/2019/index.html","f491f1532e47758da6fe24c5783d848d"],["tags/AI/index.html","f6b46033d3bd05f67c1b820f2936b906"],["tags/AOP/index.html","65a2d6544fe3f5cb837119954e03ce56"],["tags/AR/index.html","2e116f4a5846cba20cdd442bdd23f3c0"],["tags/AssetBundle/index.html","e5d98645d4e379187c3f4d09b6f655a1"],["tags/C/index.html","7e7ea3ba8e6491c1430bd760594389d1"],["tags/CDN/index.html","d5060943d0e46cf7f1b674a8554e8a5a"],["tags/CG/index.html","3978d24b4830869ad0ea86203d0498e9"],["tags/CI/index.html","c730c6b2ed93427812f4778d88e271b9"],["tags/CORS/index.html","b2ab1f43b80fc9b9988de156a4faeb45"],["tags/CSharp/index.html","48b3bd604cd25f0dc6db282691a967d4"],["tags/Castle/index.html","0695a1d615b337b5d237bd3e2fb1ed29"],["tags/DBeaver/index.html","f6c251967faa9113ef5a94af02d490c5"],["tags/Docker/index.html","15699bac4e486b9e4648494b9d04cac5"],["tags/Dynamic-Proxy/index.html","20ccc7b9c9860d3643e7d8171345c3c2"],["tags/Dynamic-WebApi/index.html","1eb2e72135281e2a8efd344654ce54af"],["tags/EF/index.html","af4ecb46c370bdee7336390d59743294"],["tags/ELK/index.html","86152388b945da624d71ff4bf1a4b315"],["tags/ES6/index.html","38053e8464c63bc7a163866bcfd204c8"],["tags/EasyAR/index.html","dad78b22ced098567c89f3a4a8aba83a"],["tags/Excel/index.html","2fcc83740bf9fde4fc38d28ef7799783"],["tags/FP/index.html","c1b76b28d05ee1e071f68c22fe6818d4"],["tags/Form/index.html","b469ccd6fdf8ef04cd52c043b0034fe5"],["tags/Git/index.html","55556c578651e08f15fb1ae266990d72"],["tags/Github/index.html","85e2bbe5cdabbcb6001083c2d74fddd3"],["tags/HTML5/index.html","b89678f2e706f04946e07a44901b193b"],["tags/HTTP/index.html","dad12f869770907521fc9ae6fb0a6f7a"],["tags/Hangfire/index.html","e6193de55c7a75115129db911330a375"],["tags/Hexo/index.html","db99a0382a015afe2b0cae644b499c64"],["tags/HttpClient/index.html","f55dc4c0755fc546665603e1f53bcf35"],["tags/Hyperlog/index.html","5ae16c380b3c136cc3fafc69d3bac5ab"],["tags/IDE/index.html","39e91d682e0c31d7782b247c396a810c"],["tags/JS/index.html","5f579dbb72ccdf3b510ee8b6dc115302"],["tags/JSON/index.html","866a634cdbbd2ed92513e5735f37b888"],["tags/JSONP/index.html","3e7b07582cd0ed790517054b1a317d7a"],["tags/Java/index.html","7d35cdf9c3d99db2ebcc7e90cbb5061b"],["tags/JavaScript/index.html","e88d50034993531eb7e0e7042345a4f8"],["tags/Jexus/index.html","cd0e90b5881a730de7771d11f63d55bf"],["tags/Kindle/index.html","5771e73f6fab8fc5f47523e27fe9e939"],["tags/Lambda/index.html","ae211b13407c3e388eab23dd131f24a5"],["tags/Linux/index.html","457244a5b4a5fe43d82558316bdcd834"],["tags/Liquid/index.html","714738c9af244a5e03a1a1066189568e"],["tags/Logger/index.html","725158a0089d99691f257ba28ada9380"],["tags/Love2D/index.html","fb999deb176374d97c0cff2999928bdd"],["tags/Lua/index.html","d1ac586bb84dc10c3f83ee28138c7243"],["tags/MMD/index.html","3caa33e03d66c64885f5d140284469d8"],["tags/MSBuild/index.html","1c8c78c0a1df96be97e0fbf3f55e6993"],["tags/MVC/index.html","d762b8c68209cbb0e937d8053170d953"],["tags/MVVM/index.html","80962137d6768b26be27fff695438377"],["tags/MapReduce/index.html","9d44be3283eb34e1d0d53b05e5512d83"],["tags/Markdown/index.html","e2bba0bcb4c3e5f055bce31e32c24f6a"],["tags/Mecanim/index.html","c6736cdba2777363f5b254a3b0258308"],["tags/Mono/index.html","4fc12f179ac9fd3b790fb3b17f0ac521"],["tags/NET-Core/index.html","1461c11cc9d40abdade69e2d00845d32"],["tags/NET/index.html","58147096c4f8d8d5b21c43200a7e634e"],["tags/Nginx/index.html","46a55009a0addca0462a04d6583ba4c8"],["tags/OBJ/index.html","c91e9e37c99387c630a7f07f74f6a2b8"],["tags/Oracle/index.html","dbb5e04bf17d7d345c27f57b93c736de"],["tags/PL-SQL/index.html","de9b95669a8566cfbbf78ac1dbf12559"],["tags/POCOController/index.html","b9131e09538391edd35e5f738029ed2f"],["tags/PWA/index.html","3f167175309c58b507dd40f2e7e2a51b"],["tags/Python/index.html","55cab81a23c54b6c80560f839ad9a99a"],["tags/RESTful/index.html","c4a28ba99a2434e5e2dc1bfbf33ddb78"],["tags/RFC/index.html","1cac2b5e2a310b8d7dd729a138ee1462"],["tags/RPG/index.html","3fac05f907d334992c32483b26947c52"],["tags/RSETful/index.html","0e249701b5d19abd1ae40856a29763d9"],["tags/React/index.html","7713df8fd30850e3138d730400e2b017"],["tags/Redis/index.html","ea3879491e0301b7d3c94df085745a39"],["tags/Referrer/index.html","1e74271791f681dbf2ec21dcebc41578"],["tags/SDL/index.html","5df2eb23c71fcfbbf2e07bb3499ff4f5"],["tags/SQLite/index.html","e75b3da135601da9648d280b70b4e92b"],["tags/SSE/index.html","b543f3975a9975e451eaad07efeef3c8"],["tags/SVN/index.html","d89a1f9ec742410b1507d6c808c6d67d"],["tags/Script/index.html","99f5810bce4e1feb2653a7600548f151"],["tags/Server酱/index.html","af059d0a712533c9a9e9fdb390caa3de"],["tags/Shader/index.html","577795a43bb2124aa4e649b5d596699c"],["tags/SignalR/index.html","f18663c55cff2f5a2c22404be1ffceea"],["tags/Socket/index.html","072ad0877ac3f806805ea6d8be179f48"],["tags/Sonar/index.html","ba489b1fc39e9ed5c4e273b75a42aae8"],["tags/SourceTree/index.html","033731b32f3c518fac9c9c21f3bf539e"],["tags/Sublime/index.html","5de760f83ce1eb6e2da45ae72e2c6082"],["tags/Swagger/index.html","7fa60ac94accd50b5422061d25b900b2"],["tags/Trace/index.html","7f21e69ba7fb0ca833f9b86ada1be1c0"],["tags/Travis/index.html","0517af340eedbd702bb93fab254820a8"],["tags/Unity/index.html","43eb4bf1fc7b9d9929522a391af7f40d"],["tags/Unity3D/index.html","cb09ddd3389aad42a42ebd59817780e7"],["tags/Unity3D/pages/2/index.html","ec836599d42a5d4eaad194644585c372"],["tags/Unity3D/pages/3/index.html","38d7ac7777dccc09991c712f16850511"],["tags/VSCode/index.html","c76ce68bed0e365fcf0ab206852ad094"],["tags/Valine/index.html","7dfebce0279a9fcb6158ac700477e363"],["tags/Visual-Studio/index.html","aa62cd255d89c95a33470b63f7f5bd7d"],["tags/Vue/index.html","de0ddf90d6e828f6b8bdd669f841c222"],["tags/WSL/index.html","60e5a1487f503c3152ddda274bde9196"],["tags/Web-API/index.html","d5ea85a20103e53a89276f312ad1cd35"],["tags/Web/index.html","6eef62a17ee09d9677a9d41569f48190"],["tags/WebApi/index.html","45fcad8ef891f59c3815250a5317172a"],["tags/WebSocket/index.html","8ab7ccafb40bcc585e34a30129983108"],["tags/Wechat/index.html","1fdff334f59796ca00481b18efde56e3"],["tags/Windows/index.html","d56c20615f7c149422af54fec7b31e94"],["tags/disunity/index.html","6b0e353059037f01271944b5fc61d01c"],["tags/index.html","e78802da58456b57a01e27eb089a3e0d"],["tags/jsDelivr/index.html","6053978260cfd225bdc14a38906486f7"],["tags/matplotlib/index.html","b35ba89895963307099a90fa5a10d821"],["tags/uGUI/index.html","514de15f68f4c1352b013fc488201a45"],["tags/zTree/index.html","4fab7412dc61af8653596e04f2f50218"],["tags/一出好戏/index.html","2e41edcaa80801db7ca4d8a53cdd60fd"],["tags/七牛/index.html","047f4c1c45f391078409f397587685e8"],["tags/主从复制/index.html","904ea2f660692b10e5c35735b97f3b5f"],["tags/事件/index.html","2d47c6e2fd31c1acdab4a74bab96ddc4"],["tags/二维码/index.html","26f342d0fd69c320d4faee0fcb6a2798"],["tags/云音乐/index.html","59310cd0e570cb9371412882b37fb5eb"],["tags/互联网/index.html","cbfa9cc111041d75a3201377dc026dda"],["tags/亲情/index.html","60c4ec20ff90a354b6fe1c7a34aa1b19"],["tags/人文/index.html","11155363ec7d67428bbb4ca2a23215ba"],["tags/人生/index.html","b92f6e5948fb26c4e716ceda2c7b3418"],["tags/仙剑奇侠传/index.html","7e00edf8fb63b62403ee64c64899d9ff"],["tags/价值/index.html","39355c9e2608a982809c245317193395"],["tags/优化/index.html","122e908820d690022e5bee44d55cdd98"],["tags/全智贤/index.html","bb292e0aee0ad1cd130a1aad2ae75cf4"],["tags/公众号/index.html","70aa33fc7a6d2b0d26d4dd6928da4bd3"],["tags/关卡系统/index.html","fa3de3cd8021f48e0579ae296bc3c990"],["tags/函数式编程/index.html","a1708838710319bc3b73e696cf22cb01"],["tags/别离/index.html","2e9e58486ff0290414d94cc8270e6e48"],["tags/前任/index.html","e07327c6506f1d55d6c5d42009183269"],["tags/前端/index.html","17b89b8f8daab41367d01c83aad9e640"],["tags/剑指Offer/index.html","d639e92cf4a7a89f8c2373cd83e9bca8"],["tags/加密/index.html","21c6836aeaa13a1de77cba6103a94239"],["tags/动态代理/index.html","01db77040478f3509801f0ad4cc833f9"],["tags/动态加载/index.html","9e92742eded2685858d350350236cc2d"],["tags/动画/index.html","6622715afdf6f912048966a24943365f"],["tags/单位/index.html","8e67ca35fd8c96c6eb052f8b518a0d3d"],["tags/单机游戏/index.html","22d33e6f5be209ff3e82729398faa1dd"],["tags/印度/index.html","4d5b24d219dd90db752b48a8207883ae"],["tags/历史/index.html","a29b241ebd5d4837f8c899c02e84079d"],["tags/反编译/index.html","e57cfd9faf2c0780bdea231b112155d7"],["tags/同步/index.html","3709f03deee55fe0778295f46533bb85"],["tags/后端/index.html","eef1b837c9a42ec6332e253e3fb3b4ce"],["tags/命令/index.html","def86ca7e4927379693a36592e71616c"],["tags/和平/index.html","ec8fdd8cc03752be29fcb9f0023b53cc"],["tags/响应式/index.html","272600e7e70b44e5aa3c77e15475df5c"],["tags/哲学/index.html","2a7c2137254cacc9e4dc15ca2b4fbe4e"],["tags/回家/index.html","06e8e84ca163d68b762349e559517401"],["tags/回忆/index.html","611d53d881e74b22aae76f0785e1533a"],["tags/回顾/index.html","a6a783e7e337318072cb992f03d2e999"],["tags/回首/index.html","2c982543d04b3f87b09c1f78e07c1cf9"],["tags/图床/index.html","cb58d36af327f47ff1ea1e518c549725"],["tags/图形/index.html","eccb51f362a84e6bd3b4a60098150aba"],["tags/地图/index.html","9fa22fb00f651ee4b935dac93833b5e4"],["tags/塔防/index.html","338363969c04a9aa3575797f386d0bc9"],["tags/增强现实/index.html","dc0aee0383ecd91e093211c8e0cf480f"],["tags/壁纸/index.html","ee2971164800ef30d0852254217f4e20"],["tags/夏目漱石/index.html","7cd7f77818ab812262e5e6a9de764da1"],["tags/多线程/index.html","e0469bd3c16dd5f8f01735ca9b5c1165"],["tags/大护法/index.html","422261914d22fd77a3d0713638bd22a2"],["tags/委托/index.html","81b6583fa294433c1501fc1cdf5e210f"],["tags/孤独/index.html","39fd52e7b3b77dd28be228d92ab488a1"],["tags/展望/index.html","72f1a668953d6a3247db30097249765d"],["tags/工作/index.html","3de38d61080673fdb2e8b5a8c8667bdd"],["tags/平凡/index.html","b5c4a37aa60ac973e24ad3c538ae2e72"],["tags/年华/index.html","d0e442b021b35350e95f391728f67cf9"],["tags/年度/index.html","0897f73ff6be986a4a1fa4a7b2a74aef"],["tags/开源/index.html","a785900d57019f4e9d67771f92d36fef"],["tags/异常/index.html","baf85708c6ac661365b39939d22acb50"],["tags/异步/index.html","571c9f387d557bbf6a00756ec981c91f"],["tags/引擎/index.html","c74d270ba10c224b365706b800a272e9"],["tags/影评/index.html","e71e61b1df9fdb2297d904310bee25bd"],["tags/微信/index.html","668ea7a893baa736bdf183c61e8166ed"],["tags/微博/index.html","9b14ea87c02f520b1a321a470ba04d96"],["tags/心情/index.html","7280f8a33293c5c1ea521c01c02bf7ae"],["tags/思维/index.html","6a17501bf10e74923bd38a4ba628bb70"],["tags/总结/index.html","fec9e46ca38ef6990a659469a12842a8"],["tags/想法/index.html","c740f974f24f7c847de66d34b5713b09"],["tags/感悟/index.html","aa40bd4d39b2c5f36eda89d849280898"],["tags/成长/index.html","8100ab70a02cdefecff1aed3af4ee56a"],["tags/我是猫/index.html","f1a9cf77d39393d1c7a76a2297b69fe9"],["tags/扩展/index.html","18c8ff75a38fee63772816c2ab1aadcf"],["tags/扩展方法/index.html","b17fc9ce1535cb5cb6eaa7fc4dcde762"],["tags/技术/index.html","2b9670683f63962fb1107596a0ada26b"],["tags/拖拽/index.html","8e3f9fe714bb0301153c0d3795ef0e17"],["tags/插件/index.html","1249446525587c013d759b0d758d36c3"],["tags/插件化/index.html","7361753f750feb36b749807d1f2e0737"],["tags/数字/index.html","8f970c99637fad8d16bc9fe264c87302"],["tags/数学/index.html","e0613dbf9e96b14dc7eb296ee2085892"],["tags/数据/index.html","0da93bc09757d4b51dfbec496ed0f75a"],["tags/数据交换/index.html","2f55cc65901e2801163c79fb1c880ad8"],["tags/数据库/index.html","497f9b92457b7ad937919fe0cd321ac2"],["tags/文本分类/index.html","bb8a345bf239e3e338eab52ff093d771"],["tags/无问西东/index.html","9cdfa69871ac187d6c1c8b50c6d15c60"],["tags/日剧/index.html","c08e9f53300c83fb808e72c462efb134"],["tags/日志/index.html","fd9baf5c1e0b55462566d83dca6cbb17"],["tags/日本文学/index.html","d00e415e5b82a6d9cf4425b0978c1686"],["tags/时区/index.html","5745df3ca459face036299cb801f2fb6"],["tags/时间/index.html","dc3d2cae8dd2b4018927790813dd487b"],["tags/服务器/index.html","a1b43370912a3f551f3eec8c7f139160"],["tags/朝圣/index.html","5bc570ad9c6b4fc6a631869edcbf2994"],["tags/朴素贝叶斯/index.html","6ea45b056e140dec5aef8fa67be55665"],["tags/架构/index.html","5b4cba1fde2f6b3c1c84bad7c2ae058c"],["tags/标注/index.html","7a04d3f72c2aa130365bba0d867d89c7"],["tags/校验/index.html","ce77b2c41b480c739a46a240b4e54b12"],["tags/格式/index.html","931fcadb6aafbadc2c92831f08212cb6"],["tags/格式化/index.html","ba245b8c063bb6e4e6b66089c4fd7400"],["tags/桌面/index.html","56d3d034333b008d423e926b86b83bda"],["tags/梦想/index.html","af6055132bdc2144420819dcc776543c"],["tags/概率/index.html","9cabefa0eab647def55c6f96d5c78f47"],["tags/模板/index.html","8db8ff02ae449be6cc8903610076854b"],["tags/模板引擎/index.html","669974df523492191d1ca0c55c06d3cf"],["tags/毕业/index.html","04f440d7fc7cb72876e8687163857807"],["tags/毕业季/index.html","4f683f37a582bc14bc627929bd9ef938"],["tags/消息/index.html","74b2273269cbc8896c3c233d1ac7acd0"],["tags/游戏/index.html","c672646d95a7989dc7add97cd24e422e"],["tags/游戏/pages/2/index.html","d470f7d25bd172ea830eb5581dd4afd1"],["tags/游戏开发/index.html","8daf4ba8417721f326d0a29685bdcfc6"],["tags/游戏引擎/index.html","8084559bbe6b989edc74c294ca72a167"],["tags/爱情/index.html","573b42ad2e58598039633b2b4fb97ed4"],["tags/版本控制/index.html","bd1ab0cdd1c8b984d8808bc2a92a6c5b"],["tags/版权/index.html","fcf098959111f8574502631ce9a6a97c"],["tags/特性/index.html","6d75663a77943db67de0c0ba8aefa799"],["tags/状态/index.html","58e2aeb8a348dfef064a9081e97ea972"],["tags/现实/index.html","1f452061fa2df5e221bf783b4249f72e"],["tags/生活/index.html","d1963c31493df0851b061dee270ac18f"],["tags/电影/index.html","38f547c13396423083d88e3745098106"],["tags/画家/index.html","1f9f5b43a461659d06193b6deeee903e"],["tags/知识共享/index.html","44a40ef5300249724c05d2019fa41afe"],["tags/矫情/index.html","f730395cc957f4ed0613e7d9e9bbc974"],["tags/程序员/index.html","2ab39a4c9e0414e71c53aca0c8906795"],["tags/穹之扉/index.html","9a11f70b34f80ec7f3bbfee43e43237b"],["tags/穿搭/index.html","4d0472fcbdc421c8758d0d3971754364"],["tags/童话/index.html","7563bc935367fbfc08ae4e8072fecd09"],["tags/笔记/index.html","52312bda95aceb839af3d8d018a663ad"],["tags/算法/index.html","89fade705802dd7d4ded7b2b3416abea"],["tags/米花之味/index.html","41a657f6644af720d9aeb0be057d617e"],["tags/缓存/index.html","dc195efe185661a0ce888d838631c809"],["tags/编程/index.html","63150ff5d3d28f9d1fabf61aba2d16a1"],["tags/编译/index.html","0cc7b5e5832bb092f1174e010a690fe5"],["tags/编辑器/index.html","74b26d7b0019e5b8173b424b7bd1ffd3"],["tags/网易/index.html","ae8a3dedeb85005ec8b93de5ec8934b5"],["tags/脚本/index.html","b4f063394efeba167686347c84764368"],["tags/脚本语言/index.html","fb90c8dd2c72bc9ef8b995cbd8ff16c4"],["tags/虚拟摇杆/index.html","c2f76b00538b0b3f3de5e988df2c2284"],["tags/蛋炒饭/index.html","f10a3206b3cdec197acd8512116b7d16"],["tags/表单/index.html","2bbfb522f8ea3c94328437b9103e146d"],["tags/装饰器/index.html","6fbf92afc5627095290ac75c23ffdc8b"],["tags/西安/index.html","54df1e3a34235404bf199bfbe076d8ca"],["tags/计算机图形/index.html","d6d9d5c2fd1808bcdfdeb0f1203e5e63"],["tags/设计/index.html","ff0f8bbea374d61830259f82f9318827"],["tags/设计模式/index.html","e30103c42915004898d2f2643d2344d5"],["tags/访问量/index.html","a7f526f30cb2573013728f2830888506"],["tags/评论/index.html","5979bd5eb00168c3ffcb53735dab6b6d"],["tags/词云/index.html","96175e287e0bb6f4c4a5b431432ed228"],["tags/诗人/index.html","0d1ebf4df7f1d9ba87cb781a54dffe6b"],["tags/语法/index.html","af9ad5ca4e41545b8b572e59d5f2f947"],["tags/请记住我/index.html","33509895a2717bba1a519244d095e1e4"],["tags/读书/index.html","cf37e54124c31f3fb9cdec54edc5282e"],["tags/读写分离/index.html","17b72ec465af6bd2f8ec65b85f9685cb"],["tags/调试/index.html","7f17cbd47827158a417d01a19f6f537d"],["tags/贝塞尔曲线/index.html","4460a86035731cc7355eaf899084329b"],["tags/贪吃蛇/index.html","759d4e275ca85d0fd75611d70b69e213"],["tags/资源提取/index.html","63f1edd32bd9aa499509884b8536087e"],["tags/跨域/index.html","a605f32751e8d009f9a33cf6e59f629f"],["tags/跨平台/index.html","80d615c6b014dd0a09014db20e07d8cf"],["tags/转盘/index.html","9458fc4e3a37b9cce251345175a0a550"],["tags/迁移/index.html","6026bf9d402160fa9b965216ef5bd730"],["tags/通信/index.html","47e314dcef6a44d2f83b10f270abba6b"],["tags/邪不压正/index.html","6fd1687aa3ce718f682549424d400f1e"],["tags/部署/index.html","5855387fb7ca17bdd982231d76946a7d"],["tags/配载/index.html","79ec3dfcfa8d2a145478e31b4e8c5cce"],["tags/重试/index.html","3a9324cfae08d03b40796f1726bfeafb"],["tags/长安/index.html","205a8b0713cafcb8cdd7edf584985cc8"],["tags/长安十二时辰/index.html","8be7d557f50735d82f58913f6bd19c83"],["tags/阅读/index.html","0a6ff48677051d3b538288830facbf9c"],["tags/阿里/index.html","6621c807659eec106455f677cb828ef1"],["tags/随笔/index.html","02e1a76a4d54cd4e315f7038ec118e43"],["tags/霍金/index.html","20c59b29cce7d14349610123d719581f"],["tags/青春/index.html","703f6271819a2229b16aef4f23f510b0"],["tags/面试/index.html","238a5dd1088545832dc7948cb9642d3f"],["tags/韩寒/index.html","325d8c4b9d22265c2790539bd78becf0"],["tags/马尔克斯/index.html","d911e4b12f4ba7e0e7fffb5aa00c076a"],["tags/验证/index.html","70c990af4fbd76ef1dbcf87b894babc5"],["tags/黑客/index.html","bfd6938ff605168c671e5a1675d4fca3"],["wiki/index.html","48845a52146991ea88e266c56be02a5d"],["works/index.html","09ca95d833f62859ee5f784552055311"]];
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







