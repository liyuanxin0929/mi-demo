<template>
  <!-- 推荐 -->
  <div class="recommend-box" ref="contactList" @scroll="divScroll" id="back">
    <!-- 回到顶部 -->
      <div class="back-top-wrap"  v-if="seen" @click="backTop">
        <img src="../../assets/回到顶部.png" class="backTop" />
      </div>

    <!-- 轮播 -->
    <div class="recommend-top">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide class="recommend-top-img">
          <img src="../../assets/recommend/01.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="recommend-top-img">
          <img src="../../assets/recommend/02.jpg" class="top-img" />
        </swiper-slide>
        <swiper-slide class="recommend-top-img">
          <img src="../../assets/recommend/03.jpg" class="top-img" />
        </swiper-slide>
      </swiper>

      <div class="swiper-pagination" slot="pagination"></div>
    </div>

    <!-- 小米秒杀 -->
    <div class="recommend-content">
      <div class="content-wrap" v-for="item in wrap" :key="item.img">
        <img :src="item.img" alt class="content-img" />
      </div>
    </div>

    <!-- 图片 -->
    <div class="recommend-imgages-wrap">
      <div class="recommend-one">
        <img src="../../assets/recommend/04.jpg" class="one-img" />
      </div>
      <div class="recommend-wrap">
        <div>
          <img src="../../assets/recommend/05.jpg" class="one-img" />
        </div>
        <div>
          <img src="../../assets/recommend/06.jpg" class="one-img" />
        </div>
      </div>
    </div>
    <div>
      <img src="../../assets/recommend/07.jpg" class="recommend-img1" />
    </div>

    <!-- 小米手机产品 -->
    <div>
      <img src="../../assets/recommend/08.jpg" class="recommend-img2" />
    </div>

    <div class="recommend-phone-wrap">
      <div v-for="item in phoneWrap" :key="item.item" class="recommend-phone">
        <img :src="item.img" alt class="recommend-phone-img" />
        <div class="recommend-phone-content">
          <p class="recommend-phone-title">{{item.title}}</p>
          <p class="recommend-phone-des">{{item.des}}</p>
          <p class="recommend-phone-price">
            {{item.price}}
            <span class="recommend-phone-i">{{item.i}}</span>
          </p>
          <p class="recommend-phone-btn">{{item.btn}}</p>
        </div>
      </div>
    </div>

    <div class="recommend-phone-item">更多小米手机产品></div>

    <!-- 小米电视产品 -->
    <div>
      <img src="../../assets/recommend/15.jpg" class="recommend-img3" />
    </div>

    <div class="recommend-television-wrap">
      <div v-for="item in televisionWrap" :key="item.item" class="recommend-phone">
        <img :src="item.img" alt class="recommend-phone-img" />
        <div class="recommend-television-content">
          <p class="recommend-television-title">{{item.title}}</p>
          <p class="recommend-phone-des">{{item.des}}</p>
          <p class="recommend-phone-price">
            {{item.price}}
            <span class="recommend-phone-i">{{item.i}}</span>
          </p>
          <p class="recommend-phone-btn">{{item.btn}}</p>
        </div>
      </div>
    </div>

    <div class="recommend-phone-item">更多小米电视产品></div>

    <!-- 小米笔记本产品 -->
    <div>
      <img src="../../assets/recommend/22.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../../assets/recommend/23.jpg" class="recommend-img4" />
    </div>

    <div class="recommend-phone-wrap">
      <div v-for="item in notebookWrap" :key="item.item" class="recommend-phone">
        <img :src="item.img" alt class="recommend-phone-img" />
        <div class="recommend-phone-content">
          <p class="recommend-notebook-title">{{item.title}}</p>
          <p class="recommend-phone-des">{{item.des}}</p>
          <p class="recommend-phone-price">
            {{item.price}}
            <span class="recommend-phone-i">{{item.i}}</span>
          </p>
          <p class="recommend-phone-btn">{{item.btn}}</p>
        </div>
      </div>
    </div>

    <div class="recommend-phone-item">更多小米笔记本产品></div>

    <!-- 小米家电产品 -->
    <div>
      <img src="../../assets/recommend/26.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../../assets/recommend/27.jpg" class="recommend-img4" />
    </div>

    <div class="recommend-household-wrap">
      <div v-for="item in householdWrap" :key="item.item" class="recommend-household">
        <img :src="item.img" alt class="recommend-household-img" />
        <div class="recommend-household-content">
          <p class="recommend-household-title">{{item.title}}</p>
          <p class="recommend-household-des">{{item.des}}</p>
          <p class="recommend-household-price">
            {{item.price}}
            <span class="recommend-household-i">{{item.i}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="recommend-household-item">更多米家家电产品></div>

    <!-- 米家智能产品 -->
    <div>
      <img src="../../assets/recommend/34.jpg" class="recommend-img4" />
    </div>
    <div>
      <img src="../../assets/recommend/35.jpg" class="recommend-img4" />
    </div>

    <div class="recommend-mind-wrap">
      <div v-for="item in mindWrap" :key="item.item" class="recommend-mind">
        <img :src="item.img" alt class="recommend-household-img" />
        <div class="recommend-mind-content">
          <p class="recommend-household-title">{{item.title}}</p>
          <p class="recommend-household-des">{{item.des}}</p>
          <p class="recommend-household-price">
            {{item.price}}
            <span class="recommend-household-i">{{item.i}}</span>
          </p>
        </div>
      </div>
    </div>

    <div class="recommend-household-item">更多米家智能产品></div>

    <!-- 图片 -->
    <div class="recommend-images-box">
      <div class="recommend-images" v-for="item in imagesWrap" :key="item.item">
        <img :src="item.img" class="recommend-img" />
      </div>
    </div>

    <div class="recommend-pic">
      <img src="../../assets/recommend/45.jpg" class="recommend-img5" />
    </div>

    <div>
      <img src="../../assets/recommend/46.png" class="recommend-img6" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      seen:false,
      listEle:null,
      scrollTop:0,
      wrap: [
        {
          img: require("../../assets/recommend/s01.png"),
        },
        {
          img: require("../../assets/recommend/s02.jpg"),
        },
        {
          img: require("../../assets/recommend/s03.jpg"),
        },
        {
          img: require("../../assets/recommend/s04.jpg"),
        },
        {
          img: require("../../assets/recommend/s05.jpg"),
        },

        {
          img: require("../../assets/recommend/s06.jpg"),
        },
        {
          img: require("../../assets/recommend/s07.png"),
        },
        {
          img: require("../../assets/recommend/s08.png"),
        },
        {
          img: require("../../assets/recommend/s09.jpg"),
        },
        {
          img: require("../../assets/recommend/s10.png"),
        },
      ],
      phoneWrap: [
        {
          img: require("../../assets/recommend/09.jpg"),
          title: "小米10 Pro",
          des: "骁龙865/50倍变焦",
          price: "￥4999起",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/10.jpg"),
          title: "小米10",
          des: "骁龙865/1亿像素相机",
          price: "￥3799起",
          i: "￥3999",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/11.jpg"),
          title: "Redmi K30 4G",
          des: "120Hz流速屏，全速热全速热",
          price: "￥1399起",
          i: "￥1699",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/12.jpg"),
          title: "Redmi K30 5G",
          des: "双模5G，120Hz流速屏",
          price: "￥1699起",
          i: "￥1999",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/13.jpg"),
          title: "Note 8 Pro",
          des: "6400万全场景四摄",
          price: "￥1099起",
          i: "￥1399",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/14.jpg"),
          title: "Redmi Note 8",
          des: "千元4800万四摄",
          price: "￥899起",
          i: "￥999",
          btn: "立即购买",
        },
      ],
      televisionWrap: [
        {
          img: require("../../assets/recommend/16.jpg"),
          title: "小米电视4A 65英寸",
          des: "4K HDR，人工智能语音",
          price: "￥2499",
          i: "￥2999",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/17.jpg"),
          title: "小米电视4X 43英寸",
          des: "FHD全高清屏，人工智能语音",
          price: "￥999",
          i: "￥1399",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/18.jpg"),
          title: "小米电视4C 50英寸",
          des: "4K HDR，钢琴烤漆",
          price: "￥1599",
          i: "￥1699",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/19.jpg"),
          title: "小米电视4C 55英寸",
          des: "4K HDR，人工智能系统",
          price: "￥1699",
          i: "￥1999",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/20.jpg"),
          title: "小米电视4A 32英寸",
          des: "人工智能系统，高清系统",
          price: "￥599",
          i: "￥799",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/21.png"),
          title: "小米电视4A 50英寸",
          des: "4K HDR，人工智能语音系统",
          price: "￥1499",
          i: "￥1699",
          btn: "立即购买",
        },
      ],
      notebookWrap: [
        {
          img: require("../../assets/recommend/24.jpg"),
          title: "Air 13.3 2019款",
          des: "新一代独立显卡",
          price: "￥5699起",
          i: "￥5999",
          btn: "立即购买",
        },
        {
          img: require("../../assets/recommend/25.jpg"),
          title: "小米笔记本15.6 MXLLL",
          des: "全面均衡的国民轻薄本",
          price: "￥3899起",
          i: "￥4299",
          btn: "立即购买",
        },
      ],
      householdWrap: [
        {
          img: require("../../assets/recommend/28.jpg"),
          title: "变频 | 米家互联网空调智能",
          des: "变频节能，高效制冷热",
          price: "￥1999",
          i: "￥2699",
        },
        {
          img: require("../../assets/recommend/29.jpg"),
          title: "米家洗烘一体机Pro",
          des: "智能洗烘，省心省力",
          price: "￥2999",
        },
        {
          img: require("../../assets/recommend/30.jpg"),
          title: "定频 | 米家空调 大1匹",
          des: "出众静音，快速制冷热",
          price: "￥1499",
          i: "￥1799",
        },
        {
          img: require("../../assets/recommend/31.jpg"),
          title: "米家互联网洗烘一体机一体机",
          des: "洗的净，烘的干",
          price: "￥2099",
          i: "￥2299",
        },
        {
          img: require("../../assets/recommend/32.jpg"),
          title: "自清洁 | 米家互联网空调",
          des: "变频节能省电，自清洁",
          price: "￥1999",
          i: "￥2699",
        },
        {
          img: require("../../assets/recommend/33.jpg"),
          title: "Redmi全自动波轮洗衣机",
          des: "一键操作，父母都爱用",
          price: "￥849",
          i: "￥899",
        },
      ],
      mindWrap: [
        {
          img: require("../../assets/recommend/36.jpg"),
        },
        {
          title: "米家直流变频落地风扇1X",
          des: "模拟自然风算法，支持AI语音",
          price: "￥299",
        },
        {
          title: "小爱音响万能遥控版",
          des: "传统家电秒变智能",
          price: "￥149",
          i: "￥199",
        },
        {
          img: require("../../assets/recommend/37.jpg"),
        },
        {
          img: require("../../assets/recommend/38.jpg"),
        },
        {
          title: "米家照片打印机",
          des: "手机即拍即印",
          price: "￥499",
        },
      ],
      imagesWrap: [
        {
          img: require("../../assets/recommend/39.jpg"),
        },
        {
          img: require("../../assets/recommend/40.jpg"),
        },
        {
          img: require("../../assets/recommend/41.jpg"),
        },
        {
          img: require("../../assets/recommend/42.jpg"),
        },
        {
          img: require("../../assets/recommend/43.jpg"),
        },
        {
          img: require("../../assets/recommend/44.jpg"),
        },
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
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },

  // 回到顶部
  // mounted() {
  //   this.listEle = this.$refs.contactList;
  // },
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
      // console.log(this.$refs.contactList);
      // console.log(back.scrollTop);
    }
  },
};
</script>

