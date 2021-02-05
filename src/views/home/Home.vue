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
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
import RecommendView from "./childCom/RecommendView";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
  },
  data() {
    return {
      swiperList: [], //轮播图数据
      recommendList: [], //推荐数据
    };
  },
  created() {
    this.getHomeMultidata();
  },
  methods: {
    //发起网络请求，获取首页顶部数据
    async getHomeMultidata() {
      const res = await this.$get("/home/multidata");
      console.log(res.data);
      //轮播图
      this.swiperList = res.data.banner.list;
      //推荐
      this.recommendList = res.data.recommend.list;
    },

    swiperClick(path) {
      location.href = path;
    },
  },
};
</script>

<style lang="less" scoped>
.home {
  .nav-bar {
    background-color: var(--color-tint);
    font-size: 0.426667rem;
    font-weight: 600;
    color: #fff;
  }
  .van-swipe {
    .van-swipe-item {
      img {
        width: 100%;
      }
    }
  }
}
</style>