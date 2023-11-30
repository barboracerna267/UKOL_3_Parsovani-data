/*Bez použití knihovny Day.js napište funkci parseDate, která na vstupu obdrží řetězec obsahující datum ve formátu DD.MM.YYYY a vrátí objekt s jednotlivýnu částmi zadaného data. Příklad použití:

parseDate('12.03.2015'); // → { day: 12, month: 3, year: 2015 }
parseDate('06.04.2021'); // → { day: 6, month: 4, year: 2021 }*/

  const parseDate = (longDate) => {
    const day = longDate.slice(0,2)
    const month = longDate.slice(3,5)
    const year = longDate.slice(6,10)
    const dateParts = {
        day: Number(day),
        month: Number(month),
        year: Number(year)
      };
  
    return dateParts;
  }
  
  const longDate = prompt('Zadejte datum ve formátu DD.MM.YYYY:')
  const dateParts = parseDate(longDate)
  
  document.body.innerHTML = `{ day: ${dateParts.day}, month: ${dateParts.month}, year: ${dateParts.year} }`
  
    /* původní řešení:
  const parseDate = '15.11.2023';
  
  const day = Number(parseDate.slice(0,2));
  const month = Number(parseDate.slice(3,5));
  const year = Number(parseDate.slice(6,10));
  
  
  document.body.innerHTML += 'day: ' + day + ',' + ' month: ' + month + ',' + ' year: ' + year 
  
  */