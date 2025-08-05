# Galerie d'Art – Projet API Met Museum

## Présentation

Ce projet est une application web développée dans le cadre d’un exercice technique. Elle permet d'explorer et de consulter des œuvres issues du **Metropolitan Museum of Art (Met Museum)** à New York, via son API publique.

Le but du projet était  de mesurer la maîtrise des technologies frontend , mais aussi de démontrer des compétences en **logique, structuration de projet, gestion des appels API et création d'une interface utilisateur responsive et claire**.

---

## Objectifs pédagogiques

- Intégrer et consommer une API publique REST (Met Museum)
- Créer une interface dynamique avec JavaScript (Vanilla)
- Construire un layout responsive avec HTML/CSS
- Mettre en place des interactions utilisateur (recherche, modal, navigation)
- Structurer un projet web simple et maintenable

---

## Fonctionnalités principales

- Récupération dynamique d’œuvres d’art depuis l’API du Met Museum
- Affichage sous forme de galerie responsive (Grid CSS)
- Recherche par mot-clé (artiste, thème…)
- Affichage d’une **overlay au survol** des œuvres
- Ouverture d’un **modal interactif** avec détails de l’œuvre au clic
- Barre de navigation fixe avec logo et liens internes
- Pages dédiées :
  - `index.html` : page de bienvenue
  - `gallery.html` : galerie principale
  - `contact.html` : formulaire fictif de contact
- Design simple, propre et responsive (PC / tablette / mobile)

---

## Structure du projet
│
├── index.html
├── gallery.html
├── contact.html
├── script.js
└── /assets
    └── /img
        └── logo.jpg
    └── /js
      └── script.js
    └── /css
      └── contact.css
      └── gallery.css
      └── image.css
      └── modal.css
      └── navbar.css
      └── searchbar.css
      └── styles.css
    └── /srcfile ( pas utilisé)


---

## Technologies utilisées

- **HTML5** : structure sémantique
- **CSS3 (Grid + Flexbox)** : mise en page responsive, design simple
- **JavaScript Vanilla (ES6)** : appels API, DOM, modals, événements
- **API publique REST** du Met Museum : https://metmuseum.github.io/

---

## Comment utiliser

1. Cloner le projet ou télécharger le ZIP :
   git clone https://github.com/Neyth444/ArtGalleryExplorer.git
2. Ouvrir le fichier index.html dans un navigateur moderne (Chrome, Firefox, Edge).

Choix techniques justifiés
JavaScript pur (Vanilla) : suffisant pour gérer les appels API, manipuler le DOM et offrir une expérience fluide sans dépendance à un framework.
CSS Grid : permet une mise en page fluide et responsive sans media queries complexes.
Modal personnalisé : évite de recharger la page et améliore l’interaction utilisateur.
Navigation fixe : maintient l’accès constant aux liens principaux pendant le scroll.
Pages séparées (accueil, galerie, contact) : structure claire et navigation logique.


Ressources & inspirations
Plusieurs ressources ont été utilisées tout au long du développement :
API Met Museum – Documentation officielle
Stack Overflow – pour des clarifications sur les appels fetch, modals, erreurs courantes
MDN Web Docs – pour la syntaxe CSS/JS moderne
GitHub Copilot – assistance ponctuelle pour la structure du modal et logique DOM
GitHub Discussions & Issues – exemples de projets similaires, bonnes pratiques d’intégration d’API REST
CSS-Tricks – pour la mise en page Grid, effets hover
Forums divers tels que Dev.to, Reddit (r/webdev) pour des idées UX/UI simples
Anciens projets perso.


Limitations
Il n'y a pas de base de données ni de gestion serveur.
Le formulaire de contact est fictif et ne déclenche aucune action réelle.
Les favoris ne sont pas encore implémentés.(mais pourraient l’être avec localStorage)
Je n'ai pas su rendre le display des images "créatif" même avec inspiration.
