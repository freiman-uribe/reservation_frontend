import { createApp } from 'vue';  // Importación de createApp en Vue 3
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';

const app = createApp(App);  // Creación de la aplicación en Vue 3

app.use(router);  // Usar el router
app.use(vuetify);  // Usar Vuetify

app.mount('#app');  // Montar la aplicación en el div con id "app"
