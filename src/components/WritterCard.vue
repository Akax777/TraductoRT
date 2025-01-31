<script setup>
import SortAlfa from "@/assets/Sort_alfa.svg"
import copy from "@/assets/Copy.svg"
import listen from "@/assets/sound_max_fill.svg"
import { computed, ref,watchEffect, watch } from "vue";
import { useTranslate } from "@/composable/useTranslate";
import { useLanguage } from "@/stores/useLanguage";


const props = defineProps({
    lang: Array
})
const lng = useLanguage();

const textLength = computed(()=>lng.text.length);
const selected = ref("")
const isReady =ref(false)


watchEffect(() => { isReady.value = lng.text !== '' && lng.lang.lang1!== '' && lng.lang.lang2!== ''; });

watch(selected, ()=>{
    lng.lang.lang1=selected;
})

const translate = async (q,lang1,lang2)=>{
    const {translatedText,isLoading} =await useTranslate(q,lang1,lang2)
    lng.textTranslated= translatedText.value;
    console.log(lng.textTranslated)

}


const handleSelected = (abv)=>{
    if(selected.value==abv){selected.value=''}else{selected.value=abv;}
}

</script>

<template>
    <div class="card">
        <div class="card-header">
            <button class="button-header" @click="detectLanguage(lng.text)">Detect Language</button>
            <button class="button-header" 
                v-for="l in lang" 
                @click="handleSelected(l.abv)" 
                :class="l.abv==selected?'selected':null">
                {{ l.l }}
            </button>
        </div>
        <hr>
        <div class="card-body">
            <textarea  maxlength="500" v-model="lng.text" class="text"/>
            <p id="word-counter">{{ textLength }}/500</p>
        </div>
        <div class="card-footer">
            <button class="btn-with-img">
                <img class="img-button" :src="listen" alt="">
            </button>
            <button class="btn-with-img">
                <img class="img-button" :src="copy" alt="">
            </button>
            <button :class="isReady?'translate':'translate translate-yet'" @click="isReady?translate(lng.text,lng.lang.lang1,lng.lang.lang2):null" >
                <img id="translate-img"  :src="SortAlfa" alt="">Translate
            </button>
        </div>
    </div>
</template>