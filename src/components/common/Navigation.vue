<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-nav"
            mode="horizontal"
            router
    >
        <el-menu-item index="hrManager" key="hrManager">管理</el-menu-item>
        <el-menu-item index="links" key="links">导航</el-menu-item>
        <el-menu-item index="articles" key="articles">文章</el-menu-item>
        <el-menu-item index="donates" key="donates">打赏</el-menu-item>
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