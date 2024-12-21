<script setup>
import SortAlfa from "@/assets/Sort_alfa.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { computed, ref } from "vue";

const props = defineProps({
    lang: Array
})
const text = ref('')
const textLength = computed(()=>text.value.length)
</script>

<template>
    <div class="card">
        <div class="card-header">
            <button class="button-header">Detect Language</button>
            <button class="button-header" v-for="l in lang">{{ l }}</button>
        </div>
        <hr>
        <div class="card-body">
            <textarea  maxlength="500" v-model="text" class="text"/>
            <p id="word-counter">{{ textLength }}/500</p>
        </div>
        <div class="card-footer">
            <button class="btn-with-img">
                <img class="img-button" :src="listen" alt="">
            </button>
            <button class="btn-with-img">
                <img class="img-button" :src="copy" alt="">
            </button>
            <button id="translate">
                <img id="translate-img"  :src="SortAlfa" alt="">Translate
            </button>
        </div>
    </div>
</template>