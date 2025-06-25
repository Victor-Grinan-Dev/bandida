export const capitalize = (text) => {
    // console.log("Capitalizing text:", text);
      if (!text) return text;
      else if (text === true) return text;

  return text[0].toUpperCase() + text.slice(1); 
}