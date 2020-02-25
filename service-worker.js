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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","a92618d4636a95b1a5034eceaa2800be"],["archives/2014/12/index.html","ee9b7fd227839b8a3d1bc5df48eeaafc"],["archives/2014/index.html","4359a454376aff1d198b3844f5c1deed"],["archives/2015/01/index.html","1cb7a1af96b955b20eaebfed41012cad"],["archives/2015/02/index.html","507d4244d61723962494729900dff4ae"],["archives/2015/03/index.html","a48b1a6def43a6cacdd6c0d7feb5311b"],["archives/2015/04/index.html","5e077af2b5effeb3915a17437a3e910e"],["archives/2015/05/index.html","bfda1cd9a52963b30a1766e73f04d6c2"],["archives/2015/06/index.html","5d8af795063fbc31b4b38949a264cf28"],["archives/2015/07/index.html","223e8d35f861183edcacf87b60ced8cb"],["archives/2015/08/index.html","28adb2101e0345335dca6ba910de085e"],["archives/2015/09/index.html","0523ae613499d7a5501ba1279ebf8492"],["archives/2015/10/index.html","fda2395b50688f951a990948e0e4fde3"],["archives/2015/11/index.html","21e1383ece83ab6a1fa5a0ecaed47bf2"],["archives/2015/12/index.html","128ae1b0710835f57eb4f23c971feb2d"],["archives/2015/index.html","571eceadbbf14c3301ad80ae21532e16"],["archives/2015/pages/2/index.html","ea8f9640e46509ea360596adccf6750e"],["archives/2015/pages/3/index.html","91c8bf61c50ba49a9c8db5fc5a181ba8"],["archives/2015/pages/4/index.html","f0c319682a336ef4057178e769200d21"],["archives/2015/pages/5/index.html","d201e62c90d7c52a322781a874ed8fa9"],["archives/2015/pages/6/index.html","a7a2661733a70f54087482a5a141c25e"],["archives/2016/01/index.html","80b9be1aad935d50c659541f7546a56f"],["archives/2016/03/index.html","24543e1df3330bf47b8cc1324e838e0e"],["archives/2016/05/index.html","3f84578b92767182d55c72ef4142f9b5"],["archives/2016/06/index.html","dc1a6111c289b1d44ddf924884ef947e"],["archives/2016/07/index.html","13033a21a43cd8223836736c8be1f512"],["archives/2016/09/index.html","f1d1797e516ae606c1dff2dc1a0ae114"],["archives/2016/10/index.html","90158feeddcb09ed923b9d1e0241469c"],["archives/2016/11/index.html","92cab2b4fcced8cac941aa06c6569595"],["archives/2016/index.html","de5fb48bc697e3dfcec3b87d712f99b4"],["archives/2016/pages/2/index.html","962758c7276d6685afc42cd0ae1cf33e"],["archives/2016/pages/3/index.html","025da843f2e853806bd7facf96cc0b8e"],["archives/2017/02/index.html","99208c57692dadd2bbb38a82da7a3350"],["archives/2017/03/index.html","8c2e6f48ac61785d419ba25fe56f3222"],["archives/2017/04/index.html","1a41c8cc6ae0d8b92ff578575df4f3ef"],["archives/2017/05/index.html","132272be412b8d3525f5699b1d5854ce"],["archives/2017/07/index.html","e6904a37ee71854ecb8421a208133a9c"],["archives/2017/08/index.html","a695a32d44b2bb847f02a3dfcdf9f0d3"],["archives/2017/09/index.html","11966c99fd343beb6dd6f0328865764b"],["archives/2017/10/index.html","017c8782dd45aff20e9b77f49f1462fd"],["archives/2017/11/index.html","a9d5994a73e318dcf52253e589d31768"],["archives/2017/12/index.html","2948b2f2b54b2415e3f38973d462c45b"],["archives/2017/index.html","5b3ce3ea875f91eb2554ac1b855cd838"],["archives/2017/pages/2/index.html","66593cbd6fe21539d1c461688f4f185b"],["archives/2018/01/index.html","c6f193ac8e3f54ed1e0b72d8c783f5f5"],["archives/2018/02/index.html","28690288b51fc20e2554954d2f79e598"],["archives/2018/03/index.html","768de4b942c5f7fb6ff66b3483180601"],["archives/2018/04/index.html","6d15eed4ef1fbb11755168905618e5eb"],["archives/2018/05/index.html","f1aceb95bb6914ea898c04fbf694d03a"],["archives/2018/06/index.html","794f3cb35ec873bbf97e3cabdd1a1e85"],["archives/2018/07/index.html","de970d6dca8613fe83a4decaa309550c"],["archives/2018/08/index.html","6db782cf46ea061c63630b4b13c6c6d8"],["archives/2018/09/index.html","8fb20583b2a4da028e8b92b194201b0c"],["archives/2018/10/index.html","f996bc3fa83314a1ee34893eed11a897"],["archives/2018/index.html","157fb09f6f9cd74a37d74a8eed6e78d2"],["archives/2018/pages/2/index.html","8df3ed07712ae32ed0ee7ec359875a64"],["archives/2018/pages/3/index.html","7d0a26ef1f4b32e58dede827bfea7e13"],["archives/2018/pages/4/index.html","174209407e503915411de5b6461b55ee"],["archives/2019/01/index.html","0488ef48956eb8db69ab4e29559e6ab0"],["archives/2019/02/index.html","6dac23bf39a0b5d5bc5c09fa15ff6344"],["archives/2019/03/index.html","51649bcc597e3559545c9f0458b1f84b"],["archives/2019/04/index.html","1e178b356ee356436a277dcdafbf5fce"],["archives/2019/05/index.html","c8db1d3419e94e324d88aa774207a1f4"],["archives/2019/06/index.html","9e32010c30952cfaa71baccc12cf7e89"],["archives/2019/07/index.html","c36724b9394e2689a4411657b75154f8"],["archives/2019/08/index.html","9d10a479595831908b833922d6123f2d"],["archives/2019/09/index.html","bdb446aaf6ad1d971e804a36d3b10b43"],["archives/2019/10/index.html","ef693128d9b50269fe55f39e21c187f6"],["archives/2019/11/index.html","32c1e4e3a380ba9e5eefe6f58c02df7a"],["archives/2019/12/index.html","25438d5ff50054adb742e0ed6b9c4077"],["archives/2019/index.html","0f6db7e79c98d526ba4d67733ddd0448"],["archives/2019/pages/2/index.html","44011aa37461d84d5d5594e93dfdb0b1"],["archives/2019/pages/3/index.html","d563705043c158df506921e02c03d64e"],["archives/2020/01/index.html","3b5f395881939f1814eb82d5ab53d3a7"],["archives/2020/02/index.html","94ae90b2eaaea03628fbab06361f1878"],["archives/2020/index.html","b1bcfffacb0086848d81c00225563c7c"],["archives/index.html","f187251613ef064c858b55a75ed9ce94"],["archives/pages/10/index.html","b2b55f2aea8bbfd7606c0db775cbd98f"],["archives/pages/11/index.html","4cf11c33d920e00601ad150860102b0a"],["archives/pages/12/index.html","73358130cc87a2c9020b5588077501be"],["archives/pages/13/index.html","8603c82217a3ccc0156ebc9373dd793c"],["archives/pages/14/index.html","384985dc95637d39d43056a543683634"],["archives/pages/15/index.html","b9ce15688d416be0cd4e8867bf0f6d3c"],["archives/pages/16/index.html","1a53de7a00d40f995dbff2040881b74a"],["archives/pages/2/index.html","586ccb2fde42eebe1f39a63d8df4007f"],["archives/pages/3/index.html","d6d635a11d50e957451bf0a4e707a081"],["archives/pages/4/index.html","08137ae62ab39013538d255a8f813363"],["archives/pages/5/index.html","8384c485fa8c59c23fdfe41a8e9d19e2"],["archives/pages/6/index.html","0cc2ed0c751b35cae9b8bc2a596f331e"],["archives/pages/7/index.html","d240a579ff9a0b217ced37c239d50267"],["archives/pages/8/index.html","9a0d2fbc86d31830c5a777cb9b7d0f08"],["archives/pages/9/index.html","a736426dce708070743a44ac221dc7ea"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","c4d248f1095a8f1f63797160bdf1e935"],["categories/Unity3D/index.html","0ed67c82c3f243577875f3c65f620c7e"],["categories/Unity3D/pages/2/index.html","266bd86e925645b6cab6d2870a49b367"],["categories/index.html","4aafb88252e0b820b05620481184a4e3"],["categories/人工智能/index.html","34c5011915de16231e3cc6fe96a80437"],["categories/前端开发/index.html","b417106ed698f814baa0c28ea00b756e"],["categories/单机游戏/index.html","efacfedcc782cda2b5bd9977939ebc4d"],["categories/开发工具/index.html","afb13fc4e717904398ecc5ac5b6d3584"],["categories/数据分析/index.html","d1a432383307bab7a9057492e38a04e0"],["categories/数据存储/index.html","2a9d33baa4ac5b1f669cc689e603d6e2"],["categories/游戏开发/index.html","7cb2a189a2e07ae7200de220e90650c4"],["categories/游戏开发/pages/2/index.html","93b25160e7c4c4847d16abc2d0c88cad"],["categories/游戏引擎/index.html","3356e4478b74b1dfb98f7c4cb76a88dd"],["categories/独立博客/index.html","0d346279207f508654e0ad40ad7b2b69"],["categories/生活感悟/index.html","02f7e5c301ccc886e7d1a8da42c6c451"],["categories/生活感悟/pages/2/index.html","aee9c3b5fc9573a581feaff2a4a5187c"],["categories/生活感悟/pages/3/index.html","3a111662153459adf2131988f33b864c"],["categories/编程语言/index.html","d81cab398ad175b891c67f69b3a84ed0"],["categories/编程语言/pages/2/index.html","6e9703b5120fada8ca227f208b2e17d0"],["categories/编程语言/pages/3/index.html","8f97b306515c8a992651f6b7d0cef305"],["categories/编程语言/pages/4/index.html","6501f761f789983c9e020ed92da0eb6a"],["categories/编程语言/pages/5/index.html","4b79f3bc35fce09312a772c571246bad"],["categories/读书笔记/index.html","5756ae3694c9a2195009b610a2c9a842"],["categories/读书笔记/pages/2/index.html","2535473d464b7b2818ee6dc7ed629595"],["friends/index.html","6d1ec8a39b5558b2c7d45c98eba0368c"],["index.html","ecdd9565ac77d3ec138bf218ef776936"],["movies/index.html","2be324f3052a6610c0cf163041b3488b"],["musics/index.html","d1d903309c2270bfa996965c6fbee9ff"],["pages/10/index.html","ff62d2a84e94a0202b102006b186cfb0"],["pages/11/index.html","4cbec6c6a8ab2a9f541d005c0cd5a2b8"],["pages/12/index.html","4489d43d64cc9703fa4651a88bbfb6a3"],["pages/13/index.html","2a5bfea2c8eae41f32ef6f9f502e5c3a"],["pages/14/index.html","3a7f67e31161b8c1645f351a5cc4a00b"],["pages/15/index.html","8352a3a941474034b40e942a5ab74437"],["pages/16/index.html","0cbb6a8a170ac22cc87571e896984113"],["pages/2/index.html","b175eab9088ac999209a1fe84611bbe9"],["pages/3/index.html","4bbc243b0a5716d2f4b8bdcfa8f44693"],["pages/4/index.html","75beae26efd9f59b114ae91716463d10"],["pages/5/index.html","c674ce139e67750133d627ecb58b8707"],["pages/6/index.html","6d70118d0e1628ee8b0cd7059db3bd73"],["pages/7/index.html","3176173f35b4eaafafd2f6069d8e7392"],["pages/8/index.html","5d0168751f2d998703bad301e4b54620"],["pages/9/index.html","4935d24faf7a283810f821370c75248d"],["posts/1059499448/index.html","a95bfeda95bc3f94fbc25197da6ba0e8"],["posts/1071063696/index.html","42329aad0ca8b51e52ba21c9458e5eab"],["posts/1082185388/index.html","61c427a379279f8a06cb386fa0f18466"],["posts/1099762326/index.html","2186906a386fc71df0f5cb0c3deb4ef0"],["posts/1113828794/index.html","bcfa6247dd091e1c692289bc73110b9d"],["posts/1118169753/index.html","2309980f42d24deb64b4440123369d63"],["posts/1122710277/index.html","56d193703472c417cc69bfb9810aaf7d"],["posts/1124152964/index.html","2f35b174b579a8322d1a045613dd18d2"],["posts/1127467740/index.html","4f7b3f508ce896367d650b6347089a99"],["posts/1150071886/index.html","743e2cb6d20251eb511ebdadb1c6fda7"],["posts/1150143610/index.html","e6f5ec564ce45e44676fe021d18b4292"],["posts/1152813120/index.html","8b024b8c3f0551067ca8a1f92a980acd"],["posts/115524443/index.html","34e68876ee9f2fffcb170912b5832dca"],["posts/1156673678/index.html","c3379279627c7d2283f9f105e11aed9b"],["posts/1166840790/index.html","6cde1de923c6b9927c77f50c00db42f7"],["posts/116795088/index.html","c8b73bc4c6b3d1b5e8fec42740d502f0"],["posts/1176959868/index.html","d06c79c3424cfa03ca122f3194cfc188"],["posts/1190622881/index.html","a00ed820f067b80b066fb8ae5b534a1a"],["posts/123663202/index.html","4a50f60b64713f689a34a2a6bcf18562"],["posts/124807650/index.html","c9e52d1a6ee5b62cb26b129d9b1135b9"],["posts/1254783039/index.html","46bcd918eb7ded87f84755dd48a48129"],["posts/1320325685/index.html","4ff1e2f50cfd30e18ab522a9aba63ff5"],["posts/1329254441/index.html","8d85eefdd33fc4e8194fcb880d5f80a7"],["posts/1357715684/index.html","b556c5e688365f2a573bdcb7b6255fd3"],["posts/1358971951/index.html","9d6a9edcaa669d3e41d87a4e25dc05b1"],["posts/1386017461/index.html","78b1c51fae59090211e32076fbaaaa50"],["posts/1394521917/index.html","628d8039667e129cadfb29a5e7b57896"],["posts/1397717193/index.html","7d5334aa21bf79c5e7fab41580d027dd"],["posts/1417719502/index.html","2e9c979dd97cb76dc3105e9f475d852d"],["posts/1424645834/index.html","43a218df8cd8e7818651080149f05862"],["posts/1444577573/index.html","35d85d070da90546382cda1ab644be71"],["posts/1467630055/index.html","1afef837a9e76914897203c7d13437ad"],["posts/1478979553/index.html","6138356e136c50e9e2d8d6249235d780"],["posts/1540537013/index.html","ee9178f28e2b6ab0fdf20ff175504c58"],["posts/166983157/index.html","1d2db9f88a805ab64e516e88c7f3f7e0"],["posts/1670305415/index.html","9d3f6a9b235569e1245cf59854d9e6c6"],["posts/1684318907/index.html","9a4f74f394d29fd3d2bd022a79d44b81"],["posts/169430744/index.html","ec4c323b4bb7e72b212fabfdf26bba4c"],["posts/1700650235/index.html","13b7ceaa6a95a3b8728f622a3cbe4607"],["posts/172426938/index.html","95ec065b576559050238740d7e923660"],["posts/1836680899/index.html","082506360b0d781f35605106dce8b25c"],["posts/183718218/index.html","0d585f60cce1b348f80cd299a29910db"],["posts/187480982/index.html","e7268387484c194a18b2e2a43b219108"],["posts/1930050594/index.html","15cc753d989d8b95949434cc0ee676a7"],["posts/1933583281/index.html","f279726e6af6166714e231453136c788"],["posts/1940333895/index.html","bd9dd8eb4d4dc1738296e70eac06080d"],["posts/1960676615/index.html","638ab8694d7bb12724be1f03cf1da6b0"],["posts/1983298072/index.html","6df6e2040f71f0116429026943239ee8"],["posts/1989654282/index.html","160e8501bdd7b4f040a005986ffbb016"],["posts/2015300310/index.html","bc0807877931caea8b64164a8edd3981"],["posts/2038378679/index.html","1dea885aab0c8ba18abc58f2ee838ba5"],["posts/2041685704/index.html","3877c83087a096f756a6bae4ae023dc3"],["posts/21112647/index.html","b0c8e127f0e01ccad3a9a94c3dd88411"],["posts/2158696176/index.html","a55f02447e0307a19db255ada3b5d3f3"],["posts/2171683728/index.html","a02fe43bf0bb8018efc373e2746402c3"],["posts/2186770732/index.html","bb5ca6b2753cada1e8abb792d662fdfc"],["posts/2275646954/index.html","44954e1fdc94e9dc4a10c849bf4d6d3e"],["posts/2314414875/index.html","962d070bce280f73b60fc1c83220dc11"],["posts/2318173297/index.html","ffe0a0cf9de444153976807953f6ff24"],["posts/2418566449/index.html","91a36f3e97eb900723b6fecd4752e628"],["posts/2436573863/index.html","42e9383d0928b0ebc0706b95d032d161"],["posts/2462008667/index.html","66dbc2b1ef94a3b976f107b00920d174"],["posts/2463121881/index.html","b905214bee99da3e68891574cbd45b12"],["posts/2527231326/index.html","1cbf2ed54c22499178f86b917ca0c3d5"],["posts/2583252123/index.html","81b00af21c218f6dc7827547a9b58382"],["posts/2613006280/index.html","9930cafae991a7e40cf2c8c536cdff6a"],["posts/2617501472/index.html","4b39afc670fa714f72e4581a3f055739"],["posts/2676125676/index.html","3ee25898adbd4593852565c0d06fc099"],["posts/2734896333/index.html","c215e38254edad1dcaeaceb3128f970f"],["posts/2752169106/index.html","6afcb653582b26f70071a2f65901b3e8"],["posts/2799263488/index.html","5f952b2d5422a380939056455dd6a87c"],["posts/2805694118/index.html","3384eaa5ddacc62a8d29934d4fae7ab7"],["posts/2809571715/index.html","0caad3d57c822af637586d9e648044e6"],["posts/2822230423/index.html","db45681d1bd7ff7cf31e90b713efee3b"],["posts/2829333122/index.html","a8dda6970ea84060fdf14a8ea03ce533"],["posts/2911923212/index.html","babed06c39a5444bde8f412b6b669660"],["posts/2941880815/index.html","5da253ed9921ada1a5f55cd5de2cc092"],["posts/2950334112/index.html","b044b2952f536ca4b66f93c7af39ec5f"],["posts/2954591764/index.html","0d7c785932606d904e4d200ace43402f"],["posts/3019914405/index.html","728d4daf4399941f22c62279b3ec89e5"],["posts/3032366281/index.html","c1722b3efd25737dd7bff2b2700251cb"],["posts/3040357134/index.html","d9d32eed1f275ac64c0a83cc878a52bc"],["posts/305484621/index.html","6c2304767985cdafd8982c391178b3cc"],["posts/3083474169/index.html","90ba5a0dc4835bf63705b57b806e6903"],["posts/3099575458/index.html","92d60514301bcc2bf279a8fc89cd133f"],["posts/3111375079/index.html","83981e52b284f173cda0e5b239b22813"],["posts/3120185261/index.html","584a943295a3e3f1e10719980416afb2"],["posts/3131944018/index.html","29b143710186086779911114a99aa4ae"],["posts/316230277/index.html","9c7537952570d504b1614ad297658a4e"],["posts/3175881014/index.html","fba860938b5089d01ce5fadc01819a8a"],["posts/3222622531/index.html","8f4028177d6c5c30e218eac33bafec9b"],["posts/3247186509/index.html","529f946c2c083256dc0bc1e7f5c76a35"],["posts/3269605707/index.html","c8e53cc076536775c99c87e6d41b70c6"],["posts/3291578070/index.html","5ab77654df4df6c27cabfa09ac5e06ef"],["posts/331752533/index.html","a741204b16ceda1e8272975f2fd6677f"],["posts/3321992673/index.html","02505f4d91e48a158f8db3c0de512211"],["posts/335366821/index.html","1faac909d59e463fd6b046ae57524851"],["posts/3356910090/index.html","c9c54c86e75c818ca4c245f1dd5ea419"],["posts/337943766/index.html","592341a2937648d94e83d4498c50b4db"],["posts/3417652955/index.html","c35200c43f1cd200395f628f3b818388"],["posts/3444626340/index.html","145bd5ac6e77add75b9753261d1e962e"],["posts/3449402269/index.html","b815e0396f9be8f2b85353c88e8dee94"],["posts/345410188/index.html","23bd779c5176e7f4fecd9a63049311c2"],["posts/3461518355/index.html","367b07071fbe7f09b21737b4b75c4a7f"],["posts/3494408209/index.html","d13c49cfd55e44fe84f3f07da0cec9ac"],["posts/352037321/index.html","a3c54ae49414e76de787dc3b55de5eee"],["posts/3521618732/index.html","303868a2cbdfdc53f5ece3971c62a8cc"],["posts/3568552646/index.html","2d42e846186d29b898fee4d8b2ffcbd1"],["posts/3603924376/index.html","e00c163ebf41b4d1e0986502b97840dc"],["posts/3637847962/index.html","efc7eefb98d77def9b15bfc7e75a9d23"],["posts/3642630198/index.html","cccdcd27f0bc4c8c673bcb6650636357"],["posts/3653662258/index.html","c70bac5fff4f7098f7ee0b5542e40e93"],["posts/3653716295/index.html","2e61a061be9ae77f3f0434846ab56765"],["posts/3657008967/index.html","c7598fa40e4e739ac047dd6e3fafabb5"],["posts/3668933172/index.html","b36ab9f40ab193da44376a7b17cf9710"],["posts/3677280829/index.html","c2b85e07891a301eb3ad08566cbe27af"],["posts/3687594958/index.html","e4d44c67c3dc64f07949d5b7477ee905"],["posts/369095810/index.html","f7bca0726fb834bb8a5d71f328bfab0b"],["posts/3695777215/index.html","4266314b1248f490ab6b64b4f11c8f0a"],["posts/3736599391/index.html","20d639f98160eb1e5a58894433fa4f34"],["posts/3742212493/index.html","2c93336144587b6b088abee472138ae3"],["posts/3782208845/index.html","3fca29b76210e37001e7d2999616a99f"],["posts/3789971938/index.html","4c3233c56122baef37f1487814bd1ff1"],["posts/380519286/index.html","1888de1ae598b9c41cdb6f79ede7480d"],["posts/3846545990/index.html","3427815fc5c7e80905c57246166181b4"],["posts/3873710624/index.html","396e15eb13bf061a5b9ee1c1fa1fa428"],["posts/3959327595/index.html","b50f2086369146f76dbfcace7c066ee4"],["posts/3972610476/index.html","a532f422932d43a5817702727bf56f63"],["posts/3995512051/index.html","9a7ce3e449acf5258dd978c9b82703ef"],["posts/4088452183/index.html","5900b2eda6f1f8ddc154347489be21c0"],["posts/4116164325/index.html","2db091b5a1f93337ad39a1e0bc2623db"],["posts/4158690468/index.html","42ade5e0ff0de3663c08ec13ed5931cc"],["posts/4159187524/index.html","cb8ed08c8cc3f9508cb7875406bf7ba7"],["posts/4197961431/index.html","b8bf3f95493c34ca7f8ec144d51bcf01"],["posts/4205536912/index.html","b574beadcf466f148813080791fde295"],["posts/4236649/index.html","4dd0525c24be602816ee98293ad9b62e"],["posts/426338252/index.html","790c75b1a872901ebaf70df940a7845b"],["posts/450254281/index.html","b26a00718d2d1e1fe3d03827d5d4ab12"],["posts/4891372/index.html","5bb5dea420801abc9c2085a0e1a6246c"],["posts/569337285/index.html","acc106c8f801fcdba0b7d6f16446e38a"],["posts/570137885/index.html","bb10e65ad0eaed4be1cd3fd782aa3c4a"],["posts/570888918/index.html","e7b29966b46eb875e9a865f829fa9ab7"],["posts/582264328/index.html","8445c05d897de2816eac8729bd80ab7d"],["posts/632291273/index.html","98a625e49f6aa076b0d508fc088f2cd2"],["posts/70687890/index.html","0e90de288942bb23d424b74afcb9ccb3"],["posts/719322223/index.html","ac9c6b9969d3e07dc15e865343a0906e"],["posts/720539850/index.html","8864bd8859314b079c349edfe3dddc99"],["posts/786195243/index.html","7751ce5fdb2536b81e3faf54ac0949e4"],["posts/795474045/index.html","1ace856f9bbdf70b47d5b8e529b4bacc"],["posts/815861661/index.html","ca7a161d355e8ede68a36d7fb13a74a0"],["posts/821259985/index.html","ff8f6c6be0a5e0b98424dd5bc2eb0177"],["posts/828223375/index.html","20c27e514f6a61c6e0ebb57d63eeb865"],["posts/887585917/index.html","00e6e22e39e8eec237f1d66be0837e3e"],["posts/888549816/index.html","67bc6b5aa6fd406b7a079fa2400c5292"],["posts/906436376/index.html","5ff2a511e98ddc07196d33454083429f"],["posts/907824546/index.html","1020ed7fb187ef0762a97672be02eb13"],["posts/927393529/index.html","231d90c0c2014abc4c21761e953d93be"],["posts/94443781/index.html","eaf983d190076af91e988b15fc92b358"],["tags/2014/index.html","aa4786caa361e03821826fdfe15b560f"],["tags/2019/index.html","6eb16ab864a1fceb330d321a7760b6fb"],["tags/AI/index.html","0797f424f888dc7ba59f47fb137f7838"],["tags/AOP/index.html","1d0aab7d0a1b91ade7b7d797b223e176"],["tags/AR/index.html","8eaed79438cd8a65e3b2fc4b0cf2ac6c"],["tags/AssetBundle/index.html","c979e41c1ff2fbd4c0696f311e4870eb"],["tags/C/index.html","4047aaec5262122d28bd687ac845966c"],["tags/CDN/index.html","3e44f37b6a0f90d5097dcd59f42110a0"],["tags/CG/index.html","f4553038763caaff7e5345ea53503f2a"],["tags/CI/index.html","0b6f0029591379632dcd0470a5f7dd73"],["tags/CORS/index.html","68cc9c63ca0f0831505b8cdaf8385e43"],["tags/CSharp/index.html","213f7b9acb95f443da4206270c6055dc"],["tags/Castle/index.html","03bdcb424a065bac0562d5ea4c889766"],["tags/DBeaver/index.html","8fc89e4861ff373000e501fd71153186"],["tags/Docker/index.html","58df9c97af88d0c42fe51afd72d254aa"],["tags/Dynamic-Proxy/index.html","9e5059be7e57c8f4e883229dc29467a6"],["tags/Dynamic-WebApi/index.html","f6990765e8529b597c1a43ac930f32a4"],["tags/EF/index.html","e3a97097511e322106ed55b42e528fc9"],["tags/ELK/index.html","5bf32d199edfb956359540ff74023063"],["tags/ES6/index.html","11fd71c88081549bbe7a83284a45ccd1"],["tags/EasyAR/index.html","5084a8e5cf4aae826e00ee3c1da2dc35"],["tags/Excel/index.html","2db7e71d4c5b75528ce28fb4fd751368"],["tags/FP/index.html","93f7a88e932678aadd502cc54d395e11"],["tags/Form/index.html","09f711ca21c1bd616f48c55a910a5a51"],["tags/Git/index.html","57f88d9d1043684061baee883204a823"],["tags/Github/index.html","29edbe4d49b85eed6ea2afef560a46c1"],["tags/HTML5/index.html","9aaf11c411736bba18b6808ebc968235"],["tags/HTTP/index.html","f9514a100e1d2e71067b5b32f03d60cb"],["tags/Hangfire/index.html","8c35a647a486cfdac881a2d8c7f4c1a1"],["tags/Hexo/index.html","4e41282ad04403f4413af48aca0cd1d5"],["tags/HttpClient/index.html","752daa2f5a29bc4b2a96c1cf1b9b4d34"],["tags/Hyperlog/index.html","8af7d4372311bff148a1fb00615ab7b3"],["tags/IDE/index.html","cf37d4d4a20c521339487c806a424910"],["tags/JS/index.html","534014251f68017b01bc781ea9c00613"],["tags/JSON/index.html","e18702e348dc8931fb482be64a1149e8"],["tags/JSONP/index.html","6fe79778ff338202cd18570e77c74fd4"],["tags/Java/index.html","a3716527fc7efed67d70d55152061dce"],["tags/JavaScript/index.html","17c4de105d95ba85466de669345ea36c"],["tags/Jexus/index.html","29cdf91a7838fd094efe88ff20625b94"],["tags/Kindle/index.html","84a5b4777e60f17aad7c8108a08ddd5b"],["tags/Lambda/index.html","22e14e05cfc3df4b7618c111f1eeb19f"],["tags/Linux/index.html","57377aa22d71c197da09a2d7bf82b96f"],["tags/Liquid/index.html","61c62ada029e2890bc70aa6560cb08c4"],["tags/Logger/index.html","dde6b2ff2e814229f79c780f7bf8f4fe"],["tags/Love2D/index.html","f6af936b39607e8a02a0296b2afeccc5"],["tags/Lua/index.html","da7f6cfc1848f1c3653f154450724685"],["tags/MMD/index.html","e744ba036f29042ef594ba5c7d056c20"],["tags/MSBuild/index.html","9217bad611a3fa6cc578c4298068d15e"],["tags/MVC/index.html","6263e8c4e42a937a20c4bdc8064358ac"],["tags/MVVM/index.html","4ce2370f28429989d334a06ff47c75b7"],["tags/MapReduce/index.html","d9ec037c415b15f9ba34ac9a0cec4e19"],["tags/Markdown/index.html","3afbd7cf8078352e1fcdfa7a180079da"],["tags/Mecanim/index.html","87a8e9914f17b05f631ee652936c58b2"],["tags/Mono/index.html","65e8c7df1900eda4859305d0809a507b"],["tags/NET-Core/index.html","007cc7bc512e8fb8888eebfeaa49497f"],["tags/NET/index.html","4a79a39bd2ab37f5fb8daa710a8276ae"],["tags/Nginx/index.html","adcc8740b45a422df817f8b6a2c1b088"],["tags/OBJ/index.html","166dc07b0f89d89164eb6ad7350a5abc"],["tags/Oracle/index.html","197b00267fcea6bd5bd653f7ead54d8c"],["tags/PL-SQL/index.html","e006e202c4c3084de1086280f0f55f63"],["tags/POCOController/index.html","a66817703eb761d2e33f132c3eac2171"],["tags/PWA/index.html","0bd8947b19f22517c12888f893b34e9d"],["tags/Python/index.html","aa42549abdc911a11b5e83e564ec421b"],["tags/RESTful/index.html","8922213545040239b1e021065808a2d4"],["tags/RFC/index.html","9b1434cfa20a7056dab1e889bd0e1c11"],["tags/RPG/index.html","11bbabb803a0d96f6a0d5a7cc27ad610"],["tags/RSETful/index.html","83d187157cd4457ae2667b48af24f35d"],["tags/React/index.html","1e646724230c88adbaac191e59a384fc"],["tags/Redis/index.html","3cfb6ee539fdd34c48657afc320be78f"],["tags/Referrer/index.html","25741019fd55f1496072b8008ebb8da6"],["tags/SDL/index.html","5fdaa8d71a63a133b7a67bb12e3805ea"],["tags/SQLite/index.html","a2688e8b706e77f2e3a61784ce2170b1"],["tags/SSE/index.html","2c04c87d192169e0c5a0bca2a35bfe8f"],["tags/SVN/index.html","831533484ad305cf2e8e819e38d2c4a8"],["tags/Script/index.html","9c8f217f6f6fe549dfa2e464b2ffd75a"],["tags/Server酱/index.html","3a7d4c0b0240dfa2da8f8ad674e9a5c3"],["tags/Shader/index.html","6db9abcd53ae4671d5f6199aea9df99d"],["tags/SignalR/index.html","2589e847dc9a9bcc702d81cac158bbb2"],["tags/Socket/index.html","ae674ed0a544391baad1f301764ea4b2"],["tags/Sonar/index.html","26b384ecef5c33795614bb0a15c8a0fe"],["tags/SourceTree/index.html","9ac78c74b412a0a4a62e7ffeadd61058"],["tags/Sublime/index.html","fb267f824c735565807a0868102e7229"],["tags/Swagger/index.html","6f7fd5fc6c0e3fce1864aae6024ffacb"],["tags/Trace/index.html","c3bde5576bbe7a6385e25fdd4f820af2"],["tags/Travis/index.html","d8fff236adee1c569e944049376e5771"],["tags/Unity/index.html","ead0c0c2aa91350141e5f30d7cd07876"],["tags/Unity3D/index.html","bcd291255124eedae7fbe9f11a52836b"],["tags/Unity3D/pages/2/index.html","78a053d5aead80dae9adc25f0594646d"],["tags/Unity3D/pages/3/index.html","2415fb9c844728024db5ad06e03a9d66"],["tags/VSCode/index.html","ea32a0b47f3a78a654f3fb45b868ac28"],["tags/Valine/index.html","3eda23ed416529e3b2dfbfbb71772371"],["tags/Visual-Studio/index.html","421dcdac3128532380b07e5ec62dceac"],["tags/Vue/index.html","9faabe978612fda4d929674e67184beb"],["tags/WSL/index.html","680d2e9ddcd7162422f0c10e81fdd3a2"],["tags/Web-API/index.html","563b54470d34fb567c3daa36c3913700"],["tags/Web/index.html","88078c1f34eff32fa2f309bf8e348a0e"],["tags/WebApi/index.html","9220dbf021b57c8374127289b78de616"],["tags/WebSocket/index.html","3db264451ecca94a9934eaba7eed43c3"],["tags/Wechat/index.html","ce9e53b6e2e1201d7187613956318ec0"],["tags/Windows/index.html","bef355457d74ee72486bfe5c73a0aeae"],["tags/disunity/index.html","cb9eea1419b0270ce0b4f7680e58536b"],["tags/index.html","ba67aaa7a3b55ad6850c422cd85d683e"],["tags/jsDelivr/index.html","2089f971c433445218c712e4a87aff58"],["tags/matplotlib/index.html","1d2afa51fcd9e7a9ae6a9f9e1bfe04cc"],["tags/uGUI/index.html","cc74b1d4b0bbe957786ab8361f4f3c1e"],["tags/zTree/index.html","541cd2e061d3ef98e9742c9f33fe4fef"],["tags/一出好戏/index.html","4726a4e1422edb7671cc024dbe9cefb2"],["tags/七牛/index.html","fcc834df6879df85f521ddd671da18aa"],["tags/主从复制/index.html","bc83b9d29c33a67e343a2e7ee650903c"],["tags/事件/index.html","04d43b2ab28382e9bffab4dd286e46ff"],["tags/二维码/index.html","3b4d1493bd023fd65c8c6c2fdde9dc37"],["tags/云音乐/index.html","6e0486b7e14f5f091d7f5e82d3489fda"],["tags/互联网/index.html","56ad65bb54998500b82ab9672c7864fb"],["tags/亲情/index.html","4e3d85906ece4a9d1ebaab898d5044e9"],["tags/人文/index.html","b71b2d18fe72c869f175b87957e8664e"],["tags/人生/index.html","171ee4ee169f6c54c0809dc433d433c4"],["tags/仙剑奇侠传/index.html","49760ecdce3a9d4fcb86995e9c891442"],["tags/价值/index.html","51f41e39bc4e69fa4ae96ca9c6edbf0e"],["tags/优化/index.html","58f2707455d4533052cbdb60d6e8d83a"],["tags/全智贤/index.html","1ba3bb0100fb582e7e31209a3a049e29"],["tags/公众号/index.html","65fe3102d89871ab6f683ed0101aceb6"],["tags/关卡系统/index.html","014dd51cfce5f48965483abdc24dbc83"],["tags/函数式编程/index.html","e6e98047d0833ad4ff187866ee749b7d"],["tags/别离/index.html","fa87da883e8eb78ba2acf958cddbe105"],["tags/前任/index.html","1fa55aabec3ca6c45e1860740c1ae20e"],["tags/前端/index.html","c63c2c5941b20ef7f9c6d082a085d89e"],["tags/剑指Offer/index.html","3bc87258ed581c2a7e4f9a418fe83431"],["tags/加密/index.html","501938fa71f74bb137c682b7dc444594"],["tags/动态代理/index.html","6257980fb5f356c0ea199689aba97222"],["tags/动态加载/index.html","70b9c15f2e448fab08a497fe208c554f"],["tags/动画/index.html","cba750aacd92f749f19311924e1e192d"],["tags/单位/index.html","30f0733948ad32098800043acc5ea4c8"],["tags/单机游戏/index.html","e5f729e19a7f59c57aa508af59d8620b"],["tags/印度/index.html","e29fecbd51789341481979c5893be381"],["tags/历史/index.html","eb16efd73b3833424bbb3a27ee063995"],["tags/反编译/index.html","822a64fa0c6dd7566f7751477036f353"],["tags/同步/index.html","21d86e2249e6efb1619e21e9972bc830"],["tags/后端/index.html","be7cf6064b8aa93e48ee0215fb08261d"],["tags/命令/index.html","339057c9957e94aaf6916cbe11af0d1f"],["tags/和平/index.html","74c5a102a23fcb215947217a42bf64bc"],["tags/响应式/index.html","11b87fbef31d1704a43e24ae335197ba"],["tags/哲学/index.html","1c9ce0a52366d4beaca505f60cdd2b7f"],["tags/回家/index.html","21a004445a4990c5e95ca49273ae415d"],["tags/回忆/index.html","4de0a397ee11de6876cb052d210e549f"],["tags/回顾/index.html","74a9175320ef8b919a0d5e3e160494e5"],["tags/回首/index.html","adf722f378f57ae9ac1c41b6bc874e83"],["tags/图床/index.html","f2ee927536a698decedb7e8154902ce1"],["tags/图形/index.html","1c1b8b8083598ccba5502d3e64316631"],["tags/地图/index.html","9d4a26c4d135b8479cce94226a43e686"],["tags/塔防/index.html","510df2236cbc160a901c7dd399216aa8"],["tags/增强现实/index.html","e549d0afc6597093b1fa516301885d5e"],["tags/壁纸/index.html","ec3cf07c56159886eb4ab88cfbc711c4"],["tags/夏目漱石/index.html","0e70c26375cd72a2858550159d5ed0cb"],["tags/多线程/index.html","3eeeddb40764ff3d9fd012eae6396d27"],["tags/大护法/index.html","2f6b8e63363db1f13aa2947f7b717d3d"],["tags/委托/index.html","052258768d70b9bf79693177f7357acc"],["tags/孤独/index.html","bb9e7b61805f6348eb8fdbe677993c18"],["tags/展望/index.html","1e2ea7a8f991d9ac1b6f68c1b04853cc"],["tags/工作/index.html","3614def2ed7010fcd218d916dda70235"],["tags/平凡/index.html","d11a8f6bf1e79cd8fe0bc93881d8c58d"],["tags/年华/index.html","8af41138cd965911e154c403d970ca35"],["tags/年度/index.html","9ac9f71ecda25d12779028f891f3e7d4"],["tags/开源/index.html","d86eb9c5d9c5dbd27a20d25a0c20ab41"],["tags/异常/index.html","c434714777b1d0fced6c8159a6d21c59"],["tags/异步/index.html","156d9fb5a49b4699b204c12df22c3ff6"],["tags/引擎/index.html","189e2998c5fc4be3cc2a9f9d8dba894e"],["tags/影评/index.html","82cf83f9bc0a6f46bf6517a9d94f85a3"],["tags/微信/index.html","c24bc7d2b180f8491009f1dedbb6ede8"],["tags/微博/index.html","78712929be481b55b9281bf9e095ae80"],["tags/心情/index.html","b9dd974b4c512645ad124a657642582c"],["tags/思维/index.html","8f8ec14c61591789ffdbf4795e012f84"],["tags/总结/index.html","e9a37fc8b400700eaf9b5b2e2ff51dc6"],["tags/想法/index.html","66ede8fd3cd208a8b534e1e2ace275be"],["tags/感悟/index.html","8272f1c17d582202850a7b0bda3832e3"],["tags/成长/index.html","039d7b8ba5a053ab2d32044444c7b8db"],["tags/我是猫/index.html","d92a44da9bd09f4b7a8726bbd437d093"],["tags/扩展/index.html","638ecd65c7d9636383766fdf9ff5fe9c"],["tags/扩展方法/index.html","d2092df540d953ee2bcd0059b22f0983"],["tags/技术/index.html","914e1c8495fdf12f893d5b8527893e21"],["tags/拖拽/index.html","51c7d7fcb60ec7a87e0055acaaf25996"],["tags/插件/index.html","366c5c0508b8a0d1655d939ebf996c33"],["tags/插件化/index.html","e464b9730d9dfa4ba9f3713908d56eb1"],["tags/数字/index.html","ae7f1c5e519e19b0aaeefbac918eec29"],["tags/数学/index.html","8d62a494d6c8cfe71bfa88d88d5f1ff4"],["tags/数据/index.html","528e05a58b35458b34c1efe20899a60c"],["tags/数据交换/index.html","071063bff3dba8c6a4ee9178b0ec4c8c"],["tags/数据库/index.html","b3dd560198d67df35d55601ef915e83d"],["tags/文本分类/index.html","39e8cbc06ae2cb81e022b93f4378d003"],["tags/无问西东/index.html","4a6737c55ccdfc8826c5c7400fb4505e"],["tags/日剧/index.html","4ce833d9a44a05f5f6c58bb06e57f415"],["tags/日志/index.html","0117593d5a6b0fbbe756f49e3ce50b19"],["tags/日本文学/index.html","6ae007c25505a43e20a8769a50b777a0"],["tags/时区/index.html","2715fd1b608077d23ea1b408c9828489"],["tags/时间/index.html","79971916ededd3ae2e9c02fde8008fdd"],["tags/服务器/index.html","36a468ff46ebd7eb5e5be1b39ea1b533"],["tags/朝圣/index.html","6116b83a31721542dc1140fcfcd9c809"],["tags/朴素贝叶斯/index.html","c20f9de0d7f857be2ffe962fc49d9c2e"],["tags/架构/index.html","a3f0773b3978e99c104752d8078dd8e9"],["tags/标注/index.html","eb43c6d68350570f89fc3c0e74b56b04"],["tags/校验/index.html","c89d2f0cd5ed6a5cf39fe49a59646b4a"],["tags/格式/index.html","0b81a30f39b91914e9c2598c0758b7d8"],["tags/格式化/index.html","8033df16cb57d4642da77dcfbf11af4a"],["tags/桌面/index.html","5fda30cd08f233ecc4006b7b0a148fa4"],["tags/梦想/index.html","3bb32d0fa1437006d1a95ddf09902f85"],["tags/概率/index.html","ec3a44ede63a7519b05bb352ebf158ab"],["tags/模板/index.html","43d52943d30ee37d25321c668ebf3b60"],["tags/模板引擎/index.html","e330b3d459cd1792bcd3165281e92b57"],["tags/毕业/index.html","80287ae710abb6c581404d6ba9a4e3ec"],["tags/毕业季/index.html","3ee27f37c7058eee7b0874b02895522a"],["tags/消息/index.html","da298471847f1142e537c109ed206156"],["tags/游戏/index.html","55cf11f150ec7f137cc765c6cc395e16"],["tags/游戏/pages/2/index.html","02105907877db4b978a487ecbe9383b0"],["tags/游戏开发/index.html","c679bb459f9397f1572eed35b17c1149"],["tags/游戏引擎/index.html","a0eff42e5f55820bb93f7f21628bc4d3"],["tags/爱情/index.html","9aaa058b5feb12ac66e0d2acdcb78af0"],["tags/版本控制/index.html","9de552cc7e752ac162282f1c75823b6c"],["tags/版权/index.html","f8bb02363e818af4a07105ef42f4c456"],["tags/特性/index.html","fbd9293dbcedd25fe5ad7ae2b842755d"],["tags/状态/index.html","8fb1b5d8d934e07d77de7bb056f258f2"],["tags/现实/index.html","5332796b3bc2e0d788415604c4829122"],["tags/生活/index.html","afc44a513f0af39499cdd8802358aa30"],["tags/电影/index.html","f5ba10993c2bb94690d41d8699a4d62c"],["tags/画家/index.html","cc112a93b6ea88f35f27e7dc8138d1b6"],["tags/知识共享/index.html","351c0e761cc26a41751fa875b5c9c046"],["tags/矫情/index.html","5a456eb35cb9844954905685d84f7ea9"],["tags/程序员/index.html","975d08348cb3e7ea9dfc1a2acdc51091"],["tags/穹之扉/index.html","2610758cbc68e20412af74cee515b71a"],["tags/穿搭/index.html","ac660017f9d65c7817148011b07ed142"],["tags/童话/index.html","3da59ef130fe9ac927a62c227dc7beba"],["tags/笔记/index.html","45ede76cc260424838bf209f7b2405d1"],["tags/算法/index.html","2043bfc9be92b60694eec85af9344021"],["tags/米花之味/index.html","c235a4b3ade6cac20abe5088200c1185"],["tags/缓存/index.html","ebdcf532fc88e578a82c21cca62d724a"],["tags/编程/index.html","a6559df1777e39d51dfbf41a317f09a9"],["tags/编译/index.html","e5eeb1c594edea6fa62cf03624f03465"],["tags/编辑器/index.html","275a6a756f184288e626dc11a0cf7c03"],["tags/网易/index.html","88991a1d680480aaa064ae275298d8ca"],["tags/脚本/index.html","7a706f76eb2f98ab168dadf5ff371990"],["tags/脚本语言/index.html","019285b2bbb39657c345f8951e798d7c"],["tags/虚拟摇杆/index.html","366d1561ebd9b4043da433a27fa22e99"],["tags/蛋炒饭/index.html","356ce82f36cb50dcecc293ad16ca7acc"],["tags/表单/index.html","4f6510f3655806ae107de7684aaef15b"],["tags/装饰器/index.html","b97307ca90f937920f011fd3779238e6"],["tags/西安/index.html","5a03d1404dd13716200552aec00428f9"],["tags/计算机图形/index.html","7ba2c1dc775e3cf83761e094fd9cee2b"],["tags/设计/index.html","46b76209d1c12bc93dc86dbee5cc1f07"],["tags/设计模式/index.html","bd6113148f51cc026554ed77da9eba83"],["tags/访问量/index.html","f23829bf8a932b50c5fe634c0e2f80b3"],["tags/评论/index.html","63c8c36bc13f86b12eeaace1f980aeab"],["tags/词云/index.html","c961872265044f831c024e978cef2891"],["tags/诗人/index.html","ddc32c09e537dde87540aa517c4d6fe2"],["tags/语法/index.html","ab232a6cf04089d46ba81fed043df63b"],["tags/请记住我/index.html","c1c51405ded2fa7d6f8206675f117bc3"],["tags/读书/index.html","db2b68468d40729f69cac1716fb4d39d"],["tags/读写分离/index.html","4f7a13a9eb4701045d2dd3216118ce76"],["tags/调试/index.html","cdf06f80cc3c911d8e535cc72d080000"],["tags/贝塞尔曲线/index.html","8c4f0d67db713a5de925f793e7755c30"],["tags/贪吃蛇/index.html","ccf0a5cf5249522ba7131f450d3be82f"],["tags/资源提取/index.html","d58dbeae18c5f5b0294f5e0c3df414bd"],["tags/跨域/index.html","1889c0048e4c5effbcdffaeeb5fea4c0"],["tags/跨平台/index.html","55f92562fe435cfe0d0e8cbbd2587d30"],["tags/转盘/index.html","1fad6e48803d3a1e570d13ec3d64106e"],["tags/迁移/index.html","466e632359ec0cbc566cb60b608b3255"],["tags/通信/index.html","4dc623104e53c6e74e9f4586a53458ec"],["tags/邪不压正/index.html","8636cd0269aa97814f2171a2b7abc291"],["tags/部署/index.html","5ddcc95f9835d144273945033f066ca5"],["tags/配载/index.html","69bdfba0d797cbc66333479c919f1601"],["tags/重试/index.html","c3c333103543a47a21fb9becc8c29d87"],["tags/长安/index.html","2ad26a24f1bc7121e6a5dcb07c88b32c"],["tags/长安十二时辰/index.html","367f85f25f3eef6b76ee6c7fa6b5ed87"],["tags/阅读/index.html","386f0d4a6cc49d6e135cc73c454f2b15"],["tags/阿里/index.html","6e2362463261512adf538ff4bb8df52a"],["tags/随笔/index.html","1c284f9650fd7f5978aec8e1664727a9"],["tags/霍金/index.html","75093df3b7b02683f2ea460abe92385e"],["tags/青春/index.html","a5558afc9273b511bef834713698b279"],["tags/面试/index.html","d747d634cafe432a7a731b4cab14e6e0"],["tags/韩寒/index.html","12f9c16a96528b5b4ab06f162035e599"],["tags/马尔克斯/index.html","ecc403acf56ab9948e0bd5ce1d1529c1"],["tags/验证/index.html","2650c1cb1104a3c61adb865aeb538319"],["tags/黑客/index.html","897d413ea1566e436a6aa82e977375f1"],["wiki/index.html","c0d1a723a7624c0adce72ed639e778fb"],["works/index.html","e419229a1e30acb35ac24550176bdf09"]];
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







