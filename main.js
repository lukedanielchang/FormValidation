function validateForm(dataForm) {
    reason = "";
    reason += validateFName(dataForm.fName);
	reason += validateLName(dataForm.lName);
	reason += validateAddress(dataForm.address);
	reason += validateCity(dataForm.city);
	reason += validateState(dataForm.state);
	reason += validateZip(dataForm.zip);
	reason += validateAreacode(dataForm.areacode);
	
   /* reason += validateEmail(contact.email);
    reason += validatePhone(contact.phone);
    reason += validatePet(contact.pet);
    reason += validateNumber(contact.number);
    reason += validateDisclaimer(contact.disclaimer);*/

    console.log(reason);
    if (reason.length != null) {

        return false;
    } else {
        return false;
    }
}

// validate fName field
function validateFName(fName) {
    var error = "";

    if (fName.value == ""){
        fName.style.background = '#f4c2c2';
        document.getElementById('fNameError').innerHTML = "The required field has not been filled in";
        var error = "1";
    } else {
        fName.style.background = 'White';
        document.getElementById('fNameError').innerHTML = '';
    }
    return error;
}

function validateLName(lName) {
    var error = "";

    if (lName.value == ""){
        lName.style.background = '#f4c2c2';
        document.getElementById('lNameError').innerHTML = "The required field has not been filled in";
        var error = "2";
    } else {
        lName.style.background = 'White';
        document.getElementById('lNameError').innerHTML = '';
    }
    return error;
}

//Validate Address
function validateAddress(address) {
    var error = "";

    if (address.value == ""){
        address.style.background = '#f4c2c2';
        document.getElementById('addressError').innerHTML = "The required field has not been filled in";
        var error = "3";
    } else {
        lName.style.background = 'White';
        document.getElementById('addressError').innerHTML = '';
    }
    return error;
}

//Validate city
function validateCity(city) {
    var error = "";

    if (city.value == ""){
        city.style.background = '#f4c2c2';
        document.getElementById('cityError').innerHTML = "The required field has not been filled in";
        var error = "4";
    } else {
        city.style.background = 'White';
        document.getElementById('cityError').innerHTML = '';
    }
    return error;
}

//Validate state selection
function validateState(state) {
    var error = "";

    if (state.value == 'default'){
        state.style.background = '#f4c2c2';
        document.getElementById('stateError').innerHTML = "The required field has not been filled in";
        var error = "5";
    } else {
        state.style.background = 'White';
        document.getElementById('stateError').innerHTML = '';
    }
    return error;
}

//Validate zip selection
function validateZip(zip) {
	var intZip = parseInt(zip, 10);
    var error = "";

    if (zip.value == ""){
        zip.style.background = '#f4c2c2';
        document.getElementById('zipError').innerHTML = "The required field has not been filled in";
        var error = "6";
    } 
		else if(intZip === NaN){
		zip.style.background = '#f4c2c2';
        document.getElementById('zipError').innerHTML = "The required field has not been filled in";
        var error = "7";	
		console.log(typeof intZip);
		console.log(intZip);
		}
	else {
        zip.style.background = 'White';
        document.getElementById('zipError').innerHTML = '';
    }
    return error;
}

//validate areacodefunction validateZip(zip) {
	var intArea = parseInt(areacode, 10);
    var error = "";

    if (areacode.value == "" || areacode.length>3 || areacode < 3){
        areacode.style.background = '#f4c2c2';
        document.getElementById('phoneError').innerHTML = "The required field has not been filled in";
        var error = "6";
    } 
		else if(intArea === NaN){
		zip.style.background = '#f4c2c2';
        document.getElementById('zipError').innerHTML = "The required field has not been filled in";
        var error = "8";	
		}
	else {
        zip.style.background = 'White';
        document.getElementById('phoneError').innerHTML = '';
    }
    return error;
}


/*
// validate email as required field and format
function trim(s) {
    return s.replace(/^\s+|\s+$/, '');
}

function validateEmail(email) {
    var error = "";
    var temail = trim(email.value); // value of field with whitespace trimmed off
    var emailFilter = /^[^@]+@[^@.]+\.[^@]*\w\w$/;
    var illegalChars = /[\(\)\<\>\,\;\:\\\"\[\]]/;

    if (email.value == "") {
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Please enter an email address.";
        var error = "2";
    } else if (!emailFilter.test(temail)) { //test email for illegal characters
        email.style.background = 'Red';
        document.getElementById('email-error').innerHTML = "Please enter a valid email address.";
        var error = "3";
    } else if (email.value.match(illegalChars)) {
        email.style.background = 'Red';
        var error = "4";
        document.getElementById('email-error').innerHTML = "Email contains invalid characters.";
    } else {
        email.style.background = 'White';
        document.getElementById('email-error').innerHTML = '';
    }
    return error;
}

// validate phone for required and format
function validatePhone(phone) {
    var error = "";
    var stripped = phone.value.replace(/[\(\)\.\-\ ]/g, '');

    if (phone.value == "") {
        document.getElementById('phone-error').innerHTML = "Please enter a phone number";
        phone.style.background = 'Red';
        var error = '6';
    } else if (isNaN(parseInt(stripped))) {
        var error = "5";
        document.getElementById('phone-error').innerHTML = "The phone number contains illegal characters.";
        phone.style.background = 'Red';
    } else if (stripped.length < 10) {
        var error = "6";
        document.getElementById('phone-error').innerHTML = "The phone number is too short.";
        phone.style.background = 'Red';
    } else {
        phone.style.background = 'White';
        document.getElementById('phone-error').innerHTML = '';
    }
    return error;
}

function validatePet(pet) {
    if ((contact.pet[0].checked == false) && (contact.pet[1].checked == false) && (contact.pet[2].checked == false)) {
        document.getElementById('pet-error').innerHTML = "Pet required";
        var error = "2";
    } else {
        document.getElementById('pet-error').innerHTML = '';
    }
    return error;
}

function validateNumber(number) {
    var num = document.forms["contact"]["number"];
    var y = num.value;
    if (!isNaN(y)) {

        //alert('va');

        if (y < 0 || y > 50) {
            //Wrong
            number.style.background = 'Red';
            document.getElementById("number-error").innerHTML = "Must be between 0 and 50.";
            var error = "10";
        } else {
            //Correct
            number.style.background = 'White';
            document.getElementById("number-error").innerHTML = "";
        }
        return error;
    } else {
        document.getElementById("number-error").innerHTML = "Must be a number.";
        var error = "3";
    }
    return error;
}

function validateDisclaimer(disclaimer) {
    var error = "";

    if (document.getElementById("disclaimer").checked === false) {
        document.getElementById('disclaimer-error').innerHTML = "Required";
        var error = "4";
    } else {
        document.getElementById('disclaimer-error').innerHTML = '';
    }
    return error;
}*/