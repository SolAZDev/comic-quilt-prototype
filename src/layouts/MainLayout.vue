<template lang="pug">
q-layout(view='hHh lpR fFf')
  q-header.bg-dark.text-white.row(elevated, bordered)
    q-toolbar.q-gutter-sm.col
      q-btn(flat, round, dense, icon='home' size="lg" @click="router.push('/')")
      q-btn(flat, dense, no-caps, label="Random")
      q-btn(flat, dense, no-caps, label="Genre" @click="GenreDialog=true")
    q-toolbar.col.row.justify-end.q-gutter-x-xs
      q-icon.col-1(name='search' size="md")
      q-input.col-10(v-model='searchQuery', type='text', label='Search' dark)

  q-page-container
    router-view

  q-footer.bg-dark.text-white(reveal, elevated, bordered)
    q-toolbar.justify-evenly
      q-btn(flat, dense, no-caps, label="Submit a Comic" @click="AddComicDialog=true")
      q-btn(flat, dense, no-caps, label="Contact" @click="ContactDialog=true")
      q-btn(flat, dense, no-caps, label="FAQ" @click="FAQDialog=true")

q-dialog(v-model='AddComicDialog')
  AddComic

q-dialog(v-model='ContactDialog')
  Contact

q-dialog(v-model='FAQDialog')
  FAQ

q-dialog(v-model='GenreDialog')
  GenreSelect
</template>
<script lang="ts" setup>
import AddComic from 'src/components/AddComic.vue';
import Contact from 'src/components/Contact.vue';
import FAQ from 'src/components/FAQ.vue';
import GenreSelect from 'src/components/GenreSelect.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const AddComicDialog = ref(false)
const FAQDialog = ref(false)
const ContactDialog = ref(false)
const GenreDialog = ref(false)
</script>
