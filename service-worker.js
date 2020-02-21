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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d619d735dde98d1f7858531d2fe7a691"],["archives/2014/12/index.html","a974445a6cdeab8bd8254ed7f65a2474"],["archives/2014/index.html","88a1fedc157538b6e7303c4b515c87a8"],["archives/2015/01/index.html","2bb2c041a29adc7a0228c195350c802d"],["archives/2015/02/index.html","b9619380a77920fd24a5a8d57450d7f2"],["archives/2015/03/index.html","5cb62182e9f5784c5b77656d53419681"],["archives/2015/04/index.html","45cf2eef21435a936f74668e97571fa1"],["archives/2015/05/index.html","ea2d7ce804ba24f1ed1724f99c1b5200"],["archives/2015/06/index.html","8ef2777529e264e7820addc806c8354c"],["archives/2015/07/index.html","da2e2f8457ee25aac42f0650bce7058b"],["archives/2015/08/index.html","f79001d7ea416be063848c1e1df09509"],["archives/2015/09/index.html","260db279ce766629db994e88176e1330"],["archives/2015/10/index.html","9db68d1e83bcb232dce457deaaf01a67"],["archives/2015/11/index.html","60929ba7327eb5cacaccf39d8708e7d9"],["archives/2015/12/index.html","02c65528f25814584a2b45cd7bd6bb4b"],["archives/2015/index.html","28ac513140c6ed88b3e8ece7076d5af3"],["archives/2015/pages/2/index.html","7edc955ad995d97a6d85b17575e7d8ef"],["archives/2015/pages/3/index.html","423768048de3fb00bc17df3e95a13434"],["archives/2015/pages/4/index.html","f4f77b0d45ef265f22e9a8b6a011797b"],["archives/2015/pages/5/index.html","90c73778820bd9802bb8a0af9c17ca96"],["archives/2015/pages/6/index.html","b16faa4357f1973c68de4c88f98e6eb8"],["archives/2016/01/index.html","098da7bd037f823b430ae1b18fc7a2b1"],["archives/2016/03/index.html","82f41e6fdcf8fc2c2695aead8e326355"],["archives/2016/05/index.html","3bf4fe4e253438b1398a20dd6a6b363c"],["archives/2016/06/index.html","ca1c2dbe1f6d5c98f95baa57756e70b1"],["archives/2016/07/index.html","d2f8f7d681d30fedf3c2be7a926dfb92"],["archives/2016/09/index.html","1998893b95e44839692cae55fd0e889d"],["archives/2016/10/index.html","58997f7ff7f0ba558945cc70f37d107d"],["archives/2016/11/index.html","27437d032c1e0dd17bf92a91df36bf4f"],["archives/2016/index.html","9e1accc353a1ef43ac7296cb31e356cf"],["archives/2016/pages/2/index.html","14ac10ed504c90106ae04b45ff4b19dd"],["archives/2016/pages/3/index.html","7e2cf67fc643957b7da6ca68dbecf4fe"],["archives/2017/02/index.html","d370a6121fed616580b84a85792a46e4"],["archives/2017/03/index.html","8fd9d5315728c19d8f40981d1b94d04b"],["archives/2017/04/index.html","b2d2fb567f111bbdef320d71b113002b"],["archives/2017/05/index.html","fa1fc912cb7128fc4ef75a133a08f75b"],["archives/2017/07/index.html","cc7a355517cb37de14da15d62004d408"],["archives/2017/08/index.html","932e256235e976ef28239b3bdbcbb6d2"],["archives/2017/09/index.html","fdab1d4987fd7a29cc3e1366ec1e5f85"],["archives/2017/10/index.html","23f21600dcf01906ec1e7f69d1c43c2b"],["archives/2017/11/index.html","c589ee4c9019dbb8b663df1a91180e0b"],["archives/2017/12/index.html","0c905ff9df890542b1fba05bf6dd3cc1"],["archives/2017/index.html","c03f429d235468305da9ab60eecbb20e"],["archives/2017/pages/2/index.html","760d0c45bb818ccf57f13e987e332002"],["archives/2018/01/index.html","443453c208642505eca793ae23130627"],["archives/2018/02/index.html","3089714b19b102ea5e421cd4901a97d4"],["archives/2018/03/index.html","21feb3673c90515fab087d99e531da8b"],["archives/2018/04/index.html","9695f56ce101d53a38bebaa31e5de9c1"],["archives/2018/05/index.html","303c96a80f298d5ea67eb1c2f7e1e716"],["archives/2018/06/index.html","e788376d45ed7e78ead0c3c8dd65ba66"],["archives/2018/07/index.html","352fb370d200bc7743acba09bca13697"],["archives/2018/08/index.html","d5bb4cdb91cfe0ad7f0850f98c234e0b"],["archives/2018/09/index.html","a62b13fb34fb7778a465e408b765dab3"],["archives/2018/10/index.html","488d42dc448d0331d0d798267fb107f9"],["archives/2018/index.html","8dcde0c1d5edd80e1e58ae91fb329bb0"],["archives/2018/pages/2/index.html","39ecd9c02ee8b981d5ba539f9dbb5f6c"],["archives/2018/pages/3/index.html","13c4e66233c11f978ae8fc5eb27c2f96"],["archives/2018/pages/4/index.html","8a512736d8ce05c77190b20455a801e8"],["archives/2019/01/index.html","8f4829d1f566bb751043fd9e03ddaea6"],["archives/2019/02/index.html","792c9da30de5f50ced689c774f97d2ed"],["archives/2019/03/index.html","444efccdaabc1bc4e16b45ba0b69c90d"],["archives/2019/04/index.html","d09cd5668ce20ff009235977b1f7b840"],["archives/2019/05/index.html","413c6318b1577ede9fc8164847dd8ce2"],["archives/2019/06/index.html","1c1aba9347408337847ae807cb02c22b"],["archives/2019/07/index.html","ce03024b8696b5fcdffb88ffdb1a6213"],["archives/2019/08/index.html","b2130b62f4b8d22957b6886715c512a1"],["archives/2019/09/index.html","d377ace04d0955db4b592623578ad57a"],["archives/2019/10/index.html","265b84853e97a51c31ebd937ff2a4577"],["archives/2019/11/index.html","6ff5910872439173d42c19d6883e4f46"],["archives/2019/12/index.html","d2f7ac6e34bc332f03a5719850b187a2"],["archives/2019/index.html","27005ef360bddea8dd3198a6e494d92a"],["archives/2019/pages/2/index.html","b07ad82d7daba2e5cbbacc482613919c"],["archives/2019/pages/3/index.html","4ab0b77cc92f3a23463509597aa9a0b9"],["archives/2020/01/index.html","a79a688a99511cab27522220b0b89bd3"],["archives/2020/02/index.html","3a76522d53cfd4a1c3fc1189792df8c6"],["archives/2020/index.html","330c5ddba4cb9af9cece06950c5d5b63"],["archives/index.html","cfc1e537823614f44faa6142ff8dc322"],["archives/pages/10/index.html","1f2802f99362ff96cfa147799aa5116f"],["archives/pages/11/index.html","2f7622cffe22f97bc1de83a660262062"],["archives/pages/12/index.html","9c56649c914a75c98a72d10cd5278489"],["archives/pages/13/index.html","43b0bd221eb71f7387129ce8843fd673"],["archives/pages/14/index.html","cda234ede9e431542b3cd56c02c3f545"],["archives/pages/15/index.html","059e3bcae6202c593fe8b7602581c34d"],["archives/pages/16/index.html","3e689e23fe0aa3c5987ba7f580e7cf86"],["archives/pages/2/index.html","084b8dfe5489237c28c60bb8a973a5b2"],["archives/pages/3/index.html","e2b48901bc7745b38abcef07ca0aac21"],["archives/pages/4/index.html","4cebfc8379c2d0ca277aaf44e61cb263"],["archives/pages/5/index.html","f8b729473696f727ebe3a1cfad23e949"],["archives/pages/6/index.html","73048cac64ff02b500fd90658db2e8a5"],["archives/pages/7/index.html","b0157d9f7429d02354566239cba241e4"],["archives/pages/8/index.html","58e55be1a809cb22246be6be07b4e8be"],["archives/pages/9/index.html","6eafbacd9264f6aa18882e376f8fb263"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","cb19cc4189f3b273d5437689fa699a3c"],["categories/Unity3D/index.html","03f9043ae7ddf2a4c24efbb9f5cb04f0"],["categories/Unity3D/pages/2/index.html","f980f4d66add9a342216bb11e6e0d013"],["categories/index.html","0ce08c0e8fb2fd0f11f682d696de1f5b"],["categories/人工智能/index.html","f84c94faf88bf78344f52a2d4e7749de"],["categories/前端开发/index.html","85bf0bf1c80769bb0096b142d14c40cf"],["categories/单机游戏/index.html","6a9b38a9babd2c96f5cd27b6ad4e04f2"],["categories/开发工具/index.html","6a002683699a62a89d8789d9d717d042"],["categories/数据分析/index.html","950b97dc38e308ccadb967c920942d35"],["categories/数据存储/index.html","d53e5d80319db288380f5a4def5c74a9"],["categories/游戏开发/index.html","77578b3a7d41de245dc0ec8d994187bf"],["categories/游戏开发/pages/2/index.html","2e081766be18e14a4e45e085a2b7eed8"],["categories/游戏引擎/index.html","24b28da3a2a716b3a9415b5ab7fc7996"],["categories/独立博客/index.html","310646be99dad2cb4b13ee88bf34ecef"],["categories/生活感悟/index.html","f5485c8173c528cfef1e3ee5f61fe1db"],["categories/生活感悟/pages/2/index.html","678d201daa9ecacfc261d63354d0047b"],["categories/生活感悟/pages/3/index.html","db8e263b13d05190cd2992b18237d671"],["categories/编程语言/index.html","65ba12b705eb516b793b718dffd9d906"],["categories/编程语言/pages/2/index.html","a32e9432f17fe308559d480140b78f31"],["categories/编程语言/pages/3/index.html","ce2506bf3925605274e93829e88d45d3"],["categories/编程语言/pages/4/index.html","077b41bbf51b4fd76145b2315372bf5f"],["categories/编程语言/pages/5/index.html","6db76fadb5ccc3c8b5c9781337c168fa"],["categories/读书笔记/index.html","e54d4aeb7132a3048078b792191b81aa"],["categories/读书笔记/pages/2/index.html","548688a78a14e9555e6635634fc80379"],["friends/index.html","085147bd587ef796bfb0b913f1e26220"],["index.html","630b985dc8bfe40264a51240f2271604"],["movies/index.html","4af1ce57115ee0fecf7ed5d115576041"],["musics/index.html","56d63f07fe11dace0f94199663477fa4"],["pages/10/index.html","2a2bd7ca739038df871088e0e7fcbce9"],["pages/11/index.html","556b35d41280ed5c3dd9cdff74975d18"],["pages/12/index.html","8fe3893decbabb65b1f4887831dd1ce4"],["pages/13/index.html","d0c01eb44d537d4520682c1ae56c9192"],["pages/14/index.html","9a1b8c48b15c36e8e825ab569f3ebb52"],["pages/15/index.html","813e7c72e9f2f2bcf0349b22ea4656bd"],["pages/16/index.html","acc5a85c4581568d7692f75134b372fa"],["pages/2/index.html","6fc3faf7e5bf5f93fbdc54c364d4e31f"],["pages/3/index.html","2c66d413188e706297a609dfd087cdfe"],["pages/4/index.html","44ccc550186695615eeb556ba52e1653"],["pages/5/index.html","6a385d72607c1c1e2026380360ed1137"],["pages/6/index.html","e524f48980f506e7d51d19827946ffcd"],["pages/7/index.html","4b43315ff7928398cadb3218cd0820fd"],["pages/8/index.html","c36c69ca067c609e7138e8c9b34a075a"],["pages/9/index.html","795f9c186163bc0ad48eba7c7411c0af"],["posts/1059499448/index.html","c484db8f20ad3242b0df3725784ec71e"],["posts/1071063696/index.html","4d08d0ae7b86665aedf1e6c861b36dce"],["posts/1082185388/index.html","648ffa6ba384fe48b282f2b4617e890d"],["posts/1099762326/index.html","28e6c016dccc6afee24eb4a961101692"],["posts/1113828794/index.html","f24f9b130c647a2c615d857bac4102d8"],["posts/1118169753/index.html","e732f24e6af83e52f153be8ceb0f3ccd"],["posts/1122710277/index.html","c2559c7fdf4837bea10b7029e305bc84"],["posts/1124152964/index.html","5ca6a9264c71862c1d28146b2d51facd"],["posts/1127467740/index.html","c9285fae54875adcb7f7e0557661adc2"],["posts/1150071886/index.html","4caf2714287496e6f3a7b7a7b76ba332"],["posts/1150143610/index.html","483cf129bcf19b83855ddb605562dc46"],["posts/1152813120/index.html","b1234db029814e2a0fbac018f0012c06"],["posts/115524443/index.html","11d0ca142a47074803612ac519ea6f04"],["posts/1156673678/index.html","faccf7369aff862419c55cd0508c8660"],["posts/1166840790/index.html","acec3f8157c324d7bc79b07d8de4854f"],["posts/116795088/index.html","de15efa239c5bc86935866edec706a15"],["posts/1176959868/index.html","168dc6f347ad4bc8d9759371f147deff"],["posts/1190622881/index.html","bc4442d6d20e82c955e0d7662630c3e4"],["posts/123663202/index.html","7bf8ac591e91914a9f9aa128391a47d2"],["posts/124807650/index.html","46f1bb917d21108fb677c5706a4d14d9"],["posts/1254783039/index.html","00d0a5ed16c4c5d94f1972d5d012b4b1"],["posts/1320325685/index.html","9cf7f3ae34b81af471379a5ade0458a4"],["posts/1329254441/index.html","126720b8dc487118e578c2e2fc476095"],["posts/1357715684/index.html","4ca874675f612664bb35df0111817ea1"],["posts/1358971951/index.html","cfa136a4f01c3147fc59e9c8b21afc18"],["posts/1386017461/index.html","909c08510261f041a1b38e3f94402d8c"],["posts/1394521917/index.html","6a11802cab96b25f7a9b7e80205c621e"],["posts/1397717193/index.html","5c2926561a6a72fd0b18123bd8ac9d2b"],["posts/1417719502/index.html","b31cf31e819fd7d83d13191fcc4b31e5"],["posts/1424645834/index.html","a4662bc43f45013940e4f75e77425386"],["posts/1444577573/index.html","b67d2111e18ad29d3cd46e3b74becade"],["posts/1467630055/index.html","986b36d2666e89278d5386bdb16102c3"],["posts/1478979553/index.html","07b68d9b88ae788bf1bf4a7fc98965e2"],["posts/1540537013/index.html","27adffc7c491f2c1c3592c1f7f86c8b2"],["posts/166983157/index.html","43883a1b9850319976000599ab93609c"],["posts/1670305415/index.html","51cdbcf809591ece9fcaa021ecf2fa22"],["posts/1684318907/index.html","f9fef6bc22c39d89896f785702f0f58c"],["posts/169430744/index.html","1aae6e28bc4f2327a4276aacd49eb3f0"],["posts/1700650235/index.html","c3b2e461f8a09feda3683ab698b5b2c4"],["posts/172426938/index.html","f8b31e89787f8a98a7b2dade1891edcd"],["posts/1836680899/index.html","33d8814498743696e88f6db7179c5b1d"],["posts/183718218/index.html","e3a58fd6560eafcd885de94a26960748"],["posts/187480982/index.html","78f076834fe3e252faeeb5314ed1cd05"],["posts/1930050594/index.html","1daa6547ca02c03962b6d83e99d52153"],["posts/1933583281/index.html","5c5ed682cfa591f61d2d64c04cd69210"],["posts/1940333895/index.html","f52b30f1c5a8d9f2a878022615db5706"],["posts/1960676615/index.html","ed17d690f0cbf03c588f9de2b41f76e3"],["posts/1983298072/index.html","86d67369aac7e497ff2a0c906d525eb6"],["posts/1989654282/index.html","ef9df689467518c2cade4be34a0faac7"],["posts/2015300310/index.html","c6b5f9ee7163b199a923d9846b6507ee"],["posts/2038378679/index.html","29190f025a8c7c912bddac645c36d846"],["posts/2041685704/index.html","155d43fdb61fecb1e3df0fd32234a975"],["posts/21112647/index.html","842d6a888780a0a8810180f042a3cd86"],["posts/2158696176/index.html","99265989d1cbdff5ba3c8ebeb8550553"],["posts/2171683728/index.html","c5a045f9842f1e669c8cf4d9dd02d604"],["posts/2186770732/index.html","3df846d053144dfae0e039c390093af0"],["posts/2275646954/index.html","35e86fa12da23838b67ff2ca1b61b29d"],["posts/2314414875/index.html","a7bed32348d9ae51f5b3da2bd06e52a0"],["posts/2318173297/index.html","0d4e0e461a55f4ac02d7e7d46e242e2d"],["posts/2418566449/index.html","c38eb412d42e008f441a291cff40a29e"],["posts/2436573863/index.html","a1edd91dc62f299a22dc73ac8ce38e98"],["posts/2462008667/index.html","b6a80e2b719886f1d2e6513aae8504ea"],["posts/2463121881/index.html","1bc140312720dd9ccf3f088aedd850a9"],["posts/2527231326/index.html","2e1277aff7f83e30fa689a1a627b6585"],["posts/2583252123/index.html","a79563f5ab4395f6be81cde9d6d33ce9"],["posts/2613006280/index.html","ae1a4f96243e4e0375acb6b116b288c4"],["posts/2617501472/index.html","54820a1f1e5b5181ad4bad7c306d5347"],["posts/2676125676/index.html","d07273a481147e6574a215a2a640417b"],["posts/2734896333/index.html","014151db0476f7498b53fb7b75c4940d"],["posts/2752169106/index.html","7a982aa5701d9e721a4f9de1e0caf7c7"],["posts/2799263488/index.html","90368176faa525ccc5d9f3ae4eb503e5"],["posts/2805694118/index.html","0f2f98781c22b278cfe560d269f142d5"],["posts/2809571715/index.html","ddec50f0cc22effe778878f5828e38c7"],["posts/2822230423/index.html","f31c9eb6ddddf2f8e38e13943989935a"],["posts/2829333122/index.html","9af49b5da12bd20810df72804a6aa1ea"],["posts/2911923212/index.html","702b5d7f3567e3fb57b8becaa5f8cfa0"],["posts/2941880815/index.html","80f545f565a76cebe48427989e0b8025"],["posts/2950334112/index.html","c5a993b754f984bc6ce14bb1c30e7016"],["posts/2954591764/index.html","aef150c54efdbe68dca4f1fb235859bb"],["posts/3019914405/index.html","c8a6e1cfa315176438448e1bb2cf0b5e"],["posts/3032366281/index.html","071d0149d6072512a34187b5142110d9"],["posts/3040357134/index.html","c64c8ad3b2b29f666a0c79e7f12f6e51"],["posts/305484621/index.html","022dce011177eb72bf7dab4f87aeb9b1"],["posts/3083474169/index.html","6b381187e6a1dd36f66723a84a0d16bb"],["posts/3099575458/index.html","f815a63c4f9ccf3d47a235fd48b2f995"],["posts/3111375079/index.html","814970ca51a5cfcece3e47fb6db5a03b"],["posts/3120185261/index.html","ad136ed36d5a1866f16ba8b442783875"],["posts/3131944018/index.html","3e6c8dd9d2b1aaa2da3e9ee6321b531c"],["posts/316230277/index.html","ddc5f09342409ee7d8cedea0e61bc56b"],["posts/3175881014/index.html","661d73e7a840736f58560f79ca1e26eb"],["posts/3222622531/index.html","f3bbc6ad55bb6ecd29587b779490b627"],["posts/3247186509/index.html","20787008f4e492ed82d14847afbc0fdf"],["posts/3269605707/index.html","16c7ce77f575f86957fadeaf13a3fd0e"],["posts/3291578070/index.html","f0bda2ed9d46f4b888d314d2617c93f2"],["posts/331752533/index.html","89e2b050750cd1112a1f58165565aa0e"],["posts/3321992673/index.html","e56bd08020f48b54228187c76d45e1cd"],["posts/335366821/index.html","620ec9cf1b4cca6fd079db0bf94cbcc4"],["posts/3356910090/index.html","4e31104a29f1165965ac61d7179c1131"],["posts/337943766/index.html","8bd87da9fe2b5295a73e6a471f53a455"],["posts/3417652955/index.html","0aeb974be50d8bca24a4cc236f642b6c"],["posts/3444626340/index.html","f2d98a895e8a340ff490ac356df71359"],["posts/3449402269/index.html","c4f8218779facedaf0dcc81a26463459"],["posts/345410188/index.html","74affc7e3547ca9fd9f35a77cf3da155"],["posts/3461518355/index.html","4a440d2a60cb84457a33330c84475fa4"],["posts/3494408209/index.html","127b56f04983776e9445ffe17898593c"],["posts/352037321/index.html","e589fc8ada8b5c9c2d73c1bfb44084c8"],["posts/3521618732/index.html","adc59329d5a0329f5482fe57f801da04"],["posts/3568552646/index.html","55022fdd9a93ace4740cfbd029124115"],["posts/3603924376/index.html","037c2ee79ed6c56471f99bc1a9beb945"],["posts/3637847962/index.html","5eb24f0c05d7b83d065eba5a3ac26079"],["posts/3642630198/index.html","46bd68e401f2a260ff85cc53a8fb2cfb"],["posts/3653662258/index.html","01bc57e0f1f987050edb7021762c8354"],["posts/3653716295/index.html","000994085a740da500496d0582b8a213"],["posts/3657008967/index.html","c3c6605e45e2b8e193272c366494a33f"],["posts/3668933172/index.html","8ab378b49fa90bf79f6848db50ec4b56"],["posts/3677280829/index.html","97313234d80830f356ffc5760a9bc4f2"],["posts/3687594958/index.html","6ec4a62add01ca2f83c53ef197d2034a"],["posts/369095810/index.html","4beefb08c89e71367182bb7128905553"],["posts/3695777215/index.html","70a0928de647881e9edd3aa16994c77f"],["posts/3736599391/index.html","ec32acfe4d14b6bcf0f5e80623350140"],["posts/3742212493/index.html","36a00489ae372a3c3b62c0d0188786bf"],["posts/3782208845/index.html","026d52a90474d410766e5840e3d7be25"],["posts/3789971938/index.html","61e41ced3762e69457078df119f0155e"],["posts/380519286/index.html","3a544291fd89507d6f1571a620d09aac"],["posts/3846545990/index.html","10db80439e7189f758af931b43ab51b3"],["posts/3873710624/index.html","9397058ec76608e998c172311535c749"],["posts/3959327595/index.html","0d9c886ca2fc293a0cf8d89a1bc30d53"],["posts/3972610476/index.html","401105cd655123ebb60a3c08cdaa8e62"],["posts/3995512051/index.html","742d6aa5accda509d342207734364231"],["posts/4088452183/index.html","31300911437caf94b7fd359cd81ba7e3"],["posts/4116164325/index.html","3d925d901ff2704f670753129e1939e0"],["posts/4158690468/index.html","48c0314d2b4fddb7ee3ab54d556f4a4d"],["posts/4159187524/index.html","37553361f3b5c7a4c25871967f1e3939"],["posts/4197961431/index.html","190d655490af0ace859f28e6836cb667"],["posts/4205536912/index.html","e0fae45dc1d5b79905b958799a1b75c3"],["posts/4236649/index.html","f4255984158ee79a1283a8c458e8737c"],["posts/426338252/index.html","e1cf0b03023803d8c3c7ac38539b3dcb"],["posts/450254281/index.html","a734fba69338332ad34cafd30117cf3c"],["posts/4891372/index.html","d18cf01ec85bd8fbe108a4ec0c702784"],["posts/569337285/index.html","bda286814b6f8d3fc9d874ed5959a49c"],["posts/570137885/index.html","67081cfb9974e63ef981c2bb34b57e88"],["posts/570888918/index.html","380263b65c1ef0c520290259329effa1"],["posts/582264328/index.html","9e2c30fa80899c9bda2e0f68c3a5b4ad"],["posts/632291273/index.html","f41a62b688660148e3dfd7503347c7b2"],["posts/70687890/index.html","8b4eb715d06efae9a1ca5170e39ce879"],["posts/719322223/index.html","8e12ac011e4cdc5a329a1c1002b2c9fb"],["posts/720539850/index.html","7850d0f21ffb3c0a567e4273ae8b4f5e"],["posts/786195243/index.html","6abfe9344fc6bd8035875b237fb66122"],["posts/795474045/index.html","a838cc79251b4d0350e51793d4e2f896"],["posts/815861661/index.html","be5ab9c49f263fa66fd66c80efb20a47"],["posts/821259985/index.html","6b7f5033a863fa7c85147ca152b0b5c4"],["posts/828223375/index.html","737bb3c57ffcf39c8e42afcdee8e2c26"],["posts/887585917/index.html","b15e951643b574047432ee6b53c2a466"],["posts/888549816/index.html","3d431bb5f2258e180728027e77fd9843"],["posts/906436376/index.html","547fa839a9df52e4e29b8e9f5c6f435d"],["posts/907824546/index.html","d2868fcbdbeaeef70c61e211ac869878"],["posts/927393529/index.html","00ef80235a38d3b3dd5e7440fc9d4740"],["posts/94443781/index.html","6a706644f78f89348828784651ff2d44"],["tags/2014/index.html","1a04c650407809a96006809ac96bbfd6"],["tags/2019/index.html","38cd6c37fcae4e2e13322d3341cf2713"],["tags/AI/index.html","6b8fbf74678bf700d60baf290b083d52"],["tags/AOP/index.html","4855359aad1f4c4925b907dd1d85e88a"],["tags/AR/index.html","c0d7e846b20c24b06a74262e36a5f006"],["tags/AssetBundle/index.html","ddedafb2292497cdee9c3892d627ae19"],["tags/C/index.html","e2e90dc3546e527aa1b2fa6c419b9ced"],["tags/CDN/index.html","a8d92b5b96743a33b5ded36cd99f59db"],["tags/CG/index.html","54e17bff6e73ec10b36726dedcd7445c"],["tags/CI/index.html","209d7a605ed583dbd19a2c90957bf44c"],["tags/CORS/index.html","d44a835485b476a699b38235f31ada83"],["tags/CSharp/index.html","36e9776e8d448a0fe2e73fab568c61ab"],["tags/Castle/index.html","bca633dbaa0d304e9d4b6e9aa3a74ddf"],["tags/DBeaver/index.html","dc34b3e6b7996fea50f1d75dbb23ed0f"],["tags/Docker/index.html","87b2a068019e32faca2cc599aba97a35"],["tags/Dynamic-Proxy/index.html","f3b87c93e29df73e212d30251246961e"],["tags/Dynamic-WebApi/index.html","8979a4ea3cde087ef3ef005d835be724"],["tags/EF/index.html","4cd96faaf4aaeca53587022def849297"],["tags/ELK/index.html","869b04f21b2ce08ae19b0491adfe761e"],["tags/ES6/index.html","069ab84f49ff38d2f0b21864724a0178"],["tags/EasyAR/index.html","29d5d29e295b8eaa1ea797f56be27322"],["tags/Excel/index.html","95ead141d9316e12be0cf085c9f344a4"],["tags/FP/index.html","fbaa036f22a8b7e26916cf2714d83613"],["tags/Form/index.html","ca3e24b0c77f16beb0c7587405b55b66"],["tags/Git/index.html","387fc5cdb771defd8d5835d41b3c8e7a"],["tags/Github/index.html","686795cc770befbab815859e2b7e13c5"],["tags/HTML5/index.html","7725d08dd25388961992c11d894cc48d"],["tags/HTTP/index.html","7ea26931bf95139cc25579798f7afb49"],["tags/Hangfire/index.html","0a9c4fd61df9a5813ed32134ed419d43"],["tags/Hexo/index.html","0cc6d8bec23a6a614937fcbd7d4ed51b"],["tags/HttpClient/index.html","dd2f161d5d00690a631649979b0a8492"],["tags/Hyperlog/index.html","9781d88eb127b20284ee9bfe241dee84"],["tags/IDE/index.html","9b1e65c805cefd3703749aca88675252"],["tags/JS/index.html","eab2d6ca54433136c25108f95a6d1e60"],["tags/JSON/index.html","7fc84aee72d0a0d037d77d06dcdddada"],["tags/JSONP/index.html","f8eb4f63de293bf51a294eacb54d3487"],["tags/Java/index.html","443904c19c7450e2daadb8fd523b4fd8"],["tags/JavaScript/index.html","52b4cad1e6fef8a1ec27270b4859e7b1"],["tags/Jexus/index.html","ac35ab1e596512679e5a27721d948a7f"],["tags/Kindle/index.html","a4a5c2f22a401a1b51a2674b974654ca"],["tags/Lambda/index.html","355c6ee4f5a4f1697caaac5fb55e3b1a"],["tags/Linux/index.html","5460f84d504ec910f8303a64acb36d17"],["tags/Liquid/index.html","573ff5b2ed80c737bb82b821748ed9e2"],["tags/Logger/index.html","435178f442ffd8479471cd9893739923"],["tags/Love2D/index.html","d9847d7c5bab6cfadb9736c495d738b1"],["tags/Lua/index.html","0644b5b2dda2153fa95777ca2de3457b"],["tags/MMD/index.html","9a6bec2b96cad7d6ff940b4de65323fc"],["tags/MSBuild/index.html","c43f725fd5e1c4c906a1ff8aa7271f46"],["tags/MVC/index.html","e273dbafc5cc128cdca0e361b7c1d0ec"],["tags/MVVM/index.html","f373b6140b0ac25e83daa7e14f59cfbd"],["tags/MapReduce/index.html","d9dc2d882a84b3c9b5e4058c6af46158"],["tags/Markdown/index.html","12a364ab36533a4aaf7dab6be7de3797"],["tags/Mecanim/index.html","dff28902ec152260372b0eb5362710fa"],["tags/Mono/index.html","b2adb1f90d97dab99c6e424f7ea9f56c"],["tags/NET-Core/index.html","52abdc3ff17d7c519456e3b49e628b7b"],["tags/NET/index.html","ca4d4843740b6a5176da230637b6a284"],["tags/Nginx/index.html","0d02d6a72f8286efa1440760a47d58cf"],["tags/OBJ/index.html","a2f4a3105b478dd4f8cf16c34583783f"],["tags/Oracle/index.html","60634ce94793bc83a82d5c32a11e8781"],["tags/PL-SQL/index.html","b3052647a5d8314f02900fda2ab7b5bd"],["tags/POCOController/index.html","e6891629620432ea2eb972377d5fb72d"],["tags/PWA/index.html","9895c9cd208498842bc6a36912570c35"],["tags/Python/index.html","daa2150a012d8c9fd5de391c9cec3c38"],["tags/RESTful/index.html","dc64ed0498ab5d00be765645c9f53c54"],["tags/RFC/index.html","496832eaf4ee16f544132b58d6412d31"],["tags/RPG/index.html","9eec722efd1ff1e96caabbcbf3d5f427"],["tags/RSETful/index.html","975aa85af619db0f45bf0c81902328cf"],["tags/React/index.html","1830d1550779a452389b6af033b99adf"],["tags/Redis/index.html","da8d5fed5cb72734ed73977f2dc52f1e"],["tags/Referrer/index.html","e51c25d890849f676731bcceddb8edb6"],["tags/SDL/index.html","0cc9462fbc29cfe99b859a87286b75d0"],["tags/SQLite/index.html","7a0ed6d2013d2d3bf9092572581d509b"],["tags/SSE/index.html","3662857830d1fa43d69080afe76b31c4"],["tags/SVN/index.html","55f4d5322bf29cb5c2fe33341032746c"],["tags/Script/index.html","f5eaeaed9889d4c825bf27df5bbf774a"],["tags/Server酱/index.html","93ed9bc8a97d374821efdab1c6785e2b"],["tags/Shader/index.html","66ca647be15b45213689e66494c47866"],["tags/SignalR/index.html","b84fbf064aa7648cecc77e55849042d1"],["tags/Socket/index.html","5bd2709b1c73523c13ffe713bfb2818d"],["tags/Sonar/index.html","fda528fa924ff91cec2af2f726c766ab"],["tags/SourceTree/index.html","d9241cf647dad223e8875adee3e92222"],["tags/Sublime/index.html","280cf95d2570d3b10a667af1efcbc063"],["tags/Swagger/index.html","cb9048144d43ebdb4a86a8b80988d025"],["tags/Trace/index.html","4a75060906d4edd8d240e93f17bac694"],["tags/Travis/index.html","f7491b73b3f83ce9a9c0f31d3f37408b"],["tags/Unity/index.html","03cba44d77bfa77cf7bc1a210a16c83c"],["tags/Unity3D/index.html","db780bf5b150fc380079538c56d4a352"],["tags/Unity3D/pages/2/index.html","5ca7d4deb331600f2cd2d50579c41da2"],["tags/Unity3D/pages/3/index.html","bce4a68b0a618dba2c1b3cf9de5f2892"],["tags/VSCode/index.html","1b692f8f032ff9e398fd6a5f295b01e5"],["tags/Valine/index.html","3ec715f3b1c9b465c3ac14ed963e2c6e"],["tags/Visual-Studio/index.html","5384bd2de10630deb79e13ee35be97eb"],["tags/Vue/index.html","d526c0ef0324c90dd070752bf63a4415"],["tags/WSL/index.html","7b872c2eb1344abfdabe5dd61e5ec45d"],["tags/Web-API/index.html","ffc1ccf986fc9c49b1a10bc38b003542"],["tags/Web/index.html","7ac09c01a738e1aa3e2dc8acaae33b9a"],["tags/WebApi/index.html","4d033f0272cfa970b959726b73ccbf40"],["tags/WebSocket/index.html","f938e5d42271e72f8fc20608ae0841da"],["tags/Wechat/index.html","b494677917459e330fa2cff87843d1dc"],["tags/Windows/index.html","c18e9853365b8c09a4da1f6c26d10bd4"],["tags/disunity/index.html","8ef8a87383dd930787aa0f613c4704ea"],["tags/index.html","cb70d87a9355ecd3c0135cf18499ba7b"],["tags/matplotlib/index.html","43bb3137db9636b85e74a843bb387df3"],["tags/njsDelivr/index.html","add7350125db4bdad7654add4d05a79a"],["tags/uGUI/index.html","1119223c4183cfa95f5d46a1bf3a51bf"],["tags/zTree/index.html","7c728aafcbd3d8c78a45e78596097672"],["tags/一出好戏/index.html","657a06aeae74a2e5094af7d6310b7f65"],["tags/七牛/index.html","f05d06c1a001e438072bf07e5eebd728"],["tags/主从复制/index.html","f8b48f4f6a53a0ec71da412a59e10c88"],["tags/事件/index.html","84d838e2f0341b7490c08d8eb3f36125"],["tags/二维码/index.html","284981b92f4ab7c0b1458a5d9bef5655"],["tags/云音乐/index.html","2ce4246c70b67cf8acfb61569ea7d7a5"],["tags/互联网/index.html","52cecb78f42e0fc555ee99c687bc18e9"],["tags/亲情/index.html","9cf3335e135742133438001a653f4810"],["tags/人文/index.html","bde4cf1c612711fec228e7be06c2d88f"],["tags/人生/index.html","a1ca4dca5116f117ee923b60e39c088e"],["tags/仙剑奇侠传/index.html","0c366e43a33691ca4299a835cb9b1019"],["tags/价值/index.html","8fb2e24f4765d5e5dee973375121efbd"],["tags/优化/index.html","2f0ea35db6ecffbbcab1533318a7abab"],["tags/全智贤/index.html","998151ef9103553f0e5b321ed2bb697e"],["tags/公众号/index.html","041ffd0a79a195002eeb80d4ea99b8ec"],["tags/关卡系统/index.html","2311a5e5fcc5cbdceb488ac177bf3114"],["tags/函数式编程/index.html","f9f5061a8991bf239260740e984a4f90"],["tags/别离/index.html","d7ee59abca823176bd1f10c887dfe380"],["tags/前任/index.html","8c8026a1064e2ed48941c9348db6217e"],["tags/前端/index.html","9a6617b960e8bc259c9c03c60241e6f0"],["tags/剑指Offer/index.html","90d2d1849f0b99d79d2d2b6db9733750"],["tags/加密/index.html","550852478099bda7c1f38249702628a8"],["tags/动态代理/index.html","99684f90508fb4af669ae9aea0c0067c"],["tags/动态加载/index.html","d906db4e24a16af5f2a80e308a93768f"],["tags/动画/index.html","cc58b3161809ec3b9330bf15a2176415"],["tags/单位/index.html","caa1a10e589f1a58f6b63a7b9a57161a"],["tags/单机游戏/index.html","5b4b47dc18072e88710dc8ed202c3765"],["tags/印度/index.html","abba2855a2e8e50359672b66417b797b"],["tags/历史/index.html","89f623691b7d1354db2afd80836dd457"],["tags/反编译/index.html","6979c4d192e5729cc9cb20e1d56beda6"],["tags/同步/index.html","2f48737c93dd202f93fe8de70958653c"],["tags/后端/index.html","7672ef4455b50de00021d4745222080e"],["tags/命令/index.html","2179d0f88f27b312a002ab249958e108"],["tags/和平/index.html","2cceb4acea5a9c5d17aa686e63fc43dc"],["tags/响应式/index.html","0b4dd308e57b1197cc387cae97f1099c"],["tags/哲学/index.html","a61c68fb6b92de2af6ad065a80b14322"],["tags/回家/index.html","f58b567f2c2439e3e1aa2d2eba0241ca"],["tags/回忆/index.html","5f255d9e0974674e2cdf231308ce1656"],["tags/回顾/index.html","19818b00afc9e738e8dd0bc20bf4a4b6"],["tags/回首/index.html","bedb36c616a0e8eee4bed5c74b730f00"],["tags/图床/index.html","4c0177ad838d5a23effdfad1caa39338"],["tags/图形/index.html","fde3af9731b0021b805175996d9a8716"],["tags/地图/index.html","6f3326ca78db1e35b54b81957ca469c3"],["tags/塔防/index.html","6d6b8430a3097c768aef3438be524dad"],["tags/增强现实/index.html","ad68cf59f4755c58ff07727d73b39f85"],["tags/壁纸/index.html","3d055f61be472805bca20025d3a3b8a8"],["tags/夏目漱石/index.html","cfca1ee435f783829f2bff0467b566dd"],["tags/多线程/index.html","ccd56593f1e1adc5eb29cc7795d29b87"],["tags/大护法/index.html","e75c159f81d8487261de4d03751cf563"],["tags/委托/index.html","d93910bbccbd7e6543ee5f8bfca5acfa"],["tags/孤独/index.html","9e998ae11703b0b9deceb6930f2ce75f"],["tags/展望/index.html","06036bddd152f6e6387bfb0d15a482e7"],["tags/工作/index.html","9e5b578ea47c4c5857a6b4a2eb38d469"],["tags/平凡/index.html","11da54125f01c60b2c8a25722dc5c4be"],["tags/年华/index.html","354814d5204f5ed8695a96ecbe7fbc33"],["tags/年度/index.html","1719c2a100fa74e6487cf730d4f08297"],["tags/开源/index.html","b57c762f0ae85d79498f813127f70504"],["tags/异常/index.html","89c49700357881f77f27b81b64dc43e5"],["tags/异步/index.html","fe64edfd89b4f43f4a2a868aed73816d"],["tags/引擎/index.html","9138cd5bb677e141a83680ac1438e44a"],["tags/影评/index.html","c5a6cd5247c2b94e55883d58dfd45a97"],["tags/微信/index.html","f4ae31d9afca8005c2a994288725c2e8"],["tags/微博/index.html","38e157cf29f030ad7fd4772e10fdab17"],["tags/心情/index.html","3c775549331d07e452e59a02e9b3235b"],["tags/思维/index.html","ca03d0c6ecf7c51a1a968960614dbddf"],["tags/总结/index.html","cb9312a7101772cd4a78b2fdffb85fce"],["tags/想法/index.html","3c57c0c22755701574cde51a637cebbc"],["tags/感悟/index.html","9951689209b04a1a2571ee85b5924706"],["tags/成长/index.html","aaa13b49c4472886d4e44653198d1dfa"],["tags/我是猫/index.html","eb41444e325bab407ec7990ae82034d6"],["tags/扩展/index.html","e2af26b11fb40b35e95c44e03a5c951c"],["tags/扩展方法/index.html","202b0341d51a8e54479992ae2ae1524b"],["tags/技术/index.html","2d6d2a33b393df62a5432b3b4f91942f"],["tags/拖拽/index.html","5e3e12e77a7b39fac7316b5b30e0fa48"],["tags/插件/index.html","7546e1c55902ae335adaddadd11553a7"],["tags/插件化/index.html","4d7c1c2e2c551596ed1107fabb827f7d"],["tags/数字/index.html","860b6a072c90c99ad72eb07fc3830311"],["tags/数学/index.html","4dd369b288b69d3303188dcefa05c257"],["tags/数据/index.html","f7758c02a422a77e98cef46605205253"],["tags/数据交换/index.html","bf377fb964fbffef976c42df8cf0dceb"],["tags/数据库/index.html","0d79caf09bdde7e402a32a4031a6630b"],["tags/文本分类/index.html","0c7b7d3b8e319191c368a9fd2ef88205"],["tags/无问西东/index.html","9e11d8a1d8c0959d85705f82211b15f5"],["tags/日剧/index.html","61edd25b8ec3a71e84fa0745d8d46ac4"],["tags/日志/index.html","0bd5b21958cf5d64ba50b7627f6b5efd"],["tags/日本文学/index.html","c5d6467ee14d7302df846843432b1bc1"],["tags/时区/index.html","582f3a7966a4a7a7c76862f41d9dcd65"],["tags/时间/index.html","b7f5ae8b64a5466db314db965e3e7ffc"],["tags/服务器/index.html","7f336dc36153142d95222ad349158acf"],["tags/朝圣/index.html","dbf85ee1c3d9471a99b905269a669c85"],["tags/朴素贝叶斯/index.html","e5054b9c180ba5106a379eb05396d1a3"],["tags/架构/index.html","c7e96209a34b2ade13f65d38eb76752f"],["tags/标注/index.html","05f119f670ace8d834934872c5e06e1a"],["tags/校验/index.html","800afff25c1fe856dfedfb06fc79bcf3"],["tags/格式/index.html","d0189522d67588bd61c14b81ec4c1d2d"],["tags/格式化/index.html","82dee5bc0914b31bdc3053a3d6b7080e"],["tags/桌面/index.html","8b0bdfc9fcfb3f55012bdb6276e11f26"],["tags/梦想/index.html","56886f4153db5d06e37591196c89c4fb"],["tags/概率/index.html","d52f9129f8ff31bedfc895ebe9d0f571"],["tags/模板/index.html","1b5f0d0a8ce471fd523bfa2eb5f2ccdf"],["tags/模板引擎/index.html","1ce4f511c6ebc2bce370c224a0158917"],["tags/毕业/index.html","2da29c066e8d1e36e16893e3deadf93b"],["tags/毕业季/index.html","f270e05727b86b77058ac05fbd847b4f"],["tags/消息/index.html","b467bf9961af5ead2ef5e51d00c3ceea"],["tags/游戏/index.html","c1a0e95c60ae5c77548ec1beaaca2e5a"],["tags/游戏/pages/2/index.html","df498fb1467d11ab39c916a1f3ce37b4"],["tags/游戏开发/index.html","4f6f0dd65de90d8de9a8cd962cb22ecb"],["tags/游戏引擎/index.html","12d67bdd3179e7b82a7706b65aca9334"],["tags/爱情/index.html","ca7d625ddbd572c120b99700ba911b82"],["tags/版本控制/index.html","0b7cbb2a2926f6dcea12da7492cc8b1d"],["tags/版权/index.html","d3ea47aa726d795e079f6b8c60f7d859"],["tags/特性/index.html","feeea2f758af646877791df1508a3735"],["tags/状态/index.html","6b339556c4bca0477563bcf280065cb6"],["tags/现实/index.html","1b4b75b796d04974b8b66a983a4e8f39"],["tags/生活/index.html","0830dc1061fa8190c29b684d32d00bf8"],["tags/电影/index.html","8f574b85e940d091face78bce966a5d9"],["tags/画家/index.html","c79228670cdae321ea9d1899bce5bf9b"],["tags/知识共享/index.html","8dffbe517560d517813e8efe019f678a"],["tags/矫情/index.html","b5be899fdbed1834cb16c53effb2559b"],["tags/程序员/index.html","54459a35b8ab35aca741ba5d71c74139"],["tags/穹之扉/index.html","4c4ebcd39689f6c85f40682946cc1fe6"],["tags/穿搭/index.html","4b0fb32dea744bedbf2a0a34cc29ba1d"],["tags/童话/index.html","9dbbe0767236b7aefa48e85e067f3413"],["tags/笔记/index.html","59fb6adc47ef92cc221d944bd70e682e"],["tags/算法/index.html","0f1a325c2b06b75cda8377851fd23af8"],["tags/米花之味/index.html","befd5e62bff2ea4005885993095a3e3e"],["tags/缓存/index.html","445ff02b6f29973cc08d4902bbce8ad2"],["tags/编程/index.html","8935606e8ce9fbc4e8dd721b74bcc283"],["tags/编译/index.html","14e50e65f10fa61794f14632e3809834"],["tags/编辑器/index.html","afa892ff8972662f810162b8118959e1"],["tags/网易/index.html","d044ac2ef63271ae43976f1c95a24adf"],["tags/脚本/index.html","d61e865963d9c9b4dafa661f92223fb5"],["tags/脚本语言/index.html","dd00056b1622fdbc8f6328146af23f62"],["tags/虚拟摇杆/index.html","c1d710ac4123de861b0e861e9390de57"],["tags/蛋炒饭/index.html","17ac9c418754c1fbfdaccb6f96a01240"],["tags/表单/index.html","4acc88ee149bedd1170e1047a2c65a26"],["tags/装饰器/index.html","6091295e130874716cfbda6219f29648"],["tags/西安/index.html","03984ad7089337fdc6a3542011193ffc"],["tags/计算机图形/index.html","6f7ff691d0d51c8ec08f67a489a24da3"],["tags/设计/index.html","73e4f6feac936621fd92f1682dc26257"],["tags/设计模式/index.html","36f734161e801bb002dfd9d2ca385df8"],["tags/访问量/index.html","ccff308c6f68f2ba6ea31e7efa5c21e2"],["tags/评论/index.html","9d4c25091d43060b584d986b0785a742"],["tags/词云/index.html","3f6688f23511346cbfaeddb787da7c72"],["tags/诗人/index.html","8e779914708e61b733cd41e22ba17b86"],["tags/语法/index.html","56fe46bea8204030cfb5f124fc8f0582"],["tags/请记住我/index.html","175260863d08c427b6a7670830e06e4f"],["tags/读书/index.html","7ad6779248515879f0e24c64edadceb8"],["tags/读写分离/index.html","56200d60a4ca9b873fd3922424aeb075"],["tags/调试/index.html","a4c8769e56ade7ede11d7deafb704f66"],["tags/贝塞尔曲线/index.html","03a4c95923d8a2d93f61e52efe121b7c"],["tags/贪吃蛇/index.html","76fec27cdc9d9d1deba982f71dd00006"],["tags/资源提取/index.html","353f2c46f18862518992d4fdd1a6257f"],["tags/跨域/index.html","3e49597687dd4d0ed345ad57550db86e"],["tags/跨平台/index.html","614675299eeda8a819a885f0b6ab6d03"],["tags/转盘/index.html","214ca42236bdf1efa149a8ce69d11099"],["tags/迁移/index.html","4dc60feebfa5400a87adeee2b7da4f81"],["tags/通信/index.html","733cd1d44d49861d8f641cf96389a9c3"],["tags/邪不压正/index.html","11b38ee3ef8c84824b648889495ae9ea"],["tags/部署/index.html","07804e2d4f80747ac55307dc100479bf"],["tags/配载/index.html","8388641a5b4c7a0fc1da5d4fb389da34"],["tags/重试/index.html","980a9505640efc79a98aa8faf24d713b"],["tags/长安/index.html","f7fc934c25864a49a143fa5bdc187b46"],["tags/长安十二时辰/index.html","953431059fb30e9a72f4dad4349ecef0"],["tags/阅读/index.html","ca9394e5eda2711d5e126c33a2396cf8"],["tags/阿里/index.html","3b975354eb62d7a33e4f93805ce3c0a4"],["tags/随笔/index.html","0373ba5102bb6a071e3def2094cf3863"],["tags/霍金/index.html","a717786e2ffb0d9da2eed8db9f4cf2c3"],["tags/青春/index.html","26e2f836ac936dc91031d993bc89440b"],["tags/面试/index.html","bff62c483bc28d34a77c1050fda724e7"],["tags/韩寒/index.html","58a693d1cd5e45765b7175d6c738dce5"],["tags/马尔克斯/index.html","ea189072f9bff6b69a8221904154d2ff"],["tags/验证/index.html","a5bd6315e95492d4f43ade56bc29299d"],["tags/黑客/index.html","b1bc2ef130eab55bd6217757dacb93ae"],["wiki/index.html","e73a2b31cebc0df245736448ba538afd"],["works/index.html","b17a844897cce382bbfe2abdc1c4e865"]];
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







