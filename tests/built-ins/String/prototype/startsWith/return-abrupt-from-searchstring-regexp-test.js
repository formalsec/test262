// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
es6id: 21.1.3.18
description: >
  Returns abrupt from IsRegExp(searchString).
info: |
  21.1.3.18 String.prototype.startsWith ( searchString [ , position ] )

  ...
  4. Let isRegExp be IsRegExp(searchString).
  5. ReturnIfAbrupt(isRegExp).
  ...

  7.2.8 IsRegExp ( argument )

  2. Let isRegExp be Get(argument, @@match).
  3. ReturnIfAbrupt(isRegExp).
features: [Symbol.match]
---*/
/*
var obj = {};
Object.defineProperty(obj, Symbol.match, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  ''.startsWith(obj);
});
*/

var regexp = /./;
Object.defineProperty(regexp, Symbol.match, {
  get: function() {
    throw new Test262Error();
  }
});

assert.throws(Test262Error, function() {
  ''.startsWith(regexp);
});
