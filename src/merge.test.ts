import { merge } from './merge';

describe("merge", () => {
    it("should merge two sorted arrays", () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6, 8, 10];
        const mergedCollection = merge(collection1, collection2);
        expect(mergedCollection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    });

    it("should merge two sorted arrays with different length", () => {
        const collection1 = [1, 3, 5, 7, 9];
        const collection2 = [2, 4, 6, 8, 10, 11, 12, 13, 14];
        const mergedCollection = merge(collection1, collection2);
        expect(mergedCollection).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]);
    });

    it("should merge two empty arrays into an empty array", () => {
        expect(merge([], [])).toEqual([]);
    });

    it("should merge two empty arrays into an empty array", () => {
        expect(merge([], [])).toEqual([]);
    });

    it("should merge two arrays with one element each", () => {
        expect(merge([1], [2])).toEqual([1, 2]);
        expect(merge([2], [1])).toEqual([1, 2]);
    });

    it("should merge two arrays with multiple elements each", () => {
        expect(merge([1, 3, 5], [2, 4, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([2, 4, 6], [1, 3, 5])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
        expect(merge([4, 5, 6], [1, 2, 3])).toEqual([1, 2, 3, 4, 5, 6]);
    });
});