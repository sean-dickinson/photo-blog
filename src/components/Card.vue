<template>
    <div class="card">
        <h1 class="title">{{title}}</h1>
        <p class="card-body">
            {{body}}
        </p>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
@Component
export default class Card extends Vue {
    @Prop() public title!: string;
    @Prop() public body!: string;
}
</script>

<style lang="scss" scoped>
    .card {
        background: #f2eeee;
        color: #0c0a10;
        padding: 1em;
        border-radius: 4px;
        box-shadow: 0 4px 10px 0 rgba(33, 33, 33, 0.15);
    }
</style>