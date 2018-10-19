import { expectType } from 'tsd-check';
import yn from '.';

// should use null as default when no options are given
expectType<boolean | null>(yn('true'));

// should use the default type when given
expectType<boolean | number>(yn('true', { default: 1 }));

// should use null as default when only the lenient option is given
expectType<boolean | null>(yn('true', { lenient: true }));
