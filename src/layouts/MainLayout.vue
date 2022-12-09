<template lang="pug">
q-layout(view='hHh lpR fFf')
  q-header.bg-dark.text-white.row(elevated, bordered)
    q-toolbar.q-gutter-sm.col
      q-btn(flat, round, dense, icon='home' size="lg")
      q-btn(flat, dense, no-caps, label="Random")
      q-btn(flat, dense, no-caps, label="Genre")
    q-toolbar.col.row.justify-end.q-gutter-x-xs
      q-icon.col-1(name='search' size="md")
      q-input.col-10(v-model='searchQuery', type='text', label='Search' dark)

  q-page-container
    router-view

  q-footer.bg-dark.text-white(reveal, elevated, bordered)
    q-toolbar.justify-around
      q-btn(flat, dense, no-caps, label="Submit a Comic")
      q-btn(flat, dense, no-caps, label="Contact")
      q-btn(flat, dense, no-caps, label="FAQ")
</template>
<script lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
</script>
