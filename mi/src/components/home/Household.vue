<template>
    <!-- 家电 -->
    <div class="house-box" ref="contactList" @scroll="divScroll" id="back">
        <!-- 回到顶部 -->
        <div class="back-top-wrap"  v-if="seen" @click="backTop">
            <img src="../../assets/回到顶部.png" class="backTop" />
        </div>
        <div>
            <img src="../../assets/household/01.jpg" class="note-box-img">
        </div>

        <!-- 商品 -->
        <div class="house-wrap">
            <div class="house-item" v-for="item in list" :key="item.item">
                <img :src="item.img" class="house-item-img">
                <p class="house-item-title">{{item.title}}</p>
                <p class="house-item-des">{{item.des}}</p>
                <p class="house-item-price">
                    {{item.price}}
                    <span class="house-item-i">{{item.i}}</span>
                </p>
            </div>
        </div>
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
            list:[]
        }
    },
    // 回到顶部
    mounted() {
        this.listEle = this.$refs.contactList;
    },
    created() {
        let url = `http://127.0.0.1:5500/dist/data/HouseholdList.json`;
        let that = this;
        axios
        .get(url)
        .then(function (response) {
            if (response.data.code == 200) {
            // console.log(response);
            that.list = response.data.list;
            // console.log(that.list);
            }
        })
        .catch(function (error) {
            console.log(error);
        });
    },
    methods: {
        divScroll() {
            this.scrollTop = event.target.scrollTop;
            // console.log(this.scrollTop);
            if(this.scrollTop>200){
                this.seen = true
            }else{
                this.seen = false
            }
        },
        backTop() {
            let back = document.querySelector("#back");
            back.scrollTop = 0
        }
    },
    
}
</script>

<style scoped>
.house-box{
    flex-grow: 1;
    overflow: auto;
}
.note-box-img{
    width: 100%;
    height: 100%;
}

/* 商品 */
.house-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgb(237, 216, 253);
    margin-top: -3px;
    padding: 0 5px 5px 5px;
}

.house-item{
    width: 32.7%;
    background: #fff;
    padding-bottom: 7px;
}

.house-item-img{
    width: 100%;
}

.house-item-title{
    font-size: 12px;
    color: #3C3C3C;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 10px;
}

.house-item-des{
    font-size: 12px;
    color: #3C3C3C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
}

.house-item-price{
    font-size: 12px;
    color: rgb(245, 75, 75);
    font-weight: bolder;
    text-align: center;
}

.house-item-i{
    font-size: 12px;
    color: rgba(0,0,0,.54);
    text-decoration: line-through;
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