export interface YesNoOptions<T = null> {
	lenient?: boolean;
	default?: boolean | T;
}

/**
 * Parse yes/no like values
 * The following case-insensitive values are recognized: `'y', 'yes', 'true', true, '1', 1, 'n', 'no', 'false', false, '0', 0`
 *
 * @param input Value that should be converted
 * @param [options] Parsing options
 * @param [options.lenient=false] Use a key distance-based score to leniently accept typos of `yes` and `no`
 * @param [options.default=null] Default value if no match was found
 */
export default function yn<T>(input: any, options?: YesNoOptions<T>): boolean | T;
