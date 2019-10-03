<template>
  <p
    href="#"
    class="block mt-4 text-lg leading-tight font-semibold text-gray-600"
  >
    {{ left }}: <span class="font-normal">{{ right }}</span>
  </p>
</template>
<script>
export default {
  props: {
    left: {
      type: String
    },
    right: {
      type: String
    }
  }
};
</script>
