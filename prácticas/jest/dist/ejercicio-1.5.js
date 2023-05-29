export function findRepeat (string) {
    const lowerCase = string.toLowerCase();
    const arr = lowerCase.split('');
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] != ' ') {
            return i;
        }
    }
    return -1;
}
