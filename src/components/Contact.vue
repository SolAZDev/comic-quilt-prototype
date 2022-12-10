<template lang="pug">
q-card.my-card
  q-card-section.text-h4 Contact
  q-card-section
    .text-body1 Purpose for Contract?
    .column.justify-evenly
      q-toggle(v-model='message.promote', label='I want to promote my comic')
      q-toggle(v-model='message.errorFix', label='Fix an error in my comic')
      q-toggle(v-model='message.collective', label='Submit new Collective')
      q-toggle(v-model='message.other', label='Other')
  q-card-section
    q-input(v-model='message.name', type='text', label='Name')
    q-input(v-model='message.eamil', type='email', label='Email')
    q-input(v-model='message.link', type='text', label='Link (optional)')
  q-card-section
    q-input(v-model='message.msg', type='textarea', label='Message' filled autogrow)
  q-card-actions(horizontal, aign='center')
    q-btn(flat, label='Send!' v-close-popup size="xl")
</template>
<script lang="ts" setup>
import { ref } from 'vue';


const message=ref({
  promote:false, errorFix: false, collective:false, other:false, name:'', email:'', link:'',msg:''
})
</script>
