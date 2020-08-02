<template>
  <figure class="image-wrapper">
    <image-placeholder :height="calcHeight" :width="calcWidth" :loading="!isLoaded" />
    <img :height="calcHeight" :class="{hidden: !isLoaded}" ref="img" :data-url="url" />
    <figcaption>{{date | stringifyDate}}</figcaption>
  </figure>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import ImagePlaceholder from "./ImagePlaceholder.vue";
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
      return `${this.source}=h${this.calcHeight}`;
      // return 'no'
    }
  }

  get calcWidth() {
    return (this.width * this.calcHeight) / this.height;
  }
  public isLoaded: boolean = false;
  public el!: HTMLImageElement;
  public calcHeight: number = 400;
  @Prop() private source!: string;
  @Prop() private height!: number;
  @Prop() private width!: number;
  @Prop() private date!: string;
  public mounted() {
    this.el = this.$refs.img as HTMLImageElement;
    if ("IntersectionObserver" in window) {
      this.createObserver();
    } else {
      this.loadImage();
    }
  }

  public loadImage() {
    this.el.addEventListener("load", () => {
      setTimeout(() => (this.isLoaded = true), 100);
    });
    this.el.addEventListener("error", () => console.log("error"));
    this.el.src = this.el.dataset.url as string;
  }

  public handleIntersect(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
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
  margin: 0;
  padding: 1em;
  display:flex;
  flex-direction: column;
  justify-content: end;
}


img {
  opacity: 1;
  transition: opacity 0.3s 0.5s;
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
  top: -52px;
  background: rgba(0,0,0,0.4);
  opacity: 0;
  transition: opacity 0.5s;
}

.hidden {
  opacity: 0;
  margin-top:-400px;
}
</style>
