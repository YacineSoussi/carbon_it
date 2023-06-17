"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var FichierIO = /** @class */ (function () {
    function FichierIO() {
    }
    FichierIO.prototype.lireFichierEntree = function (inputFile) {
        var contenu = (0, fs_1.readFileSync)(inputFile, "utf8");
        var lignes = this.filtrerCommentaires(contenu.split("\n"));
        var _a = this.extraireDimensions(lignes[0]), largeur = _a[0], hauteur = _a[1];
        var montagnes = this.extraireMontagnes(lignes);
        var tresors = this.extraireTresors(lignes);
        var aventuriers = this.extraireAventuriers(lignes);
        return { largeur: largeur, hauteur: hauteur, montagnes: montagnes, tresors: tresors, aventuriers: aventuriers };
    };
    FichierIO.prototype.filtrerCommentaires = function (lignes) {
        return lignes.filter(function (ligne) { return !ligne.startsWith("#"); });
    };
    FichierIO.prototype.extraireDimensions = function (ligne) {
        return ligne.split(" - ").slice(1, 3).map(Number);
    };
    FichierIO.prototype.extraireMontagnes = function (lignes) {
        return lignes
            .filter(function (ligne) { return ligne.startsWith("M"); })
            .map(function (ligne) {
            var _a = ligne.split(" - ").map(Number), _ = _a[0], x = _a[1], y = _a[2];
            return { x: x, y: y };
        });
    };
    FichierIO.prototype.extraireTresors = function (lignes) {
        return lignes
            .filter(function (ligne) { return ligne.startsWith("T"); })
            .map(function (ligne) {
            var _a = ligne.split(" - ").map(Number), _ = _a[0], x = _a[1], y = _a[2], quantite = _a[3];
            return { x: x, y: y, quantite: quantite };
        });
    };
    FichierIO.prototype.extraireAventuriers = function (lignes) {
        return lignes
            .filter(function (ligne) { return ligne.startsWith("A"); })
            .map(function (ligne) {
            var _a = ligne.split(" - "), _ = _a[0], nom = _a[1], x = _a[2], y = _a[3], orientation = _a[4], sequence = _a[5];
            return {
                nom: nom,
                x: Number(x),
                y: Number(y),
                orientation: orientation,
                sequence: sequence,
                tresorsRamasses: 0,
            };
        });
    };
    FichierIO.prototype.ecrireFichierSortie = function (outputFile, carte, montagnes, tresors, aventuriers) {
        var outputContent = "C - ".concat(carte.largeur, " - ").concat(carte.hauteur, "\n");
        for (var _i = 0, montagnes_1 = montagnes; _i < montagnes_1.length; _i++) {
            var montagne = montagnes_1[_i];
            outputContent += "M - ".concat(montagne.x, " - ").concat(montagne.y, "\n");
        }
        outputContent += "# {T comme Trésor} - {Axe horizontal} - {Axe vertical} - {Nb. de trésors restants}\n";
        for (var _a = 0, tresors_1 = tresors; _a < tresors_1.length; _a++) {
            var tresor = tresors_1[_a];
            outputContent += "T - ".concat(tresor.x, " - ").concat(tresor.y, " - ").concat(tresor.quantite, "\n");
        }
        outputContent += "# {A comme Aventurier} - {Nom de l'aventurier} - {Axe horizontal} - {Axe vertical} - {Orientation} - {Nb. trésors ramassés}\n";
        for (var _b = 0, aventuriers_1 = aventuriers; _b < aventuriers_1.length; _b++) {
            var aventurier = aventuriers_1[_b];
            outputContent += "A - ".concat(aventurier.nom, " - ").concat(aventurier.x, " - ").concat(aventurier.y, " - ").concat(aventurier.orientation, " - ").concat(aventurier.tresorsRamasses, "\n");
        }
        (0, fs_1.writeFile)(outputFile, outputContent, "utf8", function (err) {
            if (err) {
                console.error("Erreur lors de l'\u00E9criture du fichier ".concat(outputFile, ":"), err);
            }
            else {
                console.log("Le fichier ".concat(outputFile, " a \u00E9t\u00E9 cr\u00E9\u00E9 avec succ\u00E8s."));
            }
        });
    };
    return FichierIO;
}());
exports.default = FichierIO;
