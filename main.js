function validateForm(dataForm){
var fNameData = document.forms["dataForm"]["fName"].value;
var lNameData = document.forms["dataForm"]["lName"].value;
var addressData = document.forms["dataForm"]["address"].value;
var cityData = document.forms["dataForm"]["city"].value;
var stateData = document.forms["dataForm"]["state"].value;
var zipData = document.forms["dataForm"]["zip"].value;
var areacodeData = document.forms["dataForm"]["areacode"].value;
var numberData = document.forms["dataForm"]["number"].value;
var emailData = document.forms["dataForm"]["email"].value;
var cEmailData = document.forms["dataForm"]["cEmail"].value;
var mealData = document.forms["dataForm"]["meal"].value;
var contactData = document.forms["dataForm"]["contact"].value;
var alphaExp = /^[a-zA-Z]+$/;


//checkFirstName(fNameData);
if (fNameData!="" && fNameData.match(alphaExp)){
		document.getElementById("fName").classList.remove("error");
		return true;
	}
	else{
		document.getElementById("fName").classList.add("error");
		return false;
	}
}
//check for empty fName input
/*	if (fNameData==""){
		document.getElementById("fName").classList.add("error");
		return false;
	}
	else{
		document.getElementById("fName").classList.remove("error");
	}

//check for empty lName input
if(lNameData===""){
	document.getElementById("lName").classList.add("error");
	return false;
}
	else{
		document.getElementById("lName)".classList.remove("error");
	}
*/
//checklName(lNameData);
//checkAddress(addressData);
//checkCity(cityData);
//checkState(stateData);
//checkZip(zipData);
//checkAreaCode(areacodeData);
//checkNumber(numberData);
//checkEmail(emailData);
//checkEmail(cEmailData);
//compareEmail(emailData, cEmailData);
//checkMeal(mealData);
//checkContactSelection(contactData);

/*function to check the first name*/
/*function AlphaOnlyValidation(nameData){
	if(nameData==="a"){
		return false;
	}
	else{
	console.log("okay?");
	return;
	}
}
*/
/*function to check the last name
function checklName(lnameData){
	if (nameData==""){
		document.getElementById("lName").classList.add("error");
		return false;
	}
	else{
		document.getElementById("lName").classList.remove("error");
	}
}
*/
/*function to check the address name
function checkAddress(nameData){
	if (nameData==""){
		document.getElementById("address").classList.add("error");
		return false;
	}
	else{
		document.getElementById("address").classList.remove("error");
	}
}
*/
/*function to check the city
function checkCity(nameData){
	if (nameData==""){
		document.getElementById("city").classList.add("error");
		return false;
	}
	else{
		document.getElementById("city").classList.remove("error");
	}
}*/
/*function checks state selection
function checkState(nameData){
	if(nameData=="default"){
		document.getElementById("state").classList.add("error");
		return false;
	}
	else{
		document.getElementById("state").classList.remove("error");
		return true;
	}
}*/

/*function to check the zip
function checklName(nameData){
	if (nameData=="" || nameData.length>5 || nameData.length<5){
		document.getElementById("zip").classList.add("error");
		return false;
	}
	else{
		document.getElementById("zip").classList.remove("error");
		return true;
	}
}
*/
/*function to check the areacode
function checkAreaCode(nameData){
	if (nameData=="" || nameData.length>3 || nameData.length<3){
		document.getElementById("areacode").classList.add("error");
		return false;
	}
	else{
		document.getElementById("areacode").classList.remove("error");
		return true;
	}
}
*/
/*function to check the zip
function checkAreaCode(nameData){
	if (nameData=="" || nameData.length>8|| nameData.length<8 || !NaN(nameData)){
		document.getElementById("number").classList.add("error");
		return false;
	}
	else{
		document.getElementById("number").classList.remove("error");
		return true;
	}
}


}*/

/*var elements = document.querySelectorAll("#dataForm input[type=text");
	for (var i=0; element; element = elements[i++]){
		if (elements[i].value===""){
			element.classList.add("error");
			return false;
		}
	}
}
//validate first name is not empty
if(fNameData==""){
	document.getElementById("fName").classList.add("error");
	return false;
	}
else if(!re.test(dataForm.fName.value)){
	document.getElementById("fName").classList.add("error");
	return false;
}
else{
	document.getElementById("fName").classList.remove("error");
}

//validate last name is not empty	
if(lNameData==""){
	document.getElementById("lName").classList.add("error");
		return false;
}
else{
	document.getElementById("lName").classList.remove("error");
}

//validate address is not empty	
if(addressData==""){
	document.getElementById("address").classList.add("error");
		return false;
}
else{
	document.getElementById("address").classList.remove("error");
}		

//validate city is not empty	
if(cityData==""){
	document.getElementById("city").classList.add("error");
		return false;
}
else{
	document.getElementById("city").classList.remove("error");
}

//validate state was selected
if(stateData=="default"){
	document.getElementById("state").classList.add("error");
		return false;
}
else{
	document.getElementById("state").classList.remove("error");
}		

//validate zip is not empty	
if(isNaN(zipData) || zipData=="" || zipData.length>5 || zipData.length<5){
	document.getElementById("zip").classList.add("error");
		return false;
}
else{
	document.getElementById("zip").classList.remove("error");
}	

//validate phone area is not empty	
if(isNaN(areacodeData) || areacodeData==""){
	document.getElementById("area").classList.add("error");
		return false;
}
else{
	document.getElementById("area").classList.remove("error");
}

//validate phone number is not empty	
if(isNan(numberData) || numberData==""){
	document.getElementById("number").classList.add("error");
		return false;
}
else{
	document.getElementById("number").classList.remove("error");
}
}*/