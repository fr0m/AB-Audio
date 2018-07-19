<template>
  <div id="app">
    <router-view/>
    <component v-if="modal" :is="modal" :payload="modalData"></component>
  </div>
</template>

<script>
import bus from '@/bus'
import {
  SHOW_MODAL,
  HIDE_MODAL
} from '@/constants/events'
import WaveModal from '@/components/Modal/WaveModal'

export default {
  name: 'App',
  components: {
    WaveModal
  },
  data () {
    return {
      modal: '',
      modalData: {}
    }
  },
  created () {
    bus.$on(SHOW_MODAL, this.showModal)
    bus.$on(HIDE_MODAL, this.hideModal)
  },
  beforeDestroy () {
    bus.$off(SHOW_MODAL, this.showModal)
    bus.$off(HIDE_MODAL, this.hideModal)
  },
  methods: {
    showModal ({modal, data}) {
      this.modal = modal
      this.modalData = data
      document.body.className = 'modal-open'
    },
    hideModal () {
      this.modal = ''
      this.modalData = {}
      document.body.className = ''
    }
  }
}
</script>

<style>
@import 'bulma/css/bulma.min.css';

html {
  overflow: visible;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body.modal-open {
  overflow: hidden;
}
</style>
