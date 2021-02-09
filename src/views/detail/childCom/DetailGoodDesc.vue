<template>
  <div class="detail-good-desc">
    <div class="title-before"></div>
    <div class="desc-title">{{ goodDesc.desc }}</div>
    <div class="title-after"></div>
    <div
      class="desc-image"
      v-for="(item1, index1) in goodDesc.detailImage"
      :key="index1"
    >
      <div class="desc-item-title">{{ item1.key }}</div>
      <div
        class="desc-item-image"
        v-for="(item2, index2) in item1.list"
        :key="index2"
      >
        <img :src="item2" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodDesc",
  props: {
    goodDesc: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-good-desc {
  background-color: #fff;
  padding: 0.533333rem 0.266667rem 0;
  margin-top: 0.213333rem;
  .title-before {
    position: relative;
    width: 30%;
    height: 2px;
    background-color: #000;
    &::before {
      content: "";
      position: absolute;
      top: -0.133333rem;
      left: 0;
      height: 0.266667rem;
      width: 0.266667rem;
      background-color: #000;
      border-radius: 50%;
    }
  }
  .desc-title {
    font-size: 0.373333rem;
    padding: 0.4rem 0;
  }
  .title-after {
    position: relative;
    float: right;
    width: 30%;
    height: 2px;
    background-color: #000;
    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: -0.133333rem;
      height: 0.266667rem;
      width: 0.266667rem;
      background-color: #000;
      border-radius: 50%;
    }
  }
  .desc-image {
    padding-top: 0.4rem;
    .desc-item-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 0.266667rem;
    }

    .desc-item-image {
      img {
        width: 100%;
      }
    }
  }
}
</style>