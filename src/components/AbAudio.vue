<template>
  <div>
    <header>
      Playing：
      <span>{{ playingAudio }}</span>
    </header>
    <table border>
      <thead>
        <tr>
          <th>index</th>
          <th>src</th>
          <th>dist</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(url, index) in data" :key="url.src">
          <td>
            {{index}}
          </td>
          <td>
            <audio @play="solo(url.src)" :src="url.src" v-playing="url.src === playingAudio" preload controls></audio>
          </td>
          <td>
            <audio @play="solo(url.dst)" :src="url.dst" v-playing="url.dst === playingAudio" preload controls></audio>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import data from '@/assets/data'
export default {
  name: 'audio-test',
  data () {
    return {
      data,
      playingAudio: ''
    }
  },
  methods: {
    solo (url) {
      this.playingAudio = url
    }
  },
  directives: {
    'playing': {
      update (el, { value, oldValue }) {
        if (el && value !== oldValue) {
          value ? el.play() : el.pause()
        }
      }
    }
  }
}
</script>

<style scoped>
  td {
    padding: 8px;
  }
  header {
    text-align: left;
    margin-bottom: 15px;
  }
  span {
    color: #42afe3;
  }
</style>
