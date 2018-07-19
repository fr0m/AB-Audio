<template>
  <img-modal>
    <p v-for="img in imgs" class="image" :key="img.src">
      <span>{{img.key}}</span>
      <img :src="img.src" alt="">
    </p>
  </img-modal>
</template>

<script>
import ImgModal from './ImgModal'
export default {
  name: 'wave-modal',
  props: ['payload'],
  components: {ImgModal},
  computed: {
    imgs () {
      return [{
        src: this.payload.src_wave,
        key: '处理前'
      }, {
        src: this.payload.dst_wave,
        key: '处理后'
      }]
    }
  }
}
</script>

<style>
  .image span {
    font-size: 18px;
    font-weight: 700;
    color: #42afe3;
  }
</style>
