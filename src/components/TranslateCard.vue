<script setup>
import change from "@/assets/Horizontal_top_left_main.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { useTranslate } from "@/composable/useTranslate";
import { ref,watch } from "vue";

const props = defineProps({
    lang:Array,
    toSend: Object
})

const toTranslate = ref('')

watch(()=>props.toSend,()=>{
    toTranslate.value=props.toSend.toTranslate
    console.log('candela')
})

const {translatedText} = useTranslate(toTranslate.value,'es','en')

const selectedtw = ref("")

const handleSelected = (abv)=>{
    selectedtw.value=abv;
}
</script>

<template>
    <div class="card"> 
        <div class="card-header">
            <button class="button-header" 
            v-for="l in lang"
            @click="handleSelected(l.abv)"  
            :class="l.abv==selectedtw?'selected':null">
            {{ l.l }}
            </button>
            <button class="btn-with-img">
                <img class="img-button" :src="change" alt="">
            </button>
        </div>
        <hr>
        <div class="card-body">
            <p class="text">{{ translatedText }}</p>
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