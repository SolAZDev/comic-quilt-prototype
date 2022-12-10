<template lang="pug">
q-card.my-card
  q-card-section.row
    .col-6.q-pa-sm
      q-img(src='https://placeimg.com/300/300/nature', :ratio='1/1', spinner-color='primary', spinner-size='82px')
    .col-6
      u.text-body1.title {{comic.name}}
      .row.q-mt-md
        .col-6.column
          .text-body1 Genres
          ul.noDeco
            li.text-body2(v-for="genre in genres" v-if="isMDorHigher") {{genre.name}}
            li.text-body2(v-for="genre in genres" v-if="!isMDorHigher") {{genre.shortName}}
        .col-6.column.justify-evenly.text-body1
          .text-center.text-red(v-if="!comic.sfw") NSFW
          .text-center(v-if="comic.sfw") SFW
          .text-center Collective
          q-img(src='https://placeimg.com/100/100/nature', :ratio='1/1', spinner-color='primary', spinner-size='82px' rounded)
  q-card-section
    .text-body1 Plot:
    p.text-justify {{comic.syopsis}}
  q-card-section
    q-card-actions(horizontal, align='around')
      q-btn(color="primary", size="lg") Add toyour Quilt
      q-btn(color="primary", no-caps size="lg" @click="openURL(comic.url)") Read
  q-card-section
    q-card-actions(horizontal, align='evenly')
      q-btn(round, size="lg", icon="fa-brands fa-patreon")
      q-btn(round, size="lg", icon="shopping_bag")
      q-btn(round, size="lg", icon="coffee")
</template>
<script lang="ts" setup>
import type { Comic, Genre } from 'src/data/models';
import {Genres} from 'src/data/data'
import { computed, ref } from 'vue';
import { useQuasar, openURL } from 'quasar';

const quasar = useQuasar();


const comic = ref({
  name: "Long Ass Title, First of its name, Heir to its own throne",
  genre:['adventure', 'sliceoflife', 'scifantasy'],
  kofi:"???",
  patreon:"https://patreon.com/",
  rss:"",
  sfw: true,
  collective:false,
  store: "https://dlnstore.com",
  url: "https://tuxdigital.com",
  syopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
} as Comic)

const genres = computed(()=>{
  const genres=new Array<Genre>();
  Genres.forEach(gen=>{
    if(comic.value.genre.includes(gen.value)) genres.push(gen);
  })
  return genres;
})

const isMDorHigher = computed(()=>{
  if(quasar.screen.lt.md) return false;
  if(quasar.screen.gt.sm) return true;
})
</script>
<style lang="sass">
.noDeco
  padding-left: 0
  li
    list-style: none


.title
  text-overflow: ellipsis
  // overflow: hidden
  // white-space: nowrap
</style>
