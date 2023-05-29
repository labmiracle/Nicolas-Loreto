export function findMaxRepeat(arr: (string | number)[]): number {

    const toNum: number[] = [];
    arr.forEach(element => {
        toNum.push(parseFloat(String(element)));
    });

    const isCeroOrOne = toNum.every(n => n === 0 || n === 1);

    let count = 0;

    let maxRepeated = 0;

    if (isCeroOrOne) {
        for (let i = 0; i < toNum.length; i++) {
            if (toNum[i] === 1) {
                count++;
            }
            else if (toNum[i] === 0) {
                if (count > maxRepeated) {
                    maxRepeated = count;

                } count = 0;
            }
        }
        if (count > maxRepeated) {
            maxRepeated = count;
        } return maxRepeated;
    } return -1;

}