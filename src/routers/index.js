import React from 'react';
import Cart from '../pages/Cart';
import HistoryCart from '../pages/HistoryCart';
import ProductsPages from '../pages/ProductsPages';
const HomePages = React.lazy(() => import('../pages/HomePages'))
const Deatil = React.lazy(() => import('../pages/Deatil'))
//const Login = React.lazy(() => import('../pages/Login'))
const Register = React.lazy(() => import('../pages/Register'))
const NotFound = React.lazy(() => import('../pages/NotFound'))

const Routes = [
    {
        component: HomePages,
        extra: true,
        path: '/'
    },

    {
        component: Deatil,
        extra: true,
        path: '/deatil/:name.:id.html'
    },

    // {
    //     component: Login,
    //     extra: true,
    //     path: '/login'
    // },

    {
        component: Register,
        extra: true,
        path: '/register'
    },

    {
        component: ProductsPages,
        extra: true,
        path: '/products'
    },

    {
        component: Cart,
        extra: true,
        path: '/carts'
    },

    {
        component: HistoryCart,
        extra: true,
        path: '/history'
    },

    {
        component: NotFound,
        extra: true,
        path: '*',
        isPrivate: false
    },

]

export default Routes