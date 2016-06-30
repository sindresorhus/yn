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
		'TRUE',
		'True',
		true,
		'1',
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
		'FALSE',
		'False',
		false,
		'0',
		0
	].forEach(el => {
		t.false(yn(el));
		t.false(yn(el, {lenient: true}));
	});
});

test('null cases', t => {
	[
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
	].forEach(el => {
		t.is(null, yn(el));
		t.is(null, yn(el, {lenient: true}));
	});
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
