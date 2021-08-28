import {expectType} from 'tsd';
import main from './index.js';

expectType<boolean>(main('hello'));
