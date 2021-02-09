<template>
  <div class="services">
    <div class="service-item" v-for="(item, index) in services" :key="index">
      <img :src="item.icon" alt="" />
      <span class="service-name">{{ item.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailServices",
  props: {
    services: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.services {
  display: flex;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 0.266667rem;
  margin-top: 0.08rem;
  font-size: 0.373333rem;
  .service-item {
    width: 33%;
    padding-bottom: 0.133333rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>