if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,a,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-6fa478bd"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/78abf480d4cbcc295cea77296e2bebc1668642e2.8747d0c1d8afd5a418f1.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/cb1608f2.8c7e616170c5e99602c6.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/commons.45e0bf160f3c66c4d86f.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/framework.2d0daf90a2fa7e03281a.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/main-08a9fd12319cac446d49.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/pages/_app-f5b4f2f97ed88f1b3e2c.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/pages/_error-cb3ec2156a8b7e307a7f.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/pages/about-44e61e501934a5982df2.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/pages/index-c7a69a52a8366f2d6556.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/pages/indexer-8dc22e9d15d785628adb.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/polyfills-ecf4753d02a8958794bc.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/chunks/webpack-50bee04d1dc61f8adf5b.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/css/206771d2190d0fe4a7d2.css",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/css/8f605abead83f38b8a93.css",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/css/b3209675f97090ce5361.css",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/css/e1e8092671aa6bd195f8.css",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/rk2stOA_pr5Z3ysV_1O43/_buildManifest.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/_next/static/rk2stOA_pr5Z3ysV_1O43/_ssgManifest.js",revision:"rk2stOA_pr5Z3ysV_1O43"},{url:"/characters-category.json",revision:"91a9f27f197b5b5936e2ac84ad2f2fbf"},{url:"/characters.json",revision:"d9a2a4e7eca116f73693ed9b380127ef"},{url:"/expressions.json",revision:"cb0f6cddeb7382fe5cdc54fed76d32e4"},{url:"/favicon-16x16.png",revision:"7d62a3f989ed4e2cf8716caa81761999"},{url:"/favicon-32x32.png",revision:"2f2ccd159f2138cb6c94f4745adff879"},{url:"/grems/20210505_172718.png",revision:"873723da9ff2bb4e489bccbf0ab4e1e1"},{url:"/grems/808348913899667456.png",revision:"3bf68068e97bf4476d9471508220a337"},{url:"/grems/808348914088542229.png",revision:"8d226fa21d4292ea24cb6d9ae41e48bb"},{url:"/grems/808348914297602078.png",revision:"1c6a776132803a14ccdc6ab1c472bae8"},{url:"/grems/808348914541264957.png",revision:"873f6450662567c34185230761b20ff3"},{url:"/grems/808348914717163560.png",revision:"900b792a23f410dbf624ba23d45805eb"},{url:"/grems/808348914880086026.png",revision:"815eee4351934927ff2fcd052e4adba2"},{url:"/grems/808348915124535296.png",revision:"97c61fac8fa78dfeafdcd963ddb2278b"},{url:"/grems/808349313809645598.png",revision:"3dfa464cc73ee12457011ac5396d1078"},{url:"/grems/808564448566444072.png",revision:"9c646e86c7d81350c66cdc75cfdadaf1"},{url:"/grems/808945530121748520.png",revision:"5d94c5a007a5be58673fb8b4d6ac4298"},{url:"/grems/809425850646265856.png",revision:"0d5f894128c0a7894878025418a391d5"},{url:"/grems/809426349721780264.png",revision:"17dd0c0a0ec7c2c50d74b7bda4c24dd8"},{url:"/grems/809426501610373160.png",revision:"83d1422b7b54e59adfea0a697790b521"},{url:"/grems/809426656460275712.png",revision:"f3e09ba186ddceaf32f20b8ffb2456f7"},{url:"/grems/809427379956875284.png",revision:"c1e3015ec26f0274470eb6680fb5b7c5"},{url:"/grems/809427380212334622.png",revision:"86fb482bda98b236c6f8690499b4c2e2"},{url:"/grems/809433416230502410.png",revision:"d83a0505efd75f3bd1a29a82e5782099"},{url:"/grems/809433718711517184.png",revision:"ba13f682bf1d4db76cf21bc67a645ad5"},{url:"/grems/811589958161924126.png",revision:"7ef686459cdde50fe76b819109aeadae"},{url:"/grems/811861823115755520.png",revision:"123964d5155e19adea5f5d8bb38af131"},{url:"/grems/811861946265501706.png",revision:"45d2baca9ece2eff8798aa510c097135"},{url:"/grems/811862038061383720.png",revision:"b24aad02aa93c93cf673f367e4773324"},{url:"/grems/811862084076961832.png",revision:"ca1fe6b9aabade3edb7262c93d592999"},{url:"/grems/811862127970484264.png",revision:"b7f2a92af643f7d41de464dc9e943044"},{url:"/grems/812130078846484480.png",revision:"33af79632ba82d92b4c35b0566eb906e"},{url:"/grems/813231541169291305.png",revision:"7f73a36dd8ecf8d6f8c9416cf94fb031"},{url:"/grems/815943981292191744.png",revision:"c74eba64f577354d12ab98bdc468eb54"},{url:"/grems/816560412082307082.png",revision:"6a2e304602313f0691f464cf827ff628"},{url:"/grems/816613656989138944.png",revision:"379c6c53ef226a263a6f490fe2d22a14"},{url:"/grems/816613755437318144.png",revision:"5e71cbae29ccf0040c9011177157faf1"},{url:"/grems/816914640344580116.png",revision:"39d8ccd38609ef9b70036d60b8f7f8cd"},{url:"/grems/817450947198320660.png",revision:"b02c56e568bb71e6691178189bc1cece"},{url:"/grems/817951678204084224.png",revision:"e675dd0ff4292af85b83d1ebe4629115"},{url:"/grems/821226339196993566.png",revision:"1759d9133fb7f485f7296dc3321d9b08"},{url:"/grems/821558567777337364.png",revision:"2b51da5bf01a032a0c132729e1bcfb0c"},{url:"/grems/822300856169791518.png",revision:"f34c18beccfb3b380a05fbfec7497697"},{url:"/grems/823195766699851806.png",revision:"d38e520127d4ad2e6c5cdb71d013cd7e"},{url:"/grems/824647940832100392.png",revision:"8c93f283377d945374c9e776b9f380cf"},{url:"/grems/828470157482917908.png",revision:"42a1daa93636cc653dd22ab33e9b62db"},{url:"/grems/836843312136192010.png",revision:"6c2baa353fa8777b993815d38e3588ef"},{url:"/grems/836843433028485170.png",revision:"1b04e37a37dc5762993d8951ed038e7c"},{url:"/grems/836843489517633557.png",revision:"702a5e9bcf144711dd21baf751d01a5b"},{url:"/grems/836843633894096926.png",revision:"30fb4a736fd1f35d988f5ae14366a39c"},{url:"/grems/836843693474185246.png",revision:"e19a89fb162cca821392a272deffceee"},{url:"/grems/836843946066837504.png",revision:"d9dfc19b4b1868f065b81606dd922831"},{url:"/grems/836844195477716992.png",revision:"70f9b5a4045f330674b4303c26405fff"},{url:"/grems/836844256147669022.png",revision:"a853c19017167f5326fe8b186acd526d"},{url:"/grems/836844282911916082.png",revision:"7c158500806d8c5128ddc094e3297897"},{url:"/grems/836844340135460884.png",revision:"cc7eaa9372c30f71f6ca42a88828758e"},{url:"/grems/836844400323592192.png",revision:"3e9a5255533035b7b31d3f7e339eb8b4"},{url:"/grems/836844463061467146.png",revision:"abb8074d2b88f94a1b30b95bbd04b980"},{url:"/grems/836844508188639252.png",revision:"d91bb1a65e1c65b54006bad031c2c1f6"},{url:"/grems/836844594008293386.png",revision:"673b08cae71b6d4ad3525a9e385dfef4"},{url:"/grems/836844921553813514.png",revision:"d92795ac922cddeef135f599d6636b2f"},{url:"/grems/836845065149349898.png",revision:"0fe289ad7097b3747c7c7f00902c95e7"},{url:"/grems/836845128281882624.png",revision:"30e8e1cdf1ccd00f8b5737f67fa13556"},{url:"/grems/836845292397658112.png",revision:"e8fe4cd44478966564c8e205d642052d"},{url:"/grems/836845479492976710.png",revision:"9c9b75dfc33108a844c33e77d9739243"},{url:"/grems/836845520664002570.png",revision:"3c31b23e3b883e0c9d8cd725f4d58bd1"},{url:"/grems/836845605132566528.png",revision:"d48aba40659b8a9910f62dd27a37a148"},{url:"/grems/836845836720668692.png",revision:"c1e9336e7294cb93ccccd8f144633281"},{url:"/grems/839688161952923648.png",revision:"d74db39bb253593496a4fa376c9b74c5"},{url:"/grems/840128248347885588.png",revision:"ca1eb77b9f97c1949cdeb0de1b32719d"},{url:"/grems/843465872739401758.png",revision:"bcd139bdd5b342250d9b95bba5f6349b"},{url:"/grems/843465937462362152.png",revision:"8a8a4db7b758b7ac3ba102892ecd18c0"},{url:"/grems/844041216525860874.png",revision:"56c2a4e0a22eee5f52f2c17e7afa6b2a"},{url:"/grems/844409036513214494.png",revision:"afc1f29f8483a356fcc85ac2df6e8e3e"},{url:"/grems/847802704494723072.png",revision:"8e901e24aaf360b13cafb9c1d6135bf9"},{url:"/grems/E0Du2GZWQAESx1I.png",revision:"95291a8bf1969dbbbb3b36995a93be2c"},{url:"/grems/E0DuyhVX0AIJ_y6.png",revision:"87ff65b991c5f90f6e6863e4c797bff4"},{url:"/grems/E0DuzjoXMAEvMyx.png",revision:"48f7968c2215cb32c9e3d0b0cf085af9"},{url:"/grems/E0DvGIPWUAARZNR.png",revision:"c91302d13f1531fdbda4b8c994024755"},{url:"/grems/E0DvVJeWEAAnVnz.png",revision:"6a946bb00596722d7ad9dd02b50116b0"},{url:"/grems/E0DvVKiWUAca9S0.png",revision:"8892d40cb50e0a3a808b16fc87dd4ab9"},{url:"/grems/E0DvVKoX0AAMwU7.png",revision:"6007955c64e1b448878c143133a13401"},{url:"/grems/E2ORWS3VkAARR1h.jpeg",revision:"ffa382024ecdcffa9194c27273cf8fed"},{url:"/icons/apple-icon-180.png",revision:"7f2bae81ab83a2d4599063760e70defa"},{url:"/icons/apple-splash-1125-2436.jpg",revision:"34f884285df2cfb93b76ddbaab4c2efb"},{url:"/icons/apple-splash-1136-640.jpg",revision:"60e3cde24d99b2e7bf29f649ac118967"},{url:"/icons/apple-splash-1170-2532.jpg",revision:"6d4e92c203599361e410804511388203"},{url:"/icons/apple-splash-1242-2208.jpg",revision:"637a60fe012da8f548049e19bce3d1ad"},{url:"/icons/apple-splash-1242-2688.jpg",revision:"c7b03d6fa2b41b19c49f7cdab403781d"},{url:"/icons/apple-splash-1284-2778.jpg",revision:"b30ac3eeab9bc3c0d3d37281ac37c15b"},{url:"/icons/apple-splash-1334-750.jpg",revision:"b40a1583f44d24820991895a8bd8960e"},{url:"/icons/apple-splash-1536-2048.jpg",revision:"eec000d1c6da3f868db0ff5da9b0e685"},{url:"/icons/apple-splash-1620-2160.jpg",revision:"c2d4769632b97fdf2aff01e289184e6f"},{url:"/icons/apple-splash-1668-2224.jpg",revision:"c90bf65a6bb099b8db638add547eb979"},{url:"/icons/apple-splash-1668-2388.jpg",revision:"82357602384ebd4fc2588412d93317bf"},{url:"/icons/apple-splash-1792-828.jpg",revision:"991acc249117c2235d6af49896789230"},{url:"/icons/apple-splash-2048-1536.jpg",revision:"4774885263290a7ee857a5f34732a2d6"},{url:"/icons/apple-splash-2048-2732.jpg",revision:"ca31a35b69953c08bebe8a27910265b9"},{url:"/icons/apple-splash-2160-1620.jpg",revision:"c7eef5589729e96bd9a0f5c99fd31f8d"},{url:"/icons/apple-splash-2208-1242.jpg",revision:"392151f91889fa27d4b2e59d6474620e"},{url:"/icons/apple-splash-2224-1668.jpg",revision:"eafd6c59b590fe50a00b7848b2d5fa73"},{url:"/icons/apple-splash-2388-1668.jpg",revision:"d5dc49e064991ec8049a5a198a4f4c0e"},{url:"/icons/apple-splash-2436-1125.jpg",revision:"e9d4f072614358ecfd9c314bc70c2665"},{url:"/icons/apple-splash-2532-1170.jpg",revision:"39b8c5cc8a5e30e6e840c6eb42305bc2"},{url:"/icons/apple-splash-2688-1242.jpg",revision:"c5da5ae5f2d86c3ba7d5794f3d2fe918"},{url:"/icons/apple-splash-2732-2048.jpg",revision:"685041bc3a09203f89c8446f925f433d"},{url:"/icons/apple-splash-2778-1284.jpg",revision:"18fd9d2bc0f902839ad1d8938718abf6"},{url:"/icons/apple-splash-640-1136.jpg",revision:"0b06ea96706d015eaceed4e36e39bc8f"},{url:"/icons/apple-splash-750-1334.jpg",revision:"40e7dc9b00b3264966043b516eca99e7"},{url:"/icons/apple-splash-828-1792.jpg",revision:"5b09b59dea1768d6ab0e92058efb0439"},{url:"/icons/manifest-icon-192.png",revision:"8f2461c9deb380491d0b91b6667e4b52"},{url:"/icons/manifest-icon-512.png",revision:"27f0f84609b315f010cb534b2d9eedf4"},{url:"/images/logo.png",revision:"6a84caeab112836fc6ec190d99c00d0f"},{url:"/index.json",revision:"ba1f9275639a1ca7616cf99be9859e46"},{url:"/manifest.json",revision:"2ada1884827d06872c8590b7a9696ab3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:r,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/\/_next\/image/,new e.CacheFirst({cacheName:"images",plugins:[new e.ExpirationPlugin({maxAgeSeconds:2592e3,purgeOnQuotaError:!0})]}),"GET")}));
