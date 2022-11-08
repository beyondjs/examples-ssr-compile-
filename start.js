"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.__beyond_transversal = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/kernel/transversals");

var dependency_2 = require("@beyond-js/widgets/render");

var dependency_3 = require("@beyond-js/ssr/listen");

const {
  Transversal
} = brequire('@beyond-js/kernel/transversals');

const __beyond_transversal = new Transversal('start', '');

exports.__beyond_transversal = __beyond_transversal;

__beyond_transversal.dependencies.update([['@beyond-js/kernel/transversals', dependency_1], ['@beyond-js/widgets/render', dependency_2], ['@beyond-js/ssr/listen', dependency_3]]);
/*************
BUNDLE: WIDGET
*************/


const {
  widgets
} = brequire('@beyond-js/widgets/render');
widgets.register([{
  "name": "home-page",
  "vspecifier": "@beyond-examples/ssr@0.0.1/home",
  "is": "page",
  "route": "/"
}, {
  "name": "entries-ssr-page",
  "vspecifier": "@beyond-examples/ssr@0.0.1/entries-ssr",
  "is": "page",
  "render": {
    "csr": false,
    "ssr": true
  },
  "route": "/entries-ssr"
}]);
const bundles = [];
/************************************
MODULE: @beyond-examples/ssr/init-ssr
************************************/

bundles.push([{
  "module": {
    "vspecifier": "@beyond-examples/ssr@0.0.1/init-ssr"
  },
  "type": "start"
}, function (ims, exports) {
  /***********************
  INTERNAL MODULE: ./start
  ***********************/
  ims.set('./start', {
    hash: 3476199526,
    creator: function (require, exports) {
      "use strict";

      var _listen = require("@beyond-js/ssr/listen");

      const pkg = '@beyond-examples/ssr';
      const port = process.env.PORT;
      if (!port) new Error('no port specified');
      (0, _listen.listen)(pkg, port);
    }
  });
  return {
    dependencies: ['@beyond-js/ssr/listen']
  };
}]);

__beyond_transversal.initialise(bundles);