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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","9c8b86104ca6b3fcbcd2fc8d686d00bc"],["archives/2014/12/index.html","b395cc057c446b5c65786c38448e7858"],["archives/2014/index.html","33aab5b149f8b9b1a92d89c3b9bc2366"],["archives/2015/01/index.html","50aa3903de89f142f9719e066997619b"],["archives/2015/02/index.html","bccca9500b2ba909a32b4ec5deca971d"],["archives/2015/03/index.html","787a51ca84831979be34408cc6d33415"],["archives/2015/04/index.html","2e25c9f2db5e83761521f499294960bb"],["archives/2015/05/index.html","a034e436889a39530e419c44a7bb1a16"],["archives/2015/06/index.html","ae8fd6a6fbae7113f6b6e0158459dcd2"],["archives/2015/07/index.html","184768cc71a4a8da50b3e1c6a1166d18"],["archives/2015/08/index.html","25e7f0f8c34e1a1feabf80531babf293"],["archives/2015/09/index.html","cf3a86194ca2b525b441a0abc8796435"],["archives/2015/10/index.html","df71cab7c6c063b12c318f745e792c46"],["archives/2015/11/index.html","b0cc8a710798dc38c2928e3b6c7fe16f"],["archives/2015/12/index.html","8d50252870ef5b7b4c693097bd674341"],["archives/2015/index.html","5dd2536840b803c8cba02609fb0d2eb0"],["archives/2015/pages/2/index.html","62832e7a06eabde00442dcf731d1842c"],["archives/2015/pages/3/index.html","b273ab5789cf3ee918e768303703fbdf"],["archives/2015/pages/4/index.html","81748361e2e1e371480ff48a037d4e0c"],["archives/2015/pages/5/index.html","3e0004e9d17b8f6870fc750d0e07fa74"],["archives/2015/pages/6/index.html","72deaeee67b230fe6e75d22b571bbbb1"],["archives/2016/01/index.html","93a39a9cb4baa2aad42c3ec99ce7e9d4"],["archives/2016/03/index.html","b04f07add5b42da8238aed5e1dfd59fb"],["archives/2016/05/index.html","f9e57d284e2b225058bf30ca7073037d"],["archives/2016/06/index.html","a68732032cb55305c0e3662fe39ddd6c"],["archives/2016/07/index.html","cfa791ff08944b46786def8143e0a358"],["archives/2016/09/index.html","8413f178d475971d7643ab012c52746f"],["archives/2016/10/index.html","457ac9140486d3f99b0ea286f29777da"],["archives/2016/11/index.html","74ec0604e303fcae2ad105c779473ef4"],["archives/2016/index.html","e4e7d5d35c80e8464799cc19e5d720da"],["archives/2016/pages/2/index.html","a3b56908d1a48e6a1be3fc75a0418acf"],["archives/2016/pages/3/index.html","65e80d7d82867ffa15ec2a7762fad7ea"],["archives/2017/02/index.html","cd9cfc23a142fd9fd47b8e301d71ca0b"],["archives/2017/03/index.html","7ca5062f4e1922591485d2a5e7cab12f"],["archives/2017/04/index.html","4d897fdf50e900b15b4f5ff86b7e8cec"],["archives/2017/05/index.html","b968bd8d8bb912431e9b75965d4c7565"],["archives/2017/07/index.html","c565a98bdb742ad3dde97eb1c253eca1"],["archives/2017/08/index.html","5508abc175e3ea3d30baa783ae5cf58d"],["archives/2017/09/index.html","e5711022cdd7c8b97760ab1eba6ca608"],["archives/2017/10/index.html","f74e3b3a347e545bcfab0703acd5c2e1"],["archives/2017/11/index.html","f9f8d7133ba1568d1dfd9c89bdd7eeb2"],["archives/2017/12/index.html","c42cedd7b48976aae1e76cef2674fa41"],["archives/2017/index.html","e78803765398febb905b4f2bd05a2b22"],["archives/2017/pages/2/index.html","4283912780f508c876f03353c3cabea2"],["archives/2018/01/index.html","abb82c31a8774c10ddb9812b4a7897e5"],["archives/2018/02/index.html","957ae5d6c8a30141554b97b6664a0b1c"],["archives/2018/03/index.html","50de9b953518462d9ad35e9116274dae"],["archives/2018/04/index.html","d890fdeae9250b76be1644c4100a62f5"],["archives/2018/05/index.html","2308e72508739b01ebafb37c6ee01b64"],["archives/2018/06/index.html","315302a4b17ddb3b92d59b8d7ad35101"],["archives/2018/07/index.html","96c3e06a8f803cb67d81b30d68d5f8a4"],["archives/2018/08/index.html","f4bafcdf7edf656d90513ac109a2c791"],["archives/2018/09/index.html","b164aca2eb37235a41fc1070ec696400"],["archives/2018/10/index.html","036bdf14a73023d53f095f8f14415fa0"],["archives/2018/index.html","c1edbe641169b473f9fd002737d20ae1"],["archives/2018/pages/2/index.html","006c5e9b7d59076b8c9556c3add484bb"],["archives/2018/pages/3/index.html","ee02f0ea6f6490ee00c610ddc313d18b"],["archives/2018/pages/4/index.html","eb979abeb0f83046c39409e3b1212989"],["archives/2019/01/index.html","7c843a0654a00ea532f5f01b6207dc40"],["archives/2019/02/index.html","108aaf29604513ccf036cfa39ec8617b"],["archives/2019/03/index.html","7d015d0b4d3fd132c583176bc11120f0"],["archives/2019/04/index.html","1024798979d8d0d6884f17c1534a843c"],["archives/2019/05/index.html","bebee150d7811478c1cd9acced3abcea"],["archives/2019/06/index.html","4073120281e774293ac27ccbf9be0073"],["archives/2019/07/index.html","e374824df9b164182b390add59de121d"],["archives/2019/08/index.html","b79484e70fa4ff63fd1e53a29e06e34d"],["archives/2019/09/index.html","18aa9176c29d25f80a2351671e489976"],["archives/2019/10/index.html","5db2272fe4e8933e15fab33c8d18da99"],["archives/2019/11/index.html","2f3aa678100defb8aa9066344e5100dc"],["archives/2019/12/index.html","66ac5661c468474bb1277eb185dd5b42"],["archives/2019/index.html","abb98839dee55503ea79dbf64e379481"],["archives/2019/pages/2/index.html","55f93e72bbf57f3e78ec8b1c72e7c2cd"],["archives/2019/pages/3/index.html","9e0b5a6c961c18cee2a703636d71e59b"],["archives/2020/01/index.html","0acb7347ec0fb1655fc00f2b215c6d39"],["archives/2020/02/index.html","2d2aedbe8314dc174703047ab44d6d4a"],["archives/2020/04/index.html","9c7c647a7b4169fbae9ec8ade855b98f"],["archives/2020/05/index.html","815ebf879e9154921364df3aa3700467"],["archives/2020/index.html","584f586787d39593eda9d3749213c090"],["archives/index.html","30c194b23e820214cf49d585fb371e89"],["archives/pages/10/index.html","9830647a099f5a0ff4cff8d1cc93d858"],["archives/pages/11/index.html","47597a726d7192ea00930ed13b929076"],["archives/pages/12/index.html","d77a8671d5ed08c71dcff56219cf38a4"],["archives/pages/13/index.html","5955426c68ec7ed604bb1d5d4bec02e9"],["archives/pages/14/index.html","5d8107e85703f92ad7f3f52ff81cc2c5"],["archives/pages/15/index.html","2785d5daccd3dca6212048b6634625f3"],["archives/pages/16/index.html","23f99a89bbbb1b8f99fc4dc435749588"],["archives/pages/17/index.html","579fede81a7b67bf05d58c32fdff10b9"],["archives/pages/2/index.html","5ef384e1080a55b0073faeffb200530a"],["archives/pages/3/index.html","a2eb1d7424eeecaabb0392d64e554b03"],["archives/pages/4/index.html","6d92d8942f436838fa90c9b5624f7567"],["archives/pages/5/index.html","2555d5e221582a4b877c9621e2d0a30c"],["archives/pages/6/index.html","3e20519e81b4b1019da700f802ac7d70"],["archives/pages/7/index.html","d6fa63463b3b8bfc3250589907d94284"],["archives/pages/8/index.html","0774b5b39d25fe6221a7b9684b145147"],["archives/pages/9/index.html","6c44c8cb73e0f96b299e31b3f9d4cd09"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","1dce75b11344ce71fb024e6962ba1c15"],["categories/Unity3D/index.html","1fd7a3c6be2bae6fac948a3db33a8420"],["categories/Unity3D/pages/2/index.html","84f7bc400b6d059885f91ca8496a9370"],["categories/index.html","0327e1700297960946e4536eb12fa601"],["categories/人工智能/index.html","d052060780e59ac02dabbbbc95f13733"],["categories/前端开发/index.html","ff871059f15ac4c182107029ddfc2e34"],["categories/单机游戏/index.html","4511281b20f2889236ba9cc88c0b7059"],["categories/开发工具/index.html","5ea0eab9cc59650b977b060609df0e12"],["categories/数据分析/index.html","13c98912775925a25e484d926ac3932c"],["categories/数据存储/index.html","ed39c40840e7a3d863e2c0eef86de8ac"],["categories/游戏开发/index.html","50fc35c5039c7607220352634fb43548"],["categories/游戏开发/pages/2/index.html","2c134b9d8d875ad966dd44d7fa680a1e"],["categories/游戏引擎/index.html","4e6263b8540bf54017c8b9b70a3badd6"],["categories/独立博客/index.html","767961b086e771836adf099080ca4dbf"],["categories/生活感悟/index.html","20d890418d35b235ce7a3937a8695010"],["categories/生活感悟/pages/2/index.html","9615211f4b0d8078a4cecc82c251eeda"],["categories/生活感悟/pages/3/index.html","9461bae6b2337bdf5165ae71854f779f"],["categories/编程语言/index.html","6f790edf60c35ffeb8d905f46c9a1083"],["categories/编程语言/pages/2/index.html","8afd7e2995221f9d15459a0c63a89ae9"],["categories/编程语言/pages/3/index.html","24272407a7f41e716f9caab3a1c25ea3"],["categories/编程语言/pages/4/index.html","2cbb04a94a0b961355f94ef45288d86a"],["categories/编程语言/pages/5/index.html","b57748453df149f32e66888da49f89b3"],["categories/读书笔记/index.html","9557b2946208a7835ebeb3604c698f0e"],["categories/读书笔记/pages/2/index.html","b1aaecb827f6a699a8535dd3fd771ce1"],["friends/index.html","0955c1a9bc616eb6b3e833aecdb0e740"],["index.html","3d1e9229985749b1e5103c3c2533f272"],["movies/index.html","4fc5ec2621c4eecd21a93315b942b309"],["musics/index.html","82647ff33a3a6a84ae6aed2ff90002b5"],["pages/10/index.html","7e4add0bcd4e710c5a20ed02b8aa161a"],["pages/11/index.html","4b615f3089053f1646b068394f3b67cc"],["pages/12/index.html","9dcca6fee90a5ba93af4771c4417623c"],["pages/13/index.html","aaf5254285b3808c1d7bf2d4e81b692c"],["pages/14/index.html","f3334c5ee474a1c0daece0439a49a85a"],["pages/15/index.html","9ebb4d2d584206cdade70c9276b6dc9e"],["pages/16/index.html","199a999e4e4d2743d214bae102b9f534"],["pages/17/index.html","2d74d67d7d5b9b912226ef5250996544"],["pages/2/index.html","8a6dda811dbbac82b412fc46d28f9149"],["pages/3/index.html","3c0ac7fecb7d78cce30985daeb21a02b"],["pages/4/index.html","84b19648a0300de8e170e8327742df05"],["pages/5/index.html","88a2280d6a0895bcedd2bdccd22039ee"],["pages/6/index.html","d738638f85d2158d173b80d307810cb3"],["pages/7/index.html","b864aa8f3c42ec3c0659992e51437497"],["pages/8/index.html","9fd2c7ae5ab9c12acd9b51c047e4b772"],["pages/9/index.html","bd589d5be42b6574cc71417a584b25c7"],["posts/1059499448/index.html","0e23bea3f912011fd19c4f78511be698"],["posts/1071063696/index.html","c93ce6d2cf205d91d5036292c22491a6"],["posts/1082185388/index.html","f9afa0e1141f2e53916d70fa1f2b619b"],["posts/1099762326/index.html","f9ce3f24b090fed2ff948ba1fcd4a527"],["posts/1113828794/index.html","2033428c1f41dabf8eafdbe248a6fc93"],["posts/1118169753/index.html","e2bfadd2f727ead9bcef35a9e2a03dcb"],["posts/1122710277/index.html","db3aaf0d32fa8e7b33154d5937deb15c"],["posts/1124152964/index.html","e344c1db2921751b76f8b5e6661e8cda"],["posts/1127467740/index.html","d3f5cbd2a7d0225ede9e408b8fd5ba52"],["posts/1150071886/index.html","496d39bc5fcc6a4b6c23738d02a34878"],["posts/1150143610/index.html","41bcbfccd53fd4821a2764e47a8afd40"],["posts/1152813120/index.html","b3b1f3c4e4e1220372f2f1afd527f589"],["posts/115524443/index.html","93eb1cd66761d1efae832a18e3634fcb"],["posts/1156673678/index.html","af983b7ea9c242bbcae1938c3f476456"],["posts/1166840790/index.html","854ada8fb6adbaf8580249a98253a82c"],["posts/116795088/index.html","351c9ae61539a758ddb3966fe101cca1"],["posts/1176959868/index.html","5ebc328c979b4791c8195830083d8ad8"],["posts/118272597/index.html","ba4b33f029522852d3af56943caeb989"],["posts/1190622881/index.html","5bd31b03251005ef58d17fa6c9bc275d"],["posts/123663202/index.html","29869810a79fbdef1224ba7a4d956633"],["posts/124807650/index.html","780639a4798a36485e474c57820927ff"],["posts/1254783039/index.html","23fd031cdba0f4c62169595fdd343f8c"],["posts/1289244227/index.html","d644719eb2527bc32ad0c5546a674a8e"],["posts/1320325685/index.html","453d1487c16830c5f8b98532863f6055"],["posts/1329254441/index.html","946d34b6dad49d2bbfd9f04d738a6c3d"],["posts/1357715684/index.html","7974adc7e91d6e2d30994203cee70556"],["posts/1358971951/index.html","2b76883989618af0e942822fc583cb60"],["posts/1386017461/index.html","2e280c9149737b9feef19285f773d64c"],["posts/1394521917/index.html","585354ac406f4419b943a0ec0a7bca55"],["posts/1397717193/index.html","6cb517d5a69f61ec8e2ace430b16a4f9"],["posts/1417719502/index.html","bb886de6e5916e12c7a4a35ad1f5c487"],["posts/1424645834/index.html","6a40e72484ec02e709473bd491417403"],["posts/1444577573/index.html","ce218d5538e88765856133e714670774"],["posts/1467630055/index.html","012b0398a49e4ef390d375013481f4cb"],["posts/1478979553/index.html","31cef4e5d12fa0d3ea12dd4d8185d2b9"],["posts/1540537013/index.html","20ff20df21a2c6ca499b918c7f959bf1"],["posts/166983157/index.html","6606642e86a9a7181dfe39067ba27ebe"],["posts/1670305415/index.html","055302cac9d4428b23937cee445f0358"],["posts/1684318907/index.html","61f5f3a9d0e975a40189dee0bda98ae7"],["posts/169430744/index.html","9a5c61c81d79e17bd4f8fe92c90b763f"],["posts/1700650235/index.html","8b24ee05d2af1ff4e3289f7cbdeb433f"],["posts/172426938/index.html","e9e5f58f46d33025793ee6f054985da2"],["posts/1836680899/index.html","2b5d29ff590b7588d860f14de56ab78f"],["posts/183718218/index.html","261ebd624212d01da3bbb5195d9a9fad"],["posts/187480982/index.html","4772b227ea5fb44cb4fbabb7e111ee24"],["posts/1930050594/index.html","66812b80d1ad9aa35463190f9c3f8e36"],["posts/1933583281/index.html","c87a697736dc16951957d676e3865c06"],["posts/1940333895/index.html","81fc24f10eef8c4a845da325808d92aa"],["posts/1960676615/index.html","a14e3e4376ba5cce7925aacd11dcf17f"],["posts/1983298072/index.html","93788d52fd5af33b777b899c8cdf81d2"],["posts/1989654282/index.html","b35dd97395f493f210f89f5d75d3dff5"],["posts/2015300310/index.html","8530669f0098f432a1ecc57a6e1f6666"],["posts/2038378679/index.html","36d04d32678920041c67fab3b4fb3190"],["posts/2041685704/index.html","371a813dd0804672b4eeb8738c074885"],["posts/21112647/index.html","fed67ee7ae08f1d24dd57fc68ef1af78"],["posts/2158696176/index.html","fac07782b006568154027d301c55b568"],["posts/2171683728/index.html","2a6e04b0956c8f6eceec502961a281ae"],["posts/2186770732/index.html","97170c72b848823fd4f457c920db9c7a"],["posts/2275646954/index.html","3ec852375b1ca7f02dcfb5bf26a44f85"],["posts/2314414875/index.html","712f5e7567cb424da951332aa4e4037f"],["posts/2318173297/index.html","cb048b648c3df5de9768b97be75bfd86"],["posts/2418566449/index.html","9e3c12afc33c3ca5eddd3d9c10e6eb8e"],["posts/2436573863/index.html","a2f7d661ab1b597beccfee7df4f266a9"],["posts/2462008667/index.html","e15cae93ac84604094d7d0e3ae84b28c"],["posts/2463121881/index.html","2ab482949f078b934fd1ba5260f99e44"],["posts/2488769283/index.html","f83fdf5ca39a7f50017417b8896ed24e"],["posts/2527231326/index.html","21dacde2068ff7d3cbeab7ab02567dec"],["posts/2583252123/index.html","6a3fae9194c996ab4137e75f46a3c72a"],["posts/2613006280/index.html","ee414ea627db14f79ef19e8a5a8a7018"],["posts/2617501472/index.html","3c4629593aad66739c6ad9a7e5cb70c8"],["posts/2676125676/index.html","4aab9e53552d3c409504a8944d8e49c4"],["posts/2734896333/index.html","0c8c6fe5dc3b76702b40d8d4b161102f"],["posts/2752169106/index.html","55d2f4e0647075a32b93c25a2d5dd66e"],["posts/2799263488/index.html","db3457760a3d619e53ff4f42a939855e"],["posts/2805694118/index.html","39e7a40c35eafed7e97916918b54d1af"],["posts/2809571715/index.html","efaacbcb4b8d50861a7040ded0f6b6d1"],["posts/2822230423/index.html","7ef902cba3cf3019e109b4507fd3318a"],["posts/2829333122/index.html","ea6024da2b64a0484e39cb14742fe99c"],["posts/2911923212/index.html","64b8ba1b6f8d6453a62f5a24595e5ede"],["posts/2941880815/index.html","80889b112133cb0f76338fe36bb3de46"],["posts/2950334112/index.html","641362f4e40dbaac90b7f64e87bab5bb"],["posts/2954591764/index.html","de62b59e1a9a5beaa76a1d9dbabb9d14"],["posts/3019914405/index.html","12a4e0122c9d2ee29ff1c1980bebf903"],["posts/3032366281/index.html","2a9a5da2fe851324d29c3b8a9c37b5eb"],["posts/3040357134/index.html","3e1309923209423880466258ef93f1ef"],["posts/305484621/index.html","b40cade0f8e069eb703d76507d2ac5af"],["posts/3083474169/index.html","c3c932fd89f134217210bb16d7bc51ff"],["posts/3099575458/index.html","4eae84f7807b20ef2c1a11b91c9d4d8c"],["posts/3111375079/index.html","1fcf3f43c30d630df7646b10d7d92611"],["posts/3120185261/index.html","e2e3dd91e4effe2874dd8f2452d4f07d"],["posts/3131944018/index.html","27863fca0b5cafcfc57ed2068dcadc90"],["posts/316230277/index.html","012aa165455d990b8aaf4d57014d8756"],["posts/3175881014/index.html","5ba4db3e2d893ea29d242e485fb34a3a"],["posts/3222622531/index.html","e42cc1c39c2fde7ab407dba456c915a8"],["posts/3247186509/index.html","f43fa5ca893f99ed354c0d447f0c74d4"],["posts/3269605707/index.html","28027135605729ef05059037ac7df8fd"],["posts/3291578070/index.html","0d59f86aa5ebb639bebe0ca346371835"],["posts/331752533/index.html","a8c68590b52ebb03870e355d259d6994"],["posts/3321992673/index.html","064fdfac64c759ef7fdb798dfdd8c828"],["posts/335366821/index.html","d09e92c3f5737ea22f5f4e4ccb9bd38e"],["posts/3356910090/index.html","ad903590eca5c229b23bc9c95d7b8eb0"],["posts/337943766/index.html","eb0ca742047d1378cd17c021a8d2c86d"],["posts/3417652955/index.html","249175347e783b1227fa2f6a5a25b864"],["posts/3444626340/index.html","444f71a39d618cceffb6a383dcd72ce1"],["posts/3449402269/index.html","cd74f614106e6d776a8bebfcf67c3aff"],["posts/345410188/index.html","62bf16e60d914118fee20303f1ac256a"],["posts/3461518355/index.html","a9cb474b2119c78d18aec5e767b75825"],["posts/3494408209/index.html","9c834763658f4f07f3fb44f030c9da10"],["posts/352037321/index.html","cfca2a7619da9c0ff680c4272aedaf7e"],["posts/3521618732/index.html","8fe95c69fea4805cca2f3ae72f9043e6"],["posts/3568552646/index.html","5664503d4b2981b309701ac9d8f4a47f"],["posts/3603924376/index.html","3fd85a1f7b56da2de6421b4f5ed492ed"],["posts/3637847962/index.html","47f70e9b92d487337ef2720e5f5ccd45"],["posts/3642630198/index.html","9add479b6a54d54343a3d4bf4532e017"],["posts/3653662258/index.html","e091409e0079a20028ecc7090077ab9c"],["posts/3653716295/index.html","65019acec15f27d912ec312702d619e5"],["posts/3657008967/index.html","5c96a1293bff7e70d559bf96c5d1f03f"],["posts/3668933172/index.html","015d1eaacee5558984ca8130be74042a"],["posts/3677280829/index.html","02929a47cd43b6a54f2a3e1df838f392"],["posts/3687594958/index.html","7b01966d123eeec5b30a31c26bd6c5b2"],["posts/369095810/index.html","f0444cc769214b9faf00355393108250"],["posts/3695777215/index.html","67f2ba8eed44c664c427c3bf1008a5c2"],["posts/3736599391/index.html","78f0e91b8257f2a23b2997c61f4f72e3"],["posts/3742212493/index.html","64f149842997d059622aff6aa4bd32ce"],["posts/3782208845/index.html","91c9092576fc53f382d8327e4c2c60dd"],["posts/3789971938/index.html","a1babe791fefb327cc9512a5ff264aca"],["posts/380519286/index.html","51abc4ee16500864f37a050b68c1de68"],["posts/3846545990/index.html","92b5f47c87f9b75c36f9e905ccc38aaf"],["posts/3873710624/index.html","35e94b7760e634750dfe3343d58a3c6b"],["posts/3959327595/index.html","1b9d7c1ed9df36486e4b5f0dbfb6723e"],["posts/3972610476/index.html","e2c867353db99b191ce07435056166ee"],["posts/3995512051/index.html","90d4a1a6540da8c27c18d3fc2dac1e69"],["posts/4088452183/index.html","842cdb814dc892fe9d400b96e7bce328"],["posts/4116164325/index.html","bf1844043d6f7ec17b1ab1d5ce80f5d6"],["posts/4158690468/index.html","4af5d619cc4b8a630d7753770205a4ed"],["posts/4159187524/index.html","c22bd2cc097890f5446011ff00471ea5"],["posts/4197961431/index.html","01f6f7d75f0d4da200e264fcd271512c"],["posts/4205536912/index.html","5aae404abcbd231d8acfbc47565b11a1"],["posts/4236649/index.html","6cfa24d9f753b4a545e40d439fe7ced6"],["posts/426338252/index.html","3e7c65ac18c56390eebced737327bfa3"],["posts/450254281/index.html","db55775a53c5eae4818c4e4f6693b699"],["posts/4891372/index.html","5ab65d8792f7aefffb571ca9daf75757"],["posts/569337285/index.html","5c7a7c6d86201264145d60ca3d8bcc6a"],["posts/570137885/index.html","14d2703d2dd96903f98da519e72eeaf3"],["posts/570888918/index.html","6c4e40bdf75e804dfaf4d3e52e00db32"],["posts/582264328/index.html","6e5dcda42095ea3a62b955c41b113f43"],["posts/632291273/index.html","9592c1595a0a725a293d140688a05b40"],["posts/70687890/index.html","bd3230b6270b6b0fa51327fb7b3ab922"],["posts/719322223/index.html","dc04cde17a66958b37b511ecb5905d71"],["posts/720539850/index.html","42c5ead37bdaf26588a0d25f33bdbf04"],["posts/786195243/index.html","88af7f05ca1f4425891b1f99c005763a"],["posts/795474045/index.html","37a692f05da8718a6382ba1ab4d04c77"],["posts/815861661/index.html","45e0bfac9869dc424b0cb231028b483e"],["posts/821259985/index.html","9491d7da8367c1019d351d5c8ddc62d4"],["posts/828223375/index.html","b12d08ac297c4ea3d7324370b1eb0d37"],["posts/887585917/index.html","00cb5bf90de7080b7328e35b85f67d0b"],["posts/888549816/index.html","5d3d7ab9a7d3eaf200be6d8f47778c10"],["posts/906436376/index.html","cb66010ab4d0f777a35e8fb931d37e57"],["posts/907824546/index.html","d92ac59af381e7159218dd4ac2cc5c2e"],["posts/927393529/index.html","18cc74ae30fb4c7d8303f401d6a341f1"],["posts/94443781/index.html","3567222847ce4d4f8f58d98d75838447"],["tags/2014/index.html","6b5e106ffd56b8c84726699d3e18ecb0"],["tags/2019/index.html","8c189befc94e50da118293b7a4d029f2"],["tags/AI/index.html","1c9e00e09ca1deed7497f71b01789c1f"],["tags/AOP/index.html","399c9956036f6855a2f36f00b6ab6403"],["tags/AR/index.html","086deaf5e8cff2fe4f109cf6345eb38a"],["tags/AssetBundle/index.html","1d64622d731d73ac84d3bb94707251ed"],["tags/C/index.html","c2c0be9b9f5f82dba09e276e7280a16f"],["tags/CDN/index.html","7a5c330b670dec26a388b0626e800c92"],["tags/CG/index.html","1d541e28956d646c9c33543fd8205a55"],["tags/CI/index.html","a8da533441df7aa2a965af051773d1e2"],["tags/CORS/index.html","20c99fc4f00a2fa41fea47ce4835ea0b"],["tags/CSharp/index.html","a39aa18af0904b2570ddc0e9ac40cc51"],["tags/Castle/index.html","4e19778c081f17178b64709cd9b75d8a"],["tags/DBeaver/index.html","d413d9e13e48da4eb318f2b5b57f68a8"],["tags/Dapper/index.html","3aa3da020266c517f2697a271dbf6c12"],["tags/Docker/index.html","5760723fb5d9ca8c989081277d67b5a3"],["tags/Dynamic-Proxy/index.html","3d83dddda22e46dd08e57b0749dd23a5"],["tags/Dynamic-WebApi/index.html","41cda78970ce89dedf838db4aedc5f51"],["tags/EF/index.html","da925354bf948c0f93b063b871a5cb1a"],["tags/ELK/index.html","c2da1be0e5f7cc542dc18e0132992b61"],["tags/ES6/index.html","4b4be44fa4442d4306ff69eac8abb47f"],["tags/EasyAR/index.html","3ad184a527180bfb077b9569a5e53a27"],["tags/Excel/index.html","febcb0fb79e439eda2308d002648293b"],["tags/FP/index.html","f6b7ea8794506d891d64cbbec7aad3fe"],["tags/Form/index.html","ec815e4285e80d15d04f3454d4e32e87"],["tags/Git/index.html","1b1ff61e1745842bd7114b4761c8ceec"],["tags/Github/index.html","8bb7e5aa44fd9f17f4c67caabfd79b5e"],["tags/HTML5/index.html","41fbe9a4c4647718d9d6f36b8da70fab"],["tags/HTTP/index.html","d49601c4635f5a97af781d629ac8ec4d"],["tags/Hangfire/index.html","4c5e5a3dba80f7f493ae0dc630c27d52"],["tags/Hexo/index.html","6b99008699f5d0a20bb5ddd381be4436"],["tags/HttpClient/index.html","e94f0230bf9b7e3e2623579eda2b5804"],["tags/Hyperlog/index.html","3435c58fb75636011ded4a169c430415"],["tags/IDE/index.html","64449b73b68af2d89d1d1c84997259a9"],["tags/JS/index.html","efa5de9cc7aa9b05e4bc05102d76efd1"],["tags/JSON/index.html","8c7eb78a90ffb2dcb5f44a7315e00154"],["tags/JSONP/index.html","58071acdf9ba9aa3eeb6a309acaef256"],["tags/Java/index.html","0bb090c8f25bd7f78a1e2e7d196a4c3b"],["tags/JavaScript/index.html","2d2065c9ff36268d510b8ef6fe955152"],["tags/Jexus/index.html","bbaa373c5db6dbb3200eb096992255c9"],["tags/Kindle/index.html","c5416bd0b0aa4c98510d9131cee56021"],["tags/Lambda/index.html","37b7dede52d45a6163f45f9c69008173"],["tags/Linq/index.html","e01c4edb0a750b2c9d5a17d886911202"],["tags/Linux/index.html","ec79df119aa9eadf3f1303c163c4f5ff"],["tags/Liquid/index.html","8060ed5e99eb05c884ba96ac76539150"],["tags/Logger/index.html","d8aa303b369ee0e3512f9a51350fac61"],["tags/Love2D/index.html","b8cc2528b6e3dffb95cc7b398be8948b"],["tags/Lua/index.html","e489f3a769ba739662c2113d5e638961"],["tags/MMD/index.html","e73597f83078ea19ce5029ae0fb76db8"],["tags/MSBuild/index.html","372711d70afbd2defa10b4054853e40d"],["tags/MVC/index.html","6e0d38acf7e7625883bcbf04bfe3aa4a"],["tags/MVVM/index.html","f609f7e07f4d8429bf25543a6279a381"],["tags/MapReduce/index.html","dab2f3d2784855993517bd06a18663f9"],["tags/Markdown/index.html","d81919d48536c3a0a145eaf4e0501ac5"],["tags/Mecanim/index.html","782be0b7c28ec1cad31ee3043338ae14"],["tags/Mono/index.html","50077158652753243f92256f989e6e90"],["tags/NET-Core/index.html","9efe8bb3dd3019028d1b9b7b571403f6"],["tags/NET/index.html","55381e498eb6e09c1d4899ef25e062f5"],["tags/Nginx/index.html","8f14be3c0a98fdaed701c7952a04dbcf"],["tags/OBJ/index.html","9981d1c8d6988203633fa1d0eedffcf3"],["tags/Oracle/index.html","7e16279f6d9d0ed2fddcf8bc432d021d"],["tags/PL-SQL/index.html","2a78d21caee71250f34265e391333834"],["tags/POCOController/index.html","a24f1555f447df828d6eb2a2aa0917dd"],["tags/PWA/index.html","9fa8ca7af07e0782d8da3a0363ccda00"],["tags/Python/index.html","5485c796f7d8b189bfb273fa259173b8"],["tags/RESTful/index.html","958db5a539d3cc317692afb7d0cf8e0a"],["tags/RFC/index.html","eb24cb8ed8796eb5317aebf50fc83931"],["tags/RPG/index.html","a0300fa7fef4dda1b788edb37850dee2"],["tags/RSETful/index.html","68863b4ca16a3a2a60a2d2cb9d198607"],["tags/React/index.html","1066223dea8c1dd087c5b24f434719bf"],["tags/Redis/index.html","72e274f2c7ff18699bb27b82498dfa1b"],["tags/Referrer/index.html","9c5ec5207168295685ad0ff42c45188d"],["tags/Retrofit/index.html","dd06098bfd9845228407f70500f8a802"],["tags/SDL/index.html","7df197242aae2f81c13278b47f600844"],["tags/SQLite/index.html","249127b485ece4edd134373458680aff"],["tags/SSE/index.html","9c62b667c19dea649e4e1d194134d229"],["tags/SVN/index.html","c383bb23702c47abee9ea7777f73d5d5"],["tags/Script/index.html","9e7485965b2b0cc2f09d5402553bddb2"],["tags/Server酱/index.html","94fbcc3ca1a14a8bae46bf6389c91e2a"],["tags/Shader/index.html","f61c64c00933cb499e3a92d2c05d2b0e"],["tags/SignalR/index.html","ad5a64617c67697e5d1a71c697a0cd5c"],["tags/Socket/index.html","69f7aac4bb3fe34e93abcdfa7a13ec78"],["tags/Sonar/index.html","717df7cb24ed300a5de63f75b6186acb"],["tags/SourceTree/index.html","ea8636048fdf38926707d8bb48f92224"],["tags/Sublime/index.html","4dc573fa09df14d60b9a2f99a477a2be"],["tags/Swagger/index.html","4d882cf489c0630a8a12732b03dcd579"],["tags/Trace/index.html","484a3017a2c53d856e1cdfbbfb579273"],["tags/Travis/index.html","3cff085e8c8b8be3eaf6861e082bb5be"],["tags/Unity/index.html","7ad3aefe9c700825637f2c74fdd9375c"],["tags/Unity3D/index.html","040703a1f30590d58a7afed3d37a33d4"],["tags/Unity3D/pages/2/index.html","c43f0ace89a11c6944d4eb0bd919bf3a"],["tags/Unity3D/pages/3/index.html","38796c0e2a5ff988c09d5c061996949f"],["tags/VSCode/index.html","a1cec7241e26c66b6336f56bfbf584b4"],["tags/Valine/index.html","ac14d69c813f4c68358fed7c8a2d76bb"],["tags/Visual-Studio/index.html","9f4b2bbc9a553711bcdfb1dc0bbd6208"],["tags/Vue/index.html","554d2853430919eef9616131d6c70b64"],["tags/WSL/index.html","db73a5ad359aa79cf2e3b0fc91a1d5af"],["tags/Web-API/index.html","0e14d783216a2a9b87eaa53ffa28ba12"],["tags/Web/index.html","17f96f43755ab9ce28868ed19d833915"],["tags/WebApi/index.html","4d477b0d32f785b4d648aceb9702ea54"],["tags/WebSocket/index.html","9e8cc4277bda907bb9031a19001d1678"],["tags/Wechat/index.html","9e05a3986fa103ef7819e9ce31c96ede"],["tags/Windows/index.html","0d642f84c414a6580633fba548776a52"],["tags/disunity/index.html","bc94b16a8a391366c069527adb4b88c4"],["tags/index.html","dc5379381da274ac37edaa0ab40a42c2"],["tags/jsDelivr/index.html","bcf5060e497a0e940cfa2c1b6ad6b675"],["tags/matplotlib/index.html","4c6cb9edb532dc3d63ff727e01ca8958"],["tags/uGUI/index.html","7c26385098d47fc077aca6e69674feb7"],["tags/zTree/index.html","6554b8c9d727a056825e21acdfa3c91d"],["tags/一出好戏/index.html","faefaddd6998f062ebf0c8a6b76c36a7"],["tags/七牛/index.html","d5c0f4bb61207a54d98dc944ff1d80e8"],["tags/主从复制/index.html","d45e20d122828137c717cd7422835714"],["tags/事件/index.html","112146380b8d87a9ab6349d8af71fe4d"],["tags/二维码/index.html","bb19a142db35a431b6ae27e676a7394e"],["tags/云音乐/index.html","3fe0f9611ca5f7f910e316e579c35edb"],["tags/互联网/index.html","d934e8db37952dcef26baba776e90dd3"],["tags/亲情/index.html","074f15b066eac94ecdd3ad1e0412398a"],["tags/人文/index.html","26ef14f81fb4ad994623bbf0c46e666b"],["tags/人生/index.html","c398eee729c3396f5058b7b407042bec"],["tags/仙剑奇侠传/index.html","fa66ce38d13c9895425b246917ae5978"],["tags/价值/index.html","e4a0aa78bef7c9497985c83970bff856"],["tags/优化/index.html","bb90e93e9a6cf21365ec00d47530c3cc"],["tags/全智贤/index.html","a16af84ad522cc33f154339820c369d5"],["tags/公众号/index.html","2ef1f27c6e705739edbd58e389f571fd"],["tags/关卡系统/index.html","207aa5824abd323ef0a5ec0f27cfb771"],["tags/函数式编程/index.html","1bd8c79b570edd6963a3a4123a79aa41"],["tags/别离/index.html","7c0ff609326c9107c63db25166c97f65"],["tags/前任/index.html","ad9442c37b90b4b6fb3f130e1792c15c"],["tags/前端/index.html","9d9966eb79cf5f3af57dc80e947d7895"],["tags/剑指Offer/index.html","48cc1ded4632645b093fe02fe843dedb"],["tags/加密/index.html","c0278b6a4d19d1c32d31b54141a919b8"],["tags/动态代理/index.html","5572d518a6a80104d3b72070a531e4c4"],["tags/动态加载/index.html","0605e5c63b2073f1605bec4fe69f5a9e"],["tags/动画/index.html","98401ed90c3d72fe26f8f47ca547c06e"],["tags/单位/index.html","748dea15b4e413d32f4f27dd53f72a30"],["tags/单机游戏/index.html","92730f66abe9ae3b0df77435728a5cb9"],["tags/印度/index.html","cfa39210f232229d7b34b09a655a375f"],["tags/历史/index.html","6011313fe695fa4675d2ecc9529b343b"],["tags/反编译/index.html","be5cb31c506d8f03ad2245eeceed7810"],["tags/同步/index.html","418066d1e3a658cfd3a6fa08d5cda33c"],["tags/后端/index.html","55250cc880e554a59101530bc65bd4e1"],["tags/命令/index.html","9421a3447cc6e25459bc4675e0a7d8d5"],["tags/和平/index.html","1d1e814c3318ced1a0784315a08d942b"],["tags/响应式/index.html","2fa53ebfc2cabf230b3b7fdc1a9089f9"],["tags/哲学/index.html","b317f6a2129beafc34c64f2e6fbc4452"],["tags/回家/index.html","0f709f8ce88df17484f52e4c1ed32474"],["tags/回忆/index.html","2aca641aab402c65745d732968f18721"],["tags/回顾/index.html","0da2a4edb84155a5451f747906906c8c"],["tags/回首/index.html","144d5b1f32e5dc52c187bc7e104d68fd"],["tags/图床/index.html","5db0dc06339209c93497b2b604fb7d52"],["tags/图形/index.html","94a16fde52b9c4e61f52b5d430c113d5"],["tags/地图/index.html","b47567d1f34b893fcdf3c32ce38a7b27"],["tags/塔防/index.html","dafd21297b4ebb000a7589c7cc8050a2"],["tags/增强现实/index.html","06da7bb3fb3fcfc804366ddfce7185a9"],["tags/壁纸/index.html","a4310655e4e2938263fdc0b1ed8501da"],["tags/夏目漱石/index.html","061846d0523fe7fc089d017d3027d430"],["tags/多线程/index.html","9f3675ecb454108b481df894b4fb1b6e"],["tags/大护法/index.html","b1683c7ca16b490cfc2d3b8fb13ed173"],["tags/委托/index.html","48875357aed239564fefd544b3ec7905"],["tags/孤独/index.html","77fc2d10c44855e2be35843da1546e84"],["tags/审计/index.html","d060bfecfdc8beeaca45d9922ddcfdad"],["tags/展望/index.html","595cd9f8bad6a7c1fcfc730e2da4f409"],["tags/工作/index.html","ffaa8b3f7679d326a4c9147eea672af0"],["tags/平凡/index.html","d59f72cb0210012283a7c25264061ebb"],["tags/年华/index.html","35890f0dea25175436dab9b9018228fb"],["tags/年度/index.html","15d2d3f7a88f57965e9a2c56fe3e17ea"],["tags/开源/index.html","2f560fd796711b41e9d403485b4f07ce"],["tags/异常/index.html","53b5b3566a00df7afb6efecf6697903a"],["tags/异步/index.html","d424d7b2f0d12300362ef579ce7d9b6f"],["tags/引擎/index.html","064d2d74062885fceb0bdc4bf013faee"],["tags/影评/index.html","addfe9d54f003e8cbc2bd08afb3cc45c"],["tags/微信/index.html","428050a1af321233959a0f0d9d73f2b4"],["tags/微博/index.html","ef0897d0da1e839814e9bc525ee1850d"],["tags/心情/index.html","b893afd248124af5a1e9090f959216e2"],["tags/思维/index.html","3be799688cf9f3955829839810ceca4e"],["tags/总结/index.html","cbad42263aea0f19463598781a67b46c"],["tags/想法/index.html","f828a4ccedc1744b441ac4262731fa55"],["tags/感悟/index.html","74eb097bcbeb8f69bc3cd6f5ceec955e"],["tags/成长/index.html","39243f21e6b3304d4e5557e297e2111f"],["tags/我是猫/index.html","40e0837bfc1537315260d8e8845b3472"],["tags/扩展/index.html","c797e65104a65159c949c0c0c166eae5"],["tags/扩展方法/index.html","0b65507e555fc153e8d18fbb0eacb6aa"],["tags/技术/index.html","38abc2b9ef8d024a611722f8d543d6e5"],["tags/拖拽/index.html","71aba60cffbec4754325a3fabc90f050"],["tags/插件/index.html","7bcabf3da14c1c839c5639fd00c1f2d7"],["tags/插件化/index.html","0bfe519b0a6edcef86d5f24c8211165d"],["tags/数字/index.html","1826aaa978400c57140c45434fdc1abb"],["tags/数学/index.html","d59d6549cafd2273a21e0081ad3b86a3"],["tags/数据/index.html","ba4b717935e3a93332016e9dfbfd30f4"],["tags/数据交换/index.html","79af836090cce025040237b1861412c2"],["tags/数据库/index.html","78afa582243e060b4d45f0a1816a4895"],["tags/文本分类/index.html","d73a17fa631fca54fcdb996160b3c9a6"],["tags/无问西东/index.html","7579e29bc888755eff16c05731fa84db"],["tags/日剧/index.html","4634285c48363f0867b5181b71a38440"],["tags/日志/index.html","98c756693f9d7bcc712cfc57ea80b64d"],["tags/日本文学/index.html","5d265ceba5e38f555f726c0e151c0c5c"],["tags/时区/index.html","9a96a188d217969a030a3ed5894b913d"],["tags/时间/index.html","8c0aebbcec6464cd8b1f7a73a0ebdf09"],["tags/服务器/index.html","62073f06dd22475bbcc4ef91b257e314"],["tags/朝圣/index.html","2365daa73f3b4f82ccefb4c011955a19"],["tags/朴素贝叶斯/index.html","e2dc763ad2d0220c385015039d1554d1"],["tags/架构/index.html","0a5dc0ea0262ba84bb2b3fc0bb1493a9"],["tags/标注/index.html","d40b8f0fe133c82e55713e58e300e636"],["tags/校验/index.html","b83105dec4c1ef1f789bb5864e908198"],["tags/格式/index.html","78701bc9c1033284ce6b4bb6e076aeb0"],["tags/格式化/index.html","d4ae89db95943e3f1ba7c29b0c022969"],["tags/桌面/index.html","b4b259f602dc6830bfbee9f7f6c9d432"],["tags/梦想/index.html","17821f5e0f0f7f7eec9999529239a281"],["tags/概率/index.html","7427f9ff112af8b9c57a5f96fde8d598"],["tags/模板/index.html","6938c0d968fe99fbb0f5460904c8ab9b"],["tags/模板引擎/index.html","6918767bbc1efb62a0bc109f86d288dd"],["tags/毕业/index.html","7057a01ea935072f5035bdc108dfaf9b"],["tags/毕业季/index.html","b41a2d347362bcf62b96239c75fc98f5"],["tags/消息/index.html","dcdcd63935cb7209c031ccc3a0c4a348"],["tags/游戏/index.html","3bdf750c577287e7f646158f09648b2b"],["tags/游戏/pages/2/index.html","573cd3adfaefc817f7c8e2e10896e5da"],["tags/游戏开发/index.html","32964bb5a8a1e80125ef54a0259abc41"],["tags/游戏引擎/index.html","0973f30555c1b9151b9b63c3ee95f942"],["tags/爱情/index.html","0df2af7e6c7868ac603065922adabd26"],["tags/版本控制/index.html","18ba4ad806bce3c68dab597d5a836f4d"],["tags/版权/index.html","c3f9bb3f0379144f2e62f59df58650eb"],["tags/特性/index.html","9c9e6df66cfd7b2d94d7134b07a61f78"],["tags/状态/index.html","4647324b14bcf0eabc7163002a9e9e89"],["tags/现实/index.html","89ac2813bc313f650f272e69a1c78595"],["tags/生活/index.html","eb93bc381ad982be80fcc05494ca7f77"],["tags/电影/index.html","f8331f9ea578e12d58d90c87c8354e1c"],["tags/画家/index.html","2c2fa140457720de275e3d49bf9e2228"],["tags/知识共享/index.html","587406dd1ddf0a861fd384cf427feb68"],["tags/矫情/index.html","f700926999d54adbf5ad698d041c0750"],["tags/程序员/index.html","76e0e21d5f9bb7745dff76479e7d5d17"],["tags/穹之扉/index.html","6aca6d4b02c819a7e81304245ec5a855"],["tags/穿搭/index.html","6c2e65d863c7415293e397d126029edd"],["tags/童话/index.html","b09865477b2cea3d3d0c1d4c74d74216"],["tags/笔记/index.html","df90584f9725e8681976640dd313b4fb"],["tags/算法/index.html","a8beff2152b388b4732402d8f254decd"],["tags/米花之味/index.html","e675eab90c60b0fd55aabfdb141ea02e"],["tags/缓存/index.html","1dfb07515cfb7512f40506b33d83cfb3"],["tags/编程/index.html","918b1dd0af325525c34d69d56af8e067"],["tags/编译/index.html","2abd9f50557479d30a26a9b9257629be"],["tags/编辑器/index.html","e2d28d9686c0fc125757966908683337"],["tags/网易/index.html","456e1497f5079446be726d3247fa2fda"],["tags/脚本/index.html","bfb2141afe8208f2fa6a157b4ac0a563"],["tags/脚本语言/index.html","e76785fe3df25a6ef43c756edc03edc0"],["tags/虚拟摇杆/index.html","754f65496655925888c390f686ad68f4"],["tags/蛋炒饭/index.html","334a547cfc0673728aed01f5f9c77d28"],["tags/表单/index.html","71dcae6c885626753385775a5bdaa85b"],["tags/表达式树/index.html","dada9e31343ad7bc7dd95fa1d7b5fdd3"],["tags/装饰器/index.html","c89d500f5943bc5a568b17e31c4fbf52"],["tags/西安/index.html","eaff8a0da1f94e132a59ad30b1baccb9"],["tags/计算机图形/index.html","dc82e558fa0fae6b94d2626b54088371"],["tags/设计/index.html","e08c287b934f020e046d98e2c53852b1"],["tags/设计模式/index.html","578788e67249f5e64223e6ff7dd2edec"],["tags/访问量/index.html","6c30de2ae75c577ec92bfb02401df7c2"],["tags/评论/index.html","b54353cf5202a6635925c11be03417ae"],["tags/词云/index.html","b5808e5f2d126d78f811689cf2efd65d"],["tags/诗人/index.html","380e0584d830a197e2300e6b4f1c784e"],["tags/语法/index.html","bd652f9cd05c308937219b46ade371df"],["tags/请记住我/index.html","3d241daa60aac321f0f67190568af269"],["tags/读书/index.html","aff9ba27c59198f4a92f4f554377b9c4"],["tags/读写分离/index.html","9449df59bfb4b2758d28aa05823aeb51"],["tags/调试/index.html","f2f829d3cf48818c22b3932b79f75206"],["tags/贝塞尔曲线/index.html","09565c29ff3db98a273bfe569d08100a"],["tags/贪吃蛇/index.html","df6ba31b8861abd0ea0c367470ffd304"],["tags/资源提取/index.html","22622c6e32d8be87f4e50902bfda7a26"],["tags/跨域/index.html","84b852b63ad9cdd892b9379a9a8b9ded"],["tags/跨平台/index.html","032f16e9f9d9ca151c5897ea71406f2a"],["tags/转盘/index.html","7a39be13565649bcdf400573c2d2d252"],["tags/迁移/index.html","f70b23f9af2aed5b9b07272afb5cf5ae"],["tags/通信/index.html","7c798de6292667b2ee7ee7f2ead0af92"],["tags/邪不压正/index.html","092c0ae0b3c6818e68130cb538176743"],["tags/部署/index.html","4b8bbce7eb4cf1d811e856ae0a0048b6"],["tags/配载/index.html","7b3bd20209b4c2bfe73b865fd28006a9"],["tags/重试/index.html","7bbef5cf95ddaa06fa226603a38fffa1"],["tags/长安/index.html","6579515d1e83c9ec5bb5f0769eba64c1"],["tags/长安十二时辰/index.html","cc53c73f2b7c9aab2984bd42c1058457"],["tags/阅读/index.html","13882d99e979b3ce9a909a927569a394"],["tags/阿里/index.html","1f01ed17d21fbbb0782fa7dc1b34934d"],["tags/随笔/index.html","ea8b040b2e0cbdfd89d6cef8105a83ce"],["tags/霍金/index.html","71354a7f917fe4156b6d66442b06e34e"],["tags/青春/index.html","8d95d2b991a0b9937bbf05b0c3d87f13"],["tags/面试/index.html","753fde5a6bbb6d390b20d20bd4aff6b1"],["tags/韩寒/index.html","991e28f10874762db3ba0a1a6bdae610"],["tags/马尔克斯/index.html","d2619649357b10c23a7fd7771b61c2a3"],["tags/验证/index.html","5a43a1a4d4ccce9236e6a650e5872d18"],["tags/黑客/index.html","4387fba45599f1b6c19d7da3b6029bcf"],["wiki/index.html","b2c1f797ac9307a768b1e83e495d0f62"],["works/index.html","1bbd9963f30e01ed092a0a6994da3f2d"]];
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







