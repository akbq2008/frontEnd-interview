<template>
  <div>
    <div class="overlay" :class="{ hide: !isShow }" @click="close" @touchmove.prevent></div>
    <div class="dialog_box" :class="{ hide: !isShow }" @touchmove.prevent>
      <div class="videobox">
        <div class="closebtn" @click="close">
          <a href="javascript:void(0)" title="关闭窗口">
            <img src="../../images/close_white.png">
          </a>
        </div>
        <img :src="src" alt="" class="picture" v-if="!isVideo">
        <div v-else>
          <video
            :src="src"
            width=""
            height=""
            class="video"
            controls="controls"
            v-if="isVideoAlive"
          >Your browser does not support the video tag.</video>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isVideo: {
      type: Boolean,
      default: false
    },
    isVideoAlive: {
      type: Boolean,
      default: true
    },
    src: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('closeOverLay');
    }
  }
};
</script>

<style scoped>
.theme-default-content:not(.custom) img {
  max-width: 94vw;
}
.closebtn {
  position: absolute;
  top: 21px;
  right: -17px;
  z-index: 1003;
}
.video {
  max-width: 1200px;
  max-height: 583px;
  width: auto;
  height: auto;
}
.videobox {
  display: block;
  margin: 0px;
  padding-top: 40px;
  max-width: 1200px;
  max-height: 583px;
  text-align: center;
}
.closebtn img {
  width: 32px;
}
.overlay {
  margin: 0px;
  padding: 0px;
  border: none;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  z-index: 1002;
  position: fixed;
  top: 0px;
  left: 0px;
  background: #000;
  opacity: 0.8;
  filter: alpha(opacity=80);
}
.hide {
  display: none;
}
.dialog_box {
  padding: 0px;
  border: none;
  z-index: 1002;
  top: 50%;
  left: 50%;
  position: fixed;
  transform: translate(-50%, -50%);
}
</style>
