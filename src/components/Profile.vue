<template>
  <div
    class="flex w-2/5 border-r border-b border-l border-gray-400 border-t border-gray-400 bg-white rounded-b rounded-b-none rounded-r p-4 leading-normal"
  >
    <div class="flex-shrink-0">
      <img
        class="rounded-lg w-56"
        :src="`${require(`../assets/img/file-20190618-118505-aag3r7.jpg`)}`"
        alt="Woman paying for a purchase"
      />
    </div>
    <div class="ml-6 mt-4 w-full text-center flex-col flex justify-between">
      <div
        class="uppercase tracking-wide text-sm text-indigo-600 font-bold text-2xl"
      >
        Профиль
      </div>
      <div class="flex flex-col justify-between">
        <TextField left="Профессия" :right="fetchData.job" />
        <TextField left="ФИО" :right="fetchData.fullName" />
        <TextField left="E-mail" :right="fetchData.email" />
        <TextField left="Телефон" :right="fetchData.tel" />
      </div>
    </div>
  </div>
</template>
<script>
import TextField from "./TextField";

export default {
  props: {
    fetchData: {
      type: Object
    }
  },
  components: {
    TextField
  }
};
</script>
