/**
 * @jest-environment jsdom
 */

import { list } from '../src/modules/class.js';

describe('add and remove tests', () => {
  beforeEach(() => {
    window.localStorage.clear();
  });
  it('add test', () => {
    list.add('example');
    const example = JSON.parse(localStorage.getItem('tasklist'));
    expect(example).toEqual([
      {
        description: 'example',
        completed: false,
        index: 0,
      },
    ]);
  });
});