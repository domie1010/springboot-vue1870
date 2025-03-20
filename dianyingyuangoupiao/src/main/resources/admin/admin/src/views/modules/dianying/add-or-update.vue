<template>
    <div class="addEdit-block">
        <el-form
                class="detail-form-content"
                ref="ruleForm"
                :model="ruleForm"
                :rules="rules"
                label-width="80px"
                :style="{backgroundColor:addEditForm.addEditBoxColor}">
            <el-row>
                <input id="updateId" name="id" type="hidden">
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="电影名称" prop="dianyingName">
                       <el-input v-model="ruleForm.dianyingName"
                                 placeholder="电影名称" clearable  :readonly="ro.dianyingName"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="电影名称" prop="dianyingName">
                           <el-input v-model="ruleForm.dianyingName"
                                     placeholder="电影名称" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="12">
                    <el-form-item class="select" v-if="type!='info'"  label="电影类型" prop="dianyingTypes">
                        <el-select v-model="ruleForm.dianyingTypes" :disabled="ro.dianyingTypes" placeholder="请选择电影类型">
                            <el-option
                                v-for="(item,index) in dianyingTypesOptions"
                                v-bind:key="item.codeIndex"
                                :label="item.indexName"
                                :value="item.codeIndex">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <div v-else>
                        <el-form-item class="input" label="电影类型" prop="dianyingValue">
                        <el-input v-model="ruleForm.dianyingValue"
                            placeholder="电影类型" readonly></el-input>
                        </el-form-item>
                    </div>
                </el-col>
                <el-col :span="24">
                    <el-form-item class="upload" v-if="type!='info' && !ro.dianyingPhoto" label="封面" prop="dianyingPhoto">
                        <file-upload
                            tip="点击上传封面"
                            action="file/upload"
                            :limit="3"
                            :multiple="true"
                            :fileUrls="ruleForm.dianyingPhoto?ruleForm.dianyingPhoto:''"
                            @change="dianyingPhotoUploadChange"
                        ></file-upload>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.dianyingPhoto" label="封面" prop="dianyingPhoto">
                            <img style="margin-right:20px;" v-bind:key="index" v-for="(item,index) in (ruleForm.dianyingPhoto || '').split(',')" :src="item" width="100" height="100">
                        </el-form-item>
                    </div>
                </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="导演" prop="dianyingDanyan">
                       <el-input v-model="ruleForm.dianyingDanyan"
                                 placeholder="导演" clearable  :readonly="ro.dianyingDanyan"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="导演" prop="dianyingDanyan">
                           <el-input v-model="ruleForm.dianyingDanyan"
                                     placeholder="导演" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="编剧" prop="dianyingBianju">
                       <el-input v-model="ruleForm.dianyingBianju"
                                 placeholder="编剧" clearable  :readonly="ro.dianyingBianju"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="编剧" prop="dianyingBianju">
                           <el-input v-model="ruleForm.dianyingBianju"
                                     placeholder="编剧" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="制片国家/地区" prop="dianyingAddress">
                       <el-input v-model="ruleForm.dianyingAddress"
                                 placeholder="制片国家/地区" clearable  :readonly="ro.dianyingAddress"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="制片国家/地区" prop="dianyingAddress">
                           <el-input v-model="ruleForm.dianyingAddress"
                                     placeholder="制片国家/地区" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="语言" prop="dianyingYuyan">
                       <el-input v-model="ruleForm.dianyingYuyan"
                                 placeholder="语言" clearable  :readonly="ro.dianyingYuyan"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="语言" prop="dianyingYuyan">
                           <el-input v-model="ruleForm.dianyingYuyan"
                                     placeholder="语言" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="上映日期" prop="dianyingShijian">
                       <el-input v-model="ruleForm.dianyingShijian"
                                 placeholder="上映日期" clearable  :readonly="ro.dianyingShijian"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="上映日期" prop="dianyingShijian">
                           <el-input v-model="ruleForm.dianyingShijian"
                                     placeholder="上映日期" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="片长" prop="dianyingPianchang">
                       <el-input v-model="ruleForm.dianyingPianchang"
                                 placeholder="片长" clearable  :readonly="ro.dianyingPianchang"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="片长" prop="dianyingPianchang">
                           <el-input v-model="ruleForm.dianyingPianchang"
                                     placeholder="片长" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="电影原价" prop="dianyingOldMoney">
                       <el-input v-model="ruleForm.dianyingOldMoney"
                                 placeholder="电影原价" clearable  :readonly="ro.dianyingOldMoney"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="电影原价" prop="dianyingOldMoney">
                           <el-input v-model="ruleForm.dianyingOldMoney"
                                     placeholder="电影原价" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="现价" prop="dianyingNewMoney">
                       <el-input v-model="ruleForm.dianyingNewMoney"
                                 placeholder="现价" clearable  :readonly="ro.dianyingNewMoney"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="现价" prop="dianyingNewMoney">
                           <el-input v-model="ruleForm.dianyingNewMoney"
                                     placeholder="现价" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
               <el-col :span="12">
                   <el-form-item class="input" v-if="type!='info'"  label="座位" prop="zuoweiNumber">
                       <el-input v-model="ruleForm.zuoweiNumber"
                                 placeholder="座位 只能输数字 例:10 代表有1-10十个座位" clearable  :readonly="ro.zuoweiNumber"></el-input>
                   </el-form-item>
                   <div v-else>
                       <el-form-item class="input" label="座位" prop="zuoweiNumber">
                           <el-input v-model="ruleForm.zuoweiNumber"
                                     placeholder="座位" readonly></el-input>
                       </el-form-item>
                   </div>
               </el-col>
                <el-col :span="24">
                    <el-form-item v-if="type!='info'"  label="电影简介" prop="dianyingContent">
                        <editor style="min-width: 200px; max-width: 600px;"
                                v-model="ruleForm.dianyingContent"
                                class="editor"
                                action="file/upload">
                        </editor>
                    </el-form-item>
                    <div v-else>
                        <el-form-item v-if="ruleForm.dianyingContent" label="电影简介" prop="dianyingContent">
                            <span v-html="ruleForm.dianyingContent"></span>
                        </el-form-item>
                    </div>
                </el-col>
            </el-row>
            <el-form-item class="btn">
                <el-button v-if="type!='info'" type="primary" class="btn-success" @click="onSubmit">提交</el-button>
                <el-button v-if="type!='info'" class="btn-close" @click="back()">取消</el-button>
                <el-button v-if="type=='info'" class="btn-close" @click="back()">返回</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
    import styleJs from "../../../utils/style.js";
    // 数字，邮件，手机，url，身份证校验
    import { isNumber,isIntNumer,isEmail,isPhone, isMobile,isURL,checkIdCard } from "@/utils/validate";
    export default {
        data() {
            return {
                addEditForm:null,
                id: '',
                type: '',
                sessionTable : "",//登录账户所在表名
                role : "",//权限
                userId:"",//当前登录人的id
                ro:{
                    dianyingName: false,
                    dianyingTypes: false,
                    dianyingPhoto: false,
                    dianyingDanyan: false,
                    dianyingBianju: false,
                    dianyingAddress: false,
                    dianyingYuyan: false,
                    dianyingShijian: false,
                    dianyingPianchang: false,
                    dianyingOldMoney: false,
                    dianyingNewMoney: false,
                    zuoweiNumber: false,
                    dianyingClicknum: false,
                    shangxiaTypes: false,
                    dianyingDelete: false,
                    dianyingContent: false,
                },
                ruleForm: {
                    dianyingName: '',
                    dianyingTypes: '',
                    dianyingPhoto: '',
                    dianyingDanyan: '',
                    dianyingBianju: '',
                    dianyingAddress: '',
                    dianyingYuyan: '',
                    dianyingShijian: '',
                    dianyingPianchang: '',
                    dianyingOldMoney: '',
                    dianyingNewMoney: '',
                    zuoweiNumber: '',
                    dianyingClicknum: '',
                    shangxiaTypes: '',
                    dianyingDelete: '',
                    dianyingContent: '',
                },
                dianyingTypesOptions : [],
                shangxiaTypesOptions : [],
                rules: {
                   dianyingName: [
                              { required: true, message: '电影名称不能为空', trigger: 'blur' },
                          ],
                   dianyingTypes: [
                              { required: true, message: '电影类型不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   dianyingPhoto: [
                              { required: true, message: '封面不能为空', trigger: 'blur' },
                          ],
                   dianyingDanyan: [
                              { required: true, message: '导演不能为空', trigger: 'blur' },
                          ],
                   dianyingBianju: [
                              { required: true, message: '编剧不能为空', trigger: 'blur' },
                          ],
                   dianyingAddress: [
                              { required: true, message: '制片国家/地区不能为空', trigger: 'blur' },
                          ],
                   dianyingYuyan: [
                              { required: true, message: '语言不能为空', trigger: 'blur' },
                          ],
                   dianyingShijian: [
                              { required: true, message: '上映日期不能为空', trigger: 'blur' },
                          ],
                   dianyingPianchang: [
                              { required: true, message: '片长不能为空', trigger: 'blur' },
                          ],
                   dianyingOldMoney: [
                              { required: true, message: '电影原价不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                                  message: '只允许输入整数6位,小数2位的数字',
                                  trigger: 'blur'
                              }
                          ],
                   dianyingNewMoney: [
                              { required: true, message: '现价不能为空', trigger: 'blur' },
                              {  pattern: /^[0-9]{0,6}(\.[0-9]{1,2})?$/,
                                  message: '只允许输入整数6位,小数2位的数字',
                                  trigger: 'blur'
                              }
                          ],
                   zuoweiNumber: [
                              { required: true, message: '座位不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   dianyingClicknum: [
                              { required: true, message: '点击次数不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   shangxiaTypes: [
                              { required: true, message: '是否上架不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   dianyingDelete: [
                              { required: true, message: '逻辑删除不能为空', trigger: 'blur' },
                              {  pattern: /^[1-9][0-9]*$/,
                                  message: '只允许输入整数',
                                  trigger: 'blur'
                              }
                          ],
                   dianyingContent: [
                              { required: true, message: '电影简介不能为空', trigger: 'blur' },
                          ],
                }
            };
        },
        props: ["parent"],
        computed: {
        },
        created() {
            //获取当前登录用户的信息
            this.sessionTable = this.$storage.get("sessionTable");
            this.role = this.$storage.get("role");
            this.userId = this.$storage.get("userId");

            if (this.role != "管理员"){
                this.ro.dianyingOldMoney = true;
                this.ro.dianyingNewMoney = true;
            }
            this.addEditForm = styleJs.addStyle();
            this.addEditStyleChange()
            this.addEditUploadStyleChange()
            //获取下拉框信息
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=dianying_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.dianyingTypesOptions = data.data.list;
                    }
                });
                this.$http({
                    url:`dictionary/page?page=1&limit=100&sort=&order=&dicCode=shangxia_types`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        this.shangxiaTypesOptions = data.data.list;
                    }
                });


        },
        mounted() {
        },
        methods: {
            // 下载
            download(file){
                window.open(`${file}`)
            },
            // 初始化
            init(id,type) {
                if (id) {
                    this.id = id;
                    this.type = type;
                }
                if(this.type=='info'||this.type=='else'){
                    this.info(id);
                }
                // 获取用户信息
                this.$http({
                    url:`${this.$storage.get("sessionTable")}/session`,
                    method: "get"
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        var json = data.data;
                    } else {
                        this.$message.error(data.msg);
                    }
                });
            },
            // 多级联动参数
            info(id) {
                let _this =this;
                _this.$http({
                    url: `dianying/info/${id}`,
                    method: 'get'
                }).then(({ data }) => {
                    if (data && data.code === 0) {
                        _this.ruleForm = data.data;
                    } else {
                        _this.$message.error(data.msg);
                    }
                });
            },
            // 提交
            onSubmit() {
                this.$refs["ruleForm"].validate(valid => {
                    if (valid) {
                        this.$http({
                            url:`dianying/${!this.ruleForm.id ? "save" : "update"}`,
                            method: "post",
                            data: this.ruleForm
                        }).then(({ data }) => {
                            if (data && data.code === 0) {
                                this.$message({
                                    message: "操作成功",
                                    type: "success",
                                    duration: 1500,
                                    onClose: () => {
                                        this.parent.showFlag = true;
                                        this.parent.addOrUpdateFlag = false;
                                        this.parent.dianyingCrossAddOrUpdateFlag = false;
                                        this.parent.search();
                                        this.parent.contentStyleChange();
                                    }
                                });
                            } else {
                                this.$message.error(data.msg);
                            }
                        });
                    }
                });
            },
            // 获取uuid
            getUUID () {
                return new Date().getTime();
            },
            // 返回
            back() {
                this.parent.showFlag = true;
                this.parent.addOrUpdateFlag = false;
                this.parent.dianyingCrossAddOrUpdateFlag = false;
                this.parent.contentStyleChange();
            },
            //图片
            dianyingPhotoUploadChange(fileUrls){
                this.ruleForm.dianyingPhoto = fileUrls;
                this.addEditUploadStyleChange()
            },

            addEditStyleChange() {
                this.$nextTick(()=>{
                    // input
                    document.querySelectorAll('.addEdit-block .input .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputFontColor
                        el.style.fontSize = this.addEditForm.inputFontSize
                        el.style.borderWidth = this.addEditForm.inputBorderWidth
                        el.style.borderStyle = this.addEditForm.inputBorderStyle
                        el.style.borderColor = this.addEditForm.inputBorderColor
                        el.style.borderRadius = this.addEditForm.inputBorderRadius
                        el.style.backgroundColor = this.addEditForm.inputBgColor
                    })
                    document.querySelectorAll('.addEdit-block .input .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.inputHeight
                        el.style.color = this.addEditForm.inputLableColor
                        el.style.fontSize = this.addEditForm.inputLableFontSize
                    })
                    // select
                    document.querySelectorAll('.addEdit-block .select .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectFontColor
                        el.style.fontSize = this.addEditForm.selectFontSize
                        el.style.borderWidth = this.addEditForm.selectBorderWidth
                        el.style.borderStyle = this.addEditForm.selectBorderStyle
                        el.style.borderColor = this.addEditForm.selectBorderColor
                        el.style.borderRadius = this.addEditForm.selectBorderRadius
                        el.style.backgroundColor = this.addEditForm.selectBgColor
                    })
                    document.querySelectorAll('.addEdit-block .select .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.selectHeight
                        el.style.color = this.addEditForm.selectLableColor
                        el.style.fontSize = this.addEditForm.selectLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .select .el-select__caret').forEach(el=>{
                        el.style.color = this.addEditForm.selectIconFontColor
                        el.style.fontSize = this.addEditForm.selectIconFontSize
                    })
                    // date
                    document.querySelectorAll('.addEdit-block .date .el-input__inner').forEach(el=>{
                        el.style.height = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateFontColor
                        el.style.fontSize = this.addEditForm.dateFontSize
                        el.style.borderWidth = this.addEditForm.dateBorderWidth
                        el.style.borderStyle = this.addEditForm.dateBorderStyle
                        el.style.borderColor = this.addEditForm.dateBorderColor
                        el.style.borderRadius = this.addEditForm.dateBorderRadius
                        el.style.backgroundColor = this.addEditForm.dateBgColor
                    })
                    document.querySelectorAll('.addEdit-block .date .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.dateHeight
                        el.style.color = this.addEditForm.dateLableColor
                        el.style.fontSize = this.addEditForm.dateLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .date .el-input__icon').forEach(el=>{
                        el.style.color = this.addEditForm.dateIconFontColor
                        el.style.fontSize = this.addEditForm.dateIconFontSize
                        el.style.lineHeight = this.addEditForm.dateHeight
                    })
                    // upload
                    let iconLineHeight = parseInt(this.addEditForm.uploadHeight) - parseInt(this.addEditForm.uploadBorderWidth) * 2 + 'px'
                    document.querySelectorAll('.addEdit-block .upload .el-upload--picture-card').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-form-item__label').forEach(el=>{
                        el.style.lineHeight = this.addEditForm.uploadHeight
                        el.style.color = this.addEditForm.uploadLableColor
                        el.style.fontSize = this.addEditForm.uploadLableFontSize
                    })
                    document.querySelectorAll('.addEdit-block .upload .el-icon-plus').forEach(el=>{
                        el.style.color = this.addEditForm.uploadIconFontColor
                        el.style.fontSize = this.addEditForm.uploadIconFontSize
                        el.style.lineHeight = iconLineHeight
                        el.style.display = 'block'
                    })
                    // 多文本输入框
                    document.querySelectorAll('.addEdit-block .textarea .el-textarea__inner').forEach(el=>{
                        el.style.height = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaFontColor
                        el.style.fontSize = this.addEditForm.textareaFontSize
                        el.style.borderWidth = this.addEditForm.textareaBorderWidth
                        el.style.borderStyle = this.addEditForm.textareaBorderStyle
                        el.style.borderColor = this.addEditForm.textareaBorderColor
                        el.style.borderRadius = this.addEditForm.textareaBorderRadius
                        el.style.backgroundColor = this.addEditForm.textareaBgColor
                    })
                    document.querySelectorAll('.addEdit-block .textarea .el-form-item__label').forEach(el=>{
                        // el.style.lineHeight = this.addEditForm.textareaHeight
                        el.style.color = this.addEditForm.textareaLableColor
                        el.style.fontSize = this.addEditForm.textareaLableFontSize
                    })
                    // 保存
                    document.querySelectorAll('.addEdit-block .btn .btn-success').forEach(el=>{
                        el.style.width = this.addEditForm.btnSaveWidth
                        el.style.height = this.addEditForm.btnSaveHeight
                        el.style.color = this.addEditForm.btnSaveFontColor
                        el.style.fontSize = this.addEditForm.btnSaveFontSize
                        el.style.borderWidth = this.addEditForm.btnSaveBorderWidth
                        el.style.borderStyle = this.addEditForm.btnSaveBorderStyle
                        el.style.borderColor = this.addEditForm.btnSaveBorderColor
                        el.style.borderRadius = this.addEditForm.btnSaveBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnSaveBgColor
                    })
                    // 返回
                    document.querySelectorAll('.addEdit-block .btn .btn-close').forEach(el=>{
                        el.style.width = this.addEditForm.btnCancelWidth
                        el.style.height = this.addEditForm.btnCancelHeight
                        el.style.color = this.addEditForm.btnCancelFontColor
                        el.style.fontSize = this.addEditForm.btnCancelFontSize
                        el.style.borderWidth = this.addEditForm.btnCancelBorderWidth
                        el.style.borderStyle = this.addEditForm.btnCancelBorderStyle
                        el.style.borderColor = this.addEditForm.btnCancelBorderColor
                        el.style.borderRadius = this.addEditForm.btnCancelBorderRadius
                        el.style.backgroundColor = this.addEditForm.btnCancelBgColor
                    })
                })
            },
            addEditUploadStyleChange() {
                this.$nextTick(()=>{
                    document.querySelectorAll('.addEdit-block .upload .el-upload-list--picture-card .el-upload-list__item').forEach(el=>{
                        el.style.width = this.addEditForm.uploadHeight
                        el.style.height = this.addEditForm.uploadHeight
                        el.style.borderWidth = this.addEditForm.uploadBorderWidth
                        el.style.borderStyle = this.addEditForm.uploadBorderStyle
                        el.style.borderColor = this.addEditForm.uploadBorderColor
                        el.style.borderRadius = this.addEditForm.uploadBorderRadius
                        el.style.backgroundColor = this.addEditForm.uploadBgColor
                    })
                })
            },
        }
    };
</script>
<style lang="scss">
.editor{
  height: 500px;

  & /deep/ .ql-container {
	  height: 310px;
  }
}
.amap-wrapper {
  width: 100%;
  height: 500px;
}
.search-box {
  position: absolute;
}
.addEdit-block {
	margin: -10px;
}
.detail-form-content {
	padding: 12px;
}
.btn .el-button {
  padding: 0;
}</style>

