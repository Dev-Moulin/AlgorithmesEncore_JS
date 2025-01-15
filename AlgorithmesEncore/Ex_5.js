function hasPairWithSum(arr, k) {
    const seen = new Set();
  
    for (const num of arr) {
      const complement = k - num;
      if (seen.has(complement)) {
        return true; // Une paire avec la somme k est trouvée
      }
      seen.add(num); // Ajouter l'élément courant au Set
    }
  
    return false; // Aucune paire trouvée
  }
  
  // Test du programme
  console.log(hasPairWithSum([10, 15, 3, 7], 17)); // true (10 + 7 = 17)
  console.log(hasPairWithSum([1, 8, 10, 21], 19)); // false
  console.log(hasPairWithSum([5, 1, 4, 6], 10));   // true (4 + 6 = 10)
  

//   Explication détaillée :
// Initialisation :

// seen est un Set qui stocke les nombres déjà parcourus.
// Itération sur chaque élément :

// Pour chaque élément num, on calcule complement = 𝑘 − num
// Si complement est dans seen, cela signifie qu'il existe 
// un nombre dans la liste qui, ajouté à num, donne 𝑘

// Ajout au Set :

// Si aucun complément n'est trouvé pour num, on l'ajoute au Set pour
//  vérifier les futurs éléments.

// Complexité 𝑂(𝑛) :

// Une seule boucle parcourt la liste,
// et chaque opération sur le Set (ajout ou recherche) est en 𝑂(1).