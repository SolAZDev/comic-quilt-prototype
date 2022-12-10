<template lang="pug">
q-card.my-card
  q-card-section.row
    .col-6.text-center(v-for="genre in Genres") #[q-btn(flat, no-caps, :label='genre.name', :color="isSelected(genre)" @click='selectGenre(genre)' v-close-popup) ]
</template>
<script lang="ts" setup>
import { Genres } from 'src/data/data';
import type { Genre } from 'src/data/models';
import { ref } from 'vue';
const selectedGenre = ref('');
function isSelected(genre:Genre){return selectedGenre.value==genre.value?'primary':'black'}
function selectGenre(genre:Genre){
  selectedGenre.value = genre.value
  //TODO: Link to Pinia Store
  console.log(genre)
}
</script>
