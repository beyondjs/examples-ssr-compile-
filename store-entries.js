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
  hash: 1456733888,
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
      #provider = new _api.Entries();
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
        console.log(`fetch: ${this.#loaded}`);
        this.#loading = true;
        this.trigger('change');
        this.#value.length = 0;
        const entries = await this.#provider.fetch();
        entries.forEach(entry => this.#value.push(entry));
        this.#loading = false;
        this.#loaded = true;
        this.trigger('change');
        console.log(`fetch: ${this.#loaded}`);
      }

      hydrate(cached) {
        console.log('hydrate', cached);
        this.#loading = false;
        this.#loaded = true;
        cached.forEach(entries => this.#value.push(entries));
        this.#hydrated = true;
      }

      toJSON() {
        console.log('toJSON', this.#value);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQUE7O0lBRUE7SUFPTzs7O0lBQVUsTUFDWEEsS0FEVyxTQUNHQyxZQURILENBQ1M7TUFDdEIsWUFBWSxJQUFJQyxZQUFKLEVBQVo7TUFFQSxXQUFXLEtBQVg7O01BQ1csSUFBUEMsT0FBTztRQUNQLE9BQU8sS0FBSyxRQUFaO01BQ0g7O01BRUQsVUFBVSxLQUFWOztNQUNVLElBQU5DLE1BQU07UUFDTixPQUFPLEtBQUssT0FBWjtNQUNIOztNQUVELFNBQXFCLEVBQXJCOztNQUNTLElBQUxDLEtBQUs7UUFDTCxPQUFPLEtBQUssTUFBWjtNQUNIOztNQUVELFlBQVksS0FBWjs7TUFDWSxJQUFSQyxRQUFRO1FBQ1IsT0FBTyxLQUFLLFNBQVo7TUFDSDs7TUFFVSxNQUFMQyxLQUFLO1FBQ1BDLE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxVQUFVLEtBQUssT0FBTyxFQUFsQ0E7UUFDQSxLQUFLLFFBQUwsR0FBZ0IsSUFBaEI7UUFDQSxLQUFLRSxPQUFMLENBQWEsUUFBYjtRQUVBLEtBQUssTUFBTCxDQUFZQyxNQUFaLEdBQXFCLENBQXJCO1FBQ0EsTUFBTUMsT0FBTyxHQUFHLE1BQU0sS0FBSyxTQUFMLENBQWVMLEtBQWYsRUFBdEI7UUFDQUssT0FBTyxDQUFDQyxPQUFSRCxDQUFnQkUsS0FBSyxJQUFJLEtBQUssTUFBTCxDQUFZQyxJQUFaLENBQWlCRCxLQUFqQixDQUF6QkY7UUFFQSxLQUFLLFFBQUwsR0FBZ0IsS0FBaEI7UUFDQSxLQUFLLE9BQUwsR0FBZSxJQUFmO1FBQ0EsS0FBS0YsT0FBTCxDQUFhLFFBQWI7UUFDQUYsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLFVBQVUsS0FBSyxPQUFPLEVBQWxDQTtNQUNIOztNQUVEUSxPQUFPLENBQUNDLE1BQUQsRUFBbUI7UUFDdEJULE9BQU8sQ0FBQ0MsR0FBUkQsQ0FBWSxTQUFaQSxFQUF1QlMsTUFBdkJUO1FBQ0EsS0FBSyxRQUFMLEdBQWdCLEtBQWhCO1FBQ0EsS0FBSyxPQUFMLEdBQWUsSUFBZjtRQUNBUyxNQUFNLENBQUNKLE9BQVBJLENBQWVMLE9BQU8sSUFBSSxLQUFLLE1BQUwsQ0FBWUcsSUFBWixDQUFpQkgsT0FBakIsQ0FBMUJLO1FBQ0EsS0FBSyxTQUFMLEdBQWlCLElBQWpCO01BQ0g7O01BRURDLE1BQU07UUFDRlYsT0FBTyxDQUFDQyxHQUFSRCxDQUFZLFFBQVpBLEVBQXNCLEtBQUssTUFBM0JBO1FBQ0EsT0FBTyxLQUFLLE1BQVo7TUFDSDs7SUFqRHFCIiwibmFtZXMiOlsiU3RvcmUiLCJFdmVudHMiLCJFbnRyaWVzIiwibG9hZGluZyIsImxvYWRlZCIsInZhbHVlIiwiaHlkcmF0ZWQiLCJmZXRjaCIsImNvbnNvbGUiLCJsb2ciLCJ0cmlnZ2VyIiwibGVuZ3RoIiwiZW50cmllcyIsImZvckVhY2giLCJlbnRyeSIsInB1c2giLCJoeWRyYXRlIiwiY2FjaGVkIiwidG9KU09OIl0sInNvdXJjZVJvb3QiOiJFOlxcd29ya3NwYWNlXFxiZXlvbmQtcHJveWVjdHNcXHNhbXBsZXMtdGVzdHNcXHNzci8iLCJzb3VyY2VzIjpbInByb2plY3QvbW9kdWxlcy9zdG9yZS90cy9zdG9yZS50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==