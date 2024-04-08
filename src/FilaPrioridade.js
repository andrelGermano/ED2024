class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
	}
}

class FilaPrioridade {
	constructor() {
		this.tree = [];
		this.size = 0;

		this.tree[0] = new Node(0, 99999999);
	}

	/*
	Incremente o valor de size;
	Dados[size] recebe o valor inserido;
	Compare a prioridade desse novo nó com seu pai.
	Se a prioridade do pai for menor que filho, coloque o pai na posição do filho.
	Repita as etapas 3 e 4 até que a prioridade do pai seja maior ou igual ao filho.	*/

	add(dado, prioridade) {
		let novo_no = new Node(dado, prioridade);
		this.size++;
		this.tree[this.size] = novo_no;
	
		let pos_filho = this.size;
		let pos_pai = Math.trunc(pos_filho / 2);
	
		while (pos_filho > 1 && this.tree[pos_filho].priority > this.tree[pos_pai].priority) {
			let aux = this.tree[pos_filho];
			this.tree[pos_filho] = this.tree[pos_pai];
			this.tree[pos_pai] = aux;
	
			pos_filho = pos_pai;
			pos_pai = Math.trunc(pos_filho / 2);
		}
	}

	/*
	Remover o nó raiz.
	Mover o último elemento do último nível para a raiz.
	Comparar o valor desse pai com seu filho.
	Se o valor do pai for menor que filho, troque-os.
	Repita as etapas 3 e 4 até que a prioridade do pai seja maior ou igual ao filho.
	*/
	remove() {
		if (this.isEmpty()) throw new Error("Queue UnderFlow");
	
		let elemento_maior_prioridade = this.tree[1];
		let ultimo = this.tree[this.size];
		this.size--;
	
		let pos_pai = 1;
		let pos_filho = 2;
	
		while (pos_filho <= this.size) {
			if (pos_filho < this.size && this.tree[pos_filho].priority < this.tree[pos_filho + 1].priority) {
				pos_filho++;
			}
			if (ultimo.priority >= this.tree[pos_filho].priority) {
				break;
			}
			this.tree[pos_pai] = this.tree[pos_filho];
			pos_pai = pos_filho;
			pos_filho *= 2;
		}
	
		this.tree[pos_pai] = ultimo;
		return elemento_maior_prioridade.priority;
	}

	/**
	 * Caminha pelo Array Tree
	 * Incrementa a variável convert com os dados de cadad index
	 * Retorna convert
	 */
	asArray() {
		if (this.isEmpty()) return '';
		let convert = '';
		for (let index = 1; index <= this.size; index++) {
			convert += this.tree[index].data;
		}
		return convert;
	}

	lastInput() {
		if (this.isEmpty()) throw new Error("Queue UnderFlow");
		return this.tree[this.size].data;
	}

	isEmpty(){
        return this.size === 0
    }
}

export default FilaPrioridade;