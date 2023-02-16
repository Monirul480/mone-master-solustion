function getInputAmount(element){

    const inputAmount = document.getElementById(element).value;
    const inputAmountInt = parseInt(inputAmount)
    return inputAmountInt; 
}

function getInnerText(element,value){
    const innerTextValue = document.getElementById(element);
    innerTextValue.innerText = value;
}

    // problem 
    const foodAmount = getInputAmount('food-amount');
    console.log(foodAmount);
    // const rentAmount = getInputAmount('rent-amount');
    // const clothesAmount = getInputAmount('clothes-amount');
    // const income = getInputAmount('per-month-income');
    // const totalInputSum = foodAmount + rentAmount + clothesAmount;
    // const balance = income-totalInputSum;

document.getElementById('all-calculate-btn').addEventListener('click', function(){

    const foodAmount = getInputAmount('food-amount');
    const rentAmount = getInputAmount('rent-amount');
    const clothesAmount = getInputAmount('clothes-amount');
    const income = getInputAmount('per-month-income');

    if(!isNaN(foodAmount)&& foodAmount > 0 && !isNaN(rentAmount) && rentAmount > 0 && !isNaN(clothesAmount) && clothesAmount > 0 && !isNaN(income)&& income > 0){
        const totalInputSum = foodAmount + rentAmount + clothesAmount;
    if(income < totalInputSum){
        alert('Expenses are more than income Sir')
    }
    else{
        const balance = income-totalInputSum;
        getInnerText('total-expense', totalInputSum);
        getInnerText('balance',balance);
    }
    }
    else{
        alert('Please Input Number') 
    }
})

document.getElementById('save').addEventListener('click',function(){

    const income = getInputAmount('per-month-income');
    const percentage = getInputAmount('save-parcentage');
    const foodAmount = getInputAmount('food-amount');
    const rentAmount = getInputAmount('rent-amount');
    const clothesAmount = getInputAmount('clothes-amount');
    const totalInputSum = foodAmount + rentAmount + clothesAmount;
    const savingMoney = (income/100) * percentage; 
    const balance = income-totalInputSum;
    const reaming = balance - savingMoney;
    
    if(!isNaN(percentage) && percentage > 0){
        if(balance < savingMoney){
            alert("You don't have enough money to deposit")
        }
        else{   
            getInnerText('saving-amount', savingMoney);
            getInnerText('remining', reaming);
        }
    }
    else{
        alert('Please Input Number');
    }
})