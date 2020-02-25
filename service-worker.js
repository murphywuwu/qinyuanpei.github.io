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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","ccfbc90e594947d4c9f4b16916790bcf"],["archives/2014/12/index.html","bceb9e837fb9b4e4bec1c4142ca2147a"],["archives/2014/index.html","322557d7abf40f53c4fe4227284f0531"],["archives/2015/01/index.html","017bf809944a11f62c9854605697c50e"],["archives/2015/02/index.html","4159d4655d6288054f5f586ea2c184b1"],["archives/2015/03/index.html","dddb2fd02581b421d8672fe491c5e8b4"],["archives/2015/04/index.html","24469cf409a9b699a2514b1963eb4f4e"],["archives/2015/05/index.html","9dceddfe2e43ac7cf77e0fc31d2f00d5"],["archives/2015/06/index.html","58321cb4a86447a1bc2253c9787e95b3"],["archives/2015/07/index.html","9e198cfc932cec54608d9fd5e1f7f4ff"],["archives/2015/08/index.html","f663506f69df80fc3c077485d8e559e0"],["archives/2015/09/index.html","ef54bd6839c367827a6d862c0ca47b17"],["archives/2015/10/index.html","61e043962cf6d2a2de3199bcb87ffecd"],["archives/2015/11/index.html","8ff9a2a3cb7b440f51bd026d44b4b7fa"],["archives/2015/12/index.html","2f119fd8f01927151ab2b18a762edf04"],["archives/2015/index.html","13e76a34bfcbd497128c81018638211d"],["archives/2015/pages/2/index.html","493d53fc57be96fe5b1e07fb2461e09c"],["archives/2015/pages/3/index.html","adf47f378f83bf6aab1ba1bcf8da4709"],["archives/2015/pages/4/index.html","0604161a9dac1728c759b37a0c9d02b2"],["archives/2015/pages/5/index.html","b84285b068826cc0615786fd1e2d95f1"],["archives/2015/pages/6/index.html","d5e1cc952f6c30912edcc554a59fcc76"],["archives/2016/01/index.html","714268bb89663e6a03956d79fb142082"],["archives/2016/03/index.html","63179ad4e5d936002cfbb1072e7ca405"],["archives/2016/05/index.html","2b71c52299e09c7d25d2c02c21354f7a"],["archives/2016/06/index.html","1ae525946d19e5de6c778b9aee6709cd"],["archives/2016/07/index.html","a5270ca06af107333bb711d5286b8c57"],["archives/2016/09/index.html","5b24b4d1b5ffd5d8d2dd1a7a17c24b68"],["archives/2016/10/index.html","a536e46389526af04cc5f66f663815cf"],["archives/2016/11/index.html","9c0fdfdeb2398e2444d3f21ffb05aba8"],["archives/2016/index.html","f7db4a22de7f1064b664af254136280e"],["archives/2016/pages/2/index.html","5b2b754e23703007b091bc4a8eb55bcc"],["archives/2016/pages/3/index.html","9b2cc5083104b70acf64f39b724a2c4c"],["archives/2017/02/index.html","6532976bf992fce58a02929a977fcd6f"],["archives/2017/03/index.html","69a36f68932d8bba1bed02cababb8e5c"],["archives/2017/04/index.html","ae698112bd4af906f6b221933c5f8110"],["archives/2017/05/index.html","f0c4efabe3ed4f83c6d3aacf1e1dc1ab"],["archives/2017/07/index.html","3715f072bf597af33215291fff424e17"],["archives/2017/08/index.html","0e2ef97f3ac3eb24400682f3af70b8ce"],["archives/2017/09/index.html","14b81263c3f15230388a497c0b9ece25"],["archives/2017/10/index.html","5ed671c9f76089b7c3626a2fb144c62f"],["archives/2017/11/index.html","e5b9769ce1775bb9dcd5a9f7c80817c0"],["archives/2017/12/index.html","eadcd0061a6771521448f1db4123e6c3"],["archives/2017/index.html","fae2dab1d2a6aa22736e25535f8d2544"],["archives/2017/pages/2/index.html","10011263f24781e8319189f743ebce58"],["archives/2018/01/index.html","e8ed0611ebc3163f1bcac91c4a7e9a65"],["archives/2018/02/index.html","d7b002e43a618f3436d791bb373ced0a"],["archives/2018/03/index.html","447a6d5467ad368895ec342479bb52ad"],["archives/2018/04/index.html","b88f55d2155be408285317a88d2c1550"],["archives/2018/05/index.html","292120a1671c6c5ee4ebbe3d2ec0feeb"],["archives/2018/06/index.html","c0e114b666027d0586ad866f3c36e537"],["archives/2018/07/index.html","706fbb68545a89750986012ce9a372b0"],["archives/2018/08/index.html","6af11571be67ac3ef43b8b89cc28c497"],["archives/2018/09/index.html","a8a98847ee08330cf62321732ad1c28d"],["archives/2018/10/index.html","73662442b9c6c6f43eb1f7eee83f615d"],["archives/2018/index.html","ff439100785d199faad1ce1937578c50"],["archives/2018/pages/2/index.html","c8633fd8ae464ee275b0dbe03d211d4f"],["archives/2018/pages/3/index.html","e1c1b9642406c955acf1c108a616b00a"],["archives/2018/pages/4/index.html","eba8165005bd634ab8e45d666ecf7070"],["archives/2019/01/index.html","0e54f3f928525de8507f7fcd28b08dc0"],["archives/2019/02/index.html","1d0137a979f66317eb1eb1a1afc1a633"],["archives/2019/03/index.html","bf0cc76968b60b4a772846aca466f343"],["archives/2019/04/index.html","6f7fd0c7c6d3d28ccdb1d2f6d938f65c"],["archives/2019/05/index.html","8fe1c9139ab72f33b80af94c53bdf06f"],["archives/2019/06/index.html","52cf50705ff9917efb228aa79a30f00f"],["archives/2019/07/index.html","f58a0cd6defe3aca5cc1145d18791963"],["archives/2019/08/index.html","ddb77e17daeaac78abae5f56866b5276"],["archives/2019/09/index.html","2ae02da984e5f1e23c126c89c41bcb36"],["archives/2019/10/index.html","a3549a4b10def481fefca361f29a7665"],["archives/2019/11/index.html","800a9cd0c977c33134e7b434b6a14382"],["archives/2019/12/index.html","2338ef7f328b3498af4d79d2e662f273"],["archives/2019/index.html","0d4d889e547a9fce1a28de71efb30924"],["archives/2019/pages/2/index.html","91de092fca3f1dbe08cc158867e529af"],["archives/2019/pages/3/index.html","b264824921c4b61d8b70cf96fe7d7bcf"],["archives/2020/01/index.html","370ee81680c4d51ba3fd1d38e3565fc7"],["archives/2020/02/index.html","11af2e9c189e9b4232a0040eaa6a96fc"],["archives/2020/index.html","a131b245b11826f98069a9abce00d939"],["archives/index.html","1f09d268b979136e1267df8a2da4995d"],["archives/pages/10/index.html","6ccc48babac03ef058616005d717baa3"],["archives/pages/11/index.html","9c92474e948b8b84fea698b6ad2725e7"],["archives/pages/12/index.html","606623637f85fe53ddee6ee038fcec42"],["archives/pages/13/index.html","5f88e8bc889bf9e41892f93ab59978b1"],["archives/pages/14/index.html","3e07bfd420dd8d51bc9d87501c423134"],["archives/pages/15/index.html","318d49a8f20767b96fd28504822317b4"],["archives/pages/16/index.html","36a2aa8994bb9156f4dc0dc93fe00b29"],["archives/pages/2/index.html","c2a92b7c745a64160bb9148b2471bcba"],["archives/pages/3/index.html","4bb6f2c2c002b729e14b4ec91845ce7d"],["archives/pages/4/index.html","c479a90d91930d3aa66895bce35768b5"],["archives/pages/5/index.html","8890d6c02f8b63f37b97e401d30fa613"],["archives/pages/6/index.html","47455e0a1747e94dd0409c8182ffc95a"],["archives/pages/7/index.html","2a87eb4a7dee0b14bf784f812e10f088"],["archives/pages/8/index.html","15f2cbdad0460c71f2f5d0ed394a67e1"],["archives/pages/9/index.html","97ec1fa28c3822887256b5ee754e0024"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","22d9d745d44d567f617dd7152e1831cb"],["categories/Unity3D/index.html","9ecd0d76d450f0abb66be9f229897537"],["categories/Unity3D/pages/2/index.html","be0b830facf4aad45e0073f6dc89e47b"],["categories/index.html","7d5c2c1a0ad170e545be4b0c657be451"],["categories/人工智能/index.html","94798f04b9d805f6a19b1858f1590239"],["categories/前端开发/index.html","76623f5cc77349c552538a263983410a"],["categories/单机游戏/index.html","7056f38182a28e50fad1b6615eb1cc39"],["categories/开发工具/index.html","accb4966fc95d6b0c3002bec83acd7bb"],["categories/数据分析/index.html","ead1b54d62d2d3aa5c61f1397782a0f6"],["categories/数据存储/index.html","5a2f669fa4d704014808062150535d53"],["categories/游戏开发/index.html","f2495e7e34e2caacf10fa0a91ccf789b"],["categories/游戏开发/pages/2/index.html","96ffbadd0a2b41d995683cd75745211c"],["categories/游戏引擎/index.html","da86fd4b0690623e793fa7d1a839f306"],["categories/独立博客/index.html","975322c903f3d816d197543b17483475"],["categories/生活感悟/index.html","b9b0fd7889e3a302d81c4987424bf64b"],["categories/生活感悟/pages/2/index.html","9e511fb5bc2b634d6794ec6661c7495f"],["categories/生活感悟/pages/3/index.html","9b989ffc5c0354c9f9ebe179cf4e34fb"],["categories/编程语言/index.html","66f11beecfa3e9a900e722b243619697"],["categories/编程语言/pages/2/index.html","8015eaa2ca41b512d075fb84a6f86319"],["categories/编程语言/pages/3/index.html","180acc30f34442fdfc82f1879db8d880"],["categories/编程语言/pages/4/index.html","ca427ed41a2d70a400dcf04a9f1594d5"],["categories/编程语言/pages/5/index.html","1c5d0dd5dbe0438966711b08c700b8ad"],["categories/读书笔记/index.html","5f3cbe130beeb13fd9c31f2d230a3976"],["categories/读书笔记/pages/2/index.html","271e2b71ca3eb4b846bfb353e57b435a"],["friends/index.html","7a98d2fdf6effe3e974df54651c4e634"],["index.html","ddd2825200485e2219310b62e8c8ee3c"],["movies/index.html","4effb8a5fc831712fa8cf82b0888fc9d"],["musics/index.html","0919dfa60a02e745600382066690d223"],["pages/10/index.html","145833839a7e2fad05bfa55d00e208ad"],["pages/11/index.html","8c184de59e903919d7530922059abf59"],["pages/12/index.html","76714a84f50b832d3c13645701c2a884"],["pages/13/index.html","e2d9cd206f9170d34386bb4edc91c077"],["pages/14/index.html","b0e2b70d7523922358cc625f22b4a1f6"],["pages/15/index.html","943cbbb5a48f23c8dfb4238c91a581a1"],["pages/16/index.html","852d546cb3bbeaebf2972361e7a4fb76"],["pages/2/index.html","66ec51c26be64fbceb01145d0a7a3d53"],["pages/3/index.html","aa283df51c98df6d76ebfda15f49f70e"],["pages/4/index.html","58dbcc3631775480b9bb30a5529bca7e"],["pages/5/index.html","7acb2f0793b62131e900d45a57002371"],["pages/6/index.html","0f23a94ab2223fec5290956ab16a653f"],["pages/7/index.html","62f70e9fafcdbb7eda0451383e850018"],["pages/8/index.html","c7f377082d18fa251f20ebef8800aa7c"],["pages/9/index.html","46ca54537c8e92b82f6cea596ae296b7"],["posts/1059499448/index.html","23b23326194660478140f970761cd337"],["posts/1071063696/index.html","fc4381db9e9fac4f1c0f3edbe66b553e"],["posts/1082185388/index.html","f2519daf8b0318483f45c9de9aa78b78"],["posts/1099762326/index.html","ede9bf42ee730338817b07e439c0ac6f"],["posts/1113828794/index.html","370a984f7987f17abf479b296a3eeb56"],["posts/1118169753/index.html","19b1c8c0236b555b9df57b1eca136614"],["posts/1122710277/index.html","e0a169c8db5a903299cf206e502c04d3"],["posts/1124152964/index.html","6936c9be58acca85d9f7998b5ec7a8f8"],["posts/1127467740/index.html","b36ddcb479f0d94f8b486b455246bd69"],["posts/1150071886/index.html","91fb1307843eab12e5193dbfc8e2842f"],["posts/1150143610/index.html","71118f63a132907a90a93e6d417696e2"],["posts/1152813120/index.html","9b375f31b854603d2521c87861facaa4"],["posts/115524443/index.html","b90647098edb237ba6ba8be78c0b17f5"],["posts/1156673678/index.html","b9ddbd8c736edf6662539b215e84b9d4"],["posts/1166840790/index.html","81a97e8d92ca5e7a439827c4b640a90e"],["posts/116795088/index.html","e66e0ec1a2348441e2080299d2235dc2"],["posts/1176959868/index.html","c57b9b490a0c347d5bed54e591a5d505"],["posts/1190622881/index.html","ef550b987b07c302237cfa3a3218a321"],["posts/123663202/index.html","ca07143d57b82efa3c0773cd2f46d9c1"],["posts/124807650/index.html","5e4d93ec18a3e1d6baab524c6ace6554"],["posts/1254783039/index.html","cdec57569da206b432deddd73133f772"],["posts/1320325685/index.html","b8004083beae3cb5f0acead9d87cad38"],["posts/1329254441/index.html","e5fb3d5f7c4da5206a349a1b31c1ef52"],["posts/1357715684/index.html","6b1fbb799a9950702206a78eba6f3bc4"],["posts/1358971951/index.html","d048fc1763c211090498a5b9ae3470f1"],["posts/1386017461/index.html","de6fad35b20745f2861e83eb5b1433a7"],["posts/1394521917/index.html","74677453a6fbfc8d52666131eee7d885"],["posts/1397717193/index.html","b06c2cee24c246a32098086a0943b589"],["posts/1417719502/index.html","627425c3dd6c58e86a5a2c23dd2c842e"],["posts/1424645834/index.html","def32a8b19f70d48c522ba9bb7a402c2"],["posts/1444577573/index.html","93a6193123aff236cc130babe8d65329"],["posts/1467630055/index.html","3bd6a6d51990d6f216dc11f622d5f72a"],["posts/1478979553/index.html","da921e4fa1cb4f60f9d829dfdb5aa95f"],["posts/1540537013/index.html","9a8a20658d6a95990156b46f0dc2bab9"],["posts/166983157/index.html","c5446c78f08159b543dae3f608e9484b"],["posts/1670305415/index.html","38dd834a6a5f18971a5efa8712d88028"],["posts/1684318907/index.html","807f2144c8e276fa1739728486467fd0"],["posts/169430744/index.html","ea28e0cb941eab8210d4af3cd293aa6a"],["posts/1700650235/index.html","feb0c93ef79cc8192dfc49823d6891c1"],["posts/172426938/index.html","0c5d2b4c9aec03ef098c5f4fa4ec880b"],["posts/1836680899/index.html","cc74b1a45f8579f78053abdce0da781e"],["posts/183718218/index.html","bd77367137f670516f3d74f889baf625"],["posts/187480982/index.html","8386b1fd3bc34133e1432bb63765ca5b"],["posts/1930050594/index.html","1166a4f96eee31515a538c865e6aeec0"],["posts/1933583281/index.html","6ca30c56228400de061953455b79a462"],["posts/1940333895/index.html","a4d28f4a1de3623157305e7ede7052a7"],["posts/1960676615/index.html","742259c0d6fc4aa53a999d7f35f14e17"],["posts/1983298072/index.html","c60cffb6dc640f925f4041dede6ef2f5"],["posts/1989654282/index.html","87a84ce5887b2d8bfa41a20766ff9ca9"],["posts/2015300310/index.html","38375261e2a8ae6b87f2766428f168a7"],["posts/2038378679/index.html","9d85c1fe5ec0370094c646bd3753caa2"],["posts/2041685704/index.html","d54835c7a00da865841dfd3d42ac5a09"],["posts/21112647/index.html","61b91852643ebcc08684d9afa7dd6e6c"],["posts/2158696176/index.html","caba3dc03cd5bea60b0f59651fe03216"],["posts/2171683728/index.html","4ad7750a716d6202f453d0b8f9ef0525"],["posts/2186770732/index.html","49b222b6037b86cd361531e88caf2882"],["posts/2275646954/index.html","2a31e2c1a7a1e48ebcb71b9bdc32698a"],["posts/2314414875/index.html","147b7d501918a5ad6adfa71cb35556cd"],["posts/2318173297/index.html","7ee911fa03fe150e99e715cae8220816"],["posts/2418566449/index.html","0d601fb0472533d91c73b723bea71190"],["posts/2436573863/index.html","be81aa11732042d53c9d09f611d49d76"],["posts/2462008667/index.html","23bfaf641005d6a0b22c4af6473232cd"],["posts/2463121881/index.html","1f08b99a5265c1002fa48e3cfd94b16c"],["posts/2527231326/index.html","590cba3b10fcd40ec534b6611ef023af"],["posts/2583252123/index.html","55a28859976fb5276158c2bc45477f4a"],["posts/2613006280/index.html","e4a85394b3ff7196ba62423cbcb550fc"],["posts/2617501472/index.html","e737cbca093269401a19403770949a5a"],["posts/2676125676/index.html","6f7929e923435872119a520a98edca07"],["posts/2734896333/index.html","196db0160a34945cc0b011e613bba6e7"],["posts/2752169106/index.html","ea74180a6f94991d4458a49aabcbebd3"],["posts/2799263488/index.html","eb64b9a6a7d6c1bba913a75ef8f8c0e0"],["posts/2805694118/index.html","76c387eeb727a08d0a2aa87596c05f65"],["posts/2809571715/index.html","c47e94cf2ad2288682197da0a4d19e5c"],["posts/2822230423/index.html","16fbeebbeba7b99e532cd78470e5df3a"],["posts/2829333122/index.html","faf315eb30150ae0c93dfe45b1ab9cda"],["posts/2911923212/index.html","6fca8d02a16fd25c67ea7de07f132d3b"],["posts/2941880815/index.html","f3ca4c96387f1547eb4d9b362b5768a6"],["posts/2950334112/index.html","27f7e5b68ff6955a932362fc111ba71f"],["posts/2954591764/index.html","d5192d4abe730fdb09ad59595407e0e5"],["posts/3019914405/index.html","72f3488dd637177439d590746bb4087a"],["posts/3032366281/index.html","0e29b6503bc2610e38ba741dda7feedd"],["posts/3040357134/index.html","d4efa96fe2f7514d1afc90534af1e2bd"],["posts/305484621/index.html","fde9f8fd1973f0368fb67d483c67c2d7"],["posts/3083474169/index.html","f62f341397e7d709c1090e0280e56a4d"],["posts/3099575458/index.html","6f871e23f03dd85af92cc84a365dddf9"],["posts/3111375079/index.html","35884191f772b527879ab28cb89f84e0"],["posts/3120185261/index.html","3ce796f2dc82696efe6b5d35ea7107bb"],["posts/3131944018/index.html","d1929db13457e9471fcf315de2ccb6f8"],["posts/316230277/index.html","e3542a28730313e39469179fa5c3c070"],["posts/3175881014/index.html","0d3dc74d37ba65eebac8d399700de156"],["posts/3222622531/index.html","83370b9b7404606e9e0eb27bf73b4df9"],["posts/3247186509/index.html","6e89e432bf2bf97f6db8732248e16b50"],["posts/3269605707/index.html","be13515d95b8c79e955bff7ca5c40190"],["posts/3291578070/index.html","3d80eadba26cfe825f1e762c1721a750"],["posts/331752533/index.html","9e19881ac3d9c7f56cdb32838ef0e8fd"],["posts/3321992673/index.html","4e75b99efd7bc5e6c84a54000517c365"],["posts/335366821/index.html","97fa4f5222935e42a01b446897aad9f9"],["posts/3356910090/index.html","3ee2de5c378479087fa4120474dcc687"],["posts/337943766/index.html","890f79bdc3575d8db17d58cefcdf97b9"],["posts/3417652955/index.html","c796f7f1fd7fc168f8e49abc24f9a897"],["posts/3444626340/index.html","79f8f4b9f798f1cab516dd8bc77af004"],["posts/3449402269/index.html","4f6487a35abe08bc270eb838c717f9fd"],["posts/345410188/index.html","ece79cecd65bf032438278345c7a294f"],["posts/3461518355/index.html","4acf93a679a579a4677d03aec404f583"],["posts/3494408209/index.html","67f8e9ffb767b3879c3a3c78a33f7235"],["posts/352037321/index.html","8fe3c06ead94638583ef2ab046027713"],["posts/3521618732/index.html","288a78912c1be2ebeaf094fe58caaeb6"],["posts/3568552646/index.html","e4cf0677f56e648d2c087d389c1336c6"],["posts/3603924376/index.html","a46c510a4708eca57ce17864e2805f4d"],["posts/3637847962/index.html","6fca4d9da195827e95f858db632893fc"],["posts/3642630198/index.html","b7ecb38c0701d35d66b42c8f37b94eba"],["posts/3653662258/index.html","5853214283635954fbfd31b7e857359e"],["posts/3653716295/index.html","9fcc147ebdc5d54bd40c1f172cf094d7"],["posts/3657008967/index.html","cdd8d2401a118859765273f83f7553cf"],["posts/3668933172/index.html","1d1e35fd5ac2d99e4b2933b7df31ba60"],["posts/3677280829/index.html","ae00094d7f8567c4b9fef919a1cc11e8"],["posts/3687594958/index.html","dde2d9573fcf7465e080a8112b2af6b5"],["posts/369095810/index.html","118b829fd204647c269ce5668cf089fd"],["posts/3695777215/index.html","20dcc7738d36f4c72d129da121a60935"],["posts/3736599391/index.html","aba2f0fc383335fce758df1b7c88b787"],["posts/3742212493/index.html","e93e491a7d9760bb733037aaa058d52e"],["posts/3782208845/index.html","aea4114fb88a5f5b2d626abea05ca014"],["posts/3789971938/index.html","c5984f8fc87f43c5a14beb5537bad906"],["posts/380519286/index.html","5c3fce1f406ff80e67142b60439063a0"],["posts/3846545990/index.html","f1f3392efe8755463d4ae6a6b5b997b6"],["posts/3873710624/index.html","b7cdfd87149fce077adc2f77bf9cddb1"],["posts/3959327595/index.html","027f112c95533a4120f2064973cd1254"],["posts/3972610476/index.html","f57e54b69f94427a2814bf78ff9a646d"],["posts/3995512051/index.html","bf67ed04d1a5a1f68970bdb64d794880"],["posts/4088452183/index.html","d45de96be06343599ebf7562a432c9fa"],["posts/4116164325/index.html","86fc5500b825a3403384ad775a98e03c"],["posts/4158690468/index.html","541d6e4f5d19519a42c46811132401d2"],["posts/4159187524/index.html","eec0a82f9d3d16c5db0aebb070c9253c"],["posts/4197961431/index.html","8bf62e9cf054ae69678a29d72c1bbdc9"],["posts/4205536912/index.html","f9890985d0fe8a42a60865b88812c055"],["posts/4236649/index.html","7fdef00d41867b18432224b7e397a5cf"],["posts/426338252/index.html","0acc673ee659f0d1aa5d3ac74d7f39e3"],["posts/450254281/index.html","967b4b489c5771b27407210fdd6862eb"],["posts/4891372/index.html","41e88cafeb8093a7ea5f5190cb9b6ce1"],["posts/569337285/index.html","3e19ee536e0e7ed4c8439be7de4891f6"],["posts/570137885/index.html","f1b738f0d13f7ac2c14aef7d1688eed8"],["posts/570888918/index.html","7a44aef79388781e60b48735e128ea0f"],["posts/582264328/index.html","32a06a535aeeadd2627c85ec2f29758f"],["posts/632291273/index.html","6d1d75ec02b428f1ea995da829da769a"],["posts/70687890/index.html","582a2748cd4859d7203be05affec54cf"],["posts/719322223/index.html","9674c3694469af29fb0ee53f5b08ddeb"],["posts/720539850/index.html","e7605e555c88c0af2cf4d045f315bf8e"],["posts/786195243/index.html","49fd89169370a5e06dfcb32a6f9013f5"],["posts/795474045/index.html","d3800d3bc2a3a681e09025b6de522a5e"],["posts/815861661/index.html","64cb7fa4f2892115dd6cfb6286f385f9"],["posts/821259985/index.html","5eed34a814f09f145f8abcc3839ce998"],["posts/828223375/index.html","88eea70634e3e742451fb5dd67a1d49e"],["posts/887585917/index.html","7504d5c3407e00f83090f0c6f0029e32"],["posts/888549816/index.html","13f3b4f0af440aed08164e5a9ff7d875"],["posts/906436376/index.html","22f803d580c83f5fcb34c55768f6e3cd"],["posts/907824546/index.html","b273b5356c9ed5d907f3ce3317251efa"],["posts/927393529/index.html","d0a0f6cf5e21e22c055eed283b0cab83"],["posts/94443781/index.html","aa02c195d5ef019e3e2419baad318fd4"],["tags/2014/index.html","6ba24d910a42d798174b9af94b545bcd"],["tags/2019/index.html","401c5917217956d35986c2cdf41947a1"],["tags/AI/index.html","93884bfa33ae4df00ef655ba214897f6"],["tags/AOP/index.html","86e0b32c6054094203ddc6afe1394f7e"],["tags/AR/index.html","4d48c45b9fc4b4bb4863ade40ab9ca31"],["tags/AssetBundle/index.html","c19f8e4e74fcf86a7a8aa2e7085b8aad"],["tags/C/index.html","1c61fb38812943b3a3ac6551812c0a0b"],["tags/CDN/index.html","3693a1a31980c38081725c1eb1b01da2"],["tags/CG/index.html","c7acd245127774a7dec38dec107c0e00"],["tags/CI/index.html","2bf825b1d0ebb8bb6ab8fe9510bef2c5"],["tags/CORS/index.html","0b8e986657913056c80ed8f59d5911b7"],["tags/CSharp/index.html","62234386be4fc1ec7888a757e4a51083"],["tags/Castle/index.html","b97c30b2ac12bb5b7af5727ba3870ff3"],["tags/DBeaver/index.html","657d47127ff15fe44bdf66581af1def5"],["tags/Docker/index.html","c40d244881253c496890711b74af4f70"],["tags/Dynamic-Proxy/index.html","d7be663a88999df78522e2bfc6f12c5b"],["tags/Dynamic-WebApi/index.html","dd48d1fa0162775c00f63aee4e15747f"],["tags/EF/index.html","9cd009be581472e90e3189ed515d0897"],["tags/ELK/index.html","a7aaf12f0e056a2be1050915902a0d8c"],["tags/ES6/index.html","969d7603e892c25f16f004d6d1c60a7e"],["tags/EasyAR/index.html","7ba4f4583bff0f7c4e0ba5f8e355a09a"],["tags/Excel/index.html","42251c067bcbb40a92305594e8f546a0"],["tags/FP/index.html","e7b5b89eb31cec02f5210ac32c9103bf"],["tags/Form/index.html","278d5b18b46dd3bc69f4759376326e18"],["tags/Git/index.html","eae079b1ba379e58e27f08141ef71789"],["tags/Github/index.html","f49a8d1b211be17f6b15d27e005a46ed"],["tags/HTML5/index.html","223bf63a0bce9ce89e635090096e7502"],["tags/HTTP/index.html","a09d99cb1547a90b86cc859ed9356eac"],["tags/Hangfire/index.html","9ddf65c940ad3b69c617aec52b8be2dc"],["tags/Hexo/index.html","48c8503ab07adaacfa6eccdb90206d4c"],["tags/HttpClient/index.html","cf631eb55965f7804ed4b97ee5cc3715"],["tags/Hyperlog/index.html","106aa098b459b0e8cf09de02ef743d8e"],["tags/IDE/index.html","f753b157302557e44cb7c54d697bbb9f"],["tags/JS/index.html","7ca2078ddcad53d3a451fbad4b1d9fe4"],["tags/JSON/index.html","d48e69c6845dd42d56ba69401eafb17d"],["tags/JSONP/index.html","e956375f88344856dff80adc3cb12f63"],["tags/Java/index.html","5525d2d4a0e6c46cda47654c545fa68e"],["tags/JavaScript/index.html","9335c15db3d8d0171b5488f75f139b3e"],["tags/Jexus/index.html","a99e18fc9af1126256be61b1495d828d"],["tags/Kindle/index.html","e8714ca17f7880731673789e41a5037d"],["tags/Lambda/index.html","86b58e0f1d66df4f5e9088d482e1eefd"],["tags/Linux/index.html","867fccb2558a5ee5198fe9e8c76e75f9"],["tags/Liquid/index.html","4079031c676d0a87fd4723c2b6d2b2fd"],["tags/Logger/index.html","982f20aeb3ae52d56e5f836641caa5a8"],["tags/Love2D/index.html","8d29489951afb4a6f922e23166d63362"],["tags/Lua/index.html","7d962a2aad3504a478f71dbdd50b01b3"],["tags/MMD/index.html","70a06dda267295649122ede8ab03d42f"],["tags/MSBuild/index.html","0743294f05e7fb22026a806309b5b286"],["tags/MVC/index.html","35efe0c84d7e74ab824231eaacba930b"],["tags/MVVM/index.html","655b9f568647171e6991236336325f31"],["tags/MapReduce/index.html","469062c3face2702a93a030685e7405a"],["tags/Markdown/index.html","f1460ffa32f2e0c04496129248a27eef"],["tags/Mecanim/index.html","ad5fa95ae840e5b4ead5d7e16374affe"],["tags/Mono/index.html","a5013803a52990f15ae58cb41d120f22"],["tags/NET-Core/index.html","c4c17bf10014beab58df42ac55dc3815"],["tags/NET/index.html","48ff516ecdd2720a621c37edbeab28bd"],["tags/Nginx/index.html","b1b4699a95fce3c3ebd4322d3f617cac"],["tags/OBJ/index.html","5fe027937485e1af89f5074f636a858b"],["tags/Oracle/index.html","b033f7bee6354f6e3451abc6ef205389"],["tags/PL-SQL/index.html","d4a67b7437afb29d18893770d6cb66c8"],["tags/POCOController/index.html","98bd891ed31766739a4054e212d66b7f"],["tags/PWA/index.html","fa256937b3256513f49ac326cba259cc"],["tags/Python/index.html","519ed6e3473b832037b9e25860aba1b3"],["tags/RESTful/index.html","d4391e1e8fb3a3024a41f86fe5e4a240"],["tags/RFC/index.html","5373be124c41673a08ecf890e4325548"],["tags/RPG/index.html","2dd894e4c3526d5032a60eabe4eae4a8"],["tags/RSETful/index.html","fc0b27ff9c23ffbd0ca178250f8dc14d"],["tags/React/index.html","a2209a1328b9e83d5462876897191428"],["tags/Redis/index.html","66f3604bd12d407efd3cfcf6d93f5a30"],["tags/Referrer/index.html","c8f875240ab1cee312e261c3739dec6e"],["tags/SDL/index.html","7feec73332024bdf313a79a770acf45c"],["tags/SQLite/index.html","cf4acc3de67c75be6c3088647ac3ef96"],["tags/SSE/index.html","2d933ab35be400782e399d5f20d97aae"],["tags/SVN/index.html","dd000f581c21fab32ba8c7f9a8b20c9d"],["tags/Script/index.html","8b9213d7de87b594ff84c94bb117e98f"],["tags/Server酱/index.html","bc5a5a663d663753d9c993a0e8a8a48e"],["tags/Shader/index.html","fd8c7777d852552e9b9aa7c76b4f3b95"],["tags/SignalR/index.html","695a6807236d5caeb6baa96f0bd3a90d"],["tags/Socket/index.html","0023fd447fcdda257842642d3cbc4744"],["tags/Sonar/index.html","0b950bf825670b7678b883753f26b694"],["tags/SourceTree/index.html","dea8eb8e49f9e114eb650efe5223cc70"],["tags/Sublime/index.html","3ac211fa6f54eee8c9623653b6de8737"],["tags/Swagger/index.html","6cbb2c9ab016e5879cf228d35a975ad0"],["tags/Trace/index.html","2fdfc4e57e92e9797afe1f143ccefaa4"],["tags/Travis/index.html","f2b9de5f2c8100f134244611c0f25ce9"],["tags/Unity/index.html","c4896a3f9c6c54640fa40ddbe1441ead"],["tags/Unity3D/index.html","1642e7df2885ff4c93747c197246549c"],["tags/Unity3D/pages/2/index.html","bbb83f428e95c3847d484c94326d1fc4"],["tags/Unity3D/pages/3/index.html","9537b7b26c8a09828f661a2c25103009"],["tags/VSCode/index.html","4ea5d8453f22186950988a7eb205ba49"],["tags/Valine/index.html","11d35e9a931eea8b423571353f147820"],["tags/Visual-Studio/index.html","685f317ba646f884cba8fcafdb291ebc"],["tags/Vue/index.html","9e0e23b7d395b4bd9bef4bebfd7fd520"],["tags/WSL/index.html","e7d3ddad9f3f50a53f29eb395cc5df32"],["tags/Web-API/index.html","8abbe6206a23a0eb5fab9d976f509dfa"],["tags/Web/index.html","1751cf6d382716f6a4acd44415af7f80"],["tags/WebApi/index.html","4c7cb3ead2227e9b25fb43bc09b0d864"],["tags/WebSocket/index.html","30dd9ceb9b6847db84e099de996ca907"],["tags/Wechat/index.html","2e17f3b18312b9bde68f9c943fcb5a37"],["tags/Windows/index.html","2d1ae42b4f40c0322b546ef83a595b9d"],["tags/disunity/index.html","1a37026bbbccf6c5a7bce8691b47d6dc"],["tags/index.html","08ca7e86eeaf487a87aa3cb866377603"],["tags/jsDelivr/index.html","8465941496006fa751fcacb33c66495f"],["tags/matplotlib/index.html","cb6be5206830e6d1c4b036a31737ab8d"],["tags/uGUI/index.html","333606e3639c7f445c3e9e9f0e224b33"],["tags/zTree/index.html","d7b7ff5cfbaf6fb1ea433bbaf7b67584"],["tags/一出好戏/index.html","4cd99ce6b34e3092f4c9662ad8956bf3"],["tags/七牛/index.html","adf01d4aec0e412d6eb845c4fd2d3e4e"],["tags/主从复制/index.html","6eebcc8e571b1de5212bb576db777b07"],["tags/事件/index.html","ae18a3044b0b8f6a2ce4a6f7e1ac871d"],["tags/二维码/index.html","8cd2b4e0349e0fe007d3a93639b05b4f"],["tags/云音乐/index.html","4a3d70fa85e38d6027c6f93dd923f277"],["tags/互联网/index.html","243444a6da035cdbca20efdba33c715b"],["tags/亲情/index.html","d5d9c4d62b2b924bdef2956dd41bf7bc"],["tags/人文/index.html","f1c8faef4d012779f8dff51a702d89ea"],["tags/人生/index.html","03ccfc403ac10b4fd74bf5e4b8bada18"],["tags/仙剑奇侠传/index.html","222dcc0c9d0a0641f970c467a1bd5cd9"],["tags/价值/index.html","12f39bf666e70b07da2669c5ca01a523"],["tags/优化/index.html","1dc7171ac61520dfa24f4aa101b3c07b"],["tags/全智贤/index.html","59aff918e26746e09e892910bfad5f55"],["tags/公众号/index.html","31433bd3e7e9f4b073187d831b90a14e"],["tags/关卡系统/index.html","91dfa5d41c4f7afc8926dfdde12ceaef"],["tags/函数式编程/index.html","fc5e514422739696a03fc3e0f511c218"],["tags/别离/index.html","b66c8c13a4ed3c56b0475112e5f09fd2"],["tags/前任/index.html","7a8207a905969a0c03791bd5e17e1e49"],["tags/前端/index.html","46390b52d3ba1331835ef09012d692c6"],["tags/剑指Offer/index.html","310e94220f5384ed7de511ab0ccf4953"],["tags/加密/index.html","49869a4aa4a7a6216cb699d684835bac"],["tags/动态代理/index.html","de0e94d5f7e141997d19962a6513fcdb"],["tags/动态加载/index.html","a62c1f2f05be3e22a96736aabba0e77d"],["tags/动画/index.html","de8d27facc43dbf77d1b457b122281dd"],["tags/单位/index.html","12cb3555a048b6124d3b3c2743300715"],["tags/单机游戏/index.html","f91d6890a6e600253350ebdf630a30b4"],["tags/印度/index.html","dc8dfb6585f21c871c353c7961e324a2"],["tags/历史/index.html","c001bacba129bac618309b4bee54414a"],["tags/反编译/index.html","daf14d4456989cb1d65960c49dfbbbf1"],["tags/同步/index.html","b146d78c0add60f026cab700a9acb320"],["tags/后端/index.html","534cccc58067109bcfcdf71900dd4967"],["tags/命令/index.html","1f7b735159ea42c84427f3723340fa23"],["tags/和平/index.html","90bc82ad3f988580a3e0c0815f0e2a69"],["tags/响应式/index.html","9e486e08b1a832018a5ee25b12b673c7"],["tags/哲学/index.html","ec9ce8e7ab01dcae5744354715724576"],["tags/回家/index.html","f5fdef461cb3c095aaf01200d3352f01"],["tags/回忆/index.html","4c364f53eb12c682490211cb6d80a860"],["tags/回顾/index.html","41269d2c1fb066bf4b39410710c3f0e6"],["tags/回首/index.html","3d5bcb034c4f7f8826090d6205f97d57"],["tags/图床/index.html","7c65c6099d2933b37626c021f41f68fe"],["tags/图形/index.html","79f90ae880eca9d8ad26cd4c98f26094"],["tags/地图/index.html","ac6cf20d16d63d582d57e8bfdd331ddd"],["tags/塔防/index.html","5063a42e6cdcba1e9dd462e12dd113bf"],["tags/增强现实/index.html","f7ca0634738626d9e451f481e06072e6"],["tags/壁纸/index.html","6d00e62df565042c73dbf142392d4edc"],["tags/夏目漱石/index.html","a00530cfef991a4f81a8d3efbf9f4c76"],["tags/多线程/index.html","c8d532a91c31eecd7d0320e5b943933a"],["tags/大护法/index.html","a7393781921d124a0765ce9cc1974052"],["tags/委托/index.html","668d5c0af328356937faad09c7bc233c"],["tags/孤独/index.html","b0326f34e4c10fb1169d21fd617db789"],["tags/展望/index.html","74e56248b8699893700d902ca53ef56d"],["tags/工作/index.html","44bd7cea1b27680fe065399bfd365733"],["tags/平凡/index.html","63400843c180ca4203af39754c1f1fdb"],["tags/年华/index.html","752995f11018f8cfa71c4228b2c3109c"],["tags/年度/index.html","0ea56841ae9c771712f9fb377121fcc8"],["tags/开源/index.html","1a802bd98c2d3927e55ccd31e7649dbc"],["tags/异常/index.html","d45addd2bd5701d4ec374647128e255f"],["tags/异步/index.html","cfeca46687472e46d02139929baed6e8"],["tags/引擎/index.html","a8dc173d5188d5a455a5b139b6ca16b9"],["tags/影评/index.html","1386ade7121de5e20bd59e4a054f0e00"],["tags/微信/index.html","45e9fa58bb2f4629e2afa81e2a318890"],["tags/微博/index.html","c94f36aaa9dee464b9d05430de320e15"],["tags/心情/index.html","9bfaaf9fd3111d59051f3d1c1c8822dc"],["tags/思维/index.html","7d343be3f36d9efc700ecc1258f95252"],["tags/总结/index.html","4c9bd932d6f8a21b6b035588d4b4462f"],["tags/想法/index.html","3677bdc24d83762b9f61d819d1f363dd"],["tags/感悟/index.html","763deca45fe310446c16fb7b8ee10c63"],["tags/成长/index.html","f5d9f2285a0a391fb21428eb2f056356"],["tags/我是猫/index.html","df046d1c60addf381e487f64494d0f38"],["tags/扩展/index.html","3d14d36c4ebfb3f9647f80dcaea3a9e0"],["tags/扩展方法/index.html","a9f6d65a2a14ddeb364c1bc1e793c6d9"],["tags/技术/index.html","6a52e415b723461d6fa530d3736b2d7d"],["tags/拖拽/index.html","ce4bbfd9c2420f3476f1593ff277b3db"],["tags/插件/index.html","961b05d3b40ed0d4df4ea17cb8c40fe6"],["tags/插件化/index.html","6175f01e1db1a8d39f040ae499dfeb89"],["tags/数字/index.html","88f22dac5e2e19ed3811e88b1c32577d"],["tags/数学/index.html","e0c7f6cd6b6167d48ceebff9803ad6e1"],["tags/数据/index.html","08b335de065791b0ec28d43f801eebb1"],["tags/数据交换/index.html","42b472092c7f7e87639dcfb57af5957c"],["tags/数据库/index.html","c767ebaae5be0f7a4932847452268444"],["tags/文本分类/index.html","28df668e66ccef2bd69318cfb9d99ea4"],["tags/无问西东/index.html","63135f753a5e62c96cfb894ca5fb0da6"],["tags/日剧/index.html","172d8aed9680085169029a1c3fece4bf"],["tags/日志/index.html","6ae5cb6993ac0124233931cad4e8b5aa"],["tags/日本文学/index.html","03151178412ef03f27f790b9d59d3cfb"],["tags/时区/index.html","67c28525edcd24076e04850a3c99f874"],["tags/时间/index.html","96e1c08e67e0309fdbc4f24c3475bdaa"],["tags/服务器/index.html","12196c951f844751b59bb7dd48cbcc45"],["tags/朝圣/index.html","3169e25ad425edf16af7b808802940ae"],["tags/朴素贝叶斯/index.html","93183ef478a20d12b899f578632a4ead"],["tags/架构/index.html","a311478a5fd70fc28c9ede398ff957ce"],["tags/标注/index.html","3007975e060ac09ab459345ebb85515f"],["tags/校验/index.html","cc3256feca226bd56dcc54ccc86ee7e0"],["tags/格式/index.html","c39e9b26b8957d3a96806feef1baae6a"],["tags/格式化/index.html","e39eb89949f7a8b29e3536ea7dfc2acf"],["tags/桌面/index.html","cd59b10da780ddaa4479bd990553ed50"],["tags/梦想/index.html","a7225662317b750ccecdc318c7ebf575"],["tags/概率/index.html","0b15cc1588af4163784680439f029b80"],["tags/模板/index.html","8c2073af523842adfa9d6ab692db3179"],["tags/模板引擎/index.html","e811a3fe394a9ed1f71c4763fbaf6ec6"],["tags/毕业/index.html","25a220af24732a23b683ebe4ecd94fd0"],["tags/毕业季/index.html","e7e392714d80ac6253d60ee05f6456bf"],["tags/消息/index.html","d195d493983b3e21c532083cc4250908"],["tags/游戏/index.html","0caab75f89bc3998f48680c86bef5665"],["tags/游戏/pages/2/index.html","c518a618792e5e1c21266a4b5ad3e6f7"],["tags/游戏开发/index.html","eca0240fbaf8d0325392f287c378b134"],["tags/游戏引擎/index.html","dd0ef10049af7214b1240f2b1d299c5f"],["tags/爱情/index.html","e03170ccaae748280471f8a0dc094373"],["tags/版本控制/index.html","6dc3feb326b4c85a69ecfda466c74896"],["tags/版权/index.html","b269b0002900061f105892b42e24601e"],["tags/特性/index.html","0823c55eb20300742fec083173423c22"],["tags/状态/index.html","bf49ad76e97a527f8f8b509627faa188"],["tags/现实/index.html","574aeaeaf4fdccee8e880c352ca4d7b0"],["tags/生活/index.html","529962665caf5d6ed4c483002be0ea5a"],["tags/电影/index.html","d90a63406c3ab0f817d6b8d772a3e64c"],["tags/画家/index.html","e7aed1e94fb8bad9570c3af7b8fbdd11"],["tags/知识共享/index.html","7b38efabff734e2d105a9d1db2fe2cb7"],["tags/矫情/index.html","78ae6562e25756af9e638b6f14e44efc"],["tags/程序员/index.html","a079b72f006009a44fce8e2de7732c7c"],["tags/穹之扉/index.html","4a0fe986bea186d485ad8e9b3b34226d"],["tags/穿搭/index.html","62388e7455ff316f08f92d7ba932440e"],["tags/童话/index.html","f7dff570dff195853a6a7db374aa3981"],["tags/笔记/index.html","89b2a5ab6b0842b00d1a816772c725d7"],["tags/算法/index.html","518449ea04299431da7d78f4e01468b5"],["tags/米花之味/index.html","931417940019f9af6dbd9a83e1c536f5"],["tags/缓存/index.html","cf70c370212ec688ef7239696df6d18d"],["tags/编程/index.html","afbf4cc5df00e68dc9b19a0f30e64005"],["tags/编译/index.html","ccf4177143c57d8f6c976c84e37b02f8"],["tags/编辑器/index.html","70fcb613866571f471c788c94107a23a"],["tags/网易/index.html","d7610252d61d3f6ddbfef62a4b019479"],["tags/脚本/index.html","9085e080160fee733057d7ec1da5a1a4"],["tags/脚本语言/index.html","40fe2fc990b71abecfcd86e85fffc78d"],["tags/虚拟摇杆/index.html","4981647bbfc4ffd7d86d85ceeecb873f"],["tags/蛋炒饭/index.html","987504fc98e21242bb52ae1a454a56d4"],["tags/表单/index.html","642a391fcdd50b3498dde72dc8a59bd8"],["tags/装饰器/index.html","95973075dfe2016b1cbe549d855219bb"],["tags/西安/index.html","5fd3e1bc4d38c5b4bbe779c7eacfebb7"],["tags/计算机图形/index.html","6d0c56786fe2df0b0240d5c79d95f3f3"],["tags/设计/index.html","03c9cbe48734843919f89cf0ae087668"],["tags/设计模式/index.html","0cdbd8000ab1739275cde5a693f39c45"],["tags/访问量/index.html","3b0866a0dabf0725eb807b742d235cdf"],["tags/评论/index.html","ac017afa0951daeecc7a13943dbc4e01"],["tags/词云/index.html","080966aefcc8f6b82307c46c52de5437"],["tags/诗人/index.html","57e813274f6192d0752256daa1f9552e"],["tags/语法/index.html","9da82473a8283efe242709e2128963d6"],["tags/请记住我/index.html","6d46ca172a79ce8bfac1487203798e58"],["tags/读书/index.html","59a836b1b36ea3658d32501fcf07a383"],["tags/读写分离/index.html","c8c14010a872b3ffde7814a841fb0119"],["tags/调试/index.html","b97f47bae093934f0682c5a2d2a4b0a7"],["tags/贝塞尔曲线/index.html","31c438ddc915ad17037cf35edfe008a2"],["tags/贪吃蛇/index.html","1a314eb59c027d8f46d83274af4f62d0"],["tags/资源提取/index.html","437f76bd9a761dd935d6bc50eb06895e"],["tags/跨域/index.html","a2370b7a566d2055654bdfd5163c6c22"],["tags/跨平台/index.html","a11256efe125ba4f4332a34615f49a8a"],["tags/转盘/index.html","e402cdf607f3a49b742c75c2f35768ef"],["tags/迁移/index.html","e024c40ec40834f4773ff384c8ed35a5"],["tags/通信/index.html","0755641e32b02f47160229e0d0b2fb81"],["tags/邪不压正/index.html","0ba7337128a14a423ef94ea0f5da338d"],["tags/部署/index.html","496fa08d3badaeec2b69f28e6c58aff7"],["tags/配载/index.html","3263fa6912c15056d6ac2c8ee33177e2"],["tags/重试/index.html","69903b40bbcc331a22a04f13678820db"],["tags/长安/index.html","2113e731524372deb7c007afe6d63787"],["tags/长安十二时辰/index.html","926453df34a21790447c6edaaef74838"],["tags/阅读/index.html","bfbce1dc239169cc33c9da54a1ab868b"],["tags/阿里/index.html","6ed744beddf03c3fb71d97e2d9947c79"],["tags/随笔/index.html","1f74a6a768c367c807756e117c6791cb"],["tags/霍金/index.html","44ccdbd0f5b3ce9e19e1e773c4266d0d"],["tags/青春/index.html","03566981c3c55251f9404c05462c515d"],["tags/面试/index.html","4011346d26aee1e94e1e999d12ac3d57"],["tags/韩寒/index.html","df1fd6f437b38005b9f96d67a8570a1b"],["tags/马尔克斯/index.html","79ec53e696ddda6de4ff8ec08b0e5e3c"],["tags/验证/index.html","a2302ffb7bf8d64eab79b653eefb7950"],["tags/黑客/index.html","5091fb0121ebecd61173a0d0ae6714ac"],["wiki/index.html","936d84289a7d09954b56582165606e04"],["works/index.html","d8db03dffd2073baffd05f2e4eec0bb2"]];
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







