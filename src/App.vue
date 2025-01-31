<script setup>
import logo from "@/assets/logo.svg"
import WritterCard from "./components/WritterCard.vue";
import TranslateCard from "./components/TranslateCard.vue";
import {ref} from 'vue'

const lang= ref([
    {id:1, l:"Spanish", abv:"es"},
    {id:2, l:"English",abv:"en"},
    {id:3, l:"French",abv:"fr"}])

</script>

<template>
    <div id="container">
        <div id="container-top">
            <img  :src="logo"/>
        </div>
        <div id="inner-container">
            <WritterCard :lang />
            <TranslateCard :lang/>
        </div>
    </div>
</template>

<style scoped>

</style>
