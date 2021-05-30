<template>
<!--登陆弹框-->
<el-dialog title="登陆弹框" :visible.sync="visible">
    <el-form>
        <el-form-item label="用户名">
            <el-input v-model="login_id" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码">
            <el-input placeholder="请输入密码" v-model="login_pwd" show-password></el-input>
        </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
        <el-button @click="visible = false">取 消</el-button>
        <el-button type="primary" @click="login(login_id,login_pwd)">确 定</el-button>
    </div>
</el-dialog>
</template>

<script>
import axios from "axios";
import {
    Input,
    Form,
    FormItem,
    Button,
    Dialog
} from "element-ui"
export default {
    name: "Login",
    components: {
        "el-input": Input,
        "el-form": Form,
        "el-form-item": FormItem,
        "el-button": Button,
        "el-dialog": Dialog
    },
    props: {
        loginVisible: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            login_stat: false,
            login_id: '',
            login_pwd: '',
            visible: false
        };
    },
    watch: {
        loginVisible(newValue, oldValue) {
            this.visible = this.loginVisible
        }
    },
    methods: {
        
        login: function (id, pwd) {
            console.log(id)
            console.log(pwd)
            if (sessionStorage.login_stat) {
                alert("已经登录");
                location.replace("/admin_back");
            }
            axios
                .get("/api/login", {
                    params: {
                        user_id: id,
                        user_pwd: pwd,
                    },
                })
                .then((res) => {
                    if (res.data) {
                        alert("登录成功");
                        sessionStorage.login_stat = true;
                        location.replace("/admin_back");
                    } else alert("登录失败");
                })
                .catch(function (error) {
                    alert("登录出错");
                    console.log(error);
                });
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/*@import "bootstrap";*/
.login-dialog {
    position: fixed;
    top: 50%;
    left: 50%;
    display: inline-block;
    width: 400px;
    padding-bottom: 10px;
    vertical-align: middle;
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #ebeef5;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
    text-align: left;
    overflow: hidden;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
</style>
