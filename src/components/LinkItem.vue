<template>
    <el-link class="linkitem" type="success" :href="url" target="_blank" :underline="false">{{name}}</el-link>
</template>

<script>
    export default {
        name: "LinkItem",
        props: {
            name: String,
            url: String
        }
    }
</script>

<style scoped>
    .linkitem {
        padding-left: 5px;
    }
</style>