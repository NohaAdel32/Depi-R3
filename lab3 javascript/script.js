"use strict"
//1
const accounts=[]
function generateAccountNum(){
 let accountNUM;
 do{
  accountNUM=Math.floor(1000000000+(10000000000-2)*Math.random());
 }while(accounts.some(acc=>acc.accountNumber===accountNUM));
return accountNUM;
}
function account(customerData){
    const createdAt =  new Date().toISOString(); 
    if(!customerData.firstName||!customerData.lastName){
         return "Forget The Name"
    }
    if(customerData.initialDeposit<50){
        return "The initial Deposit is less than $50"
    }
    accounts.push({ accountNumber:generateAccountNum(),
         firstName: customerData.firstName,lastName:customerData.lastName, balance:customerData.initialDeposit,createdAt:createdAt,})
    return accounts
}
console.log(account({
    firstName: "John",
  lastName: "Doe",
  initialDeposit: 100
}))
//////////////////////////////////////////////////////////////////
//2
let accout={
  accountNumber: "1000000001",
  balance: 100,
  transactions: []
}
function Depositmoney(account,Deposit){
    if (Deposit <= 0) throw new Error("Deposit amount must be positive");
      account.balance+=Deposit;
  account.transactions.push({
    type: "DEPOSIT",
    amount:Deposit,
    date: new Date().toISOString(),
    newBalance: account.balance
  });
 
    return account
}
console.log(Depositmoney(accout,200))
///////////////////////////////////////////////////////////////////////////////////////
//3
function ProcessWithdrawals(account,withdrawals){
   if (withdrawals <= 0) throw new Error("Withdrawal amount must be positive");
  if(withdrawals>account.balance){
    account.balance -=5
    account.transactions.push({
      type: "OVERDRAFT_ATTEMPT",
      amount:withdrawals ,
      date: new Date().toISOString(),
      penalty: 5})
    throw new Error("Reject if insufficient funds and $5 penalty for overdraft attempts");
  }else{
 account.balance -=withdrawals
  account.transactions.push({
     type: "WITHDRAWAL",
    amount:withdrawals ,
    date: new Date().toISOString(),
    newBalance:account.balance,
  });
  }
 
  return account
}
console.log(ProcessWithdrawals(accout,50))
//////////////////////////////////////////////////////////////////////////////////////////////
//4
const fromAccount = {
  accountNumber: "1000000001",
  balance: 100,
   transactions: []
};

const toAccount = {
  accountNumber: "1000000002",
  balance: 200,
   transactions: []
};
function transfer(fromAccount, toAccount, amount){
    if(!fromAccount && !toAccount) throw new Error("the account donot found");
    if (amount<= 0) throw new Error("Transfer amount must be positive");
    if(fromAccount.balance<amount) throw new Error("Insufficient funds");
     fromAccount.balance -=amount
     toAccount.balance +=amount
     //fromAccount
     fromAccount.transactions.push({
      type: "TRANSFER_OUT",
      to:fromAccount.accountNumber ,
      amount,
      date: new Date().toISOString(),
     })
     //toAccount
      toAccount.transactions.push({
      type: "TRANSFER_IN",
      from:fromAccount.accountNumber ,
      amount,
      date: new Date().toISOString(),
     })
     return [fromAccount, toAccount];
}
console.log(transfer(fromAccount,toAccount,50))
//////////////////////////////////////////////////////////////////////////////////////////
//5
let interestAcount={
  accountNumber: "1000000001",
  balance: 1000,
  type: "SAVINGS"
}
function CalculateMonthlyInterest(account){
  if(account.type !== "SAVINGS" ||account.balance<500){
    return account;
  }else{
    const interest=account.balance *0.00167
    account.balance +=  interest
    account.transactions.push({
     type: "INTEREST",
    amount: parseFloat(interest.toFixed(2)),
    date: new Date().toISOString(),
    })
  }
}
////////////////////////////////////////////////////////////////////////////////////
//6
let accountFilter={
  accountNumber: "1000000001",
  balance: 1000,
  transactions: [
     { date: "2025-08-01", type: "deposit", amount: 200 },
  { date: "2025-08-27", type: "withdrawal", amount:400 },
  { date: "2025-08-10", type: "deposit", amount: 100 },
  { date: "2025-08-27", type: "withdrawal", amount: 20 }
  ]
}

