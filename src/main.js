import Vue from 'vue'
import App from './App.vue'
import SearchComp from './components/SearchComp.vue'

Vue.component('search-comp', SearchComp)

new Vue({
  el: '#app',
  render: h => h(App)
})
