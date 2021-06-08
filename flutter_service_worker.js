'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "36456bfb752fa4e0123d1071d22b49e9",
".git/config": "68e3682c86bf10b8ddfdf5ce1afda101",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "fd842a7c2ec1eb2f7056d1c72ac13553",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "390f01223f81c0012396da2430d894ed",
".git/logs/refs/heads/master": "390f01223f81c0012396da2430d894ed",
".git/logs/refs/remotes/origin/master": "63335356435ffa2fe778073763bfe215",
".git/objects/07/247c9e3fa9f2e1e884fa30eed38dad32e52146": "638cab42a4675aee978a3284b46d2fd2",
".git/objects/0a/4eec5170ba2359fd39e31118187e7ab49acdaf": "640deccdd215f803905eca4e9e03c4f5",
".git/objects/0a/c099c60e4b0cf5c3a98ad5e8e1d941ac3384ec": "694fb8cc7e6765f98f7e0d4f327fcbc2",
".git/objects/0a/e04b2310d31aac53be11aab14029c27813719f": "bcca70035afa36eefea3a3472fc30902",
".git/objects/0b/4e1e6374de74898d9e1c3d39533c00859bf299": "628ac15c134c9b3c8bff838e9a91f7eb",
".git/objects/10/9fd227963e33a46f1a07907cc057010bc935e1": "02164429dbe8cd6190a89b173ecd382b",
".git/objects/10/bd0263743c20f800db2ebbdfc7c07360873ca9": "a915c27f1d4aaf610bfd9cdeb7372001",
".git/objects/15/cbef3b2e95236d5d0c3fb179cf724011f63b2d": "458e3e8c35fb438b5ebd9c3d59fa5251",
".git/objects/18/5e3c3064e8a43042e9f96d7ac1336d7634c24f": "d268bc220a5d822f9bf56853aec79aa5",
".git/objects/1a/0f2ad136b214b28c629069b61577391b03e771": "a7467fd58b562cfe6c92f406072b5cff",
".git/objects/1b/1b9d2be2b25e987a003e268f7d6bbce5fd39b0": "b3a301feba4e13ae2f65c66bbba07559",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/7f0852cb38601cb43c26a95f8b0d77e8e2c6ab": "18020ae4db02e3a6a068bae2efcee1ee",
".git/objects/22/d520dce0d43d0fa892f2937c437e36a1b6651d": "c81c04920d26ad78fc4a897d2b9dffb1",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/23/81893cb93f75478c4723d7c2a70eb7f3d52a20": "cc201dd57e5debbadd22747b1d0e6b7e",
".git/objects/24/043a3803e7650fc08a10dbe3a7da0b2c3727a5": "516acd2c0a75caf89c2e4e7504746a68",
".git/objects/26/cf4d59d91c0692de059fd202190281bdb69a22": "ed5a399da4433940101a89ecb25e833f",
".git/objects/29/3a29ff9e9cc92e89c55607d834ffefd098c383": "1db5c8012ecf096b043405a020ecaa48",
".git/objects/2a/d33f0031eedad62d8456cad105f0d131be0994": "c63aa7091101141f9b15b1eb35eb420b",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/3c/930b1d8848684690b077949442ef7f80fcba3c": "2d169f1ffec5fea7927d2e1c6251f0b9",
".git/objects/3f/f99fc4a9fd40373673012ec01989fa4c2d4711": "8d7aa19f102fc20aaeef4cf1bafdf405",
".git/objects/41/a20bed971325972b4f3a5f81529f4085cf7ada": "f26c0a978760e3f31241c15d1cc80f6a",
".git/objects/42/925e81832d4882308ff8f7f31dbf85eb7ebe59": "4c047b19952c71653b5cc62c227938b2",
".git/objects/43/0550168222b92328444c5416aa79c59503989e": "df344d25304c654826c0b85463e61e37",
".git/objects/43/46e2d9e671bf7a5a3287a3ddacf5f915a35d4f": "41b3d0d418188d18de1ec7daf79f5299",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/48/0edf794ac04f4f5d3518f904018cc636af5f25": "52cda3a5ecc618f470aa27fa63b87b94",
".git/objects/49/133379e7f803c60e4360a97bb3b2fcc041475c": "baa6f01df91de3b5ac0ab28b72385653",
".git/objects/49/6432c34a03eb26ec03b1d9e491956672727a42": "c288d327282cd463e60ed47cf4115cc4",
".git/objects/4b/07c9c2dc6089defaeeed4cd43c680d0abead66": "9d4166c6466db79e20ce72fd17968d56",
".git/objects/4c/57a4c8755373a911bfc4296483ed3f137dca6a": "adb5cff767672600c9b821d24845bf97",
".git/objects/4d/6b38748ae97aa7c4ce8a1f9b7448d023026b94": "a3b5a8ab1b44aa1569315bfb14faa188",
".git/objects/4e/2fa9fd41aa7c072106259193c4f9fc6d9265e4": "b6c499dfcfb1bbf8a1be199ec07a7137",
".git/objects/4f/da383077f5eec11cb0c51d45271e9678a16eac": "a13eb0abef82677d326e8bf6c57bbbfe",
".git/objects/5a/1001b7bbc55c38ae1e01602cd067b35f39b0e6": "f8fd3185db4d2cb32a755cda28ba4586",
".git/objects/60/627a91c3ce142b74219d0a2829d4d656678f29": "10d01c1d44d3d43eb13fb3561ef5cc07",
".git/objects/67/9f090246932806e4a7a83879709e0839e565b8": "25bd5804acfa59f9a2704fdddb1fc045",
".git/objects/68/0279bdc8b34b848f73d6d352ecf6cd54a7fe6f": "f8e719951d37a22377d405aa185950ae",
".git/objects/69/e0dbc9686ad5586bb49bda18e54b95d28ec766": "f302cd81f607fd5ea809b40ec97f378f",
".git/objects/6a/854585bc5e5ea38a17d7ac401b025ba14f4f2a": "6be458b803a783ca24db21b3c3ea1708",
".git/objects/76/ad66022749972f21b62b230890136c379731e4": "df113d397252b5e705efcfb13973398d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/d819fc8cd803b94a90788b56157274c68d21a4": "538e640f702305b3d17e2a6b7302d128",
".git/objects/7c/881abcc82ad5fc26da9cb5c508f76b38d363d2": "b6d4ab4dac2e462e897ac9fed912f54c",
".git/objects/7f/116fcbd47ac7d38bc64e5355b2282140db4c05": "407ccf6fdf65e19f583abe500518e304",
".git/objects/83/56336c2e6f3fda64d005d509828d9d067837cd": "55ae48c27c16229dc76432615ba59af0",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/024b3df0147f31816272b22e40599891d5960c": "5f3c7281aa6e7ed6599f954ffdf382a1",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/2fc757efd026c687da68b3d9792a9ae935a127": "32c826d141a3ff52a7872dabe66f1887",
".git/objects/90/4c7871d0f19342243d43d22cc0075de6474476": "bc52a006d16fd9a5f0ad871e95066540",
".git/objects/91/d4f0597e924f2960bca1b441f9415ffec812ea": "a6faedbe57edb50caf3a19295d1fe507",
".git/objects/93/2df4ae2c3cb34a716e21b478590eecaa2ae295": "e299ba2e68d97d0f661cc8ddccf9787a",
".git/objects/98/91a68228d9ccb07ac946b250f2d1d4f5886498": "a915d16cd82413abfac715ed629a914b",
".git/objects/9c/9975a92915f3829f4456253a5fc2937247c5cb": "f475b04c4e49197c2cfdd2c30e16161d",
".git/objects/9d/0a70b4212a08eb5d9494a19d9150e8ecd86ad9": "0c9d2b44d287fe64b76c7b045654c0ae",
".git/objects/9e/9e3a0cb0cf629f550fbe50663e30bb07272518": "c92fba5f2591bd021dd5a7cfff99a589",
".git/objects/9f/eb1981565122c29dc621119240c2a7ce569716": "d093ef9106dc522231cd442f33a12ecc",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/2da5cf0cbbd66f1580eb0653830f4a5909f645": "6c983d7bf3d01e9e60e28cd7561b7626",
".git/objects/a4/8ff2e06f7a61f60ec488cf11a166b520516700": "f950028627ee1c4be35216de44eed470",
".git/objects/a4/f7cc56b8893ddab6c95776c2035b1025097ca6": "2b6d0f190cdd03713ad0f340170e9020",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/3f58055cd4743505fa7290e8ee11acdd5a5e49": "e54f8c31b9afdee3bc650ddc0e9be4d7",
".git/objects/b5/ee1e3e28d63e4b405cede56f6e5cd6a36fe48c": "8ea08a2ce2fb4399b5572e72c519190e",
".git/objects/b6/94be1bc7c3847903ecebf796508f3f631d4b86": "1d8524d513a8cc4efb59d79dc86c5134",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/755495cc9ee947178051d1cec40a16a01cf0a0": "552724398f78b1ea584450f28b3ee28e",
".git/objects/bb/dd553dfbbdbb17afaba2224b225fdb59e2d031": "74fa3972c8dbafddb15ef2c5a5e156ba",
".git/objects/bc/4fc17849ffa3cd2a32a8a7346dbfe58bdcd5dc": "9972d8caad84c11d6ecea217a5dd7895",
".git/objects/c2/a728121cc94290e0e8dbde82b1e5125d5465a6": "f2989bf1405fb660305820683b8ee53c",
".git/objects/c3/548053fe749d2f0cb2bbdb18a63cbb055fa968": "0643ea7c27fe67387b6680c45d42ae3b",
".git/objects/c9/54c31ff24bb5a5cd9375921fd47a17bfb30258": "1106688cd9e17d43c1012cfde5488dd4",
".git/objects/c9/5d3e8bc4649b543309d0479bd1cbfcb952273a": "3fd9187fdb8656d2254c2e7d8ee3823e",
".git/objects/cc/9043b180c64a0b492d744e72029af2f86bfb6b": "1cfc560ded17753a6c72d37e0703fb20",
".git/objects/d0/15b42c92d5405b7e86653d98fbc721052f783e": "fe5b52a7f0ab85fba78125960e9e7f0b",
".git/objects/d0/4295617a602c8a0ed3cc81c015c11b3179d1d6": "8d438f53b3e17ecbfa1b9e6bd3252c61",
".git/objects/d2/34efb7ae71a4d88bc2a29c90c04abe1dbbada7": "a72dd2058de3c586ca16fa4395c511d2",
".git/objects/d4/a196b24d06375bba8264d0f1172e82fc61d431": "6724118757a9d201c9171b25a7ba8394",
".git/objects/d8/b9a2e3eff34f9e78c2e89dd2e438c82592eeeb": "8bf8a82e926fd66ee764a4194534f8da",
".git/objects/d9/47aa9e6ea365202f133c4a5bd0a4f69f7455de": "061c09966acbcf0642a85503817b2302",
".git/objects/dd/43db65edcbfd810943d4270e20d3703447c26d": "b41f2c4cbaf5f3425cc1445d4e1e098e",
".git/objects/dd/dfed74b8117367bf07ab5049a8ff481c9fcce2": "bad075f78296b10a07128eceef0d27fa",
".git/objects/e0/c319166c5c3cb5c3d7997ff3f6efb9fab5c74a": "1a42454d349f5e8a0848af9005f03ecb",
".git/objects/e3/a7fbb0cfdffbad27af9710d42b96e3e6533962": "70bb7db6e327587f949013f7ff1c5815",
".git/objects/e5/942a10bd551014a65806a0b74c242295be3aa7": "52fdfb6db6dc6577aca21c4579ec7aa7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/701d1a15648f2aa2497b0414247fc457353c7e": "006f2e0a1aa48724aeaa900072054ed8",
".git/objects/e9/9114404769009c90e10b0384b236c3fdcfcda8": "0a9d05ae6d3dab035d86e5b53818bf3e",
".git/objects/ec/2749742807db4ac0f4674ef2ee20bd2f56555d": "ac5e9127c58153863c2d2b53e4a8e49a",
".git/objects/f1/7d5a5014e4ae9c7d9d5f8de26fec398f65e44c": "e8f04124372d550cb6c2b42e572f972f",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f6/61c1353356fa381813c3254fdab4f6a026e9ab": "a9348f25f7a350573d0a12bfa50e8cfe",
".git/objects/fb/5011c0b67c6be82d605f014a42e09706dc048f": "77296a796988da4fa30e493b4e2cdaff",
".git/objects/fd/1bb21a2194763c2356b452660768c4d5e70a4b": "93ac84b66cf2990d4fbfaf55bea2d485",
".git/objects/fe/360bf6e89b0a272b9d63556820722d761a64a4": "630931e670ba19aaacd635c7f84f544a",
".git/objects/ff/c18c98eab085cead4b8deaee147112e469793a": "6ad1d069c2fdf44f37d2fc4d8f55389b",
".git/refs/heads/master": "a1f72e0a9f2be19de981484e9f7f3efa",
".git/refs/remotes/origin/master": "a1f72e0a9f2be19de981484e9f7f3efa",
"assets/AssetManifest.json": "c5b8af2079a6cd4b823eb75f618d6f76",
"assets/assets/images/aboutpicture.png": "1840c326d18cc02255f2c30dcfd25dd3",
"assets/assets/images/aboutpicture2.png": "d90abd55de288ebb7ed3ae71b1d4139e",
"assets/assets/images/design1.png": "bf0a11a656d3dc02e8407ad8e56cf38a",
"assets/assets/images/design2.jpg": "bc4b5398f0b801ad251839b1d494a46b",
"assets/assets/images/design3.png": "789e0da9b22b0e11d87c377ddc329b7a",
"assets/assets/images/design4.png": "aaea226bbeeb83d9ce286b70f384bcc6",
"assets/assets/svgs/1.svg": "dc8eecc271181286acf303e2e597c496",
"assets/assets/svgs/2.svg": "18f34656ddbb01b85eec62b077c5ea81",
"assets/assets/svgs/android.svg": "9117f2753c417cea17e254d022c49735",
"assets/assets/svgs/experience.svg": "b5543281ae55db31bbfbde2ab095f50c",
"assets/assets/svgs/flutter.svg": "5779bd970e8d46fe84a75a7b77bb4fd9",
"assets/assets/svgs/illustrator.svg": "599606063f2dc5510ba06c2bee59256d",
"assets/assets/svgs/python.svg": "b26f61bebe0ee79ab90b0f2735d00316",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "abb2fad9baf9cd3e5a9a65057030075e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00bb2b684be61e89d1bc7d75dee30b58",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "4b6a9b7c20913279a3ad3dd9c96e155b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dffd9504fcb1894620fa41c700172994",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "4ce46ce8a2089738afeb538dbbeb0d77",
"/": "4ce46ce8a2089738afeb538dbbeb0d77",
"main.dart.js": "6c4fb55033bb525bb4d5293766ed71bc",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
