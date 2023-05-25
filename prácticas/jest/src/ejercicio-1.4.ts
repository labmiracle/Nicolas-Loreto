export function sum(n: string[]): number {

    let result = 0;

    if (n.length === 0) {
        return 0;
    }

    for (const i of n) {

        if (typeof i === "number" && i > 0) {
            result += i;
        }

        if (typeof i === 'string') {

            const toNum = parseInt(i);
            if (toNum > 0) {
                result += toNum;
            }

        }
    }

    return result;
}