function filterAccount(account, filter = {}) {
  let result = account.transactions;

  if (filter.startDate && filter.endDate) {
    let startDate = new Date(filter.startDate);
    let endDate = new Date(filter.endDate);
    result = result.filter(dt => new Date(dt.date) >= startDate && new Date(dt.date) <= endDate);
  }

  if (filter.type) {
    result = result.filter(dt => dt.type === filter.type);
  }

  return result.sort((a, b) => new Date(b.date) - new Date(a.date));
}

console.log(filterAccount(accountFilter, {
  startDate: "2025-08-01",
  endDate: "2025-08-15",
  type: "deposit"
}));
///////////////////////////////////////////////////////////////////////////
//7
let stAccount={
  accountNumber: "1000000001",
  status: "ACTIVE",
  statusHistory:[]
}
function freezAccount(account,status,manager){
  if(account.status=="Freeze") return "Transaction not allowed";
    if (!["FREEZE", "UNFREEZE"].includes(status)) {
    throw new Error("Invalid action - must be FREEZE or UNFREEZE");
  }
  if(manager){
    account.status=status ==="FREEZE" ? "FROZEN" : "ACTIVE";

    account.statusHistory.push({
      action: account.status,
    by: manager,
    date: new Date().toISOString(),
    })
  }
  return account
}
console.log(freezAccount(stAccount, "FREEZE", "manager123"))
/////////////////////////////////////////////////////////////////////////////////////
//8
function withdrawalLimit(account,amount){
  let result=account.transactions
  let today = new Date().toISOString().split("T")[0];
  result=result.filter(ty=>ty.type==="withdrawal")
  result=result.filter(dt=>dt.date===today)
  let sum=result.reduce((accumlator,current)=>accumlator+current.amount,0)
  if(sum+amount>500)return("you cannot withdrawal")

return ProcessWithdrawals(account,amount)
 
}
console.log(withdrawalLimit(accountFilter,80))
//////////////////////////////////////////////////////////////////////////////////
//9
function validatePassword(password){
   const errors = [];
  const commonPasswords = ["password", "123456", "qwerty"];
  if(password.length<12) {
     errors.push("Password must be at least 12 characters");
  }
if (!/[A-Z]/.test(password)) {
    errors.push("Password must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    errors.push("Password must contain at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    errors.push("Password must contain at least one number");
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push("Password must contain a special character");
  }
  if (commonPasswords.includes(password.toLowerCase())) {
    errors.push("Password is too common");
  }

  return {
    valid: errors.length === 0,
    reasons: errors
  };
}
////////////////////////////////////////////////////////////////////////////////////
//10
let susAccount={
  transactions: [
  { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:00:00Z" },
  { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:02:00Z" },
  { type: "WITHDRAWAL", amount: 300, date: "2023-11-15T10:04:00Z" },
  { type: "TRANSFER_OUT", amount: 15000, date: "2023-11-15T09:00:00Z" }
]
}
function checkForSuspiciousActivity(account){
  let result=account.transactions
   .filter(t => t.type === "WITHDRAWAL")
    .sort((a, b) => new Date(a.date) - new Date(b.date));
   const errors = {
     isSuspicious:false,
    alerts:[]
   };
  result.forEach(element => {
   if( element.amount>10000)  {
  errors.isSuspicious=true
   errors.alerts.push(`High-value transaction: $${t.amount} ${t.type.toLowerCase()}`);
   }

  });
  for(let i=2;i<result.length;i++){
    const timediff=(new Date(result[i].date)-new Date(result[i-2].date))
    if(timediff<5){
       errors.isSuspicious=true
      errors.alerts.push(`Rapid withdrawals: ${i+1} transactions within ${Math.ceil(timeDiff)} minutes`);
      break;
    }
  }
return errors
}
console.log(checkForSuspiciousActivity(susAccount))