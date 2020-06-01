<template>
  <div class="about">
    <section class="container">
      <card
        v-for="card of cards"
        :key="card"
        :title="card.title"
        :body="card.body"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '../components/Card.vue';
import { CardData } from '../models/card';
@Component({
  components: {
    Card,
  },
})
export default class Home extends Vue {
  public cards: CardData[] = [
    {
      title: 'What is this site?',
      body: `This is a simple photo blog I have made to encourage myself to take more
        photos, and to try to think more creatively about what photos I'm taking.
        It also is a technical experiment related to web development. One of my
        approaches to web development is to try to see how much I can do without
        spending any money. This site is hosted on a free hosting platform and the
        images are actually all hosted in a publically acessible google photos
        album. There's some techinical mumbojumbo happenning behind the scenes to
        make that work, considering Google photos was specifically built to avoid
        people from using their service as a hosting platform.`,
    },
    {
      title: 'Who are you?',
      body: `My name is Sean Dickinson (see the website url). My full time job is a teacher and technology coordinator at a small private school, but I enjoy photography and creating web applications in my free time.`,
    },
  ];
}
</script>

<style lang="scss" scoped>
.container {

  > * {
    max-width: 60vw;
    margin: 5rem auto;
  }
}
</style>
