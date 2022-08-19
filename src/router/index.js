import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadiobutton from '../views/DataBindingRadiobutton.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: DataBinding
  },
  {
    path: '/inputtext',
    name: 'DataBindingInputText',
    component: DataBindingInputText
  },
  {
    path: '/inputnumber',
    name: 'DataBindingInputNumber',
    component: DataBindingInputNumber
  },
  {
    path: '/select',
    name: 'Select',
    component: DataBindingSelect
  },
  {
    path: '/checkbox',
    name: 'checkbox',
    component: DataBindingCheckbox
  },
  {
    path: '/checkbox2',
    name: 'checkbox2',
    component: DataBindingCheckbox2
  },
  {
    path: '/radiobutton',
    name: 'radiobutton',
    component: DataBindingRadiobutton
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
