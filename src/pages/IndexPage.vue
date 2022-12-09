<template lang="pug">
q-page.fit.column.justify-evenly()
  div.empty
  .row.ComicsSection.fit
    .col-12.text-h4 My Comics
    .col-1.column.justify-center(@click='CheckComicPage(-1)') #[q-icon(name='chevron_left' size="md")]
    .col.q-ma-md
      .row.fit
        .col-4.q-pa-sm(v-for="item in [,,,,,,,,,]")
          q-card(square)
            q-img(src='https://placeimg.com/300/300/nature', :ratio='1/1', spinner-color='primary', spinner-size='82px', fit="cover")
    .col-1.column.justify-center(@click='CheckComicPage(-1)')  #[q-icon(name='chevron_right' size="md")]
  div.empty
  .row.SponsorSection.fit
    .col-12.text-h4 Sponsors
    .col-1.column.justify-center(@click='CheckComicPage(-1)') #[q-icon(name='chevron_left' size="md")]
    .col.q-ma-md
      .row.fit
        .col-4.q-pa-sm(v-for="item in [,,,]")
          q-card(square)
            q-img(src='https://placeimg.com/300/300/tech', :ratio='1/1', spinner-color='primary', spinner-size='82px', fit="cover")
    .col-1.column.justify-center(@click='CheckComicPage(-1)')  #[q-icon(name='chevron_right' size="md")]
</template>
<script setup lang="ts">

</script>
