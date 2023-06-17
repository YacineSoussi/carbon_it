"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FichierIO_1 = require("../infrastructure/FichierIO");
var Simulation_1 = require("../application/Simulation");
// Exemple d'utilisation
var fichierIO = new FichierIO_1.default();
var simulation = new Simulation_1.default();
var inputFile = "input.txt";
var outputFile = "output.txt";
var _a = fichierIO.lireFichierEntree(inputFile), largeur = _a.largeur, hauteur = _a.hauteur, montagnes = _a.montagnes, tresors = _a.tresors, aventuriers = _a.aventuriers;
var carte = { largeur: largeur, hauteur: hauteur };
simulation.simulerMouvements(aventuriers, carte, montagnes, tresors);
fichierIO.ecrireFichierSortie(outputFile, carte, montagnes, tresors, aventuriers);
