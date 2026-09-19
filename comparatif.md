\## Comparatif général



| Critère | PWA (React + Vite) | PWA (Vue + Vite) | React Native / Expo | Flutter | Web classique (HTML/JS + backend) | 

&#x20;| ----- | ----- | ----- | ----- | ----- | ----- | 

| Type | Web app installable | Web app installable | App mobile native | App mobile native | Site web simple | 

| Plateformes | Web + iOS + Android (via navigateur) | Web + iOS + Android (via navigateur) | iOS + Android (+ web via Expo) | iOS + Android + Web + Desktop | Web uniquement | 

| Un seul codebase | Oui | Oui | Oui (mobile surtout) | Oui (multi-plateforme) | Oui | 

| Installation étudiant | Aucune (juste scanner) | Aucune (juste scanner) | Store ou Expo Go | Store | Aucune | 

| Scan QR natif | Via caméra navigateur | Via caméra navigateur | Excellente | Excellente | Via lib JS | 

| Push notifications | Limitées (iOS) | Limitées (iOS) | Complètes | Complètes | Non | 

| Accès caméra | (HTTPS requis) | (HTTPS requis) | Natif | Natif | (HTTPS requis) | 

| Performance | Bonne | Bonne | Excellente | Excellente | Bonne | 



\## Comparatif technique



| Critère | PWA (React) | PWA (Vue) | React Native / Expo | Flutter | Web classique | 

&#x20;| ----- | ----- | ----- | ----- | ----- | ----- | 

| Langage | JavaScript / TypeScript | JavaScript / TypeScript | JavaScript / TypeScript | Dart | HTML/CSS/JS | 

| Courbe d’apprentissage | Facile | Très facile | Moyenne | Plus raide (Dart) | Très facile | 

| Écosystème | Énorme (npm) | Très grand (npm) | Énorme (npm) | Plus jeune | Énorme | 

| UI / Composants | TailwindCSS, MUI, shadcn | TailwindCSS, Vuetify, PrimeVue, Shadcn-Vue | React Native Paper, NativeBase | Material + Cupertino natifs | Bootstrap, Tailwind | 

| Graphiques (barres) | Recharts, Chart.js, Nivo | Vue-Chartjs, Chart.js, ECharts, ApexCharts | Victory Native, react-native-chart-kit | fl\_chart, syncfusion | Chart.js, ApexCharts | 

| Génération QR | qrcode.react | qrcode.vue | react-native-qrcode-svg | qr\_flutter | qrcode.js | 

| Scan QR | html5-qrcode, @zxing/browser | html5-qrcode, @zxing/browser, vue-qrcode-reader | expo-barcode-scanner | mobile\_scanner | html5-qrcode | 

| Temps réel | Socket.IO, WebSocket | Socket.IO, WebSocket | Socket.IO | socket\_io\_client | Socket.IO | 



\## Comparatif coût / délai / maintenance



| Critère | PWA (React) | PWA (Vue) | React Native / Expo | Flutter | Web classique | 

&#x20;| ----- | ----- | ----- | ----- | ----- | ----- | 

| Temps de dev (MVP) | 1-2 semaines | 1-2 semaines | 3-4 semaines | 3-5 semaines | 1 semaine | 

| Coût hébergement | Faible (Vercel/Netlify gratuit) | Faible (Vercel/Netlify gratuit) | Moyen (backend + stores) | Moyen | Très faible | 

| Mise à jour | Instantanée | Instantanée | Review stores (1-3 jours) | Review stores | Instantanée | 

| Maintenance | Simple | Simple | Moyenne | Moyenne | Très simple | 

| CI/CD | Très simple (Docker + Vercel) | Très simple (Docker + Vercel) | Complexe (EAS Build, stores) | Complexe | Très simple | 



\## Comparatif adapté au cas d’usage



| Besoin concret | PWA (React) | PWA (Vue) | React Native / Expo | Flutter | Web classique | 

&#x20;| ----- | ----- | ----- | ----- | ----- | ----- | 

| Prof projette un QR au tableau | Idéal | Idéal | Idéal | Idéal | Idéal | 

| Étudiant scanne sans rien installer | Parfait | Parfait | Besoin d’Expo Go ou installation | Besoin d’installation | Parfait | 

| Résultats en temps réel (barres) | Socket.IO + Recharts | Socket.IO + Vue-Chartjs / ECharts | Socket.IO + Victory | Socket.IO + fl\_chart | Socket.IO + Chart.js | 

| Fonctionne sur PC + mobile | Natif | Natif | Via Expo Web | Oui | Natif | 

| Pas de compte étudiant requis | Facile | Facile | Facile | Facile | Facile | 

| Déploiement simple (Docker) | Très simple | Très simple | Backend + build mobile | Backend + build mobile | Très simple | 



\## Choix pour le projet



| Solution | Position | Justification | 

&#x20;| ----- | ----- | ----- | 

| PWA (React / Vue) | Meilleur choix | Répond aux besoins sans installation, fonctionne sur PC et mobile, déploiement et maintenance simples. Vue offre une prise en main légèrement plus rapide, une syntaxe template claire. | 

| React Native / Expo | Alternative | Pertinent si une véritable application native est exigée | 

| Flutter | Alternative | Pertinent pour un besoin multi-plateforme plus poussé | 

| Web classique | Alternative | Pertinent si l'objectif est de rester sur une solution web sans framework JavaScript moderne | 



