/*
// Exercice 1 : Sujet 1 avec 𝑂(𝑛2)

fonction hasPairWithSum(liste, k):
    pour i de 0 à taille(liste) - 1:
        pour j de i + 1 à taille(liste) - 1:
            si liste[i] + liste[j] == k:
                retourner vrai
    retourner faux



    // Exercice 2 : Sujet 2 avec 𝑂(𝑛2)

    fonction countBuildingsWithView(liste):
    compteur = 0
    pour i de 0 à taille(liste) - 1:
        aVue = vrai
        pour j de i + 1 à taille(liste) - 1:
            si liste[j] >= liste[i]:
                aVue = faux
                arrêter boucle
        si aVue:
            compteur = compteur + 1
    retourner compteur



    Exercice 3 : Sujet 1 avec 𝑂(𝑛)

    fonction hasPairWithSum(liste, k):
    ensemble = Set()
    pour chaque nombre dans liste:
        complément = k - nombre
        si complément est dans ensemble:
            retourner vrai
        ajouter nombre à ensemble
    retourner faux



    Exercice 4 : Sujet 2 avec 𝑂(𝑛)

    fonction countBuildingsWithView(liste):
    compteur = 0
    maxDroite = 0
    pour i de taille(liste) - 1 à 0 (inversé):
        si liste[i] > maxDroite:
            compteur = compteur + 1
            maxDroite = liste[i]
    retourner compteur



    Exercice 5 : Sujet 1 avec un seul passage (O(n))

    fonction hasPairWithSum(liste, k):
    ensemble = Set()
    pour chaque nombre dans liste:
        complément = k - nombre
        si complément est dans ensemble:
            retourner vrai
        ajouter nombre à ensemble
    retourner faux


    
    Exercice 6 : Sujet 2 avec un seul passage (O(n)
       
    fonction countBuildingsWithView(liste):
    compteur = 0
    maxDroite = 0
    pour i de taille(liste) - 1 à 0 (inversé):
        si liste[i] > maxDroite:
            compteur = compteur + 1
            maxDroite = liste[i]
    retourner compteur
*/