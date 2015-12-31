import test from 'ava';
import yn from './';

test('truthy cases', t => {
	[
		'y',
		'Y',
		'yes',
		'YES',
		'Yes',
		'true',
		true,
		1
	].forEach(el => {
		t.true(yn(el));
		t.true(yn(el, {lenient: true}));
	});
});

test('falsey cases', t => {
	[
		'n',
		'N',
		'no',
		'NO',
		'No',
		'false',
		false,
		0
	].forEach(el => {
		t.false(yn(el));
		t.false(yn(el, {lenient: true}));
	});
});

test('edge cases which return null', t => {
	t.is(yn(NaN), null);
	t.is(yn(''), null);
	t.is(yn('yn'), null);
	t.is(yn('unicorn'), null);
	t.is(yn(NaN, {lenient: true}), null);
	t.is(yn('', {lenient: true}), null);
	t.is(yn('yn', {lenient: true}), null);
	t.is(yn('unicorn', {lenient: true}), null);
});

test('lenient option - truthy value cases', t => {
	t.true(yn('ues', {lenient: true}));
	t.true(yn('ywa', {lenient: true}));
	t.true(yn('tes', {lenient: true}));
	t.true(yn('twa', {lenient: true}));
	t.true(yn('urd', {lenient: true}));
});

test('lenient option - falsey value cases', t => {
	t.false(yn('ni', {lenient: true}));
	t.false(yn('bi', {lenient: true}));
	t.false(yn('mo', {lenient: true}));
});
