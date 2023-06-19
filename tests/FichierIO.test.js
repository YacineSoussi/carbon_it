"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const fs_1 = __importDefault(require("fs"));
const FichierIO_1 = __importDefault(require("../infrastructure/FichierIO"));
describe('FichierIO', () => {
    describe('lireFichierEntree', () => {
        it('devrait lire correctement le fichier d\'entrée', () => {
            const fichierIO = new FichierIO_1.default();
            const inputFile = 'input.txt';
            const contenuFichier = `C - 3 - 3
M - 1 - 0
T - 1 - 2 - 1
A - Aventurier 1 - 1 - 1 - N - A`;
            fs_1.default.writeFileSync(inputFile, contenuFichier, 'utf8');
            const resultat = fichierIO.lireFichierEntree(inputFile);
            (0, chai_1.expect)(resultat).to.deep.equal({
                largeur: 3,
                hauteur: 3,
                montagnes: [{ x: 1, y: 0 }],
                tresors: [{ x: 1, y: 2, quantite: 1 }],
                aventuriers: [{
                        nom: 'Aventurier 1',
                        x: 1,
                        y: 1,
                        orientation: 'N',
                        sequence: 'A',
                        tresorsRamasses: 0
                    }]
            });
            fs_1.default.unlinkSync(inputFile);
        });
    });
});
