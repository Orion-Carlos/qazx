<template>
  <div class="wrong">
    <img src="@/assets/imgs/wrong.png" alt="">
    <div class="tips1">啊呀，出错了</div>
    <div class="tips2">链接已失效，请重新登录</div>
  </div>
</template>

<script>
export default {
  name: "wrong",
  data() {
    return {};
  }
};
</script>
<style scoped lang="scss">
.wrong {
  height: 100vh;
  width: 100vw;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 10vh;
    margin-right: 5vw;
    width: 60vw;
  }
  .tips1 {
    font-size: 22px;
    font-weight: bold;
  }
  .tips2 {
    margin-top: 6.5vw;
    font-size: 15px;
    color: rgb(165, 169, 173);
  }
}
</style>