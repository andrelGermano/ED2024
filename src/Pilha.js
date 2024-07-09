class Pilha{

    constructor(tam = 5){
        this.dados = [];
        this.topo = 0;
        this.tam = tam;
    }

    push(dado) {
        if (!this.isFull()) {
            this.dados[this.topo++] = dado;
            return;
        }
        throw new Error("Stackoverflow");
    }

    pop() {
        if (!this.isEmpty()) {
            this.topo--;
            return;
        }
        throw new Error("Stackunderflow");
    }

    top(){
        return this.dados[this.topo-1];
    }

    clear() {
        this.topo = 0;
    }

    size() {
        return this.topo;
    }

    isEmpty() {
        return this.size() === 0;
    }

    isFull(){
        return this.size() === this.tam;
    }

    toString() {
        let texto = "";
        for (let i = 0; i < this.topo; i++) {
            texto += this.dados[i] + " ";
        }
        return texto.trim();
    }

    asArray(){
        let  resultado = [];
        for(let i = 0; i <= this.topo; i++){
            resultado.push(this.dados[i]);
        }
        return resultado;
    }
}

export default Pilha;