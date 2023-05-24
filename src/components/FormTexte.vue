<script setup>
import { ref } from "vue";

//State de la recherche effectuée
const recherche = ref("");
</script>

<template>
  <!--formulaire de recherche :
  On met une variable v-modele
  et un @submit qui envoie v-model au parent-->
  <form @submit.prevent="$emit('addC', recherche)">
    <input type="text" v-model="recherche" placeholder="recherche" />
    <input type="submit" value="valider" />
  </form>
</template>