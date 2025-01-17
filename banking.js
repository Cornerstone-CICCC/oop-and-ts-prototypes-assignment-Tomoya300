function Account(accountNumber, balance) {
    this._accountNumber = accountNumber
    this._balance = balance
}

Account.prototype.deposite = function(amount) {
    return this._balance += amount
}

Account.prototype.withdraw = function(amount) {
    return this._balance -= amount
}

function SavingAccount(accountNumber, balance, interestRate) {
    Account.call(this, accountNumber, balance)
    this._interestRate = interestRate
}

Account.prototype = Object.create(Account.prototype)
Account.prototype.constructor = SavingAccount

SavingAccount.prototype.addInterest = function() {
    return this._balance += (this._balance*this._interestRate)/100
}

SavingAccount.prototype.savingDeposite = function(amount) {
    return Account.prototype.deposite.call(this, amount)
}

SavingAccount.prototype.savingWithdraw = function(amount) {
    return Account.prototype.withdraw.call(this, amount)
}

function CheckingAccount(accountNumber, balance) {
    Account.call(this, accountNumber, balance)
}

Account.prototype = Object.create(Account.prototype)
Account.prototype.constructor = CheckingAccount

CheckingAccount.prototype.withdrawUsingCheck = function(amount) {
    return this._balance -= amount
}

CheckingAccount.prototype.checkDeposite = function(amount) {
    return Account.prototype.deposite.call(this, amount)
}


const account1 = new Account("123456", 4000)
console.log(account1._accountNumber)
console.log(account1._balance)
console.log(account1.deposite(650))
console.log(account1.withdraw(1000))
const saving1 = new SavingAccount("987654", 5000, 1.5)
console.log(saving1._accountNumber)
console.log(saving1._balance)
console.log(saving1.savingDeposite(650))
console.log(saving1.savingWithdraw(300))
console.log(saving1.addInterest())
const checking1 = new CheckingAccount("654321", 6000)
console.log(checking1._accountNumber)
console.log(checking1._balance)
console.log(checking1.withdrawUsingCheck(500))
console.log(checking1.checkDeposite(1250))