class Triangular {
    constructor(equipoA, equipoB, equipoC) {
        this.equipoA = equipoA;
        this.equipoB = equipoB;
        this.equipoC = equipoC;
        this.partidos = []
    }

    jugar(equipoA, equipoB, golesA, golesB) {
        const partido = new Partido(equipoA, equipoB, golesA, golesB);
        this.partidos.push(partido)
    }

    obtenerPartidosJugados(equipo) {
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo || this.equipoB == equipo) {
                number++;
            }
        });
        return number;
    }

    obtenerPartidosGanados(equipo) {
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA > partido.golesB) {
                number++;
            } else if (partido.equipoB == equipo && partido.golesB > partido.golesA) {
                number++;
            }
        });
        return number;
    }

    obtenerPartidosEmpatados(equipo) {
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA == partido.golesB) {
                number++;
            } else if (partido.equipoB == equipo && partido.golesB == partido.golesA) {
                number++;
            }
        });
        return number;
    }

    obtenerPartidosPerdidos(equipo) {
        let number = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo && partido.golesA < partido.golesB) {
                number++;
            } else if (partido.equipoB == equipo && partido.golesB < partido.golesA) {
                number++;
            }
        });
        return number;
    }

    obtenerGolesFavor(equipo) {
        let goles = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo) {
                number += partido.golesA;
            } else if (partido.equipoB == equipo) {
                number += partido.golesB;
            }
            if (partido.equipoA == equipo){
                goles += partido.golesA;
            }else if (partido.equipoB == equipo){
                goles += partido.golesB;
            } 
        });
        return goles;
    }

    obtenerGolesContra(equipo) {
        let goles = 0;
        this.partidos.forEach(partido => {
            if (partido.equipoA == equipo) {
                number += partido.golesB;
            } else if (partido.equipoB == equipo) {
                number += partido.golesA;
            }
        });
        return goles;
    }

    obtenerPuntos(equipo) {
        let puntos = this.obtenerPartidosGanados(equipo) * 3 + this.obtenerPartidosEmpatados(equipo);
        return puntos;
    }

    obtenerPuntosTotal(){
        let nombre1 = this.equipoA;
        let nombre2 = this.equipoB;
        let nombre3 = this.equipoC;
        return {nombre : this.obtenerPuntos(this.equipoA), nombre2: this.obtenerPuntos(this.equipoB), nombre3: this.obtenerPuntos(this.equipoC)}
    }

    obtenerNombres(){
        return [this.equipoA, this.equipoB, this.equipoC]
    }
}


class Partido {
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
let tabla = document.getElementById("tablaResultados");


function crearTriangular() {
    globalThis.triangularTorneo = new Triangular(equipoAEt.value, equipoBEt.value, equipoCEt.value);

    crearLocal(triangularTorneo.equipoA);
    crearLocal(triangularTorneo.equipoB);
    crearLocal(triangularTorneo.equipoC);

    crearVisitante(triangularTorneo.equipoA);
    crearVisitante(triangularTorneo.equipoB);
    crearVisitante(triangularTorneo.equipoC);
}

function jugarPartido() {
    const equipoLocal = local.selectedIndex;
    const equipoVisitante = visitante.selectedIndex;
    const opcionSeleccionadaLocal = local.options[equipoLocal];
    const opcionSeleccionadaVisitante = visitante.options[equipoVisitante];
    if (opcionSeleccionadaLocal.value != opcionSeleccionadaVisitante.value) {
        triangularTorneo.jugar(opcionSeleccionadaLocal.value, opcionSeleccionadaVisitante.value, parseInt(golesLocal.value), parseInt(golesVisitante.value));
    }
    console.log(triangularTorneo.partidos)
    actualizarTabla()
}

function crearLocal(equipo) {
    const option = document.createElement('option');
    option.value = equipo;
    option.text = equipo;
    local.appendChild(option);
}

function crearVisitante(equipo) {
    const option = document.createElement('option');
    option.value = equipo;
    option.text = equipo;
    visitante.appendChild(option);
}

function actualizarTabla(){
    let contador = 0
    triangularTorneo.obtenerNombres().forEach(element => {

        let fila = document.createElement("tr");
        let equipo = document.createElement("td");
        let columnaNombre = document.createElement("td");
        let columnaPJ = document.createElement("td");
        let columnaPG = document.createElement("td");
        let columnaPP = document.createElement("td");
        let columnaPE = document.createElement("td");
        let columnaGF = document.createElement("td");
        let columnaGC = document.createElement("td");
        let columnaPuntos = document.createElement("td");
        if (contador == 0){
            equipo.innerHTML = "EquipoA"
        }else if (contador == 1){
            equipo.innerHTML = "EquipoB"
        }else{
            equipo.innerHTML = "EquipoC"
        }
        columnaNombre.innerHTML = element
        columnaPJ.innerHTML = triangularTorneo.obtenerPartidosJugados(element);
        columnaPG.innerHTML = triangularTorneo.obtenerPartidosGanados(element);
        columnaPP.innerHTML = triangularTorneo.obtenerPartidosPerdidos(element);
        columnaPE.innerHTML = triangularTorneo.obtenerPartidosEmpatados(element);
        columnaGF.innerHTML = triangularTorneo.obtenerGolesFavor(element);
        columnaGC.innerHTML = triangularTorneo.obtenerGolesContra(element);
        columnaPuntos.innerHTML = triangularTorneo.obtenerPuntos(element);

        fila.appendChild(equipo);
        fila.appendChild(columnaNombre);
        fila.appendChild(columnaPJ);
        fila.appendChild(columnaPG);
        fila.appendChild(columnaPP);
        fila.appendChild(columnaPE);
        fila.appendChild(columnaGF);
        fila.appendChild(columnaGC);
        fila.appendChild(columnaPuntos);

        tabla.appendChild(fila);

        contador ++;
        
    });
} 
