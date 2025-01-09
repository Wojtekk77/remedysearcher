export const isArraySubset = (a, b) => {
    return a.every(item => b.includes(item));
}
