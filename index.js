// start with strings, numbers and booleans
// let name1 = "lucas";

// let name2 = name1;
// console.log(name1, name2);

// name1 = "bob";
// console.log(name1, name2);

// Let's say we have an array
const players = ["Wes", "Sarah", "Ryan", "Poppy"];

// and we want to make a copy of it.
// const team = players;
// console.log(team, players)

// You might think we can just do something like this:
// team[3] = "lucky";
// however what happens when we update that array?
// console.log(team, players)
// now here is the problem!

// oh no - we have edited the original array too!

// Why? It's because that is an array reference, not an array copy. They both point to the same array!

// So, how do we fix this? We take a copy instead!

// one way
const team = players.slice();
console.log(team);
console.log(players);
team[3] = "Lucas";
console.log(team);
console.log(players);
// or create a new array and concat the old one in
const team2 = [].concat(players);
team2[3] = "Maxi";
console.log(players);
console.log(team2);
// or use the new ES6 Spread
const team3 = [...players];
team3[3] = "Charlie";
console.log(players);
console.log(team3);
// now when we update it, the original one isn't changed
const team4 = Array.from(players);
team4[2] = "Alan";
console.log(team4);
console.log(players);

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
  name: "Wes Bos",
  age: 80,
};

// and think we make a copy:
const cap = person;
console.log(person, cap);
// cap.number = 99;
console.log(person, cap);
// how do we take a copy instead?
const cap2 = Object.assign({}, person, { age: 28, number: 21 });
console.log(person, cap2);

// We will hopefully soon see the object ...spread
const cap3 = { ...person, age: 23, lastName: "Montecino" };

cap3.number = 25;
console.log(person, cap3);

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
