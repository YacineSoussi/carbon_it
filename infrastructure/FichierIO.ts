import { readFileSync, writeFile } from "fs";
import Aventurier from "../Aventurier";
import Carte from "../domain/Carte";
import Montagne from "../domain/Montagne";
import Tresor from "../domain/Tresor";


class FichierIO {

    lireFichierEntree(inputFile: string) {
      const contenu = readFileSync(inputFile, "utf8");
      const lignes = this.filtrerCommentaires(contenu.split("\n"));
      const [largeur, hauteur] = this.extraireDimensions(lignes[0]);
  
      const montagnes = this.extraireMontagnes(lignes);
      const tresors = this.extraireTresors(lignes);
      const aventuriers = this.extraireAventuriers(lignes);
      
      return { largeur, hauteur, montagnes, tresors, aventuriers };
    }
  
    private filtrerCommentaires(lignes: string[]) {
      return lignes.filter((ligne) => !ligne.startsWith("#"));
    }
  
    private extraireDimensions(ligne: string) {
      return ligne.split(" - ").slice(1, 3).map(Number);
    }
  
    private extraireMontagnes(lignes: string[]) {
      return lignes
        .filter((ligne) => ligne.startsWith("M"))
        .map((ligne) => {
          const [_, x, y] = ligne.split(" - ").map(Number);
          return { x, y };
        });
    }
  
    private extraireTresors(lignes: string[]) {
      return lignes
        .filter((ligne) => ligne.startsWith("T"))
        .map((ligne) => {
          const [_, x, y, quantite] = ligne.split(" - ").map(Number);
          return { x, y, quantite };
        });
    }
  
    private extraireAventuriers(lignes: string[]) {
      return lignes
        .filter((ligne) => ligne.startsWith("A"))
        .map((ligne) => {
          const [_, nom, x, y, orientation, sequence] = ligne.split(" - ");
          return {
            nom,
            x: Number(x),
            y: Number(y),
            orientation,
            sequence,
            tresorsRamasses: 0,
          };
        });
    }
  
    ecrireFichierSortie(
      outputFile: string,
      carte: Carte,
      montagnes: Montagne[],
      tresors: Tresor[],
      aventuriers: Aventurier[]
    ) {
      let outputContent = `C - ${carte.largeur} - ${carte.hauteur}\n`;
  
      for (const montagne of montagnes) {
        outputContent += `M - ${montagne.x} - ${montagne.y}\n`;
      }
  
        outputContent += "# {T comme Trésor} - {Axe horizontal} - {Axe vertical} - {Nb. de trésors restants}\n";
      for (const tresor of tresors) {
        outputContent += `T - ${tresor.x} - ${tresor.y} - ${tresor.quantite}\n`;
      }
  
       outputContent += "# {A comme Aventurier} - {Nom de l'aventurier} - {Axe horizontal} - {Axe vertical} - {Orientation} - {Nb. trésors ramassés}\n";
      for (const aventurier of aventuriers) {
        outputContent += `A - ${aventurier.nom} - ${aventurier.x} - ${aventurier.y} - ${aventurier.orientation} - ${aventurier.tresorsRamasses}\n`;
      }
  
      writeFile(outputFile, outputContent, "utf8", (err) => {
        if (err) {
          console.error(
            `Erreur lors de l'écriture du fichier ${outputFile}:`,
            err
          );
        } else {
          console.log(`Le fichier ${outputFile} a été créé avec succès.`);
        }
      });
    }
  }

export default FichierIO;