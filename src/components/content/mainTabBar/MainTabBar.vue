<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="@/assets/image/tabbar/home.svg" />
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/home_active.svg"
      />
      <div slot="item-text" class="tab-bar-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/categorier">
      <img slot="item-icon" src="@/assets/image/tabbar/category.svg" />
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/category_active.svg"
      />
      <div slot="item-text" class="tab-bar-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img slot="item-icon" src="@/assets/image/tabbar/cart.svg" />
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/cart_active.svg"
      />
      <div slot="item-text" class="tab-bar-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="@/assets/image/tabbar/profile.svg" />
      <img
        slot="item-icon-active"
        src="@/assets/image/tabbar/profile_active.svg"
      />
      <div slot="item-text" class="tab-bar-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "@/components/common/tabBar/TabBar";
import TabBarItem from "@/components/common/tabBar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
  methods: {
    log() {
      console.log(1111);
    },
  },
};
</script>

<style>
</style>