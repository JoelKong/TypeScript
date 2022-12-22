const dog = {
  name: "Elton",
  breed: "Australian Shepherd",
  age: 0.5,
};

function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
printName({ first: "Thomas", last: "Jenkins" });

let coordinate: { x: number; y: number } = { x: 34, y: 2 };

function randomCoordinate(): { x: number; y: number } {
  return { x: 2, y: 1 };
}

//Type Alias
type Point = {
  x: number;
  y: number;
};

let aaa: Point = { x: 34, y: 2 };

type myNum = number;
let age: myNum = 23234;
