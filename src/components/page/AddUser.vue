<template>
    <div id="hr-add-user">
        <div id="hr-add-user-buttons">
            <el-link icon="el-icon-caret-left" @click="onBack">返回</el-link>
        </div>
        <div id="hr-add-user-form">
            <el-form
                    ref="form"
                    :model="form"
                    size="small"
                    label-width="100px">
                <el-form-item label="岗位">
                    <el-select v-model="form.position" placeholder="选择岗位" :disabled="readonly">
                        <el-option label="C++软件开发工程师" value="cpp"></el-option>
                        <el-option label="Web前端开发工程师" value="web"></el-option>
                        <el-option label="3D图形开发工程师" value="3d"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input placeholder="填写姓名" v-model="form.name" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input placeholder="填写联系电话" v-model="form.phone" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input placeholder="填写邮箱" v-model="form.email" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="薪资要求">
                    <el-input placeholder="填写薪资要求" v-model="form.expectSalary" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="通知面试时间">
                    <el-date-picker type="datetime" placeholder="选择面试时间"
                                    :readonly="readonly"
                                    v-model="form.interviewDateTime"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="面试人">
                    <el-select v-model="form.interviewer" placeholder="选择面试人" :disabled="readonly">
                        <el-option label="耿锋" value="gf"></el-option>
                        <el-option label="闫守刚" value="ysg"></el-option>
                        <el-option label="刁世杰" value="dsj"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="面试结果">
                    <el-select v-model="form.interviewResult" placeholder="选择面试结果" :disabled="readonly">
                        <el-option label="通过" value="ok"></el-option>
                        <el-option label="淘汰" value="pass"></el-option>
                        <el-option label="复试" value="second"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onEdit" v-if="readonly">编辑</el-button>
                    <el-button type="primary" @click="onSubmit" v-else>保存</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "AddUser",
        data: function () {
            return {
                form: {
                    position: "",
                    name: "",
                    phone: "",
                    email: "",
                    expectSalary: "",
                    interviewDateTime: "",
                    interviewer: "",
                    interviewResult: ""
                },
                readonly: true
            }
        },
        methods: {
            onSubmit() {
                this.readonly = !this.readonly;
                console.log('submit==》' + JSON.stringify(this.form));
            },
            onEdit() {
                this.readonly = !this.readonly;
                console.log('submit==》' + JSON.stringify(this.form));
            },
            onBack() {
                this.$router.push('/hrManager')
            }
        }
    }
</script>

<style scoped>
    #hr-add-user {
        width: 500px;
    }

    #hr-add-user-form {
        padding: 20px;
        margin-left: 20px;
    }
</style>