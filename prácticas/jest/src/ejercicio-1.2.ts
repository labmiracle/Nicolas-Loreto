export function isLeapYear(year: number): boolean {

    switch (year > 0) {
        case year % 100 === 0 && year % 400 != 0:
            return false;
        case year % 4 === 0:
            return true;
        default:
            return false;
    }

}

isLeapYear(2000);