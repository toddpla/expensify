// const person = {
//   // name: 'Todd',
//   age: 27,
//   location: {
//     city: 'Shrewsbury',
//     temp: 92
//   }
// };
//
// const {name:firstName ='Annonymous', age} = person;
// console.log(`${firstName} is ${age}`);
//
// const {city, temp: temperature} = person.location;
//
// if (person.location.city && person.location.city) {
//   console.log(`It's ${temperature} in ${city}`)
// }


const book = {
  title: 'Wgo is in the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
}

const {name: publisherName = 'Self-Published'} = book.publisher

console.log(publisherName);


//
// Array Destructuring
//

const address = [];

const [, , state = 'New York'] = address;

console.log(`You are in ${state}`);

const item = ['Coffee (hot)', '£2.00', '£2.50', '2.75']

const [coffee, , medium, ] = item;

console.log(`A mediium ${coffee} costs ${medium}`)
