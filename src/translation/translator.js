import data from './translation.json';

export const translate = (phrase, lang) => {
    if (phrase === "artist"){
        console.log("lang", lang)
        console.log("phrase", phrase)
    }
    if (lang === "fi"){
        return phrase
    }
    return data[phrase][lang];
}