<style scoped>
.recommend-box {
  flex-grow: 1;
  overflow: auto;
}
/* 轮播 */
.top-img {
  width: 100%;
  height: 100%;
}
.recommend-top {
  position: relative;
}

.swiper-pagination {
  position: absolute;
  bottom: 20px;
  left: 45%;
  --swiper-theme-color: #ffffff;
}

/* 小米秒杀 */
.recommend-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.content-wrap {
  width: 20%;
}
.content-img {
  width: 100%;
}

/* 图片 */
.one-img {
  width: 100%;
}
.recommend-imgages-wrap {
  padding: 8px 0;
  background: #f5f5f5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.recommend-one {
  width: 50%;
}
.recommend-wrap {
  width: 50%;
  margin-left: 3px;
}
.recommend-img1 {
  width: 100%;
}

/* 小米手机产品 */
.recommend-img2 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}

.recommend-phone-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
}
.recommend-phone {
  width: 50%;
  padding: 5px;
}
.recommend-phone-content {
  text-align: center;
  padding: 3px 27px;
}
.recommend-phone-img {
  width: 100%;
}
.recommend-phone-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
}
.recommend-phone-des {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-phone-price {
  font-size: 12px;
  color: #ea625b;
}
.recommend-phone-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}
.recommend-phone-btn {
  background: #ea625b;
  text-align: center;
  color: #fff;
  font-size: 12px;
  border-radius: 3px;
  padding: 5px 0;
}
.recommend-phone-item {
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px;
}

