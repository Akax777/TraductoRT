<script setup>
import change from "@/assets/Horizontal_top_left_main.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { ref,watch} from "vue";
import { useLanguage } from "@/stores/useLanguage";

const props = defineProps({
    lang:Array,
})

const lng = useLanguage();

const selectedtw = ref("")

watch(selectedtw, ()=>{
    lng.lang.lang2=selectedtw;
})

const handleSelected = (abv)=>{
    if(selectedtw.value==abv){selectedtw.value=''}else{selectedtw.value=abv;}
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
            <button class="btn-with-img" @click="lng.switchLng">
                <img class="img-button" :src="change" alt="">
            </button>
        </div>
        <hr>
        <div class="card-body">
            <p class="text">{{lng.textTranslated }}</p>
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