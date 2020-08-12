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
            <div class="shopping-top" @click="fun" v-if="isseen==false">
                <div class="shopping-itemtop">
                    <span class="itemtop-span">登陆后享受更多优惠</span>
                </div>
                <div class="shopping-itemtop">
                    <span class="itemtop-span2" >去登录</span>
                    <img src="../assets/箭头 right.png">
                </div>
            </div>
            <div class="shopping-center" v-if="wrap.length<=0">
                <div class="centeritem-box">
                    <img src="../assets/gou.png">
                </div>
                <div class="centeritem-box1">购物车还是空的</div>
                <div class="centeritem-box2">去逛逛</div>
            </div>

             <!-- 购物车添加商品 -->
            <div class="cart-box" v-if="wrap.length>0">
                <div class="cart-item-wrap" v-for="(item,index) in wrap" :key="item.item">
                    
                    <div class="cart-item-left" v-if="item.checked" @click="checkBtn1(index)">
                        <img src="../assets/cart/选中.png" class="cart-item-left-img">                       
                    </div>

                    <div class="cart-item-left" v-else @click="checkBtn2(index)">
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
                                {{item.price}}
                            </p>
                            <div class="cart-item-bottom">
                                <div class="cart-input-box">
                                    <div class="cart-input-left" @click="minusclick(index)" ref="jian">
                                        <img src="../assets/cart/减.png" class="cart-input-left-img">
                                    </div>
                                    <div class="cart-input-content">
                                        <span class="cart-input-content-item">{{item.num}}</span>
                                    </div>
                                    <div class="cart-input-right" @click="addclick(index)">
                                        <img src="../assets/cart/加.png"  class="cart-input-right-img">
                                    </div>
                                </div>
                                <div class="cart-del-box" @click="delclick(index)">
                                    <img src="../assets/cart/删 除.png" class="cart-del-img">
                                </div>
                            </div>   
                        </div>     
                    </div>                    
                </div>
                <div class="tips-box" >
                    温馨提示：产品是否购买成功，以最终下单为准，请尽快结算
                </div>                
            </div>


            <!-- 商品列表 -->
            <div class="item-list-box">
                <div class="shopping-center-img">
                    <img src="../assets/cai.jpg">
                </div>
                <div v-for="item in list" :key="item.price" class="item-listbox" >
                    <img :src="item.img" alt="" @click="detailsclick(item.id)">
                    <p class="shoppingp">{{item.title}}</p>
                    <p class="item-list-p2">￥<span class="item-list-p3">{{item.price}}</span></p>
                </div>
            </div>
        </div>


        <!-- 底部 -->
        <div class="box-bottom" v-if="wrap.length<=0">
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
        <div class="cart-bottom-box" v-else>
            <div class="cart-bottom-left">
                <span class="cart-bottom-left-item1 left">
                    共{{count}}件 金额:
                </span>
                <p class="cart-bottom-left-item2 left">
                    <span>{{prices}}</span>
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
import axios from "axios";
export default {
    data(){
        return {
            seen:true,
            seen1:true,
            seen3:false,
            seen4:true,
            seen5:true,
            list:[],
        }
    },
    // axios请求
    created() {
      let url = `http://127.0.0.1:5500/dist/data/CartList.json`;
      let that = this;
      console.log("chengg");
      axios
        .get(url)
        .then(function (response) {
          if (response.data.code == 200) {
            console.log(response);
            that.list = response.data.list;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    computed:{
        wrap () {
        return this.$store.state.wrap
    },
    isseen () {
        return this.$store.state.isseen
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
    prices(){
        let numm=0;
        for(let i=0;i<this.wrap.length;i++){
            if(this.wrap[i].checked==true){
                 numm+=(parseInt(this.wrap[i].num) *parseInt(this.wrap[i].price))
            }
        }
        return  numm
    }
    },
    methods:{
        // 购物车
        addclick(index){
            this.$store.commit("addnum", index);
        },
        minusclick(index){
            this.$store.commit("minusnum", index);
            if(this.wrap[index].num==0){
                this.wrap[index].num=1
            }
        },
        delclick(index){
            this.$store.commit("delitem", index);
        },
        // 路由跳转
        fun(){
            this.seen=false;
            this.$router.push({
                path:"/login"//登录界面
            })
        },
        detailsclick(id){
            this.$router.push({
                path:"/details",//详情页面
                 query:{
                    id:id
                }
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
        //选中切换
        checkBtn1(index){
            this.wrap[index].checked=false
        },
        checkBtn2(index){
            this.wrap[index].checked=true
        },
        backBtn(){
            this.$router.push({
                path:"/"
            })
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
    margin-bottom: 10px;
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
.item-list-p3{
    font-size: 12px;
}
.shoppingp{
    margin-left: 10px;
    color: #3C3C3C;
    font-size: 12px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
}
/* 购物车 */
.cart-item-left{
    display: flex;
    align-items: center;
    margin: 5px 0 5px 10px;
}
.cart-item-left-img{
    width: 20px;
    height: 20px;
}

.cart-img-box{
    display: flex;
    align-items: center;
    text-align: center;
    border: 1px solid #e0e0e0;
}
.cart-img{
    width: 120px;
    height: 100px;
}

.cart-title{
    color: #666666;
    font-size: 15px;
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
    margin-bottom: 10px;
    display: flex;
    flex-direction: row;
    background: #fff;
}

.cart-item-content{
    display: flex;
    flex-direction: row;
    padding: 10px;
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
/* 去结算 */
.cart-bottom-box{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.cart-bottom-right{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    flex-shrink: 0;
}
.cart-bottom-left{
    width: 100%;
    background: #fff;
    padding: 0 15px;
    /* text-align: center; */
}
.cart-item-box{
    background: #F4F4F4;
    color: #333;
    font-size: 14px;
    padding: 10px 20px;
    height: 100%;
    display: flex;
    align-items: center;
}
.cart-btn-box{
    background: #ff6700;
    color: #fff;
    font-size: 14px;
    padding: 10px 20px;
    height: 100%;
    display: flex;
    align-items: center;
}
.cart-bottom-left-item1{
    letter-spacing: 1.5px;
    color: #999999;
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.cart-bottom-left-item2{
    font-weight: bolder;
    color: #FF5722;
    font-size: 20px;
    text-align: center;
}
.cart-bottom-left-item3{
    font-weight: normal;
    color: #999999;
    font-size: 12px;
}

.left{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
</style>