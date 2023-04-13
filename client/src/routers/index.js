import router from '../libs/router'
import {
    HomeView,
    DetailView,
    homeScript,
    detailScript
} from '../controllers/Todo'

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
])