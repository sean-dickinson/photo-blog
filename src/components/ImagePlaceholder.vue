<template>
  <div :class="{ loading }" class="placeholder-item"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {
  @Prop() private loading!: boolean;

  // get style() {
  //   return {
  //     position: this.loading ? 'relative' : 'absolute',
  //   };
  // }
}
</script>

<style scoped>
.placeholder-item {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
  overflow: hidden;
  z-index: 0;
  position: absolute;
  background: rgba(255, 255, 255, 0);
  transition: background 0.3s, z-index 0s 0.3s;
  width: 100%; 
  height: 100%;
  /* background: white; */
}

.loading {
  background: white;
  z-index: 2;
}
.loading::before {
  content: "";
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to right,
    transparent 0%,
    #e8e8e8 50%,
    transparent 100%
  );
  animation: load 1s cubic-bezier(0.4, 0, 0.2, 1) 0s infinite;
}
@keyframes load {
  from {
    left: -150px;
  }
  to {
    left: 100%;
  }
}

@media screen and (max-width: 600px) {
  .placeholder-item:not(.loading) {
    max-width: 90vw;
    height: auto !important;
  }
}
</style>