"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Store = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

var dependency_1 = require("@beyond-js/kernel/core");

var dependency_2 = require("@beyond-js/widgets/controller");

var dependency_3 = require("@beyond-examples/ssr/api");

const {
  Bundle: __Bundle
} = dependency_0;

const __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-examples/ssr@0.0.1/store-entries"
  },
  "type": "ts"
}).package();

;

__pkg.dependencies.update([['@beyond-js/kernel/core', dependency_1], ['@beyond-js/widgets/controller', dependency_2], ['@beyond-examples/ssr/api', dependency_3]]);

const ims = new Map();
/***********************
INTERNAL MODULE: ./store
***********************/

ims.set('./store', {
  hash: 2290000723,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Store = void 0;

    var _core = require("@beyond-js/kernel/core");

    var _api = require("@beyond-examples/ssr/api");
    /*bundle*/


    class Store extends _core.Events {
      #provider = new _api.EntriesBridge();
      #loading = false;

      get loading() {
        return this.#loading;
      }

      #loaded = false;

      get loaded() {
        return this.#loaded;
      }

      #value = [];

      get value() {
        return this.#value;
      }

      #hydrated = false;

      get hydrated() {
        return this.#hydrated;
      }

      async fetch() {
        this.#loading = true;
        this.trigger('change');
        this.#value.length = 0;
        const entries = await this.#provider.fetch();
        entries.forEach(entry => this.#value.push(entry));
        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');
      }

      hydrate(cached) {
        console.log('hydrate', cached);
        this.#loading = false;
        this.#loaded = true;
        cached.forEach(entries => this.#value.push(entries));
        this.#hydrated = true;
      }

      toJSON() {
        return this.#value;
      }

    }

    exports.Store = Store;
  }
});
__pkg.exports.descriptor = [{
  "im": "./store",
  "from": "Store",
  "name": "Store"
}];
let Store; // Module exports

exports.Store = Store;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Store') && (exports.Store = Store = require ? require('./store').Store : value);
};

const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7O0lBRUE7SUFPTzs7O0lBQVUsTUFDWEEsS0FEVyxTQUNHQyxZQURILENBQ1M7TUFDdEIsWUFBWSxJQUFJQyxrQkFBSixFQUFaO01BRUEsV0FBVyxLQUFYOztNQUNXLElBQVBDLE9BQU87UUFDUCxPQUFPLEtBQUssUUFBWjtNQUNIOztNQUVELFVBQVUsS0FBVjs7TUFDVSxJQUFOQyxNQUFNO1FBQ04sT0FBTyxLQUFLLE9BQVo7TUFDSDs7TUFFRCxTQUFxQixFQUFyQjs7TUFDUyxJQUFMQyxLQUFLO1FBQ0wsT0FBTyxLQUFLLE1BQVo7TUFDSDs7TUFFRCxZQUFZLEtBQVo7O01BQ1ksSUFBUkMsUUFBUTtRQUNSLE9BQU8sS0FBSyxTQUFaO01BQ0g7O01BRVUsTUFBTEMsS0FBSztRQUNQLEtBQUssUUFBTCxHQUFnQixJQUFoQjtRQUNBLEtBQUtDLE9BQUwsQ0FBYSxRQUFiO1FBRUEsS0FBSyxNQUFMLENBQVlDLE1BQVosR0FBcUIsQ0FBckI7UUFDQSxNQUFNQyxPQUFPLEdBQUcsTUFBTSxLQUFLLFNBQUwsQ0FBZUgsS0FBZixFQUF0QjtRQUNBRyxPQUFPLENBQUNDLE9BQVJELENBQWdCRSxLQUFLLElBQUksS0FBSyxNQUFMLENBQVlDLElBQVosQ0FBaUJELEtBQWpCLENBQXpCRjtRQUVBLEtBQUssUUFBTCxHQUFnQixLQUFoQjtRQUNBLEtBQUssT0FBTCxHQUFlLElBQWY7UUFDQSxLQUFLRixPQUFMLENBQWEsUUFBYjtNQUNIOztNQUVETSxPQUFPLENBQUNDLE1BQUQsRUFBbUI7UUFDdEJDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxTQUFaQSxFQUF1QkQsTUFBdkJDO1FBQ0EsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO1FBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtRQUNBRCxNQUFNLENBQUNKLE9BQVBJLENBQWVMLE9BQU8sSUFBSSxLQUFLLE1BQUwsQ0FBWUcsSUFBWixDQUFpQkgsT0FBakIsQ0FBMUJLO1FBQ0EsS0FBSyxTQUFMLEdBQWlCLElBQWpCO01BQ0g7O01BRURHLE1BQU07UUFDRixPQUFPLEtBQUssTUFBWjtNQUNIOztJQTlDcUIiLCJuYW1lcyI6WyJTdG9yZSIsIkV2ZW50cyIsIkVudHJpZXNCcmlkZ2UiLCJsb2FkaW5nIiwibG9hZGVkIiwidmFsdWUiLCJoeWRyYXRlZCIsImZldGNoIiwidHJpZ2dlciIsImxlbmd0aCIsImVudHJpZXMiLCJmb3JFYWNoIiwiZW50cnkiLCJwdXNoIiwiaHlkcmF0ZSIsImNhY2hlZCIsImNvbnNvbGUiLCJsb2ciLCJ0b0pTT04iXSwic291cmNlUm9vdCI6IkU6XFx3b3Jrc3BhY2VcXGJleW9uZC1wcm95ZWN0c1xcc2FtcGxlcy10ZXN0c1xcc3NyLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL3N0b3JlL3RzL3N0b3JlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbbnVsbF19