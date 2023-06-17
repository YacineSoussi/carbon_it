"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AventurierMover_1 = require("../domain/AventurierMover");
var Simulation = /** @class */ (function () {
    function Simulation() {
    }
    Simulation.prototype.simulerMouvements = function (aventuriers, carte, montagnes, tresors) {
        var aventurierMover = new AventurierMover_1.default();
        for (var _i = 0, aventuriers_1 = aventuriers; _i < aventuriers_1.length; _i++) {
            var aventurier = aventuriers_1[_i];
            aventurierMover.deplacerAventurier(aventurier, carte, montagnes, tresors);
        }
    };
    return Simulation;
}());
exports.default = Simulation;
