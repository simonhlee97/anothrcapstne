<template>
    <div>
        <app-header></app-header>
        <router-view></router-view>
    </div>
</template>

<script>
// Imports
import showBlogs from './components/showBlogs.vue';
import header from './components/header.vue';

export default {
    components: {
        'app-header': header
    },
    data () {
        return {

        }
    },
    methods: {

    }
}
</script>

<style>
body {
    margin: 0;
    color: white;
    font-family: Helvetica, Arial, sans-serif;
    background-image: url('./assets/baseball.jpg');
    background-position: center center;
    -webkit-background-size: cover;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
  /* height: 100%;
  min-height: 100%; */
}
</style>
