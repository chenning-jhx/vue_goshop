<template>
  <div class="detail-swiper">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in topImages" :key="index">
        <img :src="item" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.van-swipe {
  background-color: #fff;
  .van-swipe-item {
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 60%;
    }
  }
}
</style>