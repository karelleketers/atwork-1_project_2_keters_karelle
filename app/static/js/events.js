/* const fetch = require('node-fetch');

const countriesPromise = fetch('https://www.pgm.gent/data/gentsefeesten/events_500.json', {})
.then((response) => {
  return response.json();
})
.then((jsonData) => {
  console.log(jsonData);
}); */

/* const app = 
    {   id: '81fccee9-2b4a-4985-b911-1d3c63ec90b0',
    slug: 'is-dit-nu-later-20-00',
    title: 'Is dit nu later',
    description: 'Als liefde zoveel jaren kan duren, dan moet het echt wel liefde zijn \r\n' +
      'Ondanks de vele kille uren, de domme fouten en de pijn\r\n' +
      '\r\n' +
      'Twee koppels brengen samen de avond door. Een etentje met de buren. Gewoon en alledaags. Of is het meer dan dat? Intriges, bekentenissen, frustraties, lachen, huilen, zingen, dansen en kussen. En altijd die ene vraag: is dit nu later?\r\n' +
      '\r\n' +
      'Tekst: Sherolyn Vandenbossche\r\n' +
      'Regie: Dirk Lajoie\r\n' +
      'Acteurs: Sarah Coene, Jonas Dick, Sam Neirynck & Berdien Van Nieuwenhuyze \r\n' +
      'Koor: Sofie Piens, Sherolyn Vandenbossche, Delphine Van den Bossche & Amber Van de Veire',
    image: {
      full: 'https://data.stad.gent/explore/dataset/gentse-feesten-evenementen-2019/files/864556d6e1a440432fde4bec63fab4ae/download',
      thumb: 'https://data.stad.gent/explore/dataset/gentse-feesten-evenementen-2019/files/864556d6e1a440432fde4bec63fab4ae/300'
    }}
console.log(app.image.full); */


app = [{
    image: 1,
    category: ['Circus',],
}, {
    image: null,
    category: ['Circus', 'Paarden']
}]

/* if (app[0].category.forEach(el => {console.log(el); console.log(el == 'Circus'); if (el == 'Circus') {return true}})) {console.log('yes')}
else (console.log('no')) */
/* var pass = false;
if (app[0].category.forEach(el => {el == 'Circus'})) {console.log('yes')}
else (console.log('no'))  */

app[0].category.forEach(el => {if (el == 'Circus') {pass=true}})
if (pass) {console.log('yes')};
