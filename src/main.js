import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import VueTaber from 'vue-tabs'
// import '../vue-tabs.css'
// import tabs from './tabs.js'
// import MaterialDashboard from "./material-dashboard";


// const vueTaber = new VueTaber({
//     tabs
// })

// Vue.use(MaterialDashboard);

// new Vue({
//     el: "#app",
//     render: h => h(App),
//     router
//   });
  
const v3App = createApp(App)

v3App.use(router)
// v3App.use(VueTaber)
// v3App.taber(vueTaber)
// v3App.use(MaterialDashboard)
v3App.mount('#app')
