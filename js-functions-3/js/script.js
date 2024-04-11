// -----------------------------------
console.log("1/ Implémentez une fonction qui transforme un texte en camelCase.");

/**
 * transform a text in camlcase
 * @param {string} text 
 * @returns {string} text in camelcase
 */
function toCamelCase(text) {
    
    const words = text.split("_");
    const wordsWithoutSpaces = words.map(word => word.trim());
    const filteredWords = wordsWithoutSpaces.filter(word => word.length > 0);
  
    const camelCaseWords = [filteredWords[0].toLowerCase()].concat(filteredWords.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()));
  
   
    const camelCaseText = camelCaseWords.join("");
  
    return camelCaseText;
    }
console.log(toCamelCase("hello_world"));  
console.log(toCamelCase("camel_case"));  
console.log(toCamelCase("HTML5_and_CSS3")); 

// -----------------------------------
console.log("2/ Implémentez une fonction qui retroune le plus grand mot d'un texte.");
/**
 * find the longest word in a sentence
 * @param {string} text 
 * @returns {string} longest woerd in the sentence
 */
function findLongestWord(text) {
    return text.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
  }

  console.log(findLongestWord("Ceci est un texte avec ipérativement un long mot"));  
   
// -----------------------------------
console.log("3/ Implémentez une fonction qui converti un nombre de seconde en un tableau exprimant cette durée en secondes, minutes, heures, jours, semaines et années.");
/**
 * convert seconds in minutes, hours, days, weeks, month, years in an array
 * @param {number} seconds 
 * @returns {array} converted seconds in an array
 */
function convertDuration(seconds) {
    const durations = [
      { name: 'year', seconds: 365.25 * 24 * 60 * 60 },
      { name: 'week', seconds: 7 * 24 * 60 * 60 },
      { name: 'day', seconds: 24 * 60 * 60 },
      { name: 'hour', seconds: 60 * 60 },
      { name: 'minute', seconds: 60 },
      { name: 'second', seconds: 1 }
    ];
  
    return durations.map(duration => {
      const value = Math.floor(seconds / duration.seconds);
      seconds %= duration.seconds;
      return value;
    });
  }

console.log(convertDuration(60));
console.log(convertDuration(360));
console.log(convertDuration(3600));
console.log(convertDuration(36000000000000));

// -----------------------------------
console.log("4/ Implémentez une fonction qui prend en paramètre un tableau retourné par la fonction précédente et retourne la chaîne de caractère correspondante.");


console.log();
// -----------------------------------
console.log("5/ Implémentez une fonction qui compte dans le texte en premier paramètre, le nombre d'occurence de la lettre en second paramètre.");

console.log();

// -----------------------------------
console.log("6/ Implémentez une fonction qui retourne les X plus grandes valeurs d'un tableau.");

console.log();

// -----------------------------------
console.log("7/ Retournez la liste des prenoms des joueurs ci-dessous par ordre de score décroissant.");

const players  = {
    Camille: 88,
    Lola: 125,
    Isaac: 174,
    Aldrick: 426,
    Ismaël: 248,
    Lilian: 478,
    Charley: 225,
    Thierry: 255,
    Cameron: 205,
    Tanguy: 155,
    Jenny: 125
};

console.log();

// -----------------------------------
console.log("8/ Dans la liste des scores ci-dessus sélectionnez une partie des meilleurs joueurs jusqu'à obtenir un total de score des joueurs sélectionnés de 1000.");

console.log();