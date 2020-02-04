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

var precacheConfig = [["404.html","3f1f678afb01b68c47b93cb0a43ed74d"],["about/index.html","c1b8d928de98244acb7ac031d9a23fad"],["archives/2014/12/index.html","dbf1c4fe373d2cc6bbc429c970a42c87"],["archives/2014/index.html","7d3b0870ec1fa4b96d56b97e4dac3b71"],["archives/2015/01/index.html","e817b92c787beabf405ad3d05db938a0"],["archives/2015/02/index.html","12ea6086a11b0cc085105ccfc7494028"],["archives/2015/03/index.html","f200090a6e540c7a3623889dc783317b"],["archives/2015/04/index.html","df04353e5d492d6214dac131a1f92b89"],["archives/2015/05/index.html","f939a5dfb385ce867547d750dcbf5984"],["archives/2015/06/index.html","b8b4e6a30837e991639e7b7b471f653a"],["archives/2015/07/index.html","75f708dd42af176f0e527f754296a2e1"],["archives/2015/08/index.html","4bd8afba97588bba94dce46d9fc4ec74"],["archives/2015/09/index.html","e47658a19f8da00d10ffd5ea84cdc1cb"],["archives/2015/10/index.html","a8edc65374282aa6441b94db087beb6f"],["archives/2015/11/index.html","71f0dc52246c7a256c1e4afb7a96f4ac"],["archives/2015/12/index.html","fbbf5ce2818f8c2808728b8ec815c6ca"],["archives/2015/index.html","df01d3395b97dd4967bcb07dcd104f3a"],["archives/2015/pages/2/index.html","ebb775f6958c63c3da071a20d87d161a"],["archives/2015/pages/3/index.html","10732dbe10244d1e79473afdba0967ed"],["archives/2015/pages/4/index.html","a013b14534624dd73be0735140386607"],["archives/2015/pages/5/index.html","f2c515692922e54d5e0799d714b3617e"],["archives/2015/pages/6/index.html","26cd5bb83a1e29fd606babbf3649fd45"],["archives/2016/01/index.html","2289cd5a9374bff75e8d4e7b7f630130"],["archives/2016/03/index.html","a64229d10497c33127bf453a2f4ed93d"],["archives/2016/05/index.html","25b95bc9658cb6c1052393a18f0450b7"],["archives/2016/06/index.html","d3dc7ee2c555647b736c22226016b4cb"],["archives/2016/07/index.html","4cdbb46021ec4b5237b8bfdde21e814d"],["archives/2016/09/index.html","ee4c76f8ac28e38937e0070533463baa"],["archives/2016/10/index.html","6a651850ef360098ea65d0c181b93a63"],["archives/2016/11/index.html","0d05dbfdec6c0ab9228eddf221d0565a"],["archives/2016/index.html","ea7dcb84a3ece6a9e8e0d911677b5d72"],["archives/2016/pages/2/index.html","155e2c04e8cd42b84911c10e0ec43b09"],["archives/2016/pages/3/index.html","9f5fabf784c2a0c9afbe292b0b44e678"],["archives/2017/02/index.html","87095bbf47b4dfac7443039551bbc621"],["archives/2017/03/index.html","364f22bc54ee17038fc3606ab34a6d2f"],["archives/2017/04/index.html","4da788b2a6c6aa14d467dce976638af8"],["archives/2017/05/index.html","6732f70eabcead33380fa870202d26b7"],["archives/2017/07/index.html","1dcf33ba4fea6331b20b52cebba947c7"],["archives/2017/08/index.html","8856d143c3aa48a28c736790953b5412"],["archives/2017/09/index.html","9e2b619d272946fbed5f066b8e06f088"],["archives/2017/10/index.html","59be4cca695804987f5809b64f693a06"],["archives/2017/11/index.html","e675e7009307cd2881b361062f52a67d"],["archives/2017/12/index.html","47875a93fe9ae2c69230814ad6aad95e"],["archives/2017/index.html","bfd2c12293a5cdc811ac70c04ef328f8"],["archives/2017/pages/2/index.html","6de4b58b5942c9cbfe4633d6ea8632cc"],["archives/2018/01/index.html","66fafed295e1861e386ef164b0b44e69"],["archives/2018/02/index.html","c032077211e76c7118e413a055fadcd6"],["archives/2018/03/index.html","d5b5347f5252911dd2ea9712130ac287"],["archives/2018/04/index.html","bf81632f124739d6773339139f330779"],["archives/2018/05/index.html","797a637f236a8bc4043cf74806ecc523"],["archives/2018/06/index.html","0795c442048ba530d67f82e5535544d7"],["archives/2018/07/index.html","4ab1b28aa77d3aa1e95f9f0429b4dfca"],["archives/2018/08/index.html","946702bc3f4dde8b195686a8ed2646d7"],["archives/2018/09/index.html","dbd1006c6c2c7c99c8ee6ff465cb4024"],["archives/2018/10/index.html","b4e496038866f9e1afd52c228fc2d88e"],["archives/2018/index.html","8dc8b5dcb27d1cf41952efaa30ea7e19"],["archives/2018/pages/2/index.html","2ee0c10d36018168fdd581df0c553202"],["archives/2018/pages/3/index.html","a49886fd8f101f3da857740104ba74c1"],["archives/2018/pages/4/index.html","3c8b12689e55a2da757115ea2ee90468"],["archives/2019/01/index.html","dd959a1ca5b01aa5d46ff64820455856"],["archives/2019/02/index.html","4783835fe5343534be0b7e2687768bd8"],["archives/2019/03/index.html","e5a166f4289b14736b5bc4989b26d9b0"],["archives/2019/04/index.html","5f0ee453eff50554461055045c6b5b6a"],["archives/2019/05/index.html","bb78300662a9af5e46e3b87822d1cd31"],["archives/2019/06/index.html","06564da32447534f432c6974f3b5c7d3"],["archives/2019/07/index.html","e9becf3dfdfb92194571c7eb33705e65"],["archives/2019/08/index.html","7b957f7b5eec890ac98fc6a9815b8232"],["archives/2019/09/index.html","2d674f7ffd9516b59caefab96a1e01bb"],["archives/2019/10/index.html","8b31caac8553964b3c5367ec5540a776"],["archives/2019/11/index.html","fdc1d71b406ff1f36d910e12453e4ae8"],["archives/2019/12/index.html","ee628e75000314689be4d745baaa0e67"],["archives/2019/index.html","4cf1c9062ef2be87a60cf798f05e43e2"],["archives/2019/pages/2/index.html","deaba5a8b903112bfd0f12d6fc2e8f81"],["archives/2019/pages/3/index.html","b882d8299f3adae139febf655e5a4752"],["archives/2020/01/index.html","108a7773f6e9af97f31503710ee62c2c"],["archives/2020/index.html","e19ab6e3df027d0dc4289a94e11a1223"],["archives/index.html","2860243853dcb90640daedf3a00a20f6"],["archives/pages/10/index.html","970d9a8d04f82fbcea6089a1787310b2"],["archives/pages/11/index.html","52e553ca9ece723adeab92df398403f0"],["archives/pages/12/index.html","2d9abb4b908f2c5dd0d5e373de281423"],["archives/pages/13/index.html","30cfc0cd9f9ecdc13a8ab097fe0db9fb"],["archives/pages/14/index.html","b452229c38a1e79949e4a48c1690df86"],["archives/pages/15/index.html","2b9a063c7f1135d80ff960f8bcd1db4a"],["archives/pages/16/index.html","42fe3b8996393c856f2697a21b80b3b6"],["archives/pages/2/index.html","3f7ef3612f4b025e3ea5636423c72fe6"],["archives/pages/3/index.html","aa514c1c9abd4fa8c43ce51b5f6a7751"],["archives/pages/4/index.html","0b0277efb4d3eccc90e6f0cb3b7d811b"],["archives/pages/5/index.html","581695d012670fe35b32cb1350fb91e5"],["archives/pages/6/index.html","79f7d33aee7567e75765beaba6ad9403"],["archives/pages/7/index.html","52bd8ac23bfa8c6b8861e58a757f2f86"],["archives/pages/8/index.html","2c32719ca7e60930589a28461488e4d0"],["archives/pages/9/index.html","4fc1e96afc31e57def64e15ba3814941"],["assets/images/Golden_Gate.png","77b27f25f3f8c397bf55605410a83ac7"],["assets/images/alipay.jpg","68b81d440a463432623c7181a1481bdc"],["assets/images/avatar-20191118.jpg","7a1be7eef7956fd73fa1c02e0079390c"],["assets/images/avatar.jpg","bd62e6aadfdfb81d662784b94d6cacac"],["assets/images/brand.jpg","a324bd905bc52c224867d1dc4a2a3a6c"],["assets/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["assets/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["assets/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["assets/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["assets/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["assets/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["assets/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["assets/images/cc.png","40e8d4f2367ed503ec760572d78852de"],["assets/images/icons/bird144.png","6235fdfde5e554abbeeb5ad1318d0693"],["assets/images/icons/bird192.png","24a3e5d18d2b28825dc07a96b514afb3"],["assets/images/icons/bird36.png","bdd6d78e9b01c087b701c6bbdb6ec20e"],["assets/images/icons/bird48.png","dd7c70059f32b3a455bde9a4fba965da"],["assets/images/icons/bird72.png","b5de33bdacffe8c407faba0570ad9fee"],["assets/images/icons/bird96.png","2f91ac01fbad575f5f751e256882b8c2"],["assets/images/img-err.png","c42d1e1d72831e9a88be8f61704de267"],["assets/images/img-loading.png","5da66a37e909242c5d51b4e2e897ca7b"],["assets/images/reward.png","816c50e5edebd643cc18864a6fb0d704"],["assets/images/wechat.png","505d41f7a3c6a583a6be2b9dc6ca5597"],["assets/scripts/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["assets/scripts/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["assets/scripts/echarts-wordcloud.js","b4644fe1cef1d7ab86da245d7b502a24"],["assets/scripts/echarts-wordcloud.min.js","64c4fecc1f8798d2b0be883f14440014"],["assets/scripts/heart.js","a272771d9e6ccd973c0eca7c2ca7c71a"],["assets/scripts/heart.min.js","9d619eec26d0c771b486a3d3fe31c39d"],["assets/scripts/leancloud-counter.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/leancloud-counter.min.js","fd1c76518acb63ba91ceb4de70da8364"],["assets/scripts/main.js","f5610af31db4360ff083940540208259"],["assets/scripts/main.min.js","8a8a593a329b2a5769159fdfa99fd138"],["assets/scripts/search.js","7ccc60ea64a0c2ac76bf0b7c37e37f84"],["assets/scripts/search.min.js","f901db6e7faecf102f487d3920540531"],["assets/scripts/ua-parser.js","1855817a302f5714dd60110c14c58533"],["assets/scripts/ua-parser.min.js","615c089c71c979729e2bcf60a61d7934"],["assets/scripts/vconsole.js","452e640a946db84037095f7829c424c1"],["assets/scripts/vconsole.min.js","a8521234f310941536700a523619b8b8"],["assets/styles/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["assets/styles/fonts/roboto/Roboto-Bold.eot","ecdd509cadbf1ea78b8d2e31ec52328c"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","e31fcf1885e371e19f5786c2bdfeae1b"],["assets/styles/fonts/roboto/Roboto-Bold.woff","dc81817def276b4f21395f7ea5e88dcd"],["assets/styles/fonts/roboto/Roboto-Light.eot","a990f611f2305dc12965f186c2ef2690"],["assets/styles/fonts/roboto/Roboto-Light.ttf","46e48ce0628835f68a7369d0254e4283"],["assets/styles/fonts/roboto/Roboto-Light.woff","3b813c2ae0d04909a33a18d792912ee7"],["assets/styles/fonts/roboto/Roboto-Medium.eot","4d9f3f9e5195e7b074bb63ba4ce42208"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","894a2ede85a483bf9bedefd4db45cdb9"],["assets/styles/fonts/roboto/Roboto-Medium.woff","fc78759e93a6cac50458610e3d9d63a0"],["assets/styles/fonts/roboto/Roboto-Regular.eot","30799efa5bf74129468ad4e257551dc3"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","df7b648ce5356ea1ebce435b3459fd60"],["assets/styles/fonts/roboto/Roboto-Regular.woff","ba3dcd8903e3d0af5de7792777f8ae0d"],["assets/styles/fonts/roboto/Roboto-Thin.eot","dfe56a876d0282555d1e2458e278060f"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","94998475f6aea65f558494802416c1cf"],["assets/styles/fonts/roboto/Roboto-Thin.woff","7500519de3d82e33d1587f8042e2afcb"],["assets/styles/style.css","7a09190e67e17f0a6f8010961f614538"],["books/index.html","58baaaf5caf16b28dad2ff8b129d920f"],["categories/Unity3D/index.html","85866b607b1c4f07280f063ff587cccf"],["categories/Unity3D/pages/2/index.html","390e8c63bf5848e4883190669841676a"],["categories/index.html","fe5ccd87c0c2a01deb9999886db8c939"],["categories/人工智能/index.html","88f729eb6fd98003ca65ad5e168ed91a"],["categories/前端开发/index.html","29dfc4019d2cd837a3c60cbaee32c219"],["categories/单机游戏/index.html","0bb4375ce00ed85c712ebd97c4fec8f2"],["categories/开发工具/index.html","66b7fd27815c5b0bc7fb9645d72ada3b"],["categories/数据分析/index.html","99a9c76bdc844f19e2a4c1541a0fb401"],["categories/数据存储/index.html","2335c4a02fadac1e1cd11bf89d0816ea"],["categories/游戏开发/index.html","1e08d7b8591903383fdc00cfb7bd45b6"],["categories/游戏开发/pages/2/index.html","001938c6c5836d17c57ede7d1e32baf7"],["categories/游戏引擎/index.html","85c21c3402aa80fe38b525cd0409f6fb"],["categories/独立博客/index.html","6977ee29a1ef1f67a0df8ec7acbb4965"],["categories/生活感悟/index.html","b03a1476ddf085bbfbd8ef6ec7e12edf"],["categories/生活感悟/pages/2/index.html","c8e6ac28f55674e7fb72b2fd22cd5a43"],["categories/生活感悟/pages/3/index.html","d693cb4e3dc3980a409f371638c8d369"],["categories/编程语言/index.html","3697b35b81a7a8d8fabedc52e40448dd"],["categories/编程语言/pages/2/index.html","fb44bb5e8b3c14deea5c1be3a81b7a15"],["categories/编程语言/pages/3/index.html","5f11722f7c9ee3a488962799c67eedf6"],["categories/编程语言/pages/4/index.html","7fcefa898d9623a82a6a30995270776b"],["categories/编程语言/pages/5/index.html","1b36cb1d81ce26fe2b6d6ff502ee4096"],["categories/读书笔记/index.html","a5a1d841211b763c8ff6ba8b1012c21d"],["categories/读书笔记/pages/2/index.html","7d169950ff12dac5499a92bf60bf7e8a"],["index.html","6dd73cc49a10135bc859fa0d4cd1ba73"],["movies/index.html","5f0682c3b8e00d0c5df0609dd7d9f1b9"],["musics/index.html","c5e821ca0b6430e3f3cb4e2aa8729442"],["pages/10/index.html","f78cb36f56b36bdbcb2a2d1f4e700099"],["pages/11/index.html","6511f0cc8490da9b0d21574f05de6f8e"],["pages/12/index.html","cd2defaa1373b72eb19852b20787f251"],["pages/13/index.html","52b4a29d87ebfc332d153de985ac3e75"],["pages/14/index.html","47f9bad240edecf84d4dead189c34ddd"],["pages/15/index.html","a11d4fa98082b5bed39b2067eaa58854"],["pages/16/index.html","4852c9aa5e84adb4d041d741025298ab"],["pages/2/index.html","45a01a3676b1656b6913da4dfe19e11f"],["pages/3/index.html","90e772d02465b555c323646262f0e44b"],["pages/4/index.html","7c3d5d6764e4d34a8bf06557e492b51c"],["pages/5/index.html","d792b4dbf749be0f468d4903aaad2420"],["pages/6/index.html","8fac5ca0f527063935a3133b219f4f54"],["pages/7/index.html","2fd621dd0ba45f9c476f0e8b55879df5"],["pages/8/index.html","05a3e7df19dd924655e39c16d6ddb776"],["pages/9/index.html","a128f8502a376e0602762148978d22cf"],["posts/1059499448/index.html","0b4e6fc8ad043a32a506d03440759b50"],["posts/1071063696/index.html","5fdd6c4b10ee38c0536142ba9f04dd83"],["posts/1082185388/index.html","90c531d53c68f54850a9b4ab0e9b6435"],["posts/1099762326/index.html","e6e4ee068fb92059e7665af58c742b47"],["posts/1113828794/index.html","5ef197ee183659b2ec998dcd3265d74e"],["posts/1118169753/index.html","6261a53d96183f254b148c0c2aae1314"],["posts/1122710277/index.html","729b6eb7dfdc068ca160583d4d3139e5"],["posts/1124152964/index.html","27533ae3815967334ab69f650938f599"],["posts/1127467740/index.html","780d5701149f8cb158d858167c537eab"],["posts/1150071886/index.html","974e10d1803ceb5bb2c0921716d6c880"],["posts/1150143610/index.html","bb5cb9d92f485341e9556077a9423d3f"],["posts/1152813120/index.html","18172372451bbfad24b6704318150604"],["posts/115524443/index.html","8c2c6f6d8d7443d87055a3b27a774ac9"],["posts/1156673678/index.html","5ee0cefaafbd95e93b5cf5790f0ccf43"],["posts/1166840790/index.html","410169295214807f06488554e2a18b47"],["posts/116795088/index.html","2df6d2e28c524f79ffeb33da8d18424e"],["posts/1176959868/index.html","69dd345874690755010861c7facf2bee"],["posts/1190622881/index.html","55f2b8124d0f76cecc3ee8b38d983a97"],["posts/123663202/index.html","b68e8428f55e8a29183f0f99f49fa309"],["posts/124807650/index.html","7d126b3db90213b108203af457e805fe"],["posts/1254783039/index.html","9bc5e793c827b3174afda245e86e17dd"],["posts/1320325685/index.html","cc77c2454b9392a1f45d3b3084dcc0fd"],["posts/1329254441/index.html","ab82d1adfa4ed5ec29dbb011711c868c"],["posts/1357715684/index.html","7a847e791c76b28f7339c4c6e72fe7dc"],["posts/1358971951/index.html","a2c2f173c17fcd30bce05024c751b1e8"],["posts/1386017461/index.html","f91d248aaa0af87babe749014a8d2cc0"],["posts/1394521917/index.html","3cefaca0856c73b27da04a6dd97185e2"],["posts/1397717193/index.html","92f538a03b5aad7eca6afcb21e87bbf3"],["posts/1424645834/index.html","3a5e5c8ca57b33ab05eee0bbe9c2f812"],["posts/1444577573/index.html","938ee6c8ac6c31a2b18aafa130e353cf"],["posts/1467630055/index.html","8666c9208e33434ffb0f1cb4ea13a4c9"],["posts/1478979553/index.html","ff59d026dc2303300661eb8ca627cec0"],["posts/1540537013/index.html","354e6a91a4ca8ca522e02f439ced2aad"],["posts/166983157/index.html","5c2bfd4baaaec37bb051d3f55a5bb96b"],["posts/1670305415/index.html","df530c76acf42f4887d8eddb9ce153c9"],["posts/1684318907/index.html","fc991e4a8920e85964dfe26fe755ed86"],["posts/169430744/index.html","0c018d34bdcab4756620cde29d8e7090"],["posts/1700650235/index.html","1c7c054d7a5f1ff8a5344c2d4fec7919"],["posts/172426938/index.html","756e915f4ad8093947b8465a33d8c95f"],["posts/1836680899/index.html","784c4fa772f6479449c7f008f4f9660a"],["posts/183718218/index.html","618895758017c311f0a2617740b710ac"],["posts/187480982/index.html","41bb4787e4b1841be2c20bfe26b09b9f"],["posts/1930050594/index.html","a8c4370cd4bc62d958456e35e2f60676"],["posts/1933583281/index.html","da5f2c58390353ff28f3d818fca86b97"],["posts/1940333895/index.html","56ba131c4d7afd4d44b3870b8b206e4e"],["posts/1960676615/index.html","0dc133524c0857a5398499c62c6ef195"],["posts/1983298072/index.html","d43ba717ae77a3f9a7b31899a670dae0"],["posts/1989654282/index.html","2a8a69cef9ab5c104e8ece24aefceff6"],["posts/2015300310/index.html","a62d5657dd7bdf2b0b9aeb96bbdffe9e"],["posts/2038378679/index.html","fe47e01c53666090d003323475de1444"],["posts/2041685704/index.html","6388ebfca7c3a1e3a92ed37e58a7e632"],["posts/21112647/index.html","13f5c5bafc8739c9d8b0bc6eee8d8278"],["posts/2158696176/index.html","e3dac93e03d77183433edd3971a6f6f7"],["posts/2171683728/index.html","8375a46530ab72eea5f592cc90256880"],["posts/2186770732/index.html","b2fd7cd0921d62cffc0344a10898c417"],["posts/2275646954/index.html","b5ff67fc4d95bb5315f0505c244f9f10"],["posts/2314414875/index.html","6951215c8fb8289591bc89aff87b4c3c"],["posts/2318173297/index.html","fcaf9366c08d2e6d27fc2f047047d8c6"],["posts/2418566449/index.html","dcf4bed5fe470913a60a3b99894eaaf4"],["posts/2436573863/index.html","145dd30f61de81c1db66dd875e6047a6"],["posts/2462008667/index.html","b0725dd2164df52249a95cea44bf523d"],["posts/2463121881/index.html","d0d31417ea7149ed059961b52f8fea45"],["posts/2527231326/index.html","a59d836b1dbf19f1322b19bf047115b8"],["posts/2583252123/index.html","d0e2f4deda7ba6b38640cf1a474c87ba"],["posts/2613006280/index.html","828deaade32a4d9f062dea14a798439c"],["posts/2617501472/index.html","b0941ac9382ea802bcd05c26469f4438"],["posts/2676125676/index.html","dce63056f54648698c3cbef2ba98217a"],["posts/2734896333/index.html","73c95a883661aa67eb350d4ae4173639"],["posts/2752169106/index.html","04b293a6b6b3b06ec2247c57b43ca582"],["posts/2799263488/index.html","6fa43ee304d811a49ef30ce74f94a9a4"],["posts/2805694118/index.html","79033abcd8427d5fb6cba94f483ecdf8"],["posts/2809571715/index.html","737cc4afb8f808d57095266f9a4e396f"],["posts/2822230423/index.html","ac4f343feca650dbafd4e70fe180d815"],["posts/2829333122/index.html","1e53ae5091d98c453f04464db698fecd"],["posts/2911923212/index.html","f74f13a92f1ade008a7c7d97b70e80fa"],["posts/2941880815/index.html","d50ad53465599cca9b123bf2c82278f5"],["posts/2950334112/index.html","b1d3f2948565198a5a333b9b586adbc5"],["posts/2954591764/index.html","6a19baaae0ac0d510d254c4e0e8793a3"],["posts/3019914405/index.html","7a6994b95f36097e061ec5b39c100771"],["posts/3032366281/index.html","29c541760af5e599b35cce0125904368"],["posts/3040357134/index.html","e4ca66e9e2eb463ed085c249477e2f39"],["posts/305484621/index.html","142943c323338bd4514a59e73a4bbd89"],["posts/3083474169/index.html","b9b01ab435caa09877d75e8fad95f6dd"],["posts/3099575458/index.html","71d9cd6eaa3246f8c235b1e6b472279f"],["posts/3111375079/index.html","5ecfb11e0d135d12d19efcbc608ea4a1"],["posts/3120185261/index.html","2a55e86f2624752640e46fa2ad71271a"],["posts/3131944018/index.html","e4291cd0b7de03cc9e4b67d03f3cc648"],["posts/316230277/index.html","937bd81ba0be0971ba96d9451fe0f01d"],["posts/3175881014/index.html","531ee09a264b9f34e448d5226d3c689c"],["posts/3222622531/index.html","244b49781f288605e0f149f4c432ddf4"],["posts/3247186509/index.html","d8c5df4649dca34cab83eb26d4af38fa"],["posts/3269605707/index.html","4cda7894829770a01ad8744165358fa7"],["posts/3291578070/index.html","cb7a2a76f79884a3956cf025ec67b0f9"],["posts/331752533/index.html","12e409e0109e04ddfc1662db58e3f370"],["posts/3321992673/index.html","942a8eaa43e37e0dddd37975d52c258e"],["posts/335366821/index.html","99d11315a2e06230ed2c97be771582a8"],["posts/3356910090/index.html","969a3a83eaf9c902a6bb74378b55f2b5"],["posts/337943766/index.html","2eb02da85c9df7304b2ad6c814e0844c"],["posts/3417652955/index.html","d28342e43e24323cf45ac1b6bfc48dba"],["posts/3444626340/index.html","d30628f2282913a501daffad2dbf9330"],["posts/3449402269/index.html","2b14a2b42655ba2d4b66816ffdeaee94"],["posts/345410188/index.html","3c65dc5c65794f0a6fa73832901d0c45"],["posts/3461518355/index.html","fa5a9912332e8f980e977958b39ceac7"],["posts/3494408209/index.html","75c61330c79b7fe2ec78a5a6dfe04852"],["posts/352037321/index.html","84521161be36976e5b94e0640eb22b66"],["posts/3521618732/index.html","cf010a75adc6ecc78842446c22356f72"],["posts/3568552646/index.html","327ecebf9d47310015393150f405ca5f"],["posts/3603924376/index.html","70ff652727c7c18f5a30f6de2c4c0657"],["posts/3637847962/index.html","a8d80ea40b38d0c70b2e1f231181767d"],["posts/3642630198/index.html","c31f920beb9d3368fe831d9537b3d35e"],["posts/3653662258/index.html","7cb533de2a641372644aa971d6bfc902"],["posts/3653716295/index.html","14b587a107b0b9ca9ee3fd5093f1002c"],["posts/3657008967/index.html","11aee0c9b8eae7fa0732dcc5017a73df"],["posts/3668933172/index.html","a5a6f46f6e2b4d4a7f97bace84239508"],["posts/3677280829/index.html","fd28f792d3f5a8ef4f18184aa285435d"],["posts/369095810/index.html","b6b1dfa1efaef6330ea7cc1511a0425b"],["posts/3695777215/index.html","03cff57917a826631bdb608d586e62d0"],["posts/3736599391/index.html","dfe9831220540921cf1263887f911ac0"],["posts/3742212493/index.html","4c6cb9a277577aad4717a47b5933b44c"],["posts/3782208845/index.html","4bbb8f9d8fbe0f350308b455261dbf6c"],["posts/3789971938/index.html","c15fa587d112ff89cff2259dbdb40644"],["posts/380519286/index.html","2089a50b852d8d49326a21e7cbca0fbd"],["posts/3846545990/index.html","1154a636cc2fc9b4bfdacb6d0715be39"],["posts/3873710624/index.html","4b3fea3ee14ba82f9a9ebad91100fffe"],["posts/3959327595/index.html","e193101b79ee05ec7a5366928f0787a4"],["posts/3972610476/index.html","d61f7182c8b03b68dedb55b4cd3f2910"],["posts/3995512051/index.html","32b4d5b6c7accfa2cb65102cf525b2e3"],["posts/4088452183/index.html","a592eccbacc1e16239b059dff1c9b637"],["posts/4116164325/index.html","ceea8344ec824c540f75d14e9997c95f"],["posts/4158690468/index.html","c1bc1ce2ada9c957d444a80c8cd63c16"],["posts/4159187524/index.html","1e9eaf8e9ae4b9eb5a180c33252749ae"],["posts/4197961431/index.html","6704aac1d7da8a83de5554056b0efabe"],["posts/4205536912/index.html","72a420b87e00773a1dee8988f66bbc21"],["posts/4236649/index.html","57c3796a916f78846c2cd9f1739de960"],["posts/426338252/index.html","5280cafdea52c321be60da73d4b51f1c"],["posts/450254281/index.html","412c6b447f36ffcb4d47b8d70d03f646"],["posts/4891372/index.html","d181a9cc25954afa4151a80aee66cfc7"],["posts/569337285/index.html","2a5646986379e71d1710955d30c7c413"],["posts/570137885/index.html","992ef38cc220231f086f047a59240015"],["posts/570888918/index.html","1bc6c62b7c9b81f4aa9567a853ec68c2"],["posts/582264328/index.html","28ebb46504e93c8513458aa6f23418ec"],["posts/632291273/index.html","915a994a308a4a5ebc8e3c8aa6cdd0f5"],["posts/70687890/index.html","89fe9aaa2fa854b7b4aa23758817ac1e"],["posts/719322223/index.html","fc1d3bdb27040e9f42e882c4fd51a918"],["posts/720539850/index.html","fa0e3aeb5fffb52d3f8adab3448a0d56"],["posts/786195243/index.html","4b609ca352479dd3b700980a8d4b900a"],["posts/795474045/index.html","283aeeb115ef0228e56dcd7b3a9f11ca"],["posts/815861661/index.html","e5d15c3de4250aa7e2aef66e1bc094aa"],["posts/821259985/index.html","33ef718763e85ee238cf66ebbfd6130e"],["posts/828223375/index.html","3edfd678a1b0c7ccc2cfee64d4ba81a8"],["posts/887585917/index.html","39d82120adaf3ed1ff9f7d9ded7e9d61"],["posts/888549816/index.html","8395ac0b4ef2c597ca63ba86fd72a0db"],["posts/906436376/index.html","f9a4e64aecf0132a15a41ee45c8da8fe"],["posts/907824546/index.html","9d639fba023916ac4cf1df6204dcb1e7"],["posts/927393529/index.html","2034ca4a9d14d06ede5a218ca968ed24"],["posts/94443781/index.html","800fdf2ec74e7821683442debebf18c4"],["tags/2014/index.html","9806e8d20179116e7e0af95742563786"],["tags/2019/index.html","aac6179d086ead409ec67b7fef94e5c7"],["tags/AI/index.html","a586e662d3b2dd2892d0f6177e009b93"],["tags/AOP/index.html","d8458c883abfc1b79041017631d33ced"],["tags/AR/index.html","83dccf9bd0c5f821159e828ef2aa7eb0"],["tags/AssetBundle/index.html","5d6547677c825faf0ff98cf2a2c70549"],["tags/C/index.html","09f343e882f290245cb303a542633ada"],["tags/CG/index.html","c7feebd2e733fb4e883bcd6b26514180"],["tags/CI/index.html","16f39eef6700e0139539e85cc22554ee"],["tags/CORS/index.html","850fe33d7e29d12af4ef3e8bc714eca2"],["tags/CSharp/index.html","6fc6f6bd6f49abb2a8f384054abf02cb"],["tags/Castle/index.html","a941f53b5f19a41b9b4c46fb3dfae872"],["tags/DBeaver/index.html","1e24a327f0cc4b5790e70ced2d2f08cd"],["tags/Docker/index.html","19f25badd3dacdb973918fab0b4b98a9"],["tags/Dynamic-Proxy/index.html","0f14cbce0599059405990d5985e2508c"],["tags/Dynamic-WebApi/index.html","3a584f2535c042d977fa0dbe8b93573b"],["tags/EF/index.html","aa2b55e0e029303abb1ff3782b8c51e5"],["tags/ES6/index.html","fa46e6fb7ba078cd9384743ad8380168"],["tags/EasyAR/index.html","2224483676d9318decd404f7029dcf48"],["tags/Excel/index.html","6383a4c6bab84124a653a4560b8a35f8"],["tags/FP/index.html","ee89dc7ca8c33efefa126750525c8edd"],["tags/Form/index.html","8172853d50aa6a807ae4c238574bbdd2"],["tags/Git/index.html","10fa93369ea4c294bd47fb92fff29669"],["tags/Github/index.html","edf9a19fb0d06c282e5d394958600c79"],["tags/HTML5/index.html","459f68e46d25f8cdb899324c5c0ce074"],["tags/HTTP/index.html","fb3f6deca890df3537421845cc9f26c6"],["tags/Hangfire/index.html","b4ef3a0c99f6de5e3860c5bb2a9ed86f"],["tags/Hexo/index.html","24d3bce49a33731972c7bb8c2967048e"],["tags/HttpClient/index.html","e59ba97639cc4d7f5185677a4cfee071"],["tags/Hyperlog/index.html","b1c618a609250473dd309ff5cc424247"],["tags/IDE/index.html","12eb64e9cb31dc4b1b971de7080a1e4c"],["tags/JS/index.html","954e708e2cb571c6f37d0b59eab61fbf"],["tags/JSON/index.html","37e0912beae774bac978c7bde1d1a91c"],["tags/JSONP/index.html","8c2b294b145b34146aee5965ff972906"],["tags/Java/index.html","c887a5547f2ef02de733b6ae00028da2"],["tags/JavaScript/index.html","82482409606a3278559c2544de15fd0d"],["tags/Jexus/index.html","1334a55a21936071cb2dd9a792c2027e"],["tags/Kindle/index.html","df3d78ee7ead53a29b8c4bc56bfba0cd"],["tags/Lambda/index.html","0b8018d2146beee39cbb409b29451735"],["tags/Linux/index.html","6c79ef964d23a8e0c17c12faff2ff875"],["tags/Liquid/index.html","585880dd431028703ef0f2dd7b4906ab"],["tags/Logger/index.html","f1a73b431398f06beac95b70404de3e6"],["tags/Love2D/index.html","01d8a4160f21e121f31038cb50a6ee1a"],["tags/Lua/index.html","77bcce8939b48a6fd893f6aad05d8aeb"],["tags/MMD/index.html","823dc899c403812adb96e4b391ead391"],["tags/MSBuild/index.html","28dd229ca5648875c897029ad7720838"],["tags/MVC/index.html","01bf97dec2e451913f9deea4464894ca"],["tags/MVVM/index.html","4ac7437a6a7a7a857b6fefd4dbb01695"],["tags/MapReduce/index.html","ee25a8d27c77bc99cac8141a66e65879"],["tags/Markdown/index.html","67ed0cbefab6b75d88296f3a04ea9483"],["tags/Mecanim/index.html","038a9dc1952a4cd7d84f8664d5e57794"],["tags/Mono/index.html","2bcb1f5193e233a214cc975f487a7a9a"],["tags/NET-Core/index.html","911a983cda3bd0db628df101f7ddf7a9"],["tags/NET/index.html","e17137cd72790997f0031c40826cf6ee"],["tags/Nginx/index.html","b448192efe11b599a11763c61ed97eff"],["tags/OBJ/index.html","d10668889e2fd826c373a6ad20feae26"],["tags/Oracle/index.html","07fd9fd01ab560f5566fe27c075a43ca"],["tags/PL-SQL/index.html","ba2bef96e2146f2440a85c33b39c23ac"],["tags/POCOController/index.html","a1d6b3bf812222353fdc2f789df923c2"],["tags/PWA/index.html","f6a82c2949bc25673e0af048e73d49d0"],["tags/Python/index.html","9debb87570e98cca7cee48b9f168ffd8"],["tags/RESTful/index.html","b3995397e5111257d049e0524042903c"],["tags/RFC/index.html","0ba29d85e6da179434338b03115bace9"],["tags/RPG/index.html","17904fea7ee2431e134e6957da4c6558"],["tags/RSETful/index.html","e59ca801ca22649aa42752c24002a42a"],["tags/React/index.html","92f623b675f1a7d6e9d2f6e100a072e1"],["tags/Redis/index.html","9f848b32e6e0d6b34bdf50aa8eaa4201"],["tags/Referrer/index.html","cc21da2ac4cc824717144850f14adce5"],["tags/SDL/index.html","e814dc478fbdc86c30f396db3b643269"],["tags/SQLite/index.html","d42f248b9f7f9ff9f90a3f32bc948470"],["tags/SSE/index.html","8c9c7a2e89f176e728ff99b71da3bb6f"],["tags/SVN/index.html","58d2cc477b3cefe168b66b382a664863"],["tags/Script/index.html","0bf505f6da812057977349a448d2634d"],["tags/Server酱/index.html","3ab62edb78afbf2615dac76023dafb36"],["tags/Shader/index.html","cc0127e534a197d06a2a323c2927806c"],["tags/SignalR/index.html","cbe3a724b46bd0b7411e89a5b17a4b4e"],["tags/Socket/index.html","0ac32a84f8eee333d8304303e82e06fb"],["tags/Sonar/index.html","03e3970df719f48dea141891e35c34f2"],["tags/SourceTree/index.html","7b681da50d538c4911225ace3b9cb8a9"],["tags/Sublime/index.html","bf5e67e5ebd246f5629bddad7f70afd3"],["tags/Swagger/index.html","d9f32ead41c5dbde47e33e5c34afe6f9"],["tags/Trace/index.html","85aa48d7ad3e8cb078fe0abbf28cb5ba"],["tags/Travis/index.html","92f5b6aae7cee52215daaa564bfbdce8"],["tags/Unity/index.html","19e4722e7bb495f5c7fc4bda8c7f051d"],["tags/Unity3D/index.html","379d5a6d4ab12fdefb7bfb4e19884579"],["tags/Unity3D/pages/2/index.html","eefc5917fbd3c99dffcd9f69fb47691b"],["tags/Unity3D/pages/3/index.html","62a837955cfaf5b0f02228b0734605d3"],["tags/VSCode/index.html","eb895f0fc3c4b506b6aa72815270986e"],["tags/Valine/index.html","608c86a6d8c5e8dc1645d686131600a7"],["tags/Visual-Studio/index.html","ae14e2f48e6c53e6c2bd3ce189f4b0e3"],["tags/Vue/index.html","06d46a9f19e70522f9d375a9493d1742"],["tags/WSL/index.html","643c1b27ae8ce47524286d1c33e01f20"],["tags/Web-API/index.html","1c4664264f8794af0682eca74cc14ca8"],["tags/Web/index.html","bcd8b5ebfe9ad78a0b40ae49a3f33545"],["tags/WebApi/index.html","2f61d626d839f124e29eb7aa0b42e166"],["tags/WebSocket/index.html","cd58535b33cf7c6a62eda511e0f0cc6a"],["tags/Wechat/index.html","02a27273e8550f1bdd98f4b998aeed97"],["tags/Windows/index.html","5cd06487eb5ceaf7ff6578d337c84966"],["tags/disunity/index.html","254cd4f4be5cf8d35bc26ad4bf3c43bf"],["tags/index.html","66cafde88eae916ec4c5f76a3a23b8e2"],["tags/matplotlib/index.html","26a59178280c8972dcc7b054b20e8cda"],["tags/uGUI/index.html","404c2901327b46775e75394d579ef15d"],["tags/zTree/index.html","5ecb2352106add894d4784c36c911550"],["tags/一出好戏/index.html","dee694edaf68d83efc8ccb8cec8f5c50"],["tags/七牛/index.html","6e7531a165ba97ce0f0cef297342093e"],["tags/主从复制/index.html","ca9b5a65b4899f6f6a3ed5565bc3005a"],["tags/事件/index.html","ee64523941a7b55cf4cdf337f7677284"],["tags/二维码/index.html","6b0f577531bb91374b8156b114f56fb6"],["tags/云音乐/index.html","779980e5de036ab199c001bf4436baf7"],["tags/互联网/index.html","02e3b1e70f4bd6697f847508a2dfb37b"],["tags/亲情/index.html","712ba86728c4c6761597cabcd5e02fed"],["tags/人文/index.html","0b8b0afb9614bf3e66899a42c3b1fbfe"],["tags/人生/index.html","5d42a79a2b8fb675d2881727c2c3ecc5"],["tags/仙剑奇侠传/index.html","db7f71c04b4695a1921aa6b9837504b5"],["tags/价值/index.html","fcd1eaec390e13517b0bc86dbeb090a2"],["tags/优化/index.html","4140ef4bd7f15449c53d34ccfca99c24"],["tags/全智贤/index.html","cc4a499e6009f304a709bfc789207d9f"],["tags/公众号/index.html","a8a0332ac2f19d8f6db2c0b0a35e2037"],["tags/关卡系统/index.html","36a9f3969ea12798736bd28472334caa"],["tags/函数式编程/index.html","1018070a5058e3ccdb1a3d1c2fdfcdc2"],["tags/别离/index.html","02c008c2d0c5288c4ec2a5c33f610978"],["tags/前任/index.html","9c51d9d77d06bfb3a7247a057a4f1a41"],["tags/前端/index.html","8d6dd95f42e03ad060a2ef68f368670f"],["tags/剑指Offer/index.html","fe432ea02a52bffeb106bbc018644bbc"],["tags/加密/index.html","9fcc33085ec19402c613cbff2a71d2f5"],["tags/动态代理/index.html","0faa0ddcf6aded1aed34d8cf3d67d98c"],["tags/动态加载/index.html","05648a9953dac73ac11aca2f73606b94"],["tags/动画/index.html","62e622a2800b9ae515b40a8588a37f86"],["tags/单位/index.html","fbbd8f3c289919a3fdd2eef95ae00342"],["tags/单机游戏/index.html","36f4c879c43b82ae5049d5764ec96ba2"],["tags/印度/index.html","c1171a601d0b02ec71b38b109f532753"],["tags/历史/index.html","b268dbc3ed36ffec8b5c8d16194bae64"],["tags/反编译/index.html","551e4612cb4a8ff330bacb02a6487bfa"],["tags/同步/index.html","201651a55ea331541611240672b4be8e"],["tags/后端/index.html","b0b8ebbac48d80abcc7e336adcc72fec"],["tags/命令/index.html","d95887b14fae67e82f6a4e7172257aaf"],["tags/和平/index.html","51f1f7fd28ec33e587ec8e0d2d8f207c"],["tags/响应式/index.html","c88192c45038b5e7518227be5771bcb6"],["tags/哲学/index.html","130c6b58e2e9b3898eaf64525682ef41"],["tags/回家/index.html","c9b3e3a8a28db2656c92ccdb22ca7029"],["tags/回忆/index.html","b45c0784dc9ab23450510bf20671b3f7"],["tags/回顾/index.html","68fcda85ab32d826ae2ace5e68912178"],["tags/回首/index.html","114522793b91b981d42cea7d05ca2519"],["tags/图床/index.html","f3719a7e66418ac94bc26f9af9c52b1c"],["tags/图形/index.html","f0178bd0d4f568c8d8b86f0ca01ff5d5"],["tags/地图/index.html","46fa72235d31d4ce8e3d538d99fd441a"],["tags/塔防/index.html","1c2f74161b42e3a8ad32fb4d166ea14e"],["tags/增强现实/index.html","38949be8f0867847ea91fc37cf9b04df"],["tags/壁纸/index.html","22629f4b57080b11104fc265dcd48ca6"],["tags/夏目漱石/index.html","948ece5a3a1d21be29620a2206068516"],["tags/多线程/index.html","40aec2ea65e55e859440f8c9afb7e002"],["tags/大护法/index.html","6a792fffcc9a4a3949bde881cf2b8154"],["tags/委托/index.html","3e9e1a4bba986751b0569167851471ab"],["tags/孤独/index.html","805906330f703f92edf39879f1be43cc"],["tags/展望/index.html","927ae54ad7811d06749aeaa326aa2a61"],["tags/工作/index.html","703f9d3ebf8c2417cecfedc394e8ff8c"],["tags/平凡/index.html","cd1d9614959e963b06ddcc091082a6fc"],["tags/年华/index.html","005f5bbed6dd3d9c3b60dc15224db3dc"],["tags/年度/index.html","453bf7f8d72f155f4b5a1fb50833bcfa"],["tags/开源/index.html","c7f41d90191ab7254f2c165ea877de49"],["tags/异常/index.html","2380721e6b236498fe84d1c912e14196"],["tags/异步/index.html","bd781ecfe2670f924ffbf4f840f44d0a"],["tags/引擎/index.html","a68a0d61f9ea48a2df4fcfee4b79331f"],["tags/影评/index.html","d9de8b39b85eaa6049b5f38ee535752a"],["tags/微信/index.html","2669e79736531e75af8c7ac338faff08"],["tags/微博/index.html","25745c962d4b8c7f2f93f0b9abee62f4"],["tags/心情/index.html","4a69ff20e34990364fd2438d52acedc0"],["tags/思维/index.html","5f75866afdd93d35070cf1074a6d32f6"],["tags/总结/index.html","29fa77eaa6aed2d1ab889dc4d88f362a"],["tags/想法/index.html","b7c0e5f3cb25a14b7cb6a442610ff3ca"],["tags/感悟/index.html","0ad3c4bf9da287f10eff7fd6d78b5855"],["tags/成长/index.html","0091794842125b8b65f9432ab0309d09"],["tags/我是猫/index.html","a54a6ee54e107df62d3ff96026e212bd"],["tags/扩展/index.html","aa3f5147f94d05e4d1c0561ebcf6667d"],["tags/扩展方法/index.html","3a27117bbd3c36436aacf729600eb1f1"],["tags/技术/index.html","909ad25a2ee8717c7184cf76aeb80a38"],["tags/拖拽/index.html","f76b82757868b4732ae7769d3b8c0ef9"],["tags/插件/index.html","a927ef8ef2c0e7a75accab1e1de5d933"],["tags/插件化/index.html","7db566cac35543afe522e666db678dca"],["tags/数字/index.html","b914423da18ad2b78ffc2ac4785e5e9b"],["tags/数学/index.html","050f37f8721ae298f02227c074650c37"],["tags/数据/index.html","8124ca5860c4431bb97184d24894b631"],["tags/数据交换/index.html","169ffe7cb305560f94676620e042ecb0"],["tags/数据库/index.html","378b087c8303c88cfb68bf03dbb17102"],["tags/文本分类/index.html","cc944682d11f4edbf3dbd6c329dfa944"],["tags/无问西东/index.html","b202cece11d32e5724a379b72f49af88"],["tags/日剧/index.html","b56b75d71e6cd2b2f9dedb418f8146a9"],["tags/日志/index.html","ca155a056f04ca019bcd1fd0feae049b"],["tags/日本文学/index.html","869affd513b547fa45a5c7dbfa000c4c"],["tags/时区/index.html","3802011ecc29e3d1e6183f0df79d5b8c"],["tags/时间/index.html","7f9492c06e5ee023d1c4eaaee0586065"],["tags/服务器/index.html","2251f5a54c84465ba48334d040df1a9c"],["tags/朝圣/index.html","c942b555e41c23f470333388ca7fa6b9"],["tags/朴素贝叶斯/index.html","dbfd7d84d9cb9e7ade7c17744b0a8859"],["tags/架构/index.html","ed872d654a59bbcbba9610a69f99fb73"],["tags/标注/index.html","10cf236d76826d18f70370801ab00a1d"],["tags/校验/index.html","2829f2390325dc70cf4c1937d1905e07"],["tags/格式/index.html","2faea41255e8d6eb82a1acc2d2a01709"],["tags/格式化/index.html","c63b804fb1c037022a300fd4d350b8c6"],["tags/桌面/index.html","87e18f17a59d54ae88ed1f18a81d4304"],["tags/梦想/index.html","c489da3e0bd1eb3bfd39d3d2f921a868"],["tags/概率/index.html","b695db470b84a4f358365b0404156316"],["tags/模板/index.html","c3f10b26847a09032281295f6ff81dda"],["tags/模板引擎/index.html","a333ce9918be3108a98f346e6a8d764f"],["tags/毕业/index.html","af119d04bd814f6ed40fdb0a641312f7"],["tags/毕业季/index.html","4777c9efd8962d9cfc61e275bbc70814"],["tags/消息/index.html","99ad79822cee09ea29805f6a52520c59"],["tags/游戏/index.html","6b91efe5514307b2d9f9859f50666d27"],["tags/游戏/pages/2/index.html","54d8e803be5eb5e1caed4256b6aeccbf"],["tags/游戏开发/index.html","786e22cbe36e80e915efdf4b8761cd42"],["tags/游戏引擎/index.html","d2ec3bf897deb4b6af905ad8319accfc"],["tags/爱情/index.html","985e9323cd7718dfd49bf459ee876378"],["tags/版本控制/index.html","6e8135c10c50c1cb98a37e457d77c20a"],["tags/版权/index.html","54518fe403d0e787e8be9ceea5a20836"],["tags/特性/index.html","8a12ca6206de42b71a539be640ce09b6"],["tags/状态/index.html","d3d0dfe1328298fb7672be9a145e0704"],["tags/现实/index.html","9b0f3a25560a5a014e03f38ca7cc79fc"],["tags/生活/index.html","e2b3fded341940fa1957ecf74a46e116"],["tags/电影/index.html","158347dd0f828a86899d7ee931f18c6b"],["tags/画家/index.html","60069519eafa32ba67661367804b619d"],["tags/知识共享/index.html","4b3de4bcd03076f67b79e02a59895057"],["tags/矫情/index.html","55255389cf3777b867a80b299a35973e"],["tags/程序员/index.html","26981f16c6a3c111d2e8588d2d2c8e86"],["tags/穹之扉/index.html","70fe2c34239b401515183bfd4d1c8ab0"],["tags/穿搭/index.html","cb5b8f14c55ead73e008e48b5a9a7d02"],["tags/童话/index.html","0c44e8df9832ee98f29a6fb96b7bd1cd"],["tags/笔记/index.html","adbf22214f0f001ec6c101b5ce7957d9"],["tags/算法/index.html","1a730ce6b9053025e56237d0d555c2f4"],["tags/米花之味/index.html","ebe577585921e8cf0ded985053a3e79e"],["tags/缓存/index.html","2a13b7b7c737059d4dce16d6c60b81ab"],["tags/编程/index.html","fcae0f4c4cf5ea678a951dabbe36f8ba"],["tags/编译/index.html","3205df1c5ea65ae815d6dd0f10c8de23"],["tags/编辑器/index.html","e40246195262df4f95931871542c814a"],["tags/网易/index.html","6f07dd874758f512b93a09f49e878a26"],["tags/脚本/index.html","d281073a79a865d13c461824bfd3f46c"],["tags/脚本语言/index.html","6b9d37b58b4719eb079802aa168f8d25"],["tags/虚拟摇杆/index.html","f75636f65f307d22d6a46680873e3c5f"],["tags/蛋炒饭/index.html","868ec2a239fdccadc1ced74430bf5f18"],["tags/表单/index.html","286e26f911330a7dc536822d1a3bd3ad"],["tags/装饰器/index.html","e9c232680980dbff512612e5558c0f51"],["tags/西安/index.html","b1f2035b7da3f3638d2bc825ccd91dd8"],["tags/计算机图形/index.html","145687257b2e1d6d64ed7b7b6a01820b"],["tags/设计/index.html","e82782df91c5e8612b4cf4b3a5041f6b"],["tags/设计模式/index.html","cdd88b77466c486d1e7eb31d7d36bd13"],["tags/访问量/index.html","6baf65e85e330ec7db025503adfd72e2"],["tags/评论/index.html","4244769eed0404e13324e5559d91f7b9"],["tags/词云/index.html","6e8e2509bbff958e56c964c0e407ebc3"],["tags/诗人/index.html","d63591760906c0abbb0e42bd1e9dc7e5"],["tags/语法/index.html","86eb38fa5504e6d40a311489a41880a9"],["tags/请记住我/index.html","06fc7aee208907a15a972f03fd54a5d5"],["tags/读书/index.html","b5d5980da00ca1849333a4af6b95b61b"],["tags/读写分离/index.html","a5f12509a07bbff381069eb9ed37fcb7"],["tags/调试/index.html","68047a72e1eb89d4231485af964f4f7e"],["tags/贝塞尔曲线/index.html","e5bd190338622573716a88ffe4151343"],["tags/贪吃蛇/index.html","e3eb6ea8b127fdbe6e6e7222b6ce899f"],["tags/资源提取/index.html","e98c819e35e328bb431736407a58ac0a"],["tags/跨域/index.html","fbcc02e78bc7a630f9dec8a6d41de546"],["tags/跨平台/index.html","d97f017edd4283b5e1b6d943752db5c0"],["tags/转盘/index.html","794ca163ca71cd81b2861c354bfb25be"],["tags/迁移/index.html","c4f8f270aaaf5f0886bf6a6c454e09e2"],["tags/通信/index.html","1fe4370112b36f689891c9167a21ba55"],["tags/邪不压正/index.html","d81bf3bab084e9e736816594649a7063"],["tags/部署/index.html","8fa6bf20ffd4f2316aa4e9cfb36f39ee"],["tags/配载/index.html","b9187f66b04cb29ffccecb5ef000c1e9"],["tags/重试/index.html","1b96261fbb2fb5815f3ee5de11d3cbc2"],["tags/长安/index.html","0f1ce76bf3df949b5ee72259750693d9"],["tags/长安十二时辰/index.html","0b915777699fe480fe32bd3d9565d361"],["tags/阅读/index.html","aa48cb0eed5cac93738c1cf822876a36"],["tags/阿里/index.html","bca61548377e28560aa7a7d2650b3a95"],["tags/随笔/index.html","9a087b6be4d9149c3a7fcfd582088c19"],["tags/霍金/index.html","f3bd7cb37eed1797b9e40e311b7f9a24"],["tags/青春/index.html","2673585e590bdeaa94673d6b69876a31"],["tags/面试/index.html","fc6bcdd3b8e6ad2275d562b6ebbc4401"],["tags/韩寒/index.html","52e99ecc520381631e571441c72df15f"],["tags/马尔克斯/index.html","66cddfaa1a15e44c6bc41106f0bcec71"],["tags/验证/index.html","054dd6107412176f45211bd269a8fd2f"],["tags/黑客/index.html","56dda4dabf625c47f069a3a8ca63bc67"],["wiki/index.html","39dd17d018e09f18224de89711ada315"],["works/index.html","1403144ac37c482b6680f1e42ecb0be3"]];
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







