import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/home';
import tensorflow from '@/components/tensorflow';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: home,
        },
        {
            path: '/tensorflow',
            name: 'tensorflow',
            component: tensorflow,
        },
    ],
});
