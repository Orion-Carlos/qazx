<template>
  <div class="layout">
    <div class="lay_header">
      <router-view name="layHeader" />
    </div>

    <!-- <div class="lay_main" ref="wapper">
      <router-view/>
    </div> -->

    <mescroll-vue ref="mescroll" :down="mescrollDown" @init="mescrollInit">
      <router-view name="main" />
    </mescroll-vue>

    <div class="lay_footer">
      <router-view name="layFooter" />
    </div>
  </div>
</template>

<script>
import MescrollVue from "mescroll.js/mescroll.vue";

export default {
  name: "layout",
  components: {
    MescrollVue,
  },

  data() {
    return {
      mescroll: null, // mescroll实例对象
      mescrollDown: {
        use: false,
      },
      mescrollUp: {
        use: false,
        isBounce:false,
        isLock:false
      },
    };
  },
  created() {},
  mounted() {

    var Android = navigator.userAgent.indexOf('Android ');//判断是否为ios
    if (Android == -1) {
        this.ios('.mescroll')

    }
  },



  methods: {
    mescrollInit(mescroll) {
      this.mescroll = mescroll; // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    },

    ios(item) {
        var startY = 0;
        // var scrollBox = $()

        var scrollBox = document.querySelector(item)

        document.body.addEventListener('touchstart', function (e) {
            startY = e.touches[0].pageY;
        }, { passive: false });

        document.body.addEventListener('touchmove', function (e) {
            var moveY = e.touches[0].pageY;
            var top = scrollBox.scrollTop;
            var ch = scrollBox.clientHeight;
            var sh = scrollBox.scrollHeight;
            if (!isChildTarget(e.target, scrollBox)) {
                e.preventDefault();
            } else if ((top === 0 && moveY > startY) || (top + ch === sh && moveY < startY)) {
                e.preventDefault();
            }
        }, { passive: false });

        function isChildTarget(child, parent, justChild) {
            // justChild为true则只判断是否为子元素，若为false则判断是否为本身或者子元素 默认为false
            var parentNode;
            if (justChild) {
                parentNode = child.parentNode;
            } else {
                parentNode = child;
            }

            if (child && parent) {
                while (parentNode) {
                    if (parent === parentNode) {
                        return true;
                    }
                    parentNode = parentNode.parentNode;
                }
            }
            return false;
        }

    }











  },
  computed: {
    showLogin() {
      return this.$store.state.home.userInfo.userName;
    },
  },
};
</script>
<style scoped lang="scss">
@import "../variable.scss";
.layout {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  // main {
  //   flex: 1;
  //   background-color: rgb(249, 249, 249);
  //   overflow-y: auto;
  //   -webkit-overflow-scrolling: touch; /*兼容IOS*/
  // }
  // main::-webkit-scrollbar {
  //   width: 0;
  // }
  .mescroll {
    position: fixed;
    top: 46px;
    bottom: 1.6rem;
    height: auto;
    background-color: #f2f2f2;

  }

  .lay_footer {
    width: 100vw;
    height: 1.6rem;
    position: fixed;
    bottom: 0;
  }

  .lay_header {
    width: 100vw;
    position: fixed;
    top: 0;
  }

}
</style>

