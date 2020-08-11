<template>
    <div>
        <!-- 顶部 -->
        <div class="login-top">
            <img src="../assets/问号.png" />
        </div>
        <div class="login-top1">
            <img src="../assets/小米2.png" />
        </div>
        <div class="login-top1 itemm">小米账号登录</div>
        <!-- 账号密码 -->
        <div class="login-top3">
            <div class="login-top2" ref="top2box1">
                <div class="login-top4">
                <input type="text" placeholder="邮箱/手机号码/小米ID" v-model="message" @focus="fun" />
                </div>
                <div class="login-item1" v-if="message.trim()!=''" @click="delclick">
                <img src="../assets/删除.png" />
                </div>
            </div>
        </div>
        <div class="login-top3">
            <div class="login-top2" ref="top2box2">
                <input :type="str" placeholder="密码" v-model="passmessage" @focus="fun" />
                <div class="login-item" v-if="seen" @click="yanclick">
                <img src="../assets/眼睛.png" />
                </div>
                <div class="login-item" v-else @click="yanclick">
                <img src="../assets/眼睛2.png" />
                </div>
            </div>
        </div>
        <div class="login-gan" v-if="seen1==1">
            <img src="../assets/感叹号.png" />
            <span>请输入账号</span>
        </div>
        <div class="login-gan" v-if="seen1==2">
            <img src="../assets/感叹号.png" />
            <span>请输入密码</span>
        </div>
        <div class="login-gan" v-if="seen1==3">
            <img src="../assets/感叹号.png" />
            <span>用户名或密码不正确</span>
        </div>
        <div class="login-list iitem" @click="loginclick">登录</div>
        <div class="login-list iitem1">手机短信登录/注册</div>
        <div class="login-list-item">
            <div class="login-listt">立即注册</div>|
            <div class="login-listt">忘记密码？</div>
        </div>
        <div class="login-list-item1">
            <div class="listitem"></div>
            <div>其他方式登录</div>
            <div class="listitem"></div>
        </div>

        <!-- 登录方式 -->
        <div class="login-list-item2">
            <div class="listitem1">
                <img src="../assets/新浪.png" />
            </div>
            <div class="listitem1">
                <img src="../assets/支付宝.png" />
            </div>
            <div class="listitem1">
                <img src="../assets/微信.png" />
            </div>
            <div class="listitem1">
                <img src="../assets/苹果.png" />
            </div>
        </div>

        <!-- 语言 -->
        <div class="login-bottombox">
            <div class="jianbox">简体</div>|
            <div>繁体</div>|
            <div>English</div>|
            <div>常见问题</div>|
            <div>隐私政策</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            seen: true,
            num: 0,
            message: "",
            str: "password",
            passmessage: "",
            seen1: 0,
        };
    },
    computed:{
        isseen () {
        return this.$store.state.isseen
        }
    },
    methods:{
        yanclick() {
            this.num++;
            if (this.num % 2 != 0) {
                this.seen = false;
                this.str = "text";
            } else {
                this.seen = true;
                this.str = "password";
            }
        },
        delclick() {
            this.message = "";
            this.passmessage = "";
            this.seen1=0;
            this.$refs.top2box1.style="border-bottom:''";
            this.$refs.top2box2.style="border-bottom:''";
        },
        loginclick() {
            if (this.message.trim() == "") {
                this.seen1 = 1;
                this.$refs.top2box1.style="border-bottom:0.1px solid #ff6700;"
            }else if (this.passmessage.trim() == "") {
                this.seen1 = 2;
                this.$refs.top2box2.style="border-bottom:0.1px solid #ff6700;"
            }     
            if(this.message.trim()!=""&&this.message.trim()!="lvliang"&&this.passmessage.trim()!=""&&this.passmessage.trim()!="123456"){
                this.seen1=3
                this.$refs.top2box1.style="border-bottom:0.1px solid #ff6700;";
                this.$refs.top2box2.style="border-bottom:0.1px solid #ff6700;"
            }
            if(this.message.trim()!=""&&this.message.trim()=="lvliang"&&this.passmessage.trim()!=""&&this.passmessage.trim()=="123456") {
                this.$store.commit("fun");
                this.$router.go(-1)
            }
        },
        fun(){
            this.seen1=0;
            this.$refs.top2box1.style="border-bottom:''";
            this.$refs.top2box2.style="border-bottom:''";
        },
    }
}
</script>

<style scoped>
/* 中间 */
.login-top {
    display: flex;
    justify-content: flex-end;
    padding: 15px 20px 0px;
}
.login-top img {
    width: 16px;
    height: 16px;
}
.login-top1 img {
    width: 50px;
    height: 50px;
}
.login-top1 {
    display: flex;
    justify-content: center;
}
.itemm {
    font-size: 18px;
    margin-top: 15px;
}

/* 账号密码 */
.login-top2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0px;
    font-size: 18px;
    border-bottom: 0.1px solid #b6b6b6;
    height: 55px;
}
.login-top2 input {
    background: none;
    outline: none;
    border: none;
    margin-left: 10px;
    font-size: 18px;
}
.login-gan {
    display: flex;
    align-items: center;
    font-size: 13px;
    color: #ff6700;
    margin-top: 15px;
    padding: 0px 25px;
}
.login-gan img {
    width: 13px;
    height: 13px;
    margin-right: 8px;
}
.login-top3 {
    padding: 0px 25px;
    color: #9b9b9b;
}
.login-top4 {
    flex-grow: 1;
    display: flex;
    align-items: center;
}
.login-item img {
    margin-right: 5px;
    height: 13px;
    width: 20px;
}
.login-list {
    width: 90%;
    height: 50px;
    margin: auto;
    border-radius: 30px;
    text-align: center;
    line-height: 50px;
    margin-top: 25px;
    font-size: 18px;
    font-weight: bolder;
}
.login-item1 img {
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.iitem {
    background-color: #ff6700;
    color: #fff;
}
.iitem1 {
    background-color: rgba(0, 0, 0, 0.06);
}
.login-list-item {
    color: #9b9b9b;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 25px;
}
.login-listt {
    margin: 5px;
}
.login-list-item1 {
    display: flex;
    justify-content: space-between;
    padding: 0px 15px;
    font-size: 10px;
    color: #9b9b9b;
    margin-top: 30px;
    align-items: center;
}
.listitem {
    height: 1px;
    width: 35%;
    border: 0.5px solid #f6f6f6;
}

/* 登录方式 */
.login-list-item2 {
    display: flex;
    justify-content: center;
    align-items: center;
}
.listitem1 img {
    width: 30px;
    height: 30px;
}
.listitem1 {
    margin: 25px 12px;
}

/* 语言 */
.login-bottombox {
    color: #9b9b9b;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    margin-top: 10px;
    font-size: 14px;
}
.jianbox {
    color: rgb(78, 78, 78);
}
</style>