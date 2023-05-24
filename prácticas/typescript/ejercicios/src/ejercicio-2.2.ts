function padLeft(value: string, padding: number | string): string {

    if (typeof padding === 'number' && padding >= 0) {
        return `${Array(padding + 1).join(' ')}${value}`;
    }
    else if (typeof padding === 'string') {
        return padding + value;
    }
    return 'los valores no son validos';
}

console.log('[Ejercicio 4.2]', `
${padLeft('', 7)}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
${padLeft('', '')}
`);
