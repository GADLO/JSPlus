import router from '../libs/router'
import {
    HomeView,
    DetailView,
    homeScript,
    detailScript
} from '../controllers/Todo'
import { MouseView, mouseScript } from '../controllers/Mouse';
import { LabView, labScript } from '../controllers/Lab'

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
    {
        path: '/lab',
        view: LabView,
        script: labScript
    },
])