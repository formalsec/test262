// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-%typedarray%.prototype.map
description: >
  Verify conversion values on returned instance
info: |
  22.2.3.19 %TypedArray%.prototype.map ( callbackfn [ , thisArg ] )

  ...
  8. Repeat, while k < len
    ...
    d. Perform ? Set(A, Pk, mappedValue, true).
  ...

  IntegerIndexedElementSet ( O, index, value )

  Assert: O is an Integer-Indexed exotic object.
  If O.[[ContentType]] is BigInt, let numValue be ? ToBigInt(value).
  Otherwise, let numValue be ? ToNumber(value).
  Let buffer be O.[[ViewedArrayBuffer]].
  If IsDetachedBuffer(buffer) is false and ! IsValidIntegerIndex(O, index) is true, then
    Let offset be O.[[ByteOffset]].
    Let arrayTypeName be the String value of O.[[TypedArrayName]].
    Let elementSize be the Element Size value specified in Table 62 for arrayTypeName.
    Let indexedPosition be (ℝ(index) × elementSize) + offset.
    Let elementType be the Element Type value in Table 62 for arrayTypeName.
    Perform SetValueInBuffer(buffer, indexedPosition, elementType, numValue, true, Unordered).
  Return NormalCompletion(undefined).

  24.1.1.6 SetValueInBuffer ( arrayBuffer, byteIndex, type, value [ ,
  isLittleEndian ] )

  ...
  8. If type is "Float32", then
    ...
  9. Else, if type is "Float64", then
    ...
  10. Else,
    ...
    b. Let convOp be the abstract operation named in the Conversion Operation
    column in Table 50 for Element Type type.
    c. Let intValue be convOp(value).
    d. If intValue ≥ 0, then
      ...
    e. Else,
      ...
includes: [byteConversionValues.js, testTypedArray.js]
features: [TypedArray]
---*/

testTypedArrayConversions(byteConversionValues, function(TA, value, expected, initial) {
  var sample = new TA([initial]);

  var result = sample.map(function() {
    return value;
  });

  console.log(result.length);
  console.log(result[0]); // 0
  console.log(initial); // 0
  console.log(value); // undefined
  console.log(expected); // NaN

  assert.sameValue(result[0], expected, value + " converts to " + expected);
});
