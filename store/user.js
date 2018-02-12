export const state = () => ({
  id: 22
});

export const getters = {
  getId: state => {
    return state.id;
  }
};

export const mutations = {
  setUserId(state, id) {
    state.id = id;
  }
};
