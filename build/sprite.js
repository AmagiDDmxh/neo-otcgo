var Sprite = require('svg-sprite-loader/lib/web/sprite')

/**
 * Created by Amagi on 6/24/2017.
 */

// Remove visibility:hidden
Sprite.styles.pop()
Sprite.styles.push('display:none')

var globalSprite = new Sprite()

if (document.body) {
  globalSprite.elem = globalSprite.render(document.body)
} else {
  document.addEventListener('DOMContentLoaded', function () {
    globalSprite.elem = globalSprite.render(document.body)
  }, false)
}

module.exports = globalSprite
