<template>
  <div class="detail-rate" v-if="Object.keys(goodRote).length !== 0">
    <div class="detail-rate-title">
      <div class="title-name">用户评价</div>
      <div class="title-more">更多></div>
    </div>
    <div
      class="detail-rate-content"
      v-for="(item, index) in goodRote.list"
      :key="index"
    >
      <div class="rate-user">
        <img :src="item.user.avatar" />
        <span class="user-name">{{ item.user.uname }}</span>
      </div>
      <div class="rate-content">
        <div class="rate-desc">{{ item.content }}</div>
        <div class="rate-image">
          <img :src="item" v-for="(item, index) in item.images" :key="index" />
        </div>
      </div>
      <div class="rate-other">
        <span class="other-date">{{ item.created | dateFormat }}</span>
        <span>{{ item.style }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailRate",
  props: {
    goodRote: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style lang="less" scoped>
.detail-rate {
  margin-top: 0.213333rem;
  padding: 0 0.266667rem 0.4rem;
  background-color: #fff;
  .detail-rate-title {
    display: flex;
    justify-content: space-between;
    padding: 0.266667rem 0;
    border-bottom: 0.026667rem solid #e8e8e8;
    .title-name {
      font-size: 0.48rem;
      font-weight: 500;
    }
    .title-more {
      font-size: 0.373333rem;
      font-weight: 500;
    }
  }
  .detail-rate-content {
    .rate-user {
      margin-top: 0.213333rem;
      img {
        width: 1.6rem;
        vertical-align: middle;
      }
      .user-name {
        margin-left: 0.133333rem;
        font-size: 0.373333rem;
      }
    }
    .rate-content {
      margin-top: 0.133333rem;
      .rate-desc {
        font-size: 0.373333rem;
      }
      .rate-image {
        display: flex;
        flex-wrap: wrap;
        margin-top: 0.133333rem;
        img {
          width: 20%;
          padding: 0.08rem;
        }
      }
    }
    .rate-other {
      margin-top: 0.133333rem;
      font-size: 0.373333rem;
      .other-date {
        margin-right: 0.133333rem;
      }
    }
  }
}
</style>