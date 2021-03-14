<template>
  <div class="bot_footer">
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/saleTarget">
        <span>销售目标</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active1 : icon.inactive1"
        />
      </van-tabbar-item>

      <van-tabbar-item replace to="/salesAnalysis">
        <span>售出量分析</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active2 : icon.inactive2"
        />
      </van-tabbar-item>

      <van-tabbar-item replace to="/marketPer">
        <span>市场项目业绩</span>
        <img
          slot="icon"
          slot-scope="props"
          :src="props.active ? icon.active3 : icon.inactive3"
        />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import m1 from "@/assets/imgs/icon4@2x.png";
import m1a from "@/assets/imgs/icon5@2x.png";

import m2 from "@/assets/imgs/icon6@2x.png";
import m2a from "@/assets/imgs/icon7@2x.png";

import m3 from "@/assets/imgs/icon8@2x.png";
import m3a from "@/assets/imgs/icon9@2x.png";

export default {
  data() {
    return {
      active: 0,

      icon: {
        active1: m1a,
        inactive1: m1,
        active2: m2a,
        inactive2: m2,
        active3: m3a,
        inactive3: m3,
      },
    };
  },
  components: {},
  created() {},

  methods: {
    onClickLeft() {
      console.log("返回上一頁");
    },
  },
  computed: {},
};
</script>
<style scoped lang="scss">
.bot_footer {
  height: 1.6rem;
  .van-tabbar {
    height: 1.6rem;
    img {
      width: 0.48rem;
      height: 0.48rem;
    }

    .van-tabbar-item__text span {
      font-size: 0.24rem;
    }
  }
}
</style>

