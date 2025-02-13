// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: The Date.prototype property "setUTCFullYear" has { DontEnum } attributes
esid: sec-date.prototype.setutcfullyear
description: Checking DontEnum attribute
---*/

if (Date.prototype.propertyIsEnumerable('setUTCFullYear')) {
  throw new Test262Error('#1: The Date.prototype.setUTCFullYear property has the attribute DontEnum');
}

for (var x in Date.prototype) {
  if (x === "setUTCFullYear") {
    throw new Test262Error('#2: The Date.prototype.setUTCFullYear has the attribute DontEnum');
  }
}
