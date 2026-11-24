// backend/src/interfaces/ISondage.ts

export interface ISondage {
    id: number;
    nom: string;
    date_ouverture: Date;
    date_cloture: Date | null;
    url: string;
    createur: string;
    est_anonyme: boolean;
}
