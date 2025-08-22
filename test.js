import test from 'ava';
import yn from './index.js';

const truthyCases = [
	'y',
	'Y',
	'yes',
	'YES',
	'Yes',
	'T',
	't',
	'true',
	'TRUE',
	'True',
	true,
	'1',
	1,
	'on',
];
test('truthy cases', t => {
	for (const case_ of truthyCases) {
		t.true(yn(case_));
		t.true(yn(case_, {lenient: true}));
	}
});

const falseyCases = [
	'n',
	'N',
	'no',
	'NO',
	'No',
	'F',
	'f',
	'false',
	'FALSE',
	'False',
	false,
	'0',
	0,
	'off',
];
test('falsey cases', t => {
	for (const case_ of falseyCases) {
		t.false(yn(case_));
		t.false(yn(case_, {lenient: true}));
	}
});

const undefinedCases = [
	// Falsey cases that don't work
	Number.NaN,
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
	'unicorn',
];
test('undefined cases', t => {
	for (const case_ of undefinedCases) {
		t.is(yn(case_), undefined);
		t.is(yn(case_, {lenient: true}), undefined);
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
	t.throws(() => {
		yn('10', {default: 10});
	}, {
		message: 'Expected the `default` option to be of type `boolean`, got `number`',
	});
});

test('default option', t => {
	t.true(yn('10', {default: true}));
	t.false(yn('10', {default: false}));
});

test('default option with lenient option', t => {
	t.true(yn('10', {default: true, lenient: true}));
	t.false(yn('10', {default: false, lenient: true}));
});
