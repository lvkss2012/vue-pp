<template>
    <div id="donatediv">
        <h2>给刁爷发红包</h2>
        <div id="qr">
            <img id="qrcode_img" :src="qrcode">
        </div>
    </div>
</template>

<script>
    import qrcode from './../../static/images/qrcode.png'

    export default {
        name: "DonatePage",
        data: function () {
            return {
                qrcode: qrcode
            }
        }
    }
</script>

<style scoped>

</style>