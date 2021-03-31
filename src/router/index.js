import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import PageNotFound from "@/views/PageNotFound";

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/discord', beforeEnter(){ window.location = "https://www.discord.gg/mFQMxqx"; }},
    { path: '/twitter', beforeEnter(){ window.location = "https://twitter.com/freezlex"; }},
    { path: '/github', beforeEnter(){ window.location = "https://github.com/freezlex"; }},
    { path: '/youtube', beforeEnter(){ window.location = "https://www.youtube.com/channel/UCkExyZZOlvhZv_3h_HaPYYw"; }},
    { path: '/:pathMatch(.*)*', component: PageNotFound }
]
});

export default router
