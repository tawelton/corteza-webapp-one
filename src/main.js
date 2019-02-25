import Vue from 'vue'
import Index from './views/Index.vue'

import './global'
import './plugins'
import './main.scss'

import router from './router'
import store from './store'
import logger from './logger'
import * as VueGoogleMaps from 'vue2-google-maps'

/* eslint-disable no-undef */
logger.log(
  `%cCrust CRM, version: ${CRUST_VERSION}, build time: ${CRUST_BUILD_TIME}`,
  'background-color: #1397CB; color: white; padding: 3px 10px; border: 1px solid black; font: Courier',
)

if (window.CrustConfig === undefined) {
  alert('Unexisting or invalid configuration. Make sure there is a public/config.js configuration file.')
} else {
  try {
    Vue.use(VueGoogleMaps, {
      load: {
        key: window.CrustConfig.webapp.apps.googlemaps.apiKey,
        libraries: 'places', // necessary for places input
      },
    })
  } catch (err) {
    alert(err.message)
  }

  new Vue({
    router,
    store,
    render: h => h(Index),
  }).$mount('#app')
}
