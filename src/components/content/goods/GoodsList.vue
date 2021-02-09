<template>
  <div class="goods-list">
    <goods-list-item
      v-for="(item, index) in homeGoodsList"
      :key="index"
      :goods="item"
    ></goods-list-item>
  </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem";
export default {
  name: "GoodsList",
  components: {
    GoodsListItem,
  },
  props: {
    homeGoodsList: {
      type: Array,
      default: [],
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 0.266667rem;
}
</style>