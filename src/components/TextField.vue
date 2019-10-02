<template>
  <p
    href="#"
    class="block mt-2 text-lg leading-tight font-semibold text-gray-600 underline"
  >
    {left}: <span class="font-normal no-underline">{right}</span>
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
