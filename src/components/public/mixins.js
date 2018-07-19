import bus from '@/bus'
import {
  SHOW_MODAL,
  HIDE_MODAL
} from '@/constants/events'

export const modalMixin = {
  methods: {
    showModal (payload) {
      bus.$emit(SHOW_MODAL, payload)
    },
    hideModal () {
      bus.$emit(HIDE_MODAL)
    }
  }
}
