<template>
  <span class="scroller"></span>
</template>

<style scoped>
.scroller {
  width: 24px;
  height: 39px;
  box-sizing: border-box;
  border: 2px solid #fff;
  margin: auto;
  border-radius: 50% 50% 50% 50% / 25% 25% 25% 25%;
}

.scroller::before {
  content: "";
  position: absolute;
  left: 50%;
  top: 10px;
  transform: translateX(-50%);
  width: 2px;
  height: 2px;
  background: #fff;
  border-radius: 5px;
  animation: scrollDown 1.5s linear infinite;
}

@keyframes scrollDown {
  0% {
    top: 7.5px;
    height: 2px;
    opacity: 1;
  }
  33% {
    top: 7.5px;
    height: 20px;
  }
  66% {
    top: 25px;
    height: 5px;
    opacity: 1;
  }
  100% {
    top: 28px;
    height: 2px;
    opacity: 0;
  }
}
</style>