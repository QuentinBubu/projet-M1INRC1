// backend/src/interfaces/IProposition.ts

import type { IQuestion } from "./IQuestion.js";

export interface IProposition {
    id: number;
    texte: string | null;
    question: IQuestion;
};