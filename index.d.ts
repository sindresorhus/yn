declare namespace yn {
	interface Options {
		/**
		Use a key distance-based score to leniently accept typos of `yes` and `no`.

		@default false
		*/
		readonly lenient?: boolean;

		/**
		Default value if no match was found.

		@default undefined
		*/
		readonly default?: boolean | undefined;
	}

	interface OptionsWithDefault extends Options {
		default: boolean;
	}
}

/**
Parse yes/no like values.

The following case-insensitive values are recognized: `'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0`, 'on', 'off'

@param input - Value that should be converted.
@returns The parsed input if it can be parsed or the default value defined in the `default` option.

@example
```
import yn = require('yn');

yn('y');
//=> true

yn('NO');
//=> false

yn(true);
//=> true

yn('abomasum');
//=> undefined

yn('abomasum', {default: false});
//=> false

yn('mo', {lenient: true});
//=> false
```
*/
declare function yn(input: unknown, options: yn.OptionsWithDefault): boolean;
declare function yn(input: unknown, options?: yn.Options): boolean | undefined;

export = yn;
