// Copyright (c) 2020 Rick Waldron.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-array.prototype.map
description: Array.prototype.map applied to boolean primitive
includes: [compareArray.js]
---*/

assert.compareArray(
  Array.prototype.map.call(true, function () /* TODO: => */ {}),
  [],
  'Array.prototype.map.call(true, function () /* TODO: => */ {}) must return []'
);
assert.compareArray(
  Array.prototype.map.call(false, function () /* TODO: => */ {}),
  [],
  'Array.prototype.map.call(false, function () /* TODO: => */ {}) must return []'
);
