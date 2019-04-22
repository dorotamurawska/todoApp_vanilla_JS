const formAddTask = document.querySelector('form.add-task');
const btnAddTask = document.querySelector('.add-task button');
const ulAddTask = document.querySelector('ul.add-task');
const inputAddTask = document.querySelector('.add-task input');
const inputSearchTask = document.querySelector('input.search-task');
const btnSearchTask = document.querySelector('button.search-task');
let taskArray = [];
const btnRemomveTaskArray = [];

const createNameTask = () => {
    const inputValue = inputAddTask.value;
    return inputValue;
};

const addTaskToList = (e) => {
    e.preventDefault();
    nameTask = createNameTask();
    if (nameTask === '') return;
    if (taskArray.filter(li => li.innerHTML === `${nameTask} <button>x</button>`).length > 0) return
    const liAddTask = document.createElement('li');
    liAddTask.innerHTML = `${nameTask} <button>x</button>`;
    taskArray.push(liAddTask);
    taskArray.forEach(li => ulAddTask.appendChild(li));
    inputAddTask.value = '';
    const btnRemomveTask = document.querySelector('li button');
    btnRemomveTaskArray.push(btnRemomveTask);
}

const removeTask = (e) => {
    if (e.target.textContent === `x`) {
        e.target.parentNode.remove();
        taskArray = taskArray.filter(text => text.textContent != e.target.parentNode.textContent);
        btnRemomveTaskArray.length = taskArray.length;
    }
}

const searchTask = () => {
    const searchElements = taskArray.filter(element => element.textContent.includes(inputSearchTask.value));
    ulAddTask.textContent = '';
    searchElements.forEach(li => ulAddTask.appendChild(li));
    if (inputSearchTask.value === '') {
        taskArray.forEach(li => ulAddTask.appendChild(li));
    }
}

formAddTask.addEventListener('input', createNameTask);
btnAddTask.addEventListener('click', addTaskToList);
ulAddTask.addEventListener('click', removeTask);
inputSearchTask.addEventListener('input', searchTask);

//ToDo add style in css, make page more responsive