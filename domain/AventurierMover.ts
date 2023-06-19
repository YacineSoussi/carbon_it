import Aventurier  from "./Aventurier";
import Carte from "./Carte";
import Montagne from "./Montagne";
import Tresor from "./Tresor";


class AventurierMover {

    deplacerAventurier(
      aventurier: Aventurier,
      carte: Carte,
      montagnes: Montagne[],
      tresors: Tresor[]
    ) {
      const deplacements = {
        N: { x: 0, y: -1 },
        E: { x: 1, y: 0 },
        S: { x: 0, y: 1 },
        O: { x: -1, y: 0 },
      };
  
      for (let i = 0; i < aventurier.sequence.length; i++) {
        const mouvement = aventurier.sequence[i];
  
        if (mouvement === "A") {
          this.deplacerAventurierVersCaseAccessible(aventurier, deplacements, carte, montagnes, tresors);
        } else {
          this.tournerAventurier(aventurier, mouvement);
        }
      }
    }
  
    private deplacerAventurierVersCaseAccessible(
      aventurier: Aventurier,
      deplacements: { [key: string]: { x: number; y: number } },
      carte: Carte,
      montagnes: Montagne[],
      tresors: Tresor[]
    ) {
      const deplacement = deplacements[aventurier.orientation];
      const newX = aventurier.x + deplacement.x;
      const newY = aventurier.y + deplacement.y;
  
      if (this.estCaseAccessible(newX, newY, carte, montagnes)) {
        this.deplacerAventurierSurCase(aventurier, newX, newY, tresors);
      }
    }
  
    private estCaseAccessible(
      x: number,
      y: number,
      carte: Carte,
      montagnes: Montagne[]
    ) {
      return (
        x >= 0 &&
        x < carte.largeur &&
        y >= 0 &&
        y < carte.hauteur &&
        !this.estMontagne(x, y, montagnes)
      );
    }
  
    private estMontagne(x: number, y: number, montagnes: Montagne[]) {
      return montagnes.some((montagne) => montagne.x === x && montagne.y === y);
    }
  
    private deplacerAventurierSurCase(
      aventurier: Aventurier,
      newX: number,
      newY: number,
      tresors: Tresor[]
    ) {
      const tresorIndex = this.trouverTresorIndex(newX, newY, tresors);
  
      if (tresorIndex !== -1) {
        this.collecterTresor(aventurier, tresors, tresorIndex);
      }
  
      aventurier.x = newX;
      aventurier.y = newY;
    }
  
    private trouverTresorIndex(x: number, y: number, tresors: Tresor[]) {
      return tresors.findIndex((tresor) => tresor.x === x && tresor.y === y);
    }
  
    private collecterTresor(
      aventurier: Aventurier,
      tresors: Tresor[],
      tresorIndex: number
    ) {
      const tresor = tresors[tresorIndex];
      aventurier.tresorsRamasses += Math.min(tresor.quantite, 1);
      tresor.quantite = Math.max(tresor.quantite - 1, 0);
  
      if (tresor.quantite === 0) {
        tresors.splice(tresorIndex, 1);
      }
    }
  
    private tournerAventurier(aventurier: Aventurier, mouvement: string) {
      const orientations = ["N", "E", "S", "O"];
      const currentIndex = orientations.indexOf(aventurier.orientation);
  
      if (mouvement === "G") {
        aventurier.orientation = orientations[(currentIndex + 3) % 4];
      } else if (mouvement === "D") {
        aventurier.orientation = orientations[(currentIndex + 1) % 4];
      }
    }
  }

    export default AventurierMover;