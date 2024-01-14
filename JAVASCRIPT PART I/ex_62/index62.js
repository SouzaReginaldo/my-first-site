var monthNumber = 12;
var monthName = null;
var monthDays = null;

switch (monthNumber) {
    case 1:
        monthName = "January";
        monthDays = 31;
        break;
    case 2:
        monthName = "February";
        monthDays = 28;
        break;
    case 3:
        monthName = "March";
        monthDays = 31;
        break;
    case 4:
        monthName = "April";
        monthDays = 30;
        break;
    case 5:
        monthName = "May";
        monthDays = 31;
        break;
    case 6:
        monthName = "June";
        monthDays = 30;
        break;
    case 7:
        monthName = "July";
        monthDays = 31;
        break;
    case 8:
        monthName = "August";
        monthDays = 31;
        break;
    case 9:
        monthName = "September";
        monthDays = 30;
        break;
    case 10:
        monthName = "October";
        monthDays = 31;
        break;
    case 11:
        monthName = "November";
        monthDays = 30;
        break;
    case 12:
        monthName = "December";
        monthDays = 31;
        break;
    default:
        console.error("Invalid month number");
}

// Check if monthName & monthDays are null
if (monthName === null || monthDays === null) {
    console.error("Error: Month information not available");
} else {
    // Display the message
    console.log(monthName + " is the selected month and has " + monthDays + " days.");
}