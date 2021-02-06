<template>
  <div class="goods-list-item">
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
};
</script>

<style lang="less" scoped>
.goods-list-item {
  position: relative;
  width: 48%;
  padding-bottom: 0.8rem;
  img {
    width: 100%;
  }
  .goods-info {
    font-size: 0.373333rem;
    .goods-title {
      padding: 0 0.133333rem;
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
      padding: 0 0.133333rem;
      width: 100%;
      .goods-price {
        color: var(--color-tint);
      }
      .goods-collect {
        display: flex;
        &::before {
          content: "";
          width: 0.373333rem;
          height: 0.373333rem;
        }
      }
    }
  }
}
</style>
