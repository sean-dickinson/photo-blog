<template>
  <figure class="image-wrapper">
    <figcaption>{{date | stringifyDate}}</figcaption>
    <image-placeholder :loading="!isLoaded" />
    <img
      :class="{hidden: !isLoaded}"
      ref="img"
      :data-url="url"
     
    />
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import ImagePlaceholder from './ImagePlaceholder.vue';
@Component({
  components: {
    ImagePlaceholder,
  },
  filters: {
    stringifyDate(datestring: string): string {
      const date = new Date(datestring);
      return date.toLocaleDateString();
    },
  },
})
export default class ImageItem extends Vue {

  get url() {
    if (this.source) {
      return `${this.source}=w${this.calcWidth}`;
      // return 'no'
    }
  }

  get calcHeight() {
    return (this.height * this.calcWidth) / this.width;
  }
  public isLoaded: boolean = false;
  public el!: HTMLImageElement;
  public calcWidth: number = 1000;
  @Prop() private source!: string;
  @Prop() private height!: number;
  @Prop() private width!: number;
  @Prop() private date!: string;
  public mounted() {
    this.el = this.$refs.img as HTMLImageElement;
    if ('IntersectionObserver' in window) {
      this.createObserver();
    } else {
      this.loadImage();
    }
  }

  public loadImage() {
    this.el.addEventListener('load', () => {
      setTimeout(() => (this.isLoaded = true), 100);
    });
    this.el.addEventListener('error', () => console.log('error'));
    this.el.src = this.el.dataset.url as string;
  }

  public handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
  ) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this.loadImage();
        observer.unobserve(this.el);
      }
    });
  }

  public createObserver() {
    const options: IntersectionObserverInit = {
      root: null,
      threshold: 0.25,
    };
    const observer = new IntersectionObserver(this.handleIntersect, options);
    observer.observe(this.el);
  }
}
</script>

<style scoped>

.image-wrapper {
  text-align: center;
  margin: 0;
  padding: 1em;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: auto;
  grid-template-columns: 1fr 1000px 1fr;
  width: 100%;
}

@media screen and (max-width: 1024px){
  .image-wrapper {
    grid-template-columns: 1fr 90vw 1fr;
  }
}


img {
  grid-row: 2;
  grid-column: 2 / 2;
  opacity: 1;
  transition: opacity 0.3s 0.5s;
  max-width:100%;
  height: auto;
}

figcaption {
  grid-row: 1;
  grid-column: 2/2;
  color: #f2eeee;
  font-style: italic;
  margin: 0.5em 0;
  font-size: 1.5rem;
}

.hidden {
  opacity: 0;
}
</style>
