// Copyright (C) 2019 Leo Balter, 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
  Resolved promises ignore rejections through immediate invocation of the
    provided resolving function
esid: sec-promise.all
info: |
  Let result be PerformPromiseAll(iteratorRecord, C, promiseCapability).

  Runtime Semantics: PerformPromiseAll

  Repeat
    ...
    r. Perform ? Invoke(nextPromise, "then", « resultCapability.[[Resolve]], rejectElement »).

flags: [async]
features: [arrow-function]
---*/

var resolver = {
  then(resolve) {
    resolve(42);
  }
};
var lateRejector = {
  then(resolve, reject) {
    resolve(33);
    reject();
  }
};

Promise.all([resolver, lateRejector])
  .then(function(resolution) /* TODO: => */ {
    assert.sameValue(resolution[0], 42);
    assert.sameValue(resolution[1], 33);
  }).then($DONE, $DONE);
