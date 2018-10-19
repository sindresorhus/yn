export interface Options<Default = null> {
	/**
	 * Use a key distance-based score to leniently accept typos of `yes` and `no`
	 *
	 * @default false
	 */
	lenient?: boolean;

	/**
	 * Default value if no match was found
	 *
	 * @default null
	 */
	default?: boolean | Default;
}

/**
 * Parse yes/no like values
 * The following case-insensitive values are recognized: `'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0`
 *
 * @param input - Value that should be converted
 * @return The parsed input. A boolean if it could be parsed or the given default if not
 */
export default function yn<Default = null>(input: any, options?: Options<Default>): boolean | Default;
