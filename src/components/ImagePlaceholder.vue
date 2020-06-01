<template>
  <div :class="{loading}" class="placeholder-item" :style="`height: ${height}px; width: ${width}px`"></div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ImagePlaceholder extends Vue {
  @Prop() private height!: number;
  @Prop() private width!: number;
  @Prop() private loading!: boolean;
}
</script>

<style scoped>
.placeholder-item {
  box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
  border-radius: 4px;
  overflow: hidden;
  grid-row: 1 ;
  grid-column: 2 / 2;
  z-index: 2;
  position: relative;
  background: rgba(255,255,255,0);
  transition: background 0.3s;
  /* background: white; */
}

.placeholder-item:hover {
  background: rgba(0,0,0, 0.2);
}

.loading {
  background: white;
}
.loading::before {
  content: "";
  display: block;
  position: absolute;
  left: -150px;
  top: 0;
  height: 100%;
  width: 150px;
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
</style>