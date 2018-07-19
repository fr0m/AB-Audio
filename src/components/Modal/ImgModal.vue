<template>
  <div class="modal is-active">
    <div class="modal-background" @click="hideModal"></div>
    <div class="modal-content">
      <p v-if="src" class="image">
        <img :src="src" alt="">
      </p>
      <slot></slot>
    </div>
    <button @click="hideModal" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
import { modalMixin } from '@/components/public/mixins'

export default {
  name: 'img-modal',
  mixins: [modalMixin],
  props: ['src']
}
</script>

<style>
</style>
