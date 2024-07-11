// import { BubbleSort } from "../../src/sort/BubbleSort.js";

// let list;

// test("Melhor caso", () => {
//     list = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10];
//     expect(BubbleSort(list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });

// test("Pior caso", () => {
//     list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
//     expect(BubbleSort(list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// });

// test("Lista vazia", () => {
//     list = [];
//     expect(() => BubbleSort(list)).toThrow("Empty list");
// });

import { BubbleSort } from "../../src/sort/BubbleSort"

let list;

test("Melhor caso", ()=> {
    list = [1, 2, 3, 4, 6, 5, 7, 8, 9, 10];
    expect(BubbleSort(list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Pior caso", ()=> {
    list = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
    expect(BubbleSort(list)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

test("Lista vazia", ()=>{
    list = [];
    expect(()=> BubbleSort(list)).toThrow("Empty list");
});