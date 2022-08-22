"use strict";

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/kernel/transversals");

var dependency_2 = require("@beyond-js/ssr/listen");

var dependency_3 = require("@beyond-js/kernel/routing");

const {
  Transversal
} = brequire('@beyond-js/kernel/transversals');
const transversal = new Transversal('start', '');
/*************
BUNDLE: WIDGET
*************/

const {
  widgets
} = brequire('@beyond-js/widgets/render');
widgets.register([{
  "name": "home-page",
  "id": "@beyond-examples/ssr/home",
  "is": "page",
  "route": "/"
}, {
  "name": "entries-ssr-page",
  "id": "@beyond-examples/ssr/entries-ssr",
  "is": "page",
  "render": {
    "ssr": true
  },
  "route": "/entries-ssr"
}]);
const bundles = new Map();
/***********************
MODULE: unnamed/init-ssr
***********************/

bundles.set({
  "module": "@beyond-examples/ssr/unnamed/init-ssr",
  "bundle": "start"
}, function (ims, exports) {
  /***********************
  INTERNAL MODULE: ./start
  ***********************/
  ims.set('./start', {
    hash: 974679947,
    creator: function (require, exports) {
      "use strict";

      var _listen = require("@beyond-js/ssr/listen");

      (0, _listen.listen)();
    }
  });
});
/**********************
MODULE: unnamed/routing
**********************/

bundles.set({
  "module": "@beyond-examples/ssr/unnamed/routing",
  "bundle": "start"
}, function (ims, exports) {
  /*************************
  INTERNAL MODULE: ./routing
  *************************/
  ims.set('./routing', {
    hash: 3204864713,
    creator: function (require, exports) {
      "use strict";

      var _routing = require("@beyond-js/kernel/routing");

      _routing.routing.redirect = async function redirect(uri) {
        return uri.pathname;
      };

      _routing.routing.setup();
    }
  });
});
transversal.initialise(bundles);