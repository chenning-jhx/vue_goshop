<template>
  <div class="home">
    <!-- navbar页面区域 -->
    <nav-bar>
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item
        v-for="(item, index) in swiperList"
        :key="index"
        @click="swiperClick(item.link)"
        ><img :src="item.image"
      /></van-swipe-item>
    </van-swipe>
    <!-- 推荐区域 -->
    <recommend-view :recommendList="recommendList"></recommend-view>
    <!-- 本周流行区域 -->
    <popular></popular>

    <van-list
      v-model="goodsLoading"
      :finished="goodsFinished"
      finished-text="没有更多了"
      :immediate-check="false"
      @load="loading"
    >
      <!-- tabctrol导航区域 -->
      <tab-ctrol
        :tabCtrolList="tabCtrolList"
        @tabCtrolClick="tabCtrolClick"
      ></tab-ctrol>
      <!-- 商品列表区域 -->
      <goods-list :homeGoodsList="showGoodsList"></goods-list>
    </van-list>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import RecommendView from "./childCom/RecommendView";
import Popular from "./childCom/Popular";
import TabCtrol from "@/components/content/tabctrol/TabCtrol";
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    Popular,
    TabCtrol,
    GoodsList,
  },
  data() {
    return {
      swiperList: [], //轮播图数据
      recommendList: [], //推荐数据
      tabCtrolList: ["流行", "新款", "精选"], //tabctrol数据
      homeGoodsList: [],
      goods: {
        pop: { page: 0, list: [] }, //流行商品数据 页数
        new: { page: 0, list: [] }, //新款商品数据 页数
        sell: { page: 0, list: [] }, //精选商品数据 页数
      },
      currentType: "pop",
      goodsLoading: false,
      goodsFinished: false,
    };
  },
  created() {
    this.getHomeMultidata();
    this.getHomeGoodsListData("pop");
    this.getHomeGoodsListData("new");
    this.getHomeGoodsListData("sell");
  },
  computed: {
    //首页商品数据
    showGoodsList() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    //发起网络请求，获取首页顶部数据
    async getHomeMultidata() {
      const res = await this.$get("/home/multidata");
      this.swiperList = res.data.banner.list;
      //推荐
      this.recommendList = res.data.recommend.list;
    },

    //监听轮播图点击事件
    swiperClick(path) {
      location.href = path;
    },

    //监听tabctrol点击事件
    tabCtrolClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
        default:
          this.currentType = "pop";
      }
    },

    //发起网络请求，获取商品列表数据
    async getHomeGoodsListData(type) {
      this.goods[type].page += 1;
      const res = await this.$get("/home/data", {
        type: type,
        page: this.goods[type].page,
      });
      this.goods[type].list = [...this.goods[type].list, ...res.data.list];
    },

    loading() {
      console.log(this.goodsLoading);
      this.getHomeGoodsListData(this.currentType);
      this.goodsLoading = false;
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  padding-bottom: 1.306667rem;
  .nav-bar {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 9;
    width: 100%;
    background-color: var(--color-tint);
    font-size: 0.426667rem;
    font-weight: 600;
    color: #fff;
  }
  .van-swipe {
    margin-top: 1.173333rem;
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
}
</style>