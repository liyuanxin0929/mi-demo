<template>
    <!-- 电视 -->
    <div class="inte-box" ref="contactList" @scroll="divScroll" id="back" >
        <!-- <div v-for="item in list" :key="item.item"> -->
        <!-- 回到顶部 -->
            <div class="back-top-wrap"  v-if="seen" @click="backTop">
                <img src="../../assets/回到顶部.png" class="backTop" />
            </div>
        <div>
            <img src="../../assets/inte/01.jpg" class="inte-box-img">
        </div>
        
        <!-- 商品 -->
        <div class="inte-content">
            <div class="inte-content-wrap" v-for="item in list[0]" :key="item.item">
                <img :src="item.img" class="inte-wrap-img">
                <p class="inte-wrap-title">{{item.title}}</p>
                <p class="inte-wrap-des">{{item.des}}</p>
                <p class="inte-wrap-price">{{item.price}}
                    <span class="inte-wrap-i">{{item.i}}</span>
                </p>
                <div class="inte-btn-box">
                    <p class="inte-wrap-btn">{{item.btn}}</p>
                </div>
            </div>
        </div>

        <div>
            <img src="../../assets/inte/06.jpg" class="inte-box-img">
        </div>
        <div class="inte-content content1">
            <div class="inte-content-wrap" v-for="item in list[1]" :key="item.item">
                <img :src="item.img" class="inte-wrap-img">
                <p class="inte-wrap-title">{{item.title}}</p>
                <p class="inte-wrap-des">{{item.des}}</p>
                <p class="inte-wrap-price">{{item.price}}
                    <span class="inte-wrap-i">{{item.i}}</span>
                </p>
                <div class="inte-btn-box">
                    <p class="inte-wrap-btn">{{item.btn}}</p>
                </div>
            </div>
        </div>

        <div>
            <img src="../../assets/inte/09.jpg" class="inte-box-img img1">
        </div>
        <div class="inte-item">
            <img src="../../assets/inte/10.jpg" class="inte-item-img">
            <div class="inte-item-content"> 
                <div class="inte-bottom-top">
                    <p class="inte-item-title">米家激光投影电视 1S 4K</p>
                    <p class="inte-item-price">
                        ￥12999
                        <span class="inte-item-i">￥14999</span>
                    </p>
                </div>
                <div class="inte-bottom-bottom">
                    <p class="inte-item-des">更自然的色彩，更真实的还原</p>
                    <div class="inte-btn-box1">
                        <p class="inte-item-btn">立即购买</p> 
                    </div>
                </div>
            </div>    
        </div>
          <!-- </div> -->
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
            list:[
            //     {
            //         img:require("../../assets/inte/02.jpg"),
            //         title:"小米电视4A 32英寸",
            //         des:"人工智能系统，高清液晶屏，64",
            //         price:"￥599",
            //         i:"￥799",
            //         btn:"立即购买"
            //     },
            //     {
            //         img:require("../../assets/inte/03.jpg") ,
            //         title:"全面屏电视 55英寸",
            //         des:"潮流全面屏设计，4K超清画质",
            //         price:"￥1599",
            //         i:"￥1999",
            //         btn:"立即购买"
            //     },
            //     {
            //         img:require("../../assets/inte/04.jpg"),
            //         title:"全面屏电视 65英寸",
            //         des:"震撼大屏，时尚全面屏",
            //         price:"￥2499",
            //         i:"￥3099",
            //         btn:"立即购买"
            //     },
            //     {
            //         img:require("../../assets/inte/05.jpg"),
            //         title:"小米电视4C 43英寸",
            //         des:"FHD全高清屏，钢琴烤漆",
            //         price:"￥999",
            //         i:"￥1399",
            //         btn:"立即购买"
            //     }
            // ],
            // wrap:[
            //     {
            //         img:require("../../assets/inte/07.jpg"),
            //         title:"Redmi 智能电视 X55",
            //         des:"超高清广色域，还原真实影像",
            //         price:"￥2166",
            //         i:"￥2299",
            //         btn:"立即购买"
            //     },
            //     {
            //         img:require("../../assets/inte/08.jpg") ,
            //         title:"Redmi 智能电视 X65",
            //         des:"4K超清画质，细腻如真",
            //         price:"￥2966",
            //         i:"￥3299",
            //         btn:"立即购买"
            //     }
            ]
        }
    },
    // 回到顶部
    mounted() {
        this.listEle = this.$refs.contactList;
    },
     created() {
    let url = `http://127.0.0.1:5500/dist/data1/InteList.json`;
    let that = this;
    console.log("chengg");
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          console.log(response);
          that.list = response.data.list;
          console.log(that.list);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
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
            // console.log(this.$refs.contactList);
            // console.log(back.scrollTop)
        }
    }
}
</script>

<style scoped>
.inte-box{
    flex-grow: 1;
    overflow: auto;
    background-color: rgb(255, 235, 220)
}
.inte-box-img{
    width: 100%;
    height: 100%;
}
.img1{
    margin-top: 10px
}
/* 商品 */
.inte-wrap-img{
    width: 100%;
    border-radius: 5px;
}
.inte-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px;
    text-align: center;
}
.inte-content-wrap{
    width: 49.5%;
    background: #fff;
    border-radius: 5px;
    margin-top: 8px;
}
.inte-wrap-title{
    font-size: 12px;
    color: #3C3C3C;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.inte-wrap-des{
    font-size: 12px;
    color: #3C3C3C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
}
.inte-wrap-price{
    font-size: 12px;
    color: rgb(245, 75, 75);
    padding: 0 3px;
}
.inte-wrap-i{
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
}
.inte-wrap-btn{
    background: #ea625b;
    text-align: center;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    padding: 5px 0px;
}
.inte-btn-box{
    padding: 2px 40px 10px 40px;
}

/*  */
.content1{
    background: #fff;
}
.inte-item{
    background-color: rgb(202, 254, 245);
    margin-top: -5px;
    padding: 5px;
}
.inte-item-img{
    width: 100%;
    height: 100%;
    border-radius: 5px;
}
.inte-item-content{
    background: #fff;
    margin-top: -5px;
    border-radius: 5px;
}
.inte-item-title{
    font-size: 14px;
    color: #3C3C3C;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.inte-item-des{
    font-size: 12px;
    color: #3C3C3C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* padding: 0 10px; */
}
.inte-item-price{
    font-size: 14px;
    color: rgb(245, 75, 75);
    /* padding: 0 3px; */
}
.inte-item-i{
    font-size: 13px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
}
.inte-item-btn{
    background: #ea625b;
    text-align: center;
    color: #fff;
    font-size: 12px;
    border-radius: 3px;
    padding: 5px 20px;
}
.inte-bottom-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
}
.inte-bottom-bottom{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
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