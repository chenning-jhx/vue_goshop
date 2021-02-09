<template>
  <div class="detail-good-rule" v-if="Object.keys(goodRule).length !== 0">
    <div class="rule-title">{{ goodRule.key }}</div>
    <div class="title-before"></div>
    <div class="rule-desc">{{ goodRule.disclaimer }}</div>
    <div class="title-after"></div>
    <div
      class="good-rule"
      v-for="(item1, index1) in goodRule.tables"
      :key="index1"
    >
      <van-row v-for="(item2, index2) in item1" :key="index2">
        <van-col span="4" v-for="(item3, index3) in item2" :key="index3">{{
          item3
        }}</van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodRole",
  props: {
    goodRule: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-good-rule {
  margin-top: 0.213333rem;
  padding: 0 0.266667rem 0.266667rem;
  background-color: #fff;
  .rule-title {
    padding: 0.266667rem 0;
    font-size: 0.426667rem;
    font-weight: 600;
  }
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
  .rule-desc {
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
  .good-rule {
    margin-top: 0.266667rem;
    font-size: 0.4rem;
    .van-row {
      padding: 0.266667rem 0;
      border-bottom: 0.026667rem solid #e8e8e8;
      &:nth-last-child(1) {
        border: none;
      }
    }
  }
}
</style>