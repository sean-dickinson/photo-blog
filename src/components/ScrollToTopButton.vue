<template>
    <div class="scrollToTopButton">
        <button @click="scroll" :style="`border-color:${color}`">
            <i class="arrow up" :style="`border-color:${color}`"></i>
        </button>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class ScrollToTopButton extends Vue {
    @Prop() public color!: string;

    public scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }
}
</script>

<style lang="scss" scoped>
.arrow {
  border-style: solid;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;
  height: 1rem;
  width: 1rem;
  margin-top: 0.5rem;
}

.up {
  transform: rotate(-135deg);
  -webkit-transform: rotate(-135deg);
}

.scrollToTopButton {
    position: fixed;
    bottom: 2.5rem;
    right: 2.5rem;
    z-index: 2;
}


button{
    border-radius: 1.5rem;
    width: 3rem;
    height: 3rem;
    background: rgba(34, 29, 48, 0);
    border-style: solid;
    transition: background 0.3s;
}

button:hover {
    cursor: pointer;
    background:  rgba(238, 238, 238, 0.75);
}

button:focus {
    outline: none;
}

</style>