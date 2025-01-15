function pairFound(array, k) {
    const stockComplements = new Set(); 
    //set stock mais que une seul 
    // valeur unique ce n'est pas un tableaux,
    // ajoute l'élément si et seulement si cet 
    // élément n'est pas déjà présent.

    for (const num of array) {
          //pourquoi utiliser "for of":
          //on accède directement aux 
          //valeurs des éléments sans avoir à utiliser un index.
          //cela évite aussi de dépasser les limites du tableaux.
        const complement = k - num;
        //Pour chaque nombre num de la liste, 
        //on calcule le complément nécessaire pour atteindre k -> 17−10=7
        if (stockComplements.has(complement)) {
            return true;
            //La méthode .has() est utilisée pour vérifier
            //si un élément spécifique existe dans le Set
        }
        stockComplements.add(num);
        //Si le complément n'est pas dans le Set, 
        // on ajoute le nombre courant (num) pour 
        // qu'il puisse être utilisé comme complément lors des itérations suivantes.
    }
    return false;
} 

  console.log(pairFound([10, 15, 3, 7], 17)); // true (10 + 7 = 17)
  console.log(pairFound([1, 8, 10, 21], 19)); // false