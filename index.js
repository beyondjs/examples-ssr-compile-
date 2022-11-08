globalThis.__app_package = {specifier: '@beyond-examples/ssr'};
Object.defineProperty(globalThis, 'brequire', {get: () => require});
Object.defineProperty(globalThis, 'bimport', {get: () => async specifier => require(specifier)});

require('./start.js');