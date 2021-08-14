import {expectType} from 'tsd';
import yn from './index.js';

expectType<boolean | undefined>(yn('y'));
expectType<boolean | undefined>(yn('mo', {lenient: true}));
expectType<boolean>(yn('abomasum', {default: false}));
