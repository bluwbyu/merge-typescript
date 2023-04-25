export function merge(collection1: number[], collection2: number[]): number[] {
    const mergedCollection = [];
    let i = 0, j = 0;

    while (i < collection1.length && j < collection2.length) {
        if (collection1[i] < collection2[j]) {
            mergedCollection.push(collection1[i]);
            i++;
        } else {
            mergedCollection.push(collection2[j]);
            j++;
        }
    }

    while (i < collection1.length) {
        mergedCollection.push(collection1[i]);
        i++;
    }

    while (j < collection2.length) {
        mergedCollection.push(collection2[j]);
        j++;
    }

    return mergedCollection;
}