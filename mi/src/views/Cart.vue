<template>
    <div class="box">
        <!-- 首页顶部 -->
        <div class="box-top top1">
            <div class="top-left" @click="backBtn">
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

            <div class="shopping-center" v-if="seen3">
                <div class="centeritem-box">
                    <img src="../assets/gou.png">
                </div>
                <div class="centeritem-box1">购物车还是空的</div>
                <div class="centeritem-box2">去逛逛</div>
            </div>
            <!-- 购物车添加商品 -->
            <div class="cart-box" v-if="seen4">
                <div class="cart-item-wrap" v-for="item in wrap" :key="item.item">
                    
                    <div class="cart-item-left" v-if="seen5" @click="checkBtn1">
                        <img src="../assets/cart/选中.png" class="cart-item-left-img">
                    </div>

                    <div class="cart-item-left" v-else @click="checkBtn2">
                        <img src="../assets/cart/未选中.png" class="cart-item-left-img">
                    </div>

                    <div class="cart-item-content">
                        <div class="cart-img-box">
                            <img :src="item.img" class="cart-img">
                        </div>
                        <div class="cart-item-right">
                            <p class="cart-title">{{item.title}}</p>
                            <p class="cart-price">
                                <span class="cart-des">售价:</span>
                                {{item.price}}</p>
                            <div class="cart-item-bottom">
                                <div class="cart-input-box">
                                    <div class="cart-input-left">
                                        <img src="../assets/cart/减.png" class="cart-input-left-img">
                                    </div>
                                    <div class="cart-input-content">
                                        <span class="cart-input-content-item">1</span>
                                    </div>
                                    <div class="cart-input-right">
                                        <img src="../assets/cart/加.png"  class="cart-input-right-img">
                                    </div>
                                </div>
                                <div class="cart-del-box">
                                    <img src="../assets/cart/删 除.png" class="cart-del-img">
                                </div>
                            </div>   
                        </div>     
                    </div>
                </div>

                <div class="tips-box">
                    <p>温馨提示：产品是否购买成功，以最终下单为准，请尽快结算</p>
                </div>
            </div>


            <!-- 商品列表 -->
            <div class="item-list-box">
                <div class="shopping-center-img">
                    <img src="../assets/cai.jpg">
                </div>
                <div v-for="item in list" :key="item.price" class="item-listbox" @click="detailsclick">
                    <img :src="item.src" alt="">
                    <p class="shoppingp">{{item.text}}</p>
                    <p class="item-list-p2">￥{{item.price}}</p>
                </div>
            </div>
        </div>


        <!-- 底部 -->
        <div class="box-bottom" v-if="seen1">
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

        <!-- 结算 -->
        <div class="cart-bottom-box" v-if="seen2">
            <div class="cart-bottom-left">
                <span class="cart-bottom-left-item1">
                    <span>共0件</span>
                    <span>金额:</span>
                </span>
                <p class="cart-bottom-left-item2">
                    <span>0</span>
                    <span class="cart-bottom-left-item3">元</span>
                </p>
            </div>
            <div class="cart-bottom-right">
                <div class="cart-item-box">
                    <span>继续购物</span>
                </div>
                <div class="cart-btn-box">
                    <span>去结算</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            seen:true,
            seen1:true,
            seen2:false,
            seen3:false,
            seen4:true,
            seen5:true,
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
            wrap:[
                {
                    img:require("../assets/cart/01.jpg"),
                    title:"米家驱蚊智能版 白色",
                    price:"59元",
                    
                },
                {
                    img:require("../assets/cart/02.jpg"),
                    title:"小米10 Pro 全网通版 8GB+256GB 星空蓝",
                    price:"49999元"
                }
            ]
            
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
        backBtn() {
            this.$router.push({
                path:"/"
            })
        },

        //选中切换
        checkBtn1(){
            this.seen5 = false;
        },
        checkBtn2(){
            this.seen5 = true;
        }
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
    margin-left: 10px;
}
.shoppingp{
    margin-left: 10px;
    color: #3C3C3C;
    font-size: 12px;
}

/* 去结算 */
.cart-bottom-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.cart-bottom-right{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.cart-bottom-left{
    background: #fff;
    padding: 0 20px;
}
.cart-item-box{
    background: #F4F4F4;
    color: #333;
    font-size: 12px;
    padding: 10px 30px;
}
.cart-btn-box{
    background: #ff6700;
    color: #fff;
    font-size: 12px;
    padding: 10px 30px;
}
.cart-bottom-left-item1{
    letter-spacing: 1.5px;
    color: #999999;
    font-size: 12px;
}
.cart-bottom-left-item2{
    font-weight: bolder;
    color: #FF5722;
    font-size: 17px;
    padding: 0 20px;
}
.cart-bottom-left-item3{
    font-weight: normal;
    color: #999999;
    font-size: 12px;
}

/* 购物车 */
.cart-item-left{
    width: 30%;
    display: flex;
    align-items: center;
    margin: 5px 0 5px 5px;
}
.cart-item-left-img{
    width: 100%;
}

.cart-img-box{
    width: 100%;
    /* height: 80%; */
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #e0e0e0;
}
.cart-img{
    width: 100%;
}

.cart-title{
    color: #666666;
    font-size: 12px;
    margin: 3px;
    width: 70%;
}
.cart-price{
    color: #999999;
    font-size: 12px;
    margin: 3px;
}

.cart-input-left{
    width: 30%;
    padding: 3px;
    display: flex;
    text-align: center;
    align-items: center;
    background: #f6f6f6;
}
.cart-input-left-img{
    width: 100%;
}
.cart-input-right{
    width: 30%;
    padding: 5px;
    display: flex;
    text-align: center;
    align-items: center;
    background: #f6f6f6;
}
.cart-input-right-img{
    width: 100%;
}

.cart-input-content{
    width: 30%;
    padding: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
}

.cart-del-box{
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-del-img{
    width: 100%;
}

.cart-box{
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
}
.cart-item-wrap{
    /* border: 1px solid red; */
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    background: #fff;
}

.cart-item-content{
    /* border: 1px solid red; */
    display: flex;
    flex-direction: row;
    padding: 10px;
    /* margin: 10px;
    padding: 5px; */
}

.cart-item-right{
    padding: 10px 3px;
}

.cart-item-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.cart-input-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 50%;
    height: 30%;
    margin: 3px;
    border: 1px solid #e0e0e0;
}

.tips-box{
    background: #fff;
    color: #999999;
    font-size: 12px;
    padding: 10px;
}
</style>