import Home from "../views/Home";
import Detail from "../views/Detail";

export async function HomeView() {
    return Home()
}


export async function DetailView() {
    return Detail()
}