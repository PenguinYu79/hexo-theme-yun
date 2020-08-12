/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "dd77c8c15d77a4afeef7dad30ac08519"
  },
  {
    "url": "about.html",
    "revision": "bf9085d162182a2da8967f573e2c26a7"
  },
  {
    "url": "assets/css/0.styles.03d54a3d.css",
    "revision": "48f63bc9999b07e7c8ddd1a527cd263f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e01e715b.js",
    "revision": "8d3bd5018c2df6dc4208e8ffcfe7c0c2"
  },
  {
    "url": "assets/js/11.b5a1c8ae.js",
    "revision": "07db2f1177aef2fed1a5c511e70adfb5"
  },
  {
    "url": "assets/js/12.e143a2a8.js",
    "revision": "bb57067cdfdb151bf29302b1576ff985"
  },
  {
    "url": "assets/js/13.46d1ee80.js",
    "revision": "8f06cd2e56cba9445873e1005ab45013"
  },
  {
    "url": "assets/js/14.a1d6d8b5.js",
    "revision": "bc457c1e2c535a1619900aa235531da1"
  },
  {
    "url": "assets/js/15.8b5ce9d6.js",
    "revision": "979df655f35062b7b7e4a4730563147f"
  },
  {
    "url": "assets/js/16.b9a13676.js",
    "revision": "aaa87b501913cf3c85d91add352c25a2"
  },
  {
    "url": "assets/js/17.a34929ea.js",
    "revision": "271c1bf4db03274f85479f089e6d5737"
  },
  {
    "url": "assets/js/18.c09bab57.js",
    "revision": "cba400f0e979fc5817e30b1c5c34764a"
  },
  {
    "url": "assets/js/19.bb11039c.js",
    "revision": "b628562f4e97d7214889482762e32ef9"
  },
  {
    "url": "assets/js/2.f54036ce.js",
    "revision": "5faefb317fd5aed55559281934d48b8f"
  },
  {
    "url": "assets/js/20.92ad27bc.js",
    "revision": "0a6664afcec81aa45d5e74b459bbc73c"
  },
  {
    "url": "assets/js/21.da9d1920.js",
    "revision": "0fe8989100b21bd120c7046410ec9c10"
  },
  {
    "url": "assets/js/22.f965f926.js",
    "revision": "91dbfb5db90eddbf6bfc7c7c548b049e"
  },
  {
    "url": "assets/js/23.74cbd8e6.js",
    "revision": "00c38376d9c112d482f5017208c510c4"
  },
  {
    "url": "assets/js/24.233ab05c.js",
    "revision": "c8467897aceccc49d7355dcdc1a76b86"
  },
  {
    "url": "assets/js/25.1d5e01d7.js",
    "revision": "b0e3a6f56ec0e1b33d5fbbc0b0e8f9fe"
  },
  {
    "url": "assets/js/26.3babb27b.js",
    "revision": "a9ca5e82b5dafe353d5a1117af856e4b"
  },
  {
    "url": "assets/js/27.b083e58b.js",
    "revision": "fe1a1eaf2e5f5ba562b3be4afe8a3534"
  },
  {
    "url": "assets/js/3.bb121728.js",
    "revision": "1ba76477d44bf9c2cc160d8840f2506f"
  },
  {
    "url": "assets/js/4.ead37252.js",
    "revision": "b8c9e78403bf0c6be59a1d7e58043579"
  },
  {
    "url": "assets/js/5.cd069c5e.js",
    "revision": "0ba187f2ee57db2931fc864b5958665f"
  },
  {
    "url": "assets/js/6.ff832bdb.js",
    "revision": "2a6a1b7a4ede9558423a8a608b62ba3e"
  },
  {
    "url": "assets/js/7.7e31cc32.js",
    "revision": "9191d0227b6c7c55a50296c1df51c492"
  },
  {
    "url": "assets/js/8.55938e81.js",
    "revision": "4417099c1a4238e8600d2463bb824e3b"
  },
  {
    "url": "assets/js/9.d8180423.js",
    "revision": "24700ad8b668545992064f5762bcec0b"
  },
  {
    "url": "assets/js/app.bc254067.js",
    "revision": "4b6f164ae1a82adb70901ddd3058c397"
  },
  {
    "url": "demo.html",
    "revision": "0fd0b62c961c228f551639e63bcdbc1e"
  },
  {
    "url": "en/about.html",
    "revision": "f1bd2d035f943d304043e60941cc2713"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "66e935f03eee60d3f688a6ef4376a458"
  },
  {
    "url": "en/guide/config.html",
    "revision": "82bbad2bad3e7ae0abe12fb0543159f9"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "7eb88794b3ca55822de58680ab785682"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "6e1922ac74c82e06e9e781f861587577"
  },
  {
    "url": "en/guide/index.html",
    "revision": "fd08a6b88813bf7cc7f78d9c9b3846bd"
  },
  {
    "url": "en/guide/page.html",
    "revision": "1044cd2f0371993745a78f9908a34991"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "13aa6a8e7490f2f9cc8a103ca937b5fb"
  },
  {
    "url": "en/index.html",
    "revision": "e14ee362af54d8e3ac09d9d110189081"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "0ce8840039590389915ed85337f6ccd6"
  },
  {
    "url": "guide/config.html",
    "revision": "4043fd578d3fa4d0051095cb508d5211"
  },
  {
    "url": "guide/faq.html",
    "revision": "0fddd655c5f63fd91541921921ac5832"
  },
  {
    "url": "guide/icon.html",
    "revision": "af43444fc67104d30a17d1c59c962efa"
  },
  {
    "url": "guide/index.html",
    "revision": "fc2b1a13ab53d12348752d795a1f3bef"
  },
  {
    "url": "guide/migrate.html",
    "revision": "ec0bb023145d96825c517a1c6e542f95"
  },
  {
    "url": "guide/page.html",
    "revision": "95cab8b695e1f6f96f72d1cfcee1ce5a"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "ce07e850ce76590e19a4b8a4752d2a0f"
  },
  {
    "url": "index.html",
    "revision": "23b8b59e5810d4850905e523c14c9d86"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "yun.svg",
    "revision": "ebbd22f3cde555d95e5dec5d41ed8505"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
