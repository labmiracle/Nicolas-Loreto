export function adn(string) {
    if (!string) {
        return '';
    }
    const array = string.split('');
    const adnArray = [];
    for (const i of array) {
        if (i === 'C') {
            adnArray.push(i);
        }
        if (i === 'T') {
            adnArray.push(i);
        }
        if (i === 'A') {
            adnArray.push(i);
        }
        if (i === 'G') {
            adnArray.push(i);
        }
    }
    return adnArray.join('');
}
adn('CTAGGasdQWEdGTA');
