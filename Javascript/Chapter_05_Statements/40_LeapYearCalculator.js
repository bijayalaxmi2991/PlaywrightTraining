// Leap Year Checker:
// Create a program that determines whether a given year is a leap year. A leap year is divisible by 4, but not by 100 unless it is also divisible by 400. Use an if-else statement to make this determination.



for (let year = 2000; year <= 2040; year++) {
    let result = false;
    if (year % 400 == 0) result = true;
    else if(year % 100 == 0) result = false;
    else if(year % 4 == 0) result = true;

    if(result) console.log(year+ ": Leap Year");
    else console.log(year+ ": Non Leap Year");
}