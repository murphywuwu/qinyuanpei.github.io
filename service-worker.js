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

var precacheConfig = [["404.html","d41d8cd98f00b204e9800998ecf8427e"],["about/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2014/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2014/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/pages/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/pages/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2015/pages/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2016/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2017/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2018/pages/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/03/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/05/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/06/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/07/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/08/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/09/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2019/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/01/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/02/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/04/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/2020/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["archives/pages/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/Golden_Gate.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/alipay.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/avatar-20191118.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/avatar.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/brand.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by-nc-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by-nc-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by-nc.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by-nd.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by-sa.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-by.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc-zero.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/cc.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird144.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird192.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird36.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird48.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird72.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/icons/bird96.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/img-err.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/img-loading.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-leancloud-counter.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-metro-music.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-rpg-game-demo.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-running-girl.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-snake-game.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-wechat-analyse.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portfolio-weibo-analyse.jpg","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portolios-td-game-demo.gif","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/portfolios/portolios-wallpaper.gif","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/reward.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/images/wechat.png","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/APlayer.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/Meting.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/echarts-wordcloud.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/echarts-wordcloud.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/heart.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/heart.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/leancloud-counter.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/leancloud-counter.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/main.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/main.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/search.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/search.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/ua-parser.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/ua-parser.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/vconsole.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/scripts/vconsole.min.js","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/APlayer.min.css","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontawesome/fontawesome-webfont.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontawesome/fontawesome-webfont.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontawesome/fontawesome-webfont.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontawesome/fontawesome-webfont.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontdiao/fontdiao.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontdiao/fontdiao.svg","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontdiao/fontdiao.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/fontdiao/fontdiao.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Bold.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Bold.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Bold.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Light.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Light.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Light.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Medium.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Medium.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Medium.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Regular.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Regular.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Regular.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Thin.eot","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Thin.ttf","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/fonts/roboto/Roboto-Thin.woff","d41d8cd98f00b204e9800998ecf8427e"],["assets/styles/style.css","d41d8cd98f00b204e9800998ecf8427e"],["books/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Unity3D/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/Unity3D/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/人工智能/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/前端开发/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/单机游戏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/开发工具/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/数据分析/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/数据存储/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/游戏开发/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/游戏开发/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/游戏引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/独立博客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/生活感悟/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/生活感悟/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/生活感悟/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/编程语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/编程语言/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/编程语言/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/编程语言/pages/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/编程语言/pages/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/读书笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["categories/读书笔记/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["friends/index.html","d41d8cd98f00b204e9800998ecf8427e"],["index.html","d41d8cd98f00b204e9800998ecf8427e"],["movies/index.html","d41d8cd98f00b204e9800998ecf8427e"],["musics/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/10/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/11/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/12/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/13/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/14/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/15/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/16/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/4/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/7/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/8/index.html","d41d8cd98f00b204e9800998ecf8427e"],["pages/9/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1059499448/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1071063696/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1082185388/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1099762326/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1113828794/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1118169753/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1122710277/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1124152964/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1127467740/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1150071886/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1150143610/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1152813120/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/115524443/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1156673678/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1166840790/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/116795088/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1176959868/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1190622881/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/123663202/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/124807650/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1254783039/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1289244227/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1320325685/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1329254441/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1357715684/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1358971951/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1386017461/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1394521917/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1397717193/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1417719502/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1424645834/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1444577573/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1467630055/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1478979553/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1540537013/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/166983157/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1670305415/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1684318907/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/169430744/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1700650235/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/172426938/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1836680899/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/183718218/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/187480982/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1930050594/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1933583281/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1940333895/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1960676615/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1983298072/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/1989654282/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2015300310/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2038378679/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2041685704/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/21112647/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2158696176/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2171683728/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2186770732/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2275646954/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2314414875/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2318173297/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2418566449/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2436573863/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2462008667/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2463121881/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2488769283/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2527231326/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2583252123/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2613006280/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2617501472/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2676125676/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2734896333/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2752169106/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2799263488/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2805694118/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2809571715/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2822230423/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2829333122/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2911923212/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2941880815/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2950334112/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/2954591764/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3019914405/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3032366281/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3040357134/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/305484621/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3083474169/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3099575458/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3111375079/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3120185261/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3131944018/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/316230277/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3175881014/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3222622531/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3247186509/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3269605707/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3291578070/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/331752533/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3321992673/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/335366821/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3356910090/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/337943766/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3417652955/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3444626340/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3449402269/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/345410188/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3461518355/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3494408209/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/352037321/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3521618732/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3568552646/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3603924376/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3637847962/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3642630198/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3653662258/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3653716295/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3657008967/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3668933172/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3677280829/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3687594958/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/369095810/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3695777215/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3736599391/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3742212493/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3782208845/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3789971938/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/380519286/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3846545990/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3873710624/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3959327595/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3972610476/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/3995512051/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4088452183/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4116164325/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4158690468/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4159187524/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4197961431/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4205536912/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4236649/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/426338252/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/450254281/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/4891372/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/569337285/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/570137885/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/570888918/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/582264328/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/632291273/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/70687890/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/719322223/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/720539850/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/786195243/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/795474045/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/815861661/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/821259985/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/828223375/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/887585917/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/888549816/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/906436376/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/907824546/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/927393529/index.html","d41d8cd98f00b204e9800998ecf8427e"],["posts/94443781/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/2014/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/2019/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AOP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/AssetBundle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/C/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CDN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CG/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CORS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/CSharp/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Castle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/DBeaver/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Dapper/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Docker/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Dynamic-Proxy/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Dynamic-WebApi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/EF/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ELK/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/ES6/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/EasyAR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Excel/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/FP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Form/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Git/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Github/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/HTML5/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/HTTP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Hangfire/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Hexo/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/HttpClient/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Hyperlog/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/IDE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JS/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JSON/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JSONP/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Java/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/JavaScript/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Jexus/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Kindle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Lambda/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Linux/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Liquid/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Logger/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Love2D/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Lua/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MMD/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MSBuild/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MVC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MVVM/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/MapReduce/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Markdown/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Mecanim/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Mono/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/NET-Core/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/NET/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Nginx/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/OBJ/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Oracle/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/PL-SQL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/POCOController/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/PWA/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Python/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RESTful/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RFC/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RPG/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/RSETful/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/React/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Redis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Referrer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Retrofit/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SDL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SQLite/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SSE/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SVN/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Script/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Server酱/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Shader/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SignalR/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Socket/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Sonar/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/SourceTree/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Sublime/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Swagger/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Trace/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Travis/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Unity/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Unity3D/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Unity3D/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Unity3D/pages/3/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/VSCode/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Valine/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Visual-Studio/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Vue/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WSL/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Web-API/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Web/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WebApi/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/WebSocket/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Wechat/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/Windows/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/disunity/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/jsDelivr/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/matplotlib/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/uGUI/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/zTree/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/一出好戏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/七牛/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/主从复制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/事件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/二维码/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/云音乐/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/互联网/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/亲情/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/人文/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/人生/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/仙剑奇侠传/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/价值/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/优化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/全智贤/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/公众号/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/关卡系统/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/函数式编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/别离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/前任/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/前端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/剑指Offer/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/加密/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/动态代理/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/动态加载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/动画/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/单位/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/单机游戏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/印度/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/历史/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/反编译/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/同步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/后端/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/命令/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/和平/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/响应式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/哲学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/回家/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/回忆/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/回顾/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/回首/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/图床/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/图形/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/地图/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/塔防/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/增强现实/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/壁纸/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/夏目漱石/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/多线程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/大护法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/委托/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/孤独/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/审计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/展望/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/工作/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/平凡/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/年华/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/年度/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/开源/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/异常/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/异步/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/影评/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/微信/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/微博/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/心情/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/思维/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/总结/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/想法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/感悟/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/成长/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/我是猫/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/扩展/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/扩展方法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/技术/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/拖拽/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/插件/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/插件化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/数字/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/数学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/数据/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/数据交换/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/数据库/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/文本分类/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/无问西东/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/日剧/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/日志/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/日本文学/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/时区/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/时间/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/服务器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/朝圣/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/朴素贝叶斯/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/架构/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/标注/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/校验/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/格式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/格式化/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/桌面/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/梦想/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/概率/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/模板/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/模板引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/毕业/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/毕业季/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/消息/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/游戏/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/游戏/pages/2/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/游戏开发/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/游戏引擎/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/爱情/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/版本控制/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/版权/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/特性/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/状态/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/现实/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/生活/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/电影/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/画家/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/知识共享/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/矫情/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/程序员/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/穹之扉/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/穿搭/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/童话/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/笔记/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/算法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/米花之味/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/缓存/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/编程/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/编译/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/编辑器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/网易/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/脚本/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/脚本语言/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/虚拟摇杆/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/蛋炒饭/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/表单/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/装饰器/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/西安/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/计算机图形/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/设计/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/设计模式/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/访问量/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/评论/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/词云/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/诗人/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/语法/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/请记住我/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/读书/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/读写分离/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/调试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/贝塞尔曲线/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/贪吃蛇/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/资源提取/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/跨域/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/跨平台/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/转盘/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/迁移/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/通信/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/邪不压正/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/部署/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/配载/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/重试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/长安/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/长安十二时辰/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/阅读/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/阿里/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/随笔/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/霍金/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/青春/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/面试/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/韩寒/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/马尔克斯/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/验证/index.html","d41d8cd98f00b204e9800998ecf8427e"],["tags/黑客/index.html","d41d8cd98f00b204e9800998ecf8427e"],["wiki/index.html","d41d8cd98f00b204e9800998ecf8427e"],["works/index.html","d41d8cd98f00b204e9800998ecf8427e"]];
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







