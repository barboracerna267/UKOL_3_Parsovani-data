
const parseDate = '15.11.2023';

const day = Number(parseDate.slice(0,2));
const month = Number(parseDate.slice(3,5));
const year = Number(parseDate.slice(6,10));


document.body.innerHTML += 'day: ' + day + ',' + ' month: ' + month + ',' + ' year: ' + year 