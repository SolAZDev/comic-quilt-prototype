<template lang="pug">
q-page.fit.column.justify-evenly()
  div.empty
  .row.ComicsSection.fit
    .col-12.text-h4 My Comics
    .col-1.column.justify-center(@click='CheckComicPage(-1)') #[q-icon(name='chevron_left' size="md")]
    .col.q-ma-md
      .row.fit
        .col-4.col-md-2.q-pa-sm(v-for="item in [,,,,,,,,,]" @click="comicDetailDialog=true")
          q-card(square)
            q-img(src='https://placeimg.com/300/300/nature', :ratio='1/1', spinner-color='primary', spinner-size='82px', fit="cover")
    .col-1.column.justify-center(@click='CheckComicPage(-1)')  #[q-icon(name='chevron_right' size="md")]
  div.empty
  .row.SponsorSection.fit
    .col-12.text-h4 Sponsors
    .col-1.column.justify-center(@click='CheckComicPage(-1)') #[q-icon(name='chevron_left' size="md")]
    .col.q-ma-md
      .row.fit
        .col-4.col-md-2.q-pa-sm(v-for="item in [,,,]" @click="comicDetailDialog=true")
          q-card(square)
            q-img(src='https://placeimg.com/200/200/tech', :ratio='1/1', spinner-color='primary', spinner-size='82px', fit="cover")
    .col-1.column.justify-center(@click='CheckComicPage(-1)')  #[q-icon(name='chevron_right' size="md")]

q-dialog(v-model='comicDetailDialog')
  ComicDetails
</template>
<script setup lang="ts">
import ComicDetails from 'src/components/ComicDetails.vue';
import { ref } from 'vue';

const pagination=ref(0)
const comicDetailDialog = ref(false)

</script>
