<template>
    <div>
        <b-navbar toggleable type="light" variant="info" toggle-breakpoint="md" fixed="top">

            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand href="#">NavBar</b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">

                <b-navbar-nav>
                    <b-nav-item href="#">Link</b-nav-item>
                    <b-nav-item href="#" disabled>Disabled</b-nav-item>
                </b-navbar-nav>

                <!-- Right aligned nav items -->
                <b-navbar-nav class="ml-auto">

                    <b-nav-form>
                        <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
                        <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                    </b-nav-form>

                    <b-nav-item-dropdown text="Lang" right>
                        <b-dropdown-item href="#">EN</b-dropdown-item>
                        <b-dropdown-item href="#">ES</b-dropdown-item>
                        <b-dropdown-item href="#">RU</b-dropdown-item>
                        <b-dropdown-item href="#">FA</b-dropdown-item>
                    </b-nav-item-dropdown>

                    <b-nav-item-dropdown right>
                        <!-- Using button-content slot -->
                        <template slot="button-content">
                            <em>User</em>
                        </template>
                        <b-dropdown-item href="#">Profile</b-dropdown-item>
                        <b-dropdown-item href="#">Signout</b-dropdown-item>
                    </b-nav-item-dropdown>
                </b-navbar-nav>

            </b-collapse>
        </b-navbar>
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
    </div>
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
      this.$axios.get('/api/users').then(response => {
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
