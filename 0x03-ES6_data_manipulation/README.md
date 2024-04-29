# How to use map, filter and reduce on arrays

## Map

The `map()` method creates a new array with the results of calling a function for every array element.

const numbers = [1, 2, 3];

const doubled = numbers.map(x => x \* 2);

console.log(doubled); // [2, 4, 6]

This loops through the numbers array, multiplying each element by 2.

## Filter

The `filter()` method creates a new array with elements that pass a test provided by a function.

const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(x => x % 2 === 0);

console.log(evens); // [2, 4]

This filters the array to only include even numbers.

## Reduce

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, current) => {
return accumulator + current;
}, 0);

console.log(sum); // 15

This sums all the numbers, starting with an initial value of 0.

## Typed arrays

Typed arrays like Int8Array and Uint8Array represent fixed-size byte buffers. They provide a mechanism for reading and writing raw binary data in memory buffers.

## Set

The Set object lets you store unique values of any type.

const set = new Set([1, 2, 3, 2]);

console.log(set); // Set(3) {1, 2, 3}

## Map (Part 1)

The Map object holds key-value pairs and remembers the original insertion order of the keys.

const map = new Map();

map.set('a', 1);
map.set('b', 2);

console.log(map); // Map(2) {"a" => 1, "b" => 2}

## WeakMap

WeakMap is similar to Map but only accepts objects as keys, not arbitrary values. It doesn't prevent garbage collection of key objects.
