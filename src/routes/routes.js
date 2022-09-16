import config from '../config';

import Home from '../pages/Home'
import Profile from '../pages/Profile';
import Details from '../pages/Products/Details'

import SliderLayout from '../layouts/SliderLayout'

const publicRoutes = [
    { path: config.routes.home, component: Home, layout: SliderLayout },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.details, component: Details }
];

export { publicRoutes }