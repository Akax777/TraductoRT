<script setup>
import logo from "@/assets/logo.svg"
import WritterCard from "./components/WritterCard.vue";
import TranslateCard from "./components/TranslateCard.vue";
import {ref} from 'vue'

const lang= ref([
    {id:1, l:"Spanish", abv:"sp"},
    {id:2, l:"English",abv:"en"},
    {id:3, l:"French",abv:"fr"}])

const toSend=ref({ toTranslate: '', lang1: '' })

</script>

<template>
    <div id="container">
        <div style="text-align: center;">
            <img  :src="logo"/>
        </div>
        <div id="inner-container">
            <WritterCard :lang @response="(msg)=>toSend=msg"/>
            <TranslateCard :lang :toSend />
        </div>
    </div>
</template>

<style scoped>

</style>
