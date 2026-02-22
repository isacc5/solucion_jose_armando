class GrafoMatriz {
    constructor() {
        this.vertices = [];
        this.matriz = [];
    }
    agregarVertice(vertice) {
        this.vertices.push(vertice);
        for (let fila of this.matriz) {
            fila.push(0);
        }
        let nuevaFila = new Array(this.vertices.length).fill(0);
        this.matriz.push(nuevaFila);
    }
    agregarArista(v1, v2) {
        let i = this.vertices.indexOf(v1);
        let j = this.vertices.indexOf(v2);
        if (i !== -1 && j !== -1) {
            this.matriz[i][j] = 1;
            this.matriz[j][i] = 1; 
        }
    }
    mostrarMatriz() {
        console.log("Matriz de Adyacencia:");
        console.log("   ", this.vertices.join("  "));
        for (let i = 0; i < this.matriz.length; i++) {
            console.log(this.vertices[i] + "  ", this.matriz[i].join("  "));
        }
    }
}
const grafo = new GrafoMatriz();
grafo.agregarVertice("A");
grafo.agregarVertice("B");
grafo.agregarVertice("C");
grafo.agregarVertice("D");
grafo.agregarArista("A", "B");
grafo.agregarArista("B", "C");
grafo.agregarArista("C", "D");
grafo.agregarArista("D", "A");
grafo.mostrarMatriz();