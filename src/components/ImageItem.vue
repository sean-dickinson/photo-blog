<template>
  <figure class="image-wrapper">
    <image-placeholder :loading="!isLoaded" />
    <img :class="{ hidden: !isLoaded }" ref="img" :data-url="url" />
    <figcaption>{{ date | stringifyDate }}</figcaption>
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
      return `${this.source}`;
      // return 'no'
    }
  }

  // get calcWidth() {
  //   return (this.width * this.calcHeight) / this.height;
  // }
  public isLoaded: boolean = false;
  public el!: HTMLImageElement;
  public calcHeight: number = 400;
  @Prop() private source!: string;
  // @Prop() private height!: number;
  // @Prop() private width!: number;
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
figure {
  margin: 0;
  position: relative;
}

.image-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

img {
  opacity: 1;
  transition: opacity 0.3s;
  object-fit: cover;
  object-position: center center;
  height:100%;
  width:100%;
}

.image-wrapper:hover figcaption {
  opacity: 1;
}

figcaption {
  color: #f2eeee;
  font-style: italic;
  padding: 0.5em 0;
  font-size: 1.5rem;
  position: relative;
  margin-top: -52px;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  transition: opacity 0.5s;
}

.hidden {
  opacity: 0;
  /* margin-top: -400px; */
}

@media screen and (max-width: 600px) {
  img {
    height: auto;
    max-width: 90vw;
  }
}
</style>
