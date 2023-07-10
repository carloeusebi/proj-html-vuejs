import { createApp } from 'vue';
import App from './App.vue';
import '@fontsource/merriweather';
import '@/assets/sass/index.scss';
import * as bootstrap from 'bootstrap';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
	faMagnifyingGlass,
	faBars,
	faBagShopping,
	faAngleLeft,
	faAngleRight,
	faCheck,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBagShopping, faMagnifyingGlass, faBars, faAngleLeft, faAngleRight, faCheck);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
