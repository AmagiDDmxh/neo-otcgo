/**
 * Created by Amagi on 6/24/2017.
 */

const getters = {
  countPlural: ({ count }) => Math.min(count, 2),
  count: ({ count }) => count
}

export default getters
