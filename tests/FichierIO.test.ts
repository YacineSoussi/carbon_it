import { expect } from "chai";
import fs from "fs";
import FichierIO from "../infrastructure/FichierIO";


describe('FichierIO', () => {
  describe('lireFichierEntree', () => {
    it('devrait lire correctement le fichier d\'entrée', () => {
      const fichierIO = new FichierIO();

      const inputFile = 'input.txt';
      const contenuFichier = `C - 3 - 3
M - 1 - 0
T - 1 - 2 - 1
A - Aventurier 1 - 1 - 1 - N - A`;

      fs.writeFileSync(inputFile, contenuFichier, 'utf8');
      
      const resultat = fichierIO.lireFichierEntree(inputFile);

      expect(resultat).to.deep.equal({
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

      fs.unlinkSync(inputFile);
    });
  });
});
