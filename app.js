console.log("Hello World!\n==========\n");

// Exercise 1: Section
console.log("EXERCISE 1:\n==========\n");
function plus(number) {
  return function (plusNumber) {
    return number + plusNumber;
  };
}
let plus15 = plus(15);
console.log(plus15(10));

// Exercise 2: forEach
console.log("EXERCISE 2:\n==========\n");
let users = [
  {
    name: "Frodo",
    age: 50,
    score: 85,
    isActive: false,
  },
  {
    name: "Sam",
    age: 38,
    score: 94,
    isActive: true,
  },
  {
    name: "Merry",
    age: 36,
    score: 82,
    isActive: true,
  },
  {
    name: "Pippin",
    age: 26,
    score: 77,
    isActive: false,
  },
];

users.forEach((user) => console.log(user.name));

// Exercise 3: map
console.log("EXERCISE 3:\n==========\n");

let newUsersMap = users.map((user) => {
  return `name: ${user.name}, score: ${user.score}`;
});

console.log(newUsersMap);

// Exercise 4: filter
console.log("EXERCISE 4:\n==========\n");
let newUsersFilter = users.filter((user) => {
  return user.isActive;
});

console.log(newUsersFilter);

// Exercise 5: sort
console.log("EXERCISE 5:\n==========\n");
let newUsersSort = users.sort(
  (a, b) => parseFloat(a.score) - parseFloat(b.score)
);

// Exercise 6: reduce
console.log("EXERCISE 6:\n==========\n");
let newUsersReduce = users.reduce((totalScore, user) => {
  return (totalScore += user.score);
}, 0);

console.log(newUsersReduce);
