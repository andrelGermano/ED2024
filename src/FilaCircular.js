class FilaCircular {

    constructor(capacidade = 5) {
        this.capacidade = capacidade; // Capacidade máxima da fila
        this.inicio = 0; // Índice do início da fila
        this.fim = 0; // Índice após o último elemento da fila
        this.dados = []; // Array para armazenar os dados da fila
    }

    enqueue(dado) { 
        if (!this.isFull()) {
            if (this.fim < this.capacidade) {
                this.dados[this.fim++] = dado; // Adiciona o dado ao final da fila e incrementa o índice do fim
            } else {
                this.fim = 0;
                this.dados[this.fim++] = dado; // Adiciona o dado ao início da fila (pois é circular) e incrementa o índice do fim
            }
            return;
        }
        throw new Error("Queueoverflow"); // Lança um erro caso a fila esteja cheia
    }

    dequeue() { 
        if (!this.isEmpty()) {
            if (this.inicio + 1 < this.capacidade) {
                this.inicio++; // Incrementa o índice do início para remover o elemento do início da fila
            } else {
                this.inicio = 0; // Define o índice do início como 0, pois a fila é circular
            }
            return;
        }
        throw new Error("Queueunderflow"); // Lança um erro caso a fila esteja vazia
    }

    front() {
        if (this.inicio < this.capacidade)
            return this.dados[this.inicio]; // Retorna o elemento no início da fila
        else
            return this.dados[0]; // Retorna o elemento no início da fila (fila circular)
    }

    isEmpty() {
        return this.inicio === this.fim; // Retorna true se o índice do início for igual ao índice do fim
    }

    isFull() {
        return (this.length() === this.capacidade) || (this.fim + 1 == this.inicio); // Retorna true se a fila estiver cheia ou se o próximo índice após o fim for igual ao índice do início (fila circular)
    }

    clear() { 
        this.inicio = 0; // Define o índice do início como 0
        this.fim = 0; // Define o índice do fim como 0
    }

    toString() { 
        let resposta = "";
        if (this.inicio < this.fim) {
            for (let i = this.inicio; i < this.fim; i++) {
                resposta += this.dados[i]; // Concatena os elementos da fila em uma string
            }
        } else {
            for (let i = this.inicio; i < this.capacidade; i++) {
                resposta += this.dados[i]; // Concatena os elementos da fila em uma string
            }
            if (this.fim != 0) {
                for (let i = 0; i < this.fim; i++) {
                    resposta += this.dados[i]; // Concatena os elementos da fila em uma string
                }
            }
        }
        return resposta; // Retorna a string com os elementos da fila
    }

    /**
     * Retorna a quantidade de elementos presentes na fila.
     * @return {number} - Número de elementos na fila
     */
    length() {
        if (this.inicio < this.fim) {
            return this.fim - this.inicio; // Retorna a diferença entre o índice do fim e o índice do início
        } else if (this.inicio > this.fim) {
            return this.capacidade - this.inicio + this.fim + 1; // Retorna a diferença entre a capacidade e o índice do início mais o índice do fim mais 1 (fila circular)
        }
        return 0; // Retorna 0 se a fila estiver vazia
    }
}

export default FilaCircular;