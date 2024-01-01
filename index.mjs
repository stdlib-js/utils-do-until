// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function n(n,r,i){var s;if(!t(n))throw new TypeError(e("invalid argument. First argument must be a function. Value: `%s`.",n));if(!t(r))throw new TypeError(e("invalid argument. Second argument must be a function. Value: `%s`.",r));s=0;do{n.call(i,s),s+=1}while(!r(s))}export{n as default};
//# sourceMappingURL=index.mjs.map
