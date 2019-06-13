<template>
    <div>
        <el-row :gutter="10">
            <el-col :span="1">
                <el-tree
                        class="filter-tree"
                        :data="menu"
                        :props="defaultProps"
                        default-expand-all
                        :filter-node-method="filterNode"
                        ref="tree">
                </el-tree>
            </el-col>
            <el-col :span="23">
                <Markdown/>
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
                menu: [
                    {
                        id: 'lsy',
                        label: 'lsy'
                    },
                    {
                        id: 'lhh',
                        label: 'lhh'
                    },
                    {
                        id: 'dsj',
                        label: 'dsj'
                    },
                ],
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        }
    }
</script>

<style scoped>
    .filter-tree {
        /*background-color: rgba(210, 28, 226, 0.35);*/
    }
</style>