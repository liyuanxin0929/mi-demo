<template>
    <div class="box">
        <!-- 首页顶部 -->
        <div class="box-top">
            <div class="top-left">
                <img src="../assets/小米.png" alt />
            </div>
            <div class="top-content" @click="searchBtn">
                <img src="../assets/搜索.png" alt class="content-search" />
                <input type="text" readonly="readonly" placeholder="搜索商品名称" class="content-input" />
            </div>
            <div class="top-right" @click="signBtn">
                <img src="../assets/登录.png" alt />
            </div>
        </div>

        <!-- 推荐列表 -->
        <template>
            <div class="box-nav">
                <div class="title-wrap">
                    <div class="nav-title" :class="{active:componentNames=='recommend-list'}" @click="titleClick('recommend-list',1)">推荐</div>
                    <div class="nav-title" :class="{active:componentNames=='phone-list'}" @click="titleClick('phone-list',2)">手机</div>
                    <div class="nav-title" :class="{active:componentNames=='tele-list'}" @click="titleClick('tele-list',3)">智能</div>
                    <div class="nav-title" :class="{active:componentNames=='inte-list'}" @click="titleClick('inte-list',4)">电视</div>
                    <div class="nav-title" :class="{active:componentNames=='notebook-list'}" @click="titleClick('notebook-list',5)">笔记本</div>
                    <div class="nav-title" :class="{active:componentNames=='household-list'}" @click="titleClick('household-list',6)">家电</div>
                    <div class="nav-title" :class="{active:componentNames=='living-list'}" @click="titleClick('living-list',7)">生活周边</div>
                </div>
                <div class="img-wrap" @click="arrowBtn1">
                    <img src="../assets/箭头.png" alt class="nav-img" />
                </div>
            </div>
        </template>

        <!-- 全部商品 -->
        <template v-if="seen">
            <div class="whole-nav">
                <div class="whole-top">
                    <div class="whole-title-wrap">
                    <div class="whole-title">全部</div>
                    </div>
                    <div class="whole-img-wrap" @click="arrowBtn2">
                    <img src="../assets/箭头 上.png" class="whole-img" />
                    </div>
                </div>
                <div class="whole-content">
                    <div class="whole-item" :class="{act:componentNames=='recommend-list'}" @click="titleClick('recommend-list')">推荐</div>
                    <div class="whole-item" :class="{act:componentNames=='phone-list'}" @click="titleClick('phone-list')">手机</div>
                    <div class="whole-item" :class="{act:componentNames=='tele-list'}" @click="titleClick('tele-list')">智能</div>
                    <div class="whole-item" :class="{act:componentNames=='inte-list'}" @click="titleClick('inte-list')">电视</div>
                    <div class="whole-item" :class="{act:componentNames=='notebook-list'}" @click="titleClick('notebook-list')">笔记本</div>
                    <div class="whole-item" :class="{act:componentNames=='household-list'}" @click="titleClick('household-list')">家电</div>
                    <div class="whole-item" :class="{act:componentNames=='living-list'}" @click="titleClick('living-list')">生活周边</div>
                </div>
            </div>
        </template>

        <!-- 遮照层 -->
        <div class="mask" v-if="mask"></div>

        <!-- 组件 -->
        <!-- <div style="height:100%"> -->
            <transition :name="rightLeft"> 
                <component :is="componentNames"></component>
            </transition> 
        <!-- </div> -->
        <!-- 底部 -->
        <div class="box-bottom">
            <div class="bottom-btn">
                <img src="../assets/首页2.png" alt class="bottom-img" />
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
            <div class="bottom-btn bottom-count" @click="cartBtn">
                <img src="../assets/购物车1.png" class="bottom-img" alt />
                <div class="bottom-title">购物车</div>
                <div class="countbox" v-if="count>0">{{count}}</div>
            </div>
            <div class="bottom-btn" @click="myBtn">
                <img src="../assets/我的1.png" class="bottom-img" alt />
                <div class="bottom-title">我的</div>
            </div>
        </div>
    </div>
</template>

