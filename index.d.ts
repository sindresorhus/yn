export interface Options {
	/**
	Use a key distance-based score to leniently accept typos of `yes` and `no`.

	@default false
	*/
	readonly lenient?: boolean;

	/**
	The default value if no match was found.

	@default undefined
	*/
	readonly default?: boolean | undefined;
}

export interface OptionsWithDefault extends Options {
	readonly default: boolean;
}

/**
Parse yes/no like values.

The following case-insensitive values are recognized: `'y', 'yes', 't', 'true', true, '1', 1, 'n', 'no', 'f', 'false', false, '0', 0`, 'on', 'off'

@param input - The value that should be converted.
@returns The parsed input if it can be parsed or the default value defined in the `default` option.

@example
```
import yn from 'yn';

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
export default function yn(input: unknown, options: OptionsWithDefault): boolean;
export default function yn(input: unknown, options?: Options): boolean | undefined;
