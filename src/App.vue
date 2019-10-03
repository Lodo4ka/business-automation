<template>
  <div id="app">
    <transition>
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss">
.spinner {
  position: relative;
  color: black;
  pointer-events: none;
}

.spinner::after {
  content: "";
  position: absolute !important;
  top: calc(50% - (1em / 2));
  left: calc(50% - (1em / 2));
  display: block;
  width: 10rem;
  height: 10rem;
  border: 2px solid currentColor;
  border-radius: 9999px;
  border-right-color: transparent;
  border-top-color: transparent;
  animation: spinAround 500ms infinite linear;
}

@keyframes spinAround {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
