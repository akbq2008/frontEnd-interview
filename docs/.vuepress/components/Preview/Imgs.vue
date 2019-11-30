<template>
  <div>
    <img :src="src" @click="isShow=true">
    <Preview-Base :src="src" :isShow="isShow" @closeOverLay="closeOverLay"/>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    closeOverLay() {
      this.isShow = false;
    }
  }
};
</script>