<template>
  <div class="home">
    <image-item
      v-for="image in images"
      :key="image.id"
      :source="image.source"
      :width="image.width"
      :height="image.height"
      :date="image.creationtime"
    />
    <scroll-to-top-button color="#9499c4"></scroll-to-top-button>
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ImageItem from '@/components/ImageItem.vue';
import ScrollToTopButton from '@/components/ScrollToTopButton.vue';
import { ImageData } from '@/models/image';
import { Component, Vue } from 'vue-property-decorator';

// @ts-ignore
import reader from 'g-sheets-api';
@Component({
  components: {
    ImageItem,
    ScrollToTopButton,
  },
  name: 'Home',
})
export default class Home extends Vue {
  public images: ImageData[] = [];
  public mounted() {
    reader(
      { sheetId: '1_d8YsucXx4i9ZwNDea_ivAozU4rru4rV5HU8cpLWwWM' },
      (results: ImageData[]) => {
        this.images = [...results];
      },
    );
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>