<template>
    <div id="hr-add-user">
        <div id="hr-add-user-buttons">
            <el-link icon="el-icon-caret-left" @click="onBack">返回</el-link>
        </div>
        <div id="hr-add-user-form">
            <el-form
                    ref="form"
                    :model="candidate"
                    size="small"
                    label-width="100px">
                <el-form-item label="岗位">
                    <el-select v-model="candidate.position" placeholder="选择岗位" :disabled="readonly">
                        <el-option label="C++软件开发工程师" value="C++软件开发工程师"></el-option>
                        <el-option label="Web前端开发工程师" value="Web前端开发工程师"></el-option>
                        <el-option label="3D图形开发工程师" value="3D图形开发工程师"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input placeholder="填写姓名" v-model="candidate.name" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="联系电话">
                    <el-input placeholder="填写联系电话" v-model="candidate.phone" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input placeholder="填写邮箱" v-model="candidate.email" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="薪资要求">
                    <el-input placeholder="填写薪资要求" v-model="candidate.expectSalary" :readonly="readonly"></el-input>
                </el-form-item>
                <el-form-item label="通知面试时间">
                    <el-date-picker type="datetime" placeholder="选择面试时间"
                                    :readonly="readonly"
                                    v-model="candidate.interviewDateTime"
                                    style="width: 100%;"></el-date-picker>
                </el-form-item>
                <el-form-item label="面试人">
                    <el-select v-model="candidate.interviewer" placeholder="选择面试人" :disabled="readonly">
                        <el-option label="耿锋" value="耿锋"></el-option>
                        <el-option label="闫守刚" value="闫守刚"></el-option>
                        <el-option label="刁世杰" value="刁世杰"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="面试结果">
                    <el-select v-model="candidate.interviewResult" placeholder="选择面试结果" :disabled="readonly">
                        <el-option label="待面试" value="待面试"></el-option>
                        <el-option label="通过" value="通过"></el-option>
                        <el-option label="淘汰" value="淘汰"></el-option>
                        <el-option label="复试" value="复试"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="上传简历">
                    <el-upload
                            drag
                            :on-remove="handleRemove"
                            :on-success="handleSuccess"
                            :file-list="fileList"
                            action="http://localhost:4000/api/files">
                        <i class="el-icon-upload"></i>
                        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    </el-upload>
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
                candidate: {
                    _id: "",
                    position: "",
                    name: "",
                    phone: "",
                    email: "",
                    expectSalary: "",
                    interviewDateTime: "",
                    interviewer: "",
                    interviewResult: "",
                    resumeId: null,
                },
                readonly: true,
                fileList: [],
                currentId: ''
            }
        },
        created: function () {
            let hash = window.location.hash;
            let querys = hash && hash.split('?');
            let id = querys && querys.find(item => item.includes('_id'));
            this.currentId = id && id.split('=')[1];
            this.readonly = !!this.currentId;
            if (this.currentId) {
                this.$axios.get(`candidates/${this.currentId}`)
                    .then(result => {
                        if (result.status === 200) {
                            this.candidate = result.data && result.data.data;
                        }
                    })
            }
        },
        methods: {
            onSubmit() {
                let data = Object.assign({}, this.candidate);
                delete data._id;
                this.readonly = !this.readonly;
                this.$axios({
                    url: this.currentId ? `candidates/${this.currentId}` : 'candidates',
                    method: this.currentId ? 'put' : 'post',
                    data: data
                })
                    .then(result => {
                        return result && result.status === 200 && result.data.code === 'SUCCESS' && result.data.data;
                    })
                    .then(candidate => {
                        this.candidate = candidate;
                    })
            },
            onEdit() {
                this.readonly = !this.readonly;
            },
            onBack() {
                this.$router.push('/hrManager')
            },
            handleRemove(file, fileList) {
                this.candidate.resumeId = null;
            },
            handleSuccess(response, file, fileList) {
                if (response.code === 'SUCCESS' && response.data && response.data) {
                    this.candidate.resumeId = response.data.id;
                }
            },
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