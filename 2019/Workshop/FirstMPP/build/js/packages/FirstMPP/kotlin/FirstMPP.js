(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'FirstMPP'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'FirstMPP'.");
    }
    root.FirstMPP = factory(typeof FirstMPP === 'undefined' ? {} : FirstMPP, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  function hello() {
    return 'Hello from JS' + (' check is ' + (new Sample()).checkMe());
  }
  function Sample() {
  }
  Sample.prototype.checkMe = function () {
    return 24;
  };
  Sample.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sample',
    interfaces: []
  };
  function Platform() {
    Platform_instance = this;
    this.name = 'JS';
  }
  Platform.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Platform',
    interfaces: []
  };
  var Platform_instance = null;
  function Platform_getInstance() {
    if (Platform_instance === null) {
      new Platform();
    }
    return Platform_instance;
  }
  function main(args) {
    println(hello());
  }
  var package$sample = _.sample || (_.sample = {});
  package$sample.hello = hello;
  package$sample.Sample = Sample;
  Object.defineProperty(package$sample, 'Platform', {
    get: Platform_getInstance
  });
  package$sample.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('FirstMPP', _);
  return _;
}));

//# sourceMappingURL=FirstMPP.js.map
