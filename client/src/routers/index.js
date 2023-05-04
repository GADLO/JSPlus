import router from '../libs/router'
import {
    HomeView,
    DetailView,
    homeScript,
    detailScript
} from '../controllers/Todo'
import { MouseView, mouseScript } from '../controllers/Mouse'

export default router([
    {
        path: '/',
        view: HomeView,
        script: homeScript
    },
    {
        path: '/detail/:id',
        view: DetailView,
        script: detailScript
    },
    {
        path: '/mouse',
        view: MouseView,
        script: mouseScript
    },
])