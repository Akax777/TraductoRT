<script setup>
import change from "@/assets/Horizontal_top_left_main.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"

const props = defineProps({
    lang: Array
})
</script>

<template>
    <div class="card"> 
        <div class="card-header">
            <button class="button-header" v-for="l in lang">{{ l }}</button>
            <button class="btn-with-img">
                <img class="img-button" :src="change" alt="">
            </button>
        </div>
        <hr>
        <div class="card-body">
            <p class="text"></p>
        </div>
        <div class="card-footer">
            <button class="btn-with-img">
                <img class="img-button" :src="listen" alt="">
            </button>
            <button class="btn-with-img">
                <img class="img-button" :src="copy" alt="">
            </button>
            </div>
        </div>          
</template>