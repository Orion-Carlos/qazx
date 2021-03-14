<template>
  <div id="app">

      <router-view></router-view>
  </div>
</template>

<script>
import http from "@/core/http.service";
export default {
  name: "app",
  created() {

    this.$router.push({ path: '/saleTarget' })

  }
};
</script>
<style lang="scss">
/* @media screen and (max-width: 500px) {
  html {
    font-size: 16px;
  }
}
@media screen and (min-width: 500px) and (max-width: 900px) {
  html {
    font-size: 22px;
  }
}
@media screen and (min-width: 900px) {
  html {
    font-size: 28px;
  }
} */

    .common_vm{

      background-color: #fff;
      margin-left: 0.3rem;
      margin-right:0.3rem;
      border-radius: 0.1rem;
      overflow: hidden;
      // margin-right: 0.3rem;
    }



  .slogan  {

      height: 0.48rem;
      line-height: 0.48rem;
      padding-left: 0.4rem;
      font-size: 0.4rem;
      font-weight: 700;
      color: #333333;
      margin: 0;
      margin-top: 0.15rem;
      
  }

  .common_row {

      overflow: hidden;
      position: relative;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      line-height: 0,.32rem;

    .left_icon {
      width: 0.35rem;
      height: 0.2rem;
      margin-top: 0.36rem;
      display: inline-block;
      float: left;

    }

    .right_icon {
      width: 0.2rem;
      height: 0.1rem;
      margin-top: 0.4rem;
      display: inline-block;
      float: right;
    }



    .distributor {
      font-size: 0.32rem !important;

    }


    .ft {
      font-size: 0.28rem;
      margin-left: 0.16rem;
      line-height: 0.92rem;
      height: 0.92rem;
      display: inline-block;
      float: left;
    }

    .remarks {
      color: #666666;
    }
    .numerical {
      font-size: 0.42rem;
      color: #185DFF;
    }


  }

  .common_table {
    width: 100%;
    text-align: center;
    margin-top: 0.17rem;
    font-size: 0.24rem;
    color: #333333;


    .tit {
      background: rgba(24, 93, 255, 0.05);
    }

    tr {
      height: 0.8rem;

      .header {
        color:#185DFF;
        font-weight: 700;

        font-family: SourceHanSansCN-Medium, SourceHanSansCN;
      }

    }

  }


.van-badge {
  min-width: 25px!important;
}

.van-badge--fixed {
  top: -5px!important;
  right: 5px!important;
}

.van-badge__wrapper {
   min-width: 100%
}





body {
  margin: 0;
  padding: 0;
  height: 100%;

}
html {
  -webkit-text-size-adjust: none;
  height: 100%;


}

#app {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}
</style>
