# ES6 Classes

## How to define a Class

In ES6, a class is defined using the `class` keyword followed by the name of the class. Here's an example:

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}
}

## How to add methods to a class

Methods are defined inside the class body. Here's an example of adding a method to calculate the area of a rectangle:

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}

area() {
return this.height \* this.width;
}
}

## Why and how to add a static method to a class

Static methods are methods that are defined on the class itself, not on instances of the class. They are useful for utility functions or methods that don't require an instance of the class. To define a static method, use the `static` keyword before the method name:

class Rectangle {
constructor(height, width) {
this.height = height;
this.width = width;
}

area() {
return this.height \* this.width;
}

static createSquare(side) {
return new Rectangle(side, side);
}
}

## How to extend a class from another

ES6 classes support inheritance using the `extends` keyword. The child class inherits all properties and methods from the parent class. The child class can also override or extend the behavior of the parent class:

class Square extends Rectangle {
constructor(side) {
super(side, side);
}

area() {
return super.area();
}
}

## Metaprogramming and symbols

Metaprogramming in JavaScript involves modifying the behavior of objects at runtime. ES6 introduced symbols, which are a new primitive type that can be used as unique object property keys. Symbols are useful for creating private or unique properties and methods in classes.
