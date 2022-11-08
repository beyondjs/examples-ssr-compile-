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
    "vspecifier": "@beyond-examples/ssr@0.0.1/entries-ssr"
  },
  "type": "widget"
}).package();

;

__pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['@beyond-js/widgets/controller', dependency_3], ['@beyond-examples/ssr/store-entries', dependency_4], ['react', dependency_5], ['@beyond-js/kernel/styles', dependency_6]]);

brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "entries-ssr-page",
  "vspecifier": "@beyond-examples/ssr@0.0.1/entries-ssr",
  "is": "page",
  "render": {
    "csr": false,
    "ssr": true
  },
  "route": "/entries-ssr"
}]);
brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/entries-ssr');
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
  hash: 463643727,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = Widget;

    var React = require("react");

    const {
      useState
    } = React;
    let autoincrement = 0;

    function Widget({
      store: companies
    }) {
      const [, change] = useState(autoincrement++);
      companies.on('change', () => change(autoincrement++));
      if (!companies?.loaded) return React.createElement("div", null, "...");
      const list = [...companies.value.values()].map(({
        id,
        name
      }) => React.createElement("div", {
        key: id
      }, id, ": ", name));
      return React.createElement("div", null, list);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTs7SUFFQTs7SUFDQTtJQUVPOzs7SUFBVSxNQUNYQSxVQURXLFNBQ1FDLCtCQURSLENBQ2lDO01BQ3BDLElBQU5DLE1BQU07UUFDTixPQUFPQyxjQUFQO01BQ0g7O01BRURDLFdBQVc7UUFDUCxPQUFPLElBQUlDLG1CQUFKLEVBQVA7TUFDSDs7SUFQNkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNObEQ7O0lBR0EsTUFBTTtNQUFDQztJQUFELElBQWFDLEtBQW5CO0lBTUEsSUFBSUMsYUFBYSxHQUFHLENBQXBCOztJQUVjLFNBQVVOLE1BQVYsQ0FBaUI7TUFBQ08sS0FBSyxFQUFFQztJQUFSLENBQWpCLEVBQTJDO01BQ3JELE1BQU0sR0FBR0MsTUFBSCxJQUFhTCxRQUFRLENBQUNFLGFBQWEsRUFBZCxDQUEzQjtNQUNBRSxTQUFTLENBQUNFLEVBQVZGLENBQWEsUUFBYkEsRUFBdUIsTUFBTUMsTUFBTSxDQUFDSCxhQUFhLEVBQWQsQ0FBbkNFO01BRUEsSUFBSSxDQUFDQSxTQUFTLEVBQUVHLE1BQWhCLEVBQXdCLE9BQU9OLHVDQUFQO01BRXhCLE1BQU1PLElBQUksR0FBRyxDQUFDLEdBQUdKLFNBQVMsQ0FBQ0ssS0FBVkwsQ0FBZ0JNLE1BQWhCTixFQUFKLEVBQThCTyxHQUE5QixDQUFrQyxDQUFDO1FBQUNDLEVBQUQ7UUFBS0M7TUFBTCxDQUFELEtBQWdCWjtRQUFLYSxHQUFHLEVBQUVGO01BQVZYLEdBQWVXLEVBQWZYLFFBQXFCWSxJQUFyQlosQ0FBbEQsQ0FBYjtNQUVBLE9BQ0lBLGlDQUFNTyxJQUFOUCxDQURKO0lBR0giLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiUGFnZVJlYWN0V2lkZ2V0Q29udHJvbGxlciIsIldpZGdldCIsIlBhZ2UiLCJjcmVhdGVTdG9yZSIsIlN0b3JlIiwidXNlU3RhdGUiLCJSZWFjdCIsImF1dG9pbmNyZW1lbnQiLCJzdG9yZSIsImNvbXBhbmllcyIsImNoYW5nZSIsIm9uIiwibG9hZGVkIiwibGlzdCIsInZhbHVlIiwidmFsdWVzIiwibWFwIiwiaWQiLCJuYW1lIiwia2V5Il0sInNvdXJjZVJvb3QiOiJFOlxcd29ya3NwYWNlXFxiZXlvbmQtcHJveWVjdHNcXHNhbXBsZXMtdGVzdHNcXHNzci8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9zc3Ivd2lkZ2V0L3RzL2NvbnRyb2xsZXIudHMiLCJwcm9qZWN0L21vZHVsZXMvc3NyL3dpZGdldC90cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19