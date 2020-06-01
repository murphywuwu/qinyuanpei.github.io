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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","7e27b644b69b12e38a219de43eb52e14"],["archives/2014/12/index.html","6e76bf27ca4ec43026469c243c2b50c0"],["archives/2014/index.html","7ffff3be0c73d450703de4e6f6e3ea43"],["archives/2015/01/index.html","63c7bd70dc2e4bdfbecee48b747ace53"],["archives/2015/02/index.html","a6d220e03282fd75fa18fff8fd39a799"],["archives/2015/03/index.html","955a2110a18c6620701867118c451698"],["archives/2015/04/index.html","2ce3b9e204f5443a7d8c3714c3764712"],["archives/2015/05/index.html","cc19e68c580649510f919b5ebcb10937"],["archives/2015/06/index.html","c4e43a819336e88c4970d8b5192417ad"],["archives/2015/07/index.html","f3b8e06eddc9215ec57ee6abcb30b9f3"],["archives/2015/08/index.html","d9c154bfbd93f6195705032740f84107"],["archives/2015/09/index.html","eef941d5b2eb8934df787c09175efd9a"],["archives/2015/10/index.html","22922cc9482631e83a80affa57eed245"],["archives/2015/11/index.html","cb76de6bdc3258dcff0c0af7621323f0"],["archives/2015/12/index.html","3c97cdd02fc82bb30210297fd96c5956"],["archives/2015/index.html","e0e0a38ca0f99312eb7b6ead7ce70905"],["archives/2015/pages/2/index.html","cc9057608f8dd89b3b51787c6a63f0b1"],["archives/2015/pages/3/index.html","c57bfc014feed89822fb1ea77737a32c"],["archives/2015/pages/4/index.html","51d5948b10581e12aa8b4a381e29002e"],["archives/2015/pages/5/index.html","7785b80da24985ec9d3ac8d287435f33"],["archives/2015/pages/6/index.html","b697808108cedc2e346c5e34f6454a05"],["archives/2016/01/index.html","0d95236c49f1ce8fb485116ae58202ef"],["archives/2016/03/index.html","b2fc01f53dd7235fd168bb5be3ba7427"],["archives/2016/05/index.html","1d23639500a3b711fedec8825afb6cc8"],["archives/2016/06/index.html","d4ecbb8c4c11e9638fcac42976949aa8"],["archives/2016/07/index.html","e04178dd20b86a9b9f0a8150d7cc6e4e"],["archives/2016/09/index.html","111bc2009cfcfa8598dd5d3fe9347d8b"],["archives/2016/10/index.html","4407ac6dbafb7feb7cdb70d5391a7694"],["archives/2016/11/index.html","c58347d2c3371eb78fd7f3933140335e"],["archives/2016/index.html","b7da99078cc6585118d9068fbfaccef6"],["archives/2016/pages/2/index.html","129b75392a9bef8ca5286dc75509fb16"],["archives/2016/pages/3/index.html","6e468766a3b33991cefcd54bb4087652"],["archives/2017/02/index.html","f9273c04755269a41a9638e7e1464e16"],["archives/2017/03/index.html","5cb454d4efaeb096b91f6b9ab8ae26f4"],["archives/2017/04/index.html","f1af977f6f5ea25b2b35f0c404989521"],["archives/2017/05/index.html","93ea29d07366023fdb2dd2fa290046ed"],["archives/2017/07/index.html","b06ea0d03859b63195b90226fdfe5ce7"],["archives/2017/08/index.html","3758ec5c76fabdf6f4337c874068cdc0"],["archives/2017/09/index.html","8eb282c08a12358eca1e616c7c7a5935"],["archives/2017/10/index.html","48efe79f72391365cebd463796c7465e"],["archives/2017/11/index.html","b420646a2dbeabbe983931d385bcfbaf"],["archives/2017/12/index.html","e5c173d692c86fa30c69cb0f50d4f15a"],["archives/2017/index.html","573c835d73fa90445a510da2edb81b0b"],["archives/2017/pages/2/index.html","84e66e3dfbf10b633a01f9b95108d303"],["archives/2018/01/index.html","9921fb1bc5292b2cfbc10407bf466dbf"],["archives/2018/02/index.html","5840e9cb567d6bea66cf5f8239a8d60f"],["archives/2018/03/index.html","e4bbdddaa4eafc59c8ed7d0809d250cf"],["archives/2018/04/index.html","ad07a525f28421a09e53c7f94771421e"],["archives/2018/05/index.html","844d7db49c3f3fa41b3ca66a4ed137c9"],["archives/2018/06/index.html","7b2f7723e3d991a142ac0f1886e3b484"],["archives/2018/07/index.html","a505f48f84e6db5cff6691a6767c0d7c"],["archives/2018/08/index.html","13b10552317f495a92519e31b29a1ef2"],["archives/2018/09/index.html","3b147da85807118f3d8f0b2a76cc6b66"],["archives/2018/10/index.html","b88ccc57bb35a10b00cf949d764046bc"],["archives/2018/index.html","b99b8711d631f70359bf187b021f64d2"],["archives/2018/pages/2/index.html","356c2dbedf40b0475822f4dc8ad4d539"],["archives/2018/pages/3/index.html","d489eaeab6bde451cd09b7c3e878eb51"],["archives/2018/pages/4/index.html","a861cfc6fa733a42e4bb93b3411a6197"],["archives/2019/01/index.html","65295166a4165b5480f89f395c029625"],["archives/2019/02/index.html","bf785f842a687df434f4712dbb9123d4"],["archives/2019/03/index.html","a4af1db661f89ee6dc4102ba5e376104"],["archives/2019/04/index.html","4774513c2585c57e5b8ee1dc5317ee79"],["archives/2019/05/index.html","b9fe3e8925c8aa655ca4586574044a5b"],["archives/2019/06/index.html","14a191f419f27a9f8e3d0b1c856e5635"],["archives/2019/07/index.html","374bcc3f5d9fbf41d96540ce391f12ee"],["archives/2019/08/index.html","08f3d6f85eef2ac38be214a6d65c05ff"],["archives/2019/09/index.html","c34336abd914b8a5391883c978d20f79"],["archives/2019/10/index.html","32042feb1d09b7b0a0c5c645341c03ea"],["archives/2019/11/index.html","376ea6c097a77aa1d02660e8775f2574"],["archives/2019/12/index.html","fbb2aa40b02c6296356e49073bbd9c30"],["archives/2019/index.html","4bb6a0c58cfb52aa9e7f3aa2a71f617c"],["archives/2019/pages/2/index.html","2bc2f70718df5a416e6d4faf0463dc87"],["archives/2019/pages/3/index.html","168b6acb9fdac76aa588ed58fcc54061"],["archives/2020/01/index.html","e48ae4af82d49c35b99a58bbc83d8fce"],["archives/2020/02/index.html","2baed4ab09f2a329c3a03b2be02f7f6d"],["archives/2020/04/index.html","460f1f8a22418ea571be98c275dd4986"],["archives/2020/05/index.html","c6e6953f8acd614d1803133027f2bc15"],["archives/2020/index.html","91e7e84bc6ff4d7e53c3784fa9d41db9"],["archives/index.html","7c3f06afdfc3cd0d7814643e6d39a824"],["archives/pages/10/index.html","b7f29284ecad6b8f6336db69b4242f92"],["archives/pages/11/index.html","676e28f977d00a9ff70c5743534fe86b"],["archives/pages/12/index.html","c04ec64ab6684b8683a006521e2c4548"],["archives/pages/13/index.html","f9f488a2a8028862e8c917d525f1816c"],["archives/pages/14/index.html","ca573a9425afd9d456d532dd7a11a3fd"],["archives/pages/15/index.html","cf13753ff95971d84be0d4bf93884e5f"],["archives/pages/16/index.html","8f9753fc23d8a5835c8591ce69a98a99"],["archives/pages/17/index.html","104ce1e1bffe93008e552df3fe62b034"],["archives/pages/2/index.html","2a9ad7ebb4bccbcc4a4de17e74ce4c5c"],["archives/pages/3/index.html","381b2591ec916dcbe790ec4b277d9524"],["archives/pages/4/index.html","f6c8f09a93e29f0b6ced90c2058ca172"],["archives/pages/5/index.html","90aa7d20103659850638ac73b084fb0d"],["archives/pages/6/index.html","f0420e115ae4b7a9c610a8afa94e38ec"],["archives/pages/7/index.html","085cb636d4381d64ae7578461051848f"],["archives/pages/8/index.html","9058365856917c69669f1ddf9d2aafa5"],["archives/pages/9/index.html","b89212abe271a3316b027cad9dd620d4"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","ce9bef9324edf5ea322c0a15e2b6cf8c"],["categories/Unity3D/index.html","cce2f2edef9bf4e01b56fbc358b01dde"],["categories/Unity3D/pages/2/index.html","9a3032a7cabdc295a6bd4b9e82011050"],["categories/index.html","d70dae4d00f88027ab57b724a6aec567"],["categories/人工智能/index.html","0acb16d101f1fcd22626f066164ca842"],["categories/前端开发/index.html","ca45791b64dc0dfbc0184dcf9a15b437"],["categories/单机游戏/index.html","4f9413604e64be85dc48274ab22711bd"],["categories/开发工具/index.html","1c7d40ac1064266c0bc66a2303cdc66e"],["categories/数据分析/index.html","871a6f2bdf4ff16b8d20aea8e845208b"],["categories/数据存储/index.html","ac849924c86b46f6ff08315a1db66eb6"],["categories/游戏开发/index.html","6c9daa97be0e83ea91a969c33d490ce9"],["categories/游戏开发/pages/2/index.html","43714fd444292ec9bbf43b9cb70e7f8f"],["categories/游戏引擎/index.html","f41a0b89521793e11ce64e7840c3e70f"],["categories/独立博客/index.html","6bbceb03037f2c13e7e55dec74a340a2"],["categories/生活感悟/index.html","d1636ebf40ffe2adc1809f5d886be44c"],["categories/生活感悟/pages/2/index.html","41e3edb8d827f6cd9fec3beaa3e54bb7"],["categories/生活感悟/pages/3/index.html","3e5b9a78cbc9959c8ad99a9f42092110"],["categories/编程语言/index.html","34bb645dbfe89bc252e4e7a7e9aa6133"],["categories/编程语言/pages/2/index.html","0bb63f5a47620278d46c398477820dd1"],["categories/编程语言/pages/3/index.html","5aafa5988c027f42d27c9272a3267e9c"],["categories/编程语言/pages/4/index.html","d9bcb01fcd8f58fb88aeb85e4fa998b8"],["categories/编程语言/pages/5/index.html","a20301accb6dd71748846428d57a3ab7"],["categories/读书笔记/index.html","7541013bc400205824b2d311bd8c4cf7"],["categories/读书笔记/pages/2/index.html","ee471a6f6b4656b0eec939607e83a985"],["friends/index.html","d698688467e556d3fc10e85279b99e10"],["index.html","299597c751ccfeaf5f5364ca091429c3"],["movies/index.html","c6ab311ccd32c58e131cd647dded1290"],["musics/index.html","c4ce925af63c77aba4110e69baee6da5"],["pages/10/index.html","e2b2a28df8fc6bf1b4bd87e9ceba6c32"],["pages/11/index.html","0e20964e9a806b924af86d6d342ba037"],["pages/12/index.html","bebbbe9a3c2ceae5d6987200261a6fc4"],["pages/13/index.html","654b0f17a29b9823aa1cda8d55ead98e"],["pages/14/index.html","eb37a224b93c9ddc638b5befe799d52a"],["pages/15/index.html","25b6c81b9cbf5b6f55fcf0ef29da5f67"],["pages/16/index.html","57b15dd69d02a79e364b4116d519fc14"],["pages/17/index.html","6e86597ea79c2f05d48935bdd7e2ebf0"],["pages/2/index.html","0687a54dbacf7e92efd76187c12e426d"],["pages/3/index.html","170afee10598342edd99f1ea47a2a1d3"],["pages/4/index.html","b5200d52f5134ac4dee3f5bf01910690"],["pages/5/index.html","ffcab2e17d5137c648e8ed4747ff0ff5"],["pages/6/index.html","a0d619b807d553b83c0fd8b6c62de240"],["pages/7/index.html","d1f50ee06f054f572991e6df748c5c44"],["pages/8/index.html","dc50aef44b845c8b818323544d1f7e93"],["pages/9/index.html","501b6d3f36f65c33fd35d2367ab84ffc"],["posts/1059499448/index.html","83a1c7e653f19229b9d7f0cdf61b906b"],["posts/1071063696/index.html","446701bf5af6e67f974522183651dbba"],["posts/1082185388/index.html","35f68220bd38f9cbfee228a751225616"],["posts/1099762326/index.html","b1c4d7f9284ec3d48a7bb2d528a97f1a"],["posts/1113828794/index.html","36503053cfb5d7ea2a0cc1cb95c4ee9b"],["posts/1118169753/index.html","4b1024f0c56aaa1e31dd50d90153a247"],["posts/1122710277/index.html","11a9a3b533682e04e98bf7090086392a"],["posts/1124152964/index.html","49bc90df7e1490cd8f9c5636bd8278b2"],["posts/1127467740/index.html","94528e6f903ad4449d01281c4b1d34ee"],["posts/1150071886/index.html","9615a8ea432f9d83d1af4155f40865b3"],["posts/1150143610/index.html","261d2b3ae776cbe8165d115a1f825b9d"],["posts/1152813120/index.html","ad2d490ebb9ce6f1bcce0c7e3339953b"],["posts/115524443/index.html","a1be57761b3fcc142515b2f9e026dff2"],["posts/1156673678/index.html","05943e98d751f3790f07d0dbd80c6a9a"],["posts/1166840790/index.html","3590b5b46c8145ad9be5dace88f6a1af"],["posts/116795088/index.html","314b0eea0be629c981e42171d856c284"],["posts/1176959868/index.html","de69cfef6e539b5a433aa9ee4bfb4fcc"],["posts/118272597/index.html","05464e3cca29d8071c4716a02a20738f"],["posts/1190622881/index.html","2b98d2c9bf6cd32ce55bdbf1c336d0b9"],["posts/123663202/index.html","b38a3a3f8d9894a8462f298496c507fa"],["posts/124807650/index.html","1eb4f0cf8eefd6baa5a5b9d121451713"],["posts/1254783039/index.html","3c02122edc1770f993424c5534935fef"],["posts/1289244227/index.html","38d7b1aa6fe4ce6b4aae43c420bac150"],["posts/1320325685/index.html","144fb5e860a30e55a77803a322afe837"],["posts/1329254441/index.html","f99ccf8848a70c563816df7f6b88135f"],["posts/1357715684/index.html","130e88659ed1e5c565266f8381ff0dfd"],["posts/1358971951/index.html","55567e8b1b41e5186dc5c288e80c9aa5"],["posts/1386017461/index.html","a5df83ade64391e7e9184a67eea5bfce"],["posts/1394521917/index.html","ae4692a48f8a93abf3c010f9f00938d2"],["posts/1397717193/index.html","f0ea83533c1101301dd4c995fdb46329"],["posts/1417719502/index.html","01b1ccb5ff71af526a7757570340c4c7"],["posts/1424645834/index.html","b9fb5e9fd9d434f9b484b8481de10c0f"],["posts/1444577573/index.html","df394ea2bbd17963ed3144bdcee71e70"],["posts/1467630055/index.html","963330f7fd460b4f3f0cffc5d7ae135b"],["posts/1478979553/index.html","2ad75d7e74114d6b85842c7bc6dac276"],["posts/1540537013/index.html","b6c1c465f35e92b1bdff2b68d0699e4a"],["posts/166983157/index.html","8c04887f2f82de5061ac5b11de662266"],["posts/1670305415/index.html","8148fb7e1299dd520e5e6f0c7e6d0dd4"],["posts/1684318907/index.html","173d7196858ea0a97b3ee0be8bb3a764"],["posts/169430744/index.html","2bfdce9a57446e5c92506b0a6dc4ddb8"],["posts/1700650235/index.html","9e0abd12b7a67080ac0586f4504afbed"],["posts/172426938/index.html","2788c843ce0ea71effa580eca1410a2e"],["posts/1836680899/index.html","b4feaafba817427ed09c1a9ecc0bcb27"],["posts/183718218/index.html","8e1a04434c69989fdeb21a074fa4759c"],["posts/187480982/index.html","ec63b31f5589850d67fadc4a02781a32"],["posts/1930050594/index.html","6484edeaa1afd26482c9c833d97383e5"],["posts/1933583281/index.html","e30d29b4cb9af463703c42f6906641e5"],["posts/1940333895/index.html","783cbbb4088e1beaf185a3dadd444600"],["posts/1960676615/index.html","753007641c68d778cf39f421fb214568"],["posts/1983298072/index.html","c0fa55618f4b4c55422a24fe35f1a0db"],["posts/1989654282/index.html","1820345769dd83abcfd7d3d784fe8ca9"],["posts/2015300310/index.html","81cdb97e716803f7d0d3eb4a117e8bb5"],["posts/2038378679/index.html","03b1895b64c38031d4d52f25230af911"],["posts/2041685704/index.html","9d8ba56e259ee2f3c651df181f1bcbf1"],["posts/21112647/index.html","25286c5d78e4e319f79e2aef71f79ca8"],["posts/2158696176/index.html","f820e8055e078f7f5b99a2f823304b80"],["posts/2171683728/index.html","2f6570ada4e331b19eda7f61b50ee79a"],["posts/2186770732/index.html","8d052c9a9ed3dccf0806aa72ba81ef3a"],["posts/2275646954/index.html","e269934fb274723cf673d860ce998c0b"],["posts/2314414875/index.html","f353ec6d4461651d72e84fe7a0105d8f"],["posts/2318173297/index.html","b50df67cf248b48eda13883fc852f9b3"],["posts/2418566449/index.html","7956f1c5017c7954172dfbffea4fa557"],["posts/2436573863/index.html","0831fd19085cf22ddbf498a9b6d653bd"],["posts/2462008667/index.html","3cd8eee467e80c9a588acaca40c62c8e"],["posts/2463121881/index.html","a4bbde03b1e6ec6476db298b3802988a"],["posts/2488769283/index.html","363e17432d35ae5f958a4e7ec538d4d2"],["posts/2527231326/index.html","4d74589d8153c88926ab3c9e14121d10"],["posts/2583252123/index.html","18d05ff76d4c7c2030c54efaea1703b3"],["posts/2613006280/index.html","769f6f824ec37d198bfcef9a4ef92ef5"],["posts/2617501472/index.html","76fa5ef7eab95d165aee40d4138f43b4"],["posts/2676125676/index.html","edb1cdb3826f0edca406c9e63dde637b"],["posts/2734896333/index.html","9d4c831fea420209bbf2d82dba509374"],["posts/2752169106/index.html","7958ace9bb1cc316e00fb0f1dab61b68"],["posts/2799263488/index.html","cf06aad6723bda85fb386fca79a54236"],["posts/2805694118/index.html","407e55365b98a5036cbe456aaf8814b2"],["posts/2809571715/index.html","bd551d337b7de09e30749173d055a0c4"],["posts/2822230423/index.html","caf520d11c661905d3b3129d0ca0ffa8"],["posts/2829333122/index.html","6b2e6295fcb5448a16eafeccf7d7f00d"],["posts/2911923212/index.html","e9c885f895a676d59c1c3fddac644b9a"],["posts/2941880815/index.html","4e6ef37a3b88e17cb7406b8b64fb1b6d"],["posts/2950334112/index.html","09534388a4843aa5d97144498a60022c"],["posts/2954591764/index.html","f516adca7e147406ab4d06e0af79d777"],["posts/3019914405/index.html","8b3ac104fbc47764bbd3b5e317b87271"],["posts/3032366281/index.html","8d6be7d1ff4bd4ce9378527dd7799e00"],["posts/3040357134/index.html","fbbb83444941c728f092292af2ee21ea"],["posts/305484621/index.html","80e840d7a6437ec88199c638223c4b67"],["posts/3083474169/index.html","2a8a374b8b8d77f9fbd24060160ef5ce"],["posts/3099575458/index.html","9f7cb087abdb8a7d1be931a07c8bc4a4"],["posts/3111375079/index.html","17445b35b7847f041f8e4b7749d525d3"],["posts/3120185261/index.html","9ada97263a618bb6287a2ddd4f7eae67"],["posts/3131944018/index.html","8f4fb0f8055154cf9e7cbb2809f9b9e6"],["posts/316230277/index.html","2b8c5f6973245f60e913cd250e7c3551"],["posts/3175881014/index.html","530efe03ca962de395c7a2be41d4ed76"],["posts/3222622531/index.html","fd3e518494d33f887d7e5f676057aff3"],["posts/3247186509/index.html","88f2c426f72d3114ed40f888ceddde87"],["posts/3269605707/index.html","97cb9a26f257c1a01e5ba32e7179b528"],["posts/3291578070/index.html","973e1ee35c35f6f2d397a0cb96120e06"],["posts/331752533/index.html","3a0079dcc179a9e3dd6acaba79a68b5d"],["posts/3321992673/index.html","86c435e213bf182b934bd7b272fe782f"],["posts/335366821/index.html","2fb8f4897ed42db722f1f5109dc7ab66"],["posts/3356910090/index.html","0fba7f3d302caa28b41769172aa4a64a"],["posts/337943766/index.html","ff0650121050536190e65e2c4b64d71f"],["posts/3417652955/index.html","2a29fc5bde6e14f9a375473b9394a34e"],["posts/3444626340/index.html","3b3f84fab2c1c9d9d1beb2cce1734c05"],["posts/3449402269/index.html","b0bb8e32f3f0bb65039d57d0db3edcf4"],["posts/345410188/index.html","62ece2c9e52a73d5fd39f51c95e979af"],["posts/3461518355/index.html","b7c8606a3340e28874f659f33c839da8"],["posts/3494408209/index.html","6aa3ee06a66c6db066d4e499ebc17153"],["posts/352037321/index.html","ec8db369f203ce1474edbf1d13ab54ab"],["posts/3521618732/index.html","1d297aca819bea5816b680e6393c10ed"],["posts/3568552646/index.html","ea50ab2610ab55ddc6c2edf5d875a0dc"],["posts/3603924376/index.html","992c0d6ddb63ac91e105bab0111d1463"],["posts/3637847962/index.html","a9995347985d61cfcac43d9667f45aaf"],["posts/3642630198/index.html","a8fcf6b47b66b46c7d03e548cbe93cea"],["posts/3653662258/index.html","7e3c7d23de47cce0bf6a66976ffe8d57"],["posts/3653716295/index.html","a6900d2396f8e760e143286d80231ed2"],["posts/3657008967/index.html","30a3b454289083d8fb5e1063701c8958"],["posts/3668933172/index.html","82a5dadb057b639242867240d9ba1f5b"],["posts/3677280829/index.html","23ed93d82c8aeccd4a709d7d0bf2532e"],["posts/3687594958/index.html","4ab8bdd8db926e773522a2e7a2dea5e9"],["posts/369095810/index.html","612a1052cd293241c073dd7e7dde605b"],["posts/3695777215/index.html","67326b16d9b385a143ff38f45cfcb659"],["posts/3736599391/index.html","a77644ef736d767f0819b69145b77109"],["posts/3742212493/index.html","cd619403fcab27c0fa785fb402ae1650"],["posts/3782208845/index.html","cf73c62a6f7453a97b22eb4024abf9c5"],["posts/3789971938/index.html","ac7cec60db894426e83d0239cf36c8b9"],["posts/380519286/index.html","fd13bdfaf2ec675ff62c8697c0f54bc1"],["posts/3846545990/index.html","11ce7e22888283a5654f9d07adb3236e"],["posts/3873710624/index.html","142a87832f69aa7c63a03622fc8bf21f"],["posts/3959327595/index.html","29c1cd7f841aa3ebde1982a82fea88c7"],["posts/3972610476/index.html","bfbaf55c1b246715b45949db798c0e40"],["posts/3995512051/index.html","acfbbf8ee40f46a6ad1983c058ae7a15"],["posts/4088452183/index.html","74a89a120bccb83d7029595addd0b503"],["posts/4116164325/index.html","858fb3094ed8a87317eed1f3d054bad7"],["posts/4158690468/index.html","080d30a2761a3850964d3c1e803f3c36"],["posts/4159187524/index.html","81dca7ec1f108bce8a7937d97e5903bc"],["posts/4197961431/index.html","68540a3b83c6e7065e1f7a43cc504f2c"],["posts/4205536912/index.html","f60f4fd97ac70686e796752be4ae2374"],["posts/4236649/index.html","d127ad8f03eb2327376ef8976ef9bded"],["posts/426338252/index.html","b0c5fe96a8662baa1ffed47a0fe8f02d"],["posts/450254281/index.html","d549df7a8ba076977f3e20381c57bc1b"],["posts/4891372/index.html","77eda3d3c753d512a0354aaf56c61420"],["posts/569337285/index.html","ce997a5989aee5ac78d529128aa31bae"],["posts/570137885/index.html","a4c1a0ffc649302d2c3d2577e45e09b2"],["posts/570888918/index.html","d2c5df7eeaf97a4022d84d8a3d1dca19"],["posts/582264328/index.html","ea6b615470ddd9ea36983c095df231be"],["posts/632291273/index.html","2fcba97921a6c75b741aec9dfd01f0d3"],["posts/70687890/index.html","bf58d5a7928f61c899645065f8eb38a7"],["posts/719322223/index.html","25f0616e68e77793dd2791d9bb9fba71"],["posts/720539850/index.html","932f959e41b155146a37b1b79be5a616"],["posts/786195243/index.html","4d029094205fc8ed1987281ce18a63c5"],["posts/795474045/index.html","9f1c9de7b630c835586e808a1385d84f"],["posts/815861661/index.html","06fbad0ae1631cf91ade02c71615e489"],["posts/821259985/index.html","ed0a08d499370f9006189c63b21448f4"],["posts/828223375/index.html","1acb782b552a5e3aae70cd13f3632d5b"],["posts/887585917/index.html","2ad05b3679dd669e96cee38764c1ee81"],["posts/888549816/index.html","da9c2ac336065491cfbab1c0277deb01"],["posts/906436376/index.html","71f4403fd6f38865eef8126a5f268948"],["posts/907824546/index.html","f1b9261ab9bfb92f6650777055ca2520"],["posts/927393529/index.html","d9c1be440306eeb24e610e0d9c45db8d"],["posts/94443781/index.html","1cf7123076244d781fdf43f17240573a"],["tags/2014/index.html","4192e10ce4d2544a5a2bcd6702566589"],["tags/2019/index.html","172266e22a47888ae318a8613cc7667d"],["tags/AI/index.html","baae08d282c33d4d1d2efa27ec2edc4e"],["tags/AOP/index.html","b8f319e966fd219951f92d3e214e41bf"],["tags/AR/index.html","847edf27d09444af4763dbddd0a3e3a8"],["tags/AssetBundle/index.html","84f95f8dbbbac5f8d050b8ab5e06bf0b"],["tags/C/index.html","507c50327634142a191214cd1704dcc4"],["tags/CDN/index.html","f8295984f4ba3ee4946613a0f64a4b9f"],["tags/CG/index.html","ee495ce0e8b5a1fea031f593dbab6a0d"],["tags/CI/index.html","c733eb9e3454c874905af5a80bee2e45"],["tags/CORS/index.html","fbc01055af363d93db548377263af5b3"],["tags/CSharp/index.html","60e26d96a67bba3c1165b52d6b6a89d6"],["tags/Castle/index.html","61cce006e786d5ad1dbda50199e3a380"],["tags/DBeaver/index.html","57a2f9788a9431882c9f32c945566dd0"],["tags/Dapper/index.html","42039b427be0d11ecd98bb44dfd8bfa8"],["tags/Docker/index.html","ebb221527900cf0e5224b6209241b3b9"],["tags/Dynamic-Proxy/index.html","d5ed3a093655b7485b1049a7d0e6f684"],["tags/Dynamic-WebApi/index.html","31ed90561a91cbe805bb7051f785eecd"],["tags/EF/index.html","8cd0b7fef63a2a305f05cd365e8eecde"],["tags/ELK/index.html","a4c3fb9d4aade64204b360c3fd46e0ac"],["tags/ES6/index.html","b134e563a0acea3d43304dc8db692f0d"],["tags/EasyAR/index.html","47733e75bf07dbddeb0617f87d260a01"],["tags/Excel/index.html","3f2b4d8231cb614becd84f24934ee474"],["tags/FP/index.html","71bf92a6e3dea8b3e9515371cb3789e7"],["tags/Form/index.html","6f7d794ac786e6ceb86fd2a009eb2b37"],["tags/Git/index.html","add7aaddc2be20a1161fe031a173542f"],["tags/Github/index.html","2a162acc63b60a63138122e4a50d1e58"],["tags/HTML5/index.html","7d9c6bb9e9977d42f266443c3d857bab"],["tags/HTTP/index.html","4c52c4da962e9cf79128dcd25a14032c"],["tags/Hangfire/index.html","e7d39a6b0fb007bd16934208825254cf"],["tags/Hexo/index.html","a405918ffd983e1842e18e571277788c"],["tags/HttpClient/index.html","4a3ae703f165a47b31d00bfc59c90654"],["tags/Hyperlog/index.html","1c166df54868256ff0b2e6bffa503e76"],["tags/IDE/index.html","04237e10cd910e953b182991ca3ac4e6"],["tags/JS/index.html","cff6181c7fdd76f4a4c77c83e0dd8d8e"],["tags/JSON/index.html","21ddb17d6606fe07d06279c2884f0ba1"],["tags/JSONP/index.html","9946de9741a6b5fc70dffc08777e244e"],["tags/Java/index.html","59b855f83a8c26819c26bd8232cb442d"],["tags/JavaScript/index.html","a9f22f5238052b972a31d31ef91900a3"],["tags/Jexus/index.html","478a6b4b27fc54b7b585dc4376d529c5"],["tags/Kindle/index.html","761e4b5bd3f480e4d277ea0cfae29f05"],["tags/Lambda/index.html","ce382dbfa8a9360f6f5c847720b724a5"],["tags/Linq/index.html","bf4b705e8275ff544aa6dbbf10b7dd07"],["tags/Linux/index.html","c63757915b3221dabcc25ffaf63a6c07"],["tags/Liquid/index.html","8f24a1e71525cd1b1b073acb11a5ac96"],["tags/Logger/index.html","67aabad666828005563d860c72810cc9"],["tags/Love2D/index.html","68bdeee4150344377d32a4a1bf827462"],["tags/Lua/index.html","575088458bc0e62d1472c0d46958b6b7"],["tags/MMD/index.html","4ccd34d7a8a5a469a0a72ead87bf3895"],["tags/MSBuild/index.html","0a316b10d832b0d915e5d3241528ef0c"],["tags/MVC/index.html","f914746799fc03e77fb04aeeea5b9674"],["tags/MVVM/index.html","ecfff8139607074c7d156012f2762db0"],["tags/MapReduce/index.html","136609ca0a52f70acb010a914f4ea429"],["tags/Markdown/index.html","d9537516012769a6e5fe9c29932486ad"],["tags/Mecanim/index.html","2d2dae0a7f267770dd7b921fdc4ade93"],["tags/Mono/index.html","275bc850716b4a207fb4949607d4bb4f"],["tags/NET-Core/index.html","7056bb1950a5f38910eaad7f5d506e0c"],["tags/NET/index.html","85ff688e5b78a2c3c78952002559b894"],["tags/Nginx/index.html","ce05a85e7e753dbea832446ce557ac95"],["tags/OBJ/index.html","1fa078d9c387eb1b46044ac9d1f19178"],["tags/Oracle/index.html","25155d62845ce0177087b2e68b7f075b"],["tags/PL-SQL/index.html","a685889a30668fcca82c1a6d532edfc4"],["tags/POCOController/index.html","b7d74bcf9570c0ad4bb726a0e7a76d97"],["tags/PWA/index.html","7eba7827cb39cc3a2614d3806708b961"],["tags/Python/index.html","83349a0015331d583ea4211ca3ef7947"],["tags/RESTful/index.html","0ef91799bf2bf2054e073baad34379b7"],["tags/RFC/index.html","61acf25809941dfe8495fb8a4a021cf8"],["tags/RPG/index.html","cebb0d37cab872ab78d2be36582b0c50"],["tags/RSETful/index.html","03e343bb493b7783d01c6e0f4383fa0a"],["tags/React/index.html","ae6a78535e29363ebdef9e64c139f6b6"],["tags/Redis/index.html","85d02f38f508f9a326dfa743cfe3fcf9"],["tags/Referrer/index.html","6cb156c1415402d3fc97a96baede8ad7"],["tags/Retrofit/index.html","9fa0b164a777d5c5962d95396ceb3a4a"],["tags/SDL/index.html","3aa5dcfd5b702e8335148f1330bb9e64"],["tags/SQLite/index.html","b09549bd2c5a4cd7baf11c39a27a4cd0"],["tags/SSE/index.html","154ade258c8a096eeeb9fedf6fb850fe"],["tags/SVN/index.html","d04730f047a7cfcdb9468b7681551224"],["tags/Script/index.html","a4631fb21af3e4a4a8ebda485471eb27"],["tags/Server酱/index.html","05714288323ac36f688a89628c56d5fc"],["tags/Shader/index.html","05e06255284fcbb131d099b0743953db"],["tags/SignalR/index.html","7104bcf8bd344bd44de865ffe0eacb36"],["tags/Socket/index.html","7e821393496c87f88c7a3a1f718b8331"],["tags/Sonar/index.html","672e9355a849b7b0f29bdc260ae488d0"],["tags/SourceTree/index.html","042e12ff79c429fbdea49f03f6548f88"],["tags/Sublime/index.html","430dc76934b7a63ca711a4ac718bd947"],["tags/Swagger/index.html","c95de83a456264f171ced5917f30a0a2"],["tags/Trace/index.html","08704220d28dd1dea22a8f35553a0a60"],["tags/Travis/index.html","19c26f7faa7eaddd037844d43e0c6ed2"],["tags/Unity/index.html","5129756df5292c98f9847cdd3ac66673"],["tags/Unity3D/index.html","282926e4fffa2ef1fedee2f75d8e2826"],["tags/Unity3D/pages/2/index.html","3d82459ee6395ef6695fbe4899ecdc24"],["tags/Unity3D/pages/3/index.html","09299b8d4ef1847686661475830a7007"],["tags/VSCode/index.html","9edf64dbccb5f78c0296d843803a8913"],["tags/Valine/index.html","bbbf63924345308ff84b54a2a7dbb77e"],["tags/Visual-Studio/index.html","b8257cacf800a524994845ae89eb530b"],["tags/Vue/index.html","e2377d543d10b38c8b3cebb785173eb1"],["tags/WSL/index.html","d3c638cd44adc4df071647f08870d673"],["tags/Web-API/index.html","f2ec3fc6be316a36951afe433100c166"],["tags/Web/index.html","97711f5cb0f57eb314451e1a21950a1e"],["tags/WebApi/index.html","62d2949464cb55edf1030372562d0cd2"],["tags/WebSocket/index.html","b32964bfc68fd350e07d32f103992124"],["tags/Wechat/index.html","b8d8341217654f3a94c80bbb35f43155"],["tags/Windows/index.html","d82b381eb85c487b13a2b75c996872dc"],["tags/disunity/index.html","90aff3a48d538c31fa98578035c222c4"],["tags/index.html","d2d70a933f6360b0c3b733d90e3be745"],["tags/jsDelivr/index.html","be817d21fb63e51a97309d16afb353df"],["tags/matplotlib/index.html","e75d1220e8fc14b0f69aa92d0d9161c4"],["tags/uGUI/index.html","23ec60d96992621f7173c6bc6fdb17c0"],["tags/zTree/index.html","132cad4f63d61085d53a0708c823fa17"],["tags/一出好戏/index.html","b5e78544bdfbbef17937afee1e40658b"],["tags/七牛/index.html","4668dc5c9fe19901a9ac6376a2e0b86d"],["tags/主从复制/index.html","89ea30f4d419c9529156eed3a7860535"],["tags/事件/index.html","559875074f8ac2e2e24d7e3184eacf3b"],["tags/二维码/index.html","a6550288119250202834e5ebaf2065a0"],["tags/云音乐/index.html","d3babf9f4969c8b648beb51f969be39c"],["tags/互联网/index.html","66967e069f9aa0539f4bf15b7fa8c2ab"],["tags/亲情/index.html","20bf362ff335783cfeb13c36768dc7cc"],["tags/人文/index.html","3a02f3d5af33d3419c16c81c999aa6c5"],["tags/人生/index.html","e2377f1b8c9b8a4301257f6ed96ceb3a"],["tags/仙剑奇侠传/index.html","21c87b15ed6578b776b71f21a4b1226c"],["tags/价值/index.html","8f48c1a01cb78b79976b1334de3b2abe"],["tags/优化/index.html","9c079cc743c17a52a39196c702fe95b5"],["tags/全智贤/index.html","ffb535720c2432d7afa5c009b6f4f17b"],["tags/公众号/index.html","9db1e705a4cc210df0672024cfb8e4ff"],["tags/关卡系统/index.html","f80a362f958d4510d7fb9bad618f3edd"],["tags/函数式编程/index.html","c1b4fab477a7decfcba4acf243ab34ae"],["tags/别离/index.html","484bcf771920330856059534b421d67d"],["tags/前任/index.html","d5210317c64dc43d943ed766b8f57fb4"],["tags/前端/index.html","38b7f7604bfe718a91eee9437f275983"],["tags/剑指Offer/index.html","61db7e287ea2f46c5a443b64ee11ffe1"],["tags/加密/index.html","6481f7af1e8b0d32a01a1ea6e05618e3"],["tags/动态代理/index.html","61046664c8f8a60be62b76618524c465"],["tags/动态加载/index.html","4ed822e2d5dcf5853c633a9b7c59a9e7"],["tags/动画/index.html","a26a7e4e7a7165d66d606f3ec04ac5f8"],["tags/单位/index.html","f883511a8b73f6a9a9345f9165361a0b"],["tags/单机游戏/index.html","8ab8391e03404c086d15fddb81901714"],["tags/印度/index.html","7617c2e3e7e78068d5889ab638e859a5"],["tags/历史/index.html","0df5ce0056a0862dba90366eafe3cd39"],["tags/反编译/index.html","efb2c5bf27ea2f676b8ce70a707f51bb"],["tags/同步/index.html","bae8f3263455554d1ae97eef5b80a4c5"],["tags/后端/index.html","fa85d60b373a842f65640ecee2383408"],["tags/命令/index.html","9c6ef62358e2ba8b9b647f591b62be35"],["tags/和平/index.html","3fe239bab9877f638fe0ccdca4cd746b"],["tags/响应式/index.html","b6afd08b19831931a9b6f787597f3e94"],["tags/哲学/index.html","4536b1d6037d7c657eefbabd3dff1cca"],["tags/回家/index.html","f4c84e16edfbbaaa41dc3efa06fd243b"],["tags/回忆/index.html","fd0a02ae3d2397f77e41179195ad521b"],["tags/回顾/index.html","daed80f89e49433aa625ec057005c9ff"],["tags/回首/index.html","c16769674031fe782064327706251230"],["tags/图床/index.html","436a8783a9742b3a9dca753e66c87544"],["tags/图形/index.html","2c06b7890e9d815a79af0fe74bddc46a"],["tags/地图/index.html","a7f60512be7b982d201893f05394fbf9"],["tags/塔防/index.html","01c92cd27358bd8f88c266d2913ebe38"],["tags/增强现实/index.html","4f12ba89377dcad158aa42bb427f25d3"],["tags/壁纸/index.html","2575ca9d0fac22e3fdded442ab59a31b"],["tags/夏目漱石/index.html","d48b2f0a29fc60f7608cc50d44ec51ad"],["tags/多线程/index.html","8c9fa1516520f3e417f60608266e4e20"],["tags/大护法/index.html","2a0329b753151efb5dd023fea92caed4"],["tags/委托/index.html","6d1b101e9346020d3a0c36230f5bc057"],["tags/孤独/index.html","8311d7f8587834134d0ad17a50eb69e2"],["tags/审计/index.html","9746e8460844a18d202557b58fd384ef"],["tags/展望/index.html","44ae0717666dcc2d324ec1877ee80817"],["tags/工作/index.html","1a3f05d7ae3e57bc7f88a6b7258edae6"],["tags/平凡/index.html","a7ec532586433c593a7e29434d96bfe2"],["tags/年华/index.html","4ba9d392fcb170a8925a5aab371fde26"],["tags/年度/index.html","db42f561b573739733f5feaafa879f5c"],["tags/开源/index.html","26fd4fcddf4f21af987d27402750ac0e"],["tags/异常/index.html","c79ccdcd3e107668334b5df8640252fb"],["tags/异步/index.html","0bccc2b18422c67c32add275c9687bc8"],["tags/引擎/index.html","50536ed59765e16fe25de0062ffc2e2d"],["tags/影评/index.html","5562c27d53d02d3e491cdea004698fe7"],["tags/微信/index.html","12d40a1aac6d386ef1029feaaa75df80"],["tags/微博/index.html","458468a74015808ad743f27134f867ca"],["tags/心情/index.html","e9b6b727146ac2ee29e8f9208eedc349"],["tags/思维/index.html","587fae98893024a410cd5ff05939e8bc"],["tags/总结/index.html","1194cfc2fcdb893cd01ec9d0307a75d3"],["tags/想法/index.html","a0a0c6f19281a09fe4ac9d03227af9ab"],["tags/感悟/index.html","6189f325d2c07f504c8c932a21610559"],["tags/成长/index.html","3d05f558e56ab54a6a5e3a56f154654d"],["tags/我是猫/index.html","719a170451e8b0ce08223ecd9a50f34c"],["tags/扩展/index.html","3e86bfd60b8c4bf068869ea8611587f0"],["tags/扩展方法/index.html","384c3a32642cdd0d7c8bde525fa77e76"],["tags/技术/index.html","7e3c2647b68a8a63afe351ea6d7e533b"],["tags/拖拽/index.html","b5e50168b73ee9ca28a9ecbfa82aafd6"],["tags/插件/index.html","3f40022721795da42b553a245479eedd"],["tags/插件化/index.html","c74ad47663dd3b15cb2b56caddb76fdf"],["tags/数字/index.html","065a5b36a2403229330a210a121a1541"],["tags/数学/index.html","572246ed1eeb9b3570c4880690daeb5a"],["tags/数据/index.html","16f591d2183a78989b88dd73fecdb026"],["tags/数据交换/index.html","6b20abe5ba9d37116c9431cc65f7b4bb"],["tags/数据库/index.html","776eb4787c4eb25c7d8edf790e968051"],["tags/文本分类/index.html","d31c77dbd407fe58352f4f7814bf7978"],["tags/无问西东/index.html","961a4a716dcb87e76fbd2da0bb1b70f1"],["tags/日剧/index.html","1eb3f3eb4043af901030ebccbdc5a4bb"],["tags/日志/index.html","bbf7e3c39877cc198dca83cffd213632"],["tags/日本文学/index.html","2946276dc12ccf4b226b72fe6f0d4a92"],["tags/时区/index.html","9101aba833b703a2a5cda990cedad63d"],["tags/时间/index.html","6f7d01c4e9c8b0a579c262c57b8a74d5"],["tags/服务器/index.html","1942a17891445a24fda5ac3d0a0d349e"],["tags/朝圣/index.html","57c02c0edffefe586be9d5701f8a0c1f"],["tags/朴素贝叶斯/index.html","b96baf592b24bd729ea000cb51973ce2"],["tags/架构/index.html","4b49dbcd3264bdc304063ac8f36830ff"],["tags/标注/index.html","080c2e0f1675888d532944abbeb358c5"],["tags/校验/index.html","e8b84c17de56beda73eca2b00380b615"],["tags/格式/index.html","0a1b79ff683ac6f2980f0af90cbee366"],["tags/格式化/index.html","06922233942ff702f78ea6adf07ca4c9"],["tags/桌面/index.html","2bdea6ff77ec4ef1173a967e0fd41a11"],["tags/梦想/index.html","aa88b8461308f8d71a69bfa4034fd81b"],["tags/概率/index.html","3e84a54451cdce782f365d5ddcbf50d8"],["tags/模板/index.html","74f45f451757503ad21e48bdfc88b11e"],["tags/模板引擎/index.html","8ce9f20d32a09fb26ea17bc490af9134"],["tags/毕业/index.html","002c62fc0392809166d0b7e2351cf431"],["tags/毕业季/index.html","90b74b98d98c48702175801574b8c745"],["tags/消息/index.html","1f0b60e8a652848c86113578758d8ef3"],["tags/游戏/index.html","a97c96b8f19d9b86cc6ccc3a64d26997"],["tags/游戏/pages/2/index.html","6df558eecd2bebdde0168190040c5cb6"],["tags/游戏开发/index.html","5da40326d34d99d93aef8c3b8688b4c9"],["tags/游戏引擎/index.html","a5f4e4768f1c60560b75cb6f01648f50"],["tags/爱情/index.html","898d5e05414e4c11082afd2de51e2f5a"],["tags/版本控制/index.html","d285b42e17ebf2e0385004343337e383"],["tags/版权/index.html","852f9144043044a436ef7558b0fde3fa"],["tags/特性/index.html","1344c8bd9c15de841ece8ad17b809330"],["tags/状态/index.html","88c1a88353d96513f456b1caf902fcd3"],["tags/现实/index.html","71e63647440170f08e18766dab7d9ddb"],["tags/生活/index.html","00cd8341399c8b69178e37991cb69c4a"],["tags/电影/index.html","9c0dc83f0e512138dc5231a950f9d9ff"],["tags/画家/index.html","4300ef0c083d097bbdd709d16be4b980"],["tags/知识共享/index.html","11e3dd1b87e6754532a20ecd46b3be30"],["tags/矫情/index.html","9446a33984a718ae344dbc49ec491cff"],["tags/程序员/index.html","fee381b49d8a0ed8dbc75eab14726376"],["tags/穹之扉/index.html","1d6dd27b4d0af4620bdac853cc7da26c"],["tags/穿搭/index.html","a8272b2b6a9cd609a2b928c820766fe0"],["tags/童话/index.html","f683808f371b734769af8550423c7d5c"],["tags/笔记/index.html","54f46330175b1470c46a87409542cfe8"],["tags/算法/index.html","e27f94cc78af60216f54cb61e2e20f83"],["tags/米花之味/index.html","6f67415f2fccdc6258525fe793de5e36"],["tags/缓存/index.html","86e470475e82ea26613faa4cf0eb24c6"],["tags/编程/index.html","4e7956f32ec8c78b9d3121dd11f842a9"],["tags/编译/index.html","f5e76094f4607a71d8963d891a8504d9"],["tags/编辑器/index.html","52876f3b5c0ff47bcf8c6b188c5b118a"],["tags/网易/index.html","d6aa033009936da7476452bc0cd867cc"],["tags/脚本/index.html","64df599a3d404a4cf094fc9b647f208d"],["tags/脚本语言/index.html","ea60f25f3d1a377331d87803590cc302"],["tags/虚拟摇杆/index.html","a8eef4e32abe461817297d4001a93b91"],["tags/蛋炒饭/index.html","eb80bda23c4f4058e7995bc3824a06f9"],["tags/表单/index.html","062acba1eec9943cd0fabda24528c80c"],["tags/表达式树/index.html","0418c811b4bf2bb4e35d82a865a94fc8"],["tags/装饰器/index.html","2444dac9775c3f8beb160cc0554fecfb"],["tags/西安/index.html","b835f979be305342ae4f896e8d20ae8b"],["tags/计算机图形/index.html","2fc14a44f02a2a32b248a86772ae5813"],["tags/设计/index.html","f662be509d78be4ff4cedf514b05914b"],["tags/设计模式/index.html","00873b6fd962f1152f6be99ad50b9709"],["tags/访问量/index.html","fa5f67825dcafe30dae792129ee346f4"],["tags/评论/index.html","589f37a5f65137722eb13cfdc4bce824"],["tags/词云/index.html","4621a645dc81b06ecce7d2610af22ea7"],["tags/诗人/index.html","d1861c01dad4bc17f8eca069d244363c"],["tags/语法/index.html","0185c2002eb30b60111a25d25c2abf8e"],["tags/请记住我/index.html","bfeb6a276d4da17ddfc91ed7a6f64fba"],["tags/读书/index.html","c6f4e4e6eac8dd291e0d8552ab5fd350"],["tags/读写分离/index.html","159667462e8f50e6f804de9a35c1fa38"],["tags/调试/index.html","2829fcb8f9520c9efe42ef3471352fc0"],["tags/贝塞尔曲线/index.html","364d7e244ad3ae9c7670be4709957afc"],["tags/贪吃蛇/index.html","9c2434d538ce0e0bb3c0434712f64386"],["tags/资源提取/index.html","b95d1d5f1d3a596ef20ad0fb83ebe9d6"],["tags/跨域/index.html","39439cea536de753152c2b9962904f5b"],["tags/跨平台/index.html","41efaa7c10e46a9de4b3e55f7bc0752a"],["tags/转盘/index.html","992ac11ebdefe4b57e64f4b8420fec4c"],["tags/迁移/index.html","df64b68e9d60a99f445e2c67b0e11f53"],["tags/通信/index.html","9a92ce517aaa8efdc8dc068e6655786f"],["tags/邪不压正/index.html","b2d49eb15898b58406d7881fb5e05c2c"],["tags/部署/index.html","26f43b90afebf2731ec453e3bae91fcf"],["tags/配载/index.html","19d8c6e31923ffa7f3f1b98bc82d1b04"],["tags/重试/index.html","cad2495c9b1b80c674086ce4025e759c"],["tags/长安/index.html","18da834a2373babcd62028b09cc48de4"],["tags/长安十二时辰/index.html","d1470007dac645facf50a79f50af2878"],["tags/阅读/index.html","3424a3db9652b90bd9b0d1aa2581c6c1"],["tags/阿里/index.html","702851ab33f754e74c9f854dca87890c"],["tags/随笔/index.html","8fe97afa9e2e0ee840843ff22f29052e"],["tags/霍金/index.html","146b079a34c22273a0f6574a101a61e7"],["tags/青春/index.html","3524ae910f23b23937a4a5c89610057b"],["tags/面试/index.html","92745a67afa96aba5a40e65a8e2416b8"],["tags/韩寒/index.html","57caf4d4fddba36cc8f4d560f91ba76c"],["tags/马尔克斯/index.html","b3e4296bbaea296589368bc1dc91f5a7"],["tags/验证/index.html","81caeee035ab58b51342910c0c08f3da"],["tags/黑客/index.html","d95779c460fd6910be9289f4e9577ea0"],["wiki/index.html","7bb2fcd63b9eb717832bb61ce18ce792"],["works/index.html","d6da986f6c20a00d6be816762ef0037b"]];
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







