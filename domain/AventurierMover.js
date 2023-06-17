"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AventurierMover = /** @class */ (function () {
    function AventurierMover() {
    }
    AventurierMover.prototype.deplacerAventurier = function (aventurier, carte, montagnes, tresors) {
        var deplacements = {
            N: { x: 0, y: -1 },
            E: { x: 1, y: 0 },
            S: { x: 0, y: 1 },
            O: { x: -1, y: 0 },
        };
        for (var i = 0; i < aventurier.sequence.length; i++) {
            var mouvement = aventurier.sequence[i];
            if (mouvement === "A") {
                this.deplacerVers(aventurier, deplacements, carte, montagnes, tresors);
            }
            else {
                this.tournerAventurier(aventurier, mouvement);
            }
        }
    };
    AventurierMover.prototype.deplacerVers = function (aventurier, deplacements, carte, montagnes, tresors) {
        var deplacement = deplacements[aventurier.orientation];
        var newX = aventurier.x + deplacement.x;
        var newY = aventurier.y + deplacement.y;
        if (this.estCaseAccessible(newX, newY, carte, montagnes)) {
            this.deplacerAventurierVers(aventurier, newX, newY, tresors);
        }
    };
    AventurierMover.prototype.estCaseAccessible = function (x, y, carte, montagnes) {
        return (x >= 0 &&
            x < carte.largeur &&
            y >= 0 &&
            y < carte.hauteur &&
            !this.estMontagne(x, y, montagnes));
    };
    AventurierMover.prototype.estMontagne = function (x, y, montagnes) {
        return montagnes.some(function (montagne) { return montagne.x === x && montagne.y === y; });
    };
    AventurierMover.prototype.deplacerAventurierVers = function (aventurier, newX, newY, tresors) {
        var tresorIndex = this.trouverTresorIndex(newX, newY, tresors);
        if (tresorIndex !== -1) {
            this.collecterTresor(aventurier, tresors, tresorIndex);
        }
        aventurier.x = newX;
        aventurier.y = newY;
    };
    AventurierMover.prototype.trouverTresorIndex = function (x, y, tresors) {
        return tresors.findIndex(function (tresor) { return tresor.x === x && tresor.y === y; });
    };
    AventurierMover.prototype.collecterTresor = function (aventurier, tresors, tresorIndex) {
        var tresor = tresors[tresorIndex];
        aventurier.tresorsRamasses += Math.min(tresor.quantite, 1);
        tresor.quantite = Math.max(tresor.quantite - 1, 0);
        if (tresor.quantite === 0) {
            tresors.splice(tresorIndex, 1);
        }
    };
    AventurierMover.prototype.tournerAventurier = function (aventurier, mouvement) {
        var orientations = ["N", "E", "S", "O"];
        var currentIndex = orientations.indexOf(aventurier.orientation);
        if (mouvement === "G") {
            aventurier.orientation = orientations[(currentIndex + 3) % 4];
        }
        else if (mouvement === "D") {
            aventurier.orientation = orientations[(currentIndex + 1) % 4];
        }
    };
    return AventurierMover;
}());
exports.default = AventurierMover;
