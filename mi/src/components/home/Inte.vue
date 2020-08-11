<template>
    <!-- 电视 -->
    <div class="inte-box" ref="contactList" @scroll="divScroll" id="back" >
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
    </div>
</template>

<script>
import axios from "axios";
export default {
    data(){
        return {
            // meta:{
            //     index:3
            // },
            seen:false,
            listEle:null,
            scrollTop:0,
            list:[]
        }
    },
    // 回到顶部
    mounted() {
        this.listEle = this.$refs.contactList;
    },
     created() {
    let url = `http://127.0.0.1:5500/dist/data/InteList.json`;
    let that = this;
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
        //   console.log(response);
          that.list = response.data.list;
        //   console.log(that.list);
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