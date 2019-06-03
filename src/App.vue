<template>
    <div id="app">
        <el-container>
            <el-header>
                <Navigation/>
            </el-header>
            <el-main>
                <div id="nv">
                    <LinkGroup v-for="item of links" :linkGroups="item.linkGroups" :groupName="item.groupName"/>
                </div>
                <div>
                    <p>I Love U</p>
                    <img :src="love">
                </div>
                <br>
                <!--        <div id="qr">-->
                <!--            <p id="qr_title">给刁爷发红包</p>-->
                <!--            <img id="qrcode_img" :src="qrcode">-->
                <!--        </div>-->
            </el-main>
        </el-container>
    </div>
</template>

<script>
    import LinkGroup from './components/LinkGroup.vue'
    import love from './../static/images/love.png'
    // import qrcode from './../static/images/qrcode.png'
    import links from './../static/links.json'
    import Navigation from './components/Navigation.vue'

    export default {
        name: "app",
        components: {
            Navigation,
            LinkGroup
        },
        data: function () {
            return {
                love: love,
                // qrcode: qrcode,
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

    .el-header, .el-footer {
        /*background-color: #B3C0D1;*/
        /*color: #333;*/
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 260px;
    }

    /*body {*/
    /*    background-color: #f2f4f7;*/
    /*}*/

    /*#app {*/
    /*    display: -webkit-box;*/
    /*    -webkit-box-pack: center;*/
    /*    -webkit-box-align: center;*/
    /*    -webkit-box-orient: vertical;*/
    /*    text-align: center;*/
    /*}*/

    /*li {*/
    /*    margin: 10px;*/
    /*}*/
</style>