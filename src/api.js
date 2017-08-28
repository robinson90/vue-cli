import Vue from 'Vue'
import axios from 'axios'
Vue.prototype.$http = axios
// import qs from 'qs'
const url = 'https://api.douban.com/v2'
export default {
  url: url
}
