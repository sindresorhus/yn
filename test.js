import test from 'ava';
import yn from '.';

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
		t.true(yn(el));
		t.true(yn(el, {lenient: true}));
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
		t.false(yn(el));
		t.false(yn(el, {lenient: true}));
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
		t.is(yn(el), null);
		t.is(yn(el, {lenient: true}), null);
	}
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

test('default option throws error if not a boolean type', t => {
	t.throws(() => yn('10', {default: 10}), 'Expected the `default` option to be of type `boolean`, got `number`');
});

test('default option', t => {
	t.true(yn('10', {default: true}));
	t.false(yn('10', {default: false}));
});

test('default option with lenient option', t => {
	t.true(yn('10', {default: true, lenient: true}));
	t.false(yn('10', {default: false, lenient: true}));
});
