"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.View = exports.Controller = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/widgets/render");

var dependency_2 = require("@beyond-js/kernel/styles");

var dependency_3 = require("@beyond-js/react-widgets/page");

var dependency_4 = require("react");

const {
  Bundle: __Bundle,
  externals
} = dependency_0;

const __pkg = new __Bundle({
  "module": "@beyond-examples/ssr/home",
  "bundle": "widget"
}).package();

;
externals.register(new Map([["react", dependency_4]]));
brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "home-page",
  "id": "@beyond-examples/ssr/home",
  "is": "page",
  "route": "/"
}]);
brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr/home');
const ims = new Map();
/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 3638196390,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Controller = void 0;

    var _page = require("@beyond-js/react-widgets/page");

    var _views = require("./views");
    /*bundle*/


    class Controller extends _page.PageReactWidgetController {
      get Widget() {
        return _views.View;
      }

    }

    exports.Controller = Controller;
  }
});
/*****************************
INTERNAL MODULE: ./views/index
*****************************/

ims.set('./views/index', {
  hash: 3278817643,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.View = View;

    var React = require("react");
    /*bundle*/


    function View() {
      return React.createElement("div", {
        className: "page__container"
      }, React.createElement("h1", null, "My first page using ", React.createElement("span", {
        className: "beyond"
      }, "BeyondJS"), "!"));
    }
  }
});
__pkg.exports.descriptor = [{
  "im": "./controller",
  "from": "Controller",
  "name": "Controller"
}, {
  "im": "./views/index",
  "from": "View",
  "name": "View"
}];
let Controller, View; // Module exports

exports.View = View;
exports.Controller = Controller;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Controller') && (exports.Controller = Controller = require ? require('./controller').Controller : value);
  (require || prop === 'View') && (exports.View = View = require ? require('./views/index').View : value);
};

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7O0lBQ0E7SUFFTzs7O0lBQVUsTUFDWEEsVUFEVyxTQUNRQywrQkFEUixDQUNpQztNQUNwQyxJQUFOQyxNQUFNO1FBQ04sT0FBT0MsV0FBUDtNQUNIOztJQUg2Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0psRDtJQUVPOzs7SUFBVSxTQUNSQSxJQURRLEdBQ0o7TUFDVCxPQUNJQztRQUFLQyxTQUFTLEVBQUM7TUFBZkQsR0FDSUEsd0RBQXdCQTtRQUFNQyxTQUFTLEVBQUM7TUFBaEJELEdBQXdCLFVBQXhCQSxDQUF4QkEsTUFESkEsQ0FESjtJQUtIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJWaWV3IiwiUmVhY3QiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IkU6XFx3b3Jrc3BhY2VcXGJleW9uZFxcc2FtcGxlcy10ZXN0c1xcc3NyLyIsInNvdXJjZXMiOlsic3NyL21vZHVsZXMvaG9tZS90cy9jb250cm9sbGVyLnRzIiwic3NyL21vZHVsZXMvaG9tZS90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==