// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново

import { strict as assert } from 'assert';
import { capitalize } from '../src/capitalize.js';

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');
assert.strictEqual(capitalize('hello'), 'hello'); // err