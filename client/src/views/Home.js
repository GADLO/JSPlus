import header from "../components/header"
import content from "../components/content"
import footer from "../components/footer"
import common from '../styles/common.css'


export default function Home(Todolist) {
    return (`
    ${header()}
    ${content()}
    ${footer()}
    `)
}