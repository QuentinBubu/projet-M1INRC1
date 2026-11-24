// backend/src/interfaces/IQuestion.ts

import type { IQuestionType } from "./IQuestionType.js";
import type { ISondage } from "./ISondage.js";

export interface IQuestion {
    id: number;
    question: string;
    est_requis: boolean;
    ordre: number;
    parametres: Record<string, unknown> | null;
    type: IQuestionType;
    sondage: ISondage;
}