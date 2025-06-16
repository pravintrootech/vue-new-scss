import '@assets/main.css'
import '@mdi/font/css/materialdesignicons.css'

import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { createPinia } from 'pinia'
import router from './router';

const app = createApp(App)
app.use(router);
app.use(createPinia())
app.use(vuetify)
app.mount('#app')