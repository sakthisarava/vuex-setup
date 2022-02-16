import { createApp } from 'vue';
// import { createStore } from 'vuex';
import store from './store/index.js';

import App from './App.vue';

// const Store = createStore({
//     state() {
//         return {
//             counter: 0
//         };
//     }
// });

const app = createApp(App);

app.use(store);

app.mount('#app');
