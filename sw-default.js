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
    "url": "favicon.ico",
    "revision": "b9aa7c338693424aae99599bec875b5f"
  },
  {
    "url": "index.html",
    "revision": "ef4f7adda1c93a38fcb536b5de33cd2a"
  },
  {
    "url": "inline.8d79ede6a680a0ddd34d.bundle.js",
    "revision": "ae7561f56c9a51dea6ce615aadfc167f"
  },
  {
    "url": "main.4ca83e1f140684b108f4.bundle.js",
    "revision": "a15c5025c47f107b1fe0dfcc5dd17026"
  },
  {
    "url": "polyfills.35726d60cdf25fecc5f1.bundle.js",
    "revision": "a1a42d9eb5149e7037b56e5b0ac3d08e"
  },
  {
    "url": "vendor.4ec6f75eb1fd6ed6bd56.bundle.js",
    "revision": "bb919ecba05d32df9d8d92586eedcb98"
  },
  {
    "url": "workbox-sw.prod.v2.1.2.js.map",
    "revision": "8e170beaf8b748367396e6039c808c74"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
