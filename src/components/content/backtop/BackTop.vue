<template>
  <div class="back-top" @click="backTopClick" v-show="isShowimg">
    <img src="../../../assets/image/common/top.png" />
  </div>
</template>

<script>
export default {
  name: "BackTop",
  data() {
    return {
      isShowimg: false,
    };
  },
  mounted() {
    // 滚动操作监听
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    //移除滚动操作监听
    document.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    // 回到顶部,加计时器是为了过渡顺滑
    backTopClick() {
      let timer = setInterval(() => {
        var osTop =
          document.documentElement.scrollTop || document.body.scrollTop;
        var ispeed = Math.floor(-osTop / 5);
        document.documentElement.scrollTop = document.body.scrollTop =
          osTop + ispeed;
        if (osTop == 0) {
          clearInterval(timer);
          this.isShowimg = false;
        }
      }, 30);
    },

    // 滚动操作监听
    handleScroll(e) {
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.saveY = scrollTop;
      let offsetTop = 0;
      try {
        offsetTop = document.querySelector(".home").offsetTop;
      } catch (e) {
        offsetTop = 0;
      }
      if (scrollTop > offsetTop) {
        if (scrollTop > 500) {
          this.isShowimg = true;
        } else {
          this.isShowimg = false;
        }
      } else {
        this.isShowimg = false;
      }
    },
  },
};
</script>

<style lang="less" scoped>
.back-top {
  position: fixed;
  bottom: 1.6rem;
  right: 0.266667rem;
  width: 1.066667rem;
  height: 1.066667rem;
  img {
    width: 100%;
  }
}
</style>