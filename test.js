import test from 'ava';
import m from '.';

test('default export', t => {
	t.is(m, m.default);
});

const truthyCases = [
	'y',
	'Y',
	'yes',
	'YES',
	'Yes',
	'true',
	'TRUE',
	'True',
	true,
	'1',
	1
];
test('truthy cases', t => {
	for (const el of truthyCases) {
		t.true(m(el));
		t.true(m(el, {lenient: true}));
	}
});

const falseyCases = [
	'n',
	'N',
	'no',
	'NO',
	'No',
	'false',
	'FALSE',
	'False',
	false,
	'0',
	0
];
test('falsey cases', t => {
	for (const el of falseyCases) {
		t.false(m(el));
		t.false(m(el, {lenient: true}));
	}
});

const nullCases = [
	// Falsey cases that don't work
	NaN,
	null,
	undefined,
	'',
	[],
	{},
	// Numbers: only works on 0 and 1
	'10',
	10,
	'-1',
	-1,
	'0.5',
	0.5,
	'1BadIntParsing',
	'0x000',
	// Strings with a low edit-distance don't work
	'flase',
	'ture',
	'n o',
	'yn',
	// Other
	'unicorn'
];
test('null cases', t => {
	for (const el of nullCases) {
		t.is(m(el), null);
		t.is(m(el, {lenient: true}), null);
	}
});

test('lenient option - truthy value cases', t => {
	t.true(m('ues', {lenient: true}));
	t.true(m('ywa', {lenient: true}));
	t.true(m('tes', {lenient: true}));
	t.true(m('twa', {lenient: true}));
	t.true(m('urd', {lenient: true}));
});

test('lenient option - falsey value cases', t => {
	t.false(m('ni', {lenient: true}));
	t.false(m('bi', {lenient: true}));
	t.false(m('mo', {lenient: true}));
});

test('default option throws error if not a boolean type', t => {
	t.throws(() => m('10', {default: 10}), 'Expected the `default` option to be of type `boolean`, got `number`');
});

test('default option', t => {
	t.true(m('10', {default: true}));
	t.false(m('10', {default: false}));
});

test('default option with lenient option', t => {
	t.true(m('10', {default: true, lenient: true}));
	t.false(m('10', {default: false, lenient: true}));
});
