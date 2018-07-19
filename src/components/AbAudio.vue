<template>
  <section class="section">
    <div class="container">
      <header>
        正在播放：
        <span>{{ playingAudio }}</span>
      </header>
      <table class="table is-bordered is-striped">
        <thead>
          <tr>
            <th>序号</th>
            <th>处理前</th>
            <th>处理后</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(url, index) in data" :key="url.src">
            <td class="has-text-centered">
              {{index}}
            </td>
            <td>
              <lazy-component>
                <audio class="audio" @play="solo(url.src)" :src="url.src" v-playing="url.src === playingAudio" preload controls></audio>
              </lazy-component>
            </td>
            <td>
              <lazy-component>
                <audio class="audio" @play="solo(url.dst)" :src="url.dst" v-playing="url.dst === playingAudio" preload controls></audio>
              </lazy-component>
            </td>
            <td>
              <button class="button is-primary" type="button" @click="showWaveModal(url)">对比波形图</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import data from '@/assets/data.json'
import { modalMixin } from './public/mixins'

export default {
  name: 'ab-audio',
  mixins: [modalMixin],
  data () {
    return {
      data,
      playingAudio: '',
      showingImg: ''
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    solo (url) {
      this.playingAudio = url
    },
    getData () {
      const url = '//qt-zhibo.oss-cn-hangzhou.aliyuncs.com/files/data.json'
      axios.get(url).then((res) => {
        this.data = JSON.parse(res)
      })
    },
    showWaveModal (data) {
      this.showModal({
        data,
        modal: 'wave-modal'
      })
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
  table {
    margin: 0 auto;
  }
  td {
    vertical-align: middle;
  }
  th {
    text-align: center;
  }
  header {
    margin: 0 auto;
    margin-bottom: 15px;
  }
  span {
    color: #42afe3;
  }
  audio {
    height: 54px;
  }
</style>
