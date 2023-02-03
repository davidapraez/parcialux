class Triangular{
    constructor(equipoA, equipoB, equipoC){
        this.equipoA = equipoA;
        this.equipoB = equipoB;
        this.equipoC = equipoC;
        this.partidos = []
    }

    jugar(equipoA, equipoB, golesA, golesB){
        const partido = Partido(equipoA, equipoB, golesA, golesB);
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