var age = 10 

if(age >= 65){
    console.log("You get your income from your pension")
}
else if(age < 65 && age >= 18){
    console.log("Each month you get a salary")
}
else if(age < 18){
    console.log("You get an allowance")
}


else{console.log("The value is not numerical")
}

var day = "Happy Day"
switch(day){
    case 'Monday': console.log('Do Something');
    break;
    case 'Tuesday': console.log('Do Something');
    break;
    case 'Wednesday' : console.log('Do Something');
    break;
    case 'Thursday' : console.log('Do Something');
    break;
    case 'Friday' : console.log('Do Something'); 
    Break;
    case 'Saturday' : console.log('Do Something'); 
    break;
    case 'Sunday' : console.log('Do Nothing');
    break;
    default:
    console.log("there is no such day");
    break;
}