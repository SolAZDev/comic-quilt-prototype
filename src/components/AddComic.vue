<template lang="pug">
q-card
  q-card-section
    .text-center.text-h4 Submit a Comic
    q-input.col(v-model='submisson.name', type='text', label='Comic Name')
    q-input.col.q-mt-none(v-model='submisson.url', type='text', label='Comic URL')
    q-input.col.q-mt-none(v-model='submisson.rss', type='text', label='Comic RSS URL')
  q-card-section
    .text-body1.row Genres (Select 3)
    .row
      .col-lg-2.col-md-3.col-4(v-for="genre in Genres") #[q-btn(flat, no-caps, :label='genre.name', :color="HasGenre(genre)" @click='AddRemoveGenre(genre)') ]
  q-card-section
    q-input(v-model='submisson.syopsis', label="Synopsis" type='textarea', filled autogrow rows="3")
  q-card-section
    q-input(v-model='submisson.patreon', type='text', label='Pareton Link')
    q-input(v-model='submisson.store', type='text', label='Store Link')
    q-input(v-model='submisson.idk', type='text', label='Ko-Fi Link')
    .row
      .col-6 #[q-toggle(v-model='submisson.sfw', label='SFW?')]
      .col-6 #[q-toggle(v-model='submisson.collective', label='Collective?')]

    q-card-actions(horizontal, align='evenly')
      q-btn(flat, label='Submit' v-close-popup)
</template>
<script lang="ts" setup>
import { Genres } from 'src/data/data';
import type { Comic, Genre } from 'src/data/models';
import { ref } from 'vue';
//TODO: RSS Lookup
const submisson = ref({
  name:'', url:'', genre:[], rss:'', syopsis:'', patreon:'', store:'', kofi:'', sfw:true, collective:true
} as Comic)

function HasGenre(genre:Genre){
  return submisson.value.genre.includes(genre.value)?'primary':'black'
}

function AddRemoveGenre(genre:Genre){
  if(submisson.value.genre.length>=3) return;
  if(submisson.value.genre.includes(genre.value))  submisson.value.genre = submisson.value.genre.splice(submisson.value.genre.indexOf(genre.value),1);
  else submisson.value.genre.push(genre.value)
}


</script>

