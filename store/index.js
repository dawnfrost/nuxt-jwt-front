export const state = () => ({
  counter: 0,
  dataSourceId: ''
});

export const getters = {
  getCounter: state => {
    return state.counter;
  },
  getDataSourceId: state => {
    return state.dataSourceId;
  }
};

export const mutations = {
  increment(state, count) {
    state.counter += count;
  },
  setDataSourceId(state, id) {
    state.dataSourceId = id;
  }
};

export const actions = {
  // async nuxtServerInit({commit}, {app}) {
  //     const data = await app.$axios.$get('http://localhost:8090/pws/test/1');
  //     // console.log(data.data);
  //     // console.log(data.data);
  //     commit('setDataSourceId', data.data);
  // }
};
