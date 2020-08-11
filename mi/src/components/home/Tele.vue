<template>
    <!-- 智能 -->
    <div class="tele-box" ref="contactList" @scroll="divScroll" id="back">
        <!-- 回到顶部 -->
        <div class="back-top-wrap"  v-if="seen" @click="backTop">
            <img src="../../assets/回到顶部.png" class="backTop" />
        </div>
        <!-- 轮播 -->
        <div class="tele-top">
            <swiper ref="mySwiper" :options="swiperOptions" >
                <swiper-slide class="tele-top-img">
                    <img src="../../assets/tele/lun01.jpg" class="top-img"> 
                </swiper-slide>
                <swiper-slide class="tele-top-img">
                    <img src="../../assets/tele/lun02.jpg" class="top-img">  
                </swiper-slide>
                <swiper-slide class="tele-top-img">
                    <img src="../../assets/tele/lun03.jpg" class="top-img"> 
                </swiper-slide>
                <swiper-slide class="tele-top-img">
                    <img src="../../assets/tele/lun04.jpg" class="top-img"> 
                </swiper-slide>
                <swiper-slide class="tele-top-img">
                    <img src="../../assets/tele/lun05.jpg" class="top-img"> 
                </swiper-slide>
            </swiper>
            <div class="swiper-pagination" slot="pagination"></div>
        </div>

        <!-- 商品 -->
        <div class="tele-box-black"></div>
        <div class="tele-content">
            <div class="tele-content-wrap" v-for="item in list[0]" :key="item.item">
                <img :src="item.img" class="tele-content-img">
            </div>
        </div>

        <div class="tele-box-black"></div>
        <img src="../../assets/tele/01.jpg" class="tele-box-img">

        <!-- 商品列表 -->
        <div class="tele-wrap">
            <div class="tele-item" v-for="item in list[1]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>
        <img src="../../assets/tele/08.jpg" class="tele-box-img">
        <img src="../../assets/tele/09.jpg" class="tele-box-img">
        <img src="../../assets/tele/10.jpg" class="tele-box-img">
        <img src="../../assets/tele/11.jpg" class="tele-box-img">

        <!-- 商品列表 -->
        <div class="tele-wrap">
            <div class="tele-item" v-for="item in list[2]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>
        <img src="../../assets/tele/08.jpg" class="tele-box-img">

        <!-- 小家电 -->
        <img src="../../assets/tele/21.jpg" class="tele-box-img">
        <div class="tele-house-wrap">
            <div class="tele-house-item" v-for="item in list[3]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>

        <!-- 智能穿戴 -->
        <img src="../../assets/tele/22.jpg" class="tele-box-img">
        <div class="tele-house-wrap">
            <div class="tele-house-item" v-for="item in list[4]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>

        <!-- 耳机音响 -->
        <img src="../../assets/tele/20.jpg" class="tele-box-img">
        <div class="tele-house-wrap">
            <div class="tele-house-item" v-for="item in list[3]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>

        <!-- 品质灯具 -->
        <img src="../../assets/tele/25.jpg" class="tele-box-img">
        <div class="tele-house-wrap">
            <div class="tele-house-item" v-for="item in list[3]" :key="item.item"> 
                <img :src="item.img" class="tele-wrap-img">
                <p class="tele-wrap-title">{{item.title}}</p>
                <p class="tele-wrap-des">{{item.des}}</p>
                <p class="tele-wrap-price">{{item.price}}
                    <span class="tele-wrap-i">{{item.i}}</span>
                </p>
            </div>
        </div>

        <img src="../../assets/tele/26.jpg" class="tele-box-img">
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            seen:false,
            listEle:null,
            scrollTop:0,
            list:[],
            swiperOptions: {
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true, // 允许点击小圆点跳转
                },
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false, // 手动切换之后继续自动轮播
                },
                loop: true,
            },
            computed: {
                swiper() {
                    return this.$refs.mySwiper.$swiper;
                },
            },
        }
    },
    created() {
        let that = this;
        let url = "http://localhost:5500/dist/data/TlelList.json";
        axios
        .get(url)
        .then(function (respone) {
            // console.log(respone);
            if (respone.data.code == 200) {
            that.list = respone.data.list;
            // console.log(that.list);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    // 回到顶部
    mounted() {
        this.listEle = this.$refs.contactList;
    },
    methods: {
        divScroll() {
            this.scrollTop = event.target.scrollTop;
            console.log(this.scrollTop);
            if(this.scrollTop>200){
                this.seen = true
            }else{
                this.seen = false
            }
        },
        backTop() {
            let back = document.querySelector("#back");
            back.scrollTop = 0;
        }
    },
}
</script>

<style scoped>
.tele-box{
    flex-grow: 1;
    overflow: auto;
}
.tele-box-black{
    width: 100%;
    height: 10px;
    background: #FAFAFA;
}
/* 轮播 */
.top-img {
  width: 100%;
  height: 100%;
}

.tele-top {
  position: relative;
}

.swiper-pagination{
  position: absolute;
  bottom: 20px;
  left: 40%;
  --swiper-theme-color: #ffffff;
}

/* 商品 */
.tele-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}
.tele-content-wrap{
    width: 20%;
}
.tele-content-img{
    width: 100%;
}

.tele-box-img{
    width: 100%;
}

/* 商品列表 */
.tele-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    padding: 3px;
    border-bottom: 1px solid #E3E3E3;
}
.tele-item{
    width: 33%;
    padding: 3px;
}
.tele-wrap-img{
    width: 100%;
    border-radius: 3px;
}
.tele-wrap-title{
    font-size: 12px;
    color: #3C3C3C;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.tele-wrap-des{
    font-size: 12px;
    color: #3C3C3C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 3px;
}
.tele-wrap-price{
    font-size: 12px;
    color: rgb(245, 75, 75);
    padding: 0 3px;
}
.tele-wrap-i{
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
}

/* 小家电 */
.tele-house-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
    padding: 3px;
    margin-top: -5px;
    background-color: rgb(240, 241, 243);
}
.tele-house-item{
    width: 32%;
    margin-bottom: 5px;
    background: #fff;
}

/* 回到顶部 */
.back-top-wrap {
  position: fixed;
  bottom: 70px;
  right: 20px;
  width: 10%;
}

.backTop {
  width: 100%;
}
</style>