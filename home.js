// add money funtionality start
const pinNumber = 1234;
const bonusCupon = 'codebyanwar';

document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        // add money featured added
        const amountToAdd = parseInt(document.getElementById('amonut-to-add').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // validation start
        const addMoneyBankAccountNumber = document.getElementById('add-money-bank-account-number').value;
        const pinNumberInput = parseInt(document.getElementById('pin-number-input').value);

        if(addMoneyBankAccountNumber.length<11){
            alert('please give a valid bank account number')
            return;
        }
        if(pinNumber!==pinNumberInput){
            alert('Pin number is not right')
            return;
        }
        // validation end

        const newBalence = amountToAdd + availableBalance;
        document.getElementById('available-balance').innerText = newBalence;
    })

// add money function end


// Cashout function start
document.getElementById('withdraw-money')
    .addEventListener('click', function(e){
        e.preventDefault();

        const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // validation start
        const agentNumber = document.getElementById('agent-number').value;
        if(agentNumber.length < 11){
            alert('please give me a valid agent number')
            return;
        }
        const withdrawPin = parseInt(document.getElementById('withdraw-pin').value);
        if(pinNumber !== withdrawPin){
            alert('please enter your valid pin')
            return;
        }

        const newBalence = availableBalance - withdrawAmount;   
        document.getElementById('available-balance').innerText = newBalence;
    })
// Cashout function end

// Transfer money function start
document.getElementById('transfer-money-button')
    .addEventListener('click',function(e){
        e.preventDefault();

        const transferAmount = parseInt(document.getElementById('transfer-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // validation start
        const userAccountNumber = document.getElementById('user-account-number').value;
        const userPin = parseInt(document.getElementById('user-pin').value);
        if(userAccountNumber < 11){
            alert('Please give me a valid agent account number')
            return;
        }
        if(userPin !== pinNumber){
            alert('your given pin is wrong please try again')
            return
        }

        const newBalence = availableBalance - transferAmount;
        document.getElementById('available-balance').innerText = newBalence;
    })
// Transfer money function end

// bonus copun start
document.getElementById('bounus-coupon-button')
    .addEventListener('click', function(e){
        e.preventDefault();

        const availableBalance =parseInt(document.getElementById('available-balance').innerText);
        const bounusCoupon = document.getElementById('bonus-coupon').value;
        if(bounusCoupon === bonusCupon){
            const newBalence = availableBalance + 333;
            document.getElementById('available-balance').innerText = newBalence;
        }
        else{
            alert('this coupon is not available in this time');
        }
    })
// bonus copun end

// pay bill fuctionality start
document.getElementById('pay-bill-button')
    .addEventListener('click', function(e){
        e.preventDefault();

        // pay bill featured added
        const amountToPay = parseInt(document.getElementById('amount-to-pay').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        // validation start
        const payBillAccountNumber = document.getElementById('pay-bill-account-numbar').value;
        const pinNumberTaken = parseInt(document.getElementById('pin-number-taken').value);

        if(payBillAccountNumber.length<11){
            alert('please give a valid account number')
            return;
        }
        if(pinNumber!==pinNumberTaken){
            alert('Pin number is not right')
            return;
        }
        // validation end

        const newBalence =availableBalance - amountToPay;
        document.getElementById('available-balance').innerText = newBalence;
    })
// pay bill fuctionality end

// form fuctionality start
    document.getElementById('add-money-switch')
        .addEventListener('click', function(){
            document.getElementById('add-money-form').style.display = 'block';
            document.getElementById('cashout-form').style.display = 'none';
            document.getElementById('transfer-money-form').style.display = 'none';
            document.getElementById('get-bonus-form').style.display ='none';
            document.getElementById('pay-bill-form').style.display = 'none';
            document.getElementById('transection-history-form').style.display = 'none';
        })

    document.getElementById('cashout-switch')
        .addEventListener('click', function(){
            document.getElementById('cashout-form').style.display = 'block';
            document.getElementById('add-money-form').style.display = 'none';
            document.getElementById('transfer-money-form').style.display = 'none';
            document.getElementById('get-bonus-form').style.display ='none';
            document.getElementById('pay-bill-form').style.display = 'none';
            document.getElementById('transection-history-form').style.display = 'none';
        })
    document.getElementById('transfer-money-switch')
        .addEventListener('click', function(){
            document.getElementById('transfer-money-form').style.display = 'block';
            document.getElementById('add-money-form').style.display = 'none';
            document.getElementById('cashout-form').style.display = 'none';
            document.getElementById('get-bonus-form').style.display ='none';
            document.getElementById('pay-bill-form').style.display = 'none';
            document.getElementById('transection-history-form').style.display = 'none';
        })
    document.getElementById('get-bonus-switch')
        .addEventListener('click', function(){
            document.getElementById('get-bonus-form').style.display ='block';
            document.getElementById('add-money-form').style.display = 'none';
            document.getElementById('cashout-form').style.display = 'none';
            document.getElementById('transfer-money-form').style.display = 'none';
            document.getElementById('pay-bill-form').style.display = 'none';
            document.getElementById('transection-history-form').style.display = 'none';
        })
    document.getElementById('pay-bill-switch')
        .addEventListener('click', function(){
            document.getElementById('pay-bill-form').style.display = 'block';
            document.getElementById('add-money-form').style.display = 'none';
            document.getElementById('cashout-form').style.display = 'none';
            document.getElementById('transfer-money-form').style.display = 'none';
            document.getElementById('get-bonus-form').style.display ='none';
            document.getElementById('transection-history-form').style.display = 'none';
        })
    document.getElementById('transection-history-switch')
        .addEventListener('click', function(){
            document.getElementById('transection-history-form').style.display = 'block';
            document.getElementById('add-money-form').style.display = 'none';
            document.getElementById('cashout-form').style.display = 'none';
            document.getElementById('transfer-money-form').style.display = 'none';
            document.getElementById('get-bonus-form').style.display ='none';
            document.getElementById('pay-bill-form').style.display = 'none';
        })
// form fuctionality end