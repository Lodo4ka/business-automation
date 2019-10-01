<template>
  <div class="flex w-full h-full justify-center items-center">
    <div
      class="flex w-1/2 border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 leading-normal"
    >
      <div class="md:flex-shrink-0">
        <img
          class="rounded-lg md:w-56"
          :src="
            `${require(`../assets/img/photo-1556740738-b6a63e27c4df.jpeg`)}`
          "
          alt="Woman paying for a purchase"
        />
      </div>
      <div class="mt-4 md:mt-0 md:ml-6">
        <div class="uppercase tracking-wide text-sm text-indigo-600 font-bold">
          Профиль
        </div>
        <a
          href="#"
          class="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline"
          >Разработчик</a
        >
        <p class="mt-2 text-gray-600">
          Getting a new business off the ground is a lot of hard work. Here are
          five ideas you can use to find your first customers.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
