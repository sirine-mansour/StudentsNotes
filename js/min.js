//recuperation des champs du formulaire
const fullName = document.querySelector('.fullName'); //recuperation de champs fullName
const dateOfBirth = document.querySelector('.dateOfBirth');
const gender= document.querySelector('select[name="gender"]');
const task1 = document.querySelector('.task1');
const task2 = document.querySelector('.task2');
const task3 = document.querySelector('.task3');
 //recuperation des boutons
const result = document.querySelector('.result');
const submit = document.querySelector('.submit');
const reset = document.querySelector('.reset');
//validation rules fullName
function validatefullName (fullName) {
// check if the full name is required
    if(!fullName) {
        return "Full name is required.";
    }
    // check the legth of the full name
    if (fullName.length < 3 || fullName > 20 ){
   return "Full name must be between 3 and 20 characters long.";
}
   //check the format of the full name
   if (!/^[a-zA-Z]+$/.test(fullName)) {
      return "Full name must contain only letters and spaces.";
   }
   return null;
}
function validateDate(date) {
    if (!date) {
        return "Date is required.";
    }
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        return "date must be in the format YYYY-MM-DD"
    }
    const today =  new Date();
    if(date > today){
        return"Date must be between today and one year from today";
    }
    return null;

}
function validateGender(gender) {
    if(!gender) {
        return "Gender is required.";

    }
    const validGenders = ["Male", "Female"];
    if (!validGenders.includes(gender)){
        return "Gender must be a valid value.";
    }
    return null;
}



// afficher les valeurs des champs
submit.addEventListener('click' , (event) => {
    //calculer le resultat
 const total = ((parseInt(task1.value) + parseInt(task2.value) + parseInt(task3.value)) /3);
    console.log(dateOfBirth.value)
    const today =  new Date();
    const minDate=new Date (today.getFullYear(), today.getMonth(), today.getDate());
    const maxDate=new Date (today.getFullYear() +1, today.getMonth(), today.getDate());
    console.log(maxDate);
    console.log (minDate);
    console.log(today)
    if ( validatefullName(fullName.value) !== null) {
        alert (validatefullName (fullName.value))
        return;
    } 
    if (validateDate (dateOfBirth.value) !== null) {
        alert (validateDate (dateOfBirth.value))
    return;
}
if (validateGender (gender.value) !== null) {
    alert (validateGender (gender.value))
return;
}

// Afficher le resultat dans le champ "Result"
result.innerHTML =
` <h1>Full Name :</h1>${fullName.value}
 <h1>Birth date :</h1>${dateOfBirth.value}
 <h1>Gender :</h1>${gender.value}
 <h1>Average:</h1>${total}
 <h1>Mark:</h1>${total >=10 ?"Succeed" :"Fail"} 
 
 `;
 
 
 

});
reset.addEventListener('click', () => {
    result.innerHTML = ""
    fullName.value =""
    dateOfBirth.value =""
    task1.value =""
    task2.value =""
    task3.value =""
 });
 