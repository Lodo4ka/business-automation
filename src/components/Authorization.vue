<template>
  <div class="flex w-full h-full justify-center items-center">
    <form @submit.prevent="loginForm" class="w-full max-w-sm">
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-full-name"
          >
            Логин
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name"
            type="text"
            value="Ваш Логин"
            v-model="login"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3">
          <label
            class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
            for="inline-username"
          >
            Пароль
          </label>
        </div>
        <div class="md:w-2/3">
          <input
            class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full
            py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-username"
            type="password"
            placeholder="******************"
            v-model="password"
            autocomplete="on"
          />
        </div>
      </div>
      <div class="md:flex md:items-center mb-6">
        <div class="md:w-1/3"></div>
        <label class="md:w-2/3 block text-gray-500 font-bold">
          <input
            v-model="remember"
            class="mr-2 leading-tight"
            type="checkbox"
          />
          <span class="text-sm">
            Запомнить меня на сайте
          </span>
        </label>
      </div>
      <div class="md:flex md:items-center">
        <div class="md:w-1/3"></div>
        <div class="md:w-2/3">
          <button
            class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline
            focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit"
          >
            Войти
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      remember: false
    };
  },
  mounted() {
    this.$store.subscribe(mutation => {
      switch (mutation.type) {
        case "LOGIN_WITH_REMEMBER": {
          this.routeToProfile();
          break;
        }
        case "LOGIN_WITHOUT_REMEMBER": {
          this.routeToProfile();
          break;
        }
        default:
          break;
      }
    });
  },
  methods: {
    loginForm() {
      if (this.remember) {
        this.$store.dispatch("LOGIN_WITH_REMEMBER", {
          login: this.login,
          password: this.password
        });
      } else {
        this.$store.dispatch("LOGIN_WITHOUT_REMEMBER", {
          login: this.login,
          password: this.password
        });
      }
    },
    routeToProfile() {
      this.$router.push({
        name: "main",
        params: {
          login: this.login,
          password: this.password
        }
      });
    }
  }
};
</script>
