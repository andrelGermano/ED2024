class Node {
    constructor(dado) {
        this.dado = dado;
        this.anterior = null;
        this.proximo = null;
    }
}

class ListaDuplamenteLigada {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    add(dado) {
        let novo_no = new Node(dado);
        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }
        novo_no.proximo = this.head;
        this.head.anterior = novo_no;
        this.head = novo_no;
    }

    append(dado) {
        let novo_no = new Node(dado);
        if (this.isEmpty()) {
            this.head = novo_no;
            this.tail = novo_no;
            return;
        }
        novo_no.anterior = this.tail;
        this.tail.proximo = novo_no;
        this.tail = novo_no;
    }

    removeFirst() {
        if (!this.isEmpty()) {
            if (this.length() === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.head = this.head.proximo;
                this.head.anterior = null;
            }
        }
    }

    remove(dado){
        if (!this.isEmpty()) {
            let aux = this.head;
            if(this.head.dado === dado){
                return this.removeFirst();
            }
            if(this.tail.dado === dado){
                return this.removeLast();
            }

            while(aux.dado !== dado){
                aux = aux.proximo;
            }

            let aux2 = aux.proximo;
            let aux3 = aux.anterior;
            
            aux2.anterior = aux3;
            aux3.proximo = aux2;

            return true;
        }

        return false;
    }

    removeLast() {
        if (!this.isEmpty()) {
            if (this.length() === 1) {
                this.head = null;
                this.tail = null;
            } else {
                this.tail = this.tail.anterior;
                this.tail.proximo = null;
            }
        }
    }

    isEmpty() {
        return this.head === null;
    }

    toString() {
        let tmp = this.head;
        let texto = "";

        while (tmp != null) {
            texto += tmp.dado + (tmp.proximo ? "->" : "");
            tmp = tmp.proximo;
        }

        return texto;
    }

    length() {
        let cont = 0;
        let tmp = this.head;

        while (tmp != null) {
            tmp = tmp.proximo;
            cont++;
        }
        return cont;
    }
    
    addAt(posicao, dado) {
        if (posicao >= this.length()) {
            this.append(dado);
            return;
        }
        if (posicao <= 0) {
            this.add(dado);
            return;
        }

        let novo_no = new Node(dado);
        let i = 0;
        let aux_a = this.head

        while (i != posicao-1) {
            aux_a = aux_a.proximo;
            i++;
        }
        let aux_b = aux_a.proximo;

        aux_a.proximo = novo_no;
        novo_no.anterior = aux_a;
        novo_no.proximo = aux_b;
        aux_b.anterior = novo_no;
    }

    

    asArray() {
        let current = this.head;
        let dados = [];

        while (current != null) {
            dados.push(current.dado);
            current = current.proximo;
        }

        return dados;
    }

    search(dado) {
        if (this.isEmpty()) {
            return false;
        } else {
            let tmp = this.head;
            while (tmp !== null) {
                if (tmp.dado == dado) {
                    return true;
                }
                //iteração
                tmp = tmp.proximo;
            }
            return false;
        }
    }

    clear() {
        this.head = null;
        this.tail = null;
    }
}

export default ListaDuplamenteLigada;