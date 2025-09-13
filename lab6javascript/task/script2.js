function BankAccount(accountNumber ,balance){
 this._accountNumber=accountNumber;
 this._balance=balance;

this.getAccountNumber=function(){
    return this._accountNumber;
}
this.setAccountNumber=function(accountNumber){
    if(!accountNumber)throw new Error("Account number is required");
    return this._accountNumber=accountNumber;
}
this.getBalance=function(){
    return this._balance;
}
this.setBalance=function(balance){
  if(balance<0)throw new Error("Balance cannot be negative");
return this._balance
}

}
BankAccount.prototype.Deposit=function(amount){
    if (amount <= 0) throw new Error("Deposit must be positive");
    this._balance +=amount
    return this._balance
}
BankAccount.Transfer=function(sender,receiver,amount){
    if(sender._balance==0 || sender._balance<amount){
        throw new Error("the balance is not enough")
    }
   sender._balance -=amount;
   receiver._balance +=amount;
   return "the transfer is done"

}
const mohamed=new BankAccount(121212121,1000)
const ahmed=new BankAccount(12158521,2000)
console.log(mohamed.Deposit(500))
console.log(BankAccount.Transfer(ahmed,mohamed,200))
console.log(mohamed)
