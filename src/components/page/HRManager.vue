<template>
    <div id="hrManager">
        <div id="hr-buttons">
            <el-button type="primary" size="small">导入</el-button>
            <el-button type="primary" size="small" @click="handleAdd()">新增</el-button>
        </div>
        <div id="hr-tables">
            <el-table
                    stripe
                    row-key="_id"
                    :data="candidates">
                <el-table-column
                        type="index"
                        label="序号"
                        :index="indexMethod">
                </el-table-column>
                <el-table-column
                        prop="position"
                        label="岗位">
                </el-table-column>
                <el-table-column
                        prop="name"
                        label="姓名">
                </el-table-column>
                <el-table-column
                        prop="phone"
                        label="联系电话">
                </el-table-column>
                <el-table-column
                        prop="email"
                        label="邮箱">
                </el-table-column>
                <el-table-column
                        prop="expectSalary"
                        label="薪资要求">
                </el-table-column>
                <el-table-column
                        prop="interviewDateTime"
                        label="通知面试时间">
                </el-table-column>
                <el-table-column
                        prop="interviewer"
                        label="面试人">
                </el-table-column>
                <el-table-column
                        prop="interviewResult"
                        label="面试结果">
                </el-table-column>
                <el-table-column
                        align="center"
                        width="130"
                        label="功能">
                    <template slot-scope="scope">
                        <el-button
                                type="text"
                                size="mini"
                                @click="handleDetail(scope.$index, scope.row)">详情
                        </el-button>
                        <el-button
                                type="text"
                                size="mini"
                                @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                        <el-button
                                type="text"
                                size="mini"
                                @click="handleDelete(scope.$index, scope.row)">下载简历
                        </el-button>
                    </template>
                </el-table-column>

            </el-table>
        </div>
        <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="1"
                background
                :page-size="pageSize"
                layout="prev, pager, next"
                :total="count">
        </el-pagination>
    </div>
</template>

<script>
    import LinkGroup from './LinkGroup.vue'
    import love from '../../../static/images/love.png'
    import links from '../../../static/links.json'
    import Navigation from '../common/Navigation.vue'

    export default {
        name: "HRManager",
        data: function () {
            return {
                pageSize: 20,
                candidates: [],
                count: 0
            }
        },
        created: function () {
            let that = this;
            this.$axios.get('candidates/count')
                .then(result => {
                    if (result.status === 200) {
                        that.count = result.data && result.data.data && result.data.data.count;
                        console.log(that.count)
                    }
                });

            this.$axios.get('candidates')
                .then(result => {
                    if (result.status === 200) {
                        that.candidates = result.data && result.data.data;
                    }
                })
        },
        methods: {
            handleAdd() {
                this.$router.push('/addUser')
            },
            handleDetail(index, row) {
                console.log(index, row);
                this.$router.push({path: 'addUser', query: {_id: row._id}})
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            indexMethod(index) {
                return index + 1;
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        }
    }
</script>

<style scoped>

</style>