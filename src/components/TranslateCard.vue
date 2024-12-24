<script setup>
import change from "@/assets/Horizontal_top_left_main.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { ref} from "vue";

const props = defineProps({
    lang:Array,
    textTranslated: Object
})

const selectedtw = ref("")

const emit = defineEmits(['response']);

const lng2=ref({ lang2: '' })
const emitEvent=()=>{
    emit('response',{lang2:selectedtw.value})
}

const handleSelected = (abv)=>{
    if(selectedtw.value==abv){selectedtw.value=''}else{selectedtw.value=abv;}
}
</script>

<template>
    <div class="card"> 
        <div class="card-header">
            <button class="button-header" 
            v-for="l in lang"
            @click="handleSelected(l.abv),emitEvent()"  
            :class="l.abv==selectedtw?'selected':null">
            {{ l.l }}
            </button>
            <button class="btn-with-img">
                <img class="img-button" :src="change" alt="">
            </button>
        </div>
        <hr>
        <div class="card-body">
            <p class="text">{{props.textTranslated.textTranslated }}</p>
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