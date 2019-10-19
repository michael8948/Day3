
var object = {
    id: 1828238198,
    currency: "RMB",
    interest: 0.01,
    balance: 0,
    moneyIn: function(amount) {
        var newBalance = this.balance + amount
        this.balance= newBalance
    },
    moneyOut: function(amount) {
        if (amount > this.balance){
            console.log("Not enough money")
        } else {
            var newBalance = this.balance - amount
            this.balance = newBalance
            console.log("You have spent " + amount)
        }
    },
    createdAt:  "2019/10/19",

}
// object.moneyIn(1000)
// object.moneyOut(100)
// console.log(object)

module.exports = object