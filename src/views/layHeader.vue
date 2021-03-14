<template>
  <div class="top_header">
    <van-nav-bar
      title=""
      left-text=""
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {

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



</style>

