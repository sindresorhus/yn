'use strict';
module.exports = function (val) {
	val = String(val).trim();

	if (/^(?:y|yes|true)$/i.test(val)) {
		return true;
	}

	if (/^(?:n|no|false)$/i.test(val)) {
		return false;
	}

	return null;
};
