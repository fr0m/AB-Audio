<template>
  <section class="section">
    <div class="container">
      <header>
        Playing：
        <span>{{ playingAudio }}</span>
      </header>
      <table class="table is-bordered is-striped">
        <thead>
          <tr>
            <th>index</th>
            <th>src</th>
            <th>dist</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(url, index) in data" :key="url.src">
            <td>
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
              <button class="button is-primary" type="button" @click="showImg([{src: url.src_wave, key: 'src'}, {src: url.dst_wave, key: 'dst'}])">对比波形图</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <img-modal v-show="showingImg" @hide="hideImg">
      <p v-for="img in showingImg" class="image is-8by3" :key="img.src">
        <span>{{img.key}}</span>
        <img :src="img.src" alt="">
      </p>
    </img-modal>
  </section>
</template>

<script>
import axios from 'axios'
import ImgModal from './ImgModal'
import data from '@/assets/data.json'

export default {
  name: 'ab-audio',
  components: {ImgModal},
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
    showImg (img) {
      this.showingImg = img
    },
    hideImg () {
      this.showingImg = ''
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
  header {
    margin: 0 auto;
    margin-bottom: 15px;
  }
  span {
    color: #42afe3;
  }
  .image span {
    font-size: 18px;
    font-weight: 700;
  }
  audio {
    height: 54px;
  }
  .is-8by3 {
    padding-top: 37.5%;
  }
  .is-8by3:last-child {
    padding-top: 0;
    padding-bottom: 37.5%;
  }
</style>
