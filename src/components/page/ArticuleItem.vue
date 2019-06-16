<template>
    <div class="articlue-item">
        <h1 class="title">{{title}}</h1>
        <el-button-group class="articlue-item-buttons">
            <el-button type="primary" size="mini" plain icon="el-icon-edit"
                       @click.stop="onButtonEditClicked"></el-button>
            <el-button type="primary" size="mini" plain icon="el-icon-delete"
                       @click.stop="onButtonDeleteClicked"></el-button>
        </el-button-group>
        <div class="time"> {{updatedAt}}</div>
    </div>
</template>

<script>
    export default {
        name: "ArticuleItem",
        props: {
            id: String,
            title: String,
            updatedAt: String
        },
        data: function () {
            return {}
        },
        methods: {
            onButtonEditClicked(event) {
                this.$emit('onButtonEditClicked', this.id);
            },
            onButtonDeleteClicked(event) {
                this.$emit('onButtonDeleteClicked', this.id);
            },
        }
    }
</script>

<style scoped>
    .articlue-item {
        padding: 5px 0;
        border-bottom: 1px solid rgba(7, 17, 27, 0.1);
        /*flex: 1;*/
    }

    .articlue-item-buttons {
        /*position: absolute;*/
        right: 2px;
        bottom: 1px;
    }

    .title {
        /*margin-bottom: 4px;*/
        /*line-height: 12px;*/
        /*font-weight: 700;*/
        font-size: 10px;
        color: rgb(7, 17, 27);
    }

    .time {
        /*line-height: 5px;*/
        font-size: 5px;
        color: rgb(147, 153, 159);
    }
</style>