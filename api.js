"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hmr = exports.__beyond_pkg = exports.Entries = void 0;

var dependency_0 = require("@beyond-js/kernel/bundle");

const {
  Bundle: __Bundle
} = dependency_0;

const __pkg = new __Bundle({
  "module": {
    "vspecifier": "@beyond-examples/ssr@0.0.1/api"
  },
  "type": "ts"
}).package();

;

__pkg.dependencies.update([]);

const ims = new Map();
/***********************
INTERNAL MODULE: ./index
***********************/

ims.set('./index', {
  hash: 4264566612,
  creator: function (require, exports) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.Entries = void 0;
    /*bundle*/

    class Entries {
      async fetch() {
        await new Promise(resolve => setTimeout(resolve, 2000));
        return [{
          id: 1,
          name: 'Argentina'
        }, {
          id: 2,
          name: 'Brasil'
        }, {
          id: 3,
          name: 'Ecuador'
        }, {
          id: 4,
          name: 'Uruguay'
        }];
      }

    }

    exports.Entries = Entries;
  }
});
__pkg.exports.descriptor = [{
  "im": "./index",
  "from": "Entries",
  "name": "Entries"
}];
let Entries; // Module exports

exports.Entries = Entries;

__pkg.exports.process = function ({
  require,
  prop,
  value
}) {
  (require || prop === 'Entries') && (exports.Entries = Entries = require ? require('./index').Entries : value);
};

const __beyond_pkg = __pkg;
exports.__beyond_pkg = __beyond_pkg;
const hmr = new function () {
  this.on = (event, listener) => __pkg.hmr.on(event, listener);

  this.off = (event, listener) => __pkg.hmr.off(event, listener);
}();
exports.hmr = hmr;

__pkg.initialise(ims);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTzs7SUFBVSxNQUNYQSxPQURXLENBQ0o7TUFDRSxNQUFMQyxLQUFLO1FBQ1AsTUFBTSxJQUFJQyxPQUFKLENBQVlDLE9BQU8sSUFBSUMsVUFBVSxDQUFDRCxPQUFELEVBQVUsSUFBVixDQUFqQyxDQUFOO1FBRUEsT0FBTyxDQUNIO1VBQ0lFLEVBQUUsRUFBRSxDQURSO1VBRUlDLElBQUksRUFBRTtRQUZWLENBREcsRUFLSDtVQUNJRCxFQUFFLEVBQUUsQ0FEUjtVQUVJQyxJQUFJLEVBQUU7UUFGVixDQUxHLEVBU0g7VUFDSUQsRUFBRSxFQUFFLENBRFI7VUFFSUMsSUFBSSxFQUFFO1FBRlYsQ0FURyxFQWFIO1VBQ0lELEVBQUUsRUFBRSxDQURSO1VBRUlDLElBQUksRUFBRTtRQUZWLENBYkcsQ0FBUDtNQWtCSDs7SUF0QlEiLCJuYW1lcyI6WyJFbnRyaWVzIiwiZmV0Y2giLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJpZCIsIm5hbWUiXSwic291cmNlUm9vdCI6IkU6XFx3b3Jrc3BhY2VcXGJleW9uZC1wcm95ZWN0c1xcc2FtcGxlcy10ZXN0c1xcc3NyLyIsInNvdXJjZXMiOlsicHJvamVjdC9tb2R1bGVzL2FwaS90cy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6W251bGxdfQ==