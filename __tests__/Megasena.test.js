import Conjunto from "../src/Conjunto";
import verificarVencedor from "../src/Megasena";


beforeEach(
    () => {

    }
);

const numerosSorteados = new Conjunto();
numerosSorteados.add(7)
numerosSorteados.add(12)
numerosSorteados.add(25)
numerosSorteados.add(30)
numerosSorteados.add(45)
numerosSorteados.add(50)

test("Vencedor da quina é a aposta 2",
    () => {
    const apostas1 = [
        [1, 8, 9, 10, 11, 12],
        [12, 25, 30, 35, 50, 45], 
        [20, 21, 22, 23, 24, 25], 
        [3, 35, 40, 4, 5, 55]
    ];

    expect(verificarVencedor(numerosSorteados, apostas1)).toBe(true);
})

test("Vencedor da quina é a aposta 2 e 3",
    () => {
    const apostas1 = [
        [1, 8, 9, 10, 11, 12],
        [12, 25, 30, 35, 50, 45], 
        [7, 12, 25, 30, 24, 45], 
        [3, 35, 40, 4, 5, 55]
    ];

    expect(verificarVencedor(numerosSorteados, apostas1)).toBe(true);
})

test("Há vencedor da sena",
    () => {
    const apostas2 = [
        [7, 12, 25, 30, 45, 50],
        [11, 20, 31, 35, 40, 45], 
        [20, 21, 22, 23, 24, 25], 
        [31, 35, 40, 42, 50, 55]
    ];
    expect(verificarVencedor(numerosSorteados, apostas2)).toBe(true);
})

test("Não há vencedor",
    () => {
    const apostas3 = [
        [1, 2, 3, 4, 5, 6],
        [7, 8, 9, 10, 11, 12],
        [12, 25, 30, 35, 40, 45],
        [20, 21, 22, 23, 24, 25],
        [30, 35, 40, 45, 50, 55]
    ];

    expect(verificarVencedor(numerosSorteados, apostas3)).toBe(false);
})