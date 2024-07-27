// Define the base class Person
class Person {
    name: string; // Attribute for the person's name
    age: number;  // Attribute for the person's age

    // Constructor to initialize the Person object
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to display person's details
    displayDetails(): void {
        console.log(`Person: ${this.name}, Age: ${this.age}`);
    }
}

// Define the Employee class that inherits from Person
class Employee extends Person {
    jobTitle: string; // Attribute for the employee's job title

    // Constructor to initialize the Employee object
    constructor(name: string, age: number, jobTitle: string) {
        super(name, age);   // Call the constructor of the base class
        this.jobTitle = jobTitle;
    }

    // Override the displayDetails method to include job title
    displayDetails(): void {
        console.log(`Employee: ${this.name}, Age: ${this.age}, Job Title: ${this.jobTitle}`);
    }
}

// Create an instance of the Employee class
const employee = new Employee('Abhi', 22, 'Software Engineer');

// Call the method to display employee details
employee.displayDetails();  // Output: Employee: Abhi, Age: 22, Job Title: Software Engineer