<template>
    <div id="linkpage">
        <div id="nv">
            <LinkGroup v-for="item of links" :linkGroups="item.linkGroups" :groupName="item.groupName"/>
        </div>
        <div id="iloveu">
            <p>I Love U</p>
            <img :src="love">
        </div>
    </div>
</template>

<script>
    import LinkGroup from './LinkGroup.vue'
    import love from './../../static/images/love.png'
    import links from './../../static/links.json'
    import Navigation from './Navigation.vue'

    export default {
        name: "LinkPage",
        components: {
            Navigation,
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
    #iloveu {
        clear: left;
    }

    #linkpage {
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        -webkit-box-orient: vertical;
        text-align: center;
    }

    li {
        margin: 10px;
    }

</style>