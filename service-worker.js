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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","a5b85991789b166b46cf56f89de32945"],["archives/2014/12/index.html","b1bf3f6727aadb85de8c94f5a89fb17e"],["archives/2014/index.html","1c7db711f0aa193aa5fc8d68ea486beb"],["archives/2015/01/index.html","3dbf13e713ee237b80225279d8602e49"],["archives/2015/02/index.html","21da01cbc90399cd0c118dbf71168adc"],["archives/2015/03/index.html","9edfe67e7c89f05bee03a07dd2fb4e60"],["archives/2015/04/index.html","cf07201d75f64517ab0b425f9555a438"],["archives/2015/05/index.html","9e3ef8e882219a5f3e7a9e69f106cb76"],["archives/2015/06/index.html","cffd5d8c4045cc5dd37f88e7d8ab97da"],["archives/2015/07/index.html","a18806012ff86035f42227febaf66620"],["archives/2015/08/index.html","2dbd9db77d2b426f697bd9d1ef8fde3e"],["archives/2015/09/index.html","01866f64ce28b6fae1651805a1363142"],["archives/2015/10/index.html","de44c33be8b13fc93c8759bd4199f6c5"],["archives/2015/11/index.html","daccd770146f2131e35023ed81f74055"],["archives/2015/12/index.html","cef8ef86cdd5035f057600a3ec071649"],["archives/2015/index.html","969bf2444ea87459862dcd85385f7599"],["archives/2015/pages/2/index.html","e70aa9937ef76b132abde69fbfbe457d"],["archives/2015/pages/3/index.html","09fabd8127e7be4a5fe58830714e9c08"],["archives/2015/pages/4/index.html","42b44b27ae2883e8a34a43bd6aaa731c"],["archives/2015/pages/5/index.html","0799278a0c89760feed5c2a6573463a6"],["archives/2015/pages/6/index.html","e0e9ffe69e63ee314d45d4fe58c6f2dd"],["archives/2016/01/index.html","9198ef1e5cda4be83bcb8ca4dbabe000"],["archives/2016/03/index.html","d78ffea3dc12ab446e8e7afb4841d1cc"],["archives/2016/05/index.html","f11c03b97048d74e443bb8e9be8ca735"],["archives/2016/06/index.html","317e1be29995bac7ea1189c3cc41b4f0"],["archives/2016/07/index.html","69d90c9097d5ad2ecf0c49789e5c7c30"],["archives/2016/09/index.html","45788dacc9d5fa63e77075402e9e4831"],["archives/2016/10/index.html","9d46a81dcde7c78bd1c7f973b36b66a8"],["archives/2016/11/index.html","a0623cba3234f6350fa47d69e0b10d65"],["archives/2016/index.html","848f202f18fd2e1f25b7e37ab78969d0"],["archives/2016/pages/2/index.html","e4cb698020fd449f3372634d345a0797"],["archives/2016/pages/3/index.html","e98f8b8488c94bd1e123e6f3bf054a83"],["archives/2017/02/index.html","daff2ecc1f2b4fce37da196b5d45748a"],["archives/2017/03/index.html","15b69c4843fee9a07518ef02fb7fe96b"],["archives/2017/04/index.html","9441ec0955b3de4f624472c71c8c3ddc"],["archives/2017/05/index.html","c5f2474f9e017a05a02a68d1c85f7c7c"],["archives/2017/07/index.html","967fbcb624586b62c533739cb8a9f3d8"],["archives/2017/08/index.html","b7fc81576a6e03478dae12d9fb169dc5"],["archives/2017/09/index.html","112648ccf37df89b9ce46a8e06a186ab"],["archives/2017/10/index.html","d577f7bc6b71a23db1b16fe4e0b6e2c9"],["archives/2017/11/index.html","52c70dcf2c3d9963210f0db574775aef"],["archives/2017/12/index.html","2f1b1bc207a85fd1c9ad725d2240086e"],["archives/2017/index.html","d74a98379dc745642ed2e3e0b6328569"],["archives/2017/pages/2/index.html","297cf91b41a5109114edbf50a64ecfba"],["archives/2018/01/index.html","18fa1879591aac07a0dc7e1b4cbb9c53"],["archives/2018/02/index.html","d8b9f50436531ed433ae06adfb675dc3"],["archives/2018/03/index.html","298f3dcd562255fa0a445556a60b1971"],["archives/2018/04/index.html","8c305a27e2071a549740439a65f83b3b"],["archives/2018/05/index.html","29d5e6b5ad416bb85f58a644024a7b05"],["archives/2018/06/index.html","ddd50e0e1b9493302e781fb3e1aaa00c"],["archives/2018/07/index.html","5e42c6750908a9b66b43cfab2ff2d3c6"],["archives/2018/08/index.html","e14e9f345b0fffc0831ab1a7511c2c95"],["archives/2018/09/index.html","3399f7ef5c22fa7869fcb6d0085398d4"],["archives/2018/10/index.html","f0039db2e8c644eec4ca551048c59f31"],["archives/2018/index.html","c2e8faa805285e5f8b251ed3ad577f12"],["archives/2018/pages/2/index.html","8ec6faab4025de5cc8c51fbf28722638"],["archives/2018/pages/3/index.html","6fb42f52b43fa6e83bd8d399be6e79dd"],["archives/2018/pages/4/index.html","6a6656413e7538301885ed386fe25d4f"],["archives/2019/01/index.html","274f72a04101d991d7ec6e5e05ffa251"],["archives/2019/02/index.html","31038f9c6099c1d7cb4a9d3f744b5845"],["archives/2019/03/index.html","cbdcdabcb042dd1f7a6b2d59e46056b4"],["archives/2019/04/index.html","aefa6226f1566c22405f27b1c7840983"],["archives/2019/05/index.html","7dd6a124de72c69a415e725ab4129691"],["archives/2019/06/index.html","93586fed55bd1973c2114a1a50fd9e92"],["archives/2019/07/index.html","0eb5f67aecb1ef32b2e8368de85658dc"],["archives/2019/08/index.html","cccda854f114900321fe33b21456bbf0"],["archives/2019/09/index.html","f019e0f2572d9a5df407c1ee3e09b258"],["archives/2019/10/index.html","c8308cd2aa99e1d62d41f3caa825e2c3"],["archives/2019/11/index.html","f4cdf4d7c5ee56eb675d277c65ab98ec"],["archives/2019/12/index.html","dc48fa40c970b84f722c861707ec18ac"],["archives/2019/index.html","f5cae9407b5055349f897c5272891268"],["archives/2019/pages/2/index.html","ddc96716151cd9973ee0def07e815b81"],["archives/2019/pages/3/index.html","e798590a01fda252b17fa2d91f499b3d"],["archives/2020/01/index.html","c4d5681465b5b4fb10f566979f24f2d5"],["archives/2020/02/index.html","899c34b8ab0d1dcafb0759f52a609288"],["archives/2020/index.html","58608865b0973dab341652666d7982ca"],["archives/index.html","951ad45cb7fcfb4a375d7872fd9ebfbf"],["archives/pages/10/index.html","293b87edc0d181410975110c067fac9c"],["archives/pages/11/index.html","dc7d27a1a2c08b71f0b964ebb7818284"],["archives/pages/12/index.html","cf74f1dc928fbdf13279478517853df8"],["archives/pages/13/index.html","e69fdebc49c53d61a7cd640be2e2acc1"],["archives/pages/14/index.html","e49011622a595fd3b317cba43fed4b74"],["archives/pages/15/index.html","f0334338603084ce115ae61868d8bb19"],["archives/pages/16/index.html","355494e0c3bdc1076c9ecdabc06d3990"],["archives/pages/2/index.html","1a9cb0e2be96e33051231a13d0f58c28"],["archives/pages/3/index.html","6509ae57bca8ea823ddecef8dc3d6dbe"],["archives/pages/4/index.html","d5a64adcd84577c678d72e2b9cfa52ca"],["archives/pages/5/index.html","1cd27b5475351c4bfb8b536272fba8d4"],["archives/pages/6/index.html","0a208f9988ff98db8974ae5264d3cca9"],["archives/pages/7/index.html","7a8c0241dceb7a119f7ec444db202741"],["archives/pages/8/index.html","b0c522bb057c975b243224cec0e057a6"],["archives/pages/9/index.html","3bdc1ee7ea203858c55dd863421a9185"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","99f77b53b087145f6d1de2e41e702afb"],["categories/Unity3D/index.html","80c0d744f7cb9c7bb0a30654d690d9b2"],["categories/Unity3D/pages/2/index.html","f47c230f0aeba5d7463c54f888419405"],["categories/index.html","02e37d0c8f6b401fe0211f9838e97bbb"],["categories/人工智能/index.html","c6098c2ff63b9d1a7b16bc1937c68c1b"],["categories/前端开发/index.html","e0e9dd52c48eb1da53ac0fb334d009ab"],["categories/单机游戏/index.html","bd62323070a3783230dc20c72a38fe1c"],["categories/开发工具/index.html","98013fe0efb57123063a79e36055bdd2"],["categories/数据分析/index.html","033691fdb21c7af4e2f3a1a741e2757e"],["categories/数据存储/index.html","2535bbaf3248349ef9be2ee73d91741a"],["categories/游戏开发/index.html","75ade1fd34a6264658b2b58fa4bd0682"],["categories/游戏开发/pages/2/index.html","c44166d7f0eafafe37059446c74d0c4f"],["categories/游戏引擎/index.html","37a41f72503c239c8b0e09e1989b0db3"],["categories/独立博客/index.html","f2ace655384a8482fe9fc4300994fd74"],["categories/生活感悟/index.html","f64fc136e19fb11a13b34c7798ac5c80"],["categories/生活感悟/pages/2/index.html","c98a9f0ff0c68d86abbed67bf7ab682d"],["categories/生活感悟/pages/3/index.html","b0648858903da08ea4315958b24cfaa5"],["categories/编程语言/index.html","66fe2081a9ceeccfa1dd1a2a30cfe72e"],["categories/编程语言/pages/2/index.html","91ad4f255cdf1c38d4f557e6692b87d2"],["categories/编程语言/pages/3/index.html","369dd46f5becf34f23ff6c890022f85d"],["categories/编程语言/pages/4/index.html","982271ccc57e4420325fcc9dae64d0a3"],["categories/编程语言/pages/5/index.html","fbe5cad2f75feeab85ec50b662589706"],["categories/读书笔记/index.html","89d2ab5da23a2ef8a9540a5bcbf43a5c"],["categories/读书笔记/pages/2/index.html","863b7d3fc9b109757a53a4a54a76924a"],["friends/index.html","0d75e86fe667947a0bf8bfa205936739"],["index.html","a8d38f1f00fb84b5493a02ac201b8f0e"],["movies/index.html","f4991c5943196683b16a09a263acb443"],["musics/index.html","857ec35160da6664127605f1ef34e951"],["pages/10/index.html","cc95a050d50960cad6d8db073166976d"],["pages/11/index.html","25bad97fb2635f7f59587f5b056b0705"],["pages/12/index.html","47d2f82794f40066cd811e939356abe3"],["pages/13/index.html","da54d93905abde1c0c68b874f48377d0"],["pages/14/index.html","5e8e6059859d448f5d42f88d9798e1dd"],["pages/15/index.html","44cb73570df4af0b3643623ce212389b"],["pages/16/index.html","3630f2b85373795438a1b36dd6c9eb87"],["pages/2/index.html","ecf7633c6c7bed0acd7b05f1959a1226"],["pages/3/index.html","140b5b4ac2f8464bc5dd833512062d61"],["pages/4/index.html","d469bcff8bdb358e9fa080611d14842a"],["pages/5/index.html","f9cad217be570187849fe9d0a8a2b61a"],["pages/6/index.html","c4bca94ca4dbb084676324c362ad8685"],["pages/7/index.html","2a027c84a85121dced3087c6235963d2"],["pages/8/index.html","4d8c4ecd60bae1d1cddfaa70d8d5f19e"],["pages/9/index.html","2b989c23dd7eaee70ec03d6fb6145879"],["posts/1059499448/index.html","5ad8e6001ff9efb0c67ba94ca9721c06"],["posts/1071063696/index.html","b05f9f548474ef9e79fb40d7192ff61d"],["posts/1082185388/index.html","04264baa16ceb93162a393b4b05be91a"],["posts/1099762326/index.html","7353a5214ff6f9328a0927933c942626"],["posts/1113828794/index.html","09b383218c1f585baddf541ba2bdcc20"],["posts/1118169753/index.html","fd22a5b7f9d1db5e1f5afa2260d25c83"],["posts/1122710277/index.html","0b25a3eba6cb7b4b8ad19ff08d6a198e"],["posts/1124152964/index.html","c6431198541ab4db87e37baa04d1c512"],["posts/1127467740/index.html","6c475566164c62426d5ac36e95e81200"],["posts/1150071886/index.html","c2d56eca83e782d563464c253da91f19"],["posts/1150143610/index.html","f87173df6f733efde960662f9622e2b4"],["posts/1152813120/index.html","98b45c215862da9f127ec8d7b171c257"],["posts/115524443/index.html","1ac72a7100681dad545c246985f43ad1"],["posts/1156673678/index.html","a68725d57b7124461624b2c60478e329"],["posts/1166840790/index.html","5e456956a012c8143e2280e9ecd4f21f"],["posts/116795088/index.html","097d8282f7125ca01b25867d4ff80335"],["posts/1176959868/index.html","1531551c6b6b8996759a56a8e0ae589e"],["posts/1190622881/index.html","2e2f2430bf78cdc6401629ee5a5d53cd"],["posts/123663202/index.html","141920632d9caf37ee72d2e125a83b0e"],["posts/124807650/index.html","d9d60ad7f8debdded795360c1106bd61"],["posts/1254783039/index.html","1d64df25caf50bc9c1e2345e30ab5266"],["posts/1320325685/index.html","5af14dd9008cb5b17338c6804f753d6e"],["posts/1329254441/index.html","98e5b29dc2e79427f52a1b110636aad5"],["posts/1357715684/index.html","5ca1cf5e4c47d97714a1b2ed09e4b864"],["posts/1358971951/index.html","8a50e3f5d8699d064f423065802c9d4c"],["posts/1386017461/index.html","de21362a4f315c57e093ae1dedc387bd"],["posts/1394521917/index.html","85a3f14fede29cccce12a992d2bb2f39"],["posts/1397717193/index.html","a48b069e15dfb5caa4c5c66b5a7cc686"],["posts/1417719502/index.html","a16c8f8dde38cac05740e21a5ca72b89"],["posts/1424645834/index.html","c934e90072569aca1b9e3274421369c6"],["posts/1444577573/index.html","a388acdc61df10189d88f75ea572f247"],["posts/1467630055/index.html","61907ecaee7a43a364a6a8c8d70e8baf"],["posts/1478979553/index.html","949b8e8c90ed2582ff2796f3b66a64e1"],["posts/1540537013/index.html","c1a1e264bf8506e21ed2fe3431e9c59e"],["posts/166983157/index.html","ae7c79b177fc631ba1877e8ac8e06483"],["posts/1670305415/index.html","0481bfa5b4f69c74048cb1d3c34f6384"],["posts/1684318907/index.html","732808da0fa425caf181968f8b6dadab"],["posts/169430744/index.html","619f659d320f38057d63aac8e6808053"],["posts/1700650235/index.html","f57ffaa6e8449ed1580a47529c2b29af"],["posts/172426938/index.html","2b42bb815379a320783dd49722d7bcf7"],["posts/1836680899/index.html","a119fb9f8666646452895127afdde8cd"],["posts/183718218/index.html","aa5b5a68781c8b001c09ec0f14cd96ea"],["posts/187480982/index.html","aca09a3343bf47f93e4266ef80bc2975"],["posts/1930050594/index.html","27b3761944737792efd52815aca645dc"],["posts/1933583281/index.html","c64a0c1b4a6d17118b8c1255c92063c6"],["posts/1940333895/index.html","41353b054ecf548084bac8e0fc35fef6"],["posts/1960676615/index.html","f7c4d2fcf5bedf82f69160a3d499b1ec"],["posts/1983298072/index.html","ab5df139323de4d21b3a8f507e7e0ac2"],["posts/1989654282/index.html","bc88aad3714ed0fb0aebbcfa4d3ce0f1"],["posts/2015300310/index.html","22115538c7215440c7db490876c4241b"],["posts/2038378679/index.html","c2b66140aa5c39e13c46ca0f4f91ab57"],["posts/2041685704/index.html","c8348d9f7a8b94946ab2311ecdcbf462"],["posts/21112647/index.html","56610d9683aaa11508e76c2fd617fa17"],["posts/2158696176/index.html","c7289e0377d3cb89bc5f8cd28cc9deca"],["posts/2171683728/index.html","7237762d0ef9d02af4c1a5e41a0f33b3"],["posts/2186770732/index.html","0bfc40df8f854cd070f03b1cea96480b"],["posts/2275646954/index.html","5059c7ffb1f6416ba067f4a0b48702f2"],["posts/2314414875/index.html","2c947d25a954f58f3d1dcbb15d3680a3"],["posts/2318173297/index.html","99a7835d51ecde536bbdf07f366a2ad4"],["posts/2418566449/index.html","c13871048a884837ff645e3711a00930"],["posts/2436573863/index.html","f0d019a38a628f0dabb3475065ae9c7c"],["posts/2462008667/index.html","793b3b1cdae39443a80d07fe1760c490"],["posts/2463121881/index.html","c97ce2f4b892994590a14e2fef73c0a1"],["posts/2527231326/index.html","ee9e9636ed496d3b469b9df697054b2b"],["posts/2583252123/index.html","1f100e76e3724babd01b0b477b29170f"],["posts/2613006280/index.html","8aab938cff84100d71fb379a159b0d1e"],["posts/2617501472/index.html","4def7e157529bbeebf7803b75aef1445"],["posts/2676125676/index.html","6b94f4bac7467972cb8ee3aa89c294cc"],["posts/2734896333/index.html","e99380a0df3feeaa925c06cbbc47d7a5"],["posts/2752169106/index.html","ad1304e2136b2abf4c1c87c6c9f00997"],["posts/2799263488/index.html","05e9371b84409e83b8350472af7cca38"],["posts/2805694118/index.html","f13acc92cf1a0a059e806e20f9d7c971"],["posts/2809571715/index.html","ee2ba599b68ce4230f4b1425c4b579fc"],["posts/2822230423/index.html","3240c8acc243a785b21e25e05f51f529"],["posts/2829333122/index.html","4161723481d3d5cf1c1432389d04a34a"],["posts/2911923212/index.html","00f30baf3fd29fb51ff6bb8a8bc26f6b"],["posts/2941880815/index.html","615e5d523270c7d2956570315729e42e"],["posts/2950334112/index.html","a9605f41bd0fdc1a8833e2362646c49b"],["posts/2954591764/index.html","ea3aa310fd3ddddabcde786d041acced"],["posts/3019914405/index.html","c358a83a7d66d73aab11c3e945b0ee73"],["posts/3032366281/index.html","15b06c0327193c89aa85f561d03dcdff"],["posts/3040357134/index.html","e6856601016dfda5fd24e3e1a27081aa"],["posts/305484621/index.html","4d407d9529e89f42c5136dbe7ef80f68"],["posts/3083474169/index.html","6837c92db161b6881e1e9df9cc28514c"],["posts/3099575458/index.html","25e1f28f99311bc346f993947a4e3142"],["posts/3111375079/index.html","38aecc5fc06c56a285589f17ed0f83a6"],["posts/3120185261/index.html","e084ad5c0017d29cddc35a72f354de15"],["posts/3131944018/index.html","5ff603468ba9d4010c3c6b695973d891"],["posts/316230277/index.html","bd19355964b50b15c0122ac50be19b4e"],["posts/3175881014/index.html","210f183b6b0f433003d8b97d54edc465"],["posts/3222622531/index.html","b554db30a8096f7f2b77d195e11fe80d"],["posts/3247186509/index.html","85b95aaff4f1c9b4692883c92d9c0b73"],["posts/3269605707/index.html","e5512c813f7318d65b2778a29e46184b"],["posts/3291578070/index.html","2f8b88c8f6f4f8017ee5ddf26525486c"],["posts/331752533/index.html","cae777d1832e539f8697072901c157d6"],["posts/3321992673/index.html","71a039b5a9b8a50d022a7240023cc0fe"],["posts/335366821/index.html","e350951d4a1b7f6ae3fb7b14c259f507"],["posts/3356910090/index.html","8d557f490f5f4637085c220cef3a513a"],["posts/337943766/index.html","1afb5a39494105ac053eefc302851f1b"],["posts/3417652955/index.html","13b62f8926256e360b28428b83b35e25"],["posts/3444626340/index.html","9df96adc72fd9d7b275987471918aa9e"],["posts/3449402269/index.html","33d3a61546cecef41a149eeecf83f05c"],["posts/345410188/index.html","1cc88e607506576c1dbbc8b2d6d79427"],["posts/3461518355/index.html","dcb0ab0c8a9de44f2bd54e5676bd84e9"],["posts/3494408209/index.html","92ec8ae215861b6a084ffe161d9145f0"],["posts/352037321/index.html","9ef5b5c906e445154145960a4a9fd83a"],["posts/3521618732/index.html","bd4a37780dfd3858eb90517e70b6cdde"],["posts/3568552646/index.html","01a9c510e060ac73520d41c3d0c8d37c"],["posts/3603924376/index.html","c80bc3c9c02de62c0a02c9d63165295d"],["posts/3637847962/index.html","4c28697f897bcf7cdfc8c965d386bb8d"],["posts/3642630198/index.html","918c92a62e18e3578199bb735678c876"],["posts/3653662258/index.html","e6583a78fbfdc62ded792eed8da7263c"],["posts/3653716295/index.html","ede80809a58d838fda6dc41a4d7962bc"],["posts/3657008967/index.html","1fab24e95bd48af275eaa48bd10e06b4"],["posts/3668933172/index.html","9493e30c2821922159292f94197bc56b"],["posts/3677280829/index.html","4168a0ebf3a8b6bf6c314f8dc42b606e"],["posts/3687594958/index.html","8249961cc4f8d7fdc0e92157aeb6daa3"],["posts/369095810/index.html","fc079a81c80547ed4410d1b718b0c637"],["posts/3695777215/index.html","7771b3f3f99a49a3eaadc1232de22a9f"],["posts/3736599391/index.html","4f57b88fcc750a48b069edc7bf542fe4"],["posts/3742212493/index.html","1a4ac98c56228f0926bdc2637d476247"],["posts/3782208845/index.html","ea2430c68e4793c843a748e6f17a9912"],["posts/3789971938/index.html","2ee0f2ad475239e44d39e8b664533de4"],["posts/380519286/index.html","77b2517c88208245edeca340c15d0211"],["posts/3846545990/index.html","2f5e5323a243e7338912f401f1e704f2"],["posts/3873710624/index.html","5c4a53af14ce791af5df5423ef7d74aa"],["posts/3959327595/index.html","5fdfb140368f4e015a41faf283ae64c7"],["posts/3972610476/index.html","800103f13ae8d59b667f97efd9a306f6"],["posts/3995512051/index.html","bd7a0eea91245dc5b71ed2ad0bddc068"],["posts/4088452183/index.html","109c600f72afbe5a16994ef350a1e63b"],["posts/4116164325/index.html","5869c2cb7054313ba55ed6e8f34e68ec"],["posts/4158690468/index.html","581a357b7d7aef8038443aa38833e96a"],["posts/4159187524/index.html","ab8f4e63af9f1ef4fd9a9c6c28b65706"],["posts/4197961431/index.html","2a94fee605c4632518f5145204f38c7f"],["posts/4205536912/index.html","4f8f9399d2557ac0a3fe1975f63b4bf9"],["posts/4236649/index.html","382d7ca3bcc6e871263a80626b01e628"],["posts/426338252/index.html","0f5b058d5344c9310f40d751d1370fde"],["posts/450254281/index.html","5d3aa93d62757a2dd6b3ff4532d15560"],["posts/4891372/index.html","3a318ed798ba8ee0bbdda3bffc158b8f"],["posts/569337285/index.html","9a578197a7ecd85ad623d9d03d46c1b5"],["posts/570137885/index.html","d7ac83988883ee18014b2ac7ab4b6f07"],["posts/570888918/index.html","d30e20c6ccd84a6ef22637bc98695a1a"],["posts/582264328/index.html","be00a3cfd9129c8305b0775a93e9677f"],["posts/632291273/index.html","c43aba3616586bd6e232f58d17b1282e"],["posts/70687890/index.html","12ae8c2c111d0b148ff0c3f04b985cea"],["posts/719322223/index.html","a79ff0a975e57b9ad6c0875c30545d65"],["posts/720539850/index.html","7472d44c7b4f98a3b677fc841530150c"],["posts/786195243/index.html","a69e5e1dc0c23dbe1c5ec0e34d2fd293"],["posts/795474045/index.html","30ae352e45e227a616e6282a1772df9b"],["posts/815861661/index.html","a4a7dc1300067cc96bad608473f9525c"],["posts/821259985/index.html","ad1e8e35e9b4f6efdc0dcec1ea579d4a"],["posts/828223375/index.html","183f4785ced44c09fc313895514b8a8e"],["posts/887585917/index.html","68fa36791dd0aed9aaab4d99519c23c2"],["posts/888549816/index.html","80e8a258b650f20b3d12819ca8671d77"],["posts/906436376/index.html","f420647cd2d04df02c948966626d2876"],["posts/907824546/index.html","517aab2c797da3cc8fe04fe6b3ad14a6"],["posts/927393529/index.html","69411bba8c46d5b710849f069e3fd774"],["posts/94443781/index.html","317324645032d794e28958829a196af6"],["tags/2014/index.html","afa617e165461c9ef7810b63ffffc37a"],["tags/2019/index.html","1ce8d34b4f5d01523200af4c9f49f19c"],["tags/AI/index.html","ccecde9a6dca33cfde25f922d5298130"],["tags/AOP/index.html","09dfa828e808bfcb3d5974f28890d121"],["tags/AR/index.html","e96eb68f02ea4512601dbce828adeded"],["tags/AssetBundle/index.html","bccdc70c4839006933acb4827922a59d"],["tags/C/index.html","55c174f5bee957ad5a091a15b4571d38"],["tags/CDN/index.html","02a51ea66920d79664d93853ce66d1da"],["tags/CG/index.html","87e651a7d6a3a54aea355d0ab044d5cb"],["tags/CI/index.html","996fe7a2d42e95ed2bd8b7b88a1bda99"],["tags/CORS/index.html","24e91636cda5a8302e1e3025cb061a87"],["tags/CSharp/index.html","3eda1caea94f303eb8e29a2ac27799e9"],["tags/Castle/index.html","915e41a2f0d97b1234ddf8eba7bfe5d9"],["tags/DBeaver/index.html","f56245a32b9aed6847040f3f68037310"],["tags/Docker/index.html","f4f1c0e881116bc49e1b4fd594535aaa"],["tags/Dynamic-Proxy/index.html","4310e8e1203340b9ffdd8f212ea65dd2"],["tags/Dynamic-WebApi/index.html","6c0efb1869857f854c732d7c3c214ced"],["tags/EF/index.html","5d3bb468954f00bdfb01150aa0915223"],["tags/ELK/index.html","61535803cc47d7db368908d895aababd"],["tags/ES6/index.html","e3c2ee84a53e6466a37862c6c739c3a7"],["tags/EasyAR/index.html","a04045d44a57e280276deb084a8eff35"],["tags/Excel/index.html","846bddbfc0985aae36e9f80a0ebcdb76"],["tags/FP/index.html","cccbdef3228d8b1377c85cf8a2eea7b6"],["tags/Form/index.html","584fb67beb3f7c57d66670d38df40155"],["tags/Git/index.html","2d33f977de24f1b8386b865faeda0f25"],["tags/Github/index.html","2bee7c20e2ee3de5ca0780172899094a"],["tags/HTML5/index.html","4152f2d98cacfd3765d39014aae15a63"],["tags/HTTP/index.html","93996b62da0d53a6932bda9444b45a47"],["tags/Hangfire/index.html","f280bb24a5e2bc4cda2de9cdb028d860"],["tags/Hexo/index.html","4ae2ad026edccfbf90918ff8a50a5622"],["tags/HttpClient/index.html","82e5bed6fa663ac8adff2ee4d4af2ef3"],["tags/Hyperlog/index.html","3a81860cea9dd81dac2325a99a516825"],["tags/IDE/index.html","4f55c3469aeeda8dd335788485024887"],["tags/JS/index.html","659eb8188b01c1d0c7c9f212910ef128"],["tags/JSON/index.html","4ff1158e87d2b2424429ea559af32ce7"],["tags/JSONP/index.html","14ecdc592a882d61c97bb652736307c0"],["tags/Java/index.html","1c8b7ed087cb0f96f1073f0553b7052a"],["tags/JavaScript/index.html","987551c3e0adfc496afa9b3c4a8d8ff0"],["tags/Jexus/index.html","9766c992d8f958f9710ce888b9db8ad5"],["tags/Kindle/index.html","2b9960aa8c0b59e63943edc37372be5b"],["tags/Lambda/index.html","4150adf4fcb42edc48f7a84acaaa574f"],["tags/Linux/index.html","331c9a256813e4516b78bc5d95986b54"],["tags/Liquid/index.html","a0afac5c4d672decdd4e3d5a62894e17"],["tags/Logger/index.html","7ab99312d28a5405982f9912d5caff5f"],["tags/Love2D/index.html","c8459ed2013bcf60734fb779405d2740"],["tags/Lua/index.html","9d1bab34c651b7e15e146f6b358a4575"],["tags/MMD/index.html","31b27e8b103b7edc0946d828b12cc7c9"],["tags/MSBuild/index.html","22a96a68a63871b11ff195cdc6cfa790"],["tags/MVC/index.html","545a0b44add8a1676323289bde634dcd"],["tags/MVVM/index.html","5e750bcb0373675979bba4b9936dfa80"],["tags/MapReduce/index.html","1a36c251bd47d7171cac542e72f78e28"],["tags/Markdown/index.html","694fa0c6a6fb6791679f71638f8eed02"],["tags/Mecanim/index.html","3d840abde07206b22c018affd8e501c3"],["tags/Mono/index.html","d7f7e99350351a37d47a524e2db6af54"],["tags/NET-Core/index.html","be43185a1bafba485573749a63d647c6"],["tags/NET/index.html","542e21178e51485fc65bd9db5d9eef6e"],["tags/Nginx/index.html","491781158800f2697cf7992da00dbdec"],["tags/OBJ/index.html","ee2edce1b23a13ca49752ddc17474838"],["tags/Oracle/index.html","a7f739273823403408de0491b8cf374f"],["tags/PL-SQL/index.html","cdd112be1b4ab9d16345e62691e620f8"],["tags/POCOController/index.html","cd1bac4599442721ef5794373288e1b4"],["tags/PWA/index.html","e997ec34ee9fc28b33222cc578987fef"],["tags/Python/index.html","15e8437086b76da669a5e7b15f3feb69"],["tags/RESTful/index.html","5a5a4a97e607b605a13c39a293e9d8fd"],["tags/RFC/index.html","bff5948d8bf57a76d178d74faed158e4"],["tags/RPG/index.html","dd7908d640c535c7ee4d9e345b8f8295"],["tags/RSETful/index.html","0d1b6cfe0f68112216212f69c288ad6e"],["tags/React/index.html","cee8981a65ae696bf4dedd1ecbe692ae"],["tags/Redis/index.html","ff06e653c713dc6e35a89294f3d3c29d"],["tags/Referrer/index.html","8ea850e862dfacd88c3a93697ee4f019"],["tags/SDL/index.html","dbb3cc1e8611fabef1f2343eb31833a5"],["tags/SQLite/index.html","19094f303701a0f1ddec8027dff74444"],["tags/SSE/index.html","29c394582c68880fe3e33e1e2212da2c"],["tags/SVN/index.html","00d19f2089e6f6bfb0ae063ab9b3e6d5"],["tags/Script/index.html","c0ad798e125faa72a74b5f78381b41ba"],["tags/Server酱/index.html","23a2e6427686832027f2ac13418560f9"],["tags/Shader/index.html","473874fccce754d73d108c21711a911a"],["tags/SignalR/index.html","d01dd48d9299a57102731a358c705c9b"],["tags/Socket/index.html","c32f0b86e40ee9a443561bb487a94ad0"],["tags/Sonar/index.html","bf54024092d6afa180479224e0fd5c63"],["tags/SourceTree/index.html","59fa78315e762d5944b3904eabf4e6aa"],["tags/Sublime/index.html","a1fe0bd3ef9a8086d0f41ed4b4c2b14f"],["tags/Swagger/index.html","914012bcf23797ab10ea22f2634b825f"],["tags/Trace/index.html","9ca165639af350d0fe85cd99709af6d2"],["tags/Travis/index.html","6f00ba7ef345e4a38558e036bd940d4a"],["tags/Unity/index.html","df649f1995430506482fd1bbfc9282dd"],["tags/Unity3D/index.html","a57f4352bb84290b217a5babb70a52a2"],["tags/Unity3D/pages/2/index.html","d9cc132fe1e7fb2dd03f4e08ff11e738"],["tags/Unity3D/pages/3/index.html","7bd705f3feed652db3c7d8a97ac2c2e7"],["tags/VSCode/index.html","d83281db4d59ad905b483efff672fc14"],["tags/Valine/index.html","fc5eeb8576e42d2395dfc1314b7b6d2e"],["tags/Visual-Studio/index.html","4e46f3b36dd4e23b8ac6375c7ad8166f"],["tags/Vue/index.html","93cb92aa060abee0ec61541eb5afb12f"],["tags/WSL/index.html","cc1e4e3f25a670128a2e90aee57b38af"],["tags/Web-API/index.html","70ee634f3399faf762c6d49536d0872f"],["tags/Web/index.html","18aaf9943390b66f6e19846706cd1b0f"],["tags/WebApi/index.html","edeacdd9f9b183bf706a467b6e939164"],["tags/WebSocket/index.html","5edbd4dc5c0cf23560a920762a90344b"],["tags/Wechat/index.html","1714f61a5b367df99dfd73977feece58"],["tags/Windows/index.html","b37c0100860e0e06deb82cdc9733c325"],["tags/disunity/index.html","69454040cfa7865fa7b654495beebffc"],["tags/index.html","bdaf52fe103bd5ebebf2433d227e68b6"],["tags/jsDelivr/index.html","0893285eceefe7e93fd61da1ddb44f44"],["tags/matplotlib/index.html","e0d159bf1999dd19ccea472c778109b8"],["tags/uGUI/index.html","c8d76c6433bccb42909153596bf961b0"],["tags/zTree/index.html","d2d9b10e50614cfc075c39ae64a2d26f"],["tags/一出好戏/index.html","5699ece63de236467bf6410837e9a22d"],["tags/七牛/index.html","637f933aec4d07cd21443d93cf4ad2d3"],["tags/主从复制/index.html","c6c8d3ea23aae1ca15eccae1ecc51c83"],["tags/事件/index.html","345bad77de1847bbe2e4f7cb4c2a87ae"],["tags/二维码/index.html","d7a0deaf39ddbbd49230cddeb5f64950"],["tags/云音乐/index.html","4992d67eb5700c100d078135d2db3d87"],["tags/互联网/index.html","71bd299a6004538857e00abc75d9f66c"],["tags/亲情/index.html","050cf3f53f07ea5bf3dd2d6ae9a4a50b"],["tags/人文/index.html","afb4d7785f536bcfb9d456c8cbc982ee"],["tags/人生/index.html","b1371699897efa6f5188ebadb0918046"],["tags/仙剑奇侠传/index.html","b6b580e6a7fb55a77081ea5ddf9c162b"],["tags/价值/index.html","0f15341918b78351a30a81646152e59b"],["tags/优化/index.html","da035f2a53de50adbf5c2f6b93752896"],["tags/全智贤/index.html","b44f97660cc53bdd16208d652199eca6"],["tags/公众号/index.html","b5aa047b02707ce17cfd04451c1afaad"],["tags/关卡系统/index.html","35fa9087ae647a999d0d9f69d860bed1"],["tags/函数式编程/index.html","c1e9511743afd74f07b043d374ba2549"],["tags/别离/index.html","d43776dea35a9680b3002c3b1b2a04f7"],["tags/前任/index.html","02180cd2f510b0295e4a54b7bfedbdd9"],["tags/前端/index.html","32b650b8ed017a3898c617ddb7b60d76"],["tags/剑指Offer/index.html","2367b85e4306253c7fcfc6071152b5a7"],["tags/加密/index.html","65f2614f975adb7ac9179568ebe78899"],["tags/动态代理/index.html","949b4526fa1c26de68f0e2e905a865e5"],["tags/动态加载/index.html","53d0f8cb9b340abd2c3dfc33ecc497fc"],["tags/动画/index.html","a79be69ec27083a51e3911d15e25719d"],["tags/单位/index.html","66f9908ded4eb12e5d0f9509ff143bb4"],["tags/单机游戏/index.html","3b6d9461460a7dd19eb998fcffa4beb1"],["tags/印度/index.html","c5ae8681ea4550ee20ddd7e22a6057e0"],["tags/历史/index.html","2e770d5dd596f51627222c7c2aadc684"],["tags/反编译/index.html","9ae167633f49f65058a30ef87f3684cd"],["tags/同步/index.html","9d3a6a911267c7f05a27cec8643c4bb1"],["tags/后端/index.html","5a9d968e2386f63eb59cc08290b9d4ef"],["tags/命令/index.html","6d4640c3e6c56902b4994feaf06001a8"],["tags/和平/index.html","a3446d3918a9696bab52c37f97e93975"],["tags/响应式/index.html","b5fc68b335c1ad15e204bb7920548d49"],["tags/哲学/index.html","b3ebca5095e5f4d3221e42ba207b743e"],["tags/回家/index.html","5a43a10d2cb77b895edf15862c03d4f6"],["tags/回忆/index.html","4d123831d080c9ca8d7eeb4889eac13a"],["tags/回顾/index.html","df41c492f5d3f475d7e48326e80c12a6"],["tags/回首/index.html","5cfb2091f680d657004e01ac86d5b2c2"],["tags/图床/index.html","5d9d1cb508c48c84b7d7aa2decb9761b"],["tags/图形/index.html","9c141455877dfc88e486cfa3c89588c6"],["tags/地图/index.html","504ec1c45ceb653c0f5a30a2e1d88444"],["tags/塔防/index.html","fb69e8d665599ec50f54f478956a042f"],["tags/增强现实/index.html","339b3c1b53df2befefabe9fb552ad545"],["tags/壁纸/index.html","35499cb2865e1ef62ac9cb4e3c91214d"],["tags/夏目漱石/index.html","d4f3c58a937b2ae99916eec2e40d3349"],["tags/多线程/index.html","200bad77a5d8190b35f0eacf9bf45cdf"],["tags/大护法/index.html","6e0217c65f3bca394de6a7ac40c37f94"],["tags/委托/index.html","8616bd3de834e8ba24706a4c977f5d11"],["tags/孤独/index.html","17e375143aa0391d25bb2fc053e7005a"],["tags/展望/index.html","08664ff1d99accf8502c5b8a348a651e"],["tags/工作/index.html","76a92a54af6367288e87bec24a2c785b"],["tags/平凡/index.html","5dfb3ba650235ace9148cfd1f508637b"],["tags/年华/index.html","d2fce58f5b19f68bb1df5d4fb9506a68"],["tags/年度/index.html","4e11608d7663be6a28895272eb67a444"],["tags/开源/index.html","e6fb27f2f80a482d19bfffbaa2c5896a"],["tags/异常/index.html","55b324186458ce9466f598af157c7aa1"],["tags/异步/index.html","fe8efff28f79c852aec78a4a7bb5e416"],["tags/引擎/index.html","a4024fdb7f0a1523795ab8f171e9bade"],["tags/影评/index.html","e5cd2fe6c62e794ac1c55f22095d8768"],["tags/微信/index.html","3242f90f0d537d5daa253319b61c1a78"],["tags/微博/index.html","45e53632273fa6b3f98bedb6db6ed14c"],["tags/心情/index.html","45f9d05465c8afdae2acf364b2c1432b"],["tags/思维/index.html","4e9653156059987366b1c5223293ad49"],["tags/总结/index.html","ce1dcbdf6ddedf1f3fc98b3a7c311bb7"],["tags/想法/index.html","87e729bdaba8413d304a54965b1c9db6"],["tags/感悟/index.html","503a6a3b70c8c673bed7323c9dcbaaa8"],["tags/成长/index.html","a879661db5dc7889a9db635b5e9cf74a"],["tags/我是猫/index.html","e560c93a22205f2f98d8397139bc9fb8"],["tags/扩展/index.html","dc989b9b1461674003c953d898760200"],["tags/扩展方法/index.html","e1389371b855e28548da19272c41a872"],["tags/技术/index.html","0e57c493260544c6dd8916f34e684a09"],["tags/拖拽/index.html","7bc087111be72daf2e6907f6b1d101a4"],["tags/插件/index.html","bcc11afbfc9286c8dd1252aa3a7fc237"],["tags/插件化/index.html","b9d5d9b80fed83a958b33f1d50703dab"],["tags/数字/index.html","c751c38443757fc854a1aecdfadf68d9"],["tags/数学/index.html","6b43a14f7059c1e3cb28e97bc1611561"],["tags/数据/index.html","052dae67b4cb556e2ceea7dc64ecf15b"],["tags/数据交换/index.html","b1e6f04e6392292f63ebee59fda6da3a"],["tags/数据库/index.html","bd424d815ff554e45f381fd78993e882"],["tags/文本分类/index.html","954a555a595f42881bfdfd376465ce98"],["tags/无问西东/index.html","42f46af89fd5c03fdacf33c037274262"],["tags/日剧/index.html","5d1b7d387cc78ce5ea9890b19f3a9a7e"],["tags/日志/index.html","2393499a173e8f856231894913791324"],["tags/日本文学/index.html","9e1eb8bd9f98899dd5178b249ff55d9b"],["tags/时区/index.html","1a641084e94194cbf35f06880a3c934d"],["tags/时间/index.html","84828fa0a72ab94787aa5d8272015b73"],["tags/服务器/index.html","ffda60dd3bc3a87a77a8460717295e28"],["tags/朝圣/index.html","b1f1819c1fbbf720e959248853282ad4"],["tags/朴素贝叶斯/index.html","43b4b7b6b4219f14513b6610369ff22d"],["tags/架构/index.html","b6bb07bb10c0a2f70f83470efcb1b03d"],["tags/标注/index.html","9164370dcb268001b2c9ecdaaba1ea22"],["tags/校验/index.html","fdfe922f047a75def887c65cd75576ff"],["tags/格式/index.html","fe4cd4dcfec88236789171e1402093d8"],["tags/格式化/index.html","2290ae27506fb9366d3348800a80c5a8"],["tags/桌面/index.html","d356a30973e9643574dd43829dcdae3a"],["tags/梦想/index.html","726a3595e6293b2e9b319c7805d51457"],["tags/概率/index.html","82c1ead7e9e38c22b351ad284be470fa"],["tags/模板/index.html","18cdb2cda56c939789fae2b6ad817c00"],["tags/模板引擎/index.html","951fca69a905b2c91eb021902783801d"],["tags/毕业/index.html","6367877a80f60ced68e8c8ae8b8223cb"],["tags/毕业季/index.html","e066bb01b623bcd2012e9aedd18c9c92"],["tags/消息/index.html","cc4b913c0f1441ed43ee0519ff6afdce"],["tags/游戏/index.html","9ceb0920f95f884f707b71fd76db9c05"],["tags/游戏/pages/2/index.html","bafc0b0e104ec3b95a785584759c63bc"],["tags/游戏开发/index.html","b05375031dab5e8fb27d9cf5f0dbaa23"],["tags/游戏引擎/index.html","8c038cbe26d42dc5597063bdd0f4c3f9"],["tags/爱情/index.html","94eceff81894786c6a28612f7947b3cc"],["tags/版本控制/index.html","60db602a2c9f73071e2f5c83e54e5507"],["tags/版权/index.html","942482643e8a1cfb7b38265757e2e7b5"],["tags/特性/index.html","ab09dd67c22720517aa07a790242900a"],["tags/状态/index.html","9747bcbce6c29a6ec0d2f271db92b8d6"],["tags/现实/index.html","77bdfcbaa887a4ebd64f847af37a057e"],["tags/生活/index.html","d112ed0cc6b645387acf2ef05eb0aff4"],["tags/电影/index.html","561b43203e0f0ce93a9d35f28322b382"],["tags/画家/index.html","987d5fac89a6f743961f9e6e6feca95e"],["tags/知识共享/index.html","cb1318ca3dcf534c36bd1183304e9b68"],["tags/矫情/index.html","29d634ff7840a7bc1bf603b6d2465d59"],["tags/程序员/index.html","7ea16ddeee247376a89e5bd7eb9378bc"],["tags/穹之扉/index.html","5fb31d2cd9d02b9614cb4e9432dd28bd"],["tags/穿搭/index.html","fa175cc4dbc0aae8a98ddaf6e9e54ed3"],["tags/童话/index.html","029ee8554600820cab77854521243ba4"],["tags/笔记/index.html","2b378fcb9e8028aaaaee5aaae18ec8e2"],["tags/算法/index.html","4f45c1ef5a28f280e773faea27bcaac4"],["tags/米花之味/index.html","dcf106e48a80caa1dd56715080857354"],["tags/缓存/index.html","d20b408f53dae1bcfb3f2245a7794456"],["tags/编程/index.html","0c7722e0d78c5d46a205a2006cdddf4f"],["tags/编译/index.html","ebba8d2bbfa746f630cee61db50ab8e5"],["tags/编辑器/index.html","e247e4ff586d146750455e5a62f719a3"],["tags/网易/index.html","4405314c869ad0bb26f562af816a5c89"],["tags/脚本/index.html","3391c1b4541a74c1a3211c13e34bc811"],["tags/脚本语言/index.html","bebf335844ca41c9ac2b0fc365f71d93"],["tags/虚拟摇杆/index.html","ddb12ff8d24aa4874002bd6e2946cd37"],["tags/蛋炒饭/index.html","b809aab33a9338434b40204076d10e35"],["tags/表单/index.html","2aaf6fef3346270dfd56f300ea22dd3e"],["tags/装饰器/index.html","1b17bd768e674d7de580a67b2fa9f32c"],["tags/西安/index.html","ff3564c86a3371af6d1ea678f7a0194b"],["tags/计算机图形/index.html","b85df04a2836b70087064e731fe3a73a"],["tags/设计/index.html","49b3807c4d7eabf36435368e6856c9a8"],["tags/设计模式/index.html","f3ea49122fba7eea1521c7fecaf9c8cb"],["tags/访问量/index.html","8d7168c1520f4f92c7ffad96fca7fdb5"],["tags/评论/index.html","04d5542b8515042fbeea84dd2e50e419"],["tags/词云/index.html","c1a3996c6dfdf77651cc9be6faacb51d"],["tags/诗人/index.html","f493f6a1f58373a14deb4a692b85687b"],["tags/语法/index.html","c49532aa6ced43160be675e2a33a9c0b"],["tags/请记住我/index.html","61adababd5cfd332b1f35710f085236c"],["tags/读书/index.html","835fe15a3911e4a3da5dc01fbfc0655b"],["tags/读写分离/index.html","3a165a14b6f162bd3e00c9696b32009f"],["tags/调试/index.html","c650637097fe1f5290f315a19a3debc4"],["tags/贝塞尔曲线/index.html","b8bb0f181a9330019438b9a647b4ab52"],["tags/贪吃蛇/index.html","3ef6f7b63467ab17e7b502e3a97525af"],["tags/资源提取/index.html","665b923e8c55353e3798555ba5086057"],["tags/跨域/index.html","1292febd3204760bafa57c818cb45697"],["tags/跨平台/index.html","c80aa27d2955e8cc0171384a99c8baed"],["tags/转盘/index.html","7ece61dc07f90a7fc0f99b3d24fe67a8"],["tags/迁移/index.html","0a8cd9f8b0c7f764df4778e1baa48264"],["tags/通信/index.html","874bd0f0ad5407e926f456986c8ed44f"],["tags/邪不压正/index.html","ca6bb1d7a8426cced44734541116500f"],["tags/部署/index.html","67bdac194262c351bbe90c2e6a2eb3e9"],["tags/配载/index.html","ee6300b61e6183c587ac3e1e2cd78ff5"],["tags/重试/index.html","a4830572c3c3767cdabc575a52f62d2b"],["tags/长安/index.html","4d63a1bb8e9cfc9c4e2c68111a050bd7"],["tags/长安十二时辰/index.html","4c105eab3c94f5e32c8dbab61c681b1b"],["tags/阅读/index.html","fa4d0993600adb2341801d0fb40319cd"],["tags/阿里/index.html","fb01f1ed9d65ab0f6023c6070e076f5b"],["tags/随笔/index.html","80c9f2b03c2bfd1ef2effa046156f6e8"],["tags/霍金/index.html","0ff063bd1ad22b491f754eb1839d28fa"],["tags/青春/index.html","50c412c160f40957cc6dce9492ccd4c3"],["tags/面试/index.html","987e3cef7861965e67a6163029031da9"],["tags/韩寒/index.html","4d1426f42e82d69977f28f3dedaf489f"],["tags/马尔克斯/index.html","b01f1409beb8494c36feefe31f974c47"],["tags/验证/index.html","d991a3b39fe948ca2e426c268e116ee9"],["tags/黑客/index.html","1c66a709f721dd3b7ab4e1f0ba31469a"],["wiki/index.html","6740cf1f4e5f16ad55616199d1321ce9"],["works/index.html","8b8689fdbf4ed6994c2f77f599d5f970"]];
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







