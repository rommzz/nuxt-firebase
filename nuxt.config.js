export default {
	target: 'static',
	env: {
		API_KEY: process.env.API_KEY,
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		DATABASE_URL: process.env.DATABASE_URL,
		PROJECT_ID: process.env.PROJECT_ID,
		STORAGE_BUCKET: process.env.STORAGE_BUCKET,
		MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
		APP_ID: process.env.APP_ID,
		MEASUREMENT_ID: process.env.MEASUREMENT_ID,
	},

	server: {     
    port: 3000, // default: 3000     
    host: '0.0.0.0', // default: localhost   
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-firebase',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
		'~/plugins/firebase.js',
    { ssr: false, src: '~plugins/userLogin.js' }
	],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
		'@nuxtjs/toast',
  ],

	fontawesome: {
		icons: {
			solid: true,
			brands: true
		}
	},

	toast: {
		position: 'top-center',
		duration: '2000',
		register: [ // Register custom toasts
			{
				name: 'my-error',
				message: 'Oops...Something went wrong',
				options: {
					type: 'error'
				}
			}
		]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  }
}
