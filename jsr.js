class GrafoLista {

    constructor() {
        this.listaAdyacencia = {};
    }

    agregarVertice(vertice) {
        if (!this.listaAdyacencia[vertice]) {
            this.listaAdyacencia[vertice] = [];
        }
    }

    agregarArista(v1, v2) {
        this.listaAdyacencia[v1].push(v2);
        this.listaAdyacencia[v2].push(v1);
    }

    mostrarGrafo() {
        let resultado = "Lista de Adyacencia:\n";
        for (let vertice in this.listaAdyacencia) {
            resultado += vertice + " -> [" + this.listaAdyacencia[vertice].join(", ") + "]\n";
        }
        mostrarEnPantalla(resultado);
    }

    
    dfs(inicio) {
        let visitados = new Set();
        let resultado = [];

        const recorrer = (vertice) => {
            if (!vertice) return;
            visitados.add(vertice);
            resultado.push(vertice);

            for (let vecino of this.listaAdyacencia[vertice]) {
                if (!visitados.has(vecino)) {
                    recorrer(vecino);
                }
            }
        };

        recorrer(inicio);
        return resultado;
    }


    bfs(inicio) {
        let visitados = new Set();
        let cola = [inicio];
        let resultado = [];

        visitados.add(inicio);

        while (cola.length > 0) {
            let vertice = cola.shift();
            resultado.push(vertice);

            for (let vecino of this.listaAdyacencia[vertice]) {
                if (!visitados.has(vecino)) {
                    visitados.add(vecino);
                    cola.push(vecino);
                }
            }
        }

        return resultado;
    }
}


let grafo = new GrafoLista();


function configurarGrafo() {
    grafo = new GrafoLista();

    grafo.agregarVertice("A");
    grafo.agregarVertice("B");
    grafo.agregarVertice("C");
    grafo.agregarVertice("D");

    grafo.agregarArista("A", "B");
    grafo.agregarArista("A", "C");
    grafo.agregarArista("B", "D");
}


function mostrarEnPantalla(texto) {
    document.getElementById("salida").textContent = texto;
}
function probarGrafo() {
    configurarGrafo();
    grafo.mostrarGrafo();
}


function ejecutarDFS() {
    configurarGrafo();
    let resultado = grafo.dfs("A");
    mostrarEnPantalla("Recorrido DFS desde A:\n" + resultado.join(" → "));
}


function ejecutarBFS() {
    configurarGrafo();
    let resultado = grafo.bfs("A");
    mostrarEnPantalla("Recorrido BFS desde A:\n" + resultado.join(" → "));
}