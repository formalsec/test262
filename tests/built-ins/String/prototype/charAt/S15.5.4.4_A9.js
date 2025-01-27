// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    The String.prototype.charAt.length property does not have the attribute
    DontDelete
es5id: 15.5.4.4_A9
description: >
    Checking if deleting the String.prototype.charAt.length property
    fails
---*/

//////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.charAt.hasOwnProperty('length'))) {
  console.log("upsiiii 1");
  throw new Test262Error('#0: String.prototype.charAt.hasOwnProperty(\'length\') return true. Actual: ' + String.prototype.charAt.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!delete String.prototype.charAt.length) {
  console.log("upsiiii 2");
  throw new Test262Error('#1: delete String.prototype.charAt.length return true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.charAt.hasOwnProperty('length')) {
  console.log("upsiiii 3");
  throw new Test262Error('#2: delete String.prototype.charAt.length; String.prototype.charAt.hasOwnProperty(\'length\') return false. Actual: ' + String.prototype.charAt.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////
