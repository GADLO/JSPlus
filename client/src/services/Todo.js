import { httpGet, httpPost } from "../libs/http";
import { TODO_API } from "../config/api";

async function getTodoList() {
    return await httpGet(TODO_API.GET_TODOLIST)
}

async function getTodo(id) {
    return await httpPost(TODO_API.GET_TODOLIST, { id })
}

async function addTodo(todo) {
    return await httpPost(TODO_API.ADD_TODO, { todo })
}

async function toggleTodo(id) {
    return await httpPost(TODO_API.TOGGLE_TODO, { id })
}

async function removeTodo(id) {
    return await httpPost(TODO_API.REMOVE_TODO, { id })
}


export default {
    getTodoList,
    getTodo,
    addTodo,
    toggleTodo,
    removeTodo
}