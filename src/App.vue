<script setup>
import logo from "@/assets/logo.svg"
import WritterCard from "./components/WritterCard.vue";
import TranslateCard from "./components/TranslateCard.vue";
import {ref} from 'vue'

const lang= ref(["Spanish","English","French"])
</script>

<template>
    <div id="container">
        <div style="text-align: center;">
            <img  :src="logo"/>
        </div>
        <div id="inner-container">
            <WritterCard :lang/>
            <TranslateCard :lang/>
        </div>
    </div>
</template>

<style scoped>

</style>
