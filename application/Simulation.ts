import Aventurier from "../domain/Aventurier";
import Carte from "../domain/Carte";
import Montagne from "../domain/Montagne";
import Tresor from "../domain/Tresor";
import AventurierMover from "../domain/AventurierMover";

class Simulation {
    simulerMouvements(
      aventuriers: Aventurier[],
      carte: Carte,
      montagnes: Montagne[],
      tresors: Tresor[]
    ) {
      const aventurierMover = new AventurierMover();
  
      for (const aventurier of aventuriers) {
        aventurierMover.deplacerAventurier(aventurier, carte, montagnes, tresors);
      }
    }
  }

    export default Simulation;