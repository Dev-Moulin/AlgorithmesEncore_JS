const fs = require('fs');

let comparisonCount = 0;

// Fonction récursive pour fusionner deux tableaux
function merge(arr, temp, leftStart, mid, rightEnd) {
    let i = leftStart;    // Index pour la moitié gauche
    let j = mid + 1;      // Index pour la moitié droite
    let k = leftStart;    // Index pour le tableau temporaire

    while (i <= mid && j <= rightEnd) {
        comparisonCount++;
        if (arr[i] <= arr[j]) {
            temp[k++] = arr[i++];
        } else {
            temp[k++] = arr[j++];
        }
    }

    // Copier les éléments restants de la moitié gauche
    while (i <= mid) {
        temp[k++] = arr[i++];
    }

    // Copier les éléments restants de la moitié droite
    while (j <= rightEnd) {
        temp[k++] = arr[j++];
    }

    // Copier les éléments triés du tableau temporaire dans l'original
    for (let l = leftStart; l <= rightEnd; l++) {
        arr[l] = temp[l];
    }
}

function mergeSort(arr, temp, left, right) {
    if (left >= right) return; // Cas de base

    const mid = Math.floor((left + right) / 2);

    mergeSort(arr, temp, left, mid);      // Tri de la moitié gauche
    mergeSort(arr, temp, mid + 1, right); // Tri de la moitié droite
    merge(arr, temp, left, mid, right);   // Fusion des deux moitiés
}

// Lecture depuis un fichier
const fileName = process.argv[2];
if (!fileName) {
    console.error("Veuillez fournir le nom d'un fichier contenant des nombres.");
    process.exit(1);
}

fs.readFile(fileName, 'utf8', (err, data) => {
    if (err) {
        console.error("Erreur lors de la lecture du fichier :", err.message);
        process.exit(1);
    }

    // Convertir les données en un tableau de nombres
    const numbers = data
        .replace(/\n/g, ' ')    // Remplacer les sauts de ligne par des espaces
        .split(' ')             // Diviser par les espaces
        .map(line => line.trim()) // Supprimer les espaces autour de chaque élément
        .filter(line => line !== '') // Ignorer les lignes vides
        .map(Number);           // Convertir chaque ligne en nombre

    if (numbers.some(isNaN)) {
        console.error("Le fichier contient des valeurs non numériques.");
        process.exit(1);
    }

    console.log("Tableau d'entrée :", numbers);

    const temp = new Array(numbers.length);
    mergeSort(numbers, temp, 0, numbers.length - 1);

    console.log(`Tri fusion : ${comparisonCount} comparaisons - ${numbers}`);
});
