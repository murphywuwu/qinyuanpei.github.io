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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","7f4ab8c302404292cfabcf6fef9a6afa"],["archives/2014/12/index.html","b412f7f2b6b41bdf87b5452ec42c14cf"],["archives/2014/index.html","035080c65daf377b4f02e85bf831f4dc"],["archives/2015/01/index.html","d8fc1294c6388219ba9e6f6568b2acd3"],["archives/2015/02/index.html","379f110cba8e6eec6b01a7534bd721ae"],["archives/2015/03/index.html","3d808178a3e7ba54abf1f11a56564abf"],["archives/2015/04/index.html","db9a59416b1a8a8667310055782b22a4"],["archives/2015/05/index.html","18038bdbe1c60720fbf512145dc14e50"],["archives/2015/06/index.html","540da3cd5357ebb6ec54e2f6eb97b6d9"],["archives/2015/07/index.html","be3ea7234f7f214874afc6e142d47980"],["archives/2015/08/index.html","63bee74e7db8b57cb7bb9e838abe7ed1"],["archives/2015/09/index.html","9d4f9c5aad6a9ce47861ca2ffccaab3d"],["archives/2015/10/index.html","86e630f545f65b2359382ab84b013415"],["archives/2015/11/index.html","928023ebd0a4c446d187359e6c59789e"],["archives/2015/12/index.html","cecb338a11fde92b2b2263117e3e38a4"],["archives/2015/index.html","13d27133a6f25c0d0f0b0261ffa86839"],["archives/2015/pages/2/index.html","c0575b6897f2c3209695b5e8ba29654f"],["archives/2015/pages/3/index.html","704d20fb8c55e7336e056cbb4bf00201"],["archives/2015/pages/4/index.html","85bf138fd7c99086cf3e98f98baa457b"],["archives/2015/pages/5/index.html","c95a8b9e65d8a384adcacff784ec7d5d"],["archives/2015/pages/6/index.html","78846728b921fb9b0ec192a8001e61b5"],["archives/2016/01/index.html","52a823d4b63c3275ea942f51f25f1a99"],["archives/2016/03/index.html","3dbb2cf3ee3a5d471ef2403b658c87c9"],["archives/2016/05/index.html","8dadf428147fed013d35d8011c291dbd"],["archives/2016/06/index.html","ac898c218ad0019891be0a3d3b2ed0f6"],["archives/2016/07/index.html","2fb939c6e36a787cbce7abbd92fa146c"],["archives/2016/09/index.html","062ed991091921b0fc41a498e5cf442e"],["archives/2016/10/index.html","0b0275c68d14877c4f252ab22e48f21d"],["archives/2016/11/index.html","6bd3095bc81e8dce79413dc3e17b8dc1"],["archives/2016/index.html","4b2e11e05e0109def353f6e25293fe62"],["archives/2016/pages/2/index.html","dcc6bfa934c6130d080e38a9a5bf6c2b"],["archives/2016/pages/3/index.html","1507d3354a83fe2256c5c1f52d7b46e1"],["archives/2017/02/index.html","0f800879511cfb56192c9a329e61be96"],["archives/2017/03/index.html","031dd16b6d9df7bebe76bb7c0453697f"],["archives/2017/04/index.html","5d8a614bf49fe91e215f896be1f49e6a"],["archives/2017/05/index.html","75c834aa56d655cb284d523dc52938c1"],["archives/2017/07/index.html","3972045fee5a54817b84c7cdd1c87543"],["archives/2017/08/index.html","7f16962c83b84d6071f5ae9b6fd5f49e"],["archives/2017/09/index.html","b14942cf673c862d60f902a2e8393dcf"],["archives/2017/10/index.html","7af75212628a8a15571da734a79a4ea7"],["archives/2017/11/index.html","8640171c8b6fd300f7ce8dfc03b263c3"],["archives/2017/12/index.html","95fa5c342a393494b9b93dd45d0ea854"],["archives/2017/index.html","93da0e298fd4ec42b4c2fb83fafeae7f"],["archives/2017/pages/2/index.html","00851ecbd8f96f5a9fdec651645de837"],["archives/2018/01/index.html","89ba6ecd98fafd06c378c85ae9c04402"],["archives/2018/02/index.html","6287de4d329f83bcc4efd0a0aae1c212"],["archives/2018/03/index.html","6bd8412dd727920792a632928dea85b0"],["archives/2018/04/index.html","1d8104be3ba52c21fe8be826c9eca49b"],["archives/2018/05/index.html","54dab6c99533518a1af4039dffa0e1ac"],["archives/2018/06/index.html","ed6e15dd91e58fa5437d1f19790bd8f4"],["archives/2018/07/index.html","44bf887bf349d5ea81b6eb0beb49049f"],["archives/2018/08/index.html","7ee06252e1a3b5a155d5a3790306fa91"],["archives/2018/09/index.html","75c86d0b977f3995d7810bc73a8557dd"],["archives/2018/10/index.html","08c7098f9ef904d9225768c688a3a992"],["archives/2018/index.html","a89e66d0ea17de4a3da3f7d8ded0d7bf"],["archives/2018/pages/2/index.html","249c247788918c07e2bbef89584e9178"],["archives/2018/pages/3/index.html","7fabf37aaa9668e6cee4ef582debd9b4"],["archives/2018/pages/4/index.html","a0163dec4380bee3a75ddee815f811e7"],["archives/2019/01/index.html","bc6c7fde526e07a9607a272483a04c9b"],["archives/2019/02/index.html","cb19abfa340ad61000977551a6cdc365"],["archives/2019/03/index.html","e06a31cb2e26e9928ec380e7d8d41a52"],["archives/2019/04/index.html","beb147e40199bae7977d6d4a0afb4caa"],["archives/2019/05/index.html","5053a3d97dec979c766cb6c3f2d9a6ce"],["archives/2019/06/index.html","ef59c0feef185297c8d2e7b7b8f9af12"],["archives/2019/07/index.html","b95645dee7cabe1246392d1e79020743"],["archives/2019/08/index.html","f94ea0d8456b82581ddde32192b871ee"],["archives/2019/09/index.html","d481a5fee81d08b721f79375e939d7ba"],["archives/2019/10/index.html","d4f844e067a7d59ac0e421680b0e5867"],["archives/2019/11/index.html","29b32b41493ba83b2f8213fbcf5e67b5"],["archives/2019/12/index.html","0834057a3db8ed918ab1286e69d96be6"],["archives/2019/index.html","35b959830ac6652013ff1e06c7dad15f"],["archives/2019/pages/2/index.html","53a621ebb91c59cd3652085dbd6eeff4"],["archives/2019/pages/3/index.html","e7a4ff42621db5814c9173afd47caf3b"],["archives/2020/01/index.html","74834fa378b0c93a5337ecda8807aaab"],["archives/2020/02/index.html","38f9c8a33f842ea914190a500ab0d9ea"],["archives/2020/index.html","fe6819e75c7af9541a0c56161668529b"],["archives/index.html","1d9500d7ca67d96b48600f22d468d2c4"],["archives/pages/10/index.html","4ac6aa31331c1651b7496d147fdb2b50"],["archives/pages/11/index.html","87f8652d0a045deb76bdcb6a0a3046a1"],["archives/pages/12/index.html","84cdf348d5cda1214065d559e3ab4ceb"],["archives/pages/13/index.html","58c7739d4075a83648582f016b406e2a"],["archives/pages/14/index.html","f4a63b3f7a2e864cf5974ac52e5db9e2"],["archives/pages/15/index.html","e688d1cd44eddccd54a720fadc04e556"],["archives/pages/16/index.html","6d847e7994970511afe858a6562bebe6"],["archives/pages/2/index.html","431601d5cb8c1503dceb09c321298cc3"],["archives/pages/3/index.html","f67b211fae1c31cf53f376cbf4eedf83"],["archives/pages/4/index.html","ace6607ffad533ec8238246c8a1f7238"],["archives/pages/5/index.html","6374e894b7abaeb167695ad824d154ad"],["archives/pages/6/index.html","69565fb48cdbcea78edafb1c528dba40"],["archives/pages/7/index.html","435e07a9aa0884346f627cb2cd58a9df"],["archives/pages/8/index.html","b62b96d36bd5f6e39f3db7a31eccca10"],["archives/pages/9/index.html","eb4558f99a391631016c788b026f75b5"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","46b1fc2ef0a9ef73c615f061b229ec91"],["categories/Unity3D/index.html","193c2b6aab79ad88728518773ec1806f"],["categories/Unity3D/pages/2/index.html","90864fd728424df2a1d045e380812545"],["categories/index.html","0b9a248535450ec9c00ca9e7258e4bf3"],["categories/人工智能/index.html","1c662481e80a45ce74b620e1d2dfc3a8"],["categories/前端开发/index.html","cd42c3d22a6b4d2f87799d16e8e4d22c"],["categories/单机游戏/index.html","e8d64bd1ea3cb77945fd88e623e06819"],["categories/开发工具/index.html","398d10f68f79b0bff0b308cba1dbc71d"],["categories/数据分析/index.html","ee48ce6200f1b25c9553edab40aead7f"],["categories/数据存储/index.html","a42a88dcff286db0277205e978d981e7"],["categories/游戏开发/index.html","bd0ff9cbe9b112dd66ffb09e483f82b0"],["categories/游戏开发/pages/2/index.html","b5d0336244088bacbffaee46a49d3563"],["categories/游戏引擎/index.html","9326f366fb89c7d8cb7962838b3cc5a7"],["categories/独立博客/index.html","3fa3a18f02c01c1b5b3a84a9bbc19246"],["categories/生活感悟/index.html","594176e63ffd703eccba46613169e082"],["categories/生活感悟/pages/2/index.html","7ca30676668db7ba33754426cae51c54"],["categories/生活感悟/pages/3/index.html","b0d0a965222c3b3c64787b840dfeb899"],["categories/编程语言/index.html","ac4cc9cce7aaef76dd3ebc960d120b56"],["categories/编程语言/pages/2/index.html","a2fe462c727f1f9d7929047510486453"],["categories/编程语言/pages/3/index.html","18a60ff8f33ce0c2cb1457200d0f2000"],["categories/编程语言/pages/4/index.html","c8848a73ae81f52ba9de743af6bc4c2a"],["categories/编程语言/pages/5/index.html","4d979013acaca768be6448f009c849e8"],["categories/读书笔记/index.html","23c005087d1fa997ec4cd477bb47e112"],["categories/读书笔记/pages/2/index.html","9118cc8580e9a9b3c80996d6c2e3a55d"],["index.html","625d3d8e847a3e09ef5c619d22d1c9df"],["movies/index.html","912421742c19b4c5464bf1a3147dd521"],["musics/index.html","be9cb4271a73f35b6a86eab54e9bbc07"],["pages/10/index.html","b4ac539c9ae467913329e5486383a1bf"],["pages/11/index.html","4c1275818032709931dd1a298c0208b6"],["pages/12/index.html","49f6d9f6d79a25d78cab88d46110ef87"],["pages/13/index.html","d2307f7602f832ff3aea65b9a01cc985"],["pages/14/index.html","2fd932a16d6d3e0abab3ea329763a129"],["pages/15/index.html","961663aa54f64aef70fa492e179310e6"],["pages/16/index.html","d58b66361f3d0a8dcef4793737ccdbcc"],["pages/2/index.html","f6be4dc3a8293d91c62028d55d046a7e"],["pages/3/index.html","e3ec3425501c71237afa4941d47859a7"],["pages/4/index.html","4fd8bd0e659bc5173c95c96f25a11c6b"],["pages/5/index.html","0e629d09bec7c5a985e3bd2946b815ef"],["pages/6/index.html","58d3e795f1d508df8bad0bf263c58cff"],["pages/7/index.html","b71380092f2e53efba3c7b48f59a6037"],["pages/8/index.html","5291db479167c0d99886892995c3ef23"],["pages/9/index.html","dc7ae726e0b70f7509595083bc2b71f9"],["posts/1059499448/index.html","b9bf7968ef09eb908d8b387255872126"],["posts/1071063696/index.html","2e27f282c2ead4e4cff13f1fce0a2a51"],["posts/1082185388/index.html","a025bf2be6b48dd06ce78e205f05530c"],["posts/1099762326/index.html","453b21de42943e815e8cf3a77cfd7df4"],["posts/1113828794/index.html","373e9ca8608790a82f65219b4d5beab3"],["posts/1118169753/index.html","0ce01c50850f79f6c31acaec283bd7fb"],["posts/1122710277/index.html","d1036738a9f45ca8044fac7501a65a79"],["posts/1124152964/index.html","9e8f947f44ac7cfc269f4b8578fed77b"],["posts/1127467740/index.html","3a186148f66aba7db558dfd18d283908"],["posts/1150071886/index.html","b138bdbee839f6bcfba83383ffb4caee"],["posts/1150143610/index.html","5c609135f1cc59c5d0ce8a138f5ea7cd"],["posts/1152813120/index.html","cca5084973ff02080d999e4330ab5a68"],["posts/115524443/index.html","dd39e32f6b57e91de2d5422ec3c7f936"],["posts/1156673678/index.html","d194d8a039e463bcdab270fc74726658"],["posts/1166840790/index.html","647691a7be5ba4e06252e4a1dba050ae"],["posts/116795088/index.html","36c589d3667f873933f9d902f1fd73d1"],["posts/1176959868/index.html","72a17130d15d4b707b020d398744d39e"],["posts/1190622881/index.html","d7a8f393d4f36ca28e7f0d9d2d392602"],["posts/123663202/index.html","026ff95c4c519a28f8c23f34b96c3d20"],["posts/124807650/index.html","d4ccbfa00f05e7da5ce65ed26fba2c12"],["posts/1254783039/index.html","100e298d52ceb57fc2b7540b44199c6c"],["posts/1320325685/index.html","114809903c91642f51a62fbb9e42d348"],["posts/1329254441/index.html","5dfca7fc4e312a8581da56000de57a4d"],["posts/1357715684/index.html","40617ae9c061fca5d1666758f523bee4"],["posts/1358971951/index.html","526242aa6e0652e160531a89cf3f9df2"],["posts/1386017461/index.html","724cb3ca42f2dc103fc57ae99ee68bbc"],["posts/1394521917/index.html","36bf07d0fe256842dc3ebb3f6fadf795"],["posts/1397717193/index.html","2fd141e896507b56ce165f059413b2d3"],["posts/1417719502/index.html","bc8fbbf93ff2bb17a889cc2a34e2d59c"],["posts/1424645834/index.html","3e56288ad3973cf00adafcac9c50fd8b"],["posts/1444577573/index.html","d0f61a9c3b1e244d3666518e9f3ebf6f"],["posts/1467630055/index.html","23ab33ba0067fc2a204b9a7998214314"],["posts/1478979553/index.html","d0e9cd4a17e2504954e094488e91aa00"],["posts/1540537013/index.html","a0fb8bf671361cc4ce91c43187390a90"],["posts/166983157/index.html","b985cae86b05e54931359fee8bd1dc2a"],["posts/1670305415/index.html","2fae6e7c8d76f74b8e55e9930a4f1cd4"],["posts/1684318907/index.html","42996b29afb566004f6de320161cd063"],["posts/169430744/index.html","25e8e61c18bad802cb918a498d7e3317"],["posts/1700650235/index.html","bed7b69974a4df03a71e029c8fc1c8bc"],["posts/172426938/index.html","0c91822b129e068860241d20a072667a"],["posts/1836680899/index.html","a5bea6919867d1c013b2173ea116eefd"],["posts/183718218/index.html","6286c1f11739520970639199273b8028"],["posts/187480982/index.html","3cdc2ee3b71998c8d1074866d3eb1cda"],["posts/1930050594/index.html","c55bbb8a5796c41c11ae26b4a724c736"],["posts/1933583281/index.html","ab6ba6567110186d9d0ff31efeea0ed1"],["posts/1940333895/index.html","54ff6740425d0ff0a5993492a2b5305a"],["posts/1960676615/index.html","a74e01b2d6d15bd3d8fdef9c4e15bdcc"],["posts/1983298072/index.html","c515b0bf6ba5db260e53d6ce19c363e1"],["posts/1989654282/index.html","51131ca59cc8a23cd5dcd4bfab6186ae"],["posts/2015300310/index.html","a4083ff8e2cf902b15dedd710cf5fd5f"],["posts/2038378679/index.html","3c4f0670075e75e8b3efe6aa42997fac"],["posts/2041685704/index.html","b6c159f4c5f4cfe7d4e14d3c0566c327"],["posts/21112647/index.html","da76455037e6573fd2f90d0bba32b3e5"],["posts/2158696176/index.html","735a1de26522662903ea4cd5f271cba6"],["posts/2171683728/index.html","d705888c14e6ac30177ea8c9fd3b80f7"],["posts/2186770732/index.html","a5111d08833fce70de1b7cf2c9957c55"],["posts/2275646954/index.html","46ca4e2b157a3e7eaa6bcae4f0d37ab9"],["posts/2314414875/index.html","70f000f3ab089784dd1aaff615ab2137"],["posts/2318173297/index.html","acc43dabfcb46e151b310b628e83c309"],["posts/2418566449/index.html","d198a2311c73368cd6303b24ec2e87d1"],["posts/2436573863/index.html","dbbe701a12d35883c945f42824a5b5ca"],["posts/2462008667/index.html","24c3b83d875aef8678c4add322594d17"],["posts/2463121881/index.html","b598a7bfd67dc872b0428f789a9b53f3"],["posts/2527231326/index.html","1c3be127eb9c0a86b013bb30f1b863b8"],["posts/2583252123/index.html","b5591be9046bed712ce1dd30b629cf38"],["posts/2613006280/index.html","280d7f626b437fc48def3f19e4b86799"],["posts/2617501472/index.html","119bca9136ecb2a1370219a18c563270"],["posts/2676125676/index.html","9bcbab807077c03949d12d75912d9463"],["posts/2734896333/index.html","76ca667c554f4586bff6aed5a709ee53"],["posts/2752169106/index.html","9ef422e960988e66b8b538ff600de2cf"],["posts/2799263488/index.html","0d9c081cfde6b66dac128e4b206e9944"],["posts/2805694118/index.html","52c50c5aa509d74dab2d29a8777b4d65"],["posts/2809571715/index.html","d20fb68a4a5cacbeccf1ca073644fc69"],["posts/2822230423/index.html","117a7e949d1b7b205b555f5dc71cddd2"],["posts/2829333122/index.html","32674ccb6841acaf18ee8539468aee48"],["posts/2911923212/index.html","2756372da0c2878abefc80f35ed7c915"],["posts/2941880815/index.html","22bfa01629feaa8f82ec0d339bef3e07"],["posts/2950334112/index.html","d28920fdf26c711aea1b436f0c5fb9d7"],["posts/2954591764/index.html","ddfb28f2b48f8e4f87292d55db046f46"],["posts/3019914405/index.html","1d851157119bcaffe94043006e21bfd9"],["posts/3032366281/index.html","3da98aefe56d10e558dc00ace04d8403"],["posts/3040357134/index.html","84c4dc180c677310af464b5918400708"],["posts/305484621/index.html","5d0b327f9ab1b63963ac38b6e7be8876"],["posts/3083474169/index.html","296644894308c50a94fbbe2f105a6b94"],["posts/3099575458/index.html","c73be44a7eaf41ee30f4c44bb1a99ef0"],["posts/3111375079/index.html","6afb8ef5820d44c11ae73bf899296463"],["posts/3120185261/index.html","b2938ffe84bf94b581db8f81ed34e353"],["posts/3131944018/index.html","bd028f1c4a9ea9e989cad919d59f5a85"],["posts/316230277/index.html","da389e5e264f6b3e540eab337f5a67cb"],["posts/3175881014/index.html","4e28d1a31addfb22d73935b39045fb3a"],["posts/3222622531/index.html","f3b327cbd9d78bb4cb5021a248bfd687"],["posts/3247186509/index.html","80c5e56417b655d7e3644122efdd0edd"],["posts/3269605707/index.html","a63d0fc5019fa591606291140b7096e6"],["posts/3291578070/index.html","e6bb36c630b6a3a542d9d3e9ffeb8cbe"],["posts/331752533/index.html","bdf13ee499600b98d9927595fb1696f1"],["posts/3321992673/index.html","94935eaad442a20e27c0d58c9dd37e87"],["posts/335366821/index.html","b3bdb97c64afb0ed47be5bf9fd2479bf"],["posts/3356910090/index.html","e58ae5eb02a671f0184ebec7e8704852"],["posts/337943766/index.html","d9bfdfdc44652b0a8ae70dc57fd47e44"],["posts/3417652955/index.html","15702019dfb6e360a147f7ae45534e11"],["posts/3444626340/index.html","4983d364f9694c3205c4e8b3cd5a5935"],["posts/3449402269/index.html","55fc7f0dffc268ae4bdeef54f4a145cb"],["posts/345410188/index.html","15fcbd8ac4264440bb2cbbf8af0c2dc0"],["posts/3461518355/index.html","3fcba74e3688ed63d4ff73e76a36fe0a"],["posts/3494408209/index.html","080c460c1ca818e060ac86d6a99947d1"],["posts/352037321/index.html","85c71129302bd4c2b8ca4006890efaea"],["posts/3521618732/index.html","cf8b433d40a6a63628b3f84a97e07f7e"],["posts/3568552646/index.html","0336695b6cbc4f265f21769ab04b8688"],["posts/3603924376/index.html","c91fa322ebdd85051a8386230b1d9549"],["posts/3637847962/index.html","11ce42ff6a402d10b4d13329f8f5f025"],["posts/3642630198/index.html","fd91275ff4597043c9823e699334180f"],["posts/3653662258/index.html","6560be5748d16f3c4e3fb4994441575d"],["posts/3653716295/index.html","120d7fa324580c8d20984f4cdf90e0c6"],["posts/3657008967/index.html","f1410ba5df00bd2c11c0952352c0700f"],["posts/3668933172/index.html","f52f5937bf58a8d83654e063d07e7cd9"],["posts/3677280829/index.html","d2dc460196504d7b58974020362705fb"],["posts/369095810/index.html","332dd43930b9584750a6acd1ca5da2cd"],["posts/3695777215/index.html","b994e22aaba6c253fda89c0b00832901"],["posts/3736599391/index.html","9a1295c6f7afc51fa115ede8a50e9d1f"],["posts/3742212493/index.html","b467162c47d0c473ff0cafca6272879f"],["posts/3782208845/index.html","fae442fe990a1f02e2fc18e673d7ab8b"],["posts/3789971938/index.html","09f0d5b9466b92bcecb704e5d9cb0991"],["posts/380519286/index.html","a843c39143740cfbad50430bd19cd7e4"],["posts/3846545990/index.html","67e2728dd6e55850d7d713dac7309a01"],["posts/3873710624/index.html","c450c040b10ccd75a5cdba99b044588d"],["posts/3959327595/index.html","77c4131c4a1cbe4875f80ea04cf33748"],["posts/3972610476/index.html","1b08689e71909170a34d31e0b6a55c69"],["posts/3995512051/index.html","28f879498252456fdb613b1cdc4bb1b4"],["posts/4088452183/index.html","b19a4cd6cc33de400a4b5d55a64bfcdd"],["posts/4116164325/index.html","10b29eea50b44ec41b3c434691a01be7"],["posts/4158690468/index.html","842d591f5a0efa787d5a1b88a1663be5"],["posts/4159187524/index.html","756331a158504d123598dde97b1b5d8d"],["posts/4197961431/index.html","9527e31ae0277a9cac288a8348ad6bf3"],["posts/4205536912/index.html","98414ac9b763ff9124c87b3d218b72c8"],["posts/4236649/index.html","b656923e865d343565c2394b734994ad"],["posts/426338252/index.html","27a74c325448a9de372e971ff6437970"],["posts/450254281/index.html","30e837a4d72139b94a2259eeeeefebfb"],["posts/4891372/index.html","48d742b1d5689833135cf899fd2f85f6"],["posts/569337285/index.html","e25397f0535e2332d8e34f60a7da0e50"],["posts/570137885/index.html","8b8b849e06e54da2c0cfb41f22e2d671"],["posts/570888918/index.html","d6a5c83c50e12308a0981cb437e3ba26"],["posts/582264328/index.html","53e803a1d37f991fa21533193da07684"],["posts/632291273/index.html","4480fa1489666e4099dff87d467ae06e"],["posts/70687890/index.html","048481477fad780475edda9cb524b332"],["posts/719322223/index.html","7300bd1ba7f06dcf326537ee79593dbc"],["posts/720539850/index.html","6038d43748e63d8fbdd51352b43e5611"],["posts/786195243/index.html","69520780ee6c5f4c657340cd2f39b388"],["posts/795474045/index.html","7d894e193edab46bc57dff8bdb787d0a"],["posts/815861661/index.html","e455a632990a6f332c20f28c7afb7c9b"],["posts/821259985/index.html","9acfaa8a3ad2dd21a91373aa9d6813ac"],["posts/828223375/index.html","728a5a3d4c2546cbc1ef4067c81b2a06"],["posts/887585917/index.html","74402a47f23944cdee5bb973b4a497e7"],["posts/888549816/index.html","d23e0ff8ded2dbd5d4d694e3999439d3"],["posts/906436376/index.html","a23ec75fb33dfcba4df7e2d306dda3bf"],["posts/907824546/index.html","2428da9c3c068d6085087fcf3f057874"],["posts/927393529/index.html","5e9b1bb0769f4a0af1503fe2daae5cd6"],["posts/94443781/index.html","2f796f1979a6c664a1d3d6d643fdab0e"],["tags/2014/index.html","053921018061efae05d3269efbd96e79"],["tags/2019/index.html","863eebac91c46f962578241413451678"],["tags/AI/index.html","a9b2e153fb06b85f1a821246861d292e"],["tags/AOP/index.html","bba44fea06f7d53d6157d8f83b3ed09a"],["tags/AR/index.html","186b44f9510267868e58cf5975251a54"],["tags/AssetBundle/index.html","df2274797b60204a1f0a3004dcc36c40"],["tags/C/index.html","47fc48712deb8839f9376e650e2f110e"],["tags/CDN/index.html","8d1896a3af272435c8961b9750a618a2"],["tags/CG/index.html","7e0c3900db176531470544ae3fe55d04"],["tags/CI/index.html","363a50a5d56f3604d1b28703d0f51a4f"],["tags/CORS/index.html","d394fd1a6c67215a583981fe553e36c0"],["tags/CSharp/index.html","79532328b034fd0923863b7ef9802b07"],["tags/Castle/index.html","6264c398c1c18af07beb089afaa147c2"],["tags/DBeaver/index.html","5ccbd1fa93614c39bafa62f899578e95"],["tags/Docker/index.html","b7d54af60e2dcf1b2186797f404fa222"],["tags/Dynamic-Proxy/index.html","98533b2afe16f7d2a7cf240d07e07232"],["tags/Dynamic-WebApi/index.html","0fcfa2b4b7b5f3ba18229aac2143755a"],["tags/EF/index.html","845e5a1211157c8f13d2a27f2eb36f9f"],["tags/ES6/index.html","b8b37ec1f64c664216cb39fe855a380c"],["tags/EasyAR/index.html","2a984ebecd9834d7acafa940cb86d100"],["tags/Excel/index.html","546e11d803070aeb8b4f5622c4b63efe"],["tags/FP/index.html","a10148fd241160e44c3343dd330295a8"],["tags/Form/index.html","fbd606e703730a684ae964825ded9eaf"],["tags/Git/index.html","075525804e6e8e431b4c9f0ee8c36d28"],["tags/Github/index.html","7b791bbc0769ccec115497ed16a99451"],["tags/HTML5/index.html","d021a95a5fb31c92bc8dba45185d5e83"],["tags/HTTP/index.html","514d27185ae394d6b22481aacf08e9ff"],["tags/Hangfire/index.html","8603540a72036ef68da48399e98d071e"],["tags/Hexo/index.html","c4347630281ce8ae10dfc4e4381a179a"],["tags/HttpClient/index.html","dd9562b41a82dd160ca8e4df10be6945"],["tags/Hyperlog/index.html","bfc2ebffa756764e8ad3a662bbedee98"],["tags/IDE/index.html","5059782cb2fd8fc52f9d2a16dc9defcc"],["tags/JS/index.html","effc52d98865b64ecf76592fef0f372d"],["tags/JSON/index.html","15bcf850457614087c2b48c8dc3494bc"],["tags/JSONP/index.html","9769dd3fa23be81e9be6899f50d378d8"],["tags/Java/index.html","3b37e63088ce20eeae40c56b68b43c96"],["tags/JavaScript/index.html","c8381e34ac2a35acfc9c96deed072292"],["tags/Jexus/index.html","b2bfc19c20c7967c7bcdc62423cef203"],["tags/Kindle/index.html","13f5233716148ece82a0b991fdbb6253"],["tags/Lambda/index.html","bc1536f339b2235533148a8c10cd3df7"],["tags/Linux/index.html","4128b7f0d26aa8190736f167955d4aae"],["tags/Liquid/index.html","629b319f21c528d008647a01aaa8768a"],["tags/Logger/index.html","a902c771d9d1a818ad5d5f014e0000f3"],["tags/Love2D/index.html","c9662b9ad247a97fde90896f31127fe6"],["tags/Lua/index.html","23fbbf0f5d173f332c9ee8b11504402b"],["tags/MMD/index.html","f306d09da1ae62a0de614ef5fe3ea2d3"],["tags/MSBuild/index.html","18981a82b5556d4aec3063f0bed16447"],["tags/MVC/index.html","696eb26f693c8e0badf94378fc46cc2e"],["tags/MVVM/index.html","cb57ae215faa1c21139f2f0e515cd630"],["tags/MapReduce/index.html","df92884638ef3dd23c772ef20890dd7e"],["tags/Markdown/index.html","6765283716c69b90a57ba4670bdc56e4"],["tags/Mecanim/index.html","ddc65e8e160b16263a8bd1d6397e647d"],["tags/Mono/index.html","c9333cc1a08693162eb40543904261ac"],["tags/NET-Core/index.html","ff507aee11e08fcd7486a1ae323dad2e"],["tags/NET/index.html","e58959bf981cdbb0a42617f5dc0e1d77"],["tags/Nginx/index.html","04b72282086791d4860042acd1d9d57f"],["tags/OBJ/index.html","89ed5f2b96cbd9303e3a89b640d247a3"],["tags/Oracle/index.html","54a17eb03474efc211accdc4716c6257"],["tags/PL-SQL/index.html","40931f91679ba0b247a5a0b2a5d5e610"],["tags/POCOController/index.html","cd3ca2da970aba92cfecd9c0f893d731"],["tags/PWA/index.html","4efe1a3d349a3ac99b22439ed0000d8d"],["tags/Python/index.html","4c4a3647529bb2e6d5c322ef61fe4f86"],["tags/RESTful/index.html","9ff7d0fb93da13d3cae391df26acbccb"],["tags/RFC/index.html","208ade89b042fdd7397b3fabbfe803c8"],["tags/RPG/index.html","e8127bfcb1fbd52a143af69810919606"],["tags/RSETful/index.html","e6035657bf5260ce6cc32b9364ccb210"],["tags/React/index.html","1d347cd1059100343be2f894d9bb5eda"],["tags/Redis/index.html","a098f234bdeed6408c1c2d71eaa2300d"],["tags/Referrer/index.html","d500191a8f0c67e6de18b830c536613f"],["tags/SDL/index.html","2a1311e56d6d8c1ca7e610efd13db6f1"],["tags/SQLite/index.html","97aad765f8f0ba7e5db73c3180df4ec3"],["tags/SSE/index.html","5ff07c243b078e1dd78f3e5e30dc49ac"],["tags/SVN/index.html","50b6a86442010e68b0ce63ec325b7001"],["tags/Script/index.html","48b5db301de9deac3b8bb4b59aa7c1db"],["tags/Server酱/index.html","3a9ff748ecb61a522e15c25866f148cc"],["tags/Shader/index.html","7aa1724756f5a03862356d94e158abc5"],["tags/SignalR/index.html","4883b77d59869e85b22d573555635341"],["tags/Socket/index.html","c6afd899f7d4bac628500d7d32cb31d7"],["tags/Sonar/index.html","42f61f88c0813c6e20137d149009fb0e"],["tags/SourceTree/index.html","5e2228fe646427ff240ced10ca8bae75"],["tags/Sublime/index.html","d921efbe4cc78ffc6b714bfc7fae777e"],["tags/Swagger/index.html","aa1fda936cc0ae49de84bbcb1e48c6b4"],["tags/Trace/index.html","e1ec222ad53ad34ffe4b95c5e4802dc9"],["tags/Travis/index.html","49c99203af43ede3c1451d9652d2c46c"],["tags/Unity/index.html","441544be33ca1fd0056235f57395db50"],["tags/Unity3D/index.html","24bbe8184caedc913898519d46829ab6"],["tags/Unity3D/pages/2/index.html","8772ee7b9aab0fb55f68791e0e7b744f"],["tags/Unity3D/pages/3/index.html","f75463f0b11e26c4d4e7488d26867e80"],["tags/VSCode/index.html","b67d300288d669205ef668837c95a27a"],["tags/Valine/index.html","0b571b7aedefa624362a0f6b71bb713c"],["tags/Visual-Studio/index.html","faa9539f55c392c436339e48bf15429d"],["tags/Vue/index.html","b4e4a8cd5e16b9fcd0081f64c064bba6"],["tags/WSL/index.html","c82f1275b11f0284898f091093ac307c"],["tags/Web-API/index.html","c76fbcb206b8018731f7d5e158860bc2"],["tags/Web/index.html","50e36a8a1ffc6aa913279855037cb16f"],["tags/WebApi/index.html","67594a60b410a6c6d675ef618a8b219b"],["tags/WebSocket/index.html","da7a505f1cbc9153249ce6d50d9d978c"],["tags/Wechat/index.html","68d63020e81ae2ce752325c1a4703723"],["tags/Windows/index.html","9bb243819a8394f90376c0da422b059b"],["tags/disunity/index.html","0875dc5649968e2f08986e150db254ae"],["tags/index.html","a3a54ff5c9b2db07951ea8ead4824752"],["tags/matplotlib/index.html","17e03a1d51c5ce71fca020dec83f3a3e"],["tags/njsDelivr/index.html","b1d48be741a4ef2a323ee3775403475a"],["tags/uGUI/index.html","e0d8e65c2de61d3900aa4df21b0de997"],["tags/zTree/index.html","2499da931d8ed95d6d1e556a7a8a0622"],["tags/一出好戏/index.html","b96329c78a5bb94a27765fc2b80c81d4"],["tags/七牛/index.html","cf1d14a49ca4d5b3fdac8d9da4495881"],["tags/主从复制/index.html","59b03db2d8954f243a07178a8eacdaf4"],["tags/事件/index.html","f74209238c0eaa0eea96c76decf0c5f0"],["tags/二维码/index.html","12e6a20128b9cca378edc9acf489bfd9"],["tags/云音乐/index.html","9135ce19a724d074f96989e28c091ccd"],["tags/互联网/index.html","9735ca53ceb99132dda2f542890a0f19"],["tags/亲情/index.html","782703ce20077ed90a7ad804d3c90f74"],["tags/人文/index.html","ef9566dc3c2a5ab6788d3218f78bafc7"],["tags/人生/index.html","8216a686a1bad30efbc3fb91f775f2f6"],["tags/仙剑奇侠传/index.html","2d9eb75310ef9143e1a09628544cdf9d"],["tags/价值/index.html","1a1c81551cdf9c9d02673c36cf1898a7"],["tags/优化/index.html","173b4f76de274903227faf4cc4bd838a"],["tags/全智贤/index.html","58b1ac454b18d06581ebc8da82ede92e"],["tags/公众号/index.html","6a5999108ed03502d0a25587335d9383"],["tags/关卡系统/index.html","a77fdfeeecb78cda1f70857bde7c427d"],["tags/函数式编程/index.html","40d30883cfa6e46326e34976c6f1e379"],["tags/别离/index.html","5950b176c200b25dcd49263292b945f0"],["tags/前任/index.html","ba234312bb7b5c07bbb479f6c9435395"],["tags/前端/index.html","a6e1615e56dd8ebaa88eb0539e8219ad"],["tags/剑指Offer/index.html","3ab9faaa536214cad0aa887241858897"],["tags/加密/index.html","aed97492731c8ac8829aad382986734f"],["tags/动态代理/index.html","e315bb4076b6a528cf35efe35215327c"],["tags/动态加载/index.html","9e698a963824f59fb75d5c3fc8fafb02"],["tags/动画/index.html","270ad77f3939d14c7ab194cc05b0f85a"],["tags/单位/index.html","f4248ccac68b74ce7eee33dd9e827d7f"],["tags/单机游戏/index.html","60394078dce43c29cec68ef8869da3d1"],["tags/印度/index.html","e9527c37e10fae09e17360014d39e0e1"],["tags/历史/index.html","bf89e9f5a84cb44aa3eb78a3f8a4ce4f"],["tags/反编译/index.html","bd6bbe1eaf1023a24c237a09f45d5fd3"],["tags/同步/index.html","505f3a5e0141ee880349aa65593d393d"],["tags/后端/index.html","fc8af7208fe5bad3db7520938c862ed5"],["tags/命令/index.html","3ed7f009811b8027cbf9d6e6954a1e31"],["tags/和平/index.html","21f69ab20a361aac6b9885f698bbecd8"],["tags/响应式/index.html","f85a237f1b6e4584b1d4f9def2735d72"],["tags/哲学/index.html","2170aebd30e0f9e6e2b58421bfe6d2ef"],["tags/回家/index.html","3b4af307bff06f8ac47ac77631ad1ceb"],["tags/回忆/index.html","8ea6a5e39fa87ce7ec27b33650b5f95b"],["tags/回顾/index.html","e5a674dbae221113acdad4d941140cfa"],["tags/回首/index.html","641d3a16c22f2bad2abd0fde7533834a"],["tags/图床/index.html","bc3c8274b2a290576ea51ac909a0788c"],["tags/图形/index.html","33fc54a4d2b5d5536bc216cb69cddafa"],["tags/地图/index.html","271d1c7792f508611b5bb756ceb92fe1"],["tags/塔防/index.html","efa475e8b276fbf4e664be5e440bbe60"],["tags/增强现实/index.html","16c85fff01a8a16b690fc8ab8cf12008"],["tags/壁纸/index.html","d66011a07544a714513313c091bcdb00"],["tags/夏目漱石/index.html","691f22644fa2d9c4806bca85748f237b"],["tags/多线程/index.html","7889aa312cf13be794fcd9ce779b214a"],["tags/大护法/index.html","6234e2b7fa7e7c412f3cd937eb508922"],["tags/委托/index.html","f030e59b8ff5c69e481dac3409c3fa28"],["tags/孤独/index.html","f614ec8f3fdc3d27ef603b667ec8af4b"],["tags/展望/index.html","2b1cee54afabffdd80a8ad8d5f90e104"],["tags/工作/index.html","2c8be937794e5a942704562e4b3641b7"],["tags/平凡/index.html","d14e94a4f44b1cf1d0b894df58006db5"],["tags/年华/index.html","b7558aaef5a509138e726ce00b1e7dc1"],["tags/年度/index.html","4249746302c0daf8b3580a9a693f8e2b"],["tags/开源/index.html","8dff5ac7003c0fca1e89dbcf72932ac6"],["tags/异常/index.html","907452a408a4d6bc661094ea93164454"],["tags/异步/index.html","b7a4dd57a1a609dd817f12c5f2ffaaf1"],["tags/引擎/index.html","4476213dd6f05b6d41b038b0ac8b556a"],["tags/影评/index.html","1420ec0b161b44d4ccc74fefa1c90d6e"],["tags/微信/index.html","08ca9842d445c9772c463dfbee3cd84b"],["tags/微博/index.html","0da70e897d4e619e1b79c74d7c7569be"],["tags/心情/index.html","cbe43a0b8ff589bad706363a4d3d7acf"],["tags/思维/index.html","f485d218d4ffb5f5be2a5647968dd214"],["tags/总结/index.html","8bc53530d58f92ae8ac62e46ecb5a00b"],["tags/想法/index.html","8e99ee4665e9186071b895db0d0f56ed"],["tags/感悟/index.html","d64dc436f1ea2c3687a50c5df87eb452"],["tags/成长/index.html","92568006b76d6f4b25942a8df9abe758"],["tags/我是猫/index.html","07df6d539f435df463d2a48b478fd9a2"],["tags/扩展/index.html","e41c6ca16bcba6b0a8e0408ecd2e563f"],["tags/扩展方法/index.html","4efc8a759911c6667e349e668db21951"],["tags/技术/index.html","de7ea1355ab00658f05de7e5bac14f09"],["tags/拖拽/index.html","63aeb45bc06997edfbaa5f93508644cf"],["tags/插件/index.html","1fa1ed001e8bedda9f6053e68fd6c039"],["tags/插件化/index.html","4f036011419967d5578ed4b5a4634dac"],["tags/数字/index.html","ed1d7cb0ad2ea916dc9b9d691d193097"],["tags/数学/index.html","fd260544e36053664222c1c09c957aa0"],["tags/数据/index.html","d68dbf03ccf8c43b6c32a16379a1bcb6"],["tags/数据交换/index.html","30f75fee605044bcf9eb891328de1f28"],["tags/数据库/index.html","90b270da2b1a30cc018ced040d46dd9a"],["tags/文本分类/index.html","8655778d159e2f40630cee518f63f8f8"],["tags/无问西东/index.html","6e8b1408d400964916cab15df7b60412"],["tags/日剧/index.html","5b8e0bf2293f4385cc08f70dc0bd80a2"],["tags/日志/index.html","9d2a1e79229714513e431b5f0ee83293"],["tags/日本文学/index.html","12d1a3d4d21c8328ed7018144f712b42"],["tags/时区/index.html","ae13dd5a4419ae7ede89fb64f13d7cdf"],["tags/时间/index.html","a13c5146694d368d738d5585a456a2f3"],["tags/服务器/index.html","8e090813b33b1362208b7224ff274d1a"],["tags/朝圣/index.html","87546b0adfe0fd463172fb85c2f065b9"],["tags/朴素贝叶斯/index.html","5e35456117dcf4855d98c929ba6a8e4d"],["tags/架构/index.html","c6b17b8c41a145937d350fef5f0b4580"],["tags/标注/index.html","7c6072bc174be6c84985ab15118255df"],["tags/校验/index.html","f7586782e1d4a7caa5d10afdeb6046a3"],["tags/格式/index.html","66997a8e56858918d604d691c4190f8e"],["tags/格式化/index.html","4b445b250215e239a0f967687f0effeb"],["tags/桌面/index.html","68619d13dfee5a25fe417d7fbb23f735"],["tags/梦想/index.html","0d7e7cd4b60f69fbff19820bbe57947d"],["tags/概率/index.html","5498238baf5d88ab09ef0afbffdc69cf"],["tags/模板/index.html","83c579da97d457700b9fa30dea994e92"],["tags/模板引擎/index.html","bb82bc6404ba5216885c1ca351b6ed8d"],["tags/毕业/index.html","74b49d220ed5d55893ae1f1c1707687a"],["tags/毕业季/index.html","912e74bfef3d78f106d0545d8a72b719"],["tags/消息/index.html","0232e7cc2b5f5ef95c2ea2cf3f2dac0d"],["tags/游戏/index.html","f21cd26380c1a973060205e692eb60cd"],["tags/游戏/pages/2/index.html","624f2ea52408a9e459e3ba89a9dd1443"],["tags/游戏开发/index.html","75c10e7f92f45224cfdd8553a51813c1"],["tags/游戏引擎/index.html","5e6a58717f000dd86f40d783592f3976"],["tags/爱情/index.html","7c8a897fa39590f78d5ab723546a09e7"],["tags/版本控制/index.html","19cc6f1104755fc11fee8742cc865cf0"],["tags/版权/index.html","61f0e3be15db4e7ad4decc156a35a503"],["tags/特性/index.html","402515789fbce241e5a4b2afdef805c5"],["tags/状态/index.html","21ce453e51df9be0dd7018f0f8415f72"],["tags/现实/index.html","ee609dbee8cab965a518be50d142da31"],["tags/生活/index.html","81818f6d4e081cbdff7c3611485609aa"],["tags/电影/index.html","337b970131aad0734c576377026687ba"],["tags/画家/index.html","247a9c33b31699514d07b94003948db0"],["tags/知识共享/index.html","6c3c576e5351bbb9b76270c5fd6b3d75"],["tags/矫情/index.html","3aa91397de66fb9ebc9a51a58b8a9f1e"],["tags/程序员/index.html","b1d8210d02212b8793527ae2be4957c3"],["tags/穹之扉/index.html","af066fe88bc7eaa74148c6a21864165f"],["tags/穿搭/index.html","1b9961972fcbb56c981a7a99073ffd98"],["tags/童话/index.html","83372e4c39be0e0792b20833cf02c272"],["tags/笔记/index.html","6ab7e72c7521d2f11754aa098d90b327"],["tags/算法/index.html","e2dfae1b3658008688434c7c506c7876"],["tags/米花之味/index.html","b05afa830edf5196c05b506dc183bd54"],["tags/缓存/index.html","9cd5b551f9458a89a12a6c7afdb88f9d"],["tags/编程/index.html","ba5ad77e06e3a7404c9e61bcbf7031c3"],["tags/编译/index.html","bb443c0f94ccc7bb8a873aaefa44c168"],["tags/编辑器/index.html","22f73dd29695ebc3cc6e44fa06149614"],["tags/网易/index.html","fac744f58a294b64f82f18b1a8e8003d"],["tags/脚本/index.html","712f812c43fb548bdece03a5c6161c51"],["tags/脚本语言/index.html","46375bd668d1a264a488d457cc9d6c84"],["tags/虚拟摇杆/index.html","25d0e075d8a940afcff34bde97f9d8ac"],["tags/蛋炒饭/index.html","8bc99b24fb2b1dd249ae3791bfd8f0f7"],["tags/表单/index.html","ad3023a961def778dd78291cc169c2c8"],["tags/装饰器/index.html","1f50600d524cc91338bcdb88b81b2051"],["tags/西安/index.html","ab8ed4f8194f0adcae6c99cc80b8635c"],["tags/计算机图形/index.html","f0e09b3516af7e2885aeb03af16d280a"],["tags/设计/index.html","5ecbf65ac1ff6ffab8dd7d16a07a9a40"],["tags/设计模式/index.html","9b23314c933b87d0f2dc645e5676e4e7"],["tags/访问量/index.html","fd60b536e568d69d9727529e037b38fe"],["tags/评论/index.html","bba706261518ff06c03905bc8c7da18f"],["tags/词云/index.html","4d757246f3e01d50038aacaf2130b961"],["tags/诗人/index.html","aec742296b7b0c45cc8a0540b4850991"],["tags/语法/index.html","0a17485a5ff07e07ef959a5aff0b40d7"],["tags/请记住我/index.html","85dabfa19e0815b77e0baab65b9ce1e7"],["tags/读书/index.html","f1e18b83371da1a69847f0c63858796d"],["tags/读写分离/index.html","46ed914e4907de50c76187cd804e4f08"],["tags/调试/index.html","ee2aa7cbcc9d4e056bd0b7d0d0c18f79"],["tags/贝塞尔曲线/index.html","26a6c74d79d687539b0195140debb44e"],["tags/贪吃蛇/index.html","1207ca610fcb4c5d87d06df011bd4f92"],["tags/资源提取/index.html","f2e9cd88ec54578d04c49d4d4eaf48fd"],["tags/跨域/index.html","c693944f4672d9be037c5a6ecddbac4c"],["tags/跨平台/index.html","0344ee73b201762aac6c6bff13f5235f"],["tags/转盘/index.html","0150a1c1e96b7ce299b0eff004192b21"],["tags/迁移/index.html","db38ae393c1a26feaef33aa121b4a3e3"],["tags/通信/index.html","355b5784b3ac513de507b46d8758531c"],["tags/邪不压正/index.html","ceade825c3d560df4df922ffad5a1214"],["tags/部署/index.html","b9551f5268cef2b02b847f53cbe9dc14"],["tags/配载/index.html","eb5d59fd79c20c8bb1a99b9551a618bc"],["tags/重试/index.html","410fa67170cf8f8ce3c3c5428f92d02a"],["tags/长安/index.html","6eef657d7a2d20141253f15f13a4309f"],["tags/长安十二时辰/index.html","8c5ad25896c62d1288796af054bdb48a"],["tags/阅读/index.html","3d270f78feaea16deaf2e16ce76ab208"],["tags/阿里/index.html","99ee825a82b716b7ed5bc0ef29c9a926"],["tags/随笔/index.html","7f2bb4c2207a9a969a315a0a22ad682f"],["tags/霍金/index.html","72053c6e0926d7fe324d5aa078b9aa5b"],["tags/青春/index.html","925631dd42cf5d4a0989ff8a32b108f1"],["tags/面试/index.html","866865d09b50ada8cbd5ae442a9ce61c"],["tags/韩寒/index.html","ac89b4d484d140ba14a6913334b49f8e"],["tags/马尔克斯/index.html","2c8b2752abf95ae509be459c682db8df"],["tags/验证/index.html","0f7905d340132e72a37c69ceddc7867a"],["tags/黑客/index.html","331a6783e53e706ade1788cda7d38edb"],["wiki/index.html","f3455a26cb4f01802415a50b060d9692"],["works/index.html","d0ccd0501676d4b37c314d7c2a024982"]];
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







