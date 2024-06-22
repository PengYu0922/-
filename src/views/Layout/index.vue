<script setup>
import musicHeaderFixed from './components/musicHeaderFixed.vue';
import musicHeader from './components/musicHeader.vue';
</script>

<template>
  <musicHeaderFixed />
  <musicHeader />
  <RouterView />
  <!-- <musicContent /> -->
</template>