<template>
  <div class="flex w-full h-full justify-center items-center">
    <div
      class="flex w-1/3 border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal"
    >
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56"
          :src="`${require(`../assets/img/file-20190618-118505-aag3r7.jpg`)}`"
          alt="Woman paying for a purchase"
        />
      </div>
      <div class="mt-4 ml-6 w-full text-center flex-col flex justify-between">
        <div
          class="uppercase tracking-wide text-sm text-indigo-600 font-bold text-2xl"
        >
          Профиль
        </div>
        <div>
          <p
            href="#"
            class="block mt-2 text-lg leading-tight font-semibold text-gray-600 underline"
          >
            Профессия: <span class="font-normal no-underline">Разработчик</span>
          </p>
          <p class="mt-2 font-semibold text-gray-600 underline">
            ФИО:
            <span class="font-normal no-underline">Иванов Иван Иваныч</span>
          </p>
          <p class="mt-2 font-semibold text-gray-600 underline">
            E-mail: <span class="font-normal no-underline">test@mail.com</span>
          </p>
          <p class="mt-2 font-semibold text-gray-600 underline">
            Телефон:
            <span class="font-normal no-underline">+7-999-123-45-67</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
