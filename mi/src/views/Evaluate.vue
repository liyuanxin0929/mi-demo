<template>
    <div class="evalu-box">
        <!-- 头部 -->
        <div class="evalu-top">
            <div class="evalu-left" @click="back">
                <img src="../assets/箭头 左 小.png" class="evalu-left-img">
            </div>
            <div class="evalu-title-box">
                <span class="evalu-title">商品评论</span>
            </div>
            <div class="evalu-right" @click="searchBtn">
                <img src="../assets/搜索.png" alt="" class="evalu-right-img">
            </div>  
        </div>

        <!-- 满意 -->
        <div class="title-box">
            <div class="title-img-box">
                <img src="../assets/evaluate/face.png" class="title-item-img">
            </div>
            <div class="title-item1">99.0</div>
            <div class="title-item2">%满意</div>
        </div>

        <!-- 热门 -->
        <div class="evalu-content">
            <div class="evalu-content-left">
                <p class="evalu-left-item">最热门</p>
            </div>
            <div class="evalu-content-right">
                <input type="checkbox" class="evalu-right-input">
                <span class="evalu-right-item">有图片</span>
            </div>
        </div>

        <!-- 评价 -->
        <div class="evalu-item-content">
            <div v-for="item in list" :key="item.item" class="evalu-item">
                <div class="evalu-item-top">
                    <div class="evalu-item-left">
                        <img :src="item.img" class="evalu-item-img">
                    </div>
                    <div class="evalu-item-name-box">
                        <p class="evalu-item-name">{{item.name}}</p>
                        <p class="evalu-item-time">{{item.time}}</p>
                    </div>
                    <div class="evalu-item-right">
                        <div class="evalu-item-ico-box">
                           <img :src="item.ico" class="evalu-item-ico"> 
                        </div>
                        <div class="evalu-item-a-box">
                            <p class="evalu-item-a">{{item.a}}</p>
                        </div>
                    </div>
                </div>
                <div class="evalu-item-des-box">
                    <p class="evalu-item-des">{{item.des}}</p>
                </div>
                <div class="evalu-item-bottom">
                    <img :src="item.images" class="evalu-images">
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
            list:[]
        }
    },
    methods:{
        // 返回按钮
        back(){
            this.$router.go(-1);
        },

        // 搜索按钮
        searchBtn(){
            this.$router.push({
                path: "/search",
            });
        }
    },
    created(){
        let that = this;
        let url = "http://localhost:5500/dist/data/Evaluate.json";
        axios.get(url)
            .then(function(respone){
                console.log(respone);
                if(respone.data.code == 200){
                    that.list = respone.data.list
                    console.log(that.list)
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}
</script>

<style scoped>
.evalu-box{
    height: 100%;
}

/* 顶部 */
.evalu-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 15px 5px;
}
.evalu-left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.evalu-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
.evalu-title-box{
    display: flex;
    justify-content: center;
    align-items: center;
}
.evalu-left-img{
    width: 25px;
}
.evalu-right-img{
    width: 20px;
}

.evalu-title{
    color: #666666;
    font-size: 13px;
}

/* 满意 */
.title-box{
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px 0;
    background: #f37d0f;
    align-items: flex-end;
}
.title-item-img{
    width: 100%;
}
.title-img-box{
    width: 10%;
}
.title-item1{
    color: #fff;
    font-size: 27px;
    margin-left: 7px;
}
.title-item2{
    color: #fff;
    font-size: 12px;
    margin-left: 7px;
    padding-bottom: 5px;
}

/* 热门 */
.evalu-content{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background: #FAFAFA;
}
.evalu-left-item{
    color: #ff6600;
    font-size: 12px;
}
.evalu-right-item{
    color: #AFAFAF;
    font-size: 12px;
    margin-left: 5px;
}
.evalu-right-input{
    background: #EEEEEE;
    border: 1px solid #e0e0e0;
}
.evalu-content-right{
    display: flex;
    flex-direction: row;
    align-items: center;
}

/* 评价 */
.evalu-item-content{
    overflow: auto;
    flex-grow: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.evalu-item-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.evalu-item{
    padding: 10px 20px;
    border-bottom: 1px solid #e0e0e0;
}
.evalu-item-left{
    width: 15%;
}
.evalu-item-img{
    width: 100%;
    border-radius: 50px;
}
.evalu-item-name-box{
    flex-grow: 1;
    margin-left: 10px;
}
.evalu-item-name{
    color: #3C3C3C;
    font-size: 12px;
}
.evalu-item-time{
    color: rgba(0,0,0,.54);
    font-size: 12px;
}   
.evalu-item-right{
    display: flex;
    flex-direction: row;
    justify-content: center;
} 
.evalu-item-a{
    font-size: 12px;
    color: #ff6700;
}
.evalu-item-ico{
    width: 40%;
}
.evalu-item-a-box{
    width: 10%;
    margin-left: -20px;
}

.evalu-item-des{
    color: #3C3C3C;
    font-size: 12px;
}

.evalu-item-bottom{
    margin: 10px auto;
}
.evalu-images{
    width: 100%;
}
</style>