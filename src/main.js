import { createApp } from 'vue';
import App from './App.vue';
import '@fontsource/merriweather';
import '@fontsource-variable/heebo';
import '@fontsource-variable/open-sans';
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
	faUser,
	faTag,
	faXmark,
	faPhoneVolume,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHeart, faClock } from '@fortawesome/free-regular-svg-icons';

library.add(
	faBagShopping,
	faMagnifyingGlass,
	faBars,
	faAngleLeft,
	faAngleRight,
	faCheck,
	faUser,
	faTag,
	faXmark,
	faPhoneVolume,
	faAngleUp,
	faClock,
	faHeart,
	faTwitter,
	faFacebook,
	faInstagram
);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
