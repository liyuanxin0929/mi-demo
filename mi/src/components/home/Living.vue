<template>
    <!-- 生活周边 -->
    <div class="living-box" ref="contactList" @scroll="divScroll" id="back">
        <!-- 回到顶部 -->
        <div class="back-top-wrap"  v-if="seen" @click="backTop">
            <img src="../../assets/回到顶部.png" class="backTop" />
        </div>
        <div>
            <img src="../../assets/living/01.jpg" class="living-box-img">
        </div>

        <div class="living-wrap">
            <div class="living-item" v-for="item in list[0]" :key="item.item">
                <img :src="item.img"  class="living-item-img">
            </div>
        </div>

        <div>
            <img src="../../assets/living/08.jpg" class="living-box-img">
        </div>

        <div class="living-list">
            <div class="living-list-item" v-for="item in list[1]" :key="item.item">
                <img :src="item.img" class="living-list-img">
                <p class="living-list-title">{{item.title}}</p>
                <p class="living-list-des">{{item.des}}</p>
                <p class="living-list-price">
                    {{item.price}}
                   <span class="living-list-i">{{item.i}}</span> 
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
            // meta:{
            //     index:6
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
    let url = `http://127.0.0.1:5500/dist/data/LivingList.json`;
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
            back.scrollTop = 0
        }
    },
}
</script>

<style scoped>
.living-box{
    flex-grow: 1;
    overflow: auto;
    background-color: rgb(91, 176, 163);
}

.living-box-img{
    width: 100%;
    height: 100%;
}

.living-item-img{
    width: 100%;
}

.living-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.living-item{
    width: 50%;
}

.living-list{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 3px;
}

.living-list-item{
    width: 32%;
    background: #fff;
    margin-bottom: 5px;
    border-radius: 5px;
}

.living-list-img{
    width: 100%;
    border-radius: 5px;
}

.living-list-title{
    font-size: 12px;
    color: #3C3C3C;
    font-weight: bolder;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
}

.living-list-des{
    font-size: 12px;
    color: #3C3C3C;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    padding: 0 5px;
}

.living-list-price{
    font-size: 12px;
    color: rgb(245, 75, 75);
    font-weight: bolder;
    text-align: center;
}

.living-list-i{
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