"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Controller = void 0;

var dependency_0 = require("@beyond-js/widgets/render");

var dependency_1 = require("@beyond-js/kernel/bundle");

var dependency_2 = require("@beyond-js/react-widgets/page");

var dependency_3 = require("@beyond-js/widgets/controller");

var dependency_4 = require("@beyond-examples/ssr/store-entries");

var dependency_5 = require("react");

var dependency_6 = require("@beyond-js/kernel/styles");

const {
  Bundle: __Bundle
} = dependency_1;

const __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-examples/ssr@0.0.1/csr-test"
  },
  "type": "widget"
}).package();

;

__pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-examples/ssr/store-entries', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);

brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "csr-page",
  "vspecifier": "@beyond-examples/ssr@0.0.1/csr-test",
  "is": "page",
  "route": "/csr-page"
}]);
brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/csr-test');
const ims = new Map();
/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 2811123299,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Controller = void 0;

    var _page = require("@beyond-js/react-widgets/page");

    var _storeEntries = require("@beyond-examples/ssr/store-entries");

    var _page2 = require("./page");
    /*bundle*/


    class Controller extends _page.PageReactWidgetController {
      get Widget() {
        return _page2.default;
      }

      createStore() {
        return new _storeEntries.Store();
      }

    }

    exports.Controller = Controller;
  }
});
/**********************
INTERNAL MODULE: ./page
**********************/

ims.set('./page', {
  hash: 2765114758,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = Widget;

    var React = require("react");

    let autoincrement = 0;
    const {
      useState
    } = React;

    function Widget({
      store
    }) {
      console.log(1, store);
      const [, change] = useState(autoincrement++);
      store.on('change', () => change(autoincrement++));
      let output;

      if (!store.loaded) {
        output = React.createElement("div", null, "PRELOAD...");
      } else {
        const list = [...store.value.values()].map(({
          id,
          name
        }) => React.createElement("div", {
          key: id
        }, id, ": ", name));
        output = React.createElement("section", null, "Countries ", React.createElement("div", null, list));
      }

      return React.createElement(React.Fragment, null, React.createElement("h2", null, "CSR PAGE"), output);
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "Controller",
  "name": "Controller"
}];
let Controller; // Module exports

exports.Controller = Controller;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
};

const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOztJQUVBOztJQUNBO0lBRU87OztJQUFVLE1BQ1hBLFVBRFcsU0FDUUMsK0JBRFIsQ0FDaUM7TUFDcEMsSUFBTkMsTUFBTTtRQUNOLE9BQU9DLGNBQVA7TUFDSDs7TUFFREMsV0FBVztRQUNQLE9BQU8sSUFBSUMsbUJBQUosRUFBUDtNQUNIOztJQVA2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ05sRDs7SUFHQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7SUFDQSxNQUFNO01BQUNDO0lBQUQsSUFBYUMsS0FBbkI7O0lBTWMsU0FBVU4sTUFBVixDQUFpQjtNQUFDTztJQUFELENBQWpCLEVBQWdDO01BRTFDQyxPQUFPLENBQUNDLEdBQVJELENBQVksQ0FBWkEsRUFBZUQsS0FBZkM7TUFFQSxNQUFNLEdBQUdFLE1BQUgsSUFBYUwsUUFBUSxDQUFDRCxhQUFhLEVBQWQsQ0FBM0I7TUFDQUcsS0FBSyxDQUFDSSxFQUFOSixDQUFTLFFBQVRBLEVBQW1CLE1BQU1HLE1BQU0sQ0FBQ04sYUFBYSxFQUFkLENBQS9CRztNQUVBLElBQUlLLE1BQUo7O01BQ0EsSUFBSSxDQUFDTCxLQUFLLENBQUNNLE1BQVgsRUFBbUI7UUFDZkQsTUFBTSxHQUFHTiw4Q0FBVE07TUFESixPQUVPO1FBQ0gsTUFBTUUsSUFBSSxHQUFHLENBQUMsR0FBR1AsS0FBSyxDQUFDUSxLQUFOUixDQUFZUyxNQUFaVCxFQUFKLEVBQTBCVSxHQUExQixDQUE4QixDQUFDO1VBQUNDLEVBQUQ7VUFBS0M7UUFBTCxDQUFELEtBQWdCYjtVQUFLYyxHQUFHLEVBQUVGO1FBQVZaLEdBQWVZLEVBQWZaLFFBQXFCYSxJQUFyQmIsQ0FBOUMsQ0FBYjtRQUNBTSxNQUFNLEdBQUdOLG1EQUFtQkEsaUNBQU1RLElBQU5SLENBQW5CQSxDQUFUTTtNQUNIOztNQUVELE9BQ0lOLDBDQUNJQSwyQ0FESkEsRUFFS00sTUFGTE4sQ0FESjtJQU1IIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwiY3JlYXRlU3RvcmUiLCJTdG9yZSIsImF1dG9pbmNyZW1lbnQiLCJ1c2VTdGF0ZSIsIlJlYWN0Iiwic3RvcmUiLCJjb25zb2xlIiwibG9nIiwiY2hhbmdlIiwib24iLCJvdXRwdXQiLCJsb2FkZWQiLCJsaXN0IiwidmFsdWUiLCJ2YWx1ZXMiLCJtYXAiLCJpZCIsIm5hbWUiLCJrZXkiXSwic291cmNlUm9vdCI6IkU6XFx3b3Jrc3BhY2VcXGJleW9uZC1wcm95ZWN0c1xcc2FtcGxlcy10ZXN0c1xcc3NyLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2Nzci93aWRnZXQvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9jc3Ivd2lkZ2V0L3RzL3BhZ2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbbnVsbCxudWxsXX0=