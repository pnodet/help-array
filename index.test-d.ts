import {expectType} from 'tsd';
import * as helpArray from './index.js';

expectType<any[]>(helpArray.append([1, 2], 'hello'));
