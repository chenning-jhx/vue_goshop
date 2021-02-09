<template>
  <div class="detail-recommend">
    <div class="recommend-title">推荐商品</div>
    <goods-list :homeGoodsList="recommendList"></goods-list>
  </div>
</template>

<script>
import GoodsList from "@/components/content/goods/GoodsList";
export default {
  name: "DetailRecommend",
  components: {
    GoodsList,
  },
  props: {
    recommendList: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-recommend {
  margin-top: 0.4rem;
  padding: 0.4rem 0.266667rem;
  background-color: #fff;
  .recommend-title {
    font-size: 0.48rem;
    font-weight: 500;
  }
}
</style>