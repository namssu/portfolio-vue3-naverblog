import { createStore } from 'vuex'
import otherpost from './data/otherpost'

const store = createStore({
  state(){
    return {
      otherpost: otherpost,
    }
  },
  mutations: {
    likeotherpost(state, i) {
      if(state.otherpost[i].liked == 0) {
        state.otherpost[i].likenum++;
        state.otherpost[i].liked = 1;
      }
      else {
        state.otherpost[i].likenum--;
        state.otherpost[i].liked = 0;
      }
    }
  }
})

export default store