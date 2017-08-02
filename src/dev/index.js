/**
 * Created by dcpai on 2017/8/2.
 */
import 'resolution';
import Vue from 'vue'
import Toast from '../components/toast.js'
Vue.$toast = Vue.prototype.$toast = Toast;

module.exports = {
  Toast
};
