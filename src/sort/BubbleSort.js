export function BubbleSort(list) {
    if (list.length === 0) {
        throw new Error("Empty list");
    }
    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < list.length - 1; i++) {
            if (list[i] > list[i + 1]) {
                let temp = list[i];
                list[i] = list[i + 1];
                list[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return list;
}
// export function BubbleSort(list){

// }