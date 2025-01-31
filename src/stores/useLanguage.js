import { defineStore } from "pinia";
import { ref } from "vue";

export const useLanguage = defineStore('languages',()=>{
    const lang = ref({lang1:'',lang2:''});

    const text =ref('');
    
    const textTranslated = ref('');

    const switchLng = ()=>{
    [lang.value.lang1,lang.value.lang2] = [lang.value.lang2,lang.value.lang1];
    if(textTranslated!=''){
        let prov = text.value;
        text.value=textTranslated.value;
        textTranslated.value= prov;
    }
    }

    return {lang,switchLng,text,textTranslated};
})