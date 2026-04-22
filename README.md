# ClientFlow Frontend

Interface utilisateur moderne et intuitive pour la plateforme ClientFlow.

## 🚀 Installation

### Prérequis
- Node.js 16+
- npm ou yarn

### Étapes d'installation

1. *Cloner le repository*
   bash
   git clone https://github.com/a-amira/clientflow-frontend.git
   cd clientflow-frontend

2. **Installer les dépendances**
   bash
   npm install

3. *Créer le fichier .env.local*
   env
   VITE_API_URL=http://localhost:8000/api

4. **Lancer le serveur de développement**
   bash
   npm run dev

5. *Accéder à l’application*
   Ouvrir http://localhost:5173 dans le navigateur.

6. *Structure du projet*
   text
   src/
   ├── components/
   │   ├── common/          # Composants réutilisables
   │   ├── layouts/         # Layouts (Header, Sidebar)
   │   └── pages/           # Pages de l'application
   ├── services/            # Services API & Auth
   ├── stores/              # Stores Pinia
   ├── composables/         # Composables Vue
   ├── types/               # Types TypeScript
   ├── router/              # Configuration Vue Router
   ├── assets/              # Images, icônes
   └── App.vue              # Root component

## Authentification

L’application utilise JWT (JSON Web Tokens) pour l’authentification.

1. **Connexion de l’utilisateur**  
   L’utilisateur se connecte avec son `username` et son `password`.

2. **Réponse du backend**  
   Le backend retourne un `access_token` et un `refresh_token`.

3. **Stockage des tokens**  
   Les tokens sont stockés dans le `localStorage`.

4. **Envoi du token dans les requêtes API**  
   Chaque requête API inclut le token dans le header `Authorization`.

   http
   Authorization: Bearer <access_token>

## 📖 Fonctionnalités

- ✅ Authentification JWT
- ✅ Gestion des entreprises (CRUD)
- ✅ Gestion des clients
- ✅ Suivi des projets en temps réel
- ✅ Gestion des jalons (milestones)
- ✅ Suivi des paiements
- ✅ Partage de documents
- ✅ Planification d’événements
- ✅ Notifications en temps réel
- ✅ Responsive design
- ✅ Filtrage et recherche

## 🧪 Tests

bash
# Lancer les tests
npm run test

# Tests avec couverture
npm run test:coverage

## 🏗️ Build pour la Production

bash
# Build
npm run build

# Prévisualiser le build
npm run preview

## 🚀 Déploiement

### Option 1: Netlify
Installez l'interface en ligne de commande Netlify et déployez votre dossier de production.

bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist

### Option 2: Vercel

bash
npm install -g vercel
vercel --prod

### Option 3: Docker

bash
# Créer l'image
docker build -t clientflow-frontend .

# Lancer le conteneur
docker run -p 80:80 clientflow-frontend

## 📝 Variables d’environnement

Créez un fichier `.env.local` à la racine de votre projet et ajoutez-y les configurations suivantes :

env
VITE_API_URL=http://localhost:8000/api
VITE_APP_NAME=ClientFlow
VITE_APP_VERSION=1.0.0

## 🤝 Contribution

Les contributions sont les bienvenues ! Veuillez suivre ces étapes :

1. *Fork* le repository
2. *Créer une branche* bash
   git checkout -b feature/amazing-feature

3. **Commit vos changements**
   bash
   git commit -m 'Add feature'

4. *Push vers la branche*
   ```bash
   git push origin feature/amazing-feature

5. *Ouvrir une Pull Request*

## 📄 Licence

MIT License - Voir [LICENSE](LICENSE) pour plus de détails

## 👥 Équipe

* *HAFSA* : Frontend Development & UI/UX
* *AMIRA* : Backend Development
* *SABRINE* : Backend & Documentation

## 📞 Support

Pour toute question ou problème, veuillez ouvrir une issue sur GitHub.

*Version :* 1.0.0
*Date :* 5 Avril 2026
*Status :* Production Ready 
