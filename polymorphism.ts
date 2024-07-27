// Base class
class Animal {
    // Method to be overridden in derived classes
    makeSound(): void {
        console.log('This animal makes a sound.');
    }
}

// Derived class for Dog
class Dog extends Animal {
    makeSound(): void {
        console.log('Woof! Woof!');
    }
}

// Derived class for Cat
class Cat extends Animal {
    makeSound(): void {
        console.log('Meow! Meow!');
    }
}

// Function to make an animal sound
function animalSound(animal: Animal) {
    animal.makeSound(); // The actual method that gets called is determined by the object's class
}

// Create instances of different animals
const myDog = new Dog();
const myCat = new Cat();

// Call the function with different types of animals
animalSound(myDog); // Output: Woof! Woof!
animalSound(myCat); // Output: Meow! Meow!