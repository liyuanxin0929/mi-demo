<template>
    <div class="box">
        <!-- 首页顶部 -->
        <div class="box-top top1">
            <div class="top-left">
                <img src="../assets/箭头 left.png" alt />
            </div>
            <div class="top-content1">购物车</div>
            <div class="top-right" @click="searchBtn">
                <img src="../assets/搜索2.png" alt />
            </div>
        </div>

        <!-- 中间 -->
        <div class="box-content">
            <div class="shopping-top" @click="fun" v-if="seen">
                <div class="shopping-itemtop">
                    <span class="itemtop-span">登陆后享受更多优惠</span>
                </div>
                <div class="shopping-itemtop">
                    <span class="itemtop-span2" >去登录</span>
                    <img src="../assets/箭头 right.png">
                </div>
            </div>
            <div class="shopping-center">
                <div class="centeritem-box">
                    <img src="../assets/gou.png">
                </div>
                <div class="centeritem-box1">购物车还是空的</div>
                <div class="centeritem-box2">去逛逛</div>
            </div>
            <div class="shopping-center-img">
                <img src="../assets/cai.jpg">
            </div>
            <!-- 商品列表 -->
            <div class="item-list-box">
                <div v-for="item in list" :key="item.price" class="item-listbox" @click="detailsclick">
                    <img :src="item.src" alt="">
                    <p class="shoppingp">{{item.text}}</p>
                    <p class="item-list-p2">￥{{item.price}}</p>
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
            <div class="bottom-btn">
                <img src="../assets/购物车2.png" alt class="bottom-img" />
                <div class="bottom-title">购物车</div>
            </div>
            <div class="bottom-btn" @click="myBtn">
                <img src="../assets/我的1.png" class="bottom-img" alt />
                <div class="bottom-title">我的</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            list:[
                {
                    src:require("../assets/shopping/01.jpg"),
                    text:"米家驱蚊器 智能版",
                    price:"59"
                },
                {
                    src:require("../assets/shopping/02.jpg"),
                    text:"米家直流变频落地扇1x",
                    price:"299"
                },
                {
                    src:require("../assets/shopping/03.jpg"),
                    text:"手机USB数据线",
                    price:"9.9"
                },
                {
                    src:require("../assets/shopping/04.jpg"),
                    text:"飞利浦吸顶灯",
                    price:"199"
                },
                {
                    src:require("../assets/shopping/05.jpg"),
                    text:"小米手环4",
                    price:"69"
                },
                {
                    src:require("../assets/shopping/06.jpg"),
                    text:"小米USB U盘",
                    price:"99"
                },
                {
                    src:require("../assets/shopping/07.jpg"),
                    text:"Redmi 波轮洗衣机",
                    price:"399"
                },
                {
                    src:require("../assets/shopping/08.jpg"),
                    text:"小米 小爱 智能闹钟",
                    price:"129"
                },
                {
                    src:require("../assets/shopping/09.jpg"),
                    text:"小米电视4S",
                    price:"1119"
                },
                {
                    src:require("../assets/shopping/10.jpg"),
                    text:"Redmi 全自动波轮洗衣机",
                    price:"899"
                }
            ],
            seen:true
        }
    },
    methods:{
        fun(){
            this.seen=false;
            this.$router.push({
                path:"/login"
            })
        },
        detailsclick(){
            this.$router.push({
                path:"/details"
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

/* 中间部分 */
/* 顶部 */
.box-content{
    flex-grow: 1;
    overflow: auto;
}
.shopping-top{
    display: flex;
    justify-content: space-between;
    padding: 15px 15px;
}
.shopping-itemtop>img{
    width: 18px;
    height: 18px;
}
.shopping-itemtop{
    display: flex;
    justify-content: center;
    align-items: center;
}
.itemtop-span{
    font-size: 18px;
}
.itemtop-span2{
    font-size: 14px;
    color: rgba(0,0,0,.54);
}
.shopping-center{
    display: flex;
    justify-content: center;
    background-color :#ebebeb;
    padding: 15px;
    align-items: center;
}
.centeritem-box1{
    font-size: 14px;
    color: rgba(0,0,0,.27);
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
}
.centeritem-box2{
    font-size: 15px;
    border: 1px solid rgba(0,0,0,.15);
    padding: 2px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.centeritem-box img{
    width: 40px;
    height: 40px;
}
.shopping-center-img img{
    width: 100%;
    height: 70px;
}
/* 商品列表 */
.item-list-box{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.item-listbox{
    width: 49.5%;
}
.item-listbox img{
    width: 100%;
    height: 80%;
}
.item-list-p2{
    color: #FF6700;
    font-size: 12px;
}
.shoppingp{
    margin-left: 10px;
    color: #3C3C3C;
    font-size: 12px;
}
</style>