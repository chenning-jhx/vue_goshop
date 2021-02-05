<template>
  <div class="tab-bar-item" @click="tabBarClick">
    <div v-if="isActived"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{ active: !isActived }"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: {
      type: String,
      default: "",
    },
  },
  computed: {
    //tabbar图片激活显示 相同false  不同true
    isActived() {
      return this.$route.path.indexOf(this.path) == -1;
    },
  },
  methods: {
    tabBarClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-bar-item {
  flex: 1;
  text-align: center;
  img {
    width: 0.773333rem;
    height: 0.773333rem;
  }
  .active {
    color: #ff5777;
  }
}
</style>