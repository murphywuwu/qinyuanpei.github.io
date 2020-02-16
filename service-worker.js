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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","3f7488536f283b5c5252a0b70e80e7f5"],["archives/2014/12/index.html","d66ed2bc60f25ba10f05270340ff1df6"],["archives/2014/index.html","48dbf25061aab91de8825a32701a8be2"],["archives/2015/01/index.html","4908161fb0698cbdce9c6a744cd2943e"],["archives/2015/02/index.html","f65776d58892267703e08201445546a0"],["archives/2015/03/index.html","b7a76e4107fdac622d11b77539a175d9"],["archives/2015/04/index.html","84229b2593ebac4955eefaf5130d43f9"],["archives/2015/05/index.html","769c0be6cc6338c1d96c3745a5e6a3be"],["archives/2015/06/index.html","e6e7653af3fbfb84074cf74093226327"],["archives/2015/07/index.html","883785d7b1ae2c7eafeac4a6d5a1f8d4"],["archives/2015/08/index.html","0b08ac43d733acd1e21f2f4f0a26fcee"],["archives/2015/09/index.html","a291e5d523381db308052315ce281144"],["archives/2015/10/index.html","bf23270e45c722a5be3374956c079a5b"],["archives/2015/11/index.html","9a5739f2824a4b27ba4a4f386e2bec28"],["archives/2015/12/index.html","a97c724770eada6ada5b8039fe0423ac"],["archives/2015/index.html","eb0f11c30bda3012863c36fbdb1db7f2"],["archives/2015/pages/2/index.html","ec0c999ac570dad265ca10f06d74c2bc"],["archives/2015/pages/3/index.html","63b88d6502d11a84e44f091eb24d5e9c"],["archives/2015/pages/4/index.html","e35a18b8694c862abc3da744304a91f0"],["archives/2015/pages/5/index.html","6864a28be6faeca86329883936e0083a"],["archives/2015/pages/6/index.html","ba6f2f6fb3aa4336b0b3ec8c1b17afc4"],["archives/2016/01/index.html","6811e93fc9ade86635407ac6e4a66167"],["archives/2016/03/index.html","75cc9811ff35c91e9ba09f0c50aa43b3"],["archives/2016/05/index.html","798eb5aef0e03909de59cb45239c6142"],["archives/2016/06/index.html","1b0f56b552576e62fddd1bb0d7ccd05a"],["archives/2016/07/index.html","cfc6d60f0e2271ae04d96ae3c47f9153"],["archives/2016/09/index.html","bb84188512658ef1312b8bbd886dce6e"],["archives/2016/10/index.html","5d902e2b8b2741772d743172ae8bf932"],["archives/2016/11/index.html","210cc0b504c45d4004da355a9ef95075"],["archives/2016/index.html","19af39e008522fef22e4316e048fda5f"],["archives/2016/pages/2/index.html","86b8201b27565c0ebecdae8992922e01"],["archives/2016/pages/3/index.html","9b584491f622d6831a2c8df7a94af1b2"],["archives/2017/02/index.html","62cee20fc0ee416788deda27a0a944d0"],["archives/2017/03/index.html","193fd5cc60efed667190b67b68ecaf91"],["archives/2017/04/index.html","924f7dd54e2e5e5b5c74aa66a5051278"],["archives/2017/05/index.html","75c94aa82cb0333a1de9d12978299596"],["archives/2017/07/index.html","d84ceb2759c64c6a6a0196b635abec8e"],["archives/2017/08/index.html","58c6a418b4c454d5e0fbe02776053cac"],["archives/2017/09/index.html","6ded229732a12cf2160ea7d1c71bc8cb"],["archives/2017/10/index.html","08cba78b3c119e4c4f55d2f070343936"],["archives/2017/11/index.html","b1324805901b68d432c3e1f278a862ae"],["archives/2017/12/index.html","8e346cbc6d0abe31b1bf2aea2e67eaff"],["archives/2017/index.html","61eb5156dd92f7d3c6a1353dc825beb8"],["archives/2017/pages/2/index.html","0733a2d231ea283906d2164fe90a3ded"],["archives/2018/01/index.html","efdc664a0a0c99c57ee29fe40320bf72"],["archives/2018/02/index.html","0191cf4378d0868b19c15bcb83e97f69"],["archives/2018/03/index.html","8e76953440597a65dfd624ca113fe3d0"],["archives/2018/04/index.html","34ac69155529b8dec8d9db2422c33471"],["archives/2018/05/index.html","f3e68405c483f29e5ff8bb8324013da5"],["archives/2018/06/index.html","ecad36da6e628d54b48c2325ebe77710"],["archives/2018/07/index.html","74d94d975b4e895678140287ff4fd848"],["archives/2018/08/index.html","d35b8f4b4950da9c5b773e61fcebb37a"],["archives/2018/09/index.html","2ae6e86ee0344a0201dd51f80aab0b20"],["archives/2018/10/index.html","f853195f3c9cfb37b5fb4ac7c256b836"],["archives/2018/index.html","dcec7e58ed20e1717abecd31d419da30"],["archives/2018/pages/2/index.html","00fcb72049334e9b348b91639023167a"],["archives/2018/pages/3/index.html","577ff685ac37fdeeae04ac8b61582434"],["archives/2018/pages/4/index.html","ed056db283ee89962651040f08877773"],["archives/2019/01/index.html","557e58b61f8376d4c09f39924789613b"],["archives/2019/02/index.html","568ed0d0a84e97c994687276139cf80f"],["archives/2019/03/index.html","81e3ba784ac7e488a2f50b6cda108c37"],["archives/2019/04/index.html","85777263a96aeaf1f199594bf024c349"],["archives/2019/05/index.html","6cd5c86338edfc996a7e7826bad1bcb4"],["archives/2019/06/index.html","01da1230d26d88a46f29f44be52775a7"],["archives/2019/07/index.html","b6db18399c7e47523685df723a314f84"],["archives/2019/08/index.html","a85bc19e0cb9722eb5536247e8d67a3f"],["archives/2019/09/index.html","f7c39b880edbea08944bc22f4b92fd1b"],["archives/2019/10/index.html","6b73f3ccbd4754cef1eb7eabf03fdbdf"],["archives/2019/11/index.html","cfadab238b7fb00d920aeb0cb11150f8"],["archives/2019/12/index.html","9f2791135f17528af37df536ea08ca23"],["archives/2019/index.html","6821441ba3eaaf1baa2ba359bfe5d46f"],["archives/2019/pages/2/index.html","75171ff0affb7be5570fec91f8c7a7a7"],["archives/2019/pages/3/index.html","bd7c41c7b33e0d4c67348cc0c80329de"],["archives/2020/01/index.html","8516400b4c0fe85d263a68a099bdd86a"],["archives/2020/02/index.html","1f22fd50577c17c3bf9a339b588ea05b"],["archives/2020/index.html","014ee84ad4ce0444b549714342b5ac92"],["archives/index.html","7229edc0ddd42e45748c7a82a21b70d8"],["archives/pages/10/index.html","4e9e29dceb01dacd4cdc672d5ccb2aa6"],["archives/pages/11/index.html","19ebf29c10df06ac285079bf8510158a"],["archives/pages/12/index.html","2a980c626159d13b63255c8a484dd531"],["archives/pages/13/index.html","b0acb1c6cc3b99925ec2a39266c6d648"],["archives/pages/14/index.html","5a6e65699dbf2e0f42d889cf769f5dcc"],["archives/pages/15/index.html","51a40fdec55fd888c4003b6578c05b14"],["archives/pages/16/index.html","b9e5a6486866173b662ed0524575625a"],["archives/pages/2/index.html","40550a2a6a7c1eadfe61a718c57141fa"],["archives/pages/3/index.html","de936a3c86d32f36c59cf34bf0cb41ee"],["archives/pages/4/index.html","95adbf1a9e036017f4a30dca860b501e"],["archives/pages/5/index.html","df6931995d9ea56c9a65d2ea6dffa8a2"],["archives/pages/6/index.html","f3b6c92b4d68b73644119b4ae35e4fcc"],["archives/pages/7/index.html","d13810f0bdaf57ef985c3f796bc864a3"],["archives/pages/8/index.html","9e8c37a2c7ae6545bc30da0420264a03"],["archives/pages/9/index.html","0782b7dd50f2f0109d1d923c931f305e"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","50726bf0d6bd00b546d30bb417eee7fb"],["categories/Unity3D/index.html","621494ab2d76ba6b9f4dbc53b5319ee2"],["categories/Unity3D/pages/2/index.html","9c3642802e793e337374ffedea347301"],["categories/index.html","e2f46ed6ef39816955cb8cee1e5aeb37"],["categories/人工智能/index.html","22848ae84fef410bedfd04a616a9b752"],["categories/前端开发/index.html","fe5f1f56bf11d92d7b014bf882d89d55"],["categories/单机游戏/index.html","73db1bcdac6909b99695a2406abfb662"],["categories/开发工具/index.html","096c010be5267e2c71614fdef176a555"],["categories/数据分析/index.html","9d72a508defa9976f29bf8b4198bf6aa"],["categories/数据存储/index.html","0d006ad80fd2c1cd86a23f2fd3fc8cf1"],["categories/游戏开发/index.html","c59c0f5bac7f8dd8130384bea10be14d"],["categories/游戏开发/pages/2/index.html","d83a77b5229c1b485b530cf222ee8d3a"],["categories/游戏引擎/index.html","9170e922367e0334741901a9bed7a57a"],["categories/独立博客/index.html","80f344c4af94ee556b59181a74a3ae22"],["categories/生活感悟/index.html","3ad31dc861f9e97ea0a02b0965f22cac"],["categories/生活感悟/pages/2/index.html","3e0f179a3ebe266d5b5f6809b17030ac"],["categories/生活感悟/pages/3/index.html","02751efad5c5de6f586042713248a51c"],["categories/编程语言/index.html","7fc2a20950a57516bbb9261533de6e63"],["categories/编程语言/pages/2/index.html","0c41049d8336b6fea7a6892685736098"],["categories/编程语言/pages/3/index.html","bc819adac290fa3b161e312fb4cd9442"],["categories/编程语言/pages/4/index.html","81ff53294ff5e27e530a70f37ad1d54a"],["categories/编程语言/pages/5/index.html","dd441dc3cf4876be30b569bbbfb297d3"],["categories/读书笔记/index.html","43ec5962a2f38de0935b91416fc9e9ec"],["categories/读书笔记/pages/2/index.html","d139bf53e19d52223c1f1e2808a102c2"],["index.html","d16168b9e6e2bca87e020934ac4e54e4"],["movies/index.html","737a82b8ba607fcb1e9da7032efe870d"],["musics/index.html","0e2cc2b28fc90829ee61e601da54ae40"],["pages/10/index.html","e466b1d37f32d499b65485b32d207f74"],["pages/11/index.html","b0e214515124844c0e6bf37617d99712"],["pages/12/index.html","f94335eb5b8fd8f1e1859aa5afd0e007"],["pages/13/index.html","22a4bffe113033477f7a8c227a595bf3"],["pages/14/index.html","2ce8c3abaa8fb696c04c0bb21577e353"],["pages/15/index.html","6f6605293a659b190f37dac91d1ccaac"],["pages/16/index.html","b2540cc677442e241cfd4552285f1cc2"],["pages/2/index.html","892e5e04108a47960281184c646525c6"],["pages/3/index.html","444e0b6b4a5ef4455e9cd4b1eabbd4ef"],["pages/4/index.html","f6e0025aaf2200c0468bd7e49fe49b7e"],["pages/5/index.html","fed79bed7acc083daaf6ec430403611c"],["pages/6/index.html","c1c485b136b990d2ddc865cf2ca19ef6"],["pages/7/index.html","1d93fce5cd16b0585f3681f533f79489"],["pages/8/index.html","d4d80238066611a07f388203608d056d"],["pages/9/index.html","8db058cfe90c45930d0f25c650625681"],["posts/1059499448/index.html","595237227c9351176ef03a8d1a077cc7"],["posts/1071063696/index.html","04cea03b3580e026a48b8a338df4986a"],["posts/1082185388/index.html","2069271475e2117e781540fcc9f35fdb"],["posts/1099762326/index.html","295122973742f834cede1069df41610a"],["posts/1113828794/index.html","9adf2502f868d3ca504dcb9b92bb4887"],["posts/1118169753/index.html","797ab61423cae1111842c156166b5093"],["posts/1122710277/index.html","76693ceeaa6432330ccb37241c960690"],["posts/1124152964/index.html","2066541507ce6a7727428b3b97553910"],["posts/1127467740/index.html","9bbe123aa35c29e4d70fb95c845bcae0"],["posts/1150071886/index.html","c6eb81b2817450d2dfb3d6bff90daf6a"],["posts/1150143610/index.html","17c4dbc976d9649996e8f224055fcf2d"],["posts/1152813120/index.html","aeeb888da4413dfe0b0a4ab50c9cc1fe"],["posts/115524443/index.html","f2b0f8f38254bef953fdb08c8ab65392"],["posts/1156673678/index.html","4ebed06583ae154c544a0b348c95771d"],["posts/1166840790/index.html","329d16513e1a173e4abcb32a674ff0be"],["posts/116795088/index.html","5b56989f9af70a61a7d612dba0f5801a"],["posts/1176959868/index.html","0e13a11068c89b221322e557f8e862c9"],["posts/1190622881/index.html","40d3a127011922a860e3a86cff35252f"],["posts/123663202/index.html","d9c8ebe7fc59c40610e11aa0ce2dfd58"],["posts/124807650/index.html","c36b8e2254019b8ae5c844c6eebab36e"],["posts/1254783039/index.html","08bee3df0783aec5266d6a4d13543cc9"],["posts/1320325685/index.html","7985c62eafd5b6d4a03bd7310552f0c4"],["posts/1329254441/index.html","4f0b5098de9dc8f3118585fb324b59db"],["posts/1357715684/index.html","3dca95d7a9bf55fb03adc8edd3b9480c"],["posts/1358971951/index.html","3f3bb9614ecfb794e890d67bb775bf9a"],["posts/1386017461/index.html","a71a2f542c952d53e730e22687c79cbe"],["posts/1394521917/index.html","398a56a9078f779ff5e126497007ce7a"],["posts/1397717193/index.html","d5195ddd3c386f1fd983cd6680e63bac"],["posts/1417719502/index.html","b5396e83787a3a3dce011d71d6485c29"],["posts/1424645834/index.html","4ef50b0bb6fc84a8702b343fc9939b28"],["posts/1444577573/index.html","ec084fbb26d1327439775e28c5da9d95"],["posts/1467630055/index.html","5898ca62ceaab9c90bb449dda9458de4"],["posts/1478979553/index.html","c8e8693e4786bf8b3e0f4f4798c3b2f9"],["posts/1540537013/index.html","6d06da5103493c9714c9fb5c86cdaed8"],["posts/166983157/index.html","5b4ba954f1179b64a101946f0f019130"],["posts/1670305415/index.html","79bb44f43b7f10e92eed3dc5ddf6fdf9"],["posts/1684318907/index.html","7f8fa6303bb8a60e4546cfea53b92313"],["posts/169430744/index.html","21e6e07b301034d6e57a18118bb41003"],["posts/1700650235/index.html","130449867c4186a58958a06cdb17a891"],["posts/172426938/index.html","2e08aedb72309b9fc7e8e8e225d980cc"],["posts/1836680899/index.html","b099803398447d95bdbc0083f20bb431"],["posts/183718218/index.html","383e0dfd05bb7609c6f3cda1ccf111c3"],["posts/187480982/index.html","0609e998999008f81e74996f42de0abd"],["posts/1930050594/index.html","7489a69e959b72cd6f47388892d44982"],["posts/1933583281/index.html","2047a73f358074d716f7dc48af5b585c"],["posts/1940333895/index.html","6760eca9770cbf3bd934fd14a0f4ac17"],["posts/1960676615/index.html","9aff9a5418079357ae5c272be73255ef"],["posts/1983298072/index.html","1ec69667f53a7ef081d376c261dd9671"],["posts/1989654282/index.html","87f732bcf33ea1a2cdca9696050f99bf"],["posts/2015300310/index.html","1cb58c1f1c86bcceda7fd63f3afa1da9"],["posts/2038378679/index.html","3525858e9d62da1d1d4519e1239ffcdc"],["posts/2041685704/index.html","738e2fc24d010a3a2f40d1835477e2ef"],["posts/21112647/index.html","a6285142387d0db7c16a47b96028192d"],["posts/2158696176/index.html","fe4f33b7cd2416a0a99e5b8223daa476"],["posts/2171683728/index.html","3189514ae1c1006dcdf80735a53d39b9"],["posts/2186770732/index.html","7c4bf096bd0124487029ca3fc2442f0d"],["posts/2275646954/index.html","e2ed27c0834a5a2ab05b774dcaa30453"],["posts/2314414875/index.html","b165dd205dbf0e1c1c5a9ec837891995"],["posts/2318173297/index.html","926416e48272766dad7791d37da00cf1"],["posts/2418566449/index.html","7666932016b3e70a17c1d32e079b288e"],["posts/2436573863/index.html","aa40052a98a5a036f7a44efcb73362f1"],["posts/2462008667/index.html","57708d7c1c434f3af256d489bdbe5804"],["posts/2463121881/index.html","7233f6b38710dcb631ff2cb3dacb12c9"],["posts/2527231326/index.html","5ba5931b000bdb3ce6e309c530b6eac2"],["posts/2583252123/index.html","580c2bfb6a2f273e38a67aa30f5e61dc"],["posts/2613006280/index.html","df8661ca5f39f069ba5610fd8ddb60ed"],["posts/2617501472/index.html","c5885213bd6440d3feba8209d2975d0c"],["posts/2676125676/index.html","c359e9e2da1909a861329d4e9cd53a4a"],["posts/2734896333/index.html","ac11ae28a7e7a3c1bef772d4717f50e9"],["posts/2752169106/index.html","510b6bcb08d7f1bc6aa9d053f9c5e9f9"],["posts/2799263488/index.html","544117c1a06eacd6759e7adf4856cf56"],["posts/2805694118/index.html","216d1bf097843b6bd930c7e13165123c"],["posts/2809571715/index.html","651d79cdc54dd5c8a54e8242ca94e45d"],["posts/2822230423/index.html","d1ce2a4af61371fcdc25c22e43d45911"],["posts/2829333122/index.html","ba9f1254f9364353bfbac46e5a6487de"],["posts/2911923212/index.html","56e3d94b9e76806bd9bf0aef9dfd3313"],["posts/2941880815/index.html","46c570edfd82770f490e53257090d830"],["posts/2950334112/index.html","b157e3753a9b3fc3fdf9d25963eaaf14"],["posts/2954591764/index.html","c1443c6b75e3b82c3e77c6ba593aa047"],["posts/3019914405/index.html","a489cf0d79e7a35b3fb93600cce8b72b"],["posts/3032366281/index.html","1f3f586af7619e0f745f982c00d52e9f"],["posts/3040357134/index.html","da22754019444fbf5405b28a7a0e0872"],["posts/305484621/index.html","1b20f769205fd68f50483f636e4cbc01"],["posts/3083474169/index.html","978ad07ba017dcf11d417a7b338eed02"],["posts/3099575458/index.html","46b143191b08cf582ae33f0e30a68f91"],["posts/3111375079/index.html","329f0abf16c76ad31a037e13e6adba1d"],["posts/3120185261/index.html","73037d409c17b2c8cd419059c23d0bb3"],["posts/3131944018/index.html","c4744fa88ac53b9bcea1a719817b001a"],["posts/316230277/index.html","1ab6c69ae0b2f3827654cfaf355b131f"],["posts/3175881014/index.html","2dba5c0c0c38f5ba1aaba1821ca6a576"],["posts/3222622531/index.html","901315e4016130ca622154f459b358c1"],["posts/3247186509/index.html","193b509abf5db0ecf7e21f82ae6e3d52"],["posts/3269605707/index.html","4455b14e39e5cfd2bb7c5f3ca6785ca5"],["posts/3291578070/index.html","206459673f2ee823d3cf49363dc1bbad"],["posts/331752533/index.html","f29df874387b66f06c3572848a4c768d"],["posts/3321992673/index.html","7cb84c2426716269abf93e3b329c0b5e"],["posts/335366821/index.html","540890d202bba00143b48f5b1f96611f"],["posts/3356910090/index.html","7f4ac77c645ac93db1f75bcd3185e7bb"],["posts/337943766/index.html","f23cb01884f10144af020a7ff10ec88c"],["posts/3417652955/index.html","7e994ff769bd8a9640e01f1bc8046bf1"],["posts/3444626340/index.html","ed8b171fabb324bcc19e739df4c1ade9"],["posts/3449402269/index.html","791613ffe3b5cec9e3b5d9f9102387d1"],["posts/345410188/index.html","6025cc22a6fa4a8d21d768809bb95714"],["posts/3461518355/index.html","ebacbc627a00d0cb7cd12a7e2b042b53"],["posts/3494408209/index.html","7044c0678cbec8146139f0461c1a7292"],["posts/352037321/index.html","eefe88a35cc0d3f70b4c19403b284c69"],["posts/3521618732/index.html","f058743e4dac186cc514892008a2d341"],["posts/3568552646/index.html","231c67485a61a34551fac3f24b97ec80"],["posts/3603924376/index.html","9459a802894c71d36b1f37b59958a4e8"],["posts/3637847962/index.html","154a30b693f17654f4f968864492d6e8"],["posts/3642630198/index.html","f92770ee83d27785bdb577501e258c8e"],["posts/3653662258/index.html","2f056df2ecf7bccb652c24e0cef09f05"],["posts/3653716295/index.html","9ba141ff83d307c461a9f0338e21b1bf"],["posts/3657008967/index.html","6e4e8640a4ffde21d0a43a0ea8ff0f03"],["posts/3668933172/index.html","1b8a7017610fcc042483003762c18fc0"],["posts/3677280829/index.html","a41226526a5d1f2945286bebd7f15f92"],["posts/3687594958/index.html","d8cafba0b0940dbad4b682fbae67cffe"],["posts/369095810/index.html","f748368adfeff81de0088e049837fa3f"],["posts/3695777215/index.html","15640a08d16556eaed67b662da3fe8dd"],["posts/3736599391/index.html","6db223ce81d89ce3a08be57d071f247a"],["posts/3742212493/index.html","fee396d8462939ce2f1aebf8ee0814a2"],["posts/3782208845/index.html","a3b8d56f90c38fad259d33203db66ead"],["posts/3789971938/index.html","01d1f028875278e6ebfff87e9f88301d"],["posts/380519286/index.html","4c87f6c0a9a229a6b34522e5b45b80d3"],["posts/3846545990/index.html","f6797ec6b9e8c17c25fec3d0ef47c0f3"],["posts/3873710624/index.html","adf7f2cf7420aa2c2e43ffc824a8e5f0"],["posts/3959327595/index.html","05a9992d5740f686d3b88db20b769725"],["posts/3972610476/index.html","837cefc2e855f0b48dce7b19bd6c20d0"],["posts/3995512051/index.html","f677da11161d5cf86762f29628d3efe5"],["posts/4088452183/index.html","2da0d93a506fab1f71a693b1b01edeee"],["posts/4116164325/index.html","d7b3e02755cff98fa8749c2cb47bdcfc"],["posts/4158690468/index.html","f6072bcbd9ba0529acc17ce96b1cd7f3"],["posts/4159187524/index.html","8e604eb396041a55dae437e6791b4901"],["posts/4197961431/index.html","aca5a1cc27e5a7561280b8a208a0afea"],["posts/4205536912/index.html","60875266ece878da09abfdc0e39bc4b6"],["posts/4236649/index.html","4355566024acf3f6976ea1ce469d2192"],["posts/426338252/index.html","b8e81708e8f853be88cdfa6f6cbe1a4b"],["posts/450254281/index.html","272edc2f2797180b1fa8bf3bd24a9c60"],["posts/4891372/index.html","e9fc3d26f5e90a6640b3c17e5f88b92e"],["posts/569337285/index.html","8821533d35a0426ffe4f853e4f2813af"],["posts/570137885/index.html","639cbb7a36831349ec357ccc37f818a4"],["posts/570888918/index.html","620f44005cbdf693830c62682cc27a4e"],["posts/582264328/index.html","56b3a3f2be5fbc1b45ddfd716ef6d690"],["posts/632291273/index.html","bc4a46eb5e04909a8aff52f75e5a0b06"],["posts/70687890/index.html","93407b656a681bbb18926730ba14bc7f"],["posts/719322223/index.html","7aa80188716d52d322d2cf8bebf80261"],["posts/720539850/index.html","966d7c35ce706519bd80a3c271b8cc57"],["posts/786195243/index.html","b3201fbc3d878ad12eacb8ea64c6506e"],["posts/795474045/index.html","25be920e6909e4f3d32310363dbe5e7d"],["posts/815861661/index.html","497dac0e7ccb40d9f3bc099982808292"],["posts/821259985/index.html","f14f101fe437fcfbfb2e9134813721e7"],["posts/828223375/index.html","a1946ce9798dc8a0644fae75c2aed0b5"],["posts/887585917/index.html","65a146d2536ac8a52043fa169b05add4"],["posts/888549816/index.html","d2b8e72610bec41999786fc9e90731ba"],["posts/906436376/index.html","3743239dad248c1b48bdf8b4d8a5fddc"],["posts/907824546/index.html","acba83412a32eb61b0cfa273e6df444c"],["posts/927393529/index.html","df9b8d7852b518a697c4e4cccecacfcd"],["posts/94443781/index.html","feafc84e807ad3922eb6ed28fe47ce00"],["tags/2014/index.html","d646cb199b138311a064cc18af1fc922"],["tags/2019/index.html","eaad8648822a537288603947dbd9cbeb"],["tags/AI/index.html","ef9fa71b5c5277e85bfc26d35b37d0d0"],["tags/AOP/index.html","95bee11a229ae6d790696caf9a3ef3eb"],["tags/AR/index.html","fd2e97ee9d823de76700908872497d97"],["tags/AssetBundle/index.html","e3f64a88200d13ccff69cd865e8c4daf"],["tags/C/index.html","7caafd71e6e7993f22cf48c2f3e3ff8b"],["tags/CDN/index.html","e5d30725879b09540ab5fdeaeb4294cc"],["tags/CG/index.html","075903f2878bae71e4b44a463430846d"],["tags/CI/index.html","cbb3975d2da080f9fa206772b825b79e"],["tags/CORS/index.html","4cec19b524f26c94b6f8541910511ff8"],["tags/CSharp/index.html","c204453bc1315e9f2162ca94483beb76"],["tags/Castle/index.html","71267e6bfaab9e7af052cfb1b8711be8"],["tags/DBeaver/index.html","574331794c62d1faf473f9753bea33c3"],["tags/Docker/index.html","264942f82fd4ba5909780cc2c42068e4"],["tags/Dynamic-Proxy/index.html","bb8aa6e5639602df1272f073514c3f55"],["tags/Dynamic-WebApi/index.html","1e2e5b11b63e7ea412c14f43d052d69f"],["tags/EF/index.html","9d2a053300e34077b5d9564213e626d0"],["tags/ELK/index.html","5bf958ba06d5093122a5bc83bb33cbdf"],["tags/ES6/index.html","0f9d0210fa4ede66a65c1a7cc8129b41"],["tags/EasyAR/index.html","af09ba53613c4ec81fe8454aecbabb9f"],["tags/Excel/index.html","c67c2fd0a8b7f38f6d935294359bd180"],["tags/FP/index.html","28c71425af609c719096372d43c4c63d"],["tags/Form/index.html","5d5867bbc34487eef256ef8a6fbc88a0"],["tags/Git/index.html","8e77bff73496848268a9b6120532b684"],["tags/Github/index.html","55d8c627c06e3bb29a2a7e87f1b85102"],["tags/HTML5/index.html","21becfda415507af73d1e8eabf251d6a"],["tags/HTTP/index.html","ef7cb26d6cdb60644b93101caa248eb7"],["tags/Hangfire/index.html","4363b73efdfb1b4a594e229cc478b4d4"],["tags/Hexo/index.html","916b444326cdd970fcf6336e3e2aeed1"],["tags/HttpClient/index.html","fd1781265530389a726fccbac283075c"],["tags/Hyperlog/index.html","2a760a4fc523c881c63ed415fac7f94d"],["tags/IDE/index.html","36d307f56ef0c964b26c68a676326fa0"],["tags/JS/index.html","4be9062a6695500b6d8687115d56649a"],["tags/JSON/index.html","7f429f7b8eadf1e58dbcc01fdd36af0d"],["tags/JSONP/index.html","557de19d58a993bc7e4b47dd5034b10b"],["tags/Java/index.html","2d0e704b5cf4c2c8befbb0d79e58b4fb"],["tags/JavaScript/index.html","f233ef4116ac6dbc0ebad8766ba4d0e5"],["tags/Jexus/index.html","88fbbac8b617519ec3c474264e7994a0"],["tags/Kindle/index.html","8159cb8f01ff4ae0e173cdd85985332e"],["tags/Lambda/index.html","eb24c2274d1436fd1773f94dadd68180"],["tags/Linux/index.html","38239a8824b3f99ae8dbc480b815492f"],["tags/Liquid/index.html","3cd8058d87e1eba5563aae55eca818a2"],["tags/Logger/index.html","1274bf225ba00aa2b5a6077a4b5c19cd"],["tags/Love2D/index.html","1c893194695098f11eb99fb006bef9bd"],["tags/Lua/index.html","6d0abc8b6d33b1f0d6bd5c7e6bd92e57"],["tags/MMD/index.html","b7325e2287a91b26d25429928570ca32"],["tags/MSBuild/index.html","fd36cbadc090700ada89eabd5d90a4dc"],["tags/MVC/index.html","c589d5c55087bb018f0ae8c8f380ba26"],["tags/MVVM/index.html","c847d1244aacc3505421f395476d5257"],["tags/MapReduce/index.html","d170fd60d1adaedfe7a32724638daf80"],["tags/Markdown/index.html","cffdb301596a7ce9defdfef7381bea44"],["tags/Mecanim/index.html","1140d26cf74928a0e203fa903ad47481"],["tags/Mono/index.html","e62d233161f8a550140b7e5a6aaa972d"],["tags/NET-Core/index.html","3ec929b79e744c352e866349c544c88d"],["tags/NET/index.html","0258d17620a4f268f83b314b7f03dfc5"],["tags/Nginx/index.html","b24c1e388c247c8f73c2bc8bc7912363"],["tags/OBJ/index.html","219c4644042a5e8e3d89bf330f6f78f1"],["tags/Oracle/index.html","e13c7c0c9e885cb6c1697690f5ca58d8"],["tags/PL-SQL/index.html","deae088a26197d35267c06e8406ac0bc"],["tags/POCOController/index.html","b51ad7b1745b3120673749df01fbb77c"],["tags/PWA/index.html","8a154f885e6aa4e51de87965f2c57790"],["tags/Python/index.html","749e18255a8fb1cc725c2f9bd2cdd91b"],["tags/RESTful/index.html","80a6bddda2580bf43a90031709ccb555"],["tags/RFC/index.html","eca104f75e12e2aceb61d0a3439e086b"],["tags/RPG/index.html","1f873f50dc6ac2dc170bbc4da371e0aa"],["tags/RSETful/index.html","8e4478bc4517e747e5a52958b6685e6e"],["tags/React/index.html","e53ad07de3cd49d1233dbab55303e688"],["tags/Redis/index.html","68ee8212ebad036c8d2bf5378420c2d5"],["tags/Referrer/index.html","da56f97bd9f18f49383bd08e509f01fd"],["tags/SDL/index.html","224b8d6d05515c7fe2992dd74eaca5dd"],["tags/SQLite/index.html","7db8c606347d5bdb6ada4f00b65be724"],["tags/SSE/index.html","5d6f7bda78f264abbb6ca11258f5d4db"],["tags/SVN/index.html","45bbf0396a0fff6829a5d7d0403750ac"],["tags/Script/index.html","f4c3860a18f1a33e16dd278010ebf355"],["tags/Server酱/index.html","a089165c7d69d85fbebbed5e2639e591"],["tags/Shader/index.html","5d56665a9d1295cfc96f894d4604bae4"],["tags/SignalR/index.html","a61287b6ba02fd4d83fb14fc86425fa7"],["tags/Socket/index.html","e9e4c17827f81886641bad3cf0e83ee6"],["tags/Sonar/index.html","6d7f2607d1dc765f592987c4d5c8ad01"],["tags/SourceTree/index.html","cd786ae30ba3bb4da7e240f23a3a8c46"],["tags/Sublime/index.html","8747d40b1774a5d6e22a9463e19d0a39"],["tags/Swagger/index.html","96f5dab647d423fd3d641fe67a5cebf1"],["tags/Trace/index.html","3d2168a3683f65213dafc748988f69b6"],["tags/Travis/index.html","ecfed0236247a62b064e24fa0005ddd3"],["tags/Unity/index.html","4bd7396c23793b4bf3c2391761dff296"],["tags/Unity3D/index.html","569993338a09123a8690e64100c173c1"],["tags/Unity3D/pages/2/index.html","bcffb018fc80c5372ac431a6027712a1"],["tags/Unity3D/pages/3/index.html","b6f1c78ba55d150402f719296b35b3cd"],["tags/VSCode/index.html","862c6270ffe5839f0bd06aab12314ea5"],["tags/Valine/index.html","9a742a451bc752a09671c96d7be65e47"],["tags/Visual-Studio/index.html","bb6ba1bab18193be3d3dada6974c58c3"],["tags/Vue/index.html","94c92ba99c041b201545c192f5e93b78"],["tags/WSL/index.html","812d7f5dbf96460e520e33dbe2447931"],["tags/Web-API/index.html","7b2d7e74108927de96d9aa1cb0d4429e"],["tags/Web/index.html","33f92eb7c408e1db3924b02d67335fd3"],["tags/WebApi/index.html","c797dedb14672a311479a0563498dab2"],["tags/WebSocket/index.html","a87c3ee6c485cc517b4122c2aefbf43f"],["tags/Wechat/index.html","62fee2c5c9d000a74c0bcb1a9c95b5db"],["tags/Windows/index.html","2a49eb4256dea10f362f03312537705f"],["tags/disunity/index.html","c707b8eddf03d6de201f3d2c90d9a45b"],["tags/index.html","5cef49a0071b4a26190f19af4f9c1af3"],["tags/matplotlib/index.html","a7a9c7cefc88ef4122d02d1a4e4f624c"],["tags/njsDelivr/index.html","9264ada51d30f45c050ad8dbca0a2b5e"],["tags/uGUI/index.html","99383cc3948325e9e085c925ab5ccbd9"],["tags/zTree/index.html","0c834e91a099cfdb72758fa32b749d01"],["tags/一出好戏/index.html","f9e00ea4c882b38abf2f1d6655537b15"],["tags/七牛/index.html","fa4a25359bcbbf278f29a65d030b9c96"],["tags/主从复制/index.html","e6766306354b82c6aed8e2805b74e3df"],["tags/事件/index.html","f106f1bd5533df29fc596e97dd9c591a"],["tags/二维码/index.html","368cdf4dc1e84df7ff85af027c142e5b"],["tags/云音乐/index.html","369d7c18eb39e4af2bf338914aa98ab1"],["tags/互联网/index.html","e9d171da5289bd922ddef4c68397a578"],["tags/亲情/index.html","606a043f23fde772facfa5a0ca0a1ca0"],["tags/人文/index.html","96b6581715452093e1c9f61628f6348b"],["tags/人生/index.html","596a296de72ccef98ded42d9ae936902"],["tags/仙剑奇侠传/index.html","fead50e701fab726a645b29ee25e940b"],["tags/价值/index.html","d96a7e9d471427f7e384cc341216dec1"],["tags/优化/index.html","766d127b9fd6b6a33adcb015156ae7c6"],["tags/全智贤/index.html","3056f56c51813070e5467be4d6850c39"],["tags/公众号/index.html","5df592f484cb8ce74fd757465a0f7fd8"],["tags/关卡系统/index.html","8459ab75317ea78d0889c61978722562"],["tags/函数式编程/index.html","f663ae02e647c9462d83b510e8b00e96"],["tags/别离/index.html","58abbc5159b4688ad41c04dbae85920e"],["tags/前任/index.html","ee522aa3f65db10018562469013d245c"],["tags/前端/index.html","401632dfd1d60c4be7a7f2584db1f53c"],["tags/剑指Offer/index.html","3c105d9d71616bf86d434f27c3fe6e7c"],["tags/加密/index.html","2f2192ea69f52ffc00a18dfb2f4ba6be"],["tags/动态代理/index.html","d8adf3949963e141056620099be67265"],["tags/动态加载/index.html","eb2e4ec0d8bfbcb5537776f8c861dfa9"],["tags/动画/index.html","40824be364f246ffd3f701158fc0f964"],["tags/单位/index.html","e4f8e0ed531c12024c3115119c358758"],["tags/单机游戏/index.html","ef988ee7d78f8984aa2369edbcefce6a"],["tags/印度/index.html","276d783287052b05817e69af316188b0"],["tags/历史/index.html","93b48f95b1b35aeaae4315cf4fb83d02"],["tags/反编译/index.html","979e72809d8b99d4e40d0042ccfc45ba"],["tags/同步/index.html","ce2dc9cadbd7f79411faf1cc5e440014"],["tags/后端/index.html","b448e0d2f6c6e9b0a7f4c528ace36db2"],["tags/命令/index.html","1a1624cfd2ca978190b1ed964391c254"],["tags/和平/index.html","7754ff36065870600cfeced840158b9f"],["tags/响应式/index.html","074eb3e563cda61aaf5a21ce8d771c15"],["tags/哲学/index.html","b936558e34f5cf248e7364c6dcda15d0"],["tags/回家/index.html","e27bb48f74b6f961fe14114ba48c1177"],["tags/回忆/index.html","3f7fac845e7518dc22d4abf81ee75d1e"],["tags/回顾/index.html","33a529e816a4e1e7a60a3835996a4645"],["tags/回首/index.html","43a0eb8050b53ab24eef64f8a02c507a"],["tags/图床/index.html","4dcdf5fe57803f2d2ebfd3be077d3250"],["tags/图形/index.html","d1ca1b9a0560b9bd51d7dcc53f8ef47b"],["tags/地图/index.html","3dfc6a30a5ae82f8922b157b5c75db2e"],["tags/塔防/index.html","bce2badd8940be0709d4bd48175f541a"],["tags/增强现实/index.html","c472e864fa9dcdbbeb997f54e3bfe031"],["tags/壁纸/index.html","d80548c549124aecde7c9d0a744c1d84"],["tags/夏目漱石/index.html","9066a2f3f428f994141799586f6514a1"],["tags/多线程/index.html","cc26ca2c314948fc5cf7f2eac84a553a"],["tags/大护法/index.html","f08632bf396411e45698c0d958ca47c3"],["tags/委托/index.html","97fd65cc9613624863df0d2cbed8e24a"],["tags/孤独/index.html","afc865c5b3b081bfc6a91ff5223ddf19"],["tags/展望/index.html","6570e78a1437b4eb1dcca74215fd7aff"],["tags/工作/index.html","8f2a1ed1205c2b32b41fac8cd81a1a1a"],["tags/平凡/index.html","4a8efe72ecd554aa1e8c6643af360b5b"],["tags/年华/index.html","4ed6d0d748c19143e065cbcdf6a861ad"],["tags/年度/index.html","f660a347e6a3b24b2563bc2964b2671f"],["tags/开源/index.html","4f95ca36646cae856f4d35c1efbb2de2"],["tags/异常/index.html","84a825f29e37e3abd4a747d676185f41"],["tags/异步/index.html","3d7a4764069a78844435589f276b40bf"],["tags/引擎/index.html","af9c08abc13377a6ea27acb493a13c37"],["tags/影评/index.html","0ed37033ed06a6d9a2e6945e542eb3fb"],["tags/微信/index.html","30a4da54c17cde432394faae7f0e5174"],["tags/微博/index.html","de519ac9d2eb091049ce3df44a7df52c"],["tags/心情/index.html","de6bcedc6079b3ecca9b30ec4f2fa905"],["tags/思维/index.html","4af1a42a15ccfb4735a9f14e0861b9d6"],["tags/总结/index.html","8cc4574477cb0fa222a9337bb62b9ffb"],["tags/想法/index.html","20dc3242e7265deb17e8690be36c3cf7"],["tags/感悟/index.html","a9d64ba0cd681195ef1cf254b78e2152"],["tags/成长/index.html","92b79df6f72ef1202967f7721eb79035"],["tags/我是猫/index.html","3e7c89c5ae5ce40fb0271f06f27f5e5e"],["tags/扩展/index.html","f6ab6b2e677d7116595dc6606049e5ab"],["tags/扩展方法/index.html","3376e76d74f8fcc6a5c7896e1ef98689"],["tags/技术/index.html","d91315a7e65b1d91cc18beddbab577b3"],["tags/拖拽/index.html","6521eeeee9159f62fb12ec35607df5b6"],["tags/插件/index.html","85b179e6122f727af8fee3be8028bccd"],["tags/插件化/index.html","78a8ba374a342d783ab6f91d68b90ba6"],["tags/数字/index.html","1beb07d5bacff83a07a7a17088ab50ad"],["tags/数学/index.html","25cfe722c80ce5624c32a9a39ca6ba0e"],["tags/数据/index.html","fb78b1ee7ea08593986d26f7cd4e28a4"],["tags/数据交换/index.html","01509ff00d256b82d9bdc9579f0c0327"],["tags/数据库/index.html","fb731702d2d15beceadc0aba8d941363"],["tags/文本分类/index.html","c02143088d0d7f56154f7bcf386fb376"],["tags/无问西东/index.html","39d0622dac26439d5dbc4c7ddc777bd7"],["tags/日剧/index.html","cacaa7c0b9db4b853749e8cac612771b"],["tags/日志/index.html","34adcb32767dab05dbce1dad92e98970"],["tags/日本文学/index.html","24726aea1f793ad23e9928123344b1dc"],["tags/时区/index.html","7f188115a41e08c762484ebcdcd7210f"],["tags/时间/index.html","11df8649ec67b915cff7c32b43ea9ba9"],["tags/服务器/index.html","6cfa7fbf66da2afe3d140d2c95fe9d37"],["tags/朝圣/index.html","f21e4889ce253f9c6d5643d670d6da92"],["tags/朴素贝叶斯/index.html","ba85a8b43a21efd3c7a4f77704a84ffe"],["tags/架构/index.html","12ee33bcb2ff2bb16487088a9d1c3346"],["tags/标注/index.html","1c097f175af7693e2096066d144e2781"],["tags/校验/index.html","def185fa9b83ea37b57270d6e941f7d7"],["tags/格式/index.html","592405408f9540b7b9ab4737820873b5"],["tags/格式化/index.html","7c3ed43d63a4f6e2029a493747fc71a4"],["tags/桌面/index.html","f1ccfa2d0f35e441ebbddaf92d5f8a62"],["tags/梦想/index.html","dedd852156576aaa74f00ec25f6086c8"],["tags/概率/index.html","959dd4a41c0af81f9e2b95be4a61457e"],["tags/模板/index.html","3ac5e20aa7fe414ec7c049f5c290c63d"],["tags/模板引擎/index.html","9fc3c61b855d937b942f89d7de492995"],["tags/毕业/index.html","d3bacec1ad1d843ddc6257666ded31dc"],["tags/毕业季/index.html","ed5f91cae19018a4eee617974ed8c9bc"],["tags/消息/index.html","c612b4ffb7c15bb7031ee43e6975ea4a"],["tags/游戏/index.html","4dc2ab2084856fd1aac8372b16b5cc3b"],["tags/游戏/pages/2/index.html","d9d79bd5f7b822be9a540a55aa963273"],["tags/游戏开发/index.html","90b2bb5226435b06c7df378c42e3e89a"],["tags/游戏引擎/index.html","0d12f91cede681048bd37b37ef734960"],["tags/爱情/index.html","efba291a495bdb58e04f645016ac5a1b"],["tags/版本控制/index.html","80d9f02e7a1dde567f7d7afa9702b87b"],["tags/版权/index.html","313c2220511511fbcd61528f17fb9861"],["tags/特性/index.html","61553ae1eb4cca87904b891a1379ba1a"],["tags/状态/index.html","b186401764517da22f9df58846713e9c"],["tags/现实/index.html","19da9be48116a4f8b1a878b2424fcda4"],["tags/生活/index.html","9d36701d2af471cc394134b1c6249952"],["tags/电影/index.html","6c096721867403cac5b4d6c9927f5a44"],["tags/画家/index.html","e4ac0cc5068ff87ff4aa8555a04f2067"],["tags/知识共享/index.html","1510d12f9040608886165c4ae70e2e2c"],["tags/矫情/index.html","138c20e409b70ea2d6653e07360fdb2b"],["tags/程序员/index.html","029002d411983317f3d513c44ad1d438"],["tags/穹之扉/index.html","18727c70efa90740cde42ba61112d827"],["tags/穿搭/index.html","bddb804638d49976b761907d62709fac"],["tags/童话/index.html","487c3cb496b0e26b1da2dcefb36b501a"],["tags/笔记/index.html","47db2ceb9fa44c99c462659135864a9b"],["tags/算法/index.html","220ea9e96351acdd545d8e211f9e4075"],["tags/米花之味/index.html","7c57a1cb5dff5e5ca8431e29ffa8224d"],["tags/缓存/index.html","b0c599b08781301b4db09cad329aaba4"],["tags/编程/index.html","65aad28ab01d1d39a827ca2390170811"],["tags/编译/index.html","94273fc3a238fc92015c807db0085a1c"],["tags/编辑器/index.html","2a21cfd431fdc8a62685f5748702f24a"],["tags/网易/index.html","8f06f64975b7ea08957acdb6ea4a4a0b"],["tags/脚本/index.html","76f511696e035a12e752a6d8552b96bc"],["tags/脚本语言/index.html","ec3265ea89c9a642444f756d28e1c4e7"],["tags/虚拟摇杆/index.html","46c95f8affa70ec52228f79dcea3ef07"],["tags/蛋炒饭/index.html","064525cc4ea24b9a093fadb27c314e8d"],["tags/表单/index.html","2fcd0aadb6b1876857c4d7a5559ceec7"],["tags/装饰器/index.html","0f2275a78dfeb5eeac5862cbe08dc68f"],["tags/西安/index.html","ca66a4aa88986c2c8c7682782b4040d6"],["tags/计算机图形/index.html","fa2624fdf4590737524aed232e4db56a"],["tags/设计/index.html","5995bd7a95a48b722e4ce3bfa28f7521"],["tags/设计模式/index.html","79b5314c7c93ee7cde6b2f8b8751ba93"],["tags/访问量/index.html","ce33563f5e49810c48c3f7d7358f4031"],["tags/评论/index.html","d8fdae439e3df9589f97596e212212b2"],["tags/词云/index.html","2a94420c2dd403c0218451d2b633ff8c"],["tags/诗人/index.html","10f6062913da22cc8b5f6e8c6b856cfe"],["tags/语法/index.html","af2afd37137ff97f9e40e39690b4b562"],["tags/请记住我/index.html","3437c8002fbc1f7db6d951ce02684c37"],["tags/读书/index.html","5d16fdef8ff320bbd6d5ca2a210e6ce5"],["tags/读写分离/index.html","20648ec12bb448a5a43265a87451e5ce"],["tags/调试/index.html","be4314cf4ae606016e6b5999120b510f"],["tags/贝塞尔曲线/index.html","46fb3f8fb416d05f94418027ddf79eaa"],["tags/贪吃蛇/index.html","c52a4a4f75aed37121c45cbd40c17496"],["tags/资源提取/index.html","60c5d9a2632fd2c8b6a510af49fdf829"],["tags/跨域/index.html","8b567ddefec4c805bca76de896558b5b"],["tags/跨平台/index.html","b179f5cd8e5b888b3676d7efcb9648fc"],["tags/转盘/index.html","2d946813fec8214cab092cf075804a84"],["tags/迁移/index.html","66a229f37c3bc1264456e0e7e525768b"],["tags/通信/index.html","ec5531e9af223fb1c66085b1f573864c"],["tags/邪不压正/index.html","021394705b92b8099a925d370e54421d"],["tags/部署/index.html","1c10716936c5e2a63c412d0287ce9535"],["tags/配载/index.html","08496513a544c3b86e14b289515c1ec0"],["tags/重试/index.html","ae36d085a297a2404230b5a01a8f5c7e"],["tags/长安/index.html","40fe1bf7ea40c49b2b7149cbb5793667"],["tags/长安十二时辰/index.html","d4785db0d92e06cfb415e800e53cf2e9"],["tags/阅读/index.html","7053a4d95827739f3d6d7332419e07d2"],["tags/阿里/index.html","1831a99aae6f18066e235a72bfe219c2"],["tags/随笔/index.html","302a78929e5bef2f9d4feae3605a6ef7"],["tags/霍金/index.html","3fe7a18dee41a9f985f4da66f7fd84fb"],["tags/青春/index.html","5e226a5e1e1fd87fe73348daad664fa1"],["tags/面试/index.html","0d3d58e4e0761c364066491c68a7b700"],["tags/韩寒/index.html","5742387947251ac0e34e2913960bf9d2"],["tags/马尔克斯/index.html","1e3eb7104a92e7b7f0c7c65cd48ac4c9"],["tags/验证/index.html","a2b64e0477fc6a48149987bf1d6eafea"],["tags/黑客/index.html","5afb2df5ebca0aef2cb382f6318649e1"],["wiki/index.html","d214dda23651b85d9581f7db44617d82"],["works/index.html","5f3e0dba951b0ca4fe45146ef8577bc4"]];
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