<script>
import Recommend from "../components/home/Recommend.vue";
import Phone from "../components/home/Phone.vue";
import Tele from "../components/home/Tele.vue";
import Inte from "../components/home/Inte.vue";
import Notebook from "../components/home/Notebook.vue";
import Household from "../components/home/Household.vue";
import Living from "../components/home/Living.vue";
export default {
    data(){
        return {
            seen: false,
            mask: false,
            componentNames: "recommend-list",
            isnum:0,
            rightLeft:"left"
        }
    },
    components: {
        "recommend-list": Recommend,
        "phone-list": Phone,
        "tele-list": Tele,
        "inte-list": Inte,
        "notebook-list": Notebook,
        "household-list": Household,
        "living-list": Living,
    },
    computed:{
        wrap () {
        return this.$store.state.wrap
        },
        count(){
        let numm=0;
        for(let i=0;i<this.wrap.length;i++){
            if(this.wrap[i].checked==true){
                 numm+=this.wrap[i].num
            }
        }
        return numm
        },
    },
    methods: {
        // 组件切换
        titleClick(name,num) {
            this.componentNames = name;
            
            if(this.isnum > num){
                this.rightLeft = "left"
            } else {
                this.rightLeft = "right"
            }

            this.isnum = num;
            // console.log(this.$route.meta);
        },
        //推荐列表切换
        arrowBtn1() {
            this.seen = true, 
            this.mask = true;
        },
        arrowBtn2() {
            this.seen = false, 
            this.mask = false;
        },
        // 页面切换
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
        myBtn(){
            this.$router.push({
                path:'/my'
            })
        },
        // 搜索按钮
        searchBtn() {
            this.$router.push({
                path: "/search",
            });
        },
        signBtn(){
            this.$router.push({
                path:"/my"
            })
        }
    },
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

/* 顶部 */
.box-top {
    padding: 12px;
    flex-shrink: 0;
    background-color: rgb(242, 242, 242);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
}
.box-top img {
  width: 25px;
}
.top-content {
    flex-grow: 1;
    margin: 0 10px;
    padding: 5px;
    display: flex;
    flex-direction: row;
    background: rgb(255, 255, 255);
}
.content-input {
    border: none;
    outline: none;
    padding-left: 5px;
}
.content-search {
    padding: 3px;
}
.top1 img {
    width: 20px;
}
.top-content1 {
    font-size: 13px;
    color: #424242;
}

/* 底部 */
.bottom-count{
    position: relative;
}
.countbox{
    position: absolute;
    width: 16px;
    height: 16px;
    font-size:5px;
    color: #fff;
    background-color:#ed4d41;
    border-radius: 50%;
    top: 6px;
    right: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-bottom {
    /* position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10px; */
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

/* 推荐列表  */
.box-content {
    flex-grow: 1;
    overflow: auto;
}
.box-nav {
    flex-grow: 1;
    position: relative;
    width: 100%;
    padding: 0 15px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(242, 242, 242);
    border-bottom: 1px solid rgb(221, 221, 221);
    box-shadow: 0px 5px 10px rgb(221, 221, 221);
}
.nav-img {
  width: 20px;
}
.nav-title {
    color: #747474;
    font-size: 12px;
    margin-right: 20px;
}
.title-wrap {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    overflow: hidden;
    white-space: nowrap;
    overflow-x: auto;
}
.title-wrap::-webkit-scrollbar {
    display: none;
}
.active {
    border-bottom: 2px solid rgb(237, 91, 0);
}
.box-nav::-webkit-scrollbar {
    display: none;
}

/* 全部商品 */
.whole-nav {
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 10;
    padding: 10px 15px;
    background-color: rgb(242, 242, 242);
}
.whole-top {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.whole-title {
    font-size: 12px;
    color: #3c3c3c;
}
.whole-img-wrap {
    width: 14px;
}
.whole-img {
    width: 100%;
}

.whole-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.whole-item {
    font-size: 12px;
    color: #3c3c3c;
    width: 20%;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    text-align: center;
    background: #fff;
    margin: 3px 7px;
    padding: 3px;
}

.act {
    background-color: #fde0d5;
    border-color: #ff6700;
    color: #ff6700;
}

/* 遮照层 */
.mask {
    position: fixed;
    top: 57px;
    width: 100%;
    height: 80%;
    z-index: 4;
    background-color: rgba(0, 0, 0, 0.3);
}

/* 过渡效果 */
/* .left-enter{
    transform: translateX(-5px);
}
.left-enter-active,
.left-leave-active{
    transition:all  0.3s;
}
.left-leave-to{
    transform: translateX(5px);
}

.right-enter{
    transform: translateX(5px);
}
.right-enter-active,
.right-leave-active{
    transition:all 0.3s;
}
.right-leave-to{
    transform: translateX(-5px);
} */
</style>