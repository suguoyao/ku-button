/**
 * Created by Sugar on 2019-04-30.
 */

import KuButton from "./KuButton.vue"

export default {
  install(Vue, options) {
    // 注册全局组件
    // https://cn.vuejs.org/v2/guide/components-registration.html
    Vue.component("ku-button", KuButton)
  }
}
