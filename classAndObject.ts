// Define the Car class
class Car {
    make: string; // Attribute for the car's make
    model: string; // Attribute for the car's model
    year: number; // Attribute for the car's year

    // Constructor to initialize the Car object
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    // Method to display the car's details
    displayDetails(): void {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

// Create instances of the Car class (objects)
const mycar = new Car('Lexus', 'ES', 2023);

// Call the displayDetails method on the mycar instance
// mycar.displayDetails();
