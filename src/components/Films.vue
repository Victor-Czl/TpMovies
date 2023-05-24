<script setup>
import { ref } from "vue";
import AffichListFilms from "./AffichListFilms";
import FormTexte from "./FormTexte";

//State pour récupérer la recherche envoyée par l'enfant FormText
const motClef = ref("");

//Fonction qui met à jour le state avec la recherche envoyée par l'enfant
function handler(texte) {
  motClef.value = texte;
}
</script>

<template>
  <h1>Films</h1>
  <!--On place un écouteur sur FormTexte.
  Quand il reçoit une variable il appel la fonction handler
  et passe la varible reçu en paramètre.
  handler() met alors à jour le state qui est envoyé à l'enfant AffichListFilms-->
  <FormTexte @addC="handler"> </FormTexte>
  <AffichListFilms :pcritere="motClef"></AffichListFilms>
</template>

