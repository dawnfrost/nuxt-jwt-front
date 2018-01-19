<template>
    <section class="container">
        <div>
            <logo/>
            <h1 class="title" id="xxx">
                front
            </h1>
            <h1>{{date}}</h1>
            <h2>{{getDataSourceId}}</h2>
            <h3>{{getCounter}}</h3>
            <h3>{{getUserId}}</h3>
            <el-button type="primary">aaasssss</el-button>
            <div class="links">
                <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
                <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
            </div>
        </div>
    </section>
</template>

<script>
    import Logo from '~/components/Logo.vue';
    import {mapGetters, mapMutations} from 'vuex';
    import $ from 'jquery';

    export default {
        name: 'index',
        components: {
            Logo
        },
        serverCacheKey() {
            // Will change every 10 secondes
            return Math.floor(Date.now() / 10000);
        },
        data() {
            return {
                date: Date.now()
            };
        },
        computed: {
            ...mapGetters({
                getDataSourceId: 'getDataSourceId',
                getCounter: 'getCounter',
                getUserId: 'user/getId'
            })
        },
        mounted() {
            $('#xxx').text('front ---  aaa');
            this.$axios.get('http://localhost:8090/pws/test/1').then(response => {
                console.log(response);
            });
        },
        methods: {
            ...mapMutations([
                'increment'
            ])
        }
    };
</script>

<style scoped lang="less">
    h1 {
        background-color: bisque;
    }

    .container {
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .title {
        font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
        display: block;
        font-weight: 300;
        font-size: 100px;
        color: #35495e;
        letter-spacing: 1px;
    }

    .subtitle {
        font-weight: 300;
        font-size: 42px;
        color: #526488;
        word-spacing: 5px;
        padding-bottom: 15px;
    }

    .links {
        padding-top: 15px;
    }
</style>
