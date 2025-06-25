// -----all dom

let todohead_input = document.querySelector('.todohead_input')
let all_todolist = document.querySelector('.all_todolist')
let total_task = document.querySelector('.total_task')
let complete_task = document.querySelector('.complete_task')
let totaltask = 0
total_task.innerHTML = totaltask
let completetask = 0
complete_task.innerHTML = completetask
let handelAddtodo = ()=>{
    // -------input empty error
    let taskText = todohead_input.value.trim();
    if(taskText === ""){
        alert("Please enter a text before adding")
        return;
    }
    // -------- Task count
    totaltask++
    total_task.innerHTML = totaltask
    // --------creating element
    let div = document.createElement('div')
    let single_todoInput = document.createElement('input')
    let edit_btn = document.createElement('button')
    let remove_btn = document.createElement('button')
    // --------creating child
    all_todolist.appendChild(div)
    div.appendChild(single_todoInput)
    div.appendChild(edit_btn)
    div.appendChild(remove_btn)
    // --------adding class
    div.classList.add('single_todo')
    div.classList.add('single_todo-input')
    div.classList.add('todo_btn')
    div.classList.add('todo_btn-button')
    edit_btn.classList.add('edit_btn')
    remove_btn.classList.add('remove_btn')
    // --------adding content
    edit_btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>'
    remove_btn.innerHTML = '<i class="fa-solid fa-trash"></i>'

    single_todoInput.value = todohead_input.value
    todohead_input.value = ''
    single_todoInput.setAttribute('readonly','readonly')
    // -------delete todo
    remove_btn.addEventListener('click' , ()=>{
        div.remove(remove_btn)
        totaltask--
        total_task.innerHTML = totaltask
        if (completetask > 0){
            completetask--
        }
        complete_task.innerHTML = completetask
    })
    edit_btn.addEventListener('click' , ()=>{
        edit_btn.innerHTML = '<i class="fa-solid fa-check"></i>'
        edit_btn.style='background:#5B913B ; font-size:18px ;'
        single_todoInput.style='border-bottom: 1px solid gray;'
        single_todoInput.removeAttribute('readonly','readonly')
        edit_btn.addEventListener('click' , ()=>{
            edit_btn.remove(edit_btn)
            single_todoInput.setAttribute('readonly','readonly')
            single_todoInput.style='border:none'
            completetask++
            complete_task.innerHTML = completetask
        })
    })
}
