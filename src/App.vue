<template>
  <div id="app" :class="{'showing-modal': modal}">
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
    },
    hideModal () {
      this.modal = ''
      this.modalData = {}
    }
  }
}
</script>

<style>
@import 'bulma/css/bulma.min.css';

html, body, #app {
  height: 100%;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app.showing-modal {
  overflow: hidden;
}
</style>
