import Vue from 'vue'
import Router from 'vue-router'
import home from "@/components/pages/home.vue"
import about from "@/components/pages/about.vue"
import fournotfour from "@/components/pages/fournotfour.vue"
import courses from "@/components/pages/courses.vue"
import news from "@/components/pages/news.vue"
import placements from "@/components/pages/placements.vue"
import contact from "@/components/pages/contact.vue"


Vue.use(Router)
export default new Router({
    mode:"history",
    routes:[
        {
            path: '/',
            name:'home',
            component:home
        },
        {
            path:"/about",
            name:'about',
            component:about
        },
        {
            path:"/courses",
            name:'courses',
            component:courses
        },
        {
            path:"/news",
            name:'news',
            component:news
        },
        {
            path:"/placements",
            name:'placements',
            component:placements
        },
        {
            path:"/contact",
            name:'contact',
            component:contact
        },
        {
            path:"*",
            name:'404',
            component:fournotfour
        }
    ]
})