'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "643d7810d4ebb5f7f33f0a7ae867be61",
".git/config": "21ab2257534098f2010c697500634fc1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "edef53dabfa5c6696c9d0edde407b28b",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fa16d4377edcea2770171b21374448e5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bae89f149ea44ee0435eef8963194dee",
".git/logs/refs/heads/main": "bae89f149ea44ee0435eef8963194dee",
".git/logs/refs/remotes/origin/main": "6ca1c99bb755a3e80401f68dd945369d",
".git/objects/00/a2834ed314e0821de1e7faac5445cd007088ca": "d3323ac32b09d2854669a8b98e322834",
".git/objects/02/a25b9f2d8ede7f2454f185c451529d92233cfa": "a9b5e967e0bb3ccadf98e6840ca21981",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/07/37145d28332d844d8b4ba317300b9fe701920b": "c39cc64816e3075773aa1716e70eeee6",
".git/objects/10/404014fbd6ef0a79a059fc1627e09e1086553a": "7feb1317f19fa0e82b8b3f5845d2cc15",
".git/objects/14/aea04b879bd0b074837141c45a01b0f5a46d99": "4a99409217edd210869c0560ad521fcc",
".git/objects/18/6f8ba3506b99dd91d79e890496b294cc407b33": "a6f135f8a9342427558a245e45362fc1",
".git/objects/1e/60a9fc421b6856b64c73c8d2d43b7b8ea8f9c1": "b270de1f80b9cbe1c21d24bf2e68e699",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/7580325eddc92c75335f7b933e5c513d19cc77": "9d353df8dfce9dec030bab482018776a",
".git/objects/32/ada8e00af109aebc591c3d1aea79e1ea976b92": "495d2af3676209dc09d6daa643f30e8d",
".git/objects/3a/86adb0e0ad0f4ef66fc5f7be8835c3ba67a6ca": "07f14d86ca5ebd65ec456f9aab2fcb8a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/ff07cbf25896ec20878089dd303ab03990f82c": "6a466c6c3373ef03de0b47139e8f57bc",
".git/objects/52/980eecaa6112f72a764c9ebbb16b3fc37557db": "548e64496fe1d03564986ccc2195f142",
".git/objects/53/f2e4a1c60ddeccee04abca489bedff4b3bb8c9": "aa7338791496641f36fc92b2f1e307a1",
".git/objects/55/a1256e2c4f248ad49a4bc36225a41b77294a0d": "303126dc0faa5dca10d621a0fb03a9e3",
".git/objects/56/8daa9aee346d466181739b349e19ea105b86b1": "5597ba0184d45ac8d4e8a1991aa24c28",
".git/objects/5a/c8776fde7446178388c4f1e5bf06830368e25f": "f8b6599af360e7aefc11db59a64f988e",
".git/objects/5f/7e5293f9e5bc24bdb71b1f5e9cccdde2d8da5e": "ec004429e03dde101b6e0ca82ac5428a",
".git/objects/60/85826a8a6c613e8bf5d34213027289428b3769": "feb0836455ded47c7ae5d056b03a13a8",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/63/fcf267bd79f84cc85815f5685725bd5d36da72": "04e174e368cd24f13acd2a9a91390be6",
".git/objects/6c/f36706c2f14c1016c239641999e3237468dadd": "a44b99b4274ae261700247f90ad11b76",
".git/objects/6d/5eac1fc512ea98cd275be63c152504efb57216": "52efb1ad08f9114a8a0aa4dc45676af7",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/71/6d954cd3ae8027c636d0d3d6e76d05e7a7053c": "b98a423a9ea68bc1d7d8f0a0f99ffe9b",
".git/objects/73/164d00a9303ea3dc4bc365ecba088e8d9cc9b0": "e16661a2b558dca81d46aff38aa58b9c",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/02c26eb8f816e899b06b1a1053827380adc4cc": "ad0e054aa0ccc81e5538950f4b027973",
".git/objects/78/787cb656fc0c2fdbf2903ec58b381a3d47acff": "38338f493147f4a8e2d24b8f5efe2cd4",
".git/objects/79/8266c076294ed81f3c19a72de61a498454dfeb": "08f90ba69af1c3d19ca96b72848a4cc0",
".git/objects/7a/3d5d5e2a9e910d1c493b7dc1463f4f66d8c7ff": "67d0ca969062d62992d5752cca78b455",
".git/objects/7c/69224caf784e6ea92ca296fca885260a45c2c0": "da85f23b62276f891078e327102b69de",
".git/objects/7c/ac02ff5a9337a61b6ce6392d270a5edcbfd659": "9e31c8c392b3755bcae3bbfad303619b",
".git/objects/7e/edafb6b517f3ca8ccfcf995bca1d5f4354c4ed": "95f74387819cb28a28e41721a8e0465a",
".git/objects/7e/f90fcc9c7f1b635a395dc351ca18ef1db70052": "9140fced098348d06b4d77f8290bf5d1",
".git/objects/82/63f31791264e0b2846f96dc3532b8a2e483ca3": "f7018e326894249ecba62e5e6e932de7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/eb32155335eefe969657abc4b29fad0a871238": "cff087d4ddebe151b8e4aab70254329f",
".git/objects/89/a4708c94c73df91224cfa64d3613a7ab9f8bbf": "113f95b433825cfa84d6ac140f903517",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/97/42d7999ab640d494e47baaa31cf27ad00968e1": "17d015b1b0f4dc5ec6e10e2a4dcd6319",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/98/682b8b40d63b95c0e1ab1e0a83d8caf6706095": "49ea97bbb6c950d0634f22c3c5521696",
".git/objects/9c/aa4404dbbee0d5bece684c94d17e49c27ce449": "ec87c28b1d438720de6305c32fe2fa51",
".git/objects/9f/9698853c81c04f26c85bf229bed48ecdf7658d": "0b5a9a5505f181e74dd05203fc2d8b06",
".git/objects/a4/15124de5a0ac513b021850c67534bdcb79c2c6": "91e74f2442cb7b8f2b677a2d15a69001",
".git/objects/a8/4d105938a88c0c4cbf6b112863fd315deff2ee": "d08e4d3471a6d02d2ddfa3f32669db4b",
".git/objects/a8/b52ae393aeef956536749897a973682521c7e5": "7040cc1afd5af76034eb604c6d05d0ae",
".git/objects/ae/5543b9cf097ed2ba81b21100b5405cc34d7093": "fb58875a72a00dc866d6479a05585fdf",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/0dedb472e965203e7d279a5b69e4f9e1d17ad1": "d53dbd647b4eb5f1e536aa51d6f940ac",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/d3ece1b3d86b512ddf7211a5df2db7b06e734c": "78d0764332a7788416b89bd3990e58a0",
".git/objects/bc/75c9b685f56d0b1ffafc641f5659954054e8cd": "9939dd074a0570522cc6907aea3020de",
".git/objects/bf/805e904030f49b9d06174ce856b0acd87c1b02": "dfb16ed1b1f412e22c02836a4a563ef0",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/b6aa6c842418b3ce122655e89d9d743a590de3": "c5d4f36eaa10e9e736ef7f9bf3fc57e4",
".git/objects/d1/e1627fef887d6423b972f8a06a919437a458f9": "5e513f648a99c7e8aef08cb8e55a38b9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/6884652ccdb4b31294ce84d255c2f2e5ba011d": "2a8f38431af4c74c2ed5e031c530b3ca",
".git/objects/e1/b19dbebcc38e50410adcb7b8b13f3bb3563481": "b9f9195a4dd1cc20835ae7903d988ef1",
".git/objects/e4/daed73a041169c4befe132ffcd0402d7702602": "082102ec411c0d1d9b3d28f4441d9aaf",
".git/objects/e5/0cfae91af938bad68babc41d2d10ee98210725": "0b7a177804124f91255228d0f32706ee",
".git/objects/e6/6a2b1c6662e65400947460cc38bb736556355b": "51f33a69b20660f0527ffc98db8f9ec4",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f7/384955ef94ca6967fc8065c0bcd4b9f7b48bd4": "eee2c21f3076660d83b3b9b0b66d67bd",
".git/objects/fd/889cb0df8b86655ba12f514fb8c7ca81eb3a05": "539038131942559647465a7c92dc82e8",
".git/ORIG_HEAD": "043d3d23f0165dfa888029deb3d89288",
".git/refs/heads/main": "043d3d23f0165dfa888029deb3d89288",
".git/refs/remotes/origin/main": "043d3d23f0165dfa888029deb3d89288",
"assets/AssetManifest.bin": "d58ba861f821b80de0e890adcd0acc9a",
"assets/AssetManifest.bin.json": "36ec8589f004f2f14bd4212ddc9ab58e",
"assets/AssetManifest.json": "5eb9104a358c52ffdfde8743a31b70d0",
"assets/assets/98alliance.apk": "d3ff4a841763ddd3bc21af3637222bc9",
"assets/assets/masjid.apk": "abdb8a503326e2fa196bc6f6d36d9a1c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e3560505673174c1dcf363e2db506765",
"assets/NOTICES": "8348f2f11e2783c9702845c2f435f011",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "b9efefe3839b643a7ed37156bd2774c0",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "a9bde8cba2fc2b9b92b497bf7e6cca32",
"/": "a9bde8cba2fc2b9b92b497bf7e6cca32",
"main.dart.js": "fb7c03c6f3bfcb64e661582f07517244",
"manifest.json": "dd2e0c009dfdc9c24c918d0b71f281a8",
"version.json": "ab69c44d6c0b45356d1a8cf83716f533"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
