// add money funtionality start
const pinNumber = 1234;
const bonusCupon = 'codebyanwar';
const transectionData = [];

// all fucntion start
function getNumberInputValueById(id){
    const inputFieldValueNumber= parseInt(document.getElementById(id).value);
    return inputFieldValueNumber;
}
function getInputValueForCupon(id){
    const cupoon = document.getElementById(id).value;
    return cupoon;
}
function getInnerTextValueById(id){
    const innerText = parseInt(document.getElementById(id).innerText);
    return innerText;
}
// all fucntion end

document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();

        // add money featured added
        const amountToAdd = getNumberInputValueById('amonut-to-add');
        const availableBalance = getInnerTextValueById('available-balance');

        if(amountToAdd<=0){
            alert('invalid amount');
            return;
        }

        // validation start
        const addMoneyBankAccountNumber = getNumberInputValueById('add-money-bank-account-number');
        const pinNumberInput = getNumberInputValueById('pin-number-input');

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

        // transection system start
            const transection = {
                transectionName: 'Add Money',
                transectionDate: new Date().toLocaleDateString()
            }

            transectionData.push(transection);
        // transection system end
    })

// add money function end


// Cashout function start
document.getElementById('withdraw-money')
    .addEventListener('click', function(e){
        e.preventDefault();

        const withdrawAmount = getNumberInputValueById('withdraw-amount');
        const availableBalance = getInnerTextValueById('available-balance');

        if(withdrawAmount>availableBalance || withdrawAmount <= 0){
            alert('invalid amount');
            return;
        }

        // validation start
        const agentNumber = getNumberInputValueById('agent-number');
        if(agentNumber.length < 11){
            alert('please give me a valid agent number')
            return;
        }
        const withdrawPin = getNumberInputValueById('withdraw-pin');
        if(pinNumber !== withdrawPin){
            alert('please enter your valid pin')
            return;
        }

        const newBalence = availableBalance - withdrawAmount;   
        document.getElementById('available-balance').innerText = newBalence;

        // transection system start
            const transection = {
                transectionName: 'Withdraw Money',
                transectionDate: new Date().toLocaleDateString()
            }

            transectionData.push(transection);
        // transection system end
    })
// Cashout function end

// Transfer money function start
document.getElementById('transfer-money-button')
    .addEventListener('click',function(e){
        e.preventDefault();

        const transferAmount = getNumberInputValueById('transfer-amount');
        const availableBalance = getInnerTextValueById('available-balance');

        if(transferAmount > availableBalance || transferAmount <= 0){
            alert('invalid amount');
            return;
        }

        // validation start
        const userAccountNumber = getNumberInputValueById('user-account-number');
        const userPin = getNumberInputValueById('user-pin');
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

        // transection system start
            const transection = {
                transectionName: 'Transfer Money',
                transectionDate: new Date().toLocaleDateString()
            }

            transectionData.push(transection);
        // transection system end
    })
// Transfer money function end

// bonus copun start
document.getElementById('bounus-coupon-button')
    .addEventListener('click', function(e){
        e.preventDefault();

        const availableBalance = getInnerTextValueById('available-balance');
        const bounusCoupon = getInputValueForCupon('bonus-coupon');
        if(bounusCoupon === bonusCupon){
            const newBalence = availableBalance + 333;
            document.getElementById('available-balance').innerText = newBalence;
        }
        else{
            alert('this coupon is not available in this time');
        }
        // transection system start
            const transection = {
                transectionName: 'Bonus Coupon',
                transectionDate: new Date().toLocaleDateString()
            }

            transectionData.push(transection);
        // transection system end
    })
// bonus copun end

// pay bill fuctionality start
document.getElementById('pay-bill-button')
    .addEventListener('click', function(e){
        e.preventDefault();

        // pay bill featured added
        const amountToPay = getNumberInputValueById('amount-to-pay');
        const availableBalance = getInnerTextValueById('available-balance');

        if(amountToPay > availableBalance || amountToPay <= 0){
            alert('invalid amount');
            return;
        }

        // validation start
        const payBillAccountNumber = getNumberInputValueById('pay-bill-account-numbar');
        const pinNumberTaken = getNumberInputValueById('pin-number-taken');

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

    // transection system start
        const transection = {
            transectionName: 'Pay Bill',
            transectionDate: new Date().toLocaleDateString()
        }

        transectionData.push(transection);
    // transection system end
    })
// pay bill fuctionality end

// form fuctionality start

    document.getElementById('add-money-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('add-money-form').style.display = 'block';
        })
    document.getElementById('cashout-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('cashout-form').style.display = 'block';
        })
    document.getElementById('transfer-money-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('transfer-money-form').style.display = 'block';
        })
    document.getElementById('get-bonus-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('get-bonus-form').style.display = 'block';
        })
    document.getElementById('pay-bill-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('pay-bill-form').style.display = 'block';
        })
    document.getElementById('transection-history-switch')
        .addEventListener('click', function(){

            const payooForm = document.getElementsByClassName('payoo-form');

            for (const form of payooForm){
                form.style.display = 'none';
            }

            document.getElementById('transaction-container').style.display = 'block';
        })
        
// form fuctionality end

// dynamic togling style start
document.getElementById('add-money-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');

        }

        document.getElementById('add-money-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('add-money-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
document.getElementById('cashout-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');
        }

        document.getElementById('cashout-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('cashout-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
document.getElementById('transfer-money-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');
        }

        document.getElementById('transfer-money-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('transfer-money-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
document.getElementById('get-bonus-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');
        }

        document.getElementById('get-bonus-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('get-bonus-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
document.getElementById('pay-bill-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');
        }

        document.getElementById('pay-bill-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('pay-bill-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
document.getElementById('transection-history-switch')
    .addEventListener('click', function(){
        const toglingClass = document.getElementsByClassName('form-btn');

        for(const togling of toglingClass){
            togling.classList.remove('border-[#0874F2]', 'bg-[#F3F8FE]');
            togling.classList.add('border-[#E6E6E6]');
        }

        document.getElementById('transection-history-switch').classList.remove('border-[#E6E6E6]')
        document.getElementById('transection-history-switch').classList.add('border-[#0874F2]', 'bg-[#F3F8FE]')
    })
// dynamic togling style end


// transection history section start
document.getElementById('transection-history-switch')
    .addEventListener('click', function(){
        const transectionHistory = document.getElementById('transection-history-form');
        transectionHistory.innerHTML = '';


        for(const data of transectionData){
            const div = document.createElement('div')

            div.innerHTML = `
                <div  class="mb-3.5">
                    <div class="flex justify-between items-center border border-[#E6E6E6] rounded-xl px-4 py-3 bg-white">
                        <div class="flex justify-between items-center gap-5">
                            <div class="rounded-full bg-[#F2F2F2] p-3">
                                <img src="./assets/purse1.png" alt="">
                            </div>
                            <div>
                                <h3 class="text-2 font-bold text-[#525252]">${data.transectionName}</h3>
                                <p class="text-[14px] text-[#525252]">${data.transectionDate}</p>
                            </div>
                        </div>
                        <i class="fa-solid fa-ellipsis-vertical"></i>
                    </div>
                </div>
            `
            transectionHistory.appendChild(div);
        }
    })

    // transection history section end