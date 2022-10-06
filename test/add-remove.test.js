/**
 * @jest-environment jsdom
 */

import { TaskList } from '../src/modules/class.js';

describe('add and remove tests', () => {
  it('add item to the DOM', () => {
    const divTask = document.createElement('div');
    divTask.classList.add('field');
    divTask.id = 0;
    const divInput = document.createElement('div');
    divInput.classList.add('inputcontainer');
    const label = document.createElement('label');
    label.htmlFor = 0;
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('task');
    const divText = document.createElement('div');
    divText.classList.add('tasktext');
    divText.textContent = 'test';
    label.appendChild(input);
    label.appendChild(divText);
    divInput.appendChild(label);
    // Append the input container to the task div
    divTask.appendChild(divInput);
    // Append the div to the task list
    document.body.appendChild(divTask);
    expect(document.querySelector('.field').id).toBe('0');
  });

  it('remove item from container', () => {
    const taskList = new TaskList();
    taskList.add('test');
    taskList.add('test2');
    taskList.remove(0);
    expect(taskList.container.length).toBe(1);
  });

  it('remove item from the DOM', () => {
    const divTask = document.createElement('div');
    divTask.classList.add('field');
    divTask.id = 'field-0';
    const divInput = document.createElement('div');
    divInput.classList.add('inputcontainer');
    const label = document.createElement('label');
    label.htmlFor = 'field-0';
    const input = document.createElement('input');
    input.type = 'checkbox';
    input.classList.add('task');
    const divText = document.createElement('div');
    divText.classList.add('tasktext');
    divText.textContent = 'test';
    label.appendChild(input);
    label.appendChild(divText);
    divInput.appendChild(label);
    // Append the input container to the task div
    divTask.appendChild(divInput);
    // Append the div to the task list
    document.body.appendChild(divTask);
    document.querySelector('#field-0').remove();
    // Add a new task
    const divTask2 = document.createElement('div');
    divTask2.classList.add('field');
    divTask2.id = 'field-1';
    const divInput2 = document.createElement('div');
    divInput2.classList.add('inputcontainer');
    const label2 = document.createElement('label');
    label2.htmlFor = 'field-1';
    const input2 = document.createElement('input');
    input2.type = 'checkbox';
    input2.classList.add('task');
    const divText2 = document.createElement('div');
    divText2.classList.add('tasktext');
    divText2.textContent = 'test2';
    label2.appendChild(input2);
    label2.appendChild(divText2);
    divInput2.appendChild(label2);
    // Append the input container to the task div
    divTask2.appendChild(divInput2);
    // Append the div to the task list
    document.body.appendChild(divTask2);
    expect(document.querySelector('#field-0')).toBe(null);
  });
});