import React from 'react';
import { useRouteMatch } from 'react-router';
const HomePages = React.lazy(() => import('../pages/HomePages'))
const Deatil = React.lazy(() => import('../pages/Deatil'))
const Login = React.lazy(() => import('../pages/Login'))
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
        path: '/detail'
    },

    {
        component: Login,
        extra: true,
        path: '/login'
    },

    {
        component: Register,
        extra: true,
        path: '/register'
    },

    {
        component: NotFound,
        extra: true,
        path: '*',
        isPrivate: false
    },

]

export default Routes