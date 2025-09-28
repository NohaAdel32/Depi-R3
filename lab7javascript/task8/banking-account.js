class BankAccount{
    #accountNumber;
     #balance;
     #accountType;
     #transactionHistory;
     constructor(accountNumber,initialBalance,accountType){
         if(new.target === BankAccount) {
            throw new Error("Cannot inistantiate abstract class Account")
        }
        this.#accountNumber=accountNumber;
        this.#balance=initialBalance;
        this.#accountType=accountType;
         this.#transactionHistory = [];
     
       this.#transactionHistory.push({
      type: "Initial Deposit",
      amount:initialBalance,
      date: new Date().toISOString(),
     });
    }

    deposite(amount){
        if(amount<0) throw new Error("Withdrawal amount must be positive");
        this.#balance +=amount;
         this.#transactionHistory.push({
      type: " Deposit",
      amount,
      date: new Date().toISOString(),
     });
      console.log(`Successfully deposited ${amount}. New balance: ${this.#balance}`);
    }

    withdraw(amount){
    if(amount <= 0) {
            throw new Error("Withdrawal amount must be positive")
        }
        if(amount > this.#balance) {
            throw new Error("Insufficient Funds")
        }
        this.#balance -= amount;
        console.log(`${amount} is withdrawn from account ${this.accountNumber}, New Balance : ${this.#balance}`) 
    }
   getBalance() {
    return this.#balance;
  }

  getTransactionHistory() {
    return [...this.#transactionHistory];
  }
  transferFunds(amount, targetAccount){
      if(amount<0) throw new Error("Withdrawal amount must be positive");
      if(!(targetAccount instanceof BankAccount)) throw new Error('Target account is not a valid BankAccount instance.')
      if(amount>this.#balance)throw new Error('Insufficient funds for the transfer.')
     this.#balance -=amount;
         this.#transactionHistory.push({
      type: " Transfer Out",
      to:targetAccount.#accountNumber,
      amount,
      date: new Date().toISOString(),
     });
     
    targetAccount.#transactionHistory.push({
      type: 'Transfer In',
      amount,
      from: this.#accountNumber,
      date: new Date().toISOString(),
    });
    }

    applyInterest(rate) {
        if(rate<=0) throw new Error("the interest must be positive")
        if(this.#accountType!=="Saving")throw new Error('Interest can only be applied to a savings account.')
        const interest = this.#balance * (rate / 100)
        this.#balance += interest;
           this.#transactionHistory.push({
      type: "Apply Interest",
      rate:rate,
      amount:interest,
      date: new Date().toISOString(),
     });
        console.log(`Interest for Saving Accout No. ${this.accountNumber} : ${interest}`)
       
    }
    getAccountSummary() {
  return {
    accountNumber: this.#accountNumber,
    balance: this.#balance,
    accountType: this.#accountType
  };
}
}