/* 小米电视产品 */
.recommend-img3 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}
.recommend-television-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}
.recommend-television-content {
  text-align: center;
  padding: 3px 20px;
}
.recommend-television-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 8px;
}

/* 小米笔记本产品 */
.recommend-img4 {
  padding-top: 8px;
  background: #f5f5f5;
  width: 100%;
}
.recommend-notebook-title {
  color: rgba(0, 0, 0, 0.87);
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 小米家电产品 */
.recommend-household-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}
.recommend-household {
  width: 49.8%;
}
.recommend-household-img {
  width: 100%;
}
.recommend-household-content {
  padding: 3px 15px 10px 15px;
}
.recommend-household-title {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.87);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-household-des {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.recommend-household-price {
  font-size: 12px;
  color: #ea625b;
}
.recommend-household-i {
  font-size: 12px;
  color: rgba(0, 0, 0, 0.54);
  text-decoration: line-through;
}
.recommend-household-item {
  font-size: 12px;
  color: rgb(0, 0, 0, 0.6);
  text-align: center;
  padding: 15px;
}

/* 米家智能产品 */
.recommend-mind-wrap {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  border-bottom: 1px solid rgb(0, 0, 0, 0.3);
}
.recommend-mind {
  width: 50%;
}
.recommend-mind-content {
  margin-left: 10px;
}

/* 图片 */
.recommend-images-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
}
.recommend-images {
  width: 49.8%;
}
.recommend-img {
  width: 100%;
}

.recommend-img5 {
  width: 100%;
}

.recommend-img6 {
  width: 100%;
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