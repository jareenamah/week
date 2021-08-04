let date = new Date();
let dayOfWeekNumber = date.getDay();
let nameOfDay;
let quote;

switch(dayOfWeekNumber){
    case 0: 
        nameOfDay = 'Sunday';
        quote = 'Time to chillax!';
        break;
    case 1:
        nameOfDay = 'Monday';
        quote = 'Boring day';
        break;
    case 2:
        nameOfDay = 'Tuesday';
        quote = 'Its tuesday!';
        break;
    case 3:
        nameOfDay = 'Wednesday';
        quote = 'Its wednesday.';
        break;
    case 4:
        nameOfDay = 'Thursday';
        quote = 'The weekend is almost here...';
        break;
    case 5:
        nameOfDay = 'Friday';
        quote = 'Weekend is here!';
        break;
    case 6:
        nameOfDay = 'Saturday';
        quote = 'Time to party!';
        break;

}
let weekdayDiv = document.getElementById('weekday');
weekdayDiv.innerHTML = `${nameOfDay}`;

//Display quote
let quoteDiv = document.getElementById('phrase');
quoteDiv.innerHTML = `${quote}`


