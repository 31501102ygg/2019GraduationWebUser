import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/views/main_page'
import HomePage from '@/views/home_page'
import MoviePage from '@/views/movie_page'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Main,
      children: [{
        path: 'home',
        component: HomePage
      },
      {
        path: 'movie',
        component: MoviePage
      }]
    }
  ]
})
