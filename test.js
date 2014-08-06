'use strict';
var test = require('ava');
var yn = require('./');

test(function (t) {
	[
		'y',
		'Y',
		'yes',
		'YES',
		'Yes',
		'true',
		true
	].forEach(function (el) {
		t.assert(yn(el) === true);
	});

	[
		'n',
		'N',
		'no',
		'NO',
		'No',
		'false',
		false
	].forEach(function (el) {
		t.assert(yn(el) === false);
	});

	t.assert(yn(NaN) === null);
	t.assert(yn('') === null);
	t.assert(yn('unicorn') === null);
});
