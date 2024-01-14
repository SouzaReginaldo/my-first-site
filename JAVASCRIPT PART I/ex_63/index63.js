var year = 2015;

// Definir variável campeã e atribuir valor entre 2006 e 2017
var champion = null;

switch (year) {
    case 2006:
        champion = "Carolina Hurricanes";
        break;
    case 2007:
        champion = "Anaheim Ducks";
        break;
    case 2008:
        champion = "Detroit Red Wings";
        break;
    case 2009:
        champion = "Pittsburgh Penguins";
        break;
    case 2010:
        champion = "Chicago Blackhawks";
        break;
    case 2011:
        champion = "Boston Bruins";
        break;
    case 2012:
        champion = "Los Angeles Kings";
        break;
    case 2013:
        champion = "Chicago Blackhawks";
        break;
    case 2014:
        champion = "Los Angeles Kings";
        break;
    case 2015:
        champion = "Chicago Blackhawks";
        break;
    case 2016:
        champion = "Pittsburgh Penguins";
        break;
    case 2017:
        champion = "Pittsburgh Penguins";
        break;
    default:
        console.error("Sorry, please try a differnt year");
}

if (champion !== null) {
    console.log(champion + " was the " + year + " NHL Champion");
}