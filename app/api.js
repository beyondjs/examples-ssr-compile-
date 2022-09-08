"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.EntriesBridge = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

const {
  Bundle: __Bundle,
  externals
} = dependency_0;

const __pkg = new __Bundle({
  "module": "@beyond-examples/ssr/api",
  "bundle": "ts"
}).package();

;
externals.register(new Map([]));
const ims = new Map();
/***********************
INTERNAL MODULE: ./index
***********************/

ims.set('./index', {
  hash: 2199010481,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EntriesBridge = void 0;
    /*bundle*/

    class EntriesBridge {
      async fetch() {
        await new Promise(resolve => setTimeout(resolve, 1000));
        return [{
          id: 1,
          name: 'Pepsi'
        }, {
          id: 2,
          name: 'Coca Cola'
        }];
      }

    }

    exports.EntriesBridge = EntriesBridge;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "EntriesBridge",
  "name": "EntriesBridge"
}];
let EntriesBridge; // Module exports

exports.EntriesBridge = EntriesBridge;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'EntriesBridge') && (exports.EntriesBridge = EntriesBridge = require ? require('./index').EntriesBridge : value);
};

const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTzs7SUFBVSxNQUNYQSxhQURXLENBQ0U7TUFDSixNQUFMQyxLQUFLO1FBQ1AsTUFBTSxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFqQyxDQUFOO1FBRUEsT0FBTyxDQUFDO1VBQ0pFLEVBQUUsRUFBRSxDQURBO1VBRUpDLElBQUksRUFBRTtRQUZGLENBQUQsRUFHSjtVQUNDRCxFQUFFLEVBQUUsQ0FETDtVQUVDQyxJQUFJLEVBQUU7UUFGUCxDQUhJLENBQVA7TUFPSDs7SUFYYyIsIm5hbWVzIjpbIkVudHJpZXNCcmlkZ2UiLCJmZXRjaCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImlkIiwibmFtZSJdLCJzb3VyY2VSb290IjoiRTpcXHdvcmtzcGFjZVxcYmV5b25kXFxzYW1wbGVzLXRlc3RzXFxzc3IvIiwic291cmNlcyI6WyJzc3IvbW9kdWxlcy9hcGkvdHMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOltudWxsXX0=