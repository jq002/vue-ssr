
import Vue from 'vue';
import Router from 'vue-router';
import Home from './../pages/home'
// import Hello from './../pages/hello'

Vue.use(Router);
export function createRouter(){
    return new Router({
        mode:'history',
        routes:[
            {
                path:'/',
                component:Home
            },{
                path:'/hello',
                component:()=>import('./../pages/hello.vue')
            },{
                path:'/item/:id',
                component:()=>import('./../pages/item.vue')
            }
        ]
    })
}