<script setup>
import logo from "@/assets/logo.svg"
import WritterCard from "./components/WritterCard.vue";
import TranslateCard from "./components/TranslateCard.vue";
import {ref} from 'vue'

const lang= ref([
    {id:1, l:"Spanish", abv:"es"},
    {id:2, l:"English",abv:"en"},
    {id:3, l:"French",abv:"fr"}])

const lng2=ref({ lang2: '' })
const textTranslated= ref({})

</script>

<template>
    <div id="container">
        <div style="text-align: center;">
            <img  :src="logo"/>
        </div>
        <div id="inner-container">
            <WritterCard :lang :lng2 @text-translated="(t)=>textTranslated=t"/>
            <TranslateCard :lang  @response="(msg)=>lng2=msg" :text-translated/>
        </div>
    </div>
</template>

<style scoped>

</style>
