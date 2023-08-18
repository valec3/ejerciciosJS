function fibonacciBucle(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const fibSeq = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSeq.push(fibSeq[i - 1] + fibSeq[i - 2]);
    }
    return fibSeq;
}

const n = 10;
const fibNumbers = fibonacciBucle(n);
console.log(fibNumbers); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
