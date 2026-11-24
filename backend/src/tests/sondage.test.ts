import { describe, it } from "node:test";
import assert from "node:assert/strict";

import type { ISondage } from "../interfaces/ISondage.js";
import type { IQuestion } from "../interfaces/IQuestion.js";
import type { IProposition } from "../interfaces/IProposition.js";
import type { IReponse } from "../interfaces/IReponse.js";
import type { IValeursReponse } from "../interfaces/IValeursReponse.js";

import { Sondage } from "../models/Sondage.js";
import { Reponse } from "../models/Reponse.js";

describe("TDD - Modèle métier Sondage (sans DB)", () => {
    const sondageOuvert: ISondage = new Sondage(
        1,
        "Sondage sur les stacks web",
        new Date("2026-11-25T09:00:00Z"),
        new Date("2026-11-25T17:00:00Z"),
        "http://localhost:8080/sondage/1",
        "alice",
        true
    );

    const questionQcm: IQuestion = {
        id: 10,
        question: "Quelle stack préférez-vous ?",
        est_requis: true,
        ordre: 1,
        parametres: { choix_multiple: false },
        type: { type: "choix_unique" },
        sondage: sondageOuvert,
    };

    const propositionVue: IProposition = {
        id: 100,
        texte: "Vue 3 + Express",
        question: questionQcm,
    };

    const autreQuestion: IQuestion = {
        ...questionQcm,
        id: 20,
        question: "Autre question",
    };

    it("1. Vérifie qu'un sondage est ouvert à une date donnée", () => {
        const maintenant = new Date("2026-11-25T10:00:00Z");

        const estOuvert = sondageOuvert.estOuvert(maintenant);

        assert.equal(estOuvert, true);
    });

    it("1.1 Vérifie qu'un sondage est fermé après sa date de clôture", () => {
        const apresCloture = new Date("2026-11-26T18:00:00Z");

        const estOuvert = sondageOuvert.estOuvert(apresCloture);

        assert.equal(estOuvert, false);
    });

    it("2. Vérifie l'anonymat : pas besoin de nom_repondant si est_anonyme est true", () => {
        const reponse: IReponse = new Reponse(
            1,
            null,
            new Date("2026-11-25T10:05:00Z"),
            sondageOuvert
        );

        const reponseValide = sondageOuvert.reponseValide(reponse);

        assert.equal(reponseValide, true);
    });

    it("3. Vérifie qu'une proposition appartient bien à la question répondue", () => {
        const valeur: IValeursReponse = {
            id: 1,
            texte: null,
            chiffre: null,
            question: questionQcm,
            proposition: propositionVue,
            reponse: {
                id: 1,
                nom_repondant: null,
                date_reponse: new Date("2026-11-25T10:05:00Z"),
                sondage: sondageOuvert,
            },
        };

        // TODO: remplacer par votre règle de cohérence
        const coherenceOk =
            valeur.proposition === null || valeur.proposition.question.id === valeur.question.id;

        assert.equal(coherenceOk, true);
        assert.notEqual(propositionVue.question.id, autreQuestion.id);
    });

    it("4. Vérifie qu'une question requise a bien une valeur (proposition, texte ou chiffre)", () => {
        const valeurVide: IValeursReponse = {
            id: 2,
            texte: "   ",
            chiffre: null,
            question: questionQcm,
            proposition: null,
            reponse: {
                id: 1,
                nom_repondant: null,
                date_reponse: new Date("2026-11-25T10:05:00Z"),
                sondage: sondageOuvert,
            },
        };

        // TODO: remplacer par votre méthode de validation de réponse
        const aUneValeur =
            valeurVide.proposition !== null ||
            Boolean(valeurVide.texte && valeurVide.texte.trim().length > 0) ||
            valeurVide.chiffre !== null;

        const valide = !valeurVide.question.est_requis || aUneValeur;

        assert.equal(valide, false);
    });
});