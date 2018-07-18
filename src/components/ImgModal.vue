<template>
  <div class="modal is-active">
    <div class="modal-background" @click="hide"></div>
    <div class="modal-content">
      <p v-if="src" class="image">
        <img :src="src" alt="">
      </p>
      <slot></slot>
    </div>
    <button @click="hide" class="modal-close is-large" aria-label="close"></button>
  </div>
</template>

<script>
export default {
  name: 'img-modal',
  props: ['src'],
  methods: {
    hide () {
      this.$emit('hide')
    }
  }
}
</script>

<style>
</style>
