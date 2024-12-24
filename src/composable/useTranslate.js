import { getTranslation } from '@/helpers/getTranslation';
import { ref } from 'vue';

export const useTranslate = async (q, lang1, lang2) => {
    const translatedText = ref('');
    const isLoading = ref(true);

    try {
        translatedText.value = await getTranslation(q, lang1, lang2);
    } catch (error) {
        console.error("Error al traducir:", error);
    } finally {
        isLoading.value = false;
    }

    return {
        translatedText,
        isLoading
    };
};
