<template>
    <div class="container">
        <el-input v-model="title" placeholder="标题" :readonly="!isEdit"></el-input>
        <mavon-editor class="markdown-body"
                      v-model="content"
                      :boxShadow=true
                      :toolbarsFlag="toolbarsFlag"
                      :subfield=false
                      :defaultOpen="defaultOpen"
                      ref="md"
                      @imgAdd="$imgAdd"
                      @change="change"
                      style="min-height: 600px"/>
        <el-button class="editor-btn" type="primary" @click="submit" v-show="isEdit">提交</el-button>
    </div>
</template>

<script>
    import {mavonEditor} from 'mavon-editor'
    import 'mavon-editor/dist/css/index.css'
    import toolbars from './toolbars.js'

    export default {
        name: 'MarkDown',
        props: {
            userId: String,
            articlueId: String
        },
        watch: {
            articlueId: function (id) {
                this.showArticlue(id)
            }
        },
        data: function () {
            return {
                title: '',
                content: '',
                toolbars: toolbars,
                toolbarsFlag: false,
                defaultOpen: "preview",
                isEdit: false
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
                if (this.articlueId) {
                    this.$axios.put(`articules/${this.articlueId}`, {
                        content: this.content,
                        title: this.title
                    })
                        .then(result => {
                            this.changeModel(false);
                            return result && result.status === 200 && result.data.code === 'SUCCESS' && result.data.data;
                        })
                        .then(articlue => {
                            this.$emit('refreshArticlue', articlue);
                        })
                } else {
                    this.$axios({
                        url: 'articules',
                        method: 'post',
                        data: {
                            userId: this.userId,
                            content: this.content,
                            title: this.title
                        }
                    })
                        .then(result => {
                            this.changeModel(false);
                            return result && result.status === 200 && result.data.code === 'SUCCESS' && result.data.data;
                        })
                        .then(articlue => {
                            this.$emit('refreshArticlue', articlue);
                        })
                }

                this.$message.success('提交成功！');
            },
            changeModel(isEdit) {
                if (isEdit) {
                    this.defaultOpen = "edit";
                    this.toolbarsFlag = true;
                    this.isEdit = true;
                } else {
                    this.defaultOpen = "preview";
                    this.toolbarsFlag = false;
                    this.isEdit = false;
                }
            },
            showArticlue(articlueId) {
                this.$axios.get(`articules/${articlueId}`)
                    .then(result => {
                        if (result.status === 200) {
                            let articule = result.data && result.data.code === 'SUCCESS' && result.data.data;
                            this.title = articule.title;
                            this.content = articule.content;
                        }
                    });
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