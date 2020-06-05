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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","e7fcc483b4a92c3d487edf7eef7d6351"],["archives/2014/12/index.html","e4cb604d0df2e710d6115c619bff9f90"],["archives/2014/index.html","ce3eaf827e64253d7e40a5e9e6c88b27"],["archives/2015/01/index.html","2e591bba1079b5b674588aea405af8ec"],["archives/2015/02/index.html","b46de8dc32bdcc2176d46a3efa563c13"],["archives/2015/03/index.html","1e5197c1de190be7a0427faf12dffa35"],["archives/2015/04/index.html","49f02195f87e88ab7b3b534bf950e836"],["archives/2015/05/index.html","5c7f1e23408ccadadac6473255b17e79"],["archives/2015/06/index.html","a348885a9cf6f8468a683a9fa3bd96c8"],["archives/2015/07/index.html","6ccb2ba537524d30c1afff1053a12bbb"],["archives/2015/08/index.html","0aa7dfb8726ea1482acac9380e6deb1b"],["archives/2015/09/index.html","8c95aa6fa1563f7d079ae139292a3846"],["archives/2015/10/index.html","3238874a7fcdbc7d66919d8952c61038"],["archives/2015/11/index.html","d51d5bc097fe83b3418450d46bbefa27"],["archives/2015/12/index.html","6124405c6dbce56d12e6f107e880a29e"],["archives/2015/index.html","01a508c9e60bcbf97743b0625079f437"],["archives/2015/pages/2/index.html","b429b62de8207ceb9852bcbe8036d844"],["archives/2015/pages/3/index.html","3841e8a57356b62937f6215bb0fda0bd"],["archives/2015/pages/4/index.html","7d604597c8be8275a9590ba209515ec3"],["archives/2015/pages/5/index.html","8350c35c8dd5e3d1be8c2313d743879c"],["archives/2015/pages/6/index.html","e174e0aa1958bd506ce172ecf1828f75"],["archives/2016/01/index.html","2a37706a4f1622c123bd98cd99849199"],["archives/2016/03/index.html","f868f300f177bdbcecadaca3188c5d50"],["archives/2016/05/index.html","f2694158940b76f977af357fdbf680cb"],["archives/2016/06/index.html","d6a917af5e85ab2aa81aa6599eca837b"],["archives/2016/07/index.html","bbeb79af5c0dbf29a09513042d4c7352"],["archives/2016/09/index.html","2bbb6375ef83ae518f56a99cb01d731a"],["archives/2016/10/index.html","7a5910d7240b00f830f84132e622a61f"],["archives/2016/11/index.html","f0cb4dc9b65189c00b9cdc91cb9d9b95"],["archives/2016/index.html","a403fe2f2d3916d5228a802a4b64e2a0"],["archives/2016/pages/2/index.html","1ff25b98c1ac47db9b13c66c598115ad"],["archives/2016/pages/3/index.html","54b897ce224cb7de4dd361e3ecdabd3c"],["archives/2017/02/index.html","00b2274b984cb5820e6d73e904e65989"],["archives/2017/03/index.html","683804ecd646060a1541f28eec8c90a0"],["archives/2017/04/index.html","2bfa58796fa1286f8e0b8e8ba9eac8b1"],["archives/2017/05/index.html","273867a2c568f951dd117e5d8e76d5ed"],["archives/2017/07/index.html","6410605a35dc0f221b351e092ebe46c2"],["archives/2017/08/index.html","c2425f15e2b18e2d1228678693ac519f"],["archives/2017/09/index.html","95babfbf18ce0a0bb975011e306b150d"],["archives/2017/10/index.html","09dd3318cb256aabb6bcbee3512151f6"],["archives/2017/11/index.html","abe04f7773813e2b0bfe1d18d9110993"],["archives/2017/12/index.html","c69b819bae91f40a750856b783960379"],["archives/2017/index.html","5685f768609450bcfb55d3e98f4d59c6"],["archives/2017/pages/2/index.html","72a93117fb19650761fdb85f8ec08d72"],["archives/2018/01/index.html","1eb83c9ca081e1517808b9761af75463"],["archives/2018/02/index.html","38fea6f2f2033d8f5668948c5b0810d6"],["archives/2018/03/index.html","9d75bf79c94c20a809b801969ef2daaa"],["archives/2018/04/index.html","4f724fbaa56e1eb2163b7bccc41545fe"],["archives/2018/05/index.html","0e5577799f2cf0f837b40c3d0102d286"],["archives/2018/06/index.html","a39d651aa5d16ef468b10975157b089f"],["archives/2018/07/index.html","58fea25793d1349d27c66c2dfd2d4b3b"],["archives/2018/08/index.html","1b2a2abb279c5d504e90a5ae546bc05a"],["archives/2018/09/index.html","402df976ff308077b7c8be69e9a7b258"],["archives/2018/10/index.html","319bb3a20ae7173d138791c711dae2b6"],["archives/2018/index.html","8eb68dd51cee16829f1449ecb5ab3eb4"],["archives/2018/pages/2/index.html","c52909115b0931e5854a3768bb44c804"],["archives/2018/pages/3/index.html","0de2248b521095aec2ad610f10db637c"],["archives/2018/pages/4/index.html","90bd8706df4d87e6e834582e1c44c481"],["archives/2019/01/index.html","d43ee2f77ae06237c226b59aef20e9a0"],["archives/2019/02/index.html","ed07befc6916a1ef4fd6a205ddc246fc"],["archives/2019/03/index.html","b076e9767612fc401bc181d2a620648a"],["archives/2019/04/index.html","113974cf96521e40a89b83dda76dc15c"],["archives/2019/05/index.html","ea4015757469407f961148fad78bce74"],["archives/2019/06/index.html","d1d45386e96e98ee32167f5b60ceb807"],["archives/2019/07/index.html","8d80c73b9652096e6fe505253d5aa126"],["archives/2019/08/index.html","04d0e3b8226913bcd0a1c5932590c4b9"],["archives/2019/09/index.html","6ed5700bb2d8db149cc5eab22f0f20fa"],["archives/2019/10/index.html","9fc2bfd471016195e75323c454e51700"],["archives/2019/11/index.html","618e7b563571d9aa66942ada2617dd3b"],["archives/2019/12/index.html","6c0bfcfe34c76fc30439f244a4b727cc"],["archives/2019/index.html","856ae7574801fc59047a4ef13501b94b"],["archives/2019/pages/2/index.html","4a704cf6371823064c78880875ff1f26"],["archives/2019/pages/3/index.html","174fb3ee1ac511a2789509747d6ca45f"],["archives/2020/01/index.html","abae4290a0e379f1cc4a69a0e1e47e60"],["archives/2020/02/index.html","43396ea0286153eb9aacacc5fc601f4d"],["archives/2020/04/index.html","405848ecb56cc8cb4f157eb59f981c05"],["archives/2020/05/index.html","f9e029be8761227e0a91fa4cba9efd2b"],["archives/2020/index.html","e557dea16690c4519e3c18e9d0f082e9"],["archives/index.html","d0ac0c2f43f47bb43b10e5d0be5f1451"],["archives/pages/10/index.html","ae2d279b2df4cf5edc711ab4821f0001"],["archives/pages/11/index.html","22fa652bb59813fb81cecb1b3a2c428d"],["archives/pages/12/index.html","de24cdb3097551cdfb934484378866c6"],["archives/pages/13/index.html","404b5454eaf541e0f93ff5ee140d7442"],["archives/pages/14/index.html","6352166c0ff810eabe7001b816891b86"],["archives/pages/15/index.html","a7b1aafefe53ebecac84dd8f5513c13f"],["archives/pages/16/index.html","9355ddd341f7bc3351e677076f41f1c2"],["archives/pages/17/index.html","6fed880c3c22686b9d80fdd9f830c8af"],["archives/pages/2/index.html","ab3afd480ccfd1af3c6264af818f47a1"],["archives/pages/3/index.html","fea4696af17fec9dd738e79041323674"],["archives/pages/4/index.html","92c0377b7b5d663fca815b1c9cf272b9"],["archives/pages/5/index.html","fe7604792db6e028680007ce984beb5b"],["archives/pages/6/index.html","1a587b5458bf94b82086c0a3da515658"],["archives/pages/7/index.html","933e9cd437aa3386bc4371a515e8f13f"],["archives/pages/8/index.html","c0789c46cf60eae8712b91bdbc8d0ce2"],["archives/pages/9/index.html","6b5270d9ec73b952a42a8e187e0b4f29"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","767a193310d99ab3fcec5ba7b990c905"],["categories/Unity3D/index.html","6dc81a5048859ed2583c25c8cdd20cf8"],["categories/Unity3D/pages/2/index.html","e1e9ee0c2280e0922b1c78c3a8c6b2e5"],["categories/index.html","83591ed030109774e64655476b5a623c"],["categories/人工智能/index.html","0efbc90fca991baae294b56de369f869"],["categories/前端开发/index.html","95d4638526a7b1d7f1f4479a7998641f"],["categories/单机游戏/index.html","a3f721cdc301cdc4a70f9cfcdcc61d9f"],["categories/开发工具/index.html","cc08cb0a8546a2c822996727c6081db8"],["categories/数据分析/index.html","6b509333d8bf3b6f86230b9e265a704d"],["categories/数据存储/index.html","c8e660b10735a22a90e51d67b00220f4"],["categories/游戏开发/index.html","c8cb62d8ed070fc4857c2f5003713b29"],["categories/游戏开发/pages/2/index.html","fc40de9fd0c486db2843e2886b534748"],["categories/游戏引擎/index.html","93e3928a4beeaf96d533464dd44a2feb"],["categories/独立博客/index.html","1bad2308b2f38e84bcd31ff503c07f1d"],["categories/生活感悟/index.html","b6ff73f257d856eafdd07ebb9a19d619"],["categories/生活感悟/pages/2/index.html","51a0a7c6b3e1cd9d384d28e0f512dac4"],["categories/生活感悟/pages/3/index.html","7bccb03715159ffc417cde18f07910ba"],["categories/编程语言/index.html","8f4ea24c3a37be3c38e56c41b8556902"],["categories/编程语言/pages/2/index.html","822d0750c0a162f154acc4c8660d25ee"],["categories/编程语言/pages/3/index.html","ce22f8de49b826e47df5087d3cea6bdd"],["categories/编程语言/pages/4/index.html","df5da8279fc7e6798a5f82d7a0faefb1"],["categories/编程语言/pages/5/index.html","574f148b5a2dbd0a790b73dae8cb2ec5"],["categories/读书笔记/index.html","8ee955f6e4ffec05fd5e736cba457e3b"],["categories/读书笔记/pages/2/index.html","2ac3e403c590bf516021b2ed3ac82181"],["friends/index.html","d5226b8cc9ac9e1ced4c02d5526aa8e3"],["index.html","70bc98bbf885f85754559c730ae7b2a5"],["movies/index.html","2f9b259720b89cde5c59316beed2e24e"],["musics/index.html","44baeed1268174d7dd6cc11ce023711a"],["pages/10/index.html","9b62c1dbf9c7976cddb65f7706cdf696"],["pages/11/index.html","f35c721ad55b41d757ce095662a12648"],["pages/12/index.html","cbef44c8527e0803a97b6247ffb5c6d1"],["pages/13/index.html","95de64737247c953bc1712b5846bb17a"],["pages/14/index.html","7e088b13a4607b460fa8feb1f126b627"],["pages/15/index.html","e5b888a9a1e3ed4192275de8390e1ca5"],["pages/16/index.html","9bc68e4fc3aea98cd7b62560eadfe6fb"],["pages/17/index.html","f9d335fb17d988622cb97e5104746b1e"],["pages/2/index.html","5bf7f5008db82d641fcf67915f6b24c1"],["pages/3/index.html","9013b882aa2309289fae44788ee2bb29"],["pages/4/index.html","e15a465c676178098e5acfc55c948e65"],["pages/5/index.html","3a3c67963f3a82e906a396c811bb6e29"],["pages/6/index.html","f72d320b13d6554bc365d05a863c2610"],["pages/7/index.html","1707cd71dd3d25a7d5eb491074ffe7dd"],["pages/8/index.html","dd65701855955995818a145839c476a2"],["pages/9/index.html","c576e9f6ced5ad40bb722bc0c1e8efc6"],["posts/1059499448/index.html","cf8f91fd6d4974a849026754449526a5"],["posts/1071063696/index.html","2752505098ede152dbadbe478538d493"],["posts/1082185388/index.html","8e74f5e6a36c088c9ed0c98b20bf62a1"],["posts/1099762326/index.html","dd7de1d7c629c4b9e77f7cc3f6cfb37d"],["posts/1113828794/index.html","2d3f502be6db96f5641bf514c9ba9c39"],["posts/1118169753/index.html","1e0b56f98fb8798ee7ffa55b6dad85cf"],["posts/1122710277/index.html","9f894f4e9defc3b368f9b5cb2c386141"],["posts/1124152964/index.html","785a477598594c2e63e613895ab85d45"],["posts/1127467740/index.html","60975652ca44a6c1575df33912b531b7"],["posts/1150071886/index.html","7cd0d8916671e8ecfaab76b74e126a73"],["posts/1150143610/index.html","209adeb373885e63d3c4fabeef287ba4"],["posts/1152813120/index.html","a1c57b170962522f7c47ffb202331b03"],["posts/115524443/index.html","b760bdeef866d29585dbdcc3a3cfbb52"],["posts/1156673678/index.html","ffa6e718efcebf170bb88bcaacdf9563"],["posts/1166840790/index.html","4d29892b0fd71465a5a031a09198420b"],["posts/116795088/index.html","cd6ef36f0caa143b7f861c8c75ff99e8"],["posts/1176959868/index.html","f5621c433cb43a281af938166433cc55"],["posts/118272597/index.html","bee8b6a7a9c76ec2680df638cea78752"],["posts/1190622881/index.html","7963bf7b64b5ca4a7304a18bc6f4f94a"],["posts/123663202/index.html","04917962292c90ed8547f2ec99bd7fce"],["posts/124807650/index.html","7f0b19211e3930cd5d78fe6eacb3661e"],["posts/1254783039/index.html","9a5537078a99b9ce9ff0f52f749fe473"],["posts/1289244227/index.html","a067bb54f0a02a47e755abda21d1c118"],["posts/1320325685/index.html","460ca76f5af3f300dbcb5d94bb818fc5"],["posts/1329254441/index.html","44d1df625aa038137a34f391c0fd847d"],["posts/1357715684/index.html","2c72078c6e5a58ad13c897591b1bd790"],["posts/1358971951/index.html","7c6fdd9d48d2dccc89c995a68febe5d9"],["posts/1386017461/index.html","8c531e7b2c837a0b98b21064bc370bce"],["posts/1394521917/index.html","85979efe51ec6efb7241a0a78c5e5b06"],["posts/1397717193/index.html","7262bbf590d541497d527a8f44868527"],["posts/1417719502/index.html","7f64210254f53993e0251777c7731bbd"],["posts/1424645834/index.html","4a36464a87e50da50bf2d8d92a50ab49"],["posts/1444577573/index.html","54ecc124038c6eb48db8f222f266787d"],["posts/1467630055/index.html","38480c43d07c31d4f4441bd1992ea7a7"],["posts/1478979553/index.html","85cc5afff3b765c3cdb747f40d11cbd4"],["posts/1540537013/index.html","680f92ad94fbdf63b2c7c060d206d2c1"],["posts/166983157/index.html","7a5ace8511169a303460271b6e958ecc"],["posts/1670305415/index.html","f38a2d2d03dbe27a87a67e557847f617"],["posts/1684318907/index.html","da4dea82e5a61809c262b6ed73a6fbfc"],["posts/169430744/index.html","9c161a69ea8d01a57d8dd46cd2a521b2"],["posts/1700650235/index.html","83737374c8dccc4e67cc40b69bd96557"],["posts/172426938/index.html","c7284ba44dd77d881ef7ee3bcb0c0430"],["posts/1836680899/index.html","20cc3773270a4093fce759a019dab093"],["posts/183718218/index.html","34a24766c7e44aecddd03dea436ded31"],["posts/187480982/index.html","07109bc2c415c9dc4c4839edf4203df9"],["posts/1930050594/index.html","1fcb0874a2ccf0f78769340a4838aed0"],["posts/1933583281/index.html","1cdc6a68e6c45688c420c51f8ed49874"],["posts/1940333895/index.html","c82a2409327b4b473ed80369fe84cb3d"],["posts/1960676615/index.html","fa6f1907b7d87ed3964e62f1a1fb9238"],["posts/1983298072/index.html","9678d7a2a1d4e95add74156409caad28"],["posts/1989654282/index.html","57472530098c73463e0ee9d0fca47bb8"],["posts/2015300310/index.html","133f6cf85c3ee33b3bd10e136036f7e3"],["posts/2038378679/index.html","227b39411c459ddc8916564f560f9cb1"],["posts/2041685704/index.html","a7b2bc3f7db0442dc907dcf4c0357499"],["posts/21112647/index.html","5b0042be6d7ed8da6892ee4217a2d4b8"],["posts/2158696176/index.html","49b200f999f4ebd1d27f0699a3ee10e9"],["posts/2171683728/index.html","3e914900b544cb71c614f35c955b74b5"],["posts/2186770732/index.html","43e378463a0482130c0afbd4927b5066"],["posts/2275646954/index.html","fd34492f980a8d6c5f0e1c4de2815b64"],["posts/2314414875/index.html","3add54ec0c56a19cf68a86b8c8682560"],["posts/2318173297/index.html","2130bca5a8423dd1e09a60bc6275d73c"],["posts/2418566449/index.html","0ddbc520b0b00414abe58bb1797f26a1"],["posts/2436573863/index.html","1a867667fbec8aa80334572d04a75c64"],["posts/2462008667/index.html","51486d089f62f441bcc5979f9a8ab9e9"],["posts/2463121881/index.html","f6ddb7f7a854706488c559ebfad1c2b9"],["posts/2488769283/index.html","000b917a481bc9c01708d95e351ff729"],["posts/2527231326/index.html","888b718f762267d657cbd1b1b708ba5b"],["posts/2583252123/index.html","9b98ccb61a11ff212a36bef850afcada"],["posts/2613006280/index.html","f98129f834dc6bd7a92dcf620602f526"],["posts/2617501472/index.html","e0e63ef99dd3dc51922c8dff5659bf97"],["posts/2676125676/index.html","52bdcd91a64a008a067abc2a4eab51a9"],["posts/2734896333/index.html","a3a4f6f3bb9f42e951d4e436e594954f"],["posts/2752169106/index.html","669026f86f6b7d052795b0501801eed1"],["posts/2799263488/index.html","946b61303e4490a356f90e1c3bbd51ae"],["posts/2805694118/index.html","a61b721d4d79ba8171bc563b50093136"],["posts/2809571715/index.html","ec0af3f3e3662f5fa214e7f50220ecd4"],["posts/2822230423/index.html","e21a94d3e0cbdbea4cb0d7bc5ac2670d"],["posts/2829333122/index.html","576eef26c82203058c456cd8956a30d3"],["posts/2911923212/index.html","2f70e34e5f76030bf0b0fa0dfcaec779"],["posts/2941880815/index.html","12719c151355aea025e408ff01b416ee"],["posts/2950334112/index.html","838ea761c85a63917c611133f53c384b"],["posts/2954591764/index.html","a979a536dfabb00869aa70b064e0ef3c"],["posts/3019914405/index.html","7e05c78862d49c7459d42134656003cd"],["posts/3032366281/index.html","7b67484269e5bb948a802ea30b189bbb"],["posts/3040357134/index.html","54447292469aa763020b87d554eb9683"],["posts/305484621/index.html","10b7732deb1cabd7f3c139ea84c82721"],["posts/3083474169/index.html","0905bdadec8fb627027712f52bfb45e8"],["posts/3099575458/index.html","4b21e682200d0ca1e214f6b8a70485c6"],["posts/3111375079/index.html","09e7b32d68199f10819a7a188c104d05"],["posts/3120185261/index.html","bf667a33094dc8ca852de742eabbb486"],["posts/3131944018/index.html","cdce5f2d781d83f1e9604c6bf95aab34"],["posts/316230277/index.html","6c6c851305c2e0690703c4dada028a42"],["posts/3175881014/index.html","1bf6186a7f265f040c5ff0398069917b"],["posts/3222622531/index.html","6762346ef290aa45a62cbcbbdc2d3540"],["posts/3247186509/index.html","ff7bb50f840296064ea1b7e0a0d57567"],["posts/3269605707/index.html","529e57742d1c02c2e644b620558aad07"],["posts/3291578070/index.html","429324e587d11f3c48341fad28de5ada"],["posts/331752533/index.html","f5b5e0efffcab64c46a0f35b0397ec4c"],["posts/3321992673/index.html","e769f5311b5bb20a9bd3fd6d4bc626c8"],["posts/335366821/index.html","1277d00de9b8a4865ebf89f0f2ec2752"],["posts/3356910090/index.html","163c7935815f08e95ff7a1d5ef021cd4"],["posts/337943766/index.html","1dbc62643e64e8762535646435739747"],["posts/3417652955/index.html","f4a450b85e0f2b46d64d5f469efe5225"],["posts/3444626340/index.html","d19423d2f51251fad83b8f8f2d4d4c8f"],["posts/3449402269/index.html","00bd1b0a07fca4d454d59e71a4a92bc7"],["posts/345410188/index.html","f18dd9a161e85884b4b6117427c9138f"],["posts/3461518355/index.html","a91d5e0ee9a31cd194870829025f0e98"],["posts/3494408209/index.html","b5d4f94c651fd17f8026f5d9752db3f2"],["posts/352037321/index.html","0c653e737a1ae69dd91cc1b073469c03"],["posts/3521618732/index.html","509014cf48142574344798835ac92153"],["posts/3568552646/index.html","faadc03020a407a5b59b551031cf98d8"],["posts/3603924376/index.html","b14e93cb418f6b05bde6d3e667f55b0c"],["posts/3637847962/index.html","76719ec78d3ea679969417021fc856bc"],["posts/3642630198/index.html","dffe330e6d84589ff82d9131f9c5e77a"],["posts/3653662258/index.html","ad0153ae98e8b12735ab568ce35fd6ba"],["posts/3653716295/index.html","434c1688cb3cfa0a104dfa561bcd2d7c"],["posts/3657008967/index.html","0339d51fb17836d21af34ec7c25b9538"],["posts/3668933172/index.html","5177e52c8bddd75b8216b27b3763652a"],["posts/3677280829/index.html","2e8e0d8e599b6b5fd6e08f0467f61274"],["posts/3687594958/index.html","4ec4883fb606ce5b52259b504a06212d"],["posts/369095810/index.html","9881e38d4c5788889a6c810a1f786e92"],["posts/3695777215/index.html","43e713f01afc1f0f65bef395600ccdf6"],["posts/3736599391/index.html","9f2895cb8881c350228c140d2bcc214f"],["posts/3742212493/index.html","f97c163c5894e7334e552d7f84572527"],["posts/3782208845/index.html","e0bd602ec34f4a049ba93b389b1219bb"],["posts/3789971938/index.html","397a97879ef009d78efafc6e7ada4221"],["posts/380519286/index.html","491b8d30deafeddd7ca5c4ccd40ad578"],["posts/3846545990/index.html","81a2327953572470ea90178e7f1c0a12"],["posts/3873710624/index.html","858e48b61b8dce484cb58e6bc89d0c36"],["posts/3959327595/index.html","a743331a16e2f03167ce2dfefb524d61"],["posts/3972610476/index.html","9339346056ae140cb0ff845bc03117f6"],["posts/3995512051/index.html","a3b533f01ab18b0ec1e3eb10df5d1047"],["posts/4088452183/index.html","2b9959e3845b598e2ca5f7afe99fb349"],["posts/4116164325/index.html","57db74432279ed3472bb2593dc2ef732"],["posts/4158690468/index.html","2d61f69ac9da3bb8a43794b6ec186aaf"],["posts/4159187524/index.html","08f3ecd97653550768181d1515308738"],["posts/4197961431/index.html","69a3b1b6946da2016b82cc206cf6b3e2"],["posts/4205536912/index.html","1a9aa86c24907ccfd95d7eb7d823dcb7"],["posts/4236649/index.html","0f5f9266780180747199f1a9d8cd5c0e"],["posts/426338252/index.html","0e9655ff3f423efb93fb41d687c103bc"],["posts/450254281/index.html","76604d09cc559bd83851bbb32584cdee"],["posts/4891372/index.html","50d5048054de2c7ff567e304b09c8029"],["posts/569337285/index.html","b3f14b9dd184924978cf96e2b22afb15"],["posts/570137885/index.html","ef71b5aee177234af521b67b90c18d73"],["posts/570888918/index.html","f49f685d540c23fd247dc1584189ecac"],["posts/582264328/index.html","e5dc19f515366ac98318c2055e72747f"],["posts/632291273/index.html","621f4f478c5f73c31d4ae1abf3b99920"],["posts/70687890/index.html","d18706c2c18cef50caef05f2ca17d3ed"],["posts/719322223/index.html","4cf717f81a4e0da3ed0b19f6a1cc81c4"],["posts/720539850/index.html","da15c749008b66562e8e2a56ff28585b"],["posts/786195243/index.html","5d3513389bde5dcbd058f8fb5fd2bf44"],["posts/795474045/index.html","234751d4791bcc4021fb8cd3346d2708"],["posts/815861661/index.html","1f31e61d5e3cb09a15fbffcc5c9ffc24"],["posts/821259985/index.html","f45c6fe633757cf86b0df4f801ac88e9"],["posts/828223375/index.html","e155f98c0b7c12e9c48c0970ded05a1a"],["posts/887585917/index.html","86e3286d7902b5bc918cd9673a43f396"],["posts/888549816/index.html","9b71c5a1e78ad0573acfa075c9297e88"],["posts/906436376/index.html","1f1e6c20d7281582ba299f34c43f298e"],["posts/907824546/index.html","e7bf496f651ca4b614aec9f87331db4f"],["posts/927393529/index.html","d28d9104d069b405d967a4cc91eacd87"],["posts/94443781/index.html","7de29f3185c2071a2e93ca5dda89bce5"],["tags/2014/index.html","8e95b32b1b13f3c64ee69a5046f046c7"],["tags/2019/index.html","1273f71d1cb6980ddbbbc4c8cd74c868"],["tags/AI/index.html","42efc92e8ec4df4bcc3ea0f340fe6054"],["tags/AOP/index.html","e914e08ba81b9aba95cd359b5f9d3713"],["tags/AR/index.html","bcbe83db66286d98a7d7d6845ac1604b"],["tags/AssetBundle/index.html","485842d0ddbb45897d244b7050bb83ae"],["tags/C/index.html","a924d9cb35b27022a42d60e165fc9fcc"],["tags/CDN/index.html","56ff33f68f4c8478160ca75afded17dd"],["tags/CG/index.html","ad599c4e121fb836930518557f1db2ae"],["tags/CI/index.html","31329bef19343370a041a3fddbd0e7b8"],["tags/CORS/index.html","1c4a0266c1328d6fafa1d3e750209956"],["tags/CSharp/index.html","25e9011a02580f42abd26dcbda44db9e"],["tags/Castle/index.html","666759cf43da0c85e36a7c1d828c9bf5"],["tags/DBeaver/index.html","3bca917b2ff24a813fdfbec3daa4a56f"],["tags/Dapper/index.html","e467cadb13512095f26ea39bbbf9a5c6"],["tags/Docker/index.html","6027e70b208a3bed4ebc83b0c7cb7330"],["tags/Dynamic-Proxy/index.html","5f1d214c4692a6f8d252557f839e0201"],["tags/Dynamic-WebApi/index.html","bf31c2cbcd83129b367134f0f50eae15"],["tags/EF/index.html","f92696bfc67bf8ef3c20e9d627d4a41c"],["tags/ELK/index.html","e27b269c2e5c6c673c8d49b03d8ec0ed"],["tags/ES6/index.html","e679b17e5a120451bda0f40b0292a772"],["tags/EasyAR/index.html","887f7d26c9046d82cbb693b6cd7d87d9"],["tags/Excel/index.html","d9c58b465739343e370c0deacbfe5ebd"],["tags/FP/index.html","4ccf30edffc8bb111e42ca05be19b6dd"],["tags/Form/index.html","f03bfa21e6f27d1741810dc31d376b4f"],["tags/Git/index.html","86f89833ef65bd780aaa1e9e925b91fd"],["tags/Github/index.html","9e7cd914361052b01dbe8be7aa5e7811"],["tags/HTML5/index.html","66f2dc68d5b59a95cb64b0899c3f81a5"],["tags/HTTP/index.html","89c73a68473599f4a83080835f151986"],["tags/Hangfire/index.html","9eb0f402f7d5a9bb21f1061e0a02a9af"],["tags/Hexo/index.html","ad09554ffb555973eabe0bb6fe057214"],["tags/HttpClient/index.html","7cb76b7e51b8b122c31a52aded1ca537"],["tags/Hyperlog/index.html","0bbd6ef41fbe881d7e90eb5092f05f8d"],["tags/IDE/index.html","4ebae696cbbe49277e910451f65dfab5"],["tags/JS/index.html","3a63daeffafed8725f423d41fe50cf71"],["tags/JSON/index.html","8adc4642823525d6d1f3a76c0bb58bff"],["tags/JSONP/index.html","df602307753e1b33ae3f300c1421f459"],["tags/Java/index.html","09ef2b32aa0b7ca0cc882ed4e40861a8"],["tags/JavaScript/index.html","b86c1851d3ff989ed4ae1167992c0cde"],["tags/Jexus/index.html","f306338fe9e73974330b131358dd03ec"],["tags/Kindle/index.html","2b828a278fc8e36ccad6998b8f25fe80"],["tags/Lambda/index.html","8ce756f25368f229bf344daa9278a1a3"],["tags/Linq/index.html","2328737e52099a790754bd1b2aa67806"],["tags/Linux/index.html","0e655169697ebc489d28f7c14692a8cd"],["tags/Liquid/index.html","9850156a1bbbf363ea97b564f2a61c2d"],["tags/Logger/index.html","c739ddb183d2487ac4a9f30803e9f2c6"],["tags/Love2D/index.html","d45e34fcafcc62bf92614a675e0c341d"],["tags/Lua/index.html","f777331c6c0394fe90de832a2f1f5b1e"],["tags/MMD/index.html","023910e30847c301b9fb638476088dde"],["tags/MSBuild/index.html","2eedf07e5b1d573ffb604b54d5ae1c10"],["tags/MVC/index.html","f45114c9636a6a91331a27c59bbf110e"],["tags/MVVM/index.html","3306b9ba975b2eab431d02adfa7706ed"],["tags/MapReduce/index.html","157bcd987a6726378db520c7a55f3dcb"],["tags/Markdown/index.html","52e55cbfe6fda0d35b3510c5b2a2a23f"],["tags/Mecanim/index.html","6f7029293d6e6fc15ec183cdf8176919"],["tags/Mono/index.html","f4cceb34ad2ec7777269f935174af157"],["tags/NET-Core/index.html","81b8c16aa225610e554b1fa9915f2b26"],["tags/NET/index.html","50d6ac3e9506ae64fa2ad3d52036b2db"],["tags/Nginx/index.html","fd21ae3db8b8e4407c7b5a08145a173a"],["tags/OBJ/index.html","880fdb813dd0575afced6c04a74cad87"],["tags/Oracle/index.html","8b25be44aaf291ba9f9f8fd7c491c447"],["tags/PL-SQL/index.html","a2fa125300723b99f2044e351326a38f"],["tags/POCOController/index.html","f57509775c026dd991046a4ace40dac3"],["tags/PWA/index.html","9a6a6b00e6341ffa1cbf9c815dd4b38c"],["tags/Python/index.html","79c070a2fc7babd783352542f29adc24"],["tags/RESTful/index.html","a6cf4b88aabce5c89e1ef11d2972e2dd"],["tags/RFC/index.html","7ab89629b3d1aefe5a5df9d203cd758d"],["tags/RPG/index.html","138942d16da2b6cd13918a1e21aaaa36"],["tags/RSETful/index.html","e78bb9c890d44d7d7250bb59303cac04"],["tags/React/index.html","801b6859471c8513101195ada08dbba6"],["tags/Redis/index.html","b4dd58bd402a00ae63cc825c791deeb8"],["tags/Referrer/index.html","93fb47964e0b61dd462bae9b5c7d033c"],["tags/Retrofit/index.html","f9bea52f9a6557d23df98417a2c5cf19"],["tags/SDL/index.html","0071444ed87c195ae8e93ab24db8bf3f"],["tags/SQLite/index.html","c15dfafd5e454b834463833f9d1dd993"],["tags/SSE/index.html","d1c10ad0f6e5f70e3591c92ac987d529"],["tags/SVN/index.html","417c5f6a1fc3d413b3f03412759f51ee"],["tags/Script/index.html","66ffc4e3bcf6d6892824cec3ca45bbc7"],["tags/Server酱/index.html","6b6412b36bb4950b6a3fc6afef885bf1"],["tags/Shader/index.html","1b226e70d6a239c48a035deb533fac23"],["tags/SignalR/index.html","18fa162326123da0ad82ad3cc57623ef"],["tags/Socket/index.html","0878c700bd584beca6168ffbd60ca77e"],["tags/Sonar/index.html","de56fd170911deb2173ed17139282711"],["tags/SourceTree/index.html","f8df7f7cb8534d14dd038ae24a6d2ded"],["tags/Sublime/index.html","361bae23be64e22dc07787e053ca34fe"],["tags/Swagger/index.html","56648da6b123c9b8adccffec9a0a19d5"],["tags/Trace/index.html","2c0cd8a105bfe7d7003b0673d411a606"],["tags/Travis/index.html","bd8e3d7147f8a088b0e47165ea2d37ed"],["tags/Unity/index.html","c1405711832b5500b092ae61b1be7cc3"],["tags/Unity3D/index.html","4e1160c5657ed2cec8ca67a729366ee8"],["tags/Unity3D/pages/2/index.html","43a0378dc7b89eaef5f314924a3a9bf2"],["tags/Unity3D/pages/3/index.html","4aa316e8191efce947efee3cf0a2f61b"],["tags/VSCode/index.html","87246050acf2533d43c0eb22f22b9ab1"],["tags/Valine/index.html","b25c218059186563829e46a98f50b9ee"],["tags/Visual-Studio/index.html","6711b2361c38170a6a977ad8829667b7"],["tags/Vue/index.html","f2d5bb9a321fa25e9c4b71240c4608c0"],["tags/WSL/index.html","ac07bde15aff78e05610d4052d86529d"],["tags/Web-API/index.html","77f77483039de54a83d853b6e778bcf5"],["tags/Web/index.html","d64037475c52d78067791496de42e278"],["tags/WebApi/index.html","4e939e1624f4b98045ee9a4578226d03"],["tags/WebSocket/index.html","ebe80a6292d1aeae28229e48f7264f6d"],["tags/Wechat/index.html","49faf391c94fd9541507c2e19ada17e3"],["tags/Windows/index.html","e82a9ac7710c727e1e1b935b268031af"],["tags/disunity/index.html","7889855d0d67f2562d3bb47c4b74c2d6"],["tags/index.html","ab5dedddd8350dc48679882d33e7bd9d"],["tags/jsDelivr/index.html","faf8d588eece74cb7e4f12f76a85d585"],["tags/matplotlib/index.html","cf1fdad260720e51dfbbb60691f57b14"],["tags/uGUI/index.html","49e8920b62709cc892075623dfe1d8d7"],["tags/zTree/index.html","aabb444d32b128fc05ec2a881b442c61"],["tags/一出好戏/index.html","4ff4aebddba1e3946f4a45e9f56503b2"],["tags/七牛/index.html","c7fd2cabd9a22158ae43b0c0bfbe60f6"],["tags/主从复制/index.html","e12ff266afe0cc6ef1d8586ced46a182"],["tags/事件/index.html","94078d8b6e79a576cf17c4b2e9f4e374"],["tags/二维码/index.html","a9ac8b2ed076104de927d47b26e0b3bd"],["tags/云音乐/index.html","7ecf3bbeb12170e093052d70dd3cd3fc"],["tags/互联网/index.html","72d1e4a5c518d6e1b95fb83d1af0fbbd"],["tags/亲情/index.html","89b59bb8de2f6d0aad0d8da6145c97c5"],["tags/人文/index.html","8ac40aa0f5809a4e21a57914c9f896df"],["tags/人生/index.html","33357fa86d9c5d474d715070c1f8d4b5"],["tags/仙剑奇侠传/index.html","18b42799b2509b7d2a03b043913a20b3"],["tags/价值/index.html","b2263f78982ed2a19efcce26813594a1"],["tags/优化/index.html","da808b885e49bf76df6f13ff707556dd"],["tags/全智贤/index.html","0877e1dc95ad0d69ac1081f06ff2a156"],["tags/公众号/index.html","40a6aff4f91ff2387cfc8802e4a4b2a3"],["tags/关卡系统/index.html","3dc64d0db705abba6be0bc2a1d27dc31"],["tags/函数式编程/index.html","1b2282d4fb316747d8de80cc00776502"],["tags/别离/index.html","4bb6dbdb1fecea7c3339a203d8fd52a8"],["tags/前任/index.html","ec6eb669de5bdd0ec24831f17f935aca"],["tags/前端/index.html","daefe1e877a5e825a89e0284faa0fd4c"],["tags/剑指Offer/index.html","eb2730289762ce8ab18a50d7a28ac729"],["tags/加密/index.html","55f3c8bba414e9dc1bf1fcddd4a5c9ee"],["tags/动态代理/index.html","96c479753aee32abf54adaf287a398e2"],["tags/动态加载/index.html","798de21d6005fc9ca65b8c09bb21ad7a"],["tags/动画/index.html","3e8ac7d3230c89e5690d60ddb61ad652"],["tags/单位/index.html","33eaaa25ebf28c6d0c729517ecbb89ac"],["tags/单机游戏/index.html","533c55186ae76e4b44ee1f5cad20686e"],["tags/印度/index.html","ff06a6b27dc7a860aa11f654f89d63bf"],["tags/历史/index.html","49fe8ee63f86ea060a4c506b10f918ab"],["tags/反编译/index.html","966617fa89f93e4305afeae2e1552058"],["tags/同步/index.html","545f4464cb60b519647778553c0bd707"],["tags/后端/index.html","60504a45eb95be4c8c5b54afbf344265"],["tags/命令/index.html","d6fcb8259f958b922ca58e12e696ba8c"],["tags/和平/index.html","cc8aaee2510192bad0d30dff0c9fddcf"],["tags/响应式/index.html","d6bc6f6da66ba1af51c7bc3c6bb36636"],["tags/哲学/index.html","8141c478b383020ba5870138647d3986"],["tags/回家/index.html","d15e347afc342954cd961b237bc63416"],["tags/回忆/index.html","38fd1705b92649776a257013bd852da5"],["tags/回顾/index.html","f30d251dd0ce2f5cbed6ece0ed9c42c2"],["tags/回首/index.html","b20b938585890d4fd8e34c67c8d818b8"],["tags/图床/index.html","fb07635a33d280b620c9186d8f75ca4d"],["tags/图形/index.html","c52bad1458e68a4668b757a99864db6b"],["tags/地图/index.html","712c89be58da7ce78b9df4e86cb3e499"],["tags/塔防/index.html","7d90b9d2913ed368de8c18751f931e7d"],["tags/增强现实/index.html","ae21838a423d99d8eb55abaa156b2d84"],["tags/壁纸/index.html","579d0fcbe50ccb4b70eef47074040d6e"],["tags/夏目漱石/index.html","369e16afe4ee32d92f48882fea2251f4"],["tags/多线程/index.html","6d9aac3863096c36f715eba000135245"],["tags/大护法/index.html","c994cd9fba3087565ff176433fe69941"],["tags/委托/index.html","e1ab17f54564e1050c9815384c268b25"],["tags/孤独/index.html","b25df8e9ebe28956a2ce0869e8611d68"],["tags/审计/index.html","8121447fa8a32e814c3b8b7c6a4f97e9"],["tags/展望/index.html","8cd1d3d22e9897be71772782662a370f"],["tags/工作/index.html","a4962ec8acd56cfb34fde2002075261b"],["tags/平凡/index.html","164728e2f3e784bf81e7f20de846f5c0"],["tags/年华/index.html","13c5901996fab2d0602f850585835f7c"],["tags/年度/index.html","309105fec5c58f9a096915a8b67bacb4"],["tags/开源/index.html","64cfe7d874f3587f22ef8ca82409de4b"],["tags/异常/index.html","4f0b638acc03d9a7cfb4e1cd566c94bd"],["tags/异步/index.html","851efb736f13a3fdf423c9708f8f3607"],["tags/引擎/index.html","361d5f3816d7f6a3f598992168be4fb7"],["tags/影评/index.html","69535f37c494318526b661f7de3da389"],["tags/微信/index.html","e934db100963f30cd2872858d452e0ab"],["tags/微博/index.html","943a46c0fb650cda77793bf4351ca1aa"],["tags/心情/index.html","3f4c5bae765cbab2ed8708d1ed4f5400"],["tags/思维/index.html","e5fb986d3817841b86dd2a6b53cde57e"],["tags/总结/index.html","086baa2b485cb364b0dcefb5da66eb74"],["tags/想法/index.html","2e4fbea5ff65d239bb108aca52c09d9c"],["tags/感悟/index.html","b4cec37c2c76888904a17070dcaa9460"],["tags/成长/index.html","bb95c62ca69a2b1d68f90a91247e8a4a"],["tags/我是猫/index.html","021794c628505d5a0e3a5b1ba26f8932"],["tags/扩展/index.html","df6d58fbc98f976d2b2388dfe6f2c2cc"],["tags/扩展方法/index.html","8599d62e9c917ac4cdd9e35ff85e8c08"],["tags/技术/index.html","6cb8f524f0f8772cd59e03d3cec386db"],["tags/拖拽/index.html","fbd0cc872161c72013e387c3dd0e2cb4"],["tags/插件/index.html","719dc0e75d61e6a333b0026520c3afcd"],["tags/插件化/index.html","064620842dc7c3ee5559ede9dcf81e8b"],["tags/数字/index.html","333bbfb48648e56fe3ca25fcfa48049d"],["tags/数学/index.html","1797c85ee6259cf0538195a7e19299cc"],["tags/数据/index.html","b7853d5d435ff39ec68d924f46708ab9"],["tags/数据交换/index.html","492bf4bffb7f3d70c15486ec1d8b1c49"],["tags/数据库/index.html","7fe8f0cfda865047d2821d53c5c35c68"],["tags/文本分类/index.html","d3edea1819431904d74f1ec9f530283f"],["tags/无问西东/index.html","01fcfbc797b4a3d850f5fe2b9d173dc9"],["tags/日剧/index.html","1c8b988ae16dd7b097614407d45a787a"],["tags/日志/index.html","5e947eba45028786a4f0f4d27cbec012"],["tags/日本文学/index.html","1c724eb5510f079be15dc5f5a6c78380"],["tags/时区/index.html","df5c4d5cf9975b9294a6a73afa95490e"],["tags/时间/index.html","f2caf58df6049dc4f88d7a5d4bd2e74d"],["tags/服务器/index.html","122d7657c5b2417983e0dcab2899400e"],["tags/朝圣/index.html","098592bfed336296aae91989f08152f8"],["tags/朴素贝叶斯/index.html","bb42dc68d7133c94ddfa7257591ecea9"],["tags/架构/index.html","f7713706b7f3358eea926a61ff54507e"],["tags/标注/index.html","5cc1802d948973477c1798cbc21ecce1"],["tags/校验/index.html","7cb2f70d6367b580d19954d26c88eedb"],["tags/格式/index.html","fd95cdaf3654d50ce75e6ea5936219cb"],["tags/格式化/index.html","d2f809bbc6123a26a28853f474e69a59"],["tags/桌面/index.html","33b13f597bb876419e3150ce00113286"],["tags/梦想/index.html","1a6787d60fc57b975a6df6e8d1ffdce3"],["tags/概率/index.html","2911119985d0cdec102c91901f5856b4"],["tags/模板/index.html","cfe4854045c3c98a7786a01edd0eb21d"],["tags/模板引擎/index.html","8cc9b50c8a0262f1b71b7d4c01576bc3"],["tags/毕业/index.html","048799f7e66a8392a2c1864e84a92fed"],["tags/毕业季/index.html","9289f3a748f8bdec330742bdaaf2911b"],["tags/消息/index.html","393ae1e0d199297371dd9fbeaaa5fb4d"],["tags/游戏/index.html","59c10f73811b0158eab7ea6ca4486acb"],["tags/游戏/pages/2/index.html","ba9249b36fa3f32d8eda20bf196d38b8"],["tags/游戏开发/index.html","4d5d0dc19fda126e8ac3a1c500684e5d"],["tags/游戏引擎/index.html","d87c87e6a8153df576044c9cad39d0cf"],["tags/爱情/index.html","b2dc9029ca5f3f813de42a9137d97c86"],["tags/版本控制/index.html","09eb41971c9d63381db0616d4d7cf33d"],["tags/版权/index.html","83ff2e228779ddca483386aba2589c19"],["tags/特性/index.html","816a71c8fcbe94dfc6b481f50862a69e"],["tags/状态/index.html","f098a80a142abbb488b87b9aa594acb3"],["tags/现实/index.html","edb4342e1e05ba9c6a0cc7d85cec1c2c"],["tags/生活/index.html","7dd004dc6fc6b86e2b5a9d5d56d58240"],["tags/电影/index.html","0d930a71a8ea21ce3b135e18e4b19c00"],["tags/画家/index.html","e7e0cd0f3e845e600a95895b0750795c"],["tags/知识共享/index.html","409c15ed2ff5b2fcff8b645b0f85ae64"],["tags/矫情/index.html","47fb827efed6e180b82533983c14cd6a"],["tags/程序员/index.html","18df53091aed65d59ce917a374036dc1"],["tags/穹之扉/index.html","19bf90c7cb21a826648fa20a9fa9cb07"],["tags/穿搭/index.html","120d71bb8712b416ec723ac7aac505f2"],["tags/童话/index.html","bf0b0489780baec3bc3a7df51b8ae62d"],["tags/笔记/index.html","8db0bffa7a6fd1f7a27346b896ded477"],["tags/算法/index.html","e0859fdb1c588cca0af60f9cc353eaf1"],["tags/米花之味/index.html","6e7d0ca6fba95d3c5c8a5d51dc5a2f6e"],["tags/缓存/index.html","38cae7fda140c1b8c187890ff9d41963"],["tags/编程/index.html","3e2de2733a56a6eac81af8084e15f259"],["tags/编译/index.html","f6042c031ee14c1dc2301e8c36deeb43"],["tags/编辑器/index.html","01d21dcd53ef4c2298667d01087bd58f"],["tags/网易/index.html","aaf532115cb43bcf6164f295f2b0abb7"],["tags/脚本/index.html","eb48882414eace1d95c35a05fee931b0"],["tags/脚本语言/index.html","b958ea54803a95d550db40ad92cf2f95"],["tags/虚拟摇杆/index.html","871c1c79876ba606348651f92b5b755a"],["tags/蛋炒饭/index.html","62df09650424c6667c73f3c0bb72607a"],["tags/表单/index.html","0179a2090eee34fdb7db1bc1b1b210e9"],["tags/表达式树/index.html","4bd868484ed5298fdbeb087e53d67055"],["tags/装饰器/index.html","30ed174b2f46606b35f94895071f23d3"],["tags/西安/index.html","af6304ddb713c07ccc2279cc0b17ff71"],["tags/计算机图形/index.html","7a1bcf36293cba48127b8764b64bb991"],["tags/设计/index.html","25f8a2af84371e4ab44cc197b3f45922"],["tags/设计模式/index.html","11408f26dd2af2b8bbd54258a29df4f3"],["tags/访问量/index.html","ca24614a6c0642bf16649df22c4d8c68"],["tags/评论/index.html","aca0297377ed48c2945e52371ce2c4f4"],["tags/词云/index.html","c1aa8571ef59d532b9694512d013949b"],["tags/诗人/index.html","7b5d59a0068da7b2708dfeb4bdabc55a"],["tags/语法/index.html","ab9bf2c3aeb2b6995ee59f32b08206a2"],["tags/请记住我/index.html","f761404a3423a20fc087b4d182cb33e3"],["tags/读书/index.html","bc7bea06460fd3183fca582758eaffba"],["tags/读写分离/index.html","8d8972984d5ec7f6d0e130be1ba25350"],["tags/调试/index.html","8020ccbb77bfd27d921ccfc5e5da5905"],["tags/贝塞尔曲线/index.html","c98a2c0dd51503b7bd8c293018d77dee"],["tags/贪吃蛇/index.html","df5c50bfd88db383a6ee974da9ea3610"],["tags/资源提取/index.html","4bcea084c7bf2ccde4b03ab03242c0f8"],["tags/跨域/index.html","dd3cc5af2fa5136214f7a62020261fca"],["tags/跨平台/index.html","3b83e27a4f6a9bcf7ca716f7d1776d33"],["tags/转盘/index.html","f9f867fd454e725083f4090bff9adc8b"],["tags/迁移/index.html","530ce03d6c92ec95e2c87b256422726e"],["tags/通信/index.html","801da3222e4c482b10953324f61af098"],["tags/邪不压正/index.html","a951ca57688955c7fe3d28f05ae804a4"],["tags/部署/index.html","3aec752dbcbf662744e1d90e6fdfd1af"],["tags/配载/index.html","c8f7e727a1bdbe202c7ba30e1dcaa820"],["tags/重试/index.html","83af779760ad9f8184df05fc30c05305"],["tags/长安/index.html","650709955ba61b03d7dd39cabd93dcb7"],["tags/长安十二时辰/index.html","3a3987341bc36211d5d5bf203d07ce1d"],["tags/阅读/index.html","0bd93876b8c09e423166e1e3ea1f6f70"],["tags/阿里/index.html","e3d3788c9fcee5591ef51095765461a6"],["tags/随笔/index.html","de1ab5be8e970f01f8befa6e1c4218fe"],["tags/霍金/index.html","2d04f11bed77aaf065da6aa3676a5700"],["tags/青春/index.html","bae8ead744d5e43eeaa638084385d6f4"],["tags/面试/index.html","b7d8bb55b844db7cac1fc53fa6b2c225"],["tags/韩寒/index.html","f429b22ea956fd7a070de7ab10fef0e2"],["tags/马尔克斯/index.html","8563b0e17be4792723ba477d378a5f65"],["tags/验证/index.html","6e71e8d9b7220a4633e3a3ed16110260"],["tags/黑客/index.html","7942c0871163679b4e70a511dc06bc37"],["wiki/index.html","c6650a6605498a461ba065b0a95f2bb4"],["works/index.html","84e2a61b7cbebc7d64e91316e42b3f8d"]];
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







