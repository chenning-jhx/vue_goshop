<template>
  <div class="detail-nav-bar">
    <nav-bar>
      <div slot="left" class="nav-bar-left" @click="goBack">
        <img src="../../../assets/image/common/back.svg" />
      </div>
      <div slot="center" class="nav-bar-center">
        <div
          class="nav-bar-item"
          :class="{ active: currentIndex === index }"
          v-for="(item, index) in navBarList"
          :key="index"
          @click="navBarClick(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/content/navbar/NavBar";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      navBarList: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    navBarClick(index) {
      this.currentIndex = index;
      this.$emit("navBarClick", index);
    },

    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.detail-nav-bar {
  background-color: #fff;
  border-bottom: 0.026667rem solid #eee;
  .nav-bar-left {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 50%;
    }
  }
  .nav-bar-center {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 100%;
    .nav-bar-item {
      flex: 1;
      text-align: center;
      font-size: 0.373333rem;
      font-weight: 600;
    }
    .active {
      color: var(--color-tint);
    }
  }
}
</style>