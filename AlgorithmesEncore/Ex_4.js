function countBuildingsWithView(heights) {
    let count = 0;
    let maxRight = 0; // Garde en mémoire la hauteur maximale rencontrée à droite
  
    for (let i = heights.length - 1; i >= 0; i--) { // Parcourt de droite à gauche
      if (heights[i] > maxRight) {
        count++; // Ce bâtiment a une vue dégagée
        maxRight = heights[i]; // Met à jour le maximum à droite
      }
    }
  
    return count;
  }
  
  // Test du programme
  console.log(countBuildingsWithView([3, 7, 8, 3, 6, 1])); // 3 (immeubles 8, 6, 1)
  console.log(countBuildingsWithView([1, 4, 5, 8]));       // 1 (immeuble 8)
  console.log(countBuildingsWithView([10, 4, 3, 2]));      // 4 (tous les immeubles)
  

  //Explication :
// Variable maxRight :

// Stocke la hauteur maximale rencontrée à droite de chaque bâtiment.
// Initialisée à 0, car aucun immeuble à droite au départ.
// Boucle de droite à gauche :

// On commence par le dernier bâtiment (index 𝑛 − 1).
// Si la hauteur du bâtiment courant est supérieure à maxRight :
// Il a une vue dégagée.
// On met à jour maxRight avec la hauteur de ce bâtiment.
// On incrémente le compteur.
// Complexité 𝑂(𝑛) :

// Une seule boucle parcourt la liste une fois, donc c'est bien 𝑂(𝑛).