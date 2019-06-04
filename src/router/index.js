import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/links'
        },
        {
            path: '/',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children: [
                {
                    path: '/links',
                    component: resolve => require(['../components/page/LinkPage.vue'], resolve),
                    meta: {title: '导航'}
                },
                {
                    path: '/articles',
                    component: resolve => require(['../components/page/ArticluePage.vue'], resolve),
                    meta: {title: '文章'}
                },
                {
                    path: '/donates',
                    component: resolve => require(['../components/page/DonatePage.vue'], resolve),
                    meta: {title: '打赏'}
                },
                {
                    path: '/404',
                    component: resolve => require(['../components/page/404.vue'], resolve),
                    meta: {title: '404'}
                },
            ]
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
})
