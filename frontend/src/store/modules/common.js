//state
const state = {
  //Just for demo
  test: {},
};

//getters
const getters = {
  getTest: (state) => state.test,
};

//Actions
const actions = {
  async fetchSomeData(context) {
    //DO the api call to get the data
    let dummyData = null;

    //using context to commit the change
    context.commit("commitTest", dummyData);
  },
};

//Mutation to change the state
const mutations = {
  commitTest(state, newVal) {
    state.test = newVal;
  },
};

//exporting all
export default {
  state,
  getters,
  actions,
  mutations,
};
