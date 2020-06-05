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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","04cd43ebb9e256fec307324e8034df41"],["archives/2014/12/index.html","47f8c5ab1ac977f709c3d690b24d4677"],["archives/2014/index.html","f1a744ad609dd14da087df8e4cf77d43"],["archives/2015/01/index.html","6fb949da9dc36adee749ee6953c0f92b"],["archives/2015/02/index.html","c79e8067b454919e6aa4a1acde23f370"],["archives/2015/03/index.html","ff58a31129b9aa6668386c9474b33309"],["archives/2015/04/index.html","c6a4324153e0924f4941a1f8d9a99963"],["archives/2015/05/index.html","2c4881f68492f0f62f4edac96ba2646e"],["archives/2015/06/index.html","172bf4b1731c35811c97e66659586bf1"],["archives/2015/07/index.html","0149e27327cd87e21867559d453da2bb"],["archives/2015/08/index.html","246274d8c728b18b9218b22044f544f8"],["archives/2015/09/index.html","def136e5c0d06f2e4ef911320a98310a"],["archives/2015/10/index.html","90ffdaf0f73738c98acf7a0b362b3b19"],["archives/2015/11/index.html","0fd287a3a70c7d9ee872500622e97de3"],["archives/2015/12/index.html","1a72d791b2935aa9b3f6a087680c165a"],["archives/2015/index.html","ec597978ee1452811dce38f905e301f8"],["archives/2015/pages/2/index.html","065c115182b71c56c638f115a97dfaf9"],["archives/2015/pages/3/index.html","69cfe921f213d9a70feab6c28be31ced"],["archives/2015/pages/4/index.html","b71feda11f405e8d1b159154006130c8"],["archives/2015/pages/5/index.html","e714ddcd801d29613d52ef4077d4cf1f"],["archives/2015/pages/6/index.html","dcc461d342d178a9cf7b8a2b981873ec"],["archives/2016/01/index.html","b985f56b3905f1bf3be0cd17210d8147"],["archives/2016/03/index.html","a95597cdfec386abe346df071a95e490"],["archives/2016/05/index.html","af352009958cfa35d7b3776c59432c42"],["archives/2016/06/index.html","82740b5f76c2e5c049d2bd973d771d91"],["archives/2016/07/index.html","55fc44be2e349cef6abb6f40e9185a23"],["archives/2016/09/index.html","602fc4e0e6bf1ab170a8ba3c124cfdf2"],["archives/2016/10/index.html","9d61ac9f182fec849a4c29d933324f6a"],["archives/2016/11/index.html","f9fc771aa0b3df8ccb12c0059de6640a"],["archives/2016/index.html","d73db68420d02d5e9fdbee5553185c90"],["archives/2016/pages/2/index.html","6cd642d63af8f21d2dbe4d084e701c16"],["archives/2016/pages/3/index.html","567fecd793795ea7d1dfcaffe6da64b3"],["archives/2017/02/index.html","2e1e38f9f1f72f5fa3f257248e9e4c72"],["archives/2017/03/index.html","61c849831e99d3107e3f01080e90984d"],["archives/2017/04/index.html","a342e2d8ab93357d73a3944409dab035"],["archives/2017/05/index.html","ae93c9467c25fc033cf741ddd256b5b8"],["archives/2017/07/index.html","10c6265fc2e5476d1e94596bab31da3e"],["archives/2017/08/index.html","74c2817fa5b6ca207ffecbddfa008548"],["archives/2017/09/index.html","0321194e5d6b62510356771999375fd0"],["archives/2017/10/index.html","6a947d7fe057faa58ea11183c64fdab3"],["archives/2017/11/index.html","603e6b8b7a96dc024dff95446cdb9bae"],["archives/2017/12/index.html","fd4b01c5674bd78edf44db43d16cf438"],["archives/2017/index.html","4bf5b24d44501651fb1bafd370a47209"],["archives/2017/pages/2/index.html","48964c871d0ece46696d4e4046cd3726"],["archives/2018/01/index.html","2f95ae64bcfde5fe631bae7ca32f6636"],["archives/2018/02/index.html","57a4af7f89ad1c51bf5e872c0ad7b2cb"],["archives/2018/03/index.html","9e96e74923a39b7870f691cfe1740e55"],["archives/2018/04/index.html","38b89d219c843ac88b5904a294538e4c"],["archives/2018/05/index.html","641f5b670c67a9794ed3737ee2a13169"],["archives/2018/06/index.html","4a85eb6fdbb900bba6de3dcf007a0378"],["archives/2018/07/index.html","d78f908cea4cb4142ec873da994fe1dd"],["archives/2018/08/index.html","bf9a528e6ce35ede80980f8125dcdb9b"],["archives/2018/09/index.html","14e423497063db02b33a81d2449b6653"],["archives/2018/10/index.html","c2a82c790baeeac363732dc5799237bd"],["archives/2018/index.html","d85aa633df263e220e1b6872bda2509e"],["archives/2018/pages/2/index.html","3e4a7fe9371dbbd594f797f9816088f2"],["archives/2018/pages/3/index.html","5d481455a96559c6252015ecc73760a0"],["archives/2018/pages/4/index.html","b512b4a851fd3e4a3c0bb459cfd868dc"],["archives/2019/01/index.html","6f178691762a2b1816572cae3265e76d"],["archives/2019/02/index.html","7c4ba208db4c443a6d08ca344e84d45d"],["archives/2019/03/index.html","c94c505c59dc9d890d241fa348432bae"],["archives/2019/04/index.html","183ca5987ab919457d4a56ef1a080aff"],["archives/2019/05/index.html","41da644382cab46a3fc6de5a2ce416b7"],["archives/2019/06/index.html","6f8e321c16dcb31e2be9b6d0311586e0"],["archives/2019/07/index.html","69ad4e33ca5d0263f5f48e700361a14c"],["archives/2019/08/index.html","10ce51390023b37656c8d52c68415111"],["archives/2019/09/index.html","67ece9f94d0f9eec2ce98aa40d1395e3"],["archives/2019/10/index.html","11e75c04b96aa181b8eb613c7dc7c965"],["archives/2019/11/index.html","7a3e2427a0152acfce96de8b045b0c45"],["archives/2019/12/index.html","2695dff5ab958af53054eb95f3fc88b4"],["archives/2019/index.html","0438924af4ec2c2eee4352169d83a3c4"],["archives/2019/pages/2/index.html","d83d7dd68579a995776bbff0a2338463"],["archives/2019/pages/3/index.html","fdf943240b402e96eb7add72caa69c3d"],["archives/2020/01/index.html","15751c42c5fb496e34f82ed0b41800e6"],["archives/2020/02/index.html","9bcffe6b53dee7c7d736a4aa6e5e2386"],["archives/2020/04/index.html","9646ab359b45f8345106a3392ed6f10f"],["archives/2020/05/index.html","ff334d3d873fd8ba89869160a0cc372b"],["archives/2020/index.html","18fe53b7ad9c2fba17fa7049c1128af2"],["archives/index.html","94cb43497950115ff183e81c6911657f"],["archives/pages/10/index.html","cd81af3a4da8c6dc2f462e3342747350"],["archives/pages/11/index.html","0219da7e4ace63a52e49372fb6f0e173"],["archives/pages/12/index.html","f0f5c65659babbefa899237edcd433bb"],["archives/pages/13/index.html","0f613d6005aae0173f2ac18af6d3b714"],["archives/pages/14/index.html","efbfb00a3639b5b15f6ebd6ce5635228"],["archives/pages/15/index.html","700442173949917269412ccd4578679e"],["archives/pages/16/index.html","0267982e8c8a50c69bafb98eec63f527"],["archives/pages/17/index.html","4cd80ecd85d1b480d6c9f35ec858b6d5"],["archives/pages/2/index.html","897d4a7e10b2dbd82ff937b59ce71496"],["archives/pages/3/index.html","550b05d224ebabce3d4167ce12548127"],["archives/pages/4/index.html","229561043bff6c253d33df8d29d48cc9"],["archives/pages/5/index.html","1488de0daa1fe00081bcb15218d171ca"],["archives/pages/6/index.html","32ac6d779535d0a019c5d349cc3ac39a"],["archives/pages/7/index.html","f3ace9bcccc374b5d3bfb405d374750d"],["archives/pages/8/index.html","85fd6ddd2b686b1a67a079ab1bebbafe"],["archives/pages/9/index.html","f9fbaedaab93efd03445e2ef46a1d8bb"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","c314a871d4d72eb014edaca223b697b3"],["categories/Unity3D/index.html","5479acb279382ff7c5036736afbdff97"],["categories/Unity3D/pages/2/index.html","95aab92b5baacfd694952780757b2851"],["categories/index.html","c7c16e72c81254bb8da582ed8de7accb"],["categories/人工智能/index.html","8ac18049ea11f2f6046a48f39c43c3c4"],["categories/前端开发/index.html","29b2fe9c74d9e26d74c42ee229605e77"],["categories/单机游戏/index.html","6db9c9a6b9ec6fbfebc6290087b6356c"],["categories/开发工具/index.html","c76182380b567c8b877160b452b2d07e"],["categories/数据分析/index.html","d78b2b2a4ee500857a41467fc0f4d0fd"],["categories/数据存储/index.html","5531de4ef4ceccf68d4e6d7b6131271f"],["categories/游戏开发/index.html","d19b71b2be5535ba7b99aed775f057c7"],["categories/游戏开发/pages/2/index.html","f7018565ca9d13418bb892e9933f9618"],["categories/游戏引擎/index.html","0fe0ec87bc5bafe32bfb58639db326f9"],["categories/独立博客/index.html","57b1f08de916c8dbfc2bd4747a8afc66"],["categories/生活感悟/index.html","698899383da7b436377427d22f7756be"],["categories/生活感悟/pages/2/index.html","c8125d461a829d6d28d7b0cbe8864bde"],["categories/生活感悟/pages/3/index.html","1cb0d85e1b9bb6cdc2fadcaa4a96be7f"],["categories/编程语言/index.html","00fb020d2472fc5150e63fc08de747b7"],["categories/编程语言/pages/2/index.html","64079fb5595c2dde87962f77e3d8d725"],["categories/编程语言/pages/3/index.html","c7f5459c3c97ea44380a84ff71237883"],["categories/编程语言/pages/4/index.html","a5a4f4719fe2f9714c7cb8a92b5fb710"],["categories/编程语言/pages/5/index.html","8682b36e9fa3e850494b19ca28b60cbc"],["categories/读书笔记/index.html","f43c75bcb738a5652e786a14a4f2b938"],["categories/读书笔记/pages/2/index.html","d30584945a635b9dd0f74e19a17e5ba4"],["friends/index.html","ff864b2eabd59b34dc89355ad824f911"],["index.html","4fa9ca6c15fa1765eb822d1705f7f620"],["movies/index.html","46af227c8e456becd7fbe9b1a5a621ba"],["musics/index.html","33513ce25afb372662cd6c35f73b29a3"],["pages/10/index.html","f29fda3c325cfff25d48cf8944c4243f"],["pages/11/index.html","49fe7f517a06466dfb2a2b8e4c5299e3"],["pages/12/index.html","addf0422a73b28f21e7de9524e3d7eeb"],["pages/13/index.html","ffad708e4793df7e549f7bde1b4c8c52"],["pages/14/index.html","04e8b8d2e860c9879ae3b54f86a4a679"],["pages/15/index.html","a11e700ec210381c572e64d0ee5eebc7"],["pages/16/index.html","f5c46148f3bc98a5d9b65c82ac69747e"],["pages/17/index.html","5c2ff5b5fe2e7d88146f5753d2516a9e"],["pages/2/index.html","092e073927cf8b0d01a3339f51f2a822"],["pages/3/index.html","4d934bcbc9019f164d4c250bacd17c69"],["pages/4/index.html","31707ebf27b1730f2a4931ffbe6f03e9"],["pages/5/index.html","641f6622e26b0eb71586f92b24f0774c"],["pages/6/index.html","677ed643658e168c5060b10699256f80"],["pages/7/index.html","6c3ef5686e712857970f04e83d2e878c"],["pages/8/index.html","37950e3c66584247be1a4a0ea1022930"],["pages/9/index.html","9d44a5e20c7da28b750a6d6480538c97"],["posts/1059499448/index.html","213b4df0876ac554ff3cb9b367396574"],["posts/1071063696/index.html","fb0cc4458a23875129ee99517daf43e5"],["posts/1082185388/index.html","f7e3ee545a04a911f75711006f751167"],["posts/1099762326/index.html","1f4d508994f260c375ce01e8b9e839cf"],["posts/1113828794/index.html","817644e09b24f4e4c593660fa6fb740b"],["posts/1118169753/index.html","1b68995394db759d5d2e594e6aadcde3"],["posts/1122710277/index.html","8399fb7770a595829ece31323013254c"],["posts/1124152964/index.html","34377e4e15916ed6a3a77f979e37110f"],["posts/1127467740/index.html","c7a51055936065d2c110ef3e1f2ee3d7"],["posts/1150071886/index.html","58804e7cef08515b6f5a6a97c5f13760"],["posts/1150143610/index.html","b9365ea600c6f31164affdfacc19f50a"],["posts/1152813120/index.html","90e22780b379b8e1678aeb869b058497"],["posts/115524443/index.html","3d0f9d879bd771859acc86842f7441d5"],["posts/1156673678/index.html","af102953bb2776923f057e7d394db117"],["posts/1166840790/index.html","ce5b95809310cc4839a9c4b20cba09d6"],["posts/116795088/index.html","e7b0bffcd3c2a88e9156b51772e0baff"],["posts/1176959868/index.html","211fbc135a99127f35d0b1f5a2deeb07"],["posts/118272597/index.html","f3091229dde24041aa709faf251110d4"],["posts/1190622881/index.html","ab4900763d1f03077dc124e5d075a4c4"],["posts/123663202/index.html","cc8f4f7a7e154b421e3a2fbefb02ac87"],["posts/124807650/index.html","714e5f3d272f91569f73610c17a8bae2"],["posts/1254783039/index.html","297e9aa4a92db9c126c5491fe4c9e3a2"],["posts/1289244227/index.html","aee45239134d294a99d8de203f2bbe03"],["posts/1320325685/index.html","7882be7fbda6b7b196c6916130e35aa5"],["posts/1329254441/index.html","6229e855843c1f71124f356822e8290d"],["posts/1357715684/index.html","396f301ed1eeaaf3016c2588792736db"],["posts/1358971951/index.html","e40913ab2f91bed1ffadeb9f6a4abcf3"],["posts/1386017461/index.html","c1770426bc480c358455c571299aa935"],["posts/1394521917/index.html","53e6cf9bec31b7309a8b0162e7d66584"],["posts/1397717193/index.html","ab0892d20eac90cf4d1d9743f701246d"],["posts/1417719502/index.html","75448238d676e58dbc718dfd49c90d63"],["posts/1424645834/index.html","652e4989f6da3b30a4d39065aef77ac7"],["posts/1444577573/index.html","ada1633b953749dee743a1ddced072d2"],["posts/1467630055/index.html","b2cf2a928377d5a0cfef4346836607b8"],["posts/1478979553/index.html","e4107e161bb2e0535cbe0bfb91eba5ed"],["posts/1540537013/index.html","fbb3818b0d067edde403f865216df44a"],["posts/166983157/index.html","82e2935cfabe822bd96c28b76de48ffd"],["posts/1670305415/index.html","9f0e2106269fae94644d1838dbd7a134"],["posts/1684318907/index.html","76cdfc4884992477c8c5475cce7a1497"],["posts/169430744/index.html","dcf78c6d2ff929545f12ecddc580428c"],["posts/1700650235/index.html","c5400a49bfa22c4a109c14fbbad91e54"],["posts/172426938/index.html","a7e5a436676605ff3bd8c996a4db5125"],["posts/1836680899/index.html","af2151e294f8d8b8cd3d15d0f5c2d44b"],["posts/183718218/index.html","8a0fbd32f460a9ecf290d14939e0bfc3"],["posts/187480982/index.html","fde803ad61739bcc012ed3743c0b53d3"],["posts/1930050594/index.html","a615510f4e08346db87ac57b5d35d542"],["posts/1933583281/index.html","ec164513bb421ec94a4f7118112b7fea"],["posts/1940333895/index.html","661d206a0d11745427e92a95174c3748"],["posts/1960676615/index.html","39d1250b779a86033444c53f661da250"],["posts/1983298072/index.html","f10004ddc0558ca293a6c7fcfa47d2c0"],["posts/1989654282/index.html","8a8c207f3180650b0e83c0fc9dcda0f3"],["posts/2015300310/index.html","4c9e7585c9dcaf1357cf07c9fe817a2c"],["posts/2038378679/index.html","932e1669a63dd1800d39947c90e074fa"],["posts/2041685704/index.html","62dc0614cda932bd137abfbc5e77e477"],["posts/21112647/index.html","ba32c6f1e4cae1cae20385b6aabf0e81"],["posts/2158696176/index.html","23e0453d6f62d448710469c79420e3ba"],["posts/2171683728/index.html","81be1773a41377845ca293b1eee4d336"],["posts/2186770732/index.html","3de58e4120287a01ec205f9cd20114e4"],["posts/2275646954/index.html","8cc787bf9082073da351bc9282100359"],["posts/2314414875/index.html","5ce2c6f87d2dd170de53d08434502f9d"],["posts/2318173297/index.html","96c50d00a26ae573391ea622ab7ccfec"],["posts/2418566449/index.html","e0f35e4c6c8a63aed8c129e70da53447"],["posts/2436573863/index.html","f771c8bf7188142ae1a5f952606c3655"],["posts/2462008667/index.html","aeec36efadf6aefa9b5b4d119014da63"],["posts/2463121881/index.html","91e2909b5cb1ffc61cdde76cd14f3ecb"],["posts/2488769283/index.html","d0e17aabaec58fb0ca61c5ee5a53931d"],["posts/2527231326/index.html","14d547e07ad243ac7649a5f8bdde89f8"],["posts/2583252123/index.html","c6a03187aba2a57e56710624c4579fd2"],["posts/2613006280/index.html","1c561372af8e31af9fcdc3e20bf033db"],["posts/2617501472/index.html","11ce6c4736795c3e73a529c7f3212bb1"],["posts/2676125676/index.html","0bcd31a8e51f386987c1bab52e898808"],["posts/2734896333/index.html","66e9914b50d7e19b4a024389dcec2d1d"],["posts/2752169106/index.html","4db93c8ab7e3394823b88af6ff33a8f5"],["posts/2799263488/index.html","278d45945fa4457199f47fe2c9ca0173"],["posts/2805694118/index.html","2a80efbf1ad64c699abae5bec998bb68"],["posts/2809571715/index.html","5a4fa4d47fa5dd29c8993ee13f040e44"],["posts/2822230423/index.html","ef096506ab732a6565859471b13d724d"],["posts/2829333122/index.html","7cc77f8c8d9529a1185580dd5d8f1265"],["posts/2911923212/index.html","4b6f524531014e0e05e606638e4d57cd"],["posts/2941880815/index.html","caa700a4d73230e1fd3cdbd170d0eac9"],["posts/2950334112/index.html","7309a142929e99e206b59163170224c7"],["posts/2954591764/index.html","c9afaf3f8b76ce204dbb18c586a2ec68"],["posts/3019914405/index.html","fe21dfee66079477b1f7c90368c26cf1"],["posts/3032366281/index.html","144dad1f2ac8ac78f04b6b3cb7602383"],["posts/3040357134/index.html","75bb8f1bb6608350eef82b4cd295de16"],["posts/305484621/index.html","ca89961e6a2c9cd2d5756622baac6a1b"],["posts/3083474169/index.html","d48b307c49d09a886eefe01d41e4514b"],["posts/3099575458/index.html","995769d305c19716c93dfa0d14fa830d"],["posts/3111375079/index.html","2d6230908050482e08c1a14d25fbaf7c"],["posts/3120185261/index.html","d16ed8c4d7c0ce69c267f9c7d0ccac42"],["posts/3131944018/index.html","525a43f6179813dfa6c40c968b912dea"],["posts/316230277/index.html","6ff1e14baf37e630b3a3bc3c218317ad"],["posts/3175881014/index.html","dab78834915acdecdbc009ff0385f96f"],["posts/3222622531/index.html","610d332fc81fcc864a6f3b90eaea58db"],["posts/3247186509/index.html","6832e0fcae12164af797564747536782"],["posts/3269605707/index.html","ccf6e9e5055367b5d70f06703ac390d6"],["posts/3291578070/index.html","2d3e9b29912a4e5ed3e2812313387e4b"],["posts/331752533/index.html","7d3a781af7bc94d621ac565378c4b5d6"],["posts/3321992673/index.html","6a61293e21eee6e7c5f99638d3b57611"],["posts/335366821/index.html","2d7281ec176164e9545eee4f30939618"],["posts/3356910090/index.html","e3f159d9ab565d81881ca1a28c4757a7"],["posts/337943766/index.html","bf96ca00a80a7f259dc23763a3126945"],["posts/3417652955/index.html","ba9a48bf7d06b6129fdb755fe74d730c"],["posts/3444626340/index.html","fe4f75d044608e92468f3ac412bf1c0e"],["posts/3449402269/index.html","54823281496da3f83620b8c57e01d54d"],["posts/345410188/index.html","6094e239014a748fdd1cc027bf4d9a0e"],["posts/3461518355/index.html","63e5055076e3a1f756058957a623498f"],["posts/3494408209/index.html","79e3059f4a3b987ae01bf0a562da1dc2"],["posts/352037321/index.html","4a1c93688e3a24634cfcbd78a58e711b"],["posts/3521618732/index.html","00720de8f063918ae4f5f466ba60da22"],["posts/3568552646/index.html","90e7886911e43f2cc7470f1e545a1354"],["posts/3603924376/index.html","9f0820328afa407390c4604bc7d8d741"],["posts/3637847962/index.html","178447c0b52171064bc2ae02cd46d596"],["posts/3642630198/index.html","d3bea4758ef63a63db082675c732dbc3"],["posts/3653662258/index.html","11c2e208efbef18a7816e37b9703c8e7"],["posts/3653716295/index.html","c24ceb2c3aa8e78aa7384e66e5164bf1"],["posts/3657008967/index.html","377e4b756a0ac10acc3867d5288be393"],["posts/3668933172/index.html","e8b4cd60daf5b0d78b7b349e49ef867c"],["posts/3677280829/index.html","bfed57c9cf638f45fedb82d1cb21a56e"],["posts/3687594958/index.html","f5df59180f2769b515a8b8290cb79bf5"],["posts/369095810/index.html","df1595327f625b5eb65329788720252e"],["posts/3695777215/index.html","7fb3fcb67d1a4000578091212bdcf9d0"],["posts/3736599391/index.html","4e21c055154b2b51babd4137eb437718"],["posts/3742212493/index.html","7d1a624caac1d53731340cf2a8a06a41"],["posts/3782208845/index.html","542f505cde09e65e59f9ae330087e2f0"],["posts/3789971938/index.html","1ea77a0a0594dd055cc112e2016315f8"],["posts/380519286/index.html","393e308520e51cf0fd88c4cc2ddf325a"],["posts/3846545990/index.html","5148c423b157c9356ca1d5b8efb935db"],["posts/3873710624/index.html","e67d0d94052fcce9bd95309a8a4cf04d"],["posts/3959327595/index.html","a822b5e8e3afa155efe314bf0ad38aa2"],["posts/3972610476/index.html","0e751fe52473a695ed4ddb77051d7b4c"],["posts/3995512051/index.html","80bc2986847ba682a001e591fa5343e2"],["posts/4088452183/index.html","d3f787781c9562a5f31be44a07b6fabe"],["posts/4116164325/index.html","c9ef48ed66a76f612bacb9eca792cdef"],["posts/4158690468/index.html","e83393bce21b7ac414dcb9b243a69aae"],["posts/4159187524/index.html","f6ed4ffb3bfc274d68f67414ec937bdc"],["posts/4197961431/index.html","7ba667ca1c87054a0a83f8a1c8d4f0d0"],["posts/4205536912/index.html","22e40accd69c4268c67aaf57f8305dce"],["posts/4236649/index.html","072e70ab6498449191cc3f45b332937a"],["posts/426338252/index.html","0cfa260dac3bd74f1bfb3f68ce4ef231"],["posts/450254281/index.html","9faa4ec0c3790c23836546384d119f68"],["posts/4891372/index.html","04041b2ce61c51fb9d5afe6d3930b46a"],["posts/569337285/index.html","2cf1714f7b182d088b5addf3441a9617"],["posts/570137885/index.html","79dd9b53d517b21344aa8aabc3c6344f"],["posts/570888918/index.html","98f9945564a934e92ca45c04cf449298"],["posts/582264328/index.html","0451d9bffe8aed396c8e0ff16121bddc"],["posts/632291273/index.html","0c52bef39235cc4091910ba7e4509f78"],["posts/70687890/index.html","c4652e9a7fbe55712c44dbf42fe3245f"],["posts/719322223/index.html","e9fbc1593c983389cfbb332c931fb5d6"],["posts/720539850/index.html","37a3f8a88cfa91fa52824252e8168e00"],["posts/786195243/index.html","e3b08f6af919987c6cb7e9fd6d29ab5d"],["posts/795474045/index.html","11327bc0d8f09dde9759c61cb046d634"],["posts/815861661/index.html","77acd0da28fe3c25b89417a00d19983c"],["posts/821259985/index.html","115a0364d06d92fc66dbb3ce13b3b033"],["posts/828223375/index.html","d40fbff6662e2db6ea74974a0c2df2ad"],["posts/887585917/index.html","66caf5360578222ebd133bd6f2d81576"],["posts/888549816/index.html","53eb05872b7e6c2ee2695c2fe8dd4b00"],["posts/906436376/index.html","4f4d8abf0366700402c98855359ec104"],["posts/907824546/index.html","b3dcf9c5ed2b9f1d87a0f2f1bad1d6ed"],["posts/927393529/index.html","b4b37695ffb05e4c8d779075c2f54992"],["posts/94443781/index.html","37b3efbe1e9cd3a5eb4b4dd7a341b982"],["tags/2014/index.html","a736c4d63f999beecdb4b401facdd9b9"],["tags/2019/index.html","d1a0f6ebf5f6a68f3a661ab9c5df483b"],["tags/AI/index.html","cf51e791383388dba5acb0cfe38ddace"],["tags/AOP/index.html","beb51e5b20cbd89ac9b47bc5c9cd803b"],["tags/AR/index.html","79e20f2dced4faafde4d75abb293121d"],["tags/AssetBundle/index.html","c3fce341dcdef6f96dfe0f90ef11b531"],["tags/C/index.html","7f289ba6c95534e9975ce82c31f081f2"],["tags/CDN/index.html","ac0bbbee1d65aeaf16176d78fcac5274"],["tags/CG/index.html","7c903d92c0cb9559ccc06f2db807466a"],["tags/CI/index.html","623f32dc7e803309ae1c96f7c621b0a6"],["tags/CORS/index.html","9dfe28b4a3519aecd8eed7048e76a989"],["tags/CSharp/index.html","93131cb769c9ebdc32e5707e76b7981a"],["tags/Castle/index.html","73493ec35a6e7f5d56cb1ad9343bae2d"],["tags/DBeaver/index.html","9fce3cbae2dd79f6c3f7e54df852ebde"],["tags/Dapper/index.html","3dada1bdb5b3f3410aabb3c78a5615ec"],["tags/Docker/index.html","bcd2ebd0835e08336352563a021842ee"],["tags/Dynamic-Proxy/index.html","e2e0da6cc81b6af1e9e8e24260d890c3"],["tags/Dynamic-WebApi/index.html","62482b348411c8307ca7b857b2cf4987"],["tags/EF/index.html","e3e6a2430a5ccbf1bbf84122acdd2856"],["tags/ELK/index.html","35b117abe988e35a5feda45f2e02a7a1"],["tags/ES6/index.html","3785b50176c0cf2ad939d14930cc7350"],["tags/EasyAR/index.html","e44ecd96e56372ddb9a5e5b7bee5a818"],["tags/Excel/index.html","42ae883c279211a2cba75da2f2d93012"],["tags/FP/index.html","b09a1ca0a1619b1d0ede3af1088df359"],["tags/Form/index.html","c4087be36a3369262432413df3aa129a"],["tags/Git/index.html","a69249d5ae22c41860382f970175f477"],["tags/Github/index.html","77a7b916588d7fde43a91d3fd8a3e2d8"],["tags/HTML5/index.html","01c360dd43b82693a38b53fb67857b5e"],["tags/HTTP/index.html","ab9e0fcaea1384081e6c7080ecb6bb40"],["tags/Hangfire/index.html","53eea294cf2fc04e962806c4abac2f6c"],["tags/Hexo/index.html","8388c238d064fa0b9820f27567f3b572"],["tags/HttpClient/index.html","e9214e6fcff155b10acf57eae6acbe21"],["tags/Hyperlog/index.html","a201c52a46200dc9d20d48b5089a7ce1"],["tags/IDE/index.html","3fd52f86943c9ff65d4922b4bb4383f2"],["tags/JS/index.html","3fb81241ce5abade20665be0589d4c8f"],["tags/JSON/index.html","394e165b41d5abb895cbbbba4c0d5937"],["tags/JSONP/index.html","66f02f841538579f62970053c39a73dc"],["tags/Java/index.html","b28fff75e31f9f1513f09e455b023d46"],["tags/JavaScript/index.html","1dd160d288b5da34151ea88ca7aed85b"],["tags/Jexus/index.html","0407292e1ec8157f2483cb33851e9aef"],["tags/Kindle/index.html","ea4cbf72eeaf00310908bfeadf3f9b3a"],["tags/Lambda/index.html","4e4083fc01eb3fb90d6b078ea1da2890"],["tags/Linq/index.html","723bbdeb0f53650585e2c23bcc16d311"],["tags/Linux/index.html","9bea53f50d8ad84cd3852c3e21b6f3f0"],["tags/Liquid/index.html","0d40d7edc8b468a6407cc370c23a478e"],["tags/Logger/index.html","9c0b6e970b03072bc4fca20441e6eed4"],["tags/Love2D/index.html","7fad75cb93bb11224e92af863532098c"],["tags/Lua/index.html","0280fccbf74c289401ad95c8ac54c9a8"],["tags/MMD/index.html","2323905e29008332dbf354529ea00fab"],["tags/MSBuild/index.html","e9f2e78821a8b1332e2a8b8ebb03c286"],["tags/MVC/index.html","ea846874d06b5522510823242b549fb9"],["tags/MVVM/index.html","5b46086118b8c2fb6b7c6653f5bc1de2"],["tags/MapReduce/index.html","1c34f737aa8f94d5a7cd79d58c017bda"],["tags/Markdown/index.html","c373a5325cedc6c23200a7b472d5464e"],["tags/Mecanim/index.html","826a4d69a1fe5a22b1da9c828d764618"],["tags/Mono/index.html","ce00a5d7ec0a62c6e240392419203f43"],["tags/NET-Core/index.html","bf654db9e865934a452090401b98f4b0"],["tags/NET/index.html","4717012f5ba50598b9e2bffb3097cb1b"],["tags/Nginx/index.html","8af51a67a5dbdc9b2ee32a9652218f63"],["tags/OBJ/index.html","5af23f1a8b30ab2717aa7920ce8ddd6f"],["tags/Oracle/index.html","e2d08ca773d70a246ef7dd9da7b3500c"],["tags/PL-SQL/index.html","491b7e715fd4e2c8e71a62515e5b9d5e"],["tags/POCOController/index.html","9ef417d23d7ed6bc138e1f720476d0fe"],["tags/PWA/index.html","ce915b9cf425f87beb314629ab76e6b2"],["tags/Python/index.html","465dae05f93ae5b699b1b43c91e3bb8b"],["tags/RESTful/index.html","60a18e5060ddd672a266e6ef1e63da2e"],["tags/RFC/index.html","2a9d8d700b800d8ecf9341d0b989ac94"],["tags/RPG/index.html","9947b25b1bb2e0fd2f71b5503d3e9e0a"],["tags/RSETful/index.html","2e2ce161aa9ec572aa45b12ab83389a6"],["tags/React/index.html","62e221a6e688b22b476bd53b56c4dd2f"],["tags/Redis/index.html","08ad54295d4a9bde918a7624885d6f20"],["tags/Referrer/index.html","0b9fa73633120342c1da2ef5079234f4"],["tags/Retrofit/index.html","b87d6dd352b46c629e4a85f475f226e1"],["tags/SDL/index.html","2b603583ec104ec119867e08de3b6bc7"],["tags/SQLite/index.html","91d616fd8ccabbfe5e9d157fdee5417e"],["tags/SSE/index.html","89291f0b8b8c0178ab1b44144a1b44dc"],["tags/SVN/index.html","08764b74a74012236095a70eecc9fb25"],["tags/Script/index.html","d932f9283de1e6726dd499b551c374aa"],["tags/Server酱/index.html","b823665541022486ef9a363a015dec94"],["tags/Shader/index.html","d1c0ba7b982ce61024b00170d4fde74c"],["tags/SignalR/index.html","4267dc039d368c1b898ed48cfac44fb6"],["tags/Socket/index.html","eeadc92c1e88a34314cb504f99678b8c"],["tags/Sonar/index.html","51fddf4e803bf656528e6846c08b125e"],["tags/SourceTree/index.html","f0445d407e782baec50b4376740cc9e2"],["tags/Sublime/index.html","6c41be5260c18b16c6da47e2d5e674d4"],["tags/Swagger/index.html","a10949b46777932660f9c7eb561b7eb7"],["tags/Trace/index.html","374177a7f0672ac0cf8a161346b487ce"],["tags/Travis/index.html","139c3f8938632b352a2d7a476e18e197"],["tags/Unity/index.html","ed8eaf2eb99b55914da56363ba575a77"],["tags/Unity3D/index.html","a758aca3bb03ff7284adbb1891055515"],["tags/Unity3D/pages/2/index.html","87a1fa2290b37513b7c181c48f3415ff"],["tags/Unity3D/pages/3/index.html","78ef5fd5320a7027b22eaec24a28476f"],["tags/VSCode/index.html","1eb698bec36a032c74e07dc1362b94cb"],["tags/Valine/index.html","205b0b30ca40e836a18fc1d73ae7f0d0"],["tags/Visual-Studio/index.html","0246cb3e55625d446dc32d6e39cc916e"],["tags/Vue/index.html","2852d5a8f6feee5cd09ad855888ac7b8"],["tags/WSL/index.html","d113f30819572c9a62707ed7e5d21a4f"],["tags/Web-API/index.html","7e9277717d2f41eb55c857eff8ba8bef"],["tags/Web/index.html","dae313919f211a659ddde606b845b5a6"],["tags/WebApi/index.html","8384395c1871786b0ec793a015e08041"],["tags/WebSocket/index.html","28691ddafc31c01bf2170292fae340b5"],["tags/Wechat/index.html","f67368b0fd9065547eeb77c099767e40"],["tags/Windows/index.html","efe6cad1f3eeb885caf683905aa9be21"],["tags/disunity/index.html","84231f4adaa0102df3e212d4905e6c4c"],["tags/index.html","95b6c24acfafe375f8325fbc791df8db"],["tags/jsDelivr/index.html","b73856b35e3d9613a3d31423615ab3ff"],["tags/matplotlib/index.html","f9ee9689518a5e178146feba476781e8"],["tags/uGUI/index.html","c869df866bd46e7734c06eb4533001e5"],["tags/zTree/index.html","201d7e1d4bee646d5f93fbaf35f6e39c"],["tags/一出好戏/index.html","c6d5683132cdbbd334b23150b7898345"],["tags/七牛/index.html","87b34dfb56542e8c8dc21d7e29e55e0e"],["tags/主从复制/index.html","38cd21d7aa57839f9a49827e79137b01"],["tags/事件/index.html","f5687bd2bfec194864e58ab04f1b21bc"],["tags/二维码/index.html","678628930d8c41a4ba506b4cfcd38f6a"],["tags/云音乐/index.html","43f5ab412486d3d649e6f0fceb5e7bb4"],["tags/互联网/index.html","effde87c1dfa749be0c72ace66612556"],["tags/亲情/index.html","5bc677d770e2465fe4e66f4462c70a88"],["tags/人文/index.html","9501e12badcf3b67c79a691826b85b3e"],["tags/人生/index.html","e9efb0b75fd58700a5fe873ba438d362"],["tags/仙剑奇侠传/index.html","dd1e8c82b1a72f3a6627068aa5dcf9d7"],["tags/价值/index.html","4b772d3c4432e3aa89c5485e71749490"],["tags/优化/index.html","141800c856503124dc9691852f5a157c"],["tags/全智贤/index.html","25851af97a41b3591c9f25cc69483b47"],["tags/公众号/index.html","ac288de98753711df3c970c18a6af232"],["tags/关卡系统/index.html","d2710c899bcb727625a2ef9d6b620426"],["tags/函数式编程/index.html","501e773df1e4a7bfcb0652b84849ebc7"],["tags/别离/index.html","d6222c398f324522f9f9e6f5a3ae42ba"],["tags/前任/index.html","9b50190d13b8126585fab8fdbe01cc51"],["tags/前端/index.html","be742b164a7367a6568a4e824b2039e5"],["tags/剑指Offer/index.html","58906af1420a7b1b6cf518aab7e6a692"],["tags/加密/index.html","615181069c5e3d08faa6cf3eb2d142fb"],["tags/动态代理/index.html","27636ce7f56d8d0ee23bfb969189beaf"],["tags/动态加载/index.html","4e8668c9be8c701917568baa1fdb6eb4"],["tags/动画/index.html","1742f65f2df8db485f8a46ebd2f0a5aa"],["tags/单位/index.html","873ac90cb1a7c22c35b4565f357e5775"],["tags/单机游戏/index.html","0b18763c95e0c2b2ea8cd61ad22209f9"],["tags/印度/index.html","394e45e88911fa62220271e948721e98"],["tags/历史/index.html","de1638525b57eb2c4dcbd68def01d9b1"],["tags/反编译/index.html","7c5edc5d8894a72e46b4a0f24d6f1d0d"],["tags/同步/index.html","ebac90db8eac70c69fe058077d6b1678"],["tags/后端/index.html","c1984539ba4c41696a5c2f51146a644d"],["tags/命令/index.html","9a224e340882b12b64df3c737cdc7261"],["tags/和平/index.html","9ae2f328d793def8d1d31af080df277f"],["tags/响应式/index.html","c6e3acc0079d6522e3ccdde1cf643cb0"],["tags/哲学/index.html","7113c1bacffb8d8bc193e966d224a87e"],["tags/回家/index.html","c04d9b357988fbd3ba9e3b27eaaed884"],["tags/回忆/index.html","7b3d3ef20c4a3148ad9e8495e25b727e"],["tags/回顾/index.html","25b4861aaa4be224ad4a6350279cc038"],["tags/回首/index.html","fb0c7d00154925299a521d8eab3f2664"],["tags/图床/index.html","933b9b775fb9eb5ded2da23c831703a1"],["tags/图形/index.html","f80342e3bb113f809a2b567097e71163"],["tags/地图/index.html","089a6ed77332b9c992f3d4800dea667a"],["tags/塔防/index.html","40d9b8bcfe0d1570dabeb0ae1445609c"],["tags/增强现实/index.html","7680a73ba59cfd70369b62599c6c51c5"],["tags/壁纸/index.html","cc082e0c613a57a300f4b66591450f24"],["tags/夏目漱石/index.html","589d94544bc734aeb7b880f7e1e84b27"],["tags/多线程/index.html","99252ba49577ccec6def8a58d9d938e1"],["tags/大护法/index.html","f70be514c77457766ffc9fcb864db3cf"],["tags/委托/index.html","8d3aa1ed51c46616ce78b01314adeffa"],["tags/孤独/index.html","f8c4c067fd843d0ac65945f637504a4f"],["tags/审计/index.html","1e69edc7af0add4a3753db961342cbd9"],["tags/展望/index.html","d3524c995dfbec1fe212f1bc8b88a185"],["tags/工作/index.html","0cb78bf2df4c7a318d8cc4a0d8af1c02"],["tags/平凡/index.html","f793dc1caab13eaadd665eeba6d1a5cf"],["tags/年华/index.html","447d3a13b8050dca8304b05a70745d10"],["tags/年度/index.html","b61ef115993d164a233d43b6a3ae4d85"],["tags/开源/index.html","6a8acc1b5ed522bf97ba33910f4df6e2"],["tags/异常/index.html","91d60e15bfda6621c965906a89983559"],["tags/异步/index.html","d1c5e31d2271ab5f0336e1506a82e17b"],["tags/引擎/index.html","f1c265799770a3b8b8f6023259c496df"],["tags/影评/index.html","1fd8423db491de1daa84f3ca0fa88638"],["tags/微信/index.html","56b4a158ea699c90abeb41814bfd60a7"],["tags/微博/index.html","8a314fcdf18d25d651c067ebb9e714d2"],["tags/心情/index.html","d4f5347f7d06ee2bfc5294875c9d4737"],["tags/思维/index.html","fb4500ea8971019092655daa7c47311a"],["tags/总结/index.html","f07bcdb829812d9ec352bc7cdd2c1964"],["tags/想法/index.html","eeed907952f2d9e928fd39b1c8629c30"],["tags/感悟/index.html","4be7f0a593dcd626302e64eefb858b63"],["tags/成长/index.html","e59fe16bfe9d0bae5c814a9aa553a0e8"],["tags/我是猫/index.html","78c704585924dbdbea375c5841571c4f"],["tags/扩展/index.html","cd3278bd59ce5ac7d655c92e6f14f725"],["tags/扩展方法/index.html","c4d5c892d76787cedaa3e550fdace882"],["tags/技术/index.html","a19b53a5d836fec76046caa004420480"],["tags/拖拽/index.html","32213912165fc6e83f2fb5da5aa912a8"],["tags/插件/index.html","b249e86a869a6a9b36c6e7595adcdac4"],["tags/插件化/index.html","d79643bc88eeea5c257d2509631d92ec"],["tags/数字/index.html","b388f176362b9740f3ab25b27efcf6c2"],["tags/数学/index.html","6853468964b6cd6833100909a25e7a98"],["tags/数据/index.html","aca160b45d76482c2e8f14b6126a9852"],["tags/数据交换/index.html","36e24746e159b1a7897e2fd0cde492a4"],["tags/数据库/index.html","d9d8cae02c073e2132aee69293e22bb1"],["tags/文本分类/index.html","cc3afbf5683bb3554266a9703aaf140a"],["tags/无问西东/index.html","c8fc9b37ac738342e21651cf2bef62c9"],["tags/日剧/index.html","389078ebb4e2a967a7a7ad5fd3f2185a"],["tags/日志/index.html","40fc4677721016cf81248c918b03e2e7"],["tags/日本文学/index.html","ac9d836ae20578e08f6ecb8b827c359a"],["tags/时区/index.html","d4635ef9c6943b0d403e28ec84093228"],["tags/时间/index.html","e7a83ee605a0abd6453a5c072d712bf8"],["tags/服务器/index.html","c917d0e31e327f85a4cd75e0e7857796"],["tags/朝圣/index.html","6dd8e2fac5c33f48a32a037bc762c734"],["tags/朴素贝叶斯/index.html","823b96c152cbe6af31a7ccc358cb8a6d"],["tags/架构/index.html","b49dee815d84ece4c7ea996d750cdc69"],["tags/标注/index.html","417168e3675b8a89e93e95ce16fae688"],["tags/校验/index.html","262658f29a358333849fbd413631b7b6"],["tags/格式/index.html","b3382967a4529711ea4ededd07f9b305"],["tags/格式化/index.html","529bc841c81e0341990224d758758be1"],["tags/桌面/index.html","bab3bb0a73c21ad79d9a9e0f34966f26"],["tags/梦想/index.html","6a6a33b7768513bfc8370c6363d7befc"],["tags/概率/index.html","0e62f4ec40641d06c4c2fc45dbd68e9c"],["tags/模板/index.html","2302f59168b89c57a42e41572f3995e6"],["tags/模板引擎/index.html","b3457d8b2478cd96dc3603bcbe8e7cdb"],["tags/毕业/index.html","b1faec21ecc094ed75f8f1d68c9c20a2"],["tags/毕业季/index.html","962a02ca5eb9f8847ba94dd9e60b3044"],["tags/消息/index.html","f5c7f922144c65aea1c3aea46966c5c2"],["tags/游戏/index.html","62dd2bb7e73380b276ce740f96c0b76d"],["tags/游戏/pages/2/index.html","81065df819829311277e04a6ece58af8"],["tags/游戏开发/index.html","50b14efedd7dff2d0f7bdca319b8d8ed"],["tags/游戏引擎/index.html","51ad27802028225d2aa7ea5cc06540ef"],["tags/爱情/index.html","5ae65a85d88615ede8daac90eb4a1d9c"],["tags/版本控制/index.html","8dd9602589a41072738d6c9e76fa01b0"],["tags/版权/index.html","16910adf17b77d02cb4e3d4d741f0bfa"],["tags/特性/index.html","bd75151d9ea466b7de73f6f5f87f8f34"],["tags/状态/index.html","825acf84c9a928e4fe28612ecb383d30"],["tags/现实/index.html","421e286ab845e8e64bfa4a5874d74981"],["tags/生活/index.html","0a267befbc65d9f8d68beb0fd259dfa9"],["tags/电影/index.html","ae2ff03895d9f531bf5e5e98d760f50a"],["tags/画家/index.html","4bdfa63188a09bd79dc54e3c1d2aed25"],["tags/知识共享/index.html","d1dcd4a944b088c46be315c780b4ba5c"],["tags/矫情/index.html","15747ff90ed5b839c3ba3afeaf572193"],["tags/程序员/index.html","a99210754e81b7c6401f215f99ba94a6"],["tags/穹之扉/index.html","f8166bc339b43aec79fb0e8ff2d27c43"],["tags/穿搭/index.html","9cbd250d8b8c3674f7c20a8a73cd7591"],["tags/童话/index.html","3b99eb29a49cf035f9d7f5952a1b4c84"],["tags/笔记/index.html","c4e22200591cfe78f4cd4cfdad34d1a3"],["tags/算法/index.html","6574f65c852dbe7b164bdc5a7581a0cb"],["tags/米花之味/index.html","f965837cee57f25eae73cb00994b47a5"],["tags/缓存/index.html","6c0451839e2bf993b063b995ff3d40ce"],["tags/编程/index.html","1cdc65dc6e8dff51c3adb1ef9c840437"],["tags/编译/index.html","f70c130dd55ca5da2dbda905ba05e237"],["tags/编辑器/index.html","8828c043c9645d0c6315bc0c11804252"],["tags/网易/index.html","92a420dd7cc5ec06b617d45f75288f91"],["tags/脚本/index.html","52c53609ca26a13635a048c50fb5bc8b"],["tags/脚本语言/index.html","1f1199b63b7ec26b79abd1257a118f7c"],["tags/虚拟摇杆/index.html","bdf40b0cac343896d682e369829a9e5b"],["tags/蛋炒饭/index.html","67b20f4a8a4584e977ab4784978cfd59"],["tags/表单/index.html","58a5610a75fc196ba494f6cf3a5f7383"],["tags/表达式树/index.html","022740ea18df9a13a04828fe35cb3173"],["tags/装饰器/index.html","dc4ca2e31f565ea48fa7e49c7dbe0156"],["tags/西安/index.html","f2311d2f3b993af5eb20b78b78c05a23"],["tags/计算机图形/index.html","667a419f587a3bdd4218dfd180570e5d"],["tags/设计/index.html","122f9d3d39191a30adfe14bb60c206bb"],["tags/设计模式/index.html","888b1ba991b83b4cdf24207d041a531c"],["tags/访问量/index.html","6186199d9147e143ad68cc2a76b4356a"],["tags/评论/index.html","592305b15b4abf2b20c98291f0076895"],["tags/词云/index.html","42236ce7b5b3bfa6942fcc9c47b7706d"],["tags/诗人/index.html","fdb93bde159aa51421c601d71c9120c3"],["tags/语法/index.html","ce53118e36581305b3e37de74b8a618b"],["tags/请记住我/index.html","4668e014571f8fbcf9d57e7da85f4d9a"],["tags/读书/index.html","92b3345a5b23ee98e967388a6787a7d3"],["tags/读写分离/index.html","16908eaea5d188841e19557edd491a60"],["tags/调试/index.html","e7e822dedd901dc08c447ee76b502231"],["tags/贝塞尔曲线/index.html","60aa80fe7e3a976dfb6e938c76a42a17"],["tags/贪吃蛇/index.html","fd95ff2d58e2c74eea67bf01ef045f43"],["tags/资源提取/index.html","a5846438566ab0760205cb0012d23574"],["tags/跨域/index.html","1296102ba7671314e8577724c4c53b12"],["tags/跨平台/index.html","a47ba275e59bc25d0530dfd02656c7af"],["tags/转盘/index.html","e685a3694681e1084036e1bc2cacedfa"],["tags/迁移/index.html","e76e0bbbb8c261959de2a16d74cf22e6"],["tags/通信/index.html","67a9e0222f5fd5f66f0b1b058af7eff7"],["tags/邪不压正/index.html","311785ce764c8c330c3637d09fb798b5"],["tags/部署/index.html","94311e8e595d3237aa4728a845b31e23"],["tags/配载/index.html","418c4e1a91fd52ec65d50e79c18e286a"],["tags/重试/index.html","cdc5339ea6aa2b956b5b6a82e943b527"],["tags/长安/index.html","f7a99fd74b182dd7e1c521d2e4f3571f"],["tags/长安十二时辰/index.html","04a452f2c454cae1a77e81d9492d848c"],["tags/阅读/index.html","c0a712c81bbdacce7aa0aeccb49c337f"],["tags/阿里/index.html","0a2afe20b19e669dbdd70b5b5d35bacc"],["tags/随笔/index.html","2b167be8b61ba7c23f4ae57abc9a22cd"],["tags/霍金/index.html","9a9f9596b7a3e8a0beeb7a0c36a8c765"],["tags/青春/index.html","f995f7aeadafe9c7da18ecade9e658e8"],["tags/面试/index.html","72e09aef1814189fa55c0faf3f179801"],["tags/韩寒/index.html","02f5c99d6959e4f139a31ab7d4d12163"],["tags/马尔克斯/index.html","b625a8c171131cc56688cbe90fbd3139"],["tags/验证/index.html","7b0bc742d0a1241be783e95557343b64"],["tags/黑客/index.html","a24e8f124963e8100c4d83eada9d391b"],["wiki/index.html","43945dce6b0ee0d6970014be6423b875"],["works/index.html","0523664efc98e644b41c257d10816919"]];
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







