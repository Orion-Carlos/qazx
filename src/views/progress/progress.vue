<template>
  <div class="progress">
    <!-- 条形进度条 -->
    <div class="progress-bar">
      <div class="progress-bar__outer">
        <div class="progress-bar__inner" :style="barStyle">
          <!-- 进度条内显示百分比 -->
          <div v-if="textInside" class="progress__text"  :style="textStyle">
            <span>{{sum}}Kb /</span> {{ percentage }}%

          </div>
        </div>
        <img class="icon-triangle" src="@/assets/imgs/icon2@2x.png" alt="" />

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    percentage: {
      // 进度条百分比
      type: Number,
      default: 0,
      required: true,
      valiator(value) {
        return value >= 0 && value <= 100;
      },
    },

    sum: {
      // 进度条百分比
      type: Number,
      default: 0,
      required: true,

    },

    status: {
      // 进度条状态：正常状态，成功状态，异常状态
      type: String,
    },

    textInside: {
      // 文字是否內显
      type: Boolean,
      default: false,
    },
    pcolor: {
      // 进度条颜色
      type: String,
    },
    cwidth: {
      type: Number,
      default: 126,
    },
  },
  computed: {
    progressTextSize() {
      return 9 + this.strokeHeight * 0.4;
    },
    stroke() {
      let color;
      if (this.pcolor) {
        return this.pcolor;
      }
      switch (this.status) {
        case "success":
          color = "#13ce66";
          break;
        case "failure":
          color = "#ff4949";
          break;
        default:
          color = "#20a0ff";
          break;
      }
      return color;
    },
    barStyle() {
      // 计算属性调用其他计算属性，必须加this关键字，否则找不到
      return { width: this.percentage + "%", backgroundColor: this.stroke };
    },

    textStyle(){
        if(this.percentage < 25 ){
            return { color: 'block' }
        }else{
            return { color: 'white' }

        }
    },

    trackPath() {
      const radius = 50 - this.relativeStrokeHeight / 2;
      return (
        "M 50 50 m 0 -" +
        radius +
        " a " +
        radius +
        " " +
        radius +
        " 0 1 1 0 " +
        radius * 2 +
        " a " +
        radius +
        " " +
        radius +
        " 0 1 1 0 -" +
        radius * 2 +
        " "
      );
    },
    relativeStrokeHeight() {
      return (this.strokeHeight * 100) / this.cwidth;
    },
    perimeter() {
      const radius = 50 - this.relativeStrokeHeight / 2;
      return 2 * Math.PI * radius;
    },
    circlePathStyle() {
      const perimeter = this.perimeter;
      return {
        strokeDasharray: "" + perimeter + "px," + perimeter + "px",
        strokeDashoffset: (1 - this.percentage / 100) * perimeter + "px",
      };
    },
  },
};
</script>
<style>
.progress {
  margin-left: 0.3rem;
  margin-right: 0.3rem;
  /* border: 1px solid #ffbbff; */
 
}
.progress-bar {
  width: 100%;
  box-sizing: border-box; /* 盒模型的方式 */
  margin-right: -50px;
  height: 0.36rem;
}
.progress-bar__outer {
  width: 100%;
  border-radius: 10px;
  background-color: #ebeef5;
  position: relative;
  height: 0.36rem;
}
.progress-bar__inner {
  /* width: 60%; */
  background-color: rebeccapurple;
  border-radius: 10px;
  height: 100%;
  transition: width 0.6s ease;
  text-align: right;
}
.progress__text {
  font-size: 0.24rem;
  margin-left: 0.25rem;
  vertical-align: middle;
  margin-right: 5px;
  position: absolute;
  height: 100%;
  line-height: 0.36rem;
}

.icon-triangle {
    width: 0.2rem;
    height: 0.1rem;
    position:absolute;
    bottom: 0;
    right: 0.8rem;

}

.icon-circle-close,
.icon-close {
  font-family: "Wingdings" !important;
  color: red;
}
.icon-circle-check,
.icon-check {
  font-family: "Wingdings" !important;
  color: seagreen;
}

.icon-circle-close::before {
  content: "\FD";
}
.icon-close::before {
  content: "\FB";
}
.icon-circle-check::before {
  content: "\FE";
}
.icon-check::before {
  content: "\FC";
}

.progress_circle {
  /* 环形进度条 */
}
.progress--circle {
  display: inline-block;
  position: relative;
}

.progress--circle .progress__text {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 0px;
  text-align: center;
  width: 100%;
}
</style>