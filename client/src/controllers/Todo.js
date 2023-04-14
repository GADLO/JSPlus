import Home from "../views/Home";
import Detail from "../views/Detail";
import TodoService from '../services/Todo'

export async function HomeView() {
    // const todolist = await TodoService.getTodoList()
    return Home()
}


export async function DetailView() {
    // const todo = await TodoService.getTodo()
    return Detail()
}

export async function homeScript() {
    console.log('home');
}


export async function detailScript() {
    console.log('detail');
}