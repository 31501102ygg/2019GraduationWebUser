import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/main_page'
import HomePage from '@/views/home_page'
import MoviePage from '@/views/movie_page'
import MovieInfoPage from '@/views/movie_info_page'
import PersonalInfoPage from '@/views/personal_info'
import CommentaryEdit from '@/views/commentary_edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
      children: [{
        path: 'home',
        component: HomePage
      },
      {
        path: 'movie',
        component: MoviePage
      },
      {
        path: 'movie_info',
        component: MovieInfoPage
      },
      {
        path: 'personal_info',
        component: PersonalInfoPage
      },
      {
        path: 'commentary_edit',
        component: CommentaryEdit
      }
    ]
    }
  ]
})
