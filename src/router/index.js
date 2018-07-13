import Vue from 'vue'
import Router from 'vue-router'
import AbAudio from '@/components/AbAudio'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/ab_audio'
    },
    {
      path: '/ab_audio',
      name: 'AbAudio',
      component: AbAudio
    }
  ]
})
