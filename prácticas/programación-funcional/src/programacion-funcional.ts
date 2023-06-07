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

function filterMassMinorThan100(arr: Person[]) {
  const filteredMass = arr.filter((m) => {
    if (typeof m.mass !== "number") {
      const massToNum = parseInt(m.mass);
      return massToNum > 100;
    }
  });
  return filteredMass;
}

filterMassMinorThan100(characters);
