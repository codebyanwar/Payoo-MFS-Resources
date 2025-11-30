// login button fungtionality

document.getElementById('loginBtn')
    .addEventListener('click', function(e){
        e.preventDefault()
        
        const mobileNumber = 123456789;
        const accoutpin = 1234;

        const getInputMobileNumber = document.getElementById('mobile-number').value;
        const getInputPinNumber = document.getElementById('account-pin').value;

        const inputMobileNumberConverted = parseInt(getInputMobileNumber);
        const inputAccountPinConverted = parseInt(getInputPinNumber);

        if(mobileNumber===inputMobileNumberConverted && accoutpin===inputAccountPinConverted){
            window.location.href='./home.html';
        }else{
            alert('invalid cradintial');
        }
    })