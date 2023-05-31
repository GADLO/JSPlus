import router from '../libs/router'
import {
    HomeView,
    DetailView,
    homeScript,
    detailScript
} from '../controllers/Todo'
import { MouseView, mouseScript } from '../controllers/Mouse';
import { MouseOverView, mouseOverScript } from '../controllers/MouseOver';
import { LabView, labScript } from '../controllers/Lab';
import { SearchView, searchScript } from '../controllers/SearchBox';
import { ForcastMouseView, forcastMouseScript } from '../controllers/ForcastMouse';
import { MagnifierView, magnifierScript } from '../controllers/Magnifier';
import { KeyboardView, keyboardScript } from '../controllers/Keyboard';
import { IconView, IconScript } from '../controllers/Icon';
import { CssWorldView, CssWorldScript } from '../controllers/CssWorld';




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
    {
        path: '/search',
        view: SearchView,
        script: searchScript
    },
    {
        path: '/mouseover',
        view: MouseOverView,
        script: mouseOverScript
    },
    {
        path: '/forcastmouse',
        view: ForcastMouseView,
        script: forcastMouseScript
    },
    {
        path: '/mag',
        view: MagnifierView,
        script: magnifierScript
    },


    {
        path: '/keyboard',
        view: KeyboardView,
        script: keyboardScript
    },
    {
        path: '/icon',
        view: IconView,
        script: IconScript
    },
    {
        path: '/cssworld',
        view: CssWorldView,
        script: CssWorldScript
    },
])