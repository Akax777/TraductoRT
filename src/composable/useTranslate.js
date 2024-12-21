import { ref } from 'vue';

export function useTranslate(q,lang1,lang2) {

    const translatedText = ref('')

    fetch(`https://api.mymemory.translated.net/get?q=${q}&langpair=${lang1}|${lang2}`)
    .then(response => response.json())
    .then(data => {
    translatedText.value=data.responseData.translatedText
    })
    .catch(error => {
    console.log(error)
    })

return {
    translatedText
};
}
