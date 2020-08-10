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
            <div class="tele-content-wrap" v-for="item in list" :key="item.item">
                <img :src="item.img" class="tele-content-img">
            </div>
        </div>

        <div class="tele-box-black"></div>
        <img src="../../assets/tele/01.jpg" class="tele-box-img">

        <!-- 商品列表 -->
        <div class="tele-wrap">
            <div class="tele-item" v-for="item in wrap" :key="item.item"> 
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
            <div class="tele-item" v-for="item in commWrap" :key="item.item"> 
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
            <div class="tele-house-item" v-for="item in houseWrap" :key="item.item"> 
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
            <div class="tele-house-item" v-for="item in inteWrap" :key="item.item"> 
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
            <div class="tele-house-item" v-for="item in houseWrap" :key="item.item"> 
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
            <div class="tele-house-item" v-for="item in houseWrap" :key="item.item"> 
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
export default {
    data(){
        return {
            seen:false,
            listEle:null,
            scrollTop:0,
            list:[
                {
                    img:require("../../assets/tele/s01.jpg")
                },
                {
                    img:require("../../assets/tele/s02.jpg")
                },
                {
                    img:require("../../assets/tele/s03.jpg")
                },
                {
                    img:require("../../assets/tele/s04.jpg")
                },
                {
                    img:require("../../assets/tele/s05.jpg")
                },
                {
                    img:require("../../assets/tele/s06.jpg")
                },
                {
                    img:require("../../assets/tele/s07.jpg")
                },
                {
                    img:require("../../assets/tele/s08.jpg")
                },
                {
                    img:require("../../assets/tele/s09.jpg")
                },
                {
                    img:require("../../assets/tele/s10.jpg")
                }
            ],
            wrap:[
                {
                    img:require("../../assets/tele/02.jpg"),
                    title:"扫拖一体机",
                    des:"扫得干净，拖得干净",
                    price:"￥1799",
                    i:"￥1999"
                },
                {
                    img:require("../../assets/tele/03.jpg"),
                    title:"小米智能摄像头",
                    des:"高清画质，守质量",
                    price:"￥199",
                },
                {
                    img:require("../../assets/tele/04.jpg"),
                    title:"净水器600G",
                    des:"600加仑通量通量",
                    price:"￥1699",
                    i:"￥2499"
                },
                {
                    img:require("../../assets/tele/05.jpg"),
                    title:"小米AI音响",
                    des:"听音乐，语音语音",
                    price:"￥199",
                    i:"￥299"
                },
                {
                    img:require("../../assets/tele/06.jpg"),
                    title:"小米体脂秤2",
                    des:"轻松掌握身体各项数据",
                    price:"￥199",
                },
                {
                    img:require("../../assets/tele/07.jpg"),
                    title:"小米净水器",
                    des:"400加仑大流量刘",
                    price:"￥1299",
                    i:"￥1999"
                }
            ],
            commWrap:[
                {
                    img:require("../../assets/tele/12.png"),
                    title:"小米手环4",
                    des:"大屏彩显，20英寸",
                    price:"￥149起",
                    i:"￥169"
                },
                {
                    img:require("../../assets/tele/20.webp"),
                    title:"小米[小爱智能手机]",
                    des:"英语提分利器",
                    price:"￥399起",
                    i:"￥499"
                },
                {
                    img:require("../../assets/tele/13.jpg"),
                    title:"智能门锁，推拉式",
                    des:"一步推拉，高端智能",
                    price:"￥1599",
                    i:"￥1699"
                },
                {
                    img:require("../../assets/tele/14.jpg"),
                    title:"小爱音箱 Play",
                    des:"听音乐、语音遥控家电",
                    price:"￥99",
                    i:"￥169"
                },
                {
                    img:require("../../assets/tele/15.webp"),
                    title:"小米无线车充",
                    des:"电动变形，自动锁紧",
                    price:"￥169",
                },
                {
                    img:require("../../assets/tele/16.jpg"),
                    title:"小米净水器扁豆",
                    des:"无垢直饮健康纯水",
                    price:"￥699",
                    i:"￥999"
                },
                {
                    img:require("../../assets/tele/17.jpg"),
                    title:"烟灶套装 天然气",
                    des:"点火排烟，风随火动",
                    price:"￥2298",
                },
                {
                    img:require("../../assets/tele/18.jpg"),
                    title:"真无线耳机",
                    des:"智能真无线，轻松舒服",
                    price:"￥299",
                    i:"￥399"
                },
                {
                    img:require("../../assets/tele/19.jpg"),
                    title:"米家声波电动牙刷",
                    des:"31000次/分钟震动",
                    price:"￥99",
                }
            ],
            houseWrap:[
                {
                    img:require("../../assets/tele/x01.webp"),
                    title:"空气净化器2S",
                    des:"好空气看得见",
                    price:"￥749",
                    i:"￥899"
                },
                {
                    img:require("../../assets/tele/x02.webp"),
                    title:"小米净水器1A",
                    des:"小身材节省空间",
                    price:"￥1099",
                    i:"￥1499"
                },
                {
                    img:require("../../assets/tele/x03.webp"),
                    title:"扫地机器人",
                    des:"智商高，扫的干净",
                    price:"￥1399",
                    i:"￥1699"
                },
                {
                    img:require("../../assets/tele/x04.webp"),
                    title:"米家IH电饭煲",
                    des:"多才多艺的智能",
                    price:"￥399",
                },
                {
                    img:require("../../assets/tele/x05.jpg"),
                    title:"米家微波炉",
                    des:"APP操控，精确",
                    price:"￥399",
                },
                {
                    img:require("../../assets/tele/x06.jpg"),
                    title:"恒温电水壶",
                    des:"一杯水的温度温度",
                    price:"￥199",
                },
                {
                    img:require("../../assets/tele/x07.webp"),
                    title:"米家电磁炉",
                    des:"双频火力，精确",
                    price:"￥299",
                },
                {
                    img:require("../../assets/tele/x08.jpg"),
                    title:"米家电饭煲4L",
                    des:"890W 立体加热",
                    price:"￥299",
                },
                {
                    img:require("../../assets/tele/x09.webp"),
                    title:"米家电烤箱",
                    des:"全能烘焙体验",
                    price:"￥299",
                }
            ],
            inteWrap:[
                {
                    img:require("../../assets/tele/30.jpg"),
                    title:"Redmi手环",
                    des:"大屏彩显，助力你每天",
                    price:"￥99.9",
                },
                {
                    img:require("../../assets/tele/31.jpg"),
                    title:"小米手表Color",
                    des:"1540种出彩搭配，潮流",
                    price:"￥799起",
                },
                {
                    img:require("../../assets/tele/12.png"),
                    title:"小米手环4",
                    des:"大屏彩显，202020",
                    price:"￥149起",
                    i:"￥169"
                }
            ],
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