import type { ISondage } from "../interfaces/ISondage.js";
import type { IReponse } from "../interfaces/IReponse.js";
import type { IValeursReponse } from "../interfaces/IValeursReponse.js";

export class Sondage implements ISondage {
    id: number;
    nom: string;
    date_ouverture: Date;
    date_cloture: Date | null;
    url: string;
    createur: string;
    est_anonyme: boolean;

    constructor(id: number, nom: string, date_ouverture: Date, date_cloture: Date | null, url: string, createur: string, est_anonyme: boolean) {
        this.id = id;
        this.nom = nom;
        this.date_ouverture = date_ouverture;
        this.date_cloture = date_cloture;
        this.url = url;
        this.createur = createur;
        this.est_anonyme = est_anonyme;
    }

    /**
     * Vérifie si le sondage est ouvert à une date donnée
     * 
     * @param date La date à vérifier
     * @returns true si le sondage est ouvert, false sinon
     */
    estOuvert(date: Date = new Date()): boolean {
        return date >= this.date_ouverture && (this.date_cloture === null || date <= this.date_cloture);
    }

    /**
     * Vérifie si le sondage est valide (date d'ouverture avant date de clôture)
     * @returns true si le sondage est valide, false sinon
     */
    estValide(): boolean {
        return this.date_cloture === null || this.date_ouverture <= this.date_cloture;
    }

    /**
     * Vérifie si une réponse est valide pour ce sondage
     * @param reponse La réponse à vérifier
     * @returns true si la réponse est valide, false sinon
     */
    reponseValide(reponse: IReponse): boolean {
        return this.estValide() && this.estOuvert(reponse.date_reponse) && (this.est_anonyme || Boolean(reponse.nom_repondant?.trim()));
    }
}