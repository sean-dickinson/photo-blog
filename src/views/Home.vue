<template>
  <div class="home">
    <image-item
      v-for="image in images"
      :key="image.id"
      :source="image.source"
     
      :date="image.creationTime"
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
      { sheetId: '1_d8YsucXx4i9ZwNDea_ivAozU4rru4rV5HU8cpLWwWM', apiKey: 'AIzaSyBirjiTI1pSdhgh_YQZf0JmOXMr6jJQP70' },
      (results: ImageData[]) => {
        this.images = [...results];
      },
      ()=>{}
    );
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
.home{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
  grid-auto-rows: minmax(auto, 350px);
  grid-gap: 5px;
  grid-auto-flow: dense; 
  max-width:1900px;
  margin: 0 auto;
  background:#e7e7e7;

}
@media screen and (max-width: 768px){
  .home{
    width: 90vw;
    grid-auto-rows: auto
  }
}
</style>