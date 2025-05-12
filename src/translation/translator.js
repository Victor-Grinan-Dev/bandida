import data from './translation.json';

export const translate = (phrase, lang) => {
    if (lang === "fi"){
        return phrase
    }
    return data[phrase][lang];
}