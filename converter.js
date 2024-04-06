import inquirer from "inquirer";
let currency = {
    USD: "1",
    EUR: "0.91",
    GBP: "0.79",
    INR: "83",
    PKR: "277"
};
let user_name = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        message: "Enter from currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        type: "list",
        message: "Enter to currency",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount"
    }
]);
let fromAmount = currency[user_name.from];
let toAmount = currency[user_name.to];
let amount = user_name.amount;
let baseAmount = amount / fromAmount; //changed into base amount($)
let convertedAmount = (baseAmount * toAmount).toFixed(2);
console.log(convertedAmount);
