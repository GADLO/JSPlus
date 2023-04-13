import router from '../libs/router'
import {
    HomeView,
    DetailView
} from '../controllers/Todo'

export default router([
    {
        path: '/',
        view: HomeView,
        script: ''
    },
    {
        path: '/detail/:id',
        view: DetailView,
        script: ''
    },
])