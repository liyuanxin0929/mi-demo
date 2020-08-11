<template>
  <div class="bigbox" id="back">
    <div class="detail-topbox" ref="topbox">
      <div class="detail-topbox-item" v-if="seen" @click="goclick">
        <img src="../assets/向左圆箭头.png" />
      </div>
      <div class="detail-topbox-item topelse" v-else @click="goclick">
        <img src="../assets/向左.png" />
      </div>

      <div class="detail-topbox-item1" v-if="isdis">
        <span
          class="topbox-item1-list"
          ref="topboxspan1"
          :class="{active:this.scrolltop>0&&this.scrolltop<943}"
          @click="clickone"
        >商品</span>
        <span
          class="topbox-item1-list"
          ref="topboxspan2"
          :class="{active:this.scrolltop>943&&this.scrolltop<1569}"
          @click="clicktwo($refs.span1.offsetTop)"
        >评价</span>
        <span
          class="topbox-item1-list"
          ref="topboxspan3"
          :class="{active:this.scrolltop>1569}"
          @click="clicktwo($refs.span2.offsetTop)"
        >详情</span>
      </div>

      <div class="detail-topbox-item" v-if="seen">
        <img src="../assets/分享.png" />
      </div>
      <div class="detail-topbox-item topelse" v-else>
        <img src="../assets/分享1.png" />
      </div>
    </div>
    <div class="datail-center-item14 posibox" v-if="seen11">商品介绍</div>
    <!-- 中间 -->
    <transition>
      <div class="detail-centerbox" @scroll="myscroll" ref="scrollbox">
        <!-- 轮播图 -->
        <div class="lunbobox">
          <swiper ref="mySwiper" :options="swiperOptions" >
            <swiper-slide class="box" v-for="item in list[0]" :key="item.item">
              <img :src="item.img" alt class="img11" />
            </swiper-slide>
          </swiper>
          <div class="swiper-pagination" slot="pagination"></div>
        </div>

        <div class="pricebox">
          <span>￥</span>
          <span class="pricebox-span2" v-for="item in list[1]" :key="item.item">{{item.price}}</span>
        </div>
        <div class="detail-center-item1">
          <img src="../assets/en.jpg" />
          <span v-for="item in list[2]" :key="item.item">{{item.title}}</span>
        </div>
        <div class="detail-center-item2" v-for="item in list[3]" :key="item.item" :item="item">
          <div class="detail-item2-list">
            <img :src="item.one" />
            <span>{{item.title1}}</span>
          </div>
          <div class="detail-item2-list">
            <img :src="item.two" />
            <span>{{item.title2}}</span>
          </div>
          <div class="detail-item2-list lastimg">
            <img :src="item.three" />
            <span>{{item.title3}}</span>
          </div>
          <div class="detail-center-item3">{{item.title4}}</div>
          <div class="kong"></div>
          <div class="detail-center-item4">
            <div>已选</div>
            <div class="detail-item4-list listt1">
              <span>{{item.title5}}</span>
              <img src="../assets/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item4">
            <div>送至</div>
            <div class="detail-item4-list">
              <div>
                <img src="../assets/定位.png" />
                <span>苏州市 工业园区</span>
                <span style="color:#ff6700;margin-left:5px">有现货</span>
              </div>
              <img src="../assets/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item5">
            <div class="detail-item5-list1">
              <div class="detail-item5-list1box">
                <img src="../assets/勾.png" alt />
                <span>小米自营</span>
              </div>
              <div class="detail-item5-list1box">
                <img src="../assets/勾.png" alt />
                <span>小米发货</span>
              </div>
              <div class="detail-item5-list1box">
                <img src="../assets/勾.png" alt />
                <span>7天无理由退货</span>
              </div>
            </div>
            <div class="detail-item5-list2">
              <img src="../assets/箭头 right.png" />
            </div>
          </div>
          <div class="detail-center-item6">推荐套餐</div>
          <div class="detail-center-item8">
            <div class="detail-item8-list box">
              <img :src="item.img" />
              <p class="detail-item8-list-p1">{{item.title6}}</p>
              <p class="detail-item8-list-p2" ref="price1">￥{{price1}}</p>
            </div>
            <div class="detail-item8-listt1 boxx">+</div>
            <div class="detail-item8-list">
              <img src="../assets/wen2.jpg" class="item8-img" />
              <p class="detail-item8-list-p1">{{item.title7}}</p>
              <p class="detail-item8-list-p2">￥{{price2}}</p>
              <img src="../assets/huigou.png" class="gouimg" v-if="seen22" @click="gou1click" />
              <img src="../assets/honggou.png" class="gouimg" v-else @click="gou1click" />
            </div>
            <div class="detail-item8-list">
              <img src="../assets/wen3.jpg" class="item8-img" />
              <p class="detail-item8-list-p1">{{item.title8}}</p>
              <p class="detail-item8-list-p2">￥{{price3}}</p>
              <img src="../assets/huigou.png" class="gouimg" v-if="seen33" @click="gou2click" />
              <img src="../assets/honggou.png" class="gouimg" v-else @click="gou2click" />
            </div>
          </div>
        </div>
        <div class="datail-center-item9">
          总价：
          <span class="datail-item9-list">￥{{prices}}</span>
        </div>
        <div class="datail-center-item10">
          购买此套餐(
          <span>{{isnum}}</span>件商品
          )
        </div>
        <div class="datail-center-item11" ref="span1">
          <div class="datail-item11-list1">用户评价</div>
          <div class="datail-item11-list2">
            <div class="item11box" @click="evaluateclick">
              <span>好评率：99%</span>
            </div>
            <div class="item11box">
              <img src="../assets/箭头 right.png" class="rightimg" />
            </div>
          </div>
        </div>
        <div class="datail-center-item12">
          <div class="datail-item12-list1">
            <div class="item12-list1box">
              <img src="../assets/tou01.jpg" />
            </div>
            <div class="item12-list1box2">
              <p class="item12-p1">东方不败</p>
              <p class="item12-p2">2020-08-05</p>
            </div>
          </div>
          <div class="datail-item12-list2">用了几天了，没有被咬过！好评！！！</div>
          <div class="datail-item12-list3">
            <img src="../assets/ping01.jpg" />
          </div>
        </div>
        <div class="datail-center-item13">
          <div class="datail-item13-list1">
            <span>米粉点评团</span>
            <img src="../assets/箭头 right.png" class="rightimg" />
          </div>
          <div class="datail-item13-list">
            <div class="datail-item13-listbox11" v-for="item in list[4]" :key="item.price">
              <div class="datail-item13-listbox1">
                <img :src="item.img" />
              </div>
              <div class="datail-item13-listbox2">{{item.text}}</div>
              <div class="datail-item13-listbox3">
                <div class="datail-listbox3-item listitem03">
                  <img :src="item.tou" />
                  <span>{{item.name}}</span>
                </div>
                <div class="datail-listbox3-item listitem04">
                  <img src="../assets/眼睛3.png" />
                  <span>{{item.price}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- 商品介绍 -->
        <div class="datail-center-item14" ref="span2">商品介绍</div>
        <div class="datail-center-item15" v-for="item in list[5]" :key="item.img">
          <img :src="item.img" />
        </div>
      </div>
    </transition>

    <!-- 底部 -->
    <div class="detail-bottombox">
      <div class="detail-bottombox-item1">
        <div class="detail-item1-list" @click="shouclick">
          <img src="../assets/房子1.png" alt />
          <p>首页</p>
        </div>
        <div class="detail-item1-list bottom-count" @click="gouwuclick">
          <img src="../assets/购物车.png" alt />
          <p>购物车</p>
          <div class="countbox" v-if="count>0">{{count}}</div>
        </div>
      </div>
      <div class="detail-bottombox-item2" @click="popclick(list[list.length-1])">加入购物车</div>
    </div>
    <!-- 追罩层 -->
    <div class="popbox" :style="{display:isdisplay}">
      <div class="popbox1">
        <img src="../assets/对号.png" />
      </div>
      <div class="popbox1">成功加入购物车！</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props:["item"],
  data() {
    return {
      isdisplay: "none",
      price1:58,
      price2:20,
      price3: 17.9,
      isnum: 1,
      num22: 0,
      seen22: true,
      num33: 0,
      seen33: true,
      seen11: false,
      isdis: false,
      scrolltop: 0,
      seen: true,
      back:true,
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          type: "fraction",
          //   clickable: true, // 允许点击小圆点跳转
        },
        autoplay: {
          delay: 3000, //时间
          disableOnInteraction: false, // 手动切换之后继续自动轮播
        },
        loop: true,
      },
      list:[],
    };
  },
  // 计算总价格
  computed:{
     wrap () {
        return this.$store.state.wrap
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
  
    prices() {
      if (this.seen22 == false && this.seen33 == true) {
        return parseInt(this.price1) + parseInt(this.price2);
      } else if (this.seen33 == false && this.seen22 == true) {
        return this.price1 + this.price3;
      } else if (this.seen33 == false && this.seen22 == false) {
        return this.price1 + this.price2 + this.price3;
      } else {
        return this.price1;
      }
    },
  },
// axios请求
    activated() {
      let url = `http://127.0.0.1:5500/dist/data/DetailsList${this.$route.query.id}.json`;
      let that = this;
      console.log("chengg");
      axios
        .get(url)
        .then(function (response) {
          if (response.data.code == 200) {
            console.log(response);
            that.list = response.data.list;

            //   console.log(that.list);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  methods: {
    
    // 跳转好评
    evaluateclick() {
      this.$router.push({
        path: "/evaluate",
      });
    },
    // 跳转
    clickone() {
      let that = this;
      let timer = setInterval(function () {
        that.$refs.scrollbox.scrollTop -= 120;
        if (that.$refs.scrollbox.scrollTop <= 0) {
          clearInterval(timer);
        }
      }, 50);
    },
    clicktwo(n) {
      let that = this;
      console.log(n + ",222");
      let timer = setInterval(function () {
        let x = parseInt(n / 30);
        if (that.$refs.scrollbox.scrollTop < n) {
          that.$refs.scrollbox.scrollTop += x;
          if (that.$refs.scrollbox.scrollTop >= n) {
            clearInterval(timer);
          }
        } else {
          that.$refs.scrollbox.scrollTop -= x;
          if (that.$refs.scrollbox.scrollTop <= n) {
            clearInterval(timer);
          }
        }
      }, 1);
    },
    
    // 追罩层添加购物车
    popclick(item) {
      this.isdisplay = "block";
      let that = this;
      this.$store.commit("adddetail",item)
      console.log(item)
      console.log(this.wrap)

      setTimeout(function () {
        that.isdisplay = "none";
      }, 3000);
    },
    // 推荐商品下面的勾
    gou1click() {
      this.num22++;
      if (this.num22 % 2 == 0) {
        this.seen22 = true;
        this.isnum--;
      } else {
        this.seen22 = false;
        this.isnum++;
      }
    },
    gou2click() {
      this.num33++;
      if (this.num33 % 2 == 0) {
        this.seen33 = true;
        this.isnum--;
      } else {
        this.seen33 = false;
        this.isnum++;
      }
    },
    // 返回方法
    goclick() {
      this.$router.go(-1);
    },
    shouclick(){
      this.$router.push({
        path:"/"
      })
    },
    gouwuclick(){
      this.$router.go(-1)
    },
    // scroll事件
    myscroll(event) {
      this.scrolltop = event.target.scrollTop;
      let y = this.scrolltop / 400;
      this.$refs.topbox.style = `background:rgba(255, 255, 255,${y})`; //顶部div的背景透明度
      console.log(this.scrolltop);
      if (this.scrolltop > 200) {
        this.seen = false;
      } else {
        this.seen = true;
      }
      if (this.scrolltop >= 200) {
        this.isdis = true;
      } else {
        this.isdis = false;
      }
      if (this.scrolltop >= 1569) {
        this.seen11 = true;
      } else {
        this.seen11 = false;
      }
    },
  },
};
</script>

<style scoped>
.bigbox {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}
.detail-topbox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  height: 60px;
}
.detail-topbox-item img {
  width: 32px;
  height: 32px;
}
.posibox {
  position: fixed;
  top: 52px;
  left: 0;
  z-index: 5;
  width: 100%;
  text-align: center;
  background-color: white;
}
.detail-topbox-item {
  display: flex;
  justify-content: center;
  align-items: center;
}
.topelse img {
  width: 22px;
  height: 22px;
}
.detail-centerbox {
  flex-grow: 1;
  overflow: auto;
}
.topbox-item1-list {
  font-size: 14px;
  margin-right: 10px;
  padding-bottom: 5px;
}
.active {
  color: #ff6700;
  border-bottom: 1px solid red;
}

/* 轮播图 */
.lunbobox {
  position: relative;
  /* z-index: 20; */
}
.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 82%;
  color: white;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  font-size: 12px;
  width: 40px;
  height: 25px;
  text-align: center;
  line-height: 25px;
}
.box img {
  width: 100%;
  height: 100%;
}
.pricebox {
  color: #ff6700;
  display: flex;
  align-items: center;
  padding: 5px 10px;
  font-weight: bolder;
}
.pricebox-span2 {
  font-size: 23px;
}
.detail-center-item1 img {
  height: 15px;
  width: 30px;
  margin-right: 10px;
}
.detail-center-item1 {
  padding: 5px 10px;
  font-size: 18px;
  font-weight: bolder;
}
.detail-item2-list img {
  height: 15px;
  width: 15px;
  margin-right: 10px;
}
.detail-item2-list {
  padding: 0px 10px;
  font-size: 13px;
  color: #444;
}
.lastimg img {
  width: 13px;
  height: 13px;
}
.detail-center-item3 {
  font-size: 13px;
  color: #444;
  background-color: #f0f0f0;
  border-radius: 10px;
  margin: 10px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 88%;
  padding-left: 5px;
}
.kong {
  height: 8px;
  margin-top: 17px;
  background-color: rgb(246, 246, 246);
}
.detail-center-item4 {
  display: flex;
  align-items: center;
  font-size: 15px;
  padding-left: 10px;
}
.detail-item4-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 15px;
  flex-grow: 1;
  padding: 10px 10px 10px 0px;
}
.detail-item4-list img {
  width: 15px;
  height: 15px;
}
.listt1 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}
.detail-center-item5 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: rgb(246, 246, 246);
}
.detail-item5-list1 {
  display: flex;
  align-items: center;
}
.detail-item5-list1box img {
  height: 13px;
  width: 13px;
  margin-right: 5px;
}
.detail-item5-list1box {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
  margin-right: 10px;
}
.detail-item5-list2 img {
  width: 15px;
  height: 15px;
}
.detail-center-item6 {
  padding: 10px;
  font-size: 15px;
}
.detail-bottombox {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
}
.detail-item1-list img {
  width: 22px;
  height: 22px;
}
.detail-item1-list {
  margin-right: 20px;
  text-align: center;
}
.detail-bottombox-item1 {
  font-size: 12px;
  display: flex;
  align-items: center;
}
.detail-bottombox-item2 {
  height: 38px;
  width: 180px;
  border-radius: 30px;
  background-color: #ff6700;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}
/* 推荐 */
.detail-item8-list {
  width: 28%;
  border-radius: 10px;
  border: 1px solid #e5e5e5;
  color: #333333;
  font-size: 14px;
  padding: 5px;
  position: relative;
}
.gouimg {
  width: 28px;
  height: 28px;
  position: absolute;
  bottom: 0;
  right: 0;
}
.detail-center-item8 {
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.item8-img {
  width: 100%;
  height: 100%;
}
.detail-item8-list-p2 {
  font-weight: bold;
  font-size: 13px;
}
.detail-item8-list-p1 {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.detail-item8-listt {
  display: flex;
  align-items: center;
}
.detail-item8-listt1 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
}
.boxx {
  margin-right: 10px;
}
/* 总价 */
.datail-center-item9 {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
}
.datail-item9-list {
  color: #ff6700;
  font-weight: bold;
}
.datail-center-item10 {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  text-align: center;
  margin: 5px auto;
  color: #f0f0f0;
  background-color: #ff6700;
  padding: 10px;
  border-radius: 30px;
  font-size: 14px;
  margin-bottom: 15px;
}
/* 评价 */
.rightimg {
  width: 15px;
  height: 15px;
}
.datail-center-item11 {
  display: flex;
  justify-content: space-between;
  padding: 10px;
  align-items: center;
}
.datail-item11-list1 {
  font-size: 15px;
  font-weight: bold;
}
.datail-item11-list2 {
  color: #7f7f7f;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.item11box {
  display: flex;
  justify-content: center;
  align-items: center;
}
.datail-center-item12 {
  width: 95%;
  margin: 10px auto;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 10px 15px;
}
.datail-item12-list1 {
  display: flex;
  align-items: center;
}
.item12-list1box img {
  width: 40px;
  height: 40px;
}
.item12-list1box {
  border-radius: 50%;
  overflow: hidden;
  margin-right: 10px;
}
.item12-p1 {
  color: #000;
  font-size: 14px;
}
.item12-p2 {
  color: rgba(0, 0, 0, 0.3);
  font-size: 12px;
}
.datail-item12-list2 {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  margin: 5px 0px 15px;
}
.datail-item12-list3 img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
}
.datail-center-item13 {
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 15px;
  padding: 20px 10px;
}
.datail-item13-list1 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 17px;
}
.datail-item13-listbox11 {
  margin-top: 15px;
  width: 140px;
  margin-right: 10px;
  border: 1px solid #e5e5e5;
  padding: 0 0 10px;
  border-radius: 10px;
}
.datail-item13-listbox1 img {
  height: 140px;
  width: 139px;
  border-radius: 10px;
}
.datail-item13-listbox1 {
  background-color: rgb(241, 241, 241);
}
.datail-item13-listbox2 {
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  padding: 0 8px;
}
.listitem03 img {
  width: 12px;
  height: 15px;
  margin-right: 5px;
}
.listitem04 img {
  height: 12px;
  width: 16px;
  margin-right: 5px;
}
.datail-listbox3-item {
  font-size: 12px;
}
.datail-item13-listbox3 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  margin-top: 8px;
  color: #aaa8a8;
}
.datail-item13-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: auto;
  padding: 5px 0;
}
.datail-center-item14 {
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  color: #ff6700;
  font-size: 14px;
}
/* 购物车 */
.bottom-count{
    position: relative;
}
.countbox{
    position: absolute;
    width: 16px;
    height: 16px;
    font-size:5px;
    color: #fff;
    background-color:#ed4d41;
    border-radius: 50%;
    top: -2px;
    right: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}
/* 商品介绍 */
.datail-center-item15 img {
  width: 100%;
  height: 100%;
}
/* 追罩层 */
.popbox {
  z-index: 10;
  position: fixed;
  top: 40%;
  left: 25%;
  background-color: rgba(0, 0, 0, 0.5);
  width: 50%;
  height: 150px;
  border-radius: 10px;
  padding:  20px 10px;
}
.popbox1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #f0f0f0;
  margin-bottom: 15px;
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