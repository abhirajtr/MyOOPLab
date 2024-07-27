// Define the BankAccount class with encapsulation
class BankAccount {
    private balance: number;    // Private attribute to store the account balance
    public accountHolderName: string; // Public attribute for the account holder's name

    constructor(initialBalance: number, accountHolderName: string) {
        this.balance = initialBalance;
        this.accountHolderName = accountHolderName;
    }

    // Public method to deposit money into the account
    deposit(amount: number) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log('Deposit amount must be positive.');
        }
    }

    // Public method to withdraw money from the account
    withdraw(amount: number) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrew $${amount}. New balance is $${this.balance}.`);
        } else {
            console.log('Invalid withdrawal amount.');
        }
    }

    // Public method to get the current balance (read-only)
    getBalance(): number {
        return this.balance;
    }
}

// Create an instance of BankAccount
const myAccount = new BankAccount(1000, 'Alice Johnson');

myAccount.deposit(500);   // Output: Deposited $500. New balance is $1500.
myAccount.withdraw(200);  // Output: Withdrew $200. New balance is $1300.
console.log(myAccount.getBalance()); // Output: 1300
// console.log(myAccount.balance); // Error: Property 'balance' is private and only accessible within class 'BankAccount'.
// myAccount.balance = 3000; // Error: Property 'balance' is private and only accessible within class 'BankAccount'.

// Access the public variable directly
console.log(myAccount.accountHolderName); // Output: Alice Johnson

// Modifying the public variable
myAccount.accountHolderName = 'Bob Smith';
console.log(myAccount.accountHolderName); // Output: Bob Smith