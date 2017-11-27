importScripts('workbox-sw.prod.v2.1.2.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/rmp-font.eot",
    "revision": "8be0ad4beb9b44e981796f71432c73bd"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/rmp-font.svg",
    "revision": "3460b5e69b7c1bcba465a76087c3a558"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/rmp-font.ttf",
    "revision": "8194e4a1863e52da8fd780c2affa57ad"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/rmp-font.woff",
    "revision": "39a2d214becb3dca079fda49b7b84483"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/roboto-v15-latin-regular.eot",
    "revision": "9f916e330c478bbfa2a0dd6614042046"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/roboto-v15-latin-regular.svg",
    "revision": "3d3a53586bd78d1069ae4b89a3b9aa98"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/roboto-v15-latin-regular.ttf",
    "revision": "38861cba61c66739c1452c3a71e39852"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/roboto-v15-latin-regular.woff",
    "revision": "16e1d930cf13fb7a956372044b6d02d0"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/fonts/roboto-v15-latin-regular.woff2",
    "revision": "7e367be02cd17a96d513ab74846bafb3"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/360.less",
    "revision": "d35b5c7fb5ceda6dbdb011983e4ec042"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/ad-in-article-outstream.less",
    "revision": "d4cdaf4d901d00e33bff22dbaab55464"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/ads.less",
    "revision": "ab9293c19ff4df66dbef3279ccb71683"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/audio-only.less",
    "revision": "a4b832668678b0680ea380f26e1260c7"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/cast.less",
    "revision": "29e1951ed91a9843206fe49213bed5e8"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/cc.less",
    "revision": "276cb34cf9636017ae8d18547822b82c"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/chapters.less",
    "revision": "a8a5093fa1d5d7a1f32bc6b7b1a81df4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/colors.less",
    "revision": "ece3046865d5b4464381703ed42e0c33"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/core.less",
    "revision": "75ce6e6d47a833810bb567c4ba313bdc"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/dvr.less",
    "revision": "8d7d530866c48de033a8a6a91b79a008"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/icons.less",
    "revision": "a2de2744888d53b6eb652c4130a2c2c4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/mixins.less",
    "revision": "489567724425377ec267c478548d9bbb"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/playlist.less",
    "revision": "d39f6fe8ae937d5edfced8c1ab71eb01"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/related.less",
    "revision": "c562e1b346728e03f8d581c4f90e1c04"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/core-skin/rmp-ad.less",
    "revision": "461fb5e736a45f1c535ae8faa987c8e4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/s1/s1.less",
    "revision": "6362f3397ce04de073da5d989b8ba985"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/s2/s2.less",
    "revision": "a467b5c823bc81408cdb055be6bcebc6"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/s3/s3.less",
    "revision": "13b0a73f1552ae866e6e84d7e3e826fe"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/import-less/s4/s4.less",
    "revision": "23f91b41736031b9191419ab7b98ed84"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s1.css",
    "revision": "ec9689245558c7cf9016a8b48dea4775"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s1.less",
    "revision": "2646ac8228c71cead53d4dc716fe6865"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s1.min.css",
    "revision": "a2add75aa7001c8835196d68f02d6388"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s2.css",
    "revision": "8b6b86f0ef410f71fdef49d63f6decfc"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s2.less",
    "revision": "2220c70f3f9e66b25c138c9102f81126"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s2.min.css",
    "revision": "b884f65c955e090ef3f15aa8a85c381f"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s3.css",
    "revision": "ba2b8ac7ee3a0ed8e9d65dac69d1b5c4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s3.less",
    "revision": "aac59d1f70dae8e35731f183348465a3"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s3.min.css",
    "revision": "d5679e480cad0bf7a3e627029b17b6fa"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s4.css",
    "revision": "3f6447cb0b688270c6d67edc31e6709b"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s4.less",
    "revision": "d0c8d0656ec46ceb33ea811c105f1782"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/css/rmp-s4.min.css",
    "revision": "71110d984cadbc47248a6ae591ca6a83"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/dash/shaka-player.compiled.js",
    "revision": "5dbc75a38e4c375fb4ca59361924a22d"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/examples/example-dash.html",
    "revision": "ed396531ec054f52e9ff146214beb97e"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/examples/example-hls-cc-logo.html",
    "revision": "0092dee82d008aeb374136ffd0ddceaf"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/examples/example-html5-video-ads.html",
    "revision": "3a6133c7de00bb31ffc5f27120ba7d36"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/examples/example-live.html",
    "revision": "e8284eaf8a821249810b14b247c6f5de"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/flash/expressInstall.swf",
    "revision": "7b65fbfaec8b2955090389af60646e8b"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/flash/flashlsOSMF.swf",
    "revision": "9d431bb0909aeb4c6072cbb7fc307c75"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/flash/rmp.swf",
    "revision": "b21683cb43813ae6b0792a43a251366a"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/flash/swfobject.js",
    "revision": "90da84cb2043cc39114bfe24f4c7fbc5"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/hls/hls.js",
    "revision": "4bff936994baca058af604758e5762fd"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/hls/hls.min.js",
    "revision": "b3a90efdf194bcfd55bfbdcc7b05ff19"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/js/rmp.debug.js",
    "revision": "b3ea3f96e3fbc5116379f834b3b098ad"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/js/rmp.min.js",
    "revision": "0d63058ce487649756ebed14665605cf"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/rmp-vast/rmp-vast.js",
    "revision": "172bb050d53d1c188f7e7daade617acc"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/rmp-vast/rmp-vast.min.js",
    "revision": "e8de4bf023c9bc699dfb89839db50ec4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/three/three.js",
    "revision": "0a80a068396cdd727220151fed4a0ee2"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/three/three.min.js",
    "revision": "bddd3c70f6e94b2c969bb1e7f723bea4"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/vtt/vtt.debug.js",
    "revision": "66f336d9ab9817384acd616235f713e8"
  },
  {
    "url": "assets/radiantmediaplayer-4.5.13/vtt/vtt.min.js",
    "revision": "f0e4c44afc5bca21394860501306de93"
  },
  {
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "d491f7ca193127d6512391aa1ea83437"
  },
  {
    "url": "inline.6208ba4ecc21b9405da5.bundle.js",
    "revision": "5245f87d13fe00c21f3bfb4d99553eed"
  },
  {
    "url": "main.235c42bdec32558942e1.bundle.js",
    "revision": "bc39d42d7ce370259e5317a983b491b3"
  },
  {
    "url": "polyfills.35726d60cdf25fecc5f1.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "styles.d41d8cd98f00b204e980.bundle.css",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "vendor.ba01c387a5ff4ab951e1.bundle.js",
    "revision": "346ca0b70b73c5fd6c79d501a1db0c10"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
