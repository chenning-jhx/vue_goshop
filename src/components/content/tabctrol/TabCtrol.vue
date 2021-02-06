<template>
  <div class="tab-ctrol" v-if="tabCtrolList">
    <div
      class="tab-ctrol-item"
      v-for="(item, index) in tabCtrolList"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="tabCtrolClick(index)"
    >
      {{ item }}
    </div>
  </div>
</template>

<script>
export default {
  name: "TabCtrol",
  props: {
    tabCtrolList: { type: Array, default: [] },
  },
  data() {
    return {
      currentIndex: 0, //tabctrol点击下标
    };
  },
  methods: {
    //监听tabctrol点击事件，传给父组件
    tabCtrolClick(index) {
      this.currentIndex = index;
      this.$emit("tabCtrolClick", index);
    },
  },
};
</script>

<style lang="less" scoped>
.tab-ctrol {
  display: flex;
  padding: 0.266667rem;
  font-size: 0.48rem;
  font-weight: 600;
  .tab-ctrol-item {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.133333rem;
  }
  .active {
    border-bottom: 0.026667rem solid var(--color-tint);
  }
}
</style>