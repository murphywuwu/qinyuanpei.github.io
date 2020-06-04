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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","b73eec71b79e55f92e73ed9161b0e169"],["archives/2014/12/index.html","431c43870e8403de5bdc9fe242372234"],["archives/2014/index.html","5ad45df0797b8bbb179c556ed665e97a"],["archives/2015/01/index.html","57abaec343ae58099564d23983cd4789"],["archives/2015/02/index.html","76dd3e48c628f6405639a89abaa11c62"],["archives/2015/03/index.html","528a15bb0438dd5ddb077abe26e0300f"],["archives/2015/04/index.html","9b3aa4b6dfd5d2e5365b8e3e8058e591"],["archives/2015/05/index.html","9f1f45d92a37b3bfd9b6be6c22315e5a"],["archives/2015/06/index.html","1b1de216e4e4e23b2b8a0f3158eb9a03"],["archives/2015/07/index.html","290a0941a049416ef776b7c29be35d7f"],["archives/2015/08/index.html","ac5fb0399f16ff8c6fdae607520e0053"],["archives/2015/09/index.html","b4cd9244c720e2dd716045377a473916"],["archives/2015/10/index.html","9ff68c15cb6e776a9bbf913947e8b4c2"],["archives/2015/11/index.html","32ba8f93c211dd1f83f6176c676766e0"],["archives/2015/12/index.html","2764856deafe6a688f5b15d91334d18b"],["archives/2015/index.html","7e7cb16fae8e301d246c9fff25676830"],["archives/2015/pages/2/index.html","b07b6df5884b3b53033c5885c89c5ee3"],["archives/2015/pages/3/index.html","8cb6b3027dd509e3f5dbf1cc01d6ab5b"],["archives/2015/pages/4/index.html","31d4c7a897a7d5f6f455778d012e0195"],["archives/2015/pages/5/index.html","fafb3e6e519e1109c6d51d00b2576ab4"],["archives/2015/pages/6/index.html","26c150a738aac8767c43b5cc8b818b77"],["archives/2016/01/index.html","52f665aa82567629195162735d1fea35"],["archives/2016/03/index.html","375732b6f4ff5387e23de05b5500ada8"],["archives/2016/05/index.html","2df64e2e2f1fb0d42752c92e6f0501c1"],["archives/2016/06/index.html","30c1e33b1a0b351977e6dbb3218f28f3"],["archives/2016/07/index.html","de0fd4c18e126dc9a3b3667106044cc0"],["archives/2016/09/index.html","994acbff6415f7fbb5729d635c416fe8"],["archives/2016/10/index.html","44c326d9fae525ebe320abeea17f43ba"],["archives/2016/11/index.html","2d41d40ffdd578459f0610ea49669f29"],["archives/2016/index.html","0e551375989bb0b217664b58f7e7f4a7"],["archives/2016/pages/2/index.html","d4c9f241a8ca2ddb2671f0aac7ebd675"],["archives/2016/pages/3/index.html","951454fa018d0503bc431239edac0c75"],["archives/2017/02/index.html","bf2b764cc1eb0ada8b1ce0e4c76a14b6"],["archives/2017/03/index.html","1bf8ee0b1cf9678337f61a875cfd08c5"],["archives/2017/04/index.html","296898177e04e7be3d92a42467ca6e0d"],["archives/2017/05/index.html","a4d9c1e5a46214bd42921ae041438738"],["archives/2017/07/index.html","665c109971f9813c56022a3c778d4bb3"],["archives/2017/08/index.html","d7e285c580e405f29470042bed23b6b4"],["archives/2017/09/index.html","68f3921f9ce5437cb2f0523e9d8d90c3"],["archives/2017/10/index.html","fd50432632d593a195adf07570f06262"],["archives/2017/11/index.html","975eaf35a2713ce0764a06cd7a22ce02"],["archives/2017/12/index.html","c16ab2cdda1b93c803612dff69a8c219"],["archives/2017/index.html","9ca181f5790195eef58684d87854a8c7"],["archives/2017/pages/2/index.html","8632eed0dc6536266ac7b1d827138100"],["archives/2018/01/index.html","4988c82876d049eb80edd3a5cc1ffa97"],["archives/2018/02/index.html","396ae97dbf02009c4bb00e9af3b3be55"],["archives/2018/03/index.html","70dbd89bbafb81bcb110f2ede60173dd"],["archives/2018/04/index.html","e7a166403de7cc6ff99ff51aceb86852"],["archives/2018/05/index.html","691d3d33521b88c26dd3d6eec255d277"],["archives/2018/06/index.html","48c569a413f109ddd7489a83733d29cd"],["archives/2018/07/index.html","032716543fab4d0ba5076d85f4162adc"],["archives/2018/08/index.html","074b5e3528bd67f975081f8b108eee83"],["archives/2018/09/index.html","c397ad4fcd6d60038afda2b44c4a54e9"],["archives/2018/10/index.html","3adaaf9ce3ab5be648af279ae22ca7e1"],["archives/2018/index.html","9838b9c93dc8ad9211f955a65d7cd527"],["archives/2018/pages/2/index.html","93a73e389d7a76246d807718f4a33474"],["archives/2018/pages/3/index.html","5554bc14eff14f93185e1f9ba42cf368"],["archives/2018/pages/4/index.html","2852694b9a16b22df293477b9317a3fc"],["archives/2019/01/index.html","d9e5f6c0b2948d41af2b37a2510a8e44"],["archives/2019/02/index.html","4b54928f81174ac8cb69a45fea08181a"],["archives/2019/03/index.html","8ad993f8d23627112a1e91b844a7b6d6"],["archives/2019/04/index.html","9ddb41c8a720d8983f67849b15c42df5"],["archives/2019/05/index.html","1d3bc0db5422423f952bc8880479c214"],["archives/2019/06/index.html","f478932f3e4d66428b622f5e43c48c55"],["archives/2019/07/index.html","cc8ce4b9ae14bb6682826c8c89db5641"],["archives/2019/08/index.html","9e023311cd1316fb8b92128c0198849e"],["archives/2019/09/index.html","9a7a884bf990cc0713fffd9fa831dc8c"],["archives/2019/10/index.html","5c2c48159674ba0ba18324e2f6db9bf0"],["archives/2019/11/index.html","08bed654b59f656851c92f20ee5a6c13"],["archives/2019/12/index.html","cf80de9f55f7a0122866a43717e7e7ed"],["archives/2019/index.html","e9a62681392e53dffdc6d433c8120a81"],["archives/2019/pages/2/index.html","92161b9aaa7a53a8a8fb9b0783be392c"],["archives/2019/pages/3/index.html","64129ba2046aba3e6a319467a1b3aee0"],["archives/2020/01/index.html","aa7b1b8bff8d274fe1b7b8a1b7c628eb"],["archives/2020/02/index.html","392aae6710b3667978e4cb19119dd7f5"],["archives/2020/04/index.html","b2614ab1b0b143868ed89da58f2f0d99"],["archives/2020/05/index.html","80f8ed3aec8add4ef030afdfbc061052"],["archives/2020/index.html","055ecb16b92e5252f24ed7bbf58f5c6f"],["archives/index.html","7ba1f928dca0e08ad4bd4ca02e224e27"],["archives/pages/10/index.html","73a6019efcb31fb98c97a228ceca7d01"],["archives/pages/11/index.html","fc86d9f5ed78ac47f927d0810b1536fa"],["archives/pages/12/index.html","de08d968c9c082cead074394dfe3952d"],["archives/pages/13/index.html","4603f6ea0db38ac91130e7d5be6ab173"],["archives/pages/14/index.html","523b5ef95acab67ca5f73cccb5f2a57f"],["archives/pages/15/index.html","d12749432de99cba3f7cf40d6dbfa7ba"],["archives/pages/16/index.html","f91a2a3640f1732d56ce158c61f56444"],["archives/pages/17/index.html","9447a027a300194134af817a7c20ee03"],["archives/pages/2/index.html","f5e32345cc95cd3074e59e8c9432668e"],["archives/pages/3/index.html","004825ab09f4e9a7e3448c79ccea09fa"],["archives/pages/4/index.html","7f19fb1ef29c6bcb3f50f6f19a7fcac7"],["archives/pages/5/index.html","d75302a43ddb69abf24e631b0b060bc0"],["archives/pages/6/index.html","962fdfb3e2d03fd84a7c148400c77fc0"],["archives/pages/7/index.html","4eb8b7d88892e38000f2c10d367dfc15"],["archives/pages/8/index.html","47e12bc94d3117d5a2e7fc7ca1cdf530"],["archives/pages/9/index.html","4af7a8e792b186dc4501a66eff01310d"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","e341fd12c3606544d45a72dadcb3b3e6"],["categories/Unity3D/index.html","c178ccc3d07d584ab2a9769497068351"],["categories/Unity3D/pages/2/index.html","cfd5a5e8425d7c45825366158caecfe3"],["categories/index.html","ed131933535156f4fd798531848e68c9"],["categories/人工智能/index.html","8ab21d25506dd33d75fbb3649f2082bf"],["categories/前端开发/index.html","5f441b2a5e8d9717cad9e7799c2f30d0"],["categories/单机游戏/index.html","9e1b56d43b34806a4abeee02697efd77"],["categories/开发工具/index.html","f15cb1547b9fdd7acedf8562de1ad9a4"],["categories/数据分析/index.html","3ea9e3097bd8650445438b920ae0dbf3"],["categories/数据存储/index.html","46ced1a5c4f3d6df3d819877b7e8e240"],["categories/游戏开发/index.html","ec7a655c6d7001a2eb1af5454aa74f49"],["categories/游戏开发/pages/2/index.html","05b279aaadac7febbb6a9aa4c350a83d"],["categories/游戏引擎/index.html","449462078fed84e4307ebe76cec6c895"],["categories/独立博客/index.html","6f12807940b3d0ccbfc8a1585541f078"],["categories/生活感悟/index.html","6cc108a5174b41a44654a8ec90254535"],["categories/生活感悟/pages/2/index.html","a422c16248b505753cd3aee365a3a691"],["categories/生活感悟/pages/3/index.html","3ae626ed7a09c92f7adeb13ddbb188b5"],["categories/编程语言/index.html","78e8a11154aa6700336d4f5f6f1810df"],["categories/编程语言/pages/2/index.html","43b1453cf511259ee3a9357f57c3b1dd"],["categories/编程语言/pages/3/index.html","b615d16125bb16a1a3525252dc9881f9"],["categories/编程语言/pages/4/index.html","7ccf5878e1d11eb65bd6c6d5ad50f7de"],["categories/编程语言/pages/5/index.html","5bce4652cfebe978ddb24e772bac9c17"],["categories/读书笔记/index.html","2f1782ce5437a6e36eec8463ba3c33fe"],["categories/读书笔记/pages/2/index.html","e58ce3d81009ad72e75ed0e82e2ca05b"],["friends/index.html","84c8316ad986d2ae21abfded729f0501"],["index.html","b5b13d3d6f4f895a8796bfae6255b4fb"],["movies/index.html","20c6c76ef7fb51c8788229cecb4dcedb"],["musics/index.html","a0607f8d45e25ecf4ad9fe1eb40d9e18"],["pages/10/index.html","94fbb22c7b63e904929028498528b465"],["pages/11/index.html","ccb145d72a76fd2c5c0c52415fcf9cc9"],["pages/12/index.html","8a42c9464d3255390688de59a6971f7b"],["pages/13/index.html","e638efe4893194b346a6b3afde69a8a6"],["pages/14/index.html","2051cb5d57020c56cf71d240c52c13d9"],["pages/15/index.html","7caec59b11a3ac4d9c41f2ba9539af14"],["pages/16/index.html","3a3cdaaf0324d13b020ebc09a693607a"],["pages/17/index.html","5a386bd5f05c12656764648a3bc52c8f"],["pages/2/index.html","d387fc4a32cacac5fe386ff33875aabd"],["pages/3/index.html","955791b8a6c691adc762f4a5a83bac81"],["pages/4/index.html","1c90e03b3f304e5cb268210a43854f18"],["pages/5/index.html","aee23304eaa7c1754d3331be04f75523"],["pages/6/index.html","7388026fa13dcd50b7af719d2f328ef7"],["pages/7/index.html","37f6ca4bc2247abf4d71d94adb91c946"],["pages/8/index.html","cca8620219acc84ed7fe9caf1cc76214"],["pages/9/index.html","43f1b1e6bbdeb17ef965de12bbf97c99"],["posts/1059499448/index.html","dff58297ca57879237d547f298c74891"],["posts/1071063696/index.html","9158576f6c83da3dab3fd63829c73127"],["posts/1082185388/index.html","f02ecfc84b58b55711561af17c9ac789"],["posts/1099762326/index.html","4105ec0bfc6979b864e0acb405cde5f3"],["posts/1113828794/index.html","0c4cbc1fa3ac64eb3e8c663a52daff29"],["posts/1118169753/index.html","71822c3954ce5e8f91cbcb52188639de"],["posts/1122710277/index.html","04449e3fff72ace2864be355e03b00a3"],["posts/1124152964/index.html","ae3b5674e788c82506ae10399aa9a3be"],["posts/1127467740/index.html","c42c40ab24e51bc143102d16e13c3fcc"],["posts/1150071886/index.html","a67534e2eb7aa7c85126d5ea5bd3f1c9"],["posts/1150143610/index.html","b48434d9231ae45c49d31dace63d65dd"],["posts/1152813120/index.html","d84761a336bc3e1e714b09b010a9dd50"],["posts/115524443/index.html","a673ae06c852809af273ce12e88804b4"],["posts/1156673678/index.html","1f451abc3952f0c97fa22d1753b0be06"],["posts/1166840790/index.html","48b838a58634e1c2462a9adeaa902b1a"],["posts/116795088/index.html","497db741e3d194aad3820bede8a8dcae"],["posts/1176959868/index.html","9f13fd9d505a7807b13716803f5e7db3"],["posts/118272597/index.html","95eda4536d61bfa37d03fb25221d7dea"],["posts/1190622881/index.html","d4f2d61628d0634e8e13a6fe62f78a79"],["posts/123663202/index.html","e82753c4445f72b8fc007144e8c3964f"],["posts/124807650/index.html","3831262539dc4c015d8f593b4e866260"],["posts/1254783039/index.html","0665d5ecb9c11a93ef15218d1357e1dc"],["posts/1289244227/index.html","6421983e01cbe4cd9c92692603354f04"],["posts/1320325685/index.html","f13315a31afe429ea05f0a21244b7aa7"],["posts/1329254441/index.html","ccfbab84d02f8af72587f161e5073f17"],["posts/1357715684/index.html","046ff8949767f6c695c29702aaa1a849"],["posts/1358971951/index.html","6cdffeb1d19ea04c8242d940307b7ceb"],["posts/1386017461/index.html","f81335562cd8f9448bb1c54616603295"],["posts/1394521917/index.html","14898836778312e3ed613bcac64e8b61"],["posts/1397717193/index.html","fe79c15284ff9ecf6e3095e99717cbf2"],["posts/1417719502/index.html","cf50f97b3995c87b87178fc50cc276b8"],["posts/1424645834/index.html","3e9272f6e31ca71e80cbb886957186d1"],["posts/1444577573/index.html","50a4054427aee51d1328a0fd6d6c2398"],["posts/1467630055/index.html","d107241a92cd24c5c32316cd3eab4340"],["posts/1478979553/index.html","3dfc257cb20b84bba2fab67abf62364a"],["posts/1540537013/index.html","b03f29bc416be3e577a412562853a822"],["posts/166983157/index.html","983b25ae0af91be7646600482410843d"],["posts/1670305415/index.html","4e635a8151b4e36c1a2d10e49fa84da3"],["posts/1684318907/index.html","3e662eb6a1609828c513c7be76c82150"],["posts/169430744/index.html","5cfe6e15ec7a28059fb9d51bf3338cfa"],["posts/1700650235/index.html","d6379adb1c91bdb826b56ed1be4801e9"],["posts/172426938/index.html","d3636d2cbe6a087eac12d8d0ca87907a"],["posts/1836680899/index.html","b1fa6cb826c4e78e111b4187a4393853"],["posts/183718218/index.html","72310a962345f18261cc63bf1d4c2d13"],["posts/187480982/index.html","cf75d4bf707f91d8e916852d4ee71dc9"],["posts/1930050594/index.html","cda3707de502fcb2b60e1c851cf471e4"],["posts/1933583281/index.html","77e4ab18ce73312d8a1c8cd2f240d34b"],["posts/1940333895/index.html","17fd9b96a205834c39bc06a2f09c574e"],["posts/1960676615/index.html","fd91a19d498a88a2a3e4e7e392a52688"],["posts/1983298072/index.html","0913d679301038953bee221ff5622957"],["posts/1989654282/index.html","ec27bdf3f998f4a060e78491adbfe9b3"],["posts/2015300310/index.html","f6b3da1912d0ae6c61adc0c7e2b70b6d"],["posts/2038378679/index.html","c4ac114c5c39c99bf50e9f0712366674"],["posts/2041685704/index.html","35c5a42b4df8c98782f6852db7ff8838"],["posts/21112647/index.html","ae36084d8c11b1505b9fe026e0c2d1fd"],["posts/2158696176/index.html","b19f48438f1811bb6f56950388df5094"],["posts/2171683728/index.html","0d0f78edba87d1f6d87e6ce7b352cff7"],["posts/2186770732/index.html","a45ef6abaf7b1ee8d88e903ad0e188ca"],["posts/2275646954/index.html","41dfbef5e7cb041492090a80ecb052a1"],["posts/2314414875/index.html","1ee6a437b4bb80761723aa96903ae305"],["posts/2318173297/index.html","ee1a94445d4fc680bb2a45b02a1530fd"],["posts/2418566449/index.html","aa0747b313ffd326244b7022198b1bbd"],["posts/2436573863/index.html","9615b7c6ee1ee5a7bb474abe3b456790"],["posts/2462008667/index.html","509d16a1def702955b42a912e1086e12"],["posts/2463121881/index.html","b084d4732e715eabc48c48c4fc5765f6"],["posts/2488769283/index.html","d88775d871b7af6c4f03f3a64de47f3b"],["posts/2527231326/index.html","c3fa516fff22232cc8af50e7041d8fcf"],["posts/2583252123/index.html","d693b93009df01d7f50664d4bf742d64"],["posts/2613006280/index.html","6d53f190afa28a39e1b56ad91f7bdecd"],["posts/2617501472/index.html","8aea86b241f36f0caf22e56cd2ef3848"],["posts/2676125676/index.html","407e87b7fd02f6bf3aea1fb6ccc91829"],["posts/2734896333/index.html","eee630f2871ef8ab5bdb7f45e3014282"],["posts/2752169106/index.html","893dcaf9b52a7b763403b22def69b9a1"],["posts/2799263488/index.html","8bb25634cbb9404dc0669d861a33c1da"],["posts/2805694118/index.html","5771fdb275aec2552fc125e1b57cbad3"],["posts/2809571715/index.html","c42f4bb99a154883d9063114c7a6c170"],["posts/2822230423/index.html","2dc179dc7d32306c21f0b0bcace03ace"],["posts/2829333122/index.html","e438777fdc6c1dba38a55474a95e3c02"],["posts/2911923212/index.html","7c7cdf0fb0fdc252439d7314851c7a74"],["posts/2941880815/index.html","6dbac1a16b7ac07dc2d522152c57ac1d"],["posts/2950334112/index.html","42daaca9b13b51ed5009fb763997804c"],["posts/2954591764/index.html","9292909b0e1c5a6333fda0b3f38692bd"],["posts/3019914405/index.html","3cba318c48eaebff810148f20e2582ea"],["posts/3032366281/index.html","2d523920008b26b359c972c25442d0ea"],["posts/3040357134/index.html","b7788ca94e15a5c3b131d6512e27e57f"],["posts/305484621/index.html","0e64e9324f58795be21addadbf2ae860"],["posts/3083474169/index.html","ef2fa1800c05aa23aed874589cea3c0c"],["posts/3099575458/index.html","5b6f022987bc1a2b65975f22b0887382"],["posts/3111375079/index.html","4921243b00d9a10315df87232259f665"],["posts/3120185261/index.html","346910dd239446d3789354c720035cd0"],["posts/3131944018/index.html","51d763ffbe098cf4316ca03c761f1f16"],["posts/316230277/index.html","b8b1e7cb138ba3c3322ddf882ef5d0dc"],["posts/3175881014/index.html","98e9eac36bb609fa6c9d4b1a90f68243"],["posts/3222622531/index.html","dd82aebf1c113b788b3201100eedefc3"],["posts/3247186509/index.html","5b87bb19dbcd61bb5753a95c3027c95b"],["posts/3269605707/index.html","7438ab55b18d26c96a787c22d22abdab"],["posts/3291578070/index.html","f3872e8355c75384a9b6186087d45ff1"],["posts/331752533/index.html","5899a2329ac4aa7e1d71676f17bb76ee"],["posts/3321992673/index.html","fe6a7943fd4ed8a294b0366e0f274c22"],["posts/335366821/index.html","7426cd8e735d39f0ed8e4ad9603a6b52"],["posts/3356910090/index.html","747481df5637b8a242bf483faac4d08c"],["posts/337943766/index.html","32fa8e8a7632403f039ba5b8f09f9e3b"],["posts/3417652955/index.html","f9567d778df546740468b4321fb102d6"],["posts/3444626340/index.html","afd77bbd7248efaa7967721b134f8137"],["posts/3449402269/index.html","dab689a4a9ffb1726540ec6b3c4420da"],["posts/345410188/index.html","fc4fbc00944ed6e6e0dd5cfd6b2d2340"],["posts/3461518355/index.html","37ab12818bdf329d39cd3c713268a4c5"],["posts/3494408209/index.html","b37f32f5630a5d0237f7ed4986971971"],["posts/352037321/index.html","0442a0f4c9635595c8d864d1e90bbbb8"],["posts/3521618732/index.html","5a99232388792868d8ce44ca035cefd8"],["posts/3568552646/index.html","aa293b29ea3bac6eba2d9bff93f4618c"],["posts/3603924376/index.html","0104b9ec089cf9bbf7f8f295a5f85e26"],["posts/3637847962/index.html","c00ca4f4f2b4e7ea40cb4258473f36e4"],["posts/3642630198/index.html","80b419a820e39e4a21a9e08658c0c03b"],["posts/3653662258/index.html","36ff954ec7331857f77dd7676ebb3850"],["posts/3653716295/index.html","d6bc8e2779b1b8d2bdb08e4064b5d727"],["posts/3657008967/index.html","4664daaaf004bd767abbbafbb0c10ec6"],["posts/3668933172/index.html","1ee1886a1dd270581640d568463f121b"],["posts/3677280829/index.html","6e9453f93ba037a83df2ade6c1f64d3a"],["posts/3687594958/index.html","d5cf9a6e1ed87c1f81976099eaf55d79"],["posts/369095810/index.html","2c41df8316f6a9ba70f61eab618cefe4"],["posts/3695777215/index.html","c584bc0b03fa00e9b0d3c6d9b6e4b8a3"],["posts/3736599391/index.html","05872397b5f5d539aede512c8857107d"],["posts/3742212493/index.html","ab62f3970622bb8949dc63baf5c3e16f"],["posts/3782208845/index.html","db73c20e74fa8d002ee1d015d9d102ab"],["posts/3789971938/index.html","e43213cbdec0c7526bae56a71995d93e"],["posts/380519286/index.html","9382557ee6754af2f227eb34191e7426"],["posts/3846545990/index.html","f2c8575525fdaf5fe958238fa95b6ae3"],["posts/3873710624/index.html","9372ab5d9ebf22eb0bf50f2b48b291c1"],["posts/3959327595/index.html","3ca2233fc2abb0457908a3354936675b"],["posts/3972610476/index.html","821a2fe1a0b543156d2aa3793f94f5a2"],["posts/3995512051/index.html","3d6d094e8e635dcb23043e52894e5b1c"],["posts/4088452183/index.html","17e1b58333f0488cc23edc44cc43295f"],["posts/4116164325/index.html","dcc7c30bf3eca8659274fe6f763b7c1b"],["posts/4158690468/index.html","2c2641841115670119ebd8cedad21f4a"],["posts/4159187524/index.html","c862d48a15f51cab691a1706536daca0"],["posts/4197961431/index.html","de6b9ab01d5426cb6dd62320cec6332b"],["posts/4205536912/index.html","140e4d21f9936c8520d950af0e3118e1"],["posts/4236649/index.html","b5c2797c392cbdbe563e234abf900e07"],["posts/426338252/index.html","5cfafe924e8bd6356ede0bfdf1fd1195"],["posts/450254281/index.html","8dc8e17ed8d066766eec3dad9bc0cbd3"],["posts/4891372/index.html","854c108f3218c011c81374d5113b80af"],["posts/569337285/index.html","701cd6445631254d074dce0b787389dd"],["posts/570137885/index.html","ec80c6306304ff470429245902cf44d6"],["posts/570888918/index.html","04b7ce58e708a4556b126bbc1e2e7ca5"],["posts/582264328/index.html","6cf8bd38975565d5b8710be171f7108e"],["posts/632291273/index.html","346f7be89adf85719876935f65fc7846"],["posts/70687890/index.html","63da6f2e2bf519484d0dc21b8594deb1"],["posts/719322223/index.html","3d96b02d51a9fd741dab3ab127c678be"],["posts/720539850/index.html","e08f08d07e7c321ce0c41d39f461579b"],["posts/786195243/index.html","d254dd234f1c7dc6c5a29235fc01435d"],["posts/795474045/index.html","1fd919bf66ec1eb8d496a620ffb304fb"],["posts/815861661/index.html","e7c9bc7c1a3f52f2ba031317562cb422"],["posts/821259985/index.html","aacea23df69e87460e5ef3ec47e7de25"],["posts/828223375/index.html","b103ba568ea2f580c8291d0dd900561f"],["posts/887585917/index.html","6f6a9999fa8061f7184cbe52e18b406b"],["posts/888549816/index.html","acc6cdcecf8a47ccf5fab145bd427d2f"],["posts/906436376/index.html","b217693eae7a2d27df625626bf64902a"],["posts/907824546/index.html","5aa467035a2bb05e6c71572e8e91eac9"],["posts/927393529/index.html","c423d6b6e5de26ebd69576ea45726efd"],["posts/94443781/index.html","6a3d4c228d6801711a4fbe3138480d99"],["tags/2014/index.html","532fbf8bb463b095f0bae6b0bcd83626"],["tags/2019/index.html","f30c342f107cac246d9c3a3e5c13c3f5"],["tags/AI/index.html","312d6650cfe04af9a88f12340bc55709"],["tags/AOP/index.html","f6d66ff421529742b7c1fe2c627c5ac2"],["tags/AR/index.html","6184ce12799d091c4e9e4f1b701a41aa"],["tags/AssetBundle/index.html","51d8fa8f81d72436e0f5c6aab67042e9"],["tags/C/index.html","1b1e9a37c892b5d96c7f2db1b6006cf0"],["tags/CDN/index.html","7c9cd69a2d8179bcf01dfd88d5f412b3"],["tags/CG/index.html","990fe8bb7a3f1e9fcb88bfbcdbdf7102"],["tags/CI/index.html","264061bf7d59ea8a832bee8933a617a6"],["tags/CORS/index.html","45f8b7330ee28df4826357c269f66c46"],["tags/CSharp/index.html","c7e55808141e1566dec17fab602dc89d"],["tags/Castle/index.html","350db7d04549b66b7ce5654dedf5e270"],["tags/DBeaver/index.html","2b1ba474e53e8fb9c8a047901669030d"],["tags/Dapper/index.html","9f2fc15f86b33d95f29dc11d3cc0cdba"],["tags/Docker/index.html","86d10b249c95c8b734f3b66028f67a4d"],["tags/Dynamic-Proxy/index.html","2c806696c5d92e9906be333c4ce76125"],["tags/Dynamic-WebApi/index.html","d8aed980eaecf479d27698423979255f"],["tags/EF/index.html","c966698572783ed33026159e4bbc008a"],["tags/ELK/index.html","9b100b9f9ea8a232984e5609dbdc2a8e"],["tags/ES6/index.html","5c2b6eb417d2c0236bde67bb7e2b70b2"],["tags/EasyAR/index.html","5e2c6266327fa79c5c19d63e6fff7cf2"],["tags/Excel/index.html","f9ef0beec986e79e0d453aef5c981c68"],["tags/FP/index.html","a08d646ae18bc7a5ebca8b1e3812876f"],["tags/Form/index.html","cd5a4e9320ad5cdc269bfbb51f6683a4"],["tags/Git/index.html","12accd014c72f89b129a55ae4814cb6f"],["tags/Github/index.html","1ff5d047f1522055fc5a6df5a6422ff3"],["tags/HTML5/index.html","8ed6b295fefe0d1c30d5a27a12100c88"],["tags/HTTP/index.html","8114a748aa32929ad8fa7cd4d8e095a5"],["tags/Hangfire/index.html","f4061e50b94058bfa20194c76e790540"],["tags/Hexo/index.html","0091063b8576f3963e3b8586ad22cced"],["tags/HttpClient/index.html","f545c1753ae38a0a8388b18d40cdb0c3"],["tags/Hyperlog/index.html","75501d408c6836ed6a829bd7504be692"],["tags/IDE/index.html","7d80cc6dfecbfc2f2fec406c672ba7e2"],["tags/JS/index.html","09ca8faf27dc9c1afcee76654f7d5f0d"],["tags/JSON/index.html","3ba63b14baef676f0b8ecb6a040f18b0"],["tags/JSONP/index.html","4f5cb1613fe495a3eec4a0d94c34586d"],["tags/Java/index.html","7701efd6f1671d8ff257bf4370c028ba"],["tags/JavaScript/index.html","0ac7b7f4c3aca0fb72b5458407307c0a"],["tags/Jexus/index.html","272ba37c983ebdf136fbf5d4eb6f44a4"],["tags/Kindle/index.html","5f8b7a563cd7ddb9e3b022de8a539133"],["tags/Lambda/index.html","e37a143dd240cb81d2465b2838e5e292"],["tags/Linq/index.html","e0c0abb34d7c558c1ac6ccd8813be10f"],["tags/Linux/index.html","c4d3c05f62620bb10b86641d17d20e47"],["tags/Liquid/index.html","ef54296edf8e7e29983f3638c7e36eaf"],["tags/Logger/index.html","766b457ef6112382e3f88894586ea24f"],["tags/Love2D/index.html","f5a60964f9b06b67b214867a0299f967"],["tags/Lua/index.html","4beaf69aa5ef6d81be5265ed33bf82ad"],["tags/MMD/index.html","b14487c0d401c1fda9349efcade00eb8"],["tags/MSBuild/index.html","5dd5e8428e7a2370a1247d15a4f9fa63"],["tags/MVC/index.html","868a46595048af5a8e18d52c5e6a57b5"],["tags/MVVM/index.html","b139d4fd48c5221b3025460c2a7eb849"],["tags/MapReduce/index.html","8ff9f7a914dbce74d5d0015675a9d567"],["tags/Markdown/index.html","bbb76fd4d2d9ecbd66811f7f920f55a1"],["tags/Mecanim/index.html","3023b287655871e347f4130014657d46"],["tags/Mono/index.html","59a2edd92af2c63e8fe878c8e0075231"],["tags/NET-Core/index.html","e392a7b87b83b0429f831df571b72b2e"],["tags/NET/index.html","18f3f4a89526ebf246f0ddc60e429f0b"],["tags/Nginx/index.html","53d645405fc0e878b1ae4b3a6df559da"],["tags/OBJ/index.html","e5749530d97abf595f691ad692f4c51a"],["tags/Oracle/index.html","453653c0b2394f0435667c8c82946457"],["tags/PL-SQL/index.html","ccae50475ad9f7406b3c586aca041f5a"],["tags/POCOController/index.html","8846ef593285efe435f1084f174c7409"],["tags/PWA/index.html","262e23177f6b5b2346e3f1bc0d6cd1bd"],["tags/Python/index.html","3f207e1b7c53595d02a602ea0ff2443d"],["tags/RESTful/index.html","dd373dd959480d9fc420f4bafd1848be"],["tags/RFC/index.html","be73218e6f31d40c37d68b94a4aabbc7"],["tags/RPG/index.html","053e4994e24c53f5ecc8196e02efc9ec"],["tags/RSETful/index.html","ebf9f38c76e1d900a57dc232877d26ac"],["tags/React/index.html","ee80c409482a85c08396a3867de118c5"],["tags/Redis/index.html","e49abba5b6ef7982a13dc062ce492c87"],["tags/Referrer/index.html","efdf3e6e7f2caf800d2e0d8fe2b678d4"],["tags/Retrofit/index.html","0849d0d57666c2732e6e51e276fa6dc4"],["tags/SDL/index.html","6ab0250d5003d19642549a3ba78ba974"],["tags/SQLite/index.html","733f1a575d923742372f4ea3a670ae15"],["tags/SSE/index.html","4194a78d8a7ac41d99ba6d57b1358f84"],["tags/SVN/index.html","8b5b1c3ac25b4c7ac9166eb22bd67ecc"],["tags/Script/index.html","a94c45f6b64348361b0bd0473dc57e86"],["tags/Server酱/index.html","9ff96dcbd36e3bf21ab695a9f89d2f2c"],["tags/Shader/index.html","3243b78974c30603f4a9ad0d349ca4d9"],["tags/SignalR/index.html","bf661a4c9f2afc4cddca5e2b89b872aa"],["tags/Socket/index.html","5592c069bb29cdc157dcd7ae3729ca5e"],["tags/Sonar/index.html","e4549ce2fbee9beed29149045ff09117"],["tags/SourceTree/index.html","903cbf852a0e25d1a9a13ef8459827b2"],["tags/Sublime/index.html","1e18ed57ff26b73103ca34d77351af7e"],["tags/Swagger/index.html","dd8afca71da5c296d0718c2fd802bb12"],["tags/Trace/index.html","e6f3fe099d8e33a19bdf068954a67ed0"],["tags/Travis/index.html","3856a6c7569e89fdc99f70425e8b6571"],["tags/Unity/index.html","3d96aa3617bc7a9d8edb63fa57fa49ae"],["tags/Unity3D/index.html","d8df1f4f394220eb76624706325131de"],["tags/Unity3D/pages/2/index.html","aca0216db87cf94f5138cc757e31d247"],["tags/Unity3D/pages/3/index.html","a59e35f44febceb0294cf3c322e7d996"],["tags/VSCode/index.html","53c83843b4609578353b57fc0e7da3f4"],["tags/Valine/index.html","eeb575d931fc6f43bb204dde9f5f82aa"],["tags/Visual-Studio/index.html","a2571a6dfba01b7ee1b1f2cc1839453d"],["tags/Vue/index.html","ec72a22d370c0197c31f006213eea34c"],["tags/WSL/index.html","2c913208fdb86ded5a93d72cb96b1ae7"],["tags/Web-API/index.html","e5f872c93874e27d87765016a883f6d3"],["tags/Web/index.html","c2de3ea7c4d6bb4ee17562542de0f8cd"],["tags/WebApi/index.html","3a3c6bbb941b46572db194fa2cfd1a00"],["tags/WebSocket/index.html","f40d0f2f008b51b5123f4e2f16ec3c9b"],["tags/Wechat/index.html","68c0b38cf1eab46e02392938610c6016"],["tags/Windows/index.html","ce5eb50ffc6751ae83a07c0558ef4fa0"],["tags/disunity/index.html","5d4b5adadc124574984baa481c4b6c11"],["tags/index.html","9355b5f3155b1e781f79e5f4746e2057"],["tags/jsDelivr/index.html","61b5c12ffa32101f3b0070b2399ada65"],["tags/matplotlib/index.html","f116a5a6107154172596b969cf4f7f22"],["tags/uGUI/index.html","09ce7fc4ed456de0942ba6be76627fd9"],["tags/zTree/index.html","2f51af7a928a83e68e111c62c4fc0b28"],["tags/一出好戏/index.html","a2b1edeefecd810431ea6f73b7e02018"],["tags/七牛/index.html","912cdd4b9ed7207e9b2791e5a6a2f659"],["tags/主从复制/index.html","890c481ff582ae99332b7edccef03b1a"],["tags/事件/index.html","0b16ac28908ae2246b0a5f6e75521f71"],["tags/二维码/index.html","01d2c0d30d4e4f5cb8036500e6877580"],["tags/云音乐/index.html","02b01d770d2e1393aea6eeaec2f1a948"],["tags/互联网/index.html","3fb95d82f4354d5c12ae8928a27d6152"],["tags/亲情/index.html","9b671352ae2af0c63031fa31ff76e92d"],["tags/人文/index.html","90045566306516c586bb5e066b4d9d4a"],["tags/人生/index.html","2a4c99a169e16000df0405d33cdc2543"],["tags/仙剑奇侠传/index.html","d006e5d8bc5c596b29e890cd3c1adb58"],["tags/价值/index.html","d1d891ac08e26b780c06bdb5cde0c971"],["tags/优化/index.html","df9dd65414abd23ed12a84c6e73ee135"],["tags/全智贤/index.html","d6fa0bcbb4c01576905da97010944f67"],["tags/公众号/index.html","39d18ad8134b5dc9462980382a9efd38"],["tags/关卡系统/index.html","c09c9e744984ccabfad8b78d71b8d80b"],["tags/函数式编程/index.html","29e4db44ee565865ed22f2890ac5e74c"],["tags/别离/index.html","6c11dca775b969db1dbfb473ff2f9f21"],["tags/前任/index.html","ad3e50089e211fc0807e6340c562efa5"],["tags/前端/index.html","be74f9dabcb3af5a021bd9d0a4b50a1f"],["tags/剑指Offer/index.html","9fd66623df4dd236289b3fd8d638745d"],["tags/加密/index.html","28ad82b1863cfc3a1a3c363b1878275b"],["tags/动态代理/index.html","552317a24863d390b3bd280c86f8fbe3"],["tags/动态加载/index.html","6dd99a3b1469c66f6a9fc151cf432250"],["tags/动画/index.html","043624feabc07c3c8baa926a39486155"],["tags/单位/index.html","8763073c68232bad78451b0abc5f8985"],["tags/单机游戏/index.html","1ebe06bf116fb33ba0d4b0914b896d3e"],["tags/印度/index.html","0f7e8a915c60aa3ffe4ab9434c3cd76f"],["tags/历史/index.html","2e986ac7143e7c4d9cf448e6afd59936"],["tags/反编译/index.html","8fb4f887ec4887acc3e66ca9cae16e63"],["tags/同步/index.html","258ed800fcfee9faf3bb1f42e2e3def2"],["tags/后端/index.html","0f53dff93b19ec8cde65c3bc16b26b93"],["tags/命令/index.html","49613745cbc71f6928483c26ae74b801"],["tags/和平/index.html","17576a98f017d7826d02a046fd7760c7"],["tags/响应式/index.html","49c62d4acca3a7536acfe1634ee61e80"],["tags/哲学/index.html","069d901ec9899b5f7b3f0d1a449bdedd"],["tags/回家/index.html","06317e7f99cef53e2ff28e389736ea47"],["tags/回忆/index.html","cccccefe3e8b3569d9ee58b7c135aa00"],["tags/回顾/index.html","aa019aaa01ed33c6447ffb7d5d0cda39"],["tags/回首/index.html","52b1d40cc600cf4c8be4cf99bdc8a0a1"],["tags/图床/index.html","af25f00d217cac6bbc5bc3782c6a1cb4"],["tags/图形/index.html","9aa6ef6b4e850722904b8da83f0be892"],["tags/地图/index.html","a882264ddb335bc8fe3f891e2a3025ab"],["tags/塔防/index.html","c84637d7cb8d5ce66dee1d8c2f228001"],["tags/增强现实/index.html","3881fc2c46fa1ce7178dbefc5271e88f"],["tags/壁纸/index.html","959025243852c82a727c66847742b4e0"],["tags/夏目漱石/index.html","f0a4c43c0c360414cb7baef076d46f3d"],["tags/多线程/index.html","f3b48612dbcdf8478943f19b16c252ff"],["tags/大护法/index.html","a1e228c4380c26014b13f836ed780689"],["tags/委托/index.html","3d3bcc3676c02750036b2ef2db93ebf7"],["tags/孤独/index.html","2bdd9005defca86a2af4c4893d509605"],["tags/审计/index.html","0e366ae6fed6e0dca0008271fc3bdf50"],["tags/展望/index.html","7a3bf8eedb24467db42cc88dae4cc987"],["tags/工作/index.html","3500b873d4a8ade0fbd37be5a63cd201"],["tags/平凡/index.html","d8daae616de0bfde8db5e0e3c067dbf2"],["tags/年华/index.html","6843e417fe424d310e87a2fa9bc7294b"],["tags/年度/index.html","953081504ac5f9837fac2fe23ccfdcf0"],["tags/开源/index.html","a63dbded5fc982ef9ce0070509f6db3a"],["tags/异常/index.html","69bed07f37e24e08bec399559458639a"],["tags/异步/index.html","a62a3583a89cab27ad06f390bec319f7"],["tags/引擎/index.html","5641cef3b5e97a21c5092c6646b7466c"],["tags/影评/index.html","71e8982fe447cff68fa40687762fc66c"],["tags/微信/index.html","b77f37474bfd75551918c09ed652cb04"],["tags/微博/index.html","d7d3271a4e7f51e716ecec51961a12c3"],["tags/心情/index.html","523702ae0327469070648a5ba0ca3245"],["tags/思维/index.html","5855dd341321fc72d8cc974e3d532368"],["tags/总结/index.html","b973aba7a837c42a5057902b81727b42"],["tags/想法/index.html","a30fc9f04bd482a921da1066132b6f6e"],["tags/感悟/index.html","2357fe38a3e0f3d3dcacfebfa8478da0"],["tags/成长/index.html","d4e496033945ea3d5014c5fe87ad936e"],["tags/我是猫/index.html","3e0eda6cb4c0c43b57a3a17e136e4971"],["tags/扩展/index.html","98b55699afcaf4ea00937c321b69b214"],["tags/扩展方法/index.html","5062b95489966d8188eba4691aef5734"],["tags/技术/index.html","4c57b63ea3a64f99574f7e9016f6c5ba"],["tags/拖拽/index.html","33da7f7dddd531bf5c5dbd1f1e896d24"],["tags/插件/index.html","af6ee38f5ea7e1594b0927a1036e925d"],["tags/插件化/index.html","f9c997162aab788dfba0ca0ce09d9edc"],["tags/数字/index.html","667560b26b60c79571971af255b8674f"],["tags/数学/index.html","752fc7b331658bda160c67cceaa29ae1"],["tags/数据/index.html","f1c76f052d4a951fd7232fdb27716f03"],["tags/数据交换/index.html","23f8007c45f9c9e9d89119f7d53f2bfb"],["tags/数据库/index.html","ceb56151fc949efa1fc7beaaa73702aa"],["tags/文本分类/index.html","1f4eaca187f9af537edf6ff2ff2f9084"],["tags/无问西东/index.html","704a993b20c37a6d9c16698bc921dc77"],["tags/日剧/index.html","5fb8b3043eed1b022d133258da7efbc6"],["tags/日志/index.html","be444c40adeca0fcd7fb187739ed6b27"],["tags/日本文学/index.html","b5c18fa04d72e0dc6bddec6d5aaa3839"],["tags/时区/index.html","52092113a36c9bb355d10f69c7a9b426"],["tags/时间/index.html","f96929cd8aeee4df00e68282a08ed46f"],["tags/服务器/index.html","9d75bf2019a005203f2e5209e3486e86"],["tags/朝圣/index.html","be5efd2b47cdc5067e7f36ef54e13cb6"],["tags/朴素贝叶斯/index.html","3fcc14c8599fdeafc906e36fc4f0eacb"],["tags/架构/index.html","825cd6f8b56537a38e2a09d3797ff000"],["tags/标注/index.html","f6528dfc1e0a5e22c948fd6b7fcd8d8d"],["tags/校验/index.html","39b54b212ab30158098fdf8a99414b75"],["tags/格式/index.html","8bb0db2b378a8032b2431863fb938988"],["tags/格式化/index.html","4b543d3a57e4bc5119b308cf2d1a1a90"],["tags/桌面/index.html","59863ada71487815cf5c61d905f0e1ba"],["tags/梦想/index.html","63f9946e98032ae5c11d8e1da12a9b90"],["tags/概率/index.html","258f69c02250b869afdc23ce63305c65"],["tags/模板/index.html","177916a0e2061b8ab7bc853445f3c1fe"],["tags/模板引擎/index.html","384cc2f2409ceae9e0366cc039421d34"],["tags/毕业/index.html","87859eacb2eca5e8746ebf2b0d60dfb0"],["tags/毕业季/index.html","294c035870d1bc9b6423eab7564ac06b"],["tags/消息/index.html","65296cb88c9c6800eb07304f7a4180e1"],["tags/游戏/index.html","fa23ac94147be0b4138a56010312358a"],["tags/游戏/pages/2/index.html","e91b1e9c0af547157f442e3b8bca02ff"],["tags/游戏开发/index.html","df296db835230978da82208d57c74dbb"],["tags/游戏引擎/index.html","bfdf1f5b066e1833ace337822ebc2c37"],["tags/爱情/index.html","22a2c635658f9deb10a3a389e738e4ac"],["tags/版本控制/index.html","197f824b0cbff9eb7284f138a212fd53"],["tags/版权/index.html","ebfa36b09edc8ca055a067be56d064d7"],["tags/特性/index.html","9399652f291d6928f58328246b46dbac"],["tags/状态/index.html","23edf7bfbf9978cbd7ed4431d92f28db"],["tags/现实/index.html","cd8087bd8fb4eaae967a6f58c3e97ec4"],["tags/生活/index.html","324ee6f63e0346427fe744c54b8b04f3"],["tags/电影/index.html","65e4d7bdcb7267062be13d2b9e63afd5"],["tags/画家/index.html","58376c7c7219e070f3550daa5173f1dc"],["tags/知识共享/index.html","6a65051025d0dacd3427b519786d65d0"],["tags/矫情/index.html","ef995f6643477469e228945318d95e33"],["tags/程序员/index.html","dad0d2fe62cf304c520a6127f9536cb9"],["tags/穹之扉/index.html","02a1319f99b0335a1b005892d922f250"],["tags/穿搭/index.html","0eaa5c4ddf55a03f820ac36ad76fcd2b"],["tags/童话/index.html","41708496277f92e2248b96e8e8c5ed4d"],["tags/笔记/index.html","2252bab38038fd93d38a2feea1d80e93"],["tags/算法/index.html","189191fbd6eb62dc34ebdc7453322042"],["tags/米花之味/index.html","c9ddb4683e04800c0785348ea45448b0"],["tags/缓存/index.html","b1dc88444f808cd589303e41830f778e"],["tags/编程/index.html","0e1f95c1fc8711a3d3de6f94ad4bc7a0"],["tags/编译/index.html","2d40158441005afa9b61baddc23bb1f8"],["tags/编辑器/index.html","adb79206b252e7b7cf77b03e96786291"],["tags/网易/index.html","bd4f2109d36cc82be9a47f41fc2ffe54"],["tags/脚本/index.html","58b39812b781eb984f75c93cc189d0e8"],["tags/脚本语言/index.html","806fcfee5301ca4fb08d9be7df1d683a"],["tags/虚拟摇杆/index.html","b8edee3ab0540c154635a08f440e1a59"],["tags/蛋炒饭/index.html","6978a4e3c7272be80e3eff05f8f309cc"],["tags/表单/index.html","9518d71d471f3b01cdb306fa34199773"],["tags/表达式树/index.html","53a7e9e5919e205d5cc0da1d5ad77ed4"],["tags/装饰器/index.html","7410b13894ab1c33fbf62ce5a41788f4"],["tags/西安/index.html","ad6780a67710d836cda7dc8fdf59cf17"],["tags/计算机图形/index.html","a95674ad5b746d968b545a11bd70a1ee"],["tags/设计/index.html","1735dcb4f26f8016fc8a0f607d28fe8d"],["tags/设计模式/index.html","74022ce8c1544697145f4df0b84d3290"],["tags/访问量/index.html","99d08d185c8938a7728bbe9904a9b3c8"],["tags/评论/index.html","cb39177d1f57529fbbee340b5d6895e9"],["tags/词云/index.html","d207ebabd62ca85cfb10f766a675f5a1"],["tags/诗人/index.html","5d2d823444c26bc31a161846acedcf91"],["tags/语法/index.html","622e276997dc391f57855eddaf181b96"],["tags/请记住我/index.html","9bf9b9c03625a5685d72e4c598c8092b"],["tags/读书/index.html","173de3395f809c6d61a72ce8529e3db6"],["tags/读写分离/index.html","a857480e04f3ee57f294c22eb99cd632"],["tags/调试/index.html","41f0e4bd310b90ef414071c6c7a0bfcc"],["tags/贝塞尔曲线/index.html","1eaad2df1ee1a5ea21dc1f07e31fa130"],["tags/贪吃蛇/index.html","15fdbd2c553b2a1508d4e6eaf34c1520"],["tags/资源提取/index.html","9a728e67e2c098c37f100bd8e3fac447"],["tags/跨域/index.html","dca36bf00ef85b6bab7bb5fe881488cc"],["tags/跨平台/index.html","7443f511d82f1550c213f0e3b94989cc"],["tags/转盘/index.html","589e81e5df9395186f5de8b12c7e5a22"],["tags/迁移/index.html","282fe79789f3dbb29b6cd4d3ab4a6439"],["tags/通信/index.html","435a4c17c080a64b4f3c56276f17b664"],["tags/邪不压正/index.html","c88da5d7e4fc4b03318d314313ff92e7"],["tags/部署/index.html","40f99fcd9490f1fdd3afbecfe7183e0d"],["tags/配载/index.html","ad0b572792724eaefe948ddad6670120"],["tags/重试/index.html","cec3ec28e410d65bb567b9549fa5a926"],["tags/长安/index.html","22dcde708eabfb22bef7d4018bbcb35a"],["tags/长安十二时辰/index.html","bcff2d36c1a686788f68d2ffbbc1d512"],["tags/阅读/index.html","86dc9de0c8c929cdbe417779a7fbd2ec"],["tags/阿里/index.html","8fed55cdbe831d61066c21dc603d85e5"],["tags/随笔/index.html","632a093a3bed0086a2e5e6cf27e7895e"],["tags/霍金/index.html","943ecd426a09f41928bc7fb9066502e8"],["tags/青春/index.html","616e61dae30f17965b2d5abda51ef49e"],["tags/面试/index.html","6b16c02ba79ebb2c2c0ba73ec65b98a7"],["tags/韩寒/index.html","f0a5b3fcac7b5d660926b5bade7c36b3"],["tags/马尔克斯/index.html","acb2f9aa2d51add874a247faeb311335"],["tags/验证/index.html","72fc441d45661779d15a8a7e1914b5f2"],["tags/黑客/index.html","82aa760c0c7cad6fd870e0b620c6bd74"],["wiki/index.html","2d0977298e65ac35fba78626689966bb"],["works/index.html","eee9ea08fe2770d204cd1ebfe2f06364"]];
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







