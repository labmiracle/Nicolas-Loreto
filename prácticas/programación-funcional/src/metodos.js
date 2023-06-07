"use strict";
const characters = [
    {
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        eye_color: "blue",
        gender: "male",
    },
    {
        name: "Darth Vader",
        height: "202",
        mass: "136",
        eye_color: "yellow",
        gender: "male",
    },
    {
        name: "Leia Organa",
        height: "150",
        mass: "49",
        eye_color: "brown",
        gender: "female",
    },
    {
        name: "Anakin Skywalker",
        height: "188",
        mass: "84",
        eye_color: "blue",
        gender: "male",
    },
];
// map()
function getName(arr) {
    const map = arr.map((n) => n.name);
    return map;
}
function getHeight(arr) {
    const map = arr.map((h) => h.height);
    return map;
}
function getNameAndHeight(arr) {
    const map = arr.map((o) => {
        return {
            name: o.name,
            height: o.height,
        };
    });
    return map;
}
getName(characters);
getHeight(characters);
getNameAndHeight(characters);
// filter()
function filterMassGreaterThan100(arr) {
    const filteredMass = arr.filter((m) => {
        if (typeof m.mass !== "number") {
            const massToNum = parseInt(m.mass);
            return massToNum > 100;
        }
    });
    return filteredMass;
}
filterMassGreaterThan100(characters);
function filterHeightMinorThan200(arr) {
    const filteredHeight = arr.filter((h) => {
        if (typeof h.height !== "number") {
            const heightToNum = parseInt(h.height);
            return heightToNum < 200;
        }
    });
    return filteredHeight;
}
filterHeightMinorThan200(characters);
function filterByMale(arr) {
    const filterMale = arr.filter((g) => {
        return g.gender === "male";
    });
    return filterMale;
}
filterByMale(characters);
function filterByFemale(arr) {
    const filterFemale = arr.filter((g) => {
        return g.gender === "female";
    });
    return filterFemale;
}
filterByFemale(characters);
// sort()
function sortByName(arr) {
    const sortedByName = arr.sort(function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        else if (a.name > b.name) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return sortedByName;
}
sortByName(characters);
function sortByMass(arr) {
    const sortedByMass = arr.sort(function (a, b) {
        return parseInt(a.mass) - parseInt(b.mass);
    });
    return sortedByMass;
}
sortByMass(characters);
function sortByHeight(arr) {
    const sortedByHeight = arr.sort(function (a, b) {
        return parseInt(a.height) - parseInt(b.height);
    });
    return sortedByHeight;
}
sortByHeight(characters);
function sortByGender(arr) {
    const sortedByGender = arr.sort(function (a, b) {
        if (a.gender < b.gender) {
            return -1;
        }
        else if (a.gender > b.gender) {
            return 1;
        }
        else {
            return 0;
        }
    });
    return sortedByGender;
}
sortByGender(characters);
// every()
function everyBlueEyes(arr) {
    const everyAreBlueEyes = arr.every((e) => {
        return e.eye_color === "blue";
    });
    return everyAreBlueEyes;
}
function everyMassGreaterThan40(arr) {
    const everyAreGreaterThan40 = arr.every((e) => {
        return parseInt(e.mass) > 40;
    });
    return everyAreGreaterThan40;
}
function everyHeightMinorThan200(arr) {
    const everyAreMinorThan200 = arr.every((e) => {
        return parseInt(e.height) > 200;
    });
    return everyAreMinorThan200;
}
function everyMale(arr) {
    const everyAreMale = arr.every((e) => {
        return e.gender === "male";
    });
    return everyAreMale;
}
// some()
function someMale(arr) {
    const isThereSomeMale = arr.some((e) => {
        return e.gender === "male";
    });
    return isThereSomeMale;
}
function someBlueEyes(arr) {
    const isThereSomeBlueEyes = arr.some((e) => {
        return e.eye_color === "blue";
    });
    return isThereSomeBlueEyes;
}
