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
                <div class="articlue-wrapper">
                    <ul>
                        <li v-for="articule of showArticules" @click="handleNodeClick(articule, $event)">
                            <div class="articlue-item">
                                <h1 class="title">{{articule.title}}</h1>
                                <el-button-group class="articlue-item-buttons">
                                    <el-button type="primary" size="mini" plain icon="el-icon-edit"
                                               @click.stop="onButtonEditClicked"></el-button>
                                    <el-button type="primary" size="mini" plain icon="el-icon-delete"
                                               @click.stop="onButtonDeleteClicked"></el-button>
                                </el-button-group>
                                <div class="time"> {{articule.updatedAt}}</div>
                            </div>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="21">
                <Markdown ref="markdown"
                          :userId="userId"
                          :articlueId="currentArticuleId"
                          v-on:refreshArticlue="refreshArticlue"
                />
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import Markdown from './Markdown.vue'

    export default {
        name: "ArticluePage",
        components: {
            Markdown
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
            },
            onSelectUser(userId) {
                this.showArticules = this.allArticules.filter(item => item.userId === this.userId);
            },
            onButtonEditClicked(event) {
                this.$refs.markdown.changeModel(true);
            },
            onButtonDeleteClicked(event) {
                this.$axios.delete(`articules/${this.currentArticuleId}`)
                    .then(result => {
                        if (result.status === 200) {
                            this.allArticules = this.allArticules.filter(item => item._id !== this.currentArticuleId);
                            this.showArticules = this.allArticules.filter(item => item.userId === this.userId);
                        }
                    })
            },
            refreshArticlue(articlue) {
                if (articlue) {
                    let find = this.allArticules.find(item => item._id === articlue._id);
                    find.title = articlue.title;
                    find.content = articlue.content;
                    find.updatedAt = articlue.updatedAt;
                }
                this.showArticules = this.allArticules.filter(item => item.userId === userId);
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