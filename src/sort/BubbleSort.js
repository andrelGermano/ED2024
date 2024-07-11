export function BubbleSort(lista){
    if(lista.length === 0){
        throw new Error("Lista vazia");
    }
    let trocado;
    do{
        trocado = false;
        for(let i=0; i<lista.length-1; i++){
            if(lista[i] > lista[i=1]){
                let aux = lista[i];
                lista[i] = lista[i+1];
                lista[i+1] = aux;
                trocado = true;
            }
        }
    }while(trocado);
    return lista;
}