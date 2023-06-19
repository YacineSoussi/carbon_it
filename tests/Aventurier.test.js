"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const AventurierMover_1 = __importDefault(require("../domain/AventurierMover"));
describe('AventurierMover', () => {
    describe('Déplacement vers le nord', () => {
        it('devrait déplacer l\'aventurier vers le nord lorsque la case est accessible', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(0);
        });
        it('ne devrait pas déplacer l\'aventurier vers le nord lorsque la case est une montagne', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [{ x: 1, y: 0 }];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers le nord lorsque la case est en dehors des limites de la carte', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 0,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(0);
        });
    });
    describe('Déplacement vers le sud', () => {
        it('devrait déplacer l\'aventurier vers le sud lorsque la case est accessible', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'S',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(2);
        });
        it('ne devrait pas déplacer l\'aventurier vers le sud lorsque la case est une montagne', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'S',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [{ x: 1, y: 2 }];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers le sud lorsque la case est en dehors des limites de la carte', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 3,
                orientation: 'S',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(3);
        });
    });
    describe('Déplacement vers l\'est', () => {
        it('devrait déplacer l\'aventurier vers l\'est lorsque la case est accessible', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 0,
                y: 1,
                orientation: 'E',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers l\'est lorsque la case est une montagne', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 0,
                y: 1,
                orientation: 'E',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [{ x: 1, y: 1 }];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(0);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers l\'est lorsque la case est en dehors des limites de la carte', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 2,
                y: 1,
                orientation: 'E',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(2);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
    });
    describe('Déplacement vers l\'ouest', () => {
        it('devrait déplacer l\'aventurier vers l\'ouest lorsque la case est accessible', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'O',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(0);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers l\'ouest lorsque la case est une montagne', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'O',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [{ x: 0, y: 1 }];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(1);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
        it('ne devrait pas déplacer l\'aventurier vers l\'ouest lorsque la case est en dehors des limites de la carte', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 0,
                y: 1,
                orientation: 'O',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 4,
                hauteur: 3,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.x).to.equal(0);
            (0, chai_1.expect)(aventurier.y).to.equal(1);
        });
    });
    describe('Mouvement de rotation', () => {
        it('devrait mettre à jour l\'orientation de l\'aventurier lors d\'un mouvement de rotation vers la gauche', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'G',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.orientation).to.equal('O');
        });
        it('devrait mettre à jour l\'orientation de l\'aventurier lors d\'un mouvement de rotation vers la droite', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'D',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.orientation).to.equal('E');
        });
    });
    describe('Collecte de trésor', () => {
        it('devrait collecter le trésor lorsque l\'aventurier se déplace sur une case contenant un trésor', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [{ x: 1, y: 0, quantite: 1 }];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.tresorsRamasses).to.equal(1);
            (0, chai_1.expect)(tresors.length).to.equal(0);
        });
        it('devrait enlever le trésor de la liste des trésors lorsque la quantité atteint 0', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [{ x: 1, y: 0, quantite: 1 }];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.tresorsRamasses).to.equal(1);
            (0, chai_1.expect)(tresors.length).to.equal(0);
        });
        it('ne devrait pas ramasser de trésor lorsque l\'aventurier se déplace sur une case sans trésor', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 3,
            };
            const montagnes = [];
            const tresors = [];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.tresorsRamasses).to.equal(0);
            (0, chai_1.expect)(tresors.length).to.equal(0);
        });
        it('ne devrait pas ramasser plus de 1 trésor lorsque l\'aventurier se déplace sur une case contenant 2 trésors', () => {
            const mover = new AventurierMover_1.default();
            const aventurier = {
                nom: 'Aventurier 1',
                x: 1,
                y: 1,
                orientation: 'N',
                sequence: 'A',
                tresorsRamasses: 0,
            };
            const carte = {
                largeur: 3,
                hauteur: 4,
            };
            const montagnes = [];
            const tresors = [{ x: 1, y: 0, quantite: 2 }];
            mover.deplacerAventurier(aventurier, carte, montagnes, tresors);
            (0, chai_1.expect)(aventurier.tresorsRamasses).to.equal(1);
            (0, chai_1.expect)(tresors[0].quantite).to.equal(1);
        });
    });
});
