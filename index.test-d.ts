import {expectType} from 'tsd';
import yn = require('.');

expectType<boolean | null>(yn('y'));
expectType<boolean | null>(yn('mo', {lenient: true}));
expectType<boolean>(yn('abomasum', {default: false}));
