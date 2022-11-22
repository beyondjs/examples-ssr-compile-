"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Controller = void 0;

var dependency_0 = require("@beyond-js/widgets/render");

var dependency_1 = require("@beyond-js/kernel/bundle");

var dependency_2 = require("@beyond-js/react-widgets/page");

var dependency_3 = require("react");

var dependency_4 = require("@beyond-js/kernel/styles");

const {
  Bundle: __Bundle
} = dependency_1;

const __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-examples/ssr@0.0.1/sr"
  },
  "type": "widget"
}).package();

;

__pkg.dependencies.update([['@beyond-js/widgets/render', dependency_0], ['@beyond-js/react-widgets/page', dependency_2], ['react', dependency_3], ['@beyond-js/kernel/styles', dependency_4]]);

brequire('@beyond-js/widgets/render').widgets.register([{
  "name": "sr-page",
  "vspecifier": "@beyond-examples/ssr@0.0.1/sr",
  "is": "page",
  "render": {
    "csr": false,
    "sr": ["/page/test", "/page/example"]
  },
  "route": "/page/${entry}"
}]);
brequire('@beyond-js/kernel/styles').styles.register('@beyond-examples/ssr@0.0.1/sr');
const ims = new Map();
/****************************
INTERNAL MODULE: ./controller
****************************/

ims.set('./controller', {
  hash: 2940256921,
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
        return _views.Page;
      }

    }

    exports.Controller = Controller;
  }
});
/*****************************
INTERNAL MODULE: ./views/index
*****************************/

ims.set('./views/index', {
  hash: 2824734992,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Page = Page;

    var React = require("react");

    function Page(props) {
      const entry = props.uri.vars.get('entry');
      return React.createElement("div", {
        className: "page-container"
      }, React.createElement("h2", null, "Im a page with static rendering."), entry && `URL parameter: ${entry}`);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUFBOztJQUNBO0lBRU87OztJQUFVLE1BQ1hBLFVBRFcsU0FDUUMsK0JBRFIsQ0FDaUM7TUFDcEMsSUFBTkMsTUFBTTtRQUNOLE9BQU9DLFdBQVA7TUFDSDs7SUFINkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNKbEQ7O0lBRU0sU0FBVUEsSUFBVixDQUFlQyxLQUFmLEVBQW9CO01BQ3RCLE1BQU1DLEtBQUssR0FBR0QsS0FBSyxDQUFDRSxHQUFORixDQUFVRyxJQUFWSCxDQUFlSSxHQUFmSixDQUFtQixPQUFuQkEsQ0FBZDtNQUVBLE9BQ0lLO1FBQUtDLFNBQVMsRUFBQztNQUFmRCxHQUNJQSxtRUFESkEsRUFJS0osS0FBSyxJQUFJLGtCQUFrQkEsS0FBSyxFQUpyQ0ksQ0FESjtJQVFIIiwibmFtZXMiOlsiQ29udHJvbGxlciIsIlBhZ2VSZWFjdFdpZGdldENvbnRyb2xsZXIiLCJXaWRnZXQiLCJQYWdlIiwicHJvcHMiLCJlbnRyeSIsInVyaSIsInZhcnMiLCJnZXQiLCJSZWFjdCIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiRTpcXHdvcmtzcGFjZVxcYmV5b25kLXByb3llY3RzXFxzYW1wbGVzLXRlc3RzXFxzc3IvIiwic291cmNlcyI6WyJwcm9qZWN0L21vZHVsZXMvc3IvdHMvY29udHJvbGxlci50cyIsInByb2plY3QvbW9kdWxlcy9zci90cy92aWV3cy9pbmRleC50c3giXSwic291cmNlc0NvbnRlbnQiOltudWxsLG51bGxdfQ==