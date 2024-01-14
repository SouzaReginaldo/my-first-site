let weekdayNumber = 6;
let message = null;

switch (weekdayNumber) {
    case 1:
        message = "Monday";
        break;
    case 2:
        message = "Tuesday";
        break;    
    case 3:
        message = "Wednesday";
        break;        
    case 4:
        message = "Thursday";   
        break;
    case 5:
        message = "Friday";
        break;
    case 6:
        message = "Saturday";
        break;
    case 7:
        message = "Sunday";
        break;
        default:
        message = "Error: Please input a number bettwen 1 and 7";
    }
    console.log(message)
