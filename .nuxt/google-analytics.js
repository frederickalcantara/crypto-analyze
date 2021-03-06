import Vue from 'vue'
import VueAnalytics from 'vue-analytics'

export default async function ({ app: { router } }) {
  const moduleOptions = {"id":"UA-128576342-1"}
  Vue.use(VueAnalytics, Object.assign({ router }, moduleOptions))
}
