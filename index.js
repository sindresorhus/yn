'use strict';
const lenient = require('./lenient'),
      yes = /^(?:y|yes|true|1)$/i,
      no = /^(?:n|no|false|0)$/i;

module.exports = (val, opts) => {
	val = String(val).trim();
	opts = Object.assign({
		lenient: false,
		default: null
	}, opts);

	if (opts.default !== null && typeof opts.default !== 'boolean') {
		throw new TypeError(`Expected the \`default\` option to be of type \`boolean\`, got \`${typeof opts.default}\``);
	}

	if (yes.test(val)) {
		return true;
	}

	if (no.test(val)) {
		return false;
	}

	if (opts.lenient === true) {
		return lenient(val, opts);
	}

	return opts.default;
};
