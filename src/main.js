import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import { createApp } from 'vue'
import App from './App.vue'
import Helpers from './Helpers/Helpers';
import axios from "axios";
import router from './route';
import vueValidate from './plugins/vueValidate';
const app = createApp(App);
const instance = axios.create({
  baseURL: 'https://fakestoreapi.com/',
  headers: {
  },
});
// Create an instance of the Helpers class
const helpersInstance = new Helpers();
// Attach the instance to the Vue prototype
app.config.globalProperties.helpers = helpersInstance;
app.config.globalProperties.axios=instance
const requireComponent = require.context('./components', true, /App[A-Z]\w+\.(vue|js)$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  const baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  app.component(baseComponentName, baseComponentConfig)
})
app.use(router).use(vueValidate).mount('#app')
