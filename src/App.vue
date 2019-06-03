<template>
    <div id="app">
        <LinkRow :links="links"/>
    </div>
</template>

<script>
    import LinkRow from './components/LinkRow.vue'

    export default {
        name: "app",
        components: {
            LinkRow
        },
        data: function () {
            return {
                links: [
                    {
                        name: 'baidu',
                        url: 'http://www.baidu.com'
                    },
                    {
                        name: 'baidu1',
                        url: 'http://www.baidu.com'
                    }
                ]
            }
        }
    }
</script>

<style scoped>
    * {
        margin: 0px;
        padding: 0px;
    }

    /*@import url("//unpkg.com/element-ui@2.9.1/lib/theme-chalk/index.css");*/
</style>