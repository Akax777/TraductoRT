<script setup>
import SortAlfa from "@/assets/Sort_alfa.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { computed, ref,watchEffect } from "vue";
import { useTranslate } from "@/composable/useTranslate";


const props = defineProps({
    lang: Array,
    lng2: Object
})
const text = ref('');
const textLength = computed(()=>text.value.length);
const selected = ref("")
const textTranslated = ref('')
const isReady =ref(false)
const emit = defineEmits(['textTranslated'])

watchEffect(() => { isReady.value = text.value !== '' && selected.value !== '' && props.lng2.lang2 !== ''; });

const translate = async (q,lang1,lang2)=>{
    const {translatedText,isLoading} =await useTranslate(q,lang1,lang2)
    textTranslated.value= translatedText;
    emit('textTranslated',{textTranslated})
}

const handleSelected = (abv)=>{
    if(selected.value==abv){selected.value=''}else{selected.value=abv;}
}

</script>

<template>
    <div class="card">
        <div class="card-header">
            <button class="button-header">Detect Language</button>
            <button class="button-header" 
                v-for="l in lang" 
                @click="handleSelected(l.abv)"  
                :class="l.abv==selected?'selected':null">
                {{ l.l }}
            </button>
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
            <button :class="isReady?'translate':'translate translate-yet'" @click="isReady?translate(text,selected,props.lng2.lang2):null" >
                <img id="translate-img"  :src="SortAlfa" alt="">Translate
            </button>
        </div>
    </div>
</template>