function userCard(number){
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    let key =number;
    let operationType;
    function getCardOptions(){
        return ` balance : ${balance} transaction Limit : ${transactionLimit} history Logs : ${historyLogs}
         key ${key}`
    }
   function putCredits(amount){
        balance += amount;
        operationType='received credits';
        saveLog(operationType,amount);
        return console.log(balance)
    }
    function takeCredits(amount){
        operationType = 'withdrawl of credits';
        saveLog(operationType,amount);
        if(transactionLimit>amount && balance>amount){
            balance-=amount;
            return console.log(balance);
        }else{
            return console.log('you want to take more than transactionLimit or balance')
        }
    }
    function setTransactionLimit(amount){
        transactionLimit=amount;
        operationType = 'transaction limit change';
        saveLog(operationType,amount);
        return console.log(`TransactionLimit : ${transactionLimit}`)
    }
    function transferCredits(amount, card){
        if(transactionLimit<amount || balance<amount){
            console.log(`transaction limit or balance are to small`)
        }else{
            let hundred=100;
            let amountOfPerCentes=0.5;
            let comision=amount/hundred*amountOfPerCentes;
            this.takeCredits(amount);
            card.putCredits(amount-comision);
            return console.log(`card that balance ${card.getBalance()}`);
        }
    }
    function saveLog(operationType,amount) {
        let d =new Date().toLocaleString('en-GB');
        historyLogs.push(`OpertionType : ${operationType} credits : ${amount} time ${d}`)
    }
    function getBalance() {
        return balance;
    }
    return{
        getCardOptions: getCardOptions,
        putCredits: putCredits,
        takeCredits: takeCredits,
        setTransactionLimit: setTransactionLimit,
        transferCredits: transferCredits,
        getBalance: getBalance
    }
}
class UserAccount{
    constructor(name) {
        this.name = name;
        this.cards = [];
        this.maxCards = 3;
    }

    addCard(){
        if(this.cards.length>=this.maxCards){
            console.log(`too many cards`)
        }else{
            this.cards.push(userCard(this.cards.length + 1));
        }
    }
    getCardByKey(key) {
        return this.cards[key - 1];
    }
}
