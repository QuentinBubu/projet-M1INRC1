// backend/src/interfaces/IValeursReponse.ts

import type { IProposition } from "./IProposition.js";
import type { IQuestion } from "./IQuestion.js";
import type { IReponse } from "./IReponse.js";

export interface IValeursReponse {
    id: number;
    texte: string | null;
    chiffre: number | null;
    question: IQuestion;
    proposition: IProposition | null;
    reponse: IReponse;
};