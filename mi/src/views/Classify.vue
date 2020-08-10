<template>
    <div class="box">
        <!-- 首页顶部 -->
        <div class="box-top top1">
            <div class="top-left">
                <img src="../assets/箭头 left.png" alt />
            </div>
            <div class="top-content1">分类</div>
            <div class="top-right" @click="searchBtn">
                <img src="../assets/搜索2.png" alt />
            </div>
      </div>

        <!-- 左边部分 -->
        <div class="box-content">
            <div class="left-bar"  ref="aa">
                <div class="left-title" @click="Submit(1)">
                    <span class="left-content" ref="xiaomi">小米手机</span>
                </div>
                <div class="left-title" @click="Submit(2)">
                    <span class="left-content" ref="hongmi">Redmi手</span>
                </div>
                <div class="left-title" @click="Submit(3)">
                    <span class="left-content" ref="heisha">黑鲨手机</span>
                </div>
                <div class="left-title" @click="Submit(4)">
                    <span class="left-content" ref="heyue">5G合约</span>
                </div>
                <div class="left-title" @click="Submit(5)">
                    <span class="left-content" ref="zhongchou">小米众筹</span>
                </div>
                <div class="left-title" @click="Submit(6)">
                    <span class="left-content" ref="TV">电视</span>
                </div>
                <div class="left-title" @click="Submit(7)">
                    <span class="left-content" ref="jiadian">大家电</span>
                </div>
                <div class="left-title" @click="Submit(8)">
                    <span class="left-content" ref="computer">电脑办公</span>
                </div>
                <div class="left-title" @click="Submit(9)">
                    <span class="left-content" ref="xiaoai">小爱智能</span>
                </div>
                <div class="left-title" @click="Submit(10)">
                    <span class="left-content" ref="tplink">路由器</span>
                </div>
                <div class="left-title" @click="Submit(11)">
                    <span class="left-content" ref="shenghuo">生活电器</span>
                </div>
                <div class="left-title" @click="Submit(12)">
                    <span class="left-content" ref="kitchen">厨房电器</span>
                </div>
                <div class="left-title" @click="Submit(13)">
                    <span class="left-content" ref="wear">智能穿戴</span>
                </div>
                <div class="left-title" @click="Submit(14)">
                    <span class="left-content" ref="jiaju">智能家居</span>
                </div>
                <div class="left-title" @click="Submit(15)">
                    <span class="left-content" ref="cart">车载出行</span>
                </div>
                <div class="left-title" @click="Submit(16)">
                    <span class="left-content" ref="jiankang">个护健康</span>
                </div>
                <div class="left-title" @click="Submit(17)">
                    <span class="left-content" ref="shuma">数码配件</span>
                </div>
            </div>

            <!-- 右边部分 -->
            <div class="right-bar" @scroll="divScroll" ref="qq">
                <!-- 小米手机 -->
                <div class="top-header" id="page1">
                    <div class="top-bar">
                        <img src="../assets/image/标题/01.jpg" />
                    </div>
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">小米数字系列</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list1" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list2" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- Redmin手 -->
                <div class="top-header" id="page2">
                    <div class="top-bar">
                        <img src="../assets/image/标题/07.png" />
                    </div>
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">Redmi红米 K系列</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list3" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list4" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list5" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list6" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list7" :key="item.list4">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 黑鲨手机 -->
                <div class="top-header" id="page3">
                    <div class="top-bar">
                        <img src="../assets/image/标题/02.jpg" />
                    </div>
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">黑鲨手机游戏</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list8" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list9" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 5G合约 -->
                <div class="top-header" id="page4">
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">K30 5G</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list10" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list11" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list12" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 小米众筹 -->
                <div class="top-header" id="page5">
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">众筹好物</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list13" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 电视 -->
                <div class="top-header" id="page6">   
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">电视</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list14" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list15" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list16" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list17" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 大家电 -->
                <div class="top-header" id="page7">  
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">大家电</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list18" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">RedmiBook</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list19" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list20" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list21" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 小爱智能 -->
                <div class="top-header" id="page9">
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">小爱触屏音响</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list22" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list23" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">WiFi 6</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list24" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list25" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list26" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list27" :key="item.list">
                            <img :src="item.phoneimg" />
                            <br />
                            <span class="top-phone2">{{item.title}}</span>
                        </div>
                    </div>
                </div>
                <!-- 生活电器 -->
                <div class="top-header" id="page11">
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">生活电器</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list28" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">厨房电器</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list29" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">智能穿戴</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list30" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">智能家居</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list31" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list31" :key="item.list">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">车载出行</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list32" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list33" :key="item.list1">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">防护清洁</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list34" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list35" :key="item.list1">
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
                        <div class="top-phone1" v-for="item in list36" :key="item.list1">
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
                    <div class="top-title">
                        <div class="top-title1"></div>
                        <div class="top-title2">音箱</div>
                        <div class="top-title1"></div>
                    </div>
                    <div class="top-phone">
                        <div class="top-phone1" v-for="item in list37" :key="item.list">
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
                        <div class="top-phone1" v-for="item in list38" :key="item.list1">
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
                        <div class="top-phone1" v-for="item in list39" :key="item.list1">
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
// import axios from "axios"
export default {
    data() {
        return {
        scrollTop: null,
        //   list:[],
        list: [
            {
                phoneimg: require("../assets/image/小米手机/02.png"),
                title: "小米10青春",
            },
            {
                phoneimg: require("../assets/image/小米手机/03.png"),
                title: "小米10pro",
            },
            {
                phoneimg: require("../assets/image/小米手机/04.png"),
                title: "小米10",
            },
        ],
        list1: [
            {
                phoneimg: require("../assets/image/小米手机/05.png"),
                title: "小米MIX Alpha",
            },
        ],
        list2: [
            {
                phoneimg: require("../assets/image/小米手机/06.png"),
                title: "小米手机保护壳",
            },
        ],
        // Redmi手机
        list3: [
            {
                phoneimg: require("../assets/image/Redmi手机/08.png"),
                title: "k30 pro",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/09.png"),
                title: "k30 pro 变焦版",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/10.png"),
                title: "Redmi k30i",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/11.png"),
                title: "Redmi k30i 4G",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/12.png"),
                title: "Redmi k30i 5G",
            },
        ],
        list4: [
            {
                phoneimg: require("../assets/image/Redmi手机/13.png"),
                title: "10X 5G",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/14.png"),
                title: "10X pro 5G",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/15.png"),
                title: "10X 4G",
            },
        ],
        list5: [
            {
                phoneimg: require("../assets/image/Redmi手机/16.png"),
                title: "Redmi 9A",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/17.png"),
                title: "Redmi 9",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/18.png"),
                title: "Redmi 8",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/19.png"),
                title: "Redmi 8A",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/20.png"),
                title: "Redmi 7A",
            },
        ],
        list6: [
            {
                phoneimg: require("../assets/image/Redmi手机/22.gif"),
                title: "Note 8 pro",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/21.gif"),
                title: "Redmi Note 8",
            },
        ],
        list7: [
            {
                phoneimg: require("../assets/image/Redmi手机/23.jpg"),
                title: "Redmi手机保护壳",
            },
            {
                phoneimg: require("../assets/image/Redmi手机/24.png"),
                title: "Redmi手机贴膜",
            },
        ],
        //  黑鲨手机
        list8: [
            {
                phoneimg: require("../assets/image/黑鲨手机/01.png"),
                title: "黑鲨手机3S",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/01.png"),
                title: "黑鲨手机3",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/01.png"),
                title: "黑鲨手机3 pro",
            },
        ],
        list9: [
            {
                phoneimg: require("../assets/image/黑鲨手机/25.png"),
                title: "黑鲨电竞手游",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/26.png"),
                title: "散热背夹 pro",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/27.png"),
                title: "黑鲨磁吸充电线",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/25.png"),
                title: "黑鲨电竞手游",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/26.png"),
                title: "散热背夹 pro",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/27.png"),
                title: "黑鲨磁吸充电线",
            },
            {
                phoneimg: require("../assets/image/黑鲨手机/27.png"),
                title: "黑鲨磁吸充电线",
            },
        ],
        // 5G合约
        list10: [
            {
                phoneimg: require("../assets/image/5G合约机/01.png"),
                title: "6GB+64GB",
            },
            {
                phoneimg: require("../assets/image/5G合约机/01.png"),
                title: "8GB+128GB",
            },
            {
                phoneimg: require("../assets/image/5G合约机/01.png"),
                title: "8GB+256GB",
            },
        ],
        list11: [
            {
                phoneimg: require("../assets/image/5G合约机/02.png"),
                title: "8GB+256GB",
            },
            {
                phoneimg: require("../assets/image/5G合约机/02.png"),
                title: "12GB+256GB",
            },
        ],
        list12: [
            {
                phoneimg: require("../assets/image/5G合约机/03.png"),
                title: "12GB+256GB",
            },
        ],
        // 小米众筹
        list13: [
            {
                phoneimg: require("../assets/image/小米众筹/28.png"),
                title: "心电T恤",
            },
            {
                phoneimg: require("../assets/image/小米众筹/29.png"),
                title: "吸尘器",
            },
            {
                phoneimg: require("../assets/image/小米众筹/30.png"),
                title: "真无线蓝牙耳机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/31.png"),
                title: "立式无线充插座",
            },
            {
                phoneimg: require("../assets/image/小米众筹/32.png"),
                title: "咖啡机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/28.png"),
                title: "心电T恤",
            },
            {
                phoneimg: require("../assets/image/小米众筹/29.png"),
                title: "吸尘器",
            },
            {
                phoneimg: require("../assets/image/小米众筹/30.png"),
                title: "真无线蓝牙耳机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/31.png"),
                title: "立式无线充插座",
            },
            {
                phoneimg: require("../assets/image/小米众筹/32.png"),
                title: "咖啡机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/28.png"),
                title: "心电T恤",
            },
            {
                phoneimg: require("../assets/image/小米众筹/29.png"),
                title: "吸尘器",
            },
            {
                phoneimg: require("../assets/image/小米众筹/30.png"),
                title: "真无线蓝牙耳机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/31.png"),
                title: "立式无线充插座",
            },
            {
                phoneimg: require("../assets/image/小米众筹/32.png"),
                title: "咖啡机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/28.png"),
                title: "心电T恤",
            },
            {
                phoneimg: require("../assets/image/小米众筹/29.png"),
                title: "吸尘器",
            },
            {
                phoneimg: require("../assets/image/小米众筹/30.png"),
                title: "真无线蓝牙耳机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/31.png"),
                title: "立式无线充插座",
            },
            {
                phoneimg: require("../assets/image/小米众筹/32.png"),
                title: "咖啡机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/29.png"),
                title: "吸尘器",
            },
            {
                phoneimg: require("../assets/image/小米众筹/30.png"),
                title: "真无线蓝牙耳机",
            },
            {
                phoneimg: require("../assets/image/小米众筹/31.png"),
                title: "立式无线充插座",
            },
            {
                phoneimg: require("../assets/image/小米众筹/32.png"),
                title: "咖啡机",
            },
        ],
        // 电视
        list14: [
            {   
                phoneimg:require("../assets/image/电视/34.png"),
                title:"32-40英寸"
            },
            {
                phoneimg:require("../assets/image/电视/35.png"),
                title:"43英寸"
            },
            {
                phoneimg:require("../assets/image/电视/36.png"),
                title:"49-50英寸"
            },
            {
                phoneimg:require("../assets/image/电视/37.png"),
                title:"55-60英寸"
            },
            {
                phoneimg:require("../assets/image/电视/34.png"),
                title:"32-40英寸"},
            {
                phoneimg:require("../assets/image/电视/35.png"),
                title:"43英寸"
            },
        ],
        list15: [
            {   
                phoneimg:require("../assets/image/电视/38.png"),
                title:"盒子4"
            },
            {   
                phoneimg:require("../assets/image/电视/38.png"),
                title:"盒子4"
            },
            {   
                phoneimg:require("../assets/image/电视/38.png"),
                title:"盒子4"
            },
        ],
        list16:[
            {   
                phoneimg:require("../assets/image/电视/39.jpg"),
                title:"小米电视音箱"
            },
            {   
                phoneimg:require("../assets/image/电视/39.jpg"),
                title:"小米电视音箱"
            },
        ],
        list17:[
            {   
                phoneimg:require("../assets/image/电视/40.png"),
                title:"会员卡"
            },
                {   
                phoneimg:require("../assets/image/电视/41.jpg"),
                title:"遥控器"
            }
        ],
        // 大家电
        list18: [
            {   
                phoneimg:require("../assets/image/大家电/42.png"),
                title:"冰箱"
            },
            {
                phoneimg:require("../assets/image/大家电/43.png"),
                title:"壁挂空调"
            },
            {
                phoneimg:require("../assets/image/大家电/44.png"),
                title:"立式空调"
            },
            {
                phoneimg:require("../assets/image/大家电/45.png"),
                title:"滚筒洗衣机"
            },
            {
                phoneimg:require("../assets/image/大家电/46.png"),
                title:"波轮洗衣机"},
                {phoneimg:require("../assets/image/大家电/42.png"),
                title:"干衣机"
            },
        ],
        // 电脑办公
        list19: [
            {   
                phoneimg:require("../assets/image/电脑办公/47.png"),
                title:"RedmiBook 16"
            },
            {
                phoneimg:require("../assets/image/电脑办公/47.png"),
                title:"RedmiBook 14"
            },
            {
                phoneimg:require("../assets/image/电脑办公/47.png"),
                title:"RedmiBook 13"
            },
        ],
        list20: [
            {   
                phoneimg:require("../assets/image/电脑办公/48.png"),
                title:"Pro 15.6"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/49.png"),
                title:"显示器"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/48.png"),
                title:"Pro 15.6"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/49.png"),
                title:"显示器"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/48.png"),
                title:"Pro 15.6"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/49.png"),
                title:"显示器"
            },
        ],
        list21: [
            {   
                phoneimg:require("../assets/image/电脑办公/50.png"),
                title:"键盘套装"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/51.png"),
                title:"鼠标"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/50.png"),
                title:"键盘套装"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/51.png"),
                title:"鼠标"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/50.png"),
                title:"键盘套装"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/51.png"),
                title:"鼠标"
            },
            {   
                phoneimg:require("../assets/image/电脑办公/51.png"),
                title:"鼠标"
            },
        ],
        // 小爱智能
        list22: [
            {   
                phoneimg:require("../assets/image/小爱智能/05.png"),
                title:"Redmi 8英寸"
            },
            {
                phoneimg:require("../assets/image/小爱智能/06.png"),
                title:"小米 8英寸"
            },
            {
                phoneimg:require("../assets/image/小爱智能/07.png"),
                title:"小米 4英寸"
            },
        ],
        list23: [
            {   
                phoneimg:require("../assets/image/小爱智能/01.png"),
                title:"小爱音箱 Art"
            },
            {   
                phoneimg:require("../assets/image/小爱智能/02.png"),
                title:"小爱音箱"
            }, 
            {   
                phoneimg:require("../assets/image/小爱智能/03.png"),
                title:"小爱智能闹钟"
            },
            {   
                phoneimg:require("../assets/image/小爱智能/04.png"),
                title:"小爱老师"
            }, 
            {   
                phoneimg:require("../assets/image/小爱智能/01.png"),
                title:"小爱音箱 Art"
            },
            {   
                phoneimg:require("../assets/image/小爱智能/02.png"),
                title:"小爱音箱"
            }, 
            {   
                phoneimg:require("../assets/image/小爱智能/03.png"),
                title:"小爱智能闹钟"
            },
            {   
                phoneimg:require("../assets/image/小爱智能/04.png"),
                title:"小爱老师"
            }, 
            {   
                phoneimg:require("../assets/image/小爱智能/01.png"),
                title:"小爱音箱 Art"
            },
            {   
                phoneimg:require("../assets/image/小爱智能/02.png"),
                title:"小爱音箱"
            }, 
            {   
                phoneimg:require("../assets/image/小爱智能/03.png"),
                title:"小爱智能闹钟"
            },
        ],
        // 路由器
        list24: [
            {   
                phoneimg:require("../assets/image/路由/08.png"),
                title:"Redmi AX5"
            },
            {
                phoneimg:require("../assets/image/路由/09.png"),
                title:"AX1800"
            },
            {
                phoneimg:require("../assets/image/路由/10.png"),
                title:"AIoT AX3600"
            },
        ],
        list25: [
            {   
                phoneimg:require("../assets/image/路由/01.png"),
                title:"Pro 15.6"
            },
                {   
                phoneimg:require("../assets/image/路由/02.png"),
                title:"显示器"
            },
                {   
                phoneimg:require("../assets/image/路由/03.png"),
                title:"Pro 15.6"
            },
                {   
                phoneimg:require("../assets/image/路由/04.png"),
                title:"显示器"
            },
                {   
                phoneimg:require("../assets/image/路由/05.png"),
                title:"Pro 15.6"
            },
                {   
                phoneimg:require("../assets/image/路由/06.png"),
                title:"显示器"
            },
            {   
                phoneimg:require("../assets/image/路由/01.png"),
                title:"Pro 15.6"
            },
                {   
                phoneimg:require("../assets/image/路由/02.png"),
                title:"显示器"
            },
        ],
        list26: [
            {   
                phoneimg:require("../assets/image/路由/11.png"),
                title:"键盘套装"
            },
            {   
                phoneimg:require("../assets/image/路由/12.png"),
                title:"鼠标"
            },
        ],
        list27: [
            {   
            phoneimg:require("../assets/image/路由/07.png"),
            title:"键盘套装"
            },
        ],
        // 生活电器
        list28: [
            {   
                phoneimg:require("../assets/image/生活电器/01.png"),
                title:"空气净化器"
            },
            {
                phoneimg:require("../assets/image/生活电器/02.png"),
                title:"扫地机"
            },
            {
                phoneimg:require("../assets/image/生活电器/03.png"),
                title:"吸尘器"
            },
            {
                phoneimg:require("../assets/image/生活电器/04.png"),
                title:"新风机"
            },
            {
                phoneimg:require("../assets/image/生活电器/05.png"),
                title:"电风扇"},
            {   
                phoneimg:require("../assets/image/生活电器/06.png"),
                title:"晾衣机"
            },
            {
                phoneimg:require("../assets/image/生活电器/07.png"),
                title:"电暖气"
            },
            {   
                phoneimg:require("../assets/image/生活电器/01.png"),
                title:"空气净化器"
            },
            {
                phoneimg:require("../assets/image/生活电器/02.png"),
                title:"扫地机"
            },
            {
                phoneimg:require("../assets/image/生活电器/03.png"),
                title:"吸尘器"
            },
            {
                phoneimg:require("../assets/image/生活电器/04.png"),
                title:"新风机"
            },
            {
                phoneimg:require("../assets/image/生活电器/05.png"),
                title:"电风扇"},
            {   
                phoneimg:require("../assets/image/生活电器/06.png"),
                title:"晾衣机"
            },
            {
                phoneimg:require("../assets/image/生活电器/07.png"),
                title:"电暖气"
            },
            {   
                phoneimg:require("../assets/image/生活电器/06.png"),
                title:"晾衣机"
            },
            {phoneimg:require("../assets/image/生活电器/07.png"),
                title:"电暖气"
            },
        ], 
        // 厨房电器
        list29: [
            {   
                phoneimg:require("../assets/image/生活电器/08.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/生活电器/09.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/生活电器/10.png"),
                title:"电饭煲"
            },
            {
                phoneimg:require("../assets/image/生活电器/11.png"),
                title:"烟机灶具"
            },
            {   
                phoneimg:require("../assets/image/生活电器/08.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/生活电器/09.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/生活电器/10.png"),
                title:"电饭煲"
            },
            {
                phoneimg:require("../assets/image/生活电器/11.png"),
                title:"烟机灶具"
            },
            {   
                phoneimg:require("../assets/image/生活电器/08.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/生活电器/09.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/生活电器/10.png"),
                title:"电饭煲"
            },
            {
                phoneimg:require("../assets/image/生活电器/11.png"),
                title:"烟机灶具"
            },
            {
                phoneimg:require("../assets/image/生活电器/11.png"),
                title:"烟机灶具"
            },
        ], 
        // 智能穿戴
        list30: [
            {   
                phoneimg:require("../assets/image/智能穿戴/01.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/02.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/03.png"),
                title:"电饭煲"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/04.png"),
                title:"烟机灶具"
            },
            {   
                phoneimg:require("../assets/image/智能穿戴/05.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/06.png"),
                title:"洗碗机"
            },
        ],
        // 智能家居
        list31: [
            {   
                phoneimg:require("../assets/image/智能穿戴/01.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/02.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/03.png"),
                title:"电饭煲"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/04.png"),
                title:"烟机灶具"
            },
            {   
                phoneimg:require("../assets/image/智能穿戴/05.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/06.png"),
                title:"洗碗机"
            },
            {   
                phoneimg:require("../assets/image/智能穿戴/01.png"),
                title:"净水器"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/02.png"),
                title:"洗碗机"
            },
            {
                phoneimg:require("../assets/image/智能穿戴/03.png"),
                title:"电饭煲"
            },
            
            {phoneimg:require("../assets/image/智能穿戴/04.png"),
                title:"烟机灶具"
            },
        ], 
        // 车载出现
        list32: [
            {   
                phoneimg:require("../assets/image/车载出行/05.png"),
                title:"助力车"
            },
            {   
                phoneimg:require("../assets/image/车载出行/06.png"),
                title:"平衡车"
            },
            {   
                phoneimg:require("../assets/image/车载出行/07.png"),
                title:"滑板车"
            },
            {   
                phoneimg:require("../assets/image/车载出行/08.png"),
                title:"对讲"
            },
            {   
                phoneimg:require("../assets/image/车载出行/05.png"),
                title:"助力车"
            },
            {   
                phoneimg:require("../assets/image/车载出行/08.png"),
                title:"对讲"
            },
            {   
                phoneimg:require("../assets/image/车载出行/05.png"),
                title:"助力车"
            },
            ], 
            list33: [
                {   
                    phoneimg:require("../assets/image/车载出行/01.png"),
                    title:"智能后视镜"
                },
                {   
                    phoneimg:require("../assets/image/车载出行/02.png"),
                    title:"车充"
                },
                {   
                    phoneimg:require("../assets/image/车载出行/03.png"),
                    title:"停车牌"
                },
                {   
                    phoneimg:require("../assets/image/车载出行/04.png"),
                    title:"香薰"
                },
            ], 
            // 个护健康
            list34: [
                {   
                    phoneimg:require("../assets/image/个护健康/01.png"),
                    title:"电子体温计"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/02.jpg"),
                    title:"洗手机"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/03.png"),
                    title:"MIJOY粘毛器"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/04.png"),
                    title:"纸巾"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/05.png"),
                    title:"毛巾浴巾"
                },
            ], 
            list35: [
                {   
                    phoneimg:require("../assets/image/个护健康/07.png"),
                    title:"成人电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/08.png"),
                    title:"儿童电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/10.png"),
                    title:"剃须刀"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/09.png"),
                    title:"吹风机"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/07.png"),
                    title:"成人电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/08.png"),
                    title:"儿童电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/10.png"),
                    title:"剃须刀"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/09.png"),
                    title:"吹风机"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/07.png"),
                    title:"成人电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/08.png"),
                    title:"儿童电动牙刷"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/10.png"),
                    title:"剃须刀"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/09.png"),
                    title:"吹风机"
                },
            ],
            list36: [
                {   
                    phoneimg:require("../assets/image/个护健康/11.png"),
                    title:"电子体温计"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/12.png"),
                    title:"洗手机"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/13.png"),
                    title:"MIJOY粘毛器"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/14.png"),
                    title:"纸巾"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/11.png"),
                    title:"毛巾浴巾"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/11.png"),
                    title:"电子体温计"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/12.png"),
                    title:"洗手机"
                },
                {   
                    phoneimg:require("../assets/image/个护健康/13.png"),
                    title:"MIJOY粘毛器"
                },
             ],  
            // 数码配件
            list37: [
                {   
                    phoneimg:require("../assets/image/数码配件/12.png"),
                    title:"户外蓝牙音箱"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/13.png"),
                    title:"小爱音箱"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/14.png"),
                    title:"蓝牙音箱"
                },
                
            ], 
            list38: [
                {   
                    phoneimg:require("../assets/image/数码配件/04.png"),
                    title:"蓝牙耳机"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/05.png"),
                    title:"线控耳机"
                },
               
            ],
            list39: [
                {   
                    phoneimg:require("../assets/image/数码配件/06.png"),
                    title:"移动电源"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/07.png"),
                    title:"无线充"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/08.png"),
                    title:"充电器"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/09.png"),
                    title:"保护壳"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/06.png"),
                    title:"移动电源"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/07.png"),
                    title:"无线充"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/08.png"),
                    title:"充电器"
                },
                {   
                    phoneimg:require("../assets/image/数码配件/09.png"),
                    title:"保护壳"
                },
            ],  
        };
    },
    // created() {
    //     let url = `http://127.0.0.1:5501/dist/data1/ClassifyList.json`;
    //     let that = this;
    //             console.log("chengg")
    //     axios.get(url)
    //         .then(function (response) {
    //             if(response.data.code == 200){
    //                 that.list = response.data.list;
    //                 console.log(response);
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // },
    methods: {
        divScroll(event) {
            this.scrollTop = event.target.scrollTop;
            if (this.scrollTop < 576) {
                this.$refs.xiaomi.classList.add("active");
            } else {
                this.$refs.xiaomi.classList.remove("active");
            }
            // Redmi手机
            if (this.scrollTop >=576 && this.scrollTop < 1702) {
                this.$refs.hongmi.classList.add("active");
            } else {
                this.$refs.hongmi.classList.remove("active");
            }
            //黑鲨手机
            if (this.scrollTop > 1702 && this.scrollTop < 2202) {
                this.$refs.heisha.classList.add("active");
            } else {
                this.$refs.heisha.classList.remove("active");
            }
            // 5G合约
            if (this.scrollTop > 2202 && this.scrollTop < 2802) {
                this.$refs.heyue.classList.add("active");
            } else {
                this.$refs.heyue.classList.remove("active");

            }
            //小米众筹
            if (this.scrollTop > 2802&&this.scrollTop < 3726) {
                this.$refs.zhongchou.classList.add("active");
            } else {
                this.$refs.zhongchou.classList.remove("active");
            }
            // 电视
            if (this.scrollTop > 3726&&this.scrollTop < 4446) {
                this.$refs.TV.classList.add("active");
            } else {
                this.$refs.TV.classList.remove("active");
            }
            // 大家电
            if (this.scrollTop > 4446&&this.scrollTop < 4821) {
                this.$refs.jiadian.classList.add("active");
            } else {
                this.$refs.jiadian.classList.remove("active");
            }
            // 电脑办公
            if (this.scrollTop > 4821&&this.scrollTop < 5612) {
                this.$refs.computer.classList.add("active");
            } else {
                this.$refs.computer.classList.remove("active");
            }
            // 小爱智能
            if (this.scrollTop > 5612&&this.scrollTop < 6300) {
                this.$refs.xiaoai.classList.add("active");
            } else {
                this.$refs.xiaoai.classList.remove("active");
            }
            //路由器
            if (this.scrollTop > 6300&&this.scrollTop < 7141) {
                this.$refs.tplink.classList.add("active");
            } else {
                this.$refs.tplink.classList.remove("active");
            }
            //生活电器器
            if (this.scrollTop > 7141&&this.scrollTop < 7889) {
                this.$refs.shenghuo.classList.add("active");
            } else {
                this.$refs.shenghuo.classList.remove("active");
            }
            //厨房电器
            if (this.scrollTop > 7889&&this.scrollTop < 8530) {
                this.$refs.kitchen.classList.add("active");
            } else {
                this.$refs.kitchen.classList.remove("active");
            }
            //智能穿戴
            if (this.scrollTop > 8530&&this.scrollTop < 8837) {
                this.$refs.wear.classList.add("active");
            } else {
                this.$refs.wear.classList.remove("active");
            }
            //智能家居
            if (this.scrollTop > 8837&&this.scrollTop < 9841) {
                this.$refs.jiaju.classList.add("active");
                var PageId2 = document.querySelector('#page14')
            this.$refs.aa.scrollTop=PageId2.offsetTop-9855
            } else {
                this.$refs.jiaju.classList.remove("active");
            }
            //车载出行
            if (this.scrollTop > 9841&&this.scrollTop < 10525) {
                this.$refs.cart.classList.add("active");
                var PageId1 = document.querySelector('#page15')
            this.$refs.aa.scrollTop=PageId1.offsetTop-9860
            } else {
                this.$refs.cart.classList.remove("active");
            }
            //个护健康
            if (this.scrollTop > 10525&&this.scrollTop < 11694) {
                this.$refs.jiankang.classList.add("active");
                var PageId3 = document.querySelector('#page16')
            this.$refs.aa.scrollTop=PageId3.offsetTop-9865
            } else {
                this.$refs.jiankang.classList.remove("active");
            }
            //数码配件
            if (this.scrollTop > 11694&&this.scrollTop < 20000) {
                this.$refs.shuma.classList.add("active");
            } else {
                this.$refs.shuma.classList.remove("active");
                
            }
        },
        Submit (key){
            var PageId = document.querySelector('#page' + key)
            this.$refs.qq.scrollTop=PageId.offsetTop-48
        },

        // 页面切换
        homeBtn(){
            this.$router.push({
                path:'/'
            })
        },
        cartBtn(){
            this.$router.push({
                path:'/cart'
            })
        },
        myBtn(){
            this.$router.push({
                path:'/my'
            })
        },

        // 搜索按钮
        searchBtn() {
            this.$router.push({
                path: "/search",
            });
        },
    },

}
</script>

<style scoped>
.box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

a{
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
    background: #FFF;
    width: 25%;
    overflow: auto;
    padding: 10px 0;
    border-right: 1PX solid #e0e0e0;
}
.left-title {
    font-size: 12px;
    text-align: center;
    margin-bottom: 30%;
}
.left-content{
    color: #3C3C3C;
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
    color: #3C3C3C;
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