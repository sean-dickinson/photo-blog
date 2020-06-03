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
    @Prop() color!: string;

    public scroll(){
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
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
    bottom: 5rem;
    right: 5rem;
}

button{
    border-radius: 1.5rem;
    width: 3rem;
    height: 3rem;
    background: rgba(255,255,255,0);
    border-style: solid;
}

button:hover {
    cursor: pointer;
}

button:focus {
    outline: none;
}

</style>