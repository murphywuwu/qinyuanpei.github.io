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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","de5a11f44b0aae35bef6c05ab5a04ae3"],["archives/2014/12/index.html","fe7ee6123f0e397e66c1f5fe5c245709"],["archives/2014/index.html","7828419830e04121c785bf4c0a90e1eb"],["archives/2015/01/index.html","c0899fe51fd42a193a67b27168c04ec9"],["archives/2015/02/index.html","6fab6887827b8d10700b3a516663f7a3"],["archives/2015/03/index.html","6993c8fb566a86f41f7a91deecfb76b4"],["archives/2015/04/index.html","5aa7812d9e4d07b10c71c60c9dd0d013"],["archives/2015/05/index.html","27fb5f990b8774e610f53681f27d100b"],["archives/2015/06/index.html","63ee2153067631a250250934d2a68126"],["archives/2015/07/index.html","b0e15c0f3199a75371c42356d6a32382"],["archives/2015/08/index.html","d7302845dcc2342f729430c63be5e25d"],["archives/2015/09/index.html","242e52fa86a002f8f3f5a63c1a97075a"],["archives/2015/10/index.html","9bf72aaebcaf8d46365007ef3b0cdbf9"],["archives/2015/11/index.html","ad4a0a4814b1f7cbe5da55a188858a08"],["archives/2015/12/index.html","8945050eb717e967df08a4246ff649b0"],["archives/2015/index.html","69c6eebcee614d509d7af527047be195"],["archives/2015/pages/2/index.html","77f47d44df9a0266cdc4a08c9cb8f463"],["archives/2015/pages/3/index.html","f501cff2e145c0135554a906e7551bbf"],["archives/2015/pages/4/index.html","e125e33224ebcd0ba243de3b685368d8"],["archives/2015/pages/5/index.html","e63fba8b17a867a0410804dbf3bea7bc"],["archives/2015/pages/6/index.html","4782cff5ec5fc2c9178a89ccb6fdba69"],["archives/2016/01/index.html","abb96043d47ac45c44de86b187d9f914"],["archives/2016/03/index.html","ca065b8422a18eb9360dffafcdb336e1"],["archives/2016/05/index.html","8373f21669e83002121c534e4260fda6"],["archives/2016/06/index.html","d7157bb50f8b35064ac6cde330c1c4df"],["archives/2016/07/index.html","a83209100d703b508a00d35458a18c64"],["archives/2016/09/index.html","c36b8adf517d8fd3b56d69f37bff56b6"],["archives/2016/10/index.html","0d064c2e2b4708c342ab92d38ff204a7"],["archives/2016/11/index.html","1d4cabbb11a57d952c0f64d92ebc43f1"],["archives/2016/index.html","8abe7c4f5fda22c28cc51c85fc2891ba"],["archives/2016/pages/2/index.html","2b7e652c84e7e082845f1cb721be1af2"],["archives/2016/pages/3/index.html","5e6b8d4c0adaa1a01704e0bd5371ae9c"],["archives/2017/02/index.html","a505439859a37d7a7df5519cf62c5670"],["archives/2017/03/index.html","9447a998910e877a1b1db235f91a9d6a"],["archives/2017/04/index.html","281c8f76b58d7c421711182929051306"],["archives/2017/05/index.html","1d6261066bb9db2296070eb8ad7248d9"],["archives/2017/07/index.html","5f915a64402b5de732845f560377d00a"],["archives/2017/08/index.html","7b5aeb39190f8a70844122ba99b6bf7a"],["archives/2017/09/index.html","62a659021c264ac01f431b8021207461"],["archives/2017/10/index.html","7f10ffc1db4a80a576d605d5f59930b4"],["archives/2017/11/index.html","f59f52f41f1dbba8ff16b72e15be6cc2"],["archives/2017/12/index.html","e1e15c92e5d726b7a9391938fb2ad283"],["archives/2017/index.html","dd8abf2651a573fd86faccd5d158f5f4"],["archives/2017/pages/2/index.html","ef95257279820e75125e5f3dda253929"],["archives/2018/01/index.html","019405e1305162fb6913f94edc29d718"],["archives/2018/02/index.html","ac0d1cc1ab1aeb2e04ff68df57497bfc"],["archives/2018/03/index.html","ffcc6e79a86f38de71ed0378fd8ce3c7"],["archives/2018/04/index.html","c009955413fc5abe165d4de0f644ce5b"],["archives/2018/05/index.html","e54ee93c547f85eed9ba2b8758dde2e4"],["archives/2018/06/index.html","c4e6c32a5365de654b0e5f4dca62a070"],["archives/2018/07/index.html","2633c27485ff1c07345164939e61c2df"],["archives/2018/08/index.html","79e7165ec6265e16f773d61aff1e21eb"],["archives/2018/09/index.html","ee5bf24457bf09a91adc8af9da682bb6"],["archives/2018/10/index.html","323366add2d34fe41e267b71fc91fc83"],["archives/2018/index.html","d04f60d812d0d0fb4a792cff65fc2280"],["archives/2018/pages/2/index.html","d6520dfdf17b5c863a494a42d9bcad9e"],["archives/2018/pages/3/index.html","7fee3bcbe7caff717fffc98581c3b922"],["archives/2018/pages/4/index.html","8f95fb7b5e76d4ea5e6e6457e68493a1"],["archives/2019/01/index.html","9e5a9b44099f38e7ab93f832e2f9f91f"],["archives/2019/02/index.html","46258cbeec8474d9744914baf2764094"],["archives/2019/03/index.html","17c73df0c392482117796de9570a5efb"],["archives/2019/04/index.html","5c5b4ab9a66cae1441ac0826b3817c82"],["archives/2019/05/index.html","dfaaaccbb5442e2bc1bdf9c468648e4c"],["archives/2019/06/index.html","88a8dc73ee727a5d46251a6f5ec75ef0"],["archives/2019/07/index.html","76eb245244ba18f48ae7734b20478702"],["archives/2019/08/index.html","a6dc035edea9487d17f9ac3a094fa142"],["archives/2019/09/index.html","d203718bd307f04ed30e7d8ec95792aa"],["archives/2019/10/index.html","fff155dabf1e5b6466e3ff593e8f3d08"],["archives/2019/11/index.html","1f40517167a8c27dee669d45cbf8d8eb"],["archives/2019/12/index.html","df58ad8b048cfa44cb0546a88e4622e4"],["archives/2019/index.html","40caeda69933960c2ce4cca116950c33"],["archives/2019/pages/2/index.html","8cbf947b71afdb0b977fb4923b37662f"],["archives/2019/pages/3/index.html","0dae360049c3f8f3b08607f11131eacb"],["archives/2020/01/index.html","48312b0da6596a31a24260cf9d7dbc41"],["archives/2020/02/index.html","a893e820fd49c5b3ab04dc8b53867b61"],["archives/2020/index.html","a9bcd499f64af69151806c92acfcc99f"],["archives/index.html","98ef517edbc89384d694a3f0bbb8f1ce"],["archives/pages/10/index.html","d15e61c1a8df3703a330f26120665191"],["archives/pages/11/index.html","a8dee57d8e070e9989b6a399e68d4001"],["archives/pages/12/index.html","74e1bbf1db5426d4f309c2a5ed5fb4dc"],["archives/pages/13/index.html","dd986c33274da789a3d4b62050202c64"],["archives/pages/14/index.html","9aee554fa3c793fc38dc051aa777af77"],["archives/pages/15/index.html","0e3de84b2360bc2a97e248bf12fb03a0"],["archives/pages/16/index.html","acdda82bd01813d5d42c951aadc3f9c0"],["archives/pages/2/index.html","41ea2cf03e9bbfb9a2b1ea84dbffe7af"],["archives/pages/3/index.html","9d59e2e54b9240a292805a1a5055aa40"],["archives/pages/4/index.html","6ca91a60763eabf1369ff121751d2f97"],["archives/pages/5/index.html","926fd9a7516e9fe551067109c474c33c"],["archives/pages/6/index.html","af854463867e34edc75380cc34f9d1e7"],["archives/pages/7/index.html","cd493f2f28a60743cf91909e9f75af73"],["archives/pages/8/index.html","a2c50199c5233d61a2a03cef50d6e659"],["archives/pages/9/index.html","fd2a874028adecb1a8ebccd411f397f3"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","32213cad9ad7d2f420bee7b26c76108c"],["categories/Unity3D/index.html","0ea0c8c68cc93e8adfbf93efc642d3cc"],["categories/Unity3D/pages/2/index.html","93dae6e7fa7a2018b94ccf697e77cf15"],["categories/index.html","60b146c6a80587200e9166b3fa421e23"],["categories/人工智能/index.html","d878d2c836af3a415e23564e734a8bf9"],["categories/前端开发/index.html","c4fb987cd2c7616445a7a63e7cb46cc3"],["categories/单机游戏/index.html","7b8f2bf85db445a4c1f44f9da554b574"],["categories/开发工具/index.html","c511d37fe714fd15f9feb5f37fb5705b"],["categories/数据分析/index.html","4ef62549caabb59938590c8f8779b57b"],["categories/数据存储/index.html","23d271ac7cf18dcac0764c323fb2d67c"],["categories/游戏开发/index.html","a5c08182007669012bfc64c7a5ee6a49"],["categories/游戏开发/pages/2/index.html","79315d3ed2bcb078b454a87ff32d586c"],["categories/游戏引擎/index.html","776f1f1ea7db1c0108ce054b19a9e582"],["categories/独立博客/index.html","c42f61cfded57dbea74d9cc33b0a96d7"],["categories/生活感悟/index.html","e548531a42d918a5fa6bbc83ed783fd4"],["categories/生活感悟/pages/2/index.html","2b210805849ce56c11e2f6131f0b7ede"],["categories/生活感悟/pages/3/index.html","44752929049c8a29c9229d2f5cc74054"],["categories/编程语言/index.html","565841627eb9a01b6fdda9883238dd8b"],["categories/编程语言/pages/2/index.html","ae86ad87191147966553b5e52d949c00"],["categories/编程语言/pages/3/index.html","7061f3cc655355a544804e10d3746739"],["categories/编程语言/pages/4/index.html","9bc86d3908764a221e33b7cef9f4e39b"],["categories/编程语言/pages/5/index.html","b9ea68059048b93a86cae24012557e52"],["categories/读书笔记/index.html","e85e2bc23eb74528d888755ff8cd0657"],["categories/读书笔记/pages/2/index.html","7d069a5da46a4c15d525f777363f9efd"],["friends/index.html","571f9e6fdbe3393f3011128ee81f0048"],["index.html","377cd89d03a83f8f59f81d3eb01dca0d"],["movies/index.html","222902924a2b5d83da64f2ab713db497"],["musics/index.html","8857616767ee6e2127911914baafcd65"],["pages/10/index.html","95ba21842e620aaefa97bc0711ecff54"],["pages/11/index.html","6e63f14dba13d55de01789f1e3a6d47e"],["pages/12/index.html","0a769a26ac4d1f95c9350d969ee2e50a"],["pages/13/index.html","e0c4cb17caf45cbe45d49cad6c7a27c0"],["pages/14/index.html","f2fb8966c6564fe5a08ea86312eea0e4"],["pages/15/index.html","22fbe3ff3f12c527d02d4e163cfdfe5c"],["pages/16/index.html","457f48ad4449d44ab64dda6fb6e074c1"],["pages/2/index.html","2ef0b10891c545229a8488c5c11d68bd"],["pages/3/index.html","c72679408761b5f4298859f9ddc7528e"],["pages/4/index.html","b5b8366feb3d14981c71fee9fc04f4fc"],["pages/5/index.html","5397dc77fe29ed7f617512f7e0117559"],["pages/6/index.html","8d46f83354a155338673ae0a0ae48d56"],["pages/7/index.html","886edbcd3133b983fc267aa7e1bd76df"],["pages/8/index.html","52c1e7cfc78128a76c39a0b49c04fefa"],["pages/9/index.html","d9598b1e9a22155f5bf7a276bd4c8eec"],["posts/1059499448/index.html","1eed195164bb0a3f76b501e8d4839d50"],["posts/1071063696/index.html","ce485655179da2565a3248fdcae916ae"],["posts/1082185388/index.html","892b533f6f0f399c42d92e040543f9ca"],["posts/1099762326/index.html","42614de8c0e5ab56c1369db4b95e706a"],["posts/1113828794/index.html","179643df346a2a3d7558e4e5c0a545b4"],["posts/1118169753/index.html","881bd660f4f97049e682612d7b752fb5"],["posts/1122710277/index.html","4bbf62c7c7c050f600895105811283ab"],["posts/1124152964/index.html","fc61015b5d160112ef385dad1576bc31"],["posts/1127467740/index.html","a6249198332843911b6ac17f556bb725"],["posts/1150071886/index.html","916e941856662cde79c957602673f69e"],["posts/1150143610/index.html","cd2613b2fd84f69920a52b057828c593"],["posts/1152813120/index.html","687bccf82c3545114d17bf949b8b3f55"],["posts/115524443/index.html","c2c91907875e853a556ecbd9ef3eca2e"],["posts/1156673678/index.html","673b6770acb65a25e69836ffa8c62e62"],["posts/1166840790/index.html","14dc8ddcec0e0593e999a7aad9a2fe7d"],["posts/116795088/index.html","a2f393344870c475fdb047c998a2d5ea"],["posts/1176959868/index.html","3fc50426c46e5a08ed98c22e162fc83c"],["posts/1190622881/index.html","39f53a5b5535640ecfc6ab6463514c8f"],["posts/123663202/index.html","aa5d3c870d73c261ccaa9029034ec3dc"],["posts/124807650/index.html","03062bdfb8050bc7a2f776e24855634d"],["posts/1254783039/index.html","74d90c621c2b9a4b66d118e050076107"],["posts/1320325685/index.html","aa21426c3dc5193174eb56add50d6156"],["posts/1329254441/index.html","2fe26f891df4099af5ddcc3f4613b504"],["posts/1357715684/index.html","6109130e4188ed55cbdc8aec613074a7"],["posts/1358971951/index.html","acd991882c793a09648e13eefc68d1fa"],["posts/1386017461/index.html","b6103bf79f25a24ffd2dcec302c531a7"],["posts/1394521917/index.html","ec17a35c555d3a83edbfda1de6179f9d"],["posts/1397717193/index.html","7282537809163702353fe22c2724ab2f"],["posts/1417719502/index.html","049a20fa9a9a2ad8a9ed0002f6f535a7"],["posts/1424645834/index.html","eedcb8c2cd24c8562a1710a06c8a1dbe"],["posts/1444577573/index.html","45171199d8b357ed727e9893d12f4988"],["posts/1467630055/index.html","90ee92c26c105b77848444ba3ec3f58a"],["posts/1478979553/index.html","d5355bb62f958bec0a689ce5503237a3"],["posts/1540537013/index.html","0a2bdd6dcd875505244939a16f318ac6"],["posts/166983157/index.html","efdc2b1cbce21dd02b7da7c936d96978"],["posts/1670305415/index.html","e902342d7bcdb5c0638c9a556c8cbbb4"],["posts/1684318907/index.html","2f387e040fb397571bdeebc8f08fef02"],["posts/169430744/index.html","7e979c67b33550c65d85c2a46572de30"],["posts/1700650235/index.html","83d511b00a60ed24c25b441d3e222912"],["posts/172426938/index.html","2ea8183fd688b900240fbd5bd12c6c34"],["posts/1836680899/index.html","80147bb5b112e95d1d25fbcb684e35c6"],["posts/183718218/index.html","b86c9ec124c81253518d8a0fdc9645b5"],["posts/187480982/index.html","0f4128f87fa4afff2ad2ce44e5d1126e"],["posts/1930050594/index.html","592d1909e5845b75c6c8a4d35029ec89"],["posts/1933583281/index.html","4d994f813468be00a7fa62650aad7643"],["posts/1940333895/index.html","75c6137cf97df83b6ee2a45a0e9d1e2d"],["posts/1960676615/index.html","ad6d621ad19d1494b2424467041f8ac3"],["posts/1983298072/index.html","31e67ac3807588e5266c18d98ea756a1"],["posts/1989654282/index.html","0fe8e2e35c683688deebf0a816755be1"],["posts/2015300310/index.html","7695c9fd4fa496875c3aaaa59edcd2dd"],["posts/2038378679/index.html","908bb7a1f0f4e8b091076340d04b94a3"],["posts/2041685704/index.html","7964ed93d3b7a720f5ad253ade8fcce7"],["posts/21112647/index.html","fe29940769117e130e6c228befea609c"],["posts/2158696176/index.html","623af888dbcc1595feee804323a02ee4"],["posts/2171683728/index.html","a25b34d14ef10a4b515a813f3c330d98"],["posts/2186770732/index.html","5a46740545697234f02c1b978ee1ddb9"],["posts/2275646954/index.html","53fb72fd8dcff8514fa5c8f0014f1bb5"],["posts/2314414875/index.html","fb5b6aeb71941063fca017278e3a3703"],["posts/2318173297/index.html","b52c3815ea40d6cdc1bdf5a79e64f46a"],["posts/2418566449/index.html","f75b11203bed7909d7c1798c1a4eb0f5"],["posts/2436573863/index.html","37062a9a3da104f49bd8310b0b54d220"],["posts/2462008667/index.html","83b00fec62d89098c590b06b2902367d"],["posts/2463121881/index.html","70850c350be145d54923cfecdabd90f9"],["posts/2527231326/index.html","080721c5d8bd6a6a22d800fe79bc424d"],["posts/2583252123/index.html","4e5b0b696795c0777e7d35c37fc1fec1"],["posts/2613006280/index.html","c494fa1868525a44539ae938d7c4f468"],["posts/2617501472/index.html","6c28cfafaca67e2d854360d73699a463"],["posts/2676125676/index.html","93b9ec91eac967bef955fb5ce923507c"],["posts/2734896333/index.html","20be7d830131956139e216b46a225af5"],["posts/2752169106/index.html","94c5e595b56ced54716723b9fd966ed7"],["posts/2799263488/index.html","3f80081349f84df5360eb63834704b56"],["posts/2805694118/index.html","12b404de4c9ef113206d48cee3634471"],["posts/2809571715/index.html","367fcea48e7edcd4355a67af0e2a8d52"],["posts/2822230423/index.html","6da62c74c7a5aa44822dc312fbecac37"],["posts/2829333122/index.html","91fe53422bcbbaf0b58d0d334c36f034"],["posts/2911923212/index.html","330bd48dbeb3b7abd87ae01cacf3ee84"],["posts/2941880815/index.html","40e89a2f9f24881c46444d6bd017dd1c"],["posts/2950334112/index.html","816ec6ab29bbbcd815cda8ebd9bfab8e"],["posts/2954591764/index.html","214b9b6712507b78054a4460d0385f49"],["posts/3019914405/index.html","4f05e4693df4f22659477642796e16ab"],["posts/3032366281/index.html","5ade26349e7c14a087f48753be6cf68c"],["posts/3040357134/index.html","6401139a6002802cec73c54c54dd9be7"],["posts/305484621/index.html","d92e095937fa7cf8655acc25d84e7f7b"],["posts/3083474169/index.html","8f09425abc0fd1f90c385af9428e5646"],["posts/3099575458/index.html","65d57e1130f4d85804fc1d67f0796b3e"],["posts/3111375079/index.html","dc69fb50b75d4e423aa0dcbd1548584d"],["posts/3120185261/index.html","c7359d88f3d6aeb1772c6d88d4f3d080"],["posts/3131944018/index.html","c995b9898816e2abad5c4b264880817a"],["posts/316230277/index.html","dc8b40844db23d3ecbf4dd183034df62"],["posts/3175881014/index.html","7541ffd048169f74379df6762453554f"],["posts/3222622531/index.html","3198f0cbdb286f2d31435b55204a89b0"],["posts/3247186509/index.html","7e11559111eebfd22ad5b33f9512326a"],["posts/3269605707/index.html","4a4d8d5eba11fb454a2fb237f110fb1a"],["posts/3291578070/index.html","e776e8576f8303b87ad4b9b4122444d9"],["posts/331752533/index.html","c4d538e76f9e0b45d9ad25a2d755f6de"],["posts/3321992673/index.html","15e4e2a011bafc8bf713d8266762a858"],["posts/335366821/index.html","7782b1dcf29427889a841e02aeff542d"],["posts/3356910090/index.html","2b2b425f257054fd8e70ba2ad34d9d55"],["posts/337943766/index.html","c69200664e98e094db9e050e98555de5"],["posts/3417652955/index.html","db286e6c0abe2c2710e57692c7669c65"],["posts/3444626340/index.html","ce99c822c9b14e5a25de555fe7b0011e"],["posts/3449402269/index.html","68d9babfba2a3c64d19f461011246a06"],["posts/345410188/index.html","91b82059470a7c1140af353b167c684c"],["posts/3461518355/index.html","d94a671adcc0976a7995d5e4e8142c37"],["posts/3494408209/index.html","f133134c257d0d16daba723cf9a22673"],["posts/352037321/index.html","4005600db09c0b2496c39c638add179c"],["posts/3521618732/index.html","776cc1abba9fb78d7587d03dc057a22f"],["posts/3568552646/index.html","c83d9cfc8b238316ee1598deac6b2c6d"],["posts/3603924376/index.html","5de30643f16f26b86724e5f28eefa6f9"],["posts/3637847962/index.html","8f60a068776fc7ef3001cba92a2ad766"],["posts/3642630198/index.html","021f5ecb02de50f84934d20809301ee0"],["posts/3653662258/index.html","2246cec8637ccda4dc0efbebaf799a13"],["posts/3653716295/index.html","9618949b2deaa39a871beb2551624a8c"],["posts/3657008967/index.html","57cb2f4464ca545e9c8ea044751a12a5"],["posts/3668933172/index.html","3ee72977e80f5aecbf0354ecdc9411f2"],["posts/3677280829/index.html","bdb3334afaa3fb91d436d911240028de"],["posts/3687594958/index.html","05764646c4502731d80f02d085164099"],["posts/369095810/index.html","a83a5427af56c86fce4c063469d21ced"],["posts/3695777215/index.html","533ef8493b22538e5bf852cc4330003f"],["posts/3736599391/index.html","16d496a2be4e1bc1f1a9c597ff32e60a"],["posts/3742212493/index.html","e583032bb0e20d67bf986c8deb4375fa"],["posts/3782208845/index.html","ab60c21046af507f6982946841059258"],["posts/3789971938/index.html","b8a90f89ef23eab2217d1d0f9988c62d"],["posts/380519286/index.html","3764ba95edec6dfe557119bd73ff6f49"],["posts/3846545990/index.html","5af3124b7a31c686bf43685be0fe8379"],["posts/3873710624/index.html","35fdcefa3bda8ab1820dd942a494007d"],["posts/3959327595/index.html","2588bec1831c3647c3b3bf1b60617866"],["posts/3972610476/index.html","607a2a74a46b8041d5224b7916bd0cf2"],["posts/3995512051/index.html","7a373d8390b903c41ff9148b9d81c064"],["posts/4088452183/index.html","4064de3a0b4fe0bcb9d30d5ee808a48b"],["posts/4116164325/index.html","17ef330d2b7a7255a1264a05db54b50a"],["posts/4158690468/index.html","32a8d22f648cbeb2b4fc26769c688906"],["posts/4159187524/index.html","2851c1e95eadd1c9ab26741508e53aa1"],["posts/4197961431/index.html","dd653a245f055605f4d8a2703aa08e52"],["posts/4205536912/index.html","d271f71158b988d97df17053d85488a9"],["posts/4236649/index.html","749e493b791c93a5ea92c1d954208281"],["posts/426338252/index.html","1ba2839e637b7a0c9b4a9ad45e79d237"],["posts/450254281/index.html","0ec83a90a957f014c70cf5def0ec9450"],["posts/4891372/index.html","57747e10815c56900989c966bd40da0c"],["posts/569337285/index.html","16d29345b0201ae7f2c0546b8e39482e"],["posts/570137885/index.html","ad3f10f129224cdf810db89603d188d9"],["posts/570888918/index.html","a7ddb54c147255475f03bca16cf9d63b"],["posts/582264328/index.html","89d5185449f8cd09bea3a8c7b0e101bd"],["posts/632291273/index.html","38b49fd81bc1310680335ba5df839284"],["posts/70687890/index.html","6a5bc095e10ffb5ba739163f86e746a0"],["posts/719322223/index.html","5e7c80d522c4158115e4e8d0224c397f"],["posts/720539850/index.html","5a7af77cc59e6d50dd33b40456553744"],["posts/786195243/index.html","371a6ef89b35022437b033051936c29e"],["posts/795474045/index.html","8d9679f8db6bfa32c271b507b39e3d21"],["posts/815861661/index.html","8c3279dc7435d29c6a761c8bb4a7f046"],["posts/821259985/index.html","44d95dc41dcb62e657c88deb4280b779"],["posts/828223375/index.html","57f2aa53d6a6bb7f7d852ba101bd80d4"],["posts/887585917/index.html","eb75677d3ecbcd2a856a986e9c0315cb"],["posts/888549816/index.html","0a16f4e44cbdd7297e960df1fa293b5a"],["posts/906436376/index.html","86df3001e627de7aa94fbf62671a3dde"],["posts/907824546/index.html","d65d86995a739a440dc9bb680b64ceee"],["posts/927393529/index.html","695553c9cbd2678eabef1db7c6d4b955"],["posts/94443781/index.html","dd7cfd1e84439ed0440b088286374d79"],["tags/2014/index.html","1a7594ba2eba5dfa006ac23e024786ff"],["tags/2019/index.html","8fc831d9a6b6e763a37b0154594509b5"],["tags/AI/index.html","36c6e0d2875f6fb8c98b87fec6fd86cf"],["tags/AOP/index.html","ba48d36aed8d72ed5f47364fb6eeeef8"],["tags/AR/index.html","cbdadbcbd9a17148be5a1d9a07bab9a6"],["tags/AssetBundle/index.html","20fb81e1fb4587aa6b590e38333e3eab"],["tags/C/index.html","e8a6a1659249feb06b342ec56306e168"],["tags/CDN/index.html","fd051f83597833df41edf15fdabb1d4c"],["tags/CG/index.html","9aeabbae6c178ba627881ef759696d19"],["tags/CI/index.html","b855ce9c3b76ed3191e0416eccc7e54b"],["tags/CORS/index.html","ac850be5e95ab0bcc3b72fff9e851758"],["tags/CSharp/index.html","323b97bf1b9d5a0d3f6f341763a5641a"],["tags/Castle/index.html","86e44889ca737a9d14908dff5f5ae3c5"],["tags/DBeaver/index.html","635ec0ca6df703a793c8efdd7752f487"],["tags/Docker/index.html","1d6e421b96e5a55aecc4c92dfe67b562"],["tags/Dynamic-Proxy/index.html","0c08057f39721baf6e8d943d80e4a95b"],["tags/Dynamic-WebApi/index.html","93a58b77bbe0f528e2fde34797ce7cb3"],["tags/EF/index.html","341ff8943c3cf994a8339ccd0626ed77"],["tags/ELK/index.html","7c73cc004f54d7407b44cf6ecb3ac891"],["tags/ES6/index.html","fb96db41e9af730ed4551748c2f3848a"],["tags/EasyAR/index.html","f31ed01f29389fb54daf8f1e730aad5c"],["tags/Excel/index.html","7cd30480fdedc33b5707a8fb9317a82c"],["tags/FP/index.html","91e8e378eb99d79ee05097e3522ca8db"],["tags/Form/index.html","8a0b4d64a1f32906ed837463f8ef197d"],["tags/Git/index.html","de040d31e19ecd8aa0cf144fc365e3e0"],["tags/Github/index.html","d9c38081bcf364880f5e7b778fe93da7"],["tags/HTML5/index.html","b9e8fb3c5087baeed7c11efe907c6f2b"],["tags/HTTP/index.html","cb27de7326fb9c6ebf14aa47069c257b"],["tags/Hangfire/index.html","54eab02d1e2410a16be83e5c1c7a4c49"],["tags/Hexo/index.html","4a36367db04d1a4c6433776bda507177"],["tags/HttpClient/index.html","72f644b499410d9923bbe9a71ee5f531"],["tags/Hyperlog/index.html","a27a23d3f825b634a7f25b84180a657e"],["tags/IDE/index.html","a793544428a9db1483bbf44e15732870"],["tags/JS/index.html","5fbd6429b490eb42feb2fa9b3718553b"],["tags/JSON/index.html","7d8fbf0c6e02e4906a1f204f088954df"],["tags/JSONP/index.html","a89b0f3c1b3929128079dbf8db75d29a"],["tags/Java/index.html","0b518c9e5290a895fc73f6ac6b7a852d"],["tags/JavaScript/index.html","d1a0f82618e2393b12465e44077ac09e"],["tags/Jexus/index.html","de1687091593e76a1ab5cd4dc4f89260"],["tags/Kindle/index.html","8324fb2146767e78e152f29dd65a4c8e"],["tags/Lambda/index.html","a078bc4bcdf5e3b66ae533bc4d9cfcb3"],["tags/Linux/index.html","57be987ad2d4ed8cee7694bac3deedd0"],["tags/Liquid/index.html","bc5569502eb0912e1466744ed852819a"],["tags/Logger/index.html","15c4486e4a6fffb943af5c30fd023503"],["tags/Love2D/index.html","26777371a9b7c54ae95612d868994fc0"],["tags/Lua/index.html","aeb971d5bbc1b081ecedde1c14f4105e"],["tags/MMD/index.html","39eddaa14058e9eaa9dca965e835adf7"],["tags/MSBuild/index.html","673d85d98ef2ae4a5b67f587c9ee3e6d"],["tags/MVC/index.html","4732276bd7ccf1b1cf570ad68ceef8ce"],["tags/MVVM/index.html","d42fa0394ca5523829b5f8e0892346c1"],["tags/MapReduce/index.html","4792fc373233c760c1cd3da34c2fc352"],["tags/Markdown/index.html","6309c4f68da30bccbd28194e0ade141a"],["tags/Mecanim/index.html","fd8835ec8fa8876119951041ebc5854f"],["tags/Mono/index.html","40e797a2621587f795fe549cc21877bd"],["tags/NET-Core/index.html","99a591c8ab651b97b06b38dee041f0dd"],["tags/NET/index.html","27e10f921fab8817a04e5639b2c0838a"],["tags/Nginx/index.html","48a7b242c0ba2cd5360a6934bf1b9a6d"],["tags/OBJ/index.html","d14e0c910d93bbaeb0400af1ae2d3ff2"],["tags/Oracle/index.html","e3074f8d508530cb4fa2513124e86715"],["tags/PL-SQL/index.html","94700434b7357479d274f9679056d887"],["tags/POCOController/index.html","40af7ed663e3d10936e64c3424527e7c"],["tags/PWA/index.html","a5f4772b9989ce1361d0934a64335947"],["tags/Python/index.html","b0663ef4056a1d4419d2c8815ef90440"],["tags/RESTful/index.html","c91ab4f9a7ddc2eb2df90cf5fba6fda3"],["tags/RFC/index.html","cf905679b1c86aa4367f8d0f69332d1a"],["tags/RPG/index.html","458af2f3757d772cf76807148d0f74f2"],["tags/RSETful/index.html","3e9d7d7d614ef198940aed7ea0c75a3e"],["tags/React/index.html","85511e94d21f9e7d42baebba237c01b9"],["tags/Redis/index.html","8150900d443eac729236141a5c4f5784"],["tags/Referrer/index.html","a0b51a02fc695fc2a343e7dcfca9836d"],["tags/SDL/index.html","37198034c6cea80ce6345f502131a3fd"],["tags/SQLite/index.html","6c5440eb59e0cdd02893332a21feb2a2"],["tags/SSE/index.html","6177cf2147f01a37854b40dc77843565"],["tags/SVN/index.html","de6a4f00086b45dc3ce05fb4f7891fff"],["tags/Script/index.html","ade12ffffc8b14a933c1fa7bb405a8cb"],["tags/Server酱/index.html","bffe4db9765800c8d4d097428e7ccbcb"],["tags/Shader/index.html","01538e095fff25f75cea1ad70fc2ab3e"],["tags/SignalR/index.html","667a753473c6b6c71166bda494f1cca7"],["tags/Socket/index.html","fbf767c469d42770c05515875b55b7e7"],["tags/Sonar/index.html","1ebe08e627bc5ad4149c6f122f924cff"],["tags/SourceTree/index.html","056442b6e1fbd99be4bf7798eddd1409"],["tags/Sublime/index.html","756cc6eb9650b8b7210806fd2dcefdba"],["tags/Swagger/index.html","9904547af2d876bc1332e69cbc810940"],["tags/Trace/index.html","8fbe0b898c1c1fa75584b1c06181ebb4"],["tags/Travis/index.html","56f0ec195a046dce9aa34a0465e5624e"],["tags/Unity/index.html","2bcf1ee0860dcee2708f60666962301c"],["tags/Unity3D/index.html","5daeaadd567aa61b31732553de498da0"],["tags/Unity3D/pages/2/index.html","156cd7383ffc8d7883f70724337538ff"],["tags/Unity3D/pages/3/index.html","89778bafb646b0bbbbe0bc7ef4494fe9"],["tags/VSCode/index.html","54c70a4b0b4d1c5d40e3477617b7b0f4"],["tags/Valine/index.html","746c9b5bad8d0536667236ea7567d313"],["tags/Visual-Studio/index.html","ced5cbfab02ba506f80d05412c32e6cf"],["tags/Vue/index.html","12edf31837388cb640642ccf0c268df8"],["tags/WSL/index.html","3f20ad151df1f4472054042c169056ca"],["tags/Web-API/index.html","af81602a94107a123966c60c23348a9b"],["tags/Web/index.html","2462dda38429f695ca4608525cb34cf6"],["tags/WebApi/index.html","59d269b40166d83383239439f78542ef"],["tags/WebSocket/index.html","ce8bde3aeeacc57027ed084a9cf103ad"],["tags/Wechat/index.html","2d498070dbf2250bdf937b37e09b018a"],["tags/Windows/index.html","d12a1d9a169a473f283e852a6c66f777"],["tags/disunity/index.html","0bb9c69f21c4fa76cf47a3adec40b61b"],["tags/index.html","102fad5062d4210c7e9af50be3be9430"],["tags/jsDelivr/index.html","21b409c21fc5b4fd6a858cb18a8547a5"],["tags/matplotlib/index.html","8c7fe6cb5c403b9ff6df1b13ed07bda5"],["tags/uGUI/index.html","84c2bbb95fa212b8816005249581d67e"],["tags/zTree/index.html","ecc73a1888ac441a07d33c40e665bf90"],["tags/一出好戏/index.html","712271b47ba9db10e6d7a5db8d509e89"],["tags/七牛/index.html","d08231bf6c15e191f3c50ad7067b712c"],["tags/主从复制/index.html","8c64dfd53b792ffee7b993a92ae6773b"],["tags/事件/index.html","8617f0927ebb4defa2f6f112b88a8f50"],["tags/二维码/index.html","8e28b8f9adce5f98b9576d6de87e511f"],["tags/云音乐/index.html","aca9be6b951ec5131bdd9d83b521748d"],["tags/互联网/index.html","f11aabb47d09a53f7a69162cc15ec351"],["tags/亲情/index.html","f325b29a629c1ccd2004a950cc523ec8"],["tags/人文/index.html","e1edc6293bac630b0d0312dd5924cc43"],["tags/人生/index.html","6ec5ad9481df5e04d255ccc278cf5258"],["tags/仙剑奇侠传/index.html","82f1d1a81d9deb34ed43af5f7d8ca296"],["tags/价值/index.html","e9c0490056f722ee092e08735e9fd2f9"],["tags/优化/index.html","a202931e7f24420d73a95f988e424d07"],["tags/全智贤/index.html","07bf16f0261b988aa05b71cd8c796c5a"],["tags/公众号/index.html","05ba5e64b7240b868a28c98c623e044c"],["tags/关卡系统/index.html","a278ff0936284ac50a77c7e33f5ce15b"],["tags/函数式编程/index.html","8775d77422fb9925b6f87c1e50f877d7"],["tags/别离/index.html","1776aa61a10291d32dbcbec653894997"],["tags/前任/index.html","babafbf997a0c6e092336d85bb6d73e9"],["tags/前端/index.html","1d9d9bc13b353d68f9fb5098640f5edb"],["tags/剑指Offer/index.html","035caa95eaf3a8fa10eb34c92a93a70c"],["tags/加密/index.html","87eb4fde3d8e51e15a21e5675308937e"],["tags/动态代理/index.html","8c53e298e3f631ce76252337961656d7"],["tags/动态加载/index.html","6a30210d33a6af9c945e87b69f6b9cbb"],["tags/动画/index.html","1bf6718c62aec241515a7d439576a8b5"],["tags/单位/index.html","9712eb85d9854dbbb4839442f1745026"],["tags/单机游戏/index.html","3b2c59c33d6d3c23213b3f9bf7f5bdd4"],["tags/印度/index.html","1ca97cf77952d4a99a38eed7ae743135"],["tags/历史/index.html","019713a64685126c2d935c5dd02bf392"],["tags/反编译/index.html","f70c819912c3a4433eb1aca8c1f42258"],["tags/同步/index.html","8bea1342945886469c4b3cf59ebc1c70"],["tags/后端/index.html","c5fb4d128290b9f119f42e2d7714cc1a"],["tags/命令/index.html","5333a178a771c7a2d4173fdbc965f482"],["tags/和平/index.html","142bebb700109fc7dd9bb7d8f4082e6d"],["tags/响应式/index.html","65a253b67290e2419ed4ecf721ed8c2a"],["tags/哲学/index.html","e27d083cae4f3bf278fee5e5c87633ef"],["tags/回家/index.html","11ef4e22c63add7226aa2165c2661e47"],["tags/回忆/index.html","556ef29e4d2f7aea009164dc254649e6"],["tags/回顾/index.html","47e686da62832331dc57e866ff405eba"],["tags/回首/index.html","b32b02d6136988577d91214b52e8ab0c"],["tags/图床/index.html","d995b1d09bb6b80a32846d7dc9b22163"],["tags/图形/index.html","49aa5b563c4daaacf04e2b2bf3bb0b74"],["tags/地图/index.html","ab849839725a358cb644102b3a0cb737"],["tags/塔防/index.html","2d7306786037bf45a5c39649dd616c6e"],["tags/增强现实/index.html","3145f6f249d2a48767a9f56f40a780e9"],["tags/壁纸/index.html","7bf5acd3dbf18f32cf7708d4f878fba1"],["tags/夏目漱石/index.html","29209091980a91872eddfe8a812a1942"],["tags/多线程/index.html","28334a1cb9f704e619f504045af7236c"],["tags/大护法/index.html","01eb696b7144f0448c811fee92255f26"],["tags/委托/index.html","2d3a6c9e7fd159303cdce5bd4dd175a9"],["tags/孤独/index.html","9445d508cfc43267cd69300fd0fa62bb"],["tags/展望/index.html","caf91b72a22eaacf69ed6ad30240feb0"],["tags/工作/index.html","4b794774a945c4aa639312080711da4c"],["tags/平凡/index.html","72adc8b3a9f0317aa85b4ebe8f4d14ae"],["tags/年华/index.html","e43aee2a8b0ecf708a25506f34ca3550"],["tags/年度/index.html","aa1e31359f9cdaa44ed22945d9e0b87a"],["tags/开源/index.html","aab57841cf1eb0eea339158ad998a069"],["tags/异常/index.html","2dee8f139e6470d00ae11ccd78895683"],["tags/异步/index.html","878342c7c1609bc97be10b2be3f24bf0"],["tags/引擎/index.html","ef3ced1acdce54464670aba236024a83"],["tags/影评/index.html","4ceca66e7f9a6b9cf7eefd46b27542fd"],["tags/微信/index.html","be0395611feee11b3caf408ef82f337f"],["tags/微博/index.html","cf92b161e60b06e4ffd586e27b3e255a"],["tags/心情/index.html","f2f2e6605e9dfa4318a8d3892373f369"],["tags/思维/index.html","82ca8246436e22fa9a187ea9091f780d"],["tags/总结/index.html","9615f79230a7e259df4c41c167b91157"],["tags/想法/index.html","2c829e8161be13964d6d7f3b676fb0e3"],["tags/感悟/index.html","2b569d4fa47ca762cc03d3957bcf112b"],["tags/成长/index.html","397d5f88e45f08759543411e10f72714"],["tags/我是猫/index.html","8fcfe181a0ae7f74929cda3bdcf15de0"],["tags/扩展/index.html","f5a68ae644c9d77242aae061fc499054"],["tags/扩展方法/index.html","c7742244107b067d492e3316e69de5ed"],["tags/技术/index.html","332eaee36e5eebd4ce84558838058da5"],["tags/拖拽/index.html","abf1f9254928ebb2d878d352630c8f25"],["tags/插件/index.html","2ee3c47599b4a8f5ff404c989d92317f"],["tags/插件化/index.html","3d3e3973986b7a75baf8cde47a4516d0"],["tags/数字/index.html","048fc47fbe0c524b1e4efe08d96d08b6"],["tags/数学/index.html","a02196c309c6d1065a1ad81b7f0c5a07"],["tags/数据/index.html","8819571e6c6b9eac3221ec33be0ed117"],["tags/数据交换/index.html","357ce8c70f4c9967e71e3fff6eec90de"],["tags/数据库/index.html","b1bba7944c122e1a22989f82a0fcbced"],["tags/文本分类/index.html","c823c89a9f6e640eaecedc5e1aa8d3eb"],["tags/无问西东/index.html","115e7f3c5878b9fda2cda3ea4cffa2aa"],["tags/日剧/index.html","108b27eb758c1c86d700faa816d11d50"],["tags/日志/index.html","e00b171a62c3714685d13131addc3a86"],["tags/日本文学/index.html","667f05a03817f5dd5ce93faccae3d69e"],["tags/时区/index.html","50805de552e5afd1063e0cfdb3431b0f"],["tags/时间/index.html","cc5a3ea73f1ddbda51f521bdfca7d095"],["tags/服务器/index.html","b8a4c9b98b7b29ebd8af1d74f4f3f44f"],["tags/朝圣/index.html","166d7d160a0f2545b44c572bf2b584c1"],["tags/朴素贝叶斯/index.html","8a6ee031c3609bf8ef0e9b37b9aa7d76"],["tags/架构/index.html","28c4fbb8e44877c18b470e0ef9095fa0"],["tags/标注/index.html","b784e5dcb556a757e00a6d0f613a313e"],["tags/校验/index.html","7298d015ccb1c7aa485df40bde27db1a"],["tags/格式/index.html","6a2fd67d473024297a88f6ed686525fc"],["tags/格式化/index.html","8b706cfe1a57cda52c55252af7f9191f"],["tags/桌面/index.html","292f785bf96e09b45f5421e09809591e"],["tags/梦想/index.html","ee9935eae110231ed1e14599af6c811f"],["tags/概率/index.html","916145651e01813ab917ab4b536ad570"],["tags/模板/index.html","e76bf04bab9831cc0ac7f91ea603058e"],["tags/模板引擎/index.html","c29cdd4d1a829336945e3c3502ccb39b"],["tags/毕业/index.html","1fdd48aaa8d0d40f3f297dcb29feb65f"],["tags/毕业季/index.html","80c62bf8c683a83dc6ec680baf40ed52"],["tags/消息/index.html","a715bddac88a47573a1d59a0a529aca9"],["tags/游戏/index.html","fde4112db3f3b362c0c78f05e09e2077"],["tags/游戏/pages/2/index.html","5ead0bcffb9940e245c7fc86d834bb12"],["tags/游戏开发/index.html","8ad34ba6da448285c9dde9e4d65ed81e"],["tags/游戏引擎/index.html","e396638f52679003d0ca751b8bdb6e14"],["tags/爱情/index.html","3f5c896aba29a4fc46bf2f1cb3fdf98d"],["tags/版本控制/index.html","a9fddc3f46498cb7bb3e6ac11ee8fced"],["tags/版权/index.html","7e93bfeec9a3962608115dde9caee402"],["tags/特性/index.html","8f3feb8a35cbfde590a2d93cf4992c9f"],["tags/状态/index.html","3fbba90721e5c1458cc756e0ec53285e"],["tags/现实/index.html","726f094fa550b246d02e30c1117cca33"],["tags/生活/index.html","96133c5bed4c521c556a2c36a1f580cc"],["tags/电影/index.html","b16ce529d4f67c56b264249bc462233c"],["tags/画家/index.html","4429a7ae4e464dca3a3f7cb07ff2b64d"],["tags/知识共享/index.html","2ff9d559ab79d53131001403ac6bec7e"],["tags/矫情/index.html","da5ba1b92902052477282a0a870dead1"],["tags/程序员/index.html","c84d4aea6b11cffe1d7a187617acb74a"],["tags/穹之扉/index.html","3b3e4c44e922b2c3537bb1736fdc44c9"],["tags/穿搭/index.html","aa5fa4075671790892e85d8107058a93"],["tags/童话/index.html","021b7702fc671b16f76498e48ecd13c7"],["tags/笔记/index.html","aff4a18a9b5ddb8bba4368d45dff7086"],["tags/算法/index.html","6d139e44004ea519216de4f031386b60"],["tags/米花之味/index.html","202ca16a17f9991db704c341d7d03cf4"],["tags/缓存/index.html","e2220be80802754878c7f32824f959b8"],["tags/编程/index.html","dba24ab7653fb68e67f242a915defc51"],["tags/编译/index.html","9b6a10cbd4f8a711d2b1c94a7ea404df"],["tags/编辑器/index.html","46dc1634a643b6000fac4945316acb7f"],["tags/网易/index.html","bfdf06986cbd997d7a9020d0edd7579b"],["tags/脚本/index.html","9079cf8e6907688a29ae3192e8c91cbf"],["tags/脚本语言/index.html","73518b7eea9bb418519aba760cf9f288"],["tags/虚拟摇杆/index.html","c2f39d2648708c59ab7d8f710f49f4c1"],["tags/蛋炒饭/index.html","db789d00355b445c7a060a20b80415b9"],["tags/表单/index.html","4e60ec0fb9d96b1394881f5843096914"],["tags/装饰器/index.html","381ddc849d4a074c4b66cd97501951c8"],["tags/西安/index.html","53d2f82f98edebfb4305e8f1b908ecc8"],["tags/计算机图形/index.html","de5e09d746888f25357b5c140355c03c"],["tags/设计/index.html","6b695c8292665d816135c321554422de"],["tags/设计模式/index.html","da97c6ca7ea7eaf477baf36a369cb7d0"],["tags/访问量/index.html","eefcabd828dbc57fcb9c92c75749fa01"],["tags/评论/index.html","55b87a7cb768bf2c53d81f4d7886da2f"],["tags/词云/index.html","7dd225ae3641acbd729de500469fe065"],["tags/诗人/index.html","bd01618f83ba2621b74a147c22e72529"],["tags/语法/index.html","de7b657da96f4ea41f40199cb07ccd51"],["tags/请记住我/index.html","523d4ea72e8cf5a021fea4580050ba0e"],["tags/读书/index.html","9e44c178adc66830c58aae194a5575e3"],["tags/读写分离/index.html","10de2dec46b1b1fbdf87c718624be2f1"],["tags/调试/index.html","8af92b2d207469d52f7b25a9714cf486"],["tags/贝塞尔曲线/index.html","0c243ef757725065511a21959e15386a"],["tags/贪吃蛇/index.html","8305b6e2f4947b47e466c3f8208d70fe"],["tags/资源提取/index.html","ec263273034e7e99680b7d0a28104e21"],["tags/跨域/index.html","4db79693caf470ea5464ea2087d528fe"],["tags/跨平台/index.html","f4a2c6fbb537a35ae176f5b00c8d4ed9"],["tags/转盘/index.html","775cf25304df62284fd19d3ace0c342c"],["tags/迁移/index.html","a1eaebd818372e55146580b86e532a74"],["tags/通信/index.html","3da1ea0a859be22d0e3d6bdce73de38b"],["tags/邪不压正/index.html","db2fe0a53d4bb92582b8bdec847b5b42"],["tags/部署/index.html","6ec1f9ed55ab9f44e2f5860b8ec63664"],["tags/配载/index.html","35e79de8a2274e51ef46f3540a9b54c4"],["tags/重试/index.html","4c862d94d81d30383b41cf1b72ce0e2f"],["tags/长安/index.html","9557b041f54e64d5b68ab54d99bcc9dd"],["tags/长安十二时辰/index.html","46ad7e0018e67d34407b56e8dc095b14"],["tags/阅读/index.html","03992e148606fd1e5e303e8fb27c4a41"],["tags/阿里/index.html","84adff8e41780c1f8625da453d18d123"],["tags/随笔/index.html","aa3518f918419f23eaa2bd518a241a1f"],["tags/霍金/index.html","496f7c842c7c2dcfb96eb4f9a32e1395"],["tags/青春/index.html","2662d34565300ea1332622f4638282e0"],["tags/面试/index.html","90bc416ce7ad6805019836634b539e32"],["tags/韩寒/index.html","2510a8cb1e0a5d2e19874023975ddce7"],["tags/马尔克斯/index.html","8fca39518451f4fe414cdad7ae1abce6"],["tags/验证/index.html","87a8063e01c9fd39e758714f1692b9c3"],["tags/黑客/index.html","54a2b4fb8d3afe4e29adff512f71b85f"],["wiki/index.html","d8257e30c8a3c9e21294eda484e6e008"],["works/index.html","5abd2a0c4b1cd8a7d4c4868eedded8ef"]];
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







