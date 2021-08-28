import test from 'ava';
import main from './index.js';

test('main()', (t) => {
	t.is(main('hello'), true);
	t.is(main(223), false);
});
