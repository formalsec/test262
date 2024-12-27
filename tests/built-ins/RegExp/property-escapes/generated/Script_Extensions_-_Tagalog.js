// Copyright 2020 Mathias Bynens. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Mathias Bynens
description: >
  Unicode property escapes for `Script_Extensions=Tagalog`
info: |
  Generated by https://github.com/mathiasbynens/unicode-property-escapes-tests
  Unicode v13.0.0
esid: sec-static-semantics-unicodematchproperty-p
features: [regexp-unicode-property-escapes]
includes: [regExpUtils.js]
---*/

const matchSymbols = buildString({
  loneCodePoints: [],
  ranges: [
    [0x001700, 0x00170C],
    [0x00170E, 0x001714],
    [0x001735, 0x001736]
  ]
});
testPropertyEscapes(
  /^\p{Script_Extensions=Tagalog}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tagalog}"
);
testPropertyEscapes(
  /^\p{Script_Extensions=Tglg}+$/u,
  matchSymbols,
  "\\p{Script_Extensions=Tglg}"
);
testPropertyEscapes(
  /^\p{scx=Tagalog}+$/u,
  matchSymbols,
  "\\p{scx=Tagalog}"
);
testPropertyEscapes(
  /^\p{scx=Tglg}+$/u,
  matchSymbols,
  "\\p{scx=Tglg}"
);

const nonMatchSymbols = buildString({
  loneCodePoints: [
    0x00170D
  ],
  ranges: [
    [0x00DC00, 0x00DFFF],
    [0x000000, 0x0016FF],
    [0x001715, 0x001734],
    [0x001737, 0x00DBFF],
    [0x00E000, 0x10FFFF]
  ]
});
testPropertyEscapes(
  /^\P{Script_Extensions=Tagalog}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tagalog}"
);
testPropertyEscapes(
  /^\P{Script_Extensions=Tglg}+$/u,
  nonMatchSymbols,
  "\\P{Script_Extensions=Tglg}"
);
testPropertyEscapes(
  /^\P{scx=Tagalog}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tagalog}"
);
testPropertyEscapes(
  /^\P{scx=Tglg}+$/u,
  nonMatchSymbols,
  "\\P{scx=Tglg}"
);
