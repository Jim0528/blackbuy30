<template>
    <div>
        <div class="section">
            <div class="location">
                <span>当前位置：</span>
                <a href="#/" class="router-link-active">首页</a> &gt;
                <a href="#/site/goodslist" class="router-link-exact-active router-link-active">购物商城</a>
            </div>
        </div>
        <div class="section">
            <div class="wrapper">
                <div class="wrap-box">
                    <div class="left-220" style="margin: 0px;">
                        <div class="banner-nav">
                            <ul>

                                <li v-for="(value, index) in catelist" :key="index">
                                    <h3>
                                        <i class="iconfont icon-arrow-right"></i>
                                        <span>{{ value.title }}</span>
                                        <p>
                                            <span v-for="(item, i) in value.subcates " :key="i">
                                                {{ item.title }}
                                            </span>
                                        </p>
                                    </h3>
                                    <div class="item-box">
                                        <dl>
                                            <dt>
                                                <a href="/goods/40.html">{{ value.title }}</a>
                                            </dt>
                                            <dd>
                                                <a href="/goods/43.html" v-for="(item, i) in value.subcates" :key="i">{{
                                                    item.title }}
                                                </a>
                                            </dd>
                                        </dl>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <!--幻灯片-->
                    <div class="left-705">
                        <el-carousel height="341px">
                            <el-carousel-item v-for="item in sliderlist" :key="item.id">
                                <img :src="item.img_url" alt="">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--/幻灯片-->

                    <div class="left-220">
                        <ul class="side-img-list">

                            <li v-for="(item, index) in toplist" :key="index">
                                <div class="img-box">
                                    <label>{{ index + 1 }}</label>
                                    <img :src="item.img_url">
                                </div>
                                <div class="txt-box">
                                    <a href="/goods/show-98.html">{{ item.title }}</a>
                                    <span>{{ item.add_time | formatTime }}</span>
                                </div>
                            </li>

                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="section" v-for="(value, index) in sectionlist" :key="index">
            <div class="main-tit">
                <h2>{{ value.catetitle }}</h2>
                <p>
                    <a v-for="(item, i) in value.level2catelist" :key="i" href="/goods/43.html">{{ item.subcatetitle
                        }}
                    </a>
                    <a href="/goods/40.html">更多
                        <i>+</i>
                    </a>
                </p>
            </div>
            <div class="wrapper clearfix">
                <div class="wrap-box">
                    <ul class="img-list">
                        <li v-for="(item, i) in value.datas" :key="i">
                            <!--                            <a href="#/site/goodsinfo/87" class="">-->
                            <router-link :to="'/detail/' + item.artID">
                                <div class="img-box">
                                    <img :src="item.img_url">
                                </div>
                                <div class="info">
                                    <h3>{{ item.artTitle }}</h3>
                                    <p class="price">
                                        <b>{{ item.sell_price }}</b>元</p>
                                    <p>
                                        <strong>库存 {{ item.stock_quantity }}</strong>
                                        <span>市场价：
                                            <s>{{ item.market_price }}</s>
                                        </span>
                                    </p>
                                </div>
                            </router-link>
                            <!--                            </a>-->
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>+
<script>
    // import axios from "axios";
    // import moment from "moment";

    export default {
        name: "index",
        data() {
            return {
                catelist: [],
                sliderlist: [],
                toplist: [],
                sectionlist: []
            }
        },
        created() {
            this.$axios.get('/site/goods/gettopdata/goods')
                .then(res => {
                    // console.log(res);
                    this.catelist = res.data.message.catelist;
                    this.sliderlist = res.data.message.sliderlist;
                    this.toplist = res.data.message.toplist;
                });

            this.$axios.get('/site/goods/getgoodsgroup')
                .then(res => {
                    // console.log(res);
                    this.sectionlist = res.data.message;
                })

        }
        /*filters: {
            formatTime (value) {
                return moment(value).format('YYYY年MM月DD日');
            }
        }*/
    }
</script>

<style scoped>

</style>