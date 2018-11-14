import {expectType} from 'tsd-check';
import yn from '.';

// Should use null as default when no options are given
expectType<boolean | null>(yn('true'));

// Should use the default type when given
expectType<boolean | null>(yn('true', {default: null}));

// Should use null as default when only the lenient option is given
expectType<boolean | null>(yn('true', {lenient: true}));
