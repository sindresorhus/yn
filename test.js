'use strict';
var test = require('ava');
var yn = require('./');

test('truthy cases', function (t) {
	[
		'y',
		'Y',
		'yes',
		'YES',
		'Yes',
		'true',
		true,
		1
	].forEach(function (el) {
		t.assert(yn(el) === true);
		t.assert(yn(el, {lenient: true}) === true);
	});

	t.end();
});

test('falsey cases', function (t) {
	[
		'n',
		'N',
		'no',
		'NO',
		'No',
		'false',
		false,
		0
	].forEach(function (el) {
		t.assert(yn(el) === false);
		t.assert(yn(el, {lenient: true}) === false);
	});

	t.end();
});

test('Edge cases which return null', function (t) {
	t.assert(yn(NaN) === null);
	t.assert(yn('') === null);
	t.assert(yn('yn') === null);
	t.assert(yn('unicorn') === null);
	t.assert(yn(NaN, {lenient: true}) === null);
	t.assert(yn('', {lenient: true}) === null);
	t.assert(yn('yn', {lenient: true}) === null);
	t.assert(yn('unicorn', {lenient: true}) === null);
	t.end();
});

test('lenient option - truthy value cases', function (t) {
	t.assert(yn('ues', {lenient: true}) === true);
	t.assert(yn('ywa', {lenient: true}) === true);
	t.assert(yn('tes', {lenient: true}) === true);
	t.assert(yn('twa', {lenient: true}) === true);
	t.assert(yn('urd', {lenient: true}) === true);
	t.end();
});

test('lenient option - falsey value cases', function (t) {
	t.assert(yn('ni', {lenient: true}) === false);
	t.assert(yn('bi', {lenient: true}) === false);
	t.assert(yn('mo', {lenient: true}) === false);
	t.end();
});
