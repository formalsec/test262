// Copyright (C) 2017 Robin Templeton. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: JSON serialization of BigInt values
esid: pending
features: [BigInt]
---*/

assert.throws(TypeError, function () /* TODO: => */ {return JSON.stringify(0n)});
assert.throws(TypeError, function () /* TODO: => */ {return JSON.stringify(Object(0n))});
assert.throws(TypeError, function () /* TODO: => */ {return JSON.stringify({x: 0n})});
