/* SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes

Objective

Preloaded for you is a class Dog:

class Dog {
  constructor(name, age, gender, species, size, master, loyal) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = species;
    this.legs = 4;
    this.size = size;
    this.master = master;
    this.loyal = loyal;
  }
}
You are then given a working class Labrador as your initial code.

class Labrador {
  constructor(name, age, gender, master) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.species = "Labrador";
    this.legs = 4;
    this.size = "Large";
    this.master = master;
    this.loyal = true;
  }
}
Shorten it so that it meets the strict character count requirements for this Kata.

Quick, get your timer out and get ready to time yourself. Are you ready? Ready, get set, GO!!! :D

Starter code:

class Labrador {
    constructor(name, age, gender, master) {
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.species = "Labrador";
      this.legs = 4;
      this.size = "Large";
      this.master = master;
      this.loyal = true;
    }
  }
*/

// Solution 1:

class Labrador extends Dog{
    constructor(n, a, g, m) {
      super(n,a,g, 'Labrador', 'Large', m, true)
    }
  }

// Solution 2:

class Labrador extends Dog{
    constructor(n, a, g, m) {
      super(n)
      this.age = a;
      this.gender = g;
      this.species = "Labrador";
      this.legs = 4;
      this.size = "Large";
      this.master = m;
      this.loyal = true;
    }
  }