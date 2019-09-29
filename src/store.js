import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./vuex/actions";
import * as mutations from "./vuex/mutations";
import state from "./vuex/state";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  strict: process.env.NODE_ENV !== "production"
});
