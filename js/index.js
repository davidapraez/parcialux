class Triangular{
    constructor(equipoA, equipoB, equipoC){
        this.equipoA = equipoA;
        this.equipoB = equipoB;
        this.equipoC = equipoC;
        this.partidos = []
    }

    jugar(equipoA, equipoB, golesA, golesB){
        const partido = new Partido(equipoA, equipoB, golesA, golesB);
        this.partidos.push(partido)
    }

    obtenerPartidosJugados(equipo){
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo || this.equipoB == equipo){
                number ++;
            }
        });
        return number;
    }

    obtenerPartidosGanados(equipo){
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA > partido.golesB){
                number ++;
            }else if (partido.equipoB == equipo && partido.golesB > partido.golesA){
                number ++;
            } 
        });
        return number;
    }

    obtenerPartidosEmpatados(equipo){
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA == partido.golesB){
                number ++;
            }else if (partido.equipoB == equipo && partido.golesB == partido.golesA){
                number ++;
            } 
        });
        return number;
    }

    obtenerPartidosPerdidos(equipo){
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA < partido.golesB){
                number ++;
            }else if (partido.equipoB == equipo && partido.golesB < partido.golesA){
                number ++;
            } 
        });
        return number;
    }

    obtenerGolesFavor(equipo){
        let goles = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo){
                number += partido.golesA;
            }else if (partido.equipoB == equipo){
                number += partido.golesB;
            } 
        });
        return goles;
    }

    obtenerGolesContra(equipo){
        let goles = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo){
                number += partido.golesB;
            }else if (partido.equipoB == equipo){
                number += partido.golesA;
            } 
        });
        return goles;
    }

    obtenerPuntos(equipo){
        let puntos = this.obtenerPartidosGanados(equipo)*3 + this.obtenerPartidosEmpatados(equipo);
        return puntos;
    }
}


class Partido{
    constructor(equipoA, equipoB, golesA, golesB) {
        this.equipoA = equipoA;
        this.equipoB = equipoB;
        this.golesA = golesA;
        this.golesB = golesB;
    }
}

let actualizar = document.getElementById("btnActualizarEquipos");
let local = document.getElementById("local");
let visitante = document.getElementById("visitante");
let equipoAEt = document.getElementById("equipoA");
let equipoBEt = document.getElementById("equipoB");
let equipoCEt = document.getElementById("equipoC");
let golesLocal = document.getElementById("golesLocal");
let golesVisitante = document.getElementById("golesVisitante");


function crearTriangular(){
    globalThis.triangularTorneo = new Triangular(equipoAEt.value, equipoBEt.value, equipoCEt.value);

    crearLocal(triangularTorneo.equipoA);
    crearLocal(triangularTorneo.equipoB);
    crearLocal(triangularTorneo.equipoC);
   
    crearVisitante(triangularTorneo.equipoA);
    crearVisitante(triangularTorneo.equipoB);
    crearVisitante(triangularTorneo.equipoC);
}

function jugarPartido(){
    const equipoLocal = local.selectedIndex;
    const equipoVisitante = visitante.selectedIndex;
    const opcionSeleccionadaLocal = local.options[equipoLocal];
    const opcionSeleccionadaVisitante = visitante.options[equipoVisitante];
    if (opcionSeleccionadaLocal.value != opcionSeleccionadaVisitante.value){
        triangularTorneo.jugar(opcionSeleccionadaLocal.value, opcionSeleccionadaVisitante.value, parseInt(golesLocal.value), parseInt(golesVisitante.value));
    }
    console.log(triangularTorneo.partidos)
}

function crearLocal(equipo){
    const option = document.createElement('option');
    option.value = equipo;
    option.text = equipo;
    local.appendChild(option);
}

function crearVisitante(equipo){
    const option = document.createElement('option');
    option.value = equipo;
    option.text = equipo;
    visitante.appendChild(option);
}




