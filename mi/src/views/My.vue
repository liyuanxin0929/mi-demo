<template>
    <div class="box">
        <!-- 首页顶部 -->
        <div class="box-content">
            <div class="my-topbox">
                <div class="my-topbox-img">
                    <img src="../assets/my/登录.png" />
                </div>
                <div class="my-topbox-text" v-if="seen" @click="zhuiclick">登录/注册</div>
                <div class="my-topbox-text" v-else>
                    <div>lvliang</div>
                    <div>石头</div>
                </div>
            </div>

            <div class="my-topbox2">
                <div>我的订单</div>
                <div class="my-topbox2-item">
                    <span>全部订单</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="my-topbox3">
                <div class="my-topbox3-item">
                    <img src="../assets/my/代付款.png" />
                    <p>代付款</p>
                </div>
                <div class="my-topbox3-item">
                    <img src="../assets/my/代收货.png" />
                    <p>代收货</p>
                </div>
                <div class="my-topbox3-item">
                    <img src="../assets/my/退换修.png" />
                    <p>退换修</p>
                </div>
            </div>

            <div class="kong"></div>
            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/皇冠.png" />
                </div>
                <div class="my-topbox4-item2 itemss">
                    <span>会员中心</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/优.png" />
                </div>
                <div class="my-topbox4-item2">
                    <span>我的优惠</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="kong"></div>
            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/服务中心.png" />
                </div>
                <div class="my-topbox4-item2 itemss">
                    <span>服务中心</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/房子.png" />
                </div>
                <div class="my-topbox4-item2">
                    <span>小米之家</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="kong"></div>
            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/F码商品.png" />
                </div>
                <div class="my-topbox4-item2 itemss">
                    <span>我的F码</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/礼物.png" />
                </div>
                <div class="my-topbox4-item2">
                    <span>礼物码兑换</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>

            <div class="kong"></div>
            <div class="my-topbox4">
                <div class="my-topbox4-item1">
                    <img src="../assets/my/设置.png" />
                </div>
                <div class="my-topbox4-item2">
                    <span>设置</span>
                    <img src="../assets/箭头 right.png" />
                </div>
            </div>
            <div class="kong"></div>


            <!-- 追罩层 -->
            <div class="black" :style="{display:active}"></div>
            <div class="dialog" :style="{display:active}">
                <div class="dialogbox">
                    <div class="dialogbox11">
                        <p class="dialogbox-p1">
                            <span>《小米商城用户协议》</span>
                            <span>《小米商城用户协议》</span>
                        </p>
                        <p class="dialogbox-p1">
                            <span>《小米商城用户协议》</span>
                            <span>《小米商城用户协议》</span>
                        </p>
                        <p class="dialogbox-p2">请您仔细阅读以上协议，其中有对您权利义务的特别约定等重要条款，同意后方可使用本软件</p>
                    </div>
                </div>
                <div class="dialogbox-bottom">
                    <div class="bottombox1" @click="myclick">不同意</div>
                    <div class="bottombox1 boxx" @click="mylogin">同意</div>
                </div>
            </div>
        </div>

        <!-- 底部 -->
        <div class="box-bottom">
            <div class="bottom-btn" @click="homeBtn">
                <img src="../assets/首页1.png" class="bottom-img" alt />
                <div class="bottom-title">首页</div>
            </div>
            <div class="bottom-btn" @click="classifyBtn">
                <img src="../assets/分类1.png" class="bottom-img" alt />
                <div class="bottom-title">分类</div>
            </div>
            <div class="bottom-btn">
                <img src="../assets/星球1.png" class="bottom-img" alt />
                <div class="bottom-title">
                <a href="https://m.mi.com/discover">星球</a>
                </div>
            </div>
            <div class="bottom-btn" @click="cartBtn">
                <img src="../assets/购物车1.png" class="bottom-img" alt />
                <div class="bottom-title">购物车</div>
            </div>
            <div class="bottom-btn">
                <img src="../assets/我的2.png" alt class="bottom-img" />
                <div class="bottom-title">我的</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            active: "none",
            seen:true
        };
    },
    methods:{
        zhuiclick() {
            this.active = "block";
        },
        myclick(){
            this.active = "none";
        },
        mylogin(){
            this.active = "none";
            this.seen=false;
            this.$router.push({
                path:"/login"
            })
        },

        // 页面切换
        homeBtn(){
            this.$router.push({
                path:'/'
            })
        },
        classifyBtn(){
            this.$router.push({
                path:'/classify'
            })
        },
        cartBtn(){
            this.$router.push({
                path:'/cart'
            })
        },
    }
}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

a{
    text-decoration: none;
    color: #747474;
}

/* 底部 */
.box-bottom {
    flex-shrink: 0;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
    border-top: 1px solid rgb(221, 221, 221);
    box-shadow: 0px -5px 10px rgb(221, 221, 221);
}
.bottom-img {
    width: 20px;
}
.bottom-btn {
    width: 20%;
    flex-shrink: 0;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.bottom-title {
    font-size: 12px;
    color: #747474;
}

.box-content {
    flex-grow: 1;
    overflow: auto;
}


/* 中间 */
.box-content {
    flex-grow: 1;
    overflow: auto;
}
.my-topbox {
    width: 100%;
    height: 83px;
    background: url("../assets/my/mybei.png");
    background-size: 100% 100%;
    background-color: rgb(248, 126, 39);
    display: flex;
    align-items: center;
    padding: 0px 15px;
}
.my-topbox-img img {
    width: 50px;
    height: 50px;
}
.my-topbox-text {
    color: #ffff;
    font-size: 14px;
    margin-left: 10px;
    text-align: center;
}
.my-topbox2 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 14px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.my-topbox2-item {
    display: flex;
    justify-content: center;
    align-items: center;
}
.my-topbox2-item img {
    width: 16px;
    height: 16px;
    margin-left: 5px;
}
.my-topbox3 {
    display: flex;
    justify-content: space-between;
    padding: 15px 55px;
    text-align: center;
}
.my-topbox3-item img {
    width: 25px;
    height: 25px;
}
.my-topbox3-item p {
    font-size: 12px;
}
.kong {
    width: 100%;
    height: 10px;
    background-color: #f5f5f5;
}
.my-topbox4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.my-topbox4-item1 img {
    width: 25px;
    height: 25px;
}
.my-topbox4-item1 {
    margin-left: 15px;
}
.my-topbox4-item2 {
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: center;
    margin-left: 15px;
    padding: 15px 0px;
    font-size: 15px;
}
.itemss {
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
}
.my-topbox4-item2 img {
    width: 20px;
    height: 20px;
    margin-right: 15px;
}
/* 追罩层 */
.black {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 4;
    background: rgba(63, 63, 63, 0.8);
    top: 0;
    left: 0;
}

.dialog {
    position: fixed;
    z-index: 5;
    width: 90%;
    height: 178px;
    top: 40%;
    left: 5%;
    background: #fff;
    text-align: center;
    border-radius: 3%;
    overflow: hidden;
}
.dialogbox{
    font-size: 14px;
}
.dialogbox-p1{
    font-size: 12px;
    color: #ff6700;
}
.dialogbox-p2{
    padding: 0 1px;
    color: #676767;
}
.dialogbox-bottom{
    position: absolute;
    width: 100%;
    bottom: 0px;
    left: 0;
    display: flex;
    height: 45px;
    border-top: 1px solid #dbdbdb;
}
.bottombox1{
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.boxx{
    color: #ff6700;
    border-left: 1px solid #dbdbdb;
}
.dialogbox11{
    width: 100%;
    padding: 25px 20px;
}
</style>