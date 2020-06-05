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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","1b97207119ad376c8885b257b665604d"],["archives/2014/12/index.html","d95a31549fa6e7e9359e5115ac3ee6bf"],["archives/2014/index.html","d3aef9a5493db39ef2846e0312c0d971"],["archives/2015/01/index.html","6bdcae5c697ed2245de7f8af4bf32123"],["archives/2015/02/index.html","a428ca51b94e139e18ee7a0e4c1b12c9"],["archives/2015/03/index.html","d4f379a6923dff67b78c4baf547a3721"],["archives/2015/04/index.html","b1446718432a331e8bf26b2b80d8e537"],["archives/2015/05/index.html","c6679b47103b31f51da91860907d587f"],["archives/2015/06/index.html","c504c06da8fb51e9266f91380fb1c07d"],["archives/2015/07/index.html","0068783c2aa2d4271bf914730c835d49"],["archives/2015/08/index.html","9baa8e93d3bfbf1c57749c121945787d"],["archives/2015/09/index.html","ac7e16e2d47c75f4091f012c85d814eb"],["archives/2015/10/index.html","96f8489c517538574d8914a9c3aa203d"],["archives/2015/11/index.html","d9e71496b71d031796130823e34b6cff"],["archives/2015/12/index.html","6a3f07d5562ea9defa876050564a5d78"],["archives/2015/index.html","7660b15a94071344982cc80d85e8dc25"],["archives/2015/pages/2/index.html","247005dccb33371351df23996f5094b3"],["archives/2015/pages/3/index.html","464d6038126f70af2977d93a2f06e40f"],["archives/2015/pages/4/index.html","16e4856e5237793e3c745b982c5304db"],["archives/2015/pages/5/index.html","0ee328196059430eb3e0d6be71cc4b72"],["archives/2015/pages/6/index.html","6d5d1c260dfff0017e43d52dd0262e6e"],["archives/2016/01/index.html","7f6283aa47919bb3fbee20a9e511a1ec"],["archives/2016/03/index.html","8c5e222b9a4610779d2ddc13a370c6ad"],["archives/2016/05/index.html","b7cb7288789bd49cea0fa522790edab6"],["archives/2016/06/index.html","0202272bced695e0ae438f53dc302bc2"],["archives/2016/07/index.html","45862ac0fa60b1dff722eebee65b619c"],["archives/2016/09/index.html","0b935da9360d10b067869985e7663000"],["archives/2016/10/index.html","d917b22a9cdbb25c81904e58f7380258"],["archives/2016/11/index.html","9c2108b83da88105c05b816c6ad1f368"],["archives/2016/index.html","ff8c18a477a8a12a3d2c0cb85a21f99e"],["archives/2016/pages/2/index.html","97c0d8aaee28f4fd9e0cdda417a1cf4c"],["archives/2016/pages/3/index.html","9d2ca2e4d80bf088ee7ab56ca0a1a1aa"],["archives/2017/02/index.html","d4a761d722ef75bd5d72bccce1bfecce"],["archives/2017/03/index.html","af483ed2c7130f8b79a6917ec3cf6a5a"],["archives/2017/04/index.html","db9aa401d81ea2b749bd355c50efa17e"],["archives/2017/05/index.html","5a48ea0b2f942734cec009ba1af82932"],["archives/2017/07/index.html","99286295369a19aa807a97d2b47ac022"],["archives/2017/08/index.html","54af1200a9b2a50e7f58caeafa67d603"],["archives/2017/09/index.html","ca0c7c61f7818211a2e86d42a05dcee7"],["archives/2017/10/index.html","6375495ce7305b92752553c19928ebb1"],["archives/2017/11/index.html","a352551667e8a051e83ae915e2c8c5bd"],["archives/2017/12/index.html","82b08e9b0eb1ea4bf1f75a4a3eb011f3"],["archives/2017/index.html","6994268cb626ebb277a8751a05fd3608"],["archives/2017/pages/2/index.html","c571ea6d0c1f968f228d37421b294762"],["archives/2018/01/index.html","5c91569ba4732117ad2bfc65e88bd94c"],["archives/2018/02/index.html","bbf96c90e9e82125b11dcdc7e1c1b6fa"],["archives/2018/03/index.html","87a6728be53a8462c26766e78097ac7b"],["archives/2018/04/index.html","6cec338c3ae862e48a774b54f6619859"],["archives/2018/05/index.html","854d59dc7d76906af8197e9996cab2da"],["archives/2018/06/index.html","aae8c8c4c1851663375b06c3129c023e"],["archives/2018/07/index.html","c6c8dcecae819a26516d61de2445ecf1"],["archives/2018/08/index.html","4d5c891ca6e2e455c0baf829c7d6385d"],["archives/2018/09/index.html","962e4a72bc285ba8b4a2909d493337b8"],["archives/2018/10/index.html","2a8dfee2fcc5438452b9d6cef5543387"],["archives/2018/index.html","7e66beb42582ee45c79d8ebb916d68a3"],["archives/2018/pages/2/index.html","36a403511ad567bfc8cbd582dfea2f45"],["archives/2018/pages/3/index.html","e5099b3b3cf62e441cf3d5e7309df5c0"],["archives/2018/pages/4/index.html","001cf864765351c3d4d65c3565ad5ba3"],["archives/2019/01/index.html","b503933ccd7c9f6abb7051b2ad4ac66d"],["archives/2019/02/index.html","830112ab63f129aa251b05703a572962"],["archives/2019/03/index.html","9fb857d33d59b2c300b5ee7905833243"],["archives/2019/04/index.html","233b0cd11968dfb73d1b3466db25648e"],["archives/2019/05/index.html","da8eb3e82c50f2525ab2228c314a0a2a"],["archives/2019/06/index.html","a155cfad570633f166acbd9a5747b3a9"],["archives/2019/07/index.html","e41d673c0887b93ad42e93932c413913"],["archives/2019/08/index.html","550df5b5b194713cfe347fedcd4a09ef"],["archives/2019/09/index.html","382a12db7e1b1fe911a6b3de03eb74c1"],["archives/2019/10/index.html","ae88d58d829cc0b6729b92d93cc69a84"],["archives/2019/11/index.html","0c9f270a4fb9a13c4c44be3bbceb6b31"],["archives/2019/12/index.html","a542f74ddcfab6795d35e317ddca5629"],["archives/2019/index.html","7a64af8e0b35f4a65c5ce404357ff888"],["archives/2019/pages/2/index.html","55163526682cf3872d2d084534e4d2ec"],["archives/2019/pages/3/index.html","e5ba00920ae2d86e0ca4c44fdd3abd78"],["archives/2020/01/index.html","f153844231cbeae307feeb80d561d56e"],["archives/2020/02/index.html","44647caf868877a7e4e25faaccfd5314"],["archives/2020/04/index.html","16f78e5bae4f16248a50928b690b9ef4"],["archives/2020/05/index.html","080381abb320fb9bb5ffb8005a6dc40f"],["archives/2020/index.html","10ca93aef6fc6a2705107dcda551a32b"],["archives/index.html","eeddefff9c940dbad7b34e3ad671c414"],["archives/pages/10/index.html","4f00dc14db5e6852b8e565212e099290"],["archives/pages/11/index.html","e79d0cc91c19e87a793864c7039c5e1e"],["archives/pages/12/index.html","fdced415a84b659642a122198bcbb835"],["archives/pages/13/index.html","266f5f11cbd29842b53206e95f31289c"],["archives/pages/14/index.html","f579a11235e2a345ef90d4b1ffba2846"],["archives/pages/15/index.html","612d884a31fca7d0b850f028fe679d67"],["archives/pages/16/index.html","f1d841c4de7202b17acc8364b22c65a9"],["archives/pages/17/index.html","d6dfe34c198d2fbffab8f740e7733af5"],["archives/pages/2/index.html","c545408261b5cee16cfeafa96e477c57"],["archives/pages/3/index.html","2a8129f388a386184fa692b4550f570b"],["archives/pages/4/index.html","70d874efa449def83bee3b4adeddd6d4"],["archives/pages/5/index.html","1af41c8b4a9cd2d51f35a1d352d08a7f"],["archives/pages/6/index.html","3676cff276cb4e2ccc1d9dfeee9e3dc0"],["archives/pages/7/index.html","1756d817c0d2058c18dee8dd6d7e34cc"],["archives/pages/8/index.html","eea84d11a3830ef87cfa8b5572bcac68"],["archives/pages/9/index.html","304286694afa853a736039cd5d5c5de1"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","e5cad54a3f7552ee927bdd0abadd3e9a"],["categories/Unity3D/index.html","d899b00e17cad857c7f6a4904cc9d96e"],["categories/Unity3D/pages/2/index.html","d351754f555b10346b1f87e3d45b785d"],["categories/index.html","640aca66f63086668fd860bfc557b8ee"],["categories/人工智能/index.html","89a97bfa6c0d36ec121a9e07e8dbba66"],["categories/前端开发/index.html","fab14c7530109144b3fe816c5e33a8f0"],["categories/单机游戏/index.html","9df8c7ff17344e8b0880924e8398ba09"],["categories/开发工具/index.html","a2cd46c4ce5c6dc1b75ee5fb8353aa63"],["categories/数据分析/index.html","035d4c469067b878c6c5d46055e96609"],["categories/数据存储/index.html","59caab630471d3b6575289436e97b621"],["categories/游戏开发/index.html","7b000ff7ddd19a1e0b0545f4819fe4fa"],["categories/游戏开发/pages/2/index.html","8fe645fdb1e7ad6f72294035bb2f00e5"],["categories/游戏引擎/index.html","d4e35b4c45ca78ef06a526f81e72d83a"],["categories/独立博客/index.html","33a5f2cb0b324a133c1c6498e75b274a"],["categories/生活感悟/index.html","554f2fb04c5d06567bd49da4a1abf4f0"],["categories/生活感悟/pages/2/index.html","b64c66cabe901bd84dab3e4f6d17ca25"],["categories/生活感悟/pages/3/index.html","0ac87226756e61ca66c89bc3cc12e7fc"],["categories/编程语言/index.html","7e3cbf4f4227ac131f5c0d57d86aa32a"],["categories/编程语言/pages/2/index.html","dd5fccf29f9a9acb052df196f942ba79"],["categories/编程语言/pages/3/index.html","9d9df6b34d5bb06d40a3134be6eba7d6"],["categories/编程语言/pages/4/index.html","bd8c74badb69c4c58bdd8f829d71d1da"],["categories/编程语言/pages/5/index.html","ce0acbc2c08979a9af92fada98626f1c"],["categories/读书笔记/index.html","2c04a0ab7547cf8e727fc70b2dd46ed0"],["categories/读书笔记/pages/2/index.html","210ee880326514fc5329e8438b429720"],["friends/index.html","3d0f929ce3a9f5ab6efc1b281c5935b8"],["index.html","2d92250f0da937a3f40fb488acbb7aa4"],["movies/index.html","b4892eb120b6816f9100d8cacf3e06d3"],["musics/index.html","c4e4dc0534b4c63d63ed8da37a4d3ddc"],["pages/10/index.html","cfb0bdac7d39a5ae4cf167730381b615"],["pages/11/index.html","874c09d05f813c6564261fbbb2b056d4"],["pages/12/index.html","93e125b1c12e84e2e306c2125545382b"],["pages/13/index.html","dc56d2fa8ba480522975e04c70f30c10"],["pages/14/index.html","4962735a8031860e6e5caba4cc5986f3"],["pages/15/index.html","ad004429797a423dd5f52bb872308a73"],["pages/16/index.html","66be1e765daa7a10e43819a5d5b460cc"],["pages/17/index.html","d710218c5b8ab98b3ba165857771c5dc"],["pages/2/index.html","38d6b1be76eea05d036d9a4a7de35ea6"],["pages/3/index.html","c37813e94886491137ddeb23d26b7601"],["pages/4/index.html","35c4f29e25a0e4b8ceca95686c1d9cf8"],["pages/5/index.html","d039efc398a386addd8657bd2be0741d"],["pages/6/index.html","bf243732711f5c8007764d9f17be8213"],["pages/7/index.html","95d532eb24b6c55348443fad5a0fd9fa"],["pages/8/index.html","46e2cdbca811c34f4cddab3e6b4ae815"],["pages/9/index.html","556f9096083142b7d33781c39d6a065e"],["posts/1059499448/index.html","78c044b90ee4a5ebaf67736c9e4bf3f6"],["posts/1071063696/index.html","6f6621fdbf53b39c995d656cfd9bdb24"],["posts/1082185388/index.html","be6762d60bee227e76c99279a80390b2"],["posts/1099762326/index.html","fbbae9dd868fa574bfd708eb13936762"],["posts/1113828794/index.html","6b4b9777035eab3b374e3f758a618055"],["posts/1118169753/index.html","3b260ca256b064ca7d80a1a5c636a161"],["posts/1122710277/index.html","99b63cc69bc2c04fb0497c9b5a0bf8b7"],["posts/1124152964/index.html","03c684bd874d82f97e810821bf9b383a"],["posts/1127467740/index.html","d17f2aca8dea7fb425c3fb296e9681f0"],["posts/1150071886/index.html","bd23d29fcddee02553cc742203b158af"],["posts/1150143610/index.html","6eb9fcf931c51c868b4351d439853cb6"],["posts/1152813120/index.html","e8639f59d8af32bac4729751bbeb6e07"],["posts/115524443/index.html","fa22bb8ddf5ed5356acfe9bc33246997"],["posts/1156673678/index.html","7a868d76dc305817c32158489eeba53c"],["posts/1166840790/index.html","a3c53412eb64f2ebb23f91cd845bb67d"],["posts/116795088/index.html","f152e38289b3affdded123126fe6066e"],["posts/1176959868/index.html","c6d41806f52302da4e794df051e7c657"],["posts/118272597/index.html","05e918431a80615f696f2b60dce9b771"],["posts/1190622881/index.html","5c4de60cf5f0bedde7d4093c06b23b35"],["posts/123663202/index.html","5353a7b2ba51fa30cf66e3ac089549eb"],["posts/124807650/index.html","b5a99f2e5c50294dbc15cb790166a5e7"],["posts/1254783039/index.html","2e9f7e371bd45de466d5f6ab7d25abf8"],["posts/1289244227/index.html","f20c19e69f78b378586bbdd9660e7ae6"],["posts/1320325685/index.html","8f5fa36070c620331733656f8f517d98"],["posts/1329254441/index.html","fd914f04c9c8ea43ef4ed0cfef89874f"],["posts/1357715684/index.html","e6d9c30bd44ed3ac598f582ff6e6271c"],["posts/1358971951/index.html","73816d831567a467ac34615c412df981"],["posts/1386017461/index.html","9c427326af34d4b9f8e23dda8a4f9e37"],["posts/1394521917/index.html","ca2b0c383bbfbc6a7b968dbf9f2fe5f6"],["posts/1397717193/index.html","845c4e3a7d58e2be9e5de7e135094c63"],["posts/1417719502/index.html","5f9e41ad6ca274e6c6393e6e999ef493"],["posts/1424645834/index.html","99fa8f0dd4107ec5477e4c7c433daf46"],["posts/1444577573/index.html","a6ed0e2c4f7b63942bc57732eda514b8"],["posts/1467630055/index.html","910864a0596883a091a264c59ec1ba45"],["posts/1478979553/index.html","5a53c23239135cab9a1520cd9750414d"],["posts/1540537013/index.html","b84dc9567b370d8ac85626dc72d53864"],["posts/166983157/index.html","a9a63018878b559e3948532ff91956f3"],["posts/1670305415/index.html","8080653a848b38300c5855ff1b7aad9d"],["posts/1684318907/index.html","fe6920f9a10398104bac62871446ef74"],["posts/169430744/index.html","a5fd8d5a1a04d4b37990bb2937706b36"],["posts/1700650235/index.html","127cc3307566acf9468117cd7ce6e02e"],["posts/172426938/index.html","c0cedcb75afa7a075d9186a44f45116d"],["posts/1836680899/index.html","b9fae4cbcc9283ada8bca5fea76d6627"],["posts/183718218/index.html","ff649476f74ef6d6a491122e320ac068"],["posts/187480982/index.html","fd1a9a658d4d00288a4513fd5c7ceb4d"],["posts/1930050594/index.html","b1241f05bd68cc6e36740821eb5ad1e8"],["posts/1933583281/index.html","3017be39109742a9b93c0c19802592c9"],["posts/1940333895/index.html","6fdf4a82710e06de14c2a0d1f6a9de93"],["posts/1960676615/index.html","7a7fbddfc2994bfac2eefa8cc5a33e8b"],["posts/1983298072/index.html","db957108abbce888bd824ed813510d95"],["posts/1989654282/index.html","65a0fc6016235d100ed2f6470e91f1d9"],["posts/2015300310/index.html","bc7f74ad8cec27938635ccb6545fce96"],["posts/2038378679/index.html","1ac57e7d629f761730fb1984b219dc53"],["posts/2041685704/index.html","a9c8effadd7b53039daf89a599a225aa"],["posts/21112647/index.html","262bad4208b7672aeec386b6dde7b523"],["posts/2158696176/index.html","d059b60f01063f6ff66b8b836c1b6dde"],["posts/2171683728/index.html","3a245b6a1a3e6848aa68bdc47c544c00"],["posts/2186770732/index.html","a5dd9856e3637e42de0ee5525548dd37"],["posts/2275646954/index.html","d26e5dd38358f67116d7c14b950bc153"],["posts/2314414875/index.html","6a265e6d576306975504fcd899e9a742"],["posts/2318173297/index.html","da25d21b3b8f843c5a20b3d0b0d24d2c"],["posts/2418566449/index.html","dc64eaab9a19e49fdac031a788d854b4"],["posts/2436573863/index.html","82bbb35a55e123ca74366b71abfeb944"],["posts/2462008667/index.html","c50c62d27a0c28324d10a47ddb89313c"],["posts/2463121881/index.html","58597f1290eb8c83301b86193469658f"],["posts/2488769283/index.html","b281d48297ccf9d6faf181198b3727a5"],["posts/2527231326/index.html","c0c3065c34ec4b77948b108a2bd9dcb5"],["posts/2583252123/index.html","574c6c8b520a21745b9fa6f74a87c017"],["posts/2613006280/index.html","adf845ae68f20caf1838de3d4fcfc538"],["posts/2617501472/index.html","c890fe97ce3d1a470d4aac884bd9529f"],["posts/2676125676/index.html","e4b20dcdc6c666ae4d0b496b9389a89a"],["posts/2734896333/index.html","4bafecf140404243f3d89a64f0db4f09"],["posts/2752169106/index.html","d6b73e7e786198d0906aa26627f6289a"],["posts/2799263488/index.html","23387258dfb4760f234ce2e07e2f47ee"],["posts/2805694118/index.html","c21ff03e9694636e163389018b7e1f1f"],["posts/2809571715/index.html","3376a5041b5a2855d06b366096254244"],["posts/2822230423/index.html","8b72b99f67a0c615855093e8e2d79898"],["posts/2829333122/index.html","30aa452ae274e84e82788f2e363cd5f0"],["posts/2911923212/index.html","82d320880185b0b3bf65da69fbe4b4a0"],["posts/2941880815/index.html","1d82f374398b77b1358b733fb84a94ad"],["posts/2950334112/index.html","282cec0a31c0038acdc6de4fb63d28fd"],["posts/2954591764/index.html","dd72fa7f8f711795c2c0bbf5536f212c"],["posts/3019914405/index.html","9615a9f7c2e81b4f585dc929ec981248"],["posts/3032366281/index.html","60308eb6279ba4893c7096be41ecbfd9"],["posts/3040357134/index.html","bb92ffdd445f0d26841a8c7c40e6388f"],["posts/305484621/index.html","112d217d47615dc21c04e959df209fc1"],["posts/3083474169/index.html","ff219bcf7e28cb869f67da33ab5be954"],["posts/3099575458/index.html","ba771197338d2cb2a62eae38da5be1bb"],["posts/3111375079/index.html","bc4d9eb9acd1142d6a5032f1dee7ecc8"],["posts/3120185261/index.html","b71c3b423cd62cfabf5f340a0ff1c7d3"],["posts/3131944018/index.html","065796be419b903132693f04735ce876"],["posts/316230277/index.html","6dd012c8b3f420fc2ae4495ca7d325ba"],["posts/3175881014/index.html","94e34a0421d2cb8a413cf94b32f3a6f1"],["posts/3222622531/index.html","016aef16108e5e3bc5313db871734144"],["posts/3247186509/index.html","8c8847887af7c762b5833e0dd3e61b91"],["posts/3269605707/index.html","478399cf3c1d4dc91d96e112e5558863"],["posts/3291578070/index.html","b3083efe89b05727f485877bd77dcbd5"],["posts/331752533/index.html","2ed7fa79088285fdf2d8102df5176ce9"],["posts/3321992673/index.html","40cfa9dea826faee684c84504467d8bb"],["posts/335366821/index.html","f92fc08d4baf49ba701767e50132ee98"],["posts/3356910090/index.html","c11bb4160a3874b9870f93bd32b4cb01"],["posts/337943766/index.html","1ce2bd1dd47a5241309d0758d6ddb283"],["posts/3417652955/index.html","db88eb4c2d88529e600a5743a29a2e5e"],["posts/3444626340/index.html","60a907dca008dc04b579412495110ba4"],["posts/3449402269/index.html","fb218f84697935c06422b2db4dc62e48"],["posts/345410188/index.html","48d41867e47e72ab7062841ef8c19db7"],["posts/3461518355/index.html","3c3f6b934cd1be3bd374e624ff56db63"],["posts/3494408209/index.html","ae5299b8f0775f08c9eb9165692ad1be"],["posts/352037321/index.html","69596a7cad3fe2fe04b82ee0221c37cd"],["posts/3521618732/index.html","b7f91a6d84ce278b72676ffb31d56dfa"],["posts/3568552646/index.html","d6da8419b83d136853e1c4a31ab1e49a"],["posts/3603924376/index.html","814b426030f51b0d3ac9f4bfbb58d923"],["posts/3637847962/index.html","aa29c728afd197d78950ec0977421a37"],["posts/3642630198/index.html","ada7def4dc2ff850990d3107d1630b7b"],["posts/3653662258/index.html","0d7ecd3209d170cd2fdbb977dac8ec2c"],["posts/3653716295/index.html","adb9cd3cec5dba3a588106badb3474e3"],["posts/3657008967/index.html","44139893c59a305535fb85931835434e"],["posts/3668933172/index.html","92f97720d9055dc3233986ed5fdc04d8"],["posts/3677280829/index.html","e811d2bc28b05228b257040640b3bbef"],["posts/3687594958/index.html","c67c4f173c4050c9d95864d369caad19"],["posts/369095810/index.html","3fb507402a992e4dc37f5df77c052bc6"],["posts/3695777215/index.html","9928e9bbc876c5bbdef70cc9badfe303"],["posts/3736599391/index.html","997980ad2b1c081041109ea37f494c5d"],["posts/3742212493/index.html","76671ccc6872746dc552a26588f1ad45"],["posts/3782208845/index.html","d46a1c65d3018158cdb003c06dc2a34c"],["posts/3789971938/index.html","dd17b197570221ba8785b646a369c218"],["posts/380519286/index.html","c14f832fe370e50a0dc37da767b31de3"],["posts/3846545990/index.html","8d1200de01a2672c506b549ba391cfcb"],["posts/3873710624/index.html","0256461e7f06e287c738dbeadb340ff7"],["posts/3959327595/index.html","c5eee5b3fe91311809d68b3e2f735ef8"],["posts/3972610476/index.html","f0fdf572ea9cd7b80ea018217cdb1a13"],["posts/3995512051/index.html","e5c81a8b58c1e2877c21300cb4fd890f"],["posts/4088452183/index.html","2ea373b01b9349b726de9696229b10f5"],["posts/4116164325/index.html","744c4231ca43169e20f439f26f193e94"],["posts/4158690468/index.html","216dad2cd3b24c08d2f2243ba41db510"],["posts/4159187524/index.html","7aad9c95113b004a3b5d1c19b65c7eda"],["posts/4197961431/index.html","2e1fac2c0e660fe9468d64e8d8fcaa49"],["posts/4205536912/index.html","835cd4ef7de08f2388466cc1cbbdef4a"],["posts/4236649/index.html","e5debd25021bdfcdb4249d91e9767a02"],["posts/426338252/index.html","e5178aa6d9e293b7755651d6a63b2d50"],["posts/450254281/index.html","3cb19cbc976da0d10aa8906e2b04743e"],["posts/4891372/index.html","5cedd6c33eaca4e8d7b26afbff7ec3b4"],["posts/569337285/index.html","18cb1d797fd0eea15ab3e122e83e8b0d"],["posts/570137885/index.html","641f752c74836d125ab7f2745cd45500"],["posts/570888918/index.html","85e1448c8cd0b2754f81ad92cd86bfb1"],["posts/582264328/index.html","ee5936b665d5b912bb57422dcf474456"],["posts/632291273/index.html","1b5dc36e60e5cd91c5334f2f92474b54"],["posts/70687890/index.html","566a33b8ba4f1afe26acb0d2a59fb9d8"],["posts/719322223/index.html","2a00de2b7ae2de34e1a74ef8c4340e00"],["posts/720539850/index.html","fe6cae6bb7eb6d6469f4b47704909dff"],["posts/786195243/index.html","af6b832485d260d832ccabfce1052a21"],["posts/795474045/index.html","ae7953e786c30fbf69fad472e45ebab4"],["posts/815861661/index.html","2f7b8832e6a1da4758f1cb0f364f6bf8"],["posts/821259985/index.html","9e972432b1244c70b4edcf09e2f4b0b2"],["posts/828223375/index.html","b317ecda030a3e4db7aeafe1c0006e45"],["posts/887585917/index.html","dd1fa817fcddf2277b5d0cabf7ab61a9"],["posts/888549816/index.html","1dfa3b6a26637df40728a3571d0d766d"],["posts/906436376/index.html","1818f5e526bb7ed38f8bfa1f2f9498d5"],["posts/907824546/index.html","6ccbab49b07a694897f8cae8b6e37acf"],["posts/927393529/index.html","e4cb4327966898c661fb6baf0f7d50fc"],["posts/94443781/index.html","cf93698f8cefe590a3312ba9349d1b1d"],["tags/2014/index.html","3becb08b0f9f1b4b9ad53ffc3f8145b6"],["tags/2019/index.html","ba9bed152d77a23086c7d0c1327137f2"],["tags/AI/index.html","22f2444b8e49afb2b8d64ad51c6116ca"],["tags/AOP/index.html","2e7f2470c78d7fecffaff17932db242e"],["tags/AR/index.html","18ea8824d5da1da9340c784993c4418a"],["tags/AssetBundle/index.html","556e9387e10f2b48fc9664f8f7f1c692"],["tags/C/index.html","fe537bff596620dc3e0e790a1328dfa2"],["tags/CDN/index.html","1f14dfa6fda436b93921063539e5b1fb"],["tags/CG/index.html","83127696dc8b477c1f0b99e6633d6b29"],["tags/CI/index.html","f96cda0095cf067a310ac8ea1c102e15"],["tags/CORS/index.html","b70cb6eaaea453c3ccfe82a704c664a6"],["tags/CSharp/index.html","c7b0957b7b1bb1277c9e3a0f6a3e964d"],["tags/Castle/index.html","51a8d03b28ef462483fbe8e7bdc2620b"],["tags/DBeaver/index.html","8e746c156962594723480c5f439dd644"],["tags/Dapper/index.html","5d00a0c9a8d2983ec522bb10320420f9"],["tags/Docker/index.html","b93d3f94a56e2c9b36ef78205191e08c"],["tags/Dynamic-Proxy/index.html","0c5ff542fcaa01965e53f11556b1b213"],["tags/Dynamic-WebApi/index.html","f6e6bbdee776c58b04d18c4734d3d5e6"],["tags/EF/index.html","a6b604a31d2b77130a6ff679ba176597"],["tags/ELK/index.html","1e7a28ba173869791bd87ecd0eea02f4"],["tags/ES6/index.html","3666201cb0f4f63a0a161e0ebd82f1dc"],["tags/EasyAR/index.html","04d2699413b2a7a1dc8f084b5ea188dd"],["tags/Excel/index.html","a75d055be1fb3d929a9f12c247ab5aa2"],["tags/FP/index.html","4c13664736e6fb9f9f6d89adfa304976"],["tags/Form/index.html","41e203f8d18e2bdb878a53d79b91c0e7"],["tags/Git/index.html","f92e751a93f9afaf2b697a4dbd2b990f"],["tags/Github/index.html","90e159da2b241d79acd8d4da9732f7ac"],["tags/HTML5/index.html","b9b02f649332209bdc9f585c0b884551"],["tags/HTTP/index.html","63e81a884bbbaf0d510a2dfe353e552f"],["tags/Hangfire/index.html","e71b92c2cf4a0d2cea295fac074a008c"],["tags/Hexo/index.html","4d6c15313a185bbb5f64cf1ed222d060"],["tags/HttpClient/index.html","c6463c4d66d4d125d12a6fe022bbc32e"],["tags/Hyperlog/index.html","a55e6be779e6e0de18c6d554f76c2edd"],["tags/IDE/index.html","f264b60227531b57244c85c059cddbae"],["tags/JS/index.html","beceaec4b5db6b9b7d3cbd37a9ad5e00"],["tags/JSON/index.html","8b10e93a5be45960c8f192392bb2f53c"],["tags/JSONP/index.html","b65b5357f9250a19dab0cdf3df00ff31"],["tags/Java/index.html","12386af58cf7d0682cd3815cb6a332fa"],["tags/JavaScript/index.html","453bcf7696b687c4e9651084bad5fafe"],["tags/Jexus/index.html","ca993aa9c95e9dc91604d47fa089ddab"],["tags/Kindle/index.html","0c547e9adeb736cca7fe550e60e364a0"],["tags/Lambda/index.html","3dfc312f620d0b9d74d9ee58e1965881"],["tags/Linq/index.html","c05a216d003f1cc0caf6419f1c696ab9"],["tags/Linux/index.html","de12e11864a54d2ba8bff5652d87c706"],["tags/Liquid/index.html","8d072b2c05bb74879ca727ec4e97ccea"],["tags/Logger/index.html","7446b7dd6aa5c2b3cc72d6eb3dec4797"],["tags/Love2D/index.html","bb5daa266e8063c011f2ef8fa7e5c51e"],["tags/Lua/index.html","e1418e6f7ebdf2b1841e028c45d31ec9"],["tags/MMD/index.html","df41e36a959de0d3f14c32242ad36120"],["tags/MSBuild/index.html","8e7cdc1daa8b1734ea868a7c0c3de6c4"],["tags/MVC/index.html","00d6eaba90b6c690772cc83df0bc399e"],["tags/MVVM/index.html","f922db6048cbc6e697c2a6560fd074b7"],["tags/MapReduce/index.html","908f5a5ce707a89dad6947eb93ceab71"],["tags/Markdown/index.html","3c9d79cc21303c4bc51c67cd882a1ff0"],["tags/Mecanim/index.html","18b116c943254f6db81bac1755b5926a"],["tags/Mono/index.html","807e42e34ede855375a358a5aae8f62d"],["tags/NET-Core/index.html","2d15c5faa79c3a1faba1cf9e55b8e155"],["tags/NET/index.html","f034980fa5692cf4ee4661f0e31669d2"],["tags/Nginx/index.html","62e17479afe4de657a29a54896e65d6d"],["tags/OBJ/index.html","d392bf0e1b6fb70387f2f86b8af71347"],["tags/Oracle/index.html","7fc80b3a398f61de2e1dd3f5b1486915"],["tags/PL-SQL/index.html","e8d62eed382c49c2befc2bdaebc97fc2"],["tags/POCOController/index.html","969a4a4f412668d397ab01991c554cfe"],["tags/PWA/index.html","2bd3110ade281051ec94fea3f3ee3c95"],["tags/Python/index.html","82c911143b45a2a8fad79a0f109522aa"],["tags/RESTful/index.html","9b139750e1c9de7755300662416fe57b"],["tags/RFC/index.html","1e9c913030462852596be0f1cce77067"],["tags/RPG/index.html","ced5d37a192e69be026bce382d532393"],["tags/RSETful/index.html","8d40622608923ead045dea8af404144b"],["tags/React/index.html","117e174bb95e79669d72d891689832f9"],["tags/Redis/index.html","35d27555946e691bb921c8c1c90a8a8f"],["tags/Referrer/index.html","c92016332666219dadb92e17a1549ac4"],["tags/Retrofit/index.html","e7c884b094a641307a4462f080103231"],["tags/SDL/index.html","68ab302487a9bcbb6c9a85aa76016ff6"],["tags/SQLite/index.html","8f4d788e353f5ec7402d5200fe354350"],["tags/SSE/index.html","28ff94b5e79e798c5ee698ab6e5b9c4c"],["tags/SVN/index.html","97f41d102c4102dd5dea0cc792f20c19"],["tags/Script/index.html","8998fd64b8baf825af2f6fd59f313d43"],["tags/Server酱/index.html","7e6730ce8cfb7dafcf564707bb1f3bb8"],["tags/Shader/index.html","75c248b28ea290cd91cee5674e56edcf"],["tags/SignalR/index.html","0e9007ddb2ffbb1a13609ae4850a6aa3"],["tags/Socket/index.html","7eeb7aa7b4d131c0dfbd2d214979f38d"],["tags/Sonar/index.html","7bdc45975e9ecf23b643c6ebc0910c69"],["tags/SourceTree/index.html","dfe24328fa904538daa0e5a9ca3bc6bb"],["tags/Sublime/index.html","ba463121e6e2d8c7d29530a2c6135944"],["tags/Swagger/index.html","123b5946ca60ca46a3568606375845e8"],["tags/Trace/index.html","2c56e07e77c44cddc8e5cc76e27ed19c"],["tags/Travis/index.html","4f063c4197e1cb963a83f68b2a51071f"],["tags/Unity/index.html","f02b7b358ffda65f46e88adb4bffd7e0"],["tags/Unity3D/index.html","bdfc503afb0f6ad0da75b570177ec05d"],["tags/Unity3D/pages/2/index.html","edf9da94a25bcc12c893219f1a2d4bd5"],["tags/Unity3D/pages/3/index.html","fefaa85d7330c9d80dd892985f66eb22"],["tags/VSCode/index.html","676ff0cb829cd8cdeb274f014cbedbaa"],["tags/Valine/index.html","cb42c8a95af07a9e7147301022426882"],["tags/Visual-Studio/index.html","e260a4fefd1d511b54d0079bc5778c97"],["tags/Vue/index.html","e74aedc68bec224d2030212fe9257fd8"],["tags/WSL/index.html","a109ba72c0fb4262d75d84804e37165d"],["tags/Web-API/index.html","9980f2cb9b3ca4ec9c8c4496d3186cea"],["tags/Web/index.html","ac93b5ce0e07fa8624583f2ef09c327f"],["tags/WebApi/index.html","bf6c89e75d1cd84f733bb439d056ef8a"],["tags/WebSocket/index.html","5c09fc3e1b9b850e474e979f1712a5d2"],["tags/Wechat/index.html","30e2fbf7bd7be7b75baca53a26a856fa"],["tags/Windows/index.html","ed3f7ebc469c66b0cdde39250b48b9ec"],["tags/disunity/index.html","11d2db92e70b259d95d010d1eeab9d0a"],["tags/index.html","29639456d463b02db96db70573bc557c"],["tags/jsDelivr/index.html","c447e0f4ec6aa0069d68c133c4b2d30c"],["tags/matplotlib/index.html","936ce34df5fbcc0044f49704d9e78654"],["tags/uGUI/index.html","4dd9882b5d70a06670d7d81f35cc7ad0"],["tags/zTree/index.html","c2bd7f101d1cf58849f39b6450de2e3d"],["tags/一出好戏/index.html","aeaa10abbfa8577a4d8e73a21ae1bd9a"],["tags/七牛/index.html","63848a475e2e9e50e48898d3fe42e6cf"],["tags/主从复制/index.html","f66d574a282b2cc48503c9f5d1f30974"],["tags/事件/index.html","d595ffc67fe085c442e306da84fb8aa2"],["tags/二维码/index.html","dcea2a1d52b4ff3d9f7a400cd1b96b8c"],["tags/云音乐/index.html","f7eb164ba2f41e822c14e0559e7c3de7"],["tags/互联网/index.html","a65c66c64e5effd740f7dd11b189e96b"],["tags/亲情/index.html","e8e552ca13a4f1dafb1fc78ec36e9e45"],["tags/人文/index.html","3424addc4f4398d11110a6f2e736e904"],["tags/人生/index.html","26f6234c7d4d455ca8f66690c0f3cd3e"],["tags/仙剑奇侠传/index.html","3a065274537649927c6927278c947d27"],["tags/价值/index.html","3a70810d287f116b4f0785b5dfbbe61d"],["tags/优化/index.html","7fa52939b14b16500dfb730b63a4b389"],["tags/全智贤/index.html","86dbb6f67586bf725352ea43fc419635"],["tags/公众号/index.html","d925fdab8fcc6ab5409a8c5faa6eae26"],["tags/关卡系统/index.html","006c1f9b48d91cd175c1db8c52007527"],["tags/函数式编程/index.html","4c61f15b1c4f06ac9545eed88ee6d59f"],["tags/别离/index.html","13fcc965f7da4bb88f69ebe1613d2f03"],["tags/前任/index.html","12ee38a91985ae6bede72e22594aebee"],["tags/前端/index.html","3b63a8087fd7c9e1e2c6ad274e2b885c"],["tags/剑指Offer/index.html","55e05d86d3190e2765f8ea44e1f33f94"],["tags/加密/index.html","9222539f85548e111c267b2206333b6f"],["tags/动态代理/index.html","ca4487d94298b577af462ee3d9a7abfc"],["tags/动态加载/index.html","37ba46c40f77e21270284dd5c10b1ed8"],["tags/动画/index.html","2f110908507e43bb2d03e2bebbbc38ef"],["tags/单位/index.html","4b8a01c87a2c0b9e5db81bb90e219013"],["tags/单机游戏/index.html","e895475bd5e92a4b93472d7b259dd16b"],["tags/印度/index.html","14c53e8dbcd6f17be1680f4b2cbcdff3"],["tags/历史/index.html","4bf36b8861b5df9a8ad51a202ee56a4f"],["tags/反编译/index.html","dfb52f11dc38c354678529664eaf746c"],["tags/同步/index.html","7a5c82206658621a7d39db17d46a3547"],["tags/后端/index.html","36d186b82a161364582ae2e614f4a438"],["tags/命令/index.html","3c2984f209689cf2cae6f2beb00b05bd"],["tags/和平/index.html","3087f1ffe49da2a75f07b3533de18d30"],["tags/响应式/index.html","032a2a94255675e5fec994649dd4fb8d"],["tags/哲学/index.html","180e5c89cf3438658dd00ffe708cf423"],["tags/回家/index.html","6ab381aac71ee60057dc117bacdf6bfd"],["tags/回忆/index.html","5a282bd3697a0df73edf1d4aa390b377"],["tags/回顾/index.html","1bf71bb0f22f282fbce26be0d2b84ac5"],["tags/回首/index.html","8fb79ab5fb1a73ebbb6772ce77cf27cf"],["tags/图床/index.html","4c9277e47726e5492a9455b6567bb214"],["tags/图形/index.html","5597734ef17d88c74ca958ce2961596e"],["tags/地图/index.html","d5d21d4ad3eefea8446e07196cc4a2ff"],["tags/塔防/index.html","65a244b8fd6d4bb070199f54add1c513"],["tags/增强现实/index.html","8d88b6ac2a191cda0fb19183aeda479d"],["tags/壁纸/index.html","97c9d10fddc2977d93e912f0c8aadac1"],["tags/夏目漱石/index.html","c0cf29e4d59bbc6e164372abdd6dd7f2"],["tags/多线程/index.html","91e3dc166a06d9a2b82b99b5e52830c8"],["tags/大护法/index.html","7a37ab09df331b8f23f1bb061aad3d79"],["tags/委托/index.html","f7f839cef613762ee50300e368a941fe"],["tags/孤独/index.html","31bd232cb327d309a8b7c598862de8e8"],["tags/审计/index.html","96d0b37f08e27d28a3fa538d39ba3aac"],["tags/展望/index.html","f487474902c340a82f2e29ae4cfbb44b"],["tags/工作/index.html","edf500a79bb08945fdb45a7cf91f0d78"],["tags/平凡/index.html","1be45bfc24533355d302824b2965840c"],["tags/年华/index.html","f118cd4d77cb734d2260b3864915a33f"],["tags/年度/index.html","834b3205e35f5335abb098c2b54481c4"],["tags/开源/index.html","dedf07c864f669d20e568c227e88561d"],["tags/异常/index.html","7bb666b013ea09e633d9d11fd7020757"],["tags/异步/index.html","4390648b6c10cd41088e15026161c6ef"],["tags/引擎/index.html","f50ea3f9d3790acef5a575d3ccb32251"],["tags/影评/index.html","79152b2eb64845eaa44e25f3a4cd1f2b"],["tags/微信/index.html","abbf40c51499aa79dc075b3763b24009"],["tags/微博/index.html","2d6e551ed650bcbb584d5ebf012c5aa5"],["tags/心情/index.html","be3ed11f0636432f63ff85c694475f1e"],["tags/思维/index.html","cedb24c2a66c08a3348d65bc10cdca9f"],["tags/总结/index.html","6952b61ac20d4b3e34fb7443a833a5ce"],["tags/想法/index.html","574724fbc30bb80325cacc0df818b981"],["tags/感悟/index.html","2eb05bfdb4493e85f677f68a0f9b482c"],["tags/成长/index.html","cee818776fce42697f02c178a55ac7d0"],["tags/我是猫/index.html","c87e8cbd9a3fe458d186e2039553fcfd"],["tags/扩展/index.html","08a8aa8f24a716fe638c947921d84070"],["tags/扩展方法/index.html","1a6fcd62a8a906168da89f0231779032"],["tags/技术/index.html","e4fdbe721c710f983343b6463e693eee"],["tags/拖拽/index.html","d72aa4263053f86b9a31a958242d1625"],["tags/插件/index.html","27a6ecddf9a4c92b73bdad3b5888165e"],["tags/插件化/index.html","edef74b4d1ea416eec7d0b1b35600009"],["tags/数字/index.html","609e6b20c2a513f2609962aeb2de5ca5"],["tags/数学/index.html","2f581cb293e433379f11f9ddb220f05b"],["tags/数据/index.html","436cb35dbf439aa176dadccc69760e15"],["tags/数据交换/index.html","e28b2ab4daaa6a9a4ebb7b90a324eaff"],["tags/数据库/index.html","2734a79d5f8f8bb46e37fa0be4c2d36c"],["tags/文本分类/index.html","587c102c5ab5250f3301f470ad052682"],["tags/无问西东/index.html","25b6a4955968b77c1697d72ab5cf8d83"],["tags/日剧/index.html","ce08e36985d0d532e99f8043aa6be4ea"],["tags/日志/index.html","ac8164b13cbcd71aff214a8cd8e13b90"],["tags/日本文学/index.html","6691f07655d1a77cc93f300a9b23142a"],["tags/时区/index.html","ac6489e871d76e45e26ea26462d82577"],["tags/时间/index.html","2c5c3799f8b505ff5da3489b6cdc6900"],["tags/服务器/index.html","94f8e4a17ea1829a6da04d03e0b3f6fa"],["tags/朝圣/index.html","53ab092b21a7674e65f27e1427696467"],["tags/朴素贝叶斯/index.html","9ca1d21d3832257b49dc89fb7ba69a61"],["tags/架构/index.html","84e5ce3823478e9c4b85fedbe80fb797"],["tags/标注/index.html","3dc959fafcdcbbf16395614b85426e8b"],["tags/校验/index.html","518f4e7b939b90672997ff780d0106c1"],["tags/格式/index.html","c08e5beb3071e55ae7d7b42a1ecebd75"],["tags/格式化/index.html","0e7826d56cff954aeffdb885f79cff75"],["tags/桌面/index.html","364b8e5a3f8e97e02511e5299c0d2e23"],["tags/梦想/index.html","b902929fd39ce1e221941acadb6bad1d"],["tags/概率/index.html","166ccde213b953d85bf39965ea0cf95e"],["tags/模板/index.html","de5f69e2a26087188d68da7808855079"],["tags/模板引擎/index.html","7acf4e852ef28cd2d08e268085ef0ec7"],["tags/毕业/index.html","de3349b3f2d05c1eb21b1fbf4b4c8759"],["tags/毕业季/index.html","9d5d1dd30724aa66b51d629410f3c878"],["tags/消息/index.html","e3a2f0bff4463905b55be82872596f09"],["tags/游戏/index.html","43fe1e7900adf88c44a8d9701887ec2e"],["tags/游戏/pages/2/index.html","38d4861b6c8061b8c5be94499d460164"],["tags/游戏开发/index.html","e3216d2561d4d959fe35c28e6b233f79"],["tags/游戏引擎/index.html","00611b2b334cedf838e890bf3362d983"],["tags/爱情/index.html","fbeb180281821627040291f1ea954053"],["tags/版本控制/index.html","b2f23424d8e320ce107dc85d006ab2fc"],["tags/版权/index.html","d2d36925b30b5fd87c6aa1a9999bc5d1"],["tags/特性/index.html","f28bb4284383751c702aaf71ace65a39"],["tags/状态/index.html","d1874a00efd2e57f3ba465f27387ea0e"],["tags/现实/index.html","e2ecf6fbaab5b522417a9c0381b4ee8d"],["tags/生活/index.html","8a5eda98c99df281f4463e1ed4206083"],["tags/电影/index.html","0d1a1919deff4ddcf87d356c263004f0"],["tags/画家/index.html","0cf8cae00712ab0c5a823387bcde4532"],["tags/知识共享/index.html","c746721ac996d5d1485ab14f3110a92e"],["tags/矫情/index.html","d32c59d33414f31fbe37798c680c0df3"],["tags/程序员/index.html","919a1d4b0e605d0128b5bf5aac642f9d"],["tags/穹之扉/index.html","8d114620316f5d42d358bcd7d5b36c5e"],["tags/穿搭/index.html","68e305c76f4294a4e9bac7fdec1ab1e4"],["tags/童话/index.html","fa36a85b4916e27194526e055dc83ede"],["tags/笔记/index.html","4d8dcc8fc758b3b1a3cf6c70508378ca"],["tags/算法/index.html","02a14696978b24f1332eb849cdde1a29"],["tags/米花之味/index.html","92700e19f46cda9eedc879d6d18bc16f"],["tags/缓存/index.html","520dcf9571d883e105c8c328b69193fa"],["tags/编程/index.html","156de5fc282985e5c25e46cbe99c853a"],["tags/编译/index.html","36e1fc346e6486c8ec8c99937ee0c622"],["tags/编辑器/index.html","ff267685069c9caf1397b9d57464086e"],["tags/网易/index.html","bdee9b1726ea369b251309457825fc5e"],["tags/脚本/index.html","6a766d2816984f733acabee41dd4d260"],["tags/脚本语言/index.html","b4b8baaff2192a2f5a82e5851cdd7bc0"],["tags/虚拟摇杆/index.html","373c5a6803ad2cbe29b8e77200c7441a"],["tags/蛋炒饭/index.html","c6c29efba06b42cc78aff75df3553b1b"],["tags/表单/index.html","0e3bfc7d6d683e35cc707a874063ab9f"],["tags/表达式树/index.html","7f48cd23830f91b17f3f9d21df90ac11"],["tags/装饰器/index.html","da04054da5c593e4119fddb3ca1fbf69"],["tags/西安/index.html","c6d85b27888f85d365fedcdd95c2f63e"],["tags/计算机图形/index.html","bfbd658096c4ec647c80e2fac03d7da2"],["tags/设计/index.html","d1412bf82e9f7b1159adaa26a3099a46"],["tags/设计模式/index.html","cb593d8e29b1033d865c12c045f3a5fe"],["tags/访问量/index.html","99dfac5da6f48fc600758a52384cac4d"],["tags/评论/index.html","afe7014cf81a2a037f3ce27a4cc4f95b"],["tags/词云/index.html","f94d486edbbdd18bc23aadd679e7a5b8"],["tags/诗人/index.html","4a8e4b787d74c30c144b3c5665f22bd4"],["tags/语法/index.html","c59527825bf78e01db9d98460bc3592a"],["tags/请记住我/index.html","e4afdaed3d6b0d80e9e189f5cc30cdac"],["tags/读书/index.html","ef8b72dcea77141b409dc2b955b661d7"],["tags/读写分离/index.html","0c518d56b0cfd0df10f7c07bee1ee0af"],["tags/调试/index.html","1e32ba82e92de69fa08cc4a9d70d7000"],["tags/贝塞尔曲线/index.html","c11ce999febca6cacb3a03f224b69ca4"],["tags/贪吃蛇/index.html","55310774be61912e8caa8f0aa5d517b0"],["tags/资源提取/index.html","b29ed80b68894dcd5470c3dcd919d139"],["tags/跨域/index.html","f14e2d6ce3d35724a32a7e1084d7cd1c"],["tags/跨平台/index.html","7f8d3ec527730410d547af1099d99f62"],["tags/转盘/index.html","677ae69e7109aa6120bfc40692623fd0"],["tags/迁移/index.html","c4d92740498f3bcb10d4c7cac73056aa"],["tags/通信/index.html","fa8d1240065cb84aca070c96fe576461"],["tags/邪不压正/index.html","baee879ec6327248bd48c56ee8ad3bca"],["tags/部署/index.html","39c5a97094512f90962e93365ae106fc"],["tags/配载/index.html","25f8b19e9e5bb1c62b6077050e21e1f7"],["tags/重试/index.html","02d0ff1ce46dc8f6b5d6a3829a654eb4"],["tags/长安/index.html","7becdd128f0fcda5ef2d5cbdf315af24"],["tags/长安十二时辰/index.html","2b6dcf734a1a88b765dc77caaee6f0e4"],["tags/阅读/index.html","3cc73259883af711f99e35b273bd0073"],["tags/阿里/index.html","de45b8436f1a4abe45d57da6239c5dfb"],["tags/随笔/index.html","dbb08ed6bcb9ab4e3d2c50ca46f9671e"],["tags/霍金/index.html","fce2366edfe4c8bd8ec4e955d534e78b"],["tags/青春/index.html","edc6b91f4de4de0dcf20553099c5f5cd"],["tags/面试/index.html","32a375976ba645f27fdfbbc3927c1faf"],["tags/韩寒/index.html","665245df7944be360b1d791699e32acf"],["tags/马尔克斯/index.html","445c29738f2bc71693dc683cfaf25456"],["tags/验证/index.html","7e673ebb2da53acb62b75d284e07d457"],["tags/黑客/index.html","9976ddd0ff53568d5695a206333631f8"],["wiki/index.html","765050ebba81d787bdaeacf16866130c"],["works/index.html","6dba59ac3d6eebe55a03c69c39e1848d"]];
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







