import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import DataBindingInputText from '../views/DataBindingInputText.vue'
import DataBindingInputNumber from '../views/DataBindingInputNumber.vue'
import DataBindingSelect from '../views/DataBindingSelect.vue'
import DataBindingCheckbox from '../views/DataBindingCheckbox.vue'
import DataBindingCheckbox2 from '../views/DataBindingCheckbox2.vue'
import DataBindingRadiobutton from '../views/DataBindingRadiobutton.vue'
import DataBindingAttribute from '../views/DataBindingAttribute.vue'
import DataBindingClass from '../views/DataBindingClass.vue'
import DataBindingClass2 from '../views/DataBindingClass2.vue'
import DataBindingStyle from '../views/DataBindingStyle.vue'
import DataBindingList from '../views/DataBindingList.vue'
import RenderingVif from '../views/RenderingVif.vue'
import EventClick from '../views/EventClick.vue'
import EventChange from '../views/EventChange.vue'
import EventKey from '../views/EventKey.vue'
import Watch from '../views/WatchChange.vue'
import Computed from '../views/ComputedChange.vue'
import DataBindingList2 from '../views/DataBindingList2.vue'
import NestedComponent from '../views/NestedComponent.vue'
import ParentComponent from '../views/ParentComponent5.vue'
import StoreAccess from '../views/StoreAccess.vue'

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
  },
  {
    path: '/attribute',
    name: 'attribute',
    component: DataBindingAttribute
  },
  {
    path: '/class',
    name: 'class',
    component: DataBindingClass
  },
  {
    path: '/class2',
    name: 'class2',
    component: DataBindingClass2
  },
  {
    path: '/style',
    name: 'style',
    component: DataBindingStyle
  },
  {
    path: '/list',
    name: 'list',
    component: DataBindingList
  },
  {
    path: '/vif',
    name: 'vif',
    component: RenderingVif
  },
  {
    path: '/eventclick',
    name: 'eventclick',
    component: EventClick
  },
  {
    path: '/eventchange',
    name: 'eventchange',
    component: EventChange
  },
  {
    path: '/eventkey',
    name: 'eventkey',
    component: EventKey
  },
  {
    path: '/computed',
    name: 'computed',
    component: Computed
  },
  {
    path: '/watch',
    name: 'watch',
    component: Watch
  },
  {
    path: '/databindinglist2',
    name: 'databindinglist2',
    component: DataBindingList2
  },
  {
    path: '/nested',
    name: 'nested',
    component: NestedComponent
  },
  {
    path: '/childevent',
    name: 'childevent',
    component: ParentComponent
  },
  {
    path: '/store',
    name: 'store',
    component: StoreAccess
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
