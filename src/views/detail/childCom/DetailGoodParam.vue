<template>
  <div class="detail-good-param">
    <div class="good-param">
      <div class="param-title">{{ goodParam.key }}</div>
      <div class="param-detail">
        <van-row v-for="(item, index) in goodParam.set" :key="index">
          <van-col span="8">{{ item.key }}</van-col>
          <van-col span="16">{{ item.value }}</van-col>
        </van-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodParam",
  props: {
    goodParam: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-good-param {
  margin-top: 0.213333rem;
  padding: 0.4rem 0.266667rem;
  background-color: #fff;
  .good-param {
    .param-title {
      font-size: 0.426667rem;
      font-weight: 600;
    }
    .param-detail {
      font-size: 0.4rem;
      padding: 0.266667rem 0;
      .van-row {
        padding: 0.213333rem 0;
        border-bottom: 0.026667rem solid #e8e8e8;
        &:nth-last-child(1) {
          border: none;
        }
      }
    }
  }
}
</style>