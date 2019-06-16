<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="3">
                <el-select v-model="userId"
                           @change="onSelectUser"
                           placeholder="请选择用户">
                    <el-option
                            v-for="user in users"
                            :key="user.id"
                            :label="user.name"
                            :value="user.id"
                    >
                    </el-option>
                </el-select>
                <el-button type="primary" plain icon="el-icon-plus" @click="onButtonAddClicked"></el-button>
                <div class="articlue-wrapper">
                    <ul>
                        <li v-for="articule of showArticules" @click="handleNodeClick(articule, $event)">
                            <ArticuleItem :key="articule._id"
                                          :id="articule._id"
                                          :title="articule.title"
                                          :updatedAt="articule.updatedAt"
                                          @onButtonEditClicked="onButtonEditClicked"
                                          @onButtonDeleteClicked="onButtonDeleteClicked"
                            />
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="21">
                <Markdown ref="markdown"
                          :userId="userId"
                          v-on:refreshArticlue="refreshArticlue"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Markdown from './Markdown.vue'
    import ArticuleItem from './ArticuleItem.vue'

    export default {
        name: "ArticluePage",
        components: {
            Markdown,
            ArticuleItem
        },
        data: function () {
            return {
                userId: '',
                title: '',
                content: '',
                currentArticuleId: '',
                showArticules: [],
                allArticules: [],
                users: [
                    {
                        id: 'lsy',
                        name: '刘松屹'
                    },
                    {
                        id: 'lhh',
                        name: '梁汉辉'
                    },
                    {
                        id: 'dsj',
                        name: '刁世杰'
                    },
                ]
            }
        },
        methods: {
            handleNodeClick(articlue, event) {
                this.currentArticuleId = articlue._id;
                this.$refs.markdown.showArticlue(this.currentArticuleId);
            },
            onSelectUser(userId) {
                this.currentArticuleId = null;
                this.$refs.markdown.clearContent();
                this.showArticules = this.allArticules.filter(item => item.userId === this.userId);
            },
            onButtonEditClicked(articlueId) {
                this.$refs.markdown.changeModel(true);
                this.currentArticuleId = articlueId;
                this.$refs.markdown.showArticlue(this.currentArticuleId);
            },
            onButtonDeleteClicked(articlueId) {
                if (!articlueId) {
                    this.$message.error('未选择文章')
                    return;
                }
                this.$axios.delete(`articules/${articlueId}`)
                    .then(result => {
                        if (result.status === 200) {
                            this.allArticules = this.allArticules.filter(item => item._id !== articlueId);
                            this.showArticules = this.allArticules.filter(item => item.userId === this.userId);
                        }
                    })
            },
            refreshArticlue(articlue) {
                if (articlue) {
                    let find = this.allArticules.find(item => item._id === articlue._id);
                    if (find) {
                        find.title = articlue.title;
                        find.content = articlue.content;
                        find.updatedAt = articlue.updatedAt;
                    } else {
                        this.allArticules.push(articlue);
                    }
                }
                this.showArticules = this.allArticules.filter(item => item.userId === this.userId);
            },
            onButtonAddClicked() {
                if (!this.userId) {
                    this.$message.error('先选择用户');
                    return;
                }
                this.currentArticuleId = null;
                this.$refs.markdown.clearContent();
                this.$refs.markdown.changeModel(true);
            }
        },
        created() {
            this.$axios.get('articules')
                .then(result => {
                    if (result.status === 200) {
                        this.allArticules = result.data && result.data.data;
                        // for (let articule of articules) {
                        //     if (this.articuleGroup[articule.userId]) {
                        //         this.articuleGroup[articule.userId].push(articule);
                        //     } else {
                        //         this.articuleGroup[articule.userId] = [articule]
                        //     }
                        // }
                    }
                })
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