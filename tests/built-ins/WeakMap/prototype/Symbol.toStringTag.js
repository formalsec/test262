// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-weakmap.prototype-@@tostringtag
description: >
    `Symbol.toStringTag` property descriptor
info: |
    The initial value of the @@toStringTag property is the String value
    "WeakMap".

    This property has the attributes { [[Writable]]: false, [[Enumerable]]:
    false, [[Configurable]]: true }.
includes: [propertyHelper.js]
features: [Symbol.toStringTag]
---*/

console.log(WeakMap.prototype[Symbol.toStringTag]); /* undefined */
console.log(WeakMap.prototype["@@toStringTag"]); /* WeakMap */
assert.sameValue(WeakMap.prototype[Symbol.toStringTag], 'WeakMap');

verifyNotEnumerable(WeakMap.prototype, Symbol.toStringTag);
verifyNotWritable(WeakMap.prototype, Symbol.toStringTag);
verifyConfigurable(WeakMap.prototype, Symbol.toStringTag);
