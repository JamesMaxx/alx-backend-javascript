# ES6 (ECMAScript 6) Overview

## What is ES6?

ES6, also known as ECMAScript 2015, is the sixth edition of the ECMAScript standard. It is a scripting language specification that JavaScript follows, introducing significant enhancements and new features to the language.

## New Features in ES6

ES6 introduced several new features to JavaScript, including:

- Arrow functions
- Classes
- Template literals
- Let and const for variable declarations
- Spread and rest operators
- Destructuring assignment
- Modules
- Promises
- Generators
- Iterators
- Maps and Sets
- Enhanced object literals
- Default function parameters
- Symbol data type
- and more.

## Constants vs Variables

- **Constants (`const`):** Declared using the `const` keyword, they are block-scoped variables that cannot be reassigned. Their value remains constant throughout the program execution within the block they are defined.
- **Variables (`let`):** Declared using the `let` keyword, they are also block-scoped variables but can be reassigned within the block they are defined.

## Block-Scoped Variables

Variables declared with `let` and `const` are block-scoped, meaning they are only accessible within the block in which they are defined. This differs from `var` declarations, which are function-scoped.

## Arrow Functions and Default Parameters

Arrow functions are a concise way to write function expressions in JavaScript. They also inherit the `this` value from their parent scope. Default parameters allow you to specify default values for function parameters if no value is provided.

## Rest and Spread Parameters

The rest parameter (`...args`) allows you to represent an indefinite number of arguments as an array in function definitions. The spread operator (`...`) allows you to expand arrays or iterables into individual elements.

## String Templating in ES6

Template literals (enclosed in backticks ``) allow for easier string interpolation and multiline strings. They support embedded expressions using `${}` syntax.

## Object Creation and Properties in ES6

ES6 introduced shorthand property syntax (`{ x, y }`) for object creation, computed property names (`{ [key]: value }`), and method definitions in object literals (`{ method() {} }`).

## Iterators and for-of Loops

ES6 introduced iterators and the `for-of` loop, providing a simple and concise way to iterate over arrays, strings, maps, sets, and other iterable objects.

These ES6 features significantly enhance the capabilities and readability of JavaScript code, making it more expressive and powerful.
