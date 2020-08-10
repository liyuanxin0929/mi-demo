<template>
    <div class="search-box">
        <div class="search-top">
            <div class="search-left" @click="back">
                <img src="../assets/箭头 左 小.png" class="search-left-img">
            </div>
            <div class="search-input-box">
                <input type="text" placeholder="搜索商品名称" class="search-input">
            </div>
            <div class="search-right">
                <img src="../assets/搜索.png" alt="" class="search-right-img">
            </div>  
        </div>

        <div class="search-title">搜索发现</div>
        <div class="search-img-box">
            <img src="../assets/search/search.jpg" class="search-img">
        </div>

        <div class="search-item-wrap">
            <div class="search-item" v-for="item in list" :key="item.item">
                <p class="search-i">{{item.item}}</p>
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
                    item:"Redmi K30 Pro"
                },
                {
                    item:"小米816主会场"
                },
                {
                    item:"米家定制T恤"
                },
                {
                    item:"空调"
                },
                {
                    item:"小米10"
                },
                {
                    item:"小米手机"
                },
                {
                    item:"家电"
                },
                {
                    item:"电视"
                },
                {
                    item:"全部商品"
                },
                {
                    item:"米家插线板 快充版"
                }
            ]
        }
    },
    methods:{
        back(){
            this.$router.go(-1);
        }
    }
}
</script>

<style scoped>
/* 顶部 */
.search-top{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    padding: 5px 5px;
}
.search-left{
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-right{
    display: flex;
    justify-content: center;
    align-items: center;
}
.search-input-box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
}
.search-left-img{
    width: 25px;
}
.search-right-img{
    width: 20px;
}
.search-input{
    width: 100%;
    flex-grow: 1;
    padding: 3px 10px;
    margin: 0 10px;
    border: 1px solid #e0e0e0;
    border-radius: 3px;
    outline: none;
}

/* 搜索发现 */
.search-title{
    color: #3C3C3C;
    font-size: 12px;
    font-weight: bolder;
    padding: 20px 15px;
}
.search-img{
    width: 100%;
    border-radius: 10px;
}
.search-img-box{
    padding: 0 15px 15px;
}

/* 商品列表 */
.search-item-wrap{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 20px 5px 20px;
}
.search-item{
    width: 50%;
    color: #3C3C3C;
    font-size: 12px;
}
.search-i{
    margin: 5px;
}
</style>