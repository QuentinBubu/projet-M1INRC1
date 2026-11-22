Node.js : environnement d'exécution JavaScript côté serveur.

Express : framework web léger pour exposer vos routes HTTP (ex. GET /health, création/lecture d'un sondage, enregistrement d'un vote).

Socket.IO : couche temps réel bidirectionnelle (basée sur WebSockets avec repli automatique) qui permet aux écrans de résultats ou aux participants d'un sondage donné (via une room poll:<id>) de recevoir immédiatement les mises à jour lorsqu'un vote tombe.

PostgreSQL (pg) : base de données relationnelle fiable pour persister les sondages, les options et les votes (contrairement à une simple mémoire vive qui disparaîtrait au redémarrage d'un conteneur).

dotenv et cors : dotenv charge les variables d'environnement en développement local (et Docker Compose injecte les variables directement dans l'environnement du conteneur), tandis que cors autorise votre PWA Vue à appeler l'API depuis une autre origine/port.