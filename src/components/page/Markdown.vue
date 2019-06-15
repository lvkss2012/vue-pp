<template>
    <div class="container">
        <el-input v-model="title" placeholder="请输入标题"></el-input>
        <mavon-editor class="markdown-body" v-model="content" ref="md" @imgAdd="$imgAdd" @change="change"
                      style="min-height: 600px"/>
        <el-button class="editor-btn" type="primary" @click="submit">提交</el-button>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'

    export default {
        name: 'MarkDown',
        props: {
            userId: String,
            title: String,
            content: String
        },
        data: function () {
            return {
                html: ''
            }
        },
        components: {
            mavonEditor
        },
        methods: {
            // 将图片上传到服务器，返回地址替换到md中
            $imgAdd(pos, $file) {
                var formdata = new FormData();
                formdata.append('file', $file);
                // 这里没有服务器供大家尝试，可将下面上传接口替换为你自己的服务器接口
                this.$axios({
                    url: '/common/upload',
                    method: 'post',
                    data: formdata,
                    headers: {'Content-Type': 'multipart/form-data'},
                }).then((url) => {
                    this.$refs.md.$img2Url(pos, url);
                })
            },
            change(value, render) {
                // render 为 markdown 解析后的结果
                this.content = value;
            },
            submit() {
                this.$axios({
                    url: 'articules',
                    method: 'post',
                    data: {
                        userId: this.userId,
                        content: this.content,
                        title: this.title
                    }
                })
                this.$message.success('提交成功！');
            }
        }
    }
</script>
<style scoped>
    .markdown-body {
        margin-top: 20px;
    }

    .editor-btn {
        margin-top: 20px;
    }
</style>