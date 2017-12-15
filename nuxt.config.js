module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [
            {charset: 'utf-8'},
            {name: 'viewport', content: 'width=device-width, initial-scale=1'}
        ],
        link: [
            {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
        ]
    },
    /*
     ** Global CSS
     */
    css: [{
        src: '~/assets/css/main.less',
        lang: 'less'
    }],
    plugins: [],
    modules: [
        '@nuxtjs/axios'
    ],
    axios: {
        credentials: true,
        requestInterceptor: (config, {store, route, app: {router}}) => {
            console.log(config, store, route, router);
            // if (store.state.token) {
            //     config.headers.common['Authorization'] = 'aaaaa';
            // }
            return config;
        }
    },
    /*
     ** Add axios globally
     */
    build: {
        vendor: [
            'jquery',
            'lodash'
        ],
        postcss: [
            require('postcss-nested')(),
            require('postcss-responsive-type')(),
            require('postcss-hexrgba')()
        ],
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                });
            }
        }
    },
    render: {
        bundleRenderer: {
            cache: require('lru-cache')({
                max: 1000,
                maxAge: 1000 * 60 * 15
            }),
            shouldPreload: (file, type) => {
                return ['script', 'style', 'font'].includes(type);
            }
        }
    }
};
