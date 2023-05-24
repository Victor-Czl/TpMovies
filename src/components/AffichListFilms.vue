<script setup>
//importer les librairies vue néscessaire
import { defineProps, reactive, watch } from "vue";

import Film from "../Film";

//Props qui recoie la recherche transmises par le parent
const props = defineProps(["pcritere"]);
//clef d'accès à l'API
const apiKey = "24714091346b3079a0414fe486ba3858";
//url + clef
const url =
  "https://api.themoviedb.org/3/search/movie?api_key=" +
  apiKey +
  "&language=fr-FR&page=1&query=";
//initialisation du state
const listeFilms = reactive([]);

//req AJAX pour récupérer les résultats de la recherche
function searchFilm() {
  const fetchOptions = { method: "GET" };
  //On concatène l'url avec la props (recherche transmise par le parent)
  fetch(url + props.pcritere, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      //On vide la liste
      listeFilms.splice(0, listeFilms.length);
      //On alimente le state avec les résultats
      dataJSON.results.forEach((film) =>
        listeFilms.push(new Film(film.id, film.title, film.poster_path))
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
//searchFilm();
//On place un observateur sur la fonction searchFilm
watch(props, (newcritere) => {
  searchFilm();
});
</script>

<template>
  <h3>Listes des films</h3>
  <ul>
    <!--On boucle sue la listes pour afficher les titres et les affiches-->
    <li v-for="film in listeFilms" :key="film.id">
      <!--On affiche le tire-->
      {{ film.titre }}
      <!--On affiche l'affiche-->
      <img
        :src="`https://image.tmdb.org/t/p/w500/${film.image}`"
        alt="affiche du filme"
        style="height: 70px"
      />
    </li>
  </ul>
</template>