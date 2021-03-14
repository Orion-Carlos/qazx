<template>
  <div id="saleTarget">
    <div class="slogan">销售目标</div>

    <div class="common_vm completion">
      <div class="common_row">
        <img class="left_icon" src="@/assets/imgs/icon1.png" alt="" />
        <div class="ft distributor">完成情况</div>
        <div class="sm_mark">全年目标销量</div>
        <img class="right_icon" src="@/assets/imgs/icon2@2x.png" alt="" />
      </div>

      <div class="pro_row">
        <div class="top">
          <div class="explain">全年总售出量</div>
          <div class="specific">79,456.23Kb</div>
        </div>
        <progressline
          :sum="3.2"
          :percentage="90"
          pcolor="#FFB600"
          :text-inside="true"
        />
      </div>

      <div class="pro_row">
        <div class="top">
          <div class="explain">B2B售出量</div>
          <div class="specific">3,821.23Kb</div>
        </div>
        <progressline
          :sum="3.2"
          :percentage="50"
          pcolor="#FF2235"
          :text-inside="true"
        />
      </div>

      <div class="pro_row">
        <div class="top">
          <div class="explain">B2C售出量</div>
          <div class="specific">3,198.00Kb</div>
        </div>
        <progressline
          :sum="3.2"
          :percentage="10"
          pcolor="#4C8EFF"
          :text-inside="true"
        />
      </div>
    </div>

    <div class="common_vm scanRate">
      <div class="common_row">
        <img class="left_icon" src="@/assets/imgs/icon1.png" alt="" />
        <div class="ft distributor">净销售扫码率</div>
        <div class="remarks ft">(DDF扫码率)：</div>
        <div class="ft numerical">{{ DDfcode }}</div>
      </div>
    </div>

    <div class="common_vm contrast">
      <div class="common_row">
        <img class="left_icon" src="@/assets/imgs/icon1.png" alt="" />
        <div class="ft distributor">买入量vs售出量</div>
        <div class="source">(此数据来源于Derp)</div>
      </div>

      <table cellspacing="0" style="text-align: center" class="common_table">
        <tr class="tit">
          <th></th>
          <th class="header" style="width: 40%">本年度(BBL)</th>
          <th class="header" style="width: 40%">过去12个月(BBL)</th>
        </tr>

        <tr>
          <td class="header">买入量</td>
          <td>516,987</td>
          <td>516,987</td>
        </tr>
        <tr>
          <td class="header">售出量</td>
          <td>516,987</td>
          <td>516,987</td>
        </tr>
      </table>

      <div class="echarts">
        <targetEcharts ref="one" />
      </div>

      <div class="careful">
        <div class="notes">注：</div>
        <p>1.折线数字为当前月往前推算过去十二个月的买入量减去售出量</p>
        <p>2.阴影部分位于红线以上意为买入量大于卖出量， 反之买入量小于卖出量</p>
      </div>

      <table  cellspacing="0" style="text-align: center" class="common_table target_table">
        <tr class="tit">
          <th class="header" style="width: 25%">产品编码</th>
          <th class="header" style="width: 25%">产品名称</th>
          <th class="header" style="width: 25%">规格</th>
          <th class="header" style="width: 25%">买入量-卖出量</th>
        </tr>

        <tr>
          <td>120902</td>
          <td>美孚佳特 300 D208L 进口</td>
          <td>208L</td>
          <td>2000BBL</td>
        </tr>
        <tr>
          <td>120902</td>
          <td>美孚佳特 300 D208L 进口</td>
          <td>208L</td>
          <td>2000BBL</td>
        </tr>
        <tr>
          <td>120902</td>
          <td>美孚佳特 300 D208L 进口</td>
          <td>208L</td>
          <td>2000BBL</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import progressline from "@/views/progress/progress";
import targetEcharts from "@/views/echarts/target_echarts";
// import{getbankInfoListOne} from '@/api/target'
export default {
  components: {
    progressline,
    targetEcharts,
  },

  data() {
    return {
      DDfcode: "75%",

      SData: [
        -4000,
        -2000,
        -1000,
        -300,
        2000,
        1700,
        -800,
        -1300,
        -3000,
        -5000,
        1000,
        0,
      ],
    };
  },
  mounted() {
    this.rendering();
  },

  created() {},

  methods: {
    rendering() {
      this.$refs.one.accept(this.SData);
    },
  },
  computed: {},
};
</script>
<style scoped lang="scss">
#saleTarget {
  background-color: #f2f2f2;
  width: 100vw;
  height: 101%;

  .completion {
    height: 4.31rem;
    margin-top: 0.5rem;
  }

  .scanRate {
    height: 0.92rem;
    margin-top: 0.24rem;
  }

  .contrast {
    margin-top: 0.24rem;
    margin-bottom: 0.24rem;
  }

  .source {
    font-size: 0.18rem;
    color: #666666;
    position: absolute;
    bottom: 0;
  }



  .sm_mark {
    font-size: 0.2rem;
    color: #666666;
    float: right;
    line-height: 0.92rem;
    height: 0.92rem;
    display: inline-block;
    margin-left: 0.05rem;
  }

  .pro_row {
    margin-bottom: 0.24rem;
    .top {
      position: relative;
      height: 0.37rem;
      margin-left: 0.3rem;
      margin-right: 0.3rem;
      margin-bottom: 0.16rem;

      .explain {
        position: absolute;
        color: #666666;
        font-size: 0.24rem;
        left: 0;
      }

      .specific {
        color: #333333;
        font-size: 0.32rem;
        position: absolute;
        right: 0;
      }
    }
  }

  .echarts {
    height: 280px;
    width: 97%;
    margin-left: 2%;
    padding-right: 1%;
  }

  .careful {
    padding-left: 0.3rem;
    padding-right: 0.66rem;
    margin-left: 0.3rem;
    position: relative;

    .notes {
      position: absolute;
      top: 0;
      color: #666666;
      font-size: 0.2rem;
      left: 0;
    }
    p {
      color: #666666;
      font-size: 0.2rem;
      margin: 0;
      margin-left: 0.1rem;
    }
  }
  .target_table {
    margin-top: 0.5rem;
  }
}
</style>

