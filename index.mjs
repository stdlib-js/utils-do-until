// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var e=t,n=r;var i=function(t,r,i){var s;if(!e(t))throw new TypeError(n("invalid argument. First argument must be a function. Value: `%s`.",t));if(!e(r))throw new TypeError(n("invalid argument. Second argument must be a function. Value: `%s`.",r));s=0;do{t.call(i,s),s+=1}while(!r(s))};export{i as default};
//# sourceMappingURL=index.mjs.map
