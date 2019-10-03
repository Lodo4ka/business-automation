<template>
  <div class="flex w-full h-full justify-center items-center">
    <Profile :fetchData="fetchData" />
  </div>
</template>
<script>
import Loading from "./Loading";
import ErrorPage from "./ErrorPage";
import store from "../store";

const Profile = () => ({
  component: new Promise(function(resolve) {
    fetch("http://localhost:3001/")
      .then(result => result.json())
      .then(result => {
        if (result) {
          store.dispatch("SET_USER_DATA", result);
          resolve(import("./Profile.vue"));
        }
      })
      .catch(err => {
        console.error(err);
      });
  }),
  loading: Loading,
  error: ErrorPage,
  delay: 500,
  timeout: 4000
});

export default {
  data() {
    return {
      fetchData: {}
    };
  },
  created() {
    this.$store.subscribe((mutation, state) => {
      switch (mutation.type) {
        case "SET_USER_DATA": {
          this.fetchData = state.user;
          break;
        }
        default:
          break;
      }
    });
  },
  components: {
    Profile
  }
};
</script>
