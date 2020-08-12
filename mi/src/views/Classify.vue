<template>
  <div class="box">
    <!-- 首页顶部 -->
    <div class="box-top top1">
      <div class="top-left" @click="backBtn">
        <img src="../assets/箭头 left.png" alt />
      </div>
      <div class="top-content1">分类</div>
      <div class="top-right" @click="searchBtn">
        <img src="../assets/搜索2.png" alt />
      </div>
    </div>

    <div class="box-content">
      <!-- 左边部分 -->
      <div class="left-bar" ref="aa">
        <div class="left-title" @click="Submit(1)" ref="b1">
          <span class="left-content" ref="xiaomi">小米手机</span>
        </div>
        <div class="left-title" @click="Submit(2)" ref="b2">
          <span class="left-content" ref="hongmi">Redmi手</span>
        </div>
        <div class="left-title" @click="Submit(3)" ref="b3">
          <span class="left-content" ref="heisha">黑鲨手机</span>
        </div>
        <div class="left-title" @click="Submit(4)" ref="b4">
          <span class="left-content" ref="heyue">5G合约</span>
        </div>
        <div class="left-title" @click="Submit(5)" ref="b5">
          <span class="left-content" ref="zhongchou">小米众筹</span>
        </div>
        <div class="left-title" @click="Submit(6)" ref="b6">
          <span class="left-content" ref="TV">电视</span>
        </div>
        <div class="left-title" @click="Submit(7)" ref="b7">
          <span class="left-content" ref="jiadian">大家电</span>
        </div>
        <div class="left-title" @click="Submit(8)" ref="b8">
          <span class="left-content" ref="computer">电脑办公</span>
        </div>
        <div class="left-title" @click="Submit(9)" ref="b9">
          <span class="left-content" ref="xiaoai">小爱智能</span>
        </div>
        <div class="left-title" @click="Submit(10)" ref="b10">
          <span class="left-content" ref="tplink">路由器</span>
        </div>
        <div class="left-title" @click="Submit(11)" ref="b11">
          <span class="left-content" ref="shenghuo">生活电器</span>
        </div>
        <div class="left-title" @click="Submit(12)" ref="b12">
          <span class="left-content" ref="kitchen">厨房电器</span>
        </div>
        <div class="left-title" @click="Submit(13)" ref="b13">
          <span class="left-content" ref="wear">智能穿戴</span>
        </div>
        <div class="left-title" @click="Submit(14)" ref="b14">
          <span class="left-content" ref="jiaju">智能家居</span>
        </div>
        <div class="left-title" @click="Submit(15)" ref="b15">
          <span class="left-content" ref="cart">车载出行</span>
        </div>
        <div class="left-title" @click="Submit(16)" ref="b16">
          <span class="left-content" ref="jiankang">个护健康</span>
        </div>
        <div class="left-title" @click="Submit(17)" ref="b17">
          <span class="left-content" ref="shuma">数码配件</span>
        </div>
      </div>

      <!-- 右边部分 -->
      <div class="right-bar" @scroll="divScroll" ref="qq" >
        <div >
          <!-- 小米手机 -->
          <div class="top-header" id="page1">
            <div class="top-bar" ref="a1">
              <img src="../assets/image/标题/01.jpg" />
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米数字系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[0]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米MIX系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[1]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米手机配件系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[2]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- Redmin手 -->
          <div class="top-header" id="page2">
            <div class="top-bar" ref="a2">
              <img src="../assets/image/标题/07.png" />
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">Redmi红米 K系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[3]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">Redmi红米 X系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[4]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">Redmi红米 数字系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[5]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">Redmi红米 Note系列</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[6]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">Redmi手机配件</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[7]" :key="item.list4">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 黑鲨手机 -->
          <div class="top-header" id="page3">
            <div class="top-bar" ref="a3">
              <img src="../assets/image/标题/02.jpg" />
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">黑鲨手机游戏</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[8]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">黑鲨手机配件</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[9]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 5G合约 -->
          <div class="top-header" id="page4">
            <div class="top-title" ref="a4">
              <div class="top-title1"></div>
              <div class="top-title2">K30 5G</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[10]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米10</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[11]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米10 pro</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[12]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 小米众筹 -->
          <div class="top-header" id="page5">
            <div class="top-title" ref="a5">
              <div class="top-title1"></div>
              <div class="top-title2">众筹好物</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[13]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 电视 -->
          <div class="top-header" id="page6">
            <div class="top-title" ref="a6">
              <div class="top-title1"></div>
              <div class="top-title2">电视</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[14]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/37.png" />
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">盒子</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[15]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">音箱</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[16]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">电视配件与会员</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[17]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 大家电 -->
          <div class="top-header" id="page7">
            <div class="top-title" ref="a7">
              <div class="top-title1"></div>
              <div class="top-title2">大家电</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[18]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/37.png" />
            </div>
          </div>
          <!-- 电脑办公 -->
          <div class="top-header" id="page8">
            <div class="top-title" ref="a8">
              <div class="top-title1"></div>
              <div class="top-title2">RedmiBook</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[19]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小米笔记本</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[20]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">电脑配件</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[21]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 小爱智能 -->
          <div class="top-header" id="page9">
            <div class="top-title" ref="a9">
              <div class="top-title1"></div>
              <div class="top-title2">小爱触屏音响</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[22]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">小爱智能音箱</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[23]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 路由器 -->
          <div class="top-header" id="page10">
            <div class="top-title" ref="a10">
              <div class="top-title1"></div>
              <div class="top-title2">WiFi 6</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[24]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">千兆版</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[25]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">百兆版</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[26]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">配件</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[27]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
          </div>
          <!-- 生活电器 -->
          <div class="top-header" id="page11">
            <div class="top-title" ref="a11">
              <div class="top-title1"></div>
              <div class="top-title2">生活电器</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[28]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 厨房电器 -->
          <div class="top-header" id="page12">
            <div class="top-title" ref="a12">
              <div class="top-title1"></div>
              <div class="top-title2">厨房电器</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[29]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 智能穿戴 -->
          <div class="top-header" id="page13">
            <div class="top-title" ref="a13">
              <div class="top-title1"></div>
              <div class="top-title2">智能穿戴</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[30]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 智能家居 -->
          <div class="top-header" id="page14">
            <div class="top-title" ref="a14">
              <div class="top-title1"></div>
              <div class="top-title2">智能家居</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[31]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">照明灯具</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[31]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 车载出现 -->
          <div class="top-header" id="page15">
            <div class="top-title" ref="a15">
              <div class="top-title1"></div>
              <div class="top-title2">车载出行</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[32]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">车载</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[33]" :key="item.list1">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 个护健康 -->
          <div class="top-header" id="page16">
            <div class="top-title" ref="a16">
              <div class="top-title1"></div>
              <div class="top-title2">防护清洁</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[34]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">个护</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[35]" :key="item.list1">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">健康</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[36]" :key="item.list1">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
          <!-- 数码配件 -->
          <div class="top-header" id="page17">
            <div class="top-title" ref="a17">
              <div class="top-title1"></div>
              <div class="top-title2">音箱</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[37]" :key="item.list">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">耳机</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[38]" :key="item.list1">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-title">
              <div class="top-title1"></div>
              <div class="top-title2">手机配件</div>
              <div class="top-title1"></div>
            </div>
            <div class="top-phone">
              <div class="top-phone1" v-for="item in list[39]" :key="item.list1">
                <img :src="item.phoneimg" />
                <br />
                <span class="top-phone2">{{item.title}}</span>
              </div>
            </div>
            <div class="top-bar1">
              <img src="../assets/image/标题/12.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部 -->
    <div class="box-bottom">
      <div class="bottom-btn" @click="homeBtn">
        <img src="../assets/首页1.png" class="bottom-img" alt />
        <div class="bottom-title">首页</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/分类2.png" alt class="bottom-img" />
        <div class="bottom-title">分类</div>
      </div>
      <div class="bottom-btn">
        <img src="../assets/星球1.png" class="bottom-img" alt />
        <div class="bottom-title">
          <a href="https://m.mi.com/discover">星球</a>
        </div>
      </div>
      <div class="bottom-btn" @click="cartBtn">
        <img src="../assets/购物车1.png" class="bottom-img" alt />
        <div class="bottom-title">购物车</div>
      </div>
      <div class="bottom-btn" @click="myBtn">
        <img src="../assets/我的1.png" class="bottom-img" alt />
        <div class="bottom-title">我的</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      scrollTop:0,
      list: [],
    };
  },
  created() {
    let url = `http://127.0.0.1:5500/dist/data/ClassifyList.json`;
    let that = this;
    console.log("chengg");
    axios
      .get(url)
      .then(function (response) {
        if (response.data.code == 200) {
          // console.log(response);
          that.list = response.data.list;
          
        //   console.log(that.list);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  methods: {
    divScroll(event) {
      this.scrollTop = event.target.scrollTop;
      // console.log(this.scrollTop)
      if (this.scrollTop <= this.$refs.a1.offsetTop-40) {
        this.$refs.xiaomi.classList.add("active");
      } else {
        this.$refs.xiaomi.classList.remove("active");
      }
      // Redmi手机
      if (
        this.scrollTop >= this.$refs.a2.offsetTop-40 &&
        this.scrollTop < this.$refs.a3.offsetTop-40
      ) {
        this.$refs.hongmi.classList.add("active");
      } else {
        this.$refs.hongmi.classList.remove("active");
      }
      //黑鲨手机
      if (
        this.scrollTop >= this.$refs.a3.offsetTop-40 &&
        this.scrollTop < this.$refs.a4.offsetTop-40
      ) {
        this.$refs.heisha.classList.add("active");
      } else {
        this.$refs.heisha.classList.remove("active");
      }
      // 5G合约
      if (
        this.scrollTop >= this.$refs.a4.offsetTop-40 &&
        this.scrollTop < this.$refs.a5.offsetTop-40
      ) {
        this.$refs.heyue.classList.add("active");
      } else {
        this.$refs.heyue.classList.remove("active");
      }
      //小米众筹
      if (
        this.scrollTop >= this.$refs.a5.offsetTop-40 &&
        this.scrollTop < this.$refs.a6.offsetTop-40
      ) {
        this.$refs.zhongchou.classList.add("active");
      } else {
        this.$refs.zhongchou.classList.remove("active");
      }
      // 电视
      if (
        this.scrollTop >= this.$refs.a6.offsetTop-40 &&
        this.scrollTop < this.$refs.a7.offsetTop-40
      ) {
        this.$refs.TV.classList.add("active");
      } else {
        this.$refs.TV.classList.remove("active");
      }
      // 大家电
      if (
        this.scrollTop >= this.$refs.a7.offsetTop-40 &&
        this.scrollTop < this.$refs.a8.offsetTop-40
      ) {
        this.$refs.jiadian.classList.add("active");
      } else {
        this.$refs.jiadian.classList.remove("active");
      }
      // 电脑办公
      if (
        this.scrollTop >= this.$refs.a8.offsetTop-40 &&
        this.scrollTop < this.$refs.a9.offsetTop-40
      ) {
        this.$refs.computer.classList.add("active");
      } else {
        this.$refs.computer.classList.remove("active");
      }
      // 小爱智能
      if (
        this.scrollTop >= this.$refs.a9.offsetTop-40 &&
        this.scrollTop < this.$refs.a10.offsetTop-40
      ) {
        this.$refs.xiaoai.classList.add("active");
      } else {
        this.$refs.xiaoai.classList.remove("active");
      }
      //路由器
      if (
        this.scrollTop >= this.$refs.a10.offsetTop-40 &&
        this.scrollTop < this.$refs.a11.offsetTop-40
      ) {
        this.$refs.tplink.classList.add("active");
      } else {
        this.$refs.tplink.classList.remove("active");
      }
      //生活电器
      if (
        this.scrollTop >= this.$refs.a11.offsetTop-40 &&
        this.scrollTop < this.$refs.a12.offsetTop-40
      ) {
        this.$refs.shenghuo.classList.add("active");
        var PageId11 = document.querySelector("#page1");
        this.$refs.aa.scrollTop = PageId11.offsetTop - this.$refs.b12.offsetTop;
      } else {
        this.$refs.shenghuo.classList.remove("active");
      }
      //厨房电器
      if (
        this.scrollTop >= this.$refs.a12.offsetTop-40 &&
        this.scrollTop < this.$refs.a13.offsetTop-40
      ) {
        this.$refs.kitchen.classList.add("active");
        var PageId12 = document.querySelector("#page13");
        this.$refs.aa.scrollTop = PageId12.offsetTop - this.$refs.b12.offsetTop;
      } else {
        this.$refs.kitchen.classList.remove("active");
      }
      //智能穿戴
      if (
        this.scrollTop >= this.$refs.a13.offsetTop-40 &&
        this.scrollTop < this.$refs.a14.offsetTop-40
      ) {
        this.$refs.wear.classList.add("active");
        var PageId13 = document.querySelector("#page14");
        this.$refs.aa.scrollTop = PageId13.offsetTop - this.$refs.b13.offsetTop;
      } else {
        this.$refs.wear.classList.remove("active");
      }
      //智能家居
      if (
        this.scrollTop >= this.$refs.a14.offsetTop-40 &&
        this.scrollTop < this.$refs.a15.offsetTop-40
      ) {
        this.$refs.jiaju.classList.add("active");
        var PageId14 = document.querySelector("#page15");
        this.$refs.aa.scrollTop = PageId14.offsetTop - this.$refs.b14.offsetTop;
      } else {
        this.$refs.jiaju.classList.remove("active");
      }
      //车载出行
      if (
        this.scrollTop >= this.$refs.a15.offsetTop-40 &&
        this.scrollTop < this.$refs.a16.offsetTop-40
      ) {
        this.$refs.cart.classList.add("active");
        var PageId15 = document.querySelector("#page16");
        this.$refs.aa.scrollTop = PageId15.offsetTop - this.$refs.b15.offsetTop;
      } else {
        this.$refs.cart.classList.remove("active");
      }
      //个护健康
      if (
        this.scrollTop >= this.$refs.a16.offsetTop-40 &&
        this.scrollTop < this.$refs.a17.offsetTop-40
      ) {
        this.$refs.jiankang.classList.add("active");
        var PageId16 = document.querySelector("#page17");
        this.$refs.aa.scrollTop = PageId16.offsetTop - this.$refs.b16.offsetTop;
      } else {
        this.$refs.jiankang.classList.remove("active");
      }
      //数码配件
      if (this.scrollTop >= this.$refs.a17.offsetTop-40) {
        this.$refs.shuma.classList.add("active");
      } else {
        this.$refs.shuma.classList.remove("active");
      }
    },
    Submit(key) {
      var PageId = document.querySelector("#page" + key);
      this.$refs.qq.scrollTop = PageId.offsetTop-40;
    },

    // 搜索按钮
    searchBtn() {
        this.$router.push({
            path: "/search",
        });
    },
    backBtn() {
        this.$router.push({
            path:"/"
        })
    },
    // 页面切换
    homeBtn() {
      this.$router.push({
        path: "/",
      });
    },
    cartBtn() {
      this.$router.push({
        path: "/cart",
      });
    },
    myBtn() {
      this.$router.push({
        path: "/my",
      });
    },

    // 搜索按钮
    // searchBtn() {
    //   this.$router.push({
    //     path: "/search",
    //   });
    // },
  },
};
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

a {
  text-decoration: none;
  color: #747474;
}

/* 顶部 */
.box-top {
  padding: 12px;
  flex-shrink: 0;
  background-color: rgb(242, 242, 242);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.box-top img {
  width: 25px;
}
.top-content {
  flex-grow: 1;
  margin: 0 10px;
  padding: 5px;
  display: flex;
  flex-direction: row;
  background: rgb(255, 255, 255);
}
.content-input {
  border: none;
  outline: none;
  padding-left: 5px;
}
.content-search {
  padding: 3px;
}
.top1 img {
  width: 20px;
}
.top-content1 {
  font-size: 13px;
  color: #424242;
}

/* 底部 */
.box-bottom {
  flex-shrink: 0;
  display: flex;
  flex-direction: row;
  background: rgb(255, 255, 255);
  border-top: 1px solid rgb(221, 221, 221);
  box-shadow: 0px -5px 10px rgb(221, 221, 221);
}
.bottom-img {
  width: 20px;
}
.bottom-btn {
  width: 20%;
  flex-shrink: 0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bottom-title {
  font-size: 12px;
  color: #747474;
}

.box-content {
  flex-grow: 1;
  overflow: auto;
}

/* 左边部分 */
.box-content {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
  flex-grow: 1;
  width: 100%;
  overflow: auto;
}
.box-content::-webkit-scrollbar {
  display: none;
}
.left-bar {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  background: #fff;
  width: 25%;
  overflow: auto;
  padding: 5px 0;
  border-right: 1px solid #e0e0e0;
}
.left-title {
  font-size: 12px;
  text-align: center;
  margin-bottom: 30%;
}
.left-content {
  color: #3c3c3c;
  font-size: 12px;
}
.active {
  font-size: 1rem;
  color: #fb7d34;
}
.left-bar::-webkit-scrollbar {
  display: none;
}
.right-bar {
  width: 80%;
  overflow: auto;
}
/* 组件 */
.top-header {
  display: flex;
  display: -webkit-flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 100%;
}
.top-bar {
  width: 80%;
}
.top-bar img {
  width: 100%;
}
.top-title {
  display: flex;
  display: -webkit-flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 15px 0;
}
.top-title1 {
  border-bottom: 2px solid #e6e6e6;
  height: 1%;
  width: 10%;
}
.top-title2 {
  padding: 0 10px;
  color: #3c3c3c;
  font-size: 12px;
}
.top-phone {
  display: flex;
  display: -webkit-flex;
  flex-wrap: wrap;
  justify-content: start;
  width: 100%;
}
.top-phone1 {
  width: 32%;
  padding: 15px 0;
  text-align: center;
}
.top-phone1 img {
  width: 52.8px;
  height: 52.8px;
}
.top-phone2 {
  font-size: 10px;
  color: #757575;
}
.top-bar1 {
  width: 80%;
}
.top-bar1 img {
  width: 100%;
}
</style>