function countBuildingsWithView(heights) {
    let count = 0;
    let maxRight = 0; // Hauteur maximale rencontrée à droite
  
    for (let i = heights.length - 1; i >= 0; i--) { // Parcours de droite à gauche
      if (heights[i] > maxRight) {
        count++; // Ce bâtiment a une vue dégagée
        maxRight = heights[i]; // Mettre à jour le max à droite
      }
    }
  
    return count;
  }
  
  // Test du programme
  console.log(countBuildingsWithView([3, 7, 8, 3, 6, 1])); // 3 (immeubles 8, 6, 1)
  console.log(countBuildingsWithView([1, 4, 5, 8]));       // 1 (immeuble 8)
  console.log(countBuildingsWithView([10, 4, 3, 2]));      // 4 (tous les immeubles)
  console.log(countBuildingsWithView([1, 2, 3, 4, 5]));    // 1 (seulement le dernier)
  

//   Explication détaillée :
// Variable maxRight :

// Initialisée à 0 (aucun bâtiment à droite au départ).
// Stocke la hauteur maximale rencontrée au fur et à mesure 
// qu'on parcourt les immeubles de droite à gauche.

// Parcours de droite à gauche :

// On commence par le dernier immeuble et on remonte vers le premier.
// Si la hauteur de l'immeuble courant est supérieure à maxRight :
// Il a une vue dégagée → incrémenter count.
// Mettre à jour maxRight.
// Complexité 𝑂(𝑛):

// Une seule boucle parcourt la liste de droite à gauche, 
// respectant la contrainte.