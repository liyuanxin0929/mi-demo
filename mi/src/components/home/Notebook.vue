<template>
    <!-- 笔记本 -->
    <div class="note-box" ref="contactList" @scroll="divScroll" id="back">
        <!-- 回到顶部 -->
        <div class="back-top-wrap"  v-if="seen" @click="backTop">
            <img src="../../assets/回到顶部.png" class="backTop" />
        </div>
        <div>
            <img src="../../assets/notebook/11.jpg" class="note-box-img">
        </div>

        <div class="note-list">
            <div class="note-list-item" v-for="item in list[1]" :key="item.img">
                <img :src="item.img" class="note-list-img">
            </div>
        </div>

        <div>
            <img src="../../assets/notebook/04.jpg" class="note-box-img">
        </div>

        <div class="note-wrap">
            <div class="note-item" v-for="item in list[0]" :key="item.img">
                <img :src="item.img" class="note-item-img">
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
            //     index:4
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
        let url = `http://127.0.0.1:5500/dist/data/NotebookList.json`;
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
.note-box{
    flex-grow: 1;
    overflow: auto;
}

.note-box-img{
    width: 100%;
    height: 100%;
}
.note-item-img{
    width: 100%;
    height: 100%;
}
.note-wrap{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}
.note-item{
    width: 50%;
}

.note-list-img{
    width: 100%;
}

.note-list{
    padding: 10px 5px;
    margin-top: -5px;
    background-color: rgb(72, 120, 166);
}

.note-list-item{
    margin-bottom: 10px;
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