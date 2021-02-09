<template>
  <div class="detail-shop-info">
    <div class="shop-info-title">
      <img :src="shopInfo.shopLogo" />
      <span class="title-name">{{ shopInfo.name }}</span>
    </div>
    <div class="shop-info-desc">
      <div class="desc-left">
        <div class="desc-sell">
          <p class="desc-count">{{ cSells }}</p>
          <p class="desc-name">总销量</p>
        </div>
        <div class="desc-good">
          <p class="desc-count">{{ shopInfo.cGoods }}</p>
          <p class="desc-name">全部宝贝</p>
        </div>
      </div>
      <div class="desc-right">
        <div
          v-for="(item, index) in shopInfo.score"
          :key="index"
          class="right-item"
        >
          <span>{{ item.name }}</span>
          <span>{{ item.score }}</span>
          <span :class="{ isBetter: item.isBetter }">{{
            item.isBetter ? "高" : "低"
          }}</span>
        </div>
      </div>
    </div>
    <div class="shop-btn" @click="goShop">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shopInfo: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    cSells() {
      return (this.shopInfo.cSells / 10000).toFixed(2) + "万";
    },
  },
  methods: {
    //去店铺详情页
    goShop() {
      location.href = this.shopInfo.shopUrl;
    },
  },
};
</script>

<style lang="less" scoped>
.detail-shop-info {
  background-color: #fff;
  margin-top: 0.213333rem;
  padding: 0.266667rem;
  .shop-info-title {
    font-size: 0.426667rem;
    font-weight: 500;
    img {
      width: 1.6rem;
      height: 1.6rem;
      vertical-align: middle;
    }
    .title-name {
      margin-left: 0.213333rem;
    }
  }
  .shop-info-desc {
    display: flex;
    .desc-left {
      flex: 1;
      display: flex;
      padding: 0.8rem 0.533333rem;
      margin: 0.266667rem 0.533333rem 0.266667rem 0;
      border-right: 0.026667rem solid #e8e8e8;
      .desc-sell {
        flex: 1;
        margin-right: 0.266667rem;
        .desc-count {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
        .desc-name {
          text-align: center;
          font-size: 14px;
        }
      }
      .desc-good {
        flex: 1;
        .desc-count {
          text-align: center;
          font-size: 16px;
          font-weight: 600;
        }
        .desc-name {
          text-align: center;
          font-size: 14px;
        }
      }
    }
    .desc-right {
      flex: 1;
      padding: 0.266667rem 0;
      .right-item {
        position: relative;
        padding: 0.213333rem 0;
        span {
          font-size: 0.373333rem;
          padding: 0 0.053333rem;
          &:nth-child(2) {
            color: var(--color-tint);
          }
          &:nth-child(3) {
            position: absolute;
            right: 0.213333rem;
            top: 0.213333rem;
            color: #fff;
            background-color: red;
            padding: 0.053333rem;
          }
        }
        .isBetter {
          background-color: #29cc40 !important;
        }
      }
    }
  }
  .shop-btn {
    margin: 0 auto;
    padding: 0.266667rem 0.533333rem;
    width: 50%;
    text-align: center;
    border-radius: 0.533333rem;
    font-size: 0.426667rem;
    background-color: #e8e8e8;
  }
}
</style>