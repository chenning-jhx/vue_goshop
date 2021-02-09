<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" />
    <van-goods-action-icon icon="cart-o" text="购物车" />
    <van-goods-action-icon icon="star" text="收藏" />
    <van-goods-action-button
      type="warning"
      text="加入购物车"
      @click="addCart"
    />
    <van-goods-action-button type="danger" text="立即购买" />
  </van-goods-action>
</template>

<script>
export default {
  name: "DetailGoodsAction",
  methods: {
    addCart() {
      this.$emit("addCart");
    },
  },
};
</script>

<style lang="less" scoped>
</style>