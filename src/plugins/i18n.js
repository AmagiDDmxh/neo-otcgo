import VueI18n from 'vue-i18n'

/**
 * Created by Amagi on 6/24/2017.
 */

export default {
  install(Vue, options) {
    const locales = options

    Vue.use(VueI18n)

    Vue.config.fallbackLang = locales[0]
    Vue.config.lang = options.indexOf(navigator.language > -1)
        ? navigator.language
        : Vue.config.fallbackLang

    options.forEach(lang => Vue.locale(lang, require(`locales/${lang}.yml`)))

    Vue.mixin({
      computed: {
        lang: {
          get () {
            return Vue.config.lang
          },
          set (lang) {
            Vue.config.lang = lang
          }
        },
        locales: {
          get() {
            return locales
          }
        }
      },
      methods: {
        setLang (lang) {
          this.lang = lang
        },
        isLang (lang) {
          return this.lang === lang
        }
      }
    })
  }
}