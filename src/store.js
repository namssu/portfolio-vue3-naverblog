import { createStore } from 'vuex'
import otherpost from './data/otherpost.js'
import mypost from './data/mypost.js'

const store = createStore({
  state(){
    return {
      otherpost: otherpost,
      mypost: mypost,
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
    },
    likemypost(state, i) {
      if(state.mypost[i].liked == 0) {
        state.mypost[i].likenum++;
        state.mypost[i].liked = 1;
      }
      else {
        state.mypost[i].likenum--;
        state.mypost[i].liked = 0;
      }
    }
  }
})

export default store