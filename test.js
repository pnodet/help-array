import test from 'ava';
import * as helpArray from './index.js';

const isString = (element) => typeof element === 'string';

test('all()', (t) => {
	t.is(helpArray.all(['1', '2'], isString), true);
	t.is(helpArray.all([1, 2], isString), false);
});

test('allEqual', (t) => {
	t.is(helpArray.allEqual([2, 2, 2]), true);
	t.is(helpArray.allEqual([1, 2, 3]), false);
});
