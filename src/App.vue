<template>
    <div id="app">
        <div id="nv">
            <LinkGroup v-for="item of links" :linkGroups="item.linkGroups" :groupName="item.groupName"/>
        </div>
        <div>
            <p>I Love U</p>
            <img :src="love">
        </div>
    </div>
</template>

<script>
    import LinkGroup from './components/LinkGroup.vue'
    import love from './../static/images/love.png'
    import links from './../static/links.json'

    export default {
        name: "app",
        components: {
            LinkGroup
        },
        data: function () {
            return {
                love: love,
                links: links
            }
        }
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

    #app {
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        -webkit-box-orient: vertical;
        text-align: center;
        padding-top: 60px;
    }

    li {
        margin: 10px;
    }
</style>