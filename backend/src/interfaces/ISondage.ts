// backend/src/interfaces/ISondage.ts

import type { IReponse } from "./IReponse.js";

export interface ISondage {
    id: number;
    nom: string;
    date_ouverture: Date;
    date_cloture: Date | null;
    url: string;
    createur: string;
    est_anonyme: boolean;

    reponseValide(reponse: IReponse): boolean;
    estOuvert(date?: Date): boolean;
    estValide(): boolean;
}
