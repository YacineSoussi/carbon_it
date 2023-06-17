import Carte from "../domain/Carte";
import FichierIO from "../infrastructure/FichierIO";
import Simulation from "../application/Simulation";

// Exemple d'utilisation
const fichierIO = new FichierIO();
const simulation = new Simulation();

const inputFile = "input.txt";
const outputFile = "output.txt";

const { largeur, hauteur, montagnes, tresors, aventuriers } =
  fichierIO.lireFichierEntree(inputFile);

const carte: Carte = { largeur, hauteur };

simulation.simulerMouvements(aventuriers, carte, montagnes, tresors);
fichierIO.ecrireFichierSortie(outputFile, carte, montagnes, tresors, aventuriers);
