<template>
  <div id="marketPer">
    <div class="slogan">市场项目业绩</div>

    <div class="common_vm project">
      <div class="common_row">
        <img class="left_icon" src="@/assets/imgs/icon1.png" alt="" />
        <div class="ft distributor">当前参与的市场项目</div>
      </div>

      <van-radio-group v-model="radio">
        <van-radio name="1">黑霸王直销中心(DDC)项目</van-radio>
        <van-radio name="2">黑霸王直销中心(DDC)项目</van-radio>
      </van-radio-group>
    </div>

    <div class="common_vm cont_table">
      <div class="common_row">
        <img class="left_icon" src="@/assets/imgs/icon1.png" alt="" />
        <div class="ft distributor">黑霸王直销中心(DDC)项目</div>
      </div>

      <div class="centers">
        直销中心个数
        <div class="right">3</div>
      </div>

      <table
        cellspacing="0"
        style="text-align: center"
        class="common_table target_table"
      >
        <thead>
          <th style="width: 25%"></th>
          <th style="width: 25%"></th>
          <th style="width: 25%">实际数</th>
          <th style="width: 25%">计划数</th>
        </thead>

        <tbody>
          <template v-for="item in listArg">
            <tr>
              <td style="width: 25%" class="header trspan" rowspan="3">
                {{ item.name }}
              </td>
              <td style="width: 25%">活跃门店总数</td>
              <td style="width: 25%">
                <van-badge :content="56"> {{ item.sum }} </van-badge>
              </td>
              <td style="width: 25%">{{ item.cont }}</td>
            </tr>

            <tr>
              <td>售出总量</td>
              <td>
                <van-badge :content="56"> {{ item.sum }} </van-badge>
              </td>
              <td>{{ item.sum }}</td>
            </tr>

            <tr>
              <td>业务员总数</td>
              <td>
                <van-badge :content="56"> {{ item.sum }} </van-badge>
              </td>
              <td>{{ item.sum }}</td>
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},

  data() {
    return {
      DDfcode: "75%",
      radio: "1",
      listArg: [
        {
          name: "吉林",
          sum: 10,
          cont: 20,
        },

        {
          name: "吉林41",
          sum: 10,
          cont: 20,
        },
      ],
    };
  },

  mounted() {

    this.$nextTick(() => {
      let scrollMain = document.querySelector(".mescroll");
      console.log(scrollMain.scrollTop);
      scrollMain.scrollTop = 0;
    });


  },

  created() {

  },

  methods: {},
  computed: {},
};
</script>
<style scoped lang="scss">
#marketPer {
  background-color: #f2f2f2;
  width: 100vw;
  height: 101%;

  .project {
    margin-top: 0.5rem;

    .van-radio {
      height: 0.72rem;
      background: rgba(24, 93, 255, 0.1);
      border-radius: 0.04rem;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      margin-bottom: 0.1rem;
      font-size: 0.28rem;
      padding-left: 0.24rem;
      color: #333333;
      box-sizing: border-box;
    }
  }

  .centers {
    height: 0.8rem;
    background: rgba(24, 93, 255, 0.05);
    position: relative;
    text-align: center;
    color: #185dff;
    font-size: 0.26rem;
    line-height: 0.8rem;
    div {
      position: absolute;
      right: 0;
      top: 0;
      width: 25%;
    }
  }

  .scanRate {
    height: 0.92rem;
    margin-top: 0.24rem;
  }

  .cont_table {
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
  }

  table {
    span {
      width: 6.9rem;
      display: inline-block;
    }
  }
  .van-badge {
    width: 0.2rem;
    height: 0.2rem;
  }
}
</style>

