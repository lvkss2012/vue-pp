<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-nav"
            mode="horizontal">
        <el-menu-item index="1">导航</el-menu-item>
        <el-menu-item index="2">文章</el-menu-item>
    </el-menu>
</template>

<script>
    export default {
        name: "Navigation",
        data() {
            return {
                activeIndex: '1'
            };
        }
    }
</script>

<style scoped>

</style>