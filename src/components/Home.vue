<template>
    <div id="home">
        <el-container>
            <el-header>
                <Navigation/>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import Navigation from './Navigation.vue'

    export default {
        name: "Home",
        components: {
            Navigation
        }
    }
</script>

<style scoped>
    /*.el-header, .el-footer {*/
    /*    !*background-color: #B3C0D1;*!*/
    /*    !*color: #333;*!*/
    /*    text-align: center;*/
    /*    line-height: 60px;*/
    /*}*/

    /*.el-main {*/
    /*    background-color: #E9EEF3;*/
    /*    color: #333;*/
    /*    text-align: center;*/
    /*    line-height: 260px;*/
    /*}*/
</style>