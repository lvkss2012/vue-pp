<template>
    <!--  .vue文件组件template下只允许有一个根节点-->
    <li>
        <LinkItem v-for="link of links" :name="link.name" :url="link.url"/>
    </li>

</template>

<script>
    import LinkItem from './LinkItem.vue';

    export default {
        name: "LinkRow",
        components: {
            LinkItem
        },
        props: {
            links: Array
        }
    }
</script>

<style scoped>
    li {
        margin-left: 0px;
    }
</style>