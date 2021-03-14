<template>
  <div class="target_echarts">
    <div class="drawing"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import http from "@/core/http.service";

// 侧边导航栏
export default {
  props: {
    time: String,
  },

  data() {
    return {
      series: {
        XData: [
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          " 9月",
          "10月",
          "11月",
          "12月",
          "1月",
          "2月",
        ],
        SData: [],
      },
    };
  },
  computed: {},
  watch: {},

  created() {},
  mounted() {
    this.myEcharts();
  },

  methods: {
    myEcharts() {
      this.$nextTick(function () {
        this.setOptions(this.series);
      });
    },

    //设置容器高宽

    setOptions(series) {
      //   var drawing = document.querySelector(".drawing")
      // //   drawing.style.width=window.innerWidth+'px'

      //   console.log(document.querySelector(".drawing"))

      setTimeout(function () {
        var myChart = echarts.init(document.querySelector(".drawing"));
        myChart.setOption({
          tooltip: {},

          xAxis: {
            data: series.XData,
            axisLabel: {
              interval: 0,
              textStyle: {
                color: "#999999",
              },
            },

            axisLine: {
              lineStyle: {
                color: "#F24B42",
              },
            },
          },
          yAxis: {
            show: true,
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false },
            type: "value",
            splitArea: { show: false },
          },
          grid: {
            left: 40,
          },
          series: [
            {
              type: "line",
              areaStyle: {},
              data: series.SData,
              color: "#185DFF",
              symbolSize: 10,
              areaStyle: {
                normal: {
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0, color: "rgba(24, 93, 255, 0)" },
                    { offset: 0.5, color: "rgba(24, 93, 255, 0.3)" },
                    { offset: 1, color: "rgba(24, 93, 255, 0.6)" },
                  ]),
                  global: false,
                },
              }, //填充区域样式
              lineStyle: {
                color: "#185DFF",
                width: 1,
              },
              itemStyle: {
                color: "#185DFF",
                opacity: 1, //为0不会绘制图形拐点消失
              },
            },
          ],
        });

        myChart.resize();
        window.addEventListener("click", function () {
          myChart.resize();
        });
        // 监听浏览器页面缩放事件
        window.addEventListener("resize", function () {
          myChart.resize();
        });
      }, 200);
    },

    accept(m) {
      this.series.SData = m;
      this.myEcharts();
    },
  },
};
</script>

<style lang="scss" type="text/css">
.target_echarts {
  width: 100%;
  height: 280px;
}
.drawing {
  width: 100%;
  height: 280px;
}
</style>
