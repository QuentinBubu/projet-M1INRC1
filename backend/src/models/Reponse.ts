// backend/src/models/Reponse.ts

import type { ISondage } from "../interfaces/ISondage.js";
import type { IReponse } from "../interfaces/IReponse.js";

export class Reponse implements IReponse {
    id: number;
    nom_repondant: string | null;
    date_reponse: Date;
    sondage: ISondage;

    constructor(id: number, nom_repondant: string | null, date_reponse: Date, sondage: ISondage) {
        this.id = id;
        this.nom_repondant = nom_repondant;
        this.date_reponse = date_reponse;
        this.sondage = sondage;
    }

    /**
     * Vérifie si la réponse est anonyme en fonction du sondage associé
     * @returns true si la réponse est anonyme, false sinon
     */
    estAnonyme(): boolean {
        return this.sondage.est_anonyme;
    }
}
