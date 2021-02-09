<template>
  <div class="detail-goods-info">
    <div class="goods-info-title">{{ goodsInfo.title }}</div>
    <div class="goods-info-desc clear-fix">
      <div class="goods-info-price">
        <span class="now-price">{{ goodsInfo.price }}</span>
        <span class="old-price">{{ goodsInfo.oldPrice }}</span>
      </div>
      <div class="discount-desc">{{ goodsInfo.discountDesc }}</div>
    </div>
    <div class="goods-info-other">
      <div
        class="other-item"
        v-for="(item, index) in goodsInfo.columns"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-goods-info {
  background-color: #fff;
  padding: 0.4rem;
  .goods-info-title {
    margin-bottom: 0.133333rem;
    font-size: 0.48rem;
    font-weight: 500;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
  .goods-info-desc {
    .goods-info-price {
      float: left;
      padding: 0.266667rem 0;
      .now-price {
        font-size: 0.48rem;
        color: var(--color-tint);
      }
      .old-price {
        margin-left: 0.266667rem;
        font-size: 0.426667rem;
        text-decoration: line-through;
        color: #d5d5d5;
      }
    }
    .discount-desc {
      float: left;
      margin-left: 0.133333rem;
      padding: 0.106667rem;
      font-size: 0.373333rem;
      font-weight: 400;
      color: #fff;
      border-radius: 0.266667rem;
      background-color: #f13e3a;
    }
  }
  .goods-info-other {
    display: flex;
    justify-content: center;
    align-content: center;
    font-size: 0.426667rem;
    color: #d5d5d5;
    .other-item {
      flex: 1;
      &:nth-child(2) {
        text-align: center;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
}
</style>