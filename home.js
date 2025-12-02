const pin = 1234;

document.getElementById('add-money-btn')
    .addEventListener('click', function(e){
        e.preventDefault();
        const bankName = document.getElementById('bank').value;
        const bankAccountNumber = document.getElementById('bank-account-number').value;
        const amount = parseInt(document.getElementById('amount').value);
        const pinNumber = parseInt(document.getElementById('pin-number').value);

        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        if(bankAccountNumber.length < 11){
            alert('Bank account number is not correct')
            return;
        }

        if(pin!==pinNumber){
            alert('Please input the value pin number')
            return;
        }

        const totalBalance = availableBalance + amount;

        document.getElementById('available-balance').innerText = totalBalance;

    })