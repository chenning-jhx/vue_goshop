<template>
  <div class="recommend">
    <div
      class="recommend-item"
      v-for="(item, index) in recommendList"
      :key="index"
      @click="recommendClick(item.link)"
    >
      <img :src="item.image" />
      <div>{{ item.title }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommendList: {
      type: Array,
      default: [],
    },
  },
  methods: {
    //监听推荐跳转页面
    recommendClick(path) {
      location.href = path;
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 0.266667rem 0;
  .recommend-item {
    flex: 1;
    img {
      width: 2.133333rem;
    }
  }
}
</style>