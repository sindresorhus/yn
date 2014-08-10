'use strict';

var lenient = require('./lenient');

module.exports = function (val, ops) {
	val = String(val).trim();

	if (/^(?:y|yes|true)$/i.test(val)) {
		return true;
	}

	if (/^(?:n|no|false)$/i.test(val)) {
		return false;
	}

	if (typeof ops !== 'undefined' && ops.lenient === true) {
		return lenient(val);
	}

	return null;
};
