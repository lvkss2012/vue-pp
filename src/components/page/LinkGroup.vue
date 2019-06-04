<template>
    <div class="nav_addr">
        <h3>{{groupName}}</h3>
        <ul>
            <LinkRow v-for="links of linkGroups" :links="links"/>
        </ul>
    </div>
</template>

<script>
    import LinkRow from './LinkRow.vue';

    export default {
        name: "LinkGroup",
        components: {
            LinkRow
        },
        props: {
            groupName: String,
            linkGroups: Array
        }
    }
</script>

<style scoped>
    .nav_addr {
        float: left;
        margin: 0px 20px;
    }
</style>