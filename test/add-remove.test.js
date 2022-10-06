/**
 * @jest-environment jsdom
 */

import { TaskList } from '../src/modules/class.js';

import display from '../src/modules/display.js';

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

  it('remove item from the container', () => {
    const taskList = new TaskList();
    taskList.add('test');
    taskList.remove(0);
    expect(taskList.container.length).toBe(0);
  });

  it('add item to the array', () => {
    const taskList = new TaskList();
    taskList.add('test');
    expect(taskList.container[0].description).toBe('test');
  });

  it('display content of TaskList in HTML', () => {
    document.body.innerHTML = '<div id="dynamiccontainer" class="wide"></div>';
    const tasklist = document.querySelector('#dynamiccontainer');
    display();
    expect(tasklist.innerHTML).toEqual(`<div class="field" id="0">
    <div class="inputcontainer">
      <label for="0"><input type="checkbox" class="task"><div class="tasktext false">test</div></label>
    </div>
    <button class="listbutton" id="button0" type="button" title="Change Task"><ion-icon name="ellipsis-vertical"></ion-icon></button>
  </div>`);
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

  it('edit the task description on the DOM', () => {
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
    divText.textContent = 'test2';
    expect(divText.textContent).toBe('test2');
  });

  it('edit the task description on the array', () => {
    const taskList = new TaskList();
    taskList.add('test');
    // Get the target of the event
    const target = document.querySelector('.tasktext');
    // Get the index of the task
    const index = target.parentElement.parentElement.parentElement.id;
    // Get the task
    const task = taskList.container[index];
    // Edit the task
    task.description = 'test2';
    expect(task.description).toBe('test2');
  });
});