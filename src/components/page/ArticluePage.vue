<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="2">
                <el-tree
                        class="filter-tree"
                        :data="menu"
                        :props="defaultProps"
                        default-expand-all
                        @node-click="handleNodeClick"
                        ref="tree">
                </el-tree>
            </el-col>
            <el-col :span="22">
                <Markdown :userId="userId" :title="title" :content="content"/>
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
                menu: [
                    {
                        id: 'lsy',
                        label: '刘松屹'
                    },
                    {
                        id: 'lhh',
                        label: '梁汉辉'
                    },
                    {
                        id: 'dsj',
                        label: '刁世杰'
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods: {
            handleNodeClick(data) {
                if (data.isArticule) {
                    this.$axios.get(`articules/${data.id}`)
                        .then(result => {
                            if (result.status === 200) {
                                let articule = result.data && result.data.code === 'SUCCESS' && result.data.data;
                                this.title = articule.title;
                                this.content = articule.content;
                            }
                        });
                } else {
                    this.userId = data.id;
                }
            }
        },
        created() {
            this.$axios.get('articules')
                .then(result => {
                    if (result.status === 200) {
                        let articules = result.data && result.data.data;
                        let articuleGroup = {};
                        for (let articule of articules) {
                            if (articuleGroup[articule.userId]) {
                                articuleGroup[articule.userId].push({
                                    id: articule._id,
                                    label: articule.title,
                                    isArticule: true
                                });
                            } else {
                                articuleGroup[articule.userId] = [{
                                    id: articule._id,
                                    label: articule.title,
                                    isArticule: true
                                }]
                            }
                        }

                        this.menu = this.menu.map(item => {
                            item.children = articuleGroup[item.id];
                            return item;
                        })
                    }
                })
        }
    }
</script>

<style scoped>
    .filter-tree {
        /*background-color: rgba(210, 28, 226, 0.35);*/
    }
</style>