<template>
  <div class="detail">
    <!-- navbar页面区域 -->
    <detail-nav-bar @navBarClick="navBarClick" ref="nav"></detail-nav-bar>
    <!-- 轮播图区域 -->
    <detail-swiper :topImages="topImages"></detail-swiper>
    <!-- 商品信息区域 -->
    <detail-goods-info :goodsInfo="goodsInfo"></detail-goods-info>
    <!-- 服务信息区域 -->
    <detail-services :services="services"></detail-services>
    <!-- 店铺信息区域 -->
    <detail-shop-info :shopInfo="shopInfo"></detail-shop-info>
    <!-- 商品描述区域 -->
    <detail-good-desc :goodDesc="goodDesc"></detail-good-desc>
    <!-- 商品参数区域 -->
    <detail-good-param :goodParam="goodParam" ref="param"></detail-good-param>
    <!-- 商品尺寸区域 -->
    <detail-good-role :goodRule="goodRule"></detail-good-role>
    <!-- 评价区域 -->
    <detail-rate :goodRote="goodRote" ref="rote"></detail-rate>
    <!-- 推荐区域 -->
    <detail-recommend
      :recommendList="recommendList"
      ref="recommend"
    ></detail-recommend>
    <!-- 返回顶部按钮 -->
    <back-top></back-top>
    <!-- 底部工具栏区域 -->
    <detail-goods-action @addCart="addCart"></detail-goods-action>
  </div>
</template>

<script>
import DetailNavBar from "./childCom/DetailNavBar";
import DetailSwiper from "./childCom/DetailSwiper";
import DetailGoodsInfo from "./childCom/DetailGoodsInfo";
import DetailServices from "./childCom/DetailServices";
import DetailShopInfo from "./childCom/DetailShopInfo";
import DetailGoodDesc from "./childCom/DetailGoodDesc.vue";
import DetailGoodParam from "./childCom/DetailGoodParam";
import DetailGoodRole from "./childCom/DetailGoodRole";
import DetailRate from "./childCom/DetailRate";
import DetailRecommend from "./childCom/DetailRecommend";
import BackTop from "@/components/content/backtop/BackTop";
import DetailGoodsAction from "./childCom/DetailGoodsAction";

export default {
  name: "Detail",
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailGoodsInfo,
    DetailServices,
    DetailShopInfo,
    DetailGoodDesc,
    DetailGoodParam,
    DetailGoodRole,
    DetailRate,
    DetailRecommend,
    BackTop,
    DetailGoodsAction,
  },
  data() {
    return {
      topImages: [], //轮播图数据
      goodsInfo: {}, //商品基本信息
      services: [], //服务信息
      shopInfo: {}, //店铺信息
      goodDesc: {}, //商品描述
      goodParam: {}, //商品参数
      goodRule: {}, //商品尺寸
      goodRote: {}, //商品评价
      recommendList: [], //推荐商品
      goodScrollY: 0,
      goodParamScrollY: 0,
      goodRoteScrollY: 0,
      goodRecommendScrollY: 0,
    };
  },
  created() {
    this.getGoodsDetailData();
    this.getRecommendList();
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    //发起网络请求，获取商品详情数据
    async getGoodsDetailData() {
      const res = await this.$get("/detail", { iid: this.$route.query.iid });
      this.topImages = res.result.itemInfo.topImages;
      //商品信息
      this.goodsInfo = {
        title: res.result.itemInfo.title,
        price: res.result.itemInfo.price,
        oldPrice: res.result.itemInfo.oldPrice,
        discountDesc: res.result.itemInfo.discountDesc,
        columns: res.result.columns,
      };
      //服务信息
      this.services = res.result.shopInfo.services;
      //店铺信息
      this.shopInfo = {
        name: res.result.shopInfo.name,
        score: res.result.shopInfo.score,
        shopLogo: res.result.shopInfo.shopLogo,
        shopUrl: res.result.shopInfo.shopUrl,
        cSells: res.result.shopInfo.cSells,
        cGoods: res.result.shopInfo.cGoods,
      };
      //商品描述
      this.goodDesc = res.result.detailInfo;
      //商品参数
      this.goodParam = res.result.itemParams.info;
      //商品尺寸
      this.goodRule = res.result.itemParams.rule;
      //商品评价
      this.goodRote = res.result.rate;
    },

    //发起网络请求，获取推荐商品数据
    async getRecommendList() {
      const res = await this.$get("/recommend");
      this.recommendList = res.data.list;
    },

    //监听navBar点击事件
    navBarClick(index) {
      switch (index) {
        case 0:
          document.body.scrollTop = document.documentElement.scrollTop = 0;
          break;
        case 1:
          document.body.scrollTop = document.documentElement.scrollTop = this.goodParamScrollY;
          break;
        case 2:
          document.body.scrollTop = document.documentElement.scrollTop = this.goodRoteScrollY;
          break;
        case 3:
          document.body.scrollTop = document.documentElement.scrollTop = this.goodRecommendScrollY;
          break;
      }
    },

    //监听页面滚动事件
    handleScroll(e) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.goodParamScrollY = this.$refs.param.$el.offsetTop;
      this.goodRoteScrollY = this.$refs.rote.$el.offsetTop;
      this.goodRecommendScrollY = this.$refs.recommend.$el.offsetTop;
      if (scrollTop >= 0 && scrollTop < this.goodParamScrollY) {
        this.$refs.nav.currentIndex = 0;
      } else if (
        scrollTop >= this.goodParamScrollY &&
        scrollTop < this.goodRoteScrollY
      ) {
        this.$refs.nav.currentIndex = 1;
      } else if (
        scrollTop >= this.goodRoteScrollY &&
        scrollTop < this.goodRecommendScrollY
      ) {
        this.$refs.nav.currentIndex = 2;
      } else {
        this.$refs.nav.currentIndex = 3;
      }
    },

    //加入购物车
    addCart() {
      console.log("****");
    },
  },
};
</script>

<style lang="less" scoped>
.detail {
  background-color: #eee;
  margin-bottom: 1.306667rem;
  .detail-nav-bar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9;
    width: 100%;
  }
  .detail-swiper {
    margin-top: 1.173333rem;
  }
  .van-goods-action {
    z-index: 9;
  }
}
</style>