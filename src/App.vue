<template>
    <div id="app">
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "app",
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }

    body {
        background-color: #f2f4f7;
    }


</style>