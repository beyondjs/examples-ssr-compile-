"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.Controller = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/widgets/render");

var dependency_2 = require("@beyond-js/react-widgets/page");

var dependency_3 = require("@beyond-js/widgets/controller");

var dependency_4 = require("@beyond-examples/ssr/store-entries");

var dependency_5 = require("react");

var dependency_6 = require("@beyond-js/kernel/styles");

const {
  Bundle: __Bundle,
  externals
} = dependency_0;

const __pkg = new __Bundle({
  "module": "@beyond-examples/ssr/entries-ssr",
  "bundle": "widget"
}).package();

;
externals.register(new Map([["react", dependency_5]]));

__pkg.dependencies.update(new Set(["@beyond-examples/ssr/store-entries"]));

brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "entries-ssr-page",
  "id": "@beyond-examples/ssr/entries-ssr",
  "is": "page",
  "route": "/entries-ssr"
}]);
brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr/entries-ssr');
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

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOztJQUVBOztJQUNBO0lBRU87OztJQUFVLE1BQ1hBLFVBRFcsU0FDUUMsK0JBRFIsQ0FDaUM7TUFDcEMsSUFBTkMsTUFBTTtRQUNOLE9BQU9DLGNBQVA7TUFDSDs7TUFFREMsV0FBVztRQUNQLE9BQU8sSUFBSUMsbUJBQUosRUFBUDtNQUNIOztJQVA2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ05sRDs7SUFHQSxNQUFNO01BQUNDO0lBQUQsSUFBYUMsS0FBbkI7SUFNQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7O0lBRWMsU0FBVU4sTUFBVixDQUFpQjtNQUFDTyxLQUFLLEVBQUVDO0lBQVIsQ0FBakIsRUFBMkM7TUFDckQsTUFBTSxHQUFHQyxNQUFILElBQWFMLFFBQVEsQ0FBQ0UsYUFBYSxFQUFkLENBQTNCO01BQ0FFLFNBQVMsQ0FBQ0UsRUFBVkYsQ0FBYSxRQUFiQSxFQUF1QixNQUFNQyxNQUFNLENBQUNILGFBQWEsRUFBZCxDQUFuQ0U7TUFFQSxJQUFJLENBQUNBLFNBQVMsRUFBRUcsTUFBaEIsRUFBd0IsT0FBT04sdUNBQVA7TUFFeEIsTUFBTU8sSUFBSSxHQUFHLENBQUMsR0FBR0osU0FBUyxDQUFDSyxLQUFWTCxDQUFnQk0sTUFBaEJOLEVBQUosRUFBOEJPLEdBQTlCLENBQWtDLENBQUM7UUFBQ0MsRUFBRDtRQUFLQztNQUFMLENBQUQsS0FBZ0JaO1FBQUthLEdBQUcsRUFBRUY7TUFBVlgsR0FBZVcsRUFBZlgsUUFBcUJZLElBQXJCWixDQUFsRCxDQUFiO01BRUEsT0FDSUEsaUNBQU1PLElBQU5QLENBREo7SUFHSCIsIm5hbWVzIjpbIkNvbnRyb2xsZXIiLCJQYWdlUmVhY3RXaWRnZXRDb250cm9sbGVyIiwiV2lkZ2V0IiwiUGFnZSIsImNyZWF0ZVN0b3JlIiwiU3RvcmUiLCJ1c2VTdGF0ZSIsIlJlYWN0IiwiYXV0b2luY3JlbWVudCIsInN0b3JlIiwiY29tcGFuaWVzIiwiY2hhbmdlIiwib24iLCJsb2FkZWQiLCJsaXN0IiwidmFsdWUiLCJ2YWx1ZXMiLCJtYXAiLCJpZCIsIm5hbWUiLCJrZXkiXSwic291cmNlUm9vdCI6IkU6XFx3b3Jrc3BhY2VcXGJleW9uZFxcc2FtcGxlcy10ZXN0c1xcc3NyLyIsInNvdXJjZXMiOlsic3NyL21vZHVsZXMvc3NyL3dpZGdldC90cy9jb250cm9sbGVyLnRzIiwic3NyL21vZHVsZXMvc3NyL3dpZGdldC90cy9wYWdlLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6W251bGwsbnVsbF19