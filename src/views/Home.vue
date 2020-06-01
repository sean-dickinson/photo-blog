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
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import ImageItem from "@/components/ImageItem.vue";
import { ImageData } from "@/models/image";
import { Component, Vue } from "vue-property-decorator";

//@ts-ignore
import reader from "g-sheets-api";
@Component({
  components: {
    ImageItem
  },
  name: "Home"
})
export default class Home extends Vue {
  images: ImageData[] = [];
  mounted() {
    reader(
      { sheetId: "1_d8YsucXx4i9ZwNDea_ivAozU4rru4rV5HU8cpLWwWM" },
      (results: ImageData[]) => {
        this.images = [...results];
        console.log(this.images);
      }
    );
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
</style>