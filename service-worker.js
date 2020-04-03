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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","4856314ba41a8d4b58e35a3cb1f3c59e"],["archives/2014/12/index.html","035c716af2a79f6757c49c171a447bdd"],["archives/2014/index.html","c00b4586185acf9489e2c8628cdbb07a"],["archives/2015/01/index.html","4f31249a1892677c3bee0a275a06f273"],["archives/2015/02/index.html","be40a52b67cfbf4264abe2002d1ccc80"],["archives/2015/03/index.html","c78e3e69c24d00f76dafba3a6f68871e"],["archives/2015/04/index.html","ee8d781c5db298996ecd0bbb8992a568"],["archives/2015/05/index.html","9609d630ed444e25df50b060a35d2b83"],["archives/2015/06/index.html","4549f3592451dbd4365e6e7afef7fd9c"],["archives/2015/07/index.html","ed881fcb5d46528d386beb9eaa74ec57"],["archives/2015/08/index.html","126051767ab0d7265d8f418dd8f6a4e6"],["archives/2015/09/index.html","ecd7d7dce260bf9f55f6390c3e1b1bc0"],["archives/2015/10/index.html","93cd2cb75bbb0a87990642248a230387"],["archives/2015/11/index.html","47df84b48a242d29a2f248af6b5f80b2"],["archives/2015/12/index.html","2d82c8d74efaea26c7935c1bd6175981"],["archives/2015/index.html","9e91a17cc7cec71970739817fbe86c19"],["archives/2015/pages/2/index.html","864c269c860a11075799cf1163e1c00b"],["archives/2015/pages/3/index.html","ac60c7dc1878cfbef874ae8a7933659b"],["archives/2015/pages/4/index.html","d7a9aa740f069cbc21ccda7b1ec4be17"],["archives/2015/pages/5/index.html","a04e388fa4d08f02ef67f7655e6ee2c4"],["archives/2015/pages/6/index.html","da745b5a76b874135396ff7b94064811"],["archives/2016/01/index.html","72020d43dd8aa2b79167f4f48a6cee0f"],["archives/2016/03/index.html","ba3b11c43dfbb71273f4a67bdc33b898"],["archives/2016/05/index.html","0f2f3f3efaf29f1b23d3d31ef89b1bcf"],["archives/2016/06/index.html","a9efac42668b6e754f8af82a5a49c8dd"],["archives/2016/07/index.html","fa6545974b436c04536cab1eb4da51ad"],["archives/2016/09/index.html","04b4bb508221d18522063a7ca6d2c3e8"],["archives/2016/10/index.html","cda5c926a006f1d0ca82941e9498cc0a"],["archives/2016/11/index.html","7fcf288e5a8c490983c8622bc1dd8efc"],["archives/2016/index.html","eabe813c8e488c695f6533b18cb0f9d2"],["archives/2016/pages/2/index.html","64d4b42cbf27b5d062eaaa2fa2e55e72"],["archives/2016/pages/3/index.html","99e3eb7598c98000e2f2ab31c9d3105e"],["archives/2017/02/index.html","7b775fd4e85822ed2b7bc96307a8e919"],["archives/2017/03/index.html","27aff247e1bff036ca1f6e7d8540dc59"],["archives/2017/04/index.html","f042c60cd0a62e264a85548ff72dc467"],["archives/2017/05/index.html","c95fa86521b2c6d7d76d971e9a63d1de"],["archives/2017/07/index.html","12871e9348d2082b87bb04f4db8adb7a"],["archives/2017/08/index.html","0ea4079e1e54ee48a7c2f78c585ff78c"],["archives/2017/09/index.html","fa05c8a0171c6b3152fccedce72bf53e"],["archives/2017/10/index.html","82e04b517038177c0425a07329172942"],["archives/2017/11/index.html","e642d6c24d6f461b0b930b786405de23"],["archives/2017/12/index.html","f8570190a2e971d8bf7f0c6e3e73202a"],["archives/2017/index.html","e226c45e5c4d73a973f8bde3741dd550"],["archives/2017/pages/2/index.html","ee3a1a2cd6ad8c6515919b1391ed928b"],["archives/2018/01/index.html","ae3d3b4eae21a9adbcb6e2f0e9da47f3"],["archives/2018/02/index.html","7b9253018fe2d3c5eca7f6c8b47d73d2"],["archives/2018/03/index.html","ff9d7f021e0db895244c92042f537e3d"],["archives/2018/04/index.html","f0aee7acc24a6c8dbd4f7f7a23c0cce8"],["archives/2018/05/index.html","41f165cfcebb47adecabc170a317c5ce"],["archives/2018/06/index.html","d5d535ca505094fc07c07484efacf2b0"],["archives/2018/07/index.html","238ad4a2a7ea58417d38e7a5a9731ac6"],["archives/2018/08/index.html","82b18c53df00486d3245f461bbbb46d8"],["archives/2018/09/index.html","6511e94ede1812cd587dad4b956a6575"],["archives/2018/10/index.html","754390c2254953c1ad0bbe319ab9bd5d"],["archives/2018/index.html","474146354c58c7cdec09861f68f8e5a5"],["archives/2018/pages/2/index.html","63231db5134241e27264d26db5b9f948"],["archives/2018/pages/3/index.html","4645bc91faf991c14e0e10e77c63c6f5"],["archives/2018/pages/4/index.html","27689f0a4f1d5b566ec6922b2b3e0577"],["archives/2019/01/index.html","32c527c082efe36dae07f75f3fbcaa81"],["archives/2019/02/index.html","9e695bdad3d06daea6509ad2310efc51"],["archives/2019/03/index.html","ecbfa83f5ff971a5e826ea53295836d2"],["archives/2019/04/index.html","c9742f0392d115cc194c0ba644668ed0"],["archives/2019/05/index.html","1e53472ea01477e4b596a304ba4fa98c"],["archives/2019/06/index.html","3987f6b5f8e87e42906a1688d3e37041"],["archives/2019/07/index.html","f0cd2df78b69297ed415b10628790b0b"],["archives/2019/08/index.html","7a3033aa3c8bbac5d2e9756533bffbd1"],["archives/2019/09/index.html","38f30263336123dc1c0bbda8e5f54994"],["archives/2019/10/index.html","fe4122bae60316bd56aa8409e9891b57"],["archives/2019/11/index.html","a398329419ed69fd3e02fbae44d6099b"],["archives/2019/12/index.html","95ed42bd267697e726d21f1a4209257c"],["archives/2019/index.html","6f049197ea38277a6822995d5479e19b"],["archives/2019/pages/2/index.html","5977b5f65594ca4d40759e2931234929"],["archives/2019/pages/3/index.html","cc434eb3c3b2ff4448bf7a28d05fb15d"],["archives/2020/01/index.html","7c520fac258de0b511046f06b63365bd"],["archives/2020/02/index.html","d162f430c0dffbe0cb84430b2b3e2c94"],["archives/2020/04/index.html","99247df7083ae0daf7e28f12404cd26c"],["archives/2020/index.html","1c139190ffc55433558b636aab66b95c"],["archives/index.html","a8dc8c1c9f724cf7976a9e37e777df25"],["archives/pages/10/index.html","a70cfb93f4bafa28368d406a664ecc34"],["archives/pages/11/index.html","260eb18200a35a508a401342edb62b36"],["archives/pages/12/index.html","cd4040cd1064d50fe783cfc6348c4b8d"],["archives/pages/13/index.html","9f279f584644eb4d9be23e074108a4cd"],["archives/pages/14/index.html","2e742c680da237749c0c20e60b1ca7e3"],["archives/pages/15/index.html","245daf71bc5c42478db2a3fbab12f433"],["archives/pages/16/index.html","f02336c8757ff963ee87180fc3ca3929"],["archives/pages/2/index.html","27faee1784e2bb82c979648d156e15bd"],["archives/pages/3/index.html","f7a8e6cb8d2a3853e847605160b39c6d"],["archives/pages/4/index.html","d12262fa244f552693727ffbd8bed1dc"],["archives/pages/5/index.html","b4af21beeec97c384c8361bfb39b0f47"],["archives/pages/6/index.html","ae569f340b8741b02d9a73cd63dec600"],["archives/pages/7/index.html","4a2c1c85065a663dd60a8394c8742f67"],["archives/pages/8/index.html","da1c9448d86f7056f86ab6c232b82a82"],["archives/pages/9/index.html","c1c9a76e1cdd4889275f235c942ca629"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/portfolios/portfolio-leancloud-counter.png","b4ae1e781a6dc07ae0b9606392abcf32"],["assets/images/portfolios/portfolio-metro-music.png","a5c8be9ece2318b8af278cc36b9b62c1"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","601c83dbd4ece626a2845c887eff1f14"],["assets/images/portfolios/portfolio-running-girl.png","04e03badf3deac3d34d16c1d07c00b1b"],["assets/images/portfolios/portfolio-snake-game.png","18e0aada56f8955c077966a2e4fce77e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","e544104f0b9fe2a3c2529c4a89ee7da3"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","0bb3827ed7346d4c7c08f1a413a28caa"],["assets/images/portfolios/portolios-td-game-demo.gif","dfc5e2079fcb8ad89a4cf305728849bb"],["assets/images/portfolios/portolios-wallpaper.gif","228e7994a2cbe80b188fd2b6ce634093"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/fontdiao/fontdiao.eot","8b478b6f70a454067e3fd603e9417959"],["assets/styles/fonts/fontdiao/fontdiao.svg","7c36fbfb483ebf64784c4e517bc93ae9"],["assets/styles/fonts/fontdiao/fontdiao.ttf","161a75e4509c9a22b0a7f0c8d60df649"],["assets/styles/fonts/fontdiao/fontdiao.woff","8dbdd84fd0882f1c4451404b253f3f9c"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","d25f319d72bfceae97491f5d427a0c0a"],["books/index.html","2e1cddc4f617d19ca1be889eac1c1033"],["categories/Unity3D/index.html","2ea9e3d608c006b6cbd79351966b6c32"],["categories/Unity3D/pages/2/index.html","25cd43d9b3d02d559bf903a54052855b"],["categories/index.html","cdc945ef0e5a22cab6ae35e9a83ba6a8"],["categories/人工智能/index.html","70517278b809e733d80091222175998e"],["categories/前端开发/index.html","71ab11e0e0981ee8740fa6d259fc9a67"],["categories/单机游戏/index.html","5cb9b212193f9ce64b0284836066df31"],["categories/开发工具/index.html","4b4cfc070b4e0874b5ff058cd29711ae"],["categories/数据分析/index.html","16a8c6de752e81f3388f268e3f807eb3"],["categories/数据存储/index.html","5b21734be57038879c7fa5ef3169ab62"],["categories/游戏开发/index.html","3005972cd9556a7286cdbee0947d9df0"],["categories/游戏开发/pages/2/index.html","de96b58ebd3ca3c64c86ed747732c5da"],["categories/游戏引擎/index.html","cc8f720fae48d55a6a58c43c8a973b68"],["categories/独立博客/index.html","e2af7418eb5c8bd88f69763f2d92ad8c"],["categories/生活感悟/index.html","764d4e3e26418a1695ccd86d4d768f9d"],["categories/生活感悟/pages/2/index.html","354693da0d99abfb4416af2f4e068e91"],["categories/生活感悟/pages/3/index.html","143920e96575827afc29cf8632dbd830"],["categories/编程语言/index.html","e825984e36d71462ab4d6dfd0a939e10"],["categories/编程语言/pages/2/index.html","effb3a32d2ccaff2729b19341fb11b33"],["categories/编程语言/pages/3/index.html","874080dbfca90181db8668d36a28a609"],["categories/编程语言/pages/4/index.html","80d56cb6052f9407b57500559919738f"],["categories/编程语言/pages/5/index.html","0aad49c194efc4bfd4be0c47f16062c1"],["categories/读书笔记/index.html","6ddeaa245fad01b3070e1cf8f9d45c94"],["categories/读书笔记/pages/2/index.html","7598860bfc1cebb02a935a877aa258fe"],["friends/index.html","38f8e805f09f6b1d8d5f470a76ae274c"],["index.html","14faa4f1a11f566ce3d16df56734be2c"],["movies/index.html","9089e4da77cfe0bc70e795f5b8a6759b"],["musics/index.html","9bf2236b99887e093806a35aa759b99b"],["pages/10/index.html","e83530750d7919cebaa259641fbb68d5"],["pages/11/index.html","a2911892948c6d84645dda0049b3f787"],["pages/12/index.html","30924a72a1d8562c0b91a456138e48b0"],["pages/13/index.html","9c97a80307691a6a54f378f4a7eed50f"],["pages/14/index.html","c0c47617fab7cabc0f7cad8367cc472d"],["pages/15/index.html","6646f58d89cdfe24b9d3b631433c4736"],["pages/16/index.html","809f22f3d48a13baf068a941ae545489"],["pages/2/index.html","2f8feb779fc97adac402790a421004c5"],["pages/3/index.html","66673c9cd756042e8befad8f37cd6940"],["pages/4/index.html","343df9c887425accc8d37be306612ae6"],["pages/5/index.html","31cf1a92b063e31723e3cc96c6b1dc16"],["pages/6/index.html","2f23cffdd234a95b77fbe91883502c58"],["pages/7/index.html","5152932534380846caab3c40d0a4a422"],["pages/8/index.html","f3be20edb54e66f1c49a22744863483d"],["pages/9/index.html","a7664892a56b48cb0f973e444e902116"],["posts/1059499448/index.html","528f15e48e97dcff300477ea73fd637c"],["posts/1071063696/index.html","376858cffb7d0052210d3659a799752f"],["posts/1082185388/index.html","68ad4d9effd929f19d32573778809117"],["posts/1099762326/index.html","9b966c2a861f98136a1813bf7d9b87b6"],["posts/1113828794/index.html","1514c22b7be008155e9c4d266ecc70a6"],["posts/1118169753/index.html","a55a7db56c57116187ed076707c9a412"],["posts/1122710277/index.html","8cd70cf6fcabeff923cc013ec6b74726"],["posts/1124152964/index.html","a177da6d6992c386390565b3fa61f0a9"],["posts/1127467740/index.html","717a42b5167f1c86d7d4672b997d5af3"],["posts/1150071886/index.html","fe4bebee34ffddc0893c46764135da8a"],["posts/1150143610/index.html","ce18899d31a0f1f5adc7f1772bdc3657"],["posts/1152813120/index.html","886f41b13e1dfa1464ca7b2cd8e47bcb"],["posts/115524443/index.html","bf2ebb72ddf3df179bdb15d89296ce81"],["posts/1156673678/index.html","14484b4d845306b0812dd3d4e625a8a6"],["posts/1166840790/index.html","8b54a8df3258056171ac6333754361c7"],["posts/116795088/index.html","4ad3f3c50d343d3fdefe08aba13f2078"],["posts/1176959868/index.html","a4afe0342854a130ab2469b3081dd8f5"],["posts/1190622881/index.html","ed8af0c89fb9a6d72e15306fff80d164"],["posts/123663202/index.html","1c7351cc1c6c8efe5c8f407982f0fe30"],["posts/124807650/index.html","e323a8b31fd8c00ba4ed840a7475bd11"],["posts/1254783039/index.html","96981fb697881e6ce7b61f4d1ecabdaa"],["posts/1320325685/index.html","5a28cdf28323855c9c45b301161b2081"],["posts/1329254441/index.html","74eb05829b918fb46c2b6cb7f1a2338a"],["posts/1357715684/index.html","e6734a54f0f066a758d65ac87945a622"],["posts/1358971951/index.html","7d2cfee5fadbeaa75a76d74c126ff957"],["posts/1386017461/index.html","6fd2dc3ca3df39e133cb46930d15bfab"],["posts/1394521917/index.html","3d68099ef246193a96e4998a984c7d55"],["posts/1397717193/index.html","ead4846aef51c3e443ec56108e6f4032"],["posts/1417719502/index.html","48b146e37212e0d0a82b1ada43b94cd7"],["posts/1424645834/index.html","fdfdb2c99b7a710701ffa01ac3b15475"],["posts/1444577573/index.html","10e0833dd3b2e8d0a1f4404d939cfb92"],["posts/1467630055/index.html","7429252e55f99d39f4c1ba26679fcf96"],["posts/1478979553/index.html","145b5561ccf3ab4599f400c819d716e1"],["posts/1540537013/index.html","a224409a203e6a4b05308b47ba75bc28"],["posts/166983157/index.html","625076f9ecb0a9ec24225fa5db65bb2a"],["posts/1670305415/index.html","aef3aab7f42973f1d52b39862b7b45ca"],["posts/1684318907/index.html","1ac14c902a25496bdcdee4ba24dcf2af"],["posts/169430744/index.html","baf7c1bb64e31398726f8eeb02cfbd4a"],["posts/1700650235/index.html","8b496bd9f5e30a9d01054e98ec69555a"],["posts/172426938/index.html","23a04707db535782bda4d698993de8f5"],["posts/1836680899/index.html","09d82203854ce2c8b57ec01c527d1d91"],["posts/183718218/index.html","874655c037f14ff72bb0529a02511ed4"],["posts/187480982/index.html","81ba866a6a1a2232662fb05ee2012412"],["posts/1930050594/index.html","3d1414d6776b3f7434b38a4c3235d513"],["posts/1933583281/index.html","0920f5f6d5b97f55087fce4865b13fdd"],["posts/1940333895/index.html","b4e9ab2ed5faec56dc861c0f8c65e625"],["posts/1960676615/index.html","bad0ff5183ec288f8868347d0900bd13"],["posts/1983298072/index.html","2c9b7a40416004b499f38e337f49aa11"],["posts/1989654282/index.html","4d76dbce39f2cd36caf0c5f293a656bd"],["posts/2015300310/index.html","c5c2f183af45d9f3efde35051b7abf23"],["posts/2038378679/index.html","2b1ddd20a3ccc878a7bc850eb652b51a"],["posts/2041685704/index.html","6b9e0809085d898048b4d4cfa1d61aeb"],["posts/21112647/index.html","f871aaaf44de0d2606ba653290b8cd1d"],["posts/2158696176/index.html","f0a335ac5c32d137b7bb1323131992e6"],["posts/2171683728/index.html","70f4cf2ab0a45e88fc25fe17476cf057"],["posts/2186770732/index.html","cd135b60d22d3356b6b7e5e9467a7c66"],["posts/2275646954/index.html","4ee8c257e1d8c78aa2454c9984a7d417"],["posts/2314414875/index.html","9d3b7e4cf4e56ee55a9a19cc32018107"],["posts/2318173297/index.html","a97336b36fea6f8d79b12f3b410bfb47"],["posts/2418566449/index.html","1a3346ae06726c58afd7bb3fd4c44814"],["posts/2436573863/index.html","267ceb7fe7a08543d7329c433ca0e0cc"],["posts/2462008667/index.html","cff850c17d37f48b06edf6f41fcf9ca4"],["posts/2463121881/index.html","994e96c588230647cb4f172028e69632"],["posts/2488769283/index.html","1f28ad3c23c6309476cb700cba5a95f4"],["posts/2527231326/index.html","68bb7951b33f0125b1ffe541aa62ce09"],["posts/2583252123/index.html","09a8d8852d9f55af16d2769fb592f0f1"],["posts/2613006280/index.html","7d50330466e4b338bfbd91b2539dff07"],["posts/2617501472/index.html","dbfedec52f04dba3de4422d37be29c1c"],["posts/2676125676/index.html","e5ce152015c5e9574b4ebad8d469ed10"],["posts/2734896333/index.html","9981ec2e32ba100921aee5b9de1d6e51"],["posts/2752169106/index.html","6dd720ff32f467d1c6eb4a1c4d414f2d"],["posts/2799263488/index.html","ba5c62345f79bade22aa01846fd90ef2"],["posts/2805694118/index.html","57ad7da8f9982cedf577f69f108a2fbb"],["posts/2809571715/index.html","d9586cc6c99cf9950bcb34021051bec4"],["posts/2822230423/index.html","4a9e156162b2bbfae3bea8ed3bbe82f1"],["posts/2829333122/index.html","371a1918f96c44ddb53bc022f4b992c7"],["posts/2911923212/index.html","ff36300ba001fdc93a2eda36949f3088"],["posts/2941880815/index.html","641c0b80c3bc2564caffb945613789e0"],["posts/2950334112/index.html","c346f4590feb71e3518517b474314b3d"],["posts/2954591764/index.html","b909c10751e156aa70dfceb411ffb3d3"],["posts/3019914405/index.html","8abcee9ea5f14afb6d1732fd888cbf26"],["posts/3032366281/index.html","ab90c5090527abf0839fadb3785bd8c3"],["posts/3040357134/index.html","fc927e28e7464a9558216161e5cbb627"],["posts/305484621/index.html","c52a94932c985d217afb460bf0c3baf4"],["posts/3083474169/index.html","9091e90faeb92a1f7c8ec54e55aca28a"],["posts/3099575458/index.html","b73d49fab7e3378df48a7fe5cef6f2d9"],["posts/3111375079/index.html","9a796e64b63bd78f346124dc82b28374"],["posts/3120185261/index.html","85a895e9976dc81ceeda855657ed4cc0"],["posts/3131944018/index.html","d2412b8754d375bee2fae710cd94fc43"],["posts/316230277/index.html","149c5672ee5b917b97c7ba9e0058580f"],["posts/3175881014/index.html","8a3d050b9bfe5ed99ecd9a5db9e7b71d"],["posts/3222622531/index.html","b22e8fb18818a28739ea83031f3062de"],["posts/3247186509/index.html","d0d4589fecf85c30388c61dfbd07b70d"],["posts/3269605707/index.html","c79554491ff7ddb7a9d884670feda74b"],["posts/3291578070/index.html","6084da9226dabbbed0a15bfca4e01993"],["posts/331752533/index.html","404df5feb5250523ee57ce27b5a8fbfc"],["posts/3321992673/index.html","a8a49f86391e1b5320d26ea0aa5b353c"],["posts/335366821/index.html","b0d900c2bf04540308d356b3e1e5c172"],["posts/3356910090/index.html","a420c2c470fc8aee638debb2b87c3cb2"],["posts/337943766/index.html","07a099120baf5b9dc08e1c5dd70ab780"],["posts/3417652955/index.html","6ad8088a5046bbb83aef97ceca0a45d8"],["posts/3444626340/index.html","177c763c35421b4190cf05431801cca0"],["posts/3449402269/index.html","2028b47618d97dd5b427a3b75f9f0056"],["posts/345410188/index.html","821cc79eeb4eab74967562387f252b3e"],["posts/3461518355/index.html","4bda060fb3698c39ff536c92aa40f251"],["posts/3494408209/index.html","e007c2ec66816b3047b4672af17cf1ea"],["posts/352037321/index.html","507593140ab40247899da6ed6ae3e26b"],["posts/3521618732/index.html","21ce6e610ab4cf019fcbe2382fcb2bff"],["posts/3568552646/index.html","5f173dbfd9b34bec30f9d6e766614bd8"],["posts/3603924376/index.html","500177e99e4cd83b8d2f4d1161c89062"],["posts/3637847962/index.html","6c053b478dc8603f20c05d14ee5cd000"],["posts/3642630198/index.html","967eb9d6c090787dd8562376f6c5addb"],["posts/3653662258/index.html","83cf7f17a8e1888ce70af2c4cd60e2b7"],["posts/3653716295/index.html","10a1144526902f2d2a861fceace3f4ae"],["posts/3657008967/index.html","1951379f1b569d7b640cf181065d54d4"],["posts/3668933172/index.html","32592cd402aca7c2c6efda8f7f0fff31"],["posts/3677280829/index.html","938538c735fb0925d8d9f0ee37b5ae05"],["posts/3687594958/index.html","88dbf8fd6163e3ba0e46ecd8535f8c06"],["posts/369095810/index.html","79ab123c5249fc4e71f1b17ecfdf8b6b"],["posts/3695777215/index.html","c8ce57a1cbafa41385de1ede3eaa522d"],["posts/3736599391/index.html","21905c4c2df86dcab058d62817c3c538"],["posts/3742212493/index.html","28f0c0817d45dcd8f7188e2dce158405"],["posts/3782208845/index.html","5ccc0eccc2ca29fe30a4b2bc3f51d03c"],["posts/3789971938/index.html","341a842f0d2d58c7feeeadbf62626380"],["posts/380519286/index.html","e2069f4b45bacb9180a0468af2f020ef"],["posts/3846545990/index.html","dfaa2338cf34206025b02ea3669019f3"],["posts/3873710624/index.html","1f9f065e835a330d9546316392c62f5f"],["posts/3959327595/index.html","26996e7220ec37c87b2a77f4f4a618cf"],["posts/3972610476/index.html","606c456baf13b765d4836027a0e27fe3"],["posts/3995512051/index.html","bc9233ac1f9b6a68b1c30af46c045dee"],["posts/4088452183/index.html","40eade45ac7ffb48790b58ada7571b00"],["posts/4116164325/index.html","11c211cea92dbb35b71e9bdf1083831b"],["posts/4158690468/index.html","b2d707f4524398306ca5ba63ddd8cc92"],["posts/4159187524/index.html","71b65fbeaa17274a90a63ab33ac79199"],["posts/4197961431/index.html","1e5ca18fa429de241025cd7fa54b0a68"],["posts/4205536912/index.html","1007943c4ae3f10979634bf4aff549e7"],["posts/4236649/index.html","6653be323f9cb7362e9721a9e4bc71f4"],["posts/426338252/index.html","416feb1256d96050a7bc95263adc74c6"],["posts/450254281/index.html","7ad1ebcb1b568ef97a3981b46a78a555"],["posts/4891372/index.html","353ceb596be16d18da3f4e2c3554b615"],["posts/569337285/index.html","27aa10f849b0bb140d6786169c833eef"],["posts/570137885/index.html","0b05f47730ce7a2f3bde10bf9368d925"],["posts/570888918/index.html","34a0b07ac18b6d20ac723d86533688cc"],["posts/582264328/index.html","d6cbdd5f7d5f67e2e8fd0ddd86da8ce4"],["posts/632291273/index.html","c124024b7f4baaaa0eeabd2373519ec5"],["posts/70687890/index.html","2503f88350ca73fb219ce7f54e4af3fd"],["posts/719322223/index.html","7da0b4d142149c005b8739f4c9eef167"],["posts/720539850/index.html","cac1c9725e795e507aeba2a290ada812"],["posts/786195243/index.html","3629a822605180da4235cb9e129a9f99"],["posts/795474045/index.html","92c565ba5c887df2575bb309cb8c80f8"],["posts/815861661/index.html","a44070f5c09583586d8942bcf72c3402"],["posts/821259985/index.html","f75ab3a36af585660c179e6541e07470"],["posts/828223375/index.html","db83da28b9e912d0126a7e9317d0949e"],["posts/887585917/index.html","73687e06a6e51cec6c6ae041aa5430f3"],["posts/888549816/index.html","a85f74320ecf776221d9b36683f5aef9"],["posts/906436376/index.html","c0ce0839020852ca5f82599b5f4385aa"],["posts/907824546/index.html","16d89adb8e7b6697e22187ef57a454b4"],["posts/927393529/index.html","c4481f957b46898b5713a39b1847de91"],["posts/94443781/index.html","d54bc257bd6e402fb3e40f40161fdab0"],["tags/2014/index.html","bee95b5a5b038e01c9803801cf62782f"],["tags/2019/index.html","164a1e1ae6004acd11a19d0a53ed3b73"],["tags/AI/index.html","88470e526e679a2231bff485470b3243"],["tags/AOP/index.html","9e2e38203eb83b1a28bfcbf7cf1a47f5"],["tags/AR/index.html","a911a3dca414fdffda707b44a4d0c035"],["tags/AssetBundle/index.html","f2dfbe2e3116bb49984f9ee047177e12"],["tags/C/index.html","699f7cd4d41983f48ba4c5f69d9908a2"],["tags/CDN/index.html","f782e2a96fea1013b3c317590a28bfae"],["tags/CG/index.html","9d8e06b1da4a42c93444fa7035737e26"],["tags/CI/index.html","760a03d2bbea10caca40a2e71fbde219"],["tags/CORS/index.html","b1c5d4ebf185f1d0568804ce7ca52dfb"],["tags/CSharp/index.html","a98697a2ea5e28ca742b492d382ebfde"],["tags/Castle/index.html","a0f187dea219bef261992b48fcfc5680"],["tags/DBeaver/index.html","935e7e00776c40a13edaf9c39e213d18"],["tags/Docker/index.html","1085e8f9020914a8207c2ea4fd8b884f"],["tags/Dynamic-Proxy/index.html","e98b2454c93d865a5b0cd35fe9f7b5b5"],["tags/Dynamic-WebApi/index.html","356e64556eca12c6313c1d30fd6139c7"],["tags/EF/index.html","a10c724d7c12862ee51e64aa0c4fefed"],["tags/ELK/index.html","9320ed627d87954946a79ea8d8f75952"],["tags/ES6/index.html","582f376549a658bc9b5a5ed2c2df24d9"],["tags/EasyAR/index.html","ebe4de8f22bdfe5b5b93740ac729a523"],["tags/Excel/index.html","940ce61d8c3be30e21f7186757eb685a"],["tags/FP/index.html","bc28338751ebf19eb8f6f62f1bfc287e"],["tags/Form/index.html","a25b1543a928ca647d85d87b4d7a1cd9"],["tags/Git/index.html","fc162456678aa468e2373d8f4f1cff7e"],["tags/Github/index.html","d64ce30d6e8fc7c23fd63c9ac9b6880c"],["tags/HTML5/index.html","4f771436d08827d1c7668c2fbb02dd07"],["tags/HTTP/index.html","b261b6c89f1bd9081076823a2f52bb2e"],["tags/Hangfire/index.html","792b5c2acdbb880860fd1499a10baff8"],["tags/Hexo/index.html","68022a458e5e4cb4bc0b780c74477bfe"],["tags/HttpClient/index.html","c5885949792da215617498ee59022c9a"],["tags/Hyperlog/index.html","871013c81a46b248e13e4dbfd6517e8b"],["tags/IDE/index.html","224e009efc9fc5b43a9d315964d6200e"],["tags/JS/index.html","4d2192961ee76fdf669a6b8759880177"],["tags/JSON/index.html","db06cf6af672eb154c00a5cac1e6152b"],["tags/JSONP/index.html","3c87c4a0066b3d936943ab4de616d619"],["tags/Java/index.html","0d8b33d4c8bdb511369261b491f79d82"],["tags/JavaScript/index.html","4e570529872197fb7a1f6123e367cd7c"],["tags/Jexus/index.html","8fe3784ce1cf812efc55d3da17622aa5"],["tags/Kindle/index.html","80b0666fd28cd0de8b50cadf1422d03c"],["tags/Lambda/index.html","e8123f605f4fceabec625ddc4527a6ac"],["tags/Linux/index.html","3da3caad8a43b15fdadc176cfa91b352"],["tags/Liquid/index.html","5b248b0607aa536cd0246a2cab722406"],["tags/Logger/index.html","ead9bd0e59651cab4f3eb01f9f2df8fd"],["tags/Love2D/index.html","30995f19261c0801d3741ae9d1d6ccf3"],["tags/Lua/index.html","00d1e95b4926d0c794a9bb7fa6d47137"],["tags/MMD/index.html","a51e275c11d458f71fe19a301f36c3a4"],["tags/MSBuild/index.html","e3629f19fef00ef865ebab7ba6ddf634"],["tags/MVC/index.html","64ea12446adcec9254b3ca9a4a4bee8f"],["tags/MVVM/index.html","dc957a83af11e716f09b21e1f1167ba8"],["tags/MapReduce/index.html","b2601f9d2c8f701afe6f9dc752917649"],["tags/Markdown/index.html","cae253d916893a8b0467de6edf77b8e9"],["tags/Mecanim/index.html","d9d6c342661b3fdd3184d495fef1e1a9"],["tags/Mono/index.html","ca3ecf25829a142cae45f36a984cb938"],["tags/NET-Core/index.html","f76e6a81220e33bd527a4ecca7c53b80"],["tags/NET/index.html","ba6c03c3d1b341646e4dcc8167bc26f3"],["tags/Nginx/index.html","19279baaa77f4cc9db289c4c18fda855"],["tags/OBJ/index.html","6bb0923622a5811f20d5a0419c8e3ba5"],["tags/Oracle/index.html","4fa75aad908d8436633a987f7756151e"],["tags/PL-SQL/index.html","0406834cb3af406def2779dd2f1083e5"],["tags/POCOController/index.html","b586447cd04198037237331f24b4e8a4"],["tags/PWA/index.html","bc67345777ab80a8c4a933b55d0313de"],["tags/Python/index.html","dfe2c0a16f5b1d7617c9c97dae1247a3"],["tags/RESTful/index.html","9d4cc7cc0dbb75bff035c271737ce407"],["tags/RFC/index.html","cf4439709ca007ebdaa1a6ac0672959d"],["tags/RPG/index.html","f5a884603383cf867c23e60fd9e8882c"],["tags/RSETful/index.html","8aed3a520e62e8b56fe3a0e7889ceb8e"],["tags/React/index.html","f76e29808306d204f50e00b185d99550"],["tags/Redis/index.html","e2c18ac04569485557381b60db2e8d76"],["tags/Referrer/index.html","c821dd6c4f38e10072fbb4fd1ba0b0bd"],["tags/Retrofit/index.html","db8e02c29255597237a102a7a063bfe3"],["tags/SDL/index.html","b6035682d2551c49fd06bd10bfda53ec"],["tags/SQLite/index.html","0761479685e617c6ddfbb5f0b1563cac"],["tags/SSE/index.html","f03258a459d930810f2f52ec7617b7e4"],["tags/SVN/index.html","70760ab980812398ae149bbdab668b08"],["tags/Script/index.html","9301e7c01bfadcc89d57292b30be1525"],["tags/Server酱/index.html","48ecd30f745b6f8d3a9fe6b46dba07ab"],["tags/Shader/index.html","7473e7691cc1edc9d99f04d0a977bd23"],["tags/SignalR/index.html","1af47092e6a83586ad8162dad2cba72f"],["tags/Socket/index.html","736b8170248e3c37bbfe344d8eb5191d"],["tags/Sonar/index.html","06ffb201c23192c5a6068eddb50e5276"],["tags/SourceTree/index.html","2aa917f1e899e7754fc041d5b47aa757"],["tags/Sublime/index.html","fdd21793a7a167ead706299544f2698b"],["tags/Swagger/index.html","f97dc8a2d7762f1bcfe9db1d05aa25b9"],["tags/Trace/index.html","ffdb9c40cb28ffe4be3515e2a12a3cd9"],["tags/Travis/index.html","2e6ed3e07c1541698aaf85ee40056a44"],["tags/Unity/index.html","4ef71fde548d7ac2f109a7a89e142a16"],["tags/Unity3D/index.html","215db477987d7e9658dca229c740ba99"],["tags/Unity3D/pages/2/index.html","f62dc56ac8ca00dce3ce74e87e15902c"],["tags/Unity3D/pages/3/index.html","d720b6811204f8f42cabc4723a011ca4"],["tags/VSCode/index.html","ca107ff7c477389a02e3eba2a53833d4"],["tags/Valine/index.html","62f2d987e0d1e0a081ec8be5ef43f393"],["tags/Visual-Studio/index.html","8f50b92af825a42d482bd04cfdb14bf0"],["tags/Vue/index.html","3823b209ea03ce140902c16a6b035f17"],["tags/WSL/index.html","e3e625862d76a58f87eda6b537845ebd"],["tags/Web-API/index.html","d093ededb11253ff32b7d26992cb41d8"],["tags/Web/index.html","46d33b2334ade0a7694cc9edeeb99e21"],["tags/WebApi/index.html","c9d6c6b3001dd0e7416c4f987a6582d2"],["tags/WebSocket/index.html","4a78c56ca926f4776f651a6c633521b1"],["tags/Wechat/index.html","760b1cc5af06ad0e303c371787e7bca6"],["tags/Windows/index.html","a19087d0c53c50b82aa6fe0b92cec3c4"],["tags/disunity/index.html","4cc9ace04799f9e2b3da0a9d3930efe5"],["tags/index.html","7f6465b03155e78378e148b86e028a2b"],["tags/jsDelivr/index.html","0c09a90992107b0131b54b5c16b27c38"],["tags/matplotlib/index.html","8677cf769d28ca8155848c4d648ce331"],["tags/uGUI/index.html","527a39f1515e833f7dfd2f94a18f427e"],["tags/zTree/index.html","8254e0c2758ceb3fbe3105bd787a0287"],["tags/一出好戏/index.html","57d5af9e16bb94ace4a6424c6d565eb5"],["tags/七牛/index.html","a8478190c3f72b371221833103ec2133"],["tags/主从复制/index.html","8a3712af22b0d97ad014e2cc90fb8e5f"],["tags/事件/index.html","b6a91b6255b8bc77f3dabaf648b3f9c7"],["tags/二维码/index.html","975b9ffeafbd8afab9aa14939e19ef1f"],["tags/云音乐/index.html","a548180f33a10a2531b4c5d357379a0c"],["tags/互联网/index.html","0910af7e75bff667da7f2b213f558df1"],["tags/亲情/index.html","b726ce38523295128973b9b0c4dcee71"],["tags/人文/index.html","097f1f14f8a23a58c02e46c10ef712c7"],["tags/人生/index.html","ecce90a51570d8437177466cbddd997f"],["tags/仙剑奇侠传/index.html","3b7cd37c5f7f7430bec9d46e896f6e94"],["tags/价值/index.html","e80ffb173fc4cb5dee8a53d39d9be4cf"],["tags/优化/index.html","c20d4501efedb9fa6cbc4514336289d9"],["tags/全智贤/index.html","53a66cd6c44dc913dae502a4f69bb72b"],["tags/公众号/index.html","cb37e503d327e844b3507b3de930a1ea"],["tags/关卡系统/index.html","bb20dfa9dbd1fde0b85a54efe42ee2b1"],["tags/函数式编程/index.html","d9d2c74bd9c5ddcc3bb1f09d18f483b6"],["tags/别离/index.html","fedb0f485bbb5643f72d85a03ef9ebc6"],["tags/前任/index.html","6020dd9babda0e98336ea9089a724198"],["tags/前端/index.html","3646b326b785ca8818717d4b949e5915"],["tags/剑指Offer/index.html","03218801b2b8becc14e3a57e9f21df1d"],["tags/加密/index.html","7d8bd2fac3c43a6bf5491d4a63962f3d"],["tags/动态代理/index.html","da0b562b17746cfabfa0f2a81f2ab351"],["tags/动态加载/index.html","6e8f116e98922fa1b5f298a96f57d85e"],["tags/动画/index.html","1b54d097ae5882c6b82354783a406e02"],["tags/单位/index.html","a4227dc67e62e3c395c3b81ee702d723"],["tags/单机游戏/index.html","3bdbece8f15a937e736e8f95a3dbd010"],["tags/印度/index.html","b9fb9c48eb51c49c9b472b70ee2b7671"],["tags/历史/index.html","7a070dc94b7ea65ed2030c9c5990c9b3"],["tags/反编译/index.html","0b6fb99bead976ea0c63ab256875f537"],["tags/同步/index.html","a8fa52aa65dc8c6a373a721e4a4d1de2"],["tags/后端/index.html","dd6333994409ab0eefdd70f8365cf891"],["tags/命令/index.html","8acd9288a71ed48553ac4e0ea7aa0bdf"],["tags/和平/index.html","e17e45e309f4923dd0d83bbf49f51e9b"],["tags/响应式/index.html","5b76c3e0c671badadb10d9afbc4bed75"],["tags/哲学/index.html","0c857542b3a8c0e4991665a483de5281"],["tags/回家/index.html","22988535404dfff74e02dd0bd86f1981"],["tags/回忆/index.html","01363d476902e98085d079535af4b010"],["tags/回顾/index.html","1c560924de01f010c3660602d6896d12"],["tags/回首/index.html","13f5210e153569087a819df7cb5c5be7"],["tags/图床/index.html","addba23df8f52dd365a36f55d51ea02a"],["tags/图形/index.html","4c7b38eba6167ad642da70a9e1cb0785"],["tags/地图/index.html","d715c6a542363e82a18cc3aaa9057a16"],["tags/塔防/index.html","1f4ad6a26721a6e99cbea16417af61a9"],["tags/增强现实/index.html","ad870c145990e839735c2b528a519ab6"],["tags/壁纸/index.html","f8329f0a15c293d7ac601948a248120b"],["tags/夏目漱石/index.html","bb9f8165d10559aef36b650a270fc806"],["tags/多线程/index.html","44bcfa71436b0492a3eae4a1b51aecc3"],["tags/大护法/index.html","7bcbac0c98df2d491c1adf684482b6f0"],["tags/委托/index.html","ae8930dceac4376200fbbb8bc7bf2d1e"],["tags/孤独/index.html","363db9da73552266ea2102268ad081a1"],["tags/展望/index.html","ec3814c572e91cff9c761a57ac51acbd"],["tags/工作/index.html","99d788ded5f0421f9e493219756dff96"],["tags/平凡/index.html","a5b8ebe5bd5968124eb165fa173da2eb"],["tags/年华/index.html","5bc6c1707e5cd1bbfd6a68f1a31f5b96"],["tags/年度/index.html","9e8ed41bc2b83e423ebb1499d1f8ad14"],["tags/开源/index.html","d0cd0664cc28cf41eccd761cfa63c376"],["tags/异常/index.html","155418ce176d246a70ab43131d69189f"],["tags/异步/index.html","f3ece0ee72ad1aa31df1a3072192852d"],["tags/引擎/index.html","dc97107fce1b8ed45efe7e17d3ef475e"],["tags/影评/index.html","6bdcf0ae764d135a63e5bb61dfff94f6"],["tags/微信/index.html","09069dd1d6ca177b606d77d9ebeabd45"],["tags/微博/index.html","2bc9538d992c251846cca80168994e50"],["tags/心情/index.html","654fe7c40fadcce2b3f767996ac05aac"],["tags/思维/index.html","1e112c10d1dad042b559e6086cc8a5b0"],["tags/总结/index.html","e7373eafb58a36077b98984c982544cb"],["tags/想法/index.html","0dad99bbd70ec266cdb9f87f0574a0d9"],["tags/感悟/index.html","eb56b84c1668fa0277aeafa3218e9e00"],["tags/成长/index.html","f59fc316b95459f0d56b96027634eb0f"],["tags/我是猫/index.html","2de7649aeac45c555466b68421348c76"],["tags/扩展/index.html","499feaf934e7ad9c0ad91be34870c57b"],["tags/扩展方法/index.html","f310fab8456f63adb80e9f6f153b4ad5"],["tags/技术/index.html","b13d33d349c4af8ad775fc43b7c0aa96"],["tags/拖拽/index.html","4509f3f40b9202d80f8a939efe4920fb"],["tags/插件/index.html","6c398c46e55af32a77ef0901adfa572d"],["tags/插件化/index.html","d18d4456ad2e17432f40a52f2dbf0d20"],["tags/数字/index.html","60385fb470e20fc4a87db08d7623cd6e"],["tags/数学/index.html","75b788da7fe53146c6be2d4890905113"],["tags/数据/index.html","54345ee21e57a5f1da0d09c5651ca91a"],["tags/数据交换/index.html","ae1625ee9e136ead99e461c9df86b62d"],["tags/数据库/index.html","8da6c2e5ee9a16b91a59c1bbbd7afa40"],["tags/文本分类/index.html","a09f5310cc44ae36af0d21edb9f390e3"],["tags/无问西东/index.html","7a9c1673242b7a2b560db4e9cc24cfec"],["tags/日剧/index.html","e39d2634d1812c3297a25a7a58d6ab2a"],["tags/日志/index.html","80ef19dc400c49081863bb7d4de7b6f6"],["tags/日本文学/index.html","088ac6bff9f7b1da77130e2b62b57eaf"],["tags/时区/index.html","d686db662787f5149f57145a58cf71ef"],["tags/时间/index.html","a170fd1215d416ea1523ed968a5b3807"],["tags/服务器/index.html","ae90f14f2beccb8baf3131d90d2da51c"],["tags/朝圣/index.html","dca7546463c3927bb0ca956fad6c60cd"],["tags/朴素贝叶斯/index.html","0e8f639fca24f04c41da8c7c70637d25"],["tags/架构/index.html","c02891d07a934ef19b492e17bfdd4026"],["tags/标注/index.html","7323d22f9b69479b9e5104c7ef548675"],["tags/校验/index.html","8e6282c7e3dd7fed72481eadf87fbec7"],["tags/格式/index.html","131003a36f883223be8952c08944e8b8"],["tags/格式化/index.html","228f77f3a0bd334976950834aae139d8"],["tags/桌面/index.html","1dcd1bed7eae79510b71a37f02ca0a91"],["tags/梦想/index.html","8330bd718988244b6ab9698dcefc957c"],["tags/概率/index.html","6985cb142a6b19f3f662b522760428dc"],["tags/模板/index.html","3e377471c4a37bba2b4ea51724e74197"],["tags/模板引擎/index.html","824f0cea7894ed6847c72337783733c9"],["tags/毕业/index.html","53b0e641764ca14f81a20c251ced47f2"],["tags/毕业季/index.html","e86d49a1917d556b02d06540e132b2ef"],["tags/消息/index.html","118fb8a7c2637f70e50db74e1a86c303"],["tags/游戏/index.html","e8bee2bac1c1c42d6b80f9b67f822b4f"],["tags/游戏/pages/2/index.html","2cdee4492fc385430b69e730fea711f7"],["tags/游戏开发/index.html","2ba28ff868ffc3f98dab78e9d5e99be1"],["tags/游戏引擎/index.html","441c679e210fdc68cc90d2e12811b0bf"],["tags/爱情/index.html","58750f3ea367070b117bdabbb0fdab25"],["tags/版本控制/index.html","a969fa043e2bb4b95db2fa8de136c0a7"],["tags/版权/index.html","8fa03727f726b12229c487c85e30beeb"],["tags/特性/index.html","dbe853093ab093051d79c3031caf82c8"],["tags/状态/index.html","1784841224492f154e247c9ef369c1e9"],["tags/现实/index.html","01e5d2646ab4e7addf0c3f1233282e77"],["tags/生活/index.html","bf955d642ae9efd26ce1fc7fb3ae057f"],["tags/电影/index.html","070310b23065ddf81ac6fd5d4d27c9f1"],["tags/画家/index.html","2be4a150655a2f9ab8b2a922d5045749"],["tags/知识共享/index.html","4b4cd2bd2cb3194e9c5da1a3eb17cc3f"],["tags/矫情/index.html","26909b8260184992df99d11a6f0d955c"],["tags/程序员/index.html","f280bd8b48944c86eba0d1eff50e3cd1"],["tags/穹之扉/index.html","b42b05c1f24ab19f4278d47c916590c8"],["tags/穿搭/index.html","f102d6fb0eeb652011325e90804fa3ea"],["tags/童话/index.html","45786e541c395232fd4874d1c1573c29"],["tags/笔记/index.html","b92fd787c1ddc1cf53467e2fb928f0e2"],["tags/算法/index.html","150ece0a473fa235b31fc3fc7395e678"],["tags/米花之味/index.html","638fa8dfc85ed8052a56f39f186cb99f"],["tags/缓存/index.html","8d33258e87f0a34fabac96e619db7f0f"],["tags/编程/index.html","438a441f9ed43e28f7017ffe796c37b4"],["tags/编译/index.html","31c278f42767631f8b8bb832d37a2e0d"],["tags/编辑器/index.html","67f889f92c40157dc52e9e9ca7fc25bd"],["tags/网易/index.html","d7c50b6840467f2891a2f3c59412e615"],["tags/脚本/index.html","333b80fedaed6b429b3c5d81e0799c5e"],["tags/脚本语言/index.html","64ea74e46011f3baa05f27c46d406b0f"],["tags/虚拟摇杆/index.html","f8934d1d9fa6aeb292060be067bfc7fb"],["tags/蛋炒饭/index.html","ecbb1cddbffcacb942848f572e0f93b8"],["tags/表单/index.html","5eb878a8df48f5bfe66653245e4ffc3c"],["tags/装饰器/index.html","d920a9449a1c5cecccf64d45eb78f2bf"],["tags/西安/index.html","6e86205b79e1414f2bbe154a57430924"],["tags/计算机图形/index.html","a354c71cd14f9a6efb36b81bf4340ea1"],["tags/设计/index.html","6a5d04e94ecd7a221a617349e08dae5c"],["tags/设计模式/index.html","c8fb339392d035b346da4445dec8cdd4"],["tags/访问量/index.html","21775467989b85a7ea9462933433a074"],["tags/评论/index.html","917ceaccb4b18b08f5dd1a73b326350e"],["tags/词云/index.html","a9d8b9e4005df08b4d15de5d31b31266"],["tags/诗人/index.html","6f398e1a64bc0bf84c2a3bfa177eea7e"],["tags/语法/index.html","e1a055e763ac4f2d9fe34b5f6dbf57d1"],["tags/请记住我/index.html","8c88dc554364e63b464892a53e834bb6"],["tags/读书/index.html","bb164723133845fbda8ee9fedcbecb39"],["tags/读写分离/index.html","05bb3e7458ca8467c707f75316420ef1"],["tags/调试/index.html","1ac1ce56dc995c08edb719d7d2f836f6"],["tags/贝塞尔曲线/index.html","59a181e37aeeae45cfc5ed02d0e81ea4"],["tags/贪吃蛇/index.html","bd0f415924483bebd94f4c2d9350caba"],["tags/资源提取/index.html","6d6d004ff4e369925ab7a409dccb95f8"],["tags/跨域/index.html","54ecdc81c279b36849c330cccb11cc00"],["tags/跨平台/index.html","3bb6e5176bdbc35fead0258b9606cc76"],["tags/转盘/index.html","ea983c8f3d0acde98d5d04f717011e5c"],["tags/迁移/index.html","b6df4d6b63b84ece36b00c1a2e683c92"],["tags/通信/index.html","9a657951628ed1311bfd43929b9c8bb4"],["tags/邪不压正/index.html","ea8a0f942262e91903e5ae3224e37e8f"],["tags/部署/index.html","f57683cab1fd11c68de2966153b7918b"],["tags/配载/index.html","0d1ab5587b407e40e8b5b2f84006206d"],["tags/重试/index.html","ac2885624cb78d7a6e8956306f2a1882"],["tags/长安/index.html","d31dd0f885b12de6b95db780ea0c6b3e"],["tags/长安十二时辰/index.html","76868091d66fe5c215e4ed6504548290"],["tags/阅读/index.html","a7341b633f8675095ddfd6e99bd9c1f2"],["tags/阿里/index.html","f0e0bfe418559dbfe32763d48a0b5857"],["tags/随笔/index.html","bd3aee4357723502329a66f818905339"],["tags/霍金/index.html","fb116c0d7eaa5d0bccb51370b6770951"],["tags/青春/index.html","34584a54d23911c63cc4772e10ded73c"],["tags/面试/index.html","fdfc3f167b710144767c68de6d0f4baf"],["tags/韩寒/index.html","1727afefd9e01adbf40539ced7fb5a42"],["tags/马尔克斯/index.html","076fc9bf8d19d4958d248219f0a6abac"],["tags/验证/index.html","49fd6a9d285ad0ee841b8a113fbd2aa4"],["tags/黑客/index.html","f99743fadbfa051b87a5de214b9e99e0"],["wiki/index.html","1447e3d2f60394c7d312f540e6611470"],["works/index.html","6b01078ef1334131695c15f29cd0e4d1"]];
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







