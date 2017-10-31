import Vue from 'vue'
import App from './App.vue'
import SearchAD from './components/SearchAD.vue'

Vue.component('searchad-comp', SearchAD)

new Vue({
  el: '#app',
  render: h => h(App)
})
