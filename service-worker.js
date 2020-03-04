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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","f3a87bec97d8a4c541511177ae20ff24"],["archives/2014/12/index.html","96942285ed56d6ea13300fb0569562d2"],["archives/2014/index.html","70f6e6f4e72436499bd4d78d7a7eb0a0"],["archives/2015/01/index.html","ee2daa6659b347805e58cb5d9e05456f"],["archives/2015/02/index.html","c2b7420d6f983f086137b17ee29e6ca3"],["archives/2015/03/index.html","7b8b06fe57a0c3fb5a85ab19fdf862b1"],["archives/2015/04/index.html","d013b77eaab3d35f19f2972eea14163e"],["archives/2015/05/index.html","47600bc551deb5320b1c727eb2bf6593"],["archives/2015/06/index.html","403d918e31d1470cccfc11217cbeb685"],["archives/2015/07/index.html","602da9c92bc0d06392d5a5fe5e3af01e"],["archives/2015/08/index.html","087b61739ddd1f3236ba39e26fcfede4"],["archives/2015/09/index.html","09547a92aee8a3010b14c334f7af595f"],["archives/2015/10/index.html","cb38f61ed1e0b2985976f42ac63bce83"],["archives/2015/11/index.html","d7d919b2d9c68bc419a4cce13aea39e1"],["archives/2015/12/index.html","3483c8ebd54f99a3bcfcf089fbea8c57"],["archives/2015/index.html","8623c9fc6bcf23e0e7aa3af491baef83"],["archives/2015/pages/2/index.html","8209156c9e6794e9d8a57a84fbc35904"],["archives/2015/pages/3/index.html","d4810965026cfded32e54bfd271475a3"],["archives/2015/pages/4/index.html","cf29aa0ce6e09646bf0e81f10697ea49"],["archives/2015/pages/5/index.html","099a149844a9307acb88e707c02144d2"],["archives/2015/pages/6/index.html","e16da18fae9db7ea338b6be0870b1a2c"],["archives/2016/01/index.html","8e48e5e8afebb72c5ec49968e7ef1d4c"],["archives/2016/03/index.html","d373c3ed332729a708e2729d0526d7d7"],["archives/2016/05/index.html","c5a49642abfd3e1da0c068480359df39"],["archives/2016/06/index.html","b642cc602e809091754f884532fef398"],["archives/2016/07/index.html","98b12d5cdf8bfdcc1234f23fcba1c4e3"],["archives/2016/09/index.html","b849bf4004bfd55391cbf1b7269cb864"],["archives/2016/10/index.html","b779c1e9f084b8e6b149604a9df7e691"],["archives/2016/11/index.html","27f6aadb9d3a4730f2c6349d109b5036"],["archives/2016/index.html","1ef34a6f1c6ff50c6876146fa1f1a986"],["archives/2016/pages/2/index.html","5b33be453973d5071ac1a5410070d626"],["archives/2016/pages/3/index.html","c5507cfe9870107dce401f99bc7a9068"],["archives/2017/02/index.html","a33acf3b50e63dfa1644d5ccbfd7ef88"],["archives/2017/03/index.html","22c07385d864e4b2998a44cd09cdb43c"],["archives/2017/04/index.html","1a41e598764562c64fc5af7c4733a8f7"],["archives/2017/05/index.html","5ffd94397024e86fbae1579ea62f3754"],["archives/2017/07/index.html","52d5e635b08a6dd3f6ffe8d48d35904f"],["archives/2017/08/index.html","8187fb3d15f52e3403482fe91a81835d"],["archives/2017/09/index.html","9139dd05772115d0c18a37d9cc345376"],["archives/2017/10/index.html","cfb4d786ee0f45310aa3bd78322fb8aa"],["archives/2017/11/index.html","1875007b36bfefd3df23082bef5f50d1"],["archives/2017/12/index.html","eac8a0d903b24e849063e39797aec351"],["archives/2017/index.html","53c3c5fa6782d9dd48b824f201412226"],["archives/2017/pages/2/index.html","b94664315bfe7eef36d8eeb2f17e03cf"],["archives/2018/01/index.html","d6be20c9c259a96c544e0a0fcaa320ca"],["archives/2018/02/index.html","0fe7211c9c01c6a2d31a06f0cd9c9c89"],["archives/2018/03/index.html","b8860d96fb1968eab3fe22a91507732f"],["archives/2018/04/index.html","6865ac869be5375e72462573bac6eb2b"],["archives/2018/05/index.html","1b04a09c53b8b70e334efb19cc77c0f5"],["archives/2018/06/index.html","84200214ec32e1d82c7a1c13dd91554e"],["archives/2018/07/index.html","e87b4c781e9a161b634512bf94450300"],["archives/2018/08/index.html","7b020b8d785573ee8eb9ad45afadc41e"],["archives/2018/09/index.html","4394b9c9bd3af95d8b15b20ed5ade920"],["archives/2018/10/index.html","709861c09a90ad2347af2d93525f5736"],["archives/2018/index.html","f68be36433e30e17f0dd171ce41d74a2"],["archives/2018/pages/2/index.html","507f12cfa5366d452f8ba237f6be6bba"],["archives/2018/pages/3/index.html","bc20792ccc89f390fb70a3e711f64f7f"],["archives/2018/pages/4/index.html","0b21f06fc3b140446e5ee7c0e72aaca4"],["archives/2019/01/index.html","00170a126a1f06dc59f81808e4ea41fa"],["archives/2019/02/index.html","40b20db60278c065915472c515794f84"],["archives/2019/03/index.html","8f36f61ef8ce4b779267888a21315f3f"],["archives/2019/04/index.html","f42f3ac0ec83f3382c004ac6404f07f3"],["archives/2019/05/index.html","6823aa426189fff44546de7e52377c45"],["archives/2019/06/index.html","d07ab8a321afc4936b3d5cbb32fa306a"],["archives/2019/07/index.html","ad8a621ffedfb3586d3f2f6247c777d9"],["archives/2019/08/index.html","9b75deb38e0e4ca0030c16835cee969d"],["archives/2019/09/index.html","6505abd13b4ae7ff2b2df4c9ef66c66a"],["archives/2019/10/index.html","3485313a4de8c13a3aa0bb6d03765a98"],["archives/2019/11/index.html","35aefa10d3e61e3c86e7d065dc60c9e4"],["archives/2019/12/index.html","f6217871d4176b44b7e7eb108b984498"],["archives/2019/index.html","e6a173a332a709ac113a3c759675ecb8"],["archives/2019/pages/2/index.html","3c34e39d1c9f6ba84c2275d567e208cf"],["archives/2019/pages/3/index.html","be0d01d8a4b9f53da8b7e9af239f29fc"],["archives/2020/01/index.html","824f5bdb52969777624e756d387757ad"],["archives/2020/02/index.html","cebc003f12b22531bafb438753d3ea6f"],["archives/2020/index.html","af619a2e6a0d17507df3e5b7ff3c8d4a"],["archives/index.html","d08110933575134c423a235dbdc2a80f"],["archives/pages/10/index.html","137c80e8d120e4dc9a03d43955312200"],["archives/pages/11/index.html","51b63a39de50fd22b2fee2541e71197a"],["archives/pages/12/index.html","5a715ca5211aee7855d50030a541eeb0"],["archives/pages/13/index.html","1ddce289cb4fdd1c69b299088ae5f063"],["archives/pages/14/index.html","97f8cbfb49640d7d78f42ad1193ff7ac"],["archives/pages/15/index.html","b469b0b3e55d8b1eefdfb9ca67249aab"],["archives/pages/16/index.html","d047f21cb2d2e9654a3f4b691ed6f93f"],["archives/pages/2/index.html","5fdc9fff7de1341a8038430eabd0991f"],["archives/pages/3/index.html","167ca58258e6787ca04a45f6866f7046"],["archives/pages/4/index.html","00bddd125f247e00a79b94628a2abebe"],["archives/pages/5/index.html","70bcfaa9bbbded00a9b901f1e6c548df"],["archives/pages/6/index.html","d3b91fbadef6fad02439551920e3bc72"],["archives/pages/7/index.html","f4c9b8f03319de346303b109bd9f4804"],["archives/pages/8/index.html","518d59230ba1120670f3b1d1a2da9777"],["archives/pages/9/index.html","eb25d2eab5d9478a9f9872c321c5a6fc"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","fbb77336c913dbdfe8c9601554b440f5"],["categories/Unity3D/index.html","7e0f4767bc0f612b70c771de5203af51"],["categories/Unity3D/pages/2/index.html","386a45874139c1891d1b704b56b7d20a"],["categories/index.html","2f691662910a7c310e25210c2e7b1134"],["categories/人工智能/index.html","3d62bde1b46edfc4392934e601e0de59"],["categories/前端开发/index.html","64e6eef0a3a536d3bcc51acd341414a8"],["categories/单机游戏/index.html","f152dabe45fb77515658f8eac532959e"],["categories/开发工具/index.html","12a93f2d58f8b3d2a09eecdb065845ec"],["categories/数据分析/index.html","0480e7e85031c01b3fbc6b58c5273791"],["categories/数据存储/index.html","bed204e343cc5f4521daa1ae3d1f6b69"],["categories/游戏开发/index.html","507c8d7544ebcdc5df5c408b3ea98976"],["categories/游戏开发/pages/2/index.html","f72c694bf27439c87db470229a59551b"],["categories/游戏引擎/index.html","1bfee8d2978961b8e251e04c6d3f4c1b"],["categories/独立博客/index.html","16d0645437047501aa8f9dc1d6459ffa"],["categories/生活感悟/index.html","1c9b11a97f621baddf2a1755c0017167"],["categories/生活感悟/pages/2/index.html","6d2d73f42c670e7e73c67b42818ed0c1"],["categories/生活感悟/pages/3/index.html","dd0af4802f85edef35f4c6d8f5a04617"],["categories/编程语言/index.html","d2599de26e809ec6ed924906bfc694df"],["categories/编程语言/pages/2/index.html","1358286978582c4d2a864c0d9cd2f6e4"],["categories/编程语言/pages/3/index.html","faf9c1c35ac24735e4bd25e9beaf963c"],["categories/编程语言/pages/4/index.html","1321c4159bdc47223870cbfc8c42a5b7"],["categories/编程语言/pages/5/index.html","64f237bd907ed9ee236729c043615954"],["categories/读书笔记/index.html","a3aeb9c637158b8aa6531fb97215f3a5"],["categories/读书笔记/pages/2/index.html","7960769dfef7cb390b90333f13ffee75"],["friends/index.html","9bf9692568061782d062034b92e7c3f5"],["index.html","ef0891fa9ebdcdb5ba0687e76f3a0a97"],["movies/index.html","cf78add9f4e8c535cb0ac926b6eba9a7"],["musics/index.html","49fe83f16bcfe186a6ace529ec1575d7"],["pages/10/index.html","59f49953b72d4a444d8a678d1af7a485"],["pages/11/index.html","49ba87bd4bc37293d7d9ddc0a75c75d9"],["pages/12/index.html","ac6a25ab9b8ad26e6c4aa84465de37e7"],["pages/13/index.html","6127eea9affcc577567a2f9894748992"],["pages/14/index.html","f7b06c2109334a439d65ba213f41717f"],["pages/15/index.html","128fdcde37e5aa4dcfe7f21a31ad165f"],["pages/16/index.html","b8c4a9295aafe02fe500427f9798e660"],["pages/2/index.html","9898ed4d6f981dd83f3c8790333ef8fc"],["pages/3/index.html","9b185193b9eb3abe2f8bd1082fcef2ca"],["pages/4/index.html","b99aff2ae723585b077e9bad4455f8d8"],["pages/5/index.html","533927b867ce71782a9ea8ccda76fbb9"],["pages/6/index.html","f16dfacd8d9873b95f17616288b687d9"],["pages/7/index.html","bb6271f5a3eaf8aa4cd4ba6ed3ffc980"],["pages/8/index.html","5b6cc26d6349e0213221ab8271010617"],["pages/9/index.html","91a8da222f81c29d05d0ec0eeda2335d"],["posts/1059499448/index.html","3c839b79246cf02c08cca053835d00a7"],["posts/1071063696/index.html","d99efe712575975279862136b978d62a"],["posts/1082185388/index.html","f8df109831f0d19b475cc0a8fa6ef49c"],["posts/1099762326/index.html","d3c53aaa6e87754c5e630f8b28dae953"],["posts/1113828794/index.html","7419fd5daa906d0af8aa3a61cae6d3eb"],["posts/1118169753/index.html","7c1d279a7097698cdd8569ffd882bccf"],["posts/1122710277/index.html","43736bc185442547fdd8506f2a2787ae"],["posts/1124152964/index.html","4c8d8db7f9fd13120b017193457bd655"],["posts/1127467740/index.html","76cecd72fdc7ec5fc5d2c6718c123a3e"],["posts/1150071886/index.html","75d8b14c26ccc5a7a97fbb20765f26a6"],["posts/1150143610/index.html","d449c492ee750214382c031c3ef916e0"],["posts/1152813120/index.html","cdcd4aff29055b8d9f67f460b39f3d2b"],["posts/115524443/index.html","ed42256b79503d50bf278bf574ece9c6"],["posts/1156673678/index.html","2bf1800421a11964c54dd8ad47849210"],["posts/1166840790/index.html","60e76c1ce3669d5d03a85a2727c3a016"],["posts/116795088/index.html","de74693a456cd10461555f528913c9a5"],["posts/1176959868/index.html","019af440c04d858111f04e9840a0d1f6"],["posts/1190622881/index.html","b3165dcf75c499bf92ddab4c30d09aa7"],["posts/123663202/index.html","dad4ff086ca8fdb3ba7b410afc3cf06d"],["posts/124807650/index.html","40268a86a71b199079b10a5fbbddb0ce"],["posts/1254783039/index.html","2fdf479f1c9ecbf2d061f3b3e6a339d2"],["posts/1320325685/index.html","5a3f8d87379d5a045f5c81afe2d0634a"],["posts/1329254441/index.html","bd4e7aaccaa073403bc867ca33b9ef41"],["posts/1357715684/index.html","fd5e68ef5216bba96aa253365b854ad2"],["posts/1358971951/index.html","a568d3345db12fad4ac26e49f3989394"],["posts/1386017461/index.html","a8c4c23c88f74067651eeab8ae24ef4d"],["posts/1394521917/index.html","ff70a615d47cfee8de13ffcdcc25b305"],["posts/1397717193/index.html","6a5d5414c412b479c08dd585f2f62683"],["posts/1417719502/index.html","0153c8afde10274cd8e01b85d967c861"],["posts/1424645834/index.html","cef303d483453d1ce32da14a3dfa05f8"],["posts/1444577573/index.html","e035ad93f991034dc65555c24869b4c2"],["posts/1467630055/index.html","ca07ec29803580e8b044bda387922710"],["posts/1478979553/index.html","cd2bc11a2dd27a41c1c21f4241f2afad"],["posts/1540537013/index.html","7116506ca453bb0ee5b52a8988d23dc6"],["posts/166983157/index.html","60776847f57963f53ca8784d50e4d050"],["posts/1670305415/index.html","751f1b98c60a7896472da272c02109d0"],["posts/1684318907/index.html","a5821cf2ccfecb23ce29b9520a80f470"],["posts/169430744/index.html","e93a314f52bf6e90a30c8989c4babb2c"],["posts/1700650235/index.html","5a5499c3c48f31125e19e8caa73e4746"],["posts/172426938/index.html","1b35ffc600d339e64a2f94baf395107b"],["posts/1836680899/index.html","7811fa08f63f5926176fa5ac2e184739"],["posts/183718218/index.html","c20d777f4e2d8c74bb9048b08c3ca4fb"],["posts/187480982/index.html","f5eaa6dfc38810aac04663866d0aab28"],["posts/1930050594/index.html","c3c491146e9314b0db2d1f641b86a621"],["posts/1933583281/index.html","f688519f24b361ce54daf8209546b79c"],["posts/1940333895/index.html","51d1d48287ed1430d1becd3cc4bba9b7"],["posts/1960676615/index.html","5a5c5d792fea81065d5c15600378b84b"],["posts/1983298072/index.html","c8101834f880e04f863ee619b3a827ae"],["posts/1989654282/index.html","37bb180216d56a77f10e5d3ac5b1b396"],["posts/2015300310/index.html","9e7c2de1a01167e0041659fd4c8c88a0"],["posts/2038378679/index.html","8ba502fa0d95edbaa1d804e3c0d6a0f4"],["posts/2041685704/index.html","8bfea71ff854d5b8f2fe7f229631b276"],["posts/21112647/index.html","cd4ef29b7060fa7008f7d7ca364bca4b"],["posts/2158696176/index.html","441a35cd172521429dbb323cb469824b"],["posts/2171683728/index.html","3c3b82bc11bf08bbb4c39ac4fed994cf"],["posts/2186770732/index.html","fc513497f29e6817bfd2b7955c82fa42"],["posts/2275646954/index.html","140b124320a8d1c1f46ddd85827550a6"],["posts/2314414875/index.html","893a675d71fdd14410b6d2fbd0e44189"],["posts/2318173297/index.html","e8b19066770cede2a96098dc68816bfe"],["posts/2418566449/index.html","3d4fc8ed980a1bfe53ae1be49d319e76"],["posts/2436573863/index.html","8b04fde2cf05173b980cd18f062bbe93"],["posts/2462008667/index.html","79e2b9768e3d522871ba0a44f5a9a869"],["posts/2463121881/index.html","469f4a1f506e61b065c8ae6b7809a83c"],["posts/2527231326/index.html","6ad28461a6b1045262fde563b236953a"],["posts/2583252123/index.html","809c4444cc6ccd5afc3556351dc09dae"],["posts/2613006280/index.html","dbdbfdaf206eba6375ea6554c500e775"],["posts/2617501472/index.html","6ef9766cf33e87cf696c995d8b3326eb"],["posts/2676125676/index.html","d22da57ad80809e7d2f4c1682333d733"],["posts/2734896333/index.html","f0f068a4f94b4ddc320219c1a985ed24"],["posts/2752169106/index.html","d62efa428ffff17fae698f5d75d59dbc"],["posts/2799263488/index.html","c10901af7516207e3bc3783cb4b610d7"],["posts/2805694118/index.html","273d147767e6e11ff8fd3e1e8f8113ae"],["posts/2809571715/index.html","315c9a2326d0b07f13ba661bcee2e152"],["posts/2822230423/index.html","264a47f218f70a89f48539d5f5675ec5"],["posts/2829333122/index.html","d059fffe5e047e593a3ad5307a32134e"],["posts/2911923212/index.html","209737e3af2df8843527186a543ae030"],["posts/2941880815/index.html","2f4c85b5028109ea12ea91bac5ba2f1c"],["posts/2950334112/index.html","3e382e3252e2a166e28f526b19b542d8"],["posts/2954591764/index.html","83dfdb73d8315e68d65537820685057f"],["posts/3019914405/index.html","54be06f5cdf07b85717c71f50d0500bf"],["posts/3032366281/index.html","5a70909833d8b75daa983be64f48da8e"],["posts/3040357134/index.html","d46cc55cf6cef20ee5b3b2bfe62dd8d7"],["posts/305484621/index.html","c1e0142d2332773bc7b80cfe01f12f86"],["posts/3083474169/index.html","959348dd5a275633048ad0fed9a75038"],["posts/3099575458/index.html","e081d2be29b2df57d17c4df50783ec15"],["posts/3111375079/index.html","f856319406ab1869a70cbabccb114d73"],["posts/3120185261/index.html","a4d7c479ffbb39e500652c0952d10a71"],["posts/3131944018/index.html","f5bad37b7163b56beebfc2c56adc97b9"],["posts/316230277/index.html","e955a4485614290ee191fd29ab7f1e92"],["posts/3175881014/index.html","3b3262af789dbbca9ccff40ffe348002"],["posts/3222622531/index.html","73d7e8d7395e3c2ec4fe4cb678050936"],["posts/3247186509/index.html","da517a0d338a4d64c068a1297a64f803"],["posts/3269605707/index.html","851165322d55bfe01b4c501b3a3345ee"],["posts/3291578070/index.html","977aff781a9f86e1fc8da8d6cdd20d72"],["posts/331752533/index.html","57da7c176f8b3ae848a103864e66b7bd"],["posts/3321992673/index.html","5f4f1e458ac77079a94bb786b5cd76d4"],["posts/335366821/index.html","a841d0d9a6be77b8acf4586a56f6cdfc"],["posts/3356910090/index.html","03261d3ca35100b6d7beaf4fc4eaa5be"],["posts/337943766/index.html","41cdc17d39ec0d189f8d1ef993538385"],["posts/3417652955/index.html","d49bfc4b9cfcb369f956d8d5dc461ce6"],["posts/3444626340/index.html","77ee79f67a499e11ae12ada5ca0c8814"],["posts/3449402269/index.html","f0352a6a134702c544df7a6fa088da5f"],["posts/345410188/index.html","fea0d1a2d87cef6f8e63eb5a4e6a08f1"],["posts/3461518355/index.html","ebfea9193c6d58592e4671230c6a4f90"],["posts/3494408209/index.html","1991e6ef5122e3fade684436d38ab849"],["posts/352037321/index.html","d48f64c1ce63e5449e420e8174d1efd0"],["posts/3521618732/index.html","3c40af1ac3f316e823738968243ac6e6"],["posts/3568552646/index.html","ea92a7ff327032166e4a2bfbe7922b6b"],["posts/3603924376/index.html","dc2ec14ff380f90b38d5d370d1d2be06"],["posts/3637847962/index.html","c5943c2883b28d1fc7aaabe7b37f8f43"],["posts/3642630198/index.html","1c909ed4a04941b89a79b2ab8d133058"],["posts/3653662258/index.html","be81c8848e5e48b0471c1d427cd1fdeb"],["posts/3653716295/index.html","b41cf6da9b4b71dd8bb7510105e3fec7"],["posts/3657008967/index.html","c047b509f95aea394285abd33d23954f"],["posts/3668933172/index.html","48948a37e0f199646fdbd1b57ae8e0a5"],["posts/3677280829/index.html","8fabf7854e7a3f3961b6625d9a1d2672"],["posts/3687594958/index.html","e8b8a61e881a5e8685663c1562f9703d"],["posts/369095810/index.html","15670c2219f8068a1f5a65d9f0081887"],["posts/3695777215/index.html","0e73c94bfd1969fd38d47b475a5ab27c"],["posts/3736599391/index.html","ff24d785060f7788bf9e55d6758545e5"],["posts/3742212493/index.html","04f91f63464fabd483b7fe582cf91425"],["posts/3782208845/index.html","30f4557118719103f626dd40c37693c4"],["posts/3789971938/index.html","9f89027b59a4b1f3c2453b12a8429a59"],["posts/380519286/index.html","263a392d96040cf280eb3301f031559a"],["posts/3846545990/index.html","27aea5a021c6ae964846587fb42b8f6b"],["posts/3873710624/index.html","1ae87176539042696ddf02f6381d0f83"],["posts/3959327595/index.html","30e776e9e79c007947d29af29646910f"],["posts/3972610476/index.html","16bd2ef0e0f91258286a2c5cd897bd9e"],["posts/3995512051/index.html","6ee009a81bcf5047f0be19bc2363b0b1"],["posts/4088452183/index.html","99b6396f22ea1ead9d297f0a34eaa250"],["posts/4116164325/index.html","3484f41193748df8be5da941ffc136b2"],["posts/4158690468/index.html","fa62d51480c01aab9db9d7f729b1e14f"],["posts/4159187524/index.html","668f11c23fd3a79b79487ca1e5158057"],["posts/4197961431/index.html","85fbf83d8cfa7caf04c64ddc94fe6a39"],["posts/4205536912/index.html","78afa0d2e5b7c1540b872a80d2cc25c3"],["posts/4236649/index.html","89c17a8cbbe31bb28c5ed005fe1848f4"],["posts/426338252/index.html","74d5a2aa671eb5cf629b03ab6ce576c0"],["posts/450254281/index.html","94dd93cf45c21257f140074df7a759ca"],["posts/4891372/index.html","feabb7d0bcc0faecd56c8423a31ee93f"],["posts/569337285/index.html","b2b536c366fb3dd93d01bb0bcae30c38"],["posts/570137885/index.html","089c6bef8c2049b6c031f0f0dbfc977b"],["posts/570888918/index.html","cdf355ded5733a3ac9eef89123a7ef0e"],["posts/582264328/index.html","1d53ebf17ca5d90df0f2e1e26f42d468"],["posts/632291273/index.html","e9f0c7d244a21ca068fca85b6d35bda9"],["posts/70687890/index.html","2c67c0e6641de2102998d5e177274d87"],["posts/719322223/index.html","b03a9388be7a052981ae449209adf061"],["posts/720539850/index.html","d0a0db63203a8176bfc0b603330dae81"],["posts/786195243/index.html","72108d8aa1576ccba840c702c0db570d"],["posts/795474045/index.html","7fc45ab823be3f07f6d268629868c173"],["posts/815861661/index.html","f90fe526dfe0ac8d874e056bb9f070b2"],["posts/821259985/index.html","ed5964e53b3222193b307e7b16306464"],["posts/828223375/index.html","4275fdb7ad71c67926319672bc52ed8c"],["posts/887585917/index.html","48af0ac045dd5d882675d1dfc64b0c37"],["posts/888549816/index.html","a923debcd4e87ff1eda55d4b37d5a0e4"],["posts/906436376/index.html","168f9b0757eee59962374e7673571426"],["posts/907824546/index.html","a22ae74d6c552e0edcd48e7b8c8ceef5"],["posts/927393529/index.html","8597d778ab6683f7d4fd42aa2a96bfc3"],["posts/94443781/index.html","6258a162c11fa7ac43e4566abf7c68a8"],["tags/2014/index.html","540f8bfb11a15ac21de58c842370f375"],["tags/2019/index.html","c51653b40726ed8419262c3c1082fe72"],["tags/AI/index.html","d552b558ac448e0a7f75999273d8abcb"],["tags/AOP/index.html","dab5aac69a58ed2e85deffb991139d4b"],["tags/AR/index.html","94556a67aba3ad6afc7b08881f420320"],["tags/AssetBundle/index.html","40ffb0c7425af14781b909971c5b3d0b"],["tags/C/index.html","eeadb492c5fde83fa2cbf1623337f2d1"],["tags/CDN/index.html","900d913755e9ad2e06d6d9ec92218ec4"],["tags/CG/index.html","5ddbe9ec9dd2389dd4cbb60af7a358e5"],["tags/CI/index.html","4b95f1a9c5db2b1b6f2b7cc8a422ea98"],["tags/CORS/index.html","eaa7c96d8861a19c6dedd37d52ccf51b"],["tags/CSharp/index.html","e13e05e7ed3682349dac5c1e4690b279"],["tags/Castle/index.html","f10960cd5cbe928cdd63fa9cc4cd83fb"],["tags/DBeaver/index.html","39bef770a479caf29291cc2770c20ae6"],["tags/Docker/index.html","a24dbdb2262bdc2c3b7db1f589c70ce7"],["tags/Dynamic-Proxy/index.html","b39d87b40cef3f757f2fef49313ddd8e"],["tags/Dynamic-WebApi/index.html","05af47ffdc2fcf9c9f98ef35807e7266"],["tags/EF/index.html","2784c4bdb8a46c1435d182336b057525"],["tags/ELK/index.html","5cbb276cc5a0264c35499f19ef12b2d1"],["tags/ES6/index.html","98dff97024f75f5230432b835d38d6a1"],["tags/EasyAR/index.html","d5ac03df4c8f7a108f345f2184830d23"],["tags/Excel/index.html","fb034aad296ebb4bcc65a435c5da4505"],["tags/FP/index.html","452dff06baff5d6f5a16e82e3c2077a7"],["tags/Form/index.html","f8602305b9beae507516108e7e027ad9"],["tags/Git/index.html","2a4746bf7d509e913eb1a62eb02ac181"],["tags/Github/index.html","b786535efab76e8898451f2c16c2bd8a"],["tags/HTML5/index.html","d3db7b7417b750cea3682072eab77dd9"],["tags/HTTP/index.html","9e91c726a3306fdca8f73fbe988af6da"],["tags/Hangfire/index.html","44a0256d6e2734920e5e7d42beae11c7"],["tags/Hexo/index.html","a679d2005b1aada5f97671eb0179f31a"],["tags/HttpClient/index.html","fb6da3b0a47b7e54158ace06ddd9fe08"],["tags/Hyperlog/index.html","8ca6be1a2870ebdd73ef319ca5daff85"],["tags/IDE/index.html","0c621b580b673d624234a5ccce1056ab"],["tags/JS/index.html","413fbd6973a5e501bd442476df7f49e8"],["tags/JSON/index.html","dffa6707855371b50bddf55f0c7252aa"],["tags/JSONP/index.html","91c5f4c3782180067dde4a59d2eb1ce2"],["tags/Java/index.html","98113cf3dff8a8cd79b512eaef43b171"],["tags/JavaScript/index.html","06415284ac02bf4ae6b66eeb1ec8daeb"],["tags/Jexus/index.html","edcff63d0ffef7e4626ce32bfbb5341d"],["tags/Kindle/index.html","c1197bef26a8304c906221249b66f6d3"],["tags/Lambda/index.html","3c6d6d4c6380aafb53f4e0a9dfa9ffe4"],["tags/Linux/index.html","cdccc4748e2141c8d3fd2d2207c817ae"],["tags/Liquid/index.html","fdd7c73d2f391e8d86c2868500af535d"],["tags/Logger/index.html","ee0141b08b6485b15192b2c455d9c23c"],["tags/Love2D/index.html","2ec435cc175432ddfaf607c4aee1b725"],["tags/Lua/index.html","07ea1f4369182d58126cadb7e3fe760f"],["tags/MMD/index.html","db7ef33fbee445dff261041ddcc5255f"],["tags/MSBuild/index.html","4e59053571fa0d06ee0e19c867479ceb"],["tags/MVC/index.html","adfcc4c9c3e4b930cdfe77a2d88a7460"],["tags/MVVM/index.html","9b299b666c51ef28528443f70ac877fa"],["tags/MapReduce/index.html","b89cb5ef7fd71f013a625a7e0efd70b3"],["tags/Markdown/index.html","d3311133adb670d71f07c1e8af4cd55d"],["tags/Mecanim/index.html","65c5fbcd6992d190b4d4c4232491259a"],["tags/Mono/index.html","d24311fefe5d3c6a55423c1f7960abda"],["tags/NET-Core/index.html","8f5b26bb1d2ff64c427341c9d7804d64"],["tags/NET/index.html","37c5a65301a8109787f1dd5a8586cca6"],["tags/Nginx/index.html","8a1c35533bc5f706b5732dbb99f3a870"],["tags/OBJ/index.html","bf5569a771145d09119ad16ba05a746a"],["tags/Oracle/index.html","28671b1274cce17cd72bd0eca9e4c437"],["tags/PL-SQL/index.html","d3e4eca1e94c2ea66b3d81b0551d0ab6"],["tags/POCOController/index.html","c60111c3f015632ffbeb0f66bb5383a7"],["tags/PWA/index.html","24ffc674cc15ef0922b3c7e48948bacc"],["tags/Python/index.html","f1017ededf4db80ea757a0b007c9b7c7"],["tags/RESTful/index.html","2d91645693e05c7f9e3cf3fee1591618"],["tags/RFC/index.html","c4f88fe199addf4192739503bb3c6e55"],["tags/RPG/index.html","9ff5b016a10c5893efd55a8028a94faa"],["tags/RSETful/index.html","b8875e50db9f3233dd754d5a5e09b08f"],["tags/React/index.html","28066696d545fe3be2aa1baf570a7e79"],["tags/Redis/index.html","06f37f33a958e743c4cb7e49d9c733cb"],["tags/Referrer/index.html","8f67ac45e000c2be131734da6a3d4ef1"],["tags/SDL/index.html","070e9b29d5e224051d8bfb3225d4f238"],["tags/SQLite/index.html","d6fc5b19fc429586927f2c8c3616c277"],["tags/SSE/index.html","f0ad0b56ebc2e4aa692e694e24219aca"],["tags/SVN/index.html","57d5e74453f4653ece81a3605656633c"],["tags/Script/index.html","e41a2b174dbaf3324d5d93c335916233"],["tags/Server酱/index.html","1b1d62448c8773503a01b0588853e932"],["tags/Shader/index.html","29bc2b7af4681e55717f9e80f0865f7a"],["tags/SignalR/index.html","e7a7c0d873f48b13d8c82bdefa176abe"],["tags/Socket/index.html","5ee9863b69ce25367a2967956f334724"],["tags/Sonar/index.html","bfd0233012c0da5087ded893ac79fef8"],["tags/SourceTree/index.html","b4fb7cc7560f95807d483f20867c1524"],["tags/Sublime/index.html","0687e9aecdce2c5eeb8a57ae6a065752"],["tags/Swagger/index.html","fcb34996ca399b4bbf97027a1067c5ed"],["tags/Trace/index.html","3733ac8662526060f6ca0337a9f43e1f"],["tags/Travis/index.html","0a9782d3542cc3c0246b40f3d4a48c7d"],["tags/Unity/index.html","4cdd95941bc92531c9ad8446a2596413"],["tags/Unity3D/index.html","4f71aab34b485817be3b81a0e24c971c"],["tags/Unity3D/pages/2/index.html","adf7a437f3326ba04ed1805cc3ef125b"],["tags/Unity3D/pages/3/index.html","31bce0c66302d85488137d2b13f46560"],["tags/VSCode/index.html","772713c8052af430ca295fe614ccd7b6"],["tags/Valine/index.html","8510fd517abd33b053a1c9bdb80f4c59"],["tags/Visual-Studio/index.html","cc09389c3ba6fae150bd9988e425bf40"],["tags/Vue/index.html","93a4c4d29948d4e2e4ee20740cace5d6"],["tags/WSL/index.html","001e3688b431e7749cbf9cf95ec284bd"],["tags/Web-API/index.html","892471ae7978db29ac9d40987f147510"],["tags/Web/index.html","3af20d99685768d88aaef2021535f681"],["tags/WebApi/index.html","068c8ebc622393dc279c9a2b24c0f7ec"],["tags/WebSocket/index.html","7d5ff1a2c53f7b5cc3e842ab11aa94da"],["tags/Wechat/index.html","ff2f03990743c004312d1214619e9b46"],["tags/Windows/index.html","7c612c2016e49d760d7ba4423ec01c64"],["tags/disunity/index.html","9ecd5ca86d00adea7ab3776d03c8188a"],["tags/index.html","a094541dcb37b8248e1946a37c7289ee"],["tags/jsDelivr/index.html","7c0054da802fed6a432d2017d05f1ca9"],["tags/matplotlib/index.html","8a915026ac3f5fe147e2b3a5ec4ce366"],["tags/uGUI/index.html","6fb5ce212c2eca00f0d8df09ae9f12fb"],["tags/zTree/index.html","2678c234434f647dbb54a74db6de94a5"],["tags/一出好戏/index.html","f1e8aa2feafbffc70e37d2f7769f3283"],["tags/七牛/index.html","af2942597eeda7a99bdcde038ca6e94f"],["tags/主从复制/index.html","255be3ad36355344ae73f9485dfb2ef2"],["tags/事件/index.html","e32eaffe91c8dda4ec196f71476ee7d2"],["tags/二维码/index.html","a2b5171d0f31ed3fb113d71746f0ba3d"],["tags/云音乐/index.html","f96fcf97e904c5ad54e508490800d520"],["tags/互联网/index.html","0b5961d9359f657b771975845bcbf91a"],["tags/亲情/index.html","9e8a2bcbc959046cc19f88df62fec235"],["tags/人文/index.html","e1a4a1b1b96c09502ebb438dcd624391"],["tags/人生/index.html","11a5ae329ca870bf3290f9e9fca541cb"],["tags/仙剑奇侠传/index.html","e7591ec824eba96554c581da5c024269"],["tags/价值/index.html","f9526f8f1b972b96c2855b535a7d4447"],["tags/优化/index.html","40e728e2597b6c6088502070ea7799bd"],["tags/全智贤/index.html","4a8d39ab48ff31de500663b3c62ebb6d"],["tags/公众号/index.html","c20239f559345148cab96d9ddd378ff6"],["tags/关卡系统/index.html","37dcc06598a2f60d6c971aa6b89f7777"],["tags/函数式编程/index.html","41c3695bb779e01800c579934e0994bb"],["tags/别离/index.html","20c5adc66d8f4e954b5891c1b57b970f"],["tags/前任/index.html","df7f6dd52a754a6356def59a13e10075"],["tags/前端/index.html","e98373aa51e9f9590bd72679eb849a1c"],["tags/剑指Offer/index.html","2b1269cf11dcbef5186cc40b50c5fcc5"],["tags/加密/index.html","cfa69bbbb7419b638d44188784114f39"],["tags/动态代理/index.html","be369db764dfe0b3e40f792e25d67c05"],["tags/动态加载/index.html","48d562ea38a3b9d331dfa38942b0fa6a"],["tags/动画/index.html","537d8b527e6309551ee13a4d105d6791"],["tags/单位/index.html","8bddce5ca2711a4a112509ba73ae91b2"],["tags/单机游戏/index.html","8e2be0eedfee6f448b640c58d0b76ab5"],["tags/印度/index.html","5a4fd97da351c86628d478e86c0dfcb7"],["tags/历史/index.html","245b89f35c79f08b9ba0b24dc37a1034"],["tags/反编译/index.html","61cf427034c2ad5c587ff4d3d11d02f2"],["tags/同步/index.html","c15fdfac70a4e2c59f81b0d917638e18"],["tags/后端/index.html","658f23716d89c874e7880b7c1bc1c146"],["tags/命令/index.html","7cf64d07ccf9cfa58427ea728697ceb3"],["tags/和平/index.html","a7f29dd496bc220b7a43194acbedb94b"],["tags/响应式/index.html","92d9803bec0e01634a4999b4733bb333"],["tags/哲学/index.html","edb317968180616aae1bcbf045325806"],["tags/回家/index.html","4dc6a9cd40d1c5c0a7c6a3e370e0efa9"],["tags/回忆/index.html","fa71b0c22225044af0d1d4c4b3e18d7b"],["tags/回顾/index.html","c7a8ad775aed2247aeef0c8a938611d5"],["tags/回首/index.html","e6a7774e3b1290cfe6524d53df60b3b5"],["tags/图床/index.html","6167b62f14b172fb8ff918d10b63f2d5"],["tags/图形/index.html","f96f6df467af4d0f169731a8bd6395f7"],["tags/地图/index.html","a807bc9c85bedd2325ed6b2480a6e8dc"],["tags/塔防/index.html","72113d52aaa0d211fd50a8caaeec2e53"],["tags/增强现实/index.html","041d74af50b5c5a02a6f7e7bb299a5f8"],["tags/壁纸/index.html","0810674531ae32313d4b921e5f7b9ff7"],["tags/夏目漱石/index.html","c59c8aaaacc12e12a26f08f4716095f3"],["tags/多线程/index.html","9f6bcfbd88146416be2578697087a914"],["tags/大护法/index.html","b69669ec21ef9a89947005ce93a4b76e"],["tags/委托/index.html","bc7d6e2f348b0b915cfbcd99bc100635"],["tags/孤独/index.html","acad8d75145040b524cd97b4787c6531"],["tags/展望/index.html","c3a71672614b9bb6ebf77d3fb777c1ed"],["tags/工作/index.html","588cb687f4efb06ed8d5db6416664796"],["tags/平凡/index.html","c035fe91f97a8968f28085c6a56b07d1"],["tags/年华/index.html","a1a708e6cac70d17ec44b6f88ba953ac"],["tags/年度/index.html","866a0c11e871495c6c32f4e4528bfcb9"],["tags/开源/index.html","51ad1e2cc2f3fc7790d4c6c17b98c8fa"],["tags/异常/index.html","5f94db4042433b110e7cb7fec6b1ee74"],["tags/异步/index.html","2678c0a5021e563cd58f3fccb6a255e3"],["tags/引擎/index.html","0e054316eed11b38986cf18f808fad59"],["tags/影评/index.html","cd20693d36eab6d314f07a07c5e6f3b0"],["tags/微信/index.html","4c9a595f82eb83a3ef94e99bd64cd999"],["tags/微博/index.html","1af7c890e01c6b38c105cb5da109eb17"],["tags/心情/index.html","48b1d80788e2e39d1946382c0a1673cd"],["tags/思维/index.html","12ff5fbbc615c95747122433b59550b1"],["tags/总结/index.html","9d0aa5b1adc26d115eb187d5be16888b"],["tags/想法/index.html","542da003b9fde61cec0d2de1b5d9cabe"],["tags/感悟/index.html","4ffc0cb7f3e268544177e3bae274010c"],["tags/成长/index.html","8599886939553bbef7ba7b87197be999"],["tags/我是猫/index.html","2d53b8e4a3420b5877aafec877e23929"],["tags/扩展/index.html","c63c159ebb1b357ff840868dd1ab73d7"],["tags/扩展方法/index.html","6213af9506047cb43b3968ffdf4f8f38"],["tags/技术/index.html","b073e67d15238c4d17d60a47fad52e6c"],["tags/拖拽/index.html","4bd30b69de318baa7011bbf15dcb0deb"],["tags/插件/index.html","3f87e93e1f8e2f7d05593d7440350e37"],["tags/插件化/index.html","7042f70bbde5d0c6795af0776fc11aed"],["tags/数字/index.html","64e81a97b5e48f15105c6067b3279376"],["tags/数学/index.html","af5d0dd056c8f2f3f14ea3049cc86950"],["tags/数据/index.html","eeab7e7cf4f5a771ec6a3fcaa8735a68"],["tags/数据交换/index.html","322e83877c690168808fc3c4eac0792f"],["tags/数据库/index.html","141ce54ea28f8fff47730081ac236be0"],["tags/文本分类/index.html","1b583e45e38614e9f7124422a26f374d"],["tags/无问西东/index.html","bc0393a0e0b27070bf23bc14e8646531"],["tags/日剧/index.html","985244f14ffd53ac978895c715fe786a"],["tags/日志/index.html","a8000b9f702dca15f386217b217ff917"],["tags/日本文学/index.html","bc0ca455a28913d3ad6bcbc8ee38c698"],["tags/时区/index.html","c6d67735c155ee8b0c56f491e2843e4d"],["tags/时间/index.html","004d87d00d6cd24cb3b30df844cbe75e"],["tags/服务器/index.html","8d1b633d09fef9a3cfd47f8e1c17ad4b"],["tags/朝圣/index.html","7eff8c6295409b7ecdc3c42be96992cb"],["tags/朴素贝叶斯/index.html","53c57be76802a6fa49169c62151df212"],["tags/架构/index.html","98ca259456019d72c3e1762c051414d7"],["tags/标注/index.html","58c2e569f1f50a8ae081f59bf7ae803d"],["tags/校验/index.html","f13a78f9835c7ff785dc7e37237318a3"],["tags/格式/index.html","51a45739045c50916bc7b0ff60ee087b"],["tags/格式化/index.html","1f71c4afcafebefca56f27229d988035"],["tags/桌面/index.html","b40db3f8f79f7b285bd223d6a91af983"],["tags/梦想/index.html","5bb44dbb732db65c213bdfdb86581c34"],["tags/概率/index.html","bc4249e9dd3d1e44d22496b88258b3e9"],["tags/模板/index.html","308779d1d847503b1f68e6bf04082c79"],["tags/模板引擎/index.html","32aba1a182abd9884c4b04154a4ce798"],["tags/毕业/index.html","69b41355b3b3e0859921b802ad98add2"],["tags/毕业季/index.html","468597e853a3f74ab57962fa9970a48e"],["tags/消息/index.html","715dc07ddce40d7c7498b96cc63552a9"],["tags/游戏/index.html","e38c7e741a40770ca630d82ec8e83f24"],["tags/游戏/pages/2/index.html","2c5eb6a7d56dfbf3ebca9e31bc5cc5ea"],["tags/游戏开发/index.html","6986d13bc4070d92f6825a3c938ded5a"],["tags/游戏引擎/index.html","30be46f3c97a06b600a33068dadfc3c1"],["tags/爱情/index.html","da20194cd9d023e8864f3104d5323a81"],["tags/版本控制/index.html","bef7c696d71062140c59a3b6813a00f6"],["tags/版权/index.html","573b295623b10e0d31f17927bcef0503"],["tags/特性/index.html","03a12b6e853b58d085acf3a1ccf923ab"],["tags/状态/index.html","7ae6804ca2488ee9475d241f8ba0cae7"],["tags/现实/index.html","ae22ccd1d13201505242a1a6872edcc1"],["tags/生活/index.html","f0ca431dc65d76085f84036b073330d0"],["tags/电影/index.html","4be95190270000695bb857d5728f1a73"],["tags/画家/index.html","2420b4b71ac62a6e9f47ad3ef780e224"],["tags/知识共享/index.html","a2dba3d1b111944f376342708b63b16b"],["tags/矫情/index.html","8d3f49d151279e49af987e15170812a1"],["tags/程序员/index.html","95274d158c74ab110ed5777b4eb5e7fd"],["tags/穹之扉/index.html","bb13e94dcd4af23e7833a3f14d7eb85e"],["tags/穿搭/index.html","b69faf9e755adca7444064eecbeb763b"],["tags/童话/index.html","2f79c18ab3b45b4ffc3d485a409f7c31"],["tags/笔记/index.html","05e00b4135a645ed0a1b4e1f7208026e"],["tags/算法/index.html","0c1791e9362c03e01ff56786adfc8b79"],["tags/米花之味/index.html","989f7eafcf132f9a800b3ff8c62a14d7"],["tags/缓存/index.html","2e6a3396efb412db6a8de6e079f0550e"],["tags/编程/index.html","40c82401b076ffc83650982d9c47e1b6"],["tags/编译/index.html","3bb367224066990c7fcf84a5f5643740"],["tags/编辑器/index.html","00789f11701e32e611af6487105836a3"],["tags/网易/index.html","71c11f54e7fc24058576efbe270dc7cb"],["tags/脚本/index.html","4fb3744614f48a1ad9c364a6cd6feaa1"],["tags/脚本语言/index.html","3c239b6071021d0f4fa497be554a4916"],["tags/虚拟摇杆/index.html","1e73e1d601605f32be48b3a480e89085"],["tags/蛋炒饭/index.html","aac0835b5d790be4e236fea63679a5e0"],["tags/表单/index.html","c65192281dfea9ef3cdf82463a2dd779"],["tags/装饰器/index.html","716af9052aab289b4c33926bb742a010"],["tags/西安/index.html","c995868e866aad243312b37c50b2bb6c"],["tags/计算机图形/index.html","47db7a3215b027a3825b2afb31b5164c"],["tags/设计/index.html","52b3418c5ded8de87bcd1915805a32be"],["tags/设计模式/index.html","e93e141b41c272c02424735ed000c28d"],["tags/访问量/index.html","2cf86172ce7ba14532ef3587d30b1215"],["tags/评论/index.html","8cfe92cb58cc8752132560c379f4a6a1"],["tags/词云/index.html","f5b572e7f2bdb6ea2fc3a0e32653a5b8"],["tags/诗人/index.html","dfa34c8b048d462eafdfcaf5c4a5465c"],["tags/语法/index.html","c60cbd10e82f46aaf1f596f6e054266a"],["tags/请记住我/index.html","7cecf098ba2e6c892dfe3431b15cfa85"],["tags/读书/index.html","24ab4323d9c075004d8fd12c9617f3ac"],["tags/读写分离/index.html","655861873e8e57d617d0da6c57bb2df9"],["tags/调试/index.html","687050130411b09461c534007e07c28a"],["tags/贝塞尔曲线/index.html","ba38dc78a622092c36e0057cffdd6aa0"],["tags/贪吃蛇/index.html","4815b379a0463008a8d4753cd27aaac6"],["tags/资源提取/index.html","e8fbfcdeb54a8b0a3486e15f4b15e8e9"],["tags/跨域/index.html","367aa8587368e3cfea402c9579a39436"],["tags/跨平台/index.html","33c6615ef6c93a8804734b8af7eaf56f"],["tags/转盘/index.html","226c8504fd7dac6263f4b65603f5c667"],["tags/迁移/index.html","2fbd0584e7017500c7f644c84c0fe5f2"],["tags/通信/index.html","decef99d850dd88d9f9188d7aa94f95a"],["tags/邪不压正/index.html","a7c55e62a0dcc199dee187e25a9289c1"],["tags/部署/index.html","9672ae481133fbe0cb77e661d92587cc"],["tags/配载/index.html","39b252951eb8c9ce09b1616d4dd29fe1"],["tags/重试/index.html","18c4c5a8197c9f54e83e1036a37454b8"],["tags/长安/index.html","9c3d331de4c2add33703b743a0a36f41"],["tags/长安十二时辰/index.html","a8bb56edc50320fa7f856d8cd7f7d7f7"],["tags/阅读/index.html","ed97a1770a6ac7d2e5f7bae61c18bfcd"],["tags/阿里/index.html","4d84e68514560166a1cb652f63000258"],["tags/随笔/index.html","936223131f5151476d6be289563a4343"],["tags/霍金/index.html","14d7dc2ccc1baa6c45ff36bf6dca63f1"],["tags/青春/index.html","6ecf88fb9f3df9141dc863360d80bea8"],["tags/面试/index.html","42e4aed98d7e1c2982b3803b1865caf6"],["tags/韩寒/index.html","c0535568e59e23fa92ce81db25c02624"],["tags/马尔克斯/index.html","57deed8d5a6ae4e1b836123555d5987d"],["tags/验证/index.html","ede1f2fc47dbbd2bb85e8e6d748f2115"],["tags/黑客/index.html","ada5a8a44b7fe901a17add4a41542977"],["wiki/index.html","4f368ff7f83a64c9899c3097d2d84d01"],["works/index.html","d7818231f8852c27fb6cc5e88c921e48"]];
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







