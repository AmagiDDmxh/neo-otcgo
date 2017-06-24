import Vuex from 'vuex'

import Icon from 'plugins/Icon'
import I18n from 'plugins/i18n'

/**
 * Created by Amagi on 6/24/2017.
 */

export default {
  install (Vue, options) {
    Vue.use(Icon)
    Vue.use(I18n, options.locales)
    Vue.use(Vuex)

    Vue.component('icon', Icon)
  }
}