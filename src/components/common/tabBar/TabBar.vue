<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "TabBar",
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1.306667rem;
  display: flex;
  border-top: 0.026667rem solid #e8e8e8;
  padding-top: 0.053333rem;
  font-size: 0.32rem;
  font-weight: 600;
  background-color: #fff;
}
</style>