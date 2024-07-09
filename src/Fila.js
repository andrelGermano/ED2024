class Fila {

    constructor(capacidade = 5) {
        this.capacidade = capacidade; // Capacidade máxima da fila
        this.dados = []; // Array para armazenar os dados da fila
        this.inicio = 0; // Índice do primeiro elemento na fila
        this.fim = 0; // Índice após o último elemento na fila
    }

    enqueue(dado) {
        if (!this.isFull()) {
            this.dados[this.fim++] = dado; // Adiciona o dado ao final da fila e incrementa o índice do fim
            return;
        }
        throw new Error("Queueoverflow"); // Lança um erro caso a fila esteja cheia
    }

    dequeue() {
        if (!this.isEmpty()) {
            this.inicio++; // Incrementa o índice do início para remover o elemento do início da fila
            return;
        }
        throw new Error("Queueunderflow"); // Lança um erro caso a fila esteja vazia
    }

    front() {
        if (!this.isEmpty()) {
            return this.dados[this.inicio]; // Retorna o elemento no início da fila
        }
        throw new Error("empty queue"); // Lança um erro caso a fila esteja vazia
    }

    clear() {
        this.inicio = 0; // Define o índice do início como 0
        this.fim = 0; // Define o índice do fim como 0
    }

    isEmpty() {
        return this.inicio === this.fim; // Retorna true se o índice do início for igual ao índice do fim
    }

    isFull() {
        return this.length() === this.capacidade; // Retorna true se o comprimento da fila for igual à capacidade
    }

    length() {
        return this.fim - this.inicio; // Retorna a diferença entre o índice do fim e o índice do início
    }

    toString() {
        let resultado = '';
        for (let i = this.inicio; i < this.fim; i++) {
            resultado += this.dados[i] + " "; // Concatena os elementos da fila em uma string
        }

        return resultado; // Retorna a string com os elementos da fila
    }
}

export default Fila;
