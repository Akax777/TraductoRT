export  const getTranslation= async (q,lang1,lang2)=>{
    console.log(q,lang1,lang2)
    const url = `https://api.mymemory.translated.net/get?q=${q}&langpair=${lang1}|${lang2}`;
    const resp = await fetch(url);
    const data= await resp.json()
    const translatedText=data.responseData.translatedText
    return translatedText;
}