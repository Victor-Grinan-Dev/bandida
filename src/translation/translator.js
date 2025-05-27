import data from './translation.json';

export const translate = (phrase, lang) => {
    // console.log(`Translation for "${phrase}" in language "${lang}" requested.`);
    if (lang === "fi"){
        console.log(`Translating "${phrase}" to Finnish.`);
        return phrase
    } else if (data[phrase] === undefined || data[phrase] === null) {
        console.warn(`Phrase "${phrase}" not found in translation data.`);
        return phrase; // Return the original phrase if it does not exist in the data
    }else{
        return data[phrase][lang] || phrase; // Return the translation for the specified language or the original phrase if not found
    }

}