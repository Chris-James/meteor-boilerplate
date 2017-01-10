
// A bug in the source code of simpl-schema causes it to throw the error:
// 'TypeError: Array.includes is not a function'
// Include this polyfill to patch the bug until simpl-schema is fixed
// & the dependency is updated in the application.
// see: https://github.com/aldeed/node-simple-schema/issues/33
Array.includes = function() {
  let [first, ...rest] = arguments;
  return Array.prototype.includes.apply(first, rest);
};
