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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","d7d5ec9867344e25310bdddbe855507f"],["archives/2014/12/index.html","6ecbab0ed0c962a0b7ef3e24447e7ee5"],["archives/2014/index.html","809348bb6ff7f3154385750197fa0ad6"],["archives/2015/01/index.html","6ad7109e2bdf4c8cb739e669927809c4"],["archives/2015/02/index.html","e1d2e0458c057facc14da60bb71c5912"],["archives/2015/03/index.html","a7cf0cea6b8cf27f7a4ad1813b900b72"],["archives/2015/04/index.html","738ed5318e634b85f6832a16493c5ec8"],["archives/2015/05/index.html","38b403afc9f4b5cf039d525382c94712"],["archives/2015/06/index.html","eb0cc21c35fe66aeaa1740ea2efb8f67"],["archives/2015/07/index.html","b14066d680f395ae30dbb3e3ec176e7e"],["archives/2015/08/index.html","0e5f94515bd4ed873fcd64cfca99f113"],["archives/2015/09/index.html","43609cf717b6c48893b62687d5cff373"],["archives/2015/10/index.html","d26ccc19c2f7fdf0e903e44cb4ed6939"],["archives/2015/11/index.html","11bb5e2c686e56c27456134f26ce9d0e"],["archives/2015/12/index.html","e42de6cbe1aa5382fbc7bad67a9fae8d"],["archives/2015/index.html","a991fec8e774a520b2f44551539057a6"],["archives/2015/pages/2/index.html","5a68b9f4cad75bd4e21a936fd9458eaf"],["archives/2015/pages/3/index.html","64a9ef1800da97cfa9ec7e76e9e9df85"],["archives/2015/pages/4/index.html","72fa6b8a750405476150ca76aa86a019"],["archives/2015/pages/5/index.html","060e13ce1f12599eb36b4978742c2a20"],["archives/2015/pages/6/index.html","c1655a4e5a1e821b72be955a98987ea5"],["archives/2016/01/index.html","3224a93a3abb121c071b5c0acda432dd"],["archives/2016/03/index.html","c897457380d7807ff398524274bf9d95"],["archives/2016/05/index.html","f0865fc8714ca70cfacf51991d70e46c"],["archives/2016/06/index.html","1c426de56813be3908b26c943ca98135"],["archives/2016/07/index.html","30eb08eb33b9fed18685f981bbc366e5"],["archives/2016/09/index.html","e4dd557cb5e02bad096ea27f8f06a7ad"],["archives/2016/10/index.html","550096af3b58e51f95e962e39b1d7a29"],["archives/2016/11/index.html","39ec54aa2ad90d74210f7c476ba6faf5"],["archives/2016/index.html","3629b126eef7450009fd0a8e7b3a4e9a"],["archives/2016/pages/2/index.html","2bef0cc80a7428a0d3dc2dd56d56d1e0"],["archives/2016/pages/3/index.html","8cdf5ddc921ef799ee0d8fc0e5df951a"],["archives/2017/02/index.html","d9cafdf0f63a802b880968de25d4e277"],["archives/2017/03/index.html","15ea4e9dbd9e6a75234d90a0e21792bb"],["archives/2017/04/index.html","15e5ad7c58be03f124a31bdd15ab2f8d"],["archives/2017/05/index.html","23b4ff6d914c1c183fc9f333a0da276a"],["archives/2017/07/index.html","9a82f54faf6572fd1f7fd7f360024450"],["archives/2017/08/index.html","62d5f1f669fccde8a6da2bc6d87a6304"],["archives/2017/09/index.html","2ec38ae4e072f5b646a191b0e5a943a5"],["archives/2017/10/index.html","2e87e41692e12959bb8d7a09a2fe3498"],["archives/2017/11/index.html","cb11bfcdfa0398f34a89185d0c5f6e7e"],["archives/2017/12/index.html","671564d236649b299334f337cff64860"],["archives/2017/index.html","2197aa62209d9321e998994e12c8e1a1"],["archives/2017/pages/2/index.html","681dbb10d8963b3a8ac2744bc66b7f41"],["archives/2018/01/index.html","04e4e522bd1a592a56fe4aeee25d1b05"],["archives/2018/02/index.html","28bb9cf4c2f6b3b217feee76b86ae0c8"],["archives/2018/03/index.html","b90bb5c3508df71805d1a217108abbb4"],["archives/2018/04/index.html","b01752c61feb0446f11fe04260c2588e"],["archives/2018/05/index.html","8c7d269e7ac6f5dbe117b62be082dfa2"],["archives/2018/06/index.html","ba361acf31777c0e9aae2409f37887f5"],["archives/2018/07/index.html","7543a71ad5723a68426a91c40b436afd"],["archives/2018/08/index.html","36890950597d5bc77416159ea220167a"],["archives/2018/09/index.html","b950fe00d29400809b608615d47fc357"],["archives/2018/10/index.html","56cdfc21045d822204afd1295ae565b2"],["archives/2018/index.html","ca9041ab512c80dca85c6c612907f8de"],["archives/2018/pages/2/index.html","11ac893f43bfe5f500553ea26d97198e"],["archives/2018/pages/3/index.html","ed51bb073675d99e36ac312e595387fc"],["archives/2018/pages/4/index.html","d005396a08d2e693c33b00bf30c04272"],["archives/2019/01/index.html","d1a3bca9e47ccda7ef9bf9f438e9ca20"],["archives/2019/02/index.html","2180cc830df94406ab9494403991fc90"],["archives/2019/03/index.html","cb20eb7bbf8aba2062d8137382d16cc8"],["archives/2019/04/index.html","57433320f9d4671d1708bca8e729b212"],["archives/2019/05/index.html","cb00b3144112fa3e5c61243717d876a0"],["archives/2019/06/index.html","4eb78b40bf48d7a2dd5d1d267612dd76"],["archives/2019/07/index.html","b5faea1a5a8727a8a8054cd717bd81bb"],["archives/2019/08/index.html","0fcef5da893ffc5b425414fbc9f6c21c"],["archives/2019/09/index.html","a5c6e95b7b8799d36480b5fee20c565a"],["archives/2019/10/index.html","62c49106403bb72a08eb80400c268ee3"],["archives/2019/11/index.html","b750a3a3444f06abdfc9396128870844"],["archives/2019/12/index.html","9479cd3a2d8a60628aaa0af62006525b"],["archives/2019/index.html","55be044e5eb4292e1a7fc18d8f3163ff"],["archives/2019/pages/2/index.html","ca449ff5f359ebf64fa8736ab2b8d7cc"],["archives/2019/pages/3/index.html","ef1fa1f570b785caf6accaf1f5c9067a"],["archives/2020/01/index.html","8627cb151ab56db1ab0233b5a701d5cf"],["archives/2020/02/index.html","44632c6a88d20115b8d47c0680a3eb1e"],["archives/2020/index.html","4e69a811de33c9a247b908712cb98674"],["archives/index.html","1a9dce0d614cf3b4db331324d6439572"],["archives/pages/10/index.html","f272653a993fe0b562db922caf155867"],["archives/pages/11/index.html","f010e6866f6f745b2aacaf15543a152a"],["archives/pages/12/index.html","db4fb7d104f2f9bb169e19bcb5f5c050"],["archives/pages/13/index.html","2991f09f500b28ef2965b76aeb819945"],["archives/pages/14/index.html","42ed9d406766090b6a7096326d531792"],["archives/pages/15/index.html","4390855c2f4e6dd4be6745ddd9af120a"],["archives/pages/16/index.html","61cbf1a664fd283d5f8975f6c2ba929f"],["archives/pages/2/index.html","a1c5dcfe5d36804a4086c354757f906a"],["archives/pages/3/index.html","64cc24210f5c4531bdc801b3261df16d"],["archives/pages/4/index.html","c49b2f0e56b6f50f7f29b98ffe6e8322"],["archives/pages/5/index.html","711cde4a90861d917d7d7497e2e7b84b"],["archives/pages/6/index.html","d16e753acbb769976e85de64294ce117"],["archives/pages/7/index.html","1995defcdfb653ad338749bc97a07fb4"],["archives/pages/8/index.html","de1a3af12bc619dc34c720a36e0af912"],["archives/pages/9/index.html","03657c5492daf1f1de65fda2f40a5260"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","8a3a86f93468019a21c5db4df5bd2ec0"],["categories/Unity3D/index.html","8edb2729a49c15e2a2a736d9aa1dda01"],["categories/Unity3D/pages/2/index.html","fc8d2f6e7145a527a31607964e13e8d6"],["categories/index.html","0479a5f64245e41192ff62b0ccd2d4cf"],["categories/人工智能/index.html","3519de5c689b54f782a5ff78e4bcf3ac"],["categories/前端开发/index.html","cc0fe25990b2a9b34746d7eae26430fe"],["categories/单机游戏/index.html","600ddc2be82e40e3b42db0396b52f0ec"],["categories/开发工具/index.html","99282d239cc18ed23ad358ac6ef2cfac"],["categories/数据分析/index.html","94a8ecd75525b54909d01da72b02913d"],["categories/数据存储/index.html","5371d529c4ead5a6eaffc03e59b5ac5e"],["categories/游戏开发/index.html","f679cc9d91fa0712b642d7ec3c43fb24"],["categories/游戏开发/pages/2/index.html","0b1ea748c7ff1883415a62f0d7d0c5dc"],["categories/游戏引擎/index.html","cc1ccc3003983a4b8b88786d42d2cfc3"],["categories/独立博客/index.html","50c0f7848fa12484380d6409999da4b0"],["categories/生活感悟/index.html","88a920686646be5c7451c31322cf74d1"],["categories/生活感悟/pages/2/index.html","c163f12c8d61858594d044c64028eb32"],["categories/生活感悟/pages/3/index.html","1751abe077a98e6c7e7e734833fe74ee"],["categories/编程语言/index.html","e754fc9861e0e4f584439b82cadee6e3"],["categories/编程语言/pages/2/index.html","ac6ba92e1a2b67483f435a85f17d3c1c"],["categories/编程语言/pages/3/index.html","040a4eee43b33c829e11af9337734082"],["categories/编程语言/pages/4/index.html","fe480d3d736eb35334df426e7faeeeef"],["categories/编程语言/pages/5/index.html","423f280ee46557fbf559e7643f932325"],["categories/读书笔记/index.html","54db56b22aa305f2a38a0c7b7c56af19"],["categories/读书笔记/pages/2/index.html","1773d16264984f590f19aab3d8b6a788"],["index.html","1511fcbd073e82d63de32f59e4668b02"],["movies/index.html","79e37f0e912cb7fb20d2a8f5dab15bbf"],["musics/index.html","d60f142d34a87d7b1b079b6d40847f51"],["pages/10/index.html","3a4ffdc405f143fa96137e0b69d24db1"],["pages/11/index.html","9d72ddc5d24f450191d7e724173799b2"],["pages/12/index.html","3a1824783fca1123114f0ec8c50f0639"],["pages/13/index.html","166c3af2c774543692bcbbc44a6ce89e"],["pages/14/index.html","e55e196e968b907227e0b248a59083b4"],["pages/15/index.html","9afd61be913a6a447ea68d076fbc1930"],["pages/16/index.html","b264eeb03cf04dc4d933cbf8c453ffa3"],["pages/2/index.html","3f3cbd0f1a67978f6fa75bc591a47738"],["pages/3/index.html","0e530c66384cfa2755948332fc551026"],["pages/4/index.html","00b866f4d678c807e2f1657229a0a510"],["pages/5/index.html","068246d39fc4efe8825b89cce583b388"],["pages/6/index.html","aaf195c95b3c5de772e79a4c3b1ba668"],["pages/7/index.html","3bb62d6a02adf5ca44a3352597bb48cb"],["pages/8/index.html","3ce0d293d357c25958f61a1b3eec2500"],["pages/9/index.html","8f595630edacc354638cdc4b68b5e8b0"],["posts/1059499448/index.html","287a5622298b284e33c2830ef559eb13"],["posts/1071063696/index.html","31bd7dcc5724d7a99f8c19c0ae2f83a0"],["posts/1082185388/index.html","f542ee773942b09c2270f7121ffc6041"],["posts/1099762326/index.html","af74c49cdf92445b77d14a30655291c1"],["posts/1113828794/index.html","be2ddf2cddb87c61321f6a15c1555162"],["posts/1118169753/index.html","180746489e9005cdbc27f671d01e1ab3"],["posts/1122710277/index.html","f7188603d8721ae55488d4516396da85"],["posts/1124152964/index.html","9daf0bf764566a926f8a9095e1478a16"],["posts/1127467740/index.html","109ae3727fedc5e3fea89c0554a94179"],["posts/1150071886/index.html","4d2328b3dee5bdddd0fbefca209007b9"],["posts/1150143610/index.html","e654f2238c519cefcb67a6208d1f6a87"],["posts/1152813120/index.html","ecbdd63def0c03ea85bceb6b6e16f6e7"],["posts/115524443/index.html","074c8565c53da122bf229100d275acc4"],["posts/1156673678/index.html","2112b87dc004ea2ec5205cc7ca6a7801"],["posts/1166840790/index.html","dbd5b65ac876f9610963567562101efc"],["posts/116795088/index.html","b98d9cc500768ee59eca8a73e45878c7"],["posts/1176959868/index.html","1b3275189f0bc50949fd80c47411f1ff"],["posts/1190622881/index.html","09b104fe42dd38ba058f6344239a84b5"],["posts/123663202/index.html","26f6b8ba90cb47470b4189b90be43a1a"],["posts/124807650/index.html","56060cf43aa2ffda2d2cdea1ba32ca71"],["posts/1254783039/index.html","8e1bc1e915e6889437bad334ac5741ff"],["posts/1320325685/index.html","978c4d0afcbe88757091ed5b8b121dbc"],["posts/1329254441/index.html","3c2ff953e90d7f8d2eb4346858e974ef"],["posts/1357715684/index.html","dd3b1e5f731ee35d636b4c7d5bfb53c1"],["posts/1358971951/index.html","e0188bd504916d6a4e27469a05ca9ec2"],["posts/1386017461/index.html","006cdb5f8f9a20ef9aa5b0073bfa8bdf"],["posts/1394521917/index.html","12dc4f70c2d4d3f4f8d59a499c37cdba"],["posts/1397717193/index.html","dd13965688b11c443ae2f74928e279ef"],["posts/1417719502/index.html","1fa6b30f6832243a1fb0752c7dd31cc4"],["posts/1424645834/index.html","e716b07d5a815d7ac62d887c9930dfdd"],["posts/1444577573/index.html","68a972ae8448aeb4d0738988a4e63a5c"],["posts/1467630055/index.html","f203d79cd31cf19069ca5718af6f40d2"],["posts/1478979553/index.html","887ad42cbf11a94fa7f17d01f8cc809e"],["posts/1540537013/index.html","14fc53ba74c64ac2b54b14e67b1a891a"],["posts/166983157/index.html","351a651ace0e5c5a1eb6939ba378c6d6"],["posts/1670305415/index.html","cdb22521d4dc9bfd51be9da989be9778"],["posts/1684318907/index.html","3d9bd06535133ffa4a462f90e4d3d1ee"],["posts/169430744/index.html","3e2969b4dfa88bff3d82a91b15645f2c"],["posts/1700650235/index.html","5605be08faaf02485307e1763c87f9dc"],["posts/172426938/index.html","77b076feda13e85ac0796213e58f3d82"],["posts/1836680899/index.html","a2903c3e2fa2e8de26ae7f83b1e229c1"],["posts/183718218/index.html","ad07017cde3859306e4b986207aaa7e9"],["posts/187480982/index.html","3114b75ace302c7908d6c0bdca11001d"],["posts/1930050594/index.html","0841d863c7c40e16802ff3c4b97629d2"],["posts/1933583281/index.html","c7a7bda8c8771805f48145bedf6a8a3a"],["posts/1940333895/index.html","c518c7db5df7172977f931d992c8ba54"],["posts/1960676615/index.html","6af5147e4adc74197bf600d88a6a1462"],["posts/1983298072/index.html","a5a767004b2c50ef21c7d4e38737293a"],["posts/1989654282/index.html","25ef398cbf593cebb519ec27fce9bd79"],["posts/2015300310/index.html","4419a4621ec4d0913d74a7e3f1355d7b"],["posts/2038378679/index.html","398ca5f6d2591c76de47b6a29e998187"],["posts/2041685704/index.html","f862c7ce77874a3d02a8bb2901929067"],["posts/21112647/index.html","198e4852437864aff01affaf4806758e"],["posts/2158696176/index.html","04be77d4b5e37c42fdae3636b2512e0c"],["posts/2171683728/index.html","f9932446322fea6c7f4659a0056b721d"],["posts/2186770732/index.html","51eec26b6e15a731fe2c9891d4d3e797"],["posts/2275646954/index.html","1ecb2f2e68e8e0ffcd6cc9a06d5cd9d7"],["posts/2314414875/index.html","303831e890b36e6f536e814e391eb47d"],["posts/2318173297/index.html","2f07d45fd1e5768411ca8e24a042a7b2"],["posts/2418566449/index.html","67cdea7bb439d7c1dab345df75ea2fb0"],["posts/2436573863/index.html","727c1d82ee28ea79344a4da23a866cb8"],["posts/2462008667/index.html","6bcf28762735184458333bdd25dc4b85"],["posts/2463121881/index.html","45112e80b0763146352d345c61ca6c78"],["posts/2527231326/index.html","3fd1a57b07233dd4d82fbc4e77dc5705"],["posts/2583252123/index.html","f96c343d636149e8e0ad12db5dbffd09"],["posts/2613006280/index.html","be3780fbb31e7523a7385c96414a3cd3"],["posts/2617501472/index.html","214c5df30d19b6288863ef720bb2e17f"],["posts/2676125676/index.html","f2c1b265ca937f23e4b1225fdc6fb028"],["posts/2734896333/index.html","6aed7ccf55335e0f4b7c17ebb32d46b9"],["posts/2752169106/index.html","d2bb47abcd6909f9d08f961d34b60d55"],["posts/2799263488/index.html","3ed172f768ac8ba05a9e36e20bcf7b7d"],["posts/2805694118/index.html","acb5d61131b9371d374e8d824b8231e1"],["posts/2809571715/index.html","2afdf0f16a3356eded2918b4b23c221a"],["posts/2822230423/index.html","683a3adf1240b3aa4a06c728f0dd5c12"],["posts/2829333122/index.html","bed4b0dcc14be00e0acec530ffceb2e4"],["posts/2911923212/index.html","05aa5aa45046d5efafac761df999df0e"],["posts/2941880815/index.html","d4377d76f0da9c60a97b3dd19b653341"],["posts/2950334112/index.html","76aa21daa724f728e326372ff5713bab"],["posts/2954591764/index.html","8735017d1549d09013c1000a80738c1e"],["posts/3019914405/index.html","7006395b083b8dd915d981e066074188"],["posts/3032366281/index.html","581f5a6bc8a505981866e2b665e06018"],["posts/3040357134/index.html","6052a054d01602469c359edf4db6f9a3"],["posts/305484621/index.html","33c3bc40d11c15fc2029f4998a153d1e"],["posts/3083474169/index.html","dd9ed925023f19446d80078aea5b24c8"],["posts/3099575458/index.html","c8069062fb2bc3e10462a10feef746f4"],["posts/3111375079/index.html","ff5cdfed199118fb235e9dc2350ce31d"],["posts/3120185261/index.html","c836c8dc360e0bfccc3e7905c9069824"],["posts/3131944018/index.html","8e05eb66ea76a590306b528d891179b8"],["posts/316230277/index.html","e3e97a0c7b5eb1233c94d7a22d10d386"],["posts/3175881014/index.html","756ce46ecb901327d4d10368c0f3c4c4"],["posts/3222622531/index.html","1a10d376c34a5c0c9d7d277a3e1261f2"],["posts/3247186509/index.html","eb2bf21b2c8d4b848c1f854015fc0355"],["posts/3269605707/index.html","e6d7044dbaddb7655c0427426c37a089"],["posts/3291578070/index.html","94a3a08a213830006290a0adf32680c2"],["posts/331752533/index.html","b18f21d0beef3fc0ffc7366a446067ca"],["posts/3321992673/index.html","7307d82c8842442d61152d96c281bf00"],["posts/335366821/index.html","fbca90da84e9fef544454fd7f3fa67e2"],["posts/3356910090/index.html","17f397cfee4c4090c8545d32af2a47a7"],["posts/337943766/index.html","adec4da6c2b1eea46b137bddf0630a7e"],["posts/3417652955/index.html","f9720c4380f6292dac39d9a1bbee6664"],["posts/3444626340/index.html","eda4bab8dc075770219cd4ea4ad9607f"],["posts/3449402269/index.html","93fe9c5e659597afa2aac3f7a0ff4612"],["posts/345410188/index.html","25c9ae336eaab38448528c91ccc175e7"],["posts/3461518355/index.html","a099bab2b9ca785ef69404a236b00460"],["posts/3494408209/index.html","28875fa8874f08d74f9bd512acf9c49e"],["posts/352037321/index.html","11a0118e8d21f18d059467da05552e35"],["posts/3521618732/index.html","ba2a8b91930d8356693afab7668714aa"],["posts/3568552646/index.html","61a1b5e505a112f65b155e319001b05e"],["posts/3603924376/index.html","1fe2e80e00d3532974e908f0ca56477d"],["posts/3637847962/index.html","1ac57c56eaa6e53a2d2ba912a01917af"],["posts/3642630198/index.html","4534786cb486f72ba7d28b4382b0e6aa"],["posts/3653662258/index.html","e8303a4ff4916f7cfe58499a4bbcbe83"],["posts/3653716295/index.html","857ac31ec3246e68d1ffc356f52f6d55"],["posts/3657008967/index.html","fe6a50c20afa02a21ebfee437765e0e8"],["posts/3668933172/index.html","363d84a9dfbb8796527878669ccad8a9"],["posts/3677280829/index.html","aebdfc7d67ffc48142881ce02184f733"],["posts/369095810/index.html","528601e1b91e9064bb9f552964bad102"],["posts/3695777215/index.html","cd2790fd57e298c50a3f4ef7e1a85e71"],["posts/3736599391/index.html","aa3abebde4de34f1d638d769ad71f492"],["posts/3742212493/index.html","6a540ee5f0c80b8875546a6dfd6313ae"],["posts/3782208845/index.html","f0783b0b78de62a327b8bdcb55ae297e"],["posts/3789971938/index.html","bc1842ce8795c23643f0b0f426c5498a"],["posts/380519286/index.html","d0b716a53fbc01c0071c77fae8107131"],["posts/3846545990/index.html","3ef3a25461fd20a27f54b4af4e93922c"],["posts/3873710624/index.html","8a74913094efd24781771b1f1e99b66d"],["posts/3959327595/index.html","750da9adc1660a3bb48d77401e3197ed"],["posts/3972610476/index.html","3c1bca83e7e504b4a606b0a4d40dfacb"],["posts/3995512051/index.html","759417f945ce6f1fcae59c0ee8e3dcdc"],["posts/4088452183/index.html","269adf5080bcb68f74e12e0b457382ef"],["posts/4116164325/index.html","9c1ee2057a3d63bde3ec29352bba9b71"],["posts/4158690468/index.html","4bec4ae78702aff8ede66674213de31c"],["posts/4159187524/index.html","355cb056f8a09cde9609270b5896eb6b"],["posts/4197961431/index.html","bdd8036e7461c04ed80bcd50f587b2f7"],["posts/4205536912/index.html","a85d4153fb8e77bb84b4c07fccf7c958"],["posts/4236649/index.html","d9db2ebc890bd59a5fbb4d6448518734"],["posts/426338252/index.html","199af919996f7d3e8b12911aaa02fbe1"],["posts/450254281/index.html","76eb4ceb8bb60fe728c9c9b35801a97a"],["posts/4891372/index.html","14300990c5c01f9fb6a26b49bf699b1c"],["posts/569337285/index.html","1c6fbd079ee45eb3511b506b1f627a83"],["posts/570137885/index.html","fc00593d18a0afb84e884dda2983820f"],["posts/570888918/index.html","9c77bc9aa979229b7e52696a735708c8"],["posts/582264328/index.html","0d86fd23c4ef411a59af93cb47818328"],["posts/632291273/index.html","c640a7c112e24f29de4b6f166b588b99"],["posts/70687890/index.html","cb08c8d509558efbdb840af0164c2083"],["posts/719322223/index.html","9e9ed4bf7be73e7e341b94892aa3af2d"],["posts/720539850/index.html","ce3ea6b5f6084fc27dd5ff72bec33ddc"],["posts/786195243/index.html","d14896cbfb5a7fb7cd639e69a6134171"],["posts/795474045/index.html","e3c200ba69a7b229062c8e9232b9f70e"],["posts/815861661/index.html","dfecdf3010ef1924fd119a19f21e428f"],["posts/821259985/index.html","72aed67ab8d5405088ba5a9eaa28b26c"],["posts/828223375/index.html","c4b0e37d15c1ab5174b6040e7c7e17de"],["posts/887585917/index.html","b1b34d598cb0a6ea405efbf7ec8d44ea"],["posts/888549816/index.html","caecc4daa1e029496b0ecde139e2ddc1"],["posts/906436376/index.html","ef7d84f763184c33af767680fa2f5c73"],["posts/907824546/index.html","56342408fad8fd8788f6de4f42b65f30"],["posts/927393529/index.html","e7fa5d08bd527a597f5d47ecc0adb2d1"],["posts/94443781/index.html","45443c6e282e764bbb9e9641e18ca60c"],["tags/2014/index.html","64003a63765e09eaa11cf70d576f3848"],["tags/2019/index.html","fcd988e5e4855a73cc7d44e10d772a9b"],["tags/AI/index.html","0ae9fd53bc95e9a68f7d6950a78a58b0"],["tags/AOP/index.html","3528d286df66d42af8475056cc0f0ee2"],["tags/AR/index.html","9d3bbe16c8530098bb7f3063278d033f"],["tags/AssetBundle/index.html","c2f9b748df6f19c7415be288cfe4dcbb"],["tags/C/index.html","695963fef06e4ee76599a680baf34a85"],["tags/CDN/index.html","85cef91f8c1de2c34d09b21f9df5f522"],["tags/CG/index.html","a652cb5e45d0d5401ec6b7324a7c9a45"],["tags/CI/index.html","798cc85f413411f3a9fb31b9c042ec48"],["tags/CORS/index.html","1dd35b8c2f4de65b5b9b9bd20ae5379d"],["tags/CSharp/index.html","eb8f8d61db10e7bbebc1a943c95f9b8f"],["tags/Castle/index.html","b712d0ff65bf46f52b27a9b6ef60b760"],["tags/DBeaver/index.html","005a40f5c8f39d3083db36bf4f3ce5c7"],["tags/Docker/index.html","95c10e3ecb10cf18cde61141d6e7e887"],["tags/Dynamic-Proxy/index.html","bc28e75ba082192a3cefc9a77ba2257c"],["tags/Dynamic-WebApi/index.html","7b79cc2914d1d3a7fe409321700f1d6d"],["tags/EF/index.html","07b137b2f6252fa7339c9e30e7259366"],["tags/ES6/index.html","e0c807ff4d4c63408cb027131b59c251"],["tags/EasyAR/index.html","674c4b5c7bb3cab8de56e6696a89e6eb"],["tags/Excel/index.html","aabfae1220299c6f534a5129af1c809d"],["tags/FP/index.html","7144df26781c808e20aa2b775308be23"],["tags/Form/index.html","cf280da04b08413050843b846a93a33e"],["tags/Git/index.html","f541f447c5da70b02a05641b22e77b1c"],["tags/Github/index.html","acf93aa9b271e88025cfbc8910946d0c"],["tags/HTML5/index.html","53a59722d2f27fb8844f4644b97f85ed"],["tags/HTTP/index.html","6fa5708a720c2021527cdc5e649a4812"],["tags/Hangfire/index.html","9eaa0020994413e09db8d1e137ab49f9"],["tags/Hexo/index.html","7c3283e38d30a16a3b5293eb5addf00d"],["tags/HttpClient/index.html","314860e6140d2207d7406150e9e041c1"],["tags/Hyperlog/index.html","882f9144f92fb7b1a9ab01bfc28ae97e"],["tags/IDE/index.html","4d97f5071a4050240c910709334d67f9"],["tags/JS/index.html","742955f8f62c60ddd3ae2008b2b3bfa3"],["tags/JSON/index.html","b80bfea9e96c7883b2227f389e69e4a6"],["tags/JSONP/index.html","1638ef53982e87196fab27bc079f322d"],["tags/Java/index.html","a0bdb9ddd68420be081521a7b5694c68"],["tags/JavaScript/index.html","e15418311abbb9ef8a785e2e0adaf22e"],["tags/Jexus/index.html","cd72b1d28cba1e5f6f7f6712d8eb5201"],["tags/Kindle/index.html","893d8f646b382b392d43781b42ffd1fb"],["tags/Lambda/index.html","f80511cb28e0965c3f6b1fbb65185678"],["tags/Linux/index.html","e0d44cf1e70e846e443ced975a1d314b"],["tags/Liquid/index.html","327bd97c43b11976794e98dba52b907b"],["tags/Logger/index.html","3ce41069a897528442a2fb7978ab9cf9"],["tags/Love2D/index.html","a5af2fc74fd16a35c1a946a0d87c839d"],["tags/Lua/index.html","271fa06d16bf7d0eac091e3b7d34512f"],["tags/MMD/index.html","a328dce9fceff63c7e7559acb479c2c0"],["tags/MSBuild/index.html","e5a6702a8c41e23319c7004f5ad7869c"],["tags/MVC/index.html","66f35128e03e68fbdc1211ae4fda212e"],["tags/MVVM/index.html","390cd1e36fb40e859f2265a8b469df18"],["tags/MapReduce/index.html","ced042101b7ee25aace1fe163dcc55a8"],["tags/Markdown/index.html","7a4da08be79db7e800e62a38608c2930"],["tags/Mecanim/index.html","4427fa4976429ddc88f6fb528126143d"],["tags/Mono/index.html","a0b27730b69f4c2a24cc7ff1d47ed881"],["tags/NET-Core/index.html","689108cb71206bda129d9ff42deed700"],["tags/NET/index.html","b553d8977f7a33a031b480a457422dcb"],["tags/Nginx/index.html","8123ff237f32aa8d36ce17cca4dd0b51"],["tags/OBJ/index.html","4347ba5787293e77910276097e7bea08"],["tags/Oracle/index.html","e1bb67da6e3f64b3c891ac99f1a4ead7"],["tags/PL-SQL/index.html","8f7630fa8e56bdaccb8b619d723ca730"],["tags/POCOController/index.html","b8fc19b214f85f0504ad3836c2da084a"],["tags/PWA/index.html","25799fbb2e8609d49645f1b24e26777c"],["tags/Python/index.html","7a38dd882fd3a4580c7f390686c537c2"],["tags/RESTful/index.html","2a4a70b505223463f535188f7f20de16"],["tags/RFC/index.html","92f5719bfd272eea7e675579dca03c5d"],["tags/RPG/index.html","e6be931bcab1e13c754187a25718b679"],["tags/RSETful/index.html","a8ec0b0372b73b9d2b0a719c9951a220"],["tags/React/index.html","5b2fb5bb5505d450b53ecf14f050a4ee"],["tags/Redis/index.html","4fe13ddcb88cd0e60036796c3a8a7cab"],["tags/Referrer/index.html","df0c3105f0acb5944325c26cdc6e02f7"],["tags/SDL/index.html","7e37ba186b43a27a9c985c74be3c0182"],["tags/SQLite/index.html","cdbaf7ffdf4356c55ca198384cb19815"],["tags/SSE/index.html","316ee42686b5155131583133ebb12bbc"],["tags/SVN/index.html","01cce7536655f81e035733a49843d63f"],["tags/Script/index.html","b53ebd06a50254d663d3c7254390ebbb"],["tags/Server酱/index.html","9e660621bccc366bd00b0ffcb28575ec"],["tags/Shader/index.html","ba9c6fed10ebeb246bcea0af1dceb4b0"],["tags/SignalR/index.html","603792ef094deb8f813246e2d771fe27"],["tags/Socket/index.html","57eb19b61b3f89f771e9578f78101826"],["tags/Sonar/index.html","b5455b38282dd08254a8dcaef198f7cc"],["tags/SourceTree/index.html","571facc388dab09709f57a9bac77d950"],["tags/Sublime/index.html","c3bbe604475a4fac1e5708c23c847962"],["tags/Swagger/index.html","808f1b5b444a192c3989ef406ecf60d4"],["tags/Trace/index.html","f4f10124cc1abbbfd9927a501767473a"],["tags/Travis/index.html","72d95c74ddd764945bcf120aed1686cf"],["tags/Unity/index.html","d2bf8a6b3263d6b46e73ebc35aeee4ae"],["tags/Unity3D/index.html","1637287959be4c283bf15abea6ee10ef"],["tags/Unity3D/pages/2/index.html","5112d84a6e0467e2e7ae78cfb5af1db9"],["tags/Unity3D/pages/3/index.html","3fe3d48c1fc91cf6a0dd664f202fbf25"],["tags/VSCode/index.html","b23289149a59682003c5cba7905c35d4"],["tags/Valine/index.html","c050504bbf49b2abeac6368856316c78"],["tags/Visual-Studio/index.html","008ddb726286de099c181bcdffb8a59d"],["tags/Vue/index.html","1e45bd710b604f9fb92ddb2e41315e34"],["tags/WSL/index.html","91088b4e5710c40c3adb4a6b231ab820"],["tags/Web-API/index.html","6c0a738d1fcbc4d91f1aa3850c2545aa"],["tags/Web/index.html","ddc7ff7fe99c527b849e934467dc3b9a"],["tags/WebApi/index.html","a78d7e2df613f9911e3ce8842719ac39"],["tags/WebSocket/index.html","5728ac3f86379666ecb17e012457984e"],["tags/Wechat/index.html","98ab2ff296db711e906a7364547ba51b"],["tags/Windows/index.html","e4671972d4fd13f29940ac5c636b2b72"],["tags/disunity/index.html","b3a1953d4664d61f2ae945d725277253"],["tags/index.html","7d3c0c5a97551c7c9eef4c5f35ef7f2f"],["tags/matplotlib/index.html","4639536b99cd2fac0107e3ad8c83eaf0"],["tags/njsDelivr/index.html","489c0b7a130dc18f6bf64d7789bd13a6"],["tags/uGUI/index.html","4af8cf383d4f21bd3839048d3b1281cb"],["tags/zTree/index.html","cb0c5b5bd7bad9107dadccc4f4e3c7fb"],["tags/一出好戏/index.html","0c245b8a7cdaa9fccc3b2cecbf521483"],["tags/七牛/index.html","ac49d6322dadc7aabbf23d9c43442c6a"],["tags/主从复制/index.html","2848fe9a2eae7ed8871d1fc91793c1e9"],["tags/事件/index.html","f9d6088502ae0c243781f0d7b5a7c948"],["tags/二维码/index.html","3e052325297916536724be9d48fe7659"],["tags/云音乐/index.html","abc483a3ae6e922c60b7da77fcbed078"],["tags/互联网/index.html","6fc1a8e5e3a425a584a9f90458da53b4"],["tags/亲情/index.html","42c3d0a4eea07160640d682e941d0fc0"],["tags/人文/index.html","a66450c4d6d404ec9d6451d2a2e2e443"],["tags/人生/index.html","af4d91f990c37f3f65fd592f82c05b2d"],["tags/仙剑奇侠传/index.html","e3eacf31355771ab6ea91664e380de4a"],["tags/价值/index.html","98e61a8402cc77b614fad7f0ff6defba"],["tags/优化/index.html","d0abd0b403ffa8ae906fd9c15bb55c32"],["tags/全智贤/index.html","16461936dbe47f61e895edfdb3d53766"],["tags/公众号/index.html","e6add4c64bc5ed169711459ba424bed2"],["tags/关卡系统/index.html","cff676c9864387e85a67fc94d3877f32"],["tags/函数式编程/index.html","441b1e1ec4485d834e18ed5bff251819"],["tags/别离/index.html","e0c75646a9fa24ffb181daf1daa43de6"],["tags/前任/index.html","caa72b19374eaf08bee56e5a3279e8ea"],["tags/前端/index.html","0bae85ba15d0cf8926f14fbb82163ceb"],["tags/剑指Offer/index.html","d664caf65a182497f2a3e32c7bfbea8c"],["tags/加密/index.html","25dabb155e74b8951c99dab06fa7bc54"],["tags/动态代理/index.html","2b5ba50e83b4ea2f4255ad8c22e6d3d8"],["tags/动态加载/index.html","1683830e664be8af11836cedc40b7347"],["tags/动画/index.html","7b60d098d6e185dcfa233ed784168886"],["tags/单位/index.html","29e89968f4e099accd2500e9bd90f651"],["tags/单机游戏/index.html","cbdffeae4b1878ac8989f77697883ee8"],["tags/印度/index.html","09b6dfed4c6e634dba3a1e2b13c9d4dd"],["tags/历史/index.html","18a699e97f4e5bb1e282dc626fb00319"],["tags/反编译/index.html","cab155fb056fdce188f778cd47321113"],["tags/同步/index.html","c059a4bffa474a8f41076c345bba20d9"],["tags/后端/index.html","33770ddfcee37720b40ab2d406163bb0"],["tags/命令/index.html","ca83b2dbc47659fdd385fc6abf038acd"],["tags/和平/index.html","a679b2a00ae57e6389a96fa06af2e9a7"],["tags/响应式/index.html","e2bdbe646c6ec50198f53e884e386ed0"],["tags/哲学/index.html","20d9c23cd6bc7c95518b792d23ea335f"],["tags/回家/index.html","2406b9713b38d86d790a58671f8743bd"],["tags/回忆/index.html","4fd98f7f7bae6dd3b08bf75c423d2acb"],["tags/回顾/index.html","6edcef15cea9f148916be34d82a46c65"],["tags/回首/index.html","f20554cdbb5502e51fcc2b42b9de83fd"],["tags/图床/index.html","cc45db4649e11a2d443033261b18d660"],["tags/图形/index.html","45618b40eb9e8c09cf2fb7981facb237"],["tags/地图/index.html","ab54cf0d1865fabe8d604221735c0d1b"],["tags/塔防/index.html","6a478bb9b3ba5859bd0ca45bce6ee406"],["tags/增强现实/index.html","131b5cdef797e82240f809803e9722f8"],["tags/壁纸/index.html","f13b4a441478c72aa6e546f4c3e846f0"],["tags/夏目漱石/index.html","d65960a0d95cfebb305009c6c0eeaa93"],["tags/多线程/index.html","b1ead5e6bc919146a9aa36249151685b"],["tags/大护法/index.html","ebef74b91f0b1ee3e27abd834f2a27b9"],["tags/委托/index.html","fa74f33f007702ef53d58c372a577bb3"],["tags/孤独/index.html","1d312433637ad63b7a0f13b2201c7396"],["tags/展望/index.html","2f41d72f46ad6f8b904eb755a8bc4201"],["tags/工作/index.html","32fb91981bdfbad223195ea1f63fa1f5"],["tags/平凡/index.html","bdb1a49b74a1ef3754f4fec38b6d8b5e"],["tags/年华/index.html","bae442391ec4c5e0dc5938eba8895ce3"],["tags/年度/index.html","c0d05a89da7a0c522a108a151f1f04ac"],["tags/开源/index.html","9981935ad3fe42b39830d3d1707a0060"],["tags/异常/index.html","f1ff8f4ca3932660824a1d6c6e2c7cdb"],["tags/异步/index.html","db668e77893f2c02036a1c717162ec47"],["tags/引擎/index.html","17829576dd8ef42ad20544a7a3303203"],["tags/影评/index.html","384823920ad42dde1d31eb1a57e2dfcf"],["tags/微信/index.html","a1d9685feba5039415df65949ef07648"],["tags/微博/index.html","c3a378b5b69bfd926461cb00b85a7043"],["tags/心情/index.html","7646ef7ba070dfe36b7042eafb0fc7a1"],["tags/思维/index.html","73f002508e151c8f65a2855b692d4141"],["tags/总结/index.html","201f3ef508dc2eaa69c12f1ddb4a8ec4"],["tags/想法/index.html","51e7cdeda4979025176d4b8c6ebccb83"],["tags/感悟/index.html","5624ee6a8d7f016c426d312a669b2a2c"],["tags/成长/index.html","e01a5b19f769dc2d4b78e5ad8be4d5d8"],["tags/我是猫/index.html","e6855f21c64677e31c3a7f63341e3542"],["tags/扩展/index.html","134ac3d11d0ecfcbdafbd60e0249ad2e"],["tags/扩展方法/index.html","ddce91653cd928a6c9736e9f7ba942ee"],["tags/技术/index.html","edc89e8ee415572af6731a72fe75ac72"],["tags/拖拽/index.html","77ed0e0d0c72a1da0329e9b6b5428bca"],["tags/插件/index.html","868b7da3ba9a0c159f60285666274f9b"],["tags/插件化/index.html","62aedbb9027b4b012e4a4fd485a2eea9"],["tags/数字/index.html","65608d4d0e7afbe158d9fbf17f2375d0"],["tags/数学/index.html","f8edb65c538dda2004882d1b3955fa71"],["tags/数据/index.html","2a25f07b1657fc3ef4ee91afc094a1e1"],["tags/数据交换/index.html","1b2826c78a18126fdb7c23311e82cc6b"],["tags/数据库/index.html","de861157e0eb3d74e95a3a70c8acb3f6"],["tags/文本分类/index.html","5c1bfda95263246463ad2987855ee2db"],["tags/无问西东/index.html","a72998356dafb3af8152cd285c1391b8"],["tags/日剧/index.html","33873e81a49c0e13ad6a73a02c1a1290"],["tags/日志/index.html","b2c399f8347a7c0262e8b38860a9c39d"],["tags/日本文学/index.html","6572edf4516f7b502b89ea67a773093d"],["tags/时区/index.html","52f421df303c19ed3110997b7567423f"],["tags/时间/index.html","89233c088e50738e8760a3b5bab06153"],["tags/服务器/index.html","9b8542d37beac3aec92d255d59f29ec5"],["tags/朝圣/index.html","4ea2e52393d42acd44d7fd1443391166"],["tags/朴素贝叶斯/index.html","633d88331fdf0cc2065b4d94fe6e9201"],["tags/架构/index.html","fe424dfc3c1d362ba87bd0f0e31cdecf"],["tags/标注/index.html","7b952a8f165331e99bfa4d27d89e1b26"],["tags/校验/index.html","ece5b770c3ac55f08b9b15032dff3c90"],["tags/格式/index.html","ba4c4b61ad41b435f3b484a45997b8c7"],["tags/格式化/index.html","9324b95507c5acc775863bace20c15db"],["tags/桌面/index.html","09d2bc0f42ecf130ff8345b28f1c3254"],["tags/梦想/index.html","627a334f8725af2cb8dd544b0eefcaad"],["tags/概率/index.html","6243cb90a17dfd95ca2b581b513f8789"],["tags/模板/index.html","132cb6f13ee623f6ab75408821205425"],["tags/模板引擎/index.html","26d61e8342fbeadb09fcf981df9f75c3"],["tags/毕业/index.html","ae79278bf12a9aa2119e3f1c9545ccd0"],["tags/毕业季/index.html","677eb4c025a098150b8d95b3d429cedc"],["tags/消息/index.html","a382238cac62b42dc233cbe38dc0380d"],["tags/游戏/index.html","86564d56c4646be8098bec49ff62e508"],["tags/游戏/pages/2/index.html","81edeee7ed06f5b87d1b7da247d0155c"],["tags/游戏开发/index.html","9ca9981e21a5ba642b96d03a5b28dabf"],["tags/游戏引擎/index.html","c05ddfdb18688789a23a4cd3008014c2"],["tags/爱情/index.html","a421c48e4d99804fcfb30e82ee887f81"],["tags/版本控制/index.html","cdeb280dfee51c8d26c9656151775fde"],["tags/版权/index.html","1611cb4271bf1c9dc7ad9253e3666b10"],["tags/特性/index.html","a722526cf8a58727614761b5729845d6"],["tags/状态/index.html","2050de2cb243f92ff7d78fcde43e6f9a"],["tags/现实/index.html","19bf59c933e086da6ba2e2bc42900940"],["tags/生活/index.html","c056d86efda4e1c3652c5ce32677e6c8"],["tags/电影/index.html","605f489c7419001557ba371b97f09ef5"],["tags/画家/index.html","73501795fc818c030f79789b35461062"],["tags/知识共享/index.html","3235df953cd1074d79796766093ce20c"],["tags/矫情/index.html","40664446d700cbefbc49cded0d2f40f2"],["tags/程序员/index.html","9828277e564c79c6bc89497006a02cdd"],["tags/穹之扉/index.html","122b1fcd2639b508c5259c5d395a3763"],["tags/穿搭/index.html","bfcbf7aa87ab2004a222492710b4269f"],["tags/童话/index.html","925bd0cbd3e52b40c626fcdbde38db0c"],["tags/笔记/index.html","ed227ea353162b2918ba049c49a82363"],["tags/算法/index.html","7797125d79a6585f70b7e9b5d913cc56"],["tags/米花之味/index.html","115dad103abdfa731f61969dd30e2171"],["tags/缓存/index.html","c5ee36d241360cd6716ccb743da9579f"],["tags/编程/index.html","efa04fe04dff81ea59175c2d05795790"],["tags/编译/index.html","fa48b869f67fcf203bda1e53872c0ad9"],["tags/编辑器/index.html","e04a127ec32b6a307c607aa4be9a305e"],["tags/网易/index.html","cd9df5815b9b338444118a616ef53b65"],["tags/脚本/index.html","9c713a0040ada4632ba2b0bdca0e685c"],["tags/脚本语言/index.html","73a5d54187537c55395c5d8c4cb645fd"],["tags/虚拟摇杆/index.html","4b319c40d4c713e949e59ce197816e75"],["tags/蛋炒饭/index.html","50597c63e8dcd885e36bc53e76f2e11e"],["tags/表单/index.html","46cebff3d466cea279df23c1cc289295"],["tags/装饰器/index.html","b0a7c16ef440198b9efab33455237b2f"],["tags/西安/index.html","3bb2901daa352d5fc2ddd4829ea021a6"],["tags/计算机图形/index.html","d8694001c48e2ace91aa949c07408cdd"],["tags/设计/index.html","e0b0bc6409146da757c78238a698e8ed"],["tags/设计模式/index.html","3f9e112700583f62fcdf0d118b5a3324"],["tags/访问量/index.html","21f19fd04f33b141194fa854cdbb36ea"],["tags/评论/index.html","f0251e770d1f326952490869c9c3e7cd"],["tags/词云/index.html","8c77a5f909430f2df9b7ff8c8ed690a2"],["tags/诗人/index.html","b992836d0bb15376027001d4c1aa8390"],["tags/语法/index.html","5891f1b6196851319e59630d2851abe0"],["tags/请记住我/index.html","a0f11c3b12bc6a8d333130e9115ff81c"],["tags/读书/index.html","183b6939f4216b7af7c7d51831be5099"],["tags/读写分离/index.html","9a0f7c1f81bca0ba574e320923a64037"],["tags/调试/index.html","5bba3ae70733490362ebf3e50ce71632"],["tags/贝塞尔曲线/index.html","805ce689f0b6ff05b8143ec6bca6bf28"],["tags/贪吃蛇/index.html","7678b2d77b05545520bd5c085e2b29df"],["tags/资源提取/index.html","07474179dc531cf0ab9c15aac3e520e8"],["tags/跨域/index.html","a8c511a7ebdc55849839a0590c07f9a5"],["tags/跨平台/index.html","987ec483f1f10ac5cbd77a270f7c1ff2"],["tags/转盘/index.html","19a4e78561ab73cb3439cd906ed3dec5"],["tags/迁移/index.html","e4dd5f3c90b00903c5c0387421cf4ad3"],["tags/通信/index.html","592de140974a9e4be5eba403134d4733"],["tags/邪不压正/index.html","80500d461408a6034dfe4e5874988c59"],["tags/部署/index.html","37bff5a23cc0421f87b7a1035c2560a1"],["tags/配载/index.html","0b3cd8d97a11e84ebff13ccc00c662c6"],["tags/重试/index.html","c4dd7f3cce6f4fc5211b25e4e5175371"],["tags/长安/index.html","4911878c4759c256fb3864ee7ca1f371"],["tags/长安十二时辰/index.html","987220a71e5b077f9351134cc1001201"],["tags/阅读/index.html","0daa8c5dea8a95251472ae0cc3c7dfab"],["tags/阿里/index.html","609d334e3b93a82bff5ec44c6c1fd30f"],["tags/随笔/index.html","202c3b651bf55aadeed347311652b224"],["tags/霍金/index.html","7a0cf5de3f13489e1b3676c8cde21d5f"],["tags/青春/index.html","b38994b876a81725acafd192b4745e56"],["tags/面试/index.html","b766e116744d3d134958a7ad94661a3c"],["tags/韩寒/index.html","a739b51704f5dba435f4ea1fc5b6cfd7"],["tags/马尔克斯/index.html","c2e2f2b9b0a9a213b0002eda82716f9a"],["tags/验证/index.html","2ef09de75151a49e165111b3052091b3"],["tags/黑客/index.html","1a9f596df257dd378d89454b0bf63f99"],["wiki/index.html","a3127c7a74ff0319c6aaa94441078f90"],["works/index.html","917c7872489d511ffa1dc8c240744cee"]];
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







