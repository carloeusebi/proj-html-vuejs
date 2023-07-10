import { createApp } from 'vue';
import App from './App.vue';
import '@fontsource/merriweather';
import '@/assets/sass/index.scss';
import * as bootstrap from 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass, faBars, faBagShopping } from '@fortawesome/free-solid-svg-icons';

library.add(faBagShopping, faMagnifyingGlass, faBars);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
