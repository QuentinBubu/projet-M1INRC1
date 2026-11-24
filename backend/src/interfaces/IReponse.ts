// backend/src/interfaces/IReponse.ts

import type { ISondage } from "./ISondage.js";

export interface IReponse {
    id: number;
    nom_repondant: string | null;
    date_reponse: Date;
    sondage: ISondage;

    estAnonyme(): boolean;
};