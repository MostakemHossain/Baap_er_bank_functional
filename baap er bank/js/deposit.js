document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositAmount=getInputFieldById('deposit-field');

    const previousDepositTotal= getElementValueById('deposit-total');

    const currentDepositTotal= newDepositAmount+previousDepositTotal;

    setElementValueById('deposit-total',currentDepositTotal);


    const previousBalanceTotal=getElementValueById('balance-total');
    const newBalance=previousBalanceTotal+newDepositAmount;

    setElementValueById('balance-total',newBalance);

})