interface Person {
  name: string;
  height: string;
  mass: string;
  eye_color: string;
  gender: string;
}

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

function getName(arr: Person[]): {} {
  const map = arr.map((n) => n.name);

  return map;
}

function getHeight(arr: Person[]) {
  const map = arr.map((h) => h.height);
  return map;
}

function getNameAndHeight(arr: Person[]) {
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

function filterMassGreaterThan100(arr: Person[]) {
  const filteredMass = arr.filter((m) => {
    if (typeof m.mass !== "number") {
      const massToNum = parseInt(m.mass);
      return massToNum > 100;
    }
  });
  return filteredMass;
}

filterMassGreaterThan100(characters);

function filterHeightMinorThan200(arr: Person[]) {
  const filteredHeight = arr.filter((h) => {
    if (typeof h.height !== "number") {
      const heightToNum = parseInt(h.height);
      return heightToNum < 200;
    }
  });
  return filteredHeight;
}

filterHeightMinorThan200(characters);

function filterByMale(arr: Person[]) {
  const filterMale = arr.filter((g) => {
    return g.gender === "male";
  });
  return filterMale;
}

filterByMale(characters);

function filterByFemale(arr: Person[]) {
  const filterFemale = arr.filter((g) => {
    return g.gender === "female";
  });
  return filterFemale;
}

filterByFemale(characters);

// sort()

function sortByName(arr: Person[]) {
  const sortedByName = arr.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedByName;
}

sortByName(characters);

function sortByMass(arr: Person[]) {
  const sortedByMass = arr.sort(function (a, b) {
    return parseInt(a.mass) - parseInt(b.mass);
  });
  return sortedByMass;
}

sortByMass(characters);

function sortByHeight(arr: Person[]) {
  const sortedByHeight = arr.sort(function (a, b) {
    return parseInt(a.height) - parseInt(b.height);
  });
  return sortedByHeight;
}

sortByHeight(characters);

function sortByGender(arr: Person[]) {
  const sortedByGender = arr.sort(function (a, b) {
    if (a.gender < b.gender) {
      return -1;
    } else if (a.gender > b.gender) {
      return 1;
    } else {
      return 0;
    }
  });
  return sortedByGender;
}

sortByGender(characters);

// every()

function everyBlueEyes(arr: Person[]) {
  const everyAreBlueEyes = arr.every((e) => {
    return e.eye_color === "blue";
  });

  return everyAreBlueEyes;
}

function everyMassGreaterThan40(arr: Person[]) {
  const everyAreGreaterThan40 = arr.every((e) => {
    return parseInt(e.mass) > 40;
  });

  return everyAreGreaterThan40;
}

function everyHeightMinorThan200(arr: Person[]) {
  const everyAreMinorThan200 = arr.every((e) => {
    return parseInt(e.height) > 200;
  });

  return everyAreMinorThan200;
}

function everyMale(arr: Person[]) {
  const everyAreMale = arr.every((e) => {
    return e.gender === "male";
  });

  return everyAreMale;
}

// some()

function someMale(arr: Person[]) {
  const isThereSomeMale = arr.some((e) => {
    return e.gender === "male";
  });
  return isThereSomeMale;
}

function someBlueEyes(arr: Person[]) {
  const isThereSomeBlueEyes = arr.some((e) => {
    return e.eye_color === "blue";
  });
  return isThereSomeBlueEyes;
}

function someHeightGreaterThan200(arr: Person[]) {
  const someGreaterThan200 = arr.some((e) => {
    return parseInt(e.height) > 200;
  });

  return someGreaterThan200;
}

function someMassMinorThan50(arr: Person[]) {
  const someMinorThan50 = arr.some((e) => {
    return parseInt(e.mass) < 50;
  });

  return someMinorThan50;
}
