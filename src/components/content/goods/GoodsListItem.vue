<template>
  <div class="goods-list-item" @click="goGoodDetail">
    <img :src="showImage" />
    <div class="goods-info">
      <div class="goods-title">{{ goods.title }}</div>
      <div class="goods-other">
        <span class="goods-price">¥{{ goods.price }}</span>
        <span class="goods-collect">{{ goods.cfav }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: { type: Object, default: {} },
  },
  computed: {
    //商品图片
    showImage() {
      return this.goods.image || this.goods.show.img;
    },
  },
  methods: {
    //监听商品点击事件
    goGoodDetail() {
      this.$router.push({ path: "/detail", query: { iid: this.goods.iid } });
    },
  },
};
</script>

<style lang="less" scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  padding-bottom: 1.066667rem;
  img {
    width: 100%;
  }
  .goods-info {
    font-size: 0.373333rem;
    .goods-title {
      padding: 0 0.133333rem;
      margin-bottom: 0.266667rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
    }
    .goods-other {
      position: absolute;
      left: 0;
      bottom: 0.266667rem;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 0.133333rem;
      font-size: 0.426667rem;
      .goods-price {
        color: var(--color-tint);
      }
      .goods-collect {
        display: flex;
        &::before {
          content: "";
          width: 0.426667rem;
          height: 0.426667rem;
          background-image: url(../../../assets/image/common/collect.svg);
          background-size: cover;
          margin-right: 0.08rem;
        }
      }
    }
  }
}
</style>
