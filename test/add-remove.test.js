/**
 * @jest-environment jsdom
 */

import { TaskList } from '../src/modules/class.js';

import display from '../src/modules/display.js';

const list = new TaskList();

describe('add and remove tests', () => {
  it('add test', () => {
    list.add('example');
    list.add('example1');
    const example = JSON.parse(localStorage.getItem('tasklist'));
    expect(example.length).toEqual(2);
  });
  it('remove test', () => {
    list.remove(0);
    const example = JSON.parse(localStorage.getItem('tasklist'));
    expect(example).toEqual([
      {
        description: 'example1',
        completed: false,
        index: 0,
      },
    ]);
  });
  it('display test', () => {
    document.body.innerHTML = '<div id="dynamiccontainer" class="wide"></div>';
    const tasklist = document.querySelector('#dynamiccontainer');
    display();
    expect(tasklist.innerHTML).toEqual(`<div class="field" id="0">
    <div class="inputcontainer">
      <label for="0"><input type="checkbox" class="task"><div class="tasktext false">example1</div></label>
    </div>
    <button class="listbutton" id="button0" type="button" title="Change Task"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`);
  });
});