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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","63cce8a50872a554e9164839a853aee4"],["archives/2014/12/index.html","050f4a3e4495364277666f432a8f4563"],["archives/2014/index.html","152aac338d58a0f5e91c58272d36fee7"],["archives/2015/01/index.html","8f32cb88e2e14ea8fc8794339d27a82a"],["archives/2015/02/index.html","76553512fc61f7e6a1b7d12ecd436dd9"],["archives/2015/03/index.html","f16b9ff4e560fc7330c8a134475a563a"],["archives/2015/04/index.html","01a5854e21c46dad119edb538256c5e0"],["archives/2015/05/index.html","f52ad16717ca1fd873caf77cc1458c20"],["archives/2015/06/index.html","6a4b6d641690e7631092e1432d7c6afb"],["archives/2015/07/index.html","fcb291a5295b6cee5dc43f9a2e479e8f"],["archives/2015/08/index.html","617419cae197309209518e8c63303c2b"],["archives/2015/09/index.html","b977da2e423a8ef969f961f47653592a"],["archives/2015/10/index.html","1b5e3f7b3ffc03ef146729d66d660422"],["archives/2015/11/index.html","a55266e95dea850373a6aca4f2713e44"],["archives/2015/12/index.html","2d87250b27467d36960610a4bd042879"],["archives/2015/index.html","6a5c11dc8eb661e479bc96335b55f8b4"],["archives/2015/pages/2/index.html","4e0c7aa0f7ed0e1527e80cbd9a0f04f2"],["archives/2015/pages/3/index.html","31a7c74f3688d9006ae7c0df671bcfea"],["archives/2015/pages/4/index.html","50d9ac52d72180552830beb7f7b6042e"],["archives/2015/pages/5/index.html","51c866bc3e6cbd17b0da46499bf57e7e"],["archives/2015/pages/6/index.html","a1902c0d76122c0b172df68c3f3b16fb"],["archives/2016/01/index.html","f89b22be4f3ff2269ad298701d02a6bd"],["archives/2016/03/index.html","7dd72c809d464472d21e3c0f860499a0"],["archives/2016/05/index.html","48c7709c49fc18c23b94a27bcda069f3"],["archives/2016/06/index.html","d3c69ecb5c0190c15e5615b91f6d79ea"],["archives/2016/07/index.html","ed276bbb15bdaa0cdd81317973f64f3e"],["archives/2016/09/index.html","76fecc722b9d4de6c46c823452f9f254"],["archives/2016/10/index.html","9045cb95500cdec72704efc68bc2d231"],["archives/2016/11/index.html","2656a3ad16e7cfbd6bb7a810118d2abf"],["archives/2016/index.html","6c05a59f64c383331928268e7437ac1b"],["archives/2016/pages/2/index.html","82c736dd9f4a97744b4a316af7fb4c98"],["archives/2016/pages/3/index.html","bcd2713f79bc2a070729c82f769a205c"],["archives/2017/02/index.html","14fccce305d0e221f0450940f0025acb"],["archives/2017/03/index.html","d7aeb4be38492c757a26a2f7dc56e61d"],["archives/2017/04/index.html","9897beb2ee1a6e177b2c1cbb29a36316"],["archives/2017/05/index.html","fd6432aac63c5c10076455572073f000"],["archives/2017/07/index.html","1ed91eeb8495d069aa42e4ac0a198258"],["archives/2017/08/index.html","3983e48a643ae557589dcb2fed5fdb91"],["archives/2017/09/index.html","f95525ee263423fe3dd9decca9d700d4"],["archives/2017/10/index.html","248e3a04f87d21ef8c716fc2eddfb8e0"],["archives/2017/11/index.html","ff6c40608fdcb12073a4721ff1f416e0"],["archives/2017/12/index.html","66fbcfccb1f3d1de9c4810c76183ce98"],["archives/2017/index.html","a176ee480c2e7a4e7131cb417ca5ca04"],["archives/2017/pages/2/index.html","4615b14e6a9e076e88d5da6d81566809"],["archives/2018/01/index.html","162684fe15fbde288872ecf5e4b86cca"],["archives/2018/02/index.html","915bcb4beb93a843fc36a93bd6356ef3"],["archives/2018/03/index.html","ce2036ba6e0836ea3ff57b55c285ff9c"],["archives/2018/04/index.html","1f828bebb667a4d08469c55366fbe346"],["archives/2018/05/index.html","80640ce41ef3c12c1dc53e28208ae998"],["archives/2018/06/index.html","155c050f5d638129da1d2b5479ae4c56"],["archives/2018/07/index.html","8caf1ed343761d2826879bd0843efba4"],["archives/2018/08/index.html","d3266b7075d844a13ed3f239ecaf6adb"],["archives/2018/09/index.html","e958a8691b5947000b8ca72e93c773dd"],["archives/2018/10/index.html","0840cc537fdba0132e771d99ada74399"],["archives/2018/index.html","dc2d96f7384677a5f583d198261e9d51"],["archives/2018/pages/2/index.html","fbfdeb441071ca2d834272a6013d7cd7"],["archives/2018/pages/3/index.html","17ba9511fd67afa21fd120b537ff407d"],["archives/2018/pages/4/index.html","a9145a9c52e1e6c4c69e955221ac05cb"],["archives/2019/01/index.html","79057230299b4a66d77b05eb615f6f5d"],["archives/2019/02/index.html","9f0ab135a1f9ff6f7ff1ec52e7d56c38"],["archives/2019/03/index.html","7444116986263fb5b50f5d36d550b461"],["archives/2019/04/index.html","9b89645a28da94e352a4288cee84918c"],["archives/2019/05/index.html","5b9e0ee7d70110e6505e8b2f17d3c8de"],["archives/2019/06/index.html","54430b04cd11fc0c0082421261b23bb1"],["archives/2019/07/index.html","85a9baf1c11afd5527d46e611d1478e3"],["archives/2019/08/index.html","7c1dfaa6ee3401f130f768bdf9b446a1"],["archives/2019/09/index.html","7128aeb2d6c92700fccdd4e70b100fbf"],["archives/2019/10/index.html","862fea1bf5261f144066a17fde1185b0"],["archives/2019/11/index.html","b6bff08eade52eba2ae24ba0fdca8440"],["archives/2019/12/index.html","ca9f71eb8c90a0f5945a4da3bc0f2e93"],["archives/2019/index.html","79b6e7266cfe3c2eb5f5cbebb8442de1"],["archives/2019/pages/2/index.html","bf064f155d0326347fbd093eaa0055c6"],["archives/2019/pages/3/index.html","87d3edbccb14e63fa776182e586165d2"],["archives/2020/01/index.html","f8e7a3a3764ac307fd9a58b10c0414c4"],["archives/2020/02/index.html","440c7d1a3ce928951a15aac91c7b99f5"],["archives/2020/04/index.html","64686a40934ac0a2c1498cf8d61e84e1"],["archives/2020/index.html","77a5812764b8e6d14f4410b173d4b4d0"],["archives/index.html","d65d99b5c03c0cb9646726dcce31126b"],["archives/pages/10/index.html","46a0d74f2dd2bbfcaa03f40eade6fef5"],["archives/pages/11/index.html","62b8ebaff243ed672234f9a8c24d6bf5"],["archives/pages/12/index.html","50cc84af4526435ed08a40405d09c3bf"],["archives/pages/13/index.html","853c5529d21601c38fcf5c25079ea496"],["archives/pages/14/index.html","85013eb84547f1f76de68a4151225641"],["archives/pages/15/index.html","e7784d620aef63523ab728add943abdf"],["archives/pages/16/index.html","f1335024fbc4a88e97a1effb6598da37"],["archives/pages/2/index.html","e4ba796402a8fcab415ca5ff2ac46b2f"],["archives/pages/3/index.html","8d9e5a227522fad4798f469acddcbfae"],["archives/pages/4/index.html","adc41a44dd8411f452f9d9d25a171561"],["archives/pages/5/index.html","ee3417862edd7ca2f3c4c38fd3d0aed3"],["archives/pages/6/index.html","12a8225c0bab317a93dd9dcc1754d181"],["archives/pages/7/index.html","7bdfc0106487923a171d79f24f635a63"],["archives/pages/8/index.html","ed0072377647b5fe224205dcc9ad57c0"],["archives/pages/9/index.html","40c0fc2bd4e3e73b50d6836d38a07c3b"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","f8018f9a138e8a3d7aa90ad054238f92"],["categories/Unity3D/index.html","27dab2cd1048e26eecff9d3eb1d6b676"],["categories/Unity3D/pages/2/index.html","2720c041cc93bf2e0957967654a9ec9e"],["categories/index.html","2bf51a34367aa0a9f54a9051a59a6178"],["categories/人工智能/index.html","4e47350bd0438ef5d620aa3c8350e395"],["categories/前端开发/index.html","c895fc4cce4b924fc884f4b7e10c0f2c"],["categories/单机游戏/index.html","7138800828b58b4bce80a2d9b9e406cf"],["categories/开发工具/index.html","f085a20ff3dfb5907b0c873b4694e025"],["categories/数据分析/index.html","e852490e253365d288b2a2355d2e571c"],["categories/数据存储/index.html","1209af9f9807c11102563f5921f00fe7"],["categories/游戏开发/index.html","275780a50d8618e2595e3e946a204f63"],["categories/游戏开发/pages/2/index.html","be0dd484cfd2e51b9846d892c431fb9c"],["categories/游戏引擎/index.html","23c5576c915f61abceaa25025253ff3a"],["categories/独立博客/index.html","4d132ebadc51d5c1e43c7464c10c9ac1"],["categories/生活感悟/index.html","325fbd0219271b0b0e26a9a001708167"],["categories/生活感悟/pages/2/index.html","62fffc7d58c0f4360c5ad972c864c897"],["categories/生活感悟/pages/3/index.html","93248956e3201479978d0dda7ec4d8c9"],["categories/编程语言/index.html","75c00d24bc08892b0ac275224876f89a"],["categories/编程语言/pages/2/index.html","2fb5d434398dfb91b53448bb4739b0e6"],["categories/编程语言/pages/3/index.html","6b2e452918c31111d36652660a777c11"],["categories/编程语言/pages/4/index.html","7a74b72b9a231e75ea5ec59a127119bb"],["categories/编程语言/pages/5/index.html","51f24b3401bdd7893df117b835742226"],["categories/读书笔记/index.html","a536c249f8a554f04fa0753cd4b854da"],["categories/读书笔记/pages/2/index.html","55815afde5dcceb21115221b9dbd7094"],["friends/index.html","32132d25b343d5b1c3eff89273c12c20"],["index.html","d179c00a53fe953cc4f7147857d4ea29"],["movies/index.html","037e12e12a051150e49558eea10b4db0"],["musics/index.html","a067785057cfc67994dcd18c9e28b1eb"],["pages/10/index.html","f6f07b13073f7a0eb0a1eb04dbad3db5"],["pages/11/index.html","522c07b7a48b26cb16f1b4b760e46a45"],["pages/12/index.html","c4cb6c0af23cb3e6bcbaeecec4d9b347"],["pages/13/index.html","667ba4caa3d96ed835b6d47dd8339b43"],["pages/14/index.html","fd02cdb2fbbf0c5805a1604614d02718"],["pages/15/index.html","c097263afca8c38814773d21e9bf7fad"],["pages/16/index.html","b408076a67df02c359aa694c2f170b23"],["pages/2/index.html","8416b64d818a5c52cf74d5d808f9ea3e"],["pages/3/index.html","3e261b610e48d91b09a54bf56f717a65"],["pages/4/index.html","0f430bb293b7068c4e72eb2f57d71c92"],["pages/5/index.html","1a293eb96c6ae5e9db614338bfebaf0d"],["pages/6/index.html","a6686d1c1d6c8eb74780f99466a10e01"],["pages/7/index.html","120dd9ff132f0fb93fbb80cb0a50b7b4"],["pages/8/index.html","562b4564b39fe7f84eafea77740780c5"],["pages/9/index.html","10d971c4af1bed9eb886105279c557eb"],["posts/1059499448/index.html","6d5ed5943a323a5471188f3006f2f8c2"],["posts/1071063696/index.html","e6bd293725aaa0af6aa7c7488bb7d2cd"],["posts/1082185388/index.html","7c7e2d8d15888c9894e28efd38093a53"],["posts/1099762326/index.html","258371ff220aed11f8791e63ff010565"],["posts/1113828794/index.html","fd2c6b85d55b4e835dd75f2ad83a0d57"],["posts/1118169753/index.html","6bfca69ca3823c63e64569c2e20618f8"],["posts/1122710277/index.html","cdee30f123e6d9aaaa6fa638b4853c4c"],["posts/1124152964/index.html","e8bd97e1e2a171651581500d2dabfb98"],["posts/1127467740/index.html","7d333fa888139af36f71bf47c5aa5049"],["posts/1150071886/index.html","9172940cfc6bb2ed76c9e07f1b9aa51d"],["posts/1150143610/index.html","d1ebaf473c8fcf30bcad646a1e23745a"],["posts/1152813120/index.html","a11731fb101f74223765be05594e2ef0"],["posts/115524443/index.html","68ff6960cf03c1cb5bf335be985d803f"],["posts/1156673678/index.html","aa8300ed19416bc2297c6d9d373c25d6"],["posts/1166840790/index.html","8b595e487028a5a7c274c01f628f5c24"],["posts/116795088/index.html","d26c47793712c52c56ba4c1b660aead2"],["posts/1176959868/index.html","3d14749e8b227eec4f2b092fd7543389"],["posts/1190622881/index.html","8c683fed4faf2ebb9fba2085068a0212"],["posts/123663202/index.html","27ec0ed86209b7094e58861351920402"],["posts/124807650/index.html","525419e36229f216156a13e34833828a"],["posts/1254783039/index.html","293f6b228dab10b0f2424f52c82c019b"],["posts/1289244227/index.html","98b0c51b012d6fc93baab7b26c88fb87"],["posts/1320325685/index.html","7c7b68da173b5a85079e7cd1eaa34d44"],["posts/1329254441/index.html","53fb4c678daf40ef8a0fc9b9626545f4"],["posts/1357715684/index.html","0de03cdcfd9adde4b332df5206b9ce57"],["posts/1358971951/index.html","3c95515412492f729e10abaada2e6aac"],["posts/1386017461/index.html","f10ff1603e7f7752745df89880e52ce9"],["posts/1394521917/index.html","b4bf4c885c7a956d77f7b77df236f497"],["posts/1397717193/index.html","5bb10353f743098dfec5e3c0d3ac2b35"],["posts/1417719502/index.html","a9814f695d6e5e902cfa0e85c8f856bc"],["posts/1424645834/index.html","191f344d7f04a2a7cfb52b1de90e47f4"],["posts/1444577573/index.html","41dfc6b353502cf5fb944ae6a42578cf"],["posts/1467630055/index.html","c156eff559ad7afc393fb00156c8b5fc"],["posts/1478979553/index.html","2a3bdadfabb91d907ef0f6e196495797"],["posts/1540537013/index.html","9cde4049f3c18cbd871da39a28f7ed76"],["posts/166983157/index.html","604878b52899df53a28b0f8b1ca414d1"],["posts/1670305415/index.html","3eb1add214ea43163c05d367d22dba69"],["posts/1684318907/index.html","de5c62d089048b7f9528f3c98580a350"],["posts/169430744/index.html","b9a2196692dc8aaaa2144aab807780df"],["posts/1700650235/index.html","1d4e4cbb43384a76615ef327b4a3a5ba"],["posts/172426938/index.html","620aeef8d7a9a4bf547c99100caa6113"],["posts/1836680899/index.html","f143fe94e89d39626ee7450c83984af8"],["posts/183718218/index.html","59ebf500f136400fd12f0546f3721c7d"],["posts/187480982/index.html","20805dbba75a7dfe828f42b2d624adaa"],["posts/1930050594/index.html","4495f9a9270afe98c5e9fa56a65f0085"],["posts/1933583281/index.html","75dab0b4deaa6add394166cab0bad112"],["posts/1940333895/index.html","1b8a60da041dbdaf831ae0fb28be4223"],["posts/1960676615/index.html","d96be085587bfae8b382d9fc729b4da1"],["posts/1983298072/index.html","6b79b43b54055c4a16dd1c54c5b8a28f"],["posts/1989654282/index.html","af77907dfe5c35ae1ff590588fa7be53"],["posts/2015300310/index.html","02ef84e4a94182cee865679d891f5e2d"],["posts/2038378679/index.html","b04af568391c1c7b34f62f05de429c9f"],["posts/2041685704/index.html","f0c4e605793e74174aeff77fa91e08ba"],["posts/21112647/index.html","a0d85e8886b619cde9e575ab57cd8ccf"],["posts/2158696176/index.html","824e6c37b7f75c06b5873fd14f2aec85"],["posts/2171683728/index.html","a7ff4288e942237c7387a8b88e8edbfb"],["posts/2186770732/index.html","b867bfacd3b9d8675b6bdf250100de57"],["posts/2275646954/index.html","042b200b3dfff96e0600ca4bde53d476"],["posts/2314414875/index.html","b6eff2b64c418f463765f63008174644"],["posts/2318173297/index.html","b66d0afe022145d7819ae314c95e88b2"],["posts/2418566449/index.html","cff20eabcbf4e0950afa9bbb59cc1432"],["posts/2436573863/index.html","617ff17d72fa15be4e1ab26ef1b13402"],["posts/2462008667/index.html","6d51ec11b9fcba153a2cebed9818697d"],["posts/2463121881/index.html","8497f69d10c9ab6ed23a36162630d396"],["posts/2488769283/index.html","80ea2c5756b26d3bc7f96ba0b66265af"],["posts/2527231326/index.html","280b58a0c7aec667a38ce11288256157"],["posts/2583252123/index.html","a70aa0fa0939005b96aa734175067277"],["posts/2613006280/index.html","12f4b8cc1b46197b1112728c1449d634"],["posts/2617501472/index.html","88545386141e643fa77c19fc94bcace4"],["posts/2676125676/index.html","3eb282494f074af55225190ee8d1742c"],["posts/2734896333/index.html","d074668fc3acad6f12c0ba2f587edc95"],["posts/2752169106/index.html","aafdd5c0a1c09cb3ac8ab0661a72dba0"],["posts/2799263488/index.html","7c2ff34de61ba9e9d3eca5b6edc90e51"],["posts/2805694118/index.html","63231320f248785154f7365ca6301e44"],["posts/2809571715/index.html","f2e86176c1ed1d0a596733eb8d6545d6"],["posts/2822230423/index.html","015e5b8e377140adc863fc4574a70043"],["posts/2829333122/index.html","952b30fb4fa4cd352809ff0cffe80a01"],["posts/2911923212/index.html","2d7a8710bb510d5e53abeb250fa6cc8a"],["posts/2941880815/index.html","d29a7faa8ee8333d0643a2822566b030"],["posts/2950334112/index.html","ff2d25e8680f6630eba4fc249f48bb37"],["posts/2954591764/index.html","103ce3e5a586ffd0c53c78192e6c64c7"],["posts/3019914405/index.html","10003af407419b3f09754ec759ea037e"],["posts/3032366281/index.html","c2df299788c6dea1a52dded2ce636d5b"],["posts/3040357134/index.html","47e506ebc0696040ac93117ee66b2536"],["posts/305484621/index.html","3ffc42ac72d6d126981e80864d65605e"],["posts/3083474169/index.html","e81d819bf59d7ff5ee9bb9a3180e16ba"],["posts/3099575458/index.html","fce659c831240334458183bd5ad3c6c4"],["posts/3111375079/index.html","75139d2b341f2817ce9c8be9f143573a"],["posts/3120185261/index.html","86e65423c5164b29f50abeabc6e1e85a"],["posts/3131944018/index.html","23ca66e7df7ee98161a7b527f2f579ec"],["posts/316230277/index.html","00b32eb2c48bc7c713c59ddcfc5856a8"],["posts/3175881014/index.html","56f9e626a701a8a30ca126767ac69143"],["posts/3222622531/index.html","2c145d1bf562cf17254fed03b3805b93"],["posts/3247186509/index.html","968367ee0fb15558f99436f7a3371cbf"],["posts/3269605707/index.html","d784f11d6ec179585e48da58e00b0472"],["posts/3291578070/index.html","a9b1c05d3918016aa6b8dd67e3885386"],["posts/331752533/index.html","6a7ce9a5c97bdc6f937424ac5bb6b0f8"],["posts/3321992673/index.html","52e962934160ee9a6edeba276ca5d83d"],["posts/335366821/index.html","0f91d22040d42d9b38f7b73ba6e78930"],["posts/3356910090/index.html","b4f202bcdeae7215400f5b3a0bd79f5d"],["posts/337943766/index.html","745022ca1c3409073bf51c4176295100"],["posts/3417652955/index.html","48928011dc085e164358c48e73d0836c"],["posts/3444626340/index.html","d3eb6c79377abf7d781be5eb40852eb4"],["posts/3449402269/index.html","0cbf791eafaf1552e26c7c64a17d7c5a"],["posts/345410188/index.html","1371dd62e61c39afe202abe3fc0cb68d"],["posts/3461518355/index.html","4f66458659e8cc14489493bc9578ca98"],["posts/3494408209/index.html","2733220371507ac0faca3a92056d5557"],["posts/352037321/index.html","0b26d8d9e1913c586c33697f0b8c1d7a"],["posts/3521618732/index.html","d7f881bda81805cf007961e4cbd617ee"],["posts/3568552646/index.html","0d58bf9560b554c7dbc630d3c1bdf599"],["posts/3603924376/index.html","dd2c5a6d66c6486744a7bcd2c24fed00"],["posts/3637847962/index.html","2ed89d76598d1a90f347da789592d05e"],["posts/3642630198/index.html","a25cd2cd57dc77c808e3f216d2b2fbcb"],["posts/3653662258/index.html","f102f411af814ab8f04e508524869337"],["posts/3653716295/index.html","c83b7295366a8a40ec667d432a5b246e"],["posts/3657008967/index.html","206eaa18344ed973ed9eb4aa6e0fe69b"],["posts/3668933172/index.html","bb28d32842cf97e65362c7c076f9df3d"],["posts/3677280829/index.html","e6cfa2035225dfb5988ce5ee06a4b85d"],["posts/3687594958/index.html","403e990a91ecaede8d7b1fd8af78f7fa"],["posts/369095810/index.html","62d72662d2ba5f36aad84382c5712073"],["posts/3695777215/index.html","8b7dfd2c9603940bc70913119b7804a2"],["posts/3736599391/index.html","c8af0d6806207514b34211db6a86bf30"],["posts/3742212493/index.html","8bee33a6f73b6b8f3c17195db08504b2"],["posts/3782208845/index.html","30d925acaf891e596bcf00528500d4db"],["posts/3789971938/index.html","01e01537aaf183f200bb5e290e2f04a6"],["posts/380519286/index.html","5d2383d65f4c20cbcf2e6c34975b63a0"],["posts/3846545990/index.html","a5da27af3be1fca086f9e64ee46e40f5"],["posts/3873710624/index.html","0c2b7d2c5f6295641bfb48c558042476"],["posts/3959327595/index.html","6566b90ba9334de69cb55fe560fcf78e"],["posts/3972610476/index.html","e162d7e7797dacef74d1178b2ffb79a4"],["posts/3995512051/index.html","075dcbd9bc1cff66aefa4975b894ee6d"],["posts/4088452183/index.html","8a5b90d831e1227ebffb8eb833f1fde9"],["posts/4116164325/index.html","a50163de6b452caf3aea7a2d47f3b8e4"],["posts/4158690468/index.html","291b509a59f1364111bcc3a337812b22"],["posts/4159187524/index.html","f9f0fa1f9afbddd2787c790ea99f4362"],["posts/4197961431/index.html","939d650ed19e994f16485c1474d23e8e"],["posts/4205536912/index.html","c7bf308309db62872ec821d79624b919"],["posts/4236649/index.html","c5eff25e1dd7b855d6abe5820f2642ca"],["posts/426338252/index.html","f8eca15842faf860ff9ddafd80831938"],["posts/450254281/index.html","2e42e9750fee07cb5b9b4fefc7aefdbb"],["posts/4891372/index.html","cb9684acce1ba28fef21003b9e1d099b"],["posts/569337285/index.html","bad8a9b3b36c08c77d7f368694b952ef"],["posts/570137885/index.html","f9e07ae958aa6a2c7022c1ef1a991cd1"],["posts/570888918/index.html","f836dfd0869f663ae60e0e3564469277"],["posts/582264328/index.html","307c8594bb19835c22e8e580039abf54"],["posts/632291273/index.html","63a19bc33e52b122f4c42b7a5d6ba1ff"],["posts/70687890/index.html","814965d97a91912d17899926638a4560"],["posts/719322223/index.html","8dd8d4417cd6b2394414f423829855a0"],["posts/720539850/index.html","56fe8538b3996f8e4e00109966aa6d6f"],["posts/786195243/index.html","574cdfc263de45b191449f1e10fa65b7"],["posts/795474045/index.html","105b9c3184b71f2d91a801d3871f3168"],["posts/815861661/index.html","6b3c916cb6535481c716f9e77e07fcc9"],["posts/821259985/index.html","51ce0e8ee36490256ad001a6daf1ade2"],["posts/828223375/index.html","e61a33c3ec0690600140445f62b7f875"],["posts/887585917/index.html","c64d8857d8e1e986fa93cd02592a9792"],["posts/888549816/index.html","484c185ceff660296840645d25d87ca9"],["posts/906436376/index.html","8d38fa00c973230ac0d9d43f545633ff"],["posts/907824546/index.html","f6537b5dba83a024155ae58d46236a74"],["posts/927393529/index.html","aed4ac462b7ec10ab2efaf30204af216"],["posts/94443781/index.html","8b9bec54151f5f73faf5afbfa720961c"],["tags/2014/index.html","409390f5196ee2f4d5d7b8a00107ff51"],["tags/2019/index.html","c454bbc9e239877adcb705d88fe0c99e"],["tags/AI/index.html","4f551fdfcfc74da0bf049e7a0fb4169f"],["tags/AOP/index.html","d8dfa571f195fd0ed49175a6b073cef9"],["tags/AR/index.html","1900b3db54468fdcca383c747554ed17"],["tags/AssetBundle/index.html","bee8c359dc2b689aedfc4aeb969d9e4e"],["tags/C/index.html","e35731eff69127501c8e49f7d76709d9"],["tags/CDN/index.html","0dc595ed4319ee926f5aba87abc8146a"],["tags/CG/index.html","a26bfd09cdb135ec8dda3abc09b2f9c0"],["tags/CI/index.html","eb954b981d16ff6b342b334cc658a85e"],["tags/CORS/index.html","401389d13841f5b2178adbaad0229835"],["tags/CSharp/index.html","76602f2e1ac85efd318be0d651a626bf"],["tags/Castle/index.html","70d853a222528af8461699cff131b0ba"],["tags/DBeaver/index.html","76fe4bcb3547926db609482acdb1c723"],["tags/Dapper/index.html","14f3e1a2a51c3e15df1a2e6de7791397"],["tags/Docker/index.html","311cd79927474a4e166a32097b280316"],["tags/Dynamic-Proxy/index.html","a09a644c55169d7d0392f084ce11c145"],["tags/Dynamic-WebApi/index.html","19ff9c6d9bb91bac16ccc7d7d1111d17"],["tags/EF/index.html","83f3169493ef367ffcadfcc0de6cae41"],["tags/ELK/index.html","15634c0a8d0d20c2410a3723a95c1a5b"],["tags/ES6/index.html","85dced26af06c2485eb91047682da0ce"],["tags/EasyAR/index.html","96ed6617f4f389fb52da7ca2a2dffc90"],["tags/Excel/index.html","bde988c5bc419326463a4609855f976f"],["tags/FP/index.html","3589377a660bae8e9345a7bd953f0768"],["tags/Form/index.html","4246e2f925da04d60fdf19843353a2e2"],["tags/Git/index.html","95faadffd5e439613dd3122af26bb86f"],["tags/Github/index.html","84f4a33deac1596e4496ea116337a4ac"],["tags/HTML5/index.html","1008193ac05920941b8610f491fb7544"],["tags/HTTP/index.html","53ec7ad774211bffadd34a9259086c08"],["tags/Hangfire/index.html","0a4bc5af76ed284c21592d6e6114d820"],["tags/Hexo/index.html","aeaccb5b88533b9f888ca4659395cf39"],["tags/HttpClient/index.html","bac69baa216b89cf9abdf112b37632d5"],["tags/Hyperlog/index.html","a07b9fdf040b2e83448ffa1d230dfe2b"],["tags/IDE/index.html","429807c7597c04d950e088ca009e9b67"],["tags/JS/index.html","47d909156dd416d35a751f072706f3b6"],["tags/JSON/index.html","198cccee88d8b04ed3179eb482e463c1"],["tags/JSONP/index.html","322c13b0b8b9c27b414ed28d0dfd2bfc"],["tags/Java/index.html","47465fc1d04f373648f9643c89890aef"],["tags/JavaScript/index.html","f88b7514099f6aead53eb91dae4ebcce"],["tags/Jexus/index.html","4f82bb047d30e165455e5e39e3629962"],["tags/Kindle/index.html","a59644540eb690fbfa7616eb986ccebd"],["tags/Lambda/index.html","42c3c69779984a5d24e520dbefcd796d"],["tags/Linux/index.html","4b18b91c9ab5ec88afad353dd44e1a89"],["tags/Liquid/index.html","6a943186a77a10b002bff6cad58af6d8"],["tags/Logger/index.html","7012de36ab3d5f702eacd4af612faec9"],["tags/Love2D/index.html","b82320876ada06f1fef0a9e3d08c1db3"],["tags/Lua/index.html","2e893689baf57e2899b5c90fe930f076"],["tags/MMD/index.html","03de17440a2838b8d899a3ca499644cd"],["tags/MSBuild/index.html","4846d77943b6085b09cd92b661a2422f"],["tags/MVC/index.html","29843ae577ce000b99b8583b86801c35"],["tags/MVVM/index.html","a96fa583aab7ae08664397e832d382c7"],["tags/MapReduce/index.html","d24f8d31e67825ac17b133ce91b6fb8b"],["tags/Markdown/index.html","b1f8e38baa2a7cfa13e99e85f80149ff"],["tags/Mecanim/index.html","68786621698fcc464f61258de47d7e1a"],["tags/Mono/index.html","a34a9415f96cc84e8504b4b2d5b3f38b"],["tags/NET-Core/index.html","54cccb0c3f240afb4f1014bc5eb28fb4"],["tags/NET/index.html","e0ddbd908a8f03870bf080693baac827"],["tags/Nginx/index.html","00727bea3f2b76fceaed3c7b820e92d3"],["tags/OBJ/index.html","7cd7f4c1c0e409fc422b8fc9c5f732ef"],["tags/Oracle/index.html","318a6728f84f51b28c92ff7d7f059fb4"],["tags/PL-SQL/index.html","8d5c590aaa4e2266a98cdfa6b1a19952"],["tags/POCOController/index.html","ce34fea86d4a811b29c7114a455ad2ab"],["tags/PWA/index.html","67ec88519a6dc18b9409b15a2772f5e3"],["tags/Python/index.html","4be05330f8fa29373d9b584f3c8113da"],["tags/RESTful/index.html","4ed4436bfbe53010dd306645f92de3c1"],["tags/RFC/index.html","2917362258edb38017c5d8ec06a95fc0"],["tags/RPG/index.html","f778b2ea52e815aa35a15b2eeeb44eaa"],["tags/RSETful/index.html","e50f91bfa5507b78bfa0462d8bd09fb6"],["tags/React/index.html","047ed5bc8d748e63ad80e24194b630dd"],["tags/Redis/index.html","09a4cc5252d703bcdeac8fe7f38ab498"],["tags/Referrer/index.html","6b0be80e9fe52dfd11dbde78e9b4a5ab"],["tags/Retrofit/index.html","44995957c53c29965848ed8cb4fdfb76"],["tags/SDL/index.html","31437e17429615073a38586058d53ed9"],["tags/SQLite/index.html","74ce84f48176ada3bdb2d9527b21fe71"],["tags/SSE/index.html","4db6969df3b4adcc04b213d77f814521"],["tags/SVN/index.html","32f74008d18844daf291aecc46fb8367"],["tags/Script/index.html","0cf884d079e294ccbf04885c8dbccc9f"],["tags/Server酱/index.html","9dbcd2981083f289806d87a82c58535b"],["tags/Shader/index.html","b69df756049d4ac20f19ae9771e31549"],["tags/SignalR/index.html","f4ad7a12fdbe2d414c8e1607840f5f62"],["tags/Socket/index.html","8f4209bbd8729f933ea4cdfbe8a3e40d"],["tags/Sonar/index.html","920ab7e91e2be3b8bbaf4e4a06549d90"],["tags/SourceTree/index.html","8ac6b585071e7ae28446f6b0da3a80f6"],["tags/Sublime/index.html","a328b49482101b1165aeab2bcfeb976d"],["tags/Swagger/index.html","a01eb78de4279eb7e2f09c853e24b0b2"],["tags/Trace/index.html","a7837e9a2456d498b7b2cd48cfc3b7a7"],["tags/Travis/index.html","91bea5eca9e3267c64ddf4b61dddd7c1"],["tags/Unity/index.html","0e778fc3465ed267e3e6474f701f760d"],["tags/Unity3D/index.html","16e01d119f07ee0ff07d6b71d5997fef"],["tags/Unity3D/pages/2/index.html","6ceb353425f8c52c5c7835bd442fe517"],["tags/Unity3D/pages/3/index.html","800db33dd4e496ede61b6a4d129fb76e"],["tags/VSCode/index.html","9e2a204b96393c9f60df3f221781964a"],["tags/Valine/index.html","e838d6084dba0a12072c3ed96f6d6673"],["tags/Visual-Studio/index.html","aada7af7e845017b75b68603dbd99235"],["tags/Vue/index.html","7d907b0ccebda89388714cfecb999e36"],["tags/WSL/index.html","7cd2c265b96b1ad04d1a88b0db504c48"],["tags/Web-API/index.html","4a44449bc345a12def6ee648fc385346"],["tags/Web/index.html","0e1040df39abe0e4e3638a5e30e31925"],["tags/WebApi/index.html","0d30cb7b774c07a5d37e84efbab2e73d"],["tags/WebSocket/index.html","91e9276e13d32b6210637d897a4558b6"],["tags/Wechat/index.html","1eaf03e88c9fad3d9894bbf03fe261a0"],["tags/Windows/index.html","4f982377ab1fd7475ae563ce6cb82ee6"],["tags/disunity/index.html","f8a272aaa4e672160feb9b56777fb5bc"],["tags/index.html","5aa751f6dc65866d4661ed1ad4b1f610"],["tags/jsDelivr/index.html","0f68d7acd3f3f4fdfd6b311fbe579330"],["tags/matplotlib/index.html","98be308ca5a004ff01911820cb0f689b"],["tags/uGUI/index.html","2ee3584ae85fe8255b2a6f160ff312fd"],["tags/zTree/index.html","bd854ff8d495e43863ad6879238cbc06"],["tags/一出好戏/index.html","26f8494152e6b44ad2d41dba5aa49b47"],["tags/七牛/index.html","5a63878efadeb86998b7c1abc8b6a868"],["tags/主从复制/index.html","911357ba9301598811fa843ab1165213"],["tags/事件/index.html","401cb128fc05d4862f33ef2663fced35"],["tags/二维码/index.html","e93b4361f5bd39831324fc6384d41451"],["tags/云音乐/index.html","7653b01596232c9faf9aa47fecb0fa71"],["tags/互联网/index.html","67cd6895029342dac2b9b9dda806da44"],["tags/亲情/index.html","027901a7ec8a0260fb162f7a51fc3a7d"],["tags/人文/index.html","d3eb9b1231c3e5ae371a32e74968b4fe"],["tags/人生/index.html","35eeac055a612217152525f5fbca8c9b"],["tags/仙剑奇侠传/index.html","2bd8a6bfd74c7eae3778b4d7668f3648"],["tags/价值/index.html","0cf434ea58290d54c244f851f3e71b7d"],["tags/优化/index.html","86f8c37124225bd95211084a3533b0f7"],["tags/全智贤/index.html","43feb29269dce4b0505e832d280d0562"],["tags/公众号/index.html","c39d85b3f1f4c46a7f851df175f34e94"],["tags/关卡系统/index.html","ea5a7818a90a8e6d069d8123aaa7d938"],["tags/函数式编程/index.html","cac7b91d3aa8ca13724776cb9b678d69"],["tags/别离/index.html","6fb1052a914a3b2642a1a3d2d7d994cc"],["tags/前任/index.html","10e943cb466be8ec2cfba3ca7a4ce91a"],["tags/前端/index.html","c7e212a32198edb0968a84b3bf7418a2"],["tags/剑指Offer/index.html","92a079a2961a7147ce24d588c1afa6bc"],["tags/加密/index.html","8284564a43d27aa86f10d051e485274b"],["tags/动态代理/index.html","57ca7fb1092be1d6d2e29de586324666"],["tags/动态加载/index.html","80bd19e64b48685e402427335dedda91"],["tags/动画/index.html","2c08800c9fc3ba6dce19f9543e1f13da"],["tags/单位/index.html","87c57c1cc92065584be5fa3ca2ca0553"],["tags/单机游戏/index.html","f222749b700dcd2ec2ca7ff2478700fc"],["tags/印度/index.html","7df61f62288719d21ebd1177741fb4d8"],["tags/历史/index.html","dbc283e96d8b7908c875a90bb1c82238"],["tags/反编译/index.html","4a5148896e88087b1623e7a60849f694"],["tags/同步/index.html","c740e6febf40d1d0a2bf81d3c9739c0e"],["tags/后端/index.html","a3691bdaa1a2bdcf1ae1695a4e35d2d1"],["tags/命令/index.html","61aa282fed46066639e0e0c034e9b28e"],["tags/和平/index.html","ad50c4f97018d713c0bf20890b81d07f"],["tags/响应式/index.html","67a7d4ba70546fbca863d8f28c01ecc3"],["tags/哲学/index.html","309b0e1e9528f4a0882916b6de61ef3b"],["tags/回家/index.html","99212f74fb9d922ac09b3899546f0fed"],["tags/回忆/index.html","a84bae1d057021226946f81f5a960b41"],["tags/回顾/index.html","80ac95f18a800d82d8772c1f7d829de6"],["tags/回首/index.html","a5307404149790aa31a8dc0bd2440534"],["tags/图床/index.html","dfe469b1a328bef07627b182870efbd1"],["tags/图形/index.html","28cac94a1f14174e3e223a21271df0e8"],["tags/地图/index.html","da046b13de9d0df7ba2b58ceac8b1ea1"],["tags/塔防/index.html","0e09893f7c753d04a3eb4abe56c130a5"],["tags/增强现实/index.html","ab3ab5abbee969b991f5efd4ae003683"],["tags/壁纸/index.html","59f96acc34982ce95f082f56afcf7329"],["tags/夏目漱石/index.html","f11d4ed571977ac3068ef64bc67fe6a1"],["tags/多线程/index.html","c9b608287a1e373f33187267fbcc2d03"],["tags/大护法/index.html","91b7473f0197a180c9fad8ee5deafc72"],["tags/委托/index.html","31e9ca0d4fe0d0436dc23aae6fe1a3f9"],["tags/孤独/index.html","a070f0d0ad3efbfc6c2d1b5d5caab44a"],["tags/审计/index.html","5831b0827f7351bb1b853fb4b2127660"],["tags/展望/index.html","1d235ec4e3fa0119f57515f88b778c2d"],["tags/工作/index.html","28d2e6554d3ab05454474cdea020d12d"],["tags/平凡/index.html","adbbcef054cc3f7c7f0c5a15ef662c89"],["tags/年华/index.html","316fc5a58866bda3e229aaa2bf7670b9"],["tags/年度/index.html","71c3d95d5a38f1ce2149c150d7cbbd6f"],["tags/开源/index.html","01cd112038f2eca191c8bf420c5fda86"],["tags/异常/index.html","3f49af53c89d5e9d8de65e4b58e0869f"],["tags/异步/index.html","75be61f0436b31770060e8ee77ee2f4a"],["tags/引擎/index.html","04d2c2b505119177193cf332f4b200c9"],["tags/影评/index.html","6adbca3a1ff3c90135f349daa39bbcd8"],["tags/微信/index.html","8ea626587908394a2763d5b6325b8fcf"],["tags/微博/index.html","f36249bc526cdb8a3cb959218d59c89c"],["tags/心情/index.html","3f245e6a84c8f58bc4d7d99ce2b6b1bf"],["tags/思维/index.html","ad9afae52f3299ce82621652df37a136"],["tags/总结/index.html","43ee7bbfb01d7de1a6e949ea9436d33a"],["tags/想法/index.html","03cd2db731dc0986f337b74ab281a81e"],["tags/感悟/index.html","714bb4ec39b99f7abe29c3b2fd4faedd"],["tags/成长/index.html","7b3da7598d939145e7960e7936b5bf91"],["tags/我是猫/index.html","146b184ae5aeca82b3beb90ef8c6f119"],["tags/扩展/index.html","6c24ef7efa84dad63bd566eb8ee19f44"],["tags/扩展方法/index.html","81818b3f6a8f134de4f1b5fa122ea15f"],["tags/技术/index.html","fe3b82ae619de3b2e208fbb94329ffc3"],["tags/拖拽/index.html","6aa65b3a28a80b3d673bfd09a90e3003"],["tags/插件/index.html","62683f7a9e1799a4b63fcccbb634ed27"],["tags/插件化/index.html","a668c9e4118638d3e08d98b80f23525c"],["tags/数字/index.html","01023421ab5d12cefdf4f5fbb98a8ff1"],["tags/数学/index.html","b792ca5d0c4d8076f8dc74b83b803905"],["tags/数据/index.html","90b17687fce1a687886a8e4e9870af9e"],["tags/数据交换/index.html","78c8f382b82ed462caa318c13a0ce505"],["tags/数据库/index.html","6d8efedfed515a7f773a594d6650679a"],["tags/文本分类/index.html","a72239f7c225e98eac14c57a9e72af1c"],["tags/无问西东/index.html","1bac7e2260b2714bce735eb06773b89d"],["tags/日剧/index.html","42233ede6622358755cc8a89ab199d1e"],["tags/日志/index.html","dd277b9a3695db7fa6481144dfa572c5"],["tags/日本文学/index.html","1490d0c964b0601ac1a1a91db6f43b6b"],["tags/时区/index.html","d2b142f10a8b789c811f2c0a8c2a9469"],["tags/时间/index.html","4a4745e4851ce234eb376af00d4b08af"],["tags/服务器/index.html","074e645a5808940786c337f6457e99b1"],["tags/朝圣/index.html","6c924fe17c7cba769243866edd030a4f"],["tags/朴素贝叶斯/index.html","932851088a600b0a82a87f171746847c"],["tags/架构/index.html","da3a021abfcc1203201d861ccceccfb1"],["tags/标注/index.html","2ed8889af178e9304978ca17350c5072"],["tags/校验/index.html","2055bcf7811b97f5c2870cdd05fe43d5"],["tags/格式/index.html","f38263229b9aa33fc9e3b37d7167f7f4"],["tags/格式化/index.html","1f574f4eb5277b31a841f253696c3fab"],["tags/桌面/index.html","c1e006528cf5e58a84e601c7651cfd8f"],["tags/梦想/index.html","5b40d740c02a9d458b549f0f42ab599b"],["tags/概率/index.html","a90ef8b32a627fd549bc290aa521c09b"],["tags/模板/index.html","ad7f047e4555b716aa773f19e6bee184"],["tags/模板引擎/index.html","d49a7d3b2ebfa9e891813fda02a0cb7c"],["tags/毕业/index.html","cab5767c15555f206cfdf88804e812a7"],["tags/毕业季/index.html","c2c5b3c9c52c709214d8109de510b714"],["tags/消息/index.html","edef1b5821dea69735b2dd5ae8dba17d"],["tags/游戏/index.html","cc6d39d69a0d60f768706f340ef0292d"],["tags/游戏/pages/2/index.html","92b9d2c2cb6c1602a666bf77dae5da3b"],["tags/游戏开发/index.html","ba721a2bb4a4743cddb96ac0e063c2f3"],["tags/游戏引擎/index.html","370e6b1309c7ca8f31e2a8a5149ac43a"],["tags/爱情/index.html","852659672a0399a17a82579590e02d49"],["tags/版本控制/index.html","db1c545eb36c8d33258c60b8c06bfacf"],["tags/版权/index.html","0e873a41ead78bc53f17ba95f345de2c"],["tags/特性/index.html","acfd99a923123bf1c627cd1b971bee5d"],["tags/状态/index.html","9bf65cda7e7ebc28d763e87cf09a63c8"],["tags/现实/index.html","23f01c22569cf0aa49ac74bed1166bf4"],["tags/生活/index.html","179d6d664213a6e4af4e9a358dd79712"],["tags/电影/index.html","a559376aa3e148d926ce7ff9a563bbbf"],["tags/画家/index.html","826db9f019eda513c44109fa85d8414e"],["tags/知识共享/index.html","4fd6725637bfd52fd4d2aec18e5ef72e"],["tags/矫情/index.html","fa7844b4ad796c3e575f27b3624e7a9f"],["tags/程序员/index.html","15c9cca8dd8196fed1e0e6b21411642d"],["tags/穹之扉/index.html","3612c7268db152eda73f3d0488a4522c"],["tags/穿搭/index.html","c2367b76cbb76056f26dcfba20153e7a"],["tags/童话/index.html","3d153a079f3f3c60436348310d83bed6"],["tags/笔记/index.html","7936dcea96d38f5c3230a4e540ea0d3d"],["tags/算法/index.html","ba76239b759db359b27fb18f505c000a"],["tags/米花之味/index.html","cd259126d53074858bbfd0e4ecc10422"],["tags/缓存/index.html","e1b1b51cfcfc0a036aeabbe176d8a3f6"],["tags/编程/index.html","fa2ff38d4c297dadc015587263cd4899"],["tags/编译/index.html","81836247db90749a9294d6b1f2429002"],["tags/编辑器/index.html","1340634e243588aff7d9b81fcb7b808a"],["tags/网易/index.html","69e440adb1403be79decca7d832959c7"],["tags/脚本/index.html","f7922f4827acacc3967e7b0354d6eb6a"],["tags/脚本语言/index.html","b9dd88a728ae9b4c8ba914a3162a5412"],["tags/虚拟摇杆/index.html","9b4b1f6c41df1d296abfe0924ca8ff3a"],["tags/蛋炒饭/index.html","9a0bd462364f242703f05f0d129a6520"],["tags/表单/index.html","01bf9a1af3265125579133be430758c2"],["tags/装饰器/index.html","1c5c9c25dc9a78bdbfdfbe677d7d2046"],["tags/西安/index.html","6256c210a7095715ab62ed69845e9255"],["tags/计算机图形/index.html","58c2506f0a522cb32415b252dcd7ce90"],["tags/设计/index.html","6d764dddc562ddef562b723757504cd0"],["tags/设计模式/index.html","ca1ee33719511c3b1eabc2d57682b7c1"],["tags/访问量/index.html","a7d86b399ab6af611691386e0efc1dce"],["tags/评论/index.html","c35b7ba92050ae0ff2f1a18de27ed2e4"],["tags/词云/index.html","6cf7b93155600984ef95fe06a623c895"],["tags/诗人/index.html","34027d20d2f9f5f00918c4d62319a004"],["tags/语法/index.html","c2a26e9e3e08dc4df17d41ca9bca412a"],["tags/请记住我/index.html","3259ea46f93318219ba9ed112e4759aa"],["tags/读书/index.html","c488af669f2fe54609e4dd16923ef23a"],["tags/读写分离/index.html","545078133b8cbd92085f00e667720c17"],["tags/调试/index.html","eb31783baa36a6979563b358dd2728fb"],["tags/贝塞尔曲线/index.html","37d4b43a85f87b8ac5be1239c31f93df"],["tags/贪吃蛇/index.html","7d7b37a876a9bbf7f09a116dabf32722"],["tags/资源提取/index.html","98ee77e9c1b9a9445645e9c554b53f46"],["tags/跨域/index.html","c266b563199983b6d6d1b33b98b9801d"],["tags/跨平台/index.html","4e505d74519957704a2dd5272d5d0275"],["tags/转盘/index.html","e7f7f5a8bd303c867ebb55963f8f2e1f"],["tags/迁移/index.html","b829c928760cea736da461ccacd2191c"],["tags/通信/index.html","01d48b6be84a92fb2b3e4440af3a5074"],["tags/邪不压正/index.html","c2683c448b3914fec7ba63b08d7ec633"],["tags/部署/index.html","9e082e9ebea7f4006d6ea93d534f9bbb"],["tags/配载/index.html","50d7bdcf76a1a5854d3c591871c76a35"],["tags/重试/index.html","4ea9cb4916887efc5f30e3a9084c09e1"],["tags/长安/index.html","9564cda9e51f7bc781612fc70dd94ab9"],["tags/长安十二时辰/index.html","958c9e7d7f7f14d147e1a22aa943c943"],["tags/阅读/index.html","bee31ce527f1db77d39464a2e37525c3"],["tags/阿里/index.html","f96f1a709d58422f981b0629349d2c5a"],["tags/随笔/index.html","aaec858a56bc36ac1750c0e2fedefeed"],["tags/霍金/index.html","9e90b5fd75f018fdb63812f8972042e7"],["tags/青春/index.html","936e1504a997b61ebea5a08edc3c5362"],["tags/面试/index.html","4dbf7ad37b9edfc54e1319a45543aca7"],["tags/韩寒/index.html","f688da564a8071ea007c53145b74dbf3"],["tags/马尔克斯/index.html","130ff27e707ac6593826fb443bdc6d4e"],["tags/验证/index.html","aac2931710c0ef65d709c07727e2b1a9"],["tags/黑客/index.html","07e7815ff6bcff5992b355dce2818347"],["wiki/index.html","5a2ce28d1c3bc3e89f8be9a89322d974"],["works/index.html","11204c115ba448003fb9ffd483f14af2"]];
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







