/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var doUntil = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof doUntil, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			doUntil( value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			doUntil( noop, value );
		};
	}
});

tape( 'until a test condition is true, the function invokes a provided function (and does so at least once)', function test( t ) {
	var out = [];

	doUntil( fcn, predicate );

	t.deepEqual( out, [ 0, 1, 2, 3, 4 ], 'expected result' );
	t.end();

	function predicate( i ) {
		return ( i >= 5 );
	}

	function fcn( i ) {
		out.push( i );
	}
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx = {
		'count': 0
	};

	doUntil( fcn, predicate, ctx );

	t.strictEqual( ctx.count, 5, 'expected result' );
	t.end();

	function predicate( i ) {
		return ( i >= 5 );
	}

	function fcn() {
		/* eslint-disable no-invalid-this */
		this.count += 1;
	}
});
