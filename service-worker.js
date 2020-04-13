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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","8d8843f2700dfa93a706f03706f53a76"],["archives/2014/12/index.html","5c07553c62aae62ce1439e4961c781f4"],["archives/2014/index.html","ab2b16fb02902ba72d1b313d08381d19"],["archives/2015/01/index.html","7a1b5f46dc80af4e03c38f7f49e33bf4"],["archives/2015/02/index.html","90d2e512428c98a15f85faf7f1ab98c3"],["archives/2015/03/index.html","992d4dac267c14d45e47a658e29ca359"],["archives/2015/04/index.html","d3f5e834e5d1418fca28e25399105091"],["archives/2015/05/index.html","672efc1d2faecc2fa95c29dac9b4e596"],["archives/2015/06/index.html","e51a7223d310a9b0d35b5a204b0d6a63"],["archives/2015/07/index.html","7916c1baa237d2a6e0ef0a8fa70d93f6"],["archives/2015/08/index.html","9fcb581f95718d24f29f93c8fd9090b9"],["archives/2015/09/index.html","bf5c87d6f1d3ffa79105899379b6b9d2"],["archives/2015/10/index.html","09b24eb4a37b277cd74d0a9db4c7c4a4"],["archives/2015/11/index.html","a35da2af39281584db9e8665eafd8a5b"],["archives/2015/12/index.html","24f53f7457516c06bd81246580b09f9a"],["archives/2015/index.html","8953e2f6339db8c11eb65cec154c3690"],["archives/2015/pages/2/index.html","595f631c3b1ee60e90ba5dc87f81d713"],["archives/2015/pages/3/index.html","4d4a40d0e3c2db9db58aa6405b10317f"],["archives/2015/pages/4/index.html","0e782e2c780c8ba8f9a5f78e292b93ef"],["archives/2015/pages/5/index.html","8f3dee047979187f53b2877368fa11cc"],["archives/2015/pages/6/index.html","75819df01e4ff26b3838d9486a67f424"],["archives/2016/01/index.html","33f326486573754c6abfaca91f07e08d"],["archives/2016/03/index.html","561e2df1226170e6a1bb27c0cae007e8"],["archives/2016/05/index.html","f7da4accccb68e41af84920b7cb496d0"],["archives/2016/06/index.html","d77fe129867819013b709fbf49c4adda"],["archives/2016/07/index.html","c7cbb9c2b2f57b68336903f45378caa9"],["archives/2016/09/index.html","27030714cf5ddc5abcfe18d1a7c10533"],["archives/2016/10/index.html","adae0e3241c372d87d44501954123ea3"],["archives/2016/11/index.html","58e227570c69f5b4b7b4804680a994ab"],["archives/2016/index.html","b17899151e4e82ada0867392cb7b4654"],["archives/2016/pages/2/index.html","291fa357133f7b0cd45d30a21dc81c9f"],["archives/2016/pages/3/index.html","d83986958f510bc3ad70c30aa7dfbc8e"],["archives/2017/02/index.html","1c38f663b19833eaed8fd26f80095812"],["archives/2017/03/index.html","7d688c687fff2dd6d13ca46c95398ca9"],["archives/2017/04/index.html","48872b34ac7d4cd2e73c5ad7bfa767d6"],["archives/2017/05/index.html","07fcaeb933d5b251914dc97bcf758ece"],["archives/2017/07/index.html","7625fabd4209f12ba42f7f9054f5b734"],["archives/2017/08/index.html","b099c22c4d3887a4d9e44c3615d456a3"],["archives/2017/09/index.html","cd7c0a1c5bc7eb7d96c0f563b0f5c092"],["archives/2017/10/index.html","9e1d98a0152619b7bbf33beebcd64a71"],["archives/2017/11/index.html","ca13cfe77e69a4e4c0d530ce7920e9fd"],["archives/2017/12/index.html","c7bc98dc15e6512c913e4961d08679dd"],["archives/2017/index.html","adef500fce05aaeb9972fb6646d9c583"],["archives/2017/pages/2/index.html","8378b2d49e495e61ba734ab41e91e5c9"],["archives/2018/01/index.html","a9ec8b214cd5fe6639181b712c0972cb"],["archives/2018/02/index.html","e44b0822c142361125e06838cf44a696"],["archives/2018/03/index.html","c204c395b8615a03e6e44655af3b94f9"],["archives/2018/04/index.html","8e11cb956133f8ea3fb37b98ae4443cb"],["archives/2018/05/index.html","fec6738dea4070a4e13f961912013161"],["archives/2018/06/index.html","f4298db38f15bcb9396b312fbb2d470c"],["archives/2018/07/index.html","ba43409269be4d693045f66ddfe58838"],["archives/2018/08/index.html","5c564ba89886f12a1858fc2678b111de"],["archives/2018/09/index.html","351fe37f35f4f7eb6db7c9e109b5a110"],["archives/2018/10/index.html","ecea992f1ffe2f1ddc095ec1fb98feec"],["archives/2018/index.html","ab446035ca284c0da83263050f2c4891"],["archives/2018/pages/2/index.html","04db7c34dc3d79c90504eb68279269f1"],["archives/2018/pages/3/index.html","1855c8559f22419f73c08561d066c905"],["archives/2018/pages/4/index.html","1379b8fabf1954fb9b6cb090af614815"],["archives/2019/01/index.html","ebb26f44ce7ae8ff13679f51e1d48046"],["archives/2019/02/index.html","c525f00fea181d189256280f70ba7312"],["archives/2019/03/index.html","1b354931d19b59aa79598ea00a858f6d"],["archives/2019/04/index.html","acffcf26682585a8b01b2febedcd7676"],["archives/2019/05/index.html","b240a21ff41c7d1fee413415696bc632"],["archives/2019/06/index.html","f3c33ddf0a54112ba0fb76d6f2cabe9e"],["archives/2019/07/index.html","4500677442e1871e85b08f35a1fc680d"],["archives/2019/08/index.html","69cd6ff4cc6f36758e4900f558465684"],["archives/2019/09/index.html","cf2d4f14428572bc8b8acd77ed5dcdff"],["archives/2019/10/index.html","5ec58de8b5869dd5bf3d199a51de6e62"],["archives/2019/11/index.html","c815296873d76f484d4e3d0350952580"],["archives/2019/12/index.html","085a5d4e01448045a5b69e54ddc71e64"],["archives/2019/index.html","1a89741a46ee59a54adaaea53f7c1c4f"],["archives/2019/pages/2/index.html","c72bb1c41ed21452ec33747e43926289"],["archives/2019/pages/3/index.html","3cff614f15f05ed91ad5e3e5975606fd"],["archives/2020/01/index.html","536ba08b0ff44ed146c8fee025b71be0"],["archives/2020/02/index.html","b7b81aeb69c17604af670e3c0360278e"],["archives/2020/04/index.html","6cbc32374fab62b6fb747ce27546fe21"],["archives/2020/index.html","bc6be08e1ea8f76c8c6e6c5ae75ad5ae"],["archives/index.html","6e36bcb32b1fd87f279ff89383c9a4d8"],["archives/pages/10/index.html","3856c28a5ede1e52534721312ca56951"],["archives/pages/11/index.html","47c330499912e2863029378e5191bee6"],["archives/pages/12/index.html","adcf26a30f06c43a8e4d32c954853a31"],["archives/pages/13/index.html","1cc319dc2878d558bd07b41a79f74b62"],["archives/pages/14/index.html","fb4b5d79f49a729bf6a26a3a8896ff4f"],["archives/pages/15/index.html","1671a9a3f202fcbd0bb28d56c9e171d1"],["archives/pages/16/index.html","07e99afef1018984a41c7623554157f0"],["archives/pages/2/index.html","f6e97b14d8cfd2a6fda39c82ad615443"],["archives/pages/3/index.html","1ffb6a582baddc143b1d9cb46aa7b2ba"],["archives/pages/4/index.html","44e0dad184477d601e8e927a836a8077"],["archives/pages/5/index.html","5008bdb97cb5d8df992769ae86dbfe2a"],["archives/pages/6/index.html","c82dce6fcdcb25b652283e7f965687e1"],["archives/pages/7/index.html","240261bf2f2571fc8e9dbd1bab22d817"],["archives/pages/8/index.html","54e468e86cfc4aab44fcfc3244f43dde"],["archives/pages/9/index.html","bbc2d6ce76ec14d0b4aa24e3e0d5a1c7"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","b8e6a7c59aa2ffcc94121f0874b0b74b"],["categories/Unity3D/index.html","2d8d2daa969225d323db9bab076c4201"],["categories/Unity3D/pages/2/index.html","218499a8d613f79163a1a8251f3a36ab"],["categories/index.html","6afe40e101d71a280a22dea370421d0d"],["categories/人工智能/index.html","d3a23253ae52c518560a31d4286c7f21"],["categories/前端开发/index.html","8640760fb7fcf1a5fecf3763cdcae479"],["categories/单机游戏/index.html","6834fe2ae7a439662bc7d09a9d3e8a4d"],["categories/开发工具/index.html","2b8c4ec244ff212816e17a2c9007d1e5"],["categories/数据分析/index.html","a0295743c00dd28b7705cdbc4d3b1632"],["categories/数据存储/index.html","41f7118eaea47083cb9c0522d02b88ef"],["categories/游戏开发/index.html","b6db3e92c6dfb05e58949974d4491db0"],["categories/游戏开发/pages/2/index.html","7a3f47c97b1f8502f00925f91acdb21e"],["categories/游戏引擎/index.html","ba29c499de632c31143cad0ed037852f"],["categories/独立博客/index.html","9252383d26df60f83d48785f4ea4c674"],["categories/生活感悟/index.html","5c08bf0f8c52b3fdf6ce93025f4d5881"],["categories/生活感悟/pages/2/index.html","93e8a607372414d85f4959727d6016a9"],["categories/生活感悟/pages/3/index.html","aae7c8db653ca05ff9435c96af10fd3e"],["categories/编程语言/index.html","f06aacceaf3b05f6e5c047df99f0fd1c"],["categories/编程语言/pages/2/index.html","1d620ade46b8a711fe4f268a96766dbc"],["categories/编程语言/pages/3/index.html","664c770da452fd5a66fdd53664374841"],["categories/编程语言/pages/4/index.html","fc1526fa0f8a43ac8944cd5683c2b030"],["categories/编程语言/pages/5/index.html","673a140b8441d32142f70f89a1bccb31"],["categories/读书笔记/index.html","d004c26cc01bb5c4abffd5d7a628ded5"],["categories/读书笔记/pages/2/index.html","af90eeda595e007c5e11dae89cdb9eb1"],["friends/index.html","9fe3d117246a7feb51c5a7e6f3caeaba"],["index.html","8a6ace252bf4b2112b21dd2d216e0f8e"],["movies/index.html","03ee5edcbe36c970c1ccd6261794a91f"],["musics/index.html","c244ccb519a36d3eaa45231ec4b53aa4"],["pages/10/index.html","262afc0ee49d5232cb6867b744b04162"],["pages/11/index.html","86b5ad9a5e8014e25f9b49d5abfd6b4b"],["pages/12/index.html","86bfa4267df55099f87918f9199e1058"],["pages/13/index.html","b75de5849bf91f3fa0813e68f8dee25c"],["pages/14/index.html","3272d6ed9118b2993e02083727e3d765"],["pages/15/index.html","3ec6ea149812cf741ac6c78df8d04f10"],["pages/16/index.html","8fd4bd003983fd5c350b5ef66e05cadc"],["pages/2/index.html","b6edf759101d65cda920b93249d63e9e"],["pages/3/index.html","b210934273d16a0872aa06485169a201"],["pages/4/index.html","8eaa0b863a2e09fb5bd54d548c0790f4"],["pages/5/index.html","b4f3bc647002dc5aa0d9c2e6abc0c558"],["pages/6/index.html","bb02e6887861328853290f6a35a8c3a6"],["pages/7/index.html","49ec0df27197a830559a3a770b49c8f1"],["pages/8/index.html","c7a70834d9ebd6a6d00fd796d7bba201"],["pages/9/index.html","d0dbad534d8b117189041f93a9f0776a"],["posts/1059499448/index.html","9877973d036094c70b7a5dc8d7626a3f"],["posts/1071063696/index.html","e27c06350bc79d22cd06de36cd3ba253"],["posts/1082185388/index.html","fad4510af10aecd4b903cdf6bd675a0d"],["posts/1099762326/index.html","58abb69fd1bf54a751789f38088ae42a"],["posts/1113828794/index.html","e86edd9ca51e961ae60cdcc278e4681c"],["posts/1118169753/index.html","ddbc2bcf06cab6ef04f9b42f48eb06dd"],["posts/1122710277/index.html","b8160c1689fe25311033e75ba8dcd708"],["posts/1124152964/index.html","45b316f01049c20729782e342acd265d"],["posts/1127467740/index.html","66ce76ee681b7b6b574bc5614ed61e13"],["posts/1150071886/index.html","450329aa25c99f8669ca1572c39748d3"],["posts/1150143610/index.html","ce230cfd1a52659ca04b48f19a6e8f7d"],["posts/1152813120/index.html","1187407e119029d8beda806e401de193"],["posts/115524443/index.html","b2ed3f181e41600639843fe9e256c141"],["posts/1156673678/index.html","389d62f7b66e066a72398344ebf4459b"],["posts/1166840790/index.html","03bbfd05b295076b96157a56295605de"],["posts/116795088/index.html","381ecdf99392bdeb105912a98fe86a5a"],["posts/1176959868/index.html","ef516bf37f7bd7c8dab4eb082ad49456"],["posts/1190622881/index.html","8e6e30abaa7c933c656d66d75a5a5187"],["posts/123663202/index.html","b4498f1c937fcbc72a3bb596b23c708c"],["posts/124807650/index.html","8ff4c7992bdc21c6bc0163c0f168dc10"],["posts/1254783039/index.html","c9e7830fb8e9f3b2b77ac272b354e9c9"],["posts/1320325685/index.html","1a0a258bb381415b2be7996198bda10d"],["posts/1329254441/index.html","b1eca3c1e25442e5b95d924052d9281e"],["posts/1357715684/index.html","e9e604dc6c024887011d4b3f0f728326"],["posts/1358971951/index.html","7658e7c5284e24173f89061ac3fd4eba"],["posts/1386017461/index.html","684c6870819d4ee193d5f176cf0d9833"],["posts/1394521917/index.html","150043f4130d43585daf45491c11e82c"],["posts/1397717193/index.html","1de766afb912df0925d0277f8e2c35e9"],["posts/1417719502/index.html","4a105f509bc5b2d2cf4053e8110a98ce"],["posts/1424645834/index.html","f0702605e96947c43847e393ab65d7af"],["posts/1444577573/index.html","d44d03ec58825adb2e6bf468e4de0d60"],["posts/1467630055/index.html","4c839a25b28f547c4b43eacb07be37df"],["posts/1478979553/index.html","11b95dc8ccea39e1ed7161f05bd2fd87"],["posts/1540537013/index.html","534cc3f47a8b81acc3a19fb7f6cb52e5"],["posts/166983157/index.html","906bfb84d65eeb5fa564bfb481c71e4c"],["posts/1670305415/index.html","6c7b579eb1f94aa95da2a79228bd7481"],["posts/1684318907/index.html","754eb11b849c26a65b347cd8c267b7d1"],["posts/169430744/index.html","e2cebda06653e6155969f246cf11b7e5"],["posts/1700650235/index.html","1c6b5306e85f9d1518bb6ae1d7ff61cd"],["posts/172426938/index.html","38f3ce9e442d258247862ee34b5fce28"],["posts/1836680899/index.html","5a46ab41411ecba521d67a42d70b58d6"],["posts/183718218/index.html","6ba37a854595a8dbd6dc1b72f7638582"],["posts/187480982/index.html","5fa9ff72413dca7325faa888d9a1d832"],["posts/1930050594/index.html","ccf7c380e3f7ff83c8ee759831d112b2"],["posts/1933583281/index.html","ec93d490311f44f06f4635e56c7e85e2"],["posts/1940333895/index.html","93007345a8add0b4e1f7983987ec83f6"],["posts/1960676615/index.html","cde5cf33fa85629fad1cf988f16ad84e"],["posts/1983298072/index.html","c577a15e6f0bd00e5b4565a8635bbcba"],["posts/1989654282/index.html","2e29a07c58e48f5a6c3dc5553dfbf82a"],["posts/2015300310/index.html","c0a01887ec3a53e35d03083ab62521c3"],["posts/2038378679/index.html","ed0add456f2d33e6cdf561f7659ea9b1"],["posts/2041685704/index.html","96d1e7eecea11339c9bd1eecc03f8806"],["posts/21112647/index.html","a6ad7fb630c22ac2350a1f17e805eacb"],["posts/2158696176/index.html","9cf7f63b43e8e19168f7912d5b621ffc"],["posts/2171683728/index.html","c420b064748567fc56b43c918aa947c4"],["posts/2186770732/index.html","3b626bdc3b1dcb02d42c16330d8e56d9"],["posts/2275646954/index.html","482e6992f3eef855d920ec813af152ae"],["posts/2314414875/index.html","ede8727ad0d79e727f64fff07d4377d6"],["posts/2318173297/index.html","e47fabdbd3912a4a163fe0502970c339"],["posts/2418566449/index.html","834f62187b07d20d90530917b399798a"],["posts/2436573863/index.html","d8055501a35e9311fabcb3ab1c7ecb3e"],["posts/2462008667/index.html","3293a6faf0365387bb0921f1eb8f2172"],["posts/2463121881/index.html","1847b6067c361309b30e5253c7f83a39"],["posts/2488769283/index.html","791ea7e51318b317e1bbba3a6cb2edcd"],["posts/2527231326/index.html","b5bb558124332551f5108b88567fc71e"],["posts/2583252123/index.html","7a6fd980f93d0641f80f4212c2e63614"],["posts/2613006280/index.html","6d2194e370f22bdc151dd270d7caae9f"],["posts/2617501472/index.html","880334ec9fa275999e2887ad160ec6f6"],["posts/2676125676/index.html","efed6fbc3f3eec29f0908a74610d8dda"],["posts/2734896333/index.html","af6a2bb087b1b2e2db3c5855ff053024"],["posts/2752169106/index.html","8a6e0e180391187d6b168fe1d7c87e65"],["posts/2799263488/index.html","de365a44d4dce42f94743eb1e02a81c6"],["posts/2805694118/index.html","069abc0762bbb208e19b5eabfd73e9f1"],["posts/2809571715/index.html","e4fcab11e4591f0018507fbf31507124"],["posts/2822230423/index.html","0cb99c707a42f2973cb00f18c6d77bb3"],["posts/2829333122/index.html","58c7808540b93fb0cf969d87c665105d"],["posts/2911923212/index.html","a8ecdfa0a2fcf0dd4c8c87b41c4e59f4"],["posts/2941880815/index.html","8c72fa35b9b9275fc4e80f1f85757b9e"],["posts/2950334112/index.html","410f50e4f3a9134683f65d3519303518"],["posts/2954591764/index.html","495608baf7060189dcf1a864a99dda1a"],["posts/3019914405/index.html","56b8eae5a2d217b20ad159a4aa633a8f"],["posts/3032366281/index.html","9378ecd2dfdbdb9d7cf2d98ef87dbe7f"],["posts/3040357134/index.html","0312e59719e2753507230710c03c191f"],["posts/305484621/index.html","92a54c0a04278c7fd6fd9b4d0554d003"],["posts/3083474169/index.html","b6cad18f76717b98e9dde1a47d30dd16"],["posts/3099575458/index.html","51261878c749d12ac8bbcfe0ddb70c92"],["posts/3111375079/index.html","dfed4e7b1e1ca63288d5c58c461c0edc"],["posts/3120185261/index.html","2c8223b8768cf036605d1b3246495dd0"],["posts/3131944018/index.html","d3baf74c8a4a2872eadce60d6d0b8c43"],["posts/316230277/index.html","4a05777edc7f7158576d952efbb65950"],["posts/3175881014/index.html","ec01a2de295dfecdb965bc5e7197757e"],["posts/3222622531/index.html","2651b6c31c7b23ea3850fbf844b345ed"],["posts/3247186509/index.html","76d720e4e50783d3e8d7191b101d6f64"],["posts/3269605707/index.html","43e284818c691e78ddaf56374479d486"],["posts/3291578070/index.html","879ea68dc0a434c572202505961d8a53"],["posts/331752533/index.html","50105076df3ffc95fa69d955f93748e8"],["posts/3321992673/index.html","fa934a7b3209357a9006b649754cd855"],["posts/335366821/index.html","6fc9e285f4d38dc01a39bf664bef9dbd"],["posts/3356910090/index.html","b7738edead3e4efc7dbd56a175236fef"],["posts/337943766/index.html","7805e09e3630ef1a987b6f6c0389edfa"],["posts/3417652955/index.html","e45019198705a11796705a05dfa06a1e"],["posts/3444626340/index.html","46c32166da63de8a352d55e9ad8b27e4"],["posts/3449402269/index.html","4f73129fba57683cd975e269a9003d3f"],["posts/345410188/index.html","a0f2609a79b2a4a09521c21f973a1058"],["posts/3461518355/index.html","79d9c781fb2575f2b8632f1b22fb85ed"],["posts/3494408209/index.html","c2046228b7cb9ad4ab1e80831933ec19"],["posts/352037321/index.html","b05b290fa7b22e168fd26a269c2f376b"],["posts/3521618732/index.html","e1b7b0344f403b7d044bec0e0e462bbe"],["posts/3568552646/index.html","25b5396d6eaf6b79b5a990bc36f15ef3"],["posts/3603924376/index.html","b21c05f25c2b6e7d3208a81f6f5af161"],["posts/3637847962/index.html","e0d39c386759393db17eaea431c3599f"],["posts/3642630198/index.html","8aa5393a6c211b444cc16fd8fc48b8c4"],["posts/3653662258/index.html","1de6fe4e0fdfa114bd62da3b59a3c870"],["posts/3653716295/index.html","1fbcf7a98baaa3ae13ebf56153e5e322"],["posts/3657008967/index.html","9a0eae95eef3f09813f3b5971203e61b"],["posts/3668933172/index.html","86bb23e7990001cfe810694178db241b"],["posts/3677280829/index.html","e60e8cf855d6260df0b1adb956054454"],["posts/3687594958/index.html","428bd2b8f4c4509f4ac16d49f7ad7555"],["posts/369095810/index.html","1fa3b1a12ef42838445d171696d6574d"],["posts/3695777215/index.html","74ab63fb25b1681c4fa68297e224a883"],["posts/3736599391/index.html","6e183dbfbdd31c1ed580f4c02e9ecde7"],["posts/3742212493/index.html","e3af2b7d9bf6d43ec73a059b0edc6019"],["posts/3782208845/index.html","cb348cee4d62d1c88db09b2b58c32ce8"],["posts/3789971938/index.html","6a99657bdfa27dc4d71b195fe1e9cb92"],["posts/380519286/index.html","dc64994680795c4674137a74c79a8898"],["posts/3846545990/index.html","cb768342fcda810269ab986501e21270"],["posts/3873710624/index.html","3a97a2d252609d9621e09b8eed4c30b7"],["posts/3959327595/index.html","fef34f2309d7ac16427fc368f8461a63"],["posts/3972610476/index.html","e61d5af9a6d2936719c18735892c3a5e"],["posts/3995512051/index.html","3131071f04c72b205a00e3dbddc84fca"],["posts/4088452183/index.html","47e41b1e71505764e38a6fd1fe49e634"],["posts/4116164325/index.html","c7467f531330d47ac2d8df46f8e20509"],["posts/4158690468/index.html","1788df2c190141fedf3088ea50d707c8"],["posts/4159187524/index.html","e13fedc00a0122cc167029298cc334cf"],["posts/4197961431/index.html","913755b2f334c7fa9288c3cc2129c7c7"],["posts/4205536912/index.html","84997d8fef65bbc12e049dc22f7cd632"],["posts/4236649/index.html","04d2e000afd31878d2b72193cabba225"],["posts/426338252/index.html","57cce3c9c4d6d2988019cacffa98ac55"],["posts/450254281/index.html","e7bc3f375e1f5157c4495d311479035b"],["posts/4891372/index.html","4c940a15aed671d7d32f5db1c2de54d6"],["posts/569337285/index.html","12036edcc616331edc6c4ee20a8da387"],["posts/570137885/index.html","03474a253f28559488b5cefe56c1988f"],["posts/570888918/index.html","6b0bd0516e5282c678ac134312edd96d"],["posts/582264328/index.html","8537f17ac6961d43599f2093c28b881f"],["posts/632291273/index.html","e0a063ba426e993ab7f360e2959d0ebe"],["posts/70687890/index.html","086156400c67285c09b776cc05e2b740"],["posts/719322223/index.html","396c3b74a7ab6891f7ac0151f1a9a578"],["posts/720539850/index.html","c42bdb8a6cccffc17f9156d55be6febf"],["posts/786195243/index.html","1e89f692d3579132f571ec8dd01e4e12"],["posts/795474045/index.html","b41b3ad81b5cb68d686d467735a66d51"],["posts/815861661/index.html","53fad39f6c3c3ce91efe8b37079d8256"],["posts/821259985/index.html","9e66a1f018799760329c8f19f20ad695"],["posts/828223375/index.html","b46aa822eb3f4939c4973abcceae04d9"],["posts/887585917/index.html","5a53c4a6e6e718bb37508de8b8737f80"],["posts/888549816/index.html","f21d76f2c807c348c50b50aa39691c39"],["posts/906436376/index.html","725aa73405c4f27dae1a13f73abd2e0d"],["posts/907824546/index.html","ae8a5b215a4b012014530c4aeade4dd0"],["posts/927393529/index.html","34ab0120641afdc555b13198f19ae4f2"],["posts/94443781/index.html","6fd268d97797a61f19ab45a44b0f0d88"],["tags/2014/index.html","79e2949587382c5c236c4da15e140b38"],["tags/2019/index.html","6266439d7266370b5da29273f393aa4a"],["tags/AI/index.html","0e9147abaea21a238f8b12ebb31cbbef"],["tags/AOP/index.html","227ebb6dd491ccae1d5d9e553c5e4a38"],["tags/AR/index.html","3f28a52a96cc03e595494abebf6ac80c"],["tags/AssetBundle/index.html","9321570aef3b079c4dc9d89252c9be35"],["tags/C/index.html","5f9362a6cb9761dd0658cdb71c55ecf6"],["tags/CDN/index.html","9f8b7342c698d1d93913016ef93cf012"],["tags/CG/index.html","c914c9d46f4ca75633ff6e3b5524b075"],["tags/CI/index.html","496e978a76a4f52ae0b400581d293f96"],["tags/CORS/index.html","c4c81c67b1b9d2a8d98fdfc1912cef42"],["tags/CSharp/index.html","ed1adbece149d4ca9d8f8e7344bf94a7"],["tags/Castle/index.html","ddbb4357cbd6a4b887e5a7307e515c3a"],["tags/DBeaver/index.html","39b7f125858d518d1ba024e575db28ec"],["tags/Docker/index.html","dd3b4713f8e8310c44f4272e3e0df646"],["tags/Dynamic-Proxy/index.html","64394f0d0c5492cbc164fdef0b273de4"],["tags/Dynamic-WebApi/index.html","99333fe38746ceec2124608426a196c5"],["tags/EF/index.html","cc3c44257aba942f43e4ba6c41845021"],["tags/ELK/index.html","b4675bc83a57811bd304f3106cec8678"],["tags/ES6/index.html","dfaae0fa6e7ff40aecc7a31cd96685f3"],["tags/EasyAR/index.html","123a7df34d48560b02e91e1b54653dc5"],["tags/Excel/index.html","ec1a7f3144a3eafd714dc8b75ecf5c75"],["tags/FP/index.html","94d06f8a7b449c9a0216c5a75a2042a9"],["tags/Form/index.html","cd680d7b5c9fbbe9c133d05bfbb6a0af"],["tags/Git/index.html","90fc6f7325ae9a53f4f6f80877a4b21b"],["tags/Github/index.html","7ee939f9b63fa33053c06be38afd9333"],["tags/HTML5/index.html","a314af89ee91b90191643b8002d8c819"],["tags/HTTP/index.html","cfbe229c163a237a999057ef633e79ab"],["tags/Hangfire/index.html","5f76fdf2fc9cff9a179fc9d98c308fab"],["tags/Hexo/index.html","f1bc2befbba728bb040ca0202be468a4"],["tags/HttpClient/index.html","bf8639a266828c3faeb23d06fb538eea"],["tags/Hyperlog/index.html","7ccb851f6481eebcc4b5d298e42f627d"],["tags/IDE/index.html","acd7a7debd62fd6068d26117a8b60bc0"],["tags/JS/index.html","4e2dac2244efb981dafcff241b66060b"],["tags/JSON/index.html","e2ec6f5fe9ddf3c88193552efdd9beb9"],["tags/JSONP/index.html","76b4a7f9524179fd97b81c05395337cd"],["tags/Java/index.html","532b84695bafef2ef7faab3b7c2cd6d5"],["tags/JavaScript/index.html","736c88a705b2caac04a358a4bfcc95f7"],["tags/Jexus/index.html","189ecfe4ff87f71fc60d19af604037f7"],["tags/Kindle/index.html","767c081a7ae26bf14d86d250dff7553d"],["tags/Lambda/index.html","c6c29c484121da60fa561c6e37593bad"],["tags/Linux/index.html","8f322872aac708542e70fae326c7ab30"],["tags/Liquid/index.html","6d705f401c67c6fbe71e0d7866b39bf9"],["tags/Logger/index.html","fdf00a6f198b12e54dbe50e8e085c560"],["tags/Love2D/index.html","916ac5a8b59ae1fa9091c99797ea0f13"],["tags/Lua/index.html","a941c7cd0943ab62a3563b4d14e47246"],["tags/MMD/index.html","30568748620ce8bb95d6c6b7de71344b"],["tags/MSBuild/index.html","1919e81e266a3155d9af023ffb4dce75"],["tags/MVC/index.html","5abc0aa9b8ad10546766ba85f6ace21a"],["tags/MVVM/index.html","972e0e78d337f604e6225b0e316b518e"],["tags/MapReduce/index.html","e2cbd7b896ce5f283c091fdf51f7f20c"],["tags/Markdown/index.html","6ea206c9ac91c8401ddafc7fed8e8b88"],["tags/Mecanim/index.html","626ba1a817340bd6ddaff8070fa13643"],["tags/Mono/index.html","6503bd25b042dd25fae20c29c39324a7"],["tags/NET-Core/index.html","887a1c81e6920d734ffd96cf4e95b655"],["tags/NET/index.html","704d4e1c66e2ac943faf940e1db6c8b1"],["tags/Nginx/index.html","1205f6c9b271dbad73e0884a2bb8d85e"],["tags/OBJ/index.html","775ee0744a291467de62a0eb8829315e"],["tags/Oracle/index.html","9a3300c40f38c688a5feaea04e63c67d"],["tags/PL-SQL/index.html","9b02a6424311d5a2040b101b7031a2d9"],["tags/POCOController/index.html","17e2fbf92a826d36180ac6920b2db543"],["tags/PWA/index.html","82897ecfbd73e39a46b11e369ee46778"],["tags/Python/index.html","add1e67b3b95a23150870e5293c0d465"],["tags/RESTful/index.html","fef087991a2da58547fff9422f5fb62a"],["tags/RFC/index.html","5d4371c3971a4008dc0022820978a6c0"],["tags/RPG/index.html","67b98f73c2c70664a47c8e46fbd4e716"],["tags/RSETful/index.html","eace90987e752102e6fe4dbbc4bddb2a"],["tags/React/index.html","cceb14995049bce9636404dfe8800b79"],["tags/Redis/index.html","e71b8f825f681553d33b6a1b84e5f277"],["tags/Referrer/index.html","6029e9ff79ef0443a888c47e1e84f798"],["tags/Retrofit/index.html","4065c1d246f5360c7b913e75e8a640fb"],["tags/SDL/index.html","5fa0b28eba5744ca86d2ae4a2b8205a4"],["tags/SQLite/index.html","c13a97ee448a860d7e87d540e3a6c5dc"],["tags/SSE/index.html","003720c59bf138717923c4e5ea060896"],["tags/SVN/index.html","b891425b72ad8556807b8b957793e6e2"],["tags/Script/index.html","eefcf79ed14af0c51ddc207569eb0b5f"],["tags/Server酱/index.html","8ae55c426791d41467bfde00ee4d9ff2"],["tags/Shader/index.html","465cb32ee2339ca602d198ea2be3a541"],["tags/SignalR/index.html","b3f5fd07865503bd142f95776aada79c"],["tags/Socket/index.html","1cd85541c12c29eb35ddf96d3f601e44"],["tags/Sonar/index.html","df1eeb88dc75b72449a2693e1ecdc36f"],["tags/SourceTree/index.html","596745eb28a2a470e163bb5d03210abd"],["tags/Sublime/index.html","693bad72cb8857700275bcf6b1f52d6d"],["tags/Swagger/index.html","61926a10ae89fb379e5514142c65296e"],["tags/Trace/index.html","9570bd7bf6d755fa0e88d6997bb3934f"],["tags/Travis/index.html","6e9859b794c51e0dc7948d9ef81d45cd"],["tags/Unity/index.html","3995428db6fba37990719ce5300be019"],["tags/Unity3D/index.html","6f8ff1cb0136de0976da025a04883aff"],["tags/Unity3D/pages/2/index.html","319f020f45314f63a9448a928f7fa5d7"],["tags/Unity3D/pages/3/index.html","0f56eb206c194ba6c9d9948585cab56f"],["tags/VSCode/index.html","6538b77139de1d5a3a7190caa3d3d8dc"],["tags/Valine/index.html","bc76837860a4aab4abe7af1ef99b8d84"],["tags/Visual-Studio/index.html","7b1dd8dbb276c309c449dbeef38636da"],["tags/Vue/index.html","709a208c2b9ae1cde73888f484a808c8"],["tags/WSL/index.html","25bf6f747beaa563f5c07253440dcc17"],["tags/Web-API/index.html","d23cdb69d1b9fa92072ffd54fe99f6e8"],["tags/Web/index.html","a9ea0dfeaef251dd992f8b5afeb71742"],["tags/WebApi/index.html","a96b61573e3bf9c164ef2e10981f7e0b"],["tags/WebSocket/index.html","b0680521398218a8c55f7fd54fae82ed"],["tags/Wechat/index.html","b276f53366d4c4a9031102d2cd64f8f1"],["tags/Windows/index.html","4a088e84fcdd8dd60adae05cb2115e9d"],["tags/disunity/index.html","89c8fd8fad2f48b84121ec3f0d93ca95"],["tags/index.html","74ad24a15e50f4bd4d81c347047667e1"],["tags/jsDelivr/index.html","ddbb4c56aca2aa075af64792093db1f8"],["tags/matplotlib/index.html","6bb00acfd1c62b23680df451c3bdfb65"],["tags/uGUI/index.html","efe5708e2476463080e8decc3d3becf3"],["tags/zTree/index.html","29af50fa93a081f5b5cddf0a1c360c5d"],["tags/一出好戏/index.html","5a65f943625bfa6f3b069771f358d8e2"],["tags/七牛/index.html","3134c93939c4734f36998676bd975b93"],["tags/主从复制/index.html","67ef462900597bfec3fff94ec6db6548"],["tags/事件/index.html","eebf80b4e5db9aadd1bcdba303d14fca"],["tags/二维码/index.html","8fd128b1736d91de5fb4a59b9fb9d514"],["tags/云音乐/index.html","49adc419b280448b7b19d63e2afa634d"],["tags/互联网/index.html","653e9bb7b9e2779158efed884cf39ba5"],["tags/亲情/index.html","94c9e51513270be16ff7944018bc09a1"],["tags/人文/index.html","22ceae1ebbd1c9caf2157a615109645a"],["tags/人生/index.html","86ca29ae37a3175948e890efcfebe800"],["tags/仙剑奇侠传/index.html","adec7fcf94dcc0ed03db827f522ce0be"],["tags/价值/index.html","f0c22c2b575fc2df5ee6843b76f90f15"],["tags/优化/index.html","c72f68d573f8a00e3cbf93ca4fe22e6e"],["tags/全智贤/index.html","aded117a4b93bded5552c235969c1ac7"],["tags/公众号/index.html","05517d5a88f4e92d24424f2f8e015d7c"],["tags/关卡系统/index.html","4b97c8cdcd8aac180d7696b9bdaaaa13"],["tags/函数式编程/index.html","45f443891f6c6545128ad1312fbd9298"],["tags/别离/index.html","95871fdf0f8c1007f6de2eadb453adae"],["tags/前任/index.html","b4b77b1f593d25e48a65638066b43025"],["tags/前端/index.html","16f3d832d712a482300b1a1ef3300fb3"],["tags/剑指Offer/index.html","018136427ea3849ecda5514316991c30"],["tags/加密/index.html","be1abccce2ed366a29792c0deb2004e3"],["tags/动态代理/index.html","808f24785fbf622a5cdd67c4fb6fcdab"],["tags/动态加载/index.html","579bbe5cee3dbaa90ea73ce5bb1fc701"],["tags/动画/index.html","7773fe66aabbfc7ffa969a08933a84fc"],["tags/单位/index.html","97044baeaaaa29203098f4d2bebf73ba"],["tags/单机游戏/index.html","3044270041c39ef0cca6dc4b1b84e700"],["tags/印度/index.html","b8b6e2c520d92e735ccfeb392a1c3411"],["tags/历史/index.html","376caaceb93ae9b023fdd4b8273415a4"],["tags/反编译/index.html","ae7ae0f23258e82a34404ec2b49d3380"],["tags/同步/index.html","1542767b304ee9a0ef120e9f19ff3d1e"],["tags/后端/index.html","33244ea581b9b27dc57d6941dbe83487"],["tags/命令/index.html","611f0851720f11d8ddc7cdcaccddabe5"],["tags/和平/index.html","fd45645ec84d2c977ac2826043386a01"],["tags/响应式/index.html","b0f14000321d2242aa1235e411d9422b"],["tags/哲学/index.html","f0314d62842eb745a6e8881d20c27d86"],["tags/回家/index.html","ee568bf037d0dbf929c329035f241f9f"],["tags/回忆/index.html","ac2149de8bcbe7ac0778f1879418570f"],["tags/回顾/index.html","2ccf9c2e97bc13e3160a6da03e268f87"],["tags/回首/index.html","42cfb8ebc7afe3d466656115428132d6"],["tags/图床/index.html","a16a29c789c993dce715a88916bdb8d0"],["tags/图形/index.html","8b6e1b4af3f6a493e579aa19670e9a3c"],["tags/地图/index.html","6469a80a958e8c1f612d96c549da3015"],["tags/塔防/index.html","820aab7526723715f5dfd4a12d43b046"],["tags/增强现实/index.html","a07412f1a79d7e5998f434fa3d20e527"],["tags/壁纸/index.html","4dfd8d96104c6e7cea09e5f85202a90c"],["tags/夏目漱石/index.html","6607716c95e4f000c9801a5df41ca79b"],["tags/多线程/index.html","d3c1dde41b2c1f428023a8aee0f96bee"],["tags/大护法/index.html","a1222b904ea58eb26723aed3d1f74682"],["tags/委托/index.html","db345f8000599ad2285c03e66705f45a"],["tags/孤独/index.html","4ed4d14f07cec1a477f97ff19d7bae23"],["tags/展望/index.html","647fd40324f91fb3a2c5ce00a88b7541"],["tags/工作/index.html","9b65deaee7c60c228f81dcfa538c517a"],["tags/平凡/index.html","24fb2a0418e70beebec8f2ca048f57dd"],["tags/年华/index.html","ac2274a6181d901c19d18e990db8836d"],["tags/年度/index.html","504c9eb7b164c281caf0ad5eaa4606b2"],["tags/开源/index.html","2dc582c699598371b41cb8cb0822e756"],["tags/异常/index.html","48bd0fef1370dfa17a6555f13e64e3bc"],["tags/异步/index.html","98c16406f33d8f138e9630ce115dd97f"],["tags/引擎/index.html","a88cadb3f993886f27a7715660a9e139"],["tags/影评/index.html","3acf73a9597ec936a7bd23e81066d3af"],["tags/微信/index.html","2a8c4e032c739aa1908bd99e83938d5d"],["tags/微博/index.html","8ec7b5552f4621aaea9f349089beb7e0"],["tags/心情/index.html","8cf51104b8dfff1b58edd055fcda92cd"],["tags/思维/index.html","ec19b450ef3e5a0da318db9252c40a0a"],["tags/总结/index.html","2b973b81c1c7b10c3ed8f87bd549a5f8"],["tags/想法/index.html","af2bcd0c776cedc2fd1d4352b341e2e7"],["tags/感悟/index.html","25061aa6d26df734b8d42ef3f7550ea8"],["tags/成长/index.html","dc0e0ba9250efe3cf7baa7f1d9381107"],["tags/我是猫/index.html","b9225904401531e0bc91e10b861c7435"],["tags/扩展/index.html","13b3c3863167f15356478ee4bfaf89fd"],["tags/扩展方法/index.html","6fe9d6ab1fea0ef7588e44fd6ee1c611"],["tags/技术/index.html","66e5840c54aa6673aacd1f54bd068b1f"],["tags/拖拽/index.html","82ee3f072dfe9b2b5b71dc19ffa15bd2"],["tags/插件/index.html","a775c68e8e052c4271ba7be23e27ec6e"],["tags/插件化/index.html","0a6d8f1de4c9b557968e972595bc6d7b"],["tags/数字/index.html","308ba5e125627aedd15c37f28595aaa7"],["tags/数学/index.html","3e3d6c27cfa1001548987bb564fbd3c4"],["tags/数据/index.html","d7dff6320464057e3f7ab0c373284369"],["tags/数据交换/index.html","5b2871a4b777efbdde3fa8ab5d55577b"],["tags/数据库/index.html","df38bb1690fa75ae2b001452f0954e85"],["tags/文本分类/index.html","2eb36181d1a0c0d3bd8d4f059408b0e1"],["tags/无问西东/index.html","b8ae40e622e170db3b4e855b38f955e9"],["tags/日剧/index.html","12931231a49ab82b9c87be7548ff748b"],["tags/日志/index.html","3cfe80e099e1f9b7f688d18ac5091481"],["tags/日本文学/index.html","01a0f0100dae887c1370634f3fdff053"],["tags/时区/index.html","e6942005116f28161f2cb161cab9c186"],["tags/时间/index.html","c88b4ec6df1e1b72b1d2834d5b54024e"],["tags/服务器/index.html","1c9a66aaffe79f0cc48c3468a5b4456d"],["tags/朝圣/index.html","dd69f6f2280cd81637844edbf166fcff"],["tags/朴素贝叶斯/index.html","e27477e0f7c16b39006816728a50c39d"],["tags/架构/index.html","c1ac642baf67cbd37c06b9db95dce0ed"],["tags/标注/index.html","1b8d8cabe16aa874adf8d6f67e2dd666"],["tags/校验/index.html","8636079a6b1fa84c22f4568071e6731a"],["tags/格式/index.html","cd7a8487fce9d7992e494bc65b6e7fc3"],["tags/格式化/index.html","a8f2dcb6c833ef1dc3aff08dcb6ba103"],["tags/桌面/index.html","25623bf6cace0d78a1383f8242fd63aa"],["tags/梦想/index.html","dbe811fa2861b0fd8d917a83e59f2d93"],["tags/概率/index.html","d091e258bcc526830164a04fe75c2458"],["tags/模板/index.html","935aa77ebb64016704b6b981310209ab"],["tags/模板引擎/index.html","e7aa88568b0bf54ce30ca68c51f8c19f"],["tags/毕业/index.html","44b705962ce31fe07257874c6bf70d65"],["tags/毕业季/index.html","b4f176f6d716a9acceef375d90eb857c"],["tags/消息/index.html","99103966705e1b25cd29b71778a618bc"],["tags/游戏/index.html","9e90cbda1c4c15e925bbbc9728704f07"],["tags/游戏/pages/2/index.html","24361d09230709002b86b943019b4212"],["tags/游戏开发/index.html","e623b99e18af3ed60008221cea55fc8d"],["tags/游戏引擎/index.html","05bb24d643939acfdaeea7b821c814fd"],["tags/爱情/index.html","a653090e2d5bc72abfd83aadb264bfa9"],["tags/版本控制/index.html","f11680032ac6b641d79fee38fe12c745"],["tags/版权/index.html","27a062291f5761066df94638eb3927de"],["tags/特性/index.html","191b0b5d0da13038e179f55b5ead2622"],["tags/状态/index.html","05c1b909a2453818a6d77c0bd1c9bf44"],["tags/现实/index.html","d2c61bc01c43780677bd180404c5520a"],["tags/生活/index.html","5e78381e881336677b7e20efd578c80e"],["tags/电影/index.html","e7c8f1d7820741d4de7ff26118b94240"],["tags/画家/index.html","355c04b5deae92f2b89a6e8b690b95ee"],["tags/知识共享/index.html","4061b78fcbf30f339ac9e94ce906d486"],["tags/矫情/index.html","5e03a42dfe1c5468b9c38fd1d9a4fe01"],["tags/程序员/index.html","788fa1fd45d878e0568cace3f266e744"],["tags/穹之扉/index.html","f435edfced0c170ee7f55c773c4a5c95"],["tags/穿搭/index.html","5a51ba27d881fb3d0461b56fc5e463ea"],["tags/童话/index.html","7aa63e083f937bc9c8fe4b9b263b33f3"],["tags/笔记/index.html","1552552243eab4420fc2b2a7605ea18d"],["tags/算法/index.html","95ccb652ff15ee5b76293ae549084104"],["tags/米花之味/index.html","e1efdacd74c319c4bd5574a92ea330c2"],["tags/缓存/index.html","9194ce1e855fe7a6c592e4c1615e97ba"],["tags/编程/index.html","65afffa5f6266e4227246730b58fca02"],["tags/编译/index.html","83ac4f4367c9f7232d65e20282a3cfaf"],["tags/编辑器/index.html","3de644ecfe79f383710ff3498d921a76"],["tags/网易/index.html","d04690af536dd72d53782b6326f6c437"],["tags/脚本/index.html","a2e510c363fffd7eed869aacb722cb28"],["tags/脚本语言/index.html","a5153a1adccd5f97eb3252898ecd6d72"],["tags/虚拟摇杆/index.html","1465b45dcdb66ae0a110f6f576c0eac4"],["tags/蛋炒饭/index.html","cb94a916a0849b1e27c3732169239030"],["tags/表单/index.html","3ec285d86da00d7ad3e818ba8ff6638a"],["tags/装饰器/index.html","a50f0380203c43c104b79fe1557da4a9"],["tags/西安/index.html","78b7ffc2a6f63d366536c09a46664a99"],["tags/计算机图形/index.html","4c69e4d4adf5a92b1b0ae8992700ebd8"],["tags/设计/index.html","444fc5985b85209ad85c2020f4f6b266"],["tags/设计模式/index.html","2ec2ca0bd9fe2c422b837c6e8ade1a94"],["tags/访问量/index.html","562559f372f0882e3d5147edcc78d01a"],["tags/评论/index.html","84ca9c7cdc73d3d3501281814fe81d89"],["tags/词云/index.html","a53f10c0e8578a32e7371a1ccf073f13"],["tags/诗人/index.html","d41aa5eb5822dd98d916d6224553c5c9"],["tags/语法/index.html","bc5b690028b0757ab18767160cbfbd13"],["tags/请记住我/index.html","9fcac49b68f913f29caa23d40bbde24f"],["tags/读书/index.html","122b9d5a965a616d6846f123aebf7b58"],["tags/读写分离/index.html","2508478d0a8f3faf2284debd9326e6b6"],["tags/调试/index.html","75c23f6a58d2b4fa85ca42c959843d83"],["tags/贝塞尔曲线/index.html","84684b27c463ef7ba4975b3352b9b0f1"],["tags/贪吃蛇/index.html","a5938bbb70d6b4881aa1dde559d7696c"],["tags/资源提取/index.html","8837429e5326404edd3d82b367ac2b2c"],["tags/跨域/index.html","8d4c450c9e0fe95cf25d792d4bf9e8c3"],["tags/跨平台/index.html","31d1f1b4cfe8a07ede5d2042a18b31df"],["tags/转盘/index.html","c1ac7ddce2809bcf87bec3a3111c9562"],["tags/迁移/index.html","1b671bc51337aac42583aefc01daf4a6"],["tags/通信/index.html","8c8fbd24105580c376470b7d9716bd90"],["tags/邪不压正/index.html","37038c0d6ab28b40d18f01520c12a7f6"],["tags/部署/index.html","5e8d912d27e6c7500a4dc6460b74be8a"],["tags/配载/index.html","0be24c7f67bb5c5bc2478659acf83266"],["tags/重试/index.html","3860a47713afb85b726388282a119ed4"],["tags/长安/index.html","7ced15bc516fa223112a3f31b4178d5c"],["tags/长安十二时辰/index.html","7b03e9270ebd80da92f0978288b291c4"],["tags/阅读/index.html","9bb6cde2460b5a399f36709fa1ae4495"],["tags/阿里/index.html","47fa99aa3973fe8eaa1106c8b412118a"],["tags/随笔/index.html","d214ed588ed2567bd58f50cfc62f0874"],["tags/霍金/index.html","3191136446064e574769153aedab1687"],["tags/青春/index.html","7579b2454b4af7672cd7d6ee8cae6b57"],["tags/面试/index.html","9a44fb0e5896629990ee1d89c8a21405"],["tags/韩寒/index.html","e5e109746d4d1e824c9a0828073c3d65"],["tags/马尔克斯/index.html","2d20accddbdefb4f2d195edb307730b7"],["tags/验证/index.html","23bfca5d842c8466bb37bb89f0a8ba77"],["tags/黑客/index.html","6bb8eb5780831cc213d7b8cba187fde4"],["wiki/index.html","82e95fa6208a81c6244111bbbd7c17b4"],["works/index.html","6774c335f4184f048ccfda3a034b436d"]];
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







